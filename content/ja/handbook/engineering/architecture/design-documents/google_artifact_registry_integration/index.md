---
title: "Google Artifact Registry インテグレーション"
status: proposed
creation-date: "2023-08-31"
authors: [ "@jdrpereira", "@10io" ]
coach: "@grzesiek"
approvers: [ "@trizzi", "@crystalpoole" ]
owning-stage: "~devops::package"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/google_artifact_registry_integration/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jdrpereira" class="text-blue-600 hover:underline">@jdrpereira</a>, <a href="https://gitlab.com/10io" class="text-blue-600 hover:underline">@10io</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/trizzi" class="text-blue-600 hover:underline">@trizzi</a>, <a href="https://gitlab.com/crystalpoole" class="text-blue-600 hover:underline">@crystalpoole</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::package</span></td>
<td class="px-3 py-2 border border-gray-300">2023-08-31</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab と Google Cloud は最近、両社のプラットフォームのユニークな機能を組み合わせる[パートナーシップ](https://about.gitlab.com/blog/2023/08/29/gitlab-google-partnership-s3c/)を発表しました。

発表で強調されているように、主要な目標の一つは「_Google の Artifact Registry を GitLab パイプラインおよびパッケージングと連携させて、セキュリティデータプレーンを構築する_」ことです。この目標に向けた最初のステップは、ユーザーが新しい [Google Artifact Registry](https://cloud.google.com/artifact-registry)（以下、GAR と略）の[プロジェクトインテグレーション](https://docs.gitlab.com/ee/user/project/integrations/index.html)を設定し、GitLab UI に[コンテナイメージアーティファクト](https://cloud.google.com/artifact-registry/docs/supported-formats)を表示できるようにすることです。

## モチベーション

GitLab と Google Cloud パートナーシップのモチベーションと長期的な目標の詳細については、[発表](https://about.gitlab.com/blog/2023/08/29/gitlab-google-partnership-s3c/)ブログ記事を参照してください。

この設計ドキュメントのスコープに関しては、GAR 内のコンテナイメージに対するユーザーの可視性を提供するというプロダクト要件の実現を主な目的としています。この特定の目標に対するモチベーションは、GitLab コンテナレジストリの補完として外部レジストリを使用することに関する基礎的な調査（[内部](https://gitlab.com/gitlab-org/ux-research/-/issues/2602)）に基づいています。

これは GAR インテグレーションの最初のステップとして位置付けており、将来的な再利用を促進する基盤を確立する形でこの目標を達成することを目指しています。この基盤は、追加のアーティファクト形式（npm、Maven など）のサポートや、Package ステージを超えた機能（脆弱性スキャン、デプロイなど）といった将来の拡張に役立てることができます。

### 目標

- GitLab ユーザーが GAR に接続するための新しい[プロジェクトインテグレーション](https://docs.gitlab.com/ee/user/project/integrations/index.html)を設定できるようにする。
- GitLab プロジェクトあたり単一のトップレベル GAR [リポジトリ](https://cloud.google.com/artifact-registry/docs/repositories)に制限。
- [Standard](https://cloud.google.com/artifact-registry/docs/repositories#mode) モードの GAR リポジトリのみに制限。Remote および Virtual [リポジトリモード](https://cloud.google.com/artifact-registry/docs/repositories#mode)（いずれも Preview）のサポートはストレッチゴール。
- [コンテナイメージ](https://cloud.google.com/artifact-registry/docs/supported-formats#container)形式の GAR リポジトリのみに制限。
- GAR との連携に、GitLab プロジェクトのオーナー/メンテナーが提供する Google Cloud [サービスアカウント](https://cloud.google.com/iam/docs/service-account-overview)を使用する。
- GitLab ユーザーが、接続された GAR リポジトリ配下のコンテナイメージをサブリポジトリを含めて一覧表示できるようにする。一覧はページングおよびソートが可能。
- 一覧表示される各イメージに対して、URI、タグの一覧、サイズ、ダイジェスト、アップロード時刻、メディアタイプ、ビルド時刻、更新時刻を[こちら](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages#DockerImage)に記載のとおり表示する。
- 接続された GAR リポジトリ配下のコンテナイメージの一覧表示は、[Reporter 以上](https://docs.gitlab.com/ee/user/permissions.html#roles)のロールを持つユーザーに制限する。

### 非目標

これらのいくつかは将来のイテレーションで目標となる可能性がありますが、現時点ではスコープ外です：

- 作成、更新、削除操作。
- 同じプロジェクト配下での複数（トップレベル）GAR リポジトリへの接続。
- コンテナイメージ以外の[リポジトリ形式](https://cloud.google.com/artifact-registry/docs/supported-formats)のサポート。
- [サービスアカウント](https://cloud.google.com/iam/docs/service-account-overview)以外の[Identity and Access Management（IAM）](https://cloud.google.com/security/products/iam)権限/認証情報のサポート。
- GAR [クリーンアップポリシー](https://cloud.google.com/artifact-registry/docs/repositories/cleanup-policy)。
- イメージ一覧の属性（名前または値）によるフィルタリング。現行の [GAR API](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#listdockerimagesrequest) はフィルタリングをサポートしていない。
- [アーティファクト解析と脆弱性スキャン](https://cloud.google.com/artifact-registry/docs/analysis)。

## 提案

### 設計と実装の詳細

#### プロジェクトインテグレーション

GAR 向けの新しい[プロジェクトインテグレーション](https://docs.gitlab.com/ee/user/project/integrations/index.html)を作成します。有効化されると、サイドバーの「Operate」セクションに新しい「Google Artifact Registry」アイテムが表示されます。これは、有効化されている場合に[Harbor](https://docs.gitlab.com/ee/user/project/integrations/harbor.html)インテグレーションが表示される場所でもあります。

GAR インテグレーションはプロジェクトのオーナー/メンテナーが有効化でき、セットアップ時に以下の 4 つの設定パラメーターを提供する必要があります：

- **GCP プロジェクト ID**: 対象の GAR リポジトリが存在する GCP プロジェクトのグローバル一意識別子。
- **リポジトリの場所**: 対象の GAR リポジトリが存在する [GCP ロケーション](https://cloud.google.com/about/locations)。
- **リポジトリ名**: 対象の GAR リポジトリの名前。
- **GCP サービスアカウントキー**: JSON 形式の[サービスアカウントキー](https://cloud.google.com/iam/docs/keys-create-delete)の_内容_（ファイルではなく内容）（[サンプル](https://cloud.google.com/iam/docs/keys-create-delete#creating)）。

#### 認証

インテグレーションは単一の GCP サービスアカウントを使用することで簡略化されています。ユーザーは引き続き GCP 側でこのサービスアカウントの[使用状況を監査](https://cloud.google.com/iam/docs/audit-logging/examples-service-accounts#access-with-key)し、必要に応じて権限を取り消す能力を保持します。

インテグレーションセットアップ時に提供するサービスアカウントキーには、対象の GCP プロジェクトで少なくとも [`Artifact Registry Reader`](https://cloud.google.com/artifact-registry/docs/access-control#permissions) ロールが付与されている必要があります。

バックエンドに（暗号化された）サービスアカウントキーの JSON 内容を保存することで、GAR クライアントの初期化（詳細は後述）に簡単に使用できます。キーファイルをアップロードするのではなく内容を提供する方法は、ユーザーの公開 SSH キーで行っていることと同様です。

前述のとおり、GAR インテグレーション機能へのアクセスは [Reporter 以上](https://docs.gitlab.com/ee/user/permissions.html#roles)のロールを持つユーザーに制限されます。

#### リソースマッピング

[GitLab コンテナレジストリ](https://docs.gitlab.com/ee/user/packages/container_registry/index.html)では、特定のプロジェクト内のリポジトリはプロジェクトのフルパスと一致するパスを持つ必要があります。これは本質的に、GitLab Rails とレジストリ間のリソースマッピングを確立する方法であり、きめ細かい認可、特定のプロジェクト/グループ/ネームスペースへのストレージ使用量のスコーピングなど、複数の目的に役立てられています。

GAR インテグレーションに関しては、GAR 側に GitLab のプロジェクト/グループ/ネームスペースリソースに相当するエンティティが存在しないため、ユーザーが任意の [GAR リポジトリ](https://cloud.google.com/artifact-registry/docs/repositories)をそれぞれのパスに関わらず任意の GitLab プロジェクトに関連付けられるように簡略化することを目指しています。同様に、特定の GAR リポジトリの関連付けを単一の GitLab プロジェクトに制限する予定もありません。最終的には、両方のデータセットをニーズに最も合った方法で整理する方法はユーザーに委ねられます。

#### GAR API

GAR は 3 種類の API を提供しています：Docker API、REST API、RPC API。

[Docker API](https://cloud.google.com/artifact-registry/docs/reference/docker-api) は [Docker Registry HTTP API V2](https://distribution.github.io/distribution/spec/api/) をベースとしており、現在は [OCI Distribution Specification API](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)（以下、OCI API と呼びます）に取って代わられています。この API は GAR へのイメージのプッシュ/プルや、一部の検索操作に使用されます。使用しない理由については[代替ソリューション](#代替ソリューション)を参照してください。

独自の GAR API の中で、[REST API](https://cloud.google.com/artifact-registry/docs/reference/rest) はリポジトリ管理のための基本的な機能を提供しています。これにはコンテナイメージリポジトリの [`list`](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages/list) および [`get`](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages/get) 操作が含まれており、このインテグレーションに使用できます。どちらの操作も [`DockerImage`](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages#DockerImage) オブジェクトで表される同じデータ構造を返すため、同じレベルの詳細情報を提供します。

最後に、[RPC API](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1) もあります。gRPC と Protocol Buffers に基づいており、すべての GAR 機能を網羅する最も多くの機能を提供します。利用可能な操作の中から、[`ListDockerImagesRequest`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#listdockerimagesrequest) と [`GetDockerImageRequest`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#google.devtools.artifactregistry.v1.GetDockerImageRequest) 操作を使用できます。REST API と同様に、両方のレスポンスは [`DockerImage`](https://cloud.google.com/artifact-registry/docs/reference/rpc/google.devtools.artifactregistry.v1#google.devtools.artifactregistry.v1.DockerImage) オブジェクトで構成されています。

2 つの独自 API オプションのうち、RPC を選択しました。これは今日必要な操作だけでなく、すべての GAR 機能をより広くカバーしているため、将来のイテレーションに有益です。最終的には、この API を直接使用するのではなく、公式の Ruby クライアント SDK を通じて使用する予定です。詳細は以下の [クライアント SDK](backend.md#クライアント-sdk) をご参照ください。

#### バックエンドインテグレーション

このインテグレーションには Rails プロジェクトのバックエンド側でいくつかの変更が必要です。詳細は[バックエンド](backend.md)ページをご参照ください。

#### UI/UX

このインテグレーションには「Google Artifact Registry」という名前の専用ページが含まれており、サイドバーの「Operate」セクションに一覧表示されます。このページにより、ユーザーは設定された GAR リポジトリ内のすべてのコンテナイメージの一覧を表示できます。詳細は [UI/UX](ui_ux.md) ページをご参照ください。

#### GraphQL API

_TODO: このインテグレーションに必要な GraphQL API または既存 API への変更を記述する。_

## 代替ソリューション

### Docker/OCI API の使用

検討した代替ソリューションの一つは、コンテナレジストリの共通標準として GAR が提供する Docker/OCI API を使用することでした。このアプローチにより、GitLab はコンテナレジストリへの接続に[既存のロジック](https://gitlab.com/gitlab-org/gitlab/-/blob/20df77103147c0c8ff1c22a888516eba4bab3c46/lib/container_registry/client.rb)を再利用でき、開発を迅速化できる可能性がありました。ただし、このアプローチにはいくつかの欠点がありました：

- **認証の複雑さ**: API は[ログインエンドポイント](https://distribution.github.io/distribution/spec/auth/token/)でリクエストする必要がある認証トークンを必要とします。これらのトークンには有効期限があり、認証プロセスに複雑さが加わります。期限切れトークンの処理が必要でした。

- **限られたフォーカス**: API はコンテナレジストリオブジェクトのみに特化しており、将来的に追加の GAR アーティファクト（パッケージレジストリ形式など）を採用するための柔軟なインテグレーションフレームワークを構築するという目標に合致しません。

- **検索機能の制限**: API はフィルタリングやソートなどの機能が欠如しており、検索機能に重大な制限があります。

- **複数リクエスト**: 各イメージに関する必要な情報をすべて取得するには、異なるエンドポイント（タグの一覧表示、イメージマニフェストの取得、イメージ設定ブロブ）への複数のリクエストが必要であり、`1+N` パフォーマンス問題が発生します。

GitLab は以前から後半の 2 つの制限で重大な課題に直面しており、それらに対処するためにカスタムの [GitLab コンテナレジストリ API](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/spec/gitlab/api.md) を開発しました。さらに GitLab は、これらの同じ制限と並行して 2 つのソリューションを維持するコストの増加により、Docker/OCI API を使用したサードパーティコンテナレジストリへの接続の[非推奨サポート](https://docs.gitlab.com/ee/update/deprecations.html#use-of-third-party-container-registries-is-deprecated)を決定しました。その結果、GitLab のすべてのコンテナレジストリ機能について Docker/OCI API エンドポイントをカスタム API エンドポイントに置き換える取り組みが進行中です。

これらの要因を考慮し、独自の GAR API を使用して GAR インテグレーションをゼロから構築することを決定しました。このアプローチはインテグレーションの柔軟性と制御を向上させ、他の GAR アーティファクト形式のサポートなど、将来の拡張の基盤として機能します。
