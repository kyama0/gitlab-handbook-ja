---
title: Cloud Connector - コンポーネントオーナーシップ
upstream_path: /handbook/engineering/infrastructure/team/cloud-connector/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T05:26:36Z"
translator: claude
stale: false
---

## オーナーシップの更新

Cloud Connector チームは 2025-06-16 付けで解散しました。Cloud Connector コンポーネントのオーナーシップは、以下のように新しいチームに移管されました:

- [パーミッション & エンタイトルメント](#パーミッション--エンタイトルメント)
- [キー & トークン管理](#キー--トークン管理)
- [Duo ヘルスチェック](#duo-ヘルスチェック)
- [ネットワーク イングレス & サービスインフラ](#ネットワーク-イングレス--サービスインフラ)

### パーミッション & エンタイトルメント

- **オーナー:** [Fulfillment:Provision](/handbook/engineering/development/fulfillment/provision/)
- **テーマ:**
  - Unit Primitive（「クラウドエンタイトルメント」）の設定
  - これらのエンタイトルメントが GitLab ライセンスティアおよびアドオンにどのようにマッピングされるか
  - この情報が GitLab インスタンスにどのように伝播・保存されるか
  - 上記テーマに関連する Cloud Connector の Issue に対するアラートとインシデント対応

### キー & トークン管理

- **オーナー:** [SSCS:Authentication](/handbook/engineering/development/sec/software-supply-chain-security/authentication/)
- **テーマ:**
  - トークンとキーの作成、保存、配布
  - キーとトークンのローテーションと無効化のためのツール
  - クラウドエンタイトルメントのトークンペイロードへのマッピング
  - 上記テーマに関連する Cloud Connector の Issue に対するアラートとインシデント対応

### Duo ヘルスチェック

- **オーナー:** [Custom Models](/handbook/engineering/ai/custom-models/)
- **テーマ:**
  - Cloud Connector/SHM コンポーネントのための Duo ヘルスチェック機能の実装

### ネットワーク イングレス & サービスインフラ

- **オーナー:** [Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/)
- **テーマ:**
  - `cloud.gitlab.com` サービスイングレス（ルーティング + レート制限）のための Cloudflare Terraform モジュールのメンテナンス
  - Runway 上で稼働する Cloud Connector バックエンドのサービスインフラ
  - 上記テーマに関連する Cloud Connector の Issue に対するアラートとインシデント対応
