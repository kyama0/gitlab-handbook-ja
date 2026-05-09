---
title: 統合セキュリティリスク管理（USRM）プログラム
upstream_path: /handbook/security/security-observations-risk-management/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T14:00:00Z"
translator: claude
stale: false
---

## 目的

統合セキュリティリスク管理（USRM）プログラムは、効率を改善し、全体的な可視性を可能にし、セキュリティ推奨事項の採用率を向上させるために、セキュリティ観察事項、推奨事項、および発見事項の一貫した特定、文書化、優先順位付け、対処、および追跡を保証します。このプロセスは、組織全体のセキュリティリスク管理プロセスへのインプットとしても機能し、より迅速な意思決定を可能にします。

## 適用範囲

本プログラムは、Security 部門の推奨事項、発見事項、観察事項を支援するように設計されています。USRM プロセスへのさまざまなソースのオンボーディングは、適切な標準化とチーム間での成功した採用を確保するため、段階的なアプローチで展開されます。これらのソースは、その後個々の STORM リスクにマッピングされます。

カバレッジには特定されたソースが含まれます:

| # | プロジェクト | チーム | USRM フェーズ | 発見コーディネーター | Issue テンプレート |
|:-:| :------ | :--: |-----------| :--: |----------------|
| 1 | [Compliance Observations](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/observation-management/-/issues) | Sec Compliance | Phase 1 | Observation Manager | Existing or USRM |
| 2 | [Security Policy Exceptions](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance-and-field-security/governance/security-governance/-/issues?sort=created_date&state=all&label_name%5B%5D=ExceptionRequest&first_page_size=100) | Security Governance | Phase 1 | @davoudtu | Existing |
| 3 | [Product Risk Register](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_asc&state=opened&label_name%5B%5D=Department%3A%3AProduct%20Security&first_page_size=100) | ProdSec | Phase 1 | @jrinaudo | Existing or USRM |
| 4 | [TPRM Security Notices](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/third-party-vendor-security-management/-/issues/?sort=created_date&state=opened&label_name%5B%5D=TPRM%3ASecurity%20Notice&first_page_size=100) | Sec Risk | Phase 1 | Risk Manager |  Existing or USRM |
| 5 | [Vulnerabilities](https://gitlab.com/groups/gitlab-com/gl-security/product-security/vulnerability-management/-/issues/?sort=created_asc&state=opened&label_name%5B%5D=bug%3A%3Avulnerability&first_page_size=100) | Vuln Mgmt. | TBD | TBD  |  TBD |
| 6 | Incidents | SIRT | TBD |  TBD | TBD |
| 7 | [Red Team Recommendations (~RTRec::)](https://gitlab.com/gitlab-com/gl-security/security-operations/leadership/-/wikis/OffSec-Recommendations-Dashboard) | Red Team | Phase 1 | @madlake | USRM |
| 8 | [Inventory findings](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/issues) | Sec Architecture | TBD | @kylesmith2 | TBD |
| 9 | [Wiz Findings](https://app.wiz.io/p/production) | InfraSec | TBD | TBD | TBD |
| 10 | [Threat Intel Recommendations (~TIRec::)](https://gitlab.com/gitlab-com/gl-security/security-operations/leadership/-/wikis/OffSec-Recommendations-Dashboard) | Threat Intel | Phase 1 | @madlake | TBD |
| 11 | Signals Engineering (~SET::Signals-Improvement, SET::Detection-New, SET::Signal-Gap) | Signals Engineering | TBD | TBD |TBD |
| 12 | [GitLab vulnerabilities](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=bug%3A%3Avulnerability&first_page_size=100) | AppSec/Multiple | TBD |  TBD | TBD |
| 13 | Data Security Recommendations (~DataSec::consult) | DataSec | TBD |  TBD | TBD |
| 14 | Corp Sec Recommendations (~corpsec-metric::consult and ~corpsys-gitlab-com) | CorpSec | TBD |   TBD | TBD |
| 15 | Trust and Safety Contributions (~"Trust and Safety contribution") | T&S | TBD | TBD |  TBD |
| 16 | [Security Reviews](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/bau/-/issues/?sort=created_asc&state=all&search=Security+review&first_page_size=100&show=eyJpaWQiOiI0OTYiLCJmdWxsX3BhdGgiOiJnaXRsYWItY29tL2dsLXNlY3VyaXR5L3Byb2R1Y3Qtc2VjdXJpdHkvaW5mcmFzdHJ1Y3R1cmUtc2VjdXJpdHkvYmF1IiwiaWQiOjEzNjYzMDUzOH0%3D) | InfraSec | TBD  | TBD  | USRM |

## 役割と責任

| 役割 | RACI | 責任 |
|-----------------|------|-----------------------------------------------------------------------|
| Finding Identifier | C | セキュリティ発見事項に関してビジネスステークホルダーと相談し、専門的な推奨事項を提供し、修復にどのステークホルダーを関与させるべきかを決定します。修復が特定された発見事項を緩和することを検証する必要があります。 |
| Remediation Manager | R | アサインメントの確認、期日の設定、推奨事項で特定された要件を満たすための修復活動の微調整を含む、修復計画の実行を担当します。 |
| Business Risk Owner | A | 発見事項に関連する全体的なリスクについて説明責任を負います。修復するか、リスクを受け入れるかについての決定を下すことができます。 |
| Security Risk Owner | I | 発見事項の特定、修復計画、進捗状況について情報提供を受けます。 |
| Finding Coordinator | R | USRM プロセスが正しく従われていることを確認し、サービスレベルコミットメントが満たされていることを監視し、必要に応じてエスカレーションを行う責任があります。 |

### 権限マトリクス {#authority-matrix}

セキュリティ発見事項が特定された場合、優先順位に基づいて以下のマネジメントレベルに通知する必要があります。これらのマネージャーは、提案された修復アプローチに同意しない場合や、代替の対処がより適切であると判断した場合に介入する権限を持ちます。

| 発見事項の優先度 | Business Risk Owner 権限レベル | Security Risk Owner 権限レベル |
|---------------|--------------------------------|--------------------------------|
| **低（Priority 4）** | マネージャーレベル | マネージャーレベル（発信元のセキュリティチームから） |
| **中（Priority 3）** | ディレクターレベル | ディレクターレベル（発信元のセキュリティチームから） |
| **高（Priority 2）** | VP レベル | VP レベル（発信元のセキュリティチームから） |
| **重大（Priority 1）** | VP レベル | VP レベル（発信元のセキュリティチームから） |

## 手順

USRM のワークフローは以下の通りです:

![USRM Workflow](/images/security/usrm_workflow.png)

### サービスレベルコミットメント

これらのコミットメントは、プロセスの各フェーズに対する標準化されたタイミング期待値を確立します。これにより、すべてのセキュリティチーム間で一貫した応答時間が確保され、発見事項のライフサイクル中にいつアクションや応答を期待できるかについての明確な期待がビジネスステークホルダーに提供されます。

| フェーズ | 期間 |
|-------|----------|
| Issue オープン | - |
| 修復計画 | 4 営業日 |
| モニタリングセットアップ | 2 営業日 |
| 修復／クロージャー | 発見事項のソースと優先度による |

### 特定

Security の各チームには、独自に定義されたワークフローがあります。これらのワークフローの出力の 1 つは、アクションまたは修復を必要とする発見事項の特定です。優先順位を評価するために発見事項を正規化するため、以下のステップを完了する必要があります。

特定されると、発見事項はチームの標準フォーマットおよび Issue テンプレートに従って Issue として開かれるべきです。Finding Identifier は、関連する GitLab プロジェクトで Issue を開く責任があります。Finding Identifier は、必要なすべての情報、修復推奨事項を記入し、検証のために Remediation Manager に発見事項を提出します。Finding Coordinator は、発見事項をライフサイクル全体を通じて管理する責任があります。これには、関連するリスク Issue とのリンクを確保すること、Remediation Manager と発見事項を検証すること、すべての修復進捗を追跡すること、現在の情報とステータス更新で GitLab Issue を更新することが含まれます。各発見事項にはリスク評価が割り当てられ、これが修復の優先順位を決定します。

#### USRM Issue テンプレート

チームがセキュリティ発見事項を作成する際に使用できる標準化された [USRM 発見事項テンプレート](https://gitlab.com/gitlab-com/gl-security/security-templates/-/blob/main/.gitlab/issue_templates/usrm-template.md) が利用可能です。このテンプレートにより、すべての USRM 追跡発見事項間で一貫性が確保され、適切な追跡と管理に必要なすべてのフィールドが含まれます。

**主要なガイドライン:**

- 既存の Issue テンプレートを持つチームは、必要なすべての USRM フィールドとラベルが含まれている場合は、そのまま使用を続けることができます
- 既存のテンプレートがないソースには USRM テンプレートを使用すべきです
- 使用されるテンプレートにかかわらず、すべての発見事項には追跡とレポート作成のために必要な USRM ラベルが含まれている必要があります

#### 発見事項記述のドラフト作成ガイダンス

記述には、発見事項に関する誰が、何を、いつ、どこで、なぜ、どのように、を含めるべきです。レビューステップとして、この発見事項について何も知らなかった場合、その発見事項、特定された方法、および目標への影響を理解できるでしょうか？以下の 4Cs モデルの活用を検討してください:

- Condition - 現在の状態
- Criteria - ポリシー、要件、コントロール、規制などに基づく望ましい状態
- Cause - 観察事項の根本原因
- Consequence - 目標／資産への実際または潜在的な影響

Prod Sec 部門の追加の役立つリスクドラフト作成ガイダンスは [こちら](/handbook/security/product-security/security-platforms-architecture/risk-register/well-articulated-prodsec-risks/#what-makes-a-well-articulated-risk) で見つけることができます。

#### 必須ラベル {#required-labels}

優先順位付けとレポート作成、メトリクスを可能にするため、必須ラベルを適用する必要があります。これらのラベルは以下の通りです:

| ラベルカテゴリ | オプション | 用途 |
|----------------|---------|-------|
| **ワークフローステータス** | `USRM Workflow::Finding Identified`、`USRM Workflow::Remediation Plan`、`USRM Workflow::Monitoring`、`USRM Workflow::Closed` | プロセス追跡 |
| **部門**|`Department:[department-name]`| 企業発見事項のリスクを所有する部門を特定するため |
| **グループ**|`group:[group-name]`| プロダクト発見事項のリスクを所有するプロダクトを特定するため |
| **優先度** | `priority::1`、`priority::2`、`priority::3`、`priority::4` | GitLab 標準の優先度フレームワークに整合しています。優先度／重要度ラベルまたはリスク評価ラベルのいずれかを使用してください、両方ではありません |
| **重要度** | `severity::1`、`severity::2`、`severity::3`、`severity::4` | GitLab 標準の重要度フレームワークに整合しています。優先度／重要度ラベルまたはリスク評価ラベルのいずれかを使用してください、両方ではありません |
| **リスク評価** | `RiskRating::Critical`、`RiskRating::High`、`RiskRating::Moderate`、`RiskRating::Low`| リスクを評価するための重要度と優先度の代替案|
| **リスク対処** | `risk-treatment::remediate`、`risk-treatment::accept` | リスクが修復されるか、正式に受け入れられるかを示します |
| **STORM リスク** | `STORM RISK:#` | リスクマッピングのレポート作成を可能にする - [こちら](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/work_items/views/1008054) の適切な項目から Issue 番号を使用してください |
| **Finding Coordinator** | `FindingCoordinator::@team member` | USRM プロセスを通じて発見事項を監視する責任のあるコーディネーターを特定するため |

#### 任意ラベル

| ラベルカテゴリ | オプション | 用途 |
|----------------|---------|-------|
| **システム** | `system:[system-name]` | 影響を受けるシステム用 |
| **会計年度と四半期** | `FY25-Q3`、`FY25-Q4` | プランニング整合 |
| **エスカレーション** | `escalated::level-1`、`escalated::level-2` | エスカレーション時 |
| **プロダクトグループ** | `group::authorization` | アクションオーナーグループ用 |

#### Issue ステータスとアラートラベル

これらのラベルは、注意が必要な Issue を追跡するため、トリアージボットによって自動的に、または Finding Coordinator によって手動で適用されます:

| ラベル | 適用される時 | 適用者 | 削除する時 |
|-------|--------------|------------|----------------|
| `stale` | 30 日間更新がない | トリアージボット（自動） | Issue が進捗で更新された時 |
| `overdue` | Issue が期日を過ぎている | トリアージボット（自動） | 期日が延長されたか作業が完了した時 |
| `Blocked` | 外部依存関係、リソース制約、またはチームのコントロールを超えた技術的障害により進捗が継続できない | Finding Coordinator（手動） | ブロッカーが解除された時 |
| `Missing_Labels` | 必須ラベルが Issue から欠けている | トリアージボット（自動） | すべての必須ラベルが適用された時 |
| `Missing_Assignee` | 作成から 48 時間後に Issue にアサインがない | トリアージボット（自動） | アサインが追加された時 |
| `missing_duedate` | 期日のない Issue が 7 日以上経過 | トリアージボット（自動） | 期日が設定された時 |

### リスク評価

多くのチーム（例: [SIRT](/handbook/security/security-operations/sirt/severity-matrix/)）には既存のリスク評価方法論があります。それを持たないチーム向けには、以下のセキュリティ部門の要件に適応された標準化された GitLab の [優先度](https://docs.gitlab.com/development/labels/#priority-labels) と [重要度](https://docs.gitlab.com/development/labels/#severity-labels) フレームワークを使用してください:

<details><summary>優先度と重要度フレームワーク</summary>

#### 優先度評価（ビジネス影響と緊急性）

| 優先度 | ラベル | 基準 | 目標解決 | 通知 | 等価マッピング |
|----------|-------|----------|-------------------|--------------|-------------------|
| **1（重大）** | `priority::1` | チームのキャパシティに関係なく即時のアクションが必要な緊急のセキュリティ脅威 | 最大 30 日 | Security リーダーシップへの即時エスカレーション | StORM Critical（26-30）、Vulnerability Critical（CVSS 9.0-10.0） |
| **2（高）** | `priority::2` | 専用キャパシティで間もなく対処される高影響のセキュリティ問題 | 60-90 日 | 24 時間以内に Security マネジメントへの通知 | StORM High（21-25）、Vulnerability High（CVSS 7.0-8.9） |
| **3（中）** | `priority::3` | 他の優先度と競合する可能性のある重要なセキュリティ改善 | 90-120 日 | 標準的なチームリードへの通知 | StORM Medium（11-20）、Vulnerability Medium（CVSS 4.0-6.9） |
| **4（低）** | `priority::4` | 指定されたタイムラインのないセキュリティ強化 | 特定のタイムラインなし | 標準的なバックログ管理 | StORM Low（1-10）、Vulnerability Low（CVSS 0.1-3.9） |

#### 重要度評価（技術的影響と複雑性）

| 重要度 | ラベル | 定義 | 例 | 修復 SLO |
|----------|-------|------------|----------|-----------------|
| **1（ブロッカー）** | `severity::1` | 通常の運用を完全にブロックするか、データ損失を引き起こすセキュリティ問題 | 回避策のないシステム侵害、進行中のデータ漏洩、重大なコントロール障害 | 即時の緩和が必要 |
| **2（重大）** | `severity::2` | 重大な影響を伴うが、複雑な回避策が利用可能なセキュリティ問題 | 限定的なエクスプロイトシナリオを伴う重大な脆弱性、主要なコンプライアンスギャップ | 重大な脆弱性は 30 日 |
| **3（メジャー）** | `severity::3` | 中程度の影響と妥当な回避策を伴うセキュリティ問題 | 中程度の脆弱性、プロセス改善、軽微なコンプライアンス問題 | 脆弱性は 90 日 |
| **4（マイナー）** | `severity::4` | 最小限の影響を伴うセキュリティ強化または軽微な問題 | ベストプラクティスの改善、ドキュメント更新、低優先度の推奨事項 | 脆弱性は 180 日 |

#### リスク評価ガイドライン

優先度と重要度の評価を割り当てる際、以下の要因を考慮してください:

**優先度評価要因**:

- **ビジネス影響**: 運用、顧客、収益への影響
- **規制要件**: コンプライアンス期限と義務
- **ステークホルダーの緊急性**: リーダーシップと顧客の期待
- **リソース可用性**: チームキャパシティと競合する優先度

**重要度評価要因**:

- **技術的影響**: システム機能とセキュリティ態勢
- **影響を受けるシステムの範囲**: 影響を受ける資産の数と重要度
- **悪用可能性**: 悪用または発生の容易さ
- **補完的なコントロール**: 重要度を低減する既存の緩和策

</details>

### 推奨事項

推奨事項は、発見事項にどのように対処するかを反映します。ISO 31000 では、リスクの対処に以下のアプローチの 1 つ以上を適用することを推奨しています:

- 回避 - リスクを引き起こす活動を開始または継続しないことを決定する、またはリスクの源を完全に排除する
- 緩和 - リスクの発生可能性または影響を低減するコントロールを導入する。
- 転嫁 - 契約、アウトソーシング、または保険を通じてサードパーティとリスクを共有する。
- 受容 - リスクを取るための情報に基づいた決定を下す。

推奨事項は以下を行うべきです:

- 根本原因に対処する - これができない場合、推奨事項はリスクの発生可能性または影響を低減するべきです。
- 低コンテキストである。
- 達成可能 – 利用可能なリソース、スキル、制約を考慮した現実的なもの。
- 実行可能 – 何を、誰によって、いつ行う必要があるかを明確に述べる。

Red Team の追加の役立つガイダンスは [こちら](/handbook/security/security-operations/red-team/how-we-operate/#security-recommendations-across-gitlab) で見つけることができます。

### 修復計画

推奨事項を使用して、適切なオーナーグループと協力して [SMART](/handbook/security/critical-projects/#smart-and-not-an-okr) 修復計画を策定します。

### Business Risk と Security Risk Owner

修復計画が文書化されたら、Business Risk Owner と Security Risk Owner の両方に通知する必要があります。

**Business Risk Owner:**

- 発見事項によって提示されるリスクと対応の決定について全体的に説明責任を負う
- 特定された発見事項と提案された修復計画について情報提供を受ける必要がある
- 修復アプローチを承認するか、修正を要求する権限を持つ
- 修復が実行不可能または正当化されない場合、リスクを正式に受け入れることを選択できる

**Security Risk Owner:**

- 発見事項を特定した発信元のセキュリティチームを代表する
- 提案された修復計画がセキュリティ推奨事項に十分に対処していることを確認するためにレビューする
- 技術的検証とセキュリティ承認を提供する
- 修復アプローチが重大な残余リスクを残す場合、懸念をエスカレーションする

GitLab Issue で両方のオーナーをタグ付けすることで、適切な可視性と説明責任が確保され、リスクが適切に対処される可能性が大幅に向上します。

### リスク受容

リスクを回避、緩和、または転嫁するのではなく、リスクを受け入れることを決定する場合があります。セキュリティ発見事項に対してリスク受容が望ましい場合、修復オーナーは以下を提供する必要があります:

1. **リスクの説明**: リスクの明確な記述
2. **ビジネス上の正当性**: 受容が必要な理由
3. **補完的なコントロール**: エクスポージャーを低減するためにどのような緩和策が実施されているか
4. **想定期間**: 受容がどれだけの期間必要か（リスク評価に基づき最大 24 ヶ月）
5. **残余リスク**: 補完的なコントロール後にどのリスクが残るか

Finding Coordinator は、リスク許容度およびコンプライアンス／規制義務に基づいて受容が適切であることを検証します。承認は [権限マトリクス](/handbook/security/security-observations-risk-management.md#authority-matrix) に従って部門のマネジメントチームから必要です。

承認されたら、`risk-acceptance::active` ラベルと適切なリスクレベルラベルを適用します。**Issue は引き続きオープン状態のままです** 追跡され定期的にレビューされる、進行中のリスク受容として。

#### 定期レビュースケジュール

Finding Coordinator は以下の間隔で定期レビューを実施します:

| リスクレベル | レビュー頻度 |
|------------|------------------|
| 重大 | 6 ヶ月ごと |
| 高 | 12 ヶ月ごと |
| 中 | 18 ヶ月ごと |
| 低 | 24 ヶ月ごと |

各レビューについて、Finding Coordinator は以下を行います:

1. 元の条件がまだ存在するかどうかを評価する
2. 重要度が変更されたかどうかを評価する
3. 脅威の状況やビジネス環境への変更をレビューする
4. 受容の正当化が引き続き有効であることを確認する
5. 修復オプションが利用可能になったかどうかを評価する
6. 補完的なコントロールが引き続き有効であることを検証する

### Security 承認

Security は以下が実施されていることを検証します:

- 対処計画またはリスク受容
- フォローアップ／修復テストの期日
- 必須ラベル
- モニタリングが実施されている
- 発見事項が関連するリスク Issue にマッピングされている

### モニタリング

### 推奨事項の品質とエスカレーション

セキュリティチームからの発見事項が正確、最新、適切に管理されていることを保証するため、[トリアージボット](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) を活用しています。このボットは、Issue の品質、ナッジング／エスカレーション、および部門全体のセキュリティ発見事項のタイムリーな解決をサポートします。

### Finding Coordinator

Finding Coordinator は、発見事項がアクティブで最新の状態を保ち、定義された修復タイムラインを持つことを保証する責任があります。これらのタスクはトリアージボットポリシーによって支援されます。彼らはまた、エスカレーションを開始し、ブロッカーがクリアされていることを保証します。Finding Coordinator の役割は、SecCompliance および SecRisk チームのメンバーによって担われます。Finding Coordinator のより詳細な責任と手順については、以下の折りたたまれたセクションをご確認ください。

<details>
  <summary>Finding Coordinator の責任</summary>

#### 概要

このランブックは、Finding Coordinator が USRM ライフサイクルを通じて発見事項 Issue を管理するための指示を提供します。発見事項が各フェーズを通じて進行し、サービスレベルコミットメントを満たすことを保証するため、これらの手順に従ってください。

#### Phase 1: Finding Identified（USRM Workflow::Finding Identified）

**いつ:** 新しいセキュリティ発見事項（Issue）が作成された時

**アクション:**

1. Issue が発見事項テンプレートで作成されていることを確認する
2. Finding Identifier が Issue テンプレートのすべての必須フィールドを完了していることを確認する:

   - 発見事項の高レベルな概要を提供する Issue タイトル
   - 発見事項の説明（4Cs モデルを使用）
   - 修復しない場合のリスク
   - 特定のチームメンバーを含む RACI ステークホルダーテーブル
   - 推奨事項
   - 優先度と重要度のチェックボックスが選択されている
3. 初期ワークフローラベルを適用し、すべての [必須ラベル](#required-labels) が存在することを確認する:

   - `USRM Workflow::Finding Identified`
   - `Department:[department-name]`
   - `priority::1-4`
   - `severity::1-4`
   - `STORM RISK:#`
   - `FindingCoordinator::@team member`
4. すべての RACI ステークホルダーが Issue にタグ付けされていることを確認する
5. Issue が適切な STORM Risk Issue にリンクされていることを確認する
6. 終了基準ステップ 1 が完了していることを確認する

**エスカレーショントリガー:**

- 1 営業日後に Issue が不完全または重要な情報が欠けている
- Finding Identifier が説明の要求に応答しない

---

#### Phase 2: Remediation Plan Documentation（USRM Workflow::Remediation Plan）

**いつ:** 発見事項が完全な情報で特定され、ステークホルダーがタグ付けされた時

**アクション:**

1. Remediation Manager がアサインされていることを確認する（RACI テーブルから）
2. 詳細な修復計画の完了を監視する（SLC: Issue 作成から 4 営業日）
3. 修復計画に以下が含まれていることを確認する:

   - オーナー、期日、ステータスを含む修復ステップテーブル、または
   - 別の場所で修復を追跡するためのリンクされたエピック／Issue
   - Issue 期日が設定され、優先度ベースの SLO に整合している
4. ワークフローラベルを `USRM workflow:Remediation Plan` に更新する
5. 終了基準ステップ 2 が完了していることを確認する

**エスカレーショントリガー:**

- 4 営業日後に修復計画が文書化されていない
- 2 営業日後に Remediation Manager がアサインされていない
- 期日が設定されていないか、優先度 SLO に整合していない
- 修復計画に十分な詳細または明確なオーナーシップが欠けている

---

#### Phase 3: Monitoring（USRM Workflow::Monitoring）

**いつ:** 修復計画が承認され、作業が開始された時

**アクション:**

1. ワークフローラベルを `USRM Workflow::Monitoring` に更新する
2. 定期的な進捗更新（少なくとも月次）について Issue を監視する
3. 期日と優先度ベースの SLO に対して追跡する
4. トリアージボットアラートを監視する:

   - `stale` ラベル（30 日間更新なし）
   - `overdue` ラベル（期日超過）
   - `Missing_Assignee` ラベル
   - `missing_duedate` ラベル
   - `Missing_Labels` ラベル
5. アサインされている人と一緒にトリアージボットアラートに迅速に対処する
6. 必要に応じて進捗で STORM Risk Issue を更新する

**エスカレーショントリガー:**

- Issue が古くなる（30 日以上更新なし）
- 延長承認なしに Issue が期日超過
- 修復が明確な前進の道筋なくブロックされている
- アサインされた人が応答しなくなる
- 期日が守られず、Remediation Manager からの連絡がない

---

#### Phase 4: Remediation Complete & Closure（USRM Workflow::Closed）

**いつ:** Remediation Manager が作業完了を示す時

**アクション:**

1. 検証のために Finding Identifier をタグ付けする
2. Finding Identifier が以下を行ったことを確認する:

   - 修復が完了したことを検証した
   - 修復が元の発見事項を緩和することを確認した
   - Issue で修復のエビデンスを文書化した
3. すべての必須ラベルが存在することを確認する
4. Issue をクローズする
5. クロージャーを反映するために関連する STORM Risk Issue を更新する
6. 一時的なラベルを削除する（`stale`、`overdue` など）

**エスカレーショントリガー:**

- Finding Identifier が修復を検証できない
- 修復のエビデンスが不十分
- Finding Identifier が検証要求に応答しない

---

#### リスク受容パス - モニタリング

**いつ:** Issue に `risk-acceptance::active` ラベルがある時

**アクション:**

1. 優先度に基づいて定期レビューをスケジュールする:

   - 重大: 6 ヶ月ごと
   - 高: 12 ヶ月ごと
   - 中: 18 ヶ月ごと
   - 低: 24 ヶ月ごと
2. 各レビュー期間で:

   - レビューを要求するコメントを Issue に作成する
   - Business Risk Owner と Security Risk Owner をタグ付けする
   - リスク条件、補完的なコントロールが引き続き有効であることを確認する
   - リスク受容ドキュメントを更新する
   - 修復が現在実行可能かどうかを評価する
3. 修復されるかリスクが存在しなくなるまで Issue はオープン状態を維持する

**エスカレーショントリガー:**

- リスク条件が大幅に変更された
- 補完的なコントロールが効果的でなくなった
- 規制／コンプライアンス要件が現在修復を義務付けている
- リスク受容期間が最大期間を超える（最低優先度で 24 ヶ月）

---

#### USRM ラベルリファレンス

| ラベル | 適用する時 | 削除する時 |
|-------|---------------|----------------|
| `USRM Workflow::Finding Identified` | セキュリティ発見事項が発見され、必要なすべてのフィールド（説明、推奨事項、RACI、優先度／重要度）が完了して文書化された | Remediation Manager が詳細な修復計画の文書化を開始する時（`Remediation Plan` ラベルを適用） |
| `USRM Workflow::Remediation Plan` | Remediation Manager がステップ、オーナー、期日を含む詳細な修復計画を文書化している | 修復作業が開始され、Issue がアクティブなモニタリングに入る時（`Monitoring Active` ラベルを適用） |
| `USRM Workflow::Monitoring` | 修復作業がアクティブな進捗モニタリングと共に進行中 - 完了と検証を待っている | Finding Identifier が修復完了を検証する時（`Closed` ラベルを適用） |
| `USRM Workflow::Closed` | セキュリティ発見事項が完全に修復され、解決済みとして検証された | 該当なし - 終了状態 |

---

</details>

#### 必須トリアージボットポリシー

発見事項を生成するすべてのセキュリティチームは、それぞれのプロジェクトで以下の自動化ポリシーを実装する必要があります:

1. **古い Issue ナッジング**

ポリシー: Issue が非アクティブのままの場合の自動ナッジング

- トリガー: 30 日間更新のない Issue
- アクション: 30 日間の非アクティブ後、`stale` ラベルを追加し、ステータス更新を要求するコメントを追加し、アサインされた人をタグ付けする
- 例外: `ignore` または `blocked` のラベルが付いた Issue は除外される

<details>
  <summary>ポリシー例</summary>

  ```yaml
  - name: Nudge stale issues
    conditions:
      issue_type: issue
      forbidden_labels:
        - stale
        - <blocked team label here>
      state: opened
      date:
          attribute: updated_at
          condition: older_than
          interval_type: months
          interval: 1
      actions:
          redact_confidential_resources: false
          comment: |
             {{author}} This issue has not been updated in 1 month.

              If this issue is still relevant, please provide an update and/or update the workflow status.

              The `stale` label has been applied to help track issues requiring attention.
          labels:
            - stale
```

</details>

1. **アサイン欠落管理**

ポリシー: すべての発見事項 Issue には指定されたオーナーが必要

- トリガー: 作成から 48 時間後にアサインされていない Issue
- アクション: `needs-assignee` ラベルを追加する
- 例外: バックログマイルストーンの Issue はアサインされていない状態のままである可能性がある

<details>
  <summary>ポリシー例</summary>

  ```yaml
    - name: Alert when issue has no assignees
      conditions:
        issue_type: issue
        forbidden_labels:
            - Missing_Assignee
        ruby: resource[:assignees].empty?
        state: opened
      actions:
          redact_confidential_resources: false
          comment: |
            {{author}}, This issue is missing an assignee.
          labels:
            - Missing_Assignee
    - name: Remove Missing_Assignee label when there are assignees
      conditions:
        issue_type: issue
        labels:
            - Missing_Assignee
        ruby: |
            !resource[:assignees].empty?
        state: opened
        actions:
          remove_labels:
            - Missing_Assignee
  ```

</details>

1. **期日超過 Issue 追跡**

ポリシー: 期日超過の Issue は即時の注意と正当化が必要

- トリガー: 期日を過ぎた Issue
- アクション: `overdue` ラベルを追加し、更新されたタイムラインを要求するコメントを追加する
- 例外: 承認されたタイムライン延長を持つ Issue（コメントで文書化）

<details>
  <summary>ポリシー例</summary>

  ```yaml
    - name: Comment on past due issues
      conditions:
        state: opened
        issue_type: issue
        forbidden_labels:
            - overdue
            - bot-ignore
        ruby: |
            past_due_date?
        actions:
          redact_confidential_resources: false
          comment: |
            {{author}} This issue is past due. Please review and update the timeline or mark as completed.
          labels:
            - overdue
  ```

</details>

1. **期日強制**

ポリシー: すべての発見事項 Issue には現実的なタイムラインが必要

- トリガー: 期日のない 7 日以上経過した Issue
- アクション: `needs-due-date` ラベルを追加し、アサインされた人にタイムラインを要求する
- 例外: リサーチまたは発見の Issue は代わりにマイルストーン日を使用する場合がある

<details>
  <summary>ポリシー例</summary>

  ```yaml
    - name: Comment no due date issues
      conditions:
        state: opened
        issue_type: issue
        forbidden_labels:
            - missing_duedate
        ruby: resource[:due_date].nil?
      actions:
          redact_confidential_resources: false
          comment: |
            {{author}} This issue has no due date. Please review and update the timeline or mark as completed.
          labels:
            - missing_duedate
  ```

</details>

1. **必須ラベル強制**

ポリシー: すべての発見事項 Issue にはメトリクスとレポート作成のための必須ラベルが必要

- トリガー: 必須ラベルが Issue から欠けている
- アクション: `missing-label` ラベルを追加し、アクションのためにアサインされた人をタグ付けする
- 例外: バックログの Issue は無視される

<details>
  <summary>ポリシー例</summary>

  ```yaml
    - name: Alert when an issue is missing required labels
      conditions:
        issue_type: issue
        forbidden_labels:
            - Missing_Labels
            - bot-ignore
        ruby: |
            [" list labels"].any? { |rl| !resource[:labels].any? { |l| l.start_with?(rl) } }
        state: opened
        actions:
          redact_confidential_resources: false
          comment: |
            {{author}} this issue does not have an appropriate project work labels.

            Please label it accordingly based on the Labeling Guide). The following labels are missing:
            #{ [" list labels"].map{ |rl| "- #{ rl } #{ resource[:labels].any?{ |l| l.start_with?(rl) } ? ':white_check_mark:' : ':x:' }"}.join("\n") }

            Once you add the missing labels, please remove the `Missing_Labels` label. If you are not a member of SecCompliance, please kindly ignore this message.
          labels:
            - Missing_Labels
  ```

</details>

### 修復とクロージャー

Finding Identifier は、修復が完了し、発見事項を効果的に緩和することを検証する責任があります。検証されると、Issue は修復のエビデンスの適切なドキュメンテーションと共にクローズできます。

## 参考資料

### サポートチャンネルと更新

Slack で `#security_help` に連絡するか、関連する Issue で finding coordinator をタグ付けしてください。USRM の更新は `#security_discuss` で毎週公開されます。月次の録画は、より詳細な分析と共に [公開](https://drive.google.com/drive/folders/1uC1aVlSoy4-bfvc4MIpwtKSznvx1e8Up?usp=drive_link) されます（社内のみ）。Risk Source Owner との定期的なミーティングは、傾向のレビューとフィードバックの収集のために実施されます。

### 内部ドキュメント

- [Unified Security Risk Management Epic](https://gitlab.com/groups/gitlab-com/gl-security/security-assurance/-/epics/153)
- [Security Risk Sources](https://internal.gitlab.com/handbook/security/#security-risk-sources)
- [GitLab Issue Triage Guidelines](/handbook/product-development/how-we-work/issue-triage/)
- [StORM Program Procedures](/handbook/security/security-assurance/security-risk/storm-program/)
- [Observation Management Procedure](/handbook/security/security-assurance/observation-management-procedure/)
- [Vulnerability Resolution SLAs](/handbook/security/product-security/vulnerability-management/sla/)
- [GitLab Security Handbook](/handbook/security/)
