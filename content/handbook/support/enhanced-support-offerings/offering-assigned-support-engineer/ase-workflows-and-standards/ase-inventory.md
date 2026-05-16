---
title: "ASE インベントリ"
description: "顧客構成に関する重要情報の収集を ASE が行う際の参照資料。"
upstream_path: /handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/ase-workflows-and-standards/ase-inventory/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-09T20:14:47+00:00"
---

## 概要

顧客が GitLab をどのように使用しているかを理解することは、ASE として質の高いサポートを提供するために重要です。各 ASE はこの情報を最適と思える方法で収集でき、このページは参照資料および出発点として機能します。

情報の収集には、次のようないくつかのアプローチがあります。

- 顧客に「インタビュー」する同期コール
- ウェブフォーム（データ分類を必ず考慮してください！）
- 顧客コラボレーションプロジェクト内の協働 Markdown ドキュメント
- 上記の組み合わせ

一般的に、すべての GitLab チームメンバーがアクセスできる場所にインベントリを保管しておくと便利です。これにより、緊急事態、ASE の引き継ぎなどでの迅速な知識移転が容易になります！

## インベントリ

顧客のインベントリを作成するときには、すべての顧客に該当する一般項目と、オファリング固有の項目の両方が多数あります。これを出発点として使用し、すでに知っている内容は事前に埋め、関連性がないと分かっている項目は破棄してかまいません。

役に立つと判明した、リストにない項目があれば追加してください。

### 一般

- ユーザーアクセス
  - アクセス方法（Basic 認証、SSO、LDAP）
  - SSO アイデンティティプロバイダー（Entra ID、Okta、その他など）
  - 2FA/MFA の強制
  - ユーザー名のフォーマット（`first.last`、`flast`、`n12345`...）
- 習慣
  - アップグレードの頻度（GitLab、Runner、ツールキット）
  - 主要または注目すべきグループとプロジェクト
  - モノレポ
- CI/CD
  - コンポーネント
  - [CI/CD inputs](https://docs.gitlab.com/ci/inputs/)
  - 一般的な構成
- セキュリティ
  - SAST
  - DAST
  - シークレットプッシュ保護
  - シークレット検出
  - コンプライアンスポリシー

### GitLab.com

- トップレベルの名前空間パス
- グループオーナー（リマインダー: admin/auditor でも見られます）
- Runner
  - GitLab ホスト型かセルフホスト型か
  - 平均分消費量を確認し、最も多く分を消費しているユーザーをメモする
  - アーキテクチャ（セルフホストの場合）
  - バージョン（セルフホストの場合）

### GitLab Self-Managed

セルフマネージドの顧客は、テスト、QA など、さまざまな目的のために複数の環境を維持していることがよくあります。サポートされる*すべての*環境について情報を収集することを忘れないでください。

- 環境の役割（prod、pre-prod、dev、QA...）
- デプロイとアーキテクチャ
  - 種類（シングル／マルチノード Omnibus、Docker、Helm...）
  - インストール方法（手動、カスタム、GET...）
  - ホスティングプラットフォーム（オンプレ、AWS、GCP...）
  - [リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/)
    - 追加オプション（マネージド Redis、RDS read replicas...）
  - GitLab のバージョン
- Runner
  - Runner のアーキテクチャ
  - バージョン

### GitLab Dedicated

- Runner
  - [GitLab ホスト型 Runner](https://docs.gitlab.com/ci/runners/hosted_runners/)、セルフホスト型 Runner、またはその組み合わせ
  - バージョン（セルフホストの場合）
- アーキテクチャ（Switchboard でも確認できます）

## インベントリ情報の維持

初回収集の後、顧客との作業中に顧客インベントリの変更を追跡しておくと便利です。一部の ASE は `https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/blob/main/Customers/CUSTOMER_NAME/extended_ase_notes/` で顧客のインベントリを維持しています。インベントリファイルの例:

```yaml
# Detailed customer information

Deployment Platform: "self-managed, AWS."
GitLab Deployment: "Omnibus, modified 20K RA (https://docs.gitlab.com/administration/reference_architectures/20k_users/), not Dedicated"
Runners Deployment: "various executors (such as docker, windows shell), do not have kubernetes runners"
Container registry: "yes"
Package registry: "yes"
GitLab pages: "yes"
GitLab Kubernetes Agent: "n/a"
License: "Ultimate"
Secure features: "merge request approval policies are configured, secret push protection used"
Security policies: "Have MR Approval Policies configured at the top-level group"
Security scanners: "some teams utilise various security scanners"
AI features: "No"
GEO used: "No"
Advanced search solution: "ElasticSearch"
Database solution: "RDS with 2 extra read replicas"
Redis: "AWS managed cluster"
Gitaly deployment type: "2 Gitaly clusters."
Integrations: "Jira, Harness"
Plan stage: "yes"
User access management: "LDAP for group sync, SAML for sign ins"
Zero-downtime upgrade: "yes, it is very important to them"
Zendesk org name: "ZD_ORG_ID CUSTOMER_NAME"
Link to Collaboration project:  https://gitlab.com/gitlab-com/account-management/emea/CUSTOMER_NAME/CUSTOMER_NAME-collaboration-project
Link to org note: https://gitlab.com/gitlab-com/support/assigned-support-engineers/-/blob/main/Customers/CUSTOMER_NAME/Readme.md
Link to Weekly ticket review issue template: "n/a"
```

これらのインベントリは、トラブルシューティングやレポート作成などのために Duo に顧客のデプロイに関するコンテキストを持たせる必要があるときに、Duo Agent Platform と組み合わせて使用するのにも役立ちます。
