---
title: 'イテレーション'
description: 'イテレーションに関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/iterations/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-21T12:28:59-06:00"
---

このガイドでは、Customer Support Operations が GitLab のイテレーションを使って 1 週間単位の作業をどのように整理・追跡しているかを説明します。イテレーションは、チームのワークロード管理、現在の優先事項への集中、週次の進捗の可視化に役立ちます。

## イテレーションについて

### イテレーションとは

Customer Support Operations にとってのイテレーションとは、現在進行中の Issue をグループ化して追跡するために使う 1 週間単位の期間のことです。各イテレーションは日曜日から土曜日まで実施され、現在の優先事項にチームが集中できるようにし、週次のワークロードと進捗を可視化します。

技術的には、イテレーションは GitLab のタイムボックス型ワークフロー機能であり、特定の期間に対して Issue をグループ化するものです。イテレーションはさまざまな期間（一般的には 1〜3 週間）に設定できますが、Customer Support Operations では週次のワークフローのリズムに合わせて、一貫して 1 週間間隔を採用しています。

### Customer Support Operations におけるイテレーションの使い方

私たちはイテレーションを使って週次のワークフローを整理し、進行中の作業を可視化しています。イテレーションは次のことに役立ちます。

- **週次のワークロードを追跡する**: 今週どの Issue に取り組んでいるかを把握する
- **集中を維持する**: 関連する作業を扱いやすい期間にまとめる
- **キャパシティを計画する**: チームの稼働能力とコミットメントを把握する
- **進捗を測定する**: 各週に完了した内容をレビューする
- **ロールオーバーを可能にする**: 完了しなかった Issue は自動的に次のイテレーションに移動するため、作業が失われたり忘れられたりしない

チームメンバーは、トリアージ時、または作業を開始するときに Issue にイテレーションを割り当てます。これにより現在の優先事項が明確になり、作業がこぼれ落ちるのを防げます。

### Issue の自動ロールオーバー

イテレーション終了時刻（土曜日 23:59）までに Issue がクローズされなかった場合、GitLab は新しいイテレーションが開始される日曜日に、その Issue を自動的に翌週のイテレーションへ移動します。これにより、進行中の作業が引き続き追跡され、チームの視界から消えてしまうことがありません。

特定の Issue について自動ロールオーバーを行いたくない場合は、期間が終わる前にイテレーションを外すことで防げます（作業を継続するのではなく延期する場合など）。

## 現在のイテレーション一覧の表示

Customer Support Operations の現在のイテレーション一覧を見るには、[このページ](https://gitlab.com/groups/gitlab-com/gl-security/corp/cust-support-ops/-/cadences/?createdCadenceId=2062775) にアクセスします。

表示されているイテレーションの期間をクリックすると、その期間に紐付いている Issue を確認できます。

## イテレーションを Issue に適用する

Issue にイテレーションを適用するには、Issue の右側パネルにある `Iteration` の横の `Edit` をクリックするか、[iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#iteration) を使用します。

[iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#iteration) を使って現在のイテレーションを適用したい場合、使用するテキストは次のとおりです。

```plaintext
/iteration [cadence:"Customer Support Operations"] --current
```

注意: 角括弧はコマンド構文の一部です。

## Issue からイテレーションを削除する

Issue からイテレーションを削除するには、Issue の右側パネルにある `Iteration` の横の `Edit` をクリックするか、[remove_iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#remove_iteration) を使用します。

```plaintext
/remove_iteration
```

## イテレーションのセットアップ

参考までに、Customer Support Operations のイテレーションは以下の設定を使用しています。

- タイトル: `Customer Support Operations`
- 説明: `Weekly iteration for Customer Support Operations`
- 自動スケジューリング
  - [x] 自動スケジューリングを有効にする
  - 自動開始日: `2025-04-06`（イテレーションをセットアップした日）
  - 期間: 1（1 イテレーションあたり 1 週間）
  - 今後のイテレーション数: 10（現在 + 9 個の将来のイテレーションが利用可能）
  - Issue のロールオーバー
    - [x] ロールオーバーを有効にする
