---
title: "モジュール化された機能の OpenAPI 仕様の公開"
description: "モジュール化された機能を担当するチームが OpenAPI 3.1 仕様を公開 API リファレンスに掲載し、内部オペレーションやドキュメントを除外するための手順です。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/theseus_platform_vision/openapi_publishing/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-19T10:20:22+01:00"
translated_at: "2026-10-20T12:33:40+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

このページでは、モジュール化された機能の OpenAPI 仕様を、`https://api.gitlab.com/rest/` の公開 API リファレンスに掲載する手順を示します。
ルールは [ADR 008](/handbook/engineering/architecture/design-documents/theseus_platform_vision/decisions/008_openapi_specification_for_modular_http_apis/)に記載されています。

対象外:

- リントのルールセット。[ルールセットのドキュメント](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/blob/main/openapi-ruleset.md)を参照してください。
- 破壊的変更の検出。[エピック 432](https://gitlab.com/groups/gitlab-org/quality/-/work_items/432)を参照してください。
- 契約テスト。[エピック 434](https://gitlab.com/groups/gitlab-org/quality/-/work_items/434)を参照してください。

## 開始前に {#before-you-start}

ドキュメントを公開対象として登録するには、そのリポジトリが公開されている必要があります。
公開リファレンスは、登録されたすべてのドキュメントを、公開の `gitlab-org/api-docs` リポジトリにコミットします。

自分のチーム外から、2 つの承認が必要です。

1. API Platform のコードオーナーが、`gitlab-org/api-docs` への変更を承認します（手順 5）。Maintainer がマージします。
1. `gitlab-com/gl-infra`、`gitlab-org/delivery`、または `gitlab-org/production-engineering` の infra-mgmt 承認者が、`gitlab-com/gl-infra/infra-mgmt` への変更を承認します（手順 6）。Fleet Management がそのファイルを所有しています。

| # | 手順 | ファイル | 実施者 |
|-|-|-|-|
| 1 | API 領域ごとに 1 つのドキュメントを作成する | `openapi/*.yaml` | チーム |
| 2 | 公開ドキュメントに絶対 `servers` URL を設定する | 公開ドキュメント | チーム |
| 3 | ドキュメントごとに `apis` エントリーを 1 つ追加する | `openapi/redocly.yaml` | チーム |
| 4 | 内部オペレーションに印を付ける | オペレーションの `x-gitlab-internal` | チーム |
| 5 | 各公開ドキュメントを登録する | api-docs の `src/config/specs.js` | チームが MR を作成します。API Platform のコードオーナーが承認します。Maintainer がマージします。 |
| 6 | トリガートークンを作成する | infra-mgmt の `environments/gitlab-com/project_api_docs_trigger_tokens.tf` | チームが MR を作成します。infra-mgmt 承認者が承認します。Atlantis が適用します。 |
| 7 | `api-docs-refresh` を組み込む | `.gitlab-ci.yml` | チーム |
| 8 | 結果を確認する | なし | チーム |

手順 7 の前に手順 5 を行ってください。未登録の仕様では、何も更新されません。
手順 7 の前に手順 6 を行ってください。トークンがないと、デフォルトブランチでジョブが失敗します。
手順 6 と 7 が完了するまでは、毎日 05:00 UTC に行う api-docs の更新により、変更が 1 日以内に反映されます。

具体例は Artifact Registry です。
あくまで例です。そのリポジトリは `gitlab-org/ops/artifact-registry` です。

## 手順 1. API 領域ごとに 1 つのドキュメントを作成する {#step-1-write-one-document-per-api-surface}

各ドキュメントを、コンポーネントのリポジトリの `openapi/` に置いてください。
ドキュメントが複数のアセンブリにまたがることはありません。
コンポーネントのリポジトリには複数のアセンブリを置けるため、それらのドキュメントは `openapi/` を共有します。
ドキュメント名は、提供するアセンブリ、記述する API 領域、メジャーバージョンに基づいて付けてください。

- アセンブリの主要な API 領域には `<assembly>-v<major>.yaml` を使用します。
- 追加の各領域には `<assembly>-<surface>-v<major>.yaml` を使用します（例: `<assembly>-internal-v1.yaml`）。

`<assembly>` は、`bench.yaml` 内のアセンブリの `name` です。
各ドキュメントをどのように生成するかは、自分で選択します。

## 手順 2. 公開ドキュメントに絶対 `servers` URL を設定する {#step-2-give-the-public-document-an-absolute-servers-url}

絶対 URL により、`api.gitlab.com` の「Try it」は、`api.gitlab.com` ではなく自分のサービスを呼び出します。
セルフマネージド環境のインストールは独自のドメインで動作するため、ホストは変数にします。
相対 `/` エントリーは、同一オリジンの呼び出し元が機能し続けるようにします。
次は、Artifact Registry の公開ドキュメントのブロックです。

```yaml
# openapi/<assembly>-v1.yaml
servers:
  - url: https://{hostname}
    description: The Artifact Registry service.
    variables:
      hostname:
        default: artifact-registry.gitlab.com
        description: The Artifact Registry host serving this API.
  - url: /
    description: The artifact-registry service root.
```

## 手順 3. ドキュメントごとに apis エントリーを追加する {#step-3-add-an-apis-entry-per-document}

`bench scaffold` は `openapi/redocly.yaml` を作成します。
このファイルは、完全なリリースタグで指定した共有ルールセットを拡張します。
`openapi/` の各ドキュメントに対し、`apis` エントリーを 1 つ追加してください。
次は、Artifact Registry の 2 つのドキュメントを追加した後のファイルです。

```yaml
# openapi/redocly.yaml
# The shared ruleset is a floor: add rules here, never switch off or weaken one.
# Docs: https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/blob/main/openapi-ruleset.md
extends:
  - https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/raw/v5.37.0/openapi-ruleset.yaml
apis:
  management@v1:
    root: v1.yaml
  gitlab@v1:
    root: gitlab-v1.yaml
```

後でルールセットの固定バージョンを変更する場合は、マイナータグではなく、必ず完全なリリースタグを使用してください。
[ルールセットのドキュメント](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/blob/main/openapi-ruleset.md)を参照してください。
リントの CI コンポーネントは、まだ提供されていません。

## 手順 4. 内部オペレーションに印を付ける {#step-4-mark-internal-operations}

内部オペレーションには、オペレーションオブジェクトの `x-gitlab-internal: true` で印を付けてください。

```yaml
paths:
  /example:
    get:
      x-gitlab-internal: true
      # ... rest of the operation
```

暫定ルール: api-docs はドキュメント全体を公開するため、この印ではまだ何も非表示になりません。
api-docs のフィルターが提供されるまでは、内部オペレーションを別のドキュメントに分け、そのドキュメントを `specs.js` に登録しないでください。
Artifact Registry では、`gitlab-v1.yaml` でこのようにしています。
[内部オペレーションとドキュメント](#internal-operations-and-documents)を参照してください。

## 手順 5. 各公開ドキュメントを登録する {#step-5-list-each-public-document}

[`gitlab-org/api-docs`](https://gitlab.com/gitlab-org/api-docs)で、`src/config/specs.js` にエントリーを追加する MR を作成してください。
各公開ドキュメントに対して、エントリーを 1 つ追加してください。
内部ドキュメントや、コンポーネントがリファレンスの対象外としているドキュメントは登録しないでください。
API Platform のコードオーナーが各エントリーを承認します。
次は Artifact Registry のエントリーです。

```js
  {
    title: 'GitLab Artifact Central API',
    slug: 'artifact-central',
    file: 'artifact_registry_v1.json',
    published: true,
    // Not translated, so the Japanese reference serves it in English.
    upstream: {
      en: gitlabFile('gitlab-org/ops/artifact-registry', 'api/openapi/v1.yaml'),
    },
  },
```

次は汎用的な形式です。

```js
  {
    title: '<display name>',
    slug: '<component name>',
    file: '<service>_v1.json',
    published: true,
    upstream: {
      en: gitlabFile('<project path>', 'openapi/v1.yaml'),
    },
  },
```

各フィールド:

1. `title` は表示名です。
1. `slug` は永続的な URL です。プロトコル名ではなく、コンポーネント名に基づく 1 つのパスセグメントを使用してください。Scalar は、`#gitlab/tag/projects` のように、すべてのリンクのハッシュにこれを接頭辞として付けます。変更すると、共有済みのすべてのリンクが壊れます。
1. `file` は、`https://api.gitlab.com/rest/<file>` で配信するファイル名です。
1. `published` は、すべてのエントリーで必須です。`true` はドキュメントを表示します。`false` は取得、リント、最新状態の維持を行いますが、表示はしません。`false` は非公開を意味しません。ドキュメントは引き続き公開リポジトリにコミットされ、`/rest/<file>` にデプロイされます。
1. `upstream` は、ロケールと URL を対応付けます。`en` は必須です。`ja` は任意です。`gitlabFile(project, path, ref = 'main')` が URL を組み立てます。デフォルトブランチが `main` でない場合は、第 3 引数を渡してください。
1. `default: true` をコピーしないでください。これは `gitlab` エントリーだけが持ちます。

`specs.js` ファイルには、「upstream が非公開の仕様は決して登録しない」と記載されています。
api-docs は取得時に `JOB-TOKEN` ヘッダーを送信するため、非公開の upstream を取得して、そのまま公開してしまう可能性があります。

## 手順 6. トリガートークンを作成する {#step-6-create-the-trigger-token}

[`gitlab-com/gl-infra/infra-mgmt`](https://gitlab.com/gitlab-com/gl-infra/infra-mgmt)で、`environments/gitlab-com/project_api_docs_trigger_tokens.tf` にトークンと CI/CD 変数を追加する MR を作成してください。
利用するプロジェクトごとに、トークンを 1 つ設けます。
infra-mgmt の `Infrastructure` ルールから、1 件の承認が必要です。Fleet Management がコードオーナーです。マージ後に Atlantis が変更を適用します。
トークンは、マスクおよび保護された `API_DOCS_TRIGGER_TOKEN` 変数としてプロジェクトに届きます。

次は Artifact Registry の組み合わせです。

```hcl
resource "gitlab_pipeline_trigger" "api-docs-trigger-artifact-registry" {
  project     = module.project_api_docs.id
  description = "Triggered by gitlab-org/ops/artifact-registry to refresh its OpenAPI spec (IaC managed)"
}

resource "gitlab_project_variable" "api-docs-trigger-artifact-registry" {
  project = 79865069 # gitlab-org/ops/artifact-registry, not managed in this environment

  key   = "API_DOCS_TRIGGER_TOKEN"
  value = gitlab_pipeline_trigger.api-docs-trigger-artifact-registry.token

  protected         = true
  masked            = true
  environment_scope = "*"
}
```

次は汎用的なコピーです。

```hcl
resource "gitlab_pipeline_trigger" "api-docs-trigger-<service>" {
  project     = module.project_api_docs.id
  description = "Triggered by <project path> to refresh its OpenAPI spec (IaC managed)"
}

resource "gitlab_project_variable" "api-docs-trigger-<service>" {
  project = <project ID> # <project path>, not managed in this environment

  key   = "API_DOCS_TRIGGER_TOKEN"
  value = gitlab_pipeline_trigger.api-docs-trigger-<service>.token

  protected         = true
  masked            = true
  environment_scope = "*"
}
```

## 手順 7. `api-docs-refresh` を組み込む {#step-7-include-api-docs-refresh}

[`api-docs-refresh` コンポーネント](https://gitlab.com/gitlab-com/gl-infra/common-ci-tasks/-/blob/main/api-docs-refresh.md)を、自分の `.gitlab-ci.yml` に追加してください。
`spec_paths` 内のパスが変更されたときに、デフォルトブランチへのプッシュで実行されます。
gitlab.com でのみ実行され、`*/security/*` ミラーでは実行されません。
トリガートークンを使用するため、誰がマージしたかは関係ありません。
デフォルトブランチは保護されている必要があります。

```yaml
include:
  - component: $CI_SERVER_FQDN/gitlab-com/gl-infra/common-ci-tasks/api-docs-refresh@v5.38
    inputs:
      spec_paths:
        - openapi/v1.yaml
```

他の common-ci-tasks コンポーネントと同じバージョンを使用してください。
これらは include を共有しており、バージョンが一致しないと、どれが優先されるかが通知なしに変わります。
`stage` のデフォルトは `validate` です。異なるステージが必要な場合にのみ、`stage` を設定してください。Artifact Registry は `publish` を設定しています。
`spec_paths` には公開ドキュメントだけを列挙してください。Artifact Registry は `v1.yaml` を列挙し、`gitlab-v1.yaml` は列挙しません。

`gitlab-org/gitlab` の `trigger-api-docs-pipeline` ジョブをコピーしないでください。これはマージしたユーザーとして実行され、api-docs の Maintainer 権限が必要です。[gitlab-org/gitlab#627956](https://gitlab.com/gitlab-org/gitlab/-/work_items/627956)を参照してください。

## 手順 8. 結果を確認する {#step-8-check-the-result}

`api-docs-refresh` ジョブの成功は、更新が要求されたことだけを意味します。
ジョブが出力する api-docs のパイプライン URL を開いてください。
次に、`https://api.gitlab.com/rest/#<slug>` を開いてください。
Artifact Registry の場合は、`https://api.gitlab.com/rest/#artifact-central` です。

## 内部オペレーションとドキュメント {#internal-operations-and-documents}

内部用であることは、秘密であることを意味しません。
upstream リポジトリは公開されているため、印を付けたオペレーションは誰でも読めます。
この印は、公開 API リファレンスからそれらを除外するだけです。

内部オペレーションには、`x-gitlab-internal: true` で印を付けます（手順 4）。
api-docs のフィルターが提供されると、api-docs は公開ドキュメントから印付きのオペレーションを除去してから公開します。
<!-- TODO: link the api-docs filter issue once it exists. -->

内部専用のドキュメント全体は、`specs.js` にも `spec_paths` にも登録しません。
Artifact Registry の `gitlab-v1.yaml` が一例です。

## 公開を行わない場合 {#opting-out}

コンポーネントのドキュメントを `specs.js` に登録しないでください。
それらについては、手順 5 から 8 を省略してください。
公開ドキュメントがなければ、`spec_paths` に指定するものがないため、トークンも include も不要です。
未登録のドキュメントは、取得も表示もされません。

## 計画中の自動化 {#planned-automation}

これらの項目は、別の場所で追跡しています。現時点では、上記の手順は変わりません。

1. 登録（手順 5）: [api-docs#43](https://gitlab.com/gitlab-org/api-docs/-/work_items/43)では、MR を代わりに作成する機能を追跡しています。引き続き承認は必要です。
1. スキャフォールド内のトリガー（手順 7）: [common-template-copier#18](https://gitlab.com/gitlab-com/gl-infra/common-template-copier/-/work_items/18)。
1. `bench build` でのスタブ生成: [common-template-copier#19](https://gitlab.com/gitlab-com/gl-infra/common-template-copier/-/work_items/19)。
1. 既存のサービス: [common-template-copier#21](https://gitlab.com/gitlab-com/gl-infra/common-template-copier/-/work_items/21)および [bench#48](https://gitlab.com/gitlab-org/lab-bench/bench/-/work_items/48)。
1. リントの CI コンポーネント: [gitlab-org/gitlab#624044](https://gitlab.com/gitlab-org/gitlab/-/work_items/624044)、[#633601](https://gitlab.com/gitlab-org/gitlab/-/work_items/633601)、[#633603](https://gitlab.com/gitlab-org/gitlab/-/work_items/633603)。
