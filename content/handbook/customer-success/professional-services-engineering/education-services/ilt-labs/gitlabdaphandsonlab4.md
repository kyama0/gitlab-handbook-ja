---
title: "GitLab Duo Agent Platform - ハンズオンラボ: カスタムフローを作成する"
description: "このハンズオンガイドでは、カスタムフローの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab4/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 30 分

## 学習目標

このラボが終了するまでに、以下のことができるようになります。

- YAML を使ってカスタムフローを設定および作成する。
- カスタムフローをグループおよびプロジェクトレベルで有効化する。
- ライブ Issue でカスタムフローをトリガーし、出力をレビューする。

## 概要

ラボ 3 では、プロンプトを通じてオンデマンドで呼び出すツールであるカスタムエージェントを構築しました。カスタムフローは異なります。これは YAML で定義された、イベント駆動型のワークフローで、一度トリガーされると人間のプロンプトなしで自動的に実行されます。

新しい Issue は、ラボ 2 で Planner Agent がフラグした同じギャップを持つものとして引き続き入ってきています。フィードバックは、誰かが手動でチェックを実行した後ではなく、何かがスプリントに到達する前に自動的に届く必要があります。

このラボでは、Swag Shop Issue Reviewer を構築します。これは、割り当てられるすべての Issue を評価し、構造化されたフィードバックを自動的に投稿するカスタムフローです。Issue の品質は、チームが覚えておく必要があるものではなく、システムが強制するものになります。

## タスク A: カスタムフローを作成する

### タスク A.1: フローを設定する

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Automate > Flows** を選択します。

1. **New flow** を選択します。

1. **Display name** フィールドに `Swag Shop Issue Reviewer` と入力します。

1. **Description** フィールドに以下を入力します。

   ```prompt
   This Issue Reviewer assists in checking your issues for completeness, and suggests improvements to ensure high-quality issues.
   ```

1. **Visibility** で **Private** を選択します。

### タスク A.2: フロー構成を追加する

フロー構成は YAML で定義されています。ここで、フローが使用するコンポーネント、それらがどのように接続されるか、出力として何を生成するかを指定します。以下の構成では、Issue を取得するステップと、Issue をレビューしてコメントを投稿するエージェントの 2 つのコンポーネントが定義されています。

今、すべての行を理解する必要はありません。注目すべき重要な点は以下のとおりです。

- `fetch_issue`: get_issue ツールを使って Issue データを取得する。
- `issue_reviewer`: Issue データを読み取り、create_issue_note ツールを使って構造化されたコメントを投稿するエージェントコンポーネント。
- `issue_review_prompt`: エージェントが Issue を評価しスコアリングする方法を定義するシステムプロンプト。

1. **Configuration** で、**Clear editor** ボタンをクリックします。

1. 以下の YAML をエディタに貼り付けます。

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

### フロー構成の理解

フローが保存されたので、設定したものを少し時間をかけて理解しましょう。YAML は 3 つのことを定義しています: 作業を行うコンポーネント、エージェントを駆動するプロンプト、それらを接続する router です。

#### Version と Environment

各フローは version と environment の宣言から始まります。

```yml
version: "v1"
environment: ambient
```

