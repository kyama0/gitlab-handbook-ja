---
title: "Topology Service 向け Cloud Spanner バックアップ戦略の選定"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-05-09"
authors: ["@daveyleach"]
coach: "@sxuereb"
approvers: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/020_spanner_backup_strategy/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/daveyleach" class="text-blue-600 hover:underline">@daveyleach</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant-scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-05-09</td>
</tr>
</tbody>
</table>
</div>


## 概要

この ADR は、Topology Service をサポートする Cloud Spanner インスタンスに対して、**マルチリージョン設定**、**36 時間のポイントインタイムリカバリ（PITR）**、および**90 日保持の日次増分バックアップ**を使用する包括的なバックアップ戦略の実装を文書化します。この戦略により、許容可能なパフォーマンスを維持しながら堅牢なディザスタリカバリ能力を実現します。

## コンテキスト

Topology Service は以下を含む重要なインフラストラクチャメタデータを保存するプライマリデータベースとして Cloud Spanner を使用しています：

- Cell の設定とメタデータ
- ID 割り当て用のシーケンス範囲
- 一意性の強制のためのクレームレコード（ユーザー名、メールアドレス、ルート）
- ルーティングリクエストの分類データ

[Topology Service の設計](../topology_service.md)で文書化されているように、このサービスは Cells インフラストラクチャの運用に不可欠であり、堅牢なバックアップとディザスタリカバリ能力が必要です。

### 技術的な制約

