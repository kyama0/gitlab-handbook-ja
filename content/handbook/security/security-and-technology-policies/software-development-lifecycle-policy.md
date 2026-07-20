---
title: "ソフトウェア開発ライフサイクルポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: /handbook/security/security-and-technology-policies/software-development-lifecycle-policy/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-20T21:39:44Z"
translator: codex
stale: false
lastmod: "2026-07-19T22:35:10-07:00"
---

{{< label name="Visibility: Non-Audit" color="#428BCA" >}}

## 目的

セキュアなソフトウェア開発は、安全で信頼されるアプリケーションを開発・維持するために不可欠です。本ポリシーは、GitLab のソフトウェア開発ライフサイクルの一般的な構成要素を概説します。

## 適用範囲

本ポリシーは、GitLab の本番アプリケーションをサポートするために、GitLab でコードを開発、レビュー、マージするすべての担当者に適用されます。

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| セキュリティガバナンス | 本ポリシーを作成および実施する責任を負います |
| チームメンバー | ポリシーステートメントの実行に責任を負います |

## ポリシー

対象範囲の開発活動は、GitLab の [プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) に従って実施されます。(SA-3)

開発活動は、セキュリティ、機密性、および可用性の原則を念頭に置いて実施されます。(PL-8, SA-8)

開発プロセス全体で使用されるテストデータは、GitLab の [データ分類基準](/handbook/security/policies_and_standards/data-classification-standard) の対象となります。(SA-3(2))

## 標準

詳細については、GitLab の [ソフトウェア開発ライフサイクル標準](/handbook/security/policies_and_standards/software-development-lifecycle-standard) を参照してください。

## 例外

本手順への例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure#exceptions) に従って追跡されます。
