---
title: "テクニカルライティング"
upstream_path: /handbook/product/ux/technical-writing/
upstream_sha: f15ab5a3da7a00a0393f92b1eb69968e8abddf52
translated_at: "2026-06-04T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-04T08:58:35-06:00"
---

GitLab のテクニカルライティングチームは、開発者、プロダクトマネージャー、コミュニティと協力してプロダクトドキュメントを作成しています。

優れたドキュメントは、GitLab の顧客、ユーザー、管理者の進化するニーズに応えます。機能やベストプラクティスについて読者を教育します。GitLab を効率的に設定、利用、トラブルシューティングできるようにします。テクニカルライティングチームは [docs.gitlab.com](https://docs.gitlab.com) サイトとそのコンテンツ、プロセス、ツールを管理しています。

[ドキュメントロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363) は、コンテンツと [ドキュメントウェブサイト](https://docs.gitlab.com/) の両方の改善に向けた私たちの取り組みを推進しています。たとえば、docs.gitlab.com で情報を見つけにくいことを認識しています。ドキュメントサイトのプラットフォームを再構築し、より良いタスクベースの情報を提供し、コンテンツを見つけやすくするためのロードマップ項目と OKR があります。これらの大規模プロジェクトは、機能ドキュメントに加えて完了することで、ドキュメントのユーザーエクスペリエンスに継続的・反復的な改善をもたらします。

誰でもドキュメントに貢献できます。[GitLab ドキュメントガイドライン](https://docs.gitlab.com/development/documentation/) に従ってください。

## チームについて

チーム規模やメンバーの詳細については、[Meet Our Team](/handbook/company/team/?departmentOrDivision=Technical+Writing) を Technical Writing でフィルターして参照してください。チームのロールには次が含まれます:

- [テクニカルライター](/job-description-library/product/technical-writer/) - Intermediate、Senior、Staff レベル。
- [テクニカルライティングマネージャー](/job-description-library/product/technical-writing-manager/)。
- [フルスタックエンジニア、テクニカルライティング](/job-description-library/product/ux-fullstack-engineer/)。
- [テクニカルライティングディレクター](/job-description-library/product/technical-writing-manager/#director-technical-writing)。

## 連絡先

さまざまな Slack チャンネルや専用の GitLab グループエイリアスを通じて連絡できます。`@gl-docsteam` は大きなグループです。MR レビューについては、docs ページのメタデータを確認し、[指定されたテクニカルライター](#assignments-to-devops-stages-and-groups) を直接アサインするかメンションしてください。

### Slack チャンネル

チームは、ドキュメント関連の一般チャンネルとチーム固有の Slack チャンネルを管理しています:

- `#docs`: GitLab ドキュメントに関する質問や一般的な議論、GitLab チームメンバーによるドキュメントおよび UI テキストのレビュー依頼。
- `#docs-engineering`: ドキュメントウェブサイトおよびその他のエンジニアリングプロジェクトに関する議論。
- `#docs-processes`: ドキュメントプロセスに関する議論。
- `#docs-tooling`: ドキュメントツールに関する議論。
- `#docs-site-changes-hugo`: [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトからの自動メッセージ。
- `#tw-team`: テクニカルライティングチームチャット。
- `#tw-social`: テクニカルライティングチームのソーシャルチャット。

### GitLab グループエイリアス

一部のチームメンバーは特定のグループの一員です。GitLab Issue や MR でこれらのグループのすべてのメンバーに連絡するには、次のエイリアスを使用します:

| エイリアス                                                       | GitLab グループ                                                                                                                                                                                            | 説明 |
|:---------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| `@gl-docsteam`                                                 | [gl-docsteam](https://gitlab.com/groups/gl-docsteam/-/group_members)                                                                                                                                    | テクニカルライティングチーム全体（リーダーシップ、ライター、エンジニア） |
| `@gitlab-org/tw-leadership`                                    | [gitlab-org/tw-leadership](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)                                                                       | リーダーシップ（マネージャー、Staff テクニカルライター、Staff エンジニア） |
| `@gitlab-org/technical-writing/tw-docops`                      | [gitlab-org/technical-writing/tw-docops](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude)                                           | [DocOps](#docops-group) |
| `@gitlab-org/technical-writing/tw-eng`                      | [gitlab-org/technical-writing/tw-eng](https://gitlab.com/groups/gitlab-org/technical-writing/tw-eng/-/group_members?with_inherited_permissions=exclude)                                           | エンジニア |
| `@gitlab-org/maintainers/gitlab-development-kit/documentation` | [gitlab-org/maintainers/gitlab-development-kit/documentation](https://gitlab.com/groups/gitlab-org/maintainers/gitlab-development-kit/documentation/-/group_members?with_inherited_permissions=exclude) | [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit) ドキュメントをレビューするテクニカルライター |

## GitLab テクニカルライティングの基礎を学ぶ

GitLab ドキュメントの更新または作成に関心がある場合は、
[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals) を参照してください。
このコースは、GitLab チームメンバーとコミュニティ貢献者の両方を対象としており、次の内容を含みます:

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは docs.gitlab.com に貢献するために **必須ではありません**。誰でも貢献できます！

提案やフィードバックについては、[feedback issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/445) を参照してください。

## ドキュメンテーション

GitLab のドキュメントは、ユーザー、管理者、意思決定者が GitLab の機能について学び、
[DevOps のニーズ](https://about.gitlab.com/stages-devops-lifecycle/) を満たすために
GitLab を最適に実装・使用するのを支援するために作成されています。

ドキュメントはプロダクトに不可欠な一部です。そのソースは、プロダクトとともに [GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture)
のそれぞれのパスで開発され保管されます。
[docs.gitlab.com](https://docs.gitlab.com)（すべてのプロダクトドキュメントの複数バージョンを提供）と、
各 GitLab インスタンスのドメインの `/help/` パス（そのインスタンスのバージョンのコンテンツを含む）
で公開されています。

ドキュメントは、すべてのプロダクト情報に関する [single source of truth](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot) です。
完全で正確かつ使いやすいドキュメントを作成することを目標に、
[docs-first methodology](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology) に従います。
ドキュメントは必要な情報を簡単にブラウズまたは検索できる必要があり、
ドキュメント自体にも簡単に貢献できる必要があります。

ドキュメントへの貢献を始めるには、
[Contribute to the GitLab documentation](https://docs.gitlab.com/development/documentation/) を参照してください。
基準とガイドラインについては、[the style guide](https://docs.gitlab.com/development/documentation/styleguide/)
と [word list](https://docs.gitlab.com/development/documentation/styleguide/word_list/) を参照してください。

## 責任 {#responsibilities}

チームメンバーは特定の DevOps ステージグループに [アサインされます](#assignments)。テクニカルライティングチームは、広くドキュメントコンテンツと UI テキストの開発、および他者がコンテンツを開発する際の支援を担当します:

- 多数のエンジニアリングプロジェクトのドキュメントを維持する。
- 場合によってはコミュニティのニーズに応えるための新規コンテンツの開発。
- ドキュメント計画のレビューと協力、ドキュメントマージリクエストや最近マージされたドキュメントのレビュー、コンテンツがスタイルと言語の基準を満たしていることの確認。
- 完全性とスムーズなユーザーエクスペリエンスを確保するため、ドキュメントの再構成、再構築、改善版の執筆。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなどの UI テキストについて、Product Designer と協力する。
- 月次の [release post](https://docs.gitlab.com/development/documentation/release_notes/) のテクニカルライティングリードを務める。

### 優先順位付け {#prioritization}

ステークホルダーのニーズを満たすための作業を評価する際は、次の順序で優先順位を付けます:

1. 機能作業（新機能のドキュメント化や UI テキストに関するガイダンスの提供を含む）
1. OKR 関連の作業
1. ドキュメントの改善とバックログの Issue（ステージリードの作業、ドキュメントの技術的負債、コンテンツトピック設計の実装を含む）
1. その他のすべてのタスク（DocOps タスクを含む）

### プロセス

チームは、効率的なプロセスの開発と維持を担当します:

- GitLab ドキュメントを最新の状態に保つためのプロセスが整備され、従われていることを確認する。
- Product や Engineering、ドキュメンテーションチームのワークフロー、作業の分担に関するドキュメンテーションのワークフローに従い最適化する。
- ドキュメント関連の Issue をトリアージする。
- [Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/) を改善し、GitLab ドキュメントとその貢献プロセスに関するコンテンツを継続的に改善する。
- 誰でもドキュメントに貢献しやすくしつつ、ドキュメントへのコミュニティ貢献を効率的に処理する。

#### Style Guide {#style-guide}

[Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/) は、
プロダクトドキュメントとリリースポストの言語とスタイルのガイダンスを提供します。

どのテクニカルライター（または他の貢献者）も、
`~tw-style` ラベルを付けた Issue または MR を作成し、Issue または MR を Style Guide DRI にアサインすることで、ドキュメントスタイルの更新や追加を提案できます。GitLab チームメンバーは `#docs` Slack チャンネルも使用できます。

完了したスタイル関連の Issue を追跡するには、次の検索を使用してください:

- [GitLab プロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [GitLab プロジェクトのスタイル MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [テクニカルライティングプロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)

#### 翻訳と国際化

誰でも GitLab の英語から他の言語への翻訳に貢献できます。
GitLab の翻訳と国際化について詳しく学ぶには、
[internationalization](/handbook/marketing/localization/category_internationalization/) を参照してください。
翻訳貢献のステップバイステップガイドについては、[translating GitLab](https://docs.gitlab.com/development/i18n/translation/) を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/) サイトは英語と日本語で利用可能です。
ローカライズプロセスについて詳しく学ぶには、
[product documentation localization](/handbook/marketing/localization/tech_docs_localization/) を参照してください。

## アサインメント {#assignments}

テクニカルライター (TW) は [アサインされたグループ](#assignments-to-devops-stages-and-groups) と協力します。TW は [その他の作業](#assignments-to-other-projects-and-subjects) にもアサインされる場合があります。

docs.gitlab.com の一部のコンテンツは [TW のレビュー対象外](#content-not-reviewed-by-tws) です。

<a id="designated-technical-writers">

### DevOps ステージとグループへのアサインメント {#assignments-to-devops-stages-and-groups}

指定されたテクニカルライターは、アサインされた [グループ](/handbook/product/categories/) の窓口です。
他のチームメンバーと協力して、新しいドキュメントを計画し、既存のドキュメントを編集し、
ドキュメントへの提案された変更をレビューし、UI のマイクロコピーへの変更を提案し、
ドキュメントが必要なあらゆる状況で内容専門家 (SME) と一般的に協業します。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="Note" color="primary" %}}
**ドキュメントページのメタデータからここに案内された場合:**

- メタデータは開発者の所有権を示すものではなく、適切なテクニカルライターへ案内することを意図しています。
- 開発グループの一員で、ドキュメントページにメタデータを追加したい場合は、ディスカッションのために [TW team tasks プロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/) で Issue を作成してください。追加のディスカッションは [Issue 547](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/547) にあります。
- ステージが `none` としてリストされている場合は、[DRI が存在するか](#assignments-to-other-projects-and-subjects) を確認するか、[roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用してください。
{{% /alert %}}

テクニカルライターは他のステージのドキュメントをレビュー・改善することが奨励されていますが、必須ではありません。
所有していないドキュメントに貢献する際は、アサインされた TW の所有権を尊重し、
そのドキュメントに重要な変更を追加する場合は必ずレビューと承認を依頼する必要があります。

テクニカルライターが [PTO 中](#technical-writer-pto) の場合、チーム全体がバックアップとして機能します。

<!-- vale handbook.Spelling = NO -->

### セクションリード

テクニカルライティングマネージャーは、主要な [セクション](/handbook/product/categories/) にアサインされます。
指定されたマネージャーは、アサインされたセクションの窓口です。リーダーシップグループでテクニカルライティングを代表し、
チームの連絡先として機能します。

{{% product/tech-writing-sections %}}

これらのセクションは次を表します:

| エリア                                           | アサインされたマネージャー |
|:-------------------------------------------------|:--------------------|
| AI, Analytics & Monetization, Platforms | {{< member-by-name "Sarah Watt" >}} |
| Core DevOps, Security  | {{< member-by-name "Robert Landry" >}} |

### ステージリード {#stage-leads}

{{< alert type="note" >}}

このセクションは、FY2025 の Q1 と Q2 で実験したプロセスを概説し、2025 年の Q3 でより広く展開しました。このプロセスは変更される可能性があります。

{{< /alert >}}

一部のテクニカルライターは、特定の [DevOps ステージ](#stage-leads) の **ステージリード** としてアサインされています。

| ステージ         | アサインされたステージリード |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD（保留中） |
| Application Security Testing | TBD（保留中） |

ステージリードは、ステージ全体、またはステージ内のグループのサブセットで作業する場合があります。
彼らはステージ内のグループにアサインされた他のテクニカルライターをサポートします。

ステージリード:

- テクニカルライターと同じ [責任](#responsibilities) を引き受けますが、アサインされたステージのドキュメントを積極的に作成・改善することにより重点を置きます。
- 約 70% の時間を、アサインされたグループの [新機能と拡張](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change) について開発者が作成した Issue とマージリクエストのレビューに費やします。
- 残りの時間を次のことに費やします:
  - アサインされた **ステージ** のドキュメントのニーズとギャップに対応するためのコンテンツの作成と改良
    （たとえば、チュートリアルやユースケースベースのコンテンツの執筆、既存コンテンツの再構成、情報アーキテクチャに関する作業）。
  - ステージ内の他のライターがドキュメント改善に貢献するのを支援する。
- 3 つのマイルストーンにわたって対処する予定のコンテンツのギャップと改善を概説する四半期計画 Issue を完了します
  （たとえば、[FY25Q3 Stage lead planning issue: Secure](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1067)）。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md) は、四半期開始前の最後の月の 20 日に、ステージ内のすべてのテクニカルライターに自動的に作成・アサインされます。
- ドキュメント改善 MR で関連する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead) を、彼らが推進または入力を提供したものに適用します。このラベルにより、ステージリードプロセスから生まれる改善をパフォーマンス指標 (PI) の 1 つとして追跡できます。[Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1) は GitLab チームメンバーのみがアクセスできます。
- ドキュメント改善について他のステージリードと協力します。

時間とともに、ステージリードあたりにアサインされるグループ数が減るにつれて、ステージリードが 30% ではなく 70% の時間を積極的な作業に費やすことを目指す志向的目標があります。

[ドキュメント改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements) のために、ステージリードは進行中および予定されたドキュメントの強化と追加を追跡する
Issue ボードを作成する責任があります。

### DocOps グループ {#docops-group}

[DocOps](https://www.writethedocs.org/guide/doc-ops/) は DevOps に似ていますが、ドキュメントのためのものです。これは、ドキュメントの作成、管理、デプロイを効率化するのに役立つアプローチです。

一部のテクニカルライターは [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops) のメンバーで、
次を担当します:

- CI/CD パイプラインとローカルマシンでのテストと linting を通じてコンテンツ品質を維持する。
- 依頼があった場合や [Docs Engineers](/job-description-library/product/ux-fullstack-engineer/) がオンラインでない場合に、Docs Engineers の運用タスクを支援する。たとえば、Pages 設定、デプロイ、スケジュールされたパイプライン、レビューアプリの支援。
- linting ツールの依存関係を更新し、それらの更新をアップストリームのドキュメントプロジェクトに展開する。
  DocOps グループはドキュメントウェブサイトのコード、インフラ、またはビルドスクリプトを担当しません。
  DocOps タスクは、機能作業や OKR 関連作業の下に [優先順位付け](#prioritization) されます。
- [TW: DocOps issue board](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing) を監視する。

DocOps グループへの参加は、チームの要件に基づきます。参加への関心を表明するには、マネージャーに相談してください。

#### ドキュメントテスト {#documentation-testing}

DocOps グループは、GitLab のドキュメント（およびその他の技術コンテンツ）の問題をテストするためのツールキットを開発・維持しています。これらのツールキットには、次が含まれます（これらに限定されません）:

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイルパーミッションと命名: `lint-doc.sh`

linting ルールやツールへの変更を提案するには:

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing) ラベル付きの
   Issue またはマージリクエストを作成します。
1. その Issue または MR で [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops) をメンションします。

DocOps グループは、この作業をその他の [テクニカルライティングの優先順位](#prioritization) とバランスさせます。

### その他のプロジェクトとサブジェクトへのアサインメント {#assignments-to-other-projects-and-subjects}

その他のプロジェクトとサブジェクトでの協業:

| サブジェクト                                                                              | アサインされたテクニカルライター |
|:--------------------------------------------------------------------------------     |:--------------------------|
| ドキュメントサイト                                                                    | {{< member-by-name "Sarah Watt" >}}, {{< member-by-name "Robert Landry" >}} |
| ドキュメントサイトのバックエンド（コード、自動化）                                    | {{< member-by-name "Hiru Fernando" >}} |
| ドキュメントの情報アーキテクチャ（コンテンツの再構成と左ナビへの主要変更）            | {{< member-by-name "Fiona Neill" >}} |
| [GitLab Design System ("Pajamas")](https://design.gitlab.com/) の [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content) 配下の情報 | {{< member-by-name "Fiona Neill" >}} |
| [Style Guide](#style-guide)                                                          | {{< member-by-name "Fiona Neill" >}} |
| [Documentation testing](#documentation-testing) (DocOps/Vale/markdownlint)           | {{< member-by-name "Sarah Watt" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}, {{< member-by-name "Achilleas Pipinellis" >}}, {{< member-by-name "Evan Read" >}}, {{< member-by-name "Jon Glassman" >}}, {{< member-by-name "Lorena Ciutacu" >}}, {{< member-by-name "Marcel Amirault" >}} |

### TW がレビューしないコンテンツ {#content-not-reviewed-by-tws}

テクニカルライターは次のコンテンツをレビューしません:

- `doc/development` ディレクトリ。`doc/development` ディレクトリ内のドキュメントは、どの Maintainer もマージできます。
  唯一の例外は `/doc/development/documentation` で、ここではライターがガイドラインを維持しています。
- `doc/solutions` ディレクトリ。この情報は Solutions Architects によって作成、レビュー、マージ、維持されます。

### Stable counterparts

テクニカルライティングチームは、チーム外の stable counterparts から `docs-gitlab-com` プロジェクトについて支援を得ています。

| サブジェクト     | 担当者 |
|:-----------------|:-------|
| バックエンドレビュー  | TBD |
| フロントエンドレビュー | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| サポート          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## Docs サイトの統計と分析

テクニカルライティングチームは、3 つの主要分野で(満足度、発見可能性、有用性)ドキュメントのパフォーマンスを追跡します。私たちはユーザー調査、Google Analytics、ユーザーフィードバック、コンテンツ監査、サイトの可用性を組み合わせた指標を使用します。

6 つの主要プロジェクト (GitLab、Omnibus、Charts、Operator、Runner、CLI) で統計を追跡しています:

- ドキュメントプロジェクトには 3,100 を超えるドキュメントページと 4,400,000 を超える単語があります。
- 2020 年 5 月以降、ページ数は 165% 以上、単語数は 270% 以上増加しました。
- ページの大部分 (30%) と単語の大部分 (30%) は、左ナビゲーションの **Use GitLab** セクションにあります。

GitLab チームメンバーは、[doc メトリクスページ](https://internal.gitlab.com/handbook/product/ux/technical-writing/metrics-kpis/)
と docs.gitlab.com の [LookerStudio ダッシュボード](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD) で追加のドキュメントメトリクスを表示できます。ダッシュボードの使い方については、[Google Analytics](https://internal.gitlab.com/handbook/product/ux/technical-writing/google-analytics/) を参照してください。

## テクニカルライターの PTO {#technical-writer-pto}

テクニカルライターが [有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/) を取るとき、チームの残りのメンバーが彼らのカバーを提供します。
これらのチームメンバーは依頼に追加のコンテキストが必要な場合があります。依頼は、*彼らの* 主要グループのステージ/グループと機能の優先順位のリストに組み込まれます。

アサインされたテクニカルライターが PTO 中にグループがヘルプを得るオプション:

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)。
  ルーレットで選ばれたテクニカルライターを Issue やマージリクエストでメンションまたはアサインできます。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5) チャンネルでのリクエスト。利用可能なボランティアのテクニカルライターによって取り上げられます。
- 特定の時間に敏感な進行中の作業については、事前に手配したテクニカルライター。
  テクニカルライターは Issue やマージリクエストでメンションされ、参加を開始できます。

長期 PTO を取る場合（1 週間以上）、テクニカルライターとマネージャーはテクニカルライター
[カバレッジ Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md) を使用する必要があります。
この Issue は、誰が、何を、どのような手段で正確にカバレッジを提供しているかを記述できます。

### PTO を取る

PTO を取るとき、テクニカルライターは:

1. [不在通知メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/) がカバレッジの利用可能なメカニズムを反映していることを確認します。
   次を保証するために GitLab.com のステータスを最新に保つことが重要です:

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs) が正確な提案を行える。
   - Roulette ダッシュボードをチェックする際に、TW チームが全チームメンバーの PTO ステータスを簡単に確認できる。
1. 利用可能なメカニズムをどこで見つけるかを示すメッセージをグループ Slack チャンネルに送信します。たとえば:

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/product/ux/technical-writing/#technical-writer-pto for ways to get help.
   For urgent _named time-sensitive task_ matters, ping _named TW_.
   ```

### マージリクエストキューチェック

テクニカルライターが PTO に入る前に、ライターまたはマネージャーが、誰がライターの MR キューをチェックするかを決定する必要があります。
アサインされた人物は、次のいずれかを使用して、少なくとも 1 日 1 回キューをチェックする必要があります:

- [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests) の **Merge requests** ページを、**Reviewer** でフィルター。
- カバレッジ Issue の [merge request queue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17) セクション。

アサインされたライターは、作業をする必要はありません。キューをチェックするとき、次が可能です:

- MR を自分でレビュー用にアサインする。
- 他の TW を見つけるために Roulette を使用する。

## 定期的にスケジュールされたタスク

テクニカルライターの通常アサインされた作業に加えて、定期的に完了する必要のある反復タスクがあります:

- **Release post の構造チェック:** テクニカルライティングリードが、各マイルストーンの終わりに公開されるリリースポストの [コンテンツをレビュー](https://docs.gitlab.com/development/documentation/release_notes/) します。アサインメントについては、[Release Post Scheduling](/handbook/product/ux/technical-writing/#schedule) ページを参照してください。
- **月次ドキュメントリリース:** 各マイルストーンの終わりに、テクニカルライターが [docs サイトの月次リリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md) します。このタスクにアサインされるテクニカルライターは、前のマイルストーンの release post の構造チェックを完了したライターです。
- **Docs プロジェクトのメンテナンスタスク:** 毎月、ドキュメントサイトとそのコンテンツのメンテナンスタスクを完了するために、1 人のテクニカルライターがアサインされます。これには、`technical-writing` プロジェクトで [`tw-monthly-tasks` テンプレートを使用して新しい Issue を作成](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks) して、メンテナンス作業を追跡することが含まれます。メンテナンス Issue で説明されている以上の作業が必要な場合、テクニカルライターは必要に応じてマージリクエストや追加の Issue を作成します。

### スケジュール

<!-- vale handbook.Spelling = NO -->

| バージョン | 月 | Release post チェック | 月次 doc リリース | メンテナンスタスク |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.7 | 2026 年 12 月 | TBD | TBD | {{< member-by-name "Isaac Durham" >}} |
| 19.6 | 2026 年 11 月 | TBD | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | 2026 年 10 月 | {{< member-by-name "Isaac Durham" >}} | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Zach Painter" >}} |
| 19.4 | 2026 年 9 月 | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Roshni Sarangadharan" >}} |
| 19.3 | 2026 年 8 月 | {{< member-by-name "Zach Painter" >}} | {{< member-by-name "Roshni Sarangadharan" >}} | {{< member-by-name "Fiona Neill" >}} |
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

テクニカルライターは、GitLab チームメンバーやコミュニティ貢献者が作成したドキュメント変更を含むマージリクエストのレビューにアサインされます。レビューは、[テクニカルライターのアサインメント](#assignments) に従って、サブジェクトマターによって [ステージグループ](/handbook/product/categories/#devops-stages) や他の専門分野にアサインされます。

### 編集のレベル

テクニカルライターは次のレベルの編集を使用します:

**ライト**

- パイプラインが通過し、明らかな文法、スペル、句読点のエラーがないことを確認する。

**ミディアム**

- パイプラインが通過し、文法、スペル、句読点のエラーがないことを確認する。
- コンテンツが明確で、発見可能、ナビゲート可能であり、ユーザーの視点を考慮して書かれていることを確認する。
- コンテンツが [Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/) のガイドラインを満たしていることを確認する。

**ヘビー**

- パイプラインが通過し、文法、スペル、句読点のエラーがないことを確認する。
- コンテンツが明確で、発見可能、ナビゲート可能であり、ユーザーの視点を考慮して書かれていることを確認する。
- コンテンツが [Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/) のガイドラインを満たしていることを確認する。
- コンテンツが定義された [トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/) に準拠していることを確認する。
- コンテンツがより大きなドキュメントセットに適切にフィットすることを確認する。
- UI テキストについては、コンテンツが [Pajamas Design System](https://design.gitlab.com/) と [Technical Writer Word List](https://docs.gitlab.com/development/documentation/styleguide/word_list/) で定義された基準を満たしていることを確認する。

#### ライターが編集レベルをどのように適用するか

品質、スピード、リソース制約のバランスを取るために、テクニカルライターは異なるドキュメントに異なるレベルの編集を適用します。

これらのガイドラインは一般的なガイダンスを提供するものです。固定的なものではなく、ケースバイケースで上書きできます。

これらの項目は、特に要求されない限り編集を **受けません**（要求された場合は **ライト** 編集を受けます）:

- GitLab リポジトリ内の Contribution ガイドライン（`/development` ディレクトリ内）。
- GitLab リポジトリ内の `doc/solutions` ディレクトリ。この情報は Solutions Architects が所有しています。

これらの項目は **ライト** 編集を受けます:

- 5 つの主要 GitLab リポジトリ（GitLab、Charts、Operator、Omnibus、Runner）外のドキュメント。
- 非推奨と削除。
- 他のテクニカルライターが作成したマージリクエスト。ただし、MR が OKR の一部であるか、作者がより詳細な編集を要求した場合を除く。

これらの項目は **ミディアム** 編集を受けます:

- 日常的なプロダクトドキュメントのリクエスト:
  - 新機能の作業（[ステージグループ](/handbook/product/categories/#devops-stages) から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- Release post 項目

これらの項目は **ヘビー** 編集を受けます:

- トピックタイプの再構成作業（[「CTRT」](https://docs.gitlab.com/development/documentation/topic_types/)）
- OKR 作業
- UI テキスト

すべての場合において、テクニカルライターは権限あるソースがドキュメントの技術的正確性をチェックしたことを確認します。
テクニカルライターは、必要な知識を持っているか、必要な検証を効率的に実行できる場合、そのような権限あるソースとして機能できます。

### レビューワークフロー

[ベロシティ](/handbook/engineering/development/principles/#velocity) と品質のバランスを取るために、テクニカルライターは次のワークフローを使用します:

- テクニカルライターがマージリクエストを開いた場合、別のテクニカルライターがレビューしてマージする必要があります。
  - テクニカルライターは自身の MR を承認またはマージしてはいけません。代わりに、Maintainer アクセスを持つ同僚に [レビューを依頼](#selecting-a-reviewer) する必要があります。レビュアーは最終承認後に MR をマージします。
    - この要件は GitLab の [Code Review Guidelines](https://docs.gitlab.com/development/code_review/) に合致し、GitLab の [Change Management Policy](/handbook/security/security-and-technology-policies/change-management-policy/) を満たします。
- 他の人（開発者、コミュニティメンバー、サポートチームメンバーなど）がマージリクエストを開いた場合:
  - MR にドキュメントの変更のみが含まれている場合、テクニカルライターは:
    - コンテンツをレビューし、提案を提供します。
    - MR で明示的な承認がない限り、作者のブランチに大規模な変更を直接行いません（提案を適用するかコミットをプッシュすることで）。
      ブランチへのプッシュは、解決が難しいマージコンフリクトを引き起こす可能性があり、コンテンツが誤って上書きされる可能性があります。
    - ライターが作者のブランチに直接変更を加えることに作者の同意がある場合のみ、提案やコミットを使用して自身で変更を加えることができます。
      このような場合、作者はライターのマージ前に、正確性を保証するために常にテクニカルライターの変更をレビューする必要があります。
    - MR がマージにほぼ準備ができている場合、**Apply suggestion** 機能を使用して小さな提案を適用できます。
      ライターは、追加のレビューなしに、欠けている句読点、タイポ、パイプラインの失敗などを修正できます。
    - ドキュメント MR がマージの準備ができたら、承認してマージします。
  - MR が主にコード変更でありドキュメント更新も含んでいる場合、テクニカルライターは:
    - ドキュメント、UI テキスト、エラーメッセージの変更について提案を提供しますが、自身でいかなる提案も適用してはいけません。
      コード MR に変更を加えることは、コードと仕様がテクニカルライティングの提案に合うようにエンジニアによって更新される必要があることが多いため、パイプラインが失敗する原因になります。
    - ドキュメント変更がマージの準備ができている場合は MR を承認します。
    - コード MR をマージしません。MR は、コード変更もレビューするエンジニアによってマージする必要があります。
  - MR が主にドキュメント変更だが、変更に合わせてリンクを更新する小さなコード変更も含んでいる場合、テクニカルライターは:
    - ドキュメントのみの MR と同じワークフローを使用してコンテンツをレビューします。
    - MR がすべての [必要な承認](#merge-rights) を持っている場合 *のみ* マージできます。

レビューターンアラウンドタイムの詳細については、[Review-response SLO](../../../engineering/workflow/code-review/#review-response-slo) を参照してください。

#### 自動グループメンションのトリアージ

ボットまたはコミュニティ貢献者が `@gl-docsteam` または CODEOWNERS に基づいて複数のテクニカルライターをメンションする場合、TW は次をボランティアする必要があります:

1. MR をスキャンし、[Selecting a reviewer](#selecting-a-reviewer) のガイドラインに従って、それをレビューすることをボランティアするか、どの TW がレビューすべきかを決定します。
1. その後、MR が:
   - レビューの準備ができているように見える場合、選択した TW をレビュアーとしてアサインします。
   - レビューの準備ができていないように見える場合、貢献者に準備ができたら選択した TW をメンションするように依頼するコメントを残します。
1. ボットのコメントを編集し、チームメンションをコードとしてフォーマットします。たとえば: ``Hi `@gl-docsteam`! Please review this documentation merge request.`` これにより、他の TW が MR の参加者リストから削除され、通知を受け取らなくなります。To-do 通知はバッククォート内のユーザー名を表示するように更新されるため、to-do リストから作業しているチームメンバーは、MR が対処されたことを示す可視的なヒントを得ることができます。

### レビュアーの選択 {#selecting-a-reviewer}

ほとんどの場合、テクニカルライターはテクニカルライティングレビューの担当者を特定するために [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用する必要があります。ページのフィルターがテクニカルライターのみを表示するように設定され、**Assign events last 7 days** でソートされていることを確認してください。

利用可能なテクニカルライターを取得するには、ダッシュボードページの **Spin the wheel!** を選択してください。選択されたテクニカルライターがすでに多くのレビューをアサインされている、または最近非常に忙しい特定のケースでは、**Spin the wheel!** をもう一度選択して別のライターを取得できます。

特定の担当者が必要なコンテンツがある場合、または DRI を持つページ（Documentation Style Guide など）のマージリクエストがある場合、そのような場合はその人物に特にレビューをアサインできます。

### テクニカルライターの可用性の判定

テクニカルライターが一般的なチームのマージリクエストレビューに忙しすぎて、グループやその他の優先事項に集中する必要がある場合があります。そのような場合、テクニカルライターは **Busy** チェックボックスを選択し、🔴 `:red_circle:` を追加することで GitLab ステータスを更新できます。これにより、reviewer roulette に名前が表示されなくなります。

たとえば、マイルストーンのリリース当番のテクニカルライターは、[リリース日](/handbook/engineering/releases/) の 1 週間前にステータスにビジーインジケーターを追加して、リリースポストや他の要件に集中する必要があります。

それ以外のすべての場合では、テクニカルライターはプロフィールにビジーインジケーターを追加（または削除）できますが、ビジーインジケーターは一度に 2 日間以下、2 週間に 1 回以下しか使用しないようにお願いします。（リリース中のビジーインジケーターの使用はこれに影響しません。）レビューロウレットに参加しない時間がさらに必要な場合は、マネージャーに相談して、ヘルプを得てください（追加のビジーインジケーターの使用を含む場合があります）。

## マージ権限 {#merge-rights}

テクニカルライティングチームには、ロールの一環として GitLab プロジェクトへの ([Maintainer アクセスを通じた](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)) マージ権限が与えられています。すべての開発者が Maintainer アクセスを得るわけではないので、テクニカルライターはこの権限を責任を持って使用する必要があります。

Maintainer として、テクニカルライターはマージするものを次に制限する必要があります:

- ドキュメント、通常は Markdown 形式のファイル。
- コードファイル内の UI テキスト、エラーメッセージ、リンク関連の更新、適切なエンジニアの承認付き。
  次のような場合、エンジニアの承認をスキップして [TW leadership team](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude)
  または [TW DocOps team](https://gitlab.com/groups/gitlab-org/technical-writing/tw-docops/-/group_members?with_inherited_permissions=exclude) のメンバーにコード変更を承認してもらうことができます:
  - ドキュメント MR 内の唯一のコード変更が、ドキュメントファイルやアンカー名への変更に合わせたリンク修正である、かつ
  - パイプラインが正常に完了している。
- ドキュメント関連のツールと設定、linter、[`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトへの変更など。エンジニアはコードレビューとマージに対応できます。

さらに、テクニカルライターは次を行う必要があります:

- パイプラインが失敗した MR をマージしない。
- MR が、適切なラベルとマイルストーンを持って、マージ前に完了していることを確認する。
- DRI が MR をレビューして承認したことを確認する。

## テクニカルライターのオンボーディング

テクニカルライターがオンボーディング中に、グループをシャドウするようにアサインされ、その後トレーニーとして貢献を開始します。ベテランのテクニカルライターがプロセスを通じてコーチングします。

オンボーディングフェーズとタスクの詳細については、[Technical Writer onboarding テンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md) を参照してください。

## スタンドアップ

[Geekbot](https://app.geekbot.com/dashboard/home) を週 2 回のスタンドアップ
(火曜と木曜、各自のタイムゾーンで午前 10:00) とランダムな週次質問
(水曜の午後 12:00 に実行) に設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

新しいメンバーを毎日のスタンドアップに追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home) にアクセスし、
   尋ねられたら Slack アカウントでサインインします。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members)
   スタンドアップを選択し、**Add participants** 領域でメンバーを名前で検索します。
1. 新しく追加されたメンバーに Manage アクセスを与え、右上の **Save** を選択します。

新しいメンバーを Weekly Wednesday Question スタンドアップに追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home) にアクセスし、
   尋ねられたら Slack アカウントでサインインします。
1. [Weekly Wednesday Question](https://app.geekbot.com/dashboard/standup/28408/manage?members)
   スタンドアップを選択し、**Add participants** 領域でメンバーを名前で検索します。
1. 新しく追加されたメンバーに manage アクセスを与え、右上の **Save** を選択します。

テクニカルライティングチームのメンバーとして、ランダムな水曜の質問のリストに
質問を追加することが奨励されます！追加するには:

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions) にアクセスします。
1. **Questions** セクションの下に "This is a random set of questions"
   という質問があります。右側の 2 つの矢印にホバーして **Edit** を選択します。
1. 一番下までスクロールして **Add question** を選択します。
1. **Save questions** を選択します。

## コミュニティ貢献の機会

[コンテンツへの改善](https://docs.gitlab.com/development/contributing/) や、
https://docs.gitlab.com の私たちのドキュメントウェブサイトの開発を歓迎します。

コミュニティ貢献の詳細については、次を参照してください:

- [利用可能な Issue リスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [GitLab Docs リポジトリ](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## docs.gitlab.com で緊急のコンテンツ更新を行う

ドキュメントウェブサイトは毎時間リフレッシュされます。まれに、ドキュメント更新をもう少し早く公開する必要がある場合があります。緊急の更新が必要な場合は、[docs サイトを手動でデプロイ](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production) する手順に従ってください。

## docs サイトの問題またはインフラの問題を報告する

ウェブサイトのバグや機能リクエストは、[GitLab Docs プロジェクトの Issue リスト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues) で報告してください。

停止やウェブサイトの可用性の問題については、[Docs site infrastructure](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md) を参照してください。

## 関連トピック

- [Documentation workflow](https://docs.gitlab.com/development/documentation/workflow/)
- [Set up your local environment](https://docs.gitlab.com/development/documentation/authoring_environment.html)
- [Documentation site architecture](https://docs.gitlab.com/development/documentation/site_architecture/)
