---
title: "テクニカルライティング"
upstream_path: /handbook/product/ux/technical-writing/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

GitLab のテクニカルライティングチームは、開発者、プロダクトマネージャー、コミュニティと協力してプロダクトドキュメントを作成しています。

優れたドキュメントは、GitLab の顧客、ユーザー、管理者の進化するニーズに応えます。機能やベストプラクティスについて読者を教育します。GitLab を効率的に設定、利用、トラブルシューティングできるようにします。テクニカルライティングチームは [docs.gitlab.com](https://docs.gitlab.com) サイトとそのコンテンツ、プロセス、ツールを管理しています。

[ドキュメントロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/17363) は、コンテンツと[ドキュメントウェブサイト](https://docs.gitlab.com/)の両方の改善に向けた私たちの取り組みを推進しています。たとえば、docs.gitlab.com で情報を見つけにくいことを認識しています。ドキュメントサイトのプラットフォームを再構築し、より良いタスクベースの情報を提供し、コンテンツを見つけやすくするためのロードマップ項目と OKR があります。これらの大規模プロジェクトは、機能ドキュメントに加えて完了することで、ドキュメントのユーザーエクスペリエンスに継続的・反復的な改善をもたらします。

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

GitLab ドキュメントの更新や作成に興味がある場合は、[GitLab Technical Writing Fundamentals](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals) を参照してください。
このコースは GitLab チームメンバーとコミュニティの貢献者の両方を対象としており、以下が含まれます:

- テクニカルライティングのガイドライン
- GitLab のスタイル規約
- 内部テストに関する情報
- コンテンツタイプの手順

このコースは docs.gitlab.com への貢献に **必須ではありません**。誰でも貢献できます!

ご提案やフィードバックは、[フィードバック Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/445) を参照してください。

## ドキュメント

GitLab ドキュメントは、ユーザー、管理者、意思決定者が GitLab の機能について学び、彼らの [DevOps ニーズ](https://about.gitlab.com/stages-devops-lifecycle/) に応えるために GitLab を最適に実装・利用できるよう作成されています。

ドキュメントはプロダクトの不可欠な部分です。そのソースは、プロダクトと共に [GitLab リポジトリ](https://docs.gitlab.com/development/documentation/site_architecture/#architecture) のそれぞれのパスで開発・保管されています。
[docs.gitlab.com](https://docs.gitlab.com)（すべてのプロダクトドキュメントの複数バージョンを提供）と、各 GitLab インスタンスのドメインの `/help/` パスで、そのインスタンスのバージョン用のコンテンツとして公開されています。

ドキュメントは、すべてのプロダクト情報の [信頼できる唯一の情報源](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot) です。
私たちは、完全で正確、使いやすいドキュメントを作成することを目標とする [ドキュメントファーストの方法論](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology) に従います。
ドキュメントは、必要な情報を簡単に閲覧・検索でき、ドキュメント自体に簡単に貢献できる必要があります。

ドキュメントへの貢献を始めるには、[GitLab ドキュメントへの貢献](https://docs.gitlab.com/development/documentation/) を参照してください。
標準とガイドラインについては、[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) と [単語リスト](https://docs.gitlab.com/development/documentation/styleguide/word_list/) を参照してください。

## 責任 {#responsibilities}

チームメンバーは特定の DevOps ステージグループに [アサインされます](#assignments)。テクニカルライティングチームは、広く言えば、ドキュメントコンテンツと UI テキストの両方を開発し、また他者がコンテンツを開発するのを支援することに責任を持ちます:

- 多くのエンジニアリングプロジェクトのドキュメントを維持する。
- コミュニティのニーズに応えるため、時には新しいコンテンツを開発する。
- ドキュメント計画のレビューと共同作業、ドキュメントのマージリクエストや最近マージされたドキュメントのレビュー、コンテンツがスタイルと言語の標準を満たしていることの確認。
- 完全性とスムーズなユーザーエクスペリエンスを確保するためにドキュメントを再編成、刷新、執筆する。
- マイクロコピー、UI からドキュメントへのリンク、エラーメッセージ、UI 要素のラベルなど、UI テキストに関してプロダクトデザイナーと協力する。
- 毎月の[リリース投稿](../../../marketing/blog/release-posts/)のテクニカルライティングリードとして活動する。

### 優先順位付け {#prioritization}

ステークホルダーのニーズを満たすための作業を評価する際、次の順序で優先順位を付けます:

1. 機能作業（新機能のドキュメント化と UI テキストに関するガイダンスの提供を含む）
1. OKR 関連作業
1. ドキュメントの改善とバックログ Issue（ステージリード作業、ドキュメントの技術的負債、コンテンツトピックデザインの実装を含む）
1. その他のすべてのタスク（DocOps タスクを含む）

### プロセス

チームは、効率的なプロセスの開発と維持に責任を持ちます:

- GitLab ドキュメントを最新に保つためのプロセスが整備され、遵守されていることを確認する。
- プロダクトおよびエンジニアリングと連携したドキュメントワークフロー、ドキュメントチームのワークフロー、作業分担に従い、最適化する。
- ドキュメント関連の Issue をトリアージする。
- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) を改良し、GitLab のドキュメントとその貢献プロセスに関するコンテンツを継続的に改善する。
- 誰でもドキュメントに貢献しやすくしながら、コミュニティからの貢献を効率的に処理する。

#### スタイルガイド {#style-guide}

[ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) は、プロダクトドキュメントとリリース投稿の言語とスタイルのガイダンスを提供します。

テクニカルライター（または他の貢献者）は、`~tw-style` ラベルを付けて Issue またはマージリクエストを作成し、その Issue または MR をスタイルガイド DRI にアサインすることで、ドキュメントスタイルの更新や追加を提案できます。GitLab チームメンバーは `#docs` Slack チャンネルも利用できます。

完了したスタイル関連 Issue を追跡するには、次の検索を使用してください:

- [GitLab プロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [GitLab プロジェクトのスタイル MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)
- [テクニカルライティングプロジェクトのスタイル Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=tw-style)

#### 翻訳と国際化

誰でも、英語から他言語への GitLab の翻訳に貢献できます。
GitLab の翻訳と国際化について詳しくは、[国際化](/handbook/marketing/localization/category_internationalization/) を参照してください。
翻訳貢献のステップバイステップガイドについては、[GitLab の翻訳](https://docs.gitlab.com/development/i18n/translation/) を参照してください。

[docs.gitlab.com](https://docs.gitlab.com/) サイトは英語と日本語で利用可能です。
ローカライゼーションプロセスについて詳しくは、[プロダクトドキュメントのローカライゼーション](/handbook/marketing/localization/tech_docs_localization/) を参照してください。

## アサインメント {#assignments}

テクニカルライター（TW）は、[アサインされたグループ](#assignments-to-devops-stages-and-groups) と協力します。TW は[他の作業](#assignments-to-other-projects-and-subjects) にもアサインされる場合があります。

docs.gitlab.com の一部のコンテンツは [TW によってレビューされません](#content-not-reviewed-by-tws)。

<a id="designated-technical-writers">

### DevOps ステージとグループへのアサインメント {#assignments-to-devops-stages-and-groups}

指定されたテクニカルライターは、アサインされた[グループ](/handbook/product/categories/) の窓口となります。彼らは他のチームメンバーと協力して新しいドキュメントを計画したり、既存のドキュメントを編集したり、ドキュメントへの変更提案をレビューしたり、UI のマイクロコピーへの変更を提案したり、ドキュメントが必要なあらゆる場面で内容専門家（SME）と連携します。

{{% product/tech-writing %}}

<!--
  To update the table above:

  - For tech writer's name per stage, change https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml and https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/tech-writing.html
  - To turn off a stage, set tw: false in https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml

Reference: https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/24952
-->

{{% alert title="Note" color="primary" %}}
**ドキュメントページのメタデータからここに案内された場合:**

- メタデータは開発者の所有権を示すものではなく、適切なテクニカルライターに案内することを意図しています。
- 開発グループの一員であり、ドキュメントページにメタデータを追加したい場合は、議論のため [TW チームタスクプロジェクト](https://gitlab.com/gitlab-org/technical-writing/team-tasks/) に Issue を作成してください。追加の議論は [Issue 547](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/547) にあります。
- ステージが `none` としてリストされている場合は、[DRI がいるか](#assignments-to-other-projects-and-subjects) を確認するか、[ルーレット](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使用してください。
{{% /alert %}}

テクニカルライターは他のステージのドキュメントもレビュー・改善することが推奨されますが、必須ではありません。所有していないドキュメントに貢献する際は、アサインされた TW の所有権を尊重し、重要な変更を加える際にはレビューと承認を依頼する必要があります。

テクニカルライターが [PTO 中](#technical-writer-pto) の場合、チーム全体がバックアップとして機能します。

<!-- vale handbook.Spelling = NO -->

### セクションリード

テクニカルライティングマネージャーは、主要な[セクション](/handbook/product/categories/) にアサインされます。
指定されたマネージャーは、アサインされたセクションの窓口となります。彼らはリーダーシップグループでテクニカルライティングを代表し、チームへの連絡先として機能します。

{{% product/tech-writing-sections %}}

これらのセクションは以下を表します:

| 領域                                             | アサインされたマネージャー |
|:-------------------------------------------------|:--------------------|
| AI, Analytics & Monetization, Platforms | {{< member-by-name "Sarah Watt" >}} |
| Core DevOps, Security  | {{< member-by-name "Robert Landry" >}} |

### ステージリード {#stage-leads}

{{< alert type="note" >}}

このセクションでは、FY2025 の Q1 と Q2 で実験し、2025 年の Q3 で広く展開したプロセスを概説しています。このプロセスは変更される可能性があります。

{{< /alert >}}

一部のテクニカルライターは、指定された [DevOps ステージ](#stage-leads) の **ステージリード** としてアサインされます。

| ステージ          | アサインされたステージリード |
|:-----------------|:--------------------|
| Verify           | {{< member-by-name "Lysanne Pinto" >}} |
| Create           | {{< member-by-name "Brendan Lynch" >}} |
| Plan             | TBD（保留中） |
| Application Security Testing | {{< member-by-name "Russell Dickenson" >}} |

ステージリードはステージ全体、またはステージ内のグループのサブセットを担当します。
彼らはステージ内のグループにアサインされた他のテクニカルライターをサポートします。

ステージリードは:

- テクニカルライターと同じ[責任](#responsibilities)を担いますが、アサインされたステージのドキュメントを積極的に作成・改善することにより集中的に取り組みます。
- アサインされたグループの [新機能や強化](https://docs.gitlab.com/development/documentation/workflow/#documentation-for-a-product-change) のため開発者が作成した Issue やマージリクエストのレビューに、およそ 70% の時間を費やします。
- 残りの時間を以下に費やします:
  - アサインされた **ステージ** のドキュメントのニーズとギャップに対応するコンテンツの作成と洗練
    （たとえば、チュートリアルやユースケースベースのコンテンツの執筆、既存コンテンツの再構造化、情報アーキテクチャの作業）。
  - ステージ内の他のライターがドキュメント改善に貢献するのを支援する。
- 3 つのマイルストーンにわたって対処を目指すコンテンツのギャップと改善を概説する、四半期計画 Issue を完了します
  （例: [FY25Q3 Stage lead planning issue: Secure](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/1067)）。[計画 Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_stage_lead.md) は、四半期開始の前月 20 日に自動的に作成され、ステージのすべてのテクニカルライターにアサインされます。
- 自身が推進または意見を提供するドキュメント改善 MR に、関連する `tw-lead` [ラベル](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=tw-lead) を適用します。このラベルにより、ステージリードプロセスから生まれる改善をパフォーマンスインジケーター（PI）の 1 つとして追跡できます。[Tableau チャート](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/TechnicalWritingMRsbyTWLeadStage?:iid=1) は GitLab チームメンバーのみがアクセス可能です。
- 他のステージリードとドキュメント改善で協力します。

時間が経つにつれて、ステージリードあたりのアサインされるグループ数が減るにつれて、ステージリードが時間の 30% ではなく 70% を積極的な作業に費やすことが理想的な目標です。

[ドキュメント改善](https://docs.gitlab.com/development/documentation/workflow/#documentation-feedback-and-improvements) について、ステージリードは進行中および計画中のドキュメント拡張と追加を追跡するための Issue ボードを作成する責任を持ちます。

### DocOps グループ {#docops-group}

[DocOps](https://www.writethedocs.org/guide/doc-ops/) は DevOps のようなものですが、ドキュメント向けです。ドキュメントの作成、管理、デプロイを効率化するためのアプローチです。

一部のテクニカルライターは [DocOps グループ](https://gitlab.com/gitlab-org/technical-writing/tw-docops) のメンバーであり、次の責任を持ちます:

- CI/CD パイプラインとローカルマシンでのテストと linting を通じてコンテンツ品質を維持する。
- 依頼された場合、または[ドキュメントエンジニア](/job-description-library/product/ux-fullstack-engineer/) がオンラインでない場合に、彼らのオペレーションタスクを支援する。たとえば、Pages の設定、デプロイ、スケジュールパイプライン、レビューアプリの支援。
- linting ツールの依存関係を更新し、それらの更新を上流のドキュメントプロジェクトに展開する。
  DocOps グループはドキュメントウェブサイトのコード、インフラ、ビルドスクリプトには責任を負いません。
  DocOps タスクは、機能作業や OKR 関連作業よりも優先順位が[低く](#prioritization)設定されます。
- [TW: DocOps Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/9427118?label_name%5B%5D=tw-testing) を監視する。

DocOps グループへの参加は、チームの要件に基づいて行われます。参加に関心がある場合は、マネージャーに相談してください。

#### ドキュメントテスト {#documentation-testing}

DocOps グループは、GitLab のドキュメント（およびその他の技術コンテンツ）の問題をテストするためのツールキットを開発・維持しています。これらのツールキットには（以下に限定されません）次のものが含まれます:

- コンテンツとフォーマット: markdownlint、Vale、yamllint
- リンクの有効性: Lychee
- ファイル権限と命名: `lint-doc.sh`

linting ルールやツールへの変更を提案するには:

1. [`~tw-testing`](https://gitlab.com/gitlab-org/gitlab/-/issues?label_name[]=tw-testing) ラベルを付けた Issue またはマージリクエストを作成します。
1. Issue または MR で [@gitlab-org/technical-writing/tw-docops](https://gitlab.com/gitlab-org/technical-writing/tw-docops) にメンションします。

DocOps グループは、この作業と他の[テクニカルライティングの優先順位](#prioritization) とのバランスを取ります。

### 他のプロジェクトと課題へのアサインメント {#assignments-to-other-projects-and-subjects}

他のプロジェクトと課題でのコラボレーション:

| 課題                                                                              | アサインされたテクニカルライター |
|:--------------------------------------------------------------------------------     |:--------------------------|
| ドキュメントサイト                                                               | {{< member-by-name "Sarah Watt" >}}、{{< member-by-name "Robert Landry" >}} |
| ドキュメントサイトのバックエンド（コード、オートメーション）                                    | {{< member-by-name "Pearl Latteier" >}} |
| ドキュメントの情報アーキテクチャ（コンテンツの再構造化と左ナビゲーションの主要な変更） | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} {{< member-by-name "Suzanne Selhorn" >}} |
| [GitLab Design System ("Pajamas")](https://design.gitlab.com/) の [`content`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/contents/content) 配下の情報 | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [スタイルガイド](#style-guide)                                                          | {{< member-by-name "Fiona Neill" >}} {{< member-by-name "Kati Paizee" >}} |
| [ドキュメントテスト](#documentation-testing)（DocOps/Vale/markdownlint）           | {{< member-by-name "Kati Paizee" >}} |
| [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit) | {{< member-by-name "Ashraf Khamis" >}}、{{< member-by-name "Achilleas Pipinellis" >}}、{{< member-by-name "Evan Read" >}}、{{< member-by-name "Jon Glassman" >}}、{{< member-by-name "Lorena Ciutacu" >}}、{{< member-by-name "Marcel Amirault" >}}、{{< member-by-name "Phillip Wells" >}}、{{< member-by-name "Russell Dickenson" >}} |

### TW がレビューしないコンテンツ {#content-not-reviewed-by-tws}

テクニカルライターは以下のコンテンツをレビューしません:

- `doc/development` ディレクトリ。任意の Maintainer が `doc/development` ディレクトリ内のドキュメントをマージできます。
  唯一の例外は `/doc/development/documentation` で、ここではライターがガイドラインを維持しています。
- `doc/solutions` ディレクトリ。この情報は、ソリューションアーキテクトによって作成、レビュー、マージ、維持されています。

### Stable counterparts

テクニカルライティングチームは、チーム外の stable counterparts から `docs-gitlab-com` プロジェクトの支援を受けます。

| 課題          | 担当者 |
|:-----------------|:-------|
| バックエンドレビュー  | TBD |
| フロントエンドレビュー | [Paul Gascou-Vaillancourt](https://gitlab.com/pgascouvaillancourt) |
| サポート          | [Mike Lockhart](https://gitlab.com/mlockhart) |

<!-- vale handbook.Spelling = YES -->

## docs サイトの統計と分析

テクニカルライティングチームは、満足度、見つけやすさ、有用性の 3 つの主要領域でドキュメントのパフォーマンスを追跡しています。ユーザーアンケート、Google アナリティクス、ユーザーフィードバック、コンテンツ監査、サイト可用性などのメトリクスの組み合わせを使用しています。

GitLab、Omnibus、Charts、Operator、Runner、CLI の 6 つの主要プロジェクトで統計を追跡しています:

- ドキュメントプロジェクトには 3,100 を超えるドキュメントページと 4,400,000 語以上があります。
- 2020 年 5 月以降、ページ数は 165% 以上、単語数は 270% 以上増加しました。
- ページの大半（30%）と単語の大半（30%）は、左ナビゲーションの **Use GitLab** セクションにあります。

GitLab チームメンバーは、[docs metrics ページ](https://internal.gitlab.com/handbook/product/ux/technical-writing/metrics-kpis/) と docs.gitlab.com [LookerStudio ダッシュボード](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/IeVBD) で追加のドキュメントメトリクスを確認できます。ダッシュボードの手順については、[Google アナリティクス](https://internal.gitlab.com/handbook/product/ux/technical-writing/google-analytics/) を参照してください。

## テクニカルライターの PTO {#technical-writer-pto}

テクニカルライターが[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/) を取る場合、チームの残りのメンバーがカバーを提供します。
これらのチームメンバーは、リクエストに追加のコンテキストが必要な場合があります。リクエストは、*その人の* 主要グループのステージ/グループおよび機能の優先順位リストに組み込まれます。

アサインされたテクニカルライターが PTO 中にグループがヘルプを得るためのオプションは次のとおりです:

- [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs)。
  ルーレットされたテクニカルライターは、Issue またはマージリクエストに ping されたりアサインされたりできます。
- Slack の [`#docs`](https://gitlab.slack.com/archives/C16HYA2P5) チャンネルでのリクエスト。利用可能なボランティアのテクニカルライターが拾います。
- 特定の時間に敏感な進行中の作業のヘルプには、事前にアレンジしたテクニカルライター。テクニカルライターは Issue やマージリクエストで ping され、参加を開始できます。

長期 PTO（1 週間以上）を取る場合、テクニカルライターとマネージャーはテクニカルライターの [カバー Issue](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md) を使うべきです。
この Issue は、誰が、何を、どのような手段でカバーを提供するかを正確に記述できます。

### PTO を取るとき

PTO を取るとき、テクニカルライターは:

1. [out-of-office メッセージ](/handbook/people-group/time-off-and-absence/time-off-types/) が利用可能なカバー手段を反映するようにします。
   GitLab.com のステータスを最新に保つことが重要です:

   - [Reviewer Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&visible=maintainer%7Cdocs) が正確な提案を行えるように。
   - TW チームが Roulette ダッシュボードをチェックする際に、すべてのチームメンバーの PTO ステータスを簡単に確認できるように。
1. グループの Slack チャンネルで、利用可能な手段の場所を示すメッセージを送ります。例:

   ```text
   I'm off for the holidays (202y-mm-dd - 202y-mm-dd). For help with documentation while I'm away, see
   https://handbook.gitlab.com/handbook/product/ux/technical-writing/#technical-writer-pto for ways to get help.
   For urgent _named time-sensitive task_ matters, ping _named TW_.
   ```

### マージリクエストキューのチェック

テクニカルライターが PTO に入る前に、ライターまたはそのマネージャーは、誰がライターの MR キューをチェックするかを決定すべきです。
アサインされた担当者は、次のいずれかを使用して、少なくとも 1 日 1 回キューをチェックすべきです:

- [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg30&mode=show&order=-1&hourFormat24=true&visible=maintainer%7Cdocs)。
- [`gitlab` プロジェクト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests) の **Merge requests** ページを **Reviewer** でフィルター。
- カバー Issue の[マージリクエストキュー](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/TW_Coverage.md?plain=1#L17) セクション。

アサインされたライターは作業を行う必要はありません。キューをチェックする際、彼らは:

- MR を自分にレビュー用にアサインする。
- Roulette を使って他の TW を見つけてレビューしてもらう。

ことができます。

## 定期的にスケジュールされるタスク

テクニカルライターの通常アサインされた作業と並んで、定期的に完了する必要のある繰り返しタスクがあります:

- **リリース投稿構造チェック:** テクニカルライティングリードは、各マイルストーンの終わりに公開されるリリース投稿の [コンテンツをレビュー](/handbook/marketing/blog/release-posts/#tw-lead) します。アサインメントについては、[Release Post Scheduling](/handbook/marketing/blog/release-posts/managers/) ページを参照してください。
- **月次ドキュメントリリース:** 各マイルストーンの終わりに、テクニカルライターが [docs サイトの月次リリースを作成](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md) します。このタスクにアサインされるテクニカルライターは、前のマイルストーンのリリース投稿構造チェックを完了したライターです。
- **Docs プロジェクトのメンテナンスタスク:** 毎月、1 人のテクニカルライターがドキュメントサイトとそのコンテンツのメンテナンスタスクを完了するようアサインされます。これには、メンテナンス作業を追跡するため、`technical-writing` プロジェクトで [`tw-monthly-tasks` テンプレートを使った新しい Issue の作成](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/issues/new?issue[title]=Docs%20project%20maintenance%20tasks%2C%20Month%20YYYY&issuable_template=tw-monthly-tasks) が含まれます。メンテナンス Issue で説明されている以上の作業が必要な場合は、テクニカルライターは必要に応じてマージリクエストと追加 Issue を作成します。

### スケジュール

<!-- vale handbook.Spelling = NO -->

| バージョン | 月 | リリース投稿チェック | 月次 doc リリース | メンテナンスタスク |
|---------|-------|------------------------------|---------------------|-------------------|
| 19.6 | 2026 年 11 月 | TBD | TBD | {{< member-by-name "Lorena Ciutacu" >}} |
| 19.5 | 2026 年 10 月 | TBD | {{< member-by-name "Lorena Ciutacu" >}} | {{< member-by-name "Phillip Wells" >}} |
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

テクニカルライターは、GitLab チームメンバーとコミュニティ貢献者が作成したドキュメント変更を含むマージリクエストをレビューするためにアサインされます。レビューは、[ステージグループ](/handbook/product/categories/#devops-stages) や他の専門分野への [テクニカルライターアサインメント](#assignments) に従い、対象分野ごとにアサインされます。

### 編集レベル

テクニカルライターは次の編集レベルを使用します:

**Light**

- パイプラインが通り、明らかな文法、スペル、句読点の誤りがないことを確認する。

**Medium**

- パイプラインが通り、文法、スペル、句読点の誤りがないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点で書かれていることを確認する。
- コンテンツが [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) のガイドラインを満たしていることを確認する。

**Heavy**

- パイプラインが通り、文法、スペル、句読点の誤りがないことを確認する。
- コンテンツが明確で、発見しやすく、ナビゲートしやすく、ユーザーの視点で書かれていることを確認する。
- コンテンツが [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) のガイドラインを満たしていることを確認する。
- コンテンツが定義された [トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/) に準拠していることを確認する。
- コンテンツがより大きなドキュメントセットに適合していることを確認する。
- UI テキストの場合、コンテンツが [Pajamas Design System](https://design.gitlab.com/) と [Technical Writer Word List](https://docs.gitlab.com/development/documentation/styleguide/word_list/) で定義された標準を満たしていることを確認する。

#### ライターが編集レベルを適用する方法

品質、速度、リソース制約のバランスを取るため、テクニカルライターは異なるドキュメントに異なる編集レベルを適用します。

これらのガイドラインは一般的なガイダンスを提供することを意図しています。固定されたものではなく、ケースバイケースで上書きできます。

これらの項目は、特に要求されない限り、編集を **受けません**（要求された場合、**light** な編集を受けます）:

- GitLab リポジトリの貢献ガイドライン（`/development` ディレクトリ内）。
- GitLab リポジトリの `doc/solutions` ディレクトリ。この情報はソリューションアーキテクトが所有しています。

これらの項目は **light** な編集を受けます:

- 5 つの主要 GitLab リポジトリ（GitLab、Charts、Operator、Omnibus、Runner）外のドキュメント。
- 非推奨と削除。
- 他のテクニカルライターが作成したマージリクエスト。ただし、MR が OKR の一部であるか、作成者がより詳細な編集を要求する場合を除く。

これらの項目は **medium** な編集を受けます:

- 日常的なプロダクトドキュメントリクエスト:
  - 新機能作業（[ステージグループ](/handbook/product/categories/#devops-stages) から）
  - 改善
  - バグ修正
  - コミュニティ貢献
- リリース投稿項目

これらの項目は **heavy** な編集を受けます:

- トピックタイプ再構造化の取り組み（["CTRT"](https://docs.gitlab.com/development/documentation/topic_types/)）
- OKR 作業
- UI テキスト

すべての場合において、テクニカルライターは権威のある情報源がドキュメントを技術的正確性についてチェックしたことを確認します。
テクニカルライターは、必要な知識を持っているか、必要な検証を効率的に実行できる場合は、その権威ある情報源としても機能できます。

### レビューワークフロー

[velocity](/handbook/engineering/development/principles/#velocity) と品質のバランスを取るため、テクニカルライターはこのワークフローを使用します:

- テクニカルライターがマージリクエストを開いた場合、別のテクニカルライターがレビューしてマージしなければなりません。
  - テクニカルライターは自身の MR を承認またはマージすべきではありません。代わりに、Maintainer アクセスを持つピアに [レビューを依頼](#selecting-a-reviewer) します。最終承認の後、レビュアーが MR をマージします。
    - この要件は GitLab の [Code Review Guidelines](https://docs.gitlab.com/development/code_review/) に沿っており、GitLab の [変更管理ポリシー](/handbook/security/security-and-technology-policies/change-management-policy/) を満たしています。
- 他の誰か（開発者、コミュニティメンバー、サポートチームメンバーなど）がマージリクエストを開いた場合:
  - MR がドキュメントの変更のみを含む場合、テクニカルライターは:
    - コンテンツをレビューし、提案を行う。
    - MR で明示的な承認を得ていない限り、提案を適用したりコミットをプッシュしたりして作成者のブランチに直接大きな変更を加えない。
      ブランチへのプッシュは解決困難なマージコンフリクトを引き起こす可能性があり、コンテンツが誤って上書きされる可能性があります。
    - ライターが作成者のブランチに直接変更を加えることに作成者の同意がある場合のみ、提案またはコミットを使って自身で変更を加えることができる。
      これらのケースでは、ライターがマージする前に正確性を確保するため、作成者は常にテクニカルライターの変更をレビューする必要があります。
    - MR がほぼマージ可能な状態である場合、**Apply suggestion** 機能を使って小さな提案を適用できる。
      ライターは追加レビューなしで、欠けている句読点、タイプミス、パイプラインの失敗などを修正できます。
    - ドキュメント MR が準備できたら承認してマージする。
  - MR が主にコード変更でドキュメント更新も含む場合、テクニカルライターは:
    - ドキュメント、UI テキスト、エラーメッセージの変更に対して提案を行うが、提案を自身で適用すべきではない。
      コード MR に変更を加えると、コードと spec がテクニカルライティングの提案に合わせて更新される必要があることが多いため、パイプラインが失敗する可能性があります。
    - ドキュメント変更がマージできる状態であれば MR を承認する。
    - コード MR をマージしない。MR は、コード変更もレビューするエンジニアによってマージされる必要があります。
  - MR が主にドキュメント変更だが、変更に合わせてリンクを更新する小さなコード変更も含む場合、テクニカルライターは:
    - ドキュメントのみの MR と同じワークフローでコンテンツをレビューする。
    - MR にすべての [必要な承認](#merge-rights) がある場合 *のみ*、マージできる。

レビューのターンアラウンドタイムの詳細については、[Review-response SLO](../../../engineering/workflow/code-review/#review-response-slo) を参照してください。

#### 自動グループメンションのトリアージ

ボットやコミュニティ貢献者が CODEOWNERS に基づいて `@gl-docsteam` や複数のテクニカルライターをメンションする場合、TW はボランティアで次を行います:

1. MR をスキャンし、レビューするかどうかをボランティアするか、[レビュアーの選択](#selecting-a-reviewer) のガイドラインに従って、どの TW がレビューすべきかを判断します。
1. その後、MR が:
   - レビューの準備ができているように見える場合、選択された TW をレビュアーとしてアサインします。
   - レビューの準備ができていないように見える場合、貢献者に準備ができたら選択された TW をメンションするよう依頼するコメントを残します。
1. ボットのコメントを編集して、チームメンションをコードとしてフォーマットします。例: ``Hi `@gl-docsteam`! Please review this documentation merge request.``。これにより、他の TW が MR の参加者リストから削除され、それに関する通知を受けなくなります。To-do 通知はバッククォート内のユーザー名を表示するように更新されるため、to-do リストから作業するチームメンバーは、MR が処理されたことを示す視覚的なヒントを得られます。

### レビュアーの選択 {#selecting-a-reviewer}

ほとんどの場合、テクニカルライターは [GitLab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?sortKey=stats.avg7&order=-1&hourFormat24=true&visible=maintainer%7Cdocs) を使ってテクニカルライティングのレビューを行う人を特定すべきです。ページのフィルターがテクニカルライターのみを表示し、**Assign events last 7 days** でソートされていることを確認してください。

利用可能なテクニカルライターを取得するには、ダッシュボードページで **Spin the wheel!** を選択します。選択されたテクニカルライターがすでに多くのレビューをアサインされている、または最近非常に忙しかった特定のケースでは、**Spin the wheel!** を再度選択して別のライターを取得できます。

特定の担当者を必要とするコンテンツがある場合、または DRI があるページのマージリクエストがある場合（ドキュメントスタイルガイドなど）、これらの場合はレビューをその人に明示的にアサインできます。

### テクニカルライターの可用性を判断する

テクニカルライターが一般チームのマージリクエストのレビューには忙しすぎて、グループや他の優先事項に集中する必要がある場合があります。これらの場合、テクニカルライターは GitLab ステータスを **Busy** チェックボックスで更新し、🔴 `:red_circle:` を追加することで、レビュアールーレットに名前が表示されないようにできます。

たとえば、マイルストーンのリリース担当のテクニカルライターは、リリース投稿やその他の要件に集中するため、[リリース日](/handbook/engineering/releases/) の前の週は busy インジケーターをステータスに追加すべきです。

それ以外のすべてのケースでは、テクニカルライターはプロフィールから busy インジケーターを追加（および削除）できますが、busy インジケーターは一度に 2 日以上、2 週間に 1 回以上使用しないことをお願いします。（リリース中の busy インジケーターの使用はこれに影響しません。）レビューにルーレットに参加しない時間がもっと必要な場合は、マネージャーに相談して助けてもらえるようにしてください（追加で busy インジケーターを使用することを含む場合があります）。

## マージ権限 {#merge-rights}

テクニカルライティングチームには、ロールの一部として GitLab プロジェクトに対するマージ権限（[Maintainer アクセス](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer) を通じて）が付与されます。
すべての開発者が Maintainer アクセスを得るわけではないため、テクニカルライターはこの特権を責任を持って使用しなければなりません。

Maintainer として、テクニカルライターはマージするものを次に限定しなければなりません:

- ドキュメント、通常は Markdown 形式のファイル。
- 適切なエンジニアの承認を得た、コードファイル内の UI テキスト、エラーメッセージ、リンク関連の更新。
  次の場合、エンジニアの承認をスキップして、[TW リーダーシップチーム](https://gitlab.com/groups/gitlab-org/tw-leadership/-/group_members?with_inherited_permissions=exclude) のメンバーまたは `@marcel.amirault` にコード変更を承認してもらえます:
  - ドキュメント MR 内の唯一のコード変更が、ドキュメントファイルやアンカー名への変更に合わせたリンク修正である、かつ
  - パイプラインが正常に完了している。
- linter などのドキュメント関連のツールと設定、および [`docs-gitlab-com`](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com) プロジェクトへの変更。エンジニアがコードレビューとマージのために利用可能です。

さらに、テクニカルライターは:

- パイプラインが失敗した MR をマージしてはならない。
- マージ前に MR が完全であり、適切なラベルとマイルストーンがあることを確認する。
- DRI が MR をレビューして承認していることを確認する。

## テクニカルライターのオンボーディング

テクニカルライターがオンボーディング中、彼らはシャドーグループにアサインされ、その後トレイニーとして貢献を開始します。ベテランテクニカルライターがプロセスを通じて彼らをコーチングします。

オンボーディングのフェーズとタスクについて詳しくは、[テクニカルライターオンボーディングテンプレート](https://gitlab.com/gitlab-org/technical-writing/team-tasks/-/blob/main/.gitlab/issue_templates/tw_onboarding.md) を参照してください。

## スタンドアップ

[Geekbot](https://app.geekbot.com/dashboard/home) を週 2 回（火曜と木曜のローカルタイムゾーンで 10:00 AM）のスタンドアップとランダムな週次質問（水曜の 12:00 PM）用に設定しています。

すべてのメンバーがスタンドアップを編集・管理できます。

毎日のスタンドアップに新しいメンバーを追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home) を訪れ、依頼があれば Slack アカウントでサインインします。
1. [Tues/Thurs ping](https://app.geekbot.com/dashboard/standup/42533/manage?members) スタンドアップを選択し、**Add participants** エリアで名前でメンバーを検索します。
1. 新しく追加されたメンバーに管理アクセスを与え、右上の **Save** を選択します。

毎週水曜の質問スタンドアップに新しいメンバーを追加するには:

1. [Geekbot ダッシュボード](https://app.geekbot.com/dashboard/home) を訪れ、依頼があれば Slack アカウントでサインインします。
1. [Weekly Wednesday Question](https://app.geekbot.com/dashboard/standup/28408/manage?members) スタンドアップを選択し、**Add participants** エリアで名前でメンバーを検索します。
1. 新しく追加されたメンバーに管理アクセスを与え、右上の **Save** を選択します。

テクニカルライティングチームのメンバーとして、ランダムな水曜の質問リストに自分の質問を追加することを推奨されています! それを行うには:

1. [Weekly Wednesday Questions](https://app.geekbot.com/dashboard/standup/28408/manage?questions) を訪れます。
1. **Questions** セクションで、"This is a random set of questions" の質問が見えます。右側の 2 つの矢印をホバーし、**Edit** を選択します。
1. 一番下までスクロールし、**Add question** を選択します。
1. **Save questions** を選択します。

## コミュニティ貢献の機会

私たちは、[コンテンツの改善](https://docs.gitlab.com/development/contributing/) と、https://docs.gitlab.com にあるドキュメントウェブサイトの開発の両方を歓迎します。

コミュニティ貢献の詳細については、以下を参照してください:

- [利用可能な Issue のリスト](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=documentation&label_name%5B%5D=docs-only&label_name%5B%5D=Seeking%20community%20contributions)
- [GitLab Docs リポジトリ](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)

## docs.gitlab.com で緊急のコンテンツ更新を行う

ドキュメントウェブサイトは 1 時間ごとに更新されます。まれに、ドキュメントの更新を少し早く公開する必要があるかもしれません。緊急の更新が必要な場合は、[手動で docs サイトをデプロイする](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/#manually-deploy-to-production) 手順に従ってください。

## docs ウェブサイトの問題やインフラ Issue を報告する

ウェブサイトのバグや機能リクエストは、[GitLab Docs プロジェクトの Issue リスト](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/issues) で報告してください。

ダウンタイムやウェブサイトの可用性の問題については、[Docs site infrastructure](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/infrastructure.md) を参照してください。

## 関連トピック

- [ドキュメントワークフロー](https://docs.gitlab.com/development/documentation/workflow/)
- [ローカル環境のセットアップ](https://docs.gitlab.com/development/documentation/authoring_environment.html)
- [ドキュメントサイトアーキテクチャ](https://docs.gitlab.com/development/documentation/site_architecture/)
