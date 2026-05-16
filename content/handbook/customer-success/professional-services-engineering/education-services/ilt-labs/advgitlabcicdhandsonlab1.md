---
title: "GitLab Advanced CI/CD - ハンズオンラボ: GitLab Runners ディープダイブ"
description: "このハンズオンガイドでは、Docker ランナーの作成と管理について説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-25T17:26:37+00:00"
---

ランナースケーラーは、オンデマンドでランナーマシンを起動するために一貫したランナーイメージに依存しています。このイメージを作成する最初のステップは、基盤となるランナーの仕組みを理解することです。このラボでは、Docker ベースのランナーを作成する方法を学びます。このランナーは、Docker オートスケーラーの基礎として使用できます。

> 完了までの推定時間: 15 分

## タスク A. 新しいプロジェクトを作成する

まず、ラボ環境で新しいプロジェクトを作成します:

1. **Create a project** を選択します。

1. **Create blank project** を選択します。

1. プロジェクト名として **CICD Runner** と入力します。

1. その他のオプションはすべてデフォルトのまま、**Create project** を選択します。

## タスク B. プロジェクトにランナーを追加する

1. 新しく作成したプロジェクトのページが表示されていることを確認します。

1. 左サイドバーで、**Settings > CI/CD** を選択します。

1. **Runners** の横の矢印をクリックして、Runners セクションを展開します。

1. **Create project runner** を選択します。

1. タグボックス内に `node` をタグとして追加し、**Run untagged jobs** のチェックが外れていることを確認したうえで、その他の設定はすべてデフォルトのままにして **Create runner** を選択します。

1. オペレーティングシステムとして Linux が選択されていることを確認します。

1. **Step 1** というタイトルのセクションで、次のようなコマンドを確認します:

      ```shell
      gitlab-runner register
          --url https://ilt.gitlabtraining.cloud
          --token glrt-bzoxCnA6aDlvCnQ6Mwp1OmFtdCQKGl9glOywWMYcfTG74GwQ.1c1rc1xe9
      ```

1. `--token` に続く値をメモしておきます。このトークンは後でランナーの登録に必要になります。

1. 最後に、**View Runners** を選択します。ページを保存せずに離れようとしている旨の警告メッセージが表示される場合がありますが、トークンをメモしてある限り問題ありません。

## タスク C. ランナーをデプロイする

ランナーの関連付けとランナー設定のデプロイは GitLab を通じて管理します。この方法を使用すると、ランナーの設定をソースコントロールで管理でき、変更の追跡に最適です。

この構造について見てみましょう:

1. まず、トークンをプロジェクトレベルの変数としてプロジェクトに安全に追加します。**Settings > CI/CD** に移動して、**Variables** セクションを展開します。

1. **Add variable** を選択します。右側のパネルで、**Key** フィールドに GITLAB_RUNNER_TOKEN と入力し、**Value** フィールドにランナートークンを貼り付けます。

1. 変数の **Visibility** を **Visible** に設定します。これにより、`config.toml` ファイルに書き込まれる値が、マスクされた変数で出力される **[MASKED]** にならないようにします。

1. **Add variable** をクリックします。

1. プロジェクトリポジトリに移動します。

1. **+ > New file** を選択します。

1. ファイル名に `.gitlab-ci.yml` と入力します。

1. `.gitlab-ci.yml` ファイルに deploy ステージを追加します:

      ```yml
      stages:
          - deploy
      ```

1. 最初のタスクは、SSH 接続に必要な依存関係をインストールするジョブをセットアップすることです。以下のコードをコピーして貼り付けます。

      ```yml
      deploy config:
          stage: deploy
          image: ubuntu:latest
          before_script:
            - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
            - eval $(ssh-agent -s)
            - chmod 400 "$SSH_PRIVATE_KEY"
            - ssh-add "$SSH_PRIVATE_KEY"
            - mkdir -p ~/.ssh
            - chmod 700 ~/.ssh
            - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
      ```

    > このジョブは、ランナー上に SSH エージェントをインストールして起動することから始まります。招待コードを利用すると、デプロイ先のインスタンスが作成され、SSH 秘密鍵が `SSH_PRIVATE_KEY` という変数に格納されます。この鍵は接続に使用するために SSH エージェントに追加されます。

