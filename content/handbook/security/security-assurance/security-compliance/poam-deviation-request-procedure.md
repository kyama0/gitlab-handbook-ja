---
title: "FedRAMP 脆弱性逸脱リクエスト手順"
upstream_path: /handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T06:00:00Z"
translator: claude
stale: false
---

## リクエストの提出

<div class="d-grid gap-2 my-4">
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new" class="btn bg-primary text-white btn-lg">こちらをクリックして逸脱リクエストを提出してください！</a>
</div>

セキュリティ脆弱性に取り組むチームメンバーは、この手順全体を読み、質問がある場合は `#security-help` Slack チャンネルで `@sec-compliance-team` にお問い合わせください。

## 目的

FedRAMP Authorization Act および FedRAMP Program Management Office (PMO) によって設定された期待に従って、GitLab は、以下のスコープセクションに記載されているシナリオにより [SLA 内に是正](/handbook/security/product-security/vulnerability-management/sla/)できない脆弱性について、私たちのスポンサーするエージェンシーの Authorizing Official (AO) からの承認（リスク受容）を追跡しリクエストするための正式なプロセスに従う必要があります。これらは脆弱性逸脱リクエスト (DR) と呼ばれ、毎月 [GitLab の Plan of Action & Milestones (POA&M)（社内のみ）](https://docs.google.com/spreadsheets/d/1Tj3_vqNp34CSIHZsiSI0eM2zdfG574CD/edit?usp=sharing&ouid=107738356047141217629&rtpof=true&sd=true) を使用して AO に正式に報告されます。リスク調整（重大度ダウングレード）、誤検出、運用要件のための逸脱リクエストには Authorizing Official (AO) の承認が必要です。

## 範囲

[FedRAMP 本番環境](https://internal.gitlab.com/handbook/engineering/fedramp-compliance/#system-architecture)（認可境界）に影響を与えるすべての脆弱性 (CVE)。サードパーティの脆弱性（ベンダーの依存関係）を含み、以下のカテゴリにあります。

- **誤検出** (脆弱性スキャナーの制限 - 脆弱性は実際には存在しない)
- **リスク調整** (緩和要因により CVSS スコア/重大度が報告されたものより低い)
- **運用要件** (機能性/可用性に影響を与えずに脆弱性を是正できない)

各タイプの詳細については、以下の [DR タイプ](#dr-types) セクションの定義を参照してください。

### 範囲内の資産

[こちら（社内）](https://internal.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-dedicated/us-public-sector-services/architecture/#vulnerability-scanning-scope-and-targeted-assets) にリストされている資産とスキャンタイプのみが対象範囲です。FedRAMP 本番認可境界に含まれていないスキャンタイプ（例: SAST）または資産については DR を提出しないでください。

FedRAMP の対象範囲の脆弱性には `FedRAMP::Vulnerability` ラベルが適用されます。詳細については、[標準脆弱性ラベル（社内）](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues/34199373) を参照してください。

## 役割と責任

| 役割 | 責任 |
| ------- | ------- |
| GitLab チームメンバー | 適切な GitLab Issue テンプレートを使用して完成した DR を提出し、証拠を提供する |
| セキュリティ（脆弱性管理） | DR の技術レビューと承認を完了する |
| ISSO (Dedicated Compliance) | DR のコンプライアンスレビューを完了し、承認された場合は POA&M にアップグレードする |
| Authorizing Official (AO) | DR を承認または拒否する（最終的な意思決定者として） |

## 手順

任意の GitLab チームメンバーは、`Plan of Action and Milestones (POA&M) - Vulnerability Deviation Requests` プライベートプロジェクトで [新しい Issue を作成](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new) することで、逸脱リクエスト (DR) を提出できます。DR はできるだけ早期に提出し、脆弱性の SLA がすでに侵害される危険にある場合に提出してはなりません。これにより、DR が承認に適していない場合に SLA を侵害するリスクなしに、承認時間と代替緩和策を探る時間が確保されます。すべての DR はセキュリティ、コンプライアンス、AO によってレビューおよび承認され、レビューおよび承認の対象となるためには、DR Issue テンプレート内で定義された定義と基準を満たす必要があります。

DR を起票するには、適用可能な Issue テンプレートを選択し、内部レビューのために Issue を提出する前にすべての情報を完了する必要があります。各 DR は 3 ラウンドのレビューを受けます。

1. 最初に、DR が正当化され、代替緩和オプションがないことを確認するためのセキュリティ技術レビューが完了します。
1. 次に、DR がセキュリティコントロールに与える影響のレベル、補完コントロールの機会を判断するため、また承認された場合に GitLab POA&M にアップグレードするためのコンプライアンスレビューが完了します。
1. 最後に、私たちのスポンサーするエージェンシーからの [Authorizing Official (AO)](https://csrc.nist.gov/glossary/term/authorizing_official) がリクエストをレビューし、最終的な意思決定者となります。注意: GitLab（ビジネス）によるリスク受容は許可されていません（つまり、正当な脆弱性を無視することはできません）。この責任は AO にあります。

拒否された場合は、是正計画を策定する必要があり、このアイテムは POA&M に残ります。

承認された場合は、ISSO は GitLab Issue を介してすべての関係者に追加の指示（セキュリティスキャナーや自動化ツールの更新など）を通知します。

### SLA

- 内部セキュリティ技術レビュー: 2 営業日
- 内部コンプライアンスレビュー: 2 営業日
- AO レビュー: 1〜30 日（AO によってタイムラインは異なる）

### DR タイプ {#dr-types}

以下の定義は FedRAMP PMO から採用されたもので、3 つすべてに DR リクエストを提出するための Issue テンプレートがあります。

[リスク調整](https://www.fedramp.gov/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.xlsx)
{.h4}

所見のスキャナー検出リスクレベルと比較したリスクの低減。リスクレベルは通常、所見の重大度によって表され、これは脆弱性の CVSS スコアによって通知されます。この調整は、脆弱と検出されたシステム上またはコードベース内での悪用の可能性や影響を低減する既存または新しい補完コントロールによって正当化される必要があります。ベンダーアドバイザリまたは既存の緩和策に基づく計算された CVSSv3 スコアの差は、より低いリスク評価を正当化するのに十分な CVSSv3 スコアを下げる必要があります。リスク調整 DR は、サードパーティ/ベンダーの依存関係内のすべての S1/S2 脆弱性に必要です。リスク調整 DR は、サードパーティ/ベンダーの依存関係内の S3/S4 脆弱性には必要ありません。
サードパーティ/ベンダーの依存関係の S3/S4 脆弱性については、`Vulnerability::Vendor Package::Fix Unavailable` ラベルが付いている間に SLA を侵害しても、コンプライアンス/レポートの観点から、最終的に修正が利用可能になった時を監視している限り問題ありません。ラベル `Vulnerability::Vendor Package::Fix Available` で示されるように修正が利用可能になると、是正 SLA はベンダーが修正をリリースした日から再開します。

- **ベンダー依存関係リスク調整 DR に関する一時ガイダンス**: ベンダーアドバイザリ情報に基づくベンダー依存関係のリスク調整処理に関連する重大なリソースの負担により、現時点では GitLab に報告義務はありません。このプロセスはこの制約に対処するための自動化が保留中であるため、UBI イメージを含む Red Hat ベンダー依存関係についてはリスク調整 DR を提出しないでください。この DR タイプの作成が自動化されるまで、脆弱性 Issue に適切に `Vulnerability::Vendor Base Container::Fix Unavailable` ラベルと `Vulnerability::Vendor Package::Fix Unavailable` ラベルを引き続き適用してください。

[誤検出](https://csrc.nist.gov/glossary/term/false_positive)
{.h4}

脆弱性が存在することを誤って示す所見であり、検出された脆弱性が検出されたコードベースまたはシステムに存在しないもの。
脆弱性が存在しないことを証明する技術情報を支援するドキュメントと証拠を通じて正当化を提供する必要があります。

[運用要件](https://www.fedramp.gov/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.xlsx)
{.h4}

システムが意図したとおりに機能しない、可用性に悪影響が生じる、またはベンダーが影響を受けるパッケージにセキュリティ更新を提供しないと明示的に示しているため、SLA 内に、または全く是正できない所見。FedRAMP は High 脆弱性に対する OR を承認しません。ただし、ベンダーは運用要件をレビューに提出する前に前述のリスク調整プロセスを介して脆弱性をリスク調整でき、調整された重大度は OR のレビュー中に考慮されます。

ベンダー依存関係の脆弱性については、GitLab がサードパーティベンダーまたはオープンソースプロジェクトに脆弱性の是正を依存する場合、技術的には上記の複数のカテゴリに該当する可能性があります。これらの脆弱性 Issue は、常に `Vulnerability::Vendor Base Container::Fix Unavailable` ラベル（脆弱なパッケージが Red Hat の UBI などのベンダー公開ベースコンテナイメージを介して導入されていない場合は `Vulnerability::Vendor Package::Fix Unavailable`）を使用して識別される必要があります。ベンダー依存関係の Critical および High 重大度の所見には、DR を進める前にリスクを許容可能なレベルに緩和できるよう、特別な処理が必要です。

### ワークフローラベル

| ステップ | 説明 | 脆弱性 Issue に適用されるラベル | 逸脱リクエスト Issue に適用されるラベル |
| ------ | ------ | ------ | ------ |
| 1 | FedRAMP 適用脆弱性 Issue に対して逸脱リクエストが必要であることを発見 |  `FedRAMP::DR Status::Open` | n/a |
| 2 | セキュリティエンジニアによるレビューのために適切な Issue テンプレートを使用して逸脱リクエストを提出 | *ラベルは変更されません* | `FedRAMP::DR Status::Ready for review`（*Issue テンプレートを使用して自動的に適用されます*） |
| 3 | セキュリティ（脆弱性管理チーム）が脆弱性と逸脱リクエストで提供された分類/正当化の技術レビューを実施 | 承認された場合、*ラベルは変更されません*。拒否された場合、`FedRAMP::DR Status::Denied` | 承認された場合 `FedRAMP::DR Status::Compliance review`、拒否された場合 `FedRAMP::DR Status::Denied` |
| 4 | セキュリティコンプライアンスがレビューし、承認された場合は POA&M で脆弱性逸脱を追跡し、次の月次会議で Authorizing Official と話し合う | 承認された場合 *ラベルは変更されません*、拒否された場合 `FedRAMP::DR Status::Denied` | 承認された場合 `FedRAMP::DR Status::AO review`、拒否された場合 `FedRAMP::DR Status::Denied` |
| 5 | セキュリティコンプライアンスは次の月次会議で Authorizing Official の承認を求める | 承認された場合 `FedRAMP::DR Status::Approved`、拒否された場合 `FedRAMP::DR Status::Denied` | 承認された場合 `FedRAMP::DR Status::Approved`、拒否された場合 `FedRAMP::DR Status::Denied` |
| 6 | パッチが利用可能になり適用されると、DR はもはや必要なくなる場合がある。 | 是正された場合は Issue をクローズし `FedRAMP::DR Status::Vuln Remediated` を適用 | 是正された場合は Issue をクローズし `FedRAMP::DR Status::Vuln Remediated` を適用 |

**脆弱性が是正されない限り、脆弱性 Issue はオープンのままにしておくべきです。** これにより、セキュリティコンプライアンスは FedRAMP 環境に依然影響を与える DR を追跡できます。

#### 単一の逸脱リクエストでの複数脆弱性のグループ化

**すべて** の以下の基準が満たされる場合、複数の関連する脆弱性追跡 Issue を単一の DR にグループ化できます。

- DR が単一の固有の脆弱性 (CVE) に固有である（複数のイメージに影響していても）
- すべての脆弱性が同じ DR タイプと正当化を持つ（例: すべてが複数の GitLab コンテナイメージで使用される Red Hat ubi8-minimal ベースイメージの誤検出である）
- DR でカバーされる検出されたすべての脆弱性が、関連 Issue として DR にリンクされている

### 脆弱性 Issue と DR Issue のクローズ

#### 典型的な Issue クローズタイムライン

逸脱リクエストはしばしば永続的ではありません。最終的にベンダーによってパッチが利用可能になったり、リスク調整された SLA に従ってデプロイされたりするためです。パッチは DR 承認プロセスの途中でリリースされることもあります。パッチがリリースされデプロイされた場合は、本番環境で脆弱性が修正されたことを示す証拠を逸脱リクエスト Issue のコメントで提供してください。提供されたら、セキュリティ所見を追跡する Issue をクローズできます。許容される証拠には以下が含まれます。

- システムから脆弱性がもはや存在しないことを示す更新された脆弱性スキャン
- コンテナイメージから脆弱性がもはや存在しないことを示す更新されたコンテナスキャン結果と、更新されたコンテナが本番にデプロイされたことの証拠
- 検出されたコードベースにパッチが適用されたことを示すマージリクエスト（マージ済み）と、更新されたバージョンが本番にリリースされたことの証拠

**DR Issue をクローズするためには、パッチ/修正がリリースのためにスケジュールされているだけでなく、本番にデプロイされている必要があることに注意してください。**

脆弱性が是正されたら、脆弱性 Issue と DR Issue の両方に `FedRAMP::DR Status::Vuln Remediated` ラベルを適用します。

#### 是正なしで Issue をクローズできる状況

一部の DR タイプは、（影響のベンダー分析により）修正が利用可能にならない、または誤検出のため、自然に意味します。
特定の状況では、これ以上の対応が必要ない Issue を処理する開発グループの負担を軽減するために、Issue をクローズすることができます。これらの状況は次のとおりです。

##### ソフトウェアベンダーが修正をリリースしない

ソフトウェアベンダーが脆弱性の影響を評価し、セキュリティ更新をリリースしません。これらの Issue にはラベル `Vulnerability::Vendor Package::Will Not Be Fixed` があり、クローズできます。**脆弱性ステータスは「Acceptable risk」として却下する必要があります。**

##### 誤検出

検出が誤検出でありプロジェクトに影響しないことを示す証拠を提供する DR が起票されたら、Issue をクローズできます。**脆弱性ステータスは「False positive」として却下する必要があります。**

## 例外

この手順への例外は許可されていません。

## 参照

- [脆弱性管理手順: スキャナー](/handbook/security/product-security/vulnerability-management/)

### その他の役立つ定義

- [**FedRAMP PMO**](https://www.gsa.gov/technology/government-it-initiatives/fedramp): GSA 内のチームで、FedRAMP 認可プロセスを通じてエージェンシーとクラウドサービスプロバイダーをサポートし、セキュリティパッケージの再利用を可能にする FedRAMP 認可の安全なリポジトリを維持します。
- [**Plan of Action & Milestones (POA&M)**](https://www.fedramp.gov/assets/resources/documents/CSP_POAM_Template_Completion_Guide.pdf): GitLab の Authorizing Official とセキュリティ所見と是正計画を追跡・共有するために使用される FedRAMP 必須の .xlsx テンプレート。
- [**Authorizing Official (AO)**](https://www.fedramp.gov/agency-authorization/): 組織の運営（ミッション、機能、イメージ、評判を含む）、組織資産、個人、他の組織、および国家に対して許容可能なレベルのリスクで情報システムを運用する責任を正式に引き受ける権限を持つ、上級（連邦）職員（通常は CISO/CIO または彼らの委任されたチーム）。
- [**Authorization Boundary**](https://csrc.nist.gov/glossary/term/security_authorization_boundary): authorizing official による運用が認可される情報システムのすべてのコンポーネント。情報システムが接続されている、別途認可されたシステムを除外します。
- [**Information System Security Officer (ISSO)**](https://csrc.nist.gov/glossary/term/information_system_security_officer): 情報システムまたはプログラムの適切な運用セキュリティ姿勢を維持する責任を割り当てられた GitLab の個人。
