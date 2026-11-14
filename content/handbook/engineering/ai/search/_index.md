---
title: Global Search グループ
description: "Global Search チームは、GitLab.com および自己管理インスタンスにワールドクラスの検索機能を提供することに注力しています。"
upstream_path: /handbook/engineering/ai/search/
upstream_sha: "8fce82673398dbfad74c667e7b35eb75d101d55d"
lastmod: "2026-11-13T17:44:40+05:30"
translated_at: "2026-11-14T08:53:32.358803+00:00"
translator: claude
stale: false
---

## 私たちの取り組み {#what-we-do}

Global Search グループは、GitLab 全体の検索を構築・運用します。コード、Issue、マージリクエスト、コメント、コミット、マイルストーン、プロジェクト、ユーザー、Wiki を対象に、グローバル、グループ、プロジェクト単位の検索を提供します。GitLab.com および Self-Managed インスタンスで、その基盤となるシステム（Advanced Search 用の Elasticsearch、完全一致コード検索用の GitLab Zoekt、基本検索が使用する PostgreSQL と Gitaly の処理経路）と、それらに必要な取り込み、インデックス作成、管理ツールを所有します。同じ情報取得の仕組みは AI 機能にコンテキストも提供します。今後の方向性については、[Global Search](https://about.gitlab.com/direction/global-search/)と [Code Search](https://about.gitlab.com/direction/global-search/code-search/)のディレクションページを参照してください。

このチームは、特定の機能向けのカスタム検索（たとえば Issue の「フィルターバー」など）は所有しません。これは [Issue Tracking](https://about.gitlab.com/direction/plan/project_management/team_planning/) カテゴリーの一部であり、[Project Management グループ](/handbook/product/categories/#project-management-group)が所有しています。

## チームメンバー {#team-members}

以下のチームメンバーは、Global Search グループの常設メンバーです。John Mason がこのグループの Engineering Manager 代行です。

<!--
This list is maintained by hand. `group-by-slugs` matches each argument exactly against the
`slug` field in team.yml, and a slug that no longer matches is skipped silently -- the page
builds green with that person simply missing. Re-check the slugs whenever membership changes.

Slugs come from the file names under data/team_members/person in
https://gitlab.com/gitlab-com/www-gitlab-com

The same roster is also listed by hand on
content/handbook/engineering/data-engineering/analytics/platform-insights.md -- update both.
-->

{{< group-by-slugs john-mason rkumar555 siddharthdungarwal >}}

## 現在取り組んでいること {#what-were-working-on}

<!--
Updated with each weekly recap, by whoever publishes that recap. If a theme below
is no longer in the latest recap, replace it rather than letting it accumulate.

Do not date this summary by hand. The page footer already renders "Last modified
<date>" from git, so a hard-coded week only adds a second freshness claim that
goes stale on its own. Link the recaps and let the footer carry the date.
-->

チームの最新の週次振り返りの要約で、振り返りの公開ごとに更新します。各テーマに関連する個々のマージリクエストを含め、詳細は振り返り自体に記載しています。

- **Zoekt のインデックスとタスクの管理を Rails モノリスから移します。** 完全一致コード検索では現在、インデックス作成の方針を Rails で決定し、Go で実行しています。[順序立てた切り出し](https://gitlab.com/groups/gitlab-org/-/epics/23570)により、インデックスの計画、タスクのスケジュール、ノードの選択を段階的に Zoekt サービスへ移します。各段階はネームスペースごとに切り替えられ、Rails にはフォールバック用のプランナーを恒久的に残すため、移行中は両者を並行して稼働できます。
- **検索を測定可能にします。** 検索レポートの多くは、シグナルが欠けているというよりも、誤ったシグナルに依存していました。文書化されたレイテンシしきい値が実際に出力される値と異なる、エンドポイントが異なる 2 つの目標に対して二重に評価される、セマンティック検索のエンドポイントにサービスレベル指標がまったくない、といった問題です。これらの修正は、チームが[次に取り組むことを提案している](https://gitlab.com/gitlab-org/search-team/artifacts/-/blob/main/specs/search-relevancy-tracking/SPEC.md)検索品質の測定の前提条件です。
- **グループ概要のサブグループとプロジェクトの一覧を Elasticsearch に移します。** これはグループとプロジェクトの名前を解決するドロップダウンとオートコンプリート、すなわちグループの*検索機能*であり、Advanced Search が以前から提供しているグループ範囲のコンテンツ検索とは別のものです。GitLab.com で段階的に展開しており、大規模なグループでは「99+」ではなく実際の結果件数が表示されます。
- **検索 API の対象範囲を広げ、堅牢性を高めます。** Elasticsearch の 10,000 ドキュメントという結果ウィンドウを超えるほど後方の結果ページは、以前はサーバーエラーで失敗していましたが、現在は空のページを返します。また、すでにインデックス化されていたもののクエリできなかったマージリクエストのフィルターを API で公開しました。REST のコード検索結果を GraphQL と同じ構造にする取り組みは進行中です。

振り返りは毎週公開します。

- Global Search の週次振り返り（社内向け） [gitlab-org/search-team/recaps](https://gitlab.com/gitlab-org/search-team/recaps/-/tree/main/recaps/weekly)

## 私たちが運用するもの {#what-we-run}

サービスのオーナーシップは、アラートとエラーバジェットの通知先を決めるための機械可読な唯一の情報源である [runbooks のサービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)に定義されています。両サービスのアラートは `#g_global_search_alerts` に通知され、週次エラーバジェットレポートは `#g_global_search` に送信されます。Global Search Engineering Manager は、チームが所有する両サービスの DRI を務め、日常の運用作業をチームに委任します。

| システム | サービスカタログのエントリ | SRE ガイド | アラート |
| --- | --- | --- | --- |
| Elasticsearch（Advanced Search） | `search`、オーナー `global_search` | [runbooks.gitlab.com/search](https://runbooks.gitlab.com/search/)、[runbooks.gitlab.com/elastic](https://runbooks.gitlab.com/elastic/) | [`Service::Elasticsearch`](https://alerts.gitlab.net/#/alerts?filter=%7Btype%3D%22search%22%2C%20tier%3D%22inf%22%7D) |
| GitLab Zoekt（完全一致コード検索） | `zoekt`、オーナー `global_search` | [runbooks.gitlab.com/zoekt](https://runbooks.gitlab.com/zoekt/) | [`Service::Zoekt`](https://alerts.gitlab.net/#/alerts?filter=%7Btype%3D%22zoekt%22%2C%20tier%3D%22inf%22%7D) |

Advanced Search クラスターの設定は、[`elastic-cloud`](https://gitlab.com/gitlab-com/gl-infra/observability/elastic-cloud)リポジトリでコードとして管理され、マージ時に Atlantis によって適用されます。Kibana UI で行った変更は、次回の Terraform apply で元に戻ります。

**ActiveContext** 抽象化レイヤーと、セマンティックコード検索の基盤となるベクターストアは、Global Search ではなく [AI Core Infra の Semantic Code Search チーム](/handbook/engineering/ai/ai-core-infra/semantic-code-search/)が所有しています。ActiveContext がバックエンドのストアとして利用する可能性のある Elasticsearch クラスターは、引き続き Global Search が所有するため、インシデントによっては両チームの対応が必要になります。

### インシデントのエスカレーション {#incident-escalation}

- Elasticsearch または Zoekt の専門知識が必要な本番環境のインシデントは、[Tier 2 On-Call Program](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/)を通じてエスカレーションしてください。SRE とオンコールエンジニアは、`global-search-team` Slack グループを通じてチームに連絡します。
- [Global Search インシデント管理ドキュメント](https://gitlab.com/gitlab-org/search-team/training-materials/-/tree/main/2021-12-14-production-incident-management)は、インシデント時に開発状況を把握するための参考資料です。
- チームが小規模なため、人員不足時には他のグループの Elasticsearch ドメインエキスパートに協力してもらい、エスカレーションに対応します。`domain_expertise`、Slack グループ、クラスターへのアクセスなどのオンボーディングとオフボーディングの手順は、[私たちの働き方](/handbook/engineering/ai/search/how-we-work/#incident-escalation)に記載しています。

## ステーブルカウンターパート {#stable-counterparts}

以下の他の機能チームのメンバーは、私たちのステーブルカウンターパートです。

| **名前**                                                 | **ロール** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Ashraf Khamis](/handbook/company/team#ashrafkhamis)     | [Senior Technical Writer](/job-description-library/product/technical-writer/) |
| [Cleveland Bledsoe Jr](/handbook/company/team#cleveland) | [Senior Support Engineer](/job-description-library/engineering/support-engineer/) |
| [Brenda Nyaringita](/handbook/company/team#bnyaringita)  | [Support Engineer(EMEA)](/job-description-library/engineering/support-engineer/) |

## 私たちとの協働 {#working-with-us}

私たちに知らせたいことがある場合は、関連プロジェクトで `~"group::global search"` ラベルを付けて Issue を作成してください。緊急の Issue は、上の[チームメンバー](#team-members)に記載されている Product Manager または Engineering Manager に連絡してください。私たちは一般的な[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/)と[エンジニアリングワークフロー](/handbook/engineering/workflow/)に従います。作業のスケジュール、レビュー、自動化、インデクサーのリリース、インシデントのエスカレーションといった私たち独自のプロセスは、[私たちの働き方](/handbook/engineering/ai/search/how-we-work/)に記載しています。

- [Global Search チームのマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)
- [Global Search チームのエピック](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aglobal%20search)
- [Global Search ロードマップ](https://gitlab.com/groups/gitlab-org/-/roadmap?state=all&sort=start_date_asc&layout=MONTHS&timeframe_range_type=CURRENT_YEAR&label_name%5B%5D=group%3A%3Aglobal+search&label_name%5B%5D=Roadmap&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL)
- Global Search チームの Slack チャンネル（社内向け） [#g_global_search](https://gitlab.slack.com/app_redirect?channel=g_global_search)
- 本番環境のインシデントは、上の[インシデントのエスカレーション](#incident-escalation)を参照してください。

## 参考資料 {#reference}

- Advanced Search が対応するスコープと、各スコープが利用できる環境は、[Advanced Search: 利用可能なスコープ](https://docs.gitlab.com/user/search/advanced_search/#available-scopes)に記載されています。
- [GitLab Advanced Search 開発ガイドライン](https://docs.gitlab.com/ee/development/advanced_search.html)
- [`advanced-migrations`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-migrations)メンテナーグループでレビューする場合は、[Advanced Search マイグレーションレビューガイドライン](https://docs.gitlab.com/development/search/advanced_search_migration_review/)を参照してください。フレームワークの変更は [`advanced-framework`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-framework)が所有し、いずれも [`.gitlab/CODEOWNERS`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS)によって適用されます。
- [Zoekt 設計ドキュメント](/handbook/engineering/architecture/design-documents/code_search_with_zoekt/)
- [Semantic Code Search](/handbook/engineering/ai/ai-core-infra/semantic-code-search/) — AI Core Infra が所有する ActiveContext フレームワークとコード向け RAG
- 関連ページ: [私たちの働き方](/handbook/engineering/ai/search/how-we-work/)、[Jobs to be Done](/handbook/engineering/ai/search/jtbd/)、[Advanced Search のロールアウトタイムライン](/handbook/engineering/ai/search/es-rollout-timeline/)

### 検索 Issue の重大度ラベル（`~advanced search`、`~global search`） {#severity-labels-for-search-issues-advanced-search-global-search}

全社の [Issue トリアージ](/handbook/product-development/how-we-work/issue-triage/)ページが、Global Search の重大度の判断先としてこのセクションを参照しているため、このページに残しています。

| 操作の種類 | `~severity::1` - ブロッカー | `~severity::2` - クリティカル | `~severity::3` - 重大 | `~severity::4` - 低 |
| ------------------|--------------------------|---------------------------|-------------------------|----------------------|
| グローバルなレコードの取得 | 10 秒超からタイムアウトまで | 7 〜 10 秒 | 4 〜 7 秒 | 2 〜 4 秒 |
| 挿入したレコードが検索可能になるまでの時間 | 15 分超 | 15 〜 10 分 | 10 〜 5 分 | 3 〜 5 分|

- グローバルなレコードの取得: GitLab.com のグローバルスコープの検索でレコードを取得するまでの時間です。レコードには、プロジェクト、ユーザー、グループなどのエンティティが含まれます。
- 挿入したレコードが検索可能になるまでの時間: 新しいレコードを追加してから、そのレコードを検索で取得できるようになるまでの経過時間です。このプロセスは、[Go インデクサー](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)、[Sidekiq キュー](https://docs.gitlab.com/ee/development/advanced_search.html#how-does-it-work)、Elasticsearch データベースなど、多くの基盤技術に依存します。
