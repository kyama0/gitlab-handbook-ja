---
title: "エンジニアリングのエラーバジェット"
description: "エラーバジェットは、1四半期内にサービスがどの程度信頼できなくてもよいかを決定する、明確で客観的な指標を提供します。"
upstream_path: /handbook/engineering/error-budgets/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

[エンタープライズグレードのプラットフォームとしてGitLab SaaSを強化する](https://about.gitlab.com/direction/core_platform/dotcom/)という[3年戦略](https://about.gitlab.com/direction/#3-year-strategy)の一環として、GitLab.comには特定の[可用性](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability)と[パフォーマンス](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-performance)の目標があります。

これらの目標は、ユーザーにプラットフォームの信頼性の指標を提供します。

さらに、[GitLab.comサービスレベル可用性](/handbook/engineering/monitoring/#gitlabcom-service-availability)はプラットフォーム顧客との契約上の合意の一部でもあります。契約は特定の目標数値を定義する場合があり、その合意を守らないと財務上および評判上の負担が生じる可能性があります。

## エラーバジェットとは？

Google SREブックは一般的に推奨される読み物であり、[「エラーバジェットの動機」](https://landing.google.com/sre/sre-book/chapters/embracing-risk/#id-na2u1S2SKi1)セクションでは次のように述べられています:

> エラーバジェットは、1四半期内にサービスがどの程度信頼できなくてもよいかを決定する、明確で客観的な指標を提供します。この指標は、どの程度のリスクを許容するかを決定する際に、SREと製品開発者の間の交渉から政治を排除します。

これも私たちが目指している目標ですが、同じレベルの洗練に到達するためには、私たちの特定の状況、成熟度、追加の要件を考慮する必要があることも認識しています。**初期のアプローチ**では、エラーバジェットSLOを既存の可用性へのアプローチに直接結びつけます。

エラーバジェットの将来のイテレーションでは、リスク許容度と機能の速度のバランスをとる上でのプロダクトマネージャーの重要性をさらに発展させる予定です。開発者とSRE間の上記の明確さは、各サービスまたは製品領域に対する適切な測定値と目標を確立することで達成されます。最終的にこれは、新機能の作業の重要性とユーザーへの継続的なサービス期待のバランスをとります。

## エラーバジェットの構成要素は？

エラーバジェットは、まずSLO（Service Level Objective、サービスレベル目標）を確立することに依存します。SLOは、目標、SLI（Service Level Indicator、サービスレベル指標）、および期間で構成されます。

- **目標**: 望ましい成功レベル、パーセンテージで表記
- **SLI**: 失敗したイベントの数を区別するために使用される評価
- **期間**: SLIに最近性のバイアスを強制

これらの要素の例:

- **目標**: 99.95%
- **SLI**: 5分間のAPIリクエストの95パーセンタイルレイテンシが100ms未満
- **期間**: 過去28日間

これらをすべて合わせると、上記のSLO例は次のようになります: ***過去28日間で、5分間のAPIリクエストの95パーセンタイルレイテンシが100ms未満であることが99.95%***

エラーバジェットは、SLOの1 - 目標で、この場合は (1 - .9995 = .0005)。28日間の期間を使用すると、**「バジェット」のエラーは20.16分** (.0005 *(28* 24 * 60))

上記の例ではSLIをレイテンシ測定として示していますが、他の測定（％エラーなど）もSLIに使用するのに良い要素であることに注意することが重要です。

GitLabの現在のエラーバジェット実装は、SLOおよびエラーバジェットの上記の洗練の一部のみを使用していますが、将来的に洗練を増やすことを期待しています。SLOおよびエラーバジェットのプラクティスは、サービスの重要性および、それに依存する他のサービスおよびコンポーネントのレジリエンスに基づいて、目標とSLIの***両方***が（適切に）変化するように進化することが予想されます。

## どの種類のエラーが含まれますか？

`500`ステータスコードエラーが結果となるWebリクエストがカウントされます。Sidekiqでは、未処理の例外のために失敗したジョブがカウントされます。

グループに[カスタムSLI](https://docs.gitlab.com/ee/development/application_slis/)がある場合、または[メトリクスカタログ](https://gitlab.com/gitlab-com/runbooks/-/tree/master/metrics-catalog)で固定のフィーチャーカテゴリーが設定されたSLIがある場合、それらのエラーもカウントされます。

エンジニアは`Gitlab::ErrorTracking.track_exception`またはその他のログを、エラーバジェットに影響を与えることなく自由に使用できます。

## なぜエラーバジェットを使用しているのですか？

GitLabは、可用性の高いSaaSプラットフォームとして提供される必要がある複雑なシステムです。何年もの間、SaaSの信頼性が継続的に向上することを保証しながら、機能提供の速度を維持するいくつかの課題に対処するために、いくつかのプロセスが導入されてきました。

[Infradevプロセス](/handbook/engineering/workflow/#infradev)は、インシデントまたは劣化が発生した後にIssueを解決することを優先するために作成されました。このプロセスは成功を証明していますが、*イベント中心*かつ*イベント駆動*です。

[Engineering Allocationプロセス](/handbook/product/product-processes/#prioritization-framework)は、長期的なチーム効率、パフォーマンス、セキュリティ項目に対処するために作成されました。

GitLabでのエラーバジェットの初期のイテレーションは、客観的なデータを導入し、個々の機能が長期間にわたってどのように機能しているかについてより深い洞察を作り出すシステムを確立することを目的としています。これは、組織が焦点を正しく割り当て、リスクが適切にバランスされ、システム全体がより長い期間健全に保たれることを確保するために使用できます。

エラーバジェットをフィーチャーカテゴリーまで割り当てることで、特定の機能の基準が設定され、それによりGitLab SaaSにとって重要なものを優先することへの調整が確保されます。

## 最優先の改善をどのように決定しますか？

各グループは
[バジェット詳細ダッシュボード](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/error_budget_detail.html)に`Budget spend attribution`セクションがあり、[バジェットがどこで使われているかを発見](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#check-where-budget-is-being-spent)できます。

`Budget failures`パネルと`Failure log links`パネル内の各リンクは、エラーの数順に並んでいます。これらのテーブルでトップオフェンダーを修正することを優先することで、バジェット支出に最大の影響を与えます。

異なるトラフィックパターンを持つ単純化された違反シナリオを見てみましょう:

| エンドポイント   | 合計リクエスト | スロークエスト | Apdex比率 | トラフィックシェア |
|------------|----------------|---------------|-------------|---------------|
| エンドポイントA | 1 000          | 500           | 50%         | 1%            |
| エンドポイントB | 99 000         | 9 000         | 90%         | 99%           |

`エンドポイントA`の方がApdex比率が低いにもかかわらず、`エンドポイントB`からのより多くの違反を修正する方が、エラーバジェットへの影響が全体的により大きくなります。これは、エラーバジェットに影響を与える違反の大部分を占めているためです。

次に、より複雑な違反シナリオを見てみましょう:

| エンドポイント   | 合計リクエスト | スロークエスト | Apdex比率 | トラフィックシェア |
|------------|----------------|---------------|-------------|---------------|
| エンドポイントA | 100 000        | 30            | 99.97%      | 80%           |
| エンドポイントB | 25 000         | 30            | 99.88%      | 20%           |

`エンドポイントA`と`エンドポイントB`からの30エラーはどちらもエラーバジェットに同じ影響を持ちます。ただし、`エンドポイントB`の方がスロークエスト/全体リクエストの比率が高いため、`エンドポイントB`に取り組む方が良いでしょう。`エンドポイントA`はすでに99.95%の目標を達成しているため、ここで追加の作業は必要ありません。99.97%は良いスコアで、ここでの意図的な改善は早すぎる最適化と見なされる可能性があります。

`エンドポイントB`の違反の数はApdexしきい値を下回るため、これら2つのエンドポイントがトップ違反者である場合、`エンドポイントB`の改善を検討する必要があります。

## GitLab.comのエラーバジェットポリシー

エラーバジェットプロセスにはいくつかの特徴的な項目があります:

1. バジェットステークホルダー
1. バジェット割り当て
1. バジェット支出と会計
1. ステークホルダー間のコミュニケーション

## バジェットステークホルダー

エラーバジェットプロセスのステークホルダー:

1. ステージチーム（[製品カテゴリーページ](/handbook/product/categories/)で表現されているProduct部門および支援エンジニアリングチーム）
1. Infrastructureチーム（[infrastructureチームページ](/handbook/engineering/infrastructure-platforms/)で表現されているチーム）
1. [VP of InfrastructureとInfrastructureリーダーシップ](/handbook/engineering/infrastructure/#mstaff)
1. VP of DevelopmentおよびVP of Product

## バジェット割り当て

エラーバジェットは、[可用性](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability)目標に基づいて計算されます。

`99.95%`可用性の現在の目標で、許可される利用不可ウィンドウは`28日間で20分`です。

私たちはProductのレポート方法に合わせるために28日期間を使用することを選択しました。

バジェットはSaaSプラットフォームに設定され、ステージチームとインフラチーム間で共有されます。サービス可用性計算方法論については、[GitLab.comサービス可用性ページ](/handbook/engineering/monitoring/#gitlabcom-service-availability)で詳細にカバーされています。

これには、すべてのRailsコントローラー、APIエンドポイント、Sidekiqワーカー、およびサービスカタログで定義された他のSLIが含まれます。これは、フィーチャーカテゴリーを定義することでグループに帰属されます。フィーチャーカテゴリー化に関するドキュメントは、[開発者ガイド](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization)で利用できます。

チームが所有する機能の数や複雑さ、既存の製品優先事項、チームの規模は、バジェットに影響を与えません。

## バジェットレポート

毎月4日に、ステージグループ別バジェット支出のエラーバジェットレポートが配信されます。
アナウンスは`#product`、`#eng-managers`、`#f_error_budgets`、`#development`に表示されます。

基盤となるインフラの問題により、多くのステージグループがバジェット超過になる月があります。
レポートが生成されるとき、5以上のグループがバジェット超過の場合（グループのトラフィックシェアが>0.1%）、Scalabilityグループがレポートを発行する前に増加した支出を調査します。レポートを発行する前に調査していることをSlackチャンネルでアナウンスします。
目的は、複数のチームによる重複した調査を防ぐことです。

ステージグループは、月次エラーバジェットレポートをレビューし、フィーチャーカテゴリーでの超過支出にコメントすることが期待されます。

### Engineering Allocationミーティングでのエラーバジェット

ステージグループは、エラーバジェット支出について毎週レポートすることは期待されていません。
3か月連続で割り当てられたバジェットを超える月次支出を持つフィーチャーカテゴリーは、議論のためにアジェンダに追加されます。

## バジェット支出（サービス別）

現在のバジェット支出は[一般サービス可用性ダッシュボード](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=now-30d&to=now)で確認できます。

使用されたバジェットとは、ユーザー向けサービスが指定されたしきい値以下のエラー率を経験し、レイテンシがサービスの指定された目標を上回った時間（分単位）です。サービス可用性がどのように計算されるかの詳細は、[GitLab.comサービス可用性ページ](/handbook/engineering/monitoring/#gitlabcom-service-availability)で確認できます。

バジェット支出は現在、主要なサービスレベルで集計されています。

![Complete budget](/images/engineering/error-budgets/complete-budget.png)

![Spent budget](/images/engineering/error-budgets/spent-budget.png)

バジェット支出に何が貢献したかの詳細は、発生したインシデントを検査し、特定のサービスダッシュボード（およびそのリソース）を探索することでさらに見つけることができます。

## バジェット支出（ステージグループ別）

これがどのように構築されているかの詳細を含む[例があります](error-budget-by-stage-group-example.md)。

現在の[28日間](/handbook/enterprise-data/organization/programs/data-for-product-managers)のバジェット支出は、各[ステージグループダッシュボード](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups)で確認できます。そのステージグループのフィーチャーカテゴリーは単一の値にロールアップされます。

ステージグループは、ダッシュボードを使用してバジェット支出の原因を探索できます。バジェット支出を調査するプロセスは、[開発者ドキュメント](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/stage_group_dashboard.html)に記載されています

可用性を計算するための公式:

```text
the number of operations with a satisfactory apdex + the number of operations without errors
/
the total number of apdex measurements + the total number of operations
```

これは、正常に完了した操作のパーセンテージを示し、分に変換されます:

```text
(1 - stage group availability) * (28 * 24 * 60)
```

ApdexとErrorレートは、[ハンドブックページ](/handbook/engineering/monitoring/#gitlabcom-service-level-availability)で詳細に説明されています。

エラーバジェット支出情報は、Tableauの[エラーバジェット概要ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard)で利用できます。

### システム全体のインシデント

共有サービス（データベースまたはRedisなど）に影響するシステム全体のインシデントは、チームのエラーバジェット支出に影響を与える可能性があります。28日間にわたる支出を見ているため、これらの短期間のイベントの影響はほぼ無視できるはずです。

影響が大きい場合、月次レポートで、このインシデントが手動の支出調整を正当化するかどうかについて議論できます。

現時点では、システム全体のイベントをグループレベルのエラーバジェットから自動的に割り引くことを検討していません。チームは、各グループに関連するための十分なチューニング機能を備えた、エラーバジェットの強固な基盤を構築することに焦点を当てています。

### エラーバジェットの帰属を変更する方法

エラーバジェットイベントは、フィーチャーカテゴリー化を介してステージグループに帰属されます。エンドポイントのフィーチャーカテゴリーを変更するには、[フィーチャーカテゴリー化開発ドキュメント](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization)で説明されているようにエンドポイントを更新します。

フィーチャーカテゴリーの更新は、将来のイベントがステージグループにマップされる方法のみを変更します。以前にレポートされたイベントは遡及的に更新されません。

[Observabilityチーム](/handbook/engineering/infrastructure-platforms/production-engineering/observability/)は、フィーチャーカテゴリーがWebサイトリポジトリで変更されたときに、マッピングを最新の状態に保つことを所有しています。`stages.yml`でカテゴリーが変更されると、スケジュールされたパイプラインが[ビルドボード](https://gitlab.com/gitlab-com/gl-infra/scalability/-/boards/1697160)にIssue（[Issue例](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2084)）を作成します。Issueには、パイプラインリンクと説明に従うべき指示が含まれています。カテゴリーは2つの場所に同期する必要があります:

1. [Railsアプリケーション](https://docs.gitlab.com/ee/development/feature_categorization/#updating-configfeature_categoriesyml)。
1. [Runbooksリポジトリ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/stage-group-mapping.jsonnet)。

### 新しいグループのエラーバジェット

グループが作成されると、グループは[`stages.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml)に追加されます。そのマージリクエストで、新しいグループには新しいまたは既存のフィーチャーカテゴリーが割り当てられます。

このMRがマージされると、Scalabilityは、私たちの記録インフラのメトリクスカタログを更新するための自動Issueを受け取ります。これは、新しいグループが`stages.yml`に追加されてから1週間以内に発生します。

そのメトリクスカタログが更新されると、関連するフィーチャーカテゴリーのメトリクスは新しいステージグループに帰属されます。帰属が変更されたときと同様に、変更は遡及的ではありません。これは、既存のフィーチャーカテゴリーが15日に`source code`から`code review`に移動した場合、そのフィーチャーカテゴリーは1日から15日まで放出されたメトリクスについて`source code`のエラーバジェットに貢献することを意味します。15日以降のメトリクスは`code review`のエラーバジェットにカウントされます。

グループが名前変更された場合、またはステージが移動した場合も同じことが当てはまります: 15日にメトリクスカタログでグループ名変更がマージされた場合、28日間のレポートには、グループの古い名前のデータが15日分含まれ、最新の日は新しい名前を持つグループに帰属されます。

### 契約

特定の月のトラフィックシェアが>0.01%のステージグループは、機能開発と信頼性開発のバランスを取るためにこの契約を遵守する必要があります。
ステージグループのトラフィックシェアは月次エラーバジェットレポートで表示されます。

エラーバジェットは[製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)の一部として月次でレビューされる必要があります。

フィーチャーカテゴリーの機能開発と信頼性開発のバランスは次のとおりです:

|**月次支出（28日）**               |**アクション**|
|------------------------------  |----------|
| <= 20分                   | 支出を理解する - 追加のアクションは不要。 |
| > 20分                   | [信頼性/可用性の改善](/handbook/product/product-processes/#prioritization)へのコミットメント、機能開発は二次。 |

3か月連続で割り当てられたバジェットを超える月次支出を持つフィーチャーカテゴリーは、追加の機能開発の制限が課される可能性があります。

#### 異なるエラーバジェットを持つステージグループ

現在の契約は99.95%の可用性と20分の月次エラーバジェットです。ただし、以下のグループはビジネスニーズに基づいて一時的に調整されたバジェットを持っています:

|**ステージグループ**   | **月次支出（28日）** | **ビジネス上の理由** | **レビュー日**|
|------------------|---------------------|---------------------|---------------------|
| Runtime: Organizations | 99.79% | 長期スケーラビリティ作業（Protocells/Organizations）に集中することを許可し、また次のAPIバージョンで導入を必要とする変更を調整する。[このMR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/108039)で説明 | 2026-04-30（または合計トラフィックシェアが5%を超えた場合） |

**例外**

一時的な例外は、許可された例外がGitLab.comの信頼性に追加のリスクを生み出していないと推定される場合に、異なるステークホルダーがより高い優先度のビジネスニーズを満たすことを可能にする手段として付与されます。*例外*は、エンドポイント上で許容可能なパフォーマンスを定義するプロパティを設定する[Custom Targets](/handbook/engineering/error-budgets/custom-targets/)とは異なることに注意してください。

例外の有効な理由:

1. エラーバジェットを改善するための作業がスコープアウトされ、完全に計画され、資金提供されている。作業の完了には単一のリリース月以上かかり、作業が完了している間はエラーバジェットが定期的に使用されることが予想される。
1. エラーバジェットを改善するための作業がスコープアウトされ、完全に計画されているが、現在は作業に資金が提供されていない。ステークホルダーは資金を確保するプロセス中であり、追加資金が確保されるまでエラーバジェットは定期的に使用される。
1. 一時的に、最高優先度は重要なビジネス目標を達成することであり、GitLab.comの信頼性は直接的に影響を受けない。グループはこの他の優先事項に集中している間、エラーバジェットを定期的に使用する可能性が高い。

**例外をリクエストするための指示**

例外をリクエストするには、MRを開き、上記のテーブルにステージグループを追加します。説明では、次の詳細を提供します:

1. バジェット支出の原因である問題の明確な説明
1. 作業がスコープアウトされていることを示す関連リソース
1. 例外が再検討されなければならない目標日

**追加のガイダンス**

1. EpicとIssueを使用して実行する作業を文書化する
1. 作業が明確にスコープアウトされていることを確認するために、EpicとIssueに詳細な説明を追加する。
1. 作業の完了にどれくらいの時間がかかるかが透明になるように、Epicに開始日と期日を追加する。
1. 作業がいつ計画されるかが透明になるように、Issueにマイルストーンを追加する。

次の質問に対する回答を提供します:

1. チームのバジェットのどの部分がこの例外によるものですか？この例外でカバーされている問題のあるエンドポイントを削除した場合、エラーバジェットは緑になりますか？
1. チームのエラーバジェット支出の主な貢献者は何ですか？それは応答時間ですか？
1. 参照されているエピックのクロージャー時の成功はどのように見えますか？

承認プロセスを迅速化するために、上記のガイダンスと指示に従います。

**承認のためにMRを以下に割り当てる:**

1. Director of Product以上（影響を受けるステージグループの）
    - ビジネスニーズが満たされることを確認する責任があり、変更をレポートチェーンの上下に伝達する必要があります。
1. Senior Manager of Infrastructure以上
    - GitLab.comが悪影響を受けないことを確認する責任があり、例外をレポートチェーンの上下に伝達する必要があります。

### エラーバジェットの改善

エラーバジェットの改善に関連する作業はIssueに詳述する必要があります。
これらのIssueには`Error Budget Improvement`ラベルと`group::`ラベルを付けて、レポートで追跡できるようにしてください。

### エラーバジェットDRI

| 役割 | K/PI | 目標 | 現在の追跡ステータス |
| --- | --- | --- | --- |
| Product Management | [エラーバジェットの支出を維持](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard) | 28日間で20分（99.95%可用性に相当） | 完了 - Sisenseで |
| Infrastructure | [エラーバジェット分と可用性目標の設定](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) | 99.95%（28日間で20分のエラーバジェット） | 完了 - Grafanaで |

- [エンジニアリング割り当て](/handbook/product/product-processes/#prioritization-framework)があるグループでは、エラーバジェットの支出を維持する責任は、製品管理チームではなく開発チームにあります。

## 現状と将来の意図

### 現状

1. エラーバジェットは各フィーチャーカテゴリーに存在し、標準のApdexしきい値とエラー率を組み込んでいます。
1. エラーバジェットは、GrafanaおよびSisenseダッシュボードを通じてステージグループとステージに対して公開されています。
1. 貢献要因は、Grafanaダッシュボードで利用可能なリンクを通じて探索可能です。
1. エラーバジェットは[製品優先順位付けプロセス](/handbook/engineering/workflow/#product-development-timeline)に含まれています。

### ロードマップ

以下の変更は、エラーバジェットの成熟度を高めることを目的としています。

#### 1. エラーバジェット計算の精度を向上（Apdex部分）

**改善**

- ***キャンセル*** エラーバジェットに最初に使用されたSLO目標は、インフラ監視に使用されるアラートと結合されています。[ステージグループごとに目標を設定するためにSisenseを使用することを提案しました](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1236)が、このアプローチは支持されませんでした。インフラ監視とエラーバジェットに別々の目標を使用する方法を見つけましたが、目標を同じに保ち、エラーバジェットのApdex部分のデフォルトのレイテンシしきい値を調整するという決定が下されました（次の項目を参照）。
- ***完了*** SLI計算はすべてのエンドポイントに適切ではなかったリクエスト持続時間しきい値を使用していました。[しきい値は9月21日に5秒に増加](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1243)され、エラーバジェットに完全な影響が表示されるには28日かかります。
- **完了** ステージグループは、SLIリクエスト持続時間しきい値の構成可能性を拡張することにより、エンドポイントごとに独自のSLIを設定できるようになります。[エピック](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/525)。
- 現在`not_owned`のエンドポイントは、正しいフィーチャーカテゴリーに帰属されます。これは以下によって対処されます
  - **完了** [Sidekiqの呼び出し元情報を使用](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1200)、および
  - [graphQLクエリからフィーチャーへの相関](https://gitlab.com/gitlab-org/gitlab/-/issues/328535)を持つこと。
- [システム全体の停止のエラーバジェットへの影響をより明確にする必要があります](https://gitlab.com/gitlab-com/Product/-/issues/2884)。
- エラーバジェットとサービス可用性の両方にレポートするPM向けのガイダンスを提供します（RunnerやPagesなど）。

**製品開発活動**

製品開発チームは以下を奨励されます:

- [優先順位付けガイドライン](/handbook/engineering/development/principles/#prioritizing-technical-decisions)に従って、[戦略的優先順位コード](/handbook/engineering/workflow/strategic-priority-codes/)、[Infradev](/handbook/engineering/workflow/#availability-and-performance-refinement)、[是正措置](/handbook/engineering/infrastructure-platforms/incident-review/)、[セキュリティ](/handbook/security/product-security/vulnerability-management/#vulnerability-management-overview)、および[エンジニアリング割り当て](/handbook/product/product-processes/#prioritization-framework)のIssueに取り組み続けます
- エンドポイントのSLOを提案する
- [カスタムターゲット持続時間を使用する新しいApdex計算方法へのオプトイン](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1451)
- エラーバジェットの将来の改善のための追加のフィードバックを提供する

#### 2. エラーバジェットへの可視性を増やす（エラー部分）

- ステージグループにはエラーカウント情報が提供されます。これは[Sentryでエラー情報を探索可能にすることで](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/396)、さらに詳細を提供できます。

#### 3. エラーバジェットのスコープを調整する

- P1/S1インシデントをエラーバジェット計算に組み込むことを検討します。

## 追加情報

- [エラーバジェットAMA](https://docs.google.com/presentation/d/1yYnLlTN8KOYNHww91nJgnbFK7l2xf3Cy1mRvUAxHa08/edit)
- [ステージレベルエラーバジェットダッシュボードを理解する](https://docs.gitlab.com/ee/development/stage_group_observability/#error-budget)
- [定期的なSlack更新の設定](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/error-budget-weekly.md)
