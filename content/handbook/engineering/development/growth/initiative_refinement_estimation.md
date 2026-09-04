---
title: Growth マイルストーン計画・リファインメント・見積もり
description: "Growth チームの継続的リファインメントプロセスと見積もりガイドライン"
upstream_path: "/handbook/engineering/development/growth/initiative_refinement_estimation/"
upstream_sha: "68426776f854464b95a942162d83ddb29afbcf7d"
translated_at: "2026-09-04T12:11:57+09:00"
translator: claude
stale: false
lastmod: "2026-08-19T11:37:13-04:00"
---

## マイルストーン計画フェーズ

Growth はマイルストーン計画を軸にした継続的フローモデルで運営しています。マイルストーン計画 Issue は、優先事項、オーナーシップ、タイムラインを調整するための中央調整ハブとして機能します。

- マイルストーン計画はマイルストーンの実際の開始日から少なくとも 2 週間前に開始します
- マイルストーン計画 Issue は[マイルストーン計画テンプレート](https://gitlab.com/gitlab-org/growth/team-tasks/-/blob/master/.gitlab/issue_templates/milestone-planning-issue.md)に従って作成されます
- 計画 Issue には、戦略的テーマ、デザイン・機能業務・技術的負債・バグの焦点を絞ったワークトラック、エンジニアの利用可能なキャパシティが含まれます
- PM、EM、UXM、デザイナー、エンジニアが機能・実験・バグにわたるエピックと Issue を特定し、ターゲットマイルストーンで注釈を付けます
- PM は EM と協力して優先プロジェクトを（必要に応じて）マイルストーン開始日前に通常は実装 Issue に分解します
- 理想的には、ターゲットマイルストーンに割り当てられた Issue はマイルストーン開始前にデザインステージをクリアしているべきです。これにより、エンジニアリングが確信を持って成果物のスコープを計画できます。市場のコミットメントによってデザインが完了する前にターゲットマイルストーンをロックする必要がある場合は、例外として扱います。
- EM はターゲットマイルストーンの開始日にマイルストーンキックオフミーティングを開催します。エンジニアは事前にマイルストーン Issue をレビューし、関心、キャパシティ、複雑さに基づいて[DRI](./engineering_dri.md)として自己割り当てすることが期待されます。キックオフはアサインメントセッションではなく、業務開始前のブロッカー、依存関係、未解決の質問を表面化するためのディスカッションフォーラムです。

## 実行フェーズ

- DRI は Issue 全体の業務を調整し、依存関係を管理し、ブロッカーを即座にフラグ付けします
- 完全な開発プロセスは[業務進行ガイドライン](#work-progression-guidelines)に従います
<!-- markdownlint-disable-next-line MD051 : the anchor is valid; lint miscomputes it because of the {.h5} heading attribute -->
- マイルストーン計画に記載された優先プロジェクトと業務が優先されます。それらが完了してキャパシティに余裕がある場合、エンジニアは[業務キューボード](#work-queue-boards)から追加の Issue を引き取ることができます。
- ボットはマイルストーン計画 Issue に業務完了、進行中、ブロック、リスク、ベロシティを示す週次進捗更新を投稿します
- レトロスペクティブのフィードバックは、個別のレトロスペクティブ Issue ではなく、マイルストーン計画 Issue のスレッドで収集されます

### 2 つの業務取り込みモード {.h5}

マイルストーンの開始時までに、計画された業務のすべてが `Ready for Development` に到達するとは限りません。Issue はデザインとリファインメントを完了するたびに引き続き追加されます。そのため、マイルストーン中は 2 つのモードで運営します。

1. **キックオフ時に割り当て** — マイルストーン開始時に `Ready for Development` になっている Issue。エンジニアはキックオフに先立ってこれらをレビューし、関心、キャパシティ、複雑さに基づいて DRI として自己割り当てします。
   <!-- markdownlint-disable-next-line MD051 : the anchor is valid; lint miscomputes it because of the {.h5} heading attribute -->
1. **マイルストーン中のかんばん方式での引き取り** — マイルストーン開始後に `Ready for Development` に到達した優先 Issue。[業務キューボード](#work-queue-boards)（マイルストーン計画 Issue からもリンクされています）は、この業務のキューとして機能します。エンジニアはこれらのボードを確認し、キャパシティが許す範囲で、新たに準備できた Issue を一般バックログより先に優先順位（上から下）に従って引き取ることが期待されます。

### 業務キューボード {.h5}

マイルストーンの実行は、マイルストーン計画 Issue のトラックに対応する 4 つのボードを中心に進めます。これらのボード上の Issue は、上から下へ優先順位順に並んでいます。順番に引き取ってください。

1. [Growth - 機能業務](https://gitlab.com/groups/gitlab-org/-/boards/11511990?not[label_name][]=Category%3AEngineering%20Excellence&not[label_name][]=type%3A%3Amaintenance&label_name[]=section%3A%3Agrowth&label_name[]=Growth%3A%20Driving%20First%20Orders&milestone_title=Started)
1. [Growth - 優先バグ](https://gitlab.com/groups/gitlab-org/-/boards/11512116?milestone_title=Started&label_name[]=section%3A%3Agrowth&label_name[]=type%3A%3Abug)
1. [Growth - 技術的負債の業務](https://gitlab.com/groups/gitlab-org/-/boards/11512114?not[label_name][]=Category%3AEngineering%20Excellence&not[label_name][]=Engineering%20Time&label_name[]=section%3A%3Agrowth&label_name[]=type%3A%3Amaintenance&milestone_title=Started)
1. [Growth - Engineering Excellence の業務](https://gitlab.com/groups/gitlab-org/-/boards/11512115?milestone_title=Started&label_name[]=section%3A%3Agrowth&label_name[]=Engineering%20Time&label_name[]=Category%3AEngineering%20Excellence)

## マイルストーンクローズフェーズ

- ボットは成果を集約し、ベロシティメトリクス（サイクルタイム、完了率など）を生成し、効率性分析とともに未完了の業務を次のマイルストーンに自動転送します
- ボットはスピルオーバーを管理し、まだオープンな Issue にマイルストーン不達ラベルを追加して次のマイルストーンに移動させます
- ボットはマイルストーンをクローズします

<span id="work-progression-guidelines"></span>

## 業務進行ガイドライン

### 問題の検証 {.h5}

- プロダクトマネージャーは問題が明確に定義され、解決する価値があり、ブロッカーがないことを検証します
- プロダクトマネージャーはエピック/Issue のステータスを `Ready for Design` に変更します

### デザイン中 {.h5}

- プロダクトデザイナーは必要なデザインを作成するためにエピック配下に Issue を作成します
- デザイナーはデザインをイテレーションして早期フィードバックを収集します
- デザイナーはディスカッションに基づいてデザインを改善します
- スコープが明確になりディスカッションが解決されたら、デザイナー/PM は Issue を `Planning Breakdown` ステータスに変更します
- デザイン Issue がない場合、プロダクトマネージャーは[実験実装](https://gitlab.com/gitlab-org/gitlab/-/Issues/new?description_template=Experiment%20Implementation)または[実装](https://gitlab.com/gitlab-org/gitlab/-/Issues/new?description_template=Implementation)テンプレートを使用してシンプルな実装 Issue を作成し、`Planning Breakdown` ステータスに進みます

### リファインメント {.h5}

- Issue は優先度順（上から下）にトリアージボットによって `Planning Breakdown` ステータスから `Refinement` ステータスへ自動的に移動されます。Issue は、`Next Up` ラベルが付いているか、現在または将来のマイルストーン（期限が今日以降のアクティブなマイルストーン）に割り当てられている場合に、自動リファインメントの対象になります。両方のプールが同じ限られたリファインメント枠を取り合います。`Next Up` の Issue が先に枠を埋め、残りの枠をマイルストーンに割り当てられた Issue が優先度順に補完します。ボットはこの列の最大制限よりも Issue 数が少い場合にのみリファインメントに移動します。これは PM が `planning breakdown` 列で上位に移動させることで Issue を優先する最初の機会です。Issue がリファインメントに移動されると、専用の `refinement thread` が作成され、ディスカッションと重み見積もりの場所として機能します。
  - リファインメントスレッドが作成されると、ボットは Growth エンジニア全員ではなく、ローテーションする対応可能な 3 人のエンジニアにタグを付けます（休暇中のエンジニアは除外されます）。タグ付けは、その Issue のリファインメント担当グループに入ったことを意味します。タグ付けされたエンジニアは、遅くとも 48 時間以内、理想的には 24 時間以内に重みの見積もりとフィードバックを提供することが期待されます。
  - 💡 ヒント: 稀な場合で Issue を急ぎで処理する必要がある場合、Issue のステータスを `Refinement` に設定することで、手動でリファインメントに移動できます。これによりトリアージボットが反応し、その Issue に即座に `refinement thread` を追加するため、自動パスと同じようにリファインメントを進められます。
- リファインメント中、チームは Issue が適切に説明されており要件が明確であることを確認します。`refinement thread` を使ってディスカッションできますが、そこで行われた変更や決定が Issue の説明にも反映されていることを確認すべきです。各エンジニアが Issue の説明に満足したら、[ガイドライン](#estimation-guidelines)に基づいて重みの見積もりに投票できます。投票はスレッドへの絵文字リアクション: 1️⃣ 2️⃣ 3️⃣ 5️⃣ または 🚀（5+、つまり Issue が大きすぎて小さな Issue に分割する必要がある可能性を示します。ディスカッションを開始して、どのように分割するかも提案してください）で行われます。
  - 💡 ヒント: リファインメントを支援するために、[Growth Refinement Review](https://gitlab.com/gitlab-org/growth/ai/growth-refinement-review) AI スキルを試すこともできます。
  <!-- markdownlint-disable-next-line MD051 : the anchor is valid; lint miscomputes it because of the {.h5} heading attribute -->
- Issue の重みが `5` 以上の場合、より小さな Issue に分解する必要がある可能性が高いです。関連するエピックの Engineering DRI（DRI が割り当てられていない場合は EM）が、Issue を分割し、新しい Issue をリファインメントに通す責任を持ちます。その間にボットが元の Issue を進めないよう、refinement thread に ❌ リアクションを追加してください（下の[開発フェーズ](#development-phase)セクションのヒントを参照）。

> ⚠️ デザインとリファインメントが完了したら、計画されたデザイン、機能、UX アプローチは安定していると見なされるべきです。開発またはレビュー中に提案される変更は高コストで混乱を引き起こします。開発フェーズが始まる前に実装計画に最大限の確信を持てるよう、デザインとリファインメントフェーズを活用してください。

### 開発フェーズ {#development-phase .h5}

- 毎日トリアージボットは `Refinement` ステータスのすべての Issue をチェックし、Issue に必要最低数の見積もり投票がある場合（現在の設定については[こちら](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/lib/growth_refine_automation_helper.rb)の `MIN_REACTIONS` 定数を参照）、ボットは Issue の重みを最も多く投票された値に設定し、refinement thread に ✅ リアクションを付け、Issue を `Ready for Development` ステータスに移動します。
  - 💡 ヒント: Issue に問題があり、十分なエンジニアが見積もりを行っても前に進めるべきでない場合、スレッドに ❌ リアクションを追加することで、このリアクションがスレッドに残っている間はボットが Issue を `Ready for Development` に遷移させないようにできます。つまり、追加した人は問題が解消されたらリアクションを削除する責任もあります。
- 準備済み業務の優先順位付けはマイルストーンの割り当てを通じて行われます。PM は Issue のマイルストーンを設定して、スケジュール済みであることを示します。個別のスケジューリングステータスはなく、マイルストーンがスケジューリングのシグナルとして機能します。
- エンジニアが `Ready for Development` から Issue を引き取り、ステータスを `In Dev` に変更します。Issue がまだマイルストーンに割り当てられていない場合、トリアージボットが現在のマイルストーンを割り当てます。
- Issue に関連する MR がレビューステージに達したら、Issue のステータスが `In Review` に変更されます
- MR がマージされ MR の変更が本番にデプロイされたら、Issue のステータスが `Verification` に変更されます
- Issue の重みが未設定のままリファインメント後のステータス（`Ready for development`、`In dev`、`In review`、`Verification`、`Blocked`、または `Complete`）に移動された場合、トリアージボットは Issue を移動した人に、[見積もりガイドライン](#estimation-guidelines)に従って重みを割り当てるよう通知します。

### 検証 {.h5}

- エンジニアリング DRI が適切な検証レベルを決定します。シンプルな完了の場合は PM にメンションしてクローズするか、複雑な変更については正式な PM 検証をリクエストします。

<span id="estimation-guidelines"></span>

## 見積もりガイドライン

[開発の見積もりは、Issue が `In dev` ステータスで過ごし、`Complete` に移動するまでの時間です。パイプラインの失敗やレビュアーの可用性によって不確実なレビューサイクルが主要な要因です]

| 重み | 通常のタイムライン | 説明 |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1      | 1週間未満           | 最もシンプルな変更。副作用がないことが確認されています。 |
| 2      | 1〜2週間            | すべての要件を理解したシンプルな変更（コードの変更が最小限）。 |
| 3      | 2〜3週間            | シンプルな変更だが、コードのフットプリントが大きい（例: 多くの異なるファイルやテストへの影響）。要件は明確です。 |
| 5      | 3〜4週間            | コードベースの複数の領域に影響を与えるより複雑な変更。リファクタリングも含まれる場合があります。要件は理解されていますが、途中でいくつかのギャップが生じる可能性があります。 |
| 5+     | 4週間以上            | 依存関係（他のチームまたはサードパーティ）がある可能性があり、すべての要件をまだ理解していない大きな変更。マイルストーンでこれをコミットするのは難しく、要件をさらに明確にするか、より小さな Issue に分割することが望ましいです。 |

計画と見積もりにおいて、私たちは[予測可能性よりもベロシティ](/handbook/engineering/development/principles/#velocity)を重視します。計画と見積もりの主な目標は、[MVC](/handbook/values/#minimal-valuable-change-mvc)に焦点を当て、盲点を発見し、過度に最適化することなく基本的な予測可能性を達成することです。90% ではなく 70% の予測可能性を目指します。ベロシティ（マージリクエスト率）の最適化が Growth チームの[週次実験カデンス](/handbook/product/groups/growth/#weekly-growth-meeting)達成を可能にすると考えています。

- Issue に多くの未知事項があり、1 か 5 かが不明な場合は、慎重に高め（5）で見積もります。
- Issue に多くの未知事項がある場合は、2 つの Issue に分割できます。最初の Issue は未知事項を de-risk し潜在的なソリューションを探る調査（[スパイク](<https://en.wikipedia.org/wiki/Spike_(software_development)>)とも呼ばれる）のためです。2 番目の Issue は実装のためです。
- 初期見積もりが誤りで修正が必要な場合は、すぐに見積もりを修正してプロダクトマネージャーに通知します。プロダクトマネージャーとチームは、マイルストーンのコミットメントを調整する必要があるかどうかを決定します。

## リファインメントへのチーム参加

<!-- markdownlint-disable-next-line MD051 : the anchor is valid; lint miscomputes it because of the {.h5} heading attribute -->
非同期で運営するということは、リファインメントが全員が同時に参加するスケジュールされたミーティングに依存できないことを意味します。代わりに、チームはエンジニアが定期的に[Growth エピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/2079888)と[業務キューボード](#work-queue-boards)でリファインメントステータスの項目を確認する、継続的リファインメントの考え方を採用すべきです。エピックが `Refinement` ステータスに現れたら、エンジニアはそれをレビューし、明確化の質問をし、技術的実現可能性を評価し、提案された方向についてフィードバックを提供すべきです。リファインメント中に関心とコンテキストを発展させたエンジニアは、エピックを自己割り当てして Engineering DRI としてボランティア参加することを奨励されます。これは受動的な活動ではありません - 目標は懸念事項を表面化し、代替案を提案し、エピックが十分に理解されていることを確認し、理想的には分解と実装のオーナーシップをボランティアで引き受けることです。

<!-- markdownlint-disable-next-line MD051 : the anchor is valid; lint miscomputes it because of the {.h5} heading attribute -->
同様に、[業務キューボード](#work-queue-boards)は `Refinement` と `Ready for Development` ステータスにある Issue についてモニタリングされるべきです。リファインメント中の Issue は見積もり投票と技術的フィードバックが必要です。開発準備完了の Issue は即座に引き取り可能です。これらの列を定期的にスキャンすることで、エンジニアは今後の業務の認識を維持し、専門知識や関心に合致する Issue を特定し、パイプラインを動かし続けることができます。

現在、チームは ~"Growth::Driving First Orders" ラベルの付いた業務を優先すべきです。これらは即時対応が必要な高優先度の項目です。

## Issue のシーケンス

Issue の実装順序とブロッキングの概念を伝えるために、[ブロッキング Issue リンク機能](https://docs.gitlab.com/ee/user/project/Issues/related_Issues.html#blocking-Issues)を活用します。

ディスカッションの詳細は https://gitlab.com/gitlab-org/growth/team-tasks/-/Issues/752 を参照してください。

## Issue とエピックのラベリング

私たちはマイルストーン全体の Issue の進捗を追跡するためにワークフローボードを使用します。ワークフローボードは、グループ内のネストされたすべてのプロジェクトへの可視性のために最上位グループレベルで表示されるべきです。

Growth ステージは `~"devops::growth"` ラベルと、マージリクエスト率と Issue とマージリクエストのオーナーシップを追跡するための以下のグループを使用しています。

| 名前          | ラベル                  | gitlab-org                                                                                                                          | すべてのグループ                                                                                                                                         |
| ------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Growth        | `~"devops::growth"`     | [Growth ワークフロー](https://gitlab.com/groups/gitlab-org/-/boards/11511990)                                                            | [-](https://gitlab.com/dashboard/Issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=devops%3A%3Agrowth)                                     |
| Acquisition   | `~"group::acquisition"` | [Acquisition ワークフロー](https://gitlab.com/groups/gitlab-org/-/boards/11511990)                                                       | [-](https://gitlab.com/dashboard/Issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=devops%3A%3Agrowth&label_name[]=group%3A%3Aacquisition) |
| Activation    | `~"group::activation"`  | [Activation ワークフロー](https://gitlab.com/groups/gitlab-org/-/boards/11511990)                                                        | [-](https://gitlab.com/dashboard/Issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=devops%3A%3Agrowth&label_name[]=group%3A%3Aactivation)  |
| Engagement    | `~"group::engagement"`  | [Engagement ワークフロー](https://gitlab.com/groups/gitlab-org/-/boards/11511990)                                                        | [-](https://gitlab.com/dashboard/Issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=devops%3A%3Agrowth&label_name[]=group%3A%3Aengagement)  |
| Experiments   | `~"experiment-rollout"` | [実験トラッキング](https://gitlab.com/groups/gitlab-org/-/boards/1352542)                                                        | [-](https://gitlab.com/dashboard/Issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=experiment-rollout)                                     |
| Feature Flags | `~"feature flag"`       | [フィーチャーフラグ](https://gitlab.com/groups/gitlab-org/-/boards/1725470?&label_name[]=devops%3A%3Agrowth&label_name[]=feature%20flag) |                                                                                                                                                    |

Growth チームは GitLab コードベース全体の複数のグループとプロジェクトで業務を行います:

- [gitlab.com/gitlab-org](https://gitlab.com/gitlab-org/) グループ
- [gitlab](https://gitlab.com/gitlab-org/gitlab)
- [GLEX](https://gitlab.com/gitlab-org/ruby/gems/gitlab-experiment)
- [customers-gitlab-com](https://gitlab.com/gitlab-org/customers-gitlab-com)
- [gitlab.com/gitlab-com](https://gitlab.com/gitlab-com/) グループ
- [about.gitlab.com](https://gitlab.com/gitlab-com/marketing/digital-experience/about-gitlab-com)
