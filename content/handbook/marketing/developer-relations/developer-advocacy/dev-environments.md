---
title: デベロッパーアドボケイトの開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T09:06:21-04:00"
---

デベロッパーアドボケイトは、GitLab Duo Agent Platform を使用した AI ネイティブワークフローを含む、さまざまなタイプのプラットフォーム、エディタ、IDE で作業します。このページでは、デベロッパーアドボカシー関連のセットアップを最適化するためのベストプラクティスと役立つヒントをまとめます。

## リソース

[GitLab Duo Agent Platform ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/) から始めて、[IDE](#ides)、[CLI](#cli)、MCP やカスタムルールなどを使った [拡張性とカスタマイズ](#extensibility-and-customization) を読み進めてください。

アーキテクチャに関するインサイトは、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

[GitLab Duo Agent Platform launch support issue - DevRel（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878) は、製品・エンジニアリングのアップデート、GTM とコンテンツ戦略、ユースケース開発を集約しています。

## IDE {#ides}

デベロッパーアドボケイトは、プロジェクトやコンテンツの要件に応じて、さまざまな IDE を使用できます。IDE の機能とユースケースを理解し、それらをコンテンツ依頼の焦点に据え、対象オーディエンスごとに使い分けて多様化することが重要です。

### IDE での AI と GitLab Duo

GitLab Duo と GitLab Duo Agent Platform は、[IDE 拡張機能／プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions) として統合されています。

### Visual Studio Code

Visual Studio Code（略称: VS Code）は、マーケットプレイスを通じてさまざまなプログラミング言語と開発ツールの統合をサポートしています。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/) を通じて統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![VS Code のライトテーマ。右パネルに Duo Agentic Chat を表示。エージェントによる編集後の差分ビューをエディタに表示。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス

1. よく使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings) を学び、頻繁に練習しましょう。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) に助けを求めることもできます。
1. ターミナルから `code .` ショートカットを使ってローカルの Git リポジトリやディレクトリを開きましょう。これにより、GitLab UI、VS Code、ターミナルの間でコンテキストを切り替える必要があるときに、コードの編集／デバッグのワークフローが簡単になります。
1. VS Code でターミナルを開きましょう（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながらサーバー、コンパイラ、Ansible playbook などの実行といったバックグラウンドタスクを開始でき、別ウィンドウ間でのコンテキストスイッチを避けられます。

#### 推奨設定と拡張機能

1. 編集中の自動保存を有効にしましょう。これにより、コードを書くときのデータ消失や Git コミットデータの欠落を防げます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`auto save` を検索します。
   - VS Code の `settings.json`: `"files.autoSave": "afterDelay"` のキー/値を新たに追加します。
1. デフォルトで折り返し（word-wrap）を有効にしましょう。これにより、長い行を横スクロールせずに読めるようになります。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`word wrap` を検索します。
   - VS Code の `settings.json`: `"editor.wordWrap": "on"` のキー/値を新たに追加します。
1. 日常的に必要な拡張機能をインストールし、信頼できるソースのみを使用しましょう。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) でメンテナンスされているリストを参照してください
   - CLI で `code --install-extension` を使って拡張機能をインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### デモ設定: VS Code のプロファイルとテーマ

VS Code のデフォルトプロファイルはダークテーマを使用します。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターでより見やすく、[デモの録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) にも役立ちます。

```json
"workbench.colorTheme": "Default Light Modern",
```

異なるテーマやインストール済み拡張機能を管理するために、複数のプロファイル（例: `Default` と `Light theme for demos`）を作成することをおすすめします。

デモ録画に必要な設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

##### Chat を右パネルに移動

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、同じく左側にあるエクスプローラーのファイルツリーや Git コミットと干渉する可能性があります。

Chat を右サイドバーに移動するには:

1. 右上隅のアイコンでセカンダリサイドバーを開きます。
1. Chat アイコン（例: Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数の Chat パネルを並行して使用できます。

@dnsmichi はこのセットアップをデフォルトで使用しています。

##### GitLab Duo Code Suggestions の追加言語を有効にする

1. 次の 2 つの方法から選びます:
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` を検索します。
   - VS Code の `settings.json`: macOS では `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを、文字列の配列を値として追加または変更します。
1. `README.md` ファイルの編集時にもっとコードサジェスチョンを表示したい場合は、配列に `markdown` を追加します。
   - @dnsmichi は、`settings.json` における以下の言語の品質と関連性に自信を持っています（開発テストサイクル: 1 年以上）:

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

1. Code Suggestions には適切なコンテキストがあることが重要です。現在のタスクに関連するタブをもっと多く開いておきましょう。それらが [コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of) として使われます。

VS Code の `settings.json` の完全な例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads) にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform をデバッグする

