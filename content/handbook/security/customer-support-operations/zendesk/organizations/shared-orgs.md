---
title: '共有組織'
description: 'Zendesk の共有組織に関するドキュメント'
date: 2025-12-30
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/shared-orgs/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
---

デフォルトでは、組織はプライベートチケット可視性で構成されています。組織内のユーザーは、自身のチケットのみ閲覧・コメント可能で、同じ組織内の他ユーザーが提出したチケットは見えません。

一部の組織では、共有チケット可視性のほうが適切な場合があります。これにより、組織のすべてのメンバーが他のチケットを閲覧 (または場合によってはコメント) できるようになります。これは小規模なチームや、内部チケットの透明性を必要とする組織に有用です。

## 共有組織の種類

共有組織には 2 種類あります:

- `Read only`: 組織配下のすべてのチケットを、関連付けられているすべてのユーザーが見ることができます (ただし自分以外にはコメントできません)
- `Read+write`: 組織配下のすべてのチケットを、関連付けられているすべてのユーザーが見たりコメントしたりできます

## 事前確認

{{% alert title="危険" color="danger" %}}

- この機能にはセキュリティ面と法的面の要素があります。そのため、毎回必ずすべての事前確認を行ってください。判断に迷う場合は、Customer Support Operations の Fullstack Engineer に状況をレビューしてもらってください。

{{% /alert %}}

共有組織を有効化する前に、3 つの基準を満たす必要があります:

- 要求者がどの種類の共有組織を希望するか確認していること
- 要求者が、組織を代表して、共有組織が持つ固有のセキュリティリスクを承認していること
  - **注**: 承認は明確である必要があります。明確でない場合、セキュリティリスクを承認していることを確認するよう要請してください
  - セキュリティリスクについて顧客に送信する具体的なメッセージは以下です:
    > Please keep in mind that using a shared organization entails a potential security risk. Namely, if all users can view and comment on all tickets, that means the degree of privacy and security from separating the tickets is gone. This won't mean those outside your organization can see your tickets, only those within your organization.
- その組織に対して共有組織を有効化しないことを示す組織のメモ/詳細が無いこと

組織への変更を行う前に、リクエスト情報を示すようチケットのメタデータを必ず更新してください。フォーカスすべきフィールドは:

- `Support Ops Problem Type` (`Shared organization requests` であるべき)
- `Shared Org type`
- `Confirm security risk`

これらの基準のいずれかを満たしていない場合、進めることはできません。

これらの基準がすべて満たされている場合、変更を進めることができます。

## 共有組織を有効化する

共有組織を有効化するには:

1. 組織に移動します
1. 左上の `Users` の隣にあるテキストをクリックします (実際にはタブです)
1. `Can view all org tickets` を選択します
1. その下のドロップダウンで、要求された種類に応じて正しいオプションを選択します
1. `Details` フィールドに以下を含む新しい項目を追加します:

   > Shared organization (TYPE) enabled DATE as per TICKET

   - `TYPE` は `Read only` または `Read+write` のいずれかに置き換えます
   - `DATE` は今日の ISO 形式の日付 (`YYYY-MM-DD`) に置き換えます
   - `TICKET` はチケットの URL に置き換えます
1. 有効化されたことを確認するパブリックコメントをチケットに追加します
1. チケットを `Solved` としてマークします

## 共有組織を無効化する

共有組織を無効化するには:

1. 組織に移動します
1. 左上の `Users` の隣にあるテキストをクリックします (実際にはタブです)
1. `Can view own tickets only` を選択します
1. `Details` フィールドに以下を含む新しい項目を追加します:

   > Shared organization disabled DATE as per TICKET

   - `DATE` は今日の ISO 形式の日付 (`YYYY-MM-DD`) に置き換えます
   - `TICKET` はチケットの URL に置き換えます
1. 無効化されたことを確認するパブリックコメントをチケットに追加します
1. チケットを `Solved` としてマークします
