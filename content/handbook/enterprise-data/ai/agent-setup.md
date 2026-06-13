---
title: "AI エージェントのセットアップ"
description: "開発用のエージェント型 AI ツールをセットアップするためのデータチームのガイド"
upstream_path: /handbook/enterprise-data/ai/agent-setup/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-11T23:33:07+00:00
translated_at: "2026-06-12T13:00:00Z"
translator: claude
stale: false
---

[TOC]

## コンテキスト {#context}

データチームには AI 支援開発の標準的なアプローチがありません。このガイドはそのギャップを埋めます。これは複数のチームメイトの間ですでにうまく機能してきた内容に基づいており、ゼロから自分で考え出すのではなく、全員がしっかりとした出発点を持てるようにします。

このガイドは以下のセットアップを扱います。

- **OpenCode** — ターミナルベースの AI コーディングエージェント
- **Snowflake/dbt MCP サーバー**（任意ですが、強く推奨します）
- **MacWhisper** — 音声ベースのプロンプト入力（任意）

---

## OpenCode のセットアップ {#opencode-setup}

より包括的なガイドは[内部ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/)にあります。以下の手順は、データチームに特化した簡略版です。

### ステップ 1: OpenCode のインストール {#step-1-install-opencode}

```bash
curl -fsSL https://opencode.ai/install | bash
```

### ステップ 2: インストールの確認 {#step-2-verify-the-installation}

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

### ステップ 3: analytics リポジトリから OpenCode を起動 {#step-3-start-opencode-from-the-analytics-repo}

```bash
jump analytics
opencode
```

### ステップ 4: GitLab Duo を AI プロバイダーとして設定 {#step-4-configure-gitlab-duo-as-your-ai-provider}

GitLab Duo は OAuth を使用します。作成や管理が必要なトークンはありません。

1. OpenCode 内で `/connect` を実行し、**GitLab Duo** を選択します
2. OpenCode が OAuth フローを完了するためにブラウザを開きます
3. `@gitlab.com` アカウントでサインインし、アプリを承認します
4. 自動的に OpenCode にリダイレクトされます

### ステップ 4.5: 接続のテスト {#step-4-5-test-the-connection}

接続したら、`hi` と入力して OpenCode が応答することを確認してテストします。

### ステップ 5: Golden Config の適用 {#step-5-apply-the-golden-config}

[OpenCode Golden Path](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/golden-configs/opencode/#golden-path-config) の設定を適用します。

> **注:** `opencode.json` ではなく `~/.config/opencode/opencode.jsonc` を使用してください。`.jsonc` 拡張子はコメントを許可するため、設定に注釈を付けるのに便利です。

### ステップ 6: `plan` をデフォルトエージェントに設定 {#step-6-set-plan-as-your-default-agent}

`~/.config/opencode/config.json`（これはステップ 5 の `opencode.jsonc` Golden Config とは別のファイルです）を開き、`default_agent` を追加します。

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  ...
  "default_agent": "plan"
}
```

これにより、デフォルトでより安全で慎重なモードに留まります。実行する準備ができたら、明示的に Build に切り替えます。

### ステップ 7: Agent Usage Guide の確認 {#step-7-review-the-agent-usage-guide}

OpenCode の使用を開始する前に、[Agent Usage Guide](agent-usage-guide.md) を確認して、以下を理解してください。

- エージェントと MCP の仕組み
- 設定のベストプラクティス（グローバル対プロジェクトレベル）
- Plan モードと Build モードの使い分け
- プロンプト入力のベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

### ビデオリソース {#video-resources}

**GitLab Unfiltered** アカウントの使用が必要です。

- [OpenCode Setup Tutorial](https://www.youtube.com/watch?v=80vTUzgQzoY)（3 分 30 秒）
- [OpenCode Demo](https://www.youtube.com/watch?v=nClVkkI-MFo)（5 分 30 秒）

---

## MCP サーバーのセットアップ {#mcp-server-setup}

### Snowflake MCP サーバー（任意ですが強く推奨） {#snowflake-mcp-server-optional-but-highly-recommended}

OpenCode を Snowflake MCP に接続すると、LLM エージェントが OpenCode セッション中に Snowflake を直接クエリできるようになります。

セットアップするには、[setup_mcp_analytics.sh スクリプト](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/setup_mcp_analytics.sh?ref_type=heads)を次のコマンドで実行します。

```bash
jump analytics
git checkout master && git pull && ./admin/setup_mcp_analytics.sh
```

スクリプトは GitLab のユーザー名と analytics リポジトリのパスの入力を求めます。

> **重要:** スクリプトはコンピューターのログインパスワードの入力を求め、キーチェーンアクセスを要求します。パスワードを入力し、プロンプトが表示されたら **「常に許可」** をクリックしてください。

**接続を確認します。**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力して、インターフェースの右側を確認します。Snowflake MCP の名前が「接続済み」を示す緑色のドットとともに表示されているはずです。

<details>
<summary>作成される内容の詳細</summary>

スクリプトは 2 つのファイルを生成します。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp_config.yml`**

どの Snowflake ツールグループを有効にするか、どの SQL ステートメントタイプを許可するかを制御します。デフォルトでは、オブジェクトの検査とクエリの実行を有効にし、破壊的な操作（`Drop`、`Delete`）を無効にします。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp.env`**

```env
SNOWFLAKE_USER=<your GitLab email>
SNOWFLAKE_ACCOUNT=gitlab
SNOWFLAKE_ROLE=<the portion of your email before the @>
```

</details>

### dbt MCP サーバー {#dbt-mcp-server}

上記の `setup_snowflake_mcp.sh` を実行した場合、これはすでに設定されています。スクリプトは次の環境変数を `~/.zshrc` に追加します。

```bash
# Analytics MCP Environment Variables
export ANALYTICS_DIR="~/repos/analytics/"
export DBT_PROJECT_DIR="$ANALYTICS_DIR/transform/snowflake-dbt"
export DBT_PATH="$DBT_PROJECT_DIR/.venv/bin/dbt"
```

唯一の他の前提条件は、dbt virtualenv がセットアップされていることです。確認またはセットアップするには:

```bash
jump analytics
make run-dbt
ls .venv/bin/dbt  # Should show the dbt executable
```

`ls .venv/bin/dbt` がファイルパスを返せば、準備完了です。

**接続を確認します。**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力して、インターフェースの右側を確認します。dbt MCP の名前が「接続済み」を示す緑色のドットとともに表示されているはずです。

---

## 音声プロンプト入力のための MacWhisper（任意） {#macwhisper-for-voice-prompting-optional}

詳細なプロンプトを打ち込むのは遅いものです。[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) は macOS の音声テキスト変換アプリで、コンテキストを説明したり問題を声に出して考えたりするのをはるかに速くします。特に、入力するより考える時間の方が短くなるような長いプロンプトに有効です。

組み込みの macOS Dictation アプリよりも目に見えて正確で、クラウドベースの文字起こしとは異なり完全にデバイス上で動作するため、データがマシンの外に出ることはありません。

## スキルのセットアップ {#skills-setup}

スキルは、エージェントが自動的に呼び出せる再利用可能なワークフローと規約を提供します。利用可能なすべてのデータチームのスキルを使用するには:

1. 上記の OpenCode セットアップ手順を完了します
2. 上記の MCP セットアップ手順（Snowflake/dbt）を完了します
3. [セットアップ手順](https://gitlab.com/gitlab-data/data-team-agentic-skills#setup-opencode)に従って、`data-team-agentic-skills` リポジトリをクローンしてシンボリックリンクします
