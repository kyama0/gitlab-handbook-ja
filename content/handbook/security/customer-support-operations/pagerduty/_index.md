---
title: 'PagerDuty'
description: 'PagerDuty に関するドキュメント'
date: 2026-01-07
upstream_path: /handbook/security/customer-support-operations/pagerduty/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab において Customer Support Operations が PagerDuty とどのように関わり利用しているかを説明します。

## PagerDuty について

### PagerDuty とは

PagerDuty は SaaS ベースのインシデント管理プラットフォームで、IT・DevOps・セキュリティの各チームがアラートを自動化し、対応をオーケストレーションし、運用に対するリアルタイムな可視性を提供することで、ビジネスに影響を与える問題を予防・解決するのを支援します。これにより、適切な人に適切なタイミングで通知が届くようになり、ダウンタイムを最小化し、顧客体験を改善します。PagerDuty は監視ツールからアラートを収集し、オンコールスケジュールとエスカレーションポリシーを使用し、インシデントの要約や自動化のために AI も提供します。

### PagerDuty 内のアイテムの管理方法

私たちは現在、PagerDuty 内のすべてのアイテムを PagerDuty 自体で管理しています。

Customer Support Operations のページング (呼び出し) や Customer Support Operations のオンコール業務についての情報は、[オンコールドキュメント](/handbook/security/customer-support-operations/pagerduty/oncall) を参照してください。

## Customer Support Operations の PagerDuty 構成要素

### スケジュール

私たちは現在、以下のスケジュールを利用しています。

- [Customer Support Operations](https://gitlab.pagerduty.com/schedules/PXYIFEP)
  - タイムゾーン: UTC
  - レイヤー:
    - AMER
      - ローテーションタイプ: 週次
      - ハンドオフ時刻: 月曜 04:00 PM
      - オンコールシフトを以下の時間帯に制限:
        - 04:00 PM から 12:00 AM まで
    - APAC 1
      - ローテーションタイプ: 週次
      - ハンドオフ時刻: 月曜 12:00 AM
      - オンコールシフトを以下の時間帯に制限:
        - 12:00 AM から 4:00 AM まで
    - APAC 2
      - ローテーションタイプ: 週次
      - ハンドオフ時刻: 月曜 04:00 AM
      - オンコールシフトを以下の時間帯に制限:
        - 04:00 AM から 08:00 AM まで
    - EMEA
      - ローテーションタイプ: 週次
      - ハンドオフ時刻: 月曜 08:00 AM
      - オンコールシフトを以下の時間帯に制限:
      - 08:00 AM から 04:00 PM まで

### エスカレーションポリシー

私たちは現在、以下のエスカレーションポリシーを利用しています。

- [Customer Support Operations](https://gitlab.pagerduty.com/escalation_policies/PKNCI0R)
  - インシデントがトリガーされた直後
  - 以下のユーザーまたはスケジュールに通知
    - [Customer Support Operations](https://gitlab.pagerduty.com/schedules#PXYIFEP)
    - 10 分後にエスカレーション
  - 以下のユーザーまたはスケジュールに通知
    - Jason
    - 10 分後にエスカレーション
  - 以下のユーザーまたはスケジュールに通知
    - Dylan
    - 10 分後にエスカレーション
  - 誰も承認しない場合、このポリシーを 5 回繰り返す

### サービス

私たちは現在、以下のサービスを利用しています。

- [Customer Support Operations](https://gitlab.pagerduty.com/service-directory/PIETVIG)
  - インテグレーション
    - なし
  - ワークフロー
    - なし
  - 設定
    - 割り当てと通知
      - エスカレーションポリシーに割り当て: [Customer Support Operations](https://gitlab.pagerduty.com/escalation_policies/PKNCI0R)
      - 対応者への通知方法: 高緊急度通知、必要に応じてエスカレーション
      - インシデントが対応されない場合、自動的に:
        - すべてのオプションをチェックしない
    - ノイズの低減
      - 現在、このサービスではアラートをグループ化していません。
    - 対応者とステークホルダーの調整
      - カンファレンスブリッジダイアルイン番号: なし
      - カンファレンスブリッジミーティング URL: なし
    - イベント管理
      - 未使用
    - 修復
      - ドキュメントリンク: このサービスにはドキュメントリンクは登録されていません
      - カスタムインシデントアクション: このサービスにはカスタムインシデントアクションはありません
    - サービス依存関係
      - なし
