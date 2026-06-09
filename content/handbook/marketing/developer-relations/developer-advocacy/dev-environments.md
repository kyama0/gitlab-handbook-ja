---
title: デベロッパーアドボケイトの開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-08T11:30:44+02:00"
---

デベロッパーアドボケイトは、GitLab Duo Agent Platform を使用した AI ネイティブワークフローを含む、さまざまなタイプのプラットフォーム、エディタ、IDE で作業します。このページでは、デベロッパーアドボカシー関連のセットアップを最適化するためのベストプラクティスと役立つヒントをまとめます。

## Resources

[GitLab Duo Agent Platformdocumentation](https://docs.gitlab.com/user/duo_agent_platform/) から始めて、[IDE](#ides)、[CLI](#cli)、MCP やカスタムルールなどを使った [拡張性とカスタマイズ](#extensibility-and-customization) を読み進めてください。

アーキテクチャに関するインサイトについては、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

[GitLab Duo Agent Platform launch support issue - DevRel (内部)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878) には、製品／エンジニアリングのアップデート、GTM とコンテンツの戦略、ユースケースの開発がまとめられています。

## IDEs

デベロッパーアドボケイトは、プロジェクトやコンテンツの要件に応じてさまざまな IDE を使用できます。IDE の機能とユースケースを理解し、コンテンツのリクエストでそれらに焦点を当て、さまざまなオーディエンス向けに使い方を多様化することが鍵となります。

### AI and GitLab Duo in IDEs

GitLab Duo および GitLab Duo Agent Platform は、[IDE 拡張機能／プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions) として統合されています。

### Visual Studio Code

Visual Studio Code（略: VS Code）は、マーケットプレイスを通じてさまざまなプログラミング言語と開発ツール統合をサポートします。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/) を通じて統合できます。

> **Note**
>
> 初期セットアップを完了した後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を確認してください。

![VS Code, light theme, with Duo Agentic Chat in the right panel. Editor shows diff view after agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### Tips and best practices for VS Code

1. よく使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings) を学んで頻繁に練習しましょう。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) に助けを求めることもできます。
1. ターミナルから `code .` のショートカットを使ってローカルの Git リポジトリやディレクトリを開きます。これにより、GitLab UI、VS Code、ターミナルの間でコンテキストを切り替える必要があるときに、コードの編集／デバッグのワークフローが簡素化されます。
1. VS Code でターミナルを開きます（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながらサーバーの実行、コンパイラ、Ansible プレイブックなどのバックグラウンドタスクを開始でき、複数のウィンドウ間のコンテキスト切り替えを回避できます。

#### Recommended settings and extensions

1. 編集中の自動保存を有効にします。これにより、コードを書く際のデータ損失や Git のコミットデータの欠落を回避できます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`auto save` を検索します。
   - VS Code の `settings.json`: `"files.autoSave": "afterDelay"` の新しいキー／値を追加します。
1. デフォルトで word-wrap を有効にします。これにより、横スクロールせずに長い行を読めるようになります。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`word wrap` を検索します。
   - VS Code の `settings.json`: `"editor.wordWrap": "on"` の新しいキー／値を追加します。
1. 定期的に必要とする拡張機能をインストールし、信頼できるソースのみを使用します。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) で管理されているリストを確認してください
   - 拡張機能は `code --install-extension` で CLI からインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### Demo settings: Profiles and themes in VS Code

VS Code のデフォルトプロファイルはダークテーマを使用します。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターでより見やすく、[デモ録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) にも役立ちます。

```json
"workbench.colorTheme": "Default Light Modern",
```

異なるテーマとインストール済みの拡張機能を管理するために、複数のプロファイル（例: `Default` と `Light theme for demos`）を作成することをおすすめします。

デモ録画に必要な設定については、[動画ガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を確認してください。

##### Move Chat to the right panel

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、同じく左側にあるエクスプローラーのファイルツリーや Git コミットと干渉する可能性があります。

Chat を右サイドバーに移動するには、次の手順を実行します。

1. 右上隅のアイコンで Secondary Side bar を開きます。
1. Chat アイコン（例: Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数の Chat パネルを並行して使用できます。

@dnsmichi はこのセットアップをデフォルトで使用しています。

##### Enable additional languages for GitLab Duo Code Suggestions

1. 2 つの方法から選びます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` を検索します。
   - VS Code の `settings.json`: macOS では `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを文字列の配列を値として追加／変更します。
1. `README.md` ファイルを編集するときにより多くのコード提案を表示したい場合は、配列に `markdown` を追加します。
   - @dnsmichi は、`settings.json` の次の言語の品質と関連性に自信を持っています（開発テストサイクル: 1 年以上）。

    ```json
    {
        "gitlab.duoCodeSuggestions.additionalLanguages": [
            "powershell",
            "yaml",
            "ansible",
            "perl",
            "dockerfile",
            "markdown",
            "json"
        ],
    }
    ```

1. Code Suggestions が適切なコンテキストを得ることは重要です。現在のタスクに関連するタブをより多く開くと、それらが [コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of) として使用されます。

VS Code の完全な `settings.json` の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads) にあります。

