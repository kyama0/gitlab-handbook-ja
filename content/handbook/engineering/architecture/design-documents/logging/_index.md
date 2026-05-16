---
title: "GitLab のロギングブループリント"
status: ongoing
creation-date: "2024-07-22"
authors: [ "@stejacks-gitlab" ]
approvers: [ "@lmcandrew" ]
owning-stage: "~team::Observablity"
toc_hide: false
upstream_path: /handbook/engineering/architecture/design-documents/logging/
upstream_sha: 5fcdd102793f56146077c82f37a89171dea6d0ba
translated_at: "2026-04-27T13:25:33Z"
translator: claude
stale: false
lastmod: "2025-05-16T16:49:11-07:00"
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/stejacks-gitlab" class="text-blue-600 hover:underline">@stejacks-gitlab</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/lmcandrew" class="text-blue-600 hover:underline">@lmcandrew</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~team::Observablity</span></td>
<td class="px-3 py-2 border border-gray-300">2024-07-22</td>
</tr>
</tbody>
</table>
</div>


このドキュメントは、GitLab SaaS プラットフォームにおけるロギングの現状、継続的なスケールと成長に伴う課題、および次のステップに関する推奨事項を説明しています。

## スケーラビリティのテーマ

- [本番フリート全体のオブザーバビリティがすべてのチームメンバーにアクセス可能](https://about.gitlab.com/direction/production_engineering/#observability-across-the-production-fleet-is-accessible-for-all)
- [舗装された道がすべてのチームメンバーにとってデフォルト](https://about.gitlab.com/direction/production_engineering/#paved-roads-are-the-default-for-all-team-members)
- [GitLab のソリューションはウェルアーキテクテッドサービスフレームワークに従う](https://about.gitlab.com/direction/production_engineering/#solutions-at-gitlab-follow-the-well-architected-services-framework)

## 概要

[オブザーバビリティ](https://opentelemetry.io/docs/concepts/observability-primer/)とは、システムの出力によってシステムの状態を測定する能力です。ほとんどのオブザーバビリティシステムは、その目標を達成するために複数の異なるツールを含み、最も一般的なシステムの 2 つがメトリクスとログです。

[メトリクス](https://opentelemetry.io/docs/concepts/signals/metrics/)は実行時にキャプチャされたサービスの測定値で、通常はシステムの概要を提供するために集約されます。
[ログ](https://opentelemetry.io/docs/concepts/signals/logs/)はイベントの記録されたメッセージです。

これらのツールにはそれぞれメリットとデメリットがあり、適切に使用することでオブザーバビリティスタックの維持が容易になります。例として、ログはシステムにほとんどオーバーヘッドなく無限のカーディナリティを持てるのに対し、メトリクスシステムは高いカーディナリティによって大きく影響されます。私たちのロギング構造の脆弱性、短い保持期間、および不十分な[ツーリング標準](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793)のため、GitLab は[ログがより良いソリューションである](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3520)場合でもメトリクスを頻繁に使用してきました。非常に高いカーディナリティのメトリクスは過去も今もメトリクススタックにとって重大な問題であり、それらをログに移行することで両方のシステムのパフォーマンスと使いやすさが向上します。

また、異なるデータを異なる場所に保存しており、メトリクス（ほぼ常に近似値）とログ（リクエストの正確な詳細）が一致しない場合に[大きな混乱](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2924)が生じています。何がどこに行くかの標準を持ち、最も適切なシステムにデータを保持することで、混乱を減らし、複数の場所にデータを複製しなくなるため、コストも削減できます。

私たちが書くすべてのログとメトリクスは、オブザーバビリティシステムの複雑さとコストを増加させます。適切なジョブに適切なツールを使用することで、GitLab への全体的なコストと管理の複雑さを軽減します。

## ロギングの現状

GitLab は現在、以下に説明するように、SaaS と[セルフマネージド](../observability_logging/)の両方の様々なプラットフォームで異なるロギングソリューションを使用しています。ここでの標準化の欠如は、使用とメンテナンスを困難にしています。どのロギングツールを使用するかについての意見のある推奨がなければ、すべてのチームは最も使い慣れているものか、最も簡単に立ち上げられるものを選びます。

- セキュリティ: Devo
- GitLab.com: [Elastic Cloud](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/elastic?ref_type=heads)、BigQuery、Google Cloud Logs、GCS、Cloudflare、Sentry、[Loki POC](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1363)
- GitLab Observability: [ClickHouse](../observability_logging/))
- [GitLab Dedicated](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/feats-available.md): CloudWatch、BigQuery、OpenSearch、Cloud Logging

### セキュリティ

本番プラットフォームが生成するログをセキュリティがどのように取り込んで消費するかを[調査中です](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3650)。

### GitLab.com

[ログ: ユーザーセグメントとサイズの分析](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3575)には、ロギングの現在のユースケースに関する多くの調査が含まれています。

#### 標準化の欠如

現在、ログを出力するものによって異なるロギングスキーマがあり、デバッグにログを使用することが困難になっています。例として、リクエストのステータスコードを保持するフィールドの標準がなく、各ロギング重大度が何を意味すべきかの標準もありません。これにより[インデックスされるフィールドの数が大幅に増加](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3457#reduce-fields)し、ロギングクラスターのコストが増加します。

異なる種類のログは異なるシステムに入ります。現在、分析が必要な低から中程度のボリュームのログには主に Elastic Cloud を使用していますが、[HAProxy アクセスログは BigQuery に入り](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/logging_bigquery_schemas/haproxy_schema.json)、[Cloudflare ログはその API を使用してのみ利用可能です](https://gitlab.com/gitlab-org/cells/http-router/-/issues/36)。使用する各システムも、きめ細かいアクセスに関するストーリーを複雑にします。

また、[Runway](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1369) などの新しいシステムをオンラインにする追加リクエストも来ています。

#### 限られた機能

私たちのロギング環境はデータを 7 日間しか保持しておらず、多くのデバッグおよび分析ニーズには不十分です。

現在、[きめ細かいアクセスを管理する](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1360)良い方法がないため、追加の種類のログを導入することが不可能な場合があります。

#### 限られたオブザーバビリティ

システムに書き込んでいるのが誰で、どのボリュームであるかを追跡する簡単な方法がありません。必要なら[このデータ](https://gitlab.com/gitlab-org/quality/engineering-analytics/finops-analysis/-/issues/143#note_1857740713)を取得できますが、多大な時間と労力がかかります。
誰が定期的にシステムを使用しているか、何のために使用しているかが分かりません。データを使用しているのが誰かを把握できることで、クラスターの管理方法についてより良い判断ができます。
残念ながらチーム名にもかかわらず、システムの可用性の測定が欠けています。

#### 困難な管理と成長

Elastic Cloud ロギングシステムのみの管理でも、複数の異なるツール（[terraform](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/elastic-cloud?ref_type=heads)、[Jsonnet + CI](https://gitlab.com/gitlab-com/runbooks/-/tree/master/elastic/managed-objects?ref_type=heads)、[シェルスクリプト](https://gitlab.com/gitlab-com/runbooks/-/tree/master/elastic/api_calls/single?ref_type=heads)、Elastic Cloud UI）を使用しています。

[Cells](../cells/infrastructure/observability/)には、Dedicated に多少類似した独自のストーリーが必要です。

### GitLab Dedicated

Dedicated チームはロギングクラスターの管理の一部を移管したいと考えています。これは、きめ細かいアクセスに関する厳格なルールと RED データを含む一部のインデックスによって複雑になっています。

### GitLab Observability

Monitor:Observability チームには独自の[ロギング](../observability_logging/)ブループリントがあります。

## 将来の要件

### 一般的な要件

最も強いリクエストの 1 つが、より長い保持期間です。28 日間が理想的と考えていますが、エラーバジェットのデバッグなどのユースケースでは 30〜45 日間の保持レートで改善される可能性があります。

システムは管理が容易で、真実の情報源として Infrastructure as Code を使用する必要があります。

デバッグ問題をより容易にすることの重要性とコストのバランスをとる必要があります。

システムはログストレージに関するコンプライアンスまたは規制要件に適応するために十分柔軟である必要があります。

### 舗装された道

適切なログを出力することを容易にするためにツーリングを改善する必要があります。

- [GitLab ログの標準化されたロギングスキーマ](https://gitlab.com/groups/gitlab-org/-/epics/5059)
- [ログとメトリクスを出力するための標準化されたシステム](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793)

また、新しいロギングシステムをオンボードするための容易な方法と、使用するための標準化されたツールセットが確保されている必要があります。ロギングにアクセスするための周知の単一のガラスパネルがこの取り組みを助けます。

### きめ細かいアクセス

複数の異なるツールの重大な問題の 1 つは、きめ細かいアクセスのための単一の真実の情報源システムがないことです。OKTA を単一の真実の情報源として使用することは、GitLab が内部ツーリングにすでに使用しているものと一致します。これにより、アクセスリクエストのためにすでに設置されているシステムを使用でき、管理する必要があるアカウント数を制限できます。

### 監査

現在のロギング実装における最も重大なギャップの 1 つが監査です。ある期間にわたって誰がシステムにアクセスしているかを知る能力はありますが、何のためにシステムを使用しているかは分かりません。ログ出力ボリュームを詳細に監視する能力も欠けています。

ユーザーの行動とロギング行動の監査証跡を作成すれば、将来的にチャージバックの可能性が生まれます。

また、ログボリュームの重大な変化を監視することもでき、ログが非常に高価になる前に問題をキャッチできます。

### オブザーバビリティ

- 高可用性と測定: チームはすべてのコンポーネントの SLO を設定する必要があります。
- システムはキャパシティプランニングとエラーバジェットツールと連携して、システムが注意を必要とする時を示す必要があります。

## 決定が必要な事項

- Monitor:Observability チームと同様に活用および/または構築できますか？
- 集中型 vs 分散型？
- 購入 vs 構築？
- どのツールを使用すべきか？
- GitLab.com とセルフマネージドインストールの両方で機能するものを設計できますか？

## 次のステップ

### Monitor:Observability チームと統一されたオブザーバビリティ計画を作成する

Monitor:Observability チームにはいくつかのオブザーバビリティ関連のブループリントがあります: [オブザーバビリティ概要](../observability_for_self_managed/)、[ロギング](../observability_logging/)、[メトリクス](../observability_metrics/)、[トレーシング](../observability_tracing/)。

彼らのツーリングと私たちのツーリングのユースケースは異なり、GitLab.com はより複雑なシステムであり、平均的なセルフマネージドのお客様よりも堅牢なツーリングが必要であることを認識しています。そのことを念頭に置いて、可能な限りドッグフーディングを確実に行うために彼らと緊密に協力する必要があります。

ここにリストされている一部の取り組み（ログの構造を改善するなど）はすべてのお客様に恩恵をもたらす可能性があり、一緒に取り組むべきことです。

### 使用する正しいツールを決定する

現在使用しているツールと市場で入手可能なツールを徹底的に調査し、より少ない数に絞り込んで、いくつかのオプションのみを標準化するべきです。その後、提案された各ツールのプルーフオブコンセプトを作成し、徹底的にテストします。

#### 構築 vs 購入？

これは適切なツールを見つけたら答える質問です。

#### 集中型 vs 分散型？

集中型アクセスポイントがおそらく正しいソリューションであり、すべてのロギングプラットフォームにアクセスするための単一のガラスパネルを持つことができます。これにより、誰がシステムを何のために使用しているかの監査ログを作成するための単一の場所も確保できます。Grafana をその SPOG にすることが理にかなっているかもしれませんが、使用するツールがその決定に影響します。

### ロギングの標準を作成し、アプリケーションが正しいことを簡単にできるようにする

構造化ロギングシステムスキーマを設計して、ログをより使いやすくし、GitLab 内のアプリケーションに対して[適切なツーリング](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793)を作成して、できるだけ少ない労力で正しい形式で正しいシステムに出力できるようにする必要があります。正しいことが容易であれば、人々はデフォルトでそれを行うようになります。これには、フィーチャーを作成・維持するステージチームに対する組織的なバイインとトレーニングが必要です。

### シンプルな統合

サービスオーナーが私たちのロギングソリューションをマネージドサービスとして使用することが簡単であるべきです。
