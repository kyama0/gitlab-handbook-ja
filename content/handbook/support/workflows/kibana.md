---
title: Kibana の使い方
description: "Kibana とは何か、検索方法、結果の解釈方法、そこから特定の情報を取得するためのヒントとコツについての情報。"
category: Infrastructure for troubleshooting
upstream_path: /handbook/support/workflows/kibana/
upstream_sha: aadd07ec986f77b5bd259fb54f0f41d1f3397544
translated_at: "2026-06-18T05:33:51Z"
translator: claude
stale: false
lastmod: 2026-06-17T08:41:47+00:00
---

## 概要

このドキュメントは、Kibana とは何か、検索方法、結果の解釈方法についての情報を提供し、そこから特定の情報を取得するためのヒントとコツを含みます。

## Kibana の使い方

[Kibana](https://log.gprd.gitlab.net/) は、[Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch) 向けの[オープンソースのデータ可視化プラグイン](https://www.elastic.co/kibana)です。Elasticsearch クラスターにインデックスされたコンテンツの上に可視化機能を提供します。Support Engineering は Kibana を、GitLab.com 上のエラーイベントの検索と、ユーザーがさまざまな側面に対して行った特定の変更がいつ行われたかを検出する両方の目的で使用します。

ステージング (`gstg`) などの非本番環境では、https://nonprod-log.gitlab.net/ を使用してください。

>**注:** Kibana はデフォルトで UTC タイムゾーンを使用します。30 日より古いログは保持されません。より古いログへのアクセスが役立ったであろうチケットに取り組んでいる場合は、`Support::SaaS::Log retention period reached` マクロでフラグを立ててください（これは追跡目的のみの内部マクロです）。

### パラメーター

Kibana で*どこ*を検索するかを把握することは、適切な結果を得るうえで最も重要です。検索対象となるアプリケーション (GitLab.com) の領域は、Kibana では `Index` と呼ばれます。検索に使用されるデフォルトのインデックスは `pubsub-rails-inf-gprd-*` ですが、`(change)` ボタンをクリックすることで変更できます。

![検索インデックスの変更](/images/support/kibana_index-selection.jpg)

インデックスは、大部分において一般的な私たちの[ログ構造](https://docs.gitlab.com/administration/logs/)とほぼ対応しています。その他のよく使われるインデックスには次のものがあります。

- `pubsub-gitaly-inf-gprd-*`
- `pubsub-pages-inf-gprd-*`
- `pubsub-runner-inf-gprd-*`

たとえば、失敗したログインを追跡しようとしている場合は、インデックス `pubsub-rails-inf-gprd-*` を検索します。コントローラーに関わる [`500` エラー](/handbook/support/workflows/500_errors)を検索するには、デフォルトインデックスである `pubsub-rails-inf-gprd-*` を検索します。

インデックスとあわせて、追跡しようとしている特定のエラーやイベントが*いつ*発生したかを把握することも重要です。また、GitLab.com 上の Kibana のログは 30 日間保持されることを念頭に置くことが大切です。Kibana では検索結果に対して相対的および絶対的な時間範囲を選択でき、これは日付範囲を操作することで変更できます。

![日付範囲の変更](/images/support/kibana_changing-dates.jpg)

### フィールドとフィルター

**注:** 2022 年 3 月時点で、`Filters` を使用するのが Kibana 検索の推奨方法です。一般的な検索ボックスの使用は、`X of Y Shards Failed` という形式のエラーをいくつか生成する可能性があるため非推奨です。[Infra Issue](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/15207) を参照してください。

各ログエントリは、エントリに関する特定の情報が表示される複数の `Fields` で構成されています。検索結果にどのフィールドを適用し、それらをどうフィルターするかを把握することは、*どこ*を*いつ*検索するかを把握することと同じくらい重要です。最も重要なフィールドは次のとおりです。

- `json.method`
- `json.action`
- `json.controller` - 詳細は [GitLab ソースコードのコントローラー定義](https://gitlab.com/gitlab-org/gitlab/-/tree/master/app/controllers/projects)を参照
- `json.status`
- `json.path`

利用可能なすべてのフィールドは左側のメニューに表示され、各フィールドにカーソルを合わせて `add` ボタンをクリックすることで検索結果に追加できます。

![フィールド一覧の表示](/images/support/kibana_available-fields.jpg)

特定のフィールドでフィルターしないと、検索クエリで大量のログエントリが返された場合に、特定のログエントリを見つけるのが難しくなることがあります。

たとえば、GitLab.com ユーザー `tristan` が過去 15 分間に生成し、`404` ステータスコードを返したログイベントを探そうとしているとします。まず、その時間範囲内で `pubsub-rails-inf-gprd-*` インデックスを `json.username : tristan` で検索し、左側のサイドバーで `json.status` フィールドの隣の `add` をクリックすると、次のような結果が得られます。

![特定ユーザー名のフィルターなしの結果](/images/support/kibana_unfiltered-results.jpg)

結果の大部分は `200` を返したエントリで、これらは私たちが探しているものの範囲には含まれません。`404` が返された結果を検索するには、検索バーの下にある `+ Add Filter` をクリックして `json.status is 404` のポジティブフィルターを設定すると、まさに私たちが探しているこれらの結果が得られます。

![特定ユーザー名のフィルター済みの結果](/images/support/kibana_filtered-results.jpg)

### IP ブロックの原因の特定

IP ブロックに関連するエラーについて Kibana を検索する役立つヒントが[こちら](/handbook/support/workflows/ip-blocks/)にあります。

### ログの特定

何を探せばよいかわからない場合は、調査中のバグ/アクションを再現するために Self-Managed インスタンスの使用を検討してください。これにより、問題が GitLab.com に固有のものかどうかを確認できると同時に、Kibana を検索する際に参照しやすいログも得られます。

Self-Managed インスタンスを構成しようとしている Support Engineer は、利用可能な（会社が提供する）ホスティングオプションの一覧について [Sandbox Cloud ページ](/handbook/company/infrastructure-standards/realms/sandbox/)を確認してください。

### ログの共有

ログ検索の現在の状態を共有するには、Elastic の[ログ共有](https://www.elastic.co/docs/explore-analyze/report-and-share#share-a-direct-link)ドキュメントに従ってください。URL を直接コピーすると、他のユーザーがそれを使おうとした際に検索の読み込みに失敗します。エンコードされているため、検索パラメーターは URL に含まれません。

### ダッシュボード

パターンの特定に役立つ可視化を作成するために設計された、いくつかのダッシュボードが利用可能です。製品の特定の領域に絞り込んだり、特定の問題やバグを特定したりするのにも役立ちます。GitLab のどのチームメンバーも誰でも使えるダッシュボードを作成できますが、Support 固有のダッシュボードがいくつかあります。

- Correlation Dashboard
- Rate Limit & Requests Dashboard
- Integrations Dashboard
- Errors & Exceptions Dashboard

Kibana では `Analytics > Dashboard` でダッシュボードにアクセスでき、`Support` タグでフィルターするか、ダッシュボード名で検索できます。

独自のダッシュボードの作成に興味がある場合は、[Elastic のダッシュボード作成ガイド](https://www.elastic.co/guide/en/kibana/current/create-a-dashboard-of-panels-with-web-server-data.html)を読むとよいでしょう。より広く役立ちそうなものを作成した場合は、他の support チームメンバーが簡単に見つけられるよう、ダッシュボードに `Support` タグを追加することを検討してください。

ダッシュボードを使用する際は、必ず `View` モードになっていることを確認してください。view モードでは、値を入力すると可視化がそれに応じて更新されますが、ダッシュボードには保存されません。キャプチャした内容のスナップショットを共有する必要がある場合は、`Share > Get Links` を使用してください。

既存のダッシュボードを `editing` する前に、自分用のコピーを作成するために `cloning` して、それに応じてラベルを付けることを検討してください。

#### Correlation Dashboard

トラブルシューティングに関連する Correlation ID を見つけた場合は、correlation ダッシュボードを利用することで、各インデックスを個別に検索することなく、複数のインデックスにまたがる関連コンポーネントをすべてすばやく表示できます。ダッシュボードを開いたら、`json.correlation_id` フィルターをクリックして、見つけた correlation ID を入力するだけです。すると、web、workhorse、sidekiq、gitaly のインデックスを横断して検索します。

#### Rate Limit & Requests Dashboard

このダッシュボードを使用すると、ユーザー名、IP、パス、namespace でレコードをすばやくフィルターできます。これは、ユーザーや IP がレート制限の対象になっているかを判断し、使用パターンを発見・可視化する必要がある場合に役立ちます。

#### Integrations Dashboard

これは、namespace 全体にわたる特定のインテグレーションに関連するエラーを追跡するのに役立ちます。

#### Errors & Exceptions Dashboard

このダッシュボードは、namespace やパス/プロジェクトにまたがる特定の HTTP ステータスを取得し、クラスで絞り込むために使用できます。これは、namespace 全体、さらには GitLab.com 全体にわたるエラーパターンを理解するのに役立ちます。

## ヒントとコツ

このセクションでは、特定のフィールドを検索・フィルターすることで、Kibana で非常に具体的な情報を見つける方法を詳しく説明します。各ヒントには、例で使用したグループ、サブグループ、またはプロジェクトへのリンクを参考として記載しています。

### Runner Registration Token Reset

例のグループ: [gitlab-bronze](https://gitlab.com/gitlab-bronze)

グループまたはプロジェクトで GitLab Runner の registration token がリセットされたかを判定し、どのユーザーがいつリセットしたかを確認できます。この例では、registration token は `gitlab-bronze` のグループレベルでリセットされました。ログエントリを見つけるには、次のようにします。

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. グループのパスに対して `json.path` のポジティブフィルターを設定する。この例では単に `gitlab-bronze` となる。
1. `reset_registration_token` に対して `json.action` のポジティブフィルターを設定する。
1. 結果を確認する。もし結果があれば、リセットをトリガーしたユーザーのユーザー名が結果の `json.username` フィールドに含まれている。

### Access Token activity

Access Token（Group、Project、Personal）が実行しているアクティビティの種類を判定できます。ログエントリを見つけるには、次のようにします。

1. [API](https://docs.gitlab.com/api/personal_access_tokens/) または UI を使用して、対象の Access Token の `id` を見つける。
1. `pubsub-rails-inf-gprd-*` で、結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. ステップ 1 の `id` に対して `json.token_id` のポジティブフィルターを設定する。
1. 関心のある他のフィルターを追加する:
    - `json.username`
    - `json.path`
    - `json.method`
    - `json.token_type`

### Deleted Group/Subgroup/Project

- 例のグループ: [gitlab-silver](https://gitlab.com/gitlab-silver/)
- 例のプロジェクト: [gitlab-silver/test-project-to-delete](https://gitlab.com/gitlab-silver/test-project-to-delete)

Kibana を使用して、GitLab.com 上でグループ、サブグループ、またはプロジェクトの削除を誰がトリガーしたかを判定できます。ログエントリを見つけるには、次のようにします。

1. `pubsub-rails-inf-gprd-*` で、結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. プロジェクトのパス（該当する場合はグループとサブグループを含む）に対して `json.path` のポジティブフィルターを設定する。この例では `gitlab-silver/test-project-to-delete` となる。
1. `DELETE` に対して `json.method` のポジティブフィルターを設定する。
1. 結果を確認する。もし結果があれば、削除をトリガーしたユーザーのユーザー名が結果の `json.username` フィールドに含まれている。
プロジェクトまたはグループが最初に保留削除に移行する際、ログエントリは `json.params.key: [_method, authenticity_token, namespace_id, id]` となる。これに対し、ユーザーが[削除を強制する](https://docs.gitlab.com/user/project/working_with_projects/#delete-a-project)場合、ログエントリはプロジェクトでは `json.params.key: [_method, authenticity_token, permanently_delete, namespace_id, id]` のようになり、グループでは `json.params.key: [_method, authenticity_token, permanently_remove, id]` のようになる。

（サブ）グループの削除の一環として削除されたプロジェクトの一覧を確認するには、sidekiq で次のようにします。

1. `json.message` を「was deleted」でフィルターする。
1. 2 つ目のフィルター `json.message` を `path/group` に設定する。

### Viewed CI/CD Variables

私たちは [グループイベントの監査ログ](https://docs.gitlab.com/user/compliance/audit_events/#group-audit-events) において CI/CD 変数に対して行われた*変更*を明示的にはログ記録していませんが、誰が変数ページを閲覧した可能性があるかを Kibana を使って確認する方法があります。対象の変数を変更するには、変数ページの閲覧が必要です。これは、当該ページを閲覧した人が必ずしも変数に変更を加えたことを示すわけでは*ありません*が、変更を行い得た潜在的なユーザーのリストを絞り込むのに役立つはずです。（これらの変更をログ記録してほしい場合は、[こちらにコメントを集めるための Issue があります](https://gitlab.com/gitlab-org/gitlab/-/issues/8070)。）

1. `json.path` に `is` フィルターを設定し、対象プロジェクトの完全なパスに続けて `/-/variables` を入力する。たとえば `tanuki-rules` という名前のプロジェクトがあれば、`tanuki-rules/-/variables` と入力する。
1. Kibana の日付を、変更が行われたと思われる範囲に設定する。
1. これにより、その時間枠内でそのページにアクセスしたすべての人を確認できるはずである。`json.meta.user` にユーザーのユーザー名が表示され、`json.time` にページにアクセスされたタイムスタンプが表示される。
1. `json.graphql.operation_name` を `is` `getProjectVariables` で検索することもできる。
1. 一般に、`json.action` フィールドが `update` を返し、`json.controller` が `Projects::VariablesController` を返す結果は、変数に対して更新が行われたことを意味する可能性が高い。

### Let's Encrypt 証明書の問題の発見

場合によっては、1 つ以上の理由で Let's Encrypt 証明書の発行に失敗することがあります。正確な理由を判定するために、Kibana でこれを調べることができます。

1. `json.message` に「Failed to obtain Let's Encrypt certificate」のポジティブフィルターを設定する。
1. 検索バーに GitLab Pages のドメイン名を入力する。たとえば `json.pages_domain: "sll-error.shushlin.dev"`
1. `json.acme_error.detail` でフィルターするか、それを見つける。これにより関連するエラーメッセージが表示されるはずである。この場合、エラー「No valid IP addresses found for sll-error.shushlin.dev」を確認できる。

### Deleted User

検索時点で過去 30 日以内に発生していれば、Kibana を使用して GitLab.com 上のアカウントが削除されたかどうか、およびその時期を確認できます。

- 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。

アカウントが自己削除された場合は、次のフィルターで検索してみてください。

1. ユーザーのユーザー名がわかれば、それに対して `json.username` のポジティブフィルターを設定する。
1. `RegistrationsController` に対して `json.controller` のポジティブフィルターを設定する。

アカウントが管理者によって削除された場合は、次のフィルターで検索してみてください。

1. ユーザーのユーザー名に対して `json.params.value` のポジティブフィルターを設定する。
1. `DELETE` に対して `json.method` のポジティブフィルターを設定する。

結果を確認してください。フィルターしたアカウントが指定した時間枠内に削除されていれば、結果は 1 件だけのはずです。

[未確認アカウント](https://docs.gitlab.com/user/gitlab_com/#confirmation-settings)を削除する cron ジョブによってアカウントが削除されたと疑われる場合は、次のフィルターで検索してみてください。

1. `pubsub-sidekiq-inf-gprd*` インデックスに変更する。
1. ユーザーのユーザー名に対して `json.meta.user` のポジティブフィルターを設定する。（あるいは、ユーザーの User ID がわかればそれを使って `json.args.keyword` を使用できる。）
1. `DeleteUserWorker` に対して `json.class` のポジティブフィルターを設定する。

### 二要素認証の無効化

- [検索へのクイックリンク](https://log.gprd.gitlab.net/goto/5598ea40-a651-11ed-9f43-e3784d7fe3ca)

Kibana を使用して、GitLab.com アカウントの 2FA をどの管理者が無効化したかを確認できます。ログエントリを確認するには、次のようにします。

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. 2FA が無効化された対象の `username` に対して `json.location` のポジティブフィルターを設定する。
1. `disable_two_factor` に対して `json.action` のポジティブフィルターを設定する。
1. 読みやすくするために、`json.location` と `json.username` フィールドのみを表示する。
1. 結果を確認する。

### SSO Enforcement の有効化/無効化

Kibana を使用して、GitLab.com 上のグループで SSO Enforcement が有効化または無効化されたかどうか、その時期、およびどのユーザーが行ったかを確認できます。

- 例のグループ: [gitlab-silver](https://gitlab.com/gitlab-silver/)

#### SSO Enforcement の有効化

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. `Groups::SamlProvidersController` に対して `json.controller` のポジティブフィルターを設定する。
1. `update` に対して `json.action` のポジティブフィルターを設定する。
1. `PATCH` に対して `json.method` のポジティブフィルターを設定する。
1. グループのパス（この例では `gitlab-silver`）に対して `json.path` のポジティブフィルターを設定する。
1. 結果があれば、`json.params` フィールドを確認する。`\"enforced_sso\"=>\"1\"` が存在する場合、そのエントリは `json.username` フィールドのユーザーによって SSO Enforcement が有効化されたときに記録されたものである。

#### SSO Enforcement の無効化

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. `Groups::SamlProvidersController` に対して `json.controller` のポジティブフィルターを設定する。
1. `update` に対して `json.action` のポジティブフィルターを設定する。
1. `PATCH` に対して `json.method` のポジティブフィルターを設定する。
1. グループのパス（この例では `gitlab-silver`）に対して `json.path` のポジティブフィルターを設定する。
1. 結果があれば、`json.params` フィールドを確認する。`\"enforced_sso\"=>\"0\"` が存在する場合、そのエントリは `json.username` フィールドのユーザーによって SSO Enforcement が無効化されたときに記録されたものである。

#### SAML ログイン

SAML ログインの問題を調査するには:

`pubsub-rails-inf-gprd-*` ログで:

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. [私たちの SAML グループのドキュメント](https://docs.gitlab.com/user/group/saml_sso/troubleshooting/#search-rails-logs-for-a-saml-sign-in)で推奨されているとおりにポジティブフィルターを設定する。

SAML レスポンスをデコードし、選択したフィルターに対応する結果を確認すると、欠落または誤設定された属性があるかどうかを確認できます。

#### SCIM のプロビジョニングとデプロビジョニング

SCIM の問題を調査するには:

`pubsub-rails-inf-gprd-*` ログで:

1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. 次に対して `json.path` のポジティブフィルターを設定する:
   - グループ全体の SCIM リクエストを確認する場合は `/api/scim/v2/groups/<group name>`。このパスはグループの SAML 設定でも確認できる。
   - 特定のユーザーの SCIM リクエストを確認する場合は `/api/scim/v2/groups/<group name>/Users/<user's SCIM identifier>`。
1. `POST` または `PATCH`（それぞれ初回プロビジョニング、または更新/デプロビジョニング）に対して `json.methhod` のポジティブフィルターを設定する。
1. 特定のアクションをさらに特定するために `json.params.value` にフィルターを設定する:
   - `json.params.value` = `Add` は初回プロビジョニング、またはアカウント詳細の変更を示す
   - `json.params.value` = `Replace` は SCIM デプロビジョニングを示す。これはユーザーが IdP の App/グループから削除されたときに発生する
   - `json.params.value` = `<External ID>` は、特定された External ID に関連するあらゆる SCIM アクティビティを示す。

SCIM でプロビジョニングされたアカウントが削除された場合:

1. 上記の手順に従い、`json.method` が `POST` であるプロビジョニングレコードから `correlation_id` を取得する。
1. [Correlation Dashboard](#correlation-dashboard) に移動し、関連する `correlation_id` を検索する。
1. 結果の中で、`Correlation Dashboard - Web` セクションのレコードと、`json.subcomponent` が `elasticsearch` であるエントリを探す。そのエントリ内で、`json.tracked_items_encoded` の `[[numbers,"User <user_id> user_<user_id>"]]` という形式の中から `user_id` を見つける。

ユーザーが未確認メールにより削除されたかどうかを調査するには、[Deleted User](#deleted-user) の手順に従ってください。

### グループまたはサブグループからのユーザー削除の検索

保持期間（30 日）内に発生していれば、Kibana を使用して、グループまたはサブグループからユーザーが削除されたかどうか、その時期、および誰によって削除されたかを判定できます。

`pubsub-rails-inf-gprd-*` で、次のデータポイントを使ってログエントリを見つけます。

#### ユーザー削除 (DELETE) の確認

1. `Groups::GroupMembersController#destroy` に対して `json.meta.caller_id` のポジティブフィルターを設定する
1. UI でユーザー削除アクションを実行した人のユーザー ID に対して `json.meta.user_id` のポジティブフィルターを設定する
1. `DELETE` に対して `json.method` のポジティブフィルターを設定する

#### ユーザー削除リクエストに関するさらなる詳細の取得

次のフィルターは、削除されたユーザーと、どのグループまたはサブグループから削除されたかを特定するのに役立ちます。

1. `Membership destroyed` に対して `json.custom_message` のポジティブフィルターを設定する
1. `Groups::GroupMembersController#destroy` に対して `json.meta.caller_id` のポジティブフィルターを設定する
1. ユーザー削除アクションを実行したユーザーのユーザー ID `json.meta.user_id` またはユーザー名 `json.meta.user` にフィルターを設定する
1. 対象ユーザー ID `json.details.target_id` にフィルターを設定する

### 削除された Container Registry タグの検索

削除が過去 30 日以内に発生していれば、Kibana を使用して、container registry のタグが削除されたかどうか、その時期、および誰がトリガーしたかを判定できます。

`pubsub-rails-inf-gprd-*` でログエントリを見つけるには:

1. 対象の container registry のリンクを取得する。（例: <https://gitlab.example.com/group/project/container_registry/><ContainerRepository>）
1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. `*ContainerRepository/<regitsry id>.*` に対して `json.graphql.variables` のポジティブフィルターを設定する。
1. `destroyContainerRepositoryTags` に対して `json.graphql.operation_name` のポジティブフィルターを設定する。

### Kibana での 500 番台エラーの検索

[14.7 以降、500 エラーページで Correlation ID が提供される](https://gitlab.com/gitlab-org/gitlab/-/issues/34113)ようになりました（インターフェース使用時）。顧客にこれを提供してもらい、Kibana で `json.correlation_id` でフィルターできます。

Kibana は通常 `5XX` エラーを見つけるためには使用されませんが、Sentry で簡単に見つけられず、まず Kibana を検索するのが有益な場合もあります。Kibana で一般的な検索を行うには:

1. エラー発生時にユーザーがアクセスしていた完全な URL を取得する。
1. [Kibana にログインする](https://log.gitlab.net/app/kibana#)。
1. 正しい時間フィルター（右上）を選択する。例: last 30 minutes、24 hours、7 days。
1. 検索フィールドに `json.path : "the_path_after_gitlab.com_from_the_URL"` と入力する。
1. サイドバーから関連するフィールドを選択する。`500` エラーの場合は、`json.status` でフィルターし `is` を選択して `500` を入力する。
1. サイドバーの一覧から関連するフィールドを引き続き使用して検索を絞り込む。

GitLab.com 上でのエラーの検索と発見に関する詳細は、[500 errors workflow](/handbook/support/workflows/500_errors/) を参照してください。

### IP 範囲でのフィルター

顧客は、Kubernetes クラスターや、GitLab へのアクセスが必要となり得るその他の外部サーバーといったリソースの IP 範囲を私たちに提供することがあります。Elasticsearch Query DSL を使って範囲を検索できます。

1. `+ Add Filter` > `Edit as Query DSL` をクリックする
1. 次の形式を使ってクエリを作成する:

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

1. Save をクリックしてクエリを実行する。

範囲によってはこの操作はコストが高くなる場合があるため、まず日付範囲を絞り込むのが最善です。

### Import Errors

タイムアウト関連のインポートの多くは、Issue やマージリクエストがほとんどまたはまったくない部分的なインポートに終わります。比較的小さな差（10% 以下）の場合は、それらの特定の Issue やマージリクエストにエラーがある可能性が最も高いです。

エラーが発生した場合は、必ずエクスポートが [互換性のある GitLab バージョン](https://docs.gitlab.com/user/project/settings/import_export/#version-history) から行われたものか確認してください。

Kibana でインポートエラーを検索するためのヒントをいくつか紹介します。

- pubsub-sidekiq-inf-gprd インデックスパターン（Sidekiq ログ）を使用し、フィルターを追加して絞り込む
  - json.meta.project: `path/to/project`
  - json.severity: (`INFO` 以外)
  - json.job_status: (`done` 以外)
  - json.class が `RepositoryImportWorker`
- pubsub-rails-inf-gprd インデックスパターン（Rails ログ）を使用し、フィルターを追加して絞り込む
  - json.controller: error ステータスの `Projects::ImportsController`
  - json.path: `path/to/project`
- Sentry で `Projects::ImportService::Error` を検索/探す。`is:unresolved` フィルターを必ず外すこと。

エラーがある場合は、既存の Issue を検索してください。メタデータがエラーを投げていて Issue が存在しないエラーについては、Sentry から作成することを検討してください。

エラーが見つからず、インポートが部分的である場合は、タイムアウトの問題である可能性が最も高いです。

### Export Errors

エクスポートエラーは、ユーザーが UI または [この API エンドポイント](https://docs.gitlab.com/api/project_import_export/#schedule-an-export) を介してエクスポートしようとした際に発生し得ます。API のパラメーターにより、事前署名された AWS S3 URL などの外部 URL へのエクスポートが可能です。通常、エクスポートプロセスは次の手順で構成されます。

- エクスポートが開始されたことを確認する初期の `202` レスポンスをクライアントに返す
- プロジェクトのサイズに応じて、数秒から数分かけてエクスポートを処理する
- 指定されたアップロード URL へのアップロードを開始する

Kibana でエクスポートログを検索するための提案をいくつか紹介します。

- `pubsub-sidekiq-inf-gprd`（Sidekiq）で、フィルターを追加して検索を絞り込む:
  - json.class: `Projects::ImportExport`
  - json.meta.project `path/to/project`

`Projects::ImportExport` クラスには、次のサブコンポーネントが含まれます。

- `Projects::ImportExport::RelationExportWorker`
- `Projects::ImportExport::CreateRelationExportsWorker`
- `Projects::ImportExport::ParallelProjectExportWorker`
- `Projects::ImportExport::WaitRelationExportsWorker`
- `Projects::ImportExport::AfterImportMergeRequestsWorker`

[Correlation Dashboard](#correlation-dashboard) を使用すれば、エクスポートプロセス全体を通じて Sidekiq イベントを追跡し、json.severity: `ERROR` でフィルターしてエラーを見つけられるはずです。以下は、AWS S3 へのアップロードが失敗する例です。

```json
"severity": "ERROR",
      "meta.caller_id": "ProjectExportWorker",
      "subcomponent": "exporter",
      ...
      "message": "Invalid response code while uploading file. Code: 400",
      "response_body": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Error><Code>EntityTooLarge</Code><Message>Your proposed upload exceeds the maximum allowed size</Message><ProposedSize>6353524398</ProposedSize><MaxSizeAllowed>5368709120</MaxSizeAllowed><RequestId><omitted></RequestId><HostId><omitted></HostId></Error>",
```

XML レスポンスは、プロジェクトが最大許容サイズを超えているなど、失敗の理由を示すことがあります。

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

### Container Cleanup Worker ログの検索

Container registry のクリーンアップログは、registry クリーンアップのステータスを確認するために使用できます。これらのログは通常とは異なるスキームを持ち、ほとんどの `json.meta` タグを使用しません。

Kibana でこれらのログを見つけるには:

1. `pubsub-sidekiq-inf-gprd*` インデックスを使用する。
1. `json.meta.feature_category: container_registry` に対してポジティブフィルターを設定する。
1. 数値のプロジェクト ID に対して `json.extra.container_expiration_policies_cleanup_container_repository_worker.project_id` のポジティブフィルターを設定する。
1. 数値の container repository ID に対して `json.extra.container_expiration_policies_cleanup_container_repository_worker.container_repository_id` のポジティブフィルターを設定する。

`json.extra.container_expiration_policies_cleanup_container_repository_worker` 配下の他のフィールドには、registry クリーンアップ操作に関する関連統計が含まれます。

#### 既知のインポート問題

- **インポートされたプロジェクトのサイズが、元の場所と異なる**
  - その理由の説明については[このコメント](https://gitlab.com/gitlab-org/gitlab/-/issues/27742#note_215721494)を参照してください。アーティファクトはリポジトリサイズの一部であるため、それらが存在するかどうかで大きな差が生じることがあります。
- **リポジトリのコミット数が 0 と表示される**。
  - [15348](https://gitlab.com/gitlab-org/gitlab/issues/15348) を参照してください。

### Purchase Errors

Kibana を使用して、購入の試行に関連する特定のエラーを検索できます。購入は GitLab.com または [CustomersDot](https://customers.gitlab.com/customers/sign_in) のいずれかで行われ得るため、顧客が購入にどちらのシステムを使用していたかを判断し、以下のシステム固有のヒントを使用することが重要です。**注:** チケットの提出者が、購入を行う顧客とは限りません。

#### GitLab.com purchase errors

**注**: 購入に使用したアカウントの **GitLab username** が必要です。ユーザーがチケットフィールドの `GitLab username` の値を入力している場合もありますし、GitLab Super App の User Lookup でチケット依頼者の GitLab username を確認することもできます。

1. [Kibana](https://log.gprd.gitlab.net/) に移動する
1. `pubsub-rails-inf-gprd-*` インデックスパターン（GitLab.com ログ）が選択されていることを確認する。
1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. 購入に使用したアカウントのユーザー名に対して `json.user.username` のポジティブフィルターを設定する。
1. `purchase` に対して `json.tags.feature_category` のポジティブフィルターを設定する。

面倒ですか？ `https://log.gprd.gitlab.net/goto/6aac4580-9d9b-11ed-85ed-e7557b0a598c` に移動して `json.user.username` の値を更新してください。

一般的なエラーメッセージに遭遇した場合は、より具体的なエラーを得るために、[Kibana](#customersdot-purchase-errors) または [GCP](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-messages-from-gcp-logs-explorer) で CustomersDot の購入エラーログを確認してみてください。

**ヒント:** ユーザーの購入試行の詳細を確認するには、`https://log.gprd.gitlab.net/goto/45bb89c0-6ccc-11ed-9f43-e3784d7fe3ca` に移動して `json.username` の値を更新してください。

#### CustomersDot purchase errors

**注**: 購入に使用したアカウントの **CustomersDot customer ID** が必要です。customer ID の取得方法については、[このセクション](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-message-from-sentry)の `Step 1` を参照してください。

1. [Kibana](https://log.gprd.gitlab.net/) に移動する
1. `pubsub-rails-inf-prdsub-*` インデックスパターン（CustomersDot ログ）が選択されていることを確認する。
1. 結果が含まれていると思われる値に日付範囲を設定する。わからない場合は `Last 7 days` に設定する。
1. 購入に使用したアカウントのユーザー名に対して `json.customer_id` のポジティブフィルターを設定する。
1. `ERROR` に対して `json.severity` のポジティブフィルターを設定する。

面倒ですか？ `https://log.gprd.gitlab.net/goto/9c28ba80-9d9b-11ed-9f43-e3784d7fe3ca` に移動して `json.customer_id` の値を更新してください。

namespace の詳細がわかる場合は、**Namespace ID** を取得し、`https://log.gprd.gitlab.net/goto/b598dfe0-9d9b-11ed-9f43-e3784d7fe3ca` に移動して `json.params.gl_namespace_id` の値を更新してください。

### リポジトリに対するユーザーアクションの確認

`pubsub-rails-inf-gprd-*` インデックスを見ると、ユーザーが最近リポジトリをクローン/プッシュ（HTTPS で）またはダウンロードしたかを判定できます。`json.username`、`json.path`（リポジトリ）、`json.action` でフィルターして、特定のイベントを見つけられます。

- [`action: git_upload_pack`](https://log.gprd.gitlab.net/app/r/s/dLqA1) は、誰かがリポジトリのクローンを実行したときである。
- [`action: git_receive_pack`](https://log.gprd.gitlab.net/app/r/s/lRA1L) は、誰かがリポジトリをプッシュしたときである。
- [`action: archive`](https://log.gprd.gitlab.net/app/r/s/Lxx9w) は、誰かが UI の `Download source code` ボタンを介してリポジトリをダウンロードしたときである。

SSH 経由の `git` アクティビティを検索するには、代わりに `pubsub-shell-inf-gprd-*` インデックスで特定のイベントを確認できます（アンダースコアではなくマイナス記号であることに注意）。

- [`command: git-upload-pack`](https://log.gprd.gitlab.net/app/r/s/B0qHS) は、誰かが SSH 経由でクローンを実行したときである。
- [`command: git-receive-pack`](https://log.gprd.gitlab.net/app/r/s/p3J0W) は、誰かが SSH 経由でプッシュを実行したときである。

上記の一覧のリンクを使用し、対象のプロジェクトの `json.path` または `json.gl_project_path` を入力できます。

### Webhook 関連のイベント

GitLab.com の [Webhook イベント](https://docs.gitlab.com/user/project/integrations/webhooks/) は Kibana で見つけられます。これには、グループやプロジェクトが [強制レート制限](https://docs.gitlab.com/user/gitlab_com/#webhooks) を超えた時期の特定も含まれます。レート制限は、サブスクリプションプラン*および*サブスクリプションのシート数によって変わります。

提案をいくつか紹介します。

- `pubsub-sidekiq-inf-gprd`（Sidekiq）をフィルター `json.class: "WebHookWorker"` および `json.meta.project : "path/to/project"` とともに使用して webhook イベントを特定する。
- `pubsub-rails-inf-gprd-*`（Rails）をフィルター `json.message : "Webhook rate limit exceeded"` および `json.meta.project : "path/to/project"` とともに使用して、レート制限により送信に失敗した webhook を特定する。
  - `json.meta.related_class : "GroupHook"` または `json.meta.related_class : "ProjectHook"` を使用して、Group と Project の hook をフィルター分けできる。

### Service Desk メールの検索

Kibana で `json.to_address` を検索する際は、これがメールの `to:` 行に表示されるアドレスであることを確認してください。たとえそれが GitLab プロジェクトのメールアドレスにエイリアスされていてもです。プロジェクトのメールアドレスを検索しても、Service Desk のメールがそのエイリアス（たとえば `support@domain.ext`）に送信されていた場合は、検索に表示されません。

### identity verification SMS ログの検索

identity verification SMS ログを検索する際は、`pubsub-rails-inf-gprd-*` インデックスを使用し、以下のフィルターを適用してください。

- `json.message: "IdentityVerification::Phone"`
- `json.username: <username>` - 特定のユーザー/顧客のログを確認する場合

便利なフィールドがあらかじめ選択され、上記のフィルターが適用された[この Identity Verification SMS 保存済み検索](https://log.gprd.gitlab.net/app/r/s/WdEGR)も使用できます。

注目すべき主要な JSON フィールドは次のとおりです。

- `json.telesign_response`
- `json.telesign_status_code`
- `json.telesign_reference_id` - Telesign でさらに確認する必要がある場合
- `json.reason`

GitLab がメッセージを配信できた良好なケースでは、`telesign_response` が `Delivered to handset` のようになり、ステータスコードが `200` になることが期待されます。`Delivered to handset` が確認できるのにユーザー/顧客がまだコードを受信していない場合は、その人のデバイス/キャリア/メッセージングアプリが問題を引き起こしている可能性があります。