#### Debug VS Code extensions and GitLab Duo Agent Platform

ユースケースの例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動し、追加の AI コンテキストを取り込んでいることを検証したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) は GitLab の IDE 拡張機能全体でバックエンドを動かしており、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューを使って拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューは拡張機能のログをターミナルにストリーミングします。GitLab Duo で UI のアクションをトリガーし、クライアントが正しいデータを送信しているかを観察します。
1. `Filter` フォームを使って出力を検索／フィルターできます。例: `mcp` で MCP 統合に関連するエントリを抽出します。
1. オプション: ログの詳細度を `debug` に上げます。
   - 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` のチェックボックスをオンにし、VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に動き続けたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効化するか](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) を検討してください。

### JetBrains IDEs

デベロッパーアドボケイトは、さまざまな目的やユースケースのために [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) にアクセスできます。

- IntelliJ IDEA Ultimate (Java, Kotlin, Scala)
- PyCharm (Python, Django)
- GoLand (Go)
- DataGrip (SQL, Databases)
- RubyMine (Ruby, Rails)
- PhpStorm (PHP)
- WebStorm (JavaScript, TypeScript, HTML/CSS)
- Rider (C#, .NET)
- CLion (C, C++)
- Android Studio (Android development)

IntelliJ IDEA は他の言語のプラグインもサポートしており、その利用可否はサブスクリプションのティア（Ultimate と Community）によって異なります。

GitLab Duo は、[JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/) を使って統合できます。

> **Note**
>
> 初期セットアップを完了した後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を確認してください。

![JetBrains IntelliJ IDEA with Duo Agentic Chat, modernizing Java 8 to 21, editor shows diff view from agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### Tips and best practices for JetBrains IDEs

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/) を確認し、必要に応じて追加の恒久的な IDE ライセンスのアクセスリクエストを作成します。
1. [セットアップと設定のガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/) を読み、個々の IDE とそのアップデートを管理するために [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールします。
   - オプションのヒント: デフォルトでは、Toolbox は古いインストール済みバージョンを保持します。この動作がストレージ消費の問題を引き起こす場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効にします。
   - JetBrains IDE は、既存のセットアップから設定を移行／インポートできます。これは、GitLab Duo プラグインを一度インストール／設定し、別の JetBrains IDE にインポートするのに便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に動き続けたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効化するか](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) を検討してください。

#### Demo settings: Appearance in JetBrains IDEs

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動し、`Light with Light Header` を選択します。

ライブデモで詳細を見やすくするために、`Zoom` ドロップダウンを 125% に変更できます。

デモ録画に必要な設定については、[動画ガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を確認してください。

### MS Visual Studio

> Note: Windows と Visual Studio のライセンスへのアクセスが必要で、追加のセキュリティレビューが必要です。
>
> ステータス: 調査中。Todo は [この内部 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712) で追跡されています。

GitLab Duo は、[Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/) を使って統合できます。

> **Note**
>
> 初期セットアップを完了した後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を確認してください。

### Eclipse

GitLab Duo は、[Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/) を使って統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使って新しい neovim の設定を始め、neovim の体験をブートストラップして最適化してください。

GitLab Duo は、[neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/) を使って統合できます。

## CLI

### GitLab Duo CLI

GitLab Duo CLI は、ターミナル上で [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) へのアクセスを提供します。

要件:

1. NodeJS 22+ をインストールします。たとえば、[言語ランタイムの管理に mise を使う](#mise-for-managing-language-runtimes) 方法があります。
1. `api` スコープのパーソナルアクセストークンを作成します。
1. CLI をインストールします。
1. CLI を実行して設定ダイアログを開始します。

```shell
mise install node@22

npm i -g @gitlab/duo-cli

duo
```

使用例:

```markdown
Which tools are available?

What is this repository about

Which issues need my attention

Help me implement issue 15

