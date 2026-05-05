---
stage: enablement
group: Tenant Scale
title: 'Cells: GraphQL'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/impacted_features/graphql/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---


{{% alert %}}
このドキュメントは作業中であり、Cells 設計の非常に初期の状態を示しています。重要な側面はまだ文書化されていませんが、今後追加する予定です。これは Cells に対して考えられるアーキテクチャの一つであり、どのアプローチを実装するかを決定する前に代替案と比較検討する予定です。このアプローチを実装しないと決定した場合でも、そのアプローチを選ばなかった理由を記録するため、このドキュメントは保持されます。
{{% /alert %}}


GitLab は効率的なデータクエリ操作を実行するために GraphQL を広く使用しています。GraphQL はその性質上、直接ルーティング可能ではありません。GitLab が使用する方法では `/api/graphql` エンドポイントを呼び出し、ボディリクエストのクエリまたはミューテーションのみがデータにアクセスできる場所を定義する場合があります。

## 1. 定義

## 2. データフロー

## 3. 提案

Cells アーキテクチャで GraphQL を実装する主な方法が少なくとも 2 つあります。

### 3.1. エンドポイントによるルーティング可能な GraphQL

`/api/graphql` を `/api/organization/<organization>/graphql` に変更します。

- API URI が変更されるため、`/api/graphql` エンドポイントのすべての既存の使用が壊れます。

### 3.2. ボディによるルーティング可能な GraphQL

ルーターの一部として GraphQL ボディを解析して、`project` などのルーティング可能なエンティティを見つけます。

- これでも GraphQL クエリは特定の Cell のコンテキストでのみ実行され、データのマージは許可されません。

```json
# Good example
{
  project(fullPath:"gitlab-org/gitlab") {
    id
    description
  }
}

# Bad example, since Merge Request is not routable
{
  mergeRequest(id: 1111) {
    iid
    description
  }
}
```

### 3.3. GraphQL マージプロキシ

ルーターの一部として GraphQL プロキシを実装し、ボディを解析して多くの Cell から結果をマージします。

- ページネーションの実現が困難になる可能性があります。また、すべての Cell をまたいで結果がマージされる多くのクエリを実行すると想定する可能性があります。

```json
{
  project(fullPath:"gitlab-org/gitlab"){
    id, description
  }
  group(fullPath:"gitlab-com") {
    id, description
  }
}
```

## 4. 評価

## 4.1. メリット

## 4.2. デメリット
