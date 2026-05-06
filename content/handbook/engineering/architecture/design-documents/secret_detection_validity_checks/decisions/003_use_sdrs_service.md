---
title: "GitLab Secret Detection Validity Checks ADR 003: Secret Detection Response Service（SDRS）の使用"
upstream_path: "/handbook/engineering/architecture/design-documents/secret_detection_validity_checks/decisions/003_use_sdrs_service/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## ステータス

**廃止済み** - この決定は [ADR 004: ダイレクト partner API 呼び出しの使用](004_use_direct_partner_api_calls.md) によって廃止されました

## 概要

当初は、partner トークン検証リクエストを処理するための別個の Secret Detection Response Service（SDRS）を作成することを提案していました。このサービスは GitLab インスタンスと partner API の仲介役として機能します。

## コンテキスト

Partner トークン検証を設計する際、当初は以下のように考えていました。

- Partner API はセルフマネージドインスタンスと共有できない保護された認証情報が必要である
- 別サービスを使用することで、より優れたセキュリティ分離が実現できる
- 一元的なレート制限と認証情報の管理が有益である

## 当初の決定事項

以下の目的のために専用の SDRS サービスを実装する。

- Partner API 認証情報を一元的に管理する
- すべての GitLab インスタンスのレート制限を処理する
- モノリスからのセキュリティ分離を提供する
- GitLab を変更することなくカスタム partner 統合を可能にする

## 廃止された理由

[#18277](https://gitlab.com/groups/gitlab-org/-/epics/18277) での調査の後、以下が判明しました。

1. 現在のすべての partner API（AWS、GCP、Postman）はパブリックエンドポイントを使用している
2. トークン検証に保護された認証情報は不要である
3. 追加のインフラ複雑さは正当化されなかった
4. セルフマネージドのお客様はデプロイの課題に直面する可能性があった

## 当初のアプローチの結果

**提供されるはずだったもの:**

- サードパーティとのインタラクションのためのサービス分離
- 一元的なセキュリティコントロール
- GitLab モノリスからのフォールト分離

**必要とされたもの:**

- セルフマネージドインスタンスのための追加インフラ
- GitLab と SDRS 間の複雑な認証
- より長い提供タイムライン
- 別個のデプロイと監視
