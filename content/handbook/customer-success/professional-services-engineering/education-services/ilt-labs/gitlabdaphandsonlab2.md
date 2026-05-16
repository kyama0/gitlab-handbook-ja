---
title: "GitLab Duo Agent Platform - ハンズオンラボ: Agentic Chat を使用して Issue を作成する"
description: "このハンズオンガイドでは、GitLab Agent Platform の使用の基本を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab2/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:51:58Z"
translator: claude
stale: false
lastmod: "2026-04-16T17:13:51-04:00"
---

> 完了目安時間: 45 分

## 学習目標

このラボを修了すると、次のことができるようになります。

- GitLab Duo Agent Platform と Agentic Chat を設定して操作する。
- プロジェクトのランブックファイルを確認して、作成前に計画済みの作業項目を理解する。
- AI エージェントを使用して Issue とマージリクエストの作成を自動化する。
- AI を活用したプロジェクト計画と分析を実装する。

## 概要

Agentic Chat では、あなたが直接コントロールします。すべての書き込みアクションは実行前に承認が必要です。ラボ 1 が基本フローを独自に実行できることを示したのに対して、このラボではあなたが主導権を握ります。

ラボ 1 の修正はきれいにマージされましたが、それをトリガーした Issue には受け入れ基準も担当者も見積もりもありませんでした。バックログはさらに悪い状況で、ほとんどの Issue に同じものが不足しており、対処されていないランブックもあります。

このラボでは、Agentic Chat を使用してバックログを整理します: Issue の作成、マージリクエストのリンク、ギャップの解消。最終的にはきれいになりますが、手動での整理は受動的です。それだけでは自動的にきれいな状態が保たれるわけではありません。

## タスク A: ランブックを確認し、Issue とマージリクエストを作成する

### タスク A.1: ランブックを確認する

Agentic Chat に何かを作成させる前に、その情報源として使用するファイルを読んでください。これにより、これから作成されるものとその理由について完全なコンテキストを持つことができ、その後の承認ステップを評価しやすくなります。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Code > Repository** を選択します。

1. `RunBooks` フォルダーに移動して、ファイル **issues_and_mrs_lvl-101.json** を開きます。

1. ファイルを読み通してください。issues 配列の各項目について以下を確認します。

   - **title** と **description:** Issue のコンテンツになります。
   - **source_branch:** エージェントが作成するブランチ名です。
   - **mr_title** と **mr_description:** マージリクエストになります。
   - **add_note:** 1 つの項目は `add_note` が true に設定されています。その項目の場合、エージェントは MR を作成した後にコメントを投稿します。その他は false に設定されているため、コメントは追加されません。

### タスク A.2: Agentic Chat プロンプトを実行する

ランブックの内容を把握した上で、Agentic Chat に対してそのファイルに定義された Issue、ブランチ、マージリクエストを作成するよう依頼する準備ができました。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 右のツールバーで **Add New Chat** アイコンをクリックして **GitLab Duo** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトをチャットにコピーして貼り付け、**Submit** ボタンをクリックします。

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

1. Agentic Chat が承認を求めるたびに **Approve** をクリックして続行します。

   > **承認について:** 合計約 10 回のアクション（すべて書き込みアクション）を承認します。すでにランブックを読んでいるので、各アクションが期待したものと一致することを確認できます。読み取りアクションはバックグラウンドで中断なしに実行されます。

1. 完了すると、Agentic Chat は各 Issue の IID、マージリクエスト IID、および発生したエラーを一覧表示する Completion Report を表示します。
   
   > **注:** IID（Internal ID）は、特定のプロジェクト内の Issue とマージリクエストに対する GitLab の内部識別子です。

### タスク A.3: Agentic Chat の出力を確認する

エージェントが作成した Issue、マージリクエスト、ブランチ、コメントを確認して、すべての期待されるアクションが完了したことを確認します。

1. **Plan > Work items** に移動して、3 つの Issue が作成されていることを確認します。

   >**注:** Duo Agentic chat によって作成された 3 つの Issue がプロジェクトに表示されます。新しい Issue がまだ表示されていない場合は、ページを手動でリフレッシュしてください。

1. **Code > Merge Requests** に移動して、3 つのマージリクエストが作成され、それぞれが対応する Issue にリンクされていることを確認します。

1. マージリクエスト **fix: improve text contrast on product cards for WCAG compliance** を開いて、コメントが追加されていることを確認します。

1. **Code > Branches** に移動して、3 つの新しいブランチが表示されていることを確認します。

   > **注**: マージリクエストが Issue にリンクされていることを確認するには、マージリクエストの Overview タブを開いて、説明に `Closes <issue-id>` があるか確認してください。

### タスク A の期待される出力

- **Plan > Work items** に 3 つの新しい Issue が存在し、それぞれにランブックのタイトルと説明がある。
- **Code > Merge Requests** に 3 つのマージリクエストが存在し、それぞれが対応する Issue にリンクされている。
- **Code > Branches** に 3 つのブランチが表示されている。
- **fix: improve text contrast** マージリクエストに 1 つのコメントが投稿されている。
- すべての IID と URL を含む Completion Report が Agentic Chat パネルに表示されている。

## タスク B: プロジェクトを分析して Issue を作成する

Agentic Chat はプロジェクトの構造を読み取り、カスタマイズされた推奨事項を生成し、すぐにそれを実行に移すことができます。このタスクでは、プロジェクトを分析して、その発見に基づいて Issue を作成するよう依頼します。

