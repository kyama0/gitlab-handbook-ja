---
title: "バグの優先順位付け"
description: "このページでは、クロスファンクショナルな優先順位付けプロセスの一環として品質エンジニアリングサブ部門が行うバグの優先順位付けプロセスについて説明します。"
upstream_path: /handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-22T12:00:00Z"
translator: claude
stale: false
---

## 概要

このページでは、クロスファンクショナルな優先順位付けプロセスの一環として品質エンジニアリングサブ部門が行うバグの優先順位付けプロセスについて説明します。

プロセス全体の概要は [クロスファンクショナルな優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/) ハンドブックページにあります。

## タイムライン

[Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline) に定義されているとおり、優先順位付けには特定のデッドラインがあります。月 `M` の [リリース日](/handbook/engineering/releases/) に出荷されるマイルストーン `m` を想定すると次のようになります。

- マイルストーン開始の 19 日前の月曜日まで:
  - 各グループのプロダクトマネージャーに対し、優先順位付けされた `type::bug` Issue のリストを記載したバグ優先順位付けトリアージレポートが作成されます。
- マイルストーン開始の 12 日前の月曜日まで:
  - 各カウンターパートグループの quad（PM、EM、UX、Quality）が、次のマイルストーンに含める Issue について議論します。
  - プロダクトマネージャーは quad からの優先順位付けの入力を考慮し、次のマイルストーンの Issue 計画を作成します。

## バグ優先順位付けトリアージレポート

自動化された [バグ優先順位付けトリアージレポート](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/template/group/bug-prioritization.yml.erb) は、`~"type::bug"` のうちオープン状態にあるトップ 10 の Issue を含み、毎月各グループ向けに作成されます。レポートは以下の条件に基づいて優先順位付けされた Issue で生成されます。

  1. `severity::*` ラベルに基づく重大度
  1. `bug::vulnerability` ラベルに基づくセキュリティ脆弱性
  1. `customer` ラベルに基づく顧客 Issue
  1. Issue の経過時間（古いものほど優先）

