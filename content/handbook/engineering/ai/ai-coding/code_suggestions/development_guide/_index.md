---
title: "開発ガイド"
description: "Code Suggestions 機能に取り組むエンジニア向けの開発ガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/code_suggestions/development_guide/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-16T11:38:55-06:00"
---

## はじめに

このドキュメントには、エンジニア向けの Code Suggestions 開発ガイドラインが含まれています。

Code Suggestions の概要については、[AI Engineering グループのエンジニアリングガイド](/handbook/engineering/ai/ai-coding/code_suggestions/engineering_overview/) を参照してください

## 新しい AI モデルのサポート

Code Suggestions の提供が成熟し続け、ユーザーのニーズや利用可能な AI モデルについてより多くを発見するにつれて、Code Suggestions が使用する新しい AI モデルを追加または切り替える必要があります。

新しい AI モデルを私たちのシステムに統合することは、一般に 3 つのステップで構成されます。

1. [評価](model_evaluation_guide.md) - AI モデルが私たちのユースケースの要件を満たしていることを確認します。
2. [実装](implementation_guidelines.md) - AI モデルを満足できるものとして評価したら、それに応じてコードベースを更新する必要があります。
3. [ロールアウト](model_rollout_guide.md) - 新しいモデルのサポートを追加した後、ユーザーにゆっくりと導入するための標準的なロールアウトプロセスに従う必要があります。
