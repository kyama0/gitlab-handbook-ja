---
title: "アナリティクス"
description: >-
  Digital Experience チームがマーケティングサイトのアナリティクスについて担当する範囲、他チームに残る範囲、リクエストのルーティング方法。
upstream_path: /handbook/marketing/digital-experience/analytics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-04T15:44:19-07:00"
---

このページでは、Digital Experience チームがマーケティングサイトのアナリティクスをどのようにサポートするかを説明します。私たちが担当する範囲、他チームに残る範囲、そしてリクエストの送り先をカバーします。

## 私たちが担当する範囲

私たちは、マーケティングサイトの Google Analytics (GA4) と Google Tag Manager (GTM) について、Marketing Analytics チームと共同 DRI を務めています。

**アナリティクスを担当しているプロパティ:**

- [about.gitlab.com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com)
- [GitLab Blog](https://gitlab.com/gitlab-com/marketing/digital-experience/gitlab-blog)
- [Navigation](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation)
- [Slippers Design System](https://gitlab.com/gitlab-com/marketing/digital-experience/slippers-ui)
- [Buyer Experience（非推奨）](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience)

**これらのプロパティに対して私たちが扱う事項:**

- マーケティングサイトのリクエスト向けの GTM コンテナ変更
- マーケティングサイトにおける GA4 イベントタグ付けと `dataLayer` の実装
- マーケティングサイトドメインを横断する OneTrust の四半期 Cookie スキャン
- 法務審査を経た上での GTM 内のピクセルおよびサードパーティスクリプトの実装

## 他チームに残る範囲

**Marketing Analytics** は、計測フレームワーク、ダッシュボード、アトリビューションモデリング、および Snowflake へのデータエクスポートを担当します。データの意味と報告方法を定義するのは彼らです。彼らの担当範囲については [Marketing Analytics GA4 ハンドブックページ](/handbook/enterprise-data/marketing-analytics/google-analytics-4/) を参照してください。

**Marketing Operations** は、Marketo と Adobe Measure (Bizible) を担当します。これらはアナリティクスパイプラインへ流れ込みますが、Digital Experience の外で設定されています。

**その他の GitLab プロパティ** — `api.gitlab.com`、`customers.gitlab.com`、`docs.gitlab.com`、`university.gitlab.com`、`ir.gitlab.com` — は、それぞれの製品またはエンジニアリングチームが所有しています。これらのプロパティに対するアナリティクスリクエストは、まずプロパティのオーナーに送ってください。Digital Experience は、招かれた場合に実装について相談に応じることがありますが、デフォルトではオーナーシップを引き受けません。

## リクエストのルーティング

マーケティングサイト（about.gitlab.com、Blog、Navigation、Slippers）のアナリティクスリクエストの場合:

1. 標準のリクエストテンプレートを使用して、[Digital Experience プロジェクトで Issue を作成](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com/-/issues/new) してください。
2. プロパティ、必要なイベントまたはデータ、および締切（あれば）を記載してください。

他の GitLab プロパティ（`api.gitlab.com`、`docs.gitlab.com` など）のリクエストは、まずそのプロパティを所有するチームに連絡してください。実装サポートが必要な場合、そのチームから Digital Experience にループインしてもらえます。

ダッシュボード、アトリビューション、マーケティング指標に関する質問は、[Marketing Analytics チーム](/handbook/enterprise-data/marketing-analytics/) に連絡してください。

## 関連項目

- [Digital Experience チームのハンドブック](/handbook/marketing/digital-experience/)
- [GTM 設定ガイド](https://internal.gitlab.com/handbook/marketing/digital-experience/google-tag-manager-configuration-guide/)（社内） — GTM のタグ、トリガー、変数の設定方法
- [OneTrust](/handbook/marketing/digital-experience/onetrust/) — Cookie 同意とコンプライアンス
- [Data Dictionary](/handbook/marketing/digital-experience/engineering/data-dictionary/) — マーケティングサイトにおける `data-ga-name` および `data-ga-location` 属性の規約
- [Marketing Analytics GA4 ハンドブック](/handbook/enterprise-data/marketing-analytics/google-analytics-4/) — 計測フレームワークとレポーティング
- [GTM ハンドブック](/handbook/enterprise-data/marketing-analytics/google-tag-manager/) — サポートされているサードパーティプラットフォームと共同 DRI のリスト
