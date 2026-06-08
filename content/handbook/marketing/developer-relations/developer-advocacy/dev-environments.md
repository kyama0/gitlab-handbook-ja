---
title: Developer Advocate のための開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: 2026-06-08T13:31:46-07:00
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

Developer Advocate は、GitLab Duo Agent Platform を使用した AI ネイティブのワークフローを含め、さまざまな種類のプラットフォーム、エディター、IDE を扱います。このページでは、developer advocacy 関連のセットアップを最適化するのに役立つベストプラクティスと便利なヒントをまとめています。

## リソース {#resources}

まずは [GitLab Duo Agent Platform のドキュメント](https://docs.gitlab.com/user/duo_agent_platform/)から始め、続けて [IDE](#ides)、[CLI](#cli)、そして MCP やカスタムルールなどによる[拡張性とカスタマイズ](#extensibility-and-customization)についてお読みください。

アーキテクチャの知見については、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/)を参照してください。

[GitLab Duo Agent Platform のローンチサポート Issue - DevRel（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878)には、製品・エンジニアリングのアップデート、GTM とコンテンツの戦略、ユースケースの開発がまとめられています。

## IDE {#ides}

Developer Advocate は、プロジェクトやコンテンツの要件に応じてさまざまな IDE を使用できます。IDE の機能とユースケースを理解し、それらをコンテンツリクエストの焦点として捉え、異なるオーディエンスに向けて使い方を多様化することが重要です。

### IDE における AI と GitLab Duo {#ai-and-gitlab-duo-in-ides}

GitLab Duo と GitLab Duo Agent Platform は、[IDE 拡張機能・プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions)として統合されています。

### Visual Studio Code {#visual-studio-code}

Visual Studio Code（略称: VS Code）は、そのマーケットプレイスを通じて、さまざまなプログラミング言語と開発ツールの統合をサポートしています。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/)を通じて統合できます。

> **注記**
>
> 初期セットアップが完了したら、[開発環境の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を参照してください。

![ライトテーマの VS Code。右パネルに Duo Agentic Chat が表示されている。エディターはエージェントによる編集後の差分ビューを表示している。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス {#tips-and-best-practices-for-vs-code}

1. よく使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings)を学び、頻繁に練習しましょう。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) に助けを求めることもできます。
1. ターミナルから `code .` ショートカットを使用して、ローカルの Git リポジトリやディレクトリを開きましょう。GitLab UI、VS Code、ターミナルの間でコンテキストを切り替える必要があるときに、コードの編集・デバッグのワークフローを簡素化できます。
1. VS Code でターミナルを開きましょう（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながらサーバーの実行、コンパイラー、Ansible プレイブックなどのバックグラウンドタスクを開始でき、異なるウィンドウ間のコンテキスト切り替えを回避できます。

#### 推奨される設定と拡張機能 {#recommended-settings-and-extensions}

1. 編集中の自動保存を有効にしましょう。これにより、コードを書く際のデータ損失や Git のコミットデータの欠落を回避できます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`auto save` を検索します。
   - VS Code の `settings.json`: `"files.autoSave": "afterDelay"` の新しいキー/値を追加します。
1. デフォルトでワードラップを有効にしましょう。これにより、横スクロールなしで長い行を読めるようになります。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。`word wrap` を検索します。
   - VS Code の `settings.json`: `"editor.wordWrap": "on"` の新しいキー/値を追加します。
1. 定期的に必要とする拡張機能をインストールし、信頼できるソースのみを使用しましょう。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads)で管理されているリストを参照してください
   - CLI で `code --install-extension` を使用して拡張機能をインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### デモ設定: VS Code のプロファイルとテーマ {#demo-settings-profiles-and-themes-in-vs-code}

VS Code のデフォルトプロファイルはダークテーマを使用します。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターでより見やすく、[デモの録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation)にも役立ちます。

```json
"workbench.colorTheme": "Default Light Modern",
```

異なるテーマやインストールした拡張機能を管理するために、複数のプロファイル（たとえば `Default` と `Light theme for demos`）を作成することが推奨されます。

デモ録画に必要な設定については、[動画ガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation)を参照してください。

##### Chat を右パネルに移動する {#move-chat-to-the-right-panel}

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、同じく左側にあるエクスプローラーのファイルツリーや Git のコミットと干渉する可能性があります。

Chat を右サイドバーに移動するには:

1. 右上隅のアイコンでセカンダリーサイドバーを開きます。
1. Chat アイコン（たとえば Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数のチャットパネルを並行して使用できます。

@dnsmichi はデフォルトでこのセットアップを使用しています。

##### GitLab Duo Code Suggestions の追加言語を有効にする {#enable-additional-languages-for-gitlab-duo-code-suggestions}

1. 2 つの方法から選びます。
   - UI: 左下隅の歯車アイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` を検索します。
   - VS Code の `settings.json`: macOS で `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを、文字列の配列を値として追加・変更します。
1. `README.md` ファイルの編集時にもっとコードの提案を見たい場合は、配列に `markdown` を追加します。
   - @dnsmichi は、`settings.json` 内の次の言語の品質と関連性に自信を持っています（開発テストサイクル: 1 年以上）。

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

1. Code Suggestions には適切なコンテキストを持たせることが重要です。現在のタスクに関連するタブをもっと開いておくと、それらが[コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of)として使用されます。

完全な VS Code の `settings.json` の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads)にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform のデバッグ {#debug-vs-code-extensions-and-gitlab-duo-agent-platform}

ユースケースの例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動して追加の AI コンテキストを利用していることを検証したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) は、GitLab 向けの IDE 拡張機能全体でバックエンドを動かしており、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューを使用して拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューは拡張機能のログをターミナルにストリーミングします。GitLab Duo で UI のアクションをトリガーし、クライアントが正しいデータを送信しているか観察します。
1. `Filter` フォームを使用して出力を検索・フィルタリングできます。たとえば `mcp` で MCP 統合に関連するエントリを絞り込めます。
1. オプション: ログの詳細度を `debug` に上げます。
   - 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` チェックボックスをオンにして VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効にする](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely)べきか調査してください。

### JetBrains IDE {#jetbrains-ides}

Developer Advocate は、さまざまな目的とユースケースのために [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) にアクセスできます。

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

IntelliJ IDEA は他の言語向けのプラグインもサポートしており、利用可否はサブスクリプションのティア（Ultimate か Community か）によって異なります。

GitLab Duo は、[JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/)を使用して統合できます。

> **注記**
>
> 初期セットアップが完了したら、[開発環境の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を参照してください。

![Duo Agentic Chat を備えた JetBrains IntelliJ IDEA。Java 8 を 21 にモダナイズしており、エディターはエージェントによる編集の差分ビューを表示している。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス {#tips-and-best-practices-for-jetbrains-ides}

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/)を確認し、必要に応じて追加の恒久的な IDE ライセンスのアクセスリクエストを作成しましょう。
1. [セットアップと設定のガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/)を読み、個々の IDE とその更新を管理するために [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールしましょう。
   - オプションのヒント: デフォルトでは、Toolbox は以前にインストールしたバージョンを保持します。この動作がストレージ消費の問題を引き起こす場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効にします。
   - JetBrains IDE は、既存のセットアップから設定を移行・インポートできます。これは、GitLab Duo プラグインを一度インストール・設定して、別の JetBrains IDE にインポートするのに便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルも起動します。実行がブロックされたり無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k などのターミナル統合を無効にする](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely)べきか調査してください。

#### デモ設定: JetBrains IDE の外観 {#demo-settings-appearance-in-jetbrains-ides}

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動して `Light with Light Header` を選択します。

`Zoom` のドロップダウンを 125% に変更すると、トークのライブデモで詳細が見やすくなります。

デモ録画に必要な設定については、[動画ガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation)を参照してください。

### MS Visual Studio {#ms-visual-studio}

> 注記: Windows と Visual Studio のライセンスへのアクセスが必要で、追加のセキュリティレビューが必要です。
>
> ステータス: 調査中。やるべきことは[この社内 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712)で追跡されています。

GitLab Duo は、[Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/)を使用して統合できます。

> **注記**
>
> 初期セットアップが完了したら、[開発環境の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を参照してください。

### Eclipse {#eclipse}

GitLab Duo は、[Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/)を使用して統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使って新しい neovim の設定を始め、neovim 体験をブートストラップして最適化しましょう。

GitLab Duo は、[neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/)を使用して統合できます。

## CLI {#cli}

### GitLab Duo CLI {#gitlab-duo-cli}

GitLab Duo CLI は、ターミナル上で [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) へのアクセスを提供します。

要件:

1. NodeJS 22+ をインストールします。たとえば [mise](#mise-for-managing-language-runtimes) を使用します
1. `api` スコープを持つパーソナルアクセストークンを作成します。
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

CLI は [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を使用して AIGW および DAP サービスと通信するため、CLI は `gitlab-lsp` 内で開発されています。

機能とロードマップのアップデートは[製品エピック](https://gitlab.com/groups/gitlab-org/-/epics/19070)をフォローし、フィードバックは [Duo CLI Feedback & Dogfooding エピック](https://gitlab.com/groups/gitlab-org/-/epics/19806)に追加してください。

### Claude Code

Claude Code へのアクセスは、コンテンツ作成に役立ちます。たとえば、このブログチュートリアル: [Claude Code and GitLab: Three workflows that ship](https://about.gitlab.com/blog/claude-code-and-gitlab/) を参照してください。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)を確認し、Anthropic API キーの[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/)を作成します。[例（社内）](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/39031)
1. [Claude Console](https://platform.claude.com/settings/keys) で API キーを作成します
1. [Claude Code](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) をインストールします
1. Console の API キーを使って Claude Code で認証します。

```shell
claude auth login
```

プロジェクトに移動し、`What is this project about?` と Claude Code にプロンプトを送ります。

ヒント: より良いコンテキストのために、[GitLab MCP Server を Claude Code に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server)しましょう。

### Codex

Codex へのアクセスは、コンテンツ作成に役立ちます。たとえば、このブログチュートリアル: [Codex and GitLab: From code fix to production](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/) を参照してください。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)を確認し、OpenAI キーの[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/)を作成します。[例（社内）](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)。
1. OpenAI プラットフォームに移動します。`GitLab` 組織と `Default project` を選択し、[API キー](https://platform.openai.com/api-keys)を生成します
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

プロジェクトに移動し、`What is this project about?` と Codex にプロンプトを送ります。

ヒント: より良いコンテキストのために、[GitLab MCP Server を Codex に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server)しましょう。

## 拡張性とカスタマイズ {#extensibility-and-customization}

### Skills

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/) は、エージェントやユーザーによってオンデマンドで読み込まれ、デフォルトではコンテキストウィンドウを小さく保ちます。

プロジェクトの例:

- [Tone of Voice for dnsmichi](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

### AGENTS.md

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/)は、カスタムルールに似ています。ルートおよびサブディレクトリレベルの AGENTS.md ファイルをサポートし、エージェント型 AI に特定のプロジェクトやディレクトリをどのようにナビゲートして使用するかをガイド・指示します。

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### カスタムルール

**新規・既存を問わず、すべての Developer Advocacy プロジェクトにデフォルトでカスタムルールを追加することを検討してください。**

1. [カスタムルール](https://docs.gitlab.com/user/duo_agent_platform/customize/custom_rules/)
2. [Code Review Flow](https://docs.gitlab.com/user/duo_agent_platform/customize/review_instructions/) のカスタムレビュー指示。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/)のシステムプロンプト

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### MCP クライアント

MCP クライアントを IDE に統合する方法については、[GitLab MCP Clients のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/)を参照してください。

社内の調査 Issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP サーバー

AI ツールや IDE でのセットアップと設定については、[GitLab MCP Server のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)を参照してください。

### Knowledge Graph / Orbit

セットアップと統合の手順については、[Orbit のドキュメント](https://docs.gitlab.com/orbit/)をフォローしてください。

[Orbit GA 製品エピック](https://gitlab.com/groups/gitlab-org/-/work_items/19744)が開発と機能のロードマップを追跡しています。

### Duo Agent Platform のセルフホストモデル

サポートされているセルフホストモデルへのアクセスには、エンジニアリングのテストインフラストラクチャへのアクセスが必要です。DRI、オプション、アイデアについては、[FY26 のセルフホストモデルの調査（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources)を確認してください。

## GitLab Duo Agent Platform のユースケース

### Developer Advocate 向けユースケースのプロンプト

これらのプロンプトを、IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) や [CLI](#gitlab-duo-cli) で使用してください。

**デモ環境の管理**

- "Create a new demo project setup guide for `technology/feature`"
- "Document the prerequisites for this demo environment"
- "Generate a troubleshooting guide for common demo setup issues"
- "Create a quick start script for setting up `demo environment`"

**デモのリポジトリとコード**

- "Create a sample application demonstrating `GitLab feature`"
- "Add comprehensive README with setup instructions for this demo"
- "Generate example CI/CD pipeline for `language/framework` demo"
- "Create a demo showcasing `feature` integration with `technology`"

**コンテンツ作成の支援**

- "Extract code snippets from this demo for a blog post"
- "Generate speaker notes for demoing this feature"
- "Create a step-by-step tutorial from this demo repository"
- "Suggest improvements to make this demo more engaging"

**環境のドキュメント化**

- "Document the tools and versions used in this environment"
- "Create a comparison table of different setup approaches"
- "Generate installation instructions for `OS/platform`"
- "Document environment variables and configuration needed"

**デモのメンテナンス**

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

**ドキュメントとコンテンツの管理**

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

**ワークフローの自動化**

- "Create a new handbook page for `topic` following the template"
- "Update all references to [old term] with [new term]"
- "Generate a changelog for recent updates to `section`"
- "Create an issue for outdated content in `directory`"

**コラボレーション**

- "Summarize recent discussions on `topic` from issues and MRs"
- "Who should I ask about [specific handbook section]?"
- "Show me open merge requests that need review"
- "Find related work items for this documentation update"

**CI/CD 特有**

- "Convert this YAML anchor to use extends instead"
- "Add proper rules to this CI job"
- "Optimize the pipeline configuration for faster builds"

## 開発

### 言語ランタイムを管理する mise {#mise-for-managing-language-runtimes}

[mise](https://mise.jdx.dev/) は、さまざまな言語ランタイムとツールの管理に役立つマルチ言語のバージョンマネージャーです。[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) や [GitLab ハンドブック](https://handbook.gitlab.com/docs/development/running-locally/)で、Node.js、Ruby、Go、その他の依存関係を管理するために使用されています。

Developer Advocate は `mise` を次の用途に使用できます。

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などの異なるバージョンを簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: プロジェクト固有のツールバージョンを `.mise.toml` または `.tool-versions` ファイルで定義し、すべてのチームメンバー（またはあなたの異なるプロジェクト）が同じ環境を使用するようにします。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` などのツールを、システム全体への干渉なしにインストール・管理できます。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: VS Code や JetBrains IDE などの IDE が、シェル環境を設定することで `mise` が管理する正しいツールバージョンを取得するようにします。

