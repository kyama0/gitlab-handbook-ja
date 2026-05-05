---
# TODO: Remove stage and group because the handbook doesn't need these attributes
stage: enablement
group: Tenant Scale
title: 'Cells: 依存プロキシ'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/dependency-proxy/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。

</div>


[GitLab 依存プロキシ](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) は、CI ジョブとエンドユーザーが使用するために Docker コンテナイメージを GitLab に保存できる機能です。Docker Hub などのアップストリームレジストリのプルスルーキャッシュとして機能し、イメージのビルドを高速化し、アップストリームサービスによるレート制限を回避します。

依存プロキシは事実上プライベートイメージレジストリであるため、[GitLab コンテナレジストリ](container-registry.md) と同じデプロイメントパターンと課題に従います。

## 1. 定義

依存プロキシは [コンテナレジストリ](container-registry.md) と同じデータ使用とストレージの課題に従います。

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

依存プロキシは、[コンテナレジストリ](container-registry.md) の提案と同様に、Cell 内で実行できます。

## 4. 評価

複数の Cell が同じトップレベルドメインで実行される可能性があり、Docker クライアントはホスト名ごとに認証トークンを保存するため、ユーザーが同じホスト名の別の Cell にログインしている間は、一方の Cell のリソースにアクセスできない場合があります。

Cells 環境で依存プロキシに認証するには、ユーザーは以下を実行する必要があります：

```shell
docker login gitlab.example.com
```

現在、このフローでは [GitLab のユーザー名とパスワードを使用することがサポートされています](https://docs.gitlab.com/ee/user/packages/dependency_proxy/#authenticate-with-the-dependency-proxy)。Cells アーキテクチャでは、ユーザー名/パスワードの組み合わせはルーティング不可であるため、これはレガシー Cell とデフォルト Organization でのみ機能します。

ユーザー名は任意のものが使用できます。依存プロキシでは使用されません。「パスワード」はユーザー、サービスアカウント、または CI ジョブトークンの Personal Access Token である必要があります。その後、Docker クライアントはこのユーザー名とパスワードの組み合わせを HTTP Basic Auth を使用して GitLab Rails の `/jwt/auth` エンドポイントに送信します。

Cells HTTP ルーターは、パスワードとしてアクセストークンを使用した HTTP Basic Auth リクエストをサポートすることで、このリクエストをルーティングする正しい Cell を決定できます。このサポートは [現在開発中](https://gitlab.com/gitlab-org/cells/http-router/-/issues/138) です。

返される JWT には十分な情報（`scope: cell-1` のようなもの）が含まれており、Cells Registry Router が認証済みリクエストを正しいコンテナレジストリ / Cell にルーティングできます。

## 4.1. メリット

## 4.2. デメリット
