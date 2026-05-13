---
title: "UX リサーチツール／アプリケーション"
description: "私たちが使用するツール、既存リサーチの探し方、リサーチ調査結果の追跡など。"
upstream_path: /handbook/product/ux/experience-research/research-tools/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

私たちは以下のリサーチツールを使用しています。

## 私たちが使用するリサーチツールとアクセス取得方法

- [RallyUXR](https://app.rallyuxr.com/gitlab/studies) - メインのリクルートとパネル管理ツール。外部参加者リクルート（Respondent.io 経由）も提供
- [User Interviews](https://www.userinterviews.com/) - RallyUXR で十分でない場合のモデレートあり／なしセッション向けの代替手段
- [Qualtrics](https://gitlab.eu.qualtrics.com/) - 高度なロジックを伴う複雑なサーベイ
- [Dovetail](https://gitlab.dovetail.com/) - データ分析、インサイトの共同編集、リサーチリポジトリ
- [Optimal Workshop](https://www.optimalworkshop.com/) - カードソートとツリーテスト（オンデマンド支払い）
- [UserTesting.com](http://UserTesting.com) - 音声／動画キャプチャ付きのモデレートなしテスト
- [Figjam](http://figma.com) - オンラインブレインストーミングと統合

UX 実務者は入社時に役割のエンタイトルメントとしてこれらのツールの一部にアクセスできます。**誰でも [Lumos](https://app.lumosidentity.com/app_store) を通じて新しいツールを閲覧・アクセスリクエストできます。** 探しているツールがまだ Lumos にない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/)をオープンできます。Optimal Workshop については、オンデマンドで個別の月間パスを購入するため、調達 Issue を別途オープンする必要があります（[例](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues/1596)）。

## ツール選択ガイド

リサーチ課題に取り組む方法は多くあります。以下は基本的な提案です。迷う場合は、[#ux_research](https://gitlab.enterprise.slack.com/archives/CMEERUCE4) チャンネルに質問を投稿して UX Researcher に確認してください。

**参加者のリクルートと管理について**

- すべてのユーザーリサーチにわたるリクルート、パネル管理、スケジューリング、インセンティブ処理のメインツールとして [RallyUXR](https://app.rallyuxr.com/gitlab/home) を使用してください。
  - [RallyUXR](https://app.rallyuxr.com/gitlab/studies) は、私たちがリサーチで使うほとんどのツールやデータベースとすでに連携されています。あなたの研究に追加のセットアップが必要な場合、ReOps チームから連絡があります。
  - RallyUXR の既存ユーザーベースから十分な参加者をリクルートできない場合は、**外部パネルオプション**（[Respondent.io](http://Respondent.io) が提供）を活用してください。
  - [User Interviews](https://www.userinterviews.com/researcher) は、多様なアクセシビリティニーズを持つ参加者を探す場合、非 GitLab ユーザーが必要な場合、または RallyUXR が参加者のクオータを満たせない場合のみ使用してください。

**スケジューリングとセッションについて**

- RallyUXR はこれにも使えるツールです。[Google Calendar](https://calendar.google.com/calendar/u/0/r) と [Zoom](https://gitlab.zoom.us/) を RallyUXR アカウントと接続していることを確認してください。

**サーベイについて**

- スキップロジックや表示ロジックが必要な **複雑なサーベイ** には [Qualtrics](https://gitlab.eu.qualtrics.com/) を使用してください。多様な質問タイプを提供しており、数十～数百人の参加者を必要とするサーベイに最適です。
  - 例: USAT+、初回クリックテスト、スクリーナーサーベイ。
- 複雑なロジックの必要がない **簡単なサーベイ** には [Google Forms](https://docs.google.com/forms/) を使用してください。モバイルフレンドリーでもあります。
  - 例: 社内リサーチ、チームヘルス、ダイアリースタディのエントリ。
- 動画レスポンスで「どのように」「なぜ」を深く掘り下げる必要がある場合、5～8 ユーザー程度の小規模な **定性的＆モデレートなしユーザビリティテスト** には [UserTesting.com](http://UserTesting.com) を使用してください。
  - 例: デザイン方向性の探索、プロトタイプインタラクション

**ユーザビリティテストについて**

- **モデレートあり 1:1** またはグループセッションには [Zoom](https://gitlab.zoom.us/) を使用し、録画を [Dovetail](https://gitlab.dovetail.com/) にアップロードして分析と記録保管を行います。
- **モデレートなしユーザビリティセッション** には [UserTesting.com](http://UserTesting.com) を使用しますが、これは依然として 5～8 名程度の小規模プロジェクト用のツールであり、大規模テストには適していないことに注意してください。

**ディープインタビューについて**

- [Zoom](https://gitlab.zoom.us/) を使用し、録画を分析と記録保管のため [Dovetail](https://gitlab.dovetail.com/) にアップロードします。

**カードソートとツリーテストについて**

- モデレートなしクローズドカードソートの場合:
  - サンプルが大きい場合は [Qualtrics](https://gitlab.eu.qualtrics.com/) を使用
  - サンプルが小さいか動画が必要な場合は [UserTesting.com](http://UserTesting.com) を使用
- オープンカードソートとツリーテストには、Research Operations（[#ux_research_operations](https://gitlab.enterprise.slack.com/archives/C03SW7KPA1X)）と調整して [Optimal Workshop](https://www.optimalworkshop.com/) のオンデマンドサブスクリプションを手配してください。

**ダイアリースタディについて**

- チームは *ダイアリースタディの決定版ツールをまだ模索中* です。現時点では、方法論を組み合わせています。
- テキストベースのダイアリースタディには [Qualtrics](https://gitlab.eu.qualtrics.com/) または [Google Forms](https://docs.google.com/forms/) を使用
- [Google Forms](https://docs.google.com/forms/) は単純な日次フィードバックの収集に適しています
  - [Qualtrics](https://gitlab.eu.qualtrics.com/) と [Google Forms](https://docs.google.com/forms/) はどちらも、参加者がスクリーンキャプチャを提出することも可能です。
- 動画のダイアリーエントリには、[UserTesting.com](http://UserTesting.com) が最適です。

**共創（コ・クリエーション）について**

- オンラインブレインストーミング、統合、コラボレーションには [Figjam](https://www.figma.com/figjam/) を使用してください。
  - セッション前に、参加者にボードへのアクセスを必ず付与してください。
