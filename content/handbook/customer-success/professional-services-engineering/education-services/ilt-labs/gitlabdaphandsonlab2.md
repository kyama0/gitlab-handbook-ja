---
title: "GitLab Duo Agent Platform - ハンズオンラボ: Agentic Chat を使用して Issue を作成する"
description: "このハンズオンガイドでは、GitLab Agent Platform の使用の基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab2/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T19:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T14:13:50-04:00"
---

> 完了目安時間: 30 分

## 学習目標

このラボを完了すると、次のことができるようになります。

- Agentic Chat を使用して GitLab Duo Agent Platform を構成し、操作する。
- プロジェクトの runbook ファイルを確認し、作業項目を作成する前に事前に計画された作業項目を把握する。
- AI エージェントを使用して Issue とマージリクエストの作成を自動化する。
- AI 支援によるプロジェクト計画と分析を実施する。

## 概要

Agentic Chat では、あなたが直接コントロールできます。すべての書き込みアクションは、実行前にあなたの承認を必要とします。ラボ 1 では基盤的なフローが単独で何をできるかを示しましたが、このラボではあなたが運転席に座ります。

ラボ 1 の修正はクリーンにマージされましたが、それを引き起こした Issue には受け入れ基準も担当者も見積もりもありませんでした。バックログはさらに悪い状態です。ほとんどの Issue で同じものが欠けており、実行されることのなかった runbook が存在します。

このラボでは、Agentic Chat を使用してバックログを処理します。Issue を作成し、マージリクエストをリンクし、ギャップを埋めます。最後にはクリーンになります。しかし、手作業でクリーンにするのは事後対応です。それだけでは自動的にクリーンな状態を保つことはできません。

## タスク A: Runbook を確認し、Issue とマージリクエストを作成する

### タスク A.1: Runbook を確認する

Agentic Chat に何かを作成するよう依頼する前に、Agentic Chat が信頼できる情報源として使用するファイルを少し読んでおきましょう。これにより、何がなぜ作成されようとしているのかの完全なコンテキストが得られ、後続の承認ステップの評価がはるかに容易になります。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Code > Repository** を選択します。

1. `RunBooks` フォルダーに移動し、ファイル **issues_and_mrs_lvl-101.json** を開きます。

1. ファイルを読み通します。issues 配列内の各項目について、次の点に注目します。

   - **title** と **description:** これらが Issue のコンテンツになります。
   - **source_branch:** これがエージェントが作成するブランチ名です。
   - **mr_title** と **mr_description:** これらがマージリクエストになります。
   - **add_note:** 1 つの項目では `add_note` が true に設定されています。その項目については、エージェントは MR を作成した後にコメントを投稿します。他の項目は false に設定されているため、コメントは追加されません。

### タスク A.2: Agentic Chat プロンプトを実行する

Runbook の内容を念頭に置いたところで、そのファイルで定義された Issue、ブランチ、マージリクエストを作成するよう Agentic Chat に依頼する準備が整いました。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 右側のツールバーで **Add New Chat** アイコンをクリックし、**GitLab Duo** を選択します。エージェントモードがオンになっていることを確認します。

1. 次のプロンプトをコピーしてチャットに貼り付け、**Submit** ボタンをクリックします。

   ```markdown
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

1. Agentic Chat が承認を求めるたびに、**Approve** をクリックして続行します。

   > **承認についての説明:** 合計でおよそ 10 個のアクションを承認することになりますが、これらはすべて書き込みアクションです。すでに runbook を読んでいるため、各アクションが期待どおりであることを確認できます。読み取りアクションは、あなたを中断することなくバックグラウンドで静かに実行されます。

1. 完了すると、Agentic Chat は各 Issue の IID、マージリクエスト IID、発生したエラーを一覧表示する完了レポートを表示します。

   > **注:** IID（内部 ID）は、特定のプロジェクト内の Issue とマージリクエストに対する GitLab の内部識別子です。

### タスク A.3: Agentic Chat の出力を検証する

エージェントが作成した Issue、マージリクエスト、ブランチ、コメントを確認して、期待されるすべてのアクションが完了したことを確認します。

1. **Plan > Work items** に移動し、3 つの Issue が作成されたことを確認します。

   > **注:** Duo Agentic Chat によって作成された 3 つの Issue がプロジェクトに表示されます。新しい Issue がまだ表示されない場合は、ページを手動で更新してください。

1. **Code > Merge Requests** に移動し、3 つのマージリクエストが作成され、それぞれが対応する Issue にリンクされていることを確認します。

1. マージリクエスト **fix: improve text contrast on product cards for WCAG compliance** を開き、コメントが追加されていることを確認します。

1. **Code > Branches** に移動し、3 つの新しいブランチが表示されていることを確認します。

   > **注:** マージリクエストが Issue にリンクされていることを確認するには、マージリクエストの Overview タブを開き、説明文の中に `Closes <issue-id>` があることを確認します。

### 期待される出力: タスク A

- **Plan > Work items** 配下に 3 つの新しい Issue が存在し、それぞれに runbook からのタイトルと説明があります。
- **Code > Merge Requests** 配下に 3 つのマージリクエストが存在し、それぞれが対応する Issue にリンクされています。
- **Code > Branches** 配下に 3 つのブランチが表示されます。
- **fix: improve text contrast** マージリクエストに 1 つのコメントが投稿されています。
- すべての IID と URL を含む完了レポートが Agentic Chat パネルに表示されます。

## タスク B: プロジェクトを分析し、Issue を作成する

Agentic Chat は、プロジェクトの構造を読み取り、それに合わせた推奨事項を生成し、すぐにそれに基づいて行動できます。このタスクでは、プロジェクトを分析し、見つかった内容に基づいて Issue を作成するよう依頼します。

1. **Add New Chat** をクリックし、**GitLab Duo** を選択します。エージェントモードがオンになっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   Analyze this project's structure and suggest improvements for maintainability and scalability.
   ``` 

