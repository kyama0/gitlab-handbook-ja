---
title: インスタンスへのパッチ適用
category: Self-managed
description: GitLab（Rails アプリケーション）に手動でパッチを適用する方法
upstream_path: /handbook/support/workflows/patching_an_instance/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
---

{{% alert title="Note" color="primary" %}}
このパッチ適用プロセスは Ruby のソースファイル（例: Rails コントローラー、モデル、サービス、ワーカー）に対してのみ機能します。フロントエンドアセットはパッケージ／イメージビルド時にプリコンパイルされ、ソースファイルはインストール先から削除されるため、JavaScript や CSS の変更には **適用できません**。
{{% /alert %}}

## Omnibus インストールへのパッチ適用 {#patching-an-omnibus-install}

時には、お客様にシステムを手動でパッチ適用してもらう必要があります。これは次のような理由で発生します:

1. お客様が最新バージョンへアップグレードできないが、そのバージョンに含まれる修正が必要な場合。
1. 修正がマージされているが、まだリリースに含まれていない場合。
1. 問題に対する修正がまだ開発中だが、それでお客様の問題が解決されるかを検証したい場合。

シングルサーバーの Omnibus インストールでは、これは比較的簡単です。以下の `$mr_iid` をマージリクエストの IID に置き換えるか、URL を生のスニペットを指すように変更してください。

```shell
#Ensure that the "patch" package is installed
#Use the package manager specific to your Linux OS
#For Ubuntu, for example, sudo apt install patch

curl -o /tmp/$mr_iid.patch https://gitlab.com/gitlab-org/gitlab/-/merge_requests/$mr_iid.patch
cd /opt/gitlab/embedded/service/gitlab-rails
patch -p2 -b -f < /tmp/$mr_iid.patch
gitlab-ctl restart
```

パッチを取り消すには、`patch` プログラムが生成する `.orig` ファイルを使用します。

パッチには複数のファイルへの変更が含まれることがあります。ファイルが正しくパッチ適用されたかを確認したい場合は、ファイルを多くのパッケージマネージャーに含まれるチェックサムと比較できます。

例えば、dpkg を使用する Debian/Ubuntu では、パッチに含まれる各ファイルのチェックサムを `/var/lib/dpkg/info/gitlab-ee.md5sums` のリストと比較できます。テキストエディタでパッチファイルを表示すると、影響を受けるファイルを確認できます。

```shell
grep "opt/gitlab/embedded/service/gitlab-rails/<path_to_file>" /var/lib/dpkg/info/gitlab-ee.md5sums  # The path does not have a leading /
md5sum /opt/gitlab/embedded/service/gitlab-rails/<path_to_file>
```

パッチが正しく適用されていれば、チェックサムは一致しません。

**注意**:

- このプロセスは Rails アプリケーション（[GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab)）にのみ適用されます。他のコンポーネントには追加のステップが必要になる場合があります。
- GitLab がアップグレードされた場合、パッチの再適用が必要です。
- パッチオプション `-p` の値は、正しいストリップサイズに設定する必要があります。

## Docker インストールへのパッチ適用

GitLab の Docker イメージは、コンテナ内に Omnibus がインストールされた Ubuntu ベースのイメージを使用して GitLab を実行します。**[Omnibus インストールへのパッチ適用](#patching-an-omnibus-install)** と同じ手順に従えます。Ubuntu リポジトリから patch バイナリを必ずインストールしてください:

```shell
docker exec -it <gitlab-container> bash
apt update && apt install patch -y
curl -o /tmp/$mr_iid.patch https://gitlab.com/gitlab-org/gitlab/-/merge_requests/$mr_iid.patch
cd /opt/gitlab/embedded/service/gitlab-rails
patch -p1 -b -f < /tmp/$mr_iid.patch
gitlab-ctl restart
```

**注意**:

- コンテナを削除して再作成すると、パッチは元に戻ります。
- パッチオプション `-p` の値は、正しいストリップサイズに設定する必要があります。

## Kubernetes インストールへのパッチ適用

Kubernetes インストールへのパッチ適用には、次のステップが含まれます:

1. パッチを適用したいイメージを特定する。

    ```shell
    # Identify the image used for gitlab-webservice
    kubectl -n <gitlab-namespace> get deployment <webservice-deployment> -o yaml | grep image:
            image: registry.gitlab.com/gitlab-org/build/cng/gitlab-webservice-ee:v15.5.1
            image: registry.gitlab.com/gitlab-org/build/cng/gitlab-workhorse-ee:v15.5.1
            ...
    ```

    コマンドの出力にはイメージの一覧が表示され、その中の 1 つにパッチを適用する必要があります。この例では、`registry.gitlab.com/gitlab-org/build/cng/gitlab-webservice-ee:v15.5.1` にパッチを適用する必要があります。

1. パッチ用のイメージをビルドするために `Dockerfile` を作成する

    ```txt
    FROM registry.gitlab.com/gitlab-org/build/cng/gitlab-webservice-ee:v15.5.1

    ARG MR_IID

    USER root

    RUN apt-get update -y && apt-get install -y patch patchutils

    USER git

    RUN curl -o /tmp/$MR_IID.patch https://gitlab.com/gitlab-org/gitlab/-/merge_requests/$MR_IID.patch
    RUN bash -c "cd /srv/gitlab; filterdiff -x '*/spec/*' /tmp/$MR_IID.patch > /tmp/filtered.patch; patch -p1 < /tmp/filtered.patch"
    ```

    `registry.gitlab.com/gitlab-org/build/cng/gitlab-webservice-ee:v15.5.1` をステップ 1 で特定したイメージに置き換えてください。

1. `docker build` と `docker push` でイメージをビルドしてプッシュする:

    ```shell
    # Replace <merge_request_id> with the ID of the merge request containing the patch.
    docker build --build-arg MR_IID=<merge_request_id> -t path/to/remote/registry/gitlab-webservice-ee:v15.5.1 .
    docker push path/to/remote/registry/gitlab-webservice-ee:v15.5.1
    ```

1. パッチ適用済みイメージを使用するようにデプロイメントを更新する:

    ```shell
    # Replace every instance of registry.gitlab.com/gitlab-org/build/cng/gitlab-webservice-ee:v15.5.1
    # with the new image
    kubectl -n <gitlab-namespace> edit deployment <webservice-deployment>
    ```

パッチを取り消すには、デプロイメントを編集して元のイメージを使用するようにします。

**注意**:

- このプロセスは Rails アプリケーション（[GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab)）にのみ適用されます。パッチを適用したい GitLab コンポーネントによっては、別のイメージにパッチを適用する必要があります。
- これは [`toolbox` Pod での Rails コードへのパッチ適用](https://docs.gitlab.com/charts/troubleshooting/kubernetes_cheat_sheet.html#patching-the-rails-code-in-the-toolbox-pod) とは異なります。`toolbox` Pod の Rails コードに直接パッチを適用しても、ユーザーへのリクエストを処理している Rails コードにはパッチが適用されません。
- Helm チャートを新しい GitLab バージョンにアップグレードした場合、パッチを含む新しいイメージを作成する必要があります。
