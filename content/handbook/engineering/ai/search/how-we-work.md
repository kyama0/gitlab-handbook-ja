---
title: Global Search - 私たちの働き方
description: "Global Search グループのチームプロセス。日々の業務、レビュー、自動化、リリース、インシデントのエスカレーションを扱います。"
upstream_path: /handbook/engineering/ai/search/how-we-work/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: "2026-11-13T17:44:40+05:30"
translated_at: "2026-11-14T09:23:46+00:00"
translator: codex
stale: false
---

## このページの対象範囲 {#scope-of-this-page}

このページでは、Global Search グループ独自のプロセスを扱います。[グループのページ](/handbook/engineering/ai/search/)は、チームの概要、開発するもの、運用するもの、現在取り組んでいることを簡潔にまとめたものにします。作業のスケジュールの決め方、誰が何をレビューするか、どのような自動化があるか、インデクサーのリリース方法、本番環境のインシデントがどのように私たちに届くかなど、チーム自身が調べる必要のあることはすべてここに記載します。

## 業務 {#work}

私たちは、[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)と[エンジニアリングワークフロー](/handbook/engineering/workflow/)で定められた一般的なワークフローと原則に従います。Issue を私たちに知らせるには、関連するプロジェクトに Issue を作成し、`~"group::global search"` ラベルと、ほかの適切なラベルを付けてください。緊急の Issue については、[グループのページ](/handbook/engineering/ai/search/#team-members)に記載されている Product Manager または Engineering Manager に連絡してください。

チームが日々従うガイドラインは次のとおりです。

- GitLab、Slack、Google Docs などを通じて、互いに、またほかの GitLab チームと非同期でコミュニケーションします。
- チームのすべてのバックエンドエンジニアに、グループ内のほかのメンバーによる変更のレビューを受けることを推奨します。知識の共有に役立ちます。
- タスクはエピックと Issue にまとめます。Product Manager と Engineering Manager は、各リリースの計画段階でバックログを確認し、Issue を次の 1 つまたは 2 つのマイルストーンに割り当てます。[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)の Issue は、優先度の高い順に並んでいます。
- マイルストーン内でクローズする予定の Issue には、マイルストーン開始前に Deliverable ラベルを付けます。マイルストーン中に追加した Issue には付けません。これらの Issue をマイルストーンの中間、通常は毎月第 1 週にレビューし、リリースに間に合いそうにない Issue からラベルを外します。
- マイルストーン中に着手する予定で、クローズを確約しない Issue には Stretch ラベルを付けます。
- デザイン上の検討が必要な機能では、UX ワークフローのラベルを付け、UX の担当者を割り当てて UX チームと協力します。ユーザーリサーチには `workflow::problem validation` と `workflow::solution validation`、UI デザインとプロトタイプ作成には `workflow::design` を使います。`workflow::ready for development` は開発を開始できることを示します。軽微な UX の変更では、UX の担当者または Product Design Manager に直接連絡します。
- テストの観点が必要な Issue では、[RFH](/handbook/engineering/infrastructure-platforms/developer-experience/#request-for-help-process)を作成し、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームと協力します。
- ドキュメントの変更が必要な Issue では、`documentation` ラベルを付け、担当者を割り当てて Technical Writing チームと協力します。ドキュメントの変更は通常、コードの変更と同時に行います。
- セキュリティの観点が必要な Issue では、Security チームの継続的な担当者と協力し、[チーム計画の Issue](https://gitlab.com/gitlab-org/search-team/team-tasks/-/issues/17)でコミュニケーションします。
- Issue では Support Engineering チームと直接協力し、毎月のチームミーティングに担当者を招待します。
- チームメンバーは次のタスクに取り組む準備ができたら、Deliverable の Issue を優先し、マイルストーンボードから Issue を選んで自分に割り当てます。Issue のオーナーは解決策に責任を持ち、Issue を小さく反復的に進めるサブ Issue に分割できます。
- 長期間不在になる前に、まだレビュー中の項目を Engineering Manager に割り当てます。Engineering Manager は必要に応じて再割り当てします。不在のメンバーの作業をレビューする人は、残りの作業に対応できると判断すれば、依頼された変更を完了して構いません。
- 毎週バグをレビューし、優先順位を付けます。重大度は、潜在的なリスクと頻度に関するリスクマトリクスにおおむね対応し、優先度は時間の経過に伴う総合的な影響に基づきます。毎週の確認では、すべての新しいバグについて内容、優先度、重大度、マイルストーンをレビューし、優先度または重大度がないバグをレビューし、予定作業の 10% を目標として現在のマイルストーンのバグに優先順位を付け、残りを対応可能な余力、重大度、優先度、予定作業との関連性に応じてスケジュールします。

## MR のレビュー {#mr-reviews}

- MR の作成者は、初回レビューまたはメンテナーレビューを Global Search のチームメンバーが行うべきかを決め、コメントまたはレビュアーの割り当てで示します。
- ドラフトの状態は、MR がマージできる状態にないことを意味しますが、作成者はレビュアーを割り当てても構いません。レビューが緊急でなければ、パイプラインが成功してから割り当ててください。
- レビューコメントには [Conventional Comments](https://conventionalcomments.org/)を使います。
- 作成者は、完全に対応したスレッドだけを解決済みにし、それ以外はレビュアーが解決済みにします。スレッドが多い MR では、レビュアーが未解決のスレッドを再確認すると、議論が止まっていたところから再開しやすくなります。

### レビュアーとメンテナーの種類 {#reviewer-and-maintainer-types}

通常のバックエンドとフロントエンドのメンテナーロールに加えて、チームは、独自のメンテナーグループを持つ 2 つの共有コンポーネントを所有しています。どちらも `gitlab-org/gitlab` の [`.gitlab/CODEOWNERS`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS)で強制されるため、以下のパスに触れる MR は、作成者にかかわらず、そのグループの承認が必要です。

| メンテナーグループ | CODEOWNERS セクション | 対象 |
| --- | --- | --- |
| [`advanced-framework`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-framework) | `[Advanced Search Framework]`（必須）と `[Advanced Search Framework - Entity Implementations]`（任意） | `ee/lib/search/elastic/` と `ee/lib/elastic/` 配下のコアフレームワークの抽象化、バルクインデクサー、クライアント、クエリビルダーと DSL、Elastic の concern、サービスとワーカー、および `doc/development/advanced_search.md`。新しいエンティティ実装（クエリビルダー、型、参照、レコードの事前読み込み）は任意のセクションに含まれます。 |
| [`advanced-migrations`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-migrations) | `[Advanced Search Migration]`（`ee/elastic/migrate/` と `ee/elastic/docs/` では必須、spec では任意） | 高度な検索のマイグレーション。不適切なマイグレーションは、データベースのマイグレーションと同じように可用性に影響するため、任意ではなく必須です。 |

必須セクションと任意セクションの違いは重要です。コアフレームワークの抽象化への変更は、フレームワークのメンテナーの承認がなければ進められませんが、新しいエンティティ実装は、メンテナーにレビューを依頼するだけです。マイグレーショングループでレビューする前に、[高度な検索のマイグレーションレビューガイドライン](https://docs.gitlab.com/development/search/advanced_search_migration_review/)を参照してください。

## 自動化 {#automation}

各自動化のプロセスは、その実行元のリポジトリに記載されています。以下のリンクは入り口であり、プロセスの複製ではありません。

### 高度な検索のマイグレーションを廃止扱いにする {#marking-advanced-search-migrations-obsolete}

最後の必須アップグレード停止点の 1 マイルストーン前よりも古いマイグレーションは、自動的に廃止扱いになります。2 つの [GitLab Housekeeper](https://gitlab.com/gitlab-org/gitlab/-/blob/master/gems/gitlab-housekeeper/README.md)の keep が処理を行い、どちらも `gitlab-org/gitlab` に置かれています。

1. [`Keeps::MarkOldAdvancedSearchMigrationsAsObsolete`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/keeps/mark_old_advanced_search_migrations_as_obsolete.rb) — `Search::Elastic::MigrationObsolete` を prepend し、spec を非推奨マイグレーション用の共有 example に置き換え、辞書ファイルを更新し、Global Search のバックエンドエンジニアを割り当てます。
1. [`Keeps::DeleteObsoleteAdvancedSearchMigrations`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/keeps/delete_obsolete_advanced_search_migrations.rb) — 廃止扱いのマイグレーションのうち、最も新しいもの以外をすべて削除します。

廃止扱いにする keep は、[`engineering-productivity/team` のスケジュール済みパイプライン](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/pipeline_schedules)から毎月実行します。そのプロジェクトの [`.gitlab-ci.yml`](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/blob/main/.gitlab-ci.yml)で定義された `automatic-mark-search-migrations-obsolete` ジョブを使います。スケジュールは `AUTO_MARK_OBSOLETE_SEARCH_MIGRATIONS` を設定し、これがジョブと `#g_global_search_alerts` への失敗アラートの両方を制御します。削除する keep は手動で実行します。

MR の担当者には、`marked_obsolete_by_url` の確認、`.rubocop_todo/` の参照の削除、`migration_has_finished?` の後方互換性を保つ分岐の削除、削除したマイグレーションの[マイグレーション墓場](https://gitlab.com/gitlab-org/search-team/migration-graveyard)へのバックアップという手作業が残ります。これらは、[高度な検索のマイグレーションスタイルガイド](https://docs.gitlab.com/development/search/advanced_search_migration_styleguide/#cleaning-up-advanced-search-migrations)に記載されています。

## インデクサーのリリース {#indexer-releases}

両方のインデクサーは、スケジュール済みパイプラインから毎週自動的にリリースされ、そのプロセスをリポジトリ内に記載しています。

1. **Elasticsearch インデクサー**: `gitlab-org/gitlab-elasticsearch-indexer` の [`doc/process.md`](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/blob/main/doc/process.md)。`SCHEDULE_TYPE=weekly_release` を設定した毎週のスケジュールが `release_create_mr` を実行します。このジョブは `git-cliff` を使って Conventional Commits にバージョン更新の必要があるかを判断し、リリース MR を作成し、マージ時にタグを付けます。その後、`renovate-gitlab-bot` が `gitlab-org/gitlab` の `GITLAB_ELASTICSEARCH_INDEXER_VERSION` を更新する MR を作成します。そのドキュメントには、現在のメンテナーと、研修中のメンテナー向けのプロセスも記載されています。
1. **Zoekt インデクサー**: `gitlab-org/gitlab-zoekt-indexer` の [`DEPLOYMENT_PROCESS.md`](https://gitlab.com/gitlab-org/gitlab-zoekt-indexer/-/blob/main/DEPLOYMENT_PROCESS.md)。インデクサーと Zoekt ウェブサーバーの両方を扱います。タグ付けは同じ方法で自動化されていますが、リリースの反映は、CI イメージ、CNG、[`gitlab-zoekt` チャート](https://gitlab.com/gitlab-org/cloud-native/charts/gitlab-zoekt)、メインの GitLab チャートにわたる手動の一連の手順です。ここに複製する代わりに、そのファイルの手順に従ってください。

## インシデントのエスカレーション {#incident-escalation}

Elasticsearch または Zoekt の専門知識が必要な本番環境のインシデントでは、[Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/)を通じてエスカレーションします。SRE とオンコールエンジニアは、`global-search-team` Slack グループを通じてチームに連絡できます。[Global Search インシデント管理ドキュメント](https://gitlab.com/gitlab-org/search-team/training-materials/-/tree/main/2021-12-14-production-incident-management)は、インシデントの解決中に開発状況を把握するための参照資料であり、緊急時には[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/)ハンドブックに従います。

チームは小規模で、特定のドメイン知識が必要なため、人手が足りないとき、特に休暇の時期には、Elasticsearch の専門知識を持つほかのグループのチームメンバーに、オンコールのエスカレーション対応を支援してもらいます。ドメインの専門家は、チームメンバープロフィールの `domain_expertise` で識別し、SRE と Tier 2 のオンコールエンジニアが本番環境のインシデントを解決できない場合に連絡することがあります。ドメインの専門家が通常の勤務時間外に働くことは期待していません。

### ほかのグループのドメイン専門家をオンボーディングする {#onboard-a-domain-expert-from-another-group}

- チームメンバーに、チームメンバープロフィールの `domain_expertise` に `elasticsearch` を追加するよう勧めます。
- チームメンバーを `global-search-team` Slack グループに追加します。SRE とほかのオンコールエンジニアが、緊急時に私たちへ連絡するために使うグループです。
- Elasticsearch クラスターへのアクセス権を付与するアクセスリクエストを作成します。
- 現在のアーキテクチャと開発状況を扱う[説明セッション](https://youtu.be/dK-G-pLVRfE)を設定します。

### ドメイン専門家をオフボーディングする {#offboard-a-domain-expert}

- チームメンバーを `global-search-team` Slack グループから削除します。
- チームメンバーの Elasticsearch クラスターへのアクセス権を取り消します。

## 破壊的変更 {#breaking-changes}

メジャーマイルストーンが始まる前に、すべての破壊的変更の Issue をリンクしたエピックを準備します。通常どおり承認を得るために作業しますが、メジャーマイルストーンの前にマージされないよう、各 MR をドラフトのままにします。独立した MR は `master` をターゲットにできます。それ以外は、互いのブランチをターゲットにする一連の MR を使い、前の MR がマージされると、各 MR のターゲットを `master` に変更します。

破壊的変更のマイルストーンより前に作成するすべての MR は、説明に警告を記載し、ドラフトのまま保持する必要があり、マイルストーンの日付まではマージできないことを明示します。

## バグ修正のバックポート {#bugfix-backports}

スコープ付きラベル `backport::required`、`backport::skip`、`backport::complete` を使い、バグ修正のマージリクエストを毎週レビューします。

- バックポートが不要なマージリクエストには、`backport::skip` を付けます。
- 以前のリリースへのバックポートが必要なマージリクエストには、初回レビューで `backport::required` を付けます。DRI は[パッチリリースのプロセス](/handbook/engineering/releases/patch-releases/#patch-release-process)に従って修正をバックポートし、その後 `backport::complete` を付けます。

## パフォーマンステスト {#performance-testing}

Elasticsearch クラスターのパフォーマンステストに [Rally](https://esrally.readthedocs.io/en/stable/)を使うことを検討しています。ワークロードデータは Kibana を使って決定し、[Google Sheet](https://docs.google.com/spreadsheets/d/1K_MteuTEX0spu0jOiRt9BqDLZXywUhQ9NUw7PbU8odw/edit?usp=sharing)（社内向け）に保存します。

## ボードとリンク {#boards-and-links}

- [Global Search チームのマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)
- [Global Search チームのワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4440461?not[label_name][]=UX%20Paper%20Cuts&label_name[]=group%3A%3Aglobal%20search&milestone_title=Started)
- [バグレビューボード](https://gitlab.com/groups/gitlab-org/-/boards/2118530?label_name[]=type::bug&label_name[]=group%3A%3Aglobal%20search)
- [Global Search チームのエピック](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aglobal%20search)
