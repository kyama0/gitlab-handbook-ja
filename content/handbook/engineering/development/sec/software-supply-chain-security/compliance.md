---
title: "Compliance グループ"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/compliance/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:31:27Z"
translator: claude
stale: false
lastmod: "2026-03-03T10:10:23+01:00"
---

## ミッション

Compliance グループのミッションは、組織が GitLab 内でのコンプライアンス状況の可視性を提供し、非準拠な活動を特定してコンプライアンス要件の範囲の施行のためのツールを提供することです。

## 私たちが取り組むこと

- 私たちは [グループ方向性ページ](https://about.gitlab.com/direction/software_supply_chain_security/compliance/) を使用して、グループの高レベルの目標と方向性を説明します。
- 高レベルの目標と方向性からエピックの優先リストにフィルタリングし、[戦術的優先事項](https://about.gitlab.com/direction/software_supply_chain_security/compliance/tactical-priorities.html) で最新の状態に保つよう努めます。
- この優先リストを各マイルストーンのプランニングに使用します。各マイルストーンには [プランニングエピック](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/2) に独自の Issue があります。
  - マイルストーンのプランニングへのインプットとして高レベルの目標と方向性を使用するほかに、Compliance プロダクトマネージャーは各マイルストーンに追加する Issue の優先順位を決定するために Sales、顧客、内部ステークホルダー（ドッグフーディング）からのインプットを考慮します。
- [OKR](/handbook/company/okrs/) も使用してグループ内の戦略的イニシアティブを優先順位付けします。プランニングには Issue を使用し、[OKR エピック](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/4) で集約します。

## FY25 のトップ優先事項

- FY25 の最大の優先事項は、コンプライアンスフレームワークとセキュリティポリシーの統合を継続することです。コンプライアンスセンター内の機能を拡張し、コンプライアンスパイプラインの廃止に向けて進みます。
- より多くの標準/チェックを追加してアドヒアランスレポートの拡張を継続しながら、コンプライアンス姿勢の反対側として違反を統合します（施行 vs 違反）。
- カスタマイズ可能なチェックと顧客にとって最高優先度の標準の構築も検討しています。
- 監査イベントの DB として ClickHouse の完全な使用をロールアウトします。GitLab プラットフォーム全体のコンプライアンスに関するより良い洞察を提供するフィーチャーをアンブロックします。
- 新しいストリーミング監査イベントの宛先タイプとフィルタリングを追加するための標準的な方法を提供し、次にストリーミング監査イベントの提供を増やします。
- コンプライアンスグループ外からの監査イベント追加への貢献を容易にするプラットフォームを作成します。これには、現在オープンな監査イベント Issue のプランニングと標準化、消費しやすいチュートリアルとガイドラインの作成、監査イベントデーの潜在的な実施（バックエンド向けのパジャマ移行日に似たもの）が含まれます。

## 私たちの働き方

- [GitLab バリュー](/handbook/values/) に従います。
- 透明に: ほぼすべてが公開されており、可能な限りミーティングを録画/ライブストリームします（[リンク](#links) 参照）。
- 取り組みたいことに取り組む機会があります。
- 誰でも貢献できます。サイロはありません。
  - 目標は、製品がエンジニアリングとデザインを最初からの方向性と Issue 定義に関与させる機会を与えることです。
- スタンドアップチャンネルでオプションの非同期日次スタンドアップを行います:
  - Software Supply Chain Security:Compliance [#g_sscs_compliance_updates](https://gitlab.slack.com/archives/C013E163FD0)

### コードレビュー

このグループは [広範な影響](/handbook/engineering/devops/#reducing-the-impact-of-far-reaching-work) を持つアプリケーションのコンポーネントで作業するため、本番インシデントのリスクを軽減するために以下の追加手順を踏みます:

1. チーム全体でより多くの組織的知識を構築するために、マージリクエストを別の Compliance チームメンバーに最初のレビューとして割り当てるよう努めます。
1. Compliance 関連のマージリクエストには [Compliance エンジニア](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/engineering/-/group_members?with_inherited_permissions=exclude) によるレビューが必要です。これは GitLab の `CODEOWNERS` フィーチャーを使用して管理されています。

#### フィーチャーフラグ

1. Compliance のマージリクエストは、リスクを低減するために意味のある場面でフィーチャーフラグを使用します。可能な限り [フィーチャーフラグライフサイクル](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/) に密接に従います。拡張または複数マージリクエストにまたがる開発では、すべての作業を専用のフィーチャーフラグの背後に保持します。このアプローチにより、インクリメンタルな変更を安全にマージし、本番ユーザーに対して不完全な機能をオフのままにできます。

1. フィーチャーフラグが使用される場合は、[フィーチャーフラグロールアウト計画](/handbook/engineering/workflow/development-processes/rollout-plans/) Issue を作成して適切なエピックに追加します。また、必要に応じてサポート（`#support_gitlab-com`）に [通知](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L94) します。

1. フィーチャーがテスト準備完了になったら、DRI（直接責任者）はステージング環境でフィーチャーフラグを有効化し、Slack でのコメントとロールアウト Issue へのコメントで関連するステークホルダー（PM、EM、デザイナー、広いチーム）に可用性を知らせます。これにより迅速なフィードバック、十分な検証が確保され、全員が最新情報を把握できます。

1. ステージングでフィーチャーを検証した後、ロールアウト計画に従って本番環境でフィーチャーフラグを有効化します。何か問題が発生した場合、フィーチャーフラグを無効にすることでコードを元に戻す必要なく迅速なロールバックメカニズムを提供します。この制御されたアプローチは、新しいフィーチャーを安全かつ効率的に提供するための GitLab のベストプラクティスと一致しています。

### アドホック作業と質問への対応

時々、Slack の質問、Issue の質問、Error Budget の調査などのアドホック作業と質問が発生します。すべての Compliance グループメンバーがこれらのメディアを注視し、参加することを奨励します。

最初の対応者として、適切なメディアでアドホック作業/質問を確認します。これにより、質問者は対応中であることを知ることができます。

[スパイク](#spikes) と同様に、目安として調査と対応に1時間以上かかる作業は Issue を作成します。これにより、この作業が考慮され、透明であり、DRI があることが確実になります。これは質問者に Issue を作成するよう依頼するか、オーナーシップを取って自分で Issue を作成することで行えます。

できるだけ多くの情報を含むよう努め、必要に応じて追加情報を求めます。Issue に取り組む前に、提供される明確な質問または問題を定義します。

次に、Issue のオーナーシップを取り、自分自身に割り当てます。調査が開始されたことを示すために Slack メッセージ/Issue コメントに :eyes: リアクションを追加します。また、正しいラベル衛生（~type::、~group::、~priority::、~workflow::）を確保します。コメントで Compliance EM と PM にピングして透明性を確保します。優先度によっては、[クロスファンクション優先順位付けプロセス](#milestone-planning) を経て計画、スケジュール、完了が必要になる場合があります。

調査が完了したら、元のメディアでフォローアップします。調査が完了したことを示すために元の Slack メッセージ/Issue コメントに :white_check_mark: リアクションを追加します。

### スパイク

私たちは [スパイク](/handbook/product/product-processes/#spikes) を使用して、調査、プロトタイプ、研究を実施し、知識を得たり、技術的アプローチのリスクを低減したり、要件をより良く理解したりします。

スパイクの必要性を特定したら、新しい Issue を作成し、そのように明確にラベル付けし（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/353606)）、スパイクを実施し、スパイク Issue に結果を文書化します。

スパイクはマイルストーン中に発生するアドホック作業と質問を処理するのに最適です。目安として、作業に1〜2時間以上かかる場合はスパイク Issue を作成します。

スパイク Issue は他の Issue と同様に、[クロスファンクション優先順位付けプロセス](#milestone-planning) を経て計画、スケジュール、完了します。

スパイクに取り組む前に、以下を明確に定義します:

1. Issue に費やす時間のタイムボックス。
1. 提供が必要な明確な質問または問題。

### 概念実証 MR

私たちは [イテレーション](/handbook/values/#iteration) と小さな塊での価値提供を強く信じています。イテレーションは特に製品のコンテキストが不足している場合や、コードベースの特に危険/複雑な部分での作業の場合に難しいことがあります。Issue の見積もりや実現可能性の判断に苦労している場合は、最初に概念実証 MR を作成することが適切かもしれません。概念実証 MR の目標は、プランニング中の主要な仮定を排除して早期フィードバックを提供し、将来の実装のリスクを軽減することです。

- MR を作成し、`PoC:` のプレフィックスを付けます。
- MR の説明で PoC MR が解決しようとしている問題を説明します。
- タイムボックス化します。2〜3日未満で実現可能性や計画を判断できますか？
- この期間の終わりにフィードバックを提供するレビュアーを特定します。
- MR をクローズします。PoC から学んだこと（製品とパフォーマンスの影響を含む）を元の Issue に要約として提供します。
  - 実装を進めることができるかどうかを記述します。
  - Issue はクローズしないでください。

概念実証 MR の必要性は、コードベースや製品の一部が過度に複雑になっているというシグナルである場合があります。将来このステップを回避する方法について議論するために、振り返りの一部として MR を議論することは常に価値があります。

### スケジュールされていない Issue での作業

GitLab の誰もが [影響を測定し、活動を測定しない](/handbook/values/#measure-impact-not-activity) ため、自分の判断で作業を管理する自由があります。これの一部は、定期的な月次リリースの一部としてスケジュールされていないアイテムに取り組む機会です。これはほぼ他の場所にあるアイテムの繰り返しですが、ここでは明示的にします:

1. 私たちは人々が [one のマネージャー](/handbook/values/#managers-of-one) であることを期待し、[GitLab を自分たちで使用します](/handbook/values/#dogfooding)。重要だと思うものがあれば、スケジュールするよう依頼するか、_他の優先事項を念頭に置いている限り_、[自分で提案に取り組む](/handbook/values/#dont-wait) ことができます。
1. 時々、GitLab チームメンバーが参加できる [issue bash](https://about.gitlab.com/community/issue-bash/) のようなイベントがあります。誰でも参加できます。

何かに取り組む際は:

1. 標準的なワークフローに従い、自分自身に割り当てます。
1. [透明性](/handbook/values/#transparency) を奨励するために Slack で共有します。

### テスト

私たちは [GitLab の品質はすべての人の責任であるという環境を育てる原則](/handbook/engineering/development/principles/#quality) を守ることを目指しています。
テストは私たちの [製品開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/) と [コードレビュープロセス](https://docs.gitlab.com/ee/development/code_review.html#quality) の不可欠な部分です。

テストカバレッジに関する情報はこれらの Issue/エピックで確認できます:

- [Compliance フィーチャーの単体テストカバレッジ](https://gitlab.com/gitlab-org/gitlab/-/issues/392415)
- [E2E テストによるシフトレフトカバレッジ](https://gitlab.com/groups/gitlab-org/-/epics/11644)
- [E2E テストカバレッジの増加](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/9)

## マイルストーンプランニング {#milestone-planning}

私たちは [製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) に従って月次サイクルでプランニングします。典型的なプランニングサイクルは以下のようになることが推奨されます:

### プレプランニング

- 4日までに、製品は [テンプレート](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/blob/main/.gitlab/issue_templates/planning_issue.md) を使用して次のリリースのために [Compliance プロジェクト](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues) にグループのプランニング Issue を作成します。
- Compliance クアッドは、それぞれのエリアで最高優先度の Issue を概説しながらリリースの暫定計画を追加します。
- [クロスファンクション優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/) を使用して優先順位付けします。プロダクトマネージャーは `type::feature` Issue を優先順位付けし、エンジニアリングマネージャーは `type::maintenance` Issue を優先順位付けし、クオリティマネージャーは `type::bug` Issue を優先順位付けします。
- プレプランニングは Issue の製品、エンジニアリング、品質、デザインによって非同期で完了されます。これは最終プランニング前に回答・解決が必要な未知数や質問を特定するためです。
- Issue はリファインメントフェーズ（`workflow::planning breakdown` と `workflow::solution validation`）または実装フェーズ（`workflow::scheduling` と `workflow::ready for development`）のいずれかにあります。
- エンジニアリングマネージャーはマイルストーンの推定グループキャパシティを Issue に更新します。
  - キャパシティプランニングを支援するために、直近3リリースのクローズした Issue の累積ウェイトをローリングベースで追跡します。次のリリースの提案された作業スコープは、前回のリリースからのスリップを考慮してこの80%を超えないようにします。

### プランニング

- 提案されたスコープのレビューと見積もりを開始するために、月の第2金曜日にエンジニアリングとデザインの同期ミーティングがあります。
- そこから、[クロスファンクション Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/4657720?milestone_title=15.4&label_name[]=group%3A%3Acompliance) を使用してマイルストーンに計画するトップ Issue の比率を選択できます。ターゲット比率は、マイルストーンごとに60%フィーチャー、30%メンテナンス、10%バグを計画することです。以下のデータはクロスファンクションの全体的な状況を理解するのに役立ちます。
- 各エリアには20%ストレッチターゲットの Issue が含まれます。例: キャパシティ40W × 60%フィーチャー = 24W + 20% = ~28W
- リストが決まったら、マイルストーンと `workflow::ready for development` ラベルをこの作業に追加して、マイルストーンが開始できる状態にします。
- エンジニアリングマネージャーは、4種類のスコープ付きラベルタイプのいずれかを使用してマイルストーンの明確な期待値を持つ割り当てられた Issue にコメントとラベルを追加します:
  - `goal::planning` - 完全な実装計画が作成され、必要に応じてレビューおよび承認されています
  - `goal::development` - 開発が開始され、in dev または in review ワークフローがあります
  - `goal::complete` - 開発が完了し、Issue が検証されています
  - `goal::stretch` - ストレッチ目標として追加され、開始の期待はありません
- 1〜2マイルストーン先まで計画しようとし、マイルストーンの開始時に最大2つのプランニング Issue（`workflow::planning breakdown` と `workflow::solution validation`）を人ごとに含めます。これは目安です。
  - プランニング Issue がマイルストーンに含まれる場合は、チームメンバーにも割り当てられます。これにより、マイルストーンで何を誰がプランニングするかを明確にします。
- 20日までに、製品は開発を終了したばかりのリリース（現在、18日にリリースから次のリリースへの開発作業を移行します）について、マイルストーンから外れた Issue をレビューします。時間内にマージされなかった Issue を評価し、適切に再スケジュールしてください。
- セキュリティ上の影響がある可能性のある Issue を特定し、[Application Security レビューをリクエスト](/handbook/security/product-security/security-platforms-architecture/application-security/appsec-reviews/#adding-features-to-the-queue--requesting-a-security-review) します。プロダクトマネージャーはプランニング Issue にこれらをリストアップします。

### Issue 優先順位付け

私たちの優先事項は [製品の全体的なガイダンス](/handbook/product/product-processes/cross-functional-prioritization/) に従います。これはスケジュールされた Issue の優先度ラベルに反映されます:

| 優先度 | 説明 | マイルストーン内の出荷確率 |
| ------ | ------ | ------ |
| priority::1 | **緊急**: 特定のマイルストーンで達成する最高優先度。これらの Issue はリリースの最も重要な目標であり、最初に取り組む必要があります。一部は時間的に重要または依存関係をアンブロックするものです。 | ~100% |
| priority::2 | **高**: ビジネスまたは技術的負債に重大なポジティブな影響を与える重要な Issue。重要ですが、時間的に重要または他者をブロックするものではありません。 | ~75% |
| priority::3 | **普通**: 既存フィーチャーへのインクリメンタルな改善。これらは重要なイテレーションですが、クリティカルではないとみなされます。 | ~50% |
| priority::4 | **低**: 将来のリリースに延期することが許容されるストレッチ Issue。 | ~25% |

### 週次進捗更新

- エンジニアリングマネージャー（EM）: 週の最初の日に現在のプランニング Issue にコメントを投稿して、チームメンバーが更新するよう促します。
  - フォーマット: | 番号 | エピック | 目標 | [DRI](/handbook/people-group/directly-responsible-individuals/) |
- 実装チームメンバー: DRI（直接責任者）である各アイテムのコメントスレッドに短い更新（1〜2文）を投稿します。更新はプランニング中に設定されたマイルストーン目標を参照します。報告することがない場合はアイテムを省略するか「前の更新を参照」を使用します。

この意図は以下のとおりです:

- Compliance 週次ミーティングでの口頭での週次更新の参照。
- レポートのための週次更新の文書化。
- 週次更新のその場での/アドホックな性質の排除。
- 個人的なパフォーマンス指標にはしません。DRI は必ずしも取り組みに取り組んでいる唯一の個人ではなく、PTO や OOO などの優先事項の変更やその他の要因が常に存在する可能性があります。

## マイルストーン中

- キックオフ後にリリースに Issue が追加された場合は、計画外の作業を考慮してウェイトと同量を取り除く必要があります。
- Issue の見積もりとウェイトが付与される前に開発を開始してはなりません。
- 15日までに、エンジニアリングのマージリクエストをマージします。言い換えると、15日以降にマージされたコードはリリースに含まれないと仮定します。これにより、リリースを最終化し、関連する [リリースポスト](/handbook/marketing/blog/release-posts/) を17日までにマージするための時間が確保されます（これは [13.11 から始まった実験](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330) です）。

### 開発フロー

私たちは一般的に [製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary) に従います:

1. `workflow::problem validation` - 解決すべき問題の明確化が必要
1. `workflow::design` - 明確な提案（および視覚的側面のモックアップ）が必要
1. `workflow::solution validation` - エンジニアリングからのリファインメントと承認が必要
1. `workflow::planning breakdown` - ウェイト見積もりが必要
1. `workflow::scheduling` - マイルストーン割り当てが必要
1. `workflow::ready for development`
1. `workflow::in dev`
1. `workflow::in review`
1. `workflow::verification` - コードが本番環境にあり、[DRI](/handbook/people-group/directly-responsible-individuals/) エンジニアによる検証が保留中
1. `workflow::complete` - 作業が検証され、作業が完了しました。この段階で Issue をクローズします。

一般的に、Issue は2つの状態のいずれかにあります:

- ディスカバリー/リファインメント（1〜4）: 開発を開始できない質問にまだ回答している
- 実装（6〜9）: Issue はエンジニアが取り組むのを待っているか、積極的に構築中

個々のグループは [製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary) ワークフローで役立つと思う多くのステージを自由に使用できますが、Issue がディスカバリー/リファインメントから実装に移行する方法についてはある程度規定的にする必要があります。

### ディスカバリー/リファインメント

**最終目標が定義されており**、すべての直接ステークホルダーが「はい、これは開発の準備ができています」と言います。一部の Issue はすぐにそこに到達し、一部は理解するために数回のやり取りが必要です。

目標は、エンジニアがロードマップに賛同し、つながりを感じることです。エンジニアリングを早期に含めることで、プロセスがはるかに自然でスムーズになります。そのために、エンジニアリングマネージャー、エンジニア、デザイナーは Issue から直接ピングされることができます。

実装フェーズに移行するには、すべての Issue に実装計画とウェイトが必要です。

#### バックログ

バックログ管理は非常に難しいですが、ラベルとマイルストーンの使用でそれを試みています。

リファインメントが必要な Issue を特定するには、「Next Up」ラベルを使用します。
「Next Up」ラベルの目的は、現在 `workflow::ready for development` より前の _任意の_ ワークフローステージにある Issue を特定することです。ワークフローラベルに加えてこの「Next Up」ラベルを使用することで、リファインされているものが正確に何かを確認できます（例: 問題、デザイン、ソリューション）。これにより、スケジュールの準備ができている Issue がどれかを特定するのに役立ちます。

Issue は製品とエンジニアリングの両方から 👍 を受け取るまで、特定のリリース（例: 13.0）のマイルストーンを受け取るべきではありません。これはまた Issue に `workflow::ready for development` ラベルを付けるべきではないことも意味します。

- 製品の承認は Issue が `workflow::planning breakdown` に移動することで表されます。
- エンジニアリングの承認は Issue のウェイトがその複雑さを測定することで表されます。

#### 見積もり

Issue の作業を開始する前に、予備調査の後で最初に見積もりを行う必要があります。

ある Issue の作業スコープが複数のディシプリン（docs、デザイン、フロントエンド、バックエンドなど）に触れ、それらにまたがる重大な複雑さを含む場合は、各ディシプリンに対して別々の Issue を作成することを検討してください（[例](https://gitlab.com/gitlab-org/gitlab-ee/issues/9288) 参照）。

ウェイトのない Issue には `workflow::planning breakdown` ラベルを割り当てます。

開発作業を見積もる際は、Issue に適切なウェイトを割り当てます:

| ウェイト | 説明（エンジニアリング） |
| ------ | ------ |
| 1 | 最もシンプルな変更。副作用はないと確信しています。 |
| 2 | シンプルな変更（最小限のコード変更）で、すべての要件を理解しています。 |
| 3 | シンプルな変更ですが、コードのフットプリントが大きい（例: 多くの異なるファイルやテストが影響を受ける）。要件は明確です。 |
| 5 | コードベースの複数のエリアに影響するより複雑な変更で、リファクタリングも含まれる場合があります。要件は理解されていますが、途中でいくつかのギャップがある可能性があります。この Issue をより小さな部分に分解することに挑戦します。 |
| 8 | コードベースの多くに関与するか、要件を決定するために多くの入力が必要な複雑な変更。これらの Issue は多くの場合、`workflow::ready for development` になる前にさらなる調査や発見が必要であり、複数のより小さな Issue から恩恵を受ける可能性があります。 |
| 13 | 依存関係（他のチームまたはサードパーティ）がある可能性が高く、まだすべての要件を理解していない重大な変更。これをマイルストーンにコミットすることはほぼなく、要件の更なる明確化および/またはより小さな Issue への分解が優先されます。 |

見積もりの一環として、エンジニアが取り組み始めるのに適した状態だと感じる場合は、`workflow::ready for development` ラベルを追加してください。あるいは、エンジニアが容易に解決できないと感じる要件の定義や回答が必要な質問がまだある場合は、`workflow::blocked` ラベルを追加してください。`workflow::blocked` ラベルの付いた Issue はプランニングボードの独自のカラムに表示され、さらなる注意が必要であることが明確になります。`workflow::blocked` ラベルを適用する際は、ブロックされた Issue の [DRI](/handbook/people-group/directly-responsible-individuals/) にコメントして、ブロックしている Issue にリンクして可視性を高めてください。

#### 実装計画

エンジニアとして、`~workflow::planning breakdown` から Issue を移動する際に実装アプローチを作成したいかもしれません。提案された実装アプローチは必ずしも従う必要はありませんが、記録されたウェイトを正当化するのに役立ちます。

`workflow::planning breakdown` の [DRI](/handbook/people-group/directly-responsible-individuals/) として、観察の終わりと Issue がスケジューリングに移行する準備ができていることを示すために以下の例に従うことを検討してください。すでに分解されたより単純な Issue はより短い形式を使用する場合がありますが、計画は（最低でも）常に見積もりの背後にある「なぜ」を正当化する必要があります。

以下は [https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan](https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan) の実装アプローチの例です。Issue はおそらく作業の各部分について小さなサブ Issue に分解されるべきであることを示しています:

```md
### 実装アプローチ

~database

1. `namespace_settings` テーブルに新しい `merge_requests_author_approval` カラムを追加します（最終テーブルは TBD）

~"feature flag"

1. すべてが配置される新しい `group_merge_request_approvers_rules` フラグを作成します

~backend

1. `ee/app/services/ee/groups/update_service.rb:117` に新しいフィールドを追加します
1. 1つ以上の設定をサポートするために `ee/app/services/ee/namespace_settings/update_service.rb` を更新します
1. *(フィーチャーフラグが有効な場合)* 新しく作成されたプロジェクトとサブグループをメイングループの設定で更新するために `Projects::CreateService` と `Groups::CreateService` を更新します
1. *(フィーチャーフラグが有効な場合)* 設定値を表示するためにグループ API を更新します
1. テスト、テスト、さらにテスト :muscle:
   - 特に、ハッピーパスとアンハッピーパスの両方をカバーし、偽陽性または偽陰性につながる可能性のあるシナリオのテストを検討します

~frontend

1. *(フィーチャーフラグが有効な場合)* グループの一般設定に新しい `マージリクエスト承認` セクションを追加します
1. セクションのコンテンツをレンダリングする新しい Vue アプリを作成します
1. 値を保存するための新しい設定と送信プロセスを作成します
1. テスト、テスト、さらにテスト :muscle:
   - 特に、ハッピーパスとアンハッピーパスの両方をカバーし、偽陽性または偽陰性につながる可能性のあるシナリオのテストを検討します

~documentation

1. ドキュメントページを更新します（例: https://docs.gitlab.com/ee/administration/audit_event_reports.html）
1. GraphQL の例を更新します <https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/engineering/graphql-example-requests>

~quality

1. 既存のプロジェクトレベルのエンドツーエンドテストに基づいて新しいグループレベルのエンドツーエンドテストを追加します（例: 既存テストへのパスを含めます `path/to/existing_test`）

```

[DRI](/handbook/people-group/directly-responsible-individuals/) は Issue を `workflow::scheduling` に移動する前に関連するカウンターパート（品質、UX など）とドメインエキスパート（データベース、バックエンド、フロントエンド）にピングします。これにより、ドメインエキスパートが作業が開始される前に実装計画を承認するか、潜在的な落とし穴や懸念事項を提起する機会が得られます。
開発実装計画のドメインエキスパートレビューについては、些細な変更の場合は承認を関連する compliance 開発チームメンバーのいずれかから求めることができます。トピックに関するコンテキストがある人を見つけるよう努めてください。些細でない変更の場合は、Issue のコメントで該当グループ（`@gitlab-org/software-supply-chain-security/compliance/engineering`）をタグ付けして関連する compliance バックエンドまたはフロントエンド、あるいはその両方のチームメンバー全員の意見を求めます。実装が些細かどうかの判断は DRI と最初にレビューを求めたドメインエキスパートの裁量に委ねられています。

Issue が見積もられたら、`workflow::scheduling` に移動してマイルストーンを割り当て、最終的に `workflow::ready for development` にします。

#### Issue の分解または昇格

Issue の複雑さによっては、Issue を分解または昇格させる必要がある場合があります。サンプルシナリオ:

- 他の何かをする前にデザインのディスカバリーを行う必要があります。ここでは「Discovery:」Issue が最適で、デザインの思考と議論をそこに収容し、最終結果を「Implementation:」Issue に移します。これらのプレフィックスは、親 Issue やエピックにリンクされている場合に、どのタイプの Issue であるかを整理するのにも役立ちます。
- 作業のスコープが予想より大きく、さらなる分解が必要です（例: 現在のウェイトが5より高い）。その場合、元々提案されていた全体的なフィーチャーを完全に実現するために完了する必要があるさまざまなイテレーションまたは作業フェーズをリストアップするより小さな Issue に分解するために、当該 Issue をエピックに昇格させることが適切かもしれません。
- 作業のスコープは明確ですが、1つの Issue には少し手に余ります。会話と活動を全員に見える状態に保つために与えられた Issue をそのままにしておくことは理にかなっているかもしれませんが、特定の Issue のより細かな進捗を追跡するために個別の子デザイン、バックエンド、またはフロントエンド Issue を作成します。

上記のいずれも当てはまらない場合は、Issue はおそらくそのままで問題ありません！その場合、この Issue のウェイトはおそらく非常に低い（例: 1〜2）でしょう。

### 実装

#### 検証

Issue の検証は、Issue の担当者以外の誰かが行う必要があります。これにより、本番環境へのデフェクトの流入が減り、より多くのテストケースをカバーする異なる視点が得られます。

検証プロセスはまた、グループの残りとの間での開発の知識共有についてでもあります。完全にリモートな組織では、同じチームでもフィーチャーを開発する際にサイロ化しやすく、これによりそのギャップを埋めようとします。

- Issue を `workflow::verification` に移動する前に、Issue の担当者はフィーチャーが期待どおりに動作していることを本番環境で変更を自分自身で検証する必要があります。
- すべての MR は説明に検証手順を持つ必要があります。1つの Issue に複数の MR が作成されている場合は、Issue に割り当てられたエンジニアが Issue の説明またはトリアージボットのコメントへの返信として完全な検証手順を追加します。
- エンジニアが作業をマージしたら、`~workflow:verification` ラベルで示される検証状態に Issue を移動し、リリース Issue のメールでステージング環境に作業がデプロイされた通知を受けるまで待ちます。
  - ~`~type::bug`、`~type::feature`、または大きな変更については、変更が .com/本番環境で利用可能になったら（MR に `~workflow:verification` ラベルがあることを確認します）、エンジニアは再度検証し、完了したテストの概要をコメントで残します。該当する場合はプロジェクトやページへのリンクも提供します。
- ~workflow:verification 状態の Issue は、検証ポリシーに基づいてトリアージボットによって適切なチームエンジニアにランダムに割り当てられます。このエンジニアはその後、Issue を検証します。提供された検証手順に従うことに加えて、検証するエンジニアはハッピーパスに従わない方法でフィーチャーを使用して探索的テストを行うことを奨励されています。
- Issue が本番環境で検証されたら、検証エンジニアが Issue をクローズして自分自身のアサインを解除します。Issue には自動的に `~workflow::complete` ラベルが追加されます。

ステージングや本番環境での検証が実行不可能な場合は、[staging-ref 環境](/handbook/engineering/infrastructure-platforms/environments/staging-ref/) を使用できます。複雑なセットアップの場合、MR の DRI はドメインエキスパートと協力して検証手順が明確かつ正確であることを確保します。

場合によっては、MR の作者が変更を自分自身で検証することが適切な場合があります（例: フィーチャーフラグのロールアウトやバックグラウンドマイグレーションの監視）。そのような場合、作者は `verified-by-author` ラベルを Issue に追加してトリアージボットが別のチームメンバーを割り当てないようにし、なぜ自分で Issue を検証しているかを説明するコメントを Issue に追加します。

##### Issue の発見への対応

**検証者: .com/本番環境で Issue を検証するエンジニア（MR の作者ではない）**

1. 検証者: Issue の検証スレッドにコメントして発見事項を文書化します。
1. 検証者: 発見事項に基づいて新しい ~"type::bug" または ~"type::feature" Issue を開きます。
   1. 検証者: Issue タイプ（~"type::bug" または ~"type::feature"）に基づいて [優先度](/handbook/product-development/how-we-work/issue-triage/#priority)/[重大度](/handbook/product-development/how-we-work/issue-triage/#severity-slos) トリアージプロセスに基づいて重大度および/または優先度を設定します。
   1. ~"severity::1" / ~"severity::2" はエンジニアリングマネージャーをピング（@）するコメントをマイルストーンに直接取り込みます。
1. 検証者: 新しくオープンされた Issue に MR の作者を割り当てます。
1. 検証者: Issue をクローズして自分自身のアサインを解除します。Issue には自動的に `~workflow::complete` ラベルが追加されます。

#### デモ

`workflow::verification` プロセス中に、Issue がデモを必要とするかどうかを判断します。不明な場合は PM と協力してデモが必要かどうかを判断します。デモは進捗を示すのに最適で、ユーザーがフィーチャーとその利点をどのように使用するかを素早く理解するのに役立ちます。これのプロセスは [Single Engineer Groups Demo](/handbook/engineering/workflow/demos/#single-engineer-groups-demo) と似ています:

- コンピュータまたは Zoom ライブストリームで動作するソフトウェアのビデオを録画します。デモの録画には [loom](/handbook/tools-and-tips/other-apps/#loom) も使用できます。
- [GitLab Unfiltered チャンネル](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) にアップロードし、[Compliance Group - Product Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu) に追加します。
- YouTube リンクを適切な Slack チャンネルと Issue に投稿します。

### リリースポスト

詳細にアナウンスする必要がある Issue については、Issue を使用してリリースポストを自動的に作成できます。
プランニング中、またはデザインおよび開発中に、[リリースポストアイテムジェネレーター](/handbook/marketing/blog/release-posts/#release-post-item-generator) を使用してリリースポストを作成し、関連する全員に通知できます。

Issue にリリースポストを持たせたくない場合は、Issue にリリースノートセクションがないか、`release post item::` ラベルを使用してください。

## ミーティング

非同期コミュニケーションへのバイアスがありますが、同期ミーティングは必要であり [コミュニケーションガイドライン](/handbook/communication/#video-calls) に従う必要があります。Compliance で開催される定期的なミーティングは以下のとおりです:

| 頻度 | ミーティング | DRI | 可能なトピック |
|-----------|--------------------------------------|-------------|--------------------------------------------------------------------------------------------------------|
| 週次（APAC/EMEA と AMER を交互） | グループレベルミーティング | エンジニアリングマネージャー | ボードを確認して現在のリリースが順調に進んでいることを確認し、特定の Issue のブロックを解除する |
| 月次 | プランニングミーティング | プロダクトマネージャー | [プランニング](#milestone-planning) セクション参照 |

一度限りのトピック固有のミーティングについては、常に通話を録画して共有することを検討してください（または公開ドキュメントにメモを取ります）。

アジェンダドキュメントと録画は、信頼できる唯一の情報源として [共有 Google ドライブ](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA)（内部のみ）に配置できます。

1:1 または機密トピックをカバーしていないミーティングは、Software Supply Chain Security 共有カレンダーに追加します。

すべてのミーティングには少なくとも12時間前にアジェンダを準備します。そうでない場合は、ミーティングに参加する義務はありません。ミーティング開始時にアジェンダがない場合は、ミーティングのキャンセルを検討してください。

## PTO のプランニング

私たちは [休暇を取るためのエンジニアリングプロセス](/handbook/engineering/#taking-time-off) と [GitLab チームメンバーの休暇ガイド](/handbook/people-group/time-off-and-absence/time-off-types/) に従います。

## グループ共有カレンダー

[Compliance グループ共有カレンダー](https://calendar.google.com/calendar/embed?src=c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1%40group.calendar.google.com) は、PTO イベントをチーム全員に見えるようにするために使用されます。

### Time Off by Deel のエントリを共有カレンダーに同期する

カレンダーを Time Off by Deel に追加する手順:

1. Slack を開きます
1. Slack のアプリ「Time Off by Deel」を開きます
1. 「Home」タブに移動します
1. 「Your Events」のドロップダウンをクリックし、「Calendar Sync」を選択します
1. 「Additional calendars to include?」の下の「Add calendar」をクリックします
1. 以下のカレンダー ID を追加します: `c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1@group.calendar.google.com`

完了です！PTO イベントは Compliance グループ共有カレンダーに同期されます。

## グループニュース

EM は通常、週次で会社内やグループ内で起きていることについての一般的な更新をグループに作成します。
この更新は現在、[compliance 更新エピック](https://gitlab.com/groups/gitlab-org/software-supply-chain-security/compliance/-/epics/3) 内の Issue の形式を取っています。

Compliance EM は [Software Supply Chain Security ステージ週次更新](https://gitlab.com/groups/gitlab-com/-/epics/2126) エピック内の Issue にも貢献します。

## グループメンバー

以下の方々がグループの永続的なメンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/compliance/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## リンクとリソース {#links}

- GitLab
  - [gitlab-org/software-supply-chain-security/compliance](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance)
  - [一般的な Issue と議論](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues)
  - [エンジニアリング Issue と議論](https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/engineering)
  - Compliance エイリアス: `@gitlab-org/software-supply-chain-security/compliance`
  - Compliance エンジニアリングエイリアス: `@gitlab-org/software-supply-chain-security/compliance/engineering`
  - [マイルストーン回顧](https://gitlab.com/gl-retrospectives/govern/compliance/-/issues)
  - Issue ボード
    - [ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/1305010)
    - [プランニングボード](https://gitlab.com/groups/gitlab-org/-/boards/4657720)
- Slack チャンネル
  - Software Supply Chain Security:Compliance [#g_sscs_compliance](https://gitlab.slack.com/messages/CN7C8029H)
  - 日次スタンドアップ [#g_sscs_compliance_updates](https://gitlab.slack.com/archives/C013E163FD0)
  - グループ関連の sentry エラー [#g_sscs_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
  - Compliance エンジニアリングエイリアス: `@sscs_compliance`
- Google グループ
  - [sec-software_supply_chain_security-compliance](https://groups.google.com/a/gitlab.com/g/sec-software_supply_chain_security-compliance)

- GitLab Unfiltered チャンネルの Compliance グループプレイリスト
  - [製品](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu)
  - [ミーティング](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7_yBKIYHi8qvCWeU0Q3yH)


<!-- include omitted: includes/engineering/software_supply_chain_security-shared-links.md (no localized version under content/ja/) -->
