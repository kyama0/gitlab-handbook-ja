---
title: 'トークン管理'
description: 'トークン管理に関するドキュメント'
date: 2026-01-08
upstream_path: /handbook/security/customer-support-operations/token-management/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドは、トークンローテーション手順や自動トークン期限切れ監視を含む、Customer Support Operations のトークン管理プラクティスについて説明します。

適切なトークン管理は、私たちのシステム全体のセキュリティを維持するために不可欠です。定期的なトークンローテーションにより、漏洩した認証情報からの不正アクセスのリスクが軽減され、Token Checker 自動化によりトークンが期限切れになる前にローテーションできます。このドキュメントでは、各種プラットフォーム（Zendesk、GitLab）でトークンをローテーションする手順を段階的に示し、Token Checker のアラートを扱う方法を説明します。

## トークンのローテーション {#rotating-tokens}

### Zendesk API トークンのローテーション {#rotating-a-zendesk-api-token}

Zendesk でトークンをローテーションするには、次のようにします。

1. 対象の Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > APIs > API tokens` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 既存のトークンを無効化します（無効化するまでトークンを削除できないため）
   1. トークンの既存のエントリを見つけ、その右側にある縦 3 点ドットをクリックします
   1. `Deactivate` をクリックします
   1. ポップアップボックスで `Deactivate` をクリックして確定します
1. 既存のトークンを削除します
   1. トークンの既存のエントリを見つけ、その右側にある縦 3 点ドットをクリックします
   1. `Delete` をクリックします
   1. ポップアップボックスで `Delete` をクリックして確定します
1. 新しいトークンを作成します
   1. ページの右上にある `Add API token` をクリックします
   1. 説明を入力します
   1. `Save` をクリックします
   1. `Token` フィールドのトークンをコピーします
   1. もう一度 `Save` をクリックします

### GitLab パーソナルアクセストークンのローテーション {#rotating-a-gitlab-personal-access-token}

GitLab パーソナルアクセストークンをローテーションするには、curl コマンドを使用する必要があり、次の情報が必要です。

- ローテーション対象のパーソナルアクセストークンを所有するユーザーの有効なパーソナルアクセストークン
- ローテーション対象のパーソナルアクセストークンの ID

次の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

次を置き換えます。

- `TOKEN_ID` をローテーション対象のパーソナルアクセストークンの ID に
- `VALID_TOKEN` をローテーション対象のパーソナルアクセストークンを所有するユーザーの有効なパーソナルアクセストークンに
- `DATE_COMMAND` を次の値に（お使いの OS に応じて）:
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより対象のトークンがローテーションされ、新しいトークンが出力されます。新しいトークンの値だけを出力するように、このコマンドを `jq '.token'` にパイプすることがよく推奨されます。その例は次のとおりです。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/123456/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab プロジェクトアクセストークンのローテーション {#rotating-a-gitlab-project-access-token}

GitLab プロジェクトアクセストークンをローテーションするには、curl コマンドを使用する必要があり、次の情報が必要です。

- そのプロジェクトに対して `Maintainer` 権限を持つユーザーの有効なパーソナルアクセストークン
- プロジェクトアクセストークンを含むプロジェクトの ID
- ローテーション対象のプロジェクトアクセストークンの ID

次の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/PROJECT_ID/access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

次を置き換えます。

- `PROJECT_ID` をプロジェクトアクセストークンを含むプロジェクトの ID に
- `TOKEN_ID` をローテーション対象のパーソナルアクセストークンの ID に
- `VALID_TOKEN` をそのプロジェクトに対して `Maintainer` 権限を持つユーザーの有効なパーソナルアクセストークンに
- `DATE_COMMAND` を次の値に（お使いの OS に応じて）:
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより対象のトークンがローテーションされ、新しいトークンが出力されます。新しいトークンの値だけを出力するように、このコマンドを `jq '.token'` にパイプすることがよく推奨されます。その例は次のとおりです。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/1234/access_tokens/5678/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab パイプライントリガートークンのローテーション {#rotating-a-gitlab-pipeline-trigger-token}

#### ユーザーとして

ユーザーとして GitLab パイプライントリガートークンをローテーションするには、次のようにします。

1. トークンを作成する gitlab.com ユーザーでログインします
1. プロジェクト自体に移動します
1. （Settings の下の）`CI/CD` ページに進みます
1. `Pipeline trigger tokens` セクションを展開します
1. 既存のトークンのリストを調べて、ローテーションが必要なものを見つけます
1. 既存のトークンを削除します
1. セクションの右上にある `Add new token` ボタンをクリックします
1. 適切な名前を入力します。
   - Zendesk webhook の場合は、webhook 自体へのリンクを入れます
   - Zendesk アプリの場合は、`INSTANCE - NAME_OF_APP` の形式を使用します
     - `INSTANCE` は Zendesk インスタンス自体です（例: Zendesk Global、Zendesk US Government）
     - `NAME_OF_APP` は Zendesk が表示するアプリの名前です
   - 同じプロジェクト内の CI/CD ジョブ用の場合は、ジョブの名前を入れます
   - 別のプロジェクト用の場合は、そのプロジェクトへのリンクを入れます
1. 生成された API トークンをコピーします
1. 必要な場所にトークンを設置します

#### サービスボットとして

サービスボットとして GitLab パイプライントリガートークンをローテーションするには、次のようにします。

1. 対象のプロジェクト用のプロジェクトアクセストークンを作成します
1. そのプロジェクトの ID 番号を控えておきます
1. その API トークンを使用して、gitlab.com API 経由でパイプライントリガートークンを作成します

   ```bash
   curl --request POST \
     --header "PRIVATE-TOKEN: TOKEN_YOUR_COPIED" \
     --form description="APPROPRIATE_DESCRIPTION_HERE" \
     "https://gitlab.com/api/v4/projects/PROJECT_ID/triggers"
   ```

   - `TOKEN_YOUR_COPIED` はコピーしたプロジェクトアクセストークンです
   - `APPROPRIATE_DESCRIPTION_HERE` は適切な説明です。
     - Zendesk webhook の場合は、webhook 自体へのリンクを入れます
     - Zendesk アプリの場合は、`INSTANCE - NAME_OF_APP` の形式を使用します
       - `INSTANCE` は Zendesk インスタンス自体です（例: Zendesk Global、Zendesk
         US Government）
       - `NAME_OF_APP` は Zendesk が表示するアプリの名前です
     - 同じプロジェクト内の CI/CD ジョブ用の場合は、ジョブの名前を入れます
     - 別のプロジェクト用の場合は、そのプロジェクトへのリンクを入れます
1. 生成された API トークンをコピーします
1. 必要な場所にトークンを設置します

## トークンの適用

### Zendesk アプリの場合

Zendesk アプリにトークンを適用するには、次のようにします。

1. 対象の Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリを見つけてクリックします
1. 対象の API トークンを必要とするフィールドを見つけます
1. そのフィールドにトークンを入力します
   - **NOTE** 他のフィールドには入力したり編集したりしないでください
1. ページ下部の青い `Update` ボタンをクリックします

### Zendesk webhook の場合

Zendesk webhook にトークンを適用するには、次のようにします。

1. 対象の Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Webhooks > Webhooks` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)
1. 対象の webhook を見つけます
1. 対象の webhook の一番右にある縦 3 点ドットをクリックします
1. `Edit` オプションをクリックします
1. 必要な場所で古いトークンを新しいトークンに置き換えます
1. ページ右下の青い `Update` ボタンをクリックします

