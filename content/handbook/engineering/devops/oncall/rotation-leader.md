---
title: ローテーションリーダー
upstream_path: /handbook/engineering/devops/oncall/rotation-leader/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

DevOps Tier 2 オンコールプログラムのローテーションリーダーへようこそ。ローテーションリーダーとして、あなたはチームのオンコールローテーションの健全性・公平性・効果の責任を担います。このガイドでは、主な責任事項とその遂行方法を説明します。

## 役割と責任

ローテーションリーダーには以下が求められます：

- [Infrastructure Platform の期待に沿って行動する](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#responsibilities-for-rotation-leaders)
- DevOps オンコールローテーションを調整する（シフトの追加と削除）
- [適切なカバレッジを提供する](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#coverage-expectations)のに十分なチームメンバーを確保する
- チームメンバーが自分の役割を理解できるようにする
- エスカレーションパスでのエスカレーション窓口として機能する
- ローテーションの効果について定期的なレビューを実施する

## スケジュール管理

### ローテーションの構築と維持

[一般的なガイダンスが提供されていますが](/handbook/engineering/infrastructure-platforms/incident-management/on-call/#how-many-people-are-needed-to-set-up-a-rotation)、あなたはローテーションの全体的な構造と構成に責任を持ちます：

- ワークロードの平等な分配と柔軟性のために、地域（APAC、EMEA、AMER）ごとに8名をターゲットとする（最低6名）
- 12名を超えたらチーム構成を見直す
- エンジニアは6〜12週間に1週間オンコールになる（年間22〜43日）
- チームメンバーが計画を立てられるよう、少なくとも1か月前にスケジュールを公開する

### スケジュール

**AMER・EMEA・APAC の DevOps ローテーションを含むスケジュールを公開・管理・閲覧するには：**

- Incident.io をスケジューリングの唯一の情報源として使用する
  - [ローテーションに参加している全チームメンバーをここで確認](https://app.incident.io/gitlab/catalog/Schedule/01K611MG8T5CW874Q5JZER3H0Z)
  - [オンコールスケジュールをここで確認](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z)
  - [エスカレーションに含まれる全マネジメントメンバーをここで確認](https://app.incident.io/gitlab/catalog/Schedule/01K611ZT9YX2PSA8WAMEP6A66G)
  - [エスカレーションスケジュールをここで確認](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G)
- 誰かがカバレッジを必要とする場合はオーバーライドを作成する
- スケジュール変更を影響のあるチームメンバーに速やかに伝える
- 可能であれば3〜6か月先のスケジューリングを追跡する

### カバレッジ時間

[カバレッジの期待についてはこちらを参照してください。](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#coverage-expectations)

### 祝日

[こちらを参照してください。](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#public-holidays)

## 定期レビュー

四半期ごとに以下のレビューを実施します：

- [追加の SME が必要か？](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#how-to-determine-if-we-need-a-specific-set-of-subject-matter-experts-to-form-a-tier-2-rotation)
- 各人が何回オンコールになったか？4週間に1回を超えてオンコールになった人はいるか？シフトは公平に分配されたか？
- シフト中にチームメンバーが何回ページを受けたか？
- バーンアウトまたは持続不可能な負荷を報告した人はいるか？
- 各地域の[カバレッジと応答時間の目標](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#metrics-that-can-be-reviewed-to-assist-in-this-decision)を達成したか？
- ページが少なすぎるサービス（潜在的なカバレッジギャップ）または多すぎるサービス（アラート疲れ）はあるか？
- 解決時間: 宣言から解決までどのくらいかかったか？
- エスカレーションの内容・発信者・理由にパターンはあるか？
- エスカレーションは最初の試みで正しいチームに届いているか（目標90%以上）？

## 新規チームメンバーのオンボーディング

### ローテーションへの追加

[参照: ローテーションへの追加方法](/handbook/engineering/devops/oncall/joining-and-leaving-rotation/#ローテーションへの追加方法)

### 必須オンボーディングリソース

[新しいチームメンバーが最初のシフト情報にアクセスし理解していることを確認してください。](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#resource-locations)

## イテレーション

エスカレーションが来るたびに、ドキュメントのギャップを特定します：

- Tier 2 エンジニアがエスカレーションする際、どんな情報があればより早く解決できたかを聞く
- インシデント後のレトロスペクティブを使ってランブックのギャップを特定する
- 頻繁なエスカレーションパターンに対するランブックの作成・更新を優先する
- インシデントがランブックを参照しているか監視する
- 使われていないランブックを特定し、更新または削除する
- エスカレーションパターンに基づいて新しいランブックを作成する
- 一般的なインシデントの80%をカバーすることを目指す

S1/S2 インシデント（または重大な S3/S4 インシデント）については：

- エスカレーションされた S1/S2 インシデントの100%に正式なレトロスペクティブまたは書面記録があることを確認する
- システムの改善に焦点を当て、責任追及しない形でレトロスペクティブをリードする
- 学んだことと改善できることをドキュメント化する
- アクションアイテムを追跡し、完了をフォローアップする

## クイックリファレンス: 主な責任

**スケジュール管理：**

- ローテーションに6〜12名を維持する
- 1か月以上前にスケジュールを公開する
- 四半期ごとに効果を追跡する
- 個人のローテーション頻度を最大4週間に1回に制限する

**オンボーディング：**

- 新メンバーを Incident.io に追加する
- ツールのアクセス権とドキュメントを提供する
- 最初のシフトをサポートする
- トレーニングの完了を確認する

**ワークロード追跡：**

- シフトごとのページ数を監視する
- インシデント対応メトリクスを追跡する
- バーンアウトの兆候を注視する
- 四半期ごとに効果レビューを実施する

**チームサポート：**

- スケジュールの競合とスワップを支援する
- 不在のためのオーバーライドを作成する
- 持続不可能な負荷に対処する
- インシデント中のエスカレーションをサポートする

**改善：**

- ランブックのギャップを特定する
- 責任追及しないレトロスペクティブをリードする
- メトリクスとトレンドを追跡する
- 学びをチームと共有する

### 関連ページ

- [ローテーションへの参加と脱退](/handbook/engineering/devops/oncall/joining-and-leaving-rotation) — チームメンバーの追加・削除を管理する
- [カバレッジとスケジューリング](/handbook/engineering/devops/oncall/coverage-and-scheduling) — スケジュールの管理と公開
- [Tier 2 オンコールプログラムの成功測定](/handbook/engineering/devops/oncall/measuring-success) — ローテーションの健全性メトリクスを追跡する
- [コミュニケーションとカルチャー](/handbook/engineering/devops/oncall/communication-and-culture) — ローテーションで責任追及しないカルチャーを育む
