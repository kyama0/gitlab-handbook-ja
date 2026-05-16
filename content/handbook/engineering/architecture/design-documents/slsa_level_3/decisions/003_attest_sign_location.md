---
title: "ADR 003: glgo で SLSA アテステーションを生成・署名する"
description: "SLSA アテステーションをどこで生成・署名するかに関するアーキテクチャ決定レコード"
upstream_path: "/handbook/engineering/architecture/design-documents/slsa_level_3/decisions/003_attest_sign_location/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-22T08:07:11+00:00"
---

## コンテキスト

SLSA（Supply chain Levels for Software Artifacts）は、ソフトウェアアーティファクトの完全性を保証するためのセキュリティフレームワークです。SLSA Level 3 準拠の実装の一環として、GitLab は GitLab が生成したプロベナンスを持つ CI/CD パイプラインのアーティファクトに対して、署名済みアテステーションを生成する必要があります。最終的な出力はアーティファクトのプロベナンスの検証に使用できる Sigstore バンドルです。

現在、SLSA アテステーションは GitLab Runner で生成できます。しかしこのアプローチでは、アテステーションはコントロールプレーン（信頼境界内）で生成・署名される必要があり、ビルドプラットフォームのテナントが行ってはならないという SLSA Level 3 要件を満たすことができません。

この ADR は、GitLab のアーキテクチャ内でどこで SLSA アテステーションを生成・署名するかについての決定を文書化したものです。

## 検討したオプション

### 1. CI/CD コンポーネント（現在の実装）

**メリット:**

- 可視性：CI/CD カタログで公開される。
- メンテナンス：新しいリリースをいつでも公開できる。
- Cosign インテグレーション：リファレンス実装である cosign CLI を実行できる。
- KMS インテグレーション：[CI での外部シークレットの使用](https://docs.gitlab.com/ci/secrets/) を参照。

**デメリット**

- セルフマネージドまたは Dedicated インスタンスで使用するにはコンポーネントをミラーリングする必要がある。

**ブロッカー:**

- コントロールプレーン外にある。

### 2. Runner

**メリット:**

- Cosign インテグレーション：リファレンス実装である cosign CLI を実行できる。

**ブロッカー:**

- コントロールプレーン外にある。

### 3. GitLab Rails

**メリット:**

- デプロイとメンテナンス：GitLab に同梱される。
- 簡単なセットアップ：GitLab UI で有効化できる。
- コンプライアンス：CI/CD 設定ファイルに定義された内容に関わらず強制できる（SLSA で定義されているコントロールプレーン内）。

**デメリット:**

- CI/CD ジョブとは異なり、バックエンドは `cosign` のようなコマンドを実行できない。
- Ruby での署名が必要になるが、[sigstore-ruby](https://github.com/sigstore/sigstore-ruby) gem は十分に成熟しておらず、署名をサポートしていない（[コード](https://github.com/sigstore/sigstore-ruby/blob/main/lib/sigstore/signer.rb) は存在するが）。

### 4. glgo

**メリット:**

- 非常に高い分離性。
- すでに gitlab.com の一部としてデプロイされている。
- glgo と Rails バックエンド間の通信はトークンを使用して保護されている。
- [sigstore-go](https://github.com/sigstore/sigstore-go) または [cosign](https://github.com/sigstore/cosign) を統合できる。
- OpenBao やその他の KMS と連携できる。

**デメリット:**

- セルフマネージドディストリビューションを直接サポートできない。ただし、glgo をオープンソース化してデプロイ手順を提供することで、これらのお客様への道筋を示すことはできる。

## 決定

**SLSA アテステーションの生成と署名を glgo で行います。**

このオプションは、セルフマネージドのお客様への将来の道筋を残しながら、gitlab.com への最短の本番投入を可能にします。

## 結果

### ポジティブ

- SLSA Level 3 準拠が達成可能になる。
- gitlab.com のお客様向けにアテステーション生成と署名を提供できる。
- 追加のサービスやインフラストラクチャが不要。

### ネガティブ

- glgo は現在、セルフマネージドや Dedicated のお客様には含まれておらず、将来的に利用可能にするための追加作業が必要。

## 関連リンク

- [Sigstore Bundle Format](https://docs.sigstore.dev/about/bundle/)
- [Issue #537060: Architecture Decision: Where do we sign SLSA provenance?](https://gitlab.com/gitlab-org/gitlab/-/issues/537060)
