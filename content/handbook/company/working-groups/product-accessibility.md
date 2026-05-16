---
title: "プロダクトアクセシビリティグループ"
description: "アクセシビリティガイドラインへの GitLab プロダクトの準拠を確保します"
status: active
upstream_path: "/handbook/company/working-groups/product-accessibility/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-16T09:24:13+02:00"
---

## 属性

| プロパティ          | 値                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日             | 2023-07-19                                                                                                                                |
| 目標終了日          | TBD                                                                                                                                       |
| Slack             | #wg_product_accessibility（社内からのみアクセス可能）                                                                              |
| Google Doc        | [アジェンダ](https://docs.google.com/document/d/1Ss3vVvLS_sxwkuXT6zm2Unz69KRH2S_FWG_G3xUesRE/edit?usp=sharing)（社内からのみアクセス可能） |
| エピック            | [HQ エピック](https://gitlab.com/groups/gitlab-org/-/epics/11090)                                                      |
| 概要 & ステータス   | [完了基準の進捗](#exit-criteria-progress) を参照                                                                                      |

### 背景

[axe-core](https://github.com/dequelabs/axe-core#the-accessibility-rules) を使用してフィーチャースペックで [アクセシビリティチェックを自動化](https://gitlab.com/gitlab-org/gitlab/-/issues/382848) する概念実証を作成できたため、これらのアサーションを GitLab のフィーチャースペックのほとんどと GitLab UI コンポーネントのコードベースに組み込みたいと考えています。これにより、GitLab のアクセシビリティ準拠が WCAG ガイドラインの少なくとも 57%（自動化可能なアクセシビリティ Issue の割合）をカバーできるようになります。また、開発者が導入した変更が準拠にどう影響するかを監視する簡単な手段を提供することで、アクセシビリティプラットフォームを提供するための取り組みを左シフトできます。このイニシアチブは、テストの作成、既存の違反の理解、それらを修正または文書化する方法の発見を含みます。

このプロジェクトのステークホルダーには、フロントエンドエンジニア、バックエンドエンジニア、プロダクトデザイナーが含まれます。

### 完了基準

このワーキンググループは以下の目標を掲げています：

1. 自動フィーチャーテストに axe による自動アクセシビリティチェックを含める。
1. GitLab UI に axe による自動アクセシビリティチェックを含め、コンポーネントのテストを作成する。
1. 既知のアクセシビリティ違反の包括的なリストをまとめる。
1. アクセシビリティ違反に対処するための計画を策定・実施する（評価計画/プロセスおよびツールを含む）。
1. アクセシビリティフロントエンドガイドのギャップを特定して埋める。
1. 社内トレーニングの計画を立てる。

#### 完了基準の進捗 {#exit-criteria-progress}

| 基準                                                                                                                      | 開始日 | 完了日 | 進捗 | DRI             |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | -------- | --------------- |
| [フィーチャースペックの重要なユーザージャーニーに axe-core チェックを追加](https://gitlab.com/groups/gitlab-org/-/epics/11126)           | 15-08-2023 |                | 20%      | `@psjakubowska` |
| [共有ビューコンポーネントにアクセシビリティチェックを含める](https://gitlab.com/groups/gitlab-org/-/epics/15403)                  | 03-12-2024 |                | 70%      | `@psjakubowska` |
| [コンポーネントスペックに axe-core チェックを追加](https://gitlab.com/groups/gitlab-org/-/epics/11127)                                 | 16-04-2024 | 23-05-2025     | 100%     | `@rchanila`     |
| [既知のアクセシビリティ違反の包括的なリストをまとめる](https://gitlab.com/groups/gitlab-org/-/epics/16378)          | 19-10-2024 | 03-01-2025     | 100%     | `@tauriedavis`  |
| [アクセシビリティ違反に対処するための計画を策定・実施する（評価計画/プロセスおよびツールを含む）](https://gitlab.com/groups/gitlab-org/-/epics/17945) | 04-10-2024 |                | 90%       | `@psjakubowska`         |
| [アクセシビリティフロントエンドガイドのギャップを特定して埋める](https://gitlab.com/gitlab-org/gitlab/-/issues/419777)         | 12-10-2023 | 27-02-2025     | 100%     | `@psjakubowska` |
| [社内トレーニングの計画](https://gitlab.com/gitlab-com/people-group/learning-development/training-curriculum/-/issues/68) | 29-02-2024 |                | 100%     | `@jeldergl`     |

### 役割と責任

| ワーキンググループの役割 | 担当者                     | 役職                                         |
| ------------------ | -------------------------- | ---------------------------------------------|
| エグゼクティブスポンサー | Tim Zallmann               | VP of Engineering, Core Development          |
| ファシリテーター        |                            |                                              |
| ファンクショナルリード   | Paulina Sędłak-Jakubowska  | Senior Frontend Engineer, Create:Source Code |
| ファンクショナルリード   | Rahul Chanila              | Senior Frontend Engineer, Package            |
| ファンクショナルリード   | Jeremy Elder               | Staff Product Designer, Manage:Foundations   |
| メンバー             | Lisa Falcone               | Senior Paralegal, Legal & Corporate Affairs  |
| メンバー             | Scott de Jonge             | Senior Frontend Engineer, Manage:Foundations |
| メンバー             | Rajan Mistry               | Frontend Engineer, Plan:Product Planning     |
| メンバー             | Trevor Pierce              | Senior Accessibility Engineer, Foundations:Accessibility   |
