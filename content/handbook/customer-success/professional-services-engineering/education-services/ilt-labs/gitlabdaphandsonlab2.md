---
title: "GitLab Duo Agent Platform - ハンズオンラボ: Agentic Chat を使用して Issue を作成する"
description: "このハンズオンガイドでは、GitLab Agent Platform の使用の基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab2/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
translated_at: "2026-06-18T21:09:08Z"
translator: claude
stale: false
lastmod: "2026-04-16T17:13:51-04:00"
---

> 完了目安時間: 30 分

## 学習目標

このラボを完了すると、次のことができるようになります。

- Agentic Chat を使用して GitLab Duo Agent Platform を設定し、操作する。
- プロジェクトのランブックファイルを確認し、作業項目を作成する前に事前計画された内容を把握する。
- AI エージェントを使用して Issue とマージリクエストの作成を自動化する。
- AI 支援によるプロジェクトの計画と分析を実施する。

## 概要

Agentic Chat では、あなたが直接コントロールを握ります。すべての書き込みアクションは、実行前にあなたの承認を必要とします。Lab 1 では基礎的なフローが単独で何をできるかを示しましたが、このラボではあなたが運転席に座ります。

Lab 1 の修正はクリーンにマージされましたが、それを引き起こした Issue には受け入れ基準も担当者も見積もりもありませんでした。バックログはさらに悪い状態です。ほとんどの Issue が同じものを欠いており、まったく着手されていないランブックも存在します。

このラボでは、Agentic Chat を使用してバックログを処理していきます。Issue の作成、マージリクエストのリンク、ギャップの解消です。最終的にはきれいになります。しかし、手作業でクリーンにするのは後追い対応です。それだけでは、ひとりでにきれいな状態が保たれることはありません。

## タスク A: ランブックを確認し、Issue とマージリクエストを作成する

### タスク A.1: ランブックを確認する

Agentic Chat に何かを作成するよう依頼する前に、少し時間を取って、それが信頼できる情報源として使用するファイルを読んでください。これにより、これから何が、なぜ作成されるのかについて完全なコンテキストが得られ、その後の承認ステップの評価がはるかに容易になります。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Code > Repository** を選択します。

1. `RunBooks` フォルダに移動し、ファイル **issues_and_mrs_lvl-101.json** を開きます。

1. ファイルに目を通します。issues 配列内の各項目について、次の点に注目してください。

   - **title** と **description:** これらは Issue の内容になります。
   - **source_branch:** これはエージェントが作成するブランチ名です。
   - **mr_title** と **mr_description:** これらはマージリクエストになります。
   - **add_note:** 1 つの項目には `add_note` が true に設定されています。その項目について、エージェントは MR を作成した後にコメントを投稿します。その他は false に設定されているため、コメントは追加されません。

### タスク A.2: Agentic Chat プロンプトを実行する

ランブックの内容を念頭に置いたので、そのファイルで定義された Issue、ブランチ、マージリクエストの作成を Agentic Chat に依頼する準備が整いました。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 右側のツールバーで、**Add New Chat** アイコンをクリックし、**GitLab Duo** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトをチャットにコピー＆ペーストし、**Submit** ボタンをクリックします。

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

1. Agentic Chat が承認を要求するたびに、**Approve** をクリックして続行します。

   > **承認の説明:** 合計で約 10 個のアクションを承認することになり、これらはすべて書き込みアクションです。すでにランブックを読んでいるため、各アクションが想定どおりであることを確認できます。読み取りアクションは、あなたを中断することなくバックグラウンドで静かに実行されます。

1. 完了すると、Agentic Chat は各 Issue の IID、マージリクエスト IID、発生したエラーを列挙した完了レポートを表示します。

   > **注:** IID（Internal ID）は、特定のプロジェクト内の Issue とマージリクエストに対する GitLab の内部識別子です。

### タスク A.3: Agentic Chat の出力を検証する

エージェントが作成した Issue、マージリクエスト、ブランチ、コメントを確認して、期待されたすべてのアクションが完了したことを確認します。

1. **Plan > Work items** に移動し、3 つの Issue が作成されたことを確認します。

   > **注:** Duo Agentic Chat によって作成された 3 つの Issue がプロジェクトに表示されます。新しい Issue がまだ表示されない場合は、手動でページを更新してください。

1. **Code > Merge Requests** に移動し、3 つのマージリクエストが作成され、それぞれが対応する Issue にリンクされていることを確認します。

1. マージリクエスト **fix: improve text contrast on product cards for WCAG compliance** を開き、コメントが追加されていることを確認します。

1. **Code > Branches** に移動し、3 つの新しいブランチが表示されることを確認します。

   > **注:** マージリクエストが Issue にリンクされていることを確認するには、マージリクエストの Overview タブを開き、説明に `Closes <issue-id>` が含まれているか確認してください。

### 期待される出力: タスク A

- **Plan > Work items** に 3 つの新しい Issue が存在し、それぞれにランブックからの title と description が設定されている。
- **Code > Merge Requests** に 3 つのマージリクエストが存在し、それぞれが対応する Issue にリンクされている。
- **Code > Branches** に 3 つのブランチが表示される。
- **fix: improve text contrast** マージリクエストに 1 つのコメントが投稿されている。
- すべての IID と URL を含む完了レポートが Agentic Chat パネルに表示されている。

## タスク B: プロジェクトを分析して Issue を作成する

