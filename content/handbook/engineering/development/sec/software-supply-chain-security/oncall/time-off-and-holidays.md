---
title: 休暇と祝日
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/oncall/time-off-and-holidays/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## 休暇または PTO の計画

### ローテーションリーダーへの連絡

休暇を取る前に:

1. Incident.io でオンコールスケジュールを確認する
2. その期間にスケジュールされている場合は、すぐにローテーションリーダーに伝えましょう。#sscs-tier2-rotation-coordination で担当マネージャーまたはローテーションリーダーの @adil.farrukh、@ajaythomasinc、@ken.mcdonald に連絡してください。
3. ローテーションリーダーは以下のいずれかを行います:
   - 同じ地域で交換してくれる人を見つける
   - [オーバーライド](https://help.incident.io/articles/2815264840-cover-me%2C-overrides-and-schedules)を作成する（そのスロットを再割り当てする）
   - 一時的にローテーションを調整する

**どのくらい前に連絡すべきか？** 理想的には2〜4週間前ですが、緊急事態の場合は少なくとも1週間前（イベントが事前通知を許さない場合を除く）。

### Incident.io でのオーバーライドの使用

**オーバーライド**とは、誰かが対応できないときにシフトを再割り当てする方法です。シフトを引き継いでくれる人を探す必要がある場合は、#sscs-tier2-rotation-coordination でスワップを依頼してください。

**以下が可能です:**

- 自分のシフトから外れる
- 同じ地域の別の人に割り当てる

## 祝日

一般的なオンコールドキュメントの[祝日](/handbook/engineering/infrastructure-platforms/incident-management/on-call/holiday-coverage-planning/)を参照してください。

### 地域ごとの考慮事項

SSCS ローテーションは3つの地域（APAC、EMEA、AMER）をカバーするため、祝日は大きく異なります:

- **APAC のエンジニア**は EMEA/AMER が観察しない祝日を持つことがある
- **EMEA のエンジニア**は APAC/AMER が観察しない祝日を持つことがある
- **AMER のエンジニア**は APAC/EMEA が観察しない祝日を持つことがある

**あなたの責任:** 事前にスケジュールを確認し、あなたの国の祝日にスケジュールされている場合はローテーションリーダーに通知すること。

### 祝日のカバレッジを見つける

祝日がある場合:

1. Incident.io で**スケジュールを確認する**
2. できるだけ早く**ローテーションリーダーに通知する**
3. その祝日を観察しない地域の誰かと**スワップを見つける**
4. Incident.io で**オーバーライドを作成する**か、ローテーションリーダーに依頼する

**オランダの例外:** オランダのチームメンバーは少なくとも2営業日前にローテーションリーダーに通知する必要があり、労働協議会との合意に従い、チームメンバーではなくローテーションリーダーが代替カバーを見つける責任があります。

## PTO 期間にスケジュールされている場合

これはミスです。以下を実施してください:

1. **そのままにしないでください。** すぐに誰かに伝える。
2. ローテーションリーダーまたはマネージャーに連絡する
3. できるだけ早くオーバーライドを作成してもらう

## クロス地域カバレッジ

祝日中に地域のスタッフが不足している場合:

- ローテーションリーダーが他の地域からのボランティアを募ることがある
- これは任意であり、適切に補償されるべき
- カバレッジは可能な限りボランティアの勤務時間に合わせるべき

## 事前計画

祝日カバレッジを容易にするために:

- 年初に**祝日カレンダーをチームと共有する**
- カバレッジを確保するために地域のチームメイトと**調整する**
- カバレッジが必要なチームメイトを助けるために可能な限り**柔軟に対応する**
- 最後の瞬間まで待たずに**早めにスワップを計画する**

### 関連ページ

- [カバレッジとスケジューリング](/handbook/engineering/development/sec/software-supply-chain-security/oncall/coverage-and-scheduling) — Incident.io でスケジュールを確認する
- [ローテーションへの参加と離脱](/handbook/engineering/development/sec/software-supply-chain-security/oncall/joining-and-leaving-rotation) — ローテーションの公平性原則を理解する
- [ローテーションリーダー](/handbook/engineering/development/sec/software-supply-chain-security/oncall/rotation-leader) — カバレッジの手配についてローテーションリーダーに連絡する
