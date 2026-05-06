---
title: "GitLab CI/CD - ハンズオンラボ: アプリケーションのデプロイ"
description: "このハンズオンガイドでは、パイプラインを使ってアプリケーションをデプロイする方法をデモンストレーションします"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandsonlab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 15分

## はじめに

Tanuki Enterprises は自動化されたパイプラインでアプリケーションのビルド・テスト・検証を行ってきましたが、依然として重大なギャップが残っています。コードを本番環境に届けるためには、まだ手動の作業が必要です。デプロイ上の課題が積み重なっています:

- **手動のデプロイ手順**: エンジニアは手動でサーバーに SSH 接続し、ファイルをコピーし、サービスを設定し、アプリケーションを再起動しなければなりません
- **ヒューマンエラーのリスク**: 手動デプロイはステップの抜け漏れ、誤ったファイルパーミッション、サービスの設定ミスにつながります
- **デプロイの追跡なし**: チームには本番環境で動いているバージョンやデプロイの実施時刻を確認する手段がありません
- **環境の一貫性のなさ**: 実行者によってデプロイの内容が微妙に異なる可能性があります
- **デプロイの遅延**: サーバーへのアクセス権と知識を持つ担当者を待つ必要があり、ボトルネックが生じます

## 目標

このラボでは、本番サーバーへの自動デプロイを実装することで CI/CD の旅を完結させます。Go アプリケーションを Web サービスに変換し、SSH と SCP を使ってアーティファクトをデプロイし、プロセス管理のために systemd サービスを設定し、GitLab にトラッキング付きのデプロイ環境を作成します。これにより、コミットから本番環境までのワンクリックデプロイが可能になります。

## タスク A. コードの準備

まず、コードが Web アプリケーションとして動作するように小さな修正を加えましょう:

1. `main.go` を開きます。

1. 既存のコードをすべて削除し、以下のコードに置き換えます:

    ```go
    package main

    import (
        "fmt"
        "log"
        "net/http"
    )

    func handler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hi there")
    }

    func main() {
        http.HandleFunc("/", handler)
        log.Fatal(http.ListenAndServe(":80", nil))
    }
    ```

    このアプリケーションは "/" (ルート) エンドポイントへのリクエストをポート 80 で待ち受けます。リクエストを受信すると、*Hi there* というメッセージを表示します。

    新しいアプリケーションの種類に対応するため、アプリケーションバイナリを実行するテストを CI/CD プロセスから削除します。これらのテストはアプリケーションを一時停止させて接続を待ち受けるため、正常に動作しなくなります。代わりに、このアプリケーションをテストサーバーにデプロイしてテストできるようにします。まず、CI/CD ファイルは次のような状態にしてください:

    ```yaml
    workflow:
      rules:
          - if: $CI_COMMIT_TAG
            when: never 
          - when: always

    default:
        image: golang

    include:
        - component: <replace-with-link-to-your-component>
          inputs:
              stage: build

    stages:
        - test
        - build
        - run
        - release
        - deploy

    test go:
        stage: test
        script: go test array/ArrayUtils
        allow_failure: true

    build go:
        stage: build
        script:
            - go build
        artifacts:
            paths: 
            - array
        rules:
            - if: $CI_PIPELINE_SOURCE == 'merge_request_event'

    run go:
        stage: run
        script:
            - ./array
        rules:
            - if: $CI_PIPELINE_SOURCE == 'merge_request_event'

    release job:
        stage: release
        image: registry.gitlab.com/gitlab-org/release-cli:latest
        script:
            - echo "Generating the latest release!"
        release: 
            tag_name: 'v0.$CI_PIPELINE_IID'
            description: 'The latest release!'
        rules:
            - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH

    deploy app:
        stage: deploy
        environment:
            name: prod
            url: "http://$ip:80"
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
    ```

1. デプロイジョブでビルドアーティファクトにアクセスできるようにするため、ジョブから実行条件 (rules ブロック) を削除します:

    ```yaml
    build go:
        stage: build
        script:
            - go build
        artifacts:
            paths:
                - array
    ```

## タスク B. デプロイプロセス