### GitLab webhook の場合

webhook 内のマスクされたセクションの値を編集できないため、トークンをローテーションするには「削除して作成」する必要があります。

1. プロジェクト自体に移動します
1. （Settings の下の）`Webhooks` ページに進みます
1. 対象の webhook を見つけ、関連するすべての情報（URL、何によってトリガーされるかなど）をコピーします
1. 対象の webhook を削除します
1. 関連する情報と新しいトークンを使用して webhook を再作成します

### GitLab CI/CD 変数の場合

GitLab CI/CD 変数にトークンを適用するには、次のようにします。

1. プロジェクト自体に移動します
1. （Settings の下の）`CI/CD` ページに進みます
1. `Variables` セクションを展開します
1. 既存の変数のリストを調べて、置き換える必要があるものを見つけます
1. 変数の一番右にある鉛筆アイコン（マウスを乗せると `Edit` と表示されます）をクリックします
1. `Value` フィールドに新しいトークンを入力します
1. 青い `Save changes` ボタンをクリックします

## OAuth インテグレーション

### 新しい OAuth アプリケーションを Zendesk に統合する

{{% alert title="Note" color="primary" %}}

- OAuth インテグレーションの追加には、Zendesk への `Owner` アクセスが必要です。

{{% /alert %}}

新しい OAuth アプリケーションを Zendesk に統合するには、次のようにします。

