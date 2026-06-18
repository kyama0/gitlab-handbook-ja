---
title: "ワークアイテム REST API"
description: "GitLab REST の規約に沿ったリソース指向インターフェースである、ワークアイテム REST API のデザインドキュメント。"
status: ongoing
creation-date: "2026-02-05"
authors: ["@nicolasdular"]
coaches: ["ntepluhina", "@engwan"]
dris: []
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/work_item_rest_api/
upstream_sha: ccb1e392292beca5aa187b61502738defd99d030
lastmod: "2026-02-10T10:24:36+01:00"
translated_at: "2026-06-18T21:09:08Z"
translator: claude
stale: false
---

{{< engineering/design-document-header >}}

## 概要

ワークアイテム REST API は、ワークアイテムアーキテクチャを、より広い GitLab REST の規約に沿ったファーストクラスのリソース指向インターフェースで拡張します。これにより、Issue、インシデント、タスク、エピック、将来のタイプを支える単一のワークアイテムドメインモデルを維持しながら、GraphQL を採用することなく、サードパーティの統合、自動化、CLI ツールがワークアイテムにアクセスできるようになります。このドキュメントでは、REST サーフェスの基本設計、その進化モデル、および GraphQL API との機能パリティに段階的に到達するために必要なバックエンドコンポーネントを提案します。

## 動機

ワークアイテムは、GitLab 全体で計画エンティティを表現するための私たちの好ましいフレームワークになりました。既存の GraphQL エンドポイントは幅広さを提供しますが、多くのユーザーは REST API に依存している、あるいは REST API を好んでいます。ドキュメント化された安定した REST インターフェースを確立することで、ワークアイテムの採用が促進され、レガシーな Issue API からの移行が簡素化され、既存の REST API と GraphQL API の間のビジネスロジックの重複が削減されます。

### ゴール

- 既存の GitLab REST パターンおよび認証フローに沿った、バージョン管理されたワークアイテム用の REST サーフェスを提供する。
- REST API と GraphQL API の間の機能パリティを念頭に設計する。
- クライアントの効率を最大化するためにレスポンスを整形する際の柔軟性を提供する。
- GraphQL API と REST API の切り替えが容易になるよう、パラメータとレスポンスのパリティを目指す。
- ユーザーにとって、また私たち自身が GraphQL から REST へエンドポイントを切り替えたいときに、優れた開発者エクスペリエンスを提供する。

### 非ゴール

- ワークアイテム GraphQL API の置き換え。

## 提案

私たちは、以下のエンドポイントでワークアイテム REST API を公開します。

1. `/namespaces/:full_path/-/work_items`。
    特筆すべき点として、私たちは `full_path` のみをサポートします。ID は `Namespace` ID である必要がありますが、私たちは API でプロジェクトの Namespace ID を透過的に公開していないためです。これは開発者エクスペリエンスと機能性の間のトレードオフです。このエンドポイントは主に内部で使用されると予想されます。
2. `/projects/:id_or_full_path/-/work_items` および `/groups/:id_or_full_path/-/work_items`
    既存の Issue エンドポイントからの容易な移行のため、`/groups` と `/projects` のエンドポイントも導入します。この場合、Group や Project の ID は API で共有しているため、ID も許可します。

### ワークアイテムの一覧取得と単一取得

#### フィルタリングとページネーション

フィルタリングについては、次のいずれかが可能です。