GitLab ランナーとターゲットサーバー間の SSH 接続が確立できました。残る最終ステップは、アプリケーションをサーバーにデプロイすることです！デフォルトブランチへのコミット時のみ実行するのが理想的です。

Web アプリケーションの実行と維持を可能にするため、サーバーのシステムサービスとして追加する必要があります。これを実現するために、シンプルなシステムサービスを作成します。

1. プロジェクトのルートに `array.service` という名前の新しいファイルを作成します。このファイルに以下のテキストを追加します:

    ```bash
    [Unit]
    Description=
    After=network.target

    [Service]
    Type=simple
    ExecStart=/www/array

    [Install]
    WantedBy=multi-user.target
    ```

1. `.gitlab-ci.yml` ファイルに、デプロイジョブをデフォルトブランチへのコミット時のみ実行するルールを追加します。

    ```yaml
    deploy app:
        stage: deploy
        image: ubuntu:latest
        before_script:
            - "which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )"
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
        rules:
            - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    ```

1. コードでは array バイナリを www ディレクトリに移動し、サービス定義ファイルを /lib/systemd/system ディレクトリに移動する必要があります。これを行うために scp を使用します。`ssh root@$ip 'ls /'` コマンドの後の `script` セクションに以下のコードブロックを追加します:

    ```bash
        - ssh root@$ip 'mkdir -p /www'
        - ssh root@$ip 'test -e /www/array && rm -f /www/array || echo "No existing /www/array to delete"'
        - scp array root@$ip:/www
        - scp array.service root@$ip:/lib/systemd/system/
        - ssh root@$ip 'ls /www'
        - ssh root@$ip 'ls /lib/systemd/system'
        - ssh root@$ip 'systemctl enable array.service'
        - ssh root@$ip 'systemctl restart array.service'
        - ssh root@$ip 'systemctl status array.service'
    ```

    `deploy app` ジョブは次のようになるはずです:

    ```yaml
    deploy app:
        stage: deploy
        image: ubuntu:latest
        before_script:
            - "which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )"
            - eval $(ssh-agent -s)
            - chmod 400 "$SSH_PRIVATE_KEY"
            - ssh-add "$SSH_PRIVATE_KEY"
            - mkdir -p ~/.ssh
            - chmod 700 ~/.ssh
        script:
            - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
            - ssh root@$ip 'mkdir -p /www'
            - ssh root@$ip 'test -e /www/array && rm -f /www/array || echo "No existing /www/array to delete"'
            - scp array root@$ip:/www
            - scp array.service root@$ip:/lib/systemd/system/
            - ssh root@$ip 'ls /www'
            - ssh root@$ip 'ls /lib/systemd/system'
            - ssh root@$ip 'systemctl enable array.service'
            - ssh root@$ip 'systemctl restart array.service'
            - ssh root@$ip 'systemctl status array.service'
        environment:
            name: prod
            url: "http://$ip:80"
        rules:
            - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    ```

1. パイプラインが正常に完了したら、**Operate > Environments** に移動すると、環境がデプロイされていることが確認できます。**Open** ボタンをクリックして、新しくデプロイされたアプリケーションにアクセスします。

## まとめ

自動デプロイを導入したことで、チームは真のコンティニュアスデリバリーを実現しました。メインブランチへのすべてのコミットが本番環境に自動的にデプロイされるようになりました。アプリケーションバイナリがサーバーにコピーされ、systemd サービスが設定されて再起動され、デプロイが GitLab の Environments ページで実行中アプリケーションへの直接リンク付きで追跡されます。SSH 自動化、アーティファクト管理、環境追跡の組み合わせにより、手動のデプロイ手順が完全に排除され、デプロイ時間は 30 分から 3 分未満に短縮され、プロセスからヒューマンエラーが取り除かれました。チームは本番環境の完全な可視性を得ました。これにはデプロイ履歴、誰が何をいつデプロイしたかという情報が含まれます。最も重要なのは、Tanuki Enterprises が真のコンティニュアスデリバリーで運用できるようになったことです。コードはコミットからビルド、テスト、デプロイを経て本番環境へと自動的に流れ、開発者は手動作業ゼロで、自信を持って一日に何度もユーザーへ機能を届けられるようになりました。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
