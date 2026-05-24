---
title: "Compliance グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/compliance/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-20T09:32:02-07:00"
---

## ミッション

Compliance グループのミッションは、GitLab 内で組織のコンプライアンス態勢への可視性を提供し、組織が非準拠の活動を特定し、コンプライアンス要件の強制範囲を定めるためのツールを提供することです。

## 私たちが取り組むこと

- 私たちは [Group Direction ページ](https://about.gitlab.com/direction/software_supply_chain_security/compliance/)を使って、グループの高レベルの目標と方向性を説明しています。
- 高レベルの目標と方向性から、優先順位付けされたエピックのリストに絞り込み、[Tactical Priorities](https://about.gitlab.com/direction/software_supply_chain_security/compliance/tactical-priorities.html)で最新に保つよう努めています。
- この優先順位付けされたリストは、各マイルストーンの計画時に使用します。各マイルストーンには、私たちの [Planning Epic](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/2)内に独自の Issue があります。
  - マイルストーンの計画へのインプットとして高レベルの目標と方向性を使うことに加えて、Compliance Product Manager は Sales、顧客、社内ステークホルダー（ドッグフーディング）からのインプットを考慮して、各マイルストーンに追加される Issue の優先順位を決定します。
- 私たちはまた、グループ内の戦略的イニシアチブの優先順位付けを助けるために [OKR](/handbook/company/okrs/) を使います。計画には Issue を使い、それらを [OKR Epic](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/4)にまとめます。

## FY25 のトップ優先事項

- FY25 の最大の優先事項は、Compliance Frameworks と Security Policies の統合を継続することです。Compliance Center 内の能力を拡張し、Compliance Pipelines の削除に向けて進めます。
- Standard/Check をさらに追加して Adherence Report の拡張を継続すると同時に、コンプライアンス態勢のもう一方の側面（強制 vs 違反）として違反を統合します。
- 私たちはまた、カスタマイズ可能なチェックと、顧客にとって最優先の standard の構築も検討しています。
- audit event の DB として ClickHouse の完全な使用をロールアウトします。GitLab プラットフォーム全体のコンプライアンスへのより良い知見を提供する機能のブロックを解除します。
- 新しい Streaming Audit Event の宛先タイプとフィルタリングを追加する標準的な方法を提供し、より多くのサードパーティ統合とフィルタリングオプションを通じて streaming audit event の提供を増やします。
- Compliance グループ外からの貢献が製品全体に audit event を追加できるようにするプラットフォームを作成します。これには、現在開いているすべての audit event Issue の計画と標準化、簡単に利用できるチュートリアルとガイドラインの作成、そして可能であれば audit event デー（pajamas migration デーに似たものだがバックエンド向け）の作成が含まれます。

## 私たちの働き方

- 私たちの [GitLab バリュー](/handbook/values/)に従います。
- 透明性を持って: ほぼすべてが公開されており、可能な限りミーティングを録画/ライブストリームします（[リンク](#links)を参照）
- 私たちは取り組みたいことに取り組む機会を得ます。
- 誰もが貢献できる、サイロはありません。
  - 目標は、製品がエンジニアリングとデザインに、最初から方向性と Issue の定義に関わる機会を与えることです。
- 私たちはスタンドアップチャンネルで、任意の非同期デイリースタンドアップを行います:
  - Software Supply Chain Security:Compliance [#g_sscs_compliance_updates](https://gitlab.slack.com/archives/C013E163FD0)

### コードレビュー

このグループはアプリケーションの[広範囲に影響を及ぼす](/handbook/engineering/devops/#reducing-the-impact-of-far-reaching-work)コンポーネントに取り組むため、本番インシデントのリスクを減らすために以下の追加ステップを取ります:

1. チーム全体でより多くの組織的知識を構築するため、私たちはマージリクエストを最初のレビューのために別の Compliance チームメンバーに割り当てるよう努めます。
1. Compliance 関連のマージリクエストは [Compliance Engineer](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/engineering/-/group_members?with_inherited_permissions=exclude) によるレビューを必要とします。これは GitLab の `CODEOWNERS` 機能を使ってガードされています。

#### フィーチャーフラグ

1. Compliance のマージリクエストは、リスクを減らすのが理にかなう場合にフィーチャーフラグを使用します。私たちは [Feature Flag Lifecycle](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/) にできるだけ忠実に従います。長期にわたる、または複数のマージリクエストにまたがる開発については、すべての作業が専用のフィーチャーフラグの背後にとどまるべきです。このアプローチにより、増分的な変更を安全にマージでき、不完全な機能を本番ユーザーに対してオフに保てます。

1. フィーチャーフラグが使用される場合、[feature flag rollout plan](/handbook/engineering/workflow/development-processes/rollout-plans/) Issue を作成し、適切なエピックに追加すべきです。必要であれば Support（`#support_gitlab-com`）にも[通知](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L94)されます。

1. 機能がテストの準備ができたら、directly responsible individual（DRI）はステージング環境でフィーチャーフラグを有効にし、Slack とロールアウト Issue へのコメントを通じて、関連するステークホルダー（PM、EM、デザイナー、より広いチーム）に利用可能であることを発表すべきです。これにより、迅速なフィードバックと徹底的な検証が確保され、全員が情報を共有できます。

1. ステージングで機能を検証した後、ロールアウトプランに従って本番環境でフィーチャーフラグを有効にします。何か問題が生じた場合、フィーチャーフラグを無効にすることで、コードを元に戻す必要なく迅速なロールバックメカニズムを提供できます。この制御されたアプローチは、新機能を安全かつ効率的に提供するための GitLab のベストプラクティスに整合しています。

### アドホックな作業と質問への取り組み

時折、Slack の質問、Issue 内の質問、Error Budget の調査など、アドホックな作業や質問が発生します。すべての Compliance グループメンバーには、これらの媒体を見て関与することが奨励されています。

最初に対応する者として、私たちは適切な媒体でアドホックな作業/質問を認識します。これは、質問者が私たちが対応していることを知れるようにするためです。

[スパイク](#spikes)と同様に、経験則として、作業に 1 時間以上の調査と回答がかかる場合は、Issue を作成します。これは、この作業が計上され、透明性があり、DRI がいることを確保するためです。これは、質問者に Issue の作成を依頼するか、私たち自身がオーナーシップを取って Issue を作成することで行えます。

私たちは、必要なところでより多くの情報を求めて、アドホックな作業 Issue ができるだけ多くの情報を持つようにします。Issue に取り組む前に、提供する必要のある明確な問いや問題を定義します。

次に、私たちは Issue のオーナーシップを取り、それを自分自身に割り当てます。また、調査が始まったことを示すために、Slack メッセージ/Issue コメントに :eyes: リアクションを追加します。さらに、正しいラベルの衛生（~type::、~group::、~priority::、~workflow::）を確保します。コメントで、透明性を確保するために Compliance の EM と PM をピングします。優先順位に応じて、計画、スケジュール、完了のために[チーム横断的な優先順位付けプロセス](#milestone-planning)を経る必要があるかもしれません。

調査が完了したら、私たちは元の媒体でフォローアップします。また、調査が完了したことを示すために、元の Slack メッセージ/Issue コメントに :white_check_mark: リアクションを追加します。

### スパイク

私たちは[スパイク](/handbook/product/product-processes/#spikes)を使って、調査、プロトタイピング、知識を得るための調査を行い、技術的アプローチのリスクを減らし、要件をより良く理解します。

スパイクの必要性を特定したら、私たちは新しい Issue を作成し、それをそのように明確にラベル付けし（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/353606)）、スパイクを実施し、調査結果をスパイク Issue にドキュメント化します。

スパイクは、マイルストーン中に発生する可能性のあるアドホックな作業や質問を計上するのに最適です。経験則として、作業に 1 〜 2 時間以上かかる場合は、スパイク Issue を作成します。

スパイク Issue は、他の Issue と同様に、計画、スケジュール、完了のために[チーム横断的な優先順位付けプロセス](#milestone-planning)を経ます。

スパイクに取り組む前に、私たちは以下を明確に定義します:

1. Issue にどれだけの時間を費やすかのタイムボックス。
1. 提供する必要のある明確な問いや問題。

### Proof-of-concept MR

私たちは[イテレーション](/handbook/values/#iteration)と、小さな部分で価値を提供することを強く信じています。イテレーションは、特に製品コンテキストが欠けている場合や、コードベースの特にリスクの高い/複雑な部分で作業している場合は難しいことがあります。Issue の見積もりや実現可能性の判断に苦労している場合は、まず proof-of-concept MR を作成するのが適切かもしれません。proof-of-concept MR の目標は、計画中の主要な仮定を取り除き、早期のフィードバックを提供することで、将来の実装からのリスクを減らすことです。

- `PoC:` を先頭に付けた MR を作成します。
- PoC MR が解決しようとしている問題を MR の説明で説明します。
- タイムボックスします。2 〜 3 日未満で実現可能性や計画を判断できますか?
- この期間の終わりにフィードバックを提供するレビュアーを特定します。
- MR をクローズします。製品とパフォーマンスへの影響を含め、PoC から学んだことの要約を元の Issue に提供します。
  - 実装に進めるかどうかを述べます。
  - Issue はクローズしないでください。

proof-of-concept MR の必要性は、私たちのコードベースや製品の一部が過度に複雑になっていることのシグナルかもしれません。将来このステップを避ける方法を議論できるよう、レトロスペクティブの一環として MR について議論する価値が常にあります。

### スケジュールされていない Issue への取り組み

GitLab の誰もが、[私たちは活動ではなくインパクトを測定する](/handbook/values/#measure-impact-not-activity)ため、自分が適切と考えるように自分の作業を管理する自由があります。この一部は、通常の月次リリースの一環としてスケジュールされていない項目に取り組む機会です。これはほとんどハンドブック内の他の場所にある項目の繰り返しであり、それらを明示するためにここにあります:

1. 私たちは人々が [managers of one](/handbook/values/#managers-of-one) であり、[GitLab を私たち自身で使う](/handbook/values/#dogfooding)ことを期待しています。重要だと思うものを見かけたら、それをスケジュールするようリクエストするか、_他の優先事項を念頭に置いている限り_、[自分で提案に取り組めます](/handbook/values/#dont-wait)。
1. 時折、[issue bash](https://about.gitlab.com/community/issue-bash/) のような、GitLab のチームメンバーが参加できるイベントがあります。誰でもこれらに参加することを歓迎します。

何かに取り組むことを選んだら、以下を行ってください:

1. 標準のワークフローに従い、それを自分自身に割り当てます。
1. [透明性](/handbook/values/#transparency)を促すために Slack で共有します

### テスト

私たちは [Quality は全員の責任である環境を育むという GitLab の原則](/handbook/engineering/development/principles/#quality)を支持することを目指しています。
テストは私たちの[製品開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/)と[コードレビュープロセス](https://docs.gitlab.com/ee/development/code_review.html#quality)の不可欠な部分です。

テストカバレッジに関する情報は、これらの Issue/エピックで見つけられます:

- [Compliance 機能のユニットテストカバレッジ](https://gitlab.com/gitlab-org/gitlab/-/issues/392415)
- [E2E テストによって提供されるシフトレフトカバレッジ](https://gitlab.com/groups/gitlab-org/-/epics/11644)
- [E2E テストカバレッジの増加](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/9)

## マイルストーン計画

私たちは [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline)に従って月次サイクルで計画します。私たちの典型的な計画サイクルは以下のようになることが提案されています:

### 事前計画

- 4 日までに、Product は今後のリリースのために[テンプレート](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/blob/main/.gitlab/issue_templates/planning_issue.md)を使って [Compliance プロジェクト](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues)にグループの計画 Issue を作成しているべきです。
- Compliance quad は、それぞれの領域内の最優先 Issue を概説して、リリースの暫定計画を追加します。
- 私たちは[チーム横断的な優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/)を使って優先順位付けします。Product Manager が `type::feature` の Issue を、Engineering Manager が `type::maintenance` の Issue を、Quality Manager が `type::bug` の Issue を優先順位付けします。
- 事前計画は、Product、Engineering、Quality、Design によって Issue 上で非同期に完了されます。これは、最終計画の前に回答・解決される必要がある未知の要素や質問を特定するためです。
- Issue は Refinement フェーズ（`workflow::planning breakdown` と `workflow::solution validation`）または Implementation フェーズ（`workflow::scheduling` と `workflow::ready for development`）のいずれかになります。
- Engineering Manager は、マイルストーンの見積もられたグループ capacity で Issue を更新します
  - capacity 計画を支援するため、私たちは直近 3 リリースのクローズされた Issue の累積重みをローリングベースで追跡します。次のリリースの提案された作業範囲は、前回のリリースからのスリップを考慮して、これの 80% を超えるべきではありません。

### 計画

- 提案されたスコープをレビューし見積もりを始めるため、毎月第 2 金曜日に Engineering と Design との同期ミーティングがあります。
- そこから、[チーム横断的な Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4657720?milestone_title=15.4&label_name[]=group%3A%3Acompliance)を使って、マイルストーンのために計画するトップ Issue の比率を選択できます。私たちの目標比率は、マイルストーンごとに機能 60%、メンテナンス 30%、バグ 10% を計画することです。以下のデータは、私たちの全体的なチーム横断的なステータスを理解するのに役立ちます。
- 各領域には、Issue の 20% のストレッチ目標が含まれます。例: capacity 40W x 60% features = 24W + 20% = 約 28W
- リストが決まったら、この作業にマイルストーンと `workflow::ready for development` ラベルを追加でき、マイルストーンの開始準備が整います。
- Engineering Manager は、4 つのスコープ付きラベルタイプの 1 つを使って、マイルストーンの明確な期待値とともに、割り当てられた Issue にコメントしてラベルを追加します:
  - `goal::planning` - 完全な実装プランが作成され、必要であればレビューおよび承認された
  - `goal::development` - 開発が始まり、in dev または in review のワークフローのいずれかにある
  - `goal::complete` - 開発が完了し Issue が検証された
  - `goal::stretch` - ストレッチ目標として追加され、開始の期待はない
- 私たちは 1 〜 2 マイルストーン先まで計画しようとします。マイルストーンの開始時に、1 人あたり最大 2 つの計画 Issue（`workflow::planning breakdown` と `workflow::solution validation`）を含めます。これは経験則です。
  - 計画 Issue がマイルストーンに含まれると、チームメンバーにも割り当てられます。これは、マイルストーンで誰がどの計画を行っているかを明確にするためです。
- 20 日までに、Product は開発が終了したばかりのリリース（現在、私たちは 18 日に開発作業を 1 つのリリースから次へ移行します）を、マイルストーンからスリップした Issue についてレビューすべきです。時間内にマージされなかった Issue を評価し、適切に再スケジュールしてください。
- セキュリティへの影響がある可能性のある Issue を特定し、[Application Security Review をリクエスト](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/#adding-features-to-the-queue--requesting-a-security-review)します。Product Manager はこれらを計画 Issue にリストします。

### Issue の優先順位付け

私たちの優先順位は [Product の全体的なガイダンス](/handbook/product/product-processes/cross-functional-prioritization/)に従うべきです。これは、スケジュールされた Issue の優先順位ラベルに反映されるべきです:

| 優先順位 | 説明 | マイルストーンで出荷される確率 |
| ------ | ------ | ------ |
| priority::1 | **緊急**: 当該マイルストーンで達成するための最優先事項。これらの Issue はリリースの最も重要な目標であり、最初に取り組むべきです。一部は時間的に重要であるか、依存関係のブロックを解除するものかもしれません。 | 約 100% |
| priority::2 | **高**: ビジネスや技術的負債に重大なプラスの影響を持つ重要な Issue。重要だが、時間的に重要でも他をブロックするものでもない。  | 約 75% |
| priority::3 | **通常**: 既存機能への増分的な改善。これらは重要なイテレーションだが、非クリティカルと見なされる。 | 約 50% |
| priority::4 | **低**: 将来のリリースに延期しても許容できるストレッチ Issue。 | 約 25% |

### 週次進捗アップデート

- Engineering manager（EM）: 週の初日に現在の計画 Issue にコメントを投稿し、チームメンバーに更新を促します。
  - 形式: | NUMBER | EPIC | GOAL | [DRI](/handbook/people-group/directly-responsible-individuals/) |
- 実装するチームメンバー: あなたが directly responsible individual（DRI）である各項目について、コメントスレッドに短いアップデート（1 〜 2 文）を投稿します。アップデートは計画中に設定されたマイルストーン目標を参照するものであるべきです。報告することがなければ、その項目を省略するか「see previous update（前回のアップデートを参照）」を使います。

これの意図は以下のとおりです:

- Compliance Weekly ミーティング中の口頭の週次アップデートの参照を持つこと。
- レポーティングのために週次アップデートをドキュメント化すること。
- 週次アップデートの場当たり的/アドホックな性質を取り除くこと。
- 個人のパフォーマンス指標にしないこと。DRI は必ずしも取り組みに取り組む唯一の個人ではなく、優先順位の変更や、個人の休暇（PTO）や不在（OOO）などの他の要因が常にあり得ます。

## マイルストーン中

- キックオフ後にリリースに Issue が導入された場合、計画外の作業を計上するために、同等の重みを取り除かなければなりません。
- Issue が見積もられ重みが付けられる前に、Issue の開発を開始すべきではありません。
- 15 日までに、エンジニアリングのマージリクエストはマージされるべきです。言い換えれば、15 日以降にマージされたコードはリリースに含まれないと想定します。これにより、リレースを最終化し、関連する[リリース記事](https://docs.gitlab.com/development/documentation/release_notes/)を 17 日までにマージする時間ができます。（これは [13.11 から始まる実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330)です。）

### 開発フロー

私たちは一般的に [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)に従います:

1. `workflow::problem validation` - 解決すべき問題の明確さが必要
1. `workflow::design` - 明確な提案（と視覚的な側面のモックアップ）が必要
1. `workflow::solution validation` - エンジニアリングからの洗練と受け入れが必要
1. `workflow::planning breakdown` - 重みの見積もりが必要
1. `workflow::scheduling` - マイルストーンの割り当てが必要
1. `workflow::ready for development`
1. `workflow::in dev`
1. `workflow::in review`
1. `workflow::verification` - コードは本番環境にあり、[DRI](/handbook/people-group/directly-responsible-individuals/) エンジニアによる検証を保留中
1. `workflow::complete` - 作業が検証され完了した。この段階で Issue はクローズされるべき

一般的に言えば、Issue は 2 つの状態のいずれかにあります:

- Discovery/refinement（1-4）: 開発を開始するのを妨げる質問にまだ答えている、
- Implementation（6-9）: Issue がエンジニアの作業を待っているか、積極的に構築されている。

個々のグループは [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)ワークフローの有用と感じる段階を自由に使えますが、Issue が discovery/refinement から implementation にどう移行するかについては、ある程度規範的であるべきです。

### Discovery/Refinement

**最終目標が定義され、** すべての直接のステークホルダーが「はい、これは開発の準備ができている」と言う状態です。一部の Issue はすぐにそこに到達し、一部は何度かのやりとりを必要とします。

目標は、エンジニアがバイインを持ち、ロードマップにつながりを感じることです。エンジニアリングを早期に含めることで、プロセスははるかに自然でスムーズになります。そのために、Engineering Manager、エンジニア、デザイナーは Issue から直接ピングできます。

implementation フェーズに移行するには、すべての Issue が Implementation Plan と Weight を持つべきです

#### Backlog

backlog 管理は非常に困難ですが、私たちはラベルとマイルストーンを使ってそれを行うよう努めます。

洗練が必要な Issue を特定するには、「Next Up」ラベルを使います。
「Next Up」ラベルの目的は、現在 `workflow::ready for development` より前の _いずれかの_ ワークフロー段階にある Issue を特定することです。ワークフローラベルに加えてこの「Next Up」ラベルを使うことで、何が洗練されているか（例: problem、design、solution）を正確に見られます。これにより、どの Issue がスケジュールの準備に近いかを特定できます。

Issue は、Product と Engineering の両方から 👍 を受け取るまで、特定のリリース（例: 13.0）のマイルストーンを受け取るべきではありません。これはまた、Issue が `workflow::ready for development` とラベル付けされるべきではないことを意味します。

- Product の承認は、Issue が `workflow::planning breakdown` に移動することで表されます。
- Engineering の承認は、その複雑さを測定する Issue の重みで表されます。

#### 見積もり

Issue の作業を開始できる前に、予備調査の後にまずそれを見積もるべきです。

特定の Issue の作業範囲が複数の分野（docs、design、frontend、backend など）に触れ、それらにわたって重大な複雑さを伴う場合は、各分野ごとに別々の Issue を作成することを検討してください（[例](https://gitlab.com/gitlab-org/gitlab-ee/issues/9288)を参照）。

重みのない Issue には `workflow::planning breakdown` ラベルを割り当てるべきです。

開発作業を見積もる際は、Issue に適切な重みを割り当ててください:

| 重み | 説明（エンジニアリング） |
| ------ | ------ |
| 1 | 可能な限り最も単純な変更。副作用がないと確信できる。 |
| 2 | 単純な変更（最小限のコード変更）で、すべての要件を理解している。 |
| 3 | 単純な変更だが、コードのフットプリントが大きい（例: 多くの異なるファイル、または影響を受けるテスト）。要件は明確である。 |
| 5 | コードベースの複数の領域に影響を与える、より複雑な変更で、いくらかのリファクタリングも伴うかもしれない。要件は理解されているが、途中でいくつかのギャップが生じる可能性が高いと感じる。私たちはこの Issue をより小さな部分に分解することに挑戦すべきである。 |
| 8 | コードベースの多くに関わるか、要件を決定するために他者からの多くのインプットを必要とする複雑な変更。これらの Issue は、`workflow::ready for development` になる前にさらなる調査や発見を必要とすることが多く、複数のより小さな Issue から恩恵を受ける可能性が高い。 |
| 13 | 依存関係（他のチームやサードパーティ）を持つ可能性があり、おそらくまだすべての要件を理解していない重大な変更。これをマイルストーンにコミットすることはまずなく、要件をさらに明確にする、および/またはより小さな Issue に分解することが望ましい。 |

見積もりの一環として、Issue がエンジニアが取り組みを開始するのに適切な状態にあると感じる場合は、`workflow::ready for development` ラベルを追加してください。あるいは、定義すべき要件や、エンジニアが簡単に解決できないと感じる答えるべき質問がまだある場合は、`workflow::blocked` ラベルを追加してください。`workflow::blocked` ラベルの付いた Issue は、私たちの計画ボード上の独自の列に表示され、さらなる注意が必要であることを明確にします。`workflow::blocked` ラベルを適用する際は、ブロックされた Issue にコメントを残して [DRI](/handbook/people-group/directly-responsible-individuals/) をピングする、および/または可視性を高めるためにブロックしている Issue をリンクするよう必ずしてください。

#### Implementation Plan

エンジニアにとっては、Issue を `~workflow::planning breakdown` から移動させる際に実装アプローチを作成したいかもしれません。提案された実装アプローチに従うことは必須ではありませんが、記録された重みを正当化するのに役立ちます。

`workflow::planning breakdown` の [DRI](/handbook/people-group/directly-responsible-individuals/) として、あなたの担当の終わりと、Issue がスケジューリングに移行する準備ができていることを示すために、以下の例に従うことを検討してください。すでに分解されたより単純な Issue はより短い形式を使えるかもしれませんが、プランは（最低限）常に見積もりの背後にある「なぜ」を正当化すべきです。

以下は [https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan](https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan) からの実装アプローチの例です。Issue が作業の各部分のためにより小さなサブ Issue に分解されるべきであることを示しています:

```md
### Implementation approach

~database

1. Add new `merge_requests_author_approval` column to `namespace_settings` table (The final table is TBD)

~"feature flag"

1. Create new `group_merge_request_approvers_rules` flag for everything to live behind

~backend

1. Add new field to `ee/app/services/ee/groups/update_service.rb:117`
1. Update `ee/app/services/ee/namespace_settings/update_service.rb` to support more than just one setting
1. *(if feature flag enabled)* Update the `Projects::CreateService` and `Groups::CreateService` to update newly created projects and sub-groups with the main groups setting
1. *(if feature flag enabled)* Update the Groups API to show the settings value
1. Tests tests and more tests :muscle:
   - In particular, cover both happy and unhappy paths, and consider tests for scenarios that could result in false positives or negatives

~frontend

1. *(if feature flag enabled)* Add new `Merge request approvals` section to Groups general settings
1. Create new Vue app to render the contents of the section
1. Create new setting and submission process to save the value
1. Tests tests and more tests :muscle:
   - In particular, cover both happy and unhappy paths, and consider tests for scenarios that could result in false positives or negatives

~documentation

1. Update docs page eg https://docs.gitlab.com/ee/administration/audit_event_reports.html
1. Update the GraphQL examples <https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/engineering/graphql-example-requests>

~quality

1. Add new group-level end-to-end test based on existing project-level end-to-end test (include the path to the existing test eg `path/to/existing_test`)

```

[DRI](/handbook/people-group/directly-responsible-individuals/) は、Issue を `workflow::scheduling` に移動させる前に、関連する counterpart（Quality、UX など）とドメインエキスパート（database、backend、frontend）をピングします。これにより、作業が始まる前に、ドメインエキスパートが実装プランを承認したり、潜在的な落とし穴や懸念を提起したりする機会が得られます。
開発実装プランのドメインエキスパートレビューについて、些細な変更の場合は、関連する compliance 開発チームメンバーの誰からでも承認を求められます。トピックに関するコンテキストを持つ人を見つけるよう努めてください。些細でない変更の場合は、Issue のコメントで該当グループ（`@gitlab-org/software-supply-chain-security/compliance/engineering`）をタグ付けして、関連する compliance バックエンドまたはフロントエンド、あるいはその両方のチームメンバー全員から意見を求めるべきです。実装が些細か些細でないかの判断は、DRI と最初にレビューを依頼されたドメインエキスパートの裁量によります。

Issue が見積もられたら、`workflow::scheduling` に移動してマイルストーンを割り当て、最終的に `workflow::ready for development` にできます。

#### Issue の分解または昇格

Issue の複雑さに応じて、Issue を分解または昇格する必要があるかもしれません。いくつかのサンプルシナリオは以下のとおりです:

- 他に何かをする前に、デザインの discovery をする必要がある。デザイン思考と議論をそこに含めるのに役立つため、「Discovery:」Issue がここで最もうまく機能するかもしれません。最終結果は「Implementation:」Issue に転送されます。これらの接頭辞は、親 Issue やエピックにリンクされている場合に、どのタイプの Issue であるかを整理するのにも役立ちます。
- 作業範囲が予想より大きく、さらに分解する必要がある。例: 現在 5 より高い重みを持っている。その場合、当該 Issue をエピックに昇格させ、最初に提案された全体的な機能を提供するために起こる必要のある作業の異なるイテレーションやフェーズをリストアップするために、より小さな Issue に分解するのが適しているかもしれません。
- 作業範囲は明確だが、1 つの Issue にはやや扱いにくい。会話と活動を全員に見えるように保つために当該 Issue をそのまま保ちつつ、当該 Issue のより微妙な進捗を追跡するために、別々の子 design、backend、frontend Issue を作成するのが理にかなうかもしれません。

上記のいずれも当てはまらない場合、その Issue はおそらくそのままで問題ありません! その場合、この Issue の重みはおそらくかなり低く、例: 1 〜 2 です。

### Implementation

#### Verification

Issue の検証は、Issue の担当者以外の誰かによって行われるべきです。これにより、欠陥が本番環境に入るケースが減り、より多くのテストケースをカバーする異なる視点が得られます。

検証プロセスは、グループの他のメンバー間で開発の知識を共有することでもあります。オールリモートの組織では、同じチーム内であっても機能の開発でサイロ化しやすく、これはそれを橋渡しするのに役立ちます。

- Issue を `workflow::verification` に移動する前に、Issue の担当者は、機能が期待どおりに動作することを確認するために、本番環境で変更を自分自身で検証しなければなりません。
- すべての MR は説明に検証ステップを持つべきです。1 つの Issue に複数の MR が作成される場合、Issue に割り当てられたエンジニアは、Issue の説明または triage bot のコメントへの返信として、完全な検証ステップを追加すべきです。
- エンジニアが作業をマージしたら、Issue を `~workflow:verification` ラベルで示される検証ステータスに移動し、リリース Issue のメールを介して作業がステージングにデプロイされたという通知を受け取るまで待つべきです。
  - `~type::bug`、`~type::feature`、または大きな変更については、エンジニアは .com/production で変更が利用可能になったら再度検証し、完了したテストを要約するコメントを残すべきです。該当する場合は、プロジェクトやページへのリンクも提供します。
- `~workflow:verification` 状態の Issue は、検証ポリシーに基づいて triage bot によって、該当するチームエンジニアにランダムに割り当てられます。このエンジニアはその後 Issue を検証すべきです。提供された検証ステップに従うことに加えて、検証エンジニアには、ハッピーパスに従わない方法で機能を使う探索的テストを行うことが奨励されます。
- 本番環境で Issue が検証されたら、検証エンジニアは Issue をクローズし、自分自身の割り当てを解除します。Issue には自動的に `~workflow::complete` ラベルが追加されます。

ステージングや本番環境での検証が実現不可能な場合は、[staging-ref 環境](/handbook/engineering/infrastructure-platforms/environments/staging-ref/)を使えます。複雑なセットアップの場合、MR の DRI は、検証ステップが明確で正しいことを確保するためにドメインエキスパートと協働すべきです。

場合によっては、MR の作成者が自分で変更を検証するのが適切かもしれません。たとえば、フィーチャーフラグのロールアウトや background migration の監視などです。これらの場合、作成者は triage bot が別のチームメンバーを割り当てないように Issue に `verified-by-author` ラベルを追加し、なぜ自分で Issue を検証しているのかを説明するコメントを Issue に追加すべきです。

##### Issue の発見の処理

**検証者: .com/production で Issue を検証するエンジニア（MR の作成者ではない）**

1. 検証者: Issue の検証スレッドにコメントすることで調査結果をドキュメント化します。
1. 検証者: 調査結果に基づいて新しい ~"type::bug" または ~"type::feature" の Issue を開きます。
   1. 検証者: [priority](/handbook/product-development/how-we-work/issue-triage/#priority)/[severity](/handbook/product-development/how-we-work/issue-triage/#severity-slos) のトリアージプロセスと Issue タイプ（~"type::bug" または ~"type::feature"）に基づいて severity および/または priority を設定します。
   1. ~"severity::1" / ~"severity::2" は、Engineering Manager をピング（`@`）するコメントを追加して、直接マイルストーンに引き込まれます。
1. 検証者: 新しく開いた Issue に MR の作成者を割り当てます。
1. 検証者: Issue をクローズし、自分自身の割り当てを解除します。Issue には自動的に `~workflow::complete` ラベルが追加されます。

#### デモ

`workflow::verification` プロセス中に、Issue がデモを必要とするかどうかを判断します。不明な場合は、PM と協力してデモが必要かどうかを判断します。デモは進捗を披露するのに最適で、ユーザーが機能の使い方とそのメリットをすばやく理解するのに役立ちます。これに対する私たちのプロセスは [Single Engineer Groups Demo](/handbook/engineering/workflow/demos/#single-engineer-groups-demo)に似ています:

- コンピューター上で、または Zoom ライブストリームを介して、動作するソフトウェアの動画を録画します。デモの録画には [loom](/handbook/tools-and-tips/other-apps/#loom) も使えます。
- [GitLab Unfiltered Channel](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) にアップロードし、[Compliance Group - Product Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu)に追加します
- YouTube リンクを適切な Slack チャンネルと Issue に投稿します

### リリース記事

より詳細に発表する必要のある Issue については、Issue を使ってリリース記事を自動的に作成できます。
Issue に取り組む際、計画中、または設計と開発中に、[release notes writer agent](https://gitlab.com/components/agents-and-flows/release-notes-writer)を使って、リリース記事を作成し、すべての関連する人々に通知できます。

Issue にリリース記事を持たせたくない場合は、Issue にリリースノートのセクションがないことを確認するか、`release post item::` ラベルを使ってください。

## ミーティング

私たちは非同期コミュニケーションへのバイアスを持っていますが、同期ミーティングは必要であり、私たちの[コミュニケーションガイドライン](/handbook/communication/#video-calls)に従うべきです。Compliance で行われる定例ミーティングのいくつかは以下のとおりです:

| 頻度 | ミーティング                              | DRI         | 可能なトピック                                                                                        |
|-----------|--------------------------------------|-------------|--------------------------------------------------------------------------------------------------------|
| 週次（APAC/EMEA と AMER で交互）    | Group-level meeting                  | Engineering Manager | ボードを見ながら現在のリリースが順調かを確認し、特定の Issue のブロックを解除する                       |
| 月次   | Planning meeting                    | Product Manager         | [Planning](#milestone-planning)セクションを参照 |

一回限りのトピック固有のミーティングについては、常にこれらのコールを録画して共有する（または公開されているドキュメントにメモを取る）ことを検討してください。

アジェンダドキュメントと録画は、信頼できる唯一の情報源として[共有 Google ドライブ](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA)（社内のみ）に置けます。

1:1 や機密トピックを扱うものでないミーティングは、Software Supply Chain Security Shared カレンダーに追加すべきです。

すべてのミーティングは、少なくとも 12 時間前にアジェンダが準備されているべきです。そうでない場合、ミーティングに出席する義務はありません。ミーティングの開始時刻までにアジェンダがなければ、ミーティングはキャンセルされたと見なしてください。

## PTO の計画

私たちは [Engineering の休暇取得プロセス](/handbook/engineering/#taking-time-off)と [GitLab team members Guide to Time Off](/handbook/people-group/time-off-and-absence/time-off-types/)に従います。

## グループ共有カレンダー

[Compliance Group Shared Calendar](https://calendar.google.com/calendar/embed?src=c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1%40group.calendar.google.com) は、PTO イベントがチーム全員に見えるようにするために使用されます。

### Time Off by Deel のエントリを共有カレンダーに同期する

カレンダーを Time Off by Deel に追加する手順は以下のとおりです:

1. Slack を開きます
1. Slack で「Time Off by Deel」アプリを開きます
1. 「Home」タブに移動します、
1. 「Your Events」ドロップダウンをクリックし、「Calendar Sync」を選択します。
1. 「Additional calendars to include?」の下で、「Add calendar」をクリックします。
1. 以下のカレンダー ID を追加します: `c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1@group.calendar.google.com`

お疲れさまでした! 🎉 これからは、あなたの PTO イベントが Compliance Group Shared Calendar に同期されます。🚀

## グループニュース

EM は通常、毎週、会社内およびグループ内で起きていることについてグループ向けの一般的なアップデートを作成します。
このアップデートは現在、[compliance update Epic](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/3)内の Issue の形を取っています。

Compliance EM はまた、[Software Supply Chain Security stage weekly updates](https://gitlab.com/groups/gitlab-com/-/epics/2126) エピック内の Issue にも貢献します。

## グループメンバー

以下の人々がグループの常任メンバーです:

{{< engineering/stable-counterparts role="Software Supply Chain Security.+Compliance" >}}

## リンクとリソース {#links}

- GitLab
  - [gitlab-org/software-supply-chain-security/compliance](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance)
  - [General issues and discussions](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues)
  - [Engineering issues and discussions](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/engineering)
  - Compliance alias: `@gitlab-org/software-supply-chain-security/compliance`
  - Compliance engineering alias: `@gitlab-org/software-supply-chain-security/compliance/engineering`
  - [Milestone retrospectives](https://gitlab.com/gl-retrospectives/govern/compliance/-/issues)
  - Issue ボード
    - [Build board](https://gitlab.com/groups/gitlab-org/-/boards/1305010)
    - [Planning board](https://gitlab.com/groups/gitlab-org/-/boards/4657720)
- 私たちの Slack チャンネル
  - Software Supply Chain Security:Compliance [#g_sscs_compliance](https://gitlab.slack.com/messages/CN7C8029H)
  - Daily standups [#g_sscs_compliance_updates](https://gitlab.slack.com/archives/C013E163FD0)
  - Group related sentry errors [#g_sscs_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
  - Compliance engineering alias: `@sscs_compliance`
- Google Group
  - [sec-software_supply_chain_security-compliance](https://groups.google.com/a/gitlab.com/g/sec-software_supply_chain_security-compliance)

- GitLab Unfiltered チャンネルの Compliance グループプレイリスト
  - [Product](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu)
  - [Meetings](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7_yBKIYHi8qvCWeU0Q3yH)

<!-- include omitted: includes/engineering/software_supply_chain_security-shared-links.md (no localized version under content/ja/) -->
