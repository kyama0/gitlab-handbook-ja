---
title: 'Issue ボード'
description: 'Issue ボードに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/gitlab/issues/issue-boards/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

## Issue ボードを理解する

### Issue ボードとは

[GitLab](https://docs.gitlab.com/user/project/issue_board/) によると以下のとおりです。

> Issue ボードは、GitLab で作業を視覚的に管理・追跡するための方法を提供します。Issue ボードは次のことを行います。
>
> - ラベル、マイルストーン、または担当者に基づいてカスタマイズ可能なリストにカードとして Issue を表示します。
> - ワークフローのさまざまな段階を通じて Issue を追跡します。
> - カンバンやスクラムなどのアジャイル方法論をサポートします。
> - 異なるチームやプロジェクトのために複数のボードを整理します。
> - プロセス全体でのワークロードと進捗を視覚化します。

カスタマーサポートオペレーションでは Issue ボードを以下の目的で使用しています。

- 取り組むべき Issue の概要を把握する
- ステージ間で Issue を素早く移動する
- 今後のワークロードとイテレーションを計画する

## 現在の Issue ボード

カスタマーサポートオペレーションは、ワークロードの概要を素早く把握するために Issue ボードを使用しています。ここでは私たちが使用している主要なボードと、それらがどのように設定されているかを詳しく説明します。

### Stages

<sup>[ソース](https://gitlab.com/groups/gitlab-com/gl-security/corp/cust-support-ops/-/boards/9235621)</sup>

これはカスタマーサポートオペレーションチームが主に使用するボードです。`Stage` スコープラベルでグループ化された、すべての未クローズの Issue を表示します。

- 設定
  - タイトル: `Stages`
  - リストオプション
    - [ ] Open リストを表示
    - [ ] Closed リストを表示
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `Stage::Triage`
    - ラベル: `Stage::Triage`
    - 進行中作業の制限: なし
  - `Stage::Planning`
    - ラベル: `Stage::Planning`
    - 進行中作業の制限: なし
  - `Stage::Scheduling`
    - ラベル: `Stage::Scheduling`
    - 進行中作業の制限: なし
  - `Stage::Queued`
    - ラベル: `Stage::Queued`
    - 進行中作業の制限: なし
  - `Stage::Deployment`
    - ラベル: `Stage::Deployment`
    - 進行中作業の制限: なし
  - `Stage::Validation`
    - ラベル: `Stage::Validation`
    - 進行中作業の制限: なし
  - `Stage::Implementation`
    - ラベル: `Stage::Implementation`
    - 進行中作業の制限: なし
  - `Stage::Blocked`
    - ラベル: `Stage::Blocked`
    - 進行中作業の制限: なし
  - `Stage::Backlogged`
    - ラベル: `Stage::Backlogged`
    - 進行中作業の制限: なし

### Customers

<sup>[ソース](https://gitlab.com/groups/gitlab-com/gl-security/corp/cust-support-ops/-/boards/9235628)</sup>

これはカスタマーサポートオペレーションがあまり使用しないボードです。`Customer` スコープラベルでグループ化された、すべての未クローズの Issue を表示します。

- 設定
  - タイトル: `Customers`
  - リストオプション
    - [ ] Open リストを表示
    - [ ] Closed リストを表示
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `Customer::Support`
    - ラベル: `Customer::Support`
    - 進行中作業の制限: なし
  - `Customer::ETA`
    - ラベル: `Customer::ETA`
    - 進行中作業の制限: なし
  - `Customer::Security`
    - ラベル: `Customer::Security`
    - 進行中作業の制限: なし
  - `Customer::Engineering`
    - ラベル: `Customer::Engineering`
    - 進行中作業の制限: なし
  - `Customer::Field`
    - ラベル: `Customer::Field`
    - 進行中作業の制限: なし
  - `Customer::Finance`
    - ラベル: `Customer::Finance`
    - 進行中作業の制限: なし
  - `Customer::Marketing`
    - ラベル: `Customer::Marketing`
    - 進行中作業の制限: なし
  - `Customer::People`
    - ラベル: `Customer::People`
    - 進行中作業の制限: なし

### Request Type

<sup>[ソース](https://gitlab.com/groups/gitlab-com/gl-security/corp/cust-support-ops/-/boards/9235630)</sup>

これはカスタマーサポートオペレーションがあまり使用しないボードです。リクエストの種類を示すために使用するさまざまなラベルでグループ化された、すべての未クローズの Issue を表示します。

- 設定
  - タイトル: `Request Type`
  - リストオプション
    - [ ] Open リストを表示
    - [ ] Closed リストを表示
  - スコープ
    - マイルストーン: マイルストーンでフィルタリングしない
    - イテレーション: 任意のイテレーション
    - ラベル: 任意のラベル
    - 担当者: 任意の担当者
    - ウェイト: 任意のウェイト
- リスト
  - `RequestType::Bug`
    - ラベル: `RequestType::Bug`
    - 進行中作業の制限: なし
  - `RequestType::Incident`
    - ラベル: `RequestType::Incident`
    - 進行中作業の制限: なし
  - `RequestType::Feature`
    - ラベル: `RequestType::Feature`
    - 進行中作業の制限: なし
  - `RequestType::Administrative`
    - ラベル: `RequestType::Administrative`
    - 進行中作業の制限: なし
