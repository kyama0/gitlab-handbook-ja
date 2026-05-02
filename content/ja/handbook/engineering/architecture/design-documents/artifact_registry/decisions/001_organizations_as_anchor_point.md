---
title: "Artifact Registry ADR 001: Organizations をアンカーポイントとする"
owning-stage: "~devops::package"
description: "Artifact Registry を Organizations にアンカーする決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/001_organizations_as_anchor_point/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 背景

Artifact Registry は、レジストリインスタンス、ストレージ、コスト按分、アクセス制御の主要境界として機能するアンカーポイントを GitLab のエンティティから必要とします。この基礎的な決定は、システム内の他のすべてのアーキテクチャ選択に影響します。

候補は 2 つあります。

1. **[Organizations](https://docs.gitlab.com/user/organization/)**: グループとプロジェクトのトップレベルコンテナとして設計され、トップレベルグループに代わる主要組織境界として意図された新しい GitLab エンティティ
2. **トップレベルグループ**: 現在 GitLab で利用可能な最上位のグループエンティティで、グループ階層のルートとして機能するもの

Organizations はエンタープライズユースケースに完全に整合します。会社全体またはビジネスユニットを表す単一エンティティが、そのすべてのグループ、プロジェクト、そしてアーティファクトを含む形になります。

### Organizations の可用性

Organizations は技術的には利用可能ですが、まだ GA ではありません。[Organizations チーム](/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/)との協議の後、タイムライン情報を更新しました。

1. **可用性**: Organizations は GitLab のすべてのインストールタイプにわたって技術的に利用可能です
2. **GA タイムライン**: Organizations は顧客のオプトインアプローチで 1 年以内にローンチされる予定です
3. **戦略的方向性**: Organizations は、エンタープライズの組織境界に対する GitLab の長期的な方向性を表します

最初から Organizations 向けに構築することには、大きな利点があります。

1. **将来のマイグレーション負荷なし**: 顧客は後でトップレベルグループから Organizations へ再構成する必要がありません
2. **GitLab の方向性との整合**: Artifact Registry は Organizations の採用が拡大するにつれて準備が整います
3. **概念的な正しさ**: Organizations はエンタープライズアーティファクト管理の自然な境界を表します

## 決定

**Artifact Registry は Organizations のみにアンカーします。**

この機能は Organizations レベルでのみ利用可能になります。Organizations とトップレベルグループの両方のレベルでは提供しません。これにより、二重実装の維持の複雑さを回避し、明確な単一のアーキテクチャパスを確保します。

これは次のことを意味します。

- すべてのリポジトリ、アーティファクト、ライフサイクルポリシー、アクセス制御は Organization に属します
- ストレージとコスト按分は Organization 境界で計算されます
- 重複排除は Organization にスコープされます（[ADR-002](002_storage_deduplication_scope.md) を参照）
- Organizations は分離およびシャーディング境界として機能します

## 結果

### ポジティブ

1. **GitLab のターゲット組織モデルとの整合**: 初日から Organizations 向けに構築することで、後でアーキテクチャの方向転換が不要になります
2. **将来のマイグレーション負荷なし**: 顧客は最初からターゲットアーキテクチャを採用し、破壊的なマイグレーションを回避できます
3. **概念的に正しいアンカーポイント**: Organizations は会社全体またはビジネスユニットを表します - エンタープライズアーティファクト管理の自然な境界
4. **クリーンなエンタープライズマッピング**: 1 つの Organization が 1 つのアーティファクトレジストリインスタンスに等しく、顧客のメンタルモデルを単純化します
5. **Cells アーキテクチャと前方互換**: Organizations は Cells の意図されたシャーディング境界であり、整合性を保証します
6. **改善されたストレージ重複排除**: Organizations は階層内でトップレベルグループの上に位置します。同じ Organization 内の複数のトップレベルグループにまたがる同一の Blob は重複排除され、トップレベルグループスコープの重複排除に比べてより大きなストレージ効率を提供します

### ネガティブ

1. **顧客のオプトインが必要**: Organizations のロールアウト期間中、顧客は明示的に Organizations を有効化する必要があります
2. **Organizations タイムラインへの依存**: レジストリの可用性は、すべてのインストールタイプにわたって Organizations の準備状況と調整します

## インストールタイプごとの影響

### GitLab.com (SaaS)

顧客はアーティファクト管理のために Organization を作成または使用します。これは、主要組織境界としての Organizations への GitLab.com の方向性と整合します。

### Self-Managed と Dedicated

Organizations はすべてのインストールタイプにわたって利用可能になります。顧客は Artifact Registry を使用するために Organizations を有効化します。これにより、すべての GitLab デプロイメントモデルにわたって一貫した体験が提供されます。

## Blob ストレージの重複排除

Organizations へのアンカーは、ストレージ重複排除に直接的な影響があります（詳細な重複排除設計は [ADR-002](002_storage_deduplication_scope.md) を参照）。

Organizations は GitLab 階層内でトップレベルグループの上に位置します。重複排除をトップレベルグループではなく Organizations にスコープすることで、次のような効果があります。

- **より広い重複排除スコープ**: 同じ Organization 内の複数のトップレベルグループにまたがる同一の Blob が 1 度だけ保存されます
- **より大きなストレージ効率**: 異なるトップレベルグループにまたがって使用される共通のアーティファクト（ベースイメージ、共有ライブラリ、パブリックパッケージ）が重複排除の恩恵を受けます
- **改善されたコスト按分**: ストレージコストが Organization レベルで計算され、より明確な請求境界を提供します

## 検討した代替案

### 代替案: トップレベルグループ

#### アプローチ

レジストリを現在利用可能な最上位グループエンティティであるトップレベルグループにアンカーし、Organizations が安定して広く採用されたら Organizations へマイグレーションする計画。

**注**: トップレベルグループは、Organizations のタイムラインに不確実性が高かった初期計画段階で検討されました。Organizations のタイムラインの更新と顧客のオプトインアプローチにより、ターゲットアーキテクチャ向けの構築が現実的になりました。

#### 採用されなかった理由

1. **将来のマイグレーション負荷**: 顧客は後でトップレベルグループから Organizations へマイグレーションする必要があり、慎重な計画と実行が必要です
2. **概念的な不一致**: トップレベルグループは階層的なコンテナですが、アーティファクトレジストリは概念的には組織全体（複数のトップレベルグループにまたがる可能性あり）にサービスを提供します
3. **Organizations タイムラインの整合**: Organizations は Artifact Registry プロジェクトのタイムライン内にローンチされる見込みであり、暫定的なアプローチを不要にしています
4. **前例の落とし穴の回避**: トップレベルグループを選択した他の機能（セキュリティダッシュボード、コンプライアンスセンター、バリューストリームアナリティクス）は現在マイグレーションの考慮に直面しています。最初から Organizations 向けに構築することで、このパターンを回避します
5. **重複排除効率の低下**: トップレベルグループスコープの重複排除では、同じ Organization 内のトップレベルグループにまたがる同一 Blob を重複排除する機会を逃します
6. **複雑な Blob マイグレーション**: トップレベルグループから Organizations へのマイグレーションには、トップレベルグループにまたがる Blob の統合が必要となり、マイグレーションの複雑さが大幅に増加します
7. **統合は実現不可能**: 複数のトップレベルグループを持つすべての顧客（例: GitLab 自体は `gitlab-org`、`gitlab-com` などを使用）が、1 つのグループに統合できるとは限りません。アーティファクト専用に別個のトップレベルグループを作ることも検討しましたが、グループ間で同期した権限を維持する複雑さのために却下されました。

## 参考文献

- [Organizations Development Documentation](https://docs.gitlab.com/ee/development/organization/)
- [Organizations Team Handbook](/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/)
- [Cells Design Document](../../cells/)
- [ADR-002: Storage Deduplication Scope](002_storage_deduplication_scope.md) - 重複排除境界
- [ADR-007: Database Schema](007_database_schema.md)
