---
owning-stage: "~devops::tenant_scale"
title: 'ADR-002：Teams のスコープは Organization'
description: 'Team は必ず 1 つの Organization に属し、その境界は絶対です。'
status: accepted
creation-date: "2026-07-28"
authors: [ "@rymai" ]
upstream_path: /handbook/engineering/architecture/design-documents/teams/decisions/002-teams_are_organization_scoped/
upstream_sha: a0d167307f5d32554672c5cf99e3f47abb35e1dc
lastmod: 2026-09-08T16:19:34+02:00
translated_at: "2026-09-08T22:49:12Z"
translator: codex
stale: false
---

## 背景 {#context}

Teams には、インスタンス、グループ、[Organization](../../organization/_index.md)のいずれかの所有スコープが必要です。

グループをスコープとする Team はグループ自体とほとんど区別できず、兄弟関係にある階層をまたげません。顧客が求めているのは、まさにその利用ケースです。インスタンスをスコープとする Team は、Organizations が確立するために存在する顧客間の分離境界を越えてしまいます。

## 決定 {#decision}

Teams の**スコープは Organization** であり、その境界は絶対です。

- Team は必ず 1 つの Organization に属し、Organization レベルで作成します
- Team のパスは、グローバルではなく、その Organization 内で一意です
- Team の名簿には所属先の Organization のメンバーのみを含めることができ、Team に付与できるアクセスは同じ Organization 内の名前空間に限られます
- Organization をまたぐ Team の割り当て、メンバーシップ、可視性はありません

エンタープライズの ID 管理との統合は引き続き Organization レベルで行い、Teams はその内側に構造を提供します。

## 影響 {#consequences}

### 利点 {#positive}

- Teams は顧客の境界内で複数のグループ階層をまたげます。これはグループでは対応できないコラボレーションの利用ケースです
- 顧客間の分離は検査ではなく構造によって成立します。Organization をまたいで Team を割り当てられるコードパスはありません
- Team のパスは、グローバルな名前空間で利用可能な一意の名前の数を消費しません

### 欠点 {#negative}

- 両端が異なる Organizations にあるグループ共有は Team に変換できず、そのような共有にそもそも何らかの移行経路が必要かどうかも未決です。グループは Team と同じく必ず 1 つの Organization に属します。境界を越えるのは*共有*です。現在は共有の両端の整合性を検証していないためです
- 複数の Organizations を運用する顧客は、それぞれで並行して Teams を管理し、名簿を共有できません
- Organization レベルの管理が前提条件となるため、Teams の導入は Organizations の成熟度に依存します

## 関連ドキュメント {#related-documents}

- [Teams の設計案](../_index.md)
- [Organization の設計案](../../organization/_index.md)
- [ADR-007：移行より先に機能の同等性を確保する](007-parity_before_migration.md)
