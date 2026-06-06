---
title: "AI エージェントのセットアップ"
description: "開発用のエージェント型 AI ツールをセットアップするためのデータチームのガイド"
upstream_path: /handbook/enterprise-data/ai/agent-setup/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T13:54:40+00:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

[TOC]

## 背景

データチームには、AI 支援による開発の標準的なアプローチがありません。このガイドはそのギャップを埋めるものです。すでに複数のチームメイトの間でうまく機能しているやり方をベースにしているため、誰もがゼロから手探りするのではなく、しっかりとした出発点を持てます。

このガイドでは、次のセットアップを扱います。

- **OpenCode** — ターミナルベースの AI コーディングエージェント
- **Snowflake/dbt MCP サーバー**（任意ですが、強く推奨）
- **MacWhisper** — 音声によるプロンプト入力（任意）

---

## OpenCode のセットアップ

より包括的なガイドは[内部ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/)にあります。以下の手順は、データチーム向けに簡略化したバージョンです。

### ステップ 1: OpenCode をインストールする

```bash
curl -fsSL https://opencode.ai/install | bash
```

### ステップ 2: インストールを確認する

OpenCode が PATH で利用できることを確認します。

```bash
which opencode
```

**`which opencode` が何も返さない場合**は、次を実行して OpenCode を PATH に追加します。

```bash
echo 'export PATH=~/.opencode/bin:$PATH' >> ~/.zshrc && source ~/.zshrc
```

そのうえでインストールを確認します。

```bash
opencode --version
```

インストールされたバージョン番号が表示されるはずです。

### ステップ 3: analytics リポジトリから OpenCode を起動する

```bash
jump analytics
opencode
```

### ステップ 4: GitLab Duo を AI プロバイダーとして設定する

GitLab Duo は OAuth を使用するため、作成・管理するトークンはありません。

1. OpenCode 内で `/connect` を実行し、**GitLab Duo** を選択します
2. OpenCode がブラウザを開いて OAuth フローを完了させます
3. `@gitlab.com` アカウントでサインインし、アプリを認可します
4. 自動的に OpenCode にリダイレクトされます

### ステップ 4.5: 接続をテストする

接続できたら、`hi` と入力して OpenCode が応答することを確認します。

### ステップ 5: Golden Config を適用する

[OpenCode Golden Path](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/golden-configs/opencode/#golden-path-config) の設定を適用します。

> **注:** `opencode.json` ではなく `~/.config/opencode/opencode.jsonc` を使用してください。`.jsonc` 拡張子はコメントを許可するため、設定に注釈を付けるのに便利です。

### ステップ 6: `plan` をデフォルトエージェントに設定する

`~/.config/opencode/config.json`（ステップ 5 の `opencode.jsonc` Golden Config とは別のファイルです）を開き、`default_agent` を追加します。

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  ...
  "default_agent": "plan"
}
```

これにより、デフォルトでより安全で慎重なモードのままになります。実行する準備ができたら、明示的に Build に切り替えます。

### ステップ 7: Agent Usage Guide を確認する

OpenCode を使い始める前に、[Agent Usage Guide](agent-usage-guide.md) を確認し、次の点を理解してください。

- エージェントと MCP のしくみ
- 設定のベストプラクティス（グローバル vs プロジェクトレベル）
- Plan モードと Build モードの使い分け
- プロンプトのベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

### 動画リソース

- [OpenCode Setup Tutorial](https://www.youtube.com/watch?v=80vTUzgQzoY)（3 分 30 秒）
- [OpenCode Demo](https://www.youtube.com/watch?v=nClVkkI-MFo)（5 分 30 秒）

---

## MCP サーバーのセットアップ

### Snowflake MCP サーバー（任意ですが強く推奨）

OpenCode を Snowflake MCP に接続すると、OpenCode セッション中に LLM エージェントが Snowflake を直接クエリできるようになります。

セットアップするには、[setup_mcp_analytics.sh スクリプト](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/setup_mcp_analytics.sh?ref_type=heads) を次のコマンドで実行します。

```bash
jump analytics
git checkout master && git pull && ./admin/setup_mcp_analytics.sh
```

スクリプトは、あなたの GitLab ユーザー名と analytics リポジトリのパスを尋ねます。

> **重要:** スクリプトはコンピューターのログインパスワードを尋ね、キーチェーンへのアクセスを要求します。パスワードを入力し、求められたら **「常に許可」** をクリックしてください。

**接続を確認する:**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力してから、インターフェイスの右側を見てください。Snowflake MCP の名前が「接続済み」を示す緑色のドットとともに表示されているはずです。

<details>
<summary>何が作成されるかの詳細</summary>

スクリプトは 2 つのファイルを生成します。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp_config.yml`**

どの Snowflake ツールグループを有効にするか、どの SQL ステートメントタイプを許可するかを制御します。デフォルトでは、オブジェクトの検査とクエリの実行を有効にする一方で、破壊的な操作（`Drop`, `Delete`）を無効にします。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp.env`**

```env
SNOWFLAKE_USER=<your GitLab email>
SNOWFLAKE_ACCOUNT=gitlab
SNOWFLAKE_ROLE=<the portion of your email before the @>
```

</details>

### dbt MCP サーバー

上記の `setup_snowflake_mcp.sh` を実行済みであれば、これはすでに設定されています。スクリプトは次の環境変数を `~/.zshrc` に追加します。

```bash
# Analytics MCP Environment Variables
export ANALYTICS_DIR="~/repos/analytics/"
export DBT_PROJECT_DIR="$ANALYTICS_DIR/transform/snowflake-dbt"
export DBT_PATH="$DBT_PROJECT_DIR/.venv/bin/dbt"
```

他に必要な前提条件は、dbt の virtualenv がセットアップされていることだけです。確認またはセットアップするには次を実行します。

```bash
jump analytics
make run-dbt
ls .venv/bin/dbt  # Should show the dbt executable
```

`ls .venv/bin/dbt` がファイルパスを返せば、準備完了です。

**接続を確認する:**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力してから、インターフェイスの右側を見てください。dbt MCP の名前が「接続済み」を示す緑色のドットとともに表示されているはずです。

---

## 音声プロンプト用の MacWhisper（任意）

詳細なプロンプトを打ち込むのは時間がかかります。[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) は macOS の音声テキスト変換アプリで、コンテキストを説明したり、声に出して問題を整理したりするのをずっと速くしてくれます。特に、入力よりも考えることに時間を使いたい長いプロンプトで効果的です。

macOS 標準の音声入力アプリよりも明らかに精度が高く、クラウドベースの文字起こしとは違ってすべてデバイス上で動作するため、何もマシンの外に出ません。

## スキルのセットアップ

スキルは、エージェントが自動的に呼び出せる再利用可能なワークフローと規約を提供します。利用可能なすべてのデータチームのスキルを使うには次のようにします。

1. 上記の OpenCode セットアップ手順を完了する
2. 上記の MCP セットアップ手順（Snowflake/dbt）を完了する
3. [セットアップ手順](https://gitlab.com/gitlab-data/data-team-agentic-skills#setup-opencode)に従って `data-team-agentic-skills` リポジトリをクローンしてシンボリックリンクを張る
