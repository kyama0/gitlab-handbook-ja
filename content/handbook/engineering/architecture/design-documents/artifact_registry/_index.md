---
title: "Artifact Registry"
status: proposed
creation-date: "2025-12-15"
authors: [ "@jdrpereira", "@10io", "@dmeshcharakou" ]
coaches: [ "@sxuereb" ]
dris: [ "@trizzi", "@crystalpoole" ]
owning-stage: "~devops::package"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-06-09T19:10:50+01:00
---

<!--
Before you start:

- Copy this file to a sub-directory and call it `_index.md` for it to appear in
  the design documents list.
- Remove comment blocks for sections you've filled in.
  When your document ready for review, all of these comment blocks should be
  removed.

To get started with a document you can use this template to inform you about
what you may want to document in it at the beginning. This content will change
/ evolve as you move forward with the proposal.  You are not constrained by the
content in this template. If you have a good idea about what should be in your
document, you can ignore the template, but if you don't know yet what should
be in it, this template might be handy.

- **Fill out this file as best you can.** At minimum, you should fill in the
  "Summary", and "Motivation" sections.  These can be brief and may be a copy
  of issue or epic descriptions if the initiative is already on Product's
  roadmap.
- **Create a MR for this document.** Assign it to an Architecture Evolution
  Coach (i.e. a Principal+ engineer).
- **Merge early and iterate.** Avoid getting hung up on specific details and
  instead aim to get the goals of the document clarified and merged quickly.
  The best way to do this is to just start with the high-level sections and fill
  out details incrementally in subsequent MRs.

Just because a document is merged does not mean it is complete or approved.
Any document is a working document and subject to change at any time.

When editing documents, aim for tightly-scoped, single-topic MRs to keep
discussions focused. If you disagree with what is already in a document, open a
new MR with suggested changes.

If there are new details that belong in the document, edit the document. Once
a feature has become "implemented", major changes should get new blueprints.

The canonical place for the latest set of instructions (and the likely source
of this file) is
[content/handbook/engineering/architecture/design-documents/_template.md](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/content/handbook/engineering/architecture/design-documents/_template.md).

Document statuses you can use:

- "proposed"
- "accepted"
- "ongoing"
- "implemented"
- "postponed"
- "rejected"

-->

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## 概要

<!--
This section is very important, because very often it is the only section that
will be read by team members. We sometimes call it an "Executive summary",
because executives usually don't have time to read entire documents like this.
Focus on writing this section in a way that anyone can understand what it says,
the audience here is everyone: executives, product managers, engineers, wider
community members.

A good summary is probably at least a paragraph in length.
-->

Artifact Registry は、集約されたアーティファクト管理を提供する GitLab の **新しい SKU** です。JFrog Artifactory および Sonatype Nexus と直接競合します。

GitLab の現在のプロジェクトレベルのパッケージレジストリやコンテナレジストリとは異なり、Artifact Registry はすべてのアーティファクト（コンテナ、パッケージ、ML モデル）に対する集約された制御、可視性、管理を企業に提供します。

このレジストリは、外部ツールに依存しており、ツールの統合、コスト最適化、集約されたガバナンスを必要とする大企業（1,000 名以上のユーザー）をターゲットとしています。次の機能を提供します。

- 統合されたコントロールプレーンによる **組織レベルのアーティファクト管理**
- 複数のアップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）を集約する **仮想リポジトリ**
- **AI を活用した構成支援** とコスト最適化
- 他のプロバイダーや既存の GitLab パッケージレジストリ・コンテナレジストリからオンボーディングするための **移行ツール**
- 組織スコープの重複排除を備えた **コンテンツアドレス指定ストレージ**
- Docker、Maven、npm から始まる **マルチフォーマット対応**

私たちは後方互換性の制約から解放された新しいレジストリをゼロから構築しており、最初からモダンなイベント駆動アーキテクチャを採用しています。

