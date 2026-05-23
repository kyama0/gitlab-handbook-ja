---
title: "環境のカナリアステージ"
description: "私たちの環境でカナリアステージがどのように機能するかに関する詳細情報"
upstream_path: "/handbook/engineering/infrastructure-platforms/environments/canary-stage/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T21:28:32Z"
translator: claude
stale: false
lastmod: "2025-11-25T13:09:27+00:00"
---

## 環境のカナリアステージ

GitLab で使用されている一部の環境は、「ステージ」と呼ばれる 2 つの独立した論理的なコンポーネントデプロイに分割されています。2 つのステージは「メイン」と「カナリア」（`cny` と省略されることもあります）です。

カナリアステージを設ける理由は、新しい GitLab ソフトウェアのリリースをすべてのユーザーにロールアウトする前に、制御された分離された方法でテストできるようにするためです。

### 「カナリア」と「メイン」ステージの違いと共有部分

カナリアステージには Web、コンテナレジストリ、Git サーバーなどのコード機能要素が含まれており、sidekiq、データベース、ファイルストレージなどのデータ要素は環境のメインステージと共有しています。これにより、UX コードとほとんどのアプリケーションロジックコードが、環境上のすべてのユーザーに提供される前に、より少数のユーザーによって実際の環境で利用されます。

現在、カナリアステージは以下のサービスをカバーしています

* GitLab web
* GitLab api
* GitLab Git https
* GitLab websockets
* GitLab registry
* GitLab pages
* GitLab shell
* Gitaly *（下記参照）
* Praefect *（下記参照）

現在、カナリアステージは以下のサービスをカバーしていません（これらのサービスにカナリアを使用している場合、「メイン」ステージで実行されているバージョンを使用しています）

* Sidekiq
* GitLab Agent for Kubernetes
* Mailroom
* Redis
* PostgreSQL

### カナリアステージでの Gitaly と Praefect の動作

Gitaly と Praefect ノードは Git データを保存するためにランダムに（重み付けあり）選択されるため、ステージ間で Gitaly/Praefect ノードを完全に分離することは不可能です。

