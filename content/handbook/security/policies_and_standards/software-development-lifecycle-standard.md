---
title: "ソフトウェア開発ライフサイクル標準"
toc_hide: true
controlled_document: true
tags:
  - security_standard
  - security_standard_caplscsi
upstream_path: /handbook/security/policies_and_standards/software-development-lifecycle-standard/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

セキュアなソフトウェア開発は、安全で信頼されるアプリケーションを開発・維持するうえで重要です。本標準は、GitLab のソフトウェア開発ライフサイクルの一般的な構成要素を概説します。

## 適用範囲

本標準は、GitLab の本番アプリケーションを支えるために GitLab でコードを開発するすべての人に適用されます。開発プロセスの詳細については [product development flow](/handbook/product-development/how-we-work/product-development-flow/) を参照してください。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| Security Governance | 本標準を作成し実装する責任を負います |
| チームメンバー | 本標準の各項目を実行する責任を負います |

## 標準

### 構想と要件

このステージは、各チームの個別プロセスに応じて異なる媒体で行われます。

このステージでは、次の情報が確立されます:

- 課題の明示と望ましい結果
- スコープの定義
- 主要なステークホルダーの特定
- 関連するステークホルダーと協力して、マイルストーンと成果物を含む詳細なプロジェクト計画を作成

要件は最低限、次を特定する必要があります:

- アプリケーションまたは機能が何を行うか
- プロジェクトを完了するために必要なリソース

特定された要件はプロジェクト管理ツールに文書化され、関連するステークホルダーがレビューおよび承認できるようにします。

### 設計

設計ステージでは、設計ドキュメントはプロジェクト管理ツールにバージョン管理されたドキュメントとして取得されます。

設計ドキュメントの考慮事項は次のとおりです:

- アーキテクチャ: チームは特定のテンプレートを希望するか、業界慣行を実装するかを定義します。
- ユーザーインターフェース: チームはユーザーがアプリケーションや機能とどのように対話するかを定義します。
- セキュリティ: 開発者はアプリケーションをどのようにセキュアに保つかを定義する必要があります。これには、ユーザーデータと一般的なアプリケーションデータをどのように保護するかを決定することが含まれます。
- プログラミング: プロジェクトの技術およびツールスタックを定義します。
- コンポーネント: ソリューションをサポートするために必要なコンポーネントを定義します。

設計ドキュメントは、マージ（プロトタイピング）される前に関連するステークホルダーによって承認される必要があります。

### 開発とテスト

GitLab でのソフトウェア開発は、業界標準の開発プラクティスを使用して行われます。

ソフトウェア開発は、GitLab の開発プラットフォームを使用してバージョン管理された方法で行わなければなりません。

開発は [Code review guidelines](/handbook/engineering/workflow/code-review/) と [secure coding best practices](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)（脆弱性の混入を避けるため）を遵守しなければなりません。

開発作業は、本番環境へのデプロイメント前にテストと承認を受けなければなりません。これには、「開発」作業とはみなされない可能性のある構成変更やその他関連する変更も含まれます。

### デプロイメント

GitLab におけるソフトウェアのデプロイメントは、定義されたすべてのステージング、テスト、リリース、ロールバックプロセスを遵守しなければなりません。GitLab のデプロイメントプロセスの詳細は[こちら](/handbook/engineering/deployments-and-releases/deployments/)で確認できます。

本番環境で必要な検証が完了した後、変更の詳細はリリースページにプッシュされ、関連するリリースノートの一部として伝達されます。

### 保守

GitLab はそのプラットフォームの状態と安定性を継続的に監視しています。

GitLab のプラットフォームの保守は [GitLab's release and maintenance policy](https://docs.gitlab.com/ee/policy/maintenance.html) に従って実施されます。
