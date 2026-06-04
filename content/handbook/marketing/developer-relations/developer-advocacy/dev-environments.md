---
title: デベロッパーアドボケイトの開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: f15ab5a3da7a00a0393f92b1eb69968e8abddf52
translated_at: "2026-06-04T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T09:06:21-04:00"
---

デベロッパーアドボケイトは、GitLab Duo Agent Platform を使用した AI ネイティブワークフローを含む、さまざまなタイプのプラットフォーム、エディタ、IDE で作業します。このページでは、デベロッパーアドボカシー関連のセットアップを最適化するためのベストプラクティスと役立つヒントをまとめます。

## リソース

[GitLab Duo Agent Platform ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/) から始めて、[IDE](#ides)、[CLI](#cli)、MCP やカスタムルールを使った [拡張性とカスタマイズ](#extensibility-and-customization) を読み進めてください。

アーキテクチャの詳細については、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

[GitLab Duo Agent Platform launch support issue - DevRel (internal)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878) では、プロダクト/エンジニアリングの更新情報、GTM とコンテンツ戦略、ユースケース開発が集約されています。

## IDE

デベロッパーアドボケイトは、プロジェクトやコンテンツの要件に応じてさまざまな IDE を使用できます。IDE の機能とユースケースを理解し、コンテンツのリクエストに合わせて焦点を当て、異なるオーディエンス向けに使い分けることが重要です。

### IDE における AI と GitLab Duo

GitLab Duo と GitLab Duo Agent Platform は、[IDE 拡張機能/プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions) として統合されています。

### Visual Studio Code

Visual Studio Code（略称: VS Code）は、マーケットプレイスを通じて多様なプログラミング言語と開発ツールの統合をサポートしています。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/) を通じて統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![VS Code, light theme, with Duo Agentic Chat in the right panel. Editor shows diff view after agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス

1. よく使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings) を学んで練習しましょう。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) に助けを求めることもできます。
1. ターミナルから `code .` ショートカットを使ってローカルの Git リポジトリやディレクトリを開きましょう。これにより、GitLab UI、VS Code、ターミナル間でコンテキストを切り替えながらコードを編集/デバッグするワークフローが簡素化されます。
1. VS Code 内でターミナルを開きましょう（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コード編集中にサーバー、コンパイラ、Ansible playbook などのバックグラウンドタスクを開始でき、異なるウィンドウ間のコンテキストスイッチを避けられます。

#### 推奨設定と拡張機能

1. 編集時の自動保存を有効にしましょう。これにより、コードを書く際のデータ損失や Git コミットデータの欠落を避けられます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`auto save` を検索します。
   - VS Code の `settings.json`: `"files.autoSave": "afterDelay"` の key/value を新たに追加します。
1. デフォルトで word-wrap を有効にしましょう。これにより、水平スクロールなしで長い行を読めるようになります。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`word wrap` を検索します。
   - VS Code の `settings.json`: `"editor.wordWrap": "on"` の key/value を新たに追加します。
1. 定期的に必要な拡張機能だけをインストールし、信頼できるソースのみを使用しましょう。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) のメンテナンス済みリストを参照してください。
   - 拡張機能は `code --install-extension` で CLI からインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### デモ設定: VS Code のプロファイルとテーマ

VS Code のデフォルトプロファイルはダークテーマを使用しています。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターでの表示に適しており、[デモ録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) にも役立ちます。

```json
"workbench.colorTheme": "Default Light Modern",
```

`Default` と `Light theme for demos` のように、異なるテーマやインストール済み拡張機能を管理する複数のプロファイルを作成することをおすすめします。

必要なデモ録画設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

##### Chat を右パネルに移動する

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、エクスプローラのファイルツリーや Git コミットと干渉する可能性があり、これらも左側にあります。

Chat を右サイドバーに移動するには:

1. 右上隅のアイコンでセカンダリサイドバーを開きます。
1. Chat アイコン（例: Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数のチャットパネルを並行して使用できます。

@dnsmichi はデフォルトでこの設定を使用しています。

##### GitLab Duo Code Suggestions で追加の言語を有効にする

1. 2 つのパスから選択します:
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` を検索します。
   - VS Code の `settings.json`: macOS で `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを文字列の配列の値で追加/変更します。
1. `README.md` ファイルを編集する際にコード提案をより多く表示したい場合は、配列に `markdown` を追加します。
   - @dnsmichi は、`settings.json` における以下の言語の品質と関連性に自信があります（開発テストサイクル: 1 年以上）:

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

