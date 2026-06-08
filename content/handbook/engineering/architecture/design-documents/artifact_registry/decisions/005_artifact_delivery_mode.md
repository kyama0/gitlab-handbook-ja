---
title: "Artifact Registry ADR 005: Artifact Delivery Mode"
owning-stage: "~devops::package"
description: "リダイレクトとプロキシのアーティファクト配信を 2 軸モデルとしてサポートする決定。インスタンスレベルのデフォルトと、常に利用可能な namespace 単位の上書きから成る"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/005_artifact_delivery_mode/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: "2026-06-08T13:31:46-07:00"
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## コンテキスト {#context}

クライアントがアーティファクト（コンテナレイヤー、Maven JAR、npm tarball）をダウンロードすると、Artifact Registry はオブジェクトストレージからコンテンツをどのようにサーブするかを決定しなければなりません。業界および GitLab 内には、確立された 2 つのパターンが存在します。

1. **リダイレクトモード**: サービスは、事前署名されたオブジェクトストレージ URL への HTTP リダイレクト（302/307）で応答します。クライアントはストレージバックエンドから直接コンテンツを取得します。サービスはダウンロードパスでアーティファクトのバイトを一切処理しません。
2. **プロキシモード**: サービスはオブジェクトストレージからコンテンツを取得し、それをクライアントにストリーミングします。すべてのアーティファクトのバイトがサービスを通過します。

GitLab モノリスと Container Registry の両方が、現在両方のモードをサポートしています。

- **Container Registry**: `storage.redirect.disable`（boolean、デフォルト `false`）。リダイレクトが無効化されている場合、レジストリはストレージバックエンドへのリダイレクトの代わりに、コンテンツをクライアントに直接ストリーミングします。
- **GitLab モノリス**: すべてのオブジェクトストレージ対応機能（アーティファクト、LFS、パッケージ、アップロード）にわたる `proxy_download` 設定（デフォルト `false`）。

### プロキシモードが必要な理由 {#why-proxy-mode-is-needed}

