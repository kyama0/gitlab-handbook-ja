---
title: 'GitLab Secrets Manager ADR 003: Secrets Manager を Go で実装する'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/secret_manager/decisions/003_go_service/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

GCP サービスとの統合の必要性を示した [ADR-002](../002_gcp_kms) に続き、GitLab Secrets Manager Service（GSMS）を構築するために使用する技術スタックを決定する必要があります。

## コンテキスト

GitLab では、GitLab Rails 周辺のサテライトサービスを通常 Go で構築します。これは特に、並行処理とキャッシュを多用するサービスに適した技術選択です。キャッシュは非同期で無効化/更新することができます。

Go ベースの [GCP KMS](https://cloud.google.com/kms/docs/reference/libraries#client-libraries-usage-go) クライアントライブラリも KMS にアクセスするための信頼できるインターフェースを提供しているようです。

## 決定事項

GitLab Secrets Manager Service を Go で実装します。サテライトサービスが共有する共通機能を提供するミニマリストライブラリとして [labkit](https://gitlab.com/gitlab-org/labkit) を使用します。

## 結果

GitLab Secrets Manager 機能を所有するチームは、より多くの Go の専門知識を習得する必要があります。

## 代替案

GitLab Secrets Manager Service を Ruby で実装することを検討しましたが、Ruby を使用することでは十分に効率的なサービスを構築できないという結論に至りました。
