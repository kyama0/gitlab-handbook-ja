---
title: "インフラストラクチャプラットフォームのプロジェクト管理"
upstream_path: /handbook/engineering/infrastructure-platforms/project-management/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T03:12:43Z"
translator: claude
stale: false
lastmod: "2026-03-04T15:20:03-07:00"
---

## プラットフォームにおけるプロジェクト管理

私たちは GitLab のエピックと Issue を使用して、作業の進捗とステータスを伝達しています。
インフラプラットフォームのすべてのチームは、チームメンバーが必要に応じて異なるプロジェクトに貢献しやすいよう、これらのガイドラインに従っています。

### プロジェクトはグランドレビューで毎週レビューされます

#### エピック更新タイムライン

インフラプラットフォームのエピックは[GitLab オペレーティングモデル（GOM）](https://internal.gitlab.com/handbook/company/gitlab-operating-model/)と整合しています。多くのエピックは次のいずれかです:

1. [グランドレビューエピック](https://gitlab.com/groups/gitlab-com/-/work_items/2115)の子エピック
2. [オペレーティングモデル機能リードエピック](https://gitlab.com/groups/gitlab-operating-model/-/work_items?label_name%5B%5D=Owner%3A%3AInfrastructure%20Platforms&type%5B%5D=epic)にリンク済み

更新スケジュールは、これらのレベルを通じて情報をカスケードするよう設計されています:

- **木曜日 EoD（金曜日 02:00 UTC）**: DRI がプロジェクトエピックを更新します（自動化が木曜日 00:00 UTC にプロンプトを送ります）
- **金曜日**: リードが木曜日の情報を使用してグランドレビューと GOM 機能リードエピックを更新します
- **月曜日**: リーダーシップチームが更新を議論します
- **火曜日**: プラットフォームグランドレビューが行われます
- **水曜日**: インフラ VP と PM がカスケードされた情報を使用する会社全体のオペレーティングモデルレビュー

このタイムラインにより、[E-グループ目標](https://gitlab.com/groups/gitlab-operating-model/-/work_items?label_name%5B%5D=Operating%20Model%3A%3A%202%20-%20Egroup%20Metric&type%5B%5D=epic)と[会社イニシアチブ](https://gitlab.com/groups/gitlab-operating-model/-/work_items?label_name%5B%5D=Operating%20Model%3A%3A%201%20-%20Company%20Objective&type%5B%5D=epic)との整合が確保され、エグゼクティブチームに至るすべてのレベルで戦略的意思決定のためのタイムリーかつ十分に裏付けられたデータが提供されます。

完了したエピックは ~"workflow-infra::In Progress" ラベルを持った状態で「オープン」のままにしてください。
プロジェクトを要約し、完了ステータスを共有するためにエピックの説明のステータスブロックを更新してください。

私たちは[自動化](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries/)を使用して各グループのトップレベルエピックにステータス情報を収集し、エピックのノートからステータス更新を収集します。
この自動化は毎日数回実行され、[プロジェクトページに記載されているパイプラインを実行することで](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries/-/pipeline_schedules)トリガーできます。

#### プロジェクトエピックのステータス更新

プロジェクトエピックで週次ステータス更新が有効になると、ステータス更新の提供方法についての指示を含むコメントが表示されます。

**毎週木曜日**、プロジェクトの DRI はエピックの説明のステータスブロックを以下のように更新する必要があります:

1. すべての貢献者によるプロジェクトへの費やした時間数を記録します。
1. 前回の更新以降の成果を簡単に強調します。
1. プロジェクトのブロッカーを示します。
1. 計画された次のステップ、または進捗のために必要な軽減策を示します。

プロジェクトエピックには自動的にコメントが生成されてステータスを報告します。
この機能を有効にするには、エピックが[これらのステップ](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries/-/blob/42365bbd7df9757f49d6dd4eb3d2625c399fac59/README.md#child-epics)に従っていることを確認してください。

エピックのアサイニーは次のようなノートでメンションされます:

```markdown
@<user> Reply to this note to update the status of your epic for YYYY-MM-DD
...
```

GitLab Duo エージェントチャットは更新の開始点を生成するのに役立ちます:

1. エピックを読み込み、メンションされているステータスノートに移動します（有効化後）。
2. サイドバーの「GitLab Duo Chat」をクリックし、エージェントモードを有効にします。
3. 以下のプロンプトを使用してステータスノートの更新の下書きを作成します

```markdown
Please provide a terse high level summary of the last 7 days of activity using the child issues of this epic, highlighting new and issues that were closed in the last 7 days using the following format:

<overview>

:tada: **achievements**:
- ...
:issue-blocked: **blockers**:
- ...
:arrow_forward: **next**:
- ...

Give the status update in raw markdown (preformatted text) and do not use any markdown headings.
```

#### プロジェクトが完了したとき

1. エピックは「オープン」のままで ~"workflow-infra::In Progress" ラベルを保持し、次のプラットフォームグランドレビューのためにまだリストされるようにします。
1. DRI はエピックの説明を更新し、`Participants` セクションを含む各セクションが最新であることを確認する責任があります。
1. DRI はクロージングステータス（最終ステータス更新）を作成します。これには以下が含まれます:
   1. 元の問題
   1. 行われた変更の簡潔な説明
   1. プロジェクトが完了した今の影響についての情報
   1. デモ/ウォークスルービデオへのリンク
   1. グランドレビュアーにエピックをクローズするよう指示する案内
   1. 絵文字および/または称賛は歓迎されますが必須ではありません
   1. 注: プロジェクトの最終週に作業した時間数をステータス更新テンプレートの時間追跡フィールドに更新することを忘れないでください（エピック全体の累積時間ではありません）

完了したエピックは、次の [`Platforms Grand Review`](https://www.youtube.com/playlist?list=PL05JrBw4t0KqDXSHdlUvPWHOj_Hw8JdQ1)（GitLab Unfiltered アカウントでアクセス可能なプレイリスト）でレビュー、祝福、完了への更新、クローズが行われます。

クロージングステータスは年末チームサマリーを作成する際に役立ちます。

## エピック

エピックには常に以下のセクションが必要です:

- 問題の声明
- プロジェクト完了に責任を持つ個人（DRI）
- 定義された終了基準
- 前のステータス更新とその他の記録すべき関連情報を含む開発ログ
- エピックの最新ステータス更新を含むステータス更新
- 開始日と推定完了日

### セクションのフォーマット

エピックの DRI はアサイニーにし、エピックのアサイニーは 1 人のみにしてください。

エピックの説明では以下の見出しと構造を使用してください:

#### 参加者セクション

このセクションは動的で、現在エピックの作業に貢献している人々を含みます。
DRI と EM は参加者リストを適切に更新する責任があります。

```markdown
### Participants

- @participant1
- @participant2
- @participantN
```

#### ステータスセクション

ステータスセクションはサブエピックで自動的に生成されます。
詳細については[プロジェクトエピックのステータス更新](#status-updates-on-project-epics)セクションを参照してください。

### これは Issue であるべきか、エピックであるべきか?

私たちはエピックを使用して、特定の目標を達成したり特定のインパクトにつながる一連の作業を一つのテーマの下に統合できることを示します。
エピックは 2 週間以上かかる可能性が高い、または既に 2 週間以上続いている任意の作業セットをカバーできます。
その後、その目標に向けた進捗を定期的に報告し、完了したときに作業のインパクトを明確に示すことができます。

## 特定の Issue タイプ

### 是正措置とセキュリティ Issue

私たちは `~"corrective action"` または `~"security"` とラベル付けされた是正措置とセキュリティ Issue にも取り組んでいます。
これらの Issue では、特定の SLO を満たすために `severity::*` ラベルが設定されます。

- セキュリティ Issue については[深刻度別の解決までの時間の表](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)を参照してください
- 是正措置の SLO は現在[品質](/handbook/product-development/how-we-work/issue-triage/#severity-slos)の定義に基づいています:

## ラベル

インフラプラットフォームチームは以下のラベルセットを使用しています:

| 説明 | ラベル |
|-------------|--------|
| セクションラベル | `section::developer experience`<br/>`section::gitlab delivery`<br/>`section::gitlab dedicated`<br/>`section::production engineering`<br/>`section::tenant scale` |
| ステージラベル | `devops::developer experience`<br/>`devops::gitlab delivery`<br/>`devops::gitlab dedicated`<br/>`devops::production engineering`<br/>`devops::data access`<br/>`devops::runtime` |
| グループラベル | `group::build`<br/>`group::Cloud Cost Utilization`<br/>`group::development analytics`<br/>`group::development tooling`<br/>`group::environment automation`<br/>`group::Foundations`<br/>`group::geo`<br/>`group::git`<br/>`group::gitaly`<br/>`group::Observability`<br/>`group::operate`<br/>`group::Ops`<br/>`group::organizations`<br/>`group::performance enablement`<br/>`group::release-and-deploy`<br/>`group::Runners Platform`<br/>`group::runway`<br/>`group::switchboard`<br/>`group::tenant services`<br/>`group::test governance`<br/>`group::US PubSec` |
| スコープ付き `workflow-infra::*` ラベル | （以下参照） |
| スコープ付き `infra-category::*` ラベル | （以下参照） |
| オプションのスコープ付き `Service` ラベル | `Service::*` |

### ワークフローラベル

私たちはスコープ付きワークフローラベルを活用して、作業のさまざまなステージを追跡します。
これらは各 Issue の作業の進行を示し、ブロッカーを取り除いたりフォーカスを変更しやすくします。

Issue はすべての状態を経由する必要はないかもしれませんが、標準的なワークフローの進行は以下の表の上から下への順序です:

| 状態ラベル | 説明 |
| ----------- | ----------- |
| ![トリアージ](/images/engineering/infrastructure-platforms/project-management/label-triage.png) | デフォルトラベル。タスクが提起され、正しいアクション、必要な作業、またはチームオーナーシップを決定するための努力が必要です |
| ![提案](/images/engineering/infrastructure-platforms/project-management/label-proposal.png) | トリアージ後に提案が作成され、レビューのために提出されます。<br/>さらなる質問やブロッカーがない場合、Issue を「準備完了」に移動できます。 |
| ![準備完了](/images/engineering/infrastructure-platforms/project-management/label-ready.png) | 提案が完了し、Issue は作業のピックアップを待っています。 |
| ![進行中](/images/engineering/infrastructure-platforms/project-management/label-in_progress.png) | Issue が割り当てられ、作業が開始されました。<br/>進行中は、後のステージで実行される検証のための手順を含めるよう Issue を更新してください。|
| ![レビュー中](/images/engineering/infrastructure-platforms/project-management/label-under_review.png) | Issue はレビュー中の MR があります。 |
| ![検証](/images/engineering/infrastructure-platforms/project-management/label-verify.png) | MR がマージされ、初期の問題が解決されたことを確認するために変更の影響を確認するのを待っています。 |
| ![完了](/images/engineering/infrastructure-platforms/project-management/label-done.png) | Issue は最新のグラフと測定値で更新され、このラベルが適用されると Issue はクローズできます。 |

他に重要な 3 つのワークフローラベルがあります:

| 状態ラベル | 説明 |
| ----------- | ----------- |
| ![キャンセル](/images/engineering/infrastructure-platforms/project-management/label-cancelled.png) | Issue の作業は外部要因または Issue を解決しないという決定により放棄されます。このラベルを適用した後、Issue はクローズされます。 |
| ![停滞](/images/engineering/infrastructure-platforms/project-management/label-stalled.png) | 作業は放棄されませんが、他の作業の優先度が高いです。このラベルを適用した後、チームのエンジニアリングマネージャーが Issue でメンションされ、優先度を変更するかさらなる支援を見つけます。 |
| ![ブロック中](/images/engineering/infrastructure-platforms/project-management/label-blocked.png) | 作業は外部依存関係または他の外部要因によりブロックされています。可能であれば、[ブロッキング Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html) も設定する必要があります。このラベルを適用した後、ラベルを削除できるまでチームによって定期的にトリアージされます。 |

### カテゴリラベル

私たちはスコープ付きカテゴリラベルを使用して、実施される作業のタイプまたは領域を分類します。
これらのラベルは機能的カテゴリによって Issue を整理してフィルタリングするのに役立ちます。

| カテゴリラベル | 説明 |
| -------------- | ----------- |
| `infra-category::KTLO` | Keep the lights on（ライトを維持する）。システムの安定性、信頼性、パフォーマンスを維持するために必要な運用作業。モニタリング、アラート、インシデント対応、定期的なメンテナンスを含みます。 |
| `infra-category::Tech Debt` | 技術的負債とリファクタリング作業。将来のメンテナンス負担を削減するコード品質、アーキテクチャ、テスト、ドキュメント、インフラの改善またはバグ修正。 |
| `infra-category::Customer innovation` | 顧客のニーズとフィードバックによって直接推進される作業。顧客体験を向上させ、顧客から報告された問題に対処する機能、改善、ソリューション。 |
| `infra-category::Internal innovation` | 内部改善と探求。開発者体験、チームの生産性を向上させる、または将来の採用のための新しい技術とアプローチを探求する作業。複数クラスの技術的負債に対処する場合、基盤/アーキテクチャ作業が含まれる場合があります。 |

### gitlab-org グループのラベル

ステージグループは [type ラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)を使用して `gitlab-org` グループのプロジェクトのマージリクエストにラベル付けします。
ステージグループに作業を実施させる必要がある場合、Issue の作成時に関連するステージグループラベルを適用するのが最善です。

## トリアージ Ops

[gitlab-com/gl-infra](https://gitlab.com/gitlab-com/gl-infra) 配下のラベリングとボット通知については、[gitlab-triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) と [triage-ops](https://gitlab.com/gitlab-com/gl-infra/triage-ops/) プロジェクトを使用しています。
ラベリング、SLO の適用、ワークフローラベル管理については、インフラプラットフォームのプロジェクトに対して均一に設定された共通ポリシーがあります。
追加のポリシーを追加する方法の詳細については[プロジェクトの README.md](https://gitlab.com/gitlab-com/gl-infra/triage-ops/-/blob/master/README.md?ref_type=heads) を参照してください。

## レトロスペクティブ

四半期末または大きな成果物の完了時に、チームはレトロスペクティブを実施して学びを記録する必要があります。
レトロスペクティブに決まったフォーマットはありませんが、エンジニアリングマネージャーは[GitLab レトロスペクティブガイドライン](/handbook/engineering/careers/management/group-retrospectives/)を把握しておく必要があります。
レトロスペクティブ DRI はアクションのリストを特定し、Issue の説明のアクションサマリーセクションに統合します。

アクションを特定するプロセス:

1. 各スレッドにアクションをタイトルとしたコメントを追加します（H3 レベル）
1. 一部のスレッドはアクションを必要としない場合があり、透明性のためにスレッドの最後にこれを明示的に述べるとよいでしょう
1. アクションコメントの下に、チームが取れるアクションの提案を追加します
1. 貢献者にピンして、アクションと潜在的な改善に対してラウンドのバリデーションを得ます
1. 各アクションに Issue を作成し、アクションサマリーセクションにリストアップします
