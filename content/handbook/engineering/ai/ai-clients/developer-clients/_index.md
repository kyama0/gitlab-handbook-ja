---
title: Developer Clients グループ
description: "Developer Clients グループは、VS Code および JetBrains IDE 向けのエディター拡張機能と Duo CLI を所有・保守し、GitLab のコア機能と AI 機能を開発者のワークフローに直接届けます。"
aliases:
  - /handbook/engineering/ai/editor-extensions-multi-platform/
upstream_path: /handbook/engineering/ai/ai-clients/developer-clients/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
lastmod: "2026-08-25T18:08:04+02:00"
translated_at: "2026-09-04T11:16:44+09:00"
translator: codex
stale: false
---

## 🚀 ビジョン

私たちは GitLab のコア機能と AI 機能を開発者のワークフローに直接届け、開発者が日々使うツールから GitLab にアクセスできるようにすることで生産性を引き出します。

このグループは [AI Clients ステージ](/handbook/engineering/ai/ai-clients/)に属しています。

---

## 👨‍💻 チームメンバー

**Engineering Manager：** Amr Elhusseiny

**Product Manager：** James Casey

**UX：** Yi-Ann Chen

{{< team-by-manager-slug "aelhusseiny" >}}

---

## 🤝 安定したカウンターパート

以下が私たちの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)です。

{{< group-by-slugs james.casey sam_reiss ychen16 jglassman1 >}}

---

## 💬 連絡先

### Slack

