---
title: "Instruqt Tech Stack ガイド"
description: "Instruqt バーチャルラボシステムの Tech Stack ガイドです。"
upstream_path: /handbook/customer-experience/education-services/tech-stack/instruqt/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-17T08:57:27+00:00"
translator: codex
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

[Tech Stack](/handbook/business-technology/tech-stack-applications/)が唯一の情報源であり、このアプリについての詳細情報が含まれています。

### 実装 {#implementation}

GitLab の Instruqt 実装はまだ進行中であり、完全には実装されていません。

### システム図 {#system-diagram}

Instruqt の実装は SaaS アプリであり、[Thought Industries LMS](/handbook/customer-experience/professional-services-engineering/education-services/lms/) と統合されています。

```mermaid
graph TD
A[Thought Industries LMS] -->|User name and email| B(Instruqt)
B -->|Virtual Labs completed| C[Completion data transferred back to Thought Industries]
```

### データモデル {#data-model}

データモデルは利用できません。Instruqt はクローズドシステムです。

### インテグレーション {#integrations}

Instruqt の実装は SaaS アプリであり、[Thought Industries LMS](/handbook/customer-experience/professional-services-engineering/education-services/lms/) と統合されています。

### 主要レポート / ダッシュボード {#key-reports--dashboards}

すべてのダッシュボードとレポートはシステム自体の一部です。別途 Sisense レポートは利用できず、計画もありません。

### サポートガイドとステップバイステップ記事 {#support-guides-and-step-by-step-articles}

[Instruqt サポートページ](https://docs.instruqt.com/)では、プロセスに関する詳細な記事とシステム使用のステップバイステップガイドを含むドキュメントサイトを提供しています。
