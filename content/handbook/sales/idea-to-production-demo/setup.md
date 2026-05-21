---
title: "アイデアから本番環境までのデモ用に独自のテストOpenShift Originインスタンスをセットアップする"
upstream_path: /handbook/sales/idea-to-production-demo/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-11T23:51:39+00:00"
---

## 概要

このドキュメントは、Idea to Production [デモ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/)を披露するための OpenShift Origin テストボックスをセットアップする簡単な方法を概説するものです。

## ハードウェアおよび OS 要件

このセットアップは Linux または Mac ホスト上で動作することを意図しています。Windows は現時点ではサポートされていません。

デモをスムーズに実行するには、デモ用に少なくとも 10Gb の RAM と、少なくとも 4 CPU コアが利用可能である必要があります。

サポートされるオペレーティングシステムまたは十分なマシンリソースをお持ちでない場合は、クラウドに Linux マシンをプロビジョニングしてセットアップを実行できます。

テスト済み:

- [Digital Ocean](https://www.digitalocean.com/): `16 GB RAM / 8 CPUs`
- [Amazon EC2](https://aws.amazon.com/ec2/): `t2.xlarge`

 TCP トラフィックのために、ポート `8443` と `80` が公開されている必要があります。

## ソフトウェア要件

デモを実行するには、Docker、OC Client Tools、そして弊社のセットアップスクリプトをインストールする必要があります。

### Docker をインストール

OpenShift マシンにまだ Docker をインストールしていない場合はインストールが必要です。

Docker をインストールする最善の方法は、Docker 公式の [インストール手順](https://docs.docker.com/engine/install/)にアクセスし、OpenShift マシンのオペレーティングシステム用のインストール手順に従うことです。

インストール手順では、Docker の Hello World アプリの実行手順をガイドしてくれるはずです。また、このセットアップに必要な sudo を使用せずに Docker を実行する追加手順もあります。実行したことの要点は以下のとおりです:

- Docker の前提条件をインストール
- Docker をインストール
- Docker を開始
- ユーザーが sudo なしで docker コマンドを実行できるように有効化
- 新しいユーザー権限を取得するために再起動または新しいターミナルを起動
- 以下を `sudo` なしで実行できる

  ```console
  docker run hello-world
  ```

Docker がインストールされて実行されたら、安全でないローカルレジストリのサポートを構成する必要があります:

#### Linux での安全でないローカルレジストリ

Docker デーモンを `172.30.0.0/16` の安全でないレジストリパラメータで構成します

- RHEL と Fedora では、`/etc/sysconfig/docker` ファイルを編集し、安全でないレジストリ行を追加またはコメント解除します:

  ```console
  sudo vi /etc/sysconfig/docker
  ```

  ```console
  INSECURE_REGISTRY='--insecure-registry 172.30.0.0/16'
  ```

- 設定を編集した後、Docker デーモンを再起動します。

  ```console
  sudo systemctl restart docker
  ```

- Ubuntu では `/lib/systemd/system/docker.service` を編集し、`ExecStart` 行を編集します:

  ```console
  sudo vi /lib/systemd/system/docker.service
  ```

  ```console
  ExecStart=/usr/bin/dockerd --insecure-registry 172.30.0.0/16 -H fd://
  ```

- 設定を編集した後、Docker デーモンを再起動します。

  ```console
  sudo systemctl daemon-reload
  sudo systemctl restart docker
  ```

これらの手順のトラブルシューティングについては、[OpenShift cluster up docs](https://docs.openshift.com/container-platform/4.16/installing/installing_platform_agnostic/installing-platform-agnostic.html)を参照してください

#### Mac での安全でないローカルレジストリ

Docker が実行されたら、`172.30.0.0/16` の安全でないレジストリを追加します:

- ツールバーの Docker メニューから、Preferences...を選択
- preferences ダイアログで Advanced をクリック
- Insecure registries:の下で、+アイコンをクリックして新しいエントリを追加
- `172.30.0.0/16` を入力してリターンを押す
- Apply and Restart をクリック

これらの手順のトラブルシューティングについては、[OpenShift cluster up docs](https://docs.openshift.com/container-platform/4.16/installing/installing_platform_agnostic/installing-platform-agnostic.html)を参照してください

Mac では、Docker に十分な CPU と RAM リソースへのアクセスを有効にしていることも確認する必要があります。
これは Preferences ウィンドウから行うことができ、少なくとも 4 CPU と 10GB の RAM が必要です。

### OC Client Tools をインストール

OC クライアントツールは OpenShift Origin とともにリリースされ、Origin の[GitHub Releases Page](https://github.com/openshift/origin/releases)にあります

OpenShift Origin の最新の安定リリースを使用してデモを実行します。現在は *1.3.2* です

ツールをインストールするには、OpenShift ホストマシンのターミナルから以下を実行します:

1. 新しいディレクトリで、ツールをダウンロードして展開します:

   - Linux:

     ```console
     curl -L  https://github.com/openshift/origin/releases/download/v1.3.2/openshift-origin-client-tools-v1.3.2-ac1d579-linux-64bit.tar.gz | tar -xz
     ```

   - Mac:

     ```console
     curl -L -O https://github.com/openshift/origin/releases/download/v1.3.2/openshift-origin-client-tools-v1.3.2-ac1d579-mac.zip
     unzip openshift-origin-client-tools*
     ```

1. ツールをパスに配置します:
   - Linux:

     ```console
     sudo cp openshift-origin-client-tools-*/oc /usr/local/bin/.
     ```

   - Mac:

     ```console
     cd openshift-origin-client-tools-*
     sudo chflags nohidden /private
     sudo echo pwd >> /private/etc/paths.d/origin-paths
     export PATH=$(pwd):$PATH
     ```

1. ツールがパスにあることをテストします:

   ```console
   oc version
   ```

   バージョン出力が返されるはずです:

   ```console
   oc v1.3.2
   kubernetes v1.3.0+52492b4
   features: Basic-Auth GSSAPI Kerberos SPNEGO
   ```

### セットアップスクリプトをダウンロードしてインストール

このスクリプトは cluster up スクリプトを実行することによって、Docker を使用して OpenShift Origin を起動します。これを使用してストレージをプロビジョニングし、デモを実行できるようにクラスター上のユーザー権限を更新します。

セットアップスクリプトを実行せず、すでに OpenShift クラスターセットアップを持っている場合、スクリプトが何をするかを[以下](#gitlab-plugin-install-source)で概説しているので、クラスターに同様の変更を加えることができます。

1. セットアップスクリプトを取得し、ターミナルから新しいディレクトリで:
   - Linux:

     ```console
     curl -L https://gitlab.com/gitlab-org/omnibus-gitlab/repository/archive.tar.gz?ref=i2ptest | tar -zx
     ```

   - Mac:

     ```console
     curl -L -O https://gitlab.com/gitlab-org/omnibus-gitlab/repository/archive.zip?ref=i2ptest
     unzip archive.zip*
     ```

1. スクリプトをパスに配置します:

   - Linux:

     ```console
     cd omnibus-gitlab-*
     echo "export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:\$PATH" >> ~/.bashrc
     export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:$PATH
     ```

   - Mac:

     ```console
     cd omnibus-gitlab-*
     sudo echo $(pwd)/docker/openshift/oc-cluster-wrapper >> /private/etc/paths.d/origin-paths
     export PATH=$(pwd)/docker/openshift/oc-cluster-wrapper:$PATH
     ```

1. スクリプトがパスにあることをテストします:

   ```console
   oc-cluster help
   ```

   これは有効なコマンドのリストを返すはずです。

   ```console
   oc-cluster up [profile] [OPTIONS]
   oc-cluster down
   oc-cluster destroy [profile]
   oc-cluster list
   oc-cluster status
   oc-cluster ssh
   oc-cluster console
   oc-cluster completion bash
   oc-cluster plugin-install <plugin>
   oc-cluster plugin-uninstall <plugin>
   oc-cluster plugin-list
   oc-cluster create-volume volumeName [size|10Gi] [path|/root/.oc/profiles/<profile>/volumes/<volumeName>]
   oc-cluster create-shared-volume project/volumeName [size|10Gi] [path|/root/.oc/volumes/<volumeName>]
   ```

## クラスターのセットアップと実行

1. クラスターへのアクセスに使用できるパブリックホスト名とパブリック IP を見つけます。そしてそれらをターミナルにエクスポートします。
   パブリック DNS エントリがない場合、`<your public ip>.xip.io` を使用できます
   - AWS ではホスト名に DNS を使用し、ワイルドカード DNS をセットアップしていない限り、サフィックスに `apps.<your public ip>.xip.io` を使用する必要があります
   - Digital Ocean を使用している場合、ホスト名は `<your public ip>.xip.io` で、サフィックスは `apps.<your public ip>.xip.io` で動作します
   - 自分のボックスでローカルに実行している場合、提供された例で動作するはずです。

   ```console
   export OC_CLUSTER_PUBLIC_HOSTNAME=127.0.0.1.xip.io
   export OC_CLUSTER_ROUTING_SUFFIX=apps.127.0.0.1.xip.io
   ```

1. クラスターを起動します:

   ```console
   oc-cluster up
   ```

1. 完了したら、Web コンソールへのリンクが表示されるはずです。クラウドインスタンスで作業している場合、このリンクは間違っており、内部 IP アドレスを示している可能性があります。

   コンソールにアクセスするには、ブラウザタブで `https://<your public hostname>:8443` を開きます。
無効な証明書を受け入れる必要があります。

   その後、ユーザー名: `developer` パスワード: `developer` で OpenShift にログインします

1. ターミナルで、gitlab プラグインをインストールします:

   ```console
   oc-cluster plugin-install gitlab
   ```

   plugin-install 中に何が起こるかは[以下](#gitlab-plugin-install-source)で読むことができます。

これにより OpenShift デモに使用できるテンプレートへのリンクが出力されます。また、デモに入力する必要のある 2 つのホスト名も出力します。

## デモを開始

前のステップの出力により、テンプレートへのリンクが提供されたはずです。

残りのデモプロセスは、ほとんどの場合、[Demo スクリプト](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/)から従うことができますが、セットアップスクリプトから提供されたテンプレートリンクを使用したいでしょう。

これは: `https://gitlab.com/gitlab-org/omnibus-gitlab/raw/i2ptest/docker/openshift/idea-2-prod-template.json` です

そしてテンプレートのパラメータを入力する間、2 つのカスタムホスト名を提供する必要があります。

GitLab ホスト名: `gitlab.<your routing suffix>`

Mattermost ホスト名: `mattermost.<your routing suffix>`

注意してください。デモスクリプトの他の場所で `tanukionline.com` を参照する箇所はあなたの DNS 名で置き換えられます。

### デモを複数回実行する

ストレージが限られているため、デモを実行したいたびに、gitlab-plugin をアンインストールして再インストールする必要があります。これには、正しい値がパスにあることを確認する必要があります:

```console
export OC_CLUSTER_PUBLIC_HOSTNAME=127.0.0.1.xip.io
export OC_CLUSTER_ROUTING_SUFFIX=apps.127.0.0.1.xip.io
```

ここで、値はセットアップ中に使用したものと一致します。

そして以下を実行します

```console
oc-cluster plugin-uninstall gitlab
oc-cluster plugin-install gitlab
```

### サーバーが再起動された後に OpenShift を再起動

再度、環境変数を設定する必要があります:

```console
export OC_CLUSTER_PUBLIC_HOSTNAME=127.0.0.1.xip.io
export OC_CLUSTER_ROUTING_SUFFIX=apps.127.0.0.1.xip.io
```

ここで、値はセットアップ中に使用したものと一致します

そしてインスタンスを起動します:

```console
oc-cluster up
```

## GitLab プラグインインストールソース

ストレージと権限をプロビジョニングするためにインストールする GitLab プラグインは次のようになります:

```console
## Prefetch the Docker images so the demo is faster
oc import-image gitlab-ce:8.13.0 --from=docker.io/ayufan/gitlab-i2p:latest --confirm
oc import-image gitlab-ce-redis:3.2.3 --from=docker.io/redis:3.2.3-alpine --confirm
oc import-image gitlab-ce-postgresql:9.4 --from=docker.io/centos/postgresql-94-centos7:latest --confirm
oc import-image gitlab-ce-runner:1.7.0 --from=docker.io/gitlab/gitlab-runner:alpine-v1.7.0-rc.2 --confirm

## Allow all logged in users to use the anyuid security context
oc adm policy add-scc-to-group anyuid system:authenticated --as=system:admin

## Create 6 persistent volumes for storage
create-volume pv-gitlab-01
create-volume pv-gitlab-02
create-volume pv-gitlab-03
create-volume pv-gitlab-04
create-volume pv-gitlab-05
create-volume pv-gitlab-06
```

使用される create volume コマンドは次のようになります:

```console
function create-volume {
  [ $# -lt 1 ] && echo "volumename is required" && exit 1
  local __profile=$(cat $OPENSHIFT_HOME_DIR/active_profile)
  local __volume=$1
  local __size=${2:-"10Gi"}
  local __path=${3:-$OPENSHIFT_HOME_DIR/profiles/${__profile}/volumes/${__volume}}

  [[ ! $__size =~ ^[[:digit:]]+[GM]i$ ]] && echo "Not a valid volume size, use <number>Gi or <number>Mi" && exit 1

  oc get persistentvolume ${__volume} --as=system:admin &>/dev/null && echo "The PersistentVolume already exits" && exit 1

  # Gives 777 permission to the folder, otherwise non-root cannot write on it
  mkdir -m 777 -p $__path

cat <<-EOF > /tmp/pv.yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ${__volume}
spec:
  capacity:
    storage: ${__size}
  accessModes:
    - ReadWriteOnce
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Recycle
  hostPath:
    path: ${__path}
EOF

oc create -f /tmp/pv.yaml --as=system:admin
rm /tmp/pv.yaml

echo "Volume created in ${__path}"
}
```

これが何を行っているかの内訳は次のとおりです:

1. コンテナイメージを OpenShift レジストリにプリフェッチ
1. ログイン中のすべてのユーザーが root として実行されるコンテナを作成できるようにする
   - これはデモ専用に広く行われています。後でプロジェクトを作成できるようにするためです。実際のセットアップでは、最初にプロジェクトを作成し、次に gitlab-ce コンテナ用のサービスアカウントを作成し、それにのみ root を付与します。
1. デモに必要な 6 つの永続ボリュームを作成
   - これらの特定のものは、シングルノードクラスターデモ用に hostPath マウントされるように設定されています
   - 削除されたときにディレクトリを削除するために Recycle リクレイムポリシーを使用します
