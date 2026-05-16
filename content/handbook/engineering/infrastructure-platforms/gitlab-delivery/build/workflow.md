---
title: "DistributionチームのワークフローHandbook"
description: "Omnibus、Helmおよびその他のエンジニアリングプロジェクトにおいて、Distributionエンジニアがどのように作業を行うかの概要。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/workflow/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2026-02-24T11:52:02+00:00"
---

## 共通リンク

* [エンジニアリングチームワークフロー](/handbook/engineering/workflow/)

## まとめ

Distributionチームメンバーには以下が期待されます：

* コミュニティや他のチームとのやり取りで親切であること
* プロジェクトの赤いmainブランチの修正を最優先にすること
* プロジェクトのスケジュールキューから作業項目を選ぶこと
* 統合テストでカバーされていない変更のテスト計画を定義すること
* [エンジニアリングメトリクス](/handbook/product/groups/product-analysis/engineering/dashboards/)を追跡するためにIssueとマージリクエストにラベルを付けること

## グループ

Distributionチームは2つのグループで構成されています：Distribution:BuildとDistribution:Deployです。

### Distribution Buildのタスク

* すべてのDistributionプロジェクトのすべてのチームパイプラインを維持する
* 新しいクラウド、プラットフォーム、アーキテクチャ、コンポーネントのサポートに関するリサーチ
* アクセス制御、権限、CVEパッチ
* チームインフラ/リソース管理
* 依存関係の更新
* ライセンス管理
* バリデーション/認定のためのパートナーへの提出

### Distribution Deployのタスク

* 初期インストールとコンポーザビリティ
* アップグレード/ダウングレード
* デプロイメントのスケーリング
* プラットフォームまたはプロバイダー間の移行
* データライフサイクル管理
* セキュアな設定とコミュニケーション
* 既存ツールとの統合のためのクラウドとプラットフォームのリサーチ

## 作業の優先順位付け

現在[Distribution DRI](#distribution-dri)として機能していないDistributionチームメンバーが完了すべき作業の優先順位は以下のとおりです：

| 優先度レベル | 作業項目 |
| -|- |
| 1 | レビュー中の`~priority::1`マージリクエストのブロックを解除する |
| 1 | `~priority::1`の[レビュー準備完了マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を引き受ける |
| 1 | 進行中の`~priority::1`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)に取り組む |
| 1 | 利用可能な`~priority::1`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)を引き受ける |
| 2 | 残りのレビュー中のマージリクエストのブロックを解除する |
| 3 | 進行中の`~priority::2`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)に取り組む |
| 3 | [SLO違反](merge_requests.md#service-level-objective)[レビュー準備完了マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を引き受ける |
| 4 | [SLO違反が近い](merge_requests.md#service-level-objective)[レビュー準備完了マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を引き受ける |
| 5 | 利用可能な`~priority::2`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)を引き受ける |
| 6 | 進行中の`~priority::3`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)に取り組む |
| 6 | 利用可能な`~priority::3`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)を引き受ける |
| 6 | [SLO非違反](merge_requests.md#service-level-objective)[レビュー準備完了マージリクエスト](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/)を引き受ける |
| 7 | 進行中の`~priority::4`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)に取り組む |
| 7 | 利用可能な`~priority::4`[Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming)を引き受ける |

毎日何をするかを決めるための一般的なガイドとしてこの優先順位の概要を使用してください。このリストはチームマネージャーが設定したチームの全体的な優先事項と目標に向けて作業を向けるのに役立ちます。

## ワークフローサマリー

Distributionグループは原則として[GitLab製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)とラベルを使用しますが、作業の性質上、以下のフェーズは通常スキップします：

