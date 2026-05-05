---
owning-stage: "~devops::tenant services"
title: 'Cells ADR 006: ディザスタリカバリーに Geo を使用する（廃止）'
toc_hide: true
status: deprecated
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/006_disaster_recovery_geo/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---


{{% alert title="廃止" %}}
この ADR は廃止され、[ADR 024: Use Backup and Restore for Disaster Recovery](024_disaster_recovery_cells.md) によって置き換えられました。

ディザスタリカバリーに Geo を使用するという決定は、Cells の隔離モデルにより整合し、リージョナルなリカバリーに対してより柔軟性を提供するバックアップとリストア戦略によって取って代わられました。現在のアプローチについては ADR 024 を参照してください。
{{% /alert %}}


## 背景

Cells でディザスタリカバリーに Geo を使用するべきかを [この Issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25246) で議論しました。

## 決定

~~Cells では、ディザスタリカバリーに Geo を使用することに決定しました。~~
~~これは GitLab Dedicated と同じアプローチです。~~

**この決定は撤回されました。** 現在のアプローチでは、[ADR 024](024_disaster_recovery_cells.md) に文書化されているとおり、バックアップとリストアを使用しています。

## 結果

~~この決定は、Cells の初期のクラウドコストを増加させることを意味します。~~
~~初期の Cells デプロイメントの支出が倍になると見込まれていますが、初回の Cells デプロイメントは数が限られています。~~

これらの結果はもはや適用されません。バックアップとリストアアプローチの結果については [ADR 024](024_disaster_recovery_cells.md) を参照してください。

## 代替案

~~議論された代替案は、バックアップからリストアするための Dedicated ツーリングに固有の新しいプロセスを考案することでした。~~

（当初は代替案として検討されていた）バックアップとリストアアプローチが、現在の主要な決定となっています。次を参照してください:

- [ADR 024: Use Backup and Restore for Disaster Recovery](024_disaster_recovery_cells.md) - 全体的な DR 戦略について
- [ADR 013: Cell Restore from Backup](013_cell_restore_from_backup.md) - Cell のリストア手順について
- [ADR 020: Spanner Backup Strategy](020_spanner_backup_strategy.md) - Topology Service のバックアップ詳細について
