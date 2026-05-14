---
title: "トークン管理ワーキンググループ"
description: "このワーキンググループの使命はトークン管理の改善を推進することです。"
status: active
upstream_path: /handbook/company/working-groups/token-management/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T23:40:34Z"
translator: claude
stale: false
---

## 属性

| プロパティ       | 値                                                                                                                         |
|-----------------|------------------------------------------------------------------------------------------------------------------------------|
| 作成日          | 2022年8月16日                                                                                                                |
| 終了日          | 2023年4月25日                                                                                                                |
| Slack           | #wg_token（社内のみアクセス可能）                                                                                            |
| Google Doc      | [トークン管理ワーキンググループ議事録](https://docs.google.com/document/d/17X-P9vnKDa6WZ6m-0Hxf5aIFkEhmArUN069GgQ-6Dss/edit)（社内のみアクセス可能）|

## 方向性

GitLab ユーザーへの誠実さと責任として、トークン管理ワーキンググループは将来のトークン管理セキュリティ強化に向けた基盤とロードマップの構築に取り組みます。これは、トークン管理セキュリティポリシーの策定・公開と、リスクが高く対応コストの低いトークン管理 Issue への修正案提示によって実現します。これにより、中長期的なトークン管理セキュリティ強化の取り組みを成功に導くための基礎を整えます。詳細については、[トークンリーク社内ハンドブックページ](https://internal.gitlab.com/handbook/engineering/security/token-leaks/)をご覧ください。すべてのトークンは、ユーザーや顧客に提供する GitLab アプリケーション内に保存されます。これらの強化機能を自社で活用し、私たち自身のセキュリティニーズを満たす改善を行うことで、すべてのユーザーに対するトークン管理とシークレット保護を向上させ、ユーザーのシークレットを守る優れた管理者となります。

## 終了基準 {#exit-criteria}

トークン管理ワーキンググループが提供するもの:

- 以前作成された[トークン標準](https://gitlab.com/gitlab-com/gl-security/security-research/cryptographic-standards/-/blob/main/token-standard.md)に基づく、公式トークンおよびシークレット管理ポリシーの初回イテレーションを公開する
  - ステータス: 完了
  - 成果物: [GitLab トークン管理標準](/handbook/security/policies_and_standards/token-management-standard/)
- 特定されたリスク高・対応コスト低の各項目について、リスク評価を伴う修正案を提示する
  - ステータス: 完了
  - 成果物: [リスク評価](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/354)および[工数見積もり](https://docs.google.com/spreadsheets/d/1selwO27d-Tk2KMlSy5ozY1DnHu7GmGxKO6o7axO7omc/edit#gid=0)
- 対応コストが高くリスクも高い上位 2 件について、プロダクト外での回避策を提案する
  - ステータス: 完了
  - 成果物: [プロダクト外回避策の提案](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues/1565)

## ふりかえり

トークンワーキンググループのふりかえりは 2023年4月25日 に実施されました。詳細は[ふりかえり Issue](https://gitlab.com/gitlab-com/gl-security/security-department-meta/-/issues/1587) をご覧ください。

## 役割と責任

| ワーキンググループでの役割 | 氏名                    | 役職                                                         |
|---------------------------|------------------------|--------------------------------------------------------------|
| ファシリテーター            | James Ritchey          | Sr. Manager, Product Security                                |
| メンバー                   | Valentine Mairet        | SIRT Manager                                                 |
| メンバー                   | Philippe Lafoucrière    | Security Architect                                           |
| メンバー                   | Andrew Kelly            | AppSec Manager                                               |
| メンバー                   | Chris Moberly           | Red Team Manager                                             |
| メンバー                   | Connor Gilbert          | Sr. Product Manager, Secure:Static Analysis                  |
| メンバー                   | Grzegorz Bizon          | Principal Engineer, Ops                                      |
| メンバー                   | Stan Hu                 | Engineering Fellow                                           |
| メンバー                   | Michelle Gill           | Senior Engineering Manager, Manage                           |
| メンバー                   | Hannah Sutor            | Senior Product Manager, Manage:Auth                          |
| メンバー                   | Alex Hanselka           | Senior Site Reliability Engineer                             |
| メンバー                   | Dominic Couture         | Staff Security Engineer, Application Security                |
| メンバー                   | Thomas Woodham          | Senior Engineering Manager, Secure                           |
| メンバー                   | Amar Patel              | Engineering Manager, Secure:Static Analysis                  |
| メンバー                   | Zach Rice               | Senior Backend Engineer, Secure:Static Analysis              |
| メンバー                   | Lucas Charles           | Staff Backend Engineer, Secure:Static Analysis               |
| メンバー                   | Dennis Appelt           | Staff Security Engineer, Security Research                   |
| メンバー                   | Mark Loveless           | Staff Security Engineer, Security Research                   |
