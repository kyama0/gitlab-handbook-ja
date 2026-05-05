---
title: "GitLab Duo の原則 - ハンズオンラボ: GitLab Duo Agent Platform"
description: "このハンズオンガイドでは、GitLab Duo Agent Platform を使って複雑なトピックを処理する手順を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduolab6/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-26T04:33:12Z
translator: claude
stale: false
---

## 目標

このラボを終えると、次のことができるようになります:

- GitLab Duo Agent Platform を設定して操作する
- AI エージェントを使って Issue とマージリクエストの作成を自動化する
- AI を活用したプロジェクトの計画と分析を実装する

> 完了までの推定時間: 15 分

## タスク A: Duo Agentic Chat で Issue とマージリクエストを作成する

1. 画面上部の **+ > New project/repository** を選択します。

1. **Create from template** タイルを選択します。

1. **Instance** タブを選択します。

1. **GitLab Swag Shop** テンプレートの横にある **Use template** を選択します。

1. Project name フィールドに **DAP Demo** と入力します。

1. Project URL フィールドで、ドロップダウンから **グループ**（ユーザーではなく）を選択します。

1. それ以外はすべてデフォルトのままにして **Create project** を選択します。

    このワークショップ全体を通して、GitLab Duo Chat からエージェント型の AI サポートが提供されます。

1. 右上の角にある GitLab Duo Chat アイコンを選択します。

1. GitLab Duo エージェントを選択します。すでに GitLab Duo エージェントを使用している場合は **Current GitLab Duo Chat** をクリックします。

    **注意:** エージェントを選択するオプションが表示されない場合、Agentic チャットを使用していない可能性があります。その場合は、入力フィールドのすぐ上にある `Agentic` スライダーをクリックして Agentic チャットを有効にし、上記の手順を繰り返してください。

1. `/reset` を入力してコンテキストをクリアします。

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

    > Duo Chat が Issue とマージリクエストを既存のブランチに作成するので、作業できるプロジェクトのセットアップが整います。約 9 回の承認が必要になります。あなたは HITL（Human in the Loop：ループ内の人間）です。最終的には `Completion Report`（完了レポート）が表示されます。

1. フローが完了したら、Issue とマージリクエストを確認して、タスクが完了していることを確認します。

GitLab Duo Chat がインテリジェントなエージェントとしてさまざまな開発タスクをどのように支援するかを探っていきましょう:

## タスク B. Duo Chat に現在のプロジェクトを分析させる

1. 右側のナビゲーションオプションから **Add New Chat** ボタンをクリックし、会話したいエージェントとして **GitLab Duo** を選択します。

1. 新しいチャットウィンドウに次のプロンプトを入力します:

    ```prompt
    Analyze this project's structure and suggest improvements for maintainability and scalability
    ```

1. 出力を読んだ後、このプロンプトでフォローアップします:

    ```prompt
    Create an issue in this project based on your recommendations.
    ```

1. ツールの使用を承認し、Duo が作成した Issue を確認します。

1. Assignees セクションを編集して、Issue を自分自身にアサインします。

1. 再度 **Add new chat** ボタンをクリックして **GitLab Planner Agent** を選択します。

1. チャットボックスに次のプロンプトを入力します:

    ```prompt
    Give me the Quick Wins for this project.
    ```

1. AI がプロジェクト全体のコンテキストを理解して作業に優先順位を付ける様子を確認できます。エージェントの推奨事項に従い、次のプロンプトを入力してエージェントとの作業を続けます:

    ```prompt
    Give me the link to the item in Priority 1.
    ```

## タスク C. プロジェクトの Issue の状態を確認する

1. 左側のメニューから `Plan > Work items` を開きます。既存の Issue の一覧が表示されます。

1. 右上の角にある **Add New Chat** アイコンをクリックして **Planner** エージェントを選択します。このワークショップでは新しい Agentic AI 機能を活用しますので、**Agentic mode** が引き続き選択されていることを確認してください。

1. 次のプロンプトを入力します:

    ```prompt
    Which issues are missing estimates, due dates or assignees?
    ```

    結果を確認します。プロジェクトの状態をより把握するのに役立つ情報が表示されます。

## タスク D. 開発タスク向けの Duo Chat を探索する

Duo Chat がさまざまな開発計画と分析タスクをどのように支援するかを探っていきましょう。

1. 右上の角にある **Add new chat** アイコンをクリックして **GitLab Duo** エージェントを選択します。**Agentic mode** が引き続き選択されていることを確認してください。

1. プロジェクトのテスト戦略について Duo に質問してみましょう:

    ```prompt
    Recommend a comprehensive testing strategy for this application, including unit, integration, and end-to-end tests
    ```

1. パフォーマンスのインサイトを取得します:

    ```prompt
    Analyze this Python application for potential performance bottlenecks and suggest optimizations. Output suggestions in chat.
    ```

1. デプロイのアプローチについて質問します:

    ```prompt
    What would be the best deployment strategy for this Python application? Include considerations for scaling and monitoring.
    ```

1. モダナイゼーションの推奨事項を探ります:

    ```prompt
    How can I modernize this Python application to use current best practices and frameworks?
    ```

## オプション: さらなる練習

Duo でできることをさらに試してみてください。たとえば、実装計画を含む詳細な Issue を作成します:

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

このラボ演習が完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/devsecopswithduo)を参照できます。

## ご提案について

ラボに変更を加えたい場合は、マージリクエスト経由で変更を送信してください。
