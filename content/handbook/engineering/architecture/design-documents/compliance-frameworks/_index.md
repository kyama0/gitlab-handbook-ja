---
title: "コンプライアンスフレームワーク"
status: implemented
creation-date: "2024-07-08"
authors: [ "@nrosandich", "@huzaifaiftikhar1" ]
coach: "@theoretick"
approvers: [  ]
owning-stage: "~govern::compliance"
participating-stages: []
toc_hide: true
no_list: true
upstream_path: /handbook/engineering/architecture/design-documents/compliance-frameworks/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-30T04:51:25-07:00"
---


{{< engineering/design-document-header >}}


## 概要

このブループリントはコンプライアンスフレームワークの実装における技術的考慮事項の活きたドキュメントとして機能します。[コンプライアンスフレームワーク](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html)、[コンプライアンスセンター](https://docs.gitlab.com/ee/user/compliance/compliance_center/)、および[セキュリティポリシー](https://docs.gitlab.com/ee/user/application_security/policies/)との関係における機能が含まれます。

### 提案

[コンプライアンス標準準拠](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html)からの進化として、コンプライアンスフレームワークを通じてコンプライアンスの施行と可視性をどのように処理するかの概要を説明します。

### 動機

お客様のコンプライアンスポスチャーには主に 3 つの部分があります：[施行](#enforcement)、[可視性](#visibility)、および[監査履歴](#audit-history)。

#### 施行

GitLab 内での施行は現在、[セキュリティポリシー](https://docs.gitlab.com/ee/user/application_security/policies/)と[コンプライアンスパイプライン](https://docs.gitlab.com/ee/user/group/compliance_pipelines.html)を通じて行われています。これにより、ユーザーに同じ機能を実装するための 2 つの非常に異なる方法が提供されており、ユーザーにとって混乱を招くと説明されています。コンプライアンスパイプラインにはいくつかの固有の技術的制限もあります（[エピック](https://gitlab.com/groups/gitlab-org/-/epics/6241)を参照）。

#### 可視性

現在、標準は準拠レポート（ステータスレポートに名称変更）にハードコードされており、コンプライアンスフレームワークとは別になっています。これにより、以下を目指す際にシステムが柔軟性に欠けます：

1. コンプライアンスフレームワークを使用して特定のプロジェクトを準拠レポートに含め、それらのプロジェクトが準拠している要件を区別する。
1. 準拠レポートに要件レベルを追加する
1. より多くの標準とコントロールを追加する
1. ユーザーが標準をカスタマイズできるようにする
1. ユーザーが独自の標準を作成できるようにする
1. ユーザーがカスタマイズ可能なコントロールを作成できるようにする

#### 監査履歴

これは現在、コンプライアンスイベント（[監査イベント](https://docs.gitlab.com/ee/user/compliance/audit_events.html)と [MR 内の違反](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_violations_report.html)）を通じて実現されています。

### 背景

#### コンプライアンスパイプラインの廃止

GitLab 17.3 で[パイプライン実行ポリシー](https://docs.gitlab.com/ee/user/application_security/policies/pipeline_execution_policies.html)を優先して[コンプライアンスパイプライン](https://docs.gitlab.com/ee/user/group/compliance_pipelines.html)を廃止しました。この決定は、セキュリティポリシーを通じたコンプライアンス施行という将来の方向性に沿うために行われました。

#### コンプライアンスフレームワークを通じたポリシーのスコープ指定

特定のプロジェクトセットに対して、または特定のコンプライアンスフレームワークが適用されたプロジェクトに対してポリシーを施行できるようにするセキュリティポリシーのスコープ指定機能を導入しました。これにより、フレームワークを通じたコンプライアンス施行というゴールに向けて進むことができました。

#### 複数のコンプライアンスフレームワーク

GitLab 17.3 以前は、プロジェクトに複数のコンプライアンスフレームワークを適用することができませんでした。準拠ダッシュボードのカスタマイズを可能にするという将来の状態に向けて作業するために、GitLab 17.3 で複数のコンプライアンスフレームワークを適用する機能を作成しました。

### ゴール

1. 複数のフレームワークに対応するサポートを提供する
1. コンプライアンスパイプラインとセキュリティポリシーの不一致を解消する
1. コンプライアンスフレームワークを使用して特定のプロジェクトを準拠レポートに含め、それらのプロジェクトが準拠している要件を区別する。
1. 準拠レポートに要件レベルを追加する
1. より多くの標準とコントロールを追加する
1. ユーザーが標準をカスタマイズできるようにする
1. ユーザーが独自の標準を作成できるようにする

### 非ゴール

1. コンプライアンスイベント
   1. [監査イベント](https://docs.gitlab.com/ee/user/compliance/audit_events.html)
1. [セキュリティポリシー](https://docs.gitlab.com/ee/user/application_security/policies/)
   1. このドキュメントはセキュリティポリシーの仕組みや、ポリシーがプロジェクトのスコープを指定するためにコンプライアンスフレームワークをどのように使用するかを概説することを意図していません
   1. セキュリティポリシーの詳細については[このドキュメント](compliance_security_policy_relationship.md)を参照してください

### 用語集/用語説明

1. フレームワーク
   1. [コンプライアンスフレームワーク](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html)は、特定のコンプライアンス要件を持つプロジェクトや追加の監視が必要なプロジェクトを識別するための、GitLab 内のユーザー変更可能な機能です。コンプライアンスフレームワークは一般的に SOC2 や ISO 27001 などの業界標準のコンプライアンスフレームワークに沿っています。
1. 標準 - フレームワークの後継
   1. 標準は準拠レポートのコンプライアンスチェックをグループ化します。コンプライアンス標準は SOC2 や ISO 27001 などの確立されたコンプライアンスフレームワーク/標準に沿っています
1. 準拠
   1. コンプライアンスフレームワークに対するプロジェクトのコンプライアンスポスチャーの割合を報告します。例えばプロジェクト A がフレームワーク A に対して 50% 準拠している場合など。
1. [ポリシー](https://docs.gitlab.com/ee/user/application_security/policies/)
1. 要件
   1. SOC2 や ISO 27001 などの業界標準コンプライアンスフレームワーク/標準からの特定の要件。コンプライアンスフレームワークの特定の部分に対する意図の声明。これらは特定のコントロールに細分化されます。
1. チェック
   1. チェックはプロジェクトの設定をレビューして、特定の状態にあることを確認するものです。チェックはコントロールに対するプロジェクトのコンプライアンスポスチャーの割合を構成します。
1. コントロール
   1. コントロールはコンプライアンス要件を満たすために満たされる必要がある特定のコンプライアンスルールです。GitLab での施行は設定、セキュリティポリシー、またはコンプライアンスパイプラインを通じて実現されます。
1. 違反
   1. トリガーされたときにコントロールと比較してそのコントロールに違反していることが判明したイベントの記録。

### 設計の詳細 {#design-details}

チェックの作成と更新のために [Sidekiq ワーカーを使用](decisions/001_triggering_checks.md#use-sidekiq-workers-for-creating-and-updating-checks)し、[コンプライアンス準拠設定をリレーショナルデータとしてデータベースに保存](decisions/002_custom_adherence_report.md#storing-the-compliance-adherence-configuration-in-database-as-relational-data)します。

詳細については[スケーラビリティレビュードキュメント](scalability_review.md)を参照してください。

#### カスタマイズ可能なコントロール

注意：詳細な概要については [ADR 003: カスタムコントロール](decisions/003_custom_controls.md)を参照してください。

カスタム要件を作成する機能を提供して、ユーザーが GitLab がサポートするまたは将来サポートするコントロールの網羅的なリストだけに依存する必要がないようにしたいと考えています。

要件はすぐに使えるコントロールとユーザー定義のコントロールの両方の組み合わせで構成されます。正規化された構成可能なデータモデルを構築することで、個別のコントロールに対する特別な処理を避け、リレーショナルデータストア内でコンプライアンスと違反の評価を均一にスケールできます。

##### アプローチ

ユーザーが要件に応じて独自のコントロールを作成できるようにするためには、以下の種類の要件が必要です：

1. [内部要件](#internal-requirements)：プロジェクトと名前空間の計算済みプロパティの列挙リストから論理式を作成できるようにします
1. [外部要件](#external-requirements)：HTTP サーバーなどの外部サービスに依存する要件を作成できるようにします

##### 内部要件

利用可能なすべてのプロジェクト設定を使用してユーザーが論理式を作成できるようにします。これらの式はプロジェクトが評価されるコントロールを形成します。これらは 'internal' を `requirement_type` として持つ `compliance_requirements` テーブルに構造化 JSON として保存されます。

入力を検証するためにスキーマバリデーターを使用し、`compliance_requirements` データベーステーブルの `expression` カラムに保存します。

UI は、フィールド、演算子、値を選択するためのドロップダウンを提供します。これにより、ユーザーが複雑な JSON 式を自分で書く必要がなくなります。

各式はブール true または false に評価されます。

##### 外部要件

**ユーザーは外部サービスの状態を確認するコントロールを作成できる必要があります。GitLab がデフォルトで提供するものに要件が合わない場合があるためです。**

ユーザーの外部サービスの外部 HTTP/HTTPS URL は、'external' を `control_type`（enum）として持つ `compliance_requirements_controls` テーブルに保存されます。同じテーブルには `encrypted_secret_token` と `encrypted_secret_token_iv` カラムに共有 HMAC シークレットも保存されます。

最新のプロジェクト設定をこれらの外部サービスに POST し、レスポンスとして HTTP 2xx ステータスを期待します。

外部要件のコントロール結果を更新するために使用できる API エンドポイントを提供します。これは[外部ステータスチェックのステータス設定](https://docs.gitlab.com/ee/api/status_checks.html#set-status-of-an-external-status-check)に類似しています。

共有 HMAC シークレットはリクエストに署名するために使用され、レスポンスの確認にも使用されます。これにより、API トークンを使用してロール管理を複雑にする必要がなく、適切な認可を確保できます。

初期段階では外部要件コントロールのためにプロジェクト設定のみを送信しているため、ユーザーは GitLab API カタログからクエリして、外部サービスでコントロールを実装するために必要な追加情報を取得することが期待されます。機能リクエストを受け取りながら、送信する情報の拡張を検討できます。

###### ワークフロー

1. 要件のコントロールを評価するとき、`external_url` が定義されており `control_type` が `external` であれば外部サービスへのリクエストを送信します。
1. POST 後、対応する `project_control_compliance_statuses` エントリの状態を `pending` に設定し、`30 分`のタイムアウトを許可します。
1. タイムアウトと同じ遅延で実行される別のワーカーがあり、タイムアウトしてまだ `pending` 状態にある各コントロールをチェックし、これらのエントリはデフォルトで `fail` 状態になります（これにより [ADR001](decisions/001_triggering_checks.md)で言及されている状態に追加の状態が加わります）。
1. 外部サービスが報告すると、外部サービスが示した結果（['fail', 'pass']）を `project_control_compliance_statuses` テーブルに設定します。外部サービスはいつでもコントロールのステータスを更新できます。

###### 監査

このワークフローでは以下のイベントに対して監査イベントを作成する必要があります：

1. 外部サービスへのメッセージのトリガー。
1. 外部サービスへのメッセージ送信時に HTTP 2xx 以外のステータスが発生した場合。
1. 外部サービスからの返信の保存。
1. タイムアウトに達したときにデフォルトで失敗状態になる場合。
1. コントロールへの編集（`external_url`、`secret_token` など）。

###### アプリケーションプログラミングインターフェース（API）

外部サービスが要件コントロールの結果を POST できるようにするために、その API を提供する必要があります。これにより外部システムが特定のプロジェクト要件のコンプライアンスステータスを報告およびクエリできます。

API 実装はこの提案に沿って実装できます。

---

**プロジェクト ID: `123` のコントロール ID: `123` のステータスを state: `pass` に更新する**

```bash

timestamp=$(date +%s)
nonce=$(openssl rand -hex 16)
path="/api/v4/projects/123/control_statuses/123/"
data="status=pass"

# Create signature string
sign_payload="${timestamp}${nonce}${path}${data}"

# Generate HMAC signature (sha256)
signature=$(echo -n "$sign_payload" | openssl dgst -sha256 -hmac "your_shared_secret" -hex | cut -d' ' -f2)

curl -x PUT \
 "https://gitlab.com/api/v4/projects/123/control_statuses/123/?status=pass" \
 -H "x-gitlab-timestamp: ${timestamp}" \
 -H "x-gitlab-nonce: ${nonce}" \
 -H "x-gitlab-hmac-sha256: ${signature}" \
 -H 'content-type: application/json'
```

---

**すべてのコントロールをリスト表示する**

注意：`external_url` を持つ各コントロールには独自の共有シークレットがあるため、すべての外部コントロールのリスト表示には GitLab パーソナルアクセストークン（glpat/PAT）を使用する必要があります。

```plaintext
curl -x GET \
 "https://gitlab.com/api/v4/projects/:id/control_statuses/" \
  -H 'Authorization: Bearer glpat-XXXXXXXXXXXXXXXXX' \
  -H 'content-type: application/json'
```

---

**GraphQL**

_タイプ_

```graphql
type ProjectsComplianceControlStatus {
  id: ID!
  status: ComplianceControlState!
  projectId: ID!
  namespaceId: ID!
  complianceRequirementId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum ComplianceControlState {
  FAIL
  SUCCESS
  PENDING
}
```

_クエリ_

注意：パーソナルアクセストークンを使用する場合。

```graphql
query GetProjectsComplianceControlStatus($id: ID!) {
  complianceStatus(id: $id) {
    id
    status
    projectId
    updatedAt
  }
}
```

---

**ミューテーション**

注意：適切な HMAC ヘッダーを使用する場合。

```graphql
mutation UpdateProjectsComplianceControlStatus(
  $id: ID!
  $status: ComplianceState!
) {
  updateComplianceStatus(
    input: {
      id: $id
      status: $status
    }
  ) {
    complianceStatus {
      id
      status
      updatedAt
    }
    errors
  }
}
```

### データベーススキーマ

コントロール式を別のデータベーステーブル `compliance_requirements_controls` に保存することが[決定されました](decisions/006_storing_controls_in_a_separate_table.md#decision)。

コンプライアンス要件は以下のスキーマを持つ別のテーブルに保存されます：

```mermaid
    classDiagram
    class namespaces {
        id: bigint
        name: text
        path: text
        ...(more columns)
    }
    class projects {
        id: bigint,
        name: text
        path: text
        description: text
        ...(more columns)
    }

    class project_compliance_framework_settings {
        id: bigint
        project_id: bigint
        framework_id: bigint
        ...(more columns)
    }

    class compliance_management_frameworks {
        id: bigint,
        name: text,
        description: text,
        ...(more columns)
    }

    class compliance_requirements {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        namespace_id: bigint
        framework_id: bigint
        name: text
        description: text
    }

    class compliance_requirements_controls {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        namespace_id: bigint
        requirement_id: bigint
        name: text
        control_type: smallint
        external_url: text
        expression: text
        encrypted_secret_token: bytea
        encrypted_secret_token_iv: bytea
    }

    class project_control_compliance_statuses {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        compliance_requirement_id: bigint
        compliance_requirements_control_id: bigint
        status: smallint
    }

    class project_compliance_violations {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        compliance_requirements_controls_id: bigint
        audit_event_id: bigint
        status: smallint
    }

    class audit_events {
        id: bigint
        author_id: bigint
        entity_id: bigint
        entity_type: string,
        details: text,
        author_name: text,
        entity_path: text,
        target_details: text,
        target_type: text,
        target_id: bigint
        ...(more columns)
    }

    namespaces --> projects  : has_many

    compliance_management_frameworks <--> project_compliance_framework_settings : has_many
    project_compliance_framework_settings <--> projects : many_to_many
    namespaces --> compliance_management_frameworks : has_many
    projects --> project_control_compliance_statuses : has_many
    projects --> project_compliance_violations : has_many
    compliance_management_frameworks --> compliance_requirements : has_many
    compliance_requirements_controls --> project_control_compliance_statuses : has_many
    compliance_requirements --> compliance_requirements_controls : has_many
    project_control_compliance_statuses <--> audit_events
    compliance_requirements_controls --> project_compliance_violations : has_many
    project_compliance_violations --> audit_events : has_one
    project_compliance_violations <-- audit_events : has_many
```

既存の `project_compliance_standards_adherence` テーブルを削除する予定です。要件をユーザーが必要に応じてカスタマイズおよびグループ化できるようにするために、要件を標準に直接関連付けたくないため、`standard` カラムを持ちません。

現在の実装とは異なり、コンプライアンス要件が設定されたプロジェクトの結果のみを保存します。列挙型の代わりに `project_control_compliance_statuses` テーブルに `compliance_requirement_id` を保存し、コンプライアンスダッシュボードでこれらの結果を表示します。

違反レコードは新しいテーブル `project_compliance_violations` に保存されます。これらの違反レコードは不変であり、ステータスの変更時に更新される `project_control_compliance_statuses` テーブルとは異なり、新しいレコードのみが挿入されます。これにより、プロジェクトの要件に対する違反の不変の履歴が作成されます。

次のイテレーションでは、コンプライアンス要件設定のインポートとエクスポートも許可します。

### 制約

機能はクエリのタイムアウトと悪いユーザーエクスペリエンスにつながる乱用を軽減するためのアプリケーション制限を考慮して設計する必要があります。

1. プロジェクトあたりの最大コンプライアンスフレームワーク数を制限：必要に応じて増やせる 20
1. フレームワークあたりの最大要件数を制限：必要に応じて増やせる 50
1. コントロール式が持てる最大チェック数を制限：必要に応じて増やせる 5
1. 式の作成に使用できるプロジェクト設定とアソシエーションの許可リスト

### コンプライアンスフレームワークのワークフロー図

#### コンプライアンスフレームワークの定義

このワークフロー図はコンプライアンスフレームワーク、要件、コントロールの作成、およびセキュリティポリシーが要件に関連付けられる方法を示しています。

```mermaid
flowchart TD
    A[User creates Compliance Framework] --> B[User adds Requirements to Framework]
    B --> C[User adds Controls in each Requirement]
    C --> D[User chooses one or more Policies for the Requirement]
    D --> F[User applies Framework to Project]

    A -- insert --> compliance_management_frameworks@{ shape: cyl }
    B -- insert --> compliance_requirements@{ shape: cyl }
    C -- update --> compliance_requirements@{ shape: cyl }
```

#### 定期的な設定ステータスチェックの実行フロー

このワークフロー図は、コンプライアンスフレームワークがプロジェクトに対してどのように設定ステータスチェックをトリガーするかを示しています。

```mermaid
flowchart TD
    F[User applies Framework to Project] --> G[Schedule recurring Configuration check sync job]
    G --> H[Get distinct list of actionable Controls in Frameworks applied to Project]
    H --> I[Loop through Controls]

    I --> TYPE{Control Type?}
    TYPE -- Internal --> J{Control has enforcement mechanism? setting/policy}
    TYPE -- External & has external_url --> EXT[Post message to external service]

    EXT --> PEND[Set control to pending state]
    PEND --> WAIT{Wait max 30 minutes}
    WAIT -->|No reply| FAIL[Default to failed]
    FAIL --> S
    WAIT -->|Got reply| REPLY[Use reply status]

    FAIL --> Q
    REPLY --> Q
    REPLY -->|Fail| S

    J -- Yes --> M[Check setting/policies configured correctly]
    J -- No --> N[Evaluate Control compliance]

    M --> O[Result: Pass/Fail]
    N --> O
    O --> Q[Upsert result in DB: project_control_compliance_statuses]
    N -- Fail --> S[Insert violation in DB: project_compliance_violations]@{ shape: cyl }

    Q --> T[Async Configuration check job repeats every 12 hours]
    T --> G
```

#### 違反トリガーの実行フロー

このワークフロー図は違反ステータスチェックがどのようにトリガーされて保存されるかを示しています。

```mermaid
flowchart TD
    %% Event-Triggered Violation Check
    F[User applies Framework to Project] --> U[Async Violation check job triggered by audit event]
    U --> V[Get all Controls in Framework applied to Project]
    V --> W[Loop through Controls]
    W --> X{Audit Event violates a Control?}
    X -- Yes --> Y[Insert violation in DB: project_compliance_violations]@{ shape: cyl }
    X -- No --> Z[No action needed]
    Y --> AA[Audit Event occurs]
    Z --> AA
    AA --> U
```

GitLab で定義された特定のコントロールにはイベントトリガーポイントがあります。このイベントがプロジェクトに対してトリガーされると、違反エンジンはプロジェクトがその要件コントロールで設定されたコンプライアンスフレームワークを持っているかどうかを確認します。プロジェクトがこれを設定していれば、イベントは違反として記録されます。

例えば、マージリクエストがマージされると、システムが潜在的な違反イベントをトリガーします。違反エンジンは、すべてのマージリクエストに 2 人の承認者が必要と定めるコントロールがプロジェクトに定義されているかどうかを確認し、マージリクエストの承認者が 2 人未満の場合に違反が作成されます。

GitLab で定義されたすべてのコントロールには、そのトリガーポイントとして設定された監査イベントタイプがあります。どのコントロールに関連付けられているかを示す新しいパラメーターを含めるために、監査イベントタイプ yml ファイルを更新します。1 つの監査イベントに複数のコントロールが関連付けられる場合があります（例：MR がマージされる場合など）。

#### 監査履歴

上記のワークフローでは、プロジェクトのコンプライアンスポスチャーの完全な履歴を提供するために、全体を通じて監査イベントがトリガーされます。例えば、プロジェクトがコントロールに対して評価されたときや、その評価の結果について監査イベントが記録されます。ユーザーは過去に設定ステータスが 1 つの状態から別の状態に変わった時期を確認できます。その後、[監査イベントレポート](https://docs.gitlab.com/ee/user/compliance/audit_events.html)または[ストリーミング監査イベント](https://docs.gitlab.com/ee/user/compliance/audit_event_streaming.html)を使用して他のワークフローをトリガーできます。

監査イベントは以下の場合に記録されます：

- ユーザーがアクションを実行する
- 設定チェックの結果
- 違反チェックの結果

### 意思決定

- ~~[001: チェックのトリガー](decisions/001_triggering_checks.md)~~（変更、ADR 004 を参照）
- [002: カスタム準拠レポート](decisions/002_custom_adherence_report.md)
- ~~[003: カスタムコントロール](decisions/003_custom_controls.md)~~（変更、ADR 006 を参照）
- [004: コントロールの時間ベースのトリガーを使用する](decisions/004_time_based_triggers.md)
- [005: 違反エンジン](decisions/005_violations_engine.md)
- [006: コントロールを別のテーブルに保存する](decisions/006_storing_controls_in_a_separate_table.md)
- [007: 外部コントロール](decisions/007_external_controls.md)
- [008: ポリシーの関係](decisions/008_policy_relationships.md)