version は使用しているフロー YAML 構成のバージョンを定義します。これは常に `v1` に設定します。`environment` には、`chat`、`chat-partial`、`ambient` の 3 つの可能な値があります。これらのフィールドの詳細は [YAML 仕様](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#environment) で確認できます。この例では `ambient` を選択しました。これは、エージェントがバックグラウンドで割り当てを完了する、手を動かさない体験のために設計されています。

#### コンポーネント

コンポーネントは、フロー内で特定のタスクを実行する再利用可能なビルディングブロックです。私たちは `fetch_issue` と `issue_reviewer` の 2 つのコンポーネントを定義しました。

各コンポーネントには[コンポーネントタイプ](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#component-types)があり、コンポーネントがどのように振る舞うかを定義します。まず、`fetch_issue` コンポーネントを考えてみましょう。

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

`fetch_issue` コンポーネントは `DeterministicStepComponent` です。これはそれが事前に決められた引数で決定論的に単一のステップを実行することを意味します。`tool_name` フィールドはコンポーネントが使用するツールを定義します。このケースでは、コンポーネントは Issue の詳細を取得するために `get_issue` を使用します。`inputs` はコンポーネントがそのタスクを達成するために使用すべきデータを定義します。このケースでは、プロジェクト ID と Issue IID を取得します。`as` キーワードはエイリアスで、各入力に読みやすい名前を提供します。最後に、`ui_log_events` は UI でどのイベントがログされるべきかを決定します。このケースでは、実行成功と失敗がログされます。

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

`issue_reviewer` コンポーネントは `AgentComponent` です。`AgentComponent` は LLM を使って入力を処理しレスポンスを生成します。前のコンポーネントと同様に、使用する一連の入力を提供します。このケースでは、Issue のノートを作成する `create_issue_note` ツールセットが使用されます。ツールの成功、失敗、およびコンポーネントによって生成された最終回答をログします。このコンポーネントは LLM を使用するので、`prompt_id` フィールドによって定義された使用するプロンプトを提供します。この ID に関連付けられたプロンプトは、以下に定義されます。

#### プロンプト

各プロンプトにはプロンプト ID が与えられます。私たちのプロンプトには、`issue_reviewer` コンポーネントに与えられたプロンプト ID と一致する `issue_review_prompt` の ID があります。

次に、プロンプトを定義します。`system` フィールドはエージェントの振る舞いと個性を定義するプロンプトを定義します。`user` フィールドはユーザープロンプトが配置される場所と、それを解釈する方法を定義します。`placeholder` フィールドを `history` に設定すると、以前のチャット履歴をフロープロンプトに含めることができます。最後に、タイムアウトを 180 秒として提供します。

#### Router

`router` と `flow` フィールドは、データが開始から終了までどのように流れるかについての詳細を提供します。

```yml
routers:
  - from: "fetch_issue"
    to: "issue_reviewer"
  - from: "issue_reviewer"
    to: "end"

flow:
  entry_point: "fetch_issue"
```

`flow` はエントリポイントを定義します。この例では `fetch_issue` です。`router` はそこから取るアクションを定義します。フローは `fetch_issue` から始まり、`issue_reviewer` に渡され、その後 `end` に移動してフローを終了することがわかります。

カスタムフローは多くのカスタマイズを提供します。詳細については、[YAML 仕様とドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/flow_registry/v1.md#flow-registry-framework-v1-version-documentation)を参照してください。

### タスク A.3: カスタムフローを有効化する

グループレベルでフローを有効化すると、グループ内のすべてのプロジェクトで利用可能になります。これは、ラボ 3 でカスタムエージェントを有効化するために使用したのと同じプロセスです。

1. フローを作成したのと同じページから、右上隅の **Enable** をクリックします。

1. 次に、確認のため再度 **Enable** をクリックします。

  >**注:** 2 段階の確認により、準備が整う前に誤ってフローを公開してしまうことが防がれます。最初のクリックで確認プロンプトが開き、2 回目のクリックで有効化が確定します。

### 期待される出力: タスク A

- **Swag Shop Issue Reviewer** という名前の新しいフローが **Automate > Flows** に存在する。
- フロー構成が上記の YAML で保存され、可視性が Private に設定されている。
- フローがグループレベルで有効化されている。

## タスク B: カスタムフローを使用する

この時点で、設定され有効化されたフローがあります。このタスクでは、既存の Issue でそれをトリガーし、レビュープロセスをどのように自動化するかを観察します。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Plan > Work items** を選択します。

1. 既存のオープン Issue を選択します。

1. Issue の **Assignees** セクションで、**Swag Shop Issue Reviewer** フローを割り当てます。見つけるためにスクロールダウンが必要な場合があります。

    > **なぜ Assignees フィールドでフローを割り当てるのか?** フローは GitLab のイベントによってトリガーされます。このフローでは、トリガーイベントが Issue に割り当てられることであり、これは人を割り当てるのと同じメカニズムです。Assignees フィールドでフローを選択すると、GitLab がトリガーイベントを発火し、フローの実行が自動的に始まります。

1. 新しいフローセッションが開始されたことを確認するコメントが Issue に表示され、セッションの進捗へのリンクが含まれます。

    >**注:** **Automate > Sessions** に移動し、Swag Shop Issue Reviewer のセッションを見つけて、開くこともできます。

1. Issue に戻り、フローによって投稿されたコメントをレビューします。

コメントには 6 点満点の completeness スコア、満たされている基準をリストする「Looks good」セクション、欠落している各基準に対する具体的な提案を含む「Needs attention」セクション、そしてオプションで「Suggested acceptance criteria」セクションが含まれます。スコアは選択した Issue によって異なります。

  >**注:** フローの完了には数分かかる場合があります。セッションが Finished と表示された後でもコメントが表示されない場合は、Issue ページをリフレッシュしてください。

### 期待される出力: タスク B

- Swag Shop Issue Reviewer フローが Issue の Assignees フィールドに割り当てられている。
- **Automate > Sessions** でフローセッションが Finished のステータスで表示されている。
- 構造化されたコメントが Issue に投稿されており、completeness スコア、Looks good セクション、欠落している基準それぞれに対する具体的な提案を含む Needs attention セクションが含まれている。

## ラボガイド完了

このラボの演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を見ることができます。

## 提案?

ラボへの変更を加えたい場合は、マージリクエスト経由で変更を提出してください。
