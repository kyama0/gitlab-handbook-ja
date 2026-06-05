---
title: "AI エージェントのセットアップ"
description: "Data Team による、開発向けエージェント型 AI ツールのセットアップガイド"
upstream_path: /handbook/enterprise-data/ai/agent-setup/
upstream_sha: 228e83810bd79bddf58ab0b0b518b1d52bd74fb7
lastmod: "2026-06-05T13:54:40+00:00"
translated_at: "2026-06-05T21:08:33Z"
translator: claude
stale: false
---

[TOC]

## 背景

Data Team には AI 支援による開発の標準的なアプローチが存在しないため、本ガイドでそのギャップを埋めます。すでに複数のチームメンバーが実践してうまくいっている方法をベースにしているので、ゼロから自分で考え始めるのではなく、しっかりとした出発点を全員に提供できます。

本ガイドが扱うセットアップ:

- **OpenCode** — ターミナルベースの AI コーディングエージェント
- **Snowflake/dbt MCP サーバー**（任意。ただし強く推奨）
- **MacWhisper** — 音声によるプロンプト入力（任意）

---

## OpenCode のセットアップ

より包括的なガイドは [社内ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/) に用意されています。以下のステップは Data Team 向けに簡略化したバージョンです。

### Step 1: OpenCode をインストールする

```bash
curl -fsSL https://opencode.ai/install | bash
```

### Step 2: インストールを確認する

OpenCode が PATH 上にあることを確認します:

```bash
which opencode
```

**`which opencode` が何も返さない場合**、次のコマンドで OpenCode を PATH に追加します:

```bash
echo 'export PATH=~/.opencode/bin:$PATH' >> ~/.zshrc && source ~/.zshrc
```

その後、インストールを確認します:

```bash
opencode --version
```

インストール済みのバージョン番号が表示されるはずです。

### Step 3: analytics リポジトリから OpenCode を起動する

```bash
jump analytics
opencode
```

### Step 4: AI プロバイダとして GitLab Duo を設定する

GitLab Duo は OAuth を使用するため、作成・管理するトークンはありません。

1. OpenCode 内で `/connect` を実行し、**GitLab Duo** を選択します
2. OpenCode が OAuth フローを完了するためにブラウザを開きます
3. `@gitlab.com` アカウントでサインインしてアプリを認可します
4. 自動的に OpenCode にリダイレクトされます

### Step 4.5: 接続をテストする

接続が完了したら、`hi` と入力して OpenCode が応答するか確認します。

### Step 5: Golden Config を適用する

[OpenCode Golden Path](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/golden-configs/opencode/#golden-path-config) の設定を適用します。

> **Note:** `opencode.json` ではなく `~/.config/opencode/opencode.jsonc` を使用してください。`.jsonc` 拡張子はコメントを許容するので、設定への注釈付けに便利です。

### Step 6: 既定のエージェントを `plan` に設定する

`~/.config/opencode/config.json`（Step 5 の `opencode.jsonc` Golden Config とは別のファイル）を開き、`default_agent` を追加します:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  ...
  "default_agent": "plan"
}
```

これにより、既定でより安全で慎重なモードに留まることができます。実行する準備ができたタイミングで明示的に Build に切り替えます。

### Step 7: Agent Usage Guide を確認する

OpenCode を使い始める前に、以下を理解するために [Agent Usage Guide](agent-usage-guide.md) を確認してください:

- エージェントと MCP の動作原理
- 設定のベストプラクティス（グローバル vs プロジェクトレベル）
- Plan モードと Build モードの使い分け
- プロンプトのベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

### 動画リソース

- [OpenCode Setup Tutorial](https://www.youtube.com/watch?v=80vTUzgQzoY)（3 分 30 秒）
- [OpenCode Demo](https://www.youtube.com/watch?v=nClVkkI-MFo)（5 分 30 秒）

---

## MCP サーバーのセットアップ

### Snowflake MCP サーバー（任意。ただし強く推奨）

OpenCode を Snowflake MCP に接続すると、LLM エージェントが OpenCode セッション中に Snowflake へ直接クエリできるようになります。

セットアップするには、[setup_mcp_analytics.sh スクリプト](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/setup_mcp_analytics.sh?ref_type=heads) を以下のコマンドで実行します:

```bash
jump analytics
git checkout master && git pull && ./admin/setup_mcp_analytics.sh
```

スクリプトは GitLab ユーザー名と analytics リポジトリのパスを尋ねます。

> **重要:** スクリプトはコンピューターのログインパスワードを尋ね、キーチェーンへのアクセスを要求します。パスワードを入力し、プロンプトが出たら **「Always Allow」** をクリックしてください。

**接続を確認する:**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力してから、インターフェースの右側を見ます。Snowflake MCP の名前が表示され、緑色のドットで "connected" と示されているはずです。

<details>
<summary>作成される内容の詳細</summary>

スクリプトは 2 つのファイルを生成します:

**`~/.config/mcp/snowflake-mcp/snowflake_mcp_config.yml`**

どの Snowflake ツールグループを有効にし、どの SQL ステートメントタイプを許可するかを制御します。デフォルトではオブジェクト調査とクエリ実行を有効化し、破壊的な操作（`Drop`、`Delete`）は無効化しています。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp.env`**

```env
SNOWFLAKE_USER=<your GitLab email>
SNOWFLAKE_ACCOUNT=gitlab
SNOWFLAKE_ROLE=<the portion of your email before the @>
```

</details>

### dbt MCP サーバー

上記で `setup_snowflake_mcp.sh` を実行済みであれば、すでに設定済みです。スクリプトは以下の環境変数を `~/.zshrc` に追加します:

```bash
# Analytics MCP Environment Variables
export ANALYTICS_DIR="~/repos/analytics/"
export DBT_PROJECT_DIR="$ANALYTICS_DIR/transform/snowflake-dbt"
export DBT_PATH="$DBT_PROJECT_DIR/.venv/bin/dbt"
```

他に必要な前提は dbt の virtualenv がセットアップされていることだけです。確認またはセットアップするには:

```bash
jump analytics
make run-dbt
ls .venv/bin/dbt  # Should show the dbt executable
```

`ls .venv/bin/dbt` がファイルパスを返せば、準備完了です。

**接続を確認する:**

OpenCode を起動し（`jump analytics && opencode`）、`hi` と入力してから、インターフェースの右側を見ます。dbt MCP の名前が表示され、緑色のドットで "connected" と示されているはずです。

---

## 音声プロンプト用の MacWhisper（任意）

詳細なプロンプトを入力するのは遅いです。[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) は macOS 向けの音声テキスト変換アプリで、コンテキストの説明や問題を口頭で解いていくのが大幅に速くなります。特に、入力するより考える方が時間がかかるような長いプロンプトで効果的です。

macOS 内蔵の Dictation アプリより明らかに精度が高く、クラウドベースの文字起こしとは異なり完全にデバイス上で動作するため、何もマシン外には出ません。

## スキルのセットアップ {#skills-setup}

スキルは、エージェントが自動的に呼び出せる再利用可能なワークフローや規約を提供します。Data Team で利用可能な全スキルを使うには:

1. 上記の OpenCode セットアップ手順を完了する
2. 上記の MCP セットアップ手順（Snowflake/dbt）を完了する
3. [setup instructions](https://gitlab.com/gitlab-data/data-team-agentic-skills#setup-opencode) に従って `data-team-agentic-skills` リポジトリをクローンしてシンボリックリンクを張る
