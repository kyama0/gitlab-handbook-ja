---
title: "FinOps 用語集"
description: "Cloud Cost Utilization チームが FinOps の機会、クラウドコストデータ、コスト配分、コスト帰属に使用する用語の定義"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/cloud-cost-utilization/glossary/"
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-06T14:27:25+01:00"
translated_at: "2026-11-07T00:25:45.563460+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

この用語集は、[Cloud Cost Utilization（CCU）チーム](_index.md)が FinOps の機会、クラウドコストデータ、コストの配分と帰属に使用する用語を定義します。Issue、ハンドブックページ、レポートでこれらの用語を使用し、用語や数値がどこに登場しても同じ意味になるようにしてください。

[FinOps Open Cost and Usage Specification（FOCUS）](https://focus.finops.org/)に由来する用語には、FOCUS での意味を使用します。

## FinOps の機会とその成果 {#finops-opportunities-and-their-outcome}

### FinOps {#finops}

エンジニアリング、財務、事業の各部門が共同で、クラウド支出を可視化し、説明責任を明確にして、効率化する取り組みです。より広い定義については、[FinOps Foundation](https://www.finops.org/introduction/what-is-finops/)を参照してください。GitLab では、CCU チームがクラウドインフラストラクチャに対するこの取り組みを推進します。

### FinOps の機会 {#finops-opportunity}

GitLab のクラウドインフラストラクチャへの支出を減らす、または同じ支出からより多くの価値を得る変更です。そのような変更の総称で、`FinOps::Opportunity` ラベルに由来します。単に「機会」と言う場合は、FinOps の機会を意味します。各機会は GitLab Issue で追跡し、[機会のステージ](#opportunity-stages)を進めます。[FinOps の機会](opportunities.md)を参照してください。

機会には次の 3 種類があります。

- [ランレート](#run-rate)を削減する機会です。たとえば、リソースの適正化、アイドルリソースの削除、より安価なストレージクラスへの変更です。その成果は[ランレート削減](#run-rate-reduction)です。
- [効率化](#efficiency)の機会です。
- [コスト回避](#cost-avoidance)の機会です。

### 機会のステージ {#opportunity-stages}

FinOps の機会が進むステージは Proposed、Confirmed、Committed、Implemented、Realized です。取り組まないと決めた場合は Discarded になります。各ステージには `FinOps::Opportunity::<Stage>` スコープ付きラベルがあります。各ステージの意味と、誰が機会を次のステージに進めるかについては、[ステージ](opportunities.md#stages)を参照してください。

### ランレート {#run-rate}

現在の使用量と価格に基づく、サービスまたはクラウド請求全体の月額コストです。年換算すると、月額の 12 倍になります。

### ランレート削減 {#run-rate-reduction}

私たちが目指す成果であり、FinOps の機会を追跡するための数値です。検証済みのサービス月額コスト削減額を 12 倍し、年間の米ドル額で表します。これはエンジニアリング上の数値です。

担当チームが機会の[ステータスノート](#status-note)に見積もりを記録し、FinOps が変更対象の[実効コスト](#effective-cost)を変更前後で比較して、請求データから結果を検証します。ランレート削減は変更ごとに総額で計上し、削減効果を後退させる増加分は相殺せずに併記します。

機会の成果を説明するときは、「コスト節約」ではなく「ランレート削減」と表現してください。

### 当会計年度内のランレート削減 {#in-year-run-rate-reduction}

ランレート削減のうち、当会計年度に実現する部分です。年間ランレート削減額に、変更の実装後から会計年度末までの残り日数を掛け、365 で割ります。

### 節約額 {#savings}

財務上の数値です。[年間事業計画（AOP）](#annual-operating-plan-aop)の予算から実際のコストを差し引き、月次決算時に一度だけ計上します。月次決算までは見積節約額です。節約額には比較対象となる予算が必要です。ランレートを削減しても、最終的に AOP を超過する場合があります。

節約はすべてランレート削減ですが、ランレート削減のすべてが節約になるわけではありません。迷う場合は、ランレート削減と表現してください。

### コスト回避 {#cost-avoidance}

私たちが先に対策したために、請求に至らなかったコストです。たとえば、ガードレールや自動化によって無駄の発生を防ぐことです。コスト回避は独立した項目で計上し、ランレート削減の目標には決して算入しません。請求額には、比較対象となる「対策前」がないためです。回避したコストが AOP に計画されていた場合は、節約額としても表れます。

### 効率化 {#efficiency}

既存のノードプールの利用率向上など、同じ支出でより多くのサービスを提供する FinOps の機会の種類です。請求額が下がらなくても該当します。

### 年間事業計画（AOP） {#annual-operating-plan-aop}

計画されたクラウド支出を含む、会計年度の予算です。節約額はこの予算を基準に測定します。

### 純新規の取り組み {#net-new-initiative}

新しい機能や実験など、まだランレートに含まれていない既知のコストです。AOP では独立した項目になり、それに合わせて AOP を調整する必要があります。また、しきい値を超える場合は、FinOps と Financial Planning and Analysis（FP&A）の正式な承認が必要です。開始時にランレートの一部になります。その項目の範囲内に収まっている限り、ランレート削減を後退させる増加分としては計上しません。

### ベースライン {#baseline}

機会の対象となるリソースの、変更前の現在のコストまたは使用量です。機会の Issue に測定方法を記載します。

### ステータスノート {#status-note}

機会の Issue に投稿する、`## FinOps status` を見出しとする社内ノートです。機会の現在の状況とランレート削減の見積もりを、決まった形式で記録します。最新のノートが現在のステータスです。[ステータスノートの形式](opportunities.md#status-note-format)を参照してください。

### 担当チーム {#owning-team}

[サービスカタログ](#service-catalog)に記録されている、機会の対象となるインフラストラクチャリソースを所有するチームです。その Engineering Manager が変更の実施を約束します。

## クラウドコストデータ {#cloud-cost-data}

### FOCUS {#focus}

[FinOps Open Cost and Usage Specification](https://focus.finops.org/)は、クラウド請求データのオープン標準です。Google Cloud と AWS の請求データは、FOCUS 1.2 形式で [Engineering Data Warehouse](#engineering-data-warehouse)に取り込まれるため、両プロバイダーは 1 つのスキーマを共有します。

### 明細項目 {#line-item}

クラウドプロバイダーの請求データの 1 行です。1 つの SKU、リソース、期間に対する料金を示します。コスト配分とラベルコンプライアンスは、明細項目ごとに評価します。

### 実効コスト {#effective-cost}

明細項目の FOCUS `EffectiveCost` です。前払いの利用確約購入費の配賦分を含む、割引とクレジットを適用した後の償却後コストです。私たちのレポートでは、時期が異なっても比較できる実効コストを使用します。

### 請求コスト {#billed-cost}

明細項目の FOCUS `BilledCost` です。その項目について請求された金額です。利用確約の購入は、その対象となる使用量に分散されず、請求時に請求コストとして表れるため、傾向の把握には実効コストほど適していません。

### 定価コスト {#list-cost}

明細項目の FOCUS `ListCost` です。交渉による割引を適用する前の、公開定価でのコストです。定価コストと実効コストの差が、割引の価値を示します。

### 確約利用割引（CUD） {#committed-use-discount-cud}

1 年間または 3 年間、一定額の支出または一定量のリソース使用を確約する代わりに受けられる Google Cloud の割引です。AWS は同等のリザーブドインスタンスと Savings Plans を提供しています。FOCUS では、これらをすべて確約割引と呼びます。

### Engineering Data Warehouse {#engineering-data-warehouse}

Production Engineering が所有する BigQuery データウェアハウスです。クラウド請求データ（`gitlab-infra-data.cloud_cost`）と、それを基に構築したモデルを保持し、CCU チームのレポートにデータを提供します。

## コストの配分 {#allocating-cost}

### コスト配分 {#cost-allocation}

請求明細項目に分類ルールを適用し、クラウド支出をコストバケットとサービスに分配することです。コスト配分は「このバケットやサービスにいくらかかるか」、またサービスカタログを通じて「どのチームがこのコストを担当するか」に答えます。

### 分類ルール {#classification-rule}

`gl_service` ラベル、クラウドサービス、SKU などによって、請求明細項目をコストバケットに割り当てるルールです。ルールは優先順位に従って適用し、最初に一致したものを採用します。

### コストバケット {#cost-bucket}

分類ルールによって明細項目を割り当てるカテゴリです。たとえば `service_catalog`、`networking`、`gke_cluster` です。

### `gl_service` ラベル {#gl_service-label}

[サービスカタログ](#service-catalog)内のサービスを示す、リソースまたはプロジェクトのラベルです。`service_catalog` コストバケット内で、コストをサービスごとに分けます。[ラベリング戦略](labeling-strategy.md)を参照してください。

### ラベルコンプライアンス {#label-compliance}

明細項目にラベリング戦略で必要とするラベルが付いているか、またはネットワーキングやサポートなど、ラベルが不要なバケットのいずれかに該当するかを示します。[ラベリング戦略への準拠](labeling-strategy.md#compliance-with-this-strategy)を参照してください。

### サービスカタログ {#service-catalog}

GitLab.com のサービス、その所有者、チームの一覧です。[runbooks リポジトリ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)で管理し、Engineering Portal に表示します。

### 未配分コスト {#unallocated-cost}

どの分類ルールにも一致しなかったコストです。コストバケット、サービス、帰属モデルのいずれにも到達しません。

## コストの帰属 {#attributing-cost}

### コスト帰属 {#cost-attribution}

帰属モデルを使って、コスト境界からレポートの切り口へコストを結びつけることです。現在の切り口は製品の機能カテゴリです。コスト帰属は「GitLab の機能の運用にいくらかかるか」に答えます。[クラウドコスト帰属の設計ドキュメント](/handbook/engineering/architecture/design-documents/cloud_cost_attribution/)を参照してください。

### コスト境界 {#cost-boundary}

分類ルールで区切られる明細項目の集合です。コストバケット、または `service_catalog` バケット内の 1 つのサービスを指します。帰属モデルの出発点となる単位です。

### レポートの切り口 {#reporting-dimension}

GitLab のステークホルダーが知見を得るために必要とする、クラウドコスト総額の分類方法です。たとえば、サービス別、所有者別、機能別、顧客別です。

### 帰属モデル {#attribution-model}

サービスのコストを機能カテゴリ間で分割する方法です。サービス所有者がメトリクスカタログで、サービスごとに 1 つのモデルを宣言します。

- **直接**：サービスが提供する機能カテゴリが 1 つだけです。
- **比例**：`feature_category` ラベルを持つ使用量メトリクスに従って配分します。
- **加重**：使用量メトリクスで分割を把握できない場合に、サービス所有者が合意した機能カテゴリごとの固定比率で配分します。
- **なし**：サービス所有者が、適用できるモデルはないと判断し、その理由を記載しています。

### 未帰属コスト {#unattributed-cost}

コスト境界内で、どの帰属モデルでも説明されないコストです。境界にモデルがない場合（`networking` など、バケット全体を対象とする境界の場合）や、モデルが使用量の一部しか対象にしていない場合に生じます。独立した合計としてレポートし、機能カテゴリには配分しません。
