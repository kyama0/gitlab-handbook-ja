---
title: 実験（Experimentation）
description: "GitLab における実験の作成と実施に関する情報。"
upstream_path: "/handbook/engineering/development/growth/experimentation/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-28T05:15:25Z"
translator: claude
stale: false
lastmod: "2025-07-02T12:41:38-07:00"
---

### 実験（Experimentation）

このページでは、実験を実施するための Growth エンジニアリングプロセスについて説明します。以下も参照してください:

* [Growth による実験の開始方法](/handbook/product/groups/growth/#how-growth-launches-experiments)（プロダクト）
* [実験ガイド](https://docs.gitlab.com/ee/development/experiment_guide/)（GitLab 開発者ドキュメント）
* [実験のデザインと分析](/handbook/product/groups/product-analysis/experimentation/)（プロダクト分析）

## 実験の実施

[Andrew Chen の How to build a growth team](https://andrewchen.com/how-to-build-a-growth-team/) で概説されている 4 ステップのプロセスに従って実験を実施します。

1. **仮説の形成:** チームがテストしたいアイデアを定義します。
2. **アイデアの優先順位付け:** 最初にテストするアイデアを決定します。
3. **実験の実施:** 実験を実行するためのプロダクト、デザイン、エンジニアリング、データ、マーケティングの業務を行います。
4. **結果の分析:** 結果データを詳細に分析し、仮説を証明または反証します。

毎週、[Growth 週次ミーティング](/handbook/product/groups/growth/#weekly-growth-meeting)で進捗の更新を提供し、学習内容についてディスカッションします。

各実験の期間は、実験結果が統計的有意性に達するまでの時間によって異なります。期間が様々であるため、週によっては複数の実験が並行して実施されることがあります。

### 実験プロセス

#### 概要

1. 実験のスコープを定義するための[実験アイデア](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Idea) Issue を作成します（追加ラベル: `~"experiment idea"`、任意で追加: `~"growth experiment"`）

* 実験として試みるアイデアを持つ人は誰でもこの Issue を作成できます
* 実験したいプロダクトの部分、実験のアイデア（つまり仮説）、成功した結果がどのようなものかについての情報を提供します
* この非常に初期の段階で最も重要なことは、チームの他のメンバーが理解でき、プロジェクトマネージャーが引き継げるだけの十分なコンテキストと詳細でアイデアをメモしておくことです

1. プロジェクトマネージャー（PM）は[実験バックログ](https://gitlab.com/groups/gitlab-org/-/boards/2028884)を定期的にレビューして、明確に定義された実験の必要な基準を満たしているかを確認します
    * [実験定義標準](#experiment-definition-standards)を満たし、関連性があると判断された実験は、適切なマイルストーンリスト（`%Awaiting further demand`、`%Backlog`、`%Next 1-3 releases`、または特定のマイルストーン）を追加することで優先順位付けされます
    * [実験定義標準](#experiment-definition-standards)を満たさないまたは関連性がなくなったと判断された実験はクローズされます
1. PM は[実験セットアップ](#experiment-setup)で概説されているプロセスに従ってエピックと関連 Issue を作成します
1. PM、UX、エンジニアリングは[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従い、実験の完了に必要な業務を追跡するためにエピックにリンクされた `workflow::` Issue を作成します
1. さらに、PM はデータチームと協力して、定義された成功指標を達成するために必要なデータを定義します
    * **注意:** データチームが新しいテーブルまたはカラムからのデータの取り込みを開始するためには、それらのテーブルまたはカラムがまず本番データベースに存在している必要があります。
1. エンジニアリングチームはプロダクト開発フローに従って変更を提供し、他の GitLab チームに影響する変更に注意を払います。

* 私たちのプロセス、計画、現在の優先事項は他のグループに対して透明です
* 現在または近い将来に他のグループによって開発中の機能に対して実験を実施することを避けるようにします
* 私たちが導入する変更に対して、異なるグループが親しみを持てるよう、可能な限り関連するグループからレビュアーとドメインエキスパートを選びます
* プロダクトマネージャーが判断を下した時点で、実験とフィーチャーフラグのクリーンアップを開始し、実験機能をプロダクトに追加するか元に戻します

1. エンジニアリングと PM は定義されたロールアウト計画に従って実験を有効化するために協業します
    * PM またはエンジニアリングは[実験ロールアウト](#experiment-rollout-issue) Issue を更新し、実験がライブになった時点で実験スコープラベルを `~"experiment::active"` に設定します
    * PM またはエンジニアリングは[実験ロールアウト](#experiment-rollout-issue) Issue のコメントと `#production` Slack チャンネルで関係者（チーム、データチーム、サポート、CSM など）にメンションして通知します
1. PM は Sisense に送信されたデータを通じて実験をモニタリングし、必要に応じて[実験ロールアウト](#experiment-rollout-issue) Issue のロールアウト戦略を調整します
1. PM は記録されたデータと実験の成功測定基準を比較します
    * 実験（バリアント）が成功した場合、PM/エンジニアリングは成功したフローをプロダクトに完全に統合するための[実験クリーンアップ Issue](#experiment-cleanup-issue)を作成します
    * 実験（すべてのバリアント）が失敗した場合、PM/エンジニアリングは実験コードを削除して「コントロール」フローに戻すための[実験クリーンアップ Issue](#experiment-cleanup-issue)を作成します
1. [実験クリーンアップ](#experiment-cleanup-issue) Issue が解決されたら、[実験ロールアウト](#experiment-rollout-issue) Issue と[実験エピック](#experiment-epic)がクローズされ、実験プロセスが完了します

各ステージでの DRI の決定については、[Growth RADCIE と DRI](/handbook/product/groups/growth/#growth-radcie-and-dris) も参照してください。

#### 実験 Issue ボード

実験のバックログは[実験バックログ](https://gitlab.com/groups/gitlab-org/-/boards/2028884?&label_name[]=growth%20experiment)ボードで追跡されます。

実験のステータスを追跡するために、`~"experiment-rollout"` とスコープされた `experiment::` ラベルを使用した実験トラッキング Issue が以下のグループの実験ロールアウトボードで追跡されます:

| gitlab-org | gitlab-com | すべてのグループ |
| ------ | ------ | ------ |
| [実験ロールアウト](https://gitlab.com/groups/gitlab-org/-/boards/1352542) | [実験ロールアウト](https://gitlab.com/groups/gitlab-com/-/boards/1542208) | [Issue リスト](https://gitlab.com/dashboard/issues?scope=all&state=opened&label_name[]=experiment-rollout) |

<span id="experiment-setup"></span>

#### 実験セットアップ

* 実験の仮説と測定基準が明確に定義されたら、実験業務に最も適した最上位グループ（通常は `gitlab-org` グループ）に[実験エピック](#experiment-epic)が作成されます
  * エピックは実験の唯一の情報源（SSoT）になります
  * 元の[実験定義 Issue](#experiment-definition-issue)はクローズされてエピックに添付されます
  * [実験定義 Issue](#experiment-definition-issue)からの最終的な定義、仮説、測定基準が新しいエピックの説明にコピーされます
* 実験に関連する新しい Issue（[実験ロールアウト](#experiment-rollout-issue) Issue、[実験クリーンアップ](#experiment-cleanup-issue) Issue、UX 仕様 Issue、またはエンジニアリング業務 Issue など）がエピックに添付されます

<span id="experiment-definition-issue"></span>

##### 実験定義 Issue

この Issue は、実験の概要、仮説、および成功の測定方法についての考えを含む実験を定義するための起点として機能します。[実験アイデア] Issue テンプレートをこれに使用できます（追加ラベル: `~"experiment idea"`、任意で追加: `~"growth experiment"`）。

<span id="experiment-definition-standards"></span>

##### 実験定義標準

1. 実験は定性的に測定できる（つまり、誤ったデータを与える可能性のある他の要因がない）
1. 実験は可能な限りアトミックである（つまり、一連またはグループの変更ではなく、一つの特定の個別の変更を測定する方が最も容易）
1. 実験には明確に定義された信頼性のある測定可能な成功指標がある
    * 選択された成功指標についてのコンセンサスがある
    * 成功指標は、実験のアクティブフェーズ中に収集・測定されるデータに明確に結びついている（[実験ロールアウト](#experiment-rollout-issue) Issue）
1. 実験には統計的有意性への推定時間が含まれている: 母集団サイズと期待される転換率を考慮して実験が実施される必要がある期間
    * この推定を計算するのに役立つ[A/B テスト計算機（外部）](https://cxl.com/ab-test-calculator/)などの便利なツールを使用できます

<span id="experiment-epic"></span>

##### 実験エピック

このエピックは、実験が[実験定義標準](#experiment-definition-standards)に従って適切に定義され、実施する価値があると判断された後、実験の唯一の情報源（SSoT）として機能します。[実験定義 Issue](#experiment-definition-issue)がこのエピックに追加されたら、期待されるロールアウト計画などのさらなる詳細を記入します。また、実験をマイルストーンに割り当て、UX とエンジニアリング業務のためのプロダクト開発フローに従います。実験のデザインとロールアウトが進むにつれて、このエピックまたは親 Issue には、実験が成功かどうかを判断するために使用されるトラッキングイベントとデータポイント、および関連するメトリクス報告ダッシュボード（Sisense など）へのリンクを含む詳細や情報へのリンクが含まれるべきです。

<span id="experiment-rollout-issue"></span>

##### 実験ロールアウト Issue

この Issue は、デプロイ後の実験の進捗を追跡するために使用されます。実験のステータスを追跡するための追加の `experiment::` スコープラベルを持つフィーチャーフラグロールアウト Issue に類似しています。[実験トラッキング] Issue テンプレートには、実験の概要、連絡先、ロールアウトステップ、および全体的な実験 Issue またはエピックへのリンクが含まれています。

`experiment::` スコープラベルは:

* `~"experiment::pending"` - 実験はデプロイ待ちです
* `~"experiment::active"` - 実験はアクティブ（ライブ）です
* `~"experiment::blocked"` - 実験は現在ブロックされています
* `~"experiment::validated"` - 実験は検証されました（成功基準が明確に達成された）
* `~"experiment::invalidated"` - 実験は無効化されました（成功基準が明確に達成されなかった）
* `~"experiment::inconclusive"` - 実験は結論が出ませんでした（成功基準が明確に達成されたとも達成されなかったとも言えなかった）

<span id="experiment-cleanup-issue"></span>

#### 実験クリーンアップ Issue

この Issue は、実験が完了した後に実験をクリーンアップするために使用されます。クリーンアップ業務が行われるプロジェクト内（例: `gitlab-org/gitlab` プロジェクト）で作成されます。
クリーンアップ業務には、実験を完全に削除すること（`~"experiment::invalidated"` と `~"experiment::inconclusive"` の場合）または長期間のために実験機能をリファクタリングすること（`~"experiment::validated"` の場合）が含まれます。
クリーンアップ Issue は、クリーンアップ前に実験が完了していることを確認するために、実験ロールアウト Issue の参照としてリンクされるべきです。

[実験成功クリーンアップ](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Successful%20Cleanup) Issue テンプレートは `gitlab-org/gitlab` プロジェクトに使用できます。

#### 実験 Issue テンプレート

* GitLab `gitlab-org/gitlab` プロジェクト
  * [実験アイデア](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Idea) Issue テンプレート
  * エンジニアリング用[実験実施](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experimentation%20Implementation) Issue テンプレート
  * [実験ロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Rollout)
  * 成功した実験を機能に転換するための[実験成功クリーンアップ](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Successful%20Cleanup) Issue テンプレート
* Growth `team-tasks` プロジェクト
  * Growth グループ用[マイルストーン計画](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/new?issuable_template=growth_team_planning_template) Issue テンプレート
  * Growth グループ用[実験アイデア](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/new?issuable_template=Growth%20experiment) Issue テンプレート
  * Growth グループ用[実験ロールアウト](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/new?issuable_template=Experiment%20Rollout) Issue テンプレート

## 最小実行可能実験（MVE）

GitLab のすべてのことと同様に、実験は[GitLab CREDIT 価値観](/handbook/values/)、特に[イテレーション](/handbook/values/#iteration)、[効率性](/handbook/values/#efficiency)、[結果](/handbook/values/#results)の価値観を念頭に置いてアプローチすべきです。

実験が大きくなるほど、デザインの作成、コード変更の実施、コード変更のレビュー、必要なデータの定義と収集、データを意味のあるテーブル・グラフ・ダッシュボードに整理するなどに時間がかかります。
実験プラットフォームを構築・改善し、実験を素早く作成・実施する能力を高めるにつれて、[すべての実験の大部分が仮説の証明に失敗することを予期すべきです](https://hbr.org/2017/09/the-surprising-power-of-online-experiments#:~:text=At%20Google%20and%20Bing,%20only%20about%2010%25%20to%2020%25%20of%20experiments%20generate%20positive%20results)。
これらの無効化または結論の出なかった実験はロールバックされるため、実験を可能な限り小さくイテレーティブに保つことに利点があります。

これを念頭に置いて、最小実行可能実験（MVE）の開発を検討することに利点があります。
[最小価値変更（MVC）](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)の概念と同様に、MVE の目標は、テストする最小の仮説、その仮説をテストするための最もシンプルなデザイン、デザインの最速の実装、仮説を検証するために収集する最小限のデータなどを見つけることです。

では、MVE は実際にはどのようなものでしょうか？
Matej Latin は彼のブログ記事「[Small experiments, significant results and learnings](https://about.gitlab.com/blog/2021/04/07/small-experiments-significant-results-and-learnings/#do-non-admin-users-want-to-invite-their-team-members)」で、いわゆる[「painted door」テスト](https://crstanier.medium.com/a-product-managers-guide-to-painted-door-tests-a1a5de33b473)の例を共有しています。
「painted door」テストのシンプルな例は、実際にはどこにも行かない CTA（行動喚起）ボタンかもしれません。「申し訳ありません！その機能はまだ準備できていません」という簡単なモーダルを表示したり、ドキュメントの既存のページにユーザーを連れて行ったりするかもしれません。
このタイプの MVE のデザインが意図的にシンプルなため、開発、デプロイ、データ収集の開始がより簡単で速くなります。
このタイプの MVE のデザインが意図的にシンプルなため、開発とデプロイがより簡単で速くなります。少量のインストルメンテーションで、そのボタンへの初期エンゲージメントを測定する機会として使用できます。

* CTA をクリックするのは誰ですか？
* どのくらいの頻度でクリックされていますか？

これは、次のステップ（例えばロールバック、より大きな実験の開発、またはフォローアップとしての機能の実装）を通知するための比較的低コストな方法になります。

「painted door」テストが常に最初のアプローチとして最良であるとは限らないことに注意してください。
主なアイデアは、実験に対してイテレーティブなアプローチを目指すことです。
「デプロイする価値があり、進め方を知るのに十分なデータをまだ提供するこの実験のよりシンプルなバージョンはありますか？」と自問してください。

## 実験ステータス

リアルタイムの実験ロールアウトステータスについて、GitLab チームメンバーは[実験 API](https://gitlab.com/api/v4/experiments)（[ドキュメント](https://docs.gitlab.com/ee/api/experiments.html)）を表示できます（ブラウザ用の JSON ビューアを推奨）。

「current_status」はオン、オフ、または条件付きになります。条件付きの場合は、percentage_of_time または percentage_of_actors のいずれかが存在します。実験ガイドの[フィーチャーフラグに関する注記](https://docs.gitlab.com/ee/development/experiment_guide/experiment_rollout.html)を参照してください。

実験フラグがまだ存在するかどうかを示す Sisense のダッシュボードがありますが、現在のステータスは示しません。これらも GitLab チームメンバーのみが利用できます。

[実験ロールアウトボード](https://gitlab.com/groups/gitlab-org/-/boards/1352542?label_name[]=experiment-rollout)には、開発および SaaS で使用される[実験フィーチャーフラグ](https://docs.gitlab.com/ee/development/feature_flags/#experiment-type)にリンクされたロールアウト Issue が一覧表示されます。
