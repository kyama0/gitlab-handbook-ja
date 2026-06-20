---
title: "GitLab における Experience Research"
description: "ブランドからプロダクトまで、エンドツーエンドのインサイトを提供し、何を作るか、どのようにポジショニングするかを決め、あらゆる段階の意思決定を形作ります。"
upstream_path: /handbook/product/ux/experience-research/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
translated_at: "2026-06-20T13:54:37Z"
translator: claude
stale: false
lastmod: "2026-06-18T15:20:01+01:00"
---

## 私たちとは

私たちは、GitLab の最も重要な意思決定が、思い込みでも AI の幻覚でもなく、**お客様の現実に根ざしている**ことを確認するチームです。**私たちは妥当性レイヤーを所有します。** Jobs to Be Done フレームワークから、ユーザーの認識や体験に関する競合分析、AI リサーチのガードレールまで、私たちは、後からうまくいくかを知るには高くつきすぎる段階になる前に、アイデアの**リスクを下げる**機能です。

私たちのリサーチャーは 2 つのレベルで働きます。一部は **Upstream Studios の中央集権型チームに組み込まれ**、方向性が決まる前に形作ります。一部は **GitLab product studios に入り**、チームが自信を持って素早く動けるよう支援します。そして全体をつなぎ合わせるため、**Service Design** がチーム横断で体験をつなぎ、**Research Operations** がこれらすべてをスケールして実行できるようにします。

## 私たちの構成

