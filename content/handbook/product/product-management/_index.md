---
title: GitLab プロダクトマネジメント
upstream_path: /handbook/product/product-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

このドキュメントでは、プロダクトマネジメントの業務内容、関わり方の場、タイミング、そしてプロダクトマネジメントチームとの関わり方について説明します。

## プロダクトマネジメントの仕事とは

GitLab では、PM は自分の専門領域をリードします。つまり、Create PM が Create グループの取り組み内容、対象リリースを決定し、それが私たちのゴールを前進させるかを確認します。これにはバグ、機能、アーキテクチャ上の変更も含まれます。

PM が入ってくるすべてのバグや Issue を逐一さばくことは期待できないため、さまざまなステークホルダーからのインプットに大きく依存することになります。これを実現するには、PM とステークホルダーの双方が積極的に協力し合う必要があります。これは双方向の取り組みです。

一般論として、製品に対して何かを起こす必要があったり、特定の変更のためにエンジニアリングスタッフが必要な場合は、PM に相談します。GitLab 流に Issue を作成し、そこで PM にメンションするのが望ましいです。

同様に、PM もステークホルダーに特定の変更に関するフィードバックを求める必要があります。変更が GitLab.com とそのメンテナンスに影響を及ぼす場合、PM はインフラストラクチャエンジニアにスコープ、設計、判断について相談するため、能動的にコンタクトを取るべきです。

そして、これらすべてのインプットを総合的に判断し、優先順位を決定するのは PM の役目です。GitLab のすべての目標を念頭に置きつつ、優先順位付けに最適な立場にあるのは PM だと考えられます。

## プロダクトマネージャーとの関わり方

### プロダクトマネージャーへの連絡先

