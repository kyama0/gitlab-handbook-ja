---
title: "Pipeline Authoring Duo プロンプト"
description: Duo で使用できる一般的なプロンプト
upstream_path: "/handbook/engineering/devops/verify/pipeline-authoring/duo-prompts/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
---

## ヘルプリクエスト（RFH）Issue への対応

### ユースケース / 影響

新しい[ヘルプリクエスト（RFH）](https://gitlab.com/gitlab-com/request-for-help) Issue をトリアージする際、
Duo Chat は潜在的な根本原因を特定し、関連する Issue を検索し、問題を絞り込むためにサポートや顧客に尋ねる
フォローアップの質問を決定するのに役立ちます。

### プロンプト

RFH Issue で、エージェンティックチャットを使用してこのプロンプトを使います:

```markdown
This Request for Help issue has been opened by a GitLab team member to get
help from Engineering with a problem one or more customers are facing.

Read this issue. Identify and read relevant documentation to understand the
subject matter. Review older Requests for Help issues in this project that
are also labelled for `Help group::pipeline authoring` to understand what
information is needed for troubleshooting issues in this product group.

Determine what information might be missing for a root cause analysis and suggest
follow-up questions or troubleshooting steps that will help gather that information.

Suggest possible root causes if the available information is sufficient.

Furthermore, search the `gitlab-org/gitlab` namespace for possibly related issues
and provide a list of relevant issues if any exist.
```

## Issue トリアージ

### ユースケース / 影響

エージェンティックモードでは、Duo は大規模な Issue 検索を非常に効率的に実行できます。
これにより、重複する Issue や関連する Issue / エピックのテーマ別クラスターを特定するのに適しています。

### プロンプト

Issue が重複している可能性が疑われる場合は、エージェンティックチャットでこのプロンプトを使用します:

```markdown
Read through <ISSUE_URL> and search the `gitlab-org/gitlab` namespace for duplicates
of it. Search both open and closed issues. If there is no clear duplicates, present
a list of the most closely related issues. If applicable, group them into thematic
clusters that would make sense to collect in epics.
```

## Issue の洗練

### ユースケース / 影響

特定のユースケースが、Issue を「planning breakdown」あるいは「ready for development」に移行する前に
適切に定義されていないことが発覚することがあります。
これにより、これらの詳細をレビュー時にのみ、あるいは実際の使用によって欠陥が明らかになった後に発見するという
事態が起き、開発が遅れます。

### プロンプト

機能提案 Issue、または修正/解決策が提案されたバグ Issue に対して、
エージェンティックチャットでこのプロンプトを使用します:

```markdown
Analyze the proposed solution in this issue and determine if all necessary
details and edge cases have been considered before implementation can begin.

Read relevant documentation to get an understanding of what to consider from
a product perspective. Search for comparable proposals and their related
merge requests to get an idea of typical concerns that are uncovered at
review time.

Based on that, suggest use cases for which the expected behavior is not
clearly defined, and highlight where existing definitions given in the
proposal are not comprehensive enough. Suggest questions for the product
and UX counterpart that will help clarify these details.

Analyze the implementation plan on the issue and suggest whether or not it
is sufficiently detailed so that any engineer with some domain knowledge
would be able to begin implementation without significant further planning.
If the implementation plan is missing or lacking, suggest one based on what
has been discussed on the issue. Point out parts of the plan where no clear
technical path towards the solution has been proposed.
```
