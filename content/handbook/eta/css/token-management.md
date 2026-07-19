---
title: 'トークン管理'
description: 'トークン管理に関するドキュメント'
upstream_path: "/handbook/eta/css/token-management/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T08:21:01+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、トークンのローテーション手順と自動化されたトークン有効期限監視を含む、Customer Support Systems のトークン管理プラクティスについて説明します。

適切なトークン管理は、システム全体のセキュリティ維持に不可欠です。定期的なトークンローテーションにより、認証情報の侵害による不正アクセスのリスクを軽減できます。また、Token Checker の自動化により、有効期限切れの前にトークンをローテーションできます。このドキュメントでは、さまざまなプラットフォーム（Zendesk、GitLab）でトークンをローテーションするための手順を段階的に説明し、Token Checker のアラートへの対応方法を解説します。

## トークンのローテーション

### Zendesk API トークンのローテーション

Zendesk でトークンをローテーションするには、次の手順を実行します。

1. 対象となる Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > APIs > API tokens` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apis/api-tokens)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apis/api-tokens)
1. 既存のトークンを無効化します（無効化されるまでトークンを削除できません）。
   1. 対象トークンの既存エントリを見つけ、その右側にある縦に並んだ 3 つの点をクリックします。
   1. `Deactivate` をクリックします。
   1. ポップアップボックスで `Deactivate` をクリックして確認します。
1. 既存のトークンを削除します。
   1. 対象トークンの既存エントリを見つけ、その右側にある縦に並んだ 3 つの点をクリックします。
   1. `Delete` をクリックします。
   1. ポップアップボックスで `Delete` をクリックして確認します。
1. 新しいトークンを作成します。
   1. ページ右上の `Add API token` をクリックします。
   1. 説明を入力します。
   1. `Save` をクリックします。
   1. `Token` フィールドのトークンをコピーします。
   1. もう一度 `Save` をクリックします。

### GitLab 個人アクセストークンのローテーション

GitLab 個人アクセストークンをローテーションするには、curl コマンドを使用します。次の情報が必要です。

- ローテーションする個人アクセストークンを所有するユーザーの有効な個人アクセストークン
- ローテーションする個人アクセストークンの ID

次の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

次を置き換えます。

- `TOKEN_ID` は、ローテーションする個人アクセストークンの ID に置き換えます。
- `VALID_TOKEN` は、ローテーションする個人アクセストークンを所有するユーザーの有効な個人アクセストークンに置き換えます。
- `DATE_COMMAND` は、次のいずれかに置き換えます（OS に応じて選択）。
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより対象のトークンがローテーションされ、新しいトークンが出力されます。新しいトークン値だけを出力するため、このコマンドを `jq '.token'` にパイプすることが推奨される場合があります。例:

```bash
curl -ss -X POST "https://gitlab.com/api/v4/personal_access_tokens/123456/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab プロジェクトアクセストークンのローテーション

GitLab プロジェクトアクセストークンをローテーションするには、curl コマンドを使用します。次の情報が必要です。

- プロジェクトに対する `Maintainer` 権限を持つユーザーの有効な個人アクセストークン
- プロジェクトアクセストークンを含むプロジェクトの ID
- ローテーションするプロジェクトアクセストークンの ID

次の curl リクエストを実行します。

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/PROJECT_ID/access_tokens/TOKEN_ID/rotate?expires_at=$(DATE_COMMAND)" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: VALID_TOKEN"
```

次を置き換えます。

- `PROJECT_ID` は、プロジェクトアクセストークンを含むプロジェクトの ID に置き換えます。
- `TOKEN_ID` は、ローテーションする個人アクセストークンの ID に置き換えます。
- `VALID_TOKEN` は、プロジェクトに対する `Maintainer` 権限を持つユーザーの有効な個人アクセストークンに置き換えます。
- `DATE_COMMAND` は、次のいずれかに置き換えます（OS に応じて選択）。
  - Linux: `date -I -d'+1 year'`
  - Mac: `date -v+1y +%Y-%m-%d`

これにより対象のトークンがローテーションされ、新しいトークンが出力されます。新しいトークン値だけを出力するため、このコマンドを `jq '.token'` にパイプすることが推奨される場合があります。例:

```bash
curl -ss -X POST "https://gitlab.com/api/v4/projects/1234/access_tokens/5678/rotate?expires_at=$(date -I -d'+1 year')" \
  --header "Content-Type: application/json" \
  --header "PRIVATE-TOKEN: abc123" | jq '.token'
