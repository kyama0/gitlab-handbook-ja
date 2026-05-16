---
title: "ペネトレーションテストポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: /handbook/security/security-and-technology-policies/penetration-testing-policy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-20T12:36:11+00:00"
---

{{< label name="Visibility: Non-Audit" color="#428BCA" >}}

ペネトレーションテストとは、システムのセキュリティを評価するために、アプリケーションやインフラストラクチャのセキュリティ脆弱性を特定するプロセスです。

## 目的

このポリシーは、GitLab が実装するペネトレーションテストコントロールを概説することを目的としています。

## スコープ

これらのコントロールは、各ペネトレーションテストのスコープに含まれるアプリケーションおよびシステムに適用されます。

## 役割と責任

| 役割 | 責任 |
|----|-------|
| GitLab チームメンバー | このポリシーの要件の遵守に責任を負う |
| Security チーム | このポリシーの実装と実行に責任を負う |
| Security マネジメント（コードオーナー） | このポリシーに対する重大な変更や例外の承認に責任を負う |

## ポリシー

### 計画

少なくとも年 1 回、サードパーティのペネトレーションテストを実施します。(CA-8, SC-7(10))

GitLab は、評判の良いサードパーティのペネトレーションテスト企業を利用してペネトレーションテストを実施します。(CA-8(1))

各ペネトレーションテストにはスコープとテスト方法論が決定されます。(CA-8)

各テストの開始前に目的と目標を確立します。(CA-8)

### 実行

ペネトレーションテストは、計画フェーズで確立されたスコープと方法論に従って実施されます。(CA-8)

### レポーティング

ペネトレーションテスト結果は文書化され、適切なチームメンバーに配布されます。

### 是正

ペネトレーションテストからの所見は、GitLab の[脆弱性管理スタンダード](/handbook/security/product-security/vulnerability-management) (SI-2, RA-5) に従って評価および対処されます。

### 再テスト

是正フェーズ中に行われた変更を検証するために再テストが実施される場合があります。(CA-8)

## スタンダード

詳細については、GitLab の[ペネトレーションテストスタンダード](https://internal.gitlab.com/handbook/security/penetration-testing-standard) をご確認ください。

## 例外

このポリシーに対する例外は、[セキュリティおよびテクノロジーポリシーの例外管理プロセス](/handbook/security/security-and-technology-policy-exception/)に従って追跡されます。
