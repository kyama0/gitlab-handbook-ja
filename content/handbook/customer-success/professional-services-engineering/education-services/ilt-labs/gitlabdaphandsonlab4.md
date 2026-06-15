---
title: "GitLab Duo Agent Platform - ハンズオンラボ: カスタムフローを作成する"
description: "このハンズオンガイドでは、カスタムフローの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab4/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T19:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T14:13:50-04:00"
---

> 完了目安時間: 20 分

## 学習目標

このラボを完了すると、次のことができるようになります。

- YAML を使用してカスタムフローを構成して作成する。
- グループレベルおよびプロジェクトレベルでカスタムフローを有効化する。
- ライブの Issue でカスタムフローをトリガーし、出力を確認する。

## 概要

ラボ 3 では、プロンプトを通じてオンデマンドで呼び出すツールであるカスタムエージェントを構築しました。カスタムフローはそれとは異なります。これは YAML で定義されたイベント駆動型のワークフローで、いったんトリガーされると、人間のプロンプトを必要とせずに自動的に実行されます。

ラボ 2 で Planner エージェントがフラグを付けたのと同じギャップを抱えた新しい Issue がすでに入ってきています。フィードバックは、誰かが手動でチェックを実行した後ではなく、何かがスプリントに到達する前に、自動的に届く必要があります。

このラボでは、Swag Shop Issue Reviewer を構築します。これは、割り当てられたすべての Issue を評価し、構造化されたフィードバックを自動的に投稿するカスタムフローです。Issue の品質は、チームが覚えておかなければならないものではなく、システムが強制するものになります。

## タスク A: カスタムフローを作成する

### タスク A.1: フローを構成する

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Automate > Flows** を選択します。

1. **New flow** を選択します。

1. **Display name** フィールドに `Swag Shop Issue Reviewer` と入力します。

1. **Description** フィールドに次の内容を入力します。

   ```prompt
   This Issue Reviewer assists in checking your issues for completeness, and suggests improvements to ensure high-quality issues.
   ```

1. **Visibility** で **Private** を選択します。

### タスク A.2: フロー構成を追加する

フロー構成は YAML で定義されます。ここで、フローが使用するコンポーネント、それらがどのように接続されるか、そして出力として何を生成するかを指定します。以下の構成では、Issue を取得するステップと、それをレビューしてコメントを投稿するエージェントの 2 つのコンポーネントを定義します。

今すべての行を理解することを心配する必要はありません。注目すべき重要な点は次のとおりです。

- `fetch_issue`: get_issue ツールを使用して Issue データを取得します。
- `issue_reviewer`: Issue データを読み取り、create_issue_note ツールを使用して構造化されたコメントを投稿するエージェントコンポーネントです。
- `issue_review_prompt`: エージェントが Issue をどのように評価し、スコア付けするかを定義するシステムプロンプトです。

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

### フロー構成を理解する

フローが保存されたので、構成した内容を理解するために数分かけてみましょう。この YAML は 3 つのことを定義しています。作業を実行するコンポーネント、エージェントを駆動するプロンプト、そしてそれらを接続するルーターです。

#### バージョンと環境

すべてのフローはバージョンと環境の宣言で始まります。

```yml
version: "v1"
environment: ambient
```