- **公開ステージチャンネル：** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C) — 質問と問い合わせ
- **内部ステージチャンネル：** [#s_ai-clients](https://gitlab.slack.com/archives/s_ai-clients) — チームの同期のみ
- **機能チームの Slack チャンネル：**
  - Duo CLI： [#f_duo_cli](https://gitlab.slack.com/archives/f_duo_cli)
  - VS Code 拡張機能： [#f_vscode_extension](https://gitlab.slack.com/archives/C013QJ9NEPL)
  - JetBrains プラグイン： [#f_jetbrains_plugin](https://gitlab.slack.com/archives/C02UY9XKABH)
- **私たちが管理するその他の Slack チャンネル：**
  - Visual Studio 拡張機能： [#f_visual_studio_extension](https://gitlab.enterprise.slack.com/archives/C0581SE363C)
  - Eclipse プラグイン： [#f_eclipse_plugin](https://gitlab.enterprise.slack.com/archives/C07MKHCFGHG)
  - Neovim プラグイン： [#f_neovim_plugin](https://gitlab.enterprise.slack.com/archives/C05BF7L6PEX)
  - Web IDE： [#f_vscode_web_ide](https://gitlab.enterprise.slack.com/archives/C03CEHDPQGH)

### 共有カレンダー {#shared-calendar}

私たちは [AI Clients の共有カレンダー](/handbook/engineering/ai/ai-clients/#shared-calendar)を使用します

---

## 🏠 機能チーム

| チーム | スコープ | チャンネル |
|---|---|---|
| [Duo CLI](/handbook/engineering/ai/ai-clients/developer-clients/duo-cli/) | AI を活用したコマンドラインインターフェース | [#f_duo_cli](https://gitlab.slack.com/archives/f_duo_cli) |
| [VS Code](/handbook/engineering/ai/ai-clients/developer-clients/vscode/) | GitLab Workflow VS Code 拡張機能と Web IDE | [#f_vscode_extension](https://gitlab.slack.com/archives/C013QJ9NEPL) |
| [JetBrains](/handbook/engineering/ai/ai-clients/developer-clients/jetbrains/) | JetBrains IDE 向け GitLab プラグイン | [#f_jetbrains_plugin](https://gitlab.slack.com/archives/C02UY9XKABH) |

---

## 💻 スコープ

### このグループが所有する製品

1. **GitLab Extension for JetBrains**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/jetbrains_ide/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AJetBrains)
   4. Slack チャンネル： [#f_jetbrains_plugin](https://gitlab.enterprise.slack.com/archives/C02UY9XKABH)
2. **GitLab Workflow Extension for VS Code**
   1. [リポジトリ](https://gitlab.com/gitlab-org/gitlab-vscode-extension)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/visual_studio_code/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Aeditor%20extensions)
   4. Slack チャンネル： [#f_vscode_extension](https://gitlab.slack.com/archives/C013QJ9NEPL)
3. **Duo CLI**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/tree/main/packages/cli)
   2. [バックログ](https://gitlab.com/groups/gitlab-org/-/boards/9839597?epic_id=3743089)
   3. Slack チャンネル： [#f_duo_cli](https://gitlab.slack.com/archives/f_duo_cli)

---

## 📚 私たちの働き方

### Issue のステータス

私たちは [プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従って、Issue の `Status` フィールドでステータスを示します。

{{% details summary="詳細を表示" %}}

シンプルさを保つため、以下の主要なステータスに焦点を当て、必要に応じて他のステータスも使用します。

- **New →** まだ優先順位付けや絞り込みがされていません。

- **Planning breakdown →** 近い時期（約 1 〜 2 か月以内）にチームの注目が必要。スコープ、リスク、依存関係、受け入れ条件を集めます。

- **Ready for development →** 即時優先。スコープが明確で、次に着手すべきもの。理想的には約 2 週間以内に完了します。

- **In dev →** DRI が割り当てられ、マイルストーンも設定済みで、作業中。

- **In review →** 実装完了。MR がオープンされ、レビューおよび検証中。

- **Blocked →** 依存関係や外部要因によって進められない状態。ブロッカーと次の確認日をコメントしてください。

- **Closed →** 完了（または重複・「修正しない」としてクローズ）し、結果を記録します。

**注：** Issue とタスクの両方に存在するステータスである `Planning breakdown` と `Ready for development` を選んでいるため、単一のステータスフィルターで統一されたボードと埋め込みテーブルを簡単に構築できます。

{{% /details %}}

### マイルストーンプランニング {#milestone-planning}

私たちは[マイルストーン](https://mnohr.gitlab.io/milestone-dates/)ごとに計画します。リリースはそれよりもはるかに頻繁かつ柔軟に行いますが、マイルストーンのケイデンスにより、新機能のリリース投稿や、連携が必要な場合の他チームとの足並みを揃えられます。

> このプロセスは意図的に最小限にしています。小さく始め、[フィードバックループ](#feedback-loop)に基づいてイテレーションします。

概要は、2 つの成果物と 2 つの定例活動です:

| 成果物 | 使用時期 | 答える問い |
|---|---|---|
| [チームバックログ](#team-backlogs) | 計画前 | 次に何に取り組むべきか? |
| [計画ボード](#planning-boards) | マイルストーン中 | 状況はどうか? 何が進行中か? |

| 定例活動 | ケイデンス | 実施内容 |
|---|---|---|
| 計画コール（ファンクショナルチームごとに 1 回） | 月次 | チームのキャパシティに基づいてマイルストーンの対象 Issue を確定し、[ウェイト](#issues-weight)を割り当てる。コール時間を節約するため、担当者と `Deliverable` / `Stretch` [ラベル](#issues-labels)は代わりに 1:1 で設定する |
| [非同期アップデート](#weekly-async-updates) | 週次（火曜日の EOD まで） | 全員が担当 Issue に進捗を投稿し、自動化がそれらをグループ全体の 1 つの Issue に集約する |

{{% details summary="時系列の詳細フロー" %}}

1. **マイルストーン全体を通して、次のマイルストーンに備えます。** 次のマイルストーンで優先したい Issue に [`workflow::scheduling`](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_asc&state=opened&label_name%5B%5D=workflow%3A%3Ascheduling&label_name%5B%5D=group%3A%3Adeveloper+clients) ラベルを付けます。工数が不明でまだ Issue がない場合は、タイムボックス化した[ウェイト](#issues-weight)を持つプレースホルダー（説明は空でも構いません）を作成します。ステータスとラベルを最新に保ちます。[計画ボード](#planning-boards)はマイルストーンの進捗を示すライブビューとしても機能します。
1. **計画コールの前。** EM と PM は、フラグが付いた Issue を中心に、非同期でバックログの事前確認を行います。その後、数日前に Slack メッセージで、優先事項のリストと更新済みの[バックログページ](#team-backlogs)というアジェンダを送信します。コールの前に確認してください。全員が自身の稼働状況（例えば、計画している休暇日数）を大まかに把握しておきます。計画は変更されても構いません。私たちは適応します。
1. **月次計画コール（ファンクショナルチームごとに 1 回）。** チームのキャパシティに基づいてマイルストーンにコミットする Issue に合意し、[ウェイト](#issues-weight)を割り当て、計画ボードのキャパシティ機能を使用してキャパシティを計画します。コール時間を節約するため、担当者と `Deliverable` / `Stretch` の[ラベル](#issues-labels)は、その後 1:1 で設定します。
1. **マイルストーン中。** 計画ボードには、マイルストーンの状態と進行中の作業が表示されます。[週次の非同期アップデート](#weekly-async-updates)を投稿します。

{{% /details %}}

#### 計画ボード {#planning-boards}

| チーム | ボード | 表示される Issue |
|---|---|---|
| Duo CLI | [dc-duo-cli](https://milestone-planning-board-0c5b79.gitlab.io/?board=dc-duo-cli) | `category:duo cli` ラベル、または [gitlab-lsp](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp) リポジトリでタイトルに「cli」を含むもの |
| VS Code | [dc-vs-code](https://milestone-planning-board-0c5b79.gitlab.io/?board=dc-vs-code) | `category:vs code` ラベル、または [gitlab-vscode-extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension) リポジトリのもの |
| JetBrains | [dc-jetbrains](https://milestone-planning-board-0c5b79.gitlab.io/?board=dc-jetbrains) | `category:jetbrains` ラベル、または [gitlab-jetbrains-plugin](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin) リポジトリのもの |

#### チームバックログ {#team-backlogs}

各ファンクショナルチームにはライブのバックログ Wiki ページがあります。テーブルはページ読み込み時に自動更新され、**このマイルストーンで追加**、**次に優先**、**コミュニティからの上位リクエスト**、**バックログ全体**を網羅します:

- [Duo CLI バックログ](https://gitlab.com/gitlab-org/editor-extensions/meta/-/wikis/Developer-Clients:-Duo-CLI-Backlog)
- [VS Code バックログ](https://gitlab.com/gitlab-org/editor-extensions/meta/-/wikis/Developer-Clients:-VS-Code-Backlog)
- [JetBrains バックログ](https://gitlab.com/gitlab-org/editor-extensions/meta/-/wikis/Developer-Clients:-JetBrains-Backlog)

> 💡 Issue がチームのバックログページに表示されるのは、チームのカテゴリーラベル（`category:duo cli`、`category:vs code`、`category:jetbrains`）が付いている場合だけです。各ページには、チームのリポジトリ内でラベルの付いていない Issue を表示する「missing category label」セクションがあり、ラベル付けの自動化は [meta#398](https://gitlab.com/gitlab-org/editor-extensions/meta/-/work_items/398) で追跡されています。

#### 参加方法（チーム外のメンバー向け） {#how-to-participate-for-non-team-members}

チームに Issue を知らせたい場合は、Issue を作成してください。Issue がまだ存在しない場合は、[#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C) で連絡してください。

#### フィードバックループ {#feedback-loop}

このプロセスは v1 です。約 2 マイルストーンごとにチームチャンネルで簡単なフィードバック投票を行い、各月次計画コールには常設の 5 分間のレトロスペクティブ枠を設けます。

### チーム同期ミーティング

私たちは、[AI Clients ステージ](/handbook/engineering/ai/ai-clients/)全体で開催される週次同期ミーティングに参加します。

- コールは週ごとに APAC/AMER と EMEA/AMER に都合のよい時間帯を交互に設定するため、全員が少なくとも隔週で無理なく参加でき、毎週非同期でも貢献できます。
- [週次同期ミーティングのアジェンダ](https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g)は公開されており、全員が足並みを揃えるための関連トピックを持ち込めます。
- 録画は GitLab Unfiltered の [Editor Extensions Category](https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc) プレイリストにアップロードされます。

### 週次の非同期アップデート {#weekly-async-updates}

積極的に取り組んでいる各 Issue に、[Dev Check-in (editor-extensions)](https://gitlab.com/groups/gitlab-org/editor-extensions/-/comment_templates) コメントテンプレートを使用してアップデートを投稿します。

**注意: 非同期アップデートは毎週火曜日の EOD までに投稿してください**（休暇の場合はそれより前に投稿します）。

アップデートは、ファンクショナルチームごとのセクションを持つ 1 つの週次 Developer Clients Issue に自動集約されます（[Issue の例](https://gitlab.com/gitlab-org/editor-extensions/meta/-/work_items/400)）。

### Issue のラベル {#issues-labels}

[AI Clients のラベル付けガイダンス](/handbook/engineering/ai/ai-clients/#-how-we-label-issues-and-merge-requests)を確認してください

私たちが追加で使用するラベル：

| ラベル | 説明 |
|---|---|
| [`Deliverable`](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=all&label_name%5B%5D=Deliverable&first_page_size=20) | マイルストーンに対してコミット済みの項目（必達作業）。 |
| [`Stretch`](https://gitlab.com/groups/gitlab-org/-/work_items?sort=created_date&state=all&label_name%5B%5D=Stretch&first_page_size=20) | 優先度リストの次の項目。マイルストーンの意欲的な目標として追加します |

### Issue のウェイト {#issues-weight}

ウェイトは、[フィボナッチ数列](https://www.mountaingoatsoftware.com/blog/why-the-fibonacci-sequence-works-well-for-estimating)（`1, 2, 3, 5`）を使用し、複雑さの大まかな見積もりとして[マイルストーンプランニング](#milestone-planning)中に割り当てます:

| ウェイト | 大まかな工数 |
|---|---|
| `1` | 約半日（タイプミスや小さな設定調整など、コーヒーを飲む間に済む修正を含む） |
| `2` | 1 〜 2 日 |
| `3` | 約 3 日 |
| `5` | 約 1 週間 |
| `8` | 1 週間半 〜 2 週間。分解が必要です |

- この尺度は比例します。ウェイトの数値がおおむねそのまま営業日数に相当します（`5` は 1 週間）。そのため、ウェイトを合計して比較できます。たとえば、合計が `8` になる複数の Issue は、おおむね 1 つのウェイト `8` と同程度のコミットメントです。
- これはマイルストーンのキャパシティを把握するための大まかなサイジングとして使用します。実装の詳細に踏み込めば変わる可能性が高いため、正確な見積もりを出そうとしすぎないでください。
- ウェイト `8` の Issue にはそのまま取り組まず、より小さな Issue に分解するか、まずスパイクとしてタイムボックス化します。

### グループ間のオーナーシップと境界

エディター拡張機能のシステムは、さまざまなグループが所有する機能やモジュールをホストしています。

[オーナーシップと境界](/handbook/engineering/ai/ai-clients/ownership/)ページでは、私たちのシステムで機能を作成・保守するすべての関係者に明確さをもたらし、期待値を明確にしています。

---

## 🔗 便利なリンク

- **計画**
  - [計画ボード](#planning-boards)
  - [チームバックログ](#team-backlogs)
- **ダッシュボード & モニタリング**
  - <a href="https://app.snowflake.com/ys68254/gitlab/#/streamlit-apps/PROD.STREAMLIT_TEST.EDITOR_EXTENSION_DAU/!/editor_extension_dau" target="_blank">Snowflake： Developer Clients の DAU と利用状況</a>
  - <a href="https://app.snowflake.com/ys68254/gitlab/#/streamlit-apps/PROD.STREAMLIT_TEST.EDITOR_EXTENSION_DAU/!/language_server_metrics" target="_blank">Snowflake： LSP の速度パフォーマンス</a>
  - <a href="https://10az.online.tableau.com/#/site/gitlab/views/PDCodeSuggestions/IDEMetrics" target="_blank">Tableau： Code Suggestions の IDE メトリクス</a>
  - <a href="https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/48493d6c-cd11-45b9-bdc5-bf5242e0de0b/EditorExtensionsMAU?:iid=2" target="_blank">Tableau：MAU</a>
  - <a href="https://dashboards.gitlab.net/dashboards/f/editor-extensions/?orgId=1" target="_blank">Grafana： ダッシュボード</a>
  - <a href="https://session-error-rates-dashboard-87d159.gitlab.io/" target="_blank">Agent Platform セッションエラーレート</a>
- **その他**
  - <a href="https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g" target="_blank">週次同期ミーティングのアジェンダ</a>
  - GitLab Unfiltered YouTube チャンネルの <a href="https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc" target="_blank">Editor Extensions プレイリスト</a>
