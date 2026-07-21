---
title: "GitLab POWER"
description: "GitLab パートナーのオンボーディングワークフローとイネーブルメントリソース"
upstream_path: /handbook/resellers/partner-enablement/power/
upstream_sha: db1b52fb5e65d37509c3eaaaebfd50dd491e4b36
translated_at: "2026-07-22T06:32:52+09:00"
translator: claude
stale: false
lastmod: "2026-07-21T13:55:38+00:00"
---

このページは、パートナー向けの GitLab イネーブルメントリソースを集めたものです。主な目的は、パートナーのテクニカルプリセールスチームを私たちの [Channel Partner Program](/handbook/resellers/) にオンボーディングすることです。他のセールスプロフェッショナルやサービスエンジニアにとっても、有用な情報が多数含まれています。

新規パートナーの場合は、番号付きの章を順にたどりながら、このページを上から下まで進めてください。[Ecosystem Sales Manager](/job-description-library/sales/partner-account-manager/) と [Ecosystem Solutions Architect](/job-description-library/sales/solutions-architect/#ecosystem-solutions-architect) がその過程でサポートします。

## 1. 一般知識

すべての GitLab パートナーがよく知っておくべきリソースです。

**必要なものを見つける**: 以下のウェブサイトをより速く検索するには、[LLM system prompts](/handbook/resellers/partner-enablement/llm-system-prompts) を使用できます。

### 1.1 公開ウェブサイト

* [**公式ウェブサイト**](https://about.gitlab.com/)

  GitLab の公開ウェブサイトです。技術的でない有用な情報が多く含まれています。

* [**GitLab.com**](https://gitlab.com/)

  GitLab の Software-as-a-Service（SaaS）版です。

* [**公式ドキュメント**](https://docs.gitlab.com/)

  製品としての GitLab のドキュメントです。主に技術的な内容で、ステップバイステップのチュートリアルから複雑なアーキテクチャ図までを扱います。

* [**ハンドブック**](/)

  会社としての GitLab のドキュメントです。製品の背後にある会社の運営方法を説明します。

  最も重要なハンドブックページ:

  * [**GitLab Channel Partner Program**](/handbook/resellers/)

    Partner Program の仕組みに関するすべて。

  * [**Partner Technical Presales Enablement**](/handbook/resellers/partner-enablement/)

    テクニカルプリセールスおよびポストセールスのイネーブルメントリソース集です。この POWER ページから複数回参照します。

  * [**Product sections, stages, groups, and categories**](/handbook/product/categories/)

    GitLab がカバーする各 DevSecOps ステージは、[DevOps stages セクション](/handbook/product/categories/#devops-stages)で説明されているように、製品組織内のエンジニアチームによって表されています。そこでは、誰が何を担当しているかを確認できます。各チームの運営方法を説明するハンドブックページや、各チームが扱う機能のドキュメントへのリンクもあります。

  * [**Architecture Design Documents**](/handbook/engineering/architecture/design-documents/)

    GitLab が開発中または開発を計画している新機能の設計ドキュメント。

### 1.2 Partner Portal

[**Partner Portal**](https://partners.gitlab.com) は GitLab パートナー専用のウェブサイトです。誰でも利用できる上記の公開ウェブサイトとは異なり、パートナーと GitLab チームメンバーのみがアクセスできます。

* [**GitLab Partner Portal Guide**](https://partners.gitlab.com/prm/api/objects/v1/asset/hugkbmggdhtg/_view)

  Partner Portal 自体のユーザードキュメント。

* [**GitLab Partner Program Guide**](https://partners.gitlab.com/prm/api/objects/v1/asset/vtktpfdn20l5/_view)

  [GitLab Channel Program Guide](/handbook/resellers/channel-program-guide/) ハンドブックページの内部版です。公開ハンドブックとは異なり、財務的インセンティブに関する情報が含まれます。

* **Asset Library**

  ここでは、トレーニングアセットや他のパートナー限定資料（PDF ドキュメント、スライドデッキ、ウェブサイトへのリンク）を見つけられます。Asset Library は Portal 左側のメニューから開けます。

  ここのコンテンツの大部分は公開共有できますが、すべてではありません。共有が許可されない場合は、アセットの説明に明示されています。

  **ベストプラクティス:**

  * Portal のスライドデッキを確認するときは、デッキをダウンロードし、Google Slides、Microsoft PowerPoint、または同様のソフトウェアで開いてください。一部のスライドには、Portal では表示されない有用なスピーカーノートが含まれています。

  * パートナーチームはすべてを最新に保つために努力していますが、Portal の一部情報は必然的に古くなります。目安として、6 か月より古いアセットは無視してください。

### 1.3 GitLab University

GitLab の学習プラットフォームです。このページで参照するトレーニングコース、ラーニングパス、認定を提供します。パートナー版を開くには:

1. [Partner Portal](https://partners.gitlab.com/) に移動します。
2. 左側のナビゲーションで **GitLab University** をクリックします。

{{% alert title="重要" color="warning" %}}
常にこの方法で GitLab University にアクセスしてください。パートナーアカウントでサインインし、限定コンテンツと認定試験の割引を含む、パートナー限定版のサイトを開きます。一度この方法でサインインすると、このページの GitLab University への直接リンクもパートナーアカウントで機能します。
{{% /alert %}}

## 2. GitLab を理解する

GitLab とは何か、また市場にある他の DevSecOps ソリューションとどのように比較されるかに関する情報です。

* **GitLab Overview for Partners**

  2024-12-13 に提供された 1 時間のトレーニングセッションのアセットです。
  GitLab についてほとんど知らない可能性がある新規パートナー向けです。プラットフォームの概要を提供し、GitLab を DevSecOps マップ上に位置付け、GitLab の主要な機能と独自の差別化要因を説明します。
  技術系と非技術系の両方のセールスプロフェッショナルが、製品を高レベルで理解するために使用できます。

  * [動画録画](https://partners.gitlab.com/prm/api/objects/v1/asset/f1ieucalmjef/_view)

  * [スライドデッキ](https://partners.gitlab.com/prm/api/objects/v1/asset/jemg8nqkecvc/_view)

* **GitLab Duo Agent Platform for Partners**

  GitLab のエージェント型 AI プラットフォームについて必要なすべての情報は、[GitLab Duo Agent Platform Partner Portal ページ](https://partners.gitlab.com/px/-/gitlab-duo)で確認できます。

  自分自身と顧客の両方をトレーニングするために使用できる複数章のスライドデッキは、そのページで「GitLab Duo Agent Platform for Partners」を検索してください。同じタイトルでデッキの内容を説明する動画もあります。

## 3. GitLab を販売する

GitLab は、開発ツールの競争が激しい市場における複雑な製品です。ここにあるリソースは、販売を成功させるのに役立ちます。

* **GitLab Sales Professional Accreditation**

  パートナー版の [GitLab University](#13-gitlab-university) を開き、[Professional Sales Accreditation for Partners コース](https://university.gitlab.com/learn/course/professional-sales-accreditation-for-partners)を開始してください。

* [**GitLab Value Framework**](https://partners.gitlab.com/prm/api/objects/v1/asset/cryafg7tweuz/_view)

  このドキュメントはセールス会話を支援し、顧客や見込み客に GitLab をポジショニングするのに役立ちます。上記の認定で得た知識を発展させる、最適な次のステップです。

  これは GitLab 自身のセールスチームが日々の業務で使用するものと同じドキュメントです。情報は GitLab のリーダー、セールス、マーケティング、製品チームから提供されています。顧客とフォーカスグループによる検証を受け、バリューに基づくメッセージングを、現在の市場トレンド（AI、Security & Compliance、Value Stream Management など）および顧客の優先事項と一致させています。

  GitLab は多くの製品カテゴリで競争しているため、セールス会話は機能ごとの比較に陥って脱線しやすくなります。このトピックとディスカバリー質問のフレームワークにより、会話を価値とビジネスアウトカムを中心に構成できます。会話をよりインパクトのあるものにするには、戦略的な製品・マーケティングメッセージを使用し、顧客の要件を GitLab のソリューションおよび独自の差別化要因に結び付けてください。

  機密性が高いため、このドキュメントはダウンロードできず、Partner Portal での閲覧のみ可能です。

* [**GitLab Platform Overview Partner Portal page**](https://partners.gitlab.com/px/-/gitlab-platform-overview)

  GitLab のプラットフォームをより深く理解するために使用します。支援に使えるリソース（スライドデッキ、ワンページャー、動画など）を見つけてください。

* [**GitLab Duo Agent Platform Partner Portal page**](https://partners.gitlab.com/px/-/gitlab-duo)

  上のページと同じですが、GitLab Duo Agent Platform に焦点を当てています。

* [**カスタマーストーリー**](https://about.gitlab.com/customers/)

  実際のカスタマーストーリーで GitLab の利点に関する主張を裏付けましょう。これらはすべて公開され、顧客と共有できます。各ストーリーには、顧客が GitLab を導入することで改善したメトリクスが含まれています。

* [**料金ページ**](https://about.gitlab.com/pricing/)

  顧客向けの公開料金ページです。すべての SKU を説明し、詳細な機能比較を含みます。
  パートナー限定のインセンティブについては、[GitLab Partner Program Guide](https://partners.gitlab.com/prm/api/objects/v1/asset/vtktpfdn20l5/_view) を参照してください。
  パートナー限定の料金については、[GitLab Channel Price Book](https://partners.gitlab.com/px/digital-asset-management/admin/media-library?renderMode=Collection&collectionId=49441) を参照してください。

* [**Licensing and subscription FAQ**](https://about.gitlab.com/pricing/licensing-faq/)

  ライセンスに関する質問への回答の出発点として使用してください。ここにある多くの回答は、[subscription documentation](https://docs.gitlab.com/subscriptions/) を参照しています。

* [**Proof of Value (POV)**](/handbook/solutions-architects/playbooks/pov/)

  POV を実施するためのリソース集です。GitLab 自身の Solutions Architect が日々の業務で使用しているものと同じです。リンク先がログイン画面の場合は、[Ecosystem Solutions Architect](/job-description-library/sales/solutions-architect/#ecosystem-solutions-architect) にアクセスを依頼してください。

* **Competitive Intelligence**

  他のベンダーとの競合状況で支援が必要な場合は、[Ecosystem Sales Manager](/job-description-library/sales/partner-account-manager/) または [Ecosystem Solutions Architect](/job-description-library/sales/solutions-architect/#ecosystem-solutions-architect) に連絡してください。

## 4. GitLab をデモする

これらのリソースは、顧客に効果的なデモを提供できるよう、GitLab をより深く技術的に理解するためのものです。

### 4.1 環境

[**NFR（Not-for-Resale）ライセンス**](/handbook/resellers/channel-working-with-gitlab/#not-for-resale-nfr-program-and-policy)を 2 つリクエストしてください。SaaS 用とセルフマネージド用に 1 つずつです。

* SaaS は常に安定した環境であるため、デモに使用します。

* セルフマネージドは、GitLab インスタンスのインストールと運用を学ぶために使用します。完全な管理者アクセスが得られます。セルフマネージド GitLab インスタンスをセットアップするには、Partner Implementation Services ハンドブックページの [GitLab インスタンスの実装セクション](/handbook/resellers/partner-enablement/partner-implementation-services/#implementing-a-gitlab-instance)を参照してください。

### 4.2 コンテンツ

* **ハンズオン**

  [**Tanuki Racing プロジェクトのセルフガイドワークショップ**](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) を使用して、より高度なシナリオを学び、製品のハンズオン経験を積んでください。コンテンツのほとんどはワークショップとして提示されていますが、顧客のユースケースに応じて、自身のデモの基礎として使用できます。[Demo Architect](/job-description-library/sales/demo-architect/) チームがこのリポジトリのコンテンツを最新に保っています。使用手順は、リポジトリのルートにある [README ファイル](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing/-/blob/main/README.md?ref_type=heads) にあります。

  執筆時点（2026-07-21）では、**Duo Agent Platform** モジュールは別リポジトリの [**DAP Swag Shop**](https://gitlab.com/gitlab-learn-labs/sample-projects/dap-swag-shop) で利用でき、独自の[ワークショップ手順](https://gitlab.com/gitlab-learn-labs/sample-projects/dap-swag-shop/-/blob/main/RunBooks/DAP-Workshop.md)があります。

* **インタラクティブ製品ツアー**

  Developer Advocacy チームは、[インタラクティブ製品ツアーのカタログ](/handbook/marketing/developer-relations/developer-advocacy/content/#product-tours)を維持しています。個々の機能を扱うセルフガイドの旅です。迅速で焦点を絞ったデモとしても、GitLab が想定どおりに動作しないときの代替手段としても有効です。

## 5. サービスを構築する

顧客向けに GitLab を中心とした説得力のあるサービスポートフォリオを構築することは簡単な仕事ではありません。私たちもその支援をしたいと考えています。

### 5.1 GitLab Professional Services Engineer（PSE）認定

組織で標準化されたレベルの技術的専門性を構築するため、テクニカルチームメンバーそれぞれが **GitLab Professional Services Engineer（PSE）認定** を取得することを推奨します。

PSE 試験の受験には費用がかかりますが、学習コース自体は無料です。認定は [GitLab Professional Services Partner（PSP）](/handbook/resellers/channel-program-guide/#the-gitlab-professional-services-partner-psp-program) ステータスを取得したい場合にのみ必須であり、その場合も一定数の従業員に限られます。

認定を取得する場合は、パートナー版の [GitLab University](#13-gitlab-university) を開き、[PSE Learning Path](https://university.gitlab.com/learning-paths/gitlab-certified-professional-services-engineer-learning-path-c1b1) に移動してください。そのページには無料の学習コースも含まれています。

**PSE FAQ**

* **PSE 認定取得にはどのくらいの時間がかかりますか？**

  異なるスキルレベルの人に向けた目安を示します（1 日 = 8 時間）:

  1. 製品に深く精通している GitLab ユーザー: 3 ～ 4 日。
  2. 市場の他製品には精通しているが、GitLab の経験はまだない DevOps プロフェッショナル: 10 ～ 12 日。
  3. DevOps の知識も GitLab の経験もない IT プロフェッショナル: 15 ～ 20 日。

* **試験は順番に受ける必要がありますか？**

  いいえ、あなた次第です。PSE ステータスを得るには、6 つの試験をすべて完了するだけで十分です。

### 5.2 GitLab Duo Agent Platform

執筆時点（2026-07-21）で、Duo Agent Platform（DAP）は PSE カリキュラムの一部ではありません。それでも、パートナーが製品のこの重要な部分に習熟することを強く推奨します。そのためには、以下のリソースを使用してください:

* [GitLab Duo Learning Path](https://university.gitlab.com/learning-paths/gitlab-duo-learning-path-v100): 無料のセルフペースオンライン学習です。
* [GitLab Duo Agent Platform Associate Certification](https://university.gitlab.com/courses/certified-duo-agent-platform-associate): 任意、有料です。

PSE と同様に、Partner Portal から University にアクセスし、このコンテンツのパートナー限定割引も利用してください。

### 5.3 追加教育

認定プロセスで得た知識を実践に活かすために、私たちのチームは必要な技術リソースをすべて [Partner Technical Presales Enablement ハンドブックページ](/handbook/resellers/partner-enablement) に集めました。その [Post-Sales Implementation and Adoption Journey セクション](/handbook/resellers/partner-enablement/#4--post-sales-implementation-and-adoption-journey) は、パートナーサービス専用です。そこで参照される最も重要なサブページは次の 2 つです:

1. [Partner Implementation Services](/handbook/resellers/partner-enablement/partner-implementation-services)
2. [Partner Migration Services](/handbook/resellers/partner-enablement/partner-migration-services)

これらは、PSE 認定プロセスの 2 つのハンズオン試験（実装と移行）の次のステップと考えてください。これらの試験では、2 つの重要な活動の基本を理解して実行することが必要です。上記の 2 ページは、現実の複雑で大規模な顧客エンゲージメントに取り組むためのツールと情報を提供します。

## 6. 最新情報を保つ

パートナーとして GitLab をよく知る必要があります。最新情報を保つことも同じくらい重要です。以下のリソースを使って実現してください。

* **Partner Flash Newsletter**

  このニュースレターには、[Partner Portal の My News メニュー項目](https://partners.gitlab.com/px/news-on-demand) からアクセスできます。自分に関連するすべてのニュースを購読していることを確認してください。

* [**Building Pipelines Webinar**](https://partners.gitlab.com/px/-/building-pipelines)

  このウェビナーシリーズは GitLab 関連のトピックを深く扱い、GitLab の販売とサービス提供をより良く行うのに役立ちます。このページでは、今後のセッションに登録でき、これまでのすべての回の動画録画とプレゼンテーション資料を確認できます。

* [**Champions Program**](/handbook/resellers/partner-champions-program/)

  このプログラムは、世界中で GitLab と私たちのコミュニティに優れた貢献をする GitLab パートナーコミュニティのメンバーを募り、支援、報奨、表彰します。定期的なミーティングは、これらのメンバーに最新情報とテクニカルプレビューを提供し、アイデアを交換する場を提供します。

* [**What's New Website**](https://about.gitlab.com/releases/whats-new/)

  このページは、月次 GitLab リリースの新機能と、次に計画されている機能を一覧にします。「Upcoming」セクション（「See what's coming」ボタンの背後）は、異なる製品エリアにわたるバックログへのリンクを含む GitLab の公開ロードマップとして機能します。
