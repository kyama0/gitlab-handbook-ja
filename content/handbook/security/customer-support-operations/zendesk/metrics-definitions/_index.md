---
title: 'メトリクス定義'
description: 'Zendesk のメトリクス定義に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/metrics-definitions/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、共通の Zendesk チケットメトリクスを定義します。これらのメトリクスはチケットライフサイクルのタイミングを追跡し、SLA ポリシー、レポート、パフォーマンス測定で使用されます。

**注:** これらは Zendesk の公式定義です。GitLab は内部レポートで、わずかに異なる計算や定義を使用する場合があります。SLA ポリシーの詳細については [私たちのドキュメント](/handbook/security/customer-support-operations/zendesk/sla-policies/) を参照してください。

## First Reply Time (FRT)

これは、チケットが作成されてからエージェントの最初のパブリック返信を受けるまでの時間です。

## Next Reply Time (NRT)

これは、エンドユーザーからのパブリック返信から、エージェントのパブリック返信を受けるまでの時間です。

## Requester wait time

**目的:** 顧客がエージェントのアクションを (外部ソースの待ち時間も含めて) どれだけ待ったかを測定します。

これは、チケットが以下のステータスにあった合計時間です:

- New
- Open
- On-hold

## Agent work time

**目的:** チケットがエージェントの直接的なアクションをどれだけ待ったかを測定します。

これは、チケットが以下のステータスにあった合計時間です:

- New
- Open

## Agent wait time

**目的:** チケットが顧客の応答をどれだけ待ったかを測定します。

これは、チケットが以下のステータスにあった合計時間です:

- Pending

## On-hold time

**目的:** チケットが外部ソース (エージェントでも顧客でもない) をどれだけ待ったかを測定します。

これは、チケットが以下のステータスにあった合計時間です:

- On-hold

## Total resolution time

**目的:** 作成から解決までチケットがどれだけの時間を要したかを測定します。

これは、チケットが以下のステータスにあった合計時間です:

- New
- Open
- Pending
- On-hold

## Periodic update

**目的:** チケットがエージェントによるパブリック返信の間にかかる時間を測定します。

## Pausable update

**目的:** チケットがエージェントによるパブリック返信の間に費やした時間を測定します。

これは、チケットが以下のステータスにある間にエージェントのパブリック返信の間にかかる時間です:

- New
- Open
- On-hold

## 詳細な例

これらのメトリクスがどのように連動するかを示すために、以下のチケットライフサイクルを考えてみましょう:

**チケット #12345 のタイムライン:**

| 時刻 | イベント | ステータス変更 |
|------|---------|----------------|
| 月曜 9:00 AM | 顧客がチケットを作成 | → New |
| 月曜 2:00 PM | エージェントがパブリック返信 | → Open |
| 月曜 3:30 PM | 顧客が返信 | → Open |
| 月曜 4:00 PM | エージェントがパブリック返信 | → Pending |
| 火曜 10:00 AM | 顧客が返信 | → Open |
| 火曜 11:00 AM | エージェントが Engineering からの情報を必要とする | → On-hold |
| 水曜 2:00 PM | Engineering が回答を提供 | → Open |
| 水曜 2:30 PM | エージェントがパブリック返信 | → Solved |

**算出メトリクス:**

| メトリクス | 計算 | 値 |
|-----------|------|----|
| **FRT** | 月 9:00 AM → 月 2:00 PM (最初のエージェント返信) | 5 時間 |
| **NRT** | 月 3:30 PM → 月 4:00 PM (顧客応答後のエージェント返信) | 30 分 |
| **Requester wait time** | New + Open + On-hold の時間<br>• New: 5 時間<br>• Open: 合計 8.5 時間<br>• On-hold: 27.5 時間 | **41 時間** |
| **Agent work time** | New + Open の時間<br>• New: 5 時間<br>• Open: 8.5 時間 | **13.5 時間** |
| **Agent wait time** | Pending の時間<br>• 月 4:00 PM → 火 10:00 AM | **18 時間** |
| **On-hold time** | On-hold の時間<br>• 火 11:00 AM → 水 2:00 PM | **27.5 時間** |
| **Total resolution time** | 月 9:00 AM → 水 2:30 PM<br>(New + Open + Pending + On-hold) | **53.5 時間** |
| **Periodic update** | エージェントのパブリック返信の間の時間<br>• 月 2:00 PM → 月 4:00 PM = 2 時間<br>• 月 4:00 PM → 水 2:30 PM = 46.5 時間 | 最新: **46.5 時間** |
| **Pausable update** | New/Open/On-hold 中のエージェント返信間の時間<br>• 月 2:00 PM → 月 4:00 PM (Open 中) = 2 時間<br>• 火 10:00 AM → 水 2:30 PM (Open + On-hold 中) = 28.5 時間 | 最新: **28.5 時間** |

**主な違いの説明:**

- **Periodic update** はエージェント返信間の全時間をカウントします。Pending ステータス (顧客待ち時) も含みます
- **Pausable update** は Pending ステータスを除外し、New/Open/On-hold (チケットがエージェント/会社側にある時) の時間のみをカウントします
- **Total resolution time** (53.5 時間) = Agent work (13.5h) + Agent wait (18h) + On-hold (27.5h) - 一部重複が調整されます
- **Requester wait time** (41 時間) = 顧客が私たちを待っている全時間 (New + Open + On-hold)

## 関連資料

- [Understanding which SLA metrics you can measure](https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies)
- [About native Support time duration metrics](https://support.zendesk.com/hc/en-us/articles/4408834848154-About-native-Support-time-duration-metrics)
