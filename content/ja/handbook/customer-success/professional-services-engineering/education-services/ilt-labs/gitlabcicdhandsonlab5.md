---
title: "GitLab CI/CD - ハンズオンラボ: 壊れたパイプラインの調査"
description: "このハンズオンガイドでは、CI/CD パイプラインのトラブルシューティングと修正方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab5/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

> 完了までの推定時間: 15 分

## はじめに

Tanuki Enterprises は CI/CD の旅の最終ステップ、本番サーバーへの自動デプロイに進む準備ができました。しかし、チームはすぐに大きな問題に直面しました:

- **不可解なエラーメッセージ**: ジョブが「error in libcrypto」のような不明確なエラーで失敗し、明確な解決策がない
- **試行錯誤によるデバッグ**: 系統的なトラブルシューティングのアプローチなしに、ランダムな修正を試みて何時間も無駄にしている
- **隠れた設定の問題**: SSH キー、環境変数、フォーマットの問題がサイレントな障害を引き起こす
- **トラブルシューティングのフレームワークがない**: チームにはパイプラインの失敗を診断して解決するための体系的な方法論がない
- **デプロイへの恐怖**: 問題をデバッグする能力に自信がないため、開発者はデプロイの自動化設定を避けている

## 目標

このラボでは、CI/CD パイプラインの系統的なトラブルシューティング手法を学びます。一般的な SSH キーのフォーマットエラーを意図的に導入し、根本原因の特定を練習し、GitLab ドキュメントを活用して解決策を見つけ、メンテナンス性向上のために before_script セクションを使用してジョブスクリプトを整理するベストプラクティスを適用します。

## タスク A. SSH 接続のセットアップ

このコースの一環として、デプロイに使用するための SSH キーが提供されています。CI/CD プロセス中に使用するために、この SSH キーを GitLab に追加する必要があります。

### セキュリティ推奨事項: SSH キー管理に 1Password を使用する

