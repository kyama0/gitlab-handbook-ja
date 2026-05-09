---
title: "Application Security - キャパシティ指標、分類、ワークフロー"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/metrics/capacity/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## 概要

AppSec は[膨大な量と幅広い種類のタスクを管理しています](https://gitlab.com/gitlab-com/gl-security/appsec/appsec-team#team-capacity-planning-and-operational-work)。本ページでは、現在のワークロードを効果的に処理し、将来のニーズを計画できるよう、チームのキャパシティをどのように測定しているかを説明します。

質問や、より具体的な依頼で Application Security チームと連携する必要がある場合は、[FAQ](#faq) を参照してください。

### このデータからどのような意思決定が可能になりますか？

このデータの収集は、チームのキャパシティと人員ニーズに関する意思決定に役立ちます。これらのメトリクスは集計値としてのみ分析され、個々のチームメンバーのパフォーマンス評価には **使用されず**、参照もされません。チーム全体のダイナミクスと要件を理解するためにのみ利用されます。

### このデータに基づくチャートはどこにありますか？

キャパシティメトリクスは、こちらの [Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/appsectest2rawdata/AppSecGeneralDashboard?:iid=1)（社内向け）で確認できます。

### これらのメトリクスはどのくらいの頻度でレビューされますか？

各マイルストーン（毎月）の開始時に、AppSec チームと ProdSec リーダーシップとともに、これらのメトリクスのレビューをリードするのが AppSec チームマネジメントの責任です。

## 作業の種類による分類

各作業の種類を分類することで、どこにキャパシティの追加やその他の変更が必要かを正確に区別できます。

### 表

| ラベル    | 説明 |
| -------- | ------- |
| AppSecWorkType::ThreatModel | AppSec の脅威モデリング業務に関連する作業を示します |
| AppSecWorkType::JihuMRreview | AppSec の JiHu マージリクエストレビュー業務に関連する作業を示します |
| AppSecWorkType::AppSecReview | AppSec レビュー業務に関連する作業を示します |
| AppSecWorkType::KR | AppSec の OKR/KR 業務に関連する作業を示します |
| AppSecWorkType::FieldSecurity | Field Security からの依頼に関連する作業を示します（例: 顧客スキャンレビューの依頼）。_いつこのラベルを使うか?_ Field Security から顧客リクエストに関連する作業を依頼されたとき。 |
| AppSecWorkType::VATRotation | AppSec の Federal AppSec VAT 業務に関連する作業を示します |
| AppSecWorkType::FedAppSecRelCert | AppSec の Federal AppSec リリース認定およびマージモニターレビュー業務に関連する作業を示します |
| AppSecWorkType::SecurityMRReview | AppSec マージリクエストセキュリティレビュー業務に関連する作業を示します。_いつこのラベルを使うか?_ Engineering チームからセキュリティレビューを依頼されたすべての MR レビューで使用します。 |
| AppSecWorkType::TriageRotation | AppSec トリアージローテーションに関連する作業を示します。_いつこのラベルを使うか?_ トリアージローテーションの一環として処理しているすべての Issue（チームメンバーから、Depscore、SAST 通知など）で使用します。トリアージローテーション中にレビューを依頼された MR には _AppSecWorkType::SecurityMRReview_ を使用してください。 |
| AppSecWorkType::CustomerEscalation | 顧客がセキュリティ問題をエスカレーションした作業に関連することを示します |
| AppSecWorkType::SIRTandSecurityComms | SIRT インシデントおよび／またはセキュリティコミュニケーション作業に関連することを示します |
| AppSecWorkType::CrossTeamCollaboration | チーム横断での支援／コラボレーションに関連する作業を示します。_いつこのラベルを使うか?_ AppSec と他チーム間のコラボレーションを伴う作業の場合に使用します。 |
| AppSecWorkType::TeamProjects | チームプロジェクトに関連する作業を示します。_いつこのラベルを使うか?_ チーム関連の改善作業、新規または改善された自動化（バグ修正を含む）に対して使用します。 |
| AppSecWorkType::CriticalProjects | [クリティカルプロジェクト](/handbook/security/critical-projects/)に関連する作業を示します |
| AppSecWorkType::Operational | 上記のラベルでカバーされない他のすべてに使用します。_いつこのラベルを使うか?_ Issue で通知を受けたときや、上記のラベルがいずれも当てはまらないとき。 |

_PSIRT が現在使用しているラベル_

以下のラベルは、AppSec と PSIRT の分割後、PSIRT が使用しています。移行が完了するまでは参考としてここにマークされています:

| ラベル    | 説明 |
| -------- | ------- |
| AppSecWorkType::SecurityReleaseRotation | AppSec のセキュリティリリースタスク Issue 業務に関連する作業を示します |
| AppSecWorkType::VulnFixVerification | セキュリティリリース時のセキュリティ修正検証に関連する作業を示します（セキュリティリリースマネージャーローテーションラベル AppSecWorkType::SecurityReleaseRotation とは異なります） |
| AppSecWorkType::HackerAdmin | HackerOne 管理に関連する作業を示します |

_廃止されたラベル_

_以下のラベルは使用しないでください。古い Issue で目にすることがあるため、情報目的でのみ記載しています。_

| ラベル    | 説明 |
| -------- | ------- |
| AppSecWorkType::HackerOneRotation | AppSec の HackerOne 業務に関連する作業を示します |
| AppSecWorkType::ToolingsAndMaintenance | 私たちのツールおよび自動化に関連する作業を示します。_いつこのラベルを使うか?_ バグ修正、機能追加など、_既存_ の自動化の改善に取り組んでいる場合に使用します。 |

### SIRT インシデントによる影響を受けた作業

SIRT インシデントが発生すると、私たちのキャパシティに影響します。その影響を評価するため、チームメンバーは Issue にラベル `ImpactedBySIRTIncidents` を付与します。

### Dogfooding

MR や Issue を通じて有効化する各機能に `Dogfooding` ラベルを付与してください。

#### 誰がいつこのラベルを付与しますか？

タスクを担当する AppSec エンジニアは、Issue や MR とのやり取りを開始したらすぐに、このラベルを付与することが期待されます。

## 工数（Effort）分類

工数分類は、タスクを解決するために必要な労力レベルの見積もりであり、実際にかかった時間ではありません。`見積もりガイド` は参考となる指標であり、あくまでもガイドラインです。

### 表

| ラベル    | 重み | 分類 | 説明 | 見積もりガイド | 例 |
| -------- | ------ | ------- | ------- | ------- | ------- |
| AppSecWeight::trivial | 1 | Trivial | ほとんど労力を必要としない | 即時または即時に近い変更で Issue を解決 | ささいなドキュメント更新 |
| AppSecWeight::small  | 2 | Small | 単純明快な変更で、最小限の調査 | 約 0.5～1 日  | |
| AppSecWeight::medium | 3 | Medium | ある程度の調査やコラボレーションが必要  | 約 1～3 日 | |
| AppSecWeight::large | 5 | Large | かなりの調査とコラボレーションが必要 | 約 3～5 日 | |
| AppSecWeight::XLarge | 8 | XLarge | 非常に複雑で、解決にマイルストーンの大部分を要する | 約 5～10 日 | |
| AppSecWeight::Needs Refinement | 13 | Needs Refinement | Issue が過度に複雑で、Epic への昇格や、より小さな Issue への分解が必要 | N/A | |

#### 誰がいつこのラベルを付与しますか？

タスクを担当する AppSec エンジニアは、完了後に Issue や MR にこのラベルを付与することが期待されます。Issue がメトリクスに表示されるためには、次のラベルが必要です: `~"AppSecWorkType::<<type>>" ~AppSecWeight::<<weight>> ~"Application Security Team" ~"AppSecWorkflow::complete"` _に加えて_ マイルストーンが設定され、_かつ_ クローズされている必要があります。

## ワークフローラベル

これらのラベルは、Issue の現在のステータスを示します。

### 表

| ラベル    | 説明 |
| -------- | ----------- |
| AppSecWorkflow::new | これが新しい質問、MR レビュー、AppSec レビュー、または脅威モデリングのリクエストであることを示します。主に AppSec SLO ボットが使用します。 |
| AppSecWorkflow::planned | 作業がトリアージされ、スコープが定義され、割り当てられたマイルストーンで作業可能な状態であることを示します。 |
| AppSecWorkflow::in-progress | Issue が積極的に作業中、またはローテーションが進行中であることを示します。 |
| AppSecWorkflow::complete | 作業が完了した、またはローテーションが終了したことを示します。 |

#### 誰がいつこのラベルを付与しますか？

タスクを担当する AppSec エンジニアは、Issue の作業を開始または完了した時点でこのラベルを Issue に付与することが期待されます。

## FAQ

### キャパシティメトリクスに作業を含めるためにはどのラベルを追加すべきですか？

`Application Security Team`、`AppSecWorkType::`、`AppSecWorkFlow::` ラベルに加え、対応する `AppSecWeight::` ラベル、そして Issue にマイルストーンが割り当てられている必要があります。