1. ジョブのスクリプトとして、サーバーに SSH 接続して gitlab runner を登録します。先ほど作成した GITLAB_RUNNER_TOKEN 変数を使用していることに注意してください。

      ```yml
          script:
            - ssh root@$ip 'gitlab-runner unregister --all-runners'
            - ssh root@$ip 'gitlab-runner register --non-interactive --url https://ilt.gitlabtraining.cloud --executor "docker" --docker-image alpine:latest  --token '"$GITLAB_RUNNER_TOKEN"
      ```

      > 最初に実行するコマンドは、リモートサーバー上のすべての現在のランナーを登録解除します。これにより、ランナーの重複登録を防ぎます。
      >
      > `–non-interactive` フラグは、インストールプロセス中にランナーが入力を求めることを防ぎます。プロンプトに入力する代わりに、URL、エグゼキューター、Docker イメージ、トークンの引数をコマンドライン引数で指定します。
      >
      > この設定では、エグゼキューターは docker に設定されています。`docker-image` には、パイプラインで使用するデフォルトの Docker イメージを設定します。任意の Docker イメージを使用できますが、この例では `alpine:latest` をデフォルトイメージとして使用します。

1. **Commit changes** を選択し、コミットメッセージ（例: "Added runner creation job"）を追加して **Commit changes** を選択します。

1. **Build > Pipelines** を選択します。

1. 最新のパイプラインを選択します。

1. パイプラインが正常に完了することを確認します。

      ランナーが登録されていることを確認するには:

1. 左サイドバーで、**Settings > CI/CD** を選択します。

1. **Runners** の横の矢印をクリックして、Runners セクションを展開します。ランナーの横に緑色の丸が表示されているはずです。

## タスク D. ランナーの設定を確認する

このランナーが作成されると、ランナーの設定を定義する `config.toml` ファイルが作成されます。現在のランナーの設定を確認することから始めましょう。

1. `deploy config` ジョブスクリプトの末尾に、次のコマンドを追加します:

      ```yml
      - ssh root@$ip 'cat /etc/gitlab-runner/config.toml'
      ```

1. この変更をコミットし、変更から作成されたパイプラインに移動します。

1. `deploy config` ジョブの出力を確認します。

1. `cat` コマンドからの次のような出力が表示されます:

      ```toml
      concurrent = 1
      check_interval = 0
      shutdown_timeout = 0

      [session_server]
        session_timeout = 1800

      [[runners]]
        name = "runner-test"
        url = "https://ilt.gitlabtraining.cloud"
        id = 1852
        token = "your-token-here"
        token_obtained_at = 2025-05-08T12:59:30Z
        token_expires_at = 0001-01-01T00:00:00Z
        executor = "docker"
        [runners.custom_build_dir]
        [runners.cache]
          MaxUploadedArchiveSize = 0
          [runners.cache.s3]
          [runners.cache.gcs]
          [runners.cache.azure]
        [runners.docker]
          tls_verify = false
          image = "alpine:latest"
          privileged = false
          disable_entrypoint_overwrite = false
          oom_kill_disable = false
          disable_cache = false
          volumes = ["/cache"]
          shm_size = 0
          network_mtu = 0
      ```

1. `token:` の値に `[MASKED]` が含まれていないことを再確認します。もし含まれている場合、GITLAB_RUNNER_TOKEN がマスクされており、表示されない設定になっています。

1. 次のタスクで必要になるため、この出力をメモしておきます。

## タスク E. ランナーの設定を編集する

この設定では、Docker in Docker でジョブを実行できるようにする必要があります。そのために、次の 2 つのデフォルト設定を変更する必要があります:

  ```toml
    privileged = true
    volumes = ["/certs/client", "/cache"]
  ```

