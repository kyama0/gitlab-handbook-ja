---
title: "Thought Industries LMS Tech Stack ガイド"
description: "Thought Industries ラーニングマネジメントシステムの Tech Stack ガイド"
upstream_path: /handbook/customer-experience/professional-services-engineering/education-services/lms/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-17T08:56:07+00:00"
translator: codex
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

## Thought Industries LMS Tech Stack ガイド {#thought-industries-lms-tech-stack-guide}

[Tech Stack](/handbook/business-technology/tech-stack-applications/)が唯一の情報源であり、このアプリに関する詳細情報が含まれています。

### 実装 {#implementation}

Professional Services 向け LMS の実装は[複数のフェーズに分けて整理](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/-/epics/390#project-scope)されています。

### システム図 {#system-diagram}

Thought Industries LMS の実装は SaaS アプリであり、他の GitLab システムとは統合されていません。

```mermaid
graph TD
GC[GitLab Customer] -->|user authentication| LMS[LMS]
```

### データモデル {#data-model}

データモデルは公開されておらず、LMS はクローズドシステムです。

### インテグレーション {#integrations}

Thought Industries LMS の実装はスタンドアロンの SaaS アプリであり、他の GitLab アプリとは統合されていません。

### 主要レポート / ダッシュボード {#key-reports--dashboards}

すべてのダッシュボードとレポートは LMS 自体に含まれています。別途の Sisense レポートは利用可能でなく、計画もありません。
