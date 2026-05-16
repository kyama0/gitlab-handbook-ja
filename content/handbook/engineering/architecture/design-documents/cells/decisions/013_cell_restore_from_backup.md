---
owning-stage: "~devops::tenant scale"
title: 'Cells ADR 013: バックアップから Cell をリストアする際は同じ Cell ID を使用する'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/013_cell_restore_from_backup/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T08:26:37+02:00"
---

## コンテキスト

[このエピック](https://gitlab.com/groups/gitlab-org/-/epics/16339#note_2305490260)において、バックアップからの Cell のリストアをインプレースで行うべきか、同じまたは異なる Cell ID を持つ新しい Cell にリストアすべきかについて議論しました。

## 決定事項

以下のように決定しました。

1. 既存の Cell へのインプレースリストアよりも、新しい Cell へのリストアを優先します。
1. Cell をリストアする際、リカバリされた Cell は元の Cell と同じ Cell ID を使用します。
1. Cell をリストアする際、リカバリされた Cell は異なる一意のテナント ID を持ちます。
1. リカバリされた Cell を永続化する必要がある場合は、既存の Cell ID のアドレスを新しいテナントに向けるよう Topology Service を更新します。

Cell のリストアには 2 つのモードがあります。

1. リカバリされた Cell を永続化する場合:
   1. リカバリ対象の Cell への書き込みまたはトラフィックを制限します。
   1. 同じ Cell ID、異なるテナント ID でリカバリされた Cell をプロビジョニングします。
   1. 新しいアドレスでリカバリされた Cell を Topology Service に登録します。
1. リカバリされた Cell をリストア検証に使用する場合:
   1. 同じまたは未設定の Cell ID と異なるテナント ID でリカバリされた Cell をプロビジョニングします。
   1. リカバリされた Cell を Topology Service に追加しません。[シーケンス ID](../topology_service.md#sequence-service) や[クレーム](../topology_service.md#claim-service)を割り当てることができません。
   1. ルーティングをバイパスして直接接続することにより、リカバリされた Cell を検証します。
   1. リカバリされた Cell を削除します。

**注意**: リカバリプロセス中は、リカバリされた Cell で[サイレントモード](https://docs.gitlab.com/ee/administration/silent_mode/)を使用するか、リカバリ対象の Cell で[メンテナンスモード](https://docs.gitlab.com/ee/administration/maintenance_mode/)を使用する必要がある場合があります。

## 結果

1. 新しい Cell へのリカバリを優先することで、本番環境でのリストアプロセスの自動化とテストが可能になります。
1. リストアされた Cell で同じまたは未設定の Cell ID を使用することにより、外部トラフィックはその Cell にルーティングされません。リカバリされた Cell はデフォルトでは Topology Service に自身を登録しません。
1. リカバリされた Cell に新しいテナント ID を割り当てることで、直接接続して Cell を検証できますが、その Cell にトラフィックはルーティングされません。

## 代替案

1. 影響を受けたコンポーネントをインプレースでリストアする。
   本番環境でのリストア手順の検証が容易でないため、このアプローチの優先度を下げることにしました。
2. リカバリされた Cell に新しい Cell ID を割り当てる。
   リカバリされた Cell が既存の Cell の代替になる可能性があるためです。ルーティングの観点から Cell ID を同じに保つことが望ましいです。
   Cell ID が変わると、Topology Service 内の複数のクレームを書き直す必要があり、リカバリプロセスが遅くなり、より多くのコンピューティングリソースを消費します。
