---
title: "Vue 3 検疫済みテスト 互換性タスクグループ"
description: "検疫済み jest テストの Vue 3 互換性についての詳細はこちら。"
upstream_path: /handbook/company/working-groups/task-groups/vue3-quarantined-tests/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-25T23:31:04Z
translator: claude
stale: false
---

## 属性

| プロパティ | 値 |
| -------- | ----- |
| 作成日 | 2025-02-28 |
| 目標終了日 | 2025-08-31 |
| Slack | [#tg_vue3_quarantined_tests](https://gitlab.enterprise.slack.com/archives/C08FCG25CCE) |

## コンテキスト

[GitLab](https://gitlab.com/gitlab-org/gitlab) のユニットテストが Vue compat で合格し、互換性があることを確保するための大規模な取り組みが進行中です。現在の失敗の主な原因は、テストの記述方法における互換性の問題です。

テストが失敗する単一の理由はありませんが、既知の原因のほとんどとその対処方法は Epic [#Fix failing jest unit tests for Vue.js 3 in gitlab-org/gitlab](https://gitlab.com/groups/gitlab-org/-/epics/11740) にまとめられています。

## 目標

互換性の問題により現在失敗しているすべてのテストを修正します。

修正が必要なテストスイートのリストは、この[検疫済みリスト](https://docs.gitlab.com/development/testing_guide/testing_vue3/#quarantine-list)で管理されます。最新の状態を保つために、より使いやすい表示がこの[ページ](https://gitlab-org.gitlab.io/frontend/playground/jest-speed-reporter/vue3)で確認できます。

これらのテストを修正するための戦略は[Epic](https://gitlab.com/groups/gitlab-org/-/epics/11740)にドキュメント化されています。

## 非目標

* Vue Router 互換性エラーが含まれるテストの修正に特化した別のワーキンググループ [Vue 3 Router 4 テスト互換性タスクグループ](vue3-router4-tests.md) があります。

## 終了基準 {#exit-criteria}

* 互換性エラー（非目標を除く）を発行している[テスト](https://docs.gitlab.com/development/testing_guide/testing_vue3/#quarantine-list)が修正されている。

2025-12-01 時点で、上記の基準が満たされたため、このタスクグループは解散しました。

## 役割と責任

| タスクグループの役割 | 担当者 | 職位 |
| --------------- | ------ | ----- |
| DRI | Artur Fedorov | シニアフロントエンドエンジニア、Security Policies |
| メンバー | Alexander Turinske | スタッフフロントエンドエンジニア、Security Policies |
