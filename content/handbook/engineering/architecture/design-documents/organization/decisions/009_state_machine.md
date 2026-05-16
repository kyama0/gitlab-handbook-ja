---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 009: Organization ライフサイクルのためのステートマシン'
description: なぜ organizations.state と organization_details.state_metadata によって支えられた state_machine gem を Organization ライフサイクルに使うのか。
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/009_state_machine/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-13T18:04:18+02:00"
---

## コンテキスト

Organization はリソース階層の頂点に位置し、グループ、プロジェクト、ユーザー、設定を所有します。そのライフサイクルには明示的でマシンによって強制される制御が必要です:

- Organization は確認前に使用可能であってはなりません。
- 削除は 2 段階構成: オーナー向けには可逆的なソフト削除、管理者向けには不可逆なハード削除。
- すべての遷移は監査可能でなければなりません (誰が、いつ、なぜ — 失敗時のエラーも含む)。
- 失敗した遷移は、行を一貫したリカバリ可能な状態に保つ必要があります。

削除ワークフローは [Add ability to delete an Organization](https://gitlab.com/groups/gitlab-org/-/work_items/21433) で追跡されています。

## 決定

私たちは [`state_machine` gem](https://github.com/state-machines/state_machines) で Organization ライフサイクルを管理し、次のものをバックエンドとします:

- `organizations.state` (SMALLINT) — 信頼できる状態の値。
- `organization_details.state_metadata` (JSONB) — 監査証跡。保存のたびに厳格な JSON Schema に対して検証されます。

低レベルのインフラ (メタデータ書き込み、ロギング、遷移ユーザー検証) は、4 つの `Gitlab::TenantContainerLifecycle::Stateful` モジュールを介して `Namespaces::Stateful` と共有されています。

この ADR は *メカニズム* のみを記録します。状態カタログ、遷移、新しい状態を追加するための規約は、信頼できる唯一の情報源である [Organization Lifecycle](../lifecycle.md) ブループリントに記載されています。

## 結果

- すべての状態変更はステートマシンを通過します — `organizations.state` への直接代入は無効です。
- `state_metadata` は `additionalProperties: false` を使用します: メタデータフィールドを追加する MR は、同じ MR で `organization_detail_state_metadata.json` を更新する必要があります。そうしないと保存の検証が失敗します。
- 遷移サービスは `transition_user:` を渡す必要があります。マシンは `ensure_transition_user` を通じてこれを強制します。
- 共有された `TenantContainerLifecycle::Stateful` モジュールは、`Organizations::Stateful` と `Namespaces::Stateful` の両方と後方互換性を保つ必要があります。
- 新しい状態や遷移には新しい ADR は不要 — ブループリント、スキーマ、ステートマシンと一緒にリリースされます。新しい ADR が必要になるのは、メカニズム自体が変更される場合のみです。

## 代替案

### 単一のブール値フラグ (`active` / `deleted`)

却下: ブール値では中間状態 (確認、ハード削除中) を表現できません。監査証跡もガードもありません。

### 関心事ごとに別カラム (`is_confirmed`, `confirmed_at`, `soft_deleted_at`, …)

却下: 相互排他性を強制するものがないため、Organization が同時に `confirmed` でハード削除中に見える可能性があります。ガードと監査は機能ごとのアドホックなコードになります。これは、レガシー namespace 削除 (`group_deletion_schedules`、`marked_for_deletion_at`) で採用されていたアプローチで、私たちが移行しようとしているものです — [Group and Project Operations ブループリント](../../group_and_project_operations_and_state_management/_index.md) を参照してください。

### リネームされた中間状態 (`confirmation_in_progress` / `activation_in_progress`)

[中間状態の命名スレッド](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/19655/diffs#note_3313088904) で議論されました。

却下: namespace ライフサイクルの `_in_progress` 規約は、操作を実行するバックグラウンドプロセスに名前を付けます (ユーザーが「削除」と言う → `deletion_in_progress`)。ここでは、ユーザーは「確認」プロセスを起動しているのではなく、Organization の構造を確認しているのです。`confirmation_in_progress` はユーザーがアクションの最中であることを示唆します。`confirmed` + `active` は、ユーザーの完了したアクションとシステムの完了したアクティベーションを、2 つの独立した永続的な状態として保ちます。

### `Namespaces::Stateful` を直接再利用する

却下: Organization は namespace ではありません — 親もなく、継承もなく、アーカイブもなく、転送もありません。namespace マシン全体を共有すると、組織固有の動作のために条件分岐があちこちに入ることになります。現在の設計では、低レベルのインフラモジュールのみを共有しています。
