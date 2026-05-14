---
title: "AI エージェントのセットアップ"
description: "開発用のエージェント型 AI ツールをセットアップするためのデータチームのガイド"
upstream_path: /handbook/enterprise-data/ai/agent-setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

[TOC]

## 背景

データチームには AI 支援開発のための標準的なアプローチがありませんでした。このガイドはそのギャップを埋めるものです。これは、すでに何人かのチームメイトでうまく機能しているものをベースにしているので、誰もがゼロから考えるのではなく、しっかりした出発点を持てるようにしています。

このガイドでは、以下のセットアップを取り上げます。

- **OpenCode** — ターミナルベースの AI コーディングエージェント
- **Snowflake/dbt MCP サーバー**（オプションだが強く推奨）
- **MacWhisper** — 音声によるプロンプト入力（オプション）

---

## OpenCode のセットアップ

より包括的なガイドが [社内ハンドブック](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/) にあります。以下の手順は、データチーム向けに簡素化されたものです。

### ステップ 1: OpenCode をインストールする

```bash
curl -fsSL https://opencode.ai/install | bash
```

### ステップ 2: インストールを確認する

OpenCode が PATH で利用できることを確認します。

```bash
which opencode
```

これがパス（例: `/Users/yourusername/.opencode/bin/opencode`）を返したら、ステップ 3 に進んで大丈夫です。

**`which opencode` が何も返さない場合**、`~/.zshrc` に次の行を追加して OpenCode を PATH に加えてください。

```bash
export PATH=~/.opencode/bin:$PATH
```

その後、シェルをリロードします。

```bash
source ~/.zshrc
```

インストールを確認します。

```bash
opencode --version
```

インストール済みのバージョン番号が表示されるはずです。

### ステップ 3: analytics リポジトリから OpenCode を起動する

```bash
cd analytics/
opencode
```

### ステップ 4: GitLab Duo を AI プロバイダーとして設定する

GitLab Duo は OAuth を使用します。作成や管理が必要なトークンはありません。

1. OpenCode 内で `/connect` を実行し、**GitLab Duo** を選択します
2. OpenCode がブラウザを開いて OAuth フローを完了させます
3. `@gitlab.com` アカウントでサインインし、アプリを承認します
4. 自動的に OpenCode にリダイレクトされます

### ステップ 5: Golden Config を適用する

[OpenCode Golden Path](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/golden-configs/opencode/#golden-path-config) から設定を適用します。

> **注:** `opencode.json` ではなく `~/.config/opencode/opencode.jsonc` を使用してください。`.jsonc` 拡張子はコメントを許可するので、設定に注釈を付けるのに便利です。

### ステップ 6: `plan` をデフォルトエージェントに設定する

`~/.config/opencode/config.json` を開いて `default_agent` を追加します。

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  ...
  "default_agent": "plan"
}
```

これにより、デフォルトでより安全で慎重なモードに保たれます。実行する準備ができたら、明示的に Build に切り替えます。

### ステップ 7: エージェント利用ガイドを確認する

OpenCode を使い始める前に、[エージェント利用ガイド](agent-usage-guide.md) を確認して、以下を理解してください。

- エージェントと MCP の仕組み
- 設定のベストプラクティス（グローバル vs プロジェクトレベル）
- Plan モードと Build モードの使い分け
- プロンプトのベストプラクティスとコンテキスト管理
- 利用可能なスキルとエージェント

### 動画リソース

- [OpenCode セットアップチュートリアル](https://www.youtube.com/watch?v=80vTUzgQzoY)（3 分 30 秒）
- [OpenCode デモ](https://www.youtube.com/watch?v=nClVkkI-MFo)（5 分 30 秒）

---

## MCP サーバーのセットアップ

### Snowflake MCP サーバー（オプションだが強く推奨）

OpenCode を Snowflake MCP に接続すると、OpenCode セッション中に LLM エージェントが直接 Snowflake をクエリできるようになります。

セットアップするには、次のコマンドで [setup_mcp_analytics.sh スクリプト](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/setup_mcp_analytics.sh?ref_type=heads) を実行します。

```bash
jump analytics
git checkout master && git pull && ./admin/setup_mcp_analytics.sh
```

このスクリプトは、GitLab のユーザー名と analytics リポジトリのパスを尋ねます。

<details>
<summary>何が作成されるかの詳細</summary>

スクリプトは 2 つのファイルを生成します。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp_config.yml`**

どの Snowflake ツールグループが有効か、どの SQL ステートメントタイプが許可されるかを制御します。デフォルトでは、オブジェクトの検査とクエリ実行が有効で、破壊的操作（`Drop`、`Delete`）は無効です。

**`~/.config/mcp/snowflake-mcp/snowflake_mcp.env`**

```env
SNOWFLAKE_USER=<your GitLab email>
SNOWFLAKE_ACCOUNT=gitlab
SNOWFLAKE_ROLE=<the portion of your email before the @>
```

</details>

### dbt MCP サーバー

上記で `setup_snowflake_mcp.sh` を実行した場合、これはすでに設定されています。このスクリプトは `~/.zshrc` に次の環境変数を追加します。

```bash
# Analytics MCP Environment Variables
export ANALYTICS_DIR="~/repos/analytics/"
export DBT_PROJECT_DIR="$ANALYTICS_DIR/transform/snowflake-dbt"
export DBT_PATH="$DBT_PROJECT_DIR/.venv/bin/dbt"
```

他に必要な前提条件は dbt の virtualenv をセットアップしていることだけです。通常の dbt 開発のためにすでに `make run-dbt` を実行している場合は、準備完了です。

---

## 音声プロンプト用 MacWhisper（オプション）

詳細なプロンプトを入力するのは時間がかかります。[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) は macOS 用の音声テキスト化アプリで、コンテキストを記述し、声に出して問題に取り組むのをより速くします。特に、入力に時間をかけるよりも考える時間に充てたい長いプロンプトに適しています。

これは macOS の組み込みディクテーションアプリよりも目に見えて正確で、クラウドベースの文字起こしとは異なり、完全にデバイス上で動作するので、何もマシンから出ていきません。
