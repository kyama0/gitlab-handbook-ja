---
title: "Credly Tech Stack ガイド"
description: "Credly デジタル認定システムの Tech Stack ガイドです。"
upstream_path: /handbook/customer-experience/education-services/tech-stack/credly/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-17T08:57:27+00:00"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

[Tech Stack](/handbook/business-technology/tech-stack-applications/)が唯一の情報源であり、このアプリについての詳細情報が含まれています。

### 実装 {#implementation}

このシステムの実装は 2022 年 5 月から 6 月にかけて行われました。すべてのデジタルバッジが以前のシステム Badgr から Credly に移行されました。

### システム図 {#system-diagram}

Credly デジタル認定システムは SaaS アプリであり、[Thought Industries LMS](/handbook/customer-experience/professional-services-engineering/education-services/lms/) と統合されています。

```mermaid
graph TD
A[User starts completing content in Level Up] -->|Assignments/Submissions are graded| B(Level Up/Thought Industries registers completion and/or scores)
B --> C{Completion based on score}
C -->|Greater than 80%| D[Credly auto-issues the digital badge]
C -->|Less than 80%| E[Level Up sends an email to the user to retake]
```

### データモデル {#data-model}

データモデルは以下のとおりです:

```mermaid
graph TD
A[Thought Industries collects user email and course completion/scores] -->|Assignments are graded| B(Course is completed successfully)
B -->|80% or better completion| C[TI sends user email through native integration with Credly]
C --> E[Credly issues digital credential to user via email]
```

### インテグレーション {#integrations}

Credly デジタル認定システムは SaaS アプリであり、[Thought Industries LMS](/handbook/customer-experience/professional-services-engineering/education-services/lms/) と統合されています。

### 主要レポート / ダッシュボード {#key-reports--dashboards}

すべてのダッシュボードとレポートはシステム自体の一部です。別途 Sisense レポートは利用できず、計画もありません。

### サポートガイドとステップバイステップ記事 {#support-guides-and-step-by-step-articles}

[Credly サポートページ](https://credlyissuer.zendesk.com/hc/en-us)では、プロセスに関する詳細な記事とシステム使用のステップバイステップガイドを含むドキュメントサイトを提供しています。
