---
title: "Technical Writing"
description: "Technical Writing チームは、GitLab のエンジニア、プロダクトマネージャー、デザイナー、UX リサーチャーと連携し、機能や設計上の決定を、ユーザーのニーズに応える直感的で使いやすい UI テキストと、拡張可能なドキュメントに落とし込みます。"
upstream_path: /handbook/marketing/product-and-technical-marketing/technical-writing/
upstream_sha: "2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb"
translated_at: "2026-10-10T21:07:58.905067+00:00"
translator: claude
stale: false
lastmod: "2026-10-09T15:32:58+01:00"
---

Technical Writers は、ユーザーが GitLab の機能を理解し、操作し、導入する方法を左右するコンテンツに
専門知識を生かし、プロダクト体験を形作ります。
私たちは、[ドキュメント](https://docs.gitlab.com/)と UI テキストで GitLab の機能をどう伝えるかを定め、
コンテンツが明確で正確かつ使いやすいものになるようにします。
[急速に進化する DevSecOps プラットフォーム](https://about.gitlab.com/platform/)で、
言葉がユーザーの成功をどう形作るかについての深い理解を生かし、プロダクトの方向性に影響を与えます。

私たちのチームは、すべてのリリースサイクルで、全プロダクト領域のコンテンツ品質を維持します。
[ドキュメントロードマップ](https://gitlab.com/groups/gitlab-org/-/work_items/20730)に従い、人間の読者と AI ツールの両方のニーズを満たすため、
ドキュメントとプロセスを継続的に改善します。
そのために、次のことを行います。

- UX リサーチとユーザーフィードバックに基づき、コンテンツと見つけやすさを改善します。
- 特別なプロジェクトや [docs.gitlab.com](https://docs.gitlab.com/)の機能に関する戦略的な専門知識を提供します。
- AI ワークフロー、決定論的テスト、リントを使用し、ドキュメントの作成、管理、デプロイの運用を最適化します。

## ドキュメント {#documentation}

ドキュメントはプロダクトの不可欠な一部です。そのソースは、
[GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture)内のそれぞれのパスで
プロダクトとともに開発・保存されています。
ドキュメントは [docs.gitlab.com](https://docs.gitlab.com)（全プロダクトドキュメントの複数バージョンを提供）
と、各 GitLab インスタンスのドメインの `/help/` パス（そのインスタンスのバージョンに対応するコンテンツ）
で公開されています。

ドキュメントは、すべてのプロダクト情報の[単一の信頼できる情報源](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)です。
私たちは、完全で正確かつ使いやすいドキュメントを作成することを目標に、
[ドキュメントファースト方法論](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)に従っています。
ユーザーがサイトを閲覧する場合でも、AI エージェントがコンテキストを探す場合でも、
情報は見つけやすく、利用しやすく、貢献しやすいものでなければなりません。

ドキュメントへの貢献を始めるには、
[GitLab ドキュメントへの貢献](https://docs.gitlab.com/development/documentation/)を参照してください。
標準とガイドラインについては、[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)
と[推奨用語リスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)を参照してください。

## GitLab テクニカルライティングの基礎を学ぶ {#learn-gitlab-technical-writing-fundamentals}

GitLab ドキュメントの更新や作成に興味がある場合は、
[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals)コースの受講を検討してください。
このコースは GitLab チームメンバーとコミュニティ貢献者の両方を対象とし、次の内容を含みます。

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは推奨していますが、任意です。貢献を始める前に修了する必要はありません。誰でも貢献できます！

## チームについて {#about-us}

Technical Writing チームは、[ドキュメントサイト](https://docs.gitlab.com)と、そのコンテンツ、プロセス、ツールを管理しています。
チームには次のロールがあります。

- [Technical Writers](/job-description-library/product/technical-writer/)
- [Technical Writing Managers](/job-description-library/product/technical-writing-manager/)

## 連絡先 {#contact-us}

Slack チャンネルまたは専用の GitLab グループエイリアスを通じて連絡できます。
マージリクエストのレビューでは、ドキュメントページのメタデータを確認し、
[担当の Technical Writer](#assignments-to-devops-stages-and-groups)を直接アサインまたはメンションしてください。

### Slack チャンネル {#slack-channels}

チームは、ドキュメント全般およびチーム固有の Slack チャンネルを管理しています。

- `#docs`: GitLab ドキュメントに関する質問と一般的な議論、および GitLab チームメンバーによるドキュメントと UI テキストのレビュー依頼。
- `#docs-engineering`: ドキュメントサイトやその他のエンジニアリングプロジェクトに関する議論。
- `#docs-processes`: ドキュメントのプロセスに関する議論。
- `#docs-tooling`: ドキュメントのツールに関する議論。
- `#docs-site-changes-hugo`: [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)プロジェクトからの自動メッセージ。
- `#tw-team`: Technical Writing チームのチャット。
- `#tw-social`: Technical Writing チームの交流用チャット。

### GitLab グループエイリアス {#gitlab-group-aliases}

一部のチームメンバーは特定のグループに所属しています。GitLab の Issue またはマージリクエストで
それらのグループのメンバー全員に連絡するには、次のエイリアスを使用してください。

| エイリアス                                                          | GitLab グループ                                                                                                                                                                                            | 説明 |
|:---------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| `@gl-docsteam`                                                 | [gl-docsteam](https://gitlab.com/groups/gl-docsteam/-/group_members)                                                                                                                                    | Technical Writing チーム全体（リーダーシップ、ライター、エンジニア） |
| `@gitlab-org/tw-leadership`                                    | [gitlab-org/tw-leadership](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)                                                                       | リーダーシップ（Managers、Staff Technical Writers、Staff Engineers） |
| `@gitlab-org/technical-writing/tw-docops`                      | [gitlab-org/technical-writing/tw-docops](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)                                           | [DocOps](#docops-group) |
| `@gitlab-org/technical-writing/tw-eng`                      | [gitlab-org/technical-writing/tw-eng](https://gitlab.com/groups/gitlab-org/technical-writing/tw-eng/-/group_members?with_inherited_permissions=exclude)                                           | エンジニア |
| `@gitlab-org/maintainers/gitlab-development-kit/documentation` | [gitlab-org/maintainers/gitlab-development-kit/documentation](https://gitlab.com/groups/gitlab-org/maintainers/gitlab-development-kit/documentation/-/group_members?with_inherited_permissions=exclude) | [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit)のドキュメントをレビューする Technical Writer |

## 責任 {#responsibilities}

チームメンバーは特定の DevOps ステージグループに[アサイン](#assignments)されます。Technical Writing チームは、ドキュメントコンテンツと UI テキストの両方を作成すること、および他者がコンテンツを作成する際に支援することに広く責任を負っています。

- 多くのエンジニアリングプロジェクトのドキュメントを保守します。
- コミュニティのニーズに応えるため、必要に応じて新しいコンテンツを作成します。
- ドキュメント計画のレビューと共同作業を行い、ドキュメントのマージリクエストや最近マージされたドキュメントをレビューして、コンテンツがスタイルと言語の標準を満たすようにします。
- 完全性とスムーズなユーザー体験を確保するため、ドキュメントを再編成、刷新し、改善したドキュメントを執筆します。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなどの UI テキストについて、Product Designers と協働します。
- 毎月の[リリースノート](https://docs.gitlab.com/development/documentation/release_notes/)をレビューして公開します。

### 優先順位付け {#prioritization}

ステークホルダーのニーズを満たすための作業を評価する際、私たちは次の順序で優先順位を付けます。

1. 機能に関する作業（新機能のドキュメント化と UI テキストに関するガイダンスの提供を含む）
1. 四半期目標
1. ドキュメントの改善とバックログ Issue（ステージリードの作業、ドキュメントの技術的負債、トピックタイプの実装を含む）
1. その他すべてのタスク（DocOps タスクを含む）

### プロセス {#processes}

チームは、次のような効率的なプロセスの開発と保守に責任を負っています。

- GitLab ドキュメントを最新に保つためのプロセスが整備され、遵守されるようにします。
- ドキュメントのワークフローと Technical Writing チームのプロセスを維持し、改善します。
- ドキュメントの Issue をトリアージします。
- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)を改良し、GitLab ドキュメントとその貢献プロセスに関するコンテンツを継続的に改善します。
- コミュニティからのドキュメントへの貢献を効率的に処理しつつ、誰でもドキュメントに貢献しやすくします。

#### ドキュメントスタイルガイド {#documentation-style-guide}

[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)は、
プロダクトドキュメントとリリースノートに関する言語とスタイルのガイダンスを提供します。

誰でも、`~tw-style` ラベルを付けた Issue またはマージリクエストを作成し、
その Issue またはマージリクエストを[担当の Technical Writer](#assignments-to-other-projects-and-subjects)にアサインすることで、
ドキュメントスタイルの更新を提案できます。
GitLab チームメンバーは `#docs` Slack チャンネルも利用できます。

#### 翻訳と国際化 {#translation-and-internationalization}

誰でも、GitLab の英語から他言語への翻訳に貢献できます。
GitLab での翻訳と国際化について詳しくは、
[国際化](/handbook/marketing/product-and-technical-marketing/globalization/category-internationalization/)を参照してください。
翻訳貢献の手順については、[GitLab の翻訳](https://docs.gitlab.com/development/i18n/translation/)を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/)サイトは英語と日本語で利用できます。
ローカライゼーションプロセスについて詳しくは、
[プロダクトドキュメントのローカリゼーション](/handbook/marketing/product-and-technical-marketing/globalization/tech-docs-localization/)を参照してください。

## アサインメント {#assignments}

Technical Writers は、[担当グループ](#assignments-to-devops-stages-and-groups)と協働します。Technical Writers には[その他の戦略的プロジェクト](#assignments-to-other-projects-and-subjects)が割り当てられる場合もあります。

docs.gitlab.com の一部のコンテンツは、[Technical Writers によるレビューの対象外](#content-not-reviewed-by-technical-writers)です。

<a id="designated-technical-writers"></a>

### DevOps ステージとグループへのアサインメント {#assignments-to-devops-stages-and-groups}

担当の Technical Writer は、割り当てられた[グループ](/handbook/product/categories/)の相談窓口です。
他のチームメンバーと協働して、新しいドキュメントの計画、既存ドキュメントの編集、
ドキュメントへの変更案のレビュー、UI マイクロコピーの変更提案を行い、
ドキュメントが必要なあらゆる場面で、
その分野の専門家と連携します。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/_shortcodes/product/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="注" color="primary" %}}
**ドキュメントページのメタデータからこのページに案内された場合:**

- メタデータは開発者のオーナーシップを示すものではなく、適切な Technical Writer に案内するためのものです。
- 開発グループに所属し、ドキュメントページにメタデータを追加したい場合は、[`team-tasks` プロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/)で議論のための Issue を作成してください。
- ステージが `none` と記載されている場合は、[DRI がいるか](#assignments-to-other-projects-and-subjects)確認するか、[Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)を使用してください。
{{% /alert %}}

Technical Writers には、他のステージのドキュメントもレビューして改善することを推奨しますが、必須ではありません。
自分の担当ではないドキュメントに貢献する場合は、
担当の Technical Writer のオーナーシップを尊重し、ドキュメントに大きな変更を加える際には、
その人のレビューと承認を求めなければなりません。

Technical Writer が [PTO 中](#technical-writer-pto)の場合は、チーム全体がそのバックアップを務めます。

<!-- vale handbook.Spelling = NO -->

### セクションリード {#section-leads}

Technical Writing Managers は主要な[セクション](/handbook/product/categories/)に割り当てられます。
担当の Manager は、割り当てられたセクションの相談窓口です。リーダーシップグループでテクニカルライティングを代表し、
チームの連絡窓口を務めます。

{{% product/tech-writing-sections %}}

これらのセクションは、次の領域を表します。

| 領域                                          | 担当 Manager |
|:----------------------------------------------|:-----------------|
| AI, Core DevOps                               | {{< member-by-name "Sarah Watt" >}} |
| Analytics & Monetization, Platforms, Security | {{< member-by-name "Robert Landry" >}} |

### ステージリード {#stage-leads}

一部の Technical Writer は、特定の [DevOps ステージ](/handbook/product/categories/#devops-stages)の **ステージリード** としてアサインされます。

| ステージ            | アサインされたステージリード |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD（保留中） |
| Application Security Testing | TBD（保留中） |

ステージリードは、ステージ全体にわたって作業する場合もあれば、ステージ内のグループのサブセットを担当する場合もあります。
そのステージのグループにアサインされた他の Technical Writer を支援します。

ステージリードは次を行います。

- Technical Writers と同じ[責任](#responsibilities)を担いますが、担当ステージのドキュメントを先回りして作成し、改善することにより重点を置きます。
- 時間の約 70% を、担当グループの[新機能と機能強化](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change)に関して開発者が作成する Issue とマージリクエストのレビューに費やします。
- 残りの時間を次のことに費やします。
  - 担当**ステージ**のドキュメントのニーズや不足に対応するコンテンツの作成と改善
    （たとえば、チュートリアルやユースケースに基づくコンテンツの執筆、既存コンテンツの再構成、情報アーキテクチャへの取り組み）。
  - ステージ内の他のライターによるドキュメント改善への貢献の支援。
- 四半期の計画 Issue を完成させ、3 つのマイルストーンで対応を目指すコンテンツの不足や改善点をまとめます。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md)は、四半期開始前の最終月の 20 日に自動作成され、ステージ内のすべての Technical Writers に割り当てられます。
- 自ら推進する、または意見を提供するドキュメントのマージリクエストに、該当する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead)を付けます。このラベルにより、ステージリードのプロセスから生まれる改善を追跡できます。GitLab チームメンバーは [Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1)を閲覧できます。
- ドキュメントの改善について、他のステージリードと協働します。

ステージリードに割り当てるグループ数を減らすことで、先回りした作業に費やす時間を 30% から 70% にすることを目指します。

[ドキュメントの改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements)について、ステージリードは進行中および計画中のドキュメントの強化・追加を追跡する
Issue ボードの作成に責任を負います。

### DocOps グループ {#docops-group}

[DocOps](https://www.writethedocs.org/guide/doc-ops/)は DevOps に似ていますが、ドキュメント向けのものです。ドキュメントの
作成、管理、デプロイを効率化するためのアプローチです。

一部の Technical Writer は [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops)のメンバーであり、
次の責任を負っています。

- CI/CD パイプラインとローカルでのテストおよびリントを通じて、コンテンツの品質を維持します。
- 依頼があった場合、またはエンジニアがオンラインでない場合に、[Fullstack Engineers, Technical Writing](/job-description-library/product/ux-fullstack-engineer/)の運用タスクを支援します
  （たとえば、Pages の設定、デプロイ、スケジュールされたパイプライン、
  レビューアプリの支援）。
- リントツールの依存関係を更新し、その更新を upstream のドキュメントプロジェクトに展開します。
- [TW: DocOps Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing)を監視します。

DocOps グループは、ドキュメントサイトのコード、インフラ、ビルドスクリプトには責任を負いません。
DocOps タスクの[優先順位](#prioritization)は、機能に関する作業と四半期目標より低くなります。

DocOps グループへの参加は、チームの要件に基づきます。参加に興味がある場合は、マネージャーに相談してください。

#### ドキュメントテスト {#documentation-testing}

DocOps グループは、GitLab ドキュメントやその他の技術コンテンツの問題をテストするツールを
開発し、保守します。これらのツールには次のものがあります。

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイルのパーミッションと命名: `lint-doc.sh`

リンティングルールやツールへの変更を提案するには、次を行います。

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing)ラベルを付けた
   Issue またはマージリクエストを作成します。
1. Issue またはマージリクエストで [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops)をメンションします。

### 他のプロジェクトと対象へのアサインメント {#assignments-to-other-projects-and-subjects}

その他のプロジェクトや対象での協働については、次のとおりです。

| 対象                                                                              | 担当チームメンバー |
|:--------------------------------------------------------------------------------     |:--------------------------|
| ドキュメントサイト                                                               | {{< member-by-name "Sarah Watt" >}}, {{< member-by-name "Robert Landry" >}} |
| ドキュメントサイトのバックエンド（コード、自動化）                                    | {{< member-by-name "Hiru Fernando" >}} |
| ドキュメントの情報アーキテクチャ（コンテンツの再構成と左側のナビゲーションの大幅な変更） | {{< member-by-name "Fiona Neill" >}} |
| [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content)配下の [GitLab Design System ("Pajamas")](https://design.gitlab.com/)の情報 | {{< member-by-name "Fiona Neill" >}} |
| [ドキュメントスタイルガイド](#documentation-style-guide)                              | {{< member-by-name "Fiona Neill" >}} |
| [ドキュメントテスト](#documentation-testing) (DocOps/Vale/markdownlint)           | {{< member-by-name "Sarah Watt" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}, {{< member-by-name "Evan Read" >}}, {{< member-by-name "Lorena Ciutacu" >}}, {{< member-by-name "Marcel Amirault" >}} |

### Technical Writers がレビューしないコンテンツ {#content-not-reviewed-by-technical-writers}

Technical Writers は、次の場所にあるコンテンツをレビューしません。

- `doc/development` ディレクトリ。どの Maintainer でも `doc/development` ディレクトリ内のドキュメントをマージできます。
  唯一の例外は、ライターがガイドラインを保守する `doc/development/documentation` です。
- `doc/solutions` ディレクトリ。この情報は Solutions Architects が作成、レビュー、マージ、保守します。

### 安定したカウンターパート {#stable-counterparts}

Technical Writing チームは、チーム外の固定の担当窓口から `docs-gitlab-com` プロジェクトの支援を受けています。

| 対象          | 担当者 |
|:-----------------|:-------|
| バックエンドレビュー  | TBD |
| フロントエンドレビュー | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| サポート          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## ドキュメントサイトの指標と分析 {#docs-site-metrics-and-analytics}

Technical Writing チームは、満足度、見つけやすさ、有用性という 3 つの主要領域でドキュメントのパフォーマンスを追跡します。ユーザーアンケートとフィードバック、Google Analytics、コンテンツ監査、サイトの可用性監視など、複数のデータソースを組み合わせて使用します。

私たちは 6 つの主要プロジェクト（GitLab、Omnibus、Charts、Operator、Runner、CLI）の統計を追跡しています。

- ドキュメントプロジェクトには、3,100 ページ以上のドキュメントと 4,400,000 語以上の単語があります。
- 2020 年 5 月以降、ページ数は 165% 以上、単語数は 270% 以上増加しています。
- ページ数（30%）と単語数（30%）の最大の割合を占めるのは、左側のナビゲーションの **Use GitLab** セクションです。

GitLab チームメンバーは、[ドキュメント指標ダッシュボード](https://internal.gitlab.com/handbook/marketing/technical-writing/metrics-kpis/)
と [Data Studio ダッシュボード](https://datastudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD)で追加の指標を確認できます。ダッシュボードの手順については、[Google Analytics](https://internal.gitlab.com/handbook/marketing/technical-writing/google-analytics/)を参照してください。

## Technical Writer の PTO {#technical-writer-pto}

Technical Writers が[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を取るときは、チームの他のメンバーが業務を代行します。
代行するチームメンバーには、依頼について追加の背景情報が必要になる場合があります。
代行するライターは、自分のグループの優先事項と並行してこれらの依頼に対応します。

担当の Technical Writer が PTO 中の場合、グループは次の方法を利用できます。

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)
  で Technical Writer を選び、Issue またはマージリクエストでメンションまたはアサインします。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5)チャンネルに依頼を投稿します。
  対応可能な Technical Writer が自ら引き受けることができます。
- 具体的で時間的制約のある進行中の作業については、事前に調整した Technical Writer を
  Issue またはマージリクエストでメンションします。

長期の PTO（1 週間以上）では、Technical Writers と Managers は Technical Writer の
[業務代行 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md)を使用してください。
この Issue に、誰が、何を、どの方法で代行するかを具体的に記載できます。

### PTO を取るとき {#taking-pto}

PTO を取得する際、Technical Writer は次を行います。

1. [不在メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/)に、利用可能な業務代行の方法を反映します。
   次の目的で、GitLab.com のステータスを最新に保ちます。

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)が正確な提案を行えるようにします。
   - Technical Writing チームが Reviewer Roulette を確認したときに、全チームメンバーの PTO の状況を簡単に把握できるようにします。

1. 利用可能な業務代行の方法の参照先を示すメッセージを、グループの Slack チャンネルに送ります。例：

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/marketing/product-and-technical-marketing/technical-writing/#technical-writer-pto.
   For urgent _named time-sensitive task_ matters, ping _named Technical Writer_.
   ```

### マージリクエストキューのチェック {#merge-request-queue-checks}

Technical Writer が PTO を取る前に、そのライターまたはマネージャーは、ライターのマージリクエストキューを確認する担当者を決めてください。
担当者は次のいずれかを使って、少なくとも 1 日 1 回キューを確認してください。

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests)の **Merge requests** ページを、**Reviewer** でフィルタリングしたもの。
- 業務代行 Issue の[マージリクエストキュー](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17)のセクション。

キューの確認担当者が、自らレビューを行う必要はありません。キューを確認するときは、次の方法を取れます。

- レビューのためにマージリクエストを自分にアサインします。
- Reviewer Roulette を使い、レビューする他の Technical Writers を見つけます。

## 定期的にスケジュールされたタスク {#regularly-scheduled-tasks}

Technical Writers は、担当業務とともに、毎月次の定期タスクを
行います。

- **リリースノートとドキュメントリリース:** アサインされた Technical Writer は、リリースノートの[コンテンツをレビュー](https://docs.gitlab.com/development/documentation/release_notes/#review-a-feature-release-note)します。マイルストーンの終わりに、ライターは[リリースノートを公開](https://docs.gitlab.com/development/documentation/release_notes/#publish-release-notes)し、[ドキュメントサイトの毎月のリリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md)します。

- **ドキュメントプロジェクトの保守タスク：** 担当の Technical Writer は、ドキュメントサイトとそのコンテンツの保守タスクを行います。この作業を追跡するため、ライターは `team-tasks` プロジェクトで [`tw-monthly-tasks` テンプレートから Issue を作成](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks)します。保守 Issue の記載を超える作業が必要な場合は、Technical Writer が必要に応じてマージリクエストと追加の Issue を作成します。

### スケジュール {#schedule}

<!-- vale handbook.Spelling = NO -->

| バージョン | 月 | リリースノートとドキュメントリリース | メンテナンスタスク |
|---------|-------|----------------------------------------|-------------------|
| 19.9 | 2027 年 2 月 | TBD | {{< member-by-name "Evan Read" >}} |
| 19.8 | 2027 年 1 月 | {{< member-by-name "Evan Read" >}} | {{< member-by-name "Marcel Amirault" >}} |
| 19.7 | 2026 年 12 月 | {{< member-by-name "Marcel Amirault" >}} | {{< member-by-name "Isaac Durham" >}} |
| 19.6 | 2026 年 11 月 | {{< member-by-name "Ashraf Khamis" >}} | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | 2026 年 10 月 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Zach Painter" >}} |
| 19.4 | 2026 年 9 月 | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Roshni Sarangadharan" >}} |
| 19.3 | 2026 年 8 月 | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Fiona Neill" >}} |

<!-- vale handbook.Spelling = YES -->

### 以前のスケジュール {#previous-schedule}

<!-- vale handbook.Spelling = NO -->

| バージョン | 月 | リリースポストチェック | 毎月のドキュメントリリース | メンテナンスタスク |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.2 | 2026 年 7 月 | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} | {{< member-by-name "Achilleas Pipinellis" >}} |
| 19.1 | 2026 年 6 月 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Achilleas Pipinellis" >}} | {{< member-by-name "Jon Glassman" >}} |
| 19.0 | 2026 年 5 月 | {{< member-by-name "Achilleas Pipinellis" >}} | {{< member-by-name "Brendan Lynch" >}} | {{< member-by-name "Uma Chandran" >}} |
| 18.11| 2026 年 4 月 | {{< member-by-name "Jon Glassman" >}} | {{< member-by-name "Uma Chandran" >}} | {{< member-by-name "Ryan Lehmann" >}} |
| 18.10| 2026 年 3 月 | {{< member-by-name "Uma Chandran" >}} | {{< member-by-name "Russell Dickenson" >}} | {{< member-by-name "Brendan Lynch" >}} |
| 18.9 | 2026 年 2 月 | {{< member-by-name "Ryan Lehmann" >}} | {{< member-by-name "Kati Paizee" >}} | {{< member-by-name "Evan Read" >}} |
| 18.8 | 2026 年 1 月 | {{< member-by-name "Brendan Lynch" >}} | {{< member-by-name "Evan Read" >}} | {{< member-by-name "Marcel Amirault" >}} |
| 18.7 | 2025 年 12 月 | {{< member-by-name "Evan Read" >}} | {{< member-by-name "Marcel Amirault" >}} | {{< member-by-name "Ashraf Khamis" >}} |
| 18.6 | 2025 年 11 月 | {{< member-by-name "Marcel Amirault" >}} | {{< member-by-name "Ashraf Khamis" >}} | {{< member-by-name "Zach Painter" >}} |
| 18.5 | 2025 年 10 月 | {{< member-by-name "Ashraf Khamis" >}} | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Lysanne Pinto" >}} |
| 18.4 | 2025 年 9 月 | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Lysanne Pinto" >}} | {{< member-by-name "Isaac Durham" >}} |
| 18.3 | 2025 年 8 月 | {{< member-by-name "Russell Dickenson" >}} | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |

<!-- vale handbook.Spelling = YES -->

## レビュー {#reviews}

Technical Writer は、GitLab チームメンバーやコミュニティ貢献者が作成したドキュメント変更を含むマージリクエストのレビューにアサインされます。レビューは、[ステージグループ](/handbook/product/categories/#devops-stages)またはその他の専門分野への[Technical Writer のアサイン](#assignments)に従って、主題ごとにアサインされます。

### 編集レベル {#levels-of-edit}

Technical Writers は、次の編集レベルを使用します。

#### 軽度の編集 {#light-edit}

- パイプラインが通過し、明らかな文法、スペル、句読点の誤りがないことを確認する。

#### 中程度の編集 {#medium-edit}

- パイプラインが通過し、文法、スペル、句読点の誤りがないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。

#### 詳細な編集 {#heavy-edit}

中程度の編集のすべての項目に加え、次を行います。

- コンテンツが定義された[トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)に準拠していることを確認します。
- コンテンツがドキュメント全体に適切に組み込まれていることを確認します。
- UI テキストについては、[GitLab Design System (Pajamas)](https://design.gitlab.com/)と[推奨用語リスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)で定義された標準を満たしていることを確認します。

#### ライターが編集レベルを適用する方法 {#how-the-writers-apply-the-levels-of-edit}

品質、速度、リソースの制約のバランスを取るため、Technical Writers はドキュメントに応じて異なる編集レベルを適用します。

これらは一般的なガイドラインです。ライターは状況に応じて調整できます。

[Technical Writers がレビューしないコンテンツ](#content-not-reviewed-by-technical-writers)は、明示的に依頼されない限り、編集を**受けません**。
依頼があった場合は、**軽度の**編集を受けます。

次の項目は **軽度の**編集を受けます。

- 6 つの主要プロジェクト（GitLab、Omnibus、Charts、Operator、Runner、CLI）以外のドキュメント。
- 非推奨化と削除。
- 他の Technical Writers が作成したマージリクエスト。ただし、マージリクエストが四半期目標の一部である場合、
  または作成者がより詳細な編集を依頼した場合を除きます。

次の項目は **中程度の**編集を受けます。

- 日々のプロダクトドキュメントの依頼:
  - 新機能の作業（[ステージグループ](/handbook/product/categories/#devops-stages)から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- リリースノート

次の項目は **詳細な**編集を受けます。

- [トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)の再構成の取り組み
- 四半期目標
- UI テキスト

いずれの場合も、Technical Writer は、信頼できる情報源がドキュメントの技術的正確性を確認したことを確かめます。
Technical Writer 自身が必要な知識を持っているか、必要な検証を効率的に実施できる場合は、その信頼できる情報源として
活動できます。

### レビューワークフロー {#review-workflow}

[速度](/handbook/engineering/development/principles/#velocity)と品質のバランスを取るため、Technical Writers は次のワークフローを使用します。

- Technical Writer がマージリクエストを作成した場合、別の Technical Writer がレビューしてマージしなければなりません。
  - Technical Writer は自分のマージリクエストを承認またはマージしてはいけません。Maintainer アクセス権を持つ同僚に[レビューを依頼](#selecting-a-reviewer)してください。レビュアーが最終承認後にマージします。
    - この要件は、GitLab の[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)に沿い、GitLab の[変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)を満たします。
- その他の人（開発者、コミュニティメンバー、Support チームメンバーなど）がマージリクエストを作成した場合：
  - マージリクエストにドキュメントの変更のみが含まれる場合、Technical Writer は次のように対応します。
    - コンテンツをレビューし、提案を行います。
    - マージリクエストで作成者が明示的に同意しない限り、提案の適用やコミットのプッシュによって作成者のブランチに大きな変更を加えてはいけません。
      ブランチへのプッシュは、解決の難しいマージ競合を引き起こすことがあり、誤ってコンテンツを上書きする可能性もあります。
      ライターが変更を加えた場合は、正確性を確保するため、ライターがマージする前に作成者がその変更をレビューしなければなりません。
    - マージリクエストがほぼマージ可能な状態であれば、**Apply suggestion** 機能を使用して小さな提案を適用できます。
      句読点の欠落、誤字、パイプラインの失敗などは、追加のレビューなしで修正できます。
    - ドキュメントのマージリクエストの準備が整ったら、承認してマージします。
  - マージリクエストが主にコードの変更であり、ドキュメントの更新も含む場合、Technical Writer は次のように対応します。
    - ドキュメント、UI テキスト、エラーメッセージの変更について提案しますが、自ら提案を適用してはいけません。
      コードのマージリクエストに変更を加えると、パイプラインが失敗する場合があります。テクニカルライティングの提案に合わせて、エンジニアがコードや仕様を更新する必要があることが多いためです。
    - ドキュメントの変更がマージ可能であれば、マージリクエストを承認します。
    - コードの変更はマージしません。コードの変更もレビューするエンジニアが、マージリクエストをマージしなければなりません。
  - マージリクエストが主にドキュメントの変更であり、変更に合わせてリンクを更新する小規模なコードの変更も含む場合、Technical Writer は次のように対応します。
    - ドキュメントのみのマージリクエストと同じワークフローでコンテンツをレビューします。
    - マージリクエストに[必要な承認](#merge-rights)がすべてそろった場合に*限り*、マージできます。

レビューの対応時間について詳しくは、[レビュー応答 SLO](/handbook/engineering/workflow/code-review/#review-response-slo)を参照してください。

#### 自動グループメンションのトリアージ {#triaging-automated-group-mentions}

ボットまたはコミュニティ貢献者が `@gl-docsteam`、または CODEOWNERS に基づく複数の Technical Writers をメンションした場合、Technical Writer は次のように対応してください。

1. マージリクエストを確認し、[レビュアーの選定](#selecting-a-reviewer)のガイドラインに従って、自らレビューを引き受けるか、レビューすべき Technical Writer を決めます。
1. マージリクエストが：
   - レビュー可能な状態に見える場合は、選んだ Technical Writer をレビュアーにアサインします。
   - レビュー可能な状態に見えない場合は、準備ができたら選んだ Technical Writer をメンションするよう、貢献者に依頼するコメントを残します。
1. ボットのコメントを編集し、チームメンションをコード形式にします。例：``Hi `@gl-docsteam`! Please review this documentation merge request.`` これにより、他の Technical Writers がマージリクエストの参加者リストから外れ、通知を受け取らなくなります。To-Do 通知も更新され、ユーザー名がバッククォートで囲まれるため、To-Do リストから作業するチームメンバーは、マージリクエストが対応済みであることを見て判断できます。

### レビュアーの選定 {#selecting-a-reviewer}

ほとんどの場合、Technical Writers は [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)を使い、テクニカルライティングのレビュー担当者を探してください。ページのフィルターを Technical Writers のみが表示されるように設定し、**Assign events last 7 days** で並べ替えてください。

対応可能な Technical Writer を選ぶには、**Spin the wheel!** を選択します。選ばれた Technical Writer にすでに多くのレビューが割り当てられていたり、最近忙しかったりする場合は、もう一度 **Spin the wheel!** を選び、別のライターを選択できます。

コンテンツに特定の担当者が必要な場合、またはドキュメントスタイルガイドなど DRI のいるページのマージリクエストの場合は、その人にレビューをアサインできます。

### Technical Writer の対応可否の判断 {#determining-technical-writer-availability}

Technical Writers が多忙でチーム全般のマージリクエストのレビューに対応できず、自分のグループや他の優先事項に集中する必要がある場合があります。その場合は、GitLab のステータスで **Busy** チェックボックスを選択し、🔴（`:red_circle:`）絵文字を追加することで、Reviewer Roulette に名前が表示されないようにできます。

たとえば、あるマイルストーンのリリース担当の Technical Writer は、リリースノートやその他の要件に集中するため、[リリース日](/handbook/engineering/releases/)の前の週に 多忙インジケーターをステータスに追加するべきです。

それ以外の場合も、Technical Writers はプロフィールに多忙インジケーターを追加したり削除したりできますが、1 回につき 2 日以内とし、使用頻度は 2 週間に 1 回までにしてください。（リリース中の多忙インジケーターの使用は、この制限に含まれません。）Reviewer Roulette に参加しない期間がさらに必要な場合は、必ずマネージャーに相談してください。マネージャーが支援します（多忙インジケーターの追加使用を含む場合があります）。

## マージ権限 {#merge-rights}

Technical Writing チームには、そのロールの一部として、GitLab プロジェクトへのマージ権限（[Maintainer アクセス](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)を通じて）が付与されています。
すべての開発者が Maintainer アクセスを得るわけではないため、Technical Writer はこの権限を責任を持って使用しなければなりません。

Maintainer として、Technical Writer がマージするものは次に限定しなければなりません。

- 通常は Markdown 形式のファイルに含まれるドキュメント。
- 適切なエンジニアが承認した、コードファイル内の UI テキスト、エラーメッセージ、リンクの更新。
  次の場合は、エンジニアの承認を省略し、[Technical Writing のリーダーシップチーム](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)
  または [Technical Writing の DocOps チーム](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)のメンバーにコードの変更の承認を依頼できます。
  - ドキュメントのマージリクエストに含まれるコードの変更が、ドキュメントファイルやアンカー名の変更に合わせたリンク修正のみであり、かつ
  - パイプラインが正常に完了している場合。
- リンターなどのドキュメント用ツールと設定。
- [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)プロジェクトへの変更。
  コードのレビューとマージにはエンジニアが対応できます。

さらに、Technical Writer は次を行わなければなりません。

- パイプラインが失敗したマージリクエストは決してマージしません。
- マージ前に、適切なラベルとマイルストーンが設定され、マージリクエストが完成していることを確認します。
- DRI がマージリクエストをレビューして承認したことを確認します。

## Technical Writer のオンボーディング {#onboarding-technical-writers}

新しい Technical Writer は、オンボーディング中にグループの業務を見学する担当に割り当てられ、
その後、研修生として貢献を始めます。経験豊富な Technical Writers が、このプロセスを通じて指導します。

オンボーディングのフェーズとタスクについて詳しくは、[Technical Writer オンボーディングテンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md)を参照してください。

## スタンドアップ {#standups}

私たちは、週 2 回のスタンドアップ（あなたのローカルタイムゾーンで火曜日と木曜日の午前 10 時）と
毎週のランダムな質問（水曜日の正午に実行）のために [Geekbot](https://app.geekbot.com/dashboard/home)を設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

新しいメンバーを追加するには：

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、
   求められたら Slack アカウントでサインインします。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members)
   スタンドアップを選択し、**Add participants** 領域でメンバーを名前で検索します。
1. 新しく追加したメンバーに **Manage** アクセス権を付与し、右上の
   **Save** を選択します。
1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?members)
   スタンドアップでも、これらの手順を繰り返します。

Technical Writing チームのメンバーとして、ランダムな水曜日の質問のリストに自分の
質問を追加することが推奨されています！追加するには、次を行います。

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions)スタンドアップにアクセスします。
1. **Questions** セクションに「This is a random set of questions」という質問が表示されます。
   右側の 2 つの矢印にカーソルを合わせ、**Edit** を選択します。
1. 一番下までスクロールして、**Add question** を選択します。
1. 質問を入力します。
1. **Save questions** を選択します。

## コミュニティ貢献の機会 {#community-contribution-opportunities}

[ドキュメントのコンテンツ](https://docs.gitlab.com/development/contributing/)
と[ドキュメントサイト](https://docs.gitlab.com)への貢献を歓迎します。

コミュニティ貢献について詳しくは、次を参照してください。

- [取り組める Issue の一覧](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [`docs-gitlab-com` プロジェクト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## docs.gitlab.com で緊急のコンテンツ更新を行う {#make-an-urgent-content-update-on-docsgitlabcom}

ドキュメントサイトは毎時更新されます。まれに、ドキュメントの更新を
より早く公開する必要がある場合があります。緊急の更新が必要な場合は、[ドキュメントサイトを手動でデプロイする](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production)手順に従ってください。

## ドキュメントウェブサイトの問題やインフラの課題を報告する {#report-a-docs-website-problem-or-infrastructure-issue}

ウェブサイトのバグや機能リクエストは、[`docs-gitlab-com` プロジェクトの Issue 一覧](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues)で報告してください。

障害やウェブサイトの可用性の問題については、[ドキュメントサイトのインフラ](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md)を参照してください。

## 関連トピック {#related-topics}

- [ドキュメントのワークフロー](https://docs.gitlab.com/development/documentation/workflow/)
- [ローカル環境のセットアップ](https://docs.gitlab.com/development/documentation/authoring_environment/)
- [ドキュメントサイトのアーキテクチャ](https://docs.gitlab.com/development/documentation/site_architecture/)
