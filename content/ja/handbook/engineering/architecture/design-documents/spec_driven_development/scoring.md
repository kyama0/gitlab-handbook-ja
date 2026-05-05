---
title: "プラン準備スコアリング"
description: "Agent プランがエージェント実行に向けて準備できているかを示す準備スコアの設計。"
status: ongoing
maturity: still defining
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/spec_driven_development/scoring/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

SDD の詳細については [Spec-Driven Development](_index.md) をご覧ください。

**成熟度: 定義中**

## 概要

準備スコアは、Agent プランがエージェント実行に向けてどの程度準備できているかを示します。Duo Developer へのハンドオフ前における軽量な品質ゲートとして機能します。

Issue: [ワークストリーム 0.5 — Agent プランスコアと承認フロー](https://gitlab.com/gitlab-org/gitlab/-/work_items/596916)

## スコアリングモデル

テンプレートセクションの完全性、受け入れ基準の有無、解決済み vs 保留中の意思決定、トークン効率など、どのシグナルがスコアに寄与するかは TBD です。

## 計算方法

スコアをクライアントサイド（Markdown に対するヒューリスティック）、サーバーサイド（バックグラウンドジョブ）、LLM 呼び出しのいずれで計算するかは TBD です。

## 表示

スコアをどこにどのように表示するか（ウィジェット上、バッジ、ブロッキングゲートとして）は TBD です。

## 承認フロー

最終的にはスコアが自動実行のゲートになる可能性があります。ワークアイテムの承認はまだ存在しないため、これは将来の課題です。
