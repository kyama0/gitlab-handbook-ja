---
title: "API ビジョン"
description: "GitLab API ビジョンワーキンググループは、現在の API を改善し、その将来の発展を定義することを目的としています。"
status: active
upstream_path: /handbook/company/working-groups/api-vision/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日    | 2022-02-07                                                                                                                                        |
| 終了日        | 2023-11-17                                                                                                                                               |
| Slack           | [#wg_api_vision](https://gitlab.slack.com/archives/C030DMJE0SZ)（社内からのみアクセス可能）                                         |
| Google ドキュメント      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1o4Tq84Lt5VnxrVZmhlP0u4qiErzC1MtVfivnIc6_29E)（社内からのみアクセス可能） |
| Issue ボード     | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/3929903)                                                |
| 概要 & ステータス | 以下の[終了基準](#exit-criteria)を参照 |

## 目標

GitLab API ビジョンワーキンググループは、現在の API を改善し、その将来の発展を定義することを目的としています。

### 概要

REST API と GraphQL API の間に一貫したビューがありません。GraphQL API が GitLab とプログラム的にやり取りする主要な手段であると規定していますが、この基準に従わないことがよくあります。両方の API は異なる機能セットをカバーしていますが、どちらも機能的に完全ではありません。

### 目標

以下は議論したいトピックのリストです：

- 責任、DRI（直接責任者）、技術専門家。現在、`Manage:Integrations` グループが API の DRI ですが、`@graphql-experts` グループも存在します。
- GitLab API の全般的なビジョン：
  - REST / GraphQL API の一貫性
  - REST ファースト対 GraphQL ファースト対別のアプローチ
- API のレビュー：
  - 全般的なアーキテクチャ
  - 権限とスコープ
  - 機能カバレッジ
  - パフォーマンス
- テスト：
  - カバレッジ
  - 自動テスト
  - ツール（例：Postman コレクション）
- API 廃止ライフサイクルと戦略：
  - REST v5 API またはさらなるイテレーション
  - GraphQL 廃止プロセス
- OpenAPI 仕様を含む API 標準
- ドキュメント：
  - 現在のドキュメントの改善
  - 初回 API ユーザーエクスペリエンスのレビュー
  - ドキュメントの自動化
  - すべてのパブリック及び内部 API の完全なカタログ
- 学習とコントリビューション：
  - コントリビュータードキュメントのレビュー
  - チームメンバー向け（特に GraphQL について）の学習パスの作成

### 終了基準 {#exit-criteria}

以下のテーブルにはワーキンググループのすべての終了基準が記載されています。これが[トップレベルエピック](https://gitlab.com/groups/gitlab-org/-/epics/8638)です。

| # | 完了日 | 進捗 | DRI             | 基準                                                                                                                                        |
|---|----------------|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | 未定            | 10%       | @g.hickman      | [将来数年間の GitLab API のビジョンを定義する](https://gitlab.com/groups/gitlab-org/-/epics/8633) |
| 2 | 未定            | 0%       | @m_gill | [前進するための一貫した開発戦略の基盤を整備する](https://gitlab.com/groups/gitlab-org/-/epics/8634)                        |
| 3 | 未定            | 0%       |     | [次世代 API に必要な作業を把握する](https://gitlab.com/groups/gitlab-org/-/epics/8115)                       |
| 4 | 未定            | 15%       | @.luke          | [API 廃止とライフサイクルポリシー](https://gitlab.com/groups/gitlab-org/-/epics/7667)                                                           |
| 5 | 未定            | 15%       | 未定      | [API ドキュメントを自動生成するコンセプトとロードマップの作成](https://gitlab.com/groups/gitlab-org/-/epics/8636)                                                    |
| 6 | 未定            | 5%       |   未定              | [適切なチェックと監視を備えた最低限のパフォーマンスと安定性レベルの定義](https://gitlab.com/groups/gitlab-org/-/epics/7520) |
| 7 | 未定            |       | | [堅牢な Open API](https://gitlab.com/groups/gitlab-org/-/epics/8926) |

## ロールと責任

| ワーキンググループのロール      | ユーザー名        | 担当者                                                                   | 役職                                                           |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| エグゼクティブステークホルダー   | @timzallmann    | [Tim Zallmann](/handbook/company/team/#timzallmann)       | シニアエンジニアリングディレクター、Dev                             |
| ファシリテーター             | @arturoherrero  | [Arturo Herrero](/handbook/company/team/#arturoherrero)   | エンジニアリングマネージャー、Manage:Integrations                     |
| ファシリテーター             | @g.hickman      | [Grant Hickman](/handbook/company/team/#g.hickman)        | シニアプロダクトマネージャー、Manage:Integrations                  |
| ファンクショナルリード         | @.luke          | [Luke Duncalfe](/handbook/company/team/#.luke)            | シニアバックエンドエンジニア、Manage:Integrations                 |
| ファンクショナルリード         | @axil           | [Achilleas Pipinellis](/handbook/company/team/#axil)      | シニアテクニカルライター、Enablement                             |
| ファンクショナルリード         | @Andysoiron     | [Andy Soiron](/handbook/company/team/#andysoiron)         | シニアバックエンドエンジニア、Manage:Integrations                 |
| メンバー                  | @grzesiek       | [Grzegorz Bizon](/handbook/company/team/#grzesiek)        | プリンシパルエンジニア、Verify                                      |
| メンバー                  | @f_caplette     | [Frédéric Caplette](/handbook/company/team/#f_caplette)   | シニアフロントエンドエンジニア、Verify:Pipeline Authoring             |
| メンバー                  | @bmarjanovic    | [Bojan Marjanovic](/handbook/company/team/#bmarjanovic)   | シニアバックエンドエンジニア、Manage:Integrations                 |
| メンバー                  | @kerrizor       | [Kerri Miller](/handbook/company/team/#kerrizor)          | シニアバックエンドエンジニア、Create:Code Review                     |
| メンバー                  | @lauraX         | [Laura Montemayor](/handbook/company/team/#laurax)        | バックエンドエンジニア、Verify:Pipeline Authoring                     |
| メンバー                  | @nagyv-gitlab   | [Viktor Nagy](/handbook/company/team/#nagyv-gitlab)       | シニアプロダクトマネージャー、Configure                               |
| メンバー                  | @kpaizee        | [Kati Paizee](/handbook/company/team/#kpaizee)            | シニアテクニカルライター、Growth and Ecosystem                   |
| メンバー                  | @fabiopitino    | [Fabio Pitino](/handbook/company/team/#fabiopitino)       | スタッフバックエンドエンジニア、Verify:Pipeline Execution               |
| メンバー                  | @dstull         | [Doug Stull](/handbook/company/team/#dstull)              | スタッフフルスタックエンジニア、Growth:Expansion                      |
| メンバー                  | @ntepluhina     | [Natalia Tepluhina](/handbook/company/team/#ntepluhina)   | スタッフフロントエンドエンジニア、Plan:Project Management                |
| メンバー                  | @avielle        | [Avielle Wolfe](/handbook/company/team/#avielle)          | バックエンドエンジニア、Verify:Pipeline Authoring                     |
