---
title: 'メンテナンス'
description: 'Zendesk のメンテナンスに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/maintenance/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

健全な環境を維持するために、いくつかのメンテナンスタスクを実施する必要があります。常にこれらを自動化することを目指していますが、自動化できないものもあり、その場合は時々手動で実施する必要があります。

このガイドでは、GitLab で Zendesk インスタンスに対して行われるさまざまなメンテナンスタスクについて説明します。

## 自動化されたメンテナンスタスク

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/maintenance-tasks)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/maintenance-tasks)

{{% /alert %}}

### 不正なタスクチケットを修正する

<sup>毎時 30 分に実行</sup>

これは、現時刻より前に `Due Date` 値が設定されている `Task` タイプのチケットを見つけます。この状態にあるチケットの `Due Date` 値を削除し、タイプを `Question` に設定します。

### 組織内の誤った expired タグを修正する

{{% alert title="注意" color="info" %}}

- Zendesk Global 環境にのみ適用されます

{{% /alert %}}

<sup>毎時 30 分に実行</sup>

これは、`expired` タグを持ち、かつ `support_level` 値が `expired` ではない組織を見つけます。これらの組織については、誤った `expired` タグを削除する必要があります。スクリプトは以下を確認した上で削除を行います:

- `expired` タグの削除によって組織のすべての `support_level` タグが消えてしまわないこと
- `expired` タグの削除が実際の更新になること

### 削除されたユーザーを完全に削除する

<sup>1 日 2 回、0045 と 1245 に実行</sup>

ユーザーを削除すると Zendesk ワークスペースから取り除かれますが、実際にはユーザーが _完全には_ 削除されません。そのため、これらの削除済みユーザーを定期的に Zendesk から削除する必要があります。

## 手動のメンテナンスタスク

### テーマで今後のバージョン非推奨警告を有効化する

メジャーバージョンが間もなくサポート対象外になることを顧客に警告するため、各種フォーム/フィールドで GitLab バージョンを入力した際に、テーマ上に警告を表示します。

これを変更するには、同期リポジトリで MR を作成し、以下を行う必要があります:

- `data/theme/script.js` ファイルを更新する
  - ここで 3 つの変更を行います:
    1. `upcoming_unsupported_version_message` 関数のバージョン番号と日付を更新する
    1. 以下の `if` ブロックがコメントアウトされていないことを確認する:

       ```javascript
       if ($(this).val().split('.')[0] == xx) {
          $('#gitlab_version_checker_upcoming').show();
        } else {
          $('#gitlab_version_checker_upcoming').hide();
        }
       ```

       - ここで `xx` は前回使われたバージョン番号です
    1. (上記 2 の) `if` ブロックで前回使われたバージョン番号が更新されていることを確認する
- `data/theme/manifest.json` ファイルのバージョンを更新する

ピアがレビューして MR を承認した後、MR をマージできます (これにより、次のデプロイ日に変更が反映されます)。

