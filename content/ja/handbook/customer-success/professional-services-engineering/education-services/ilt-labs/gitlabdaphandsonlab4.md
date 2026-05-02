---
title: "GitLab Duo Agent Platform - ハンズオンラボ: カスタムフローを作成する"
description: "このハンズオンガイドでは、カスタムフローの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab4/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:51:58Z"
translator: claude
stale: false
---

> 完了目安時間: 30 分

## 学習目標

このラボを修了すると、次のことができるようになります。

- YAML を使用してカスタムフローを設定して作成する。
- グループおよびプロジェクトレベルでカスタムフローを有効化する。
- ライブの Issue でカスタムフローをトリガーして出力をレビューする。

## 概要

ラボ 3 では、プロンプトを通じてオンデマンドで呼び出すツールであるカスタムエージェントを構築しました。カスタムフローはこれとは異なります。カスタムフローは YAML で定義されたイベント駆動のワークフローで、人間のプロンプトを必要とせず、トリガーされると自動的に実行されます。

ラボ 2 で Planner Agent がフラグを立てたのと同じギャップを持つ新しい Issue がすでに入ってきています。フィードバックは誰かが手動でチェックを実行した後ではなく、スプリントに到達する前に自動的に届く必要があります。

このラボでは、Swag Shop Issue Reviewer を構築します: 割り当てられたすべての Issue を評価して、構造化されたフィードバックを自動的に投稿するカスタムフローです。Issue の品質はシステムが強制するものになり、チームが覚えておくべきものではなくなります。

## タスク A: カスタムフローを作成する

### タスク A.1: フローを設定する

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Automate > Flows** を選択します。

1. **New flow** を選択します。

1. **Display name** フィールドに `Swag Shop Issue Reviewer` と入力します。

1. **Description** フィールドに次のように入力します。

   ```prompt
   This Issue Reviewer assists in checking your issues for completeness, and suggests improvements to ensure high-quality issues.
   ```

1. **Visibility** で **Private** を選択します。

### タスク A.2: フロー設定を追加する

フロー設定は YAML で定義されます。ここでは、フローが使用するコンポーネント、それらの接続方法、出力として生成するものを指定します。以下の設定では 2 つのコンポーネントを定義しています: Issue を取得するステップと、Issue をレビューしてコメントを投稿するエージェント。

今すぐすべての行を理解する必要はありません。注目すべき重要事項は以下の通りです。

- `fetch_issue`: get_issue ツールを使用して Issue データを取得します。
- `issue_reviewer`: Issue データを読み取り、create_issue_note ツールを使用して構造化されたコメントを投稿するエージェントコンポーネント。
- `issue_review_prompt`: エージェントが Issue を評価してスコアリングする方法を定義するシステムプロンプト。

1. **Configuration** で、**Clear editor** ボタンをクリックします。

1. 次の YAML をエディターに貼り付けます。

    ```yaml
    version: "v1"
    environment: ambient

    components:
      - name: "fetch_issue"
        type: DeterministicStepComponent
        tool_name: "get_issue"
        inputs:
          - from: "context:project_id"
            as: "project_id"
          - from: "context:goal"
            as: "issue_iid"
        ui_log_events:
          - "on_tool_execution_success"
          - "on_tool_execution_failed"

      - name: "issue_reviewer"
        type: AgentComponent
        prompt_id: "issue_review_prompt"
        inputs:
          - from: "context:fetch_issue.tool_responses"
            as: "issue_data"
          - from: "context:project_id"
            as: "project_id"
          - from: "context:goal"
            as: "issue_iid"
        toolset:
          - "create_issue_note"
        ui_log_events:
          - "on_tool_execution_success"
          - "on_tool_execution_failed"
          - "on_agent_final_answer"

    prompts:
      - prompt_id: "issue_review_prompt"
        name: "Issue Review Prompt"
        unit_primitives: []
        prompt_template:
          system: |
            You are a helpful project management assistant integrated into GitLab.
            Your job is to review a GitLab issue for completeness and quality, then post
            a single constructive public comment with improvement suggestions.

            Evaluate the issue against these criteria:
            - Has a clear, detailed description (not empty or vague)
            - Has defined acceptance criteria
            - Has at least one label applied
            - Has an assignee
            - Has a milestone or due date
            - Title is specific and descriptive

            Steps you must follow:
            1. Review the issue data provided to you
            2. Evaluate it against every criterion above
            3. Post exactly one public comment on the issue (project_id: {{project_id}}, issue_iid: {{issue_iid}}) using this structure:

            ## Issue Review

            **Completeness Score: X/6**

            ### Looks good
            - <list criteria that are met>

            ### Needs attention
            - <list criteria that are missing, with a specific suggestion for each>

            ### Suggested acceptance criteria (if missing)
            <only include this section if acceptance criteria are absent>

            ---
            *This review was automatically generated. Please review and apply relevant suggestions.*

            If the issue scores 5 or higher out of 6, open the comment with a positive note.
            If it scores below 3, add a note encouraging the author to refine before development begins.
            Keep the tone friendly, constructive, and concise.
          user: |
            Here is the issue data to review:
            {{issue_data}}

            Post your review as a comment on project_id {{project_id}}, issue IID {{issue_iid}}.
          placeholder: history
        params:
          timeout: 180

    routers:
      - from: "fetch_issue"
        to: "issue_reviewer"
      - from: "issue_reviewer"
        to: "end"

    flow:
      entry_point: "fetch_issue"
    ```

