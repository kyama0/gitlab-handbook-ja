---
title: "アクセス管理ポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_acia
upstream_path: /handbook/security/security-and-technology-policies/access-management-policy/
upstream_sha: ad217b024ba77ae34e6f41cb4a28107135c5dba5
translated_at: "2026-08-01T15:25:19+09:00"
translator: codex
stale: false
lastmod: "2026-07-30T18:03:41-07:00"
---

{{< label name="可視性: 監査" color="#E24329" >}}

## 目的

このポリシーは、GitLab が実装するアクセス管理コントロールを概説することを目的としています。

## スコープ

これらのコントロールは、ネットワークおよびネットワークサービスを含む、アプリケーション層およびオペレーティングシステム層の情報および情報処理システムに適用されます。

## 役割と責任

| 役割 | 責任 |
| --- | --- |
| Security Assurance | このポリシーの遵守状況を継続的にモニタリングする責任を負う |
| ビジネスまたはテクニカルシステムオーナー、およびすべてのチームメンバー | このポリシーおよび関連標準を遵守する責任を負う |
| Security Assurance マネジメント（コードオーナー） | このポリシーに対する重大な変更や例外の承認に責任を負う |

## ポリシー

### アクセスリクエストとレビュー

新規および変更を伴うすべてのアクセスについて、アクセスリクエストが発行されます。

アクセス変更を行う前にアクセスリクエストが承認されます。

アクセスリクエストとレビューは文書化されます。

アクセスリクエストには例外プロセスが存在します。

### アクセスの取り消し

雇用終了時にアクセスはデプロビジョニングされます。

### 職務異動

職務異動時には、異動内容に応じてアクセスがデプロビジョニングまたはプロビジョニングされます。

### アクセスレビュー

既存のアクセスを確認するためにアクセスレビューが実施されます。

### アクセス管理スタンダード

GitLab のアクセス管理プロセスの詳細については、内部ハンドブックの[アクセス管理スタンダード](https://internal.gitlab.com/handbook/security/access-management-standard/) をご確認ください。

## 例外

このポリシーに対する例外は、[セキュリティおよびテクノロジーポリシーの例外管理プロセス](/handbook/security/security-and-technology-policy-exception/)に従って追跡されます。
