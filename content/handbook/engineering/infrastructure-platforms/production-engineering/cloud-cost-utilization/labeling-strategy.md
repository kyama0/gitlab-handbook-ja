---
title: "ラベリング戦略"
description: "GCP におけるコスト配分とリソース帰属のためのコアラベル"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/cloud-cost-utilization/labeling-strategy/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T01:48:37Z"
translator: claude
stale: false
lastmod: "2026-04-02T10:26:48+02:00"
---

## 概要

このページでは、コスト配分と帰属戦略に対して*準拠している*と見なされる要件を定義します。


{{% alert color="warning" %}}
このドキュメントのスコープは GCP のみです。
{{% /alert %}}


このページでは、リソースとプロジェクトに必要なラベルを記載しています。
これらの要件は[インフラストラクチャラベルとタグ](/handbook/company/infrastructure-standards/labels-tags/)標準のサブセットです。

### この戦略へのコンプライアンス

コンプライアンスは GCP 請求の*明細項目*レベルで評価されます。

明細項目は、以下のいずれかのバケット（詳細は後述）に該当する場合、*準拠している*と見なされます:

1. サービスカタログへの有効な参照を持つリソースレベルの `gl_service` ラベル
2. サービスカタログへの有効な参照を持つプロジェクトレベルの `gl_service` ラベル
3. 一般的なネットワーキングコスト: `service.description = 'Networking'`
4. サポートコスト: `service.description = 'Support'`
5. コミットメント使用割引（CUD）コスト: `sku.description LIKE '%commit%'`

明細項目はこの優先順位で評価され、最初に一致したバケットが適用されます。

### サービスカタログに基づく配分

この戦略の主な目的は、明細項目を[GitLab サービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)のサービスに関連付けることです。

カタログ内のサービスを参照するために `gl_service` ラベルを使用します。このラベルにより以下が可能になります:

- **コスト配分** - どのサービスがコストを発生させているかを把握する
- **リソース帰属** - 所有権と運用責任を特定する

ラベルは 2 つのレベルで定義できます:

1. **リソースレベル**: 最も詳細で推奨される方法
2. **プロジェクトレベル**: リソースレベルのラベルが存在しない場合の GCP プロジェクト全体へのフォールバック

プロジェクトレベルのラベルは、個々のリソースにラベルを付けることなく、すべてのプロジェクトコストを 1 つのサービスに帰属させるより迅速な方法を提供します。

単一のサービスへの明確なマッピングを持つすべてのプロジェクトには、プロジェクトレベルの `gl_service` ラベルを付ける必要があります。これにより、非リソースコスト（例: ネットワーキング）も正しいサービスに帰属されます。

#### 実装方法

すべてのサービスは以下を実施する必要があります:

- [GitLab サービスカタログ](https://gitlab.com/gitlab-com/runbooks/blob/master/services/service-catalog.yml)にエントリを持つこと
- Terraform で管理され、リソースとプロジェクトにラベルが適用されていること

**サービスカタログへのサービスの追加または更新**

新しいサービスを追加または既存のサービスを更新するには、[サービスカタログドキュメント](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/README.md?ref_type=heads)に従ってください。参考として、新しいチームとサービスを追加する[MR の例](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/10145/diffs)をご覧ください。

**Terraform を使用した既存インフラへの `gl_service` ラベルの追加**

既存のインフラに `gl_service` を追加するには、関連する Terraform 設定を更新してください。参考として、この[MR の例](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/merge_requests/12985/diffs?commit_id=ea659632c3c3c66b80893faaec17e69a72cd8611)をご覧ください。

値は GitLab サービスカタログのエントリを参照する必要があります。値の例:

- `ci-runners` - GitLab Runner サービス
- `ci-jobs-api` - CI Jobs API サービス
- `frontend` - フロントエンドアプリケーションサービス
- `patroni-ci` - CI 用 Patroni クラスター

> 有効なサービスカタログエントリの完全なリストは[サービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)を参照してください。サービスがまだ存在しない場合は、[カタログへの追加](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/README.md?ref_type=heads)を検討してください。

### 非リソースコスト: ネットワーキング、サポート、その他

ネットワーキングおよびサポート関連のコストにはリソースラベルを付けることができません。

プロジェクトレベルの `gl_service` ラベルを使用して、これらのコストをサービスに関連付けることは可能です。
ただし、汎用プロジェクト（例: `gitlab-production`）の場合、プロジェクトとカタログ内のサービスの間に 1 対 1 のマッピングはありません。

これらのケースでは、ネットワーキングとサポートのコストを別々のバケット（上記リストの 3、4）を使用してキャプチャします。

これらのバケットはサービスに関連付けられておらず、明示的な所有者がいません。

#### コミットメント使用割引（CUD）

GCP コミットメント使用割引（CUD）は、割引価格と引き換えに最低限のリソース使用量にコミットする長期的なコミットメント（通常 1 年または 3 年）です。CUD 関連の請求明細項目は、SKU の説明に「commit」という単語が含まれていることで識別されます（大文字・小文字を区別しないマッチング）。

**分類ルール:** `cud`（優先度 5）

**請求データにおける CUD コストの表示方法:**

- CUD コストは、GCP 請求エクスポートに対して `sku.description LIKE '%commit%'` をマッチングすることで識別されます。
- これらの明細項目は、GCP がオンデマンド価格を相殺するために適用するコミットメント料金と関連クレジットを表します。
- すべての CUD コストは `committed_use_discounts` コストバケットに配置され、**準拠している**とマークされます。

**請求コストと有効コストに関する重要な注意:**

GCP の請求エクスポートでは、請求コストと有効コストは現在、`cost + SUM(credits.amount)` として同一に計算されています。FinOps FOCUS 仕様によると、有効コストはコミットメント料金（CUD の前払い支払いなど）を、それらのコミットメントから恩恵を受ける個々の使用行に再配分する必要があります。ただし、GCP は現在、使用料金と並行してコミットメント費用を時間ベースで償却しており、この再配分を行っていません。その結果、コミットメント料金 SKU から対応する使用行へのコストの「移動」は、GCP のデータでは現在発生していません。GCP が FOCUS 仕様に合わせて請求エクスポートを更新した場合、この違いはより重要になります。

「その他」の非リソースコスト（バケット 5）は、本来関連するリソースを持たない特定の SKU に結びついた明細項目です（例: ライセンス料、コミットメント使用割引、またはプラットフォームレベルの課金）。これらのコストは、[SQLMesh カタログ](https://gitlab.com/gitlab-com/gl-infra/data/sqlmesh-catalog/-/tree/main/models/cloud_cost?ref_type=heads)で定義された SKU ベースのバケットルールに基づいて決定されます。これらのコストは、特定のサービスに帰属させることができないものの、明示的に識別・分類されているため、準拠していると見なされます。

## 関連ドキュメント

追加ラベルやレルム固有の要件を含む、インフラストラクチャラベルとタグの完全な標準については、[インフラストラクチャラベルとタグ](/handbook/company/infrastructure-standards/labels-tags/)ハンドブックページを参照してください。
