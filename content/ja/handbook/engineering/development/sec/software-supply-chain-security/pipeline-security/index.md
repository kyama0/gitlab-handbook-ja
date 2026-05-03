---
title: "Software Supply Chain Security:Pipeline Security グループ"
description: "GitLab Software Supply Chain Security:Pipeline Security グループのハンドブックページ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
---

## ビジョン

私たちはソフトウェアサプライチェーンプロセスにおけるセキュリティを提供し、パイプラインとジョブへの適切なレベルの可視性を確保します。これにより、組織は CI パイプラインを安全に運用できます。

私たちのチームは以下のカテゴリの提供に責任を持っています:

- [シークレット管理](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/)
- [アーティファクトセキュリティ](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/artifact_security/)

## ミッション

私たちのミッションは、組織がセキュアなパイプライン運用を可能にする機能を、運用効率よく、大規模で高度なセキュリティを維持しながら提供することです。

## パフォーマンス指標

私たちは [プロダクトパフォーマンス指標](https://internal.gitlab.com/handbook/company/performance-indicators/product/) を使用して、貢献する価値を測定しています。PI プロセスの目標の一つは、プロダクトチームとして、将来の成功の先行指標となる主要指標を改善するための戦略的および運用上の改善に注力することを確保することです。
<!-- パイプラインセキュリティグループの現在の PI はまだ決定中です。[Sec セクションパフォーマンス指標（内部ハンドブック）を参照](https://internal.gitlab.com/handbook/company/performance-indicators/product/sec-section/)。-->

## チームメンバー

以下の方々が Software Supply Chain Security:Pipeline Security グループの常設メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

安定したカウンターパートを確認するには、Pipeline Security [プロダクトカテゴリリスト](/handbook/product/categories/#pipeline-security-group)をご覧ください。

## JTBD

JTBD とジョブステートメントの現在のリストは[こちら](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/JTBD/#jobs-to-be-done)で確認・投稿できます。

## テクノロジー

ほとんどの GitLab バックエンドチームと同様に、私たちはメイン [GitLab アプリ](https://gitlab.com/gitlab-org/gitlab)の Rails での作業に多くの時間を費やしています。Docker と Kubernetes の知識もチームで役立ちます。

## 共通リンク

- [Issue トラッキングボード](https://gitlab.com/groups/gitlab-org/-/boards/364216?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group::pipeline+security)
- [Issue バックログ](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Apipeline%20security)
- [Slack チャンネル](https://gitlab.slack.com/archives/g_pipeline-security)
- [グループ方向性ページ](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/)
- [GitLab Unfiltered YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq53VUOvTk3VdXN79PA0SXT)

## リポジトリ

- [GitLab](https://gitlab.com/gitlab-org/gitlab)

## 作業方法

### 計画

#### 一般的な計画

私たちのチームはソフトウェアエンジニア in Test が割り当てられていないため、Quad-Planning プロセスを使用していません。代わりに、PM、EM、UX が協力して少なくとも3マイルストーン分の作業を高レベルで計画する「三脚（tripod）」アプローチを採用しています。計画中、PM はチームの全体的な方向性を設定し、EM と協力してチームの計画が野心的でありながら、チームのキャパシティに基づいて達成可能であることを確認します。これにより、計画の議論中のチェックアンドバランスが確保され、持ち越しを最小化し、ロードマップの機能優先事項とともにエンジニアリング優先事項が対処されます。UX は PM と協力して、実装に間に合うよう調査とデザイン Issue の準備を整えます。計画は主にリリース計画 Issue（以下参照）を通じて非同期で行われ、週次の 1:1 セッションやチームミーティングでの追加ディスカッションも行われます。この三脚アプローチにより、早い段階で依存関係に対処し、デザインとエンジニアリングがプロダクトロードマップで整合していることを確保できます。

#### リリース計画 Issue

私たちは[リリース計画 Issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=ReleasePlan) を使用して、各マイルストーンのリリースレベルの優先事項を計画します。この Issue は、成果物、キャパシティ、チームメンバーの休暇などを強調表示するために使用されます。これにより、チームメンバーとマネージャーは各リリースで何を達成する予定かを高レベルで確認でき、情報を収集する中央の場所として機能します。重要なのは、この計画 Issue はマイルストーン開始後は静的であり、マイルストーンへの変更（例: 優先度の高いアイテムがマイルストーム開始後に追加され、計画中の Issue が削除される）を反映するために更新されないことです。これにより、振り返り Issue の一部としてベースライン計画と最終リリースを比較できます。

#### Issue の重み付けとリファインメント

Issue を `workflow::planning breakdown` ステータスから `workflow::ready for development` ステータスに移動する前に、Issue に 0 より大きい重みを適用する必要があります。

私たちは2段階の見積もりプロセスを適用します:

- フェーズ1: 高レベル/概算見積もり。ここでの目的は、PM が複数マイルストーン先のキャパシティに従って Issue をスケジュールできるようにするため、EM が Issue に高レベルの推定重みを追加します。次に PM が Issue を特定のマイルストーンにスケジュールします。
- フェーズ2: リファインメント/検証済み見積もり。エンジニアは Issue のスケジュールされたマイルストーンの前の最初の2週間以内に推定重みを調整します（必要に応じて）。

この段階的なプロセスの目的は、アジャイルな計画を可能にし、各マイルストーン全体での Issue の調査とリファインメントに必要な頻繁なコンテキスト切り替えのエンジニアへの負担を軽減することです。さらに、これによりチームにグループの方向性についての四半期先見が提供されます。

リファインメントプロセス中に詳細な実装計画を作成する際の支援については、[Issue リファインメント AI プロンプト](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/#issue-refinement)を参照してください。

#### 実装テンプレート

リファインメントプロセス（フェーズ2）では、一貫性と明確性を確保するため、Issue は [GitLab Implementation Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Implementation.md) を使用する必要があります。このテンプレートは以下を重視しています:

- **なぜこの作業を行うのか**: 解決しようとしている問題の明確な説明（「何を」と「なぜ」の両方を含む）
- **非機能要件**: 必要に応じて、ドキュメント、フィーチャーフラグ、パフォーマンス、テストなどの詳細
- **実装計画**: 詳細な技術的アプローチと実装ステップ
- **確認ステップ**: 実装を確認するためのステップバイステップの指示

Issue をリファインメントする際、エンジニアは以下を実施してください:

1. Issue の説明に実装テンプレートの構造を使用する
2. 関連情報ですべてのセクションを完成させる
3. どのエンジニアでもアプローチを理解し、すぐに開発を開始できるほど詳細な情報を提供する
4. 情報の唯一の情報源として Issue の説明にすべての必要な情報を含める（コメントではなく）。コメントは必要に応じて追加のコンテキストに使用してください。

この標準化されたアプローチにより、明確性が向上し、リファインメント時間が短縮され、すべてのチームメンバーが実装 Issue に対して一貫した期待を持つことができます。

#### Issue 重みシステム

Issue の重みは、以下の基準の複雑さに基づいて決定されます:

- コード変更 — 必要なコード変更をどれほど難しく実施するか？
- 他チームとのインタラクションと依存関係 — 他チームとのインタラクションはどれほど必要か？
- 本番環境への道筋 — コード変更を安全に本番環境に投入するために何が必要か（例: フィーチャーフラグ、後方互換性など）？
- パフォーマンスへの影響 — システムの高パフォーマンスを維持するためには何が必要か？

これらの基準に基づき、Issue は以下のいずれかの重みを持つことができます:

| 重み | 説明 |
| --- | --- |
| 1: 些細 | 非常によく理解されている Issue。正確な解決策はすでに分かっており、単純明快です。変更の範囲は非常に限定的です。<br><br>例: ドキュメント更新、単純な回帰、数行のコードで修正できるバグや技術的負債。 |
| 2: 小 | よく理解されており、解決策の概要がある Issue。驚きは予想されません。他チームや人との調整は不要です。<br><br>例: 既存のデータや機能を公開する新しい API エンドポイントのような単純な機能、または通常のバグやパフォーマンス Issue。 |
| 3: 中 | よく理解されており、解決策の概要がある Issue。これらの Issue は、フィーチャーフラグなど、リリースに外部チームの関与や調整を必要とします。<br><br>例: バックエンドとフロントエンドのコンポーネントを持つ可能性のある通常の機能、またはほとんどのバグやパフォーマンス Issue。 |
| 5: 大 | 複雑であることが分かっている Issue。解決策の概要はあります。対処が必要な重大なエッジケースが多数あります。驚きが予想されます。他チームとの広範な調整が必要です。慎重なリリースプロセスを検討する必要があります。これらの Issue はパフォーマンスへの悪影響や壊滅的な障害の可能性があります。複数のコンポーネント（バックエンド、フロントエンド、Gitaly、Workhorse、Runner など）が関与するか、コンポーネント間のインタラクションを変更する可能性もあります。<br><br>例: 後方互換性を必要とする API コントラクトを変更する Issue、安全にリリースするために複数のフィーチャーフラグを必要とする Issue。チームに既存の専門知識や知識がない Issue、またはチームが通常作業しないコンポーネントの変更を必要とする Issue もあります。 |
| 8: 不明 | 重み 8 の Issue はスケジュールされず、代わりにより小さな Issue に分解するためにさらに調査する必要があります。<br><br>例: よく理解されていないか、容易に再現できないバグ、解決策の提案がないバグや機能。 |

1日以内に Issue の重みを決定できない場合は、詳細な調査のために別途[調査 Issue](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#technical-investigation) を作成してください。

#### デザインと開発のコラボレーション

Issue にデザイン提案が必要な場合、私たちは[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従います。デザインと開発は最初から協力して、Issue が私たちの [MVC ガイドライン](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)に従っていることを確認しながら、価値と使いやすいエクスペリエンスを提供します。

SSOT を維持するため、デザインと開発には同じ Issue を使用する必要があります。これにより、両チームの重複した作業が減少します。プロダクトデザイナーは [UX 完成の定義](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) テンプレートを使用して、Issue がプロダクト開発フローのどの段階にあるかを明確に示す必要があります。実践例は https://gitlab.com/gitlab-org/gitlab/-/issues/33418/ をご覧ください。

デザインが完成し、適切なワークフローラベルが適用されたら、デザイン、品質、開発（FE、BE、EM を含む）が協力して、必要に応じて実装のために Issue をさらに分解します。

#### 技術的調査

リファインメントプロセスで、新機能に[ブループリント](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/doc/workflow.md)が必要であることが判明したり、メンテナーからの意見が問題のスコープ縮小、機能のパフォーマンス確保、または将来の技術的負債の軽減に役立つとチームが感じた場合、チームは調査のための技術的調査 Issue を作成します。この Issue は1人のチームメンバーに割り当てられます。そのチームメンバーは、理想的には5営業日以内に、問題へのアプローチを明確にするドキュメント、概念実証、またはその他の成果物を作成するための最低限の時間を費やす必要があります。これにより情報を収集し、他者と解決策を検証し、実行計画を提案できます。作業開始前に、技術的調査 Issue に概説された具体的な質問に回答します。このプロセスは[スパイク](/handbook/product/product-processes/#spikes)の概念に類似しています。

可能であれば、割り当てられたチームメンバーは別の開発者と調査・結果の公開について同期セッションをスケジュールすることが奨励されます（技術的調査 Issue の例: [gitlab#336617](https://gitlab.com/gitlab-org/gitlab/-/issues/336617)）。デフォルトでは技術的調査 Issue の重みは 2 で、開始からデータ提示まで3営業日でタイムボックスされています。チームメンバーは裁量でこの重みや期間を変更することができます。

各マイルストーンで割り当てる技術的調査 Issue の数を2件に制限して、全体的な速度と [MR レート](../engineering/metrics/#merge-request-rate) を維持します。

#### Issue の分割

Issue に複数のコンポーネント（例: ~frontend、~backend、~documentation）がある場合、別々の実装 Issue に分割する必要があります。これらの Issue を作成する際は、`Frontend: [Issue タイトル]` または `Backend: [Issue タイトル]` というタイトルを付け、一方が他方をブロックしている場合は `blocked by` とマークします。元の Issue は機能に関するすべてのディスカッションを保持し、実装 Issue は行われた作業の追跡に使用します。Issue を分割することで、いくつかのメリットがあります:

1. Issue ごとに DRI が1人だけになります。
1. ワークフローラベルとヘルスステータスがより関連性を持ちます。
1. Issue をより正確に重み付けできます。
1. 一方の実装を他方のブロッカーとしてマークできます。
1. 各機能グループがどの作業を取り上げられるかが分かりやすくなります。
1. 複数のマイルストーンにわたって機能作業をスケジュールできます。
1. チームメンバーが[グループワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4876910?label_name[]=group%3A%3Apipeline%20security)から作業を選択する際に、どの Issue がどのコンポーネントに関連するかが簡略化されます。

#### エラーバジェット Issue

ステージグループの[エラーバジェット](/handbook/engineering/error-budgets/)は、顧客とインフラのパフォーマンスに影響を与えている Issue をグループが特定して優先順位付けするために確立されています。

[Pipeline Security グループのエラーバジェットダッシュボード](https://dashboards.gitlab.net/d/stage-groups-pipeline_security/stage-groups-pipeline-security-group-dashboard?orgId=1)は、Pipeline Security グループのエラーバジェット消費に貢献している Issue を特定するために使用されます。

エンジニアリングマネージャーは、予算を超過しているかどうかを判断し、エラーバジェット消費に貢献しているものがあれば特定し、プロダクトマネージャーの優先順位付けのために根本原因に対処する Issue を作成するために、週次でエラーバジェットダッシュボードを確認します。エラーバジェット消費に対処するために作成された Issue は、適切なラベルを使用して作成し、[技術的負債プロセス](#prioritizing-technical-debt-and-deferred-ux)に従って優先順位付けする必要があります。

#### 技術的負債と延期 UX の優先順位付け

私たちは技術的負債と[延期 UX](/handbook/product/ux/performance-indicators/#deferred-ux) の優先順位付けについて、[会社のガイダンス](/handbook/engineering/development/principles/#prioritizing-technical-decisions)に従います。これを効果的に管理するため、「~workflow::scheduling」列で、作業準備ができている技術的負債、延期 UX、機能メンテナンス Issue をプロダクトによって優先順位付けして追跡します。これらの Issue が将来の速度に与える影響によって告知されます。各マイルストーンの重みによる能力の一定割合（〜30%）を技術的負債と延期 UX の解消に費やすよう努めます。バグは負債とは見なさず、残りの能力による重みの一部として優先順位付けされます。

#### マイルストーン内の成果物

エンジニアリングマネージャーは、以下の基準を満たす Issue に `Deliverable` ラベルを適用します:

- ユーザーに見える価値を提供する
- Issue ボードの上位近くにある（高優先度）
- Issue が明確に定義されている
- UX DoD が適用されている
- Issue に重みが付けられている
- エンジニアリングマネージャーが割り当てられたマイルストーン内で作業を完了するキャパシティがあると確信している
- チームが Issue をマイルストーンに受け入れ、~"workflow::ready for development" ステータスに移動した

#### 準備完了の定義

チームがマイルストーンに Issue を作業として受け入れるには、以下の基準を満たす必要があります:

- ~"type::feature" とラベル付けされた Issue には、明確に述べられた「なぜ」と顧客の問題が含まれている
- ~"type::bug" とラベル付けされた Issue には再現手順が含まれている
- 必要であればデザインタブにデザインがある
- Issue が Software Supply Chain Security:Pipeline Security エンジニアによって作業される場合、[重み](/handbook/engineering/devops/create/source-code/backend/#weighting-issues) が付けられている
- デザイン提案が [UX 完成の定義（DoD）](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) を満たしている

#### ブロック状態の定義

`Canary` 上での検証のために別の Issue の完了を待つ必要がある Issue はブロック状態とみなされ、`~workflow::blocked` ラベルを適用する必要があります。Issue はまた、Issue の[関連 Issue セクション](https://docs.gitlab.com/ee/user/project/issues/related_issues.html#adding-a-related-issue)でブロック状態としてマークする必要があります。

#### フォローアップ Issue

私たちは、同じマイルストーム内で作成され作業される別の Issue のフォローアップとなる Issue に `~follow-up` ラベルを追加するプロセスを採用しています。チームが作成して `~follow-up` とラベル付けする可能性があるアイテムの例には、機能のスコープクリープ、コードレビューからの非ブロッキングリクエスト、追加の UI ポリッシュ、非ブロッキングのリファクタリング、低優先度（P2 以下）のバグ修正などが含まれますが、これらに限りません。

#### リリースポストチェックリスト Issue

各マイルストーム中に、チームの[リリースポスト](/handbook/marketing/blog/release-posts/)の進捗を追跡するためにチームメンバーが使用する[リリースポストチェックリスト](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=Release-Post-Issue) Issue を作成します。チェックリスト Issue は、リリースポストのマージリクエストと実装 Issue へのリンク、更新されたドキュメントへのリンク、各 Issue に取り組んでいるエンジニアのリストを関連付けるために使用します。チェックリスト Issue は、すべての情報を一箇所で確認できる場所を提供します。

### ワークフロー

以下で特別に言及されない限り、Software Supply Chain Security:Pipeline Security グループは標準の[エンジニアリング](/handbook/engineering/workflow/)、[プロダクト](/handbook/product-development/how-we-work/product-development-flow/)、[UX](/handbook/product/ux/product-designer/) ワークフローに従います。

#### 新しい作業の開始

Software Supply Chain Security:Pipeline Security チームメンバーは、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/364216?label_name[]=group%3A%3Apipeline%20security&milestone_title=Started)の**_右から左に_**向かって作業を探し始めることが奨励されています。これは「右から引く」としても知られています。ボード上でチームメンバーが助けられる Issue がある場合、新しい作業を始める代わりにそうすべきです。これには、チームメンバーが割り当てられていない Issue のコードレビューを実施することも含まれます（価値を追加して Issue を前進させることができると感じる場合）。

具体的には、以下の順序で行います:

- コードがステージング、カナリア、または本番環境に到達したことの確認
- `workflow::in review` の Issue に関するコードレビューの実施
- `workflow::in development` 列の誰かのブロック解除
- 最後に、`workflow::ready for development` 列から `Deliverable` を取り上げる

このプロセスの目標は WIP を削減することです。WIP の削減により「より少なく始め、より多く終わらせる」ことを強制し、サイクルタイムも削減されます。エンジニアは、マージリクエストの DRI は**作成者**であることを念頭に置く必要があります。チームワークの重要性を強調しても、[DRI を持つことが私たちの価値観で奨励されている](/handbook/people-group/directly-responsible-individuals/#dris-and-our-values)という事実を薄めるべきではありません。

##### 取り上げられる Deliverable Issue がなくなった場合の対処法

チームメンバーが「右から引く」ことができる `Deliverable` Issue がなくなった場合、以下のいずれかを実施できます:

- `workflow::ready for development` と `SSCS::P2` ラベルが付いた Issue を取り上げる。
- `workflow::planning breakdown` と `needs weight` ラベルが付いた Issue をリファインメントして、今後のマイルストーンの準備をする。
- 関心のある技術的負債や低リスクの Issue に取り組む機会とする。これらの Issue はしばしば Deliverable として計画するほど高い優先度がないため、エンジニアはキャパシティがあるときにこれらの Issue に積極的に取り組むことが奨励されます。

##### 優先度

私たちはマイルストーン内の最高優先度 Issue を示すためにラベルのシリーズを使用しています。

- 特定のマイルストームの最高優先度は `Deliverable` と `SSCS::P1` ラベルが付いた Issue です。
- `bug::vulnerability` ラベルが付いた `Deliverable` Issue がある場合、それらは他の Deliverable より最高優先度とする必要があります。
- `SSCS::P2` と `SSCS::P3` ラベルは将来のマイルストームの Deliverable として計画された Issue の優先順位付けに使用します。

チームメンバーが特定の Issue を `Deliverable` またはより高い優先度と見なすべきだと思う場合、議論・決定できる Issue でプロダクトマネージャーとエンジニアリングマネージャーに ping することが奨励されます。Issue は `Deliverable` ラベルの候補とみなされるために重みを付けてリファインメントされている必要があることに注意してください。

#### コードレビュー

コードレビューは、レビュアーとメンテナーを選択するためにレビュアールーレットを使用する標準プロセスに従います。ルーレットは**オプション**であり、マージリクエストにグループ外の人が深く理解できない可能性がある変更が含まれている場合、問題を正しく解決することに焦点を当てるために、Software Supply Chain Security:Pipeline Security チームのメンバーを予備レビューに選択することが奨励されます。この選択はエンジニアの裁量に委ねられますが、Software Supply Chain Security:Pipeline Security チームの仲間のメンバーが私たちが実装している機能の意味を最もよく理解できる場合があるという考えを提起します。その後、メンテナーレビューは品質とコード標準により焦点を当てます。

また、[GitLab コードレビュープロセス](/handbook/engineering/workflow/code-review/#reviewer)で説明されているように、割り当てられていない場合でも、チームメンバーが互いのマージリクエストをレビューする時間を取ることをお勧めします。マージリクエストに最初のドメインレビュアー以外の誰かを割り当てる必要はありません。このプロセスの補完は、割り当てられていないマージリクエストをレビューするためにチームメンバーを奨励することを目的としています。新しいチームとして、互いのマージリクエストをレビューすることで、私たちのプロダクト領域への親しみを築き、機能や修正の実装時に必要な調査量を減らし、[ロッタリーファクター](https://en.wikipedia.org/wiki/Bus_factor)を高めます。私たち自身でできるレビューが多いほど、メンテナーがマージリクエストを良い状態にするための作業が少なくなります。

この戦術はまた、WIP マージリクエストに対して早期レビューを求める環境を作り、解決策がコラボレーションを通じてより洗練される可能性があり、チーム全体での知識共有も促進します。

##### UX レビュー

コードレビュープロセスの一環として、MR がユーザー向けの変更を行う場合（どんなに小さくても）、プロダクトデザイナーによるレビューが必要です。MR が ~UX ラベルを持つ Issue に関連している場合は、プロダクトデザイナーを参加させてください。レビュープロセスを全員にとって容易にするため、可能な限り MR の説明にスクリーンショットや画面録画を含めてください。

フィーチャーフラグの背後にある機能の反復については、変更がすぐにユーザー向けにならない場合でも、プロダクトデザイナーを参加させてください。プロダクトデザイナーが効率的と判断した場合、機能フラグが付いた機能のレビューを完成に近づくまで延期することを選択することができます。このオプションにより、ワークロードを柔軟に優先順位付けし、MR レビュープロセスによって生じるノイズの一部を避けることができます。

#### Issue ヘルスステータスの定義

- **順調（On Track）** — 現在のマイルストームでこの Issue が完了してライブになることを確信しています。ここからは[下り坂](https://basecamp.com/shapeup/3.4-chapter-13#work-is-like-a-hill)です。
- **要注意（Needs Attention）** — 放置すると Issue が目標リリースに間に合わなくなる懸念、新たな複雑さ、または未解決の質問があります。週内に `順調` に戻るためのコラボレーションが必要です。
  - アイテムをこのステータスに移動する場合は、アイテムが `順調` ステータスに戻れるよう役立てると思われる Issue 内の個人に言及してください。
- **危険（At Risk）** — Issue は現在の状態では計画されたリリースに間に合わず、`順調` に戻すために即時の対応が必要です。
  - アイテムをこのステータスに移動する場合は、Slack の[#g_pipeline-security](https://gitlab.slack.com/archives/CPANF553J) チャンネルへの投稿を検討してください。メッセージには、アイテムが `順調` ステータスに戻るために実施できることを含めるようにしてください。
  - 注意: 現在のマイルストームでアイテムを順調に戻せることが何もない場合があります。その場合は、気づいた時点でできるだけ早くマネージャーに知らせてください。

#### Issue 進捗更新

エンジニアが Issue を積極的に作業している場合（~workflow::"In dev" またはそれより右側の現在のマイルストームワークフロー）、または割り当てられた Issue に共有すべき重要な詳細がある場合、週末のサマリーを提供するためにトップレベルのコメントとしてステータス更新を残します。

ステータスコメントには以下を含める必要があります:

- 更新されたヘルスステータス
- ブロッカー
- 達成したことに関するメモ
- レビューが開始されているかどうか
- エンジニアが有益と感じるその他の情報
- EM を更新に cc する

複数の人が Issue に取り組んでいる場合は、これがフロントエンドかバックエンドの更新かも含めてください。Issue に関連する各 MR の更新は更新コメントに含める必要があります。エンジニアはこの時点で Issue の[ヘルスステータス](https://docs.gitlab.com/ee/user/project/issues/#health-status)も更新する必要があります。

この更新は特定のフォーマットに従う必要はありません。フォーマットのアイデア:

```text
Health status: (On track|Needs attention|At risk)
Notes: (Issue が注意が必要または危険な場合に特に共有が必要な内容)
```

```text
Health status: (On track|Needs attention|At risk)
What's left to be done:
What's blocking: (順調な場合はおそらく空)
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

- チームメンバーは Issue をボード上で前進させるために何ができるかをより適切に特定できます
- 他のエンジニアがアイデアがある場合に参加してコラボレーションする機会を作ります
- ステータス更新を残すことは、質問をして議論を始める良いきっかけになります
- GitLab のより広いコミュニティがプロダクト開発をより容易に追跡できます
- Issue が遭遇した障害の歴史が振り返りのためにすぐに利用可能です
- プロダクトマネージャーとエンジニアリングマネージャーは作業の進捗をより簡単に把握できます

いくつかのメモ/提案:

- 私たちは通常、エンジニアが特別な状況を除いて週に少なくとも1回のステータス更新を残すことを期待します
- 理想的には、ステータス更新はエンジニアのワークフローの論理的な部分で行われ、中断を最小化します
- 更新は毎週同じ時間/曜日に行う必要はありません
- 一般的に、更新を残す論理的な時間がある場合、それが最適な時間です
- エンジニアはこれらの更新を、Issue を解決しながら技術的なメモや考えを収集したり「声に出して考える」場所として使うことが奨励されます

#### フィーチャーフラグの背後にある変更の監視

[GitLab でのフィーチャーフラグを使用した開発](https://docs.gitlab.com/ee/development/feature_flags/)に文書化された手順に加えて、Software Supply Chain Security:Pipeline Security エンジニアは、可能な場合はダッシュボードとログを使用して変更のインフラへの影響を監視します。フィーチャーフラグによりエンジニアが本番環境でのコードを完全に制御できるため、変更が本番インフラに与える影響の監視の責任を取ることも可能になります。変更を監視するために、この[役立つダッシュボードの選択](/handbook/engineering/monitoring/#selection-of-useful-dashboards-from-the-monitoring)、特に本番環境での変更を監視するための [Rails コントローラーダッシュボード](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller)（内部のみ）を使用しています。評価するメトリクスには、変更の予想される影響と Issue で言及された考慮事項に応じて、レイテンシ、スループット、CPU 使用率、メモリ使用率、データベースコールが含まれます。

このプロセスの目標は、変更が本番インフラに与える可能性のある時間を最小限に抑えることです。このプロセスの副次的なメリットは、監視ツールへのエンジニアの親しみを高め、インフラメトリクスに関連した変更の結果を予測する経験を積むことです。

#### Issue のクローズ

エンジニアが Issue の[完成の定義](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)が満たされていることを確認した後、Issue をクローズする責任を持ちます。Issue が完了したことを確認する責任があるエンジニアは、その Issue の DRI、または Issue の作業を完成させる最終マージリクエストの DRI です。

#### コミュニティ貢献のための Issue

私たちは、コード、ドキュメント、UX、その他を問わず、GitLab への貢献に興味を持つすべての人に対して歓迎的な環境を作りたいと考えています。

[コミュニティコントリビューター](https://about.gitlab.com/community/contribute/)によって作成されたマージリクエストで Issue が解決されている場合、エンジニアリングマネージャーが関連する Issue を自身に割り当てて、より良く追跡します。エンジニアリングマネージャーはコミュニティコントリビューターにマージリクエストプロセスを通じてコーチングを行うか、チームメンバーエンジニアにそのコーチングを委任する責任を負います。

### ラベル

#### カテゴリラベル

Pipeline Security グループは以下に記載されているプロダクトマーケティングカテゴリをサポートしています:

| ラベル | | | | |
| ----------------------| -------| ----|------------| ---|
| `Category:Secrets Management` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secrets+Management) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecrets%20Management) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/) | [Documentation](https://docs.gitlab.com/ee/ci/secrets/index.html) |
| `Category:Artifact Security` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secure+Artifacts) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecure%20Artifacts) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/artifact_security/) | Documentation - TBD |

#### 機能ラベル

| ラベル | | | 説明 |
| ----------------------| -------| ----|------------|
| `CI job token` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=CI%20job%20token) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=CI%20job%20token) | ビルド環境で使用可能な `CI_JOB_TOKEN` に関連する機能に関係します。 |
| `secrets storage` | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=secrets%20storage) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=secrets%20storage) | ビルド環境でのシークレットストレージプロバイダーとの統合を含むシークレットマネージャーの使用に関連する機能に関係します。 |
| `external authentication` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=external%20authentication) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=external%20authentication) | ビルド環境で使用可能な外部認証用トークンに関連する機能に関係します。 |
| `SLSA` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=SLSA) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=SLSA) | [Supply-chain Levels for Software Artifacts (SLSA)](https://slsa.dev/) の機能に関係します。 |
| `ID tokens` | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=ID%20tokens) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=ID%20tokens) | ID トークン（`id_token`）の使用に関連する機能に関係します。ID トークンは GitLab CI/CD ジョブに追加できる JSON Web Token（JWT）です。サードパーティサービスへの OIDC 認証に使用できます。 |

### ミーティング

#### Pipeline Security グループ週次ミーティング

この同期ミーティングは、過去1週間でブロックされている事項や注目すべき事項について話し合うためのものです。このミーティングはチームのタッチポイントとして機能します。このミーティングは週に2セッション行います — APAC/EMEA タイムゾーン向けと AMER タイムゾーン向けです。すべての人が非同期でディスカッションの恩恵を受けられるよう、各ミーティングを録画します。

#### 非同期スタンドアップ

非同期スタンドアップには Slack と統合された [geekbot](https://geekbot.com/) を使用します。スタンドアップの目的は、全員が何に取り組んでいるかをチームに知らせ、ブロッカーを表面化して解消することです。スタンドアップボットは火曜日と金曜日のチームメンバーの現地時間の午前10時に実行され、3つの質問をします:

1. 前回の更新から何をしましたか？
2. 現在何に取り組んでいますか？
3. 進捗を妨げているものはありますか？

週次ベースで、チームメンバーは現在のマイルストームに割り当てられた Issue の簡単な更新を共有します。
更新は、[Issue 進捗更新](#issue-progress-updates)ガイドラインに従ってコメントの形で Issue で共有されます。
エンジニアリングマネージャーが翌月曜日にグループの週次更新を公開できるよう、
金曜日（または週の最後の作業日）に投稿する必要があります。

#### 非同期月次振り返り

月次振り返りには[このプロジェクト](https://gitlab.com/gl-retrospectives/sscs/pipeline-security/-/issues)の GitLab Issue を使用します。Issue は現在のマイルストームの終わり近くに自動的に作成されます。月次振り返り Issue の目的は、マイルストームを振り返り、うまくいったこと、うまくいかなかったこと、改善できることについて話し合うことです。
振り返り Issue に月末まで待って項目を追加するのではなく、チームメンバーが月を通じてコメントを追加することを奨励します。毎週金曜日に #g_pipeline-security チャンネルに Slack リマインダーがあり、Issue に項目を追加するよう促します。

振り返りコメントの分析とアクションアイテムの抽出に関する支援については、[振り返りサマリー AI プロンプト](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/#retrospective-summary)を参照してください。

## 私たちとの協力方法

### Issue について

Pipeline Security グループが取り組む Issue には `~"group::pipeline security"` のグループラベルが付いています。DevOps ツールチェーンの SSCS ステージに貢献する Issue には `~"devops::software supply chain security"` ラベルが付いています。

特定の人に対応する場合は Issue で `@mention` でタグ付けできます。グループ全体の注意を引く必要がある場合は、チーム全体に通知する `@gitlab-com/pipeline-security-group` をタグ付けできます。

## AI プロンプト

私たちは GitLab Duo で使用するために設計された AI プロンプトのコレクションを維持しており、日常的なタスクの支援に活用しています。これらのプロンプトはチームの特定のワークフローとプロセスに合わせています。

- [Pipeline Security グループの AI プロンプト](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/)
