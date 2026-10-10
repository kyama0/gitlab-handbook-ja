---
description: "Developer Advocacy のデモや技術作業のための開発環境、IDE、AI ワークフロー。"
linkTitle: "Development environments"
title: "Developer Advocates の開発環境"
upstream_path: "/handbook/marketing/product-and-technical-marketing/developer-advocacy/dev-environments/"
upstream_sha: "2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb"
lastmod: "2026-09-29T20:25:23+02:00"
translated_at: "2026-10-10T21:10:21.636842+00:00"
translator: codex
stale: false
---

Developer Advocates は、GitLab Duo Agent Platform を使用した AI ネイティブワークフローを含む、さまざまなタイプのプラットフォーム、エディタ、IDE で作業します。このページでは、Developer Advocacy 関連のセットアップを最適化するためのベストプラクティスと役立つヒントをまとめます。

## リソース {#resources}

[GitLab Duo Agent Platform のドキュメント](https://docs.gitlab.com/user/duo_agent_platform/)から始めて、MCP、カスタムルールなどを使った [IDE](#ides)、[CLI](#cli)、[拡張性とカスタマイズ](#extensibility-and-customization)についてお読みください。

アーキテクチャに関する知見については、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/)を確認してください。

[GitLab Duo Agent Platform ローンチサポート Issue - DevRel（内部向け）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878)には、製品/エンジニアリングのアップデート、GTM とコンテンツ戦略、ユースケース開発がまとめられています。

## IDE {#ides}

Developer Advocates は、プロジェクトやコンテンツ要件に応じてさまざまな IDE を使用できます。IDE の機能とユースケースを理解し、コンテンツリクエストの際にそれらに焦点を当て、さまざまなオーディエンス向けに使用法を多様化することが重要です。

### IDE 内の AI と GitLab Duo {#ai-and-gitlab-duo-in-ides}

GitLab Duo と GitLab Duo Agent Platform は、[IDE 拡張機能/プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions)として統合されています。

### Visual Studio Code {#visual-studio-code}

Visual Studio Code（略称: VS Code）は、マーケットプレイスを通じてさまざまなプログラミング言語と開発ツール統合をサポートしています。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/)を通じて統合できます。

