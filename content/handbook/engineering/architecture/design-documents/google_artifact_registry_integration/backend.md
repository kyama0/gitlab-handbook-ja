---
stage: Package
group: Container Registry
title: 'Google Artifact Registry インテグレーションのバックエンド変更'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/google_artifact_registry_integration/backend/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## クライアント SDK

GAR との連携には、公式の GAR [Ruby クライアント SDK](https://cloud.google.com/ruby/docs/reference/google-cloud-artifact_registry/latest) を使用します。デフォルトでは、このクライアントは Artifact Registry API の [RPC](https://cloud.google.com/artifact-registry/docs/reference/rpc) バージョンを使用します。

クライアントを構築するには、[サービスアカウントキー](index.md#認証)が必要です。

### 利用する関数

このブループリントのスコープでは、Ruby クライアントから以下の関数を使用する必要があります：

- [`#get_repository`](https://github.com/googleapis/google-cloud-ruby/blob/d0ce758a03335b60285a3d2783e4cca7089ee2ea/google-cloud-artifact_registry-v1/lib/google/cloud/artifact_registry/v1/artifact_registry/client.rb#L1244)。[API ドキュメント](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#getrepositoryrequest)。単一の [`Repository`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#repository) を返します。
- [`#list_docker_images`](https://github.com/googleapis/google-cloud-ruby/blob/d0ce758a03335b60285a3d2783e4cca7089ee2ea/google-cloud-artifact_registry-v1/lib/google/cloud/artifact_registry/v1/artifact_registry/client.rb#L243)。[API ドキュメント](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#listdockerimagesrequest)。[`DockerImage`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#dockerimage) のリストを返します。
- [`#get_docker_image`](https://github.com/googleapis/google-cloud-ruby/blob/d0ce758a03335b60285a3d2783e4cca7089ee2ea/google-cloud-artifact_registry-v1/lib/google/cloud/artifact_registry/v1/artifact_registry/client.rb#L329)。[API ドキュメント](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#getdockerimagerequest)。単一の [`DockerImage`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#dockerimage) を返します。

### 制限事項

`#list_docker_images` ではフィルタリングが利用できません。つまり、返されたリストをフィルタリングすることはできません（例えば特定の名前でのフィルタリング）。ただし、一部の列での並び替えは可能です。

また、特定のページに直接アクセスすることもできません。例えば、ページ 1 と 2 を経由せずに Docker イメージリストの 3 ページ目に直接アクセスすることはできません。ページ数が非常に多い状況ではすべてのページを走査する必要があり、GitLab 側でこの機能を構築することはできません。

### クライアントの公開

公式 Ruby クライアントへのアクセスを一元化することが望ましいです。これにより、権限チェックを簡単に行えます。

`GoogleCloudPlatform::ArtifactRegistry::Client` に配置するカスタムクライアントクラスを持つことを提案します。そのクラスは `User` と `Integrations::GoogleCloudPlatform::ArtifactRegistry`（[プロジェクトインテグレーション](#プロジェクトインテグレーション)を参照）を必要とします。

クライアントは次に、公式クライアントの同名関数にマッピングされる `#repository`、`#docker_images`、`#docker_image` の 3 つの関数を公開する必要があります。

公式クライアントを呼び出す前に、このクラスはユーザー権限を確認する必要があります。指定された `User` は `Integrations::GoogleCloudPlatform::ArtifactRegistry` に関連付けられた `Project` で `read_gcp_artifact_registry_repository` 権限を持っている必要があります。

最後に、公式クライアントのセットアップには以下を適切に設定する必要があります：

- [timeout](https://github.com/googleapis/google-cloud-ruby/blob/a64ed1de61a6f1b5752e7c8e01d6a79365e6de67/google-cloud-artifact_registry-v1/lib/google/cloud/artifact_registry/v1/artifact_registry/operations.rb#L646)。
- [retry_policy](https://github.com/googleapis/google-cloud-ruby/blob/a64ed1de61a6f1b5752e7c8e01d6a79365e6de67/google-cloud-artifact_registry-v1/lib/google/cloud/artifact_registry/v1/artifact_registry/operations.rb#L652)。

これらについては、デフォルト値が問題なければそのまま使用するか、固定値を使用することができます。

## 新しい権限

[プロジェクトポリシー](https://gitlab.com/gitlab-org/gitlab/-/blob/1411076f1c8ec80dd32f5da7518f795014ea5a2b/app/policies/project_policy.rb)に新しい権限が必要です：

- `read_gcp_artifact_registry_repository`（少なくとも Reporter ユーザーに付与）。

## プロジェクトインテグレーション

以下のプロパティを持つ新しい[プロジェクトインテグレーション](https://docs.gitlab.com/ee/development/integrations/index.html)を構築する必要があります：

- `google_project_id` - Google プロジェクト ID。単純な文字列。
- `google_location` - Google のロケーション。単純な文字列。
- `repositories` - リポジトリ名の配列（以下参照）。
- `json_key` - サービスアカウントの JSON。文字列ですがテキストエリアとして表示。
- `json_key_base64` - base64 エンコードされたサービスアカウントの JSON。`json_key` から設定される値。

派生プロパティも持ちます：

- `repository` - リポジトリ名。`repositories` から派生。

`repositories` はリポジトリ名を配列に格納する方法として使用されます。これは将来的に複数のリポジトリをサポートする必要があるフォローアップを支援するためです。そのため、リポジトリ名を配列に格納し、配列の最初のエントリである `repository` プロパティを作成します。単一の `repository` プロパティを持つことで、プロジェクトインテグレーションでは配列値がサポートされていないため、[フロントエンドヘルパー](https://docs.gitlab.com/ee/development/integrations/index.html#customize-the-frontend-form)を使用できます。

`json_key` の base64 バージョンも必要です。これは [`CI/CD 変数`](#cicd-変数)に必要です。

クラス名については、`Integrations::GoogleCloudPlatform::ArtifactRegistry` の使用を提案します。`Integrations::GoogleCloudPlatform` ネームスペースにより、Google Cloud Platform の他のサービス向けに将来の他のインテグレーションを持てるようになります。

[設定テスト](https://docs.gitlab.com/ee/development/integrations/index.html#define-configuration-test)に関しては、公式 API のメソッド `#get_repository` でリポジトリ情報を取得する必要があります。呼び出しが成功し、返されたリポジトリが `DOCKER` 形式である場合にのみテストが成功します。

## GraphQL API

[UI](ui_ux.md) には基本的に 2 つのページがあります：プロジェクトインテグレーションに設定されたリポジトリから Docker イメージを一覧表示するページと、特定の Docker イメージの詳細を表示するページです。

フォローアップで他のリポジトリ形式をサポートするため、GraphQL フィールドやメソッドに公式クライアント関数名をマッピングするのではなく、より再利用可能なアプローチを選択します。

すべての GraphQL 変更は [`alpha`](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html#mark-schema-items-as-alpha) としてマークする必要があります。

まず、[`ProjectType`](https://docs.gitlab.com/ee/api/graphql/reference/index.html#project) に新しいフィールド `google_cloud_platform_artifact_registry_repository_artifacts` が必要です。これは新しい[抽象型](https://docs.gitlab.com/ee/api/graphql/reference/index.html#abstract-types) `GoogleCloudPlatform::ArtifactRegistry::ArtifactType` のリストを返します。このリストにはページネーションサポートがあります。並べ替えオプションも利用可能です。

`GoogleCloudPlatform::ArtifactRegistry::DockerImage` を `GoogleCloudPlatform::ArtifactRegistry::ArtifactType` の具体的な型として持ち、以下のフィールドを持ちます：

- `name`。文字列。
- `uri`。文字列。
- `image_size_bytes`。整数。
- `upload_time`。タイムスタンプ。

次に、`GoogleCloudPlatform::ArtifactRegistry::DockerImage` の名前を受け取り、以下のフィールドを持つ単一の `GoogleCloudPlatform::ArtifactRegistry::ArtifacDetailsType` を返す新しいクエリ `Query.google_cloud_platform_registry_registry_artifact_details` が必要です：

- `GoogleCloudPlatform::ArtifactRegistry::ArtifactType` のすべてのフィールド。
- `tags`。文字列の配列。
- `media_type`。文字列。
- `build_time`。タイムスタンプ。
- `updated_time`。タイムスタンプ。

すべての GraphQL 変更には [`read_gcp_artifact_registry_repository` 権限](#新しい権限)が必要です。

## CI/CD 変数

[Harbor](https://docs.gitlab.com/ee/user/project/integrations/harbor.html#configure-gitlab) インテグレーションと同様に、ユーザーが GAR インテグレーションを有効化すると、インテグレーションが有効な場合に追加の CI/CD 変数が自動的に利用可能になります。これらは[ドキュメント](https://cloud.google.com/artifact-registry/docs/docker/authentication#json-key)に記載の要件に従って設定されます：

- `GCP_ARTIFACT_REGISTRY_URL`: インテグレーションに設定された GCP プロジェクトロケーションを `LOCATION` として `https://LOCATION-docker.pkg.dev` に設定されます。
- `GCP_ARTIFACT_REGISTRY_PROJECT_URI`: `LOCATION-docker.pkg.dev/PROJECT-ID` に設定されます。`PROJECT-ID` はインテグレーションに設定された GAR リポジトリの GCP プロジェクト ID です。
- `GCP_ARTIFACT_REGISTRY_PASSWORD`: インテグレーションに設定されたサービスアカウント JSON キーファイルの base64 エンコードバージョンに設定されます。
- `GCP_ARTIFACT_REGISTRY_USER`: `_json_key_base64` に設定されます。

これらは `docker login` を使用したログインに利用できます：

```shell
docker login -u $GCP_ARTIFACT_REGISTRY_USER -p $GCP_ARTIFACT_REGISTRY_PASSWORD $GCP_ARTIFACT_REGISTRY_URL
```

同様に、`docker pull` を使用してリポジトリからイメージをダウンロードするためにも使用できます：

```shell
docker pull $GCP_ARTIFACT_REGISTRY_PROJECT_URI/REPOSITORY/myapp:latest
```

最後に、設定されたサービスアカウントが `Artifact Registry Writer` ロールを持っている場合、GAR へのイメージのプッシュも可能です：

```shell
docker build -t $GCP_ARTIFACT_REGISTRY_REPOSITORY_URI/myapp:latest .
docker push $GCP_ARTIFACT_REGISTRY_REPOSITORY_URI/myapp:latest
```

前方互換性の理由から、リポジトリ名（上記コマンドの `REPOSITORY`）はユーザーが `GCP_ARTIFACT_REGISTRY_PROJECT_URI` に追加する必要があります。最初のイテレーションでは単一の GAR リポジトリのみをサポートするため、技術的にはリポジトリ名をすでに含む `GCP_ARTIFACT_REGISTRY_REPOSITORY_URI` のような変数を提供できます。ただし、複数リポジトリのサポートを追加した場合、特定の命令でユーザーがどのリポジトリをターゲットにしたいかを伝える方法がありません。