1. Code Suggestions が適切なコンテキストを持つことが重要です: 現在のタスクに関連するタブをより多く開いてください。これらは [コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of) として使用されます。

完全な VS Code の `settings.json` の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads) にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform のデバッグ

ユースケースの例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動して追加の AI コンテキストを消費していることを確認したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) は GitLab の IDE 拡張機能全体のバックエンドを支え、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューで拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューはターミナル上で拡張機能のログをストリーミングします。GitLab Duo で UI アクションをトリガーし、クライアントが正しいデータを送信しているかを観察します。
1. `Filter` フォームを使って出力を検索/フィルタリングできます。たとえば、MCP 統合に関連するエントリを切り分けるには `mcp` を使います。
1. オプション: ログの詳細度を `debug` に上げます:
   - 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` のチェックボックスをオンにして、VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) はコマンドを実行するためのターミナルも spawn します。実行がブロックされたり無限に走り続けたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) かどうかを調査してください。

### JetBrains IDE

デベロッパーアドボケイトは、目的やユースケースに応じてさまざまな [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) にアクセスできます:

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

IntelliJ IDEA は他の言語のプラグインもサポートしており、利用可能なものはサブスクリプションのティア（Ultimate vs Community）に依存します。

GitLab Duo は、[JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/) を使用して統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![JetBrains IntelliJ IDEA with Duo Agentic Chat, modernizing Java 8 to 21, editor shows diff view from agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/) を確認し、必要に応じて追加の永続 IDE ライセンスの Access Request を作成してください。
1. [セットアップと設定ガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/) を読み、[JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールして、個々の IDE とその更新を管理します。
   - オプションのヒント: デフォルトでは、Toolbox は古いインストール済みバージョンを保持します。この動作によりストレージ消費の問題が発生する場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効化してください。
   - JetBrains IDE は既存のセットアップから設定を移行/インポートできます。これは、GitLab Duo プラグインを 1 回インストール/設定し、別の JetBrains IDE にインポートするのに便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) はコマンドを実行するためのターミナルも spawn します。実行がブロックされたり無限に走り続けたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) かどうかを調査してください。

#### デモ設定: JetBrains IDE の外観

JetBrains IDE のデフォルトプロファイルはダークテーマを使用しています。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動し、`Light with Light Header` を選択します。

トークライブデモで詳細を見やすくするために、`Zoom` ドロップダウンを 125% に変更できます。

必要なデモ録画設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

### MS Visual Studio

> Note: Windows と Visual Studio ライセンスへのアクセスが必要で、追加のセキュリティレビューが必要です。
>
> Status: Research。Todo は [この内部 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712) で追跡されています。

GitLab Duo は、[Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/) を使用して統合できます。

> **Note**
>
> 初期セットアップが完了したら、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

### Eclipse

GitLab Duo は、[Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/) を使用して統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使って新しい neovim 設定を始め、neovim 体験をブートストラップして最適化しましょう。

GitLab Duo は、[neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/) を使用して統合できます。

## CLI

### GitLab Duo CLI

GitLab Duo CLI は、ターミナルから [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) へのアクセスを提供します。

要件:

1. NodeJS 22+ をインストールします。たとえば [mise](#mise-for-managing-language-runtimes) を使用します。
1. `api` スコープを持つ Personal Access Token を作成します。
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

CLI は [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を使用して AIGW と DAP サービスと通信するため、CLI は `gitlab-lsp` 内で開発されています。

機能とロードマップの更新については、[product epic](https://gitlab.com/groups/gitlab-org/-/epics/19070) をフォローし、[Duo CLI Feedback & Dogfooding epic](https://gitlab.com/groups/gitlab-org/-/epics/19806) にフィードバックを追加してください。

### Claude Code

Claude Code へのアクセスを得ることは、コンテンツ作成、たとえばこのブログチュートリアル「[Claude Code and GitLab: Three workflows that ship](https://about.gitlab.com/blog/claude-code-and-gitlab/)」に役立ちます。

1. [AI ツール要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、Anthropic API キーの [Access Request](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例 (internal)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/39031)
1. [Claude Console](https://platform.claude.com/settings/keys) で API キーを作成します。
1. [Claude Code](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) をインストールします。
1. Console の API キーで Claude Code に認証します。

```shell
claude auth login
```

プロジェクトに移動し、`What is this project about?` のプロンプトを Claude Code に送信します。

ヒント: より良いコンテキストを得るために、[GitLab MCP Server を Claude Code に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server) してください。

### Codex

Codex へのアクセスを得ることは、コンテンツ作成、たとえばこのブログチュートリアル「[Codex and GitLab: From code fix to production](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/)」に役立ちます。

1. [AI ツール要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、OpenAI キーの [Access Request](/handbook/security/corporate/end-user-services/access-requests/) を作成します。[例 (internal)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)
1. OpenAI プラットフォームに移動します。`GitLab` 組織と `Default project` を選択し、[API キー](https://platform.openai.com/api-keys) を生成します。
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

プロジェクトに移動し、`What is this project about?` のプロンプトを Codex に送信します。

ヒント: より良いコンテキストを得るために、[GitLab MCP Server を Codex に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server) してください。

## 拡張性とカスタマイズ

### Skills

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/) はエージェントやユーザーによってオンデマンドでロードされ、デフォルトでコンテキストウィンドウを小さく保ちます。

サンプルプロジェクト:

- [Tone of Voice for dnsmichi](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

### AGENTS.md

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/) はカスタムルールに似ています。ルート階層およびサブディレクトリ階層の AGENTS.md ファイルをサポートし、agentic AI に対して特定のプロジェクトやディレクトリをどう辿って利用するかをガイドし指示します。

サンプルプロジェクト:

- [Tanuki IoT Platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/blob/main/AGENTS.md?ref_type=heads)

### カスタムルール

**新規または既存のすべてのデベロッパーアドボカシープロジェクトに、デフォルトでカスタムルールを追加することを検討してください。**

1. [Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/#create-custom-rules) のカスタムルール。
2. [Code Review Agent](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#customize-instructions-for-gitlab-duo-code-review) のカスタムレビュー手順。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/) のシステムプロンプト。

サンプルプロジェクト:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/tree/main/.gitlab/duo?ref_type=heads)

### MCP クライアント

IDE への MCP クライアントの統合方法については、[GitLab MCP Clients ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/) を参照してください。

内部リサーチ Issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP Server

AI ツールや IDE でのセットアップと設定については、[GitLab MCP Server ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) を参照してください。

### Knowledge Graph / Orbit

セットアップと統合の手順については、[Orbit ドキュメント](https://docs.gitlab.com/orbit/) をフォローしてください。

### Duo Agent Platform のセルフホストモデル

サポートされているセルフホストモデルへのアクセスには、エンジニアリングテストインフラへのアクセスが必要です。DRI、選択肢、アイデアについては [FY26 のセルフホストモデルリサーチ (internal)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources) を参照してください。

## GitLab Duo Agent Platform のユースケース

### デベロッパーアドボケイト向けユースケースのプロンプト

これらのプロンプトを IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) や [CLI](#gitlab-duo-cli) で使用してください:

**デモ環境管理**

- "Create a new demo project setup guide for `technology/feature`"
- "Document the prerequisites for this demo environment"
- "Generate a troubleshooting guide for common demo setup issues"
- "Create a quick start script for setting up `demo environment`"

**デモリポジトリとコード**

- "Create a sample application demonstrating `GitLab feature`"
- "Add comprehensive README with setup instructions for this demo"
- "Generate example CI/CD pipeline for `language/framework` demo"
- "Create a demo showcasing `feature` integration with `technology`"

**コンテンツ作成サポート**

- "Extract code snippets from this demo for a blog post"
- "Generate speaker notes for demoing this feature"
- "Create a step-by-step tutorial from this demo repository"
- "Suggest improvements to make this demo more engaging"

**環境ドキュメント**

- "Document the tools and versions used in this environment"
- "Create a comparison table of different setup approaches"
- "Generate installation instructions for `OS/platform`"
- "Document environment variables and configuration needed"

**デモメンテナンス**

- "Check if this demo uses deprecated GitLab features"
- "Update this demo to use the latest `framework` version"
- "Verify all demo links and references are still valid"
- "Test if this demo still works with current GitLab version"

**ワークショップとプレゼンテーションの準備**

- "Create a workshop outline based on this demo"
- "Generate talking points for presenting this feature"
- "Build a hands-on exercise from this example"
- "Create a cheat sheet for workshop participants"

**統合の例**

- "Show how to integrate `tool` with GitLab in this demo"
- "Create examples for all `feature` configuration options"
- "Generate sample webhook payloads for testing"
- "Document API usage examples for this integration"

**ドキュメント・コンテンツ管理**

- "Review this page for broken links and outdated information"
- "Check if this documentation follows the handbook style guide"
- "Find all pages that mention `topic` and summarize them"
- "Suggest improvements to make this page more accessible"

**リポジトリのナビゲーションと理解**

- "Show me the most recently updated pages in `directory`"
- "What are the main sections of this handbook?"
- "Find documentation about [specific process or policy]"
- "Who are the main contributors to `directory/file`?"

**メンテナンスと品質**

- "Find pages that haven't been updated in over 6 months"
- "Check for inconsistent formatting across similar pages"
- "Identify duplicate or overlapping content"
- "Review recent merge requests for this section"

**ワークフロー自動化**

- "Create a new handbook page for `topic` following the template"
- "Update all references to [old term] with [new term]"
- "Generate a changelog for recent updates to `section`"
- "Create an issue for outdated content in `directory`"

**コラボレーション**

- "Summarize recent discussions on `topic` from issues and MRs"
- "Who should I ask about [specific handbook section]?"
- "Show me open merge requests that need review"
- "Find related work items for this documentation update"

**CI/CD 専用**

- "Convert this YAML anchor to use extends instead"
- "Add proper rules to this CI job"
- "Optimize the pipeline configuration for faster builds"

## 開発

### 言語ランタイム管理のための mise

[mise](https://mise.jdx.dev/) は、異なる言語ランタイムやツールを管理するためのポリグロットバージョンマネージャです。[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) や [GitLab ハンドブック](https://handbook.gitlab.com/docs/development/running-locally/) で、Node.js、Ruby、Go などの依存関係を管理するために使用されています。

デベロッパーアドボケイトは `mise` を以下のように使用できます:

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモで必要な Node.js、Python、Ruby、Go などの異なるバージョン間を簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **環境の一貫性を確保する**: プロジェクト固有のツールバージョンを `.mise.toml` または `.tool-versions` ファイルに定義することで、すべてのチームメンバー（あるいは異なるプロジェクト同士）が同じ環境を使用できるようにします。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: システム全体に干渉せずに `npm`、`yarn`、`pip`、`go` などのツールをインストールし管理できます。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE などの IDE が `mise` で管理されている正しいツールバージョンを認識できるようにします。

#### mise のヒントとベストプラクティス

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html) に従ってください。
1. **シェルを設定する**: `eval "$(mise activate)"` をシェルの設定ファイル（例: `.zshrc`、`.bashrc`）に追加します。
1. **`.mise.toml` または `.tool-versions` を使う**: プロジェクト固有のバージョンを使うには、プロジェクトルートにいずれかのファイルを作成します。`mise` がディレクトリに移動したときに指定バージョンを自動的に検出してアクティベートします。
1. **グローバルバージョン**: `mise global <tool>@<version>` でツールのグローバルデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: `mise current` を使って、現在のディレクトリでアクティブになっているツールバージョンを確認します。
1. **インストール済みバージョンを一覧表示する**: `mise ls` を使って、ツールのインストール済みバージョンをすべて表示します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使い方や設定については、[mise ドキュメント](https://mise.jdx.dev/dev-tools/) を参照してください。

#### GitLab 開発における mise 環境

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides) や [CLI](#cli) に統合済み）

## リモート開発ワークスペース

[Workspaces](https://docs.gitlab.com/user/workspace/) は、[Developer Relations Cloud Resources](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/) 上で動作するクラウド開発環境を提供します。

> Status: Inactive。現時点でインフラのメンテナーが不在です。以下のドキュメントは将来のための歴史的参考として残しています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development) には Kubernetes 用のエージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトにドキュメントがあります。エージェントが応答しなくなりワークスペースが作成されない場合のトラブルシューティングも含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` は GKE で稼働している必要があります。現在のリソース: 3 ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入され、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動生成されており、四半期ごとに更新する必要があります（2023-08-15）。[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) に従ってください。

## 学習リソース

### チームメンバーの事例

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles): IDE や開発ツールを含む作業環境のセットアップが文書化されています。

### Dev Environments を取り上げたトークとデモ

[デベロッパーアドボカシーのコンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/) と以下のリソースを参照してください:

1. Learning AI 101: Practical Foundations for Developers - 2025-06, Open Source @ Siemens
    - スライド: [public](https://dnsmichi.click/learning-ai-101-os-siemens-2025), [internal](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12, GitLab DACH Roadshow FY25
    - スライド: [public](https://go.gitlab.com/JRFMG4), [internal](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
