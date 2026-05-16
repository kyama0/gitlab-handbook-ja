---
title: Product Data Insights データモデルチートシート
description: Product Data Insights チームが使用する主なデータモデルの概要
upstream_path: /handbook/product/groups/product-analysis/data-model-cheat-sheet/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-25T08:54:23-04:00"
---

## このページの目的

このハンドブックページは、Product Data Insights チームで最もよく使われるデータモデルの概要と、それらのデータモデルについて知っておくと役立つ既知のニュアンスや注意点を、ハイレベルで提供することを目的としています。

このページの内容について共同作業する場合は、MR を提出するか (推奨)、[この Epic](https://gitlab.com/groups/gitlab-data/-/epics/771) でディスカッションを開始してください。

## 役立つ出発点

- [DBT Docs](https://dbt.gitlabdata.com/#!/overview) - このリソースには、利用可能なすべての dbt モデルに関する包括的なドキュメントが含まれています。困ったときは DBT を検索しましょう！

- [Data Guides](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/) では、GitLab 組織全体で広く有用なエンタープライズ分析対象領域について理解できます。Data チームが管理しています。

- [データパイプラインのドキュメント](/handbook/enterprise-data/platform/pipelines/) は技術的に興味のあるアナリスト向けです。このページでは、各データソースと抽出の詳細について説明しています。

- [データソースと更新スケジュールの表](/handbook/enterprise-data/platform/#data-sources) では、各データソースの標準ロード時間を確認できます。

## データモデルカテゴリ

これらのカテゴリは、データソースと対象領域でグループ化されています。

### Service Ping

[Service Ping](https://docs.gitlab.com/development/internal_analytics/service_ping/) は、毎週使用状況データの JSON ペイロードを生成して GitLab に送信する、GitLab のデータ収集メカニズムです。これにより、製品、カスタマーサクセス、サポート、セールスの各チームに、GitLab がどのように使用されているかを理解するための集計データが提供されます。Service Ping は、Self-Managed プロダクトの動作を理解するための唯一のデータソースです。Service Ping の方法論では、インストール単位でメトリクスを集計することにより、Self-Managed ユーザーのプライバシーを保護できます。

#### FAQ

> Service Ping データを使用して名前空間レベルやユーザーレベルでレポートすることは可能ですか？

- いいえ！ [個人ユーザーのプライバシーへの取り組み](/handbook/product/product-processes/analytics-instrumentation-guide/service-usage-data-commitment/)の一環として、GitLab はインストール単位で集計された使用状況メトリクスのみを収集します。

> インスタンスとインストールの違いは何ですか？

- インストールとは、instance_id と host_id の固有の組み合わせです。[詳しくはこちら](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/self-managed/)。Self-Managed の分析とレポーティングは、インストール単位で行います。

#### ドキュメント

<details markdown="1"><summary>クリックして展開</summary>

- [Service Ping 概要](https://docs.gitlab.com/development/internal_analytics/service_ping/)

- [Service Ping メトリクス辞書](https://metrics.gitlab.com/)

- [Self-Managed 分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/self-managed/)

- [xMAU 分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/xmau-analysis/)

</details>

#### よく使われるデータモデル

<details markdown="1"><summary>クリックして展開</summary>

| スキーマ | テーブル名 | データ粒度 | 説明 | 注記 |
| --- | --- | --- | --- | --- |
| common_mart | [mart_ping_instance](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_ping_instance) | `dim_ping_instance_id` | インストール、サブスクリプション、アカウント、プロダクト情報の追加属性を伴う Ping レベルのデータ。 | このデータにはメトリクスは含まれません。 |
| common_mart | [mart_ping_instance_metric](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_ping_instance_metric)| `dim_ping_instance_id`, `metrics_path`  | インストール、サブスクリプション、アカウント、プロダクト情報の追加属性を伴う Ping レベルおよびメトリクスレベルのデータ。 | これは、特定の期間でフィルタリングされた他のテーブルの UNION です: `mart_ping_instance_metric_28_day` `mart_ping_instance_metric_7_day` `mart_ping_instance_metric_all_time` |
| common | [fct_ping_instance_metric_none_null](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_ping_instance_metric_none_null) | `dim_ping_instance_id`, `metrics_path` | `none` および `null` タイムフレームのメトリクスに関する Ping レベルおよびメトリクスレベルのデータ。 | |
| common_mart_product | [rpt_ping_latest_subscriptions_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_latest_subscriptions_monthly) | `ping_created_date_month`, `latest_subscription_id`, `dim_installation_id` | シート数を含む、月別のアクティブな Self-Managed サブスクリプション。サブスクリプションが Service Ping を送信している場合、インストールレベルのデータが提供されます。| シート数を含み、Service Ping オプトイン率の計算に使用できます |
| common_mart_product | [rpt_ping_metric_totals_w_estimates_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_totals_w_estimates_monthly) | `ping_created_date_month`, `metrics_path`, `ping_edition`, `estimation_grain`, `ping_edition_product_tier`, `ping_delivery_type` | このモデルは xMAU/PI レポーティングに使用され、[td_xmau] スニペットの Service Ping データのソースです。 | |

</details>

#### 知っておくと役立つこと

<details markdown="1"><summary>クリックして展開</summary>

- [収集されるデータのカテゴリ: サブスクリプション、運用、オプション](/handbook/legal/privacy/customer-product-usage-information/#what-are-the-data-collection-services-that-constitute-product-usage-data)
  - [運用メトリクス](https://metrics.gitlab.com/?q=operational)
  - [オプションメトリクス](https://metrics.gitlab.com/?q=optional)

- インストールには Service Ping を生成する曜日がランダムに割り当てられますが、その割り当ては時間が経っても永続します。たとえば、あるインストールに火曜日が割り当てられた場合、常に火曜日に Ping を生成します。週全体でペイロード負荷を均等に分散させるため、異なる曜日に Service Ping を生成・ロードしています。

- [メトリクス辞書](https://metrics.gitlab.com/)の `milestone` フィールドを使用して、メトリクスがインストルメントされたバージョンを特定することもできますが、いくつかの制限があります。第一に、多くのメトリクスは `< 13.9` とだけラベル付けされており、古いメトリクスについては詳細が不足しています。第二に、メトリクスは CE と EE で異なるバージョンで導入される可能性があり、`milestone` が片方のエディション/ディストリビューションでは誤っている可能性があります。これらの理由から、メトリクスがインストルメントされた時期を調べる場合は [common_mart_product.rpt_ping_metric_first_last_versions](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_first_last_versions) の使用を推奨します。

</details>

### GitLab.com

GitLab.com (SaaS) は、Service Ping フレームワーク内で単一の Ping をレポートする単一のインストールです。プロダクトティア、プランタイプ、名前空間、ユーザー別にさらに粒度の細かいデータにアクセスするには、[GitLab.com Postgres データベース](/handbook/enterprise-data/organization/programs/data-for-product-managers/#gitlabcom-postgres-database)を使用します。このデータソースは、[バックエンドテーブル](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs)を作成するすべての Service Ping イベントをレプリケートします。

#### FAQ

> なぜすべてのステージとグループのすべてのイベントが GitLab.com データに表示されないのですか？

- これは、gitlab.com db Postgres レプリカを使用した Service Ping カウンタのレプリケーションの制限によるものです

> GitLab.com データのユーザーレベルの動作を Snowplow イベントに関連付けることは可能ですか？

- いいえ。Snowplow のユーザー識別子は匿名化されていますが、GitLab.com のユーザー識別子は匿名化されていません。ただし、名前空間 (グループ/プロジェクト) レベルで Snowplow と GitLab.com データを結合することは可能です。

> GitLab.com データにいくつかの信頼性の問題があると聞きました。停止や既知の問題について最新情報を入手するにはどうすればよいですか？

- [この Issue](https://gitlab.com/gitlab-data/analytics/-/issues/12921) に GitLab.com レプリカで判明している問題がすべて文書化されています。

#### ドキュメント

<details markdown="1"><summary>クリックして展開</summary>

- [GitLab.com Postgres レプリカデータに関する Product Manager 向けの Data Guide ドキュメント](/handbook/enterprise-data/organization/programs/data-for-product-managers/#gitlabcom-postgres-database)

- [DB docs](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs) は、データベースにレプリケートされる Service Ping メトリクスを文書化しています。各テーブルの .yml ファイルをクリックすると、テーブル固有の説明にアクセスできます。

- [prep_event モデルの DBT ドキュメント](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.prep_event)には、イベントに適用されるフィルタリングを理解するためにコンパイルされた SQL ロジックが含まれています。

- [xMAU 分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/xmau-analysis/)

- 本番で利用可能な各 Postgres テーブルの作成 SQL ロジックを含む[スキーマファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/structure.sql)。

</details>

#### よく使われるデータモデル

<details markdown="1"><summary>クリックして展開</summary>

| スキーマ | テーブル名 | データ粒度 | 説明 | 注記 |
| --- | --- | --- | --- | --- |
| common_mart | [mart_event_user_daily](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_event_user_daily) | `event_date`, `event_name`, `dim_user_id`, `dim_ultimate_parent_namespace_id` | 名前空間とプランに関する属性を含む、日次のユーザー、名前空間、イベントレベルのデータ |  |
| common_mart | [mart_event_namespace_daily](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_event_namespace_daily) | `event_date`, `event_name`, `dim_ultimate_parent_namespace_id` | 名前空間とプランに関する属性を含む、日次の名前空間およびイベントレベルのデータ |  |
| common_mart_product | [rpt_event_xmau_metric_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_event_xmau_metric_monthly) | `event_calendar_month`, `user_group`, `section_name`, `stage_name`, `group_name`  | 月次のユーザーグループおよび xMAU メトリクスレベルのデータ | これは有料 SaaS xMAU のレポーティングに使用されるモデルで、`[td_xmau]` スニペットで使用されます |
| common_mart_product | [rpt_event_plan_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_event_plan_monthly) | `event_calendar_month`, `plan_id_at_event_month`, `event_name` | 月次のプランおよびイベントレベルのデータ |  |

</details>

#### 知っておくと役立つこと

<details markdown="1"><summary>クリックして展開</summary>

- GitLab.com データソースは、GitLab の SaaS 提供内でユーザーが取れるすべての行動を網羅しているわけではありません。

</details>

### Snowplow

Snowplow は、GitLab で GitLab.com のフロントエンドイベント (ページビュー、CTA クリック、リンククリックなど) を追跡するために使用されるオープンソースのイベント追跡ツールです。このデータソースは、ユーザーのプライバシーを保護するために、識別可能なユーザーデータを収集しません。Snowplow データソースは、GitLab で実験を実装・追跡する方法です。

#### FAQ

> なぜ私のチームが実装したメトリクスが[メトリクス辞書](https://metrics.gitlab.com/snowplow)に表示されないのですか？

- [メトリクス辞書](https://metrics.gitlab.com/snowplow)に表示されるためには、すべてのイベントに [.yml ファイル](https://gitlab.com/gitlab-org/gitlab/-/tree/master/config/events)が必要です。これは自動では行われず、Snowplow トラッキングを実装したエンジニアが作成する必要があります。

> 一部の Snowplow イベントで `gsc_namespace_id` の値が null になるのはなぜですか？

- エンジニアは新しいイベントを実装する際に `gsc_namespace_id` のトラッキングを有効にする必要があります。`gsc_namespace_id` のトラッキングがすでに有効になっていてもまだ null が発生する場合、イベントは ToDos ページのように特定の名前空間に固有でない GitLab.com 内の場所でトリガーされている可能性があります。

> 本番環境でトリガーされたイベントを識別する正しいロジックは何ですか？

- 次のロジックを適用してください: `WHERE app_id IN ('gitlab','gitlab_customers')`

> 構造化された Snowplow イベントペイロードの `event_category` の値はどう解釈すればよいですか？

- `event_category` の値は[このコード化されたロジック](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/helpers/application_helper.rb?ref_type=heads#L143-143)に従って自動的に設定されます。ただし、イベントをインストルメントするエンジニアがこのロジックをオーバーライドする場合は除き、これはバックエンドイベントでよく発生します。これらの値の意味を検索する良い場所は、[この EE controllers リポジトリ](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/app/controllers)でキーワード検索することです。EE 以外の controllers も検索可能で、[こちら](https://gitlab.com/gitlab-org/gitlab/-/tree/master/app/controllers)にあります。それ以外の場合は、関心のあるイベントをインストルメントしたチームのエンジニアリング Slack チャンネルに連絡し、そこで `event_category` の値の正しい解釈について検証を依頼できます。

#### ドキュメント

<details markdown="1"><summary>クリックして展開</summary>

- [Product Manager 向け Snowplow ガイド](/handbook/enterprise-data/organization/programs/data-for-product-managers/#snowplow)

- [Snowplow 技術概要](/handbook/enterprise-data/platform/snowplow/)

- [標準フィールドに関する Snowplow ドキュメント](https://docs.snowplow.io/docs/fundamentals/canonical-event/)

- [PDI: Snowplow 新モデルオンボーディング](https://docs.google.com/presentation/d/1L6g2XCHWhRRXAbJ5txBavdxPW0Jja1E43QzxbtYvQK0/edit?usp=sharing)

</details>

#### よく使われるデータモデル

<details markdown="1"><summary>クリックして展開</summary>

| スキーマ | テーブル名 | データ粒度 | 説明 | 注記 |
| --- | --- | --- | --- | --- |
| common_mart | [mart_behavior_structured_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_behavior_structured_event) | `behavior_structured_event_pk` | 構造化イベントの分析用に強化された Snowplow テーブル。| 分析のユースケースに応じて、クエリを妥当な時間枠で実行できるよう `behavior_date` でフィルタリングすると役立つ場合があります。|
| common | [fct_behavior_structured_event_without_assignment](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_structured_event_without_assignment) | `behavior_structured_event_pk` | 割り当てイベントを除く Snowplow 構造化イベントのデータを含む派生ファクトテーブル。割り当てイベントとは、ユーザーが実験に登録されたことを示すイベントです。 | `fct_behavior_structured_event_without_assignment_190` および `fct_behavior_structured_event_without_assignment_400` も利用可能です。 |
| common | [fct_behavior_structured_event_experiment](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_structured_event_experiment) | `behavior_structured_event_pk` | 実験関連の構造化イベントの派生ファクトテーブル。 |  |
| common | [fct_behavior_website_page_view](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_website_page_view) | `fct_behavior_website_page_view_sk` | ページビューの定量データを含むファクトテーブル。ページビューは Snowplow イベントのサブセットで、JavaScript トラッカーによって発火されます。 |  |
| common | [fct_behavior_unstructured_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_unstructured_event) | `fct_behavior_unstructured_sk` | 非構造化イベントの派生ファクトテーブル。 |  |
| common | [dim_behavior_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_behavior_event) | `dim_behavior_event_sk` | Snowplow からの個別のイベントタイプを含むディメンションモデル。 |  |

</details>

#### 知っておくと役立つこと

<details markdown="1"><summary>クリックして展開</summary>

- 製品の特定のエリアで Snowplow イベントが実装されているか気になる場合は、[Snowplow Inspector](https://chrome.google.com/webstore/detail/snowplow-inspector/maplkdomeamdlngconidoefjpogkmljm?hl=en) が[メトリクス辞書](https://metrics.gitlab.com/) (網羅的ではない) の補完リソースとして役立ちます。Snowplow Inspector はサーバーサイドイベントを表示しません。

- Snowplow は Self-Managed インスタンスでは使用しておらず、GitLab.com でのみ使用しています

- 開発者や PM が標準的な実装について気になる場合は、イベントスキーマが文書化されています。

</details>

### 名前空間、ユーザー、メンバーシップ

このデータモデルのカテゴリには、GitLab.com (SaaS) の[名前空間](https://docs.gitlab.com/user/namespace/) (プロジェクトとグループの両方を含む)、その企業属性、個々のメンバーが含まれます。

#### FAQ

> 名前空間とは何ですか？

- 基本から！ GitLab には 2 つのカテゴリの名前空間があります。グループとプロジェクトです。一般的に、名前空間は関連するプロジェクトを整理する場所を提供します。詳細は[こちら](https://docs.gitlab.com/user/namespace/)。名前空間は GitLab SaaS と Self-Managed プロダクト内に存在しますが、Self-Managed ユーザーのプライバシーを保護するため、識別可能な名前空間データは SaaS でのみ収集しています。

> どのようなタイプの名前空間を通常分析しますか？

- 通常、Ultimate parent namespace レベルで分析を行います。

> メンバーシップ履歴データにアクセスできますか？

- いいえ。GitLab のメンバーシップ履歴は、いかなるデータモデルにも記録されていません。

#### ドキュメント

<details markdown="1"><summary>クリックして展開</summary>

- [名前空間分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/namespace/) には、名前空間分析と SQL コード例の包括的なドキュメントが含まれています。

- [このナレッジベースページ](https://docs.gitlab.com/topics/set_up_organization/)は、名前空間、メンバー、グループの概要を説明しています。

- [メンバー固有のナレッジベースページ](https://docs.gitlab.com/user/project/members/)では、直接および間接のメンバーシップ、共有グループメンバーシップについて説明しています。

</details>

#### よく使われるデータモデル

<details markdown="1"><summary>クリックして展開</summary>

| スキーマ | テーブル名 | データ粒度 | 説明 | 注記 |
| --- | --- | --- | --- | --- |
| common | [dim_namespace](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_namespace) | `dim_namespace_id` | プランを含むすべての GitLab.com 名前空間と名前空間属性を含むディメンションテーブル。 |  |
| common | [dim_namespace_hist](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_namespace_hist) | `namespace_snapshot_id`, `dim_namespace_id`, `valid_from`, `valid_to` | `common.dim_namespace` モデルの履歴スナップショット。 |  |
| common | [dim_user](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_user) | `dim_user_id` | すべての GitLab.com ユーザーを含むディメンションテーブル。 |  |
| common | [dim_user_hist](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_user_hist) | `dim_user_snapshot_hist_id`, `dim_user_id`, `valid_from`, `valid_to` | `common.dim_user` モデルの履歴スナップショット。 |  |
| legacy | [gitlab_dotcom_memberships](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.gitlab_dotcom_memberships) | `membership_source_id`, `user_id` | このモデルは、ユーザーが名前空間への (完全または部分的な) アクセス権を持つ、すなわち「メンバーシップ」を表す他のモデルをすべて UNION したものです。 | 直接および間接のメンバーシップタイプの両方を含みます。 |
| legacy | [gitlab_dotcom_members](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.gitlab_dotcom_members) | `member_id`, `user_id` | GitLab.com メンバーのベースモデル。 | 直接のメンバーシップリンクのみを含みます。招待関連のフィールドに使用されます。 |

</details>

#### 知っておくと役立つこと

<details markdown="1"><summary>クリックして展開</summary>

- `common` モデル内で見つかる `member_count` フィールドは正確ではないため、使用しないでください。名前空間あたりのメンバー数を測定する分析には、`legacy.gitlab_dotcom_memberships` を使用してください。[こちらが Issue](https://gitlab.com/gitlab-data/analytics/-/issues/12566)で、これらの精度の問題を修正する作業を表しています。

</details>

### Duo

GitLab Duo は、Code Suggestions、Chat、その他の機能を含む AI 搭載機能のスイートです。Duo の使用状況に関するデータは、AI Gateway イベント、Snowplow トラッキング、Service Ping メトリクスを含む複数のソースから取得されます。2024年8月以降、AI Gateway がすべてのデプロイメントタイプの使用状況メトリクスのソースオブトゥルースになっています。最も包括的なドキュメントは [Duo 分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/duo-analysis/) を参照してください。

#### FAQ

> いつ Duo 機能全体で重複排除されたユーザー総数をレポートできますか？

- すべての機能とデプロイメントタイプにわたる完全な重複排除済み総数は、2024年8月3日以降からのみ利用可能です。過去データの可用性は、機能とデプロイメントタイプによって異なります。

> Duo の使用状況はどのように顧客に帰属されますか？

- 使用状況は、イベントが発生した方法 (どの名前空間/インストールがアクセスを有効にしたか) に基づいて帰属され、イベントが発生した場所には基づきません。単一のイベントは複数の顧客によって有効化される可能性があります。

#### ドキュメント

<details markdown="1"><summary>クリックして展開</summary>

- [Duo 分析の Data Guide](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/duo-analysis/)

</details>

#### よく使われるデータモデル

<details markdown="1"><summary>クリックして展開</summary>

| スキーマ | テーブル名 | データ粒度 | 説明 | 注記 |
| --- | --- | --- | --- | --- |
| workspace_product | [wk_mart_behavior_structured_event_ai_gateway_flattened](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_mart_behavior_structured_event_ai_gateway_flattened) | 名前空間/インストールあたりのイベント | 顧客帰属を伴う AI Gateway イベント | フラット化モデル - DISTINCT カウントを使用 |
| workspace_product | [wk_rpt_ai_gateway_events_flattened_with_features](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_rpt_ai_gateway_events_flattened_with_features) | 名前空間/インストールあたりのイベント | 各リクエストに関連する機能と結合された、顧客帰属を伴う AI Gateway イベント。 | フラット化モデル - DISTINCT カウントを使用 |
| common_mart_product | [rpt_behavior_code_suggestion_outcome](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_behavior_code_suggestion_outcome) | サジェスチョン | IDE 拡張からの Code Suggestions メトリクス | 受け入れ率などの品質メトリクス |
| restricted_safe_workspace_product | [rpt_duo_license_utilization_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_duo_license_utilization_monthly) | サブスクリプション/月/アドオン | ライセンス使用率メトリクス | 当月を除外 |
| workspace_customer_success | [wk_license_billable_users](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_license_billable_users) | インストール | Self-managed のシート割り当て | v17.5+ から利用可能 |

</details>

#### 知っておくと役立つこと

<details markdown="1"><summary>クリックして展開</summary>

- [wk_mart_behavior_structured_event_ai_gateway_flattened](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_mart_behavior_structured_event_ai_gateway_flattened) と [wk_rpt_ai_gateway_events_flattened_with_features](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.wk_rpt_ai_gateway_events_flattened_with_features) の AI Gateway イベントは、2024年8月以降の使用状況メトリクスの SSOT であり、ユーザーによってブロックされることはありません
- 顧客の帰属はさまざまな識別子に依存します:
  - GitLab.com: `feature_enabled_by_namespace_ids`
  - Self-Managed および Dedicated: `instance_id` + `host_name`
- AI Gateway レポーティングの進行中の改善については、こちらをフォロー: https://gitlab.com/gitlab-org/gitlab/-/issues/502457

</details>
