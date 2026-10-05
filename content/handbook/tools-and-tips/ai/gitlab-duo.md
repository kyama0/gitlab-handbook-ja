---
title: "GitLab Duo のヒント"
upstream_path: /handbook/tools-and-tips/ai/gitlab-duo/
upstream_sha: "59a18d6d88e73b26232d1d6773e5d793fcb29e49"
translated_at: "2026-10-05T21:13:10+00:00"
translator: claude
stale: false
lastmod: "2026-09-30T19:05:18+02:00"
---

GitLab Duo Agent Platform を使って、ソフトウェアライフサイクル全体で AI オーケストレーションを行う方法を学びましょう。Agentic Chat、専門エージェント、フロー、Code Suggestions、GitLab MCP サーバーを活用します。

## アクセス

- チームメンバー: グループで GitLab Duo を利用できない場合は、[Compass チケット](/handbook/eta/corporate-it/compass/compass-guide/#how-to-get-help-3-ways-to-reach-compass)を作成してください。
- コミュニティコントリビューター: [contributors.gitlab.com](https://contributors.gitlab.com/)でコミュニティフォークへのアクセスを申請してください。承認後は、貢献に [GitLab Duo を使用](https://docs.gitlab.com/development/contributing/first_contribution/)できます。

オンボーディングについては、[GitLab Duo Agent Platform の利用開始](https://docs.gitlab.com/user/get_started/get_started_agent_platform/)ドキュメントに従ってください。

## IDE と CLI での GitLab Duo {#gitlab-duo-in-ides-and-cli}

GitLab Duo の拡張機能を介した IDE 統合については、[エディター拡張ドキュメント](https://docs.gitlab.com/editor_extensions/#available-extensions)を参照してください。

ターミナルでは、[GitLab Duo CLI](https://docs.gitlab.com/user/gitlab_duo_cli/)を使用します。

## 関連リソース

- [GitLab Duo Agent Platform ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/)
  - [利用開始](https://docs.gitlab.com/user/get_started/get_started_agent_platform/)
  - [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)
  - [基本フロー](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/)
  - [Code Suggestions](https://docs.gitlab.com/user/duo_agent_platform/code_suggestions/)
- AI ツールを GitLab に接続する [GitLab MCP サーバー](https://docs.gitlab.com/user/model_context_protocol/mcp_server/)と、GitLab Duo を外部 MCP サーバーに接続する [GitLab MCP クライアント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/)
- [GitLab Duo ドキュメント](https://docs.gitlab.com/user/gitlab_duo/)
  - [ユースケース](https://docs.gitlab.com/user/gitlab_duo/use_cases/)
  - [GitLab Duo Non-Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/)
- ハンドブックを変更するための GitLab Duo ワークフローを紹介する[ハンドブックの編集](/handbook/about/editing-handbook/)
- [GitLab University](https://university.gitlab.com)
  - [AI および GitLab Duo コース](https://university.gitlab.com/learn/dashboard?labels=%5B%22Topic%22%5D&values=%5B%22AI%22%5D)
  - [GitLab Duo Enterprise ラーニングパス](https://university.gitlab.com/learn/learning-path/gitlab-duo-enterprise-learning-path)
- [Developer Advocacy リソース](/handbook/marketing/product-and-technical-marketing/developer-advocacy/)
  - [コンテンツライブラリ](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/)（GitLab Duo のデモ、ユースケース、製品ツアー、トーク、ワークショップ、レコーディングなど）
  - IDE、CLI、AI ツールのセットアップに関する[開発環境](/handbook/marketing/product-and-technical-marketing/developer-advocacy/dev-environments/)
- [Highspot: フィールドガイド](https://gitlab.highspot.com/items/6459a4f9a583c8ebe9aa5a64)（社内のみ、フィールドチーム向け）
- ドッグフーディング: [GitLab Duo の開発に関するブログチュートリアルシリーズ](https://about.gitlab.com/blog/2024/06/03/developing-gitlab-duo-series/)

## ヒント

GitLab Duo Agentic Chat は GitLab、プログラミング言語、テクノロジーなどに関する多くの質問に答えてくれます。複数のブラウザ検索タブを開く代わりに、質問の仕方やフォローアップの会話を作る練習をしてみましょう。チャットプロンプトと応答を試行錯誤し、イテレーションしてみてください。

エージェントにコンテキストを提供します:

1. Agentic Chat でプロジェクトを選択し、プロンプトで Issue、マージリクエスト、ファイルを参照します。
1. エージェントがプロジェクトの規約に従うよう、`AGENTS.md` ファイルと[カスタムルール](https://docs.gitlab.com/user/duo_agent_platform/customize/custom_rules/)をプロジェクトに追加します。
1. コード、マージリクエスト、パイプライン、デプロイ、脆弱性、所有者のライフサイクルコンテキストグラフである [GitLab Orbit](https://docs.gitlab.com/orbit/)（ベータ版）を有効にします。エージェントは、コードベースを巡回する代わりにグラフに問い合わせ、根拠のあるコンテキストを取得します。
1. [MCP クライアント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/)を通じて外部のツールやデータを接続します。

Markdown を含むすべての言語での Code Suggestions のサポートが、各 IDE に順次展開されています。現在の状況は [Duo Agent Platform 全体で「すべて」のプログラミング言語をサポートする](https://gitlab.com/gitlab-org/gitlab/-/work_items/571515)を参照してください。複数のタブを開きファイルコンテンツを増やすことで、提案の[コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/context/)と品質を高められます。

さらなるユースケースとワークフローは [GitLab Duo Agent Platform ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/)に記載されています。

オープンな機能リクエスト:

1. [GitLab Duo Chat でハンドブックの質問に回答できるようにする](https://gitlab.com/gitlab-com/content-sites/handbook/-/issues/212)

## ハンドブックのユースケース

[ハンドブック編集ガイド](/handbook/about/editing-handbook/)には、ハンドブックを変更するための GitLab Duo ワークフローが記載されています:

- Agentic Chat で [GitLab のエージェントに依頼](/handbook/about/editing-handbook/#ask-an-agent-in-gitlab)し、ページの検索、計画、変更を行います。
- [Developer Flow で大規模な変更を計画](/handbook/about/editing-handbook/#plan-larger-changes-with-developer-flow)し、Duo Developer にレビューのフィードバックへの対応を依頼します。
- Slack の GitLab Duo を使って、[Slack の議論をハンドブックの更新につなげます](/handbook/about/editing-handbook/#turn-slack-discussions-into-handbook-updates)。
- VS Code と GitLab Duo CLI で、[エディターやターミナルのエージェントを使用します](/handbook/about/editing-handbook/#use-an-agent-in-your-editor-or-terminal)。

### Markdown のテーブルを作成する

解決したい問題: `ハンドブックページにテーブルを追加する方法はありますか？`

Agentic Chat で以下のプロンプトを使って、事前定義のデータカラムでテーブルを作成します:

```markdown
Create a Markdown table with the following data set
Header: Cloud, GPU type, Costs, Spec, Notes
Fill the entries with sample data for 3 rows.
```

Agentic Chat は Markdown テーブルを可視化することがあります。これを活用して結果が期待どおりであることを確認し、出力フォーマットを raw Markdown に指定するフォローアッププロンプトに進みます。

```markdown
Show the raw Markdown in a code block
```

### Markdown テーブルの更新やリファクタリング

ときには、Markdown テーブルを複数のテーブルに分割したり、1 つに統合したり、追加の列を加える必要があります。

1. IDE でファイルを開き、更新またはリファクタリングするテーブルを選択します。
1. Agentic Chat に以下のプロンプトを送信します:

   ```markdown
   Refactor the selected table for better readability. Split it by the first column into separate tables.
   ```

1. 提案された変更を受け入れる前に、差分ビューで確認します。

## 開発のユースケース

[基本フロー](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/)は、一般的な開発タスクを自動化します:

1. [Developer](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/developer/) は、Issue を実装し、マージリクエストでレビューのフィードバックに対応します。
1. [Code Review](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/code_review/) は、マージリクエストをレビューします。
1. [Fix CI/CD Pipeline](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/fix_pipeline/) は、失敗したパイプラインを分析し、修正します。
1. [GitLab Duo による競合の解決](https://docs.gitlab.com/user/project/merge_requests/conflicts/#resolve-conflicts-with-gitlab-duo)は、マージの競合を解決し、コミットしてソースブランチにプッシュします。
1. [Security Review](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/security_review/) は、マージリクエストのセキュリティリスクをレビューします。
1. [SAST False Positive Detection](https://docs.gitlab.com/user/application_security/vulnerabilities/false_positive_detection/) と [Secret False Positive Detection](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/secret_false_positive_detection/) は、対応不要な検出結果を除外します。
1. [SAST Vulnerability Resolution](https://docs.gitlab.com/user/application_security/vulnerabilities/agentic_vulnerability_resolution/) は、マージリクエストで脆弱性の修正を提案します。

Agentic Chat では、[Planner](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/planner/)、[CI Expert](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/ci_expert_agent/)、[Security Analyst](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/security_analyst_agent/) などの[基本エージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/)を利用できます。

### 初めて触れるコードベースを理解する {#understand-an-unknown-code-base}

プロジェクトで Agentic Chat を開き、概要を尋ねます:

```markdown
I am new to this project. What does it do, how does it work, and where should I start?
```

[GitLab Orbit](https://docs.gitlab.com/orbit/)（ベータ版）により、Agentic Chat はコードとライフサイクルの完全なコンテキストを取得し、コードがマージリクエスト、パイプライン、デプロイ、脆弱性、所有者とどのように関係するかを回答できます:

```markdown
How does this project connect to the other projects in the group, and what does that reveal about its development history, owners, dependencies, and risks?
```

### Issue を実装する {#implement-an-issue}

1. ビルドやテストの方法など、プロジェクトの指示を記載した `AGENTS.md` ファイルを追加します。
1. 対象を絞った Issue を開き、その Issue から Developer Flow を開始します。
1. セッションを開いて進捗を確認し、フローの実行中はほかの作業を進めます。
1. エージェントが追加したテストを含め、マージリクエストをレビューします。

### 失敗した CI/CD パイプラインのトラブルシューティング

1. 失敗したパイプラインのジョブビューに移動し、ログを確認します。
1. Agentic Chat の CI Expert エージェントに、何がなぜ失敗したのかを尋ねます:

   ```markdown
   Analyze the failing pipeline in this MR. Identify which jobs failed, what each failed job was supposed to prove, and the smallest code or test change that fixes the problem without weakening CI.
   ```

1. [Fix CI/CD Pipeline フロー](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/fix_pipeline/)を開始し、マージリクエストで修正を提案します。

### マージの競合を解決する {#resolve-merge-conflicts}

1. マージリクエストで **Resolve conflicts** を選択し、次に **Resolve with GitLab Duo** を選択します。または、マージウィジェットで **Resolve with GitLab Duo** を選択します。
1. GitLab Duo がソースブランチにプッシュしたコミットをレビューします。双方の変更が意図した動作を維持し、テストが引き続き成功する必要があります。

### 大規模な変更を計画する {#plan-larger-changes}

ランタイムやフレームワークのアップグレードなど、実装前にエピックをレビューするよう Planner エージェントに依頼します:

```markdown
Review this epic and its child work items against the current repository. Identify missing work, oversized issues, unsafe ordering, unclear acceptance criteria, and absent validation or rollback boundaries. Do not implement anything.
```

### 脆弱性をトリアージして解決する {#triage-and-resolve-vulnerabilities}

1. 脆弱性レポートを開き、検出結果を選択します。
1. Security Analyst エージェントにコンテキストを尋ねます:

   ```markdown
   Explain this vulnerability for the developer who owns this project. Summarize the risk, likely exploit path, urgency, affected code, false-positive indicators, and safest next action.
   ```

1. 誤検出の判定を実行し、その検出結果に対応が必要かを確認します。
1. 検出結果が有効な場合は、脆弱性の解決を開始し、提案されたマージリクエストをレビューします。

[Developer Advocacy コンテンツライブラリ](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/)で、さらにユースケースを探求してください。

### オンボーディングと貢献

チームメンバーやコミュニティコントリビューターは、エージェントやフローを活用して、迅速なオンボーディング、コードベースや GitLab に関する学習、より速いレビューサイクルでの貢献ができます。

1. Agentic Chat にソースコードベースについて尋ね、特定の機能提案やバグ修正の実装方法を探求します。
1. Code Review フローを使って、マージリクエストのレビューをスピードアップします。
1. Fix CI/CD Pipeline フローで、失敗する CI/CD パイプラインのトラブルシューティングを行います。

詳しくは [GitLab Duo ユースケースのドキュメント](https://docs.gitlab.com/user/gitlab_duo/use_cases/#use-gitlab-duo-to-contribute-to-gitlab)を参照してください。