Agentic Chat はプロジェクトの構造を読み取り、カスタマイズされた推奨事項を生成し、それらに即座にアクションを起こすことができます。このタスクでは、プロジェクトを分析し、その結果に基づいて Issue を作成するよう依頼します。

1. **Add New Chat** をクリックし、**GitLab Duo** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   Analyze this project's structure and suggest improvements for maintainability and scalability.
   ```

1. Agentic Chat が返した推奨事項を確認します。

1. 同じ会話で次のように追加で尋ねます。

   ```prompt
   What are the quick wins that I should prioritize first?
   ```

1. 優先順位付けされた推奨事項を確認します。

1. 続けて次のように尋ねます。

   ```prompt
   Create an issue in this project based on your recommendations.
   ```

1. Agentic Chat が承認のために Issue を提示したら、**Approve** をクリックします。

1. 新しく作成された Issue を開き、**Assignees** フィールドを編集して自分自身に割り当てます。

> **ヒント:** 先のプロンプトのコンテキストは、各フォローアップに引き継がれます。分析を繰り返す必要はありません。Agentic Chat は同じ会話の中で見つけた内容を記憶しています。

### 期待される出力: タスク B

- 構造化された分析がチャットパネルに表示されている。
- 同じ会話に優先順位付けされたクイックウィンのリストが用意されている。
- 分析から導出された title と description を持つ新しい Issue が **Plan > Work items** に存在し、自分自身に割り当てられている。

## タスク C: Planner エージェントでプロジェクトの健全性を確認する

Planner エージェントは、プロダクトマネジメントの専門知識と GitLab の計画機能に関する知識を組み合わせたものです。このタスクでは、それを使用してバックログのギャップを特定し、チャットから直接解決します。

1. 左サイドバーを使用して **Plan > Work items** に移動します。

1. **Add New Chat** をクリックし、**Planner** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 結果を確認します。タスク A とタスク B で作成した Issue がこのリストに表示されるはずです。これらは作成時に見積もりや期日が設定されていませんでした。

1. 同じ会話で次のように追加で尋ねます。

   ```prompt
   Assign all of these issues to me.
   ```

1. Agentic Chat が承認を要求したら、**Approve** をクリックします。

1. フラグが立てられた Issue のいずれかを開き、自分が担当者として表示されていることを確認します。

1. Agentic Chat に戻り、元のプロンプトを再実行します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 更新された結果を確認し、担当者のギャップが解消されたことを確認します。

   > **注:** 見積もりと期日は依然として欠落としてフラグが立てられます。これは想定どおりです。このタスクで対処したのは担当者のギャップのみです。

### 期待される出力: タスク C

- 情報の欠落でフラグが立てられた Issue の構造化されたリストがチャットパネルに表示されている。
- 承認ステップの後、フラグが立てられたすべての Issue が自分自身に割り当てられている。
- 再実行したプロンプトが、担当者を欠落フィールドとしてフラグしなくなった更新済みのリストを返す。

## タスク D: 開発計画のための Agentic Chat を探求する

Agentic Chat は、Issue やマージリクエストの作成以上のことができます。このタスクでは、それを使用して開発計画とテスト戦略を探求します。エージェントが一般的なアドバイスではなく、プロジェクトの実際のコンテキストを活用して、具体的で関連性の高い推奨事項を生成する様子に注目してください。

### タスク D.1: テスト戦略を要求する

1. **Add New Chat** をクリックし、エージェントのドロップダウンリストから **GitLab Duo** を選択します。Agentic モードが有効になっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   I want to reduce my change failure rate over time. What testing strategy should I implement?
   ```

1. 出力を確認します。エージェントはプロジェクトの構造を分析し、コードベースに合わせたテスト戦略を返します。

1. さらに掘り下げるために、追加の質問でフォローアップします。例えば、次のようにします。

   ```prompt
   Which of these would have the most impact for a project this size?

   Can you show me which files would need to change to implement this?
   ```

### タスク D.2: 追加の計画プロンプトを試す

このステップでは、GitLab Duo Prompt Library に進みます。Agentic Chat の出発点として、これを活用する練習をしましょう。

1. [GitLab Duo Prompt Library](https://about.gitlab.com/gitlab-duo/prompt-library/) に移動します。

1. カテゴリを **Planning & Architecture** でフィルタリングします。

1. 利用可能なプロンプトを閲覧し、プロジェクトやチームのコンテキストに関連するものを 1 つコピーします。

1. 各プロンプトについて、プロンプトカードに表示された推奨エージェントを確認します。新しいチャットを開き、プロンプトを貼り付ける前にそのエージェントを選択します。

1. プロンプトをそのまま貼り付けるか、DAP Swag Shop プロジェクト向けに調整します。

1. 出力を確認し、エージェントが一般的なアドバイスを返すのではなく、プロジェクトの実際のコンテキストを参照する様子に注目します。

> **ヒント:** 各プロンプトカードには、推奨エージェント、複雑さのレベル、ソフトウェア開発ライフサイクル（SDLC）のステージが表示されます。これらのタグを使用して、ワークフロー上の自分の現在地に合ったプロンプトを見つけてください。

### 期待される出力: タスク D

- テスト戦略のプロンプトが、Swag Shop の技術スタックとファイル構造に固有の推奨事項を返す。
- 少なくとも 1 つの Prompt Library のレスポンスが、一般的なアドバイスではなく、プロジェクト内の特定のファイル、パターン、または規約を参照している。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更を提出してください。
