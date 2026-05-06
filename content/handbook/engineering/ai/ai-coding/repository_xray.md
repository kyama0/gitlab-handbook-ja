---
title: "Repository X-Ray"
description: "コード提案のコンテキストを強化するためのリポジトリ解析とメタデータ抽出"
upstream_path: /handbook/engineering/ai/ai-coding/repository_xray/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 概要

[Repository X-Ray](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/repository_xray.html) は、リポジトリを解析してメタデータとコンテキスト情報を抽出する機能です。これらの情報はコード生成リクエストの追加コンテキストとして使われ、AI モデルがプロジェクトのコーディングパターンを理解しやすくします。

## 動作の仕組み

Repository X-Ray は、リポジトリを自動的に解析し、プロジェクトで使用されている外部依存関係やライブラリを抽出します。

抽出されたメタデータはデータベースに保存され、コード生成リクエストに含められて、より正確でコンテキストに沿った提案を提供します。

## 技術的な実装

Repository X-Ray のレポートは、プロジェクトのデフォルトブランチに変更がコミットされたタイミングで自動生成されます。

```mermaid
sequenceDiagram
   actor USR as User
   participant GIT as Gitaly
   participant GLR as GitLab Rails
   participant PG as GitLab PostgreSQL DB

   USR->>GLR: commits a change to the project's default branch
   GLR->>+GLR: triggers Repository X-Ray background job
   GLR->>GIT: fetches relevant files on default branch
   GIT->>GLR: file blobs
   GLR->>GLR: processes file blobs
   GLR->>-PG: upserts records to xray_reports
```

図に登場するコンポーネントは次のとおりです。

1. [Gitaly](https://docs.gitlab.com/ee/administration/gitaly/) - Git リポジトリへのハイレベルな RPC アクセスを提供するアプリケーション。
1. GitLab PostgreSQL DB - GitLab の運用データを保存するリレーショナルデータベースエンジン。

生成されたレポートは、その後コード生成リクエストに自動的に含まれ、AI モデルのプロジェクトコンテキスト理解を強化します。

## ダッシュボードとモニタリング

- [X-Ray Dependency Parsing Errors Dashboard](https://log.gprd.gitlab.net/app/dashboards#/view/a828978b-8f41-489a-9e3b-aa71937e25b9?_g=h@e98e959): X-Ray の依存関係スキャンで発生したパースエラーの内訳（Kibana）
- [General Metric Reporting](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1) - X-Ray の利用メトリクスを含む（Tableau）

## ドキュメント

- [Repository X-Ray ユーザードキュメント](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/repository_xray.html)