> **注**
>
> 初期セットアップ完了後、[開発環境の内部向けガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を確認してください。

![VS Code、ライトテーマ、右パネルに Duo Agentic Chat。エディタはエージェント編集後の差分ビューを表示。](/images/handbook/marketing/product-and-technical-marketing/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス {#tips-and-best-practices-for-vs-code}

1. よく使う [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings)を学んで頻繁に練習しましょう。
    - コマンドパレット: macOS では `cmd shift p`、Windows/Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows/Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/)や [Claude](/handbook/tools-and-tips/ai/claude/)に助けを求めることもできます。
1. ターミナルから `code .` ショートカットを使ってローカルの Git リポジトリやディレクトリを開きます。これにより、GitLab UI、VS Code、ターミナルの間でコンテキストを切り替える必要があるときに、コードの編集/デバッグのワークフローが簡単になります。
1. VS Code でターミナルを開きます（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながらサーバー、コンパイラ、Ansible playbook の実行などのバックグラウンドタスクを開始でき、異なるウィンドウ間のコンテキスト切り替えを避けられます。

#### 推奨される設定と拡張機能 {#recommended-settings-and-extensions}

1. 編集中の自動保存を有効にします。コードを書くときのデータ損失や Git コミットへのデータの入れ忘れを防ぎます。
   - UI：左下の歯車アイコンをクリックして設定を開きます（macOS のショートカット：`cmd ,`）。`auto save` を検索します。
   - VS Code の `settings.json`：`"files.autoSave": "afterDelay"` の新しいキーと値を追加します。
1. デフォルトで行の折り返しを有効にします。横にスクロールせずに長い行を読めるようになります。
   - UI：左下の歯車アイコンをクリックして設定を開きます（macOS のショートカット：`cmd ,`）。`word wrap` を検索します。
   - VS Code の `settings.json`：`"editor.wordWrap": "on"` の新しいキーと値を追加します。
1. 日常的に必要な拡張機能をインストールし、信頼できる提供元のみを使用します。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/extensions.txt?ref_type=heads)で保守されている拡張機能一覧を確認します。
   - `code --install-extension` を使って CLI から拡張機能をインストールできます。例：`code --install-extension gitlab.gitlab-workflow`。
   - [vscode-extensions-install.sh](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) スクリプトは、一覧にあるすべての拡張機能をインストールします。`--discover` を使うと手動でインストールした拡張機能を表示し、`--update-inventory` を使うとそれらを基に一覧ファイルを更新できます。

#### デモ設定: VS Code のプロファイルとテーマ {#demo-settings-profiles-and-themes-in-vs-code}

ライトテーマは対面イベントのプロジェクターでよりよく機能し、[デモ録画](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/#content-creation-guidelines)にも役立ちます。

VS Code を macOS の外観設定に従わせ、デモ用のライトモードとダークモードの切り替えを 1 か所で行えるようにします。

```json
{
    "window.autoDetectColorScheme": true,
    "workbench.preferredDarkColorTheme": "Dark Modern",
    "workbench.preferredLightColorTheme": "Light Modern"
}
```

詳細は、[カラーテーマの自動検出に関する VS Code ドキュメント](https://code.visualstudio.com/docs/configure/themes#_automatically-switch-based-on-os-color-scheme)を確認してください。[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles#whats-inside)は Ghostty、Starship、neovim にも同じ方法を使用しています。macOS の外観を切り替えると、すべてのツールが一斉に切り替わります。

別の方法として、`Default` や `Light theme for demos` などの複数のプロファイルを作成し、異なるテーマやインストール済みの拡張機能を管理できます。

必要なデモ録画設定については、[動画ガイドラインハンドブック](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/#content-creation-guidelines)を確認してください。

##### Chat を右パネルに移動する {#move-chat-to-the-right-panel}

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、同じく左側にあるエクスプローラーのファイルツリーや Git コミットと干渉する場合があります。

Chat を右サイドバーに移動するには:

1. 右上隅のアイコンでセカンダリサイドバーを開きます。
1. Chat アイコン（例: Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数のチャットパネルを並行して使用できます。

@dnsmichi はこのセットアップをデフォルトで使用しています。

##### GitLab Duo Code Suggestions {#gitlab-duo-code-suggestions}

すべての言語に対応する Code Suggestions のサポートが、各 IDE に順次展開されています。現在の状況は、[Duo Agent Platform 全体で「すべて」のプログラミング言語をサポートする](https://gitlab.com/gitlab-org/gitlab/-/work_items/571515)を確認してください。VS Code では、`gitlab.duoCodeSuggestions.additionalLanguages` の設定は不要になりました。

Code Suggestions には適切なコンテキストが重要です。現在のタスクに関連するタブをさらに開いてください。それらが[コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/context/)として使用されます。

VS Code の `settings.json` の完全な例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/.config/vscode/settings.json?ref_type=heads)にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform をデバッグする {#debug-vs-code-extensions-and-gitlab-duo-agent-platform}

ユースケースの例: GitLab Duo Agentic Chat は MCP 統合を提供しており、MCP サーバーが起動され追加の AI コンテキストを消費していることを検証したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/)は、GitLab の IDE 拡張機能全体でバックエンドを動かし、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューを使って拡張機能をデバッグできます。
1. デバッグの手順:
   - `cmd shift p`（macOS）でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューは、拡張機能のログをターミナルにストリーミングします。GitLab Duo で UI アクションをトリガーし、クライアントが正しいデータを送信しているかを観察します。
1. `Filter` フォームを使って出力を検索/フィルタリングできます。例: `mcp` で MCP 統合に関連するエントリを分離します。
1. オプション: ログの詳細度を `debug` に上げます:
   - 左下隅の歯車アイコンをクリックして設定を開きます（ショートカット: macOS では `cmd ,`）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` チェックボックスにチェックを入れ、VS Code を再起動します。

### JetBrains IDE {#jetbrains-ides}

Developer Advocates は、さまざまな目的とユースケースで [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/)にアクセスできます:

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

IntelliJ IDEA は他の言語のプラグインもサポートしており、利用可能かどうかはサブスクリプションのティア（Ultimate vs Community）によって異なります。

GitLab Duo は、[JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/)を使って統合できます。

> **注**
>
> 初期セットアップ完了後、[開発環境の内部向けガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を確認してください。

![JetBrains IntelliJ IDEA、Duo Agentic Chat で Java 8 を 21 にモダナイズ、エディタはエージェント編集の差分ビューを表示。](/images/handbook/marketing/product-and-technical-marketing/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス {#tips-and-best-practices-for-jetbrains-ides}

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/)を確認し、必要に応じて追加の永続的な IDE ライセンスの Access Request を作成します。
1. [セットアップと設定ガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/)を読み、[JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールして、個々の IDE とその更新を管理します。
   - 任意のヒント：デフォルトでは、Toolbox はインストール済みの古いバージョンを保持します。この動作でストレージ消費に問題が生じる場合は、`Tools > Keep previous versions to enable instant rollback` の設定を無効にしてください。
   - JetBrains IDEs は、既存のセットアップから設定を移行またはインポートできます。GitLab Duo プラグインを一度インストールして設定し、別の JetBrains IDE にインポートできるため便利です。

#### デモ設定: JetBrains IDE の外観 {#demo-settings-appearance-in-jetbrains-ides}

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動して `Light with Light Header` を選択します。

`Zoom` ドロップダウンは、講演のライブデモで詳細を見やすくするため 125% に変更できます。

必要なデモ録画設定については、[動画ガイドラインハンドブック](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/#content-creation-guidelines)を確認してください。

### MS Visual Studio {#ms-visual-studio}

> 注: Windows と Visual Studio ライセンスへのアクセスが必要で、追加のセキュリティレビューが必要です。
>
> ステータス: 調査中。未対応のタスクは[この内部 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712)で追跡されています。

GitLab Duo は、[Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/)を使って統合できます。

> **注**
>
> 初期セットアップ完了後、[開発環境の内部向けガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/)を確認してください。

### Eclipse {#eclipse}

GitLab Duo は、[Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/)を使って統合できます。

### neovim {#neovim}

> ヒント：[LazyVim](https://www.lazyvim.org/) で neovim の新しい設定を始めると、適切なデフォルト値で事前設定された環境を利用し、プラグインでカスタマイズできます。実運用の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/.config/nvim?ref_type=heads)にあります。

GitLab Duo は、[neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/)を使って統合できます。

## CLI {#cli}

### GitLab Duo CLI {#gitlab-duo-cli}

GitLab Duo CLI は、ターミナルで [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/)へのアクセスを提供します。

インストールと設定は、[GitLab Duo CLI ドキュメント](https://docs.gitlab.com/user/gitlab_duo_cli/)に従ってください。

ヒント：たとえば `~/.zshrc` に、`duo` で Duo CLI を起動するシェルエイリアスを追加します。実運用の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/.config/zsh/aliases.zsh?ref_type=heads)にあります。

```shell
alias duo='glab duo cli'
```

使用例:

```markdown
Which tools are available?

What is this repository about

Which issues need my attention

Help me implement issue 15

The pipelines in MR 23 fail. Please fix them.
```

CLI は [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)を使って AIGW と DAP サービスと通信するため、CLI は `gitlab-lsp` 内で開発されています。

機能とロードマップのアップデートについては [製品エピック](https://gitlab.com/groups/gitlab-org/-/epics/19070)をフォローし、[Duo CLI Feedback & Dogfooding エピック](https://gitlab.com/groups/gitlab-org/-/epics/19806)にフィードバックを追加してください。

### Claude Code {#claude-code}

Claude Code へのアクセスを得ることは、コンテンツ作成に役立ちます。例えば、このブログチュートリアル [Claude Code と GitLab：成果につながる 3 つのワークフロー](https://about.gitlab.com/blog/claude-code-and-gitlab/)があります。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)を確認します。Claude Code には GitLab の Claude Enterprise サブスクリプションへのアクセスが必要です。[Claude のハンドブックページ](/handbook/tools-and-tips/ai/claude/#access)を参照してください。
1. [Claude Code](https://code.claude.com/docs/en/quickstart#step-1-install-claude-code) をインストールします。
1. `claude` を実行し、ログイン方法として `Claude account with subscription` を選択します。ブラウザのログインフローに従い、チームメンバーのメールアドレスを使って SSO でログインします。

```shell
claude
```

プロジェクトに移動し、Claude Code に `What is this project about?` とプロンプトを送ります。

ヒント: より良いコンテキストのために [GitLab MCP Server を Claude Code に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-claude-code-to-the-gitlab-mcp-server)します。

### Codex {#codex}

Codex へのアクセスを得ることは、コンテンツ作成に役立ちます。例えば、このブログチュートリアル [Codex と GitLab：コード修正から本番環境まで](https://about.gitlab.com/blog/fix-bugs-with-codex-and-gitlab/)があります。

1. [AI ツールの要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements/)を確認し、OpenAI キーの[アクセスリクエスト](/handbook/eta/corporate-it/end-user-services/access-requests/)を作成します。[例（内部向け）](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/43999)。
1. OpenAI プラットフォームに移動します。`GitLab` 組織と `Default project` を選択し、[API キー](https://platform.openai.com/api-keys)を生成します
1. Homebrew で [Codex CLI](https://developers.openai.com/codex/cli)をインストールします。
1. `--with-api-key` パラメータでログインし、STDIN から API キーを読み込みます。

```shell
# Set your key in your shell environment (e.g. ~/.zshrc or a .env manager in 1Password)
export OPENAI_API_KEY="sk-..."

# Log in — key is read from the environment, not the command line
printenv OPENAI_API_KEY | codex login --with-api-key

# Verify
codex login status
```

プロジェクトに移動し、Codex に `What is this project about?` とプロンプトを送ります。

ヒント: より良いコンテキストのために [GitLab MCP Server を Codex に追加](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/#connect-openai-codex-to-the-gitlab-mcp-server)します。

## 拡張性とカスタマイズ {#extensibility-and-customization}

### スキル {#skills}

[Agent Skills](https://docs.gitlab.com/user/duo_agent_platform/customize/agent_skills/)はエージェントやユーザーによってオンデマンドで読み込まれ、デフォルトでコンテキストウィンドウを小さく保ちます。

プロジェクトの例:

- [dnsmichi の文体](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/skills/tone-of-voice?ref_type=heads)

ヒント：スキルを 1 つの Git リポジトリで管理し、シンボリックリンクを使って AI ツール間で共有します。各ツールは専用のディレクトリからスキルを読み込みます。

| AI ツール | スキルのディレクトリ |
| --- | --- |
| GitLab Duo Agent Platform | `~/.gitlab/duo/skills/` |
| Claude Code | `~/.claude/skills/` |
| Codex および Agent Skills 標準に従うその他のツール | `~/.agents/skills/` |

```shell
mkdir -p ~/.gitlab/duo/skills ~/.claude/skills ~/.agents/skills

ln -sfn ~/dotfiles/skills/tone-of-voice ~/.gitlab/duo/skills/tone-of-voice
ln -sfn ~/dotfiles/skills/tone-of-voice ~/.claude/skills/tone-of-voice
ln -sfn ~/dotfiles/skills/tone-of-voice ~/.agents/skills/tone-of-voice
```

[@dnsmichi の dotfiles プロジェクトの setup.sh スクリプト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/setup.sh?ref_type=heads)は、セットアップ時にすべてのスキルをリンクする作業を自動化します。

### AGENTS.md {#agentsmd}

[AGENTS.md 標準](https://docs.gitlab.com/user/duo_agent_platform/customize/agents_md/)はカスタムルールに似ています。ルートおよびサブディレクトリレベルの AGENTS.md ファイルをサポートし、特定のプロジェクトやディレクトリをどのように操作・使用するかをエージェント型 AI に案内・指示します。

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### カスタムルール {#custom-rules}

**すべての新規または既存の Developer Advocacy プロジェクトにデフォルトでカスタムルールを追加することを検討してください。**

1. [カスタムルール](https://docs.gitlab.com/user/duo_agent_platform/customize/custom_rules/)
2. [Code Review Flow](https://docs.gitlab.com/user/duo_agent_platform/customize/review_instructions/)のカスタムレビュー指示。
3. [AI Catalog のカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/)のシステムプロンプト

環境の例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/demo-environments/tanuki-iot-platform)

### MCP クライアント {#mcp-clients}

MCP クライアントを IDE に統合する方法については、[GitLab MCP Clients のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/)を参照してください。

内部の調査 Issue: [DAP MCP のユースケーステスト - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP Server {#mcp-server}

AI ツールと IDE でのセットアップと設定については、[GitLab MCP Server のドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)を参照してください。

### Knowledge Graph / Orbit {#knowledge-graph--orbit}

セットアップと統合の手順については、[Orbit のドキュメント](https://docs.gitlab.com/orbit/)に従ってください。

[Orbit GA 製品エピック](https://gitlab.com/groups/gitlab-org/-/work_items/19744)は、開発と機能ロードマップを追跡しています。

### Duo Agent Platform 用のセルフホストモデル {#self-hosted-models-for-duo-agent-platform}

サポートされているセルフホストモデルへのアクセスには、エンジニアリングテストインフラストラクチャへのアクセスが必要です。DRI、オプション、アイデアについては、[FY26 のセルフホストモデル調査（内部向け）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources)を確認してください。

## GitLab Duo Agent Platform のユースケース {#gitlab-duo-agent-platform-use-cases}

### Developer Advocates のユースケースプロンプト {#developer-advocates-use-case-prompts}

これらのプロンプトを IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)や [CLI](#gitlab-duo-cli)で使用します:

**デモ環境の管理**

- "`technology/feature` 用の新しいデモプロジェクトのセットアップガイドを作成してください"
- "このデモ環境の前提条件を文書化してください"
- "よくあるデモのセットアップの問題について、トラブルシューティングガイドを生成してください"
- "`demo environment` をセットアップするクイックスタートスクリプトを作成してください"

**デモリポジトリ＆コード**

- "`GitLab feature` を実演するサンプルアプリケーションを作成してください"
- "このデモのセットアップ手順を含む包括的な README を追加してください"
- "`language/framework` のデモ用の CI/CD パイプラインの例を生成してください"
- "`feature` と `technology` の統合を紹介するデモを作成してください"

**コンテンツ作成サポート**

- "ブログ記事用にこのデモからコードスニペットを抽出してください"
- "この機能をデモするためのスピーカーノートを生成してください"
- "このデモリポジトリからステップごとのチュートリアルを作成してください"
- "このデモをより魅力的にするための改善案を提案してください"

**環境ドキュメント**

- "この環境で使用しているツールとバージョンを文書化してください"
- "異なるセットアップ方法の比較表を作成してください"
- "`OS/platform` 用のインストール手順を生成してください"
- "必要な環境変数と設定を文書化してください"

**デモのメンテナンス**

- "このデモが非推奨の GitLab 機能を使用していないか確認してください"
- "このデモを更新し、最新の `framework` バージョンを使用するようにしてください"
- "デモのすべてのリンクと参照が引き続き有効か検証してください"
- "このデモが現在の GitLab バージョンで引き続き動作するかテストしてください"

**ワークショップ＆プレゼンテーションの準備**

- "このデモに基づいたワークショップの構成案を作成してください"
- "この機能を紹介する際の要点を生成してください"
- "この例からハンズオン演習を作成してください"
- "ワークショップ参加者向けのチートシートを作成してください"

**統合の例**

- "このデモで `tool` を GitLab と統合する方法を示してください"
- "すべての `feature` 設定オプションの例を作成してください"
- "テスト用のサンプル webhook ペイロードを生成してください"
- "この統合の API の使用例を文書化してください"

**ドキュメント＆コンテンツ管理**

- "このページにリンク切れや古い情報がないかレビューしてください"
- "このドキュメントがハンドブックのスタイルガイドに従っているか確認してください"
- "`topic` に言及しているすべてのページを見つけ、要約してください"
- "このページのアクセシビリティを改善するための提案をしてください"

**リポジトリのナビゲーションと理解**

- "`directory` で最近更新されたページを表示してください"
- "このハンドブックの主なセクションは何ですか？"
- "[特定のプロセスまたはポリシー] に関するドキュメントを探してください"
- "`directory/file` の主なコントリビューターは誰ですか？"

**メンテナンス＆品質**

- "6 か月以上更新されていないページを探してください"
- "類似のページ間で書式が不統一になっていないか確認してください"
- "重複するコンテンツや内容が重なるコンテンツを特定してください"
- "このセクションの最近のマージリクエストをレビューしてください"

**ワークフローの自動化**

- "テンプレートに従って `topic` の新しいハンドブックページを作成してください"
- "[古い用語] へのすべての参照を [新しい用語] に更新してください"
- "`section` の最近の更新について変更履歴を生成してください"
- "`directory` 内の古いコンテンツについて Issue を作成してください"

**コラボレーション**

- "Issue と MR から `topic` に関する最近の議論を要約してください"
- "[特定のハンドブックのセクション] については誰に尋ねればよいですか？"
- "レビューが必要なオープンのマージリクエストを表示してください"
- "このドキュメント更新に関連する作業項目を探してください"

**CI/CD 固有**

- "この YAML アンカーを変換し、代わりに extends を使用するようにしてください"
- "この CI ジョブに適切なルールを追加してください"
- "ビルドを高速化するためにパイプラインの設定を最適化してください"

## 開発 {#development}

### 言語ランタイムを管理する mise {#mise-for-managing-language-runtimes}

[mise](https://mise.jdx.dev/)は、さまざまな言語ランタイムとツールの管理を支援する多言語対応のバージョンマネージャーです。[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/)と [GitLab ハンドブック](https://handbook.gitlab.com/docs/development/running-locally/)で、Node.js、Ruby、Go、その他の依存関係を管理するために使用されています。

Developer Advocates は `mise` を以下の用途に使用できます:

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などの異なるバージョンを簡単に切り替えます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: プロジェクト固有のツールバージョンを `.mise.toml` または `.tool-versions` ファイルで定義し、すべてのチームメンバー（または異なるプロジェクト）が同じ環境を使用するようにします。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` などのツールを、システム全体への干渉なしにインストール・管理します。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE などの IDE が `mise` で管理される正しいツールバージョンを取得するようにします。

#### mise のヒントとベストプラクティス {#tips-and-best-practices-for-mise}

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html)に従います。
1. **シェルを設定する**: シェル設定ファイル（例: `.zshrc`、`.bashrc`）に `eval "$(mise activate)"` を追加します。
1. **`.mise.toml` または `.tool-versions` を使用する**: プロジェクト固有のバージョンについては、プロジェクトのルートにこれらのファイルのいずれかを作成します。`mise` は、ディレクトリに移動したときに指定されたバージョンを自動的に検出して有効化します。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使ってツールのグローバルデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: `mise current` を使って、現在のディレクトリでどのツールバージョンがアクティブかを確認します。
1. **インストール済みバージョンを一覧表示する**: `mise ls` を使って、ツールのすべてのインストール済みバージョンを確認します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使用法と設定については、[mise のドキュメント](https://mise.jdx.dev/dev-tools/)を参照してください。

#### GitLab 開発における mise 環境 {#mise-environments-in-gitlab-development}

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)（[IDE](#ides)と [CLI](#cli)に統合）

## リモート開発ワークスペース {#remote-development-workspaces}

[Workspaces](https://docs.gitlab.com/user/workspace/)は、[Developer Relations Cloud Resources](/handbook/marketing/product-and-technical-marketing/developer-advocacy/tools-and-platforms/cloud-resources/)上で動作するクラウド開発環境を提供します。

> ステータス: 非アクティブ。現在、インフラストラクチャのメンテナーはいません。以下のドキュメントは、将来の歴史的参照用に存在しています。

[remote-development サブグループ](https://gitlab.com/gitlab-da/use-cases/remote-development)には Kubernetes 用のエージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke)プロジェクトに文書化されています。これには、エージェントが応答しなくなりワークスペースが作成されない場合のトラブルシューティングが含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` が GKE で実行されている必要があります。現在のリソース: 3 ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入され、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動で生成されており、[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke)に従って四半期ごと（2023-08-15）に更新する必要があります。

## 学習リソース {#learning-resources}

### チームメンバーの例 {#team-member-examples}

- [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)は、ターミナル、IDE、エージェント型 AI、開発ツールを含む作業環境のセットアップを文書化した実運用の例です。

### 開発環境を取り上げた講演とデモ {#talks-and-demos-highlighting-dev-environments}

[Developer Advocacy コンテンツライブラリ](/handbook/marketing/product-and-technical-marketing/developer-advocacy/content/)と以下のリソースを確認してください:

1. AI 入門：開発者のための実践的な基礎 - 2025-06、Open Source @ Siemens
    - スライド: [公開版](https://dnsmichi.click/learning-ai-101-os-siemens-2025)、[内部版](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
