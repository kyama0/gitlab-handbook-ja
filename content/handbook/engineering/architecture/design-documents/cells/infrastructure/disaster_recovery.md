---
title: 'Protocells 障害復旧'
stage: core platform
group: Tenant Scale
status: proposed
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/infrastructure/disaster_recovery/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T08:26:37+02:00"
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
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
</tr>
</tbody>
</table>
</div>


## 使用される用語

1. レガシーセル: GitLab.com SaaS（現在の GitLab.com デプロイメント）。それを運用するために異なるツールが使用されているためレガシーと呼ばれます。
1. Cells: 互いに独立して分離されたインフラストラクチャコンポーネントのセット。
1. グローバルサービス: グローバルな一意性を維持し、クラスター全体のデータベースシーケンスを管理し、どのリソースがどの Cell に属するかを分類するのに役立つサービス。
1. ルーティングサービス: グローバルサービスに依存し、異なる Cell へのルーティングルールを管理するためのサービス。
1. RTO: [回復時間目標]
1. RPO: [回復ポイント目標]
1. WAL: [先行書き込みログ]

## ゴール

Protocells は Cell がレガシーセルから独立して運用される Cell の最初のイテレーションです。
ターゲットは GitLab Dedicated の現在の DR 戦略である Geo を障害復旧に使用することです。
Protocells の後、バックアップからデータを復元するために [Next Gen スケーラブルバックアップとリストア] を活用する予定です。

このドキュメントは Cell の回復戦略の定義にのみ焦点を当てています。
グローバルサービス、ルーティングサービス、レガシーセル、またはその他の外部サービスの回復はカバーしていません。

Cell の障害復旧は、Cell が異なるツールでプロビジョニングされるため、GitLab.com SaaS の既存の回復プロセスに分岐を生じさせます。
Cell の RTO/RPO ターゲットがレガシーセルと異なる可能性がありますが、目標は以下に記載されているレガシーセルの RTO/RPO ターゲットを達成または超えることです。

### RTO/RPO ターゲット

NOTE:
FY25 ターゲットはまだレガシーセルで検証されていません。

**ゾーナル障害**:

|                                      | RTO       | RPO |
|--------------------------------------|-----------|-----|
| プライマリセル（現在）               | 2 時間   | 1 時間 |
| プライマリセル（FY25 ターゲット）           | 1 分未満 | 1 分未満 |
| Protocells（プライマリセルなし） | _不明_ | _不明_ |

**リージョナル障害**:

|                                      | RTO       | RPO |
|--------------------------------------|-----------|-----|
| プライマリセル（現在）               | 96 時間  | 2 時間 |
| プライマリセル（FY25 ターゲット）           | 48 時間  | 1 分未満 [^object-storage] |
| Protocells（プライマリセルなし） | _不明_ | _不明_ |

## 障害復旧の概要

NOTE:
以下のサービスは [Cells 1.0 アーキテクチャ概要] から引用しています。

### ゾーナル

ゾーナル回復とは、単一のアベイラビリティゾーンに限定された障害、停止、または削除を指します。
停止はゾーン全体、またはゾーン内のインフラストラクチャのサブセットに影響する場合があります。

| サービス | ゾーナル障害復旧 | 推定 RTO | 推定 RPO |
| --- | --- | --- | --- |
| GitLab Rails            | Cell で実行されているすべてのサービスはゾーン間で冗長です。このサービスにはデータが保存されていません。 | 1 分以下 | 該当なし |
| Gitaly クラスター          | Gitaly クラスターは単一の SPOF（単一障害点）ノードで構成され、Protocells でも同様です。ゾーナル障害の場合、バックアップからの復元が必要です。 | 30 分以下 | WAL が復元可能になるまでのスナップショット復元で 1 時間以下。[^blueprint-dr] |
| Redis クラスター           | Redis は複数のアベイラビリティゾーンにデプロイされ、単一ゾーンのサービス中断から自動的に回復できます。 | 1 分以下 | 1 分以下 |
| PostgreSQL クラスター      | PostgreSQL クラスターは複数のアベイラビリティゾーンにデプロイされ、単一ゾーンのサービス中断から自動的に回復できます。フェイルオーバー時に少量のデータ損失が発生する可能性があります。 | 1 分以下 | 1 分以下 |

### リージョナル

リージョナル回復とは、リージョン全体に限定された障害、停止、または削除を指します。
停止はリージョン全体、または複数のゾーンに影響するインフラストラクチャのサブセットに影響する場合があります。

