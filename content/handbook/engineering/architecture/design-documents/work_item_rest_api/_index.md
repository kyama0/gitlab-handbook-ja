---
title: "ワークアイテム REST API"
status: proposed
creation-date: "2026-02-05"
authors: ["@nicolasdular"]
coaches: ["ntepluhina", "@engwan"]
dris: ["@nicolasdular"]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/work_item_rest_api/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/nicolasdular" class="text-blue-600 hover:underline">@nicolasdular</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ntepluhina" class="text-blue-600 hover:underline">@ntepluhina</a>, <a href="https://gitlab.com/engwan" class="text-blue-600 hover:underline">@engwan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/nicolasdular" class="text-blue-600 hover:underline">@nicolasdular</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::plan</span></td>
<td class="px-3 py-2 border border-gray-300">2026-02-05</td>
</tr>
</tbody>
</table>
</div>


## 概要

ワークアイテム REST API は、ワークアイテムアーキテクチャを、GitLab の広い REST 規約に沿ったファーストクラスのリソース指向インターフェースで拡張します。GraphQL を採用することなく、Issue、インシデント、タスク、エピック、将来のタイプを含む単一のワークアイテムドメインモデルを維持しながら、サードパーティの統合、自動化、CLI ツールがワークアイテムにアクセスできるようにします。このドキュメントでは、REST サーフェスの基本設計、その進化モデル、および GraphQL API との段階的な機能パリティに必要なバックエンドコンポーネントを提案します。

## 動機

ワークアイテムは GitLab 全体の計画エンティティを表す優先フレームワークとなっています。既存の GraphQL エンドポイントは幅広さを提供していますが、多くのユーザーが REST API に依存または好んでいます。ドキュメント化された安定した REST インターフェースを確立することで、ワークアイテムの採用を促進し、レガシー Issue API からの移行を簡素化し、既存の REST API と GraphQL API の間のビジネスロジックの重複を削減します。

### 目標

- 既存の GitLab REST パターンと認証フローに沿った、ワークアイテム向けのバージョン付き REST サーフェスを提供する。
- REST API と GraphQL API 間の機能パリティを設計する。
- クライアントの効率を最大化するためにレスポンスを形成する際の柔軟性を提供する。
- GraphQL API と REST API の切り替えが簡単になるよう、パラメータとレスポンスのパリティを目指す。
- GraphQL から REST へのエンドポイント切り替えを望む際、ユーザーと内部の両方に優れた開発者エクスペリエンスを提供する。

### 非目標

- ワークアイテム GraphQL API の置き換え。

## 提案

以下のエンドポイントでワークアイテム REST API を公開します:

1. `/namespaces/:full_path/-/work_items`。
    注目すべき点として、`full_path` のみをサポートします。ID は `Namespace` ID である必要があり、私たちは API でプロジェクトの Namespace ID を透過的に公開していないためです。これは開発者エクスペリエンスと機能のトレードオフです。このエンドポイントは主に内部的に使用されると予想されます。
2. `/projects/:id_or_full_path/-/work_items` と `/groups/:id_or_full_path/-/work_items`
    既存の Issue エンドポイントからの簡単な移行のため、`/groups` と `/projects` のエンドポイントも導入します。この場合、グループまたはプロジェクトの ID を API で共有しているため、ID も許可します。

### ワークアイテムのリストと単一ワークアイテムの取得

#### フィルタリングとページネーション

フィルタリングには次のいずれかを使用できます:

