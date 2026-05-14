---
title: コードレビューガイドライン
description: "コードレビューはすべてのマージリクエストで必須です。コードレビューガイドラインに慣れ、それに従ってください。"
upstream_path: "/handbook/engineering/workflow/code-review/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T12:00:00Z"
translator: claude
stale: false
---

## 概要

コードレビューはすべてのマージリクエストで必須です。[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)に慣れ、それに従ってください。

これらのガイドラインは、あなたまたはコミュニティメンバーのマージリクエストを誰がレビュー、承認、マージする必要があるかも説明しています。また、チームメンバーが順守すべき[レビュー応答 SLO](#review-response-slo)についても説明しています。

## 価値観

GitLab のすべてのレビュアーは、私たちの[レビュアー価値観](/handbook/engineering/workflow/reviewer-values/)を目指して努力する必要があります。

## レビュアー

GitLab のすべてのエンジニアは、同僚やコミュニティ貢献者のマージリクエストでコードレビューを実行でき、また奨励されています。マージリクエストをレビューしたい場合は、誰かがあなたにマージリクエストをアサインするまで待つこともできますが、オープンなマージリクエストのリストをブラウズして、フィードバックや質問を残すことも大歓迎です。

マージリクエストをレビューしてくれる人は、[チームページ](/handbook/company/team/)または [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストから見つけることができます。どちらも `data/team_members/person/*` 配下の YAML ファイルから供給されています。

[マージリクエストコーチ](/job-description-library/expert/merge-request-coach/)になることで、コミュニティ貢献者がマージリクエストを準備するのを助けることもできます。

すべてのエンジニアがすべてのマージリクエストをレビューできますが、マージリクエストを*承認*する能力はメンテナに制限されている点に注意してください。

### PTO の前にレビューアサインメントを管理する

有給休暇を取る前に、レビュアーは次のことを行うべきです:

- PTO 前の最後の労働日に、自分にアサインされているすべての MR レビューを確認する
- [レビュー SLO](#review-response-slo) を尊重し、次のいずれかを行う:
  - PTO の日付と復帰予定を MR にコメントとして残す
  - 別の利用可能なレビュアーにレビューを再アサインする
- PTO の開始前にレビューを完了できない場合は、MR の作成者に直接通知する

これにより、マージリクエストがあなたの不在中にブロックされるのを防ぎます。

## メンテナ

メンテナはコードレビューの専門家である GitLab エンジニアであり、GitLab プロダクトおよびコードベースを非常によく知っており、1 つまたは複数の [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)でマージリクエストを承認する権限を持っています。

すべてのプロジェクトには少なくとも 2 人のメンテナがいるべきですが、ほとんどのプロジェクトにはそれ以上いる必要があります。一部のプロジェクトには専門分野ごとに別のメンテナがいます。たとえば、[メインの GitLab コードベース](https://gitlab.com/gitlab-org/gitlab)では、フロントエンド、バックエンド、データベースに別々のメンテナがいます。

優れたエンジニアはしばしば優れたレビュアーでもありますが、コードレビューはそれ自体のスキルであり、シニアリティに関係なく、すべてのエンジニアがそのスキルを磨く機会を同じように得てきたわけではありません。良いメンテナの大きな部分は既存のプロダクトとコードベースを非常によく知っていることに由来し、それによって他のフィーチャーとの一貫性のなさ、エッジケース、または容易に見逃される非自明な相互作用を見つけられる、という点にも注意することが重要です。

レビュアー／メンテナになることは、直近のグループを超えてより広い責任を引き受けることを意味します。効果的に作業できる余地を作るために、利用可能なキャパシティを調整する必要があります。各プロジェクトには異なるワークロードが伴うため厳密な公式はありませんが、バーンアウトを避け、これがチームのキャパシティにどう影響するかをマネージャーが理解できるよう、必ずマネージャーと議論してください。

コードベースとプロダクト全体の品質を守り、確実にするため、既存メンテナと同等のレビュースキルを持つことを説得力を持って示したときにのみ、人はメンテナになれます。

通常のレビュアーと同様に、メンテナは[チームページ](/handbook/company/team/)または [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

### Senior+ メンテナ

Senior+ エンジニアにとって、マネージャーまたはチームメンバーリレーションズと[合理的配慮プロセス](/handbook/people-policies/inc-usa/#reasonable-accommodation)に沿って議論していない限り、メンテナであることは職務ファミリーの一部です。個人がそのプロジェクトの貢献者であり、アクティブなレビュアーであるかぎり、プロダクトの一部と見なされる[エンジニアリングプロジェクト](/handbook/engineering/projects/)はどれも適切です。2022-08-01 以降、メンテナシップのタイムフレーム期待値については次の表を使用しています:

| 説明 | タイムフレーム |
| ----------- | --------- |
| Intermediate Engineers | メンテナシップはオプション |
| 既存の Senior+ Engineer | まだメンテナでない既存の Senior+ エンジニアは、チームの生産性とモチベーションを支援するため、トレイニープログラムの完了を奨励されます。トレイニープログラムの完了タイムフレームは決まっていません。 |
| 新規採用の Senior+ | オンボーディング中、新規採用の Senior+ エンジニアはレビュアーの代わりにトレイニーメンテナになるよう依頼されます。オンボーディング完了から 12 か月以内にメンテナシップが完了することを期待します。 |
| Senior への昇進 | Senior 役職に移るエンジニアは、昇進前にすでにメンテナになっていることを期待します。 |

### レビュアー／メンテナとの面会

コードをレビューする人を知っていれば、コミュニケーションがより容易になります。機会（たとえばコーヒーチャット）を捉えて、レビュアーを知り、氷を砕き、将来のコミュニケーションを促進してください。

### プロジェクトメンテナになる方法

**これは特にバックエンド、フロントエンド、データベースのメンテナに適用されます。他の領域（ドキュメントなど）には、以下に文書化された別のプロセスがあるかもしれません。**

メンテナシップを考える前に、まず貢献者である必要があります。トレイニーメンテナプロセスでレビュアーになる前に、プロジェクトに少なくとも数件のフィーチャーまたはメンテナンスの貢献を行う必要があります。これらの貢献は、プロジェクト独自のドメインと設計を理解できるほど十分に複雑である必要があります。

#### メンテナシップのチェックインとメンターシップ

関心のあるレビュアーは、メンテナシップへの進捗状況を議論し、最近の詳細なレビューをレビューするため、定期的にマネージャー／メンターとチェックインする必要があります。たとえば 1-on-1 中などです。レビュアーは、レビューに関する追加の視点を得るため、[メンテナメンター](#reviewer-mentorship-program)を探すことも奨励されています。レビュアーは、メンテナシップへの適格性について、「正当化されれば、いつでもメンテナになる準備ができている」という観点で考えるよう奨励されます。

このテンプレート [トレイニーメンテナ Issue テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/issue_templates/trainee-maintainer.md) を使って **トレイニーメンテナ Issue** を開くこともでき、最終マージリクエストに反映される例を積み上げることができます。

#### レビュアー向けのマージリクエストフィードバック

各レビューが完了した後、レビュアーはなぜマージリクエストがマージ準備ができていると考えるかについての正当化を書く必要があります。この正当化はメンテナによってレビューされ、メンテナが正当化に同意する場合は、追加の非ブロッキングコメントがあっても、コメントに 👍 リアクションを追加する必要があります。メンテナは、最初のレビューで見逃されたブロッキング懸念を強調するコメントを残す必要があります。

#### メンテナシップ指名プロセス

いつでも、マネージャー／メンターはレビュアーをメンテナとして追加するマージリクエストを開くことを選択できます。このマージリクエストには、なぜレビュアーがメンテナになるべきかについてマネージャー／メンターからの正当化があるべきです。いつでも自分でこのマージリクエストを開くこともできます。内容とステップをサポートする[利用可能なマージリクエストテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/merge_request_templates)があります。

#### メンテナシップの前提条件

マージリクエストを開く前に、作成者は次のことを行うべきです:

1. レビュアーの最近のマージリクエストのいくつかについて、正当化をレビューする。
1. レビュアーに関するフィードバックを得るため、少なくとも 2 人のメンテナに非公開で連絡する。レビュアーは、これらのメンテナが誰になり得るかの提案を持っているかもしれません。

#### メンテナシップフィードバックを依頼する

マージする前に、マネージャー／メンターは次のことを行うべきです:

1. 当該専門分野のメンテナをメンションし、マネージャー／メンターに直接フィードバックを提供するよう依頼する。否定的なフィードバックは、マージリクエストではなくマネージャー／メンターに非公開で伝えるべきだと強調する。これは、[ネガティブフィードバックは 1-1](/handbook/values/#negative-feedback-is-1-1)というコラボレーションの価値観に沿っています。[ネガティブフィードバックの管理](#managing-negative-feedback)の追加ガイダンスを参照してください。
1. マージリクエストを 1 週間オープンのままにし、メンテナがマネージャー／メンターにフィードバックを提供する時間を与える。
1. 既存のメンテナから少なくとも 2 件の承認を得る。

##### ネガティブフィードバックの管理

**マネージャー／メンターがレビュアーはメンテナになる準備ができていないことを示すプライベートフィードバックを受け取った場合**:

1. マネージャー／メンターは提起された懸念をレビューし、マージリクエストをクローズするほど実質的かを判断するべきです。
1. マネージャー／メンターは、レビュアーが取り組むべきフィードバックがあるとコメントしてマージリクエストをクローズしますが、フィードバックは機密のままにします。
1. マネージャー／メンターは、1 対 1 の会話でレビュアーに直接フィードバックを提供します。このアプローチにより、レビュアーはメンテナステータスのために再提出される前にギャップに対処できます。マネージャー／メンターがこのフィードバックを早期に求めて受け取るほど、良いです。

メンテナ準備の意見の相違を扱う:

マネージャー／メンターは、現在のメンテナがトレイニーメンテナの準備や資格に同意しないときに提起された懸念を理解しようとするべきです。次のガイドラインを使って、単一の不承認がトレイニーメンテナに対する承認を覆すべきかどうかを判断してください。

1. 他の価値観に沿って、メンテナの懸念は個人的または偏見に基づくべきではありません。
1. メンテナの懸念は[メンテナの責任](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-maintainer)と一致するべきです。
1. メンテナの懸念は次の事実に根ざすべきです:
1. トレイニーメンテナが一貫して[従来の方法での MR レビュー](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)を行っていない、または
1. 一貫してトレイニーメンテナが[コード品質と基準](/handbook/engineering/development/principles/#code-quality-and-standards)の確保に無責任であった。単発のインシデントはトレーニングプロセスで予期されます。

決定を十分に情報に基づいて行うため、マネージャーはフィードバックに関する個人情報を共有することなく、2 人の既存メンテナに非公開で連絡を取るべきです。マネージャーは最終的にトレイニーメンテナの準備状況に責任を持ち、トレイニーメンテナにメンテナの責任を委ねる決定を所有します。

#### メンテナシップの承認

マージ後、マネージャーは次のことを行うべきです:

1. [エンジニアリングコミュニケーションハンドブックの Slack セクション](/handbook/engineering/workflow/engineering-comms/#slack)にリストされている該当チャンネル、および `#backend_maintainers`/`#frontend_maintainers` および `#backend`/`#frontend` でこの変更を発表する。
1. **Engineering Week-in-Review ドキュメント**にアップデートを投稿する。アジェンダは社内のみです。Google ドライブで 'Engineering Week-in-Review' を検索してください。

### 承認済みプロジェクトメンテナの追加ステップ

以下のプロジェクトに関心のあるレビュアーは、レビュアーからメンテナに進むため、[プロジェクトメンテナになる方法](#how-to-become-a-project-maintainer)で説明されているものに加えて、リストされたタスクを完了する必要があります。

#### `gitlab-rails` のプロジェクトメンテナプロセス

- バックエンドメンテナの場合は、`@gitlab-org/maintainers/rails-backend` にピングしてください
  - バックエンドメンテナは [Rails コアフレームワーク gem](https://docs.gitlab.com/development/feature_categorization/#rails-platform-feature-category) を担当します。
    これらの gem をアップグレードするためにアプリケーションを更新する作業に加え、これらの gem に関連する GitLab の安定性と可用性のために必要なその他の作業を含みます。
- フロントエンドメンテナの場合は、`@gitlab-org/maintainers/rails-frontend` にピングしてください

#### `gitlab-database` のプロジェクトメンテナプロセス

- [データベースレビュープロセス](https://docs.gitlab.com/ee/development/database_review.html)に慣れる。
- [マイグレーションヘルパー](https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/database/migration_helpers.rb)に慣れ、既存のマイグレーションでの使用をレビューする。
- [データベースガイド](https://docs.gitlab.com/ee/development/database/index.html)のベストプラクティスに慣れる。
- [EXPLAIN プランの理解](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html)を読む。
- [`@gl-database`](https://gitlab.com/groups/gl-database/-/group_members) グループに追加してもらい、グループへの @ メンションに応答する（グループのいずれかのメンテナに連絡して追加してもらう）。グループメンションに対して gitlab.com で TODO を受け取ります。
- [`psql`/`AllFeaturesUser` の database lab/postgres.ai へのアクセス](https://docs.gitlab.com/ee/development/database/database_lab.html#access-database-lab-engine) を持っていない場合は、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)を作成する。

ヒント:

- `~"database::reviewed"` ラベルを適用したレビューだけに制限されたダッシュボードが欲しい場合は、データベースグループマネージャーに連絡して取得してください。

#### `gitlab-components` のプロジェクトメンテナプロセス

[`gitlab-components`](https://gitlab.com/components)

- [CI/CD コンポーネントを作成するためのドキュメントとベストプラクティス](https://docs.gitlab.com/ee/ci/components/)をレビューする。
- [GitLab がメンテナンスするコンポーネントに関するドキュメント](https://docs.gitlab.com/ee/development/cicd/components/)に慣れる。
- 開発プロセスに慣れるため、1 つ以上のコンポーネントを開発する。
- マージリクエストを作成し、CI/CD コンポーネントメンテナとして追加してもらうため、マージリクエストをマネージャーにアサインする。開発した CI/CD コンポーネントのリファレンスを必ず挙げてください。（[MR の例](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/132498)を参照）
- レビューとフィードバックのため、MR で既存のメンテナ（`@gitlab-org/maintainers/ci-components`）にピングする。
- MR をマージするため、既存のメンテナから少なくとも 2 件の承認を得る。

承認後、MR をマージするメンテナは次のことを行います:

- 新しく承認されたメンテナを CI コンポーネントメンテナグループ（`@gitlab-org/maintainers/ci-components`）に追加する。
- [`#ci_components_maintainers`](https://gitlab.slack.com/archives/C06AQBJETRR) で発表し、*Engineering Week-in-Review document* にアップデートを投稿する

#### `design.gitlab.com` または `gitlab-svgs` のプロジェクトメンテナプロセス

[`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) または [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)

- [メンテナになる方法](/handbook/product/ux/pajamas-design-system/design-review/#how-to-become-a-maintainer)を理解する。
- すべてのデザイナーは [`gitlab-design`](https://gitlab.com/gitlab-org/gitlab-design) プロジェクトのメンテナです。`gitlab` および `gitlab-ui` プロジェクトの UI（`.scss`）のメンテナになることに関心がある場合は、[エンジニアリングレビューワークフロー](/handbook/engineering/workflow/code-review)に従ってください。
- 十分な MR をレビューでき、多様な種類が含まれるようにするのはあなた次第です。チームからのレビューを求めることも、`#ux` や `#pajamas-design-system` Slack チャンネルでレビューを依頼することもできます。トレーニングを進めるのに十分な MR を受け取っていない場合は、能動的に Pajamas への自分自身の改善に取り組んでください。これは、プロダクトの全体的な理解と品質の高い貢献を示し、進捗を後押しするのに役立ちます。メンテナはあなたを導く準備ができています。
- あなたのレビューは、レビュアーの責任に加えてメンテナの責任もカバーすることを目指すべきです。デザインメンテナは、使いやすさに影響を与え、既存のユーザー体験をイテレートする MR、および／またはデザインガイドライン、標準、パターンの使用を含む MR に焦点を当てるべきです。あなたの承認は、マージ準備ができていると考えていることを意味します。
- メンテナとして、自分が持っていない専門知識を他者に[頼り続ける](/handbook/values/#its-impossible-to-know-everything)必要があります。MR の説明では、メンテナレベルでの結果を示す取り組みを強調し、続けて取り組みたいスキルと、この Issue へのリンクを追加してください。([例](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2395))。

#### `gitlab-quality` のプロジェクトメンテナプロセス

[`gitlab-quality`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)

- どの Quality プロジェクトのメンテナになりたいかを選ぶ:
  - [`GitLab (/qa)`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
  - [`GitLab-QA`](https://gitlab.com/gitlab-org/gitlab-qa)
  - [`GitLab Triage`](https://gitlab.com/gitlab-org/gitlab-triage/)
  - [`Triage Ops`](https://gitlab.com/gitlab-org/quality/triage-ops/)
  - [`GitLab CustomersDot (/qa)`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/qa/)
  - [`GitLab Environment Toolkit (GET)`](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
  - [`GitLab Performance Tool (GPT)`](https://gitlab.com/gitlab-org/quality/performance)

#### `gitlab-secure-analyzers` のプロジェクトメンテナプロセス

[`gitlab-secure-analyzers`](https://gitlab.com/gitlab-org/security-products/analyzers)

- [Secure Team の標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines)を理解する。
- [Secure リリースプロセス](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#versioning-and-release-process)を理解する。
- [Secure QA プロセス](/handbook/engineering/development/sec/secure/qa_process/)を理解する。

#### `gitlab-elasticsearch-indexer` のプロジェクトメンテナプロセス

[`gitlab-elasticsearch-indexer`](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

- [`golang` トレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md)を完了する。
- [GitLab Elasticsearch Indexer の開発とリリース](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/blob/main/PROCESS.md)プロセスをレビューする。
- `#g_global_search` Slack チャンネルに参加する。
- プロジェクトに慣れるため、Issue に取り組む。
- *オプション:* メンテナになるのを手伝うため、[既存のメンテナ](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/project_members?with_inherited_permissions=exclude)に連絡する([メンテナになる方法](#how-to-become-a-project-maintainer))。

#### `gitlab-advanced-search-migration` のプロジェクトメンテナプロセス

- [高度な検索マイグレーションレビュープロセス](https://docs.gitlab.com/ee/development/search/advanced_search_migration_review.html)に慣れる。
- [高度な検索マイグレーションヘルパー](https://docs.gitlab.com/development/search/advanced_search_migration_styleguide/#migration-helpers)の動作を理解し、既存のマイグレーションでの使用をレビューする。
- [高度な検索マイグレーションスタイルガイド](https://docs.gitlab.com/ee/development/search/advanced_search_migration_styleguide.html)を理解し、[既存のマイグレーション](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/elastic/migrate)での使用をレビューする。
- `#g_global_search` Slack チャンネルに参加する。
- オプション: メンテナになるのを手伝う既存のメンテナに連絡する。

#### `customers-gitlab-com` のプロジェクトメンテナプロセス

[`customers-gitlab-com`](https://gitlab.com/gitlab-org/customers-gitlab-com)

- [標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/development_processes.html)を理解する。
- Fulfillment システムで使われている[ソフトウェアアーキテクチャ](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc/architecture)を理解する。
- [CustomersDot ドキュメント](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/index.md)を読み通す。
- Issue に貢献し、プロジェクトに慣れる。
- ドメインの専門知識とレビュアーの責任との一貫性を示すレビューに貢献する。

#### `gitlab-secure-license-db` のプロジェクトメンテナプロセス

[`gitlab-secure-license-db`](https://gitlab.com/gitlab-org/security-products/license-db)

- [GitLab Go の標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/)に慣れる。
- Go の経験がない場合は、[Golang トレーニング Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md) を完了する。
- [External License DB のアーキテクチャとリポジトリウォークスルー](https://www.youtube.com/watch?v=5b5QNJNwoJ8)を見る
- [LicenseDB のフルスタック開発ガイドライン](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/blob/main/docs/fullstack_development.md)をレビューする。
- コンポーネントに新しい変更をリリースして[デプロイする](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/merge_requests/162)方法を理解する。
- [スケジュールされたパイプライン](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/pipeline_schedules)が、デプロイメントプロジェクトでどう使われるかを理解する。
- `license-db` 名前空間内の特定のプロジェクトに対して、合計 3 件のマージリクエストを作成またはレビューする。メンテナシップはプロジェクトごとに付与されます。

#### `gitlab-chart` のプロジェクトメンテナプロセス

[`gitlab-chart`](https://gitlab.com/gitlab-org/charts/gitlab)

- [Distribution のマージリクエストワークフロー](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)に慣れる
- GitLab Helm チャートの[アーキテクチャ](https://docs.gitlab.com/charts/architecture/index.html)と[スタイルガイド](https://docs.gitlab.com/charts/development/style_guide.html)に慣れる。
- [GitLab Operator と GitLab Helm チャート](https://docs.gitlab.com/operator/developer/charts_dependency.html)の関係を理解する。
- Issue に貢献し、マージリクエストをレビューする。
- [GitLab Helm チャートが rspec を使ってどうテストされているか](https://docs.gitlab.com/charts/development/rspec.html)を理解する。

#### `gitlab-operator` のプロジェクトメンテナプロセス

[`gitlab-operator`](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

- [Distribution のマージリクエストワークフロー](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)に慣れる
- [GitLab Go の標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/)に慣れる。
- [カスタムリソースとコントローラー](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)の動作を理解する。
- 次のライブラリとツールに慣れる:
  - [operator-sdk](https://sdk.operatorframework.io/docs/overview/)
  - [controller-runtime](https://pkg.go.dev/sigs.k8s.io/controller-runtime)
  - [Operator Lifecycle Manager](https://olm.operatorframework.io/docs/)
  - [envtest](https://book.kubebuilder.io/reference/envtest.html)
- Issue に貢献し、マージリクエストをレビューする。
- [GitLab Operator と GitLab Helm チャート](https://docs.gitlab.com/operator/developer/charts_dependency.html)の関係を理解する。

#### `ai-gateway` のプロジェクトメンテナプロセス

[`ai-gateway`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)

- [ソフトウェアアーキテクチャ](/handbook/engineering/architecture/design-documents/ai_gateway/)を理解する。
- [ローカル開発用に GitLab Duo をセットアップ](https://docs.gitlab.com/ee/development/ai_features/#instructions-for-setting-up-gitlab-duo-features-in-the-local-development-environment)する。
- [メンテナシップのドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/maintainership.md)を読み、そこに記載されたステップに従ってメンテナになります。

#### メンテナになるための学習

レビュアーは誰でも、マネージャーによっていつでもメンテナになることが推奨される可能性がありますが、メンテナになりたいレビュアーは、メンテナマインドセットに入り、メンテナからのフィードバックから学ぶため、各レビューでいくつかの基本的なステップに従う必要があります。

マージリクエストを作成し、[チームメンバーエントリー](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person)で `project-name: trainee_maintainer` として役割を示します。マージのため MR をマネージャーにアサインします。

各レビューの後、レビュアーはなぜマージリクエストがマージ準備ができていると考えるかをまとめるべきです:

例:

> 良いですね！この MR は Issue を解決しており、コード変更が比較的孤立しているため安全に見えます。
>
> LGTM！この MR は良いイテレーションだと感じます。フィーチャーフラグの背後にあるため、リスクは低いです。

メンテナは、同意する場合は 👍 でレビュアーのコメントに反応し、マージ時にキャッチされるべきだったと感じる追加コメントがある場合は、レビュアーがコメントを認識できるようピングするべきです。

一部のレビュアーは、自分の進捗を追跡するのが役立つと感じます。これは必須ではありませんが、人々がこれを行ってきたいくつかの方法があります:

- メンテナから受け取ったさまざまなレビューとフィードバックコメントをすべて 1 つの Issue にまとめておく。この種の Issue を助けるツールがいくつかあります:
  - https://gitlab.com/nolith/review-tanuki
  - https://gitlab.com/caalberts/review-tanuki
  - https://gitlab.com/arturoherrero/trainee
  - https://gitlab.com/knejad/gitlab-career-development#mr-reviews
- メンテナからフィードバックを受け取ったすべての MR に絵文字でマークして、簡単に検索できるようにする。

#### メンテナになった後

新しいメンテナになった場合は、自分の役割を果たすために必要な関連権限をリクエストするため、以下の手順に従ってください:

- Slack のメンテナのグループチャンネルに参加する: `#frontend_maintainers`、`#backend_maintainers` など。
- グループ内のメンテナに、メンテナ固有のミーティングがあれば招待してもらう。
- 所属する GitLab メンテナグループへのアクセスをリクエストする: [frontend](https://gitlab.com/gitlab-org/maintainers/frontend)、[backend](https://gitlab.com/gitlab-org/maintainers/rails-backend)、または [database](https://gitlab.com/gitlab-org/maintainers/database)。
- [Single Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) Issue テンプレートを使用して、メンテナとして活動するプロジェクトでメンテナ権限をリクエストします。Issue を作成したら、別のメンテナにこれらの権限を付与してもらうよう依頼します。

### レビュアーメンターシッププログラム

新しいメンテナのトレーニングとオンボーディングは重要なプロセスです。エンジニアリングチームが成長し、MR の総数が急速に拡大するにつれて、メンテナごとの MR レビュー数はすぐに維持困難になります。

[最近の調査](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8504)では、新しいメンテナのためのトレイニープロセスがいくつかの重要な要因によって妨げられていることが示されています:

- レビュアーの自己認識される準備度と自信
- 大量の MR をレビューするレビュアーの能力
- コードベース全体にわたる十分な幅をカバーする多様な MR をレビューするレビュアーの能力

#### 構造

1. 参加は、メンテナとレビュアーの両方にとって任意です。
1. メンテナは、一度に最大 4 人のレビュアーを直接メンタリングできます。
1. メンター／レビュアーの割り当ては [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) ファイル内で調整されます。
1. 新しいレビュアーは、[maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) で空きのある既存メンテナを探し、メンテナに直接連絡する必要があります。
1. 6 週間ごとに、メンテナは各レビュアーとチェックインします。これは非同期またはコーヒーチャットで行えます。
1. チェックインのゴールは: MR をレビューし、質問に答え、疑問を明確化し、卒業に向けた準備状況を追跡することです。
1. メンターシップは 12 か月でキャップされ、その時までにレビュアーは卒業の準備ができているはずです。
1. レビュアーが卒業した後、達成を祝い、さらなる質問に答えるため、少なくとも 1 回の追加チェックインをスケジュールするべきです。
1. 新しい受講者のために空間を確保するため、卒業したレビュアーを [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) ファイルから必ず削除してください。

#### 利点

1. メンテナのメンターシップスキルを開発・拡大する
1. レビュアーが不十分な領域でスキルアップする定期的なタッチポイントを提供する
1. 現在存在するよりも、レビュアー／メンテナの間に強いネットワークを作る
1. メンテナの直接の指導を受けることで、GitLab コードベースの所有権を取ることへのコンピテンスと自信を促進するはずです。

##### レビュアー／メンテナの役割からの移行

マネージャーとの相談後、レビュアー／メンテナの役割から離れたいか、離れる必要があるかもしれません。状況に関係なく、これが起こるのはまったく問題ありません！ 責任やワークロードは変わります。プロジェクトは進化します。だから、最も重要な領域に時間を費やすことを確実にすることが重要です。変更を公式にし、[reviewer roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette) から削除されるには:

1. YAML ファイルを更新する方法については [Team Member Database](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/team_database.md) ドキュメントを参照してください。
1. 新しい MR を作成し、MR をマネージャーにアサインします。

##### レビュアー／メンテナへの復帰

レビュアー／メンテナから離れる期間の後、これらの職務を行うことに戻りたい場合があります。リクエストを公式にするには、[プロジェクトメンテナになる方法](#how-to-become-a-project-maintainer)のセクションを参照し、追跡 Issue とマージリクエストを作成し、コンテキストのために以前の追跡 Issue とマージリクエストを参照してください。プロセスは通常、迅速に進められるため、新しく作成したマージリクエストは即時レビューのためにマネージャーにアサインされるべきです。

### より小規模なプロジェクトのメンテナシッププロセス

**これは、特定のグループに属するプロジェクトおよび／または社内貢献者が 10 人未満のプロジェクトが、メンテナシッププロセスを定義および文書化するために使用できる汎用テンプレートです。**

プロジェクトはこれらのメンテナシップのガイドラインを採用して、メンテナが足りないプロジェクトでメンテナを育てるのに役立てることができます。

- すべてのチームメンバーは [エンジニアリング開発の役割](/job-description-library/engineering/development/)に相談し、レビュアーまたはメンテナになるべきです。
- [プロジェクトメンテナになる方法](#how-to-become-a-project-maintainer) の下に、プロジェクト固有のメンテナプロセスを追加する。[軽量テンプレート](#maintainer-process-template)が提供されています。
- MR レビュアーを特定するために、プロジェクト内で [`simple_roulette`](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles/-/tree/master#simple_roulette) を使用して Danger Review を有効にする。
- メンテナと見なすために必要なマージリクエストレビュー数を減らす。
- プロジェクト自体への作業をメンテナシップの進捗としてカウントする。
- プロセスを速めるためにメンテナメンターを必要とする。
- 過去のレビューに基づいて練習用 MR をいくつか作成する。MR のコピーをクローズ状態で作成し、リンクをプロジェクトメンテナシッププロセスで提供する。
- プロジェクトにまだ存在しない場合は、プロジェクト固有の開発ガイドラインの作成を検討する。
- プロジェクトメンテナになる方法を、プロジェクトの README に追加する。

#### より小規模なプロジェクトのための加速メンテナオンボーディング

メンテナ数が限られている小規模なプロジェクトは、加速されたオンボーディングプロセスから利益を得ることができます。このプロセスは、これらの小規模なプロジェクトでは十分な機能作業と MR がないため、メインの GitLab メンテナシップよりも複雑ではありません。各プロジェクトは、ニーズに合わせてこのプロセスを修正できます。

オンボーディングプロセスは以下のステップで構成されます:

- メンテナになる基準と、新しいメンテナのオンボーディングプロセスを確立し、Issue に文書化する。たとえば:
  - 対象エンジニア: TypeScript で作業したいすべての人。
  - トレーニング: 録画されたコードウォークスルーとインタラクティブなペアリングセッション。
  - メンテナになる基準: コードベースへの自信に基づいてトレーニング後に自己選択。
- エンドツーエンド機能でのペアプログラミングを通じて知識を共有する。現在のプロジェクトメンテナが、潜在的なメンテナを教育するための一連のペアリングセッションをホストします。VS Code 拡張機能のパイロットでは、4 週間にわたる 4 つの 1 時間セッションで VS Code コマンドの 1 つの実装を変更しました。
- 潜在的な新しいメンテナとコードウォークスルーとペアリングセッションをスケジュールする。コードベースの包括的な理解を提供するために必要な適切な時間量とセッション数を決定する。
- パイロットプログラムでは、各潜在的なメンテナが X 回の MR レビューを行うことも検討しましたが、プロジェクト内に十分な MR がありませんでした。
- プロセスを設計した後、潜在的な新しいメンテナからフィードバックを求める。彼らはウォークスルー、ペアリングセッション、その他のリソースの異なる組み合わせを好むかもしれません。

このオンボーディングプロセスに従うことで、プロジェクトはコードベースとプロジェクトのビジネスロジックを十分に理解した新しいメンテナを効率的に追加できます。このプロセスの実例は [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/656) プロジェクトで見られます。

#### メンテナプロセステンプレート

プロジェクトのメンテナ要件を定義するための出発点として、この軽量テンプレートを使用してください。

- プロジェクトのドメインとガイドラインに慣れるため、Issue に取り組む。
- メインの GitLab プロジェクトで使われていないプログラミング言語の場合は、プロジェクト固有の言語トレーニングを完了する（例: [golang トレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md)）。
- プロジェクト固有のリリースプロセス（存在する場合）をレビューする。
- `[project or team]` Slack チャンネルに参加する。
- マージリクエストを作成し、[チームメンバーエントリー](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person) で `project-name: trainee_maintainer` として役割を示します。マージのため MR をマネージャーにアサインします。
- *オプション:* 利用可能であれば、練習用 MR でシミュレートしたレビューを実行する。
- *オプション:* MR のピアレビューを行う。
- *オプション:* メンテナになるのを手伝う既存のメンテナに連絡する([メンテナになる方法](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program))。

### メンテナ比率

私たちは、フロントエンドとバックエンドの両方で、エンジニア : メンテナ比率を 6 以下に保つことを目指しています。これは Engineer : Maintainer Ratio ダッシュボードで追跡しています:

https://10az.online.tableau.com/t/gitlab/views/DraftEngineerMaintainerRatio/EngineerMaintainerRatio_1

### メンテナ需要

需要は、月、プロジェクト、テクノロジーでフィルタリングできる Maintainership Demand ダッシュボードを見て判断できます:

https://10az.online.tableau.com/#/site/gitlab/views/MaintainershipDemand/MaintainershipDemand?:iid=1

#### このダッシュボードについて

メトリクスの定義:

- Incoming Merge Requests - 任意の作成者によって開かれたマージリクエストの総数。
- Average Availability - メンテナがレビューを受け付けており、忙しい・不在・休暇・キャパシティ上限ではない時間の平均パーセンテージ。
- Total Maintainers - `team.yml` で `maintainer` が指定されたエンジニアの数
- Available Maintainers - Total Maintainers × Average Availability
- Monthly Review Target - メンテナごとに想定される月次レビュー件数に基づく可変数。月次レビューターゲットは、領域ベースのカスタムにすることも、Incoming Merge Requests の数に基づいて一般的に定義することもできます。このメトリクスについての詳細は[こちらをお読みください](#monthly-review-targets)。
- Target Maintainer Counts - その月の領域に向けた Incoming Merge Requests の数、現在の Total Maintainers の数、Average Availability に基づいて、月ごとに変わる可変数。
- Minimum Maintainers Required - Incoming Merge Requests の需要を満たすために必要な Available Maintainers の数。
- Maintainers Needed - Minimum Maintainers Required を満たすために必要となる、まだ足りない Available Maintainers の数。
- Technology Group - データベース、バックエンド、フロントエンド、CI Templates、Workhorse など、メンテナに特定の専門分野があるプロジェクト用

チャートの説明:

- Available Maintainers VS Need - メンテナのターゲット、合計、可用性の全体的なハイレベル表示。
- Projects where maintainers are needed - 前月のデータに基づき、より多くの Available Maintainers が必要と予測される領域の出力。
- Project/Area Maintainership Health - Minimum Maintainers Required を時間経過とともに満たしていないプロジェクト (GitLab) または領域 (backend) のパーセンテージ。
- Unhealthy Core Areas of Maintainership Health - Minimum Maintainers Required を満たしておらず、かつ月あたり 100 件を超える Incoming Merge Requests を受け取っているプロジェクト (GitLab) または領域 (backend) のパーセンテージを時間経過とともに表示。
- Part of Product Repos - Full Data - 上記のすべてのメトリクスを含む、各プロジェクト、領域、月のオールインクルーシブチャート。

#### 月次レビューターゲット

ターゲットは、Available Maintainers の数（上記の説明参照）と、「合理的な」メンテナごとの月次レビュー数に基づいて計算されます。「合理的」は[別途の分析 Issue](https://gitlab.com/groups/gitlab-com/-/epics/1817) で一部の領域について定義されています。これらは "maintainer_custom_targets" Sisense スニペットで定義されたカスタムターゲットです。Incoming Merge Requests の数に基づいて、他のすべてのプロジェクト向けの一般的なターゲットがあります。これらの数値は最初のイテレーションで、分析 Issue に基づいています。需要の少ないプロジェクトでは、メンテナが少ない（したがってより多くの月次レビュー件数を 1 人あたり要求する）一方、需要の多いプロジェクトではメンテナが多い（したがってより少ない月次レビュー件数を 1 人あたり要求する）というものでした:

- デフォルトのターゲットはメンテナごとに 5 件のレビュー
- 領域が 10 件超のマージリクエストを受け取る場合、月次ターゲットはメンテナごとに 10 件のレビュー
- 領域が 500 件超のマージリクエストを受け取る場合、月次ターゲットはメンテナごとに 40 件のレビュー
- 領域が 1000 件超のマージリクエストを受け取る場合、月次ターゲットはメンテナごとに 16 件のレビュー
- 領域が 1500 件超のマージリクエストを受け取る場合、月次ターゲットはメンテナごとに 20 件のレビュー

`maintainer_custom_targets` Sisense スニペットを使って、領域にカスタムターゲットを追加するには:

- Sisense で、Snippets > `maintainer_custom_targets` に移動
- プロジェクト名と、オプションでテクノロジーグループに基づいて新しい `CASE/WHEN` 文を追加
- このプロジェクトでの合理的なレビュー件数に従い、1 人あたり理想的な月次レビューターゲットに数を設定

#### 注意点

- **Total Maintainer のカウントが 0 と表示される場合があります** - このデータは reviewer roulette を使用してメンテナの総数を判断しています。なぜなら Sisense からプロジェクトのメンバーシップにアクセスできず、また、実際にはアクティブでないメンテナ／オーナーがいるプロジェクトも多いためです。メンテナがいるにもかかわらず 0 と表示される理由の 1 つは、表示されたプロジェクト名が reviewer roulette の `team.yml` で使われているプロジェクト名と一致していないからです。別の理由は、プロジェクトが reviewer roulette を使用していない場合です。これらの場合、プロジェクトは reviewer roulette を使用するよう正しくセットアップして構成する必要があります。最後に、`team.yml` はプロジェクトまたは領域の要件と一致する必要があります。たとえば、あなたのプロジェクトのレビューが任意のメンテナに行ける場合、`team.yml` は `maintainer` を指定するべきです。あなたのプロジェクトのレビューが専門分野で分かれている場合、`team.yml` は `maintainer [SPECIALTY]` を指定し、マージリクエストはその専門分野に従ってラベル付けされるべきです。

### メンテナ／レビュアーの可用性

私たちは、レビュー負荷を妥当なレベルに保ちつつ、タイムリーに MR をレビューできる人がいるようにするため、タイムゾーンをまたぐ十分なレビュアーとメンテナを持つことを目指しています。これを [Reviewer/Maintainer Availability and Capacity ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ReviewermaintainerAvailabilityandCapacity/Reviewermaintaineravailabilityandcapacity?:iid=1)で追跡しています:

https://10az.online.tableau.com/#/site/gitlab/workbooks/2286852/views

## リーディングオーガニゼーション

すべての広いコミュニティメンバーとその組織は貢献できます。私たちは、オープンソース、特に GitLab への貢献が組織とそのメンバーにとって競争上の優位性であると強く信じており、貢献してくれる組織に報いたいと考えています。GitLab は、[頻繁でアトミックなイテレーション](/handbook/values/#iteration)での貢献を強く奨励、祝福、報奨します。所属のない組織または個人が、過去 3 か月で完了した期間内にマージされたマージリクエストを 20 件以上達成した場合、その組織または個人を ```Leading Organization``` と見なします。

組織は、[プロフィール](https://gitlab.com/-/profile)の ```Organization``` フィールドに基づいてマッチングされます。GitLab は、Contributor Success チームが利用できる他のメタデータを使用して、個人を組織にマッチングすることもできます。あなたまたはあなたの組織が資格を持つはずだが、マージリクエストに ```Leading Organization``` ラベルが付いていないと考える場合は、[Contributor Success のキューに Issue を作成](https://gitlab.com/gitlab-com/quality/contributor-success/-/issues)してください。

```Leading Organization``` は[レビュー応答 SLO](#review-response-slo) を受ける権利があります。この権利は毎月の初めに付与されます。組織が ```Leading Organization``` ステータスを得る時間内に作成されたマージリクエストには、```Leading Organization``` ラベルが付与されます。

> Leading Organization = 過去 3 か月で完了した期間内にマージされたマージリクエスト 20 件以上。

対象となるマージリクエストには、[GitLab プロダクト](/handbook/product/groups/product-analysis/engineering/dashboards/)とドキュメントへの貢献が含まれます。[www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com) リポジトリ（たとえば GitLab ハンドブック）への貢献は、現在含まれておらず、レビュー応答 SLO の対象にもなりません。

## ドメインエキスパート

私たちの[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)では、デフォルトでドメインの専門知識を持つチームメンバーにレビューを割り当てると述べています。

### ドメインエキスパートとは?

私たちは現在、チームメンバーをドメインエキスパートとして資格付ける厳密なルールを提供しておらず、代わりに暗黙的および自己識別という退屈なソリューションを使っています。

暗黙的:

- 特定のステージ／グループ（例: Create: Source Code）で働くチームメンバーは、彼らが取り組むアプリの領域について暗黙的にドメインエキスパートと見なされます。
- 特定のフィーチャー（例: 検索）で働くチームメンバーは、そのフィーチャーについて暗黙的にドメインエキスパートと見なされます。

自己識別:

- チームメンバーは、特定のフィーチャー（例: ファイルアップロード）についてドメインエキスパートとして自己識別できます。
- チームメンバーは、特定のテクノロジー（例: GraphQL）、プロダクトフィーチャー（例: ファイルアップロード）、またはコードベースの領域（例: CI）についてドメインエキスパートとして自己識別できます。

### ドメインエキスパートとして自己識別する方法

ドメインエキスパートと見なされるための唯一の要件は、特定のテクノロジー、プロダクトフィーチャー、またはコードベースの領域での十分な経験を持っていることです。この基準を満たすかどうかは、チームメンバー本人に委ねます。

1. [`data/domain_expertise.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/domain_expertise.yml) にある新しい、または既存のドメイン専門知識キーを定義します。
1. 自分の[YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person)で、新しい `domain_expertise` プロパティを追加し、すべてのドメイン専門知識キーをリストします。

例:

**domain_expertise.yml**

``` yaml
webpack:
  display_name: Webpack
  link: https://webpack.js.org/
frontend_architecture:
  display_name: Frontend Architecture
  link: https://docs.gitlab.com/ee/development/fe_guide/architecture.html
```

**your_handle.yml**

``` yaml
domain_expertise:
    - webpack
    - frontend_architecture
```

ドメインエキスパートとして自己識別するときは、すでに確立されたドメインエキスパートまたは対応するエンジニアリングマネージャーにマージしてもらうよう MR をアサインすることをお勧めします。

### ドメインの専門知識を持つ人のリストはどこにありますか?

チームメンバーの専門知識は[エンジニアリングプロジェクト](/handbook/engineering/projects/)ページで確認できます。

## レビュー対応時間

[他の人をブロック解除することは常に最優先事項](/handbook/values/#iteration)であるため、レビュアーはタイムリーにマージリクエストをレビューすることを期待されており、これが他のタスクや優先事項に否定的な影響を与える場合でもそうです。

そうすることで、コンテキストが記憶に新しいうちにマージリクエストに関わるすべての人が、より速くイテレートでき、貢献者の体験が大幅に向上します。

### レビュー応答 SLO

レビュー準備が整ったコードに迅速なフィードバックを保証するため、私たちは `Review-response` サービスレベル目標 (SLO) を維持しています。
SLO は GitLab チームメンバーと[リーディングオーガニゼーション](#leading-organizations)に適用されますが、他のより広いコミュニティ貢献者には適用されません。

SLO は次のように定義されます:

> Review-response SLO = (レビューが提供される時間) - (MR がレビュアーにアサインされる時間)

SLO 値はマージリクエストの作成者によって異なります:

- GitLab チームメンバーから: `Review-response` SLO < 2 営業日
- [リーディングオーガニゼーション](#leading-organizations)の作成者から: `Review-response` SLO < 4 営業日

`Review-response` SLO の時間枠内にマージリクエストをレビューできないと思う場合は、コメントでできるだけ早く（レビューリクエストを最初に受け取ってから 36 時間以内まで）作成者に知らせ、他のレビュアーまたはメンテナを探すのを手伝うようにしてください。これにより、作成者はブロックを解除して、自分の仕事を素早く進められます。レビュアーから自分を外してください。

レビュアーは、いくつかの他の絵文字を使用してステータスを伝えることもできます。これらの他のステータスの詳細については、開発者ドキュメントの [code review](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette) ページを参照してください。

もちろん、不在で GitLab.com ステータスを通じてこれを[伝えている](/handbook/people-group/time-off-and-absence/time-off-types/)場合、作成者はこれを認識し、別のレビュアーを自分で見つけることを期待されます。

マージリクエストの作成者が `Review-response` SLO よりも長くブロックされている場合は、Slack でレビュアーに思い出させるか、別のレビュアーを追加する自由があります。

### 期待値の管理

MR をレビューするようにアサインされていて、`Review-response` SLO 内に対応できない場合は、遅れた対応について作成者に知らせるコメントを MR に残すべきです。可能であれば、作成者がフィードバックを期待できる時期を示すか、代替のレビュアーを見つけるのを手伝うべきです。

MR の作成者として、`Review-response` SLO を満たせず、アサインされた人と連絡が取れない場合は、別のレビュアーまたはメンテナに再アサインするべきです。

## コードオーナー承認

一部の GitLab プロジェクトでは、特定のファイルパスとタイプに対する承認を管理するために、GitLab の [CODEOWNERS ファイル機能](https://docs.gitlab.com/ee/user/project/codeowners/)を使用しています。`gitlab-org/gitlab` プロジェクトでは、[職務分離のベストプラクティスに従うため、CODEOWNERS 承認ルールと MR 承認設定の組み合わせを使用](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request)しています。このセクションでは、`gitlab-org/gitlab` プロジェクトの CODEOWNERS 変更の対象承認者を更新するプロセスを説明します。

[CODEOWNERS ファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS)自体の Code Owners は、ファイル内のルールで管理されます。たとえば:

```text
CODEOWNERS @gitlab-org/development-leaders @gitlab-org/tw-leadership
```

`CODEOWNERS` ファイルの Code Owner を更新する方法は 2 つあります:

1. CODEOWNERS 変更を承認する能力をすでに持つグループのメンバーシップを、[標準のアクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/)で更新する。
1. 関連する行を更新するためにマージリクエストを開く。既存の Code Owner がマージリクエストを承認する必要があります。可視性のためにセキュリティコンプライアンスチームメンバーにピングすることもお勧めします。

`@gitlab-org/development-leaders` グループは、Engineering 内の開発部門の管理職トラックの Senior Manager 以上、および個人貢献者トラックの Distinguished Engineer 以上のチームメンバーで構成されます。
