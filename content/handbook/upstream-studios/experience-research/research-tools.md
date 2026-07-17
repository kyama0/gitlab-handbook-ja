---
title: "リサーチツールとアプリケーション"
description: "使用するツール、既存リサーチの見つけ方、リサーチ結果の追跡など。"
upstream_path: /handbook/upstream-studios/experience-research/research-tools/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:44-03:00"
translated_at: "2026-07-17T08:00:00+09:00"
translator: codex
stale: false
---

私たちは次のリサーチツールを使用します。

## 使用するリサーチツールとアクセスの取得方法 {#research-tools-we-use-and-how-to-get-access}

- [RallyUXR](https://app.rallyuxr.com/gitlab/studies)- 主なリクルーティングおよびパネル管理ツール。外部参加者のリクルーティング（Respondent.io 経由）も提供します
- [User Interviews](https://www.userinterviews.com/) - RallyUXR では不十分な場合の、モデレートあり / なしのセッション用の代替手段
- [Qualtrics](https://gitlab.eu.qualtrics.com/) - 高度なロジックを必要とする複雑なアンケート
- [Dovetail](https://gitlab.dovetail.com/) - データ分析、インサイトのコラボレーション、リサーチリポジトリ
- [Optimal Workshop](https://www.optimalworkshop.com/) - カードソートとツリーテスト（オンデマンドで支払い）
- [UserTesting.com](http://UserTesting.com) - 音声 / 動画のキャプチャを伴うモデレートなしのテスト
- [Figjam](http://figma.com) - オンラインでのブレインストーミングと統合

UX 実務者は、入社時にロールの権限としてこれらのツールの一部にアクセスできます。**誰でも [Lumos](https://app.lumosidentity.com/app_store)を通じて新しいツールを閲覧し、アクセスをリクエストできます**。探しているツールがまだ Lumos にない場合は、[アクセスリクエストを作成](/handbook/security/corporate/end-user-services/access-requests/)できます。Optimal Workshop については、必要に応じて個別の月額パスを購入するため、代わりに調達 Issue（[例](https://gitlab.com/gitlab-com/Finance-Division/procurement-team/procurement/-/issues/1596)）を作成する必要があることに注意してください。

## ツール選択ガイド {#tool-selection-guide}

リサーチ上の問題に取り組む方法は数多くあることに注意してください。以下は基本的な提案です。不明な場合は、[#ux_research](https://gitlab.enterprise.slack.com/archives/CMEERUCE4)チャンネルに質問を投稿して UX Researcher に確認してください。

**参加者のリクルーティングと管理の場合**

- すべてのユーザーリサーチにおけるリクルーティング、パネル管理、スケジュール設定、インセンティブ処理の主要ツールとして、[RallyUXR](https://app.rallyuxr.com/gitlab/home)を使用します。
  - [RallyUXR](https://app.rallyuxr.com/gitlab/studies)は、リサーチで使用するツールとデータベースの大半にすでに接続されています。調査に追加設定が必要な場合は、ReOps チームが知らせます。
  - RallyUXR の既存ユーザーベースから十分な参加者をリクルートできない場合は、[Respondent.io](http://Respondent.io)を利用した**外部パネルオプション**を活用します。
  - 多様なアクセシビリティニーズを持つ参加者を探している場合、GitLab 以外のユーザーが必要な場合、または RallyUXR が参加者の割り当てを満たせない場合に限り、[User Interviews](https://www.userinterviews.com/researcher)を使用します。

**スケジュール設定とセッションの場合。**

- これにも RallyUXR を使用します。[Google Calendar](https://calendar.google.com/calendar/u/0/r)と [Zoom](https://gitlab.zoom.us/)が RallyUXR アカウントに接続されていることを確認してください。

**アンケートの場合**

- スキップロジックと表示ロジックが必要な**複雑なアンケート**には、[Qualtrics](https://gitlab.eu.qualtrics.com/)を使用します。多様な質問形式を提供しており、数十人から数百人の参加者を必要とするアンケートに最適です。
  - 例 = USAT+、ファーストクリックテスト、スクリーナーアンケート。
- 複雑なロジックが必要ない、より**簡単なアンケート**には [Google Forms](https://docs.google.com/forms/)を使用します。モバイルにもより適しています。
  - 例 = 社内リサーチ、チームヘルス、ダイアリー調査のエントリー。
- 方法と理由を深く掘り下げるために動画回答が必要な場合は、5 ～ 8 人のユーザーを対象とする小規模な**定性的でモデレートなしのユーザビリティテスト**に [UserTesting.com](http://UserTesting.com)を使用します。
  - 例 = デザインの方向性の探索、プロトタイプのインタラクション

**ユーザビリティテストの場合**

- **モデレートありの 1 対 1**またはグループセッションには [Zoom](https://gitlab.zoom.us/)を使用し、録画を分析と記録保存のために [Dovetail](https://gitlab.dovetail.com/)へアップロードします。
- **モデレートなしのユーザビリティセッション**には [UserTesting.com](http://UserTesting.com)を使用します。ただし、これは依然として参加者 5 ～ 8 人の小規模プロジェクト用ツールであり、大規模なテストには適していないことに留意してください。

**詳細インタビューの場合**

- [Zoom](https://gitlab.zoom.us/)を使用し、録画を分析と記録保存のために [Dovetail](https://gitlab.dovetail.com/)へアップロードします。

**カードソートとツリーテストの場合**

- モデレートなしのクローズドカードソートの場合:
  - 大規模なサンプルには [Qualtrics](https://gitlab.eu.qualtrics.com/)を使用します
  - 小規模なサンプル、または動画が必要な場合には [UserTesting.com](http://UserTesting.com)を使用します
- オープンカードソートとツリーテストの場合は、Research Operations（[#ux_research_operations](https://gitlab.enterprise.slack.com/archives/C03SW7KPA1X)）と調整し、[Optimal Workshop](https://www.optimalworkshop.com/)のオンデマンドサブスクリプションを手配します。

**ダイアリー調査の場合**

- チームは*ダイアリー調査の決定的なツールをまだ検討中です*。現時点では、方法論を組み合わせて使用しています。
- テキストベースのダイアリー調査には [Qualtrics](https://gitlab.eu.qualtrics.com/)、または [Google Forms](https://docs.google.com/forms/)を使用します
- 簡単な毎日のフィードバックの収集には [Google Forms](https://docs.google.com/forms/)の方が適しています
  - [Qualtrics](https://gitlab.eu.qualtrics.com/)と [Google Forms](https://docs.google.com/forms/)のどちらでも、参加者は画面キャプチャも送信できます。
- 動画ダイアリーエントリーには、[UserTesting.com](http://UserTesting.com)が最適です。

**共同作成の場合**

- オンラインでのブレインストーミング、統合、コラボレーションには [Figjam](https://www.figma.com/figjam/)を使用します。
  - セッションの前に、参加者へボードへのアクセス権を必ず付与してください。
