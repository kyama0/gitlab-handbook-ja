---
title: "Incent 技術文書"
upstream_path: /handbook/sales/field-operations/sales-systems/gtm-technical-documentation/incent/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T10:00:00Z"
translator: claude
stale: false
lastmod: "2024-09-20T14:00:23+00:00"
---

## この文書の使い方

以下の文書は、Salesforce から Xactly Connect を経由して Xactly Incent に至るデータの流れを理解できるように構成されています。

---

### 各要素の概要

- Salesforce は、ユーザー、アカウント、商談などの情報を Xactly に取り込んで報酬計算するための主要なソースシステムの 1 つです
- Xactly Connect は Xactly の一部で、Xactly 管理者と開発者が Salesforce から Xactly Incent へのデータの流れを整理するために作業する場所です。
- Xactly Incent は、エンドユーザーが報酬をモニタリングできる場所です。報酬チームによって構築された報酬プランなどと並ぶ Xactly Connect の最終出力が、Xactly Incent にフィードされます。

### Xactly Connect

- Xactly Connect のドキュメントは Xactly にログインしているユーザーのみがアクセス可能で、コミュニティポータル経由でアクセスできます。
- 主要な用語
  - Assets - Xactly で実行できる最小のアクションです。変数の設定からすべてのソースデータのクエリまで、シンプルなものから複雑なものまであります。
  - Pipelines - パイプラインは、Salesforce のソースデータから Incent への最終ロードまでの ETL プロセス全体を実行する一連の Assets、Email などです。
- 主要なパイプライン
  - `p_upload_process_SALES` - このパイプラインは、SDR（`p_upload_process_LGSAOM` を参照）を除く、商談および商談の Splits 経由で報酬を受け取るユーザーの ETL を処理します。
  - `p_upload_process_LGSAOM` - このパイプラインは主に、SDR が報酬を受け取る商談とイベントの ETL を処理します。
  - `p_shared_upload_orders` - 追加情報は今後追加予定
- パイプラインの構造
  - パイプラインは資産を共有することもあれば、共有しないこともあります。そのため、不要な結果を避けるためにレビューすることが重要です。さらに、incent のすべての領域に反映されるように、複数の場所で同様のクエリを更新することが重要な場合もあります。

### パイプラインの洞察と主要コンポーネント

- `p_upload_process_SALES`
  - `p_set_dynamic_variables`
  - `p_load_sourcedata_SALES` - データを `delta.sfdc_SALES_ACC_dump` テーブルと `sfdc_SALES_OPP_dump` テーブルに挿入
  - `p_transform_SALES` - データを SFDC ダンプテーブルから `delta.SALES_orders` テーブルに変換・移行し、そこから `delta.prestage_order_item` テーブルと `delta.prestage_order_item_assignment` テーブルへ
  - `p_shared_delete_staging_tables`
  - `p_order_validations_SALES` - 情報に対して多数のバリデーションを実行します。例: 同じ Id を持つ商談が二重にロードされないように確認します。検証エラーが発生しなかった場合、データをステージングテーブルにアップロードします。
  - `p_shared_upload_orders`
- `p_upload_process_LGSAOM`
  - `p_set_dynamic_variables` - 以下のテーブルにデータを挿入します: `delta.sfdc_LGSAOM_OPP_dump`、`delta.sfdc_LGSAOM_USR_dump`、`delta.sfdc_LGSAOM_OPPTM_dump`、`delta.sfdc_LGSAOM_EVENT_dump`
  - `p_load_sourcedata_LGSAOM` - sfdc_dump テーブルまたはこのパイプラインで作成されたテーブルから、以下のテーブルへデータを変換・移行します: `delta.trans_gen_SAO`、`delta.prestage_order_item`、`delta.trans_gen_Meetings`、`delta.prestage_order_item_assignment`
  - `p_transform_LGSAOM`
  - `p_shared_delete_staging_tables`
  - `p_order_validations_LGSAOM` - 情報に対して多数のバリデーションを実行します。例: 同じ Id を持つ商談が二重にロードされないように確認します。検証エラーが発生しなかった場合、データをステージングテーブルにアップロードします。
  - `p_shared_upload_orders`
- `p_shared_upload_orders` - 追加情報は今後追加予定