"def456"
```

### GitLab パイプライントリガートークンのローテーション

#### ユーザーとして

ユーザーとして GitLab パイプライントリガートークンをローテーションするには、次の手順を実行します。

1. トークンを作成する gitlab.com ユーザーにログインします。
1. プロジェクト自体に移動します。
1. `CI/CD` ページに移動します（Settings 内）。
1. `Pipeline trigger tokens` セクションを展開します。
1. 既存トークンのリストを確認して、ローテーションするトークンを見つけます。
1. 既存のトークンを削除します。
1. セクション右上の `Add new token` ボタンをクリックします。
1. 適切な名前を入力します。
   - Zendesk Webhook の場合は、Webhook 自体へのリンクを入力します。
   - Zendesk アプリの場合は、`INSTANCE - NAME_OF_APP` 形式を使用します。
     - `INSTANCE` は Zendesk インスタンス自体です（例: Zendesk Global、Zendesk US Government）。
     - `NAME_OF_APP` は Zendesk に表示されるアプリの名前です。
   - 同じプロジェクト内の CI/CD ジョブの場合は、ジョブの名前を入力します。
   - 別のプロジェクトの場合は、プロジェクトへのリンクを入力します。
1. 生成された API トークンをコピーします。
1. 必要な場所にトークンを設定します。

#### サービスボットとして

サービスボットとして GitLab パイプライントリガートークンをローテーションするには、次の手順を実行します。

1. 対象プロジェクト用のプロジェクトアクセストークンを作成します。
1. プロジェクトの ID 番号を記録します。
1. その API トークンを使用して、gitlab.com API 経由でパイプライントリガートークンを作成します。

   ```bash
   curl --request POST \
     --header "PRIVATE-TOKEN: TOKEN_YOUR_COPIED" \
     --form description="APPROPRIATE_DESCRIPTION_HERE" \
     "https://gitlab.com/api/v4/projects/PROJECT_ID/triggers"
   ```

   - `TOKEN_YOUR_COPIED` は、コピーしたプロジェクトアクセストークンです。
   - `APPROPRIATE_DESCRIPTION_HERE` は適切な説明です。
     - Zendesk Webhook の場合は、Webhook 自体へのリンクを入力します。
     - Zendesk アプリの場合は、`INSTANCE - NAME_OF_APP` 形式を使用します。
       - `INSTANCE` は Zendesk インスタンス自体です（例: Zendesk Global、Zendesk
         US Government）。
       - `NAME_OF_APP` は Zendesk に表示されるアプリの名前です。
     - 同じプロジェクト内の CI/CD ジョブの場合は、ジョブの名前を入力します。
     - 別のプロジェクトの場合は、プロジェクトへのリンクを入力します。
1. 生成された API トークンをコピーします。
1. 必要な場所にトークンを設定します。

## トークンの適用

### Zendesk アプリの場合

Zendesk アプリにトークンを適用するには、次の手順を実行します。

1. 対象となる Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Apps > Zendesk Support apps` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/apps/support-apps)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/apps/support-apps)
1. 対象のアプリを見つけてクリックします。
1. 対象の API トークンを必要とするフィールドを見つけます。
1. そのフィールドにトークンを入力します。
   - **注記** 他のフィールドには入力または編集を行わないでください。
1. ページ下部の青い `Update` ボタンをクリックします。

### Zendesk Webhook の場合

Zendesk Webhook にトークンを適用するには、次の手順を実行します。

1. 対象となる Zendesk インスタンスの管理パネルに移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. `Apps and integrations > Webhooks > Webhooks` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/apps-integrations/webhooks/webhooks)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/apps-integrations/webhooks/webhooks)
1. 対象の Webhook を見つけます。
1. 対象の Webhook の右端にある縦に並んだ 3 つの点をクリックします。
1. `Edit` オプションをクリックします。
1. 必要な場所で古いトークンを新しいトークンに置き換えます。
1. ページ右下の青い `Update` ボタンをクリックします。

### GitLab Webhook の場合

Webhook 内のマスクされたセクションの値は編集できないため、トークンをローテーションするには、Webhook を削除して作成し直す必要があります。

1. プロジェクト自体に移動します。
1. `Webhooks` ページに移動します（Settings 内）。
1. 対象の Webhook を見つけ、関連するすべての情報（URL、トリガー対象など）をコピーします。
1. 対象の Webhook を削除します。
1. 関連情報と新しいトークンを使用して Webhook を再作成します。

### GitLab CI/CD 変数の場合

