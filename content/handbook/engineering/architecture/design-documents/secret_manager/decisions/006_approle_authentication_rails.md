---
owning-stage: "~sec::govern"
title: 'GitLab Secrets Manager ADR 006: Rails と OpenBao 間の AppRole 認証方式の使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/006_approle_authentication_rails/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## コンテキスト

GitLab Rails は OpenBao のファサードとして機能するため、ユーザーに代わって OpenBao API と直接通信します。つまり、GitLab Rails コンポーネントはすべてのプロジェクトと組織に対してシークレットおよび関連する設定データを OpenBao に対して読み書きするアクセス権を付与されます。Rails から OpenBao へのすべてのリクエストを安全に認証しつつ、パフォーマンスも維持する必要があります。

## 認証オプション

GitLab Rails 向けに 2 つの OpenBao 認証方式を評価しました：

1. [JWT 認証方式](https://openbao.org/docs/auth/jwt/)
   - これは Runner が CI ジョブでシークレットを取得する際に OpenBao へ認証する方法に似ています。毎回のリクエストで、Rails が OpenBao への認証用 ID トークンを生成する必要があります。
1. [AppRole 認証方式](https://openbao.org/docs/auth/approle/)
   - Rails はあらかじめ定義された Role ID と Secret ID を提供することで OpenBao へ認証します。

## 決定

パフォーマンスを考慮し、Rails が各リクエストで JWT 経由で認証する場合に必要な追加ステップを回避するため、AppRole 認証方式を採用することを決定しました。

## 結果

GitLab Rails は信頼された環境とみなされるため、GitLab のすべての組織とプロジェクト全体でシークレットおよび関連する設定を操作するアクセス権が付与されます。ロールの Secret ID が保護され、漏洩しないよう、細心の注意が必要です。幸い、AppRole の使用に関するベストプラクティスは[ドキュメント化](https://developer.hashicorp.com/vault/docs/auth/approle/approle-pattern)されています。
