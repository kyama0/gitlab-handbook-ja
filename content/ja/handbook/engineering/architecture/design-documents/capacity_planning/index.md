---
title: "GitLab Dedicated のキャパシティプランニング"
status: implemented
creation-date: "2023-09-11"
authors: [ "@abrandl" ]
coach: "@andrewn"
approvers: [ "@swiskow", "@lmcandrew", "@o-lluch" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/capacity_planning/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">implemented</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/abrandl" class="text-blue-600 hover:underline">@abrandl</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/andrewn" class="text-blue-600 hover:underline">@andrewn</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/swiskow" class="text-blue-600 hover:underline">@swiskow</a>, <a href="https://gitlab.com/lmcandrew" class="text-blue-600 hover:underline">@lmcandrew</a>, <a href="https://gitlab.com/o-lluch" class="text-blue-600 hover:underline">@o-lluch</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2023-09-11</td>
</tr>
</tbody>
</table>
</div>


## サマリー

このドキュメントは、[FY24-Q3 OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/3507) として始まった GitLab Dedicated テナント環境向けインフラのキャパシティプランニングをどのようにセットアップする計画かを概説します。

私たちは、GitLab.com インフラリソースの飽和予測の知見を提供するために構築したツール [Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland) を活用します。
私たちは Tamland を GitLab Dedicated スタックの一部に含め、テナント環境内から予測を実行することを提案します。

Tamland は SLO 違反とその発生日を予測し、これらのレビューと対応が必要となります。
チーム編成の観点では、Dedicated チームが Tamland のテナント側セットアップと予測される SLO 違反を所有することを提案し、Scalability::Observability チームが Dedicated 向けを含むキャパシティプランニングのさらなる開発、ドキュメント化、全体的なガイダンスを推進する支援とガイダンスを行います。

このセットアップにより、Dedicated テナントを含むさまざまな環境で利用できる、より汎用的なツールへ Tamland を進化させることを目指します。
長期的には、Tamland をセルフマネージドインストールに含めることや、オープンソースリリースの候補とすることを考えています。

## 動機

### 背景: GitLab.com のキャパシティプランニング

[Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland) は [Observability チーム](../../../infrastructure-platforms/production-engineering/observability/) が所有するインフラリソース予測プロジェクトです。
これは、[SOC 2 のもとで管理された活動](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/observation-management/-/issues/604) として、GitLab.com のキャパシティプランニングを実装しています。
現時点では、数百のモニタリング対象インフラコンポーネント全体で迫る SLO 違反を予測するために、GitLab.com 専用に利用されています。

Tamland は、予測プロット、予測される違反に関する情報、その他モニタリング対象コンポーネントに関する情報を含む [レポート](https://gitlab-com.gitlab.io/gl-infra/tamland/intro.html) (社内リンク、GitLab Pages にホスト) を生成します。
予測された SLO 違反は、GitLab.com の [キャパシティプランニング用 issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/capacity-planning/-/boards/2816983) でキャパシティ警告 issue が作成される結果となります。

現時点では、Tamland は GitLab.com 向けに完全にカスタマイズされた特殊なものになっています:

1. GitLab.com 固有のパラメータと前提が Tamland に組み込まれています
1. 私たちは Tamland を、GitLab.com 専用に単一の CI プロジェクトから実行しています

[Tamland をツール化する](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1106) ことで、より汎用的に利用でき、GitLab.com 固有のものから独立させる作業が継続中です。

例として、`patroni-ci` という PostgreSQL サービスの `disk_space` リソースの飽和予測プロットを以下に示します。
90 日の予測期間内に、`soft` SLO (85% の飽和に設定) の違反を予測しており、これにより [キャパシティプランニング issue](https://gitlab.com/gitlab-com/gl-infra/capacity-planning/-/issues/1219) が作成され、さらなるレビューと対応の可能性が検討されました。
現時点では、Scalability::Observability グループがこれらの issue をレビューし、該当サービスの DRI と連携して飽和の懸念に対処しています。

<img src="/images/engineering/architecture/design-documents/capacity_planning/image-20230911144743188.png" alt="image-20230911144743188" style="zoom:67%;" />

GitLab.com のキャパシティプランニングでは、GitLab.com の飽和率と利用率メトリクスを提供する中央 Mimir へのアクセスを持つスケジュール CI パイプラインから Tamland を運用します。
CI パイプラインは目的のレポートを生成し、それを GitLab Pages に公開し、キャパシティプランニング issue も作成します。
Scalability::Observability はキャパシティプランニングのトリアージローテーションを運用しており、オープン issue とそれぞれの飽和懸念をレビュー・優先順位付けします。

### 課題の説明

[GitLab Dedicated](https://about.gitlab.com/dedicated/) のデプロイ数の増加に伴い、Dedicated テナント向けのキャパシティプランニングプロセスを確立する必要があります。
これにより、リソースが飽和してインシデントを引き起こす前に、特定のテナントのインフラをアップグレードできるよう、保留中のリソース制約を十分早く察知できるようになります。

各 Dedicated テナントは隔離された GitLab 環境であり、フルセットのメトリクスがモニタリングされています。
これらのメトリクスは [メトリクスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/reference-architectures/get-hybrid/src/gitlab-metrics-config.libsonnet?ref_type=heads) で標準化されており、その上で各 SLO とともに飽和メトリクスを定義しています。

各テナントの飽和メトリクスにキャパシティプランニングと予測を提供するため、GitLab Dedicated 用に Tamland をセットアップしたいと考えています。

Tamland は Scalability::Observability によって開発されており、このチームは GitLab.com のキャパシティプランニングプロセスも所有していますが、Dedicated 環境では強い隔離を実装しているので、Dedicated インフラへのアクセスを持っていません。
そのため、技術設計上の選択がそれらのチームの相互作用に影響し、その逆も同様です。組織的な側面が重要な部分なので、この検討事項をこのドキュメントに含めます。

### 主要な疑問

1. Tamland は各テナントの Prometheus データへどのようにアクセスするか?
1. Tamland はどこで実行され、どのようにスケールさせるか?
1. 結果として得られる予測データはどこに保存するか?
1. 予測をどのように消費するか?

### ゴール: イテレーション 0

1. Tamland は Dedicated テナントと GitLab.com の飽和イベントを別々に予測できる十分な柔軟性を持つ
1. 各 Dedicated テナントに対して、少なくとも週次で予測が実行される
1. Tamland の出力は予測データのみ (プロット、SLO 違反日など — レポートや issue 管理は行わない、後述)
1. Tamland は出力データを S3 バケットに保存し、後で検査できるようにする

### ゴール: イテレーション 1

イテレーション 0 では、GitLab Dedicated 環境に Tamland を統合し、各テナントの予測データを定期的に生成し始めました。

このデータを消費し、アクション可能にするため、このイテレーションでは GitLab Dedicated 向けのレポート機能を提供することに焦点を当てます:
すべてのテナントの個別 Tamland レポートを含む静的サイトを生成し、GitLab Pages にデプロイします。

テナントごとのレポートを生成するには、デフォルトの Tamland レポートを使用します。
将来のイテレーションでは、GitLab Dedicated のニーズに合わせて特化された別のタイプのレポートを提供したいかもしれません。

### ゴール: イテレーション 2

予測される SLO 違反に対する認識を高めるため、Tamland には GitLab issue トラッカーを管理し、キャパシティ警告に対する issue を作成する機能があります。
たとえば、私たちはこの機能を [`gitlab-com` キャパシティプランニングトラッカー](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues) を使った GitLab.com のキャパシティ警告管理に利用しています。

GitLab Dedicated テナントについても、`gitlab-dedicated` キャパシティプランニングトラッカーを同様に使用することを提案します:
合理的な信頼度で予測される各 SLO 違反に対して、このトラッカー上にキャパシティ警告 issue を作成し、異なるテナントの警告を区別するためにスコープラベルを使います (詳細は後述)。

### 非ゴール

#### 予測モデルのカスタマイズ

予測モデルは、正確な予測を生成するために、ドメイン知識でチューニング・通知できますし、すべきです。
この情報は Tamland マニフェストの一部です。
最初のイテレーションでは、テナントごとのカスタマイズはサポートしませんが、後で追加できます。

## Dedicated 向け提案デザイン: Dedicated スタックの一部として

Dedicated 環境は完全に隔離されており、飽和メトリクスを含むメトリクスを取得するために独自の Prometheus インスタンスを実行しています。
Tamland は各個別の Dedicated テナント環境から実行され、Prometheus からメトリクスを消費し、結果のデータを S3 に保存します。
そこから予測データを消費し、対応します。

![dedicated-capacity-planning-forecasting](/images/engineering/architecture/design-documents/capacity_planning/dedicated-capacity-planning-forecasting.png)

### 予測の生成

#### 出力およびキャッシュ用のストレージ

Tamland が依存するすべてのデータは S3 バケットに保存されます。
テナント間でデータを明確に分離するため、テナントごとに 1 バケットを使います。

1. 結果として得られる予測データおよびその他の出力
1. Prometheus メトリクスデータ用の Tamland 内部キャッシュ

S3 バケット以外に、Tamland の実行間にわたる永続的な状態は必要ありません。

#### テナント環境内で実行することのメリット

単一環境 (テナント) に対する各 Tamland 実行には、数時間かかる場合があります。
テナント数が大幅に増加することが予想されるので、Tamland 実行環境のスケーリングを検討する必要があります。

このデザインでは、Tamland は Dedicated スタックの一部となり、個別テナント環境のコンポーネントとなります。
そのため、Tamland 実行環境のスケーリングは設計上解決されています。テナント予測はそれぞれの環境で本質的に並列に実行されるからです。

#### 配布モデル: Docker + Helm chart

Tamland は Helm chart とともに Docker イメージとしてリリースされています。詳細は [Tamland の README](https://gitlab.com/gitlab-com/gl-infra/tamland/-/blob/main/README.md) を参照してください。

#### Tamland マニフェスト

マニフェストには、どの飽和メトリクスを予測するかに関する情報が含まれます (GitLab.com の [マニフェスト例](https://gitlab.com/gitlab-com/gl-infra/tamland/-/blob/62854e1afbc2ed3160a55a738ea587e0cf7f994f/saturation.json) を参照)。
これはメトリクスカタログから生成され、当初はすべてのテナントで同じになります。

メトリクスカタログからマニフェストを生成するため、専用の GitLab プロジェクト `tamland-dedicated` をセットアップします。
定期的にスケジュールパイプラインがメトリクスカタログを取得し、そこから JSON マニフェストを生成して、プロジェクトにコミットします。

Dedicated テナントでは、`tamland-dedicated` からコミットされた JSON マニフェストの最新バージョンをダウンロードし、これを Tamland 実行の入力として使用します。

### キャパシティプランニングレポートとキャパシティ警告

Tamland の予測データに基づいて、予測情報を表示し、チームが GitLab issue トラッカーにキャパシティ警告を作成してキャパシティ警告に対応できるようにするレポートを生成します。

![dedicated-capacity-planning-reporting](/images/engineering/architecture/design-documents/capacity_planning/dedicated-capacity-planning-reporting.png)

Scalability::Observability チームは [`gitlab-dedicated` という社内 GitLab プロジェクト](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated) をメンテナンスしています。
このプロジェクトには、[GitLab Pages にデプロイされる静的サイト (社内のみ利用可能)](https://gitlab-com.gitlab.io/gl-infra/capacity-planning-trackers/gitlab-dedicated/) を定期的に生成するスケジュール CI パイプラインが含まれています。
また、このプロジェクトの issue トラッカー内でキャパシティ警告を作成・管理する機能も含まれています。

このプロジェクトの CI 設定には、テナントの一覧と、それぞれのメタデータ (例: AWS アカウント、コードネームなど) が含まれます。

設定された各テナントに対して、CI パイプラインは amp アカウントの中央 IAM ロールを使用します。
このロールから、テナント固有の IAM ロールを引き受けることができ、これは該当テナントの予測データを含む S3 バケットへの読み取り専用アクセス権を持ちます。

CI パイプラインは各テナントに対して標準的な Tamland レポートを生成し、すべての個別レポートを単一の静的サイトに統合します。
このサイトは、テナント環境全体にわたるキャパシティ予測の知見への統一されたアクセスを提供します。

レポートとともに、CI パイプラインは予測される SLO 違反にも反応し、プロジェクトの issue トラッカーにキャパシティ警告 issue を作成します。
このトラッカーは *すべての* GitLab Dedicated テナントに対して使われるので、テナント環境を区別するために `~tenant:CN` ラベルを採用します (例: コードネーム C1 のテナントには `~tenant:C1` を使用)。
これらの issue には、影響を受けるテナントとコンポーネントに関する追加情報、予測、ステータス情報が含まれます。
ここでの意図は、予測される SLO 違反に対する可視性を作り、Dedicated チームがキャパシティ警告に直接関与できる方法を提供すること (例: 議論、作業のスケジューリングなど) です。

全体として、Dedicated チームと運用者は Tamland レポートと issue トラッカーを使ってキャパシティ警告に対応します。

開始するにあたり、Dedicated グループにはキャパシティ警告を定期的に確認してトリアージすることを提案します。
追加の可視性のため、新しいキャパシティ警告が作成された際に Slack 通知を送ることを検討してもよいかもしれません。

## 代替ソリューション

### Tamland as a Service (採用せず)

現時点でオプションとは見なしていない代替設計として、Tamland をサービスとしてセットアップし、テナント環境の **外部** で完全に実行する方法があります。

![dedicated-capacity-planning-as-a-service](/images/engineering/architecture/design-documents/capacity_planning/dedicated-capacity-planning-as-a-service.png)

このデザインでは、Tamland にメトリクスデータを提供する中央 Prometheus/Mimir インスタンスが必要です。
Dedicated テナントは remote-write を使って Prometheus データを中央 Mimir インスタンスにプッシュします。

Tamland は定期的に実行され、単一の Mimir インスタンスからメトリクスデータを消費するようにセットアップされます。
他のデザインと同様に、結果とキャッシュを S3 に保存します。

予測を定期的に実行するため、Tamland を実行する実行環境を提供する必要があります。
テナント数が増加するにつれて、このクラスタのリソースをスケールアップする必要があります。

このデザインは技術的および組織的な懸念から **採用されませんでした**:

1. FY24Q3 開始時点で、私たちの中央 Mimir インスタンスは Dedicated テナントのメトリクスデータを持っていません。
1. スケーラブルな実行環境のセットアップに追加作業が必要です。
1. Mimir はすべてのテナントのデータを提供するボトルネックとなり、多数のテナントの予測を実行するときに過負荷となるリスクがあります。
1. 私たちは Tamland をより汎用的なツールに進化させることを目指しています。サービスとして提供するのではなく、他のチームが利用できるツールとして構築することで、デザイン、ドキュメント、プロセス効率の面でより良い成果が期待できます。長期的には、Tamland (ツールとして) をセルフマネージド環境内に統合したり、Tamland をオープンソース予測ツールとして公開したりできるかもしれません。サービスとしてホストしていたら、これは実現不可能です。
