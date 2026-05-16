---
title: "GitLab CI/CD - ハンズオンラボ: 壊れたパイプラインの調査"
description: "このハンズオンガイドでは、CI/CD パイプラインのトラブルシューティングと修正方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab5/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-25T17:26:37+00:00"
---

> 完了までの推定時間: 15 分

## はじめに

Tanuki Enterprises は、CI/CD ジャーニーの最終ステップ、つまり本番サーバーへの自動デプロイメントに進む準備ができています。しかし、チームはすぐに大きな問題に遭遇しました。

- **暗号のようなエラーメッセージ**: ジョブが「error in libcrypto」のような明確な解決策がない不明瞭なエラーで失敗する
- **試行錯誤のデバッグ**: 開発者は体系的なトラブルシューティングアプローチなしにランダムな修正を試みて何時間も無駄にする
- **トラブルシューティングのフレームワークがない**: チームにはパイプライン障害を診断し解決するための構造化された方法論がない
- **デプロイメントへの恐れ**: 問題をデバッグする能力に自信がないため、開発者はデプロイメント自動化の設定を避ける

## 目的

このラボでは、CI/CD パイプラインの体系的なトラブルシューティング手法を学びます。一般的な SSH キーのフォーマットエラーを意図的に導入し、根本原因を分離する練習をし、GitLab ドキュメントを活用してソリューションを見つけ、保守性を高めるために before_script セクションを使用したジョブスクリプト整理のベストプラクティスを適用します。

## タスク A. SSH 接続のセットアップ

このコースの一部として、デプロイメント用に使用する SSH キーが提供されました。CI/CD プロセス中に使用するために、この SSH キーを GitLab に追加する必要があります。

1. CI/CD プロジェクトに移動します。

1. **Build > Pipeline Editor** を選択します。

1. `deploy` という名前の新しいステージを追加します。

    ```yaml
    stages:
      - test
      - build
      - run
      - release
      - deploy
    ```

1. このステージには、`deploy app` という名前の単一ジョブを置きます。このジョブが最初に行うことは、SSH エージェントが利用可能かどうかをチェックし、なければインストールすることです。

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
    ```

1. 次に、SSH キー変数から pem ファイルをセットアップし、SSH 用途で使用できるようにファイルに必要な権限を設定します。グループレベルの変数である `SSH_PRIVATE_KEY` 変数を使用していることに注意してください。変数の完全なリストは、グループに移動して **Settings > CI/CD** を選択し、**Variables** サブメニューを選択することで確認できます。

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
        - chmod 400 "$SSH_PRIVATE_KEY"
        - ssh-add "$SSH_PRIVATE_KEY"
        - mkdir -p ~/.ssh
        - chmod 700 ~/.ssh
    ```

1. 接続が機能しているかどうかをテストするための簡単な SSH コマンドを追加できます。

      ```yaml
      deploy app:
        stage: deploy
        script: 
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
          - ssh-keyscan -t rsa,ed2519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'ls /'
      ```

1. 最後に、デプロイメント環境を追跡できるように `environment` キーワードを追加します。

      ```yaml
      deploy app:
        stage: deploy
        script: 
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
          - ssh-keyscan -t rsa,ed2519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'ls /'
        environment:
          name: prod
          url: "http://$ip:80"
      ```

1. 変更をコミットしてパイプラインを実行します。`deploy app` ジョブが失敗していることが分かります。

何が間違っていて、どう修正するかを見つけてみましょう!

## タスク B. Duo Agent Platform でパイプラインをデバッグする

1. `deploy app` ジョブをクリックします。ジョブログに `Unknown key type: "ed2519"` に類似したエラーメッセージが表示されます。Duo Agent Platform（DAP）を使ってこの脆弱性を解決します。Duo Agent Platform は GitLab の AI ソリューションで、Issue の構築、マージリクエストのレビュー、脆弱性の修正、そしてこの場合、壊れたパイプラインの修正を支援できます。

1. 右上の **New chat** ボタンをクリックします。

1. `Choose an agent` メニューで **CI Expert** を選択します。

1. チャットボックスに「Can you help me fix this broken pipeline?」と入力して Enter を押します。CI Expert エージェントがジョブログを分析し、ソリューションを提案します。

1. チャットボックスに「Can you create a merge request to fix the broken pipeline?」と入力して Enter を押します。CI Expert エージェントはマージリクエストの作成に取り組みます。エージェントがコミットとマージリクエストの作成の許可を求めたら、**Approve** を押します。

> リポジトリに変更を加えるアクションについては、GitLab Duo エージェントは常に許可を求めます。これは、DAP を使用する際にあなたが Human In the Loop（HITL）であり続けることを確実にするためです。

1. チャットによって提供されたマージリクエストのリンクをクリックするか、**Code > Merge Requests** からマージリクエストにアクセスします。

1. マージリクエストをレビューしてどのような変更が行われたかを確認し、**Merge** ボタンをクリックしてコードをマージします。

## タスク C. Deploy ジョブのクリーンアップ

ジョブが修正されたので、ジョブのステップがより明確になるようにジョブをクリーンアップすることが重要です。例えば、ジョブの一部を `script` セクションから `before_script` セクションに移動することができます。

1. `'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'` から `chmod 700 ~/.ssh` までのステップを `before_script` セクションに移動しましょう。そうすれば、ジョブのどの部分がセットアップで、どれが実際に実行されるタスクであるかが明確になります。また、SSH キー変数を SSH_PRIVATE_KEY に戻すことも忘れないでください。

      deploy ジョブは現在以下のようになっているはずです。

      ```yaml
      deploy app:
        stage: deploy
        before_script:
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_PRIVATE_KEY"
          - ssh-add "$SSH_PRIVATE_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
        script:
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'ls /'
        environment:
          name: prod
          url: "http://$ip:80"
      ```

1. パイプラインを実行して変更がパイプラインの何も壊していないことを確認します。

## おわりに

実世界のデプロイメントエラーに取り組むことで、チームの自信を変革する体系的なトラブルシューティングフレームワークを開発しました。あなたのチームは、ランダムに推測するのではなく、失敗したコマンドを分離し、エージェント型システムを利用し、修正を体系的に検証することを学びました。エラーを特定する、コマンドを分離する、DAP に相談する、修正を適用する、検証する、という構造化されたアプローチによって、平均的なデバッグ時間を時間単位から分単位に短縮しました。さらに、セットアップタスクに `before_script` を使うように deploy ジョブをリファクタリングすることで、あなたのチームはコードの読みやすさを向上させ、将来パイプラインを維持しトラブルシューティングしやすくなりました。これらのトラブルシューティングスキルと動作するデプロイメント構成があれば、Tanuki Enterprises は本番環境へのデプロイメントを自動化することに自信を持ち、発生するパイプラインの問題を素早く診断し解決できることを知っています。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を見ることができます。

## 提案?

ラボへの変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
