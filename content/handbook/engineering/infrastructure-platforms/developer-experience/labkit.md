---
title: "LabKit"
description: "LabKit は GitLab の内部ツールライブラリであり、内部チームへの一貫性と向上した開発者速度をもたらすことを目的としています。"
upstream_path: /handbook/engineering/infrastructure-platforms/developer-experience/labkit/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T17:23:43Z"
translator: claude
stale: false
lastmod: "2026-02-05T13:49:12+00:00"
---

<!-- This document is intended to surface at a high level the LabKit project and the ongoing work.
  Discussions around software governance, and some of the in-depth goals for LabKit should be
  added to the North Star decision record.
-->

## LabKit とは？

LabKit は、ロギング、メトリクス、トレーシングなどのコア開発機能を提供することを目的としたライブラリのセットです。

## 事前読了資料

- [LabKit North Star Strategy](../../architecture/design-documents/labkit_north_star_strategy/)

## ビジョン

LabKit はエンジニアがアプリケーションインフラストラクチャと対話するための一貫した直感的なインターフェースを提供し、開発を加速して本番環境への提供時間を削減します。

- **一貫性**
  - 一般的なインフラストラクチャの相互作用のための標準化されたパターン
  - GitLab エコシステム全体への規則の適用

- **使いやすさ**
  - 言語固有のベストプラクティスに従ったイディオマティックな API
  - 迅速なオンボーディングを可能にする包括的なドキュメント
  - 認知負荷の軽減 — エンジニアがインフラストラクチャの定型処理ではなくビジネスロジックに集中できる

- **デリバリーの加速**
  - すぐに使える本番対応のデフォルト設定
  - 新しいサービスとコンポーネントのセットアップ時間の削減
  - インフラストラクチャの配管ではなくビジネスロジックへの集中

- **デフォルトでの可観測性**
  - メトリクス、トレース、構造化ロギングのための組み込みインストルメンテーション
  - サービス全体での一貫したシグナルの相関
  - インシデント対応時間の改善と平均回復時間の短縮

## LabKit ライブラリ

Development Tooling は現在以下のライブラリをサポートしています:

- [Go ライブラリ](https://gitlab.com/gitlab-org/labkit)
- [Ruby ライブラリ](https://gitlab.com/gitlab-org/ruby/gems/labkit-ruby)

**新しい言語の採用** — 新しい言語を採用するチームに期待されることを理解するために [LabKit North Star Strategy](../../architecture/design-documents/labkit_north_star_strategy/) に従ってください。

## LabKit ロードマップ

このセクションでは、今後の四半期にわたって提供する予定のサブプロジェクトの大まかなロードマップを示します。

このリストに追加したいプロジェクトについて質問や提案がある場合は、[Development Tooling チーム](development-tooling/_index.md)にご連絡ください。

### 現在

**フォーカス: 内部サービス向けのベストインクラスのロギング** (FY27-Q1 〜 FY27-Q2)

- サポートされている言語向けの本番対応ロギングパッケージの提供
- [PREP](https://gitlab.com/gitlab-org/architecture/readiness/) と施行メカニズムによる採用の推進
- クロスサービスデバッグのための断片化されたログスキーマの一貫した構造への統合

### 次

**フォーカス: メトリクスとトレーシング** (FY27-Q2 〜 FY27-Q4)

- 標準化されたメトリクスとトレーシングパッケージで可観測性の基盤を拡張
- 定型処理を削減するコンポジット抽象化の提供（例: 自動インストルメンテッドハンドラー）
- デフォルトでログ、メトリクス、トレース間の相関を実現

### 後期

**拡張されたインフラストラクチャ抽象化** (FY27-Q4+)

- 採用フィードバックに基づく高インパクトの DevEx 機会の特定
- 候補領域: HTTP/gRPC クライアント、キューイング、キャッシング、アラートテンプレート
- ペインポイントと本番環境への提供時間の影響に基づく優先順位付け

## 進行中のプロジェクト

このセクションでは、現在提供に向けて集中している進行中のプロジェクトについて説明します:

### フィールド標準化

ステータス: **開発中**

エピックリンク:

- [開発者向けフィールドロギング標準の定義](https://gitlab.com/groups/gitlab-org/quality/-/epics/235)

ハンドブックリンク: [可観測性におけるフィールド標準化](../../../engineering/architecture/design-documents/observability_field_standardisation/)

ここでの目標は、クロスドメインフィールドのスキーマを定義し、内部サービス全体にこのスキーマを展開することです。

- 高次元フィールド名によって発生したインシデント数を削減することで、すでに**セルフマネージドのアップグレード体験を改善**しました。
- 次の目標は、インシデント対応時の手間を削減するために GitLab のすべてのサービスで使用される一貫したフィールドスキーマを定義することです。これは**セルフマネージドと SaaS の両方で GitLab 管理のための監視と可観測性機能の強化**に直接結びついています。
- この作業の副次的な成果として、ロギングインフラストラクチャに取り込まれるログメッセージのサイズを削減しています — これにより**売上原価（COGS）が削減**され、間接的にお客様の可観測性インフラストラクチャを保護するのに役立ちます。

### ロギング標準化

ステータス: **要件収集中**

エピックリンク:

- [コア GitLab システムを Labkit ベースの slog に移行する](https://gitlab.com/groups/gitlab-org/quality/-/epics/266)

ディスカッション Issue: [ディスカッション: Go システムで Logrus を log/slog に置き換えることについて](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4103)

目標は GitLab サービス内でロギングを設定する方法を標準化することです。

- これにより Observability チームが OTeL ロギングの採用に向けた取り組みを加速できるようになり、**セルフマネージドと SaaS の両方で GitLab 管理のための監視と可観測性機能の強化**にもつながります。
- 初期調査では、レガシーロギングライブラリから移行することでシステムの起動時とランタイムのパフォーマンスを改善できることも明らかになっています。
- また、ロギングと後続の機能開発作業にモダンな業界標準を活用することで、**顧客価値の加速**にもつながります。
