---
title: "Thought Industries LMS テックスタックガイド"
description: "Thought Industries ラーニングマネジメントシステムのテックスタックガイド"
upstream_path: /handbook/customer-experience/professional-services-engineering/education-services/lms/
upstream_sha: 7a2e264cb798305fd5c92b586ef9fe633a730244
translated_at: "2026-09-27T00:10:26+00:00"
translator: codex
stale: false
lastmod: "2026-09-24T21:34:11+02:00"
---

## Thought Industries LMS テックスタックガイド

テックスタックの唯一の情報源は [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) であり、このアプリに関する詳細情報が含まれています。

{{% tech-stack "Thought Industries LMS" %}}

### 実装

Professional Services 向け LMS の実装は[複数のフェーズに分けて整理](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/-/epics/390#project-scope)されています。

### システム図

Thought Industries LMS の実装は SaaS アプリであり、他の GitLab システムとは統合されていません。

```mermaid
graph TD
GC[GitLab Customer] -->|user authentication| LMS[LMS]
```

### データモデル

データモデルは公開されておらず、LMS はクローズドシステムです。

### インテグレーション

Thought Industries LMS の実装はスタンドアロンの SaaS アプリであり、他の GitLab アプリとは統合されていません。

### 主要レポート / ダッシュボード

すべてのダッシュボードとレポートは LMS 自体に含まれています。別途の Sisense レポートは利用可能でなく、計画もありません。
