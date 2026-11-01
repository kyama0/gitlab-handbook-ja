---
title: "Context Layer のセットアップ"
description: "GitLab AI Context Layer を通じてビジネス上の質問をするために、Claude Desktop、Claude Code、OpenCode をセットアップする方法"
upstream_path: /handbook/enterprise-data/ai/context-layer/setup/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-28T11:12:14-06:00"
translated_at: "2026-11-01T18:28:14+00:00"
translator: codex
stale: false
---

[AI Context Layer](/handbook/enterprise-data/ai/context-layer/)は、Claude Desktop、Claude Code、OpenCode から利用できます。どれも自然言語でビジネス上の質問をし、ガバナンスの適用された GitLab データに基づく回答を得られます。ほとんどのチームメンバーにとって、最も簡単なのは Claude Desktop です。Claude Code と OpenCode は、すでにターミナルで作業しているチームメンバーに適しています。Claude Code はどのディレクトリからでも動作するため、analytics リポジトリのクローンは不要です。Claude Code を使用するには、[Claude Code のセットアップ](#claude-code-setup)に従ってください。

## 前提条件 {#prerequisites}

1. **Snowflake アカウント。** [Lumos](/handbook/security/corporate/systems/lumos/ar/)から Snowflake のアクセス権を申請してください。
1. **適切なロール。** **Analyst** を申請してください。重要な未公開情報へのアクセスが必要な場合は **Analyst Safe** を申請します。申請が遅れるため、カスタムユーザーは選ばないでください。
1. **Analyst Safe を使用する場合は、指定インサイダーの資格。** Analyst Safe を使用すると、[指定インサイダー](/handbook/legal/publiccompanyresources/#designated-insiders)になります。その意味については、[SAFE データ](/handbook/enterprise-data/platform/safe-data/)を参照してください。

## Claude Desktop のセットアップ {#claude-desktop-setup}

Claude Desktop のメニュー名は変わることがあります。以下の手順がアプリと一致しない場合は、**Snowflake** コネクター、**ETA - Enterprise Data** プラグイン、`snowflake-query-guidance` スキルという 3 つの名前を探してください。

### 手順 1: Claude Desktop をインストールまたは更新する {#step-1-install-or-update-claude-desktop}

1. [Claude Desktop アプリ](https://claude.ai/download)をダウンロードまたは更新します。
1. GitLab のメールアドレスを使って SSO でサインインします。
1. 最新バージョンであることを確認します。

> **注:** Claude Desktop を最新の状態に保ってください。バージョンが古いと、Snowflake の SSO ログインが完了しない場合があります。

Web の [claude.ai](https://claude.ai/new)からもスキルを使用できますが、デスクトップアプリが最も快適です。

### 手順 2: Snowflake コネクターを接続する {#step-2-connect-the-snowflake-connector}

1. Claude Desktop を開き、**Cowork**、**Customize** の順に選択します。

   ![Cowork と Customize が強調表示された Claude Desktop の左側ナビゲーション](/images/enterprise-data/ai/context-layer/claude-cowork-customize.png)

1. **Connectors** を選択し、Snowflake を検索します。種類が **Web** の **Snowflake** コネクターを選び、**Connect** を選択します。

   ![Snowflake コネクターに絞り込んだコネクター一覧](/images/enterprise-data/ai/context-layer/claude-connectors-search.png)

1. 求められたら **Okta SSO** でログインします。
1. コネクターに **Connected** と表示されていることを確認します。これで Claude がクエリを実行できます。

   ![Connected と表示された Snowflake コネクター](/images/enterprise-data/ai/context-layer/claude-snowflake-connected.png)

> **注:** Okta ログインは、Okta と Snowflake のセッションの有効期間に連動します。セッションが期限切れになると Claude が再ログインを求めるため、Okta ウィンドウは定期的に表示されます。

### 手順 3: ETA, Enterprise Data プラグインを有効にする {#step-3-enable-the-eta-enterprise-data-plugin}

1. **Cowork** で **Customize** を開き、**Plugins** を選択します。
1. 一覧から ETA, Enterprise Data プラグインを探し（アプリ内のラベルは **ETA - Enterprise Data**）、開きます。

   ![ETA, Enterprise Data プラグインが強調表示されたプラグイン一覧](/images/enterprise-data/ai/context-layer/claude-plugins-eta.png)

1. トグルでプラグインを有効にします。
1. **Skills** に `/snowflake-query-guidance` が表示されていることを確認します。

   ![有効になった ETA, Enterprise Data プラグインと Skills に表示された snowflake-query-guidance](/images/enterprise-data/ai/context-layer/claude-plugin-toggle.png)

### 手順 4: 質問する {#step-4-ask-a-question}

新しいタスクを開始し、次のいずれかの方法で質問してください:

1. `/snowflake-query-guidance` に続けて質問を入力します。
1. 自然言語でデータに関する質問をします。質問が GitLab データに関するものなら、Claude がスキルを自動的に呼び出します。

![数値を伏せた、ビジネス上の質問への回答例](/images/enterprise-data/ai/context-layer/claude-example-answer.png)

## Claude Code のセットアップ {#claude-code-setup}

### Claude Code の前提条件 {#claude-code-prerequisites}

1. Analyst または Analyst Safe ロールによる Snowflake へのアクセス（[前提条件](#prerequisites)を参照）。
1. Claude Code をインストールし、サインインしていること。[エージェントのセットアップの Claude Code セクション](/handbook/enterprise-data/ai/agent-setup/#claude-code-setup)に従ってください。
1. 手順 2 でプラグインを有効にするために、Claude Desktop をインストールしていること。

### 手順 1: Snowflake CLI で Snowflake に接続する {#step-1-connect-to-snowflake-with-the-snowflake-cli}

Claude Code は [Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)（`snow`）を通じて Snowflake にクエリを実行します。CLI をまだセットアップしていない場合は、[Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)のページと[エージェントのセットアップの Snowflake CLI セクション](/handbook/enterprise-data/ai/agent-setup/#snowflake-cli)に従ってください。CLI は `~/.snowflake/config.toml` から接続情報を読み込みます。

続行する前に、接続が機能することを確認してください:

```bash
snow connection test
```

### 手順 2: ETA, Enterprise Data プラグインを有効にする {#step-2-enable-the-eta-enterprise-data-plugin}

1. [Claude Desktop の手順 3](#step-3-enable-the-eta-enterprise-data-plugin)に従い、Claude Desktop で ETA, Enterprise Data プラグインを有効にします。
1. Claude Code を起動し、`/skills` を実行します。
1. `ent-data:snowflake-query-guidance` が表示されていることを確認します。

> **注:** Claude Code では、プラグインのスキルに `ent-data:` という接頭辞が付きます。スキルが表示されない場合は、[トラブルシューティング](#troubleshooting)を参照してください。

### 手順 3: 質問する {#step-3-ask-a-question}

任意のディレクトリで Claude Code を起動し、次のいずれかの方法で質問してください:

1. `/ent-data:snowflake-query-guidance` に続けて質問を入力します。
1. 自然言語でデータに関する質問をします。質問が GitLab データに関するものなら、Claude Code がスキルを自動的に呼び出します。

## OpenCode のセットアップ {#opencode-setup}

### OpenCode の前提条件 {#opencode-prerequisites}

1. Analyst または Analyst Safe ロールによる Snowflake へのアクセス（[前提条件](#prerequisites)を参照）。
1. [analytics リポジトリ](https://gitlab.com/gitlab-data/analytics)のローカルクローン。

### 手順 1: OpenCode をインストールする {#step-1-install-opencode}

[エージェントのセットアップの OpenCode セクション](/handbook/enterprise-data/ai/agent-setup/#opencode-setup)に従って、OpenCode をインストールし、設定してください。詳細は[社内の OpenCode セットアップガイド](https://internal.gitlab.com/handbook/ai-security-at-gitlab/guides/setup-guides/opencode-setup/)にあります。

### 手順 2: Snowflake CLI で Snowflake に接続する {#step-2-connect-to-snowflake-with-the-snowflake-cli}

OpenCode は [Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)（`snow`）を通じて Snowflake にクエリを実行します。analytics リポジトリの `admin/onboarding_script.zsh` は CLI をインストールし、`~/.snowflake/config.toml` を書き込みます。オンボーディング時にこれを実行した場合は、CLI のセットアップは済んでいます。それ以外の場合は、[Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)のページと[エージェントのセットアップの Snowflake CLI セクション](/handbook/enterprise-data/ai/agent-setup/#snowflake-cli)に従ってください。

続行する前に、接続が機能することを確認してください:

```bash
snow connection test
```

### 手順 3: `snowflake-query-guidance` スキルを追加する {#step-3-add-the-snowflake-query-guidance-skill}

スキルのソースは analytics リポジトリの [`marketplace-sync/snowflake-query-guidance/`](https://gitlab.com/gitlab-data/analytics/-/tree/master/marketplace-sync/snowflake-query-guidance)にあります。OpenCode はそこから自動で見つけられないため、スキルディレクトリにリンクを作成してください。

1. [`data-team-agentic-skills` の README](https://gitlab.com/gitlab-data/data-team-agentic-skills)に従って、標準のスキルディレクトリ `~/agents/skills` をセットアップし、OpenCode の参照先に設定します。すでにチームの共有スキルを使用している場合は、この作業は完了しています。
1. そのディレクトリにスキルへのリンクを作成します。パスを自分のクローンの場所に置き換えてください。

   ```bash
   ln -sfn ~/repos/analytics/marketplace-sync/snowflake-query-guidance ~/agents/skills/snowflake-query-guidance
   ```

1. クローンの `master` を最新に保ってください。リンクはローカルコピーを指しているため、`git pull` でスキルを更新します。

### 手順 4: 質問する {#step-4-ask-a-question-1}

OpenCode を起動し、セッション内でデータに関する質問をしてください。質問が GitLab データに関するものなら、OpenCode がスキルを呼び出します。また、`/snowflake-query-guidance` に続けて質問を入力することもできます。

## トラブルシューティング {#troubleshooting}

| 症状 | 原因 | 対処方法 |
|---|---|---|
| 接続処理は開始するのに、Snowflake 用の Okta SSO ウィンドウで処理が完了しない、または失敗する | Claude Desktop が古い | Claude Desktop を最新バージョンに更新し、再度接続します |
| Claude が SQL を返し、Snowflake ツールが接続されていないためクエリを実行できないと伝える | Snowflake コネクターが接続されていない | チャット内のボタンで Snowflake に接続するか、**Customize**、**Connectors** から接続し、Okta ログインを完了します |
| Claude または OpenCode が Okta での再ログインを求める | Okta と Snowflake のセッションが期限切れになった | Okta ログインを完了します。セッションの有効期間に応じて発生する、想定どおりの動作です |
| Claude Desktop に `/snowflake-query-guidance` が表示されない | ETA, Enterprise Data プラグインが無効になっている | **Customize**、**Plugins** でプラグインを有効にします |
| Claude Code の `/skills` に `ent-data:snowflake-query-guidance` が表示されない | Claude Desktop でプラグインが無効になっているか、Claude Code がまだ認識していない | Claude Desktop でプラグインが有効であることを確認し、Claude Code を再起動します |
| エージェントが、使用中のロールにはオブジェクトへのアクセス権がないと伝える | Snowflake ロールにそのビューへのアクセス権がない | [Lumos](/handbook/security/corporate/systems/lumos/ar/)から必要なアクセス権を申請します |
| Claude Code または OpenCode が Snowflake の権限不足エラーを返す | `~/.snowflake/config.toml` の接続で指定したロールにオブジェクトへのアクセス権がないか、Analyst または Analyst Safe ロールになっていない | 接続のロールを確認し、不足するアクセス権を [Lumos](/handbook/security/corporate/systems/lumos/ar/)から申請します |
| `snow connection test` が失敗する | Snowflake CLI がインストールされていないか、`~/.snowflake/config.toml` が存在しない、または誤っている | [Snowflake CLI](/handbook/enterprise-data/platform/snowflake/snowflake-cli/)のページに従ってから、再度テストします |
| OpenCode が `snowflake-query-guidance` を使用しない | スキルディレクトリにスキルへのリンクがない | [手順 3](#step-3-add-the-snowflake-query-guidance-skill)を繰り返し、`ls -la ~/agents/skills/` でリンクが表示されることを確認します |

## 利用上のガイダンス {#usage-guidance}

### 適切に質問する {#ask-good-questions}

1. **具体的にします。** 求める指標、期間、内訳を示してください。たとえば「今会計四半期の `<metric>` を `<dimension>` 別に」です。
1. **データで答えられることを質問します。** Context Layer は、ガバナンスの適用されたデータに関する質問に答えます。データに記録されていない原因を推測しません。
1. **対象ドメインの範囲内にとどめます。** 範囲外の質問には、エージェントがその旨を伝え、対象ドメインを列挙します。自分で確認するには、[利用可能なドメイン](/handbook/enterprise-data/ai/context-layer/#available-domains)を参照してください。
1. **確認の質問を想定します。** 質問に複数の妥当な解釈がある場合、エージェントは推測せず、どの意味かを尋ねます。
1. **期間を確認します。** どの数値にも対象期間が付いています。意図した期間と一致するかを確認してください。

> **注:** 四半期は、デフォルトで会計四半期です。GitLab の会計年度は 2 月 1 日から 1 月 31 日までで、終了する暦年にちなんで命名されます。そのため、Q1 は 2 月から 4 月、Q2 は 5 月から 7 月です。

### 最初に試す質問 {#starter-questions}

これらの質問形式はどのドメインでも使えます。プレースホルダーを、そのドメインが対象とする指標とディメンションに置き換えてください。

| 質問形式 | 例 |
|---|---|
| 単一の指標 | 先月の `<metric>` はいくらでしたか？ |
| ディメンション別の指標 | 今会計四半期の `<metric>` を `<dimension>` 別に分けてください |
| 期間の比較 | 今四半期の `<metric>` は前年同期と比べてどうですか？ |
| 目標や進捗 | `<metric>` の目標に向けて順調ですか？また、どの `<dimension>` が遅れていますか？ |
| 定義 | `<metric>` はどのように定義され、何が除外されていますか？ |

ドメインが答える実際の質問を確認するには、評価ハーネスの [`test_cases/`](https://gitlab.com/gitlab-data/analytics/-/tree/master/agents/evals/snowflake_query_guidance/test_cases) フォルダーで、そのドメインのファイルを開いてください。各ケースは、そのドメインのテストに使用する質問です。

## 次のステップ {#next-steps}

1. Context Layer の仕組みを理解するには、[AI Context Layer の概要](/handbook/enterprise-data/ai/context-layer/)をお読みください。
1. ビジネス領域を追加するには、[ドメイン追加ガイド](/handbook/enterprise-data/ai/context-layer/add-a-domain/)に従ってください。
