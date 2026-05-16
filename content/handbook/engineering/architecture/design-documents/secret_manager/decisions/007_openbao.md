---
title: 'GitLab Secrets Manager ADR 007: シークレット管理サービスとして OpenBao を使用する'
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/007_openbao/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-10-22T17:49:23+00:00"
---

## コンテキスト

GitLab Secrets Manager でシークレットを安全に保存・管理するために、必要な機能を提供できる堅牢なシステムに依存したいと考えています。

## 決定

シークレット管理サービスとして、HashiCorp Vault のフォークである [OpenBao](https://openbao.org/docs/what-is-openbao/) を使用します。このコンポーネントがシークレットを安全に保存・管理するためのすべての仕組みを提供します。ユーザーが開始するシークレットの変更操作については、GitLab Rails が抽象化レイヤーとして機能し、すべてのタスクをこのコンポーネントに委譲します。

OpenBao を使用することにはいくつかの利点があります：

1. 独自のセキュアなシークレットストレージを実装する必要がありません。
1. ハードウェアセキュリティモジュール（HSM）をサポートします。
1. OpenBao がオープンソース版 Vault との後方互換性を維持しているため、HashiCorp Vault 向けに既存の統合機能を活用できます。

## 結果

シークレットへの中断なきアクセスを提供するために、OpenBao vault が常にアンシールされた状態である必要があります。

GitLab Rails を実行しているコンテナへのアクセスが攻撃者に奪われた場合にシークレットが取得されないよう、適切なポリシーとアクセス権が設定されていることを確認する必要があります。

また、シークレットの暗号化・復号化・保存がすべて OpenBao サーバーで行われるため、セキュリティを強化し、vault インスタンスへの侵害を防ぐことを確実にしなければなりません。