The pipelines in MR 23 fail. Please fix them.
```

CLI は [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を使って AIGW および DAP サービスと通信するため、CLI は `gitlab-lsp` の内部で開発されています。

機能とロードマップのアップデートについては [製品エピック](https://gitlab.com/groups/gitlab-org/-/epics/19070) をフォローし、[Duo CLI Feedback & Dogfooding エピック](https://gitlab.com/groups/gitlab-org/-/epics/19806) にフィードバックを追加してください。

### Claude Code

Claude Code へのアクセスを得ることは、コンテンツ作成に役立ちます。たとえば、次のブログチュートリアルがあります: [Claude Code and GitLab: Three workflows that ship](https://about.gitlab.com/blog/claude-code-and-gitlab/)。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、Anthropic API キーの [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例 (内部)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/39031)
1. [Claude Console](https://platform.claude.com/settings/keys) で API キーを作成します
1. [Claude Code](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) をインストールします
1. Console の API キーで Claude Code に認証します。

```shell
claude auth login
```

プロジェクトに移動し、Claude Code に `What is this project about?` とプロンプトを入力します。

ヒント: より良いコンテキストのために、[GitLab MCP Server を Claude Code に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server) します。

### Codex

Codex へのアクセスを得ることは、コンテンツ作成に役立ちます。たとえば、次のブログチュートリアルがあります: [Codex and GitLab: From code fix to production](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/)

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、OpenAI キーの [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例 (内部)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)。
1. OpenAI のプラットフォームに移動します。`GitLab` 組織と `Default project` を選択し、[API キー](https://platform.openai.com/api-keys) を生成します
1. Homebrew で [Codex CLI](https://developers.openai.com/codex/cli) をインストールします。
1. `--with-api-key` パラメータでログインし、STDIN から API キーを読み込みます。

```shell
# Set your key in your shell environment (e.g. ~/.zshrc or a .env manager in 1Password)
export OPENAI_API_KEY="sk-..."

# Log in — key is read from the environment, not the command line
printenv OPENAI_API_KEY | codex login --with-api-key

# Verify
codex login status
```

プロジェクトに移動し、Codex に `What is this project about?` とプロンプトを入力します。

ヒント: より良いコンテキストのために、[GitLab MCP Server を Codex に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server) します。

## Extensibility and Customization

### Skills

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/) はエージェントまたはユーザーによってオンデマンドで読み込まれ、デフォルトではコンテキストウィンドウを小さく保ちます。

プロジェクトの例:

- [Tone of Voice for dnsmichi](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

### AGENTS.md

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/) はカスタムルールに似ています。ルートおよびサブディレクトリレベルの AGENTS.md ファイルをサポートし、特定のプロジェクトやディレクトリをどのようにナビゲートして使用するかをエージェント型 AI に案内・指示します。

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### Custom Rules

**新規または既存のすべての Developer Advocacy プロジェクトに、デフォルトでカスタムルールを追加することを検討してください。**

1. [カスタムルール](https://docs.gitlab.com/user/duo_agent_platform/customize/custom_rules/)
2. [Code Review Flow](https://docs.gitlab.com/user/duo_agent_platform/customize/review_instructions/) のカスタムレビュー指示。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/) のシステムプロンプト

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### MCP Clients

MCP クライアントを IDE に統合する方法については、[GitLab MCP Clients ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/) を参照してください。

内部の調査 Issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP Server

AI ツールや IDE でのセットアップと設定については、[GitLab MCP Server ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) を参照してください。

### Knowledge Graph / Orbit

セットアップと統合の手順については、[Orbit ドキュメント](https://docs.gitlab.com/orbit/) をフォローしてください。

[Orbit GA 製品エピック](https://gitlab.com/groups/gitlab-org/-/work_items/19744) は、開発と機能のロードマップを追跡しています。

### Self-hosted models for Duo Agent Platform

サポートされているセルフホストモデルへのアクセスには、エンジニアリングのテストインフラへのアクセスが必要です。DRI、選択肢、アイデアについては、[FY26 のセルフホストモデルの調査 (内部)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources) を確認してください。

## GitLab Duo Agent Platform use cases

### Developer Advocates use case prompts

これらのプロンプトを、IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) や [CLI](#gitlab-duo-cli) で使用してください。

**Demo Environment Management**

- "Create a new demo project setup guide for `technology/feature`"
- "Document the prerequisites for this demo environment"
- "Generate a troubleshooting guide for common demo setup issues"
- "Create a quick start script for setting up `demo environment`"

**Demo Repository & Code**

- "Create a sample application demonstrating `GitLab feature`"
- "Add comprehensive README with setup instructions for this demo"
- "Generate example CI/CD pipeline for `language/framework` demo"
- "Create a demo showcasing `feature` integration with `technology`"

**Content Creation Support**

- "Extract code snippets from this demo for a blog post"
- "Generate speaker notes for demoing this feature"
- "Create a step-by-step tutorial from this demo repository"
- "Suggest improvements to make this demo more engaging"

**Environment Documentation**

- "Document the tools and versions used in this environment"
- "Create a comparison table of different setup approaches"
- "Generate installation instructions for `OS/platform`"
- "Document environment variables and configuration needed"

**Demo Maintenance**

- "Check if this demo uses deprecated GitLab features"
- "Update this demo to use the latest `framework` version"
- "Verify all demo links and references are still valid"
- "Test if this demo still works with current GitLab version"

**Workshop & Presentation Prep**

- "Create a workshop outline based on this demo"
- "Generate talking points for presenting this feature"
- "Build a hands-on exercise from this example"
- "Create a cheat sheet for workshop participants"

**Integration Examples**

- "Show how to integrate `tool` with GitLab in this demo"
- "Create examples for all `feature` configuration options"
- "Generate sample webhook payloads for testing"
- "Document API usage examples for this integration"

**Documentation & Content Management**

- "Review this page for broken links and outdated information"
- "Check if this documentation follows the handbook style guide"
- "Find all pages that mention `topic` and summarize them"
- "Suggest improvements to make this page more accessible"

**Repository Navigation & Understanding**

- "Show me the most recently updated pages in `directory`"
- "What are the main sections of this handbook?"
- "Find documentation about [specific process or policy]"
- "Who are the main contributors to `directory/file`?"

**Maintenance & Quality**

- "Find pages that haven't been updated in over 6 months"
- "Check for inconsistent formatting across similar pages"
- "Identify duplicate or overlapping content"
- "Review recent merge requests for this section"

**Workflow Automation**

- "Create a new handbook page for `topic` following the template"
- "Update all references to [old term] with [new term]"
- "Generate a changelog for recent updates to `section`"
- "Create an issue for outdated content in `directory`"

**Collaboration**

- "Summarize recent discussions on `topic` from issues and MRs"
- "Who should I ask about [specific handbook section]?"
- "Show me open merge requests that need review"
- "Find related work items for this documentation update"

**CI/CD Specific**

- "Convert this YAML anchor to use extends instead"
- "Add proper rules to this CI job"
- "Optimize the pipeline configuration for faster builds"

## Development

### mise for managing language runtimes

[mise](https://mise.jdx.dev/) は、さまざまな言語ランタイムやツールの管理を支援するポリグロットなバージョンマネージャーです。[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) や [GitLab ハンドブック](https://handbook.gitlab.com/docs/development/running-locally/) で、Node.js、Ruby、Go、その他の依存関係を管理するために使用されています。

デベロッパーアドボケイトは、`mise` を使って次のことができます。

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などの異なるバージョンを簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: `.mise.toml` または `.tool-versions` ファイルでプロジェクト固有のツールバージョンを定義し、すべてのチームメンバー（または複数のプロジェクト）が同じ環境を使用するようにします。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` のようなツールを、システム全体に干渉せずにインストール・管理します。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE のような IDE が `mise` で管理される正しいツールバージョンを取得するようにします。

