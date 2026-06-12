---
title: AI 支援機能
description: "このページには GitLab における AI に関する情報が含まれています。"
upstream_path: /handbook/product/ai/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
translated_at: "2026-06-12T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-06-09T14:49:21+05:00
model: claude-opus-4-7
---

このページは、GitLab の AI 機能に取り組むチームメンバーが情報を探すためのリソースとして機能します。最初のイテレーションでは、ゆるくまとめられたリンクのリストとなっています。ベストプラクティスを構築し、ドキュメントを統合・改善していくにつれて、このページも改善されていきます。

## AI 機能の取り組みを始める {#getting-started-on-an-ai-feature}

* [AI 機能の提案](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=AI%20Project%20Proposal&issue%5Btitle%5D=AI+Feature+Proposal:+): AI 機能の提案・要望のための Issue テンプレート

## AI 機能のデザインと UX リサーチ {#design-and-ux-research-for-ai-features}

* [Pajamas AI ガイドライン](https://design.gitlab.com/usability/ai-human-interaction/): AI 機能のユーザー体験を設計する方法。デザインパターンとガイドラインを含みます。
* [AI 領域における UX リサーチ](/handbook/product/ux/experience-research/research-in-the-ai-space/): チームメンバーが AI 機能の有用性とユーザビリティを評価するのに役立ちます。
* [UX 成熟度ガイドライン](/handbook/product/ai/ux-maturity/): AI 機能の成熟度を高めるために推奨される UX 検証。

## AI 機能の品質評価 {#evaluating-quality-of-ai-features}

* AI Framework チームは、AI 搭載機能の開発、テスト、評価に関する[ガイダンス](https://docs.gitlab.com/development/ai_features/ai_feature_development_playbook/)を提供しています。
* UX リサーチチームは、使いやすさを確保するための[ユーザビリティ評価とスコアリングプロセス](/handbook/product/ux/experience-research/research-in-the-ai-space/#ai-user-experience-survey-pilot)を維持しています。
* AI 応答品質に関する迅速で定性的なフィードバックを得たり、ユーザーがどのようなプロンプトを書くかを把握するために、[UX Chat Bash](/handbook/product/ux/experience-research/ux-bash/) を実施できます。

## AI 機能に関する特別な考慮事項 {#special-considerations-for-ai-features}

* [AI 倫理原則](/handbook/legal/ethics-compliance-program/ai-ethics-principles/#1-avoid-unfair-bias): GitLab に AI 機能を組み込んでいくにあたって意思決定を導き、これらの機能が私たちの価値観を適切に体現することを保証するための原則。
* [AI のデータ利用とプライバシー](https://docs.gitlab.com/user/gitlab_duo/data_usage/): データの利用と保護方法に関する公開ドキュメント。
* [モデルベンダー選定ガイドライン](/handbook/product/ai/model-vendor-selection-guidelines/): GitLab Duo を支えるモデルを開発・ホストするベンダーを評価・選定するためのフレームワーク。

## AI 機能のエンジニアリング {#engineering-ai-features}

* [AI 機能の開発プロセス](https://docs.gitlab.com/development/ai_features/)
* [言語モデル一覧](https://docs.gitlab.com/user/gitlab_duo/): 機能を支えるために使用しているすべてのモデル。
* [AI ベンダーの選定または切り替えのプロセス](/handbook/product/ai/continuity-plan/)

## AI 機能のサポートエンジニアリング {#support-engineering-ai-features}

* [サポート AI ワークフロー](/handbook/support/workflows/ai_features/): このページには、AI 機能に関連するチケットを処理するための情報が記載されています。

## 現在の AI 機能とチーム {#current-ai-features-and-teams}

* [ティア別 AI 機能](https://docs.gitlab.com/user/gitlab_duo/): 利用可能なすべての機能と、それらにアクセスする方法。
* [AI チーム](/handbook/engineering/ai/#ai-engineering-teams)
