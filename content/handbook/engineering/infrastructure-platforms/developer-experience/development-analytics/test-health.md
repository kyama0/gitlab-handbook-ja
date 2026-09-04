---
title: "テスト健全性"
description: "Flaky、Quarantine、Slow の各ピラーにわたるグループ別のテストスイート健全性スコア"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/development-analytics/test-health/"
upstream_sha: "bc76a1a59f8b471f304263e712307581bdc7d128"
lastmod: "2026-08-20T14:51:55+01:00"
translated_at: "2026-09-04T22:10:05+09:00"
translator: "codex"
stale: false
---

## 測定対象 {#what-it-measures}

Test Health は、各ステージグループのテストスイートを、ピラーと呼ばれる 3 つの観点からスコアリングします。Flaky（未解決の flaky-test の負債と、それがブロックするパイプライン）、Quarantine（ブロッキングスイートから除外されたテストと、その状態で経過した期間）、Slow（パイプラインの実行時間を延ばすほど遅いテストファイル）です。各ピラーはグループごとに 0 から 100 のスコアで表され、100 は測定対象の負債がないことを意味します。

リリース時点では、`gitlab-org/gitlab` の RSpec バックエンドテストと QA エンドツーエンドテストがスコアの対象です。Jest、契約テスト、Workhorse Go テストは対象を後日拡張する予定です。

## スコアの読み方 {#how-to-read-a-score}

スコアには赤、黄、緑のステータスが付きます。0 から 29 は赤、30 から 70 は黄、71 から 100 は緑です。すべての減点は項目別に示されます。グループの詳細ダッシュボードにある各ピラーのセクションの末尾には、具体的な減点内容を示すスコア計算パネルがあります。たとえば、Issue のバックログ -7、ブロックされたパイプライン -70（上限）、スコア 23 のように表示されます。ステージ、セクション、組織のスコアは所属グループのスコアの平均であるため、「この区分に含まれるグループの平均」として読み取れます。

## グループの探し方 {#where-to-find-your-group}

[Test Health ダッシュボード](https://dashboards.gitlab.net/d/dx-test-health)から始めます。グリッドにはグループごとに 1 行ずつ、3 つのピラーのスコアがすべて表示されます。グループの行から詳細ダッシュボードに移動でき、そこにはスコアの内訳、90 日間の傾向、各数値の根拠となる具体的なテスト、Issue、ファイルが表示されます。

## 赤い Flaky スコアへの対応 {#acting-on-a-red-flaky-score}

ci-alerts は、特に不安定な各テストファイルについて、障害の証拠を添付した Issue を `gitlab-org/quality/test-failure-issues` に作成し（ラベルは `automation:top-flaky-test-file`）、翌営業日を期限に設定します。その後は次のように対応します。

1. Issue を速やかにトリアージします。最初の 1 週間以内であれば減点が最も小さく、期限を過ぎても `workflow::` ラベルがない場合は最も大きくなります。
1. 検出が誤っている場合は、`~"flaky-test::false-positive"` を適用します。
1. ファイルを隔離すると、そのバックログによる減点は Flaky ピラーから Quarantine ピラーへ移ります（経過期間に応じて減点）。そのファイルが引き続き引き起こす障害は Flaky の影響範囲に加算されるため、隔離によって未解消の損害を隠すことなく負債を保留できます。
1. 修正済みの Issue を `workflow::verification` に移すと、検出期間が終わるまでの減点が最小になります。

## ロードマップ {#roadmap}

スコアの計算式は、チームが行うすべてのアクションでスコアが変化するように調整されています。現時点では、スコアが低いこと自体によって何かが発生するわけではありません。ただし、スコアに反映される flaky-test の Issue には、現在、翌営業日の期限が設定されます。低いスコアの改善に今から着手してください。

質問とフィードバック: [Test Health フィードバック Issue](https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/734)（GitLab 社内）。
