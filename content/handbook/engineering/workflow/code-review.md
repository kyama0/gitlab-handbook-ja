---
title: コードレビューガイドライン
description: "コードレビューはすべてのマージリクエストで必須です。コードレビューガイドラインに慣れ、それに従ってください。"
upstream_path: "/handbook/engineering/workflow/code-review/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T12:00:00Z"
translator: claude
stale: false
---

## 概要

コードレビューはすべてのマージリクエストで必須です。[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)に慣れ、それに従ってください。

これらのガイドラインは、あなたまたはコミュニティメンバーのマージリクエストをレビュー、承認、マージする必要がある人についても説明しています。また、チームメンバーが遵守する必要がある[レビューレスポンス SLO](#レビューレスポンス-slo) についても説明しています。

## 価値観

GitLab のすべてのレビュアーは[レビュアー価値観](/handbook/engineering/workflow/reviewer-values/)を目指す必要があります。

## レビュアー

すべての GitLab エンジニアは同僚やコミュニティコントリビューターのマージリクエストに対してコードレビューを実行でき、奨励されます。マージリクエストをレビューしたい場合は、誰かが割り当てるまで待つこともできますが、オープンなマージリクエストの一覧を閲覧してフィードバックや質問を残すことも歓迎されます。

マージリクエストをレビューする人を見つけるには、[チームページ](/handbook/company/team/)または [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストを参照してください。どちらも `data/team_members/person/*` の YAML ファイルによって提供されています。

[マージリクエストコーチ](/job-description-library/expert/merge-request-coach/)になることで、コミュニティコントリビューターがマージリクエストを準備するのを手助けすることもできます。

すべてのエンジニアがすべてのマージリクエストをレビューできますが、マージリクエストを*承認する*能力はメンテナーに限定されていることに注意してください。

### PTO 前のレビュー割り当て管理

有給休暇を取る前に、レビュアーは以下を行うべきです:

- PTO 前の最終出勤日に割り当てられたすべての MR レビューを確認する
- 以下のいずれかにより[レビュー SLO](#レビューレスポンス-slo) を遵守する:
  - MR に PTO の日付と予定の復帰日を示すメッセージを残す
  - レビューを他の利用可能なレビュアーに再割り当てする
- PTO 開始前にレビューを完了できない場合は、MR 作者に直接通知する

これにより、あなたの不在中にマージリクエストがブロックされないことを確保します。

## メンテナー

メンテナーは、コードレビューのエキスパートであり、GitLab 製品とコードベースを非常によく知っており、[GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)の1つまたは複数でマージリクエストを承認する権限を持つ GitLab エンジニアです。

すべてのプロジェクトには少なくとも2人のメンテナーが必要ですが、ほとんどにはそれ以上います。一部のプロジェクトでは異なる専門分野ごとに別々のメンテナーがいます。例えば、[メインの GitLab コードベース](https://gitlab.com/gitlab-org/gitlab)にはフロントエンド、バックエンド、データベース向けの別々のメンテナーがいます。

優れたエンジニアは多くの場合優れたレビュアーでもありますが、コードレビューはそれ自体がスキルであり、すべてのエンジニアがそのスキルを磨く同じ機会を持っているとは限りません。良いメンテナーになることの大きな部分は、既存の製品とコードベースを非常によく知ることから来ており、それにより他の機能との非整合性、エッジケース、非自明な相互作用を見逃さずに発見できます。

レビュアー/メンテナーになることは、即時グループを超えた広範な責任を引き受けることを意味します。あなたの利用可能な能力はそれに応じて調整し、効果的に作業する余地を作る必要があります。これは各プロジェクトによって異なるため厳密な公式はありませんが、マネージャーと議論してバーンアウトを避け、マネージャーがチームの能力への影響を理解できるようにしてください。

コードベースと製品全体の品質を保護・確保するために、人々がメンテナーになるのは、レビュースキルが既存のメンテナーと同等のレベルであると説得力を持って実証した後のみです。

通常のレビュアーと同様に、メンテナーは[チームページ](/handbook/company/team/)または [GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

### シニア以上のメンテナー

シニア以上のエンジニアにとって、メンテナーになることは[合理的配慮プロセス](/handbook/people-policies/inc-usa/#reasonable-accommodation)に沿ってマネージャーまたはチームメンバー関係と議論した場合を除き、職務の一部です。個人がプロジェクトのコントリビューターであり積極的なレビュアーであれば、[エンジニアリングプロジェクト](/handbook/engineering/projects/)のうち製品の一部と見なされるものはどれでも適切です。2022年8月1日から、メンテナーシップの時間枠の期待については以下の表を使用します:

| 説明 | 時間枠 |
| ----------- | --------- |
| 中堅エンジニア | メンテナーシップはオプション |
| 既存のシニア以上のエンジニア | まだメンテナーでない既存のシニア以上のエンジニアは、チームの生産性とモチベーションをサポートするためにトレーニープログラムを完了することが奨励されます。トレーニープログラムの完了予定期間はありません。 |
| 新規採用のシニア以上 | オンボーディング中に、新規採用のシニア以上のエンジニアはレビュアーではなくトレーニーメンテナーになるよう依頼されます。オンボーディング完了から12ヶ月以内にメンテナーシップが完了することを期待します。 |
| シニアへの昇進 | シニアの役割に移行するエンジニアには、昇進前にすでにメンテナーになっていることを期待します。 |

### レビュアー/メンテナーとの出会い

コードをレビューする人に慣れていると、コミュニケーションが容易になります。コーヒーチャットなどの機会を活用してレビュアーと知り合い、将来のコミュニケーションを促進してください。

### プロジェクトメンテナーになる方法

**これは特にバックエンド、フロントエンド、データベースのメンテナーに適用されます。他のエリア（docs など）には以下に記載されている別のプロセスがある場合があります。**

メンテナーシップを考慮する前に、まずコントリビューターになるべきです。トレーニーメンテナープロセスでレビュアーになる前に、プロジェクトに少なくともいくつかの機能またはメンテナンスのコントリビューションをしておく必要があります。これらのコントリビューションは、プロジェクト固有のドメインと設計を理解するのに十分な複雑さを持つ必要があります。

#### メンテナーシップのチェックインとメンターシップ

関心を持つレビュアーは、メンテナーシップへの進捗を話し合い、例えば1対1の際に最近の詳細なレビューをレビューするために、マネージャー/メンターと定期的にチェックインするべきです。レビュアーはまた、レビューへのさらなる視点のために[メンテナーメンター](#レビュアーメンターシッププログラム)を探すことも奨励されます。レビュアーは「正当化される限りいつでもメンテナーになる準備ができている」という観点でメンテナーへの資格を考えることが奨励されます。

このテンプレートを使用して**トレーニーメンテナー Issue** を開くこともできます。これにより、最終マージリクエストに変換される例を積み上げることができます。

#### レビュアーへのマージリクエストフィードバック

各レビューが完了した後、レビュアーはマージリクエストがマージの準備ができていると考える理由についての正当化を書き上げる必要があります。この正当化はメンテナーによってレビューされ、メンテナーが正当化に同意する場合は、追加のノンブロッキングコメントがあっても 👍 リアクションをコメントに追加する必要があります。メンテナーは最初のレビューで見落とされたブロッキングの懸念点を強調するコメントを残すべきです。

#### メンテナーシップのノミネートプロセス

マネージャー/メンターはいつでもマージリクエストを開いてレビュアーをメンテナーとして追加することができます。このマージリクエストには、レビュアーがなぜメンテナーになるべきかのマネージャー/メンターからの正当化を含める必要があります。このマージリクエストをいつでも自分で開くことも歓迎されます。内容と手順を助けるための [MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/merge_request_templates)があります。

#### メンテナーシップの前提条件

MR を開く前に、作者は以下を行う必要があります:

1. レビュアーの最近のマージリクエストのいくつかのレビュー正当化をレビューする。
1. レビュアーに関するフィードバックのために少なくとも2人のメンテナーに非公開で連絡する。レビュアーはこれらのメンテナーが誰であるかについていくつかの提案をするかもしれません。

#### メンテナーシップフィードバックのリクエスト

マージ前に、マネージャー/メンターは以下を行う必要があります:

1. 対象の専門分野のメンテナーにメンションし、マネージャー/メンターに直接フィードバックを提供するよう依頼する。ネガティブなフィードバックはマージリクエストではなく、マネージャー/メンターに非公開で伝えるよう強調する。これは[ネガティブフィードバックは1対1で](/handbook/values/#negative-feedback-is-1-1)というコラボレーション価値観に沿っています。[ネガティブフィードバックの管理](#ネガティブフィードバックの管理)の追加ガイダンスを参照してください。
1. メンテナーがマネージャー/メンターにフィードバックする時間を与えるために、マージリクエストを1週間オープンにしておく。
1. 既存のメンテナーから少なくとも2件の承認を取得する。

##### ネガティブフィードバックの管理

**マネージャー/メンターがレビュアーがメンテナーになる準備ができていないというプライベートフィードバックを受け取った場合:**

1. マネージャー/メンターは提起された懸念点をレビューし、マージリクエストをクローズするのに十分な実質があるかどうかを決定する必要があります。
1. マネージャー/メンターはレビュアーが取り組むフィードバックがあるというコメントを付けてマージリクエストをクローズするかもしれませんが、フィードバックは機密扱いにします。
1. マネージャー/メンターはフィードバックを1対1の会話でレビュアーに直接提供します。このアプローチにより、レビュアーは再度メンテナー候補として提出される前にギャップに対処することができます。マネージャー/メンターがこのフィードバックを早期に依頼・受け取ることができるほど、より良いです。

メンテナー準備状況の不一致の処理:

マネージャー/メンターは、現在のメンテナーがトレーニーメンテナーの準備状況や資格に反対する際に提起された懸念点を理解しようとする必要があります。単一の不承認が受け取った承認を覆すかどうかを判断するために、以下のガイドラインを使用してください。

1. 他の価値観と一致して、メンテナーの懸念点は個人的または偏見的であってはなりません。
1. メンテナーの懸念点は[メンテナーの責任](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-maintainer)と一致している必要があります。
1. メンテナーの懸念点は事実に基づいている必要があります:
1. トレーニーメンテナーが一貫して[従来の方法で MR レビューを実行していない](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request)、または
1. トレーニーメンテナーが一貫して[コード品質と標準](/handbook/engineering/development/principles/#code-quality-and-standards)の確保に無責任であった（トレーニングプロセスで単発の問題は予想されます）。

より良い判断を下すために、マネージャーはフィードバックに関する個人情報を共有せずに、既存のメンテナー2人に非公開で連絡する必要があります。マネージャーはトレーニーメンテナーの準備状況についての最終的な責任を持ち、トレーニーメンテナーにメンテナー責任を委託する決定を所有します。

#### メンテナーシップの承認

マージ後に、マネージャーは以下を行う必要があります:

1. [エンジニアリングコミュニケーションハンドブックの Slack セクション](/handbook/engineering/workflow/engineering-comms/#slack)に記載されている適切なチャンネル、`#backend_maintainers`/`#frontend_maintainers`、`#backend`/`#frontend` でこの変更を発表します。
1. **エンジニアリング週次レビュードキュメント**にアップデートを投稿します。アジェンダは社内のみです。Google Drive で 'Engineering Week-in-Review' を検索してください。

### 承認されたプロジェクトメンテナーの追加手順

以下のプロジェクトの関心を持つレビュアーは、レビュアーからメンテナーに進むために[プロジェクトメンテナーになる方法](#プロジェクトメンテナーになる方法)で説明されていることに加えて、リストされたタスクを完了する必要があります。

#### `gitlab-rails` のプロジェクトメンテナープロセス

- バックエンドメンテナーの場合、`@gitlab-org/maintainers/rails-backend` にピングする
  - バックエンドメンテナーは[Rails コアフレームワーク gem](https://docs.gitlab.com/development/feature_categorization/#rails-platform-feature-category) に責任があります。これには gem のアップグレードのためにアプリケーションを更新する作業や、これらの gem に関連する GitLab の安定性と可用性のために必要なその他の作業が含まれる場合があります。
- フロントエンドメンテナーの場合、`@gitlab-org/maintainers/rails-frontend` にピングする

#### `gitlab-database` のプロジェクトメンテナープロセス

- [データベースレビュープロセス](https://docs.gitlab.com/ee/development/database_review.html)に慣れる。
- [マイグレーションヘルパー](https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/database/migration_helpers.rb)に慣れ、既存のマイグレーションでの使用をレビューする。
- [データベースガイド](https://docs.gitlab.com/ee/development/database/index.html)のベストプラクティスに慣れる。
- [EXPLAIN プランの理解](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html)を読む。
- [`@gl-database`](https://gitlab.com/groups/gl-database/-/group_members) グループに追加されてグループへの @メンションに応答する（グループ上の任意のメンテナーに連絡して追加してもらう）。gitlab.com でグループのメンションの TODO を受け取ります。
- [データベースラボ/postgres.ai への `psql`/`AllFeaturesUser` アクセス](https://docs.gitlab.com/ee/development/database/database_lab.html#access-database-lab-engine)のための[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)を作成する（`AllFeaturesUser` アクセスがまだない場合）。

ヒント:

- `~"database::reviewed"` ラベルを適用したレビューのみに限定したダッシュボードが必要な場合は、データベースグループマネージャーに連絡してください。

#### `gitlab-components` のプロジェクトメンテナープロセス

[`gitlab-components`](https://gitlab.com/components)

- [CI/CD コンポーネント作成のドキュメントとベストプラクティス](https://docs.gitlab.com/ee/ci/components/)をレビューする。
- [GitLab が管理するコンポーネントのドキュメント](https://docs.gitlab.com/ee/development/cicd/components/)に慣れる。
- 開発プロセスに慣れるために1つ以上のコンポーネントを開発する。
- マージリクエストを作成し、CI/CD コンポーネントメンテナーとして追加してもらうためにマネージャーに割り当てる。開発した CI/CD コンポーネントの参照を必ず引用する。（[MR の例](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/132498)参照）
- レビューとフィードバックのために MR で既存のメンテナー（`@gitlab-org/maintainers/ci-components`）にピングする。
- MR をマージするために既存のメンテナーから少なくとも2件の承認を取得する。

承認後、MR をマージするメンテナーは:

- 新たに承認されたメンテナーを CI コンポーネントのメンテナーグループ（`@gitlab-org/maintainers/ci-components`）に追加する。
- [`#ci_components_maintainers`](https://gitlab.slack.com/archives/C06AQBJETRR) で発表し、*エンジニアリング週次レビュードキュメント*にアップデートを投稿する

#### `design.gitlab.com` または `gitlab-svgs` のプロジェクトメンテナープロセス

[`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) または [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)

- [メンテナーになる方法](/handbook/product/ux/pajamas-design-system/design-review/#how-to-become-a-maintainer)を理解する。
- すべてのデザイナーは [`gitlab-design`](https://gitlab.com/gitlab-org/gitlab-design) プロジェクトのメンテナーです。`gitlab` と `gitlab-ui` プロジェクトの UI（`.scss`）のメンテナーになることに興味がある場合は、[エンジニアリングレビューワークフロー](/handbook/engineering/workflow/code-review)に従ってください。
- 十分な MR をレビューするためのものを確保し、様々な種類のものを確保するのはあなた次第です。例えば `#ux` や `#pajamas-design-system` Slack チャンネルでのレビューをチームに依頼することもできます。トレーニングを進めるための十分な MR を受け取れていない場合は、積極的に Pajamas への改善に取り組んでください。これにより製品の全体的な理解と質の高いコントリビューションが実証され、進捗を後押しします。メンテナーはガイドするために利用可能です。
- レビューはメンテナーの責任だけでなくレビュアーの責任もカバーすることを目指してください。デザインメンテナーは使いやすさに影響を与え、既存のユーザーエクスペリエンスを改善し、デザインガイドライン、標準、パターンの使用を含む MR に焦点を当てる必要があります。あなたの承認はマージの準備ができていると考えることを意味します。
- メンテナーとして、あなたが持っていない専門知識について[他者に頼る](/handbook/values/#its-impossible-to-know-everything)必要があります。MR の説明で、メンテナーレベルでの成果を示す努力、引き続き取り組みたいスキル、この Issue へのリンクを強調してください。（[例](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2395)）

#### `gitlab-quality` のプロジェクトメンテナープロセス

[`gitlab-quality`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)

- メンテナーになりたい Quality プロジェクトを選択する:
  - [`GitLab (/qa)`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
  - [`GitLab-QA`](https://gitlab.com/gitlab-org/gitlab-qa)
  - [`GitLab Triage`](https://gitlab.com/gitlab-org/gitlab-triage/)
  - [`Triage Ops`](https://gitlab.com/gitlab-org/quality/triage-ops/)
  - [`GitLab CustomersDot (/qa)`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/qa/)
  - [`GitLab Environment Toolkit (GET)`](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
  - [`GitLab Performance Tool (GPT)`](https://gitlab.com/gitlab-org/quality/performance)

#### `gitlab-secure-analyzers` のプロジェクトメンテナープロセス

[`gitlab-secure-analyzers`](https://gitlab.com/gitlab-org/security-products/analyzers)

- [Secure チームの標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines)を理解する。
- [Secure リリースプロセス](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#versioning-and-release-process)を理解する。
- [Secure QA プロセス](/handbook/engineering/development/sec/secure/qa_process/)を理解する。

#### `gitlab-elasticsearch-indexer` のプロジェクトメンテナープロセス

[`gitlab-elasticsearch-indexer`](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

- [`golang` トレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md)を完了する。
- [GitLab Elasticsearch Indexer の開発とリリース](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/blob/main/PROCESS.md)プロセスをレビューする。
- `#g_global_search` Slack チャンネルに参加する。
- プロジェクトに慣れるために Issue に取り組む。
- *オプション:* [既存のメンテナー](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/project_members?with_inherited_permissions=exclude)に連絡してメンテナーに[なる手助け](#プロジェクトメンテナーになる方法)をしてもらう。

#### `gitlab-advanced-search-migration` のプロジェクトメンテナープロセス

- [高度な検索マイグレーションレビュープロセス](https://docs.gitlab.com/ee/development/search/advanced_search_migration_review.html)に慣れる。
- [高度な検索マイグレーションヘルパー](https://docs.gitlab.com/development/search/advanced_search_migration_styleguide/#migration-helpers)の仕組みを理解し、既存のマイグレーションでの使用をレビューする。
- [高度な検索マイグレーションスタイルガイド](https://docs.gitlab.com/ee/development/search/advanced_search_migration_styleguide.html)を理解し、[既存のマイグレーション](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/elastic/migrate)での使用をレビューする。
- `#g_global_search` Slack チャンネルに参加する。
- オプション: 既存のメンテナーに連絡してメンテナーになる手助けをしてもらう。

#### `customers-gitlab-com` のプロジェクトメンテナープロセス

[`customers-gitlab-com`](https://gitlab.com/gitlab-org/customers-gitlab-com)

- [標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/development_processes.html)を理解する。
- Fulfillment システムで使用される[ソフトウェアアーキテクチャ](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc/architecture)を理解する。
- [CustomersDot ドキュメント](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/index.md)を読み通す。
- Issue にコントリビュートしてプロジェクトに慣れる。
- ドメイン専門知識とレビュアーの責任との一致を実証するレビューにコントリビュートする。

#### `gitlab-secure-license-db` のプロジェクトメンテナープロセス

[`gitlab-secure-license-db`](https://gitlab.com/gitlab-org/security-products/license-db)

- [GitLab Go 標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/)に慣れる。
- Go の事前経験がない場合は [Golang トレーニング Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md) を完了する。
- [外部ライセンス DB アーキテクチャとリポジトリウォークスルー](https://www.youtube.com/watch?v=5b5QNJNwoJ8)を視聴する。
- [LicenseDB のフルスタック開発ガイドライン](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/blob/main/docs/fullstack_development.md)をレビューする。
- コンポーネントへの新しい変更をリリースして[デプロイ](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/merge_requests/162)する方法を理解する。
- [スケジュールされたパイプライン](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/pipeline_schedules)がデプロイプロジェクトにどのように使用されているかを理解する。
- `license-db` ネームスペースの特定のプロジェクトへの合計3つのマージリクエストを作者またはレビューする。メンテナーシップはプロジェクトごとに付与されます。

#### `gitlab-chart` のプロジェクトメンテナープロセス

[`gitlab-chart`](https://gitlab.com/gitlab-org/charts/gitlab)

- [Distribution のマージリクエストワークフロー](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)に慣れる。
- GitLab Helm chart の[アーキテクチャ](https://docs.gitlab.com/charts/architecture/index.html)と[スタイルガイド](https://docs.gitlab.com/charts/development/style_guide.html)に慣れる。
- [GitLab Operator と GitLab Helm chart の関係](https://docs.gitlab.com/operator/developer/charts_dependency.html)を理解する。
- Issue にコントリビュートしてマージリクエストをレビューする。
- [rspec を使用した GitLab Helm chart のテスト方法](https://docs.gitlab.com/charts/development/rspec.html)を理解する。

#### `gitlab-operator` のプロジェクトメンテナープロセス

[`gitlab-operator`](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

- [Distribution のマージリクエストワークフロー](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)に慣れる。
- [GitLab Go 標準とスタイルガイドライン](https://docs.gitlab.com/ee/development/go_guide/)に慣れる。
- [カスタムリソースとコントローラー](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)の仕組みを理解する。
- 以下のライブラリとツールに慣れる:
  - [operator-sdk](https://sdk.operatorframework.io/docs/overview/)
  - [controller-runtime](https://pkg.go.dev/sigs.k8s.io/controller-runtime)
  - [Operator Lifecycle Manager](https://olm.operatorframework.io/docs/)
  - [envtest](https://book.kubebuilder.io/reference/envtest.html)
- Issue にコントリビュートしてマージリクエストをレビューする。
- [GitLab Operator と GitLab Helm chart の関係](https://docs.gitlab.com/operator/developer/charts_dependency.html)を理解する。

#### `ai-gateway` のプロジェクトメンテナープロセス

[`ai-gateway`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)

- [ソフトウェアアーキテクチャ](/handbook/engineering/architecture/design-documents/ai_gateway/)を理解する。
- [ローカル開発環境向けに GitLab Duo を設定する](https://docs.gitlab.com/ee/development/ai_features/#instructions-for-setting-up-gitlab-duo-features-in-the-local-development-environment)。
- [メンテナーシップのドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/maintainership.md)を読み、そこに記載されている手順に従ってメンテナーになる。

#### メンテナーになることを学ぶ

マネージャーによってメンテナーとして推薦されるタイミングは任意ですが、メンテナーになりたいレビュアーはメンテナーの考え方を習得し、メンテナーからのフィードバックから学ぶために各レビューで基本的な手順に従う必要があります。

マージリクエストを作成し、[チームメンバーエントリ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person)で `project-name: trainee_maintainer` として役割を示してください。MR をマネージャーに割り当ててマージしてもらいます。

各レビュー後、レビュアーはなぜマージリクエストがマージの準備ができていると思うかをまとめる必要があります:

例えば:

> Looks good!  I believe this MR resolves the issue and it looks safe because the code change is relatively isolated.
>
> LGTM! I feel this MR is a good iteration. And it has low risk because it is behind a feature flag.

メンテナーはレビュアーのコメントに対して 👍 で同意した場合応答し、マージする際に初回レビューで捕捉すべきだった追加コメントがあった場合はすべてのレビュアーにピングして認識させる必要があります。

進捗を追跡することが役立つと感じるレビュアーもいます。これは必須ではありませんが、人々が行ったいくつかの方法を以下に示します:

- 受け取ったすべての様々なレビューとメンテナーからのフィードバックコメントを含む Issue を保持する。このタイプの Issue を助けるツールがいくつかあります:
  - https://gitlab.com/nolith/review-tanuki
  - https://gitlab.com/caalberts/review-tanuki
  - https://gitlab.com/arturoherrero/trainee
  - https://gitlab.com/knejad/gitlab-career-development#mr-reviews
- 絵文字を使用してメンテナーからフィードバックを受けたすべての MR にマークを付けて簡単に検索できるようにする。

#### メンテナーになった後

新しいメンテナーになった場合は、役割を果たすことができる関連する権限をリクエストするためにこれらの指示に従ってください:

- Slack のメンテナーのグループチャンネルに参加する: `#frontend_maintainers`、`#backend_maintainers` など。
- グループのメンテナーに存在する場合はメンテナー固有のミーティングに招待してもらう。
- 所属するメンテナーグループへのアクセスをリクエストする: [フロントエンド](https://gitlab.com/gitlab-org/maintainers/frontend)、[バックエンド](https://gitlab.com/gitlab-org/maintainers/rails-backend)、または[データベース](https://gitlab.com/gitlab-org/maintainers/database)。
- [シングルパーソンアクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) Issue テンプレートを使用してメンテナーとして行動するプロジェクトのメンテナー権限をリクエストする。Issue を作成したら、別のメンテナーにその権限を付与するよう依頼する。

### レビュアーメンターシッププログラム

新しいメンテナーのトレーニングとオンボーディングは重要なプロセスです。エンジニアリングチームが成長し、MR の総数が急速に増えるにつれて、メンテナーあたりの MR レビュー数はすぐに持続不可能になります。

[最近の調査](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8504)は、新しいメンテナーのトレーニープロセスがいくつかの重要な要因によって妨げられていることを示しています:

- レビュアー自身の準備状況と自信の認識
- レビュアーが十分な量の MR をレビューできる能力
- コードベース全体で十分な幅をカバーする多様な MR をレビューできる能力

#### 構造

1. 参加はメンテナーとレビュアーの両方にとって任意です。
1. メンテナーは一度に最大4人のレビュアーを直接指導できます。
1. メンター/レビュアーの割り当ては [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) ファイル内で調整されます。
1. 新しいレビュアーは [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) で空きがある既存のメンテナーを見つけて直接メンテナーに連絡する必要があります。
1. 6週間ごとにメンテナーは各レビュアーとチェックインします。これは非同期またはコーヒーチャットを通じて行うことができます。
1. チェックインの目的は、MR のレビュー、質問への回答、疑問の解消、卒業に向けた準備状況の追跡です。
1. メンターシップは12ヶ月で上限とされ、その時点でレビュアーは卒業の準備ができているはずです。
1. レビュアーが卒業したら少なくとも1回の追加チェックインをスケジュールして成果を祝い、さらなる質問に答える必要があります。
1. 新しいメンティーのためのスペースを作るために、卒業したレビュアーを [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) ファイルから確実に削除してください。

#### メリット

1. メンテナーのメンターシップスキルを開発・拡大します
1. レビュアーに不足しているエリアのスキルアップの定期的なタッチポイントを与えます
1. 現在よりもレビュアー/メンテナー間の強いネットワークを構築します
1. メンテナーの直接指導により、GitLab コードベースの所有権において能力と自信が向上します。

##### レビュアー/メンテナーの移行

マネージャーとの相談後、レビュアー/メンテナーから移行する必要がある場合があります。どのような状況であっても、これは完全に問題ありません！責任とワークロードは変わります。プロジェクトも進化します。したがって、最も重要なエリアに時間を費やすことが重要です。[レビュアールーレット](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)から削除されるために変更を公式にするには:

1. YAML ファイルの更新方法については[チームメンバーデータベース](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/team_database.md)ドキュメントを参照してください。
1. 新しい MR を作成し、MR をマネージャーに割り当てます。

##### レビュアー/メンテナーへの復帰

レビュアー/メンテナーからの移行期間後、これらの職務を再開したい場合があります。リクエストを公式にするには、[プロジェクトメンテナーになる方法](#プロジェクトメンテナーになる方法)のセクションを参照し、トラッキング Issue とマージリクエストを作成して、コンテキストとして以前のトラッキング Issue とマージリクエストを参照してください。新しく作成されたマージリクエストは、プロセスを通常高速化できるため即時レビューのためにマネージャーに割り当てる必要があります。

### 小規模プロジェクトのメンテナーシッププロセス

**これは特定のグループに属するプロジェクトや社内コントリビューターが10人未満のプロジェクトがメンテナーシッププロセスを定義・文書化するために使用できる汎用テンプレートです。**

プロジェクトはこれらのガイドラインを採用して、メンテナーが十分でないプロジェクトでメンテナーを育成することができます。

- すべてのチームメンバーは[エンジニアリング開発ロール](/job-description-library/engineering/development/)を参照してレビュアーまたはメンテナーになる必要があります。
- [プロジェクトメンテナーになる方法](#プロジェクトメンテナーになる方法)の下にプロジェクト固有のメンテナーシッププロセスを追加します。[軽量テンプレート](#メンテナープロセステンプレート)が提供されています。
- プロジェクト内で [`simple_roulette`](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles/-/tree/master#simple_roulette) を使用して Danger Review を有効にして MR レビュアーを特定します。
- メンテナーと見なされるために必要なマージリクエストレビューの数を減らします。
- プロジェクト自体への作業をメンテナーシップへの進捗としてカウントします。
- プロセスを加速するためにメンテナーメンターを必要とします。
- 過去のレビューに基づいた練習 MR をキュレートします。クローズした状態で MR のコピーを作成し、プロジェクトメンテナーシッププロセスにリンクを提供します。
- プロジェクトに対して存在しない場合はプロジェクト固有の開発ガイドラインを作成することを検討します。
- プロジェクトの README にプロジェクトメンテナーになる方法の指示を追加します。

#### 小規模プロジェクトの加速されたメンテナーオンボーディング

メンテナーの数が限られた小規模プロジェクトは加速されたオンボーディングプロセスから利益を得ることができます。このプロセスはメイン GitLab のメンテナーシップよりも関与度が低いです。主にこれらの小さなプロジェクトには十分な機能作業と MR がないためです。各プロジェクトはニーズに合わせてこのプロセスを変更できます。

オンボーディングプロセスは以下のステップで構成されます:

- メンテナーになるための基準とオンボーディングプロセスを確立し Issue に文書化します。例えば:
  - 対象エンジニア: TypeScript で作業したいすべての人。
  - トレーニング: 録画されたコードウォークスルーとインタラクティブなペアリングセッション。
  - メンテナーになるための基準: トレーニング後のコードベースへの自信に基づく自己選択。
- エンドツーエンドの機能のペアプログラミングによる知識の共有。現在のプロジェクトメンテナーが潜在的なメンテナーを教育するための一連のペアリングセッションを開催します。VS Code Extension パイロットでは、4週間にわたって4回の1時間のセッションで VS Code コマンドの1つの実装を変更しました。
- 潜在的な新しいメンテナーとのコードウォークスルーとペアリングセッションのスケジューリング。コードベースの包括的な理解を提供するために必要な適切な時間とセッション数を決定します。
- パイロットプログラムでは、各潜在的なメンテナーが X 件の MR レビューを行うことも検討しましたが、プロジェクトに十分な MR がありませんでした。
- プロセスを設計した後、潜在的な新しいメンテナーからフィードバックを求めます。ウォークスルー、ペアリングセッション、その他のリソースの異なる組み合わせを好むかもしれません。

このオンボーディングプロセスに従うことで、プロジェクトはコードベースとプロジェクトのビジネスロジックをしっかり理解した新しいメンテナーを効率的に追加できます。このプロセスの実例は [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/656) プロジェクトで確認できます。

#### メンテナープロセステンプレート

プロジェクトのメンテナー要件を定義する出発点としてこの軽量テンプレートを使用してください。

- プロジェクトのドメインとガイドラインに慣れるために Issue に取り組む。
- プログラミング言語がメイン GitLab プロジェクトで使用されていない場合はプロジェクト固有の言語トレーニングを完了する（例: [golang トレーニング](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md)）。
- プロジェクト固有のリリースプロセスをレビューする（存在する場合）。
- `[プロジェクトまたはチーム]` Slack チャンネルに参加する。
- マージリクエストを作成し、[チームメンバーエントリ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person)で `project-name: trainee_maintainer` として役割を示す。MR をマネージャーに割り当ててマージしてもらう。
- *オプション:* 利用可能な練習 MR でシミュレートされたレビューを実行する。
- *オプション:* MR のピアレビュー。
- *オプション:* 既存のメンテナーに連絡してメンテナーに[なる手助け](/handbook/engineering/workflow/code-review/#レビュアーメンターシッププログラム)をしてもらう。

### メンテナー比率

フロントエンドとバックエンドの両方で、エンジニア対メンテナーの比率を6未満に保つことを目指しています。これはエンジニア対メンテナー比率ダッシュボードで追跡しています:

https://10az.online.tableau.com/t/gitlab/views/DraftEngineerMaintainerRatio/EngineerMaintainerRatio_1

### メンテナーの需要

メンテナーシップ需要ダッシュボードを見ることで需要を測定できます。月、プロジェクト、技術でフィルタリングできます:

https://10az.online.tableau.com/#/site/gitlab/views/MaintainershipDemand/MaintainershipDemand?:iid=1

#### このダッシュボードについて

メトリクスの定義:

- 受信マージリクエスト - 任意の作者によって開かれた MR の総数。
- 平均可用性 - メンテナーがレビューを受け入れており、忙しくなく、休暇中でも、容量いっぱいでもない時間の平均割合。
- 総メンテナー数 - `team.yml` に `maintainer` が指定されているエンジニアの数。
- 利用可能なメンテナー数 - 総メンテナー数に平均可用性を掛けた数。
- 月次レビュー目標 - 特定の月に各メンテナーが期待するレビュー数に基づく変動数。月次レビュー目標はエリアによって異なるか、受信マージリクエスト数に基づいて一般的に定義されます。このメトリクスの詳細については[以下をお読みください](#月次レビュー目標)。
- ターゲットメンテナー数 - そのエリアのその月の受信マージリクエスト数、現在の総メンテナー数、平均可用性に基づいて月ごとに変動する数。
- 最低必要メンテナー数 - 受信マージリクエストの需要を満たすために必要な利用可能なメンテナー数。
- 必要なメンテナー数 - 最低必要メンテナー数を満たすために依然として必要な利用可能なメンテナー数。
- 技術グループ - データベース、バックエンド、フロントエンド、CI テンプレート、Workhorse のようなメンテナー固有の専門分野を持つプロジェクト向け

グラフの説明:

- 利用可能なメンテナー VS 需要 - メンテナーのターゲット、合計、可用性の全体的な高レベルの概観。
- メンテナーが必要なプロジェクト - 前月のデータに基づき、より多くの利用可能なメンテナーが必要と予測されるエリアの出力。
- プロジェクト/エリアのメンテナーシップ健全性 - 最低必要メンテナー数を満たしていないプロジェクト（GitLab）またはエリア（バックエンド）の割合の経時変化。
- 不健全なメンテナーシップ健全性のコアエリア - 最低必要メンテナー数を満たしておらず、月あたり100件以上の受信マージリクエストを受け取っているプロジェクト（GitLab）またはエリア（バックエンド）の割合の経時変化。
- 製品リポジトリの一部 - フル データ - 上記のすべてのメトリクスを含む各プロジェクト、エリア、月の完全なグラフ。

#### 月次レビュー目標

ターゲットは利用可能なメンテナー数（上述）と1ヶ月に「合理的な」レビュー数に基づいて計算されます。「合理的な」は[個別分析 Issue](https://gitlab.com/groups/gitlab-com/-/epics/1817) でいくつかのエリアに対して定義されています。これらは "maintainer_custom_targets" Sisense スニペットで定義されたカスタムターゲットです。他のすべてのプロジェクトにはプロジェクトへの受信マージリクエスト数に基づく一般ターゲットがあります。これらの数値は最初のイテレーションであり、分析 Issue に基づいていました。要求の少ないプロジェクトはメンテナー数が少なく（したがって1人あたり月次レビューが多く必要）、要求の多いプロジェクトはメンテナー数が多い（したがって1人あたり月次レビューが少ない）:

- デフォルトのターゲットはメンテナーあたり5件のレビュー
- エリアが10件以上のマージリクエストを受け取る場合、月次ターゲットはメンテナーあたり10件のレビュー
- エリアが500件以上のマージリクエストを受け取る場合、月次ターゲットはメンテナーあたり40件のレビュー
- エリアが1000件以上のマージリクエストを受け取る場合、月次ターゲットはメンテナーあたり16件のレビュー
- エリアが1500件以上のマージリクエストを受け取る場合、月次ターゲットはメンテナーあたり20件のレビュー

`maintainer_custom_targets` Sisense スニペットを使用してエリアにカスタムターゲットを追加するには:

- Sisense で Snippets > `maintainer_custom_targets` に移動する
- プロジェクト名とオプションで技術グループに基づく新しい `CASE/WHEN` ステートメントを追加する
- このプロジェクトに対して合理的なレビュー数に従って、1人あたりの理想的な月次レビューターゲットに数を設定する

#### 注意事項

- **総メンテナー数が0と表示される場合があります** - このデータはプロジェクトのメンバーシップに Sisense からのアクセス権がないため、また多くのプロジェクトにメンテナー/オーナーが実際にはアクティブでない人がいるため、レビュアールーレットを使用して総メンテナー数を決定しています。プロジェクトにメンテナーがいるにも関わらず0と表示される理由の1つは、表示されるプロジェクト名がレビュアールーレット用の `team.yml` で使用されるプロジェクト名と一致しないことです。もう1つの理由は、プロジェクトがレビュアールーレットを使用していないことです。これらの場合、プロジェクトを正しく設定してレビュアールーレットを使用できるようにする必要があります。最後に、`team.yml` はプロジェクトまたはエリアの要件と一致する必要があります - 例えば、プロジェクトのレビューが任意のメンテナーに行くことができる場合、`team.yml` は `maintainer` を指定する必要があります。プロジェクトのレビューが専門分野ごとに分かれている場合、`team.yml` は `maintainer [SPECIALTY]` を指定する必要があり、マージリクエストはその専門分野に従ってラベル付けされる必要があります。

### メンテナー/レビュアーの可用性

タイムゾーン全体で、MR をタイムリーにレビューできる人がいることを確保しつつ、レビューの負荷を合理的なレベルに保つために、十分なレビュアーとメンテナーを持つことを目指しています。これは [レビュアー/メンテナー可用性とキャパシティダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ReviewermaintainerAvailabilityandCapacity/Reviewermaintaineravailabilityandcapacity?:iid=1)で追跡しています:

https://10az.online.tableau.com/#/site/gitlab/workbooks/2286852/views

## リーディングオーガニゼーション

すべての広いコミュニティメンバーとその組織は[コントリビュートできます](/handbook/company/mission/#contribute-with-gitlab)。私たちは、GitLab などのオープンソースへのコントリビューションが組織とそのメンバーにとって競争上の優位性であると強く信じており、それを行う組織を表彰したいと考えています。GitLab は[頻繁かつ原子的なイテレーション](/handbook/values/#iteration)でコントリビュートする人々を奨励、称賛、報酬します。組織または関係のない個人が過去3ヶ月間で20件以上のマージリクエストをマージした場合、その組織または個人を `Leading Organization` と見なします。

組織は[プロフィール](https://gitlab.com/-/profile)の `Organization` フィールドに基づいてマッチングされます。GitLab はコントリビューター成功チームが利用可能なその他のメタデータを使用して個人を組織にマッチングすることもあります。あなたまたはあなたの組織が該当するが `Leading Organization` ラベルをマージリクエストで受け取っていない場合は、[コントリビューター成功キューで Issue を作成](https://gitlab.com/gitlab-com/quality/contributor-success/-/issues)してください。

`Leading Organization` は[レビューレスポンス SLO](#レビューレスポンス-slo) の権利が与えられます。この権利は各月の始めに付与されます。組織が `Leading Organization` のステータスを持つ間に作成されたマージリクエストは `Leading Organization` ラベルを受け取ります。

> Leading Organization = 過去3ヶ月間で20件以上のマージ済みマージリクエスト

対象のマージリクエストには [GitLab 製品](/handbook/product/groups/product-analysis/engineering/dashboards/)とドキュメントへのコントリビューションが含まれます。[www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com) リポジトリ（例えば GitLab ハンドブック）へのコントリビューションは現在含まれておらず、レビューレスポンス SLO の権利が与えられていません。

## ドメインエキスパート

[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)は、ドメイン専門知識を持つチームメンバーにデフォルトでレビューを割り当てることを述べています。

### ドメインエキスパートとは何か？

現在、チームメンバーをドメインエキスパートとして認定するための厳格なルールは提供しておらず、代わりに暗黙的かつ自己識別というシンプルな解決策を使用しています。

暗黙的:

- 特定のステージ/グループ（例: Create: Source Code）に取り組むチームメンバーは、そのエリアのアプリに対して暗黙的にドメインエキスパートと見なされます。
- 特定の機能（例: search）に取り組むチームメンバーは、その機能に対して暗黙的にドメインエキスパートと見なされます。

自己識別:

- チームメンバーは特定の機能（例: file uploads）のドメインエキスパートとして自己識別できます。
- チームメンバーは特定の技術（例: GraphQL）、製品機能（例: file uploads）、またはコードベースのエリア（例: CI）のドメインエキスパートとして自己識別できます。

### ドメインエキスパートとして自己識別する方法

ドメインエキスパートと見なされる唯一の要件は、特定の技術、製品機能、またはコードベースのエリアに実質的な経験を持つことです。チームメンバー自身がこの基準を満たしているかどうかを決定することに委ねています。

1. [`data/domain_expertise.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/domain_expertise.yml) にある新しいまたは既存のドメイン専門知識キーを定義する。
1. 自分の [YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person)のエントリを新しい `domain_expertise` プロパティで更新し、すべてのドメイン専門知識キーをリストアップする。

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

ドメインエキスパートとして自己識別する場合、MR はすでに確立されたドメインエキスパートまたは対応するエンジニアリングマネージャーによってマージされることが推奨されます。

### ドメイン専門知識を持つ人のリストはどこで見つけられますか？

チームメンバーの専門知識は[エンジニアリングプロジェクト](/handbook/engineering/projects/)ページで確認できます。

## レビューの所要時間

[他者のブロック解除は常に最優先事項](/handbook/values/#iteration)であるため、レビュアーは他のタスクや優先事項に悪影響を与える場合でも、タイムリーにマージリクエストをレビューすることが期待されます。

これにより、コンテキストが記憶に新鮮なためマージリクエストに関わるすべての人がより速くイテレーションでき、コントリビューターの経験を大幅に向上させます。

### レビューレスポンス SLO

すぐにレビュー可能なコードへの迅速なフィードバックを確保するために、`Review-response` サービスレベル目標（SLO）を維持しています。
SLO は GitLab チームメンバーと[リーディングオーガニゼーション](#リーディングオーガニゼーション)に適用されますが、他の広いコミュニティコントリビューターには適用されません。

SLO は以下のように定義されています:

> Review-response SLO = （レビューが提供された時刻） - （MR がレビュアーに割り当てられた時刻）

SLO の値はマージリクエストの作者によって異なります:

- GitLab チームメンバーから: `Review-response` SLO < 2営業日
- [リーディングオーガニゼーション](#リーディングオーガニゼーション)の作者から: `Review-response` SLO < 4営業日

`Review-response` SLO の時間枠内にマージリクエストをレビューできないと思う場合は、できるだけ早く（最初のレビューリクエストを受け取ってから36時間以内に）コメントで作者に知らせ、別のレビュアーまたはメンテナーを見つける手助けをして、彼らが迅速にブロック解除されて作業を続けられるようにしてください。レビュアーとしての自分を削除してください。

レビュアーはいくつかの他の絵文字を通じてステータスをコミュニケーションすることもできます。これらの他のステータスの詳細については、開発者ドキュメントの[コードレビュー](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)ページを参照してください。

もちろん、休暇中で GitLab.com のステータスで[それをコミュニケーション](/handbook/people-group/time-off-and-absence/time-off-types/)している場合は、作者はこれを把握して自分で別のレビュアーを探すことが期待されます。

マージリクエストの作者が `Review-response` SLO より長くブロックされている場合は、Slack を通じてレビュアーに知らせるか、別のレビュアーを追加することができます。

### 期待の管理

レビューに割り当てられており `Review-response` SLO 内に対応できない場合は、遅延した応答を作者に知らせる MR へのコメントを残してください。可能であれば、作者がフィードバックを期待できる時期や代替レビュアーを見つける手助けを示してください。

MR の作者として、`Review-response` SLO が満たされていないかつ担当者に連絡できない場合は、別のレビュアーまたはメンテナーに再割り当てしてください。

## コードオーナーの承認

一部の GitLab プロジェクトは GitLab の [CODEOWNERS ファイル機能](https://docs.gitlab.com/ee/user/project/codeowners/)を使用して特定のファイルパスとタイプの承認を管理しています。`gitlab-org/gitlab` プロジェクトでは、職務分離のベストプラクティスに従うために [CODEOWNERS 承認ルールと MR 承認設定の組み合わせを使用しています](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request)。このセクションでは `gitlab-org/gitlab` プロジェクトの CODEOWNERS 変更の適格な承認者を更新するプロセスを説明します。

[CODEOWNERS ファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS)自体のコードオーナーはファイル内のルールで管理されています。例えば:

```text
CODEOWNERS @gitlab-org/development-leaders @gitlab-org/tw-leadership
```

`CODEOWNERS` ファイルのコードオーナーを更新する2つの方法があります:

1. [標準アクセスリクエストプロセス](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を通じて CODEOWNERS 変更を承認する能力がすでにあるグループのメンバーシップを更新する。
1. 関連する行を更新するマージリクエストを開く。既存のコードオーナーがマージリクエストを承認する必要があります。また、セキュリティコンプライアンスチームメンバーに可視性のためにピングすることが奨励されます。

`@gitlab-org/development-leaders` グループは、エンジニアリング内の開発部門の管理職トラックのシニアマネージャー以上と個人コントリビュータートラックのディスティングイッシュドエンジニア以上のチームメンバーで構成されています。
