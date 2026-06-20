---
title: "フロントエンド分解"
status: proposed
creation-date: "2026-06-12"
authors: [ "@ntepluhina", "@xanf" ]
coach: [ ]
approvers: [ ]
owning-stage: ""
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/modular_monolith/frontend/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-16T13:36:05+02:00"
translated_at: "2026-06-20T14:09:23Z"
translator: codex
stale: false
---

## 概要

GitLab フロントエンドは、同時にビルドされる複数の Webpack バンドルとして構築・出荷されています。このトラックでは、UI モジュールを独立して開発、ビルド、テスト、デプロイできるようにフロントエンドをモジュール化し、共有シェルアプリケーションと明示的なモジュール契約を通じて統合します。これはバックエンドの[バウンデッドコンテキスト](../bounded_contexts.md)に対応するフロントエンド側の対応物です。

このドキュメントは初期の骨組みです。以下のワークストリームは、フロントエンドチームによって拡張されるプレースホルダーです。全体的な分解の取り組みにおける[動機](../_index.md#motivation)、[エージェント型への必然性](../_index.md#why-now-the-agentic-imperative)、[目標](../_index.md#goals)を共有しています。

## 動機

GitLab フロントエンドには、より速い開発イテレーションを妨げる一連の Issue があります:

- **Rails への密結合。** 約 440 個のファイルが Vue アプリを hydrate するために `el.dataset` を読み取っています。77 個のファイルが `window.gon` を読み取っています。フィーチャーフラグは API 代替なしに、すべて `window.gon.features` 経由で注入されています。これにより、フロントエンドは Rails のレンダリングパイプラインから切り離せなくなっています。
- **CSS アーキテクチャがない。** 223 ファイルにまたがる 36,000 行の SCSS には、分離、コロケーション、所有権がありません。適切な CSS の書き方に関するガイドラインもありません。スタイルは影響する HTML から遠く離れた場所にあり、カスケードに強く依存しています。影響範囲が不明なため、任意の SCSS ファイルを変更すると、すべての統合テストを実行する必要があります。Tailwind はレガシー CSS の上に載せられており、複雑さとメンテナンスを増やしています。
- **CI のコストと時間。** フロントエンドの予測的テスト選択は存在しますが、ほとんど効果的ではありません。ほとんどのフロントエンド MR は完全な E2E スイートの実行にフォールバックします。RSpec system spec にはフロントエンド変更に対するカバレッジベースのマッピングがなく、静的なファイルパターンマッチングだけです。Fixture 生成（8 並列 RSpec ジョブ）は、予測的選択を完全に無視します。
- **アプリ間の調整。** アプリ間通信は、3 つの場当たり的なパターン（mitt ベースの EventHubs、DOM CustomEvents、Pinia/Apollo Client cache/Vue reactive variables を通じた状態共有）に依存しており、正式な契約はありません。
- **外部サービス向けのバンドルサイズリスク。** Module federation やランタイムでのモジュール共有は存在しません。各外部サービスは Vue、GitLab UI、Apollo の重複コピーを出荷することになります。

## 目標

1. **明示的な依存関係。** 2 つのコード片の関係がツールによって追跡できない場合、テスト、ビルド、ロードの目的では存在しません。これは JS、CSS、Rails からのデータ、アプリ間通信に適用されます。
2. **Rails 注入よりも API 契約。** データは `el.dataset` や `window.gon` ではなく、GraphQL/REST から来るべきです。フィーチャーフラグは API を通じて利用できるべきです。
3. **スコープ化されたスタイル。** CSS はそれを使用するコンポーネントと同じ場所に置かれ、追跡可能でなければなりません。これにより CSS はビルドグラフの一部になります。
4. **高速で信頼できる CI。** - フロントエンドのみの変更では、可能なリグレッションを検証するために、できるだけ小さいテストサブセットを実行するべきです。

## ワークストリーム

### 1. ビルドパイプラインをモダナイズする

TODO: 独立したフロントエンドモジュールのデプロイを可能にします。ターゲットとなるビルドトポロジー、モジュール単位のビルド、デプロイモデルを説明します。

### 2. Webpack 4 → Webpack 5 / Vite へ移行し、Vue 3 を完了する

TODO: Webpack 4 から Webpack 5 / Vite への移行パスと、それによって可能になる Vue 3 移行を、順序付けとリスクを含めて整理します。

### 3. モジュール契約を定義する

TODO: モジュールが境界をまたいで認可、ユーザーコンテキスト、フィーチャーフラグをどのように管理するかを定義します。これは、パッケージのパブリックインターフェイスに相当するフロントエンド版です。

### 4. 支援インフラストラクチャを構築する

TODO: シェルアプリケーション、モジュールレジストリ、Context provider API、およびモジュールがそれらへ登録し、それらを通じて統合する方法を指定します。

### 5. Frontend LabKit

TODO: 共有ライブラリとツールを標準化し、モジュール間で一貫したユーザー体験を確保します。

## プルーフオブコンセプト

関連するフロントエンド PoC は、すでに [Modular Monolith: PoCs](../proof_of_concepts.md) に記録されています:

- [Frontend sorting hat](../proof_of_concepts.md#frontend-sorting-hat)
- [Frontend assets aggregation](../proof_of_concepts.md#frontend-assets-aggregation)

## 参考資料

TODO: フロントエンド固有の参考資料（Vite、Vue 3 移行、micro-frontend / shell-application パターン）を追加します。
