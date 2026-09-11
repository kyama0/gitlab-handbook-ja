---
title: "AI エージェントのセットアップ"
description: "開発用のエージェント型 AI ツールをセットアップするためのデータチームのガイド"
upstream_path: "/handbook/enterprise-data/ai/agent-setup/"
upstream_sha: "0b4843d337f9f8173d56982fff942cb2b5a78543"
lastmod: "2026-09-10T21:04:36Z"
translated_at: "2026-09-11T12:56:16+00:00"
translator: claude
stale: false
---

[TOC]

## コンテキスト {#context}

データチームには AI 支援開発の標準的なアプローチがありません。このガイドはそのギャップを埋めます。これは複数のチームメイトの間ですでにうまく機能してきた内容に基づいており、ゼロから自分で考え出すのではなく、全員がしっかりとした出発点を持てるようにします。

ここでは、ターミナルベースの 2 つのエージェント、**Claude Code** と **OpenCode** を説明します。どちらもサポートされており、チームのデフォルトは決まっていません。自分のワークフローに合う方を使用してください。チームの共有スキルは [Agent Skills 形式](https://agentskills.io/specification)に従っているため、1 つのローカルクローンをどちらのツールでも使用できます。

このガイドは以下のセットアップを扱います。

- **Claude Code** と **OpenCode** — ターミナルベースの AI コーディングエージェント
- **Snowflake CLI と dbt MCP サーバー** — エージェントセッション中のデータアクセス
- **MacWhisper** — 音声ベースのプロンプト入力（任意）

---

## Claude Code のセットアップ {#claude-code-setup}

より包括的なガイドは[内部ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/claude-code-setup/)にあります。以下の手順は、データチームに特化した簡略版です。

<details>
<summary><strong>Claude Code のセットアップ手順</strong></summary>

**ステップ 1: Claude Code のインストール**

[Claude Code セットアップガイド](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/claude-code-setup/)に従って Claude Code をインストールします。このガイドでは、インストール、GitLab アカウントでの認証、承認済みの利用ポリシーについて説明しています。

インストールを確認します。

```bash
claude --version
```

インストールされたバージョン番号が表示されるはずです。

**ステップ 2: analytics リポジトリから Claude Code を起動**

```bash
jump analytics
claude
```

**ステップ 3: GitLab MCP サーバーを追加**

[GitLab MCP セットアップガイド](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/gitlab-mcp-setup/)に従って GitLab MCP サーバーを追加します。

GitLab MCP サーバーにより、エージェントはセッション中に GitLab を直接操作できます。Issue の読み取り、マージリクエストの作成と更新、レビューコメントの読み取り、パイプラインとジョブのステータス確認が可能になります。Data Team のスキルのいくつかはこのサーバーに依存しています。

接続を確認するには、Claude Code 内で `/mcp` を実行します。GitLab サーバーが接続済みとして表示されるはずです。

**ステップ 4: `plan` をデフォルトモードに設定**

Claude Code セッション内で `/config` を実行して、設定を確認、変更します。ここで変更した内容はすべて Claude Code の設定ファイルに自動的に書き込まれるため、設定ファイルを手動で編集する必要はありません。

`defaultMode` を `plan` に設定します。これにより、デフォルトでより安全で慎重なモードに留まります。実行する準備ができたら、明示的に編集モードに切り替えます。これは、以下で説明する OpenCode のデフォルトエージェント設定に相当する Claude Code の設定です。

あわせて `/config` でモデルと出力スタイルも確認するとよいでしょう。

**ステップ 5: エージェント利用ガイドの確認**

Claude Code の使用を開始する前に、[エージェント利用ガイド](agent-usage-guide.md)を確認して、以下を理解してください。

- エージェントと MCP の仕組み
- 設定のベストプラクティス（グローバル対プロジェクトレベル）
- Plan モードを使うタイミング
- プロンプト入力のベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

</details>

---

## OpenCode のセットアップ {#opencode-setup}

より包括的なガイドは[内部ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/)にあります。以下の手順は、データチームに特化した簡略版です。

<details>
<summary><strong>OpenCode のセットアップ手順</strong></summary>

<span id="step-1-install-opencode"></span>

**ステップ 1: OpenCode のインストール**

```bash
curl -fsSL https://opencode.ai/install | bash
```

<span id="step-2-verify-the-installation"></span>

**ステップ 2: インストールの確認**

OpenCode が PATH で利用可能であることを確認します。

```bash
which opencode
```

**`which opencode` が何も返さない場合**、次を実行して OpenCode を PATH に追加します。

```bash
echo 'export PATH=~/.opencode/bin:$PATH' >> ~/.zshrc && source ~/.zshrc
```

次に、インストールを確認します。

```bash
opencode --version
```

インストールされたバージョン番号が表示されるはずです。

<span id="step-3-start-opencode-from-the-analytics-repo"></span>

**ステップ 3: analytics リポジトリから OpenCode を起動**

```bash
jump analytics
opencode
```

<span id="step-4-configure-gitlab-duo-as-your-ai-provider"></span>

**ステップ 4: GitLab Duo を AI プロバイダーとして設定**

GitLab Duo は OAuth を使用します。作成や管理が必要なトークンはありません。

1. OpenCode 内で `/connect` を実行し、**GitLab Duo** を選択します
1. OpenCode が OAuth フローを完了するためにブラウザを開きます
1. `@gitlab.com` アカウントでサインインし、アプリを承認します
1. 自動的に OpenCode にリダイレクトされます

接続したら、`hi` と入力して OpenCode が応答することを確認してテストします。

<span id="step-5-apply-the-golden-config"></span>

**ステップ 5: Golden Config の適用**

[OpenCode Golden Path](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/golden-configs/opencode/#golden-path-config)の設定を適用します。

> **注:** `opencode.json` ではなく `~/.config/opencode/opencode.jsonc` を使用してください。`.jsonc` 拡張子はコメントを許可するため、設定に注釈を付けるのに便利です。

<span id="step-6-set-plan-as-your-default-agent"></span>

**ステップ 6: `plan` をデフォルトエージェントに設定**

`~/.config/opencode/config.json`（これはステップ 5 の `opencode.jsonc` Golden Config とは別のファイルです）を開き、`default_agent` を追加します。

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  ...
  "default_agent": "plan"
}
```

これにより、デフォルトでより安全で慎重なモードに留まります。実行する準備ができたら、明示的に Build に切り替えます。

<span id="step-7-review-the-agent-usage-guide"></span>

**ステップ 7: エージェント利用ガイドの確認**

OpenCode の使用を開始する前に、[エージェント利用ガイド](agent-usage-guide.md)を確認して、以下を理解してください。

- エージェントと MCP の仕組み
- 設定のベストプラクティス（グローバル対プロジェクトレベル）
- Plan モードと Build モードの使い分け
- プロンプト入力のベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

<span id="video-resources"></span>

**ビデオリソース**

**GitLab Unfiltered** アカウントの使用が必要です。

- [OpenCode セットアップチュートリアル](https://www.youtube.com/watch?v=80vTUzgQzoY)（3 分 30 秒）
- [OpenCode デモ](https://www.youtube.com/watch?v=nClVkkI-MFo)（5 分 30 秒）

</details>

---

## 他のアプリケーションへの接続

エージェントは、ツールチェーンのより多くのツールにアクセスできるほど役立ちます。以下のセクションでは、データチームが日常的に利用する接続、つまり Snowflake へのクエリと dbt プロジェクトの把握について説明します。

### Snowflake CLI

エージェントは、Data Team におけるローカルからの Snowflake アクセスの標準である [Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)（`snow`）を通じて Snowflake にクエリを実行します。インストールと設定は、そのページに従ってください。

`snow connection test` に成功すれば、Claude Code と OpenCode のどちらもセッション中に Snowflake にクエリを実行できます。Claude Code はターミナルで `snow sql` を実行し、OpenCode は組み込みの `snowflake` ツールを使用します。

> **注:** 以前ここで説明していた Snowflake MCP サーバーは保守されなくなり、Snowflake CLI に置き換えられました。以前に MCP サーバーをセットアップした場合も、移行手順はありません。CLI をインストールし、代わりに使用してください。

### dbt MCP サーバー {#dbt-mcp-server}

dbt MCP サーバーにより、エージェントは dbt プロジェクトのモデル構造、リネージュ、ノード詳細を把握できます。これは analytics リポジトリでのみ関係します。

まず、dbt virtualenv がセットアップされていることを確認します。

```bash
jump analytics
make run-dbt
ls .venv/bin/dbt  # Should show the dbt executable
```

`ls .venv/bin/dbt` がファイルパスを返せば、準備完了です。

次に、以下を `~/.zshrc` に追加します。analytics リポジトリが別の場所にある場合は、`ANALYTICS_DIR` を調整してください。

```bash
# Analytics MCP Environment Variables
export ANALYTICS_DIR="$HOME/repos/analytics"
export DBT_PROJECT_DIR="$ANALYTICS_DIR/transform/snowflake-dbt"
export DBT_PATH="$DBT_PROJECT_DIR/.venv/bin/dbt"
```

エージェントを起動する予定のシェルで `source ~/.zshrc` を実行します。

**接続を確認します。**

Claude Code で `/mcp`、または OpenCode で `/mcps` を実行します。dbt サーバーが接続済みとして表示されるはずです。

---

## スキルのセットアップ {#skills-setup}

リポジトリ内でエージェントを実行する場合、そのリポジトリ独自のスキルはセットアップ不要です。エージェントがフロントマターを読み取り、タスクが一致すると呼び出します。

リポジトリ間で共有されるスキルは異なります。それらは [`data-team-agentic-skills`](https://gitlab.com/gitlab-data/data-team-agentic-skills)にあり、エージェントが認識できるようにするには、ローカルのスキルディレクトリにシンボリックリンクを作成する必要があります。リポジトリ独自のスキルが共有スキルを呼び出す場合も同様です。そのリポジトリの README に記載されたセットアップ手順に従ってください。

---

## 音声プロンプト入力のための MacWhisper（任意） {#macwhisper-for-voice-prompting-optional}

詳細なプロンプトを打ち込むのは遅いものです。[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) は macOS の音声テキスト変換アプリで、コンテキストを説明したり問題を声に出して考えたりするのをはるかに速くします。特に、入力するより考える時間の方が短くなるような長いプロンプトに有効です。

組み込みの macOS Dictation アプリよりも目に見えて正確で、クラウドベースの文字起こしとは異なり完全にデバイス上で動作するため、データがマシンの外に出ることはありません。
