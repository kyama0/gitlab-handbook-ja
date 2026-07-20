---
title: "Software Supply Chain Security:Pipeline Security グループ"
description: "GitLab Software Supply Chain Security:Pipeline Security グループのハンドブックページ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-21T06:59:28+09:00"
translator: codex
stale: false
lastmod: "2026-07-20T13:03:25-03:00"
---

## ビジョン

私たちは、ソフトウェアサプライチェーンのプロセスにセキュリティを提供し、パイプラインとジョブへの適切なレベルの可視性を確保します。これにより、組織は CI パイプラインを安全に運用できます。

私たちのチームは、以下のカテゴリーの提供を担当しています:

- [Secrets Management](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/)
- [Artifact Security](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/artifact_security/)

## ミッション

私たちのミッションは、組織に、運用効率が高く非常にセキュアな方法で、大規模に安全なパイプライン運用を可能にする機能を提供することです。

## パフォーマンス指標 {#performance-indicators}

私たちは、[Product Performance Indicator](https://internal.gitlab.com/handbook/company/performance-indicators/product/)を使って、私たちが貢献する価値を測定します。PI プロセスの目標の 1 つは、製品チームとして、将来の成功の前兆である leading indicator を改善するための戦略的・運用的な改善に集中していることを確保することです。
<!-- Our current PI for the Pipeline Security group is still to be determined. [View Sec Section performance indicators (internal handbook)](https://internal.gitlab.com/handbook/company/performance-indicators/product/sec-section/).-->

## チームメンバー

以下の人々が Software Supply Chain Security:Pipeline Security グループの常任メンバーです:

{{< engineering/stable-counterparts role="Software Supply Chain Security:Pipeline Security" >}}

## ステーブルカウンターパート {#stable-counterparts}

私たちの stable counterpart を見つけるには、Pipeline Security の[製品カテゴリーリスト](/handbook/product/categories/#pipeline-security-group)を参照してください。

## JTBD

私たちの現在の JTBD と job statement のリストは[こちら](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/JTBD/#jobs-to-be-done)で閲覧・貢献できます。

## テクノロジー

ほとんどの GitLab バックエンドチームと同様に、私たちはメインの [GitLab アプリ](https://gitlab.com/gitlab-org/gitlab)で Rails での作業に多くの時間を費やします。Docker と Kubernetes への精通も私たちのチームでは役立ちます。

## 共通リンク

- [Issue Tracking Board](https://gitlab.com/groups/gitlab-org/-/boards/364216?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group::pipeline+security)
- [Issue Backlog](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Apipeline%20security)
- [Slack Channel](https://gitlab.slack.com/archives/g_pipeline-security)
- [Group Direction Page](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/)
- [GitLab Unfiltered YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq53VUOvTk3VdXN79PA0SXT)

## 私たちのリポジトリ

- [GitLab](https://gitlab.com/gitlab-org/gitlab)

## 私たちの働き方

### 計画

#### 一般的な計画

私たちのチームは、PM、EM、UX が協働して、少なくとも 3 マイルストーン分の作業を高レベルで計画する trio planning アプローチを使用しています。計画中、PM はチームの全体的な方向性を設定し、EM と協力して、チームの計画が野心的でありながらチームの capacity に基づいて達成可能であることを確保します。これにより、計画の議論中にチェックアンドバランスが確保され、繰り越しを最小限に抑え、ロードマップの機能優先事項とともにエンジニアリングの優先事項に対処することが確保されます。UX は PM と協力して、調査と設計の Issue が実装に間に合うように準備されることを確保します。計画は主にリリース計画 Issue（後述）を介して非同期で行われ、必要に応じて週次 1:1 セッションやチームミーティングで追加の議論を行います。この tripod アプローチにより、依存関係に早期に対処し、Design と Engineering が私たちの製品ロードマップで足並みを揃えることが確保されます。

#### リリース計画 Issue

私たちは[リリース計画 Issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=ReleasePlan)を使って、各マイルストーンでのリリースレベルの優先事項を計画します。この Issue は、成果物、capacity、チームメンバーの休暇などを強調するために使用されます。これにより、チームメンバーとマネージャーは、各リリースで達成しようとしていることを高レベルで把握でき、情報を収集する中心的な場所として機能します。この計画 Issue はマイルストーンが始まると静的になり、マイルストーンへの変更（例: 開始後により高優先度の項目がマイルストーンに追加され、計画された Issue が削除される）を反映するために更新されないことに注意することが重要です。これにより、レトロスペクティブ Issue の一環として、ベースラインの計画と最終リリースを比較できます。

#### Issue の重み付けと洗練

Issue を `workflow::planning breakdown` ステータスから `workflow::ready for development` ステータスに移動できる前に、Issue に 0 より大きい重みが適用されていなければなりません。

私たちは 2 ステップの見積もりプロセスを適用します:

- Phase 1: 高レベル/ラフな見積もり。ここでの私たちの意図は、PM が capacity に応じて複数マイルストーン先に Issue をスケジュールできるようにすることであり、EM が Issue に高レベルの見積もり重みを追加します。その後、PM は Issue を特定のマイルストーンにスケジュールします。
- Phase 2: 洗練/検証された見積もり。エンジニアは、Issue のスケジュールされたマイルストーンに先立つマイルストーンの最初の 2 週間に、見積もり重みを洗練・調整（必要であれば）するために割り当てられます。

このフェーズ分けされたプロセスの意図は、アジャイルな計画を可能にし、各マイルストーンを通じて Issue を調査・洗練するために必要な頻繁なコンテキストスイッチの負担をエンジニアから減らすことです。さらに、これはグループの方向性についてチームに四半期ごとの先読みを提供します。

洗練プロセス中の詳細な実装プランの作成支援については、私たちの [Issue Refinement AI prompt](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/#issue-refinement)を参照してください。

#### Implementation テンプレート

洗練プロセス（Phase 2）中、Issue は一貫性と明確さを確保するために [GitLab Implementation issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Implementation.md)を使用しなければなりません。このテンプレートは以下を強調します:

- **なぜこの作業を行うのか**: 解決される問題の明確な明示。「何を」と「なぜ」の両方を含む
- **非機能要件**: 必要であれば、ドキュメント、フィーチャーフラグ、パフォーマンス、テストなどの項目に関する詳細
- **Implementation Plan**: 詳細な技術的アプローチと実装ステップ
- **Verification Steps**: 実装を検証するための段階的な手順

Issue を洗練する際、エンジニアは以下を行うべきです:

1. Issue の説明で Implementation テンプレートの構造を使う
2. すべてのセクションが関連情報で完成していることを確保する
3. どのエンジニアでもアプローチを理解してすぐに開発を開始できるよう、十分な詳細を提供する
4. 信頼できる唯一の情報源として、必要なすべての情報を（コメントではなく）Issue の説明に含める。コメントは必要に応じて追加のコンテキストのために使うべき。

この標準化されたアプローチは明確さを向上させ、洗練の時間を減らし、すべてのチームメンバーが実装 Issue に対して一貫した期待を持つことを確保します。

#### Issue の重みシステム

Issue の重みは、以下の基準における複雑さに基づいて決定されます:

- コード変更 - 必要なコード変更を行うのはどれだけ難しいか?
- 他チームとのやりとりと依存 - 他チームとのやりとりはどれだけ必要か?
- 本番への道筋 - コード変更を安全に本番環境に投入するために何をする必要があるか（例: フィーチャーフラグ、後方互換性など）?
- パフォーマンスへの影響 - システムで高いパフォーマンスを維持するために何が必要か?

これらの基準に基づき、Issue は以下の重みのいずれかを持てます:

| 重み | 説明  |
| --- | --- |
| 1: Trivial | 非常によく理解されている Issue。正確な解決策がすでに分かっており、単純明快である。変更範囲は非常に隔離されている。<br><br>例は、ドキュメントの更新、単純な回帰、数行のコードで修正できるバグや技術的負債。 |
| 2: Small | よく理解されており、概略の解決策がある Issue。驚きは予想されない。他のチームや人々との調整は不要。<br><br>例は、既存のデータや機能を公開する新しい API エンドポイントのような単純な機能、または通常のバグやパフォーマンス Issue。 |
| 3: Medium | よく理解されており、概略の解決策がある Issue。これらの Issue は、フィーチャーフラグのように、リリースのために外部チームの関与や調整を必要とする。<br><br>例は、バックエンドとフロントエンドのコンポーネントを持つ可能性のある通常の機能、またはほとんどのバグやパフォーマンス Issue。 |
| 5: Large | 複雑であることが分かっている Issue。解決策が概略されている。対処すべき主要なエッジケースが多数ある。驚きが予想される。他のチームとの広範な調整が必要。慎重なリリースプロセスを考慮する必要がある。これらの Issue は、悪影響を与えるパフォーマンスへの影響や壊滅的な障害の可能性がある。また、複数のコンポーネント（backend、frontend、gitaly、workhorse、runner など）に関わるか、コンポーネント間のやりとりを変更する可能性がある。<br><br>例は、後方互換性を必要とする API コントラクトを変更する Issue、安全にリリースするために複数のフィーチャーフラグを必要とするもの。チームが既存の専門知識や知識を持たない Issue、またはチームが通常作業しないコンポーネントの変更を必要とする Issue でもあり得る。 |
| 8: Unknown | 重み 8 の Issue はスケジュールされず、代わりにより小さな Issue に分解するためにさらに調査されるべきである<br><br>例は、よく理解されていない、または容易に再現できないバグ、提案された解決策のないバグや機能。 |

Issue の重みを 1 日以内に判断できない場合は、詳細な調査のために別の[調査 Issue](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#technical-investigation)を作成します。

#### デザインと開発のコラボレーション

Issue がデザイン提案を必要とする場合、私たちは [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/)に従います。デザインと開発は最初から協働して、Issue が私たちの [MVC ガイドライン](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)に従いつつ、価値と使いやすい体験を提供することを確保すべきです。

SSOT を維持するため、デザインと開発には同じ Issue を使うべきです。これにより、両チームの重複作業が減ります。プロダクトデザイナーは [UX Definition of Done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) テンプレートを使って、Issue が製品開発フローのどこに位置するかを明確に示すべきです。これが実践されている例は https://gitlab.com/gitlab-org/gitlab/-/issues/33418/ です。

デザインが完了し、適切なワークフローラベルが適用されたら、デザイン、品質、開発（FE、BE、EM を含む）は、必要であれば、実装のために Issue をさらに分解するために協働すべきです。

#### Technical Investigation

洗練のプロセスの中で、新しい機能が[ブループリント](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/doc/workflow.md)を必要とすることを発見したり、maintainer からのインプットが問題のスコープを縮小し、機能のパフォーマンスを確保し、および/または将来の技術的負債を減らすのに役立つとチームが感じたりすることがあります。これが起きると、チームは調査のための Technical Investigation Issue を作成します。この Issue は 1 人のチームメンバーに割り当てられます。そのチームメンバーは、問題へのアプローチを明確にするドキュメント、概念実証、または他の成果物を作成するために最小限の時間（理想的には 5 営業日未満）を費やすべきです。これは、情報を収集し、他者と解決策を検証し、実行のための計画を提案するのに役立ちます。彼らは、機能の作業を開始する前に、Technical Investigation Issue で概説された具体的な質問に答えます。このプロセスは[スパイク](/handbook/product/product-processes/#spikes)の概念に類似しています。

可能な場合、割り当てられたチームメンバーには、別の開発者と調査と結果の公開でペアを組むために同期の時間をスケジュールすることが奨励されます（Technical Investigation Issue の例 [gitlab#336617](https://gitlab.com/gitlab-org/gitlab/-/issues/336617)）。デフォルトでは Technical Investigation Issue は重み 2 で、開始からデータの提示まで 3 営業日にタイムボックスします。チームメンバーはこの重みおよび/または時間枠を裁量で変更できます。

私たちは、全体的なベロシティと [MR Rate](../engineering/metrics/#merge-request-rate)を維持できるよう、各マイルストーンで割り当てられる technical investigation Issue の数を 2 つに制限します。

#### Issue の分割

Issue が複数のコンポーネント（例: ~frontend、~backend、~documentation）を持つ場合、別々の実装 Issue に分割すべきです。これらの Issue を作成する際、Issue は `Frontend: [Issue title]` または `Backend: [Issue title]` というタイトルにし、一方が他方をブロックしている場合は `blocked by` とマークすべきです。元の Issue は機能に関するすべての議論を保持し、実装 Issue は行われた作業を追跡するために使われます。Issue を分割することで、いくつかのメリットがあります:

1. Issue ごとに DRI が 1 人だけになる。
1. ワークフローラベルとヘルスステータスがより関連性を持つ。
1. より正確に Issue を重み付けできる。
1. 1 つの実装を別の実装のブロッカーとしてマークできる。
1. 各機能グループがどの作業を取り上げられるかが見やすくなる。
1. 複数のマイルストーンにまたがって機能作業をスケジュールできる。
1. チームメンバーが[グループワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4876910?label_name[]=group%3A%3Apipeline%20security)から作業を選択する際、どの Issue がどのコンポーネントに関連するかが単純になる。

#### Error Budget の Issue

ステージグループの [Error Budget](/handbook/engineering/error-budgets/)は、顧客とインフラのパフォーマンスに影響を与えている Issue をグループが特定し、優先順位付けするのを助けるために確立されました。

[Pipeline Security グループ Error Budget ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-pipeline_security/stage-groups-pipeline-security-group-dashboard?orgId=1)は、Pipeline Security グループのエラーバジェット消費に寄与している Issue を特定するために使用されます。

Engineering Manager は、毎週エラーバジェットダッシュボードをレビューして、バジェットを超過しているかどうかを判断し、エラーバジェット消費に（もしあれば）何が寄与しているかを判断し、Product Manager の優先順位付けのために根本原因に対処する Issue を作成します。エラーバジェット消費に対処するために作成された Issue は、適切なラベルを使って作成され、私たちの[技術的負債プロセス](#prioritizing-technical-debt-and-deferred-ux)に従って優先順位付けされるべきです。

#### 技術的負債と Deferred UX の優先順位付け

私たちは、技術的負債と [Deferred UX](/handbook/product/ux/performance-indicators/#deferred-ux)をどう優先順位付けするかについて[会社のガイダンス](/handbook/engineering/development/principles/#prioritizing-technical-decisions)に従います。これを効果的に管理するため、私たちは、取り組む準備ができている技術的負債、Deferred UX、機能メンテナンスの Issue を「~workflow::scheduling」列で追跡することにしました。Product によって優先順位付けされますが、これらの Issue が私たちの将来のベロシティに与える影響によって情報が与えられます。私たちは、各マイルストーンで重みベースの capacity の一定の割合（約 30%）を、技術的負債と deferred UX の返済に充てるよう努めます。私たちはバグを負債とは見なさず、残りの重みベースの capacity の一環として優先順位付けします。

#### マイルストーンの成果物

Engineering Manager は、以下の基準を満たす Issue に `Deliverable` ラベルを適用します:

- ユーザーに見える価値を提供している
- Issue ボードの上部近くにある（高優先度）
- Issue がよく定義されている
- UX DoD が適用されている
- Issue が重み付けされている
- Engineering Manager が、割り当てられたマイルストーンで作業を完了する capacity があると信じている
- チームが Issue をマイルストーンに受け入れ、~"workflow::ready for development" ステータスに移動した

#### 準備完了の定義 {#definition-of-ready}

チームが作業のために Issue をマイルストーンに受け入れる前に、以下の基準を満たさなければなりません:

- ~"type::feature" とラベル付けされた Issue は、よく記述された「なぜ」と顧客の問題を含む
- ~"type::bug" とラベル付けされた Issue は、再現手順を含む
- 必要であれば、デザインがデザインタブにある
- Issue が Software Supply Chain Security:Pipeline Security エンジニアによって取り組まれる場合、[重み](/handbook/engineering/devops/create/source-code/backend/#weighting-issues)を持つ
- デザイン提案が [UX Definition of Done（DoD）](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done)を満たす

#### ブロックの定義 {#definition-of-blocked}

`Canary` で検証できる前に別の Issue が完了することに依存する Issue は blocked と見なされ、`~workflow::blocked` ラベルが適用されるべきです。これらの Issue は、Issue の[関連 Issue セクション](https://docs.gitlab.com/ee/user/project/issues/related_issues.html#adding-a-related-issue)内でも blocked としてマークされるべきです。

#### フォローアップ Issue

私たちは、他の Issue のフォローアップであり、作成されたのと同じマイルストーンで取り組まれている Issue に `~follow-up` ラベルを追加するプロセスを活用しています。チームが作成して `~follow-up` とラベル付けする可能性のある項目の例には、機能のスコープクリープ、コードレビューからのブロックしないリクエスト、追加の UI ポリッシュ、行えるブロックしないリファクタリング、低優先度（P2 以下）のバグ修正などがありますが、これらに限りません。

#### リリース記事チェックリスト Issue

各マイルストーン中、私たちは [Release Post Checklist](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=Release-Post-Issue) Issue を作成します。これは、チームの[リリース記事](https://docs.gitlab.com/development/documentation/release_notes/)の進捗を追跡するのに役立つようチームメンバーが使用します。私たちはチェックリスト Issue を使って、リリース記事のマージリクエストを実装 Issue へのリンク、更新されたドキュメントへのリンクと関連付け、どのエンジニアが各 Issue に取り組んでいるかをリストします。チェックリスト Issue は、このすべての情報を 1 か所で見られる場所を提供します。

### ワークフロー

特に以下に記載がない限り、Software Supply Chain Security:Pipeline Security グループは標準の[エンジニアリング](/handbook/engineering/workflow/)、[製品](/handbook/product-development/how-we-work/product-development-flow/)、[プロダクトデザイン](/handbook/upstream-studios/product-design/workflow/)のワークフローに従います。

#### 新しい作業の開始

Software Supply Chain Security:Pipeline Security のチームメンバーには、[私たちのマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/364216?label_name[]=group%3A%3Apipeline%20security&milestone_title=Started)で **_右から左へ_** 作業を探し始めることが奨励されています。これは _「右から引く（Pulling from the right）」_ としても知られています。チームメンバーがボード上で進められる Issue がある場合は、新しい作業を始める代わりにそれを行うべきです。これには、価値を加えて Issue をボード上で進められると感じる場合、チームメンバーが割り当てられていない Issue のコードレビューを行うことも含まれます。

具体的には、順番に以下を意味します:

- コードが staging、canary、または production に到達したことの検証を行う
- `workflow::in review` の Issue でコードレビューを行う
- `workflow::in development` 列にいる人のブロックを解除する
- そして最後に、`workflow::ready for development` 列から `Deliverable` を選ぶ。

このプロセスの目標は WIP を減らすことです。WIP を減らすことで、私たちは「Start less, finish more（始めることを減らし、完了させることを増やす）」を強いられ、サイクルタイムも短縮されます。エンジニアは、マージリクエストの DRI は **作成者** であることを念頭に置くべきです。チームワークの重要性を強調しているからといって、[DRI が私たちの価値観で奨励されている](/handbook/people-group/directly-responsible-individuals/#dris-and-our-values)という事実を薄めるべきではありません。

##### 取り上げる Deliverable Issue がもうない場合はどうするか?

チームメンバーが「右から引ける」`Deliverable` Issue がもうない場合、チームメンバーは以下のいずれかを行えます:

- `workflow::ready for development` と `SSCS::P2` ラベルの付いた Issue を引き受ける。
- 今後のマイルストーンに備えるのを助けるため、`workflow::planning breakdown` と `needs weight` ラベルの付いた Issue を洗練する。
- 興味のある技術的負債や手の届きやすい Issue に取り組む機会を持つ。これらの Issue は、成果物として計画されるほどの優先度がないことが多いため、エンジニアには capacity があるときにこれらの Issue にプロアクティブに取り組むことが奨励されます。

##### 優先順位

私たちは一連のラベルを使って、マイルストーンで最も優先度の高い Issue を示します。

- 当該マイルストーンの最優先事項は、`Deliverable` と `SSCS::P1` とラベル付けされた Issue です。
- `bug::vulnerability` ラベルの付いた `Deliverable` Issue もある場合、それらは他の成果物よりも最優先されるべきです。
- 私たちは `SSCS::P2` と `SSCS::P3` ラベルを使って、将来のマイルストーンの成果物のために計画された Issue を優先順位付けします。

チームメンバーが特定の Issue を `Deliverable` またはより高い優先度と見なすべきだと考える場合、議論して決定できる Issue で製品とエンジニアリングのマネージャーをピングすることが奨励されます。`Deliverable` ラベルの対象として検討されるには、Issue が重み付きで洗練されている必要があることに注意してください。

#### コードレビュー

コードレビューは、reviewer roulette を使ってレビュアーと maintainer を選ぶ標準のプロセスに従います。ルーレットは **任意** なので、マージリクエストに私たちのグループ外の誰かが深く十分に理解できないかもしれない変更が含まれている場合は、問題を正しく解決することに焦点を当てた予備レビューのために、Software Supply Chain Security:Pipeline Security チームのメンバーを選ぶことが奨励されます。意図は、この選択をエンジニアの裁量に委ねることですが、Software Supply Chain Security:Pipeline Security のチームメンバー仲間が、私たちが実装している機能の影響を理解するのに最も適していることがあるという考えを提起することです。maintainer レビューはその後、品質とコード標準により焦点を当てたものになります。

私たちはまた、[GitLab コードレビュープロセス](/handbook/engineering/workflow/code-review/#reviewer)で説明されているように、チームメンバーが割り当てられていなくても、互いのマージリクエストをレビューする時間を取ることを推奨します。あなたのマージリクエストに、最初のドメインレビュアー以外の誰かを割り当てる必要はありません。このプロセスの拡張は、チームメンバーが割り当てられていないマージリクエストをレビューすることを奨励することを意図しています。新しいチームとして、互いのマージリクエストをレビューすることで、私たちの製品領域への精通を構築でき、機能や修正を実装する際に行う必要のある調査の量を減らすのに役立ち、私たちの [lottery factor](https://en.wikipedia.org/wiki/Bus_factor)を高めます。私たち自身でできるレビューが多いほど、maintainer がマージリクエストを良い形にするために行う作業が少なくなります。

この戦術はまた、コラボレーションを通じて解決策がより良く洗練される可能性のある WIP のマージリクエストで早期レビューを求める環境を作り、チーム全体で知識を共有することも可能にします。

##### UX レビュー

コードレビュープロセスの一環として、MR が（どんなに小さくても）ユーザー向けの変更を行う場合、プロダクトデザイナーによってレビューされるべきです。疑わしい場合、MR が ~UX ラベルの付いた Issue に関連していれば、プロダクトデザイナーを巻き込みます。誰にとってもレビュープロセスを容易にするため、可能な限り MR の説明に変更のスクリーンショットや画面録画を含めてください。

フィーチャーフラグの背後にある機能のイテレーションについては、変更がすぐにユーザー向けにならない場合でも、プロダクトデザイナーを巻き込みます。そうする方が効率的だと感じる場合、プロダクトデザイナーは、フィーチャーフラグ付きの機能が完成に近づくまでレビューを延期することを選択できます。このオプションは、彼らが適切と考えるようにワークロードを優先順位付けし、MR レビュープロセスによって生成されるノイズの一部を避ける柔軟性を与えます。

#### Issue ヘルスステータスの定義

- **On Track** - この Issue が現在のマイルストーンで完了して稼働すると確信している。[ここからは下り坂](https://basecamp.com/shapeup/3.4-chapter-13#work-is-like-a-hill)である。
- **Needs Attention** - 放置すると Issue が目標のリリースを逃すことになる懸念、新たな複雑さ、未回答の質問がある。週内に `On Track` に戻すためにコラボレーションが必要。
  - 項目をこのステータスに移動する場合は、Issue で、項目の停滞を解消して `On Track` ステータスに戻すのを助けられると思う個人をメンションしてください。
- **At Risk** - 現在の状態の Issue は計画されたリリースに間に合わず、今日中に `On Track` に戻すために即座の対応が必要。
  - 項目をこのステータスに移動する場合は、Slack の [#g_pipeline-security](https://gitlab.slack.com/archives/CPANF553J) チャンネルに投稿することを検討してください。項目の停滞を解消して `On Track` ステータスに戻すためにできることがあれば、メッセージに含めるようにしてください。
  - 注: 現在のマイルストーンで項目を軌道に戻すためにできることが何もない可能性があります。その場合は、それに気づき次第できるだけ早くマネージャーに知らせてください。

#### Issue の進捗アップデート

エンジニアが Issue に積極的に取り組んでいる（現在のマイルストーンで ~workflow::"In dev" 以降のワークフロー）か、割り当てられた Issue について共有すべき重要な詳細がある場合、彼らは週末の要約を提供するために、Issue にトップレベルのコメントとしてステータスアップデートを残します。

ステータスコメントには以下を含めるべきです:

- 更新されたヘルスステータス
- ブロッカーがあれば
- 達成されたことについてのメモ
- レビューが始まったかどうか
- エンジニアが有益と感じるその他の情報
- アップデートで EM を cc する

複数の人が Issue に取り組んでいる場合は、これがフロントエンドかバックエンドのアップデートかも含めます。Issue に関連する各 MR のアップデートをアップデートコメントに含めるべきです。エンジニアはこのときに Issue の[ヘルスステータス](https://docs.gitlab.com/ee/user/project/issues/#health-status)も更新すべきです。

このアップデートは特定の形式に従う必要はありません。形式のいくつかのアイデア:

```text
Health status: (On track|Needs attention|At risk)
Notes: (Share what needs to be shared specially when the issue needs attention or is at risk)
```

```text
Health status: (On track|Needs attention|At risk)
What's left to be done:
What's blocking: (probably empty when on track)
```

```text
## Update <date>
Health status: (On track|Needs attention|At risk)
What's left to be done:

#### MRs
1. !MyMR1
1. !MyMR2
1. !MyMR3
```

このアプローチにはいくつかのメリットがあります:

- チームメンバーが、Issue をボード上で進めるために何ができるかをより良く特定できる
- アイデアがあれば他のエンジニアが関与して協働する機会を作る
- ステータスアップデートを残すことは、質問をして議論を始める良いきっかけになる
- より広い GitLab コミュニティが製品開発をより簡単に追える
- レトロスペクションの場合に備えて、Issue が遭遇した障害の履歴がすぐに利用できる
- 製品とエンジニアリングのマネージャーが作業の進捗をより簡単に把握できる

いくつかのメモ/提案:

- 特別な状況を除き、私たちは通常、エンジニアが週に少なくとも 1 回ステータスアップデートを残すことを期待します
- 理想的には、混乱を最小限に抑えるため、ステータスアップデートはエンジニアのワークフローの論理的な部分で行われます
- アップデートが毎週同じ時刻/曜日に行われる必要はありません
- 一般的に、アップデートを残す論理的なタイミングがあれば、それが最適なタイミングです
- エンジニアには、Issue に取り組む中で技術的なメモや考えを集めたり「考えを声に出す」場所として、これらのアップデートを使うことが奨励されます

#### フィーチャーフラグの背後にある変更の監視

[GitLab でフィーチャーフラグを使って開発する](https://docs.gitlab.com/ee/development/feature_flags/)ためにドキュメント化された手順に加えて、Software Supply Chain Security:Pipeline Security のエンジニアは、可能な場合、ダッシュボードとログを使って、変更がインフラに与える影響を監視します。フィーチャーフラグによりエンジニアは本番環境でのコードを完全に制御できるため、変更が本番インフラに与える影響を監視するオーナーシップも取れます。変更を監視するため、私たちはこの[役立つダッシュボードのセレクション](/handbook/engineering/monitoring/#selection-of-useful-dashboards-from-the-monitoring)、特に本番環境での変更を監視するための [Rails controller dashboard](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller)（社内のみ）を使います。私たちが評価する指標には、変更の期待される影響と Issue で指摘された考慮事項に応じて、レイテンシ、スループット、CPU 使用率、メモリ使用率、データベース呼び出しが含まれます。

このプロセスの目標は、変更が本番インフラに与える可能性のある時間を可能な限り小さなウィンドウに減らすことです。このプロセスの副次的なメリットは、私たちの監視ツールへのエンジニアの精通を高め、変更がインフラ指標に関連してどんな結果をもたらすかを予測することについてより多くの経験を積むことです。

#### Issue のクローズ

エンジニアが Issue について [Definition of Done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)が満たされていることを確認した後、それをクローズする責任は彼らにあります。Issue が完了したことを検証する責任のあるエンジニアは、その Issue の DRI であるエンジニア、または Issue の作業を完了する最終マージリクエストの DRI であるエンジニアです。

#### コミュニティ貢献のための Issue

私たちは、コード、ドキュメント、UX など、何らかの形で GitLab に貢献することに興味のあるすべての人にとって歓迎される環境を作りたいと考えています。

[コミュニティ貢献者](https://about.gitlab.com/community/contribute/)が作成したマージリクエストで Issue が解決されている場合、Engineering Manager はより良く追跡するために、関連する Issue を自分自身に割り当てます。Engineering Manager は、マージリクエストプロセスを通じてコミュニティ貢献者をコーチングするのを助けるか、そのコーチングをチームメンバーのエンジニアに委任する責任があります。

### ラベル

#### カテゴリーラベル

Pipeline Security グループは、以下に説明する製品マーケティングカテゴリーをサポートします:

| ラベル                 | |  | | |
| ----------------------| -------| ----|------------| ---|
| `Category:Secrets Management` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secrets+Management) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecrets%20Management) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/) | [Documentation](https://docs.gitlab.com/ee/ci/secrets/index.html) |
| `Category:Artifact Security` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secure+Artifacts) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecure%20Artifacts) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/artifact_security/) | Documentation - TBD |

#### 機能ラベル

| ラベル                 | |  | 説明 |
| ----------------------| -------| ----|------------|
| `CI job token` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=CI%20job%20token) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=CI%20job%20token) | Build 環境で利用可能な `CI_JOB_TOKEN` を取り巻く機能に関連する。 |
| `secrets storage` | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=secrets%20storage) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=secrets%20storage) | Build 環境での、secrets storage プロバイダーとの統合を含む secrets manager の使用を取り巻く機能に関連する。 |
| `external authentication` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=external%20authentication) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=external%20authentication) | Build 環境で利用可能な外部認証用のトークンを取り巻く機能に関連する。 |
| `SLSA` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=SLSA) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=SLSA) | [Supply-chain Levels for Software Artifacts (SLSA)](https://slsa.dev/)の機能に関連する。 |
| `ID tokens` | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=ID%20tokens) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=ID%20tokens) | ID トークン（`id_token`）の使用を取り巻く機能に関連する。ID トークンは GitLab CI/CD ジョブに追加できる JSON Web Token（JWT）である。サードパーティサービスとの OIDC 認証に使用できる。 |

### ミーティング

#### Pipeline Security Group Weekly Meeting

この同期ミーティングは、ブロックとなっているものや、過去 1 週間で注目すべきものについて議論するためのものです。このミーティングはチームの接点として機能します。私たちは毎週このミーティングを 2 セッション持ちます - 1 つは APAC/EMEA タイムゾーン用、もう 1 つは AMER タイムゾーン用です。誰もが非同期で議論から恩恵を受けられるよう、各ミーティングを録画します。

#### Async スタンドアップ

私たちは非同期スタンドアップのために、Slack と統合された [geekbot](https://geekbot.com/) を使います。スタンドアップの目的は、各自が何に取り組んでいるかをチームに知らせ続け、ブロッカーを表面化させて取り除けるようにすることです。スタンドアップボットは火曜日と金曜日のチームメンバーの現地時間午前 10 時に実行され、3 つの質問をします:

1. 前回のアップデートから何をしましたか?
2. 現在何に取り組んでいますか?
3. 進捗をブロックしているものはありますか?

毎週、チームメンバーは現在のマイルストーンに割り当てられた Issue について簡潔なアップデートを共有します。
アップデートは [issue progress updates](#issue-progress-updates)ガイドラインに従ってコメントの形で Issue に共有されます。
Engineering Manager が翌月曜日にグループの週次アップデートを公開できるよう、これらは金曜日（または週の最終営業日）に投稿すべきです。

#### Async 月次レトロスペクティブ

私たちは月次レトロスペクティブのために、[このプロジェクト](https://gitlab.com/gl-retrospectives/sscs/pipeline-security/-/issues)の GitLab Issue を使います。Issue は現在のマイルストーンの終わりごろに自動的に作成されます。月次レトロスペクティブ Issue の目的は、マイルストーンを振り返り、何がうまくいったか、何があまりうまくいかなかったか、何をより良くできるかについて話すことです。
レトロスペクティブ Issue に項目を追加するのにマイルストーンの終わりまで待つ代わりに、私たちはチームメンバーに月を通じてコメントを追加することを奨励しています。毎週金曜日に Issue に項目を追加するのを思い出させる Slack リマインダーが #g_pipeline-security チャンネルにあります。

レトロスペクティブのコメントの分析と実行可能な知見の抽出の支援については、私たちの [Retrospective Summary AI prompt](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/#retrospective-summary)を参照してください。

## 私たちとの協働方法

### Issue について

Pipeline Security グループが取り組む Issue には、グループラベル ~"group::pipeline security" が付きます。DevOps ツールチェーンの SSCS ステージに貢献する Issue には、~"devops::software supply chain security" ラベルが付きます。

特定の対象者がいる場合は、Issue で `@mention` でチームメンバーをタグ付けできます。グループ全体の注意を引く必要がある場合は、`@gitlab-com/pipeline-security-group` をタグ付けすると、チーム全体に通知されます。

## AI プロンプト

私たちは、日々の一般的なタスクを支援するために GitLab Duo で使うように設計された AI プロンプトのコレクションを維持しています。これらのプロンプトは、私たちのチーム固有のワークフローとプロセスに合わせて調整されています。

- [AI Prompts for Pipeline Security Group](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/)