バグ優先順位付けトリアージレポートは、[グループ定義ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) または、トリアージレポートポリシーファイル群である [ポリシー YAML ファイル](https://gitlab.com/gitlab-org/quality/triage-ops/tree/master/policies) に記載されている、各グループの特定の PM・EM に自動的にアサインされます。

Issue がアサインされる相手を変更するには、上記のファイルに対してマージリクエストをオープンしてください。グループ定義ファイルを変更した場合は、生成されたファイルも更新するために [いくつかのスクリプトを実行](https://gitlab.com/gitlab-org/quality/triage-ops#generating-policy-files-and-ci-jobs) する必要があります。

## バグ優先順位付けダッシュボード

[バグ優先順位付けダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard?:iid=2) も、各グループ向けにバグの推奨リストをまとめるために使用できます。
データは時間の経過とともに変化するため、このダッシュボードは各マイルストーンで再確認する必要があります。

一般的なガイドラインとして、提案するバグの総数は、対象とするグループのダッシュボード上のバーンダウンプランと一致させるべきです。
この合計は **Milestone planning (bug counts to schedule)** というチャートの **Total Bugs** で確認できます。

また、**Milestone planning (bug % of scheduled issues)** チャートにある **Total Bug %** も含めると役立ちます。
このメトリクスは、リストにあるすべてのバグに取り組む余力がないグループが、適切な割合のバグをスケジュールできるよう目標設定するのに役立ちます。

このプロセスは画一的なものではなく、グループはチームに最適な方法を見つけることを推奨されています。

### ダッシュボードのウォークスルー

この表には、バグ優先順位付けダッシュボードにあるチャートの一覧と、それぞれが何を表しているかの説明を記載しています。

[バグ優先順位付けダッシュボードのウォークスルー](https://www.youtube.com/watch?v=qd3NjPV6zkk) 動画でも、例とともにダッシュボードの概要を確認できます。

| チャート名                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bugs per milestone (6mo avg)                    | 過去 6 か月間で、マイルストーンごとに作業された Issue のうちバグだったものの平均割合。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Bug Growth Rate (6mo total)                     | 過去 6 か月間のバグの総増加率。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Bugs opened and closed by severity (6mo totals) | 過去 6 か月間に重大度別にオープン・クローズされたバグの総数。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Open bugs by severity                           | 重大度別のオープンバグ総数。SLO を超過した数と割合を含む。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Selected burndown plan                          | フィルターで選択されたバーンダウンプランのサマリー。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Milestone planning (bug counts to schedule)     | このチャートは、選択したバーンダウンプランを達成するためにマイルストーンに引き込むべきバグ数を判断するのに役立ちます。<br/><br/> 「Open Bugs (Total)」列は「Open bugs by severity」チャートと同じデータを使用します。<br/><br/> 「Burndown Bugs」列は、バックログを減らし始めるために、重大度別にマイルストーンごとに引き込む必要があるバグ数を示します。<br/><br/>  「New Bugs」列は、特定のマイルストーンで新たにオープンされると見込まれる各重大度のバグ数の概算です。ここでの新規バグの総数は、バックログを増やさないためにスケジュールする必要がある最低数です。  |
| Milestone planning (bug % of scheduled issues)  | このチャートは Milestone planning (bug counts) チャートと同じ概念を、時間経過でマージされた MR 総数に対する割合として表します。<br/><br/> 「New Bug %」列は、バーンダウンを行わずにバックログを増やさないために、次のマイルストーンで対応する必要があるバグの割合です。<br/><br/> 「Total Bug %」列は、バックログをバーンダウンするために、次のマイルストーンで対応する必要があるバグの割合です。                                                                                                                                                       |
| Open bugs over time                             | このグラフは、重大度別にオープンされたバグ数の時系列推移を可視化します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| S1 Bug Backlog Over Time                        | このグラフは、バックログ内のオープンな S1 バグ数の時系列推移を可視化します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| S2 Bug Backlog Over Time                        | このグラフは、バックログ内のオープンな S2 バグ数の時系列推移を可視化します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Open bugs (with severity label)                 | オープンバグを、それぞれの Issue へのリンク付きで、重大度の降順（`severity::1` 〜 `severity::4`）にソートして一覧表示します。各重大度グループ内では、古いものから新しいものへとバグの経過時間でソートされます。                                                                                                                                                                                                                                                                                                        |
| Open bugs (missing severity label)              | 重大度ラベルが付いていないオープンバグを一覧表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Avg MRs per milestone (6mo)                     | 過去 6 か月間のマイルストーンあたりの平均オープン MR 数。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Bugs MRs merged per bug issue closed (6mo)      | 過去 6 か月間で、クローズされたバグ Issue 1 件あたりにマージされたバグ MR の数。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### 優先順位付けのガイドライン

どのバグを優先するかを決める際に、以下の観点を考慮すると役立ちます。

- 経過時間（古いものか、新しいものか）
- 重大度（高いか、低いか）
- 期限切れのバグ（以前のマイルストーンからずれ込んだもの、SLO を逃したものなど）
- 顧客からの報告か社内か（`customer` でタグ付けされた Issue）
- 多数の顧客チケットが存在することを示す「Support Priority」または「Support Efficiency」
- 人気度/影響を受けるユーザー数
  - これには quad での調査・議論が必要ですが、出発点として役立つ指標がいくつかあります。
    - Issue の upvote 数
    - 影響を受けているユーザー数に言及するコメントや顧客サポートからのコンテキスト
    - 特定のエラーを経験しているユーザー数を追跡するための [Kibana](https://log.gprd.gitlab.net/) や [Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/) の本番ログ
    - 一部のプロダクトグループは、自分たちの機能の xMAU（月間アクティブ使用量）を追跡するダッシュボードやツールを持っています。これにより、利用量の多い機能に影響しているバグの影響度を測ることができます。
- 現在アクティブに作業されていない
- すでに将来のマイルストーンにアサインされていない（エスカレーションが必要な場合を除く）
- 現在ブロックされていない
- グループの現在の機能作業やロードマップと整合している（例: `feature A` が将来のマイルストーンで更新される間に、`feature A` に関連するバグをまとめて修正する方が効率的な場合がある）

また、以下の [製品の優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization) と整合するよう意思決定することも目指します。

<!-- include omitted: includes/product/master-prioritization-list.md (no localized version under content/ja/) -->