- **[Public Issue Tracker (Product 用)](https://gitlab.com/gitlab-com/Product/issues)**; GitLab のチームメンバーのみに見せたいトピックは confidential Issue を使用してください。
- **[チャットチャンネル](https://gitlab.slack.com/archives/product)**; Issue トラッカーには不向きと思われる質問には、`#product` チャットチャンネルを使用してください。

### どのプロダクトマネージャーに連絡すべきか

どのプロダクトマネージャーがどのカテゴリーを担当しているかを知るには、[Product Categories](/handbook/product/categories/) を参照してください。

### フィードバックの共有方法

一般的に、すべての製品フィードバックは Issue を介して提供する必要があります。製品関連の質問、コメント、インプット、その他があり、*Issue を作成するだけでは不十分な場合*、プロダクトマネージャーが最初に話すべき相手です。

Issue の作成には、機能、バグ、その他、優先順位付け、変更、議論、または更なる注意が必要なものが含まれますが、これらに限定されません。プロダクトマネージャーは、判断や伝達の際にステークホルダーに連絡を取ります。優れたソフトウェアを構築するために、優先順位のバランスを取るプレッシャーはプロダクトマネージャーにかかっており、この実現には必要なあらゆるインプットが必要です。有料機能はそれぞれの PM の責任であり、特定の PM の担当ではありません。例えば、[Service Desk](https://docs.gitlab.com/user/project/service_desk/) は [Plan PM](/handbook/product/categories/features/#project-management) の担当です。

すべてのフィードバックは [GitLab Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) に従う必要があります。従わない場合、Issue やコメントは削除されます。

#### 顧客の機能リクエスト

顧客から既存にない機能リクエストがあった場合は、[gitlab-org issue tracker](https://gitlab.com/gitlab-org/gitlab/-/issues) で [Issue を作成するプロセス](https://docs.gitlab.com/user/project/issues/create_issues/) を参照し、[Feature Proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20Proposal%20-%20lean) テンプレートを選択して、指示に従い可能な限り多くの情報を提供してください。Issue を作成したら、わかる場合は [製品ステージとグループ](/handbook/product/categories/) の適切なラベル (例: `~"devops::plan"`) を必ず追加し、適切なプロダクトマネージャーをタグ付けしたコメントを追加してください。Issue が既に存在する場合は、その Issue に情報とユースケースを示すコメントを追加してください。

Issue でフィードバックを共有する際 (例: "顧客 X がこれを望んでいます") は、必ず次のことを行ってください。

- ソースへのリンクを記載する。通常は Salesforce または Zendesk へのリンクです
  - 有料顧客で ARR と関連付けたい場合は、Salesforce Account URL を使用してください
  - 見込み顧客や重要な成長機会に関連する場合は、Salesforce Opportunity URL を使用してください
- 背景を提供する: 顧客がこの機能を望んでいる場合は、*なぜ* 関心があるのかを含めてください。わからない場合は、必ず確認するか、関連 PM を顧客に紹介してください
- その他の有用な背景を含める (例: 顧客が構築しているソフトウェアの種類、機能をどのように使用するかなど)
- [プロダクトマネージャー](/handbook/product/categories/) にメンションする
  - 不明な点 (例: Issue のステータスが不明確など) があれば、お気軽に質問してください

顧客が単に Issue 番号や「X との統合」などを言及するだけでは、十分な情報ではありません。Issue を作成したりコメントしたりする前に、必ず以下を尋ねてください。

- なぜこれを望むのですか?
- どんな問題を解決しようとしていますか?
- この Issue / 統合のどの部分が重要で、なぜですか?
- ワークアラウンドを試しましたか?
- これがあなたにとってどれくらい重要ですか?

これらをすべて理解するのはプロダクトマネージャーの責任ですが、一歩先回りすれば物事が速く進みます。

顧客が [Advisory and Executive customer programs](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#executive-advisory-board-eab-program) に参加している場合、CSM はそのフィードバックを追跡するために Issue に関連ラベルを追加する必要があります。

これを容易にするために、以下のフィードバックテンプレートを使用することを強く推奨します。

#### フィードバックテンプレート

Issue で顧客フィードバックを提供する推奨方法は、**internal comment** (内部コメント) と [Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/#quick-start) を使用することです。内部コメントは顧客のプライバシーを守り、機密性の高いビジネス情報が公に見えないようにします。

**公開コメントが必要な場合** (顧客がコメントを見ることを期待しているサポートワークフローなど) は、以下のテンプレートを使用します。これをコピー&ペーストして漏れがないように使うか、再利用のために [コメントテンプレートを作成](https://docs.gitlab.com/user/profile/comment_templates/#create-comment-templates) できます。バグ Issue の場合は必要に応じてテンプレートを修正してください。

```markdown
<!-- Select the appropriate subscription and product text below and remove the others (note: do not add them as labels)>

The following ~customer is interested in this capability

- Subscription: ~"GitLab Ultimate" OR ~"GitLab Premium" OR ~"GitLab Free"
- Product: ~"self-managed" OR ~"gitlab.com" OR ~"GitLab Dedicated"
- Link to request: 
- Customer Priority: [low/medium/high]
- Use case: [why interested, problem to solve, current workaround, impact]
- PM to mention: @
- CSM to mention: @
```

- [Customer Requested Issues](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views)

これらのダッシュボードは、特定の顧客に対する Issue の相対的な重要度を表しています。これらはいつでも更新可能であり、24 時間以内にモデルに反映されます。

##### 良い例

> 1000 ユーザー以上の顧客が、スプリント計画をより効果的に行うためにこの機能に関心があると言及しました。彼らが解決しようとしている問題は、現在の実装では X ができず、Y が必要だからするしかないということです。彼らは現在ソフトウェア X を使用してこれを行っていますが、私たちがこれを実現すれば GitLab に移行できるとのことです。
>
> @productmanager この Issue にはマイルストーンが設定されていません。近いうちに対応する予定はありますか?

##### 悪い例

> salesforce.com/blabla

#### 顧客とのコラボレーションプロジェクト

Customer Success Manager が割り当てられている顧客には、通常 GitLab.com 上に [コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) があり、GitLab チームと顧客のチーム双方がアクセスできる場所で、情報の共有、顧客の詳細のドキュメント化、Issue のトラッキングに使用されます。

通常、CSM はメイン Issue を維持し、または [CS-Tool - TAM issue tracker](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/tam-issue-tracking) を有効化します。これは顧客が関心のあるすべての機能リクエストを、公開 GitLab Issue へのリンクとともにリストアップします。

顧客が機能に興味を示したとき、CSM は公開 GitLab Issue にそれを記録し、また [顧客のコラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) のメイン機能トラッキング Issue にもエントリとして追加する必要があります。

機能トラッキング Issue は、顧客の製品ニーズに関する唯一の情報源として、優先順位 (後述) とマイルストーンを更新し、定期的に維持されるべきです。これは過去に提供された機能リクエストのメトリクスをレビューするためにも使用できます。

特定の機能リクエストについて顧客との議論が多い場合、その顧客 [コラボレーションプロジェクト](/handbook/customer-success/csm/engagement/) に Issue を作成し、その Issue をメイン GitLab Issue 上の関連 Issue としてリストアップしてください。これは、メインの製品 Issue に対する顧客の関心の別のシグナルとなり、また顧客と内部 GitLab チームメンバーが彼らのニーズと懸念について議論することも可能にします。

#### 機能リクエストのエスカレーション方法

Issue の作成 / コメントのプロセスを経たが反応がない場合、[必要な情報がすべて Issue に含まれていること](/handbook/product/product-management/#feedback-template) を確認してください。Issue 内および製品ステージの Slack チャンネルで (Issue にリンクして) プロダクトマネージャーに再度フォローアップし、追加の注意とチームメンバーの関与を得てください。

顧客が高優先度の Issue (作業停止につながるバグや、期限を守るために必要な機能など) を特定した場合、上記の顧客機能リクエストのログ作成と追跡の期待されるステップに従い、GitLab Issue に顧客の関心を追加し、コラボレーションプロジェクト Issue に含めます。さらに、[該当グループを担当する](/handbook/product/product-management/#which-product-manager-should-i-contact) [プロダクトマネージャーに連絡](/handbook/product/product-management/#where-to-reach-product-managers) し、直接議論してください。高優先度の一般的な目安は、顧客がその特定の機能をできるだけ早く必要としていることです。

**Critical Priority Requests** は非常にまれですが、発生した場合は Product と Engineering の両者が合意し、CSM がリクエストをファシリテートします。顧客が特定の機能なしで GitLab を継続利用できない場合、CSM は [アカウントのトリアージを開始](/handbook/customer-success/csm/health-score-triage/) し、Issue で顧客の関心を示すプロセスに従い、Product チームと Engineering チームと定期的なチェックインを設定して、機能のステータス、期待値、潜在的なセカンダリプランを評価します。製品およびエンジニアリングプロセスについては、[critical customer merge request](https://docs.gitlab.com/development/code_review/#customer-critical-merge-requests) の詳細を参照してください。

### 製品チームはなぜ解決策ではなく問題について尋ねることを好むのか?

[この UX デザイン記事](https://uxdesign.cc/wanting-a-faster-horse-doesnt-mean-the-customer-is-wrong-90b1bed8b7e) の次の部分でうまくまとめられています。

適切な顧客に適切なタイミングで耳を傾けることは素晴らしい第一歩ですが、彼らのフィードバック / リクエストを正しく解釈していることも確認する必要があります。その理由は、一般的に顧客は「異なるもの」ではなく「より良いもの」を求めるからです — **彼らは既存のソリューションを通じて自分たちの問題を解釈します**。顧客は通常、どんな新製品を作るべきか教えてくれません (それはあなたの会社の仕事です!) が、その製品が解決すべき問題は教えてくれます。

これには、機能リクエストの背後にある根本的な「なぜ」に到達する必要があります — 解決すべき基本的な問題は何か、それを根本的により良く (例: 10 倍速く、簡単に、安く) 解決する方法を考えます。

このコンセプトは、Ford Motor Company の創業者 Henry Ford の (おそらく誤って引用された) 言葉に最もよく表れています: 「もし私が人々に何が欲しいかを尋ねていたら、彼らは『もっと速い馬』と答えていただろう」。

> 顧客がより速い馬を求めたとき、なぜなのかを尋ねるべきです。あなたは次のようなことを聞くでしょう:
> 家から職場までの通勤時間を短縮したい
> 商品をもっと多くの都市に売りたい
> ケンタッキーダービーで勝ちたい
> **解決すべき基本的な問題 (より速い馬を含む多くの解決策がある) を理解したうえで、それを根本的により良く解決する方法を考えるのが仕事です** — 例: 10 倍速い馬はどのようなものか? そして、それに対する潜在的なソリューションの 1 つは、明らかに自動車です。

### フィードバックの例

#### 例: 顧客が機能リクエストを持っている

顧客から機能リクエストを聞いて、その顧客にアカウントの CSM が割り当てられていない場合、通常の手順に従ってください: Issue を作成し、正しくラベル付けします。たとえば、顧客が Issues の機能拡張をリクエストしたとします。上記を読んで、これに `Discussion` ラベルを付ける必要があることがわかり、必要に応じて Plan PM にメンションまたは連絡して優先順位を上げることができます。

組織の営業担当者が有料ティアの機能リクエストを依頼する場合、機能リクエストと望ましい成果をさらに探求するために、プロダクトマネージャーと協力して会話を設定します。プロセスは以下のとおりです。

- 営業担当が、プロダクトマネージャー、顧客、自分自身で 1 時間の Zoom ミーティングを設定。顧客が許可した場合、コールを録音します。
- プロダクトマネージャーは、以下の質問以外で答えてほしい追加の質問を準備します。
  - 現在使用している GitLab のバージョンは? CE / Premium / Ultimate?
  - 現在ソースコード管理はどのように行っていますか? GitLab のマージリクエストや別のツールですか? CI/CD はどうですか?
  - 現在 Issue 管理はどのように行っていますか? HP ALM はどのように使用していますか? Agile/Kanban? スプリント / イテレーションはどのようなものですか? 1 週間? 1 ヶ月? 2 ヶ月?
  - Issue 管理とソースコード管理の統合はどのようなものですか?
  - チームはどのように複数のリポジトリを管理していますか? 通常、チームは 1 つのリポジトリで一度に作業しますか? それとも複数のリポジトリで同時に作業しますか?
- 営業担当はミーティング前に質問を顧客に送信します。
- ミーティングは Salesforce.com で作成されます。
- 営業担当は、顧客との以前の通話のメモを記録する Google ドキュメントを作成します。Google Doc はプロダクトマネージャーと営業マネージャーに共有されます。
- 営業担当とプロダクトマネージャーは、これまでに顧客について知っていることを共有するために 15 分の事前ミーティングを設定し、すでに答えがわかっている質問をして時間を無駄にしないようにします。この事前ミーティングのメモは Google ドキュメントに追加されます。
- 営業担当はアカウントオブジェクトの下に Google ドキュメントへのリンクをノートとして追加します。

有料顧客が特定の機能の開発費を支払う意思を示した場合でも、上記のように対応するべきです。支払う意思があるのは素晴らしいことです: それは彼らがそれを本当に必要としていることを意味します。ただし、GitLab のカスタムバージョンは作成しません。gitlab.com でさえ GitLab Ultimate 上で動作しており、後続で取り組む機能を決めるための技術的複雑性を最小化することで、私たちはより速く動けます。これはトレードオフです。これは「ノー」が常に「ノー」のままという意味ではありません。私たちは改善に対してオープンな姿勢を保ちます。

#### 例: 顧客が GitLab のセットアップに関する具体的なアドバイスを探している

たとえば、SaaS ライセンスでセルフマネージドランナーを設定するためのサポートが必要な場合などです。

特定の顧客とのサポートが必要で、Customer Success Manager が要求されている内容を構成できない場合、または GitLab の使用方法について非常に具体的なガイドラインを提供することを求められている場合は、[Product Support Request](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Support-Request.md) を使用して Issue を作成し、Issue で提案されている手順に従うことをお勧めします。

[顧客の結果](/handbook/values/#results) と [効率性](/handbook/values/#efficiency) に集中し続けるため、Issue に 5 営業日以内の期限を設定し、トリアージのためにセクションのプロダクトリーダーに Issue を割り当てることを推奨します。

#### 例: CI のバグに関する多くのサポートリクエストが来る

前と同じで、Issue が作成されていることを確認し、これが問題になりつつあり修正が必要であると PM にケースを示します。PM はこれが修正されるか、他の方法で解決されるようにします。

#### 例: 新規ファイルの作成が遅いと感じる

GitLab のすべては高速であるべきで、ファイル作成はリポジトリに該当するため、Issue を作成し、メンションすることで PM に認知してもらいます。

PM は、これが一般的な問題なのか、GitLab.com に固有の問題なのかを、インフラストラクチャや他のチームと協力して調査し、必要な変更を次のリリースに向けてスケジュールします。

### Tableau

Product チームは、Issue と Issue に対する顧客の関心を集約するための [Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) を維持しています。情報は Salesforce 顧客アカウントリンクをスキャンすることで、[GitLab issues](https://gitlab.com/gitlab-org/gitlab/issues) から自動的に収集されます。同じダッシュボードを Sales と CS でも使用できます。

Tableau ページの自動化は Salesforce リンクが追加されたことを検出し、顧客の Total Account Value やシートライセンスなどの Salesforce データを使用してそれらをページに追加します。これは、Salesforce リンクが適切な認証情報を持つ GitLab 社員のみがアクセスできるため、公開 Issue における顧客のプライバシーも維持します。

### バグの報告

顧客がバグを報告したい場合は、Issue で [顧客の関心を示す方法の例](/handbook/product/product-management/#customer-feature-requests) を参照し、[Bug](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug) テンプレートを使用して、指示と上記と同じ手順に従ってください。

中優先度バグがプロダクトマネジメントの [トリアージボード](https://gitlab.com/groups/gitlab-org/-/boards/1075672?&label_name[]=type::bug&label_name%5B%5D=customer) で滞留してしまった場合、以下の手順を参照できます。もう一つ役立つビューは [triage report label](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&search=triage+report) です。

機能リクエストと同じバグのログと追跡の手順に従いますが、可能な限り再現手順とワークアラウンドを必ず含めてください。

## Product と CSM の連携

Product チームと CSM チームが密接な協力関係を持つことは、ビジネスが顧客の関心、フィードバック、感情の動向を把握するうえで不可欠です。

### Product による顧客フィードバックの収集

Product チームに所属していて顧客からのフィードバックを求めている場合は、Customer Success Management 組織に相談する必要があります。CSM はすべてのリージョン、ティア、ユースケース、業界にわたる顧客と直接アクセスし、定期的にコミュニケーションを取っているためです。

顧客とのミーティングをリクエストするには、[CSM プロジェクト](https://gitlab.com/gitlab-com/customer-success/csm) で Issue を開き、[Product Engagement](https://gitlab.com/gitlab-com/customer-success/csm/-/issues/new?issuable_template=Product%20Engagement) Issue テンプレートを使用して、適切なフィールドに記入します。フィードバックがほしい特定の顧客が念頭にある場合は、Issue で顧客名を共有し、わかれば担当 CSM をタグ付けしてください (Salesforce にアクセスできる場合はそこで情報を確認できます。それ以外の場合は誰かが代わりに確認します)。

CSM チームは新しい Issue が開かれるたびに Slack で通知を受け、対応可能な特定の顧客とともに Issue で返信します。1 週間以内に返信がない場合 (CSM が顧客とレビューする時間を考慮して)、Issue で <code>[@timtams](https://gitlab.com/timtams)</code> グループに気軽に ping してください。

### CSM による顧客フィードバックの共有

CSM の責務の 1 つは、Product チームと連携して顧客の需要を示し、顧客のユースケースと経験を伝えることで機能の優先順位付けを支援することです。

以下のプロセスに従うことで、機能に対する顧客の関心が Product と適切に共有され、Product が適切なアクションを取ることができるようになります。文書化されたプロセスに従うことで、効率性を向上させ、コミュニケーションのやり取りを減らし、より良い製品を構築し、顧客に対する回答や解決をより迅速に提供できます。

## Product による顧客とのコール参加

Product と顧客が一緒にコールに参加してフィードバック、ロードマップなどを議論することは、双方にとって非常に有益な場合があります。効率的で生産的なミーティングを確保するために、以下の手順に従ってください。

### 顧客のコンテキストの収集

Product コールの前に、期待値と背景について顧客と会話してください。

該当する場合、以下の質問をしてください。

- どの機能および機能性について議論したいですか?
- それらの機能や機能性にどの程度詳しいですか?
- これらの機能のデモを既に受けていますか、または今回が初めてですか?
- これらの機能を本番環境、POC で積極的に使用していますか、それともまだ自分で試していませんか?
- 既存の機能の概要に関心がありますか、それとも将来のロードマップ機能に関心がありますか?
- このコールの目標は何ですか?

### 適切な PM への連絡

[グループまたはカテゴリー](/handbook/product/categories/#devops-stages) の Slack チャンネルを通じて PM にコールへの参加を依頼するのがベストプラクティスです。ダイレクトメッセージは、コールに適切な人が含まれていない場合に他の PM をループインするのが難しく、議論される可能性のあるトピックの可視性を制限するため、問題があります。連絡すべき適切なグループがわからない場合は、一般的な [#product](https://gitlab.slack.com/archives/C0NFPSFA8) チャンネルで尋ねることができます。

PM に連絡する前に、[PM Customer Meeting Briefing Document](https://docs.google.com/document/d/1TPJwjJTOrlrtuJ_srs631ndL6dkiwl9yIi3PPtgStos/edit#heading=h.sujaka5bd7jl) に記入し、リクエストとともに PM に送信してください。PM はドキュメントをレビューし、ミーティングに参加できるかどうかを知らせてくれます。PM はコンテキストドキュメントが受信されない場合や、部分的にしか完了していない場合、ミーティングリクエストを断ることがあります。ミーティングの少なくとも 3 営業日前にリクエストとともにこのコンテキストを送信することを推奨します。PM はドキュメントをレビューし、必要に応じてフィードバックを提供してさらなる明確さを求めます。

さらに、コールがスケジュールされたら、コールの少なくとも 24 時間前までに、顧客と Product チームの両方に共有された詳細なアジェンダがあることを確認してください。

### EBR の準備

CSM は顧客と定期的に [Executive Business Reviews](/handbook/customer-success/csm/ebr/) を開催し、しばしばプロダクトマネージャーの参加を要請します。CSM が Product の参加を求めるとき、(グループの Slack チャンネルで) PM に日付、時刻、希望するトピックとともに連絡します。

CSM は EBR の準備に PM を巻き込み、内容、タイミング、望ましい成果の期待値を完全に確立できるよう協力します。

EBR は通常かなり長く (60〜90 分)、製品プレゼンテーションは全体の EBR のうち小さな部分 (15〜20 分) を占めるだけなので、PM は自分が話す時だけ参加することも歓迎されます。もちろん、フルコールに参加したい場合、それも歓迎です。EBR では顧客が製品フィードバックやリクエストをよく共有するからです。

## Product サポートのリクエスト

顧客ライフサイクル全体を通じて、顧客対応チーム (Support、Account Executive、CSM、Solutions Architect、Professional Services、Renewals Manager など) はプロダクトマネージャーの支援が必要になることがあります。これには、私たちの方向性、特定のユースケースへの対応、組織内の機能性のギャップに関する詳細な議論が含まれます。

これらのリクエストを迅速にトリアージし、容易にスケジュールし、後で追跡できるようにするために、Issue に基づく標準化されたリクエストプロセスがあります。

### Product からのサポートのリクエスト

緊急性が高く影響の大きいリクエストの場合は、`#product` Slack チャンネルに Issue へのリンクを貼り付け、テンプレート内で推奨される PM に `@mention` してください。

### サポートリクエストの取り扱い

サポートリクエストが開かれると、リクエストをカテゴリ分けするラベルが自動的に割り当てられます。

リクエストをトリアージする際に特に重要な 3 つのフィールドがあります。

- Priority: リクエストの時間的な緊急性。`urgent` のリクエストは高い優先度で扱う必要があります
- Impact: [total contract value (TCV)](/handbook/sales/sales-term-glossary/) に基づくビジネスへの潜在的影響
- Stage: リクエストが関連するステージ

すべてのプロダクトマネージャーは、それぞれのステージに関するラベル通知を受け取るように設定する必要があります。

1. [製品プロジェクトのラベル](https://gitlab.com/gitlab-com/Product/-/labels) を一覧表示します
2. 関連するステージのラベルを購読します

## 他チームとの関わり方に関するプロダクトマネージャー向けガイド

### プロダクトグループのカウンターパート

GitLab は独自の方法で設計・開発されています。

私たちの [効率性](/handbook/values/#efficiency) の価値観と一貫して、製品は Product、UX、Quality、Development の [DRI](/handbook/people-group/directly-responsible-individuals/) が協力して開発されます。

| プロダクトマネージャー | エンジニアリングマネージャー | UXer | SET |
| :--------------: | :------------------: | :---: | :---: |
| [マイルストーンの優先順位](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) を設定し、Engineering が取り組む機能を定義する | 完了の定義を所有し、Product に何がマージされるかを決定する。メンテナンス作業の優先順位を付ける | プロダクトマネジメントの優先順位付けを支援するため、小規模および大規模な戦略的 UX ニーズを能動的に特定する | 完了の定義を満たすためのテスト戦略と要件を所有・特定する |

GitLab では、セルフマネージドおよび SaaS ホスト型の顧客向けに製品を開発しています。DRI がいるとはいえ、Engineering、Quality、UX、Product、Security、Infrastructure などインプットを提供すべきステークホルダーが多数いることを認識しています。たとえば、Security チームは安全な SaaS システムを運用するために必要なことについて、より深いコンテキストを持っていることが多いです。同様に、Infrastructure チームは、トイルを減らし、効率的で信頼性が高く、パフォーマントでスケーラブルなシステムを実現するために、製品に何を組み込むべきかについての知見を持っています。

私たちはこれを [プロダクトグループ](/handbook/company/structure/#product-groups) モデルと呼んでいます。これはリーダーシップレベルにおける従来のクワッドコンセプトの拡張で、現在は Development、Quality、User Experience、Infrastructure、Product、Security で構成されています。

プロダクトグループは、製品全体の [技術的負債](/handbook/engineering/workflow/#technical-debt) を含む [グローバル最適化](/handbook/values/#efficiency-for-the-right-group) を促進するために使用できます。

### 全社横断でのプロダクトマネジメントとの連携

PM が連携するカウンターパートは多数います。組織横断で連携する際のベストプラクティスをいくつか示します。

#### Finance Business Partner との連携

プロダクトマネージャーが予算に対する経費が発生する案件を扱う場合があります。これらは研究のための外部ベンダー、開発スタッフィングのための契約業者、インフラストラクチャに関連することがあります。CProdO が製品予算の DRI であり、予算支出に関するすべての変更やリクエストは CProdO を通じて承認される必要があります。

将来を見越した新規予算項目をリクエストするには、Product プロジェクトで [Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) を使用して Issue を開き、CProdO とマネージャーに割り当てます。予算は年次および四半期単位で計画されるため、予算計画のタイミングに依存し、承認がすぐに行われない場合があります。CProdO は次の予算計画セッションで Finance に予算リクエストを持ち込みます。

既存の項目に対する支出増の承認をリクエストするには、Product プロジェクトで [Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) を使用して Issue を開き、CProdO に割り当ててマネージャーをタグ付けします。CProdO はレビューし、予算変更を承認または却下します。CProdO はその後、予測更新のために Finance Business Partner に変更を通知します。

### Content Marketing との連携

コンテンツマーケターとプロダクトマネージャーは、ブログを使って製品の変更を伝え、思慮深い変更で市場と関わる際に連携できます。機能のブログ記事を作成するために Content Marketing と関わるタイミングと方法のガイドラインについては、[ブログ投稿ハンドブックページ](/handbook/marketing/blog/) を参照してください。

### Product Marketing (PMM) との連携

プロダクトマーケターとマネージャーは密接に連携すべきです。ドキュメントのない機能が出荷済みと見なされないのと同様、私たちが積極的に語っていない GitLab の利点は、存在しないのと同じです。

プロダクトマーケターはプロダクトマネージャーに依存して、何が重要で影響力があるかについて導いてもらいます。
一般的に、次のことを行うべきです。

- エピックや高レベルの Issue で、[適切な PMM](/handbook/product/categories/) を必ずメンションする
- 担当の製品エリアに沿った PMM と定期的にミーティング / 非同期で話す
- 新機能を検討する際、能動的にインプットを求める
- 重要な変更の取り組みには PMM をできるだけ早く巻き込む

{{% include "includes/marketing/usecase-competitive-content.md" %}}

### マーケティングとの連携

より大きな機能や新機能のリリースに取り組む際は、プロダクトマネージャーが go to market 計画のさまざまな側面を考慮し、戦略的および物流的な検討事項について適切な stable counterpart と情報共有または連携することが重要です。

#### マーケティング資料

PM として、出荷した変更が GitLab のドキュメントとマーケティング資料全体で適切に表現されることを確認する責任があります。これは、リリース時に [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) が更新され、ドキュメントがマージ・デプロイされ、必要に応じて既存のコンテンツが更新されることを意味します。

リリース後にこれを行うのは受け入れられません。GitLab は非常に複雑で、顧客に大きな価値を提供する機能や関数 (例えば GitLab で認証する多くの方法) でさえ、簡単に見逃されてしまいます。

必要に応じてマーケティングとテクニカルライティングチームの支援を募ることはできますが、小さな更新は自分で行うことを強く推奨します。これは、誰か他の人に何をすべきかを伝えるよりも時間とオーバーヘッドが少なくて済みます。

##### `features.yml` を読み取るページ

[`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) を最新の状態に保つことは重要です。なぜなら、そのファイルを読み取るさまざまなページ (社内向けおよび社外向け) があるからです。以下が含まれます。

**External**

- [Pricing](https://about.gitlab.com/pricing/)
- [Features](https://about.gitlab.com/features/)
- [Why GitLab Premium?](https://about.gitlab.com/pricing/premium/)
- [Why GitLab Ultimate?](https://about.gitlab.com/pricing/ultimate/)
- [Feature Comparison](https://about.gitlab.com/pricing/feature-comparison/)
- [DevOps Lifecycle](https://about.gitlab.com/stages-devops-lifecycle/)
- [DevOps Tools Landscape](https://about.gitlab.com/why-gitlab/)

**Internal**

- [SaaS vs. Self-managed](https://about.gitlab.com/features/)
- [Features by tier](https://about.gitlab.com/features/by-paid-tier/)

### User Experience (UX) との連携

GitLab でのチームとしての働き方の標準は、[Product Development Workflow](/handbook/product-development/how-we-work/product-development-flow/) です。プロダクトマネージャーとプロダクトデザイナーは戦略的カウンターパートとして連携し、問題をより深く理解し、ユーザーニーズを発見すべきです。プロダクトデザイナーとプロダクトマネージャーは、ターゲットオーディエンス、特定の機能を使う際の課題を理解し、それらを解決するソリューションを設計するためにペアを組みます。

ユーザーエクスペリエンス (UX) は視覚的機能やインターフェース設計だけに関係するのではないことを覚えておくことが重要です。UX はソリューションに到達する戦略の無形の設計であり、コードを書く経験、.yml ファイルでの作業、API の設計、CLI での作業などにも当てはまります。これらの機能はすべて、人々によって読まれ、使われることを意図しています。プロダクトデザイナーを計画と開発に巻き込むことは非常に有益です。検討すべきガイドは「人が何かと相互作用するとき、その相互作用を設計する機会がある」ということです。

#### ユーザーワークフローの評価

GitLab 製品が成熟するにつれて、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#outcomes-and-activities-7) の「Improve」セクションに記載されているフィードバックループの仕組みを通じて、重要なワークフローをより使いやすくする必要があることを理解しています。これらのユーザーワークフローをどのように改善できるかについての知見を提供する仕組みとして、[UX scorecards](/handbook/product/ux/ux-scorecards/) を利用できます。

#### 製品の方向計画とソリューション提案で衝突がある場合

成熟度が低い領域では、イテレーションと製品の迅速な適応が優先事項となります。望ましい製品体験の実装に現在の成熟度レベルに必要な時間より長くかかる場合、プロダクトマネージャーはプロダクトデザイナーやエンジニアリングマネージャーと協力してイテレーション計画をスコープし、時間をかけて段階的に体験が提供されるようにし、品質を保ちながら迅速に価値を提供することをお勧めします。

採用が多い領域、または成熟度が高い領域については、製品の方向性とユーザー / 顧客の体験を解決するためのアプローチに同意がない場合、以下のエスカレーションパスを使用することをお勧めします。

チームとして、提案が最適な顧客体験を達成するための市場投入時間を超える場合があります。これは潜在的なビジネス成果に影響するため、プロダクトマネージャーがこの決定の [DRI](/handbook/people-group/directly-responsible-individuals/) となります。

DRI として、他のチームメンバーからのインプットを考慮し、彼らの経験と判断を信頼すべきタイミングを知ることが重要です。[opportunity canvas lite](/handbook/product/product-processes/#opportunity-canvas-lite) の使用をお勧めします。PM は、プロダクトデザイナーやエンジニアリングマネージャーからのインプットでキャンバスライトを編集することが期待されます。PM はその後、必要に応じてプロダクトデザイナーとエンジニアリングからのインプットを比較検討して決定を下します。PM は次に、待つことのコスト、より少ない磨きで早期に出荷すること、およびこの決定の一部として、より小さなイテレーションが存在しない理由を明確にして、決定を共有すべきです。

磨きが少なく、ユーザー体験が劣っている、または何らかの形でこの UI が目指す水準に達していないものを構築する決定がなされた場合、チームは次回のマイルストーンで対処する [Deferred UX](/handbook/product/ux/performance-indicators/#deferred-ux) Issue のフォローアップを生成すべきです。

クワッドメンバーが PM DRI の決定に懸念を抱き、強く同意できない場合、その人は私たちの [異議があってもコミット (disagree, commit, and disagree) の価値観](/handbook/values/#disagree-and-commit) を実践し、上位の経営層を意思決定に巻き込むために [エスカレーション](/handbook/leadership/#effective-escalations) を開始すべきです。

結果は、ビジネスとユーザーにとって最も重要な側面です。ビジネスへの財務的損害、顧客満足度や価値の低下、または法的トラブルを引き起こす可能性のあるリスクが認識される場合、チームメイトは製品決定について別の視点を求める権限があります。Product 部門内では、まず意見の相違が発生している層の直接上のマネジメント層にインプットを求めてエスカレーションし、さらに PLT、最終的に Chief Product Officer にエスカレーションすることをお勧めします。

#### チームにデザイナーがいない場合

プロダクトデザイナーの割り当ては team.yml ファイルにリストされています。残念ながら、現在すべてのグループに専任のプロダクトデザイナーを割り当てることはできません。代わりに、プロダクトデザイナーはビジネス優先度の高い領域に割り当てられ、年間を通じてその優先事項に集中的なサポートを提供し続けます。リソースが限られているため、デザイナーのいないグループの MR に対する UX レビューも行うことができません。

グループにデザイナーがリストされていない場合、そのチームは一般的に自身の製品エリアのデザインニーズに自己完結的に責任を持つことが期待されます。より複雑な状況については、[UX チームからのサポートをリクエスト](https://gitlab.com/gitlab-com/Product/-/work_items/new?description_template=UX-Support-Request) できます。

意思決定の助けとなる役立つリソースとして、[Pajamas Design System](https://design.gitlab.com/)、[UX Principles](https://design.gitlab.com/get-started/principles/)、[Product Principles](/handbook/product/product-principles/) があります。プロダクトデザインは、サポートされていないグループのために複雑な提案された設計ソリューションをレビューしたり、設計ソリューションを提供したりするキャパシティを持っていません。

質問がある場合やサポートが必要な場合は、以下の方法で対応できます。

- デザインを作成する必要のある PM は、[アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を作成して Figma へのアクセスをリクエストできます。**注:** Figma 内でアップグレードをリクエストして Editor シートを付与することはできません。アクセスリクエスト Issue が必要です。
- [Pajamas ガイドライン](https://design.gitlab.com/) を確認して従ってください。
- 小さなデザインの質問がある場合、または Pajamas のガイダンスが明確でない場合は、`#ux` または `#ux_coworking` Slack チャンネルで連絡してください。
- デザインレビューが必要なコミュニティコントリビューション MR がある場合は、[デザイナーのいないグループのための MR レビュー](/handbook/product/ux/product-designer/mr-reviews/#stage-group-mrs) のプロセスに従ってください。

### 社外のプロダクトマネジメントとの連携

PM が GitLab 外のグループと連携する方法のプラクティスをいくつか示します。

#### コミュニティ貢献者との連携

プロダクトマネージャーは、自分のグループの [製品方向](/handbook/product/product-processes/#managing-your-product-direction) の DRI であり、これにはデュアルフライホイールというより大きな会社戦略の達成も含まれます。
[コミュニティ貢献](https://about.gitlab.com/community/contribute/) は製品方向の重要な部分です。
貢献をサポートするため、プロダクトマネージャーは以下のガイドラインを考慮できます。

1. コミュニティ貢献を 4 営業日以内にレビューおよび回答することを目指してください - [review response SLO](/handbook/engineering/workflow/code-review/#review-response-slo) を参照。
   明確に定義された `~direction` または `%Backlog` Issue への貢献が優先されます。
1. ユーザー体験に影響を与える貢献については、[contribution guidelines](https://about.gitlab.com/community/contribute/) に従い、
   グループのプロダクトデザイナーが MR をレビューしフィードバックを提供すべきです。
1. 私たちが製品に望まない機能 (製品方向との衝突、貧弱な UX、メンテナンスの懸念、またはセキュリティ上の理由など)
   の貢献については、プロダクトマネージャーが MR をレビューし、コントリビューターが GitLab がこの機能を受け入れないことを
   理解できるようにフィードバックを提供すべきです。
1. 以前に関与していない場合、MR をマージする前に MR をレビューしているグループの PM をタグ付けしてください。
   これは PM が自分の領域に影響を与える変更について情報を得続けるためであり、
   必要に応じてリリース投稿を通じて変更を伝えることができるようにするためです。
   コントリビューターとコミュニケーションを取る際には、CREDIT バリューを実践することを忘れないでください。
