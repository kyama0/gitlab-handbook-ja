---
title: "下流の利用者"
description: "Duo Developer と他のエージェントが、実行と検証のために Workplan をどのように使用するか。"
status: ongoing
maturity: still defining
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/downstream_consumers/"
upstream_sha: "2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8"
lastmod: "2026-10-20T13:32:50-04:00"
translated_at: "2026-10-20T21:12:55Z"
translator: "claude"
stale: false
---

SDD の詳細は、[Spec-Driven Development](_index.md)を参照してください。

**成熟度：定義中**

## 概要 {#summary}

Workplan の価値は、下流のエージェントがそれを使用することで生まれます。このページでは、Duo Developer が Workplan に基づいてどのように実装するかと、将来、Workplan に照らした検証をどのように行えるかを説明します。

## Duo Developer への引き渡し {#duo-developer-handoff}

Workplan が存在するとき、ユーザーは Implementation ウィジェットまたは Workplan パネルで **Implement** を選択します。これにより、Duo Chat を開かずに、Duo Developer フロー（`developer/v1`）が非同期に開始します（[Issue 628801](https://gitlab.com/gitlab-org/gitlab/-/work_items/628801)）。

Duo Developer は、Workplan を主要な仕様として扱います。ワークアイテムの説明とコメントは、追加の背景情報としてのみ使用します。

前提条件として、Duo Agent Platform のリモートフローを有効にする必要があります。Developer フローが設定されていない場合、**Implement** ボタンは無効になり、ツールチップが表示されます（[Issue 629904](https://gitlab.com/gitlab-org/gitlab/-/work_items/629904)）。

クローズされたワークアイテムでは、ウィジェットと Workplan パネルの両方で **Implement** ボタンを非表示にします（[マージリクエスト 261747](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/261747)）。Developer フローの開始には CI フローの権限も必要です。ワークアイテムのアクション権限との整合は、[Issue 634208](https://gitlab.com/gitlab-org/gitlab/-/work_items/634208)で追跡しています。

Implementation ウィジェットに実装フェーズとマージリクエストのステータスを表示する作業は、[Issue 628976](https://gitlab.com/gitlab-org/gitlab/-/work_items/628976)で引き続き未解決です。実行中の **Implement** の繰り返しクリックに対処しつつ、意図的な再実行を可能にすることも、この進行中の設計作業に含まれます。

## Duo Review による検証（先送り） {#duo-review-validation-deferred}

Duo Review エージェントは、元の Workplan を評価基準として使用し、マージリクエストの変更をそれに照らして検証できる可能性があります。これは、[ワークアイテムとマージリクエストの関係](wi_mr_relationship.md)に依存します。現在のエピックには含まれません。

エピック：[ワークストリーム 1：MR での仕様遵守の強制](https://gitlab.com/groups/gitlab-org/-/work_items/21514)

## MR のマージチェック（先送り） {#merge-check-in-mr-deferred}

マージ時に、マージチェックとして Workplan を検証することは、現在のエピックには含まれません。SDD の代わりに、[Code Review Lifecycle Transformation](https://docs.google.com/document/d/1BsdLonLqNyB0QSdEiUaJJ5GNQLkr-gKx_uQNTApdfCA/edit?tab=t.0)の取り組みで扱う可能性があります。

## API サーフェス {#api-surface}

下流のエージェントは、ワークアイテムの GraphQL API と MCP ワークアイテムツールを通じて Workplan を読み取ります。[Workplan](workplan.md#api-surface)を参照してください。

## 構造化形式と生の Markdown {#structured-vs-raw-markdown}

下流のエージェントは、生の Markdown として Workplan を使用します。Workplan が、セクション、受け入れ基準、テストケースなどのより豊富な構造に発展した場合、シリアライゼーションと後方互換性への対応が必要になります。

## 決定 {#decisions}

| 日付 | 決定 | 決定者 |
| ---- | -------- | --- |
| 2026-04-17 | 下流のエージェントが使用する Workplan の形式は **Markdown** です（YAML や構造化 JSON ではありません）。Markdown は人が読みやすく、すでに GitLab の説明で一般的に使われている形式であり、利用側のシリアライゼーションのオーバーヘッドを回避できます。 | @fredericcaplette |
| 2026-09-23 | **Implement** は、Duo Chat を開く代わりに、Duo Developer を非同期に実行します。 | WS-7 |
