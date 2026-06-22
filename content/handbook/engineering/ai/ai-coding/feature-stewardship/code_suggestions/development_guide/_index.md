---
title: "Development Guide"
description: "Code Suggestions の機能に取り組むエンジニア向けの開発ガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

## はじめに

このドキュメントには、エンジニア向けの Code Suggestions 開発ガイドラインが含まれています。

Code Suggestions の概要については、[AI Engineering Group engineering guide](/handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/engineering_overview/) を参照してください。

## 新しい AI モデルのサポート

Code Suggestions の提供内容が成熟し続け、ユーザーのニーズや利用可能な AI モデルについてより多くのことが分かってくるにつれて、Code Suggestions が使用する新しい AI モデルを追加したり、それに切り替えたりする必要が出てきます。

新しい AI モデルを私たちのシステムに統合する作業は、一般に次の 3 つのステップで構成されます。

1. [評価](model_evaluation_guide.md) - その AI モデルが私たちのユースケースの要件を満たしていることを確認します。
2. [実装](implementation_guidelines.md) - AI モデルが満足のいくものであると評価したら、それに応じてコードベースを更新する必要があります。
3. [ロールアウト](model_rollout_guide.md) - 新しいモデルのサポートを追加した後は、標準のロールアウトプロセスに従って、ユーザーに段階的に導入していきます。
