---
title: "パフォーマンス"
upstream_path: "/handbook/engineering/performance/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T05:50:35Z"
translator: claude
stale: false
---

## パフォーマンスのファセット

パフォーマンスを 3 つのファセットに分類します。

1. [バックエンド](#backend-performance)
1. [フロントエンド](#frontend-performance)
1. [インフラストラクチャ](#infrastructure-performance)

### バックエンドパフォーマンス {#backend-performance}

バックエンドパフォーマンスは、API、コントローラー、コマンドラインインターフェース（例: git）のレスポンスタイムにスコープされます。

**DRI**: [Tim Zallman](https://gitlab.com/timzallmann)、VP of Engineering, Core Development.

パフォーマンス指標:

- [メモリ使用率（バックログ）](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8841)

### フロントエンドパフォーマンス {#frontend-performance}

フロントエンドパフォーマンスは、GitLab の可視ページと UI コンポーネントのレスポンスタイムにスコープされます。

**DRI**: [Tim Zallman](https://gitlab.com/timzallmann)、VP of Engineering, Core Development

パフォーマンス指標:

- [Largest Contentful Paint (LCP)](/handbook/engineering/development/performance-indicators/#largest-contentful-paint-lcp)

### インフラストラクチャパフォーマンス {#infrastructure-performance}

インフラストラクチャパフォーマンスは、GitLab SaaS インフラストラクチャのパフォーマンスにスコープされます。

**DRI**: [Marin Jankovski](https://gitlab.com/marin)、Sr. Director of Infrastructure, SaaS Platforms.

パフォーマンス指標:

- [GitLab.com の既知のアプリケーションスケーリングボトルネック](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-known-application-scaling-bottlenecks)

## その他の関連ページ

- [GitLab.com (インフラ) アーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)
- [GitLab.com のモニタリング](/handbook/engineering/monitoring/)
- [アプリケーションアーキテクチャドキュメント](https://docs.gitlab.com/ee/development/architecture.html)
- [GitLab.com の設定](https://docs.gitlab.com/ee/user/gitlab_com/)
- [GitLab パフォーマンスモニタリングドキュメント](https://docs.gitlab.com/ee/administration/monitoring/performance/index.html)
- [パフォーマンステストツール](/handbook/engineering/testing/performance-tools.md)

ここに記載されているさまざまな Issue を追跡する**メタ Issue** は[インフラストラクチャトラッカー](https://gitlab.com/gitlab-com/infrastructure/issues/2373)にあります。

## GitLab のアプリケーションパフォーマンス

## 測定

### 目標

GitLab および GitLab.com のパフォーマンスは、最終的にはユーザー体験に関するものです。[プロダクト管理ハンドブック](/handbook/product/categories/gitlab-the-product/#performance)にも説明されているように、「より高速なアプリケーションはより優れたアプリケーション」です。

現在の私たちの焦点は 2 つの指標です:

- **[Largest Contentful Paint](https://web.dev/articles/lcp)** (LCP)：完全な読み込みパフォーマンスを測定するもの。良好なユーザー体験を提供するために、ページが最初に読み込み始めてから 2.5 秒以内に LCP が発生する必要があります。
- **[Time to First Byte](https://developer.chrome.com/docs/lighthouse/performance/server-response-time)** (TTFB)：バックエンドがベースページを送信するのにどれだけ時間がかかるかを把握するもの。良好なバックエンドレンダリングの目標は 500ms 未満です。

中期的には、**[First Input Delay](https://web.dev/articles/fid)** (FID) と **[Cumulative Layout Shift](https://web.dev/articles/cls)** (CLS) にもより大きな焦点を当てながら、すべての [Web Vitals](https://web.dev/articles/vitals) に注目することを目標としています。そのため、メイン指標でルートが既に良好に動作している場合は、それらの最適化を拡張してください。

グループはパフォーマンスに関するユーザー体験を密接にモニタリングし、測定されたパフォーマンス指標以外でも[知覚パフォーマンス](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance)を改善する必要があります。例えば、読み込み後の操作が非常に遅く時間がかかる場合などです。

### 測定対象

[sitespeed.io](https://www.sitespeed.io/) を通じて 4 時間ごとに自動実行することで、可能なすべてのエンドユーザーパフォーマンスメトリクスを測定します。収集したデータはすべて、特定のルートの改善やボトルネックの分析に役立てられます。すべての Grafana ダッシュボードに使用される継続的なデータストレージとして graphite インスタンスにデータを送信しています。さらに、より詳細なインサイトデータ、スローモーションデータ、HAR ファイル、完全な [Lighthouse](https://developers.google.com/web/tools/lighthouse) レポートを持つ完全レポート（sitespeed ダッシュボードの `Runs` トグルを有効にするとリンクが表示されます）も保存しています。

### 測定方法

現在、空のキャッシュ、`Cable` に制限した接続、`us-central` にある中程度の CPU ベースのマシンで 4 時間ごとに測定しています。

### 過去と現在のパフォーマンス

以下のテーブルに示す GitLab.com の URL は、パフォーマンス改善を測定するための基準を形成しています。これらは頻繁に使用されるケースです。時間はウェブリクエストから「ページの可視部分が表示される平均時間」（Speed Index の定義による）までの経過時間を示しています。これらの URL の「ユーザー」はこの場合制御されたエンティティであるため、以前のパフォーマンス指標「Speed Index」の_外部_測定値を表しています。

| タイプ | [2018-04](https://storage.googleapis.com/sitespeed-results-gitlab/gitlab.com/2018-04-24-17-10-35/pages.html) | [2019-09](https://storage.googleapis.com/sitespeed-results-gitlab/gitlab.com/2019-09-13-08-28-42/pages.html) | [2020-02](https://storage.googleapis.com/sitespeed-results-gitlab/gitlab.com/2020-02-27-00-22-14/pages.html) | 現在* |
| --- | --- | --- | --- | --- |
| Issue リスト: [GitLab FOSS Issue リスト](https://gitlab.com/gitlab-org/gitlab-foss/issues) | 2872 | <span class="text-success">1197</span> | - | N/A |
| Issue リスト: [GitLab Issue リスト](https://gitlab.com/gitlab-org/gitlab/issues) |  |  | <span class="text-danger">1581</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab_issues&var-browser=chrome&var-connectivity=cable&var-function=median) |
| Issue: [GitLab FOSS #4058](https://gitlab.com/gitlab-org/gitlab-foss/issues/4058) | 2414 | <span class="text-success">1332</span> | <span class="text-danger">1954</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab-foss_issues_4058&var-browser=chrome&var-connectivity=cable&var-function=median) |
| Issue ボード: [GitLab FOSS リポジトリボード](https://gitlab.com/gitlab-org/gitlab-foss/boards) | 3295 | <span class="text-success">1773</span> | - | N/A |
| Issue ボード: [GitLab リポジトリボード](https://gitlab.com/gitlab-org/gitlab/-/boards/) | | | <span class="text-danger">2619</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab_boards&var-browser=chrome&var-connectivity=cable&var-function=median) |
| マージリクエスト: [GitLab FOSS !9546](https://gitlab.com/gitlab-org/gitlab-foss/merge_requests/9546) | 27644 | <span class="text-success">2450</span> | <span class="text-success">1937</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab-foss_merge_requests_9546&var-browser=chrome&var-connectivity=cable&var-function=median) |
| パイプライン: [GitLab FOSS パイプライン](https://gitlab.com/gitlab-org/gitlab-foss/pipelines) | 1965 | <span class="text-danger">4098</span> | - | N/A |
| パイプライン: [GitLab パイプライン](https://gitlab.com/gitlab-org/gitlab/pipelines) | | | <span class="text-danger">4289</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab_pipelines&var-browser=chrome&var-connectivity=cable&var-function=median) |
| パイプライン: [GitLab FOSS パイプライン 9360254](https://gitlab.com/gitlab-org/gitlab-foss/pipelines/9360254) | 4131 | <span class="text-success">2672</span> |  <span class="text-success">2546</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab-foss_pipelines_9360254&var-browser=chrome&var-connectivity=cable&var-function=median) |
| プロジェクト: [GitLab FOSS プロジェクト](https://gitlab.com/gitlab-org/gitlab-foss) | 3909 | <span class="text-success">1863</span> | - | N/A |
| プロジェクト: [GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab) | | | <span class="text-success">1533</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab&var-browser=chrome&var-connectivity=cable&var-function=median) |
| リポジトリ: [GitLab FOSS リポジトリ](https://gitlab.com/gitlab-org/gitlab-foss/tree/master) | 3149 | <span class="text-success">1571</span> | - | N/A |
| リポジトリ: [GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab/tree/master) | | | <span class="text-danger">1867</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab_tree_master&var-browser=chrome&var-connectivity=cable&var-function=median) |
| 単一ファイル: [GitLab FOSS 単一ファイルリポジトリ](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/app/assets/javascripts/main.js) | 2000 | <span class="text-success">1292</span> | - | N/A |
| 単一ファイル: [GitLab 単一ファイルリポジトリ](https://gitlab.com/gitlab-org/gitlab/blob/master/app/assets/javascripts/main.js) | | | <span class="text-danger">2012</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_gitlab-org_gitlab_blob_master_app_assets_javascripts_main_js&var-browser=chrome&var-connectivity=cable&var-function=median) |
| Explore: [GitLab explore](https://gitlab.com/explore) | 2346 | <span class="text-success">1354</span> | <span class="text-success">1336</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_explore&var-browser=chrome&var-connectivity=cable&var-function=median) |
| スニペット: [GitLab スニペット 1662597](https://gitlab.com/snippets/1662597) | 1681 | <span class="text-success">1082</span> | <span class="text-danger">1378</span> | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-group=gitlab_com&var-page=_snippets_1662597&var-browser=chrome&var-connectivity=cable&var-function=median) |

*sitespeed grafana ダッシュボードにアクセスするには、Google アカウントにログインする必要があります。

**注:** このテーブルは単一コードベース化の前後にまたがるため、まったく同じプロジェクトではないにもかかわらず、比較を可能にするために GitLab FOSS ページを GitLab のページに近い位置に配置しています。

#### すべての Sitespeed ダッシュボード

[Sitespeed - サイトサマリー](https://dashboards.gitlab.net/d/000000045/sitespeed-site-summary?orgId=1)

[Sitespeed - ページサマリー](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary)

[Sitespeed - ページタイミングサマリー](https://dashboards.gitlab.net/d/000000044/sitespeed-page-timing-metrics)

`runs` トグルを有効にすると、すべての完全レポートへのリンクを持つアノテーションが表示されます。現在は 2 時間ごとに測定を実行しています。

---

## ステップ

### ウェブリクエスト {#flow-of-web-request}

速度計（<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>）シンボルで始まるすべての項目は、_測定している_フロー内のステップを表しています。速度計アイコンは可能な限り[モニタリング](/handbook/engineering/monitoring/)の関連ダッシュボードにリンクされています。以下のリストの各ステップは、[目標テーブル](#web-goals-table)の対応するエントリにリンクされています。

ユーザーがブラウザーを開き、`gitlab.com/dashboard` と入力してダッシュボードにアクセスするシナリオを考えてみてください。以下がその流れです:

1. <a name="request-reaches-be"></a> [**ユーザーリクエスト**](#tb-request-reaches-be)
    1. <a name="start-request"></a> ユーザーがブラウザーに gitlab.com/dashboard と入力して Enter を押す
    1. <a name="lookup-ip"></a> [DNS での IP 検索](#tb-lookup-ip)（非測定）
       - ブラウザーが DNS サーバーで IP アドレスを検索
       - DNS リクエストが送受信される（通常 ~10-20 ms [データ?]；多くの場合すでにキャッシュされているのでより早い）
       - ブラウザーからアプリケーションまでのステップの詳細については、<https://github.com/alex/what-happens-when> をご覧ください。
    1. <a name="browser2azlb"></a> [ブラウザーから Azure LB](#tb-browser2azlb)（非測定）
       - IP アドレスを見つけたブラウザーは、ウェブリクエスト（gitlab.com/dashboard 用）を Azure のロードバランサー（LB）に送信する
1. <a name="backend-processes"></a> [**バックエンドプロセス**](#tb-backend-processes)
    1. <a name="azlb2haproxy"></a> [Azure LB から HAProxy](#tb-azlb2haproxy)（非測定）
       - Azure のロードバランサーがパケット（リクエスト）のルーティング先を決定し、フロントエンドロードバランサー（HAProxy とも呼ばれる）にリクエストを送信する
    1. <a name="haproxy-ssl"></a> [HAProxy によるブラウザーとの SSL](#tb-haproxy-ssl)（非測定）
       - HAProxy（ロードバランサー）がブラウザーと SSL ネゴシエーションを行う
    1. <a name="haproxy2nginx"></a> [HAProxy から NGINX](#tb-haproxy-ssl)（非測定）
       - HAProxy がフロントエンドワーカーの NGINX にリクエストを転送する。この場合、ウェブリクエストを追跡しているため、[本番アーキテクチャ図](/handbook/engineering/infrastructure-platforms/production/architecture/)の「Web」ボックス内の NGINX ボックスになる。ただし、コマンドラインからの API や git コマンドを経由してリクエストが来ることもあるため、その図の API および git の「ボックス」も存在する。
       - すべてのサーバーが 1 つの Azure VNET にあるため、HAProxy と NGINX 間の SSL ハンドシェイクとティアダウンのオーバーヘッドはほぼ無視できるほど小さい。
    1. <a name="nginx-buffer"></a> [NGINX によるリクエストバッファリング](#tb-nginx-buffer)（非測定）
       - NGINX がリクエストに関連するすべてのネットワークパケットを収集する（「リクエストバッファリング」）。リクエストは中間ネットワークによって複数のパケットに分割される場合がある。詳細については [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) を参照。
       - 他のフローでは、これは当てはまらない。具体的には、[LFS ではリクエストバッファリングが無効化されている](https://gitlab.com/gitlab-org/gitlab-workhorse/issues/130)。
    1. <a name="nginx2workhorse"></a> [NGINX から Workhorse](#tb-nginx2workhorse)（非測定）
       - NGINX が完全なリクエストを Workhorse に転送する（1 つの結合リクエストとして）。
    1. <a name="workhorse2various"></a> [Workhorse によるリクエスト配信](#tb-workhorse2various)
       - Workhorse がリクエストを以下の部分に分割して転送する:
       - <a name="workhorse2unicorn"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=13&fullscreen&orgId=1)
       [Unicorn](#tb-workhorse2unicorn)。Unicorn がリクエストを処理するまでの待機時間が `HTTP queue time` です。
       - <a name="workhorse2gitaly"></a> [Gitaly](#tb-workhorse2gitaly) [このシナリオではないが、どの場合も非測定]
       - <a name="workhorse2nfs"></a> [NFS](#tb-workhorse2nfs)（HTTP 経由の git clone）[このシナリオではないが、どの場合も非測定]
       - <a name="workhorse2redis"></a> [Redis](#tb-workhorse2redis)（ロングポーリング）[このシナリオではないが、どの場合も非測定]
    1. <a name="unicorn2various"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=2&fullscreen&orgId=1) [Unicorn によるサービス呼び出し](#tb-unicorn2various)
       - Unicorn（しばしば「Rails」または「アプリケーションサーバー」と呼ばれる）は、リクエストを Rails コントローラーリクエストに変換する。この場合は `RootController#index`。リクエストが Unicorn で_開始_し Unicorn を_離れる_までのラウンドトリップタイムを `Transaction Timings` と呼ぶ。RailsController リクエストは以下に送信される（そこからデータが受信される）:
       - <a name="unicorn2db"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=9&fullscreen&orgId=1) [PostgreSQL](#tb-unicorn2db)（`SQL timings`）
       - <a name="unicorn2nfs"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/daily-overview?panelId=14&fullscreen&orgId=1) [NFS](#tb-unicorn2nfs)（`git timings`）
       - <a name="unicorn2redis"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/daily-overview?panelId=13&fullscreen&orgId=1) [Redis](#tb-unicorn2redis)（`cache timings`）
       - この `gitlab.com/dashboard` の例では、コントローラーはすべての 3 つを処理する [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-controller=RootController&var-action=index)。
       - 通常、特定のコントローラーリクエストに対して_複数の_ SQL 呼び出し（またはファイル、キャッシュなど）があります。これらは合計タイミングに加算され、特に順次実行されるため重要です。たとえば、このシナリオでは、上記の_特定のユーザー_が `gitlab.com/dashboard/issues` にアクセスする際に [29 の SQL 呼び出しが発生します（`Load` で検索）](https://profiler.gitlap.com/20170524/901687e2-9fa1-4256-8414-c4835dc31dbc.txt.gz)。SQL 呼び出しの数は、そのユーザーが持つプロジェクトの数や、すでにキャッシュされている量などによって異なります。
       - Rails はコントローラーリクエスト内のステップを順次処理する。つまり、データベースと git への呼び出しが必要な場合、それらを並列に実行するのではなく、最初のステップへの応答を待ってから次のステップに進む。
       - Rails スタックでは、ミドルウェアは通常、コントローラー呼び出しごとに Redis、NFS、PostgreSQL へのラウンドトリップ数を増やす。ミドルウェアは {セッション状態、ユーザー ID、エンドポイント認可、レート制限、ログ記録など} に使用され、コントローラーは通常、{設定の取得、キャッシュチェック、モデルビューの構築、キャッシュ保存など} のそれぞれに対して少なくとも 1 回のラウンドトリップを持ちます。各ラウンドトリップは < 10 ms と_推定_されます。
    1. <a name="unicorn-views"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=8&fullscreen&orgId=1)  [Unicorn によるビューの構築](#tb-unicorn-views)
         - ビューの構築には長い時間がかかることがある（`view timings`）。一部のコントローラーでは、最初にデータが収集され、その後ビューが構築される。他のコントローラーでは、ビュー_内から_データが収集されるため、それらの場合の `view timing` には NFS、PostgreSQL、Redis などの呼び出しにかかった時間が含まれる。多くの場合、両方が行われる。
         - Rails の特定のビューは、多くの場合、複数の部分ビューから構築される。これらはコントローラーアクションで指定されたテンプレートファイルから使用され、テンプレートファイル自体は一般的にレイアウトテンプレート内に含まれる。パーシャルは他のパーシャルを含めることができる。これは適切なコードの整理と再利用のために行われる。例として、上記の_特定のユーザー_が `gitlab.com/dashboard/issues` を読み込む際には、[56 個のネストされた/部分ビューがレンダリングされる（`View::` で検索）](https://profiler.gitlap.com/20170524/901687e2-9fa1-4256-8414-c4835dc31dbc.html.gz)。
         - 部分ビューは、フラグメントキャッシングなど、さまざまな [Rails のテクニック](https://guides.rubyonrails.org/caching_with_rails.html)を通じてキャッシュできる。さらに、GitLab には Markdown から HTML への変換を高速化するためにデータベースに保存された Markdown キャッシュがある。
         - First Paint という意味での知覚パフォーマンスは、バックエンドによってレンダリングされるビューのコンテンツ量と、ユーザーに「最小限の」HTML ブロブを送信して Javascript / AJAX などに依存してページを First Paint から「完全読み込み」に移行させる追加要素の取得を比較することで影響を受ける。これについての詳細はフロントエンドのセクションを参照。
    1. <a name="unicorn2html"></a> [Unicorn による HTML 生成](#tb-unicorn2html)（非測定）
        - ビューが構築されると、Unicorn はブラウザーに返される「HTML ブロブ」の作成を完了する。
        - これらのブロブの一部は計算コストが高く、レンダリング後に Unicorn から Redis に送信（つまりキャッシュ）するようにハードコードされることがある。
    1. <a name="html2browser"></a> [HTML からブラウザーへ](#tb-html2browser)（非測定）
       - HTML ブロブは次のパスを経てブラウザーに送信される:
       - <a name="unicorn2workhorse"></a> [Unicorn から Workhorse](#tb-unicorn2workhorse)（非測定）
       - <a name="workhorse2nginx"></a> [Workhorse から NGINX](#tb-workhorse2nginx)（非測定）
       - <a name="nginx2haproxy"></a> [NGINX から HAProxy](#tb-nginx2haproxy)（非測定）
       - <a name="haproxy2azlb"></a> [HAProxy から Azure LB](#tb-haproxy2azlb)（非測定）
       - <a name="azlb2browser"></a> [Azure LB からブラウザーへ](#tb-azlb2browser)（非測定）
1. <a name="renderpage"></a> [**ページレンダリング**](#tb-renderpage)
    1. <a name="browser-firstbyte"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/gitlab-web-status?refresh=1m&panelId=14&fullscreen&orgId=1&from=now-90d&to=now) [**First Byte**](#tb-browser-firstbyte)
      - ブラウザーが最初のバイトを受信する時間。バックエンドのすべてに加えて、ネットワーク速度にも依存する。上記の速度計にリンクされているダッシュボードでは、First Byte は US にある Digital Ocean ボックスからネットワーク遅延が比較的少ない状態で測定されており、_内部_ First Byte の推定値を表す。first byte の過去のパフォーマンスは[このページの別の場所](#external)に記録されている。
      - すべてのページに対して、ブラウザーの「inspect」ツールを使用して「TTFB」（time to first byte）を確認できる。
      - [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/)
      `First Byte - External` は [SiteSpeed](https://www.sitespeed.io/) を使用して手動で選択した URL について測定されている。
    1. <a name="reaching-speed-index"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) [**Speed Index**](#tb-reaching-speed-index)
      - ブラウザーが HTML ブロブを解析し、GitLab.com に対して javascript バンドル、CSS、画像、ウェブフォントなどのアセットを取得するための追加リクエストを送信する。
      - このステップのタイミングは（他の要素の中でも特に）アセットの数と大きさ、およびネットワーク速度に依存する。_各_静的アセットについて、ラウンドトリップが発生する:
            - キャッシュされたアセットの場合: ブラウザー <i class="fas fa-long-arrow-alt-right fa-fw"
           aria-hidden="true"></i> nginx <i class="fas fa-long-arrow-alt-right fa-fw"
           aria-hidden="true"></i> nginx がキャッシュされたアセットがまだ有効であることを確認 <i
           class="fas fa-long-arrow-alt-right fa-fw" aria-hidden="true"></i> ブラウザー
            - キャッシュされていないまたは期限切れのキャッシュアセットの場合: ブラウザー <i class="fa
           fa-long-arrow-right fa-fw" aria-hidden="true"></i> workhorse <i class="fa
           fa-long-arrow-right fa-fw" aria-hidden="true"></i> workhorse がローカルキャッシュからアセットを取得 <i class="fas fa-long-arrow-alt-right fa-fw"
         aria-hidden="true"></i> ブラウザー
            - GitLab Pages を通じて提供されるページの場合: ブラウザー <i class="fa
           fa-long-arrow-right fa-fw" aria-hidden="true"></i> pages デーモン
           （アーキテクチャ内の独立したサービス）<i class="fas fa-long-arrow-alt-right
           fa-fw" aria-hidden="true"></i> ブラウザー
      - スタイルシートはデフォルトでページレンダリングをブロックする場合があり、ページレンダリングに不必要な遅延をもたらす可能性がある。
      - 9.5 以降、スクリプトは `defer="true"` で読み込まれるためレンダリングをブロックしなくなり、HTML + CSS がレンダリングされた後にのみ呼び出された順序で解析・実行される。
      - 「Speed Index」を計算するのに十分な意味のあるコンテンツが画面にレンダリングされる。
    1. <a name="reaching-fullyloaded"></a> [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) [完全読み込み](#tb-reaching-fullyloaded)
      - スクリプトが読み込まれると、Javascript がページ内でそれらをコンパイルして評価する。
      - 一部のページでは、非同期読み込みを可能にするために AJAX を使用している。AJAX 呼び出しはフロントエンド要素（ボタン）や `DOMContentLoaded` イベントなど、あらゆる種類のものによってトリガーされる。新しい呼び出しは新しい URL 用であり、そのようなリクエストはバックエンドの Web または API ワーカーを経由してルーティングされ、それぞれの Rails コントローラーを呼び出し、リクエストされたファイル（HTML、JSON など）を返す。例えば、`gitlab.com/username` というページのカレンダーとアクティビティフィードは `DOMContentLoaded` によってトリガーされる 2 つの別々の AJAX 呼び出しです。（`DOMContentLoaded` イベントは「DOM の準備ができており、JavaScript の実行をブロックするスタイルシートがない [時点](https://css-tricks.com/dom/) を示す」（[クリティカルレンダリングパス](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp)についての記事から引用））。AJAX を使用する代わりに、`gitlab.com/username` URL によって呼び出される同じコントローラー内でカレンダーとアクティビティフィードを生成する完全な Rails コードを含めることもできるが、これは単にデータベースへの呼び出しが増えるなどにより First Paint が遅くなる結果をもたらす。

---

### Git コミットプッシュ

まず上記の[ウェブリクエストのステップ](#flow-of-web-request)を読み、その後ここから続けてください。

例えば _ウェブ UI_ から、リポジトリにプッシュした後:

1. ウェブブラウザーでリポジトリファイルを編集し、コミットメッセージを入力して「Commit」をクリックする
1. NGINX が git コミットを受信し、Workhorse に渡す
1. Workhorse が `git-receive-pack` プロセス（workhorse マシン上）を起動して新しいコミットを NFS に保存する
1. workhorse マシン上で、`git-receive-pack` が [git フック](https://docs.gitlab.com/ee/administration/server_hooks.html)を起動して `GitLab Shell` をトリガーする
   - GitLab Shell は SSH 経由でプッシュされた Git ペイロードを受け入れ、それに基づいて（例: プッシュを実行する権限があるかどうかを確認したり、データを処理のためにスケジューリングしたりする）
   - この場合、GitLab Shell は `post-receive` フックを提供し、`git-receive-pack` プロセスがリポジトリにプッシュされた内容の詳細を `post-receive` フックに渡す。具体的には、古いリビジョン、新しいリビジョン、ref（タグまたはブランチ）名の 3 つの項目のリストを渡す。
1. Workhorse は `post-receive` フックを Sidekiq キューである Redis に渡す
   - Workhorse はプッシュが成功したか失敗したかを通知される（リポジトリが利用できない、Redis がダウンしているなどの理由で失敗する可能性がある）
1. Sidekiq は Redis からジョブを取り上げ、キューからジョブを削除する
1. Sidekiq は PostgreSQL を更新する
1. Unicorn は PostgreSQL にクエリを実行できるようになる

---

## 目標

### ウェブリクエスト

ユーザーがブラウザーを開き、`GitLab.com` のお気に入り URL を表示するシナリオを考えてみてください。ステップは[「ウェブリクエスト」](#flow-of-web-request)のセクションに説明があります。このテーブルでは、ステップが測定され、改善の目標が設定されています。

このテーブルのガイド:

- すべての時間はミリ秒で報告されます。
- `# per request`：リクエストごとにこのステップが発生する平均回数。例えば、平均的な「トランザクション」には [0.2 の SQL 呼び出し、0.4 の git 呼び出し、1 回のキャッシュ呼び出し](https://docs.google.com/spreadsheets/d/15mhXjwkx2lOXJps7lsp_o0zbwGSyOdYOTc8-McwBy0A/pubhtml)、および 30 個のネストされたビューの構築が必要かもしれません。
- `p99 Q2-17`：Q2 2017 末の p99 タイミング（ミリ秒）
- `p99 Now`：現在の p99 タイミングを表示するダッシュボードへのリンク
- `p99 Q3-17`：Q3 2017 末までの p99 タイミングの目標
- _斜体_ の数字は _イベントごと_ または他のタイミングと _並列_ であり、（小計に合算されない）。斜体でない数字は（小計に）合算されます。

<a name="web-goals-table"></a>

| ステップ                                                    | # per request | p99 Q2-17 | p99 Now | p99 Q3-17 goal | Issue リンクと影響 |
|---------------------------------------------------------|--------------:|--------:|--------:|-------------:|------------------------|
| <a name="tb-request-reaches-be"></a>[**ユーザーリクエスト**](#request-reaches-be) |               |         |         |              |                        |
| <a name="tb-lookup-ip"></a>[DNS での IP 検索](#lookup-ip)                          |     1         |~10| ? |~10|  [第 2 の DNS プロバイダーの使用](https://gitlab.com/gitlab-com/infrastructure/issues/1711)  |
| <a name="tb-browser2azlb"></a>[ブラウザーから Azure LB](#browser2azlb)                    |     1         |~10| ? |~10|                        |
| <a name="tb-backend-processes"></a>[**バックエンドプロセス**](#backend-processes) |    |         |         |              | [モニタリング範囲の拡張](https://gitlab.com/gitlab-com/infrastructure/issues/1879) |
|<a name="tb-azlb2haproxy"></a>[Azure LB から HAProxy](#azlb2haproxy)                     |     1         |~2| ? |~2|                        |
|<a name="tb-haproxy-ssl"></a>[HAProxy によるブラウザーとの SSL](#haproxy-ssl)                 |     1         |~10| ? |~10| [SSL の高速化](https://gitlab.com/gitlab-com/infrastructure/issues/2321) |
|<a name="tb-haproxy2nginx"></a>[HAProxy から NGINX](#haproxy2nginx)              |     1         |~2| ? |~2|                        |
|<a name="tb-nginx-buffer"></a>[NGINX によるリクエストバッファリング](#nginx-buffer)                   |     1         |~10| ? |~10|                        |
|[<a name="tb-nginx2workhorse"></a>[NGINX から Workhorse](#nginx2workhorse)          |     1         |~2|  ? |~2|                        |
|<a name="tb-workhorse2various"></a>[Workhorse によるリクエスト配信](#workhorse2various)      |     1         |         |         |      | [workhorse へのモニタリング追加](https://gitlab.com/gitlab-com/infrastructure/issues/2025) |
|<a name="tb-workhorse2unicorn"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Workhorse から Unicorn_](#workhorse2unicorn) | 1 | 18  | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=13&fullscreen&orgId=1) | 10 | [Unicorn の追加](https://gitlab.com/gitlab-com/infrastructure/issues/1883) |
|<a name="tb-workhorse2gitaly"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Workhorse から Gitaly_](#workhorse2gitaly)   | |     | ?  |     |   |
|<a name="tb-workhorse2nfs"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Workhorse から NFS_](#workhorse2nfs)         | |     | ?  |     |   |
|<a name="tb-workhorse2redis"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Workhorse から Redis_](#workhorse2redis)      | |     | ?  |     |   |
|<a name="tb-unicorn2various"></a>[Unicorn によるサービス呼び出し](#unicorn2various)          |  1  |  2500       | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=2&fullscreen&orgId=1)  |  1000 | [GitLab 内部のモニタリング許可の追加](https://gitlab.com/gitlab-org/gitlab-ce/issues/28465)    |
|<a name="tb-unicorn2db"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Unicorn_ <i class="fas fa-arrows-alt-h fa-fw" aria-hidden="true"></i> _Postgres_](#unicorn2db)      | | _250_ |[<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=9&fullscreen&orgId=1)| _100_ | [スロークエリの高速化](https://gitlab.com/gitlab-org/gitlab-ce/issues/34535)  |
|<a name="tb-unicorn2nfs"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Unicorn <i class="fas fa-arrows-alt-h fa-fw" aria-hidden="true"></i> NFS_](#unicorn2nfs)          | | _460_ | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/daily-overview?panelId=14&fullscreen&orgId=1)  | _200_ | [Gitaly への移行](https://gitlab.com/gitlab-org/gitaly/issues/313) - [サンプル結果](https://gitlab.com/gitlab-com/infrastructure/issues/1912#note_31368476) |
|<a name="tb-unicorn2redis"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Unicorn <i class="fas fa-arrows-alt-h fa-fw" aria-hidden="true"></i> Redis_](#unicorn2redis)       | |  _18_ | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/daily-overview?panelId=13&fullscreen&orgId=1) |     |   |
|<a name="tb-unicorn-views"></a>[Unicorn によるビューの構築](#unicorn-views) |  | 1500   | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=8&fullscreen&orgId=1)  |  |       |
|<a name="tb-unicorn2html"></a>[Unicorn による HTML 生成](#unicorn2html) |  |    |   |  |       |
|<a name="tb-html2browser"></a>[HTML からブラウザーへ](#html2browser) |  |    |   |  |       |
|<a name="tb-unicorn2workhorse"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Unicorn から Workhorse_](#unicorn2workhorse) | 1 | ~2 | ?  | ~2  |  |
|<a name="tb-workhorse2nginx"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Workhorse から NGINX_](#workhorse2nginx)             |      1        | ~2| ? |~2|                        |
|<a name="tb-nginx2haproxy"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_NGINX から HAProxy_](#nginx2haproxy)                 |      1        |~2| ? |~2| [NGINX での HTML 圧縮](https://gitlab.com/gitlab-org/gitlab-ce/issues/33719)  |
|<a name="tb-haproxy2azlb"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_HAProxy から Azure LB_](#haproxy2azlb)               |      1        |~2| ? |~2|                        |
|<a name="tb-azlb2browser"></a>&nbsp;&nbsp;&nbsp;&nbsp;[_Azure LB からブラウザーへ_](#azlb2browser)               |      1        |~20| ? |~20|                        |
|<a name="tb-renderpage"></a>[**ページレンダリング**](#renderpage) |  |         |         |              |                        |
|<a name="tb-browser-firstbyte"></a> [**FIRST BYTE**](#browser-firstbyte)（[注 1][^1] 参照）]  |   | **1080 - 6347** |   [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://dashboards.gitlab.net/dashboard/db/gitlab-web-status)      | **1000**  |                        |
|<a name="tb-reaching-speed-index"></a>[**SPEED INDEX**](#reaching-speed-index)（[注 2][^2] 参照） |  | **3230 - 14454** | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/)  |   **2000**     | [インラインスクリプトの削除](https://gitlab.com/gitlab-org/gitlab-ce/issues/34903)、[可能な限りスクリプト読み込みの遅延](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/12759)、[画像の遅延読み込み](https://gitlab.com/gitlab-org/gitlab-ce/issues/34361)、[アセット読み込みを高速化する CDN の設定](https://gitlab.com/gitlab-com/infrastructure/issues/2092)、[CDN での画像リサイズの使用](https://gitlab.com/gitlab-org/gitlab-ce/issues/34364) |
|<a name="tb-reaching-fullyloaded"></a>[完全読み込み](#reaching-fullyloaded)（[注][^3] 参照） |  |   6093 - 14003   |  [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/)  |  未指定  |   [webpack コード分割の有効化](https://gitlab.com/gitlab-org/gitlab-ce/issues/33391) |
|---------------------------------------------------------|---------------|---------|---------|--------------|------------------------|

**注:**

[^1]: 1\. <a name="note-blackbox"></a> この範囲は、First Byte [テーブル](#first-byte)に提供されている 4 つのサンプル URL の First Byte タイムの範囲に対応しています。ただし、[このダッシュボード](https://dashboards.gitlab.net/dashboard/db/gitlab-web-status?refresh=1m&panelId=14&fullscreen&orgId=1&from=now-90d&to=now)で測定されたすべての _非ステージング_ URL に基づくと、2017-03-30 から 2017-06-28 の間では、数値は 3,833 ms になります。
[^2]: 2\. <a name="note-fp-times"></a> この範囲は、Speed Index テーブルに提供されている 4 つのサンプル URL の Speed Index の範囲に対応しています。
[^3]: 3\. <a name="note-fl-time"></a> この範囲は、Speed Index テーブルに提供されている 4 つのサンプル URL の完全読み込みタイムの範囲に対応しています。

### Git コミットプッシュ

_テーブルを作成予定。マージリクエスト歓迎！_

## 修飾語

すべてのパフォーマンスメトリクスに対して、以下の修飾語を適用できます:

- **ユーザー**: _実際の_ GitLab ユーザーが時間を体験・測定する方法。
- **内部**: GitLab.com のインフラストラクチャ_内から_測定された時間（境界は「ネットワーク | Azure ロードバランサー」インターフェースとして定義）。
- **外部**: GitLab.com のインフラストラクチャ外の指定された任意の地点から測定された時間。例えば、Prometheus モニタリングを持つ DO ボックス、または指定されたネットワーク速度の指定された地域のブラウザーなど。

## First Byte

### 外部 {#external}

First Byte のタイミング履歴を以下のテーブルに示します（_現在の_タイミングについては速度計アイコンをクリックしてください）。すべての時間はミリ秒です。

| タイプ |  Q4-17 末 | 現在 |
|------|--------------:|-------------:|-------------:|-----|
| Issue: [GitLab CE #4058](https://gitlab.com/gitlab-org/gitlab-ce/issues/4058) | [857](https://207.154.197.115/gl/sitespeed-result/gitlab.com/2017-12-27-19-26-37/pages/gitlab.com/gitlab-org/gitlab-ce/issues/4058/index.html) | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) |
| マージリクエスト: [GitLab CE !9546](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/9546) | [18673](https://207.154.197.115/gl/sitespeed-result/gitlab.com/2017-12-27-19-26-37/pages/gitlab.com/gitlab-org/gitlab-ce/merge_requests/9546/index.html) | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) |
| パイプライン: [GitLab CE パイプライン 9360254] | [1529](https://207.154.197.115/gl/sitespeed-result/gitlab.com/2017-12-27-19-26-37/pages/gitlab.com/gitlab-org/gitlab-ce/pipelines/9360254/index.html) | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) |
| リポジトリ: [GitLab CE リポジトリ](https://gitlab.com/gitlab-org/gitlab-ce/tree/master) | [1076](https://207.154.197.115/gl/sitespeed-result/gitlab.com/2017-12-27-19-26-37/pages/gitlab.com/gitlab-org/gitlab-ce/tree/master/index.html) | [<i class="fas fa-tachometer-alt fa-fw" aria-hidden="true"></i>](https://207.154.197.115/gl/sitespeed-result/gitlab.com/) |

### 内部 {#first-byte-internal}

アプリケーションとインフラストラクチャのパフォーマンスをフロントエンドとネットワークの側面を考慮せずにより深く測定するために、[Unicorn によって記録された](#unicorn2various)「トランザクションタイミング」を確認します。これらのタイミングは[アクセスされる URL ごとに](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-controller=Projects::MergeRequestsController&var-action=show) [Rails コントローラーダッシュボード](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-controller=Projects::MergeRequestsController&var-action=show)で確認できます。

## 可用性とパフォーマンスのラベル {#availability-performance-labels}

### 可用性

このセクションは[可用性の重大度](/handbook/product-development/how-we-work/issue-triage#availability)に移動されました。

### パフォーマンス

GitLab.com のパフォーマンスに関連する Issue の優先度を明確にするために、`~performance` ラベルと「Severity」ラベルを追加する必要があります。どの重大度ラベルを選択するかは、以下の 2 つの要因が影響します:

1. 何かがどれだけ頻繁に使用されるか。
2. 何かが障害を引き起こす可能性がどれだけ高いか。

厳密にパフォーマンスに関連する作業については、[Controller Timings Overview](https://dashboards.gitlab.net/dashboard/db/controller-timings-overview?) Grafana ダッシュボードを使用できます。このダッシュボードは、データを 3 つのカテゴリに分類しており、それぞれに関連する重大度ラベルがあります:

1. 頻繁に使用される: `~severity::2`
2. 一般的に使用される: `~severity::3`
3. まれに使用される: `~severity::4`

つまり、コントローラー（例: `UsersController#show`）が「頻繁に使用される」カテゴリにある場合は、`~severity::2` ラベルを割り当てます。

データベース関連のタイミングには、[SQL Timings Overview](https://dashboards.gitlab.net/dashboard/db/sql-timings-overview?orgId=1) も使用できます。これはデータベースチームがデータベース関連のパフォーマンス作業に使用する AP ラベルを決定するために主に使用するダッシュボードです。

## データベースパフォーマンス

非常に大まかなレベルで、データベースパフォーマンスに影響するパラメーターに関するいくつかの一般的な注意事項です。

- ホワイトボックスモニタリングから:
  - Rails コントローラーで費やされる時間のうち、データベースに費やされる割合: <https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller?viewPanel=13864&orgId=1>（特定の Rails コントローラー/ページについて）
  - _グローバル_ SQL タイミング: <https://dashboards.gitlab.net/dashboard/db/transaction-overview?panelId=9&fullscreen&orgId=1&from=now-2d&to=now>
- 単一の HTTP リクエストは単一のコントローラーを実行します。コントローラーは通常、利用可能なデータベース接続を 1 つだけ使用しますが、最初に読み取りを実行し、その後に書き込みを実行する場合は 2 つ使用することがあります。
  - pgbouncer は最大 150 の同時 PostgreSQL 接続を許可します。この制限に達した場合、PostgreSQL 接続が利用可能になるまで pgbouncer 接続をブロックします。
  - PostgreSQL は最大 300 の接続（アクティブかどうかにかかわらず、接続されているもの）を許可します。この制限に達すると、新しい接続は拒否され、アプリケーションでエラーが発生します。
  - プロセス数がデータベースサーバーで利用可能なコア数を超えると、CPU はリクエストされたプロセスを実行するために常にコアを切り替えます。このコアの競合によりパフォーマンスが低下する可能性があります。
- データベースの CPU 負荷が 100% 未満（<https://dashboards.gitlab.net/dashboard/db/postgresql-overview?refresh=5m&orgId=1&from=now%2Fw&to=now&panelId=13&fullscreen>）である限り、理論的にはレイテンシを追加せずにより多くの負荷を処理できます。実際には、データベースの専門家は CPU 負荷を 50% 未満に保つことを好みます。
  - 負荷が根本的なアプリケーション設計によってどのように決まるかの例として: DB CPU 使用率は以前は低かった（20%、9.2 以前）が、[9.2 RC1 が公開されたときに 50-75% に上昇](https://gitlab.com/gitlab-org/gitlab-ce/issues/32536)し、9.2 がリリースされるまでに 20% に戻った。
- pgbouncer
  - 機能: pgbouncer は _N_ の受信接続を _M_ の PostreSQL 接続にマッピングし、_N_ >= _M_ となります（_N_ < _M_ では意味がない）。例えば、1024 の受信接続を 10 の PostgreSQL 接続にマッピングできます。これは主に同時に処理したいクエリの数によって影響されます。例えば、GitLab.com では、プライマリが 100 を超えることはほとんどなく（通常は 20-30 前後）、セカンダリが 20-30 の同時クエリを超えることもほとんどありません。セカンダリを追加するほど、負荷を分散できるため必要な接続数が減ります（サーバーが多くなるコストと引き換えに）。
  - アナロジー: pgbouncer は多くのお客様に飲み物を提供するバーテンダーです。彼女は自分で飲み物を作る代わりに、20 人の「バックエンド」バーテンダーのうちの 1 人にそれを指示します。バーテンダーの 1 人が飲み物を作っている間、他の 19 人（「メイン」バーテンダーを含む）は新しい注文に対応できます。飲み物が完成すると、20 人の「バックエンド」バーテンダーのうちの 1 人がメインバーテンダーに渡し、メインバーテンダーがそれを注文したお客様に渡します。このアナロジーでは、_N_ の受信接続がバーのお客様であり、_M_ の「バックエンド」バーテンダーがいます。
  - pgbouncer のフロントエンド接続（受信接続）は非常に安価で、多数（例: 数千）持つことができます。通常、_N_ >= _A_ となるようにしたい（_N_ が pgbouncer の接続制限、_A_ がアプリケーションに必要な接続数）。
  - PostgreSQL 接続はリソースの観点からはるかに高コストで、理想的にはサーバーごとに利用可能な CPU コア数以下にする（例: 32）。負荷によっては常にこれで十分とは限らず、例えばプライマリはピーク時に 100-150 の接続を許可する必要があります。
  - pgbouncer は、一定期間アイドル状態になった PostgreSQL 接続を終了するように設定でき、リソースを節約できます。
