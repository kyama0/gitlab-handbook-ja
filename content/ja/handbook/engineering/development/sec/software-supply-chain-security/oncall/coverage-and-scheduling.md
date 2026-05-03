---
title: カバレッジとスケジューリング
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/oncall/coverage-and-scheduling/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## スケジュールはどこで確認できますか？

オンコールスケジュールは **Incident.io** にあります。これが唯一の情報源です。

### アクセス方法

1. Incident.io にログインする
2. **Rotations** または **Schedule** に移動する
3. SSCS チームのローテーションを見つける

また、以下のことも可能です:

- フィルターで自分のシフトだけを表示する（フィルターオプションを探してください）
- [カレンダー通知](https://help.incident.io/articles/1494747929-how-do-i-sync-on-call-schedules-to-google-calendar)を設定する
- 今週・来週・それ以降の担当者を確認する

## スケジュールの読み方

一般的なスケジュールには以下が表示されます:

- **あなたの名前またはイニシャル** — 担当中の場合
- **シフトの日時**
- **ローテーションの「スロット」**（どの週を担当するか）
- **前後の担当者**（引き継ぎに役立ちます）
- **タイムゾーンカバレッジ**（APAC、EMEA、AMER）

## SSCS の 24x5 カバレッジモデルを理解する

### 24x5（24時間、5日間）

SSCS ローテーションは月曜日〜金曜日の24時間を対象としています。カバレッジは3つの8時間地域ブロックに分かれています:

- **APAC**（ベストエフォート方式）: UTC 23:00 - 07:00
- **EMEA**: UTC 07:00 - 15:00
- **AMER**: UTC 15:00 - 23:00

担当の8時間ブロック中に対応することが求められます。このブロックは通常の勤務時間にほぼ合致するよう設計されています。
居住地（APAC、EMEA、AMER）に基づいて、タイムゾーンに合った地域に割り当てられます。
これにより、通常の勤務時間中に常に知識のある人が対応できるようになっています。

## ドメインカバレッジ

SSCS ローテーションは3つのドメインをカバーします:

- **認証**（group::authentication）
- **認可**（group::authorization）
- **パイプラインセキュリティ**（group::pipeline security）

特定のドメインを専門としていても、すべての SSCS の問題に対して初期トリアージを提供し、必要に応じてドメインスペシャリストにエスカレーションすることが期待されます。

## 複数のローテーション

複数の種類のローテーションがあります:

- **Tier 2 On Call** — SSCS に特化した Tier 2 SME オンコール
- **IMOC** — [インシデントマネージャーオンコール](/handbook/engineering/infrastructure-platforms/incident-management/incident-manager-onboarding/)
- **Dev OnCall** — [Dev オンコール](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/)

これらは**同時に**担当してはいけません。IMOC ローテーションに入っている場合は Tier 2 ローテーションには入れず、その逆も同様です。

### 複数のローテーションに入っている場合

現在 IMOC ローテーションに入っていて、Tier 2 に選ばれた場合は以下を実施してください:

- オフボーディングが IMOC ローテーションに悪影響を与えないことを [tier2-sme-rollout](https://gitlab.enterprise.slack.com/archives/C089VUTQLV6) Slack チャンネルで確認し、問題なければ IMOC ローテーションからオフボーディングを進める
- Tier 2 ローテーションにオンボーディングする

## シフトが公平に配分される仕組み

ローテーションリーダーは以下を考慮します:

- **均等な頻度** — 全員がほぼ同じ数のシフトを担当する
- **予測可能性** — スケジュールを事前に公開して計画を立てやすくする
- **過去の負荷** — 同じ人が連続してオンコールにならないようにする
- **地域のバランス** — 各タイムゾーン内での公平な配分を確保する

## シフトが再割り当てになった場合

状況によっては変更が必要になることがあります:

- 誰かが病欠してカバレッジが必要になる
- ビジネス上の優先事項が変わる
- スケジュールにエラーがある

**この場合:**

1. 通知が届きます（通常 Slack やローテーションリーダーから）
2. 誰かとスワップする場合があります
3. または、その期間を再割り当てするための[オーバーライド](https://help.incident.io/articles/2815264840-cover-me%2C-overrides-and-schedules)が作成される場合があります
4. 緊急事態でない限り、適切な事前通知を受けるはずです

## 将来のカバレッジを確認する

オンコールスケジュールは通常:

- Incident.io で **3〜6ヶ月前** に確認できます
- これにより休暇や大きなプロジェクトの計画を立てやすくなります
- 都合の悪い日程がある場合は、早めにローテーションリーダーに伝えましょう

### 関連ページ

- [ローテーションへの参加と離脱](/handbook/engineering/development/sec/software-supply-chain-security/oncall/joining-and-leaving-rotation) — 地域ごとのローテーション頻度を理解する
- [休暇と祝日](/handbook/engineering/development/sec/software-supply-chain-security/oncall/time-off-and-holidays) — スケジュールされた休暇を管理する
- [ローテーションリーダー](/handbook/engineering/development/sec/software-supply-chain-security/oncall/rotation-leader) — スケジュール変更についてローテーションリーダーに連絡する