* [バリデーションフェーズ4: デザイン](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-4-design)
* [バリデーションフェーズ5: ソリューションバリデーション](/handbook/product-development/how-we-work/product-development-flow/#validation-phase-5-solution-validation)

### 計画プロセス

すべての計画ダッシュボードは`#g_distribution`の`Issue dashboards`フォルダーにブックマークされています。

#### 四半期計画

四半期の3ヶ月目に：

1. **PM & EM & スタッフエンジニア**: 1週目までに、次の四半期のOKRsを下書きします。
1. **OKR DRI**: 2週目から、OKRを引き受けて他のチームメンバーまたはステークホルダーとスコープを開始します。
1. **全エンジニア**: 2週目から、自分が興味を持つOKRスコープに貢献し始めます。
1. **EM**: 2週目末までに、スコープの現状に基づいて計画日の確保が必要かどうかを判断します。
1. **全員**: 月末までに、OKRsとそのスコープを確定します。

#### マイルストーン計画

[現在のマイルストーン](https://gitlab.com/groups/gitlab-org/-/milestones/)の末に、すべてのエンジニアは
アサインされたIssueを更新し、未完了のものをレビューのために次のマイルストーンにロールオーバーすることが
期待されます。

エンジニアリングマネージャーとプロダクトマネージャーは、Distributionチームの直接の責任である
作業のスケジューリングに責任があります。

未アサインのIssueは誰でも取り組むことができます。特定のタスクに取り組む意欲を示すには、
Issueにコメントを残します。コメントには作業を開始する*日付*を含める必要があります。
コメントに日付が含まれていない場合、または日付が過ぎた場合は、そのアイテムを誰でも
引き受けることができます。

##### 現在のマイルストーンへの`Unplanned`作業の追加

緊急の対応が必要だが当初計画されていなかった作業が発生することがあります。誰でも合理的なものを
引き受けて作業できます。典型的なワークフローは以下のとおりです：

1. ベストジャッジメントで作業の緊急性を評価します。緊急性は通常、アクティブなインシデント、
   内外のお客様への影響、SLAとポリシー、Deadlineによって判断できます。
1. 合理的なリクエストであれば、`Unplanned`とその他の必要なラベルをアサインし、
   [作業の優先順位付け](#work-prioritization)に従って作業します。
1. そうでない場合は、リクエスターに理由を説明し、可能な代替案を提供し、
   必要に応じてEM&PMにエスカレーションします。
1. 不明な場合は、リクエスターに明確化を求め、必要に応じてEM&PMにアドバイスを求めます。

#### バックログのレビュー

**更新予定**

### 必須ラベル

[GitLab製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)ラベルに加えて、Epic、Issue、マージリクエスト（アイテム）にいつでも適用される
いくつかの追加の**必須**ラベルがあります：

* `group::distribution` - Distributionチームに固有の、またはDistributionチームが作成したアイテム。[スコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)であり、さらなるガイダンスが出るまでDistributionサブグループのすべてのアイテムに適用されます。
* `group::distribution::*` - Distributionサブグループの1つに固有の、またはそのサブグループが作成したアイテム。これらは[ネストされたスコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#nested-scopes)であり、相互排他的ですが、`group::distribution`スコープラベルと共に使用できます。
  * `group::distribution::build` - [build](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributionbuild-charter)グループに固有の、またはそのグループが作成したアイテム。
  * `group::distribution::deploy` - [deployment](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributiondeploy-charter)グループに固有の、またはそのグループが作成したアイテム。
* `FY(2桁の年)::*` (1-4) - 四半期内のリリースを目標とする努力を示す[スコープラベル](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels)。例：`FY24::Q2`。

特定のシナリオ下で追加される追加の**必須**ラベルもあります：

* `Unplanned` - 現在のマイルストーンで当初計画されていなかった緊急リクエスト。これらのアイテムへの
  作業は通常イベント駆動です。別のチームがサポートを必要としている、ユーザーに影響する回帰、
  またはチームの非効率を引き起こしている技術的負債などです。
* `spike` - 主にオプションを理解し、将来の成果物を分解するためのリサーチを含むIssue。[スパイク](/handbook/product/product-processes/#spikes)は、出力が追加のIssueと直列/並列作業の順序を定義する新しいEpicの最初のIssueであることがよくあります。

上記のラベルに加えて、[マージリクエストレビュー中に使用されるワークフローラベル](merge_requests.html#workflow)と[Issueトリアージ中に使用されるラベル](triage.html#label-glossary)も参照してください。

### 優先度の定義

**更新予定**

## Distribution DRI

チームメンバーの中断とコンテキストの切り替えを最小化するために、Distributionは週ごとのローテーションで1人のエンジニアをDRI（直接責任者）に指定し、通常の勤務時間中に以下の業務を担当します。それらの時間外の緊急リクエストは、[オンコールプロセス](/handbook/engineering/on-call/)で処理されます。

### 期待されること

DRIはリクエストの解決に単独で責任を持つわけではありません。適切な専門家（SME）を参加させ、必要に応じてエンジニアリングマネージャーおよび/またはプロダクトマネージャーにエスカレーションします。また、DRIが週中に同じ量の`Deliverable`作業を完了できるとは期待されません。特定の専門知識が必要なエスカレーションについては、[Tier 2 On-Callプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/)を参照してください。

### 職務

Distribution DRIはリストの順序に従って以下のエリアに取り組みます。

#### 週中

1. プロダクションからエスカレーションされたインシデントをサポートする。
1. [お客様リクエストをサポートする](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#engaging-distribution-for-expertise-in-support)
    * [BuildとOperateのサポートヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues)
1. [#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE) Slackチャンネルの質問に回答またはリダイレクトする。
1. [Issueトリアージを実施する](triage.md)。
1. GitLabでの`@gitlab-org/distribution`グループメンションに対応する。
1. **オプション:** 現在のマイルストーンのデリバラブルまたはその他のDistribution関連タスクに取り組む。

#### ハンドオーバー

1. アサインされたDRI Issueをクローズする。
1. [シフトアサインリスト](https://docs.google.com/document/d/1ny8dB9N_jlt9cGCkNXlN5GpjTkOePUKvi-lnON2jBdA/edit#bookmark=id.nzrf04qngt3n)の末尾に自分の名前をローテーションする。
1. リストの次のチームメンバーのために新しいIssueを作成してアサインする。Issueタイトルは`Distribution DRI rotation week of <starting date>`とします。説明を入力するために`Distribution-DRI`テンプレートを使用してください。
1. ハンドオフ時にまだアクティブなリクエストについては、DRIはベストジャッジメントを使用して以下の1つまたは複数のオプションを検討します：
    * 文書化された緩和策でリクエストをクローズし、フォローアップIssueを作成する。
    * 翌週のDRIにリクエストを引き継ぐコメントを追加する。
    * SMEとして引き続き行動するが、知識を共有するための明確な文書と共に次のDRIへのハンドオフが強く推奨される。
    * 同期的な会話で次のDRIに情報を渡す。

### その他のチームメンバー

DRI担当でない場合は、リクエストが[Stuff that should Just Work](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&search=Stuff+that+should+Just+Work)でない限り、以下を考慮してください：

1. [アクティブなインシデント](/handbook/engineering/infrastructure-platforms/incident-management/)と[デプロイメントブロッカー](/handbook/engineering/deployments-and-releases/deployments/#deployment-blockers)のリクエストを、通常勤務時間内はDistribution DRIにリダイレクトするか、最初に利用可能なチームメンバーとしてリクエストを引き受ける
1. SlackのDMをチャンネル[#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE)にリダイレクトする
1. GitLabの直接メンションを`@gitlab-org/distribution`グループにリダイレクトする
1. その他のリクエストを[Distributionとの連携方法](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#how-to-work-with-distribution)にリダイレクトする

## イテレーション

イテレーションを使用してスコープをより良くコントロールし、各リリースで測定可能な価値を提供します。タイムボックス測定プロセスにより、期待される進捗が達成されない場合に従うべき手順が確保されます。

* プロジェクトが定義されたMVC/Issue内で成功基準を達成せずに2マイルストーン以上続く場合は、詳細な評価/回顧が実施されます。
* プロジェクトが成功基準を満たさずに3マイルストーン続く場合は、セクションリーダーとのより大きな評価が実施されます。

目標はスコープの拡大を検出し、測定可能な価値を提供する方法でイテレーションし、必要に応じて早期に対応するためのサーキットブレーカーを設置することです。

## Distributionの依存関係メンテナンスポリシー

Distributionチームは[テクノロジービジョン](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#vision)を達成するために以下の依存関係メンテナンスポリシーに従います。

Distributionは、特に指定がない限り、元のリリースから3〜5マイルストーン以内にDistributionが管理する依存関係の新しいリリースのサポートを追加することを目指します。

## Kubernetesリリースサポートポリシー

DistributionチームはKubernetesリリースのサポートに関して[Kubernetesリリースサポートポリシー](k8s-release-support-policy.md)に従います。

Distributionは、Kubernetesの新しいリリースから3ヶ月以内にサポートを追加することを目指します。

### OS

GitLabがサポートするすべてのオペレーティングシステムとそのEOLポリシーは、[サポートされているOSドキュメントページ](https://docs.gitlab.com/ee/administration/package_information/supported_os.html)と[インストールページ](https://about.gitlab.com/install/)に記載されています。

新しいOSリリースに対して、DistributionチームはLinuxパッケージサポートを以下のタイムラインで提供することを目指します：

| OS | サポート予定時期 |
| ------ | ------ |
| Ubuntu LTSリリース | OSリリース日から2マイルストーン以内 |
| RHEL（およびRHELクローン）のメジャーおよびマイナーリリース | OSリリース日から3マイルストーン以内 |
| Debian LTSおよびマイナーリリース | OSリリース日から3マイルストーン以内 |
| その他すべてのマイナーリリース | OSリリース日から3マイルストーン以内 |
| その他すべてのメジャーリリース | OSリリース日から4マイルストーン以内 |

## 採用面接

Distributionチームのポジションで面接を行うための情報については、[`hiring-process`](https://gitlab.com/gitlab-com/people-group/hiring-processes/-/tree/master/Engineering/Infrastructure/CorePlatforms/Distribution)プロジェクトを参照してください。
