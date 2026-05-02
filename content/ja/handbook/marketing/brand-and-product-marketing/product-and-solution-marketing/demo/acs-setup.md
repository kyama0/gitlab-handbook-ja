---
title: "Azure Container Service への GitLab CE または EE のセットアップ"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/acs-setup/
upstream_sha: c26b483f365d397f86ef45e60a892d0783588ac1
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## 動画

以下の動画は、GitLab EE を Azure Container Service にインストールする方法を示しています。
DevOps ライフサイクルについては [営業デモ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/) を参照してください。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/MoLKFQxRaGE" frameborder="0" allowfullscreen="true"> </iframe>
 </iframe>
</figure>

## 準備

> - Azure アカウントが必要です。無料トライアルアカウントで十分です。ログインしていることを確認してください。
> - [Azure Portal](https://portal.azure.com) にログインします。
> - このスクリプトは `tanuki.website` ドメインを前提としていますが、以下のいずれかを行ってください:
>   - [Google Doc](https://docs.google.com/spreadsheets/d/1HZ-7XhDNzdCBxfjzDFIQi7EjliptkpY4CB3LbiLa9MY/edit#gid=0) から最も使用していないドメインを選ぶ。（Let's Encrypt は SSL 証明書の作成を週次で制限しているため、利用をローテーションすると制限に達するのを減らせます）、または
>   - 自分のデモ用に新しいドメインを購入し、スクリプト全体で置き換える。
>     - [DNS Zone を作成](https://console.cloud.google.com/networking/dns/zones/~new?project=gitlab-demos) して Google に DNS を管理してもらいます。
>     - `Registrar Setup` をクリックして使用するネームサーバーを確認します。
> - デスクトップ通知を無効にする（Mac の場合、右上隅で option クリック）。
> - 観客が他のタブを見ないように、新しいブラウザウィンドウを開く。
> - 観客がメモや他のウィンドウに気を取られないように、Web ブラウザのウィンドウだけを共有する。
> - [オプション] 「ディスプレイ」設定で、解像度: スケーリング、より大きなテキストに設定。
> - [オプション] 画面ロックを無効にした iPad でこのページを開く。
>
> **CLI セットアップ**
>
> - macOS では、すべてのために `brew` をインストール
>   - `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
> - [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) をインストール。例:
>   - `curl -L https://aka.ms/InstallAzureCli | bash`
>   - `sudo az acs kubernetes install-cli`
> - `helm` をインストール
>   - `brew install kubernetes-helm`
> - `az login`

## コンテナスケジューラクラスターをセットアップ

すべてをゼロからインストールしますので、まず新しいコンテナクラスターを作成するところから始めます。今日は Azure Container Service を使用します。これは Microsoft によってホストされる Kubernetes プラットフォームです。CLI を使用しますが、すでにログイン済みなので、最初にクラスターを格納するグループを作成します。
northcentralus ゾーンに作成します。次にクラスターを作成し、使用するドメイン名にちなんで `tanukiWebsite` と名付けます。無料トライアルアカウントに収まるよう 1 ノードのみ使いますが、必要に応じて agent-count を増やせます。

> - `az group create -n GitLabDemos -l northcentralus`（適切なグループ名に変更してください）
> - `az acs create -n tanukiWebsite -d tanuki -g GitLabDemos --generate-ssh-keys --orchestrator-type kubernetes --agent-count=1 --agent-vm-size Standard_DS2_v2`（クラスター名はベースドメイン名を反映するように変更してください）

クラスターを作成したので、戻ってクラスターを確認できます。

> - [Container services](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.ContainerService%2FcontainerServices) に移動します。
> - 起動していることを確認します。

クラスターが使用できる状態になりました。接続しましょう。

> - `az acs kubernetes get-credentials --name tanukiWebsite -g GitLabDemos`
> - `az acs kubernetes browse --name tanukiWebsite -g GitLabDemos`

## GitLab 自体をセットアップ

クラスターが構成されたので、GitLab をインストールする準備ができました。これを行うには、ベースドメイン名と、Let's Encrypt で使用するメールアドレスが必要です。次に `helm` を使ってすべての必要なコンポーネントをインストールします。

> - `helm init`
> - `helm repo add gitlab https://charts.gitlab.io`
> - `helm upgrade -i tanuki --namespace gitlab --set baseDomain=tanuki.website,legoEmail=you@gitlab.com,provider=acs,redisDedicatedStorage=false,postgresDedicatedStorage=false gitlab/gitlab-omnibus`（baseDomain と legoEmail を適切に置き換えてください。）
> - *注: 非トライアルアカウントを使用している場合、`redisDedicatedStorage=false,postgresDedicatedStorage=false` を外し、データベースディスクを分離することを推奨します。*
>
> **GitLab EE の代替手順**
>
> - [/free-trial/](https://about.gitlab.com/free-trial/) に移動して情報を入力し、GitLab EE のトライアルライセンスをリクエスト
> - メールを待つ
> - ライセンスを `~/.gitlab-license` にダウンロード
> - gitlab および gitlabEELicense オプションを追加して helm chart をインストール:

```console
export LICENSE= `cat ~/GitLab.gitlab-license`
helm upgrade -i tanuki --namespace gitlab --set baseDomain=tanuki.website,legoEmail=you@gitlab.com,provider=acs,redisDedicatedStorage=false,postgresDedicatedStorage=false,gitlab=ee,gitlabEELicense=$LICENSE gitlab/gitlab-omnibus
```

GitLab はデプロイ中で、しばらく時間がかかります。最初に行うのは、ロードバランサーが起動するまで待つことです。そうすれば割り当てられた IP アドレスを取得し、それを使って DNS を構成できます。

> - `kubectl get svc -w --namespace nginx-ingress nginx`
> - 出力に `EXTERNAL-IP` が表示されるまで待ちます
> - その IP を指すワイルドカードを DNS で構成します。次のような感じ:
>   - `*.tanuki.website 300 IN A 1.1.1.1`（変更が頻繁なため、このレコードのライフスパンは短くしておきたいです。さもないと変更のたびに 1 日待つことになります。）
> Microsoft Azure DNS zones を使用する場合:
> - 左側のメニューから [`DNS zones`](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Network%2FdnsZones) をクリックします。
> - デモに使用するドメイン名（例: `tanuki.website`）を持つゾーンをクリックするか、[`+ Add`](https://portal.azure.com/#create/Microsoft.DnsZone-ARM) をクリックして名前とリソースグループを設定します。
> - `+ Record Set` ボタンをクリックします。
> - `Name` を `*` に設定します。
> - `IP Address` を nginx サービスの External-IP に設定します。
> - `TTL` を `5`、`TTL unit` を `Minutes` に設定します。
> - ページの下部にある `OK` ボタンをクリックします。

`gitlab` サービスが起動しているか確認し、起動していなければ待ちます。

> - `kubectl get deployment -w gitlab --namespace gitlab`
> - `Available` が 1 になるまで待ちます。

**オプションのフィラー**

Kubernetes ダッシュボードを見ながら、すべての項目に緑のチェックマークが付いていることを確認します。このプロセスは、ACS がリソースを割り当て、様々なコンテナを起動するため、数分かかることがあります。ご覧の通り、複数のコンテナがあります。メインの GitLab コンテナには Rails アプリだけでなく、チャット用の Mattermost、統合された Docker レジストリ、モニタリング用の Prometheus も含まれています。さらに Postgres、Redis、CI と CD 用のオートスケーリング GitLab Runner 用の別のコンテナがあります。これは Kubernetes 上のアプリケーション開発ライフサイクルに必要なすべてです。

待っている間に: 残りのデモでは、Mattermost によるチャット、Issue と Issue 追跡、Issue ボードによる計画、ターミナルアクセスによるコーディング、git バージョン管理によるコミット、コードレビュー用のマージリクエスト、継続的インテグレーションによるテスト、ライブレビューアプリによるピアレビュー、ステージングへの継続的デリバリー、チャットから直接本番環境へのデプロイ、計画からモニタリングまでの速度を測定するサイクル分析、最後に GitLab インスタンスの Prometheus モニタリングなど、アイデアを本番環境に持っていくために必要なすべてをご紹介します。GitLab では、すべてが標準で統合されています。

このデモで 10 分かかることは、GitLab を使わず異なるツールを統合する必要があれば数日かかります。GitLab はセットアップが速いだけでなく、すべてが 1 つのインターフェースにあるため便利です。開発者は、ツール間の統合を学び、維持することではなく、優れたプロダクトを作ることに集中したいのです。

*時間があれば、レビューアプリとは何か、サイクル分析とは何かについて話します。*

> - gitlab pod が緑になるか、デプロイが Available になるまで待ちます

デプロイが完了したようです。GitLab を確認しましょう...

> - `gitlab.tanuki.website` に移動します（このデモで使用したドメインに合わせて URL を調整してください）

おお、ピカピカの新しい GitLab インストールができました！

### root パスワードの設定

調子に乗りすぎる前に、root アカウントを新しいパスワードで保護する必要があります。

> - root ユーザーのパスワードを設定します（実際に root としてログインする必要はありませんが、できます）

## クリーンアップ

> - クラスターを削除します

## トラブルシューティング

### 様々な失敗が Let's Encrypt をブロックし、結果として GitLab をブロックする

`kube-lego-nginx` と Let's Encrypt（LE）の ACME プロセスに関する問題により、デプロイが失敗するシナリオがいくつかあります。これらのエラーを見つける最も簡単な方法は、Kubernetes クラスターのダッシュボードの `kube-lego` 名前空間にある `kube-lego-nginx` サービスのログを確認することです。

1. **Let's Encrypt のトップレベルドメインのリクエストレート上限超過**

     ここでの失敗モードはログから最も曖昧ですが、単一の TLD で許可されている証明書または更新リクエストの数を超えた場合に発生します。[こちらのドキュメントを参照してください](https://letsencrypt.org/docs/rate-limits/)。

1. **解決できない DNS**

     DNS レコードが正しく構成されていない場合、Let's Encrypt サーバーは ACME リクエストが提出された時点でドメインを解決できない可能性があります。Let's Encrypt は、有効で解決可能な完全修飾ドメイン名に依存する到達可能性テストを行います。エントリ DNS が機能し、伝播されていることを確認する必要があります。これを行うには、外部ホスト（このレコードが存在するプライマリ DNS を直接クエリしない場所）を使用して `test.my.tld` に ping します。ここで `my.tld` は使用しているドメイン名です。ワイルドカードレコード（`*.my.tld`）を構成しているはずなので、`test.my.tld` はそのアドレスに解決されるはずです。

1. **ホストが応答しない（到達可能性）**

    これは、ロードバランサーが予約された静的外部 IP アドレスに正しく接続されない失敗として観察されています。ここではいくつかの失敗方法がありますが、主なケースは以下です:
    - 以前の割り当てによって割り当てができない。

        既存の使用、または以前のデプロイの完全な削除の失敗のいずれかです。これは GitLab 担当者によって両方のシナリオで観察されています。以前のデプロイを再作成している場合、短期間待つか、もしくは以前に使用された GCP Networking LoadBalancer が削除されたことを確認する必要があります。GCP がデプロビジョニングに追いつくのを待ちたくない場合は、これらを手動で削除できます。
    - 不正なリージョンによって割り当てができない。

        使用しようとしている静的 IP アドレスとは異なるリージョンに誤って GKE Kubernetes クラスターを作成した場合、デプロイはその IP アドレスにアタッチできず、リクエストをリッスンして応答できなくなります。

### 一般的な注意事項

#### ログ

- 各 pod のログは Kubernetes ダッシュボードで確認できます
  - 表示したい `Namespace` を選択
  - `Pods` に移動
  - 表示したい `Pod` を選択
  - `View logs` をクリック

- CLI から `kubectl` を使用してログを確認することもできます

 ```console
  kubectl get namespaces
  kubectl get pods --namespace=<NAMESPACE>
  kubectl logs <POD> --namespace=<NAMESPACE>
 ```
