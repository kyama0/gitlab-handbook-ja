---
title: プロダクトプロセス
description: >-
  プロダクト組織として、私たちは顧客が愛し価値を見出す製品を開発するための、柔軟でありながら簡潔な製品開発フレームワークを作ることに取り組んでいます。
upstream_path: /handbook/product/product-processes/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
translated_at: "2026-07-17T06:29:12+09:00"
translator: codex
stale: false
lastmod: "2026-07-16T17:32:42-03:00"
---

<!-- include omitted: includes/product/product-handbook-links.md -->

## 私たちのプロダクト哲学

プロダクト組織として、私たちは顧客が愛し価値を見出す製品を開発するための、柔軟でありながら簡潔な製品開発フレームワークを作ることに取り組んでいます。[Product Principles](/handbook/product/product-principles/) セクションでは、製品開発に関する私たちの戦略と哲学について学ぶことができます。ここでは戦術的に使用するプロセスについて議論します。

### プロダクト開発フロー

変更を導入するには、ある程度の重複を伴ういくつかのステップを順番に完了する必要があります。GitLab は、プロダクト、エンジニアリング、UX、品質にまたがる二本立ての [プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) に従います。私たちは [GitLab を使ってプロダクト開発フローを動かしています](/handbook/product/product-processes/planning-with-gitlab)。変更がリリースされると、私たちは新機能について外部にコミュニケーションするために [リリース投稿プロセス](https://docs.gitlab.com/development/documentation/release_notes/) に従います。

このプロセスは、機能を構築する際に最初から、そして継続的に行うべきです。

### 方向性の重要性

セクション、ステージ、グループ、カテゴリの方向性をドキュメント化することは、私たちがどこに向かっているか、そしてなぜそうしているかをすべてのステークホルダーに伝える上で重要です。私たちは方向性を方向性ページにドキュメント化しています。関連するプロセスについては [計画と方向性](#planning-and-direction) を参照してください。

### マイルストーンとリリースの理解

- [リリース日の解釈](/handbook/engineering/releases/monthly-releases/) では、プロダクトチームがマイルストーンとラベルを使って、特定の時間枠内での機能提供の可能性を示す方法を明確にしています。
- [リリース定義](/handbook/engineering/releases/) はエンジニアリングチームによって維持され、各マイルストーンの終わりは [リリース日](/handbook/engineering/releases/) に行われます。

### 関連リンク

- [エンジニアリングのリリース定義](/handbook/engineering/releases/)
- [機能フラグのライフサイクル](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/)
- [プロダクトローンチプロセス](/handbook/product/product-processes/product-launch)

## コミュニケーション

### プロダクト組織のコミュニケーションタッチポイント

2024 年 11 月、私たちは [FY25-Q2 エンゲージメントサーベイ](https://gitlab.com/groups/gitlab-com/-/epics/2402)、AMA、スキップレベル、1:1 からのフィードバックに基づき、コミュニケーションのタッチポイントを調整しました。優先する 2 つの主要領域:

- タイムゾーンを越えてチームメンバーに届けるため、より多くの非同期タッチポイントを組み込む
- E-Group と PLT から情報をカスケードする追加の機会を実装する

#### 同期のプロダクト組織コミュニケーションタッチポイント

- Product All-Team Meeting: プロダクト組織のために四半期ごとの同期ミーティングがあります。2024 年 11 月以降、各 PLT 部門長からの主要な戦略的アップデートが定期的に組織全体に効果的にカスケードされるよう、既存のコンテンツと構造を拡張しています。

#### 非同期のプロダクト組織コミュニケーションタッチポイント

- CPO Fortnightly Update: David は 2 週間ごとに #product-private に Slack メッセージを投稿します。これは、E-group とプロダクトチーム全体で最も重視されていることを共有するための方法です。
- 新人紹介: プロダクト組織に新しく加わった人は、#new-team-members Slack チャンネルに自己紹介を投稿することが推奨されます。月に 1 回、プロダクトリーダーシップチームのメンバーが、新人とその自己紹介の統合リストを #product-private Slack チャンネルに投稿します。
- 月次ショーケース: 4 週間サイクルで、#product-private チャンネルで進められる非同期の月次ショーケースを開催し、人々が取り組んでいることをプロダクト組織の他のメンバーと共有できます。これは、人々がビデオを提供するインセンティブを与えるために賞品付きの気軽な競争です。チームメンバーは月を通してビデオを追加でき、その後、プロダクト組織全体が Google フォームを通じてお気に入りのビデオに投票できます。4 週間の期間の終わりには、勝者に賞品があり、David の隔週のアップデートで発表されます。視聴回数が同点の場合は、David が誰が勝つかを最終決定します。これにより、チームメンバーが自分たちの機能領域での勝利やエキサイティングな進展を共有することを奨励できると願っています！注: これは David の隔週アップデート (2 週間ごとに投稿される) と整合するように 4 週間サイクル (暦月ではなく) で行っています。これは依然として大まかには暦月と一致します。

### その他のコミュニケーションチャンネル

- [**Product Function Issue Tracker**](https://gitlab.com/gitlab-com/Product/issues) - GitLab のチームメンバーのみに表示すべきトピックには
機密 Issue を使用してください。
- [**Product Function GitLab Group - @gl-product**](https://gitlab.com/groups/gl-product/-/group_members)
- [**Product Management GitLab Group - @gl-product-pm**](https://gitlab.com/groups/gl-product/-/group_members)
- [**チャットチャンネル - #product-private**]。これはプロダクト組織のメンバー向けのプライベート Slack チャンネルです。新しいチームメンバーは、オンボーディングの一環として自動的にこのチャンネルに追加されます。
- [**チャットチャンネル - #product**](https://gitlab.slack.com/archives/product)。すべての GitLab 内部チームメンバーは、プロダクト関連の質問について `#product` チャンネルを使用できますが、さまざまな [Product Group](/handbook/product/categories/) チャンネルではより直接的な支援も得られます。

### プロダクトマネジメント部門全体に一斉にコミュニケーションをする

プロダクト部門全体に変更や行動の要求をコミュニケートする際には、次のレベルと対応するアクティビティを利用します。

| レベル | 説明 | アクティビティ |
| ----- | ----------- | ---------- |
| One | 関心のある PM および FYI 向けのレビュー提案 | `#product` で MR/Issue を投稿 |
| Two | 全 PM に対する行動要求 | `#product` で投稿し、MR/Issue で `@gl-product-pm` を具体的な指示と共にメンション。 |
| Three | 理解の確認 | `#product` で投稿し、`@gl-product-pm` をメンション。MR/Issue の説明文に各 `@gl-product-pm` メンバー用のチェックボックスを置き確認させる。MR/Issue をすべての `@gl-product-pm` メンバーにアサインする。 |

### 社内と社外への評判の広め方

新しい機能や更新された機能を出荷する前に、あなたはそれを社内および社外で擁護する責任があります。何かがリリースされると、次のチームは、それぞれ何かを行う必要があるため、それを認識する必要があります:

- マーケティング: 機能の重要性に応じて、私たちはこの機能をさまざまなコミュニケーションチャンネルで宣伝するためにマーケティングの助けが必要です。
- セールス: セールスは、新規または既存の顧客を販売プロセス中に説得するためのより良い議論を持つために、製品の新しい点や変更点を知る必要があります。
- サポート: ユーザーや顧客と常に接触しているサポートは、私たちの製品がどのように動作するかを正確に知る必要があります。

仕事を促進する方法はいくつかあります:

- まずリリースされる内容をドキュメント化し、上記の異なるチームとこのドキュメントを共有する
- 重要だと思う場合は、上記のチームとミーティングをスケジュールする

書面でのコミュニケーションで Issue を参照する場合、Issue 番号 `#123456` とリンクだけを使うのは [低コンテキストコミュニケーション](/handbook/communication/#low-context) ではありません。代わりに、Issue のタイトルとリンク、または Issue 番号とその Issue が解決する問題の説明を使ってください:

- 良い例: `次に取り組むのは [MR でコードカバレッジレポートを検出して表示する](https://gitlab.com/gitlab-org/gitlab/-/issues/21549) です。` または `次に取り組むのは [gitlab#21549](https://gitlab.com/gitlab-org/gitlab/-/issues/21549) です。これにより開発者は MR をレビューしながら別のツールを見てコンテキストを失うことなく、GitLab で直接コードカバレッジレポートを表示できるようになります。`
- 避けるべき例: `次に取り組むのは #21549 です。`

[findability](/handbook/values/#findability) を支援し、特にプロダクトの方向性、カテゴリの変更、投資テーマのシフト、エンジニアリングの優先順位に関して [考えを変えたときに明確に言葉にする](/handbook/values/#articulate-when-you-change-your-mind) ために、プロダクトマネージャーは、ユーザーや顧客が認識できるように、これらの変更をマルチモーダルなコミュニケーションチャンネルで広める必要があります。

**社内** コミュニケーション方法には次のようなものがあります:

- `#product`、`#s_`、`#g_`、`#f_` などのさまざまなプロダクトベースの Slack チャンネルでアップデートを共有する
- 方向性やカテゴリの変更を #customer-success にクロスポストし、[ユースケース](/handbook/marketing/use-cases/) に影響する場合は `@cs-leadership` を認知のためにタグ付け
- 方向性のアップデートについて議論する短いビデオを録画してカスタマーサクセスと共有する。効率的なコミュニケーションを促進するために [必要に応じて](/handbook/company/culture/all-remote/asynchronous/#gitlab-experts-advise-on-when-to-use-sync-vs-async) 同期ミーティングを使用する。
- [Field Communications チームと協力して](/handbook/sales/field-communications/#field-communications-playbook)、Field (Sales、Customer Success、Channel & Alliances) チームに対してより大きな社内コミュニケーション計画／アプローチが必要かを判断する
- 月次の方向性ページ更新のハイライトを集約し、組織全体のセクションレベルで共有する

**外部** チャンネルとして方向性ページにリンクすることを検討するもの:

- Twitter、LinkedIn、その他のソーシャルアカウント
- アカウントチームを通じてアウトリーチメールを共有する
- Unfiltered でウォークスルーを録画しソーシャルアカウントで促進する
- 重要または破壊的な変更の場合、その変更についてブログを書く

### End-of-Line テストのコミュニケーション

社内ワークフローや顧客向けのデモンストレーションに影響する可能性がある [End-of-Line テスト](/handbook/engineering/devops/plan/#internal-testing) を実施する場合、プロダクトチームは顧客にデモを行う Field チームメンバーの驚きを避けるため、社内アナウンスを調整する必要があります。

#### End-of-Line コミュニケーションガイドライン

- 社内アナウンスは End-of-Line テストに先立つ必要があります。アナウンスとクロスポストの推奨場所は、Slack チャンネルです: `#whats-happening-at-gitlab`、`#product`、`#customer-success`、`#solution-architects`。
- 顧客デモンストレーション中に影響を受ける可能性のある Field チームと調整する
- 影響範囲に応じて適切なコミュニケーションチャンネルを使用する

#### 責任

このコミュニケーションは、プロダクトマネージャーがエンジニアリングのカウンターパートと調整して、適切なステークホルダー通知を行うプロダクト主導の責任です。

### アクションを促す文章を書く

PM として、[行動志向](/handbook/values/#operate-with-a-bias-for-action) を心がけることが重要です (および [緊急感](/handbook/values/#sense-of-urgency)、[提案を行う](/handbook/values/#make-a-proposal)、[退屈な解決策](/handbook/values/#boring-solutions)、[書き留める](/handbook/values/#write-things-down)、[待たない](/handbook/values/#dont-wait)、[両方向のドアの意思決定をする](/handbook/values/#make-two-way-door-decisions) などの他の価値行動も)。これにより PM は非同期の議論を行動指向で推進できます。コメントを書いたり Issue を作成するたびに、自問してください: これによりアクションを取り、私たちを前進させることができるか？

### 機能について書く

PM として、私たちは出荷する機能やアップグレードについて常に書く必要があります: ブログ投稿で、社内で何かを促進するため、顧客に送られるメールで。機能について書く際にはいくつかのガイドラインを考慮する必要があります。最も重要なのは、ユーザーのために解決している問題を明確にコミュニケートすることです。

機能について書くときは、[これらのメッセージガイドライン](https://docs.gitlab.com/development/documentation/release_notes/) を必ずカバーしてください。これは明確な社内および社外のメッセージングを生み出すのに役立ちます。また、Minimal Valuable Change の "MVC" のように、他の人が認識しない可能性のある略語の使用は避けるべきだと心得ておいてください。詳細なガイダンスは、[文章スタイルガイドライン](/handbook/communication/#writing-style-guidelines) を参照してください。

上記のメッセージングガイドラインを具体例「リポジトリ内のシークレットの防止」で強調します。これは [8.12 で出荷されました](https://about.gitlab.com/releases/2016/09/22/gitlab-8-12-released/#preventing-secrets-in-your-repositories-ee)。

- コンテキストから始める。機能がない場合の現状について説明する。痛みのポイントを説明し、[Value Drivers](/handbook/sales/command-of-the-message/#customer-value-drivers) に結びつける (この場合は `Reduce Security and Compliance Risk`)。

> シークレット (キーや証明書など) をリポジトリにコミットするのは悪い考えです: リポジトリへのアクセス権を持つ全員のマシンにクローンされてしまいます。たった 1 つでもセキュアでないものがあれば、情報は漏洩します。残念ながら、これは非常に簡単に起こり得ます。`git commit -am 'quickfix' && git push` と書くと、ローカルにとどめておくべきだったファイルを突然コミットしてしまうことがあります！

- この問題を解決するために何を出荷したか説明する。

> GitLab に、シークレットを含むコミットがリポジトリに入るのを防ぐ新しいプッシュルールが追加されました。

- 機能の使い方を簡単な言葉で説明する。

> リポジトリ設定のプッシュルールでチェックボックスをチェックするだけで、GitLab は .pem や .key などの一般的な安全でないファイルがコミットされるのを防ぎます。

- ドキュメントや他の関連リンク (以前の投稿など) を指し示す。

参考にできるよく書かれたリリースブログ投稿の例:

- [Issue Board Work In Progress Limits](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#issue-board-work-in-progress-limits)
- [Parent-Child Pipelines](https://about.gitlab.com/releases/2020/01/22/gitlab-12-7-released/#parent-child-pipelines)
- [Drag-and-drop Design badges](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#drag-and-drop-design-badges)
- [Render charts in GitLab issues using a Grafana URL](https://about.gitlab.com/releases/2019/11/22/gitlab-12-5-released/)

### 機能をショーケースするビデオの録画

文章メディアに加えて、ビデオは、達成したい目標と対象オーディエンスの学習スタイルに応じた重要なメディアです。
録画するビデオのタイプによって、留意すべきガイドラインがあります。

私たちのドキュメンテーションガイドラインは [ビデオコンテンツのリンクを積極的に推奨](https://docs.gitlab.com/development/documentation/styleguide/#videos) しているため、
[Documentation Style Guide の言語セクション](https://docs.gitlab.com/development/documentation/styleguide/#language) に従って、
テクニカルライティングチームと協力し、製品ドキュメントの関連箇所にスピードラン、ウォークスルー、デモへのリンクを含めることを検討してください。

#### GIF の使用

アニメーション GIF は、マーケティング目的または機能をより詳細に説明するために、画像だけでは少し足りない機能を示す素晴らしい方法です。私たちの [GIF を作るガイド](/handbook/product/product-processes/making-gifs/) をチェックしてみてください！

#### スピードラン

スピードランは、単一のワークフローとそのワークフローを実行するための体験に焦点を当てた非公式のビデオです。あまり計画を必要とせず、通常は短い時間 (5 分未満) です。このビデオタイプは情報提供を目的とし、必ずしもバイヤーに影響を与えるためのものではありません。

例:

- [GitLab Unfiltered Speed Runs Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqSF4RAEzwC0qCBrM85OP7r)
- [CI/CD 経由で docker イメージを削除する スピードラン](https://youtu.be/jDlFCrH9H7g)

#### デモ

デモはバイヤーに影響を与えるためのスクリプト化された録画です。通常はより高い制作価値を持ち、スライド形式のプレゼンテーションおよび／またはライブ画面共有を伴います。所要時間はトピックによって異なります。

例:

- [GitLab for the Enterprise Demo](https://youtu.be/aIYLxMXQiLI)

#### ウォークスルー

プロダクトウォークスルーは、主に社内オーディエンス向けに、プロダクトクリティークの録画されたビジュアル形式として意図された非公式のビデオです。ウォークスルーは通常、プロダクトマネージャーの [プロダクトスコープ](/handbook/product/categories/) 内のカテゴリとワークフロー全体にわたるユーザーエクスペリエンスに焦点を当てます。[プロダクト階層](/handbook/product/categories/#hierarchy) 境界を越えるウォークスルー (マルチカテゴリ、マルチステージ、マルチセクション) には特に利点があり、私たちの単一アプリケーション全体にわたる断絶した体験を浮き彫りにするのに役立ちます。

ウォークスルーは通常、より広範な領域をカバーするため長くなり、しばしば「ライブ」のトラブルシューティングを含み、計画なしで実行するのが最適です。ウォークスルーを作成する際は [Product walk-through issue template](https://gitlab.com/gitlab-com/Product/issues/new?issuable_template=Product-Walk-Through) を使用してください。

例:

- [Auto DevOps セットアップと使用のウォークスルー](https://youtu.be/V4NX2j2HQAs)

### ステージングや他の場所でのリリース候補の QA

機能凍結後、各プロダクトマネージャーは自分自身の機能をテストして、可能な限りの品質保証を行い、必要に応じてフォローアップすることが期待されます。

プロダクトマネージャーは、リリースマネージャーがリリース候補 (RC) をステージングにデプロイしたら、ステージング環境を使用できます。
リリースマネージャーは Slack の `#product` チャンネルで新しいリリース候補が利用可能であることを投稿する必要があります。プロダクトマネージャーは、必要に応じて GKE 上の Kubernetes にプロビジョニングされた GitLab など、他の環境も使用できます。

### 機能アシュアランス

新しい機能が出荷される前に、PM はその機能が元の問題を効果的に解決することを確認するためにテストすべきです。これは品質保証 (QA) についてではなく、開発者が自分のコードの品質に責任を持っているためです。これは機能アシュアランス (FA) についてです。FA は、元の Issue 提案と最終的な実装の間で誤解がある場合があるため必要です。時には、機能が意図された問題を実際には解決していないことがあります。そう見えていたのに、解決策が実装されると意図したほど有用に感じられないことがあります。

開発中に機能をテストできれば (ローカルでブランチをプルダウンするか、レビューアプリを使用)、それは素晴らしいことです。しかし、機能がリリース候補にバンドルされて GitLab.com にデプロイされるまでテストできない場合があります。その場合、最終リリースの前に新しい Issue に対処できるよう、できるだけ早く機能をテストしてください。また、新しいマイルストーンの作業をスケジュールする際は FA サイクルを考慮してください。

GitLab.com にまだマージされていないコードや、まだ RC の一部ではないコードをテストしたい場合は、ブランチをローカルにプルダウンし、[GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit) Development Kit (GDK) を使ってテストできます。

### セキュリティ Issue の対応

エンジニアリングマネージャーはバグの優先順位付けの DRI です。これにはセキュリティ Issue が含まれ、これらはセキュリティチームと連携して優先順位が付けられます。プロダクトマネージャーは、エンジニアリングマネージャーと協力して `bug::vulnerability` [タイプラベル](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) が付いた Issue のマイルストーンを設定し、[Security Team プロセス](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues) で定義された期日までに出荷されることを保証する必要があります。

プロダクトマネージャーは [マイルストーン計画](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) の DRI ですが、エンジニアリングマネージャーが決定するバグおよびメンテナンス Issue の優先順位を尊重する必要があります。そのため、セキュリティ関連 Issue の影響とリスクを深く理解し、マイルストーン作業の優先順位付け時にこれらをバランスさせる必要があります。重大なセキュリティ Issue を期日までに対処するには、1 つまたは複数のマイルストーンで望ましい作業タイプ比率を一時的に調整する必要があるかもしれません。セキュリティ Issue の優先度ラベルと期日指定は、セキュリティチームによって直接管理され、メトリクスと進捗の追跡に使用されるため、プロダクトマネージャーが変更してはなりません。

### 基礎要件

新機能について考えるとき、機能の機能要件 (何をするかを定義するもの) だけでなく、基礎要件 (どのように機能するかを定義するもの) も考慮する必要があります。最も高いレベルでは、基礎要件は、機能のパフォーマンス、スケーラビリティ、互換性、保守性、ユーザビリティ特性などの項目を定義します。基礎要件を最初から確立することは重要です。後で追加して期待値を変更したり、既存のワークフローを壊したりするよりもはるかに簡単だからです。私たちの [definition of done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) には、新しいコントリビューションの受け入れに必要な特定の考慮事項が含まれています。

基礎要件 (しばしば非機能要件と呼ばれる) の詳細なレビューについては、[このリソース](https://www.altexsoft.com/blog/non-functional-requirements/) を参照してください。

機能を提供するためには、機能要件と基礎要件の両方が定義されている必要があります。

#### アプリケーション制限の導入

GitLab の可用性とパフォーマンスを向上させるために、ストレージを使用する機能や、パフォーマンスに影響を与える形でスケールする機能には、設定可能な制限を設けるべきです。例えば、私たちは [プロジェクトあたりの Webhook 数を制限](https://docs.gitlab.com/user/project/integrations/webhooks/) しており、管理者が [raw エンドポイントのレート制限](https://docs.gitlab.com/administration/settings/rate_limits_on_raw_endpoints/) を設定することを許可しています。これらの制限により、より一貫したパフォーマンスが保証され、停止の可能性が減少し、管理者に悪用を制限したり特定の基準を強制したりするツールを提供します。これらの制限は設定可能ですが、GitLab SaaS と GitLab Dedicated のオファリングには、妥当なデフォルト制限を定義する必要があります。

GitLab Docs には [アプリケーション制限の開発](https://docs.gitlab.com/development/application_limits/) に関するガイドがあります。

##### アプリケーション制限を実装するとき

[Rate Limiting::Managing Limits](/handbook/engineering/infrastructure-platforms/rate-limiting/managing-limits/) を参照してください。

#### データのライフサイクルと成長の管理

製品をスケーリングし続ける中で、新機能のために保存されるデータ量を考慮する必要があります。データストレージは無限のリソースではないため、望ましいユーザーエクスペリエンスを提供するためにどのデータが永続的なストレージを必要とするかを慎重に考えるべきです。また、データストレージに関するコストの影響も考慮する必要があります。保存するすべての項目が最終的な利益に影響するため、よく考えられた時間枠で必要なデータのみを保存しているか注意する必要があります。私たちは [持続可能なデータ保持ポリシーを定義する](https://gitlab.com/groups/gitlab-org/-/epics/13693) ことに取り組んでおり、より一般的なガイドラインが開発されるにつれてこのセクションを反復していきます。

データストレージは GitLab には主に 3 つの形態があります: オブジェクトストレージ、データベースストレージ、Git リポジトリストレージ。これらのストレージを適切にスケールできるようにすることに専念する専任チームがありますが、機能が意図通りに動作するために必要なものだけを保存することが私たちの利益になります。さらに、ストレージはデータ保持ポリシーの対象となるべき状況もあります。

##### データストレージに関する考慮事項

機能のデータストレージを評価する際、次のデータストレージのトピックを考慮する必要があります。

- **どの程度の量のデータを保存する必要があるか？** - 機能が意図通りに動作するために、どれだけのデータを保存する必要があるか。このレベルのデータストレージは制限されているか、無制限に成長する可能性があるか。可能であれば、無制限の成長は避けるべきです。
- **データをどのくらい長く保持すべきか？** - データを永続的に保存する必要性を慎重に考えるべきです。多くの機能では、指定された期間後に特定のデータを削除しても機能には影響しません。これらの場合、保持ポリシーを実装すべきです。これらの保持ポリシーには、機能を長期的に運用するためのベストプラクティスと考えられる妥当なデフォルト値があるべきです。_注: より長いデータ保持期間に反復するのは簡単ですが、保持期間を短縮するのははるかに難しいです。最初に保守的な期間で始めることを検討してください。_
- **このデータはどのくらい頻繁にアクセスされるか？** - 保存されるデータ量がスケーラビリティの問題を引き起こすのと同様に、データがアクセスされる頻度もデータストアへの負荷を増加させる可能性があります。クエリを適切に構築し、よく使われるデータをキャッシュし、リポジトリデータがどのようにアクセスされるかを慎重に検討することで、インフラストラクチャの負担を軽減する方法があります。質問がある場合は、[Database Group](/handbook/product/categories/#database-group) または [Git Group](/handbook/product/categories/#git-group) に支援を求めることを検討してください。

データストレージの評価が成功した良い例は CI/CD アーティファクトです。私たちは管理者ユーザーのためにこれらの両方を設定可能にしながら、[最大アーティファクトサイズ](https://docs.gitlab.com/administration/settings/continuous_integration/#maximum-artifacts-size) と [デフォルトのアーティファクト有効期限](https://docs.gitlab.com/administration/settings/continuous_integration/#default-artifacts-expiration) に妥当なデフォルト値を設定しました。

### クロスステージ機能

GitLab でステージをまたいで作業する詳細については、[このページ](/handbook/product/cross-stage-features/) を参照してください。

### ステージ、グループ、カテゴリ

[ステージ、グループ、カテゴリ](/handbook/product/product-processes/#stages-groups-and-categories) は、GitLab のスコープを整理し、コミュニケートするための共通フレームワークとして機能します。

## PM としての働き方

上記の原則とワークフローに従えば、来年の製品の一部について長く詳細な仕様を書くことはなくなります。では、どのように時間を使うべきでしょうか？

時間の大部分 (たとえば 70%) を問題を深く理解することに投資します。
それから、時間の 10% を仕様 _の最初のイテレーションのみ_ を書くことやコメントへの対応に使い、残りの 20% を促進に使います。

よく理解した問題は、常に (一見) シンプルまたは明白な解決策を持つはずです。それを最もシンプルな形に削減し (上記参照)、それだけを出荷します。

### 優先順位付け

詳細は [Cross-Functional Prioritization ページ](/handbook/product/product-processes/cross-functional-prioritization/) を参照してください。

#### 優先順位付けフレームワーク

<!-- include omitted: includes/product/master-prioritization-list.md -->

<!-- include omitted: includes/engineering/engineering-allocations.md -->

可用性、セキュリティ、機能速度の相対的な重要性と優先順位付けに関する [エンジニアリングハンドブックセクション](/handbook/engineering/development/principles/#prioritizing-technical-decisions) も参照してください。セキュリティ、データ損失、可用性に適切な焦点を当てていることを保証するために、PM は次のことを考慮する必要があります:

- **各優先順位付けカテゴリの適切なラベルを追跡すること**: エンジニアリングマネージャーとこれらの Issue について議論するためのスタンディング項目を使用し、リリースを計画する前にあなたの領域の関連 Issue の影響を理解していることを確認してください。
- **マージリクエストがレビュー準備ができたら品質に最適化すること**: これは、何かを本番にするためにショートカットをせず、エンジニアリングが [definition of done](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/merge_request_workflow.md#definition-of-done) を満たすのに十分な時間を持つこと - [高品質のコードレビュー](/handbook/engineering/workflow/code-review/) を含む - を意味します。

##### 機能変更ロック（FCL）

機能変更ロックは、重大度の高いインシデント後にチームの焦点を信頼性作業に時間枠を設けてシフトさせます。FCL が施行されると、既存の優先順位に影響を与える可能性があります。FCL プロセスはエンジニアリングが推進します。詳細なプロセスは [エンジニアリングページ](/handbook/engineering/#feature-change-locks) を参照してください。

#### 優先順位付けセッション

PM が計画を立てる手助けとして、ステージグループの安定したカウンターパートは、優先順位付けセッションに参加できます。これらは主に、PM がさまざまな計画ホライズンに対してより情報に基づいた優先順位付け決定をするための [internal sensing mechanism](/handbook/product/product-processes/sensing-mechanisms/#internal) として機能します。通常、チームは _プロダクトリリース_ ホライズンに焦点を当てますが、_FY テーマ_ または _戦略_ ホライズンに焦点を当てることもできます。このグループのエクササイズは、チームの士気を高め、コミュニケーションと共感を向上させ、個人の視点を広げます。さらに、チームをつなげ、仕事について議論する、よりインフォーマルで楽しい方法にもなり得ます。

これらのセッションの成果物は、2 つの重み付けされた基準に基づいて項目セットの相対的な優先度を示す [優先度マトリックス](https://www.nngroup.com/articles/prioritization-matrices/) です。一般的には、基準は _重要性_ と _実現可能性_ で、それぞれマトリックスの軸として可視化されます。計画ホライズンや目標に応じて基準を変更できます。セッションがどのように機能するかをよりよく理解するには、サンプル [mural](https://app.mural.co/t/gitlab2474/m/gitlab2474/1644233739498/018f4f87c17c9a8e7ecf1d8ce2834a72c4d8e34b) および [セッションの録画](https://youtu.be/xgeXUEzOpUY) を参照してください。

より包括的で、他の人の時間を尊重するために、常にまず [非同期セッション](/handbook/values/#bias-towards-asynchronous-communication) を検討してください。とはいえ、可能であれば、同期セッションが理想的な場合があります。時間の使用を制限でき、アクティビティのモメンタムをより効率的な議論と投票のために活用できるからです。

[優先順位付けセッション用の Mural テンプレート](https://app.mural.co/t/gitlab2474/template/1c2480fb-073f-45aa-a179-75a5e9a72740) を使用してください。これはプロダクトリリース用に作られていますが、他の計画ホライズンや基準にも適応可能です。

<details markdown="1">
<summary markdown="span">プロセステンプレート</summary>

必要に応じてこのプロセスを適応させ、非同期のコミュニケーションモードに変更することを検討してください。例えば、参加者は項目を非同期にレビューし、[Mural のコメント](https://support.mural.co/en/articles/2113811-add-comments-and-tag-collaborators) として質問を追加し、[ドット投票](https://www.nngroup.com/articles/dot-voting/) または各基準について別の日に行う [投票セッション](https://support.mural.co/en/articles/2113758-run-a-voting-session) で投票できます。

1. 事前に:
   1. ファシリテーターは、ステージグループとマイルストーンを名前に含めた、[優先順位付けセッション用のテンプレート](https://app.mural.co/t/gitlab2474/template/1c2480fb-073f-45aa-a179-75a5e9a72740) から mural を作成します。
   1. ファシリテーターは、チームがリリーススコープを確定する前のいつか (詳細は [プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) を参照) にスケジュールされた 50 分の通話に、ステージグループのカウンターパートを招待します。イベントの説明に mural と計画 Issue の URL を含めます。
   1. ファシリテーターは、グループの計画 Issue で参加者と準備作業を共有することが望ましいです (このリストの後のテンプレートと [例](https://gitlab.com/gitlab-org/create-stage/-/issues/12980#note_834155059) を参照)。
   1. 参加者は準備作業を行います (このリストの後のテンプレートを参照)。
1. 当日 ([セッションの録画例](https://youtu.be/xgeXUEzOpUY) を参照):
   1. ファシリテーターは [通話の録画](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording) を開始します。
   1. **発表**: 各参加者について、ファシリテーターは [タイマーを設定](https://support.mural.co/en/articles/3029991-using-the-timer) します (参加者数に応じて適応、10 分)。参加者は次に、[RICE フレームワーク](#using-the-rice-framework) を使用することが望ましく、自分の Issue を発表します。参加者がすべての Issue を発表してから初めて、他の出席者が質問できます。ファシリテーターは時折、残り時間を発表します。タイマーが鳴ったら、これを別の参加者で繰り返します。
   1. **投票**: すべての参加者が発表した後、ファシリテーターは [2 つの投票セッション](https://support.mural.co/en/articles/2113758-run-a-voting-session) を実施します: 最初に _重要性_、次に _実現可能性_ です。各参加者は 5 票持ちます (Issue 数に応じて適応)。ファシリテーターはタイマーを 2 分に設定し、各投票セッションで繰り返します。
   1. **可視化**: [投票セッションの結果をレビュー](https://support.mural.co/en/articles/2113758-run-a-voting-session#h_7cb8e4f588) し、各基準の投票数に応じて、全員がマトリックスに付箋を配置するのを手伝います。
   1. 時間が残っていれば、最も投票が多かった Issue をグループで議論します。
1. 事後:
   1. ファシリテーターは [録画を GitLab Unfiltered にアップロード](/handbook/marketing/marketing-operations/youtube/#uploading-conversations-to-youtube) し、可視性を設定し ([SAFE フレームワーク](/handbook/legal/safe-framework/) を参照)、関連するプレイリストに追加し、説明に mural と計画 Issue の URL を含めます。
   1. ファシリテーターは録画 URL と投票結果を計画 Issue で共有します。できればマトリックスのスクリーンショットと最も投票された Issue へのリンクを添えて (例は [こちら](https://gitlab.com/gitlab-org/create-stage/-/issues/12980#note_843540512) を参照)。

<details markdown="1">
<summary markdown="span">準備作業テンプレート</summary>

```markdown
## :map: Prioritization session

`@-mention participants` for our [prioritization session](/handbook/product/product-processes/#prioritization-sessions), here's the [**Mural**](URL) for us to add the issues we want to see in **MILESTONE**. I scheduled our 50-minute session for **DATE**.

1. Add your issues to the Mural before the call. Let's try to limit to **5 issues per person**, so it's easier to vote on them and keep things focused. You can find instructions on how to add them in the "Outline" panel on the right side of the Mural UI.
1. Try not to add Security or Availability issues. This is also noted in the [product processes page](/handbook/product/product-processes/#prioritization), as those issues have forced prioritization with SLAs/SLOs.
1. If you can, mark issues that appeared in previous sessions by changing their sticky color to **orange**.

Thanks and see you soon :bow:
```

</details>

</details>

### RICE フレームワークの使用

[RICE](https://www.productplan.com/glossary/rice-scoring-model/) は、Issue のスタックランク付けに役立つ優先順位付けのための有用なフレームワークです。RICE フレームワークは、一見等しい価値に見える多くの Issue を優先順位付けするための優れたツールです。DevOps プラットフォーム全体で作業の優先順位付けにおける明確さと整合性を促進し、異なるチームからのリソースを競合する可能性のある項目の優先順位付けを助けるため、RICE 因子の標準を設定して、RICE に基づくすべての優先順位付け決定が同じメトリクスを使用するようにしました。

**Reach (リーチ)** ローンチ後の最初の四半期に、何人の顧客が恩恵を受けるか？これを推定するデータソースには、定性的な顧客インタビュー、[Support/CS/Sales](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) を通じた顧客リクエスト、Issue のアップボート、サーベイなどが含まれます。

リーチが高いほど RICE スコアは高くなります:

- 10.0 = ユーザー、見込み客、顧客の大多数 (約 80% 以上) に影響
- 6.0 = 上記の大きな割合 (約 50% 〜 約 80%) に影響
- 3.0 = 重要なリーチ (約 25% 〜 約 50%)
- 1.5 = 小規模なリーチ (約 5% 〜 約 25%)
- 0.5 = 最小限のリーチ (約 5% 未満)

**Impact (インパクト)** これは顧客と GitLab にどの程度影響するか？インパクトは、(顧客と GitLab の両方の) 収益増加、リスク減少、コスト減少の形を取り得ます。これにより、収益を生み出す機会と非収益機会を比較することが可能になります。将来のインパクトの可能性、GitLab ブランドへのインパクト (例えば無料から有料への変換機会のアンロック) も考慮されるべきです。

インパクトが高いほど RICE スコアは高くなります:

- Massive = 3x
- High = 2x
- Medium = 1x
- Low = 0.5x
- Minimal = 0.25x

**Confidence (信頼度)** 顧客の問題をどれだけよく理解しているか？解決策と実装の詳細をどれだけよく理解しているか？信頼度が高いほど RICE スコアは高くなります。

- High = 100%
- Medium = 80%
- Low = 50%

**Effort (労力)** これを構築するのに何人月かかると見積もるか？労力が少ないほど RICE スコアは高くなります。

**RICE スコアの計算**

これら 4 つの因子は、次の式で RICE スコアを計算するために使用できます:

(Reach x Impact x Confidence) / Effort = RICE

あなたの領域での作業の優先順位付けに使用できる RICE 計算の例です。優先順位を付けた、または付けなかった理由のコンテキストを提供するために、Epic レベルでこれを埋め込んでください。

| **RICE 因子** | **見積もり値** |
| ----------- | --------------- |
| Reach | `10.0` |
| Impact | `.5` |
| Confidence | `80%` |
| Effort | `2 month` |
| ------ | ------ |
| Score | (10.0 x .5 x .80) / 2 = **2.0** |

その他の重要な考慮事項:

- これは会社またはチームの [OKR](/handbook/company/okrs/) をサポートしますか？
- 私たちの [ビジョン](https://about.gitlab.com/direction/#vision) を現実に近づけますか？
- [モデレーションツール](https://gitlab.com/gitlab-org/gitlab/issues/15326) を通じて私たちのコミュニティをより安全にしますか？
- 重要なワークフローのユーザーエクスペリエンスを意味のある形で改善しますか？
- これは私たち自身が必要とするものですか？
- これは特に [顧客にとって重要](#issues-important-to-customers) ですか？
- 技術的な複雑さは許容範囲です。将来的に変更を迅速に行う能力を維持したいため、複雑なコード、複雑なデータ構造、オプション設定を避けるよう努めます。
- 他の機能と直交しています (現在および将来の機能との重複を防ぐ)。
- 要件は明確です。
- スケジュールされたマイルストーン内で達成できます。大きな Issue は分割して、個々のステップが単一のマイルストーン内で達成できるようにすべきです。
- [調査参加者への謝礼](/handbook/upstream-studios/research-operations/participation-gratuities/)セクションを参照し、[スタディがインセンティブ配布の対象となるか](/handbook/upstream-studios/research-operations/participation-gratuities/)を確認してください。

優先順位を付けた Issue は、マイルストーンを割り当てることでスケジュールします。詳細は将来のリリースの計画を参照してください。

#### 非同期 RICE エクササイズ

部門横断のカウンターパートと RICE 優先順位付けエクササイズを実施することは、プロセスをより包括的にし、ランキングの質を向上させる強力な方法です。さまざまなタイムゾーンのチームメンバーに対応するため、これを非同期ファーストプロセスにすることを検討してください。非同期ファーストでこれを行う方法の例については、[Geo チームが RICE 優先順位付けエクササイズで協力するために使用したこの Issue](https://gitlab.com/gitlab-org/geo-team/discussions/-/issues/5015) を参照してください。また、独自の非同期優先順位付けエクササイズ用にコピーできる [空白の非同期 RICE テンプレート](https://docs.google.com/spreadsheets/d/13VgIHJ8y4RrvkNIyhY-gqb4VH9nsY5jrweMikYBXHhU) も利用可能です。

### 顧客にとって重要な Issue

ほとんどの Issue の優先順位付けには、[上記](#prioritization) で述べた RICE フレームワークを利用するべきで、これにより顧客需要の集約が捕捉されます。RICE スコアを [Customer Issues Prioritization Framework Dashboards](/handbook/product/product-processes/customer-issues-prioritization-framework) で補強することもできます:

[Customer Requested Issues (Product)](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) プロダクトマネージャー向け
[Customer Requested Issues (CSM)](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) Sales、CS、CSM 向け

これらのダッシュボードは RICE を計算するためのいくつかの入力を提供し、すべての顧客リクエスト Issue と Epic を 1 つのダッシュボードに集約します。これらのダッシュボードは [Top ARR Drivers for Sales/CS](https://docs.google.com/document/d/1TxcJqOPWo4pP1S48OSMBnb4rysky8dRrRWJFflQkmlM/edit#heading=h.t3hg8c37s87g) の代替や唯一の入力として意図されていません。このフレームワークを使って [Top ARR tracker](https://docs.google.com/spreadsheets/d/1JdtaZYO90pR4_NQgSZRu9qdGuMrFj_H6qkBs5tFMeRc/edit#gid=0) などのツールを完全に通知または置換するには、[テーマの統合](https://gitlab.com/gitlab-com/Product/-/issues/3907) などのさらなる要件を実装する必要があります。

ただし、特定の日付までに提供することが特に重要な機能を認識する場合があります。例えば、新しい GitLab ロールアウトを開始するために必要な Issue、パートナーが統合を起動するために必要な機能、または廃止されているサービスからデータをインポートする方法などです。これらの場合、責任ある PM は `customer` または `customer+` ラベルに加えて `due date` と初期の `milestone` を適用できます。このラベルセットは、Issue が特に重要であることを外部的に示し、内部チームに対するその重要性のリマインダーとして機能します。

`customer` および／または `customer+` ラベルは、Issue が特定のマイルストーンまたは時間枠で提供される約束を構成するものではないことに注意することが重要です。

### コミュニティへの配慮

GitLab はオープンソースであり、コントリビューターの大きなエコシステムを奨励し促進することが、私たちの成功にとって重要です。優先順位付けの決定をする際には、より強力なコントリビューターコミュニティを奨励するアクティビティに重く重み付けすることが重要です。これらのアクティビティには以下が含まれます:

- コミュニティメンバーが利用し反復できる小さなプリミティブの作成
- 独立した第三者にインテグレーションへの貢献を促す統合ポイントの構築
- コントリビューション体験を容易にするツールや機能の追加

プロダクトマネージャーは、彼らのグループの外でのコントリビューションの優先順位付けに責任はありません。これらのコントリビューションは [迅速にレビューおよびマージ](https://docs.gitlab.com/development/contributing/#contribution-flow) されるべきで、GitLab の非プロダクトチームを含むすべての人がコントリビュートできるようにします。

### SaaS-First フレームワーク

[SaaS-First プロダクト投資テーマ](https://about.gitlab.com/direction/#saas-first) は、今後数年間で SaaS 製品の採用を加速することが予想される顧客ベースをサポートするためのより良い立場に私たちを置くものです。SaaS の期待に合わせて最初に構築されれば、機能は私たちの self-managed 顧客にとってもより安全、回復力がある、パフォーマンスがよい、スケーラブルなものになります。したがって、PM が SaaS ビジネスに関連するニーズを理解し優先順位を付けることが重要です。SaaS 関連の Issue を優先順位付けする際には、[上記のガイドライン](#prioritization) に従います。これらのガイドラインの中で、PM が SaaS ユーザーの成功を保証するために特に焦点を当てるべきいくつかの領域があります。

#### 可用性

GitLab.com のダウンタイムは私たちの顧客に大きな影響を与えます。2014 年の Gartner のレポート [Gartner の試算](https://web.archive.org/web/20230709185836/https://blogs.gartner.com/andrew-lerner/2014/07/16/the-cost-of-downtime/) では、ダウンタイムは企業に平均で「1 分あたり 5,600 ドル、これは 1 時間あたり 30 万ドル以上に外挿される」コストがかかると述べられています。さらに、SaaS のダウンタイムは GitLab Inc の生産性を著しく阻害する可能性があります。私たちはビジネスを運営するために GitLab.com に大きく依存しているからです。最後に、ダウンタイムは顧客のチャーンと私たちの評判の損傷につながる可能性もあります。したがって、企業として私たちは [GitLab.com で 99.95% SLA を一貫して維持する](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=1614038400000&to=1616630399000) ことに集合的に取り組むことが重要です。PM が、GitLab.com の全体的な可用性を保証するためにエンジニアリングチームと協力してできることがいくつかあります。

- 構築されるすべての新機能が完全なエンドツーエンドのテストカバレッジを持つことを確認する。
- 主要な新機能ローンチをサポートする新サービスを展開する前に、チームが [PREP プロセス](/handbook/engineering/infrastructure-platforms/production/prep/) を経たことを確認する。準備レビューの労力と時間は機能の複雑さによって異なります。多くの質問に答えることができるが、レビューからの学びに基づいて機能をさらに開発するには遅すぎないタイミングで、できるだけ早くこのプロセスを開始することが推奨されます。
- [悪用ベクトル](/handbook/security/security-operations/trustandsafety/abuse-on-gitlab-com/#abuse-categories) を減少させるため、あなたのプロダクト領域に対し GitLab.com で有効な [アプリケーション制限](/handbook/product/product-processes/#introducing-application-limits) があることを確認する。

#### Infradev

[infradev プロセス](/handbook/engineering/workflow/#infradev) は、SaaS の可用性と信頼性をサポートするために優先的な注意を必要とする Issue をトリアージするために使用されます。会社全体で技術的負債を責任を持って管理するより広い取り組みの一環として、PM は EM と協力して [全重大度](/handbook/product-development/how-we-work/issue-triage/#severity) の infradev ラベル付き Issue を特定し [組み込む](/handbook/engineering/workflow/#product-management) べきです。なお、重大度がラベル付けされた Issue は、SLO を満たすために [特定の時間枠](/handbook/product-development/how-we-work/issue-triage/#availability) 内に緩和および解決される必要があります。EM が infradev 作業の優先順位付けの DRI であるため、PM は [infradev プロセス](/handbook/engineering/workflow/#infradev) と [Board](https://gitlab.com/groups/gitlab-org/-/boards/1193197?label_name%5B%5D=infradev) に慣れる必要があります。

PM が Infradev Issue を特定し優先順位付けするために参照できる他のリソース:

- [Error Budgets](/handbook/engineering/error-budgets/#what-are-error-budgets) と [関連ダッシュボード](https://dashboards.gitlab.net/d/stage-groups-configure/stage-groups-group-dashboard-configure-configure?folder=current&orgId=1&search=open)
- [SLO の欠落を防ぐため、PM にメールで送られる週次のトリアージレポートには infradev 項目も含まれるようになりました](https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/661)。
- アプリケーションパフォーマンスを監視するための [Largest Contentful Paint](/handbook/engineering/development/performance-indicators/#largest-contentful-paint-lcp) メトリクス。

必須ではありませんが、PM は自分の製品領域に関連するインシデントについて [Incident Management](/handbook/engineering/infrastructure-platforms/incident-management/#incident-management) コールを聞くことが推奨されます。これにより 1) SRE チームがどのようにインシデントを処理するかを洞察することで SRE チームと共感を築き、2) 顧客ベースへのインシデントの影響をよりよく把握し、3) インシデントを防ぐことができた可能性のある製品領域の改善 (技術的または機能関連) を特定できます。PM はインシデントを解決するためのアクションについて意思決定パスにいることは期待されません。彼らは解決の方向を決定／影響を与えようとするのではなく、聞いて学ぶためにそこにいます。製品領域に関わるインシデントの後、PM はまた [Incident Review](/handbook/engineering/infrastructure-platforms/incident-review/) に関与することが推奨されます。これには、彼らのインシデントがスケジュールされている場合に [Sync Incident Review](/handbook/engineering/infrastructure-platforms/incident-review/) コールに参加することも含まれます。PM は [Production Incident Board](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name%5B%5D=incident) を通じて定期的にインシデントをレビューできます。

#### エンタープライズ顧客のニーズ

SaaS の採用に興味があるエンタープライズ顧客は、製品を使用するために共通のハード要件を持つことがあります。例えば、大企業はセキュリティチームが GitLab.com の使用に同意する前に、Audit Logs などの特定のセキュリティ関連機能が利用可能であることを必要とする場合があります。これは単に機能だけでなく、私たちが機能をどこにどのように適用するかについてもあり得ます。彼らがエンタープライズ規模で GitLab インスタンスを管理できるようにするためです。例えば、権限管理と共有設定は、100 または 1000 のプロジェクトと、これらのシステム全体の管理タスクを実行する少数の人員しかいない可能性のある大規模組織の要件を満たすには、プロジェクトからではなくトップダウンで最初に実装することが最善です。GitLab.com のエンタープライズ採用をより促進するため、採用への「nice to have」機能よりも、採用への共通の「hard-blockers」を優先順位付けします。PM は顧客インタビューを使って、SaaS の採用へのハードブロッカーである Issue と、後で提供できるより「nice to have」の機能を絞り込むことができます。

ハード採用ブロッカーを追跡するには、[GitLab-Org](https://gitlab.com/groups/gitlab-org/-/boards/2037713?label_name%5B%5D=GitLab.com%20Enterprise%20Readiness) および [GitLab-com](https://gitlab.com/groups/gitlab-com/-/boards/2037722?label_name%5B%5D=GitLab.com%20Enterprise%20Readiness) グループ内で ~"GitLab.com Enterprise Readiness" ラベルを使用してください。

#### SaaS 機能

SaaS のために機能を提供する際にはいくつかの特別な考慮事項があります。[SaaS と Self-managed のインストール間のパリティ](/handbook/product/product-principles/#design-for-self-managed-for-feature-parity-between-deployments) を達成するために、PM は [2 つのインストール間](https://about.gitlab.com/features/) に存在する既存の機能ギャップを排除する取り組みを優先する必要があります。さらに、新機能は SaaS と Self-managed で同時に出荷されるべきです。機能は [self-managed と SaaS の両方](https://about.gitlab.com/direction/foundations/#gitlabcom) で動作するように、インスタンスレベルで実装される前にグループレベルで最初に実装される必要があります。最後に、新機能が適切に監視されるためには、[適切なロギングと観測性](https://gitlab.com/gitlab-com/gl-infra/readiness/blob/master/.gitlab/issue_templates/production_readiness.md#monitoring-and-alerts) を含める必要があります。これによりトラブルシューティングがはるかに容易になります。

### あなたのグループとの仕事

プロダクトマネージャーとして、あなたは単一の [グループ](/handbook/company/structure/#product-groups) の [安定したカウンターパート](/handbook/company/structure/#specialist) として割り当てられます。GitLab では、グループとやり取りする際に、独自で非常に有益なガイドラインに従います。これらには以下が含まれます:

1. プロダクトマネージャーは全体的な作業の優先順位付けの [DRI](/handbook/people-group/directly-responsible-individuals/) ですが、各 [作業タイプ](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) からの適切な優先順位が考慮されることを保証するため、EM および UX の安定したカウンターパートと協力して働きます (各タイプは異なる DRI を持つため)。プロダクトマネージャーは全体的な優先順位をコミュニケートする責任があります。
1. プロダクトマネージャーは機能作業の「何を」「いつ」を提供します。エンジニアリング (UX、バックエンド、フロントエンド) は「どのように」を提供します。このプロセスは私たちの月次の [プロダクト](/handbook/product-development/how-we-work/product-development-flow/)、[エンジニアリング](/handbook/engineering/workflow/#product-development-timeline)、[UX](/handbook/product/ux/product-designer/) のケイデンスの一部としてドキュメント化されています。グループ内の [これらの各機能について安定したカウンターパートを定義](/handbook/product/categories/) しています。

オールリモートの会社として、プロダクト提供プロセス全体での責任に関する明確さは必要性から生まれましたが、それは計り知れない配当をもたらします。利点には以下が含まれます:

- チーム間のハンドオフの曖昧さを避ける
- 多くの責任ある個人による混乱を避ける
- コンセンサス駆動の意思決定の遅さを避ける
- 頻繁なコンテキストスイッチによる中断を避ける
- 一貫性を保つための堅牢性を得る
- 素早く反復する自由を得る

#### 優先順位付けから実行へ

上記のように、優先順位付けは多面的な問題です。任意のグループの優先順位を、エンジニアリングチームによる行動に変換するには、この多面的な問題を、少なくとも次のリリースサイクルの優先順位のフラットなリストに変換できる必要があります。プロダクトマネージャーは [これらの優先順位付けの考慮事項をすべて取り入れ](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone)、次の優先順位の明確で順序付けされたリストを作成する責任があります。このリストは、各チームが作業についての意思決定を行うための明確なインターフェースとして、[Issue Board](https://docs.gitlab.com/user/project/issue_board/) として表現される必要があります。このリストから、プロダクトデザイナー、エンジニアリングマネージャー、プロダクトマネージャーは、当面取り組むべき項目を決定するために協力できます。

これは項目が厳密な順序で対処されるという意味ではありません - プロダクトデザイナー、EM、PM は、依存関係、利用可能なスキルセット、および作業の選択について最適な決定をするための時間管理の [岩／小石／砂](https://www.developgoodhabits.com/rock-pebbles-sand/) 問題を意識する必要があります。

#### ビルドプランのレビュー

エンジニアリングマネージャーと一緒に、あなたは Issue に対して定義されるビルドプランがイテレーションを念頭に置いて作成されることを保証する重要な役割を持ちます。イテレーションは次の理由で非常に価値があります:

1. 取り組みを並列化する方法を発見でき、チーム WIP が少なくなりスループットが増加する
1. イテレーション中に価値あるものを出荷でき、すべてを遅らせるのではなくなる
1. 開発プロセスの早い段階で未知の未知を浮き彫りにすることで、それらをデリスクできる

#### 予測可能性のための優先順位付け {#prioritize-predictability}

会社として、私たちは [予測可能性よりも速度](/handbook/engineering/development/principles/#velocity) を強調します。プロダクトマネージャーとして、これはあなたが Issue のスケジューリングではなく、優先順位付けに集中することを意味します。あなたのエンジニアリング [安定したカウンターパート](/handbook/leadership/#stable-counterparts) は速度と提供の責任を持ちます。ただし、予測可能性が望まれる場合もあります:

- SLO を持つ [セキュリティ](#dealing-with-security-issues)、バグ、Infra の優先順位
- [顧客への約束](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=planning+priority)
- IACV ドライバーの影響を持つインフラプロジェクト、または gitlab.com に大幅なコスト削減をもたらすもの
- 顧客への約束を持つ、または多くアップボートされたインフラプロジェクトは、他の顧客約束を示す優先順位を与えられるべき
- ローンチのためのビジョンまたは方向性の項目

[マイルストーン優先順位付け](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) の DRI として、必要な場合に予測可能性のために優先順位付けすることはプロダクトマネージャーの仕事です。これは、提供物とその依存関係を優先順位付けし、約束された日付までに合理的に提供できるようにすることで行うべきです。日付に到達するための時間プレッシャーがある場合、PM はまた、エンジニアリングに異常に速く動くことや手抜きをするよう圧力をかけるのではなく、期限を満たすために Issue のスコープを削減することを検討すべきです。

#### モニタリングと KPI 追跡のためのプライベートツールとダッシュボード

これらの情報源は、優先順位付けに役立つかもしれません。

- [Feature usage](https://redash.gitlab.com/dashboard/feature-adoption)
- [EE usage](https://version.gitlab.com/): dev.gitlab.org アカウント
- [Grafana](https://dashboards.gitlab.net): Google gitlab.com アカウント
- [Kibana](https://log.gprd.gitlab.net): dev.gitlab.org アカウント
- [S3stat](https://www.s3stat.com): GitLab 1Password アカウント
- [Sentry](https://sentry.gitlab.net): dev.gitlab.org アカウント

### グローバルな優先順位付け {#prioritize-global}

個々のプロダクトマネージャーは、割り当てられたチーム内で [グローバルな最適化](/handbook/values/#results) を考慮し、提唱する必要があります。割り当てられたチームがチーム外の専門知識を必要とする場合 (覚えておいてください、[誰でも](/handbook/company/mission/#mission) コントリビュートできる)、あなたは、ハード依存関係なしに前進するためのあらゆる合理的な努力をしつつ、プロダクトマネジメントチーム内で今や柔らかい依存関係になっているものの優先順位付けの増加を提唱する必要があります。

グローバルな優先順位付けの実行は多くの形を取ることができます。これはプロダクトとエンジニアリングのリーダーシップが関与して取り組まれます。いずれの当事者もこの領域で提案をアクティブにすることができます。利用可能なオプションとそれらをいつ使用するかは以下の通りです:

- [Strategic Priority Codes](/handbook/engineering/workflow/strategic-priority-codes/) - エンジニアリング部門全体のさまざまなステークホルダーから即座の注意が必要な重要な状況に使用
- [Borrow](/handbook/product/product-processes/pm-procedures/#borrow) - Issue/Epic の解決を支援するためにチームへの一時的な割り当て (6 か月未満) が必要な場合に使用
- [Scope Reassignment](/handbook/product/product-processes/pm-procedures/#scope-reassignment) - 提供に 6 か月以上かかるスコープが高優先順位で、チームメンバーのレポートライン構造を変更する必要がない場合に使用
- [Realignment](/handbook/people-group/promotions-transfers/#department-transfers-manager-initiated) - 継続的な課題を解決するためにチームへの永続的な割り当てが必要な場合に使用。これはチームメンバーへの最大の影響を持ち、他のオプションで望ましい目標を達成できない場合に検討すべきです。私たちはチームメンバーをそれらが最も必要なグループで雇うように努めます。

私たちは次の方法が、グローバルな優先順位付けが必要な作業の完了を保証する上でそれほど成功していないことに気づきました:

- [Working Groups](/handbook/company/working-groups/) - この方法は、他の [Product Groups](/handbook/company/structure/#product-groups) にフルタイムの責任を維持している個人のグループを召集し、ワーキンググループ構造の一部として作業を完了することを含みます。この方法はプロダクト改善の完了には推奨されません。代わりに、作業のスコープを決めたり、将来のプロダクト提供のための計画を決定するために利用できます。
- ファンアウト優先順位付け - この優先順位付けの方法は、グローバルな優先順位付けを多数の [Product Groups](/handbook/company/structure/#product-groups) にコミュニケートし、各個別のプロダクトグループの PM が作業を希望する時間枠で優先順位付けすることを確保しようとすることを含みます。この方法には重要な調整コストが必要で、中央の優先順位付け責任がないため提供がリスクにさらされます。ほとんどの場合、改善を完了するために scope reassignment、borrow、realignment を実行することが好まれます。

### 計画と方向性

PM として、あなたは短期マイルストーン (より詳細) と長期戦略 (より広範) の両方、およびそれらの間のすべてを計画する必要があります。
月次マイルストーン計画は GitLab で行われますが、より長期 (1-3 年) の計画は方向性ページで行われます。
これにより、チームが [プロダクトビジョン](https://about.gitlab.com/direction/#vision) をどのように提供する予定かを社内および社外に効率的にコミュニケートできます。

#### プロダクト方向性の管理

セクション、ステージ、グループ、カテゴリの方向性のドキュメント化は、私たちがどこに向かっているかとなぜそうしているかを、すべてのステークホルダーにコミュニケートする上で重要です。これは、あなたのプロダクトグループのメンバーにとって特に重要です。ステークホルダー (チームメンバーを含む) が参加し貢献できる方向性を確立することは、私たちが反復する「なぜ」と、それがどのように [GitLab のミッション](/handbook/company/mission/#mission) を促進するかへの具体的な接続を保証します。これらのつながりのいくつかは以下の通りです:

- プロダクトパフォーマンスインジケータの改善 - 使用量は市場捕捉 (有料か無料かを問わず) を表し、私たちの二重フライホイールの開始です。既存の顧客にとって、新しい機能でのその市場捕捉は、保持の増加と、単一アプリケーションの利点により - ユーザー満足度の向上も表します。
- [代替 DevOps ツール](https://about.gitlab.com/why-gitlab/) に対する競争力の向上 - ユーザーあたりのステージ数の増加と、彼らが「運用効率を向上させる」に追加するためのセールスの増加につながります。

プロダクトマネージャーとして、これらのつながりを次の場所で強調できます:

- 方向性コンテンツと概要ビデオ
- 週次ミーティング
- 個別の Issue 説明
- 計画 Issue
- キックオフビデオ
- 顧客ディスカバリーインタビューのサマリー

このつながりをコミュニケートするには、マルチチャンネルアプローチが必要です。私たちは [共有](/handbook/values/#share) するよう努力すべきで、方向性へのつながりについてのコミュニケーションは一貫した強化を必要とします。

##### セクションとステージの方向性

セクションリーダーは、それぞれのセクションとステージの戦略と計画を示す Direction ページを維持する責任があります。Direction ページには、この [テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/product/section_direction_template.html.md) にアウトラインされたトピックを含めるべきです。

##### カテゴリの方向性

カテゴリ戦略は必要で、全体的な戦略、ステータス、次の予定、競争環境など、カテゴリに関するさまざまな情報をアウトラインすべきです。カテゴリ戦略はハンドブックページにドキュメント化されるべきで、これによりカテゴリ戦略のバージョン管理が可能になり、ビデオアセットを埋め込むこともできます。
カテゴリ戦略に含めるべき最も重要な情報の 1 つは、具体的な次のステップまたは MVC と、焦点と非焦点／メンテナンス領域の明確な説明です。

カテゴリ戦略には、特定の Epic と Issue への多くの参照を持つ短い段落が含まれるべきです。
機能ではなくトピックを参照することは、時間の経過に対してより安定するため推奨されます。

私たちはハンドブックページを作成するためのアウトラインとしてこの [カテゴリ戦略テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/product/category_direction_template.html.md) を使用します。追加の見出しが必要な場合は、カテゴリ戦略でそれを作成して移植する権限が与えられています。これらのカテゴリを `categories.yml` と同期させ、新しいカテゴリについても同期させる必要があります。

カテゴリの方向性は、責任あるプロダクトマネージャーによって定期的に (少なくとも月に 1 回) レビューされるべきです。カテゴリ方向性ページが最後にレビューされた時を示すために、ページにはカテゴリコンテンツの先頭に `Content Last Reviewed: yyyy-mm-dd` を含めるようにしてください。方向性ページの他のコンテンツが変更されていない場合でも、レビューごとにこの日付を更新します。

カテゴリ戦略にステージ戦略ページからリンクすべきです。
すでに出荷されており、マーケティング製品ページを持つカテゴリについては、`categories.yml` は製品ページにリンクすべきです。

カテゴリが [UX Roadmap](/handbook/product/ux/product-design/ux-roadmaps/) を開発した場合、プロダクトデザイナーは UX Roadmap テーマをカテゴリ方向性ページのロードマップに組み込むマージリクエストを作成することが推奨されます。MR をレビューおよびマージのために PM にアサインします。

##### クロスステージまたはクロスセクションの方向性ページのナビゲート

複数のステージまたはセクションにまたがる方向性ページがある場合があります。集合的なビジョンと、その方向性のすべての貢献者を要約する方向性ページは、透明性と所有権の適切な割り当てを維持するために重要です。

今日、これらのタイプの方向性ページの例はいくつかあります:

1. [Software Supply Chain Security Direction](https://about.gitlab.com/direction/supply-chain/)
1. [AutoDevOps Direction](https://about.gitlab.com/direction/delivery/auto_devops/)
1. [Monorepo Product Direction](https://about.gitlab.com/direction/gitaly/monorepos/)
1. [Versioned Dependencies Direction](https://about.gitlab.com/direction/versioned-dependencies/)
1. [Customizable Dashboards Direction](https://about.gitlab.com/direction/customizable-dashboards/)

クロスセクションまたはステージの方向性を作成および管理する手順:

1. 方向性ページを [GitLab direction directory](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/source/direction) に追加するマージリクエストを作成
1. マージリクエストでカテゴリ変更テンプレートを選択
1. [カテゴリ変更](/handbook/product/categories/#changes) のプロセスに従う
1. 方向性ページのリンクとページ DRI の GitLab Handle を持つエントリを追加して [CODEOWNERS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/CODEOWNERS) を追加
1. 承認されたら、追加について関連するすべてのプロダクトマネージャーに `@` メンション

方向性ページが追加されたら、ページの月次更新を維持するために割り当てられた DRI が必要です。共有の方向性ページが定期的にレビューされ、最新の状態であることを保証するのは DRI の責任です。これには、DRI からのクロスセクション／クロスステージのコラボレーションが必要です。

##### プロダクト方向性の Issue とは何か？

方向性のカテゴリとセクションのラベルと一緒に `~direction` ラベルを使用して、与えられた方向性に該当する Epic と Issue をマークすべきです。

プロダクト方向性項目 (つまり、ラベル付き) は、戦略を意味のある形で前進させる方向性レベルの項目であるべきです。これは PM が基準を設定するもので、実際のユーザー価値を持つ明確な前進ステップがあるべきです。

ここで重要なのは、計画 _は_ 単に新機能とイノベーションのリストではないということです。
それらは確かに含まれていますが、すべての [センシングメカニズム](/handbook/product/product-processes/sensing-mechanisms/) に関連する Issue も含まれています。
カテゴリを minimal から viable へアップグレードしたり、トップカスタマー Issue を提供すること (例えば) は、素晴らしい新しい革新的な機能と同じくらいあなたの計画に貢献できます。これは、一貫した長期戦略を通じてバランスを取るのは PM 次第です。
逆に、広い意味では何でも一般的な方法で計画を前進させ得ます。

最後に、Issue は計画の本質です。関連する Epic _と_ その Issue の両方にラベルを適用していることを確認してください。

#### 日付のコミュニケート

プロダクトマネージャーとして、コアジョブは正しい期待を設定することです。私たちは通常、方向性について議論し、Issue にマイルストーンを割り当てることでこれを行います。特定の日付をコミュニケートする必要がある場合、社内で限定的に、または顧客に直接行うことが推奨されます。特定の日付をコミュニケートするときは、[暦年 (CY) の日付](/handbook/communication/#writing-style-guidelines) を使用してください。会計年度 (FY) は会社の外でうまく翻訳されません。

それに応じて、方向性ページは次の 3-4 か月のみ特定の Issue を参照することが期待されます。それを越えるものはすべて、特定の Issue ではなくトピックを議論すべきです。

#### 計画は不可欠だが、調整し、反復する

セクション、ステージ、またはカテゴリの慎重な方向性を作成することは、努力を集中させ、優先順位付けを助け、大規模な人々のグループが同じページにいるようにする有用な思考エクササイズです。しかし、単に長期計画を実行するだけにならないように注意してください。私たちの業界は信じられないほどダイナミックで、毎日新しいことを学び、それが私たちに長期計画を再考させる可能性があります。

#### 提供はディスカバリーに従う

私たちは出荷しやすいものではなく、顧客に価値をもたらすものを出荷すべきです。各マイルストーンで価値を創造することに焦点を置き、より多く学ぶにつれて長期方向性を素早く調整します。

1. より大きなテーマに取り組むとき、機能の出荷を開始し実際の使用から学ぶにつれて変わることを知った上で、まずエンドステートの検証から始めるべきです。
1. 最終的なビジョンが検証されたら、デザイナーとエンジニアリングのカウンターパートと協力して、価値を素早く出荷するために最小限のイテレーションに分割するべきです。
1. 提供に取り掛かる前に最初の「マイルストーン」を検証することを依然として好むかもしれません。
1. 最初のビジョンを決して出荷せず、すべてのイテレーション後にビジョンを洗練することはまったく問題ありません。構築されていない機能は、構築されたが使用されない機能よりもはるかに価値があります。

#### 成熟度プラン

各機能またはカテゴリについて、次の [開発ステージ](https://docs.gitlab.com/policy/development_stages_support/) に進むために必要な改善を追跡することが推奨されます。

#### 計画と OKR

プロダクトグループは [OKR](/handbook/company/okrs/) を持つことを選択できます。
それらを効果的に使用するために、ディスカバリーと提供のアクションを通じて特定の製品メトリクスを推進する観点で、次の 3 か月の計画を持つべきです。
製品メトリクスはあなたのマネージャー、デザインとエンジニアリングのカウンターパートと議論すべきで、結果に到達するためのアクションはデザインとエンジニアリングのカウンターパートと議論すべきです。

#### マイルストーンの計画 Issue

各マイルストーンについて、計画クワッドが集まり、グループの次のマイルストーンの作業をスコープし計画します。計画は計画 Issue の作成と共に非同期で始まります。計画 Issue は、コミュニケーションと、成功したマイルストーンを計画するために必要なすべてのリソースの SSOT です。チームのニーズに基づいてキュレートされるべきマイルストーンを計画する多くの方法があります。チームに最適なものを作成するのに役立つように、R&D 全体のグループからの計画 Issue の例をいくつか示します。

- [Verify::Pipeline Execution](https://gitlab.com/gitlab-org/ci-cd/pipeline-execution/-/blob/main/.gitlab/issue_templates/milestone_planning.md)
- [Verify::Testing](https://gitlab.com/gitlab-org/ci-cd/testing-group/-/blob/master/.gitlab/issue_templates/ReleasePlan.md)
- [Create::Code Review](https://gitlab.com/gitlab-org/create-stage/-/blob/master/.gitlab/issue_templates/code-review-planning.md)
- [Create::Editor](https://gitlab.com/gitlab-org/create-stage/-/blob/master/.gitlab/issue_templates/editor-planning.md)
- [Data Stores::Database](https://gitlab.com/gitlab-org/database-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md)

自分の Issue を適応する際は、追跡を助け、私たちの [プロダクト原則](/handbook/product/product-principles/) をプロセスに組み込むために、ラベル `planning issue` を適用することが推奨されます。

#### 今後のリリースの管理

プロダクトが UX とエンジニアリングと協力して、今後のリリースの Issue のスケジューリングと取り組み方法の詳細については、[プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) を参照してください。

#### 将来のリリースの計画 {#planning-future-release}

将来のリリースの作業を計画し、コミュニケートするための、相互排他的でない 2 つの方法があります。

##### ボードでの計画

プロダクトマネージャーとして、Issue の順序が優先順位を反映する、完全に優先順位付けされた Issue Board を使用して、グループの Issue の優先順位付けを維持できます。

##### マイルストーンでの計画

プロダクトマネージャーは、Issue がいつスケジュールされ取り組まれるかを示すために、Issue にマイルストーンを割り当てることができます。
ただし、Issue がマイルストーン内で提供できるかどうかはエンジニアリングチームの決定です。
より遠いマイルストーンを考慮するにつれて、割り当てられた Issue のスコープと実装タイムラインの確実性はますます曖昧になります。特に、Issue は、異なるマイルストーンの間を行き来する時間をかけて、別のプロジェクトに移動されたり、分解されたり、他の Issue とマージされたりする可能性があります。

Issue のマイルストーンはいつでも変更できます。現在割り当てられているマイルストーンは現在の計画を反映するため、計画が変わったらマイルストーンはできるだけ早く変更された計画を反映するように更新されるべきです。リリースに取り組む前にこれを行うようにします。容量は PM とエンジニアリングマネージャーの間で議論されます。

`~next::1-3 releases` とその変種など、これらの計画をシグナルするヘルパーラベルがあります。

###### 特別なマイルストーン

さらに、私たちには 2 つの特別なマイルストーンがあります: `Backlog` と `Awaiting further demand`。
プロダクトマネージャーは、レビュー済みで意味があるが、比較的緊急性が不足しているか、まだ十分なユーザー需要が見られていないため、今後のリリースマイルストーンに収まらない Issue にこれらを割り当てます。これらのどちらの項目に対しても緊急性を示す最良の方法は、それらに投票し、可能であれば自分のユースケースとなぜそれが重要なのかを説明するコメントを追加することです。

**'Awaiting further demand' を変更するタイミングの推奨事項:**
常に機能の全体的な価値に焦点を当てます。
ユーザーの問題をよく理解していますか？
影響を受けるユーザーベースをよく理解していますか？
提案された解決策は検証されましたか？
'Awaiting further demand' ラベル付きの Issue は、ユーザーや市場からのより多くの情報を必要とする、よく理解されていないリクエストを意味することが多いです。

しばしば、公開フィードバックは機能や製品を使用または評価している人々のごく一部からしか来ません。
常にユーザーに直接連絡を取り、ユースケースについてもっと学ぶことを検討すべきです。

**以前に計画されていた Issue を `Backlog` に変更するときの推奨事項:** 以前に計画されていた Issue を `Backlog` に移動する場合、特に次のリリースまたは 2 つに計画されていたものは、その機能に興味を持っていた当事者に送られる可能性のあるメッセージを検討してください。
場合によっては、彼らは Issue が割り当てられたマイルストーン前後に提供されることを依存または計画していたかもしれず、`Backlog` への変更により、それが起こる可能性が低くなりました。これらの場合、コメントで変更の背後にある根拠を簡潔に説明することが最善で、コミュニティは理解し、追加の正当化やコンテキストで応答できるかもしれません。また、近い将来にスケジュールされないことが明確になり次第、Issue を `Backlog` に移動することも推奨されます。これは、変更が直前の変更のように見えないため、変更を理解するのに役立ちます。

優先順位を明確に変更することをコミュニケートすることで、コミュニティが GitLab に Issue を貢献することを奨励するかもしれません。

繰り返しになりますが、Issue のマイルストーンは、これらの特別なマイルストーンの両方を含めて、いつでも変更できます。

#### イテレーションの途中でコミットメントをシフトする

時には、チームがイテレーションの開始時にコミットした機能／Issue を出荷する能力を変える状況があるかもしれません。これらのステップは、Issue が複数の Issue に分割される場合にも適用されます。
このようなことが起こると、PM として、影響を受ける Issue とそのマイルストーンが新しい現実を反映するように更新されることを EM カウンターパートと調整する必要があります (例: `deliverable` タグを削除する、`milestone` を更新するなど)。さらに、シフトについてマネージャーに通知します。

#### デザインシステムを使用して自律的に作業する

私たちの [デザインシステム](https://design.gitlab.com) は、UX のインサイト、フィードバック、デザインを常に必要とせずに自律的に作業する手段を提供します。問題がすでにドキュメント化されたパラダイムを使用して解決できる場合、最初のイテレーション内で Issue を合理的な状態にするのに UX の承認を待つ必要はありません。

未解決の質問が残っている場合、後続のイテレーションで機能が持つ可能性のある欠点に対処できます。

専任のプロダクトデザイナーがいる場合、デザインを再実装するよりも反復する方がはるかに速くて安いことを常に考慮してください。
同時に、すべてのものがデザインを必要とするわけではなく、デザインシステムはそれらの場合にエンジニアとあなたをサポートするためにあります。

### イテレーション戦略

イテレーションは GitLab のコアバリューであり、プロダクトマネジメントはそれにおいて中心的な役割を果たします。イテレーションは、MVC で新機能を提供する際に明らかであるべきですが、ディスカバリーにも影響を与えます。ソリューション検証は提供よりはるかに速く動けるため、構築する前に機能を検証することを目指すべきです。この時点で、構築する場合に検証された機能は MVC よりもはるかに大きくなる可能性があります。プロダクトマネージャーとして、大きな機能セットが検証された後でも、提供された機能が最終的な検証を提供するため、反復的な提供を目指すことに特別な注意を払う必要があります。例えば、方向性が検証されたら、ドキュメンテーションで提供を始めることができます。プロダクトマネージャーとして、ソリューション検証の一部としてイテレートし、すでに検証された解決策を提供しながらもイテレートすることを目指すべきです。

機能を反復的に開発しリリースできる小さな変更に分解するためのいくつかの戦略があります。このプロセスは、デザインのすべての側面が実際に必要かどうかを批判的に評価するのにも役立ちます。

#### ワークフローステップ

デザインとディスカバリーの一環として、あなたはおそらく、ユーザーが構築する機能を「使用」するために取る連続したステップを含む最小限のユーザージャーニーを作成したでしょう。これらは分離されるべきです。次の質問をすることでさらに進めることができます:

- このアクションを UI 経由で実行することが望ましいか、あるいは非 UI アプローチ (CLI、API、データの .csv ダウンロードなど) を開始点として使用できるか？これは、同じことを達成する UI コンポーネントを追加する前の、優れた出発点です。
- 同じタスクを実行する異なる UI パスはあるか？最も有用なものと、最も簡単に実装できるものを特定します。どれから始めるかを決定する際に両方の要因を重みづけし、そこから構築します。

#### ユーザー操作

View、Create、Update、Remove、Delete はユーザーがソフトウェアとやり取りする際に取るアクションです。これらのアクションは、機能をより小さな機能に分割できる自然な線を提供します。これを行うことで、最も重要なアクションを最初に優先順位付けします。例えば、ユーザーはおそらく作成、更新、削除、削除する前に、視覚的に情報を消費できる必要があります。

#### 機能基準

しばしば、機能の構築基準は暗黙的です。テスト駆動開発のマインドセットを使い、ソフトウェアを構築する前に必要なテストと結果を書くことが役立つことがあります。これらのテストを書くことで、新機能を構築する際に開発チームが満たす必要のある異なる基準を発見できます。これらのテストをアウトラインしたら、それらを使って機能をテストごとに小さな部分にさらに分割できる可能性があります。いくつかの例:

- データがないとき (empty/null state) のデフォルトの動作は何か？
- 機能の一部として発生する自動アクションやイベントはあるか？それらを書き留め、自動化を追加する前にユーザーが手動で実行できるものを特定します。
- 異なるロールのユーザーは独自の体験を持つか？これらの体験の 1 つを優先して最初に構築できるか？(例: guest、user、developer、maintainer)。
- ユーザーは情報のビューをカスタマイズできるようにしたいか？提供したいすべてのカスタマイズを定義し、一度に 1 つずつ構築します (例: トグルのオン／オフ、フィルター、ソート、検索)。

#### 例外とエラーケース

ソフトウェアはしばしば失敗し、アーキテクチャの方法によって異なる方法で失敗する可能性があります。なぜ何かが期待通りに動作しなかったかについて、ユーザーに可能な限り多くの情報を提供することが常に最善です。すべての可能なエラーと例外を処理するための異なる状態を作成し構築することは、簡単に個別の Issue に分解できます。何かが間違っているときに表示する汎用エラー状態を作成することから始め、それから 1 つずつ異なるケースを処理するために追加します。エラーメッセージを常に [有用](https://design.gitlab.com/content/ui-text/#clear-error-messages) にすることを忘れず、新しいエラー状態を特定するに連れて追加のエラーメッセージを追加します。

#### UI の分解

デザインを反復的にリリースできる部分に分解することは、何を構築しているかによります。プロセスをガイドするのに役立ついくつかの質問:

- より速く進めるために再利用できる既存のコンポーネントは何か？
- 「extra styling」とは何か？必要な情報を平易に表示し、後で詳細を追加する方法はあるか？
- UX を魅力的にするためにデザインに多くのインタラクションがあるか？それらを別の Issue に分け、反復的に追加できるか？(例: ホバー状態、ドラッグ＆ドロップ、トグル、情報を表示／非表示にするオプション、折りたたみ／展開など)

#### リファクタリング

私たちが書くソフトウェアを継続的に改善することは重要です。進捗するにつれて [技術的負債](/handbook/engineering/workflow/#technical-debt) と [Deferred UX](/handbook/engineering/workflow/#deferred-ux) を積極的に取り組まないと、長期的にはより多くの時間を費やし、より遅く動くことになります。ただし、技術的負債、デフォードされた UX、機能の反復的な開発の間で正しいバランスをとることが重要です。考慮すべきいくつかの質問:

- このコードを今リファクタリングしないとどのような影響があるか？
- 一部だけリファクタリングできるか？完全な書き直しが必要か？
- なぜその新しいテクノロジーを使う必要があるのか？(問題の根本に到達するために、何度か「なぜ」を尋ねる必要があるかもしれません)

#### アナウンスとローンチを分ける

大規模なプロジェクトでは、アナウンスを実際の機能ローンチから分けることを検討してください。これにより、顧客ロールアウト中に反復するためのより多くの自由が生まれます。例えば、顧客に十分な通知を与えるために事前にアナウンスし、それから新しい顧客に最初に、次に既存の Free 顧客に、それから既存の有料顧客にロールアウトできます。または逆に、ユーザー体験が素晴らしいことを確実にしてから大々的なマーケティングをするために、広範にアナウンスする前にまず顧客にロールアウトすることもできます。

Field チームに影響するかもしれない製品アナウンスやローンチの日付を検討する際は、Field チームが認識する [ブロックアウト制限](/handbook/sales/field-communications/) を考慮して、四半期末近くにビジネスへの大きな混乱がないことを確認します。

#### 4 段階移行

時には、目的が 1 つの体験、または 1 つのシステムから別のものに切り替えることです。その場合、ハードカットオーバーではなく 4 つの移行フェーズを持つことを検討してください。フェーズは次の通りです: 1) 古い体験。 2) 古い体験と新しい体験を並行して実行し、古い体験をデフォルトとし、新しい体験を一部のユーザーに段階的にロールアウト。 3) 並行して実行し、新しい体験を大多数のデフォルトとするが、問題が発生した場合のフォールバックとして古い体験が依然として利用可能。 4) 古い体験を非推奨にし、新しい体験のみを提供。この戦略により、チームはより多くの柔軟性を持ち、ロールアウトでより多くのイテレーションを示すことができ、リスクが減少します。

#### より速く進むためにイテレートする

何かが重要なとき、エンドゲームにより速く到達するために一度にすべてをローンチしたいと思うのが自然です。しかし、ビッグバン型のローンチは、起こる前にすべてが完璧である必要があり、それには時間がかかります。イテレーションでは、問題ではないすべてのこと、および十分にできているすべてのことについてフィードバックを得ます。タイトなフィードバックループで小さな増分でローンチする方が良く、大多数のユーザーが素晴らしい体験を持つようにします。これは、全体的なタイムラインを遅くするのではなく、速くする傾向があります。

#### Remote Design Sprint

[Design Sprint](https://www.gv.com/sprint/) は、デザイン、プロトタイピング、顧客とのアイデアのテストを通じて、重要なビジネス質問に答えるために使用される 5 日間のプロセスです。この方法により、解決策を考え出す際に [サイクルタイムを短縮](/handbook/values/#reduce-cycle-time) できます。

オールリモートの会社として、私たちは [Remote Design Sprints (RDS)](/handbook/product/ux/design-sprint/) を実施します。手元の問題に適切なアプローチかどうかを判断するには、[RDS の実施に関するガイドライン](/handbook/product/ux/design-sprint/#when-to-opt-for-a-remote-design-sprint) をチェックしてください。

#### Spike

非常に大規模または複雑な問題に直面し、望ましい結果に向けて最も効率的にイテレートする方法が明確でない場合、エンジニアと協力して実験的な [spike solution](https://www.jamesshore.com/v2/books/aoad1/spike_solutions) を構築することを検討してください。このプロセスは「技術評価」と呼ばれることもあります。spike を実施する際の目標は、チームがどのように進めるべきかを決定するために必要な情報レベルを提供するために、可能な限り短い時間で可能な限り少ないコードを書くことです。spike の最後に、コードは通常破棄されます。元の目標は学ぶことであり、本番対応の解決策を構築することではなかったためです。このプロセスは、主要なリファクタリングと [architecture blueprint](/handbook/engineering/architecture/workflow/) の作成に特に有用です。spike が他のチームからの承認を必要とする変更を含む場合、関連するステークホルダーとドメインの専門家と早期にエンゲージしてアプローチを検証することを検討してください。

#### フィードバック Issue

論争を呼ぶ可能性のある機能をローンチする際、またはオーディエンスのフィードバックを得たい場合、フィードバック Issue を作成することが推奨されます。

タイムライン:

- Issue を作成し、リリース投稿に含める。
- Slack でアナウンスしたりドッグフーディングをしたりする場合、フィードバック Issue へのリンクを含める
- ローンチ後少なくとも 14 日間 Issue を開いたままにする
- フィードバックに応答し、別の Issue にカタログ化する
- 時間枠が経過したら Issue を閉じ、フィードバック Issue からの学びを要約する

フィードバック Issue の例:

- [WebIDE](https://gitlab.com/gitlab-org/gitlab/-/issues/385787)
- [Fonts](https://gitlab.com/gitlab-org/gitlab/-/issues/386205)
- [`master` -> `main`](https://gitlab.com/gitlab-org/gitlab/-/issues/221164)

##### フィードバック Issue の考慮事項

フィードバック Issue は、より広いコミュニティとユーザーからフィードバックを集めることを目的としています。場合によっては、社内ユーザーがユーザーや顧客の代わりに投稿することがあります。その結果、次のことを考慮する必要があります:

1. 公開されているフィードバック Issue には [SAFE](/handbook/legal/safe-framework/#what-is-safe) 情報を含めることはできない
1. 必要に応じて、Field フィードバックのためのリンクされた機密 Issue を使用して、顧客の詳細とフィードバックの交換をサポートできる
1. 顧客の詳細が共有されている場合、必要に応じて [内部コメント](https://docs.gitlab.com/user/discussions/#add-an-internal-note) を活用する

#### その他のベストプラクティスの考慮事項

イテレーションを改善するために次のことを考慮してください:

- 成功したイテレートとは、最も効率的な方法で価値を提供することを意味するべきです。時には、顧客向けの機能を提供する前に、根本的な技術的問題を修正することを意味することができます。
- 可能であれば、製品にすでに存在するコンポーネントの再利用を検討してください。これの素晴らしい例は、Jira インポーターを作成する際のアプローチで、これは Jira サービス統合を再利用しました。再利用は、私たちの効率性価値ともよく整合します。
- 可能であれば、チーム間の技術的依存関係を避ける。これにより、出荷の調整コストが増加し、イテレーションが遅くなります。気付いたらサイロを壊し、必要なものを自分で実装することを検討してください。
- 特に GitLab.com で、ユーザーベースの一部に対して有効にできるクイック POC を検討してください。これの例は検索で、最初は数グループだけに有効になり、それから徐々にロールアウトされました。
- 素晴らしいコラボレーションが素晴らしいイテレーションにつながります。素晴らしい MVC は、プロダクトマネージャー単独で作られることはほとんどなく、プロダクト、エンジニアリング、デザイン、品質などの間のコラボレーションと議論から生まれます。
- 初期問題ステートメントをチームの中心に保ちます。タイトな問題ステートメントは、チームがタイトで反復的な解決策を特定できるようにします。
- データを早期にテーブルにもたらして、チームが特定された問題の解決に最大の影響を与える最小のイテレーションに三角測量するのを助けます。
- プロジェクトがマルチフェーズである場合、最終的なエンドステート目標ではなく、次の反復的なマイルストーンに焦点を当てるために、反復的なターゲットとガードレールを検討してください。
- チームが顧客、パートナー、他の GitLab チームのために繰り返しの作業をする必要がある場合、依存するチームがセルフサービスできるように、フレームワークアプローチを使用することを検討してください。

### コミュニティ参加

ユーザーのコミュニティと直接エンゲージすることは、PM の仕事の重要な部分です。私たちは、GitLab の [Developer Relations チーム](/handbook/marketing/developer-relations/) と共に積極的な参加と応答を奨励します。

#### カンファレンス

会社が参加しているカンファレンスの一般的なリストは、私たちの [corporate marketing](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?label_name%5B%5D=Corporate+Event&sort=due_date) プロジェクトにあります。

通常、PM を必ず派遣する注目すべきカンファレンスがいくつかあります:

- [KubeCon](https://events.linuxfoundation.org/)
- [Atlassian Summit](https://events.atlassian.com/team22/)
- [GitHub Universe](https://githubuniverse.com/)
- [DevOps Enterprise Summit](https://itrevolution.com/events/)
- [Google Next](https://cloud.withgoogle.com/next)
- [AWS Reinvent](https://reinvent.awsevents.com/)
- [Velocity](https://www.oreilly.com/conferences/velocity-software-architecture/)

参加に興味がある場合は、corporate marketing サイトの Issue をチェックしてそこでボランティアするか、まだリストされていない場合はマネージャーに連絡してください。

### ステークホルダー管理

#### ステークホルダーとは何か？

ステークホルダー、または安定したカウンターパートは、直接のチームの外の人で、次の 1 つ以上を満たす人です:

- 直接または間接的に影響を受ける
- 停止、遅延、またはキャンセルする能力を持つ

ステークホルダーの例には、リーダーシップ、セールス、マーケティング、カスタマーサポート、カスタマーサクセスが含まれます。焦点を当てる領域と特定の Issue に応じて、GitLab の任意の領域にステークホルダーがいる可能性があります。ステークホルダーは GitLab の外にも存在します。例えば、特定の顧客または顧客セットのために機能が開発されている場合などです。協業または情報を提供するためのステークホルダーが誰なのか不明な場合は、[プロダクトのセクション、ステージ、グループ、カテゴリ](/handbook/product/categories/) を訪問してください。

#### ステークホルダーコラボレーションのための更新された SSOT

ステークホルダーのコラボレーションとフィードバックは、ここ GitLab での重要な競争上の利点です。これを可能にし、コラボレーションを促進するためには、常にステージ方向性、カテゴリ戦略、計画の更新された SSOT を維持する必要があります。これにより、ステージのプロダクト方向性に貢献したい人に最新の情報を提供して、効果的にコラボレーションできるようにします。一部のセクションとチームは、このタスクを思い出すために [scheduled Direction Update issue template](https://gitlab.com/gitlab-com/Product/blob/master/templates/DIRECTION-UPDATES.md.erb) を使用します。

積極的かつ定期的にステークホルダーに連絡を取ります。これらの (非網羅的な) 機会を通じて、これらの成果物を表示しコラボレートすることを奨励します:

- GitLab.com の Epic、Issue、マージリクエストでユーザーとエンゲージする。
- [顧客と直接ミーティング](#customer-meetings) する。
- [Advisory および Executive customer programs](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#executive-advisory-board-eab-program) に参加する。
- GitLab を使用している GitLab チームメンバーと話す。
- 他の PM および [Product leadership](/handbook/product/product-leaders/product-leadership/) と話して、自分のステージのプロダクト方向性を GitLab の残りの部分と整合させる。

新しい PM がステージ方向性、カテゴリ戦略、計画が最新で重要なステークホルダーに見えるようにするためのガイダンス:

- 6 か月ごとに [Advisory および Executive customer programs](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#executive-advisory-board-eab-program) からフィードバックを求める。
- 月に 1 回マネージャーに計画を提示する。
- 安定したカウンターパートに計画とステージ／カテゴリ戦略を提示する
- 2 週間に 1 回 [顧客ミーティング](#customer-meetings) でステージ戦略と計画を提示する。
- 月に 1 回、ステージグループの週次ミーティングでステージ戦略、カテゴリ戦略、計画への変更を提示する。

### 顧客との仕事

#### 顧客ミーティング

私たちが構築した、構築中の、または構築するべきものについて顧客から直接フィードバックを得ることが重要です。それを行ういくつかの機会は [セールスサポートミーティング](#sales-support-meetings) で生じます。PM として、痛みのポイントをよりよく理解するために、専用の [顧客ディスカバリーミーティング](#customer-discovery-meetings) または [継続的インタビュー](/handbook/product/product-processes/continuous-interviewing) も顧客や見込み客と持つべきです。PM として、エンジニアリンググループも顧客から直接聞く機会を提供する必要があります。グループに優しい時間に顧客ミーティングをスケジュールし、招待し、録画とメモを送ってください。顧客とエンゲージする他の方法を探している場合、[GitLab でプロダクトマネージャーとして顧客通話を見つけ、準備し、ナビゲートする方法](https://www.youtube.com/watch?v=HyVR_ybRkCY) に関するビデオがあります。

##### セールスサポートミーティング

**ミーティングの前** に、アカウントのセールスリードから、顧客がすでに GitLab に提供した情報を繰り返す必要がないように十分な背景ドキュメンテーションが提供されていることを確認します。

**ミーティング中** は、ほとんどの時間を聞いて情報を取得することに費やします。
あなたの仕事は GitLab を売ることではありませんが、製品についてもっと情報を提供する時であることは明らかであるべきです。

メッセージの一貫性のために、質問を投げかけ情報を求める際は [Value Drivers](/handbook/sales/command-of-the-message/#customer-value-drivers) フレームワークを利用します。

ミーティング後:

- [gitlab-com/user-interviews](https://gitlab.com/gitlab-com/user-interviews) プロジェクトで、ミーティングを要約する [インタビュースナップショットを作成](https://gitlab.com/gitlab-com/user-interviews/-/issues/new?issuable_template=user-interview) します。
このプロジェクトはプライベートで、詳細で編集されていないフィードバックを社内で共有できるようにしています。
- 詳細なメモを取った Google ドキュメントをリンクします。
- フィードバックを公開してドキュメント化するために関連する Issue を作成または更新します。
複数のミーティングからのフィードバックの合成は、Epic または Issue で公開して行うべきです。

##### 顧客ディスカバリーミーティング

顧客ディスカバリーミーティングは UX リサーチではありません。広範なニーズと計画のトレードオフの議論に焦点を当て、特定の機能のレビューには焦点を当てません。これらのトピックを絞り込むための主要な 2 つの手法があります:

- **トップ競合** - あなたのカテゴリで上位 3 つの競合を特定し、それらの競合を使っている顧客と話します: X から私たちに切り替えるためには何が欠けているか？私たちは競合との機能パリティを目指しているのではなく、競合が話す機能だけを見ているのでもありません。私たちは、彼らが実際に使うもの、最終的に _必要とする_ ものについて顧客と話しています。
- **ユーザーニーズ** - あなたのグループのカテゴリと機能の主要な顧客から GitLab ユーザーを特定します。彼らがその機能について何が好きかを聞き、機能と、それらの GitLab のコンポーネントを使用する周辺ワークフローに関する現在の痛みのポイントについて尋ねます。

顧客ディスカバリーミーティングを準備し実施するためのガイダンス:

**ミーティングをセットアップする:**

- 学びたいことを特定し、適切に準備します
- 顧客が GitLab をどのように使用しているかについての情報は、Sales と version.gitlab.com から見つけることができます。Sales と support も顧客とあなたを接触させることができるはずです
- 顧客ミーティングをスケジュールする正式な内部プロセスはありませんが、興味のある当事者から質問を集め、顧客ディスカバリーミーティング中にメモを取るには、[このテンプレート](https://docs.google.com/document/d/1XcBgdOFPXHhS3XAkYucOUDGQR8CIy1C2W5_L8mulBYQ/edit#heading=h.14axtw861pm1) をチェックできます

**ミーティング中:**

- ほとんどの時間を聞いて情報をドキュメント化することに費やします
- 痛みのポイント、嬉しい瞬間、不満を聞きます
- 書き留めたことを顧客に読み返してレビューし、正しくキャプチャされていることを確認します。

**ミーティング後:**

- 発見をドキュメント化します。次のような構造の (GitLab 内のみ共有できる) フォルダを [Google Drive](https://drive.google.com/drive/folders/0AH_zdtW5aioNUk9PVA) に作成します:
  - Customer Meetings
    - Customer Name A
      - 2020-04-01
        - agenda (Google Doc)
        - artifacts (folder for docs, images, etc.)
      - 2020-10-03
    - Customer Name B
  - Competitive Research
    - Vendors
      - Vendor A
        - summary (Google Doc, optional)
        - 2020-04-01
        - 2020-10-03
      - Vendor B
    - Projects
      - product-10132-code-scan-results (reference GitLab issue number)
      - ux-13840-selector-widget
- 顧客の同僚プロダクトマネージャーおよびそのカスタマーアカウントのセールスおよびカスタマーサクセスアカウントチームと発見を共有します
- カテゴリ戦略、機能 Epic、ペルソナに適切な調整を加えます

顧客ディスカバリーミーティングの実施に関する追加のガイダンスは、これらのリソースから見つけることができます:

- [How to Interview Your Customers](https://customerdevlabs.com/2013/11/05/how-i-interview-customers/)
- [Effective User Interviews](https://www.productmanagerhq.com/agile/product-management/effective-user-interviews/)

#### 顧客のソーシング

PM はまた、独立して顧客フィードバックを収集し評価できるようになるべきです。[既存の](/handbook/upstream-studios/experience-research/finding-existing-research/) リサーチを見ると、有用なテーマと潜在的に連絡を取る顧客が得られる可能性があります。次の手法を使って顧客を直接ソースできます:

**GitLab Solution Architects** は、特に技術的な観点から、私たちの顧客を最もよく知っています。

**GitLab Issues** 顧客はしばしば、Issue で説明されている問題が彼らが直接経験している問題であるとき、Issue にコメントします。最良の戦略は、彼らのフィードバックを直接 Issue でキャプチャすることですが、これが不可能だったり単に起こらないこともあります。ユーザーのハンドルをクリックして GitLab ユーザーページを見ることで、代替の連絡先情報を見つけることができます。このページには Twitter や LinkedIn などの連絡先情報がしばしば含まれます。別のオプションは、非同期でエンゲージするために Issue でユーザーを直接メンションすることです。人気のある Issue では、面接する人を探しているという一般的なコメントを残すだけで、多くの場合ボランティアを募ることができます。

**Customer Issues Prioritization Dashboards:** [customer issues prioritization framework](/handbook/product/product-processes/customer-issues-prioritization-framework) は、顧客データをリクエストした Issue および Epic と集約します。[ダッシュボードを表示する際](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views)、「priority score by noteable」テーブル内で関心のある Issue または Epic をダブルクリックし、下にスクロールして「QA Table - User request weighting by customer」を見て、Issue または Epic に興味のある特定の顧客を確認します。

**GitLab.com Broadcast Messages** ブロードキャストメッセージングは、製品内から顧客フィードバックを取得するための優れたツールです。ブロードキャストメッセージングを使用するには [このワークフロー](/handbook/product/product-processes/pm-procedures/#gitlabcom-in-app-messages-broadcast-messaging) を活用できます。

**GitLab Sales and Customer Success** [Slack customer success チャンネル](https://gitlab.slack.com/archives/C5D346V08/p1583438272202100/) で支援を求めるか、Field Sales Team Call と All CS Team Call に参加して Zoom 通話経由で特定のリクエストを提示できます。

**Customer Success Managers (CSM)** 顧客に専任の CSM がいる場合、彼らも CSM との定期ミーティングを持っているかもしれません。これらのミーティングは、アイデアや問題について 15 分間のハイレベルのフィードバックを得る素晴らしい機会です。Salesforce では、CSM は顧客のアカウント情報の Customer Success セクションにリストされています。CSM はまた、彼らの顧客から提出された機能リクエストに非常に詳しく、あなたが取り組んでいる機能に興味があるかもしれない顧客を特定するのに役立ちます。

**Zendesk** は、機能を積極的に使用しているユーザーで、質問や Issue に遭遇したユーザーを見つけるための優れたツールです。製品を使用するのに最近の課題を持っていたユーザーは、PM が彼らの経験から学ぶために時間を取ることを本当に感謝します。これは、たとえユーザーが素晴らしい体験を持っていなくても、私たちがユーザーに耳を傾ける意思があることを確立します。これは、ロードマップを議論し、私たちが何を改善する予定かをユーザーが理解できるようにコンテキストを提供する素晴らしい機会でもあります。

チャットをリクエストする最善の方法はサポートチケットを通すことですが、やり取りを開始したユーザーをクリックすると、その連絡先情報が左側のパネルに表示されます。

Zendesk アカウントを持っていない場合は、[ライトエージェント Zendesk アカウントをリクエストする方法](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account) を参照してください。

[Zendesk のトリガー機能](https://support.zendesk.com/hc/en-us/articles/4408893545882-Ticket-trigger-conditions-and-actions-reference) を使って、製品領域に関連する特定のキーワードがサポートチケットでメンションされたときにメールアラートを受け取ることができます。さらに、トリガーに一致する現在アクティブなすべてのサポートチケットをリストする簡単なダッシュボードを作成することも可能です。これを設定するのに役立つために #support_escalations に連絡してください。

**ソーシャルメディア** も効果的になり得ます。あなたの個人アカウントが合理的な数の接続／フォロワーを持っている場合、特定の質問でユーザーとつながりたいという希望を直接投稿できます。投稿する際は、議論したいトピックと、人々がどのように連絡を取ることができるかを含めてください。`#social-media` チャンネルに連絡して、@gitlab アカウントによってあなたのツイートをリツイートしてもらうこともできます。

![twitter-contactpng](/images/product/twitter-contact.png)

より広いオーディエンスにリーチしたい場合は、関連するプラットフォームの公式 GitLab アカウントを使用してコミュニティアドボケートに再投稿してもらうように依頼することを検討してください。
`#community-advocates` Slack チャンネルでアドボケートにリーチできます。

[Medium](https://medium.com) などのさまざまなパブリケーションを通じて、チームが取り組んでいるテクに関連した記事の著者にもアプローチできます。パブリケーションウェブサイトまたは LinkedIn 経由の明確で短いメールは、エンゲージするための良い方法です。

[LinkedIn Recruiter ライセンス](/handbook/hiring) をリクエストできます。この [Unfiltered ビデオ](https://youtu.be/rc2IX1e2sQ8) と [スライドデック](https://docs.google.com/presentation/d/1LI9qXLRQSnikPiHztDQBapGrDn5Nimsf-K8g1r3j9Do/edit#slide=id.g29a70c6c35_0_68) は、スタディの参加者をソースするために LinkedIn Recruiter を使用する方法の概要を提供します。

これらの戦術を試しても必要な顧客フィードバックを取得するのに苦労している場合は、サポートのためにマネージャーに連絡し、[UX Research チーム](/handbook/upstream-studios/experience-research/problem-validation-single-stage-group/) の活用を検討してください。
さらに、トラブルシューティングサポートのためにプロダクトオペレーションズに直接連絡したり、プロダクトオペレーションズオフィスアワーに参加できます。

**非ユーザー** はしばしば GitLab ユーザーよりも重要です。彼らは、最終的に彼らを GitLab ユーザーにするかもしれないアイデアを思いつくために必要な批判的な視点を提供できます。最良の非ユーザーは、GitLab に切り替える計画すらない人々です。これらの人々には地元のミートアップ、カンファレンス、または Hacker News のようなオンライングループでリーチできます。そのような場合、その場でユーザーをインタビューしようとせず、誰も気を散らされない別のミーティングを組織し、二人とも準備して到着できるようにします。

#### Advisory および Executive customer program ミーティング

高度にエンゲージした顧客から直接フィードバックを得る特定の繰り返しの機会は、[Advisory および Executive customer programs](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#executive-advisory-board-eab-program) を通じてあります。
これらのミーティングであなたのステージを発表するよう依頼されるかもしれません。そうする際のいくつかのガイドラインは以下の通りです:

これらのミーティングであなたのステージまたは特定の製品オファリングを発表するよう依頼されるかもしれません。発表のためのいくつかのガイドラインは以下の通りです:

1. 製品中心のハイライト: すべての発表資料は、ローンチ予定の製品または顧客に利用可能な製品の評価に焦点を当てるべきです。

1. モノローグよりダイアログを強調: 意味のある双方向の議論を奨励するようにプレゼンテーションを構造化します。

1. ターゲットを絞った質問を準備: メンバーを会話にエンゲージするための 2-3 個の具体的で示唆に富む質問を開発します。これらの質問は、プレゼンテーション、あなたのステージで GitLab が現在取り組んでいて顧客フィードバックを得たい戦略的決定、または顧客ワークフローに直接関連する質問に焦点を当てるべきです。

1. 以前のフィードバックへの接続: 以前のアドバイザリーミーティングで受け取ったフィードバックを参照します。これにより、プログラムメンバーに彼らの時間の価値と、GitLab が彼らの推奨事項を考慮していることを示すのに役立ちます。

1. フォロースルーを促す: セッション中に主要なインサイトとアクションアイテムをドキュメント化します。

1. 準備をする: 事前に独立してミーティングの準備をすることを確認します。

#### (顧客) 機能提案との仕事

誰かが特定の機能をリクエストすると、この変更の必要性を調査し理解することが PM の義務です。これは、提案された解決策が解決しようとしている問題は何かに焦点を当てることを意味します。これを行うと、しばしば次のことが発見できます:

1. GitLab 内にすでに既存の解決策が存在する
1. または: より優れた、よりエレガントな解決策が存在する

機能リクエストを取って、それを単に実装してはいけません。
あなたの仕事は、基礎となるユースケースを見つけ、既存の機能と直交するエレガントな方法でそれに対処することです。

これにより、過度に複雑なアプリケーションを構築することを防げます。

同僚からフィードバックやリクエストを得る場合でも、これを考慮してください。
PM として、あなたは最終的に出荷する解決策の品質に責任があります。
それらが (最初のイテレーションとして) 可能な限り最良の解決策であることを確認してください。

### 競合チャンネル

`#competition` チャンネルで誰かが情報を投稿し、Issue の作成および／または `features.yml` の変更を必要とする場合、この手順に従います:

- `I'm documenting this` と投稿して項目にスレッドを作成
- 次のことを自分で行うか、これを取得する人がフォローするように [リンク](#competition-channel) してください
- 必要な場合: Issue を作成
- 項目を `features.yml` に追加
- GitLab がまだこの機能を持っていない場合、作成した Issue にリンクする
- コミットと Issue へのリンクでスレッドを終了

#### GitLab の使用に基づく特定のユーザーまたはアカウントへの連絡

非典型的な使用パターンや動作を示しているため、特定のアカウントをインタビューしたい場合があります。この場合、[サポートに代理で GitLab.com ユーザーに連絡してもらうようリクエスト](../../support/internal-support/#contacting-users-about-gitlab-incidents-or-changes) します。

週末で、ユーザーの GitLab の使用に影響するアクションのため、連絡リクエストが緊急な場合は、[CMOC をページします](/handbook/engineering/infrastructure-platforms/incident-management/#how-to-engage-response-teams)。

### 機会の評価

#### 機会キャンバス

検証トラックの主要なアーティファクトの 1 つは Opportunity Canvas です。Opportunity Canvas は、ドキュメントが進化するにつれて信頼度、仮説、得られた学びを素早く反復することで、検証トラックにリーンプロダクトマネジメント哲学を導入します。完了時には、ユーザーの痛み、ビジネス価値、特定の問題ステートメントへの制約、優先順位付けの根拠を理解するのに役立つように、関連する Issue と Epic に転送できる簡潔な知識セットとして機能します。検証された Opportunity Canvas と同じくらい価値があるのは、検証されなかったものです。このツールはまた、アイデアを素早く検証されないようにするためにも有用です。素早く検証されない問題は、しばしば、ゆっくり検証されるものよりも **より価値があります**。

機会キャンバスは、すでに明確に定義された [jobs to be done (JTBD)](/handbook/product/ux/ux-resources/#jobs-to-be-done-jtbd) を持つ製品機能または問題には必要ないことに注意してください。問題とその解決策をすでによく理解している状況では、機会キャンバスをスキップしてソリューション検証に直接進むのが適切です。製品の既存の機能について仮定と現在の考えをテストするために機会キャンバステンプレートを使用する価値があるかもしれませんが、必須ではありません。

##### レビュー

リーダーシップと機会キャンバスをレビューすることは、あなたのアイデアについて早期のフィードバックと整合を得る機会を提供します。レビューをスケジュールするには:

1. CProdO EBA に連絡して 25 分のミーティングをスケジュールします。EBA に、比較レビューか単一の Opportunity Review をスケジュールしているかを伝えます
1. VCProdO と VP of UX を必須出席者として含める必要があります。
1. Product Section Leader、直属マネージャー、UX カウンターパート、プロダクトオペレーションズを任意出席者として含める必要があります。
1. ミーティングの少なくとも 1 営業日前に Opportunity Canvas を完成させ、出席者がコンテンツをレビューする機会を提供します。出席者は事前にキャンバスをレビューし、キャンバスドキュメントに直接質問を追加します。
1. Opportunity Canvas が完成したら、Slack #product でタグ付けして投稿することにより、ミーティング参加者に通知します。キャンバスへの直接リンクを含めます。
1. レビュー中、好きなものを発表できます。比較レビューでは、どの Opportunity を最初に追求するかについての提案から始めると役立ちます。単一のレビューでは、出席者が事前にキャンバスをレビューしているはずなので、Q&A に直接行っても問題ありません。

**参考資料**:

- [Opportunity Canvas Template](https://docs.google.com/document/d/1pTEMcwH10xWilQEnVc65oC6PdC3VMjn2XoARfNTaHkc/edit#)
- [Completed Opportunity Canvas Reviews](https://drive.google.com/drive/u/0/folders/19ryr0HFXpkchh65MQ2JQv3f9dYBCC01q)
- [Opportunity Canvas YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqqGtUIbnmAaE5kNymwifZ1)
- [Example Opportunity Canvas - Fine Grained Access Control (GoogleDoc)](https://docs.google.com/document/d/1c_FPLZ8W7Gjl0tvZSybEKWvcCzJ3AgxlQNFvwm92IHo/edit#heading=h.4mt5fmtn0ax4)
- [Example Opportunity Canvas - Error Tracking (Mural)](https://app.mural.co/t/gitlab2474/m/gitlab2474/1568925801645/71e7e6352180a1492a19a3d3ed6f96d48fefd597)

#### Opportunity canvas lite

Opportunity Canvases は、まったく新しい機能をもたらす可能性のある、よく定義されていないか、よく理解されていない、顧客が経験している問題に対する素晴らしいアセスメントです。前述のように、機会キャンバスは既存の機能にも役立ちますが、それらは新機能開発に合わせて調整されているため、[`Product-Opportunity-Opportunity-Canvas-Lite`](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=Product-Opportunity-Canvas-Lite) Issue テンプレートが提供されています。このテンプレートは、便利な Issue で顧客の問題、ビジネスケース、機能計画を素早く特定する軽量なアプローチを提供します。テンプレートを使う手順は [Instructions](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Opportunity-Canvas-Lite.md#instructions) セクションでアウトラインされており、明確にするために、拡張に興味のある既存の機能のためにこの Issue テンプレートを作成します。例えば、このテンプレートは、MVC に 3 番目または 4 番目のイテレーションを追加する機会を評価している場合に使用するのに最適です。この Issue は、すでに利用可能なリソースを活用し、リーダーシップにレビューのために提出するために詳細を集めるために使用すべきです。テンプレートを記入したら、Issue で特定された関係者にアサインし、可視性のためにいつでも `#product` チャンネルに投稿できます。

### アナリストとのエンゲージメント

GitLab のプロダクトマネージャーであることの一部は、ステージに該当する様々なアナリストレポートに繋がる、アナリストとのエンゲージメントを維持することです。これが成功し、アナリストスコアカードで私たちの製品が正しく評価されることを保証するために、いくつかのガイドラインに従います:

- 自分の領域のアナリストとチェックインする時間を費やし、彼らが私たちのストーリーと機能をより早く把握できるようにし、より早期にフィードバックを得られるようにします。これにより、製品とそれをどのように話すかのより良い整合性が、レビュー時に既に整っていることが保証されます。覚えておいてください、アナリストはカバーする市場についての深い理解を維持しており、市場のトレンド、成長率、購買者の行動、競合について質問したり、専門家にアイデアを試したいと思ったときに尋ねれば、関係はより双方向的になります。
- アナリストリクエストへの注意を優先事項にし、彼らが成功するために必要な人を呼び込みます。エグゼクティブを参加させることに明確な利益がある場合は、依頼します。何かを成功させるためにより多くのリソースが必要な場合は、それを獲得します。これらのレポートは「あったほうがいい」アドホックなアクティビティではなく、製品領域の成功を保証する重要な部分です。
- アナリストのリクエストに応答する際は、正直に「はい」と言う方法を見つけ、製品を可能な限り良い光で描く方法を見つけることに挑戦してください。しばしば、一見すると機能や能力をサポートしていないと考えていても、少し反省と考えで、既存の機能を手元の問題を解決するように適応できることがあります。これは、最初のポイントに従ってアナリストのパートナーと継続的な時間を過ごせば、はるかにスムーズに進みます。
- アナリストレポートが完了した後にレトロスペクティブを実施し、私たちがどのようにより良くできるかについて学び、結果を共有していることを確認します。

プロダクトマーケティングパートナーは全体的なエンゲージメントを所有しているため、密接につながっていることが重要です。とは言え、プロダクトは重要な役割を果たし、ステージの最高の顔を応答／議論に出すための運転席にいるべきです。

### 内部顧客とのエンゲージ

プロダクトマネージャーは、ステージが持つかもしれない内部顧客を活用し、彼らが実際に何を使っているか、何を必要としているか、他の製品を置き換えて GitLab をすべてのフローに使うために重要だと考えていることを理解するのに役立てるべきです。

定期的に (例: 2 週間ごとに) 内部顧客と会い、繰り返し通話を設定し、彼らがフィードバックを共有できるよう招待したいと思います。

これは相互のコラボレーションなので、私たちがリリースする新機能について彼らに最新情報を提供し、すべての自分の機能を採用するのを助けたいと思います。

### USAT+ レスポンダーへのアウトリーチ

年に 2 回、私たちは [User Satisfaction (USAT+)](/handbook/product/ux/performance-indicators/usat-plus/) サーベイのレスポンダーで、私たちと話すことに参加したいと言った人にアプローチします。これは、エンドユーザーとの橋渡しを築き、プロダクトマネージャーとプロダクトデザイナーが彼らの特定の製品領域に対する直接のフィードバックを得るための素晴らしい機会です。ユーザーが私たちにverbatim を共有する時間を取り、会話を提供した場合、特に彼らが GitLab に不満を持っている場合、彼らはフォローアップされるに値します。

このワークフロー中にユーザーと直接話すとき、プロダクト内の他のドキュメンテーションやコミュニケーションと同様に、[Product Legal guidance](/handbook/product/product-processes/product-safe-guidance/) と [SAFE フレームワーク](/handbook/legal/safe-framework/) に注意する必要があります。

#### 全体のプロセス

1. UX Researcher DRI が USAT+ レスポンダーアウトリーチ Issue を開き、Issue が準備できたことをコメントでプロダクトチームメンバーに通知します。
1. プロダクトチームメンバーは、フォローアップの会話に同意した USAT+ レスポンダーのリストを通り抜けます。それらのチームメンバーは、アウトリーチに登録するか、必要に応じてプロダクトマネージャーまたはプロダクトデザイナーをタグ付けします。
1. プロダクトチームメンバーはシートを見て、誰と話したいかを確認します。
1. プロダクトチームメンバーはユーザーに連絡してインタビューをスケジュールするか、メールでさらにフィードバックを集めます。
1. プロダクトチームメンバーは、この [Dovetail プロジェクト](https://gitlab.dovetailapp.com/projects/36nmGVKvkaT7SGMXtUeHVg/v/70xPTo5RzTRZnCNEVz1fWH) の `USAT+` カラムに、インタビューからのビデオ録画を追加します。
1. プロダクトチームメンバーは、インタビューしたユーザーをマークし、セッション録画へのリンクを記し、フォローアップユーザーシートにセッションに関する追加メモを含めます。
1. プロダクトチームメンバーは、USAT フォローアップインタビューに関連する Issue を作成するか、または引き続き作業します。すべての関連 Issue 内で、これらのインタビューの影響を UX Research チームが追跡するのに役立つように、次のラベル ([USAT::Responder Outreach](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&sort=relevance&search=usat)) を含めてください。

**注:** GitLab Customer Success Managers も上記のプロセスに従うことができるため、彼らがアウトリーチした場合、またはすでにユーザーと話すために登録した場合は、彼らと調整するように注意してください。ユーザーは複数の GitLab チームメンバーから連絡されるべきではありません。ユーザーがアウトリーチメールに応答しない場合、ユーザーに 2 回以上連絡すべきではありません。

#### プロダクトリーダー向けの手順

1. Issue で共有される `USAT Follow Up Users` Google Sheet を見ます。あなたのグループのプロダクトマネージャーまたはプロダクトデザイナーが話したいと思う可能性のあるユーザーを特定します。そのユーザーに連絡するために、適切なカラムに彼らの名前を入れて、特定のプロダクトマネージャーまたはプロダクトデザイナーをアサインします。これはまた、ユーザーへの「ホールド」としても機能し、他の人が興味を持っている場合は、そのチームメンバーと調整する必要があります。
1. あなたのグループまたは別のグループの別のプロダクトマネージャーまたはプロダクトデザイナーが同じユーザーと話すことに興味があるかもしれないと思う場合、効率のためにそのチームメンバーに通知することを検討してください。
1. プロダクトマネージャーまたはプロダクトデザイナーの 1 人が、別の GitLab チームメンバーによってすでに「クレーム」されているユーザーと話すことに興味がある場合、プロダクトマネージャーまたはプロダクトデザイナーがそのチームメンバーに連絡して、合同会話を調整してもらいます。**ユーザーの時間に注意し、このアウトリーチを連続した会話ではなく、単一の会話に制限する必要があります。**

#### プロダクトマネージャーおよびプロダクトデザイナー向けの手順

1. 別の GitLab チームメンバーが、あなたが話す関連性があると感じたユーザーの隣にあなたの名前を入れる場合があります。
1. ユーザーと話せない、または話す意思がない場合は、自分の名前を削除するか、代わりを見つけてください。
1. 他のチームメンバーにアサインされていない、関連性があると感じる他のユーザーが見える場合、そのユーザーを自分にアサインしてください。
1. 別のチームメンバーにアサインされている他のユーザーが見える場合、そのチームメンバーに連絡して、合同会話を調整します。他のチームメンバーにアサインされたユーザーに連絡しないことが非常に重要です。ユーザーの時間に注意し、過度のコミュニケーションによるネガティブセンチメントのリスクを取りたくないからです。これらの理由から、これらの会話をユーザーごとに 1 回に制限しています。

#### メール経由で追加のフィードバックを集めるためのプロセス

1. USAT+ レスポンダーアウトリーチ [Glean メールプロンプト - 内部限定](https://docs.google.com/document/d/1k_bnEoDnK7v30G6nnd9Jq740dpGrE_2oPGUR_6MNrfM/edit?usp=sharing) を使ってメールを生成します (下の「Glean を使って USAT+ アウトリーチメールをドラフトする」を参照)。最初から書きたい場合は、下のサンプルメールコピーを適応できます。

**サンプルメールコピー**:

> 件名: あなたの [Product/Feature Name] フィードバックへのフォローアップ
>
> こんにちは [Name]、
>
> 最近のサーベイで [specific feature/area] についてフィードバックを共有する時間を取っていただきありがとうございました。私は [Your Name]、GitLab の [Product/Feature] の [Product Manager/Designer] で、興味を持ってあなたの応答を読みました。
>
> あなたは [サーベイの応答からの 1-2 つの具体的なポイント] とおっしゃいました。これをよりよく理解して、あなたや他の方々の体験を改善できるようにしたいと思っています。
>
> 数分時間がありましたら、次のことを理解するのを助けていただけますでしょうか:
>
> - [彼らのフィードバックに関連する具体的な質問]
> - [コンテキストや影響についての具体的な質問]
> - [オプション: 何が改善するかについて尋ねる]
>
> このメールに、あなたに合ったレベルの詳細で直接返信していただいて結構です。たとえ数文でも、信じられないほど価値があります。
>
> より良い製品を構築するのを手伝ってくださり、再度ありがとうございました。[customer/user] としてのあなたの視点が、私たちが優先することを直接形作ります。
>
> 敬具、
> [Your Name]
> [Your Title] • GitLab

##### Glean を使って USAT+ アウトリーチメールをドラフトする

アウトリーチを一貫性があり、パーソナライズされたものに保つために、フォローアップに参加したサーベイ回答者にメールをドラフトする際は USAT+ レスポンダーアウトリーチ Glean メールプロンプトを使用します。

1. [USAT+ レスポンダーアウトリーチ Glean メールプロンプト Google ドキュメント - 内部限定](https://docs.google.com/document/d/1k_bnEoDnK7v30G6nnd9Jq740dpGrE_2oPGUR_6MNrfM/edit?usp=sharing) を開く

1. プロンプトの全文を Glean にコピーし、その指示に従い、次の短い質問セットに答えます:
   - メールのみのフィードバックが必要か、25-30 分の通話が必要か、
   - これが最初のメールか、それとも 2 回目 (最終) のフォローアップか、
   - あなたの役割／製品領域、
   - 回答者のファーストネームと USAT+ 応答からの 1-3 個の重要なポイント、
   - メールから得たい主な結果。

1. Glean は生成します:
   - 開封率／応答率に最適化された 3 つの件名オプション、および
   - レビュー、トーンを編集、送信できるドラフトメール本文。

1. 最終メールが依然として次のことを満たしていることを確認:
   - ユーザーの USAT+ サーベイフィードバックを明確に参照、
   - GitLab チームメンバーの 1 人がユーザーごと、アウトリーチメールは 2 回 (初回 + フォローアップ 1 回) 以下の制限を尊重、
   - Product Legal guidance と SAFE フレームワークと整合。

メールを手動で書きたい場合は、上記のセクションのサンプルメールコピーを依然として参照またはフォールバックとして使用できます。

#### ユーザーとのフォローアップインタビューをスケジュールするプロセス

1. ユーザーをスケジュールする最良の方法は Calendly です。まだしていない場合は、[Calendly の無料アカウントをセットアップ](https://calendly.com/signup) してください。招待の説明にあなた自身と会話の目的を説明する詳細を追加します。また、Zoom アカウントを接続するか、個人の Zoom URL を貼り付けることで、個人の Zoom リンクを追加します。
1. 録画への同意を求めるために、招待フォームに 3 つの追加の質問を追加する必要があります。以下にサンプルがあります。UX Research チームによって検証されたコンテンツを密接に反映しているので、サンプルどおりにこれらの質問を使用してください。
1. USAT+ レスポンダーアウトリーチ [Glean メールプロンプト - 内部限定](https://docs.google.com/document/d/1k_bnEoDnK7v30G6nnd9Jq740dpGrE_2oPGUR_6MNrfM/edit?usp=sharing) を使ってメールを生成します (上の「Glean を使って USAT+ アウトリーチメールをドラフトする」を参照)。最初から書きたい場合は、下のサンプルメールコピーを適応できます。
1. **通話に時間どおりに参加してください**。さらに良いのは、2 分早く参加することです。Zoom が適切に動作するように人々にコーチする準備をしてください。通話で全員が自己紹介することを確認してください。
1. 人々が録画に同意した場合でも、それをオンにする前に、もう一度録画してもいいか尋ねてください。明らかに、同意しなかった人々を録画しないでください。
1. [ユーザーインタビューのファシリテーション](/handbook/upstream-studios/experience-research/facilitating-user-interviews/) に関するトレーニング資料を参照してください。

**サンプルメールコピー**:

> 件名: [Product/Feature] について 30 分間の会話に応じていただけますか？
>
> こんにちは [Name]、
>
> 最近の [specific feature/area] についてのサーベイでお考えを共有していただきありがとうございました。私は [Your Name]、GitLab の [Product/Feature] の [Product Manager/Designer] で、あなたのフィードバックは本当に際立っていました。
>
> あなたは [サーベイの応答からの 1-2 つの具体的なポイント] とおっしゃいました。あなたの体験についてもっと深く掘り下げたいと思います。会話により、完全なコンテキストを理解し、あなたのようなユーザーにとって最も重要なことに対処していることを確認するのに役立ちます。
>
> **30 分でカバーする内容:**
> [feature/product] での現在のワークフロー
> 遭遇した具体的な課題や摩擦ポイント
> あなたの体験を改善するもの
>
> これらの会話は私たちのロードマップを直接通知し、私はそれらをアナリティクスデータの量よりもはるかに価値があると感じています。応じる場合は、ここであなたに合った時間を選択できます:
>
> **通話をスケジュール:** https://calendly.com/yourname/30min
>
> タイミングが合わない場合はプレッシャーなく - 忙しいことは承知しています。いずれにせよ、フィードバックを提供する時間を取ってくださってありがとうございます。
>
> 敬具、
> [Your Name]
> [Your Title] • GitLab

**Calendly 招待の 3 つの追加質問のコピー**:

> フォローアップ Issue やディスカッションであなたが言うことを正しく表現するため、この会話を録画したいと思います。この会話の録画を許可するかどうかをお示しください。
>
> はい、私たちの会話を録画してもよいです。
>
> いいえ、私たちの会話を録画してはいけません。
>
> GitLab では、透明性を大切にしています。会話の録画を GitLab で公に共有したいと思います。録画を GitLab で共有することを許可するかどうかをお示しください。
>
> はい、GitLab で録画を公に共有してもよいです。
>
> いいえ、GitLab で録画を公に共有してはいけません。
>
> これと将来の GitLab とのリサーチアクティビティに参加することで、私が提供する提案、アイデア、機能強化リクエスト、フィードバック、その他の推奨事項に関するすべての知的財産権を GitLab B.V. が保持し、それらは GitLab B.V. に譲渡されることに同意します。
>
> はい
>
> いいえ

#### フォローアップインタビューの後

1. 通話に複数の GitLab 従業員がいる場合、すぐに後でデブリーフィングするのは有益です。
1. インタビューから取ったすべてのメモと Zoom 録画を集め、この [Dovetail プロジェクト](https://gitlab.dovetailapp.com/projects/36nmGVKvkaT7SGMXtUeHVg/v/70xPTo5RzTRZnCNEVz1fWH) の `USAT` カラムに追加します。
1. ユーザーに何かをフォローアップすると言ったり、さらに情報を送ることを約束した場合は、できれば 2 営業日以内に必ずそうしてください。
1. スプレッドシートに戻り、_Status_ カラムでユーザーと話したことをマークし、Dovetail の録画へのリンクを追加します。
1. 通話で集めたフィードバックに対処するために Epic/Issue を作成する場合、ラベル [USAT::Responder Outreach](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&sort=relevance&search=usat) を追加し、その四半期の対応する USAT レスポンダーアウトリーチ Issue にリンクします。

注: USAT 関連 Issue にタグを付けることは、Product Key Reviews の [improvement slides](https://docs.google.com/presentation/d/1ZXEfR1lo5y5tpRi0i5l-OSX3v3wMe6jepjJcZfKyTvw/edit#slide=id.ge2b883c896_6_0) などの追跡／レポーティングを助けるために重要です。

### コストプロファイルとユーザー体験

すべてのプロダクトマネージャーは、アプリケーションがどのようにホストされているか (self-managed または gitlab.com) に関係なく、製品領域のユーザー体験とコストプロファイルに責任があります。機能がコストの観点から持続不可能な場合、それは SaaS ビジネスのマージンを侵食し、self-managed 顧客の総所有コストを引き上げる可能性があります。機能が遅い場合、それは私たちのユーザーやプラットフォームの他のユーザーの満足度に影響する可能性があります。

機能について考えるとき、プロダクトマネージャーが尋ねるべきいくつかの質問があります:

- 私の製品領域に関連するコストは何か？GitLab.com の各ティアのマージンへの影響は？
  - ネットワーク、コンピュート、ストレージのコストを考慮する
- GitLab Inc と self-managed 管理者が GitLab を実行するコストフットプリントを最適化するのに役立つツールが用意されているか (例: ノードリバランシング、オブジェクトを低コストのストレージクラスに移行、ガベージコレクション機能)
- ユーザーが [CI とストレージの制限](https://about.gitlab.com/pricing/) 内に留まるのを助ける機能とデフォルト設定はあるか？
- GitLab の可用性とパフォーマンスを向上させ、[悪用ベクトル](/handbook/security/security-operations/trustandsafety/diy/) を減少させるための、管理者向けの設定可能な [アプリケーション制限](/handbook/product/product-processes/#introducing-application-limits) が用意されているか？
- GitLab.com でこれらの機能とやり取りする際のユーザー体験は？速くて楽しいか？

これらの項目は MVC で実装される必要はありませんが、GitLab.com でのデプロイメントには潜在的なコストとアプリケーション制限を考慮する必要があります。

プロダクトマネージャーは、彼らが反復的に改善している機能と体験のパフォーマンスとコストを定期的に評価する必要もあります。機能の MVC は効率的かもしれませんが、いくつかのイテレーションでコストプロファイルが増加する可能性があります。

#### 運用コストを理解するためのツール

PM が機能の運用コストを理解するために活用できるいくつかの異なるツールがあります。これらのいくつかはインフラストラクチャによって維持されており、GitLab.com の運用データに基づいています。サービスピンのような他のツールは、self-managed ユーザーのコストをより理解するために活用できます。最終的に、各プロダクトグループは、コストを理解し最適化するために必要なデータを持つことを保証する責任があります。

- インフラストラクチャコストを可視化するための有用なダッシュボード:
- [Access to Billing Console](https://console.cloud.google.com/billing/) ([アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) 必要)
- [Service ping](https://docs.gitlab.com/development/internal_analytics/service_ping/)
- あなたのエンジニアリングマネージャー、Slack の #infrafin、より広い GitLab チーム

#### インフラストラクチャコスト管理イニシアチブについて詳しく学ぶためのリンク

- [Infrafin Board Workflow](https://gitlab.com/groups/gitlab-com/-/boards/1502173?label_name%5B%5D=infrafin)
- [Infrafin Board by Group](https://gitlab.com/groups/gitlab-com/-/boards/2054211?label_name%5B%5D=infrafin)
- [Infrafin Board by Savings Amount](https://gitlab.com/groups/gitlab-com/-/boards/992233?&label_name%5B%5D=infrafin)
- [Infrafin Cost Management Handbook Page](/handbook/engineering/infrastructure-platforms/cost-management/)

#### エンドユーザー体験を理解するためのツール

- GitLab.com 上の [Snowplow data](/handbook/enterprise-data/platform/snowplow/)
- 四半期 USAT および SUS サーベイ
- [Page load performance](../product-processes/#page-load-performance-metrics)

## Life Support PM の期待事項

Life Support PM の役割を行うときは、以下のみが期待されます:

- 次の 3 つのマイルストーンの管理
- グループミーティングまたは非同期ディスカッションチャンネルへの参加
- 今後のマイルストーンの優先順位付け
- 今後のマイルストーンの MVC 定義
- グループディスカッションを通じてスケジュールされた Issue のフィデリティを向上させる
- グループによって提供される機能がリリース投稿で表現されることを確認

推奨されない責任のいくつか:

- 長期 MVC 定義
- 1 年計画
- カテゴリ戦略の更新
- 方向性ページの更新
- アナリストのエンゲージメント
- アドバイザリーおよびエグゼクティブカスタマープログラムの発表

### Build vs "Buy"

プロダクトマネージャーとして、GitLab が特定の問題の解決策をエンジニアリングすべきか、ニーズに対処するために既製のソフトウェアを使用すべきかについての決定を行う必要があるかもしれません。

まず、私たちのユーザーが同様のニーズを共有しているか、それが GitLab のスコープの一部であるかを考慮します。そうであれば、[GitLab の機能として構築する](/handbook/values/#dogfooding) ことを強く検討します:

- 活用するために [オープンソースオプションを評価する](#evaluating-open-source-software)。
- 市場投入時間が問題である場合は、優先順位付けを支援するために [グローバル最適化 Issue](/handbook/values/#efficiency-for-the-right-group) を開くこともできます。
- 潜在的な買収については、[買収プロセス](/handbook/acquisitions/acquisition-process/) に従ってください。

ニーズが GitLab に特有のもので、製品に組み込まれない場合、いくつかのガイドラインを検討してください:

- 必要性: これは _実際に_ 今解決する必要があるか？そうでない場合、それなしで進めて、後で情報に基づいた決定をするためにデータを収集することを検討してください。
- 機会費用: ニーズは GitLab のビジネスの中核ですか？他の機能の作業の方が会社とユーザーにより多くの価値を返すでしょうか？
- コスト: 既製の解決策はいくらしますか？社内の専門知識と機会費用を考慮すると、構築するのにいくらかかりますか？
- 市場投入時間: 解決策を社内でエンジニアリングする時間はありますか？

これらの考慮事項を評価した後、商用解決策を購入することが最良の道である場合:

1. 支出がその部門に割り当てられるため、[誰がその結果を所有するか](/handbook/finance/#how-spend-is-allocated-to-departments) を考慮します。提案された計画について彼らの承認を得ます。
1. 所有当事者に `vendor_contracts` テンプレートを使用して [finance issue を開いて](https://gitlab.com/gitlab-com/finance/issues/new) もらい、上記の正当化がリクエストに含まれていることを確認します。

#### オープンソースソフトウェアの評価

build vs "buy" の決定でオープンソースソフトウェアを検討する際、私たちは次の一般的な基準を利用してソフトウェアを統合するかどうかを決定します:

- **互換性** - そのソフトウェアは [互換性のあるオープンソースライセンス](https://docs.gitlab.com/development/licensing/#acceptable-licenses) を利用していますか？
- **実行可能性** - そのソフトウェアは現在の状態で、検討中のユースケースに対して実行可能ですか？
- **速度** - そのソフトウェアでのイテレーションの速度は高いか？新しい機能や機能拡張が素早く提案され完了するか？セキュリティパッチが定期的に適用されるか？
- **コミュニティ** - ソフトウェアに貢献する多様なコミュニティがあるか？ソフトウェアはより広いコミュニティによって統治されているか、それとも単一の企業エンティティによって統治されているか？メンテナーはコミュニティからのフィードバックに定期的に対処するか？

## Analytics instrumentation ガイド

[Analytics Instrumentation Guide](/handbook/product/product-processes/analytics-instrumentation-guide/) を参照してください。

## ローンチ後の Instrumentation ガイド

**目標:**
より優れた製品インサイトを提供するために、私たちのオファリング全体で製品の計測を増やすこと。過去の機能ローンチから、何の機能が計測されていて計測が必要かを後ろ向きに評価する必要があります。ローンチ後の実装により、現在キャプチャされていない可能性のある機能の使用と採用へのインサイトをよりよく可視化できます。

**タスク:**

1. Issue リクエスト
   - PM:
     - [Product Data Insights ハンドブック](/handbook/product/groups/product-analysis/#working-with-us) に従い、カテゴリレベルでの製品の計測に焦点を当てた Issue を [Post-Launch Instrumentation テンプレートを使って](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Post-Launch%20Instrumentation%20Audit) 作成します。
     - Issue を Product Data Insights カウンターパートにアサインします。Carolyn Braza (`@cbraza`) が可視性のために自動的に追加されます。
   - 整合
     - PM/PDI: すべてのステークホルダーが Issue に追加されたら、Product Data Insights チームは PM カウンターパートと以下について整合する時間を設定します:
       - 目標
       - 優先順位
       - マイルストーン
     - TPgM が計画ドキュメンテーションの実装を支援する場合があります。
1. カテゴリインベントリと計測マッピング
   - PM/PDI: 一緒に [このスプレッドシートテンプレート](https://docs.google.com/spreadsheets/d/1sqoGOM3MIOF0ntfxgJ3cuKVyY3MLT8Cfvxi5xBvgfws/edit?usp=sharing) を使ってカテゴリインベントリをアウトラインします。
     - カテゴリレベルの実装は、最も利用される機能と、ビジネスに最大の影響を与えると私たちが信じる領域を優先するべきです。
     - そこから、PM と Product Data Insights カウンターパートは、ステップ 3 でアウトラインされたラベルを実装ステータスのマーカーとして利用します。
     - PM はカテゴリレベルでの計測のマッピングをリードし、Product Data Insights カウンターパートと密接に協力します。
   - カテゴリの計測に貢献すると特定された任意のメトリックまたはイベントについて、定義ファイル内で正しい `product_category` を設定する必要があります。
1. 監査とレビュー
   - PM/PDI: 非同期で品質チェックと精度を確保するために、実装を監査／レビューします。TPgM が QA を支援する場合があります。
1. カテゴリ yaml ファイルの更新
   - PM: 該当する実装ステータス (以下を参照) で categories.yml ファイルを更新します。categories.yml ファイルを利用して、Product Data Insights チームはカテゴリレベルでの時間経過に伴う実装を追跡する Tableau ダッシュボードを作成します。
     - Complete - 計測が完了し満足のいくもの
     - Incomplete - 一部計測されているが完了していない
     - None - 計測なし - 計測が必要
     - Not needed - 計測は不要
1. Analytics 計測
   - PM/PDI: カテゴリ計測の監査が完了したら。赤 (実装が必要) または黄 (一部計測、完了していない) でマークされたカテゴリについて、
   - PM/EM: ラベル `analytics instrumentation` を持ち、[usage data instrumentation テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Usage+Data+Instrumentation) を活用する計測 Issue を作成します。

## ページロードパフォーマンスメトリクス

GitLab の知覚されるパフォーマンスをよりよく理解するため、[sitespeed.io](https://www.sitespeed.io) に基づく合成ページロードパフォーマンステストフレームワークが利用可能です。

各ステージに [Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-create/product-performance-create?orgId=1) があり、[Largest Contentful Paint](https://web.dev/articles/lcp) と最初／最後のビジュアル変更時間を追跡します。これらのメトリクスは一緒に、これらのページとやり取りする際にユーザーが持つ体験へのハイレベルのインサイトを提供します。

### パフォーマンステストへの追加ページの追加

Grafana ダッシュボードは [grafonnet](https://github.com/grafana/grafonnet-lib) を使って管理されており、追加のページとチャートを追加するのが簡単です。

新しいページセットのテストにはわずか 2 ステップが必要です:

1. 望ましい URL を sitespeed の [unauthenticated](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/blob/master/gitlab/desktop/urls/desktop.txt) または [authenticated](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/blob/master/gitlab/desktop/loggedinurls/desktop.txt) テストリストに追加します。URL、スペース、`[Group]_[Feature]_[Detail]` の形式のエイリアスで新しい行を追加します。エイリアスは 1 単語である必要があり、サンプル MR は [こちら](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/merge_requests/29) です。認証されたユーザーアカウントには特別な権限はなく、単にログインしているだけです。
1. 関連するステージの [grafonnet ダッシュボードファイル](https://gitlab.com/gitlab-com/runbooks/-/tree/master/dashboards/product) を開きます。望ましいグループに対応するセクションを見つけ、`productCommon.pageDetail` への呼び出しを追加します。呼び出しの引数は、`Chart Title`、上記の `Alias`、テストされる `URL` です。JSON フォーマットが正しいことを確認します。最も簡単な方法は、別の行から単にコピー／ペーストすることです。サンプル MR は [こちら](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/2719/diffs) で利用可能です。

両方の MR をメンテナにアサインします。マージされた後、ステージの Grafana ダッシュボードは自動的に更新されます。[ビデオウォークスルー](https://youtu.be/sGdzWKzMKpY) も利用可能です。
