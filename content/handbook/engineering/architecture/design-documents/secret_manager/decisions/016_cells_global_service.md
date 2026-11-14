---
title: 'GitLab Secrets Manager ADR 016：Cells で Secrets Manager をグローバルサービスとして実行する'
description: '現時点ではセルごとに OpenBao を用意せず、すべてのセルで共有する 1 つの OpenBao デプロイを実行する決定を記録します。'
owning-stage: "~devops::security platform"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/016_cells_global_service/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-11T10:55:09Z
translated_at: "2026-11-14T09:06:35+00:00"
translator: codex
stale: false
---

## 背景 {#context}

[Cells](/handbook/engineering/architecture/design-documents/cells/)では、
機能はセル内で完結することが想定されています。各セルがすべてのサービスのコピーを実行し、
テナントのデータは、その組織を所有するセルに置かれます。

この設計ドキュメントの [Cells セクション](../#cells)では、各セルが
独自の OpenBao クラスターを持つ予定でした。テナントのシークレットを OpenBao
クラスター間で移すには、クラスター間での名前空間のレプリケーションが必要ですが、upstream の OpenBao は
まだ対応していません。それを待つと、Cells へ移行する顧客による
Secrets Manager の導入が妨げられることになります。

## 決定 {#decision}

Secrets Manager は、すべてのセルで共有する 1 つのグローバルな OpenBao デプロイとして実行します。
組織がセルへ移行する顧客も、そのまま利用し続けます。

これは、
[Cells の同等性に関する議論](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/work_items/787#note_3495294978)で合意した暫定的な形です。
Artifact Registry と同様の形であり、
[他のサービスに適用してはならない](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/work_items/787#note_3581803118)例外です。

目標は引き続き Secrets Manager をセル内で完結させることであり、
[gitlab-org&24097](https://gitlab.com/groups/gitlab-org/-/epics/24097)と
[各セルへの OpenBao のデプロイ](https://gitlab.com/gitlab-org/gitlab/-/work_items/583394)で追跡しています。
この作業は、OpenBao クラスター間の名前空間の移行を待っており、進められません
（[gitlab-org/gitlab#543004](https://gitlab.com/gitlab-org/gitlab/-/work_items/543004)、
upstream の [openbao/openbao#1569](https://github.com/openbao/openbao/issues/1569)）。

### グローバルサービスが Cells で機能する理由 {#why-a-global-service-works-with-cells}

- **エンドポイントが 1 つです。** Rails、Runner、API クライアントは、所属するセルにかかわらず、
  `secrets.gitlab.com` で OpenBao にアクセスします。Runner と API クライアントは、
  HTTP Router やセルを経由せず、OpenBao に直接接続します。
- **発行者と署名キーがそれぞれ 1 つです。** すべてのセルが、
  発行者 `https://gitlab.com`、オーディエンス `secrets.gitlab.com` として OpenBao 用の JWT に署名します。署名キー
  （`ci_jwt_signing_key`）は
  [クラスター全体のアプリケーション設定](https://docs.gitlab.com/development/cells/application_settings_analysis/)なので、
  OpenBao はどのセルの JWT も、同じ OIDC ディスカバリー URL を通じて検証します。
- **ID からパスを構成します。** OpenBao の名前空間は
  `org_<id>/group_<id>/project_<id>` という名前で、パスにセルは含まれません。これは、
  セルをまたいで ID が一意であることに依存します。Cells は Topology Service から各セルに
  固有のシーケンス範囲を割り当てることで、それを保証します。
- **組織のセル間移行。** シークレットマネージャーのレコードは
  組織と一緒に移動します。組織 ID は変わらず、OpenBao の
  パスにセルは含まれないため、パスは変わりません。
- **グループの組織間移管。** OpenBao は名前空間の名前を変更できないため、
  OpenBao のパスには作成時の組織 ID が残ります。シークレット
  マネージャーの `organization_id` 列は、
  [gitlab-org/gitlab#637441](https://gitlab.com/gitlab-org/gitlab/-/work_items/637441)で不変にする予定です。

## 結果 {#consequences}

### 利点 {#benefits}

- Cells へ移行する顧客が、今すぐ Secrets Manager を導入できます。
- 組織を別のセルへ移行しても、OpenBao のデータを移動しません。

### トレードオフとリスク {#trade-offs-and-risks}

- **影響範囲の共有。** OpenBao が停止すると、すべてのセルのすべての
  組織で、シークレットの読み取りが同時に停止します。
- **監査コールバックのルーティング。** OpenBao は、1 つの静的トークンを使い、1 つの Rails URL へ
  監査エントリを送信します。HTTP Router はまだ、グループやプロジェクトを所有する
  セルへこれらのリクエストを振り分けられず、各セルの Rails には同じ
  トークンが必要です。予定している修正は、HTTP Router ルールを使ったスコープ付き内部ルートであり、
  [ADR-015](015_audit_relay.md#routing-to-cells-out-of-scope)で説明し、
  以下で追跡しています。
  [gitlab-org/gitlab#638810](https://gitlab.com/gitlab-org/gitlab/-/work_items/638810)、
  [gitlab-org/gitlab#638811](https://gitlab.com/gitlab-org/gitlab/-/work_items/638811)、
  および
  [gitlab-org/gitlab#638813](https://gitlab.com/gitlab-org/gitlab/-/work_items/638813)。
- **Cron ワーカーが複数の組織を横断します。** スケジュールされたワーカーは、
  複数の組織が混在したバッチを処理します。1 つの組織にスコープを限定する作業は、
  [gitlab-org/gitlab#617798](https://gitlab.com/gitlab-org/gitlab/-/work_items/617798)と
  以下で追跡しています。
  [gitlab-org/gitlab#612732](https://gitlab.com/gitlab-org/gitlab/-/work_items/612732)。
- **移行コストの増大。** Secrets Manager がグローバルな状態である期間が長くなるほど、
  最終的にセル内で完結する OpenBao へ移行するコストが増えます。

## 参考資料 {#references}

- Secrets Manager の Cells 対応、グローバルサービス：[gitlab-org&17846](https://gitlab.com/groups/gitlab-org/-/epics/17846)
- セル内で完結する Secrets Manager：[gitlab-org&24097](https://gitlab.com/groups/gitlab-org/-/epics/24097)
- 決定に関する議論：[cells-infrastructure/team#787](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/work_items/787)
- 各セルへの OpenBao のデプロイ：[gitlab-org/gitlab#583394](https://gitlab.com/gitlab-org/gitlab/-/work_items/583394)
- この ADR の依頼：[gitlab-org/gitlab#617799](https://gitlab.com/gitlab-org/gitlab/-/work_items/617799)
