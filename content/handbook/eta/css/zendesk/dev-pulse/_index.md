---
title: 'Dev Pulse'
description: 'Dev Pulse に関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/dev-pulse/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:20:00+09:00"
translator: codex
stale: false
---

<sup>[support-ops-project#970](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/970)を通じて導入</sup>

このガイドでは、Zendesk で使用するために作成したカスタムセットアップである Dev Pulse について説明します。使用するエージェントは、[Dev Pulse の使用方法](#how-do-i-use-dev-pulse)を参照してください。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/dev-pulse)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/dev-pulse)

{{% /alert %}}

## Dev Pulse を理解する

### Dev Pulse とは

Dev Pulse は、バグ解決、機能リクエストの解決、ヘルプのリクエスト（略して RFH）に関連するさまざまな種類の Issue とマージリクエストを能動的に監視するために使用する、一連のスクリプトと Zendesk セットアップの名称です。

すべてのコンポーネントを通じて、Dev Pulse では Issue またはマージリクエストが特定の状態に到達するのを待つ間、Zendesk チケットを On-hold ステータスのままにできます。

特定の状態に到達すると、Dev Pulse を使用している Zendesk 内のチケットが更新され、待機していた Issue またはマージリクエストで状態変更があったことを示します。

### Dev Pulse のコンポーネントとは

Dev Pulse のコンポーネントは次のとおりです:

- Dev Pulse プロジェクト
- Zendesk マクロ
  - Zendesk Global 環境用 3 つ
  - Zendesk US Government 環境用 1 つ
- Zendesk ビュー 3 つ
- チケットフィールド 1 つ
- トリガー 1 つ
- Webhook 1 つ

Dev Pulse から直接派生したものではありませんが、全体として[問題チケットとインシデントチケット](https://support.zendesk.com/hc/en-us/articles/4408835103898-Working-with-problem-and-incident-tickets)を使用します。バグと機能リクエストでは、「親」問題チケットが作成されます。この問題チケットを使用すると、添付されたすべてのインシデントチケットを一括で更新および解決できます。

### Dev Pulse の使用方法

Zendesk チケットで Dev Pulse を使用するには:

1. `Waiting on issue or merge request` チケットフィールドに、Issue、マージリクエスト、またはエピックへのリンクを入力します
   - アンカーリンクなどは含めないでください（完全なアイテムの Web URL のみを使用してください）
1. 状況に適したマクロを実行します
   - `Waiting on bug resolution`（Zendesk Global 環境のみ）
     - バグ解決を待っているチケット用
   - `Waiting on feature request resolution`（Zendesk Global 環境のみ）
     - 機能を待っているチケット用
   - `Waiting on RFH`
     - ヘルプのリクエスト（RFH）Issue を待っているチケット用
1. 自分が行ったすべての変更とマクロが行った変更を含めて、チケットを送信します

### Dev Pulse の仕組み

プロジェクト側には、Dev Pulse のコンポーネントが 3 つあります:

- [チケットを分析する](#analyzing-a-ticket)
- [問題チケットを分析する](#analyzing-problem-tickets)
- [RFH チケットを分析する](#analyzing-rfh-tickets)

#### チケットを分析する

これは、エージェントが[チケットで Dev Pulse を使用する](#how-do-i-use-dev-pulse)とトリガーされます。エージェントが行うアクションによって Zendesk トリガーが実行され、Zendesk Webhook を介してプロジェクトにペイロードが送信されます。

ペイロードには次が含まれます:

| キー | 本番環境の値 | サンドボックスの値 | 役割 |
|-----|---------------------|------------------|--------------|
| `variables[SANDBOX]` | 本番環境では未設定 | `true` | スクリプトにサンドボックス環境用かどうかを伝えます |
| `variables[TICKET_ID]` | `{{ticket.id}}` | `{{ticket.id}}` | スクリプトにチケットの ID を伝えます |
| `variables[TASK]` | `Analyze Ticket` | `Analyze Ticket` | スクリプトに実行するタスクを伝えます |

これにより、プロジェクトの `bin/analyze_ticket` スクリプトが（CI/CD を通じて）実行されます。

このスクリプトは次の処理を行います:

- チケットが `closed` ステータスかどうかを確認します
  - その場合、行うことがないため終了します
- Zendesk ビューの一覧を取得します
- Zendesk チケットフィールドの一覧を取得します
- Zendesk チケットフォームの一覧を取得します
- Zendesk Customer Support Operations ボットユーザーを取得します
- チケットの `Waiting on issue or merge request` チケットフィールドの値の有効性を検証します
  - Issue、マージリクエスト、またはエピックであることを確認します
  - gitlab.com に存在するか確認します
  - アイテムがクローズもマージもされていない状態か確認します
- リンクが無効と判断された場合:
  - Dev Pulse の実行を停止するため、チケットを最小限に更新します
  - 提供されたリンクが無効であることを示す内部コメントを追加します
- リンクが有効と判断された場合、タグを通じてバグまたは機能の待機に関するものか確認します
  - そうでない場合、または Zendesk US Government 環境の場合は、追加のアクションが不要なためスクリプトを終了します
- そうであり、Zendesk Global 環境の場合、チケットの `Waiting on issue or merge request` チケットフィールドに一致する既存の問題チケットを確認します
- 存在しない場合は、そのための問題チケットを作成します
- チケットを問題チケット（既存または新規作成）にリンクします

#### 問題チケットを分析する

{{% alert title="注記" color="primary" %}}

- これは Zendesk Global 環境でのみ発生します

{{% /alert %}}

これは、プロジェクトの GitLab [スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を介してトリガーされます。毎月第 3 水曜日の 1600 UTC に実行されます。

これにより、プロジェクトの `bin/analyze_problems` スクリプトが（CI/CD を通じて）実行されます。

このスクリプトは次の処理を行います:

- Zendesk ビューの一覧を取得します
- Zendesk チケットフィールドの一覧を取得します
- Zendesk チケットフォームの一覧を取得します
- `Links to bugs and feature requests` Zendesk ビュー内のすべての問題チケットの一覧を取得します
- 見つかったすべての問題チケットをループし、次の処理を行います:
  - 添付チケットの一覧を取得します
    - 添付チケットがない場合、問題チケットをクローズし、ループは次のイテレーションに移ります
  - 問題チケットが作成された GitLab アイテムを分析します（クローズまたはマージ状態かを確認します）
    - 該当する場合、次のアクションを実行します:
      - 変更を通知するために #support_leadership Slack チャンネルに投稿します
      - 添付されたすべてのインシデントチケットを次のように更新します:
        - `Ticket Stage` チケットフィールドを NRT に設定します
        - チケットタイプを `Task` に設定します
        - チケットステータスを Open に設定します
        - 待機していた GitLab アイテムが解決されたことを示す内部コメントを作成します

#### RFH チケットを分析する

これは、プロジェクトの GitLab [スケジュールパイプライン](https://docs.gitlab.com/ci/pipelines/schedules/)を介してトリガーされます。毎時 0 分に実行されます。

これにより、プロジェクトの `bin/analyze_rfhs` スクリプトが（CI/CD を通じて）実行されます。

このスクリプトは次の処理を行います:

- Zendesk ビューの一覧を取得します
- Zendesk チケットフィールドの一覧を取得します
- `RFH tickets` Zendesk ビュー内のチケットの一覧を取得します
- [Support Team プロジェクト](https://gitlab.com/gitlab-support-readiness/support-team)からチームデータ情報を取得します
- 見つかったすべてのチケットをループし、次の処理を行います:
  - Issue の作成者以外の誰かが、最後のチケット更新後に返信したか確認します
  - 確認に合格した場合、チケットは次のように更新されます:
    - チケットステータスを Open に設定します
    - チケットタイプを `Task` に設定します
    - `Ticket Stage` チケットフィールドを NRT に設定します
    - RFH Issue が更新されたことを示す内部コメントを追加します

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このアクションには、Dev Pulse プロジェクトへの `Developer` レベルのアクセス権が必要です。

{{% /alert %}}

### Dev Pulse プロジェクトを変更する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。

{{% /alert %}}

Dev Pulse プロジェクトを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、変更はすぐに反映されます。

### チケットから Dev Pulse を削除する

{{% alert title="警告" color="warning" %}}

- これは、エージェントから明確にリクエストされた場合にのみ実行してください。
- 細心の注意を払い、ここに記載されているとおりにのみ進めてください。ここで行う変更をすべて同時に行わないと、チケットがすべてのビューから削除される（つまり「虚空に失われる」）可能性があります。

{{% /alert %}}

チケットで Dev Pulse の実行を停止する必要がある場合（つまり「チケットの Dev Pulse を解除する」場合）は、次の手順を実行します:

1. チケットから次のタグを削除します（存在する場合）:
   - `waiting_on_bug`
   - `waiting_on_feature_request`
   - `waiting_on_rfh`
   - `process_waiting_on_issue_or_mr`
1. チケットタイプを `Task` に変更します
1. `Ticket Stage` フィールドを `NRT` に変更します
1. 上記のすべての変更を 1 回の更新で行い、チケットで変更を送信します

その後、Zendesk インスタンスの `Links to bugs and feature requests` ビューを確認して、問題チケット（存在する場合）を見つけます。その件名は、チケットの `Waiting on issue or merge request` フィールドで以前使用されていた値です。問題チケットが表示され、**他に添付チケットがない**場合は、見つけた問題チケットを削除します。

## よくある問題とトラブルシューティング

これは、生じた必要に応じて項目が追加される継続的なセクションです。

### チケットで Dev Pulse の実行を停止する方法

これは複雑で非常に具体的なプロセスになる可能性があるため、この件については Slack を通じて Customer Support Systems チームに支援を依頼することをお勧めします。
