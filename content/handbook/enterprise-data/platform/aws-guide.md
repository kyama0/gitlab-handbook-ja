---
title: "AWS データチームガイド"
description: "AWS データチームガイド"
upstream_path: /handbook/enterprise-data/platform/aws-guide/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T08:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-18T13:32:36-07:00"
---

## コンテキスト

データプラットフォームチームは以下をサポートするために AWS を使用しています：

- Snowplow

さらに、他のパイプラインがデータの保存に S3 バケットを使用しています：

- just global
- greenhouse

## AWS へのアクセス取得

- `DataEngineeringAccess` という役割名をリクエストする AR を記入する必要があります。詳細はこの [Issue コメント](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/23442#note_1489116380)をご覧ください。

## AWS CLI

場合によっては、コマンドラインからアクションを実行する必要があります。たとえば、S3 内のファイルをクエリしたいが、UI の「S3 Select」を使用するためのファイルサイズ制限を超えている場合は、代わりにコマンドラインからクエリする必要があります。

### AWS CLI のインストール

「オンボーディングテンプレート」で、すでに [AWS CLI](https://aws.amazon.com/cli/) をインストールしているはずです。まだの場合は今すぐインストールしてください。

### AWS CLI での認証

1. Okta 経由で `AWS access portal` に移動してください
1. `gitlab SaaS production` アカウントで、`DataEngineeringAccess` ロールの横にある `Access keys` をクリックしてください
1. 以下の情報をコピーしてください
    - SSO スタート URL
    - SSO リージョン
1. コマンドラインで [`aws configure sso`](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html) を実行してください
    1. 保存した情報を入力するよう求められます
    1. その後、インターネットブラウザに確認を求めるポップアップが表示されます
    1. 最後に、シェルで以下を選択・入力してください：
        - プロジェクトを選択してください（例：`gitlab SaaS production`）
        - ロールを選択してください（例：`DataEngineeringAccess`）
        - リージョンなど残りのプロンプトは、\<Enter> を入力してデフォルト値を使用してください
1. 認証後、`--profile DataEngineeringAccess-8552xxxxx` 引数を追加して通常通り AWS CLI コマンドを実行してください。CLI プロンプトがこれを含めるよう通知します。

#### コマンド例

CLI を使用した「S3 select」コマンドの例：

```sh
aws s3api select-object-content \
--bucket datateam-just-global-campaigns \
--key datateam-just-global-campaignsInfo/2024-12-19-GitLab_Analytics_Export_JG-from-2023-07-01-until-2024-12-15.csv \
--expression "SELECT * FROM s3object LIMIT 5" \
--expression-type 'SQL' \
--input-serialization '{"CSV": {"FileHeaderInfo": "NONE"}}' \
--output-serialization '{"CSV": {}}' \
--profile DataEngineeringAccess-8552xxx \
output.csv
```
