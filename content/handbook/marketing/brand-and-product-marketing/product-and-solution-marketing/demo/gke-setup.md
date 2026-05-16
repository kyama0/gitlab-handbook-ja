---
title: "Google Kubernetes Engine 上で GitLab CE または EE をセットアップする"
description: "このチュートリアルでは、Google Kubernetes Engine (GKE) 上で GitLab をインストールするプロセスを、クラスタのセットアップ、GitLab CE と EE 両方のインストール手順、インストール時に発生する可能性のある問題のトラブルシューティングを含めて解説します。"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/gke-setup/
upstream_sha: c26b483f365d397f86ef45e60a892d0783588ac1
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-01T09:22:28+00:00"
---

## 動画

下記の動画では、Google Kubernetes Engine (GKE) 上で GitLab をインストールする様子を紹介しています。DevOps ライフサイクルについては、
[セールスデモ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/)を参照してください。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/HLNNFS8b_aw" frameborder="0" allowfullscreen="true"> </iframe>
 </iframe>
</figure>

## 準備

- Google Cloud Platform アカウントが必要です。GitLab 従業員はこれを保有しています。GitLab アカウントでログインしていることを確認してください。
- [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes) にログインします。
- GitLab 従業員は `gitlab-demos` プロジェクトを使用してください。それ以外の方は、作業するプロジェクトを選択または作成してください。

  - URL: [https://console.cloud.google.com/kubernetes/list?project=gitlab-demos](https://console.cloud.google.com/kubernetes/list?project=gitlab-demos)

- 以前にデモを実行したものの[デモクラスタ](https://console.cloud.google.com/kubernetes/list)をクリーンアップしていない場合は、[今すぐクリーンアップしてください](#cleanup)。
- このスクリプトは `make-sid-dance.com` ドメインを前提としていますが、以下のいずれかを行ってください:

  - [Google Doc](https://docs.google.com/spreadsheets/d/1HZ-7XhDNzdCBxfjzDFIQi7EjliptkpY4CB3LbiLa9MY/edit#gid=0)（社内のみ）から最後に使用してから時間が経っているドメインを選択する。（Let's Encrypt は週次で SSL 証明書の作成回数を制限しているため、利用をローテーションすることで上限への到達を抑えられます。）または、
  - デモ用に新しいドメインを購入し、スクリプト全体で置き換える。

    - Google に DNS 管理を任せるために [DNS Zone を作成](https://console.cloud.google.com/networking/dns/zones/~new?project=gitlab-demos)します。
    - `Registrar Setup` をクリックして、使用するネームサーバーを確認します。

- デスクトップ通知を無効化します（Mac では右上隅を Option + クリック）。
- 他のタブが見えないように新しいブラウザウィンドウを開きます。
- 共有に適した妥当なサイズにブラウザウィンドウをリサイズします。1280x720 が良い選択肢です。<https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/720p.scpt> は Mac で Chrome を使う場合に便利な AppleScript です。User Scripts フォルダーに追加し、メニューバーに Script メニューを表示すれば、簡単にトリガーできます。
- 聴衆がメモや他のウィンドウに気を取られないように、ウェブブラウザのウィンドウだけを共有することも検討してください。
- フルスクリーン表示する場合は、'Displays' 設定で Resolution: Scaled、Larger text を選択します。
- 画面ロックを無効にした iPad でこのページを開くことも検討してください。

**CLI セットアップ**

- macOS では `brew` をすべてのものに使うためにインストールします
- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- [Google Cloud SDK](https://cloud.google.com/sdk/downloads) のインストールが必要です。例:
- Brew Caskroom をインストール
- `brew install caskroom/cask/brew-cask`
- Google Cloud SDK をインストール
- `brew cask install google-cloud-sdk`
- `gcloud components install kubectl` を実行
- `helm` をインストール

  - `brew install kubernetes-helm`

- 各デモの前に `sudo gcloud components update; gcloud auth application-default login` を実行しておくと、デモ中にこれを行う時間を節約できます。

## コンテナスケジューラクラスタのセットアップ

これからすべてをゼロからインストールしていきます。まずは新しいコンテナクラスタを作成します。今回は Google Kubernetes Engine を使います。

- [クラスタを作成](https://console.cloud.google.com/kubernetes/add?project=gitlab-demos)します（または [GKE](https://console.cloud.google.com/kubernetes) を開いて、[`gitlab-demos` プロジェクト](https://console.cloud.google.com/kubernetes/list?project=gitlab-demos)を選択し、[Create cluster](https://console.cloud.google.com/kubernetes/add?project=gitlab-demos) をクリックします）。

このクラスタを `make-sid-dance` と名付け、us-central ゾーンに作成します。パフォーマンスのためにマシンタイプを 2 仮想 CPU に上げ、ノードを 1 つに減らします。実際のクラスタは可用性を高めるために 3 つ以上のノードを持つべきです。

- ドメイン名にちなんでクラスタ名を付けます（例: `make-sid-dance`）。
- `Zone` フィールドが `us-central1-*` で末尾にレターが付くことに注意してください。このレターは重要ではありません。
- マシンタイプの vCPU 数を `2 vCPU` に変更します。
- サイズを `1` に変更します。*注: 必要に応じて、より多くのノードでもデモは問題なく動作します*
- ページ下部の `Create` ボタンをクリックします。
- `Security` セクションの `Advanced options` で `Enable legacy authorization` を選択します

次にデモ用の外部 IP アドレスを取得して、ドメイン名と SSL 用の Let's Encrypt を使えるようにします。

- [VPC Network](https://console.cloud.google.com/networking/addresses/list) に移動します。
- 左のメニューから `External IP addresses` を選択します。
- ページ上部の [`Reserve static address`](https://console.cloud.google.com/networking/addresses/add?project=gitlab-demos) をクリックします。
- 名前をクラスタに使用した名前と同じに設定します（例: `make-sid-dance`）。
- リージョンをクラスタを作成したゾーンと一致するよう `us-central1` に設定します。
- **警告:** 外部 IP は、まだ何にもアタッチされていてはいけません。これは後のステップで自動的に行われます。
- ページ下部の `Reserve` ボタンをクリックします。

次に、デモ用ドメインのワイルドカード DNS エントリを作成し、先ほど作成した IP に向けます。

- 使用した名前を含むエントリの行から `External Address` をリストからコピーします。
- [Network services](https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list?project=gitlab-demos) に移動します
- 左のメニューから `Cloud DNS` をクリックします。
- デモに使用するドメインの名前を持つ Zone をクリックします（例: `make-sid-dance-com`）。
- ページ上部の `Add Record Set` ボタンをクリックします。
- `DNS Name` を `*` に設定します。
- `IPv4 Address` をクリップボードの内容（先ほどコピーした External Address）に設定します。
- ページ下部の `Create` ボタンをクリックします。

クラスタを作成しドメインを設定したので、戻ってクラスタの状態を確認できます。

- [Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) に移動します。
- 緑色のチェックマークを確認します。

クラスタが使用できる準備ができました。接続してみましょう。

- クラスタの `Connect` ボタンをクリックします。
- `gcloud container ...` エントリの右にある `copy` アイコンをクリックします。重なった 2 つの白い四角に見えます。
  - 次のコマンドを実行します:

    ```shell
    gcloud container clusters get-credentials makesiddance-com \
    --zone us-central1-a --project gitlab-demos
    ```

- ターミナルウィンドウに切り替え、このコマンドを貼り付けて実行します。

## GitLab 自体のセットアップ

クラスタを設定したので、GitLab をインストールする準備ができました。これには、ベースドメイン名、先ほど設定した外部 IP アドレス、Let's Encrypt で使用するメールアドレスが必要です。次に `helm` を使って必要なコンポーネントをすべてインストールします。

- `helm init`
- `helm repo add gitlab https://charts.gitlab.io`
- `helm upgrade -i makesiddance --namespace gitlab --set baseDomain=makesiddance.com,baseIP=192.168.1.1,legoEmail=you@gitlab.com,provider=gke gitlab/gitlab-omnibus`（baseDomain、baseIP を上記の External Address に置き換え、legoEmail を適切に変更します。）

**GitLab EE の代替手順**

- [`/free-trial/`](https://about.gitlab.com/free-trial/) に移動して GitLab EE のトライアルライセンスをリクエストします
- メールを待ちます
- ライセンスを `~/.gitlab-license` にダウンロードします
- gitlab および gitlabEELicense オプションを追加して helm chart をインストールします:

```console
export LICENSE= `cat ~/GitLab.gitlab-license`
helm upgrade -i makesiddance --namespace gitlab --set baseDomain=makesiddance.com,externalIP=192.168.1.1,legoEmail=you@gitlab.com,provider=gke,gitlab=ee,gitlabEELicense=$LICENSE gitlab/gitlab-omnibus
```

`gitlab` サービスが立ち上がっているか確認し、立ち上がっていなければ待ちます。

- `kubectl get deployment -w gitlab --namespace gitlab`
- `Available` が 1 を示すまで待ちます。

**オプションのつなぎ**

- `kubectl proxy`
- Kubernetes Dashboard の `http://localhost:8001/ui` にアクセスします
- 左の `Namespace` ドロップダウンを `default` から `All Namespaces` に変更します
- 左の `Workloads` をクリックします。

GitLab が今デプロイされ、Kubernetes ダッシュボードの Workloads ページから状態を見ることができます。すべての項目に緑色のチェックマークが表示され、完了することをここで確認します。GKE がリソースを割り当て、各種コンテナを起動するため、このプロセスには数分かかることがあります。ここでいくつかのコンテナがあるのが見えます。メインの GitLab コンテナには Rails アプリがありますが、チャット用の Mattermost、統合された Docker レジストリ、監視用の Prometheus も含まれています。さらに、Postgres と Redis、CI と CD のための自動スケーリング GitLab Runner 用の別個のコンテナがあります。これは Kubernetes 上の DevOps ライフサイクルに必要なすべてです。

待っている間にお話ししましょう: 次のデモでは、アイデアを本番環境まで運ぶために必要なすべてを紹介します。Mattermost によるチャット、Issue と Issue 追跡、Issue ボードによる計画、ターミナルアクセスによるコーディング、git バージョン管理によるコミット、コードレビューのためのマージリクエスト、継続的インテグレーションによるテスト、ライブレビューアプリによるピアレビュー、ステージングへの継続的デリバリー、チャットからの本番環境への直接デプロイ、計画から監視までの所要時間を計測する Cycle Analytics、そして最後に GitLab インスタンスの Prometheus 監視です。GitLab では、すべてが箱から出してすぐに統合されています。

このデモでは 10 分かかるものが、GitLab を使わずに異なるツールを統合する場合は何日もかかります。GitLab はセットアップが速いだけでなく、すべてが一つのインターフェースにあるためより便利です。開発者は、ツール間の統合を学んで保守するのではなく、優れたプロダクトを作ることに集中したいはずです。

*もし時間があれば、レビューアプリとは何か、Cycle Analytics とは何かを話してください。*

- gitlab pod が緑になるか、deployment が available になるまで待ちます

  デプロイメントが完了したようです。GitLab を見てみましょう...

- 新しいタブで `gitlab.make-sid-dance.com` を開きます（このデモで使用したドメインに合わせて URL を調整します）

ばっちりです、ピカピカの新しい GitLab インストールができました!

### root パスワードを設定する

夢中になりすぎる前に、root アカウントを新しいパスワードで安全にする必要があります。

- root ユーザーのパスワードを設定します（実際に root としてログインする必要はありませんが、できます）

## クリーンアップ {#cleanup}

- クラスタを削除する前に、CLI を使って基盤となるサービス／pod 等をすべて削除します。
- 誤って Web UI でクラスタを削除した場合は、以下を確認してください:

  - 手動で削除する必要のある[永続ディスク](https://console.cloud.google.com/compute/disks?project=gitlab-demos&organizationId=769164969568)を探します。
  - 使用していた[外部 IP](https://console.cloud.google.com/networking/addresses/list?project=gitlab-demos&organizationId=769164969568) を見つけて、それが転送しているロードバランサーの ID を見つけ、その ID を[ロードバランサー](https://console.cloud.google.com/networking/loadbalancing/list?project=gitlab-demos&organizationId=769164969568)のリストで探します。ロードバランサーを削除します。

- [静的 IP](https://console.cloud.google.com/networking/addresses/list?project=gitlab-demos&organizationId=769164969568) を解放します。
- 孤児ディスクをすべて削除します

## トラブルシューティング

### さまざまな失敗が Let's Encrypt をブロックし、その結果 GitLab をブロックする

`kube-lego-nginx` と Let's Encrypt (LE) ACME プロセスに関連する問題により、デプロイメントが失敗するシナリオがいくつかあります。これらのエラーを見つける最も簡単な方法は、Kubernetes クラスタのダッシュボードで `kube-lego` 名前空間の `kube-lego-nginx` サービスのログを確認することです。

1. **Let's Encrypt のトップレベルドメインリクエストレート制限超過**

   ここでの失敗モードはログから最も曖昧ですが、単一の TLD に許可されている証明書または更新リクエストの数を超えたときに発生します。[これに関するドキュメントを参照してください](https://letsencrypt.org/docs/rate-limits/)。

1. **DNS が解決できない**

   DNS レコードが正しく設定されていない場合、ACME リクエストが提出されたときに Let's Encrypt サーバーがあなたのドメインを解決できない可能性があります。Let's Encrypt は、有効で解決可能な完全修飾ドメイン名に依存する到達性テストを実行します。エントリ DNS が機能しており、伝播していることを確認する必要があります。これは、外部ホスト（このレコードが存在する主要 DNS を直接クエリしない場所）を使って `test.my.tld` に ping する（`my.tld` は使用しているドメイン名）ことで確認できます。ワイルドカードレコード（`*.my.tld`）を設定しているはずなので、`test.my.tld` はそのアドレスに解決される必要があります。

1. **ホストが応答しない（到達性）**

   これはロードバランサーが予約済みの静的外部 IP アドレスに正しく接続できないという失敗として観察されています。ここでは複数の失敗方法がありますが、主なケースは:

   - 以前の割り当てによる割り当て不能。

     既存の使用、または以前のデプロイメントを完全に削除できなかった場合です。GitLab の担当者は両方のシナリオでこれを見たことがあります。以前のデプロイメントを再作成する場合、短い期間待つか、以前に使用していた GCP Networking ロードバランサーが削除されたことを確認する必要があります。GCP がデプロビジョニングに追いつくのを待ちたくない場合は、これらを手動で削除できます。

   - リージョンが不正なための割り当て不能。

     使用しようとしている静的 IP アドレスと同じでないリージョンに誤って GKE Kubernetes クラスタを作成した場合、デプロイメントはその IP アドレスにアタッチに失敗し、結果としてリクエストをリッスンして応答できなくなります。

### 一般的なメモ

#### kubectl からクラスタへの接続を作成する

- [Container Engine](https://console.cloud.google.com/kubernetes/list) に移動します。
- クラスタの `Connect` ボタンをクリックします。
- `gcloud container ...` エントリの右にある `copy` アイコンをクリックします。重なった 2 つの白い四角に見えます。
  - 次のコマンドを実行します:

    ```shell
    gcloud container clusters get-credentials makesiddance-com \
    --zone us-central1-a --project gitlab-demos
    ```

- ターミナルウィンドウに切り替え、このコマンドを貼り付けて実行します。
- `kubectl proxy` を実行します

#### ログ

- 各 pod のログは Kubernetes Dashboard で見つけることができます

  - ログを見たい `Namespace` を選択します
  - `Pods` に移動します
  - ログを見たい `Pod` を選択します
  - `View logs` をクリックします

- CLI から `kubectl` を使ってログを確認することもできます

 ```console
  kubectl get namespaces
  kubectl get pods --namespace=<NAMESPACE>
  kubectl logs <POD--namespace=<NAMESPACE>
 ```
