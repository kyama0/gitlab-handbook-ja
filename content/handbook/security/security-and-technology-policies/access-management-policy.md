---
title: "アクセス管理ポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_acia
upstream_path: /handbook/security/security-and-technology-policies/access-management-policy/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T12:25:32-08:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

このポリシーは、GitLab が実装するアクセス管理コントロールを概説することを目的としています。

## スコープ

これらのコントロールは、ネットワークおよびネットワークサービスを含む、アプリケーション層およびオペレーティングシステム層の情報および情報処理システムに適用されます。

## 役割と責任

| 役割 | 責任 |
| --- | --- |
| Security Assurance | このポリシーの実装および実行に責任を負う |
| ビジネスまたはシステムのオーナー | このポリシーおよび関連する標準への整合 |
| Security Assurance マネジメント（コードオーナー） | このポリシーに対する重大な変更や例外の承認に責任を負う |
| チームメンバー | このポリシーの要件の遵守に責任を負う |

## ポリシー

### アクセスリクエストとレビュー

新規および変更を伴うすべてのアクセスについて、アクセスリクエストが発行されます。(AC-2)

アクセス変更を行う前にアクセスリクエストが承認されます。(AC-2)

アクセスリクエストとレビューは文書化されます。(AC-2, AC-6(7))

アクセスリクエストには例外プロセスが存在します。

### アクセスの取り消し

雇用終了時にアクセスはデプロビジョニングされます。(AC-2(3))

### 職務異動

職務異動時には、異動内容に応じてアクセスがデプロビジョニングまたはプロビジョニングされます。(AC-2, AC-2(3))

### アクセスレビュー

既存のアクセスを確認するためにアクセスレビューが実施されます。(AC-6(7))

### アクセス管理スタンダード

GitLab のアクセス管理プロセスの詳細については、内部ハンドブックの[アクセス管理スタンダード](https://internal.gitlab.com/handbook/security/access-management-standard/) をご確認ください。

## 例外

このポリシーに対する例外は、[セキュリティおよびテクノロジーポリシーの例外管理プロセス](/handbook/security/security-and-technology-policy-exception/)に従って追跡されます。
