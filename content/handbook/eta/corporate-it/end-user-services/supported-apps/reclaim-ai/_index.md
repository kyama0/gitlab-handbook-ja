---
title: Reclaim.ai
description: Reclaim.ai の利用、セキュリティ制御、コンプライアンス要件
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/reclaim-ai/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

Reclaim.ai は、スケジュールと時間管理の最適化を支援する AI 搭載のカレンダー管理・生産性向上ツールです。このプラットフォームはカレンダーシステムと統合し、集中時間の自動スケジュール、タスク管理、ミーティングスケジュールの最適化を行います。

## セキュリティとコンプライアンス要件

Reclaim.ai を使用する GitLab チームメンバーとして、以下のセキュリティ制御とコンプライアンス要件を理解し、遵守する責任があります:

### 目次

- [データ分類](#data-classification)
- [記録システムの維持](#system-of-record-maintenance)
- [マネージャーの責任](#manager-responsibilities)
- [災害復旧と事業継続性](#disaster-recovery-and-business-continuity)
- [セキュリティ設定の変更](#security-configuration-changes)
- [セキュリティインシデントの報告](#security-incident-reporting)
- [データの正確性と完全性](#data-accuracy-and-completeness)
- [追加サポート](#additional-support)

## データ分類 {#data-classification}

**Reclaim.ai は Orange データを処理できます**

Reclaim.ai の利用が GitLab のデータ分類および取り扱いポリシーに沿っていることを確認してください。機密の顧客情報やその他の RED データを含めないでください。

## 記録システムの維持 {#system-of-record-maintenance}

**Reclaim.ai はカレンダーを補強できますが、責任は引き続きあなたにあります！**

- GitLab の主要なカレンダーシステム（Google Calendar）は、スケジュール情報の信頼できる情報源であり続けます
- Reclaim.ai は主要な記録システムではなく、生産性向上ツールとして使用する必要があります
- Reclaim.ai と主要なカレンダーシステム間で同期される情報が正確であることを定期的に確認します
- 重要なスケジュールとタスク情報のバックアップコピーを Reclaim.ai 外に保持します

## マネージャーの責任 {#manager-responsibilities}

**マネージャーの場合: 関与していることを確認してください**

- マネージャーは、チームメンバーが適切な Reclaim.ai の利用ガイドラインを理解していることを確認する必要があります
- チームメンバーが GitLab のポリシーに従って Reclaim.ai を利用していることを確認するため、利用状況を監視およびレビューします
- 事業部門固有の懸念を考慮し、Reclaim.ai を通じて管理すべき情報とすべきでない情報の種類をチームメンバーとともに決定します
- チームのアクセスと利用パターンを定期的にレビューします

## 災害復旧と事業継続性 {#disaster-recovery-and-business-continuity}

Reclaim.ai のユーザーは、次を行う必要があります:

- Reclaim.ai だけに依存しない代替のスケジューリングおよび生産性ワークフローを維持します
- 重要なミーティングとタスクも GitLab の主要システム（Google Calendar、GitLab Issues など）で追跡されるようにします

## セキュリティ設定の変更 {#security-configuration-changes}

- IT EUS はセキュリティおよび設定変更を承認できます。すべてのリクエストは通常の[アクセスリクエストプロセス](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests/)を経由する必要があります
- IT EUS は、データ伝送に影響する重要な設定変更を行う前に Security チームと調整する必要があります
- 変更を行うすべての人は、監査目的で設定変更に関する標準ワークフローに従う必要があります

## セキュリティインシデントの報告 {#security-incident-reporting}

### 必要な即時対応

Reclaim.ai に関するセキュリティインシデントが疑われる場合:

1. **直ちに** Reclaim.ai パスワードを変更し、アクティブなセッションをすべて取り消します
2. **直ちに** 次の方法で GitLab Security チームに通知します:
   - Slack: `#security-help` チャンネル
   - [Security Incident Response 手順](/handbook/security/security-operations/sirt/sec-incident-response/)に従う

### 報告するインシデントの種類

- 侵害された Reclaim.ai ユーザーアカウント
- カレンダーまたはタスクデータへの不正アクセス
- Reclaim.ai アカウントでの不審なアクティビティ
- 潜在的なデータ侵害または漏えい
- 侵害された統合アカウントまたは API キー
- セキュリティ問題を示す可能性がある異常なシステム動作

### レポートに含める情報

- 疑われるインシデントの日時
- 発生した、または観察された内容の説明
- 影響を受けたアカウントまたはデータ
- インシデントを封じ込めるためにすでに実施した手順
- 利用可能な証拠またはログ

## データの正確性と完全性 {#data-accuracy-and-completeness}

Reclaim.ai のユーザーは、次を行う必要があります:

- すべてのカレンダーエントリが正確かつ最新であることを確認します
- 機密情報が適切に分類され保護されていることを確認します
- カレンダー共有設定をレビューし、適切なアクセスレベルを確保します
- Reclaim.ai と他のシステム間で同期される情報を定期的に監査します
- 古いまたは不正確なカレンダー情報を速やかに削除または更新します
- Reclaim.ai の AI 機能と推奨事項を通じて共有される情報に注意します

### データ分類ガイドライン

- **Public**: 公開して共有できる一般的なミーティングタイトルと時間
- **Internal**: GitLab 固有のミーティングとプロジェクト（デフォルトの分類）
- **Confidential**: 機密性の高いビジネス情報、人事事項、戦略的な話し合い
- **Restricted**: 外部 AI システムで処理すべきでない高度に機密性の高い情報

## 追加サポート {#additional-support}

Reclaim.ai の利用、セキュリティ上の懸念、コンプライアンス要件に関する質問:

- **一般 IT サポート**: Slack の Compass アプリ（上部の検索バーに "Compass" と入力して見つけます）または it-help@gitlab.com から IT に連絡してください。
- **セキュリティに関する質問**: Slack の [#security-help](https://gitlab.slack.com/channels/security-help)
- **アクセスリクエスト**: [アクセスリクエストプロセス](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests/)に従います
- **コンプライアンスに関する質問**: マネージャーまたは Compliance チームに連絡してください
- **データプライバシーに関する質問**: Slack の [#privacy](https://gitlab.slack.com/channels/privacy) を通じて Privacy チームに連絡してください

Reclaim.ai 自体の技術的な問題については、GitLab IT チームに重要な問題を知らせたまま、Reclaim.ai サポートに直接お問い合わせください。