1. **Create flow** を選択して保存します。

### フロー設定を理解する

フローが保存されたら、設定した内容を理解するために数分かけてください。YAML は 3 つのことを定義しています: 作業を行うコンポーネント、エージェントを駆動するプロンプト、それらを接続するルーター。

#### バージョンと環境

すべてのフローはバージョンと環境の宣言から始まります。

```yml
version: "v1"
environment: ambient
```

バージョンは使用しているフロー YAML 設定のバージョンを定義します。常に `v1` に設定します。`environment` には 3 つの値があります: `chat`、`chat-partial`、`ambient`。これらのフィールドの詳細は [YAML 仕様](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#environment)をご覧ください。この例では `ambient` を選択しました。これはハンズオフのエクスペリエンス向けに設計されており、割り当てはバックグラウンドでエージェントによって完了されます。

#### コンポーネント

コンポーネントはフロー内の特定のタスクを実行する再利用可能なビルディングブロックです。`fetch_issue` と `issue_reviewer` の 2 つのコンポーネントを定義しました。

各コンポーネントには[コンポーネントタイプ](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#component-types)があり、コンポーネントがどのように動作するかを定義します。まず、`fetch_issue` コンポーネントを考えてみましょう。

```yml
components:
  - name: "fetch_issue"
    type: DeterministicStepComponent
    tool_name: "get_issue"
    inputs:
      - from: "context:project_id"
        as: "project_id"
      - from: "context:goal"
        as: "issue_iid"
    ui_log_events:
      - "on_tool_execution_success"
      - "on_tool_execution_failed"
```

`fetch_issue` コンポーネントは `DeterministicStepComponent` です。これは、事前に決定された引数で確定的に 1 つのステップを実行することを意味します。`tool_name` フィールドはコンポーネントが使用するツールを定義します。この場合、コンポーネントは `get_issue` を使用して Issue の詳細を取得します。`inputs` はコンポーネントがタスクを達成するために使用するデータを定義します。この場合、プロジェクト ID と Issue IID を取得します。`as` キーワードは各入力に読みやすい名前を提供するエイリアスです。最後に、`ui_log_events` は UI にログ記録するイベントを決定します。この場合、実行の成功と失敗がログ記録されます。

次に、`issue_reviewer` コンポーネントを見てみましょう。

```yml
  - name: "issue_reviewer"
    type: AgentComponent
    prompt_id: "issue_review_prompt"
    inputs:
      - from: "context:fetch_issue.tool_responses"
        as: "issue_data"
      - from: "context:project_id"
        as: "project_id"
      - from: "context:goal"
        as: "issue_iid"
    toolset:
      - "create_issue_note"
    ui_log_events:
      - "on_tool_execution_success"
      - "on_tool_execution_failed"
      - "on_agent_final_answer"
```

`issue_reviewer` コンポーネントは `AgentComponent` です。`AgentComponent` は LLM を使用して入力を処理しレスポンスを生成します。前のコンポーネントと同様に、使用する入力セットを提供します。この場合、`create_issue_note` ツールセットを使用して Issue ノートを作成します。ツールの成功、失敗、コンポーネントが生成した最終回答をログ記録します。このコンポーネントは LLM を使用するため、`prompt_id` フィールドで定義されたプロンプトを提供します。このIDに関連するプロンプトは以下に定義されています。

#### プロンプト

各プロンプトにはプロンプト ID が付与されます。私たちのプロンプトの ID は `issue_review_prompt` であり、これは `issue_reviewer` コンポーネントに付与されたプロンプト ID と一致します。

次に、プロンプトを定義します。`system` フィールドはエージェントの動作と性格を定義するプロンプトを定義します。`user` フィールドはユーザープロンプトがどこに配置されるか、およびそれをどのように解釈するかを定義します。`placeholder` フィールドを `history` に設定すると、以前のチャット履歴がフロープロンプトに含まれるようになります。最後に、タイムアウトを提供します（この場合 180 秒）。

#### ルーター

`router` と `flow` フィールドは、データが最初から最後までどのように流れるかの詳細を提供します。

```yml
routers:
  - from: "fetch_issue"
    to: "issue_reviewer"
  - from: "issue_reviewer"
    to: "end"

flow:
  entry_point: "fetch_issue"
```

`flow` はエントリポイントを定義します（この例では `fetch_issue`）。`router` はそこからどのようなアクションを取るかを定義します。フローは `fetch_issue` から始まり、`issue_reviewer` に送られ、その後 `end` に移動してフローを終了します。

カスタムフローは大量のカスタマイズを提供します。詳細については、[YAML 仕様とドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#flow-registry-framework-v1-version-documentation)を参照してください。

### タスク A.3: カスタムフローを有効化する

グループレベルでフローを有効化すると、グループ内のすべてのプロジェクトで利用可能になります。これはラボ 3 でカスタムエージェントを有効化したときと同じプロセスです。

1. フローを作成したページと同じページから、右上隅の **Enable** をクリックします。

1. 確認のために **Enable** を再度クリックします。

  >**注:** 2 段階の確認により、フローの準備が整う前に誤って公開することを防ぎます。最初のクリックで確認プロンプトが開き、2 回目のクリックで有効化がコミットされます。

### タスク A の期待される出力

- **Automate > Flows** に **Swag Shop Issue Reviewer** という名前の新しいフローが存在する。
- フロー設定が上記の YAML で保存され、可視性が Private に設定されている。
- フローがグループレベルで有効化されている。

## タスク B: カスタムフローを使用する

この時点で、設定済みで有効化されたフローができました。このタスクでは、既存の Issue でそれをトリガーして、レビュープロセスをどのように自動化するかを観察します。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Plan > Work items** を選択します。

1. 既存のオープン Issue を選択します。

1. Issue の **Assignees** セクションで、**Swag Shop Issue Reviewer** フローを割り当てます。スクロールして見つける必要がある場合があります。

    > **なぜ Assignees フィールドでフローを割り当てるのか？** フローは GitLab イベントによってトリガーされます。このフローの場合、トリガーイベントは Issue への割り当てであり、人を割り当てるのと同じメカニズムです。Assignees フィールドでフローを選択すると、GitLab がトリガーイベントを発火させ、フローが自動的に実行を開始します。

1. フローセッションが開始されたことを確認するコメントが Issue に表示され、セッションの進捗へのリンクが含まれます。

  >**注:** **Automate > Sessions** に移動して Swag Shop Issue Reviewer のセッションを見つけて開くこともできます。

1. **Activity** タブをクリックして、リアルタイムで実行されているステップを観察します: Issue の取得、データ分析、コメント生成。

1. **Details** タブをクリックして、セッションのステータスが **Finished** に変わるまで待ちます。

1. Issue に戻って、フローが投稿したコメントをレビューします。

コメントには 6 点満点の完全性スコア、充足している基準を一覧表示する「Looks good」セクション、不足している各基準に対する具体的なサジェスチョンを含む「Needs attention」セクション、および任意で「Suggested acceptance criteria」セクションが含まれます。スコアは選択した Issue によって異なります。

  >**注:** フローは完了するまで数分かかる場合があります。セッションが Finished を示した後もコメントが表示されない場合は、Issue ページをリフレッシュしてください。

### タスク B の期待される出力

- Swag Shop Issue Reviewer フローが Assignees フィールドで Issue に割り当てられている。
- **Automate > Sessions** に Finished ステータスのフローセッションが表示されている。
- 完全性スコア、Looks good セクション、具体的なサジェスチョンを含む Needs attention セクションを含む構造化されたコメントが Issue に投稿されている。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