1. **Add New Chat** をクリックして **GitLab Duo** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトを入力します。
   
   ```prompt
   Analyze this project's structure and suggest improvements for maintainability and scalability.
   ``` 

1. Agentic Chat が返す推奨事項をレビューします。

1. 同じ会話で次のように続けます。

   ```prompt
   What are the quick wins that I should prioritize first?
   ```

1. 優先度付けされた推奨事項をレビューします。

1. さらに続けます。
 
   ```prompt
   Create an issue in this project based on your recommendations.
   ```

1. Agentic Chat が Issue の承認を求めたら **Approve** をクリックします。

1. 新しく作成された Issue を開いて、**Assignees** フィールドを編集して自分に割り当てます。

>**ヒント:** 以前のプロンプトのコンテキストが各フォローアップに引き継がれます。分析を繰り返す必要はありません。Agentic Chat は同じ会話内で発見した内容を記憶しています。

### タスク B の期待される出力

- 構造化された分析がチャットパネルに表示されている。
- 優先度付けされたクイックウィンのリストが同じ会話に表示されている。
- **Plan > Work items** に分析から派生したタイトルと説明を持つ新しい Issue が存在し、自分に割り当てられている。

## タスク C: Planner Agent でプロジェクトの健全性をレビューする

Planner Agent は、プロダクトマネジメントの専門知識と GitLab の計画機能に関する知識を組み合わせています。このタスクでは、バックログのギャップを特定して、チャットから直接解決します。

1. 左サイドバーを使用して **Plan > Work items** に移動します。

1. **Add New Chat** をクリックして **Planner** を選択します。Agentic モードがオンになっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 結果をレビューします。タスク A と B で作成した Issue がこのリストに表示されます。作成時に見積もりや期日が設定されていませんでした。

1. 同じ会話で次のように続けます。

   ```prompt
   Assign all of these issues to me.
   ```

1. Agentic Chat が承認を求めたら **Approve** をクリックします。

1. フラグが立てられた Issue の 1 つを開いて、自分が担当者として一覧表示されていることを確認します。

1. Agentic Chat に戻って元のプロンプトを再実行します。

   ```prompt
   Which issues are missing estimates, due dates, or assignees?
   ```

1. 更新された結果をレビューして、担当者のギャップが解決されていることを確認します。

   >**注:** 見積もりと期日は引き続き不足としてフラグが立てられます — これは予期されたことです。このタスクでは担当者のギャップのみが対処されました。

### タスク C の期待される出力

- 不足している情報についてフラグが立てられた Issue の構造化リストがチャットパネルに表示されている。
- 承認ステップ後にフラグが立てられたすべての Issue が自分に割り当てられている。
- 再実行プロンプトが担当者を不足フィールドとしてフラグを立てなくなった更新リストを返す。

## タスク D: 開発計画のための Agentic Chat を探索する

Agentic Chat は Issue とマージリクエストの作成以上のことができます。このタスクでは、開発計画とテスト戦略の探索に使用します。エージェントが汎用的なアドバイスではなく、プロジェクトの実際のコンテキストを参照して具体的で関連性の高い推奨事項を生成する方法に注目してください。

### タスク D.1: テスト戦略をリクエストする

1. **Add New Chat** をクリックして、エージェントドロップダウンリストから **GitLab Duo** を選択します。Agentic モードが有効になっていることを確認します。

1. 次のプロンプトを入力します。

   ```prompt
   I want to reduce my change failure rate over time. What testing strategy should I implement?
   ```

1. 出力をレビューします。エージェントはプロジェクトの構造を分析し、コードベースに合わせたテスト戦略を返します。

1. 詳しく掘り下げるために追加の質問を続けます。例えば:

   ```prompt
   Which of these would have the most impact for a project this size?

   Can you show me which files would need to change to implement this?
   ```
   
### タスク D.2: 追加の計画プロンプトを試す

このステップでは GitLab Duo Prompt Library に移動します。それを Agentic Chat の出発点として練習してください。

1. [GitLab Duo Prompt Library](https://about.gitlab.com/gitlab-duo/prompt-library/) に移動します。

1. カテゴリを **Planning & Architecture** でフィルタリングします。

1. 利用可能なプロンプトを閲覧して、プロジェクトやチームのコンテキストに関連するものをコピーします。

1. 各プロンプトについて、プロンプトカードに表示されている推奨エージェントを確認します。新しいチャットを開いて、プロンプトを貼り付ける前にそのエージェントを選択します。

1. プロンプトをそのまま貼り付けるか、DAP Swag Shop プロジェクトに合わせてアレンジします。

1. 出力をレビューして、エージェントが汎用的なアドバイスではなくプロジェクトの実際のコンテキストを参照している方法に注目します。

> **ヒント:** 各プロンプトカードには推奨エージェント、複雑さのレベル、ソフトウェア開発ライフサイクル（SDLC）ステージが表示されます。これらのタグを使用して、ワークフローの現在の段階に合ったプロンプトを見つけてください。

### タスク D の期待される出力

- テスト戦略プロンプトが Swag Shop の技術スタックとファイル構造に特有の推奨事項を返す。
- Prompt Library の少なくとも 1 つのレスポンスが、汎用的なアドバイスではなく、プロジェクトの特定のファイル、パターン、または規則を参照している。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