| サービス | リージョナル障害復旧 | 推定 RTO | 推定 RPO |
| --- | --- | --- | --- |
| GitLab Rails            | Cell で実行されているすべてのサービスはリージョンにローカルであり、リージョナル障害の場合は再構築が必要です。このサービスにはデータが保存されていません。 | 12 時間以下 | 該当なし |
| Gitaly クラスター          | 最初は Gitaly クラスターは単一の SPOF ノードで構成され、Protocells でも同様です。リージョナル障害の場合は再構築が必要です。 | _不明_ | WAL が復元可能になるまでのスナップショット復元で 1 時間以下。[^blueprint-dr] |
| Redis クラスター           | Redis は単一リージョンにデプロイされ、リージョナル障害の場合は再構築が必要です。処理中のジョブ、セッションデータ、キャッシュは回復できません。 | _不明_ | 該当なし |
| PostgreSQL クラスター      | PostgreSQL クラスターは単一リージョンにデプロイされ、リージョナル障害の場合は再構築が必要です。バックアップと WAL ファイルから回復します。フェイルオーバー時に少量のデータ損失が発生する可能性があります。 | _不明_ | 5 分以下 |

NOTE:
Cells のオブジェクトストレージに保存されたデータにはマルチリージョンバケットが使用されます。偶発的な削除によるデータ復元にはオブジェクトバージョニングまたはバックアップに依存します。

## 障害復旧の検証

Cell の障害復旧は定期的なリストアテストによって検証される必要があります。
この回復は本番環境の Cell で行われるべきです。
このテストは四半期に 1 回行われ、障害復旧ランブックを使用してゲームデーを実行することによって完了されます。

## 障害復旧要件

DR に対して以下の要件を満たす予定です。
バックアップ/リストアはすべての要件を満たす必要がありますが、Geo はアプリケーションのバグ、偶発的な削除、またはランサムウェアから保護しません。

| 要件 | Geo | バックアップとリストア |
| --- | --- | --- |
| データは Cell の運用リージョン（`us-east1`、`us-central1`）とは異なるリージョンに保存される必要があります。 | ✅ | ✅ |
| Cell の日常運用をサポートする従業員はバックアップまたはレプリケートされたデータを削除する権限を持てません。 | ⚠️ | ✅ |
| GitLab アプリケーションの実行に使用されるプリンシパルまたは ID はバックアップまたはレプリケートされたデータを削除できません。 | ⚠️ | ✅ |
| 障害復旧をサポートするために使用されるプリンシパルまたは ID はバックアップまたはレプリケートされたデータを削除できません。 | ⚠️ | ✅ |
| バックアップまたはレプリケートされたデータを変更または削除できる場合、そのための権限は、安全に保存された MFA トークンなどのオフライン認証情報を使用してバックアップにアクセスできる限られた数のオペレーターに制限される必要があります。 | ⚠️ | ✅ |
| レプリケーション/バックアップは無人で実行できる必要があります。 | ✅ |  ✅ |
| レプリケーション/バックアップは監視され、特定の SLO に準拠する必要があります。 | ✅ | ✅ |
| 保持ポリシーを設定できる必要があります。 | N/A | ✅ |

### 障害復旧リスク

1. レガシーセルは他の Cell が使用しているのと同じデプロイメントと運用のためのツールを使用していません。これにより、レガシーセルを他の Cell と一緒に復元する必要がある場合に、プロセスとランブックが分かれてしまい、RTO が増加する可能性があります。

## Geo

Geo のサポートインフラストラクチャは [GitLab Environment Toolkit] と [GitLab Dedicated Instrumentor] を使用してプロビジョニングされます。
これにより、オペレーターは GitLab アプリケーションを別のリージョンにフェイルオーバーするように Cell を設定できます。

### Geo リスク

1. GCP での Geo のインフラストラクチャプロビジョニングはまだ利用可能ではなく、開発中です。

## バックアップとリストア

[統合バックアップ] は、サポートされている参照アーキテクチャ全体で GitLab インストールのアプリケーションバックアップと回復のニーズを処理する単一のコマンドラインツールです。
このツールはアプリケーションデータのバックアップとその回復を可能にし、障害復旧要件の全リストを満たすために Cell が使用するものです。

統合バックアップツールは以下のデータのバックアップとリストアを可能にします:

1. Git リポジトリ
1. アプリケーションデータ
1. オブジェクトストレージ

### Git リポジトリ

