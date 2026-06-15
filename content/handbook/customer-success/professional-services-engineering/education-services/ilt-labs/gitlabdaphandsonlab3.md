---
title: "GitLab Duo Agent Platform - ハンズオンラボ: カスタムエージェントを構築する"
description: "このハンズオンガイドでは、カスタムエージェントの作成方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandsonlab3/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T19:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T14:13:50-04:00"
---

> 完了目安時間: 15 分

## 学習目標

このラボを完了すると、次のことができるようになります。

- カスタム GitLab Duo エージェントを構成して作成する。
- グループレベルおよびプロジェクトレベルでカスタムエージェントを有効化する。
- カスタム Duo エージェントを使用してタスクを実行する。

## 概要

チームに最適なエージェントがまだ存在しないこともあります。カスタムエージェントを使用すると、エージェントが何を知っていて、何ができ、誰がアクセスできるかを正確に定義できます。これはあなたのコードベースとチームの特定のニーズのために構築されます。

参加して以来、すべての質問は誰かを中断させる必要がありました。チームメイトを引き離すことなくコードベースについて尋ねる良い方法がありません。あなたはそれを解決し、次に参加する人のためのツールを構築することにします。

このラボでは、Swag Shop Onboarding Agent を構築します。これは、プロジェクトを把握し、質問に答え、新しい開発者が修正すべき何かを見つけたときに Issue を作成するカスタムエージェントです。

## タスク A: カスタムエージェントを作成する

このタスクでは、Swag Shop Onboarding Agent をゼロから構成します。ここで行うすべての決定、たとえばエージェントが何を知っていて、何ができ、誰がアクセスできるかは、タスク C でのエージェントの振る舞いを直接形作ります。

> **カスタムエージェントを作成する 2 つの方法:** カスタムエージェントは、プロジェクト内（Automate > Agents）から、または AI Catalog から直接作成できます。このラボでは、プロジェクトパスを使用します。これは特定のコードベース向けに構築してテストする際に適した選択です。組織全体に展開する場合や、他の誰かが構築したエージェントを有効化する場合は、AI Catalog パスを使用してください。

1. **GitLab Swag Shop Flows** プロジェクトに移動します。

1. 左サイドバーで **Automate > Agents** を選択します。

1. **New agent** を選択します。

1. **Display name** フィールドに `Swag Shop Onboarding Agent` と入力します。

1. **Description** フィールドに次の内容を入力します。

   ```prompt
   Helps new developers get up to speed on the DAP Swag Shop codebase, answers questions about the project architecture, and creates issues for improvements or bugs they discover while onboarding.
   ```

   > **注:** 説明は AI Catalog と Agentic Chat のエージェントドロップダウンに表示されます。これは、チームメイトがエージェントが何をするか、いつ使用するかを理解するのに役立ちます。簡潔かつ具体的に保ってください。

1. **Visibility** で **Private** を選択します。

    > **なぜ private なのか?** エージェントをテストしている間は private の可視性から始めます。private のエージェントは、プロジェクトとグループ内でのみアクセスできます。実証されて他のチームと共有する準備ができたら、public に切り替えることができ、AI Catalog で検出可能になります。

1. **Configuration** で、Tools ドロップダウンから **Create Issue** を検索して選択します。

    > **なぜツールが 1 つだけなのか?** エージェントが実際に必要とするツールのみを選択することは、最小権限の原則を実践に移すことです。オンボーディングエージェントは Issue を作成する必要がありますが、パイプライン、マージリクエスト、コードへのアクセスは必要ありません。不要なツールを付与すると、価値を加えることなくリスクが増大します。より少ないツールから始め、特定の必要が生じたときにのみ追加してください。

1. **System prompt** セクションに次の内容を入力します。

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
   Be friendly and encouraging. Remember that new team members may not know GitLab or this codebase well yet.
   ```

1. **Create agent** を選択します。

### 期待される出力: タスク A

- **Swag Shop Onboarding Agent** という名前の新しいエージェントが **Automate > Agents** 配下に表示されます。
- 可視性が **Private** に設定されています。
- 構成された唯一のツールとして **Create Issue** が一覧に表示されます。
- システムプロンプトが保存され、エージェント構成に表示されます。

## タスク B: グループレベルでエージェントを有効化する

プロジェクトでエージェントを使用できるようにする前に、グループレベルで有効化する必要があります。グループレベルの有効化により、エージェントを作成したプロジェクトだけでなく、グループ内のすべてのプロジェクトでエージェントが利用可能になります。

1. エージェントを作成したのと同じページで、右上隅の **Enable** をクリックします。

1. 続いて、もう一度 **Enable** をクリックして確認します。

   > **注:** 2 段階の Enable 確認により、準備ができる前に誤ってエージェントを公開してしまうことを防ぎます。1 回目のクリックで確認プロンプトが開き、2 回目のクリックで有効化が確定します。

### 期待される出力: タスク B

- エージェントがプロジェクトレベルの **Automate > Agents** 配下に表示されます。

## タスク C: エージェントを使用して質問に答え、Issue を作成する

このタスクでは、新しい開発者として行うのと同じようにエージェントと対話し、エージェントがプロジェクトをどれだけよく理解しているか、そしてあなたに代わってアクションを実行できるかをテストします。

### タスク C.1: ライブセッションでエージェントを使用する

1. **New chat** アイコンを選択して、新しいチャットセッションを開始します。

1. エージェントのドロップダウンリストから **Swag Shop Onboarding Agent** を選択します。

   > **注:** このエージェントが表示されない場合は、ページを更新してみてください。

1. 次のプロンプトを入力します。

   ```prompt
   I'm new. What's something I could help contribute to on this project?
   ```

1. エージェントの応答を確認します。

   **確認すべき点:** 応答は、タスク A で記述したシステムプロンプトを反映しているはずです。トーンはフレンドリーで励みになるものであるべきです。提案は、汎用的なオンボーディングのアドバイスではなく、実際のプロジェクト（Python/Flask、テンプレート、CSS）を参照しているはずです。明示的に制限したため、コードやパイプラインの変更を申し出るべきではありません。

1. 次に、エージェントに Issue の作成を依頼します。次のプロンプトを入力します。

   ```prompt
   Create an issue for me to help onboard and start contributing to help the team.
   ```

1. エージェントは承認のためにツール呼び出しを提示します。タイトル、説明、ラベルを確認してから、**Approve** をクリックします。

1. **Plan > Work items** に移動し、新しく作成された Issue を開きます。

### タスク C.2: 検証

このタスクを完了とマークする前に、次の点を確認します。

- Issue のタイトルが、貢献またはタスクを明確に説明している。
- Issue の説明に、なぜその作業が必要かを説明するコンテキストが含まれている。
- Issue の説明に受け入れ基準が含まれている。
- 適切なラベル（`good first issue`、`bug`、または `documentation`）が適用されている。

### 期待される出力: タスク C

- Agentic Chat のエージェントドロップダウンから Swag Shop Onboarding Agent を選択できます。
- エージェントからの応答が、プロジェクトの実際の構造を参照し、具体的な最初の貢献を提案します。
- 説明的なタイトル、完全な説明、受け入れ基準、適切なラベルを持つ新しい Issue が **Plan > Work items** 配下に存在します。
- エージェントの振る舞いがシステムプロンプトを反映しています。フレンドリーなトーン、プロジェクト固有の知識、コードやパイプラインを変更する申し出がないこと。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabdaphandson.md)を確認できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更を送信してください。
