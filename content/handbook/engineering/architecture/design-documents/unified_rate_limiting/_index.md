---
title: "統一レート制限アーキテクチャ"
description: "アプリケーションレベルのレート制限を labkit 経由で統一するための技術設計。アプリケーション統一、外部化された設定、動的な外部サービスの 3 フェーズで進めます。"
status: ongoing
creation-date: "2026-04-30"
authors: [ "@reprazent" ]
coaches: [ "@andrewn" ]
dris: [ "@reprazent", "@donnaalexandra" ]
owning-stage: "~devops::platforms"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/unified_rate_limiting/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
translated_at: "2026-06-20T15:28:19Z"
translator: codex
stale: false
lastmod: "2026-06-18T11:28:17+02:00"
---

<!-- vale gitlab.FutureTense = NO -->

{{< engineering/design-document-header >}}

## 概要

GitLab のアプリケーションレベルのレート制限には、すべての実装（RackAttack、ApplicationRateLimiter、将来のサービス）で機能する単一の設定モデルが必要です。このドキュメントでは、共有 SDK として [labkit](https://gitlab.com/gitlab-org/labkit) を使用し、3 つのフェーズでそこに到達する方法を説明します。

1. 既存のレート制限（RackAttack、ApplicationRateLimiter）を、破壊的変更なしに labkit 経由にします。設定は引き続きデータベースから取得するか、アプリケーションから渡されます。
2. labkit が読み込む設定ファイルを追加します。ファイル内のルールはアプリケーションのデフォルトを上書きします。フォーマットは [LabKit 設定管理](../labkit_configuration/) の protobuf スキーマに従います。
3. identifier に基づいて、リクエストごとにルールを返す外部サービスを追加します。これにより、顧客ごと、Tier ごとのカスタマイズが可能になります。

これは [次世代レート制限アーキテクチャ](../rate_limiting/)のブループリントと、[レート制限設定の簡素化](../rate_limiting_simplification/)デザインドキュメントを土台にしています。実装は [Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) で追跡されています。

## モチベーション

GitLab アプリケーションのレート制限は、RackAttack、ApplicationRateLimiter、いくつかの小さな実装に分散しています。それぞれが独自の設定メカニズム、独自のカウント、独自の可観測性を持っています。実際には、すべてのレート制限を同じ方法で設定できないこと、ドライランやバイパスの挙動がばらつくこと、新しいエンドポイントが制限なしでリリースされること、インシデント時に何がなぜ throttle されているのかを誰もすばやく判断できないことを意味します。

[レート制限設定の簡素化](../rate_limiting_simplification/)ドキュメントでは、フェーズ化されたアプローチを説明しています。Phase 1（エッジネットワーク）は完了しています。このドキュメントでは、Phase 2（アプリケーションレベルの統一）の技術設計を扱い、Phase 3（外部化された設定と動的サービス）の概要を示します。

## Phase 1: アプリケーションレベルの統一

すべてのアプリケーションレート制限は、`labkit-ruby` の単一 API を通ります。呼び出し元（rack middleware またはアプリケーションコード）は identifier を構築し、一連のルールとともに labkit に渡し、結果を受け取ります。既存の設定（ApplicationSettings、環境変数、ハードコードされたデフォルト）はそのまま機能します。呼び出し元は自身の設定を解決し、それを渡します。

*解放されること:* アプリケーション全体で制限を定義し、観測する一貫した方法。ルールの追加や変更には引き続きコード変更とデプロイが必要ですが、すべての制限が同じ方法で動作し、同じ方法で計装されるようになります。古い制限は移行され、新しい制限は自動的に同じ利点を得ます。

### 1.1 labkit レート制限 API

`Labkit::RateLimit::Limiter` がメインのエントリーポイントです。レート制限 checkpoint ごとに 1 つ（リクエストごとではなく起動時に）構築し、再利用します。内部の `Evaluator` はキャッシュされます。

```ruby
limiter = Labkit::RateLimit::Limiter.new(
  name: "rack_request",
  rules: [...]
)

result = limiter.check(identifier)
```

`name` はすべての Redis counter key の先頭に付与されるため、1 つのサービス内の異なる limiter が counter を共有することはありません。Limiter 名はアプリケーションごとの静的設定で、そのサービスの `available_limiters`（Phase 2）で宣言されるため、同じサービス内の 2 つの limiter が誤って衝突することはありません。

名前はサービスをまたいで繰り返せます。`rack_request` が複数のサービスに存在しても問題ありません。各サービスは自身の Redis storage（GitLab Rails の場合は専用のレート制限 Redis）でカウントするため、共有された名前が共有 counter を意味することはありません。

### 1.2 言語 SDK

SDK は Ruby 固有ではありません。サポート対象の各言語は、同じモデルのネイティブ SDK を持ちます。limiter を一度構築し、リクエストごとに identifier を構築し、`check` を呼び出し、結果に基づいて動作します。このドキュメントの例では簡潔さのために Ruby を使用しますが、Go API もそれに対応する必要があります。両方の SDK は同じ設定ファイル（Phase 2）を読み込み、同じ外部サービス（Phase 3）と通信するため、一度定義されたルールは、どの言語から呼び出されても同じことを行います。

<table>
<thead>
<tr><th width="50%">Ruby (<code>labkit-ruby</code>)</th><th width="50%">Go (<code>labkit/v2/ratelimit</code>)</th></tr>
</thead>
<tbody>
<tr>
<td>

```ruby
limiter = Labkit::RateLimit::Limiter.new(
  name: "rack_request",
  rules: [
    Labkit::RateLimit::Rule.new(
      name: "authenticated_api",
      characteristics: [:user],
      limit: 200,
      period_s: 60,
      action: :limit
    )
  ]
)

result = limiter.check(
  user: "user:123",
  request_type: "api"
)

case result.action
when :block then render_429
when :allow then # proceed
end
```

Ruby SDK には、アプリケーションの境界にある middleware に `429` のレンダリングを任せたい call site のために、例外を発生させる `check!` という便利メソッドもあります。最初の Rails イテレーションでは、call site 側で結果とレスポンスコードを処理し（[1.6](#16-result-object) を参照）、call site が許すところで `check!` を採用します。

</td>
<td>

```go
limiter := ratelimit.New(ratelimit.Config{
    Name: "rack_request",
    Rules: []ratelimit.Rule{
        {
            Name:            "authenticated_api",
            Characteristics: []string{"user"},
            Limit:           200,
            Period:          60 * time.Second,
            Action:          ratelimit.ActionLimit,
        },
    },
})

result, err := limiter.Check(ctx, ratelimit.Identifier{
    "user":         "user:123",
    "request_type": "api",
})

switch result.Action {
case ratelimit.ActionBlock:
    renderTooManyRequests(w)
case ratelimit.ActionAllow:
    // proceed
}
```

</td>
</tr>
</tbody>
</table>

設定ではなくプログラムでルールを定義することは、原則ではなく例外であるべきです。ただし、このサポートは必要です。これがないと、この用途のためにデータベースに設定を持っている可能性がある self-managed 設定を壊してしまうためです。

### 1.3 Identifier

identifier は、呼び出し元がリクエストについて知っている情報で構築する key-value hash です。limiter ごとに異なる形を持ちます。

**Rack middleware:**

```ruby
{
  request_type: "api",
  user: "user:123",        # or "<anonymous>" for unauthenticated
  ip: "203.0.113.42",
  namespace: 345,
  namespace_plan: "premium",
  endpoint: "GET /api/v4/:id/merge_requests"
}
```

**ApplicationRateLimiter:**

```ruby
{
  user_id: 42,
  project_id: 789,
  namespace_id: 345
}
```

`<anonymous>` は角括弧を使用するため、実際のユーザー名と衝突できません。未認証ルールは `user: "<anonymous>"` にマッチし、`[:ip]` でカウントします。認証済みルールはこの値にマッチしないため、fallback として動作し、`[:user]` でカウントします。

### 1.4 ルールとマッチング

各ルールは以下を持ちます。

- **`name`** — Redis key、ログ、メトリクスで使用される安定した識別子
- **`match`** — ルールを適用するために identifier にすべて存在している必要がある key-value pair。等価マッチングと、`Matcher` object を介した regex マッチングをサポートします（[#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855)）。Matcher 設計では、言語をまたいで YAML round-trip 可能であることを保証するために、明示的な type marker（`{ regex: "..." }`）を使用します。
- **`characteristics`** — Redis counter key の導出に使用される identifier key。limiter 名は常に先頭に付与されます。
- **`limit`** — 閾値。静的な整数、またはデータベース由来の値のための callable（check 時に解決）にできます。
- **`period_s`** — 秒単位の時間 window。これも callable にできます。
- **`action`** — ルールが何をするか。`limit`、`log`、`skip` のいずれかです（1.4 を参照）。

### 1.5 action のセマンティクス

各ルールは、それが何をするかを説明する `action` を持ちます。呼び出し元に返される結果は、その outcome、つまり呼び出し元が何をすべきかを説明します。

| ルール action | 何をするか | 超過? | 結果 action | 終端? |
|---|---|---|---|---|
| `limit` | 制限に対してカウントする | いいえ | `allow` | いいえ — 次のルールへ継続 |
| `limit` | 制限に対してカウントする | はい | `block` | はい — 評価を停止 |
| `log` | 制限に対してカウントする（可観測性のみ） | いいえ | `allow` | いいえ — 継続 |
| `log` | 制限に対してカウントする（可観測性のみ） | はい | `allow` | いいえ — 継続 |
| `skip` | カウントしない（bypass） | N/A | `allow` | はい — 評価を停止 |

終端 action はルール評価を停止します。非終端 action は次にマッチするルールへ継続します。

単一 limiter 内に複数の `:limit` ルールがある場合、リクエストを通すにはそれらすべてが成功する必要があります（例: org ごとの制限と user ごとの制限）。`:log` ルールは、その後の `:limit` ルールに影響を与えずに、低い閾値を shadow-test できます。リストの先頭にある `:skip` ルールは bypass を処理します。

ルールは順序どおりに評価されます。より具体的なルールを、より一般的なルールより前に置いてください。

> **実装メモ:** 現在の labkit 実装では以前の命名（`:block`、`:log`、`:allow`）を使用していますが、この設計モデルに合わせて名前変更されます。振る舞いのセマンティクス（[#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) による非終端 `:log`）はすでに実装済みです。完全な action model の refinement は [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) で追跡されています。

### 1.6 結果オブジェクト {#16-result-object}

結果には outcome と解決済みの値が含まれます。

```ruby
result = limiter.check(identifier)

result.action           # :allow or :block — what the caller should do
result.exceeded?        # whether the count exceeded the limit
result.rule             # the last evaluated Rule object (rule.action has the configured action)
result.error?           # true if Redis was unavailable (fail-open)
result.resolved_limit   # the resolved limit as Integer
result.resolved_period_s  # the resolved period in seconds as Integer
```

呼び出し元は結果を処理する責任があります。例を示します。

```ruby
result = limiter.check(identifier)
case result.action
when :block then render_429
when :allow then # proceed
end
```

最終的には、labkit が一般的なケース向けのデフォルト handler を提供するべきです。`RateLimit-*` header を付けて 429 を返す rack middleware、gRPC interceptor、Sidekiq middleware などです。これらは、endpoint ごとの tuning なしに暴走する消費を防ぐ、汎用的な resource scoped limit（例: user ごとの db_duration_s、user ごとの gitaly score）を置く自然な場所でもあります。それまでは、呼び出し元が結果を自分で処理します。

### 1.7 設定のパススルー {#17-configuration-passthrough}

self-managed installation を壊すことはできません。そのため、設定は call site で渡されます。呼び出し元は既存の source（ApplicationSettings、環境変数、ハードコードされたデフォルト）から制限を解決し、ルールとして labkit に渡します。

ルール上の `limit` と `period_s` は callable にできます。これにより、データベース由来の設定を、rule object を再構築せずに check 時に解決できます。

```ruby
Rule.new(
  name: "authenticated_api",
  limit: -> { ApplicationSetting.current.throttle_authenticated_api_requests_per_period },
  period_s: -> { ApplicationSetting.current.throttle_authenticated_api_period_in_seconds },
  characteristics: [:user],
  action: :limit
)
```

self-managed と GitLab.com は引き続き機能します。callable はこれまでと同じ設定を読み取ります。誰かが明示的に再設定しない限り、制限は変わりません。

計画では、`ApplicationRateLimiter` の現在の `rate_limits` hash を、single source of truth としての静的な labkit `Limiter` object に置き換えます（[#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054)）。

最終状態では、データベースはレート制限の hot path から外れますが、admin web-UI は取り上げません。click-ops を好む管理者はそれを維持できます。変わるのは UI の書き込み先です。limiter がすべてのリクエストで読む `ApplicationSettings` row ではなく、UI は Redis に rule object を書き込み、labkit はそれを rule source として読みます（[2.4](#24-redis-backed-rules-web-ui-configuration) を参照）。GitLab.com は設定ファイルと外部サービスに依存します。self-managed には Redis 経由 UI の path を提供し、既存のデータベース値を Redis store に移す migration を用意します。

より広い設定の進化は [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) で追跡されています。

### 1.8 移行: ApplicationRateLimiter（Stage 2a）

フィーチャーフラグの背後で、`ApplicationRateLimiter.throttled?` は内部のカウント戦略ではなく labkit `Limiter` に委譲します。public API は変わりません。Controller と service はこれまでどおり `.throttled?` を呼び出し続けます。

5 〜 10 個のレート制限 key の cohort ごとに移行します。各 key には 2 つのフィーチャーフラグを用意します。`_use_labkit_<key>`（shadow mode）と `_<key>_enforce`（enforcement）です。enforcement に切り替える前に、shadow validation は 24 時間で 0.5% 未満の decision divergence を満たす必要があります。

- [#28808](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28808) — 反復可能なプロセスを含む全体の migration Issue
- [#28803](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28803) — Cohort 1（5 keys: `pipelines_create`、`notes_create`、`search_rate_limit`、`users_get_by_id`、`user_sign_in`）
- [#28809](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28809) — Cohort 2（残りの IncrementPerAction key）
- [#28810](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28810) — Cohort 3（`.peek` caller、labkit の `Limiter#peek` で block）
- [#28811](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28811) — Cohort 4（IncrementPerActionedResource、Set strategy で block）
- [#28812](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28812) — Cohort 5（IncrementResourceUsagePerAction、float-cost strategy で block）
- [#28876](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28876) — ロールアウト後のフィーチャーフラグ cleanup
- [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) — `rate_limits` hash を静的な labkit Limiter object に置き換える

### 1.9 移行: RackAttack（Stage 2b）

新しい middleware は既存の RackAttack middleware と並行して実行されます。RackAttack は enforcement を継続します。新しい middleware は log mode から始めて、並行して実行されます。

limiter は次の 2 つです。

1. **`rack_request`** — すべての一般的な throttle（API、web、git、packages）。認証済みと未認証の区別は、`<anonymous>` sentinel と異なる characteristics（`[:ip]` と `[:user]`）を使い、ルール内で処理されます。
2. **`rack_request_protected_paths`** — protected-path throttle のみ。これらは一般的な throttle と重なります（protected API path への POST は両方を発火します）ので、別の limiter による独立した counter が必要です。

4 つではなく 2 つの limiter にする理由は次のとおりです。

- auth/unauth の区別は characteristic（何でカウントするか）であり、limiter boundary ではありません
- Git throttle は API/web throttle と相互排他的です
- フィーチャーフラグが少なくなります（8 ではなく 4）
- 豊かな identifier を持つ汎用 limiter により、後で外部設定を注入しやすくなります（[#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853)）

[#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) で追跡されています。

### 1.10 可観測性

**Prometheus metrics** — counter metrics は、非終端ルールチェーンをカバーするために 2 つの粒度に分割されます。

| メトリクス | 型 | ラベル | 目的 |
|---|---|---|---|
| `gitlab_labkit_rate_limiter_calls_total` | Counter | `rate_limiter`, `result` | `check` call ごとに 1 回 increment。低 cardinality。レート制限全体の健全性。 |
| `gitlab_labkit_rate_limiter_rule_evaluations_total` | Counter | `rate_limiter`, `rule`, `action`, `result`, `exceeded` | 評価されたルールごとに 1 回 increment。非終端 chain 内のすべてのルールを捕捉します。 |
| `gitlab_labkit_rate_limiter_errors_total` | Counter | `rate_limiter` | Redis failure counter（fail-open observability）。 |
| `gitlab_labkit_rate_limiter_limit` | Gauge (`:max`) | `rate_limiter`, `rule` | 設定された閾値。 |
| `gitlab_labkit_rate_limiter_period_seconds` | Gauge (`:max`) | `rate_limiter`, `rule` | 設定された period。 |

> **実装メモ:** 現在の labkit 実装は `gitlab_labkit_rate_limiter_calls_total`（label は `rate_limiter`、`rule`、`action`）と、`errors_total`、2 つの gauge（[#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) で実装）だけを emit します。per-limiter と per-rule-evaluation metrics への分割は、action model refinement（[#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052)）とともに、調整された breaking change として ship されます。

**追加の可観測性作業:**

- [#28799](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28799) — 既存のリクエストごとのログメッセージにレート制限状態を含める
- [#28831](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28831) — Rate Limiting Overview dashboard を更新する
- [#28832](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28832) — デフォルト SLI alert のために metrics catalog に登録する
- [#28807](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28807) — migration のための Redis cluster headroom 調査
- [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) — Redis operation を単一の Lua EVAL call に統合する

### 1.11 コストを考慮したレート制限

`GET /api/v4/user` と複雑な GraphQL query は同じものではありませんが、単純なリクエスト counter はそれらを同等に扱います。`check` の `cost:` parameter により、実際の resource consumption によってカウントできます:

```ruby
result = limiter.check(identifier)                         # default cost: 1
result = limiter.check(identifier, cost: db_duration_s)    # cost = actual DB time
```

rack middleware はこれを使って、root namespace ごとの database time を制限できます。各リクエストの完了後に、実際にかかったコストを charge します。

```ruby
limiter = RESOURCE_LIMITERS[:db_utilization]
result = limiter.check(
  { root_namespace: request.root_namespace, user: request.user },
  cost: request.db_duration_s
)
```

以下のようなルールを使います。

```ruby
Rule.new(
  name: "db_seconds_per_namespace",
  characteristics: [:root_namespace],
  limit: 300,      # 300 seconds of DB time per period
  period_s: 60,
  action: :limit
)
```

characteristic は scope（user ごと、project ごと、namespace ごと）を選びます。cost は何を測定するかを選びます。同じ pattern は、gitaly call duration、object storage bytes、sidekiq job weight にも適用できます。

作業を行う前に cost がわからない場合は、まず `peek` します。

```ruby
result = limiter.peek(identifier)
if result.action == :block
  return error("rate limited, retry after #{result.reset_at}")
end

cost = do_expensive_work

limiter.check(identifier, cost: cost)
```

これにより、追加の operation が 1 つ通る可能性があります（peek は「ok」と言ったが、cost は想定より大きかった）。その後の次のリクエストは block されます。

内部的には、`cost:` は Lua EVAL 内で `INCRBYFLOAT` を使用します（[#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827)）。`1` を指定した `INCRBYFLOAT` は `INCR` と同じように振る舞うため、integer cost と float cost のために別々のカウント戦略はありません。

## Phase 2: 外部化された設定

Labkit は、アプリケーションが提供するデフォルトを上書きする設定を読み込みます。フォーマットは [LabKit 設定管理](../labkit_configuration/)デザインドキュメントに従います。protobuf スキーマが構造を定義し、YAML がシリアライズ形式になります。スキーマが共有されるため、同じファイルは `labkit-ruby`、`labkit-go`、それを消費するサービスで同じように読み込まれます。

*解放されること:* 設定を通じたルールの追加と変更。ルール変更は、アプリケーション全体の build と deploy なしに rollout されます。

### 2.1 2 種類の設定 {#21-two-kinds-of-configuration}

2 つの設定ドキュメントがあります。

1. **Available limiters** は operator（Production Engineering）が所有する contract です。どの rate limiter が存在するか、どの identifier property に match して count できるか、各 limiter がどの default rule を持って ship されるかを一覧にします。アプリケーション開発者もこれに貢献します。自分たちのコードが公開する limiter を宣言し、default を提案しますが、contract は operator 側でレビューされ所有されます。これはアプリケーションとともに ship され、他の tooling が読み取れます。
2. **Rate limits** は、デフォルトを上書きまたは追加するルールを保持します。これはアプリケーション release なしに変更できます。

Labkit は rate-limits ドキュメントを available-limiters ドキュメントに対して検証します。ルールは、アプリケーションが実際に公開する property にのみ match または count でき、存在する limiter のみを target にできます。

rate-limits ドキュメントは 2 つのレベルで書かれます。operator は global rule を設定します。すべてのリクエストに適用される default と、platform-wide protection です。これらの default rule は、アプリケーション間で共有される limiter（Rack middleware、gRPC interceptor など）向けに定義されます。

Service owner は、自分たちが on-call で担当する service の limit を上げ下げするために、limiter に scoped された rule を追加します。チームは自身の service の limit を管理する自由を持ちます。Infrastructure は、共有 Redis や downstream service への圧力増加など、横断的な影響がある変更に input します。

チームが自由にできないことの 1 つは limiter の bypass です。Phase 1 では既存の bypass を維持する必要があるため、framework は `skip` rule を許可しますが、bypass はそれを追加するチーム以外にも影響します。`skip` rule を追加できる人に guardrail を設け、無チェックで導入されないようにします。その guardrail がどういう形になるか（review、allowlist、validation step）は、実装時の判断です。

### 2.2 Available limiters

このドキュメントは、各 limiter が何を、いつ enforce するか、default rule は何か、値のいずれかがデータベース由来かどうかを宣言します。データベース由来の値は、characteristic（plan ごとの limit）に結び付けることも、instance-wide global にすることもできます。

```yaml
# available_limiters.yaml — shipped with the application
available_limiters:
  pipelines_create:
    description: "Rate limit enforced before a pipeline is allowed to be created"
    available_properties: # values the identifier can carry, usable in match/characteristics
      - project_path
      - username
      - root_namespace_path
      - root_namespace_plan
      - sha
    default_rule: # optional: documents the in-application default
      characteristics: [username, project_path, sha]
      limit: 10
      period_s: 60
      action: limit
    has_database_configuration: true
  user_sign_in:
    description: "Enforced before a session is created for a specific user"
    available_properties:
      - ip
      - username
    default_rule:
      characteristics: [username]
      limit: 5
      period_s: 600
      action: limit
```

`default_rule` は、アプリケーションがデフォルトで enforce する内容を文書化します。その schema は、下記の rate-limit rule の field の subset で、`match` は常に空（`{}`）です。default は limiter が見るすべてのリクエストに適用されるためです。`has_database_configuration: true` は、default の `limit`/`period_s` が check 時にデータベースから解決される（[1.7](#17-configuration-passthrough) の callable）ことを示します。

Labkit に汎用 limiter を実装する際、これらの default configuration は copier template に置けます。そのため変更時には、各 consuming service が次に `copier update` したときに更新する [copier migration](https://copier.readthedocs.io) を ship します。Rack middleware や gRPC interceptor 内のような新しい shared limiter は、各 service が個別に書くのではなく template から default を取得し、その default への後続変更も同じ方法で rollout されます。`rate_limits` file も template から生成されます。

以下は対応する proto です。validation rule は schema にありますが、例を読みやすく保つため、ここでは 2 つだけ追加しています。これらの `.proto` file は [`labkit-spec`](https://gitlab.com/gitlab-org/quality/tooling/labkit-spec/) に置かれます。

```proto
edition = "2026";
package gitlab.ratelimit.config.v1;

import "buf/validate/validate.proto";

message AvailableLimiters {
  map<string, LimiterSpec> available_limiters = 1
    [(buf.validate.field).map.min_pairs = 1];
}

message LimiterSpec {
  string description = 1 [(buf.validate.field).string.min_len = 1];
  repeated string available_properties = 2;
  DefaultRule default_rule = 3;          // optional
  bool has_database_configuration = 4;
}

message DefaultRule {
  repeated string characteristics = 1;
  uint32 limit = 2;
  uint32 period_s = 3;                   // seconds
  Action action = 4;
}

enum Action {
  ACTION_UNSPECIFIED = 0;
  ACTION_LIMIT = 1;
  ACTION_LOG = 2;
  ACTION_SKIP = 3;
}
```

### 2.3 レート制限 {#23-rate-limits}

operator と service owner はここでルールを設定します。各ルールは、適用先の limiter、対象リクエストを選択する `match`、実行する action を指定します。

```yaml
# rate_limits.yaml — global rules from operators, service-scoped rules from service owners
rate_limits:
  pipelines_create:
    - description: "pipelines per project per 10 minutes for free users"
      limit: 100
      period_s: 600
      action: limit
      characteristics: [project_path]
      match:
        root_namespace_plan: free
    - description: "pipelines per project per 10 minutes for ultimate users"
      limit: 1000
      period_s: 600
      action: limit
      characteristics: [project_path]
      match:
        root_namespace_plan: ultimate
    - description: "limit pipelines a single user can create per hour"
      limit: 60
      period_s: 3600
      action: limit
      characteristics: [username]
      match: {}
    - description: "skip any application-defined rules"
      action: skip
      match: {}
  user_sign_in:
    - description: "distinct users attempting to sign in from a single IP"
      limit: 10
      period_s: 3600
      characteristics: [ip]
      count_distinct: username
      match: {}
```

ファイル内のルールは、アプリケーションが提供するルールより**前**に評価されます。末尾の終端 `skip` rule（`match: {}` で everything に match）と組み合わせると、このファイルを limiter の single source of truth にできます。その `skip` に到達したリクエストは、アプリケーションの default を完全に bypass します。Phase 3 では、外部サービスから返されるルールがファイルのルールより前に来ます。

必須 field は `action` によって異なります。`limit`/`log` rule には `limit` と `period_s` が必要で、`skip` rule にはどちらも必要ありません。proto の 1 つの CEL constraint がこれを enforce します。

```proto
message RateLimits {
  map<string, RuleList> rate_limits = 1;
}

message RuleList {
  repeated Rule rules = 1;
}

message Rule {
  string description = 1;
  Action action = 2 [(buf.validate.field).required = true];
  repeated string characteristics = 3;
  map<string, MatchValue> match = 4;     // equality or { regex: "..." } markers
  optional uint32 limit = 5;
  optional uint32 period_s = 6;          // seconds
  string count_distinct = 7;             // count unique values of this property

  // limit and period_s are required unless the rule only skips (ACTION_SKIP = 3).
  option (buf.validate.message).cel = {
    id: "limit_requires_threshold"
    message: "limit and log rules require limit and period_s"
    expression: "this.action == 3 || (has(this.limit) && has(this.period_s))"
  };
}
```

`match` value は labkit の `Matcher` object と同じ明示的な type marker を使用するため、等価マッチングと regex マッチングは YAML と両 SDK をまたいで round-trip できます:

```yaml
match:
  root_namespace_plan: free                  # equality
  path:
    regex: "^/api/v\\d+/projects"            # regex
```

上記の `rate_limits.yaml` が読み込まれると、plan ごとの `pipelines_create` rule はアプリケーションの default rule より前に評価されます。Free plan project は 100/10min、Ultimate は 1000/10min になります。末尾の `skip` により、ファイルが存在する場合はアプリケーション default が適用されないことが保証されます。

### 2.4 Redis-backed rules（web-UI 設定） {#24-redis-backed-rules-web-ui-configuration}

self-managed の一部の管理者は、disk 上のファイルではなく admin web-UI からレート制限を編集し続けたいと考えています。データベースを hot path に戻さずに、それをサポートできます。[2.3](#23-rate-limits) と同じ rule schema を使用して、UI 管理のルールを Redis に保存します。

UI が書き込み、labkit が読み取ります。管理者がルールを保存すると、limiter ごとの Redis key（labkit が counter にすでに使用している同じ Redis instance）にシリアライズされます。labkit は、その limiter が初めて hit されたときに Redis から limiter のルールを読み込み、その後短時間 memory に cache します。リクエストごとに Redis を読むわけではなく、boot 時にだけ読むわけでもありません。cache が expire すると、その limiter を通る次のリクエストが Redis から再読み込みするため、管理者の変更はおおむね cache duration 内に反映されます。正確な duration は、これを構築する際に決める実装 detail です。

これらのルールは、アプリケーション default の上に layer されるのではなく、それを置き換えます。Redis に limiter のルールがあれば labkit はそれを使用し、なければアプリケーションの built-in default が適用されます。すべての limiter はアプリから設定可能なままで、何も設定されていない場合は default が fallback になります。

これは Phase 3 外部サービスの local version です。同じ「このリクエストの rule を返す」という考え方を、remote service ではなく Redis key を backend として実現します。self-managed に提供したいものですが、Phase 3 を block するものではなく、両者は独立して ship できます。

**データベースからの移行。** migration は既存の `ApplicationSettings` throttle value を読み取り、それぞれを `Rule` object に変換し、limiter ごとに key 付けされた Redis store に書き込みます。limiter の値が Redis に存在するようになったら、その limiter について `ApplicationSettings` を読む [1.7](#17-configuration-passthrough) の call-site callable は廃止できます。

### 2.5 優先順位モデル

複数の設定 source は、以下の順序で評価されます。

1. **Config-file rules** — labkit が YAML file から読み込むルール
2. **Redis-backed rules** — admin web-UI が書き込むルール（self-managed）
3. **Application defaults** — fallback としてアプリケーションとともに ship されるもの

```plaintext
┌─────────────────────────────────┐
│ Config file rules (highest)     │  ← Loaded by labkit from YAML
├─────────────────────────────────┤
│ Redis-backed rules (web-UI)     │  ← Written by the admin UI
├─────────────────────────────────┤
│ Application defaults (fallback) │  ← Shipped with the application
└─────────────────────────────────┘
```

つまり、次のようになります。

- GitLab.com は、アプリケーション default を上書きする platform-level rule（設定ファイル由来）を持てます
- self-managed 管理者は web-UI からルールを管理できます。それらのルールは、対象 limiter についてアプリケーション default を置き換えます
- file も Redis rule も設定しない self-managed installation は、アプリケーション default に fallback するため、挙動は変わりません
- リクエストに match する platform rule は default より優先され、コード変更なしに顧客ごと、Tier ごとの override が可能になります
- より具体的な service-owner rule は operator の global rule より前に並ぶため、チームは global default に触れずに自分たちの service の limit を tune できます
- `skip` rule は上位 Tier が下位 Tier を bypass できるようにします。そのため、これを追加することは guardrail されます（[2.1](#21-two-kinds-of-configuration) を参照）

### 2.6 デプロイ

- **Self-managed:** 設定ファイルは任意です。存在しない場合、既存の挙動は変わりません。管理者は custom rate limit のために設定ファイルを提供するか、web-UI からルールを管理できます（Redis に保存）。
- **GitLab.com:** 設定ファイルは Helm chart または ops configuration 経由でデプロイされます。platform-level rule は Production Engineering が管理します。
- **Dedicated:** 設定ファイルは Dedicated operator が管理します。file 経由の tenant ごとのカスタマイズは技術的には可能ですが、推奨されません。
- **Cells:** 個別の設定ファイルによる cell ごとの設定が可能です。

## Phase 3: 動的外部サービス

外部サービスは、リクエスト identifier に基づいてレート制限ルールを動的に提供します。これにより、それぞれのケースに静的な設定ファイルを維持せずに、顧客ごと、Tier ごと、namespace ごとのカスタマイズを実現できます。

*解放されること:* 顧客ごとに異なるルールと、デプロイなしのほぼ即時の変更 rollout。

### 3.1 サービス設計

サービスは Phase 1 の identifier を受け取り、そのリクエストのルールを返します。これらは設定ファイル、Redis-backed rule、アプリケーション default より優先されます。

```plaintext
┌─────────────────────────────────────┐
│ External service rules (highest)    │  ← Dynamic, per-request
├─────────────────────────────────────┤
│ Config file rules                   │  ← Static, loaded at startup
├─────────────────────────────────────┤
│ Redis-backed rules (web-UI)         │  ← Written by the admin UI
├─────────────────────────────────────┤
│ Application defaults (fallback)     │  ← Shipped with the application
└─────────────────────────────────────┘
```

サービスは rate limiter 名と identifier を受け取ります。この 2 つにより、サービスが判断に必要とするすべての情報、つまりレート制限 checkpoint、リクエスト type、user、namespace、plan、endpoint が渡されます。

サービスは limiter 名を key にするため、同じ名前が異なるサービスでは異なる意味を持つことを考慮する必要があります。これは、`rack_request` が意図的にあらゆる場所で再利用される汎用 limiter（Rack middleware、gRPC interceptor）で特に重要です。サービスは、呼び出し元 service と limiter 名の両方でルールを scope するため、ある service 向けの dynamic rule が、たまたま同じ名前を共有する別の service に漏れることはありません。

### 3.2 機能

namespace ごと、plan ごとの閾値は、設定ファイル（`namespace_plan` や `root_namespace` に match する rule）を通じて Phase 2 ですでに可能です。外部サービスは、静的設定では提供できない機能を追加します。

- 現在の負荷や abuse pattern に基づく動的な調整
- GitLab 外で管理される契約や entitlement に結び付いた顧客ごとの limit
- 設定ファイルを redeploy せずに変更される rule
- terraform 経由で設定でき、アプリケーション rate limit を Cloudflare や他の edge rule と同じ repository に保持できること

### 3.3 Fail-open と caching

サービスに到達できない場合、labkit は同じ優先順位 stack を下ります。設定ファイルの rule、Redis-backed rule、アプリケーション default の順です（fail-open）。caching（identifier ごと、namespace ごと、plan ごと）により、リクエストごとの overhead を減らします。

ルールは memory に cache されるため、変更は実行された瞬間ではなく cache duration 内に伝播します。その duration が、新しい rule の rollout 速度の実質的な上限です。何時間ではなく、数分です。正確な値は実装時の tuning decision です。

### 3.4 GATE との関係

identifier は拡張可能です。[GATE](../new_auth_stack/) は `workload_identity` と `ambient_credential` identity type を導入しますが、これらは identifier 内の新しい key にすぎません。外部サービスは labkit 自体を変更せずにそれらを使用できます。

## 主な設計判断

| 決定 | 根拠 | 参照 |
|---|---|---|
| 非終端 `:log` によるルール評価 | enforcement を妨げずに新しい閾値を shadow-test する | [#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) |
| Action model: `limit`/`log`/`skip` | enforcement、可観測性、bypass のセマンティクスを明確に分離する | [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) |
| 結果の `action` が outcome であり、呼び出し元が処理する | Labkit は library であって framework ではありません — 呼び出し元が応答方法を決めます | — |
| 未認証リクエストの `<anonymous>` sentinel | 角括弧なしの sentinel が実際のユーザー名と衝突することを避け、ルールレベルの auth/unauth 区別を可能にする | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| TTL ベースの fixed window（divmod clock-aligned との比較） | 未決定 — TTL はより単純で boundary-burst を避けます。divmod は現在の ApplicationRateLimiter と一致します | [#28830](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28830) |
| Redis pool `.with` interface | Puma multi-threaded worker で適切に connection pool を使用する | — |
| RackAttack に 4 つではなく 2 つの limiter | auth/unauth は characteristic であって limiter boundary ではありません。flag が少なく、将来の外部設定に備えられます | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| Redis operation の Lua EVAL | INCR + EXPIRE + TTL の single round-trip。atomic で Ruby overhead が少ない | [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) |
| pattern matching の Matcher object | YAML 互換（明示的な `{ regex: "..." }` type marker）。cross-language | [#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855) |
| `rate_limits` hash を置き換える静的 Limiter object | single source of truth。DB-backed value のための callable。リクエストごとの allocation なし | [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) |
| Prometheus gauge multiprocess mode `:max` | Puma worker 下で N 個の重複 copy を避けます。すべての worker が同じ設定値を set します | [#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) |
| 設定の進化: callable → 設定ファイル → 外部サービス | 後方互換な migration path。どの phase でも self-managed に破壊的変更なし | [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) |
| Web-UI rule はデータベースではなく Redis に保存 | self-managed の click-ops を維持しながら、データベースを hot path から外します。counter にすでに使用している Redis instance を再利用し、app default を Redis fallback で置き換えます | — |
| operator が contract と global rule を所有し、service owner が自身の limiter を tune する | チームは on-call で担当する service の limit を管理する autonomy を持ち、横断的な変更には infrastructure が input します。bypass は guardrail されたままです | — |

## 参考文献

### デザインドキュメント

- [次世代レート制限アーキテクチャ](../rate_limiting/) — limit を定義し enforce する framework のための、元の 2022 年の blueprint
- [レート制限設定の簡素化](../rate_limiting_simplification/) — フェーズ化された roadmap（Phase 1: edge network、Phase 2: application、Phase 3: interface）
- [LabKit 設定管理](../labkit_configuration/) — labkit service のための protobuf-first 設定 schema

### 外部参考資料

- [Cloudflare rate limiting rules — supported actions](https://developers.cloudflare.com/ruleset-engine/rules-language/actions/#supported-actions) — action semantics model の着想元

### 追跡

- [Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) — すべての実装作業の親 epic
- [Configuration evolution](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) — callable、precedence、static config に関する design discussion
