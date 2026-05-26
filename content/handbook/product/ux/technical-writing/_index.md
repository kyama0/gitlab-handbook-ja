---
title: "テクニカルライティング"
upstream_path: /handbook/product/ux/technical-writing/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T16:33:15+01:00"
translated_at: "2026-05-26T00:00:00Z"
translator: claude
stale: false
---

GitLab のテクニカルライティングチームは、開発者、プロダクトマネージャー、コミュニティと協力してプロダクトドキュメントを作成しています。

優れたドキュメントは、GitLab の顧客、ユーザー、管理者の進化するニーズに応えます。機能やベストプラクティスについて読者を教育します。GitLab を効率的に設定、利用、トラブルシューティングできるようにします。テクニカルライティングチームは [docs.gitlab.com](https://docs.gitlab.com) サイトとそのコンテンツ、プロセス、ツールを管理しています。

[ドキュメントロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363) は、コンテンツと[ドキュメントウェブサイト](https://docs.gitlab.com/)の両方を改善する私たちの取り組みを推進しています。たとえば、docs.gitlab.com で情報を見つけにくいことを認識しています。ドキュメントサイトのプラットフォームを再構築し、より良いタスクベースの情報を提供し、コンテンツを見つけやすくするためのロードマップ項目と OKR があります。これらの大規模プロジェクトは、機能ドキュメントに加えて完了することで、ドキュメントのユーザーエクスペリエンスに継続的・反復的な改善をもたらします。

ドキュメントには誰でも貢献できます。[GitLab ドキュメントガイドライン](https://docs.gitlab.com/development/documentation/)に従ってください。

## 私たちについて

チームの規模やチームメンバーの詳細については、テクニカルライティングでフィルタした [Meet Our Team](/handbook/company/team/?departmentOrDivision=Technical+Writing) を参照してください。私たちのチームのロールには、次のものが含まれます。

- Intermediate、Senior、Staff レベルの [Technical Writers](/job-description-library/product/technical-writer/)。
- [Technical Writing Managers](/job-description-library/product/technical-writing-manager/)。
- [Fullstack Engineers, Technical Writing](/job-description-library/product/ux-fullstack-engineer/)。
- [Technical Writing Director](/job-description-library/product/technical-writing-manager/#director-technical-writing)。

## お問い合わせ

各種 Slack チャンネル、または専用の GitLab グループエイリアスを通じて私たちに連絡できます。`@gl-docsteam` は大きなグループです。MR のレビューについては、docs ページのメタデータを確認し、[指定されたテクニカルライター](#assignments-to-devops-stages-and-groups)を直接アサインするか at メンションしてください。

### Slack チャンネル

チームは、ドキュメント関連全般のチャンネルとチーム固有の Slack チャンネルを管理しています。

- `#docs`: GitLab ドキュメントに関する質問や一般的な議論、および GitLab チームメンバーによるドキュメントや UI テキストのレビュー依頼。
- `#docs-engineering`: Docs ウェブサイトやその他のエンジニアリングプロジェクトに関する議論。
- `#docs-processes`: ドキュメントプロセスに関する議論。
- `#docs-tooling`: ドキュメントツールに関する議論。
- `#docs-site-changes-hugo`: [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトからの自動メッセージ。
- `#tw-team`: テクニカルライティングチームのチャット。
- `#tw-social`: テクニカルライティングチームのソーシャルチャット。

### GitLab グループエイリアス

一部のチームメンバーは、特定のグループに属しています。GitLab の Issue や MR でそれらのグループの全メンバーに連絡するには、次のエイリアスを使ってください。

| Alias                                                          | GitLab group                                                                                                                                                                                            | Description |
|:---------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| `@gl-docsteam`                                                 | [gl-docsteam](https://gitlab.com/groups/gl-docsteam/-/group_members)                                                                                                                                    | テクニカルライティングチーム全体（リーダーシップ、ライター、エンジニア） |
| `@gitlab-org/tw-leadership`                                    | [gitlab-org/tw-leadership](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)                                                                       | リーダーシップ（Manager、Staff technical writer、Staff engineer） |
| `@gitlab-org/technical-writing/tw-docops`                      | [gitlab-org/technical-writing/tw-docops](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)                                           | [DocOps](#docops-group) |
| `@gitlab-org/technical-writing/tw-eng`                      | [gitlab-org/technical-writing/tw-eng](https://gitlab.com/groups/gitlab-org/technical-writing/tw-eng/-/group_members?with_inherited_permissions=exclude)                                           | エンジニア |
| `@gitlab-org/maintainers/gitlab-development-kit/documentation` | [gitlab-org/maintainers/gitlab-development-kit/documentation](https://gitlab.com/groups/gitlab-org/maintainers/gitlab-development-kit/documentation/-/group_members?with_inherited_permissions=exclude) | [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit) のドキュメントをレビューするテクニカルライター |

## GitLab のテクニカルライティングの基礎を学ぶ

GitLab ドキュメントの更新や作成に興味がある場合は、[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals) を参照してください。
このコースは GitLab チームメンバーとコミュニティコントリビューターの双方を対象としており、次の内容を含みます。

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは docs.gitlab.com への貢献に **必須ではありません**。誰でも貢献できます！

提案やフィードバックについては、[フィードバック Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/445) を参照してください。

## Documentation

GitLab ドキュメントは、ユーザー、管理者、意思決定者が GitLab の機能について学び、自分たちの [DevOps ニーズ](https://about.gitlab.com/stages-devops-lifecycle/)を満たすために GitLab を最適に実装・利用できるよう支援するために作成されています。

ドキュメントはプロダクトの不可欠な一部です。そのソースは、プロダクトとともに [GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture)内のそれぞれのパスで開発・保管されています。
それは [docs.gitlab.com](https://docs.gitlab.com)（すべてのプロダクトドキュメントの複数バージョンを提供）と、各 GitLab インスタンスのドメインの `/help/` パス（そのインスタンスのバージョン向けのコンテンツ）で公開されています。

ドキュメントは、すべてのプロダクト情報の[信頼できる唯一の情報源](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)です。
私たちは、完全で正確、かつ使いやすいドキュメントを作成することを目標として、[docs-first 方法論](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)に従っています。
ドキュメントは、必要な情報を簡単に閲覧・検索できるべきであり、またドキュメント自体への貢献も簡単であるべきです。

ドキュメントへの貢献を始めるには、[Contribute to the GitLab documentation](https://docs.gitlab.com/development/documentation/) を参照してください。
標準やガイドラインについては、[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)と[ワードリスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)を参照してください。

## 責任範囲

チームメンバーは特定の DevOps ステージグループに[アサイン](#assignments)されます。テクニカルライティングチームは、ドキュメントコンテンツと UI テキストの開発、および他の人がコンテンツを開発する際の支援の両方について、広く責任を負います。

- 多くのエンジニアリングプロジェクトのドキュメントを維持する。
- コミュニティのニーズを満たすため、新しいコンテンツを随時開発する。
- ドキュメント計画のレビューとコラボレーション、ドキュメントのマージリクエストや最近マージされたドキュメントのレビュー、そしてコンテンツがスタイルおよび言語の標準を満たしていることの確認を行う。
- 完全性と円滑なユーザーエクスペリエンスを確保するために、改善されたドキュメントを再編成、刷新、執筆する。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなどの UI テキストについて、プロダクトデザイナーとコラボレーションする。
- 毎月の[リリースポスト](https://docs.gitlab.com/development/documentation/release_notes/)の Technical Writing Lead を務める。

### 優先順位付け

ステークホルダーのニーズを満たすための作業を評価する際、私たちは次の順序で優先順位を付けます。

1. 機能作業（新機能のドキュメント化や UI テキストに関するガイダンスの提供を含む）
1. OKR 関連の作業
1. ドキュメントの改善とバックログ Issue（ステージリード作業、ドキュメントの技術的負債、コンテンツトピックデザインの実装を含む）
1. その他すべてのタスク（DocOps タスクを含む）

### プロセス

チームは、次を含む効率的なプロセスの開発と維持に責任を負います。

- GitLab ドキュメントを最新の状態に保つためのプロセスが整備され、遵守されていることを確保する。
- プロダクトおよびエンジニアリングとのドキュメントワークフロー、ドキュメントチームのワークフロー、作業分担に従い、最適化する。
- ドキュメント関連の Issue をトリアージする。
- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)を洗練させ、GitLab ドキュメントとその貢献プロセスに関するコンテンツを継続的に改善する。
- コミュニティによるドキュメントへの貢献を効率的に処理しつつ、誰でもドキュメントに貢献しやすくする。

#### スタイルガイド

[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)は、プロダクトドキュメントとリリースポストの言語・スタイルガイダンスを提供します。

どのテクニカルライター（またはその他のコントリビューター）も、`~tw-style` ラベルを付けた Issue またはマージリクエストを作成し、その Issue または MR をスタイルガイドの DRI にアサインすることで、ドキュメントスタイルの更新や追加を提案できます。GitLab チームメンバーは `#docs` Slack チャンネルを使うこともできます。

完了したスタイル関連の Issue を追跡するには、次の検索を使ってください。

- [GitLab project style issues](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [GitLab project style MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [Technical Writing project style issues](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)

#### 翻訳と国際化

誰でも GitLab の英語から他言語への翻訳に貢献できます。
GitLab における翻訳と国際化について詳しくは、[internationalization](/handbook/marketing/localization/category_internationalization/) を参照してください。
翻訳への貢献のステップバイステップガイドについては、[translating GitLab](https://docs.gitlab.com/development/i18n/translation/) を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/) サイトは英語と日本語で利用できます。
ローカライゼーションプロセスについて詳しくは、[product documentation localization](/handbook/marketing/localization/tech_docs_localization/) を参照してください。

## Assignments

テクニカルライター（TW）は、[アサインされたグループ](#assignments-to-devops-stages-and-groups)とコラボレーションします。TW は[その他の作業](#assignments-to-other-projects-and-subjects)にアサインされることもあります。

docs.gitlab.com の一部のコンテンツは [TW によるレビューを受けません](#content-not-reviewed-by-tws)。

<a id="designated-technical-writers">

### DevOps ステージおよびグループへの割り当て

指定されたテクニカルライターは、アサインされた[グループ](/handbook/product/categories/)にとっての頼れる担当者です。新しいドキュメントの計画、既存ドキュメントの編集、ドキュメントへの提案された変更のレビュー、UI マイクロコピーへの変更提案など、ドキュメントが必要となるすべての状況で他のチームメンバーや subject matter expert（SME）とパートナーとして協力します。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="Note" color="primary" %}}
**ドキュメントページのメタデータからここに案内された場合:**

- このメタデータは開発者のオーナーシップを示すものではなく、適切なテクニカルライターに案内するためのものです。
- 開発グループに所属していて、ドキュメントページにメタデータを追加したい場合は、議論のため [TW チームタスクプロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/)に Issue を作成してください。追加の議論は [issue 547](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/547) にあります。
- ステージが `none` と記載されている場合は、[DRI がいるか](#assignments-to-other-projects-and-subjects)を確認するか、[roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使ってください。
{{% /alert %}}

テクニカルライターは、他のステージのドキュメントのレビューや改善を行うことが推奨されますが、必須ではありません。自分がオーナーでないドキュメントに貢献する際は、アサインされた TW のオーナーシップを尊重し、そのドキュメントに重大な変更を加える場合は必ずレビューと承認を依頼する必要があります。

テクニカルライターが [PTO 中](#technical-writer-pto)のときは、チーム全体がそのバックアップを務めます。

<!-- vale handbook.Spelling = NO -->

### セクションリード

テクニカルライティングマネージャーは、主要な[セクション](/handbook/product/categories/)にアサインされます。
指定されたマネージャーは、アサインされたセクションにとっての頼れる担当者です。リーダーシップグループでテクニカルライティングを代表し、チームの窓口として機能します。

{{% product/tech-writing-sections %}}

これらのセクションは次を表します。

| Area                                             | Assigned Manager |
|:-------------------------------------------------|:--------------------|
| AI, Analytics & Monetization, Platforms | {{< member-by-name "Sarah Watt" >}} |
| Core DevOps, Security  | {{< member-by-name "Robert Landry" >}} |

### ステージリード

{{< alert type="note" >}}

このセクションでは、FY2025 の Q1 および Q2 に試行し、2025 年の Q3 でより広く展開したプロセスについて説明します。このプロセスは変更される可能性があります。

{{< /alert >}}

一部のテクニカルライターは、特定の [DevOps ステージ](#stage-leads)の **ステージリード** としてアサインされます。

| Stage            | Assigned stage lead |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD (on hold) |
| Application Security Testing | {{< member-by-name "Russell Dickenson" >}} |

ステージリードは、ステージ全体にわたって作業する場合もあれば、ステージ内のグループのサブセットにわたって作業する場合もあります。
彼らは、そのステージのグループにアサインされた他のテクニカルライターを支援します。

ステージリードは次を行います。

- テクニカルライターと同じ[責任](#responsibilities)を担いますが、アサインされたステージのドキュメントを先回りして作成・改善することにより重点を置きます。
- 時間の約 70% を、アサインされたグループの[新機能や機能拡張](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change)について開発者が作成した Issue やマージリクエストのレビューに費やします。
- 残りの時間を次に費やします。
  - アサインされた **ステージ** のドキュメントのニーズやギャップに対処するためのコンテンツの作成と洗練
    （たとえば、チュートリアルやユースケースベースのコンテンツの執筆、既存コンテンツの再構成、情報アーキテクチャの作業）。
  - そのステージの他のライターがドキュメント改善に貢献するのを支援する。
- 3 つのマイルストーンにわたって対処することを目指すコンテンツのギャップと改善を概説する四半期計画 Issue を完成させます
  （たとえば、[FY25Q3 Stage lead planning issue: Secure](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1067)）。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md) は、四半期開始前の最終月の 20 日に自動的に作成され、そのステージのすべてのテクニカルライターにアサインされます。
- 自分が主導または意見を提供したドキュメント改善 MR に、関連する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead)を適用します。このラベルにより、ステージリードプロセスから生まれた改善を、私たちのパフォーマンスインジケーター（PI）の 1 つとして追跡できます。[Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1)は GitLab チームメンバーのみアクセス可能です。
- ドキュメント改善について、他のステージリードとコラボレーションします。

時間が経ち、ステージリードあたりにアサインされるグループが減るにつれて、ステージリードが先回りした作業に時間の 30% ではなく 70% を費やすことが、目指すべき目標です。

[ドキュメントの改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements)について、ステージリードは進行中および計画中のドキュメントの拡張・追加を追跡する Issue ボードを作成する責任があります。

### DocOps グループ

[DocOps](https://www.writethedocs.org/guide/doc-ops/) は DevOps に似ていますが、ドキュメント向けのものです。これは、ドキュメントの作成、管理、デプロイを効率化するためのアプローチです。

一部のテクニカルライターは [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops)のメンバーであり、このグループは次に責任を負います。

- CI/CD パイプラインおよびローカルマシンでのテストとリンティングを通じて、コンテンツ品質を維持する。
- [Docs Engineers](/job-description-library/product/ux-fullstack-engineer/) が依頼したとき、またはそれらのエンジニアがオンラインでないときに、オペレーションタスクを支援する。たとえば、Pages の設定、デプロイ、スケジュールされたパイプライン、レビューアプリの支援。
- リンティングツールの依存関係を更新し、それらの更新を上流のドキュメントプロジェクトに展開する。
  DocOps グループは、ドキュメントウェブサイトのコード、インフラ、ビルドスクリプトには責任を負いません。
  DocOps タスクは、機能作業や OKR 関連の作業よりも低く[優先順位付け](#prioritization)されます。
- [TW: DocOps issue board](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing) を監視する。

DocOps グループへの参加は、チームの要件に基づきます。参加に興味があることを伝えるには、マネージャーに相談してください。

#### ドキュメントのテスト

DocOps グループは、GitLab のドキュメント（およびその他の技術的コンテンツ）の問題をテストするためのツールキットを開発・維持しています。これらのツールキットには、次のものが含まれます（ただしこれらに限りません）。

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイル権限と命名: `lint-doc.sh`

リンティングルールやツールへの変更を提案するには。

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing) ラベルを付けた Issue またはマージリクエストを作成する。
1. Issue または MR で [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops) にメンションする。

DocOps グループは、この作業を他の[テクニカルライティングの優先事項](#prioritization)とバランスさせます。

### その他のプロジェクトや主題への割り当て

他のプロジェクトや主題でのコラボレーションについて。

| Subject                                                                              | Assigned Technical Writer |
|:--------------------------------------------------------------------------------     |:--------------------------|
| The documentation site                                                               | {{< member-by-name "Sarah Watt" >}}, {{< member-by-name "Robert Landry" >}} |
| The documentation site backend (code, automation)                                    | {{< member-by-name "Pearl Latteier" >}} |
| The documentation's information architecture (content restructuring and major changes to left nav) | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} {{< member-by-name "Suzanne Selhorn" >}} |
| [GitLab Design System ("Pajamas")](https://design.gitlab.com/) information under [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content) | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [Style Guide](#style-guide)                                                          | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [Documentation testing](#documentation-testing) (DocOps/Vale/markdownlint)           | {{< member-by-name "Kati Paizee" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}, {{< member-by-name "Achilleas Pipinellis" >}}, {{< member-by-name "Evan Read" >}}, {{< member-by-name "Jon Glassman" >}}, {{< member-by-name "Lorena Ciutacu" >}}, {{< member-by-name "Marcel Amirault" >}}, {{< member-by-name "Phillip Wells" >}}, {{< member-by-name "Russell Dickenson" >}} |

### TW がレビューしないコンテンツ

テクニカルライターは、次のコンテンツをレビューしません。

- `doc/development` ディレクトリ。`doc/development` ディレクトリ内のドキュメントは、どの Maintainer でもマージできます。
  唯一の例外は `/doc/development/documentation` で、ここはライターがガイドラインを維持しています。
- `doc/solutions` ディレクトリ。この情報は Solutions Architect によって作成、レビュー、マージ、維持されます。

### Stable counterpart

テクニカルライティングチームは、`docs-gitlab-com` プロジェクトについて、チーム外の stable counterpart から支援を受けています。

| Subject          | Person |
|:-----------------|:-------|
| Backend reviews  | TBD |
| Frontend reviews | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| Support          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## Docs サイトの統計と分析

テクニカルライティングチームは、満足度、見つけやすさ、有用性という 3 つの主要領域でドキュメントのパフォーマンスを追跡しています。ユーザーアンケート、Google Analytics、ユーザーフィードバック、コンテンツ監査、サイト可用性など、複数の指標を組み合わせて使用しています。

私たちは、6 つの主要プロジェクト（GitLab、Omnibus、Charts、Operator、Runner、CLI）の統計を追跡しています。

- ドキュメントプロジェクトには 3,100 を超えるドキュメントページと 4,400,000 語があります。
- 2020 年 5 月以降、ページ数は 165% 以上、語数は 270% 以上増加しています。
- ページ（30%）と語（30%）の大半は、左ナビゲーションの **Use GitLab** セクションにあります。

GitLab チームメンバーは、[doc metrics ページ](https://internal.gitlab.com/handbook/product/ux/technical-writing/metrics-kpis/)と docs.gitlab.com の [LookerStudio ダッシュボード](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD)で、追加のドキュメント指標を確認できます。ダッシュボードの手順については、[Google Analytics](https://internal.gitlab.com/handbook/product/ux/technical-writing/google-analytics/) を参照してください。

## テクニカルライターの PTO

テクニカルライターが[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を取得するとき、チームの残りのメンバーがそのカバーを提供します。
これらのチームメンバーは、リクエストに追加のコンテキストを必要とする場合があります。リクエストは、*彼らの* 主要グループのステージ／グループおよび機能の優先順位リストに組み込まれます。

アサインされたテクニカルライターが PTO 中にグループが助けを得るための選択肢は次のとおりです。

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)。
  ルーレットで選ばれたテクニカルライターを Issue やマージリクエストに ping またはアサインできます。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5) チャンネルでのリクエスト。手の空いているボランティアのテクニカルライターが対応します。
- 特定の、時間に敏感な進行中の作業について支援が必要な場合は、事前に手配されたテクニカルライター。そのテクニカルライターは Issue やマージリクエストで ping され、参加を開始できます。

長期の PTO（1 週間以上）を取得する場合、テクニカルライターとマネージャーはテクニカルライターの[カバレッジ Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md) を使うべきです。
この Issue では、誰が、何を、どの手段でカバーを提供するかを正確に記述できます。

### PTO の取得

PTO を取得するとき、テクニカルライターは次を行います。

1. 自分の[不在通知メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/)に、利用可能なカバーの仕組みが反映されていることを確認する。
   次を確保するために、GitLab.com のステータスを最新の状態に保つことが重要です。

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs) が正確な提案を行えるようにする。
   - TW チームが Roulette ダッシュボードを確認する際に、全チームメンバーの PTO ステータスを簡単に確認できるようにする。
1. グループの Slack チャンネルで、利用可能な仕組みの場所を示すメッセージを送る。たとえば。

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/product/ux/technical-writing/#technical-writer-pto for ways to get help.
   For urgent _named time-sensitive task_ matters, ping _named TW_.
   ```

### マージリクエストキューの確認

テクニカルライターが PTO に入る前に、そのライターまたはマネージャーは、誰がそのライターの MR キューを確認するかを決めるべきです。
アサインされた人物は、次のいずれかを使って、少なくとも 1 日に 1 回キューを確認すべきです。

- [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests)の **Merge requests** ページ（**Reviewer** でフィルタ）。
- カバレッジ Issue 内の[マージリクエストキュー](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17)セクション。

アサインされたライターは、作業そのものを行う必要はありません。キューを確認する際、次を行えます。

- レビューのために MR を自分にアサインする。
- Roulette を使って、レビューする他の TW を見つける。

## 定期的にスケジュールされたタスク

テクニカルライターの通常アサインされた作業に加えて、定期的に完了する必要がある繰り返しタスクがあります。

- **リリースポストの構造チェック:** Technical Writing Lead は、各マイルストーンの終わりに公開されるリリースポストの[コンテンツをレビュー](https://docs.gitlab.com/development/documentation/release_notes/)します。アサインについては、[Release Post Scheduling](/handbook/product/ux/technical-writing/#schedule) ページを参照してください。
- **毎月のドキュメントリリース:** 各マイルストーンの終わりに、テクニカルライターが[ドキュメントサイトの毎月のリリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md)します。このタスクにアサインされるテクニカルライターは、前のマイルストーンでリリースポストの構造チェックを完了したライターです。
- **Docs プロジェクトのメンテナンスタスク:** 毎月、1 人のテクニカルライターが、ドキュメントサイトとそのコンテンツのメンテナンスタスクを完了するためにアサインされます。これには、メンテナンス作業を追跡するために `technical-writing` プロジェクトで [`tw-monthly-tasks` テンプレートを使って新しい Issue を作成すること](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks)が含まれます。メンテナンス Issue に記載された以上の作業が必要な場合、テクニカルライターは必要に応じてマージリクエストや追加の Issue を作成します。

### スケジュール

<!-- vale handbook.Spelling = NO -->

| Version | Month | Release post check | Monthly doc release | Maintenance tasks |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.7 | December 2026 | TBD | TBD | {{< member-by-name "Isaac Durham" >}} |
| 19.6 | November 2026 | TBD | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | October 2026 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Phillip Wells" >}} |
| 19.4 | September 2026 | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Phillip Wells" >}} | {{< member-by-name "Roshni Sarangadharan" >}} |
| 19.3 | August 2026 | {{< member-by-name "Phillip Wells" >}} | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} |
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

## レビュー

テクニカルライターは、GitLab チームメンバーやコミュニティコントリビューターが作成したドキュメント変更を含むマージリクエストのレビューにアサインされます。レビューは、[ステージグループ](/handbook/product/categories/#devops-stages)やその他の専門分野への[テクニカルライターのアサイン](#assignments)に従って、主題ごとにアサインされます。

### 編集レベル

テクニカルライターは、次の編集レベルを使用します。

**Light**

- パイプラインが通過し、明らかな文法、スペル、句読点の誤りが存在しないことを確認する。

**Medium**

- パイプラインが通過し、文法、スペル、句読点の誤りが存在しないことを確認する。
- コンテンツが明確で、発見可能で、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。

**Heavy**

- パイプラインが通過し、文法、スペル、句読点の誤りが存在しないことを確認する。
- コンテンツが明確で、発見可能で、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。
- コンテンツが定義された[トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)に準拠していることを確認する。
- コンテンツがより大きなドキュメントセットにうまく適合していることを確認する。
- UI テキストについては、コンテンツが [Pajamas Design System](https://design.gitlab.com/) と[テクニカルライターワードリスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)で定義された標準を満たしていることを確認する。

#### How the writers apply the levels of edit

品質、スピード、リソースの制約のバランスを取るため、テクニカルライターは異なるドキュメントに異なる編集レベルを適用します。

これらのガイドラインは、一般的なガイダンスを提供することを目的としています。これらは確定したものではなく、ケースバイケースで上書きできます。

これらの項目は、特に依頼されない限り編集を**受けません**（依頼された場合は **light** 編集を受けます）。

- GitLab リポジトリ内の、貢献ガイドライン（`/development` ディレクトリ内）。
- GitLab リポジトリ内の、`doc/solutions` ディレクトリ。この情報は Solutions Architect が所有します。

これらの項目は **light** 編集を受けます。

- 5 つの主要 GitLab リポジトリ（GitLab、Charts、Operator、Omnibus、Runner）以外のドキュメント。
- 非推奨と削除。
- 他のテクニカルライターが作成したマージリクエスト（ただし MR が OKR の一部である場合、または作成者がより詳細な編集を依頼した場合を除く）。

これらの項目は **medium** 編集を受けます。

- 日常的なプロダクトドキュメントのリクエスト:
  - 新機能作業（[ステージグループ](/handbook/product/categories/#devops-stages)から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- リリースポスト項目

これらの項目は **heavy** 編集を受けます。

- トピックタイプの再構成作業（["CTRT"](https://docs.gitlab.com/development/documentation/topic_types/)）
- OKR 作業
- UI テキスト

いずれの場合も、テクニカルライターは、権威ある情報源がドキュメントの技術的正確性を確認したことを確認します。
テクニカルライターは、必要な知識を持っている場合、または必要な検証を効率的に実施できる場合、その権威ある情報源として機能できます。

### Review workflow

[ベロシティ](/handbook/engineering/development/principles/#velocity)と品質のバランスを取るため、テクニカルライターはこのワークフローを使用します。

- テクニカルライターがマージリクエストをオープンするとき、別のテクニカルライターがレビューしてマージする必要があります。
  - テクニカルライターは自分の MR を承認またはマージすべきではありません。代わりに、Maintainer アクセスを持つピアに[レビューを依頼](#selecting-a-reviewer)すべきです。レビュアーは最終承認後に MR をマージします。
    - この要件は GitLab の[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)に沿っており、GitLab の[変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/)を満たします。
- それ以外の誰か（開発者、コミュニティメンバー、サポートチームメンバーなど）がマージリクエストをオープンするとき:
  - MR がドキュメント変更のみを含む場合、テクニカルライターは:
    - コンテンツをレビューし、提案を行う。
    - MR で明示的な承認を得ていない限り、作成者のブランチに大きな変更（提案の適用やコミットのプッシュによる）を直接加えない。
      ブランチへのプッシュは解決が難しいマージコンフリクトを引き起こす可能性があり、コンテンツが誤って上書きされる可能性があります。
    - ライターが作成者のブランチに直接変更を加えることについて作成者の同意を得ている場合にのみ、提案やコミットを使って自分で変更を加えられる。
      これらの場合、正確性を確保するために、ライターがマージする前に作成者が必ずテクニカルライターの変更をレビューする必要があります。
    - MR がマージ間近の場合、**Apply suggestion** 機能を使って小さな提案を適用できる。
      ライターは、追加のレビューなしで、句読点の欠落、タイポ、パイプラインの失敗などを修正できます。
    - ドキュメント MR の準備が整ったら承認してマージする。
  - MR が主にコード変更で、ドキュメント更新も含む場合、テクニカルライターは:
    - ドキュメント、UI テキスト、エラーメッセージの変更について提案を行うが、提案を自分では適用すべきではない。
      コード MR に何らかの変更を加えると、テクニカルライティングの提案に合わせてコードや仕様をエンジニアが更新する必要があることが多いため、パイプラインが失敗する可能性があります。
    - ドキュメント変更がマージ可能であれば MR を承認する。
    - コード MR をマージしない。MR は、コード変更もレビューするエンジニアがマージする必要があります。
  - MR が主にドキュメント変更だが、変更に合わせてリンクを更新する小さなコード変更も含む場合、テクニカルライターは:
    - ドキュメントのみの MR と同じワークフローを使ってコンテンツをレビューする。
    - MR がすべての[必要な承認](#merge-rights)を得ている場合に*のみ*マージできる。

レビューのターンアラウンドタイムについて詳しくは、[Review-response SLO](../../../engineering/workflow/code-review/#review-response-slo) を参照してください。

#### Triaging automated group mentions

ボットまたはコミュニティコントリビューターが、CODEOWNERS に基づいて `@gl-docsteam` または複数のテクニカルライターにメンションしたとき、TW は次のことに名乗りを上げるべきです。

1. MR をスキャンし、[Selecting a reviewer](#selecting-a-reviewer) のガイドラインに従って、自分がレビューに名乗りを上げるか、どの TW がレビューすべきかを判断する。
1. 次に、MR が:
   - レビューの準備ができているように見える場合、選ばれた TW をレビュアーとしてアサインする。
   - レビューの準備ができていないように見える場合、準備ができたら選ばれた TW にメンションするようコントリビューターに求めるコメントを残す。
1. ボットのコメントを編集し、チームメンションをコードとしてフォーマットする。たとえば: ``Hi `@gl-docsteam`! Please review this documentation merge request.`` これにより、他の TW が MR の参加者リストから外れ、それに関する通知を受け取らなくなります。To-do 通知はバッククォート付きのユーザー名を表示するよう更新されるため、To-do リストから作業しているチームメンバーは、MR が対応済みであることを視覚的なヒントとして得られます。

### Selecting a reviewer

ほとんどの場合、テクニカルライターは [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使って、テクニカルライティングレビューの担当者を特定すべきです。ページのフィルタがテクニカルライターのみを表示するように設定され、**Assign events last 7 days** でソートされていることを確認してください。

手の空いているテクニカルライターを得るには、ダッシュボードページで **Spin the wheel!** を選択します。選ばれたテクニカルライターがすでに多くのレビューをアサインされている、または最近非常に忙しかった特定のケースでは、**Spin the wheel!** を再度選択して別のライターを得ることができます。

特定の担当者を必要とするコンテンツがある場合、または DRI がいるページ（ドキュメントスタイルガイドなど）のマージリクエストがある場合、そのような場合はその人物にレビューを特別にアサインできます。

### Determining Technical Writer availability

テクニカルライターが一般的なチームのマージリクエストレビューに忙しすぎて、自分のグループや他の優先事項に集中する必要がある場合があります。そのような場合、テクニカルライターは **Busy** チェックボックスを選択し、🔴 `:red_circle:` を追加することで GitLab ステータスを更新でき、これによりリビュアールーレットに自分の名前が表示されなくなります。

たとえば、あるマイルストーンのリリース当番のテクニカルライターは、リリースポストやその他の要件に集中するために、[リリース日](/handbook/engineering/releases/)の前週に自分のステータスに busy インジケーターを追加すべきです。

それ以外のすべてのケースでは、テクニカルライターは自分のプロフィールに busy インジケーターを追加（および削除）できますが、busy インジケーターは一度に 2 日を超えて設定せず、2 週間に 1 回を超えて使用しないようお願いします。（リリース中の busy インジケーターの使用はこれに影響しないことに注意してください。）レビュールーレットに参加しない時間がさらに必要な場合は、マネージャーに相談して支援を受けられるようにしてください（これには busy インジケーターの追加使用が含まれる場合があります）。

## Merge rights

テクニカルライティングチームは、そのロールの一環として、GitLab プロジェクトへのマージ権限（[Maintainer アクセス](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)を通じて）を与えられています。すべての開発者が Maintainer アクセスを得られるわけではないため、テクニカルライターはこの権限を責任を持って使用しなければなりません。

Maintainer として、テクニカルライターはマージするものを次に限定しなければなりません。

- ドキュメント（通常は Markdown 形式のファイル）。
- 適切なエンジニアの承認を得た、コードファイル内の UI テキスト、エラーメッセージ、リンク関連の更新。
  次の場合、エンジニアの承認をスキップし、[TW リーダーシップチーム](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)のメンバーまたは `@marcel.amirault` にコード変更の承認を求めることができます。
  - ドキュメント MR 内の唯一のコード変更が、ドキュメントファイルまたはアンカー名の変更に合わせたリンク修正である、かつ
  - パイプラインが正常に完了した。
- リンターなどのドキュメント関連ツールや設定、および [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトへの変更。エンジニアがコードレビューとマージに対応できます。

加えて、テクニカルライターは次を行わなければなりません。

- 失敗したパイプラインがある MR を決してマージしない。
- マージ前に、適切なラベルとマイルストーンを付けて、MR が完成していることを確認する。
- DRI が MR をレビューおよび承認したことを確認する。

## Onboarding Technical Writers

テクニカルライターはオンボーディング中、シャドーグループにアサインされ、その後トレーニーとして貢献を開始します。ベテランのテクニカルライターがそのプロセスを通じてコーチングします。

オンボーディングのフェーズとタスクについて詳しくは、[テクニカルライターオンボーディングテンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md)を参照してください。

## Standups

私たちは、週 2 回のスタンドアップ（火曜と木曜の現地時間午前 10:00）と週次のランダムな質問（水曜の午後 12:00 に実施）のために [Geekbot](https://app.geekbot.com/dashboard/home) を設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

デイリースタンドアップに新しいメンバーを追加するには。

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、求められたら Slack アカウントを使ってサインインする。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members) スタンドアップを選択し、**Add participants** エリアで名前からメンバーを検索する。
1. 新しく追加されたメンバーに Manage アクセスを与え、右上の **Save** を選択する。

Weekly Wednesday Question スタンドアップに新しいメンバーを追加するには。

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、求められたら Slack アカウントを使ってサインインする。
1. [Weekly Wednesday Question](https://app.geekbot.com/dashboard/standup/28408/manage?members) スタンドアップを選択し、**Add participants** エリアで名前からメンバーを検索する。
1. 新しく追加されたメンバーに manage アクセスを与え、右上の **Save** を選択する。

テクニカルライティングチームのメンバーとして、ランダムな水曜の質問リストにあなたの質問を追加することが推奨されます！ そのためには。

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions) にアクセスする。
1. **Questions** セクションの下に、「This is a random set of questions」という質問があります。右側の 2 つの矢印にカーソルを合わせ、**Edit** を選択する。
1. 一番下までスクロールし、**Add question** を選択する。
1. **Save questions** を選択する。

## Community contribution opportunities

私たちは、[コンテンツの改善](https://docs.gitlab.com/development/contributing/)、および https://docs.gitlab.com にあるドキュメントウェブサイトの開発の両方を歓迎します。

コミュニティ貢献について詳しくは、次を参照してください。

- [List of available issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [GitLab Docs repository](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## Make an urgent content update on docs.gitlab.com

ドキュメントウェブサイトは 1 時間ごとに更新されます。まれに、ドキュメント更新をもう少し速く公開しなければならないことがあります。緊急の更新が必要な場合は、[ドキュメントサイトを手動でデプロイする](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production)手順に従ってください。

## Report a docs website problem or infrastructure issue

ウェブサイトのバグや機能リクエストは、[GitLab Docs プロジェクトの Issue リスト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues)で報告してください。

障害やウェブサイトの可用性の問題については、[Docs site infrastructure](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md) を参照してください。

## Related topics

- [Documentation workflow](https://docs.gitlab.com/development/documentation/workflow/)
- [Set up your local environment](https://docs.gitlab.com/development/documentation/authoring_environment.html)
- [Documentation site architecture](https://docs.gitlab.com/development/documentation/site_architecture/)
