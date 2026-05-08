---
title: Gong でのメールロギング
description: >-
  ソリューションアーキテクトが Gong で顧客とのメールの自動ロギングをセットアップする方法のガイド。組織全体での可視性、コラボレーション、データ駆動の洞察を確保します。
upstream_path: /handbook/solutions-architects/processes/activity-capture/email-logging/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## 概要

顧客とのメールコミュニケーションは、ソリューションアーキテクトの役割の本質的な部分です。Gong はこれらのコミュニケーションを自動的にキャプチャし、組織全体での可視性、コラボレーション、データ駆動の洞察を確保します。

## Gong メール接続のセットアップ

1. Okta SSO 認証を使用して Gong にログインします
2. 画面右上のイニシャルまたはプロフィール画像をクリックします
3. ドロップダウンメニューから「My Settings」を選択します
4. 「Emails」セクションを見つけます
5. 以下の2つの権限の隣に緑のチェックマークがあるか確認します:
   - 「All emails you send to or receive from your CRM contacts are imported」
   - 「Email write-permission is turned on for composing emails in Gong」
6. 不足しているチェックマークがある場合:
   - 権限の隣の「Connect」ボタンをクリックします
   - プロンプトが表示されたら GitLab Google アカウントでサインインします
   - 不足している各権限について繰り返します

正しく接続されると、Emails セクションに「Currently connected: YourHandle@gitlab.com」と表示されるはずです。

## メールロギングの仕組み

設定が完了すると、Gong は自動的に以下を行います:

- あなたと CRM の連絡先との間のメールをキャプチャ
- メールを関連するアカウントと商談に関連付け
- メールを Gong 内で検索可能・分析可能に
- アカウントの継続性のためのメール履歴を維持

メールの手動ロギングや選択は不要です。Gong は CRM の連絡先に基づいて自動的に処理します。

## プライバシーとコンプライアンス

Gong は以下のように設定されています:

- CRM の連絡先とのビジネス関連メールのみをキャプチャ
- GitLab のデータ保護ポリシーを尊重
- 顧客の機密性を維持
- 関連するプライバシー規制を遵守

## トラブルシューティング

### よくある Issue

1. **メールが Gong に表示されない**
   - My Settings でメール接続がアクティブであることを確認
   - 連絡先が CRM に正しく記録されていることを確認
   - 権限がまだ有効であることを確認

2. **メールの関連付けが間違っている**
   - CRM の連絡先詳細を確認
   - 必要に応じて連絡先情報を更新

### ヘルプを得る

- ヘルプポータルから Gong サポートに連絡
- #temp-gong-launch Slack チャンネルで連絡
- 持続的な問題については IT チームにチケットを提出

## 関連リソース

- [Gong ドキュメント](https://help.gong.io)
- [GitLab メールポリシー](/handbook/communication/#email)
- [コミュニケーションガイドライン](/handbook/communication/)
