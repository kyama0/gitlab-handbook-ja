---
title: "Google Tag Manager"
upstream_path: "/handbook/enterprise-data/marketing-analytics/google-tag-manager/"
upstream_sha: dae94b0752e749cce0ad81e818ba66cae5ba4a11
translated_at: "2026-10-19T10:27:20Z"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

Google Tag Manager（GTM）は、ウェブトラッキングルールを設定し、[Google Analytics 4](/handbook/enterprise-data/marketing-analytics/google-analytics-4/)、Google Ads、LinkedIn Ads などのさまざまな分析・広告プラットフォームにデータを送信するウェブタグ管理ツールです。

[GTM コードスニペット](https://docs.google.com/document/d/1fPu19k55Xjeoz5PWziBrIoYTbbHT9saPLunzG6RzD04/edit?tab=t.0#heading=h.9yoza8raahpo)は GitLab の主要なサブドメインに展開されています:

- about.gitlab.com
- gitlab.com（トライアルオンボーディングとサインアップページ）
- docs.gitlab.com
- forum.gitlab.com
- handbook.gitlab.com
- page.gitlab.com
- advisories.gitlab.com
- learn.gitlab.com
- internal.gitlab.com
- explore.gitlab.com
- customers.gitlab.com（e コマースページ）
- university.gitlab.com
- contributors.gitlab.com
- support.gitlab.com

## 主要コンポーネント

[タグ](https://support.google.com/tagmanager/answer/3281060)はウェブサイト上の活動（ページビュー、動画再生、リンクのクリック、スクロール）からのイベント名を含み、データの送信先を指定し、追加のイベント情報を含みます。各タグには、いつどのように発火するかを決定するトリガーがあり、ページ名や動画タイトルなどの追加詳細を取得するための変数を含む場合があります。

- [トリガー](https://support.google.com/tagmanager/answer/7679316)はタグをいつ発火させるかを決定します。GTM には組み込みイベントリスナーがありますが、私たちは主に dataLayer イベントに基づくカスタムイベントトリガーと、クリックやスクロールに対する信頼性の高い組み込みトリガーを使用しています。

- [変数](https://support.google.com/tagmanager/answer/7683056?hl=en)はイベントに関する追加情報を取得し、GA4 のパラメーターとして格納します。これらはブラウザの HTML、URL コンポーネント、Cookie、またはカスタム dataLayer 実装からデータを取得できます。

## クリックトラッキング

about.gitlab.com 上の各 CTA（コールトゥアクション）リンクには以下のデータ属性が含まれています:

- data-ga-location: ページのセクション（例: header、hero、body、feature、footer）
- data-ga-name: 要素の名前（例: free trial、sales、buy premium）

about.gitlab.com のユーティリティヘッダーセクションの各 CTA には以下を含める必要があります:

- data-nav: ユーティリティヘッダーセクション内の要素名（例: register、login、logo）

ナビゲーションメニューの各リンクには以下を含める必要があります:

- data-nav-levelone: ナビゲーションメニューのタブ名
- data-nav-leveltwo: ナビゲーションメニューの要素名

GTM のクリックリスニングトリガーは、データ属性に基づいて関連する GA4 イベントタグを発火させます。データ属性のないリンクも追跡されますが、GA4 の cta_location イベントパラメーターには汎用的な「in-line」値が含まれ、cta_name イベントパラメーターにはリンクのテキストと URL が含まれます。

## データレイヤートラッキング

ウェブサイト上のカスタムイベントは [dataLayer メソッド](https://developers.google.com/tag-platform/tag-manager/web/datalayer)を介して追跡されます。希望するアクションが実行されると、JavaScript コードがウェブサイトに配置されます。dataLayer コードはブラウザにイベント名と変数を送信します。GTM のカスタムイベントトリガーがブラウザから dataLayer イベント名をリスニングします。

dataLayer コードの例:

```javascript
dataLayer.push({
  'event': 'videoStart',
  'videoTitle': 'The One DevOps Platform'
});
```

## サーバーサイド Google Tag Manager

サーバーサイド Google Tag Manager（sGTM）は、ユーザーのブラウザから直接ではなく、私たちのサーバーインフラを通じてマーケティングおよび分析データを処理するサーバーベースのトラッキングソリューションです。

**従来のトラッキング:** ウェブサイト → サードパーティサービス（Google Analytics、Facebook など）

**サーバーサイドトラッキング:** ウェブサイト → 私たちのサーバー → サードパーティサービス

### インフラ設定

#### アーキテクチャの概要

私たちは 3 つの地域の Cloud Run サービスを備えたグローバルなサーバーサイド GTM インフラを運用しています:

- **US 地域:** 北米と南米からのトラフィックを処理
- **EU 地域:** ヨーロッパ、中東、アフリカからのトラフィックを処理
- **アジア地域:** アジア太平洋からのトラフィックを処理

すべてのトラフィックは単一のドメイン（analytics.gitlab.com）を通じてルーティングされます。

#### トラフィックルーティングの仕組み

1. **ユーザーが世界中のどこからでも私たちのウェブサイトを訪問**します
2. **トラッキングデータが analytics.gitlab.com に送信**されます
3. **ロードバランサーが自動的に**リクエストを最寄りの地域サーバーにルーティングします
4. **地域サーバーがデータを処理**し、適切な分析プラットフォームに転送します
5. **地理的な最適化**によりグローバルに高速なレスポンスタイムを確保します

#### 地域別のメリット

マルチリージョン設定はいくつかの主要な利点を提供します。低レイテンシにより、ユーザーに近い場所でデータが処理されるため、より速いレスポンスタイムが実現します。EU のデータを EU インフラ内に留めることができるため、データ所在地コンプライアンスが達成され、規制要件を満たします。私たちのシステムには組み込みの冗長性があり、一つの地域で問題が発生した場合でも、トラフィックが自動的にリダイレクトされてサービスの可用性が維持されます。最も重要なのは、統合されたドメインを通じてグローバルに同じ設定が機能するため、ユーザーは場所に関わらず一貫したトラッキングエクスペリエンスを得られることです。

#### インフラ実装

Infrastructure チームがグローバルロードバランサー、地域 Cloud Run サービス、SSL 証明書、DNS 設定をどのように設定したかの詳細な技術ドキュメントについては、[GitLab Issue #2183](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/2183#note_2523358771)の完全な実装ガイドをご覧ください。

### サーバー Google Tag Manager コンテナ

#### クライアントサイドからサーバーサイドへのデータフロー

私たちの実装は、クライアントサイドとサーバーサイドの両方の Google Tag Manager コンテナが連携するデュアルコンテナアプローチを使用しています。

**クライアントサイドコンテナ:** ユーザーのインタラクションとウェブサイトイベントを取得し、Stape.io の Data Tag テンプレートを使用してこのデータをサーバーサイドコンテナに転送します。これはユーザーのブラウザで実行されるデータ収集レイヤーとして機能します。

**サーバーサイドコンテナ:** クライアントサイドコンテナからデータを受信し、Google Analytics、Facebook、LinkedIn、Reddit などのさまざまなサードパーティプラットフォームに送信する前に処理します。これは analytics.gitlab.com の私たちのサーバーで実行されます。

#### 対応サードパーティプラットフォーム

私たちのサーバーサイド設定は現在、複数のマーケティングおよび分析プラットフォームにデータを転送しています。各広告プラットフォームは、クライアントサイドピクセルではなくサーバーサイド API を通じて適切にフォーマットされたデータを受け取ります。また、ウェブサイト上にはクライアントサイドの他の機能または分析プラットフォームのスクリプトもあります。

**現在のプラットフォーム一覧**

| プラットフォーム | Cookie カテゴリ | トリガー | DRI チーム | メソッド |
|----------|----------------|---------|-------------|---------|
| Google Ads | 広告 | すべてのページビュー、コンバージョン | Digital Marketing、Brand | API |
| LinkedIn | 広告 | すべてのページビュー、コンバージョン | Digital Marketing、Brand | API |
| Facebook | 広告 | すべてのページビュー、エンゲージメント、コンバージョン | Digital Marketing、Brand | API |
| Reddit | 広告 | すべてのページビュー、エンゲージメント | Brand | API |
| Microsoft Ads | 広告 | すべてのページビュー、コンバージョン | Digital Marketing | API |
| StackAdapt | 広告 | すべてのページビュー、エンゲージメント | Brand | API |
| Google Analytics | 分析 | すべてのページビュー、エンゲージメント、コンバージョン | Marketing Analytics、Digital Experience | API |
| Snowplow | 分析 | すべてのページビュー | Marketing Analytics | Javascript |
| Adobe Measure (Bizible) | 分析 | すべてのページビュー | Marketing Operations、Marketing Analytics | Javascript |
| Marketo | 分析 | すべてのページビュー | Marketing Operations | Javascript |
| PathFactory | 機能性 | すべてのページビュー | Marketing Operations、ABM | Javascript |
| 6Sense | 機能性 | すべてのページビュー | Marketing Operations、ABM | Javascript |
| Mutiny | 機能性 | すべてのページビュー | Marketing Operations、ABM | Javascript |
| Qualified | 機能性 | ほとんどのページビュー | Marketing Operations | Javascript |

*テーブル最終更新日: 2025 年 7 月 1 日*

ウェブサイトに新しいタグを配置するリクエストをする場合は、まずプラットフォームが [Tech Stack](/handbook/business-technology/tech-stack-applications/)に記載されていることを確認してください。すべてのプラットフォームは法務チームによる承認が必要です。

プラットフォームが法的承認を受けたら、[Marketing Analytics プロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new)で新しい Issue を作成し、`/script_onboarding.md`テンプレートを使用してください。「Script Context」セクションをできる限り記入してください。Issue は自動的に@DennisCharukulvanich に割り当てられ、残りのタスクが評価されます。

#### 同意管理の統合

サーバーサイド GTM は、統合された同意管理ツール OneTrust を通じてユーザーのプライバシー設定を引き続き尊重しています。同意状態はクライアントサイドでキャプチャされ、サーバーサイドコンテナに転送されます。これにより、ユーザーが分析、マーケティング、またはその他の機能的な使用に対して適切な同意を提供した場合にのみ、データがプラットフォームに送信されます。