#### mise のヒントとベストプラクティス

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html)に従います。
1. **シェルを設定する**: `eval "$(mise activate)"` をシェルの設定ファイル（たとえば `.zshrc`、`.bashrc`）に追加します。
1. **`.mise.toml` または `.tool-versions` を使用する**: プロジェクト固有のバージョンには、これらのファイルのいずれかをプロジェクトのルートに作成します。`mise` は、ディレクトリに移動すると指定されたバージョンを自動的に検出してアクティブ化します。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使用して、ツールのグローバルなデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: `mise current` を使用して、現在のディレクトリでアクティブなツールバージョンを確認します。
1. **インストール済みバージョンの一覧を表示する**: `mise ls` を使用して、ツールのインストール済みのすべてのバージョンを確認します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使用法と設定については、[mise のドキュメント](https://mise.jdx.dev/dev-tools/)を参照してください。

#### GitLab 開発における mise 環境

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides) と [CLI](#cli) に統合されています）

## リモート開発ワークスペース

[ワークスペース](https://docs.gitlab.com/user/workspace/)は、[Developer Relations のクラウドリソース](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/)で実行されるクラウド開発環境を提供します。

> ステータス: 非アクティブ。現在、インフラストラクチャのメンテナーがいません。以下のドキュメントは、将来の歴史的な参照のために存在しています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development)には、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトに記載されている Kubernetes 用のエージェントがインストールされています。これには、エージェントが応答しなくなり、ワークスペースが作成されないときのトラブルシューティングが含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` が GKE で実行されている必要があります。現在のリソース: 3 ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入されており、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動で生成されており、[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke)に従って四半期ごと（2023-08-15）に更新する必要があります。

## 学習リソース

### チームメンバーの例

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)。IDE や開発ツールを含む作業環境のセットアップを記録しています。

### 開発環境を取り上げたトークとデモ

[Developer Advocacy のコンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/)と以下のリソースを参照してください。

1. Learning AI 101: Practical Foundations for Developers - 2025-06, Open Source @ Siemens
    - スライド: [public](https://dnsmichi.click/learning-ai-101-os-siemens-2025)、[internal](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12, GitLab DACH Roadshow FY25
    - スライド: [public](https://go.gitlab.com/JRFMG4)、[internal](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
