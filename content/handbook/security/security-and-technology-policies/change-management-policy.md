---
title: "変更管理ポリシー"
controlled_document: true
tags:
  - security_policy
  - security_policy_cmma
upstream_path: /handbook/security/security-and-technology-policies/change-management-policy/
upstream_sha: ad217b024ba77ae34e6f41cb4a28107135c5dba5
translated_at: "2026-08-01T15:25:19+09:00"
translator: codex
stale: false
lastmod: "2026-07-30T18:09:41-07:00"
---

{{< label name="可視性: 非監査" color="#428BCA" >}}

## 目的

このポリシーは、GitLab が実装する変更管理コントロールを概説することを目的としています。

## スコープ

このポリシーの文脈における変更とは、次のものを含むがこれに限定されない**修正**として定義されます。

- 新しいシステム、統合、機能、主要レポート、データベース等の作成・開発・実装
- 構成への変更
- ベンダーが管理しないパッチまたはベンダー提供の変更のデプロイ
- データスキーマへの修正
- システムの非推奨化
- 新しいアクセスやロールの作成
- 広く言えば、チームメンバーの責任の遂行方法に影響を与えるあらゆる変更

このポリシーは、`Tier 1 Mission Critical`、`Tier 2 Business Critical`、`Tier 3 Business Operational` の[Critical System Tier](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) が割り当てられたシステムに対して行われる変更に適用されます。

{{% note %}}
Tier 4 Administrative システムはこのポリシーのスコープの対象外ですが、特に `Tier 4 Administrative` システムが[より上位のシステムティア](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) に移行する可能性が高い場合は、チームメンバーがすべてのシステムにおいて、このポリシーで確立された要件を積極的に採用することが推奨されます。
{{% /note %}}

## 役割と責任

|役割|責任|
|----------|---------------|
|Security Compliance チーム|セキュリティコントロールテストを通じて関連システム全体の変更管理手順を継続的に監視し、このポリシーへの準拠を確認する責任を負う|
|テクニカルシステムオーナー<br><br>ビジネスシステムオーナー<br><br>システム管理者|このポリシーで確立された最低要件が手順に組み込まれ、一貫して実行されることを保証する責任を負う|
|チームメンバー|このポリシーに整合した方法で変更管理手順に従う責任を負う|
|コントロールオーナー|このポリシーで確立された最低要件を満たすか、それを超える変更管理手順を定義し実装する責任を負う|

## ポリシー

変更は関連手順に従って文書化されます。

変更は関連手順に従ってテストされる場合があります。

変更は適切なステークホルダーによってレビューされます。

変更は適切なステークホルダーによって承認されます。

変更は関連手順に従ってデプロイされます。

## スタンダード

詳細については、GitLab の[変更管理スタンダード](https://internal.gitlab.com/handbook/security/change-management-standard) およびリンク先の手順をご確認ください。

## 例外

このポリシーに対する例外は、[セキュリティおよびテクノロジーポリシーの例外管理プロセス](/handbook/security/security-and-technology-policy-exception/)に従って追跡されます。

## 参考

- [インフラストラクチャ変更管理手順](/handbook/engineering/infrastructure-platforms/change-management/)
- [ビジネステクノロジー変更管理手順](https://internal.gitlab.com/handbook/eta/administrative/policies/it-change-management/)（社内のみ）
- [組織変更管理手順](/handbook/people-group/organizational-change-management/)
- [セキュリティ変更管理手順](/handbook/security/security-change-management-procedure/)