1. GraphQL の定義からフィルターパラメータを生成し、新しいフィルターが自動的に同期されるようにする（[POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/221749/diffs#diff-content-99fa4134f164348eb12207e36f4f325203311e1c) を参照）
    利点は自動的に生成されることです。欠点は、GraphQL が REST API の信頼できる唯一の情報源になることと、GraphQL API には異なる非推奨ポリシーがあることです。
2. GraphQL API と REST API の両方でフィルターが同じであることを保証するテストを追加する
    利点はテストでこれを保証できることですが、依然として手動でフィルターを追加する必要があります。

どちらを使用するにせよ、私たちは設計上のパリティを望んでおり、REST または GraphQL のいずれかにのみ更新をリリースすることは決してありません。

ページネーションについては、これらのエンドポイントにキーセットページネーションを要求し、クライアントには `page` 識別子をソート順から導出されたカーソルに置き換えるよう求めます。

#### 柔軟なレスポンス

私たちは、[スパースフィールドセット](https://jsonapi.org/format/#fetching-sparse-fieldsets)という JSON:API のコンセプトの一部を取り入れることで、GraphQL の柔軟性の一部を保持します。

1. デフォルトでは、ワークアイテムの `id`、`global_id`、`iid`、`title`、`title_html` のみを返します。
2. デフォルトでは、レスポンスの一部として機能やウィジェットは追加しません。
3. その他のトップレベルフィールドは、`fields` パラメータで明示的にリクエストする必要があります。
4. 機能／ウィジェットについては、別の `features` パラメータを追加します。
5. `features` 内のネストされたフィールドの選択は許可しません。

レスポンスはフィールド名に `snake_case` を使用し、GitLab REST API の他の部分と一貫させます。これはトップレベルフィールド、`features` キー、各機能内のネストされたフィールドに適用されます。

`features` は、私たちが最近 GraphQL に追加したフラット化された表現です。すべてのコンシューマーが切り替えたら、パリティのために古い `widgets` 配列を廃止する予定です。

スパースフィールドをサポートする理由は次のとおりです。

1. 不要なフィールドのシリアライズを回避する。
2. クライアントのペイロードを削減する。これは特に、コンテキストサイズを最小化する必要があるエージェントにとって重要となる場合がある。
3. API 内でフィールドがどのように使用されているかについての洞察が得られる。

注: 一覧取得エンドポイントでは、すべてのタイプの `features` のリクエストを許可しません。例えば、`hierarchy` 機能は単一のワークアイテムリクエストの一部としてのみ許可します。一覧取得エンドポイントの一部として `hierarchy` をリクエストした場合は、エラーを返します。

#### リクエストの例

- **ネームスペース内のワークアイテムを一覧取得する**

  ```shell
  curl --request GET \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items?fields=title,state,confidential&features=labels,assignees&work_item_type_id=task"
  ```

  この呼び出しは、`title`、`state`、`confidential` フィールドに加えて `labels` および `assignees` 機能をリクエストし、`task` タイプのワークアイテムを一覧取得します。

- **単一のワークアイテムを取得する**

  ```shell
  curl --request GET \
    --header "PRIVATE-TOKEN: <your_access_token>" \
    "https://gitlab.example.com/api/v4/projects/gitlab-org%2Fplan/-/work_items/42?features=labels,hierarchy"
  ```

  この呼び出しは、`id`、`iid`、`global_id`、`title`、`title_html` のみを含むワークアイテム `42` を返し、レスポンスに `labels` および `hierarchy` 機能を含めます。

### ワークアイテムの作成

ワークアイテムの作成は、GraphQL で使用している既存の機能サービスレイヤーへ変換しつつ、シンプルなままであるべきです。REST コントラクトは、機能の入力を単一の `features` オブジェクトにフラット化し、そのネストされたキーは GraphQL ウィジェット入力を反映します。

#### 作成リクエストの例

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

この例では、ネストされた構造が既存の GraphQL ウィジェット入力に沿ったフラット化された `features` オブジェクトを使用して、ワークアイテムを作成します。REST API は整数 ID を受け取り、現在 GraphQL の prepare フックによって生成されているものと同じサービスレイヤーのペイロードに変換します。

### ワークアイテムの更新

現在、更新は単一の `PATCH` エンドポイントを経由します。これは GraphQL の更新ミューテーションが変更を処理する方法を反映しています。コアフィールドはトップレベルで設定され、機能の変更は、ネストされたキーが GraphQL ウィジェット入力に沿ったフラット化された `features` オブジェクトを通じて行われます。これにより、サービスレイヤーへの変換が最小限に保たれ、REST と GraphQL のコントラクトが互いに近いものになります。

#### 更新リクエストの例

```shell
curl --request PATCH \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  --header "Content-Type: application/json" \
  --data '{
    "title": "Work Item REST API rollout",
    "state": "closed",
    "features": {
      "description": { "description": "Track the rollout milestones and metrics." },
      "labels": { "add_label_ids": [81], "remove_label_ids": [23, 47] }
    }
  }' \
  "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items/42"
```

この呼び出しは、ワークアイテム `42` のタイトルと状態を更新し、説明を更新し、フラット化された `features` オブジェクトを通じてラベルを調整します。

#### 機能ごとのエンドポイント（将来の検討事項）

GA の前に、クライアントが `features` ペイロード全体を再構築することなく単一の機能を更新できるよう、専用の機能ごとのエンドポイントを導入する可能性があります。これはより一般的な REST の形ですが、現在は実装されておらず、確約ではなくオープンな選択肢にとどまっています。私たちが想定している形の例を以下に示します。

```shell
curl --request PATCH \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  --header "Content-Type: application/json" \
  --data '{ "add_label_ids": [81], "remove_label_ids": [23, 47] }' \
  "https://gitlab.example.com/api/v4/groups/gitlab-org/-/work_items/42/labels"
```

このような機能固有のルートは、GraphQL 入力と同じフィールド名を再利用しながら、大きく多目的なペイロードを回避します。導入された場合、これらはメインの更新エンドポイントのフラット化された `features` オブジェクトを置き換えるのではなく、補完するものになります。

### ワークアイテムの削除

ワークアイテムの削除は、ワークアイテムリソースに対して `DELETE` リクエストを発行するという標準的な REST パターンに従います。ワークアイテムが削除されると、エンドポイントは成功時に `204 No Content` を返します。

#### 削除リクエストの例

```shell
curl --request DELETE \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.example.com/api/v4/projects/gitlab-org%2Fplan/-/work_items/42"
```

## ロールアウト計画

この API は `experimental` としてマークされ、`:work_item_rest_api` フラグ（ユーザーをアクターとしてデフォルトでオフ）を介して制御されます。REST API を正しく設計することが極めて重要であり、互換性を破壊する変更を導入できないため、API が私たちの期待を満たしていることを確信した後にのみ `experimental` タグを削除します。
