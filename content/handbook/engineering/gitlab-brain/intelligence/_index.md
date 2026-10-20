---
title: "Intelligence"
description: "GitLab のデータをプロダクトに変える場所です。クエリレイヤー、ダッシュボード、および作業に関する質問に答えるエージェントを扱います。"
upstream_path: /handbook/engineering/gitlab-brain/intelligence/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:31:55+00:00"
translator: codex
stale: false
---

## 担当領域 {#areas}

このグループは、GitLab のデータをプロダクトに変える役割を担います:

- [Query and Semantics](query-and-semantics/): Query API と、データを読み取るための契約を担当します。
- [Data Intelligence Agent](data-intelligence-agent/): 自然な言葉で質問すると、検証できる回答が得られます。
- [Software Intelligence UI](software-intelligence-ui/): ダッシュボード、GLQL ビュー、およびプロダクト内の分析画面を担当します。

[Events Instrumentation SDKs](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/)は、[Event Platform](/handbook/engineering/gitlab-brain/event-platform/)グループに属します。

## プロダクトカテゴリー {#product-categories}

これらの領域は、[Analytics ステージのプロダクトカテゴリー](/handbook/product/categories/)に対応しています。

## デモ環境 {#demo-environments}

このグループのエンジニアは、変更の検証や、顧客とその他の関係者への機能の実演がしやすくなるよう、いくつかのデモ環境を維持しています。

| 用途 | URL |
|---|---|
| 顧客シミュレーション環境 | [tanuki-inc](https://gitlab.com/gitlab-org/monitor/tanuki-inc) |
| ステージングでの機能の検証 | [monitor-sandbox (Staging)](https://staging.gitlab.com/gitlab-org/monitor/monitor-sandbox) |
