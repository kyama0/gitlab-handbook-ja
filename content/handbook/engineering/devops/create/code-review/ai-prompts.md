---
title: "Create:Code Review AI プロンプト"
description: Duo Chat でより効率的に作業するために使用できる一般的なプロンプト
upstream_path: /handbook/engineering/devops/create/code-review/ai-prompts/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## ヘルプリクエスト（RFH）への対応

### ユースケース / 影響

[ヘルプリクエスト（RFH）](/handbook/engineering/devops/create/code-review/#requests-for-help-rfh) Issue に対応する際、根本原因を特定するために、プロダクト（機能と実装）の知識に基づいてアイデアを生成する必要があります。

RFH Issue をより素早くトリアージして対応するために、Duo Chat は潜在的な根本原因、顧客/サポートに問題を絞り込むための質問、または関連する過去の Issue を見つけるのに役立ちます。

### プロンプト

RFH Issue を開いて、以下のプロンプトを使用します:

```markdown
Investigate this issue, read the feature docs, suggest possible root causes and questions to ask the customer.
```

```markdown
Identify if any other issues in the `request-for-help` project could be related.
```

## ToDo のトリアージ

### ユースケース / 影響

GitLab の ToDo は特に PTO から戻ってきたときに素早く蓄積することがあります。
30件以上の ToDo に直面すると、どれを最初に対処すべきか一目で分かりにくくなります。

Duo Chat はオープンな ToDo を分類・優先順位付けするのに役立ちます。

### プロンプト

1. https://gitlab.com/-/graphql-explorer で GraphQL クエリを実行して、ToDo を JSON 形式で取得します（以下を参照、`francoisrose` を自分の GitLab ユーザー名に置き換えます）。
1. 出力をコピーします。
1. Duo Chat を開き、以下のプロンプトを使用します:

```markdown
Here are my open todos in gitlab. Help me prioritize them. Categorize them by theme and highlight the more urgent ones.

<paste raw JSON from step 2>
```

```graphql
query GetUserTodos {
  user(username: "francoisrose") {
    id
    username
    name
    todos {
      nodes {
        id
        action
        state
        createdAt
        targetType
        target {
          ... on Issue {
            id
            iid
            title
            webUrl
            state
            projectId
          }
          ... on MergeRequest {
            id
            iid
            title
            webUrl
            state
            project {
              name
              fullPath
            }
          }
          ... on Epic {
            id
            iid
            title
            webUrl
            state
            group {
              name
              fullPath
            }
          }
        }
        author {
          id
          username
          name
        }
        note {
          id
          body
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
```
