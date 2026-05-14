---
title: "GitLab UI @vue/compat 互換性 タスクグループ"
description: "GitLab UI @vue/compat 互換性タスクグループの属性、目標、役割と責任についての詳細はこちら。"
upstream_path: /handbook/company/working-groups/task-groups/gitlab-ui-vue-compat/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: 2026-04-25T23:31:04Z
translator: claude
stale: false
---

## 属性

| プロパティ | 値 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日 | 2024-10-14 |
| 目標終了日 | 2024-12-24 |
| 終了日 | 2025-02-03 |
| Slack | [#tg_gitlab_ui_vue_compat](https://gitlab.enterprise.slack.com/archives/C07RN4H2CLV)（社内からのみアクセス可能） |

## コンテキスト

GitLab 全体を Vue 3 に移行するための作業のスコープは膨大です。その結果、Vue 3 ワーキンググループは、このようなより集中したタスクグループを支持して[解散](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/9156)しました。

GitLab UI ライブラリはさまざまなプロジェクト（GitLab、Switchboard、Editor Extensions）で使用されているため、Vue 3 採用の主要なブロッカーとなっています。GitLab UI を @vue/compat で動作させるための作業はすでに多く行われていますが、まだ多くが残っています。

## 目標

- GitLab UI のすべてのコンポーネントとディレクティブが @vue/compat で使用できるようにする。

## 非目標

- @vue/compat の採用をブロックしないため、コンポーネントやディレクティブを `MODE: 3` 互換性に近づけることは*行いません*。

## 終了基準 {#exit-criteria}

- @vue/compat に関するすべての[既知の問題](https://gitlab.com/groups/gitlab-org/-/epics/12386)が修正されているか、回避策がドキュメント化されている。
- @vue/compat でのすべてのスクリーンショットテストが合格している。

2025-02-03 時点で、上記の基準が満たされたため、このタスクグループは解散しました。

一部の[問題が残っている](https://gitlab.com/groups/gitlab-org/-/epics/12386)ものの、それらは低優先度とみなされており、Vue 2 のサポートを終了するまで修正できないものもあります。

## 役割と責任

| タスクグループの役割 | 担当者 | 職位 |
| --------------- | ------------- | ----------------------------------------------------|
| DRI | Mark Florian | スタッフフロントエンドエンジニア、Foundations::Design System |
| メンバー | Marina Mosti | シニアフロントエンドエンジニア、Switchboard |
| メンバー | Miguel Rincon | スタッフフロントエンドエンジニア、Verify:Runner |
