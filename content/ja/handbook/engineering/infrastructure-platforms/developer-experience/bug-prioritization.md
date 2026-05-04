---
title: "バグ優先順位付け"
description: "このページでは、クロスファンクショナルな優先順位付けプロセスの一環として品質エンジニアリングサブ部門が実施するバグ優先順位付けプロセスについて説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:51:32Z"
translator: claude
stale: false
---

## 概要

このページでは、クロスファンクショナルな優先順位付けプロセスの一環として品質エンジニアリングサブ部門が実施するバグ優先順位付けプロセスについて説明します。

プロセス全体の概要は、[クロスファンクショナル優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/) ハンドブックページにあります。

## タイムライン

[製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) に定義されているように、優先順位付けには特定のデッドラインがあります。月 `M` の[リリース日](/handbook/engineering/releases/)に出荷されるマイルストーン `m` が与えられた場合:

- マイルストーン開始の 19 日前の月曜日まで:
  - バグ優先順位付けトリアージレポートが、各グループのプロダクトマネージャーに優先された `type::bug` Issue のリストとともに作成されます。
- マイルストーン開始の 12 日前の月曜日まで:
  - 各カウンターパートグループの Quad（PM、EM、UX、Quality）が、次のマイルストールに含める Issue について議論します。
  - プロダクトマネージャーは、Quad からの優先順位付けの入力を考慮に入れ、次のマイルストーンの Issue 計画を作成します。

## バグ優先順位付けトリアージレポート

自動化された[バグ優先順位付けトリアージレポート](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/template/group/bug-prioritization.yml.erb) は、`~"type::bug"` のトップ 10 のオープン Issue を含み、月次で各グループに対して作成されます。レポートは以下の条件に基づいて優先された Issue で生成されます:

  1. `severity::*` ラベルに基づく重大度
  1. `bug::vulnerability` ラベルに基づくセキュリティ脆弱性
  1. `customer` ラベルに基づく顧客 Issue
  1. Issue の経過時間（最も古いもの）

