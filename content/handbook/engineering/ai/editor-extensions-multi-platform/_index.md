---
title: "エディター拡張機能: マルチプラットフォームグループ"
description: 私たちは JetBrains、Visual Studio、Neovim、Eclipse の各 IDE 向けコードエディター拡張機能を所有・保守し、Language Server にも貢献することで、GitLab のコア機能と AI 機能を開発者のワークフローに直接届けます。
upstream_path: /handbook/engineering/ai/editor-extensions-multi-platform/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
---

## 🚀 ビジョン

私たちは GitLab のコア機能と AI 機能を開発者のワークフローに直接届け、開発者が日々使うツールから GitLab にアクセスできるようにすることで生産性を引き出します。

**注:** [エディター拡張機能: VS Code](/handbook/engineering/ai/editor-extensions-vscode/) チームと共に、私たちは [DevOps ライフサイクル](/handbook/product/categories/#devops-stages) の [AI-Powered ステージ](/handbook/product/categories/#ai-powered-stage) における [エディター拡張機能グループ](/handbook/product/categories/#editor-extensions-group) に属する製品カテゴリーのあらゆる側面を担当しています。

---

## 👨‍💻 チームメンバー

{{< team-by-manager-slug "aelhusseiny" >}}

---

## 🤝 安定したカウンターパート

以下が私たちの [安定したカウンターパート](/handbook/leadership/#stable-counterparts) です。

{{< group-by-slugs dashaadu mcorren sam_reiss matthewpetersen>}}

---

## 💬 連絡先

### Slack

- チーム:
  - [#g_editor-extensions](https://gitlab.slack.com/archives/C058YCHP17C) -
  - [#g_editor-extensions_social](https://gitlab.slack.com/archives/C062W19B8NR)
  - [#g_editor-extensions-standup](https://gitlab.slack.com/archives/C058YCWPKMG)
- プロジェクト
  - Language Server: [#f_language_server](https://gitlab.slack.com/archives/C05B1PFHRPU)
  - JetBrains 拡張機能: [#f_jetbrains_plugin](https://gitlab.slack.com/archives/C02UY9XKABH)
  - Visual Studio 拡張機能: [#f_visual_studio_extension](https://gitlab.slack.com/archives/C0581SE363C)
  - Eclipse 拡張機能: [##f_eclipse_plugin](https://gitlab.enterprise.slack.com/archives/C07MKHCFGHG)
  - Neovim 拡張機能: [#f_neovim_plugin](https://gitlab.slack.com/archives/C05BF7L6PEX)

### 共有カレンダー {#shared-calendar}

Editor Extensions 共有カレンダー（カレンダー ID: c_673d889354d021f7fa9f20a003b5867185a9bf12989b5eaacbc8b537cc9ef27c@group.calendar.google.com）

---

## 💻 スコープ

### 私たちのチームが所有する製品

1. **GitLab Extension for JetBrains**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/jetbrains_ide/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AJetBrains)
   4. Slack チャンネル: [#f_jetbrains_plugin](https://gitlab.enterprise.slack.com/archives/C02UY9XKABH)
2. **GitLab Extension for Visual Studio**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/visual_studio/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AVisual%20Studio)
   4. Slack チャンネル: [#f_visual_studio_extension](https://gitlab.enterprise.slack.com/archives/C0581SE363C)
3. **GitLab Extension for Eclipse**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-eclipse-plugin)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/eclipse/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AEclipse)
   4. Slack チャンネル: [#f_eclipse_plugin](https://gitlab.enterprise.slack.com/archives/C07MKHCFGHG)
4. **GitLab Extension for Neovim**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim)
   2. [ドキュメント](https://docs.gitlab.com/editor_extensions/neovim/)
   3. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ANeovim)
   4. Slack チャンネル: [#f_neovim_plugin](https://gitlab.slack.com/archives/C05BF7L6PEX)

### エディター拡張機能: VS Code グループと共同で所有

1. **GitLab Language Server**
   1. [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   2. [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
   3. Slack チャンネル: [#f_language_server](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU)

---

## 📚 私たちの働き方

これをイテレーションのアプローチとして取り入れていることについて述べます。

### Issue のステータス

私たちは [プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) に従って、Issue の `Status` フィールドでステータスを示します。

{{% details summary="詳細を表示"%}}
. シンプルさを保つため、以下の主要なステータスに焦点を当て、必要に応じて他のステータスも使用します。

- **New →** まだ優先順位付けや絞り込みがされていません。

- **Planning breakdown →** 近い時期（約 1〜2 か月以内）にチームの注目が必要。スコープ・リスク／依存関係・受け入れ条件を集めます。

- **Ready for development →** 即時優先。スコープが明確で、次に着手すべきもの。理想的には約 2 週間以内に完了します。

- **In dev →** DRI が割り当てられ、マイルストーンも設定済みで、作業中。

- **In review →** 実装完了。MR がオープンされ、レビュー／検証中。

- **Blocked →** 依存関係や外部要因によって進められない状態。ブロッカーと次の確認日をコメントしてください。

- **Closed →** 完了（または重複・wontfix としてクローズ）し、結果を記録します。

**注:** Issue とタスクの両方に存在するステータスである `Planning breakdown` と `Ready for development` を選んでいるため、単一のステータスフィルターで統一されたボードと埋め込みテーブルを簡単に構築できます。

{{% /details %}}

### Issue ボード

- [担当者別](https://gitlab.com/groups/gitlab-org/-/boards/9154815?label_name[]=group%3A%3Aeditor%20extensions)
- [ステータス別](https://gitlab.com/groups/gitlab-org/-/boards/9651444?label_name%5B%5D=group%3A%3Aeditor%20extensions)

### 週次の Issue 絞り込み {#weekly-issues-refinement}

- **目的:** バックログを集中的かつ最新の状態に保つ
  - 優先度を見直し、変化する要件に適応します
  - 実装すべきカスタマーサポート Issue について明確にします
  - 全員が Issue（新規・緊急のバグ、技術改善、技術的負債）を持ち込み、推進する機会を提供します
- **形式:** 以下の「フロー」セクションで説明する 3 段階のプロセス
- **頻度:** 毎週
- **アウトプット:** 最新の [ローリングバックログ](#rolling-backlog-wiki-page) ＋ [マイルストーン計画 Issue](#milestone-planning-issues) の週次更新の可能性

{{% details summary="詳細を表示"%}}

#### ローリングバックログ Wiki ページ {#rolling-backlog-wiki-page}

この [ローリングバックログページ](https://gitlab.com/gitlab-org/editor-extensions/meta/-/wikis/Editor-Extensions:-Multi-Platform-Rolling-Backlog) はこの絞り込みプロセスのアウトプットであり、私たちが所有するすべてのスコープ（次の 1〜2 か月の作業になり得る）について、可視化され優先順位付けされ、チームでレビュー済みのバックログ上位リストとして機能します。

**注:** コミュニティのフィードバックも捉えるため、最も多くのサムアップを受けた Issue も考慮します。

---

#### フロー

1. **EM と PM の非同期週次プリパス**: 次の 2 ステップに向けた準備
   1. 検討する Issue のソースの例
      - [ローリングバックログ](#rolling-backlog-wiki-page)
      - Slack の通知、チームでの議論
      - 最近の [トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports) の Issue。例: [バグの優先順位付け](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/26385)、[トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/26506)、[注意が必要な Feature flags](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/26361)
   2. ステップ #3（EM ＋ PM 同期コール）で議論する Issue に [workflow::scheduling](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_asc&state=opened&first_page_size=100&label_name%5B%5D=workflow%3A%3Ascheduling&label_name%5B%5D=group%3A%3Aeditor+extensions) ラベルを追加します
   3. [ローリングバックログ](#rolling-backlog-wiki-page) を最新に保つため、必要に応じて Issue を更新します。

2. **チーム非同期隔週レビュー（タイムボックス約 1 時間）:**
   - EM はこのレビューを **トリガーする Issue を作成** し、すべてのエンジニアにアサインします（[Issue 例](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/257)）。レビューを終えたら自分自身のアサインを解除してください
   - チームの集中を毎週奪わないよう、**2 週間ごと** に開催します。
   - **目標:**
      - チーム全員が優先度に意見を述べられるようにする。
      - 技術改善や技術的負債の Issue を進める。
      - より重要視すべき Issue にフラグを立てる。
      - もう必要ない、または優先度を下げるべき Issue を特定する。
   - **参加方法:**
     1. [ローリングバックログ](#rolling-backlog-wiki-page) で現在の優先度を確認します
     2. 意見を述べる: 必要に応じて以下を追加・変更します（プッシュしたい新規 Issue にも適用）:
        1. ステータス: `Planning breakdown`: レーダー上にあるべき。今後 2〜3 マイルストーン以内のもの
        2. ステータス: `Ready for development`: 理想的にはこのマイルストーンで完了させるもの
        3. ラベル: [workflow::schedulingt](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_asc&state=opened&first_page_size=100&label_name%5B%5D=workflow%3A%3Ascheduling&label_name%5B%5D=group%3A%3Aeditor+extensions): 即時優先。次に着手すべき（あるいは少なくとも今週議論すべき）
        4. ~"workflow::scheduling"
     3. 上記のいずれかを変更する場合は、理由を添えて EM ＋ PM をメンションしてコメントしてください
   - **注意点:**
     1. この時点では Issue の深掘り調査に時間をかけず、優先度の高レベルな概観で十分です
     2. 該当 Issue 自体、もしくはコメントがそちらでより適切ならローリングバックログ Issue にコメントしてください
     3. 発見可能性を高めるため、特定の GitLab リソースへの [参照](https://docs.gitlab.com/user/markdown/#gitlab-specific-references) をリンクしてください。
3. **EM ＋ PM 週次同期コール:** [workflow::scheduling](https://gitlab.com/groups/gitlab-org/-/issues?sort=updated_asc&state=opened&first_page_size=100&label_name%5B%5D=workflow%3A%3Ascheduling&label_name%5B%5D=group%3A%3Aeditor+extensions) ラベルに焦点を当て、チームのコメントを読み、ランキングを確認し、トレードオフを判断し、次の 1〜2 週間のターゲットデリバラブルを選定します。
      - ミーティングは [チーム共有カレンダー](#shared-calendar) にスケジュールし録画します。Zoom のトランスクリプトも使用するため、Issue の優先度や順序を変更した理由・議論についてチームに透明性を確保し、計画 Issue に追加できます。
      - 月に 1 回はこのコールでマイルストーン計画 Issue を作成します（次回の絞り込みで変更される可能性があります）
      - EM は合意・更新されたデリバラブルのアサインを担当します
      - **アウトプット:** マイルストーン計画 Issue を週次で更新 ＋ EM が更新された優先度の Issue をアサイン
        - 月に 1 回、マイルストーン開始前に、新しい [マイルストーン計画 Issue](#milestone-planning-issues) の作成準備として、より多くのチケットにわたる議論を行います

---

#### 参加方法（チームメンバー以外向け）

チームに Issue を注目してほしい場合は、Issue を作成してください。Issue がまだ存在しない場合は、[#g_editor-extensions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C) でご連絡ください。

{{% /details %}}

### 月次計画

- **目的:** 現在のマイルストーンで何を提供するかを定義しスコープを決める
  - 製品の優先度を形作るために月次で計画しますが、変化の早い AI 要件、品質への注力、緊急のユーザーニーズに適応できるよう毎週見直します
- **形式:** 以下の「フロー」セクションで説明する 2 段階のプロセス
- **頻度:** 毎月 ＋ 週次更新の可能性
- **アウトプット:**
  - 最新の [マイルストーン計画 Issue](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue)
  - 更新された Issue フィールド: `status`、`milestone`、`deliverable` を含むラベル

{{% details summary="詳細を表示"%}}

#### マイルストーン計画 Issue {#milestone-planning-issues}

私たちは [マイルストーン計画 Issue](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue) を使用して、現在／今後のマイルストーンの目標を定義します。
PM と EM が目標のすり合わせを担当します。
計画 Issue は毎月 [自動的に作成](https://gitlab.com/gitlab-org/editor-extensions/meta/-/tree/main#issue-creation-process) されます。

---

#### フロー

1. **マイルストーン計画 Issue の初期記入**
   - PM が EM と整合を取りながらマイルストーンの目標をドライブします
   - 直前の [Issue 絞り込み](#weekly-issues-refinement) のすべてのアウトプットを考慮します
   - [マイルストーン開始前](https://mnohr.gitlab.io/milestone-dates/) に行います
2. 週次の [Issue 絞り込み](#weekly-issues-refinement) 後の **週次更新**
   - EM ＋ PM は必要に応じて [マイルストーン計画 Issue](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue) を更新し、最新の変更を反映します。例えば以下のような内容です:
     - 発生した緊急のバグ
     - 別の AI エンジニアリングチームの作業を IDE に取り込む必要がある
     - フラグが立った技術的負債
   - EM はチームと連携して [Deliverable](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Deliverable) ラベルと [Stretch](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Stretch) ラベルを付与し、Issue のステータス・[ウェイト](#issues-weight)・マイルストーンが最新の優先度を反映していることを確認します
     - 週次の 1:1 や非同期で行うこともあります

{{% /details %}}

### マイルストーン計画 Issue とローリングバックログ Wiki ページの違い

- [ローリングバックログ](#rolling-backlog-wiki-page): 優先順位付けされた全 Issue のリスト。バックログ上位の可視性を提供し、数か月分の作業をカバーすることもあります。
- [マイルストーン計画 Issue](#milestone-planning-issues): ローリングバックログのサブセット。現在のマイルストーンで実装するためにバックログから優先順位付けした Issue です。

### チーム同期ミーティング

私たちは週に 1 回同期ミーティングを開催します。これは本チームと [エディター拡張機能: VS Code](/handbook/engineering/ai/editor-extensions-vscode/) チームのコラボレーションミーティングです。

- 録画は GitLab Unfiltered の [Editor Extensions Category](https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc) プレイリストにアップロードされます。
- コールの時間帯は週ごとに APAC／AMER と EMEA／AMER で交互に切り替わるため、両チームの異なるタイムゾーンの全員が少なくとも 1 回おきには都合よく同期に参加でき、毎週非同期でも貢献できます
- [週次同期ミーティングのアジェンダ](https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g)。アジェンダはオープンで、チーム全員が関連トピックを持ち込んで整合を取れます

### 週次の非同期アップデート

チームメンバーは進行中の Issue について [Dev Check-in (editor-extensions)](https://gitlab.com/groups/gitlab-org/editor-extensions/-/comment_templates) コメントテンプレートを使用して週次で非同期アップデートを投稿します。

### Issue のラベル

複数プロジェクトにわたって作業を追跡するために使用しているラベルの一部です。

| ラベル | 説明 |
|---|---|
| [`Editor Extensions::JetBrains`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AJetBrains) | JetBrains IDE プラグインの機能とメンテナンス。 |
| [`Editor Extensions::Visual Studio`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AVisual%20Studio) | Visual Studio IDE プラグインの機能とメンテナンス。 |
| [`Editor Extensions::Neovim`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ANeovim) | Neovim IDE プラグインの機能とメンテナンス。 |
| [`Editor Extensions::Eclipse`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AEclipse) | Eclipse IDE プラグインの機能とメンテナンス。 |
| [`Editor Extensions::Language Server`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server) | 共有 LSP の機能、メンテナンス、IDE 間機能均等化の取り組み。 |
| [`Editor Extensions::All`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3AAll) | 複数のエディター拡張機能に影響する横断的な項目。 |
| [`Deliverable`](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Deliverable) | マイルストーンに対してコミット済みの項目／必達作業。 |

### Issue のウェイト {#issues-weight}

Issue の複雑さの大まかな見積もりを示すため、3 つのウェイトを使用します。ウェイトは 2 つの要素から構成されます:

- `1` - 1〜2 日の作業
- `2` - 1 週間の作業
- `3` - 1.5 週間の作業

**注意点:**

1. 基本ウェイトが `3` を超えるものはすべてスパイクとして扱い、結果として見積もり付きの 1 つ以上の Issue を生成すべきです。
2. これらはコードベース／システムに精通している人向けの見積もりです。チーム／コードベース／システムに新しい場合は、基本ウェイトに `1` または `2` の追加ウェイトを足すことができます。
3. ウェイトは [計画フローのステップ #2](#flow-1) で割り当てられます。

---

## 🔗 便利なリンク

- **計画**
  - <a href="https://gitlab.com/groups/gitlab-org/-/boards/9154815?label_name[]=group%3A%3Aeditor%20extensions" target="_blank">担当者別 Issue ボード</a>
  - <a href="https://gitlab.com/groups/gitlab-org/-/boards/9651444?label_name%5B%5D=group%3A%3Aeditor%20extensions" target="_blank">ステータス別 Issue ボード</a>
  - <a href="https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue" target="_blank">マイルストーン計画 Issue</a>
- **ダッシュボード & モニタリング**
  - <a href="https://10az.online.tableau.com/#/site/gitlab/views/PDCodeSuggestions/IDEMetrics" target="_blank">Tableau code suggestions IDE メトリクス</a>
  - <a href="https://session-error-rates-dashboard-87d159.gitlab.io/" target="_blank">Agent Platform セッションエラーレート</a>
  - <a href="https://dashboards.gitlab.net/dashboards/f/editor-extensions/?orgId=1" target="_blank">Grafana ダッシュボード</a>
  - <a href="https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/48493d6c-cd11-45b9-bdc5-bf5242e0de0b/EditorExtensionsMAU?:iid=2" target="_blank">Tableau MAU</a>

- **その他**
  - <a href="https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g" target="_blank">週次同期ミーティングアジェンダ</a>
  - GitLab Unfiltered YouTube チャンネルの <a href="https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc" target="_blank">Editor Extensions プレイリスト</a>
