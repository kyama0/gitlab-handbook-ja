---
title: Kibana の使い方
description: "Kibana とは何か、検索方法、結果の解釈方法、そこから特定の情報を取得するためのヒントとコツについての情報。"
category: Infrastructure for troubleshooting
upstream_path: /handbook/support/workflows/kibana/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
translated_at: "2026-06-26T20:39:13+09:00"
translator: codex
stale: false
lastmod: "2026-06-25T15:51:50+08:00"
---

## 概要

このドキュメントでは、Kibana とは何か、検索方法、結果の解釈方法、特定の情報を取得するためのヒントとコツを提供します。

## Kibana の使い方

[Kibana](https://log.gprd.gitlab.net/) は [オープンソースのデータ可視化プラグイン](https://www.elastic.co/kibana) であり、[Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch) 向けに使われます。Elasticsearch クラスタ上にインデックスされたコンテンツに対する可視化機能を提供します。Support Engineering は Kibana を使って、GitLab.com 上のエラーイベントの検索と、ユーザーによってその様々な側面に対して特定の変更がいつ行われたかの検出の両方を行っています。

ステージング (`gstg`) のような非本番環境では https://nonprod-log.gitlab.net/ を使用してください。

>**Note:** Kibana はデフォルトで UTC タイムゾーンになっています。30 日より古いログは保持されません。古いログへのアクセスがあれば役立ったチケットに取り組んでいる場合は、`Support::SaaS::Log retention period reached` マクロでフラグを立ててください（これは追跡目的のみの内部マクロです）。

### パラメータ

Kibana で *どこを* 検索するかを知ることは、適切な結果を得るために最も重要です。検索しているアプリケーション (GitLab.com) のエリアは Kibana では `Index` として知られています。検索に使われるデフォルトのインデックスは `pubsub-rails-inf-gprd-*` ですが、`(change)` ボタンをクリックすることで変更できます:

![Changing search index](/images/support/kibana_index-selection.jpg)

インデックスはほとんどの場合、私たちの一般的な [ログ構造](https://docs.gitlab.com/administration/logs/) と密接に対応しています。その他のよく使われるインデックスは以下のとおりです:

- `pubsub-gitaly-inf-gprd-*`
- `pubsub-pages-inf-gprd-*`
- `pubsub-runner-inf-gprd-*`

例えば、ログイン失敗を追跡しようとしている場合は、`pubsub-rails-inf-gprd-*` インデックスを検索します。コントローラに関する [`500` エラー](/handbook/support/workflows/500_errors) を検索する場合は、デフォルトインデックスである `pubsub-rails-inf-gprd-*` で検索します。

インデックスとともに、追跡しようとしている特定のエラーやイベントが *いつ* 発生したかを知ることも重要であり、GitLab.com の Kibana ログは 30 日間保持されることを覚えておくことが重要です。Kibana では検索結果に対して相対時刻と絶対時刻の範囲を選択でき、これは日付範囲を操作することで変更できます:

![Changing the date range](/images/support/kibana_changing-dates.jpg)

### フィールドとフィルタ

**Note:** 2022 年 3 月時点で、Kibana の検索には `Filters` を使用することが推奨されています。一般的な検索ボックスを使用すると `X of Y Shards Failed` の形式でいくつかのエラーが発生する可能性があるため、推奨されません。[Infra Issue](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/15207) を参照してください。

各ログエントリは多数の `Fields` で構成されており、エントリに関する具体的な情報がそこに表示されます。検索結果にどのフィールドを適用し、どのようにフィルタリングするかを知ることは、*どこ* と *いつ* を検索するかを知ることと同じくらい重要です。最も重要なフィールドは以下のとおりです:

- `json.method`
- `json.action`
- `json.controller` - 詳細については [GitLab ソースコードのコントローラ定義](https://gitlab.com/gitlab-org/gitlab/-/tree/master/app/controllers/projects) を参照してください
- `json.status`
- `json.path`

利用可能なすべてのフィールドは左側のメニューに表示されており、それぞれの上にホバーして `add` ボタンをクリックすることで検索結果に追加できます。

![Viewing the list of fields](/images/support/kibana_available-fields.jpg)

特定のフィールドでフィルタリングしないと、検索クエリで多数のログエントリが返された場合に特定のものを見つけるのが困難になります。

例えば、過去 15 分以内に GitLab.com ユーザー `tristan` によって生成された `404` ステータスコードを返したログイベントを見つけようとしているとします。`pubsub-rails-inf-gprd-*` インデックスで `json.username : tristan` を検索することから始めます。その時間範囲内で検索し、左側のサイドバーで `json.status` フィールドの隣にある `add` をクリックすると、次のような結果が得られます:

![Unfiltered results for a specific username](/images/support/kibana_unfiltered-results.jpg)

結果の大部分は `200` を返すエントリで、これらは私たちが探しているものの範囲外です。`404` が返された結果を検索するには、検索バーの下にある `+ Add Filter` をクリックし、`json.status is 404` の positive フィルタを設定すると、まさに私たちが探していた以下の結果が得られます。

![Filtered results for a specific username](/images/support/kibana_filtered-results.jpg)

### IP ブロックの原因の特定

[こちら](/handbook/support/workflows/ip-blocks/) に IP ブロックに関連するエラーについて Kibana を検索する役立つヒントがあります。

### ログの特定

何を探せばいいかわからない？調査しているバグ／アクションを再現するためにセルフマネージドインスタンスの利用を検討してください。これにより、Issue が GitLab.com 固有のものかどうかを確認しつつ、Kibana で検索する際の参照に簡単にアクセス可能なログも提供できます。

セルフマネージドインスタンスの設定を希望する Support エンジニアは、利用可能な（会社が提供する）ホスティングオプションのリストについて、私たちの [Sandbox Cloud ページ](/handbook/company/infrastructure-standards/realms/sandbox/) をレビューすべきです。

### ログの共有

ログ検索の現在の状態を共有するには、Elastic の [ログ共有](https://www.elastic.co/docs/explore-analyze/report-and-share#share-a-direct-link) ドキュメントに従ってください。URL を直接コピーすると、他のユーザーが使用しようとしたときに検索の読み込みに失敗します。エンコードされているため、検索パラメータは URL に含まれません。

### ダッシュボード

パターンの特定に役立つ可視化を作成するために設計された、利用可能なダッシュボードがいくつかあります。製品の特定の領域を絞り込んだり、特定の Issue やバグを特定したりするのにも役立ちます。GitLab チームメンバーであれば誰でも誰でも使えるダッシュボードを作成できますが、いくつかのサポート固有のダッシュボードがあります:

- Correlation Dashboard
- Rate Limit & Requests Dashboard
- Integrations Dashboard
- Errors & Exceptions Dashboard

Kibana で `Analytics > Dashboard` の下からダッシュボードにアクセスし、`Support` タグでフィルタリングするか、ダッシュボード名で検索できます。

自分のダッシュボードの作成に興味がある場合、[ダッシュボード作成についての Elastic のガイド](https://www.elastic.co/guide/en/kibana/current/create-a-dashboard-of-panels-with-web-server-data.html) を読むことを検討してください。より広く役立ちそうなものを作成した場合、他のサポートチームメンバーが見つけやすくなるよう、ダッシュボードに `Support` タグを追加することを検討してください。

ダッシュボードを使用するには、必ず `View` モードになっていることを確認してください。view モードでは値を入力でき、ビジュアルがそれに応じて更新されますが、ダッシュボードには保存されません。キャプチャしたスナップショットを共有する必要がある場合は `Share > Get Links` を使用します。

既存のダッシュボードを `編集` する前に、自分のコピーを作成し、それに応じてラベルを付けるよう `クローン` することを検討してください。

#### Correlation Dashboard {#correlation-dashboard}

トラブルシューティングに関連する Correlation ID が見つかった場合、correlation ダッシュボードを利用して、各個別のインデックスを検索することなく、インデックス全体の関連するすべてのコンポーネントを素早く表示できます。ダッシュボードを表示したら、`json.correlation_id` フィルタをクリックして、見つけた相関 ID を入力するだけです。それから web、workhorse、sidekiq、gitaly インデックスを検索します。

#### Rate Limit & Requests Dashboard

このダッシュボードを使用してユーザー名、IP、パス、または Namespace でレコードを素早くフィルタリングできます。これは、ユーザーまたは IP がレート制限の対象になっているかを判断しようとしており、使用パターンを発見および可視化する必要がある場合に役立ちます。

#### Integrations Dashboard

Namespace 全体にわたる特定の連携に関連するエラーを追跡するのに役立ちます。

#### Errors & Exceptions Dashboard

このダッシュボードは、Namespace またはパス／プロジェクト全体にわたって特定の HTTP ステータスを取得し、クラスで絞り込むのに使用できます。これは Namespace 全体、または GitLab.com 全体にわたるエラーパターンを理解するのに役立ちます。

## ヒントとコツ

このセクションでは、特定のフィールドを検索しフィルタリングすることで、Kibana で非常に具体的な情報を見つけられる方法を詳述します。各ヒントには、参照用に例で使用されたグループ、サブグループ、またはプロジェクトへのリンクが含まれます。

### Runner 登録トークンのリセット

例のグループ: [gitlab-bronze](https://gitlab.com/gitlab-bronze)

GitLab Runner 登録トークンがグループまたはプロジェクトに対してリセットされたかを確認し、どのユーザーがいつリセットしたかを確認できます。この例では、Runner 登録トークンがグループレベルの `gitlab-bronze` でリセットされました。ログエントリを見つけるには:

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. グループのパスについて `json.path` に positive フィルタを追加します。この例では単に `gitlab-bronze` です。
1. `json.action` に `reset_registration_token` の positive フィルタを追加します。
1. 結果を観察します。何かあれば、結果の `json.username` フィールドにリセットを引き起こしたユーザーのユーザー名が含まれます。

### アクセストークンのアクティビティ

アクセストークン (Group、Project、Personal) が実行しているアクティビティの種類を判断できます。ログエントリを見つけるには:

1. [API](https://docs.gitlab.com/api/personal_access_tokens/) または UI を使用して、関心のあるアクセストークンの `id` を見つけます。
1. `pubsub-rails-inf-gprd-*` で、結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. ステップ 1 の `id` について `json.token_id` に positive フィルタを追加します。
1. 関心のある可能性がある他のフィルタを追加します:
    - `json.username`
    - `json.path`
    - `json.method`
    - `json.token_type`

### 削除されたグループ／サブグループ／プロジェクト

- 例のグループ: [gitlab-silver](https://gitlab.com/gitlab-silver/)
- 例のプロジェクト: [gitlab-silver/test-project-to-delete](https://gitlab.com/gitlab-silver/test-project-to-delete)

Kibana を使用して、誰が GitLab.com 上のグループ、サブグループ、またはプロジェクトの削除を実行したかを判断できます。ログエントリを見つけるには:

1. `pubsub-rails-inf-gprd-*` で、結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. プロジェクトのパス（該当する場合はグループとサブグループを含む）について `json.path` に positive フィルタを追加します。この例では `gitlab-silver/test-project-to-delete` です。
1. `json.method` に `DELETE` の positive フィルタを追加します。
1. 結果を観察します。何かあれば、結果の `json.username` フィールドに削除を引き起こしたユーザーのユーザー名が含まれます。
プロジェクトまたはグループが最初に保留中の削除になる際、ログエントリは `json.params.key: [_method, authenticity_token, namespace_id, id]` を持ちます。これに対し、ユーザーが [削除を強制](https://docs.gitlab.com/user/project/working_with_projects/#delete-a-project) する場合は、ログエントリはプロジェクトの場合 `json.params.key: [_method, authenticity_token, permanently_delete, namespace_id, id]` のようになり、グループの場合は `json.params.key: [_method, authenticity_token, permanently_remove, id]` のようになります。

(サブ)グループ削除の一環として削除されたプロジェクトのリストを見るには、sidekiq で:

1. `json.message` を "was deleted" でフィルタリングします。
1. 2 つ目のフィルタとして `json.message` に `path/group` を設定します。

### 表示された CI/CD 変数

CI/CD 変数に対する *変更* は [グループイベントの監査ログ](https://docs.gitlab.com/user/compliance/audit_events/#group-audit-events) には特に記録されませんが、Kibana を使って variables ページを表示した可能性のあるユーザーを確認する方法があります。問題の変数を変更するには、variables ページの表示が必要です。これは、対象ページを表示した人が必ずしも変数に変更を加えたことを示すものではありませんが、変更を加えた可能性のあるユーザーのリストを絞り込むのに役立つはずです。（これらの変更を記録してほしい場合、[コメントを集めるための Issue が開かれています](https://gitlab.com/gitlab-org/gitlab/-/issues/8070)）。

1. `json.path` を `is` に設定し、関連する対象プロジェクトの完全パスに続けて `/-/variables` を入力します。例えば `tanuki-rules` という名前のプロジェクトがあれば `tanuki-rules/-/variables` と入力します。
1. Kibana の日付を変更が行われたと思われる範囲に設定します。
1. その時間枠内でそのページにアクセスした人を表示できるはずです。`json.meta.user` はユーザーのユーザー名を表示し、`json.time` はページにアクセスされたタイムスタンプを表示します。
1. `json.graphql.operation_name` を `is` `getProjectVariables` で検索することもできます。
1. 一般的に、`json.action` フィールドが `update` を返し `json.controller` が `Projects::VariablesController` を返す結果は、変数が更新されたことを意味する可能性が高いです。

### Let's Encrypt 証明書の問題を見つける

場合によっては、1 つ以上の理由で Let's Encrypt 証明書の発行が失敗することがあります。正確な理由を判断するために、Kibana でこれを調べることができます。

1. `json.message` に "Failed to obtain Let's Encrypt certificate" の positive フィルタを設定します。
1. 検索バーで、GitLab Pages のドメイン名を入力します。例: `json.pages_domain: "sll-error.shushlin.dev"`
1. `json.acme_error.detail` でフィルタするか見つけます。これは関連するエラーメッセージを表示します。この場合、エラー "No valid IP addresses found for sll-error.shushlin.dev" が見えます。

### 削除されたユーザー {#deleted-user}

検索時から過去 30 日以内に発生した場合、Kibana を使用して GitLab.com 上のアカウントが削除されたか、いつ削除されたかを確認できます。

- 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。

アカウントが自己削除された場合、これらのフィルタで検索を試みます:

1. ユーザーのユーザー名を取得している場合は、`json.username` に positive フィルタを追加します。
1. `json.controller` に `RegistrationsController` の positive フィルタを追加します。

アカウントが管理者によって削除された場合、これらのフィルタで検索を試みます:

1. ユーザーのユーザー名について `json.params.value` に positive フィルタを追加します。
1. `json.method` に `DELETE` の positive フィルタを追加します。

結果を観察します。フィルタリングされたアカウントが指定された期間内に削除された場合、結果は 1 つだけのはずです。

[未確認のアカウント](https://docs.gitlab.com/user/gitlab_com/#confirmation-settings) を削除する cron ジョブによってアカウントが削除されたと疑う場合は、これらのフィルタで検索を試みます:

1. インデックスを `pubsub-sidekiq-inf-gprd*` に変更します。
1. ユーザーのユーザー名について `json.meta.user` に positive フィルタを追加します。（あるいは、ユーザーのユーザー ID を取得している場合は `json.args.keyword` を使用できます）。
1. `json.class` に `DeleteUserWorker` の positive フィルタを追加します。

### 二要素認証の無効化

- [検索へのクイックリンク](https://log.gprd.gitlab.net/goto/5598ea40-a651-11ed-9f43-e3784d7fe3ca)

Kibana を使用して、どの管理者が GitLab.com アカウントの 2FA を無効化したかを確認できます。ログエントリを表示するには:

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. 2FA を無効化された `username` について `json.location` に positive フィルタを追加します。
1. `json.action` に `disable_two_factor` の positive フィルタを追加します。
1. 読みやすくするため、`json.location` と `json.username` フィールドのみを表示します。
1. 結果を観察します。

### SSO 強制の有効化／無効化

Kibana を使用して、GitLab.com 上のグループで SSO 強制が有効化または無効化されたか、いつ、どのユーザーによってかを確認できます。

- 例のグループ: [gitlab-silver](https://gitlab.com/gitlab-silver/)

#### SSO 強制の有効化

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. `json.controller` に `Groups::SamlProvidersController` の positive フィルタを追加します。
1. `json.action` に `update` の positive フィルタを追加します。
1. `json.method` に `PATCH` の positive フィルタを追加します。
1. グループのパスについて `json.path` に positive フィルタを追加します。この例では `gitlab-silver` です。
1. 結果がある場合、`json.params` フィールドを観察します。`\"enforced_sso\"=>\"1\"` が存在する場合、そのエントリは `json.username` フィールドのユーザーが SSO 強制を有効化した時に記録されたものです。

#### SSO 強制の無効化

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. `json.controller` に `Groups::SamlProvidersController` の positive フィルタを追加します。
1. `json.action` に `update` の positive フィルタを追加します。
1. `json.method` に `PATCH` の positive フィルタを追加します。
1. グループのパスについて `json.path` に positive フィルタを追加します。この例では `gitlab-silver` です。
1. 結果がある場合、`json.params` フィールドを観察します。`\"enforced_sso\"=>\"0\"` が存在する場合、そのエントリは `json.username` フィールドのユーザーが SSO 強制を無効化した時に記録されたものです。

#### SAML ログイン

SAML ログインの問題を調査するには:

`pubsub-rails-inf-gprd-*` ログで:

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. [SAML グループのドキュメント](https://docs.gitlab.com/user/group/saml_sso/troubleshooting/#search-rails-logs-for-a-saml-sign-in) で推奨されている positive フィルタを追加します。

SAML 応答をデコードし、選択したフィルタに対応する結果を観察すると、欠落または誤設定された属性があるかを確認できます。

#### SAML 応答

特定ユーザーの SAML 応答を取得するには:

- 例のグループ: [gitlab-silver](https://gitlab.com/gitlab-silver/)
- 例のユーザー: `user@domain.com`

`pubsub-rails-inf-gprd-*` ログで:

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. グループのパスについて `json.saml_response.audiences` に positive フィルタを追加します。この例では `gitlab-silver` です。
1. `json.payload_type` に `saml_response` の positive フィルタを追加します。
1. 取得する `saml_response` の対象ユーザーのメールアドレスについて、`json.saml_response.attributes.email` に positive フィルタを追加します。この例では `user@domain.com` です
1. `json.saml_response.attributes` の値を確認します

例: 1

```json
"attributes": {
  "email": [
    "user@domain.com"
  ],
  "groups": [
    "saml-group-1-developer",
    "saml-group-2-maintainer"
  ]
},
```

例 2:

```json
"attributes": {
    "email": [
       "user@domain.com"
     ],
    "firstname": [
      "John"
    ],
     "lastname": [
       "Doe"
    ],
    "name": [
       "John Doe"
    ]
   }
```

- [検索へのクイックリンク](https://log.gprd.gitlab.net/app/r/s/hdVqu)

#### SCIM プロビジョニングとデプロビジョニング

SCIM の問題を調査するには:

`pubsub-rails-inf-gprd-*` ログで:

1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. `json.path` に positive フィルタを追加します:
   - グループ全体の SCIM リクエストを見る場合は `/api/scim/v2/groups/<group name>`。このパスはグループの SAML 設定にも見つかります。
   - 特定のユーザーの SCIM リクエストを見る場合は `/api/scim/v2/groups/<group name>/Users/<user's SCIM identifier>`。
1. `json.methhod` に `POST` または `PATCH` の positive フィルタを追加します（それぞれ初回プロビジョニングまたは更新／デプロビジョニング）。
1. 特定のアクションをさらに識別するため `json.params.value` にフィルタを追加します:
   - `json.params.value` = `Add` は初回プロビジョニング、またはアカウント詳細の変更を示します
   - `json.params.value` = `Replace` は SCIM デプロビジョニングを示します。ユーザーが IdP App/グループから削除された時に発生します
   - `json.params.value` = `<External ID>` は識別された External ID に関連する SCIM アクティビティを示します。

SCIM プロビジョニングされたアカウントが削除された場合:

1. 上記の手順に従い、`json.method` が `POST` のプロビジョニングレコードから `correlation_id` を取得します。
1. [Correlation Dashboard](#correlation-dashboard) に行き、関連する `correlation_id` を検索します。
1. 結果の中から、`Correlation Dashboard - Web` セクションのレコードを探し、`json.subcomponent` が `elasticsearch` のエントリを探します。そのエントリで、`json.tracked_items_encoded` 内の `[[numbers,"User <user_id> user_<user_id>"]]` の形式の `user_id` を見つけます。

ユーザーが未確認のメールにより削除されたかを調査するには、[削除されたユーザー](#deleted-user) の手順に従ってください。

### グループまたはサブグループからのユーザー削除の検索

保持期間内（30 日）に発生した場合、Kibana を使用して、ユーザーがグループまたはサブグループから削除されたか、いつ、誰によってかを判断できます。

`pubsub-rails-inf-gprd-*` で以下のデータポイントでログエントリを見つけるには:

#### ユーザー削除の確認 (DELETE)

1. `json.meta.caller_id` に `Groups::GroupMembersController#destroy` の positive フィルタを追加します
1. UI でユーザー削除アクションを実行した人物のユーザー ID について `json.meta.user_id` に positive フィルタを追加します
1. `json.method` に `DELETE` の positive フィルタを追加します

#### ユーザー削除リクエストに関するさらなる詳細の取得

以下のフィルタは、削除されたユーザーと、対象ユーザーがどのグループまたはサブグループから削除されたかを識別するのに役立ちます

1. `json.custom_message` に `Membership destroyed` の positive フィルタを追加します
1. `json.meta.caller_id` に `Groups::GroupMembersController#destroy` の positive フィルタを追加します
1. ユーザー削除アクションを実行したユーザーのユーザー ID `json.meta.user_id` またはユーザー名 `json.meta.user` でフィルタを追加します
1. ターゲットユーザー ID `json.details.target_id` でフィルタを追加します

### 削除されたコンテナレジストリタグの検索

削除が過去 30 日以内に発生した場合、Kibana を使用して、コンテナレジストリタグが削除されたか、いつ、誰がトリガーしたかを判断できます。

`pubsub-rails-inf-gprd-*` でログエントリを見つけるには:

1. 対象のコンテナレジストリのリンクを取得します。（例: <https://gitlab.example.com/group/project/container_registry/><ContainerRepository>)
1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. `json.graphql.variables` に `*ContainerRepository/<regitsry id>.*` の positive フィルタを追加します。
1. `json.graphql.operation_name` に `destroyContainerRepositoryTags` の positive フィルタを追加します。

### 500 レベルエラーの Kibana 検索

[14.7 以降、Correlation ID が提供されます](https://gitlab.com/gitlab-org/gitlab/-/issues/34113)。インターフェース使用時の 500 エラーページに表示されます。お客様にこれを提供してもらい、Kibana で `json.correlation_id` でフィルタリングできます。

通常、Kibana は `5XX` エラーの特定には使用されませんが、Sentry で簡単に見つけられず、最初に Kibana を検索することが有益な場合があります。Kibana で一般的な検索を実行するには:

1. エラー発生時にユーザーが訪問していた完全な URL を取得します。
1. [Kibana にログイン](https://log.gitlab.net/app/kibana#) します。
1. 適切な時間フィルタ（右上）を選択します - 例: 過去 30 分、24 時間、または 7 日間。
1. 検索フィールドに、`json.path : "the_path_after_gitlab.com_from_the_URL"` と入力します。
1. サイドバーから関連するフィールドを選択します。`500` エラーの場合、`json.status` でフィルタし `is` を選び、`500` を入力します。
1. サイドバーのリストから関連するフィールドを使用し続けて検索を絞り込みます。

GitLab.com でのエラー検索と検出について詳しくは、[500 エラーのワークフロー](/handbook/support/workflows/500_errors/) を参照してください。

### IP 範囲によるフィルタ

お客様は時々、Kubernetes クラスタやその他 GitLab にアクセスする必要のある外部サーバーといった、お客様のリソースの IP 範囲を提供することがあります。Elasticsearch Query DSL を使用して範囲を検索できます。

1. `+ Add Filter` > `Edit as Query DSL` をクリックします
1. クエリを作成するには以下の形式を使用します:

```json
{
  "query": {
    "term": {
      "json.remote_ip": {
        "value": "192.168.0.1/20"
      }
    }
  }
}
```

1. Save をクリックしてクエリを実行します。

範囲によっては、この操作はコストがかかる可能性があるため、まず日付範囲を絞り込むことをお勧めします。

### インポートエラー

ほとんどのタイムアウト関連のインポートは、Issue やマージリクエストがほとんどまたはまったくない部分的なインポートになります。比較的小さな差（10% 以下）がある場合、それらの特定の Issue やマージリクエストにエラーがある可能性が最も高いです。

エラーがあるたびに、エクスポートが [互換性のある GitLab のバージョン](https://docs.gitlab.com/user/project/settings/import_export/#version-history) から発生したことを確認します。

Kibana でインポートエラーを検索するためのいくつかのヒントを以下に示します:

- pubsub-sidekiq-inf-gprd インデックスパターン (Sidekiq ログ) を使用し、フィルタを追加して絞り込みます
  - json.meta.project: `path/to/project`
  - json.severity: (`INFO` ではない)
  - json.job_status: (`done` ではない)
  - json.class が `RepositoryImportWorker`
- pubsub-rails-inf-gprd インデックスパターン (Rails ログ) を使用し、フィルタを追加して絞り込みます
  - json.controller: エラーステータスの `Projects::ImportsController`
  - json.path: `path/to/project`
- Sentry で、`Projects::ImportService::Error` を検索／探します。`is:unresolved` フィルタを必ず削除してください。

エラーがある場合は、既存の Issue を検索します。メタデータがエラーをスローしており Issue が存在しないエラーについては、Sentry から Issue を作成することを検討してください。

エラーが見つからずインポートが部分的である場合、おそらくタイムアウトの問題です。

### エクスポートエラー

エクスポートエラーは、ユーザーが UI または [この API エンドポイント](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) 経由でエクスポートを試みる時に発生する可能性があります。API のパラメータにより、事前署名された AWS S3 URL のような外部 URL へのエクスポートが可能です。通常、エクスポートプロセスは以下で構成されます:

- エクスポートが開始されたことを確認する初期 `202` 応答をクライアントに返す
- プロジェクトサイズに応じて、エクスポートの処理に数秒から数分かかる
- 指定されたアップロード URL へのアップロードを開始

Kibana でエクスポートログを検索するためのいくつかの提案を以下に示します:

- `pubsub-sidekiq-inf-gprd` (Sidekiq) で、フィルタを追加して検索を絞り込みます:
  - json.class: `Projects::ImportExport`
  - json.meta.project `path/to/project`

`Projects::ImportExport` クラスは以下のサブコンポーネントを含みます:

- `Projects::ImportExport::RelationExportWorker`
- `Projects::ImportExport::CreateRelationExportsWorker`
- `Projects::ImportExport::ParallelProjectExportWorker`
- `Projects::ImportExport::WaitRelationExportsWorker`
- `Projects::ImportExport::AfterImportMergeRequestsWorker`

[Correlation Dashboard](#correlation-dashboard) を使用すると、エクスポートプロセス全体を通じて Sidekiq イベントを追跡し、json.severity: `ERROR` でフィルタリングしてエラーを特定できるはずです。以下に AWS S3 へのアップロードが失敗する例を示します:

```json
"severity": "ERROR",
      "meta.caller_id": "ProjectExportWorker",
      "subcomponent": "exporter",
      ...
      "message": "Invalid response code while uploading file. Code: 400",
      "response_body": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Error><Code>EntityTooLarge</Code><Message>Your proposed upload exceeds the maximum allowed size</Message><ProposedSize>6353524398</ProposedSize><MaxSizeAllowed>5368709120</MaxSizeAllowed><RequestId><omitted></RequestId><HostId><omitted></HostId></Error>",
```

XML 応答は、プロジェクトが最大許容サイズを超過しているなど、失敗の理由の指標を提供できます:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Error>
    <Code>EntityTooLarge</Code>
    <Message>Your proposed upload exceeds the maximum allowed size</Message>
    <ProposedSize>6353524398</ProposedSize>
    <MaxSizeAllowed>5368709120</MaxSizeAllowed>
    <RequestId>
        <omitted>
    </RequestId>
    <HostId>
        <omitted>
    </HostId>
</Error>
```

### Container Cleanup Worker のログを見つける

コンテナレジストリのクリーンアップログは、レジストリクリーンアップのステータスを確認するのに使用できます。これらのログには通常とは異なるスキームがあり、ほとんどの `json.meta` タグを使用しません。

Kibana でこれらのログを見つけるには:

1. `pubsub-sidekiq-inf-gprd*` インデックスを使用します。
1. `json.meta.feature_category: container_registry` の positive フィルタを追加します。
1. 数値プロジェクト ID について `json.extra.container_expiration_policies_cleanup_container_repository_worker.project_id` に positive フィルタを追加します。
1. 数値コンテナリポジトリ ID について `json.extra.container_expiration_policies_cleanup_container_repository_worker.container_repository_id` に positive フィルタを追加します。

`json.extra.container_expiration_policies_cleanup_container_repository_worker` 配下のその他のフィールドには、レジストリクリーンアップ操作に関する関連統計が含まれます。

#### 既知のインポート Issue

- **インポートしたプロジェクトのサイズが、その元と異なる**
  - その理由については [このコメント](https://gitlab.com/gitlab-org/gitlab/-/issues/27742#note_215721494) を参照してください。アーティファクトはリポジトリサイズの一部であるため、それらが存在するかどうかは大きな違いを生む可能性があります。
- **リポジトリのコミットが 0**。
  - [15348](https://gitlab.com/gitlab-org/gitlab/issues/15348) を参照してください。

### 購入エラー

Kibana を使用して、購入試行に関連する特定のエラーを検索できます。購入は GitLab.com または [CustomersDot](https://customers.gitlab.com/customers/sign_in) のいずれかで行えるため、お客様がどのシステムを使用して購入していたかを判断することが重要です。その後、システム固有の以下のヒントを使用してください。**Note:** チケットの送信者が購入したお客様ではない場合があります。

#### GitLab.com 購入エラー

**Note**: 購入に使用されたアカウントの **GitLab ユーザー名** が必要です。場合によってはユーザーがチケットフィールドの `GitLab username` 値を埋めているか、GitLab Super App の User Lookup でチケット依頼者の GitLab ユーザー名を確認できます。

1. [Kibana](https://log.gprd.gitlab.net/) に移動します
1. `pubsub-rails-inf-gprd-*` インデックスパターン (GitLab.com ログ) が選択されていることを確認します。
1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. 購入に使用されたアカウントのユーザー名について `json.user.username` に positive フィルタを追加します。
1. `json.tags.feature_category` に `purchase` の positive フィルタを追加します。

面倒？ `https://log.gprd.gitlab.net/goto/6aac4580-9d9b-11ed-85ed-e7557b0a598c` に行き、`json.user.username` の値を更新してください。

汎用的なエラーメッセージに遭遇した場合、より具体的なエラーのために [Kibana](#customersdot-purchase-errors) または [GCP](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-messages-from-gcp-logs-explorer) で CustomersDot 購入エラーログを確認してみてください。

**Tip:** ユーザーの購入試行の詳細を見るには、`https://log.gprd.gitlab.net/goto/45bb89c0-6ccc-11ed-9f43-e3784d7fe3ca` に行き、`json.username` の値を更新してください。

#### CustomersDot 購入エラー {#customersdot-purchase-errors}

**Note**: 購入に使用されたアカウントの **CustomersDot 顧客 ID** が必要です。顧客 ID の取得方法については、[このセクション](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-message-from-sentry) の `Step 1` を参照してください。

1. [Kibana](https://log.gprd.gitlab.net/) に移動します
1. `pubsub-rails-inf-prdsub-*` インデックスパターン (CustomersDot ログ) が選択されていることを確認します。
1. 結果が含まれると思われる値に日付範囲を設定します。不明な場合は `Last 7 days` に設定します。
1. 購入に使用されたアカウントのユーザー名について `json.customer_id` に positive フィルタを追加します。
1. `json.severity` に `ERROR` の positive フィルタを追加します。

面倒？ `https://log.gprd.gitlab.net/goto/9c28ba80-9d9b-11ed-9f43-e3784d7fe3ca` に行き、`json.customer_id` の値を更新してください。

Namespace の詳細がある場合、**Namespace ID** を取得し、`https://log.gprd.gitlab.net/goto/b598dfe0-9d9b-11ed-9f43-e3784d7fe3ca` に行き、`json.params.gl_namespace_id` の値を更新してください。

### リポジトリでのユーザーアクションの確認

`pubsub-rails-inf-gprd-*` インデックスを見ると、ユーザーが最近リポジトリをクローン／プッシュ (HTTPS で)、またはダウンロードしたかを判断できます。`json.username`、`json.path` (リポジトリ)、および `json.action` でフィルタリングして特定のイベントを見つけることができます:

- [`action: git_upload_pack`](https://log.gprd.gitlab.net/app/r/s/dLqA1) は誰かがリポジトリのクローンを実行した時です。
- [`action: git_receive_pack`](https://log.gprd.gitlab.net/app/r/s/lRA1L) は誰かがリポジトリにプッシュした時です。
- [`action: archive`](https://log.gprd.gitlab.net/app/r/s/Lxx9w) は誰かが UI の `Download source code` ボタン経由でリポジトリをダウンロードした時です。

SSH 経由の `git` アクティビティを検索するには、代わりに `pubsub-shell-inf-gprd-*` インデックスで特定のイベントを探すことができます (アンダースコアの代わりにマイナス記号に注意):

- [`command: git-upload-pack`](https://log.gprd.gitlab.net/app/r/s/B0qHS) は誰かが SSH 経由でクローンを実行した時です。
- [`command: git-receive-pack`](https://log.gprd.gitlab.net/app/r/s/p3J0W) は誰かが SSH 経由でプッシュを実行した時です。

上記リストのリンクを使用して、関心のあるプロジェクトの `json.path` または `json.gl_project_path` を埋めることができます。

### Webhook 関連のイベント

GitLab.com の [Webhook イベント](https://docs.gitlab.com/user/project/integrations/webhooks/) は Kibana で見つけることができます。グループまたはプロジェクトが [強制レート制限](https://docs.gitlab.com/user/gitlab_com/#webhooks) を超えた場合の特定も含みます。レート制限はサブスクリプションプランと **加えて** サブスクリプション内のシート数に応じて変わります。

いくつかの提案を示します:

- `pubsub-sidekiq-inf-gprd` (Sidekiq) を `json.class: "WebHookWorker"` および `json.meta.project : "path/to/project"` フィルタとともに使用して webhook イベントを特定します。
- `pubsub-rails-inf-gprd-*` (Rails) を `json.message : "Webhook rate limit exceeded"` および `json.meta.project : "path/to/project"` フィルタとともに使用して、レート制限により送信に失敗した webhook を特定します。
  - `json.meta.related_class : "GroupHook"` または `json.meta.related_class : "ProjectHook"` を使用して、グループフックとプロジェクトフックの間でフィルタリングできます。

### Service Desk メールの検索

Kibana で `json.to_address` を検索する際、これがメールの `to:` 行に表示されるアドレスであることを確認してください。たとえこれが GitLab プロジェクトのメールアドレスにエイリアスされていても同様です。プロジェクトのメールアドレスを検索し、Service Desk メールがそのエイリアス（例えば `support@domain.ext`）に送信された場合、検索には表示されません。

### ID 検証 SMS ログの検索

ID 検証 SMS ログを検索する際は、`pubsub-rails-inf-gprd-*` インデックスを使用し、以下のフィルタを適用します:
  
- `json.message: "IdentityVerification::Phone"`
- `json.username: <username>` - 特定のユーザー／お客様のログを確認する場合

[この本人確認 SMS 用の保存された検索](https://log.gprd.gitlab.net/app/r/s/WdEGR) も使用できます。便利なフィールドが事前選択され、上記のフィルタが適用されています。

注目すべき主要な JSON フィールドは以下のとおりです:
  
- `json.telesign_response`
- `json.telesign_status_code`
- Telesign でさらに確認する必要がある場合は `json.telesign_reference_id`
- `json.reason`

GitLab がメッセージを配信した良いケースでは、ステータスコード `200` で `Delivered to handset` のような `telesign_response` が見られると予想されます。`Delivered to handset` が見えるのにユーザー／お客様がまだコードを受信していない場合、お客様のデバイス／キャリア／メッセージングアプリが問題を引き起こしている可能性があります。