#### Tips and best practices for mise

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html) をフォローします。
1. **シェルを設定する**: シェルの設定ファイル（例: `.zshrc`、`.bashrc`）に `eval "$(mise activate)"` を追加します。
1. **`.mise.toml` または `.tool-versions` を使う**: プロジェクト固有のバージョンには、これらのいずれかのファイルをプロジェクトのルートに作成します。ディレクトリに移動すると、`mise` は指定されたバージョンを自動的に検出してアクティブにします。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使ってツールのグローバルなデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: `mise current` を使って、現在のディレクトリでどのツールバージョンがアクティブかを確認します。
1. **インストール済みのバージョンを一覧表示する**: `mise ls` を使って、ツールのすべてのインストール済みバージョンを確認します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使用法と設定については、[mise ドキュメント](https://mise.jdx.dev/dev-tools/) を参照してください。

#### mise environments in GitLab development

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides) と [CLI](#cli) に統合）

## Remote Development Workspaces

[Workspaces](https://docs.gitlab.com/user/workspace/) は、[Developer Relations Cloud Resources](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/) 上で動作するクラウド開発環境を提供します。

> ステータス: 非アクティブ。現在、インフラのメンテナーがいません。以下のドキュメントは、将来の歴史的参照のために存在しています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development) には、Kubernetes 用のエージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトに文書化されています。これには、エージェントが応答しなくなり、workspaces が作成されないときのトラブルシューティングが含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` が GKE で稼働している必要があります。現在のリソース: 3 ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入され、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動で生成されており、[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) に従って四半期ごと（2023-08-15）に更新する必要があります。

## Learning resources

### Team member examples

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)。IDE や開発ツールを含む作業環境のセットアップが文書化されています。

### Talks and demos highlighting Dev Environments

[Developer Advocacy のコンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/) と次のリソースを確認してください。

1. Learning AI 101: Practical Foundations for Developers - 2025-06, Open Source @ Siemens
    - スライド: [public](https://dnsmichi.click/learning-ai-101-os-siemens-2025), [internal](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12, GitLab DACH Roadshow FY25
    - スライド: [public](https://go.gitlab.com/JRFMG4), [internal](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
