---
title: "Memory とコンテキスト注入"
description: "エージェントプラン生成のためのプロジェクトコンテキストと Memory のモデリング、保存、注入の設計。"
status: ongoing
maturity: not for now
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/memory/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

SDD の詳細は [Spec-Driven Development](index.md) をお読みください。

**成熟度：現時点では対象外**

## 概要

エージェントプランを生成・改善するエージェントには、現在のワークアイテムを超えたコンテキストが必要です：プロジェクトの慣習、過去の決定、アーキテクチャパターン、チームの好みなど。このページでは、その外部コンテキストをどのようにモデル化し、保存し、注入するかを解説します。

エピック：[ワークストリーム 2 — メモリループ](https://gitlab.com/groups/gitlab-org/-/work_items/21512)

## Memory レイヤー

コンテキストは複数のスコープで存在します：プロジェクト、グループ、インスタンス、組織。階層化されたコンテキストを取得して優先順位付けするモデルは TBD です。考えられる 5 番目のスコープ（プロダクト）も議論されています。

## 注入ポイント

AI Gateway パイプラインのどこで Memory が注入されるか — プロンプト構築前のシステムコンテキストとして、またはエージェントがオンデマンドで呼び出すツールとして — は TBD です。

## ラーニングループ

エージェントが作業を完了し結果がレビュー（承認/却下）されたとき、その結果をラーニングとして収集し、将来のプラン生成のために Memory にフィードバックする必要があります。このフィードバックループのメカニズムは TBD です。

## ストレージ

Memory の保存場所 — リポジトリファイル（`.gitlab/memory/`）、データベースバックのストア、または Wiki — は TBD です。
