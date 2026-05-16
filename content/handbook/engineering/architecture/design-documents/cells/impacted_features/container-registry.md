---
stage: enablement
group: Tenant Scale
title: 'Cells: コンテナレジストリ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/container-registry/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-10T02:56:24+00:00"
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。
{{% /alert %}}


GitLab の [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/index.html) は、Docker コンテナイメージを GitLab に保存できる機能です。

## 1. 定義

GitLab コンテナレジストリは、PostgreSQL、Redis、オブジェクトストレージの依存関係を必要とする複雑なサービスです。現在、コンテナレジストリのデータストレージとイメージ保持ポリシーを最適化するため、[Container Registry Metadata](../../container_registry_metadata_database/) を導入する作業が進行中です。

GitLab コンテナレジストリは保存データのコンテナとして機能しますが、単独では `docker login` の認証を行いません。`docker login` はユーザー認証情報（`personal access token` など）または CI ビルド認証情報（一時的な `ci_builds.token`）を使用して実行されます。

コンテナレジストリはデータ重複排除を使用します。つまり、多くのプロジェクト間で共有される同一の blob（イメージレイヤー）は一度だけ保存されます。各レイヤーは `sha256` でハッシュ化されています。

`docker login` は GitLab によって署名された JWT 時間制限付き認証トークンをリクエストしますが、検証はコンテナレジストリサービスが行います。JWT トークンには、認可されたすべてのスコープ（`コンテナリポジトリイメージ`）と操作タイプ（`push` または `pull`）が格納されます。単一の JWT 認証トークンには複数の認可スコープが含まれることがあります。これにより、コンテナレジストリとクライアントは他のスコープから既存の blob をマウントできます。GitLab は認可されたスコープのみを返します。その後、指定された操作を実行できるかどうかを GitLab コンテナレジストリが検証します。

GitLab.com のページは常にプロジェクト単位でスコープされています。各プロジェクトには複数のコンテナレジストリイメージを添付できます。

現在、GitLab.com では実際のレジストリサービスは `https://registry.gitlab.com` で提供されています。

主な識別可能な問題点は以下の通りです：

- GitLab.com で処理される認証リクエスト（`https://gitlab.com/jwt/auth`）
- 外部サービスによって実行され、独自のデータストアを使用する `https://registry.gitlab.com`
- データ重複排除。Cell 内でレジストリを実行する Cells アーキテクチャは、データストレージの効率を低下させる可能性があります。

## 2. データフロー

`docker login` のデータフローは [コンテナレジストリプロジェクト](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/auth-request-flow.md#login) に記載されています。`curl` を使用した同等のリクエストを以下に示します。

### 2.1. `docker login` から送信される認可リクエスト

```shell
curl \
  --user "username:password" \
  "https://gitlab/jwt/auth?client_id=docker&offline_token=true&service=container_registry&scope=repository:gitlab-org/gitlab-build-images:push,pull"
```

結果はエンコードされ署名された JWT トークンです。2番目の base64 エンコード文字列（`.` で分割）には、認可されたスコープを含む JSON が格納されています。

```json
{"auth_type":"none","access":[{"type":"repository","name":"gitlab-org/gitlab-build-images","actions":["pull"]}],"jti":"61ca2459-091c-4496-a3cf-01bac51d4dc8","aud":"container_registry","iss":"omnibus-gitlab-issuer","iat":1669309469,"nbf":166}
```

### 2.2. Docker クライアントによるタグの取得

```shell
curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/tags/list

curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/manifests/danger-ruby-2.6.6
```

### 2.3. Docker クライアントによる blob とマニフェストの取得

```shell
curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/blobs/sha256:a3f2e1afa377d20897e08a85cae089393daa0ec019feab3851d592248674b416
```

## 3. 提案

### 3.1. コンテナレジストリを Cells アーキテクチャとは別にシャーディングする

その広範かつ一般的に高いスケーラビリティを持つ水平アーキテクチャのため、GitLab コンテナレジストリを Cell 内ではなく、クラスター内で実行して独立してスケールするべきかどうかを評価する必要があります。これはより簡単かもしれませんが、同じレベルのデータ分離は確実に提供できません。

### 3.2. Cell 内でコンテナレジストリを実行する

Router がスコープをデコードするために処理する必要がある `/jwt/auth` を除いて、コンテナレジストリは Cell のローカルサービスとして実行できると考えられます。少なくとも GitLab.com の場合、実際のデータはレジストリ経由で転送されるのではなく、オブジェクトストレージ / CDN から直接提供されます。

その設計では、コンテナリポジトリイメージが容易にルーティング可能な URL にエンコードされています。コンテナレジストリの前にある同じステートレスな Router サービスを再利用して、マニフェストと blob のリダイレクトを処理できるようです。

唯一のデメリットは、各 Cell でスタンドアロンのレジストリを管理する複雑さが増すことですが、これが望ましいアプローチになる可能性があります。

## 4. 評価

GitLab コンテナレジストリを Cell 内で実行することに、理論的な問題はないと考えられます。サービスをうまく動作するようにルーティング可能にすることは比較的容易です。実際の複雑さは、インフラ側から複雑なサービスを管理することにあります。

複数の Cell が同じトップレベルドメインで実行される可能性があり、Docker クライアントはホスト名ごとに認証トークンを保存するため、ユーザーが同じホスト名の別の Cell にログインしている間は、一方の Cell のリソースにアクセスできない場合があります。

Cells 環境でコンテナレジストリに認証するには、ユーザーは以下を実行する必要があります：

```shell
docker login gitlab.example.com
```

ユーザー名は任意のものが使用できます。GitLab のコンテナレジストリでは使用されません。「パスワード」は以下のいずれかである必要があります：

- Personal access token
- Project access token
- Group access token

現在の [コンテナレジストリ認証プロセス](https://docs.gitlab.com/ee/user/packages/container_registry/authenticate_with_container_registry.html) に従います。

**Deploy token** はコンテナレジストリで利用可能なパスワードとして記載されていますが、これらのトークンはルーティング可能ではないため、レガシー Cell でのみ機能します。ユーザーの **GitLab ユーザー名とパスワード** もコンテナレジストリへの認証に使用できますが、この認証方法にもルーティング情報が含まれていないため、レガシー Cell でのみ機能します。最初のイテレーションでは、すべてのトークンタイプについてレガシー Cell とデフォルト Organization へのルーティングのみがサポートされます。

その後、Docker クライアントはこのユーザー名とパスワードの組み合わせを HTTP Basic Auth を使用して GitLab Rails の `/jwt/auth` エンドポイントに送信します。

Cells HTTP ルーターは、パスワードとしてアクセストークンを使用した HTTP Basic Auth リクエストをサポートすることで、このリクエストをルーティングする正しい Cell を決定できます。このサポートは [現在開発中](https://gitlab.com/gitlab-org/cells/http-router/-/issues/138) です。

返される JWT には十分な情報（`scope: cell-1` のようなもの）が含まれており、Cells Registry Router が認証済みリクエストを正しいコンテナレジストリ / Cell にルーティングできます。

## 4.1. メリット

## 4.2. デメリット
