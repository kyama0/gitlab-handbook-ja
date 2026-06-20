---
title: 'Organization Data Migration ADR 003: Org Mover Control Plane'
description: 'Org Mover は、GitLab.com organizations の Cells 間移動を orchestrate する Runway-deployed control plane です。'
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

**Org Mover** は、GitLab.com organizations の Cells 間移動を orchestrate する、[Runway](https://docs.runway.gitlab.com/)でデプロイされる control plane service です。

| | |
|---|---|
| **問題** | organization を legacy cell から target cell へ migrate する automation が存在しない。 |
| **アプローチ** | 任意の engineer が、各 move を順序付けられた steps の sequence として実行できる Runway-deployed control plane として Org Mover を構築する。Org Mover は data を move する systems を coordinate するが、data 自体は move しない。Org Mover は REST API を公開する。 |
| **Status** | Proposed |
| **Scope** | GitLab.com SaaS のみ: legacy cell から target cell。詳しくは [Scope](#scope) と [Non-goals](#non-goals) を参照。 |
| **Decision needed** | Tenant Scale、Geo、Siphon、Infrastructure stakeholders による control-plane shape、scope、non-goals の承認。 |
| **See also** | [ADR-002 rollback](002_rollback_strategy.md) · [ADR-010 read-only mode](../../organization/decisions/010_organization_read_only_mode.md) · [Org data migration blueprint](../_index.md) |

### Organizations を Cells 間で移動する必要がある理由 {#why-do-we-need-to-move-organizations-across-cells}

GitLab.com は単一のモノリシックな deployment として稼働しており、database を筆頭に scaling ceiling に強くぶつかっています。[Cells](../../cells/) は、[organizations](../../organization/) を独立した水平方向に scalable な instances へ分散することで、これに対処します。

### これが難しい理由 {#why-this-is-hard}

organization を単に offline にして move することはできません。理由は 2 つあります:

1. 大規模 organization を move できなければなりません
2. customer impact を最小限にして実施しなければなりません。

#### Customer size

多くの小規模 organizations は、数分で転送できる程度の data しか持たず、夜間や週末には inactive なものも多くあります。そのような organizations は、比較的単純な手段と比較的単純な orchestration で move できます。

しかし、大規模 organizations は [database load の大きな割合（internal link）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/staff/lstaff/-/work_items/3)を占めているため、legacy cell を最終的に十分に relief するには、小規模 organizations だけでなく、それらも move する必要があります。また、[data volume の大きな割合（internal link）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/work_items/417)も占めています。

#### Downtime

legacy cell を relief するために空にする必要はありませんが、meaningful headroom を回復するのに十分な load と data の大きな割合を move する必要があります。わずかな trim では不十分です。そして cell は成長を続けており、その成長は加速しているため、relief は一度限りの push ではなく、持続的でなければなりません。この目標を満たすには、多くの moves を継続的かつ並列に実行する必要があります。migration rate を customers の off-hours windows で gate すると、追いつけません。

最大規模の organizations では、downtime windows はまったく使えません。あらゆる timezone にまたがるため、read-only period を schedule できる off-hours がありません。失われる development time の cost は user count に比例して増えるため、1 日の disruption は数百万ドルに達します。GitLab.com の scaling は GitLab の責任であり、customer の責任ではないため、その cost を customer に押し付けることはできません。

したがって、organization size にかかわらず organization downtime を最小化しなければなりません。しかし、organizations は許容できる read-only window 内で転送するには data が多すぎます。これにより、organizations を move するための中心的な要件が生まれます。data の bulk は read-only window が開く前に target に存在していなければならず、その window ではすべてを転送するのではなく、小さな delta だけを drain する必要があります。

## 決定事項

GitLab.com Cells 間で organization moves を orchestrate する Runway-deployed control plane service として Org Mover を構築します。

1. **Org Mover service は control plane です。** 各 move を順序付けられた steps の sequence として実行し、各 transition の前に conditions を check し、すべての moves に関する state を保持し、real-time status を公開し、audit trail を記録します。
2. **Deployment model: RunwayService plus RunwayJobs。** Org Mover は persistent state database に支えられた long-lived [RunwayService](https://docs.runway.gitlab.com/welcome/introduction/) と、個々の migration phases を実行する RunwayJobs で構成されます。job only model では REST contract を提供できず、real-time status もサポートできません。
3. **move は保存された steps の sequence として実行されます。** 各 move は pre-flight checks、data replication、final sync、routing switch などの順序付けられた steps を通ります。Org Mover は各 step の後に progress を保存するため、中断された move は最初からやり直すのではなく、残された場所から resume します。
4. **incomplete data へ routing を切り替えない。** Org Mover は、checksums、row counts、spot checks を使用して target の data が complete で source と一致していることを確認するまで、organization の traffic を target cell に送りません。途中の通常の replication failures は想定され、retry されます。それらは move を止めません。この check なしに switch すると customer data を失うリスクがあります。
5. **最初は人が go/no-go call を行います。** Cutover は、Org Mover が organization の traffic を old cell から new cell へ送る瞬間であり、move が live になる point です。cutover の前に、SRE が replication and verification status を review し、switch を authorize します。metrics と confidence が高まれば、この decision は automated にできます。
6. **downtime window の前に各 organization の data を pre-replicate する。** organization の data の bulk は、すべての data store にわたり、source が writable のまま target へ replicated されます。短い read-only window では小さな delta だけを drain します。
7. **PostgreSQL replication は Siphon に委譲されます。** Org Mover は streams を configure し replication を start します。Siphon は initial snapshot を取得し、その後 CDC を自律的に stream します。Org Mover は lag を監視し、すべての table が catch up するのを待ち、completion または abort 時に replication slots を drop します。
8. **Non-PG replication は Geo を baseline として再利用します。** これには Git repositories、object storage、container registry、Secrets Manager が含まれます。Org Mover は replication に Geo を再利用するため、必要に応じて両方の cells を configure します。将来的には Geo が全体または一部で置き換えられる可能性があります。control-plane contract はそれにかかわらず同一です。
9. **Routing は Topology Service に委譲されます。** Org Mover は Topology Service の two-phase claim update を通じて cutover を invoke し、route を verify します。Topology Service は routing authority です。
10. **Rollback は ADR-002 に従います。** cutover 後の data rollback はありません。strategy は pre-cutover go/no-go gate、短い [ADR-002](002_rollback_strategy.md) Stage 2 switchback window、その後の fix-forward に依存します。
11. **1 つの control plane が多くの concurrent moves を orchestrate します。** 単一の Org Mover deployment が多数の moves を同時に実行し、それぞれが独自の saved state を持ち、それら全体への visibility and control を提供します。move ごとに 1 service ではありません。

### 検討した代替案 {#alternatives-considered}

#### Dual-write

source cell に commit された後に data を replicate する代わりに、transition 中に application がすべての変更を source と target の両方へ write し、target が追いついてから cut over する方法があります。Dual-write には、organization が使用するすべての data store、つまり PostgreSQL、Git repositories、object storage、container registry、Secrets Manager にわたる write-path changes が必要です。それは store ごとに monolith への大規模で侵襲的な変更です。Cells の緊急性とあわせて、現時点ではこれを却下します。

## Scope {#scope}

この ADR は **GitLab.com SaaS** の use case、具体的には GitLab.com Cells 間で organizations を move すること、**legacy cell から target cell** を対象とします。設計は意図的により広い use cases を視野に入れていますが（[Non-goals](#non-goals)を参照）、GitLab.com legacy-to-target case を超えるものはここでは約束しません。Org Mover が扱う必要がある specifics:

- legacy cell には複数の physical PostgreSQL databases があり、target cell は複数の logical databases を持つ 1 つの physical PostgreSQL を使用します。
- legacy cell deployment infrastructure は custom です。target cells は standardized cell deployment を使用します。Org Mover 自体は standardized Runway deployment を使用しますが、これは self-managed ではまだ利用できません。Org Mover の source-cell interactions は legacy infrastructure を反映します。
- legacy cell には target cell よりはるかに多くの Gitaly storages があります。Org Mover はそれらの間を translate しなければなりません。

## Non-goals {#non-goals}

これらの use cases は scope 外です。それぞれ後で再検討される可能性があります:

- **Self-managed and GitLab Dedicated migration orchestration。** Org Mover は GitLab.com Cells を対象とします。
- **Cross-platform migration（self-managed to SaaS or vice versa）。**
- **Any-cell to any-cell。** 将来の方向性であり、この設計で deliver されるものではありません。GitLab.com legacy-to-target が運用可能になった後の follow-on workstream です。
- **derived datastores（ClickHouse、Elasticsearch）の migration。** これらは replicate されるのではなく、post-migration で target cell 上に rebuild されます。

## Engineering principles {#engineering-principles}

これらの principles は、すべての implementation choice と review を導きます。data-plane-independent であり、team がどの data-plane architecture を選択しても成り立ちます。これに違反する変更には、明示的で記録された justification が必要です。

1. **Org Mover service は control plane であり、data はそれやその jobs を transit しません。** Org Mover は commands を発行し、progress を読み、decide します。coordinate される systems が bytes を move します。
2. **各 step を retry safe にする。** 中断または再実行された step は、double-apply や data corruption ではなく、同じ結果に到達するべきです。inserts より upserts、restart-from-zero より resume-from-checkpoint のように、安全に繰り返せる operations を優先します。
3. **read-only の前に expensive なものをすべて pre-replicate する。** source が writable の間に bulk data を move し、read-only window 中は小さな delta だけを drain します。
4. **components を orthogonal に保つ。** Org Mover は各 subsystem を小さく固定された contract、つまり commands の発行、progress の読み取り、verify、gate を通じて coordinate します。subsystem の semantics が正しく gate するために漏れ出す必要がある場合は、その coupling を隠すのではなく contract で明示します。

## Boundary contracts {#boundary-contracts}

Org Mover は複数の systems を coordinate します。high-level contracts は次のとおりです:

move ごと、および fleet 全体で以下を担当します:

- engineers が moves を管理するための UI and API を提供する
- move state を track する
- deploy freeze や active batched background migrations の確認など、move transitions を pre-validate する
- Organization Read-Only Mode を toggle する
- Siphon を configure and manage する
- Geo を configure and manage する
- audit のために SRE actions を Org Mover で track する
- pause、resume、abort を coordinate する

### Siphon (PostgreSQL replication)

担当:

- PostgreSQL change data capture: initial snapshot と CDC streaming
- boot 時に replication slot を作成する（Org Mover が drop する）

control plane が考慮しなければならない制約:

- Target schema は source schema と backward compatible でなければならない
- Siphon は boot 時に replication slot を作成するが、drop しない。unconsumed slot は source primary disk を埋めるため、Org Mover が drop しなければならない

### Geo (Non-PG data replication)

担当:

- Git repositories、object storage、container registry、Secrets Manager data を target cell へ copy または replicate する
- non-PG data の replication を verify する

control plane が考慮しなければならない制約:

- Asynchronous replication は active org で 100% には決して到達しない

### Monolith (application and org state)

担当:

- Application read-only mode（correctness は app-owned、[ADR-010 read-only mode](../../organization/decisions/010_organization_read_only_mode.md)を参照）
- Target-cell mode
- Schema and DDL

### Topology Service (routing)

担当:

- routing authority としての routing
- Org Mover が cutover で invoke する two-phase claim update、つまり point of no return

## 参考資料 {#references}

- [ADR-002: Rollback strategy](002_rollback_strategy.md)
- [Organization Read-Only Mode (ADR-010)](../../organization/decisions/010_organization_read_only_mode.md)
- [Organization data migration blueprint](../_index.md)
- [`gitlab-org/cells/org-mover` repository](https://gitlab.com/gitlab-org/cells/org-mover)
- [Topology Service](../../cells/topology_service.md)
- [Runway](https://docs.runway.gitlab.com/)
