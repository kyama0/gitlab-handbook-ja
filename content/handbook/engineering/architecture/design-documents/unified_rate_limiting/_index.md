---
title: "統合レート制限アーキテクチャ"
description: "labkit を通じてアプリケーションレベルのレート制限を 3 つのフェーズ（アプリケーションの統合、設定の外部化、動的な外部サービス）で統合するための技術設計。"
status: ongoing
creation-date: "2026-04-30"
authors: [ "@reprazent" ]
coaches: [ "@andrewn" ]
dris: [ "@reprazent", "@donnaalexandra" ]
owning-stage: "~devops::platforms"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/unified_rate_limiting/
upstream_sha: 9164688669f5bd36ff8345a38c17f82ffc321821
lastmod: 2026-06-18T11:28:17+02:00
translated_at: "2026-06-20T21:10:03Z"
translator: claude
stale: false
model: claude-opus-4-7
---

<!-- vale gitlab.FutureTense = NO -->

{{< engineering/design-document-header >}}

## 要約 {#summary}

GitLab のアプリケーションレベルのレート制限には、すべての実装（RackAttack、ApplicationRateLimiter、および将来のサービス）にわたって機能する単一の設定モデルが必要です。このドキュメントでは、共有 SDK として [labkit](https://gitlab.com/gitlab-org/labkit) を使い、3 つのフェーズでそこに到達する方法を説明します。

1. 既存のレート制限（RackAttack、ApplicationRateLimiter）を破壊的変更なしに labkit 経由でルーティングします。設定は引き続きデータベースから取得するか、アプリケーションから渡します。
2. labkit が読み込む設定ファイルを追加します。ファイル内のルールはアプリケーションのデフォルトを上書きします。フォーマットは [LabKit Configuration Management](../labkit_configuration/) の protobuf スキーマに従います。
3. 識別子に基づき、リクエストごとにルールを返す外部サービスを追加します。これによって顧客ごと・ティアごとのカスタマイズが可能になります。

これは [Next Rate Limiting Architecture](../rate_limiting/) ブループリントと [Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) 設計ドキュメントの上に構築されています。実装は [the Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) で追跡されています。

## 動機 {#motivation}

GitLab アプリケーションのレート制限は、RackAttack、ApplicationRateLimiter、およびいくつかの小さな実装に分散しています。それぞれが独自の設定メカニズム、独自のカウント方式、独自の可観測性のあり方を持っています。これは実際には、すべてのレート制限を同じ方法で設定できず、ドライランやバイパスの挙動がまちまちで、新しいエンドポイントが制限なしに出荷され、インシデント時に何が、なぜスロットリングされているのかを誰もすぐに把握できないことを意味します。

[Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) ドキュメントは、段階的なアプローチを説明しています。フェーズ 1（エッジネットワーク）は完了しています。このドキュメントは、フェーズ 2（アプリケーションレベルの統合）の技術設計を扱い、フェーズ 3（設定の外部化と動的サービス）の概要を示します。

## フェーズ 1: アプリケーションレベルの統合 {#phase-1-application-level-unification}

すべてのアプリケーションレート制限は `labkit-ruby` の単一の API を経由します。呼び出し元（rack ミドルウェアまたはアプリケーションコード）は識別子を構築し、それをルールのセットとともに labkit に渡し、結果を受け取ります。既存の設定（ApplicationSettings、環境変数、ハードコードされたデフォルト）は引き続き機能します。呼び出し元は自身の設定を解決し、それを渡します。

*アンロックされること:* アプリケーション全体で制限を定義し観測する、一貫した単一の方法。ルールの追加や変更には依然としてコード変更とデプロイが必要ですが、すべての制限が同じように振る舞い、同じように計装されるようになります。古い制限は移行され、新しい制限は自動的に同じ恩恵を受けます。

### 1.1 labkit レート制限 API {#11-the-labkit-rate-limiting-api}

`Labkit::RateLimit::Limiter` がメインのエントリポイントです。レート制限のチェックポイントごとに 1 つ構築し（リクエストごとではなく起動時に）、再利用します。内部の `Evaluator` はキャッシュされます。

```ruby
limiter = Labkit::RateLimit::Limiter.new(
  name: "rack_request",
  rules: [...]
)

result = limiter.check(identifier)
```

`name` はすべての Redis カウンターキーの先頭に付加されるため、サービス内の異なる limiter がカウンターを共有することは決してありません。limiter 名はアプリケーションごとの静的な設定であり、そのサービスの `available_limiters`（フェーズ 2）で宣言されるため、同じサービス内の 2 つの limiter が誤って衝突することはありません。

名前はサービスをまたいで重複してもかまいません。`rack_request` は複数のサービスに存在しうるものであり、それは無害です。各サービスは自身の Redis ストレージ（GitLab Rails の場合は専用のレート制限用 Redis）でカウントするため、名前の共有がカウンターの共有を意味することは決してありません。

### 1.2 言語 SDK {#12-language-sdks}

SDK は Ruby 固有のものではありません。サポートされる各言語は、同じモデルを持つネイティブの SDK を備えます。limiter を一度構築し、リクエストごとに識別子を構築し、`check` を呼び出して、その結果に応じて動作します。このドキュメントの例は簡潔さのために Ruby を使っていますが、Go の API もそれを反映するべきです。どちらの SDK も同じ設定ファイル（フェーズ 2）を読み込み、同じ外部サービス（フェーズ 3）と通信するため、一度定義したルールは、どの言語が呼び出しても同じことを行います。

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

Ruby SDK は、アプリケーションのエッジにあるミドルウェアに `429` をレンダリングさせることを好む呼び出し箇所のために、例外を発生させる `check!` という便利メソッドも提供します。Rails の最初のイテレーションでは、呼び出し箇所で結果とレスポンスコードを自分たちで処理し（[1.6](#16-result-object) を参照）、呼び出し箇所が許す場合に `check!` を採用します。

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

設定を通じてではなくプログラム的にルールを定義することは、ルールではなく例外であるべきです。しかし、これに関する設定をデータベースに持っているかもしれないセルフマネージドの構成を壊さないために、これをサポートする必要があります。

### 1.3 識別子 {#13-identifier}

識別子は、呼び出し元がリクエストについて知っている情報を使って構築するキーと値のハッシュです。limiter が異なれば、その形も異なります。

**Rack ミドルウェア:**

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

`<anonymous>` は山括弧を使っているため、実在のユーザー名と衝突することはありません。未認証のルールは `user: "<anonymous>"` でマッチし、`[:ip]` でカウントします。認証済みのルールはその値にはマッチしないため、フォールバックとして機能し、`[:user]` でカウントします。

### 1.4 ルールとマッチング {#14-rules-and-matching}

各ルールは以下を持ちます。

- **`name`** — Redis キー、ログ、メトリクスで使われる安定した識別子
- **`match`** — ルールが適用されるために、識別子にすべて存在していなければならないキーと値のペア。`Matcher` オブジェクトを介して等価マッチングと正規表現マッチングをサポートします（[#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855)）。Matcher の設計は、言語をまたいだ YAML のラウンドトリップ可能性を保証するために、明示的な型マーカー（`{ regex: "..." }`）を使います。
- **`characteristics`** — Redis カウンターキーを導出するために使われる識別子のキー。limiter 名は常に先頭に付加されます。
- **`limit`** — しきい値。静的な整数にも、データベース由来の値のための callable（チェック時に解決される）にもできます。
- **`period_s`** — 時間ウィンドウ（秒）。これも callable にできます。
- **`action`** — ルールが行うこと。`limit`、`log`、または `skip`（1.4 を参照）。

### 1.5 アクションのセマンティクス {#15-action-semantics}

各ルールには、それが何を行うかを表す `action` があります。呼び出し元に返される結果は、その結果（呼び出し元が何をすべきか）を表します。

| ルールのアクション | 何をするか | 超過? | 結果アクション | 終端? |
|---|---|---|---|---|
| `limit` | 制限に対してカウントする | いいえ | `allow` | いいえ — 次のルールへ続行 |
| `limit` | 制限に対してカウントする | はい | `block` | はい — 評価を停止 |
| `log` | 制限に対してカウントする（可観測性のみ） | いいえ | `allow` | いいえ — 続行 |
| `log` | 制限に対してカウントする（可観測性のみ） | はい | `allow` | いいえ — 続行 |
| `skip` | カウントしない（バイパス） | 該当なし | `allow` | はい — 評価を停止 |

終端アクションはルールの評価を停止します。非終端アクションは次にマッチするルールへ続行します。

単一の limiter に複数の `:limit` ルールがある場合、リクエストが通過するにはそれらすべてが合格しなければなりません（例えば、組織ごとの制限とユーザーごとの制限）。`:log` ルールは、その後に続く `:limit` ルールに影響を与えることなく、より低いしきい値をシャドウテストできます。リストの先頭にある `:skip` ルールはバイパスを処理します。

ルールは順番に評価されます。より具体的なルールを、より具体的でないルールの前に置きます。

> **実装上の注記:** 現在の labkit 実装は、より古い命名（`:block`、`:log`、`:allow`）を使っていますが、この設計モデルに合わせて改名される予定です。挙動上のセマンティクス（[#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) による非終端の `:log`）はすでに実装されています。アクションモデル全体の洗練は [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) で追跡されています。

### 1.6 結果オブジェクト {#16-result-object}

結果は、結果（outcome）と解決された値を持ちます。

```ruby
result = limiter.check(identifier)

result.action           # :allow or :block — what the caller should do
result.exceeded?        # whether the count exceeded the limit
result.rule             # the last evaluated Rule object (rule.action has the configured action)
result.error?           # true if Redis was unavailable (fail-open)
result.resolved_limit   # the resolved limit as Integer
result.resolved_period_s  # the resolved period in seconds as Integer
```

結果の処理は呼び出し元の責任です。例えば以下のようにします。

```ruby
result = limiter.check(identifier)
case result.action
when :block then render_429
when :allow then # proceed
end
```

最終的には、labkit は一般的なケース向けのデフォルトハンドラーを出荷するべきです。`RateLimit-*` ヘッダー付きで 429 を返す rack ミドルウェア、gRPC インターセプター、Sidekiq ミドルウェアです。これらは、エンドポイントごとのチューニングなしに暴走する消費を防ぐ、汎用的なリソーススコープの制限（例えば、ユーザーごとの db_duration_s、ユーザーごとの gitaly スコア）にとっても自然な置き場所です。それまでは、呼び出し元が自分たちで結果を処理します。

### 1.7 設定のパススルー {#17-configuration-passthrough}

私たちはセルフマネージドのインストールを壊すわけにはいきません。そのため、設定は呼び出し箇所で渡されます。呼び出し元は既存のソース（ApplicationSettings、環境変数、ハードコードされたデフォルト）から制限を解決し、それらをルールとして labkit に渡します。

ルール上の `limit` と `period_s` は callable にできます。これにより、ルールオブジェクトを再構築することなく、データベース由来の設定をチェック時に解決できます。

```ruby
Rule.new(
  name: "authenticated_api",
  limit: -> { ApplicationSetting.current.throttle_authenticated_api_requests_per_period },
  period_s: -> { ApplicationSetting.current.throttle_authenticated_api_period_in_seconds },
  characteristics: [:user],
  action: :limit
)
```

セルフマネージドと GitLab.com は引き続き機能します。callable は、これまでと同じ設定から読み取ります。誰かが明示的に再設定しない限り、どの制限も変わりません。

計画では、`ApplicationRateLimiter` の現在の `rate_limits` ハッシュを、唯一の信頼できる情報源として静的な labkit の `Limiter` オブジェクトに置き換えます（[#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054)）。

最終的な状態では、データベースをレート制限のホットパスから取り除きますが、管理者向け Web UI を取り除くわけではありません。クリックオペレーションを好む管理者はそれを維持できます。変わるのは UI の書き込み先です。limiter がリクエストごとに読み取る `ApplicationSettings` の行ではなく、UI は Redis にルールオブジェクトを書き込み、labkit がそれをルールソースとして読み取ります（[2.4](#24-redis-backed-rules-web-ui-configuration) を参照）。GitLab.com は設定ファイルと外部サービスに依存し、セルフマネージドは UI-over-Redis のパスを得ます。既存のデータベース値を Redis ストアに移行するマイグレーションも伴います。

より広範な設定の進化は [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) で追跡されています。

### 1.8 移行: ApplicationRateLimiter（Stage 2a） {#18-migration-applicationratelimiter-stage-2a}

フィーチャーフラグの背後で、`ApplicationRateLimiter.throttled?` は内部のカウント戦略の代わりに labkit の `Limiter` に委譲します。公開 API は変わりません。コントローラーとサービスは、これまでどおり `.throttled?` を呼び出し続けます。

私たちは 5 〜 10 個のレート制限キーのコホート単位で移行します。各キーは 2 つのフィーチャーフラグを得ます。`_use_labkit_<key>`（シャドウモード）と `_<key>_enforce`（実施）です。シャドウ検証では、実施に切り替える前に、24 時間で 0.5% 未満の判定の乖離が必要です。

- [#28808](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28808) — 反復可能なプロセスを伴う、移行全体を取りまとめる Issue
- [#28803](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28803) — コホート 1（5 キー: `pipelines_create`、`notes_create`、`search_rate_limit`、`users_get_by_id`、`user_sign_in`）
- [#28809](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28809) — コホート 2（残りの IncrementPerAction キー）
- [#28810](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28810) — コホート 3（`.peek` の呼び出し元、labkit の `Limiter#peek` でブロックされている）
- [#28811](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28811) — コホート 4（IncrementPerActionedResource、Set 戦略でブロックされている）
- [#28812](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28812) — コホート 5（IncrementResourceUsagePerAction、float コスト戦略でブロックされている）
- [#28876](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28876) — ロールアウト後のフィーチャーフラグのクリーンアップ
- [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) — `rate_limits` ハッシュを静的な labkit Limiter オブジェクトに置き換える

### 1.9 移行: RackAttack（Stage 2b） {#19-migration-rackattack-stage-2b}

新しいミドルウェアが既存の RackAttack ミドルウェアと並んで動作します。RackAttack は引き続き実施を担います。新しいミドルウェアは、ログモードで開始して並行して動作します。

2 つの limiter があります。

1. **`rack_request`** — 一般的なすべてのスロットル（API、web、git、packages）。認証済みと未認証は、`<anonymous>` センチネルと異なる characteristics（`[:ip]` と `[:user]`）を介して、ルール内で処理されます。
2. **`rack_request_protected_paths`** — 保護されたパスのスロットルのみ。これらは一般的なスロットルと重複する（保護された API パスへの POST は両方を発火させる）ため、別の limiter を介して独立したカウンターが必要です。

4 つではなく 2 つの limiter にする理由:

- 認証/未認証の区別は characteristic（何でカウントするか）であって、limiter の境界ではない
- Git のスロットルは API/web のスロットルと相互排他的である
- フィーチャーフラグが少ない（8 個ではなく 4 個）
- 豊富な識別子を持つ汎用 limiter は、後で外部設定を注入しやすくする（[#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853)）

[#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) で追跡されています。

### 1.10 可観測性 {#110-observability}

**Prometheus メトリクス** — カウンターメトリクスは、非終端のルールチェーンをカバーするために 2 つの粒度に分割されます。

| メトリクス | 種類 | ラベル | 目的 |
|---|---|---|---|
| `gitlab_labkit_rate_limiter_calls_total` | Counter | `rate_limiter`, `result` | `check` 呼び出しごとに 1 回インクリメント。低カーディナリティ。レート制限全体の健全性。 |
| `gitlab_labkit_rate_limiter_rule_evaluations_total` | Counter | `rate_limiter`, `rule`, `action`, `result`, `exceeded` | 評価されたルールごとに 1 回インクリメント。非終端チェーン内のすべてのルールを捕捉。 |
| `gitlab_labkit_rate_limiter_errors_total` | Counter | `rate_limiter` | Redis 障害のカウンター（フェイルオープンの可観測性）。 |
| `gitlab_labkit_rate_limiter_limit` | Gauge (`:max`) | `rate_limiter`, `rule` | 設定されたしきい値。 |
| `gitlab_labkit_rate_limiter_period_seconds` | Gauge (`:max`) | `rate_limiter`, `rule` | 設定された期間。 |

> **実装上の注記:** 現在の labkit 実装は `gitlab_labkit_rate_limiter_calls_total`（ラベル `rate_limiter`、`rule`、`action`）と、`errors_total` および 2 つの gauge（[#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) で実装）のみを出力します。limiter ごととルール評価ごとのメトリクスへの分割は、アクションモデルの洗練（[#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052)）と一緒に、協調した破壊的変更として出荷されます。

**追加の可観測性作業:**

- [#28799](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28799) — 既存のリクエストごとのログメッセージにレート制限の状態を含める
- [#28831](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28831) — Rate Limiting Overview ダッシュボードを更新する
- [#28832](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28832) — デフォルトの SLI アラート向けにメトリクスカタログに登録する
- [#28807](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28807) — 移行のための Redis クラスターのヘッドルーム調査
- [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) — Redis 操作を単一の Lua EVAL 呼び出しに統合する

### 1.11 コストを考慮したレート制限 {#111-cost-aware-rate-limiting}

`GET /api/v4/user` と複雑な GraphQL クエリは同じものではありませんが、単純なリクエストカウンターはそれらを同等に扱います。`check` の `cost:` パラメータを使うと、代わりに実際のリソース消費量でカウントできます。

```ruby
result = limiter.check(identifier)                         # default cost: 1
result = limiter.check(identifier, cost: db_duration_s)    # cost = actual DB time
```

rack ミドルウェアはこれを使って、ルート名前空間ごとにデータベース時間を制限できます。各リクエストの完了後に、実際にかかったコストを計上します。

```ruby
limiter = RESOURCE_LIMITERS[:db_utilization]
result = limiter.check(
  { root_namespace: request.root_namespace, user: request.user },
  cost: request.db_duration_s
)
```

次のようなルールとともに:

```ruby
Rule.new(
  name: "db_seconds_per_namespace",
  characteristics: [:root_namespace],
  limit: 300,      # 300 seconds of DB time per period
  period_s: 60,
  action: :limit
)
```

characteristic はスコープ（ユーザーごと、プロジェクトごと、名前空間ごと）を選択します。コストは何を計測するかを選択します。同じパターンは、gitaly 呼び出しの時間、オブジェクトストレージのバイト数、sidekiq ジョブの重みにも適用されます。

作業を行う前にコストがわからない場合は、まず `peek` します。

```ruby
result = limiter.peek(identifier)
if result.action == :block
  return error("rate limited, retry after #{result.reset_at}")
end

cost = do_expensive_work

limiter.check(identifier, cost: cost)
```

これは、1 つ余分な操作を通過させてしまう可能性があります（peek は「OK」と言ったが、コストが予想より大きかった場合）。その次のリクエストはブロックされます。

内部的には、`cost:` は Lua EVAL 内で `INCRBYFLOAT` を使います（[#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827)）。`1` を指定した `INCRBYFLOAT` は `INCR` と同じように振る舞うため、整数コストと浮動小数点コストで別々のカウント戦略はありません。

## フェーズ 2: 外部化された設定 {#phase-2-externalized-configuration}

labkit は、アプリケーションが提供するデフォルトを上書きする設定を読み込みます。フォーマットは [LabKit Configuration Management](../labkit_configuration/) 設計ドキュメントに従います。protobuf スキーマが構造を定義し、シリアライズ形式として YAML を使います。スキーマが共有されているため、同じファイルが `labkit-ruby`、`labkit-go`、およびそれらを消費するサービスで同じように読み込まれます。

*アンロックされること:* 設定を通じたルールの追加と変更。ルールの変更が、アプリケーションのフルビルドとデプロイなしにロールアウトされます。

### 2.1 2 種類の設定 {#21-two-kinds-of-configuration}

設定ドキュメントは 2 種類あります。

1. **利用可能な limiter** は契約であり、運用担当者（Production Engineering）が所有します。どのレート制限が存在するか、どの識別子のプロパティでマッチおよびカウントできるか、各 limiter が出荷するデフォルトルールを列挙します。アプリケーション開発者はこれに貢献します。自分たちのコードが公開する limiter を宣言し、デフォルトを提案しますが、契約は運用担当者側でレビューおよび所有されます。これはアプリケーションとともに出荷され、他のツールが読み取ることができます。
2. **レート制限** は、デフォルトを上書きまたは追加するルールを保持します。アプリケーションのリリースなしに変更できます。

labkit は rate-limits ドキュメントを available-limiters ドキュメントに照らして検証します。ルールは、アプリケーションが実際に公開するプロパティでのみマッチまたはカウントでき、存在する limiter のみを対象にできます。

rate-limits ドキュメントは 2 つのレベルで記述されます。運用担当者はグローバルルールを設定します。すべてのリクエストに適用されるデフォルトと、プラットフォーム全体の保護です。これらのデフォルトルールは、アプリケーションをまたいで共有される limiter（Rack ミドルウェア、gRPC インターセプターなど）のために定義されます。

サービスオーナーは、自分がオンコールを担当するサービスの制限を引き上げまたは引き下げるために、limiter にスコープされたルールを追加します。チームは自分たちのサービスの制限を自由に管理できます。Infrastructure は、共有 Redis やダウンストリームサービスへの圧力の増加など、変更が横断的な影響を持つ場合に意見を提供します。

チームが自由にできない 1 つのことは、limiter のバイパスです。フェーズ 1 では既存のバイパスを引き続き機能させなければならないため、フレームワークは `skip` ルールを許可しますが、バイパスはそれを追加するチーム以上のものに影響します。私たちは、誰が `skip` ルールを追加できるかをガードレールで制御し、無チェックで導入されないようにします。ガードレールがどのようなもの（レビュー、許可リスト、検証ステップ）になるかは、実装時の決定事項です。

### 2.2 利用可能な limiter {#22-available-limiters}

このドキュメントは、各 limiter が何を、いつ実施するか、そのデフォルトルールは何か、その値のいずれかがデータベースから来るかを宣言します。データベース由来の値は、characteristic（プランごとの制限）に結びつけることも、インスタンス全体のグローバルにすることもできます。

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

`default_rule` は、アプリケーションがデフォルトで実施する内容を文書化します。そのスキーマはレート制限ルール（後述）のフィールドのサブセットであり、その `match` は常に空（`{}`）です。なぜなら、デフォルトはその limiter が見るすべてのリクエストに適用されるからです。`has_database_configuration: true` は、デフォルトの `limit`/`period_s` がチェック時にデータベースから解決されること（[1.7](#17-configuration-passthrough) の callable）を示します。

Labkit に汎用 limiter を実装する際、これらのデフォルト設定は copier テンプレート内に置くことができます。そのため、それらを変更すると、各消費サービスを次回の `copier update` 時に更新する [copier マイグレーション](https://copier.readthedocs.io) を出荷することになります。新しい共有 limiter（Rack ミドルウェアや gRPC インターセプター内のものなど）は、各サービスが独自に書くのではなくテンプレートからデフォルトを得て、それらのデフォルトに対する後の変更も同じようにロールアウトされます。`rate_limits` ファイルもテンプレートから生成されます。

対応する proto は以下のとおりです。検証ルールはスキーマ内に存在しますが、例を読みやすく保つためにここでは少しだけ追加しています。これらの `.proto` ファイルは [`labkit-spec`](https://gitlab.com/gitlab-org/quality/tooling/labkit-spec/) 内に置かれます。

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

ここで、運用担当者とサービスオーナーがルールを設定します。各ルールは、適用する limiter、それがカバーするリクエストを選択する `match`、および取るべきアクションを指定します。

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

ファイル内のルールは、アプリケーションが提供するルールの **前** に評価されます。末尾の終端 `skip` ルール（`match: {}` を介してすべてにマッチする）と組み合わせることで、ファイルが limiter の唯一の信頼できる情報源になります。`skip` に到達したリクエストは、アプリケーションのデフォルトを完全にバイパスします。フェーズ 3 では、外部サービスが返すルールがファイルのルールの前に来ます。

どのフィールドが必須かは `action` に依存します。`limit`/`log` ルールには `limit` と `period_s` が必要であり、`skip` ルールにはどちらも不要です。proto 内の 1 つの CEL 制約がそれを強制します。

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

`match` の値は labkit の `Matcher` オブジェクトと同じ明示的な型マーカーを使うため、等価マッチングと正規表現マッチングが YAML と両方の SDK でラウンドトリップします。

```yaml
match:
  root_namespace_plan: free                  # equality
  path:
    regex: "^/api/v\\d+/projects"            # regex
```

上記の `rate_limits.yaml` が読み込まれると、プランごとの `pipelines_create` ルールがアプリケーションのデフォルトルールの前に評価されます。Free プランのプロジェクトは 100/10 分、Ultimate は 1000/10 分を得ます。末尾の `skip` は、ファイルが存在すればアプリケーションのデフォルトが決して適用されないことを保証します。

### 2.4 Redis で裏打ちされたルール（Web UI 設定） {#24-redis-backed-rules-web-ui-configuration}

一部のセルフマネージド管理者は、ディスク上のファイルからではなく、引き続き管理者向け Web UI からレート制限を編集したいと考えています。私たちは、データベースをホットパスに戻すことなくそれをサポートできます。UI が管理するルールを、[2.3](#23-rate-limits) と同じルールスキーマを使って Redis に保存します。

UI が書き込み、labkit が読み取ります。管理者がルールを保存すると、それは limiter ごとの Redis キー（labkit がカウンターに既に使っているのと同じ Redis インスタンス）にシリアライズされます。labkit は、limiter が初めてヒットしたときに Redis からその limiter のルールを読み込み、その後しばらくの間メモリにキャッシュします。リクエストごとに Redis を読むわけではなく、起動時にのみ読むわけでもありません。キャッシュが期限切れになると、その limiter を通る次のリクエストが Redis から再読み込みするため、管理者の変更はおおよそキャッシュ期間内に反映されます。正確な期間は、これを構築する際に決める実装の詳細です。

これらのルールは、アプリケーションのデフォルトの上に重ねるのではなく、それを置き換えます。Redis に limiter のルールがあれば labkit はそれを使い、なければアプリケーションの組み込みデフォルトが適用されます。すべての limiter はアプリから設定可能なまま保たれ、何も設定されていないときはデフォルトがフォールバックになります。

これはフェーズ 3 の外部サービスのローカル版です。「このリクエストのルールを返す」という同じ考え方を、リモートサービスの代わりに Redis キーで裏打ちしたものです。私たちはこれをセルフマネージドに提供したいと考えていますが、これはフェーズ 3 をブロックするものではなく、両者は独立して出荷できます。

**データベースからの移行。** マイグレーションは既存の `ApplicationSettings` のスロットル値を読み取り、それぞれを `Rule` オブジェクトに変換し、limiter ごとにキー付けされた Redis ストアに書き込みます。limiter の値が Redis に存在するようになれば、`ApplicationSettings` を読み取る [1.7](#17-configuration-passthrough) の呼び出し箇所の callable は、その limiter について廃止できます。

### 2.5 優先順位モデル {#25-precedence-model}

複数の設定ソースが、順番に評価されます。

1. **設定ファイルのルール** — labkit が YAML ファイルから読み込む
2. **Redis 由来のルール** — 管理者向け Web UI が書き込む（セルフマネージド）
3. **アプリケーションのデフォルト** — フォールバックとしてアプリケーションとともに出荷される

```plaintext
┌─────────────────────────────────┐
│ 設定ファイルのルール（最優先）  │  ← labkit が YAML から読み込み
├─────────────────────────────────┤
│ Redis で裏打ちされたルール（Web UI） │  ← 管理者 UI が書き込み
├─────────────────────────────────┤
│ アプリケーションのデフォルト（フォールバック） │  ← アプリケーションとともに出荷
└─────────────────────────────────┘
```

これは次のことを意味します。

- GitLab.com は、アプリケーションのデフォルトを上書きする、プラットフォームレベルのルール（設定ファイルから）を持てる
- セルフマネージドの管理者は Web UI からルールを管理できる。それらのルールは、カバーする limiter についてアプリケーションのデフォルトを置き換える
- ファイルも Redis ルールも設定しないセルフマネージドのインストールは、アプリケーションのデフォルトにフォールバックするため、挙動は変わらない
- リクエストにマッチするプラットフォームルールはデフォルトに勝ち、コード変更なしに顧客ごと・ティアごとの上書きを可能にする
- より具体的なサービスオーナーのルールは、運用担当者のグローバルルールの前に並べられるため、チームはグローバルなデフォルトに触れることなく自分のサービスの制限をチューニングできる
- `skip` ルールは、より上位のティアが下位のティアをバイパスできるようにする。これが、追加にガードレールが設けられている理由である（[2.1](#21-two-kinds-of-configuration) を参照）

### 2.6 デプロイ {#26-deployment}

- **セルフマネージド:** 設定ファイルは任意です。存在しない場合、既存の挙動は変わりません。管理者はカスタムレート制限のために設定ファイルを提供するか、Web UI からルールを管理できます（Redis に保存）。
- **GitLab.com:** 設定ファイルは Helm チャートまたは ops 設定を介してデプロイされます。プラットフォームレベルのルールは Production Engineering が管理します。
- **Dedicated:** 設定ファイルは Dedicated の運用担当者が管理します。テナントごとのカスタマイズはファイルを通じて技術的に可能ですが、推奨されません。
- **Cells:** セルごとの設定は、別々の設定ファイルを通じて可能です。

## フェーズ 3: 動的な外部サービス {#phase-3-dynamic-external-service}

外部サービスが、リクエストの識別子に基づいて、レート制限ルールを動的に提供します。これが、各ケースの静的な設定ファイルを保守することなく、顧客ごと・ティアごと・名前空間ごとのカスタマイズを得る方法です。

*アンロックされること:* 異なる顧客のための異なるルール、およびデプロイなしでの変更のほぼ即時のロールアウト。

### 3.1 サービス設計 {#31-service-design}

このサービスは、フェーズ 1 の識別子を受け取り、そのリクエストのルールを返します。これらは設定ファイル、Redis 由来のルール、アプリケーションのデフォルトに優先します。

```plaintext
┌─────────────────────────────────────┐
│ 外部サービスのルール（最優先）     │  ← 動的、リクエストごと
├─────────────────────────────────────┤
│ 設定ファイルのルール                │  ← 静的、起動時に読み込み
├─────────────────────────────────────┤
│ Redis で裏打ちされたルール（Web UI）│  ← 管理者 UI が書き込み
├─────────────────────────────────────┤
│ アプリケーションのデフォルト（フォールバック） │  ← アプリケーションとともに出荷
└─────────────────────────────────────┘
```

このサービスは、レート limiter 名と識別子を受け取ります。これらを合わせると、サービスが判定を下すのに必要なすべて（レート制限のチェックポイント、リクエストタイプ、ユーザー、名前空間、プラン、エンドポイント）を運びます。

サービスは limiter 名をキーにするため、同じ名前が異なるサービスで異なるものを意味することを考慮しなければなりません。これは汎用 limiter（Rack ミドルウェア、gRPC インターセプター）で最も重要です。そこでは `rack_request` が意図的にあらゆる場所で再利用されます。サービスは limiter 名だけでなく呼び出し元のサービスでもルールをスコープするため、あるサービス向けの動的ルールが、たまたま名前を共有する別のサービスに漏れることはありません。

### 3.2 ケイパビリティ {#32-capabilities}

名前空間ごと・プランごとのしきい値は、設定ファイル（`namespace_plan` や `root_namespace` でマッチするルール）を通じて、フェーズ 2 で既に可能です。外部サービスは、静的な設定では提供できない機能を追加します。

- 現在の負荷や不正利用パターンに基づく動的な調整
- GitLab の外部で管理される契約やエンタイトルメントに結びついた顧客ごとの制限
- 設定ファイルを再デプロイせずに変わるルール
- terraform を通じて設定可能。アプリケーションのレート制限を Cloudflare やその他のエッジルールと同じリポジトリに保つ

### 3.3 フェイルオープンとキャッシュ {#33-fail-open-and-caching}

サービスに到達できない場合、labkit は同じ優先順位スタックを下にフォールバックします。設定ファイルのルール、次に Redis 由来のルール、次にアプリケーションのデフォルトです（フェイルオープン）。キャッシュ（識別子ごと、名前空間ごと、プランごと）が、リクエストごとのオーバーヘッドを削減します。

ルールはメモリにキャッシュされるため、変更は行われた瞬間ではなくキャッシュ期間内に伝播します。その期間が、新しいルールがどれだけ速くロールアウトされるかの実質的な限界です。時間ではなく分の単位です。正確な値は、実装時のチューニングの決定事項です。

### 3.4 GATE との関係 {#34-relationship-to-gate}

識別子は拡張可能です。[GATE](../new_auth_stack/) は `workload_identity` と `ambient_credential` という ID タイプを導入しますが、これらは識別子内の単なる新しいキーです。外部サービスは、labkit 自体を変更することなくそれらを使えます。

## 主な設計上の決定 {#key-design-decisions}

| 決定 | 根拠 | 参照 |
|---|---|---|
| 非終端の `:log` を伴うルール評価 | 実施を妨げることなく新しいしきい値をシャドウテストする | [#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) |
| アクションモデル: `limit`/`log`/`skip` | 実施、可観測性、バイパスのセマンティクスをきれいに分離する | [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) |
| 結果の `action` は結果（outcome）であり、呼び出し元がそれを処理する | labkit はフレームワークではなくライブラリである。どう応答するかは呼び出し元が決める | — |
| 未認証リクエストのための `<anonymous>` センチネル | 山括弧のないセンチネルが実在のユーザー名と衝突するのを避ける。ルールレベルの認証/未認証の区別を可能にする | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| TTL ベースの固定ウィンドウ（divmod のクロック整列に対して） | 決定保留中。TTL はよりシンプルで境界バーストを避ける。divmod は現在の ApplicationRateLimiter に一致する | [#28830](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28830) |
| Redis プールの `.with` インターフェース | Puma のマルチスレッドワーカー下での適切なコネクションプールの使用 | — |
| RackAttack には 4 つではなく 2 つの limiter | 認証/未認証は characteristic であって limiter の境界ではない。フラグが少ない。外部設定に対して将来性がある | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| Redis 操作のための Lua EVAL | INCR + EXPIRE + TTL を 1 回のラウンドトリップで。アトミック。Ruby のオーバーヘッドが少ない | [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) |
| パターンマッチングのための Matcher オブジェクト | YAML 互換（明示的な `{ regex: "..." }` 型マーカー）。言語横断的 | [#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855) |
| `rate_limits` ハッシュを置き換える静的 Limiter オブジェクト | 唯一の信頼できる情報源。DB 由来の値のための callable。リクエストごとのアロケーションなし | [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) |
| Prometheus gauge のマルチプロセスモード `:max` | Puma ワーカー下での N 個の重複コピーを避ける。すべてのワーカーが同じ設定値を設定する | [#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) |
| 設定の進化: callable → 設定ファイル → 外部サービス | 後方互換な移行パス。どのフェーズでもセルフマネージドへの破壊的変更がない | [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) |
| Web UI のルールをデータベースではなく Redis に保存 | セルフマネージドのクリックオペレーションを維持しつつ、データベースをホットパスから外す。カウンターに既に使っている Redis インスタンスを再利用する。アプリのデフォルトを Redis フォールバックで置き換える | — |
| 運用担当者が契約とグローバルルールを所有し、サービスオーナーが自分の limiter をチューニングする | チームは、オンコールを担当するサービスの制限を管理する自律性を得る。横断的な変更には Infrastructure が意見を出す。バイパスはガードレール下に保たれる | — |

## 参考情報 {#references}

### 設計ドキュメント {#design-documents}

- [Next Rate Limiting Architecture](../rate_limiting/) — 制限を定義し実施するフレームワークのための、2022 年の元のブループリント
- [Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) — 段階的なロードマップ（フェーズ 1: エッジネットワーク、フェーズ 2: アプリケーション、フェーズ 3: インターフェース）
- [LabKit Configuration Management](../labkit_configuration/) — labkit サービスのための protobuf ファーストの設定スキーマ

### 外部参考情報 {#external-references}

- [Cloudflare rate limiting rules — supported actions](https://developers.cloudflare.com/ruleset-engine/rules-language/actions/#supported-actions) — アクションセマンティクスモデルのインスピレーション

### 追跡情報 {#tracking}

- [Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) — すべての実装作業の親エピック
- [Configuration evolution](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) — callable、優先順位、静的設定に関する設計議論