ユースケースの一例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動し、追加の AI コンテキストを消費していることを検証したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) は GitLab 向けの IDE 拡張機能全体でバックエンドを動かしており、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューを使って拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューは拡張機能のログをターミナルにストリーミングします。GitLab Duo で UI アクションをトリガーし、クライアントが正しいデータを送信しているか観察します。
1. `Filter` フォームを使って出力を検索／フィルターできます。例えば `mcp` で MCP 統合に関連するエントリを切り出せます。
1. オプション: ログの詳細度を `debug` に上げます:
   - 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` チェックボックスをオンにして VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に動き続けたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) べきか調査してください。

### JetBrains IDE

デベロッパーアドボケイトは、さまざまな目的やユースケースのために [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) にアクセスできます:

- IntelliJ IDEA Ultimate（Java、Kotlin、Scala）
- PyCharm（Python、Django）
- GoLand（Go）
- DataGrip（SQL、データベース）
- RubyMine（Ruby、Rails）
- PhpStorm（PHP）
- WebStorm（JavaScript、TypeScript、HTML/CSS）
- Rider（C#、.NET）
- CLion（C、C++）
- Android Studio（Android 開発）

IntelliJ IDEA は他の言語のプラグインもサポートしており、利用可否はサブスクリプションのティア（Ultimate と Community）によって異なります。

GitLab Duo は、[JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/) を使って統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![JetBrains IntelliJ IDEA と Duo Agentic Chat。Java 8 を 21 にモダナイズしているところ。エディタにはエージェントによる編集の差分ビューを表示。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/) を確認し、必要に応じて追加の恒久的な IDE ライセンスの Access Request を作成しましょう。
1. [セットアップと設定のガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/) を読み、個々の IDE とそのアップデートを管理するために [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールしましょう。
   - オプションのヒント: デフォルトでは、Toolbox は古いインストール済みバージョンを保持します。この動作がストレージ消費の問題を引き起こす場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効にします。
   - JetBrains IDE は、既存のセットアップから設定を移行／インポートできます。これにより、GitLab Duo プラグインを一度インストール／設定し、それを別の JetBrains IDE にインポートするのが便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に動き続けたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) べきか調査してください。

#### デモ設定: JetBrains IDE での外観

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動し、`Light with Light Header` を選択します。

`Zoom` ドロップダウンを 125% に変更すると、講演でのライブデモで細部が見やすくなります。

デモ録画に必要な設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

### MS Visual Studio

> Note: Windows と Visual Studio ライセンスへのアクセスが必要で、追加のセキュリティレビューも必要です。
>
> Status: 調査中。ToDo は [この社内 issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712) で追跡しています。

GitLab Duo は、[Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/) を使って統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

### Eclipse

GitLab Duo は、[Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/) を使って統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使って新しい neovim の設定を始め、neovim 体験をブートストラップして最適化しましょう。

GitLab Duo は、[neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/) を使って統合できます。

## CLI {#cli}

### GitLab Duo CLI {#gitlab-duo-cli}

GitLab Duo CLI は、ターミナル上で [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) へのアクセスを提供します。

要件:

1. NodeJS 22 以上をインストールします。例えば [mise](#mise-for-managing-language-runtimes) を使います
1. `api` スコープを持つ Personal Access Token を作成します。
1. CLI をインストールします。
1. CLI を実行して設定のダイアログを開始します。

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

機能とロードマップのアップデートについては [製品エピック](https://gitlab.com/groups/gitlab-org/-/epics/19070) をフォローし、フィードバックは [Duo CLI Feedback & Dogfooding エピック](https://gitlab.com/groups/gitlab-org/-/epics/19806) に追加してください。

### Claude Code

Claude Code へのアクセスを得ることは、コンテンツ制作に役立ちます。例えば、次のブログチュートリアルがあります: [Claude Code and GitLab: Three workflows that ship](https://about.gitlab.com/blog/claude-code-and-gitlab/)。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、Anthropic API キーの [Access Request](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例（社内）](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/39031)
1. [Claude Console](https://platform.claude.com/settings/keys) で API キーを作成します
1. [Claude Code](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) をインストールします
1. Console の API キーで Claude Code に認証します。

```shell
claude auth login
```

プロジェクトに移動し、Claude Code に `What is this project about?` とプロンプトを入力します。

ヒント: より良いコンテキストのために、[GitLab MCP Server を Claude Code に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server) しましょう。

### Codex

Codex へのアクセスを得ることは、コンテンツ制作に役立ちます。例えば、次のブログチュートリアルがあります: [Codex and GitLab: From code fix to production](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/)

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、OpenAI キーの [Access Request](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例（社内）](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)。
1. OpenAI プラットフォームに移動します。`GitLab` 組織と `Default project` を選択し、[API キー](https://platform.openai.com/api-keys) を生成します
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

ヒント: より良いコンテキストのために、[GitLab MCP Server を Codex に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server) しましょう。

## 拡張性とカスタマイズ {#extensibility-and-customization}

### Skills

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/) は、エージェントやユーザーによってオンデマンドで読み込まれ、デフォルトではコンテキストウィンドウを小さく保ちます。

サンプルプロジェクト:

- [Tone of Voice for dnsmichi](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

### AGENTS.md

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/) はカスタムルールに似ています。ルートおよびサブディレクトリレベルの AGENTS.md ファイルをサポートし、特定のプロジェクトやディレクトリをどのようにナビゲートして使用するかについて、エージェント型 AI を導き、指示します。

サンプルプロジェクト:

- [Tanuki IoT Platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/blob/main/AGENTS.md?ref_type=heads)

### カスタムルール

**新規または既存のすべてのデベロッパーアドボカシープロジェクトに、デフォルトでカスタムルールを追加することを検討してください。**

1. [Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/#create-custom-rules) のカスタムルール。
2. [Code Review Agent](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#customize-instructions-for-gitlab-duo-code-review) のカスタムレビュー指示。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/) のシステムプロンプト。

サンプルプロジェクト:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/tree/main/.gitlab/duo?ref_type=heads)

### MCP クライアント

MCP クライアントを IDE に統合する方法については、[GitLab MCP Clients ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/) を参照してください。

社内の調査 issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP サーバー

AI ツールと IDE でのセットアップと設定については、[GitLab MCP Server ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) を参照してください。

### Knowledge Graph / Orbit

セットアップと統合の手順については、[Orbit ドキュメント](https://docs.gitlab.com/orbit/) をフォローしてください。

### Duo Agent Platform 用のセルフホストモデル

サポートされているセルフホスト型モデルへのアクセスには、エンジニアリングのテストインフラストラクチャへのアクセスが必要です。DRI、選択肢、アイデアについては [FY26 のセルフホスト型モデル調査（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources) を参照してください。

## GitLab Duo Agent Platform のユースケース

### デベロッパーアドボケイトのユースケースプロンプト

これらのプロンプトを、IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) と [CLI](#gitlab-duo-cli) で使用してください:

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

## 開発

### 言語ランタイム管理のための mise {#mise-for-managing-language-runtimes}

[mise](https://mise.jdx.dev/) は、さまざまな言語ランタイムやツールの管理を助けるポリグロットなバージョンマネージャーです。[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) や [GitLab handbook](https://handbook.gitlab.com/docs/development/running-locally/) で、Node.js、Ruby、Go、その他の依存関係を管理するために使われています。

デベロッパーアドボケイトは、`mise` を使って次のことができます:

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などの異なるバージョンを簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: プロジェクト固有のツールバージョンを `.mise.toml` や `.tool-versions` ファイルで定義し、すべてのチームメンバー（や自分の異なるプロジェクト）が同じ環境を使用することを保証します。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` などのツールを、システム全体への干渉なしにインストールして管理します。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE などの IDE が `mise` で管理されている正しいツールバージョンを認識するようにします。

