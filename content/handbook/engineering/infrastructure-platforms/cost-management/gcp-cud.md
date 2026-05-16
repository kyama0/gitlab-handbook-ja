---
title: "GCP CUD"
description: "GCP コミット使用割引"
upstream_path: /handbook/engineering/infrastructure-platforms/cost-management/gcp-cud/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T15:53:35Z"
translator: claude
stale: false
lastmod: "2025-07-04T16:26:48+00:00"
---

---

### GCP のコミット使用割引とは？

Google コミット使用割引（Committed Use Discounts）とは、特定のタイプおよびリージョンの一定量のサーバーに対して 1 年または 3 年の期間コミットすることで、コンピューティングレートを削減する方法です。使用するかどうかに関わらずこのコストを支払いますが、オンデマンドのサーバーレートと比較して大幅に割引されたレートが適用されます。これは AWS のリザーブドインスタンスやコンピュートセービングプランに相当します。

- [CUD の説明](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts)
- [CUD の制約](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#restrictions)

#### CUD のディメンション

CUD はプロジェクト間で共有できますが、CUD が分割されるディメンションは以下のとおりです。

- リージョン
- マシンタイプ
- コストタイプ（CPU vs RAM）

### CUD の追跡

- 現在の CUD の概要は [Sisense](https://app.periscopedata.com/app/gitlab/848796/WIP:-GCP-CUD-Overview) で確認できます

- Infra では、[CUD](/handbook/engineering/infrastructure/performance-indicators/#gcp-cud-coverage-) で総適格コンピュート使用量の 80% 以上をカバーするための PI があります

### GCP CUD 購入承認プロセス

#### 1. 新規リクエストに関連する詳細を CUD 分析テンプレートに記入する

[CUD 分析テンプレート](https://docs.google.com/spreadsheets/d/1yAIpX875Mjcq-DfuyFi4C-y5FaWGoAvoHmW6qHj9Rlc)（内部）

CUD 分析では、他のコミットメントが終了しないと仮定します。CUD の更新は、新規および既存のカバー使用量の CUD を混同しないよう、別の分析として検討する必要があります。

#### 2. Finance の新規 GCP CUD Issue テンプレートに記入する

コミット期間中に使用量に大きな変更を予期していないことを確認できるよう、変更によって大きな影響を受けるエンジニアリングマネージャーを含めてピングしてください。ステップ 1 のスプレッドシートを Issue に含めてください。

テンプレートにはコミットの詳細、重要な高レベルの財務詳細、およびコミットによって最も影響を受けるサービスに関するエンジニアリング詳細を含める必要があります。

コミットが検討される前に、インフラストラクチャアナリストはコミットされる使用量の大半を使用するチームと話し合い、コミット期間中に大きな変更が予定されていないことを確認する必要があります。これらのチームは Issue で CC され、懸念がある場合はその時点で表明します。

例 Issue: https://gitlab.com/gitlab-com/Finance-Division/finance/-/issues/4010

#### 3. 承認後、購入を実行する

Infra アナリストはリクエストを満たすのに十分なコミット済み CPU クォータがあることを確認し、Billing-Tools GCP プロジェクトでこの購入を実行する必要があります。

#### 4. CUD コミットメントにコミットを追加する

[CUD コミットメントスプレッドシート](https://docs.google.com/spreadsheets/d/1qwsrRidYsYgoEIbCA6VDhdZW_P6ljeYcLMcja2bhCtc)（内部）に追加する

#### 5. 予約設定

特定のノードタイプの予約は、[`config-mgmt` Terraform リポジトリ](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/main/environments/gprd/gcp-reservations.tf)で設定されています。CUD の効率的な利用を確保するために、インフラストラクチャで使用されているインスタンスの選択とともに、これを更新する必要があります。

#### 6. フォローアップ

チームがコミット期間中にコミットに影響する大きなインフラストラクチャの変更を計画している場合は、最初にインフラストラクチャアナリストに相談して影響を評価する必要があります。
