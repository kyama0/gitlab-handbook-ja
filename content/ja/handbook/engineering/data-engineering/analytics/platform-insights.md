---
title: "Analytics:Platform Insights グループ"
upstream_path: /handbook/engineering/data-engineering/analytics/platform-insights/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:53:44Z"
translator: claude
stale: false
---

## 私たちについて

Platform Insights グループは GitLab の [Analytics Stage](/handbook/engineering/data-engineering/analytics/) の一部であり、[GitLab Observability](https://about.gitlab.com/direction/monitor/platform-insights/) と [Product Analytics](https://about.gitlab.com/direction/monitor/platform-insights/) の製品を構築しています。

### チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/analytics/platform-insights/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### ステーブルカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/analytics/platform-insights/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## テクニカルアーキテクチャ

### アーキテクチャブループリント

* [Error Tracking](https://gitlab.com/gitlab-org/opstrace/opstrace/-/blob/main/docs/architecture/error-tracking.md)
* [Tracing](https://docs.gitlab.com/ee/architecture/blueprints/observability_tracing/)
* [Metrics](https://docs.gitlab.com/ee/architecture/blueprints/observability_metrics/)
* [Logs](https://docs.gitlab.com/ee/architecture/blueprints/observability_logging/)

### アーキテクチャドキュメント

* [こちらのページ](https://gitlab.com/gitlab-org/opstrace/opstrace/-/tree/main/docs/architecture)を参照してください。

### プロジェクトリンク

* [トップレベルエピック](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/92)
* [ソースコードリポジトリ](https://gitlab.com/gitlab-org/opstrace/opstrace)

### ClickHouse データストア

Observability とアナリティクスの機能には大量のデータと挿入負荷の高い要件があり、Postgres や Redis には適していません。[ClickHouse](https://github.com/ClickHouse/ClickHouse) はこれらの機能要件を満たす適切な選択肢として選ばれました。ClickHouse はオープンソースの列指向データベース管理システムです。大量の行にわたって効率的にフィルタリング、集計、合計を行えるため、これらのユースケースに魅力的です。ClickHouse は GitLab のスタックにおける Postgres や Redis の代替として意図されていません。

当初はセルフホスト型の ClickHouse インスタンスを管理していましたが、ClickHouse へのメンテナンスとスケーラビリティのオフロードによりチームの動きを速めるために ClickHouse Cloud への移行を決定しました。

詳細: [ClickHouse データストアワーキンググループ](/handbook/company/working-groups/clickhouse-datastore/)

## 働き方

私たちは会社の [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) に基づいたワークフローを採用しています。ワークフローの適用方法に関する変更や明確化については以下に詳述します。

### 非同期スタンドアップ

毎週水曜日に Slack ベースのスタンドアップ（[Geekbot](https://geekbot.com/) を使用）を行い、金曜日にレトロスペクティブを行います。これらの非同期スタンドアップを使用して、達成したこと、現在のブロッカー、次に取り組む予定を伝えます。

### 非同期アップデート

毎週金曜日、EM がチームの進捗の非同期アップデートを提供します。

これらのアップデートは [`general` プロジェクトの Issue](https://gitlab.com/gitlab-org/opstrace/general/-/issues/?sort=created_date&state=all&label_name%5B%5D=OpsSection%3A%3AWeekly-Update&first_page_size=100) として公開されます。

Ops 内のすべてのチームからのアップデートとハイライトは、週/月/四半期別にグループ化されて[こちら](https://gitlab.com/gitlab-com/ops-sub-department/ops-status-updates/-/issues/?sort=created_date&state=opened&first_page_size=20)に自動的に収集されます。

### ミーティング

* **週次チームシンク**: 現在進行中の作業や、ロールアウトや大きなイニシアチブなどの特定の取り組みを整理することに焦点を当てています。
* 隔月ソーシャルアワー: このミーティングは業務に関係なく、チームが交流してお互いをよく知るのに役立ちます。
* **チームメンバーコーヒーチャット**: 各チームメンバーは、4〜6週間おきに他のすべてのチームメンバーとコーヒーチャットをスケジュールするべきです。業務や業務外のトピックを自由に話し合えます。タイムゾーンが問題な場合は、非同期の Slack スレッドでチェックインするなど別の方法でつながってください。目標は、1対1でお互いのチームメンバーを知ることです。
* **Dev シンク**: これらはエンジニア主催の同期ミーティングで、IC がテクニカルな問題を議論したり、EM を必要とせずにテクニカルな作業を調整したりすることができます。

### コミュニケーション

以下の Slack チャンネルを使用して組織します:

* プライマリチャンネル: [#g_monitor_platform_insights](https://gitlab.enterprise.slack.com/archives/C02Q93U8J07)
* スタンドアップチャンネル: [#g_monitor_platform_insights_standup](https://gitlab.enterprise.slack.com/archives/C02VAHG10HW)
* ソーシャルチャンネル: [#g_monitor_platform_insights_internal](https://gitlab.enterprise.slack.com/archives/C02QLQUB0JZ)

### 計画方法

月次マイルストーンサイクルに従っています。作業は[エピック](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/92 "Observability Group - FY25 HQ")に整理され、関連するマイルストーンに割り当てられます。

マイルストーンの開始日は [gitlab.org グループのマイルストーン](https://gitlab.com/groups/gitlab-org/-/milestones?search_title=17.0&state=&sort=)で定義されています。[新しい GitLab リリースカレンダー](https://about.gitlab.com/blog/2023/09/18/gitlab-release-date-change/)に従い、毎月変更されます。

マイルストーン計画タイムライン:

* マイルストーン開始 10日前: PM/EM が高レベルのマイルストーン目標を含む計画[ドラフト Issue](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/80) を作成します。
* マイルストーン開始 8日前: 計画ドラフトをチームと共有します。個別貢献者は、これらの目標に関連するエピックと Issue や前のマイルストーンから引き継がれたものを推薦します。
* マイルストーン開始 5日前: 計画はチームシンクミーティングでレビューされます。
* マイルストーン開始日: マイルストーンの目標と関連するエピックおよび Issue が確定・優先順位付けされるべきです。計画された全作業は[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7850744)で確認できます。前のマイルストーンの Issue は新しいマイルストーンまたはバックログに移動されます。
* マイルストーン中、進捗を分析し必要に応じて再優先順位付けします。

### Issue の優先順位付け

私たちの優先順位はプロダクト全体のガイダンスに従うべきです。これはスケジュールされた Issue の優先度ラベルに反映されるべきです:

| 優先度 | 説明 | マイルストーンでの出荷確率 |
| ------ | ------ | ------ |
| priority::1 | **緊急**: 特定のマイルストーンで達成するための最優先事項。これらの Issue はリリースにとって最も重要な目標であり、最初に取り組むべきです；一部は時間的に重要だったり他の依存関係をブロックしていたりします。 | ~100% |
| priority::2 | **高**: ビジネスまたは技術的負債に大きな好影響を与える重要な Issue。重要ですが、時間的に重要ではなく他をブロックしていません。 | ~75% |
| priority::3 | **通常**: 既存機能への段階的な改善。これらは重要なイテレーションですが、重要度が低いと見なされています。 | ~50% |
| priority::4 | **低**: 将来のリリースへの先送りが許容されるストレッチ Issue。 | ~25% |

### 取り組む作業を探す方法

通常、マイルストーン開始時に EM が作業の概要と注力する関連領域について説明します。マイルストーン開始前にすでに Issue が割り当てられている場合もあります。

追加の Issue を探している場合:

1. Platform Insight の[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7850744)を確認します。
1. 未割り当ての Issue を特定します。
1. 自分を Issue に割り当てます。
1. Issue に `workflow:in dev` ラベルを追加します。
1. スコープや説明が不明確な場合は、EM や PM に確認するか、（自信がある場合は）自分でグルームして進めます。
1. Issue に取り組み始めます。
1. 関連するすべての MR がマージされたら、`~workflow::verification` ラベルを設定します。
    * MR が Issue を自動クローズしないようにしてください。（MR の説明では `Closes #11111` ではなく `Relates to #11111` を使用します。）
1. 変更を確認し、例えば `Verified on production` のように検証に使用した環境を Issue にコメントします。
1. Issue をクローズします！🎉
1. 繰り返します。

### Observability Beta をお客様に有効にする方法

特定のお客様に Logs、Tracing、Metrics ベータへのアクセスを有効にするには、以下のプロセスに従います:

SaaS の場合:

* 事前に、[このページ](https://docs.gitlab.com/ee/development/chatops_on_gitlabcom.html#requesting-access)に詳述されている ChatOps コマンドを実行するための適切なアクセスと権限を持っていることを確認します。
* お客様にトップレベルグループ名を確認します（例: https://gitlab.com/gitlab-org/ の場合は `gitlab-org`）。
* #production で、このグループのフィーチャーフラグを有効にするために以下のコマンドを実行します（`gitlab-org` をお客様のグループ名に置き換えます）:

```text
/chatops run feature set --group=gitlab-org observability_features true
```

すでに有効になっているグループのリストを確認するには、以下のコマンドを実行します:

```text
/chatops run feature get observability_features
```

リストはグループ名ではなくグループ ID を返します。グループの ID を知るには、グループのページ（[例](https://gitlab.com/gitlab-org/)）を閲覧し、ページ右上の "..." メニューを開いて「グループ ID をコピー」を選択します。グループへのアクセス権がない場合は、お客様に行っていただくよう依頼してください。

詳細: 関連する[フィーチャーフラグ Issue](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/2444) を参照してください。

セルフマネージドの場合:

* 現時点では利用できません。
