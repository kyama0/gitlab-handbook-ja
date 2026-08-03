---
title: "リクエストコンテキスト"
description: "GitLab に以前から存在する Organization、User、Nil という 3 つのリクエストコンテキストを単一のモデルとして定義し、隔離によってどれが適用されるかがどのように決まるかを説明します。"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/contexts/
upstream_sha: 30048133aad0232ed4d59fa0c80643620c85adb3
lastmod: "2026-08-03T15:47:52+08:00"
translated_at: "2026-08-04T06:12:43+09:00"
translator: codex
stale: false
---

## コンテキストとは？

コンテキストとはデータ境界です。実行パスが到達できるデータを決定します。パスには、Organization や User など、パスが指し示すエンティティである**アンカー**を設定することもできます。アンカー自体はコンテキストではありません。この違いについては、後述の「Organization はパスのアンカーとなる」を参照してください。

このドキュメントでは、現在 GitLab プロダクトがコンテキストを解決する方法と、Organization がそのモデルをどのように拡張するかを説明します。

## 3 つのコンテキスト

GitLab には 3 つのコンテキストがあります。

1. **Organization コンテキスト。** 実行パスは 1 つの隔離された Organization に関連付けられます。
1. **User コンテキスト。** 実行パスは 1 人の User に関連付けられます。その User がアクセスできるすべての Organization に到達します。
1. **Nil コンテキスト。** 実行パスは何にも関連付けられません。Organization も User もありません。

## コンテキストマトリックス

次の 2 つの事実によってコンテキストが決まります。

1. 隔離された Organization が存在するか？
2. User が存在するか？

| | User なし | User あり |
|---|---|---|
| **Organization なし** | Nil コンテキスト | User コンテキスト |
| **非隔離 Organization** | Nil コンテキスト | User コンテキスト |
| **隔離 Organization** | Organization コンテキスト | Organization コンテキスト |

「Organization なし」の行と「非隔離 Organization」の行は同じです。答えを変える唯一の事実は隔離です。

## 例

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

## 1 つのサービス、複数のコンテキスト

サービスは複数のコンテキストを受け取れます。コンテキストごとに別々のコードパスを用意する必要はありません。たとえば、To-Do リストサービスはコンテキストを入力として受け取ります。User コンテキストが与えられると、すべての Organization の To-Do 項目を返します。Organization コンテキストが与えられると、1 つの Organization の To-Do 項目を返します。

## Organization はパスのアンカーとなる。隔離によって境界になる

URL パスは、対象となるものがリクエストのコンテキストでなくても、その対象に関するものにできます。**アンカー**は、パスがどのエンティティに関するものかを指定します。たとえば Organization や User です。アンカーだけではデータ境界を設定しません。データ境界を設定するのはコンテキストだけです。

アンカーはパスのプロパティであり、すべての実行パスのプロパティではありません。バックグラウンドジョブやスケジュールされたタスクにもルートと同様にコンテキストがありますが、アンカーとなるパスはありません。

Organization によって、URL パスが Organization を指定できるという新しい事実が加わります。これだけでは「隔離 Organization」の行には到達しません。非隔離 Organization を指定するパスは、引き続き User コンテキストまたは Nil コンテキストに解決されます。これが、コンテキストマトリックスの「Organization なし」と「非隔離 Organization」の行が同じであり、`/o/acme/...` が 2 つの異なるコンテキストを持てる理由です。

3 行目に到達する事実は隔離です。隔離された Organization は、すべてのデータを自身の境界内に保持します。その境界を越えて出入りするデータはありません。その時点で初めて、その Organization に Organization コンテキストが存在します。その時点で初めて、アンカーとコンテキストが同じものになります。

上の表は、この違いを具体的に示しています。`/dashboard/...` も `/explore` も URL 内でエンティティを指定していないため、どちらにもアンカーはありません。`/o/acme/...` だけがエンティティを指定しています。だからこそ、そのコンテキストは、パスが指し示すものと異なる場合があります。

## 隔離によって Organization が User コンテキストと Nil コンテキストから除外される

隔離は Organization の境界に関する 1 つのルールです。データはその境界を越えません。User コンテキスト用のルールと Nil コンテキスト用の別のルールがあるわけではありません。この 1 つのルールから、次の 2 つの事実が導かれます。

1. 隔離された Organization の User は User コンテキストに属さなくなります。その ID は 1 つの Organization だけに属するようになります。
1. 隔離された Organization の境界外にはデータがありません。Nil コンテキストには、そこで見つけられるものが何も残りません。

## 関連する決定

- [ADR 016: `organization_id` と Organization スコープのクエリフィルタリング](decisions/016_user_context.md)では、現在このモデルをどのようにエンコードするかを決定しています。
