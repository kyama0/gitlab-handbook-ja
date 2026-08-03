---
title: "現在の Organization"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/current_organization/
upstream_sha: 30048133aad0232ed4d59fa0c80643620c85adb3
translated_at: "2026-08-04T06:12:43+09:00"
translator: claude
stale: false
lastmod: "2026-08-03T15:47:52+08:00"
---

私たちは、すべてのエントリポイントで現在の Organization ID が定義されるようにします。これらのエントリポイントには、Web リクエスト、バックグラウンドジョブ、スケジュールされたタスクが含まれます。

## Web リクエスト

Rails コントローラー、Grape API、GraphQL、ActionCable が含まれます。

Web リクエストでは、現在の Organization は以下の優先順位で決定されます。詳細はサブセクションに記載しています。

1. パスパラメーター（例: `/o/my-org/my-group`、`/my-group/my-project`）
1. ヘッダーフィールド（`X-GitLab-Organization-ID`）
1. User のホーム Organization（`user.organization_id`）。
1. デフォルト Organization（ID = 1）

この優先順位によって Organization コンテキストが解決されます。**User コンテキスト**と **Nil コンテキスト**は、それぞれ独立した別のコンテキストです。[リクエストコンテキスト](contexts.md)を参照してください。ルートは Default Organization にフォールバックせず、いずれかのコンテキストへ解決できます。どのルートをそのように扱うべきかは、まだ決まっていないルートごとの明示的な判断であり、このページでは解決しません。

### パスパラメーター

現在の Organization はリクエストされたリソースの親 Organization になります。
Organization は Organization スコープ `o/` を使用してパスに付加されます（例:
`https://gitlab.com/o/my-org/my-group/my-project/-/issues/1234`）。この
決定の詳細は[Organization パススコープ ADR](decisions/004_path_scope.md)にあります。

例:

- `/o/my-organization/my-group`: Organization は `my-organization` になります
- `/o/my-organization/engineering/backend`: プロジェクト `engineering/backend` がスコープされているため、Organization は `my-organization` になります。
- `/top-level-group/my-project`: `top-level-group` が `my-organization` に移動されている場合、Organization は `my-organization` になります。

### ヘッダーフィールド

- `X-GitLab-Organization-ID` ヘッダーに含まれる Organization コンテキスト
- フロントエンドの JavaScript が AJAX/API 呼び出しにコンテキストを自動的に含める
- インタラクティブセッション中に一貫したコンテキストを維持する

### User のホーム Organization

User のホーム Organization（`organization_id`）は、常に 1 つの Organization だけを指します。つまり、所有権は常に排他的です。メンバーシップもその Organization に限定されるかどうかは、その Organization が隔離されているかによって決まります。[ユーザーのホーム Organization](users.md#the-users-home-organization)を参照してください。

認証された曖昧なリクエストのフォールバックとして使用されます。

### デフォルト Organization

これは、より上位の優先順位マッピングで処理されない未認証リクエストのフォールバックです。

デフォルト Organization は 1 つの Cell にのみ存在するため、デフォルト Organization の使用は Cells 互換性を損ないます。

## API リクエスト

REST および GraphQL リクエストは `/api/v4` および `/api/graphql` のままです。

各リクエストには以下のいずれかで Organization コンテキストを指定する必要があります。

- `X-GitLab-Organization-ID` ヘッダー
- 使用されたシークレット（Personal Access Token など）に関連付けられた Organization

パラメーターがない場合はデフォルト Organization へのフォールバックが発生します。

## バックグラウンドジョブ

ジョブは現在の Organization コンテキストとともにエンキューされ、実行中に自動的に適用されます。

例:

```ruby
# Sidekiq client middleware - preserves context when enqueuing
class OrganizationContextClientMiddleware
  def call(worker_class, job, queue, redis_pool)
    # Capture current organization context
    job['organization_id'] = Current.organization_id
    yield
  end
end

# Sidekiq server middleware - restores context during processing
class OrganizationContextServerMiddleware
  def call(worker, job, queue)
    organization_id = job['organization_id']
    raise "Missing organization context" unless organization_id

    # Set thread-local context that query executor will use
    Current.organization_id = organization_id
    yield
  ensure
    Current.organization_id = nil
  end
end
```

## スケジュールされたタスク

Cron ジョブは現在の Organization を定義する必要があります。この要件をスキップする方法が提供されますが、典型的なケースではなく例外的な状況と見なされます。

## 例外

現在の Organization は一種のグローバル実行コンテキストとして定義されます。現在の Organization は常に定義されることが期待されますが、不可能または望ましくないと認められる状況もあります。

管理者操作
: システム全体の管理タスクは明示的なコンテキスト免除ブロックを使用します

スケジュールされたタスク
: Cron ジョブは、現在の Organization なしでジョブを初期化し、その後 Organization のバッチごとに現在の Organization を定義する可能性があります。

例外の例:

```ruby
class DropPendingBuildsWorker
  def perform
    # Process each organization's builds with proper context
    organizations_with_pending_builds.each do |org_id|
      # Set thread-local context for automatic query wrapping
      Current.organization_id = org_id
      process_builds_for_organization(org_id)
    end
  ensure
    Current.organization_id = nil
  end

  def organizations_with_pending_builds
    Organizations::Organization.without_current_organization do
      # make some query
    end
  end
end
```
