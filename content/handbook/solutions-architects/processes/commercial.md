---
title: High Velocity SA エンゲージメントモデル
upstream_path: /handbook/solutions-architects/processes/commercial/
upstream_sha: 5eeae5a75957f16a16538b0ec5f531ce723f3a8a
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## ビジョン

High Velocity SA チームは、コマーシャル顧客が統一された DevOps 戦略を確立する動機付けとなるよう、技術的な才能と製品への情熱を発揮するのに最適な場所です。

## 構造

High Velocity Solutions Architecture チームは、グローバル [SA 組織](/handbook/solutions-architects/)の一部であり、主に Mid-Market のお客様にフォーカスし、効率的かつ効果的に技術評価をリードすることを目指しています。チームは AMER 地域をカバーし、その地域でのお客様サポートに責任を持つソリューションアーキテクト (SA) のチームで構成されています。

### チーム役割

1. [ソリューションアーキテクト (SAs)](/job-description-library/sales/solutions-architect/)
2. [Demo Architect](/job-description-library/sales/demo-architect/)
3. [Solutions Architecture Manager](/job-description-library/sales/solutions-architect/#manager-solutions-architects)

## High Velocity ソリューションアーキテクチャエンゲージメントモデル {#high-velocity-solutions-architecture-engagement-model}

### SA エンゲージメント考慮事項

- ソリューションアーキテクト (SA) は、GitLab のオファリングをより多く購入・利用したい見込み顧客や新規顧客を支援します。Customer Success Manager と Customer Success Engineer は、お客様がすでに購入したものの採用をガイドします。Professional Services は、お客様がすでに購入したものの実装をお客様と共に行います。
- SA に対するすべてのリクエストは、Salesforce Opportunity の [SA Request ボタン](#sa-request-triage-process)を使って提出されます。
- Salesforce Opportunity は [MEDDPPICC](/handbook/sales/meddppicc/) を持つべきです (および [required 7 methods applied](/handbook/sales/commercial/#required-7))。
- 説得力のあるイベント (compelling events) は、ポジティブな Net ARR (またはアカウントが深い技術知識を必要とする、または再販される必要がある場合のネガティブな Net ARR) を持つ Opportunity のコマンドプランに明確に定義されるべきです。
- SA がエンゲージするとき、ノートとアクティビティは Salesforce ([SA アクティビティキャプチャページ](/handbook/solutions-architects/processes/activity-capture/)を参照) と [Customers & Prospects](https://drive.google.com/drive/folders/0B-ytP5bMib9Ta25aSi13Q25GY1U?resourcekey=0-MBirIe2vWyQXYi8cJEkH2Q&usp=sharing) Google Drive ディレクトリにわたって記録されます。

### セグメント固有のエンゲージメントモデル

SA チームのエンゲージメントは AE 役割でセグメンテーションされており、SA エンゲージメントモデルが営業組織の構造と整合するようになっています。[個々の AE の役割、エリア、セグメントはこのレポートで参照](https://gitlab.my.salesforce.com/00O8X000008RUf1)

#### Mid-Market

1. **Mid-Market First Order (FO)**: SA が必要となり、コマンドプランとカスタムピッチデッキが活用されている Opportunity に対する初期段階の `2-Scoping` から `4-Proposal`。ゴールはクローズ日の 15 日前までに `3-Technical Evaluation` を完了することです。
1. **Mid-Market Named (Key)**: Opportunity の進行中に SA が必要となる Opportunity (ステージに関係なく)。ゴールはクローズ日の 30 日前までに `3-Technical Evaluation` を完了することです。
1. **Mid-Market Territory (Terr)**: SA が必要となり、コマンドプランとカスタムピッチデッキが活用されている Opportunity に対する `3-Technical Evaluation`。ゴールはクローズ日の 30 日前までに `3-Technical Evaluation` を完了することです。

### SA リクエストトリアージプロセス {#sa-request-triage-process}

High Velocity SA トリアージプロセスは、受信した Solutions Architect (SA) リクエストを管理および優先順位付けするための構造化されたアプローチです。このプロセスは、SA リソースの効率的な割り当てとお客様ニーズへの迅速な対応を保証します。トリアージプロセスの主要なステップは以下のとおりです:

1. リクエスト提出:
   - すべての SA リクエストは Salesforce Opportunity の SA Request ボタンを通じて提出されます。
   - リクエストには、完了済みのコマンドプランと MEDDPPICC 情報を含めるべきです。

2. 初期レビュー:
   - SA Regional Team (AMER) のメンバーが新しいリクエストをレビューします。これらのレビューのサービスレベル目標は[1 営業日](#1-triage-within-one-business-day)です。
   - レビューには、コマンドプラン、技術要件、Opportunity の詳細の評価が含まれます。

3. 「[4 つの質問](#the-4-questions)」の評価:
   - コマンドプランは適切に完了しているか?
   - SA はお客様の現在のスタック、競合状況、参加者、ユースケース、動機について十分に理解しているか?
   - SA に十分な準備のリードタイムがあるか?
   - SA はこのアカウントに関連する経験を持っているか?

4. 割り当て:
   - 評価に基づいて、リクエストは適切なスキルとキャパシティを持つ利用可能な SA に割り当てられます。
   - 割り当ては SA チーム内で協働的に行われ、「[2 つ目の目線](#2-encourage-a-second-pair-of-eyes-without-delaying-assignment)」原則を優先します。

5. 優先順位付け:
   - リクエストは、商談規模、戦略的重要性、緊急度などの要因に基づいて優先順位が付けられます。
   - 時間的制約のあるリクエストには、ファストトラックの優先順位付けが利用可能です。

6. コミュニケーション:
   - 割り当てられた SA は、Account Executive にアカウントに取り組んでいることを通知し、詳細を確認し、期待値を設定し、可能なアカウント戦略について議論する責任があります。
   - SA と AE は、タイムライン、次のステップ、次のミーティングのアジェンダ、コールでの役割について議論します。
   - 必要となる追加情報や明確化はこの段階で要求されます。

7. 準備と実行:
   - 割り当てられた SA はエンゲージメントの準備を行います。これには、デモのカスタマイズ、お客様のリサーチ、他のチームメンバーとの協働が含まれる場合があります。
   - SA は、ディスカバリーコール、デモンストレーション、または技術ディープダイブなどの依頼されたアクティビティを実行します。

8. フォローアップとドキュメント化:
   - エンゲージメント後、SA は成果、次のステップ、関連情報を Salesforce および Customers & Prospects Google Drive フォルダに文書化します。
   - SA は、必要なフォローアップアクションや追加サポートについて AE と協働します。

このトリアージプロセスにより、SA リソースが効果的に活用され、お客様のニーズが迅速に満たされ、営業チームが営業サイクル全体を通じてタイムリーで価値ある技術サポートを受けられることが保証されます。

#### 効率的なトリアージプロセスのためのガイドライン

##### #1: 1 営業日以内にトリアージ {#1-triage-within-one-business-day}

_1 時間以内である必要はありません。先にランチを食べてもよいです_

- 完全に許容される行動: 新しい Opportunity が作成され、チームがデモや日常で忙しいため 3 時間ほど放置される。
- 完全に許容される行動: 新しい Opportunity が作成され、チームの Slack チャンネルで誰かが「新しい Opportunity があるので議論したい」と言ったが、チームのフォローアップ議論が他の用事で忙しいため 2 時間または 4 時間来ない。これも問題ありません。待機期間は誰かを軽視するものではなく、1 日の自然な間に対応できるときに対応します。
- 1 営業日の定義: 午後 4 時に来た場合、チームは翌日の午後 4 時までにトリアージする時間があります。

##### #2: 割り当てを遅らせずに 2 つ目の目線を奨励する {#2-encourage-a-second-pair-of-eyes-without-delaying-assignment}

_可能であれば、最初の割り当ての前または後に、2 名のチームメンバーがコマンドプランをレビューする_

- 可能な場合は常に、2 人目のチームメンバーがコマンドプランをレビューし、追加のインサイトを提供し、徹底的な理解を保証すべきです。この 2 回目のレビューは、リクエストへの応答の遅延を避けるために初期割り当て後に行うことができます。
- Opportunity が割り当てられたら、割り当てられたチームメンバーは別のチームメンバーまたは reporting manager と協働してプランをレビューし、ゴールを検証し、次のステップを特定することが奨励されます。これにより、応答性を損なうことなく、品質と戦略的アラインメントを維持できます。
- 2 回目のレビューが実現可能でない、または必要でない場合があります。例:
  - 24 時間未満前にスケジュールされたデモのファストトラック優先順位付け
  - エンゲージメントに必要な非常に特定のコミュニケーション言語やスキル (リクエストを特定の SA に直接割り当てられることを意味する)

##### 4 つの質問 {#the-4-questions}

SA が受信したリードを評価するときに、しばしば「もしも」のシナリオが発生します。これら 4 つの質問は、非同期の Slack 会話のスタートを与えてくれます。_「X」がわからない場合、このミーティングを進めるべきか?_ は、まさにチームメンバーがコンテキストや会話をトリアージコラボレーションに加えられるタイミングです。

- **#1: コマンドプランは適切に完了しているか? プランを通読する。何か欠けていないか特定する。**
  - ゴール: AE とコマンドプランが完璧でないことを許容できるようにする。SA チームが Opportunity の割り当て前、また次に提案されたミーティングの前に、明確化の質問をしたり、より多くの情報をリクエストしたりすることを許容できるようにする。
    - コマンドプランの明確化質問は、経験豊富な SA 組織がリードしてガイドし、GitLab および/または DevOps に新しい営業組織のメンバーを支援する素晴らしい機会です。フィードバックループの適切な時間を持つことは、リードに関わる全員に役立ちます。AE にもっと必要なものを伝えなければ、彼らは将来何を尋ねるべきかをどう理解するでしょうか?
- **#2: コマンドプランに基づいて、SA は以下を十分に理解しているか:**
  - 現在の DevOps スタック? (SCM、Plan、CI/CD、クラウドベンダー、デプロイメントテクノロジー)
  - 評価された競合テクノロジーは何か? (例: GitHub、ADO、Atlassian)
  - ミーティングに参加するのは誰か? 名前と役職を特定する必要がある (LinkedIn の出番)。
  - GitLab に対応してほしい具体的なユースケースは何か?
  - Why Now?
  - トリアージ中にすべての答えがわからなくても問題ありません。エンゲージメントが進むにつれて、ディスカバリーを行い、協働し、一緒に情報を集める機会としてください。
- **#3: SA に準備のリードタイムがあるか; ミーティングはリクエストから 12〜24 時間以内にスケジュールされていないか**
  - ゴール: SA チームに、質問 1 と 2 で正しい情報がすべて収集されたかを評価する十分な時間ができるまで、AE は次のお客様ミーティングのスケジュールを保留する。
    - SA は AE とコマンドプランを明確化し、デモ環境を準備する時間を持つに値します。GitLab は大きく常に変化するプラットフォームで、製品は永遠に提供されています (毎月)。SA チームは、最高の結果を提供できるよう適切な準備時間を依頼します。
    - 余裕がない場合もあります。AE が Salesforce のリクエストレコードをマーク (将来のメトリクスのため) し、チームに通知できる「ファストトラック」プロセスは引き続き存在します。
- **#4: SA はこのタイプのアカウントで関連する経験があるか。**
  - アカウントとタイムラインによっては、「Yes」が「望ましい」答えかもしれません。
  - しかし「No」も「Yes」です。ソリューションアーキテクトは学習に焦点を当てた組織に属しています。経験の少ない SA は、すべてを知っているわけではないアカウントを引き続き引き受け、より広いチームのサポートを受けて学ぶ機会を持ちます。

### SA と作業する際の期待値

#### ミーティングの実施

- すべてのミーティングは、SA が望ましい成果を明確に把握できるようにプランニングされるべきです
  - 見込み顧客はなぜ私たちと会いたいのか?
  - ミーティングの目的/ゴールは何か?
  - アジェンダと参加者リストは事前に提供すべきです;<u>この情報を提供しないと、ミーティングのスケジューリングが遅れる、またはミーティング依頼が辞退される可能性があります。</u>
- SA アクティビティには以下が含まれます:
  - ディスカバリーコールはペインを特定でき、お客様および GitLab アカウントチームの両方に対して、そのペインがもたらす影響への気づきを構築する効果的な方法となります。
  - デモは製品の機能に価値を整合させ、お客様のニーズに語りかけることを目指します。
  - テクニカルディープダイブは、GitLab 製品の非常に特定の機能や能力を披露するために使用されます。
  - リバース AMA では、SA がお客様の環境を評価し、GitLab をより効果的に使用する方法に関する推奨事項を提供します。

#### ポストセールスエンゲージメント

_Customer Success Manager の割り当ては、コマーシャルアカウントの大半では利用できません_

Opportunity が[Negotiating または Awaiting Signature](/handbook/sales/field-operations/gtm-resources/#opportunity-stages) ステージに入るとき、ソリューションアーキテクトと Account Executive は[High Velocity CSM Transition Process](/handbook/customer-success/pre-sales-post-sales-transition)に従って、Customer Success Manager をお客様に紹介し始めるべきです。

ソリューションアーキテクトは、Salesforce にアクティブな Opportunity があるアカウントに主にエンゲージすべきです。お客様と作業する際、商談終了後も持続する信頼されるアドバイザー関係を築きやすくなります。これらのケースでは、SA はフォローアップの質問のためにお客様を適切なサポートチャンネルにリダイレクトするタイミングを判断する必要があります。

以下に、商談クローズ後にヘルプを求めて連絡してきたお客様に SA が提供できる応答例を示します。お客様および会社との個人的なつながりを活用し、必要に応じてカスタマイズしてください。

##### Customer Success Manager のいないアカウント

> Thanks for reaching out!
>
> In order to best direct your question and provide you a timely response, can you submit a support ticket with our support team? Additionally, I have copied your Account Executive as they can help escalate your request if necessary. Below are some links to get started with GitLab support.
>
> I thoroughly enjoyed getting a chance to work with you and role is primarily focused on our customers that are involved in pre-sales engagements; and being a person of one, I don't want to be a bottleneck to you getting a response.
>
> You can go to [support.gitlab.com](https://support.gitlab.com/hc/en-us/requests/new) and submit a new request. Please use your company email address and an account and password will be created for you. There are more details regarding [reaching out to support](https://about.gitlab.com/support/#first-time-reaching-suppor).

##### Customer Success Manager のいるアカウント

> Thanks for reaching out!
>
> In order to best direct your question and provide you a timely response, can you submit a support ticket with our support team? Additionally, I have copied your Customer Success Manager and Account Executive, as well, as they can help escalate your request if necessary. Below are some links to get started with GitLab support.
>
> I thoroughly enjoyed getting a chance to work with you and role is primarily focused on our customers that are involved in pre-sales engagements; and being a person of one, I don't want to be a bottleneck to you getting a response.
>
> You can go to [support.gitlab.com](https://support.gitlab.com/hc/en-us/requests/new) and submit a new request. Please use your company email address and an account and password will be created for you. There are more details regarding [reaching out to support](https://about.gitlab.com/support/#first-time-reaching-suppor).

**以下はお客様に共有できる追加項目です。**

- [tips](/handbook/tools-and-tips/searching/) を使って GitLab のドキュメントと Issue を検索しましょう!
- 提案された機能が [GitLab issues list](https://gitlab.com/gitlab-org/gitlab/-/issues) に見つからない場合は、コミュニティのエクスペリエンスを向上させるために、私たちの製品チームに[アイデアを貢献](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20proposal%20-%20detailed&issue[title]=Docs%20feedback%20-%20feature%20proposal:%20Write%20your%20title)してください!
- インストールおよび日常利用の How-To をカバーする [GitLab Documentation](https://docs.gitlab.com/)。
- GitLab は幸運にも貢献者の強いコミュニティを持っており、GitLab の[フォーラム](https://forum.gitlab.com/)やモデレートされた[サブレディット](https://www.reddit.com/r/gitlab/)でアイデアや Issue を検索できます。
- 透明性を価値とする私たちは、[GitLab YouTube](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg) と [GitLab Unfiltered チャンネル](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A)の両方に毎日コンテンツをプッシュするよう努めています。これらのチャンネルでは How-To や日々のエンジニアリング会話を見つけられます。
- エンジニアリングの支援が必要な場合は、[サポートチケットを作成](https://support.gitlab.com/hc/en-us)してください。チームには["Standard Support"](https://about.gitlab.com/support/#standard-support) があり、月曜から金曜の「翌日」または 24 時間サポートを意味します。

#### オンサイトエンゲージメント

ソリューションアーキテクトは非常に汎用性が高く、価値あるステークホルダーへの直接アクセスを必要とするオンサイトエンゲージメントで活用できます。このアプローチにより、ソリューションアーキテクトはリアルタイムで主要な意思決定者と関わり、重要なインサイトを集め、専門知識に基づいたカスタマイズされた推奨事項を提供できます。

オンサイトリクエストは主にお客様の希望に基づくべきです。完璧に実行されるオンサイトはありません。チームとして、オンサイトでのイテレーションを通じてどう活用するかを学ぶことは、私たちが構築すべき重要な能力です。

- 仮想で関与できなかったさまざまなペルソナを持つ大勢のグループにデモを行う。
- お客様が対面で実施することを依頼したワークショップを実施する。
- エグゼクティブと一室に集まって、彼らのイニシアチブを議論し、組織内での GitLab のビジョンを描く。
- [Day In The Life of A Developer](/handbook/solutions-architects/sa-practices/day-in-the-life/) アセスメントを実施する。

##### オンサイトエンゲージメントの前提条件

お客様のオンサイトには以下が必要です:

- 合意されたアジェンダがあり、オンサイトを依頼または提案を受け入れているお客様
- GitLab が解決できる問題に整合し、GitLab を購入できる価格範囲内の予算を持つ事前定義されたイニシアチブ。この予算は、新規支出または既存の予算と更新日が判明している支出の再利用から得られる場合があります。

##### オンサイトエンゲージメントの予算承認プロセス

[承認リクエストを提出](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/commercial/on-site-requests/-/issues/new?issue[title]=_Customer_Name_)

オンサイトエンゲージメントを実施する前に、Solutions Architect (SA) Manager および Area Sales Manager (ASM) からの承認が必要です。この承認プロセスの目的は、主に予算上の懸念をキャッチし、エンゲージメントの適切な正当化を構築するためのガイダンスを提供し、一貫性を構築するためにチーム全体での可視性を作ることです。チームがオンサイトエンゲージメントの経験を積むにつれ、これは「don't ask, do tell」アプローチに移行する可能性があります。いずれにせよ、SA はオンサイトの必要性を判断するときに正しいことを行うと信頼されます。

レビュープロセスを促進するため、Issue を提出することで以下の情報を提供すべきです:

- お客様 SFDC Opportunity リンク: _追求しているお客様 Opportunity へのリンクで、`Command Plan` 内の `Help` がオンサイトに必要な技術的詳細をリストアップした更新済みのもの。_
- 推定費用: _オンサイトエンゲージメントの旅費と宿泊費 (食事を除く) の予想額。_
- GitLab チームのオンサイト出席者: _オンサイトエンゲージメントへの出席が必要なチームメンバー。Customer Success Manager がアカウントに整合している場合は、コラボレーションがあることを確認してください。_
- これまでのお客様エンゲージメントのサマリ: _お客様との進行中アクティビティの概要。_
- お客様のステークホルダー/チーム: _エンゲージメント中に出席する主要ステークホルダーのリストと、未解決または保留中のオンサイトアクティビティ。_
- オンサイト提案日: _オンサイトエンゲージメントの提案タイムラインとアジェンダ。_
- オンサイトアジェンダ: _各日のオンサイト提案アジェンダ_
- スケジューリング前の未解決アクティビティ: _イベント前に完了する必要があるもの_

このレビュープロセスは、オンサイトエンゲージメントが最高レベルの専門性を持ち、お客様に意図された価値を提供することを保証するのに役立ちます。

## High Velocity SA プロセス

### 非同期 Slack サポート

場合によっては、初期段階または完全に qualified ではない Opportunity で SA サポートが必要になることがあります。Slack は、狭くスコープされた技術的な質問への回答、追加の顧客アウトリーチ資料の提供、または Account Executive の狭くスコープされたお客様の質問への支援に使用できます。これらのリクエストは Slack 経由で非同期に対応できます:

- AMER: `#cs-commercial-amer-support`

この Slack チャンネルは、すべての Mid-market AE <-> SA コミュニケーションのための安全な場とみなされます。質問する際は、SFDC URL とサブスクリプションのタイプ (SaaS または Self-Managed) を含め、常にできるだけ多くのコンテキストを提供してください。Solutions Architecture はこれらのリクエストを監視し、ベストエフォートでサポートを提供します。
テクニカルディスカバリーやソリューショニングが必要なケースでこの Slack チャンネルを使用することは避けてください。これらは標準の SA Request プロセスを通じて対応する必要があります。

### Demo Jam {#demo-jam}

GitLab の継続的なイテレーションとリリースに伴い、お客様にベストなサービスを提供するために、最新の機能を最新の状態に保ちつつ、既存のユースケースに関する鋭さを維持することが重要です。
High Velocity Demo Jam は、High Velocity SA チームが機能のデモを練習し、お客様の反対意見の可能性を議論し、ストーリーテリングを通じて価値を表現するための安全なフォーラムとして機能します。

**構造**:

- Demo Jam は四半期に 2 回、Global Bi-Weekly Meeting の一部として 15〜25 分のセカンダリアジェンダとしてホストされます
- 各セッションは約 5 分のデモ (録画またはライブ) と約 5 分のチームフィードバック/議論で構成されるべきです。
- 録画は GitLab Unfiltered の [Solutions Architecture playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Ko87g05LlHroe7eLPzCPJUY) に公開されます。

### Peer Review {#peer-review}

High Velocity SA チームは、[Peer Review セッション](/handbook/solutions-architects/sa-practices/deliberate-practice/#peer-reviews)を、プリセールスの努力の質を高め、コラボレーションを促進し、継続的学習を推進し、最終的には成功するクライアントエンゲージメントの可能性を高める主要なアクティビティと認識しています。

**構造**:

- Peer Review は四半期に 2 回、Global Bi-Weekly Meeting の一部として 15〜25 分のセカンダリアジェンダとしてホストされます
- 期間: 25 分 (発表者 2 名を想定)
- セッション中に 2 つの Opportunity がレビューされます (各 10 分)
- 結果は文書化され、[High Velocity SA / Reviews & Retros](https://drive.google.com/drive/folders/1Ye6Ks5aHMhVFEsDXbqvglzJMI4Kb_S5s) に保存されます

## チームミーティング

High Velocity SA チームミーティングは、アラインメントの確保、知識共有、重要なトピックの議論のために定期的に開催されます。以下のミーティングは High Velocity SA チームのスケジュールの一部です:

### Global Team Meeting

- 頻度: 隔週、月曜日
- 期間: 50 分
- 目的: グローバルイニシアチブの議論、ベストプラクティスの共有、地域横断トピックの整合
- Global Team Meeting の後半は特定のトピックに割り当てられます:
  - [High Velocity](#demo-jam) (四半期に 2 回)
  - [High Velocity SA Peer Review](#peer-review) (四半期に 2 回)
  - 戦略 (四半期に 1 回)
  - チームレトロスペクティブ (四半期の最終週)
  - オープントピック (四半期に 1 回)

### Regional Team Meeting (AMER)

- AMER
  - 頻度: 月曜日に毎週
  - 期間: 50 分
  - 目的: チームとしてつながり、進行中のイニシアチブを議論し、更新を共有し、フィードバックを提供し、オープンな議論を促進する

すべてのチームミーティングは非同期に優しく実施されます。したがって、すべてのミーティングは録画されチームに共有されます。チームメンバーはこれらのミーティングに定期的に出席する、または議論をレビューして貢献し、関連情報を非同期に共有することが期待されます。

## 有給休暇

High Velocity SA チームメンバーは、[GitLab の有給休暇ポリシー](/handbook/people-group/time-off-and-absence/time-off-types/)の一部として、休暇を取ることが強く推奨されます。複数のお客様を同時にサポートしている場合があるため、休暇を取ることは怖く感じるかもしれません。
お客様を最善に支援するため、以下を考慮してください:

1. [PTO カバレッジ Issue](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/commercial/announcements/-/issues/new?issuable_template=PTO) を作成します。PTO カバレッジ Issue は常に必要なわけではありませんが、作成すべきタイミングのガイドとなる例をいくつか紹介します:
   - お客様がアクティブなトライアルを実行中で、技術的なガイダンスが必要な場合。
   - 2 週間以上不在となり、チーム全体に作業負荷を分散する必要がある場合。

2. 休暇予定をチームに発表し、PTO カバレッジ Issue リンクを共有し、想定されるカバレッジ要件をコミュニケーションします。

## チームリンク

- ダッシュボード - オープンリクエストと主要メトリクス: [COMM AMER SA Dashboard](https://gitlab.lightning.force.com/lightning/r/Dashboard/01ZPL0000011ihZ2AQ/view)
- [Solutions Architect GitLab Group](https://gitlab.com/gitlab-com/customer-success/solutions-architecture) - デモ、スニペット、トレーニングなどのリンクをソリューションアーキテクト間で共有するために使用。
- [Customer Success Tools](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools) - カスタマーサクセスの自動化および移行ツールを保存するために使用。
- [High Velocity SA Initiatives](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/commercial/initiatives/) - High Velocity Solutions Architecture 組織固有のイニシアチブ。
- [SA Leadership Initiatives](https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/) - 広い Solutions Architecture 組織によるイニシアチブ。
- [FIRE Collaborations](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/field-cto-team/firecollaborations) - コラボレーションを追跡するために使用。
- [Guided Explorations on GitLab](https://gitlab.com/guided-explorations) - お客様との例として本番プロジェクトを作成・保存するために使用。
- [Customer & Prospects Drive](https://drive.google.com/drive/folders/0B-ytP5bMib9Ta25aSi13Q25GY1U?resourcekey=0-MBirIe2vWyQXYi8cJEkH2Q) - ノートなどすべてのお客様ファイルを保存するために使用。
- [YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Ko87g05LlHroe7eLPzCPJUY) - SA チームによる保存済み動画を保存するために使用。
