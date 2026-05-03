---
title: "Google Tag Manager"
upstream_path: "/handbook/enterprise-data/marketing-analytics/google-tag-manager/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

Google Tag Manager（GTM）は、ウェブトラッキングルールを設定し、[Google Analytics 4](/handbook/enterprise-data/marketing-analytics/google-analytics-4/)、Google Ads、LinkedIn Adsなどのさまざまな分析・広告プラットフォームにデータを送信するウェブタグ管理ツールです。

[GTMコードスニペット](https://docs.google.com/document/d/1fPu19k55Xjeoz5PWziBrIoYTbbHT9saPLunzG6RzD04/edit?tab=t.0#heading=h.9yoza8raahpo)はGitLabの主要なサブドメインに展開されています:

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
- customers.gitlab.com（eコマースページ）
- university.gitlab.com
- contributors.gitlab.com
- support.gitlab.com

## 主要コンポーネント

[タグ](https://support.google.com/tagmanager/answer/3281060)はウェブサイト上の活動（ページビュー、動画再生、リンクのクリック、スクロール）からのイベント名を含み、データの送信先を指定し、追加のイベント情報を含みます。各タグには、いつどのように発火するかを決定するトリガーがあり、ページ名や動画タイトルなどの追加詳細を取得するための変数を含む場合があります。

- [トリガー](https://support.google.com/tagmanager/answer/7679316)はタグをいつ発火させるかを決定します。GTMには組み込みイベントリスナーがありますが、私たちは主にdataLayerイベントに基づくカスタムイベントトリガーと、クリックやスクロールに対する信頼性の高い組み込みトリガーを使用しています。

- [変数](https://support.google.com/tagmanager/answer/7683056?hl=en)はイベントに関する追加情報を取得し、GA4のパラメーターとして格納します。これらはブラウザのHTML、URLコンポーネント、Cookie、またはカスタムdataLayer実装からデータを取得できます。

## クリックトラッキング

about.gitlab.com上の各CTA（コールトゥアクション）リンクには以下のデータ属性が含まれています:

- data-ga-location: ページのセクション（例: ヘッダー、ヒーロー、ボディ、フィーチャー、フッター）
- data-ga-name: 要素の名前（例: 無料トライアル、セールス、Buy Premium）

about.gitlab.comのユーティリティヘッダーセクションの各CTAには以下を含める必要があります:

- data-nav: ユーティリティヘッダーセクション内の要素名（例: 登録、ログイン、ロゴ）

ナビゲーションメニューの各リンクには以下を含める必要があります:

- data-nav-levelone: ナビゲーションメニューのタブ名
- data-nav-leveltwo: ナビゲーションメニューの要素名

GTMのクリックリスニングトリガーは、データ属性に基づいて関連するGA4イベントタグを発火させます。データ属性のないリンクも追跡されますが、GA4のcta_locationイベントパラメーターには汎用的な「in-line」値が含まれ、cta_nameイベントパラメーターにはリンクのテキストとURLが含まれます。

## データレイヤートラッキング

ウェブサイト上のカスタムイベントは[dataLayerメソッド](https://developers.google.com/tag-platform/tag-manager/web/datalayer)を介して追跡されます。希望するアクションが実行されると、JavaScriptコードがウェブサイトに配置されます。dataLayerコードはブラウザにイベント名と変数を送信します。GTMのカスタムイベントトリガーがブラウザからdataLayerイベント名をリスニングします。

dataLayerコードの例:

```javascript
dataLayer.push({
  'event': 'videoStart',
  'videoTitle': 'The One DevOps Platform'
});
```

## サーバーサイドGoogle Tag Manager

サーバーサイドGoogle Tag Manager（sGTM）は、ユーザーのブラウザから直接ではなく、自社のサーバーインフラを通じてマーケティングおよび分析データを処理するサーバーベースのトラッキングソリューションです。

**従来のトラッキング:** ウェブサイト → サードパーティサービス（Google Analytics、Facebookなど）

**サーバーサイドトラッキング:** ウェブサイト → 自社サーバー → サードパーティサービス

### インフラ設定

#### アーキテクチャの概要

私たちは3つの地域のCloud Runサービスを備えたグローバルなサーバーサイドGTMインフラを運用しています:

- **US地域:** 北米と南米からのトラフィックを処理
- **EU地域:** ヨーロッパ、中東、アフリカからのトラフィックを処理
- **アジア地域:** アジア太平洋からのトラフィックを処理

すべてのトラフィックは単一のドメイン（analytics.gitlab.com）を通じてルーティングされます。

#### トラフィックルーティングの仕組み

1. **ユーザーが世界中のどこからでも私たちのウェブサイトを訪問**します
2. **トラッキングデータがanalytics.gitlab.comに送信**されます
3. **ロードバランサーが自動的に**リクエストを最寄りの地域サーバーにルーティングします
4. **地域サーバーがデータを処理**し、適切な分析プラットフォームに転送します
5. **地理的な最適化**によりグローバルに高速なレスポンスタイムを確保します

#### 地域別のメリット

マルチリージョン設定はいくつかの主要な利点を提供します。低レイテンシにより、ユーザーに近い場所でデータが処理されるため、より速いレスポンスタイムが実現します。EUのデータをEUインフラ内に留めることができるため、データ所在地コンプライアンスが達成され、規制要件を満たします。私たちのシステムには組み込みの冗長性があり、一つの地域で問題が発生した場合でも、トラフィックが自動的にリダイレクトされてサービスの可用性が維持されます。最も重要なのは、統合されたドメインを通じてグローバルに同じ設定が機能するため、ユーザーは場所に関わらず一貫したトラッキングエクスペリエンスを得られることです。

#### インフラ実装

インフラチームがグローバルロードバランサー、地域Cloud Runサービス、SSL証明書、DNS設定をどのように設定したかの詳細な技術ドキュメントについては、[GitLab Issue #2183](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/2183#note_2523358771)の完全な実装ガイドをご覧ください。

### サーバーGoogle Tag Managerコンテナ

#### クライアントサイドからサーバーサイドへのデータフロー

私たちの実装は、クライアントサイドとサーバーサイドの両方のGoogle Tag Managerコンテナが連携するデュアルコンテナアプローチを使用しています。

**クライアントサイドコンテナ:** ユーザーのインタラクションとウェブサイトイベントを取得し、Stape.ioのデータタグテンプレートを使用してこのデータをサーバーサイドコンテナに転送します。これはユーザーのブラウザで実行されるデータ収集レイヤーとして機能します。

**サーバーサイドコンテナ:** クライアントサイドコンテナからデータを受信し、Google Analytics、Facebook、LinkedIn、Redditなどのさまざまなサードパーティプラットフォームに送信する前に処理します。これはanalytics.gitlab.comの自社サーバーで実行されます。

#### 対応サードパーティプラットフォーム

私たちのサーバーサイド設定は現在、複数のマーケティングおよび分析プラットフォームにデータを転送しています。各広告プラットフォームは、クライアントサイドピクセルではなくサーバーサイドAPIを通じて適切にフォーマットされたデータを受け取ります。また、ウェブサイト上にはクライアントサイドの他の機能または分析プラットフォームのスクリプトもあります。

**現在のプラットフォーム一覧**

| プラットフォーム | Cookieカテゴリ | トリガー | DRIチーム | メソッド |
|----------|----------------|---------|-------------|---------|
| Google Ads | 広告 | すべてのページビュー、コンバージョン | デジタルマーケティング、ブランド | API |
| LinkedIn | 広告 | すべてのページビュー、コンバージョン | デジタルマーケティング、ブランド | API |
| Facebook | 広告 | すべてのページビュー、エンゲージメント、コンバージョン | デジタルマーケティング、ブランド | API |
| Reddit | 広告 | すべてのページビュー、エンゲージメント | ブランド | API |
| Microsoft Ads | 広告 | すべてのページビュー、コンバージョン | デジタルマーケティング | API |
| StackAdapt | 広告 | すべてのページビュー、エンゲージメント | ブランド | API |
| Google Analytics | 分析 | すべてのページビュー、エンゲージメント、コンバージョン | マーケティングアナリティクス、デジタルエクスペリエンス | API |
| Snowplow | 分析 | すべてのページビュー | マーケティングアナリティクス | Javascript |
| Adobe Measure（Bizible） | 分析 | すべてのページビュー | マーケティングオペレーション、マーケティングアナリティクス | Javascript |
| Marketo | 分析 | すべてのページビュー | マーケティングオペレーション | Javascript |
| PathFactory | 機能 | すべてのページビュー | マーケティングオペレーション、ABM | Javascript |
| 6Sense | 機能 | すべてのページビュー | マーケティングオペレーション、ABM | Javascript |
| Mutiny | 機能 | すべてのページビュー | マーケティングオペレーション、ABM | Javascript |
| Qualified | 機能 | ほとんどのページビュー | マーケティングオペレーション | Javascript |

*テーブル最終更新日: 2025年7月1日*

ウェブサイトに新しいタグを配置するリクエストをする場合は、まずプラットフォームが[tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に記載されていることを確認してください。すべてのプラットフォームは法務チームによる承認が必要です。

プラットフォームが法的承認を受けたら、[マーケティングアナリティクスプロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new)で新しいIssueを作成し、`/script_onboarding.md`テンプレートを使用してください。「スクリプトコンテキスト」セクションをできる限り記入してください。Issueは自動的に@DennisCharukulvanichに割り当てられ、残りのタスクが評価されます。

#### 同意管理の統合

サーバーサイドGTMは、統合された同意管理ツールOneTrustを通じてユーザーのプライバシー設定を引き続き尊重しています。同意状態はクライアントサイドでキャプチャされ、サーバーサイドコンテナに転送されます。これにより、ユーザーが分析、マーケティング、またはその他の機能的な使用に対して適切な同意を提供した場合にのみ、データがプラットフォームに送信されます。
