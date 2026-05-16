---
title: 休暇と祝日
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/oncall/time-off-and-holidays/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-04T15:31:56+03:00"
---

## 休暇または PTO の計画

### ローテーションリーダーへの伝達

休暇を取得する十分前に:

1. Incident.io のオンコールスケジュールを確認する
2. その期間にスケジュールされている場合、できるだけ早くローテーションリーダーに伝える。#sscs-tier2-rotation-coordination で、レポート先のマネージャーまたは @adil.farrukh、@jpr0c、@mmishaev (ローテーションリーダー) に連絡できます。
3. ローテーションリーダーは以下のいずれかを行います:
   - 同じ地域で交換できる人を見つける
   - [オーバーライド](https://help.incident.io/articles/2815264840-cover-me%2C-overrides-and-schedules) を作成する (そのスロットを再割り当て)
   - 一時的にローテーションを調整する

**どのくらい前に通知すべき?** 理想的には 2-4 週間前、緊急時は少なくとも 1 週間前 (事前通知ができないイベントを除く)。

### Incident.io でのオーバーライドの使用

**オーバーライド** は、誰かが対応できないときにシフトを再割り当てする方法です。シフトを引き継いでくれる人を見つける支援が必要な場合は、#sscs-tier2-rotation-coordination で交換を依頼してください。

**できること:**

- 自分のシフトから自分を削除する
- 自分の地域の別の人に割り当てる

## 祝日

[祝日](/handbook/engineering/infrastructure-platforms/incident-management/on-call/holiday-coverage-planning/) に関する一般的なオンコールドキュメントを参照してください。

### 地域に関する考慮事項

SSCS ローテーションは 3 つの地域 (APAC、EMEA、AMER) をカバーするため、祝日は大きく異なります:

- **APAC エンジニア** には、EMEA/AMER が遵守しない祝日がある場合があります
- **EMEA エンジニア** には、APAC/AMER が遵守しない祝日がある場合があります
- **AMER エンジニア** には、APAC/EMEA が遵守しない祝日がある場合があります

**あなたの責任:** スケジュールを十分前に確認し、自国の祝日中にスケジュールされている場合はローテーションリーダーに通知する。

### 祝日のカバレッジを見つける

祝日があるとき:

1. Incident.io で **スケジュールを確認する**
2. できるだけ早く **ローテーションリーダーに通知する**
3. その祝日を遵守しない地域内の人と **交換を見つける**
4. Incident.io で **オーバーライドを作成する** か、ローテーションリーダーに依頼する

**オランダの例外:** オランダのチームメンバーは、少なくとも 2 営業日前にローテーションリーダーに通知し、Works Council との合意に従って、カバレッジを見つけるのは (チームメンバーではなく) ローテーションリーダーの責任です。

## PTO 中に割り当てられたらどうなる?

これはミスです。以下のように対応します:

1. **見逃しっぱなしにしない。** すぐに誰かに伝える。
2. ローテーションリーダーまたはマネージャーに連絡する
3. できるだけ早くオーバーライドを作成してもらう

## クロスリージョンのカバレッジ

場合によっては、祝日中に地域の人員が不足している場合:

- ローテーションリーダーは他の地域からのボランティアを求めることがあります
- これはオプションで、適切に補償されるべきです
- カバレッジは可能な限りボランティアの業務時間に合わせるべきです

## 事前計画

祝日カバレッジを容易にするために:

- 年初にチームと **祝日カレンダーを共有する**
- カバレッジを確保するために地域内のチームメイトと **調整する**
- カバレッジが必要なチームメイトを助けるために、可能な限り **柔軟である**
- 最後まで待つのではなく、**早めに交換を計画する**

### 関連ページ

- [カバレッジとスケジューリング](/handbook/engineering/development/sec/software-supply-chain-security/oncall/coverage-and-scheduling) — Incident.io でスケジュールを確認する
- [ローテーションへの参加と離脱](/handbook/engineering/development/sec/software-supply-chain-security/oncall/joining-and-leaving-rotation) — ローテーションの公平性原則を理解する
- [ローテーションリーダー](/handbook/engineering/development/sec/software-supply-chain-security/oncall/rotation-leader) — カバレッジを手配するためにローテーションリーダーに連絡する
