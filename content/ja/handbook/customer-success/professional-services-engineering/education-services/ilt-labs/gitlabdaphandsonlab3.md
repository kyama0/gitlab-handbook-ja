---
title: "GitLab Duo Agent Platform - ハンズオンラボ: カスタムエージェントを構築する"
description: "このハンズオンガイドでは、カスタムエージェントの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab3/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T04:51:58Z"
translator: claude
stale: false
---

> 完了目安時間: 30 分

## 学習目標

このラボを修了すると、次のことができるようになります。

- カスタム GitLab Duo エージェントを設定して作成する。
- グループおよびプロジェクトレベルでカスタムエージェントを有効化する。
- カスタム Duo エージェントを使用してタスクを実行する。

## 概要

チームに最適なエージェントがまだ存在しないこともあります。カスタムエージェントでは、エージェントが知っていること、できること、誰がアクセスできるかを正確に定義できます — コードベースとチームの特定のニーズに合わせて構築されます。

入社してからのすべての質問は誰かの作業を中断させる必要がありました。チームメンバーを引き離すことなくコードベースについて質問する良い方法がありません。あなたはそれを解決して、次に入社する人のためのツールを構築することにしました。

このラボでは、Swag Shop Onboarding Agent を構築します: プロジェクトを知り、質問に答え、新しい開発者が修正すべき問題を見つけたときに Issue を作成するカスタムエージェントです。

## タスク A: カスタムエージェントを作成する

このタスクでは、Swag Shop Onboarding Agent をゼロから設定します。エージェントが知っていること、できること、誰がアクセスできるかなど、ここで行うすべての決定がタスク C での動作を直接決定します。

>**カスタムエージェントを作成する 2 つの方法:** カスタムエージェントはプロジェクト内（Automate > Agents）から、または AI Catalog から直接作成できます。このラボでは、特定のコードベースを構築してテストする際に適切な選択肢であるプロジェクトパスを使用します。組織全体にデプロイする場合や、他の誰かが構築したエージェントを有効化する場合は、AI Catalog パスを使用してください。

1. **GitLab Swag Shop Flows** プロジェクトに移動してください。

1. 左サイドバーで **Automate > Agents** を選択してください。

1. **New agent** を選択してください。

1. **Display name** フィールドに `Swag Shop Onboarding Agent` と入力してください。

1. **Description** フィールドに次のように入力してください。

   ```prompt
   Helps new developers get up to speed on the DAP Swag Shop codebase, answers questions about the project architecture, and creates issues for improvements or bugs they discover while onboarding.
   ```

   > **注:** 説明は AI Catalog とエージェントチャットのエージェントドロップダウンに表示されます。チームメンバーがエージェントが何をするのか、いつ使用するかを理解するのに役立ちます。簡潔で具体的に保ってください。

1. **Visibility** で **Private** を選択してください。

    > **なぜプライベートなのか？** エージェントをテストする間はプライベートの可視性から始めてください。プライベートエージェントはプロジェクトとグループ内でのみアクセスできます。実証されて他のチームと共有する準備ができたら、パブリックに切り替えると AI Catalog で発見可能になります。

1. **Configuration** で、Tools ドロップダウンで **Create Issue** を検索して選択してください。

    >**なぜツールが 1 つだけなのか？** エージェントが実際に必要とするツールのみを選択することは、最小権限の原則の実践です。オンボーディングエージェントは Issue を作成する必要がありますが、パイプライン、マージリクエスト、コードへのアクセスは必要ありません。不必要なツールを付与することは、価値を追加せずにリスクを増大させます。より少ないツールから始めて、特定のニーズが生じたときにのみ追加してください。

1. **System prompt** セクションに次のように入力してください。

   ```markdown
   You are the Swag Shop Onboarding Agent for the DAP Swag Shop project.
   Your responsibilities:
   1. Help new developers understand the project structure and architecture
   2. Answer questions about how the codebase works (Python/Flask, templates, CSS)
   3. Explain development workflows, testing, and CI/CD pipelines
   4. Create issues when developers identify bugs or suggest improvements
   When creating issues:
   - Use label "good first issue" for simple fixes new developers could tackle
   - Use label "documentation" for documentation improvements
   - Use label "bug" for bugs discovered during onboarding
   - Include clear context and acceptance criteria
   Restrictions:
   Do not modify code, merge requests, or pipeline configurations.
   Be friendly and encouraging. Remember that new team members may not know
   GitLab or this codebase well yet.
   ```

