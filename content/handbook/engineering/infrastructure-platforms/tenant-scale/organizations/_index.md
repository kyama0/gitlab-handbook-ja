---
title: Organizations Team
description: "Organizations チームについての情報"
upstream_path: /handbook/engineering/infrastructure-platforms/tenant-scale/organizations/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-11T10:03:08+08:00
translated_at: "2026-06-11T00:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
---

## 概要 {#about}

Organizations チームの主な焦点は、[Cells](/handbook/engineering/architecture/design-documents/cells/) の文脈におけるデータシャーディングと分離に必要な Organization エンティティを開発することです。チームはまた、私たちのプロダクト内のグループ、プロジェクト、ユーザープロフィールへのサポートも提供します。

### 連絡先 {#contact}

私たちに連絡するには、関連するプロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&first_page_size=100)）に Issue を作成し、`~"group::organizations"` ラベルとその他の適切なラベルを追加するのが最適です。

緊急の項目については、Slack チャンネル（社内）をお気軽にご利用ください: [#g_organizations](https://gitlab.slack.com/archives/g_organizations)。

### ビジョン {#vision}

チームは、新しいトップレベルエンティティとしての Organizations の実装を通じて、GitLab のためのよりスケーラブルで統一されたアーキテクチャの開発に取り組んでいます。

Organizations は、[セルラーアーキテクチャ](/handbook/engineering/architecture/design-documents/cells/) にわたる分散を可能にしつつ、セルフマネージドと SaaS の GitLab インスタンス間の機能ギャップを橋渡しする論理的なコンテナとして機能します。
新しい Organizations エンティティは、複数のトップレベルグループの傘として機能し、エンタープライズがグループをまたいでコンテンツを集約し、組織全体のロールを実装し、他の Organizations からコンテンツを分離できるようにします。

同時に、チームはいくつかの重要な課題に取り組むことで Groups と Projects の改善を目指しています。すなわち、多様なエンタープライズ構造に対応するためのより柔軟な階層の作成、グループ内のプロジェクトのネストに関する混乱の軽減、プロダクト全体での発見性の向上、削除・復旧プロセスの標準化、そしてアーカイブ機能と可視性の改善です。
これらの改善は、エンタープライズが自身のビジネス構造を表現し、権限を管理するための、より直感的で柔軟なシステムの実現に向けて集合的に作用します。

### ゴール {#goals}

Organizations グループのエグゼクティブサマリーのゴールには次のものが含まれます。

- GitLab.com のデイリーアクティブユーザーの成長をサポートする
- 特定のデータストアの問題が全ユーザーに影響することを許さない
- セルフマネージドのユースケースの複雑さを最小化または排除する

### リリースステージ {#release-stages}

Organizations は単一の機能ではなく、サーフェスエリアです。私たちはこれを、定義されたフィーチャーフラグのステージのセットを通じて、協調されたサーフェスとしてリリースします。作業が Experimental から Beta、Limited Availability、GA、Stable へとどう進むかについては [Release stages](release-stages.md) を参照してください。

### チームメンバー {#team-members}

以下の人々は Organizations グループの常任メンバーです。

{{% team-by-manager-slug manager="mandrewsgl" team="Organizations" %}}

### ステーブルカウンターパート {#stable-counterparts}

以下の他の機能チームのメンバーは、私たちのステーブルカウンターパートです。

{{% engineering/stable-counterparts manager="glopezfernandez" role="Tenant Scale|Principal Engineer, Data Stores|Senior Distinguished Engineer, Ops and Core Platform" %}}

### Organization ロールアウトカウンターパート {#organization-rollout-counterparts}

以下の人々は、私たちの Organizations のロールアウトをサポートしています。

{{< group-by-slugs atevans>}}

## プロジェクト {#projects}

私たちは、それぞれに [Directly Responsible Individual (DRI)](/handbook/people-group/directly-responsible-individuals/) を持つ、さまざまな大規模プロジェクトに取り組んでいます。
DRI の役割には、プロジェクトに必要な作業のスコープの定義を支援し、3 〜 6 ヶ月先を見据えて潜在的なブロックやリスクを特定する責任を持ちつつ、目標の明確化を確実にすることが含まれます。彼らの作業はその領域に限定されず、必要に応じて他の領域でも作業します。

**Groups & Projects**

| プロジェクト | DRI | チーム |
| ------ | --- | ---- |
| [State Management Iteration 4: Replace legacy state checks with new system](https://gitlab.com/groups/gitlab-org/-/work_items/17958) | Aakriti, Abdul | Shubham |
| [Migrate Explore > Projects to Vue](https://gitlab.com/groups/gitlab-org/-/epics/13786) | Peter | Shane |
| [Migrate Explore > Groups to vue_shared/components/groups_list](https://gitlab.com/groups/gitlab-org/-/epics/13791) | Peter | Shane |
| [Make project archival features compatible with group archival](https://gitlab.com/groups/gitlab-org/-/epics/19690) | Shubham, Abdul | Shane |
| [Standardize deletion experience](https://gitlab.com/groups/gitlab-org/-/work_items/18618) | Peter | |

**Organizations**

| プロジェクト | DRI | チーム |
| ------ | --- | ---- |
| [Create an Organization Administration Area](https://gitlab.com/groups/gitlab-org/-/epics/19424) | Drew | Peter, Jason |
| [Cohort A Transfer group to an Organization](https://gitlab.com/groups/gitlab-org/-/epics/19841) | Drew | Tim |
| [Enforce minimal Organization data isolation in Rails](https://gitlab.com/groups/gitlab-org/-/epics/19414) | TBD | Rutger, Alex |

プロジェクトは 1 つまたは複数のエピックで構成できます。
プロジェクトの一部である各エピックには、実装フェーズ中にエンジニアリングから DRI がアサインされます。
私たちはチームの [エピック進捗ダッシュボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/2071697?label_name%5B%5D=group%3A%3Aorganizations) で進捗を追跡しています。
エピックのステータスは、さまざまなチームメンバーによって次のように更新されます。

1. チームメンバーがプロジェクトのための新しいエピックを作成し、説明欄にエピックの目標とメリットを定義します。
1. デザインが必要な場合、プロダクトマネージャーはエピックを `workflow::ready for design` とマークします。テーブルマイグレーションやパーティショニングのようなバックエンドのみの項目には、このステップは不要です。
1. デザインが完了してエピックに追加されたら、必要に応じて、実装 Issue に分解するためにエピックを `workflow::refinement` とマークします。
1. 初期の実装 Issue がすべて定義されたら、エンジニアは `workflow::ready for development` ラベルを追加します。
1. 最初の Issue に着手するときに、エピックにエンジニアリングの DRI をアサインします。この時点で、DRI はエピックのステータスを `workflow::in dev` に変更します。
1. 開発フェーズが始まった後に作成された新しい Issue は、私たちの [バックログリファインメント](#backlog-refinement) プロセスを通じて対処されるべきです。
1. リファインメントが必要な Issue には、リファインメントスクリプトが拾えるように、近々のマイルストーンがアサインされていることを確認すべきです。
1. エピック内の最後のオープンな Issue がクローズされたら、そのエピックを weekly grand review でのレビュー対象としてフラグ立てすべきかどうかを検討します。立てるべきなら、次の grand review でエピックをクローズすべき旨を EM に伝えるコメントをエピックに追加します。立てないなら、エピックをクローズします。

## ミーティング {#meetings}

私たちはグローバルに分散したグループであり、ほとんどを非同期にコミュニケーションしますが、同期的なミーティングも持ちます。全員がそうしたミーティングに参加できる可能性は低いため、私たちはそれらを録画し、書面のサマリーを共有します（[アジェンダ](https://docs.google.com/document/d/1Z90O_U3mrUoRkmeb5ZqtoM351ASoRTnuFiuou4IMY_k/edit?tab=t.0#heading=h.cbjs5jlz67tt)）。

現在、以下の定期ミーティングがスケジュールされています。

### 毎週水曜 - Organizations チームシンク {#weekly-wednesday-organizations-team-sync}

プロダクトマネージャー（PM）は、チーム、エンジニアリングマネージャー（EM）、その他のステークホルダーからの入力をもとに、[プロダクト優先順位付けプロセス](/handbook/product/product-processes/#prioritization) に従って Issue のリストをまとめます。
イテレーションサイクルは月の第 2 金曜日まで続き、翌週の月曜日に新たに開始します。
各マイルストーンは、リリース予定の GitLab バージョンによって識別されます。

### マイルストーン計画 {#milestone-planning}

マイルストーンを開始する前に、グループは [計画 Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=Planning%20Issue) を使用して調整します。
私たちは次のプロセスに従います。

- PM がマイルストーンの目標を定義します。
- チームメンバーがマイルストーンに関連すると考える Issue についてコメントします。
- PM と EM が協力して、Issue の最終リストを決定します。
- チーム全体が、マイルストーン開始前にラインアップされた項目をレビューします。

### 何に取り組むか {#what-to-work-on}

取り組むべきことの主要なソースは [計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations&milestone_title=Started) であり、現在のサイクルに予定されているすべての Issue をリストします。
Issue に自分自身をアサインすることで、それに取り組んでいることを示します。

回答されていない質問や不明確な要件など、すぐに Issue に着手することを妨げるものがある場合は、調査結果と質問を Issue に記載する限り、その Issue をスキップできます。
これは、その Issue を次に拾うエンジニアの助けになります。

通常、Issue は人に直接アサインされません。ただし、ある人がその Issue に取り組むための最も明確な知識やコンテキストを持っている場合は例外です。
とはいえ、私たちはエンジニアが特定のプロジェクトやエピックにオーナーシップ感覚を持ち、会社により大きなインパクトを与えることを奨励しています。

### プロダクトソリューショニングワークフロー {#product-solutioning-workflow}

私たちは GitLab の [プロダクト開発ワークフロー](../../../../../../content/handbook/product-development/how-we-work/product-development-flow/_index.md) のガイドラインに従っています。現在のマイルストーンのすべての Issue のステータスの概要を把握するには、[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854) を確認してください。

プロセスは主に次のように進みます。

- `workflow::ready for design` は、Issue がデザイン作業を開始する準備ができていることを示します
- `workflow::design` は、デザイナーが Issue に積極的に取り組んでいることを示します
- `workflow::planning breakdown` は、デザインが完了し、実装のためのサブ Issue に分解する準備ができていることを示します。デザインプロセス中のコンテキストと決定を保持するため、可能な場合は、デザイン Issue をエピックにプロモートして再利用し、実装 Issue をそれに追加します。そうすることで、エピックをデザインの [SSOT](/teamops/shared-reality/#single-source-of-truth-ssot) として使用でき、すべての議論が一箇所に集まり、元のデザイン Issue と対応する実装 Issue との間に不整合が生じることがなくなります。
- `workflow::refinement` は、Issue がエンジニアリングによるリファインメントを必要とすることを示します。このステップでは、実装ガイドと weight を Issue に追加すべきです。
- `workflow::ready for development` は、項目がエンジニアリングによって取り組まれる準備ができていることを示します

### 開発ワークフロー {#development-workflow}

私たちは GitLab の [エンジニアリングワークフロー](/handbook/engineering/workflow/) のガイドラインに従っています。現在のマイルストーンのすべての Issue のステータスの概要を把握するには、[開発ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2594854) を確認してください。

自分にアサインされた Issue のオーナーとして、エンジニアは Issue 上のワークフローラベルを最新の状態に保つことが期待されます。エンジニアが Issue に取り組み始めるとき、開始点として `workflow::in dev` ラベルでマークし、[開発を通じて Issue を更新し続けます](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)。
Issue をクローズする前に、`workflow::complete` ラベルを追加することが重要です。これは、完了した項目が毎月のリリース投稿の Improvements and Bugs の概要に表示されるための要件の 1 つだからです。プロセスは主に次の図に従います。

``` mermaid
graph LR

  classDef workflowLabel fill:#428BCA,color:#fff;

  A(workflow::in dev):::workflowLabel
  B(workflow::in review):::workflowLabel
  C(workflow::verification):::workflowLabel
  F(workflow::complete):::workflowLabel

  A -- Push an MR --> B
  B -- Merged --> C
  C --> D{Works on production?}
  D -- YES --> F
  F --> CLOSE
  D -- NO --> E[New MR]
  E --> A
```

私たち自身の領域を超えてコードベースへの変更を伴う新しい MR を上げる際は、CODEOWNERS や類似の自動化がそれをトリガーしない場合でも、影響を受けるチームに積極的に連絡を取るべきです。

- たとえコードレビューではなく可視性のためだけであっても、私たちの変更について知らせるべき適切な人々を見つけるために追加の努力をすべきです。
- オーナーシップが不確かな場合（例えば CODEOWNERS や類似のものがオーナーを特定しない場合）、エンジニアはこれを明示的にフラグ立てし、関与できる DRI の特定を手伝ってもらうよう求めるべきです。
- 何かを誰が所有しているかが不明な場合は、次のアプローチを検討してください。
  - オープンなチームチャンネルで尋ねる
  - EM/PM をタグ付けして調査してもらう
  - コードベースの履歴をレビューして最近のコントリビューターを特定する
  - 関連するドキュメントでオーナーシップ情報を確認する

### エピックボード {#epic-boards}

私たちは進行中の取り組みを次のエピックボードで追跡しています。

- [Group::Organizations epic progress](https://gitlab.com/groups/gitlab-org/-/epic_boards/2071697?label_name%5B%5D=group%3A%3Aorganizations)

### Issue ボード {#issue-boards}

私たちは作業を次の Issue ボードで追跡しています。

- [Group::Organizations milestone prioritization](https://gitlab.com/groups/gitlab-org/-/boards/5548886?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations cross-functional prioritization](https://gitlab.com/groups/gitlab-org/-/boards/4424394?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations planning](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations validation](https://gitlab.com/groups/gitlab-org/-/boards/7487708?not[label_name][]=workflow%3A%3Ain%20dev&not[label_name][]=workflow%3A%3Ain%20review&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations development workflow](https://gitlab.com/groups/gitlab-org/-/boards/2594854?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations bugs](https://gitlab.com/groups/gitlab-org/-/boards/7487700?label_name[]=type%3A%3Abug&label_name[]=group%3A%3Aorganizations)
- [Group::Organizations release posts](https://gitlab.com/groups/gitlab-org/-/boards/7487687?label_name[]=group%3A%3Aorganizations&label_name[]=type%3A%3Afeature)
- [Group::Organizations milestones](https://gitlab.com/groups/gitlab-org/-/boards/5549104?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations team members](https://gitlab.com/groups/gitlab-org/-/boards/5549106?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations important](https://gitlab.com/groups/gitlab-org/-/boards/1438588?label_name[]=group%3A%3Aorganizations)
- [Group::Organizations community contributions](https://gitlab.com/groups/gitlab-org/-/boards/7487739?label_name[]=Community%20contribution&label_name[]=group%3A%3Aorganizations)
- [Groups and Projects sub-team development](https://gitlab.com/groups/gitlab-org/-/boards/11102006?label_name[]=Category%3AGroups%20%26%20Projects&label_name[]=group%3A%3Aorganizations&milestone_title=Started)

### 追跡ダッシュボード {#tracking-dashboards}

Issue ボードとエピックボードに加えて、私たちは次のような専用ダッシュボードでも主要な取り組みの進捗を追跡しています。

- [Schema migration](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/schema_migration)
- [Sharding key migration](https://cells-progress-tracker-gitlab-org-tenant-scale-g-f4ad96bf01d25f.gitlab.io/sharding_keys)

これらのダッシュボードは [Cells Progress Tracker](https://gitlab.com/gitlab-org/tenant-scale-group/cells-progress-tracker) プロジェクトの一部です。
チームはまた、他のチームが独自のエピックベースの追跡ダッシュボードを作成するために使用できる [Epic Dashboards](https://gitlab.com/gitlab-org/tenant-scale-group/epic-dashboard) をプロジェクトとして切り出しました。

### キャパシティプランニング {#capacity-planning}

私たちは、キャパシティプランニングのためにシンプルな Issue weighting システムを使用し、各マイルストーンで管理可能な量の作業を確保しています。私たちは、チームのスループットと、Time Off by Deel から得られる各エンジニアの近々の稼働可能状況の両方を、[Google Apps Script](https://script.google.com/home/projects/1cH4Hrv03Kf_dlqPyxPdoyxWcV_x2d2u2PKNnGP_YwNjGifjcD4c29GKJ/edit) を使用して考慮します。

weight は集計で使用することを意図しており、ある人にとって一定の時間がかかるものが、Issue に関する知識のレベルに応じて別の人にとっては異なる場合があります。私たちは正確であるよう努めるべきですが、それらは見積もりであることを理解すべきです。weight が正確でない場合や、Issue が当初予想されたよりも難しくなった場合は、weight を変更してください。weight が変更された理由を示すコメントを残し、EM と PM をタグ付けして、私たちがスコープをよりよく理解し、改善を続けられるようにしてください。

#### Weight {#weights}

Issue に weight を付けるには、次の重要な要因を考慮してください。

- 作業量: コードベースへの変更の予想される規模。
- 複雑さ:
  - 問題理解: 問題がどれだけよく理解されているか。
  - 問題解決の難しさ: 私たちが遭遇すると予想する難易度のレベル。

開発作業を見積もる際は、Issue に適切な weight をアサインしてください。

| Weight     | 説明                                                                                                                                                                                                                                                                                              | 例                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1: Trivial | 可能な限り単純な変更。副作用が生じないことに確信があります。複雑さは無視できる程度です。                                                                                                                                                                                                          | ドキュメントの更新、単純なリグレッション、すでに調査・議論済みで数行のコードで修正できるその他のバグ、または対処方法は正確に分かっているがまだ時間を確保できていない技術的負債。                                                                  |
| 2: Small   | 単純な変更（最小限のコード変更）で、すべての要件を理解しています。小さな不確実性はいくつか存在しますが、解決策に確信があります。                                                                                                                                                                  | 既存データを公開する新しい API エンドポイントのような単純な機能、またはすべての調査がすでに完了している通常のバグやパフォーマンス問題。                                                                                                            |
| 3: Medium  | より大きなコードフットプリントを伴う変更（例: 多数の異なるファイル、または影響を受けるテスト）。私たちが解決していく必要のある不確実性があります。                                                                                                                                                | バックエンドとフロントエンドのコンポーネントを伴う可能性のある通常の機能、またはほとんどのバグやパフォーマンス問題。                                                                                                                              |
| 5: Large   | コードベースの複数の領域に影響を与えるより複雑な変更。リファクタリングが含まれる場合もあります。要件の理解が不十分で、複数の重要なギャップがあると感じられます。マージリクエストを開始する前に、この Issue をより小さな単位に分解する必要があります。                                              | バックエンドとフロントエンドのコンポーネントを伴う大きな機能、または初期調査は行われたがまだ再現・理解されていないバグやパフォーマンス問題。                                                                                                      |

weight が 5 以上のものは、可能であれば分解すべきです。

### バックログリファインメント {#backlog-refinement}

毎週、エンジニアリングチームは近々の Issue をレビューするためにバックログリファインメントプロセスを完了します。この取り組みのゴールは、すべての Issue に weight を持たせることで、各マイルストーンをより正確に計画でき、また知識共有も改善できるようにすることです。

バックログリファインメントプロセスに加えて、エンジニアはこのバックログリファインメントプロセスに従わずに任意の Issue を見積もることもできます。

#### ステップ 1: リファインメント対象の Issue の特定 {#step-1-identifying-issues-for-refinement}

チームは、`workflow::refinement` ラベルを使用してリファインメントが必要な Issue を特定します。バックログリファインメントプロセスの良い候補となる Issue（weight がない、要件が不明確など）がある場合は、このラベルを使用してください。私たちは週あたり最大 5 件の Issue をリファインメントします。

[リファインメント Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/blob/main/scripts/refinement) は、毎週の初めに自動生成されます。
スクリプトは私たちの [stage プロジェクト](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks) で調整できます。

#### ステップ 2: Issue のリファインメント {#step-2-refining-issues}

その週を通じて、チームの各エンジニアはバックログリファインメントのために選択された Issue のリストを確認します。[現在のバックログリファインメント Issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=workflow%3A%3Arefinement)。

各 Issue について、チームメンバーは Issue をレビューし、以下を提供します。

- 見積もり weight
- 必要に応じた Issue の分解
- 実装ガイド

Issue をリファインメントする際は、次の点を考慮してください。

- 会話を元の Issue に留めるか、コンテキストを保持するために Issue 内の関連する議論へのリンクを提供する
- より多くの情報が集まるにつれて、Issue の説明、実装計画、ラベルを更新する
- 効率のため、完了とマークされたすでにリファインメント済みの Issue のリファインメントはスキップできる
- 修正が明確で簡単な場合、エンジニアは Issue を自分自身にアサインし、weight 1 を付け、修正を push し、Issue をクローズできる

#### ステップ 3: リファインメントの確定 {#step-3-finalizing-refinement}

エンジニアが入力する機会を得た後、EM または PM は次を行います。

- weight をアサインする
- 懸念があればステーブルカウンターパートに伝える
- `workflow::refinement` ラベルを削除する
- `workflow::ready for development` ラベルを追加する

議論されず weight が付けられなかった Issue については、PM や UX からより多くの情報を得る必要があるかどうかを確認するためにエンジニアと協力します。

### レトロスペクティブ {#retrospectives}

私たちはスケジュールされた「マイルストーンごと」のレトロスペクティブを開催し、アドホックな「プロジェクトごと」のレトロスペクティブを持つこともできます。

#### マイルストーンごと {#per-milestone}

私たちには [マイルストーンレトロスペクティブ Issue](https://gitlab.com/gl-retrospectives/enablement-section/tenant-scale/-/issues) があります。
これらには EM、PM、エンジニア、UX、そしてすべてのステーブルカウンターパートが含まれます。
すべてのマイルストーンへの参加が強く奨励されます。詳細については、毎月 26 日に現在進行中のマイルストーンのために作成される [グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/) を参照してください。

#### プロジェクトごと {#per-project}

Issue、機能、その他の種類のプロジェクトが特に有用な学びの経験になった場合、私たちはそこから学ぶために同期または非同期のレトロスペクティブを開催することがあります。あなたが取り組んでいる何かがレトロスペクティブに値すると思う場合は、次のようにします。

1. なぜレトロスペクティブを開催したいかを説明する [Issue を作成](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues) し、これが同期であるべきか非同期であるべきかを示します。
1. あなたの EM と、関与すべきその他の人（PM やカウンターパートなど）を含めます。
1. 該当する場合は同期ミーティングを調整します。将来の参照のため、レトロスペクティブからのすべてのフィードバックを Issue に追加します。

## エラーバジェット {#error-budgets}

GitLab は、私たちの機能の可用性とパフォーマンスを測定するために [エラーバジェット](/handbook/engineering/error-budgets/) を使用しています。各エンジニアリンググループは独自のバジェットスペンドを持ちます。Tenant Scale グループの現在の 28 日間のスペンドは、この [Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-tenant_scale_error_budget/product3a-error-budgets-tenant-scale?orgId=1&from=now-28d&to=now%2Fm&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main) で確認できます。

グループが長期的なスケーラビリティ作業に集中できるよう、99.85% のエラーバジェット例外が [承認](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/121190) されました。

## ダッシュボード {#dashboards}

以下にリストされた Tableau ビューで、私たちのグループメトリクスを確認できます。

- [Top engineering metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2251271/views)
- [Merge request metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2104461/views)
- [Flaky test issues](https://10az.online.tableau.com/#/site/gitlab/workbooks/2283052/views)
- [Slow RSpec test issues](https://10az.online.tableau.com/#/site/gitlab/workbooks/2354045/views)
