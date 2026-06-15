---
title: GitLab プロダクトマネジメント
upstream_path: /handbook/product/product-management/
upstream_sha: d5d611a2a400e4ac2527f89559e7ae9a013a9b21
translated_at: "2026-06-15T13:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-15T07:58:19-05:00"
---

このドキュメントでは、プロダクトマネジメントの業務内容、関わる場所、タイミング、そしてプロダクトマネジメントチームとの関わり方について説明します。

## プロダクトマネジメントの仕事とは

GitLab では、PM は自分の専門領域をリードします。つまり、Create PM が Create グループの取り組み内容、対象リリースを決定し、それが私たちのゴールを前進させるかを確認します。これにはバグ、機能、アーキテクチャ上の変更も含まれます。

PM が入ってくるすべてのバグや Issue を逐一さばくことは期待できないため、さまざまなステークホルダーからのインプットに大きく依存することになります。これを実現するには、PM とステークホルダーの双方が積極的に協力し合う必要があります。これは双方向の取り組みです。

一般論として、製品に対して何かを起こす必要があったり、特定の変更のためにエンジニアリングスタッフが必要な場合は、PM に相談します。GitLab 流に Issue を作成し、そこで PM にメンションするのが望ましいです。

同じように、PM は特定の変更についてステークホルダーからフィードバックを求める必要があります。ある変更が GitLab.com とその保守に影響する場合、PM はその変更のスコープ、設計、意思決定を支援してもらうために、インフラストラクチャエンジニアに積極的に働きかけるべきです。

これらすべてのインプットを比較検討し、優先順位を決定するのは PM の役割です。GitLab のすべてのゴールを念頭に置きながら、この優先順位付けを行う上で最も適任なのは PM であると期待されます。

## プロダクトマネージャーとの関わり方

### プロダクトマネージャーへの連絡先 {#where-to-reach-product-managers}

