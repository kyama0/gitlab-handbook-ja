---
title: 'Cells: 組織移行'
status: proposed
creation-date: "2024-05-01"
authors: [ "@dbalexandre", "@mkozono" ]
coaches: [ "@ayufan", "@sxuereb" ]
dris: [ "@sranasinghe", "@luciezhao" ]
approvers: [ "@sranasinghe", "@luciezhao" ]
owning-stage: "~devops::tenant scale"
participating-stages: ["~devops::data stores", "~devops::systems"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization-data-migration/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
translated_at: "2026-06-18T21:09:08Z"
translator: claude
stale: false
lastmod: "2026-05-27T17:43:35+12:00"
---

{{< engineering/design-document-header >}}

## サマリー

すべてのユーザーデータは [Organization](../cells/goals.md#organizations) でラップされます。これは隔離を提供し、ある Cell から別の Cell へ、特に [Legacy Cell](../cells/goals.md#legacy-cell) から組織を移動することを可能にします。

[Protocells](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) では、組織に移動した後 Cell に移行できるトップレベルグループから構成されるコホートを定義します。

コホートの [定義](https://gitlab.com/gitlab-com/gl-infra/mstaff/-/issues/474) は作業の最初の部分ですが、組織を Legacy Cell から Cell へ移動するためのツーリングも構築する必要があります。

この設計ドキュメントは、組織をソースから宛先に移動する移行ツーリングに焦点を当てています。コホートとトップレベルグループの移行については言及するのみで、それらの実装の詳細には踏み込みません。

## 動機

Cells は、GitLab.com を水平方向にスケールするという主要な目標を達成した場合にのみ成功します。スケールするためには、データベースのスケーリング限界に達する前に負荷を恒久的に取り除くため、Legacy Cell にある既存のデータを新しい Cell に移動する必要があります。この移行機能は、GitLab の成長に伴って GitLab.com サービスを将来にわたって安定させるために不可欠です。

### 目標

1. _中断可能性_: 計算リソースの障害やオペレーターによる停止などで移行が中断された場合、中断した箇所から再開できるべきです。
1. _ハンズオフ_: 移行はバックグラウンドで実行されるべきで、チームメンバーのラップトップ上で移行を実行する必要はありません。
1. _コードの再利用_: Geo はデータを 1 つの GitLab インスタンスから別のインスタンスに複製するために構築されました。私たちは同じことを組織レベルで行っています。
1. _データ損失なし_: ソース Cell にあるすべてのデータが宛先 Cell でも利用可能であるべきです。これは、Object Storage、Postgres、Advanced Search、Exact Code Search、Git、Container Registry など、すべてのデータタイプを考慮する必要があることを意味します。
1. _Cell のダウンタイムなし_: 組織を移行する際、ソース Cell および宛先 Cell は、転送されている組織以外についてはダウンタイムが発生してはなりません。
1. _可視のダウンタイムなし_: 組織は、私たちが彼らのデータを移行していることに気づくべきではありません。ゼロダウンタイムを達成することは決してできず、ある程度のダウンタイムや読み取り専用の状態から始めますが、より顕著な顧客を移行するにつれてこれを継続的に改善していきます。
1. _大規模組織のサポート_: テラバイト規模のデータを適切な期間内に移行できるようにします。これは、ツーリングをデータに対してスケーラブルにする必要があることを意味します。
1. _並行性_: 複数の組織を、互いに影響を与えずに同時に移行できるようにします。
1. _Cell ローカル_: 移行は、すべての移行に対する単一障害点を防ぐため、宛先 Cell 上で行われるべきです。
1. _最小限の使い捨て作業_: 移行ツーリングを何度も書き直すのではなく、反復するべきです。
1. _可観測性_: 任意の時点で、移行がどこにあるか、そして問題があるかどうかを知る必要があります。
1. _Cell 認識_: 移行ツーリングは、リクエストを正しい Cell にルーティングし始めるため、Topology Service の情報も更新する必要があります。
1. _ユーザー可視のパフォーマンス影響なし_: 移行は、ソースまたは宛先 Cell どちらのパフォーマンスも低下させてはなりません。
1. _ロールバック機能_: 組織をソースに戻して移行することは **できません**。ロールバックがどのように処理されるかについての決定は、[Protocells への組織データ移行のロールバック戦略](decisions/002_rollback_strategy.md) を参照してください。
1. _ドライランサポート_: オペレーターは、実際にデータを移動することなく、検証と時間見積もりで移行をテストできるべきです。
1. _セキュリティ_: 転送中のすべてのデータは暗号化されるべきであり、Cell 間通信は適切な認証と認可を使用する必要があります。

### 非目標

- どの組織がどのセルに存在するかの決定。
- セルフホストインストールのサポート。
- 災害復旧ツーリングの代替となること。

## コホート定義

[Protocells の終了条件](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) を満たすためには、上位 1,000 のアクティブな名前空間 (これは [データベース時間の約 67%](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245) を消費する) のかなりの部分を移行する必要があると予想されます。

コホートは、GitLab のルート名前空間とそのデータのセットで、他のセルに段階的に転送/移行するための単一のコレクションとして選択されます。

コホートの命名規約: 本番コホートに進む前に正常に完了する必要があるため、テストコホートに対しては 0 を使用します。後続のコホート (A、B、C など) は、順次的な依存関係なく並列に実行できることを示すために文字を使用します。

| コホート ID | コホート名 | コホートサイズの目安 | 目的 | 終了条件への影響 | 詳細 |
|-----------|-------------|------------------------|---------|------------------------|----|
| Cohort 0 | テストコホート | 最大 100 組織 | テスト名前空間を使用して、転送および移行プロセスをエンドツーエンドでテスト | なし | [Migration Plan](cohort0.md) |
| Cohort A | 非アクティブな Free ユーザーのサブセット | 最大 5,000 組織 | Protocells を実際の本番利用の一部として確立し、移行プロセスを洗練させる。 | データベースサイズへのわずかな影響 | [Criteria](cohorts/criteria_cohort_a.md) |
| Cohort B | アクティブなオプトイン Beta | 最大 1000 組織 | 実際の日次アクティブユーザーで経験を積む。 | WAL、LWLock、データベースサイズへのわずかな影響 | [Criteria](cohorts/criteria_cohort_b.md) |
| Cohort C | 上位 1000 のオプトイン | 最大 300 組織 | レガシーセルを軽減する | WAL 飽和度およびデータベースサイズの少なくとも 20% `[1]` の減少 | [Criteria](cohorts/criteria_cohort_c.md) |
| Cohort D | アクティブなロングテールのオプトイン | 約 10,000 組織 | レガシーセルを軽減する | WAL 飽和度およびデータベースサイズの少なくとも 10% `[2]` の減少 | [Criteria](cohorts/criteria_cohort_d.md) |

- `[1]`: 20% という目標は、上位 1000 の名前空間が消費する [データベース時間](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245) 67% の 1/3 から導かれています。
- `[2]`: 10% という目標は、ロングテールのデータベース時間 33% の 1/3 を移動する可能性から来ています。

## 移行設計ドキュメント

### Database Migration Service (DMS)

1. [DMS Blueprint](dms-blueprint.md) - AWS DMS を使用して PostgreSQL データを GCP から AWS に移行する戦略
1. [DMS Integration with Dedicated Tooling](dms-instrumentor-integration.md) - DMS を Instrumentor、AMP、および Tenant Model Schema に統合する

### コホート移行計画

1. [Cohort 0: Test Migration](cohort0.md) - 100 のテスト TLG の初期移行で、エンドツーエンドのプロセスを検証

## 意思決定

1. [ADR-002 Protocells への組織データ移行のロールバック戦略](decisions/002_rollback_strategy.md) - 組織データ移行のためのスイッチバックおよび fix-forward アプローチ
2. [ADR-003 Org Mover コントロールプレーン](decisions/003_org_mover_architecture.md) - Org Mover に関するハイレベルなコントロールプレーンの決定
