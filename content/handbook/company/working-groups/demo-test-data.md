---
title: "デモ & テストデータ ワーキンググループ"
description: "TBD"
status: active
upstream_path: /handbook/company/working-groups/demo-test-data/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2022-01-19 |
| 終了日          | 2023-04-30 |
| Slack           | [#wg_demo-test-data](https://gitlab.slack.com/archives/C02M7GX1SBE)（社内からのみアクセス可） |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1XmTGP1pNBDaC6LduW8rygYBdd8BrS5el2zjGvI7Dtyc/edit#heading=h.epyavtxljcb2) |
| Issue           | [Issue リスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=milestone&state=opened&label_name%5B%5D=wg_demo-test-data&first_page_size=20) / [Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722) |
| 概要 & ステータス | [ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722)を参照 |

## ビジネスゴール

デモデータとテストデータの効率性はビジネスをより速く動かすための鍵です。これらのデータが存在し、プロビジョニングされる場所は断片化しています。また、テクニカルセールスで使用されているものとテストおよびバリデーションで使用されているものの間に知識のギャップがあります。

ツールの効率化を共に進め、フィールドでのデモデータとエンジニアリングでのテストデータの可視性を高めることで恩恵を受けます。

### 終了基準（100% 完了）

1. [x] [デモデータとテストデータの違いとギャップの特定](https://gitlab.com/gitlab-org/gitlab/-/issues/351370)
1. [x] [オンデマンドでデモデータをシードする機能の提供](https://gitlab.com/gitlab-org/gitlab/-/issues/361989)
1. [x] フィールドの SA が使用できる[動作するデモデータ](https://gitlab.com/gitlab-org/gitlab/-/issues/351370)の[最初のイテレーションのデリバリー](https://gitlab.com/gitlab-org/gitlab/-/issues/361989)
1. [x] [フィールドの SA が使用する「美しいテストデータ」の定義](https://gitlab.com/gitlab-org/gitlab/-/issues/373741)
1. [x] [定義された「美しいテストデータ」セットに基づく MVP のデリバリー](https://gitlab.com/gitlab-org/gitlab/-/issues/373741#mvp-for-working-group)
1. [x] [フィールドの SA がより簡単に使用できる動作するデモデータの 2 番目のイテレーションのデリバリー](https://gitlab.com/gitlab-org/gitlab/-/issues/361997)
1. [x] [AwesomeCo を GitLab Data Seeder にリネーム](https://gitlab.com/gitlab-org/gitlab/-/issues/407261)
1. [x] [GitLab Data Seeder ハンドブックページの公開](https://gitlab.com/gitlab-org/gitlab/-/issues/408123)

### 役割と責任

| ワーキンググループの役割    | 担当者                 | 役職                              |
|-----------------------|------------------------|-----------------------------------|
| ファシリテーター          | Grant Young            | Staff Software Engineer in Test   |
| ステークホルダー          | Tim Poffenbarger       | Senior Manager, Solutions Architects |
| ステークホルダー          | Vincy Wilson           | Senior Manager, Quality Engineering |
| エグゼクティブスポンサー   | Mek Stittri            | VP of Quality                     |
| テクニカルリード          | Dan Davison            | Staff Software Engineer in Test  |
| メンバー                 | Marshall Cottrell      | Principal, Strategy and Operations (Technical) |
| メンバー                 | Tim Zallmann           | Senior Director of Engineering    |
| メンバー                 | Mark Wood              | Senior Product Manager            |
| メンバー                 | Sameer Kamani          | Staff Federal Solution Architect  |
| メンバー                 | Joe Randazzo           | Solutions Architect               |
| メンバー                 | Darwin Sanoy           | Staff Solutions Architect         |
| メンバー                 | Siddharth Mathur       | Solutions Architect               |
| メンバー                 | Julie Byrne            | Senior Solutions Architect        |

## 結果

このワーキンググループの成果として、[GitLab Data Seeder](https://gitlab-org.gitlab.io/quality/data-seeder) が作成されました。

社内の [Slack チャンネル](https://gitlab.slack.com/archives/C055Y333MM1)が作成されました。

デモデータを示す[動画](https://www.youtube.com/watch?v=4ZMLr8oDhqI)が作成されました。

## 将来のイテレーションと既知の Issue

このワーキンググループのクローズ時点で、以下のタスクが未完了のまま残っています。

- [シードされたデータを使用したライブデモの実施](https://gitlab.com/gitlab-org/gitlab/-/issues/351373)
- [インポート時に URL が正しく表示される必要があります](https://gitlab.com/gitlab-org/gitlab/-/issues/414981)（[例](https://youtu.be/4ZMLr8oDhqI?t=1274)）
- [マルチユーザーセットアップの許可](https://gitlab.com/gitlab-org/gitlab/-/issues/361994)と Issue/コメント等に対するオーナーシップの定義。これは新しい UI が登場するとより重要になります。
- [YAML パーシングを拡張して生の Ruby オブジェクトを許可する](https://gitlab.com/gitlab-org/gitlab/-/issues/403079)
- `spec` から生成されるより良いドキュメント
- [シード全体にわたる変数の許可](https://gitlab.com/gitlab-org/gitlab/-/issues/403849)
- [GitLab UI にグループシーディング用のボタンを実装する](https://gitlab.com/gitlab-org/gitlab/-/issues/362005)
- [良い状態とはどういうことかのストレッチゴールを完成させる（Beautiful Data）](https://gitlab.com/gitlab-org/gitlab/-/issues/414979)

完全なリストは[Data Seeder Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722?label_name[]=data%20seeder)を参照してください。

## フィードバック

ご質問、Issue、フィードバックについては、[`#data-seeder`](https://gitlab.slack.com/archives/C055Y333MM1) に連絡するか、ラベル `~"data seeder"` を付けて Issue を作成するか、[フィードバック Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/414671) にコメントを追加してください。
