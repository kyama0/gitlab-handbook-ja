---
title: "統合レート制限アーキテクチャ"
description: "アプリケーションレベルのレート制限を labkit を通じて統合するための技術設計。アプリケーションの統合、設定の外部化、動的な外部サービスという 3 つのフェーズで進めます。"
status: ongoing
creation-date: "2026-04-30"
authors: [ "@reprazent" ]
coaches: [ "@andrewn" ]
dris: [ "@reprazent", "@donnaalexandra" ]
owning-stage: "~devops::platforms"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/unified_rate_limiting/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
lastmod: 2026-06-18T11:28:17+02:00
translated_at: "2026-06-18T21:09:08Z"
translator: claude
stale: false
---

<!-- vale gitlab.FutureTense = NO -->

{{< engineering/design-document-header >}}

## 概要

GitLab のアプリケーションレベルのレート制限には、すべての実装（RackAttack、ApplicationRateLimiter、そして将来のサービス）にわたって機能する単一の設定モデルが必要です。本ドキュメントでは、共有 SDK として [labkit](https://gitlab.com/gitlab-org/labkit) を使い、3 つのフェーズでそこに到達する方法を説明します。

1. 既存のレート制限（RackAttack、ApplicationRateLimiter）を、破壊的変更なしに labkit 経由でルーティングします。設定は依然としてデータベースから取得するか、アプリケーションが渡します。
2. labkit が読み込む設定ファイルを追加します。ファイル内のルールはアプリケーションのデフォルトを上書きします。フォーマットは [LabKit Configuration Management](../labkit_configuration/) の protobuf スキーマに従います。
3. 識別子に基づいてリクエストごとにルールを返す外部サービスを追加します。これにより、顧客ごと、ティアごとのカスタマイズが可能になります。

これは [Next Rate Limiting Architecture](../rate_limiting/) のブループリントと [Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) 設計ドキュメントを基礎としています。実装は [Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) で追跡されています。

## 動機

GitLab アプリケーションのレート制限は、RackAttack、ApplicationRateLimiter、およびいくつかの小規模な実装に分散しています。それぞれが独自の設定メカニズム、独自のカウント、独自の可観測性の仕組みを持っています。実際にはこれは、すべてのレート制限を同じ方法では設定できず、ドライランやバイパスの挙動がまちまちで、新しいエンドポイントが制限なしにリリースされ、インシデント発生時には何がスロットルされているのか、なぜなのかを誰も素早く把握できないことを意味します。

[Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) ドキュメントは、段階的なアプローチを説明しています。Phase 1（エッジネットワーク）は完了しています。本ドキュメントは Phase 2（アプリケーションレベルの統合）の技術設計を扱い、Phase 3（設定の外部化と動的サービス）の概要を示します。

## Phase 1: アプリケーションレベルの統合

すべてのアプリケーションのレート制限は、`labkit-ruby` の単一の API を通過します。呼び出し元（rack ミドルウェアまたはアプリケーションコード）は識別子を構築し、それをルールのセットとともに labkit に渡し、結果を受け取ります。既存の設定（ApplicationSettings、環境変数、ハードコードされたデフォルト）は引き続き機能します。呼び出し元は自身の設定を解決して渡します。

*実現すること:* アプリケーション全体で制限を定義し観測する、一貫した一つの方法。ルールの追加や変更には依然としてコード変更とデプロイが必要ですが、すべての制限が同じように振る舞い、同じように計装されるようになります。古い制限は移行され、新しい制限は自動的に同じ恩恵を受けます。

### 1.1 labkit のレート制限 API

`Labkit::RateLimit::Limiter` がメインのエントリポイントです。レート制限のチェックポイントごとに 1 つ構築し（リクエストごとではなく起動時に）、再利用します。内部の `Evaluator` はキャッシュされます。

```ruby
limiter = Labkit::RateLimit::Limiter.new(
  name: "rack_request",
  rules: [...]
)

result = limiter.check(identifier)
```

`name` はすべての Redis カウンターキーの先頭に付与されるため、サービス内の異なる limiter がカウンターを共有することはありません。limiter 名はそのサービスの `available_limiters`（Phase 2）で宣言される、アプリケーションごとの静的な設定であるため、同じサービス内の 2 つの limiter が誤って衝突することはありません。

名前はサービスをまたいで重複できます。`rack_request` は複数のサービスに存在しうるもので、これは無害です。各サービスは自身の Redis ストレージ（GitLab Rails の場合は専用のレート制限用 Redis）でカウントするため、名前を共有しても決してカウンターを共有することにはなりません。

### 1.2 言語別 SDK

SDK は Ruby 固有ではありません。サポートされる各言語は、同じモデルを持つネイティブ SDK を持ちます。limiter を 1 回構築し、リクエストごとに識別子を構築し、`check` を呼び出して、結果に応じて処理します。本ドキュメントの例は簡潔さのために Ruby を使用していますが、Go API もそれらをミラーするべきです。両 SDK は同じ設定ファイル（Phase 2）を読み込み、同じ外部サービス（Phase 3）と通信するため、一度定義したルールはどちらの言語が呼び出しても同じ動作をします。

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

Ruby SDK はまた、アプリケーションのエッジにあるミドルウェアに `429` をレンダリングさせることを好む呼び出し箇所のために、例外を発生させる `check!` という便利メソッドも提供します。最初の Rails イテレーションでは、結果とレスポンスコードを呼び出し箇所で自分たちで処理し（[1.6](#16-result-object) を参照）、呼び出し箇所が許す場合は `check!` を採用します。

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

設定を通じてではなくプログラム的にルールを定義することは、ルールではなく例外であるべきです。しかし、これに関する設定をデータベースに持っているかもしれないセルフマネージドの設定を壊さないために、これをサポートしなければなりません。

### 1.3 識別子

識別子は、リクエストについて分かっていることを使って呼び出し元が構築するキーと値のハッシュです。limiter が異なれば形も異なります。

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

`<anonymous>` は、実際のユーザー名と衝突しないように山括弧を使います。未認証のルールは `user: "<anonymous>"` でマッチし、`[:ip]` でカウントします。認証済みのルールはその値にはマッチしないため、フォールバックとして機能し、`[:user]` でカウントします。

### 1.4 ルールとマッチング

各ルールは以下を持ちます。

- **`name`** — Redis キー、ログ、メトリクスで使われる安定した識別子
- **`match`** — ルールが適用されるために識別子内にすべて存在しなければならないキーと値のペア。等価マッチングと、`Matcher` オブジェクトによる正規表現マッチングをサポートします（[#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855)）。Matcher の設計は、言語をまたいだ YAML のラウンドトリップ性を保証するために、明示的な型マーカー（`{ regex: "..." }`）を使用します。
- **`characteristics`** — Redis カウンターキーを導出するために使われる識別子のキー。limiter 名は常に先頭に付与されます。
- **`limit`** — 閾値。静的な整数、またはデータベース由来の値のための callable（チェック時に解決される）にできます。
- **`period_s`** — 秒単位の時間ウィンドウ。これも callable にできます。
- **`action`** — ルールが行う処理。`limit`、`log`、`skip` のいずれか（1.4 を参照）。

### 1.5 アクションのセマンティクス

各ルールは、それが行う処理を記述する `action` を持ちます。呼び出し元に返される結果は、その結末、つまり呼び出し元が行うべきことを記述します。

| ルールのアクション | 行う処理 | 超過したか | 結果のアクション | 終端か |
|---|---|---|---|---|
| `limit` | 制限に対してカウント | いいえ | `allow` | いいえ — 次のルールへ続行 |
| `limit` | 制限に対してカウント | はい | `block` | はい — 評価を停止 |
| `log` | 制限に対してカウント（可観測性のみ） | いいえ | `allow` | いいえ — 続行 |
| `log` | 制限に対してカウント（可観測性のみ） | はい | `allow` | いいえ — 続行 |
| `skip` | カウントしない（バイパス） | 該当なし | `allow` | はい — 評価を停止 |

終端アクションはルールの評価を停止します。非終端アクションは次のマッチするルールへ続行します。

1 つの limiter に複数の `:limit` ルールがある場合、リクエストが通過するにはそのすべてをパスする必要があります（例: 組織ごとの制限とユーザーごとの制限）。`:log` ルールは、それより後の `:limit` ルールに影響を与えることなく、より低い閾値をシャドウテストできます。リストの先頭にある `:skip` ルールはバイパスを処理します。

ルールは順番に評価されます。より具体的なルールを、より具体的でないルールの前に配置してください。

> **実装メモ:** 現在の labkit 実装は、この設計モデルに合わせてリネームされる予定の以前の命名（`:block`、`:log`、`:allow`）を使用しています。挙動のセマンティクス（[#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) による非終端の `:log`）はすでに実装されています。完全なアクションモデルの洗練は [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) で追跡されています。

### 1.6 結果オブジェクト

結果は、結末と解決された値を保持します。

```ruby
result = limiter.check(identifier)

result.action           # :allow or :block — what the caller should do
result.exceeded?        # whether the count exceeded the limit
result.rule             # the last evaluated Rule object (rule.action has the configured action)
result.error?           # true if Redis was unavailable (fail-open)
result.resolved_limit   # the resolved limit as Integer
result.resolved_period_s  # the resolved period in seconds as Integer
```

呼び出し元が結果を処理する責任を負います。例えば次のようにします。

```ruby
result = limiter.check(identifier)
case result.action
when :block then render_429
when :allow then # proceed
end
```

最終的には、labkit は一般的なケースのためのデフォルトハンドラーを提供するべきです。`RateLimit-*` ヘッダー付きで 429 を返す rack ミドルウェア、gRPC インターセプター、Sidekiq ミドルウェアなどです。これらは、エンドポイントごとのチューニングなしに暴走的な消費を防ぐ、汎用的なリソーススコープの制限（例: ユーザーごとの db_duration_s、ユーザーごとの gitaly スコア）にとっても自然な配置場所です。それまでは、呼び出し元が自分で結果を処理します。

### 1.7 設定のパススルー

セルフマネージドのインストールを壊すことはできません。そのため、設定は呼び出し箇所で渡されます。呼び出し元は既存のソース（ApplicationSettings、環境変数、ハードコードされたデフォルト）から制限を解決し、それらをルールとして labkit に渡します。

ルールの `limit` と `period_s` は callable にできます。これにより、データベース由来の設定がルールオブジェクトを再構築することなくチェック時に解決されます。

```ruby
Rule.new(
  name: "authenticated_api",
  limit: -> { ApplicationSetting.current.throttle_authenticated_api_requests_per_period },
  period_s: -> { ApplicationSetting.current.throttle_authenticated_api_period_in_seconds },
  characteristics: [:user],
  action: :limit
)
```

セルフマネージドと GitLab.com は引き続き機能します。callable は、これまでと同じ設定から読み込みます。誰かが明示的に再設定しない限り、制限は何も変わりません。

計画では、`ApplicationRateLimiter` の現在の `rate_limits` ハッシュを、唯一の信頼できる情報源としての静的な labkit `Limiter` オブジェクトで置き換えます（[#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054)）。

最終状態ではレート制限のホットパスからデータベースを取り除きますが、管理者用 Web UI を取り除くわけではありません。クリックオペレーションを好む管理者はそれを維持できます。変わるのは UI が書き込む先です。limiter がリクエストごとに読み込む `ApplicationSettings` の行ではなく、UI はルールオブジェクトを Redis に書き込み、labkit はそれをルールソースとして読み込みます（[2.4](#24-redis-backed-rules-web-ui-configuration) を参照）。GitLab.com は設定ファイルと外部サービスに依存し、セルフマネージドは UI-over-Redis のパスを得ます。既存のデータベース値を Redis ストアへ移行するマイグレーションも伴います。

より広範な設定の進化は [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) で追跡されています。

### 1.8 マイグレーション: ApplicationRateLimiter（Stage 2a）

フィーチャーフラグの背後で、`ApplicationRateLimiter.throttled?` は内部のカウント戦略の代わりに labkit `Limiter` に委譲します。パブリック API は変わりません。コントローラーとサービスはこれまでどおり `.throttled?` を呼び出し続けます。

レート制限キーを 5〜10 個のコホート単位で移行します。各キーは 2 つのフィーチャーフラグを得ます。`_use_labkit_<key>`（シャドウモード）と `_<key>_enforce`（強制適用）です。シャドウ検証では、強制適用に切り替える前に、24 時間で決定の乖離が 0.5% 未満であることが必要です。

- [#28808](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28808) — 反復可能なプロセスを持つ包括的なマイグレーション issue
- [#28803](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28803) — コホート 1（5 キー: `pipelines_create`、`notes_create`、`search_rate_limit`、`users_get_by_id`、`user_sign_in`）
- [#28809](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28809) — コホート 2（残りの IncrementPerAction キー）
- [#28810](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28810) — コホート 3（`.peek` の呼び出し元、labkit の `Limiter#peek` でブロックされている）
- [#28811](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28811) — コホート 4（IncrementPerActionedResource、Set 戦略でブロックされている）
- [#28812](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28812) — コホート 5（IncrementResourceUsagePerAction、float コスト戦略でブロックされている）
- [#28876](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28876) — ロールアウト後のフィーチャーフラグのクリーンアップ
- [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) — `rate_limits` ハッシュを静的な labkit Limiter オブジェクトで置き換える

### 1.9 マイグレーション: RackAttack（Stage 2b）

新しいミドルウェアが、既存の RackAttack ミドルウェアと並行して実行されます。RackAttack は強制適用を続けます。新しいミドルウェアは、ログモードから開始して並行して実行されます。

2 つの limiter:

1. **`rack_request`** — すべての一般的なスロットル（API、web、git、packages）。認証済みと未認証の区別は、`<anonymous>` センチネルと異なる characteristics（`[:ip]` と `[:user]`）を通じてルール内で処理されます。
2. **`rack_request_protected_paths`** — 保護されたパスのスロットルのみ。これらは一般的なスロットルと重複するため（保護された API パスへの POST は両方を発火させる）、別の limiter を介した独立したカウンターが必要です。

4 つではなく 2 つの limiter にした理由:

- 認証/未認証の区別は characteristic（何でカウントするか）であり、limiter の境界ではない
- Git のスロットルは API/web のスロットルと相互排他的である
- フィーチャーフラグが少なくて済む（8 つではなく 4 つ）
- 豊富な識別子を持つ汎用 limiter は、後から外部設定を注入しやすくする（[#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853)）

[#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) で追跡されています。

### 1.10 可観測性

**Prometheus メトリクス** — カウンターメトリクスは、非終端のルールチェーンをカバーするために 2 つの粒度に分割されています。

| メトリクス | 種類 | ラベル | 目的 |
|---|---|---|---|
| `gitlab_labkit_rate_limiter_calls_total` | Counter | `rate_limiter`、`result` | `check` 呼び出しごとに 1 回インクリメント。低カーディナリティ。レート制限全体の健全性。 |
| `gitlab_labkit_rate_limiter_rule_evaluations_total` | Counter | `rate_limiter`、`rule`、`action`、`result`、`exceeded` | 評価されたルールごとに 1 回インクリメント。非終端チェーン内のすべてのルールを捕捉。 |
| `gitlab_labkit_rate_limiter_errors_total` | Counter | `rate_limiter` | Redis 障害カウンター（フェイルオープンの可観測性）。 |
| `gitlab_labkit_rate_limiter_limit` | Gauge（`:max`） | `rate_limiter`、`rule` | 設定された閾値。 |
| `gitlab_labkit_rate_limiter_period_seconds` | Gauge（`:max`） | `rate_limiter`、`rule` | 設定された期間。 |

> **実装メモ:** 現在の labkit 実装は `gitlab_labkit_rate_limiter_calls_total`（ラベル `rate_limiter`、`rule`、`action`）と、`errors_total` および 2 つのゲージ（[#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) で実装）のみを発行します。limiter ごととルール評価ごとのメトリクスへの分割は、アクションモデルの洗練（[#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052)）とともに、協調的な破壊的変更としてリリースされます。

**追加の可観測性作業:**

- [#28799](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28799) — 既存のリクエストごとのログメッセージにレート制限の状態を含める
- [#28831](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28831) — Rate Limiting Overview ダッシュボードの更新
- [#28832](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28832) — デフォルトの SLI アラートのためにメトリクスカタログに登録
- [#28807](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28807) — マイグレーションのための Redis クラスターの余裕の調査
- [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) — Redis 操作を単一の Lua EVAL 呼び出しに統合

### 1.11 コストを考慮したレート制限

`GET /api/v4/user` と複雑な GraphQL クエリは同じものではありませんが、単純なリクエストカウンターはこれらを同等に扱います。`check` の `cost:` パラメーターを使うと、代わりに実際のリソース消費量でカウントできます。

```ruby
result = limiter.check(identifier)                         # default cost: 1
result = limiter.check(identifier, cost: db_duration_s)    # cost = actual DB time
```

rack ミドルウェアはこれを使って、ルート namespace ごとのデータベース時間を制限できます。各リクエストの完了後に、実際にかかったコストをチャージします。

```ruby
limiter = RESOURCE_LIMITERS[:db_utilization]
result = limiter.check(
  { root_namespace: request.root_namespace, user: request.user },
  cost: request.db_duration_s
)
```

次のようなルールとともに使います。

```ruby
Rule.new(
  name: "db_seconds_per_namespace",
  characteristics: [:root_namespace],
  limit: 300,      # 300 seconds of DB time per period
  period_s: 60,
  action: :limit
)
```

characteristic はスコープ（ユーザーごと、プロジェクトごと、namespace ごと）を選びます。cost は何を測定するかを選びます。同じパターンが、gitaly 呼び出しの所要時間、オブジェクトストレージのバイト数、sidekiq ジョブの重みにも適用されます。

作業を行う前にコストが分からない場合は、先に `peek` します。

```ruby
result = limiter.peek(identifier)
if result.action == :block
  return error("rate limited, retry after #{result.reset_at}")
end

cost = do_expensive_work

limiter.check(identifier, cost: cost)
```

これは余分な操作を 1 つ通過させる可能性があります（peek は「OK」と言ったが、コストが予想より大きかった場合）。その後の次のリクエストはブロックされます。

内部的には、`cost:` は Lua EVAL 内で `INCRBYFLOAT` を使用します（[#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827)）。`1` を指定した `INCRBYFLOAT` は `INCR` と同じ振る舞いをするため、整数コストと浮動小数点コストで別々のカウント戦略はありません。

## Phase 2: 設定の外部化

labkit は、アプリケーションが提供するデフォルトを上書きする設定を読み込みます。フォーマットは [LabKit Configuration Management](../labkit_configuration/) 設計ドキュメントに従います。protobuf スキーマが構造を定義し、シリアライゼーション形式として YAML を使用します。スキーマが共有されているため、同じファイルが `labkit-ruby`、`labkit-go`、およびそれらを消費するサービスで同じように読み込まれます。

*実現すること:* 設定を通じたルールの追加と変更。ルールの変更は、アプリケーションの完全なビルドとデプロイなしにロールアウトされます。

### 2.1 2 種類の設定

設定ドキュメントは 2 種類あります。

1. **Available limiters** は契約であり、オペレーター（Production Engineering）が所有します。どのレート limiter が存在するか、どの識別子プロパティでマッチおよびカウントできるか、各 limiter がデフォルトで備えるルールを列挙します。アプリケーション開発者はこれに貢献します。自身のコードが公開する limiter を宣言し、デフォルトを提案しますが、契約はオペレーター側でレビューされ所有されます。これはアプリケーションとともに出荷され、他のツールが読むことができます。
2. **Rate limits** は、デフォルトを上書きまたは追加するルールを保持します。アプリケーションのリリースなしに変更できます。

labkit は rate-limits ドキュメントを available-limiters ドキュメントに対して検証します。ルールは、アプリケーションが実際に公開しているプロパティでのみマッチまたはカウントでき、存在する limiter のみを対象にできます。

rate-limits ドキュメントは 2 つのレベルで書かれます。オペレーターはグローバルなルールを設定します。すべてのリクエストに適用されるデフォルトと、プラットフォーム全体の保護です。これらのデフォルトルールは、アプリケーションをまたいで共有される limiter（Rack ミドルウェア、gRPC インターセプターなど）のために定義されます。

サービスオーナーは limiter にスコープされたルールを追加し、自分がオンコールを担当するサービスの制限を引き上げたり引き下げたりします。チームは自身のサービスの制限を管理する自由を持ちます。インフラストラクチャは、共有 Redis や下流サービスへの追加的な負荷など、変更が横断的な影響を持つ場合に入力を提供します。

チームが自由にできないことの 1 つは、limiter のバイパスです。フレームワークは `skip` ルールを許可します。Phase 1 では既存のバイパスを機能させ続けなければならないからです。しかし、バイパスはそれを追加するチームを超えた影響を持ちます。`skip` ルールをチェックなしに導入できないように、誰が追加できるかをガードレールで制限します。ガードレールがどのようなもの（レビュー、許可リスト、検証ステップ）になるかは、実装時の決定事項です。

### 2.2 Available limiters

このドキュメントは、各 limiter が何を、いつ強制適用するか、そのデフォルトルールは何か、そしてその値のいずれかがデータベースから来るかどうかを宣言します。データベース由来の値は、characteristic（プランごとの制限）に紐づけることも、インスタンス全体のグローバルにすることもできます。

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

`default_rule` は、アプリケーションがデフォルトで強制適用するものを記述します。そのスキーマは rate-limit ルール（後述）のフィールドのサブセットであり、その `match` は常に空（`{}`）です。デフォルトは limiter が見るすべてのリクエストに適用されるからです。`has_database_configuration: true` は、デフォルトの `limit`/`period_s` がチェック時にデータベースから解決される（[1.7](#17-configuration-passthrough) の callable）ことを示します。

Labkit に汎用 limiter を実装する際、これらのデフォルト設定は copier テンプレートに置くことができます。そうすれば、それらを変更したときに、次回の `copier update` でそれを消費するすべてのサービスを更新する [copier マイグレーション](https://copier.readthedocs.io) をリリースできます。Rack ミドルウェアや gRPC インターセプター内のものなど、新しい共有 limiter は、各サービスが独自に書く代わりにテンプレートからデフォルトを得ます。そして、それらのデフォルトへの後の変更も同じ方法でロールアウトされます。`rate_limits` ファイルもテンプレートから生成されます。

対応する proto は次のとおりです。検証ルールはスキーマ内にありますが、例が読みやすくなるように、ここではいくつかだけ追加しています。これらの `.proto` ファイルは [`labkit-spec`](https://gitlab.com/gitlab-org/quality/tooling/labkit-spec/) に置かれます。

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

### 2.3 Rate limits

ここで、オペレーターとサービスオーナーがルールを設定します。各ルールは、適用される limiter、それがカバーするリクエストを選択する `match`、そして取るべきアクションを指定します。

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

ファイル内のルールは、アプリケーションが提供するルールの **前に** 評価されます。末尾の終端 `skip` ルール（`match: {}` ですべてにマッチする）と組み合わせることで、ファイルが limiter の唯一の信頼できる情報源になります。`skip` に到達するすべてのリクエストは、アプリケーションのデフォルトを完全にバイパスします。Phase 3 では、外部サービスが返すルールがファイルのルールの前に来ます。

どのフィールドが必須かは `action` に依存します。`limit`/`log` ルールは `limit` と `period_s` を必要とし、`skip` ルールはどちらも必要としません。proto 内の 1 つの CEL 制約がこれを強制します。

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

`match` の値は labkit の `Matcher` オブジェクトと同じ明示的な型マーカーを使うため、等価マッチングと正規表現マッチングが YAML と両 SDK の間でラウンドトリップします。

```yaml
match:
  root_namespace_plan: free                  # equality
  path:
    regex: "^/api/v\\d+/projects"            # regex
```

上記の `rate_limits.yaml` が読み込まれると、プランごとの `pipelines_create` ルールがアプリケーションのデフォルトルールの前に評価されます。Free プランのプロジェクトは 100/10分、Ultimate は 1000/10分を得ます。末尾の `skip` は、ファイルが存在する限りアプリケーションのデフォルトが決して適用されないことを保証します。

### 2.4 Redis 由来のルール（Web UI 設定）

一部のセルフマネージド管理者は、ディスク上のファイルからではなく、管理者用 Web UI からレート制限を編集し続けたいと考えています。データベースをホットパスに戻すことなく、これをサポートできます。UI で管理されるルールを、[2.3](#23-rate-limits) と同じルールスキーマを使って Redis に保存します。

UI は書き込み、labkit は読み込みます。管理者がルールを保存すると、それは limiter ごとの Redis キー（labkit がカウンター用にすでに使っている同じ Redis インスタンス）にシリアライズされます。labkit は、その limiter が最初にヒットしたときに Redis から limiter のルールを読み込み、それから短時間メモリにキャッシュします。リクエストごとに Redis を読むわけではなく、起動時のみ読むわけでもありません。キャッシュが失効すると、その limiter を通る次のリクエストが Redis から再読み込みするため、管理者の変更はおおよそキャッシュ期間内に取り込まれます。正確な期間は、これを構築するときに決める実装の詳細です。

これらのルールは、アプリケーションのデフォルトに重ねるのではなく、それを置き換えます。Redis に limiter のルールがあれば labkit はそれを使い、なければアプリケーション組み込みのデフォルトが適用されます。すべての limiter はアプリから設定可能なままであり、何も設定されていないときはデフォルトがフォールバックになります。

これは Phase 3 の外部サービスのローカル版です。「このリクエストのルールを返す」という同じアイデアを、リモートサービスではなく Redis キーで支えます。これをセルフマネージドに提供したいと考えていますが、Phase 3 をブロックするものではなく、両者は独立してリリースできます。

**データベースからの移行。** マイグレーションは既存の `ApplicationSettings` のスロットル値を読み、それぞれを `Rule` オブジェクトに変換し、limiter ごとにキー付けして Redis ストアに書き込みます。limiter の値が Redis に移ったら、`ApplicationSettings` を読む [1.7](#17-configuration-passthrough) の呼び出し箇所の callable は、その limiter について廃止できます。

### 2.5 優先順位モデル

複数の設定ソースが、順番に評価されます。

1. **設定ファイルのルール** — labkit が YAML ファイルから読み込む
2. **Redis 由来のルール** — 管理者用 Web UI が書き込む（セルフマネージド）
3. **アプリケーションのデフォルト** — フォールバックとしてアプリケーションとともに出荷される

```plaintext
┌─────────────────────────────────┐
│ Config file rules (highest)     │  ← Loaded by labkit from YAML
├─────────────────────────────────┤
│ Redis-backed rules (web-UI)     │  ← Written by the admin UI
├─────────────────────────────────┤
│ Application defaults (fallback) │  ← Shipped with the application
└─────────────────────────────────┘
```

これは次のことを意味します。

- GitLab.com は、アプリケーションのデフォルトを上書きするプラットフォームレベルのルール（設定ファイル由来）を持てる
- セルフマネージドの管理者は Web UI からルールを管理できる。それらのルールは、カバーする limiter についてアプリケーションのデフォルトを置き換える
- ファイルも Redis ルールも設定しないセルフマネージドのインストールは、アプリケーションのデフォルトにフォールバックするため、挙動は変わらない
- リクエストにマッチするプラットフォームルールはデフォルトに勝つため、コード変更なしで顧客ごとまたはティアごとの上書きが可能になる
- より具体的なサービスオーナーのルールは、オペレーターのグローバルルールの前に順序付けられるため、チームはグローバルなデフォルトに触れることなく自身のサービスの制限を調整できる
- `skip` ルールにより、上位のティアが下位のものをバイパスできる。これが、`skip` の追加にガードレールが設けられている理由です（[2.1](#21-two-kinds-of-configuration) を参照）

### 2.6 デプロイ

- **セルフマネージド:** 設定ファイルはオプションです。無い場合、既存の挙動は変わりません。管理者はカスタムなレート制限のために設定ファイルを提供するか、Web UI からルールを管理できます（Redis に保存）。
- **GitLab.com:** 設定ファイルは Helm チャートまたは ops 設定経由でデプロイされます。プラットフォームレベルのルールは Production Engineering が管理します。
- **Dedicated:** 設定ファイルは Dedicated オペレーターが管理します。テナントごとのカスタマイズはファイルを通じて技術的には可能ですが、非推奨です。
- **Cells:** セルごとの設定は、別々の設定ファイルを通じて可能です。

## Phase 3: 動的な外部サービス

外部サービスが、リクエストの識別子に基づいてレート制限ルールを動的に提供します。これが、各ケースのための静的な設定ファイルを保守することなく、顧客ごと、ティアごと、namespace ごとのカスタマイズを得る方法です。

*実現すること:* 異なる顧客に対する異なるルール、そしてデプロイなしでの変更のほぼ即時のロールアウト。

### 3.1 サービス設計

サービスは Phase 1 の識別子を受け取り、そのリクエストのルールを返します。これらは設定ファイル、Redis 由来のルール、アプリケーションのデフォルトよりも優先されます。

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

サービスはレート limiter 名と識別子を受け取ります。両者を合わせて、サービスが決定を下すのに必要なすべてを伝えます。レート制限のチェックポイント、リクエストタイプ、ユーザー、namespace、プラン、エンドポイントです。

サービスは limiter 名でキー付けするため、同じ名前が異なるサービスで異なる意味を持つことを考慮する必要があります。これは汎用 limiter（Rack ミドルウェア、gRPC インターセプター）で最も重要です。そこでは `rack_request` が意図的にどこでも再利用されています。サービスは limiter 名だけでなく呼び出し元のサービスでもルールをスコープするため、あるサービス向けの動的ルールが、たまたま名前を共有する別のサービスに漏れ出すことはありません。

### 3.2 機能

namespace ごととプランごとの閾値は、Phase 2 で設定ファイル（`namespace_plan` または `root_namespace` でマッチするルール）を通じてすでに可能です。外部サービスは、静的な設定では提供できない機能を追加します。

- 現在の負荷や不正使用パターンに基づく動的な調整
- GitLab の外部で管理される契約やエンタイトルメントに紐づいた顧客ごとの制限
- 設定ファイルを再デプロイせずに変わるルール
- terraform で設定可能であり、アプリケーションのレート制限を Cloudflare やその他のエッジルールと同じリポジトリに保つ

### 3.3 フェイルオープンとキャッシュ

サービスに到達できない場合、labkit は同じ優先順位スタックを下にフォールバックします。設定ファイルのルール、次に Redis 由来のルール、次にアプリケーションのデフォルト（フェイルオープン）です。キャッシュ（識別子ごと、namespace ごと、プランごと）が、リクエストごとのオーバーヘッドを削減します。

ルールはメモリにキャッシュされるため、変更は行われた瞬間ではなくキャッシュ期間内に伝播します。その期間が、新しいルールがどれだけ速くロールアウトされるかの実際上の限界です。時間単位ではなく分単位です。正確な値は実装時のチューニングの決定事項です。

### 3.4 GATE との関係

識別子は拡張可能です。[GATE](../new_auth_stack/) は `workload_identity` と `ambient_credential` という ID タイプを導入しますが、これらは識別子内の新しいキーにすぎません。外部サービスは、labkit 自体に変更を加えることなくそれらを使用できます。

## 主要な設計上の決定

| 決定 | 根拠 | 参照 |
|---|---|---|
| 非終端の `:log` を伴うルール評価 | 強制適用を妨げずに新しい閾値をシャドウテストする | [#28890](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28890) |
| アクションモデル: `limit`/`log`/`skip` | 強制適用、可観測性、バイパスのセマンティクスのクリーンな分離 | [#29052](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29052) |
| 結果の `action` は結末であり、呼び出し元が処理する | labkit はフレームワークではなくライブラリ — 呼び出し元がどう応答するかを決める | — |
| 未認証リクエストのための `<anonymous>` センチネル | 山括弧なしのセンチネルが実際のユーザー名と衝突するのを避ける。ルールレベルでの認証/未認証の区別を可能にする | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| TTL ベースの固定ウィンドウ（divmod のクロック整列ではなく） | 決定保留中 — TTL はよりシンプルで境界バーストを避けられる、divmod は現在の ApplicationRateLimiter に一致する | [#28830](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28830) |
| Redis プールの `.with` インターフェイス | Puma のマルチスレッドワーカー下での適切なコネクションプールの使用 | — |
| RackAttack のための 2 つの limiter（4 つではなく） | 認証/未認証は characteristic であり limiter の境界ではない。フラグが少ない。外部設定に対して将来も対応できる | [#28852](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28852) |
| Redis 操作のための Lua EVAL | INCR + EXPIRE + TTL の単一ラウンドトリップ。アトミック。Ruby のオーバーヘッドが少ない | [#28827](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28827) |
| パターンマッチングのための Matcher オブジェクト | YAML 互換（明示的な `{ regex: "..." }` 型マーカー）。言語横断 | [#28855](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28855) |
| `rate_limits` ハッシュを置き換える静的な Limiter オブジェクト | 唯一の信頼できる情報源。DB 由来の値のための callable。リクエストごとのアロケーションがない | [#29054](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/29054) |
| Prometheus ゲージのマルチプロセスモード `:max` | Puma ワーカー下での N 個の重複コピーを避ける。すべてのワーカーが同じ設定値をセットする | [#28798](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28798) |
| 設定の進化: callable → 設定ファイル → 外部サービス | 後方互換のあるマイグレーションパス。どのフェーズでもセルフマネージドに対する破壊的変更がない | [#28853](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) |
| Web UI のルールはデータベースではなく Redis に保存 | セルフマネージドのクリックオペレーションを維持しつつデータベースをホットパスから外す。カウンターにすでに使われている Redis インスタンスを再利用。アプリのデフォルトを Redis フォールバックで置き換える | — |
| オペレーターが契約とグローバルルールを所有し、サービスオーナーが自身の limiter を調整する | チームは自分がオンコールを担当するサービスの制限を管理する自律性を得て、横断的な変更にはインフラストラクチャが入力を提供する。バイパスはガードレールが設けられたまま | — |

## 参照

### 設計ドキュメント

- [Next Rate Limiting Architecture](../rate_limiting/) — 制限を定義し強制適用するフレームワークのための、元の 2022 年のブループリント
- [Simplifying Rate Limiting Configuration](../rate_limiting_simplification/) — 段階的なロードマップ（Phase 1: エッジネットワーク、Phase 2: アプリケーション、Phase 3: インターフェイス）
- [LabKit Configuration Management](../labkit_configuration/) — labkit サービスのための protobuf ファーストの設定スキーマ

### 外部参照

- [Cloudflare rate limiting rules — supported actions](https://developers.cloudflare.com/ruleset-engine/rules-language/actions/#supported-actions) — アクションのセマンティクスモデルのインスピレーション源

### 追跡

- [Phase 2 epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2021) — すべての実装作業の親 epic
- [Configuration evolution](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/28853) — callable、優先順位、静的設定の設計議論
</content>
</invoke>
