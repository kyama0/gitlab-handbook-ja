---
title: "Snowflake CLI"
description: "ローカル開発用 Snowflake CLI のインストールと設定"
upstream_path: /handbook/enterprise-data/platform/snowflake/snowflake-cli/
upstream_sha: bc76a1a59f8b471f304263e712307581bdc7d128
lastmod: "2026-08-28T06:41:23-06:00"
translated_at: "2026-09-04T22:10:08+09:00"
translator: codex
stale: false
---

## 概要と目的 {#what-and-why}

[Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index)（`snow`）は、ターミナルから Snowflake を直接操作するためのコマンドラインツールです。Data チームがローカルから Snowflake にアクセスするための標準であり、アドホックな SQL の実行、ローカルでの dbt 開発ワークフロー、OpenCode エージェントセッションとの統合を可能にします。

## 前提条件 {#prerequisites}

- [Homebrew](https://brew.sh/)がインストールされた macOS
- Okta SSO でアクセスできる有効な Snowflake アカウント

## 新規セットアップ {#new-setup}

初めてマシンをセットアップする場合は、オンボーディングスクリプトがインストールと設定の両方を行います。ブラウザからスクリプトをダウンロードします（GitLab にログインしている必要があります）。

[オンボーディングスクリプトをダウンロード](https://gitlab.com/gitlab-data/analytics/-/raw/master/admin/onboarding_script.zsh)

次に、ロールを渡して、ターミナルからオンボーディングスクリプト全体を実行します。

```zsh
zsh ~/Downloads/onboarding_script.zsh --role analytics-engineer
```

スクリプトは Snowflake CLI をインストールし、標準セットアップの一部として設定します。すべての手順については、[Data Onboarding Issue テンプレート](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Team:%20Data%20Onboarding.md)を参照してください。

## 既存ユーザー {#existing-users}

マシンがすでにセットアップ済みで、Snowflake CLI のインストールまたは設定のみが必要な場合は、次のいずれかの方法を使用します。

`setup_snowflake_config` は GitLab のメールアドレスの入力を求め、`GITLAB` 接続を含む `~/.snowflake/config.toml` を書き込み、必要なファイル権限を設定して、接続をテストします。Okta SSO のためにブラウザが一時的に開きます。

**注：** マシンに `~/.snowflake/connections.toml` が存在する場合、Snowflake CLI は `config.toml` よりもこのファイルを優先します。スクリプトはこれを検出してファイルの内容を表示し、新しい `config.toml` を書き込む前に削除するよう求めます。

そのファイル内に残したいカスタム接続がある場合は、まずファイル名を変更して権限を手動で修正してから、`setup_snowflake_config` を再実行します。

```zsh
mv ~/.snowflake/connections.toml ~/.snowflake/config.toml
chmod 0600 ~/.snowflake/config.toml
```

`setup_snowflake_config` は、`config.toml` が存在することを検出し、権限が正しいことを確認して、接続をテストします。その後、追加の `[connections.*]` ブロックをファイルへ手動で追加できます。

**`snowsql` に関する注：** `snowsql` は別の設定ファイル（`~/.snowsql/config`）を使用するため、`~/.snowflake/connections.toml` を削除したり名前を変更したりしても影響を受けません。

### 方法 1：ローカルリポジトリ経由 {#method-1-via-local-repo}

analytics リポジトリをすでにクローンしている場合は、更新してスクリプトを直接 source します。

```zsh
jump analytics
git checkout master
git pull

cd admin/
source onboarding_script.zsh
install_snowflake_cli
setup_snowflake_config
```

### 方法 2：ダウンロード経由 {#method-2-via-download}

analytics リポジトリがローカルにない場合は、ブラウザからスクリプトをダウンロードします（GitLab にログインしている必要があります）。

[オンボーディングスクリプトをダウンロード](https://gitlab.com/gitlab-data/analytics/-/raw/master/admin/onboarding_script.zsh)

次に、スクリプトを source して、関連する 2 つの関数を直接実行します。

```zsh
source ~/Downloads/onboarding_script.zsh
install_snowflake_cli
setup_snowflake_config
```

## 検証 {#verify}

```zsh
snow connection test
snow sql -q "SELECT CURRENT_USER(), CURRENT_ROLE()"
```

`snow connection test` によって、Okta SSO 認証用のブラウザが開きます。認証が完了すると、2 番目のコマンドが Snowflake ユーザーとアクティブなロールを返します。

## 一般的な使用方法 {#common-usage}

インラインクエリを実行します。

```zsh
snow sql -q "SELECT CURRENT_DATE()"
```

SQL ファイルを実行します。

```zsh
snow sql -f path/to/query.sql
```

名前付き接続を明示的に使用します。

```zsh
snow sql -c GITLAB -q "SELECT CURRENT_USER()"
```

負荷の高いクエリで、より大きなウェアハウスへ切り替えるには、先頭に `USE WAREHOUSE` ステートメントを追加します。

```zsh
snow sql -q "USE WAREHOUSE DEV_L; SELECT COUNT(*) FROM prod.common.fct_orders"
```

## OpenCode との統合 {#opencode-integration}

OpenCode の `snowflake` ツールは `snow sql` をラップしており、デフォルトでは `~/.snowflake/config.toml` の `GITLAB` 接続を使用します。CLI のセットアップが完了すれば、追加の設定は不要です。エージェントは、セッション中に Snowflake クエリを実行するとき、このツールを自動的に使用します。
