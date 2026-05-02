---
title: "GitLab Advanced CI/CD - ハンズオンラボ: デプロイ戦略"
description: "このハンズオンガイドでは、フィーチャーフラグの作成プロセスについて説明します"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandsonlab7/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

開発プロセスの次のステップは、アプリケーションに適したデプロイ戦略を決定することです。すべてのユーザーに一度に変更をロールアウトするのはリスクの高い戦略です。なぜなら、エラーがすべてのユーザーに影響し、障害を引き起こす可能性があるからです。これを軽減するために、GitLab のデプロイ機能を活用できます。このセクションでは、アプリケーションにフィーチャーフラグを実装して、機能を段階的にロールアウトする方法を学びます。

> 完了までの推定時間: 15 分

## 目標

このラボの終了時点で、次のことができるようになります:

- GitLab のフィーチャーフラグ機能を使用する

## タスク A. フィーチャーフラグを実装する

このタスクでは、GitLab のフィーチャーフラグ機能を使用して、アプリケーションにフィーチャーフラグを実装します。これにより、新機能を一部のユーザーに段階的にロールアウトし、問題が発生した場合の広範な影響のリスクを軽減できます。

フィーチャーフラグをセットアップして使用するために次の手順に従います:

1. **Deploy > Feature flags** に移動します。

1. **New Feature Flag** を選択します。

1. 名前に `test` を入力します。Type として `Percent rollout` を選択します。

1. パーセンテージを 50% に設定し、**Based on** を Random に設定します。

1. **Create feature flag** を選択します。

1. フィーチャーフラグを作成した後、**Configure** を選択します。API URL と Instance ID フィールドをメモしておきます。後でコードの変更に必要になります。

1. `index.js` ファイルを選択します。

1. **Edit > Edit in single file** を選択します。

1. `index.js` ファイルで、既存のコードをすべて削除し、次のコードに置き換えます。**your-instance-url** と **your-instance-id** は先ほどメモした値に置き換えてください:

    ```js
    const { initialize } = require('unleash-client');

    const unleash = initialize({
      url: 'your-instance-url',
      appName:'production',
      instanceId: 'your-instance-id'
    });

    setInterval(() => {
    if (unleash.isEnabled('test')) {
        console.log('Toggle enabled');
    } else {
        console.log('Toggle disabled');
    }
    }, 1000);
    ```

1. **Commit changes** を選択し、適切なコミットメッセージを追加して **Commit changes** を選択します。

    > このコードは継続的に実行され、フィーチャーフラグトグルが有効か無効かを確認しようとします。50% のユーザーに対して有効になっているため、このコードを実行するとおよそ半分の確率で有効と表示されます。

1. これをテストするために、スクリプトの実行テストを行います。

1. **Build > Pipeline Editor** を選択します。

1. `.gitlab-ci.yml` ファイル全体を次のコードに置き換えます:

    ```yml
    default:
      image: node:latest
      
    stages:
      - test

    test_flag:
      stage: test
      script:
        - npm i unleash-client
        - node index.js
    ```

1. **Commit changes** を選択します。

1. 変更をコミットした後、左サイドバーで **Build > Pipelines** を選択します。

1. `test_flag` ジョブを選択します。

1. このジョブが true を出力したり false を出力したりすることを観察します。これは、フィーチャーフラグが 50% の確率でアクティブになっているためです。

## ラボガイドの完了

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson)を参照できます。

## ご提案は?

ラボへの変更をご希望の場合は、マージリクエストで変更内容を送信してください。