1. SSO の管理者バイパスを有効化します
   1. 対象の Zendesk インスタンスの管理パネルに移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
   1. `Account > Security > Advanced` に移動します
      - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/advanced/authentication)
   1. `SSO bypass` の下で `Admins` をクリックします
   1. ページ右下の `Save` ボタンをクリックします
1. 新しいブラウザを開き、`https://gitlab.zendesk.com/access/sso_bypass` に移動します
1. インテグレーションユーザーとしてログインします
1. アプリケーションの指示に従って OAuth フローを実行します。
   - 要求されたスコープがアクセスリクエストで文書化され承認されていることを確認します。そうでない場合は、STOP してください。
1. インテグレーションユーザーからログアウトします
1. SSO の管理者バイパスを無効化します。
   1. 対象の Zendesk インスタンスの管理パネルに移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
   1. `Account > Security > Advanced` に移動します
      - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/advanced/authentication)
   1. `SSO bypass` の下で `Account owner` をクリックします
   1. ページ右下の `Save` ボタンをクリックします

## Token Checker

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker)

{{% /alert %}}

### Token Checker を理解する

#### Token Checker とは

Token Checker は、GitLab の[スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使用して、今後 3 週間以内に期限切れになるトークンをチェックするために私たちが作成した仕組みです。チェックされるトークンの種類は次のとおりです。

- パーソナルアクセストークン
- プロジェクトアクセストークン

#### Token Checker の仕組み

毎週月曜日の 1400 UTC（`0 14 * * 1`）に、GitLab の[スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)が `bin/run` スクリプトを実行し、次の処理を行います。

- Customer Support Operations チームが管理する gitlab.com ユーザーについて、（今後 3 週間以内に期限切れになる）有効なパーソナルアクセストークンをすべて取得し、その情報を配列に格納します
- Customer Support Operations が管理する gitlab.com グループ内のすべてのプロジェクトを取得し、それらをループして次を行います。
  - そのプロジェクトの（今後 3 週間以内に期限切れになる）失効していないプロジェクトアクセストークンをすべて取得し、その情報を配列に格納します
- まもなく期限切れになるトークンを報告する Issue を作成します（配列に何か格納されていた場合）

### Token Checker によって作成された Issue を作業する

{{% alert title="Note" color="primary" %}}

- これには、Customer Support Operations が管理するすべての gitlab.com ユーザー、グループ、プロジェクトへのアクセスが必要です。

{{% /alert %}}

Token Checker が生成した Issue を作業するには、項目のリストを確認して、掲載されているトークンを失効またはローテーションします。

- 対象のトークンがもう使用されていない場合は、失効させます。失効後、リスト上のそのトークンの横のボックスにチェックを入れ、トークンが失効されたことを示すコメントを追加します。
- 対象のトークンがまだ使用されている場合は、ローテーションします。ローテーション後、リスト上のそのトークンの横のボックスにチェックを入れます。

リストのすべての項目を作業し終えたら、必要なタスクがすべて完了したことを示すコメントを追加し、Issue をクローズします。

### Token Checker に変更を加える

{{% alert title="Note" color="primary" %}}

- これには、[Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker) プロジェクトへの少なくとも `Developer` アクセスが必要です。
- これは、対応するリクエスト Issue（機能リクエスト、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成してください（そして作業する前に標準プロセスを通してください）。

{{% /alert %}}

Token Checker に変更を加えるには、プロジェクトリポジトリで MR を作成する必要があります。実際に行う変更はリクエスト自体に依存します。

ピアが MR をレビューして承認した後、MR をマージできます（これにより、次回のスケジュール実行時に適用されます）。
