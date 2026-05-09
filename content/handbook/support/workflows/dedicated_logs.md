---
title: GitLab Dedicated のログ
category: GitLab Dedicated
description: "GitLab Dedicated サポート - ログの取り扱い"
upstream_path: /handbook/support/workflows/dedicated_logs/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T21:00:00Z"
translator: claude
stale: false
---

## ログの取り扱い

サポートは、私たちの [OpenSearch](https://opensearch.org/) インフラストラクチャを通じて GitLab Dedicated テナントのログにアクセスできます。開始するには [ログへのアクセス](#accessing-logs) を参照してください。[OpenSearch](https://opensearch.org/) は [Kibana](/handbook/support/workflows/kibana/) のように使えますが、違いについては [ログの検索](#searching-logs) を参照してください。

GitLab Dedicated のチケットに取り組む際は、該当するログエントリの特定に役立つ情報を顧客に求めることを優先してください。これらの情報の収集はチケット内のできるだけ早い段階で開始するのがベストです。具体的にどのような情報が必要かは、解決しようとしている問題によって異なりますが、ユーザー名、プロジェクトパス、プロジェクト ID、タイムゾーン付きの正確な日時、[相関 ID](https://docs.gitlab.com/administration/logs/tracing_correlation_id/)、送信元 IP アドレスなどはいずれも良い例です。

OpenSearch 上のログはすべて UTC タイムゾーンで表示されます（顧客のタイムゾーンに関係なく）。

### テスト実行時にログにタグを付ける

顧客はテスト時に `user-agent` フィールドにチケット ID などのカスタム識別子を追加できます。これによりテストに関連するログのフィルタリングが容易になります。

例:

```bash
curl -k -vvv -A"GitLabSupport012345" "https://tenant.gitlab-dedicated.com/users/sign_in"
```

### Preprod デプロイメント

該当する場合、特定の顧客の Preprod 環境向けの Opensearch ログへのリンクを見つけるには [GitLab Dedicated Preprod switchboard](/handbook/support/workflows/dedicated_switchboard.md#customers-with-dedicated-preprod-deployments) を使ってください。

## テナントの特定

各顧客には、OpenSearch でログを調査するために必要な専用の認証情報セットがあります。その顧客の OpenSearch インスタンスへの認証情報および URL は `GitLab Dedicated - Support` [1Password vault](/handbook/security/#vaults) に保管されています。各顧客は vault 内で 3 単語の **Internal reference** で示されているため、その顧客に使用する適切な認証情報を識別するには `<tenant name>` を参照する必要があります。これはアクセス可能な URL の一部として使用されます（例: `opensearch.<tenant name>.gitlab-dedicated.com`）。GitLab Dedicated インスタンスの URL からテナントの **Internal reference** を識別する単一の信頼できる情報源として [Switchboard を使用](/handbook/support/workflows/dedicated_switchboard/#accessing-customer-configuration) してください。

## ログへのアクセス {#accessing-logs}

特定のテナントのログにアクセスするには、`GitLab Dedicated - Support` Vault に保管された認証情報を見つけ、そこに記載されている対応するテナント URL にアクセスします。
テナントの OpenSearch サイトに入ったら:

1. "Global" テナントを選択
1. OpenSearch Dashboards 配下のサイドバーから "Discover" を選択
1. 次の画面でログが表示されているはずです。インデックス `gitlab-*` が選択されていることを確認してください。

`gitlab-*` インデックスにはタイムスタンプフィールドがあるため、こちらから始めることをおすすめします。便利なスカイラインのグラフが表示され、時間でフィルタリングできます。`git*` インデックスはタイムスタンプフィールドが定義/使用されていないため、有用性が低いです。ログが表示されない場合は、サイトの cookie、ローカルストレージ、すべてのセッションデータをクリアして上記の手順を繰り返してみてください。

ログは OpenSearch 内で 7 日間保持されます。S3 内ではより長く保持されますが、それらにはサポートからアクセスできません。古いログへのアクセスがあると役に立ったチケットに取り組んでいる場合は、`Support::SaaS::Log retention period reached` マクロでフラグを立ててください（これは追跡目的のみの内部マクロです）。保持期間を超えてログを保存できるよう、関連するログエントリや頻発するエラーのスクリーンショットをコピーしてチケットの内部メモまたは [field note](/handbook/support/workflows/fieldnote_issues/) に貼り付けてください。

### ログの共有

GitLab アプリケーションが生成するログは、チケットを通じて顧客と直接共有 **できます**。GitLab アプリケーションが生成したものでないログは顧客と共有できません。次の項目を確認することで、ログエントリが GitLab アプリケーションによって生成されたものかどうかを判断できます:

- `kubernetes.container_name` が以下のいずれかであるか?:
  - `gitlab-shell`
  - `gitlab-workhorse`
  - `kas`
  - `registry`
  - `sidekiq`
  - `webservice`

**Yes** の場合: そのログエントリはチケット経由で顧客と直接共有 **できます**。

- `fluentd_tag` の値が `gitaly.app` であるか?

**Yes** の場合: そのログエントリはチケット経由で顧客と直接共有 **できます**。

上記のいずれの基準も満たさない場合、ログエントリはデフォルトでは顧客と直接共有すべきではありません。ログエントリの共有が顧客にとって有益だと考える場合は、[内部ログ・データ・グラフの共有](/handbook/support/workflows/dedicated/#sharing-internal-logs-data--graphs) を参照してください。

GitLab Dedicated の顧客は [アプリケーションログへのアクセス](https://docs.gitlab.com/administration/dedicated/monitor/#request-access-to-application-logs) を要求できます。

#### 7 日より古いログの要求

顧客が 7 日より古い期間のログを要求する場合、セキュリティ Issue を作成する必要があります。[Security - log request workflow](/handbook/support/workflows/log_requests.md) と同じ手順に従ってください。

#### 顧客にアプリケーションログへのアクセスを許可する

顧客は [自社のインスタンスを監視する](https://docs.gitlab.com/administration/dedicated/monitor/) ために、AWS S3 バケットに保存されている自社のログへのアクセスを要求する場合があります。

1. チケットで、顧客に [必要な情報](https://docs.gitlab.com/administration/dedicated/monitor/#request-access-to-application-logs) を提供するよう依頼します。この場合は **IAM principal** です。

   - IAM principal は [IAM role principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-roles) または [IAM user principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/) でなければなりません。

1. GitLab Dedicated Issue トラッカーで [Request for Help Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicated) を開きます。
1. IAM principal を Environment Automation チームに提供します。
1. S3 バケットの名前を顧客に提供します。

#### GitLab 内でログリンクを共有する

他の GitLab チームメンバーとログのリンクを共有する際は、必ず **Permalink** を生成してください。これは次の手順で行います:

1. [filters](#filters) を使って関心のあるログエントリを見つける
1. 右上の **Share** をクリック
1. *任意* **Short URL** トグルをスライド
1. **Copy link** をクリック

ブラウザのアドレスバーの URL ではなく、コピーされたリンクを共有してください。

## ログの特定

何を探せばよいかわからないとき、調査中のバグ/アクションを再現するために Self-Managed インスタンスを使うことを検討してください。これにより、Issue が特定の GitLab Dedicated テナント固有のものなのかどうかを確認できると同時に、OpenSearch を検索する際に簡単に参照できるログも得られます。

Self-Managed インスタンスを構成したいサポートエンジニアは、会社が提供するホスティングオプションのリストについて [Sandbox Cloud ページ](/handbook/company/infrastructure-standards/realms/sandbox/) を確認してください。

### Table と JSON

OpenSearch の各エントリは `>` アイコンをクリックすることで展開してより多くの情報を表示できます。**Expanded document** ビューには `Table` と `JSON` の 2 つのタブがあります。デフォルトでは `Table` が表示されます。`Table` を表示しても探している情報が見つからない場合は `JSON` をクリックしてください。`JSON` ビューでは、ログエントリの JSON 内容が整形された形で表示されます。JSON をコピーして [jq](https://jqlang.github.io/jq/) や [jless](https://jless.io/) などのツールでローカルにパースすることもできます。

## ログの検索 {#searching-logs}

GitLab Dedicated は [Cloud Native Hybrid リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/10k_users/#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative) を使用しているため、OpenSearch でのログ検索は [Kibana](kibana.md) とは少し異なります。

- OpenSearch では、検索バーに用語を自由に入力できます。
  - 比較すると、Kibana では検索バーに自由に入力することは [推奨されません](kibana.md#fields-and-filters)。
- フィールドも [Kibana](kibana.md) と同様にフィルタとして使用できます。

### フィールドとフィルタ {#filters}

OpenSearch で利用できる **フィールド** と **フィルタ** はログエントリを見つけやすくしてくれます。

#### フィールド {#fields}

一般的なフィールド:

- `host:` ログの GitLab ホスト。`<tenant name>-gitaly-*` または `<tenant name>-consul-2` などになります。
- `referrer:` プロジェクトパスを保持します。`https://tenant.gitlab-dedicated.com/example-group/test123`
- `path:` テナントホスト名以降の URL の部分。特定のリクエストが何をしようとしていたかについての有用な情報を提供できます。
- `message:` Self-Managed インスタンスのログで見られるメッセージです。`xxx.xxx.xxx.xxx - - [08/Jul/2020:13:24:43 +0000] "GET /assets/webpack/commons-pages.projects.show-pages.projects.tree.show.21909065.chunk.js HTTP/1.1" 200 9316 "https://tenant.gitlab-dedicated.com/example-group/test123" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36" 1343 0.001 [default-gitlab-webservice-default-8181] [] xxx.xxx.xxx.xxx:8181 9309 0.000 200 fe130eac78314cwf352g3762397572cb`
- `subcomponent`: このフィールドの値は [GitLab のログシステム](https://docs.gitlab.com/administration/logs/) のエントリに対応します。可能な値には `production_json`、`application_json`、`api_json`、`auth_json`、`graphql_json` が含まれます。[フィルタ](#filters) を使って特定の subcomponent に関連するすべてのログエントリを収集できます。

Gitaly 関連フィールド:

- `grpc.request.glProjectPath:` 実際の GitLab プロジェクトパスです。
- `grpc.request.repoPath:` プロジェクトのハッシュ ID パスです。
- `grpc.request.repoStorage:` リポジトリを保持している Gitaly ストレージです。
- `grpc.method:` gRPC メソッドの名前です。
- `grpc.request.fullMethod:` gRPC メソッドの完全修飾名（サービス名とメソッド名を含む）です。

SAML 関連フィールド:

- `action:saml`
- `path: /users/auth/saml/callback`
- `controller: OmniauthCallbacksController`
- `location: https://tenant.gitlab-dedicated.com/`

#### フィルタ

フィルタは、関心のあるログエントリを特定する強力な方法です。

##### フィルタの作成

OpenSearch で **OpenSearch Dashboards** > **Discover** を開いた後、次の手順でフィルタを作成できます:

1. **Add filter** を選択
1. **Field** ドロップダウンで **Select a field first** をクリック
1. 必要な **Field** をクリック（スクロールするか、入力で素早く検索）
1. **Operator** を選択
1. **Value** フィールドに、フィルタしたい文字列を追加

開始するには `is` **Operator** を使ってください。これにより、`status` のような **Field** が `418` であるすべてのログエントリをフィルタできます。フィルタを作成するための [便利なフィルタ](#useful-filters) の例があります。

期待した結果が得られず、フィルタが正しいことが確かな場合は、日付範囲が正しいことを確認してください。

##### 便利なフィルタ {#useful-filters}

- `kubernetes.container_name`: `sidekiq`、`webservice`、`pages` などの Kubernetes Pod をフィルタするのに使用します。
- `correlation_id`: [相関 ID で関連するログエントリを見つける](https://docs.gitlab.com/administration/logs/tracing_correlation_id/) ために使用します。
- `kubernetes.labels.release: gitlab`: GitLab アプリケーションに関連するログを見つけるためにこの OpenSearch フィルタを使用します。
- `meta.feature_category`: `webhooks`、`integrations`、`continuous_integration` など、特定の機能にスコープを絞ります。

###### HTTP レスポンスステータスコードでフィルタする

これらの OpenSearch フィルタを使うと、[HTTP レスポンスステータスコード](https://http.dev/status) でログを見つけることができます。

HTTP レスポンスステータスコードが `422` のログを見つけるには:

- **Field**: `status`
- **Operator**: `is`
- **Value**: `422`

HTTP レスポンスステータスコードが [4xx クライアントエラークラス](https://http.dev/status#4xx-client-error) にあるすべてのログを見つけるには:

- **Field**: `status`
- **Operator**: `is between`
- **Start of the rage**: `400`
- **End of the range**: `499`

###### フィルタの無効化と再有効化

フィルタを一時的に無効にしてログのビューを変更すると便利な場合があります。

フィルタを一時的に無効にするには、フィルタのテキストをクリックしてオプションメニューを開き、`Temporarily disable.` を選択します。
![Temporarily disable オプションを表示するフィルタメニュー](/images/support/workflows/assets/dedicated_logs_temp_disable_filter.png "Temporarily diasble")

フィルタを再有効化するには、フィルタのテキストをクリックして `Re-enable.` を選択します。
![Re-enable オプションを表示するフィルタメニュー](/images/support/workflows/assets/dedicated_logs_re-enable_filter.png "Re-enable")

#### フィールドのインデックス作成

OpenSearch のフィールドが時々インデックスされていないことがあり、その場合フィルタできません。これは、そのフィールドの値の横にある `!` 付きの警告三角形で示されます。

マッピングをリフレッシュしてインデックスを更新するには、以下を行います（サポートのログインを使用）:

1. ハンバーガーメニュー（左上）を開く
1. `Stack Management` をクリック（一番下の `Management` セクション）
1. `Index Patterns` をクリック
1. リフレッシュしたいパターンをクリック
1. 右上の星とゴミ箱の間にある "refresh"（円形の矢印）をクリック
1. ダイアログで `Refresh` をクリック

`Fields` のカウントが上がります。

これでログ検索ページに戻り、そのフィールドでフィルタできるようになります。

### 例

#### 相関 ID でフィルタする

GitLab インスタンスは、ほとんどのリクエストについて一意のリクエスト追跡 ID（"相関 ID" と呼ばれる）をログに記録します。GitLab の問題のトラブルシューティングで重要なのは、[相関 ID で関連するログエントリを見つけること](https://docs.gitlab.com/administration/logs/tracing_correlation_id/) です。Opensearch では相関 ID でフィルタできます。相関 ID は、顧客から提供された情報や Opensearch ログを通して見つけることができます。

特定の相関 ID のすべてのログエントリを表示するには:

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `correlation_id` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** フィールドに相関 ID を入力

#### 削除されたグループまたはプロジェクトを特定する

削除されたグループおよびプロジェクトに関する情報は **Audit Events** で利用できます。顧客は **Admin Area** でこの情報を確認できるはずです。削除がログ保持期間内に発生していれば、OpenSearch でさらに情報を探すことができます。OpenSearch で削除されたプロジェクトまたはグループに関する詳細情報を特定するには、この情報を [フィルタ](#filters) のガイドとして使用できます。

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `meta.caller_id` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** に `GroupsController#destroy` を追加

`username`、`user_id`（または `meta.user_id`）の値を見ることで、削除リクエストを発行したユーザーに関する詳細情報を取得できます。

#### 作成または削除されたユーザーを特定する

ユーザーの作成または削除に関する情報は **Audit Events** で利用できます。顧客は **Admin Area** でこの情報を確認できるはずです。ユーザーがログ保持期間内に作成または削除された場合、これらのイベントに関する情報は OpenSearch で探すことができます。作成または削除されたユーザーに関する詳細情報を特定するには、この情報を使いたい [フィルタ](#filters) のガイドとして使用できます。これらのイベントについては、`RegistrationsController` に関心があります。

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `controller` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに `RegistrationsController` を追加
1. **Save** をクリック

ユーザー作成および削除のイベントのリストが得られます。`action` [フィールド](#fields) を使って、関心のある種類のイベントを探してください。

#### 特定のパイプラインに関する情報を見つける

特定のパイプラインの ID がわかったら、そのパイプラインがどのように処理されたかについての情報をログから取得できます。Sidekiq が [CI パイプラインの処理](https://docs.gitlab.com/administration/sidekiq/sidekiq_troubleshooting/#investigating-sidekiq-queue-backlogs-or-slow-performance) で果たす役割を考えると、Sidekiq ログを確認しましょう。

この例では 2 つのフィルタを使います: 1 つは `sidekiq` コンテナからログを取得するため、もう 1 つは特定のパイプライン ID でフィルタするためのものです。

`sidekiq` コンテナからのすべてのログを取得するための最初のフィルタを追加します:

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `kubernetes.container_name` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに `sidekiq` を追加
1. **Save** をクリック

特定のパイプラインに関するすべての `sidekiq` ログを得られるよう、2 つ目のフィルタを追加します:

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `meta.pipeline_id` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに、関心のあるパイプラインの ID を追加
1. **Save** をクリック

これで、その特定のパイプラインに関連する Sidekiq ログを読むことができます。

#### CI/CD 変数を閲覧したのが誰かを特定する

[グループイベントの監査ログ](https://docs.gitlab.com/administration/audit_event_reports/#group-audit-events) では CI/CD 変数の *変更* を具体的に記録しているわけではありませんが、Kibana を使って変数ページを閲覧した可能性のある人物を確認する方法があります。当該の変数を変更するには変数ページを閲覧する必要があります。これは、ページを閲覧した人物が必ずしも変数を変更したとは限りませんが、変更を行えた可能性のあるユーザーのリストを絞り込むのに役立ちます。（これらの変更をログに記録してほしい場合は、[ご意見を集めるためにここに Issue が開いています](https://gitlab.com/gitlab-org/gitlab/-/issues/8070)。）

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `controller` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに `Projects::VariablesController` を追加
1. **Save** をクリック

これで仕分けるログのリストが得られます。クエリをさらに絞り込むことで、関係するユーザーに関する情報をもう少し得ることができます。**Search field names** ボックスに `username` と入力します。**+** 記号をクリックして `Add field as column` を実行します。ログのリストには、CI/CD 変数が閲覧された各ログエントリに関連付けられた `username` が表示されます。

#### SAML レスポンスを取得し検査する

GitLab Dedicated の顧客向けに [インスタンス全体の SAML シングルサインオン (SSO)](https://docs.gitlab.com/integration/saml/) で予期しない動作を [トラブルシューティング](https://docs.gitlab.com/user/group/saml_sso/troubleshooting/) する場合、OpenSearch を使って SAML レスポンスを取得できます。

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `controller` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに `OmniauthCallbacksController` を追加
1. **Save** をクリック

日付範囲を適切に調整すると、確認するログのリストが表示されるはずです。クエリをさらに絞り込むことで、これらの認証試行に関する情報をもう少し得ることができます。**Search field names** ボックスに `action` と入力します。**+** 記号をクリックして `Add field as column` を実行します。ログのリストには、各認証試行に関連付けられた `action` が表示されます。`action` フィールドは、認証試行が `failure` をもたらしたかどうかを示します。

個別の SAML レスポンスを検査したいかもしれません。検査したい SAML レスポンスを含むログエントリを特定したら、右矢印をクリックして **Expanded document** を表示します。

1. `params` セクションには、`SAMLResponse` というキーを持つ JSON オブジェクトが表示されます（`value` のデータは Base64 エンコードされた SAML レスポンスです）。
    - このキーが大きすぎてログが `truncated` の値しか含まないことがあります。この場合、顧客に [SAML レスポンスを取得して](https://docs.gitlab.com/user/group/saml_sso/troubleshooting/#generate-a-saml-response) 送ってもらう必要があります。
1. `value` フィールドの長い文字列（`=` で終わるはず）を `response.txt` のようなファイルに保存します。
1. `base64 -d response.txt` で Base64 エンコードされた値をデコードします。
    - 検査を容易にするには、Base64 デコードの出力を XML ファイル（例: `base64 -d response.txt > /tmp/samlresponse.xml`）に書き込みます。
    - このファイルは Firefox や Google Chrome などの一部のブラウザで直接開くと読みやすくなります。

[SAML レスポンスで何を見るべきか](https://docs.gitlab.com/user/group/saml_sso/troubleshooting/#saml-debugging-tools) について詳しく読んでください。

#### グローバル検索リクエストの失敗をデバッグする

検索リクエストが失敗した場合、UI にステータスコード付きのエラーがスローされる可能性があります。このような失敗については、エラー `500` の例を使って次の手順でさらにログを見つけることができます:

1. **Add filter** を選択
1. **Select a field first** をクリック
1. `status` を選択
1. **Operator** ドロップダウンで `is` を選択
1. **Value** ボックスに `500` を追加
1. 失敗した検索語句のためのフィルタを別途追加。`uri` を選択
1. **Operator** ドロップダウンで `is` を選択し、**Value** ボックスに `/search?search=test` を追加
1. **Save** をクリック

その後、`correlation_id` のみでフィルタして失敗が発生した箇所を選択できます。次のフィルタで使うため、`@timestamp` の正確な時刻をメモしてください。

1. 複製した Opensearch タブで新しい検索を開始します。
1. 上記のタイムスタンプをメモし、`kubernetes.host` の値をコピーして、その `@timestamp` フレーム内のログをフィルタします。
1. 結果を微調整するために、フィルタを追加します。例: Filter: `message` Operator: `is one of` Value: `elasticsearch` で elasticsearch という用語を含むログを表示します。

潜在的な次のステップとして [Elasticsearch のトラブルシューティング](https://docs.gitlab.com/integration/advanced_search/elasticsearch_troubleshooting/#last-resort-to-recreate-an-index) について詳しく読んでください。

#### GitLab Dedicated の Hosted Runners をデバッグする

GitLab Dedicated の Hosted Runners に関するチケットをデバッグするには、[顧客が Hosted Runners を使用していることを確認](./dedicated_runners.md#who-is-using-hosted-runners) してください。これらのログをフィルタするために使える OpenSearch フィルタを表示するには、[GitLab Dedicated 向け Hosted Runners](./dedicated_runners.md#viewing-logs) ドキュメントページを参照してください。

### Duo 関連エラーのデバッグ

Duo チャット機能が失敗した場合、顧客は [ドキュメント](https://docs.gitlab.com/user/gitlab_duo_chat/troubleshooting/#the-gitlab-duo-chat-button-is-not-displayed) に記載されたコードのいずれかから UI 上でエラーコードを受け取る可能性が高いです。

実際の失敗原因に関するより多くのログを集めるには、まず `duo_chat_error_code` フィールドを使って、顧客が提供した Duo チャットコードでフィルタしてください。
その後、`ai_component`、`ai_event_name`、`class`、`error`、`message` の値を確認することで、実際のエラーメッセージに関する詳細情報を集められます。
