---
title: "GitLab Duo Principles - ハンズオンラボ: GitLab Duo Agent Platform"
description: "このハンズオンガイドでは、GitLab Duo Agent Platform を使って複雑なトピックを処理する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab6/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-09T10:04:35-04:00
translated_at: "2026-06-12T21:18:07Z"
translator: claude
stale: false
---

## 目標

このラボの終わりまでに、次の方法を学びます:

- GitLab Duo Agent Platform の設定と操作
- AI エージェントを使用した Issue とマージリクエスト作成の自動化
- AI 支援によるプロジェクト計画と分析の実装

> 所要時間の目安: 15 分

## タスク A: Duo Agentic Chat で Issue とマージリクエストを作成する

1. 画面上部で **+ > New project/repository** を選択します。

1. **Create from template** タイルを選択します。

1. **Group** タブを選択します。

1. **GitLab Learn Labs / Sample Projects** を選択して開きます。

1. **DAP Swag Shop** テンプレートの横にある **Use template** を選択します。3 ページ目にある場合があります。

1. Project name フィールドに **DAP Demo** と入力します。

1. Project URL フィールドで、ドロップダウンから（ユーザーではなく）**group** を選択します。

1. その他はすべてデフォルトのままにして、**Create project** を選択します。

    このワークショップ全体を通じて、GitLab Duo Chat から Agentic な AI 生成サポートを受けます。

1. 右上隅で、GitLab Duo Chat アイコンを選択します。

1. GitLab Duo エージェントを選択します。すでに GitLab Duo エージェントを使用している場合は、**Current GitLab Duo Chat** をクリックします。

    **注意:** エージェントを選択するオプションが表示されなかった場合、おそらく Agentic chat を使用していないためです。その場合は、入力フィールドのすぐ上にある `Agentic` スライダーをクリックして Agentic chat を有効にしてください。その後、上記の手順を繰り返します。

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

1. Duo Chat が実行しようとしているアクションの `Approve` を求められた場合は、承認してください。

    > Duo Chat は私たちのために既存のブランチ上に Issue とマージリクエストを作成し、作業できるプロジェクトセットアップを整えます。承認が必要なのは 9 回程度です。あなたは HITL（Human in the Loop）です。その後、締めくくりとして `Completion Report` が表示されます。

1. フローが完了したら、Issue とマージリクエストを表示して、タスクが完了したことを確認します。

GitLab Duo Chat がさまざまな開発タスクを支援するインテリジェントエージェントとしてどのように機能するかを見ていきましょう:

## タスク B. Duo Chat に現在のプロジェクトを分析させる

1. 右側のナビゲーションオプションを使用して **Add New Chat** ボタンをクリックし、会話したいエージェントとして **GitLab Duo** を選択します。

1. 新しいチャットウィンドウで次のプロンプトを尋ねます:

    ```prompt
    Analyze this project's structure and suggest improvements for maintainability and scalability
    ```

1. 出力を読んだ後、次のプロンプトでフォローアップします:

    ```prompt
    Create an issue in this project based on your recommendations.
    ```

1. ツールの使用を承認し、Duo が作成した Issue を読みます。

1. Assignees セクションを編集し、Issue を自分自身に割り当てます。

1. **Add new chat** ボタンを選択し、**Planner** エージェントを選択します。

1. チャットボックスで次のプロンプトを入力します:

    ```prompt
    Give me the Quick Wins for this project.
    ```

1. AI がプロジェクト全体のコンテキストを理解し、作業に優先順位を付ける様子が分かります。エージェントのこれらの推奨事項に従い、次のプロンプトを入力してエージェントとの作業を続けましょう:

    ```prompt
    Give me the link to the item in Priority 1.
    ```

## タスク C. プロジェクトの Issue の状態を確認する

1. 左側のメニューを使用して `Plan > Work items` を開きます。既存の Issue のリストが表示されます。

1. 右上隅で **Add New Chat** アイコンをクリックし、**Planner** エージェントを選択します。このワークショップでは新しい Agentic AI 機能を活用するので、**Agentic mode** が引き続き選択されていることを確認してください。

1. 次のプロンプトを入力します:

    ```prompt
    Which issues are missing estimates, due dates or assignees?
    ```

    結果を観察します。これはあなたとチームがプロジェクトの状態をより把握するのに役立ちます。

## タスク D. 開発タスクのために Duo Chat を探る

Duo Chat がさまざまな開発計画・分析タスクをどのように支援できるかを探りましょう。

1. 右上隅の **Add new chat** アイコンをクリックし、**GitLab Duo** エージェントを選択します。**Agentic mode** が引き続き選択されていることを確認してください。

1. プロジェクトのテスト戦略について Duo に尋ねてみます:

    ```prompt
    Recommend a comprehensive testing strategy for this application, including unit, integration, and end-to-end tests
    ```

1. パフォーマンスに関するインサイトを得ます:

    ```prompt
    Analyze this Python application for potential performance bottlenecks and suggest optimizations. Output suggestions in chat.
    ```

1. デプロイメントアプローチについて尋ねます:

    ```prompt
    What would be the best deployment strategy for this Python application? Include considerations for scaling and monitoring.
    ```

1. モダナイゼーションの推奨事項を探ります:

    ```prompt
    How can I modernize this Python application to use current best practices and frameworks?
    ```

## オプション: さらなる練習

Duo ができることをさらに自由に試してみてください。たとえば、実装計画を含む詳細な Issue を作成します:

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

## ラボガイド完了

このラボ演習は完了です。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を確認できます。

## ご提案はありますか？

ラボに変更を加えたい場合は、マージリクエストで変更を提出してください。
