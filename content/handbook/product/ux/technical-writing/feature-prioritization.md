---
title: "Docs Engineering: 機能の優先順位付けとプロセス"
upstream_path: /handbook/product/ux/technical-writing/feature-prioritization/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T16:42:54+00:00"
---

## 概要

Docs Engineering チームは、[カンバン](https://en.wikipedia.org/wiki/Kanban_(development)) とマイルストーンベースの優先順位付けを使用して GitLab プロダクトドキュメントプラットフォームを維持しています。私たちは、新機能、プラットフォームの健全性、チームの生産性のバランスを取るテーマに作業を整理します。

- [Docs website ロードマップ](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1455)
- [ワークフローカンバンボード](https://gitlab.com/groups/gitlab-org/-/boards/4340643)
- [機能優先順位付けボード](https://gitlab.com/groups/gitlab-org/-/boards/9702008)

GitLab の[プロダクト原則](../../product-principles.md) と [プロダクト開発フロー](../../../product-development/how-we-work/product-development-flow/_index.md) から着想を得て、それを私たちのチームコンテキストに適応させています。

## Issue ライフサイクル

### Issue を作成する

誰でも Docs ウェブサイト用の [Issue を作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues/new?type=ISSUE) できます。バグには [bug テンプレート](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues/new?type=ISSUE&description_template=Bug) を、それ以外にはデフォルトテンプレートを使用してください。トリアージ時にラベルを追加するので、正しく入力することを心配する必要はありません。

ウェブサイト自体ではなく、docs コンテンツに問題がある場合は、該当ページの下部にある "Suggest updates" ボタンを使用して、適切なプロジェクトで Issue を開いてください。

### トリアージプロセス

テクニカルライティングの Staff エンジニアが、すべての新しい Issue を週 2 ～ 3 回レビューし、次の作業を行います。

- [作業タイプラベル](../../groups/product-analysis/engineering/metrics.md#work-type-classification) を適用
- 追加のカテゴリー分類のための [docs 固有のラベル](https://docs.gitlab.com/development/documentation/workflow/#available-labels) を追加
- 機能の工数見積もりのためのウェイト（1/3/8）を設定。ウェイトは優先順位付けに使用され、キャパシティ計画や完了日の見積もりには使用されません。
- 優先度とキャパシティに基づいてマイルストーンをアサイン。
- 実行可能になったら **Ready for development** としてマーク。

## 優先順位付けフレームワーク

### 優先度要因

- [顧客に成果をもたらす](../../../values/_index.md#results) こと
- インパクト対工数
- [テクニカルライティングチームロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363) との整合
- 技術的依存関係とブロッキング作業
- [R&D ガイドライン](../../product-processes/cross-functional-prioritization.md) ごとの 60/40 機能/メンテナンス目標

## 開発者ワークフロー

### 作業選択

チームメンバーは、機能作業、メンテナンス、バグ修正のバランスを取りながら、**Ready for development** カンバン列から自己選択します。利用可能なキャパシティに合う作業を選び、必要な際にはためらわずにガイダンスを求めてください。

### カンバンプロセス

Issue を **Ready for development** → **In dev** → **In review** → **Closed** の順に進めます。一般的に、作業はデプロイされ、ドキュメントが完了したときに「完了」となります。

### レビューとテストのガイドライン

すべてのコード変更は別のエンジニアによってレビューされるべきです。これらのレビューは、一般的な GitLab の [コードレビューベストプラクティス](https://docs.gitlab.com/development/code_review/#best-practices) に従うべきです。複雑な変更や、チームワークフローに影響を与える可能性のある変更については、複数のレビュアーをタグ付けすることを検討してください。

サイトの見た目や感じへの変更、特にユーザビリティに影響を与える可能性のあるグローバルな変更は、Staff+ テクニカルライターまたはマネージャーによる UX レビューも受けるべきです。

新しいショートコードやその他のライター向け機能は、Staff+ テクニカルライターまたはマネージャーによってテストされ、その後[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) に文書化されるべきです。
