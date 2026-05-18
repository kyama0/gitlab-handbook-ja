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
upstream_sha: 2dd9d315aff1d685e3f27ab47a69d8faa01d31fa
translated_at: "2026-05-18T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-18T13:31:14+02:00"
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

Artifact Registry は、集中型のアーティファクト管理を提供する GitLab の **新しい SKU** です。JFrog Artifactory および Sonatype Nexus と直接競合します。

GitLab の現在のプロジェクトレベルのパッケージレジストリやコンテナレジストリとは異なり、Artifact Registry はすべてのアーティファクト（コンテナ、パッケージ、ML モデル）に対する集中的な制御、可視性、管理機能をエンタープライズに提供します。

このレジストリは、外部ツールに依存しており、ツール統合、コスト最適化、集中ガバナンスを必要とする大規模エンタープライズ（1,000 ユーザー以上）をターゲットとしています。次のような機能を提供します。

- **組織レベルのアーティファクト管理** と統一されたコントロールプレーン
- 複数のアップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）を集約する **仮想リポジトリ**
- **AI による構成支援** とコスト最適化
- 他のプロバイダーや既存の GitLab パッケージレジストリ・コンテナレジストリからのオンボーディングを支援する **マイグレーションツール**
- 組織スコープの重複排除を伴う **コンテンツアドレッサブルストレージ**
- Docker、Maven、npm から始まる **マルチフォーマットサポート**

私たちは、後方互換性の制約から解放され、最初からモダンなイベント駆動アーキテクチャを採用した、新しいレジストリをゼロから構築しています。

