---
title: "GitLab Duo の原則 - ハンズオンラボ: GitLab Duo Agent Platform"
description: "このハンズオンガイドでは、GitLab Duo Agent Platform を使って複雑なトピックを処理する方法を順を追って説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab6/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-12T14:06:50Z"
translator: claude
stale: false
model: claude-opus-4-7
---

## 目的 {#objectives}

このラボを終えると、次のことができるようになります:

- GitLab Duo Agent Platform を設定して操作する
- AI エージェントを使ってイシューとマージリクエストの作成を自動化する
- AI 支援によるプロジェクト計画と分析を実装する

> 完了までの推定時間: 15分

## タスク A: Duo Agentic Chat 経由でイシューとマージリクエストを作成する {#task-a-create-issues-and-merge-requests-via-duo-agentic-chat}

1. 画面上部で、**+ > New project/repository** を選択します。

1. **Create from template** タイルを選択します。

1. **Group** タブを選択します。

1. **GitLab Learn Labs / Sample Projects** を選択して開きます。

1. **DAP Swag Shop** テンプレートの横にある **Use template** を選択します。これは 3 ページ目にある場合があります。

1. Project name フィールドに **DAP Demo** と入力します。

1. Project URL フィールドで、ドロップダウンから（ユーザーではなく）**group** を選択します。

1. その他はすべてデフォルトのままにして、**Create project** を選択します。

    このワークショップを通して、GitLab Duo Chat から Agentic な AI 生成サポートを受けることになります。

1. 右上隅で、GitLab Duo Chat アイコンを選択します。

1. GitLab Duo エージェントを選択します。すでに GitLab Duo エージェントを使用している場合は、**Current GitLab Duo Chat** をクリックします。

    **NOTE:** エージェントを選択するオプションが表示されなかった場合は、おそらく Agentic chat を使用していないためです。その場合は、入力フィールドのすぐ上にある `Agentic` スライダーをクリックして Agentic chat を有効にするだけです。その後、上記の手順を繰り返します。

1. `/reset` と入力してコンテキストをクリアします。

1. 次のプロンプトをコピーしてチャットに貼り付けます:

    ```prompt
    Read the file `RunBooks/issues_and_mrs_lvl-101.json` and create GitLab issues and merge requests.

    **RULES:**
    - Process items sequentially - finish one completely before starting the next
    - Once an issue is created, move on (do NOT recreate)
    - Skip labels entirely (not supported)

    **For each item in "issues" array:**

    1. **Create Issue** - use "title" and "description" fields
    2. **Create Branch** - use exact "source_branch" name, base from main
    3. **Create MR** - use "mr_title", "mr_description" + "Closes #<issue_iid>", target main
    4. **Add Note** - only if "add_note" is true, use "note_content"

    **Expected Result:**
    - 3 issues
    - 3 branches
    - 3 MRs (each linked to its issue)
    - 1 note on the third MR

    **After completion, report:**
    - Each issue IID and URL
    - Each MR IID, URL, and linked issue
    - Any errors encountered
    ```

1. Duo Chat が実行しようとするアクションの `Approve`（承認）を求められた場合は、承認してください。

    > Duo Chat は私たちのためにイシューを作成し、既存のブランチにマージリクエストを作成します。これにより、作業可能なプロジェクトのセットアップが整います。承認は 9 回ほど行う必要があります。あなたは HITL（Human in the Loop、人間が介在する役割）です。その後、締めくくりの文として `Completion Report`（完了レポート）が表示されます。

1. フローが完了したら、イシューとマージリクエストを表示して、タスクが完了していることを確認します。

GitLab Duo Chat がインテリジェントなエージェントとして、さまざまな開発タスクをどのように支援できるかを見ていきましょう:

## タスク B. 現在のプロジェクトの分析を Duo Chat に依頼する {#task-b-ask-duo-chat-to-analyze-your-current-project}

1. 右側のナビゲーションオプションを使って **Add New Chat** ボタンをクリックし、会話相手のエージェントとして **GitLab Duo** を選択します。

1. 新しいチャットウィンドウで、次のプロンプトを尋ねます:

    ```prompt
    Analyze this project's structure and suggest improvements for maintainability and scalability
    ```

1. 出力を読んだ後、次のプロンプトでフォローアップします:

    ```prompt
    Create an issue in this project based on your recommendations.
    ```

1. ツールの使用を承認し、Duo が作成したイシューを読みます。

1. Assignees セクションを編集し、イシューを自分自身に割り当てます。

1. **Add new chat** ボタンを選択し、**Planner** エージェントを選択します。

1. チャットボックスで次のプロンプトを入力します:

    ```prompt
    Give me the Quick Wins for this project.
    ```

1. AI がプロジェクト全体のコンテキストをどのように理解し、作業の優先順位を付けるかを確認できます。エージェントのこれらの推奨に従い、次のプロンプトを入力してエージェントとの作業を続けましょう:

    ```prompt
    Give me the link to the item in Priority 1.
    ```

## タスク C. プロジェクトのイシューの状態を確認する {#task-c-review-the-state-of-your-project-issues}

1. 左側のメニューを使って `Plan > Work items` を開きます。既存のイシューの一覧が表示されます。

1. 右上隅で、**Add New Chat** アイコンをクリックし、**Planner** エージェントを選択します。このワークショップでは新しい Agentic AI 機能を活用するため、**Agentic mode** が選択されたままになっていることを確認します。

1. 次のプロンプトを入力します:

    ```prompt
    Which issues are missing estimates, due dates or assignees?
    ```

    結果を観察してください。これは、あなたとチームがプロジェクトの状態をより良く把握するのに役立ちます。

## タスク D. 開発タスクのために Duo Chat を活用する {#task-d-explore-duo-chat-for-development-tasks}

Duo Chat がさまざまな開発計画や分析タスクをどのように支援できるかを見ていきましょう。

1. 右上隅の **Add new chat** アイコンをクリックし、**GitLab Duo** エージェントを選択します。**Agentic mode** が選択されたままになっていることを確認します。

1. プロジェクトのテスト戦略について Duo に尋ねてみましょう:

    ```prompt
    Recommend a comprehensive testing strategy for this application, including unit, integration, and end-to-end tests
    ```

1. パフォーマンスに関する洞察を得ます:

    ```prompt
    Analyze this Python application for potential performance bottlenecks and suggest optimizations. Output suggestions in chat.
    ```

1. デプロイのアプローチについて尋ねます:

    ```prompt
    What would be the best deployment strategy for this Python application? Include considerations for scaling and monitoring.
    ```

1. モダナイゼーションの推奨事項を探ります:

    ```prompt
    How can I modernize this Python application to use current best practices and frameworks?
    ```

## オプション: さらなる練習 {#optional-further-practice}

Duo にできることをさらに自由に試してみてください。たとえば、実装計画付きの詳細なイシューを作成します:

```prompt
Create an issue with implementation plan for adding a product carousel to the swag shop.

Requirements:
- Horizontal carousel for product articles with prev/next navigation and touch support
- Show product image, title, price, and CTA button per item
- Responsive, accessible (ARIA, keyboard nav)
- Use existing tech stack, minimal dependencies

Issue should include:
- User story
- Acceptance criteria
- Technical implementation plan broken into subtasks
- Estimated effort per task
- Testing requirements
```

## ラボガイド完了 {#lab-guide-complete}

このラボ演習を完了しました。[このコースのその他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## 提案はありますか？ {#suggestions}

このラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
