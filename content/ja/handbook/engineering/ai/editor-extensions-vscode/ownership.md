---
title: "オーナーシップと境界 - エディター拡張機能"
description: このページは、エディター拡張機能のシステムで機能を作成・保守するすべての関係者の間に明確さと期待値を提供します。
upstream_path: /handbook/engineering/ai/editor-extensions-vscode/ownership/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 背景

複数のグループが、エディター拡張機能を通じて公開される機能に貢献しています。これによりオーナーシップとメンテナンス責任に関する曖昧さが生じる可能性があります。本ドキュメントは、一貫したオーナーシップの帰属、関係者全員の期待値の整合、効率の改善のために合意されたアプローチを概説します。

システムの一部を所有するということは、影響を受ける部分の機能開発、バグ修正、一般的なメンテナンスに責任を持つことを意味します。理想的には、所有するシステムの一部にメンテナーを配置し、エディター拡張機能チームから独立した形にするのが望ましいですが、これは厳密な要件ではありません。

## システム概要

現在、エディター拡張機能を通じて統合される外部機能は、以下のアーキテクチャに従います:

* [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) で構築された UI コンポーネント
* エディターとの統合: Webview
  * Webview はエディター内に表示される Web ページです
* エディターとの統合: ビジネスロジック
  * ビジネスロジックはエディター固有の統合を表します（例: TypeScript と VS Code Extension API、Kotlin と JetBrains Plugin API）

## レガシーオーナーシップモデル

現在 **Duo Chat** で使用中:

| システムの一部 | 責任グループ |
| ------ | ------ |
|    [`gitlab-ui` の Chat UI コンポーネント](https://gitlab.com/gitlab-org/gitlab-ui/-/tree/main/src/components/experimental/duo/chat)     |   **AI-Powered:Duo Chat** グループ。     |
|    VS Code - [Chat Webview](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/tree/main/webviews/vue2/gitlab_duo_chat)（Web ページ）    |     **AI-Powered:Duo Chat** グループ、**AI-Powered:Editor Extensions** グループのサポートあり     |
|    VS Code - [Chat ビジネスロジック](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/tree/main/src/common/chat?ref_type=heads)（拡張機能）     |  **AI-Powered:Editor Extensions** グループ      |
|   JetBrains - [Chat Webview](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/tree/main/webview)（Web ページ） |   **AI-Powered:Duo Chat** グループ、**AI-Powered:Editor Extensions** グループのサポートあり      |
| JetBrains - [Chat ビジネスロジック](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/tree/main/src/main/kotlin/com/gitlab/plugin/chat)（プラグイン） | **AI-Powered:Editor Extensions** グループ  |

## Language Server で実装される機能のオーナーシップモデル

| システムの一部 | 責任グループ |
| ------ | ------ |
|    UI コンポーネント     |   UI コンポーネントを所有するグループ     |
|    LS Webview ＆ プラグイン    |    UI コンポーネントを所有するグループ、**AI-Powered:Editor Extensions** グループのサポートあり  |
|    VS Code 統合     |    **AI-Powered:Editor Extensions** グループ    |
|   JetBrains 統合 |    **AI-Powered:Editor Extensions** グループ    |
| Visual Studio 統合 | **AI-Powered:Editor Extensions** グループ |

## 他者への通知プロセス

* チームがエディター拡張機能のサポートを必要とする機能の作業を開始する場合:
  * PM/EM は **AI-Powered:Editor Extensions** グループの PM/EM に通知します - これにより、チームは近い将来サポートに必要なキャパシティを予測できます
* 機能の実装
  * レガシーオーナーシップモデル（すべての拡張機能で個別に実装される Duo Chat）
    * 機能の UI が準備できたら:
      * 作成チームが統合 MR をオープンします
      * **AI-Powered:Editor Extensions** グループはエンジニアをアサインし、MR を引き継いで統合を完了します
  * Language Server オーナーシップモデル
    * Language Server の変更が完了したら、機能チームは **AI-Powered:Editor Extensions** グループに通知し、グループが Language Server の変更をエディター拡張機能に統合します。
