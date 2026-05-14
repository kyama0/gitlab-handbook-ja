---
title: "Fulfillment: Fulfillment Platform の方向性"
description: "CustomersDot アプリケーションと、その基盤となる Quote to cash 統合戦略のページであり、Fulfillment セクション内の Fulfillment Platform グループに属します。"
upstream_path: /handbook/product/groups/fulfillment/direction/fulfillment_platform/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

 **最終更新日**: 2024-05-10

## ミッション

> 堅牢な請求インフラストラクチャを提供し、事業の進化に合わせてスケール可能であることを保証します。本イニシアチブは、customersDot アプリケーションを使った QTC オーケストレーションの基盤構築と最適化に重点を置いています。これらの重要なコンポーネントを強化することで、コントリビューターは CustomersDot アプリケーションへの拡張を迅速かつ確実に提供するために必要な自信と効率を得ることができます。この戦略的な取り組みはまた、データの整合性とガバナンス、コンプライアンス、信頼性を実現し、同時に GitLab の Fulfillment セクション内でのシームレスな協業とイノベーションを促進します。

## 概要

[CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/) 内では、私たちのお客様とすべての関連するステークホルダーが、請求アカウント、サブスクリプション、アドオン、ライセンスを管理できます。

[CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/) は、Fulfillment Platform グループにとって主要なコントリビュート先となる中心的なアプリケーションです。

Fulfillment Platform グループは CustomersDot の以下の領域を担当しています:

- 認証システム
- Zuora、Salesforce、Channel パートナーマーケットプレイスソリューションとの統合
- CustomersDot の管理者ビューと機能
- CustomersDot 内の Quote-to-Cash (QTC) データアーキテクチャとオーケストレーション
- 監査およびコンプライアンスのイニシアチブ

Fulfillment Platform グループは、GitLab の Quote-to-cash フロー (QTC) のための基盤となるアーキテクチャとオーケストレーションを所有・維持・進化させます。

## 対象オーディエンス

Fulfillment Platform の対象オーディエンスは、すべてのステークホルダーグループに及びます。これは、それらのグループが対応する支払いや見積もり、お客様、請求アカウント、ライセンスとともにサブスクリプションを作成・管理できるようにするためです。

したがって、私たちは以下の関係者が CustomersDot とやり取りしていると考えています:

1. **お客様:** gitlab.com との SSO。
2. **Fulfillment グループおよびチームメンバー:** プランと SKU の管理改善、Cdot と請求の再アーキテクチャ。
3. **社内ステークホルダー (カスタマーサクセス、サポート、セールス、Billing operations):** 複数のアクティブな注文、サブスクリプション変更のための管理者機能の有効化、データ整合性のイニシアチブ。
セルフサービスのユーザー、セールス支援のお客様、リセラーのいずれであっても、すべてのクライアント向けにインフラストラクチャを最適化し、一貫した Quote to Cash フローを作り出すことで、お客様体験全体を向上させています。
