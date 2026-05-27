---
title: "テクニカルライティング"
upstream_path: /handbook/product/ux/technical-writing/
upstream_sha: "7f50ef5c825dfb207a7a1e42224bbd3d77dc35cc"
lastmod: 2026-05-20T09:32:02-07:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

GitLab の Technical Writing チームは、開発者、プロダクトマネージャー、コミュニティと協働して、プロダクトのドキュメントを作成します。

優れたドキュメントは、GitLab の顧客、ユーザー、管理者の進化するニーズに応えます。読者に機能やベストプラクティスについて知識を提供します。人々が GitLab を効率的に設定し、使用し、トラブルシューティングできるようにします。Technical Writing チームは、[docs.gitlab.com](https://docs.gitlab.com) サイトと、そのコンテンツ、プロセス、ツールを管理しています。

[ドキュメントのロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363)は、コンテンツと[ドキュメントウェブサイト](https://docs.gitlab.com/)の両方を改善する私たちの取り組みを推進しています。たとえば、私たちは docs.gitlab.com で情報を見つけるのに人々が苦労していることを把握しています。docs サイトのプラットフォームを刷新し、よりタスクベースの情報を提供し、コンテンツを見つけやすくするためのロードマップ項目と OKR があります。これらの大規模なプロジェクトは、機能ドキュメントに加えて完了することで、私たちのドキュメントのユーザーエクスペリエンスに継続的かつイテレーティブな改善をもたらします。

誰でもドキュメントに貢献できます。私たちの [GitLab ドキュメントガイドライン](https://docs.gitlab.com/development/documentation/)に従ってください。

## 私たちについて

チームの規模やチームメンバーについて詳しくは、[Meet Our Team](/handbook/company/team/?departmentOrDivision=Technical+Writing) を Technical Writing でフィルタリングして参照してください。私たちのチームの役割には次のものがあります:

- Intermediate、Senior、Staff レベルの [Technical Writer](/job-description-library/product/technical-writer/)。
- [Technical Writing Manager](/job-description-library/product/technical-writing-manager/)。
- [Fullstack Engineer, Technical Writing](/job-description-library/product/ux-fullstack-engineer/)。
- [Technical Writing Director](/job-description-library/product/technical-writing-manager/#director-technical-writing)。

## お問い合わせ

私たちには、さまざまな Slack チャンネルや専用の GitLab グループエイリアスを通じてお問い合わせいただけます。`@gl-docsteam` は大きなグループです。MR レビューについては、docs ページのメタデータを確認し、[指定された Technical Writer](#assignments-to-devops-stages-and-groups) を直接アサインするか、メンションしてください。

### Slack チャンネル

このチームは、ドキュメント全般に関するチャンネルと、チーム固有の Slack チャンネルを管理しています:

- `#docs`: GitLab ドキュメントに関する質問や一般的な議論、および GitLab チームメンバーによるドキュメントや UI テキストのレビュー依頼。
- `#docs-engineering`: docs ウェブサイトやその他のエンジニアリングプロジェクトに関する議論。
- `#docs-processes`: ドキュメントプロセスに関する議論。
- `#docs-tooling`: ドキュメントツールに関する議論。
- `#docs-site-changes-hugo`: [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトからの自動メッセージ。
- `#tw-team`: Technical Writing チームのチャット。
- `#tw-social`: Technical Writing チームのソーシャルチャット。

### GitLab グループエイリアス

一部のチームメンバーは特定のグループに所属しています。GitLab の Issue や MR でそれらのグループのメンバー全員に連絡するには、次のエイリアスを使用してください:

| エイリアス                                                          | GitLab グループ                                                                                                                                                                                            | 説明 |
|:---------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| `@gl-docsteam`                                                 | [gl-docsteam](https://gitlab.com/groups/gl-docsteam/-/group_members)                                                                                                                                    | Technical Writing チーム全体（リーダーシップ、ライター、エンジニア） |
| `@gitlab-org/tw-leadership`                                    | [gitlab-org/tw-leadership](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)                                                                       | リーダーシップ（Manager、Staff technical writer、Staff engineer） |
| `@gitlab-org/technical-writing/tw-docops`                      | [gitlab-org/technical-writing/tw-docops](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)                                           | [DocOps](#docops-group) |
| `@gitlab-org/technical-writing/tw-eng`                      | [gitlab-org/technical-writing/tw-eng](https://gitlab.com/groups/gitlab-org/technical-writing/tw-eng/-/group_members?with_inherited_permissions=exclude)                                           | エンジニア |
| `@gitlab-org/maintainers/gitlab-development-kit/documentation` | [gitlab-org/maintainers/gitlab-development-kit/documentation](https://gitlab.com/groups/gitlab-org/maintainers/gitlab-development-kit/documentation/-/group_members?with_inherited_permissions=exclude) | [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit) のドキュメントをレビューする Technical Writer |

## GitLab のテクニカルライティングの基礎を学ぶ

GitLab ドキュメントの更新や作成に興味がある場合は、[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals) を参照してください。
このコースは GitLab のチームメンバーとコミュニティ貢献者の両方を対象としており、次の内容を含みます:

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは docs.gitlab.com への貢献に **必須ではありません**。誰でも貢献できます！

提案やフィードバックについては、[フィードバック Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/445) を参照してください。

## ドキュメント

GitLab のドキュメントは、ユーザー、管理者、意思決定者が GitLab の機能について学び、自分たちの [DevOps ニーズ](https://about.gitlab.com/stages-devops-lifecycle/)を満たすために GitLab を最適に実装・使用できるよう手助けするために作成されています。

ドキュメントはプロダクトの不可欠な一部です。そのソースは、[GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture)内のそれぞれのパスで、プロダクトとともに開発・保管されています。
これは [docs.gitlab.com](https://docs.gitlab.com)（すべてのプロダクトドキュメントの複数バージョンを提供）と、各 GitLab インスタンスのドメインの `/help/` パス（そのインスタンスのバージョン向けのコンテンツ）で公開されています。

ドキュメントは、すべてのプロダクト情報の[単一の信頼できる情報源（single source of truth）](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)です。
私たちは、完全で、正確で、使いやすいドキュメントを作成することを目標に、[docs-first 方法論](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)に従っています。
ドキュメントは、必要な情報を簡単に閲覧・検索できるべきであり、また、ドキュメント自体に簡単に貢献できるべきです。

ドキュメントへの貢献を始めるには、[Contribute to the GitLab documentation](https://docs.gitlab.com/development/documentation/) を参照してください。
標準とガイドラインについては、[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)と[ワードリスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/)を参照してください。

## 責務

チームメンバーは特定の DevOps stage group に[アサイン](#assignments)されます。Technical Writing チームは、広く、ドキュメントコンテンツと UI テキストの両方を開発することと、他の人がコンテンツを開発する際に手助けすることに責任を持ちます:

- 多くのエンジニアリングプロジェクトのドキュメントを保守する。
- コミュニティのニーズを満たすために、ときには新しいコンテンツを開発する。
- ドキュメント計画のレビューと協働、ドキュメントのマージリクエストや最近マージされた docs のレビュー、コンテンツがスタイルと言語の標準を満たしていることの確認。
- 完全性とスムーズなユーザーエクスペリエンスを確保するために、改善されたドキュメントを再編成、刷新、執筆する。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなど、UI テキストについて Product Designer と協働する。
- 月次の[リリースポスト](https://docs.gitlab.com/development/documentation/release_notes/)の Technical Writing Lead を務める。

### 優先順位付け

利害関係者のニーズを満たすための作業を評価する際、私たちは次の順序で優先順位を付けます:

1. 機能作業（新機能のドキュメント化、UI テキストに関するガイダンスの提供を含む）
1. OKR 関連の作業
1. docs の改善とバックログ Issue（stage lead 作業、docs の技術的負債、コンテンツトピック設計の実装を含む）
1. その他すべてのタスク（DocOps タスクを含む）

### プロセス

このチームは、効率的なプロセスの開発と保守に責任を持ちます。これには次のものが含まれます:

- GitLab の docs を最新の状態に保つためのプロセスが整備され、遵守されていることを確保する。
- Product および Engineering とのドキュメントワークフロー、Documentation Team のワークフロー、作業分担に従い、それを最適化する。
- docs 関連の Issue をトリアージする。
- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)を洗練させ、GitLab ドキュメントとその貢献プロセスに関するコンテンツを継続的に改善する。
- コミュニティによる docs への貢献を効率的に処理しつつ、誰もがドキュメントに貢献しやすくする。

#### スタイルガイド

[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)は、プロダクトドキュメントとリリースポストのための言語とスタイルのガイダンスを提供します。

どの Technical Writer（またはその他の貢献者）も、`~tw-style` ラベルを付けて Issue やマージリクエストを作成し、その Issue や MR を Style Guide DRI にアサインすることで、ドキュメントのスタイルの更新や追加を提案できます。GitLab チームメンバーは `#docs` Slack チャンネルも使用できます。

完了したスタイル関連の Issue を追跡するには、次の検索を使用してください:

- [GitLab プロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [GitLab プロジェクトのスタイル MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [Technical Writing プロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)

#### 翻訳と国際化

誰でも GitLab の英語から他言語への翻訳に貢献できます。
GitLab における翻訳と国際化について詳しくは、[国際化](/handbook/marketing/localization/category_internationalization/)を参照してください。
翻訳貢献のステップバイステップガイドについては、[GitLab の翻訳](https://docs.gitlab.com/development/i18n/translation/)を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/) サイトは英語と日本語で利用できます。
ローカライゼーションプロセスについて詳しくは、[プロダクトドキュメントのローカライゼーション](/handbook/marketing/localization/tech_docs_localization/)を参照してください。

## アサインメント

Technical Writer (TW) は[アサインされたグループ](#assignments-to-devops-stages-and-groups)と協働します。TW は[その他の作業](#assignments-to-other-projects-and-subjects)にアサインされることもあります。

docs.gitlab.com の一部のコンテンツは [TW によるレビューを受けません](#content-not-reviewed-by-tws)。

<a id="designated-technical-writers">

### DevOps Stage と Group へのアサインメント

指定された Technical Writer は、アサインされた[グループ](/handbook/product/categories/)の頼れる存在です。彼らは他のチームメンバーと協働して、新しいドキュメントの計画、既存ドキュメントの編集、ドキュメントへの変更案のレビュー、UI マイクロコピーへの変更の提案を行い、また、ドキュメントが必要なあらゆる状況で、一般的に subject matter expert (SME) とパートナーを組みます。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="Note" color="primary" %}}
**ドキュメントページのメタデータからここに誘導された場合:**

- このメタデータは開発者のオーナーシップを示すものではなく、適切な Technical Writer に誘導することを意図しています。
- 開発グループの一員で、ドキュメントページにメタデータを追加したい場合は、議論のために [TW team tasks プロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/)で Issue を作成してください。追加の議論は [Issue 547](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/547) にあります。
- ステージが `none` と記載されている場合は、[DRI がいるか](#assignments-to-other-projects-and-subjects)を確認するか、[roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用してください。
{{% /alert %}}

Technical Writer は他のステージのドキュメントのレビューと改善を奨励されますが、必須ではありません。自分がオーナーではない docs に貢献する際は、アサインされた TW のオーナーシップを尊重し、その docs に重要な変更を加える場合は必ずレビューと承認を依頼する必要があります。

Technical Writer が [PTO を取得している](#technical-writer-pto)とき、チーム全体がそのバックアップとして機能します。

<!-- vale handbook.Spelling = NO -->

### セクションリード

Technical Writing Manager は、主要な[セクション](/handbook/product/categories/)にアサインされます。
指定された Manager は、アサインされたセクションの頼れる存在です。彼らはリーダーシップグループでテクニカルライティングを代表し、チームの窓口として機能します。

{{% product/tech-writing-sections %}}

これらのセクションは次を表します:

| 領域                                             | アサインされた Manager |
|:-------------------------------------------------|:--------------------|
| AI, Analytics & Monetization, Platforms | {{< member-by-name "Sarah Watt" >}} |
| Core DevOps, Security  | {{< member-by-name "Robert Landry" >}} |

### ステージリード

{{< alert type="note" >}}

このセクションは、FY2025 の Q1 と Q2 に試行し、2025 年の Q3 により広く展開したプロセスを概説しています。このプロセスは変更される可能性があります。

{{< /alert >}}

一部の Technical Writer は、特定の [DevOps stage](#stage-leads) の **stage lead** としてアサインされます。

| ステージ            | アサインされた stage lead |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD (on hold) |
| Application Security Testing | {{< member-by-name "Russell Dickenson" >}} |

stage lead はステージ全体にわたって作業することも、ステージ内のグループのサブセットで作業することもあります。
彼らはステージ内のグループにアサインされた他の Technical Writer をサポートします。

stage lead は:

- Technical Writer と同じ[責務](#responsibilities)を担いますが、アサインされたステージのドキュメントをプロアクティブに作成・改善することにより的を絞った焦点を当てます。
- 時間の約 70% を、アサインされたグループ向けの[新機能と機能強化](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change)について開発者が作成した Issue とマージリクエストのレビューに費やします。
- 残りの時間を次に費やします:
  - アサインされた**ステージ**のドキュメントのニーズやギャップに対応するためのコンテンツの作成と洗練（たとえば、チュートリアルやユースケースベースのコンテンツの執筆、既存コンテンツの再構築、情報アーキテクチャの作業）。
  - ステージ内の他のライターがドキュメントの改善に貢献するのをサポートする。
- 3 つのマイルストーンにわたって対処を目指すコンテンツのギャップと改善点を概説する四半期計画 Issue を完了します（たとえば、[FY25Q3 Stage lead planning issue: Secure](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1067)）。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md) は、四半期開始前の最終月の 20 日に自動的に作成され、ステージ内のすべての Technical Writer にアサインされます。
- 彼らが推進または意見を提供するドキュメント改善 MR に、関連する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead)を適用します。このラベルにより、stage lead プロセスから生まれる改善を、私たちのパフォーマンス指標 (PI) の 1 つとして追跡できます。[Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1)は GitLab チームメンバーのみがアクセス可能です。
- ドキュメントの改善について他の stage lead と協働します。

時間が経ち、stage lead あたりのアサインされるグループが減るにつれて、stage lead がプロアクティブな作業に費やす時間を 30% ではなく 70% にすることが理想的な目標です。

[ドキュメントの改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements)について、stage lead は進行中および計画中のドキュメントの拡充と追加を追跡する Issue ボードの作成に責任を持ちます。

### DocOps グループ

[DocOps](https://www.writethedocs.org/guide/doc-ops/) は DevOps に似ていますが、ドキュメント向けのものです。ドキュメントの作成、管理、デプロイを効率化するのに役立つアプローチです。

一部の Technical Writer は [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops)のメンバーであり、次のことに責任を持ちます:

- CI/CD パイプラインやローカルマシンでのテストと lint を通じてコンテンツの品質を維持する。
- 依頼があったとき、またはそれらのエンジニアがオンラインでないときに、[Docs Engineer](/job-description-library/product/ux-fullstack-engineer/) のオペレーションタスクを支援する。たとえば、Pages の設定、デプロイ、スケジュールされたパイプライン、review app の支援。
- lint ツールの依存関係を更新し、それらの更新を upstream のドキュメントプロジェクトに展開する。
  DocOps グループは、ドキュメントウェブサイトのコード、インフラ、ビルドスクリプトには責任を持ちません。
  DocOps タスクは、機能作業や OKR 関連の作業よりも下位に[優先順位付け](#prioritization)されます。
- [TW: DocOps issue board](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing) を監視する。

DocOps グループへの参加はチームの要件に基づきます。参加に興味がある場合は、マネージャーに相談してください。

#### ドキュメントのテスト

DocOps グループは、GitLab のドキュメント（およびその他の技術的コンテンツ）の問題をテストするためのツールキットを開発・保守しています。これらのツールキットには次のものが含まれます（ただしこれらに限りません）:

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイルのパーミッションと命名: `lint-doc.sh`

lint ルールやツールへの変更を提案するには:

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing) ラベルを付けて Issue またはマージリクエストを作成する。
1. Issue または MR で [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops) をメンションする。

DocOps グループは、この作業を他の[テクニカルライティングの優先事項](#prioritization)とのバランスを取りながら進めます。

### その他のプロジェクトやテーマへのアサインメント

その他のプロジェクトやテーマでの協働について:

| テーマ                                                                              | アサインされた Technical Writer |
|:--------------------------------------------------------------------------------     |:--------------------------|
| ドキュメントサイト                                                               | {{< member-by-name "Sarah Watt" >}}, {{< member-by-name "Robert Landry" >}} |
| ドキュメントサイトのバックエンド（コード、自動化）                                    | {{< member-by-name "Pearl Latteier" >}} |
| ドキュメントの情報アーキテクチャ（コンテンツの再構築と左ナビの大幅な変更） | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} {{< member-by-name "Suzanne Selhorn" >}} |
| [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content) 配下の [GitLab Design System（「Pajamas」）](https://design.gitlab.com/)の情報 | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [スタイルガイド](#style-guide)                                                          | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [ドキュメントのテスト](#documentation-testing)（DocOps/Vale/markdownlint）           | {{< member-by-name "Kati Paizee" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}, {{< member-by-name "Achilleas Pipinellis" >}}, {{< member-by-name "Evan Read" >}}, {{< member-by-name "Jon Glassman" >}}, {{< member-by-name "Lorena Ciutacu" >}}, {{< member-by-name "Marcel Amirault" >}}, {{< member-by-name "Phillip Wells" >}}, {{< member-by-name "Russell Dickenson" >}} |

### TW がレビューしないコンテンツ

Technical Writer は次のコンテンツをレビューしません:

- `doc/development` ディレクトリ。どの Maintainer も `doc/development` ディレクトリの docs をマージできます。
  唯一の例外は `/doc/development/documentation` で、ここではライターがガイドラインを保守しています。
- `doc/solutions` ディレクトリ。この情報は Solutions Architect が作成、レビュー、マージ、保守します。

### Stable counterpart

Technical Writing チームは、チーム外の stable counterpart から `docs-gitlab-com` プロジェクトについて支援を受けています。

| テーマ          | 担当者 |
|:-----------------|:-------|
| バックエンドレビュー  | TBD |
| フロントエンドレビュー | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| サポート          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## docs サイトの統計と分析

Technical Writing チームは、満足度、見つけやすさ、有用性という 3 つの主要領域でドキュメントのパフォーマンスを追跡しています。ユーザー調査、Google Analytics、ユーザーフィードバック、コンテンツ監査、サイトの可用性を組み合わせた指標を使用します。

私たちは、GitLab、Omnibus、Charts、Operator、Runner、CLI という 6 つの主要プロジェクトで統計を追跡しています:

- ドキュメントプロジェクトには 3,100 を超えるドキュメントページと 4,400,000 語があります。
- 2020 年 5 月以降、ページ数は 165% 以上、語数は 270% 以上増加しています。
- ページ（30%）と語（30%）の大半は、左ナビの **Use GitLab** セクションにあります。

GitLab チームメンバーは、[doc metrics ページ](https://internal.gitlab.com/handbook/product/ux/technical-writing/metrics-kpis/)と docs.gitlab.com の [LookerStudio ダッシュボード](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD)で追加のドキュメント指標を閲覧できます。ダッシュボードの手順については、[Google Analytics](https://internal.gitlab.com/handbook/product/ux/technical-writing/google-analytics/) を参照してください。

## Technical Writer の PTO

Technical Writer が[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を取得するとき、チームの残りのメンバーがその間のカバーを提供します。
これらのチームメンバーは、リクエストについて追加のコンテキストを必要とする場合があります。リクエストは、*彼ら自身の*主要グループのステージ／グループおよび機能の優先事項のリストに組み込まれます。

アサインされた Technical Writer が PTO 中にグループが支援を得るための選択肢は次のとおりです:

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)。
  roulette で選ばれた Technical Writer は、Issue やマージリクエストに ping またはアサインできます。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5) チャンネルへのリクエスト。手の空いているボランティアの Technical Writer が拾います。
- 特定の、時間的制約のある進行中の作業について支援が必要な場合は、事前に手配した Technical Writer。その Technical Writer は Issue やマージリクエストで ping され、参加を開始できます。

長期の PTO（1 週間以上）を取得する場合、Technical Writer と Manager は Technical Writer の[カバー Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md)を使用すべきです。
この Issue では、誰が、何を、どのような手段でカバーを提供するかを正確に記述できます。

### PTO の取得

PTO を取得する際、Technical Writer は:

1. [不在通知メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/)が利用可能なカバーの仕組みを反映していることを確認します。
   次を確保するために、GitLab.com のステータスを最新の状態に保つことが重要です:

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs) が正確な提案を行えるようにする。
   - TW チームが Roulette ダッシュボードを確認する際に、すべてのチームメンバーの PTO ステータスを簡単に確認できるようにする。
1. グループの Slack チャンネルで、利用可能な仕組みがどこにあるかを示すメッセージを送信します。例:

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/product/ux/technical-writing/#technical-writer-pto for ways to get help.
   For urgent _named time-sensitive task_ matters, ping _named TW_.
   ```

### マージリクエストキューのチェック

Technical Writer が PTO に入る前に、そのライターまたはマネージャーは、誰がそのライターの MR キューをチェックするかを決定すべきです。
アサインされた人物は、次のいずれかを使って、少なくとも 1 日に 1 回はキューをチェックすべきです:

- [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests)の **Merge requests** ページを **Reviewer** でフィルタリングしたもの。
- カバー Issue 内の[マージリクエストキュー](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17)セクション。

アサインされたライターが作業を行う必要はありません。キューをチェックする際、彼らは次のことができます:

- レビューのために MR を自分自身にアサインする。
- Roulette を使ってレビューする他の TW を見つける。

## 定期的にスケジュールされるタスク

Technical Writer の通常のアサインされた作業に加えて、定期的に完了する必要がある反復タスクがあります:

- **リリースポストの構造チェック:** Technical Writing Lead は、各マイルストーンの終わりに公開されるリリースポストの[コンテンツをレビュー](https://docs.gitlab.com/development/documentation/release_notes/)します。アサインメントについては、[Release Post Scheduling](/handbook/product/ux/technical-writing/#schedule) ページを参照してください。
- **月次ドキュメントリリース:** 各マイルストーンの終わりに、Technical Writer が [docs サイトの月次リリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md)します。このタスクにアサインされる Technical Writer は、前のマイルストーンでリリースポストの構造チェックを完了したライターです。
- **docs プロジェクトのメンテナンスタスク:** 毎月、1 人の Technical Writer がドキュメントサイトとそのコンテンツのメンテナンスタスクの完了にアサインされます。これには、メンテナンス作業を追跡するために `technical-writing` プロジェクトで [`tw-monthly-tasks` テンプレートを使って新しい Issue を作成する](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks)ことが含まれます。メンテナンス Issue に記載された内容を超える追加作業が必要な場合、Technical Writer は必要に応じてマージリクエストや追加の Issue を作成します。

### スケジュール

<!-- vale handbook.Spelling = NO -->

| バージョン | 月 | リリースポストチェック | 月次 doc リリース | メンテナンスタスク |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.7 | 2026 年 12 月 | TBD | TBD | {{< member-by-name "Isaac Durham" >}} |
| 19.6 | 2026 年 11 月 | TBD | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | 2026 年 10 月 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Phillip Wells" >}} |
| 19.4 | 2026 年 9 月 | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Phillip Wells" >}} | {{< member-by-name "Roshni Sarangadharan" >}} |
| 19.3 | 2026 年 8 月 | {{< member-by-name "Phillip Wells" >}} | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} |
| 19.2 | 2026 年 7 月 | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} | {{< member-by-name "Achilleas Pipinellis" >}} |
| 19.1 | 2026 年 6 月 | {{< member-by-name "Lysanne Pinto" >}} | {{< member-by-name "Achilleas Pipinellis" >}} | {{< member-by-name "Jon Glassman" >}} |
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

## レビュー

Technical Writer は、GitLab チームメンバーやコミュニティ貢献者が作成したドキュメント変更を含むマージリクエストのレビューにアサインされます。レビューは、[stage group](/handbook/product/categories/#devops-stages) やその他の専門分野への [Technical Writer のアサインメント](#assignments)に従ってテーマ別にアサインされます。

### 編集のレベル

Technical Writer は次の編集レベルを使用します:

**Light**

- パイプラインがパスし、明らかな文法、スペル、句読点の誤りが存在しないことを確認する。

**Medium**

- パイプラインがパスし、文法、スペル、句読点の誤りが存在しないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。

**Heavy**

- パイプラインがパスし、文法、スペル、句読点の誤りが存在しないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点を念頭に置いて書かれていることを確認する。
- コンテンツが[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)のガイドラインを満たしていることを確認する。
- コンテンツが定義された[トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)に準拠していることを確認する。
- コンテンツがより大きなドキュメントセットによく適合していることを確認する。
- UI テキストについては、コンテンツが [Pajamas Design System](https://design.gitlab.com/) と [Technical Writer Word List](https://docs.gitlab.com/development/documentation/styleguide/word_list/) で定義された標準を満たしていることを確認する。

#### ライターが編集レベルをどのように適用するか

品質、スピード、リソースの制約のバランスを取るため、Technical Writer は異なるドキュメントに異なる編集レベルを適用します。

これらのガイドラインは一般的な指針を提供することを意図しています。確定したものではなく、ケースバイケースで上書きできます。

次の項目は、特に依頼されない限り編集を **受けません**（依頼された場合は **light** 編集を受けます）:

- GitLab リポジトリの貢献ガイドライン（`/development` ディレクトリ内）。
- GitLab リポジトリの `doc/solutions` ディレクトリ。この情報は Solutions Architect が所有します。

次の項目は **light** 編集を受けます:

- 5 つの主要な GitLab リポジトリ（GitLab、Charts、Operator、Omnibus、Runner）以外のドキュメント。
- 非推奨化と削除。
- 他の Technical Writer が作成したマージリクエスト。ただし、その MR が OKR の一部である場合、または作成者がより踏み込んだ編集を依頼した場合を除く。

次の項目は **medium** 編集を受けます:

- 日々のプロダクトドキュメントのリクエスト:
  - 新機能作業（[stage group](/handbook/product/categories/#devops-stages) から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- リリースポスト項目

次の項目は **heavy** 編集を受けます:

- トピックタイプの再構築の取り組み（[「CTRT」](https://docs.gitlab.com/development/documentation/topic_types/)）
- OKR 作業
- UI テキスト

いずれの場合も、Technical Writer は、信頼できる情報源がドキュメントの技術的な正確性をチェックしたことを確認します。
Technical Writer は、必要な知識を持っているか、必要な検証を効率的に実施できる場合、その信頼できる情報源として機能できます。

### レビューのワークフロー

[ベロシティ](/handbook/engineering/development/principles/#velocity)と品質のバランスを取るため、Technical Writer は次のワークフローを使用します:

- Technical Writer がマージリクエストを開いた場合、別の Technical Writer がレビューしてマージする必要があります。
  - Technical Writer は自分の MR を承認またはマージすべきではありません。代わりに、Maintainer アクセスを持つピアに[レビューを依頼](#selecting-a-reviewer)すべきです。レビュアーは最終承認後に MR をマージします。
    - この要件は GitLab の [Code Review Guidelines](https://docs.gitlab.com/development/code_review/) に沿っており、GitLab の [Change Management Policy](/handbook/security/security-and-technology-policies/change-management-policy/) を満たします。
- それ以外の誰か（開発者、コミュニティメンバー、Support チームメンバーなど）がマージリクエストを開いた場合:
  - MR がドキュメント変更のみを含む場合、Technical Writer は:
    - コンテンツをレビューして提案を行う。
    - MR で明示的な承認を得ていない限り、作成者のブランチに直接大きな変更を加えない（提案を適用したり、コミットをプッシュしたり）。
      ブランチへのプッシュは解決が難しいマージコンフリクトを引き起こす可能性があり、コンテンツが誤って上書きされることがあります。
    - 作成者のブランチに直接変更を加えることについて作成者の同意がある場合に限り、提案やコミットを使って自分で変更を加えることができる。
      これらの場合、正確性を確保するため、作成者はライターがマージする前に必ず Technical Writer の変更をレビューする必要があります。
    - MR がマージ間近の場合、**Apply suggestion** 機能を使って小さな提案を適用できる。
      ライターは追加のレビューなしで、欠落した句読点、タイポ、パイプラインの失敗などを修正できます。
    - ドキュメント MR の準備が整ったら承認してマージする。
  - MR が主にコード変更で、ドキュメントの更新も含む場合、Technical Writer は:
    - ドキュメント、UI テキスト、エラーメッセージの変更について提案を行うが、自分で提案を適用すべきではない。
      コード MR に変更を加えると、テクニカルライティングの提案に合わせてコードや spec をエンジニアが更新する必要が生じることが多く、パイプラインが失敗する可能性があります。
    - ドキュメント変更がマージの準備が整っている場合は MR を承認する。
    - コード MR はマージしない。MR は、コード変更もレビューするエンジニアがマージする必要があります。
  - MR が主にドキュメント変更だが、変更に合わせてリンクを更新する小さなコード変更も含む場合、Technical Writer は:
    - ドキュメントのみの MR と同じワークフローを使ってコンテンツをレビューする。
    - MR が[必要なすべての承認](#merge-rights)を得ている場合に**限り**マージできる。

レビューのターンアラウンドタイムについて詳しくは、[Review-response SLO](../../../engineering/workflow/code-review/#review-response-slo) を参照してください。

#### 自動化されたグループメンションのトリアージ

ボットまたはコミュニティ貢献者が、CODEOWNERS に基づいて `@gl-docsteam` または複数の Technical Writer をメンションした場合、TW は次のことに自発的に取り組むべきです:

1. MR をスキャンし、[レビュアーの選定](#selecting-a-reviewer)のガイドラインに従って、自分がレビューに名乗り出るか、どの TW がレビューすべきかを判断する。
1. 次に、その MR が:
   - レビューの準備が整っているようであれば、選定した TW をレビュアーとしてアサインする。
   - レビューの準備が整っていないようであれば、貢献者に対して、準備ができたら選定した TW をメンションするよう依頼するコメントを残す。
1. ボットのコメントを編集し、チームメンションをコードとしてフォーマットする。例: ``Hi `@gl-docsteam`! Please review this documentation merge request.`` これにより、他の TW が MR の参加者リストから削除され、その MR に関する通知を受け取らなくなります。To-do 通知はユーザー名をバッククォートで囲んで表示するよう更新されるため、To-do リストから作業しているチームメンバーは、その MR が対応済みであることを視覚的に把握できます。

### レビュアーの選定

ほとんどの場合、Technical Writer は [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使ってテクニカルライティングのレビューを行う人物を特定すべきです。ページのフィルターが Technical Writer のみを表示するように設定されており、**Assign events last 7 days** でソートされていることを確認してください。

手の空いている Technical Writer を取得するには、ダッシュボードページで **Spin the wheel!** を選択してください。選ばれた Technical Writer がすでに多くのレビューをアサインされている、または最近非常に忙しかった特定のケースでは、**Spin the wheel!** をもう一度選択して別のライターを取得できます。

特定の担当者が必要なコンテンツがある場合、または DRI を持つページ（ドキュメントスタイルガイドなど）のマージリクエストがある場合は、その人物にレビューを特定してアサインできます。

### Technical Writer の対応可否の判断

Technical Writer がチーム全体のマージリクエストレビューに対応するには忙しすぎて、自分のグループやその他の優先事項に集中する必要がある場合があります。そのような場合、Technical Writer は **Busy** チェックボックスを選択して 🔴 `:red_circle:` を追加することで GitLab のステータスを更新でき、これにより reviewer roulette に自分の名前が表示されないようにできます。

たとえば、あるマイルストーンのリリース担当の Technical Writer は、リリースポストやその他の要件に集中するため、[リリース日](/handbook/engineering/releases/)の前週に自分のステータスに busy 表示を追加すべきです。

それ以外のすべての場合、Technical Writer はプロフィールに busy 表示を追加（および削除）できますが、busy 表示は一度に 2 日を超えて表示しないこと、また 2 週間に 1 回を超えて使用しないことをお願いしています。（リリース中の busy 表示の使用はこれに影響しません。）review roulette に参加しない時間がさらに必要な場合は、マネージャーに相談して支援を受けてください（これには busy 表示の追加使用が含まれる場合があります）。

## マージ権限

Technical Writing チームは、その役割の一環として、GitLab プロジェクトへのマージ権限（[Maintainer アクセス](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)を通じて）を与えられています。すべての開発者が Maintainer アクセスを得られるわけではないため、Technical Writer はこの特権を責任を持って使用しなければなりません。

Maintainer として、Technical Writer がマージするものは次に限定しなければなりません:

- ドキュメント。通常は Markdown 形式のファイル。
- 適切なエンジニアの承認を得た、コードファイル内の UI テキスト、エラーメッセージ、リンク関連の更新。
  次の場合は、エンジニアの承認をスキップして、[TW leadership チーム](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)のメンバーまたは `@marcel.amirault` にコード変更の承認を依頼できます:
  - ドキュメント MR 内の唯一のコード変更が、ドキュメントファイルやアンカー名の変更に合わせたリンク修正であり、かつ
  - パイプラインが正常に完了している。
- linter などのドキュメント関連のツールと設定、および [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトへの変更。エンジニアがコードレビューとマージのために対応可能です。

さらに、Technical Writer は次のことを行わなければなりません:

- パイプラインが失敗した MR を決してマージしない。
- 適切なラベルとマイルストーンを付けて、MR がマージ前に完成していることを確認する。
- DRI が MR をレビューして承認したことを確認する。

## Technical Writer のオンボーディング

Technical Writer はオンボーディング中、シャドーグループにアサインされ、その後トレーニーとして貢献を始めます。ベテランの Technical Writer がそのプロセスを通じて彼らをコーチングします。

オンボーディングのフェーズとタスクについて詳しくは、[Technical Writer オンボーディングテンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md)を参照してください。

## スタンドアップ

私たちは、週 2 回のスタンドアップ（ローカルタイムゾーンで火曜と木曜の午前 10 時）と週次のランダムな質問（水曜の午後 12 時に実施）のために [Geekbot](https://app.geekbot.com/dashboard/home) を設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

日次スタンドアップに新しいメンバーを追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、求められたら Slack アカウントでサインインする。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members) スタンドアップを選択し、**Add participants** 領域でメンバーを名前で検索する。
1. 新しく追加されたメンバーに Manage アクセスを付与し、右上隅の **Save** を選択する。

Weekly Wednesday Question スタンドアップに新しいメンバーを追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home)にアクセスし、求められたら Slack アカウントでサインインする。
1. [Weekly Wednesday Question](https://app.geekbot.com/dashboard/standup/28408/manage?members) スタンドアップを選択し、**Add participants** 領域でメンバーを名前で検索する。
1. 新しく追加されたメンバーに manage アクセスを付与し、右上隅の **Save** を選択する。

Technical Writing チームのメンバーとして、ランダムな水曜の質問のリストに自分の質問を追加することを奨励されています！追加するには:

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions) にアクセスする。
1. **Questions** セクションの下に「This is a random set of questions」という質問が表示されます。右側の 2 つの矢印にカーソルを合わせ、**Edit** を選択する。
1. 一番下までスクロールして **Add question** を選択する。
1. **Save questions** を選択する。

## コミュニティ貢献の機会

私たちは、[コンテンツの改善](https://docs.gitlab.com/development/contributing/)と、https://docs.gitlab.com にあるドキュメントウェブサイトの開発の両方を歓迎します。

コミュニティ貢献について詳しくは、次を参照してください:

- [対応可能な Issue のリスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [GitLab Docs リポジトリ](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## docs.gitlab.com で緊急のコンテンツ更新を行う

ドキュメントウェブサイトは 1 時間ごとに更新されます。まれに、ドキュメントの更新をもう少し速く公開しなければならないことがあります。緊急の更新が必要な場合は、[docs サイトを手動でデプロイする](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production)手順に従ってください。

## docs ウェブサイトの問題やインフラの問題を報告する

ウェブサイトのバグや機能リクエストは、[GitLab Docs プロジェクトの Issue リスト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues)で報告してください。

障害やウェブサイトの可用性の問題については、[Docs site infrastructure](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md) を参照してください。

## 関連トピック

- [ドキュメントワークフロー](https://docs.gitlab.com/development/documentation/workflow/)
- [ローカル環境のセットアップ](https://docs.gitlab.com/development/documentation/authoring_environment.html)
- [ドキュメントサイトのアーキテクチャ](https://docs.gitlab.com/development/documentation/site_architecture/)
