---
title: "インタラクティブビルダー"
description: "LLM アウトプットを反復するための再利用可能な Duo Chat とライブプレビュー UI フレームワークであるインタラクティブビルダーの設計。"
status: ongoing
maturity: mature
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/interactive_builder/"
upstream_sha: "86cfa2bd7d73df5a673fe5ebd33b028d0f540434"
translated_at: "2026-04-27T09:00:00Z"
translator: claude
stale: false
---

SDD の詳細は [Spec-Driven Development](_index.md) をお読みください。

**成熟度：成熟**

## 概要

インタラクティブビルダーは、LLM アウトプットを反復するための汎用的で再利用可能な UI フレームワークです。左側は Duo Chat の会話で、中央ペインには生成中のアーティファクトのライブプレビューが表示されます。SDD（エージェントプラン生成）が最初のユースケースですが、フレームワーク自体は機能に依存しません。

エピック：[インタラクティブビルダー](https://gitlab.com/groups/gitlab-org/-/work_items/21653)

[PoC 動画](https://www.youtube.com/watch?v=UjZ-yHNg6Ic)

## AI パネルとの関係

インタラクティブビルダーは、新しいサブアプリケーションとして既存の [AI パネルアーキテクチャ](../ai_panel/_index.md)内に存在します。そこで説明されているコンポーネントの非依存性、props のパススルー、イベント駆動型の通信パターンに従います。

## ライブプレビュー

エージェントがツール呼び出しを通じてエージェントプランを更新すると、プレビューペインが変更をリアクティブに反映します。伝播メカニズム（ツール完了時の Apollo キャッシュ書き込み vs サブスクリプション）は TBD です。

## 汎用性

フレームワークは他の機能が独自のアーティファクトタイプとプレビューコンポーネントを登録できるプラグインコントラクトを公開します。このコントラクトの詳細は TBD です。

## スコープ

インタラクティブビルダーは基本的なエージェントプラン + Duo Chat エクスペリエンスの上位の改善です。v1 ではウィジェットとチャットで十分であり、ビルダーはフォローアップのイテレーションです。

このワークストリームは、基本的な Duo Chat フローを通じてエージェントプラン自体が価値を追加することを検証するまで**保留中**です。コアアーティファクトが有用であることを確認する前に、より豊かなビルダー UI に投資することは時期尚早です。
