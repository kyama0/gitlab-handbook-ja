---
title: デベロッパーアドボケイトの開発環境
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/dev-environments/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

デベロッパーアドボケイトは、GitLab Duo Agent Platform を使用した AI ネイティブワークフローを含む、さまざまなタイプのプラットフォーム、エディタ、IDE で作業します。このページでは、デベロッパーアドボカシー関連のセットアップを最適化するためのベストプラクティスと役立つヒントをまとめます。

## リソース

[GitLab Duo Agent Platform ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/) から始めて、[IDE](#ides)、[CLI](#cli)、MCP やカスタムルールを使った [拡張性とカスタマイズ](#extensibility-and-customization) を読み進めてください。

アーキテクチャに関するインサイトは、[アーキテクチャ設計ドキュメント](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

[GitLab Duo Agent Platform launch support issue - DevRel（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/878) は、製品・エンジニアリングのアップデート、GTM とコンテンツ戦略、ユースケース開発を集約しています。

## IDE

デベロッパーアドボケイトは、プロジェクトとコンテンツ要件に応じて、さまざまな IDE を使用できます。IDE の機能とユースケースを理解し、コンテンツリクエストに焦点を当て、さまざまなオーディエンス向けに使用法を多様化することが重要です。

### IDE での AI と GitLab Duo

GitLab Duo と GitLab Duo Agent Platform は [IDE 拡張機能・プラグイン](https://docs.gitlab.com/editor_extensions/#available-extensions) として統合されています。

### Visual Studio Code

Visual Studio Code（短縮: VS Code）は、マーケットプレイスを通じて、さまざまなプログラミング言語と開発ツールの統合をサポートしています。

GitLab Duo は、[VS Code マーケットプレイスの GitLab Workflow 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio_code/) を通じて統合できます。

> **注**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) をレビューしてください。

![VS Code、ライトテーマ、右パネルに Duo Agentic Chat を表示。エディタはエージェント編集後の差分ビューを表示。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/vscode_light_theme_dap_agentic_chat_right_pane_diff_view.png)

#### VS Code のヒントとベストプラクティス

1. [VS Code のキーボードショートカット](https://code.visualstudio.com/docs/configure/keybindings) を頻繁に使用するものから学習・実践してください。
    - コマンドパレット: macOS では `cmd shift p`、Windows・Linux では `ctrl shift p`。
    - 設定: macOS では `cmd ,`、Windows・Linux では `ctrl ,`。
    - ヒント: [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/examples/) や [Claude](/handbook/tools-and-tips/ai/claude/) に支援を求めることもできます。
1. ターミナルから `code .` ショートカットを使用して、ローカルの Git リポジトリやディレクトリを開きます。これにより、GitLab UI、VS Code、ターミナル間でコンテキストを切り替える必要があるときに、コードの編集・デバッグのワークフローが簡素化されます。
1. VS Code でターミナルを開きます（ショートカット: macOS では `cmd j`、または `cmd shift p` で `terminal` を検索）。これにより、コードを編集しながら、サーバー、コンパイラ、Ansible playbook などのバックグラウンドタスクを開始でき、異なるウィンドウ間のコンテキストスイッチを回避できます。

#### 推奨設定と拡張機能

1. 編集中の自動保存を有効にします。これにより、コードを書く際のデータ損失や Git コミットデータの欠落を回避できます。
   - UI: 左下のギアアイコンをクリックして設定を開きます（macOS では `cmd ,` ショートカット）。`auto save` を検索します。
   - VS Code `settings.json`: `"files.autoSave": "afterDelay"` の新しいキー・値を追加します。
1. デフォルトでワードラップを有効にします。これにより、長い行が水平スクロールなしで読めるようになります。
   - UI: 左下のギアアイコンをクリックして設定を開きます（macOS では `cmd ,` ショートカット）。`word wrap` を検索します。
   - VS Code `settings.json`: `"editor.wordWrap": "on"` の新しいキー・値を追加します。
1. 定期的に必要な拡張機能をインストールし、信頼できるソースのみを使用してください。
   - [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode-extensions-install.sh?ref_type=heads) のメンテナンスされたリストをレビューしてください
   - CLI で `code --install-extension` を使用して拡張機能をインストールできます。例: `code --install-extension gitlab.gitlab-workflow`。

#### デモ設定: VS Code のプロファイルとテーマ

VS Code のデフォルトプロファイルはダークテーマを使用します。

```json
"workbench.colorTheme": "Default Dark Modern",
```

ライトテーマは対面イベントのプロジェクターでよりよく機能し、[デモ録画](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) にも役立ちます。

```json
"workbench.colorTheme": "Default Light Modern",
```

異なるテーマやインストール済み拡張機能を管理するために、複数のプロファイル（たとえば `Default` と `Light theme for demos`）を作成することをお勧めします。

必要なデモ録画設定については、[動画ガイドラインハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) をレビューしてください。

##### Chat を右パネルに移動

デフォルトでは、Chat パネルは VS Code UI の左側にあります。これは、エクスプローラー内のファイルツリーや Git コミット（同じく左側に配置）と干渉する可能性があります。

Chat を右サイドバーに移動するには:

1. 右上隅のアイコンで Secondary Side bar を開きます。
1. Chat アイコン（たとえば、Duo Chat）をドラッグして右サイドバーにドロップします。
1. 複数のチャットパネルを並列で使用できます。

@dnsmichi はデフォルトでこのセットアップを使用しています。

##### GitLab Duo Code Suggestions の追加言語を有効にする

1. 2つのパスから選択します:
   - UI: 左下のギアアイコンをクリックして設定を開きます。`gitlab.duoCodeSuggestions` を検索します。
   - VS Code `settings.json`: macOS で `cmd shift p` を押してコマンドパレットを開き、`settings.json` を検索します。`"gitlab.duoCodeSuggestions.additionalLanguages"` のエントリを文字列の配列として追加・修正します。
1. `README.md` ファイルを編集する際により多くのコード提案を表示したい場合は、配列に `markdown` を追加します。
   - @dnsmichi は、`settings.json` で次の言語の品質と関連性に自信があります（開発テストサイクル: 1年以上）:

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

1. Code Suggestions が適切なコンテキストを持つことが重要です: 現在のタスクに関連するタブをさらに開いてください。これらは [コンテキスト](https://docs.gitlab.com/user/project/repository/code_suggestions/#the-context-code-suggestions-is-aware-of) として使用されます。

完全な VS Code `settings.json` の例は、[@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/vscode/settings.json?ref_type=heads) にあります。

#### VS Code 拡張機能と GitLab Duo Agent Platform をデバッグする

ユースケースの例: GitLab Duo Agentic Chat が MCP 統合を提供し、MCP サーバーが起動して追加の AI コンテキストを消費していることを確認したいとします。

知っておくべきこと: [GitLab Language Server](https://docs.gitlab.com/editor_extensions/language_server/) は、GitLab の IDE 拡張機能全体でバックエンドを動かし、GitLab Duo Agentic Chat の MCP 統合を処理します。

1. VS Code の `Output` ビューを使用して拡張機能をデバッグできます。
1. デバッグの手順:
   - macOS で `cmd shift p` でコマンドパレットを開き、`View: toggle Output` を検索します。
   - `Output` ビューのドロップダウン（`Filter` の隣）で `GitLab Language Server` を選択します。
   - このビューは、ターミナルに拡張機能のログをストリーミングします。GitLab Duo で UI アクションをトリガーし、クライアントが正しいデータを送信しているかを観察します。
1. `Filter` フォームを使用して出力を検索・フィルタリングできます。たとえば、MCP 統合に関連するエントリを分離するには `mcp` を使用します。
1. オプション: ログの詳細レベルを `debug` に増やします:
   - 左下のギアアイコンをクリックして設定を開きます（macOS では `cmd ,` ショートカット）。設定ツリーで `GitLab` または `gitlab` を検索します。
   - `GitLab: Debug` チェックボックスにチェックを入れて、VS Code を再起動します。

[GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルを起動することもあります。実行がブロックされたり、無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効にする](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) かどうかを調査してください。

### JetBrains IDE

デベロッパーアドボケイトは、さまざまな目的とユースケースのために [JetBrains IDE](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/) にアクセスできます:

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

IntelliJ IDEA は他の言語のプラグインもサポートしており、利用可能性はサブスクリプション層（Ultimate vs. Community）に依存します。

GitLab Duo は [JetBrains マーケットプレイスの GitLab Duo プラグイン](https://docs.gitlab.com/editor_extensions/jetbrains_ide/) を使用して統合できます。

> **注**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) をレビューしてください。

![JetBrains IntelliJ IDEA に Duo Agentic Chat、Java 8 から 21 へのモダナイゼーション、エディタはエージェント編集の差分ビューを表示。](/images/handbook/marketing/developer-relations/developer-advocacy/dev-environments/jetbrains_intellij_idea_light_theme_dap_java_modernize_agentic_edits.png)

#### JetBrains IDE のヒントとベストプラクティス

1. [利用可能な IDE ライセンス](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/licenses/) をレビューし、最終的に追加の永続的な IDE ライセンスのアクセスリクエストを作成します。
1. [セットアップと設定ガイド](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/) を読み、個別の IDE とそのアップデートを管理するために [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) をインストールしてください。
   - オプションのヒント: デフォルトでは、ツールボックスは古いインストール済みバージョンを保持します。この動作がストレージ消費の問題を引き起こす場合は、`Tools > Keep previous versions to enable instant rollback` で設定を無効にしてください。
   - JetBrains IDE は、既存のセットアップから設定を移行・インポートできます。これは、GitLab Duo プラグインを一度インストール・設定し、別の JetBrains IDE にインポートするのに便利です。
1. [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) は、コマンドを実行するためにターミナルを起動することもあります。実行がブロックされたり、無限に実行されたりする場合は、[Oh-My-ZSH や Powerlevel10k のようなターミナル統合を無効にする](https://docs.gitlab.com/user/duo_agent_platform/troubleshooting/#ide-commands-fail-or-run-indefinitely) かどうかを調査してください。

#### デモ設定: JetBrains IDE での外観

JetBrains IDE のデフォルトプロファイルはダークテーマを使用します。ライトテーマに切り替えるには、`Settings > Appearance & Behavior > Appearance` に移動して `Light with Light Header` を選択します。

`Zoom` ドロップダウンを 125% に変更して、講演ライブデモでの詳細を増やすことができます。

必要なデモ録画設定については、[動画ガイドラインハンドブック](/handbook/marketing/developer-relations/developer-advocacy/content/#content-creation) をレビューしてください。

### MS Visual Studio

> 注: Windows と Visual Studio ライセンスへのアクセスが必要で、追加のセキュリティレビューも必要です。
>
> ステータス: リサーチ中。Todo は [この社内 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/712) で追跡されています。

GitLab Duo は [Visual Studio マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/visual_studio/) を使用して統合できます。

> **注**
>
> 初期セットアップが完了したら、[Dev Environments の社内ガイド](https://internal.gitlab.com/handbook/marketing/developer-relations/developer-advocacy/dev-environments/) をレビューしてください。

### Eclipse

GitLab Duo は [Eclipse マーケットプレイスの GitLab 拡張機能](https://docs.gitlab.com/editor_extensions/eclipse/) を使用して統合できます。

### neovim

> ヒント: [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) のフォークを使用して新しい neovim 設定を開始し、neovim 体験をブートストラップ・最適化してください。

GitLab Duo は [neovim プラグイン](https://docs.gitlab.com/editor_extensions/neovim/) を使用して統合できます。

## CLI

### GitLab Duo CLI

GitLab Duo CLI は、ターミナルで [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) へのアクセスを提供します。

要件:

1. [mise を使う](#mise-for-managing-language-runtimes) などの方法で NodeJS 22+ をインストールする
1. `api` スコープを持つパーソナルアクセストークンを作成する。
1. CLI をインストールする。
1. CLI を実行して、設定ダイアログを開始する。

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

CLI は [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) を使用して AIGW と DAP サービスと通信します。そのため、CLI は `gitlab-lsp` 内で開発されています。

機能とロードマップのアップデートについては [製品 epic](https://gitlab.com/groups/gitlab-org/-/epics/19070) をフォローし、フィードバックは [Duo CLI Feedback & Dogfooding epic](https://gitlab.com/groups/gitlab-org/-/epics/19806) に追加してください。

## 拡張性とカスタマイズ

### カスタムルール

**新しい・既存のすべてのデベロッパーアドボカシープロジェクトに、デフォルトでカスタムルールを追加することを検討してください。**

1. [Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/#create-custom-rules) のカスタムルール。
2. [Code Review Agent](https://docs.gitlab.com/user/project/merge_requests/duo_in_merge_requests/#customize-instructions-for-gitlab-duo-code-review) のカスタムレビュー指示。
3. [AI カタログのカスタムエージェント](https://docs.gitlab.com/user/duo_agent_platform/agents/custom/) のシステムプロンプト。

プロジェクト例:

- [Tanuki IoT platform](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-agent-platform/demo-environments/tanuki-iot-platform/-/tree/main/.gitlab/duo?ref_type=heads)

### MCP クライアント

MCP クライアントを IDE に統合する方法については、[GitLab MCP Clients ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/) を参照してください。

社内リサーチ Issue: [DAP MCP use case testing - DevRel](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/927)

### MCP サーバー

AI ツールと IDE でのセットアップと設定については、[GitLab MCP Server ドキュメント](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/) を参照してください。

### Knowledge Graph

セットアップと統合の手順については、[Knowledge Graph ドキュメント](https://gitlab-org.gitlab.io/rust/knowledge-graph/getting-started/overview/) に従ってください。

[GitLab Knowledge Graph First Iteration](https://gitlab.com/groups/gitlab-org/-/epics/17514) 製品 epic は、開発と機能ロードマップを追跡しています。

### Duo Agent Platform 用のセルフホストモデル

サポートされているセルフホストモデルへのアクセスには、エンジニアリングテストインフラストラクチャへのアクセスが必要です。DRI、オプション、アイデアについては、[FY26 のセルフホストモデルリサーチ（社内）](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/595#relevant-issues-epics-or-resources) をレビューしてください。

## GitLab Duo Agent Platform のユースケース

### デベロッパーアドボケイトのユースケースプロンプト

これらのプロンプトを、IDE の [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) と [CLI](#gitlab-duo-cli) で使用してください:

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

**CI/CD 固有**

- "Convert this YAML anchor to use extends instead"
- "Add proper rules to this CI job"
- "Optimize the pipeline configuration for faster builds"

## 開発

### 言語ランタイム管理のための mise

[mise](https://mise.jdx.dev/) は、さまざまな言語ランタイムとツールの管理に役立つ多言語バージョンマネージャーです。Node.js、Ruby、Go、その他の依存関係を管理するために、[GitLab Development Kit (GDK)](https://docs.gitlab.com/development/contributing/first_contribution/configure-dev-env-gdk/) と [GitLab handbook](https://handbook.gitlab.com/docs/development/running-locally/) で使用されています。

デベロッパーアドボケイトは `mise` を使用して以下のことを行えます:

1. **複数の言語バージョンを管理する**: さまざまなプロジェクトやデモに必要な Node.js、Python、Ruby、Go などの異なるバージョンを簡単に切り替えられます。

   ```shell
   mise use node@22
   mise use node@24
   ```

1. **一貫した環境を確保する**: `.mise.toml` または `.tool-versions` ファイルでプロジェクト固有のツールバージョンを定義し、すべてのチームメンバー（または異なるプロジェクト）が同じ環境を使用するようにします。

   ```toml
   # .mise.toml example
   [tools]
   node = "25"
   python = "3.14"
   go = "1.25"
   ```

1. **ツールのインストールを簡素化する**: `npm`、`yarn`、`pip`、`go` などのツールをシステム全体に干渉することなくインストール・管理します。

   ```shell
   mise install node@25
   mise install python@3.14
   ```

1. **IDE と統合する**: シェル環境を設定することで、VS Code や JetBrains IDE のような IDE が `mise` で管理されている正しいツールバージョンを取得することを確実にします。

#### mise のヒントとベストプラクティス

1. **`mise` をインストールする**: [公式インストールガイド](https://mise.jdx.dev/getting-started.html) に従ってください。
1. **シェルを設定する**: シェル設定ファイル（例: `.zshrc`、`.bashrc`）に `eval "$(mise activate)"` を追加します。
1. **`.mise.toml` または `.tool-versions` を使用する**: プロジェクト固有のバージョンの場合、これらのファイルのいずれかをプロジェクトルートに作成します。`mise` は、ディレクトリに移動すると指定されたバージョンを自動的に検出してアクティブにします。
1. **グローバルバージョン**: `mise global <tool>@<version>` を使用して、ツールのグローバルデフォルトバージョンを設定します。

    ```shell
    mise global node@22
    ```

1. **現在のバージョンを確認する**: 現在のディレクトリでアクティブなツールバージョンを確認するには、`mise current` を使用します。
1. **インストール済みバージョンを一覧表示する**: ツールのすべてのインストール済みバージョンを確認するには、`mise ls` を使用します。
1. **ツールを更新する**: `mise upgrade` でツールを最新の状態に保ちます。

より高度な使用法と設定については、[mise ドキュメント](https://mise.jdx.dev/dev-tools/) を参照してください。

#### GitLab 開発における mise 環境

- [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) （[IDE](#ides) と [CLI](#cli) に統合）

## リモート開発ワークスペース

[Workspaces](https://docs.gitlab.com/user/workspace/) は、[Developer Relations Cloud Resources](/handbook/marketing/developer-relations/workflows-tools/cloud-resources/) で実行されるクラウド開発環境を提供します。

> ステータス: 非アクティブ。現在、インフラストラクチャのメンテナーはいません。次のドキュメントは、将来の歴史的な参考として存在します。

[remote-development sub group](https://gitlab.com/gitlab-da/use-cases/remote-development) には Kubernetes 用エージェントがインストールされており、[agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) プロジェクトでドキュメント化されています。これには、エージェントが応答しなくなり、ワークスペースが作成されないときのトラブルシューティングが含まれます。

リソース:

1. Kubernetes クラスター `da-remote-development-1` は GKE で実行されている必要があります。現在のリソース: 3ノード。合計 6 vCPU、12 GB メモリ。
1. ドメイン `remote-dev.dev` は Google DNS サービスを通じて購入され、Kubernetes クラスターのパブリック IP を指しています。
1. TLS 証明書は Let's Encrypt で手動で生成されており、[ドキュメントの手順](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) に従って四半期ごとに更新する必要があります（2023-08-15）。

## 学習リソース

### チームメンバーの例

- IDE と開発ツールを含む作業環境のセットアップをドキュメント化した [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles)。

### Dev Environments を強調する講演とデモ

[Developer Advocacy コンテンツライブラリ](/handbook/marketing/developer-relations/developer-advocacy/content/) と次のリソースをレビューしてください:

1. Learning AI 101: Practical Foundations for Developers - 2025-06、Open Source @ Siemens
    - スライド: [public](https://dnsmichi.click/learning-ai-101-os-siemens-2025), [internal](https://docs.google.com/presentation/d/1PUCUrVzKnzc25md8gbh1jYznz-dUFfQcENvbR9xUJ7k/edit)
1. Efficient DevSecOps workflows with a little help from AI - 2024-12、GitLab DACH Roadshow FY25
    - スライド: [public](https://go.gitlab.com/JRFMG4), [internal](https://docs.google.com/presentation/d/1Pm8yT46jpcc3kY0PLZqZlG2slIiFyZiQPKFEgyqqstw/edit)
