---
title: "継続的スキャン ワーキンググループ"
description: "GitLab プロジェクトへの継続的スキャンを実装します"
upstream_path: /handbook/company/working-groups/continuous-scanning/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日           | 2022-05-23 |
| 終了日           | 2022-10-03 |
| Slack           | #wg_continuous_vuln_scans（社内からのみアクセス可能）|
| Google Doc      | [Event Stream Working Group Agenda](https://docs.google.com/document/d/1ubcIkyL1rAThg_tsbm5gpEOQtOFLfKe9g9t-z8Cs95o)（社内からのみアクセス可能）|
| Issue ラベル     | ~WorkingGroup::ContinuousScanning |

## 目標

このワーキンググループの目標は、[この Epic](https://gitlab.com/groups/gitlab-org/-/epics/7886) に記載された作業を完了することです。

## 終了条件

終了条件は[この Epic](https://gitlab.com/groups/gitlab-org/-/epics/7886) に記載された提案にマッピングされています：

 1. SBOM 情報がデータベースに取り込まれ保存される
 1. ~~Advisory DB 情報がデータベースに取り込まれ保存される~~
 1. ~~SBOM 情報または Advisory DB 情報に変更が検出された際にスキャンが自動的にトリガーされる~~

## 成果

グループが発足した時点では、対象となる機能は異なるステージとグループにまたがるカテゴリに分散していました。[Govern Stage](https://about.gitlab.com/direction/software_supply_chain_security/) の設立により、残りの 2 項目は Secure ステージの [Composition Analysis](https://about.gitlab.com/direction/application_security_testing/#groups) グループの責任範囲に完全に収まるようになったため、オーナーグループの通常業務として完了させることが最善と判断されました。

## ロールと責任

| ワーキンググループの役割 | 担当者             | 役職                                           |
|--------------------|--------------------|-------------------------------------------------|
| エグゼクティブスポンサー | Hillary Benson     | Director of Product Management, Sec & Data Science  |
| エンジニアリング DRI    | Thiago Figueiró    | Backend Engineering Manager, Govern:Threat Insights, Govern:Security Policies |
| プロダクト DRI         | Matt Wilson        | Senior Product Manager, Govern                  |
| メンバー               | Igor Frenkel       | Senior Backend Engineer, Secure:Composition Analysis |
| メンバー               | Brian Williams     | Senior Backend Engineer                         |
| アドバイザー            | Mehmet Emin Inac   | Staff Backend Engineer, Govern:Threat Insights  |
