---
title: "会社資産の物理セキュリティ標準"
toc_hide: true
controlled_document: true
tags:
  - security_standard
  - security_standard_pe
upstream_path: /handbook/security/policies_and_standards/physical-security-standard-for-company-assets/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

本書は、GitLab のオールリモート環境における情報資産の保護を支援するための資産管理上の対策と要件を定義します。本標準で言及される対策と要件は、安全なインフラと作業環境を構築し、機密情報を物理的脅威から保護するように設計されています。

## 適用範囲

本標準は、GitLab のコンピューティングリソースに関わり、会社または顧客のデータにアクセスするすべての GitLab チームメンバー、契約社員、アドバイザー、契約当事者に適用されます。

## 役割と責任

| 役割 | 責任 |
|----|-------|
| Security Assurance | 本標準を実装し実行する責任を負います |
| Security Assurance Management（コードオーナー） | 本標準への重大な変更および例外を承認する責任を負います |
| チームメンバー、契約社員、アドバイザー、契約当事者 | 本標準の「物理デバイスとロケーション」要件を遵守する責任を負います |

## 概要

オールリモート企業として、情報資産の物理的保護は定義された「セキュリティゾーン」に分類できます。セキュリティゾーンとは、物理的な場所における情報資産の取り扱い要件として定義されます。

GitLab には 2 つの異なるセキュリティゾーンがあります:

### インフラ（SaaS 製品向け）

- サードパーティのサービスプロバイダーによってホストされ、物理的に保護されます
- [責任共有モデル](/handbook/security/isms/#assets)
- 物理セキュリティ要件への準拠は、年次の Third Party Risk Management（TPRM）レビューおよび Complementary User Entity Controls（CUEC）レビューの一部としてレビューされます。これには独立した第三者が、以下を含む（ただしこれに限定されない）効果的な物理セキュリティ手順を証明していることの確認が含まれます:

  - 訪問者管理
  - 構内保護
  - 環境セキュリティ
  - アクセス管理

### 物理デバイスとロケーション

- ラップトップは [Endpoint Management Procedures](https://internal.gitlab.com/handbook/it/endpoint-tools/) によって保護され、[IT Security - System Configurations ハンドブックページ](https://internal.gitlab.com/handbook/it/it-security/system-configuration/) で定義されたシステム構成によってセキュアにされています。これには次のものが含まれますが、これらに限定されません:

  - パスワード
  - 画面のタイムアウト
  - 暗号化
  - エンドポイント検出と応答

- GitLab は[ゼロトラストアーキテクチャ](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust.md) を導入しており、これはデバイスの場所に関わらずすべてのリソースアクセスに対して認証と認可を要求することで、物理セキュリティ対策を補完します。

- [クリーンデスク／クリアスクリーン](https://internal.gitlab.com/handbook/it/it-security/system-configuration/#clean-deskclear-screen) 要件を実施します。

- 公共エリアでデバイスを放置せず、使用していないときはロックされていることを確認してください。[パスワードロック付きスクリーンセーバーを起動し、デスクトップをロックし、フタを閉じる](https://internal.gitlab.com/handbook/it/it-security/system-configuration/#laptop-or-desktop-system-configuration)。

- 個人のスマートフォンおよびタブレットの使用は、[パスコード保護されている必要があります](/handbook/people-group/acceptable-use-policy/#personal-mobile-phone-and-tablet-usage)。

- 機密データは USB ドライブや外付けハードドライブなどのリムーバブルストレージデバイスに保存しないでください。会社資産に対する外部ストレージデバイスは[認可されていません](/handbook/people-group/acceptable-use-policy/#use-of-external-media-on-company-assets)。

- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/) で定義された機密情報を含むドキュメントの印刷は禁止されています。

- [移動中はデータをセキュアに保ち](/handbook/finance/travel/#secure-your-data-during-travels)、機密データについて話す際には他人に聞かれない安全な場所にいることを確実にし、デバイスを使用していないときはロックしてください。

- 法務部門に相談せずに、会社所有のデバイスを[禁輸国](/handbook/sales/#export-control-classification-and-countries-we-do-not-do-business-in)に持ち込まないでください。

## 例外

本手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions) に従って追跡されます。

## 参考資料

- [Internal Acceptable Use Policy](/handbook/people-group/acceptable-use-policy/)
- [IT Security System Configuration](https://internal.gitlab.com/handbook/it/it-security/system-configuration/)
- [情報セキュリティ管理システム](/handbook/security/isms/)
