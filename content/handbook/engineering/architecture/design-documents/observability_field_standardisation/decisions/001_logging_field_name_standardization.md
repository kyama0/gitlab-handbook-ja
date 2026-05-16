---
title: 'ロギング ADR 001: 標準化されたアプリケーションフィールド命名戦略'
owning-stage: "~devops::developer experience"
description: 'ロギング ADR 001: 標準化されたアプリケーションフィールド命名戦略'
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/observability_field_standardisation/decisions/001_logging_field_name_standardization/"
upstream_sha: "856dbb5acbecaff51b3ea0c961ad3adb3d37a953"
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-17T21:55:02+13:00"
---

## コンテキスト

GitLab のロギングインフラは、サービス間でフィールドの構成に一貫性がありません。フィールドはトップレベル、`meta.*`、`extra.*`、メッセージボディに散在しています。異なるサービスは異なる規則を使用しています（例: `remote_ip` vs `meta.remote_ip`）。これにより、開発者やオペレーターがログを発見・フィルタリングするのが困難になっています。

この ADR はアプリケーションロギングに焦点を当てています。HTTP アクセスロギングはスコープ外です。

## 決定

[OpenTelemetry ログデータモデル](https://opentelemetry.io/docs/specs/otel/logs/data-model/)にインスパイアされたフィールド命名戦略を採用し、GitLab サービス全体のログ構造に対する独自のアプローチを提供します。実用的な範囲で OTel の規則から逸脱します（例: `resource` ではなく `meta` を維持し、snake_case のフィールド名を使用し、人間が読めるタイムスタンプを維持する）。

### 構造

```json
{
  "time": "2026-01-27T15:44:30.446Z",
  "level": "INFO",
  "body": "Member created successfully",
  "attributes": {
    "endpoint_id": "Projects::MembersController#create",
    "status_code": 201,
    "method": "POST",
    "duration_s": 0.234,
    "action": "create_member",
    "target_user_id": 171554,
    "role": "developer"
  },
  "meta": {
    "gl_user_id": 89012,
    "gl_project_path": "gitlab-org/gitlab",
    "caller_id": "Projects::MembersController#create",
    "feature_category": "member_management"
  }
}
```

### フィールドの配置

| フィールド | 目的 | 例 |
|-------|---------|----------|
| `time` | イベントが発生した ISO 8601 タイムスタンプ | `2026-01-27T15:44:30.446Z` |
| `level` | ログレベル | `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL` |
| `body` | ログメッセージ。文字列または構造化データ | `"Member created successfully"` |
| `attributes` | ログイベントごとに変化するイベント固有の情報 | `endpoint_id`, `status_code`, `duration_s` |
| `meta` | サービス間で伝播するアプリケーションコンテキスト | `gl_user_id`, `gl_project_path`, `feature_category` |

フィールドがどこに属するかを決定する際:

- **`meta`**: ログがどこから発生したかを識別するコンテキスト。これらのフィールドはサービス境界を越えて伝播し、リクエストに対して一定のまま（例: ユーザーID、プロジェクト、機能カテゴリ）。
- **`attributes`**: 何が起こったかについてのイベント固有のデータ。これらのフィールドはログイベントごとに異なり、アクションや結果を説明する（例: ステータスコード、所要時間、操作固有の ID）。
- **`body`**: ログメッセージ。シンプルな文字列または構造化データ。`body` 内の構造化データは、一部のストア（例: `JSONExtract` を使用した ClickHouse）でクエリ可能で、他のストア（例: Elasticsearch）ではインデクシングのためにフラット化されます。

フィールドは1つの場所にのみ表示する必要があります。LabKit は `meta` と `attributes` で既知のフィールドのみが許可されることを強制し、重複を防ぎます。

### 開発者体験

LabKit はフィールドの配置を内部で処理します。開発者は構造を直接管理する必要はありません:

```ruby
logger.info("Member created successfully", action: "create_member", gl_user_id: 171554)
# => 構造化 JSON を出力
```

## マイグレーション

ダッシュボードや自動化を壊さずに既存のログを移行するためのガイダンスについては、親設計ドキュメントの[安全なマイグレーション](../#安全なマイグレーション)を参照してください。

### 段階的ロールアウト

1. **既存サービス**: `attributes` と `body` 構造を段階的に採用しながら `meta` を維持します。
1. **新規サービス**: 最初から `meta`、`attributes`、`body` を使用します。

Kibana はネストされたフィールドとの相性がよくありません。オブザーバビリティチームは、クエリパフォーマンスを維持するために、インジェストパイプラインでネストされた構造をフラット化しなければなりません。

## 結果

- サービス間での一貫したフィールド構成により、ログの発見性とフィルタリングが向上する
- 開発者向けの明確なガイダンスにより、フィールドの配置に関する混乱が減少する
- LabKit SDK はバリデーションルールを通じて命名戦略を強制する
- ダッシュボードと自動化を壊さずに既存のログをマイグレーションする必要がある
- 複数の SDK（Ruby、Go、Rust、Python）にわたって実装作業が必要

## 代替案

### プレフィックス付きのフラット構造

プレフィックス付きのトップレベルにすべてのフィールドを配置します（例: `meta_user_id`、`attr_action`）。最初はよりシンプルですが、フィールド名の汚染につながり、拡張が難しくなります。

### 何もしない

現在の一貫性のないアプローチを継続します。実装作業を回避できますが、開発者の混乱と運用上の摩擦が続きます。
