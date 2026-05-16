---
title: "インフラストラクチャ ラベルとタグ"
description: "このハンドブックセクションでは、GitLab の全部門・グループにわたる AWS および GCP のインフラストラクチャ標準の最新イテレーションを定義します。"
upstream_path: "/handbook/company/infrastructure-standards/labels-tags/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-09T23:17:15+01:00"
---

## クイックリファレンス

すべてのラベルとタグに `gl_` プレフィックスを使用します。すべてのキーはアンダースコア（`snake_case`）を使用します。すべての値はハイフン（スラッグ値には `alpha-dash`）を使用する必要がありますが、アンダースコアも許可されています。

特定のレルムのラベルとタグには、レルムプレフィックスを付ける必要があります。レルム変数の詳細については、各レルムのドキュメントをご覧ください。

### グローバルラベル/タグ

| スラッグ/ラベル/タグ/キー       | 使用方法                                | 人間向け名称              | ドキュメント                                                                       |
| ------------------------ | ------------------------------------ | ----------------------- | ----------------------------------------------------------------------------------- |
| `gl_realm`               | 必須                             | 環境レルム       | [使用ドキュメント](#environment-realm-gl_realm)                                  |
| `gl_env_type`            | 必須                             | 環境タイプ        | [使用ドキュメント](#environment-type-gl_env_type)                                |
| `gl_env_name`            | 必須                             | 環境名        | [使用ドキュメント](#environment-name-gl_env_name)                                |
| `gl_env_id`              | オプション                             | 環境 ID          | [使用ドキュメント](#automated-infrastructure-environment-id-gl_env_id)           |
| `gl_env_continent`       | オプション                             | 環境大陸   | [使用ドキュメント](#geographic-continent-region-of-environment-gl_env_continent) |
| `gl_owner_email_handle`  | 必須                             | オーナーメールハンドル      | [使用ドキュメント](#owner-email-handle-gl_owner_email_handle)                    |
| `gl_owner_timezone`      | オプション                             | オーナータイムゾーン          | [使用ドキュメント](#owner-timezone-gl_owner_timezone)                            |
| `gl_entity`              | オプション                             | GitLab エンティティ           | [使用ドキュメント](#gitlab-entity-gl_entity)                                     |
| `gl_dept`                | 必須                             | GitLab 部門       | [使用ドキュメント](#gitlab-department-gl_dept)                                   |
| `gl_dept_group`          | 必須                             | GitLab 部門グループ | [使用ドキュメント](#gitlab-department-group-gl_dept_group)                       |
| `gl_product_stage`       | オプション                             | GitLab プロダクトステージ    | [使用ドキュメント](#gitlab-product-stage-gl_product_stage)                       |
| `gl_product_category`    | 必須                             | GitLab プロダクトカテゴリ | [使用ドキュメント](#gitlab-product-category-gl_product_category)                       |
| `gl_service`             | オプション                             | GitLab サービス          | [使用ドキュメント](#service-catalog-reference-gl_service)                            |
| `gl_resource_type`       | オプション                             | クラウドリソースタイプ     | [使用ドキュメント](#resource-type-gl_resource_type)                              |
| `gl_resource_group`      | オプション                             | クラウドリソースグループ    | [使用ドキュメント](#resource-name-gl_resource_group)                             |
| `gl_resource_name`       | オプション                             | クラウドリソース名     | [使用ドキュメント](#resource-name-gl_resource_name)                              |
| `gl_resource_host`       | オプション                             | クラウドリソースホスト     | [使用ドキュメント](#resource-host-gl_resource_host)                              |
| `gl_data_classification` | オプション（データストレージには必須） | データ分類     | [使用ドキュメント](#data-classification-gl_data_classification)                  |

### レルムラベル/タグ

レルム固有のラベルとタグについては、各レルムのラベルとタグのハンドブックページをご覧ください。

- [infra-shared-services](/handbook/company/infrastructure-standards/realms/infra-shared-services/labels-tags)
- [it](/handbook/company/infrastructure-standards/realms/it/labels-tags)
- [saas](/handbook/company/infrastructure-standards/realms/saas/labels-tags)
- [sandbox](/handbook/company/infrastructure-standards/realms/sandbox/labels-tags)
- [security](/handbook/company/infrastructure-standards/realms/security/labels-tags)

### 設計上の決定と変更ログ

チームのフィードバックに基づいてこれらの標準の設計中に行われた変更の要約を、将来の参照のために保存しています。

- Issue のフィードバックに基づき、人事管理のレポートライン構造ではなく、機能チームに基づいて部門とグループのリストを刷新しました。
- GitLab ディビジョンは `gl_department` にプレフィックスが付いているため廃止されました。
- `gl_dept_group` のプレフィックスとして使用できるよう短くするため、`gl_department` を `gl_dept` に名称変更しました。
- `team` の曖昧さについてのフィードバックと、スプレッドシートで行った再マッピング（ほとんどの部門にはグループ/チームがあるが、エンジニアリングを除いてサブグループを持つものはなく、エンジニアリングにはサブ部門/ステージの組織階層がある）に基づき、`gl_team` を `gl_dept_group` に名称変更しました。エンジニアリングのサブ部門はラベル/タグ構造では使用しません。
- `gl_product_stage` を追加しました。以前のイテレーションでは `gl_stage` を使用していましたが、`stage` という用語は曖昧なため、プロダクトステージとして識別します。
- 業界で認識可能な省略形を使用して、より簡単なプレフィックス付けができるようにすべての値を略称化しました。省略形が普遍的に認識できない場合は完全な単語を使用します。Okta の統合では、インフラストラクチャに使用する短い名前に Workday の値を再マッピングします。
- GitLab.com のユーザー名はクラウドプロバイダーのラベルとタグで許可されていない文字を含む可能性があるため、`gl_owner_username` を削除しました。
- 期待される値を明確にするため、`gl_owner_email` を `gl_owner_email_handle` に名称変更しました。
- 現在のアーキテクチャでは別のツールで `gl_owner_email_handle` を使用してユーザー検索を行うため、クラウドリソースからはアクションを実行しない `gl_owner_slack_id` を削除しました。
- 各エンティティの収益割合に基づいてグローバルコストを配分する方法との既存の整合性のため、`gl_entity` に `allocate` の値を追加しました。
- GCP はラベルを使用しない限りリソースの種類や名前に基づいた簡単なレポートをサポートしていないため、`gl_resource_type` と `gl_resource_name` フィールドを追加しました。
- すべてのリソース（ディスク・ネットワークなど）の集約コストを表示するために、親リソースのコストを示す `gl_resource_host` を追加しました。
- infrastructure-as-code ツール（Ansible など）が同じタイプと設定の複数のインスタンスにリソースをデプロイできるようにするため、`gl_resource_group` を追加しました。
- 2021 年 7 月 22 日に、`gl_dept`・`gl_dept_group`・`gl_product_stage` のテーブルを最新の値で監査・更新しました。`gl_dept_group` の期待値の下に、名称変更または削除された部門グループのリストを含む新しいテーブルが追加されました。
- Demo Systems のインフラストラクチャが Business Technology によって管理されるようになったため、`sales-cs` レルムは `business-tech` レルムに統合されました。
- トップレベルのインフラストラクチャ管理のために `infra-shared-services` レルムが追加されました。
- GitLab サービスカタログへの参照として `gl_service` を[追加しました](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/17829)（2026 年）。

## 環境レルム (`gl_realm`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_realm: `eng-dev`
```

これは、ここにどのような種類のリソースが存在し、どのインフラチームが権威ある所有権を持っているかのトップレベルの識別のためのものです。

作成されるカスタムラベルまたはタグは、ラベル/タグキーのプレフィックスとして各レルムスラッグを使用する必要があります（例: `gl_sandbox_keyname`）。

### 共有サービス

<table>
    <thead>
        <tr>
            <th style="width: 25%;">値</th>
            <th style="width: 25%;">人間が読みやすい名称</th>
            <th style="width: 40%;">説明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>infra-shared-services</code></td>
            <td>
                <a href="/handbook/company/infrastructure-standards/realms/infra-shared-services/">Infrastructure Shared Services</a>
            </td>
            <td>
                Business Technology・Engineering Infrastructure・Infrastructure Security チームのインフラストラクチャレルムオーナーが管理するトップレベルのインフラストラクチャと共有サービス向けです。
            </td>
        </tr>
        <tr>
            <td><code>saas</code></td>
            <td>
                <a href="/handbook/company/infrastructure-standards/realms/saas/">GitLab SaaS</a>
            </td>
            <td>
                Engineering Infrastructure と Site Reliability Engineers が管理する GitLab.com SaaS 向けです。
            </td>
        </tr>
        <tr>
            <td><code>sandbox</code></td>
            <td>
                <a href="/handbook/company/infrastructure-standards/realms/sandbox/">Compute Sandbox Cloud</a>
            </td>
            <td>
                各チームメンバーが自己管理する、ユーザーごとのアカウント/プロジェクトを提供するサンドボックスおよびエフェメラルなテストリソース向けです。
            </td>
        </tr>
    </tbody>
</table>

- `gitter` レルムは 2021 年 7 月 22 日に削除されました。

### 部門レルム

<table>
    <thead>
        <tr>
            <th style="width: 25%;">値</th>
            <th style="width: 25%;">人間が読みやすい名称</th>
            <th style="width: 50%;">説明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>eng-infra</code></td>
            <td>
                <a href="/handbook/company/infrastructure-standards/realms/eng-infra/">Engineering Infrastructure</a>
            </td>
            <td>
                GitLab.com SaaS に特化していない場合がある Engineering Infrastructure と Site Reliability Engineers が管理する追加サービス（ツール・リリース・パッケージ管理サービスなど）向けです。
            </td>
        </tr>
    </tbody>
</table>

- `sales-cs` レルムは 2021 年 7 月 22 日に `business-tech` レルムに移行されました。

## 環境タイプ (`gl_env_type`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_env_type: 'experiment'
```

### 期待値

| 値         | 説明                                                             |
|---------------|-------------------------------------------------------------------------|
| `experiment`  | （デフォルト）個々のユーザー実験用で、インフラまたはセキュリティチームによってシャットダウンされたり、システム変更によってデータが失われても影響を受けません。 |
| `test`        | 複数のユーザーに影響する実験（顧客の概念実証や負荷テストなど）用で、シャットダウンされると混乱を招く影響があります。 |
| `stg`         | シャットダウンされると大きな影響を及ぼすツールなどのステージング環境用です。これらはインフラ/セキュリティチームに知られている環境です。インフラチームは `stag` や `stage` ではなく `stg` の使用を標準化しているため、ここでも普遍的に採用しています。 |
| `prd`         | シャットダウンされると大きな影響を及ぼすツールなどの本番または本番に近い環境用です。これらはインフラ/セキュリティチームに知られている環境です。インフラチームは `prod` ではなく `prd` の使用を標準化しているため、ここでも普遍的に採用しています。 |
| `other`       | 最終手段として `other` カテゴリを使用できます。これらは定期的なレビューの対象となります。 |

> このリストに新しい値を追加でき、他の変更は不要です。このリストはこのラベル/タグのために作成されており、別のソースから継承されたものではありません。

## 環境名 (`gl_env_name`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_env_name: 'learning-kubernetes'
```

環境名は、環境またはサービスの目的の短い名前または説明です。これは `gl_realm` と `gl_env_type` のサブ記述子です。このラベル/タグの標準と使用方法は使用される `gl_realm` によって異なり、各チームは合理的な方法で使用できます。

### レルム使用ガイドライン

| レルム              | 使用ガイドラインまたは標準                                                              |
|--------------------|--------------------------------------------------------------------------------------------|
| `infra-shared-services` | （将来使用のためのプレースホルダー）   |
| `saas`             | （将来使用のためのプレースホルダー）   |
| `business-tech`    | （将来使用のためのプレースホルダー）   |
| `eng-dev`          | （将来使用のためのプレースホルダー）   |
| `eng-infra`        | （将来使用のためのプレースホルダー、現在は `pet_name` と呼ばれています）                          |
| `eng-security`     | （将来使用のためのプレースホルダー）   |
| `eng-support`      | （将来使用のためのプレースホルダー）   |
| `sandbox`          | 目的の説明的な名前（例: `learning-kubernetes`、`tanuki-industries-iac-demo`）  |

## 自動化インフラストラクチャ環境 ID (`gl_env_id`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_env_id: 'a1b2c3d4'
```

環境 ID はさまざまな入力を許可しますが、一般的にはシステムによって生成される短い UUID・長い UUID・SHA またはその他の英数字識別子です。このラベル/タグの使用方法は使用される `gl_realm` によって異なり、各チームは合理的な方法で使用できます。

### レルム使用ガイドライン

| レルム              | 使用ガイドラインまたは標準  |
|--------------------|--------------------------------|
| `infra-shared-services` | （将来使用のためのプレースホルダー）   |
| `saas`             | （将来使用のためのプレースホルダー）   |
| `business-tech`    | （将来使用のためのプレースホルダー）   |
| `eng-dev`          | （将来使用のためのプレースホルダー）   |
| `eng-infra`        | （将来使用のためのプレースホルダー）   |
| `eng-security`     | （将来使用のためのプレースホルダー）   |
| `eng-support`      | （将来使用のためのプレースホルダー）   |
| `sandbox`          | AWS アカウントおよび GCP プロジェクトの場合、アカウントのプロビジョニングを処理したサンドボックスクラウドポータルのデータベースレコードの短い UUID です。Terraform で管理される環境の場合、これは Terraform 設定のコミット ID または SHA です（実装は様々です）。  |

## 環境の地理的大陸（リージョン）(`gl_env_continent`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_env_continent: 'america'
```

> `region` はあいまいな言葉なので混乱を避けるために `continent` を使用します。

これは、この環境のリソースがユーザーによって消費される大陸です。必ずしもデプロイされている場所や環境オーナーの居住地とは限りません。インフラストラクチャのメンテナンスが必要な場合やセキュリティインシデントが発生した場合のユーザーへの影響を理解するのに役立ちます。また、特定の大陸/リージョンにオートスケーリングリソースを持つグローバルリソースのメタデータとしても使用できますが、明示的なコスト配分には `gl_entity` ラベル/タグが必要です。

ビジネスで使用される略称は時間の経過とともに変わる可能性があり（例: `APJ`・`APAC`・`Asia Pacific`）、クラウドプロバイダーは異なる命名法を使用しているため、プログラマティックタイムゾーンのプレフィックスに基づく完全な名前を標準化しています（例: `America/Los_Angeles` は `america`）。地域固有でないサービスには `global` の値を使用できます。

### 期待値

| 値         | ビジネス略称     | クラウドプロバイダーリージョン                                                   |
|---------------|-----------------------|--------------------------------------------------------------------------|
| `global`      |                       | （デフォルト）グローバルリソースまたは地域固有でないサービス向け。      |
| `america`     | `AMER`、`US`、`NORAM` | AWS `us-*`/`ca-*`/`sa-*`、GCP `us-*`/`southamerica-*`/`northamerica-*`   |
| `europe`      | `EMEA`、`METNA`       | AWS `eu-*`/`me-*`、GCP `europe-*`                                        |
| `africa`      |                       | AWS `af-*`                                                               |
| `asia`        | `APAC`、`APJ`         | AWS `ap-*`/`cn-*`、GCP `asia-*`                                          |
| `australia`   | `APAC`、`APJ`         | AWS `ap-*`、GCP `australia-*`                                            |

> いくつかの可能なプレフィックス値は、簡潔さと適用の可能性が低いため、このリストから省略されています（例: `brazil`・`hongkong`・`indian` など）。環境オーナーの裁量で追加できます。

## オーナーメールハンドル (`gl_owner_email_handle`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_owner_email_handle: 'jmartin'
```

`@gitlab.com` の前のメールハンドルです。ラベルとタグは `@` と `.` の記号をサポートしていないため、ハンドルのみを使用します。値は個人ユーザーまたは Google Workspace グループエイリアスにできます。個人ハンドルの場合、`{firstinitial}{lastname}` とし、現在のアーキテクチャではユーザーエイリアスをプログラマティックに検索できないため、ユーザー名エイリアス（例: `jeff`）は使用しないでください。

これは Okta アカウントとの関連付け・インフラストラクチャ通知・追加メタデータによるユーザーのアカウント識別に使用されます。ユーザーはセキュリティアドバイザリ通知のメールを受け取る場合があります。

## オーナータイムゾーン (`gl_owner_timezone`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_owner_timezone: 'america-los_angeles'
```

これは、稼働時間を決定するために使用される環境オーナーのタイムゾーンです。稼働時間は午前 6 時（06:00）から午後 6 時（18:00）の間と想定されています。通常、システムを所有する人が 1〜2 人しかいない場合にのみ使用されます。グローバルカバレッジを持つシステムには、このラベル/タグを使用しないでください。

これはプログラマティックなタイムゾーン ID に基づいており、通常は `Continent/Locality` の形式に従います。完全な例のリストは [GCP ドキュメント](https://cloud.google.com/dataprep/docs/html/Supported-Time-Zone-Values_66194188)でご覧いただけます。

ラベルで許可されている文字に制限があるため、`/` は許可されておらず、小文字のラベルを使用します。そのため、スラッシュ `/` をハイフン `-` に置き換え、小文字のみを使用します。これは `+` 記号を使用できないため UTC 値を使用しないことにした理由でもあります。

### 値の例

- `america-los_angeles`
- `america-denver`
- `america-chicago`
- `america-new_york`
- `asia-singapore`
- `asia-tokyo`
- `australia-sydney`
- `africa-johannesburg`
- `europe-amsterdam`
- `europe-berlin`
- `europe-london`
- `europe-paris`
- `europe-vienna`

> これらは例であり、完全なリストではありません。インクルーシブなバリューの一環として、すべてのタイムゾーンが等しく価値があることをご了承ください。これはチームマップ上で一人当たりのチームメンバー数が最も多いいくつかの地域に基づいて作成されました。

## GitLab エンティティ (`gl_entity`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_entity: 'allocate'
```

これにより、財務レポートで各ビジネスエンティティにコストを配分できます。設定されていない場合、`allocate` と想定されます。

### 期待値

| 値         | 説明                                      |
|---------------|--------------------------------------------------|
| `allocate`    | （グローバルデフォルト）収益の % に基づいて配分  |
| `inc`         | GitLab Inc、アメリカ合衆国             |
| `ltd`         | GitLab Ltd、イギリス                       |
| `bv`          | GitLab BV、オランダ                       |
| `gmbh`        | GitLab GmbH、ドイツ                             |
| `pty`         | GitLab PTY Ltd、オーストラリア                        |
| `canada`      | （将来使用）GitLab Canada Corp.、カナダ         |
| `gk`          | （将来使用）GitLab GK、日本                    |

各エンティティの詳細については、[GitLab の住所](https://about.gitlab.com/company/visiting/)をご覧ください。

### レルム使用ガイドライン

| レルム              | 使用ガイドラインまたは標準  |
|--------------------|--------------------------------|
| `infra-shared-services` | （将来使用のためのプレースホルダー）   |
| `saas`             | （将来使用のためのプレースホルダー）   |
| `business-tech`    | （将来使用のためのプレースホルダー）   |
| `eng-dev`          | （将来使用のためのプレースホルダー）   |
| `eng-infra`        | （将来使用のためのプレースホルダー）   |
| `eng-security`     | （将来使用のためのプレースホルダー）   |
| `eng-support`      | （将来使用のためのプレースホルダー）   |
| `sandbox`          | チームメンバーが Workday で関連付けられている GitLab エンティティ。 |

### Workday マッピング

Okta 連携のテスト中に、このフィールドには予期しない追加の値が入力されています（例: `safeguard-italy`・`federal`）。これは [www-data/data/entity_mapper.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml) に記載されており、各エンティティをリストされているコストセンターエンティティにマッピングします。

## GitLab 部門 (`gl_dept`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_dept: eng-dev
```

業界で認識可能な省略形を使用して、より簡単なプレフィックス付けができるようにすべての値を略称化しました。省略形が普遍的に認識できない場合は完全な単語を使用します。Okta 連携では、YAML データファイルを使用してインフラストラクチャで使用する短い名前に Workday の値を再マッピングします。以下のテーブルでクイックリファレンスをご覧いただけます。

### 期待値

| ディビジョン    | 部門             | gl_dept（スラッグ/ラベル/タグ）   |
|-------------|------------------------|----------------------------|
| Engineering | Customer Support       | `eng-support`              |
| Engineering | Development            | `eng-dev`                  |
| Engineering | Infrastructure         | `eng-infra`                |
| Engineering | Quality                | `eng-quality`              |
| Engineering | Security               | `eng-security`             |
| Engineering | UX                     | `eng-ux`                   |
| GA          | Accounting             | `ga-accounting`            |
| GA          | Business Technology    | `ga-business-tech`          |
| GA          | CEO                    | `ga-ceo`                   |
| GA          | Finance                | `ga-finance`               |
| GA          | Legal                  | `ga-legal`                 |
| GA          | People Success         | `ga-people`                |
| GA          | Talent Acquisition     | `ga-talent-acquisition`    |
| Marketing   | Awareness              | `mktg-awareness`           |
| Marketing   | Brand & Digital Design | `mktg-brand-design`        |
| Marketing   | Campaigns              | `mktg-campaigns`           |
| Marketing   | Communications         | `mktg-communications`      |
| Marketing   | Developer Relations    | `mktg-community`           |
| Marketing   | Content Marketing      | `mktg-content`             |
| Marketing   | Digital Marketing      | `mktg-digital`             |
| Marketing   | Field Marketing        | `mktg-field`               |
| Marketing   | Inbound Marketing      | `mktg-inbound`             |
| Marketing   | Marketing Ops          | `mktg-ops`                 |
| Marketing   | Owned Events           | `mktg-events`              |
| Marketing   | Partner Marketing      | `mktg-partner`             |
| Marketing   | Product Marketing      | `mktg-product`             |
| Marketing   | Sales Development      | `mktg-sales-dev`           |
| Marketing   | Strategic Marketing    | `mktg-strategic`           |
| Product     | Product Management     | `product-mgmt`             |
| Sales       | Business Development   | `sales-alliances`          |
| Sales       | Channel                | `sales-channel`            |
| Sales       | Commercial Sales       | `sales-commercial`         |
| Sales       | Customer Success       | `sales-cs`                 |
| Sales       | Enterprise Sales       | `sales-ent`                |
| Sales       | Field Operations       | `sales-field-ops`          |
| Sales       | Practice Management    | `sales-practice-mgmt`      |

## GitLab プロダクトステージ (`gl_product_stage`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_product_stage: eng-dev-manage
```

`eng-dev` 部門には多くのグループがあるため、[プロダクトセクション、ステージ、グループ、カテゴリ](/handbook/product/categories/#devops-stages)ハンドブックページを使用してプロダクトステージを使用した親グループを定義します。設計討論中に、プロダクトカテゴリとサブ部門を使用することをイテレーションしましたが、ステージが最も理にかなっていました。

GitLab SaaS とインフラストラクチャのコスト配分または帰属のために、Engineering Infrastructure 部門のチームメンバーは `gl_product_stage` ラベルを使用して特定のステージに帰属させるべきリソースに付加できます。より詳細な帰属が必要な場合はオプションで `gl_dept_group` を使用できます。

### 期待値

| 値 | プロダクトカテゴリドキュメント |
|------------------------|--------------------------------------------------------------------------------------------------|
| `eng-dev-manage`       | [Manage ステージ](/handbook/product/categories/#manage-stage)               |
| `eng-dev-plan`         | [Plan ステージ](/handbook/product/categories/#plan-stage)                   |
| `eng-dev-create`       | [Create ステージ](/handbook/product/categories/#create-stage)               |
| `eng-dev-ecosystem`    | [Ecosystem ステージ](/handbook/product/categories/#ecosystem-stage)         |
| `eng-dev-verify`       | [Verify ステージ](/handbook/product/categories/#verify-stage)               |
| `eng-dev-package`      | [Package ステージ](/handbook/product/categories/#package-stage)             |
| `eng-dev-deploy`       | [Deploy ステージ](/handbook/product/categories/#deploy-stage)               |
| `eng-dev-monitor`      | [Monitor ステージ](/handbook/product/categories/#monitor-stage)             |
| `eng-dev-secure`       | [Secure ステージ](/handbook/product/categories/#sec-section)               |
| `eng-dev-govern`       | [Software Supply Chain Security ステージ](/handbook/product/categories/#software-supply-chain-security-stage) |
| `eng-dev-growth`       | [Growth ステージ](/handbook/product/categories/#growth-stage)               |
| `eng-dev-fulfillment`  | [Fulfillment ステージ](/handbook/product/categories/#fulfillment-stage)     |
| `eng-dev-enablement`   | [Enablement ステージ](/handbook/product/categories/#enablement-stage)       |
| `eng-dev-modelops`     | [ModelOps ステージ](/handbook/product/categories/#modelops-stage)           |
| `eng-dev-mobile`       | [Mobile ステージ](/handbook/product/categories/#mobile-stage)               |
| `eng-dev-deploy`       | [Deploy ステージ](/handbook/product/categories/#deploy-stage)               |

## GitLab プロダクトカテゴリ (`gl_product_category`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_product_category: gitaly
```

### 期待値

プロダクトカテゴリは、ハンドブックの [`categories.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/categories.yml) で定義されているカテゴリのいずれかと一致する必要があります: <https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/categories.yml>

この値を提供することで、コストを特定の機能セットと、プロダクトおよびエンジニアリングの両方の所有者セットに直接マッピングできます。

## サービスカタログ参照 (`gl_service`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_service: 'ci-runners'
```

このラベルは、リソースを [GitLab サービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)のエントリにリンクし、コスト配分とインシデント管理のための明確な所有権と運用責任を確立します。

### 期待値

サービスカタログエントリは GitLab サービスカタログのエントリと一致する必要があります。値の例:

- `ci-runners` - GitLab Runner サービス
- `ci-jobs-api` - CI ジョブ API サービス
- `frontend` - フロントエンドアプリケーションサービス
- `patroni-ci` - CI 用 Patroni クラスター

> 有効なサービスカタログエントリの完全なリストについては、サービスカタログをご参照ください。サービスがまだ登録されていない場合は[カタログへの追加](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/README.md?ref_type=heads)をご検討ください。

## GitLab 部門グループ (`gl_dept_group`)


{{% alert %}}
このラベル/タグは必須です。
{{% /alert %}}


```terraform
gl_dept_group: eng-support-americas
```

Engineering Development（`eng-dev`）部門グループの場合、プロダクトステージスラッグ（`gl_product_stage`）が `gl_dept_group` の値のプレフィックスとして使用されます。その他のすべての部門には、`gl_dept` スラッグをプレフィックスとして使用します。

すべての部門またはステージには、別途識別/機能するグループが必要でない場合に使用できるデフォルトの `shared-infra` ラベル/タグ/AWS アカウント/GCP プロジェクトがあります。インフラストラクチャの使用量が多いグループには、グループ名をサフィックスとして使用し、グループチームメンバーが使用する専用の AWS アカウント/GCP プロジェクトを提供します。

GitLab の他の部門に共有サービスを提供するグループには、共有コスト配分に使用できる `shared-services` グループ値もあります。チーム自身のリソースには `shared-infra` を使用し、私たちが管理する他の全員のリソースには `shared-services` を使用します。

このスキーマの設計に使用した[スプレッドシート](https://docs.google.com/spreadsheets/d/1adgn5CLB4DdhpoG3TnFsOmeSYg8n8Bvl_g7GFPEl8vs/edit#gid=26160192)で編集可能なバージョンを取得できますが、最近の変更は反映されていない場合があり、このハンドブックページが SSOT（信頼できる唯一の情報源）です。

### 期待値


{{% alert %}}
以下に記載されているグループにグループドキュメントリンクがない場合、そのグループの AWS アカウントまたは GCP プロジェクトはまだ作成されていないと安全に想定できます。グループのプロビジョニング手順に従ってください（TODO）。
{{% /alert %}}


<!-- グループドキュメントを追加するには、新しいページへのリンクを追加してください [グループドキュメント](/handbook/company/infrastructure-standards/realms/{realm_name}/groups/{gl_dept_group}) -->

グループの完全なリストは 2021 年 7 月 22 日に最終監査・更新されました。

**脚注:**

1. グループが名称変更または削除された場合、以下の[廃止グループ名](#deprecated-group-names)テーブルに表示されます。名称変更されたグループには脚注の指標があります。
1. 最初のリストが作成された後に追加されました。
1. これはチームと直接対応しない可能性がある特別なグループです。`eng-dev` の場合、通常は[その他の機能](/handbook/product/categories/#other-functionality)の下に表示されます。

| gl_realm        | gl_dept                  | gl_product_stage                  | gl_dept_group                        | グループドキュメント |
|-----------------|--------------------------|-----------------------------------|--------------------------------------|---------------------|
| infra-shared-services | wg-infra-shared-services |                             | wg-infra-shared-services [^2]        | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-access                | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-import                | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-optimize [^1]         | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-shared-infra            | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-project-mgmt            | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-product-planning [^1]   | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-certify                 | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-source-code [^3]           | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-code-review [^2] [^3]     | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-editor                | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-gitaly                | |
| eng-dev         | eng-dev                  | eng-dev-ecosystem                 | eng-dev-ecosystem-integrations       | |
| eng-dev         | eng-dev                  | eng-dev-ecosystem                 | eng-dev-ecosystem-foundations        | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-ci [^3]               | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-pipeline-authoring [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-pipeline-execution [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-runner                | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-testing               | |
| eng-dev         | eng-dev                  | eng-dev-package                   | eng-dev-package-shared-infra         | |
| eng-dev         | eng-dev                  | eng-dev-package                   | eng-dev-package-package              | |
| eng-dev         | eng-dev                  | eng-dev-deploy                    | eng-dev-deploy-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-deploy                    | eng-dev-deploy-environments          | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-shared-infra         | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-monitor [^1] [^2]    | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-apm [^3]             |  |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-health [^3]          |  |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-static-analysis       | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-dynamic-analysis      | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-composition-analysis  | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-fuzz-testing          | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-research              | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-security-policies     | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-threat-insights       | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-compliance            | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-shared-infra [^2]   | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-applied-ml [^2]     | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-ml-ops [^2]         | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-data-ops [^2]       | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-activation [^1] [^2]      | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-adoption [^1] [^2]            | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-conversion            | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-expansion             | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-retention             | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-product-intelligence [^1] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-shared-infra [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-shared-services [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-purchase [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-license [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-utilization [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-shared-infra      | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-distribution      | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-geo               | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-search            | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-sharding [^2]     | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-database          | |
| eng-dev         | eng-dev                  | eng-dev-mobile (S.E.G.)           | eng-dev-mobile-devops-apps [^2]      | |
| eng-dev         | eng-dev                  | eng-dev-deploy (S.E.G.)           | eng-dev-deploy-five-min-app [^2]     | |
| eng-infra       | eng-infra                |                                   | eng-infra-shared-infra              | |
| eng-infra       | eng-infra                |                                   | eng-infra-shared-services            | |
| eng-infra       | eng-infra                |                                   | eng-infra-analytics                  | |
| eng-infra       | eng-infra                |                                   | eng-infra-tenant-scale                  | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-shared-infra [^2]  | |
| eng-infra       | eng-infra                | eng-infra-delivery                | eng-infra-automation [^2]            | |
| eng-infra       | eng-infra                | eng-infra-scalability             | eng-infra-scalability                | |
| eng-infra       | eng-infra                |                                   | eng-infra-deliverability             | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-database [^2]      | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-foundations [^2]   | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-general [^2]       | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-observability [^2] | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-practices [^2]     | |
| eng-infra       | eng-infra                | eng-infra-enablement              | eng-infra-cloud-connector            | |
| eng-infra       | eng-infra                | eng-infra-dev-ex                  | eng-infra-dev-ex-feature-readiness [^2] | |
| eng-dev         | eng-quality              |                                   | eng-quality-shared-infra             | |
| eng-dev         | eng-quality              |                                   | eng-quality-env-toolkit [^2]         | |
| eng-dev         | eng-quality              |                                   | eng-quality-ops-ci-cd                | |
| eng-dev         | eng-quality              |                                   | eng-quality-secure-enablement        | |
| eng-dev         | eng-quality              |                                   | eng-quality-productivity             | |
| eng-dev         | eng-quality              |                                   | eng-quality-growth-govern            | |
| eng-security    | eng-security             |                                   | eng-security-shared-infra            | |
| eng-security    | eng-security             |                                   | eng-security-shared-services         | |
| eng-security    | eng-security             |                                   | eng-security-ops-infra               | |
| eng-security    | eng-security             |                                   | eng-security-ops-red                 | |
| eng-security    | eng-security             |                                   | eng-security-ops-incident-response   | |
| eng-security    | eng-security             |                                   | eng-security-ops-trust-safety        | |
| eng-security    | eng-security             |                                   | eng-security-risk-compliance         | |
| eng-security    | eng-security             |                                   | eng-security-eng-app-sec             | |
| eng-security    | eng-security             |                                   | eng-security-eng-automation          | |
| eng-security    | eng-security             |                                   | eng-security-eng-research            | |
| eng-security    | eng-security             |                                   | eng-security-eng-vuln-mgmt           | |
| eng-security    | eng-security             |                                   | eng-security-logging                 | |
| eng-support     | eng-support              |                                   | eng-support-shared-infra             | |
| eng-support     | eng-support              |                                   | eng-support-saas                     | |
| eng-support     | eng-support              |                                   | eng-support-self-managed             | |
| eng-support     | eng-support              |                                   | eng-support-americas                 | |
| eng-support     | eng-support              |                                   | eng-support-emea                     | |
| eng-support     | eng-support              |                                   | eng-support-apac                     | |
| eng-dev         | eng-ux                   |                                   | eng-ux-shared-infra                  | |
| eng-dev         | eng-ux                   |                                   | eng-ux-technical-writing             | |
| eng-dev         | eng-ux                   |                                   | eng-ux-research                      | |
| business-tech    | ga-accounting           |                                   | ga-accounting-shared-infra           | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-shared-infra        | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-shared-services     | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-engineering [^2]    | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-integrations [^2]   | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-operations          | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-data                | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-procurement [^2]    | |
| business-tech    | ga-ceo                   |                                   | ga-ceo-shared-infra                  | |
| business-tech    | ga-finance               |                                   | ga-finance-shared-infra              | |
| business-tech    | ga-legal                 |                                   | ga-legal-shared-infra                | |
| business-tech    | ga-people                |                                   | ga-people-shared-infra               | |
| business-tech    | ga-recruiting            |                                   | ga-recruiting-shared-infra           | |
| business-tech    | mktg-awareness           |                                   | mktg-awareness-shared-infra          | |
| business-tech    | mktg-brand-design        |                                   | mktg-brand-design-shared-infra       | |
| business-tech    | mktg-campaigns           |                                   | mktg-campaigns-shared-infra          | |
| business-tech    | mktg-communications      |                                   | mktg-communications-shared-infra     | |
| business-tech    | mktg-community           |                                   | mktg-community-shared-infra          | |
| business-tech    | mktg-content             |                                   | mktg-content-shared-infra            | |
| business-tech    | mktg-digital             |                                   | mktg-digital-shared-infra            | |
| business-tech    | mktg-field               |                                   | mktg-field-shared-infra              | |
| business-tech    | mktg-inbound             |                                   | mktg-inbound-shared-infra            | |
| business-tech    | mktg-ops                 |                                   | mktg-ops-shared-infra                | |
| business-tech    | mktg-events              |                                   | mktg-events-shared-infra             | |
| business-tech    | mktg-partner             |                                   | mktg-partner-shared-infra            | |
| business-tech    | mktg-product             |                                   | mktg-product-shared-infra [^2]       | |
| business-tech    | mktg-sales-dev           |                                   | mktg-sales-dev-shared-infra          | |
| business-tech    | mktg-strategic           |                                   | mktg-strategic-shared-infra          | |
| business-tech    | mktg-strategic           |                                   | mktg-strategic-technical-mktg        | |
| eng-dev          | product-mgmt             |                                   | product-mgmt-shared-infra            | |
| business-tech    | sales-alliances          |                                   | sales-alliances-shared-infra         | |
| business-tech [^1] | sales-channel          |                                   | sales-channel-shared-infra           | |
| business-tech      | sales-commercial       |                                   | sales-commercial-shared-infra        | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-shared-infra                | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-demo-cloud                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-training-cloud              | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-shared-infra             | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-us-west                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-us-east                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-pub-sec                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-mid-market               | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-emea                     | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-apac                     | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-shared-infra            | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-us-west                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-us-east                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-pub-sec                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-emea                    | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-apac                    | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-shared-infra             | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-consulting               | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-education                | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-pub-sec                  | |
| business-tech    | sales-ent                |                                   | sales-ent-shared-infra               | |
| business-tech    | sales-field-ops          |                                   | sales-field-ops-shared-infra         | |
| business-tech    | sales-practice-mgmt      |                                   | sales-practice-mgmt-shared-infra     | |

### 廃止グループ名

以下のグループ名は名称変更または削除されており、レガシーインフラストラクチャで引き続き使用されている可能性があるため、参照用に保存されています。

| 変更日  | gl_realm        | gl_dept                  | gl_product_stage                  | gl_dept_group                        | 置き換え先                                 |
|-----------------|-----------------|--------------------------|-----------------------------------|--------------------------------------|-----------------------------------------------|
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-analytics             | eng-dev-manage-optimize                       |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-portfolio-mgmt          | eng-dev-plan-product-planning                 |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-gitter                | N/A                                           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-progressive-delivery | N/A                                           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-acquisition           | eng-dev-growth-activation、eng-dev-growth-adoption  |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-telemetry             | eng-dev-growth-product-intelligence           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-fulfillment           | eng-dev-fulfillment-purchase、eng-dev-fulfillment-license、eng-dev-fulfillment-utilization |
| 2021-07-22      | business-tech   | ga-business-tech         |                                   | ga-business-tech-systems             | ga-business-tech-engineering、ga-business-tech-integrations |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-shared-infra         | eng-dev-deploy-shared-infra                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-release-mgmt         | eng-dev-deploy-environments                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-configure                 | eng-dev-configure-shared-infra       | eng-dev-deploy-shared-infra                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-configure                 | eng-dev-configure-configure          | eng-dev-deploy-environments                   |
| 2023-10-19      | eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-memory            | eng-infra-cloud-connector |

## リソースタイプ (`gl_resource_type`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_resource_type: compute-instance
```

GCP はラベルを使用しない限りリソースの種類や名前に基づいた簡単なレポートをサポートしていません。これはオプションですが、コストが大きなリソースや本番サービスの一部であるリソースには推奨されます。サンドボックスやエフェメラルなユースケースには推奨しません。

### 期待値

| 値                  | 推奨される使用方法 |
|------------------------|---------------------------------------------------------------------------|
| `compute-cluster`      | AWS EKS、GCP Kubernetes Engine（GKE）クラスター                              |
| `compute-container`    | AWS ECS                                                                   |
| `compute-instance`     | AWS EC2 インスタンス、GCP Compute Engine インスタンス                             |
| `serverless`           | AWS Lambda、GCP AppEngine                                                 |
| `storage-disk`         | インスタンス用の永続ストレージディスク                                    |
| `storage-snapshot`     | （任意使用のプレースホルダー、自動ラベル/タグ付けが容易でない）         |
| `storage-bucket`       | AWS S3、GCP Google Cloud Storage（GCS）                                    |
| `network`              | AWS VPC、GCP ネットワーク/VPC                                                  |
| `network-lb`           | AWS ELB                                                                   |
| `network-nat`          | AWS NAT                                                                   |
| `network-firewall`     | ファイアウォールルール                                                            |
| `network-ip`           | 外部 IP アドレス                                                     |
| `network-bandwidth`    | （任意使用のプレースホルダー）                                    |
| `database`             | AWS RDS、AWS Aurora、GCP CloudSQL など                                   |
| `queue`                | AWS ElastiCache、MQ、SQS、GCP CloudTasks など                            |
| `logging`              | （任意使用のプレースホルダー）                                     |

## リソース名 (`gl_resource_group`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_resource_group: prod-app
```

これは Terraform・Ansible・その他の関連する infrastructure-as-code またはツールで使用するためのオプションです。

このキーの値は、infrastructure-as-code グループ定義内のグループの名前と一致する必要があります（例: Ansible ロール/グループの命名）。

## リソース名 (`gl_resource_name`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_resource_name: prod-app-web1
```

このキーの値は、クラウドコンソールのリソースの名前と一致する必要があります。

GCP はラベルを使用しない限りリソースの種類や名前に基づいた簡単なレポートをサポートしていません。これはオプションですが、コストが大きなリソースや本番サービスの一部であるリソースには推奨されます。サンドボックスやエフェメラルなユースケースには推奨しません。

## リソースホスト (`gl_resource_host`)


{{% alert %}}
このラベル/タグはオプションです。
{{% /alert %}}


```terraform
gl_resource_host: prod-app-web1
```

これは、子リソース（ディスク・スナップショット・バケット・ネットワーク IP など）を親リソース（例: `compute-instance`）に関連付けて、リソースの集約コストを表示するために使用されます。

このキーの値は、クラウドコンソールの親リソースの名前と一致する必要があります。

GCP はラベルを使用しない限りリソースの種類や名前に基づいた簡単なレポートをサポートしていません。これはオプションですが、コストが大きなリソースや本番サービスの一部であるリソースには推奨されます。サンドボックスやエフェメラルなユースケースには推奨しません。

## データ分類 (`gl_data_classification`)


{{% alert %}}
このラベル/タグはデータを保存するリソース（データベース・ストレージバケットなど）に必須です。
{{% /alert %}}


```terraform
gl_data_classification: red
```

値は、クラウドプロバイダーのタグとラベルの一貫性のためにすべて小文字で（[データ分類レベル](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels)）ドキュメントに記載されているものと一致する必要があります。

### 期待値

| 値      |
|------------|
| `red`      |
| `orange`   |
| `yellow`   |
| `green`    |

## 会計と財務報告

[透明性のバリュー](/handbook/communication/confidentiality-levels/#not-public)に沿って、財務情報を公開で共有することはできません。チームメンバーは、ラベルとタグが財務報告にどのように影響するかの詳細をこの [Issue](https://gitlab.com/gitlab-com/compute-sandbox/issue-tracking/-/issues/3#impact-to-accounting-and-financial-reporting) で確認できます。この[ドキュメント](https://docs.google.com/document/d/1p4pzquEZjXRZfcdgSUQZ2Kw988o3sdknq5ZQVxtGAkw/edit?usp=sharing)に、本番環境のコスト配分手法があります。

## ビジネスオーナーとインフラチームへの影響

ラベルとタグスキーマの最大の影響は、各クラウドプロバイダーでプロビジョニングされたすべてのリソースに対する既知のオーナーと部門の識別、およびインフラ/セキュリティレビュー中に参照できる Terraform 設定へのクロスリファレンスです。

放置されたインフラストラクチャの問題を解決するリソースに時間制限を設定できることで、大幅なコスト削減が可能です。また、非稼働時間（夜間と週末）にインフラストラクチャを自動的にシャットダウンする自動化を実装することで、支出の最大 65% を節約できます。

## ユーザーとマネージャーへの影響

ラベルとタグにより、インフラストラクチャに関するレポートが容易になり、何が実行されているかを理解し、プロビジョニングしたリソースのコストを自己管理するのに役立ちます。

ほとんどのラベルとタグは Terraform と自動化によって自動的に追加されるか、サンドボックスアカウントのアカウント/プロジェクトレベルで追加されるため、ユーザーがリソースにラベル/タグを追加することを覚えておく必要は大きくありません。

将来の自動化では、メール・GitLab ユーザー名・Slack ID が自動的に関連付けられているため、システムの脆弱性に関する通知・セキュリティインシデント・インフラストラクチャの有効期限が近づいていることの Slack でのフレンドリーなリマインダーを含む、ユーザーへの摩擦のないエクスペリエンスを作成することもできます。

## 脚注

[^1]: 最初のリストが作成された後に名称変更または削除されました。
[^2]: このグループは最初のリストが作成された後に追加されました。
[^3]: これはチームと直接対応しない可能性がある特別なグループです。`eng-dev` の場合、通常は[その他の機能](/handbook/product/categories/#other-functionality)の下に表示されます。