Git リポジトリは GCP の永続ディスクを使用してディスクに保存されています。
Cell には Praefect のサポートを行う予定はありません。
高可用性を提供する Gitaly RAFT のような機能に加えて、データをバックアップするためのソリューションが必要です。
現時点では、Cell はディスクスナップショットのリソースポリシーの設定をまだサポートしていません。
GitLab 統合バックアップツールは、[ディスクスナップショット統合エピック](https://gitlab.com/groups/gitlab-org/-/epics/14858)で探索中の、すべての Gitaly ボリュームのスナップショットを開始します。

- ✅ リージョン分離: スナップショットはマルチリージョンの GCP オブジェクトストレージに保存されます。
- ⚠️ 削除保護: スナップショットの削除を防ぐための `iam.Deny` ポリシー以外のメカニズムはありません。

### アプリケーションデータ

アプリケーションデータは GCP の CloudSQL を使用して PostgreSQL に保存されています。
Cells は CloudSQL をプロビジョニングする際に設定可能な保持ウィンドウで自動バックアップを有効にします。
GitLab 統合バックアップツールは[オンデマンドバックアップの使用を検討](https://gitlab.com/groups/gitlab-org/-/epics/14856)していますが、これが Cell とどのように統合されるかはまだ明確ではありません。

- ✅ リージョン分離: CloudSQL バックアップはマルチリージョンの GCP オブジェクトストレージに保存されます。
- ⚠️ 削除保護: CloudSQL インスタンスとそのバックアップの削除を防ぐための `iam.Deny` ポリシー以外のメカニズムはありません。

### オブジェクトストレージ

Google Cloud のオブジェクトストレージでは、[ソフトデリート]を有効にして偶発的または意図的な削除からの回復を可能にできます。
さらに、別のバックアップとして[バケットロック]を追加して、保持期間中はオブジェクトが削除されないようにすることができます。
GitLab 統合バックアップツールは、[Google Transfer Service](https://cloud.google.com/storage-transfer-service/) を使用してすべてのオブジェクトストレージを別のバケットにコピーを開始する[オンデマンドオブジェクトストレージバックアップを開発中](https://gitlab.com/groups/gitlab-org/-/epics/14857)です。

- ✅ リージョン分離: スナップショットはマルチリージョンになる GCP オブジェクトストレージに保存されます。
- ✅ 削除保護: 削除を防ぐための複数のメカニズムがあります。1 つはソフトデリートで、もう 1 つはバックアップバケットの保持ロックです。

### メタデータ/シークレット

GitLab 統合バックアップでシークレットをバックアップするための計画は現時点ではありません。

- ✅ リージョン分離: Google シークレットマネージャーは複数のリージョンにシークレットを保存します。
- ✅ 削除保護: Google シークレットマネージャーには、[この Issue で調査中の](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25776)シークレットの version-destroy-ttl オプションがあります。

### バックアップとリストアのリスクと未知の事項

1. 統合バックアップツールは [toolbox pod](https://docs.gitlab.com/charts/charts/gitlab/toolbox/) 内で起動することが意図されています。バックアップを無人で実行する要件を満たすために、CLI を定期的に実行する方法が必要です。自動実行がどのように設定・監視されるかはまだ不明です。
1. 自動テストのために統合バックアップが無人リストアをどのように有効にするかがまだ明確ではありません。
1. バックアップの成功をどのように監視できるかまだわかりません。
1. GitLab 統合バックアップツールはインフラストラクチャをプロビジョニングせず、バックアップのために追加のリソースをプロビジョニングする必要があるかどうかまだ決定していません。
1. 統合バックアップと Cell バックアップ設定の境界がまだ不明です。例えば CloudSQL のバックアップを有効にしたりスケジュールされたスナップショットのリソースポリシーを設定したりすることなどです。
1. Cell のリストアがどのように機能するかについてまだ不明であり、これは [統合バックアップと Cell の統合のための調査] の一部です。

---

  [Cells 1.0 アーキテクチャ概要]: https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/cells/iterations/cells-1.0.md#architecture-overview
  [回復時間目標]: https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Time_Objective
  [回復ポイント目標]: https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Point_Objective
  [先行書き込みログ]: https://en.wikipedia.org/wiki/Write-ahead_logging
  [Next Gen スケーラブルバックアップとリストア]: https://gitlab.com/groups/gitlab-org/-/epics/11577
  [GitLab Environment Toolkit]: https://gitlab.com/gitlab-org/gitlab-environment-toolkit
  [GitLab Dedicated Instrumentor]: https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/architecture/blueprints/dedicated-gcp-introduction.html#instrumentor-the-dedicated-provisioner
  [統合バックアップと Cell の統合のための調査]: https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25736
  [統合バックアップ]: https://gitlab.com/groups/gitlab-org/-/epics/11577

  [^blueprint-dr]: [DR ブループリント](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints/disaster_recovery?ref_type=heads#current-recovery-time-objective-rto-and-recovery-point-objective-rpo-for-zonal-recovery)を参照
  [^object-storage]: Google Object Storage に保存されたデータはリージョナル障害に対する RPO 保証を行いません。現時点では、15 分の RPO 保証を持つデュアルリージョンバケットを使用する計画はありません。
