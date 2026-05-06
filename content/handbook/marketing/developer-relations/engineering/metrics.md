---
title: "メトリクス & Tableau ダッシュボード"
description: コミュニティ関連のダッシュボードで使用されるダッシュボードについて学びましょう！
upstream_path: /handbook/marketing/developer-relations/engineering/metrics/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

### 私たちが使用するダッシュボード

ダッシュボードを表示するには、ブラウザがサードパーティクッキーを許可する必要があります。

- [Wider Community PIs](https://us-west-2b.online.tableau.com/t/gitlabpublic/views/WiderCommunityPIsPart1/WiderCommunityPIsDashboardPart1)
  - 月ごとのユニークな広範コミュニティ貢献者数
  - 作成、マージ、クローズされた MR の数
  - MR の作成からマージまでの時間 (OCMA)
  - MR がレビュー準備完了からレビューされるまでの時間

## Tableau ダッシュボード

### `product_community_contribution_mrs`

[製品の一部であるプロジェクト](/handbook/product/groups/product-analysis/engineering/metrics/#projects-that-are-part-of-the-product)で開かれた、~"Community contribution" ラベル付きのマージリクエスト。

結果には、MR タイプ、MR の経過時間、MR ラベル、MR ステージ、MR グループ、MR セクションが含まれます。

#### マージリクエストの絶対 URL の検索

`gitlab_dotcom_groups_xf` テーブルが 4 回 join されています。これは、namespace 自体から階層全体を理解することが難しいためです。namespace は、グループのグループのグループの中に、あるいはさらに深くネストされている可能性があります。そのため、特定のマージリクエストの完全な URL パスを再構築するために、階層全体を見つけることが重要です。

最終結果は、最大の形式では次のようになる可能性があります: `https://gitlab.com/group4/group3/group2/group1/project_path/merge_requests/merge_request_id`

#### MR のカテゴリ分け

すべての MR にまだタイプラベルがあるわけではないため、既存のラベルに基づいてタイプを推測しようとしています。スニペットには、3 つのタイプ (feature、maintenance、bug) が表現されているのがはっきりとわかります。

#### 最終アクティブ日

スニペットは、マージリクエストが最後にアクティブだったのがいつかを見つけるために、かなりの労力を費やします。状態が open、merged、closed のいずれかである可能性があるため、各状態の最終アクティブ日を理解するための異なるロジックがあります。この日付を使用すると、マージリクエストが open されていた、または現在 open されている日数を理解できます。これはマージリクエストの経過時間 (Merge Request Age) としても知られています。

#### レポートからのユーザー除外

レポートから除外される特定の作成者または MR があります。これらは GitLab 組織に属しているため、コミュニティ MR メトリクスを見るときに考慮されるべきではありません。除外されるべき作成者を見つけた場合、将来メトリクスから除外できるようにこのスニペットに追加する必要があります。例えば、GitLab Bot、Release Bot、Reviewer/Recommender Bot などです。

### `community_contributions_base`

`product_community_contribution_mrs` と似ていますが、結果には MR ライフサイクルデータ (トリアージまでの時間、最初のレビューまでの時間、マージまでの予想日数など) が含まれます。
