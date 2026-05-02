---
title: "Distribution チームワークフロー"
description: "Omnibus、Helm、その他のエンジニアリングプロジェクトにおける Distribution エンジニアの作業方法の概要。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/workflow/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
---

## 共通リンク

* [エンジニアリングチームワークフロー](/handbook/engineering/workflow/)

## 概要

Distribution チームメンバーは以下が期待されます:

* コミュニティや他のチームとのやり取りにおいて親切であること
* プロジェクトの赤いメインブランチの修正を最高優先度とすること
* プロジェクトのスケジュールされたキューから作業アイテムを選ぶこと
* 統合テストでカバーされていない変更のテスト計画を定義すること
* [エンジニアリングメトリクス](/handbook/product/groups/product-analysis/engineering/dashboards/) を追跡するために Issue とマージリクエストにラベルを付けること

## グループ

Distribution チームは Distribution:Build と Distribution:Deploy の 2 つのグループで構成されています。

### Distribution Build タスク

* すべての Distribution プロジェクトのチームパイプラインを維持する
* 新しいクラウド、プラットフォーム、アーキテクチャ、コンポーネントのサポートのリサーチ
* アクセス制御、権限、CVE パッチ
* チームインフラ/リソース管理
* 依存関係の更新
* ライセンス管理
* 検証/認定のためのパートナーへの提出

### Distribution Deploy タスク

* 初期インストールとコンポーザビリティ
* アップグレード / ダウングレード
* デプロイのスケーリング
* プラットフォームやプロバイダー間の移行
* データライフサイクル管理
* セキュアな設定とコミュニケーション
* 既存ツールへの統合のためのクラウドとプラットフォームのリサーチ

## 作業の優先順位

現在 [Distribution DRI](#distribution-dri) として活動していない Distribution チームメンバーが完了すべき作業の優先順位は以下のとおりです:

| 優先度レベル | 作業アイテム |
| -|- |
| 1 | レビュー中の `~priority::1` マージリクエストのブロックを解除する |
| 1 | `~priority::1` の [レビュー用マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を引き受ける |
| 1 | 進行中の `~priority::1` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) に取り組む |
| 1 | 利用可能な `~priority::1` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) を引き受ける |
| 2 | 残りのレビュー中マージリクエストのブロックを解除する |
| 3 | 進行中の `~priority::2` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) に取り組む |
| 3 | [SLO 違反](merge_requests.md#service-level-objective) の [レビュー用マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を引き受ける |
| 4 | [SLO 違反近い](merge_requests.md#service-level-objective) [レビュー用マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を引き受ける |
| 5 | 利用可能な `~priority::2` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) を引き受ける |
| 6 | 進行中の `~priority::3` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) に取り組む |
| 6 | 利用可能な `~priority::3` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) を引き受ける |
| 6 | [SLO 非違反](merge_requests.md#service-level-objective) [レビュー用マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) を引き受ける |
| 7 | 進行中の `~priority::4` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) に取り組む |
| 7 | 利用可能な `~priority::4` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) を引き受ける |

毎日何をすべきかを決める際の一般的なガイドとして、この優先順位の概要を使用してください。このリストはチームマネージャーが定めたチームの全体的な優先事項と目標に向けて作業を導くのに役立ちます。

## ワークフローの概要

Distribution グループは原則として [GitLab 製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary) とラベルを使用しますが、作業の性質上、以下のフェーズは通常スキップします:

* [バリデーションフェーズ 4: デザイン](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-4-design)
* [バリデーションフェーズ 5: ソリューションバリデーション](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-5-solution-validation)

### 計画プロセス

すべての計画ダッシュボードは `#g_distribution` の `Issue dashboards` フォルダにブックマークされています。

#### 四半期計画

四半期の 3 ヶ月目に:

1. **PM & EM & スタッフエンジニア**: 第 1 週までに、翌四半期の OKR の草案を作成します。
1. **OKR DRI**: 第 2 週から、OKR を引き受け、他のチームメンバーやステークホルダーとのスコーピングを開始します。
1. **全エンジニア**: 第 2 週から、興味のある OKR スコーピングに貢献し始めます。
1. **EM**: 第 2 週末までに、現在のスコーピング状況に基づいて計画日の確保が必要かどうかを決定します。
1. **全員**: 月末に、OKR とそのスコーピングが最終化されているべきです。

#### マイルストーン計画

