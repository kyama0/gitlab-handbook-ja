---
title: "リクエストコンテキスト"
description: "GitLab に以前から存在する Organization、User、Nil という 3 つのリクエストコンテキストを単一のモデルとして定義し、隔離によってどれが適用されるかがどのように決まるかを説明します。"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/organization/contexts/"
upstream_sha: "d5f4e694763c3ac443cc3d58c6a9a81bafa06880"
lastmod: "2026-11-02T17:39:47+05:30"
translated_at: "2026-11-02T21:11:17+00:00"
translator: codex
stale: false
---

## コンテキストとは？ {#what-is-a-context}

コンテキストとはデータ境界です。実行パスが到達できるデータを決定します。パスには、Organization や User など、パスが指し示すエンティティである**アンカー**を設定することもできます。アンカー自体はコンテキストではありません。この違いについては、後述の「Organization はパスのアンカーとなる」を参照してください。

このドキュメントでは、現在 GitLab プロダクトがコンテキストを解決する方法と、Organization がそのモデルをどのように拡張するかを説明します。

## 3 つのコンテキスト {#the-three-contexts}

GitLab には 3 つのコンテキストがあります。

1. **Organization コンテキスト。** 実行パスは 1 つの隔離された Organization に関連付けられます。
1. **User コンテキスト。** 実行パスは 1 人の User に関連付けられます。その User がアクセスできるすべての Organization に到達します。
1. **Nil コンテキスト。** 実行パスは何にも関連付けられません。Organization も User もありません。

## コンテキストマトリックス {#the-context-matrix}

次の 2 つの事実によってコンテキストが決まります。

1. 隔離された Organization が存在するか？ここでの隔離とは確定済みの隔離を意味します。
   [隔離の状態](isolation.md#isolation-states)を参照してください。
2. User が存在するか？

| | User なし | User あり |
|---|---|---|
| **Organization なし** | Nil コンテキスト | User コンテキスト |
| **非隔離 Organization** | Nil コンテキスト | User コンテキスト |
| **隔離 Organization** | Organization コンテキスト | Organization コンテキスト |

「Organization なし」の行と「非隔離 Organization」の行は同じです。答えを変える唯一の事実は隔離です。

## 例 {#examples}

ルートが最も分かりやすい例です。一部のルートには、パスが指し示すエンティティであるアンカーもあります。

| ルート例 | コンテキスト | アンカー |
|---|---|---|
| `/dashboard/...` | User コンテキスト | なし |
| `/explore` | Nil コンテキスト | なし |
| `/o/acme/...`、Acme は隔離済み | Organization コンテキスト | Acme（Organization） |
| `/o/acme/...`、Acme は非隔離、User はサインイン済み | User コンテキスト | Acme（Organization） |
| `/o/acme/...`、Acme は非隔離、サインアウト済み | Nil コンテキスト | Acme（Organization） |

同じルート `/o/acme/...` が、同じアンカーを持ちながら 2 つの異なるコンテキストを持つことがあります。どのコンテキストを適用するかを決めるのは URL ではなく隔離です。その理由については、後述の「Organization はパスのアンカーとなる」を参照してください。

ルートだけでなく、すべてのプロセスがこの 3 つのコンテキストのいずれかに解決されます。同じ 3 つが、バックグラウンドジョブ、スケジュールされたタスク、GraphQL クエリ、ActionCable 接続にも適用されます。

## 1 つのサービス、複数のコンテキスト {#one-service-more-than-one-context}

サービスは複数のコンテキストを受け取れます。コンテキストごとに別々のコードパスを用意する必要はありません。たとえば、To-Do リストサービスはコンテキストを入力として受け取ります。User コンテキストが与えられると、すべての Organization の To-Do 項目を返します。Organization コンテキストが与えられると、1 つの Organization の To-Do 項目を返します。

## Organization はパスのアンカーとなる。隔離によって境界になる {#organizations-anchor-a-path-isolation-makes-it-a-boundary}

URL パスは、対象となるものがリクエストのコンテキストでなくても、その対象に関するものにできます。**アンカー**は、パスがどのエンティティに関するものかを指定します。たとえば Organization や User です。アンカーだけではデータ境界を設定しません。データ境界を設定するのはコンテキストだけです。

アンカーはパスのプロパティであり、すべての実行パスのプロパティではありません。バックグラウンドジョブやスケジュールされたタスクにもルートと同様にコンテキストがありますが、アンカーとなるパスはありません。

Organization によって、URL パスが Organization を指定できるという新しい事実が加わります。これだけでは「隔離 Organization」の行には到達しません。非隔離 Organization を指定するパスは、引き続き User コンテキストまたは Nil コンテキストに解決されます。これが、コンテキストマトリックスの「Organization なし」と「非隔離 Organization」の行が同じであり、`/o/acme/...` が 2 つの異なるコンテキストを持てる理由です。

3 行目に到達する事実は隔離です。隔離された Organization は、すべてのデータを自身の境界内に保持します。その境界を越えて出入りするデータはありません。その時点で初めて、その Organization に Organization コンテキストが存在します。その時点で初めて、アンカーとコンテキストが同じものになります。

上の表は、この違いを具体的に示しています。`/dashboard/...` も `/explore` も URL 内でエンティティを指定していないため、どちらにもアンカーはありません。`/o/acme/...` だけがエンティティを指定しています。だからこそ、そのコンテキストは、パスが指し示すものと異なる場合があります。

## 隔離によって Organization が User コンテキストと Nil コンテキストから除外される {#isolation-removes-an-organization-from-user-and-nil-context}

隔離は Organization の境界に関する 1 つのルールです。データはその境界を越えません。User コンテキスト用のルールと Nil コンテキスト用の別のルールがあるわけではありません。この 1 つのルールから、次の 2 つの事実が導かれます。

1. 隔離された Organization の User は User コンテキストに属さなくなります。その ID は 1 つの Organization だけに属するようになります。
1. 隔離された Organization の境界外にはデータがありません。Nil コンテキストには、そこで見つけられるものが何も残りません。

## 関連する決定 {#related-decisions}

- [ADR 016: `organization_id` と Organization スコープのクエリフィルタリング](decisions/016_user_context.md)では、現在このモデルをどのようにエンコードするかを決定しています。