#### mise のヒントとベストプラクティス

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html) に従ってください。
1. **シェルを設定する**: `eval "$(mise activate)"` をシェルの設定ファイル（例: `.zshrc`、`.bashrc`）に追加します。
1. **`.mise.toml` または `.tool-versions` を使う**: プロジェクト固有のバージョンには、これらのファイルのいずれかをプロジェクトルートに作成します。`mise` は、ディレクトリに移動すると指定されたバージョンを自動的に検出してアクティブにします。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使って、ツールのグローバルなデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: `mise current` を使って、現在のディレクトリでアクティブなツールバージョンを確認します。
1. **インストール済みバージョンを一覧表示する**: `mise ls` を使って、ツールのインストール済みバージョンをすべて確認します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使い方や設定については、[mise ドキュメント](https://mise.jdx.dev/dev-tools/) を参照してください。

#### GitLab 開発における mise 環境

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides) および [CLI](#cli) に統合）

## リモート開発ワークスペース

[Workspaces](https://docs.gitlab.com/user/workspace/) は、[Developer Relations Cloud Resources](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/) 上で動作するクラウド開発環境を提供します。

> Status: 非アクティブ。現在、インフラストラクチャのメンテナーはいません。以下のドキュメントは、将来の歴史的な参照のために残されています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development) には Kubernetes 用のエージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトに文書化されています。これには、エージェントが応答しなくなりワークスペースが作成されない場合のトラブルシューティングも含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` は GKE で稼働している必要があります。現在のリソース: 3 ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入され、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動生成されており、[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) に従って四半期ごと（2023-08-15）に更新する必要があります。

## 学習リソース

### チームメンバーの例

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)。IDE や開発ツールを含む作業環境のセットアップを文書化しています。

### Dev Environments を強調する講演とデモ

[デベロッパーアドボカシーのコンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/) と以下のリソースを参照してください:

1. Learning AI 101: Practical Foundations for Developers - 2025-06, Open Source @ Siemens
    - スライド: [公開](https://dnsmichi.click/learning-ai-101-os-siemens-2025)、[社内](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12, GitLab DACH Roadshow FY25
    - スライド: [公開](https://go.gitlab.com/JRFMG4)、[社内](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
