---
title: "Credly テックスタックガイド"
description: "Credly デジタル認定システムのテックスタックガイドです。"
upstream_path: /handbook/customer-success/education-services/tech-stack/credly/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

テックスタックの唯一の情報源は [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) であり、このアプリについての詳細情報が含まれています。


<p class="my-2 text-sm text-gray-600"><strong>Credly</strong> — 詳細は <a href="https://handbook.gitlab.com/handbook/business-technology/tech-stack/" rel="external noopener">テックスタック (英語)</a> を参照してください。</p>


### 実装

このシステムの実装は 2022 年 5 月から 6 月にかけて行われました。すべてのデジタルバッジが以前のシステム Badgr から Credly に移行されました。

### システム図

Credly デジタル認定システムは SaaS アプリであり、[Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) と統合されています。

```mermaid
graph TD
A[ユーザーが Level Up でコンテンツの受講を開始] -->|課題/提出物が採点される| B(Level Up/Thought Industries が修了および/またはスコアを記録)
B --> C{スコアに基づく修了}
C -->|80% 以上| D[Credly がデジタルバッジを自動発行]
C -->|80% 未満| E[Level Up がユーザーに再受験を促すメールを送信]
```

### データモデル

データモデルは以下のとおりです:

```mermaid
graph TD
A[Thought Industries がユーザーのメールとコース修了/スコアを収集] -->|課題が採点される| B(コースが正常に修了)
B -->|80% 以上の修了| C[TI が Credly とのネイティブインテグレーションを通じてユーザーのメールを送信]
C --> E[Credly がメール経由でユーザーにデジタル認定を発行]
```

### インテグレーション

Credly デジタル認定システムは SaaS アプリであり、[Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) と統合されています。

### 主要レポート / ダッシュボード

すべてのダッシュボードとレポートはシステム自体の一部です。別途 Sisense レポートは利用できず、計画もありません。

### サポートガイドとステップバイステップ記事

[Credly サポートページ](https://credlyissuer.zendesk.com/hc/en-us)では、プロセスに関する詳細な記事とシステム使用のステップバイステップガイドを含むドキュメントサイトを提供しています。
