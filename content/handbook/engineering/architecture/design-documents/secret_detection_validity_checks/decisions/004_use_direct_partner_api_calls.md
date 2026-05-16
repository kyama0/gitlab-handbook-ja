---
title: "GitLab Secret Detection Validity Checks ADR 004: SDRS の代わりにダイレクト partner API 呼び出しの使用"
upstream_path: "/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/decisions/004_use_direct_partner_api_calls/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-09T22:00:13-07:00"
---

## 概要

以前に提案した SDRS サービスアーキテクチャを置き換え、Sidekiq ワーカーを使用した GitLab のモノリスからのダイレクト API 呼び出しによって partner トークン検証を実装します。

## コンテキスト

[#562364](https://gitlab.com/gitlab-org/gitlab/-/issues/562364) での調査作業とインフラチームとの協議の結果、以下が判明しました。

- すべての partner API はパブリックにアクセス可能である
- 保護された認証情報を管理する必要がない
- モノリスファーストのアプローチは、より優れた運用サポートを提供する
- セルフマネージドインスタンスは、シンプルなデプロイメントの恩恵を受ける

## 決定事項

既存のレート制限とリトライメカニズムを使用して、GitLab モノリスの Sidekiq ワーカーから partner API 呼び出しを直接行います。

## 結果

**メリット:**

- 既存の SRE オンコールサポートを活用する
- 確立されたセキュリティリリースプロセスを使用する
- デフォルトでセルフマネージドに対応する
- GitLab DB へのより速いデータアクセス
- 追加インフラが不要

**デメリット:**
- Partner API の変更にはモノリスの変更が必要
- 同一コードベース内でのセキュリティコンテキストの混在
- Partner ごとのレート制限の慎重な管理が必要
