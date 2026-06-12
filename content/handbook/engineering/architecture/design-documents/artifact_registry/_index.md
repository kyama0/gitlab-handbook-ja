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
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: "2026-06-09T19:10:50+01:00"
translated_at: "2026-06-12T14:11:12Z"
translator: claude
stale: false
model: claude-opus-4-7
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

## 概要 {#summary}

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

GitLab の現在のプロジェクトレベルの package および container registry とは異なり、Artifact Registry はすべてのアーティファクト（コンテナ、パッケージ、ML モデル）に対する集中的な制御、可視性、管理を企業に提供します。

このレジストリは、外部ツールに依存しており、ツールの統合、コスト最適化、集中ガバナンスを必要とする大企業（1,000 名以上のユーザー）をターゲットとしています。次のものを提供します。

- 統一されたコントロールプレーンによる **組織レベルのアーティファクト管理**
- 複数のアップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）を集約する **仮想リポジトリ**
- **AI を活用した構成支援** とコスト最適化
- 他のプロバイダーや既存の GitLab package および container registry からオンボーディングするための **マイグレーションツール**
- 組織スコープの重複排除を備えた **コンテンツアドレス可能ストレージ**
- Docker、Maven、npm から始まる **マルチフォーマットサポート**

私たちは後方互換性の制約から解放された新しいレジストリをゼロから構築しており、最初からモダンなイベント駆動型アーキテクチャを採用しています。