SSH キーをディスクに保存する代わりに、1Password または類似のセキュアなキー管理ソリューションを使用して SSH キーを生成・保存することを強くお勧めします。これにより秘密鍵がより適切に保護されます。詳細な手順については [1Password SSH キー生成ガイド](https://docs.gitlab.com/user/ssh_advanced/#generate-an-ssh-key-pair-with-1password) をご参照ください。

> **セキュリティ警告:** SSH キーをディスクに保存するとセキュリティリスクがあります。秘密鍵は保護され、共有されるべきではありません。セキュアなキー管理のプラクティスを使用してください。

SSH キーを GitLab に追加するには、次の手順に従います:

1. GitLab のプロジェクトに移動します。

1. 左サイドバーで **Settings > CI/CD** に移動します。

1. **Variables** の横にある **Expand** を選択します。

1. **Group variables (inherited)** に `SSH_PRIVATE_KEY` という変数が表示されます。

      一般的な SSH 関連エラーを実演するために、SSH キーをコピーして、その値に基づいた新しい変数を作成します:

1. 現在、プロジェクトレベルで継承された変数を表示しています。これらのグループレベルの変数を直接操作するには、`SSH_PRIVATE_KEY` 変数の横にあるグループ名をクリックします。

1. **Variables** の横にある **Expand** を選択します。

1. `SSH_PRIVATE_KEY` 変数の **value** の横にある **Copy** アイコンを選択します。

1. **Add variable** を選択します。

1. **Type** を **file** に設定します。

1. `key` フィールドに `SSH_INVALID_KEY` と入力します。

1. 変数の Visibility を **Visible** に設定します。

1. value に SSH キーを貼り付けます。

1. キー値の末尾の改行を削除します。これにより、キーを使用しようとするとエラーが発生します。

1. **Add variable** を選択します。

      新しい SSH キー変数は、グループで実行するすべての CI/CD ジョブ中にアクセス可能になります。では、SSH 接続をテストするジョブを作成しましょう。

1. CI/CD プロジェクトに移動します。

1. **Build > Pipeline Editor** を選択します。

1. deploy という新しいステージを追加します:

    ```yaml
    stages:
      - test
      - build
      - run
      - release
      - deploy
    ```

1. このステージでは deploy app という単一のジョブを使用します。このジョブが最初に行うのは、SSH エージェントが利用可能かどうかを確認し、なければインストールすることです。

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
    ```

1. 次に、SSH キー変数から pem ファイルをセットアップし、SSH 用に使用できるよう必要なパーミッションを設定します。`SSH_INVALID_KEY` 変数を使用していることに注意してください。

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
        - chmod 400 "$SSH_INVALID_KEY"
        - ssh-add "$SSH_INVALID_KEY"
        - mkdir -p ~/.ssh
        - chmod 700 ~/.ssh
    ```

1. 接続が正常に動作しているかテストするためのシンプルな SSH コマンドを追加できます。

      ```yaml
      deploy app:
        stage: deploy
        script: 
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_INVALID_KEY"
          - ssh-add "$SSH_INVALID_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'ls /'
      ```

1. 最後に、デプロイ環境を追跡するために `environment` キーワードを追加します。

      ```yaml
      deploy app:
        stage: deploy
        script: 
          - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
          - eval $(ssh-agent -s)
          - chmod 400 "$SSH_INVALID_KEY"
          - ssh-add "$SSH_INVALID_KEY"
          - mkdir -p ~/.ssh
          - chmod 700 ~/.ssh
          - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
          - ssh root@$ip 'ls /'
        environment:
          name: prod
          url: "http://$ip:80"
      ```

これらの変更をコミットすると、deploy ジョブでエラーが表示されます。このエラーを確認するには **Build** > **Pipelines** ページに移動して、失敗したパイプラインとジョブを確認します。出力は次のようになります:

  ```bash
  $ eval $(ssh-agent -s)
  Agent pid 3211
  $ chmod 400 "$SSH_INVALID_KEY"
  $ ssh-add "$SSH_INVALID_KEY"
  Error loading key "/builds/training-users/session-eff7bd34/iuztj7px/cicd-demo.tmp/SSH_INVALID_KEY": error in libcrypto
  ```

何が起きたのか調べてみましょう!

## タスク B.1. エラーを引き起こしているコマンドを特定する

最初の論理的なステップは、エラーを引き起こしているコマンドを特定することです。ログを見ると、`ssh-add "$SSH_INVALID_KEY"` コマンドがエラーを引き起こしているようです。

コマンドが特定されたので、コマンドを検証するいくつかの方法を検討できます。可能であれば、コマンドをローカルで実行してみることも一つの方法です。これによりランナーの潜在的な問題を排除できます。この例では、ランナーは正常に動作していると仮定できます。つまり、問題はコマンド自体にあります。

このような場合、コマンドの変数や入力が主なエラーの原因であることが多いです。エラーメッセージから、キーが正しくフォーマットされていないと見られます。ドキュメントで原因を確認してみましょう。

## タスク B.2. ドキュメントを検索する

一般的なエラーはドキュメントに解決策とともに記載されていることが多いです。このエラーを見つけるには:

1. [ドキュメント](https://docs.gitlab.com/) でエラーを検索してみましょう。最初の結果として「Using SSH keys with GitLab CI/CD」というタイトルの記事が表示されます。このページをクリックします。

1. このページのトラブルシューティングセクションまでスクロールすると、私たちが直面しているまさにそのエラーに関するセクションが見つかります。

      ドキュメントには、キーの末尾に改行がないことが問題であると記載されています。改行を追加して問題が解決するか確認してみましょう。

1. **Settings > CI/CD > Variables** を選択して変数に戻ります。

1. `SSH_INVALID_KEY` 変数の横にあるグループを選択します。

1. グループ変数セクションを展開して `SSH_INVALID_KEY` 変数の横にある **Edit** アイコンを選択します。

1. 変数の値の末尾に新しい行を追加して **Save Changes** を選択します。

      これでエラーが修正されたかテストするには:

1. CI/CD プロジェクトに戻ります。

1. 左サイドバーから **Build > Pipelines** を選択します。

1. **New pipeline** を選択します。

1. すべての値をデフォルトのままにして **New pipeline** を再度選択します。ジョブが正常に完了するのが確認できます!

## タスク C. Deploy ジョブのクリーンアップ

ジョブが修正されたので、ジョブのステップをより明確にするためにジョブを整理することが重要です。たとえば、`script` セクションから `before_script` セクションにジョブの一部を移動できます。

1. `'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'` から `chmod 700 ~/.ssh` までのステップを `before_script` セクションに移動しましょう。これにより、ジョブのどの部分がセットアップで、どの部分が実際のタスクを実行しているかが明確になります。また、SSH キー変数を SSH_PRIVATE_KEY に戻すことを忘れないでください。

      deploy ジョブは次のようになります:

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

1. パイプラインを実行して、変更によってパイプラインに問題が生じていないことを確認します。

## まとめ

実際の SSH デプロイエラーを解決する作業を通して、チームの自信を変革した系統的なトラブルシューティングのフレームワークが開発されました。チームは失敗するコマンドを特定し、既知の Issue についてドキュメントを検索し、ランダムに推測するのではなく系統的に修正を検証することを学びました。「エラーを特定し、コマンドを分離し、ドキュメントを参照し、修正を適用し、検証する」という構造的アプローチにより、平均デバッグ時間が数時間から数分に短縮されました。さらに、セットアップタスクに `before_script` を使用するよう deploy ジョブをリファクタリングしたことで、チームはコードの可読性を向上させ、パイプラインを将来のメンテナンスとトラブルシューティングをより容易にしました。これらのトラブルシューティングスキルと動作する SSH デプロイ設定により、Tanuki Enterprises は本番環境へのデプロイを自信を持って自動化できるようになり、発生したパイプラインの問題を迅速に診断・解決できることを知っています。

## ラボガイド完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