バージョンは、使用しているフロー YAML 構成のバージョンを定義します。これは常に `v1` に設定します。`environment` には、`chat`、`chat-partial`、`ambient` の 3 つの可能な値があります。これらのフィールドの詳細は [YAML 仕様](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#environment)にあります。この例では `ambient` を選択しました。これは、エージェントがバックグラウンドで割り当てを完了する、手放しの体験向けに設計されています。

#### コンポーネント

コンポーネントは、フロー内で特定のタスクを実行する再利用可能なビルディングブロックです。`fetch_issue` と `issue_reviewer` の 2 つのコンポーネントを定義しました。

各コンポーネントには[コンポーネントタイプ](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#component-types)があり、これがコンポーネントの振る舞いを定義します。まず、`fetch_issue` コンポーネントを見てみましょう。

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

`fetch_issue` コンポーネントは `DeterministicStepComponent` です。これは、あらかじめ決められた引数を使って単一のステップを確定的に実行することを意味します。`tool_name` フィールドは、コンポーネントが使用するツールを定義します。この場合、コンポーネントは `get_issue` を使用して Issue の詳細を取得します。`inputs` は、コンポーネントがタスクを達成するために使用すべきデータを定義します。この場合、プロジェクト ID と Issue IID を取得します。`as` キーワードはエイリアスで、各入力に読みやすい名前を付けます。最後に、`ui_log_events` は、UI でどのイベントをログに記録すべきかを決定します。この場合、実行の成功と失敗がログに記録されます。

次に、`issue_reviewer` コンポーネントを見ることができます。

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

`issue_reviewer` コンポーネントは `AgentComponent` です。`AgentComponent` は LLM を使用して入力を処理し、応答を生成します。前のコンポーネントと同様に、使用する一連の入力を提供します。この場合、`create_issue_note` ツールセットが使用され、Issue ノートを作成します。ツールの成功、失敗、そしてコンポーネントが生成した最終回答をログに記録します。このコンポーネントは LLM を使用するため、`prompt_id` フィールドで定義された使用するプロンプトを提供します。この ID に関連付けられたプロンプトは以下で定義されています。

#### プロンプト

各プロンプトにはプロンプト ID が付与されます。私たちのプロンプトには `issue_review_prompt` という ID があり、これは `issue_reviewer` コンポーネントに与えられたプロンプト ID と一致しています。

次に、プロンプトを定義します。`system` フィールドは、エージェントの振る舞いと個性を定義するプロンプトを定義します。`user` フィールドは、ユーザープロンプトが配置される場所と、それをどのように解釈するかを定義します。`placeholder` フィールドを `history` に設定すると、以前のチャット履歴をフロープロンプトに含めることができます。最後に、タイムアウトを提供します。この場合は 180 秒です。

#### ルーター

`router` と `flow` フィールドは、データが最初から最後までどのように流れるかについての詳細を提供します。

```yml
routers:
  - from: "fetch_issue"
    to: "issue_reviewer"
  - from: "issue_reviewer"
    to: "end"

flow:
  entry_point: "fetch_issue"
```

`flow` はエントリーポイントを定義します。この例では `fetch_issue` です。`router` は、そこからどのアクションを取るかを定義します。フローは `fetch_issue` から始まり、`issue_reviewer` に流れ込み、その後 `end` に移動してフローを終了することがわかります。

カスタムフローは大量のカスタマイズを提供します。詳細については、[YAML 仕様とドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#flow-registry-framework-v1-version-documentation)を参照してください。

### タスク A.3: カスタムフローを有効化する

グループレベルでフローを有効化すると、グループ内のすべてのプロジェクトでフローが利用可能になります。これは、ラボ 3 でカスタムエージェントを有効化したのと同じプロセスです。

1. フローを作成したのと同じページで、右上隅の **Enable** をクリックします。

1. 続いて、もう一度 **Enable** をクリックして確認します。

  > **注:** 2 段階の確認により、準備ができる前に誤ってフローを公開してしまうことを防ぎます。1 回目のクリックで確認プロンプトが開き、2 回目のクリックで有効化が確定します。

### 期待される出力: タスク A

- **Swag Shop Issue Reviewer** という名前の新しいフローが **Automate > Flows** 配下に存在します。
- フロー構成が上記の YAML で保存され、可視性が Private に設定されています。
- フローがグループレベルで有効化されています。

## タスク B: カスタムフローを使用する

この時点で、構成され有効化されたフローができました。このタスクでは、既存の Issue でそれをトリガーし、レビュープロセスをどのように自動化するかを観察します。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Plan > Work items** を選択します。

1. 既存のオープンな Issue を選択します。

1. Issue の **Assignees** セクションで、**Swag Shop Issue Reviewer** フローを割り当てます。見つけるにはスクロールダウンが必要な場合があります。

    > **なぜ Assignees フィールドでフローを割り当てるのか?** フローは GitLab イベントによってトリガーされます。このフローの場合、トリガーイベントは Issue に割り当てられることであり、これは人を割り当てるのに使用するのと同じメカニズムです。Assignees フィールドでフローを選択すると、GitLab がトリガーイベントを発火し、フローが自動的に実行を開始します。

1. 新しいフローセッションが開始されたことを確認するコメントが Issue に表示され、セッションの進行状況へのリンクが含まれます。

    > **注:** **Automate > Sessions** に移動し、Swag Shop Issue Reviewer のセッションを見つけて開くこともできます。

1. Issue に戻り、フローが投稿したコメントを確認します。

コメントには、6 点満点の完全性スコア、満たされた基準を一覧表示する「Looks good」セクション、欠落している各基準に対する具体的な提案を含む「Needs attention」セクション、そしてオプションで「Suggested acceptance criteria」セクションが含まれます。スコアは選択した Issue によって異なります。

  > **注:** フローの完了には数分かかる場合があります。セッションが Finished と表示された後もコメントが表示されない場合は、Issue ページを更新してください。

### 期待される出力: タスク B

- Swag Shop Issue Reviewer フローが Issue の Assignees フィールドに割り当てられています。
- ステータスが Finished のフローセッションが **Automate > Sessions** 配下に表示されます。
- 完全性スコア、Looks good セクション、具体的な提案を含む Needs attention セクションを含む構造化されたコメントが Issue に投稿されています。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
