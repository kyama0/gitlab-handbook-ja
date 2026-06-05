---
title: デベロッパーアドボケイトの開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
lastmod: "2026-06-04T09:06:21-04:00"
---

Developer Advocate は、GitLab Duo Agent Platform を使った AI ネイティブなワークフローを含め、さまざまな種類のプラットフォーム、エディタ、IDE を扱います。このページでは、デベロッパーアドボカシーに関連するセットアップを最適化するためのベストプラクティスと有用なヒントをまとめます。

## リソース

まずは [GitLab Duo Agent Platform のドキュメント](https://docs.gitlab.com/user/duo_agent_platform/) から始め、続けて [IDE](#ides)、[CLI](#cli)、MCP やカスタムルールなどによる [拡張性とカスタマイズ](#extensibility-and-customization) を読み進めてください。

アーキテクチャの観点については、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

[GitLab Duo Agent Platform 立ち上げサポート Issue - DevRel (internal)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878) には、プロダクト／エンジニアリングの更新、GTM とコンテンツ戦略、ユースケース開発がまとめられています。

## IDE

Developer Advocate はプロジェクトやコンテンツの要件に応じて異なる IDE を使えます。IDE の機能やユースケースを理解し、コンテンツリクエストに合わせて使い分け、対象オーディエンスに応じて使用を多様化することが鍵となります。

### IDE における AI と GitLab Duo

GitLab Duo と GitLab Duo Agent Platform は [IDE 拡張機能・プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions) として統合されています。

### Visual Studio Code

Visual Studio Code（略: VS Code）は、マーケットプレース経由でさまざまなプログラミング言語と開発ツール統合をサポートします。

GitLab Duo は [VS Code マーケットプレースの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/) を通じて統合できます。

> **注**
>
> 初期セットアップ完了後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![VS Code, light theme, with Duo Agentic Chat in the right panel. Editor shows diff view after agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス

1. 頻繁に使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings) を学び、練習する。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) にヘルプを尋ねることもできます。
1. ターミナルから `code .` ショートカットを使ってローカル Git リポジトリやディレクトリを開く。これにより、GitLab UI、VS Code、ターミナル間のコンテキスト切り替えが必要な場合のコード編集・デバッグのワークフローが簡素化されます。
1. VS Code でターミナルを開く（ショートカット: macOS で `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながらサーバー実行、コンパイラ、Ansible プレイブックなどのバックグラウンドタスクを開始でき、異なるウィンドウ間のコンテキスト切り替えを避けられます。

#### 推奨設定と拡張機能

1. 編集中の自動保存を有効にする。これにより、コードを書いている間のデータ損失や Git のコミットデータの抜けを防げます。
   - UI: 左下の歯車アイコンをクリックして設定を開きます（ショートカット: macOS で `cmd ,`）。`auto save` で検索します。
   - VS Code の `settings.json`: `"files.autoSave": "afterDelay"` のキー／値を追加します。
1. デフォルトで word-wrap を有効にする。これにより長い行が横スクロールなしで読めるようになります。
   - UI: 左下の歯車アイコンをクリックして設定を開きます（ショートカット: macOS で `cmd ,`）。`word wrap` で検索します。
   - VS Code の `settings.json`: `"editor.wordWrap": "on"` のキー／値を追加します。
1. 定期的に必要な拡張機能をインストールし、信頼できるソースのみを使う。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) のメンテナンスされたリストを参照してください。
   - CLI から `code --install-extension` で拡張機能をインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### デモ設定: VS Code のプロファイルとテーマ

VS Code のデフォルトプロファイルはダークテーマを使用します。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターで見やすく、[デモ録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) にも適しています。

```json
"workbench.colorTheme": "Default Light Modern",
```

複数のプロファイル（例: `Default` と `Light theme for demos`）を作成して、テーマとインストール済み拡張機能を管理することを推奨します。

デモ録画に必要な設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

##### Chat を右パネルに移動する

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、同じく左側にあるエクスプローラーのファイルツリーや Git コミットと干渉する場合があります。

Chat を右サイドバーに移動するには:

1. 右上のアイコンで Secondary Side bar を開きます。
1. Chat アイコン（例えば Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数のチャットパネルを並行して使うこともできます。

@dnsmichi はこの設定をデフォルトで使っています。

##### GitLab Duo Code Suggestions に追加言語を有効化する

1. 2 つの方法から選択する:
   - UI: 左下の歯車アイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` で検索します。
   - VS Code の `settings.json`: macOS で `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを文字列の配列で追加／変更します。
1. `README.md` ファイルを編集するときに、より多くのコード提案を見たい場合は `markdown` を配列に追加します。
   - @dnsmichi が `settings.json` で品質と関連性に自信を持っている言語は以下のとおりです（開発テストサイクル: 1 年以上）。

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

1. Code Suggestions に適切なコンテキストがあることが重要です。現在のタスクに関連するタブをさらに開いておくと、それらが [コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of) として使われます。

完全な VS Code の `settings.json` の例は [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads) にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform のデバッグ

ユースケース例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動して追加の AI Context を消費していることを確認したい場合。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) が GitLab の IDE 拡張機能全体のバックエンドを担い、GitLab Duo Agentic Chat の MCP 統合も扱います。

1. VS Code の `Output` ビューを使って拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューには拡張機能のログがターミナルにストリーミングされます。GitLab Duo で UI アクションをトリガーし、クライアントが正しいデータを送信しているか観察します。
1. `Filter` フォームで出力を検索／フィルタリングできます。例えば `mcp` で MCP 統合に関連するエントリを絞り込めます。
1. オプション: ログの詳細度を `debug` に上げる:
   - 左下の歯車アイコンをクリックして設定を開きます（ショートカット: macOS で `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` チェックボックスにチェックを入れ、VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンド実行のためにターミナルをスポーンします。実行がブロックされたり無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) ことを検討してください。

### JetBrains IDE

Developer Advocate は、さまざまな目的とユースケースで [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) を利用できます。

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

IntelliJ IDEA は他言語のプラグインもサポートしていますが、利用可能性はサブスクリプションのティア（Ultimate vs Community）により異なります。

GitLab Duo は [JetBrains マーケットプレースの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/) を使って統合できます。

> **注**
>
> 初期セットアップ完了後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

![JetBrains IntelliJ IDEA with Duo Agentic Chat, modernizing Java 8 to 21, editor shows diff view from agentic edits.](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/) を確認し、必要に応じて追加の常用 IDE ライセンスのアクセスリクエストを作成する。
1. [セットアップと設定ガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/) を読み、個々の IDE とそのアップデートを管理するために [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールする。
   - 任意のヒント: デフォルトでは、Toolbox は古いインストール済みバージョンを保持します。この挙動がストレージ消費の問題を引き起こす場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効にしてください。
   - JetBrains IDE は既存のセットアップから設定を移行／インポートできます。GitLab Duo プラグインを一度インストール・設定し、それを別の JetBrains IDE にインポートできるので便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンド実行のためにターミナルをスポーンします。実行がブロックされたり無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効化する](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) ことを検討してください。

#### デモ設定: JetBrains IDE の外観

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動し、`Light with Light Header` を選択します。

トーク内のライブデモで詳細が見えるように、`Zoom` ドロップダウンを 125% に変更できます。

デモ録画に必要な設定については、[ビデオガイドラインのハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) を参照してください。

### MS Visual Studio

> 注: Windows と Visual Studio のライセンスへのアクセスが必要で、追加のセキュリティレビューが必要です。
>
> ステータス: 調査中。Todo は [この内部 issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712) で追跡されています。

GitLab Duo は [Visual Studio マーケットプレースの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/) を使って統合できます。

> **注**
>
> 初期セットアップ完了後、[Dev Environments の内部ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) を参照してください。

### Eclipse

GitLab Duo は [Eclipse マーケットプレースの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/) を使って統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使って新しい neovim 設定を開始すると、neovim 環境のブートストラップと最適化に役立ちます。

GitLab Duo は [neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/) を使って統合できます。

## CLI

### GitLab Duo CLI

GitLab Duo CLI は、ターミナル上で [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) にアクセスできるようにします。

要件:

1. NodeJS 22+ をインストールする（例: [mise を使う](#mise-for-managing-language-runtimes)）
1. `api` スコープを持つパーソナルアクセストークンを作成する。
1. CLI をインストールする。
1. CLI を実行して設定ダイアログを開始する。

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

CLI は AIGW と DAP サービスとの通信に [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を使用するため、CLI は `gitlab-lsp` の中で開発されています。

機能やロードマップの更新は [プロダクトエピック](https://gitlab.com/groups/gitlab-org/-/epics/19070) を追跡し、フィードバックは [Duo CLI Feedback & Dogfooding エピック](https://gitlab.com/groups/gitlab-org/-/epics/19806) に追加してください。

### Claude Code

Claude Code へのアクセスは、コンテンツ作成に役立ちます。例えばこちらのブログチュートリアル: [Claude Code and GitLab: Three workflows that ship](https://about.gitlab.com/blog/claude-code-and-gitlab/)。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、Anthropic API キーの [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/) を作成する（[例 (internal)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/39031)）
1. [Claude Console](https://platform.claude.com/settings/keys) で API キーを作成する
1. [Claude Code をインストール](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) する
1. Console API Key で Claude Code を認証する。

```shell
claude auth login
```

プロジェクトに移動し、Claude Code に `What is this project about?` とプロンプトを送ります。

ヒント: より良いコンテキストのために、[Claude Code に GitLab MCP Server を追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server) してください。

### Codex

Codex へのアクセスは、コンテンツ作成に役立ちます。例えばこちらのブログチュートリアル: [Codex and GitLab: From code fix to production](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/)

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/) を確認し、OpenAI キーの [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/) を作成する（[例 (internal)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)）。
1. OpenAI プラットフォームに移動する。`GitLab` 組織と `Default project` を選び、[API キー](https://platform.openai.com/api-keys) を生成する
1. Homebrew で [Codex CLI](https://developers.openai.com/codex/cli) をインストールする。
1. `--with-api-key` パラメータでログインし、STDIN から API キーを読み込む。

```shell
# シェル環境にキーを設定する（例: ~/.zshrc や 1Password の .env マネージャー）
export OPENAI_API_KEY="sk-..."