- **[公開 Issue トラッカー（プロダクト向け）](https://gitlab.com/gitlab-com/Product/issues)**。GitLab のチームメンバーのみに見せるべきトピックには、confidential Issue を使用してください。
- **[チャットチャンネル](https://gitlab.slack.com/archives/product)**。Issue トラッカーに適さないと思われる質問には、`#product` チャットチャンネルを使用してください。

### どのプロダクトマネージャーに連絡すべきか {#which-product-manager-should-i-contact}

どのプロダクトマネージャーがどのカテゴリーを担当しているかは、[Product Categories](/handbook/product/categories/) を参照してください。

### フィードバックの共有方法

一般的に、すべてのプロダクトフィードバックは Issue を通じて提供されるべきです。プロダクトに関する質問、コメント、インプットなどがある場合、*Issue を作成するだけでは不十分なとき* に最初に話すべき相手はプロダクトマネージャーです。

Issue の作成には、優先順位付け、変更、議論が必要なもの、あるいはより注意を払う必要がある機能、バグ、その他の変更が含まれますが、これらに限りません。プロダクトマネージャーは、何らかの意思決定を行ったり伝えたりする際にステークホルダーへ働きかけます。優れたソフトウェアを確実に作り上げながら優先順位のバランスを取るというプレッシャーはプロダクトマネージャーにかかっており、これを達成するために彼らは得られる限りのインプットを必要としています。有償機能はそれぞれの担当 PM の管轄であり、特定の 1 人の PM の管轄ではありません。たとえば、[Service Desk](https://docs.gitlab.com/user/project/service_desk/) は [Plan PM](/handbook/product/categories/features/#project-management) の管轄です。

すべてのフィードバックは [GitLab Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) に従う必要があります。これに従わない場合、Issue またはコメントは削除されます。

#### 顧客からの機能リクエスト {#customer-feature-requests}

顧客から、まだ存在しない機能のリクエストがあった場合は、[gitlab-org issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues) における [Issue を作成するプロセス](https://docs.gitlab.com/user/project/issues/create_issues/) を参照し、[Feature Proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20Proposal%20-%20lean) テンプレートを選択して、手順に従い、できる限り多くの情報を提供してください。Issue を作成したら、わかる範囲で適切な [プロダクトステージおよび/またはグループ](/handbook/product/categories/) のラベル（例: `~"devops::plan"`）を必ず追加し、適切なプロダクトマネージャーをタグ付けしたコメントを追加してください。Issue が既に存在する場合は、その Issue に顧客情報とユースケースを添えてコメントしてください。

Issue でフィードバックを共有する際（例:「顧客 X がこれを望んでいる」）は、必ず以下を行ってください。

- ソースへのリンクを貼る。通常、これは Salesforce または Zendesk へのリンクです
  - 有償顧客で ARR を関連付けたい場合は、Salesforce Account URL を使用する
  - 見込み客や重要な成長機会に関連する場合は、Salesforce Opportunity URL を使用する
- コンテキストを提供する。顧客がこの機能を望んでいる場合は、*なぜ* それに関心があるのかを含める。わからない場合は、必ず確認するか、該当する PM を顧客と連絡が取れるようにする
- その他の有用なコンテキストを含める（例: この顧客がどのようなソフトウェアを構築しているか、その機能をどのように使用するか）
- [プロダクトマネージャー](/handbook/product/categories/) にメンションする
  - 不明な点があれば何でも気軽に尋ねてください（例: Issue のステータスが不明、など）

顧客が単に Issue 番号を挙げたり、たとえば「X との連携」と言ったりするだけでは、十分な情報とは言えません。Issue を作成したりコメントしたりする前に、必ず以下を尋ねてください。

- なぜこれが欲しいのですか?
- どのような問題を解決しようとしていますか?
- この Issue／連携のどの部分があなたにとって重要で、それはなぜですか?
- 回避策を試しましたか?
- これはあなたにとってどれくらい重要ですか?

これらすべてを解明する責任はプロダクトマネージャーにありますが、彼らより一歩先んじておくと物事がスピードアップします。

顧客が [Advisory and Executive customer programs](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#executive-advisory-board-eab-program) に参加している場合、CSM はそのフィードバックを追跡するために Issue へ関連するラベルを追加すべきです。

これを容易にするため、以下のフィードバックテンプレートの使用を強く推奨します。

#### フィードバックテンプレート {#feedback-template}

Issue で顧客フィードバックを提供する際の推奨方法は、[Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/#quick-start) を使った **内部コメント** を使用することです。内部コメントは顧客のプライバシーを保護し、機密性の高いビジネス情報が公に見えてしまうのを防ぎます。

**公開コメントが必要な場合**（顧客がコメントを見ることを期待しているサポートワークフローなど）は、以下のテンプレートを使用してください。漏れがないようこれをコピー＆ペーストするか、再利用のために [コメントテンプレートを作成](https://docs.gitlab.com/user/profile/comment_templates/#create-comment-templates) できます。バグの Issue では必要に応じてテンプレートを変更してください。

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

これらのダッシュボードは、特定の Issue が特定の顧客にとってどれだけ重要かという相対的な重要度を示しています。これらはいつでも更新でき、24 時間以内にモデルへ反映されます。

##### 良い例

> 1000 名を超えるユーザーを抱える顧客が、スプリントプランニングをより効果的に行えるようにこの機能に関心があると述べました。彼らが解決しようとしている問題は、現在の実装では X ができず、Y のためにそれを行う必要があるという点です。今日はソフトウェア X を使ってこれを行っていますが、私たちがこれを実現すれば GitLab に移行できるとのことです。
>
> @productmanager この Issue には現在マイルストーンが設定されていませんが、近いうちに対応する予定はありますか?

##### 悪い例

> salesforce.com/blabla

#### 顧客とのコラボレーションプロジェクト

Customer Success Manager が割り当てられている顧客は通常、GitLab.com 上に [コラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) を持っています。これは情報共有、顧客詳細のドキュメント化、そして GitLab チームと顧客チームの双方がアクセスできる場所での Issue 追跡に使用されます。

一般的に、CSM はメインの Issue を維持したり、[CS-Tool - TAM issue tracker](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/tam-issue-tracking) を有効にしたりします。これには、顧客が関心を持つすべての機能リクエストが、公開 GitLab Issue へのリンクとともにリストアップされます。

顧客がある機能に関心を示した場合、CSM はそれを公開 GitLab Issue に記録するとともに、[顧客のコラボレーションプロジェクト](/handbook/customer-success/csm/customer-collaboration-project/) のメイン機能追跡 Issue にエントリとして追加すべきです。

機能追跡 Issue は、顧客のプロダクトニーズに関する唯一の信頼できる情報源として、優先度（後述）とマイルストーンを更新しながら定期的に維持されるべきです。また、過去に提供した機能リクエストのメトリクスをレビューするためにも使用できます。

特定の機能リクエストについて顧客と多くの議論がある場合は、それに関する Issue を顧客の [コラボレーションプロジェクト](/handbook/customer-success/csm/engagement/) 上に作成し、その Issue をメインの GitLab Issue 上で関連 Issue としてリストアップしてください。これは、顧客が関心を持つメインのプロダクト Issue のもう 1 つのシグナルであり、また顧客や社内の GitLab チームメンバーと彼らのニーズや懸念について議論できるようにします。

#### 機能リクエストをエスカレーションするには

Issue を作成／コメントするプロセスに従ったものの反応が得られなかった場合は、[必要な情報がすべて Issue に含まれているか](/handbook/product/product-management/#feedback-template) を確認してください。Issue 内およびプロダクトステージの Slack チャンネル（Issue へのリンクを貼る）で再度プロダクトマネージャーにフォローアップし、追加の注目とチームメンバーの関与を得てください。

顧客が、作業停止を引き起こすバグや、期限を守るために必要な機能など、彼らにとって優先度の高い Issue を特定した場合は、上記の顧客機能リクエストの記録・追跡の手順に従い、その顧客の関心を GitLab Issue に追加し、コラボレーションプロジェクトの Issue に含めてください。加えて、[該当グループを担当する](/handbook/product/product-management/#which-product-manager-should-i-contact) [プロダクトマネージャーに連絡](/handbook/product/product-management/#where-to-reach-product-managers) し、直接議論してください。高優先度の一般的な目安は、顧客が特定の機能をできるだけ早く必要としていることです。

**クリティカル優先度のリクエスト** は極めてまれですが、発生した場合は、CSM がリクエストを取りまとめた上で、プロダクトとエンジニアリングの双方で合意されます。顧客が特定の機能なしでは GitLab を使い続けられない場合、CSM は [アカウントのトリアージ](/handbook/customer-success/csm/health-score-triage/) を開始し、Issue における顧客の関心を示すプロセスに従った上で、プロダクトおよびエンジニアリングチームとの定期的なチェックインを設定し、機能のステータス、期待値、潜在的な代替案を評価してください。プロダクトおよびエンジニアリングのプロセスについては、[クリティカルな顧客マージリクエスト](https://docs.gitlab.com/development/code_review/#customer-critical-merge-requests) の詳細を参照してください。

### なぜプロダクトチームは、解決策ではなく問題について尋ねることを好むのか

[この UX デザインに関する記事](https://uxdesign.cc/wanting-a-faster-horse-doesnt-mean-the-customer-is-wrong-90b1bed8b7e) の次の部分が、これをうまくまとめています。

適切なタイミングで適切な顧客の声を聞くことは素晴らしいスタートですが、彼らのフィードバックやリクエストを正しく解釈できているかも確認する必要があります。その理由は、一般的に顧客は「違うもの」ではなく「より良いもの」を求めるからです。**彼らは既存の解決策を通して自分の問題を解釈します**。顧客が、どんな新しい製品を作るべきかをあなたに教えてくれることはまずありません（それはあなたの会社の仕事です!）が、その製品が解決すべき問題は教えてくれます。

これを行うには、機能リクエストの背後にある根本的な「なぜ」にたどり着く必要があります。解決すべき基本的な問題は何かを突き止め、その上でその問題を根本的により良い方法（たとえば 10 倍速く、簡単に、安く）で解決する方法を考えます。

このコンセプトは、Ford Motor Company の創業者 Henry Ford の言葉（おそらく誤って帰属されたもの）で最もよく表現されています。「もし私が人々に何が欲しいかを尋ねていたら、彼らはもっと速い馬が欲しいと答えただろう。」

> 顧客がもっと速い馬を求めるとき、あなたはなぜかを尋ねるべきです。すると決まって次のような答えが返ってくるでしょう。
> 家から職場までの通勤時間を短縮したい
> 自分の商品をもっと多くの都市で売れるようにしたい
> Kentucky Derby で勝ちたい
> **解決すべき基本的な問題（もっと速い馬を含め多くの解決策がある）を理解した今、それを根本的により良い方法で解決する方法を考えるのがあなたの仕事です** — たとえば、10 倍速い馬とはどのようなものか? そして、それに対する潜在的な解決策の 1 つが、明らかに車なのです。

### フィードバックの例

#### 例: 顧客が機能リクエストを持っている

顧客から機能リクエストを聞き、そのアカウントに CSM が割り当てられていない場合は、通常の手順に従ってください。Issue を作成し、正しくラベルを付けます。たとえば、顧客が Issues への機能強化をリクエストしたとしましょう。上記を読めば、これに `Discussion` ラベルを付ける必要があることがわかり、必要に応じてこれを迅速化するために Plan PM にメンションしたり連絡したりできます。

有償ティアの機能リクエストを求める組織の営業担当者は、その機能リクエストと望ましい成果をさらに深掘りするための会話を設定するために、プロダクトマネージャーと協力するものとします。プロセスは次のとおりです。

- 営業がプロダクトマネージャー、顧客、自身を交えた 1 時間の Zoom ミーティングをスケジュールする。顧客の許可があれば通話を録画する。
- プロダクトマネージャーは、以下に加えて回答を得たい追加の質問を準備する。
  - 現在 GitLab のどのバージョンを使用していますか? CE／Premium／Ultimate?
  - 現在どのようにソースコード管理を行っていますか? GitLab のマージリクエスト、それとも別のツール? CI/CD はどうですか?
  - 現在どのように Issue 管理を行っていますか? HP ALM をどのように使用していますか? Agile／Kanban? スプリント／イテレーションはどのような感じですか? 1 週間? 1 ヶ月? 2 ヶ月?
  - Issue 管理とソースコード管理の連携はどのようなものですか?
  - チームはどのように複数のリポジトリを管理していますか? チームは通常、一度に 1 つのリポジトリで作業しますか? それとも同時に複数のリポジトリで作業しますか?
- 営業はミーティング前に顧客へ質問を送る。
- ミーティングが Salesforce.com に作成される。
- 営業は、顧客との過去の通話のメモ用に Google ドキュメントを作成する。Google ドキュメントはプロダクトマネージャーと営業マネージャーに共有される。
- 営業とプロダクトマネージャーは、これまでにわかっている顧客情報を共有するための 15 分間の事前ミーティングをスケジュールし、既に答えのわかっている質問をして時間を無駄にしないようにする。この事前ミーティングのメモは Google ドキュメントに追加される。
- 営業は、アカウントオブジェクトの下にメモとして Google ドキュメントへのリンクを追加する。

有償顧客が特定の機能を開発するために費用を支払う意思がある場合でも、私たちは上記のとおり対応すべきです。彼らがそれに費用を払う意思があるのは素晴らしいことです。それは本当にその機能を必要としていることを意味します。しかし、私たちは GitLab のカスタムバージョンを作ることはしません。gitlab.com でさえ GitLab Ultimate で稼働しており、私たちは技術的な複雑さを最小限に抑えて次に追いかける機能を判断することで、より速く動けるのです。これはトレードオフです。とはいえ、これは「No」が常に「No」のままであるという意味ではありません。私たちは改善に対して常にオープンな姿勢を保ちます。

#### 例: 顧客が GitLab のセットアップに関する具体的なアドバイスを求めている

たとえば、SaaS ライセンスでセルフマネージドの Runner を構成するためのサポートが必要な場合です。

特定の顧客についてサポートが必要で、Customer Success Manager がリクエストされている内容を構成できない場合、または GitLab の使用に関する非常に具体的なガイドラインの提供を求められている場合は、[Product Support Request](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Support-Request.md) を使って Issue を作成し、その Issue で提案されている手順に従うことをお勧めします。

[顧客の成果](/handbook/values/#results) と [効率性](/handbook/values/#efficiency) に焦点を当て続けるため、Issue に 5 営業日後の期限を設定し、トリアージのためにそのセクションの Product Leader に Issue を割り当てることを推奨します。

#### 例: CI のバグに関するサポートリクエストが多数寄せられている

これまでと同様に、Issue が作成されていることを確認し、これが問題になりつつあり修正が必要であることを PM に主張してください。PM は、これが修正されるか、何らかの方法で解決されるようにします。

#### 例: 新しいファイルの作成が遅いと思う

GitLab のすべては高速であるべきで、ファイルの作成はリポジトリの管轄なので、Issue を作成し、それにメンションして PM に認識してもらいます。

それを受けて PM は、これが一般的な問題なのか GitLab.com に固有の問題なのかを、インフラストラクチャやその他のチームと協力して調査し、必要な変更を今後のリリースに向けてスケジュールします。

### Tableau

プロダクトチームは、Issue とそれらの Issue に対する顧客の関心を集約するための [Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) を維持しています。情報は、Salesforce の顧客アカウントリンクをスキャンすることで [GitLab Issue](https://gitlab.com/gitlab-org/gitlab/issues) から自動的に収集されます。同じダッシュボードは Sales と CS でも使用できます。

Tableau ページの自動化は、Salesforce リンクが追加されたことを検知し、Total Account Value やシートライセンスなどの顧客の Salesforce データを使ってそれらをページに追加します。Salesforce リンクは適切な認証情報を持つ GitLab 従業員のみがアクセスできるため、これは公開 Issue 上での顧客のプライバシーも守ります。

### バグの報告

顧客がバグを報告したい場合は、Issue における [顧客の関心を表現する方法の例](/handbook/product/product-management/#customer-feature-requests) を参照し、[Bug](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug) テンプレートを使用して、上記と同じ手順に従ってください。

中優先度のバグがプロダクトマネジメントの [トリアージボード](https://gitlab.com/groups/gitlab-org/-/boards/1075672?&label_name[]=type::bug&label_name%5B%5D=customer) 上で古くなった場合は、以下の手順を参照できます。もう 1 つの役立つビューとして [triage report ラベル](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&search=triage+report) があります。

機能リクエストと同様に、バグの記録・追跡には同じ手順に従ってください。ただし、可能な限り再現手順と回避策を含めるようにしてください。

## プロダクトと CSM のコラボレーション

ビジネスが顧客の関心、フィードバック、感情を把握できるようにするため、プロダクトチームと CSM チームが緊密に協力し合うことは不可欠です。

### プロダクトによる顧客フィードバックの収集

プロダクトチームに所属していて顧客からフィードバックを求める場合は、Customer Success Management 組織に相談すべきです。CSM はあらゆる地域、ティア、ユースケース、業界の顧客と直接の接点を持ち、定期的にコミュニケーションを取っているからです。

顧客とのミーティングをリクエストするには、[CSM プロジェクト](https://gitlab.com/gitlab-com/customer-success/csm) で Issue を作成し、[Product Engagement](https://gitlab.com/gitlab-com/customer-success/csm/-/issues/new?issuable_template=Product%20Engagement) Issue テンプレートを使用して、適切なフィールドを記入してください。フィードバックを得たい特定の顧客がいる場合は、Issue にその顧客名を記載し、わかれば割り当てられた CSM をタグ付けしてください（アクセス権があれば Salesforce でこの情報を見つけられます。なければ他の誰かが代わりに確認します）。

CSM チームは新しい Issue が作成されるたびに Slack で通知を受け取り、対応可能になったら具体的な顧客とともに Issue で返信します。1 週間以内に返信がない場合（CSM が顧客と確認する時間を考慮して）は、気軽に Issue で <code>[@timtams](https://gitlab.com/timtams)</code> グループにメンションしてください。

### CSM による顧客フィードバックの共有

CSM の責任の 1 つは、顧客からの需要を示し、顧客のユースケースや経験を伝えることで機能の優先順位付けを助けるべく、プロダクトチームと協力することです。

以下に説明するプロセスに従うことで、機能に対する顧客の関心が適切にプロダクトと共有され、プロダクトが適切なアクションを取れるようになります。ドキュメント化されたプロセスに従うことで、私たちは効率を高め、やり取りを減らし、より良い製品を作り、顧客に対してより速く回答や解決を提供できます。

## プロダクトの顧客通話への参加

フィードバックやロードマップなどを議論するために、プロダクトと顧客が一緒に通話に参加することは、双方にとって非常に有益です。効率的で生産的なミーティングにするため、以下の手順を踏んでください。

### 顧客のコンテキストを収集する

プロダクト通話に先立ち、期待値とその背景について顧客と会話してください。

該当する場合、以下の質問をしてください。

- どの機能や機能性について議論したいですか?
- それらの機能や機能性にどれくらい精通していますか?
- 既にその機能のデモを受けたことがありますか、それとも今回が初めての接触ですか?
- その機能を本番環境、POC で実際に使用していますか、それともまだ自分たちで試していませんか?
- 既に存在する機能性の概要に関心がありますか、それとも将来のロードマップの機能性に関心がありますか?
- この通話における目標は何ですか?

### 適切な PM に連絡する

通話に PM の参加を求める際は、その [グループまたはカテゴリー](/handbook/product/categories/#devops-stages) の Slack チャンネルを通じて依頼するのがベストプラクティスです。ダイレクトメッセージは、その通話に適した人が DM に含まれていない場合に他の PM を巻き込むのが難しく、また議論される可能性のあるトピックの可視性も制限されるため、問題があります。連絡すべき適切なグループがわからない場合は、一般的な [#product](https://gitlab.slack.com/archives/C0NFPSFA8) チャンネルで尋ねることができます。

PM に連絡する前に、[PM Customer Meeting Briefing Document](https://docs.google.com/document/d/1TPJwjJTOrlrtuJ_srs631ndL6dkiwl9yIi3PPtgStos/edit#heading=h.sujaka5bd7jl) に記入し、依頼とともに PM へ送ってください。PM はそのドキュメントをレビューし、ミーティングに参加できるかどうかを知らせます。PM は、コンテキストドキュメントを受け取っていない場合や、それが部分的にしか記入されていない場合、ミーティングのリクエストを断ることがあります。このコンテキストは、ミーティングの少なくとも 3 営業日前に依頼とともに送ることを推奨します。PM はドキュメントをレビューし、必要に応じてさらなる明確化を求めるフィードバックを提供します。

加えて、通話がスケジュールされたら、顧客とプロダクトチームの双方に共有される詳細なアジェンダを、通話の少なくとも 24 時間前までに必ず用意してください。

### EBR の準備

CSM は顧客と定期的に [Executive Business Reviews](/handbook/customer-success/csm/ebr/) を開催しており、しばしばプロダクトマネージャーの関与を求めます。CSM がプロダクトの関与を求める場合、日付、時間、希望するトピックを添えて（グループの Slack チャンネルで）PM に連絡します。

CSM は EBR の準備に PM を巻き込み、コンテンツ、タイミング、望ましい成果についての期待値が完全に確立されるよう PM と協力します。

EBR は通常かなり長く（60 〜 90 分）、プロダクトのプレゼンテーションは EBR 全体のうちのほんの一部（15 〜 20 分）にすぎないため、PM は自分が話すときだけ参加しても構いません。もちろん、通話全体に参加・関与したい場合は大歓迎です。顧客は EBR を通じてプロダクトのフィードバックやリクエストを共有することが多いからです。

## プロダクトサポートのリクエスト

顧客のライフサイクルを通じて、顧客対応チーム（Support、Account Executive、CSM、Solutions Architect、Professional Services、Renewals Manager など）はプロダクトマネージャーの支援を必要とすることがあります。これには、私たちの方向性に関する詳細な議論や、組織内の特定のユースケースや機能のギャップへの対処方法が含まれます。

これらのリクエストを迅速にトリアージし、簡単にスケジュールし、後で追跡できるようにするため、Issue ベースの標準化されたリクエストプロセスがあります。

### プロダクトへのサポートのリクエスト

緊急性が高く影響の大きいリクエストの場合は、`#product` Slack チャンネルに Issue へのリンクを貼り付け、テンプレートで推奨される PM に `@mention` してください。

### サポートリクエストへの対応

サポートリクエストが作成されると、リクエストを分類するためにラベルが自動的に割り当てられます。

リクエストをトリアージする際、特に重要なフィールドが 3 つあります。

- Priority: リクエストの緊急度。`urgent` のリクエストは高い優先度で扱うべきです
- Impact: [total contract value (TCV)](/handbook/sales/sales-term-glossary/) に基づく、ビジネスへの潜在的な影響
- Stage: リクエストが関連するステージ

すべてのプロダクトマネージャーは、それぞれのステージのラベル通知を受け取れるよう設定しておくべきです。

1. [プロダクトプロジェクトのラベル](https://gitlab.com/gitlab-com/Product/-/labels) を一覧表示する
2. 関連するステージのラベルをサブスクライブする

## 他チームと関わるプロダクトマネージャーのためのガイド

### プロダクトグループのカウンターパート

GitLab は独自の方法で設計・開発されています。

私たちのバリューである [Efficiency](/handbook/values/#efficiency) と一貫して、製品は Product、UX、Development の [directly responsible individuals](/handbook/people-group/directly-responsible-individuals/) が協力して開発します。

| プロダクトマネージャー | エンジニアリングマネージャー | UXer |
| :--------------: | :------------------: | :---: |
| [マイルストーンの優先順位](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) を設定し、Engineering が取り組む機能を定義する | Definition of Done を所有する。何が Product にマージされるかを決定する。保守作業の優先順位を付ける。エンジニアはテスト戦略や要件を含め、品質をエンドツーエンドで所有する | プロダクトマネジメントの優先順位付けを助けるため、大小の戦略的な UX ニーズを積極的に特定する |

GitLab では、私たちはセルフマネージドの顧客と SaaS ホスト型の顧客の両方のために製品を開発しています。DRI がいる一方で、Engineering、Quality、UX、Product、Security、Infrastructure を含む多くのステークホルダーがインプットを持つべきであることを認識しています。たとえば、Security チームは、安全な SaaS システムを運用するために何が必要かについて、より深いコンテキストを持っていることがよくあります。同様に、Infrastructure チームは、トイルを減らし、効率的で信頼性が高く、パフォーマンスに優れ、スケーラブルなシステムを実現するために製品に何を組み込むべきかについての洞察を持っています。

私たちはこれを [Product Group](/handbook/company/structure/#product-groups) モデルと呼んでいます。これはリーダーシップレベルにおける古典的なクワッドの概念を拡張したもので、現在は Development、Quality、User Experience、Infrastructure、Product、Security で構成されています。

Product Group は、製品全体の [技術的負債](/handbook/engineering/workflow/#technical-debt) を含む [グローバル最適化](/handbook/values/#efficiency-for-the-right-group) を促進するために使用できます。

### 社内のプロダクトマネジメントと協力する

PM が協力するカウンターパートは数多くいます。組織横断で協力するためのベストプラクティスをいくつか紹介します。

#### Finance Business Partner と協力する

場合によっては、プロダクトマネージャーは予算に対して費用が発生する項目を持つことがあります。これらは、調査のための外部ベンダー、開発スタッフのための業務委託、インフラストラクチャに関連することがあります。CProdO は製品予算の DRI であり、予算支出に関するすべての変更やリクエストは CProdO を通じて承認される必要があります。

将来を見据えた新しい予算項目をリクエストするには、[Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) を使って Product プロジェクトで Issue を作成し、それを CProdO とマネージャーに割り当ててください。予算は年次および四半期ごとに計画されるため、予算計画のタイミングに依存して承認がすぐに得られないことがあります。CProdO は、その予算リクエストを Finance との次の予算計画セッションに持ち込みます。

既存項目の想定支出の増額について承認をリクエストするには、[Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) を使って Product プロジェクトで Issue を作成し、CProdO に割り当て、マネージャーをタグ付けしてください。CProdO はそれをレビューし、予算変更を承認または却下します。その後、CProdO は予測更新のために変更を Finance Business Partner に通知します。

### Content Marketing と協力する

コンテンツマーケターとプロダクトマネージャーは、ブログを使ってプロダクトの変更を伝えたり、思慮深い変更で市場を惹きつけたりする際に協力し合うことができます。機能のためのブログ記事を作成するために、いつ、どのように Content Marketing と関わり始めるかのガイドラインについては、[ブログ記事のハンドブックページ](/handbook/marketing/blog/) を参照してください。

### Product Marketing（PMM）と協力する

プロダクトマーケターとマネージャーは一心同体であるべきです。ドキュメントのない機能が出荷されたとみなされるべきでないのと同様に、私たちが積極的に語っていない GitLab のメリットは、存在しないも同然です。

プロダクトマーケターは、何が重要で影響が大きいかを導いてもらうためにプロダクトマネージャーに頼っています。一般的に、あなたは以下を行うべきです。

- エピックやハイレベルな Issue では、常に [適切な PMM](/handbook/product/categories/) にメンションする
- 自分のプロダクト領域に対応する PMM と定期的にミーティング／非同期で会話する
- 新機能を検討する際は、積極的にインプットを求める
- 重要な変更の作業には、できるだけ早く PMM を巻き込む

{{% include "includes/marketing/usecase-competitive-content.md" %}}

### マーケティングと協力する

より大きな機能や新しいケイパビリティのリリースに取り組む際は、プロダクトマネージャーが go to market プランのさまざまな側面を考慮し、戦略的・ロジスティクス的な検討事項について適切なステーブルカウンターパートに情報を伝えたり協力したりすることが重要です。

#### マーケティング資料

PM として、あなたは自分が出荷した変更が GitLab のドキュメントやマーケティング資料全体で適切に表現されていることを確認する責任があります。これは、リリース時に [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) が更新され、ドキュメントがマージ・デプロイされ、既存のコンテンツが必要に応じて更新されることを意味します。

これをリリース後に行うことは許容されません。GitLab は非常に複雑であり、機能や機能要素は、顧客に大きな価値を提供するものであっても簡単に見落とされてしまいます（例: GitLab で認証できる多くの方法）。

必要であればマーケティングやテクニカルライティングチームの助けを借りることもできますが、小さな更新は自分で行うことを強く推奨します。これは、何をすべきかを他の誰かに伝えるよりも、時間とオーバーヘッドが少なくて済みます。

##### `features.yml` から読み込むページ

[`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) を最新の状態に保つことは重要です。そのファイルから読み込むさまざまなページ（社内向けおよび社外向け）が数多くあるからです。これには以下が含まれます。

**社外向け**

- [Pricing](https://about.gitlab.com/pricing/)
- [Features](https://about.gitlab.com/features/)
- [Why GitLab Premium?](https://about.gitlab.com/pricing/premium/)
- [Why GitLab Ultimate?](https://about.gitlab.com/pricing/ultimate/)
- [Feature Comparison](https://about.gitlab.com/pricing/feature-comparison/)
- [DevOps Lifecycle](https://about.gitlab.com/stages-devops-lifecycle/)
- [DevOps Tools Landscape](https://about.gitlab.com/why-gitlab/)

**社内向け**

- [SaaS vs. Self-managed](https://about.gitlab.com/features/)
- [Features by tier](https://about.gitlab.com/features/by-paid-tier/)

### User Experience（UX）と協力する

GitLab でチームとして働くための標準は [Product Development Workflow](/handbook/product-development/how-we-work/product-development-flow/) です。プロダクトマネージャーとプロダクトデザイナーは、問題をより深く理解しユーザーニーズを発見するために、戦略的なカウンターパートとして協力すべきです。プロダクトデザイナーとプロダクトマネージャーはペアを組み、ターゲットオーディエンス、特定の機能を使う際に彼らが直面する課題を理解し、それを解決する手助けとなるソリューションを設計します。

User Experience（UX）は、視覚的な機能やインターフェースのデザインだけに関係するものではないことを覚えておくことが重要です。UX は、私たちを解決策へと導く戦略の無形のデザインであり、コードを書く体験、.yml ファイルを扱う体験、API を設計する体験、CLI を扱う体験などにも及びます。それらのfunctionalityはすべて、人間によって読まれ、使われることを意図しています。プロダクトデザイナーをプランニングと開発に巻き込むことは、非常に有益となり得ます。考慮すべきガイドは次のとおりです。人が何かと対話するときは常に、その対話をデザインする機会があるのです。

#### ユーザーワークフローを評価する

GitLab 製品が成熟するにつれて、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/#outcomes-and-activities-7) の「Improve」セクションで述べられているように、フィードバックループの仕組みを通じて重要なワークフローをより使いやすくしなければならないことを私たちは理解しています。私たちは [UX スコアカード](/handbook/product/ux/ux-scorecards/) を、これらのユーザーワークフローをどう改善できるかについての洞察を提供する仕組みとして使用できます。

#### プロダクトの方向性プランとソリューション提案に対立がある場合はどうするか

成熟度の低い領域では、イテレーションと製品の迅速な適応が優先事項です。望ましいプロダクト体験の実装に、現在の成熟度レベルで求められる以上の時間がかかる場合は、プロダクトマネージャーがプロダクトデザイナーおよび/またはエンジニアリングマネージャーと協力してイテレーションプランをスコープし、その体験が時間をかけて段階的に提供され、品質を保ちながら迅速に価値を提供できるようにすることが推奨されます。

採用がより進んでいる、または成熟度がより高い領域では、ユーザー／顧客のためのプロダクトの方向性と体験を解決するアプローチに意見の相違がある場合、以下のエスカレーションパスを使用することを推奨します。

チームとして、提案が最適な顧客体験を実現するための想定市場投入時間を超える場合があります。これは潜在的なビジネス成果に影響するため、プロダクトマネージャーがその意思決定の [DRI](/handbook/people-group/directly-responsible-individuals/) です。

DRI として、他のチームメンバーからのインプットを考慮し、彼らの経験と判断を信頼すべきときを知ることが重要です。[opportunity canvas lite](/handbook/product/product-processes/#opportunity-canvas-lite) の使用が推奨されます。PM は、プロダクトデザイナーおよび/またはエンジニアリングマネージャーからのインプットをもとに canvas lite をまとめることが期待されます。その後 PM は、適切にプロダクトデザイナーとエンジニアリングからのインプットを比較検討した上で意思決定を行います。そして PM は、待つことのコスト、より磨き込まずに早く出荷すること、そしてこの意思決定の一部としてなぜより小さなイテレーションが存在しないのかを明確に説明しながら、その決定を共有すべきです。

磨き込みが足りない、ユーザー体験が劣る、あるいはこの UI が最終的にあるべき水準に達していないものを構築するという決定が下された場合、チームは次回以降のマイルストーンで対処するためのフォローアップ [Deferred UX](/handbook/product/ux/performance-indicators/#deferred-ux) Issue を作成すべきです。

クワッドのメンバーが、PM DRI による決定に依然として懸念を抱き強く反対している場合、そのクワッドメンバーは [escalation](/handbook/leadership/#effective-escalations) を起こして上位の管理層を意思決定に巻き込むことで、私たちの [disagree, commit, and disagree value](/handbook/values/#disagree-and-commit) を実践すべきです。

ビジネスとユーザーにとって最も重要な側面は成果です。ビジネスに財務的な損害を与えたり、顧客満足度や価値を低下させたり、法的トラブルにつながったりする潜在的なリスクが認識される場合、チームメイトはそのプロダクトの意思決定について別の視点を求める権限を持ちます。Product Division 内では、まず意見の相違が起きている場所のすぐ上の管理層にエスカレーションしてインプットを求め、さらに PLT、最終的には Chief Product Officer へとエスカレーションすることを推奨します。

#### チームにデザイナーがいない場合はどうするか

プロダクトデザイナーの割り当ては team.yml ファイルに記載されています。残念ながら、現在すべてのグループに専任のプロダクトデザイナーを割り当てることはできていません。代わりに、プロダクトデザイナーはビジネス優先度が最も高い領域に割り当てられ、年間を通じてそれらの優先事項に集中したサポートを提供し続けます。キャパシティが限られているため、デザイナーのいないグループの MR に対する UX レビューも行えません。

グループにデザイナーが記載されていない場合、そのチームは一般的に、自分のプロダクト領域のデザインニーズに責任を持つ上で自給自足であることが期待されます。より複雑な状況については、[UX チームにサポートをリクエスト](https://gitlab.com/gitlab-com/Product/-/work_items/new?description_template=UX-Support-Request) できます。

意思決定を助ける有用なリソースとして、[Pajamas Design System](https://design.gitlab.com/)、[UX Principles](https://design.gitlab.com/get-started/principles/)、[Product Principles](/handbook/product/product-principles/) があります。プロダクトデザインには、複雑な提案デザインソリューションをレビューしたり、サポート対象外のグループにデザインソリューションを提供したりするキャパシティはありません。

質問やサポートが必要な場合は、以下の方法で行えます。

- デザインを作成する必要がある PM は、[Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) を作成することで Figma へのアクセスをリクエストできます。**注意:** Figma 内でアップグレードをリクエストして Editor シートを付与することはできません。アクセスリクエスト Issue が必要です。
- [Pajamas のガイドライン](https://design.gitlab.com/) をレビューし、それに従う。
- 小さなデザインの質問がある場合や、Pajamas のガイダンスが明確でない場合は、`#g_pajamas-design-system` または `#ux_coworking` Slack チャンネルで連絡してください。
- デザインレビューが必要な Community Contribution MR がある場合は、[MR Reviews for Groups without a Designer](/handbook/product/ux/product-designer/mr-reviews/#stage-group-mrs) のプロセスに従ってください。

### 社外のプロダクトマネジメントと協力する

PM が GitLab の外部のグループとどう協力するかについてのプラクティスをいくつか紹介します。

#### コミュニティコントリビューターと協力する

プロダクトマネージャーは、自分のグループの [プロダクトの方向性](/handbook/product/product-processes/#managing-your-product-direction) の DRI であり、これにはデュアルフライホイールという私たちのより大きな会社戦略を実現することが含まれていなければなりません。[コミュニティコントリビューション](https://about.gitlab.com/community/contribute/) は、プロダクトの方向性の重要な一部です。コントリビューションをサポートするため、プロダクトマネージャーは以下のガイドラインを検討してもよいでしょう。

1. コミュニティコントリビューションには 4 営業日以内にレビューと返信を行うことを目指す。[review response SLO](/handbook/engineering/workflow/code-review/#review-response-slo) を参照。明確に定義された `~direction` または `%Backlog` の Issue に対するコントリビューションが優先されます。
1. ユーザー体験に影響するコントリビューションについては、[コントリビューションガイドライン](https://about.gitlab.com/community/contribute/) に従い、そのグループのプロダクトデザイナーが MR をレビューし、MR にフィードバックを提供すべきです。
1. （プロダクトの方向性との対立、貧弱な UX、保守上の懸念、セキュリティ上の理由などにより）製品に取り入れたくない機能のコントリビューションについては、プロダクトマネージャーが MR をレビューし、MR にフィードバックを提供すべきです。これは、この機能が GitLab に受け入れられないことをコントリビューターが理解できるようにするためです。
1. それ以前に関与していない場合は、MR をマージする前に、その MR をレビューしているグループの PM をタグ付けしてください。これは、PM が自分の領域に影響する変更について情報を得続けられるようにし、必要に応じてリリース記事を通じてその変更を伝えられるようにするためです。コントリビューターとコミュニケーションを取る際は、私たちの CREDIT バリューを実践することを忘れないでください。
