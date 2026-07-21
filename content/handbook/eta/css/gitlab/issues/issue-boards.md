---
title: 'Issue ボード'
description: 'Issue ボードのドキュメント'
upstream_path: "/handbook/eta/css/gitlab/issues/issue-boards/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
lastmod: "2026-07-21T11:29:58-05:00"
---

## Issue ボードを理解する

### Issue ボードとは

[GitLab](https://docs.gitlab.com/user/project/issue_board/)によると:

> Issue ボードは、GitLab で作業を管理および追跡するための視覚的な方法を提供します。Issue ボードには次の機能があります:
>
> - ラベル、マイルストーン、または担当者に基づいてカスタマイズ可能なリストに、Issue をカードとして表示する。
> - ワークフローのさまざまなステージを通じて Issue を追跡する。
> - Kanban や Scrum などのアジャイル手法をサポートする。
> - さまざまなチームとプロジェクトのために複数のボードを整理する。
> - プロセス全体にわたるワークロードと進捗を可視化する。

Customer Support Systems は、次の目的で Issue ボードを使用します:

- 対応が必要な Issue の概要を把握する
- Issue をステージ間で迅速に移動する
- 今後のワークロードとイテレーションを計画する

## 現在の Issue ボード

Customer Support Systems は、ワークロードの概要をすばやく把握するために Issue ボードを使用します。ここでは、主に使用するボードとその設定方法を詳述します。

### ステージ

<sup>[ソース](https://gitlab.com/groups/gitlab-com/eta/css/-/boards/11453656)</sup>

これは Customer Support Systems チームが主に使用するボードです。`Stage` スコープラベルでグループ化された、クローズされていないすべての Issue を表示します。

- 設定
  - タイトル: `Stages`
  - リストオプション
    - [ ] Open リストを表示する
    - [ ] Closed リストを表示する
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `Stage::Triage`
    - ラベル: `Stage::Triage`
    - 作業中の上限: なし
  - `Stage::Planning`
    - ラベル: `Stage::Planning`
    - 作業中の上限: なし
  - `Stage::Scheduling`
    - ラベル: `Stage::Scheduling`
    - 作業中の上限: なし
  - `Stage::Queued`
    - ラベル: `Stage::Queued`
    - 作業中の上限: なし
  - `Stage::Deployment`
    - ラベル: `Stage::Deployment`
    - 作業中の上限: なし
  - `Stage::Validation`
    - ラベル: `Stage::Validation`
    - 作業中の上限: なし
  - `Stage::Implementation`
    - ラベル: `Stage::Implementation`
    - 作業中の上限: なし
  - `Stage::Blocked`
    - ラベル: `Stage::Blocked`
    - 作業中の上限: なし
  - `Stage::Backlogged`
    - ラベル: `Stage::Backlogged`
    - 作業中の上限: なし

### 顧客

<sup>[ソース](https://gitlab.com/groups/gitlab-com/eta/css/-/boards/11453690)</sup>

これは Customer Support Systems ではあまり使用されないボードです。`Customer` スコープラベルでグループ化された、クローズされていないすべての Issue を表示します。

- 設定
  - タイトル: `Customers`
  - リストオプション
    - [ ] Open リストを表示する
    - [ ] Closed リストを表示する
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `Customer::Support`
    - ラベル: `Customer::Support`
    - 作業中の上限: なし
  - `Customer::ETA`
    - ラベル: `Customer::ETA`
    - 作業中の上限: なし
  - `Customer::Security`
    - ラベル: `Customer::Security`
    - 作業中の上限: なし
  - `Customer::Engineering`
    - ラベル: `Customer::Engineering`
    - 作業中の上限: なし
  - `Customer::Field`
    - ラベル: `Customer::Field`
    - 作業中の上限: なし
  - `Customer::Finance`
    - ラベル: `Customer::Finance`
    - 作業中の上限: なし
  - `Customer::Marketing`
    - ラベル: `Customer::Marketing`
    - 作業中の上限: なし
  - `Customer::People`
    - ラベル: `Customer::People`
    - 作業中の上限: なし

### リクエストタイプ

<sup>[ソース](https://gitlab.com/groups/gitlab-com/eta/css/-/boards/11453704)</sup>

これは Customer Support Systems ではあまり使用されないボードです。リクエストタイプを示すために使用するさまざまなラベルでグループ化された、クローズされていないすべての Issue を表示します。

- 設定
  - タイトル: `Request Type`
  - リストオプション
    - [ ] Open リストを表示する
    - [ ] Closed リストを表示する
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `RequestType::Bug`
    - ラベル: `RequestType::Bug`
    - 作業中の上限: なし
  - `RequestType::Incident`
    - ラベル: `RequestType::Incident`
    - 作業中の上限: なし
  - `RequestType::Feature`
    - ラベル: `RequestType::Feature`
    - 作業中の上限: なし
  - `RequestType::Administrative`
    - ラベル: `RequestType::Administrative`
    - 作業中の上限: なし