[現在のマイルストーン](https://gitlab.com/groups/gitlab-org/-/milestones/) の終わりに、各エンジニアは自分にアサインされた Issue を更新し、未完了のものをレビューのために次のマイルストーンにロールオーバーすることが期待されます。

エンジニアリングマネージャーとプロダクトマネージャーは、Distribution チームが直接責任を持つ作業のスケジューリングに責任があります。

アサインされていない Issue は誰でも取り組むことができます。特定のタスクに取り組みたい場合は、Issue にコメントを残すことで関心を示すことができます。コメントには作業を開始する*日付*を含める必要があります。日付が含まれていない場合、または日付が過ぎている場合は、再び誰でも引き受けることができます。

##### 現在のマイルストーンへの `Unplanned` 作業の追加

場合によっては、当初計画されていなかったが緊急の注意が必要な作業があります。誰でも合理的なものを引き受けて取り組むことができます。典型的なワークフローは:

1. 最善の判断で作業の緊急性を評価します。緊急性は通常、進行中のインシデント、内部および外部の顧客への影響、SLA とポリシー、および締め切りによって決定できます。
1. 合理的なリクエストであれば、`Unplanned` と必要な他のすべてのラベルを割り当て、[作業の優先順位](#work-prioritization) に従って取り組みます。
1. そうでない場合は、リクエスターに理由を説明して可能な代替案を提示し、必要に応じて EM&PM にエスカレートします。
1. 不明な場合は、リクエスターに明確化を求め、必要に応じて EM&PM にアドバイスを求めます。

#### バックログレビュー

**更新予定**

### 必須ラベル

[GitLab 製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary) のラベルに加えて、Epic、Issue、マージリクエスト（アイテム）に常時適用される**必須**ラベルが多数あります:

* `group::distribution` - Distribution チームに特有の、または Distribution チームによって作成されたアイテム。すべての Distribution サブグループのアイテムに適用される [スコープ付きラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels) です（さらなるガイダンスが出るまで）。
* `group::distribution::*` - Distribution のサブグループの 1 つに特有の、またはそのグループによって作成されたアイテム。[ネストされたスコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#nested-scopes) であり、相互排他的ですが、`group::distribution` スコープ付きラベルと一緒に使用できます。
  * `group::distribution::build` - [build](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributionbuild-charter) グループに特有の、またはそのグループによって作成されたアイテム。
  * `group::distribution::deploy` - [deployment](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributiondeploy-charter) グループに特有の、またはそのグループによって作成されたアイテム。
* `FY(2 桁の年)::*` (1-4) - 四半期内のリリースを目標とする取り組みを示す [スコープ付きラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)。例: `FY24::Q2`。

特定のシナリオで追加される**必須**ラベルもあります:

* `Unplanned` - 現在のマイルストーンで当初計画されていなかった緊急リクエスト。これらのアイテムの作業は通常イベント駆動型です - 別のチームがサポートを必要としている、ユーザーに影響を与えているリグレッション、またはチームの非効率を引き起こしている技術的負債など。
* `spike` - 主にオプションを理解し、将来の成果物を分解するためのリサーチを伴う Issue。[スパイク](/handbook/product/product-processes/#spikes) は、新しい Epic の最初の Issue であることが多く、その出力が追加の Issue と直列/並列作業の順序を定義します。

上記のラベルに加えて、[マージリクエストレビュー中に使用されるワークフローラベル](merge_requests.html#workflow) と [Issue トリアージ中に使用されるラベル](triage.html#label-glossary) も参照してください。

### 優先度の定義

**更新予定**

## Distribution DRI

チームメンバーの中断やコンテキストスイッチを最小限に抑えるために、Distribution は週単位のローテーションで 1 人のエンジニア（DRI、Directly Responsible Individual）を指定します。このエンジニアは通常の業務時間中に以下の業務を担当します。それらの時間外の緊急リクエストについては、[オンコールプロセス](/handbook/engineering/on-call/) で処理されます。

### 期待事項

DRI はリクエストを単独で解決する責任を負うわけではありません。必要に応じてスペシャリスト（SME）を関与させ、エンジニアリングマネージャーや製品マネージャーにエスカレートすべきです。また、DRI が週中に同量の `Deliverable` 作業を完了することも期待されていません。専門知識が必要なエスカレーションについては、[Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/) を参照してください。

### 業務

Distribution DRI はリストの順番に従って以下の分野に取り組みます。

#### 週中

1. 本番環境からエスカレートされたインシデントのサポート。
1. [顧客リクエストのサポート](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#engaging-distribution-for-expertise-in-support)
    * [Build と Operate のサポートヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues)
1. [#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE) Slack チャンネルで質問に答えるか転送する。
1. [Issue トリアージの実施](triage.md)。
1. GitLab での `@gitlab-org/distribution` グループメンションに応答する。
1. **任意:** 現在のマイルストーンの成果物またはその他の Distribution 関連タスクに取り組む。

#### ハンドオーバー

1. アサインされた DRI Issue をクローズする。
1. [シフトアサインリスト](https://docs.google.com/document/d/1ny8dB9N_jlt9cGCkNXlN5GpjTkOePUKvi-lnON2jBdA/edit#bookmark=id.nzrf04qngt3n) の末尾に自分の名前をローテートする。
1. 次のシフトのための新しい Issue を作成し、リストの次のチームメンバーにアサインします。Issue のタイトルは `Distribution DRI rotation week of <starting date>` である必要があります。説明を記入するために `Distribution-DRI` テンプレートを使用してください。
1. ハンドオフ時点でまだアクティブなリクエストについては、DRI は最善の判断を使用して以下の 1 つまたは複数のオプションを検討すべきです:
    * 文書化された軽減策でリクエストをクローズし、フォローアップ Issue を開く。
    * リクエストを翌週の DRI に引き渡すコメントを追加する。
    * 引き続き SME として行動するが、ナレッジを共有するための明確なドキュメントを含めた次の DRI へのハンドオフが強く推奨される。
    * 同期的な会話で次の DRI に情報を伝える。

### その他のチームメンバー

DRI 担当でない場合、リクエストが [Stuff that should Just Work](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&search=Stuff+that+should+Just+Work) でなければ、以下を考慮してください:

1. [アクティブなインシデント](/handbook/engineering/infrastructure-platforms/incident-management/) と [デプロイブロッカー](/handbook/engineering/deployments-and-releases/deployments/#deployment-blockers) リクエストを、Distribution DRI の通常業務時間中にそのチームメンバーに転送するか、最初に利用可能なチームメンバーがリクエストを引き受ける
1. Slack DM を [#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE) チャンネルに転送する
1. GitLab の直接メンションを `@gitlab-org/distribution` グループに転送する
1. その他のリクエストを [Distribution との連携方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#how-to-work-with-distribution) に転送する

## イテレーション

イテレーションを使用してスコープをより良くコントロールし、各リリースで測定可能な価値を提供します。タイムボックス測定プロセスにより、期待される進捗が達成されない場合に従うべき手順が確保されます。

* プロジェクトが定義された MVC/Issue 内の成功基準を達成せずに 2 つ以上のマイルストーンを超える場合は、詳細な評価/振り返りを実施すべきです。
* プロジェクトが 3 つのマイルストーンで成功基準を満たさない場合は、セクションリーダーと共により大きな評価を実施すべきです。

目標はスコープクリープを検出し、測定可能な価値を提供する形でイテレーションしていることを確認し、必要に応じて早期に対処するサーキットブレーカーを確立することです。

## Distribution 依存関係メンテナンスポリシー

Distribution チームは私たちの [技術ビジョン](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#vision) を達成するために、以下の依存関係メンテナンスポリシーに従います。

Distribution は、別途指定がない限り、Distribution が管理する依存関係の新しいリリースへのサポートを、元のリリースから 3 〜 5 マイルストーン以内に追加することを目指しています。

## Kubernetes リリースサポートポリシー

Distribution チームは Kubernetes リリースのサポートに [kubernetes リリースサポートポリシー](k8s-release-support-policy.md) に従います。

Distribution は Kubernetes の新しいリリースから 3 ヶ月以内にサポートを追加することを目指しています。

### OS

GitLab がサポートするすべてのオペレーティングシステムとその EOL ポリシーは [サポートされている OS ドキュメントページ](https://docs.gitlab.com/ee/administration/package_information/supported_os.html) と [インストールページ](https://about.gitlab.com/install/) にリストされています。

新しい OS リリースについては、Distribution チームは以下のタイムラインで Linux パッケージのサポートを提供することを目指しています:

| OS | サポート予定時期 |
| ------ | ------ |
| Ubuntu LTS リリース | OS リリース日から 2 マイルストーン以内 |
| RHEL（& RHEL クローン）メジャーおよびマイナーリリース | OS リリース日から 3 マイルストーン以内 |
| Debian LTS およびマイナーリリース | OS リリース日から 3 マイルストーン以内 |
| その他すべてのマイナーリリース | OS リリース日から 3 マイルストーン以内 |
| その他すべてのメジャーリリース | OS リリース日から 4 マイルストーン以内 |

## 採用面接

Distribution チームのポジションの面接実施に関する情報は [`hiring-process`](https://gitlab.com/gitlab-com/people-group/hiring-processes/-/tree/master/Engineering/Infrastructure/CorePlatforms/Distribution) プロジェクトを参照してください。
