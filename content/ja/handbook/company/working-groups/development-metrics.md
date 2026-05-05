---
title: "開発メトリクス ワーキンググループ"
description: "GitLab 開発メトリクス ワーキンググループは、品質メトリクスの作成と解釈によって顧客への価値提供のスピードを上げることを目指しています"
upstream_path: /handbook/company/working-groups/development-metrics/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ   | 値 |
|----------|-------|
| 作成日       | 2019年2月26日 |
| 終了日       | 2019年8月22日 |
| Slack        | [#wg_dev-metrics](https://gitlab.slack.com/messages/CGQ4R90F5)（社内からのみアクセス可） |
| Google Doc   | [Development Metrics Working Group Agenda](https://docs.google.com/document/d/1Y50uhpRW0zSGWI-TzPxHnwEHyOl7uWiyCzXtpRJd1_E/edit)（社内からのみアクセス可） |

## ビジネスゴール

新しい開発・品質メトリクスを作成し、それらを解釈し、改善を実施することで、顧客への価値提供にかかる時間を短縮します。

対象領域:

- 開発のベロシティとスループット
- 不具合のトリアージと修正にかかる時間
- 顧客の不具合解決にかかる時間

## 終了基準（100%）

- 開発部門のスループットを 20% 向上。=> **完了** 著者あたり月 9 MR を達成。
- ダッシュボードで開発組織の KPI を定義。=> **完了** このワーキンググループの KPI が完了。
- すべての顧客向けバグに severity ラベルを確保。=> **完了** severity/priority ラベルを適用。[既存の顧客バグのトリアージ](https://gitlab.com/gitlab-org/gitlab-ce/issues/63136)
- 顧客影響バグのみをフィルタリングする機能を備えた severity::1/severity::2 の Issue の平均解決時間を自動的に収集。=> **完了** [重大度::1〜重大度::2 の機能的欠陥の平均解決時間の視覚化を作成](https://gitlab.com/gitlab-org/gitlab-insights/issues/109)
- priority::1/priority::2 バグの SLO 閾値を維持するために、Product マネージャーと Engineering マネージャーへの priority::1/priority::2 バグの SLO 超過の可視性を提供。=> **完了** [priority::3 の SLO 検出を削除](https://gitlab.com/gitlab-org/quality/triage-ops/issues/230) [priority::3/priority::4 バグから missed-slo を削除](https://gitlab.com/gitlab-org/quality/triage-ops/issues/238)
- 完了した成果物と非成果物の可視性を提供。=> **完了** [マイルストーンごとの完了した成果物を表示](https://gitlab.com/gitlab-org/gitlab-insights/issues/119)
- 顧客影響バグを強調する現在の[ステージグループトリアージパッケージ/レポート](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#team-reports)の効果的なイテレーション。=> **完了** [トリアージパッケージ v2.0](https://gitlab.com/gitlab-org/quality/triage-ops/issues/186)
- Priority および Severity ラベルを効果的に使用するための Engineering マネージャーと Product マネージャーへのトレーニング。=> **完了** [EM と PM 向けのトリアージトレーニング録画](https://gitlab.com/gitlab-org/quality/team-tasks/issues/148) がトリアージオペレーションのランディングページにリンクされました。
- KPI と介入策に関する Engineering マネージャー向けのトレーニング。=> **完了** 現在のイテレーションをレビューし、資料は適切です。

## 役割と責任

| ワーキンググループの役割    | 担当者                | 役職                           |
|-----------------------|-----------------------|--------------------------------|
| ファシリテーター          | Mek Stittri           | Director of Quality            |
| トリアージリード          | Mark Fletcher         | Engineer, Engineering Productivity |
| メンバー                 | Rémy Coutable         | Staff Engineer, Engineering Productivity |
| メンバー                 | Kyle Wiebers          | Senior Engineer, Engineering Productivity |
| メンバー                 | Joshua Lambert        | Senior Product Manager, Scaling |
| メンバー                 | Dalia Havens          | Director of Engineering, Ops   |
| メンバー                 | Craig Gomes           | Engineering Manager, Memory    |
| メンバー                 | Lyle Kozloff          | Support Engineering Manager    |
| メンバー                 | Dennis Tang           | Frontend Engineering Manager   |
| メンバー                 | Virjinia Alexieva     | Senior Product Manager, Framework (Analytics) |
| エグゼクティブステークホルダー | Christopher Lefelhocz | Senior Director of Development |

## 成果物

- [顧客に提供されるプロダクトへの作業を捉える新しい計上方法](https://gitlab.com/gitlab-org/gitlab-insights/issues/134)に向けて取り組んでいます。
- 新しい計上方法に基づいて新しいダッシュボードが更新されたときに[トレーニング資料を更新します](https://gitlab.com/gitlab-com/www-gitlab-com/issues/5137)。
- 品質ダッシュボードを[廃止計画](https://gitlab.com/gitlab-org/gitlab-insights/issues/116)とともに非推奨にし、メトリクスをプロダクトまたは Periscope に移行します。
- Engineering Productivity エンジニアが今では[データチームと協力し](https://gitlab.com/gitlab-data/analytics/issues/2105)、Periscope に直接貢献しています。
- Development は `~dev-quality` ラベルで識別される[クロスファンクショナルボード](https://gitlab.com/groups/gitlab-org/-/boards/1262515)を通じて Engineering Productivity と協力します。
- [2 リリース後に severity::1 severity::2 バグの解決時間を再検討し](https://gitlab.com/gitlab-org/quality/team-tasks/issues/203)、上記のすべての改善が行われた後に再評価します。
- すべてのミーティングのアーカイブが[GitLab Unfiltered Youtube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoXVkxaVXFoUjM0K1qLHAJ3)として利用できます。