バグ優先順位付けトリアージレポートは、[グループ定義ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml)にリストされているか、トリアージレポートポリシーファイルの[ポリシー YAML ファイル](https://gitlab.com/gitlab-org/quality/triage-ops/tree/master/policies)に直接記載されている各グループの特定の PM と EM に自動的にアサインされます。

Issue がアサインされる対象を変更するには、上記のファイルに対してマージリクエストを開きます。グループ定義ファイルが変更された場合、生成されたファイルを更新するために[いくつかのスクリプトを実行](https://gitlab.com/gitlab-org/quality/triage-ops#generating-policy-files-and-ci-jobs)する必要があります。

## バグ優先順位付けダッシュボード

[バグ優先順位付けダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard?:iid=2) は、各グループの推奨バグリストをまとめるためにも使用できます。
ダッシュボードは各マイルストーンで再確認する必要があります。データは時間とともに変化するためです。

一般的なガイドラインとして、提案されたバグの総数は、あなたの特定のグループのダッシュボードのバーンダウン計画と一致させる必要があります。
この合計は **Milestone planning (bug counts to schedule)** というタイトルのチャートの **Total Bugs** で確認できます。

また、**Milestone planning (bug % of scheduled issues)** チャートにある **Total Bug %** も含めると役立ちます。
このメトリクスにより、リストにあるすべてのバグに取り組む余力がない場合に、グループが適切な割合のバグをスケジュールするよう目標設定できます。

このプロセスは一律に適用されるものではなく、グループはチームに最適な方法を見つけることが奨励されています。

### ダッシュボードのウォークスルー

この表には、バグ優先順位付けダッシュボードに見られるチャートの一覧と各チャートが何を表しているかの説明が含まれています。

[バグ優先順位付けダッシュボードウォークスルー](https://www.youtube.com/watch?v=qd3NjPV6zkk) 動画でも、例とともにダッシュボードの概要を確認できます。

| チャート名 | 説明 |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bugs per milestone (6mo avg) | 過去 6 ヶ月間で平均してバグだったマイルストーンあたりの作業 Issue の割合。 |
| Bug Growth Rate (6mo total) | 過去 6 ヶ月間のバグ成長率の合計割合。 |
| Bugs opened and closed by severity (6mo totals) | 過去 6 ヶ月間に重大度別にオープンおよびクローズされたバグの総数。 |
| Open bugs by severity | 重大度別のオープンバグの総数。SLO を超過した数と割合を含む。 |
| Selected burndown plan | フィルターで選択されたバーンダウン計画のサマリー。 |
| Milestone planning (bug counts to schedule) | このチャートは、選択されたバーンダウン計画を達成するためにマイルストーンに引き込む必要があるバグ数を決定するのに役立ちます。<br/><br/> 「Open Bugs (Total)」列は「Open bugs by severity」チャートと同じデータを使用します。<br/><br/> 「Burndown Bugs」列は、バックログの削減を開始するために重大度別にマイルストーンごとに引き込む必要があるバグ数を示します。<br/><br/> 「New Bugs」列は、特定のマイルストールで新たにオープンになる各重大度のバグ数を概算します。ここでの新しいバグの総数は、バックログを増やさないためにスケジュールする必要がある最低数です。 |
| Milestone planning (bug % of scheduled issues) | このチャートは Milestone planning (bug counts) チャートと同じ概念を表しますが、時間の経過とともにマージされた MR の総数の割合として表します。<br/><br/> 「New Bug %」列は、バーンダウンなしでバックログを増やさないために次のマイルストーンで対処する必要があるバグの割合です。<br/><br/> 「Total Bug %」列は、バックログをバーンダウンするために次のマイルストーンで対処する必要があるバグの割合です。 |
| Open bugs over time | このグラフは、重大度別に時間の経過とともにオープンになったバグ数を可視化します。 |
| S1 Bug Backlog Over Time | このグラフは、時間の経過とともにバックログ内のオープンな S1 バグ数を可視化します。 |
| S2 Bug Backlog Over Time | このグラフは、時間の経過とともにバックログ内のオープンな S2 バグ数を可視化します。 |
| Open bugs (with severity label) | 重大度の降順（`severity::1` 〜 `severity::4`）でソートされた、それぞれの Issue へのリンクとともにオープンバグをリストします。各重大度グループは、最も古いものから新しいものの順にバグの経過時間でソートされます。<br/><br/> SET / QEM はこのリストを使用して、カウンターパートグループの推奨バグリストをまとめることができます。 |
| Open bugs (missing severity label) | 重大度ラベルがないオープンバグをリストします。 |
| Avg MRs per milestone (6mo) | 過去 6 ヶ月間のマイルストーンあたりの平均オープン MR 数。 |
| Bugs MRs merged per bug issue closed (6mo) | 過去 6 ヶ月間でバグ Issue がクローズされるごとにマージされたバグ MR の数。 |

### 優先順位付けガイドライン

どのバグを優先するかを決定する際に、以下の考慮事項が役立ちます。

- 経過時間（古い vs 新しい）
- 重大度（高い vs 低い）
- 期限切れバグ（前のマイルストーンからスリップしたバグ、SLO の遅延など）
- 顧客報告 vs 内部（`customer` でタグ付けされた Issue）
- 大量の顧客チケットがあることを示す「Support Priority」または「Support Efficiency」
- 人気度/影響を受けるユーザー数
  - これには Quad での調査と議論が必要ですが、開始するのに役立ついくつかの指標があります:
    - Issue の upvote 数
    - 影響を受けるユーザー数に言及するコメントや顧客サポートからのコンテキスト
    - 特定のエラーを経験しているユーザー数を追跡するための [Kibana](https://log.gprd.gitlab.net/) と [Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/) の本番ログ
    - 一部の製品グループは、機能の xMAU（月次アクティブ使用量）を追跡するダッシュボードや他のツールを持っています。これは、高い使用量の機能に影響している場合のバグの影響度を評価するのに役立ちます。
- 現在アクティブに取り組まれていない
- 将来のマイルストーンにまだアサインされていない（エスカレーションが必要な場合を除く）
- 現在ブロックされていない
- グループの現在の機能作業とロードマップに一致する（例: `feature A` が将来のマイルストーンで更新されている間に、`feature A` に関するバグをまとめて修正する方が効率的な場合がある）

また、以下の[製品優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization)に合わせて決定することも目指してください。


<!-- include omitted: includes/product/master-prioritization-list.md (no localized version under content/ja/) -->
