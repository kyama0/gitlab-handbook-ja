---
title: "GitLab セキュリティプロジェクトの分類"
description: "GitLab がセキュリティ属性を使用してセキュリティワークフロー向けにプロジェクトを分類する方法"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/classification/
upstream_sha: 1099e381063485f55ad7088a1ce8b80dd7077696
lastmod: 2026-08-10T16:18:10+02:00
translated_at: "2026-08-11T06:08:21+09:00"
translator: claude
stale: false
---

## 分類の仕組み

GitLab のプロジェクトは [セキュリティ属性](https://docs.gitlab.com/user/application_security/attributes/)を使用して分類されます。これにより Security はプロダクト関連のプロジェクトを特定し、セキュリティ業務に優先順位を付け、プロジェクト分類に依存するセキュリティワークフローをサポートできます。

集中管理されたパイプラインが [Data team のプロダクトインベントリ](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv)とセキュリティ属性を整合させ続けます。実装の詳細は [関連プロジェクト](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/security-research/sec-attributes/security-attribute-automation)を参照してください。

## セキュリティ属性スキーマ

現在のスキーマはプロダクト分類をカバーしています。将来のユースケース向けに拡張が計画されています。

| カテゴリー       | 属性 | 説明                          |
|----------------|-----------|--------------------------------------|
| Classification | Product   | プロジェクトには、お客様に提供するコード、または当該コードのビルドと提供の一部となるものが含まれている |
| Business Impact | Mission Critical   | Product に分類されたプロジェクト。将来的には他の種類のプロジェクトに拡大される可能性がある |

## 変更を加える

1. **新規プロジェクト**: [新しいプロジェクトの作成](/handbook/engineering/workflow/gitlab-repositories/#creating-a-new-project)ガイドラインに従ってください。プロジェクトがプロダクトインベントリに登場すると、分類が自動的に適用されます。
1. **不正確または欠落している分類**: [Data team のプロダクトインベントリ](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv)にエントリを追加または修正するための MR を提出してください。同期パイプラインが 24 時間以内に属性の変更を適用します。
1. **スキーマ変更の提案**: 変更を行う前に Product Security team と議論するため、[product-security-meta](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta) で Issue を作成してください。
