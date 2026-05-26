---
title: 'Dev Pulse'
description: 'Dev Pulse に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/dev-pulse/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

<sup>[support-ops-project#970](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/970) で導入されました</sup>

このガイドでは、Zendesk で使用するために作成したカスタムセットアップである Dev Pulse について説明します。エージェントとしてこれを使用したい場合は、[Dev Pulse の使用方法](#how-do-i-use-dev-pulse)を参照してください。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/dev-pulse)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/dev-pulse)

{{% /alert %}}

## Dev Pulse を理解する

### Dev Pulse とは

Dev Pulse は、バグ解決、機能リクエスト解決、ヘルプリクエスト（略して RFH）に関連するさまざまな種類の Issue とマージリクエストを能動的に監視するために使用する、スクリプトと Zendesk セットアップのセットの名称です。

すべてのコンポーネントを通じて、Dev Pulse は Zendesk チケットを Issue やマージリクエストが特定の状態に達するのを待つ間、On-hold ステータスのままにすることができます。

特定の状態に到達すると、Dev Pulse を使用している Zendesk 内のチケットは、待機していた Issue やマージリクエストに状態の変化があったことを示すように更新されます。

### Dev Pulse のコンポーネントとは

Dev Pulse のコンポーネントは次のとおりです:

- Dev Pulse プロジェクト
- Zendesk マクロ
  - Zendesk Global 環境用に 3 つ
  - Zendesk US Government 環境用に 1 つ
- 3 つの Zendesk ビュー
- 1 つのチケットフィールド
- 1 つのトリガー
- 1 つの Webhook

Dev Pulse から直接派生したものではありませんが、全体として[problem チケットおよび incident チケット](https://support.zendesk.com/hc/en-us/articles/4408835103898-Working-with-problem-and-incident-tickets)を活用しています。バグや機能リクエストの場合、「親」となる problem チケットが作成されます。この problem チケットを使うことで、添付されたすべての incident チケットを更新して 1 つの一括更新と解決を行うことができます。

### Dev Pulse の使用方法 {#how-do-i-use-dev-pulse}

Zendesk チケットで Dev Pulse を活用するには:

1. `Waiting on issue or merge request` チケットフィールドに、Issue、マージリクエスト、または Epic へのリンクを記入します
   - アンカーリンクなどは含めないでください（アイテムの完全な web URL のみを使用してください）
1. 状況に適したマクロを実行します
   - `Waiting on bug resolution`（Zendesk Global 環境のみ）
     - バグ解決を待っているチケット用
   - `Waiting on feature request resolution`（Zendesk Global 環境のみ）
     - 機能を待っているチケット用
   - `Waiting on RFH`
     - ヘルプリクエスト（RFH）の Issue を待っているチケット用
1. 自分が行ったすべての変更とマクロが行ったことを含めてチケットを送信します

### Dev Pulse はどう動くのか

プロジェクト側では、Dev Pulse には 3 つのコンポーネントがあります:

- [チケットの分析](#analyzing-a-ticket)
- [problem チケットの分析](#analyzing-problem-tickets)
- [RFH チケットの分析](#analyzing-rfh-tickets)

#### チケットの分析 {#analyzing-a-ticket}

これは、エージェントが[チケットで Dev Pulse を使用する](#how-do-i-use-dev-pulse)ときにトリガーされます。エージェントが実行するアクションが Zendesk トリガーを実行させ、それが（Zendesk Webhook 経由で）プロジェクトにペイロードを送信します。

ペイロードには次のものが含まれます:

| キー | 本番環境での値 | サンドボックスでの値 | 内容 |
|-----|---------------------|------------------|--------------|
| `variables[SANDBOX]` | 本番では未設定 | `true` | これがサンドボックス環境用かどうかをスクリプトに伝える |
| `variables[TICKET_ID]` | `{{ticket.id}}` | `{{ticket.id}}` | チケットの ID をスクリプトに伝える |
| `variables[TASK]` | `Analyze Ticket` | `Analyze Ticket` | 実行するタスクをスクリプトに伝える |

これにより、プロジェクトの `bin/analyze_ticket` スクリプトが（CI/CD 経由で）実行されます。

このスクリプトは次のことを行います:

- チケットが `closed` ステータスにあるかを判定するためにチェックします
  - そうである場合、行うべきことがないため終了します
- Zendesk のビューのリストを取得します
- Zendesk のチケットフィールドのリストを取得します
- Zendesk のチケットフォームのリストを取得します
- Zendesk Customer Support Operations bot ユーザーを取得します
- チケットの `Waiting on issue or merge request` チケットフィールドの値の有効性を検証します
  - Issue、マージリクエスト、または Epic であることを確認するためにチェックします
  - gitlab.com に存在するかをチェックします
  - 項目が非クローズかつ非マージ状態にあるかチェックします
- リンクが無効と判定された場合:
  - チケットは Dev Pulse の実行を停止するために最小限の更新がされます
  - 提供されたリンクが無効であった旨を述べる内部コメントが追加されます
- リンクが有効と判定された場合は、タグ経由で、これがバグまたは機能の待機に関するものかをチェックします
  - そうでない場合 _または_ Zendesk US Government 環境である場合、これ以上のアクションは不要なためスクリプトは終了します
- そうである _かつ_ これが Zendesk Global 環境である場合、チケットの `Waiting on issue or merge request` チケットフィールドに一致する既存の problem チケットをチェックします
- 存在しない場合、それ用に作成されます
- チケットは（既存または新しく作成された）problem チケットにリンクされます

#### problem チケットの分析 {#analyzing-problem-tickets}

{{% alert title="注意" color="primary" %}}

- これは Zendesk Global 環境でのみ発生します

{{% /alert %}}

これはプロジェクト上の GitLab [スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)経由でトリガーされます。毎月第 3 水曜日の 1600 UTC に実行されます。

これにより、プロジェクトの `bin/analyze_problems` スクリプトが（CI/CD 経由で）実行されます。

このスクリプトは次のことを行います:

- Zendesk のビューのリストを取得します
- Zendesk のチケットフィールドのリストを取得します
- Zendesk のチケットフォームのリストを取得します
- `Links to bugs and feature requests` Zendesk ビュー内のすべての problem チケットのリストを取得します
- 見つかったすべての problem チケットをループ処理し、次のことを行います:
  - 添付されたチケットのリストを取得します
    - 添付されたチケットがない場合、problem チケットはクローズされ、ループは次のイテレーションに進みます
  - problem チケットが作成された GitLab 項目を分析します（クローズまたはマージ状態にあるかをチェック）
    - そうである場合、次のアクションを実行します:
      - #support_leadership Slack チャンネルに変更を通知するために投稿します
      - 添付されたすべての incident チケットを次のように更新します:
        - `Ticket Stage` チケットフィールドを NRT に設定します
        - チケットの種別を `Task` に設定します
        - チケットのステータスを Open に設定します
        - 待機していた GitLab 項目が解決されたことを示す内部コメントを行います

#### RFH チケットの分析 {#analyzing-rfh-tickets}

これはプロジェクト上の GitLab [スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)経由でトリガーされます。毎時 0 分に実行されます。

これにより、プロジェクトの `bin/analyze_rfhs` スクリプトが（CI/CD 経由で）実行されます。

このスクリプトは次のことを行います:

- Zendesk のビューのリストを取得します
- Zendesk のチケットフィールドのリストを取得します
- `RFH tickets` Zendesk ビュー内のチケットのリストを取得します
- [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)からチームデータ情報を取得します
- 見つかったすべてのチケットをループ処理し、次のことを行います:
  - Issue の作成者以外の誰かが最後のチケット更新後に返信したかをチェックします
  - チェックに合格した場合、チケットは次のように更新されます:
    - チケットのステータスは Open に設定されます
    - チケットの種別は `Task` に設定されます
    - チケットの `Ticket Stage` チケットフィールドは NRT に設定されます
    - RFH の Issue が更新されたことを示す内部コメントが追加されます

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このアクションには、Dev Pulse プロジェクトへの `Developer` レベルのアクセスが必要です。

{{% /alert %}}

### Dev Pulse プロジェクトを変更する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。

{{% /alert %}}

Dev Pulse プロジェクトを変更するには、プロジェクトリポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。これは `Ad-hoc` デプロイメントタイプであるため、変更はすぐにライブになります。

### チケットから Dev Pulse を削除する

{{% alert title="警告" color="warning" %}}

- これは、エージェントから具体的に依頼があった場合にのみ実施してください。
- 非常に注意深く、ここに詳細に記載されている通りにのみ進めてください。ここで行う変更を一緒に行わないと、チケットがすべてのビューから削除されること（つまり「闇に消えること」）につながる可能性があります。

{{% /alert %}}

チケットで Dev Pulse の実行を停止する必要がある場合（つまり「チケットの Dev Pulse 解除」）、次の操作を行います:

1. チケットから次のタグを削除します（存在する場合）:
   - `waiting_on_bug`
   - `waiting_on_feature_request`
   - `waiting_on_rfh`
   - `process_waiting_on_issue_or_mr`
1. チケットの種別を `Task` に変更します
1. `Ticket Stage` フィールドを `NRT` に変更します
1. チケットへの変更を送信します（上記のすべての変更を 1 回の更新で行います）

それを行った後、対応する problem チケット（存在する場合）を見つけるために、Zendesk インスタンスの `Links to bugs and feature requests` ビューをチェックします。その件名はチケットの `Waiting on issue or merge request` フィールドの以前使用された値になります。それを見つけ、**かつ**、他に添付されたチケットがない場合は、見つけた problem チケットを削除します。

## よくある問題とトラブルシューティング

これは、必要に応じて項目が追加されていく生きたセクションです。

### チケットでの Dev Pulse の実行を止めるには

これは複雑な（そして非常に固有の）プロセスとなる可能性があるため、この件についてサポートが必要な場合は Slack を介して Customer Support Operations チームに連絡するのが最善です。
