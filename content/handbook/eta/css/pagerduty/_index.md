---
title: 'Pagerduty'
description: 'Pagerduty のドキュメント'
upstream_path: "/handbook/eta/css/pagerduty/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:15:29+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、GitLab で Customer Support Systems が Pagerduty をどのように使用し、運用するかを説明します。

## Pagerduty を理解する

### Pagerduty とは

PagerDuty は SaaS ベースのインシデント管理プラットフォームで、アラートの自動化、対応のオーケストレーション、運用のリアルタイム可視化を提供することで、IT、DevOps、セキュリティチームがビジネスに影響する問題を防止および解決できるようにします。適切な人に適切なタイミングで通知し、ダウンタイムを最小限に抑えて顧客体験を向上させます。監視ツールからアラートを収集し、オンコールスケジュールとエスカレーションポリシーを使用するとともに、インシデントの要約と自動化に AI を提供します。

### Pagerduty で項目を管理する方法

現在、すべての Pagerduty 項目は Pagerduty 内で管理しています。

Customer Support Systems のページングまたはオンコール担当に関する情報については、[オンコールのドキュメント](/handbook/eta/css/pagerduty/oncall)を参照してください。

## Customer Support Systems の Pagerduty コンポーネント

### スケジュール

現在、次のスケジュールを使用しています:

- [Customer Support Operations](https://gitlab.pagerduty.com/schedules/PXYIFEP)
  - タイムゾーン: UTC
  - レイヤー:
    - AMER
      - ローテーションタイプ: 毎週
      - 引き継ぎ時刻: 月曜日 04:00 PM
      - オンコールシフトを特定の時刻に制限:
        - 04:00 PM から 12:00 AM
    - APAC 1
      - ローテーションタイプ: 毎週
      - 引き継ぎ時刻: 月曜日 12:00 AM
      - オンコールシフトを特定の時刻に制限:
        - 12:00 AM から 4:00 AM
    - APAC 2
      - ローテーションタイプ: 毎週
      - 引き継ぎ時刻: 月曜日 04:00 AM
      - オンコールシフトを特定の時刻に制限:
        - 04:00 AM から 08:00 AM
    - EMEA
      - ローテーションタイプ: 毎週
      - 引き継ぎ時刻: 月曜日 08:00 AM
      - オンコールシフトを特定の時刻に制限:
      - 08:00 AM から 04:00 PM

### エスカレーションポリシー

現在、次のエスカレーションポリシーを使用しています:

- [Customer Support Operations](https://gitlab.pagerduty.com/escalation_policies/PKNCI0R)
  - インシデントがトリガーされた直後
  - 次のユーザーまたはスケジュールに通知
    - [Customer Support Operations](https://gitlab.pagerduty.com/schedules#PXYIFEP)
    - 10 分後にエスカレーション
  - 次のユーザーまたはスケジュールに通知
    - Jason
    - 10 分後にエスカレーション
  - 次のユーザーまたはスケジュールに通知
    - Dylan
    - 10 分後にエスカレーション
  - 誰も確認しない場合、このポリシーを 5 回繰り返す

### サービス

現在、次のサービスを使用しています:

- [Customer Support Operations](https://gitlab.pagerduty.com/service-directory/PIETVIG)
  - 統合
    - なし
  - ワークフロー
    - なし
  - 設定
    - 割り当てと通知
      - エスカレーションポリシーへの割り当て: [Customer Support Operations](https://gitlab.pagerduty.com/escalation_policies/PKNCI0R)
      - 対応者への通知方法: 高緊急度の通知。必要に応じてエスカレーション
      - インシデントに対応しない場合の自動処理:
        - すべてのオプションのチェックを解除
    - ノイズを軽減
      - 現在、このサービスのアラートはグループ化していません。
    - 対応者とステークホルダーを調整
      - 会議ブリッジのダイヤルイン番号: なし
      - 会議ブリッジの会議 URL: なし
    - イベント管理
      - 使用しない
    - 修復
      - ドキュメントリンク: このサービスにはドキュメントリンクがありません
      - カスタムインシデントアクション: このサービスにはカスタムインシデントアクションがありません
    - サービスの依存関係
      - なし