GitLab CI/CD 変数にトークンを適用するには、次の手順を実行します。

1. プロジェクト自体に移動します。
1. `CI/CD` ページに移動します（Settings 内）。
1. `Variables` セクションを展開します。
1. 既存変数のリストを確認して、置き換える変数を見つけます。
1. 変数の右端にある鉛筆アイコンをクリックします（カーソルを合わせると `Edit` と表示されます）。
1. `Value` フィールドに新しいトークンを入力します。
1. 青い `Save changes` ボタンをクリックします。

## OAuth 統合

### 新しい OAuth アプリケーションを Zendesk に統合する

{{% alert title="注記" color="primary" %}}

- OAuth 統合の追加には、Zendesk への `Owner` アクセスが必要です。

{{% /alert %}}

新しい OAuth アプリケーションを Zendesk に統合するには、次の手順を実行します。

1. SSO の管理者バイパスを有効にします。
   1. 対象となる Zendesk インスタンスの管理パネルに移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
   1. `Account > Security > Advanced` に移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/advanced/authentication)
   1. `SSO bypass` で `Admins` をクリックします。
   1. ページ右下の `Save` ボタンをクリックします。
1. 新しいブラウザを開き、`https://gitlab.zendesk.com/access/sso_bypass` に移動します。
1. 統合ユーザーとしてログインします。
1. アプリケーションの指示に従って OAuth フローを実行します。
   - 要求されたスコープがアクセスリクエストに記載され、承認済みであることを確認します。そうでない場合は、停止してください。
1. 統合ユーザーとしてログアウトします。
1. SSO の管理者バイパスを無効にします。
   1. 対象となる Zendesk インスタンスの管理パネルに移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
   1. `Account > Security > Advanced` に移動します。
      - [Zendesk Global](https://gitlab.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/account/security/advanced/authentication)
      - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin/account/security/advanced/authentication)
   1. `SSO bypass` で `Account owner` をクリックします。
   1. ページ右下の `Save` ボタンをクリックします。

## Token Checker

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker)

{{% /alert %}}

### Token Checker を理解する

#### Token Checker とは

Token Checker は、今後 3 週間以内に有効期限が切れるトークンを確認するために、GitLab の[スケジュール済みパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を使用して私たちが構築した仕組みです。確認するトークンの種類は次のとおりです。

- 個人アクセストークン
- プロジェクトアクセストークン

#### Token Checker の仕組み

毎週月曜日の 1400 UTC（`0 14 * * 1`）に、GitLab の[スケジュール済みパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)が `bin/run` スクリプトを実行し、次の処理を行います。

- Customer Support Systems チームが管理する gitlab.com ユーザーについて、今後 3 週間以内に有効期限が切れるすべての有効な個人アクセストークンを取得し、その情報を配列に保存します。
- Customer Support Systems が管理する gitlab.com グループ内のすべてのプロジェクトを取得し、それらをループして次の処理を行います。
  - プロジェクトについて、今後 3 週間以内に有効期限が切れる失効していないすべてのプロジェクトアクセストークンを取得し、その情報を配列に保存します。
- 間もなく有効期限が切れるトークンを報告する Issue を作成します（配列にトークンが保存されていた場合）。

### Token Checker が作成した Issue への対応

{{% alert title="注記" color="primary" %}}

- これには、Customer Support Systems が管理するすべての gitlab.com ユーザー、グループ、プロジェクトへのアクセスが必要です。

{{% /alert %}}

Token Checker により生成された Issue に対応するには、リスト内の項目ごとに、記載されたトークンを失効またはローテーションします。

- 対象のトークンが使用されなくなっている場合は、失効させます。完了後、リストでその横のチェックボックスをオンにし、トークンを失効させたことを示すコメントを追加します。
- 対象のトークンがまだ使用中の場合は、ローテーションします。完了後、リストでその横のチェックボックスをオンにします。

リスト内のすべての項目に対応したら、必要なタスクがすべて完了したことを示すコメントを追加し、Issue をクローズします。

### Token Checker の変更

{{% alert title="注記" color="primary" %}}

- これには [Token Checker](https://gitlab.com/gitlab-support-readiness/token-checker) プロジェクトへの少なくとも `Developer` アクセスが必要です。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成し（対応する前に標準プロセスを通過させます）。

{{% /alert %}}

Token Checker を変更するには、プロジェクトリポジトリで MR を作成する必要があります。実際に行う変更は、リクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます（変更は次回のスケジュール済み実行時に適用されます）。
