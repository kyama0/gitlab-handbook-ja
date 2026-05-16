---
title: "Security Research"
description: "Security Research チームは、GitLab とそのユーザーが直面する複雑なセキュリティリスクの特定、定量化、ソリューション開発に焦点を当てたプロジェクトを通じて、Security Vision and Mission に貢献します。"
upstream_path: /handbook/security/product-security/security-platforms-architecture/security-research/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

## チームの焦点

Security Research チームは、GitLab とそのユーザーが直面する複雑なセキュリティリスクの特定、定量化、ソリューション開発に焦点を当てたプロジェクトを通じて、[Security Vision and Mission](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission) に貢献します。この作業は製品と会社のセキュリティポスチャを改善することを目指しますが、常に差別化要因として新しい機能性に貢献することにも目を向けています。さらに、GitLab Security プログラムへの教育と認知度向上のため、結果を広く共有することを目指しています。

このビジョンを実現するため、チームのプロジェクトは [役割定義](/job-description-library/security/security-research/) に従って、一般的に以下のカテゴリーに沿っています。

- セキュリティインサイトの提供
- 新しいセキュリティ機能の開発
- 教育

### セキュリティインサイトの提供

製品としての GitLab と会社としての GitLab を保護するため、セキュリティインサイトプロジェクトは、技術的セキュリティリスクの特定、定量化、コミュニケーションを目指します。

例:

- [GitLab 内で使用されている FOSS アプリケーションと依存関係のセキュリティテスト](#gitlab-ecosystem-security-testing)
- [脅威モデリング](/handbook/security/product-security/security-platforms-architecture/application-security/threat-modeling/) の導入と実践
- 内部技術リスクレポートの公開

### セキュリティ能力の開発

セキュリティ能力開発カテゴリーのプロジェクトは、他の人がセキュアにイノベーションできるようにする新しいツールを提供することを目指します。

例:

- [Package Hunter](#package-hunter)
- [Untamper My Lockfile](https://gitlab.com/gitlab-org/frontend/untamper-my-lockfile)
- トークンリーク用ツール

### 教育

私たちのアイデアが他の人が学び、その上に構築できるようにすることを目指しています。その目標を達成するため、結果を可能な限り広く共有しています。
さらに、専用の教育プロジェクトでは、セキュリティ概念の認知度を高めるために魅力的なセキュリティコンテンツを開発することを目指しています。

例:

- ブログ投稿
- [GitLab Security Tech Notes](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/)
- カンファレンスプレゼンテーション
- セキュリティ標準の執筆
- GitLab ドキュメント更新
- 内部トレーニングの開発

研究の成果が期待された結果をもたらさない場合でも、研究フェーズで実施されたアプローチや手順は文書化され公開されるべきです。

## プロジェクトライフサイクル

Security Research プロジェクトライフサイクルは、研究課題の技術的検証を素早くイテレーションするように設計されています。技術的検証の後にはビジネス検証が行われ、ステークホルダーが正式に特定され、具体的な成果物が定義されます。このワークフローでは、新しいアイデアの探求が可能ですが、プロジェクトがビジネス目標に沿うことが保証されます。
プロジェクトの優先順位付け方法の詳細は [プロジェクトの優先順位付け](#project-prioritization) で説明されています。

### 参加者

#### チームメンバー

専門家として、Security Research チームメンバーは自分のプロジェクトを自分で指揮するスペースが与えられています。そのために、彼らは多くの異なるソースからのデータを使い、ビジネスとより大きなセキュリティコミュニティに対して影響を与えられる場所に焦点を当てることを決定します。

データソースの一部:

- 自身のセキュリティの背景
- GitLab 内で提起されたセキュリティに関する質問/問題
- GitLab チームメンバーへのアウトリーチ
- セキュリティ業界のトレンド

#### チームマネージャー

チームマネージャーの役割は、プロジェクトでチームメンバーをサポートしガイドすることです。これには彼らが収集する情報を共有することと、他のチームメンバーとのコミュニケーションを促進することが含まれます。マネージャーが影響を与えられる例の 1 つは、社内で特定されたセキュリティに関する質問/問題を提起することです。

#### ステークホルダー

プロジェクトがビジネス目標とよく整合していることを保証するため、私たちのプロジェクトのスポンサーとなる社内のステークホルダーを特定するよう努めます。ステークホルダーはいつでも特定できますが、技術的なアイデアが検証されたらステークホルダーを特定するようにも努めます。チームメンバーは、チームに連絡するか [Lightbulb Issue](#lightbulb-ideas) を開くことで、ステークホルダーになることを志願できます。

### Lightbulb アイデア {#lightbulb-ideas}

Lightbulb アイデアは Security Research プロジェクトの最初のステップです。これらは、調査する価値があり、ビジネス目標と広く整合していると私たちが信じる、ひらめきを得た [研究課題](https://en.wikipedia.org/wiki/Research_question) です。Lightbulb アイデアには `~security-research::lightbulb` ラベルが付けられ、オープンな Lightbulb アイデアはチームロードマップを形作るのに役立てるため、Security Research の同期会議中に議論されます。Lightbulb アイデアは、Security Research チームと提携することに興味のある誰でも開くことができます。

Lightbulb アイデアには `~security-research::lightbulb` ラベルが付けられます。プロジェクトの目標を整合させ伝えるために、`~Security Focus::` および `~Project Goal::` スコープラベルが使用されます。Lightbulb の Issue 作成時には、各グループから 1 つのラベルを適用する必要があります。詳細については [チームラベル](#team-labels) を参照してください。

### プロジェクトの優先順位付け {#project-prioritization}

プロジェクトは、ビジネス優先順位、プロジェクトの完了段階、参加する Security Research チームメンバーの判断など、さまざまな要因を組み合わせて優先順位付けされます。プロジェクトの優先順位付けはチーム内で継続的に議論されますが、部門 OKR との整合に参加するために、各四半期の開始前に少なくとも 1 回は実施されます。

一般的な優先順位付けの順序 (高から低):

- [製品統合](#product-integration) フェーズのプロジェクト
- [GitLab 社内採用](#gitlab-internal-adoption) フェーズのプロジェクト
- 内部リスクアセスメントによって特定されたトップリスク領域に整合するプロジェクト

新しいプロジェクトが優先順位付けされたら、以下に定義されているプロジェクト完了基準に従います。

### プロジェクト完了基準

プロジェクトが完了したとみなされるかどうかは、プロジェクトの目的によって異なります。研究プロジェクトの目的は次のとおりです。

- アイデアの検証
- GitLab 社内採用
- GitLab 製品統合

すべての (自主指導の) プロジェクトはアイデア検証から始まり、GitLab 社内採用および/または GitLab 製品統合へと拡大される可能性があります。

#### アイデア検証

入口基準:

- Lightbulb Issue
- 焦点領域との整合

出口基準:

- 研究課題の回答が得られている
- 研究結果が文書化され、潜在的なステークホルダーに伝えられている

アイデア検証フェーズは、研究プロジェクトで答えを求める 1 つ以上の研究課題を策定することから始まります ([Lightbulb アイデア](#lightbulb-ideas) も参照)。アイデアは、作業を会社の目標と整合させるため、Security 部門の焦点領域に関連すべきです。質問に答えられたら、アイデア検証フェーズは完了し、結果はカンファレンストーク、ブログ投稿、テックノートとして公開されるべきです。結果はまた、Security 部門のピアと、その作業に関連性のあるプロダクトマネージャーに対して、社内で集中的に共有されるべきです。

#### GitLab 社内採用 {#gitlab-internal-adoption}

入口基準:

- 社内のステークホルダーが存在する
- ステークホルダーのコミットメント (例: コードのメンテナンス、サービスの運用、検出のトリアージへの意欲)
- 目標と実装タスクを記述したプロジェクト計画

出口基準:

- プロジェクト計画が完了している

アイデアが検証されたら、研究プロジェクトは GitLab 社内採用および/または GitLab 製品への統合を達成するために拡張できます。プロジェクトが拡張される場合、新しい研究提案を作成し、ステークホルダーから合意を得る必要があります。期待される成果物は文書化されるべきです。たとえば、社内採用は、研究のインサイトをハンドブックに文書化したり、ソフトウェアサービスを実装することによって達成できます。

社内採用または製品統合のためにプロジェクトをスコープする際に考慮すべき要因:

- 研究者が利用できる時間とリソース。研究者がタイトな期限で作業しているか、リソースが限られている場合、プロジェクトのスコープを縮小したり、完了の期待を調整する必要があるかもしれません。言い換えると、1 人の人間が根本的に新しい機能を製品に導入するのは現実的ではありません。
- 継続的なメンテナンスが必要な場合、どのチームがメンテナンスを所有しますか?

#### 製品統合 {#product-integration}

入口基準:

- Product のステークホルダーが存在する
- ステークホルダーのコミットメント (例: 実装のためのエンジニアリングリソース、メンテナンス、予算)
- 目標と実装タスクを記述したプロジェクト計画

出口基準:

- プロジェクト計画が完了している

| プロジェクト目標 | アイデア検証 | 社内採用 | 製品統合 |
| ---      | ---      | ---      | ---    |
| 完了基準   | 研究課題の回答が得られている   | <ul><li> 検出機能の開発 </li><li> プロセスの改善 </li></ul>   | <ul><li> リスク軽減済み </li><li> 脆弱性修正済み </li></ul> |
| 成果物   |  <ul><li>PoC</li><li>講演、ブログ投稿、テックノート</li></ul>  |  <ul><li>コード、インフラ、ソフトウェアサービス</li><li>ハンドブック MR</li></ul>  | <ul><li>コード、インフラ、ソフトウェアサービス</li><li>ドキュメント MR</li></ul>  |
| 期間 (見積) | 1〜2 四半期 | 2〜3 四半期 | 3〜4 四半期 |

#### 結果の伝達

各プロジェクトフェーズの終わりに、チームメンバーは結果を共有します。私たちの目標は、結果を可能な限り広く共有することです。したがって、感度と時間制約を考慮して最も適切なコミュニケーション形式が選択されます。一部のケースでは、作業の感度のため、結果はより広く共有できる時まで会社内でのみ共有されます。

### チームラベル {#team-labels}

#### Security Focus ラベル

[`~Security Focus::`](https://gitlab.com/groups/gitlab-com/gl-security/-/labels?subscribed=&search=Security+Focus) ラベルは、ビジネスのリスクと優先順位に基づいて、Security 部門の広い高レベルな焦点領域に Issue を整合させるために使用されます。リストは安定的であることを意図していますが、固定的ではありません。

- `Security Focus::Cloud and Infrastructure Security` - 会社のプロダクションおよび非プロダクションのクラウドおよびインフラ環境の安全な構成と使用に関連
- `Security Focus::Data Security Governance` - 会社に信頼されたデータの保護に関するコントロール、プロセス、ポリシーに関連
- `Security Focus::Identity and Access Management` - ビジネスサービスとデータへの認証と認可に関連
- `Security Focus::Supply-chain Security` - ビジネスに必要な第三者のコード、データ、サービスに対する信頼の確立に関連
- `Security Focus::Other` - 4 つの主要な焦点領域に当てはまらないものに関連

#### Project Goal ラベル

[`~Project Goal::`](https://gitlab.com/groups/gitlab-com/gl-security/security-research/-/labels?search=Project+Goal&subscribed=) ラベルは、プロジェクトの高レベルな目標を伝えるために使用されます。

- `Project Goal::Risk Identification & Quantification` - プロジェクトはリスクの特定、定量化、コミュニケーションを目指します。
- `Project Goal::Risk Mitigation` - プロジェクトは特定のリスクを軽減または排除することを目指します。
- `Project Goal::Team Maturity::Processes` - プロジェクトは、チームプロセスを成熟させ、チームの動作の理解を改善することを目指します。
- `Project Goal::Team Maturity::Technical Growth` - プロジェクトは、チームの特定の技術領域への理解を成長させることを目指します。学習に焦点を当て、将来のプロジェクトに応用できることを重視します。

### 現在および過去の研究プロジェクト

#### Package Hunter

npm や bundler のような最新の依存関係管理システムは、コードの再利用を簡単で広範囲なものにします。これにより開発者の生産性が向上し、アプリケーション実装の時間が短縮されます。しかし、依存関係管理システムは新しい課題ももたらします。比較的小さいアプリケーションでも、サードパーティ依存関係の数はすぐに数百に増えます。これらの依存関係はアプリケーションのセキュリティに重要であるため、脆弱性と悪意のあるコードがないか慎重に精査する必要があります。依存関係コードの量が膨大で開発者の時間が貴重であるため、このタスクを手動で実行するのは通常は実現不可能です。自動化ツールは、依存関係のレビューをサポートし、悪意のある依存関係がアプリケーションのサプライチェーンに侵入するのを防ぐために不可欠です。この課題に取り組むため、私たちは悪意のある npm モジュールと Ruby Gems を特定するツールである Package Hunter を開発しました。Package Hunter は、アプリケーション依存関係のインストール時にシステムコールを監視します。疑わしいシステムコールが観測された場合、アラートが作成され、開発チームに通知されます。

Package Hunter はオープンソースです。Package Hunter を試すには [プロジェクト](https://gitlab.com/gitlab-org/security-products/package-hunter) サイトにアクセスしてください。独自の Package Hunter インスタンスを実行するための [手順](https://gitlab.com/gitlab-org/security-products/package-hunter#installation) と、CI パイプラインで依存関係を分析するのを始めるための [CI テンプレート](https://gitlab.com/gitlab-org/security-products/package-hunter-cli/-/blob/main/ci/template/Package-Hunter.gitlab-ci.yml) があります。

私たちは貢献も歓迎しています。Package Hunter の開発に参加することに興味がある場合は、[コントリビューションガイド](https://gitlab.com/gitlab-org/security-products/package-hunter/-/blob/main/CONTRIBUTING.md) を参照してください。

Security Research チームは、GitLab で内部的に使用される Package Hunter インスタンスを維持しています。このインスタンスは、`https://api.package-hunter-live.sec.gitlab.net` および `https://api.package-hunter.xyz` でアクセス可能です。

### GitLab エコシステムセキュリティテスト {#gitlab-ecosystem-security-testing}

GitLab 内の Security Research チームは、定期的にオープンソースソフトウェアのセキュリティアセスメントを実施しています。

このページでは、これらの取り組みに関する理由、アプローチ、ワークフローを説明します。

#### 全員のための OSS エコシステムの強化

GitLab は膨大な量のオープンソースソフトウェアに依存しており、これは直接のコード依存関係に限らず、社内で使用されている他のコンポーネントも含みます。GitLab の全体的なセキュリティポスチャと、私たちの OSS 依存関係のすべての他のユーザーのセキュリティポスチャを強化するため、Security Research チームは [評価予定の OSS プロジェクトリスト](https://gitlab.com/gitlab-com/gl-security/security-research/ecosystem-security/-/blob/main/projects.yaml) (内部リンク) を維持しています。リストは以下のカテゴリーから埋められます。

- **Cornerstone Project** (1)
  - このカテゴリーは、潜在的に大きなコードベースを持つ広く使用されている OSS プロジェクトを対象としています。
- **GitLab アプリケーションの依存関係** (3)
  - GitLab に同梱されるコード依存関係およびその他のオープンソースプロジェクトを含みます。
- **開発者ツールプロジェクト** (3)
  - 開発者マシンで毎日使用されるプロジェクト。
- **インフラ/IT コンポーネント** (3)
  - 会社と製品の運営において依存するプロジェクト。

合計で 4 つの異なるカテゴリーから 10 のプロジェクトを選ぶことができます。これらのカテゴリーは、私たちの作業が広い影響を持つことを確実にするためのものです。プロジェクトは以下の要因によって選ばれ、優先順位付けされます。

- データアクセス [(赤/オレンジ/緑)](/handbook/security/policies_and_standards/data-classification-standard.md#data-classification-levels)
- 使用されている GitLab API スコープ (もしあれば)
- 提供される機能、特に以下のような影響度の高い機能を狙います:
  - 認証と認可
  - ファイルアクセス
  - アップロード/ダウンロード処理
  - シークレットの処理
- GitLab 内外での採用、プロジェクトはどれくらい広く使用されているか?

このリストからプロジェクトが評価されると、ファネルを常に満たすように、リストの空きには別のプロジェクトが追加されます。

#### ドキュメント

すべてのプロジェクトと関連アーティファクトは、プロジェクト進行中は [sec-research](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/) リポジトリに内部的に文書化されます。このリポジトリは結果の SSOT であり、生のアーティファクト、書き起こし、該当する場合は PoC を含みます。

プロジェクトが完了し、特定されたセキュリティ Issue がすべてクローズされると、公開向けドキュメントが [Threat Management tech notes](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/red-team-tech-notes) リポジトリに公開されます。該当する場合、研究の詳細な技術的背景を含むブログ投稿が、External Security Communications チームと協力して作成されます。

#### メトリクス

Ecosystem Security Testing について、プログラムの全体的な進捗と影響に関するインサイトを得るため、以下のメトリクスをキャプチャしています。

1. 四半期あたりにクローズされたレビュー Issue
1. レビューあたりに特定された Issue
1. レビューあたりに開かれた GitLab 改善 Issue

`四半期あたりにクローズされたレビュー Issue` および `レビューあたりに特定された Issue` を測定するため、[Ecosystem Security Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/security-research/ecosystem-security/-/labels) (内部リンク) で以下のラベルが作成されました。

- `~EcosystemSecurity::Project`
- `~EcosystemSecurity::Finding`

`レビューあたりに開かれた GitLab 改善 Issue` を測定するため、[`gitlab-com`](https://gitlab.com/gitlab-com) および [`gitlab-org`](https://gitlab.com/gitlab-org) グループで以下のラベルが使用できます。

- `~SecResearch Followup::Ecosystem`

### コードレビューセッション

[チームメンバーからのリクエスト](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/-/issues/new?issuable_template=Code%20review%20session) (内部リンク) に基づいて、Security Research チームは「コードレビューセッション」を主催し、特定のコード片のセキュリティレビューでペアリングします。これらのセッションは記録されます。

レビューはすべて脆弱性の特定に関連します。

これらのセッションの目的は、両方の側で学ぶこと、興味深い新しい技術やソフトウェア概念で私たちにチャレンジしてもらうこと、そして見返りに、私たちが特定のコードベースに対する脆弱性の特定アプローチを共有するのにベストを尽くすことです。

### 脆弱性開示ガイドライン

脆弱性開示はデリケートなプロセスであり、報告者にとってのワンサイズフィットオールのアプローチはありません。Security Research チーム内では、可能な禁輸期間を尊重しつつ、GitLab のインフラ内でのタイムリーな修正と、ベンダー側での修正に焦点を当て、最も効果的な方法で各脆弱性を報告するように努めます。

[テックスタック](/handbook/business-technology/tech-stack-applications/) にリストされているサードパーティソフトウェアの脆弱性開示は、テックスタック項目のそれぞれの所有者と調整される必要があります。彼らはベンダー側の追加の連絡先を持っているか、特定された脆弱性のための一時的な緩和策を実装するためのより多くのコンテキストを持っているかもしれません。

実際のリスクと露出に応じて、開示に関する情報をさらに制限する必要があるかもしれません。そのような場合は、[SIRT](/handbook/security/product-security/psirt/runbooks/working-with-sirt/) を関与させることが推奨されます。

すべての場合において、チームは [GitLab のサードパーティソフトウェアの脆弱性に対する開示ガイドライン](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software) に従います。

## バグバウンティと講演料

Security Research の結果として、チームメンバーが GitLab での労働時間中に特定された報告済み脆弱性に対してバグバウンティの提供を受けることがあります。そのような場合、バウンティの支払いは、ベンダーから慈善団体に寄付される代わりにすべきです。

GitLab を代表して開催されるカンファレンスプレゼンテーションのために提供される可能性のある講演料についても同じことを行うべきです。

私的に行われた研究や講演活動に基づいて提供されるあらゆる種類のバグバウンティ/料金は、もちろん慈善団体に寄付する必要はありません。