これらの変更を行うために、`config.toml` ファイルをランナーにプッシュします。

1. プロジェクトリポジトリに移動します。

1. **+ > New file** を選択します。

1. ファイル名に `config.toml` と入力します。

1. ジョブ出力の `config.toml` をリポジトリ内に作成した .toml ファイルにコピーします（`your-token` の値を実際のランナートークンに置き換えてください）。

      `config.toml` は次のようになります:

      ```toml
      concurrent = 1
      check_interval = 0
      connection_max_age = "15m0s"
      shutdown_timeout = 0
      [session_server]
        session_timeout = 1800
      [[runners]]
        name = "docker-runner"
        url = "https://gitlab.com"
        id = 40174213
        token = "your-token"
        token_obtained_at = 2025-05-24T12:10:22Z
        token_expires_at = 0001-01-01T00:00:00Z
        executor = "docker"
        [runners.custom_build_dir]
        [runners.cache]
          MaxUploadedArchiveSize = 0
          [runners.cache.s3]
          [runners.cache.gcs]
          [runners.cache.azure]
        [runners.docker]
          tls_verify = false
          image = "alpine:latest"
          privileged = false
          disable_entrypoint_overwrite = false
          oom_kill_disable = false
          disable_cache = false
          volumes = ["/cache"]
          shm_size = 0
          network_mtu = 0
      ```

1. `config.toml` ファイルを保存する前に、次のフィールドを更新します:

      ```toml
      privileged = true
      volumes = ["/certs/client", "/cache"]
      ```

1. `config.toml` ファイルをコミットします。

1. **Build > Pipeline Editor** を選択します。

1. `.gitlab-ci.yml` ファイル内の `gitlab-runner register` コマンドの後に、スクリプトに次の内容を追加します:

      ```yml
      - scp config.toml root@$ip:/etc/gitlab-runner/config.toml
      - ssh root@$ip 'gitlab-runner restart'
      ```

1. これを行うと、次のような `.gitlab-ci.yml` ファイルになります:

      ```yml
      stages:
          - deploy

      deploy config:
        stage: deploy
        image: ubuntu:latest
        before_script:
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
        script:
          - ssh root@$ip 'gitlab-runner unregister --all-runners'
          - ssh root@$ip 'gitlab-runner register --non-interactive --url https://ilt.gitlabtraining.cloud --executor "docker" --docker-image alpine:latest  --token '"$GITLAB_RUNNER_TOKEN"'
          - scp config.toml root@$ip:/etc/gitlab-runner/config.toml
          - ssh root@$ip 'gitlab-runner restart'
          - ssh root@$ip 'cat /etc/gitlab-runner/config.toml'
      ```

1. **Commit changes** を選択します。

このスクリプトにより、設定がランナーマシンにコピーされます。ランナーが登録されると、新しい設定が適用されます。

## タスク F. ランナーをテストする

ランナーをテストするために、プロジェクトで使用する基本的な Docker in Docker 設定を作成します。

1. `CICD Runner` プロジェクトに移動します。

1. コードリポジトリに戻ります。

1. **+ > New file** を選択します。

1. ファイル名に `Dockerfile` と入力します。次のコンテンツを追加します:

      ```dockerfile
      FROM node:latest

      WORKDIR /app
      CMD ["npm", "start"]
      ```

1. このファイルをコミットします。

1. `.gitlab-ci.yml` ファイルを選択します。

1. **Edit > Edit in pipeline editor** を選択します。

1. 既存のジョブとステージをすべて削除して、空のファイルにします。

1. build ステージを追加します:

      ```yml
      stages:
        - build
      ```

1. 次の build ジョブを追加します:

      ```yml
      build image:
        stage: build
        image: docker:27
        services:
          - docker:27-dind
        variables:
          IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        script:
          - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
          - docker build -t $IMAGE .
          - docker push $IMAGE
        tags:
          - node
      ```

1. **Commit changes** を選択します。

パイプラインが実行されると、新しい Docker ランナーを使用してジョブが正常に完了するはずです。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
