---
title: "フィーチャーテストワーキンググループ"
description: "フィーチャーテストにおける Capybara の代替として、永続的な代替手段の信頼性を確立します。"
status: active
upstream_path: "/handbook/company/working-groups/feature-testing/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ          | 値                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 作成日      | 2024-11-01                                                                                                                           |
| 目標終了日   | 2025-02-01                                                                                                                           |
| Slack             | [#wg_feature-testing](https://gitlab.enterprise.slack.com/archives/C082VBQSFSQ)                                                      |
| Google Doc        | https://docs.google.com/document/d/1ZS4L-vVVVqRAjdOmr4X8ENYD5YEyFxEV8wxuR1OtNvE/edit?tab=t.0                                         |
| Epic              |                                                                 |
| 概要と状況 | [終了基準](#exit-criteria)を参照               |

### コンテキスト

現在のフィーチャーテストのアプローチである RSpec と Capybara を使用する方法には、いくつかの問題点があります：

* カバレッジの不足または隔離されたスペックの多さにより、フィーチャースイート全体としてコード変更に対する信頼性が低く、リグレッションを検出できていません。
* 安定性の低さが、master ブランチが壊れる頻度の高さにつながっています。
* デバッグツールが限られているため、安定したテストの作成やフレーキーなテストのデバッグが困難です。
* Ruby で書かれたテストのメンテナンスは、この言語のスキルを持つかどうかに関わらず、フロントエンドエンジニアが担当することが多いです。

### 目標

このワーキンググループは以下の目標を持ちます：

1. Capybara の代替として、JavaScript ベースのテストシステムである [Playwright](https://playwright.dev/) の信頼性を確立します。
2. GitLab プラットフォームの一部を使用して Playwright の概念実証（PoC）を作成します。
3. Playwright への移行戦略を含むアーキテクチャーブループリントを作成します。

#### 終了基準 {#exit-criteria}

| 基準                      | 開始日 | 完了日 | 進捗 | DRI                 |
| ----------------------------- | ---------- | --------------- | -------- | ------------------- |
| CI/CD および環境のセットアップ   | 2024-12-11 |                 |          | Javiera Tapia       |
| 3 つの変換されたスペック例     | 2024-12-11 |                 |          | Natalia Tepluhina   |
| 移行計画                |            |                 |          |                     |

#### 詳細

**CI/CD および環境のセットアップ**

GitLab のビルドプロセス内で Playwright サーバーを起動する方法を決定する必要があります。

**3 つの変換されたスペック例**

現在フレーキーなテストと同条件で比較するための完全な例：

* https://gitlab.com/gitlab-org/gitlab/-/blob/wild-standalone-test/spec/features/boards/boards_spec.rb
* https://gitlab.com/gitlab-org/gitlab/-/blob/wild-standalone-test/ee/spec/features/epic_boards/epic_boards_sidebar_spec.rb
* https://gitlab.com/gitlab-org/gitlab/-/blob/wild-standalone-test/spec/requests/api/commits_spec.rb

以下のメトリクスを測定・比較する予定です：

* 失敗した実行の割合
* スペックの実行時間
* デバッグのステップ数

**移行計画**

Playwright に段階的に移行するための戦略。

### 2025年1月22日のアップデート

#### 現在の進捗と課題

Capybara を Playwright に置き換えるための概念実証に多大な努力を投じた結果、ワーキンググループはさらなる進捗を妨げる重大な課題に直面しました：

* 認証の問題：既存の認証メカニズムと Playwright を統合することが複雑であることが判明しました。一見解決されたように見えますが、将来の問題をトラブルシュートすることが困難な形になっています。
* 複雑性の増大：Playwright の PoC のトラブルシューティングを通じて、新しいテストフレームワークへの移行により、メンテナンスとデバッグが当初の予想より困難な複雑さの層が追加されることが明らかになりました。
* リソースの制約：これらの障害を乗り越えるために必要な時間とリソースが多大であり、他の重要なテスト改善から注意が逸れています。

これらの障害を踏まえ、ワーキンググループは Capybara を Playwright に置き換える現在の実験を中断することを推奨します。

#### 推奨事項

Playwright の実験の終了に伴い、ワーキンググループは解散しました。既存の Capybara/RSpec フレームワーク内でテストカバレッジを増やしてフレーキーさを減らすために、以下の推奨事項を提案します：

1. テストカバレッジの向上：

* ギャップの特定：テストカバレッジが不十分な領域を特定するための徹底的な分析を実施し、その領域へのテスト追加を優先します。
* エンドツーエンド（E2E）テスト：重要なユーザーフローに対して E2E テストを段階的に導入し、フロントエンド/フルスタックエンジニアによるこれらの E2E テストの作成を奨励します。

1. トレーニングと文書化：

* スキル開発：テストの作成とメンテナンスを改善するために、Capybara と RSpec のベストプラクティスに関するエンジニア向けトレーニングセッションを提供します。

1. 定期的なメンテナンスとレビュー：

* フレーキーなテストの特定：テストスイートの信頼性を維持するために、フレーキーなテストを迅速に特定して対処するルーティンを確立します。
* 継続的な改善：テスト実行からのフィードバックを定期的にテスト戦略の改善に活用する継続的改善の文化を育てます。

これらの推奨事項を実装することで、フィーチャーテストフレームワークを強化し、カバレッジを増やして、フレーキーさを大幅に削減し、全体的なコード品質と安定性を高めることを目指します。

### 役割と責任

| ワーキンググループの役割 | 人物              | 役職                                               |
| ------------------ | ------------------- | --------------------------------------------------- |
| エグゼクティブスポンサー  | Tim Zallmann        | VP of Engineering, Core Development                      |
| ファシリテーター        | Donald Cook        | Engineering Manager, Plan:Project Management             |
| 機能リード    | Natalia Tepluhina        | Principal Engineer, Plan         |
| 機能リード    | Ksenia Kolpakova         | Engineering Manager, Test Engineering |
| 機能リード    | Javiera Tapia            | Backend Engineer, Create:Source Code  |
| メンバー             | Désirée Chevalier        | Senior Software Engineer in Test, Plan |
| メンバー             | Doug Stull               | Staff FullStack Engineer in Growth |
