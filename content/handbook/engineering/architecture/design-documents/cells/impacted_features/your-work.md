---
stage: enablement
group: Tenant Scale
title: 'Cells: Your Work'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/your-work/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期段階を表しています。重要な側面は文書化されていませんが、今後追加する予定です。これは Cells の可能なアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないことにした場合でも、その理由を文書化できるようにこのドキュメントは保持されます。
{{% /alert %}}


Your Work は Organization にスコープされます。
各ダッシュボードに表示されるカウントは選択された Organization に関連します。

## 1. 定義

`gitlab.com/dashboard/` にアクセスすると、ユーザーは[アクセス可能なアイテムのフォーカスビュー](https://docs.gitlab.com/ee/tutorials/left_sidebar/index.html#use-a-more-focused-view)を見つけることができます。
この概要には以下に関するダッシュボードが含まれています:

- プロジェクト
- グループ
- Issue
- マージリクエスト
- To-Do リスト
- マイルストーン
- スニペット
- アクティビティ
- ワークスペース
- 環境
- 操作
- セキュリティ

## 2. データフロー

## 3. 提案

Your Work は Organization にスコープされ、ユーザーが現在表示している Organization でアクセスできるすべてのアイテムの概要を提供します。

- Issue、マージリクエスト、To-Do リストのカウントは選択された Organization を参照します。
- URL は `/-/organizations/<organization>/dashboard` という URL 構造で Organization を参照します。
- デフォルトの URL `/dashboard` は[ホーム Organization](../impacted_features/user-profile.md#3-proposal) を参照します。

## 4. 評価

Your Work を Organization にスコープすることは、[提案された Organization ナビゲーション](https://gitlab.com/gitlab-org/gitlab/-/issues/417778)のコンテキストで意味があります。
[ほとんどのユーザーが 1 つの Organization で作業することを予想している](../../organization/#data-exploration)ことを考慮すると、この影響は許容可能だと考えます。

## 4.1. メリット

- Organization にスコープされた Your Work を表示することで、ユーザーは現在選択している Organization に最も関連するコンテンツに集中できます。

## 4.2. デメリット

- 複数の Organization で作業するユーザーは、すべての作業アイテムにアクセスするために各 Organization に移動する必要があります。