ExR チームは [Karen Li](https://gitlab.com/karenyli) がリードしています。これは GitLab [Upstream Studios](/handbook/upstream-studios/) の 8 チームの 1 つです。チームは UX Research、[Service Design](/handbook/product/ux/experience-research/service-design/)、[Research Operations (ReOps)](/handbook/product/ux/research-operations/) の 3 つの専門領域で構成されています。

4 つの product studio にはそれぞれ 1 名のリサーチャーが組み込まれ、Product Management VP、Engineering VP、Product Design Manager という trio のレベルで、意思決定が行われている場で働きます。さらに 2 名のリサーチャーは中央集権型チームに組み込まれ、**チームリードと直接働き**、Design Strategy と Brand Experience を支援します。Service Design はすべての studio と中央集権型チームをカバーし、体験の継ぎ目が最も見えやすい場所に注意を向けます。Research Operations は、リサーチの効率と品質をスケールさせます。

| チーム | ExR チームメンバー | 備考 |
|------|-----------------|-------|
| Design Strategy | [Jessica Kane](https://gitlab.com/jlkane), [Will Leidheiser](https://gitlab.com/wleidheiser) | 中央集権型チーム |
| Brand Experience | [Jessica Kane](https://gitlab.com/jlkane) (consult) | 中央集権型チーム |
| Core DevOps and Data Studio | [Ben Leduc-Mills](https://gitlab.com/leducmills) | Product studio |
| AI Studio | [Nick Hertz](https://gitlab.com/NickHertz) | Product studio |
| PLG/Monetisation/Platforms Studio | [Anne Lasch](https://gitlab.com/alasch) | Product studio |
| Security Studio | [Nikki Shechtman](https://gitlab.com/nshechtmann) | Product studio |
| Service Design | [Bindu Upadhyay](https://gitlab.com/binduupadhyay) | クロスチーム |
| Research Operations | [Cait Faughnan](https://gitlab.com/cfaughnan), [Mariana Cardinali](https://gitlab.com/marianacardinali) | クロスチーム |

## 私たちの働き方

私たちは、支援するチームに組み込まれ、その横ではなく studio のリズムの内側で働きます。各リサーチャーは**意思決定が行われる部屋に入り**、trio leadership レベルのステークホルダーと働きます。私たちは、リサーチを着地させるために必要な**好奇心、意欲、関与**を育て、チームがお客様とその視点を深く理解できるよう支援します。

### 厳格なフォーカス

任意の時点で、中央集権型チームまたは product studio を担当する UX リサーチャーは、そのチームの leadership team が合意した上位 2〜3 件の優先度の高い未知事項に集中しつつ、未知事項が戦略的に最も重要な少数のプロダクト領域に近い状態を保ちます。

### 2 段階の優先順位付け

私たちは、上位の優先事項を決めるために **2 段階のフレームワーク**を使用します。

- **ExR レベルでは**、これは取り消しにコストがかかるか、そして多くの人に影響するかを問います。答えが yes なら、それは私たちが所有するものです。
- **チームレベルでは**、2 つのものがどちらも該当する場合、[同じ優先順位計算機](https://docs.google.com/spreadsheets/d/1wMwaU5uOy5UHbBEMD2eEeCdDjaR7bUJMt22OYCT4ZQo/edit?gid=0#gid=0)（Internal Access Only）を使って、差別化、成長、リテンションで優先順位を付けます。
  - *差別化: 市場の他社と比べて GitLab を際立たせるもの。*
  - *成長: 一次的な成果を伸ばし、コンバージョン／導入を促進するもの。*
  - *リテンション: 持続的な利用とロイヤルティを促進するもの。*

### ホリスティックな Service Design

Service Designer は Upstream Studios leadership に近い状態を保ち、ホリスティックな体験の全体像を維持します。同時に、四半期または半期ごとに戦略的フォーカスを調整し、"moments that matter" を生み出す機会が大きく、複数の重要なタッチポイントにまたがる体験を滑らかにするうえで最も影響の大きい領域に取り組みます。

### つながりを保つ

社内では、**週次同期**と、よくメンテナンスされた**リサーチ Issue** から生成される AI 補助の**週次サマリー**、およびアウトプットと達成事項を記録する四半期ごとの振り返りドキュメントを通じて認識を揃えます。これにより、追加のオーバーヘッドを生まずに、studio とチームをまたいでチーム全体の情報を最新に保てます。

### No と言う

私たちは当然の要件のためのリサーチは行いません。生成されるインサイトが成果に影響を与えられる場合にリサーチを行います。何かが該当しない場合は、顧客コールのスクリプトを磨くことから、リリースしてアナリティクスを観察することまで、適切な代替手段を見つける支援をします。AI を使って私たちのリーチを広げ、research library をインテリジェンスプラットフォームの中核として維持します。

### PTO に備える

各リサーチャーが自分の領域に深く組み込まれているため、カバーには計画が必要です。1 週間を超える PTO については、ステークホルダーとマネージャーに少なくとも 1 か月前に知らせ、一緒に計画を立てる時間を確保します。マネージャーが対応できるところに入る、作業を待たせる、またはチームがサポートを受けながらセルフサービスで進める、といった方法があります。長期休暇については、コントラクターによるカバーを検討します。

## 私たちが所有するもの

私たちはステークホルダーとともにリサーチプロジェクトを形作りながら、重要な瞬間でステークホルダーを支援するため、以下の取り組みを所有します。

| あなたが直面している状況 | ExR が所有するもの | 得られるもの |
|-------------|--------------|--------------|
| **広く開けた空間に向き合っている:** GitLab がどこで勝てるかを探している | Watchdog | 競合環境分析: 市場に何があり、体験がどのように設計・認識されているか、機会がどこにあるか |
| **将来のビジョンを形作っている:** 戦略に取り組んでいるが、誰のために設計しているか分からない | Futurecasting | ユースケースがどのように進化し得るか、将来のユーザーが誰か、enterprise などの文脈がどう変化し得るかの明確化 |
| **優先順位付けが必要:** どの問題や機能に最初に取り組むかを決めている | Jobs to Be Done | 優先すべき検証済みのユーザーニーズと問題、およびその背後にある文脈 |
| **体験の整合が必要:** Brand と Product の間、またはプロダクトグループ間で作業している | End-to-end journeys | 知覚価値と効率を高める、一貫したエンドツーエンドジャーニー |
| **素早いアドホックな質問がある:** ユーザーや市場について素早い答えが欲しい | Research Library | 既存リサーチ、カスタマーサポートチケット、顧客コールからインサイトを引き出す、AI 搭載の常時利用可能なインテリジェンスプラットフォーム |
| **コンセプトとデザインの検証が必要:** 方向性を検討しており、コミット前に確信が必要 | Rapid Validation Training and Set-up | 一貫した UX 品質フレームワークを使った、コンセプトとデザインへの素早く構造化されたフィードバック |
| **お客様と関わっている:** 定期的にお客様と話しているが、シグナルが一貫しない | Customer and roadmap call scripts review | ロードマップ判断を直接支える、デザインパートナーからの一貫性があり比較可能なシグナル |
| **自分でリサーチを行う必要がある:** リサーチセッションを実行するためのリソースや知識を探している | Bespoke consultation | 試行済みで実証済みの方法論、テンプレート、スクリプトレビュー、リサーチワークフロー |

## AI の使い方

私たちは AI を使って、私たちの速度を落とす作業を処理し、人間にしかできないこと、つまり考え、判断し、リサーチ対象の人々に近い状態を保つことに集中します。私たちは [AI guidance](/handbook/upstream-studios/how-we-work/ai-usage/) に沿って AI を使用し、品質を犠牲にすることなく実践で使う AI ツールとスキルを採用、評価、調整し、その学びを他の Research DRI に伝えます。

**リサーチ、サービスデザイン、リサーチオペレーションのための AI:** 参加者のリクルーティングから競合分析、エンドツーエンドジャーニーの構築まで、すべてのプロセスで AI スキルとエージェントを構築・使用します。私たちの仕事はすべてのアウトプットを監督することではなく、ガードレールを設定し、品質をゲートすることです。リサーチャーは、行動に移すのに十分かどうかを最終判断する存在としてループに残ります。

**チームアラインメントのための AI:** ExR 全体で、オーバーヘッドを作らずに全員が情報を把握できるよう AI エージェントを構築・使用します。週次の AI 生成サマリーは、全員のリサーチ Issue からプロジェクトの優先事項と進捗を取得するため、追加のミーティングなしでチーム全体が最新状態を保てます。これは私たちが作業しながら文書化している場合にのみ機能し、その文書化にも AI を活用します。

**AI 搭載 research library:** 私たちが作成する最終レポートと Deliverable はすべて Research Library に入ります。これは GitLab の誰もがいつでもアクセスできる、インテリジェンスの中央ハブです。ライブラリ内の AI エージェントにより、人々はまず私たちに来なくても適切なインサイトを見つけられます。私たちの集合知は時間とともに積み上がり、リサーチャーがその場にいるかどうかにかかわらず、私たちのリーチは広がります。

### 私たちはリサーチをします、あなたもできます

#### 私たちが調査する対象

Experience Research チームは、プロダクトが多様なニーズと期待に応えることを保証するために、顧客、エンドユーザー、潜在ユーザー、ステークホルダー、競合のユーザー、特殊なユーザーグループを調査します。

#### 私たちの調査方法

さまざまなリサーチ手法（ユーザーインタビュー、サーベイ、ユーザビリティテスト、ダイアリースタディ、カードソートを含む）を使って、ユーザーの行動、ニーズ、好みに関する生データを収集します。

その後、厳密なデータ分析と統合を適用し、このデータを、私たちのプロダクトのデザインと開発に情報を与え形作る価値あるインサイトに変換します。

#### 他の GitLab チームメンバーがリサーチを行うのを支援する方法

UX リサーチャーは、ユーザーリサーチを実施する**多くの** GitLab チームメンバーの**1 つ**である点に注意してください。プロダクトマネージャーやプロダクトデザイナーなど他のロールも、Experience Research チームのガイダンスを受けながら頻繁にリサーチを実施しています。すべてのリサーチ DRI は、効率的で高品質なリサーチを行うために [Research Operations チーム](/handbook/product/ux/research-operations/) によってサポートされています。

リサーチプロジェクトをリードする予定の方は、[こちら](/handbook/product/ux/experience-research/resources-for-research-dris)から始められます。

### Experience Research と協力する方法

#### GitLab の顧客として

顧客の皆さま: リサーチ参加者またはリサーチパネリストとしての登録を歓迎します！ 私たちは常にさまざまな分野の専門家に調査に参加してほしいと考えており、ぜひ登録していただきたいです。[リサーチ参加者として期待されること](https://docs.google.com/presentation/d/1r0WMYS-ZvvEaqRvW3AazdIipCyz8xAynMFnp7PqjDMA/edit#slide=id.g2873bc64769_0_0)について読んだ上で、[今後のリサーチへの参加](https://research.rallyuxr.com/gitlab/lp/csmsignup?channel=app)に登録してください。

**得られるもの**:

- **デザインとプロダクト判断への影響力**: 皆さまのフィードバックは聞かれ、機能改善からプロダクト戦略まで、将来のデザインとプロダクトの意思決定に考慮されます。
- **よりスムーズな体験とより良いプロダクト**: 皆さまのインサイトは、日々のニーズによりフィットするプロダクトの形成に役立ち、全体的な体験と生産性を向上させます。

#### GitLab の社内チームとして

ぜひ協力させてください。皆さまの視点を集め、顧客との関わりにおいてパートナーになりたいです。日々の役割の一環として顧客やユーザーと関わっているチームや、GitLab プロダクトの顧客／ユーザー体験に影響する意思決定を行うチームの方は、ぜひお声がけください！ パートナーシップの方法は以下のとおりです。

- **顧客が私たちのリサーチに代表されるようにする**: #reops チャネルで顧客の詳細を共有して候補者として推薦するか、顧客を [Experience Research パネル](https://research.rallyuxr.com/gitlab/lp/csmsignup?channel=app) に誘導して関心を登録してもらえます。
- **GitLab ユーザーインサイトリポジトリで知っていることを共有する**: 顧客について学んだことを #experience_research チャネルで共有するか、特定のステージまたはテーマの担当 UX リサーチャーとつながってください。
- **さらなる調査が必要な改善領域（未知）を特定する**: 深掘りが役立ちそうな領域に気づいた場合は、#experience_research チャネルでお知らせいただくか、[該当ステージまたはテーマの UX リサーチャー](/handbook/product/ux/experience-research/how-uxr-team-operates/#how-team-members-are-assigned) にご連絡ください。関連する Issue を参考として提供してもらえると、なお嬉しいです！
- **リサーチインサイトを活用して仕事を導く**: 最新のインサイトについて #experience_research_reports チャネルをチェックして最新状態を保ってください。私たちのリサーチインサイト管理ツール [Dovetail](https://gitlab.dovetail.com/start/) を探索して、キーワードで検索したりインタビューセッションの録画を見たりすることもできます。また、デザイン、プロダクト、顧客エンゲージメントの意思決定をするときに、より情報を得るために [該当ステージまたはテーマの UX リサーチャー](/handbook/product/ux/experience-research/how-uxr-team-operates/) に相談することもできます。

**得られるもの**:

- **情報に基づく意思決定**: Experience Research チームはユーザー行動とフィードバックに基づく価値あるインサイトを提供し、社内チームがプロダクト開発プロセス全体を通じて情報に基づいたデータドリブンな意思決定を行うのに役立ちます。
- **リスク緩和**: Experience Research は、開発プロセスの初期段階で潜在的な問題を特定するのに役立ち、社内チームがこれらの課題がエスカレートする前に対処できるようにすることで、コストのかかる失敗やミスアラインメントなプロダクトのリスクを低減します。

### Experience Research に質問がありますか？

Experience Research チームはあなたのためにいます！ リサーチ関連のあらゆるトピックについて、Slack の [#experience_research](https://gitlab.enterprise.slack.com/archives/CMEERUCE4) チャネルで連絡してチームと関わってください。

リクルート、参加者のスケジューリング、リサーチツールへのアクセスなど、リサーチオペレーションのロジスティクスに関する質問がありますか？ [#research_operations](https://gitlab.enterprise.slack.com/archives/C03SW7KPA1X) チャネルはこの種の質問のためのチャネルです。

以下は、私たちの Experience Research チームのハンドブックコンテンツの完全なリストです。

#### GitLab で Experience Research を実施する

- [リサーチ DRI 向けリソース](/handbook/product/ux/experience-research/resources-for-research-dris)
- [いつリサーチを実施するか](/handbook/product/ux/experience-research/when-to-conduct-ux-research/)
- [ゴール、目的、仮説の定義](/handbook/product/ux/experience-research/defining-goals-objectives-and-hypotheses/)
- [問題検証と手法](/handbook/product/ux/experience-research/problem-validation-and-methods/)
- [解決策検証と手法](/handbook/product/ux/experience-research/solution-validation-and-methods/)
- [基礎リサーチ](/handbook/product/ux/experience-research/foundational-research/)
- [GitLab における戦略的リサーチ](/handbook/product/ux/experience-research/strategic-research-at-gitlab/)
- [リサーチツール／アプリケーション](/handbook/product/ux/experience-research/research-tools/)
- [UX Cloud Sandbox](/handbook/product/ux/experience-research/ux-cloud-sandbox/)
- [AI 領域のリサーチ](/handbook/product/ux/experience-research/research-in-the-ai-space/)

#### GitLab で使うリサーチ手法

- [手法の選び方](/handbook/product/ux/experience-research/choosing-a-research-methodology/)
- [サーベイ](/handbook/product/ux/experience-research/surveys/)
  - [サーベイの設計](/handbook/product/ux/experience-research/surveys/designing-your-survey/)
  - [サーベイ質問の一般的なタイプ](/handbook/product/ux/experience-research/surveys/common-types-of-survey-questions/)
  - [サーベイの質問スケール](/handbook/product/ux/experience-research/surveys/survey-question-scales/)
  - [サーベイのサンプルサイズ](/handbook/product/ux/experience-research/surveys/sample-sizes-for-surveys/)
  - [サーベイのパイロット実施](/handbook/product/ux/experience-research/surveys/piloting-your-survey/)
  - [Qualtrics のヒントとコツ](/handbook/product/ux/experience-research/surveys/qualtrics/)
  - [サーベイを設計・レビューする際に低品質データを特定する方法](/handbook/product/ux/experience-research/surveys/how-to-identify-low-quality-data-when-designing-and-reviewing-your-survey)
- [Jobs to be Done](/handbook/product/ux/jobs-to-be-done/)
- [縦断研究](/handbook/product/ux/experience-research/longitudinal-studies/)
- [ダイアリースタディ](/handbook/product/ux/experience-research/diary-studies/)
- [メンタルモデル研究](/handbook/product/ux/experience-research/mental-modeling)
- [機能優先順位付けのための Kano モデル](/handbook/product/ux/experience-research/kano-model/)
- [ユーザーストーリーマッピング](/handbook/product/ux/experience-research/user-story-mapping/)
- [ユーザージャーニーマッピング](/handbook/product/ux/user-journeys/)
- [Rapid Iterative Testing and Evaluation (RITE)](/handbook/product/ux/experience-research/rite/)
- [ユーザビリティテスト](/handbook/product/ux/experience-research/usability-testing/)
- [ユーザビリティベンチマーキング](/handbook/product/ux/experience-research/usability-benchmarking/)
- [モデレーターなしユーザビリティテスト](/handbook/product/ux/experience-research/unmoderated-testing/)
  - [ウェブサイトのユーザビリティテストスクリプトを書く](/handbook/product/ux/experience-research/writing-usability-testing-script/)
- [UX Bash](/handbook/product/ux/experience-research/ux-bash/)
- [選好テスト](/handbook/product/ux/experience-research/preference-testing/)
- [ユーザーインタビューのファシリテーション](/handbook/product/ux/experience-research/facilitating-user-interviews/)
  - [ユーザーインタビュー用のディスカッションガイドを書く](/handbook/product/ux/experience-research/discussion-guide-user-interviews/)
- [ユーザーペルソナの作り方](/handbook/product/ux/persona-creation/)
- [ナビゲーションの評価](/handbook/product/ux/experience-research/evaluating-navigation/)
  - [ナビゲーションのテスト: 早期の解決策検証](/handbook/product/ux/experience-research/early-solution-validation-process-for-navigation/)
    - [ナビゲーション用ファーストクリックテスト](/handbook/product/ux/experience-research/first-click-testing/)
      - [Qualtrics でファーストクリック調査を作成する](/handbook/product/ux/experience-research/creating-first-click-study-qualtrics/)
    - [ナビゲーション用 RITE テスト](/handbook/product/ux/experience-research/using-rite-to-test-navigation/)
    - [ナビゲーション用比較テスト](/handbook/product/ux/experience-research/comparative-testing-for-navigation/)

#### 参加者を見つける

- [効果的なスクリーナーの書き方](/handbook/product/ux/experience-research/write-effective-screener/)
  - [Common Screener: 複数の調査をまとめて効率的にスクリーニングする方法](/handbook/product/ux/experience-research/recruiting-participants/common-screener/)
- [参加者のリクルート](/handbook/product/ux/experience-research/recruiting-participants/)
- [UX Research Google Calendar の使い方](/handbook/product/ux/experience-research/ux-research-google-calendar/)
- [リサーチイベントへの参加](/handbook/product/ux/experience-research/attending-a-research-event/)
- [リサーチ参加者パネルの作成と管理](/handbook/product/ux/experience-research/research-panel-management/)

#### データとリサーチインサイト

- [GitLab リサーチライブラリ](/handbook/product/ux/experience-research/research-library/)
- [既存のリサーチを見つける](/handbook/product/ux/experience-research/finding-existing-research/)
- [有用なデータを集める](/handbook/product/ux/experience-research/collecting-useful-data/)
- [定量データを使ってインサイトを見つける](/handbook/product/ux/experience-research/quantitative-data/)
- [ユーザーリサーチデータの分析と統合](/handbook/product/ux/experience-research/analyzing-research-data/)
- [サーベイ自由記述の分析](/handbook/product/ux/experience-research/analyzing-survey-verbatim/)
- [リサーチインサイト](/handbook/product/ux/experience-research/research-insights/)
- [Dovetail でのリサーチインサイトの文書化](/handbook/product/ux/dovetail/)
- [UX リサーチのためのプロダクト分析](/handbook/product/ux/experience-research/product-analytics-for-ux-research/)

#### テンプレート

- [UX リサーチレポートテンプレート（内部リンク）](https://docs.google.com/presentation/d/1E8eZpf0T3p6Wf-aEmLjIOFZ_6jdvxc4eySwQ6FnHCZs/copy)
- [ユーザーインタビューのノートテイクテンプレート（内部リンク）](https://docs.google.com/spreadsheets/d/1_zFp_WXg9jM84dBqv4ARPFTtwPlJGxAi_IVDeED8VFY/copy)
- [ユーザビリティテストスクリプトテンプレート（内部リンク）](https://docs.google.com/document/d/15tvKXmFUxOT7fo550efuFLQ_ZSDZ2fyuVX_XTQSDBJk/copy)
- [ユーザビリティテストのレインボー分析チャートテンプレート（内部リンク）](https://docs.google.com/spreadsheets/d/1_bGO9uUxWL5dKe5r1vxTo4J4QAEHfp6mu7VIQDsTu_E/copy)
- [推奨事項アラインメント Figjam テンプレート（内部リンク）](https://www.figma.com/file/a21e4ULruQzsO4fyhZaQuU/Recommendations-Alignment-Workshop-Template?type=whiteboard&node-id=0-1&t=0LqkJLlll3QfLy41-0)
- [ユーザビリティベンチマーキングアラインメント Figjam テンプレート（内部リンク）](https://www.figma.com/file/QQ30XlTxTSFx80lq8UpNDo/Usability-Benchmarking-Alignment-Template?type=whiteboard&node-id=0-1&t=0O9YiYfk2KYVNGfv-0)
- [Auto Time on Task（内部リンク）](https://docs.google.com/spreadsheets/d/1rvhUcNlSzs6STv3EGWDddohxOo3F99ZRHN9W7wjBzIo/copy)

#### チェックリスト

- [ユーザーインタビュー（内部リンク）](https://docs.google.com/document/d/1Sg0-4U5W_iop-W1TWDZiECkGkhRkscLgsC-jFUhytBM/copy)
- [サーベイ（内部リンク）](https://docs.google.com/document/d/1Rj8LZuj-ATDKFt19F0dKy6J6-FokChMgCyr7OvfqZ_k/copy)
- [ユーザビリティテスト（内部リンク）](https://docs.google.com/document/d/14UWLmbZwVwHkTf1Ncza90WFWk4zLN05fglnNAP4oL9w/copy)

#### UX リサーチのトレーニング

- [Interview Carousel - 15 分ずつより良いインタビュアーになる](/handbook/product/ux/experience-research/interview-carousel/)
- [UX リサーチのシャドーイング](/handbook/product/ux/experience-research/research-shadowing/)
- [UX リサーチをいつ実施するかのトレーニング（内部 LevelUp コース）](https://levelup.csod.com/ui/lms-learning-details/app/course/2297b41c-3b7c-450a-913e-71f11f6da947)

#### UX リサーチャー向けリソース

- [GitLab で UX リサーチチームがどのように動くか](/handbook/product/ux/experience-research/how-uxr-team-operates/)
- [UX リサーチャーのペアリング](/handbook/product/ux/experience-research/ux-researcher-pairings/)
- [リサーチの優先順位付け](/handbook/product/ux/experience-research/research-prioritization/)
- [IP Assignment といつ提示するか](/handbook/product/ux/research-operations/ip-assignment/)
- [Research Operations Specialist の代役の入り方](/handbook/product/ux/research-operations/research-specialist-fill-in/)
- [UX リサーチの成長と開発](/handbook/product/ux/experience-research/ux-research-growth-and-development/)
- [UX リサーチ用の秘密保持契約](/handbook/product/ux/research-operations/ndas)
- [Actionable Insights についてコミュニティ貢献を促すブログ投稿の公開方法](/handbook/product/ux/experience-research/community-contributions-for-actionable-insights/)
- [UX リサーチワークショップの実施方法](/handbook/product/ux/experience-research/how-to-conduct-ux-research-workshops)
- [UX リサーチで AI を使う方法](/handbook/upstream-studios/how-we-work/ai-usage/)

#### UX Research Operations Coordinator 向けリソース

- [GitLab における UXR Operations Coordination](/handbook/product/ux/research-operations/)
- [リクルート方法](/handbook/product/ux/research-operations/recruitment-methods)
- [リサーチ参加への謝礼](/handbook/product/ux/research-operations/participation-gratuities/)
- [リサーチインサイトを広める](/handbook/product/ux/research-operations/shareouts)
- [ReOps の調達ベストプラクティス](/handbook/product/ux/research-operations/reops-procurement)
- [SaaS ユーザーを見つける](/handbook/product/ux/experience-research/finding-saas-users/)
- [UX リサーチのリクルートメール Tips](/handbook/product/ux/experience-research/recruiting-participants/recruiting-email-tips/)

#### UX リサーチチームが責任を持つ指標とプロセス

- [User Satisfaction Plus (USAT+) サーベイ](/handbook/product/ux/performance-indicators/usat-plus/)
  - [System Usability Scale](/handbook/product/ux/performance-indicators/system-usability-scale/)
  - [USAT+ Responder Outreach](/handbook/product/product-processes/#usat-responder-outreach)
- [リサーチベロシティの追跡](/handbook/product/ux/experience-research/tracking-research-velocity/)
- [ゴールド・シルバー・ブロンズの UX リサーチプロジェクトの追跡](/handbook/product/ux/experience-research/tracking-research-projects/)
- [Actionable Insights の追跡](/handbook/product/ux/experience-research/tracking-actionable-insights/)
- [Rapid Validations](/handbook/product/ux/experience-research/rapid-validations/)
