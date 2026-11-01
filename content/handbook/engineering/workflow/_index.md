---
title: "エンジニアリングワークフロー"
description: "このドキュメントは GitLab Inc. において Issue を扱うすべての人のワークフローを説明します。"
upstream_path: "/handbook/engineering/workflow/"
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T17:05:09+00:00"
translator: "claude"
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

このドキュメントは GitLab Inc. において Issue を扱うすべての人のワークフローを説明します。
より広いコミュニティに適用されるワークフローについては、[貢献ガイド](https://docs.gitlab.com/ee/development/contributing/)を参照してください。

## GitLab Flow {#gitlab-flow}

GitLab のプロダクトは [GitLab Flow](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)を使って構築されています。

私たちには[コードレビューに関する固有のルール](/handbook/engineering/workflow/code-review/)があります。

## マージリクエストのリバート {#reverting-a-merge-request}

short toes、双方向ドアの意思決定を行うこと、
行動を重視する姿勢という私たちの価値観に沿って、誰でも
マージリクエストのリバートを提案できます。MR をリバートすべきかを判断する際には、
次のことが真である必要があります:

- 何かが壊れており、許容可能な回避策がない。例:
  - 機能が壊れて `~severity::1` または `~severity::2` に分類された。
  [重要度ラベルを参照](/handbook/product-development/how-we-work/issue-triage/#severity)
  - [CI Health インシデント](#broken-master)
  - 失敗するマイグレーションがある
- 変更への依存関係がない。たとえばデータベース
マイグレーションが本番で実行されていない。

機能変更を含まず、既存の機能を削除しないマージリクエストのリバートは、
合議制での設計を防ぐために避けるべきです。

リバートの意図は、元の作成者を非難することでは決してありません。さらに、元の作成者に通知することは
必要なフォローアップアクションに DRI として参加できるようにする上でも有用です。

CI Health インシデントを修正するマージリクエストには、非必須ジョブをスキップするために `pipeline::expedited` を設定します。また、`ci-health:fix`（FOSS 固有の障害には `ci-health:fix-foss`）を設定すると、[`#ci-health-incidents`](https://gitlab.enterprise.slack.com/archives/C0AL251AXAM)で修正が告知されます。

<!-- These heading IDs keep old links working from triage-ops, gitlab, ci-alerts and the handbook.
     Rename them when master-broken is retired; see https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/618. -->

## CI Health インシデント {#broken-master}

CI Health インシデント（旧 master-broken インシデント）とは、本番へのデプロイ、またはエンジニアによるマージリクエストのマージを妨げる障害です。

通常、障害はデフォルトブランチにマージされた変更から発生しますが、マージリクエストのパイプラインだけ、デフォルトブランチだけ、またはその両方に現れることがあります。修正は他の開発作業よりも優先します。インシデントが未解決のまま長引くほど、本番へのデプロイ（自動デプロイ、月次リリース、セキュリティリリースなど）への影響が大きくなり、より多くのマージリクエストがブロックされる可能性があります（すべてのオープンなマージリクエストは、マージ済み結果パイプラインを通じて、壊れたデフォルトブランチを基に再ビルドする必要があります）。

質問がある場合は、[`#g_development_health`](https://gitlab.enterprise.slack.com/archives/C03PF7B9TCA)で尋ねるか、[CI Health インシデントのフィードバック Issue](https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/872)でスレッドを開始してください。

### インシデントがパイプラインをブロックしている場合 {#broken-master-escalation}

未解決の [CI Health インシデント](https://gitlab.com/gitlab-org/quality/analytics/ci-health-incidents/-/issues?state=opened)と [CI Health Systemic Issue](https://gitlab.com/gitlab-org/quality/analytics/ci-health-systemic/-/issues?state=opened)を確認します。それぞれ [`#ci-health-incidents`](https://gitlab.enterprise.slack.com/archives/C0AL251AXAM)または [`#ci-health-systemic`](https://gitlab.enterprise.slack.com/archives/C0AS5PF9WCU)にも投稿されます。テストファイルのインシデントでは、担当グループが分かっている場合、そのグループのチャンネルにも投稿されます。

- 該当する障害が掲載され、誰かがアサインされている場合は、その人が対応中です。インシデントと自分のグループの Slack チャンネルを確認し、誰かがすでに調査しているかを確認します。
- 該当する障害が掲載され、まだ誰もアサインされていない場合は、担当グループの Slack チャンネルに投稿し、続いて [`#development`](https://gitlab.enterprise.slack.com/archives/C011MHVR8MJ)で助けを求めます。
- 該当する障害が CI Health Systemic Issue として掲載されている場合は、すでに追跡されているインフラストラクチャの問題です。
- 該当する障害がまだ掲載されていない場合、同じ障害が複数のパイプラインをブロックした後に初めてインシデントが作成されるため、新しい障害が表示されるまで数時間かかることがあります。いつまでも表示されない場合は、システムが見逃した可能性があります。[フィードバック Issue](https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/872)で知らせてください。私たちは、障害がインシデントになる前に可視化する取り組みを進めています（[チームの Issue 869](https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/869)）。

従来の [master-broken インシデント](https://gitlab.com/gitlab-org/quality/engineering-productivity/master-broken-incidents/-/issues)も、失敗したすべての `master` パイプラインに対して引き続き作成され、[`#master-broken`](https://gitlab.enterprise.slack.com/archives/CR6QH3D7C)に投稿されます。これらに対応する必要はありません。

週末や休日は、グループのチャンネルまたは [`#development`](https://gitlab.enterprise.slack.com/archives/C011MHVR8MJ)に投稿します。調査の対応時間は、次の営業日に再開します。

メンテナンスされている安定ブランチでの障害については、[安定ブランチの破損](/handbook/engineering/releases/stable_branches/#broken-stable-branches)を参照してください。

### インシデントをアサインされた場合 {#triage-broken-master}

インシデントは、失敗しているジョブまたはテストを所有するグループに帰属します。そのグループに所属している場合、あなたがその DRI です。まだグループが特定されていない場合は、ブロックされている誰もが対応を引き受けられます。

#### 1. 自分にアサインする {#triage-dri-responsibilities}

インシデントを自分にアサインします。インシデントの議論と自分のグループの Slack チャンネルを確認し、誰かがすでに着手しているかを確認します。

#### 2. 原因を特定する {#pro-tips-for-triage-dri}

まず Duo を使います。インシデントに `@duo-developer-gitlab-org Please find out which merge request caused this CI Health incident.` と入力します。これを自動で行う仕組みが計画されています（[チームの Issue 620](https://gitlab.com/gitlab-org/quality/analytics/team/-/work_items/620)）。

Duo が特定できなかった場合は、インシデント内の失敗したパイプラインのサンプルと `Since Detection` セクション、または先頭の Grafana リンクを使います。

原因となったマージリクエストを手動で見つけるには、次のことを行います。

- 失敗したジョブをトリガーしたコミットを確認します。
- [プロジェクトのアクティビティ](https://gitlab.com/gitlab-org/gitlab/activity)と[最近のマージコミット](https://gitlab.com/gitlab-org/gitlab/-/commits/master?search=Merge%20branch)を閲覧し、失敗した spec のキーワードを検索します（たとえば `geo/` 内の spec が失敗している場合は、"geo" または "shard" を検索します）。
- 任意の spec ファイルの History ボタンと Blame ボタンを使い、最近の変更を確認します。
- スタックトレースと Capybara のスクリーンショット（`artifacts/tmp/capybara` 内）を確認します。

マージリクエストを見つけたら、インシデントにそのリンクを追加し、インシデントを作成者にアサインします。作成者と連絡が取れない場合は、MR を承認またはマージしたメンテナにアサインします。誰も対応できない場合は、[プロダクトカテゴリ](/handbook/product/categories/)でチームの EM を見つけ、[`#development`](https://gitlab.enterprise.slack.com/archives/C011MHVR8MJ)で助けを求めます。マージリクエストを特定できない場合は、[`#development`](https://gitlab.enterprise.slack.com/archives/C011MHVR8MJ)で助けを求めます。

フレーキーテストか、それとも回帰でしょうか。フレーキーテストは、コードを変更していなくても、成功する場合と失敗する場合があります。CI ジョブを再試行すると成功する、またはローカルで再現できないというものです。回帰は、特定のマージリクエストの後、再試行しても必ず失敗し、デフォルトブランチでローカルに再現できます。CI Health インシデントは通常、回帰が原因です。障害がフレーキーだと考えられる場合は、[テスト失敗 Issue](https://gitlab.com/gitlab-org/quality/test-failure-issues/-/issues?label_name[]=automation:top-flaky-test-file)を spec パスで検索して既存の Issue を探し、このインシデントへのリンクを含むコメントを追加します。

#### 3. 修正する {#resolution-of-broken-master}

通常、原因となったマージリクエストの作成者が修正します。作成者が対応できない場合は、そのチームが引き受けます。また、ブロックされていて修正できる人であれば、誰でも自分にアサインできます。

着手する前に、作業の重複を避けるため、誰かがすでにリバートまたは簡単な修正を作成していないかを確認します。早めにリバートを作成して作成者に引き継ぐ場合は、作成者またはそのメンテナに連絡できます。[`#backend_maintainers`](https://gitlab.enterprise.slack.com/archives/C1L0N0L5V)または [`#frontend_maintainers`](https://gitlab.enterprise.slack.com/archives/C0E9MN3RA)に投稿して調整することもできます。

デフォルトの対応は**リバート**です。

- リバート用のマージリクエストを作成します。元の貢献が失われないように、作業を復元するための Issue を作成し、作成者にアサインします。
- リバートは直接メンテナレビューに進め、メンテナ 1 名の承認が必要です。リバートが単純でない場合、メンテナは追加レビューを依頼できます。
- 非必須ジョブをスキップするため、修正 MR に `pipeline::expedited` を設定します。また、`ci-health:fix`（FOSS 固有の障害には `ci-health:fix-foss`）を設定すると、[`#ci-health-incidents`](https://gitlab.enterprise.slack.com/archives/C0AL251AXAM)で修正が告知されます。
- マージリクエストがデータベースマイグレーションを実行する場合は、リバート前に[デプロイメントブロッカープロセス](/handbook/engineering/deployments-and-releases/deployments/#deployment-blockers)に従います。マイグレーションがすでに何らかの環境で実行されている場合は、[`#releases`](https://gitlab.enterprise.slack.com/archives/C0HL7SLLX)で Release Managers に伝えます。ロールバック用のマイグレーションが必要かを議論するか、[何もしないマイグレーション](https://docs.gitlab.com/ee/development/database/deleting_migrations.html#how-to-disable-a-data-migration)で無効化します。

障害が回帰ではなくフレーキーに見える場合は、テストを[隔離](https://docs.gitlab.com/ee/development/testing_guide/flaky_tests.html#quarantined-tests)します。フレーキーさが繰り返しインシデントを引き起こす場合は、[Fast Quarantine](https://gitlab.com/gitlab-org/quality/engineering-productivity/fast-quarantine/)を使って即座に除外します。フレーキーテストの Issue が存在しない場合は作成します。失敗したジョブのページ（`gitlab-org/gitlab` 内）の **New issue** ボタンから `Broken Master - Flaky` テンプレートを使い、`quarantined test` ラベルを追加します。

**リバートできない場合**、またはリバートによってリスクが増す場合は、修正を加えて解決します。

- 修正を `priority::1` `severity::1` として扱います。
- 変更を最小限にとどめ、リファクタリングはフォローアップとして行います。
- 修正 MR に `pipeline::expedited` と `ci-health:fix`（または `ci-health:fix-foss`）を設定します。

**`test-on-gdk` ジョブだけが失敗している場合**は、[test-on-gdk Runbook](https://gitlab.com/gitlab-org/quality/runbooks/-/tree/main/test_on_gdk#disable-the-e2etest-on-gdk-pipeline)を使い、新しいパイプラインへの追加を停止します。

パイプライン内のすべての障害に必ず対処します。最も目立つ障害を修正した後も、後続のジョブが失敗することがあります。

#### 4. 修正がマージされた後 {#4-after-the-fix-is-merged}

修正が次の自動デプロイパッケージに取り込まれるよう、`Pick into auto-deploy` ラベルを（`severity::1` と `priority::1` とともに）適用します。バックポートが必要なブランチについては、[メンテナンスされているバージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)と後述の[安定ブランチ](#stable-branches)セクションを参照してください。

インシデントに修正マージリクエストへのリンクを追加し、[`#ci-health-incidents`](https://gitlab.enterprise.slack.com/archives/C0AL251AXAM)の Slack スレッドで返信して、修正が進んでいることを他の人に知らせます。

インシデントをクローズする必要はありません。最後の該当する障害が発生してから 4 時間後に自動的にクローズされます。

リバートまたは隔離を行っても根本原因が不明な場合は、インシデント内で調査を続けます。

### インシデントが未解決の間のマージ {#merging-during-broken-master}

パイプラインの失敗が未解決の CI Health インシデントだけに起因する場合は、回避策を取らず修正を待ちます。マージトレインはデフォルトブランチを基にビルドするため、無関係なマージによって新しい障害が加わり、インシデントの原因特定が難しくなることがあります。緊急の場合を除き、障害を迂回しないでください。

緊急の場合には例外があります。

#### 基準 {#criteria-for-merging-during-broken-master}

マージリクエストが、次のいずれかに該当します。

- 進行中の本番インシデントを緩和するために GitLab.com にデプロイされるもの、または
- 未解決の [CI Health インシデント](https://gitlab.com/gitlab-org/quality/analytics/ci-health-incidents/-/issues?state=opened)を修正するもの（同時に複数のインシデントが未解決の場合があります）。

#### 緊急マージのリクエスト方法 {#how-to-request-an-urgent-merge}

1. 最新のパイプラインが完了してから 2 時間未満であることを確認します（それ以前に完了したパイプラインは、もはやデフォルトブランチを反映していない可能性があります）。
1. [`#frontend_maintainers`](https://gitlab.enterprise.slack.com/archives/C0E9MN3RA)または [`#backend_maintainers`](https://gitlab.enterprise.slack.com/archives/C1L0N0L5V)に投稿します。
1. CI Health インシデント中のマージであることを明示し、待つと状況が悪化する理由を説明して、マージリクエストと CI Health インシデント（または本番インシデント）へのリンクを追加します。

#### メンテナへの指示 {#instructions-for-the-maintainer}

1. `#frontend_maintainers` または `#backend_maintainers` の Slack リクエストに `:eyes:` でリアクションし、他のメンテナに評価中であることを知らせます。
1. リクエストが基準を満たすかを評価します。不明な場合は、MR でリクエスト者に詳細を尋ねます。
1. 基準を満たさない場合は、MR でリクエスト者に理由を伝えます。
1. 基準を満たすには、次の**すべて**が真である必要があります。
   - 最新のパイプラインが完了してから 2 時間未満である。
   - パイプライン内のすべての障害が、未解決の [CI Health インシデント](https://gitlab.com/gitlab-org/quality/analytics/ci-health-incidents/-/issues?state=opened)にも現れている。
1. コメントを追加します。

   ```markdown
   Merging while CI Health incident <INCIDENT_URL> is open.

   Failure in <JOB_URL> is tracked in that incident.
   ```

1. Merge ボタンが有効な場合は（可能性は低いですが）、クリックします。それ以外の場合は、次のことを行います。
   - [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/edit)の **Settings > Merge requests** で ["Pipelines must succeed"](https://docs.gitlab.com/ee/user/project/merge_requests/auto_merge.html#require-a-successful-pipeline-for-merge)を解除します。
   - **Merge** をクリックします。
   - 直ちに "Pipelines must succeed" を再度有効にします。
1. MR がマージトレイン上にある場合は警告が表示されます。閉じても構いません。

### ミラーパイプラインのアラート {#broken-master-mirrors}

[`#master-broken-mirrors`](https://gitlab.enterprise.slack.com/archives/C01PK38VAN8)チャンネルでは、[Release Managers](/handbook/engineering/releases/release-managers/)と [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)チームが、`gitlab-ee` の `dev.gitlab.org` ミラーからのアラートを監視します。フレーキーな障害には対応する必要はありません。実際のコードの破損には、上記の手順に従って対応します。

### 破損した JiHu 検証パイプライン {#broken-jihu-validation-pipelines}

これらは一部のマージリクエストで実行され、時に壊れることがあります。[検証パイプラインが失敗したときの対応](/handbook/finance/jihu-support/jihu-validation-pipelines.html#what-to-do-when-the-validation-pipeline-failed)を参照してください。

## 安定ブランチ {#stable-branches}

任意の GitLab リリースの準備状況を保証するには、安定ブランチでの障害を master ブランチの障害と同様に優先的に対処することが基本となります。
以下を[メンテナンスされている安定ブランチ](https://docs.gitlab.com/policy/maintenance/#maintained-versions)にバックポートすることは、マージリクエスト作成者の責任です:

- [メンテナンスされているバージョン](https://docs.gitlab.com/policy/maintenance/#maintained-versions)に影響するすべての master 破損インシデントをバックポートします。
- 隔離された specs を含むフレーキー障害修正をバックポートします。
- バグでないキャッチアップ是正アクション（spec 修正、ドキュメント変更、パフォーマンス改善など）をバックポートします。

安定ブランチへの変更をバックポートするには、[エンジニアリング Runbook](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/engineers.md#backporting-a-bug-fix-in-the-gitlab-project)に従ってください。

## セキュリティ Issue {#security-issues}

セキュリティ Issue は Security Team によって管理および優先順位付けされます。マイルストーン内のセキュリティ Issue に取り組むようアサインされた場合、
[セキュリティリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md)に従う必要があります。

GitLab でセキュリティ Issue を見つけた場合は、関連する Security Manager および Engineering Manager をメンションする **非公開の Issue** を作成し、`#security` で投稿します。

`gitlab-org/gitlab` に誤ってセキュリティコミットをプッシュした場合は、次のことをお勧めします:

1. 関連するブランチをできるだけ早く削除する
1. `#releases` で Release Manager に通知します。リポジトリ設定の Housekeeping タスクを介してガベージコレクションを実行し、コミットを削除できる可能性があります。

セキュリティリリースのプロセス全体がどう動くかに関する詳細については、[セキュリティリリースのドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md)を参照してください。

## 回帰 {#regressions}

`~regression` は、以前に **動作することが検証された機能** が動作しなくなったことを意味します。
回帰はバグのサブセットです。`~regression` ラベルは、欠陥によって機能が回帰したことを意味するために使用されます。
このラベルは、以前は動作していたものがあり、Engineering および Product Managers から追加の注意が必要であることを示します（スケジュール／再スケジュールのため）。

回帰ラベルは、機能が **これまで動作することが検証されたことがない** 新機能のバグには適用されません。
これらは定義上、回帰ではありません。

回帰には、いつ導入されたかを指定するため、常に `~regression:xx.x` ラベルが付いているべきです。いつ導入されたかが不明な場合は、最新のリリース済みバージョンを追加するべきです。

回帰はできるだけ早く解決すべき高優先度の Issue と見なすべきで、特にユーザーに重大な影響を与える場合はそうです。SaaS デプロイメントなど、時間内に特定されれば、同じマイルストーン内で修正することで、それがそのリリースに含まれることを避けられます。

### MR での ~regression ラベルの使用 {#use-of-the-regression-label-on-mrs}

効率のために、回帰は Issue を作成せず、元の MR のリバートまたはコード変更を通じて MR で修正されることがよくあります。Issue があるかないかに関わらず、MR にも `~regression` と `~regression:xx.x` ラベルを付けるべきです。これにより傾向を正確に測定できます。

## 基本 {#basics}

1. アサインされている Issue から作業を始めます。アサインされている Issue がない場合は、取り組める最も高い優先度と関連ラベルを持つ Issue を見つけて、自分にアサインします。[開始されたマイルストーンの優先度でソートするこのクエリを使用できます](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&milestone_title=Started&assignee_id=None&sort=priority)。自分のチーム用のラベルでフィルタしてください。
1. 何かをスケジュールしたい、または優先順位付けしたい場合は、適切なラベルを適用します（[Issue のスケジューリング](#scheduling-issues)を参照）。
1. 自分の専門分野外の領域に触れる Issue に取り組んでいる場合は、作業を始めてすぐに他のグループの誰かをメンションするようにしてください。これにより、他の人が早期にフィードバックを提供でき、結果として時間を節約できます。
1. 特定の機能、システム、またはグループへのアクセスを必要とする Issue に取り組んでいる場合は、変更がマージされた後にテストするため、ステージングおよび本番へのアクセスを取得する[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Access_Change_Request)を開きます。
1. Issue に取り組み始めるとき:

   - Issue に `workflow::in dev` ラベルを追加します。
   - Issue 内の **Create merge request** ボタンをクリックしてマージリクエスト (MR) を作成します。これにより、Issue のラベル、マイルストーン、タイトルを持つ MR が作成されます。また、作成されたばかりの MR が Issue に関連付けられます。
   - MR を自分にアサインします。
   - 準備が整い、GitLab の[完了の定義](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)を満たし、パイプラインが成功するまで MR に取り組みます。
   - 説明を編集し、**Remove the Draft: prefix from the title** ボタンをクリックします。
   - [Reviewer Roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)からの推奨レビュアーにアサインします。フロントエンド、バックエンド、データベースなど複数のカテゴリのレビュアーがいる場合は、すべてアサインします。あるいは、特にレビューが必要な人にアサインします。アサインするときに、コメントで @ メンションし、レビューを依頼します。
   - （オプション）自分を MR からアサイン解除します。MR を自分にアサインしたままの方が、GitLab ナビゲーションバーの組み込みの MR ボタン／通知アイコンを使って、自分が責任を持つ MR を追跡しやすい人もいます。
   - Issue のワークフローラベルを `workflow::in review` に変更します。複数の人が Issue に取り組んでいる、または複数のワークフローラベルが適用される可能性がある場合は、Issue を分割することを検討します。それ以外は、デフォルトで完了から最も遠いワークフローラベルにします。
   - レビュアーがフィードバックを提供し、作成者にアサインし戻す可能性があります。
   - 作成者はフィードバックに対応し、すべてのレビュアーが MR を承認するまで行き来します。
   - 承認後、各カテゴリのレビュアーは自分をアサイン解除し、各カテゴリの推奨メンテナにアサインします。
   - メンテナレビューが、必要に応じて行き来しながら行われ、開かれているスレッドの解決を試みます。
   - MR を承認する最後のメンテナは、[マージリクエストのマージ](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request)ガイドラインに従います。
   - （オプション）Issue のワークフローラベルを `workflow::verification` に変更し、Issue のすべての開発作業が完了し、デプロイと検証を待っていることを示します。このラベルは、作業がプロダクトによる検証を依頼された場合、または本番でこの検証を実行する必要があると判断した場合に使用します。
   - 変更が検証されたら、ワークフローラベルを `workflow::complete` に変更し、Issue をクローズします。

1. あなたは自分にアサインされた Issue に責任を持ちます。これは、関連付けられているマイルストーンとともに出荷する必要があることを意味します。これができない場合は、マネージャーや他のステークホルダー（Product Manager、依存する Issue に取り組んでいる他のエンジニアなど）に早期に伝達する必要があります。チームでは、チームがこれに責任を持ちます（[チームでの作業](#working-in-teams)を参照）。不確かな場合は、過剰コミュニケーションの側に倒れます。待つよりも、疑問を伝える方が常に良いです。
1. あなた（およびあなたのチームが該当する場合）は、以下に責任を持ちます:

   - 変更が [GitLab Enterprise Edition にきれいに適用される](https://docs.gitlab.com/ee/development/ee_features.html)ことを確実にする。
   - 新機能や修正のテスト、特にそれがマージされ、パッケージ化された直後。
   - [関連する機能または API のドキュメント](https://docs.gitlab.com/ee/development/documentation/workflow.html#developers)の作成
   - 安全なコードの出荷（[セキュリティは全員の責任](#security-is-everyones-responsibility)を参照）。

1. リリース候補がステージング環境にデプロイされたら、変更が意図したとおりに動作することを検証してください。開発環境では発生しなかったバグが、本番環境で現れる問題がありました（例：CE-EE マージの問題が原因の場合）。

[Issue](https://docs.gitlab.com/ee/development/contributing/issue_workflow.html)と [マージリクエスト](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html)に関する一般的なガイドラインを必ず読んでください。

## 開発全体でのワークフローラベルの更新 {#updating-workflow-labels-throughout-development}

チームメンバーは開発全体で Issue を追跡するためにラベルを使用します。これにより、他の開発者、Product Manager、デザイナーが月次イテレーション中に計画を調整できる可視性が得られます。Issue は次のステージをたどるべきです:

- `workflow::in dev`: 開発者は `in dev` ラベルを適用することで、Issue を開発していることを示します。
- `workflow::in review`: 開発者は `in dev` ラベルを `in review` ラベルに置き換えることで、Issue がコードレビューと UX レビュー中であることを示します。
- `workflow::verification`: 開発者は、Issue のすべての開発作業が完了し、デプロイの後、検証されるのを待っていることを示します。
- `workflow::complete`: 開発者は `workflow::complete` ラベルを追加して Issue をクローズすることで、Issue が検証され、すべてが動作することを示します。

ワークフローラベルは私たちの[開発ドキュメント](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/labels/index.md#workflow-labels)と[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)で説明されています。

## チームでの作業 {#working-in-teams}

より大きな Issue や、多くの異なる動く部分を含む Issue では、チームで作業することが多くなります。このチームは通常、[backend engineer](/job-description-library/engineering/backend-engineer/)、[frontend engineer](/job-description-library/engineering/development/frontend/)、[Product Designer](/job-description-library/product/product-designer/)、[product manager](/job-description-library/product/product-manager/)で構成されます。

1. チームは計画されたリリースで Issue を出荷する共有責任を持ちます。
    1. チームが時間内に何かを出荷できないかもしれないと疑う場合、チームはできるだけ早くエスカレーション／他者への通知をするべきです。マネージャーへの通知は良いスタートです。
    1. Issue の小さなイテレーションを出荷する方が、1 つ後のリリースで何かを出荷するよりも一般的に好ましいです。
1. 新しいチーム用に Slack チャンネルを開始することを検討してください。ただし、すべての関連情報を関連 Issue に書くことを忘れないでください。1 つではなく 2 つのスレッドを読まなければならないことは望ましくなく、Slack チャンネルはより広い GitLab コミュニティに開かれていません。
1. Issue がフロントエンドとバックエンドの作業を伴う場合、フロントエンドとバックエンドのコードを別々の MR に分離し、[フィーチャーフラグ](https://docs.gitlab.com/ee/development/feature_flags/index.html)の下で独立してマージすることを検討してください。これにより、フロントエンド／バックエンドのエンジニアが独立して作業し、デリバリーできるようになります。
    1. コードがフィーチャーフラグの後ろでマージされていても、本番準備が整っており、引き続き私たちの[完了の定義](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/contributing/merge_request_workflow.md#definition-of-done)を保持する必要があることに注意することが重要です。
    1. 統合、ドキュメント（該当する場合）、フィーチャーフラグの削除を含む別の MR は、バックエンドとフロントエンドの MR と並行して完了させるべきですが、フロントエンドとバックエンドの MR の両方が master ブランチに入った後にのみマージするべきです。

コラボレーションと効率性の精神で、チームのメンバーはお互いに直接 Issue について議論するのを自由に感じるべきです。ただし、[他者の時間を尊重](/handbook/communication/#be-respectful-of-others-time)してください。

## 設定より規約 {#convention-over-configuration}

アプリケーション設定や `gitlab.yml` に設定値を追加することを避けてください。絶対に必要な場合のみ設定を追加してください。特定の機能を調整するためのパラメータを追加していると気付いたら、立ち止まり、これをどう避けられるかを考えてください。値は本当に必要なのか? 全体で機能する定数は使えないか? 値は自動的に決定できないか? より多くの議論については[設定より規約](/handbook/product/product-principles/#convention-over-configuration)を参照してください。

## 取り組む対象の選択 {#choosing-something-to-work-on}

現在のマイルストーンで最も高い優先度のものから作業を始めます。項目の優先度はリポジトリのラベルの下で定義されていますが、優先度でソートできます。

優先度でソートした後、自分が取り組めて、自分の責任範囲にあるものを選びます。つまり、フロントエンド開発者であれば、`frontend` ラベルがあるものに取り組みます。

非常に正確にフィルタするには、すべての Issue を以下でフィルタできます:

- Milestone: Started
- Assignee: None（Issue がアサインされていない）
- Label: 選択したラベル。たとえば `CI/CD`、`Discussion`、`Quality`、`frontend`、`Platform`
- 優先度でソート

[このリンクを使用して上記のパラメータをすばやく設定できます](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&milestone_title=%23started&assignee_id=None&sort=priority)。自分のチーム用のラベルでフィルタする必要があります。

何に取り組むか迷ったら、リードに尋ねてください。リードは答えを教えてくれます。

## 他のコミュニティメンバーからのコードのトリアージとレビュー {#triaging-and-reviewing-code-from-the-rest-of-the-community}

他のコミュニティメンバーから貢献されたコードをトリアージしレビューし、本番準備ができるよう彼らと作業することは、すべての[開発者の責任](/job-description-library/engineering/backend-engineer/#responsibilities)です。

他のコミュニティメンバーからのマージリクエストには `Community contribution` ラベルを付けるべきです。

コミュニティからのマージリクエストを評価するときは、関連する PM をメンションして、保留中の MR を必ず知らせてください。

これは日々のルーチンの一部であるべきです。たとえば、毎朝、まだ `Community contribution` ラベルが付いていないコミュニティからの新しいマージリクエストをトリアージし、レビューするか、関連する人にレビューを依頼できます。

私たちの[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)に従うようにしてください。

## GitLab.com との作業 {#working-with-gitlabcom}

GitLab.com は GitLab Enterprise Edition の非常に大きなインスタンスです。新しいリリースのリリース候補が動いており、トラフィック量のために多くの Issue を抱えています。GitLab の開発者向けに、本番システムで何が起きているかについてのデータを取得するための社内ツールがいくつかあります:

### パフォーマンスデータ {#performance-data}

GitLab.com には、広範な[モニタリング](https://dashboards.gitlab.com/)が公開されています。これと関連ツールの詳細については、[モニタリングハンドブック](/handbook/engineering/monitoring/)を参照してください。

### エラーレポート {#error-reporting}

- [Sentry](https://sentry.gitlab.net/)は私たちのエラーレポートツールです
- [log.gprd.gitlab.net](https://log.gprd.gitlab.net/)には本番ログがあります
- [prometheus.gitlab.com](https://prometheus.gitlab.com/alerts)には[production team](/handbook/engineering/infrastructure/#production-team)向けのアラートがあります

## Issue のスケジューリング {#scheduling-issues}

GitLab Inc は、取り組む特定の Issue を選別する必要があります。新しいことに取り組むキャパシティに限りがあります。したがって、Issue を慎重にスケジュールする必要があります。

Product Manager は、それぞれの[プロダクト領域](/handbook/product/categories/#devops-stages)内のすべての Issue（機能、バグ、技術的負債を含む）のスケジューリングに責任を持ちます。Product Manager だけが[優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)を決定しますが、他の人も PM の決定に影響を与えるよう奨励されます。UX Lead、Engineering Leads は、物事が時間どおりに完了するよう人々を割り当てる責任を持ちます。Product Manager はこれらの活動には責任を*持ちません*。Product Manager はプロジェクトマネージャーではありません。

方向性 Issue は、各リリースの大きな、優先順位付けされた新機能です。リリースあたりの数は限られており、他の重要な Issue、バグ修正などに取り組むキャパシティを十分に持てるようにしています。

`Seeking community contributions` ラベルが付いている Issue をスケジュールしたい場合は、最初にラベルを削除してください。

スケジュールされた Issue にはチームラベルがアサインされ、少なくとも 1 つの種別ラベルが付いているべきです。

### 何かをスケジュールするリクエスト {#requesting-something-to-be-scheduled}

Issue のスケジュールをリクエストするには、[担当の product manager](/handbook/product/categories/#devops-stages)に尋ねてください。

私たちには、取り組むキャパシティよりも多くの素晴らしい機能リクエストがあります。
何かに取り組めない可能性が十分にあります。
すべての Issue に値する優先度が与えられるよう、適切なラベル（`customer` など）が適用されていることを確認してください。

## プロダクト開発タイムライン {#product-development-timeline}

[![''](/images/engineering/workflow/gitlab-release-timelines.png)](https://gitlab.com/gitlab-org/gitlab/-/snippets/3670861)

チーム（Product、UX、Development、Quality）は、それぞれのワークフローに従って継続的に Issue に取り組みます。
特定の人が特定の期間に Issue のセットに取り組むべきという特定のプロセスはありません。
ただし、チームのワークフローと優先順位付けに情報を提供する特定の期限があります。

毎月の[リリース日](/handbook/engineering/releases/)はリリース月の第 3 木曜日です。**コードカットオフ** はその前の金曜日です。

**次のマイルストーンが始まる**のはコードカットオフの後の土曜日です。

マイルストーンの他のすべての重要な日付はリリース日を基準にしています:

- **マイルストーン開始の 19 日前の月曜日**:
  - 次のリリース（来月リリース）に含まれる Issue のドラフト。
  - エンジニアリング／UX とのキャパシティおよび技術ディスカッションを開始。
  - エラー予算を評価し、機能／信頼性のバランスを決定。
  - Development Engineering Manager は、[クロスファンクショナル優先順位付け](/handbook/engineering/workflow/cross-functional-prioritization/)に従って、`~type::maintenance` Issue の優先順位付け入力を Product Manager に提供します
  - [Quality](/handbook/engineering/workflow/cross-functional-prioritization/)は、[クロスファンクショナル優先順位付け](/handbook/engineering/workflow/cross-functional-prioritization/)に従って、`~type::bug` Issue の優先順位付け入力を Product Manager に提供します
- **マイルストーン開始の 12 日前の月曜日**:
  - Product Manager は、Development EM、Quality、UX からの優先順位付け入力を考慮して、今後のマイルストーンの Issue のプランを作成します。
  - リリーススコープが確定。インスコープの Issue にはマイルストーン `%x.y` がマークされ、`~deliverable` ラベルが適用されます。
  - キックオフドキュメントが更新され、含まれる関連項目が追加されます。
- **マイルストーン開始の 5 日前の月曜日**:
  - リリーススコープが確定。インスコープの Issue にはマイルストーン `%x.y` がマークされ、`~deliverable` ラベルが適用されます。
  - キックオフドキュメントが更新され、含まれる関連項目が追加されます。
- **マイルストーン開始直後の月曜日**: ***キックオフ!*** 📣
  - [カンパニーキックオフ](#kickoff)コールがライブストリームされます。
  - マイルストーンでの開発が始まります。
- **マイルストーン開始から 9 日後の月曜日**:
  - 各ステージ／セクションの開発リードは、quad の[クロスファンクショナルダッシュボードレビュープロセス](/handbook/product/product-processes/cross-functional-prioritization/#cross-functional-dashboard-reviews)でステージ／セクションレベルレビューを調整します。ステージ／セクションレベルレビューが完了した後、VP of Development が CTO、VP of Product、VP of UX とのサマリーレビューを調整します。
- **マイルストーン開始から 11 日後の水曜日**:
  - GitLab Bot が現在のマイルストーンの[グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/) Issue をオープンします。
- **マイルストーンが終わる日の金曜日**:
  - マイルストーンの Issue が完了し、ドキュメントが整い、master にマージされています。
  - リリースに入るには、検証後にフィーチャーフラグをデフォルト OFF からデフォルト ON にフリップする必要があります。[フィーチャーフラグ](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/#including-a-feature-behind-feature-flag-in-the-final-release)を参照してください。
  - マイルストーンコードカットオフ（金曜日）までにマージしても、機能がリリースに含まれることを **保証しません**。[リリースタイムライン](/handbook/engineering/releases/monthly-releases#timelines)を参照してください。
  - すべての関連 Issue に対する個別の[リリースポストエントリー](https://docs.gitlab.com/development/documentation/release_notes/)がマージされます。
  - 日の終わりまでに、マイルストーン `%x.y` が期限切れになります。
- **リリース日の前日付近の水曜日**:
  - [グループレトロスペクティブ Issue](/handbook/engineering/careers/management/group-retrospectives/)が、出荷済みおよび逃したデリバラブルで更新され、チームメンバーが議論にタグ付けされます。
- **リリース日の前日の水曜日**:
  - [マイルストーンクリーンアップ](#milestone-cleanup)が[マイルストーンクリーンアップスケジュール](#milestone-cleanup-schedule)で実行されます。
- **リリース月の第 3 木曜日**: ***リリース日!*** 🚀
  - リリースが本番に出荷されます。
  - リリースポストが公開されます。
- **リリース日の直後の金曜日**:
  - マイルストーンのパッチリリースプロセスが始まります。これには通常のおよびセキュリティパッチリリースが含まれます。
  - マイルストーンの未完了の Issue とマージリクエストはすべて、`~security` Issue を除いて、次のマイルストーンに自動的に移動されます。
- **リリース日直後の水曜日付近**:
  - [プロダクトプラン](/handbook/product/product-processes/#managing-your-product-direction)が、カテゴリエピックや方向性ページを含む、過去および現在のリリースを反映するように更新されます。
- **リリース日後の第 2 月曜日付近**:
  - 緊急性のないセキュリティパッチが[リリース](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development)されます。

追加の期限については[リリースポストのコンテンツレビュー](https://docs.gitlab.com/development/documentation/release_notes/)を参照してください。

GitLab.com へのデプロイは、月次のメジャー／マイナーリリースよりも頻繁である点に注意してください。
詳細は[自動デプロイ移行](https://gitlab.com/gitlab-org/release/docs/blob/21cbd409dd5f157fe252f254f3e897f01908abe2/general/deploy/auto-deploy-transition.md#transition)ガイダンスを参照してください。

## キックオフ {#kickoff}

各リリースの初めに、キックオフミーティングを行い、YouTube に公開ライブストリームします。コールでは、Product Development チーム（PM、Product Designer、エンジニア）が、組織の残りに対して、今後のリリースのスコープに入る Issue を伝達します。コールは[プロダクト領域](/handbook/product/categories/#devops-stages)で構造化されており、各 PM がコールの自分のパートをリードします。

[Product Kickoff ページ](https://about.gitlab.com/direction/kickoff/)は毎月更新され、ライブストリームの内容に沿っています。

## マイルストーンクリーンアップ {#milestone-cleanup}

Engineering Manager は、対応する Product Manager からのガイダンスをもとに、自分のチームのキャパシティ計画とスケジューリングに責任を持ちます。

エンジニアリング全体での衛生を確保するため、期限切れのマイルストーンを持つ未完了の作業（オープン Issue とマージリクエスト）を
次のマイルストーンに移動し、期限切れのマイルストーンには `~"missed:x.y"` ラベルを付けるスケジュールパイプラインを実行します。
さらに、`~"Deliverable"` が付いている場合は常に `~"missed-deliverable"` ラベルを付けます。

これは現在、[自動トリアージ操作](https://gitlab.com/gitlab-org/quality/triage-ops/blob/master/policies/move-milestone-forward.yml)の一部として実装されています。さらに、現在 +1 を超えるマイルストーンを持つ `~Deliverable` ラベル付き Issue からは、`~Deliverable` ラベルが削除されます。

私たちは[リリースとメンテナンスポリシー](https://docs.gitlab.com/ee/policy/maintenance.html)に基づいて、マイルストーン期限切れ後 3 か月間マイルストーンをオープンにしておきます。

マイルストーンクリーンアップは現在、[以下のグループとプロジェクト](https://gitlab.com/gitlab-org/quality/triage-ops/blob/master/.gitlab/ci/missed-resources.yml)に適用されています:

- [GitLab](https://gitlab.com/gitlab-org/gitlab), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/10515/edit)
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/29681/edit)
- [GitLab Gitaly](https://gitlab.com/gitlab-org/gitaly), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/29054/edit)
- [GitLab charts](https://gitlab.com/gitlab-org/charts), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/39481/edit)
- [GitLab QA](https://gitlab.com/gitlab-org/gitlab-qa), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/29050/edit)
- [Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab), [スケジュール](https://gitlab.com/gitlab-org/quality/triage-ops/pipeline_schedules/31880/edit) (現在はマイルストーン移動のみで、ラベル付けは行いません)

マイルストーンクロージャは[Delivery team](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/)の責任範囲です。どの時点でも、アクティブなマイルストーン用にリリースが作成される必要があるかもしれません。それが必要でなくなったら、Delivery team がマイルストーンをクローズします。

### マイルストーンクリーンアップスケジュール {#milestone-cleanup-schedule}

マイルストーンクリーンアップは、マイルストーンの期限日に実行されます。

これらのアクションがオープンな Issue に適用されます:

- オープン Issue とマージリクエストは次のマイルストーンに移動され、
  `~"missed:x.y"` でラベル付けされます。
- `~"Deliverable"` が付いている場合は常に `~"missed-deliverable"` も追加されます。

マイルストーンは、Delivery team が特定のマイルストーンに対してバックポートリリースを作成する必要がなくなったときにクローズされます。

## グループラベルとグループマイルストーンの使用 {#use-group-labels-and-group-milestones}

GitLab で作業するとき（特に GitLab.org グループ）、できる限りグループラベルとグループマイルストーンを使用してください。グループレベルで Issue とマージリクエストを計画する方が簡単で、プロジェクト間でアイデアを自然に公開できます。プロジェクトラベルがある場合、それをグループマイルストーンに昇格できます。これにより、同じ名前のすべてのプロジェクトラベルが 1 つのグループラベルにマージされます。グループマイルストーンの昇格にも同じことが当てはまります。

## 技術的負債 {#technical-debt}

私たちは、技術的負債がコードベースよりも速く成長することを絶対に望みません。これを防ぐため、技術的負債の影響だけでなく、感染のように広がる影響も考慮する必要があります。この問題は時間が経つにつれてどれくらい大きく、どれくらい速くなるか? 悪いコードが将来の機能のためにコピーアンドペーストされる可能性が高いか? 結局のところ、利用可能なリソースは対処すべき技術的負債の量よりも常に少ないのです。

プラットフォームを革新するにつれて、市場と顧客の需要を満たすため、より高い機能速度を維持するために技術的負債を負うという戦略的決定が下される状況が出てきます。この技術的負債の蓄積は、プロダクトとプラットフォームの使いやすさ、セキュリティ、信頼性、スケーラビリティ、アクセシビリティ、および／または可用性への長期的な影響のため、リスクをもたらします。

そのため、技術的負債は蓄積される可能性がありますが、以下を行う必要があります:

1. トリアージし、
1. 優先度と重要度をアサインし、
1. すべての重要度 S1 および S2 のインスタンスについて、アサインされた SLA 内で是正する計画を持ち、
1. 次の 18 か月以内に取り組むことが期待される場合は `~"backlog::prospective"` を、それ以外は `~"backlog::no-commitment"` の[バックログラベル](https://gitlab.com/groups/gitlab-org/-/epics/18639)を割り当てる。

6 か月を超えて延期される場合は、プロダクトおよびエンジニアリングロードマップで検討するべきです。クローズしたい技術的負債 Issue は "*abilities" に影響を与えてはならず、次の 18 か月以内に是正できない理由の正当化（つまり、エンジニアリングロードマップにアクションプランがある）を含む必要があります。

ここでの優先順位付けと意思決定プロセスを助けるため、技術的負債の利率として感染を考えることをお勧めします。これについてインターネット上の[素晴らしいコメント](https://disq.us/p/1ros2o9)があります:

> 5,000 ドルのクレジットカードを先に返さずに 50,000 ドルの学生ローンを返済しないでしょう。それは高い利率のためです。最初に返済するのに最良の借金は、最も高い返済額対繰り返し返済額削減比を持つもの、つまり、全体の返済額を最も減らすものであり、それは通常、最も高い利率のローンです。

技術的負債は、[product management](/handbook/product/product-processes/cross-functional-prioritization/)によって[プロダクトグループ](/handbook/company/structure/#product-groups)の中で[他の技術的決定](/handbook/engineering/development/principles/#prioritizing-technical-decisions)と同様に優先順位付けされます。

グループにまたがる、またはグループ間のギャップに落ちる可能性のある技術的負債については、[レトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)または[Product Leadership team](/handbook/product/product-leaders/product-leadership/)の適切なメンバーに直接、全体で最適化された優先順位付けのために取り上げるべきです。プロダクトグループの外で技術的負債に対処する追加の経路は、[Strategic Priority Codes](/handbook/engineering/workflow/strategic-priority-codes/)と[ワーキンググループ](/handbook/company/working-groups/)です。

## 先送りされた UX {#deferred-ux}

時には、合意された[MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)から逸脱する意図的な決定が下され、ユーザーエクスペリエンスが犠牲になります。これが起こると、Product Designer はフォローアップ Issue を作成し、`Deferred UX` でラベル付けして、後続のリリースで UX ギャップに対処します。

技術的負債と同じ理由で、私たちは先送りされた UX がコードベースよりも速く成長することを望みません。

これらの Issue は、[product management](/handbook/product/product-processes/cross-functional-prioritization/)によって[プロダクトグループ](/handbook/company/structure/#product-groups)の中で[他の技術的決定](/handbook/engineering/development/principles/#prioritizing-technical-decisions)と同様に優先順位付けされます。

[技術的負債](#technical-debt)と同様に、先送りされた UX は[レトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)または[Product Leadership team](/handbook/product/product-leaders/product-leadership/)の適切なメンバーに直接、全体で最適化された優先順位付けのために取り上げるべきです。

## UI の仕上げ {#ui-polish}

UI の仕上げ Issue は、既存のユーザーインターフェースに対する視覚的改善で、主に[Pajamas](https://design.gitlab.com/)ファウンデーションに導かれる UI の美的側面に触れます。UI の仕上げ Issue は一般的に、色、タイポグラフィ、アイコン、スペーシングに関する改善を捉えます。これらの Issue に `UI polish` ラベルを適用します。UI の仕上げ Issue は、機能に対して機能面や動作の変更を加えません。

### UI の仕上げの例 {#examples-of-ui-polish}

- **美的改善** ([例](https://gitlab.com/gitlab-org/gitlab/-/issues/290262)): UI から不要な境界線を取り除く、要素の背景色を更新する、見出し要素のフォントサイズを修正する。
- **テキスト、ボタンなどの位置ずれ** ([例](https://gitlab.com/gitlab-org/gitlab/-/issues/280538)): 何かが壊れているわけではないことが多いものの、これらの改善は UI の仕上げと見なされます。これらはバグと見なすこともできます。
- **UI 要素間の不正確なスペーシング** ([例](https://gitlab.com/gitlab-org/gitlab/-/issues/7905)): 2 つのインターフェース要素が一貫しないスペーシング値（たとえば 8px の代わりに 10px）を使っているとき。技術的負債と見なすこともできます。2 つのインターフェース要素間にゼロのスペースがある場合、それは明らかなバグです。
- **異なるプロダクト領域間の視覚的不一致** ([例](https://gitlab.com/gitlab-org/gitlab/-/issues/296948)): 視覚的不一致は、特定のビュー上にボタンのシリーズがあるときに発生する可能性があります。たとえば、3/4 が Pajamas コンポーネントを使うように移行され、1/4 がまだ非推奨ボタンを使っており、視覚的不一致が生じている場合。これは UI の仕上げと見なされます。

### UI の仕上げではないもの {#what-is-not-ui-polish}

- **体験に関連する機能的不一致**: たとえば、手動アクションでアサイニーを追加するとサイドバーにアサイニーが自動的に表示されるが、手動アクションで Issue にウェイトを追加してもサイドバーにウェイトが自動的に表示されない。これは現在 UI の仕上げとは見なされません。UX Issue と見なされます。
- **システムステータスの可視性の向上**: ステータスインジケータの改善は体験の改善であり、UI の仕上げには分類されません。
  - ステータスアイコンのような純粋に視覚的なものを更新する場合でも、ユーザーが見ているものの意味を改善するため、私たちはそのユーザーの体験を改善しようとしています。

## マージリクエストの動向の監視 {#monitor-merge-request-trends}

オープンマージリクエストは時々アイドル状態（1 か月以上人間によって更新されない）になります。月に 1 回、Engineering Manager は自分のグループのすべての（非 WIP/Draft の）MR を含む[`Merge requests requiring attention triage issue`](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#group-level-merge-requests-that-may-need-attention)を受け取り、これを使って何かアクションが必要か（たとえば作成者／レビュアー／メンテナに軽く催促するなど）を判断します。これにより、マージリクエストが合理的な時間内にマージされるのを助け、これは社内 Tableau ダッシュボードの Open MR Review Time (OMRT) と Open MR Age (OMA) のパフォーマンスインジケータで追跡されます。

オープンマージリクエストには、Engineering Manager が調査し、効率を改善するためのアクションを取る可能性があると示す他のプロパティもあります。1 つの重要なプロパティはスレッド数で、これが高い場合は、MR のプランを更新する必要があるか、同期ディスカッションを検討する必要があることを示すかもしれません。別のプロパティはパイプライン数で、これが高い場合は、MR のプランを再検討する必要があることを示すかもしれません。これらのメトリクスはまだ自動作成されたトリアージ Issue には含まれていません。

## セキュリティは全員の責任 {#security-is-everyones-responsibility}

[セキュリティ](https://about.gitlab.com/security/)は私たちの最優先事項です。私たちの Security Team は、ユーザーのデータを保護し、GitLab を誰もが貢献できる安全な場所にするため、毎日セキュリティのバーを上げています。多くのコード行があり、Security Team はスケールする必要があります。それは[ソフトウェア開発ライフサイクル (SDLC)](https://about.gitlab.com/stages-devops-lifecycle/)でセキュリティを左にシフトすることを意味します。`#security_help` Slack チャンネルでより多くの安全な開発の助けを得られます。

ソフトウェア開発ライフサイクルの早い段階でセキュリティレビュープロセスを始められることは、脆弱性をより早く捉え、コードがマージされる前に特定された脆弱性を緩和することを意味します。あなたは、いつ、どのようにプロアクティブに[アプリケーションセキュリティレビュー](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/)を求めるべきかを知っておくべきです。私たちの[セキュアコーディングガイドライン](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html)にも慣れているべきです。

私たちは各マージ前に明らかなセキュリティ Issue を修正しており、それによってセキュリティレビュープロセスをスケールしています。私たちのワークフローには、すべてのマージリクエストのレビュアーによるチェックと検証が含まれており、これにより開発者はマージ前に特定された脆弱性に対してアクションを取れます。そのプロセスの一部として、開発者は脆弱性の緩和がより高価になる後ではなく、その段階で Security Team に問題を議論するため連絡することも奨励されます。結局のところ、セキュリティは全員の仕事です。私たちの[セキュリティパラダイム](https://about.gitlab.com/direction/application_security_testing/#security-paradigm)も参照してください。

## ラピッドエンジニアリングレスポンス {#rapid-engineering-response}

時には、緊急の Issue に対してエンジニアリングチームが迅速に行動しなければならない機会があります。このセクションでは、エンジニアリングチームがそのような Issue の特定の種類をどう扱うかを説明します。

### スコープ {#scope}

すべてが緊急ではありません。スコープ内とスコープ外のリストは以下を参照してください（網羅的ではありません）。常に、自分の経験と判断を使い、他者とコミュニケーションしてください。

- スコープ内
  - 差し迫ったリリース前の土壇場のリリースブロッキングバグまたはセキュリティパッチ。
  - 高重要度 (severity::1/priority::1) のセキュリティ Issue。[セキュリティ重要度と優先度](/handbook/security/#severity-and-priority-labels-on-security-issues)を参照してください。
  - [優先度と重要度の定義](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/contributing/issue_workflow.md#priority-labels)に基づく、最高優先度・重要度の顧客 Issue。
- スコープ外
  - GitLab.com またはセルフマネージド顧客環境の運用 Issue。これは[オンコール](/handbook/engineering/on-call/)プロセスに該当します。
  - GitLab が公式にサポートするプロダクトではない、自社開発・メンテナンスのツール。
  - 特定の顧客による機能リクエスト。

### プロセス {#process}

1. ラピッドエンジニアリングレスポンスをリクエストする人は、既知のすべての情報を提供して Issue を作成し、能力の最大限で[優先度と重要度](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/contributing/issue_workflow.md#priority-labels) （または[セキュリティ重要度と優先度](/handbook/security/#severity-and-priority-labels-on-security-issues)）を適用します。
1. ラピッドエンジニアリングレスポンスをリクエストする人は、自分のマネージャーおよび[専門分野](/handbook/product/categories/)の Engineering Manager（不在の場合は代理の担当者）に Issue を提起します。
   1. 特定のグループを判断できない場合は、[セクション](/handbook/product/categories/)の Director of Engineering（不在の場合は代理の担当者）に Issue を提起します。
   1. 特定のセクションを判断できない場合は、Sr. Director of Development（不在の場合は代理の担当者）に Issue を提起します。
1. エンジニアリングスポンサー（当該分野の Manager、Director、および／または Sr. Director）は、最良の解決方法を判断するため、迅速対応のタスクフォースとして当該分野のすべてのステークホルダーを招集します:
   1. Engineering Manager
   1. Product Management
   1. QE
   1. UX
   1. Docs
   1. Security
   1. Support
   1. Distribution engineering manager
   1. Delivery engineering manager（Release Management）
1. 必要に応じて[優先度と重要度](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/doc/development/contributing/issue_workflow.md#priority-labels)または[セキュリティ重要度と優先度](/handbook/security/#severity-and-priority-labels-on-security-issues)を調整し、決定された解決に協調的に取り組みます。

## パフォーマンスリファインメント {#performance-refinement}

Development チームと QE チームによって共同で、高インパクトなパフォーマンス Issue について意識を高め、より広いコラボレーションを促進するため、隔週のパフォーマンスリファインメントセッションが開催されます。
高インパクト Issue は、GitLab.com の[サービスレベルまたはエラー予算](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/service-levels-error-budgets)に直接測定可能な影響を持ちます。

### スコープ {#scope-1}

[パフォーマンスリファインメント Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/1233204)がこのリファインメント演習でレビューされます。

### プロセス {#process-1}

1. 隔週のリファインメントに参加するには、Engineering Director に *Performance Refinement* ミーティングの招待を転送してもらってください。これは隔週木曜日の 15:00 UTC です。[ミーティングアジェンダ](https://docs.google.com/document/d/1icG6yrW2oebXz8iXvgfM5JjtMqpsDBCn1v3_VO2ghS0/edit#)はこちらです。
1. ボードに Issue を指名するには:
   1. リファインメントセッションの優先度割り当て評価を助けるため、Issue に[パフォーマンス重要度](/handbook/product-development/how-we-work/issue-triage/#severity)を割り当てます。
   1. Issue が問題、GitLab.com の可用性への（潜在的）影響を明確に説明し、理想的には、問題に対する提案された解決策を明確に定義していることを確認します。
   1. `bug::performance` ラベルを使います。
1. **Open** 列の下にある Issue について:
   1. `Milestone` または `workflow::ready for development` ラベルのいずれかが欠けている場合、Engineering Manager がアサインされます。
   1. Engineering Manager は、優先順位付けと計画のため、アサインされた Issue を Product Manager に持っていきます。
   1. Issue がイテレーションに計画される（`Milestone` と `workflow::ready for development` ラベルに関連付けられる）と、Engineering Manager は自分自身をアサイン解除します。
1. 追加の議論が必要な高インパクト Issue を強調するには、アジェンダ項目を追加してください。
1. コラボレーションのためにゲスト参加者が有用な場合は、招待を転送してください。たとえば、CSM または Support Engineer が今後のトピックに役立つ情報を持っているかもしれません。

## Infradev {#infradev}

infradev プロセスは、SaaS の可用性と信頼性をサポートするために優先的な注意を必要とする Issue を特定するために確立されました。これらのエスカレーションはタイムリーなトリアージと注意が必要であるため、主に非同期であることを意図しています。Issue を通じての主管理に加えて、ギャップ、懸念、重要なトリアージは、[SaaS Availability weekly standup](/handbook/engineering/#saas-availability-weekly-standup)で処理されます。

### スコープ {#scope-2}

[SaaS Health Dashboard](https://saas-health-83948d.gitlab.io/infradev/)が、GitLab アプリケーションにおけるこのプロセスの主な焦点です。`infradev` Issue は以下のサポート対象プロジェクトにも存在し、いずれも [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops)の自動化によって SLO 準拠が監視されています。

- [Production Engineering](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues?label_name[]=infradev&state=opened)
- [Gitaly](https://gitlab.com/gitlab-org/gitaly/-/work_items?label_name%5B%5D=infradev&state=opened)
- [Runway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/work_items?label_name%5B%5D=infradev&state=opened)

オープンな `infradev` Issue を持つその他のプロジェクトは、[SaaS Health Dashboard](https://saas-health-83948d.gitlab.io/)で確認できます。

現在、`infradev` Issue は triage-ops の SLO 監視がまだカバーしていないプロジェクトにも存在します。`infradev` Issue をホストする新しい場所には、Issue を追加する前に SLO 監視を強制するよう triage-ops を設定する必要があります。

### 是正措置との関係 {#relationship-to-corrective-actions}

インシデントから発生するすべてのフォローアップ項目には、自動的に `corrective action` ラベルが付与されます。`infradev` ラベルは、その項目が SaaS の可用性と信頼性をサポートするために緊急に優先された注意を必要とする場合に*追加で*適用されます。すべての是正措置が `infradev` Issue であるわけではありませんが、インシデントから作成されたすべての `infradev` Issue は是正措置でもあります。完全な定義とインシデントから発生した項目をトリアージするプロセスについては、[インシデントフォローアップ Issue](/handbook/engineering/infrastructure-platforms/incident-management/incident-follow-ups/)を参照してください。

### 役割と責任 {#roles-and-responsibilities}

#### Infrastructure {#infrastructure}

1. `Infradev` ラベルを追加して Issue を指名します。
1. [Severity](/handbook/product-development/how-we-work/issue-triage/#severity-slos)と `Priority` を評価し、適切に対応するラベルを適用します。
1. 開発エンジニアリングのトラブルシューティングを助けるため、[できるだけ多くの情報](#a-guide-to-creating-effective-infradev-issues)を提供します。

#### Development {#development}

1. Development Director は、以下の[トリアージプロセス](#triage-process)に従って、定期的に[Infradev Issue をトリアージ](/handbook/engineering/development/#daily-duties-for-engineering-directors)する責任を持ちます。
1. Development Manager も、定期的に[Issue をトリアージ](#triage-process)するよう奨励されます。
1. Development Manager は、対応する Product Manager と協力して、Infradev Issue をリファイン、スケジュール、解決します。
1. 通常、Issue は Infrastructure Department の SRE またはマネージャーによって Infradev Issue として指名されます。開発エンジニア／マネージャーは Infradev Issue を指名することは期待されていません。
   1. ただし、既存の Infradev Issue から新しい Issue をスピンオフする必要がある場合、開発エンジニアとマネージャーも新しい Issue に `Infradev` ラベルを適用できます。
   1. 開発エンジニアとマネージャーが新しい Infradev Issue を分割するときは、新しい Issue に `Severity` と `Priority` ラベルが必要です。ラベルは後続作業の重要性に対応するべきです。

#### Product Management {#product-management}

1. Product Manager は、プロダクトロードマップと Infradev Issue を 1 つの統一されたバックログとして、全体的な優先順位付けを行います。
1. Product Manager は、対応する Development Manager と協力して、Infradev Issue をリファイン、スケジュール、解決します。

### トリアージプロセス {#triage-process}

（主に Development Engineering Management が実施します）

Issue は `infradev` ラベルを含めることでボードに指名され、[infradev ボード](https://gitlab.com/groups/gitlab-org/-/boards/1193197?label_name[]=infradev)に表示されます。

1. Open 列の Issue をレビューします。自分のステージ／グループ／カテゴリ内の Issue だけでなく、明確なアサインが欠けているもの、またはアサインの修正が必要なものも探します。
1. 適切な優先順位付けを検証するため、Issue の[重要度](/handbook/product-development/how-we-work/issue-triage/#severity)をレビューします。
1. Issue が問題、GitLab.com の可用性への（潜在的）影響を明確に説明し、理想的には、問題に対する提案された解決策を明確に定義していることを確認します。
1. `Milestone` または `workflow::ready for development` ラベルが欠けている Issue に Development Manager と Product Manager をアサインします。
   1. Development Manager と Product Manager は、優先順位付けと計画のため、アサインされた Issue で協力します。
   1. Issue がイテレーションに計画される（`Milestone` と `workflow::ready for development` ラベルに関連付けられる）と、Development Manager と Product Manager は自分自身をアサイン解除します。
1. すべての Issue は、適切なワークフローステージに優先順位付けされるべきです。Open（未トリアージ）項目を維持しないことが意図です。

`~infradev ~severity::1 ~priority::1 ~production request` ラベルが適用された Issue は即時の解決を要求します。

トリアージの際、チームは、Issue が infradev の優先順位付けの基準を満たさないと判断した場合、その理由をコメントしインシデントリードにメンションすることで、`~severity::3` および `~severity::4` の Issue から `infradev` ラベルを削除するよう infrastructure platforms team に依頼できます。`~severity::1` または `~severity::2` の Issue から `infradev` ラベルを削除しては**いけません**。

~"breaking change" を必要とする `~infradev` Issue は存在すべきではありません。現在の `~infradev` Issue が破壊的変更を必要とする場合、2 つの Issue に分割するべきです。最初の Issue は、現在の SLO 下で行える即時の `~infradev` 作業であるべきです。2 番目の Issue は、[非推奨ガイダンス](https://docs.gitlab.com/ee/development/deprecation_guidelines/)に従って、次のメジャーリリースで完了する必要がある ~"breaking change" 作業であるべきです。開発 DRI および Infrastructure DRI の両方からの同意が Issue に文書化されるべきです。

Infradev Issue は、月次の[エラー予算レポート](/handbook/engineering/error-budgets/#budget-reporting)にも表示されます。

### レポート {#reporting}

`infradev` Issue の状況は、[Operational Excellence Meeting](https://docs.google.com/document/d/1gSTe2gKNRha-PknIzoBYuwmp73Ipc2blJehje2s7Obc/edit?usp=sharing)ミーティングで共有されます。

### 過去のメトリクス {#historical-metrics}

`infradev` Issue の経時的な過去のトレンドと分布は、[Tableau Infradev Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfradevDashboard?:iid=1)で確認できます。

### 効果的な Infradev Issue を作成するためのガイド {#a-guide-to-creating-effective-infradev-issues}

infradev Issue のトリアージは、非同期で行われることが望ましいです。以下の点は、Infradev Issue が最大の効果を得ることを確実にします。

1. **gitlab-org/gitlab Issue トラッカーで [InfraDev Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=InfraDev)を使用して Issue を作成します。**
1. **問題のスコープと、それが GitLab SaaS プラットフォームにどう影響するかを明確に述べる**。例:
   1. 信頼性 Issue: 問題が GitLab.com で広範な停止または劣化を引き起こす可能性がある。[例](https://gitlab.com/gitlab-org/gitlab/-/issues/244865)
   1. 飽和 Issue: 問題がリソースの過剰利用による飽和の増加、レイテンシ Issue を引き起こす可能性がある。[例](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/2458)
   1. サービスレベル劣化: 問題がサービスレベルモニタリングを劣化させ、GitLab.com の全体的な SLA に影響を与え、SLA 違反を引き起こす可能性がある。[例](https://gitlab.com/gitlab-org/gitlab/-/issues/292732)
   1. インシデントにならないアラート: トリガーされるが、Tier 1 EOC (オンコール SRE) にとって行動可能なインシデントにならないアラートで、サービスを所有するチームのアクションを必要とするもの。例: [ノイジーアラート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/28218#note_3035628793)、チューニングが必要なアラート、まだインシデントではないが今後なる可能性のある成長中の問題を示すアラート、または[もはや存在する必要のない](https://gitlab.com/gitlab-org/gitlab/-/issues/292732)アラート。アラートをトリガーしているサービスを所有するチームは、正しい結果を決定し、アクション（プロアクティブアクション、チューニング、または削除）を取る責任を持ちます。これにより Tier 1 EOC のアラートノイズと注意散漫を減らし、本番インシデントを表すアラートのみを含めると同時に、すべてのアラートが適切に優先順位付けされ対処されることを確保します。
   1. インシデントの診断時間を延長する問題: たとえば GitLab.com の可観測性を劣化させ、ユーザーに影響するエラーやログを飲み込むなどの Issue。これらはインシデントの解消にずっと長くかかり、可用性に影響します。[例](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10933#note_464394760)
   1. 顧客が必要な結果を得るために実質的により多くのトラフィックを生成して補償する原因となる、公開 API の不備。[例](https://gitlab.com/gitlab-org/gitlab/-/issues/232887)
1. **問題の影響を定量化** し、正しい優先順位付けが起こることを助けます。
   1. 可用性へのコストを含めます。[Incident Budget Explorer](https://dashboards.gitlab.net/d/general-incident-budget-explorer/general-incident-budget-explorer?orgId=1)ダッシュボードがここで役立ちます。
   1. 問題のためにアラートが発火した回数、問題への対処に費やした時間、関与した人数を含めます。
   1. Grafana または Kibana からの可視化のスクリーンショットを含めます。
   1. **他者がさらに調査できるよう、スクリーンショットの出所への永久リンクを必ず含めます**。
1. **問題への明確で、曖昧でなく、自己完結的なソリューションを提供します**。アーキテクチャ的な問題、曖昧なソリューション、または未知の根本原因の調査リクエストに `infradev` ラベルを追加しないでください。
1. **スコープが限定されていることを確認します**。各 Issue は単一のステージグループチームによって所有でき、さらに分割される必要がないものであるべきです。シングルタスクのソリューションが最善です。
1. **現実的な重要度が適用されていることを確認します**: [可用性重要度ラベルガイドライン](/handbook/product-development/how-we-work/issue-triage/#availability)をレビューし、適用された重要度が一致することを確認します。不確かでも、すべての Issue に重要度があることを必ず確認します。infradev Issue の重要度は、Issue が未解決のままだった場合の継続的なリスクを反映すべきであり、それを生成したインシデントの重要度とは独立しています。
1. **可能な場合は、所有権ラベルを含めます**。より効果的なトリアージのため。[プロダクトカテゴリ](/handbook/product/categories/)が Issue をアサインする適切なステージグループの判断に役立ちます。
1. **本番インシデント、PagerDuty アラート、Slack アラート、Slack ディスカッションへのリンクをクロスリファレンスします**。トリアージを実行するチームが利用可能なすべてのデータを持つことを確実にするため。
   1. infradev Issue に "Related" リンクを追加することで、[Infradev Status Report](https://gitlab.com/gitlab-org/infradev-reports/-/issues)は各 infradev Issue に関連する本番インシデントの数のカウントを表示し、より簡単で明確な優先順位付けを可能にします。
1. **Issue タイトルが正確、簡潔、明確であることを確認します**。正確に保つために必要であれば、時間とともにタイトルを変更します。
1. **Issue に infradev ラベルを追加することで、責任を引き受け、その Issue のスポンサー／チャンピオンになります**。
1. **元の問題がまだ存在することを検証する方法を提供します**
   1. 時々、infradev Issue はそれ自体で解決したり、関連のない変更の副作用として解決したりします。
   1. infradev Issue 説明で、問題がまだ存在するかをチェックする明確な方法を提供します。
   1. 妥当性をチェックする方法があると、Engineering Manager、Director、Product Manager を含む Infradev トリアージ参加者間の多くの行き来する議論を節約でき、他の未解決 Issue がより早くスケジュールされる余地を作れます。
   1. 理想的には、Grafana クエリまたは ELK クエリへのリンクと、結果を解釈して問題がまだ起きているかを判断する明確な指示を提供します。[この Issue の "Verfication" セクションを例として確認](https://gitlab.com/gitlab-org/gitaly/-/issues/3670#verification)してください。
   1. あるいは、問題を再作成または検証する明確な指示を提供します。
   1. Issue が解決された場合は、以下のプロセスを使用します:
      1. Issue を作成者または適切なオーナーに再アサインし、解決を確認するよう依頼し、同意した場合は Issue をクローズします。そうでなければ、ノートと共にフォローアップし、自分をアサイン解除するべきです。
