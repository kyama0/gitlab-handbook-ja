---
title: "Current Organization"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/current_organization/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

私たちは、すべてのエントリポイントで現在のOrganization IDが定義されるようにします。これらのエントリポイントには、Webリクエスト、バックグラウンドジョブ、スケジュールされたタスクが含まれます。

## Webリクエスト

RailsコントローラーGrape API、GraphQL、ActionCableを含みます。

Webリクエストでは、現在のOrganizationは以下の優先順位で決定されます。詳細はサブセクションに記載しています。

1. パスパラメーター（例: `/o/my-org/my-group`、`/my-group/my-project`）
1. ヘッダーフィールド（`X-GitLab-Organization-ID`）
1. UsersのHome Organization（`user.organization`）
1. デフォルトOrganization（ID = 1）

### パスパラメーター

現在のOrganizationはリクエストされたリソースの親Organizationになります。
OrganizationはOrganizationスコープ`o/`を使用してパスに付加されます（例:
`https://gitlab.com/o/my-org/my-group/my-project/-/issues/1234`）。この
決定の詳細は[Organizationパススコープ ADR](decisions/004_path_scope.md)にあります。

例:

- `/o/my-organization/my-group`: Organizationは`my-organization`になります
- `/o/my-organization/engineering/backend`: プロジェクト`engineering/backend`がスコープされているため、Organizationは`my-organization`になります。
- `/top-level-group/my-project`: `top-level-group`が`my-organization`に移動されている場合、Organizationは`my-organization`になります。

### ヘッダーフィールド

- `X-GitLab-Organization-ID`ヘッダーに含まれるOrganizationコンテキスト
- フロントエンドのJavaScriptがAJAX/API呼び出しにコンテキストを自動的に含める
- インタラクティブセッション中に一貫したコンテキストを維持する

### UsersのHome Organization

すべてのUserは1つのOrganizationに属します。このOrganizationはHome Organizationとして知られています。

認証された曖昧なリクエストのフォールバックとして使用されます。

### デフォルトOrganization

これは、より上位の優先順位マッピングで処理されない未認証リクエストのフォールバックです。

デフォルトOrganizationは1つのCellにのみ存在するため、デフォルトOrganizationの使用はCells互換性を損ないます。

## APIリクエスト

RESTおよびGraphQLリクエストは`/api/v4`および`/api/graphql`のままです。

各リクエストには以下のいずれかでOrganizationコンテキストを指定する必要があります。

- `X-GitLab-Organization-ID`ヘッダー
- 使用されたシークレット（Personal Access Token等）に関連付けられたOrganization

パラメーターがない場合はデフォルトOrganizationへのフォールバックが発生します。

## バックグラウンドジョブ

ジョブは現在のOrganizationコンテキストとともにエンキューされ、実行中に自動的に適用されます。

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

Cronジョブは現在のOrganizationを定義する必要があります。この要件をスキップする方法が提供されますが、典型的なケースではなく例外的な状況と見なされます。

## 例外

Current Organizationはある種のグローバル実行コンテキストとして定義されます。Current Organizationは常に定義されることが期待されますが、それが不可能または望ましくない認められた状況があります。

Admin操作
: システム全体の管理タスクは明示的なコンテキスト免除ブロックを使用します

スケジュールされたタスク
: Cronジョブは、Current Organizationなしでジョブを初期化し、その後Organizationのバッチごとに Current Organization を定義する可能性があります。

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
