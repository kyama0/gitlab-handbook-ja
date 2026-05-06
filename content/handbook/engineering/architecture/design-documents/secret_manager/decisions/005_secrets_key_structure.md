---
title: 'GitLab Secrets Manager ADR 005: OpenBao におけるシークレットの非階層的キー構造'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/005_secrets_key_structure/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

GitLab では、プロジェクトとその親ネームスペースに対して階層的な構造があり、パスの特定の部分で同じ名前が使用される場合があります。OpenBao にシークレットを保存する際、階層全体および全顧客間でシークレットパスの衝突が発生しないようにする必要があります。

## 決定

シークレットは GitLab UI 上では階層的な形式で定義されますが、シークレットキーのパスはフラットな形式で構造化されます。

以下に、ネストされたネームスペースを持つプロジェクトのパス例を示します：

- `gitlab-org/ci-cd/verify/test-project`
  - トップレベルグループ `gitlab-org` のシークレットは `kv-v2/data/namespaces/ci/<gitlab-org の ID>` に保存されます
  - サブグループ `verify` のシークレットは `kv-v2/data/namespaces/ci/<verify の ID>` に保存されます
  - プロジェクト `test-project` のシークレットは `kv-v2/data/projects/ci/<test-project の ID>` に保存されます
  - 異なる種類のシークレットをグループ化するために `ci/` プレフィックスを使用していることに注意してください。