- [ポイントインタイムリカバリの拡張にはパフォーマンスへの影響がある](https://cloud.google.com/spanner/docs/pitr#performance)
- [ポイントインタイムリカバリの最大ウィンドウは 7 日間](https://cloud.google.com/spanner/docs/pitr)
- [フルバックアップの最小間隔は 12 時間、増分バックアップは 4 時間](https://cloud.google.com/spanner/docs/backup#backup-schedules)
- [Spanner ではバックアップチェーンごとに最大 13 回の増分バックアップが可能](https://cloud.google.com/spanner/docs/backup#incremental-backups)
- [フルバックアップおよび増分バックアップにはポイントインタイムリカバリ機能が含まれない](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/301#note_2679808248)

## 問題の概要

以下を実現する Topology Service Spanner インスタンスの最適なバックアップ戦略を決定する必要があります：

- さまざまな障害シナリオに対する包括的な保護
- GitLab のディザスタリカバリ要件への準拠。[GitLab.com 現状](../../../../gitlab-com/policies/backup/)、[GitLab.com 目標](../../disaster_recovery/)、[Cells 目標](../infrastructure/disaster_recovery.md)
- 本番ワークロードへのパフォーマンス影響の最小化
- バックアップの持続性と運用の柔軟性のバランス
- 定期的なリストアバリデーションの実施

## テスト手法

### パフォーマンス影響テスト

Google Cloud の公式ドキュメントは、Spanner のポイントインタイムリカバリ保持期間をデフォルトの 1 時間を超えて延長するとパフォーマンスに影響する可能性があると警告しています。しかし、私たちの内部負荷テストは、特定のユースケースにおいてこの懸念を否定しました。本番相当の規模で実際のデータベース設定をテストしたところ、保持期間を 1 時間から 36 時間に延長してもパフォーマンスメトリクスや CPU 使用率に検出可能な影響はありませんでした。

負荷テストは [Issue #474](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/474) で実施し、PITR の影響を評価しました。

### バックアップリカバリテスト

[プロジェクト spanner_backups](https://gitlab.com/daveyleach/spanner_backups) で実施されたテストにより以下が検証されました：

- バックアップの作成と復元手順
- PITR の能力と制限
- 目標復旧時間
- リカバリ後のデータ整合性

## 結果

### パフォーマンス影響分析

テストの詳細は [Issue](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/474) を参照

### 障害シナリオカバレッジ分析

[Spanner 障害シナリオとバックアップ保護](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/301#note_2691882252)で文書化されたテストと分析に基づく

| 障害シナリオ | 説明 | マルチリージョン設定 | フル/増分バックアップ | ポイントインタイムリカバリ（PITR）| 最適解 | RPO | RTO |
|-----------------|-------------|-------------------|-------------|------|---------------|-----|-----|
| **論理破損（1.5日未満）** | PITR ウィンドウ内でアプリバグがデータ破損 | ❌ 未保護 | ✅ 保護済 | ✅ **保護済** | **PITR** - 破損直前の正確な時点に復元 | 1 分未満 | 約数時間 |
| **移行の失敗** | スキーマ移行に失敗しデータが破損 | ❌ 未保護 | ✅ **保護済** | ✅ **保護済** | **PITR** - 即時ロールバック機能 | 1 分未満 | 約数時間 |
| **テーブルの誤削除** | 本番テーブルを誤って削除 | ❌ 未保護 | ✅ 保護済 | ⚠️ 一部保護（PITR ウィンドウ内）| **フルバックアップ** - 元のデータでテーブルを再作成 | 24 時間 | 約数時間 |
| **論理破損（1.5日超）** | PITR 期限切れ後にデータ破損を発見 | ❌ 未保護 | ✅ **保護済** | ❌ 未保護 | **フルバックアップ** - より長い保持期間 | 24 時間 | 約数時間 |
| **データベースの誤削除** | 管理者がデータベース全体を誤って削除 | ❌ 未保護 | ✅ **保護済** | ❌ 未保護 | **フルバックアップ** - 削除保護が設定済 | 24 時間 | 約数時間 |
| **リージョン障害** | リージョン全体が利用不可 | ✅ **保護済** | ❌ 未保護 | ❌ 未保護 | **マルチリージョン設定** - 自動フェイルオーバー | 1 分未満 | 1 分未満 |
| **マルチリージョン災害** | 自然災害が複数リージョンに影響 | ✅ **保護済** | ❌ 未保護 | ❌ 未保護 | **マルチリージョン設定** - 地理的冗長性 | 1 分未満 | 両ライターリージョンが失敗した場合は約数時間、それ以外は 1 分未満 |

## ストレージコスト分析

### Cloud Spanner 価格の参考情報

出典：https://cloud.google.com/spanner/pricing

| リージョン | タイプ | 数量 | 100GB/時あたりの料金 |
|--------|------|-------|---------------------|
| us-east4 | 読み取り/書き込み | 2x | $0.03014 |
| us-east1 | 読み取り/書き込み | 2x | $0.02740 |
| us-west2 | 読み取り専用 | 1x | $0.01644 |
| europe-west1 | 読み取り専用 | 1x | $0.01370 |
| asia-southeast1 | 読み取り専用 | 1x | $0.01567 |

バックアップストレージ：$0.30/GB/月（マルチリージョンバックアップの均一料金）

### 使用コスト計算

保守的な見積もりでは、テーブルとインデックス設計が未完成であることを考慮して、データベースサイズとして **75.96 GB**（現在の予測の 2 倍）を想定しています。

| コンポーネント | ストレージサイズ | 月間コスト | 年間コスト | 備考 |
|-----------|-------------|--------------|-------------|--------|
| **マルチリージョン基本ストレージ** | 75.96 GB | $89.20 | $1,070.40 | 4 読み取り/書き込み + 3 読み取り専用レプリカ |
| **36 時間 PITR オーバーヘッド** | 約 7.6 GB（+10%）| $8.92 | $107.04 | 648 万件の変更に対する MVCC バージョン |
| **バックアップ戦略オプション：** | | | | |
| オプション A：日次フルスケジュール（90 日）| 6,836.4 GB | $2,050.92 | $24,611.04 | 基本ストレージの 90 倍 |
| オプション B：増分スケジュール（90 日）| 1,230.6 GB | $369.18 | $4,430.16 | フル 8 回 + 増分 82 回（10%）|
| **オプション A 合計** | - | **$2,149.04** | **$25,788.48** | フルバックアップ戦略 |
| **オプション B 合計** | - | **$467.30** | **$5,607.60** | **増分戦略（78% 節約）** |

**主な前提条件：**

- 設計の不確実性を考慮して、37.98 GB の予測からデータベースを 2 倍に想定
- PostgreSQL の成長の歴史的傾向に基づく年間 10% の成長率
- 増分サイズ：14 日ごとにフルバックアップ 1 回（計 8 回）+ フルサイズの 10% の日次増分
- すべてのコストは 7 つのレプリカ全体でのマルチリージョンレプリケーションを含む
- バックアップストレージは $0.30/GB/月で請求

### 主な所見

1. **PITR パフォーマンス影響**: テストにより、データベースサイズの近似値に基づいて、1 時間のベースラインと比較して 36 時間 PITR での有意なパフォーマンス低下は見られませんでした
2. **バックアップストレージ**: [Cloud Spanner ドキュメント](https://cloud.google.com/spanner/docs/backup#key-features)によると、バックアップはすべての設定済みリージョンに自動的にレプリケートされます
3. **回復時間**: データベースの復元には約 20〜30 分かかり、再デプロイに約 1 時間かかるため、合計約 2 時間の RTO（保守的な見積もり）。より徹底的なテストは [issue #483](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/483) で計画中
4. **バージョン保持**: PITR は、私たちのスケールではわずかなオーバーヘッドで Multi-Version Concurrency Control（MVCC）を使用して複数のバージョンを維持します

## 決定事項

Cloud Spanner Topology Service に以下のバックアップ戦略を実装します：

1. **[既存の ADR](015_spanner_multiregional.md) に従って本番環境をマルチリージョンとして設定**し、リージョン障害を自動的に処理し、マルチリージョン障害をバックアップと組み合わせて対処します
2. **36 時間のポイントインタイムリカバリを有効化**し、最近の問題に対する即時リカバリ能力と、マルチリージョンでカバーされない識別されたほとんどの障害シナリオからの保護を提供します。データ破損は即座に問題を引き起こす可能性が高く、36 時間のウィンドウは発見と対応のためのバッファを提供します
3. **90 日保持の日次増分バックアップスケジュールを実装**し、Spanner の自動フルバックアップ管理（必要に応じてフルバックアップを作成し、その後チェーンごとに最大 13 回の増分）を活用しながら、現在のバックアップポリシーに合わせて長期間気づかれなかったデータ破損を保護します

### 根拠

1. **包括的なカバレッジ**: この戦略は識別されたすべての障害シナリオに対して保護を提供します
2. **パフォーマンス検証済み**: 負荷テストにより、私たちのスケールでは 36 時間 PITR に有意なパフォーマンス影響がないことが確認されています。より長い PITR 保持期間はパフォーマンスリスクが増加するのに対してほとんど恩恵がありません
3. **標準への準拠**: GitLab の既存の [PostgreSQL バックアップポリシー](../../../../gitlab-com/policies/backup/)を満たすか超えます
4. **コスト効率**: ストレージコストとリカバリ能力のバランスを取ります。より長い PITR 保持期間はストレージコストが増加するのに対してほとんど恩恵がありません
5. **運用の柔軟性**: 日次バックアップにより PITR ウィンドウを超えたリカバリオプションが提供されます

### 実装の詳細

**PITR 設定：**

- 保持期間：36 時間
- 24 時間の増分バックアップウィンドウとのオーバーラップを提供
- ウィンドウ内の任意の時点への正確なリカバリが可能

**バックアップスケジュール：**

- 増分バックアップ：毎日 02:00 UTC（フルバックアップは Spanner が必要に応じて自動作成）
- 保持：90 日間
- 場所：マルチリージョンレプリケーション（自動）

**アクセス制御：**

- ブロークングラスエスカレーション手順に制限
- IAM ベースの認証（ユーザー名/パスワードなし）
- すべてのバックアップ操作の監査ログ

## 結果と影響

### ポジティブな影響

1. **堅牢なディザスタリカバリ**: ハードウェア障害、データ破損、ヒューマンエラーに対する包括的な保護
2. **検証済みパフォーマンス**: 負荷テストにより、私たちのスケールでは 36 時間 PITR がわずかなレイテンシ（0.25ms 未満）しか追加しないことが証明されました
3. **地理的冗長性**: マルチリージョン設定が自動フェイルオーバーによる大陸レベルの災害保護を提供
4. **柔軟なリカバリオプション**: 最近の問題には 36 時間 PITR で正確なリカバリ、古いインシデントには 90 日間バックアップ
5. **コンプライアンス対応**: リージョン障害に対する 1 分未満の RTO/RPO、バックアップ復元シナリオに対する約 2 時間の RTO（再デプロイ時間を含む）というエンタープライズ DR 要件を満たします
6. **運用効率**: フルマネージドサービスによりバックアップメンテナンスのオーバーヘッドを排除（約 0.5 FTE を節約）

### ネガティブな影響

1. **リージョン変更の制限**: バックアップが存在する間はインスタンスのリージョン設定を変更できない
2. **パフォーマンスへの影響**: デフォルトより長い PITR による長期的なパフォーマンスへの影響の可能性
3. **目標復旧時点**: 36 時間後に発見されたデータ破損の場合、復旧時点はバックアップ間隔に制限される（最大 24 時間のデータ損失）
4. **ストレージコスト**: 90 日間の日次バックアップの維持に追加のストレージ費用が発生
5. **バックアップ復元の回復時間**: バックアップからのデータベース復元に 20〜30 分かかり、再デプロイに約 1 時間かかる（合計約 2 時間の保守的な見積もり）。復元されたバックアップにはポイントインタイムリカバリ機能がない

### 緩和策

1. **リージョン変更**: 変更管理プロセスを使用したリージョン移行のための制御されたプロセスの実装
2. **リカバリテスト**: [手順を最適化し回復時間を短縮するための定期的なリストアドリル](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/483)
3. **監視とアラート**: [バックアップの変更や削除保護の解除が検出されないまま進まないよう監視を実装](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/471)

## 参考資料

- [Cloud Spanner バックアップ戦略の検討](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/301)
- [Spanner 負荷テスト結果](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/474)
- [Cloud Spanner ディザスタリカバリの概要](https://cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