このイニシアチブは [社内提案](https://gitlab.com/gitlab-org/gitlab/-/issues/568349) として始まり、ユーザージャーニー、ケイパビリティ、データベーススキーマ、実装ロードマップを含む [拡張仕様書](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md)（社内）へと発展しました。本ブループリントでは、公開可能な高レベルの設計とアーキテクチャ上の意思決定を扱います。社内ドキュメントには、追加の戦略的詳細が含まれています。

## 用語集

- **Organization**: GitLab の最上位コンテナエンティティで、主要な分離およびシャーディング境界として機能します。Repository collection、Repository、およびすべてのアーティファクトを含みます。各 Organization は独立したストレージ、コスト按分、重複排除スコープを持ちます。
- **Repository collection**: 組織内の Repository を論理的にグループ化するもので、チーム、セキュリティドメイン、または製品ラインごとにアーティファクトを整理します。組織構造のマッピングおよびコレクションスコープのアクセス制御を可能にします。（MVP 後の機能。）
- **Repository**: 特定のフォーマット（Docker、Maven、npm）のアーティファクトを格納する型付きコンテナ。ローカル（組織自身のアーティファクトを保存）または仮想（アップストリームソースを集約）のいずれかです。
- **Local Repository**: 組織が公開するアーティファクトを保存します。コンテンツアドレッサブルストレージがアーティファクトを永続化し、ライフサイクルポリシーがそれらを管理します。
- **Virtual Repository**: アップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）からのアーティファクトをキャッシュするプロキシ／集約レイヤー。ローカルおよびリモートのアーティファクトに統一的にアクセスできるようにします。
- **Content-Addressable Storage (CAS)**: アーティファクトの SHA256 ハッシュを識別子兼ストレージキーとして使用し、重複排除、不変パス、整合性検証を可能にします。
- **Artifact**: バージョン管理されたソフトウェアパッケージ（Docker イメージ、Maven パッケージ、npm モジュール）。レジストリに保存され、メタデータと 1 つ以上の Blob で構成されます。
- **Blob**: アーティファクトの生コンテンツ（コンテナレイヤー、パッケージファイル）。各組織内に保存され重複排除されます。
- **Upstream Source**: 仮想リポジトリにキャッシュコンテンツを提供する外部レジストリ（Maven Central、npmjs.com、Docker Hub、AWS ECR、JFrog Artifactory、他の GitLab リポジトリ）。
- **Deduplication**: 組織内における重複ストレージの自動排除。同一コンテンツ（同じ SHA256 ハッシュ）は 1 度だけ保存されます。
- **OCI (Open Container Initiative)**: コンテナフォーマットおよびランタイムに関する業界標準で、Docker のオリジナルフォーマットを超えて拡張されています。
- **MVP (Minimum Viable Product)**: フェーズ 1。エンタープライズの [ユースケース](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/55c4a5f6af4c1049da70062a5d39561a5d1ca189/blueprint.md#core-use-cases-by-user-journey-phase)（社内）の約 30% をカバーし、コアストレージ、仮想リポジトリ、基本的なライフサイクル管理を含みます。
- **GA (General Availability)**: すべてのインストールタイプ（GitLab.com、Self-Managed、Dedicated）における本番利用可能なステータス。
- **SKU (Stock Keeping Unit)**: 個別の製品提供単位。Artifact Registry は新しい premium SKU で、既存の無料レジストリとは別個のものです。
- **RBAC (Role-Based Access Control)**: 組織、Repository collection、または Repository レベルでロールに基づいて割り当てられる権限。

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

GitLab の現在のアーティファクト管理は、断片化されておりプロジェクト中心です。

- **プロジェクトレベルの結合**: すべてのアーティファクトは個別のプロジェクトに紐づき、N が数千プロジェクトに達する可能性のある 1:N の管理負荷を生み出します
- **集中可視性の欠如**: 顧客はプロジェクトをまたいでアーティファクトを参照・管理できません。「どんなアーティファクトを持っているか」「総ストレージコストはいくらか」といった疑問に答えるのが難しい状態です
- **別々の実装**: パッケージレジストリ（Rails）とコンテナレジストリ（Go）はアーキテクチャの異なる別個のアプリケーションで、統一された体験の提供を妨げています
- **設定の繰り返し**: セキュリティポリシー、ライフサイクルルール、アクセス制御は、限定的な継承しかなくプロジェクトごとに設定する必要があります
- **イベントデータのサイロ化**: 利用イベントとセキュリティイベントはサービスごとに散在し、集中的な収集ができていません。コンテナスキャンのようなセキュリティ機能はプロアクティブではなくリアクティブです
- **ストレージ非効率**: パッケージレジストリには重複排除がなく、コンテナレジストリのインスタンス全体での重複排除は、高コストなクロスパーティション操作を伴う運用上の複雑さを生んでいます
- **開発速度のギャップ**: コンテナレジストリは Rails モノリスのツール（マイグレーション、機能フラグ、自動リリース）を限定的にしか利用できず、機能提供が遅くなっています
- **限定的なエンタープライズ機能**: 仮想リポジトリがなく、アップストリームプロキシも限定的、JFrog/Nexus からのマイグレーションパスもありません

**ターゲット市場:**

競合ツールを使用しているエンタープライズで、次のことを望んでいる顧客が対象です。

- ツールを GitLab に **統合する**
- アーティファクトランドスケープを **集中管理する**
- 可視性と AI 駆動のレコメンデーションでコストを **最適化する**
- レガシーツールから **マイグレーションする**

**なぜ今か:**

- **チームの専門知識**: Package ステージはレジストリ運用 6 年以上の経験を持ち、何が機能し何が機能しないか、顧客が何を必要とするかを理解しています
- **テクノロジーの成熟度**: 現在のレジストリが設計された時点では存在しなかった、モダンなストレージ、イベントストリーミング、AI/ML 機能が利用可能になりました
- **クリーンスタートの優位性**: ゼロから始めることで、今日の要件に対する速度とアーキテクチャの自由度が得られます
- **市場機会**: AI ネイティブで、トップレベルにスコープされたソリューションで競合を一気に追い抜けます

**戦略的整合性:**

- **AI 統合**: イベント豊富な基盤により、AI 駆動の構成、コスト最適化、予測機能が可能になります（[AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io) を参照）
- **エンタープライズポジショニング**: JFrog および Nexus と直接競合します
- **プラットフォーム統合**: 外部のアーティファクト管理ツールを排除します

### 目標

<!--
List the specific goals / opportunities of the document.

- What is it trying to achieve?
- How will we know that this has succeeded?
- What are other less tangible opportunities here?
-->

1. プロジェクトレベルの断片化を排除する **組織レベルのアーティファクト管理を提供する**
2. ツール、検証、安全制御を備えた JFrog Artifactory および Sonatype Nexus からの **マイグレーションを可能にする**
3. **AI 駆動の最適化を実現する**: 構成支援、コスト推奨、予測インサイト
4. キャッシング機能とともにアップストリームソースを集約する **仮想リポジトリをサポートする**
5. 自動化、テンプレート、AI 支援を通じて **プラットフォームエンジニアリングの労力を削減する**
6. 重複排除、ライフサイクルポリシー、最適化により **コスト削減を達成する**
7. Organizations を分離およびシャーディング境界として用いて **Cells アーキテクチャと整合させる**
8. **マルチフォーマットアーティファクトをサポートする**: コンテナ（Docker、OCI）、パッケージ（Maven、npm）、および将来のフォーマット

### 非目標

<!--
Listing non-goals helps to focus discussion and make progress. This section is
optional.

- What is out of scope for this document?
-->

1. **既存レジストリの強化**: これは新しい SKU であり、現在のレジストリの進化版ではありません。既存レジストリは廃止予定なく並行して継続します。無料ティアは現在のツールを維持し、Artifact Registry は premium 機能となります。新規構築により、ティア 0 のツールへの影響を回避し、後方互換性の制約をなくします
2. **ネストグループのアーティファクト管理サポート**: トップレベルグループやプロジェクトではなく、Organizations を分離境界とします
3. **インスタンス全体の重複排除の提供**: コスト按分を明確にするため、重複排除は組織にスコープされます
4. **MVP におけるすべてのアーティファクトフォーマットのサポート**: Docker、Maven、npm から開始し、追加のフォーマットは v1.0 以降で対応します

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

Artifact Registry は別個のサービスとして実装されます。

デプロイは [Runway GKE](https://docs.runway.gitlab.com/runtimes/kubernetes/getting-started/) を介した Kubernetes のみです。

主要なアーキテクチャ上の意思決定:

- **技術スタック**: Go、LabKit v2、PostgreSQL、Object Storage（[ADR-006](decisions/006_technology_stack.md) を参照）
- **ストレージ**: namespace スコープの重複排除を伴うコンテンツアドレッサブル方式（[ADR-008](decisions/008_content_addressable_storage.md) を参照）
- **データベース**: 共有 Blob ストレージを伴うフォーマット固有テーブル（[ADR-007](decisions/007_database_schema.md) を参照）
- **API**: 管理 API（REST）とフォーマット固有のクライアント API（OCI、Maven、npm）（[ADR-009](decisions/009_api_design.md) を参照）
- **配信**: namespace ごとに構成可能な、リダイレクト、プロキシ、ハイブリッドのダウンロードモード（[ADR-005](decisions/005_artifact_delivery_mode.md) を参照）

### スケーラビリティ要件

レジストリは、GitLab.com 規模および大規模エンタープライズ組織を対象とします。詳細な要件については、[ADR-003: System Requirements](decisions/003_system_requirements.md) を参照してください。

### 段階的実装

実装は、差別化機能を構築しつつ顧客採用を優先する 3 つのフェーズで進めます。

#### MVP（フェーズ 1）

**目標**: 顧客採用に必要な基本機能を提供し、組織レベル管理によりエンタープライズユースケースの約 30% をカバーします。

**アーティファクトのストレージと管理:**

- マルチフォーマットサポート（Docker、Maven、npm）
- 組織スコープの重複排除を伴うコンテンツアドレッサブルストレージ
- メタデータ管理
- 基本的なアーティファクト操作（アップロード、ダウンロード、削除、タグ付け）
- バージョン管理
- GitLab CI メタデータキャプチャ（プラットフォームがパイプライン、コミット、ジョブのコンテキストをアーティファクトメタデータに取り込む）

**リポジトリ管理:**

- リポジトリタイプ（ローカル／仮想）
- フォーマットごとの型付きリポジトリ
- 組織リポジトリ（Repository collection なし）
- リポジトリ構成

**仮想リポジトリ:**

- パブリックアップストリームのプロキシ（Maven Central、npmjs.com、Docker Hub）
- 認証情報管理を伴うプライベートアップストリームのプロキシ
- 優先度ベースのリストでパブリックとプライベートのアップストリームを混在可能な、複数アップストリームのサポート
- 共有可能なアップストリーム構成
- 接続テストおよびヘルスモニタリング
- TTL 付きの基本的なキャッシュ管理

**アクセス制御:**

- 組織 RBAC
- 認証方式（個人アクセストークン、デプロイトークン、CI/CD ジョブトークン）
- 可視性制御（公開、internal、プライベート）

**ライフサイクル管理:**

- 自動化された保持ポリシー（基本）
- 有効期限管理
- 復元機能を伴うソフトデリート
- バージョンクリーンアップ
- 隔離管理

**アナリティクスと可観測性:**

- 統一された可視性を持つ組織ダッシュボード
- ダウンロードのトラッキング
- ストレージ使用量とトレンド
- 基本的な監査ログ

**統合:**

- RESTful API
- GraphQL API
- ネイティブクライアントサポート（Maven、npm、Docker）
- CI/CD 統合／メタデータ

**MVP の成功基準:**

- 顧客が組織リポジトリを通じて Docker、Maven、npm のアーティファクトを公開・取得できる
- 仮想リポジトリがパブリックアップストリームソースからアーティファクトを正しくプロキシ・キャッシュできる
- 組織管理者がすべてのリポジトリに適用されるライフサイクルポリシーを構成できる
- API パフォーマンスが既存のパッケージ／コンテナレジストリのベンチマーク以上である
- GitLab CI/CD パイプラインがメタデータを埋め込んでアーティファクトをシームレスに公開できる
- アーリーアダプターの顧客が本番ワークロードでプラットフォームを検証する

#### v1.0 以降

**v1.0 の目標**: フォーマットサポートと高度な機能を拡張し、エンタープライズユースケースの約 60% に到達する。

主要な v1.0 ケイパビリティ:

- 追加のアーティファクトフォーマット（PyPI、NuGet、RubyGems、Go modules）
- 組織構造のマッピングのための Repository collection サポート
- 強化された仮想リポジトリ機能（クラウドプロバイダー統合、複数アップストリーム集約）
- パターンマッチングと使用ベースルールを備えた高度なライフサイクルポリシー
- 強化されたアナリティクスとコスト按分

**v1.0 の成功基準:**

- 一貫した管理体験で 7 つ以上のアーティファクトフォーマットをサポート
- Repository collection ベースの構造により、大規模エンタープライズが自社のチーム階層をマッピング可能
- 顧客が自動化ツールを使って JFrog/Nexus からのマイグレーションに成功する
- AI 駆動のレコメンデーションが、構成時間を計測可能な割合で削減する

v1.0（フェーズ 2）と将来（フェーズ 3 以降）の機能を含む包括的なケイパビリティの優先順位付けについては、拡張ブループリント（社内）の [Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix) を参照してください。

### マイグレーション戦略

マイグレーションは、マイグレーションツールを導入する前に、サービスの安定性を優先します。

#### MVP のアプローチ: 自然なマイグレーション

MVP は **マイグレーションツールを除外** します。レジストリはまず安定化し、新規ワークフローへの自然な採用を促します。

- サービスが成熟し、信頼性が確立される
- アーリーアダプターが新規プロジェクトでプラットフォームを検証する
- 早すぎるマイグレーションツールの複雑さを回避できる
- フィードバックを集めてマイグレーション要件を洗練する時間が得られる

ユーザーはネイティブクライアント（npm、Maven、Docker）を使ってアーティファクトを手動で公開します。仮想リポジトリは、マイグレーション期間中アップストリームソースをプロキシすることで段階的な採用を支援します。

#### MVP 後: マイグレーションツール

安定化後、マイグレーション機能が採用を加速します。

**外部プロバイダーから:**

- 特定の競合ツールからの一括インポート
- メタデータの抽出と保持
- 実マイグレーション前のドライラン検証
- 進捗トラッキングとエラー報告
- ロールバック機能
- チェックサム検証とメタデータ完全性検証
- 依存関係解決の検証と事前互換性チェック
- 推移的依存関係のサポート

**GitLab パッケージレジストリおよびコンテナレジストリから:**

- 既存の GitLab プロジェクトレベルレジストリから統一レジストリへアーティファクトを移動するマイグレーションツール
- GitLab 顧客向けのシームレスな移行パス

マイグレーションのタイムラインと優先順位については、[Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix)（社内）を参照してください。

## チーム間の依存関係

Artifact Registry の実装を成功させるには、複数の GitLab チームとの連携が必要です。

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

- **方向性**: [Package Stage Direction](https://about.gitlab.com/direction/package/)
- **トップレベル Epic**: [Artifact Registry](https://gitlab.com/groups/gitlab-org/-/epics/19844)
- **オリジナル提案**: [Internal Proposal Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/568349)
- **拡張ブループリント**: [Detailed Specification](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md)（社内）
- **AI ビジョン**: [AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io)

## 意思決定

主要なアーキテクチャ上の意思決定は、Architecture Decision Records (ADR) として文書化されています。

{{< note >}}
一部の ADR には、初回提案時にまだ決定していない詳細を記録した **Open Questions** セクションが含まれています。これらはレビューをブロックするものではなく、後続の更新や新しい ADR で対応されます。
{{< /note >}}

1. [ADR-001: Organizations as Anchor Point](decisions/001_organizations_as_anchor_point.md) - レジストリが Organizations をアンカーとする理由
1. [ADR-002: Storage Deduplication Scope](decisions/002_storage_deduplication_scope.md) - インスタンス全体ではなく Organizations にスコープされた重複排除
1. [ADR-003: System Requirements](decisions/003_system_requirements.md) - インフラ要件とパフォーマンス制約
1. [ADR-004: Data and Application Limits](decisions/004_data_and_application_limits.md) - ストレージ、アーティファクトサイズ、レート、並行数、エンティティ数の制限
1. [ADR-005: Artifact Delivery Mode](decisions/005_artifact_delivery_mode.md) - namespace ごとに構成可能なリダイレクト、プロキシ、ハイブリッド配信モード
1. [ADR-006: Technology Stack](decisions/006_technology_stack.md) - 要件とアーキテクチャに基づく技術選定
1. [ADR-007: Database Schema](decisions/007_database_schema.md) - レジストリのデータテーブル構成
1. [ADR-008: Content-Addressable Storage](decisions/008_content_addressable_storage.md) - 重複排除と整合性検証のための SHA256 ベースの識別
1. [ADR-009: API Design](decisions/009_api_design.md) - レジストリの API エンドポイント構成
1. [ADR-010: Data Retention](decisions/010_data_retention.md) - アーティファクト、監査ログ、キャッシュコンテンツの保持ポリシー
1. [ADR-011: Data Reconciliation Feature Timing](decisions/011_data_reconciliation.md) - データレコンサイル機能のタイミングと要件
1. [ADR-012: Usage Data Collection](decisions/012_usage_data_collection.md) - Artifact Registry の利用データ収集メカニズムとしての Snowplow
1. [ADR-020: Authentication Flow](decisions/020_authentication_flow.md) - Artifact Registry の認証設計
1. [ADR-022: Namespace Decoupling](decisions/022_namespace_decoupling.md) - 不変スラグを持つ内部 namespace エンティティ
1. [ADR-023: Code Structure and Enforcement](decisions/023_code_structure_and_enforcement.md) - パッケージごとの機能構成を伴う Go の `cmd/` + `internal/` レイアウト

## インターフェース合意事項

Artifact Registry と依存チームの間の要件、責任、未解決の質問を定義する、チーム横断のインターフェース合意事項です。

1. [Infrastructure](agreements/infrastructure.md) - Infrastructure チームとのインターフェース合意
1. [Auth Platform](agreements/auth.md) - Auth Platform チームとのインターフェース合意
1. [Organizations](agreements/organizations.md) - Organizations（Tenant Scale）チームとのインターフェース合意
