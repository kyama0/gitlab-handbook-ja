---
title: カバレッジとスケジューリング
upstream_path: /handbook/engineering/devops/oncall/coverage-and-scheduling/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## スケジュールはどこで確認できますか？

オンコールスケジュールは **Incident.io** に記載されています。これが唯一の情報源です。

### スケジュール

**AMER・EMEA・APAC の DevOps ローテーションを含むスケジュールを公開・管理・閲覧するには：**

- [ローテーションに参加している全チームメンバーをここで確認](https://app.incident.io/gitlab/catalog/Schedule/01K611MG8T5CW874Q5JZER3H0Z)
- [オンコールスケジュールをここで確認](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z)
- [エスカレーションに含まれる全マネジメントメンバーをここで確認](https://app.incident.io/gitlab/catalog/Schedule/01K611ZT9YX2PSA8WAMEP6A66G)
- [エスカレーションスケジュールをここで確認](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G)

また、以下のことも可能です：

- 自分のシフトのみを表示するフィルタリング（フィルターオプションを探してください）
- [カレンダー通知](https://help.incident.io/articles/1494747929-how-do-i-sync-on-call-schedules-to-google-calendar)の設定
- 今週・来週・それ以降のオンコール担当者の確認

## スケジュールの変更

典型的なスケジュールには以下が表示されます：

- **あなたの名前またはイニシャル**（オンコール中のとき）
- **シフトの日時**
- **ローテーションの「スロット」**（どの週を担当しているか）
- **前後のオンコール担当者**（引き継ぎに役立ちます）

状況によってスケジュールの変更が必要になることがあります：

- 祝日や計画的・突発的な休暇
- 病欠でカバレッジが必要な場合
- ビジネスの優先事項の変化
- スケジュールのエラー

**そのような場合：**

1. 通知が届きます（通常 Slack またはローテーションリーダーから）
2. 別の人とシフトを交換することがあります（[オーバーライドを使用](#オーバーライドを使う)）
3. または、[オーバーライド](https://help.incident.io/articles/2815264840-cover-me%2C-overrides-and-schedules)が作成されてその期間が再割り当てされます
4. 緊急事態でない限り、合理的な事前通知を受けるはずです。休暇を取る際はシフトのスケジュール変更のために、理想的には2〜4週間前に通知できるようにしてください。

通常、オンコールスケジュールは以下の期間先まで確認できます：

- Incident.io では **3〜6か月先**まで
- これにより休暇や大規模プロジェクト等の計画が立てやすくなります
- 都合が悪い場合は、早めにローテーションリーダーに知らせてください

### オーバーライドを使う

**オーバーライド**とは、担当者がシフトに対応できない場合にシフトを再割り当てする方法です。シフトを引き受けてくれる人を探す際は、スワップ用 Slack チャンネル（[#tier-2-devops-rotation-swaps](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0)）でスワップをお願いしましょう。

**シフトから自分を外して別の人を追加するには：**

1. Incident.io から[スケジュールにアクセス](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z)します（または対象のスケジュール）
1. 右上の「Create override」ボタンをクリックします。「今すぐ」から自分をオーバーライドとして追加する設定が自動入力されます。下部のセクションで詳細を調整するか、上部に説明を入力すると自動更新されます。内容に問題なければ「Save override」ボタンをクリックします。
1. カレンダービューで特定のシフトを見つけてクリックすることで、そのシフトに対するオーバーライドを作成することもできます。他の人のシフトをクリックすると、自分をオーバーライドとして追加するビューが表示されます。自分のシフトをクリックすると「Request cover」ビューが表示されます。ビューの下部にある「Create an override」リンクをクリックしてください。
1. 自分を削除して、代わりにカバーしてくれる人を追加し、「Save override」ボタンをクリックします。注意: カバーをリクエストするだけでは**オーバーライドは作成されません**。カバレッジが確保されオーバーライドが追加されたことを確認するのはあなた自身の責任です！

## 休暇中にシフトが割り当てられた場合は？

これはミスです。以下の手順で対応してください：

1. **そのまま無視しないでください。** すぐに誰かに連絡します。
2. [ローテーションリーダー](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G?startTime=2025-10-13T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline)またはマネージャーに連絡します
3. できるだけ早くオーバーライドを作成してもらいます

## 複数のローテーション

ローテーションには複数の種類があります：

- **Tier 2 On Call** — DevOps（Rails）に特化した Tier 2 SME オンコール
- **IMOC** — インシデントマネージャーオンコール

これらは**同時に**行うべきではありません。IMOC ローテーションに参加している場合は Tier 2 ローテーションに参加すべきではなく、逆も同様です。

### 複数のローテーションに参加している場合

現在 IMOC ローテーションに参加していて Tier 2 に選ばれた場合は以下の手順を実施してください：

- [tier2-sme-rollout](https://gitlab.enterprise.slack.com/archives/C089VUTQLV6) Slack チャンネルで、IMOC ローテーションへの影響なしにオフボーディングできることを確認し、問題なければ IMOC ローテーションからのオフボーディングを進めます
- Tier 2 ローテーションにオンボーディングします

### 関連ページ

- [ローテーションへの参加と脱退](/handbook/engineering/devops/oncall/joining-and-leaving-rotation) — 地域ごとのローテーション頻度を理解する
- [DevOps ローテーションリーダー](/handbook/engineering/devops/oncall/rotation-leader) — スケジュール変更についてローテーションリーダーに連絡する
