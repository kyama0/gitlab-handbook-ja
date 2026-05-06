---
title: Growth Fast Boot（2019年9月）
description: "Growth グループが2019年9月に GitLab での Growth 戦略についてディスカッション、計画、実装を開始するために Fast Boot を開催しました"
upstream_path: "/handbook/engineering/development/growth/fast-boot/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-28T05:15:25Z"
translator: claude
stale: false
---

Acquisition、Expansion、Conversion、Retention の各グループが2019年9月に[Fast Boot](/handbook/engineering/workflow/fast-boot/)に参加しました。[計画 Issue](https://gitlab.com/gitlab-org/growth/product/issues/1)には Fast Boot の提案が含まれており、このページではディスカッションと成果を文書化しています。

## Day 1

[Day 1 アジェンダドキュメントへのリンク](https://docs.google.com/document/d/1eBB3iKPg0qKclh-WUTBdmDrhkApKcBva-RJBKev9Cp4/edit)

### 主要な成果

#### チームとしての運営方法

**セクションレベル**

* VP Product が主導し Growth Director のサポートを受ける、E-Group との月次プロダクト/Growth メトリクスレビュー
* PM + Eng Director が主導する、6週ごとの Growth グループ会話
* 週次エンジニアリングミーティング
* 週次アイデア創出と優先順位付けミーティング
* 月曜日に実験を確認して終了できるものを特定し、火曜日のレビューミーティング用のデータを収集する

**グループレベル**

* グループは必要に応じて組織・会合する

#### Growth 実験の実施方法

* 開発ボードのラベル/プロセス - 継続してハンドブックに従う
* A/B テストのプロセス、成果物、期待値
* 各実験は信頼水準を設定 - 95%〜99%
* データアナリストが Issue にテストサマリーを記述（後で検索するための「a/b test complete」ラベルを追加）

#### 他チームのコードベースでの業務に関する期待値

* 目的は本番コードを出荷することではなく、データを収集することを強調する
* 課題: レビュープロセスが遅すぎる。レビュアー対メンテナーの問題。メンテナーの数が少ない。
* 目標: 週1つの成果物を引き取る

#### 機能オーナーシップ

Fulfillment は基盤となる請求、ライセンス、およびトランザクションシステム、ならびに現在のポータルユーザーエクスペリエンスを所有します。

* Acquisition は新規サインアップ ARR 成長 KPI + 新規サインアップ UX を所有
* Conversion は新規無料からトライアル ARR 成長 KPI + トライアル UX を所有
* Expansion は現在の顧客シート拡大 + 現在の顧客アップグレード ARR 成長 KPI + アップグレードフロー & true-up フローを所有
* Retention は粗利率 KPI + 更新フローを所有

Growth PM が主要フローの Issue を所有し、エンジニアリングリーダーが業務の割り当てを支援します

長期的には: ビジョンとしては、Fulfillment チームが請求とライセンスのプラットフォームを所有し、API のセットと SLA を提供することで、Growth チームがそれらの上にユーザーエクスペリエンスを構築・キュレートして優れた顧客エクスペリエンス（および結果として生じる KPI）を推進できるようにすることです。

### ディープダイブ

既存のフローのティアダウン/ジャーニーマップ。デモ、動画、スクリーンショットを活用します。「エキスパート」にリモートで参加してデモを行い、問題点/機会を共有してもらいます。セッションはプロダクトマネージャーが主導します。

#### Acquisition の概要

Acquisition の PM である Jensen が主導するディスカッション。カバーされたトピック:

* Acquisition チームの KPI とミッション
* 最初の注力領域
* 既存のエクスペリエンスのティアダウン
* 競合他社のエクスペリエンスのティアダウン
* 改善の機会の特定

[動画](https://youtu.be/wqTYv9XmzgA)

#### Conversion の概要

Conversion の PM である Sam Awezec が主導するディスカッション。カバーされたトピック:

* KPI と Conversion チームのミッション
* 最初の注力領域（初期プロダクトアクティベーション、有料機能および/または制限での「Ah-ha モーメント」、トライアルエクスペリエンスと全体的な価値）
* 既存のエクスペリエンスのティアダウン
* 改善の機会の特定

[動画](https://youtu.be/8ypX5kDUOYM)

#### Expansion の概要

Expansion の PM である Tim Hey が主導するディスカッション。カバーされたトピック:

* ミッション
* KPI とサポートするパフォーマンス指標
* 顧客向けの機会
  * ユーザーオリエンテーション - ユーザーはどこから始めれば良いかわからない
  * プラットフォームへの信頼と安心感の向上 - ツールを愛していて切り替えるのが怖い
* 内部の機会
  * アップセルプロセスとユーザーワークフローのための Self-Managed 利用状況
  * Self-Managed のトゥルーアッププロセスとユーザーワークフロー

[動画](https://www.youtube.com/watch?v=uodOO2RUIbo&feature=youtu.be)

[スライド](https://docs.google.com/presentation/d/13V5vs3o_6ZcipSd6QO4fQYwFxe6r9jqb6zUcJoe-ksY/edit?usp=sharing)

#### Retention の概要

Retention の PM である Mike Karampalas が主導するディスカッション。カバーされたトピック:

* 維持率の KPI
* Retention チームの近期・中長期の焦点
* 更新フローのティアダウン
* 改善の機会

[動画](https://www.youtube.com/watch?v=QKA5rKbl7qU&feature=youtu.be)

[スライド](https://docs.google.com/presentation/d/1Eeh-Nm7n1Z14HZIp6REZ-0vId6PcAbGVjlW4EgyYeRs/edit#slide=id.g4751caaebf_1_0)

## Day 2

[Day 2 アジェンダドキュメントへのリンク](https://docs.google.com/document/d/1wU8jlC7MlmC4HCZmjGDJxjc1DZ5yZDZ-xxVu-08LZLs/edit)

### データディープダイブ

Growth データアナリストの Eli Kastelein が主導するディスカッション。カバーされたトピック:

* GitLab.com データ対 Self-Managed データ
* Growth チームに関連するデータソースの概要
* データを Growth チームのために活用する方法のビジョン
* イベントベースのレポートとデータベースレポートの比較
* 成功するために必要なデータ収集を妨げているもの

[動画](https://www.youtube.com/watch?v=eNLkj3Ho2bk&feature=youtu.be)

[スライド](https://docs.google.com/presentation/d/1mLI0zSMmwwjIug3mfiNfVNbwPCLZkSqwUC4F1uqYf28/)

### プロダクトインテリジェンスの現状

この時間でチームとしてプロダクトインテリジェンスを概説し、これからの方向性をレビューしました。主にカバーしたのは、プロダクト分析とは何か、より多くの情報をどこで見つけるかを明確に伝える必要があるというハンドブックのビジョンページでした。

カバーされたトピック（ハンドブックにも追加予定）

* ビジョン
* SMAU -- それが何であり、どのように管理されているか
* ダッシュボード -- それらが何であるか、セルフサービスとリクエスト方法
* トラッキング用の利用可能なデータフィールドと新しいフィールドが必要な場合の対処方法
* トラッキングとインストルメンテーション -- GitLab.com と Self-Managed のやり方
* 使用している技術

[レビュー中の MR](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29940#23dfa14c4e3cd4e7facec62ed501fe5adc7bc0ef)

### A/B テストの要件

[Issue: Growth 実験の影響を測定できる A/B テストソリューションの実装](https://gitlab.com/gitlab-org/growth/engineering/issues/5)

主要な成果は、Release チームと協力して GitLab の既存のフィーチャーフラグ機能を改善し、Growth 実験を成功裏に A/B テストできるようにすることです。

現在、実験を実施するには、結果を測定できるようにするための追加業務が必要です。この業務は、能力を改善する間は各実験ごとにオーダーメイドになります。

必要な場合はサードパーティのソリューションを調査できます。

## Day 3〜5

この時点で、各 Growth チームはそれぞれの領域の Issue を作成・取り組むためにグループに分かれました。

## Fast Boot の成果

### 新しいチーム名、KPI、目標の実装

* [Growth グループの名称変更](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29704)
* [KPI インデックスページの Growth KPI の更新](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29726)

### チームプロセスの効率化

* [プロダクト/エンジニアリングミーティングのカデンスと成果物の確立](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/29799)
* [プロダクト/エンジニアリングワークフローの確立](https://gitlab.com/gitlab-org/growth/discussion/issues/1)
* [A/B テストディスカッションの進捗](https://gitlab.com/gitlab-org/growth/engineering/issues/44)

### Issue の作成と対応

Acquisition

* [簡略化されたユーザー登録ページのテスト](https://gitlab.com/gitlab-org/growth/engineering/issues/20) + [デザインの進捗](https://gitlab.com/gitlab-org/growth/engineering/issues/20/designs)
* [.com 有料サインアッププロセスの更新](https://gitlab.com/gitlab-org/growth/product/issues/87)
* [トライアルサインアッププロセスの更新](https://gitlab.com/gitlab-org/growth/product/issues/88)
* [Self-Managed 有料サインアッププロセスの更新](https://gitlab.com/gitlab-org/growth/product/issues/89)

Expansion

* [ホストごとのライセンス利用 - エピック](https://gitlab.com/groups/gitlab-org/-/epics/1981)
* [version.gitlab.com のホストページにシートの差分を追加](https://gitlab.com/gitlab-org/growth/engineering/issues/22)
* [最終チェック日を表示する列をversion.gitlab の host ページに追加](https://gitlab.com/gitlab-org/growth/engineering/issues/26)
* [使用状況 ping が利用可能かどうかを示す列を version.gitlab の host ページに追加](https://gitlab.com/gitlab-org/growth/engineering/issues/29)
* [license.gitlab.com から version.gitlab の Hosts ページのライセンス検索結果ページにリンク](https://gitlab.com/gitlab-org/growth/engineering/issues/33)
* [version.gitlab でライセンスを検索](https://gitlab.com/gitlab-org/growth/engineering/issues/34)
* [version.gitlab.com の host ページに列のソート機能を追加](https://gitlab.com/gitlab-org/growth/engineering/issues/35)

Conversion

* [アプリ内の価格ページリンクの調整](https://gitlab.com/gitlab-org/growth/engineering/issues/46)
* [GitLab.com の無料ユーザーにブロンズとシルバーのトライアルオプションを追加](https://gitlab.com/gitlab-org/growth/engineering/issues/37)
* [既存の「GitLab へようこそ」ページにプロジェクトのインポートを追加](https://gitlab.com/gitlab-org/growth/engineering/issues/32)
* [トライアルのエンドツーエンドテストの作成](https://gitlab.com/gitlab-org/growth/engineering/issues/31)
* [グループ請求ページからの重複トライアルバナー CTA の削除](https://gitlab.com/gitlab-org/growth/engineering/issues/30)
* [グループ作成 URL が常に一意でエラーを生成しないように更新](https://gitlab.com/gitlab-org/growth/engineering/issues/28)
* [グループ請求ページに今すぐ購入とトライアル開始のオプションを含める](https://gitlab.com/gitlab-org/growth/engineering/issues/27)
* [グループトライアルに今すぐ購入ボタンを追加](https://gitlab.com/gitlab-org/growth/engineering/issues/25)
* [「GitLab へようこそ」メッセージの変更](https://gitlab.com/gitlab-org/growth/engineering/issues/21)
* [有料機能アップグレードポイント - 機能の重み付け](https://gitlab.com/gitlab-org/growth/product/issues/36)

Retention

* [CustomersDot: 更新ページのコピーの変更](https://gitlab.com/gitlab-org/growth/engineering/issues/40)
* [自動 Zuora 更新メールの更新](https://gitlab.com/gitlab-org/growth/engineering/issues/41)
* [更新バナーで CustomersDot にリンク](https://gitlab.com/gitlab-org/growth/engineering/issues/43)
* [「新しいサブスクリプションを追加」ではなく「更新またはユーザーを追加」を購入管理のプライマリ CTA にする](https://gitlab.com/gitlab-org/growth/engineering/issues/45)
* [gitlab.com と about.gitlab.com から customers.gitlab.com へのリンクを追加](https://gitlab.com/gitlab-org/growth/product/issues/93)
* [.com 顧客の自動更新が有効な場合に実際のユーザー数を課金](https://gitlab.com/gitlab-org/growth/engineering/issues/42)
* [更新フローへのディープリンクを有効化](https://gitlab.com/gitlab-org/growth/engineering/issues/39)
* [更新メールが paul@gtilab.com から送信されないように修正](https://gitlab.com/gitlab-org/growth/engineering/issues/38)
* [更新によって生成されるメールの統合](https://gitlab.com/gitlab-org/growth/product/issues/84)
* [WIP: 自動更新をデフォルトにする](https://gitlab.com/gitlab-org/growth/product/issues/43)