このイニシアチブは [内部提案](https://gitlab.com/gitlab-org/gitlab/-/issues/568349) から始まり、ユーザージャーニー、機能、データベーススキーマ、実装ロードマップを含む [拡張仕様](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md)（内部）へと発展しました。このブループリントは、公開可能な高レベルの設計とアーキテクチャ上の意思決定を扱います。内部ドキュメントには追加の戦略的な詳細が含まれています。

## 用語集

- **Organization**: GitLab における最上位のコンテナエンティティであり、主要な分離およびシャーディングの境界として機能します。リポジトリコレクション、リポジトリ、およびすべてのアーティファクトを含みます。それぞれが独立したストレージ、コスト按分、重複排除スコープを持ちます。
- **Repository collection**: 組織内のリポジトリの論理的なグループ化であり、チーム、セキュリティドメイン、または製品ラインごとにアーティファクトを整理します。組織構造のマッピングと、コレクションスコープのアクセス制御を可能にします。（MVP 後の機能。）
- **Repository**: 特定のフォーマット（Docker、Maven、npm）のアーティファクトのための型付きコンテナです。ホスト型（組織自身のアーティファクトを保存）または仮想（アップストリームソースを集約）のいずれかです。
- **ホスト型リポジトリ**: 組織が公開したアーティファクトを保存します。コンテンツアドレス指定ストレージがアーティファクトを永続化し、ライフサイクルポリシーがそれらを管理します。
- **Virtual Repository**: アップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）からアーティファクトをキャッシュするプロキシ/集約レイヤーです。ホスト型アーティファクトとリモートアーティファクトへの統合されたアクセスを提供します。
- **Content-Addressable Storage (CAS)**: アーティファクトは SHA256 ハッシュを識別子とストレージキーの両方として使用し、重複排除、不変パス、整合性検証を可能にします。
- **Artifact**: レジストリに保存されるバージョン管理されたソフトウェアパッケージ（Docker イメージ、Maven パッケージ、npm モジュール）であり、メタデータと 1 つ以上の blob で構成されます。
- **Blob**: アーティファクトの生のコンテンツ（コンテナレイヤー、パッケージファイル）です。各組織内で保存され、重複排除されます。
- **Upstream Source**: 仮想リポジトリにキャッシュされたコンテンツを提供する外部レジストリ（Maven Central、npmjs.com、Docker Hub、AWS ECR、JFrog Artifactory、その他の GitLab リポジトリ）です。
- **Deduplication**: 組織内での重複したストレージの自動的な排除です。同一のコンテンツ（同じ SHA256 ハッシュ）は一度だけ保存されます。
- **OCI (Open Container Initiative)**: コンテナフォーマットとランタイムに関する業界標準であり、Docker の元のフォーマットを超えて拡張されています。
- **MVP (Minimum Viable Product)**: フェーズ 1 であり、コアストレージ、仮想リポジトリ、基本的なライフサイクル管理を備えた、企業の [ユースケース](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/55c4a5f6af4c1049da70062a5d39561a5d1ca189/blueprint.md#core-use-cases-by-user-journey-phase)（内部）の約 30% をカバーします。
- **GA (General Availability)**: すべてのインストールタイプ（GitLab.com、Self-Managed、Dedicated）に対する本番環境対応のステータスです。
- **SKU (Stock Keeping Unit)**: 独立した製品提供です。Artifact Registry は、既存の無料ティアのレジストリとは別の、新しいプレミアム SKU です。
- **RBAC (Role-Based Access Control)**: 組織、リポジトリコレクション、またはリポジトリのレベルでロールに基づいて割り当てられる権限です。

## 動機

<!--
This section is for explicitly listing the motivation, goals and non-goals of
this document. Describe why the change is important, all the opportunities,
and the benefits to users.

The motivation section can optionally provide links to issues that demonstrate
interest in a document within the wider GitLab community. Links to
documentation for competing products and services is also encouraged in cases
where they demonstrate clear gaps in the functionality GitLab provides.

For concrete proposals we recommend laying out goals and non-goals explicitly,
but this section may be framed in terms of problem statements, challenges, or
opportunities. The latter may be a more suitable framework in cases where the
problem is not well-defined or design details not yet established.
-->

GitLab の現在のアーティファクト管理は断片化されており、プロジェクト中心です。

- **プロジェクトレベルの結合**: すべてのアーティファクトが個々のプロジェクトに紐付けられ、N が数千のプロジェクトに達しうる 1:N の管理負担を生み出します
- **集約された可視性の欠如**: 顧客はプロジェクトをまたいでアーティファクトを確認したり管理したりできません。「私たちはどのようなアーティファクトを持っているか」「ストレージの総コストはいくらか」といった問いに答えるのは困難です
- **個別の実装**: パッケージレジストリ（Rails）とコンテナレジストリ（Go）は、異なるアーキテクチャを持つ別個のアプリケーションであり、統合された体験を妨げています
- **繰り返しの構成**: セキュリティポリシー、ライフサイクルルール、アクセス制御をプロジェクトごとに構成する必要があり、継承は限定的です
- **イベントデータのサイロ**: 利用イベントとセキュリティイベントがサービス全体に分散しており、集約された収集の仕組みがありません。コンテナスキャンのようなセキュリティ機能は、プロアクティブではなくリアクティブです
- **ストレージの非効率性**: パッケージレジストリには重複排除がありません。コンテナレジストリのインスタンス全体の重複排除は、コストの高いパーティション間操作によって運用上の複雑さを生み出します
- **開発速度のギャップ**: コンテナレジストリは Rails モノリスのツール（マイグレーション、フィーチャーフラグ、自動リリース）へのアクセスが限られており、機能の提供が遅くなります
- **限定的な企業向け機能**: 仮想リポジトリがなく、アップストリームのプロキシも限定的で、JFrog/Nexus からの移行パスもありません

**ターゲット市場:**

次のことを望む、競合ツールを使用している企業です。

- ツールを GitLab に **統合** する
- 自社のアーティファクト環境を **集約して管理** する
- 可視性と AI を活用したレコメンデーションで **コストを最適化** する
- レガシーツールから **移行** する

**なぜ今なのか:**

- **チームの専門性**: Package ステージはレジストリを 6 年以上運用しており、何が機能し、何が機能しないか、そして顧客が何を必要としているかを理解しています
- **技術の成熟**: 現在のレジストリが設計された当時には利用できなかった、モダンなストレージ、イベントストリーミング、AI/ML の機能が今では存在しています
- **クリーンブレイクの利点**: ゼロから始めることで、今日の要件に対する開発速度とアーキテクチャ上の自由が得られます
- **市場機会**: AI ネイティブでトップレベルにスコープされたソリューションによって、競合他社を飛び越えることができます

**戦略的整合性:**

- **AI 統合**: イベントが豊富な基盤により、AI を活用した構成、コスト最適化、予測機能が可能になります（[AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io) を参照）
- **企業向けポジショニング**: JFrog および Nexus と直接競合します
- **プラットフォーム統合**: 外部のアーティファクト管理ツールを排除します

### 目標

<!--
List the specific goals / opportunities of the document.

- What is it trying to achieve?
- How will we know that this has succeeded?
- What are other less tangible opportunities here?
-->

1. プロジェクトレベルの断片化を排除する **組織レベルのアーティファクト管理を提供** します
2. ツール、検証、安全管理を備えた JFrog Artifactory および Sonatype Nexus からの **移行を可能に** します
3. **AI を活用した最適化を提供** します: 構成支援、コストレコメンデーション、予測的なインサイト
4. キャッシュを備えたアップストリームソースを集約する **仮想リポジトリをサポート** します
5. 自動化、テンプレート、AI 支援を通じて **プラットフォームエンジニアリングの労力を削減** します
6. 重複排除、ライフサイクルポリシー、最適化を通じて **コスト削減を達成** します
7. 分離およびシャーディングの境界として Organizations を使用し、**Cells アーキテクチャと整合** させます
8. **マルチフォーマットのアーティファクトをサポート** します: コンテナ（Docker、OCI）、パッケージ（Maven、npm）、および将来のフォーマット

### 非目標

<!--
Listing non-goals helps to focus discussion and make progress. This section is
optional.

- What is out of scope for this document?
-->

1. **既存レジストリの強化**: これは新しい SKU であり、現在のレジストリの進化ではありません。既存のレジストリは並行して継続され、廃止の計画はありません。無料ティアは現在のツールを維持します。Artifact Registry はプレミアム機能です。新しく構築することで、ティア 0 のツールを混乱させることを避け、後方互換性の制約を排除します
2. **ネストされたグループのアーティファクト管理のサポート**: 分離境界は Organizations であり、トップレベルグループやプロジェクトではありません
3. **インスタンス全体の重複排除の提供**: 重複排除は、明確なコスト按分のために組織にスコープされます
4. **MVP ですべてのアーティファクトフォーマットをサポート**: Docker、Maven、npm から始め、追加のフォーマットは v1.0 以降で提供します

## 提案

<!--
This is where we get down to the specifics of what the proposal actually is,
but keep it simple!  This should have enough detail that reviewers can
understand exactly what you're proposing, but should not include things like
API designs or implementation. The "Design Details" section below is for the
real nitty-gritty.

You might want to consider including the pros and cons of the proposed solution so that they can be
compared with the pros and cons of alternatives.
-->

## 設計と実装の詳細

<!--
This section should contain enough information that the specifics of your
change are understandable. This may include API specs (though not always
required) or even code snippets. If there's any ambiguity about HOW your
proposal will be implemented, this is the place to discuss them.

If you are not sure how many implementation details you should include in the
document, the rule of thumb here is to provide enough context for people to
understand the proposal. As you move forward with the implementation, you may
need to add more implementation details to the document, as those may become
valuable context for important technical decisions made along the way. A
document is also a register of such technical decisions. If a technical
decision requires additional context before it can be made, you probably should
document this context in a document. If it is a small technical decision that
can be made in a merge request by an author and a maintainer, you probably do
not need to document it here. The impact a technical decision will have is
another helpful information - if a technical decision is very impactful,
documenting it, along with associated implementation details, is advisable.

If it's helpful to include workflow diagrams or any other related images.
Diagrams authored in GitLab flavored markdown are preferred. In cases where
that is not feasible, images should be placed under `images/` in the same
directory as the `index.md` for the proposal.
-->

### アーキテクチャ概要

Artifact Registry は独立したサービスとして実装されます。

デプロイは [Runway GKE](https://docs.runway.gitlab.com/runtimes/kubernetes/getting-started/) を通じた Kubernetes のみです。

主要なアーキテクチャ上の意思決定:

- **技術スタック**: Go、LabKit v2、PostgreSQL、Object Storage（[ADR-006](decisions/006_technology_stack.md) を参照）
- **ストレージ**: namespace スコープの重複排除を備えたコンテンツアドレス指定（[ADR-008](decisions/008_content_addressable_storage.md) を参照）
- **データベース**: 共有 blob ストレージを備えたフォーマット固有のテーブル（[ADR-007](decisions/007_database_schema.md) を参照）
- **API**: 管理 API（REST）とフォーマット固有のクライアント API（OCI、Maven、npm）（[ADR-009](decisions/009_api_design.md) を参照）
- **配信**: namespace ごとの構成を備えたリダイレクト、プロキシ、ハイブリッドのダウンロードモード（[ADR-005](decisions/005_artifact_delivery_mode.md) を参照）
- **ストレージバックエンドとのインタラクション**: CDN + blob ストレージのペアリング、署名付き URL の生成、IP ベースのルーティング、ダウンロードメタデータの伝播（[ADR-013](decisions/013_storage_backend_interaction.md) を参照）

### スケーラビリティ要件

このレジストリは GitLab.com 規模および大企業組織をターゲットとしています。詳細な要件については、[ADR-003: System Requirements](decisions/003_system_requirements.md) を参照してください。

### 段階的実装

実装は 3 つのフェーズに沿って進められ、差別化機能を構築しながら顧客の採用を優先します。

#### MVP（フェーズ 1）

**目標**: 組織レベルの管理によって企業ユースケースの約 30% をカバーする、顧客採用のための必須要件です。

**アーティファクトのストレージと管理:**

- マルチフォーマット対応（Docker、Maven、npm）
- 組織スコープの重複排除を備えたコンテンツアドレス指定ストレージ
- メタデータ管理
- 基本的なアーティファクト操作（アップロード、ダウンロード、削除、タグ付け）
- バージョン管理
- GitLab CI メタデータのキャプチャ（プラットフォームがパイプライン、コミット、ジョブのコンテキストをアーティファクトのメタデータにキャプチャします）

**リポジトリ管理:**

- リポジトリタイプ（hosted/virtual/remote）
- フォーマットごとの型付きリポジトリ
- 組織リポジトリ（リポジトリコレクションなし）
- リポジトリ構成

**仮想リポジトリ:**

- パブリックアップストリームのプロキシ（Maven Central、npmjs.com、Docker Hub）
- 認証情報管理を備えたプライベートアップストリームのプロキシ
- パブリックアップストリームとプライベートアップストリームを優先度ベースのリストで混在できる複数アップストリームのサポート
- 共有可能なアップストリーム構成
- 接続テストとヘルスモニタリング
- TTL を備えた基本的なキャッシュ管理

**アクセス制御:**

- 組織 RBAC
- 認証方法（パーソナルアクセストークン、デプロイトークン、CI/CD ジョブトークン）
- 可視性制御（public、internal、private）

**ライフサイクル管理:**

- 自動保持ポリシー（基本）
- 有効期限管理
- 復元機能を備えたソフト削除
- バージョンクリーンアップ
- 隔離管理

**分析と可観測性:**

- 統合された可視性を備えた組織ダッシュボード
- ダウンロードの追跡
- ストレージ使用量とトレンド
- 基本的な監査ログ

**統合:**

- RESTful API
- GraphQL API
- ネイティブクライアントのサポート（Maven、npm、Docker）
- CI/CD 統合/メタデータ

**MVP の成功基準:**

- 顧客が組織リポジトリを通じて Docker、Maven、npm のアーティファクトを公開および取得できる
- 仮想リポジトリがパブリックアップストリームソースからアーティファクトを正常にプロキシおよびキャッシュできる
- 組織管理者がすべてのリポジトリに適用されるライフサイクルポリシーを構成できる
- API のパフォーマンスが既存のパッケージ/コンテナレジストリのベンチマークを満たすか上回る
- GitLab CI/CD パイプラインがメタデータを埋め込んでアーティファクトをシームレスに公開できる
- アーリーアダプターの顧客が本番ワークロードでプラットフォームを検証する

#### v1.0 以降

**v1.0 の目標**: フォーマットのサポートと高度な機能を拡張し、企業ユースケースの約 60% に到達します。

主要な v1.0 の機能:

- 追加のアーティファクトフォーマット（PyPI、NuGet、RubyGems、Go モジュール）
- 組織構造のマッピングのためのリポジトリコレクションのサポート
- 強化された仮想リポジトリ機能（クラウドプロバイダー統合、マルチアップストリーム集約）
- パターンマッチングと使用量ベースのルールを備えた高度なライフサイクルポリシー
- 強化された分析とコスト按分

**v1.0 の成功基準:**

- 一貫した管理体験を備えた 7 つ以上のアーティファクトフォーマットのサポート
- リポジトリコレクションベースの構造により、大企業がチーム階層をマッピングできる
- 顧客が自動化ツールを使用して JFrog/Nexus から正常に移行できる
- AI を活用したレコメンデーションが構成時間を測定可能な割合で削減する

v1.0（フェーズ 2）および将来（フェーズ 3 以降）の機能を含む包括的な機能の優先順位付けについては、拡張ブループリント（内部）の [Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix) を参照してください。

### マイグレーション戦略

移行は、移行ツールを導入する前にサービスの安定性を優先します。

#### MVP のアプローチ: 自然なマイグレーション

MVP は **移行ツールを除外** します。まずレジストリを安定させ、新しいワークフローでの自発的な採用を促します。

- サービスが成熟し、信頼性を確立する
- アーリーアダプターが新しいプロジェクトでプラットフォームを検証する
- 時期尚早な移行ツールの複雑さを避ける
- フィードバックを収集し、移行要件を洗練する時間

ユーザーはネイティブクライアント（npm、Maven、Docker）を使用して手動でアーティファクトを公開します。仮想リポジトリは、移行中にアップストリームソースをプロキシすることで、段階的な採用を促進します。

#### MVP 後: マイグレーションツール

安定化後、移行機能が採用を加速します。

**外部プロバイダーから:**

- 特定の競合製品からの一括インポート
- メタデータの抽出と保持
- 実際の移行前のドライラン検証
- 進捗の追跡とエラーレポート
- ロールバック機能
- チェックサム検証とメタデータの完全性の検証
- 依存関係解決の検証とプレフライト互換性チェック
- 推移的依存関係のサポート

**GitLab パッケージレジストリおよびコンテナレジストリから:**

- 既存の GitLab プロジェクトレベルのレジストリから統合レジストリへアーティファクトを移動する移行ツール
- GitLab 顧客向けのシームレスな移行パス

移行のタイムラインと優先順位付けについては、[Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix)（内部）を参照してください。

## チーム間の依存関係

Artifact Registry は、実装を成功させるために GitLab の複数のチームとのコラボレーションを必要とします。

TBD

<!--| Team | What's Needed | Output | Criticality |
|------|---------------|--------|-------------|
| **[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)** | **Schema design**: Review schema proposed in [ADR-007](decisions/007_database_schema.md)-format-specific tables vs. cross-format operations, deduplication logic, blob reference tracking, access and cleanup patterns. **Sharding**: Validate sharding key. **Performance**: Query patterns for key operations, cleanup tasks, storage attribution. **Scale**: Validate for GitLab.com scale (billions of records, TB-range metadata). **Partitioning/isolation**: Table partitioning strategy and logical database isolation (new database alongside `main` and `ci`). | ADR-007 revised, expanded, and approved. | **Critical** - Large number of new tables with complex deduplication, reference tracking, and cleanup logic. Schema must be correct from the start; large-scale refactoring would be extremely costly. |
| **[Platform Insights](/handbook/engineering/data-engineering/analytics/platform-insights/)** | **ClickHouse/DIP integration**: Event collection patterns for artifact operations, schema design for analytics tables, query optimization for cost tracking and usage reporting. **Event instrumentation**: Patterns for capturing and storing long-term event records for audit and feeding AI/ML features (recommendations, optimization). | New ADR with strategy for event collection and processing. | **High** - Core value proposition includes cost analytics, usage tracking, and AI-powered insights. Getting this right from the start is key. |
| **[Fulfillment:Utilization](/handbook/engineering/development/fulfillment/utilization/)** | **Billing integration**: Billing model, integration with CustomersDot for invoicing and payment processing. **Storage quotas**: Quota enforcement patterns, usage tracking per organization, integration with existing consumables management. **Cost attribution**: Mechanisms for tracking and reporting storage costs. **Usage notifications**: Alert mechanisms when approaching limits. | New ADR with strategy for consumption tracking and usage billing. | **High** - New paid SKU requiring monetization. Without billing integration the product cannot be sold. |
| **[Geo](/handbook/engineering/infrastructure-platforms/tenant-scale/geo/)** | **Replication validation**: Confirm existing Geo Self-Service Framework can replicate all relevant registry data for self-managed and Dedicated installations. **Gap analysis**: Identify any limitations or additional work needed beyond the framework. | Update blueprint to confirm full compatibility. Follow-up issues for any gaps. | **Medium** - Early validation prevents costly rework and ensures feature parity across all installation types. |-->

## 代替案

TBD
<!--
It might be a good idea to include a list of alternative solutions or paths considered, although it is not required. Include pros and cons for
each alternative solution/path.

"Do nothing" and its pros and cons could be included in the list too.
-->

## リンク

- **Direction**: [Package Stage Direction](https://about.gitlab.com/direction/package/)
- **Top-level Epic**: [Artifact Registry](https://gitlab.com/groups/gitlab-org/-/epics/19844)
- **Original Proposal**: [Internal Proposal Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/568349)
- **Extended Blueprint**: [Detailed Specification](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md) (internal)
- **AI Vision**: [AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io)

## 意思決定

主要なアーキテクチャ上の意思決定は、Architecture Decision Records（ADR）として文書化されています。

{{< note >}}
一部の ADR には、初期提案の段階でまだ決定していない詳細をまとめた **Open Questions** セクションが含まれています。これらはレビューをブロックするものではなく、後続の更新や新しい ADR で対応されます。
{{< /note >}}

1. [ADR-001: Organizations as Anchor Point](decisions/001_organizations_as_anchor_point.md) - レジストリが Organizations に紐付けられる理由
1. [ADR-002: Storage Deduplication Scope](decisions/002_storage_deduplication_scope.md) - インスタンス全体ではなく Organizations にスコープされる重複排除
1. [ADR-003: System Requirements](decisions/003_system_requirements.md) - インフラ要件とパフォーマンス制約
1. [ADR-004: Data and Application Limits](decisions/004_data_and_application_limits.md) - ストレージ、アーティファクトサイズ、レート、並行性、エンティティ数の制限
1. [ADR-005: Artifact Delivery Mode](decisions/005_artifact_delivery_mode.md) - namespace ごとの構成を備えたリダイレクト、プロキシ、ハイブリッドの配信モード
1. [ADR-006: Technology Stack](decisions/006_technology_stack.md) - 要件とアーキテクチャに基づく技術選択
1. [ADR-007: Database Schema](decisions/007_database_schema.md) - レジストリのデータテーブルの構成
1. [ADR-008: Content-Addressable Storage](decisions/008_content_addressable_storage.md) - 重複排除と整合性検証のための SHA256 ベースの識別
1. [ADR-009: API Design](decisions/009_api_design.md) - レジストリの API エンドポイントの構成
1. [ADR-010: Data Retention](decisions/010_data_retention.md) - アーティファクト、監査ログ、キャッシュされたコンテンツの保持ポリシー
1. [ADR-011: Data Reconciliation Feature Timing](decisions/011_data_reconciliation.md) - データ突合機能のタイミングと要件
1. [ADR-012: Usage Data Collection](decisions/012_usage_data_collection.md) - Artifact Registry の利用データ収集メカニズムとしての Snowplow
1. [ADR-013: Storage Backend Interaction](decisions/013_storage_backend_interaction.md) - ストレージバックエンド + CDN のペアリング、署名付き URL の生成、リダイレクトターゲットのルーティング、ダウンロードメタデータの伝播
1. [ADR-014: Frontend to Artifact Registry Interaction](decisions/014_frontend_to_artifact_registry.md) - ブラウザと Artifact Registry のインタラクションのための Rails GraphQL リゾルバーパターン
1. [ADR-020: Authentication Flow](decisions/020_authentication_flow.md) - Artifact Registry の認証設計
1. [ADR-022: Namespace Decoupling](decisions/022_namespace_decoupling.md) - 不変のスラッグを備えた内部 namespace エンティティ
1. [ADR-023: Code Structure and Enforcement](decisions/023_code_structure_and_enforcement.md) - 機能ごとのパッケージ構成を備えた Go の `cmd/` + `internal/` レイアウト

## インターフェース合意事項

Artifact Registry と依存チームの間で、要件、責任、未解決の問題を定義するチーム横断のインターフェース合意です。

1. [Infrastructure](agreements/infrastructure.md) - Infrastructure チームとのインターフェース合意
1. [Auth Platform](agreements/auth.md) - Auth Platform チームとのインターフェース合意
1. [Organizations](agreements/organizations.md) - Organizations（Tenant Scale）チームとのインターフェース合意
