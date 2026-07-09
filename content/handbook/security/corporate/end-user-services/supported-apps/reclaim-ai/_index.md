---
title: Reclaim.ai
description: Reclaim.ai の使用、セキュリティ管理、コンプライアンス要件
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/reclaim-ai/
upstream_sha: 82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2
translated_at: "2026-07-09T10:30:13+09:00"
translator: codex
stale: false
lastmod: "2026-07-08T14:46:05-04:00"
---

Reclaim.ai は、スケジューリングと時間管理の最適化を支援する AI 搭載のカレンダー管理および生産性ツールです。このプラットフォームはカレンダーシステムと統合し、フォーカスタイムの自動スケジューリング、タスクの管理、ミーティングスケジュールの最適化を行います。

## セキュリティおよびコンプライアンス要件

Reclaim.ai を使用する GitLab チームメンバーとして、あなたは以下のセキュリティ管理とコンプライアンス要件を理解し、遵守する責任があります:

### 目次

- [データ分類](#data-classification)
- [システムオブレコードの維持](#system-of-record-maintenance)
- [マネージャーの責任](#manager-responsibilities)
- [災害復旧と事業継続](#disaster-recovery-and-business-continuity)
- [セキュリティ構成変更](#security-configuration-changes)
- [セキュリティインシデントの報告](#security-incident-reporting)
- [データの正確性と完全性](#data-accuracy-and-completeness)
- [追加サポート](#additional-support)

## データ分類 {#data-classification}

**Reclaim.ai は Orange データを処理できます**

Reclaim.ai の使用が GitLab のデータ分類および取り扱いポリシーに沿っていることを確認してください。機密の顧客情報やその他の RED データは含めないでください。

## システムオブレコードの維持 {#system-of-record-maintenance}

**Reclaim.ai はカレンダーを補強できますが、責任は依然としてあなたにあります！**

- GitLab の主要なカレンダーシステム（Google カレンダー）は、スケジューリング情報の正式な情報源のままです
- Reclaim.ai は、主要なシステムオブレコードとしてではなく、生産性向上ツールとして使用されるべきです
- Reclaim.ai と主要なカレンダーシステム間で同期される情報が正確であることを定期的に確認してください
- 重要なスケジューリングおよびタスク情報のバックアップコピーを Reclaim.ai 外で維持してください

## マネージャーの責任 {#manager-responsibilities}

**マネージャーの場合: 必ず関与してください**

- マネージャーは、チームメンバーが適切な Reclaim.ai 使用ガイドラインを理解していることを確認する必要があります
- GitLab のポリシーに準拠していることを確認するため、チームメンバーが Reclaim.ai をどのように使用しているかを監視およびレビューしてください
- 自分のビジネスユニット特有の懸念を念頭に置きながら、どのタイプの情報を Reclaim.ai 経由で管理すべきか、またはすべきでないかをチームメンバーと共に決定してください
- チームのアクセスと使用パターンを定期的にレビューしてください

## 災害復旧と事業継続 {#disaster-recovery-and-business-continuity}

Reclaim.ai のユーザーは以下を行う必要があります:

- Reclaim.ai だけに依存しない代替のスケジューリングおよび生産性ワークフローを維持する
- 重要なミーティングとタスクが GitLab の主要なシステム（Google カレンダー、GitLab Issue など）でも追跡されていることを確認する

## セキュリティ構成変更 {#security-configuration-changes}

- IT EUS はセキュリティおよび構成変更を承認できます: 任意のリクエストは通常の [アクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を通じて行ってください
- IT EUS は、データ送信に影響する重要な構成変更を行う前にセキュリティチームと調整する必要があります
- 変更を行う者は、監査目的のために構成変更の標準ワークフローに従う必要があります

## セキュリティインシデントの報告 {#security-incident-reporting}

### 必要な即時アクション

Reclaim.ai に関連するセキュリティインシデントが疑われる場合:

1. **直ちに** Reclaim.ai のパスワードを変更し、アクティブなセッションをすべて取り消します
2. **直ちに** GitLab セキュリティチームに以下の方法で通知します:
   - Slack: `#security-help` チャンネル
   - [セキュリティインシデント対応手順](/handbook/security/security-operations/sirt/sec-incident-response/) に従う

### 報告すべきインシデントの種類

- 侵害された Reclaim.ai ユーザーアカウント
- カレンダーまたはタスクデータへの不正アクセス
- Reclaim.ai アカウントでの疑わしい活動
- 潜在的なデータ侵害または漏洩
- 侵害された統合アカウントまたは API キー
- セキュリティ問題を示す可能性のある異常なシステム動作

### 報告に含めるべき情報

- 疑わしいインシデントの日時
- 何が発生したか、または観察されたかの説明
- 影響を受けたアカウントまたはデータ
- インシデントを封じ込めるためにすでに取られた手順
- 利用可能な証拠やログ

## データの正確性と完全性 {#data-accuracy-and-completeness}

Reclaim.ai のユーザーは以下を行う必要があります:

- すべてのカレンダーエントリが正確で最新であることを確認する
- 機密または機密性の高い情報が適切に分類され保護されていることを確認する
- カレンダー共有設定をレビューして、適切なアクセスレベルが設定されていることを確認する
- Reclaim.ai と他のシステム間で同期されている情報を定期的に監査する
- 古い、または誤ったカレンダー情報を速やかに削除または更新する
- Reclaim.ai の AI 機能や推奨事項を通じてどのような情報が共有されているかに注意する

### データ分類ガイドライン

- **Public**: 公に共有できる一般的なミーティングのタイトルと時間
- **Internal**: GitLab 固有のミーティングとプロジェクト（デフォルトの分類）
- **Confidential**: 機密のビジネス情報、人事に関する事項、または戦略的な議論
- **Restricted**: 外部の AI システムによって処理されるべきではない、極めて機密性の高い情報

## 追加サポート {#additional-support}

Reclaim.ai の使用、セキュリティに関する懸念、コンプライアンス要件に関する質問:

- **一般的な IT サポート**: Slack の Compass app（上部検索バーに「Compass」と入力して見つけます）または it-help@gitlab.com から IT にお問い合わせください。
- **セキュリティに関する質問**: Slack の [#security-help](https://gitlab.slack.com/channels/security-help)
- **アクセスリクエスト**: [アクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/) に従う
- **コンプライアンスに関する質問**: マネージャーまたはコンプライアンスチームに連絡
- **データプライバシーに関する質問**: Slack の [#privacy](https://gitlab.slack.com/channels/privacy) でプライバシーチームに連絡

Reclaim.ai 自体の技術的な問題については、Reclaim.ai サポートに直接お問い合わせいただき、重要な問題があれば GitLab IT チームに通知し続けてください。