このイニシアチブは [内部提案](https://gitlab.com/gitlab-org/gitlab/-/issues/568349) から始まり、ユーザージャーニー、ケイパビリティ、データベーススキーマ、実装ロードマップを含む [拡張仕様](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md)（内部）へと発展しました。この blueprint は公開に適した高レベルの設計とアーキテクチャ上の決定を扱っています。内部ドキュメントには追加の戦略的な詳細が含まれています。

## 用語集 {#glossary}

- **Organization**: GitLab における最上位のコンテナエンティティであり、主要な分離およびシャーディングの境界として機能します。リポジトリコレクション、リポジトリ、およびすべてのアーティファクトを含みます。それぞれが独立したストレージ、コスト帰属、重複排除スコープを持ちます。
- **Repository collection**: 組織内のリポジトリの論理的なグループであり、アーティファクトをチーム、セキュリティドメイン、または製品ラインごとに整理します。組織構造のマッピングとコレクションスコープのアクセス制御を可能にします。（MVP 後の機能です。）
- **Repository**: 特定のフォーマット（Docker、Maven、npm）のアーティファクト用の型付きコンテナです。Hosted（組織自身のアーティファクトを保存）または Virtual（アップストリームソースを集約）のいずれかです。
- **Hosted Repository**: 組織が公開したアーティファクトを保存します。コンテンツアドレス可能ストレージがアーティファクトを永続化し、ライフサイクルポリシーがそれらを管理します。
- **Virtual Repository**: アップストリームソース（パブリックレジストリ、クラウドプロバイダー、レガシーツール）からのアーティファクトをキャッシュするプロキシ/集約レイヤーです。hosted およびリモートのアーティファクトへの統一されたアクセスを提供します。
- **Content-Addressable Storage (CAS)**: アーティファクトはその SHA256 ハッシュを識別子とストレージキーの両方として使用し、重複排除、不変パス、整合性検証を可能にします。
- **Artifact**: レジストリに保存されるバージョン管理されたソフトウェアパッケージ（Docker イメージ、Maven パッケージ、npm モジュール）であり、メタデータと 1 つ以上の blob で構成されます。
- **Blob**: アーティファクトの生コンテンツ（コンテナレイヤー、パッケージファイル）です。各組織内で保存および重複排除されます。
- **Upstream Source**: 仮想リポジトリにキャッシュされたコンテンツを提供する外部レジストリ（Maven Central、npmjs.com、Docker Hub、AWS ECR、JFrog Artifactory、その他の GitLab リポジトリ）です。
- **Deduplication**: 組織内の重複したストレージを自動的に排除します。同一のコンテンツ（同じ SHA256 ハッシュ）は 1 度だけ保存されます。
- **OCI (Open Container Initiative)**: コンテナフォーマットおよびランタイムに関する業界標準であり、Docker のオリジナルフォーマットを超えて拡張されています。
- **MVP (Minimum Viable Product)**: フェーズ 1 であり、エンタープライズの [ユースケース](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/55c4a5f6af4c1049da70062a5d39561a5d1ca189/blueprint.md#core-use-cases-by-user-journey-phase) の約 30%（内部）をカバーし、コアストレージ、仮想リポジトリ、基本的なライフサイクル管理を備えます。
- **GA (General Availability)**: すべてのインストールタイプ（GitLab.com、Self-Managed、Dedicated）に対する本番環境対応のステータスです。
- **SKU (Stock Keeping Unit)**: 個別の製品オファリングです。Artifact Registry は新しいプレミアム SKU であり、既存の無料ティアのレジストリとは別物です。
- **RBAC (Role-Based Access Control)**: 組織、リポジトリコレクション、またはリポジトリレベルでロールに基づいて割り当てられる権限です。

## 動機 {#motivation}

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

- **プロジェクトレベルの結合**: すべてのアーティファクトが個々のプロジェクトに紐付き、N が数千のプロジェクトに達しうる 1:N の管理負担を生み出しています
- **集中的な可視性の欠如**: 顧客はプロジェクトをまたいでアーティファクトを確認したり管理したりできません。「どんなアーティファクトがあるのか」「ストレージの総コストはいくらか」といった問いに答えるのが困難です
- **個別の実装**: package registry（Rails）と container registry（Go）は異なるアーキテクチャを持つ別々のアプリケーションであり、統一された体験を妨げています
- **繰り返しの構成**: セキュリティポリシー、ライフサイクルルール、アクセス制御をプロジェクトごとに構成する必要があり、継承は限定的です
- **イベントデータのサイロ化**: 使用状況やセキュリティイベントがサービス間に散在し、集中的な収集がありません。container scanning のようなセキュリティ機能はプロアクティブではなくリアクティブです
- **ストレージの非効率性**: package registry には重複排除がありません。container registry のインスタンス全体の重複排除は、高コストなクロスパーティション操作を伴う運用上の複雑さを生み出します
- **開発速度のギャップ**: container registry は Rails モノリスのツール（マイグレーション、フィーチャーフラグ、自動リリース）へのアクセスが限られており、機能提供を遅らせています
- **限定的なエンタープライズ機能**: 仮想リポジトリがなく、アップストリームプロキシも限定的で、JFrog/Nexus からのマイグレーションパスがありません

**ターゲット市場:**

競合ツールを使用しており、次のことを望む企業です。

- ツールを GitLab に **統合する**
- アーティファクトのランドスケープの **管理を集中化する**
- 可視性と AI を活用したレコメンデーションで **コストを最適化する**
- レガシーツールから **マイグレーションする**

**なぜ今なのか:**

- **チームの専門知識**: Package ステージはレジストリの運用に 6 年以上の経験があり、何が機能し、何が機能しないか、そして顧客が何を必要としているかを理解しています
- **テクノロジーの成熟**: 現在のレジストリが設計された時点では利用できなかったモダンなストレージ、イベントストリーミング、AI/ML ケイパビリティが今では存在します
- **クリーンブレイクの利点**: 一から始めることで、今日の要件に対応する速度とアーキテクチャの自由が得られます
- **市場機会**: AI ネイティブで最上位スコープのソリューションにより、競合他社を一気に追い抜くことができます

**戦略的整合性:**

- **AI 統合**: イベントが豊富な基盤により、AI を活用した構成、コスト最適化、予測ケイパビリティが可能になります（[AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io) を参照）
- **エンタープライズポジショニング**: JFrog および Nexus と直接競合します
- **プラットフォームの統合**: 外部のアーティファクト管理ツールを排除します

### ゴール {#goals}

<!--
List the specific goals / opportunities of the document.

- What is it trying to achieve?
- How will we know that this has succeeded?
- What are other less tangible opportunities here?
-->

1. プロジェクトレベルの断片化を排除する **組織レベルのアーティファクト管理を提供する**
2. ツール、検証、安全制御を備え、JFrog Artifactory および Sonatype Nexus からの **マイグレーションを可能にする**
3. 構成支援、コストレコメンデーション、予測インサイトという **AI を活用した最適化を提供する**
4. キャッシュを備えたアップストリームソースを集約する **仮想リポジトリをサポートする**
5. 自動化、テンプレート、AI 支援を通じて **プラットフォームエンジニアリングの労力を削減する**
6. 重複排除、ライフサイクルポリシー、最適化を通じて **コスト削減を達成する**
7. 分離およびシャーディングの境界として Organizations を使用し、**Cells アーキテクチャと整合させる**
8. **マルチフォーマットのアーティファクトをサポートする**: コンテナ（Docker、OCI）、パッケージ（Maven、npm）、および将来のフォーマット

### 非ゴール {#non-goals}

<!--
Listing non-goals helps to focus discussion and make progress. This section is
optional.

- What is out of scope for this document?
-->

1. **既存レジストリの拡張**: これは新しい SKU であり、現在のレジストリの進化版ではありません。既存のレジストリはサンセット計画なしに並行して継続します。無料ティアは現在のツールを維持します。Artifact Registry はプレミアム機能です。新しく構築することで、ティア 0 のツールへの混乱を回避し、後方互換性の制約を排除します
2. **ネストされたグループのアーティファクト管理のサポート**: 分離の境界は Organizations であり、最上位グループやプロジェクトではありません
3. **インスタンス全体の重複排除の提供**: 明確なコスト帰属のために、重複排除は組織にスコープされます
4. **MVP におけるすべてのアーティファクトフォーマットのサポート**: Docker、Maven、npm から始まり、追加のフォーマットは v1.0 以降です

## 提案 {#proposal}

<!--
This is where we get down to the specifics of what the proposal actually is,
but keep it simple!  This should have enough detail that reviewers can
understand exactly what you're proposing, but should not include things like
API designs or implementation. The "Design Details" section below is for the
real nitty-gritty.

You might want to consider including the pros and cons of the proposed solution so that they can be
compared with the pros and cons of alternatives.
-->

## 設計と実装の詳細 {#design-and-implementation-details}

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

### アーキテクチャ概要 {#architecture-overview}

Artifact Registry は独立したサービスとして実装されます。

デプロイは [Runway GKE](https://docs.runway.gitlab.com/runtimes/kubernetes/getting-started/) を通じた Kubernetes 専用です。

主要なアーキテクチャ上の決定:

- **テクノロジースタック**: Go、LabKit v2、PostgreSQL、Object Storage（[ADR-006](decisions/006_technology_stack.md) を参照）
- **ストレージ**: ネームスペーススコープの重複排除を備えたコンテンツアドレス可能ストレージ（[ADR-008](decisions/008_content_addressable_storage.md) を参照）
- **データベース**: 共有 blob ストレージを備えたフォーマット固有のテーブル（[ADR-007](decisions/007_database_schema.md) を参照）
- **API**: 管理 API（REST）とフォーマット固有のクライアント API（OCI、Maven、npm）（[ADR-009](decisions/009_api_design.md) を参照）
- **配信**: ネームスペースごとに構成可能なリダイレクト、プロキシ、ハイブリッドのダウンロードモード（[ADR-005](decisions/005_artifact_delivery_mode.md) を参照）
- **ストレージバックエンドとの相互作用**: CDN + blob ストレージのペアリング、署名付き URL の生成、IP ベースのルーティング、ダウンロードメタデータの伝播（[ADR-013](decisions/013_storage_backend_interaction.md) を参照）

### スケーラビリティ要件 {#scalability-requirements}

このレジストリは GitLab.com の規模と大規模なエンタープライズ組織をターゲットとしています。詳細な要件については、[ADR-003: System Requirements](decisions/003_system_requirements.md) を参照してください。

### 段階的な実装 {#phased-implementation}

実装は 3 つのフェーズに従い、差別化ケイパビリティを構築しつつ顧客の採用を優先します。

#### MVP（フェーズ 1） {#mvp-phase-1}

**目標**: 顧客採用のための最低限の要件を満たし、組織レベルの管理でエンタープライズユースケースの約 30% をカバーします。

**アーティファクトのストレージと管理:**

- マルチフォーマットサポート（Docker、Maven、npm）
- 組織スコープの重複排除を備えたコンテンツアドレス可能ストレージ
- メタデータ管理
- 基本的なアーティファクト操作（アップロード、ダウンロード、削除、タグ付け）
- バージョン管理
- GitLab CI メタデータのキャプチャ（プラットフォームがパイプライン、コミット、ジョブのコンテキストをアーティファクトメタデータにキャプチャ）

**リポジトリ管理:**

- リポジトリタイプ（hosted/virtual/remote）
- フォーマットごとの型付きリポジトリ
- 組織リポジトリ（リポジトリコレクションなし）
- リポジトリ構成

**仮想リポジトリ:**

- パブリックアップストリームのプロキシ（Maven Central、npmjs.com、Docker Hub）
- 認証情報管理を備えたプライベートアップストリームのプロキシ
- 優先度ベースのリストにパブリックとプライベートのアップストリームを混在させられる複数アップストリームのサポート
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
- 検疫管理

**分析と可観測性:**

- 統一された可視性を備えた組織ダッシュボード
- ダウンロードトラッキング
- ストレージ使用量とトレンド
- 基本的な監査ログ

**統合:**

- RESTful API
- GraphQL API
- ネイティブクライアントサポート（Maven、npm、Docker）
- CI/CD 統合/メタデータ

**MVP の成功基準:**

- 顧客が組織リポジトリを通じて Docker、Maven、npm のアーティファクトを公開および取得できる
- 仮想リポジトリがパブリックアップストリームソースからのアーティファクトを正常にプロキシおよびキャッシュする
- 組織管理者がすべてのリポジトリにまたがって適用されるライフサイクルポリシーを構成できる
- API のパフォーマンスが既存の package/container registry のベンチマークを満たすか上回る
- GitLab CI/CD パイプラインが埋め込みメタデータを伴ってアーティファクトをシームレスに公開できる
- アーリーアダプターの顧客が本番ワークロードでプラットフォームを検証する

#### v1.0 とその先 {#v1-0-and-beyond}

**v1.0 の目標**: フォーマットサポートと高度な機能を拡張し、エンタープライズユースケースの約 60% に到達します。

主要な v1.0 ケイパビリティ:

- 追加のアーティファクトフォーマット（PyPI、NuGet、RubyGems、Go モジュール）
- 組織構造のマッピングのためのリポジトリコレクションのサポート
- 強化された仮想リポジトリ機能（クラウドプロバイダー統合、マルチアップストリーム集約）
- パターンマッチングと使用状況ベースのルールを備えた高度なライフサイクルポリシー
- 強化された分析とコスト帰属

**v1.0 の成功基準:**

- 一貫した管理体験を備えた 7 種類以上のアーティファクトフォーマットのサポート
- リポジトリコレクションベースの構造により、大企業がチーム階層をマッピングできる
- 顧客が自動化ツールを使用して JFrog/Nexus から正常にマイグレーションする
- AI を活用したレコメンデーションが構成時間を測定可能な割合で削減する

v1.0（フェーズ 2）および将来（フェーズ 3 以降）の機能を含む包括的なケイパビリティの優先順位付けについては、拡張 blueprint（内部）の [Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix) を参照してください。

### マイグレーション戦略 {#migration-strategy}

マイグレーションは、マイグレーションツールを導入する前にサービスの安定性を優先します。

#### MVP のアプローチ: オーガニックなマイグレーション {#mvp-approach-organic-migration}

MVP は **マイグレーションツールを除外します**。レジストリはまず安定化し、新しいワークフローに対するオーガニックな採用を促進します。

- サービスが成熟し、信頼性を確立する
- アーリーアダプターが新しいプロジェクトでプラットフォームを検証する
- 早すぎるマイグレーションツールの複雑さを回避する
- フィードバックを収集し、マイグレーション要件を洗練する時間を確保する

ユーザーはネイティブクライアント（npm、Maven、Docker）を使用して手動でアーティファクトを公開します。仮想リポジトリは、マイグレーション中にアップストリームソースをプロキシすることで段階的な採用を促進します。

#### MVP 後: マイグレーションツール {#post-mvp-migration-tools}

安定化後、マイグレーションケイパビリティが採用を加速します。

**外部プロバイダーから:**

- 特定の競合からの一括インポート
- メタデータの抽出と保持
- 実際のマイグレーション前のドライラン検証
- 進捗トラッキングとエラーレポート
- ロールバック機能
- チェックサム検証とメタデータの完全性検証
- 依存関係の解決検証と事前互換性チェック
- 推移的依存関係のサポート

**GitLab Package および Container Registries から:**

- 既存の GitLab プロジェクトレベルのレジストリから統一レジストリへアーティファクトを移動するマイグレーションツール
- GitLab 顧客向けのシームレスな移行パス

マイグレーションのタイムラインと優先順位付けについては、[Capability Prioritization Matrix](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md#capability-prioritization-matrix)（内部）を参照してください。

## チームの依存関係 {#team-dependencies}

Artifact Registry は、実装を成功させるために GitLab の複数のチームとの協業を必要とします。

TBD

<!--| Team | What's Needed | Output | Criticality |
|------|---------------|--------|-------------|
| **[Database Frameworks](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)** | **Schema design**: Review schema proposed in [ADR-007](decisions/007_database_schema.md)-format-specific tables vs. cross-format operations, deduplication logic, blob reference tracking, access and cleanup patterns. **Sharding**: Validate sharding key. **Performance**: Query patterns for key operations, cleanup tasks, storage attribution. **Scale**: Validate for GitLab.com scale (billions of records, TB-range metadata). **Partitioning/isolation**: Table partitioning strategy and logical database isolation (new database alongside `main` and `ci`). | ADR-007 revised, expanded, and approved. | **Critical** - Large number of new tables with complex deduplication, reference tracking, and cleanup logic. Schema must be correct from the start; large-scale refactoring would be extremely costly. |
| **[Platform Insights](/handbook/engineering/data-engineering/analytics/platform-insights/)** | **ClickHouse/DIP integration**: Event collection patterns for artifact operations, schema design for analytics tables, query optimization for cost tracking and usage reporting. **Event instrumentation**: Patterns for capturing and storing long-term event records for audit and feeding AI/ML features (recommendations, optimization). | New ADR with strategy for event collection and processing. | **High** - Core value proposition includes cost analytics, usage tracking, and AI-powered insights. Getting this right from the start is key. |
| **[Fulfillment:Utilization](/handbook/engineering/development/fulfillment/utilization/)** | **Billing integration**: Billing model, integration with CustomersDot for invoicing and payment processing. **Storage quotas**: Quota enforcement patterns, usage tracking per organization, integration with existing consumables management. **Cost attribution**: Mechanisms for tracking and reporting storage costs. **Usage notifications**: Alert mechanisms when approaching limits. | New ADR with strategy for consumption tracking and usage billing. | **High** - New paid SKU requiring monetization. Without billing integration the product cannot be sold. |
| **[Geo](/handbook/engineering/infrastructure-platforms/tenant-scale/geo/)** | **Replication validation**: Confirm existing Geo Self-Service Framework can replicate all relevant registry data for self-managed and Dedicated installations. **Gap analysis**: Identify any limitations or additional work needed beyond the framework. | Update blueprint to confirm full compatibility. Follow-up issues for any gaps. | **Medium** - Early validation prevents costly rework and ensures feature parity across all installation types. |-->

## 代替ソリューション {#alternative-solutions}

TBD
<!--
It might be a good idea to include a list of alternative solutions or paths considered, although it is not required. Include pros and cons for
each alternative solution/path.

"Do nothing" and its pros and cons could be included in the list too.
-->

## リンク {#links}

- **Direction**: [Package Stage Direction](https://about.gitlab.com/direction/package/)
- **Top-level Epic**: [Artifact Registry](https://gitlab.com/groups/gitlab-org/-/epics/19844)
- **Original Proposal**: [Internal Proposal Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/568349)
- **Extended Blueprint**: [Detailed Specification](https://gitlab.com/gitlab-org/ci-cd/package-stage/unified-artifact-management/-/blob/main/blueprint.md) (internal)
- **AI Vision**: [AI-Enhanced Artifact Management](https://unified-artifact-managment-965acd.gitlab.io)

## 決定 {#decisions}

主要なアーキテクチャ上の決定は Architecture Decision Records（ADR）として文書化されています。

{{< note >}}
一部の ADR には、初期提案の段階でまだ決定されていない詳細をまとめた **Open Questions** セクションが含まれています。これらはレビューをブロックするものではなく、後続のアップデートや新しい ADR で対処されます。
{{< /note >}}

1. [ADR-001: Organizations as Anchor Point](decisions/001_organizations_as_anchor_point.md) - レジストリを Organizations にアンカーする理由
1. [ADR-002: Storage Deduplication Scope](decisions/002_storage_deduplication_scope.md) - インスタンス全体ではなく Organizations にスコープされた重複排除
1. [ADR-003: System Requirements](decisions/003_system_requirements.md) - インフラ要件とパフォーマンス制約
1. [ADR-004: Data and Application Limits](decisions/004_data_and_application_limits.md) - ストレージ、アーティファクトサイズ、レート、並行性、エンティティ数の制限
1. [ADR-005: Artifact Delivery Mode](decisions/005_artifact_delivery_mode.md) - ネームスペースごとに構成可能なリダイレクト、プロキシ、ハイブリッドの配信モード
1. [ADR-006: Technology Stack](decisions/006_technology_stack.md) - 要件とアーキテクチャに基づくテクノロジーの選択
1. [ADR-007: Database Schema](decisions/007_database_schema.md) - レジストリのデータテーブル編成
1. [ADR-008: Content-Addressable Storage](decisions/008_content_addressable_storage.md) - 重複排除と整合性検証のための SHA256 ベースの識別
1. [ADR-009: API Design](decisions/009_api_design.md) - レジストリの API エンドポイント編成
1. [ADR-010: Data Retention](decisions/010_data_retention.md) - アーティファクト、監査ログ、キャッシュされたコンテンツの保持ポリシー
1. [ADR-011: Data Reconciliation Feature Timing](decisions/011_data_reconciliation.md) - データ照合機能のタイミングと要件
1. [ADR-012: Usage Data Collection](decisions/012_usage_data_collection.md) - Artifact Registry の使用データ収集メカニズムとしての Snowplow
1. [ADR-013: Storage Backend Interaction](decisions/013_storage_backend_interaction.md) - ストレージバックエンド + CDN のペアリング、署名付き URL の生成、リダイレクトターゲットのルーティング、ダウンロードメタデータの伝播
1. [ADR-014: Frontend to Artifact Registry Interaction](decisions/014_frontend_to_artifact_registry.md) - Artifact Registry とのブラウザ相互作用のための Rails GraphQL リゾルバーパターン
1. [ADR-020: Authentication Flow](decisions/020_authentication_flow.md) - Artifact Registry の認証設計
1. [ADR-022: Namespace Decoupling](decisions/022_namespace_decoupling.md) - 不変なスラッグを持つ内部ネームスペースエンティティ
1. [ADR-023: Code Structure and Enforcement](decisions/023_code_structure_and_enforcement.md) - 機能ごとのパッケージ編成を備えた Go `cmd/` + `internal/` レイアウト

## インターフェース合意 {#interface-agreements}

Artifact Registry と依存チームの間で、要件、責任、未解決の問題を定義するクロスチームのインターフェース合意です。

1. [Infrastructure](agreements/infrastructure.md) - Infrastructure チームとのインターフェース合意
1. [Auth Platform](agreements/auth.md) - Auth Platform チームとのインターフェース合意
1. [Organizations](agreements/organizations.md) - Organizations（Tenant Scale）チームとのインターフェース合意
