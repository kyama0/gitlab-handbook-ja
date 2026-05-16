---
title: "エンジニアリングメトリクス"
description: 主要なエンジニアリングメトリクスの概要
upstream_path: /handbook/product/groups/product-analysis/engineering/metrics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-23T15:08:44-08:00"
---

## エンジニアリングアナリティクスダッシュボードインベントリ

Tableau 環境の Engineering プロジェクトにいくつかのダッシュボードが公開されています。以下は作成されたダッシュボードのいくつかの簡単な概要と、それらを見つけられる場所です。

### 一元化されたエンジニアリングメトリクス

[こちら](/handbook/product/groups/product-analysis/engineering/dashboards/)の Centralized Engineering Metrics ページを参照してください。

### Tableau ダッシュボード

公開ダッシュボードは [Production/Engineering/General](https://10az.online.tableau.com/#/site/gitlab/projects/367732) で見つけることができます。これらのダッシュボードは GitLab の Tableau ユーザー集団による一般的な使用に対して安全です。

## 生産性エンジニアリングメトリクス

### 概要

チームがより良く、より速く働けるように、マージリクエスト (MR) をどれだけ効率的に処理できているかを測定する特定のメトリクスを追跡しています。これらのメトリクスは、すべての**プロダクト関連 MR** に焦点を当てており、製品に直接影響を与える貢献を確実に捕捉します。これらのメトリクスは、MR がレビュープロセスを通過するのにかかる時間、レビュアーがどれだけ早く応答するか、そしてチームが全体としてどれだけ貢献しているかについて、明確な絵を提供します。

#### 含まれるもの

* 私たちのメトリクスには、製品に影響を与えるすべての MR が含まれます。
* データセットに含まれる具体的なプロジェクトは [この seed ファイル](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv?ref_type=heads)にリストされています。

この一貫したデータセットを使うことで、メトリクスが製品開発と改善にとって最も重要な作業を反映していることを保証できます。

このセクションでは、私たちが使用する 4 つの重要なメトリクスを説明します — **Review Time to Merge (RTTM)**、**Reviewer First Engagement Time (RFET)**、**Merge Request Rates (MR Rates)**、**Mean Time to Merge (MTTM)**。これらのメトリクスは、私たちがどこでうまくいっていて、どこを改善できるかを強調します。

### Review Time to Merge (RTTM)

[Tableau リンク](https://10az.online.tableau.com/#/site/gitlab/workbooks/2162529/views)

#### 何を意味するか

* これは、マージリクエストが最初にレビュアーに割り当てられてから、コードベースにマージされるまでの時間を測定します。
* レビュアーが実際に関与したかどうかはチェックせず、単に最初のレビュー割り当てから始まる時間を追跡します。

#### なぜ重要か

* RTTM は、私たちのレビュープロセスが全体として効率的であるかを示します。
* RTTM が一貫して高い場合、対処する必要のある遅延やボトルネックがあることを意味している可能性があります。

### Reviewer First Engagement Time (RFET)

[Tableau リンク](https://10az.online.tableau.com/#/site/gitlab/workbooks/2889679/views)

#### 何を意味するか

* これは、レビュアーが MR に割り当てられた後、応答するまでの時間を追跡します。
* 「応答」は、コメントを残す、フィードバックを与える、または MR に対してアクションを取ることを意味する可能性があります。

#### なぜ重要か

* RFET は、レビュアーがどれだけ早く割り当てに関与し始めるかを理解するのに役立ちます。
* 応答性を測定し、タイムリーなコラボレーションを保証する良い方法です。

### Merge Request Rates (MR Rates)

[Tableau リンク](https://10az.online.tableau.com/#/site/gitlab/workbooks/2284105/views)

Merge Request (MR) Rate は、生産性と効率性の測定値です。分子は通常、一連のプロジェクトへのマージリクエストの集まりです。分母は、Workday の `job title specialty` フィールドに基づく人々の集まりです。両方とも経時的 (通常は月次) に追跡されます。[stages.yml ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml)はグループ名の SSOT です。このファイル内のグループ名と Workday の job title specialty フィールド間のマッピングに依存しています。両者の不一致は、チームメンバーまたは MR がカウントされない原因となります。

[この MR Rate トラブルシューティングダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DevelopmentEmbeddedDashboard_17017859046500/MergeRequestRates)を使って、毎月カウントされるチームメンバー数を確認できます。月次のチームメンバー数が予想より少ない場合は、表を参照してどのチームメンバーが欠けているかを確認してください。

job title specialty フィールドを更新するには、[こちら](/handbook/people-group/promotions-transfers/#job-title-specialty-changes)にリストされているガイドラインを参照してください。

#### 何を意味するか

チームのマージリクエスト (MR) の生産性を見るとき、私たちは MR レートを計算するために 2 つの異なる方法を使います:

1. グループラベル別 MR Rate:
   * このメトリクスは、特定のグループラベル (例: 「code review」や「container registry」) と一致するすべての MR を見て、そのグループに関連付けられたチームメンバーの合計数と比較します。チームメンバー情報は Workday の job title specialty フィールドから取得されます。
   * このメトリクスは、グループがどれだけ MR の貢献に積極的かについての**ハイレベルな視点**を与えます。これには、公式チームのメンバーではない人がグループラベルを使った MR も含まれます。これにより、グループの作業に結びついた全体的なアウトプットを反映する、より広い測定値になります。言い換えれば、特定のグループ内でどれだけの作業が行われているかを見る、焦点を絞った方法です。
2. Team MR Rate:
   * このメトリクスは、グループラベルと一致し、かつそのチームのメンバーが作成した MR のみに焦点を当てます。それらの MR を、そのグループに公式にリストされているチームメンバー数で割ります。チームメンバー情報は Workday の job title specialty フィールドから取得されます。
   * このメトリクスは、チーム自体の直接的な貢献を示します。外部の貢献を除き、チームの内部活動についてより明確な絵を与えます。

#### なぜ 2 つのメトリクスを持つのか？

両方のメトリクスを持つことで、生産性を 2 つの角度から見ることができます:

1. 全体像 (グループラベル別 MR Rate):
   * 誰が貢献しているかに関係なく、グループの焦点領域内でどれだけの作業が行われているかを理解するのに役立ちます。
   * 特定のグループラベルにどれだけの注目や努力が払われているかのトレンドを発見するのに有用で、それが公式チーム外の貢献者によるものであってもです。
2. チームの焦点 (Team MR Rate):
   * チーム自体がグループの目標にどれだけ積極的に貢献しているかについての洞察を提供します。
   * チームが期待を満たしているか、外部の貢献者が作業の大部分を担っているかを浮き彫りにします。特定のチームが過重労働になっていますか？ 他のチームはより多くのサポートが必要ですか？

#### 各メトリクスをいつ使うか

* グループラベル別 MR Rate は、すべての貢献者を含むグループの影響の幅広い視点が欲しいときに使用してください。
* Team MR Rate は、チーム自体の具体的な貢献と生産性を評価する必要があるときに使用してください。

### 部門レベルの MR Rate の理解

#### 開発部門 MR Rate

開発部門については、**Development**、**Core Development**、**Expansion** のチームメンバーを含めます。このメトリクスの分子は **製品 MR の総数 (製品に関連するすべての MR)** で、分母はこれらの統合された部署全体の **チームメンバー数** です。より焦点を絞ったメトリクス (例: Team MR Rate) とは異なり、このメトリクスはグループや作成者でフィルタリングしません。製品に影響を与えるすべての MR を単純に追跡し、貢献が見逃されないようにします。

#### 開発部門以外の MR Rate の理解

Support、Core/Internal Infrastructure などの開発部門以外の部署については、MR レートを測定するために異なるアプローチを取ります。これらの部署は、MR がそれらの作業に整合するかを識別するための明確なラベルがないことが多いからです。

これらの部署では、MR レートは **部署内のチームメンバーが作成した MR の数** を、**その部署の総チームメンバー数** で割って計算されます。

* なぜこのように測定するか:
  * 明確なラベルがない:
    * 開発部門とは異なり、これらの部署はどの MR が彼らに属するかを明確に示すグループラベルを持っていません。作成された MR を使うことで、彼らの作業を正確に捕捉します。
  * チーム固有の貢献に焦点:
    * このアプローチは部署内のチームメンバーの貢献を強調し、彼らの生産性についてより明確な絵を提供します。

### Review Rate

[Tableau リンク](https://10az.online.tableau.com/#/site/gitlab/views/AverageReviewTime/ReviewStatsbyUser)

#### 何を意味するか

Review Rate は、特定の時間枠内にチームメンバーが完了するコードレビューの数を測定します。マージリクエストレートはコードベースに統合される変更の数を追跡し、それは重要な生産性測定値ですが、Review Rate は別の重要な生産性メトリクスで、チームメンバーが提供するレビューの記録を保持します。Data チームはマージリクエストのレビュー活動のテーブルを維持します。コードレビューが実施された限り、チームメンバーが `Reviewers` リストに残っていたかどうかに関係なくレビューとしてカウントされます。

#### なぜ重要か

コードレビューはかなりの時間を要することが多く、マージリクエストを完了に移行する重要なステップです。Review Rate をカウントすることで、レビュアーの貢献を認識し、チームメンバーが徹底的なコードレビューを提供することを奨励し、それによって製品の品質を保証します。

### Mean Time to Merge (MTTM)

[Tableau リンク](https://10az.online.tableau.com/#/site/gitlab/workbooks/2372920/views)

#### 何を意味するか

* MTTM は、マージリクエストが作成された時から、コードベースにマージされるまでの時間を追跡します。
* これは、レビュープロセスと MR がマージされる前の追加の遅延を含む、より幅広いメトリクスです。

#### なぜ重要か

* MTTM は、MR のライフサイクル全体にわたる非効率性やボトルネックを捕捉し、コードをマージするのにかかる全体的な時間についての大局的な視点を与えます。
* 高い MTTM は、MR の作成、レビューの割り当て、または実際のマージプロセスなどの領域に問題があることを示唆する可能性があります。

これらのメトリクスを改善するための提案はありますか？ 新しい [Product Data Insights Issue](https://gitlab.com/gitlab-data/product-analytics/-/issues/new) を作成してメモを残してください。

### 作業タイプの分類

Issue、Epic、マージリクエストを分類するために以下のタイプラベルを使用しています。

3 つのタイプ (Bug、Feature、Maintenance) は業界アナリストへのレポートにとって重要です。GitLab にとって、業界全体で広く理解できる形式で費やした努力を伝えることが重要です。私たちはこの[メトリクス](https://10az.online.tableau.com/#/site/gitlab/workbooks/2228822/views)をリーダーシップレポーティングに提供し、サブタイプの分類で精度を改善します。3 つのトップレベルタイプは、サブカテゴリタイプを適用しなくても適用できます。

1. `~"type::bug"`: 出荷されたコードの不具合とそれらの不具合の修正。[機能と不具合](/handbook/product/product-management/#customer-feature-requests)について詳しく読んでください。
   * `~"bug::performance"`: パフォーマンスの不具合や応答時間の劣化
   * `~"bug::availability"`: GitLab SaaS の可用性に関連する不具合。詳しいガイダンスについては[定義](/handbook/product-development/how-we-work/issue-triage/#availability)を参照してください。
   * `~"bug::vulnerability"`: セキュリティ脆弱性に関連する不具合
   * `~"bug::mobile"`: モバイルデバイスで遭遇する不具合
   * `~"bug::functional"`: 機能変更から生じる機能的不具合
   * `~"bug::ux"`: ユーザー体験に有害な予期せず意図しない動作。
   * `~"bug::transient"`: 過渡的な不具合。
   * _注:_ `~"type::bug"` に関連する**新規**ドキュメントや**新規**機能フラグは `~"type::bug"` と見なされます。
1. `~"type::feature"`: 新しい機能、機能変更、改善を提供する努力。[機能計画](/handbook/product/product-processes/cross-functional-prioritization/#features-and-future-plans)について詳しく読んでください。
   * `~"feature::addition"`: GitLab ユーザーに、以前は利用できなかった新しい能力の基礎を与える最初の MVC。[良いユーザー価値、ユーザビリティ、テスト](https://about.gitlab.com/blog/2021/12/01/dont-confuse-these-twelve-shortcuts-with-iteration/)を含みます。たとえば、これらの Issue は一緒に Reviewer 機能の最初の MVC を作成するのに役立ちました: [Create a Reviewers sidebar widget](https://gitlab.com/gitlab-org/gitlab/-/issues/237921), [Show which reviewers have commented on an MR](https://gitlab.com/gitlab-org/gitlab/-/issues/10294), [Add reviewers to MR form](https://gitlab.com/gitlab-org/gitlab/-/issues/216054), [Increase MR counter on navbar when user is designated as reviewer](https://gitlab.com/gitlab-org/gitlab/-/issues/255102)
   * `~"feature::enhancement"`: より有用にする追加機能を加えることで、最初の MVC を洗練する後続のユーザー向け改善。[良いユーザー価値、ユーザビリティ、テスト](https://about.gitlab.com/blog/2021/12/01/dont-confuse-these-twelve-shortcuts-with-iteration/)を含みます。たとえば、これらの Issue は既存の Reviewer 機能を強化します: [Show MRs where user is designated as a Reviewer on the MR list page](https://gitlab.com/gitlab-org/gitlab/-/issues/237922), [Display which approval rules match a given reviewer](https://gitlab.com/gitlab-org/gitlab/-/issues/233736), [Add Reviewers quick action](https://gitlab.com/gitlab-org/gitlab/-/issues/241244)
   * `~"feature::consolidation"`: 単純化のために機能を既存の機能にマージする。たとえば、[Workspace project: (Consolidate Groups and Projects)](https://gitlab.com/groups/gitlab-org/-/epics/6473) と [Combine Top Navigation Menu](https://gitlab.com/groups/gitlab-org/-/epics/5645) はそのような作業の良い例です。
   * _注:_ `~"type::feature"` に関連する**新規**ドキュメントや**新規**機能フラグは `~"type::feature"` と見なされます。
1. `~"type::maintenance"`: 機能でも不具合でもない、維持の努力やキャッチアップの是正改善。これには機能フラグの削除や変更、機能全体の削除、新しい仕様やテストのみを含むマージリクエスト、ドキュメントの更新/変更 (新しいドキュメントは含まない)、長期的なメンテナンス性のための再構造化、安定性、[技術的負債の削減](/handbook/engineering/workflow/#technical-debt)、貢献者の体験の改善、依存関係とパッケージのアップグレードが含まれます。たとえば: [Refactoring the CI YAML config parser](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/15060), [Updating software versions in our tech stack](https://gitlab.com/gitlab-org/ci-cd/codequality/-/issues/22), [Recalculating UUIDs for vulnerabilities using UUIDv5](https://gitlab.com/gitlab-org/gitlab/-/issues/212322)
   * `~"maintenance::refactor"`: 既存のコードまたはドキュメントを単純化または再構造化
   * `~"maintenance::removal"`: 機能が不要になったときの非推奨化と削除。
   * `~"maintenance::dependency"`: 依存関係の更新とバージョンアップグレード
   * `~"maintenance::scalability"`: ユーザー向けの変更やパフォーマンス改善ではなく、GitLab のスケーラビリティを改善するための修正。たとえば、カラムを INT から BIGINT に変更する。
   * `~"maintenance::usability"`: 機能優先順位付けと無関係な、製品のユーザビリティに対する一般的な改善。たとえば、Pajamas との一貫性のための [UI コンポーネント](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80903)や [UI テキスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80457)の更新と[ユーザビリティ改善](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79888)。
   * `~"maintenance::test-gap"`: 機能優先順位付けに含まれなかったテストカバレッジ改善。
   * `~"maintenance::pipelines"`: パイプライン関連の変更。
   * `~"maintenance::workflow"`: Danger、RuboCop、linters、Issue テンプレートなどのエンジニアリングツールの改善。
   * `~"maintenance::performance"`: 特定のページやコンポーネントのロード時間、または特定のプロセスの実行時間など、不具合ではないパフォーマンス改善。
   * `~"maintenance::release"`: リリース管理関連の変更。

これらのラベルが欠けている場合、代わりに `undefined` バケットで追跡されます。
各チームのエンジニアリングマネージャーは、これらのラベルが正しく設定されていることを確認する最終責任を負います。Issue または Epic の目的がこれらのタイプのいずれにも一致しないと感じる場合、`~type::ignore` ラベルを適用してタイプ追跡メトリクスや将来のプロンプトから除外することができます。これは `~Planning Issue` とマークされた Issue に有効です。

作業タイプの分類はコンテキストを必要とする可能性があります。セキュリティ、パフォーマンス、品質を伴う機能を提供する [definition of done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#mr-merge) を満たすすべての作業は、feature 作業として分類されるべきです。たとえば、機能のパフォーマンスニーズを予測し、その機能の導入の一環としてアプリケーション制限を実装する場合、`feature:addition` として分類されるべきです。既存の機能をスケーリングする問題を発見し、アプリケーション制限を実装した場合、その Issue は bug として始まる可能性が高く、関連する MR は `bug:performance` として分類されます。

#### 分類の追加例

以下は、MR の分類について質問が出たときにガイドとなる追加の例です。これらのエッジケースは、カテゴリ間の区別を明確にするように設計されており、各作業が正確に捕捉されることを保証します。これらのシナリオを参照して、標準的な分類にきちんと収まらないかもしれないタスクをどのように分類するかをよりよく理解してください。

* `~"type::feature"`
  * 元の受け入れ基準に含まれなかった、利用可能な機能への追加
  * より大きな機能がまだデフォルトオフの機能フラグの背後にある間に、機能 (不具合の修正を含む) に対して行われた変更
  * API への追加
  * 完全な機能を完了するために作成された反復的な MR
* `~"type::bug"`
  * 元の受け入れ基準の一部であった機能の欠落
* `~"type::maintenance"`
  * 直接的な顧客向けの更新を含まないインフラスケーリングイニシアチブ
  * 依存関係のアップグレード
  * コード変更なしのバージョンの引き上げ
  * ドキュメントのみの更新

### マージされた MR のタイプラベル

%16.7 から、特定の[内部プロジェクト](https://gitlab.com/gitlab-com/Product/-/issues/12779)で、関連する MR がマージされるとタイプラベルがロックされます。詳細は[機能実装 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408676) で確認できます。

### スパイク作業

大きな努力は、作業を完了するための技術的アプローチを特定・研究するためにスパイクを行うことがあります。スパイク作業は以下のガイドラインで分類されます:

1. スパイクが結果となる作業のタイプに基づいてスパイクを分類します。たとえば:
   * 機能を強化するスパイクは `~"feature::enhancement"` と `~"type::feature"` として分類されるべきです
   * 依存関係を更新する、基礎となるライブラリのバージョンをアップグレードするスパイクは `~"maintenance::dependency"` と `~"type::maintenance"` として分類されるべきです
1. スパイクが複数のタイプの作業を結果とする場合、結果となる作業の過半数 (例: 半分以上) のタイプを選択します。

### 追加のガイダンス

#### `~"Community contribution"`

`~"Community contribution"` はトップレベルタイプとしてコミュニティ貢献を追跡することを意図していましたが、現在はファセットラベルのみで、マージリクエストには常に適切なタイプラベルが追加で設定される必要があります。

コミュニティ貢献は GitLab のすべての領域で歓迎されるため、`~"Community contribution"` マージリクエストには任意のタイプラベルを設定できます。

#### `~"security"`

`~"security"` はトップレベルタイプとしてセキュリティ関連のマージリクエストを追跡することを意図していましたが、現在はファセットラベルのみで、マージリクエストには常に適切なタイプラベルが追加で設定される必要があります。

このガイダンスは、`~"security"` を適用するユースケースに基づいて、今後使うべきタイプラベルを考えている場合に役立つかもしれません:

* `~"type::feature"`: 既存の脆弱性を修正していない新しいセキュリティ機能
* `~"type::bug"`: その他のセキュリティ変更

#### `~"documentation"`

`~"documentation"` はトップレベルタイプとしてドキュメントのみのマージリクエストを追跡することを意図していましたが、現在はファセットラベルのみで、マージリクエストには常に適切なタイプラベルが追加で設定される必要があります。

このガイダンスは、`~"documentation"` を適用するユースケースに基づいて、今後使うべきタイプラベルを考えている場合に役立つかもしれません:

* `~"type::feature"`: 新機能のドキュメント (このタイプは通常、新機能を導入するマージリクエストではすでに設定されています)
* `~"type::maintenance"`: その他のドキュメント変更

#### `~"backstage"`

`~"backstage"` は、製品開発をスムーズに実行し続けるために行われた変更であることが意図されていました。時間が経つにつれて、`~"backstage"` は機能前作業にも使われるようになり、不明確で混乱を招くようになりました。`~"backstage"` は <https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/488> の一部として非推奨になりました。これは <https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/483> で削除されます。

このガイダンスは、`~"backstage"` を適用するユースケースに基づいて、今後使うべきタイプラベルを考えている場合に役立つかもしれません:

* `~"type::maintenance"`
  * `~"technical debt"`、`~"railsx.y"`、`~"Architecture Decision"`、`~"security"` ではない `~"dependency update"` などの業界標準とリファクタリング変更
  * 既存の GitLab 機能の仕様への追加または更新
* `~"type::feature"`
  * 新機能のリリースに関連するすべての変更には `~"feature::addition"`
  * 最初の MVC を洗練してより有用かつ使いやすくするユーザー向け改善には `~"feature::enhancement"`
* `~"maintenance::workflow"`: `~"Danger bot"`、`~"static analysis"`、リリースツーリング、Docs ツーリングの変更などのエンジニアリングワークフローの変更
* `~"maintenance::pipelines"`: プロジェクトパイプライン設定の変更

### Stage と Group ラベル

「Everyone can Contribute」の精神で、グループのメンバーが別のグループに貢献することは自然なことです。

親 `devops::xxx` と子 `group::xxx` のラベルが一致しない場合の柔軟性を認めています。たとえば:

* ラベルが人間によって修正された場合。
* 複数のグループにまたがる共有 `frontend`、`backend` コンポーネント、または `type::tooling` 作業に取り組んでいる場合。

グループ間で貢献が発生した場合、エンジニアリングおよびプロダクトマネージャーの裁量で、`group::xxx` ラベルを変更して、どのグループが作業したかを反映させることができます。
また、`devops::xxx` も移動するか、製品エリアを反映してそのままにするかを決定することもできます。
[triage bot](https://gitlab.com/gitlab-org/quality/triage-ops/) の自動ラベリングは既存のラベルを上書きしません。

#### なぜあなたのチームがダッシュボードフィルタにリストされていないか

[stages.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) を、グループ、セクション、ステージ情報の SSOT として使用しています。これをダッシュボードフィルタに表示するためには、[stages.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) ファイルにリストされているものと、ラベルに表示されているものとが一致する必要があります。フィルタにエラーやランダムな値が入らないようにするためにこれを行っています。いくつかの例:

* Code Review グループは stages.yml で `name: Code Review` としてリストされ、関連するラベルは `group::code review` です。これらが一致するため、すべて期待通りに動作します。
* Code Review グループは stages.yml で `name: Code Reviews` としてリストされ、関連するラベルは `group::code review` です。名前が整合しないため、Issue は undefined カテゴリに入ります。

新しいグループを導入するか、グループラベルを変更する場合は、以下を確認してください:

* 過去の Issue に新しいラベルが適用されている
* [stages.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) ファイルが新しいグループで更新されている
* [stages.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) ファイルの名前がグループラベルの名前と一致している

## 製品の一部であるプロジェクト

MR Rate と MR ボリュームの計算では、製品全体の取り組みに貢献するプロジェクトの MR を考慮します。

現在のプロジェクトのリストは、以下のシステムデータベースについて [`gitlab-data/analytics`](https://gitlab.com/gitlab-data/analytics) プロジェクトで識別されています:

| システムデータベース | ファイル |
|-----------------|------|
| GitLab.com      | [`projects_part_of_product.csv`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv) |
| ops.gitlab.net  | [`projects_part_of_product_ops.csv`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product_ops.csv) |
