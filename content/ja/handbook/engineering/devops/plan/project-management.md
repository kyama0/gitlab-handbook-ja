---
title: Plan:Project Management チーム
upstream_path: /handbook/engineering/devops/plan/project-management/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## Plan:Project Management チーム

Plan:Project Management チームは [Plan ステージ](/handbook/engineering/devops/plan/)の GitLab の [Project Management カテゴリ](/handbook/product/categories/#project-management-group) に取り組んでいます。

この製品領域のビジョンの詳細については、[Plan ステージ](/handbook/engineering/devops/plan/)のページをご覧ください。

### チームメンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/plan/project-management/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 安定したカウンターパート


<p class="my-3 text-sm text-gray-600 italic">安定したカウンターパート情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/plan/project-management/#stable-counterparts" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### 採用チャート

現在の求人については[採用ページ](https://about.gitlab.com/jobs/)をご覧ください。

## 作業

Plan ステージとしての私たちの働き方は [Plan ステージページ](/handbook/product/categories/#plan-stage)でご確認いただけます。

バックエンドチームについては、標準の GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/) を使用しています。Plan:Project Management バックエンドチームに連絡するには、関連するプロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab)）で Issue を作成し、~"group::project management" ラベルと他の適切なラベルを追加するのが最善です。その後、上記にリストされている関連するプロダクトマネージャーおよび/またはエンジニアリングマネージャーを自由に ping してください。

緊急の項目については、Slack の [#s_plan](https://gitlab.slack.com/archives/s_plan) を自由に使用してください。

### キャパシティプランニング

#### 工数の見積もり

今後の作業に関わる工数を見積もる際は、Plan ステージの他のグループと同じアプローチと数値スケールを使用します。


<!-- include omitted: includes/engineering/plan/estimating-effort.md (no localized version under content/ja/) -->


#### バグのウェイト付け


<!-- include omitted: includes/engineering/plan/weighing-bugs.md (no localized version under content/ja/) -->


#### フィーチャー作業のリファインメントと整理

安定したカウンターパートとの整合を促進し、進捗への可視性を提供し、ビジョンを一連の [MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) に分解するために、[`~workflow::planning breakdown`](/handbook/product-development/how-we-work/product-development-flow/#description-4) 中にプロダクトと UX と協力して `~type::feature` の成果物を以下の構造にリファインメント・整理します:

- フィーチャー（Epic）- 対応するフィーチャーフラグをデフォルトで「on」にするために必要なすべての垂直フィーチャースライスを含みます。フィーチャー Epic はまた、対応するリリースポスト項目 MR を生成する場所としても機能します。フィーチャー Epic は[顧客価値を提供する最小限の機能](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)にスコープされるべきです。将来の拡張のために計画された追加スコープはフォローアップ Epic に格納する必要があります。
  - スパイク（Issue）- フィーチャーを実装するために必要な工数を正確に見積もれない場合は、まずスパイクを実施します
  - UX（Issue）- より大きなイニシアチブの場合、UX は設計目標、設計ドラフト、設計の会話と批評、および実装される選択した設計方向の SSOT として機能する別の UX Issue を作成します。[UX Issue の詳細を読む](/handbook/product/ux/product-design/ux-roadmaps/)。
  - 垂直フィーチャースライス（Issue）- 単一のマイルストーン内で完了でき、本番環境の `plan-stage` グループ内でテストおよび検証できるフィーチャーのサブセット。
    - エンジニアリングタスク（タスク - *オプション*）- 垂直フィーチャースライスを提供するために完了する必要がある1つまたは複数のエンジニアリングタスク。タスクのスコープは通常、単一の MR に対応します。

`~workflow::planning breakdown` フェーズ中に、フィーチャー Epic の「適切なサイズ調整」についてプロダクトと UX と効率的かつ効果的にコラボレーションできるよう、すべての Issue にウェイトを付ける必要があります。すべての Issue が、私たちが提案している特定の製品エリア内の改善の広いセットを説明する親 Epic に接続されていることが望まれます。望ましい結果は、できるだけ小さく、イテレーションする能力を最大化し、顧客に「変更疲れ」をかけすぎずに意味のある価値を提供しながら、全体的な納品の進捗を追跡しやすくすることです。

### エンジニアリング作業ローテーション

技術的負債、セキュリティ Issue、バグのバックログに製品コミットメントと並行して一貫して対処できるようにするために、マイルストーンベースのローテーションシステムを実施しています。各マイルストーンで、1人のバックエンドと1人のフロントエンドエンジニアが、フィーチャー開発の代わりにエンジニアリングに特化した作業に専念します。

#### 仕組み

**ローテーションスケジュール**

- 一度に1マイルストーン
- ローテーション期間中は 100% 専念
- マイルストーンごとに1人のバックエンドエンジニアと1人のフロントエンドエンジニア
- エンジニアは長期イニシアチブの DRI を務めている間はローテーションプールに入りません

**フォーカスエリア** ローテーション中に取り組める作業の非網羅的リスト:

- SLA に近づいているまたは過ぎたセキュリティ Issue
- バグバックログの削減
- データベースのスケーラビリティとパフォーマンス
- 一般的な技術的負債とリファクタリング

#### このアプローチの理由

1. **一貫した進捗**: エンジニアリングヘルスの作業が永続的に延期されない
1. **知識の共有**: 異なるチームメンバーがコードベースのさまざまな部分と異なるプロセスを経験する
1. **深い集中**: 100% の専念により、エンジニアはコンテキストの切り替えなしに複雑な問題に集中できる
1. **予測可能なプランニング**: エンジニアがフィーチャー作業に使用できない時期を正確に把握できる

#### 実施ガイドライン

- ローテーション中のエンジニアはフィーチャー作業の要求から保護される（重大なエスカレーションを除く）
- 各ローテーションには継続性のための引き継ぎノートを含める
- Core DevOps と会社の優先事項に基づいてフォーカスエリアを調整する

#### 成功指標

以下を追跡します:

- 期限切れおよび全体的なセキュリティ Issue の削減
- バグバックログの速度
- パフォーマンスの改善
- 可用性/エラーバジェットの改善
- ローテーションシステムに対するチームの満足度

### バックエンドとフロントエンドのコラボレーション

#### ~"backend complete" ラベルの使用

~"backend complete" ラベルは、複数の専門性（通常はバックエンドとフロントエンド）を持つ Issue に追加され、バックエンドコンポーネントが完了していることを示します。バックエンドの作業が機能的に完了し、マージされ、検証されたがフロントエンドまたは他の作業が継続中の場合にこのラベルを追加してください。

### 取り組む作業の選択

[Plan:Project Management ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/1285239?label_name[]=backend)には、実装に関連する[ワークフロー列](/handbook/product-development/how-we-work/product-development-flow/)と共に優先された作業が表示されます。進行中のコミュニティの貢献を表示する追加の列があります。~backend でフィルタリングするとバックエンドエンジニアが取り組む Issue が表示されます。

解決できる自信がない場合はトップの項目を取らなくても構いませんが、その場合は [#s_plan](https://gitlab.slack.com/archives/s_plan) に投稿してください。これはおそらく Issue をより適切に指定する必要があることを意味します。

### キューイング実験

効率を向上させるための継続的な取り組みの一環として、[レガシー Issue のワークアイテムへの移行プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/issues/461855)で従来のウェイト/ストーリーポイントの代わりに[キューイング技術](https://www.brightball.com/articles/story-points-are-pointless-measure-queues)を実験します。マイルストーン 17.3 から始まり、以下を行います:

1. **必要な Issue のリファインメント**: [最初の MVC に必要な Issue のリスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=work%20items::ga-issues&label_name%5B%5D=work%20items&first_page_size=100)を確認します。

    - タスクのバンドルをグループ化する最善の方法を決定し、Issue または Epic を使用します。
    - 大きな Issue をタスクに分解し、~"workflow::in dev" から ~"workflow::in review" に5営業日以内に移動できるタスクを目指します。

2. **タスクの優先付け**: ステップ1からのタスクを優先します。
3. **ワークフローの更新**: タスクのリストを含めるように #picking-something-to-work-on セクションを更新し、進行中の作業をできる限り少なく保つために監視します。

これにより、キュー管理の原則を使って進捗をより効果的に管理・報告できます。

#### 重大度の高い Issue


<!-- include omitted: includes/engineering/plan/high-severity-items.md (no localized version under content/ja/) -->


### スケジュールされていない Issue の作業

GitLab の全員は[影響を測定し、活動量を測定しない](/handbook/values/#results)ため、自分の裁量で作業を管理する自由があります。これの一部として、通常の月次リリースの一部としてスケジュールされていない項目に取り組む機会があります。これはハンドブックの他の場所にある項目のほとんどを繰り返すものであり、それらを明示するためにここにあります:

1. 私たちは人々が[自分自身の上司](/handbook/values/#efficiency)であることを期待し、[私たち自身で GitLab を使います](/handbook/values/#collaboration)。重要だと思うものがあれば、[スケジュールに入れるようリクエスト](/handbook/engineering/workflow/#requesting-something-to-be-scheduled)するか、他のタスクを念頭に置きながら[自分で提案に取り組む](/handbook/values/#iteration)ことができます。
1. 特定の時間を確保したいが、既存のイベントのトピックに興味がない場合は、「For Scheduling」のラベルを Issue に付け、マネージャーを可視性のためにコピーしてください。

取り組む作業を選んだら、以下を実施してください:

1. 標準ワークフローに従い、自分にアサインしてください。
1. [#s_plan](https://gitlab.slack.com/archives/s_plan) でシェアしてください（さらに広く、#development や #backend などでも構いません）。

### 回顧

GitLab のマイルストーンは**毎月第3木曜日**に終了し、そのスケジュールに合わせた非同期の回顧を実施しています。回顧は3つのフェーズで構成されています:

#### フェーズ1: 収集

**期間:**
開始: **マイルストーン終了の3月曜日前**
終了: **リリース週の終わり（マイルストーンの木曜日）**

**内容:**

- チームメンバーは Slack ショートカット（[`⚡Project Management Retro Ideas`](https://slack.com/shortcuts/Ft08T8L66DSA/9b29cd637b654c4904e33e9199b88149)）を使って回顧トピックを提出する
- 週次リマインダーが送られる
- 回答はファシリテーターがアクセスできる Google スプレッドシートに送信される

#### フェーズ2: 統合

**期間:**
開始: **リリース週の金曜日**
終了: **翌火曜日**

**内容:**

- ファシリテーターがエントリをレビューし、テーマごとにグループ化する
- 重複を削除する
- 投票で議論するトップ2〜3のトピックを選ぶ

#### フェーズ3: 議論とアクション

**期間:**
開始: **リリースの1週間後（火曜日〜金曜日）**

**内容:**

- ファシリテーターが生成された回顧 Issue にトピックを追加する
- チームが非同期でポイントをレビューし、コメントする
- チームが前進させる2〜3つのアクションアイテムを選択する
- オーナーがアサインされ、フォローアップを追跡するための新しい Issue が作成される

#### タイムラインの例（マイルストーン 18.3 終了: 2025-07-17）

| フェーズ | 日程 |
|------------------|--------------------------|
| 収集 | 6月30日 〜 7月17日 |
| 統合 | 7月18日 〜 7月22日 |
| 議論/アクション | 7月22日 〜 7月25日 |

#### リマインダー

- 収集ウィンドウ中はいつでも Slack ショートカットを使って回顧アイデアを提出してください。
- 参加を促すために週次リマインダーメッセージが投稿されます。
- 短くして構いません — 1文でも役立ちます。

## 便利なリンク

- [Plan:Project Management ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/1285239?label_name[]=backend) - 現在のリリースの作業を表示します
- Slack の [#s_plan](https://gitlab.slack.com/archives/s_plan)
- [録画されたミーティング](https://www.youtube.com/playlist?list=PL05JrBw4t0KoceqcTneOVmAzhEp6NinY0)
- [回顧](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)
