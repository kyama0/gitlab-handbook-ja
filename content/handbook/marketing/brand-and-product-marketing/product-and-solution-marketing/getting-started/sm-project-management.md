---
title: "Product and Solution Marketing プロジェクトマネジメント概要"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/
upstream_sha: ce0ccdac3443c7d547631da8cba8f3148892a0c3
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-07T16:47:36-08:00"
---

### プロジェクトマネジメント概要

Product and Solution Marketing では、チームの作業を管理するためにいくつかのプロセスがあります。

1. [コミットメント管理](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#commitment-management) - 何にコミットしているかをどう把握するか
1. [エピック（大きなプロジェクト）](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#epics-and-milestones---planning-and-tracking-our-work) - 大きなプロジェクトをどう計画するか
1. [進捗のモニタリングと報告](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#metrics-and-kpis-gitlab-insights) - 進捗をどう追跡するか
1. [ラベルの利用と清潔に保つこと](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#labels-and-label-hygiene) - ラベルをどう保つか
1. [優先度](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#priority-and-prioritization) - 最も重要なものをどう示すか
1. [ワークフロー管理](#example-of-managing-our-workflow) - ワークフローをどう管理するか

### コミットメント管理

私たちは社内のさまざまな複数の取り組みについて作業を依頼・要請されます。たとえば、

- イベントには、ブースのメッセージングが必要
- キャンペーンには、ポジショニング/メッセージングと、ゲート付きホワイトペーパーが必要なことがある
- キャンペーンには、顧客事例が必要
- チームがアナリストへの問い合わせを求める

いずれの場合も、他のワークストリームを支援するためのコミットメントをどう管理・追跡するかが、現実の課題になります。

私たちは、**リクエスト** を一貫して捕捉し、**コミットメント** を管理するために、次のワークフロー / プロセスを確立しました。

**結論:**  もしコミットメントを捕捉する SM_Request Issue がなければ、そのコミットメントは見えず、本当の意味で「コミットメント」とは言えません。

#### SM Request プロセス

**プロセスはシンプルです:**

![SM Request Flow](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/SM_Request_FLow_V5.png)

プロセスの簡単な概要は次のとおりです。
<iframe width="560" height="315" src="https://www.youtube.com/embed/cuIHNintg1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

プロセスはシンプルです:

1. 誰でも **[SM Support Request Issue を開く](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request)** ことができます。このリンクは *A-SM-Support-Request* テンプレートを使います。

1. Product and Solution Marketing リーダーシップチームは、リクエストを（毎日）レビューし、最適な SM チームに割り当て、作業の優先度を決めて、リクエストの支援方法を計画します。

![sm_reqest board](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-request-board.png)

#### SM Request プロセスフロー

**Strategic marketing リクエストのレビュー＆アサインメントフロー**（注: ラベル `sm_request` は、Product and Solution Marketing の支援を求めるリクエストを示します）

1. **新規リクエスト** はラベル `sm_req::new_request` で始まります。
新規リクエストは、通常、チームとチームメンバーに割り当てられるか、Strategic marketing バックログに置かれます。
   1. **バックログ** `sm_req::backlog` 将来のスケジューリング、シーケンシング、実装のために。 *注: 追跡のために Issue を SM_Backlog マイルストーンに追加します。* **注意: バックログにある Issue は、まだ実施をコミットしたものではありません！**
   1. **アサイン済み** `sm_req::assigned` チームメンバーに割り当てられます。Issue がアサインされると、進行中のすべての作業のステータスを追跡できるよう、四半期 **マイルストーン** に追加されます。**注意: アサイン済み Issue は実施をコミットしたものとみなされます！**
      1. **アサイン済み-キュー** `sm_req::assigned::Queue` 個々のチームメンバーの個人バックログ / キューにある Issue です。彼らは作業フローを管理しており、これらの Issue は **彼らのキューにあり**、スプリント / マイルストーンに追加してから提供する予定です。
      1. **アサイン済み-進行中** `sm_req::assigned::InProgress` チームメンバーが **積極的に作業中** の Issue です。これらは特定の **マイルストーン** にあるべきです。
      1. **アサイン済み-待ち** `sm_req::assigned::Waiting` これらの Issue は進行中ですが、進めるために他の貢献を **待ってブロックされて** います。（外部の承認、デザイン、ドラフト、エンジニアリングなどを待っているなど。）これらの Issue は通常 **マイルストーン** にあるべきで、ブロッカーが解消されない場合、次の **マイルストーン** に移されるのが普通です。
   1. **完了** したら、チームメンバーは Issue を `sm_req::completed` に更新し、Issue を **クローズ** します。
1. 例外。Issue が完了していなくてもクローズすべきケースがいくつかあります。
   1. *transferred* `sm_req::transferred` 別のチーム（Field Marketing、Sales、Ops など）に属するリクエスト用。Issue が転送されたら **クローズ** します。
   1. *declined* `sm_req::declined` - Issue がバックログにあり、もはや関連性がないか意味をなさない場合。*declined* したら Issue を **クローズ** します。
   1. *canceled* `sm_req::canceled` - Issue がバックログにあり、もはや関連性がないか意味をなさない場合。*declined* したら Issue を **クローズ** します。

1. **Triage スタンドアップ**。15 分のスタンドアップで、リーダーシップチームが **新規リクエスト** をレビューし、最適なチームに割り振ります。そこからチームリードはバックログに移動するか、即時作業のためにアサインします。

#### リクエストプロセスの管理

GitLab では作業を可視化・管理するいくつかの方法を提供しています。

1. [SM Request Board](https://gitlab.com/gitlab-com/marketing/product-marketing/-/boards/1237365?&label_name[]=sm_request) では、ラベルでグループ化したリクエストの追跡ステータスを可視化できます。いくつか制限があります。スクロールが多い、ソートできない、ドラッグ時のアクションは1つだけ、などです。なので、これらの異なるビューのほうが便利かもしれません。
1. **List Views**: 共通のステータスにある複数の Issue を表示でき、ソート、フィルタ、複数の Issue への一括更新が1ステップでできます。右上の **Edit Issue** ボタンを参照してください。
   1. [Strategic NEW REQUEST List View](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Anew_request) このビューでは、Product and Solution Marketing 全体の **新規リクエスト** を1つのリストで確認できます。
   1. [Product and Solution Marketing TRIAGE view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Atriage) このビューはトリアージ済みのすべての Issue です。
   1. [Product and Solution Marketing ASSIGNED view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Aassigned) アサイン済みのすべての Issue のビュー。
   1. [Product and Solution Marketing Backlog view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Abacklog)
   1. [Assigned and PMM view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Aassigned&label_name[]=pmm) PMM チームの現在アサインされているすべての Issue を表示するビュー。
1. **マイルストーン**: マイルストーンは、時間軸に沿った Issue の完了を追跡できる機能です。マイルストーンを使うと、特定のラベルや Issue のアサイン先に基づいて関連する Issue を簡単に確認できます。現在 GitLab は Issue ごとに1つのマイルストーンしか割り当てられませんが、この制限は GitLab の 12.7 リリースで変更される予定です。Product and Solution Marketing では、ステータスを可視化するために2つの異なるマイルストーンを使っています。
   1. [現在の四半期の作業（進行中）](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/4) - これは、私たちが取り組んでいるものとチーム全体のクローズに向けた進捗を見るための **メインビュー** です。四半期末には、次の四半期用の新しいマイルストーンを作成し、未完了の Issue を新しいマイルストーンに移します。（さらに、前のマイルストーンからのものとしてラベル付けする可能性もあります。）
   1. [Product and Solution Marketing バックログ](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/5) - 現在のバックログのビューで、ラベル（優先度、チーム、ユースケースなど）に基づいて関連する Issue グループにナビゲートしやすくなっています。
1. [**クイックアクション**](https://gitlab.com/help/user/project/quick_actions): - クイックアクションは、Issue のコメントに入力できるコマンドで、Issue のステータスを素早く更新できます。クイックアクションでは次のことができます。

- ラベルの追加・削除
- 個人への Issue のアサイン・解除
- マイルストーンへの追加・削除
- Issue のオープン・クローズ

クイックアクションは、Issue を開いたまま複数の変更を行いたいときに **非常に、非常に** 便利で効率的です。Product and Solution Marketing 向けの便利なクイックアクションをいくつか紹介します。

|  **手順 / アクション** |  **クイックアクションコード** |
|-----|------|
| **PMM チーム** に **トリアージ** |  `/Label ~"sm_req::triage" ~pmm`  |
| **Tech PMM チーム** に **トリアージ**  | `/Label ~"sm_req::triage" ~tech_pmm`  |
| **Partner Marketing チーム** に **トリアージ** |  `/Label ~"sm_req::triage" ~"Partner Marketing"` |
| **Competitive Intel チーム** に **トリアージ** |  `/Label ~"sm_req::triage"  ~"Competitive Intelligence"` |
| **Market Research/Customer Ref チーム** に **トリアージ** |  `/Label ~"sm_req::triage" ~mrci` |
| **バックログに移動** |  `/Label ~"sm_req::backlog"` <br> `/Milestone %"SM - Backlog"` |
| **チームメンバーへのアサイン** |  `/Label ~"sm_req::assigned" ~"status::wip"` <br> `/Milestone %Q4FY20` <br> `/Assign @<TeamMember>`|
| **Issue の完了** |  `/Label ~"sm_req::completed"` <br> `/close` |

#### SM Request インサイト

 私たちは GitLab Insights を活用してプロセスがどう機能しているかをモニタリングし、学び、時間とともに改善するために積極的に取り組んでいます。

- SM Request 全体 - プロセス全体

![SM Request Overall](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-overall.png)

![SM Request Overall-by team](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-overall-by-team.png)

![SM Request Assigned-by team](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-assigned-by-team.png)

[GitLab Product and Solution Marketing PMM Insights](https://gitlab.com/gitlab-com/marketing/product-marketing/insights/#/smCharts)

### エピックとマイルストーン - 作業の計画と追跡

#### 通常業務

- 'アサイン済み' 業務の進捗を四半期ごとに追跡するためのマイルストーン

たとえば、ある四半期の通常業務をすべて可視化するために、その四半期内のすべての作業を可視化・サマライズできる「四半期マイルストーン」を持っています。これは、通常業務でマイルストーンをどう活用するのが最適かを決めるための実験です。近い将来（12.10 または 13.0）、GitLab は1つの Issue に **複数の** マイルストーンをアサインすることをサポートし、本物の「スプリント」管理など他のトピックを GitLab のマイルストーン機能で可能にしてくれます。（今日は Issue ごとに1マイルストーンの制限があります）

通常業務にマイルストーンを最初に適用したのは [Q4-FY20](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/4) で、新しい作業が流入する一方、他の作業が完了してクローズされるパターンを確認しました。

![SM Q4FY20 Milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-q4fy20-milestone.png)

[Q1-FY21](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/6) では、通常業務の追跡にマイルストーンを使い続けており、私たちのパターンとフローを学ぶにつれて、ベロシティとフローを向上させられると考えています。

4 月 13 日時点:

- 合計 332 件の Issue
- 173 件オープン
- 159 件クローズ

![SM Q1FY21 Milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-q1fy21-milestone.png)

#### 複雑なプロジェクト

大きく複雑なプロジェクトがある場合、私たちは次のようにして作業を管理します。

- **エピック** - 相互に関連するワークストリームを持つ主要な取り組みを定義
- **サブエピック** - 主要な取り組みのさまざまな構成要素のためのサブワークストリーム
- **Issue** - 具体的な成果物 / アウトプット
- **マイルストーン** - 成果物の完了を追跡する時間枠を定義

たとえば、ユースケースのためのメッセージング、デモ、比較、事例、証跡を構築する UseCase GTM プロジェクトです。ここでは、特定のユースケースのエピックがサブエピックに分解され、それから Issue が作成されて正しいエピックに関連付けられます。

- 全体エピック - [UseCase GTM Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/654)
- 各ユースケースのチャイルドエピック。たとえば:
  - [SCM UseCase Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/655)
  - [CI UseCase Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/661)
- そして、関連する成果物が見えるように、各エピックを月単位に分解しました。
  - [SCM Month 1 Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/665)

![epic](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/epic.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/D74xKFNw8vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

UseCase GTM の作業を月単位で整理し、Issue / 成果物の完了を追跡するのに役立つ月次「スプリント」/マイルストーンがあります。

たとえばこの「マイルストーン」は、4 月のすべてのユースケース業務のサマリーを示しています。

![milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/milestone.png)

現在の [UseCase 2020-3](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/13) マイルストーンへのリンクはこちらです。

### ワークフロー - リファイン、スプリント、レトロスペクティブ

Product and Solution Marketing チームは、各スプリントの終わりに最大の価値増分を生むために、作業項目（Issue）のスコーピングと重み付けを行いながら、2 週間スプリントモデルを使っています。私たちのプロセスは多くの面で Scrum と似ていますが、[Scrum Events](https://www.scrumalliance.org/about-scrum) を別個のセレモニーとしては実施せず、既存のミーティングワークフローに組み込んでいます。

私たちは [Product Marketing - Overview Issue Board](https://gitlab.com/gitlab-com/marketing/product-marketing/-/boards/1074672) で計画・管理・追跡を行います。

継続的に、各 DRI が Product Marketing バックログで自分が DRI として割り当てられているすべてのアクティブな項目のステータスを更新します。1つのスプリントの終了前に、彼らは次のスプリントに最も適切な項目を見積もり（[スプリントプランニング](https://www.agilealliance.org/glossary/sprint-planning/)）、毎週の 1:1 ミーティングでマネージャーとこのスプリントバックログを確認します。

#### リファイン

将来の作業を計画するには、リクエストが a) 明確で曖昧でないこと、b) その Issue の「Done」が明確に定義されていること、c) Issue / 作業に制約がないこと、d) リクエストが 2 週間スプリント内で完了できることを保証することが重要です。これらの問いに対処されたら、Issue は「リファイン済み」となります。

#### リファインメントステータス

**リファイン** されていない（DRI、明確さ、完了可能、制約なし、達成可能、優先度付け済み）Issue は **「unrefined」** で始まります。

- refine::unrefined   - Issue は作業の準備ができていません
- refine::refined     - Issue は準備完了です

#### リファインメント基準

最初のステップは、[DRI](/handbook/people-group/directly-responsible-individuals) を特定することです。DRI は、その Issue について残りのチェックボックスを確認することを担当します。

```yml

#### Refinement

- [ ] **DRI**: Has a DRI been identified and do they accept responsibility?
- [ ] **Clear**: Are the expectations and work required unambiguous and clearly defined?
- [ ] **Completable**: Is there a clearly-stated definition of done?
- [ ] **Unconstrained**: Is the work free of blockers and dependencies? *If not, address blockers first or leave in Product Backlog until blockers are removed.*
- [ ] **Achievable**: Is the issue something that can be completed within a 2-week timebox? *If not, decompose it.*

set the refined label
```

#### 優先度付け

主要なステークホルダーからのインプットに基づいて、機能の価値が評価されているか？

**優先度**

- priority::1
- priority::2
- priority::3

Issue が **'defined'** とラベル付けされ、**'priority'** がアサインされたら、スプリントへの組み入れの準備が整います。

#### スプリント

2 週間スプリントの目標は、スプリントで何を完了できるかに合意し、提供にコミットすることです。目標は、新しい作業の進行中追加を制限し、スプリントでコミットされたスコープの提供に集中することです。緊急で予期しない事態は起きるので、短時間の通知に対応する柔軟性とチームの能力を常に持つ必要があります。しかし、一般的なパターンとしては、すべての作業が完了しない限り、スプリントにスコープを追加しないようにします。

ステータスに対する洞察と明確さを提供するために、優先度の高い Issue については [Issue/Epic ヘルスステータス](https://docs.gitlab.com/ee/user/project/issues/index.html#health-status) を活用します。

スプリントの開始時、DRI は合意した優先度の高い Issue に「On Track」ステータスをアサインします。作業が進むにつれ、誰か作業に貢献している人は誰でも、リスクや懸念を可能な限り早く明らかにし、Issue を「On Track」に戻すコラボレーションを起動するために、適宜ヘルスステータスを更新する必要があります。

#### レトロスペクティブ

各スプリントの後、チームは何が機能し、何が機能しなかったか、どう改善するかを振り返り、文書化する必要があります。
非同期で、私たちは [このレトロスペクティブドキュメント](https://docs.google.com/document/d/1oEJlMfygihEnyKeE7qit2ABMCALknVlPOZItONgrhfU/edit#) で学びを文書化し改善します。

### メトリクスと KPI（GitLab Insights） {#metrics-and-kpis-gitlab-insights}

私たちは [GitLab Insights](https://docs.gitlab.com/ee/user/project/insights/) の活用方法を実験しています。

たとえば、Product Marketing での1つの実験は、特定のアウトプット / ドメインに基づいて作業をタグ付けすることです。私たちは [スコープ付きラベル「pmm::xyz」](https://gitlab.com/gitlab-com/marketing/product-marketing/-/labels?utf8=%E2%9C%93&subscribed=&search=pmm%3A%3A) を使って、アウトプットと目的の種類で Issue にタグ付けしています。

- `pmm::AR`                    Analyst Relations（ブリーフィング、問い合わせ、リサーチ）
- `pmm::collateral`            ホワイトペーパー、データシートなどの資料の開発
- `pmm::Deck`                  スライドとプレゼンテーションの開発
- `pmm::Enable`                イネーブルメントの開発と提供（主に現場向け）
- `pmm::Events`                イベント（オンラインおよび対面）でのコンテンツの開発と提供
- `pmm::messaging`             ポジショニングとメッセージングの開発
- `pmm::PR`                    プレスとメディアへのブリーフィングと更新
- `pmm::Research`              市場調査の計画と実施
- `pmm::Sales`                 顧客とのセールスの直接サポート
- `pmm::Web`                   ウェブページ用コンテンツの開発（ブログ、ウェブページなど）
- `pmm::other`                 上記に当てはまらないその他の作業

- GitLab triage Bot を使って、別のスコープ付きラベルセット「pmM::External」または「pmM::Internal」に作業を自動的にアサインできます。「External」は見込み顧客や顧客とのエンゲージメント、パイプラインの構築・加速に直接関係することを意味し、「Internal」は間接的に成長と改善に役立つことを意味します。

これにより、私たちは作業を追跡し、バランスとフォーカスを改善できます。

### PMM インサイト - （内部 vs 外部）

![pmm insights Internal vs External](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-IvE.png)

### PMM インサイト（外部詳細）

![pmm insights External Details](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-external-details.png)

### PMM インサイト（詳細）

![pmm insights Details](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-details.png)

[GitLab Product and Solution Marketing PMM Insights](https://gitlab.com/gitlab-com/marketing/product-marketing/insights/#/pmmCharts)

<iframe width="560" height="315" src="https://www.youtube.com/embed/OMTfPsLa98I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### ラベルとラベル衛生

私たちは、ラベルと Issue 衛生のための明確なポリシーを確立する手段として、GitLab Triage Bot を採用しました。これにより、プロセスの *ルール* と *ポリシー* のセットを作成し、Issue に自動的に適用できます。これにより、Issue が期待されるラベルとともに期待される状態に保たれるのを支援します。

[GitLab Triage Bot](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/105) のセットアップと使い方のサマリーをご覧ください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tp79e5sgpao?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 優先度と優先度付け

現時点で、Product and Solution Marketing には3つの「優先度」ラベルがあります。これらはどちらも `スコープ付き` ラベルなので（同時に `priority::1` と `priority::2` を持てません）、また「Priority」として定義されているため、アサインされた Issue がソートされます。

1. `priority::1`
1. `priority::2`
1. `priority::3`

時間とともに、これらのラベルをチーム内で優先度を一貫して伝えるためにどう使うかについてのガイドラインを確立していきます。

### ワークフロー管理の例 {#example-of-managing-our-workflow}

チームの一部は **GitLab Issue Board** を使ってワークフローを管理しています。Issue ボードと、`Open`、`To-Do`、`Doing`、`Waiting`、`Closed` などのスコープ付きラベルを使うと、自分にアサインされた Issue を視覚的に表現できます。

1. ラベル `Closed`: すでに完了してクローズされた Issue
1. ラベル `Waiting`: 他のチームからの入力を待っている Issue
1. ラベル `Doing`: 現在積極的に取り組んでいる Issue
1. ラベル `To-Do`: 次に取り組む Issue
1. ラベル `Open`: バックログにある Issue

![pmm Issue Board](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-issue-board.png)

進捗に応じて Issue をこれらのステージ間で移動し、ステージ内では作業の優先度に応じて並べ替えます。これによりチームメンバーは自分にアサインされた Issue をよりよく管理でき、マネージャーも非同期で何が進行中で何がブロックされているかのビューを得られます。
