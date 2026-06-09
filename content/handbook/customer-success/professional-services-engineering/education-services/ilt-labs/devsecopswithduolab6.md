---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo Agent Platform"
description: "このハンズオンガイドでは、GitLab Duo Agent Platform を使って複雑なトピックを処理する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab6/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

## 目的 {#objectives}

このラボの終わりまでに、次のことを学びます:

- GitLab Duo Agent Platform を設定し、操作する
- AI エージェントを使って Issue とマージリクエストの作成を自動化する
- AI 支援によるプロジェクト計画と分析を実装する

> 完了までの目安時間: 15 分

## タスク A: Duo Agentic Chat を使って Issue とマージリクエストを作成する {#task-a-create-issues-and-merge-requests-via-duo-agentic-chat}

1. 画面上部で、**+ > New project/repository** を選択します。

1. **Create from template** タイルを選択します。

1. **Group** タブを選択します。

1. **GitLab Learn Labs / Sample Projects** を選択して開きます。

1. **DAP Swag Shop** テンプレートの横にある **Use template** を選択します。3 ページ目にあるかもしれません。

1. Project name フィールドに **DAP Demo** と入力します。

1. Project URL フィールドで、ドロップダウンから（ユーザーではなく）**group** を選択します。

1. その他はすべて既定のままにし、**Create project** を選択します。

    このワークショップを通して、GitLab Duo Chat から Agentic AI 生成のサポートを受けることになります。

1. 右上隅で、GitLab Duo Chat アイコンを選択します。

1. GitLab Duo エージェントを選択します。すでに GitLab Duo エージェントを使用している場合は、**Current GitLab Duo Chat** をクリックします。

    **注:** エージェントを選択するオプションが表示されなかった場合は、おそらく Agentic chat を使用していないためです。その場合は、入力フィールドのすぐ上にある `Agentic` スライダーをクリックして Agentic chat を有効にします。そのうえで、上記の手順を繰り返します。

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

1. Duo Chat が実行しようとしているアクションについて `Approve` を求められたら、承認してください。

    > Duo Chat が私たちの代わりに Issue を作成し、既存のブランチでマージリクエストを作成するので、作業を進められるプロジェクトのセットアップができあがります。承認はおよそ 9 回必要です。あなたが HITL（Human in the Loop、人間が介在する仕組み）です。その後、締めくくりの記述として `Completion Report` が表示されます。

1. フローが完了したら、Issue とマージリクエストを表示して、タスクが完了していることを確認します。

GitLab Duo Chat がインテリジェントエージェントとして、さまざまな開発タスクをどのように支援できるかを見ていきましょう:

## タスク B. 現在のプロジェクトの分析を Duo Chat に依頼する {#task-b-ask-duo-chat-to-analyze-your-current-project}

1. 右側のナビゲーションオプションを使って **Add New Chat** ボタンをクリックし、対話したいエージェントとして **GitLab Duo** を選択します。

1. 新しいチャットウィンドウで、次のプロンプトを尋ねます:

    ```prompt
    Analyze this project's structure and suggest improvements for maintainability and scalability
    ```

1. 出力を読んだ後、次のプロンプトで続けます:

    ```prompt
    Create an issue in this project based on your recommendations.
    ```

1. ツールの使用を承認し、Duo が作成した Issue を読みます。

1. Assignees セクションを編集し、Issue を自分自身にアサインします。

1. **Add new chat** ボタンを選択し、**Planner** エージェントを選択します。

1. チャットボックスで次のプロンプトを入力します:

    ```prompt
    Give me the Quick Wins for this project.
    ```

1. AI がプロジェクト全体のコンテキストを理解し、作業に優先順位を付ける様子がわかります。エージェントのこれらの推奨に従い、次のプロンプトを入力してエージェントとの作業を続けましょう:

    ```prompt
    Give me the link to the item in Priority 1.
    ```

## タスク C. プロジェクトの Issue の状態を確認する {#task-c-review-the-state-of-your-project-issues}

1. 左側のメニューを使って `Plan > Work items` を開きます。既存の Issue のリストが表示されます。

1. 右上隅で、**Add New Chat** アイコンをクリックし、**Planner** エージェントを選択します。このワークショップでは新しい Agentic AI 機能を活用するので、**Agentic mode** が引き続き選択されていることを確認してください。

1. 次のプロンプトを入力します:

    ```prompt
    Which issues are missing estimates, due dates or assignees?
    ```

    結果を観察してください。これにより、あなたとチームがプロジェクトの状態をよりよく把握できるようになります。

## タスク D. 開発タスクのために Duo Chat を活用する {#task-d-explore-duo-chat-for-development-tasks}

Duo Chat がさまざまな開発の計画・分析タスクをどのように支援できるかを見ていきましょう。

1. 右上隅の **Add new chat** アイコンをクリックし、**GitLab Duo** エージェントを選択します。**Agentic mode** が引き続き選択されていることを確認してください。

1. プロジェクトのテスト戦略について Duo に尋ねてみましょう:

    ```prompt
    Recommend a comprehensive testing strategy for this application, including unit, integration, and end-to-end tests
    ```

1. パフォーマンスに関するインサイトを得ます:

    ```prompt
    Analyze this Python application for potential performance bottlenecks and suggest optimizations. Output suggestions in chat.
    ```

1. デプロイのアプローチについて尋ねます:

    ```prompt
    What would be the best deployment strategy for this Python application? Include considerations for scaling and monitoring.
    ```

1. モダナイゼーションの推奨を探ります:

    ```prompt
    How can I modernize this Python application to use current best practices and frameworks?
    ```

## 任意: さらなる練習 {#optional-further-practice}

Duo ができることをさらに試してみてください。たとえば、実装計画を含む詳細な Issue を作成します:

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

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## 提案はありますか？ {#suggestions}

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
