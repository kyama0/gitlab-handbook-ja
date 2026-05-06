---
title: "Opensense メール署名"
description: "Opensense は、メール署名と動的なマーケティングバナーを管理するための一元化されたプラットフォームです。"
upstream_path: /handbook/marketing/marketing-operations/opensense/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## 概要

マーケティングオペレーションチームは、Opensense を利用して Sales Dev チーム全体の企業メール署名を一元管理しています。これにより、ブランドの一貫性、法的コンプライアンスを確保し、動的なマーケティングバナーのプラットフォームを提供します。クライアント側のツールとは異なり、Opensense はサーバーサイドでのスタンプを使用して署名を適用します。これにより、Gmail、Outreach、モバイルデバイスのいずれから送信されたメールであっても、ローカルのブラウザ拡張機能に依存することなく、一貫性のある高品質なブランド体験が保証されます。

## なぜ Opensense を使うのか

- **ブランドの一貫性:** SD チームメンバーが正しいロゴ、フォント、ブランドカラーを使用していることを保証します。
- **データの正確性:** Okta グループディレクトリからユーザーデータ（氏名、役職、部門）を自動的に同期します。
- **マーケティング枠の活用:** マーケティングが BDR/SDR の署名内で、イベント、製品ローンチ、ウェビナーのバナーキャンペーンを実施できるようにします。
- **セキュリティ:** 一元管理により、悪意のあるリンクや企業署名への不正な変更のリスクを軽減します。

## 唯一の信頼できる情報源（Single Source of Truth）

私たちはすべての署名データの主要な信頼できる情報源として Okta を使用しています。これにより、チームメンバーの役職や部門が Okta で変更された場合、次の同期サイクル内でメール署名に自動的に反映されます。

## 新規ユーザーアクセス

近日中に情報を提供します。

## 新しいチームメンバーの方へ

署名は Okta プロファイルに基づいて自動的にプロビジョニングされます。関連する Okta グループに追加されると、Gmail と Outreach の両方を含むメールクライアントに署名が自動的に「プッシュ」されます。

## 署名を確認する方法

**Gmail/Outreach にログイン:** 作成画面では、署名が「コードブロック」やプレースホルダー（[[+]]）として表示される場合があります。
**テスト送信:** 個人用アドレスや同僚にメールを送信します。
**レンダリングを確認:** 受信者には完全にレンダリングされた HTML 署名が表示されます。
**注意:** 「送信済み」フォルダではコードブロックが表示されますが、これは想定された動作です。スタンプは送信後に行われるためです。

## 変更やサポートのリクエスト

**プロファイルデータの更新:** 署名内の役職、電話番号、部門が正しくない場合は、[こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/work_items)から Issue を作成してください。変更は通常 24〜48 時間以内に Opensense に同期されます。

## テクニカルサポート

署名がレンダリングされない場合、または Opensense ダッシュボードへのログイン時に「Access Denied」エラーが発生する場合:

- GitLab 専用の SSO URL を使用していることを確認してください。
- #mktgops Slack チャンネルに連絡してください。
- [MOPs チームフォルダ](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/work_items) で Issue を作成してください。

## マーケティングキャンペーンバナー

新しいバナーキャンペーンのリクエストや、特定の部門をバナーから除外したい場合は、マーケティングオペレーションの [Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/work_items/new?type=ISSUE&description_template=opensense-banner-campaign) を作成してください。

## リソース

**署名セットアップガイド: Outreach、Gmail、モバイル:** [こちら](https://docs.google.com/document/d/1x1_MwJ_gtbStYBiNiasZY6kCaTbXKq43ylHvpA26WFo/edit?tab=t.0)
