---
title: "ランタイム更新プロセス ワーキンググループ"
description: "エンジニアの手動介入を削減することで、言語ランタイム（バージョン）の更新プロセスを効率化します"
status: active
upstream_path: "/handbook/company/working-groups/runtime-update-process/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T23:18:21Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ      | 値                                                                                                              |
|----------------|----------------------------------------------------------------------------------------------------------------|
| 作成日          | 2022-11-29                                                                                                     |
| 目標終了日      | 未定                                                                                                           |
| Slack           | [#wg-runtime-update-process](https://gitlab.slack.com/archives/C045H9HDV7T)                                    |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/11HRehnkZqXhFMyM_nrftRS1LNuHqPo8S8wcZpPOry9g/edit#) |
| タスクボード     | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/5467616)                                          |
| Epic            | [リンク](https://gitlab.com/groups/gitlab-org/-/epics/10154)                                                    |

## ビジネス目標

言語フレームワーク（バージョン）の更新プロセスを効率化する必要があります。言語フレームワークの更新は複数のチームによって推進され、煩雑であり、現在使用している複数のフレームワーク間でプロセスが一貫していません。Go の場合、6つ以上のチームが関与しています。現在のアップグレードプロセスは大規模に実行するのが難しく、高度な複雑さを伴う手動介入が必要です。目標には以下が含まれますが、これらに限定されません。

- 効率化された Golang ランタイム（バージョン）更新プロセス、またはおそらく言語フレームワークに依存しないプロセスを作成する
- 更新プロセスの複雑さを削減する
- 効率性を向上させるための更新プロセスに関するドキュメントを作成する
- 開発者と管理者の効率を向上させる

## 進捗の追跡

進捗はワーキンググループの [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/5467616)で以下のラベルを使用して追跡されます。

- ~"workflow::In dev"
  - Issue は現在進行中で積極的に作業中です
- ~"workflow::In review"
  - Issue は現在、より広いエンジニアリングチームによってレビュー中です
- ~"workflow::blocked"
  - Issue は別の Issue によってブロックされています。ブロッキング Issue を参照してください。
- ~"workflow::production"
  - Issue は完了しており、クローズする必要があります。

### 完了基準（0% 完了）

| 基準 | 開始日 | 目標完了日 | 完了日 | DRI |
|------|--------|------------|--------|-----|
| Go、Ruby、Rails、Vue などの主要プラットフォームに適用可能な繰り返し可能なアップグレードプロセスを構築し文書化する | 2023-03-30 | 2023-08-31 | | |
| Go 1.20 にアップグレードする | 2023-03-30 | 2023-07-30 | | @rmarshall |
| Ruby、Python、または Node などの第2のフレームワークのアップグレードを評価する | 2023-06-01 | 2023-06-30 | | |
| プロセスを検証するために第2のフレームワークをアップグレードする | 2023-07-01 | 2023-09-30 | | |

### 役割と責任

| ワーキンググループの役割 | 担当者                | 職位                                    |
|--------------------|-----------------------|-----------------------------------------|
| エグゼクティブスポンサー | Christopher Lefelhocz | VP of Development                       |
| ファシリテーター     | Matt Nohr             | Engineering Manager, Create             |
| 機能リード          | Robert Marshall       | Senior Backend                          |
| メンバー            | Chun Du               | Director of Engineering, Enablement     |
| メンバー            | Thomas Woodham        | Senior Engineering Manager, Secure      |
| メンバー            | Ross Fuhrman          | Senior Backend                          |
| メンバー            | Patrick Bajao         | Senior Backend Engineer, Create         |