1. **Create agent** を選択してください。

### タスク A の期待される出力

- **Automate > Agents** に **Swag Shop Onboarding Agent** という名前の新しいエージェントが表示されている。
- 可視性が **Private** に設定されている。
- **Create Issue** が唯一の設定済みツールとして一覧表示されている。
- システムプロンプトが保存されてエージェント設定に表示されている。

## タスク B: グループレベルでエージェントを有効化する

プロジェクトでエージェントを使用する前に、グループレベルで有効化する必要があります。グループレベルの有効化により、作成したプロジェクトだけでなく、グループ内のすべてのプロジェクトでエージェントが利用可能になります。

1. エージェントを作成したページと同じページから、右上隅の **Enable** をクリックしてください。

1. 確認のために **Enable** を再度クリックしてください。
   
   > **注:** 2 段階の Enable 確認により、エージェントの準備が整う前に誤って公開することを防ぎます。最初のクリックで確認プロンプトが開き、2 回目のクリックで有効化がコミットされます。

### タスク B の期待される出力

- プロジェクトレベルの **Automate > Agents** にエージェントが表示されている。

## タスク C: エージェントを使用して質問に答え、Issue を作成する

このタスクでは、新しい開発者と同じようにエージェントと対話して、プロジェクトをどれだけ理解しているか、またあなたの代わりにアクションを実行できるかをテストします。

### タスク C.1: ライブセッションでエージェントを使用する

1. **New chat** アイコンを選択して新しいチャットセッションを開始します。

1. エージェントドロップダウンリストから **Swag Shop Onboarding Agent** を選択してください。

   >**注:** このエージェントが表示されない場合は、ページをリフレッシュしてみてください。

1. 次のプロンプトを入力してください。

   ```prompt
   I'm new. What's something I could help contribute to on this project?
   ```

1. エージェントのレスポンスをレビューします。
   
   **確認するポイント:** レスポンスはタスク A で作成したシステムプロンプトを反映している必要があります。トーンはフレンドリーで奨励的であるべきです。提案は汎用的なオンボーディングアドバイスではなく、実際のプロジェクト（Python/Flask、テンプレート、CSS）を参照している必要があります。明示的に制限したため、コードやパイプラインの変更を提案してはいけません。

1. 次に、Issue を作成するようエージェントに依頼します。次のプロンプトを入力してください。

   ```prompt
   Create an issue for me to help onboard and start contributing to help the team.
   ```

1. エージェントがツール呼び出しの承認を求めます。タイトル、説明、ラベルをレビューして **Approve** をクリックしてください。

1. **Plan > Work items** に移動して、新しく作成された Issue を開いてください。

### タスク C.2: 確認

このタスクを完了とマークする前に以下を確認してください。

- Issue のタイトルが貢献またはタスクを明確に説明している。
- Issue の説明に、その作業が必要な理由を説明するコンテキストが含まれている。
- Issue の説明に受け入れ基準が含まれている。
- 適切なラベルが適用されている（`good first issue`、`bug`、または `documentation`）。

### タスク C の期待される出力

- Swag Shop Onboarding Agent が Agentic Chat のエージェントドロップダウンから選択可能である。
- エージェントからのレスポンスがプロジェクトの実際の構造を参照し、具体的な最初の貢献を提案している。
- **Plan > Work items** に説明的なタイトル、完全な説明、受け入れ基準、適切なラベルを持つ新しい Issue が存在する。
- エージェントの動作がシステムプロンプトを反映している: フレンドリーなトーン、プロジェクト固有の知識、コードやパイプラインの変更の提案なし。

## ラボガイド完了

このラボ演習を完了しました。このコースの他の[ラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご意見・ご提案

ラボへの変更を希望する場合は、マージリクエスト経由で変更を送信してください。