1. Agentic Chat が返した推奨事項を確認します。

1. 同じ会話の中で次のように続けます。

   ```prompt
   What are the quick wins that I should prioritize first?
   ```

1. 優先順位付けされた推奨事項を確認します。

1. さらに次のように続けます。
 
   ```prompt
   Create an issue in this project based on your recommendations.
   ```

1. Agentic Chat が承認のために Issue を提示したら、**Approve** をクリックします。

1. 新しく作成された Issue を開き、**Assignees** フィールドを編集して自分自身に割り当てます。

> **ヒント:** 以前のプロンプトのコンテキストは、各フォローアップに引き継がれます。分析を繰り返す必要はありません。Agentic Chat は同じ会話の中で見つけた内容を記憶しています。

### 期待される出力: タスク B

- 構造化された分析がチャットパネルに表示されます。
- 優先順位付けされたクイックウィンのリストが同じ会話の中で利用可能です。
- 分析から導出されたタイトルと説明を持つ新しい Issue が **Plan > Work items** 配下に存在し、自分自身に割り当てられています。

## タスク C: Planner エージェントでプロジェクトの健全性を確認する

Planner エージェントは、プロダクトマネジメントの専門知識と GitLab の計画機能に関する知識を組み合わせています。このタスクでは、これを使用してバックログのギャップを特定し、チャットから直接解決します。

1. 左サイドバーを使用して **Plan > Work items** に移動します。

1. **Add New Chat** をクリックし、**Planner** を選択します。エージェントモードがオンになっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 結果を確認します。タスク A と B で作成した Issue がこのリストに表示されるはずです。これらは作成時に見積もりや期日が設定されませんでした。

1. 同じ会話の中で次のように続けます。

   ```prompt
   Assign all of these issues to me.
   ```

1. Agentic Chat が承認を求めたら、**Approve** をクリックします。

1. フラグが付けられた Issue の 1 つを開き、現在あなたが担当者として表示されていることを確認します。

1. Agentic Chat に戻り、最初のプロンプトを再実行します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 更新された結果を確認し、担当者のギャップが解決されたことを確認します。

   > **注:** 見積もりと期日は引き続き欠落としてフラグが付けられます。これは想定どおりです。このタスクで対処したのは担当者のギャップのみです。

### 期待される出力: タスク C

- 情報が欠落しているとフラグが付けられた Issue の構造化されたリストがチャットパネルに表示されます。
- 承認ステップの後、フラグが付けられたすべての Issue が自分自身に割り当てられます。
- 再実行したプロンプトは、担当者を欠落フィールドとしてフラグ付けしなくなった更新済みのリストを返します。

## タスク D: 開発計画のために Agentic Chat を探索する

Agentic Chat は Issue とマージリクエストの作成以上のことができます。このタスクでは、これを使用して開発計画とテスト戦略を探索します。エージェントが汎用的なアドバイスではなく、プロジェクトの実際のコンテキストを活用して、具体的で関連性のある推奨事項を生成する様子に注目してください。

### タスク D.1: テスト戦略を要求する

1. **Add New Chat** をクリックし、エージェントのドロップダウンリストから **GitLab Duo** を選択します。エージェントモードが有効になっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   I want to reduce my change failure rate over time. What testing strategy should I implement?
   ```

1. 出力を確認します。エージェントはプロジェクトの構造を分析し、コードベースに合わせたテスト戦略を返します。

1. さらに詳しく掘り下げるために、追加の質問を続けます。例:

   ```prompt
   Which of these would have the most impact for a project this size?

   Can you show me which files would need to change to implement this?
   ```
   
### タスク D.2: 追加の計画プロンプトを試す

このステップでは、GitLab Duo Prompt Library に移動します。Agentic Chat のための出発点として、これを習慣的に使う練習をします。

1. [GitLab Duo Prompt Library](https://about.gitlab.com/gitlab-duo/prompt-library/) に移動します。

1. カテゴリーを **Planning & Architecture** でフィルタリングします。

1. 利用可能なプロンプトを閲覧し、自分のプロジェクトやチームのコンテキストに関連するものを 1 つコピーします。

1. 各プロンプトについて、プロンプトカードに表示されている推奨エージェントを確認します。新しいチャットを開き、プロンプトを貼り付ける前にそのエージェントを選択します。

1. プロンプトをそのまま貼り付けるか、DAP Swag Shop プロジェクトに合わせて調整します。

1. 出力を確認し、エージェントが汎用的なアドバイスを返すのではなく、プロジェクトの実際のコンテキストを参照する様子に注目します。

> **ヒント:** 各プロンプトカードには、推奨エージェント、複雑さのレベル、ソフトウェア開発ライフサイクル（SDLC）ステージが表示されます。これらのタグを使用して、ワークフロー上の現在の位置に合ったプロンプトを見つけてください。

### 期待される出力: タスク D

- テスト戦略のプロンプトは、Swag Shop の技術スタックとファイル構造に固有の推奨事項を返します。
- 少なくとも 1 つの Prompt Library の応答が、汎用的なアドバイスではなく、プロジェクトの特定のファイル、パターン、または規約を参照しています。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
