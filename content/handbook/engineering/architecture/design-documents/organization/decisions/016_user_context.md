---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 016: organization_id と Organization スコープのクエリフィルタリング'
description: "organization_id によって排他的メンバーシップが作られる条件を隔離に基づいて定義し、Organization フィルターのルールを定める ADR です。隔離された Organization の取り組みで意図的に未定義のままにしていた部分を補います。"
creation-date: "2026-07-27"
authors: [ "@alexpooley" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/016_user_context/
upstream_sha: 30048133aad0232ed4d59fa0c80643620c85adb3
lastmod: "2026-08-03T15:47:52+08:00"
translated_at: "2026-08-04T06:12:43+09:00"
translator: codex
stale: false
---

## コンテキスト

すべてのリクエストやプロセスが解決される Organization コンテキスト、User コンテキスト、Nil コンテキストという 3 つのコンテキストについては、[リクエストコンテキスト](../contexts.md)を参照してください。

現在、`organization_id` は必須であり、その Organization が隔離されているかどうかにかかわらず、メンバーシップは常に排他的なものとして扱われています。これにより、すべての User で User コンテキストが使えなくなっています。すべての User の ID が常に 1 つの Organization に関連付けられているためです。

また、現在のルーティングでは、「Organization なし」が「Default Organization」と同じように扱われています。これによって同様に Nil コンテキストも使えなくなり、バグが発生しています（[Issue #605747](https://gitlab.com/gitlab-org/gitlab/-/issues/605747)を参照）。

[ADR 015: 非隔離は恒久的な Organization の状態](015_non_isolation_is_permanent.md)では、一部の Organization が無期限に非隔離のままであると定めました。User コンテキストと Nil コンテキストは、この事実があって初めて意味を持ちます。まだ隔離されていないだけの User ではなく、メンバーシップが排他的でない User が必要です。

隔離 Organization の取り組みでは、「すべての User は 1 つの Organization に所属する」という状態から「すべての Organization は隔離されている」という状態へ直接進みました。その間の状態は定義されませんでした。この決定によって、その空白を埋めます。

## 決定

### メンバーシップが排他的かどうかを決めるのは、Organization の存在ではなく隔離

`organization_id` は引き続き必須です。また、これは `users` テーブルの Cells シャーディングキーでもあるため、すべての User に具体的な値が必要です。この点は変更できません。

```text
User.organization_id: org_id
```

変わるのは、その値が何を意味するかというルールです。User コンテキストを制御するのは隔離であり、`organization_id` が Organization を指すかどうかではありません。`organization_id` は常に Organization を指します。このフィールドが影響するのは User コンテキストだけです。Nil コンテキストには、このフィールドを適用する User がいません。

所有権、つまり `organization_id` 自体は常に排他的であり、1 つの Organization だけを指します。隔離によって決まるのは、メンバーシップも排他的かどうかです。

1. **非隔離** Organization を指す場合、User は User コンテキストを持ちます。メンバーシップは排他的ではありません。User は同じアカウントで任意の数の他の非隔離 Organization のメンバーにもなれ、User コンテキストはそれらすべてを横断して集約します。
1. **隔離** Organization を指す場合、これはすべてのメンバーに必須です。User は User コンテキストを持ちません。Organization が実際の境界となり、User の ID はその外部には存在しません。

不変条件: 隔離された Organization のメンバーである場合、例外なく `organization_id` がその Organization を指します。User の `organization_id` が同時に指せる隔離 Organization は、多くても 1 つです。まだその Organization を指していないメンバーについては、隔離時に 1 回だけ再割り当てされます。その後、メンバーシップが変更されても変わりません。

### クエリのスコープ設定

Organization スコープの finder は、Organization が実際の境界として機能する場合に Organization フィルターを適用します。

```ruby
apply_org_filter = org.present? && org.isolated?
```

これが中心となるルールです。Organization が 1 つしかないインスタンス向けには、別の二次的な最適化があります。`Organization.count == 1` の場合、フィルタリングは何も変えないためスキップします。これはパフォーマンス上の詳細であり、スコープ設定ルールの一部ではありません。

Self-managed と Dedicated のインスタンスには、Default Organization という Organization が 1 つだけあります。そのため、すべてのインストールで `Organization.count == 1` が true になり、コストをかけずにフィルターが何も行わないままになります。

### ルーティングでは、適用するコンテキストをルートごとに決める必要がある

現在、Organization プレフィックスのないパス（たとえば `/dashboard/...`）は Default Organization を意味します。Organization プレフィックスのあるパス（たとえば `/o/acme/...`）は、代わりにその Organization を意味します。

User コンテキストと Nil コンテキストは、「Organization なし」のバリエーションとして Default Organization にフォールバックするものではなく、今や実在する別々の値です。`/dashboard/...` のようなプレフィックスのないパスは User コンテキストを意味する場合もあれば、引き続き Default Organization に関連付けられた Organization コンテキストを意味する場合もあります。`/explore` のようなパスは Nil コンテキストを意味する場合もあれば、現在と同じく Default Organization を意味する場合もあります。

どのコンテキストを適用するかは、ルートごとに 1 つずつ選択する必要があります。一部のルート（たとえば個人の To-Do リスト）では、User コンテキストが適切だと考えられます。一部のルート（たとえば `/explore`）では、Nil コンテキストが適切だと考えられます。ほかのルートでは、引き続き Default Organization が適切な場合があります。この決定では、その選択を解決しません。3 つのコンテキストを、選択できるほど明確なものにするだけです。

## 影響

GitLab.com では、すべての既存 User の `organization_id` が、すでに非隔離の Default Organization を指しています。バックフィルは不要です。User コンテキストを利用できます。User の To-Do リストやその他の User コンテキストのビューは、その User がメンバーとなっているすべての非隔離 Organization を横断します。たとえば、会社の Organization のメンバーでもあるオープンソースコントリビューターが該当します。
