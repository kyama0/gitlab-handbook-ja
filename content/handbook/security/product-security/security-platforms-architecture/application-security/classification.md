---
title: "GitLab セキュリティプロジェクト分類"
description: "GitLab がセキュリティワークフロー用にプロジェクトを分類するためにセキュリティ属性をどのように使用するか"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/classification/
upstream_sha: 440fbdbea018814f9317e3b1520eff5dda4ecb20
lastmod: "2026-05-21T17:29:09+02:00"
translated_at: "2026-05-21T21:07:52Z"
translator: claude
stale: false
---

## 分類の仕組み

GitLab のプロジェクトは [セキュリティ属性](https://docs.gitlab.com/user/application_security/attributes/) を使用して分類されます。これにより、セキュリティチームは製品に関連するプロジェクトを識別し、セキュリティ業務の優先順位を付け、プロジェクト分類に依存するセキュリティワークフローをサポートできます。

中央集約パイプラインが、セキュリティ属性を [Data チームの製品インベントリ](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv) と整合させ続けます。実装の詳細については、[関連プロジェクト](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/security-research/sec-attributes/security-attribute-automation) を参照してください。

## セキュリティ属性スキーマ

現在のスキーマは製品分類をカバーしています。今後のユースケースへの拡張が計画されています。

| カテゴリ       | 属性     | 説明                                                                       |
|----------------|----------|----------------------------------------------------------------------------|
| Classification | Product  | プロジェクトに、お客様に提供するコード、またはそのコードのビルドおよびデリバリーの一部として使われるコードが含まれている |

## 変更を行う

1. **新規プロジェクト**: [新規プロジェクトの作成](/handbook/engineering/workflow/gitlab-repositories/#creating-a-new-project) ガイドラインに従ってください。プロジェクトが製品インベントリに登録され次第、分類が自動的に適用されます。
1. **誤った分類または不足している分類**: [Data チームの製品インベントリ](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv) にエントリを追加または訂正する MR を提出してください。同期パイプラインが 24 時間以内に属性変更を適用します。
1. **スキーマ変更の提案**: 変更を行う前に、[product-security-meta](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta) で issue を起票し、プロダクトセキュリティチームと議論してください。
