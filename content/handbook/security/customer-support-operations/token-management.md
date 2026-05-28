---
title: 'トークン管理'
description: 'トークン管理に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/token-management/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドは、トークンローテーション手順や自動トークン期限切れ監視を含む、Customer Support Operations のトークン管理プラクティスについて説明します。

適切なトークン管理は、私たちのシステム全体のセキュリティを維持するために不可欠です。定期的なトークンローテーションにより、漏洩した認証情報からの不正アクセスのリスクが軽減され、Token Checker 自動化によりトークンが期限切れになる前にローテーションできます。このドキュメントでは、各種プラットフォーム（Zendesk、GitLab）でトークンをローテーションする手順を段階的に示し、Token Checker のアラートを扱う方法を説明します。

## トークンのローテーション {#rotating-tokens}

### Zendesk API トークンのローテーション {#rotating-a-zendesk-api-token}

Zendesk でトークンをローテーションするには:

1. 対象の Zendesk インスタンスの管理パネルに移動します:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > APIs > API tokens` に移動します:
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 既存トークンを無効化します（無効化しないと削除できないため）
   1. 既存のトークンエントリを見つけ、その右側にある縦三点リーダーをクリックします
   1. `Deactivate` をクリックします
   1. 確認のため、ポップアップボックスで `Deactivate` をクリックします
1. 既存トークンを削除します
   1. 既存のトークンエントリを見つけ、その右側にある縦三点リーダーをクリックします
   1. `Delete` をクリックします
   1. 確認のため、ポップアップボックスで `Delete` をクリックします
1. 新しいトークンを作成します
   1. ページ右上の `Add API token` をクリックします
   1. 説明を入力します
   1. `Save` をクリックします
   1. `Token` フィールドのトークンをコピーします
   1. もう一度 `Save` をクリックします

### GitLab パーソナルアクセストークンのローテーション {#rotating-a-gitlab-personal-access-token}

GitLab パーソナルアクセストークンをローテーションするには、curl コマンドを使用する必要があり、以下の情報が必要です。

- ローテーション対象のパーソナルアクセストークンを所有するユーザーの有効なパーソナルアクセストークン
- ローテーションするパーソナルアクセストークンの ID

そして、以下の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

置き換える項目:

- `TOKEN_ID`: ローテーションするパーソナルアクセストークンの ID
- `VALID_TOKEN`: ローテーション対象のパーソナルアクセストークンを所有するユーザーの有効なパーソナルアクセストークン
- `DATE_COMMAND`: 以下のいずれか（OS による）:
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより該当のトークンがローテーションされ、新しいトークンが出力されます。新しいトークンの値だけを出力できるよう、コマンドを `jq '.token'` にパイプすることをよくおすすめします。例:

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/123456/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab プロジェクトアクセストークンのローテーション {#rotating-a-gitlab-project-access-token}

GitLab プロジェクトアクセストークンをローテーションするには、curl コマンドを使用する必要があり、以下の情報が必要です。

- プロジェクトに `Maintainer` 権限を持つユーザーの有効なパーソナルアクセストークン
- プロジェクトアクセストークンを含むプロジェクトの ID
- ローテーションするプロジェクトアクセストークンの ID

そして、以下の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/PROJECT_ID/access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

置き換える項目:

- `PROJECT_ID`: プロジェクトアクセストークンを含むプロジェクトの ID
- `TOKEN_ID`: ローテーションするパーソナルアクセストークンの ID
- `VALID_TOKEN`: プロジェクトに `Maintainer` 権限を持つユーザーの有効なパーソナルアクセストークン
- `DATE_COMMAND`: 以下のいずれか（OS による）:
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより該当のトークンがローテーションされ、新しいトークンが出力されます。新しいトークンの値だけを出力できるよう、コマンドを `jq '.token'` にパイプすることをよくおすすめします。例:

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/1234/access_tokens/5678/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab パイプライントリガートークンのローテーション {#rotating-a-gitlab-pipeline-trigger-token}

#### ユーザーとして {#as-a-user}

ユーザーとして GitLab パイプライントリガートークンをローテーションするには:

1. トークンを作成する gitlab.com ユーザーにログインします
1. プロジェクト自体に移動します
1. `CI/CD` ページ（Settings 配下）に移動します
1. `Pipeline trigger tokens` セクションを展開します
1. 既存のトークンリストを確認し、ローテーションが必要なものを特定します
1. 既存トークンを削除します
1. セクション右上の `Add new token` ボタンをクリックします
1. 適切な名前を入力します:
   - Zendesk webhook の場合は webhook 自体へのリンクを入力
   - Zendesk アプリの場合は `INSTANCE - NAME_OF_APP` の形式で
     - `INSTANCE` は Zendesk インスタンス自体（例: Zendesk Global、Zendesk US Government）
     - `NAME_OF_APP` は Zendesk が表示するアプリ名
   - 同じプロジェクト内の CI/CD ジョブの場合はジョブ名
   - 別のプロジェクトの場合はプロジェクトへのリンク
1. 生成された API トークンをコピーします
1. 必要な場所にトークンを設定します

#### サービスボットとして {#as-a-service-bot}

サービスボットとして GitLab パイプライントリガートークンをローテーションするには:

1. 該当プロジェクトのプロジェクトアクセストークンを作成します
1. プロジェクトの ID 番号を控えます
1. その API トークンを使用して、gitlab.com API 経由でパイプライントリガートークンを作成します

   ```bash
   curl --request POST \
     --header "PRIVATE-TOKEN: TOKEN_YOUR_COPIED" \
     --form description="APPROPRIATE_DESCRIPTION_HERE" \
     "https://gitlab.com/api/v4/projects/PROJECT_ID/triggers"
   ```

   - `TOKEN_YOUR_COPIED` はコピーしたプロジェクトアクセストークン
   - `APPROPRIATE_DESCRIPTION_HERE` は適切な説明:
     - Zendesk webhook の場合は webhook 自体へのリンク
     - Zendesk アプリの場合は `INSTANCE - NAME_OF_APP` の形式で
       - `INSTANCE` は Zendesk インスタンス自体（例: Zendesk Global、Zendesk
         US Government）
       - `NAME_OF_APP` は Zendesk が表示するアプリ名
     - 同じプロジェクト内の CI/CD ジョブの場合はジョブ名
     - 別のプロジェクトの場合はプロジェクトへのリンク
1. 生成された API トークンをコピーします
1. 必要な場所にトークンを設定します

## トークンの適用 {#applying-tokens}

### Zendesk アプリへの適用 {#for-zendesk-apps}

Zendesk アプリにトークンを適用するには:

1. 対象の Zendesk インスタンスの管理パネルに移動します:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 該当アプリを見つけてクリックします
1. 該当 API トークンが必要なフィールドを見つけます
1. そのフィールドにトークンを入力します
   - **注意** 他のフィールドを設定または編集しないでください
1. ページ下部の青い `Update` ボタンをクリックします

### Zendesk webhook への適用 {#for-zendesk-webhooks}

Zendesk webhook にトークンを適用するには:

1. 対象の Zendesk インスタンスの管理パネルに移動します:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Webhooks > Webhooks` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)
1. 該当 webhook を見つけます
1. 該当 webhook の右端にある縦三点リーダーをクリックします
1. `Edit` オプションをクリックします
1. 必要な箇所で古いトークンを新しいトークンに置き換えます
1. ページ右下の青い `Update` ボタンをクリックします

