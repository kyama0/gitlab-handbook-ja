---
title: "テクニカルライティング"
upstream_path: /handbook/product/ux/technical-writing/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T08:58:35-06:00"
---

GitLab のテクニカルライティングチームは、開発者、プロダクトマネージャー、コミュニティと協力してプロダクトドキュメントを作成しています。

優れたドキュメントは、GitLab の顧客、ユーザー、管理者の進化するニーズに応えます。機能やベストプラクティスについて読者を教育します。GitLab を効率的に設定、利用、トラブルシューティングできるようにします。テクニカルライティングチームは [docs.gitlab.com](https://docs.gitlab.com) サイトとそのコンテンツ、プロセス、ツールを管理しています。

[ドキュメントロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363) は、コンテンツと[ドキュメントウェブサイト](https://docs.gitlab.com/)の両方の改善に向けた私たちの取り組みを推進しています。たとえば、docs.gitlab.com で情報を見つけにくいことを認識しています。ドキュメントサイトのプラットフォームを再構築し、より良いタスクベースの情報を提供し、コンテンツを見つけやすくするためのロードマップ項目と OKR があります。これらの大規模プロジェクトは、機能ドキュメントに加えて完了することで、ドキュメントのユーザーエクスペリエンスに継続的・反復的な改善をもたらします。

誰でもドキュメントに貢献できます。私たちの [GitLab ドキュメントガイドライン](https://docs.gitlab.com/development/documentation/)に従ってください。

## About Us

チームの規模やチームメンバーの詳細については、[Meet Our Team](/handbook/company/team/?departmentOrDivision=Technical+Writing) を Technical Writing でフィルタリングして参照してください。チームのロールには次のものがあります。

- Intermediate、Senior、Staff レベルの [Technical Writers](/job-description-library/product/technical-writer/)。
- [Technical Writing Managers](/job-description-library/product/technical-writing-manager/)。
- [Fullstack Engineers, Technical Writing](/job-description-library/product/ux-fullstack-engineer/)。
- [Technical Writing Director](/job-description-library/product/technical-writing-manager/#director-technical-writing)。

## Contact Us

私たちには、各種 Slack チャンネルまたは専用の GitLab
グループエイリアスを通じて連絡できます。`@gl-docsteam` は大規模なグループです。MR レビューについては、ドキュメントページのメタデータを確認し、
[指定されたテクニカルライター](#assignments-to-devops-stages-and-groups)を直接アサインするか @ メンションしてください。

### Slack channels

チームは、一般的なドキュメント関連およびチーム固有の Slack チャンネルを管理しています。

- `#docs`: GitLab ドキュメントに関する質問や一般的な議論、および GitLab チームメンバーによるドキュメント・UI テキストのレビュー依頼。
- `#docs-engineering`: ドキュメントウェブサイトやその他のエンジニアリングプロジェクトに関する議論。
- `#docs-processes`: ドキュメントプロセスに関する議論。
- `#docs-tooling`: ドキュメントツールに関する議論。
- `#docs-site-changes-hugo`: [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトからの自動メッセージ。
- `#tw-team`: テクニカルライティングチームのチャット。
- `#tw-social`: テクニカルライティングチームのソーシャルチャット。

### GitLab group aliases

一部のチームメンバーは特定のグループに属しています。GitLab の Issue や MR で
それらのグループのメンバー全員に連絡するには、次のエイリアスを使用してください。

| Alias                                                          | GitLab group                                                                                                                                                                                            | Description |
|:---------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| `@gl-docsteam`                                                 | [gl-docsteam](https://gitlab.com/groups/gl-docsteam/-/group_members)                                                                                                                                    | テクニカルライティングチーム全体（リーダーシップ、ライター、エンジニア） |
| `@gitlab-org/tw-leadership`                                    | [gitlab-org/tw-leadership](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)                                                                       | リーダーシップ（Manager、Staff テクニカルライター、Staff エンジニア） |
| `@gitlab-org/technical-writing/tw-docops`                      | [gitlab-org/technical-writing/tw-docops](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)                                           | [DocOps](#docops-group) |
| `@gitlab-org/technical-writing/tw-eng`                      | [gitlab-org/technical-writing/tw-eng](https://gitlab.com/groups/gitlab-org/technical-writing/tw-eng/-/group_members?with_inherited_permissions=exclude)                                           | エンジニア |
| `@gitlab-org/maintainers/gitlab-development-kit/documentation` | [gitlab-org/maintainers/gitlab-development-kit/documentation](https://gitlab.com/groups/gitlab-org/maintainers/gitlab-development-kit/documentation/-/group_members?with_inherited_permissions=exclude) | [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit) のドキュメントをレビューするテクニカルライター |

## Learn GitLab tech writing fundamentals

GitLab ドキュメントの更新や作成に興味がある場合は、
[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals) を参照してください。
このコースは GitLab チームメンバーとコミュニティ貢献者の両方を対象としており、次の内容を含みます。

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは docs.gitlab.com への貢献に **必須ではありません**。誰でも貢献できます！

提案やフィードバックについては、[フィードバック Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/445) を参照してください。

## Documentation

GitLab ドキュメントは、ユーザー、管理者、意思決定者が GitLab の機能について学び、
[DevOps のニーズ](https://about.gitlab.com/stages-devops-lifecycle/)を満たすために GitLab を最適に
実装・利用できるよう支援するために作られています。

ドキュメントはプロダクトの不可欠な一部です。そのソースは、
[GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture)内のそれぞれのパスで
プロダクトとともに開発・保存されています。
ドキュメントは [docs.gitlab.com](https://docs.gitlab.com)（全プロダクトドキュメントの複数バージョンを提供）
と、各 GitLab インスタンスのドメインの `/help/` パス（そのインスタンスのバージョンに対応するコンテンツ）
で公開されています。

ドキュメントは、すべてのプロダクト情報の
[単一の信頼できる情報源（single source of truth）](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)
です。
私たちは、完全で正確かつ使いやすいドキュメントの作成を目標として、
[ドキュメントファースト方法論](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)に従っています。
ドキュメントは、必要な情報を簡単に閲覧・検索できるものであるべきであり、
ドキュメント自体への貢献も簡単であるべきです。

ドキュメントへの貢献を始めるには、
[Contribute to the GitLab documentation](https://docs.gitlab.com/development/documentation/) を参照してください。
標準やガイドラインについては、[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)
と[ワードリスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)を参照してください。

## Responsibilities

チームメンバーは特定の DevOps ステージグループに[アサイン](#assignments)されます。テクニカルライティングチームは、ドキュメントコンテンツと UI テキストの両方を作成すること、および他者がコンテンツを作成する際に支援することに広く責任を負っています。

- 多くのエンジニアリングプロジェクトのドキュメントを保守する。
- コミュニティのニーズに応えるために、必要に応じて新しいコンテンツを作成する。
- ドキュメント計画をレビュー・協働し、ドキュメントのマージリクエストや最近マージされたドキュメントをレビューし、コンテンツがスタイルと言語の標準を満たすことを確認する。
- 完全性とスムーズなユーザーエクスペリエンスを確保するために、改善されたドキュメントを再編成・刷新・執筆する。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなど、UI テキストについてプロダクトデザイナーと協働する。
- 毎月の[リリースポスト](https://docs.gitlab.com/development/documentation/release_notes/)の Technical Writing Lead を務める。

### Prioritization

ステークホルダーのニーズを満たすための作業を評価する際、私たちは次の順序で優先順位を付けます。

1. 機能作業（新機能のドキュメント化、UI テキストに関するガイダンスの提供を含む）
1. OKR 関連作業
1. ドキュメントの改善とバックログ Issue（ステージリード作業、ドキュメントの技術的負債、コンテンツトピック設計の実装を含む）
1. その他すべてのタスク（DocOps タスクを含む）

### Processes

チームは、次のような効率的なプロセスの開発と保守に責任を負っています。

- GitLab ドキュメントを最新に保つためのプロセスが整備され、遵守されていることを確認する。
- プロダクト・エンジニアリングとのドキュメントワークフロー、ドキュメントチームのワークフロー、作業分担に従い、それらを最適化する。
- ドキュメント関連の Issue をトリアージする。
- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)を改良し、GitLab ドキュメントとその貢献プロセスに関するコンテンツを継続的に改善する。
- コミュニティからのドキュメント貢献を効率的に処理しつつ、誰でもドキュメントに貢献しやすくする。

#### Style Guide

[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)は、
プロダクトドキュメントとリリースポストに関する言語とスタイルのガイダンスを提供します。

どのテクニカルライター（またはその他の貢献者）も、`~tw-style` ラベルを付けた Issue または
マージリクエストを作成し、その Issue または MR を Style Guide DRI にアサインすることで、
ドキュメントスタイルの更新や追加を提案できます。GitLab チームメンバーは `#docs` Slack チャンネルも利用できます。

完了したスタイル関連の Issue を追跡するには、次の検索を使用してください。

- [GitLab プロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [GitLab プロジェクトのスタイル MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [テクニカルライティングプロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)

#### Translation and internationalization

誰でも、GitLab の英語から他言語への翻訳に貢献できます。
GitLab での翻訳と国際化について詳しくは、
[internationalization](/handbook/marketing/localization/category_internationalization/) を参照してください。
翻訳貢献の手順については、[translating GitLab](https://docs.gitlab.com/development/i18n/translation/) を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/) サイトは英語と日本語で利用できます。
ローカライゼーションプロセスについて詳しくは、
[product documentation localization](/handbook/marketing/localization/tech_docs_localization/) を参照してください。

## Assignments

テクニカルライター（TW）は、[アサインされたグループ](#assignments-to-devops-stages-and-groups)と協働します。TW には[その他の作業](#assignments-to-other-projects-and-subjects)もアサインされる場合があります。

docs.gitlab.com の一部のコンテンツは、[TW のレビュー対象外](#content-not-reviewed-by-tws)です。

<a id="designated-technical-writers">

### Assignments to DevOps Stages and Groups

指定されたテクニカルライターは、アサインされた[グループ](/handbook/product/categories/)の
頼れる窓口です。新しいドキュメントの計画、既存ドキュメントの編集、
ドキュメントへの変更案のレビュー、UI マイクロコピーの変更提案について
他のチームメンバーと協働し、ドキュメントが必要なあらゆる場面で
サブジェクトマターエキスパート（SME）のパートナーとして広く活動します。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="Note" color="primary" %}}
**ドキュメントページのメタデータからこのページに案内された場合:**

- メタデータは開発者の所有権を示すものではなく、適切なテクニカルライターに案内することを目的としています。
- 開発グループの一員で、ドキュメントページにメタデータを追加したい場合は、[TW チームタスクプロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/)に Issue を作成して議論してください。追加の議論は [Issue 547](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/547) にあります。
- ステージが `none` と記載されている場合は、[DRI がいるか](#assignments-to-other-projects-and-subjects)確認するか、[roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用してください。
{{% /alert %}}

テクニカルライターは他のステージのドキュメントもレビュー・改善することが推奨されますが、
必須ではありません。自分が所有していないドキュメントに貢献する場合は、
アサインされた TW の所有権を尊重し、ドキュメントに重要な変更を加える際は
そのレビューと承認を必ず依頼しなければなりません。

テクニカルライターが [PTO 中](#technical-writer-pto)の場合は、チーム全体がそのバックアップを務めます。

<!-- vale handbook.Spelling = NO -->

### Section leads

Technical Writing Manager は主要な[セクション](/handbook/product/categories/)にアサインされます。
指定された Manager は、アサインされたセクションの頼れる窓口です。リーダーシップグループで
テクニカルライティングを代表し、チームの連絡窓口として活動します。

{{% product/tech-writing-sections %}}

これらのセクションは次を表します。

| Area                                             | Assigned Manager |
|:-------------------------------------------------|:--------------------|
| AI, Analytics & Monetization, Platforms | {{< member-by-name "Sarah Watt" >}} |
| Core DevOps, Security  | {{< member-by-name "Robert Landry" >}} |

### Stage leads

{{< alert type="note" >}}

このセクションでは、FY2025 の Q1 と Q2 に試験的に実施し、2025 年の Q3 でより広く展開したプロセスについて概説します。このプロセスは変更される可能性があります。

{{< /alert >}}

一部のテクニカルライターは、特定の [DevOps ステージ](#stage-leads)の **ステージリード** としてアサインされます。

| Stage            | Assigned stage lead |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD (on hold) |
| Application Security Testing | TBD (on hold) |

ステージリードは、ステージ全体にわたって作業する場合もあれば、ステージ内のグループのサブセットを担当する場合もあります。
彼らは、そのステージのグループにアサインされた他のテクニカルライターを支援します。

ステージリードは次を行います。

- テクニカルライターと同じ[責任](#responsibilities)を負いますが、アサインされたステージのドキュメントを積極的に作成・改善することにより重点を置きます。
- 約 70% の時間を、アサインされたグループの[新機能や機能強化](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change)について開発者が作成した Issue やマージリクエストのレビューに費やします。
- 残りの時間を次に費やします。
  - アサインされた **ステージ** のドキュメントのニーズやギャップに対応するためのコンテンツの作成・改良
    （たとえば、チュートリアルやユースケースベースのコンテンツの執筆、既存コンテンツの再構築、情報アーキテクチャの作業）。
  - ステージ内の他のライターがドキュメント改善に貢献できるよう支援する。
- 3 つのマイルストーンにわたって対応を目指すコンテンツのギャップと改善を概説する四半期計画 Issue を完了します
  （たとえば、[FY25Q3 Stage lead planning issue: Secure](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1067)）。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md) は、四半期開始前の最終月の 20 日に自動的に作成され、そのステージのすべてのテクニカルライターにアサインされます。
- 自分が推進または意見を提供するドキュメント改善 MR に、該当する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead)を適用します。このラベルにより、パフォーマンス指標（PI）の 1 つとして、ステージリードプロセスから生まれた改善を追跡できます。[Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1)は GitLab チームメンバーのみアクセス可能です。
- ドキュメント改善について他のステージリードと協働します。

時間の経過とともに、ステージリード 1 人あたりにアサインされるグループが少なくなることで、ステージリードが 30% ではなく 70% の時間を積極的な作業に費やすことが理想的な目標です。

[ドキュメントの改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements)について、ステージリードは進行中および計画中のドキュメントの強化・追加を追跡する
Issue ボードの作成に責任を負います。

### DocOps group

[DocOps](https://www.writethedocs.org/guide/doc-ops/) は DevOps に似ていますが、ドキュメント向けのものです。ドキュメントの
作成、管理、デプロイを効率化するためのアプローチです。

一部のテクニカルライターは [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops)のメンバーであり、
次の責任を負っています。

- CI/CD パイプラインやローカルマシンでのテスト・リンティングを通じて、コンテンツの品質を維持する。
- 依頼があったとき、またはエンジニアがオンラインでないときに、[Docs Engineers](/job-description-library/product/ux-fullstack-engineer/) の運用タスクを支援する。たとえば、Pages の設定、デプロイ、スケジュールされたパイプライン、
  レビューアプリの支援。
- リンティングツールの依存関係を更新し、それらの更新を上流のドキュメントプロジェクトに展開する。
  DocOps グループは、ドキュメントウェブサイトのコード、インフラ、ビルドスクリプトには責任を負いません。
  DocOps タスクは、機能作業や OKR 関連作業よりも下位に[優先順位付け](#prioritization)されます。
- [TW: DocOps Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing)を監視する。

DocOps グループへの参加は、チームの要件に基づきます。参加に興味がある場合は、マネージャーに相談してください。

#### Documentation testing

DocOps グループは、GitLab のドキュメント（およびその他の技術コンテンツ）の問題をテストするための
ツールキットを開発・保守しています。これらのツールキットには、次のものが含まれます（ただしこれらに限りません）。

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイルのパーミッションと命名: `lint-doc.sh`

リンティングルールやツールへの変更を提案するには、次を行います。

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing) ラベルを付けた
   Issue またはマージリクエストを作成する。
1. Issue または MR で [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops) をメンションする。

DocOps グループは、この作業を他の[テクニカルライティングの優先事項](#prioritization)とバランスさせます。

### Assignments to other projects and subjects

その他のプロジェクトや主題での協働については、次のとおりです。

| Subject                                                                              | Assigned Technical Writer |
|:--------------------------------------------------------------------------------     |:--------------------------|
| The documentation site                                                               | {{< member-by-name "Sarah Watt" >}}, {{< member-by-name "Robert Landry" >}} |
| The documentation site backend (code, automation)                                    | {{< member-by-name "Hiru Fernando" >}} |
| The documentation's information architecture (content restructuring and major changes to left nav) | {{< member-by-name "Fiona Neill" >}} |
| [GitLab Design System ("Pajamas")](https://design.gitlab.com/) information under [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content) | {{< member-by-name "Fiona Neill" >}} |
| [Style Guide](#style-guide)                                                          | {{< member-by-name "Fiona Neill" >}} |
| [Documentation testing](#documentation-testing) (DocOps/Vale/markdownlint)           | {{< member-by-name "Sarah Watt" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}, {{< member-by-name "Achilleas Pipinellis" >}}, {{< member-by-name "Evan Read" >}}, {{< member-by-name "Jon Glassman" >}}, {{< member-by-name "Lorena Ciutacu" >}}, {{< member-by-name "Marcel Amirault" >}} |

### Content not reviewed by TWs

テクニカルライターは、次の場所のコンテンツはレビューしません。

- `doc/development` ディレクトリ。`doc/development` ディレクトリのドキュメントは、どの Maintainer もマージできます。
  唯一の例外は `/doc/development/documentation` で、ここはライターがガイドラインを保守しています。
- `doc/solutions` ディレクトリ。この情報は、Solutions Architect によって作成、レビュー、マージ、保守されます。

### Stable counterparts

テクニカルライティングチームは、チーム外の stable counterpart から `docs-gitlab-com` プロジェクトの支援を受けています。

| Subject          | Person |
|:-----------------|:-------|
| Backend reviews  | TBD |
| Frontend reviews | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| Support          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## Docs site stats and analytics

テクニカルライティングチームは、満足度、見つけやすさ、有用性という 3 つの重要な領域でドキュメントのパフォーマンスを追跡しています。ユーザーアンケート、Google Analytics、ユーザーフィードバック、コンテンツ監査、サイトの可用性など、複数の指標を組み合わせて使用しています。

私たちは 6 つの主要プロジェクト（GitLab、Omnibus、Charts、Operator、Runner、CLI）の統計を追跡しています。

- ドキュメントプロジェクトには 3,100 を超えるドキュメントページと 4,400,000 を超える単語があります。
- 2020 年 5 月以降、ページ数は 165% 以上、単語数は 270% 以上増加しています。
- ページ（30%）と単語（30%）の大部分は、左ナビゲーションの **Use GitLab** セクションにあります。

GitLab チームメンバーは、[ドキュメントメトリクスページ](https://internal.gitlab.com/handbook/product/ux/technical-writing/metrics-kpis/)
と docs.gitlab.com の [LookerStudio ダッシュボード](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD)で追加のドキュメントメトリクスを表示できます。ダッシュボードの手順については、[Google Analytics](https://internal.gitlab.com/handbook/product/ux/technical-writing/google-analytics/) を参照してください。

## Technical Writer PTO

テクニカルライターが[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を取得する際は、チームの他のメンバーがそのカバーを提供します。
これらのチームメンバーは、依頼に対して追加のコンテキストを必要とする場合があります。依頼は、*その* 主要グループのステージ／グループおよび
機能の優先事項のリストに組み込まれます。

アサインされたテクニカルライターが PTO 中にグループが支援を得る方法は次のとおりです。

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)。
  ルーレットで選ばれたテクニカルライターに、Issue やマージリクエストでメンションまたはアサインできます。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5) チャンネルでの依頼。対応可能なボランティアのテクニカルライターが
  対応します。
- 特定の、時間的制約のある進行中の作業について支援が必要な場合は、事前に手配したテクニカルライター。そのテクニカルライターに
  Issue やマージリクエストでメンションして参加してもらえます。

長期 PTO（1 週間以上）を取得する場合、テクニカルライターと Manager は Technical Writer
[coverage issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md) を使用するべきです。
この Issue には、誰が、何を、どのような手段でカバーを提供するかを正確に記載できます。

### Taking PTO

PTO を取得する際、テクニカルライターは次を行います。

1. [不在通知メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/)に、利用可能なカバー手段を反映させます。
   次を確実にするため、GitLab.com のステータスを最新に保つことが重要です。

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs) が正確な提案を行えるようにする。
   - TW チームが Roulette ダッシュボードを確認する際に、全チームメンバーの PTO ステータスを簡単に把握できるようにする。
1. グループの Slack チャンネルに、利用可能な手段の場所を示すメッセージを送信します。たとえば、次のとおりです。

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/product/ux/technical-writing/#technical-writer-pto for ways to get help.
   For urgent _named time-sensitive task_ matters, ping _named TW_.
   ```

### Merge request queue checks

テクニカルライターが PTO に入る前に、そのライターまたはマネージャーは、誰がそのライターの MR キューをチェックするかを決定するべきです。
アサインされた人は、次のいずれかを使用して、少なくとも 1 日 1 回キューをチェックするべきです。

- [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests)の **Merge requests** ページを **Reviewer** でフィルタリングしたもの。
- coverage issue 内の[マージリクエストキュー](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17)セクション。

アサインされたライターが作業自体を行う必要はありません。キューをチェックする際、次を行えます。

- レビューのために MR を自分にアサインする。
- Roulette を使用してレビューする他の TW を見つける。

## Regularly scheduled tasks

テクニカルライターの通常アサインされている作業に加えて、定期的に完了する必要がある
反復タスクがあります。

- **リリースポストの構造チェック:** Technical Writing Lead が、各マイルストーンの終わりに公開されるリリースポストの[コンテンツをレビュー](https://docs.gitlab.com/development/documentation/release_notes/)します。アサインについては、[Release Post Scheduling](/handbook/product/ux/technical-writing/#schedule) ページを参照してください。
- **毎月のドキュメントリリース:** 各マイルストーンの終わりに、テクニカルライターが[ドキュメントサイトの毎月のリリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md)します。このタスクにアサインされるテクニカルライターは、前のマイルストーンでリリースポストの構造チェックを完了したライターです。
- **ドキュメントプロジェクトのメンテナンスタスク:** 毎月、1 人のテクニカルライターが、ドキュメントサイトとそのコンテンツのメンテナンスタスクを完了するようにアサインされます。これには、`technical-writing` プロジェクトで [`tw-monthly-tasks` テンプレートを使用して新しい Issue を作成](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks)し、メンテナンス作業を追跡することが含まれます。メンテナンス Issue に記載された内容を超える追加作業が必要な場合、テクニカルライターは必要に応じてマージリクエストや追加の Issue を作成します。

### Schedule

<!-- vale handbook.Spelling = NO -->

| Version | Month | Release post check | Monthly doc release | Maintenance tasks |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.7 | December 2026 | TBD | TBD | {{< member-by-name "Isaac Durham" >}} |
| 19.6 | November 2026 | TBD | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | October 2026 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Zach Painter" >}} |
| 19.4 | September 2026 | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Roshni Sarangadharan" >}} |
| 19.3 | August 2026 | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} |
| 19.2 | July 2026 | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} | {{< member-by-name "Achilleas Pipinellis" >}} |
| 19.1 | June 2026 | {{< member-by-name "Lysanne Pinto" >}} | {{< member-by-name "Achilleas Pipinellis" >}} | {{< member-by-name "Jon Glassman" >}} |
| 19.0 | May 2026 | {{< member-by-name "Achilleas Pipinellis" >}} | {{< member-by-name "Brendan Lynch" >}} | {{< member-by-name "Uma Chandran" >}} |
| 18.11| April 2026 | {{< member-by-name "Jon Glassman" >}} | {{< member-by-name "Uma Chandran" >}} | {{< member-by-name "Ryan Lehmann" >}} |
| 18.10| March 2026 | {{< member-by-name "Uma Chandran" >}} | {{< member-by-name "Russell Dickenson" >}} | {{< member-by-name "Brendan Lynch" >}} |
| 18.9 | February 2026 | {{< member-by-name "Ryan Lehmann" >}} | {{< member-by-name "Kati Paizee" >}} | {{< member-by-name "Evan Read" >}} |
| 18.8 | January 2026 | {{< member-by-name "Brendan Lynch" >}} | {{< member-by-name "Evan Read" >}} | {{< member-by-name "Marcel Amirault" >}} |
| 18.7 | December 2025 | {{< member-by-name "Evan Read" >}} | {{< member-by-name "Marcel Amirault" >}} | {{< member-by-name "Ashraf Khamis" >}} |
| 18.6 | November 2025 | {{< member-by-name "Marcel Amirault" >}} | {{< member-by-name "Ashraf Khamis" >}} | {{< member-by-name "Zach Painter" >}} |
| 18.5 | October 2025 | {{< member-by-name "Ashraf Khamis" >}} | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Lysanne Pinto" >}} |
| 18.4 | September 2025 | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Lysanne Pinto" >}} | {{< member-by-name "Isaac Durham" >}} |
| 18.3 | August 2025 | {{< member-by-name "Russell Dickenson" >}} | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |

<!-- vale handbook.Spelling = YES -->

## Reviews

テクニカルライターは、GitLab チームメンバーやコミュニティ貢献者が作成したドキュメント変更を含むマージリクエストのレビューにアサインされます。レビューは、[stage groups](/handbook/product/categories/#devops-stages) またはその他の専門分野への[テクニカルライターのアサイン](#assignments)に従って、主題ごとにアサインされます。

### Levels of edit

テクニカルライターは次の編集レベルを使用します。

**Light**

- パイプラインが通過し、明らかな文法、スペル、句読点の誤りがないことを確認する。

**Medium**

- パイプラインが通過し、文法、スペル、句読点の誤りがないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。

**Heavy**

- パイプラインが通過し、文法、スペル、句読点の誤りがないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。
- コンテンツが定義された[トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)に準拠していることを確認する。
- コンテンツが、より大きなドキュメントセットによく適合していることを確認する。
- UI テキストについては、コンテンツが [Pajamas Design System](https://design.gitlab.com/) と[テクニカルライターワードリスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)で定義された標準を満たしていることを確認する。

#### How the writers apply the levels of edit

品質、スピード、リソース制約のバランスを取るため、テクニカルライターは異なるドキュメントに異なる編集レベルを適用します。

これらのガイドラインは一般的なガイダンスを提供することを目的としています。固定的なものではなく、ケースバイケースで上書きできます。

次の項目は、特に依頼がない限り **編集を受けません**（依頼があった場合は **light** 編集を受けます）。

- GitLab リポジトリの貢献ガイドライン（`/development` ディレクトリ内）。
- GitLab リポジトリの `doc/solutions` ディレクトリ。この情報は Solutions Architect が所有します。

次の項目は **light** 編集を受けます。

- 5 つの主要 GitLab リポジトリ（GitLab、Charts、Operator、Omnibus、Runner）外のドキュメント。
- 非推奨化と削除。
- 他のテクニカルライターが作成したマージリクエスト。ただし、その MR が OKR の一部である場合、または作成者がより詳細な編集を依頼した場合を除く。

次の項目は **medium** 編集を受けます。

- 日々のプロダクトドキュメントの依頼:
  - 新機能の作業（[stage groups](/handbook/product/categories/#devops-stages) から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- リリースポストの項目

次の項目は **heavy** 編集を受けます。

- トピックタイプの再構築の取り組み（[「CTRT」](https://docs.gitlab.com/development/documentation/topic_types/)）
- OKR 作業
- UI テキスト

いずれの場合も、テクニカルライターは、信頼できる情報源がドキュメントの技術的正確性を確認したことを確かめます。
テクニカルライター自身が必要な知識を持っているか、必要な検証を効率的に実施できる場合は、その信頼できる情報源として
活動できます。

### Review workflow

[ベロシティ](/handbook/engineering/development/principles/#velocity)と品質のバランスを取るため、テクニカルライターは次のワークフローを使用します。

- テクニカルライターがマージリクエストを開く場合、別のテクニカルライターがレビューしてマージする必要があります。
  - テクニカルライターは自分の MR を承認またはマージするべきではありません。代わりに、Maintainer アクセスを持つ仲間に[レビューを依頼](#selecting-a-reviewer)するべきです。最終承認後、レビュアーが MR をマージします。
    - この要件は GitLab の [Code Review Guidelines](https://docs.gitlab.com/development/code_review/) に沿っており、GitLab の [Change Management Policy](/handbook/security/security-and-technology-policies/change-management-policy/) を満たします。
- 他の誰か（開発者、コミュニティメンバー、Support チームメンバーなど）がマージリクエストを開く場合:
  - MR がドキュメント変更のみを含む場合、テクニカルライターは次を行います。
    - コンテンツをレビューし、提案を行う。
    - MR で明示的な承認がない限り、作成者のブランチに（提案を適用したりコミットをプッシュしたりして）大きな変更を直接行わない。
      ブランチへのプッシュは解決が難しいマージコンフリクトを引き起こす可能性があり、コンテンツが誤って上書きされる場合があります。
    - 作成者のブランチに直接変更を加えることについて作成者の同意がある場合に限り、提案やコミットを使用して自分で変更を行える。
      その場合、ライターがマージする前に、正確性を確保するため作成者が必ずテクニカルライターの変更をレビューしなければなりません。
    - MR がほぼマージ可能な状態の場合、**Apply suggestion** 機能を使用して小さな提案を適用できる。
      ライターは、追加のレビューなしで、句読点の欠落、タイポ、パイプラインの失敗などを修正できます。
    - ドキュメント MR が準備できたら承認してマージする。
  - MR が主にコード変更で、ドキュメント更新も含む場合、テクニカルライターは次を行います。
    - ドキュメント、UI テキスト、エラーメッセージの変更について提案を行うが、提案を自分で適用するべきではない。
      コード MR に変更を加えると、コードや仕様がテクニカルライティングの提案に合うようエンジニアによる更新を必要とすることが多いため、パイプラインが失敗する可能性があります。
    - ドキュメント変更がマージ可能であれば MR を承認する。
    - コード MR はマージしない。MR は、コード変更もレビューするエンジニアがマージしなければなりません。
  - MR が主にドキュメント変更だが、変更に合わせてリンクを更新する小さなコード変更も含む場合、テクニカルライターは次を行います。
    - ドキュメントのみの MR と同じワークフローを使用してコンテンツをレビューする。
    - MR がすべての[必要な承認](#merge-rights)を得ている場合に *限り* マージできる。

レビューの所要時間について詳しくは、[Review-response SLO](../../../engineering/workflow/code-review/#review-response-slo) を参照してください。

#### Triaging automated group mentions

ボットまたはコミュニティ貢献者が、CODEOWNERS に基づいて `@gl-docsteam` または複数のテクニカルライターをメンションした場合、TW は次をボランティアで行うべきです。

1. MR をスキャンし、自分でレビューを引き受けるか、[Selecting a reviewer](#selecting-a-reviewer) のガイドラインに従ってどの TW がレビューするべきかを判断する。
1. 次に、MR が:
   - レビューの準備ができていそうな場合、選ばれた TW をレビュアーとしてアサインする。
   - レビューの準備ができていなさそうな場合、準備ができたら選ばれた TW をメンションするよう貢献者にコメントを残す。
1. ボットのコメントを編集し、チームメンションをコードとしてフォーマットする。たとえば: ``Hi `@gl-docsteam`! Please review this documentation merge request.`` これにより、他の TW が MR の参加者リストから削除され、その MR の通知を受け取らなくなります。To-do 通知はバッククォート付きのユーザー名を表示するように更新されるため、To-do リストから作業しているチームメンバーは、その MR が対応済みであることを視覚的に把握できます。

### Selecting a reviewer

ほとんどの場合、テクニカルライターは [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用して、テクニカルライティングレビューの担当者を特定するべきです。ページのフィルターがテクニカルライターのみを表示するように設定され、**Assign events last 7 days** でソートされていることを確認してください。

対応可能なテクニカルライターを得るには、ダッシュボードページで **Spin the wheel!** を選択します。選ばれたテクニカルライターがすでに多くのレビューをアサインされている、または最近非常に忙しかった特定のケースでは、**Spin the wheel!** をもう一度選択して別のライターを得られます。

特定の担当者が必要なコンテンツがある場合、または DRI のいるページ（ドキュメントスタイルガイドなど）のマージリクエストがある場合は、そのレビューをその人に特定してアサインできます。

### Determining Technical Writer availability

テクニカルライターが一般的なチームのマージリクエストレビューに対して忙しすぎて、自分のグループやその他の優先事項に集中する必要がある場合があります。そのような場合、テクニカルライターは **Busy** チェックボックスを選択し、🔴 `:red_circle:` を追加することで GitLab ステータスを更新でき、これによりレビュアールーレットに自分の名前が表示されなくなります。

たとえば、あるマイルストーンのリリース担当のテクニカルライターは、リリースポストやその他の要件に集中するため、[リリース日](/handbook/engineering/releases/)の前の週に busy インジケーターをステータスに追加するべきです。

その他すべての場合、テクニカルライターは busy インジケーターをプロフィールに追加（および削除）できますが、busy インジケーターは一度に 2 日を超えて設定せず、2 週間に 1 回を超えて使用しないようお願いします。（リリース中の busy インジケーターの使用はこれに影響しないことに注意してください。）レビュールーレットに参加しない時間がもっと必要な場合は、マネージャーに相談して支援を得られるようにしてください（これには busy インジケーターの追加使用が含まれる場合があります）。

## Merge rights

テクニカルライティングチームには、そのロールの一部として、GitLab プロジェクトへのマージ権限（[Maintainer アクセス](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)を通じて）が付与されています。
すべての開発者が Maintainer アクセスを得るわけではないため、テクニカルライターはこの権限を責任を持って使用しなければなりません。

Maintainer として、テクニカルライターがマージするものは次に限定しなければなりません。

- ドキュメント、通常は Markdown 形式のファイル。
- コードファイル内の UI テキスト、エラーメッセージ、リンク関連の更新（適切なエンジニアの承認付き）。
  次の場合、エンジニアの承認をスキップして、[TW リーダーシップチーム](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)
  または [TW DocOps チーム](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)のメンバーにコード変更の承認を依頼できます。
  - ドキュメント MR 内の唯一のコード変更が、ドキュメントファイルやアンカー名の変更に合わせたリンク修正であり、かつ
  - パイプラインが正常に完了した場合。
- リンターなどのドキュメント関連のツールや設定、および
  [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトへの変更。エンジニアが
  コードレビューとマージに対応できます。

さらに、テクニカルライターは次を行わなければなりません。

- 失敗したパイプラインがある MR を決してマージしない。
- マージ前に、適切なラベルとマイルストーンを付けて MR が完了していることを確認する。
- DRI が MR をレビューして承認したことを確認する。

## Onboarding Technical Writers

テクニカルライターのオンボーディング中は、グループのシャドーイングにアサインされ、
その後トレーニーとして貢献を開始します。ベテランのテクニカルライターがそのプロセスをコーチングします。

オンボーディングのフェーズとタスクについて詳しくは、[テクニカルライターオンボーディングテンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md) を参照してください。

## Standups

私たちは、週 2 回のスタンドアップ（あなたのローカルタイムゾーンで火曜日と木曜日の午前 10 時）と
毎週のランダムな質問（水曜日の正午に実行）のために [Geekbot](https://app.geekbot.com/dashboard/home) を設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

毎日のスタンドアップに新しいメンバーを追加するには、次を行います。

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、
   求められたら Slack アカウントでサインインします。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members)
   スタンドアップを選択し、**Add participants** エリアでメンバーを名前で検索します。
1. 新しく追加したメンバーに Manage アクセスを付与し、右上隅の **Save** を選択します。

Weekly Wednesday Question スタンドアップに新しいメンバーを追加するには、次を行います。

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、
   求められたら Slack アカウントでサインインします。
1. [Weekly Wednesday Question](https://app.geekbot.com/dashboard/standup/28408/manage?members)
   スタンドアップを選択し、**Add participants** エリアでメンバーを名前で検索します。
1. 新しく追加したメンバーに manage アクセスを付与し、右上隅の **Save** を選択します。

テクニカルライティングチームのメンバーとして、ランダムな水曜日の質問のリストに自分の
質問を追加することが推奨されています！追加するには、次を行います。

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions) にアクセスします。
1. **Questions** セクションの下に、"This is a random set of questions"
   という質問があります。右側の 2 つの矢印にカーソルを合わせ、**Edit** を選択します。
1. 一番下までスクロールして **Add question** を選択します。
1. **Save questions** を選択します。

## Community contribution opportunities

私たちは、[コンテンツの改善](https://docs.gitlab.com/development/contributing/)
だけでなく、https://docs.gitlab.com のドキュメントウェブサイトの開発も歓迎します。

コミュニティ貢献について詳しくは、次を参照してください。

- [対応可能な Issue のリスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [GitLab Docs リポジトリ](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## Make an urgent content update on docs.gitlab.com

ドキュメントウェブサイトは 1 時間ごとに更新されます。まれに、ドキュメントの更新を
もう少し早く公開しなければならない場合があります。緊急の更新が必要な場合は、[ドキュメントサイトを手動でデプロイする](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production)手順に従ってください。

## Report a docs website problem or infrastructure issue

ウェブサイトのバグや機能リクエストは、[GitLab Docs プロジェクトの Issue リスト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues)で報告してください。

障害やウェブサイトの可用性の問題については、[Docs site infrastructure](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md) を参照してください。

## Related topics

- [Documentation workflow](https://docs.gitlab.com/development/documentation/workflow/)
- [Set up your local environment](https://docs.gitlab.com/development/documentation/authoring_environment.html)
- [Documentation site architecture](https://docs.gitlab.com/development/documentation/site_architecture/)
