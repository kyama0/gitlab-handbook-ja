---
title: "エンジニアリングのエラーバジェット"
description: "エラーバジェットは、1 四半期内にサービスの信頼性をどこまで低下させてもよいかを定める、明確で客観的な指標を提供します。"
translator: claude
upstream_path: "/handbook/engineering/error-budgets/"
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-06T14:28:38+01:00"
translated_at: "2026-11-07T00:30:58.726577+00:00"
stale: false
---

ビジネスに不可欠なワークロードに対応するエンタープライズグレードのプラットフォームとして [GitLab SaaS を強化する](https://about.gitlab.com/direction/core_platform/dotcom/)という[私たちの戦略](https://about.gitlab.com/direction/#3-year-strategy)の一環として、GitLab.com には具体的な[可用性](https://internal.gitlab.com/handbook/company/performance-indicators/product/saas-platforms-section/#gitlabcom-availability-slo)と[パフォーマンス](https://internal.gitlab.com/handbook/company/performance-indicators/product/saas-platforms-section/)の目標があります（社内ハンドブック、GitLab チームメンバーのみ）。

これらの目標は、ユーザーにプラットフォームの信頼性を示します。

さらに、[GitLab.com のサービスレベル可用性](/handbook/engineering/monitoring/#gitlabcom-service-availability)は、プラットフォームを利用するお客様との契約の一部でもあります。契約で具体的な目標数値を定める場合があり、その合意を守らないと財務上の負担や評判への悪影響が生じる可能性があります。

## エラーバジェットとは何ですか？ {#what-are-error-budgets}

Google の SRE ブックは全般的に推奨される読み物です。[「エラーバジェットの動機」](https://landing.google.com/sre/sre-book/chapters/embracing-risk/#id-na2u1S2SKi1)セクションには、次のように記載されています。

> エラーバジェットは、1 四半期内にサービスの信頼性をどこまで低下させてもよいかを定める、明確で客観的な指標を提供します。この指標は、どの程度のリスクを許容するかを決める際に、SRE と製品開発者の間の交渉から政治的な駆け引きを排除します。

これも私たちが目指す目標です。同時に、同じ成熟度に到達するには、私たち固有の状況、成熟度、追加の要件を考慮する必要があることも認識しています。私たちの**初期のアプローチ**では、エラーバジェットの SLO を、可用性に関する既存のアプローチに直接結びつけます。

今後のエラーバジェットのイテレーションでは、リスク許容度と機能開発の速度のバランスを取るうえでの Product Manager の重要性をさらに高めていきます。上記の開発者と SRE の間の明確な合意は、各サービスまたは製品領域に適切な測定基準と目標を設定することで実現します。最終的には、新機能への取り組みの重要性と、ユーザーが継続的にサービスに抱く期待のバランスを取ります。

## エラーバジェットの構成要素は何ですか？ {#what-are-the-components-of-error-budgets}

エラーバジェットは、まず SLO（サービスレベル目標）の確立を前提とします。SLO は、目標、SLI（サービスレベル指標）、期間で構成されます。

- **目標**：望ましい成功の水準をパーセンテージで示したもの
- **SLI**：失敗したイベントの数を判別するために使用する評価基準
- **期間**：SLI で直近の状況を重視するための期間

これらの要素の例を示します。

- **目標**：99.95%
- **SLI**：5 分間の API リクエストの 95 パーセンタイルのレイテンシが < 100ms
- **期間**：過去 28 日間

すべてを合わせると、上記の SLO の例は次のようになります。***過去 28 日間において、5 分間の API リクエストの 95 パーセンタイルのレイテンシの 99.95% が < 100ms***

エラーバジェットは 1 - SLO の目標であり、この場合は (1 - .9995 = .0005) です。28 日間の期間を使うと、**エラーの「バジェット」は 20.16 分です** (.0005 *(28* 24 * 60))

上記の例では SLI としてレイテンシの測定を示していますが、ほかの測定値（エラー率など）も SLI の要素として有効です。

GitLab の現在のエラーバジェットの実装では、上記の SLO とエラーバジェットの仕組みの一部のみを使用していますが、今後さらに高度化する予定です。SLO とエラーバジェットの運用は、サービスの重要性と、それに依存するほかのサービスやコンポーネントの耐障害性に基づいて、目標と SLI の***両方***を適切に変えるように進化することを想定しています。

## どの種類のエラーが含まれますか？ {#which-types-of-errors-are-included}

ステータスコード `500` のエラーを返す Web リクエストをカウントします。Sidekiq では、未処理の例外によって失敗したジョブをカウントします。

グループに[カスタム SLI](https://docs.gitlab.com/ee/development/application_slis/)がある場合、または私たちの[メトリクスカタログ](https://gitlab.com/gitlab-com/runbooks/-/tree/master/metrics-catalog)に固定の機能カテゴリを設定した SLI がある場合は、それらのエラーもカウントします。

エンジニアは、エラーバジェットに影響を与えることなく、`Gitlab::ErrorTracking.track_exception` やほかのログ記録を自由に使用できます。

## なぜエラーバジェットを使用するのですか？ {#why-are-we-using-error-budgets}

GitLab は、可用性の高い SaaS プラットフォームとして提供する必要のある複雑なシステムです。これまで、SaaS の信頼性を継続的に高めながら機能提供の速度を維持する際の課題に対処するため、いくつかのプロセスを導入してきました。

[Infradev プロセス](/handbook/engineering/workflow/#infradev)は、インシデントや性能低下が発生した後に問題の解決を優先するために作られました。このプロセスは成果を上げていますが、*イベントに焦点を当て*、*イベントを起点とする*ものです。

[Engineering Allocation プロセス](/handbook/product/product-processes/#prioritization-framework)は、チームの長期的な効率性、パフォーマンス、セキュリティに関する項目に取り組むために作られました。

GitLab のエラーバジェットの最初のイテレーションは、客観的なデータを導入し、個々の機能が長期にわたってどのように動作しているかをより深く把握する仕組みを確立することを目指します。組織はこれを使って適切に注力先を配分し、リスクのバランスを取り、システム全体をより長く健全に保てます。

機能カテゴリ単位でエラーバジェットを割り当てることで、個々の機能のベースラインを設定し、GitLab SaaS にとって重要な事項の優先順位について認識を合わせられます。

## 最優先の改善をどのように決定しますか？ {#how-do-we-determine-the-highest-priority-improvements}

各グループの
[バジェット詳細ダッシュボード](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/error_budget_detail.html)には `Budget spend attribution` セクションがあり、[バジェットをどこで消費しているかを確認](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#check-where-budget-is-being-spent)できます。

`Budget failures` パネルと `Failure log links` パネル内の各リンクは、どちらもエラー数の順に並んでいます。これらのテーブルで上位の原因の修正を優先すると、バジェット消費への影響が最も大きくなります。

トラフィックパターンが異なる、単純化した違反のシナリオを
見てみましょう。

| エンドポイント   | 総リクエスト数 | 遅いリクエスト数 | Apdex 比率 | トラフィックシェア |
|------------|----------------|---------------|-------------|---------------|
| Endpoint A | 1 000          | 500           | 50%         | 1%            |
| Endpoint B | 99 000         | 9 000         | 90%         | 99%           |

`Endpoint A` の Apdex 比率のほうが低くても、`Endpoint B` の違反を
より多く修正するほうが、エラーバジェット全体への影響は大きくなります。
エラーバジェットに影響する違反の大半を占めているためです。

次に、より複雑な違反のシナリオを見てみましょう。

| エンドポイント   | 総リクエスト数 | 遅いリクエスト数 | Apdex 比率 | トラフィックシェア |
|------------|----------------|---------------|-------------|---------------|
| Endpoint A | 100 000        | 30            | 99.97%      | 80%           |
| Endpoint B | 25 000         | 30            | 99.88%      | 20%           |

`Endpoint A` と `Endpoint B` の 30 件のエラーは、どちらもエラーバジェットに
同じ影響を与えます。ただし、遅いリクエスト / 総リクエストの比率が高いため、
`Endpoint B` に取り組むほうがよいでしょう。
`Endpoint A` はすでに 99.95% の目標を達成しているため、追加の作業は必要ありません。
99.97% は良好な値であり、ここで意図的に改善を加えることは時期尚早な最適化と見なされる可能性があります。

`Endpoint B` は違反数によって Apdex のしきい値を下回るため、
この 2 つのエンドポイントが違反の上位であれば、
`Endpoint B` の改善を検討する必要があります。

## GitLab.com のエラーバジェットポリシー {#the-error-budget-policy-for-gitlabcom}

エラーバジェットのプロセスには、いくつかの異なる項目があります。

1. バジェットのステークホルダー
1. バジェットの割り当て
1. バジェットの消費と会計
1. ステークホルダー間のコミュニケーション

## バジェットのステークホルダー {#budget-stakeholders}

エラーバジェットプロセスのステークホルダーは次のとおりです。

1. ステージチーム（[製品カテゴリページ](/handbook/product/categories/)に掲載されている Product 部門と、それを支える Engineering チーム）
1. Infrastructure チーム（[Infrastructure チームページ](/handbook/engineering/infrastructure-platforms/)に掲載されているチーム）
1. VP of Infrastructure と Infrastructure Leadership
1. VP of Development と VP of Product

## バジェットの割り当て {#budget-allocation}

エラーバジェットは、[可用性](https://internal.gitlab.com/handbook/company/performance-indicators/product/saas-platforms-section/#gitlabcom-availability-slo)の目標（社内ハンドブック）に基づいて計算します。

現在の可用性目標 `99.95%` では、許容される利用不可時間は `28 日間で 20 分` です。

Product のレポート方法に合わせるため、28 日間を使用することにしました。

バジェットは SaaS プラットフォームに設定し、ステージチームと Infrastructure チームで共有します。サービス可用性の計算方法は、[GitLab.com のサービス可用性ページ](/handbook/engineering/monitoring/#gitlabcom-service-availability)に詳しく記載されています。

これには、すべての Rails コントローラー、API エンドポイント、Sidekiq ワーカー、サービスカタログで定義するほかの SLI が含まれます。機能カテゴリを定義することでグループに帰属させます。機能のカテゴリ分類に関するドキュメントは、[開発者ガイド](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization)を参照してください。

チームが所有する機能の数や複雑さ、既存の製品の優先事項、チームの規模は、バジェットに影響しません。

## バジェットのレポート {#budget-reporting}

毎月 4 日に、ステージグループ別のバジェット消費に関するエラーバジェットレポートを配信します。
`#product`、`#eng-managers`、`#f_error_budgets`、`#development` で告知します。

基盤となるインフラストラクチャの問題により、多くのステージグループがバジェットを超過する月もあります。
レポートの生成時に、バジェットを超過したグループが 5 つを超える場合（グループのトラフィックシェアが >0.1%）、Scalability Group がレポートを発行する前に消費の増加を調査します。レポートの発行前に、調査中であることを Slack チャンネルで告知します。
複数のチームによる調査の重複を防ぐことが目的です。

ステージグループは、月次エラーバジェットレポートをレビューし、自分たちの機能カテゴリでの超過消費についてコメントすることを求められます。

### Engineering Allocation ミーティングでのエラーバジェット {#error-budgets-in-the-engineering-allocation-meeting}

ステージグループは、エラーバジェット消費を毎週報告することは求められません。
月次消費が 3 か月連続で割り当てられたバジェットを超える機能カテゴリは、議論のために議題に追加します。

## バジェット消費（サービス別） {#budget-spendby-service}

現在のバジェット消費は、[サービス可用性の全体ダッシュボード](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=now-30d&to=now)で確認できます。

消費したバジェットとは、ユーザー向けサービスのエラー率が指定のしきい値を下回り、レイテンシがそのサービスの指定目標を上回った時間（分単位）です。サービス可用性の計算方法の詳細は、[GitLab.com のサービス可用性ページ](/handbook/engineering/monitoring/#gitlabcom-service-availability)を参照してください。

現在、バジェット消費は主要サービスのレベルで集計しています。

![バジェット全体](/images/engineering/error-budgets/complete-budget.png)

![消費したバジェット](/images/engineering/error-budgets/spent-budget.png)

バジェット消費の要因の詳細は、報告されたインシデントを確認し、該当するサービスのダッシュボード（およびそのリソース）を調べることで把握できます。

## バジェット消費（ステージグループ別） {#budget-spend-by-stage-group}

この仕組みの構築方法をより詳しく示す[例があります](error-budget-by-stage-group-example.md)。

現在の [28 日間](/handbook/enterprise-data/organization/programs/data-for-product-managers)のバジェット消費は、各[ステージグループのダッシュボード](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups)で確認できます。そのステージグループの機能カテゴリを 1 つの値に集約しています。

ステージグループは、ダッシュボードを使ってバジェット消費の原因を調べられます。バジェット消費の調査プロセスは、[開発者ドキュメント](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/stage_group_dashboard.html)に記載されています

可用性の計算式は次のとおりです。

```text
the number of operations with a satisfactory apdex + the number of operations without errors
/
the total number of apdex measurements + the total number of operations
```

これによって正常に完了した操作の割合が得られ、次のように分単位に変換します。

```text
(1 - stage group availability) * (28 * 24 * 60)
```

Apdex とエラー率については、[GitLab.com のサービス可用性ページ](/handbook/engineering/monitoring/#gitlabcom-service-availability)に詳しい説明があります。

エラーバジェット消費の情報は、Tableau の[エラーバジェット概要ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard)で確認できます。

### システム全体のインシデント {#system-wide-incidents}

共有サービス（データベースや Redis など）に影響するシステム全体のインシデントは、チームの
エラーバジェット消費に影響する可能性があります。28 日間の消費を対象とするため、これらの短期間のイベントの影響は、おおむね
無視できるはずです。

影響が大きい場合は、月次レポートで、そのインシデントを理由に消費を手動で調整するべきかを議論できます。

現時点では、システム全体のイベントをグループレベルのエラーバジェットから自動的に除外する方法の検討は進めていません。チームは、各グループに適したものにするための十分な調整機能を備えた、エラーバジェットの強固な基盤の構築に注力しています。

### エラーバジェットの帰属を変更する方法 {#how-to-change-error-budget-attribution}

エラーバジェットのイベントは、機能のカテゴリ分類を通じてステージグループに帰属します。エンドポイントの機能カテゴリを変更するには、[機能のカテゴリ分類に関する開発ドキュメント](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization)の説明に従ってエンドポイントを更新してください。

機能カテゴリの更新によって変わるのは、将来のイベントのステージグループへの対応付けだけです。過去に報告したイベントは遡及して更新しません。

[Observability チーム](/handbook/engineering/infrastructure-platforms/production-engineering/observability/)は、Web サイトのリポジトリで機能カテゴリが変更されたときに、対応付けを最新に保つ責任を持ちます。`stages.yml` でカテゴリが変更されると、スケジュールされたパイプラインが[ビルドボード](https://gitlab.com/gitlab-com/gl-infra/scalability/-/boards/1697160)に Issue（[Issue の例](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2084)）を作成します。Issue の説明には、パイプラインへのリンクと従うべき手順が含まれます。カテゴリは次の 2 か所に同期する必要があります。

1. [Rails アプリケーション](https://docs.gitlab.com/ee/development/feature_categorization/#updating-configfeature_categoriesyml)。
1. [Runbooks リポジトリ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/stage-group-mapping.jsonnet)。

### 新しいグループのエラーバジェット {#error-budgets-for-new-groups}

グループを作成すると、[`stages.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml)に追加します。そのマージリクエストで、新しいグループに新規または既存の機能カテゴリを割り当てます。

この MR をマージすると、Scalability に、私たちの記録用インフラストラクチャのメトリクスカタログを更新するための Issue が自動的に届きます。これは、新しいグループを `stages.yml` に追加してから 1 週間以内に発生します。

メトリクスカタログを更新すると、関連する機能カテゴリのメトリクスは新しいステージグループに帰属します。帰属先を変更する場合と同様に、変更は遡及しません。たとえば、既存の機能カテゴリが 15 日に `source code` から `code review` に移る場合、その機能カテゴリの 1 日から 15 日までに出力されたメトリクスは、`source code` のエラーバジェットに寄与します。15 日以降のメトリクスは、`code review` のエラーバジェットに計上します。

グループの名称変更やステージの移動の場合も同じです。グループの名称変更を 15 日にメトリクスカタログへマージした場合、28 日間のレポートには旧名のグループのデータが 15 日分含まれ、直近の日々のデータは新しい名前のグループに帰属します。

### 契約 {#contract}

その月のトラフィックシェアが >0.01% のステージグループは、機能開発と信頼性向上の開発のバランスを取るため、この契約に従う必要があります。
ステージグループのトラフィックシェアは、月次エラーバジェットレポートで確認できます。

エラーバジェットは、[製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)の一環として毎月レビューする必要があります。

機能カテゴリの機能開発と信頼性向上の開発のバランスは、次のとおりです。

|**月次消費（28 日間）**               |**対応**|
|------------------------------  |----------|
| <= 20 分                   | 消費状況を把握してください - 追加の対応は不要です。 |
| > 20 分                   | [信頼性/可用性の改善](/handbook/product/product-processes/#prioritization)に取り組むことを約束し、機能開発は二次的なものとします。 |

月次消費が 3 か月連続で割り当てられたバジェットを超える機能カテゴリには、機能開発に追加の制限を設ける場合があります。

#### 異なるエラーバジェットを持つステージグループ {#stage-groups-with-different-error-budgets}

現在の契約は、99.95% の可用性と、月次 20 分のエラーバジェットです。ただし、次のグループでは、ビジネスニーズに応じて一時的にバジェットを調整しています。

|**ステージグループ**   | **月次消費（28 日間）** | **ビジネス上の理由** | **レビュー日**|
|------------------|---------------------|---------------------|---------------------|
| Runtime: Organizations | 99.79% | グループが長期的なスケーラビリティの作業（Protocells/Organizations）に注力するとともに、次の API バージョンでの導入が必要な変更を調整できるようにするためです。[この MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/108039)に記載しています | 2026-10-31（または合計トラフィックシェアが 5% を超えた場合） |
| Verify: Pipeline Execution | 99.9% | 顧客所有の runner のキューイングが、グループのエラーバジェット消費の 50-60% を占めています。この一時的な例外は、[runbooks#221](https://gitlab.com/gitlab-com/runbooks/-/issues/221)のメトリクス除外を実装するまで有効です。 | 2026-09-30 |

**例外**

一時的な例外は、付与した例外が GitLab.com の信頼性に追加のリスクをもたらさないと見込まれる場合に、さまざまなステークホルダーが優先度の高いビジネスニーズを満たせるようにするために認めます。*例外*は、エンドポイントにプロパティを設定して許容されるパフォーマンスを定義する[カスタムターゲット](/handbook/engineering/error-budgets/custom-targets/)とは異なります。

例外の正当な理由は次のとおりです。

1. エラーバジェットを改善する作業の範囲が明確で、十分に計画され、資金も確保されています。完了には 1 回のリリース月を超える期間が必要であり、作業を進める間はエラーバジェットを定期的に消費する見込みです。
1. エラーバジェットを改善する作業の範囲が明確で、十分に計画されていますが、現時点では資金が確保されていません。ステークホルダーは資金確保を進めており、追加資金を確保するまではエラーバジェットを定期的に消費する見込みです。
1. 一時的に、重要なビジネス目標の達成が最優先となっており、GitLab.com の信頼性には直接影響しません。グループがこの別の優先事項に注力する間は、エラーバジェットを定期的に消費する可能性が高いです。

**例外を申請する手順**

例外を申請するには、MR を作成し、上記のテーブルにステージグループを追加してください。説明には、次の詳細を記載してください。

1. バジェット消費の原因となる問題の明確な説明
1. 作業の範囲が明確になっていることを示す関連資料
1. 例外を再検討しなければならない目標日

**追加のガイダンス**

1. エピックと Issue を使って、実施する作業を文書化してください
1. 作業の範囲が明確になるよう、エピックと Issue に詳しい説明を追加してください。
1. 作業の完了までの所要期間が明らかになるよう、エピックに開始日と期日を追加してください。
1. 作業をいつ計画するかが明らかになるよう、Issue にマイルストーンを追加してください。

次の質問に回答してください。

1. チームのバジェットのうち、この例外に起因するのはどの部分ですか？この例外の対象となる問題のあるエンドポイントを除くと、エラーバジェットは正常な状態を示す緑色になりますか？
1. チームのエラーバジェット消費の主な要因は何ですか？応答時間ですか？
1. 参照するエピックをクローズするとき、どのような状態であれば成功ですか？

承認プロセスを迅速に進めるため、上記のガイダンスと手順に従ってください。

**承認を受けるため、MR を次の担当者に割り当ててください。**

1. Director of Product 以上（影響を受けるステージグループの）
    - ビジネスニーズを満たすことに責任を持ち、指揮命令系統の上位と下位に変更を伝える必要があります。
1. Senior Manager of Infrastructure 以上
    - GitLab.com に悪影響がないことに責任を持ち、指揮命令系統の上位と下位に例外を伝える必要があります。

### エラーバジェットの改善 {#error-budget-improvements}

エラーバジェットの改善に関する作業は、Issue に詳しく記載してください。
レポートで追跡できるよう、これらの Issue に `Error Budget
Improvement` と `group::` のラベルを付けてください。

### エラーバジェットの DRI {#error-budget-dris}

| 役割 | K/PI | 目標 | 現在の追跡状況 |
| --- | --- | --- | --- |
| Product Management | [エラーバジェットの消費を管理する](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard) | 28 日間で 20 分（99.95% の可用性に相当） | 完了 - Sisense で追跡 |
| Infrastructure | [エラーバジェットの分数と可用性目標を設定する](https://internal.gitlab.com/handbook/company/performance-indicators/product/saas-platforms-section/#gitlabcom-availability-slo) | 99.95%（28 日間で 20 分のエラーバジェット） | 完了 - Grafana で追跡 |

- [Engineering Allocation](/handbook/product/product-processes/#prioritization-framework)があるグループでは、エラーバジェット消費を管理する責任は、Product Management チームではなく開発チームにあります。

## 現状と今後の方針 {#current-state-and-future-intent}

### 現状 {#current-state}

1. エラーバジェットは機能カテゴリごとに存在し、標準の Apdex しきい値とエラー率を組み込んでいます。
1. エラーバジェットは、Grafana と Sisense のダッシュボードを通じてステージグループとステージ向けに公開しています。
1. Grafana のダッシュボードにあるリンクから、影響要因を調べられます。
1. エラーバジェットは、[製品の優先順位付けプロセス](/handbook/engineering/workflow/#product-development-timeline)に含まれます。

### ロードマップ {#roadmap}

以下の変更は、エラーバジェットの成熟度を高めることを目指しています。

#### 1. エラーバジェット計算の精度を高める（Apdex 部分） {#1-increase-precision-of-error-budget-calculations-apdex-portion}

**改善**

- ***中止*** エラーバジェットに当初使用していた SLO の目標は、Infrastructure の監視に使うアラートと結びついています。[Sisense を使ってステージグループごとに目標を設定する方法を提案しました](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1236)が、支持されませんでした。Infrastructure の監視とエラーバジェットで別の目標を使う方法を見つけましたが、目標は同じに保ち、エラーバジェットの Apdex 部分のデフォルトのレイテンシしきい値を調整することに決まりました（次の項目を参照）。
- ***完了*** SLI の計算には、すべてのエンドポイントに適しているわけではないリクエスト所要時間のしきい値を使用していました。9 月 21 日に[しきい値を 5 秒に引き上げました](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1243)。エラーバジェットに効果が完全に表れるまでには 28 日間かかります。
- **完了** 次に、SLI のリクエスト所要時間のしきい値の設定機能を拡張し、ステージグループがエンドポイントごとに独自の SLI を設定できるようにします。[エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/525)。
- 現在 `not_owned` となっているエンドポイントを、正しい機能カテゴリに帰属させます。次の方法で対応します
  - **完了** [Sidekiq の呼び出し元情報の使用](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1200)、および
  - [graphQL クエリと機能の相関付け](https://gitlab.com/gitlab-org/gitlab/-/issues/328535)。
- [システム全体の停止がエラーバジェットに与える影響を、より明確にする必要があります](https://gitlab.com/gitlab-com/Product/-/issues/2884)。
- エラーバジェットとサービス可用性の両方を報告する PM 向けに、ガイダンスを提供します（Runner や Pages など）。

**製品開発の活動**

製品開発チームには、次の活動を推奨します。

- [優先順位付けのガイドライン](/handbook/engineering/development/principles/#prioritizing-technical-decisions)に従い、[戦略的優先順位コード](/handbook/engineering/workflow/strategic-priority-codes/)、[Infradev](/handbook/engineering/workflow/#performance-refinement)、[是正措置](/handbook/engineering/infrastructure-platforms/incident-review/)、[セキュリティ](/handbook/security/product-security/vulnerability-management/)、[Engineering Allocation](/handbook/product/product-processes/#prioritization-framework)の Issue に引き続き取り組む
- エンドポイントの SLO を提案する
- [カスタムの目標時間を使う新しい Apdex 計算方法にオプトインする](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1451)
- 今後のエラーバジェットの改善に向け、追加のフィードバックを提供する

#### 2. エラーバジェットの可視性を高める（エラー部分） {#2-increase-visibility-into-error-budgets-error-portion}

- ステージグループには、エラー数の情報を提供します。[Sentry でエラー情報を調べられるようにする](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/396)ことで、さらに詳細な情報を補えます。

#### 3. エラーバジェットの範囲を調整する {#3-tune-the-scope-of-error-budgets}

- P1/S1 インシデントをエラーバジェットの計算に含めることを検討します。

## 詳細情報 {#more-information}

- [エラーバジェット AMA](https://docs.google.com/presentation/d/1yYnLlTN8KOYNHww91nJgnbFK7l2xf3Cy1mRvUAxHa08/edit)
- [ステージレベルのエラーバジェットダッシュボードを理解する](https://docs.gitlab.com/ee/development/stage_group_observability/#error-budget)
- [定期的な Slack 更新を設定する](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/error-budget-weekly.md)
