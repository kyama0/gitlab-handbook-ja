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
upstream_sha: 154fb2bd6436508aa2d90583cc235d5fe28b1705
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-27T17:43:35+12:00"
---

{{< engineering/design-document-header >}}

## サマリー

すべてのユーザーデータは [Organization](../cells/goals.md#organizations) でラップされます。これは隔離を提供し、ある Cell から別の Cell へ、特に [Legacy Cell](../cells/goals.md#legacy-cell) から組織を移動することを可能にします。

[Protocells](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) では、組織へ移動し、その後 Cell へ移行できるトップレベルグループから構成されるコホートを定義します。

コホートの [定義](https://gitlab.com/gitlab-com/gl-infra/mstaff/-/issues/474) は作業の最初の部分ですが、Legacy Cell から Cell へ組織を移動するツールも構築する必要があります。

この設計ドキュメントは、組織を移行元から移行先へ移動する移行ツールに焦点を当てています。コホートとトップレベルグループの移行については言及するだけで、それらの実装の詳細には踏み込みません。

## モチベーション

Cells は、GitLab.com を水平方向にスケールするという主要なゴールを達成できて初めて成功と言えます。スケールするためには、データベースのスケーリング限界に達する前に、Legacy Cell 上にある既存のデータを新しい Cell へ移動して負荷を恒久的に取り除く必要があります。この移行機能は、GitLab の成長に伴って GitLab.com のサービスを将来にわたって持続可能なものにするうえで不可欠です。

### ゴール

1. _中断可能 (Interruptible)_: コンピュートの障害やオペレーターによる停止などで移行が中断された場合、中断したところから再開できること。
1. _ハンズオフ (Hands Off)_: 移行はバックグラウンドで実行されるべきで、チームメンバーのノート PC で移行を実行する必要がないこと。
1. _コードの再利用 (Code Reuse)_: Geo はある GitLab インスタンスから別のインスタンスへデータをレプリケートするために構築されました。私たちは同じことを、組織レベルで行います。
1. _データ損失なし (No Data Loss)_: 移行元 Cell に存在するすべてのデータが移行先 Cell でも利用可能であること。これは、Object Storage、Postgres、Advanced Search、Exact Code Search、Git、Container Registry など、すべてのデータタイプを考慮する必要があることを意味します。
1. _Cell のダウンタイムなし (No Cell Downtime)_: 組織を移行する際、移行される組織を除いて、移行元 Cell と移行先 Cell はいかなるダウンタイムも被らないこと。
1. _可視ダウンタイムなし (No Visible Downtime)_: 組織が自分たちのデータを移行していることに気づかないこと。ゼロダウンタイムを実現することは決してできず、最初はある程度のダウンタイム／読み取り専用状態から始めますが、よりプロファイルの高い顧客を移行するにつれて、これを継続的に改善していきます。
1. _大規模組織のサポート (Large Organizations Support)_: テラバイト級のデータをタイムリーに移行できること。これは、私たちのツールをデータに合わせてスケーラブルにする必要があることを意味します。
1. _並行処理 (Concurrency)_: 複数の組織を、互いに影響を与えることなく同時に移行できること。
1. _Cell ローカル (Cell Local)_: すべての移行に対する単一障害点を防ぐため、移行は移行先 Cell 上で行われるべきこと。
1. _捨て作業の最小化 (Minimal Throwaway Work)_: 移行ツールを何度も書き直すのではなく、イテレーションを重ねるべきこと。
1. _可観測性 (Observability)_: いかなる時点でも、移行がどこまで進んでいるか、また何か問題があるかを把握できる必要があること。
1. _Cell を意識する (Cell Aware)_: 移行ツールは、正しい Cell へリクエストをルーティングし始めるために、Topology Service 内の情報も更新する必要があること。
1. _ユーザーに見えるパフォーマンスへの影響なし (No User Visible Performance Impact)_: 移行は、移行元 Cell・移行先 Cell のいずれのパフォーマンスも低下させないこと。
1. _ロールバック機能 (Rollback Capability)_: 組織を移行元へ戻すことは **できません**。ロールバックの取り扱いに関する決定については、[Protocells への組織データ移行のロールバック戦略](decisions/002_rollback_strategy.md) を参照してください。
1. _ドライラン (試走) のサポート (Dry Run Support)_: オペレーターは、実際にデータを移動することなく、検証と所要時間の見積もりとともに移行をテストできること。
1. _セキュリティ (Security)_: 転送中のすべてのデータは暗号化されるべきであり、Cell 間の通信は適切な認証と認可を使用しなければならないこと。

### 非ゴール

- どの組織がどの Cell に存在するかという決定。
- セルフホスト型インストールのサポート。
- 何らかのディザスタリカバリツールの代替となること。

## コホートの定義

[Protocells のエグジット基準](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1616) を満たすには、アクティブな上位 1,000 の namespace のかなりの部分を移行する必要があると見込まれます。これらは [データベース時間の約 67%](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245) を消費しています。

コホートとは、他の Cell へ段階的に転送／移行するための単一のまとまりとして選択された、GitLab のルート namespace とそのデータの集合です。

コホートの命名規則: テストコホートには 0 を使用します。これは、production のコホートへ進む前に正常に完了している必要があるためです。後続のコホート（A、B、C など）には文字を使用し、順序的な依存関係なしに並行して実行できることを示します。

| コホート ID | コホート名 | コホートサイズの目安 | 目的 | エグジット基準への影響 | 詳細 |
|-----------|-------------|------------------------|---------|------------------------|----|
| Cohort 0 | テストコホート | 最大 100 組織 | テスト用 namespace を使って、転送＆移行プロセスをエンドツーエンドでテストする | なし | [移行計画](cohort0.md) |
| Cohort A | 非アクティブな Free ユーザーのサブセット | 最大 5,000 組織 | Protocells を実際の production 利用の一部として確立し、移行プロセスを洗練させる。 | データベースサイズへのわずかな影響 | [基準](cohorts/criteria_cohort_a.md) |
| Cohort B | アクティブなオプトイン Beta | 最大 1000 組織 | 実際の日次アクティブユーザーの経験を得る。 | WAL、LWLocks、データベースサイズへのわずかな影響 | [基準](cohorts/criteria_cohort_b.md) |
| Cohort C | 上位 1000 のオプトイン | 最大 300 組織 | Legacy Cell の負荷を軽減する | WAL 飽和度およびデータベースサイズが少なくとも 20% `[1]` 減少 | [基準](cohorts/criteria_cohort_c.md) |
| Cohort D | アクティブなロングテールのオプトイン | 約 10,000 組織 | Legacy Cell の負荷を軽減する | WAL 飽和度およびデータベースサイズが少なくとも 10% `[2]` 減少 | [基準](cohorts/criteria_cohort_d.md) |

- `[1]`: 20% という目標は、上位 1000 の namespace が消費する [データベース時間](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1616#note_2990334245) の 67% の 1/3 × 67% から導出されています。
- `[2]`: 10% という目標は、ロングテールのデータベース時間の 33% の 1/3 を移動する可能性に由来します。

## 移行設計ドキュメント

### Database Migration Service (DMS)

1. [DMS Blueprint](dms-blueprint.md) - AWS DMS を使用して PostgreSQL データを GCP から AWS へ移行する戦略
1. [Dedicated ツールとの DMS 統合](dms-instrumentor-integration.md) - DMS を Instrumentor、AMP、Tenant Model Schema へ統合する

### コホート移行計画

1. [Cohort 0: テスト移行](cohort0.md) - エンドツーエンドのプロセスを検証するための、100 のテスト TLG の初期移行

## 決定事項

1. [ADR-002 Protocells への組織データ移行のロールバック戦略](decisions/002_rollback_strategy.md) - 組織データ移行のためのスイッチバックおよびフィックスフォワードのアプローチ
