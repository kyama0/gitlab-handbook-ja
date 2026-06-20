---
title: 'Organization データ移行 ADR 003: Org Mover コントロールプレーン'
description: 'Org Mover は、GitLab.com の Organization を Cells 間で移動する処理をオーケストレーションする、Runway でデプロイされるコントロールプレーンです。'
status: proposed
creation-date: "2026-06-09"
authors: [ "@mkozono" ]
coaches: [ "@ayufan" ]
dris: [ "@mkozono" ]
owning-stage: "~devops::tenant scale"
participating-stages: ["~devops::tenant scale", "~devops::data stores", "~devops::systems"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization-data-migration/decisions/003_org_mover_architecture/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-17T14:07:31+12:00"
translated_at: "2026-06-20T14:41:51Z"
translator: codex
stale: false
---

## 概要

**Org Mover** は、GitLab.com の Organization を Cells 間で移動する処理をオーケストレーションする、[Runway](https://docs.runway.gitlab.com/)でデプロイされるコントロールプレーンサービスです。

| | |
|---|---|
| **問題** | Organization を legacy cell から target cell へ移行する自動化が存在しない。 |
| **アプローチ** | 任意のエンジニアが各移動を順序付けられたステップのシーケンスとして実行できる、Runway でデプロイされるコントロールプレーンとして Org Mover を構築する。Org Mover はデータを移動するシステムを調整するが、データ自体は移動しない。Org Mover は REST API を公開する。 |
| **ステータス** | Proposed |
| **スコープ** | GitLab.com SaaS のみ: legacy cell から target cell。詳しくは [スコープ](#scope) と [非目標](#non-goals) を参照。 |
| **必要な決定** | Tenant Scale、Geo、Siphon、Infrastructure stakeholders によるコントロールプレーンの形、スコープ、非目標の承認。 |
| **関連** | [ADR-002 rollback](002_rollback_strategy.md) · [ADR-010 read-only mode](../../organization/decisions/010_organization_read_only_mode.md) · [Organization データ移行 blueprint](../_index.md) |

### Organization を Cells 間で移動する必要がある理由 {#why-do-we-need-to-move-organizations-across-cells}

GitLab.com は単一のモノリシックなデプロイとして稼働しており、まずデータベースでスケーリング上限に強くぶつかっています。[Cells](../../cells/) は、[Organizations](../../organization/) を独立した水平方向にスケール可能なインスタンスへ分散することで、これに対処します。

### これが難しい理由 {#why-this-is-hard}

Organization を単にオフラインにして移動することはできません。理由は 2 つあります。

1. 大規模 Organization を移動できなければなりません
2. 顧客への影響を最小限にして実施しなければなりません。

#### 顧客規模

多くの小規模 Organization は、数分で転送できる程度のデータしか持たず、夜間や週末には非アクティブなものも多くあります。そのような Organization は、比較的単純な手段と比較的単純なオーケストレーションで移動できます。

しかし、大規模 Organization は [データベース負荷の大きな割合（internal link）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/staff/lstaff/-/work_items/3)を占めているため、legacy cell を最終的に十分に緩和するには、小規模 Organization だけでなく、それらも移動する必要があります。また、[データ量の大きな割合（internal link）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/work_items/417)も占めています。

#### ダウンタイム

legacy cell を緩和するために空にする必要はありませんが、意味のある余裕を回復するのに十分な負荷とデータの大きな割合を移動する必要があります。わずかな削減では不十分です。そして cell は成長を続けており、その成長は加速しているため、緩和は一度限りの取り組みではなく、持続的でなければなりません。この目標を満たすには、多くの移動を継続的かつ並列に実行する必要があります。移行速度を顧客の営業時間外 window で制限すると、追いつけません。

最大規模の Organization では、ダウンタイム window はまったく使えません。あらゆる timezone にまたがるため、read-only period をスケジュールできる営業時間外がありません。失われる開発時間のコストはユーザー数に比例して増えるため、1 日の disruption は数百万ドルに達します。GitLab.com のスケーリングは GitLab の責任であり、顧客の責任ではないため、そのコストを顧客に押し付けることはできません。

したがって、Organization の規模にかかわらず、Organization のダウンタイムを最小化しなければなりません。しかし、Organization は許容できる read-only window 内で転送するにはデータが多すぎます。これにより、Organization を移動するための中心的な要件が生まれます。データの大部分は read-only window が開く前に target に存在していなければならず、その window ではすべてを転送するのではなく、小さな差分だけを drain する必要があります。

## 決定事項

GitLab.com Cells 間で Organization の移動をオーケストレーションする、Runway でデプロイされるコントロールプレーンサービスとして Org Mover を構築します。

1. **Org Mover service はコントロールプレーンです。** 各移動を順序付けられたステップのシーケンスとして実行し、各遷移の前に条件を確認し、すべての移動に関する状態を保持し、リアルタイムのステータスを公開し、監査証跡を記録します。
2. **デプロイモデル: RunwayService plus RunwayJobs。** Org Mover は永続的な状態データベースに支えられた長期稼働の [RunwayService](https://docs.runway.gitlab.com/welcome/introduction/) と、個々の移行フェーズを実行する RunwayJobs で構成されます。job only model では REST contract を提供できず、リアルタイムのステータスもサポートできません。
3. **移動は保存されたステップのシーケンスとして実行されます。** 各移動は pre-flight checks、データレプリケーション、final sync、routing switch などの順序付けられたステップを通ります。Org Mover は各ステップの後に進捗を保存するため、中断された移動は最初からやり直すのではなく、中断された場所から再開します。
4. **不完全なデータへ routing を切り替えない。** Org Mover は、checksum、row count、spot check を使用して target のデータが完全で source と一致していることを確認するまで、Organization のトラフィックを target cell に送りません。途中の通常のレプリケーション失敗は想定され、再試行されます。それらは移動を止めません。この確認なしに切り替えると顧客データを失うリスクがあります。
5. **最初は人が go/no-go call を行います。** Cutover は、Org Mover が Organization のトラフィックを old cell から new cell へ送る瞬間であり、移動が live になる point です。cutover の前に、SRE がレプリケーションと検証のステータスをレビューし、切り替えを承認します。metrics と confidence が高まれば、この判断は自動化できます。
6. **downtime window の前に各 Organization のデータを事前レプリケーションする。** Organization のデータの大部分は、すべてのデータストアにわたり、source が writable のまま target へレプリケーションされます。短い read-only window では小さな差分だけを drain します。
7. **PostgreSQL レプリケーションは Siphon に委譲されます。** Org Mover はストリームを設定してレプリケーションを開始します。Siphon は初期 snapshot を取得し、その後 CDC を自律的にストリーミングします。Org Mover は lag を監視し、すべてのテーブルが追いつくのを待ち、完了または中止時に replication slot を drop します。
8. **Non-PG レプリケーションは Geo を baseline として再利用します。** これには Git repositories、object storage、container registry、Secrets Manager が含まれます。Org Mover はレプリケーションに Geo を再利用するため、必要に応じて両方の cells を設定します。将来的には Geo が全体または一部で置き換えられる可能性があります。コントロールプレーンの contract はそれにかかわらず同一です。
9. **Routing は Topology Service に委譲されます。** Org Mover は Topology Service の two-phase claim update を通じて cutover を呼び出し、route を検証します。Topology Service は routing authority です。
10. **Rollback は ADR-002 に従います。** cutover 後のデータ rollback はありません。戦略は pre-cutover go/no-go gate、短い [ADR-002](002_rollback_strategy.md) Stage 2 switchback window、その後の fix-forward に依存します。
11. **1 つのコントロールプレーンが多くの同時移動をオーケストレーションします。** 単一の Org Mover deployment が多数の移動を同時に実行し、それぞれが独自の保存済み状態を持ち、それら全体への可視性と制御を提供します。移動ごとに 1 service ではありません。

### 検討した代替案 {#alternatives-considered}

#### Dual-write

source cell に commit された後にデータをレプリケーションする代わりに、遷移中にアプリケーションがすべての変更を source と target の両方へ書き込み、target が追いついてから切り替える方法があります。Dual-write には、Organization が使用するすべてのデータストア、つまり PostgreSQL、Git repositories、object storage、container registry、Secrets Manager にわたる書き込み経路の変更が必要です。それは store ごとに monolith への大規模で侵襲的な変更です。Cells の緊急性とあわせて、現時点ではこれを却下します。

## スコープ {#scope}

この ADR は **GitLab.com SaaS** のユースケース、具体的には GitLab.com Cells 間で Organization を移動すること、**legacy cell から target cell** を対象とします。設計は意図的により広いユースケースを視野に入れていますが（[非目標](#non-goals)を参照）、GitLab.com legacy-to-target case を超えるものはここでは約束しません。Org Mover が扱う必要がある具体事項は次のとおりです:

- legacy cell には複数の physical PostgreSQL databases があり、target cell は複数の logical databases を持つ 1 つの physical PostgreSQL を使用します。
- legacy cell のデプロイ infrastructure は custom です。target cells は標準化された cell deployment を使用します。Org Mover 自体は標準化された Runway deployment を使用しますが、これは self-managed ではまだ利用できません。Org Mover の source cell とのやり取りは legacy infrastructure を反映します。
- legacy cell には target cell よりはるかに多くの Gitaly storage があります。Org Mover はそれらの間を変換しなければなりません。

## 非目標 {#non-goals}

これらのユースケースはスコープ外です。それぞれ後で再検討される可能性があります:

- **Self-managed and GitLab Dedicated の移行オーケストレーション。** Org Mover は GitLab.com Cells を対象とします。
- **Cross-platform migration（self-managed to SaaS or vice versa）。**
- **Any-cell to any-cell。** 将来の方向性であり、この設計で提供されるものではありません。GitLab.com legacy-to-target が運用可能になった後の follow-on workstream です。
- **derived datastore（ClickHouse、Elasticsearch）の移行。** これらはレプリケーションされるのではなく、移行後に target cell 上で再構築されます。

## エンジニアリング原則 {#engineering-principles}

これらの原則は、すべての実装上の選択とレビューを導きます。data-plane-independent であり、チームがどの data-plane architecture を選択しても成り立ちます。これに違反する変更には、明示的で記録された根拠が必要です。

1. **Org Mover service はコントロールプレーンであり、データはそれやその jobs を通過しません。** Org Mover は command を発行し、進捗を読み、判断します。調整されるシステムが bytes を移動します。
2. **各ステップを retry safe にする。** 中断または再実行されたステップは、double-apply や data corruption ではなく、同じ結果に到達するべきです。insert より upsert、restart-from-zero より resume-from-checkpoint のように、安全に繰り返せる operation を優先します。
3. **read-only の前に高コストなものをすべて事前レプリケーションする。** source が writable の間に bulk data を移動し、read-only window 中は小さな差分だけを drain します。
4. **component を直交させる。** Org Mover は各 subsystem を小さく固定された contract、つまり command の発行、進捗の読み取り、検証、gate を通じて調整します。subsystem の semantics が正しく gate するために漏れ出す必要がある場合は、その coupling を隠すのではなく contract で明示します。

## 境界コントラクト {#boundary-contracts}

Org Mover は複数のシステムを調整します。high-level contract は次のとおりです。

移動ごと、および fleet 全体で以下を担当します:

- エンジニアが移動を管理するための UI と API を提供する
- 移動状態を追跡する
- deploy freeze や active batched background migration の確認など、移動の遷移を事前検証する
- Organization Read-Only Mode を切り替える
- Siphon を設定および管理する
- Geo を設定および管理する
- audit のために SRE action を Org Mover で追跡する
- pause、resume、abort を調整する

### Siphon（PostgreSQL レプリケーション）

担当:

- PostgreSQL change data capture: initial snapshot と CDC streaming
- boot 時に replication slot を作成する（Org Mover が drop する）

コントロールプレーンが考慮しなければならない制約:

- Target schema は source schema と backward compatible でなければならない
- Siphon は boot 時に replication slot を作成するが、drop しない。未消費の slot は source primary disk を埋めるため、Org Mover が drop しなければならない

### Geo（Non-PG データレプリケーション）

担当:

- Git repositories、object storage、container registry、Secrets Manager のデータを target cell へコピーまたはレプリケーションする
- non-PG データのレプリケーションを検証する

コントロールプレーンが考慮しなければならない制約:

- Asynchronous replication は active org で 100% には決して到達しない

### Monolith（application and org state）

担当:

- Application read-only mode（正しさはアプリケーション側が所有、[ADR-010 read-only mode](../../organization/decisions/010_organization_read_only_mode.md)を参照）
- Target-cell mode
- Schema and DDL

### Topology Service（routing）

担当:

- routing authority としての routing
- Org Mover が cutover で呼び出す two-phase claim update、つまり後戻りできない point

## 参考資料 {#references}

- [ADR-002: Rollback strategy](002_rollback_strategy.md)
- [Organization Read-Only Mode (ADR-010)](../../organization/decisions/010_organization_read_only_mode.md)
- [Organization データ移行 blueprint](../_index.md)
- [`gitlab-org/cells/org-mover` repository](https://gitlab.com/gitlab-org/cells/org-mover)
- [Topology Service](../../cells/topology_service.md)
- [Runway](https://docs.runway.gitlab.com/)
