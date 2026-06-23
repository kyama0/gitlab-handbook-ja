---
title: "Code Suggestions"
description: "IDE 内での AI 生成によるコード補完と生成"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:24:31.0151723+09:00"
translator: codex
stale: false
---

## 概要

Code Suggestions は、AI Coding グループによって開発された主要な機能の 1 つです。これは、2 つの主要な機能を通じて IDE 内で AI 生成のコードを提供します。

- **Code Completion**: 既存のコード行またはブロックを完成させることを意図した、短い AI 生成のサジェスチョン
- **Code Generation**: 関数、クラス、コードブロック全体などを作成することを意図した、長い AI 生成のサジェスチョン

## お問い合わせ

| カテゴリ                 | 名前                |
|--------------------------|---------------------|
| グループ Slack チャンネル      | #g_ai_coding        |
| Code Suggestions チャンネル | #f_code-suggestions |

## 主要な概念

この領域で使用する用語の多くは似ているため、最初は混乱する可能性があります。私たちが使用する基本的な用語は以下のとおりです。

- **Code Suggestions**: IDE 内で AI 生成のコードを提供する AI Coding 内の機能
  - **Code Completion**: 既存のコード行またはブロックを完成させることを意図した、短い AI 生成のサジェスチョン
  - **Code Generation**: 関数、クラス、コードブロック全体などを作成することを意図した、長い AI 生成のサジェスチョン
- **Duo Chat**: GitLab Duo Chat と対話して新しいコードを書いたり、既存のコードをリファクタリングしたり、脆弱性のためにコードをスキャンする別の機能

役立つ場合は、これらの用語を図にしたものを以下に示します。

```mermaid
stateDiagram
    direction LR

    state "AI Coding" as aicoding
    state "Code Suggestions" as suggestions
    state "Code Completion" as completion
    state "Code Generation" as generation
    state "Duo Chat Features" as duo

    aicoding --> suggestions
    aicoding --> duo
    suggestions --> completion
    suggestions --> generation
```

## 技術的実装

アーキテクチャ図と API の詳細を含む Code Suggestions の動作に関する詳細な技術情報については、[Engineering Overview](/handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/engineering_overview/) を参照してください。

## ダッシュボードとモニタリング

- [User Metrics](https://10az.online.tableau.com/#/site/gitlab/views/PDCodeSuggestions/ExecutiveSummary) ([README](https://10az.online.tableau.com/#/site/gitlab/views/PDCodeSuggestions/README?:iid=1)) - 使用状況、アクセプタンス率、レイテンシ、エラー率など (Tableau)
- [General Metric Reporting](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1) - コードサジェスチョンのレートリミット、X-Ray の使用状況などを見ることができます (Tableau)
- [Log Visualization Dashboard](https://log.gprd.gitlab.net/app/dashboards#/view/6c947f80-7c07-11ed-9f43-e3784d7fe3ca?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-6h,to:now))) - レイテンシ、レスポンスコード、リクエスト数などの別ビュー (Kibana)
- [Latency Dashboard](https://log.gprd.gitlab.net/app/r/s/mMaY3): コードサジェスチョンのサーバー側レイテンシの内訳 (Kibana)
- [LSP Sentry Alerts](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/gitlab-language-server/51/details/) およびアラートが投稿される対応する Slack チャンネル: [#g_code_creation_alerts](https://gitlab.enterprise.slack.com/archives/C096BUFJHFU)

## ドキュメント

- [Development Guide](/handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/) - エンジニア向けの開発ガイド
- [GitLab Duo](https://docs.gitlab.com/user/gitlab_duo/) - GitLab ドキュメント
- [GitLab Documentation](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) - GitLab ドキュメント
- [Direction](https://about.gitlab.com/direction/create/code_creation/code_suggestions/)
- [Difference between Code Completion and Code Generation](https://youtu.be/9dsyqMt9yg4) - YouTube
- [Engineering Overview](/handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/engineering_overview/) - Code Suggestions の技術概要
- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/18077)