### GitLab webhook への適用 {#for-gitlab-webhooks}

webhook 内のマスクされたセクションの値は編集できないため、トークンをローテーションするには「削除して作成」する必要があります。

1. プロジェクト自体に移動します
1. `Webhooks` ページ（Settings 配下）に移動します
1. 該当 webhook を見つけ、関連するすべての情報（URL、トリガー条件など）をコピーします
1. 該当 webhook を削除します
1. 関連情報と新しいトークンを使って webhook を再作成します

### GitLab CI/CD 変数への適用 {#for-gitlab-cicd-variables}

GitLab CI/CD 変数にトークンを適用するには:

1. プロジェクト自体に移動します
1. `CI/CD` ページ（Settings 配下）に移動します
1. `Variables` セクションを展開します
1. 既存変数のリストを確認し、置き換える必要のあるものを特定します
1. 変数の右端にある鉛筆アイコン（マウスオーバーすると `Edit` と表示）をクリックします
1. `Value` フィールドに新しいトークンを入力します
1. 青い `Save changes` ボタンをクリックします

## OAuth 統合 {#oauth-integrations}

### 新しい OAuth アプリケーションを Zendesk に統合する {#integrating-a-new-oauth-application-into-zendesk}

{{% alert title="注意" color="primary" %}}

