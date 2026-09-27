---
title: "Instruqt Tech Stack ガイド"
description: "Instruqt バーチャルラボシステムの Tech Stack ガイドです。"
upstream_path: /handbook/customer-experience/education-services/tech-stack/instruqt/
upstream_sha: 7a2e264cb798305fd5c92b586ef9fe633a730244
translated_at: "2026-09-27T00:10:26+00:00"
translator: codex
stale: false
lastmod: "2026-09-24T21:34:11+02:00"
---

Tech Stack の唯一の情報源は [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) であり、このアプリについての詳細情報が含まれています。

{{% tech-stack "Instruqt" %}}

### 実装

GitLab の Instruqt 実装はまだ進行中であり、完全には実装されていません。

### システム図

Instruqt の実装は SaaS アプリであり、[Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml?_gl=1%2anrxy62%2a_ga%2aNjk5OTc1OTcxLjE2NTg3ODM3ODE.%2a_ga_ENFH3X7M5Y%2aMTY3NDE0NTMxNC4xNDQuMS4xNjc0MTQ3ODY5LjAuMC4w) と統合されています。

```mermaid
graph TD
A[Thought Industries LMS] -->|User name and email| B(Instruqt)
B -->|Virtual Labs completed| C[Completion data transferred back to Thought Industries]
```

### データモデル

データモデルは利用できません。Instruqt はクローズドシステムです。

### インテグレーション

Instruqt の実装は SaaS アプリであり、[Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml?_gl=1%2anrxy62%2a_ga%2aNjk5OTc1OTcxLjE2NTg3ODM3ODE.%2a_ga_ENFH3X7M5Y%2aMTY3NDE0NTMxNC4xNDQuMS4xNjc0MTQ3ODY5LjAuMC4w) と統合されています。

### 主要レポート / ダッシュボード

すべてのダッシュボードとレポートはシステム自体の一部です。別途 Sisense レポートは利用できず、計画もありません。

### サポートガイドとステップバイステップ記事

[Instruqt サポートページ](https://docs.instruqt.com/)では、プロセスに関する詳細な記事とシステム使用のステップバイステップガイドを含むドキュメントサイトを提供しています。
