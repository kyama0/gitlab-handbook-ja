---
title: "カスタマーサクセスオペレーション"
description: "カスタマーサクセスオペレーションチームのハンドブックページです。私たちのミッション、戦略、責任、プロセスをカバーしています。"
upstream_path: /handbook/sales/field-operations/customer-success-operations/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## ミッション

GitLab と顧客が、整列したカスタマージャーニー全体で相互に戦略的な成果と収益目標に到達できるようにすることです。

## 戦略

主要な拡大および更新イニシアチブに対してアナリティクスとインサイトを活用した顧客戦略を開発・運用化し、Net ARR の増加につなげます。

1. 一貫性のあるカスタマーサクセスモーションを洗練させる
1. ポストセールスカスタマージャーニーで利用レポートを運用化する
1. 複数のチャネルとカスタマーライフサイクル全体でデジタルモーションを拡大する
1. より予測可能でスケーラブルな収益モーションのために Renewal オペレーションモーションを立ち上げる
1. スケーラブルなビジョン、KPI、運用プロセス、ドキュメンテーションをもたらす運用上の卓越性
1. システムとツールを通じてセールスと CS の効果を高める

## 私たちの業務内容

カスタマーサクセスオペレーションは、カスタマーサクセス組織のために既存のプロセスを作成および更新します。CS Operations は以下を監督します。

- システムの実装と保守
- 運用レポート
- システムイネーブルメント
- 製品アナリティクスと更新戦略
- 会計年度の計画と戦略
- カスタマーサクセスジャーニーの運用化

CS Ops チームは、顧客プログラム、更新、および Gainsight のサポートも提供します。

<div class="flex-row" markdown="0" style="height:80px">
    <a href="/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/" class="btn btn-purple-inv" style="width:30%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">カスタマーサクセスプログラム</a>
    <a href="/handbook/sales/field-operations/customer-success-operations/cs-ops-renewals/" class="btn btn-purple-inv" style="width:30%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">カスタマーサクセス Renewals</a>
    <a href="/handbook/sales/field-operations/customer-success-operations/gainsight/" class="btn btn-purple-inv" style="width:30%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">Gainsight 管理<br> とサポート</a>
</div>
<br>

## 連携先

カスタマーサクセスオペレーションは、すべてのカスタマーサクセスチームにサポート、コンテンツ、データ分析を提供します。

## CS Ops リクエストプロセス