- OAuth 統合の追加には Zendesk への `Owner` アクセスが必要です。

{{% /alert %}}

新しい OAuth アプリケーションを Zendesk に統合するには:

1. SSO の管理者バイパスを有効化します
   1. 対象の Zendesk インスタンスの管理パネルに移動します:
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
1. 新しいブラウザを開いて `https://gitlab.zendesk.com/access/sso_bypass` に移動します
1. 統合ユーザーとしてログインします
1. アプリケーションの指示に従って OAuth フローを実行します。
   - 要求されたスコープがアクセスリクエストでドキュメント化・承認されているかを確認します。されていない場合は中止してください。
1. 統合ユーザーをログアウトします
1. SSO の管理者バイパスを無効化します:
   1. 対象の Zendesk インスタンスの管理パネルに移動します:
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

## Token Checker {#token-checker}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker)

{{% /alert %}}

### Token Checker の理解 {#understanding-token-checker}

#### Token Checker とは {#what-is-token-checker}

Token Checker は、GitLab の[スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使って、今後 3 週間以内に期限切れになるトークンをチェックするためのセットアップです。チェックされるトークンの種類は以下の通りです。

- パーソナルアクセストークン
- プロジェクトアクセストークン

#### Token Checker の動作 {#how-token-checker-works}

毎週月曜日 1400 UTC（`0 14 * * 1`）に、GitLab [スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)が `bin/run` スクリプトを実行し、以下を行います。

- Customer Support Operations チームが管理する gitlab.com ユーザーの有効なパーソナルアクセストークン（今後 3 週間以内に期限切れになるもの）をすべて取得し、情報を配列に格納
- Customer Support Operations が管理する gitlab.com グループ内のすべてのプロジェクトを取得し、それらをループして:
  - プロジェクトの取り消されていないプロジェクトアクセストークン（今後 3 週間以内に期限切れになるもの）をすべて取得し、情報を配列に格納
- 期限切れが近いトークンを報告する Issue を作成（配列に格納された場合）

### Token Checker が作成した Issue の対応 {#working-issues-created-by-token-checker}

{{% alert title="注意" color="primary" %}}

- これには、Customer Support Operations が管理するすべての gitlab.com ユーザー、グループ、プロジェクトへのアクセスが必要です。

{{% /alert %}}

Token Checker が生成した Issue に対応するには、リスト内の項目を順に確認し、列挙されたトークンを取り消すかローテーションします。

- 該当トークンが使用されていない場合は、取り消します。取り消し後、リスト上の該当項目のチェックボックスをオンにし、トークンが取り消されたことを示すコメントを追加します。
- 該当トークンが現在使用中の場合は、ローテーションします。完了後、リスト上の該当項目のチェックボックスをオンにします。

リストのすべての項目を対応したら、必要なタスクがすべて完了したことを示すコメントを追加し、Issue をクローズします。

### Token Checker への変更 {#making-changes-to-token-checker}

{{% alert title="注意" color="primary" %}}

- これには、[Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker) プロジェクトへの少なくとも `Developer` アクセスが必要です。
- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。

{{% /alert %}}

Token Checker に変更を加えるには、プロジェクトリポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によります。

ピアレビューと承認の後、MR をマージできます（次回のスケジュール実行時に適用されます）。
