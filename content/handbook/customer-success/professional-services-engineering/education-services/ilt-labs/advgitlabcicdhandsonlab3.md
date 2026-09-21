---
title: "GitLab Advanced CI/CD - ハンズオンラボ: レビューアプリ"
description: "このハンズオンガイドでは、レビューアプリの作成プロセスについて説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab3/
upstream_sha: "945c1a5211612e55d2a9e0b08b59ebb80548de60"
translated_at: "2026-09-21T23:32:47+00:00"
translator: claude
stale: false
lastmod: "2026-09-21T07:10:28-04:00"
---

このラボの目的は、Node.js アプリケーションからレビューアプリを作成することです。レビューアプリとは、プロジェクト内の各マージリクエストのために自動的に作成される一時的なアプリケーション環境です。これにより、開発者やステークホルダーは、変更をメインブランチにマージする前に、ライブの独立した環境で提案された変更をプレビューしてインタラクションできます。

> 完了までの推定時間: 15 分

## 目標 {#objectives}

- Node.js アプリケーションからレビューアプリを作成する

## タスク A. レビューアプリを作成する {#task-a-creating-a-review-app}

1. 左サイドバーで **Operate > Environments** を選択します。

1. **Enable Review Apps** を選択します。

1. 次のような提供されたスクリプトをコピーします:

      ```yml
      deploy_review:
        stage: deploy
        script:
          - echo "Add script here that deploys the code to your infrastructure"
        environment:
          name: review/$CI_COMMIT_REF_NAME
          url: https://$CI_ENVIRONMENT_SLUG.example.com
        rules:
          - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      ```

      > **Enable Review Apps** をクリックしたときに GitLab がこのスクリプトを表示しない場合は、上記の参照スクリプトをコピーして使用してください。

1. コードリポジトリに戻り、ブランチを **review-app** ブランチに設定します。

1. **Build > Pipeline Editor** を選択します。

1. コピーした `deploy_review` ジョブを `.gitlab-ci.yml` ファイルの末尾に貼り付けます。

1. この例では、URL として IP アドレスを使用するように URL を少し変更します。この変数 `$ip` は、招待コードを利用したときに作成されたグループレベルの変数です。この変数を使用するために、サーバーが `HTTP` のみを使用するため `HTTPS` も削除します。以下は完成した `deploy_review` 定義です:

      ```yml
      deploy_review:
        stage: deploy
        script:
          - echo "Add script here that deploys the code to your infrastructure"
        environment:
          name: review/$CI_COMMIT_REF_NAME
          url: http://$ip:4001
        rules:
          - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      ```

1. `.gitlab-ci.yml` ファイルに `deploy` ステージを追加します。

      ```yml
      stages:
        - deps
        - test
        - deploy
      ```

1. これで、変更をレビューアプリにデプロイできます。`deploy_review` ジョブに `ubuntu:latest` の `image` を追加します。

      ```yml
      deploy_review:
        stage: deploy
        image: ubuntu:latest
      ```

1. `deploy_review` ジョブの `script` のすぐ上に、次の `before_script` を追加します。SSH 秘密鍵は SSH_PRIVATE_KEY という名前の変数に保存されています。この鍵を SSH エージェントに追加して、リモートサーバーへの接続に使用します:

      ```yml
        before_script:
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
      ```

1. 最後に、次のジョブ定義に合わせてジョブスクリプトを更新します:

      ```yml
        script:
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'mkdir -p /www'
          - ssh root@$ip 'sudo apt-get update'
          - ssh root@$ip 'sudo apt-get install nodejs npm -y'
          - ssh root@$ip 'cd /www/ && npm init -y'
          - ssh root@$ip 'cd /www/ && npm i express'
          - ssh root@$ip 'cd /www/ && npm i -g pm2'
          - scp index.js root@$ip:/www
          - ssh root@$ip 'pm2 start -f /www/index.js'
      ```

1. 最終的なジョブスクリプトは次のようになります:

      ```yml
      deploy_review:
        stage: deploy
        image: ubuntu:latest
        before_script:
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
        script:
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'mkdir -p /www'
          - ssh root@$ip 'sudo apt-get update'
          - ssh root@$ip 'sudo apt-get install nodejs npm -y'
          - ssh root@$ip 'cd /www/ && npm init -y'
          - ssh root@$ip 'cd /www/ && npm i express'
          - ssh root@$ip 'cd /www/ && npm i -g pm2'
          - scp index.js root@$ip:/www
          - ssh root@$ip 'pm2 start -f /www/index.js'
        environment:
          name: review/$CI_COMMIT_REF_NAME
          url: http://$ip:4001
        rules:
          - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      ```

1. **Commit changes** を選択します。

## タスク C. レビューアプリを確認する {#task-c-verify-the-review-app}

レビューアプリが機能することをテストするために、新しいマージリクエストを作成します。

1. **Code > Branches** を選択します。

1. **New branch** を選択します。

1. ブランチ名を `test_review` に設定して **Create branch** を選択します。

1. このブランチのマージリクエストを作成します。

1. マージリクエストを作成したら、**Code > Open in Web IDE** を選択してマージリクエストから Web IDE を開きます。

1. `index.js` ファイルを選択します。

1. `res.send` を好きなメッセージを表示するように更新します。以下は例です:

      ```js
      const express = require('express')
          const app = express()
          const port = 4001

          app.get('/', (req, res) => {
            res.send('Our app is running!')
          })

          app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
      })
      ```

1. **source control** アイコンを選択します。コミットメッセージを入力し、**Commit and put to...** ボタンをクリックしてコード変更をコミットします。

1. パイプラインが完了するまで待ちます。

1. マージリクエストを開きます。

1. パイプラインが完了したら **View app** を選択します。

## ラボガイドの完了 {#lab-guide-complete}

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は? {#suggestions}

このラボへの変更をご希望の場合は、マージリクエストを通じて変更内容を送信してください。