![CS Ops Issue Flowchart](https://lucid.app/publicSegments/view/38bb1bd5-aeb1-4d7d-93cc-94b5e8788f12/image.png "CS Ops Issue Flowchart")

### プロセスフロー

上のフローチャートに沿って、新規リクエストの受付と実行に関する手順です（定義はページの下部にあります）。割り当て後、Issue Assignee は各ラベルを通して Issue を移動します。

- Workstream Lead: 特定のトピック、製品、またはセクションを監督する個人（例: Digital, Gainsight, Scale, ROPS）
- Issue Assignee: 実行を担当し、完了まで Issue を所有する Issue の担当者

1. **New Request** には ~CSOps ラベルのみが付いています - Workstream Lead（Gainsight, Scale, Digital, ROPS など）は、毎週リクエストをレビューして、割り当てる、Need more info としてマークする、won't do としてマークする、別のチームに転送する、または後日に延期するかを決定します
1. **CSOps::Triage** - Workstream Lead はレビュー後、優先順位付けの準備ができたら Issue をここに移動します
1. **CSOps::Monitoring** - 他のチーム（例: systems, SOPS など）に転送された Issue、または CSOps が他のチームによる完了のために Issue をオープンし、その Issue の完了までの進捗を監視したい場合にこのラベルを適用します
1. **CSOps::Need_More_Info** - ビジネスステークホルダーから追加情報や明確化が必要な場合、Issue Assignee がラベルを適用します
1. **CSOps::Unassigned** - 作業を行うべきだと合意したが、優先順位付けまたは容量が不足している場合、Workstream Lead がラベルを適用します
1. **CSOps::In Process** - Issue Assignee が積極的に Issue に取り組んでいます。Issue に取り組んでいる場合は、このラベルが必要です
1. **CSOps::Awaiting Feedback** - Issue Assignee は Peer Reviewer を追加し、ラベルを追加します
1. **CSOps::Blocked** - Issue Assignee は、Issue に取り組めない場合（技術的な問題または決定事項）にラベルを適用します
1. **CSOps::Won't Do** - 作業を行わないという決定がなされた場合、Workstream Lead はこれを選択し、Issue をクローズします
1. **CSOps::Backlog** - 有用かつ妥当だと合意したが、優先順位が低いか、または今後90日以内に達成できない場合、Workstream Lead がラベルを適用します
1. **Issue closing** - Issue Assignee は以下を行います:
   1. ハンドブックの該当セクションが更新されていることを確認する
   1. Gainsight の changelog に追加する
   1. ピアレビュープロセスがフォローされていることを確認する
   1. 最後のステップとしてステークホルダー（Issue 内および可能であれば Slack やチームコールなど他の媒体を使用）とコミュニケーションを取り、リクエストの完了に関する認識とフォロースルーを確実にする
   1. Workstream Lead に作業の概要と次のステップとともに認識されていることを確認する
   1. Issue Assignee は `CSOps::Completed` ラベルを追加する
   1. Issue をクローズします！

## CS Ops ボード、グループ、プロジェクト、ラベル

### CS Operations ボード

CS Ops チームは、Issue と Issue ボードを使用してプロジェクトとタスクを追跡します。プロジェクトでヘルプが必要な場合は、Issue をオープンして GitLab リポジトリ内のどこにでも ~CSOps ラベルを追加してください。

CS Operations は、リポジトリ内の任意のグループまたはサブグループの Issue をキャプチャおよび追跡するために[グローバル Issue ボード](https://gitlab.com/groups/gitlab-com/-/boards/3156857?label_name[]=CSOps)を使用します。

CS Ops Technical Writing については、[グローバル Issue ボード](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/boards/4341765?label_name[]=CS%20Ops%20Technical%20Writing)を参照してください。

### グループ

- セールスチームグループ内外の Issue を含む可能性のあるエピックには `gitlab.com` グループを使用します。
- Field Operations グループ内外の Issue を含む可能性のあるエピックには GitLab Sales Team グループを使用します。

### プロジェクト

[CS Operations プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations)に Issue を作成します。

### Issue の重み付け

- Weight = 1: 0〜1時間の作業
- Weight = 3: 1〜3時間の作業
- Weight = 5: 3〜5時間の作業
- Weight = 7: 5〜7時間の作業

1日以上かかるものは、エピック/複数の Issue でキャプチャする必要があります。

### ラベル

CS Ops 用の新しい Issue や MR を作成するときに使用するラベル:

**チーム固有またはシステムラベル**

- **CSOps** - すべての CS Operations 関連の Issue と MR を追跡および管理するために使用
- **CS Programs** - デジタルプログラムチームがコンテンツリクエスト、改善、その他のデジタル顧客マーケティング手段を追跡および管理するため
- **CS Product Usage Reporting** - カスタマーサクセスの製品利用データに関連する Issue
- **CS Analytics** - カスタマーサクセスアナリティクスの Issue を追跡するために使用
- **CS RenewalOps** - 顧客の更新プロセスと体験を改善するために Renewal Ops チーム向けの Issue を指定するラベル
- **CS Ops Technical Writing** - レビューまたはコピー作成のために CS Ops テクニカルライターに割り当て
- **Gainsight** - Issue が Gainsight に関連していることを指定するラベル
- **Gainsight: Bug** - このラベルは Gainsight 専用のバグを追跡するために使用
- **Gainsight: Feature Request** - このラベルは、Gainsight のインストール（Gainsight 製品ではなく）に対する機能リクエストを追跡するために使用

**スコープラベル** - SDLC の進捗追跡に使用

- **CSOps::Need_More_Info** - リクエスト者からの追加情報が必要、またはリクエストを完了するための情報が不足しています
- **CSOps::Triage** - トリアージステージにある Issue
- **CSOps::Ready_for_Assignment** - CS Ops によって割り当てと優先順位付けの準備ができています
- **CSOps::Awaiting Feedback** - ピアレビューや、Issue をクローズする前に分析が必要な場合に使用
- **CSOps::In_Process** - 現在の週またはマイルストーンで積極的に取り組まれています
- **CSOps::Blocked** - 現在、内部または外部の前提条件によりブロックされています
- **CSOps::Backlog** - 現在評価または作業されていない Issue
- **CSOps - Interrupt** - 現在のマイルストーンが開始された後に提出され、元のマイルストーンスコープより優先された Issue
- **CSOps::Triage** - トリアージステージにある Issue
- **CSOps::Won't Do** - ソリューションのスコープが既に決定されている可能性があるものの、Issue が作業/完了されないことを示します
- **CSOPs::Completed** - Issue に関連する作業が提供/完了され、Issue がクローズされていることを示すために使用

**セグメントとチームサポートラベル** - リクエストがどこから来たかを追跡するため

- **CSOps - CSM- Ops** - CSM チームに利益をもたらす CS Ops チームによってオープンされたリクエスト
- **CSOps - CSM** - CSM チームから発生したリクエスト
- **CSOps - PS** - PS チームから発生した、または PS チームに利益をもたらすリクエスト
- **CSOps - SA** - SA チームから発生した、または SA チームに利益をもたらすリクエスト
- **CSOps - Ops** - CSOps チームに利益をもたらすリクエスト
- **CSOps - PubSec** - Pub Sec CSM チーム固有のリクエスト
- **CSOps - Strategic** - Strategic CSM チーム固有のリクエスト
- **CSOps - Scale** - Scale セグメント向けのリクエスト
- **CSOps - All Segments** - すべての CS セグメントをカバーするリクエスト
- **CSOps - Growth** - Growth CSM チーム固有のリクエスト
- **CSOpsSlack-Questions** - リクエスト/Issue が Slack 経由で来たことを示します（#gainsight-users Slack チャンネルが最大の貢献者）
- **CSOPs-Priority** - これは Top Priority Initiatives に紐づいたイニシアチブ/Issue 用です

## ピアレビュー

ピアレビュープロセス（現在 Gainsight 関連の Issue 用）は、CS Ops チームメンバーが自分の作業をチームの別のメンバーにレビューしてもらうことを可能にします。

Issue 所有者は、ピアレビュアーに Issue を完了する必要があるタイミングを伝えるなど、Issue がタイムリーに完了することを確認する責任があります。ピアレビュアーは、Issue 所有者から指定された期間内にレビューを完了する責任があります。

- Gainsight 管理者によるピアレビューが**必須**となるのは、ルールまたはデータオブジェクトの変更、追加、または削除（例: 新しいルールやコネクタジョブの作成、オブジェクトからのフィールドの削除、複数のルールの1つへの統合）の場合です
- レポートやダッシュボードの変更については、ピアレビューを強く検討してください。

セカンドオピニオンを持つことが有用だと感じる他の更新については、自由にピアレビューを依頼してください。

ピアレビュープロセスを開始するには:

1. GitLab Issue の **Resolution** セクションで完了した作業の要約を提供します
2. Issue ステータスを `CSOps::Awaiting Feedback` に変更します
3. ピアレビューを完了するチームメイトをタグ付けし、ピアレビューの準備ができていることを Issue にコメントします
4. Issue 所有者は、Issue の完了に最終的な責任を持つため、引き続き担当者のままになります。
