---
title: "API ビジョン"
description: "GitLab API ビジョンワーキンググループは、現在の API を改善し、その将来の発展を定義することを目的としています。"
status: active
upstream_path: "/handbook/company/working-groups/api-vision/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: "claude"
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## 属性

| プロパティ      | 値                                                                                                                                                |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日          | 2022-02-07                                                                                                                                        |
| 終了日          | 2023-11-17                                                                                                                                               |
| Slack           | [#wg_api_vision](https://gitlab.slack.com/archives/C030DMJE0SZ)（社内からのみアクセス可能）                                         |
| Google Doc      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1o4Tq84Lt5VnxrVZmhlP0u4qiErzC1MtVfivnIc6_29E)（社内からのみアクセス可能） |
| Issue ボード     | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/3929903)                                                |
| 概要とステータス | 以下の [終了基準](#exit-criteria) を参照 |

## 目標

GitLab API ビジョンワーキンググループは、現在の API を改善し、その将来の発展を定義することを目的としています。

### 概要

REST と GraphQL の API の間で、一貫したビューを持っていません。GraphQL API が GitLab とプログラマティックに対話する主要な手段であると定めていますが、しばしばこの基準に従っていません。両方の API は異なる機能セットをカバーしていますが、どちらも機能が完全ではありません。

### 目標

これは、私たちが議論したいトピックのリストです。

- 責任、Directly Responsible Individual、技術的エキスパート。現在、`Manage:Integrations` グループが API の DRI ですが、`@graphql-experts` グループも存在します。
- GitLab API の全般的なビジョン:
  - REST / GraphQL API の一貫性。
  - REST ファーストか、GraphQL ファーストか、別のアプローチか。
- API のレビュー:
  - 全般的なアーキテクチャ。
  - 権限とスコープ。
  - 機能カバレッジ。
  - パフォーマンス。
- テスト:
  - カバレッジ。
  - 自動テスト。
  - ツール（例: Postman コレクション）。
- API 非推奨化ライフサイクルと戦略:
  - REST v5 API またはさらなるイテレーション。
  - GraphQL 非推奨化プロセス。
- API 標準（OpenAPI 仕様を含む）。
- ドキュメント:
  - 現在のドキュメントを改善する。
  - 初めての API ユーザー体験をレビューする。
  - ドキュメントの自動化。
  - すべてのパブリック API と内部 API の完全なカタログ。
- 学習と貢献:
  - 貢献者向けドキュメントをレビューする。
  - チームメンバー向けの学習パスを作成する（特に GraphQL について）。

### 終了基準 {#exit-criteria}

以下の表に、ワーキンググループのすべての終了基準を示します。これは [トップレベル epic](https://gitlab.com/groups/gitlab-org/-/epics/8638) です。

| # | 完了日 | 進捗 | DRI             | 基準                                                                                                                                        |
|---|----------------|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | TBD            | 10%       | @g.hickman      | [今後数年間の GitLab API のビジョンを定義する](https://gitlab.com/groups/gitlab-org/-/epics/8633) |
| 2 | TBD            | 0%       | @m_gill | [今後の一貫した開発戦略の基盤を設定する](https://gitlab.com/groups/gitlab-org/-/epics/8634)                        |
| 3 | TBD            | 0%       |     | [次世代 API に必要な作業を把握する](https://gitlab.com/groups/gitlab-org/-/epics/8115)                       |
| 4 | TBD            | 15%       | @.luke          | [API 非推奨化とライフサイクルポリシー](https://gitlab.com/groups/gitlab-org/-/epics/7667)                                                           |
| 5 | TBD            | 15%       | TBD      | [API ドキュメントを自動生成するためのコンセプトとロードマップを作成する](https://gitlab.com/groups/gitlab-org/-/epics/8636)                                                    |
| 6 | TBD            | 5%       |   TBD              | [適切なチェックとモニタリングを伴うパフォーマンスと安定性の最低レベルを定義する](https://gitlab.com/groups/gitlab-org/-/epics/7520) |
| 7 | TBD            |       | | [堅牢な Open API](https://gitlab.com/groups/gitlab-org/-/epics/8926) |

## 役割と責任

| ワーキンググループの役割 | ユーザー名      | 担当者                                                                   | 役職                                                            |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| Executive Stakeholder   | @timzallmann    | [Tim Zallmann](https://gitlab.com/timzallmann)       | Senior Director of Engineering, Dev                             |
| Facilitator             | @arturoherrero  | [Arturo Herrero](https://gitlab.com/arturoherrero)   | Engineering Manager, Manage:Integrations                     |
| Facilitator             | @g.hickman      | [Grant Hickman](https://gitlab.com/g.hickman)        | Senior Product Manager, Manage:Integrations                  |
| Functional Lead         | @.luke          | [Luke Duncalfe](https://gitlab.com/.luke)            | Senior Backend Engineer, Manage:Integrations                 |
| Functional Lead         | @axil           | [Achilleas Pipinellis](https://gitlab.com/axil)      | Senior Technical Writer, Enablement                             |
| Functional Lead         | @Andysoiron     | [Andy Soiron](https://gitlab.com/andysoiron)         | Senior Backend Engineer, Manage:Integrations                 |
| Member                  | @grzesiek       | [Grzegorz Bizon](https://gitlab.com/grzesiek)        | Principal Engineer, Verify                                      |
| Member                  | @f_caplette     | [Frédéric Caplette](https://gitlab.com/f_caplette)   | Senior Frontend Engineer, Verify:Pipeline Authoring             |
| Member                  | @bmarjanovic    | [Bojan Marjanovic](https://gitlab.com/bmarjanovic)   | Senior Backend Engineer, Manage:Integrations                 |
| Member                  | @kerrizor       | [Kerri Miller](https://gitlab.com/kerrizor)          | Senior Backend Engineer, Create:Code Review                     |
| Member                  | @lauraX         | [Laura Montemayor](https://gitlab.com/laurax)        | Backend Engineer, Verify:Pipeline Authoring                     |
| Member                  | @nagyv-gitlab   | [Viktor Nagy](https://gitlab.com/nagyv-gitlab)       | Senior Product Manager, Configure                               |
| Member                  | @kpaizee        | [Kati Paizee](https://gitlab.com/kpaizee)            | Senior Technical Writer, Growth and Ecosystem                   |
| Member                  | @fabiopitino    | [Fabio Pitino](https://gitlab.com/fabiopitino)       | Staff Backend Engineer, Verify:Pipeline Execution               |
| Member                  | @dstull         | [Doug Stull](https://gitlab.com/dstull)              | Staff Fullstack Engineer, Growth:Expansion                      |
| Member                  | @ntepluhina     | [Natalia Tepluhina](https://gitlab.com/ntepluhina)   | Staff Frontend Engineer, Plan:Project Management                |
| Member                  | @avielle        | [Avielle Wolfe](https://gitlab.com/avielle)          | Backend Engineer, Verify:Pipeline Authoring                     |