これが意味することは、環境を使用する際に、Web フロントエンドを通じてどのステージを使用しているか、または [next.gitlab.com](https://next.gitlab.com) で何を選択しているかに関わらず、使用される Gitaly/Praefect コード（対象のリポジトリによる、以下を参照）はいずれかのステージ（メインまたはカナリア）からのものになる可能性があるということです。どの Gitaly/Praefect ノードが使用されるかは以下のルールに従います

* 既存のリポジトリを変更している場合、シャードが現在割り当てられている Gitaly サーバーを使用します。
* リポジトリをフォークしている場合、同じシャードに留まります。
* それ以外の場合、rails はストレージ設定に割り当てられた重みに基づく重み付き確率を使用してランダムなシャードを選択します。

[本番](/handbook/engineering/infrastructure-platforms/environments/#production)環境では、以下のよく知られたグループ/リポジトリが `canary` ステージの Gitaly/Praefect ノードで独占的に実行されています

* https://gitlab.com/gitlab-org

### 環境のカナリアステージへのアクセス

環境の「カナリア」ステージでのクレデンシャルとパーミッションは、環境の「メイン」ステージと同じです。

技術的なレベルでは、環境のカナリアステージへのアクセスは以下のいずれかの方法で実現されます

* 環境への通信に使用しているブラウザ/ツールで手動で `gitlab_canary` クッキーを `true` に設定する
* [next.gitlab.com](https://next.gitlab.com) にアクセスし、ページのトグルで「Current」の代わりに「Next」を選択する。**注意**: これにより、**すべての**環境で使用するステージ（メインまたはカナリア）が変更されます。

カナリアステージは以下の状況でも自動的に使用されます（注意点あり）

* 「メイン」ステージのトラフィックの 5% が、`gitlab_canary` が設定されていない場合（ほとんどのユーザーのデフォルト）、自動的に環境の「カナリア」ステージに送信されます。リクエストがカナリアに送信されないようにするには、使用しているブラウザ/ツールで手動で `gitlab_canary` クッキーを `false` に設定するか、https://next.gitlab.com で「current」が選択されていることを確認してください。
* 本番環境のみ、GitLab Inc. が運営するグループにアクセスするすべてのユーザーに対してカナリアステージが強制的に有効になります:
  * [GitLab.com](https://gitlab.com/gitlab-com)
  * [GitLab.org](https://gitlab.com/gitlab-org)
  * [charts](https://gitlab.com/charts)
  [next.gitlab.com](https://next.gitlab.com) で Canary を手動でオプトアウトしない限り
* トラフィックシェアは正確に 5% ではありません。[現在のベースラインは 4.7%](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1745) で HAProxy の重みによって決定されますが、実際の量は GCP のゾーンの可用性、時刻、GitLab グループへのトラフィックシェアなど複数の要因に依存します。

### 「カナリア」ステージを使用していることの確認

UI を使用する場合の最良の方法は、[パフォーマンスバーを有効にする](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html)ことで、ページを提供している Kubernetes ポッドサービスの名前を確認します。`gitlab-cny` で始まる場合（そして隣に赤ちゃんのヒヨコのアイコンがある場合）、カナリアステージを使用しています。また、左上の GitLab ロゴの横に緑色のボックスで「next」という文字が表示されます。

### 環境のカナリアステージに固有のログを表示するには

Elasticsearch で環境のログを表示する際、`json.stage.keyword` が `cny` であるフィルターを追加すると、環境内のサービスのカナリアステージからのログのみが表示されます。

### 環境のカナリアステージに固有のメトリクスを表示するには

環境の [dashboards.gitlab.net](https://dashboards.gitlab.net) でメトリクスダッシュボードを表示する際、上部の `stage` ドロップダウンから `cny` を選択してください。

### カナリアステージのフィーチャーフラグを変更するには

フィーチャーフラグはデータベース（フィーチャーフラグが保存される場所）がメインとカナリアステージで共有されているため、環境に対して通常の [chatops プロセス](/handbook/support/workflows/chatops/#feature-flags)) に従ってフィーチャーフラグを有効にすると、環境のメインとカナリアの両方のステージで変更されます。

最もよく使用される環境の例は以下のとおりです

ステージングと staging-canary のフィーチャーフラグ:

* 有効化: `/chatops run feature set feature_flag_name true --staging`
* 無効化: `/chatops run feature set feature_flag_name false --staging`

本番と production-canary のフィーチャーフラグ:

* 有効化: `/chatops run feature set feature_flag_name true`
* 無効化: `/chatops run feature set feature_flag_name false`

### カナリアステージへのコンソールアクセスを取得するには

現在、カナリアステージにはコンソールアクセスがありません。[標準コンソールアクセスプロセス](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)を使用して、メインステージのコードを実行している環境内のコンソールサーバーにのみアクセスできます。データベースはステージ間で共有されているため、コンソールで実行するアクションによっては、「カナリア」ステージと「メイン」ステージの両方に影響することに注意してください。

### カナリアステージのグローバル無効化

Infrastructure 部門のチームは、必要と判断された場合に環境のカナリアの使用をグローバルに無効化できます。これはテストとデプロイプロセスを大幅に妨げるため、通常のプロセスはインシデントの宣言から始まります。

#### 環境のカナリアステージの無効化

環境のカナリアを無効化する chatops コマンドは以下のとおりです

```markdown
## production-canary の無効化
/chatops run canary --disable --production

## staging-canary の無効化
/chatops run canary --disable
```

#### 環境のカナリアステージの再有効化

環境のカナリアを再有効化する chatops コマンドは以下のとおりです

```markdown
## production-canary の有効化
/chatops run canary --enable --production

## staging-canary の有効化
/chatops run canary --enable
```