1. GraphQL 定義からフィルターパラメータを生成し、新しいフィルターが自動的に同期される（[POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/221749/diffs#diff-content-99fa4134f164348eb12207e36f4f325203311e1c)を参照）
    自動的に生成されるという利点があります。デメリットは、GraphQL が REST API の真実の源であり、GraphQL API とは異なる廃止ポリシーがあることです。
2. フィルターが GraphQL API と REST API の両方で同じであることを保証するテストを追加する
    テストで確認できるという利点がありますが、依然として手動で追加する必要があります。

どちらを使用するにしても、設計でパリティを求め、REST または GraphQL のみの更新はリリースしません。

ページネーションには、これらのエンドポイントでキーセットページネーションを必要とし、クライアントに対してソート順から導出されたカーソルで `page` 識別子を置き換えるよう求めます。

#### 柔軟なレスポンス

[スパースフィールドセット](https://jsonapi.org/format/#fetching-sparse-fieldsets)の JSON:API コンセプトの一部を適用することで、GraphQL の柔軟性の一部を保持します。

1. デフォルトでは、ワークアイテムの `id`、`global_id`、`iid`、`title`、`title_html` のみを返します。
2. デフォルトでは、レスポンスの一部として機能やウィジェットは追加されません。
3. その他のトップレベルフィールドは `fields` パラメータで明示的にリクエストする必要があります。
4. 機能/ウィジェットには別の `features` パラメータを追加します。
5. `features` 内のネストされたフィールドの選択は許可しません。

`features` は最近 GraphQL に追加したフラット化された表現です。すべてのコンシューマーが切り替えたら、パリティのために古い `widgets` 配列の廃止を計画しています。

スパースフィールドをサポートする理由:

1. 不要なフィールドのシリアライズを避けます。
2. クライアントのペイロードを削減します。これはコンテキストサイズを最小化する必要があるエージェントにとって特に重要です。
3. API 内でフィールドがどのように使用されているかについての洞察を提供します。

注意: リストエンドポイントですべての種類の `features` のリクエストを許可しません。例えば、単一のワークアイテムリクエストの一部としてのみ `hierarchy` 機能を許可します。リストエンドポイントの一部として `hierarchy` をリクエストすると、エラーが返されます。

#### リクエスト例

- **名前空間内のワークアイテムのリスト**

  ```shell
  curl --request GET \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items?fields=title,state,confidential&features=labels,assignees&work_item_type_id=task"
  ```

  このコールは `task` タイプのワークアイテムをリストし、`title`、`state`、`confidential` フィールドと `labels`、`assignees` 機能をリクエストします。

- **単一ワークアイテムの取得**

  ```shell
  curl --request GET \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    "https://gitlab.example.com/api/v4/projects/gitlab-org%2Fplan/-/work_items/42?features=labels,hierarchy"
  ```

  このコールはワークアイテム `42` を `id`、`iid`、`global_id`、`title`、`title_html` のみとともに返し、レスポンスに `labels` と `hierarchy` 機能を含めます。

### ワークアイテムの作成

ワークアイテムの作成は、GraphQL に使用する既存の機能サービス層に変換しながらも簡単である必要があります。REST コントラクトは、機能の入力を GraphQL ウィジェット入力を反映した単一の `features` オブジェクトにフラット化します。

#### 作成リクエスト例

```shell
curl --request POST \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  --header "Content-Type: application/json" \
  --data '{
    "title": "Draft Work Item REST API ADR",
    "work_item_type_id": 1,
    "features": {
      "description": { "description": "Capture the architectural decisions about the REST API." },
      "labels":   { "label_ids": [23, 47] },
      "assignees": { "assignee_ids": [42] }
    }
  }' \
  "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items"
```

この例では、ネストされた構造が既存の GraphQL ウィジェット入力に合わせてフラット化された `features` オブジェクトを使用してワークアイテムを作成します。REST API は整数 ID を受け入れ、現在 GraphQL の準備フックによって生成されているのと同じサービス層ペイロードに変換します。

### ワークアイテムの更新

ワークアイテムの更新は、より典型的な REST API スキーマに従うために異なるペイロード構造を使用する必要があります。各機能に対して別々のエンドポイントを提供するとともに、メインの更新エンドポイントでフラット化された `features` オブジェクトもサポートする予定です。ネストされたキーは変換を最小限に抑えるために引き続き GraphQL ウィジェット入力に合わせます。

#### 更新リクエスト例

- **コアフィールドの更新**

  ```shell
  curl --request PUT \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    --header "Content-Type: application/json" \
    --data '{
      "title": "Work Item REST API rollout",
      "state": "closed",
      "features": {
        "description": { "description": "Track the rollout milestones and metrics." }
      }
    }' \
    "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items/42"
  ```

  このコールはワークアイテム `42` のタイトルと状態を更新し、フラット化された `features` オブジェクトを通じて説明を更新します。

- **専用の機能エンドポイントでラベルを更新**

  ```shell
  curl --request PATCH \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    --header "Content-Type: application/json" \
    --data '{ "add_label_ids": [81], "remove_label_ids": [23, 47] }' \
    "https://gitlab.example.com/api/v4/groups/gitlab-org/-/work_items/42/labels"
  ```

  このエンドポイントはラベルの更新のみに焦点を当て、GraphQL 入力と同じフィールド名を再利用しながら、大きな多目的ペイロードを避ける方法を示しています。

### ワークアイテムの削除

ワークアイテムの削除は、ワークアイテムリソースに `DELETE` リクエストを発行することで標準的な REST パターンに従います。ワークアイテムが削除されると、成功時にエンドポイントは `204 No Content` を返します。

#### 削除リクエスト例

```shell
curl --request DELETE \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.example.com/api/v4/projects/gitlab-org%2Fplan/-/work_items/42"
```

## 懸念事項とオープンな質問

1. **レスポンスのケーシング**: REST レスポンスが残りの GitLab REST API と同様に snake_case を使用するか、GraphQL フィールド名に合わせて camelCase を使用するかを決定する必要があります。両方を混在させると一貫性が損なわれるため、GA 前に明確なガイドラインが必要です。
2. GraphQL API と同じペイロード構造を共有する単一の `PUT /work_items/:id` エンドポイントを公開することもできます。REST らしくはありませんが、多くの作業を省けます。

## ロールアウト計画

API は `experimental` とマークされ、`:work_items_rest_api` フラグ（ユーザーをアクターとしてデフォルトはオフ）で制御されます。REST API を正確に実装することが重要であり、破壊的な変更を導入できないため、API が期待を満たすことを確認した後にのみ `experimental` タグを削除します。
