---
title: "Decision log"
description: "SDD のコンテキスト収集のために構造化された決定を収集する Decision log ワークアイテムウィジェットの設計。"
status: ongoing
maturity: still defining
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/decision_log/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

SDD の詳細は [Spec-Driven Development](index.md) をお読みください。

**成熟度：定義中**

## 概要

Decision log は、構造化された決定（保留中と決定済み）を収集する新しいワークアイテムウィジェットです。人間とエージェントの参照点となり、エージェントプラン生成セッションが開始されるたびにコンテキストとして含まれます。

エピック：[ワークストリーム 3 — Decision log](https://gitlab.com/groups/gitlab-org/-/work_items/21552)

## データモデル

ワークアイテム上の決定エントリのリスト。各エントリは：説明、ステータス（保留中/決定済み）、作成者、日付、オプションでアサイニーを持ちます。ストレージ形式は TBD — ウィジェットテーブルの JSON カラムか専用テーブルの個別レコードが選択肢。Issue テーブルは大きすぎる可能性が高く、別のテーブルが望ましい。

## インタラクション

- 人間は保留中の決定を手動で追加できる。
- エージェントはログを入力コンテキストとして読み取り、AI Gateway のワークアイテムツールを通じて新しいエントリを書き込める。
- コメントスレッドを「Make a decision」で解決するとその結果がログに保存され、Notes システムと Decision log ウィジェットを橋渡しする。
- 保留中の決定をユーザーに割り当てると、既存の To-Do システムを通じて To-Do アイテムが作成される。
- ウィジェット内の保留中のスレッドを提示し、スレッドごとにウィジェットから決定を行って未回答のスレッドを残さないようにする。

## 消費

Duo Chat セッションがワークアイテムで開始されるたびに、Decision log がワークアイテムツールを通じて読み取られます。
