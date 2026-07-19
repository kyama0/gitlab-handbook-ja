---
title: 'イテレーション'
description: 'イテレーションに関するドキュメント'
upstream_path: "/handbook/eta/css/gitlab/iterations/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:54:37+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、Customer Support Systems が GitLab イテレーションを使用して、1 週間の期間内で作業を整理・追跡する方法を説明します。イテレーションは、チームの作業負荷の管理、現在の優先事項への集中、週ごとの進捗の可視化に役立ちます。

## イテレーションを理解する

### イテレーションとは

Customer Support Systems では、イテレーションは現在取り組んでいる Issue をグループ化・追跡するための 1 週間の期間です。各イテレーションは日曜日から土曜日まで実行され、チームが現在の優先事項に集中し、週ごとの作業負荷と進捗を可視化するのに役立ちます。

技術的には、イテレーションは特定の期間の Issue をまとめる GitLab のタイムボックス型ワークフロー機能です。イテレーションはさまざまな期間（通常 1 〜 3 週間）に設定できますが、Customer Support Systems では週次ワークフローのリズムに合わせて一貫した 1 週間間隔を使用します。

### Customer Support Systems によるイテレーションの使用方法

イテレーションを使用して週次ワークフローを整理し、進行中の作業を可視化します。イテレーションは次のことに役立ちます。

- **週ごとの作業負荷を追跡する**: 今週どの Issue に取り組んでいるかを確認する
- **集中を維持する**: 関連する作業を管理しやすい期間にまとめる  
- **キャパシティを計画する**: チームの余力とコミットメントを把握する
- **進捗を測定する**: 毎週完了した内容をレビューする
- **繰り越しを有効にする**: 完了していない Issue は次のイテレーションへ自動的に移動し、作業が失われたり忘れられたりすることを防ぐ

チームメンバーは、トリアージ中または作業開始時に Issue にイテレーションを割り当てます。これにより現在の優先事項を明確に把握でき、作業の抜け漏れを防ぐことに役立ちます。

### Issue の自動繰り越し

イテレーション終了前（土曜日午後 11:59）に Issue がクローズされない場合、新しいイテレーションが始まる日曜日に GitLab が自動的に次週のイテレーションへ移動します。これにより、進行中の作業は引き続き追跡され、チームのビューから消えることはありません。

継続ではなく延期する作業の場合は、期間終了前にイテレーションを削除することで、特定の Issue の自動繰り越しを防止できます。

## 現在のイテレーション一覧を表示する

Customer Support Systems の現在のイテレーション一覧を表示するには、[このページ](https://gitlab.com/groups/gitlab-com/gl-security/corp/cust-support-ops/-/cadences/?createdCadenceId=2062775)に移動します。

表示されるイテレーション期間をクリックすると、その期間にリンクされた Issue をレビューできます。

## Issue にイテレーションを適用する

Issue にイテレーションを適用するには、Issue の右側パネルにある `Iteration` の横の `Edit` をクリックするか、[iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#iteration)を使用します。

現在のイテレーションを適用するために [iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#iteration)を使用する場合、使用する具体的なテキストは次のとおりです。

```plaintext
/iteration [cadence:"Customer Support Operations"] --current
```

注記: 角括弧はコマンド構文の一部です

## Issue からイテレーションを削除する

Issue からイテレーションを削除するには、Issue の右側パネルにある `Iteration` の横の `Edit` をクリックするか、[remove_iteration クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#remove_iteration)を使用します。

```plaintext
/remove_iteration
```

## イテレーションの設定

参考として、Customer Support Systems のイテレーションでは次の設定を使用します。

- タイトル: `Customer Support Operations`
- 説明: `Weekly iteration for Customer Support Operations`
- 自動スケジューリング
  - [x] 自動スケジューリングを有効化
  - 自動開始日: `2025-04-06`（イテレーションを設定した日）
  - 期間: 1（イテレーションは 1 週間）
  - 今後のイテレーション: 10（現在のイテレーションと将来の 9 件を利用可能にする）
  - Issue を繰り越す
    - [x] 繰り越しを有効化
