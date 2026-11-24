---
title: "サードパーティデータワーキンググループ"
description: "Orbit をはじめ、すべての GitLab 製品でサードパーティデータを利用できるようにする単一のプラットフォームです。"
status: active
upstream_path: /handbook/company/working-groups/third-party-data/
upstream_sha: be228760349beb5ac063e32579ee6507e09f8b6e
lastmod: "2026-11-24T08:44:34-05:00"
translated_at: "2026-11-24T21:21:43+00:00"
translator: codex
stale: false
---

## 属性 {#attributes}

| 項目 | 値 |
|-----------------|-------|
| 設立日 | 2026 年 11 月 20 日 |
| 終了予定日 | 機密扱いの[提供計画エピック](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/29)に記載 |
| Slack | #data_eng_third_party_data |
| エピック | [Orbit](https://gitlab.com/groups/gitlab-org/orbit/-/work_items/20)、[DIP](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/19) |
| チームの要件 | [各チームが必要とするもの](https://gitlab.com/gitlab-org/analytics-section/platform-insights/architecture/-/merge_requests/1) |
| 設計 | [サードパーティインテグレーション](https://gitlab.com/gitlab-org/analytics-section/platform-insights/architecture/-/tree/main/third-party-integration) |
| 担当者 | [コンポーネントと意思決定](/handbook/company/working-groups/third-party-data/components/) |

## 背景 {#context}

お客様が Orbit に最も求めているのは、主に Jira、Confluence、Slack など、GitLab の外部にあるデータです。現時点で Orbit が扱えるのは GitLab のデータだけなので、先週のインシデントの背景にある Jira のエピックに、どのマージリクエストが紐付いているかはわかりません。他のチームも同じデータを必要としており、Data Foundations はすでにこのデータの取り扱いを活動方針に含めています。そこで私たちは、Orbit 専用のパイプラインを作る代わりに、すべての製品がデータを読み取れる単一のプラットフォームを構築し、Orbit を最初の利用製品とします。このグループの目的は、そのプラットフォームをお客様に提供することです。提供後はグループを解散し、データエンジニアリング内の各チームに担当を引き継ぎます。

## GA 後 {#after-ga}

グループの解散時に、各部分を長期的に担当するチームに引き継ぎます。

| 担当範囲 | 担当チーム |
|------|-------|
| コネクターとそのライフサイクル | Intelligence Integrations |
| ランタイム、認証情報、ランディングゾーン、Silver | Data Foundations |
| Orbit でのインデックス作成とクエリ | Orbit |
| オントロジーと分析 | Analytics Instrumentation |

コネクターはランタイム上で動作し、Data Foundations が定義する共通の契約に従ってデータを書き込みます。この契約により、どのチームも他のチームの対応を待たずにコネクターを追加できます。この分担は[チームの要件レビュー](https://gitlab.com/gitlab-org/analytics-section/platform-insights/architecture/-/merge_requests/1)で合意しました。

## 完了基準 {#exit-criteria}

| マイルストーン | 完了基準 | DRI |
|-----------|---------------|-----|
| 設計の承認 | 設計の最終段階をマージし、ハンドブックに移します。各コンポーネントと、その障害時の挙動を記載します。 | Jean-Gabriel Doyon |
| Customer Zero | GitLab は GitLab.com 上で Jira、Confluence、Slack、incident.io を使用し、コネクターから Orbit でのクエリまでを通して利用します。テレメトリー、セキュリティレビュー、PRR を完了します。 | Jean-Gabriel Doyon |
| ベータ | GitLab.com のお客様がグループで有効化し、ユーザー向けドキュメントにデータソースの接続方法が記載されています。 | Jean-Gabriel Doyon |
| プラットフォームの GA | GitLab.com、Dedicated、Self-Managed で、すべてのコンポーネントが GA の基準を満たします。 | Jean-Gabriel Doyon |

私たちは段階ごとに設計を承認し、設計がマージされたらその段階の実装に着手します。Orbit と Intelligence Integrations の実装はデータ提供と書き込みの契約に依存するため、これらの契約を先に進めます。その後、各コネクターは個別のスケジュールでベータから GA に移行します。そのため、プラットフォームの GA は個々のコネクターの GA を待たずに進められます。日程、スコープ、人員配置、リスクは未リリースの製品の計画にあたるため、[提供計画エピック](https://gitlab.com/groups/gitlab-org/analytics-section/-/work_items/29)に記載しています。

## 役割と責任 {#roles-and-responsibilities}

| ワーキンググループでの役割 | 担当者 | 責任 |
|--------------------|--------|----------------|
| Executive Sponsor | [Saurabh Chopra](https://gitlab.com/chopras) | 初期の担当と人員配置を決定 |
| Executive Sponsor | [Angelo Rivera](https://gitlab.com/michaelangeloio) | 人員配置とエスカレーションを担当 |
| DRI | [Jean-Gabriel Doyon](https://gitlab.com/jgdoyon1) | お客様がサードパーティデータを利用できるようになるまで、成果に責任を持つ |
| プラットフォームのファンクショナルリード | [Ankit Bhatnagar](https://gitlab.com/ankitbhatnagar) | ランタイムと書き込み契約のテックリードを務める |
| Orbit のファンクショナルリード | [Jean-Gabriel Doyon](https://gitlab.com/jgdoyon1) | Orbit のテックリードを務める |
| Intelligence Integrations のファンクショナルリード | [Abhinaba Ghosh](https://gitlab.com/ghosh-abhinaba) | GA 後のコネクターを担当（グループのクリティカルパス外） |
| Analytics Instrumentation のファンクショナルリード | [Ashwin Bilgi](https://gitlab.com/abilgi) | 利用状況イベントを担当 |
| メンター | [Brian Greene](https://gitlab.com/bgreene1) | Integration Factory について助言する |

## 活動の頻度 {#cadence}

- すべての DRI が参加する 30 分間の週次ミーティング
- 提供計画エピックでの週次の非同期ステータス更新