これは GitLab メジャーリリースの少なくとも 1 か月前にテーマで有効化されるよう実施します。今後のリリースに関する詳細は [GitLab releases](/handbook/engineering/releases/monthly-releases/#monthly-release-schedule) を参照してください。たとえばリリース日が 2025-05-15 なら、2025-04-01 のデプロイに間に合うように実施したいことになります。

### テーマで今後のバージョン非推奨警告を無効化する

メッセージのバージョンが既にサポート対象外になったため、警告を削除する必要があります。これを行うには、同期リポジトリで MR を作成し、以下を行います:

- `data/theme/script.js` ファイルを更新する
  - 以下の `if` ブロックがコメントアウトされていることを確認する:

    ```javascript
    if ($(this).val().split('.')[0] == xx) {
       $('#gitlab_version_checker_upcoming').show();
     } else {
       $('#gitlab_version_checker_upcoming').hide();
     }
    ```

    - ここで `xx` は前回使われたバージョン番号です
- `data/theme/manifest.json` ファイルのバージョンを更新する

ピアがレビューして MR を承認した後、MR をマージできます (これにより、次のデプロイ日に変更が反映されます)。

これは GitLab メジャーリリースの当日に行います。たとえばリリースが 2025-05-15 なら、これらの変更はその日に反映されます。

### テーマでサポート対象バージョンを更新する

サポート対象バージョンの一覧を更新する必要があります。これは同期リポジトリで MR を介してテーマを変更することで行います:

- `data/theme/script.js` ファイルを更新する
  - `supported_versions` 変数の定義を見つけ、現時点でサポート対象のバージョンを持つように Array を変更する
- `data/theme/manifest.json` ファイルのバージョンを更新する

ピアがレビューして MR を承認した後、MR をマージできます。

これは GitLab メジャーリリースの当日に行います。たとえばリリースが 2025-05-15 なら、これらの変更はその日に反映されます。そのため、その日に例外的なデプロイを実施して変更を反映させる必要があります。

## 四半期ごとの Zendesk レビュー

私たちはしばしば変更を加え、一貫してイテレーションを行うため、未使用の項目が Zendesk インスタンスに溜まることがあります。そのため、四半期ごとにすべての未使用項目をレビューして、残しておく必要があるかを判断します。これはシステムとリポジトリをきれいに保つために行われます。

このタスクでは、単一の DRI が必要なすべての変更をまとめます。その後、DRI は Customer Support Operations のリーダーシップと協力して、必要なすべてのタスクを委任します。

このプロセスは 5 つの主要ステップに分けられます。

### Step 1: Issue を作成する

プロセスのよりシンプルなステップの 1 つです。Customer Support Operations の Issue トラッカーで `Administrative` Issue を作成する必要があります。

件名は `Zendesk INSTANCE Review - FYxxQy` の形式を使い、以下を置き換えます:

- `INSTANCE` は対象の Zendesk インスタンス (`Global` または `US Government`)
- `xx` は会計年度の 2 桁
- `y` は対象の四半期 (`1`、`2`、`3`、または `4`)

この時点で Issue は内容が薄いものになります。自分自身 (のみ) に割り当てるようにしてください。

作成後、[Step 2](#step-2-determine-what-changes-are-needed) に進みます。

### Step 2: 必要な変更を判断する {#step-2-determine-what-changes-are-needed}

{{% alert title="注意" color="info" %}}

- 変更が必要ない場合もあります。その場合、その旨を Issue にコメントとして追加し、Issue をクローズしてください。

{{% /alert %}}

このステップでは、Zendesk インスタンスでクリーンアップが必要なすべてのものをリスト化する必要があります。何を削除する必要があるかは項目ごとに異なります:

- Articles
  - 6 か月以上前のアーカイブ済み項目があれば、削除が必要
- Automations
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- Macros
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- Organization Fields
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- Ticket Fields
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
  - チケットフォームで現在使用されていないフィールドは非アクティブ化が必要
- Ticket Forms
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- Triggers
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- User Fields
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要
- Views
  - 6 か月以上前の非アクティブ化された項目があれば、削除が必要

変更リストを手元に置いて、何をすべて変更する必要があるかを示すコメントを追加します。他の人がこれを元に作業するため、書式は慎重に検討してください。

コメントを追加したら、[Step 3](#step-3-get-the-issue-triaged) に進みます。

### Step 3: Issue をトリアージしてもらう {#step-3-get-the-issue-triaged}

よりシンプルなステップで、必要な情報がすべて揃ったので Issue をトリアージしてもらう必要があります。これには以下を行います:

- トリアージ DRI を Issue の担当者として追加する
- Issue がトリアージ可能になったことを伝えるため、トリアージ DRI に Issue 上のコメント経由で連絡する

トリアージ DRI は Issue をレビューし、必要なタグを追加し、Customer Support Operations と話して当該タスクの委任を判断します (その旨をコメントで示します)。

### Step 4: Issue を作業する

Issue がトリアージされたら、作業可能です。ここで実施すべき正確なタスクは項目自体によって異なります。

- Articles については、Zendesk で直接 Article 自体を削除する必要があります
- それ以外については、その項目のドキュメントページを参照して非アクティブ化/削除の詳細を確認してください

委任されたタスクを完了したら、Issue の DRI に完了したことを伝えてください。

### Step 5: Issue をクローズする

すべてのタスクが完了したら、Issue はクローズの準備が整います。

Issue を Completed ステージに移動し (`Stage::Completed` ラベルを追加)、Issue をクローズしてください。
