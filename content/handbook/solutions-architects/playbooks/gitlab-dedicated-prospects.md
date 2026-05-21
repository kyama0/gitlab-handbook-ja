---
title: "GitLab Dedicated 見込み顧客"
upstream_path: /handbook/solutions-architects/playbooks/gitlab-dedicated-prospects/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

このページの目的は、SA が新しい Dedicated 顧客をオンボーディングするときに、オンボーディング / ディスカバリーフェーズでの考慮事項と準備資料を支援することです。既存の GitLab Dedicated 顧客との過去のやり取りに基づき、また顧客のオンボーディングが通常長期にわたる性質を持つことから、すべてのステークホルダーが認識・関与し続けられるように [コラボレーションプロジェクト](/handbook/solutions-architects/processes/collaboration-project/) を作成することを推奨します。

Dedicated 顧客向けに特化したコラボレーションテンプレートが [こちらのテンプレート](https://gitlab.com/gitlab-com/account-management/templates/dedicated-collaboration-project) として利用できます。

以下で議論される詳細のほとんどは個別の Issue としても利用でき、プロダクトマネージャーや顧客と協働する良い場所を提供します。

## Dedicated リファレンスリンク

- [GitLab Dedicated Issue Tracker Board](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/boards)
- [Customer Onboarding Process](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/README.md#customer-onboarding-process)
- Slack チャンネル Dedicated Engineering: [#f_gitlab_dedicated](https://gitlab.enterprise.slack.com/archives/C01S0QNSYJ2)
- Slack チャンネル Dedicated SME: [#sme-dedicated](https://gitlab.enterprise.slack.com/archives/C07K39TGATB)
- [Category Direction Page](https://about.gitlab.com/direction/saas-platforms/dedicated/)

## 管理

- GitLab のログイン認証情報を送信する管理者は誰になりますか？
- メンテナンスウィンドウとして希望する時間帯は何ですか？（4 時間ブロック）
- 緊急セキュリティパッチおよびスケジュールされたアップグレードについて、通知はどのメールアドレスに送信すべきですか？

## ユーザー認証

- [SAML](https://docs.gitlab.com/ee/integration/saml.html#general-setup) による認証
- LDAP による認証 - dedicated チームに確認してください（まだロードマップの一部です）

## 接続

- VPC エンドポイント詳細を提供する
  - 顧客アカウント内で VPC エンドポイントを確立する、自身の AWS 組織内の AWS ユーザーまたはロールの IAM プリンシパル。GitLab Dedicated はアクセス制御のためにこの IAM プリンシパルを使用します: この IAM プリンシパルが、サービスへのエンドポイントをセットアップできる唯一のものになります。

- AZ のリスト（最大2 つ）: VPC エンドポイントをどの AZ で利用可能にしたいですか？

- Reverse PrivateLink: プライベートリンク接続にはどのサービスが必要ですか（例: JIRA、Confluence、Nexus、Artifactory と GitLab の間）

| URL | サービス名 | ポート |
| ------ | ------ | ------ |
| xxx.com | com.amazonaws.vpce.xx-xxx | 443 |

## ディザスタリカバリ / Geo

- Geo ノードを配置したい地域はどこですか？
- セットアップを配置する AZ について特定の要件はありますか？（例: southeast-1a）

## Runner

- Runner はどこに配置されていますか？
- Runner のフレーバー
  - [Openshift](https://docs.openshift.com/rosa/welcome/index.html)

- GitLab Dedicated への接続戦略
  - マルチクラウド
    - [AWS Transit Gateway](https://aws.amazon.com/transit-gateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc) を活用
      - [アーキテクチャ例](https://gitlab.com/gitlab-com/account-management/apac/pre-sales/govtech/uploads/243461695aff0443e6df749d585cf648/image__2_.png)

## ドメイン - 顧客が希望するサブドメイン

- 例: <CUSTOMER_NAME>.gitlab-dedicated.com

## 希望するインスタンスストレージとサイジング

- これにはレジストリ、およびアプリケーションに紐づくその他すべてのリソース（git など）が含まれます

## ロギングとセキュリティの要件

- S3 バケットへのログストリーミングを希望しますか？
- S3 バケットにストリーミングするログソースとその場所:
  - production_json.log
  - Production.log
  - api_json.log
  - Application.log
  - Application_json.log
  - audit_json.log