GitLab の [ドキュメント](https://docs.gitlab.com/administration/object_storage/) は、リダイレクトが機能せず、プロキシが必須となる実際のデプロイシナリオを列挙しています。

- **ファイアウォールの制限**: クライアントネットワークがオブジェクトストレージのエンドポイントへの直接アクセスをブロックします。これは規制環境やエアギャップ・半隔離ネットワークで一般的です。
- **信頼されていない CA**: オブジェクトストレージが、クライアントが信頼しない CA からの証明書を使用します（NetApp アプライアンスや Ceph Object Gateway などのサードパーティの S3 互換バックエンドで一般的）。
- **非公開のストレージバックエンド**: オブジェクトストレージのエンドポイントがクライアントネットワークから到達できません（プライベート VPC、内部専用エンドポイント）。
- **HTTPS のダウングレード**: オブジェクトストレージのエンドポイントがプレーンな HTTP でサーブし、クライアントが HTTPS 経由でレジストリにアクセスした場合に mixed-content エラーを引き起こします。
- **CORS の制限**: ブラウザベースのクライアントは、ストレージ側に適切な CORS ヘッダーがないと、オブジェクトストレージへのクロスオリジンリダイレクトに従えません。
- **事前署名 URL のセキュリティ**: 事前署名 URL は時間制限がありますが、特定のユーザーやセッションに紐付けられていません。高セキュリティ環境では、組織はアーティファクトのバイトがサービスのネットワーク境界から決して離れないことを好みます。

これらのシナリオのいくつかは、今日大規模に GitLab 顧客に影響を与えています。これには、CA/ファイアウォール/ルーティングの制限が実際の現実となっているサードパーティの S3 互換ソリューション（NetApp、Ceph Object Gateway）を使用する顧客が含まれます。

### デュアルパーソナリティのデプロイモデル {#the-dual-personality-deployment-model}

Artifact Registry は、複数のデプロイモデルをサーブできるモジュラーサービスとして設計されています。GitLab.com（SaaS）、GitLab Dedicated、Self-Managed のインスタンスです。リモート/デュアルパーソナリティモデルでは、Self-Managed または Dedicated のインスタンスが、リモートバックエンドとして GitLab.com の Artifact Registry に接続します。

このモデルでは、GitLab.com の Artifact Registry は、基となるストレージプロバイダー（GCS、Cloud CDN）の IP レンジを許可リストに追加できない企業ファイアウォールの背後にいる可能性のあるクライアントにダウンロードをサーブします。サービスは、クライアントがストレージに直接到達できる namespace についてはリダイレクトを続けつつ、そうした namespace についてはアーティファクトコンテンツをプロキシできなければなりません。

これにより、グローバルな（インスタンスレベルの）リダイレクトまたはプロキシのトグルは不十分になります。namespace 単位の設定（[ADR-022](022_namespace_decoupling.md)）は、インスタンスのデフォルトにかかわらず利用可能でなければなりません。同じインスタンスや組織上の異なる namespace が、異なるネットワーク制約を持つ場合があるためです。

## 決定 {#decision}

**Artifact Registry は、2 つのアーティファクト配信パターン（リダイレクトとプロキシ）を、2 軸モデルとして選択してサポートします。インスタンスレベルのデフォルトに加えて、常に利用可能な namespace 単位の上書きです。**

### 軸 1: インスタンスのデフォルト {#axis-1-instance-default}

インスタンスは、2 つのデフォルト配信パターンのいずれかで構成されます。

- **リダイレクト**（推奨デフォルト）。すべてのアーティファクトダウンロードは、クライアントを事前署名されたオブジェクトストレージ URL にリダイレクトすることでサーブされます。クライアントはストレージバックエンドから直接コンテンツを取得します。サービスはダウンロードパスでアーティファクトのバイトを一切処理しません。これにより、サービスの負荷とエグレス帯域幅が最小化されます。サービスからのすべてのレスポンスが小さいため、タイトなタイムアウトとより小さなリソースフットプリントが可能になります。すべてのクライアントがストレージバックエンドに直接到達できるデプロイに適しています。
- **プロキシ**。すべてのアーティファクトダウンロードは、オブジェクトストレージからのコンテンツをサービスを通じてストリーミングすることでサーブされます。すべてのアーティファクトのバイトがサービスを通過します。これは、ファイアウォールの背後にある Self-Managed のインスタンスなど、クライアントがストレージバックエンドに直接到達できないデプロイ向けです。プロキシは、サービスが大きなレスポンスボディ（コンテナレイヤーの場合は数 GB に達する可能性がある）を処理することを必要とし、これは書き込みタイムアウト、メモリ割り当て、帯域幅容量に影響します。

インスタンスのデフォルトはサービス構成で設定され、再起動時にのみ変更されます。

### 軸 2: namespace 単位の上書き {#axis-2-per-namespace-override}

nullable な namespace 単位の上書き（namespace レコードとともに保存される、[ADR-022](022_namespace_decoupling.md) および [ADR-007](007_database_schema.md) を参照）は、インスタンスのデフォルトにかかわらず、すべてのインスタンスで利用可能です。その三状態のセマンティクスは次のとおりです。

- `NULL` — インスタンスのデフォルトを継承する。
- `redirect` — この namespace に対してリダイレクトを強制する。
- `proxy` — この namespace に対してプロキシを強制する。

任意のダウンロードリクエストに対する実効的な配信パターンは次のとおりです。

```text
effective = namespace.delivery_mode_override ?? instance.delivery_mode
```

namespace 単位の設定は、namespace 管理 API（実装仕様の S17 が所有）を通じて GitLab の組織オーナーによって管理されます。粒度は namespace 単位であり、組織単位、リポジトリ単位、アーティファクト単位ではありません。

この 2 軸の形が、サービスが公開する唯一のノブの形です。別個の「ハイブリッド」インスタンスモードはありません。上書きはすべてのインスタンスで同じ列であり、運用者は必要な組み合わせを選択します。

### これが表現するシナリオ {#scenarios-this-expresses}

Artifact Registry がサポートする必要のあるすべてのデプロイシナリオは、2 つの軸の組み合わせに帰着します。

- **シングルテナント、すべてのクライアントがストレージに到達。** インスタンスのデフォルト = `redirect`、namespace の上書きは設定なし。
- **ファイアウォールの背後 / 信頼されていない CA を持つシングルテナント。** インスタンスのデフォルト = `proxy`、namespace の上書きは設定なし。
- **マルチテナント SaaS / デュアルパーソナリティ**（GitLab.com）: インスタンスのデフォルト = `redirect`、ストレージに到達できないクライアントを持つ個々の namespace はその上書きを `proxy` に設定（またはその逆）。
- **1 つの例外的な namespace を持つシングルテナント。** インスタンスのデフォルトは一般的なケースに合わせ、例外はその上書きをもう一方の値に設定する。

### システムへの制約 {#constraints-on-the-system}

両方の配信パターンをサポートすることは、サービス設計に影響を与えます。

- **タイムアウト**。リダイレクトのレスポンスは小さく高速です。プロキシのレスポンスは数 GB になり、数分かかる場合があります。サービスは、リダイレクトのパフォーマンスに影響を与えることなく、プロキシダウンロードのために拡張されたタイムアウトをサポートしなければなりません。
- **リソースフットプリント**。プロキシダウンロードは大きなペイロードをサービスを通じてストリーミングし、リクエストごとのメモリと帯域幅の要件を増加させます。容量計画は、プロキシとしてサーブされるトラフィックの割合を考慮しなければなりません。
- **ストレージバックエンドへのアクセス**。ストレージバックエンドは、事前署名 URL の生成（リダイレクト用）とストリーミング読み取り（プロキシ用）の両方をサポートしなければなりません。
- **CDN との相互作用**。リダイレクトは、クライアントが CDN を背後に持つストレージ URL から直接取得するため、CDN キャッシュの恩恵を受けます。プロキシは CDN をバイパスし、キャッシュの恩恵を失います。実装仕様は、実効的な配信パターンがプロキシの場合、CDN / URL キャッシュのミドルウェアスタックをエンドツーエンドでバイパスします。
- **モニタリング**。サービスは、運用者がパターンごとに帯域幅、レイテンシー、容量への影響を追跡できるように、メトリクスとログでリダイレクトとプロキシのトラフィックを区別しなければなりません。
- **namespace 単位のルックアップ**。上書きは、リクエストハンドラーが認可とルーティングのためにすでにジョインしている同じ namespace の行から読み取られます。別個のルックアップやダブルジョインは必要ありません。コストは、ハンドラーがすでに実行しているクエリ上の単一の nullable な列です。

## 結果 {#consequences}

### ポジティブ {#positive}

1. **ネットワーク制限による顧客への影響なし**。ファイアウォールの背後、信頼されていない CA を持つ、または直接的なストレージアクセスのないデプロイは、回避策なしにプロキシ経由で Artifact Registry を使用できます。
2. **既存の GitLab 機能とのパリティ**。Container Registry と GitLab モノリスの両方がプロキシダウンロードをサポートしています。Artifact Registry でそれをサポートしないことは、それらのシステムから移行する顧客にとって後退となります。
3. **デュアルパーソナリティのサポート**。上書きにより、GitLab.com がすべてのトラフィックをサービスを通じて強制することなく、異なるネットワーク制約を持つ namespace をサーブするリモートモデルが可能になります。
4. **運用上一貫したサーフェス**。運用者は、すべてのデプロイで 1 つのインスタンスレベルのノブと 1 つの namespace 単位の列を目にします。namespace 単位の設定を密かに無効化するインスタンスモードのゲートはありません。
5. **上書きは namespace ごとにオプトイン**。namespace 単位の制御を必要としないデプロイは何も支払いません。上書きは `NULL` で、実効的なパターンは単にインスタンスのデフォルトです。

### ネガティブ {#negative}

1. **サービスの複雑さの増加**。ダウンロードパスは、異なるタイムアウト、メモリ、エラーハンドリングの特性を持つ、根本的に異なる 2 つのレスポンスパターン（小さなリダイレクト対大きなストリーミングボディ）を処理しなければなりません。
2. **プロキシトラフィックに対するより高いリソース要件**。プロキシとしてサーブされる namespace やインスタンスは、リクエストごとに大幅に多くの帯域幅とメモリを消費します。少数の高トラフィックのプロキシ namespace が、サービス容量に不均衡に影響を与える可能性があります。
3. **プロキシトラフィックに対する CDN の効果の低下**。プロキシは CDN をバイパスし、ストレージバックエンドの負荷を軽減しダウンロードのレイテンシーを改善するキャッシュの恩恵を失います。
4. **テストと保守の対象となる両方のパターン**。各パターンはダウンロードパスで異なる動作をします。テストは、「上書きなし」と「上書きが反対を強制する」の両方の組み合わせで、両方をカバーしなければなりません。

## 代替案 {#alternatives}

### 代替案 1: リダイレクトのみ {#alternative-1-redirect-only}

サービスは常にリダイレクトで応答します。クライアントがストレージに到達できない顧客は、サービスの外部（VPN、プロキシサイドカー、ファイアウォールルール）で問題を解決しなければなりません。

**Pros:**

- 最もシンプルなサービス設計。すべてのレスポンスが小さい。タイトなタイムアウト、最小限のメモリ。
- CDN が常に効果的。

**Cons:**

- **実際の顧客デプロイを壊す**: ファイアウォール、信頼されていない CA、非公開バックエンドは仮想的なものではありません。これらは今日 GitLab 顧客に影響を与えています。
- **既存機能からの後退**: Container Registry と GitLab モノリスの両方がプロキシダウンロードをサポートしています。その機能を取り除くことは後退です。
- **デュアルパーソナリティモデルをブロックする**: GitLab.com に接続するリモートの Self-Managed/Dedicated インスタンスは、クライアントが GCS/Cloud CDN に到達できない場合に機能できません。

**Why rejected:** 顧客への影響は具体的で、十分に文書化されています。

### 代替案 2: 3 つの名前付きインスタンスモード（`redirect` / `proxy` / `hybrid`） {#alternative-2-three-named-instance-modes-redirect-proxy-hybrid}

インスタンスは 3 つのモードのいずれかに構成されます。`redirect`（namespace 単位のルックアップなし、インスタンスは常にリダイレクト）、`proxy`（namespace 単位のルックアップなし、インスタンスは常にプロキシ）、または `hybrid`（リクエストごとに namespace 単位の上書きを評価、インスタンスのデフォルト = リダイレクト）です。これは、この ADR に記録されていた以前の決定です。

**Pros:**

- `redirect` および `proxy` モードでは、namespace 単位の列が一切読み取られないため、ダウンロードパスがわずかに安価です。
- モード名は、設計議論における元の 3 つのシナリオに直接マッピングされます。

**Cons:**

- **運用上一貫性がない**。namespace 単位の上書きは `hybrid` モードでは利用可能で、他の 2 つでは利用できません。運用者は、見ている namespace の設定が意味を持つかどうかを知るために、自分がどのインスタンスモードにいるかを知る必要があります。namespace のオーナーは、反対側から同じ曖昧さに直面します。自分の上書きは、通常見ることのできないグローバル設定に応じて効果を発揮する場合としない場合があります。
- **追加の表現力なし**。3 モードの形が表現するすべてのシナリオは、`(インスタンスのデフォルト, 上書き)` で表現可能です。`redirect` モード ≡ 上書きゼロの instance=`redirect`、`proxy` モード ≡ 上書きゼロの instance=`proxy`、`hybrid` モード ≡ 一部の namespace を反対の値に設定した instance=`redirect`（または `proxy`）。
- **最適化は限界的**。`redirect` / `proxy` モードで上書き列の読み取りをスキップしても、測定可能な節約は得られません。ハンドラーはすでにリクエストごとに認可とルーティングのために namespace の行をロードしているため、上書きの読み取りは既存のクエリの一部です。
- **例外が必要になった場合に一方通行のドア**。今日 `redirect` または `proxy` モードを選択するデプロイは、インスタンスレベルのモード変更（とそれに伴う再起動）なしに、単一の例外的な namespace の上書きを設定する能力を放棄します。

**Why rejected:** 2 軸の形は、より小さく一貫したサーフェスで同じ範囲をカバーします。3 モードの形が節約する限界的なコストは、それが導入する運用上の曖昧さに見合いません。この代替案は元の決定であり、現在は置き換えられています。

### 代替案 3: リポジトリ単位の構成 {#alternative-3-per-repository-configuration}

namespace レベルではなくリポジトリレベルで配信の上書きを許可します。

**Pros:**

- より細かい制御。namespace はほとんどのリポジトリでリダイレクトを使用し、特定のものだけにプロキシを使用できます。

**Cons:**

- **問題に対する過剰設計**: ネットワーク制約は、個々のリポジトリではなく、namespace のクライアント環境に適用されます。クライアントがストレージに到達できない場合、その namespace 内のどのリポジトリにも到達できません。
- **管理オーバーヘッド**: 管理者はすべてのリポジトリを個別に構成する必要があります。
- **一貫性のないユーザー体験**: 同じ namespace 内の異なるリポジトリが異なる動作をするのは混乱を招きます。

**Why rejected:** ネットワーク制約は通常、リポジトリレベルではなく、namespace/ネットワークの境界に適用されます。namespace 単位が適切な粒度です。具体的なユーザー需要が現れた場合、namespace の設定を継承しつつ個別に上書きできるリポジトリ単位の上書きを将来検討できますが、これは対象外です。

## 参考資料 {#references}

- [Container Registry `storage.redirect.disable`](https://gitlab.com/gitlab-org/container-registry/-/blob/master/registry/storage/blobserver.go)
- [GitLab monolith `proxy_download` documentation](https://docs.gitlab.com/administration/object_storage/)
- [ADR-007: Database Schema](007_database_schema.md) (`namespaces.delivery_mode_override` column)
- [ADR-008: Content-Addressable Storage](008_content_addressable_storage.md) (read path)
- [ADR-009: API Design](009_api_design.md) (download endpoints)
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md) (namespace as configuration boundary)
- [S01: HTTP Server and Routing](https://gitlab.com/gitlab-org/ops/artifact-registry/-/merge_requests/34) (timeout and response-size assumptions affected by this decision)
- [S06: Storage Layer](https://gitlab.com/gitlab-org/ops/artifact-registry/-/merge_requests/108) (implements the resolution algorithm; `StorageConfig.delivery_mode` proto field, `BlobStore.OpenBlob` `WithDeliveryMode` option, `WithForceStream` precedence)
- [Related discussion on redirect vs proxy](https://gitlab.com/gitlab-org/ops/artifact-registry/-/merge_requests/34#note_3276797114)
- [Two-axis collapse rationale](https://gitlab.com/gitlab-org/ops/artifact-registry/-/merge_requests/108#note_3353135649) (MR-108 discussion that drove this decision)
