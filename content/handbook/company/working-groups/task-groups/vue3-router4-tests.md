---
title: "Vue 3 Router 4 テスト互換性 タスクグループ"
description: "Vue 3 Router 4 テスト互換性タスクグループの属性、目標、役割と責任についての詳細はこちら。"
upstream_path: /handbook/company/working-groups/task-groups/vue3-router4-tests/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-25T23:31:04Z
translator: claude
stale: false
lastmod: "2025-03-07T09:01:55+01:00"
---

## 属性

| プロパティ | 値 |
| -------- | ----- |
| 作成日 | 2025-01-02 |
| 目標終了日 | 2025-03-31 |
| Slack | [#tg_vue3_router4_tests](https://gitlab.enterprise.slack.com/archives/C086YM54QQM) |

## コンテキスト

[GitLab](https://gitlab.com/gitlab-org/gitlab) のユニットテストが Vue compat で合格し、互換性があることを確保するための大規模な取り組みが進行中です。現在の失敗の主な原因は、Vue Router を組み込む際のテストの記述方法における互換性の問題です。

Vue 2 のルーターバージョンは [Vue router 3](https://v3.router.vuejs.org/) であり、Vue 3 のルーターバージョンは [Vue router 4](https://router.vuejs.org/guide/) です。両者の間にはいくつかの違いがあり、[移行ガイド](https://router.vuejs.org/guide/migration/)で説明されています。

Vue Router 3 と 4 のこれらの違いにより、[初期調査](https://gitlab.com/gitlab-org/gitlab/-/issues/509084)の結果に基づいてユニットテストを書き直す必要があります。

## 目標

Vue Router の非互換性によって現在失敗しているすべてのテストを修正します。

修正が必要なテストスイートのリストは、この[元の Issue のセクション](https://gitlab.com/gitlab-org/gitlab/-/issues/509084#tests-to-be-fixed)で管理されます。これを最新の状態に保つために、[ルーターエラーを取得するスクリプトが利用可能です](https://gitlab.com/gitlab-org/gitlab/-/issues/509084#note_2332185146)。

これらのテストが完全に対処されたら、[jest speed reporter](https://gitlab-org.gitlab.io/frontend/playground/jest-speed-reporter/vue3) を再確認して、ルーターの互換性による他のテストの失敗がないことを確認する必要があります。上記の調査では、失敗メッセージに "Vue router" という文字列が含まれることで互換性の問題により失敗するテストを特定していることを前提としています。

これらのテストを修正するための戦略は、Vue 3 テストハンドブックの [Vue Router のテスト](https://docs.gitlab.com/ee/development/testing_guide/testing_vue3.html#testing-vue-router)セクションにドキュメント化されています。

## 非目標

* Vue Router 3 と 4 の互換性に直接関係しないテストは、マイグレーション戦略の対象外であるため、考慮しません。

## 終了基準 {#exit-criteria}

* ルーター互換性エラー（非目標を除く）を発行している[テスト](https://gitlab-org.gitlab.io/frontend/playground/jest-speed-reporter/vue3)が修正されている。

2025-03-07 時点で上記の基準が満たされました。

[ルーター互換性に関するテスト](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/epics/645#note_2375985007)に修正が保留されているものはなく、[Vue router 4 テストドキュメント](https://docs.gitlab.com/development/testing_guide/testing_vue3/#testing-vue-router)が作成されました。

## 役割と責任

| タスクグループの役割 | 担当者 | 職位 |
| --------------- | ------ | ----- |
| DRI | Marina Mosti | シニアフロントエンドエンジニア、Switchboard |