# ログイン — キーは環境から読み取られ、コマンドラインから渡されない
printenv OPENAI_API_KEY | codex login --with-api-key

# 確認
codex login status
```

プロジェクトに移動し、Codex に `What is this project about?` とプロンプトを送ります。

ヒント: より良いコンテキストのために、[Codex に GitLab MCP Server を追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server) してください。

## 拡張性とカスタマイズ

### Skills

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/) は、エージェントまたはユーザーによってオンデマンドで読み込まれ、コンテキストウィンドウをデフォルトで小さく保ちます。

プロジェクト例:

- [Tone of Voice for dnsmichi](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

### AGENTS.md

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/) はカスタムルールに似ています。ルートとサブディレクトリレベルの AGENTS.md ファイルをサポートし、特定のプロジェクトまたはディレクトリをナビゲートして使用する方法をエージェント AI にガイドし指示します。

プロジェクト例:

- [Tanuki IoT Platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/blob/main/AGENTS.md?ref_type=heads)

### カスタムルール

**新規または既存のすべての Developer Advocacy プロジェクトに、デフォルトでカスタムルールを追加することを検討してください。**

1. [Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/#create-custom-rules) のためのカスタムルール。
2. [Code Review Agent](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#customize-instructions-for-gitlab-duo-code-review) のためのカスタムレビュー指示。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/) のシステムプロンプト。

プロジェクト例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/tree/main/.gitlab/duo?ref_type=heads)

### MCP クライアント

IDE への MCP クライアントの統合方法については、[GitLab MCP Clients のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/) を参照してください。

内部調査 issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP サーバー

AI ツールおよび IDE におけるセットアップと設定については、[GitLab MCP Server のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) を参照してください。

### Knowledge Graph / Orbit

セットアップと統合の手順については、[Orbit のドキュメント](https://docs.gitlab.com/orbit/) を参照してください。

### Duo Agent Platform 向けのセルフホストモデル

サポートされているセルフホストモデルへのアクセスには、エンジニアリングのテストインフラへのアクセスが必要です。DRI、選択肢、アイデアについては [FY26 のセルフホストモデル調査 (internal)](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources) を参照してください。

## GitLab Duo Agent Platform のユースケース

### Developer Advocate のユースケースプロンプト

これらのプロンプトを IDE 内の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) や [CLI](#gitlab-duo-cli) で使ってください。

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

**ワークショップ＆プレゼンテーション準備**

- "Create a workshop outline based on this demo"
- "Generate talking points for presenting this feature"
- "Build a hands-on exercise from this example"
- "Create a cheat sheet for workshop participants"

**統合例**

- "Show how to integrate `tool` with GitLab in this demo"
- "Create examples for all `feature` configuration options"
- "Generate sample webhook payloads for testing"
- "Document API usage examples for this integration"

**ドキュメントとコンテンツ管理**

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

**CI/CD 特有**

- "Convert this YAML anchor to use extends instead"
- "Add proper rules to this CI job"
- "Optimize the pipeline configuration for faster builds"

## 開発

### 言語ランタイム管理のための mise

[mise](https://mise.jdx.dev/) は、さまざまな言語ランタイムやツールを管理するためのポリグロットなバージョンマネージャーです。Node.js、Ruby、Go などの依存関係を管理するために、[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) や [GitLab ハンドブック](https://handbook.gitlab.com/docs/development/running-locally/) で使われています。

Developer Advocate は `mise` を次のように使えます。

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などのバージョン間で簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: プロジェクト固有のツールバージョンを `.mise.toml` または `.tool-versions` ファイルに定義し、すべてのチームメンバー（または自分の異なるプロジェクト）が同じ環境を使うようにします。

   ```toml
   # .mise.toml の例
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` のようなツールを、システム全体に影響を与えずにインストール・管理できます。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE などの IDE が `mise` によって管理される正しいツールバージョンを認識できるようにします。

#### mise のヒントとベストプラクティス

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html) に従います。
1. **シェルを設定する**: シェルの設定ファイル（例: `.zshrc`、`.bashrc`）に `eval "$(mise activate)"` を追加します。
1. **`.mise.toml` または `.tool-versions` を使う**: プロジェクト固有のバージョンには、プロジェクトのルートにこれらのいずれかのファイルを作成します。`mise` はディレクトリに移動したときに、指定されたバージョンを自動的に検出し有効化します。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使ってツールのグローバルデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: 現在のディレクトリでどのツールバージョンがアクティブかを確認するには `mise current` を使います。
1. **インストール済みバージョンを一覧表示する**: ツールのすべてのインストール済みバージョンを確認するには `mise ls` を使います。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使用法と設定については、[mise のドキュメント](https://mise.jdx.dev/dev-tools/) を参照してください。

#### GitLab 開発における mise 環境

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides) と [CLI](#cli) に統合）

## リモート開発ワークスペース

[Workspaces](https://docs.gitlab.com/user/workspace/) は、[Developer Relations のクラウドリソース](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/) 上で稼働するクラウド開発環境を提供します。

> ステータス: 非アクティブ。現在、インフラのメンテナーがいません。以下のドキュメントは将来の歴史的参照のために残されています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development) には Kubernetes 用のエージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトにドキュメント化されています。これには、エージェントが応答しなくなり、ワークスペースが作成されなくなった場合のトラブルシューティングも含まれます。

リソース:

1. Kubernetes クラスタ `da-remote-development-1` は GKE で実行されている必要があります。現在のリソース: 3 ノード、合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入されており、Kubernetes クラスタのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動生成されており、四半期ごとに更新する必要があります（2023-08-15）。[ドキュメント手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) に従ってください。

## 学習リソース

### チームメンバーの例

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)。IDE や開発ツールを含む作業環境のセットアップをドキュメント化しています。

### Dev Environments を扱ったトークとデモ

[Developer Advocacy コンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/) と次のリソースを参照してください。

1. Learning AI 101: Practical Foundations for Developers - 2025-06, Open Source @ Siemens
    - スライド: [public](https://dnsmichi.click/learning-ai-101-os-siemens-2025), [internal](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12, GitLab DACH Roadshow FY25
    - スライド: [public](https://go.gitlab.com/JRFMG4), [internal](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
