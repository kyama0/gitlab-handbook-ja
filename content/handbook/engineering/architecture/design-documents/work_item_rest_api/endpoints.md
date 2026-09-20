---
title: "ワークアイテム REST API のエンドポイント"
description: "ワークアイテム REST API のエンドポイントリファレンス。ルート、パラメータ、ペイロード、ページネーション、認可、フィーチャーフラグを説明します。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/work_item_rest_api/endpoints/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-16T20:18:13-04:00"
translated_at: "2026-09-20T02:14:23.155976+00:00"
translator: codex
stale: false
---

この API は活発に開発中で、フィーチャーフラグによって制御されているため、公開の `doc/api/` リファレンスページはまだありません。以下は、その将来のドキュメントの草案です。

以下のパスはすべて `/api/v4` からの相対パスです。各論理エンドポイントには 3 つの形式があります。

- `/namespaces/:id/-/work_items...`
- `/projects/:id/-/work_items...`
- `/groups/:id/-/work_items...`

いずれの形式でも、`:id` には数値 ID またはエスケープされていないフルパスを指定できます。

gitlab.com は EE で動作する一方、無料の名前空間は CE と同様に動作するため、利用可否はエディション別ではなくライセンスのティア別に示しています。**Free** は CE と EE の両ビルドのすべてのティアを意味します。**Premium** と **Ultimate** は、その項目を利用できるライセンスのティアを示します。一部の項目は EE ビルドにのみ含まれますが、ライセンスは不要です。それらは **EE ビルド**と表記しています。

## エンドポイントの概要 {#endpoint-summary}

| HTTP メソッド | パス | 目的 | 利用可否 |
|---|---|---|---|
| `GET` | — | ワークアイテムの一覧取得 | Free |
| `GET` | `/:work_item_iid` | 単一ワークアイテムの取得 | Free |
| `POST` | — | ワークアイテムの作成 | Free |
| `PATCH` | `/:work_item_iid` | ワークアイテムの更新 | Free |
| `DELETE` | `/:work_item_iid` | ワークアイテムの削除 | Free |
| `GET` | `/:work_item_iid/children` | 子の一覧取得 | Free |
| `POST` | `/:work_item_iid/children/:child_id` | 子の追加 | Free |
| `DELETE` | `/:work_item_iid/children/:child_id` | 子の関連付け解除 | Free |
| `PUT` | `/:work_item_iid/children/:child_id` | 子の並べ替え | Free |
| `GET` | `/:work_item_iid/notes` | ノートの一覧取得 | Free |
| `GET` | `/:work_item_iid/discussions` | ディスカッションの一覧取得 | Free |
| `GET` | `/:work_item_iid/discussions/:discussion_id` | 単一ディスカッションの取得 | Free |
| `GET` | `/:work_item_iid/closing_merge_requests` | アイテムをクローズする MR | Free |
| `GET` | `/:work_item_iid/related_merge_requests` | アイテムを参照する MR | Free |
| `GET` | `/:work_item_iid/related_branches` | アイテムを参照するブランチ | Free |
| `GET` | `/:work_item_iid/feature_flags` | アイテム上のフィーチャーフラグ | EE ビルド |
| `GET` | `/:work_item_iid/linked_items` | リンクされたワークアイテムの一覧取得 | Free |
| `GET` | `/:work_item_iid/linked_resources` | リンクされたリソース（Zoom）の一覧取得 | Free |
| `GET` | `/:work_item_iid/award_emoji` | 絵文字リアクションの一覧取得 | Free |
| `GET` | `/:work_item_iid/current_user_todos` | 現在のユーザーの To-Do の一覧取得 | Free |
| `GET` | `/:work_item_iid/email_participants` | Service Desk のメール参加者の一覧取得 | Free |

## フィールドと機能の選択 {#selecting-fields-and-features}

すべてのレスポンスには、常に `id`、`iid`、`global_id`、`title` の 4 つのフィールドが含まれます。それ以外はすべてオプトインで、`fields=` を通じて明示的にリクエストする必要があります。

<details>
<summary markdown="span">`fields` の全 25 個の値</summary>

| フィールド | 型 | 例 |
|---|---|---|
| `id` | integer | `1` |
| `global_id` | string | `gid://gitlab/WorkItem/1` |
| `iid` | integer | `1` |
| `title` | string | `Fix the bug` |
| `state` | string | `opened` |
| `confidential` | boolean | `false` |
| `imported` | boolean | `false` |
| `hidden` | boolean | `false` |
| `lock_version` | integer | `0` |
| `created_at` | datetime | `2022-08-17T12:46:35.053Z` |
| `updated_at` | datetime | `2022-11-14T17:22:01.470Z` |
| `closed_at` | datetime | `2022-11-15T08:30:55.232Z` |
| `title_html` | string | `<p>Fix the bug</p>` |
| `author` | object | `Author` エンティティ |
| `work_item_type` | object | `Type` エンティティ |
| `namespace` | object | `NamespaceBasic` エンティティ |
| `create_note_email` | string | `issue-1@example.com` |
| `duplicated_to_work_item_url` | string | `https://gitlab.example.com/groups/gitlab-org/-/work_items/2` |
| `moved_to_work_item_url` | string | `https://gitlab.example.com/groups/gitlab-org/-/work_items/3` |
| `reference` | string | `gitlab-org#1` |
| `web_url` | string | `https://gitlab.example.com/groups/gitlab-org/-/work_items/1` |
| `web_path` | string | `/groups/gitlab-org/-/work_items/1` |
| `user_permissions` | object | `Permissions` エンティティ |
| `user_discussions_count` | integer | `3` |
| `features` | object | 機能名をキーにします。次の表を参照してください |

</details>

`features` はデフォルトで空のため、リクエストしなければ機能関連の情報は返されません。配列である `assignees` を除き、すべての機能はオブジェクトです。12 個はすべてのティアで利用でき、残りの 10 個はライセンスに依存します。

<details>
<summary markdown="span">`features` の全 22 個の値とペイロード例</summary>

| 機能 | 利用可否 | 例 |
|---|---|---|
| `description` | Free | `{"description": "Fix the login bug", "description_html": "<p>Fix the login bug</p>", "edited": false, "last_edited_at": "2022-11-15T08:30:55.232Z", "last_edited_by": {…}, "task_completion_status": {…}}` |
| `assignees` | Free | `[{"id": 1, "username": "alice", …}]` |
| `labels` | Free | `{"allows_scoped_labels": true, "labels": [{…}]}` |
| `milestone` | Free | `{"id": 1, "iid": 1, "title": "19.2", …}` |
| `start_and_due_date` | Free | `{"start_date": "2022-08-17", "due_date": "2022-08-30", "roll_up": false}` |
| `designs` | Free | `{"design_collection": {"copy_state": "ready"}}` |
| `time_tracking` | Free | `{"time_estimate": 12600, "total_time_spent": 4500, "human_readable_attributes": {"time_estimate": "3h 30m", "total_time_spent": "1h 15m"}, "timelogs": […]}` |
| `error_tracking` | Free | `{"identifier": 12345}` |
| `hierarchy` | Free | `{"parent": {…}, "has_parent": true}` |
| `award_emoji` | Free | `{"upvotes": 5, "downvotes": 1, "new_custom_emoji_path": "/groups/gitlab-org/-/custom_emoji/new"}` |
| `development` | Free | `{"closing_merge_requests_count": 2, "will_auto_close_by_merge_request": false}` |
| `notifications` | Free | `{"subscribed": true}` |
| `color` | Premium | `{"color": "#A8DADC", "text_color": "#1D3557"}` |
| `progress` | Ultimate | `{"progress": 65, "current_value": 13, "start_value": 0, "end_value": 20, "updated_at": "2024-02-12T09:45:00Z"}` |
| `iteration` | Premium | `{"iteration": {…}}` |
| `health_status` | Ultimate | `{"health_status": "needs_attention"}` |
| `weight` | Premium | `{"weight": 3, "rolled_up_weight": 8, "rolled_up_completed_weight": 5}` |
| `requirement_legacy` | Ultimate | `{"legacy_iid": 1}` |
| `status` | Premium | `{"status": {"id": "gid://gitlab/WorkItems::Statuses::SystemDefined::Status/1", "name": "To do", "category": "to_do", "color": "#737278", …}}` |
| `verification_status` | Ultimate | `{"verification_status": "satisfied"}` |
| `linked_items` | EE ビルド | `{"blocking_count": 2, "blocked_by_count": 1}` |
| `custom_fields` | Premium | `{"custom_field_values": [{"custom_field": {"id": 1, "name": "Priority", "field_type": "single_select", …}, "value": "In progress", "selected_options": […]}]}` |

</details>

`fields` と `features` はどちらもカンマ区切りで、小文字に変換されます。既知のフィールド名や機能名ではない値を指定すると、不明な値を列挙した `400` が返されるため、タイプミスは無視されず検出されます。有効な機能でも、ワークアイテムのタイプがサポートしていない場合や、その名前空間にライセンスがない場合は、エラーにするのではなく、そのアイテムのレスポンスから省略します。これは GraphQL と同じ動作です。リストには複数のワークアイテムタイプが含まれるため、各アイテムは自身が持つ機能だけを返します。`hierarchy` はリストエンドポイントで明示的に許可されており、そこでの利用のために事前ロードされます。

## ページネーション {#pagination}

すべてのコレクションエンドポイントはキーセットページネーションを使用し、クライアントには不透明なカーソルとして公開します。リクエストは `cursor` と `per_page` を受け取ります。レスポンスには `X-Next-Cursor` と `X-Prev-Cursor` に加えて、`rel="next"` と `rel="prev"` を持つ `Link` ヘッダーが含まれます。

リストエンドポイントの `popularity` や `milestone_due` によるソートなど、一部の並び順にはキーセット形式がありません。その場合、サーバーは同じ不透明なカーソルの内部でオフセットによってページを取得するため、ソートやエンドポイントによってコントラクトが変わることはありません。

読み取り不可のレコードは、ページを取得した**後**に除外されるため、`X-Next-Cursor` が存在していても、ページ内のアイテム数が `per_page` 未満になったり、まったくなくなったりする場合があります。クライアントは、件数が少ないページや空のページをコレクションの終端と見なさず、カーソルをたどる必要があります。

ディスカッションのページネーションは、REST が GraphQL リゾルバーおよび Rails コントローラーと共有する `Issuable::DiscussionsListService` が処理します。

## 認可 {#authorization}

1. **認証。** 公開プロジェクトとグループに匿名でアクセスできるリストエンドポイントを除き、すべてのエンドポイントは `authenticate!` を呼び出します。認証なしで書き込める経路はありません。
1. **権限。** 各ルートは呼び出し元が持つ必要のある権限を宣言し、ワークアイテムのコンテナーに対して評価します。
1. **CI ジョブトークンポリシー。** 呼び出し元が CI ジョブトークンの場合にのみ実行する、より限定的なチェックです。パーソナルアクセストークン、OAuth、セッションによるリクエストには関係しません。

| グループ | 認証 | 権限 | CI ジョブトークン |
|---|---|---|---|
| 一覧取得 | 不要 | `:read_work_item` | `namespaces` と `projects` 形式では `read_work_items` |
| 単一アイテムの取得、すべての GET サブリソース | 必要 | `:read_work_item` | `namespaces` と `projects` 形式では `read_work_items`（下記の例外を参照） |
| 作成 | 必要 | `:create_work_item` | 受け付けない |
| 更新、子の追加/関連付け解除/並べ替え | 必要 | `:update_work_item` | 受け付けない |
| 削除 | 必要 | `:delete_work_item` | 受け付けない |

最後の列の「受け付けない」は、チェックがないのではなく、明示的な拒否を意味します。`job_token_policies` を宣言していないルートは、ジョブトークンのチェックで `403` と「このアクションは CI/CD ジョブトークンでは認可されていません」というメッセージを返して失敗します。それらのルートでも、通常どおり認証と権限チェックを行います。この列は、CI ジョブトークンをそれらの認証情報として使用できないことだけを示しています。トークンをそのトークン自身のプロジェクトに対して使用する場合や、許可リストのエントリがデフォルト権限のままである場合など、一部の設定ではこのチェックがバイパスされます。そのため、これはすべてのデプロイメントでの保証ではなく、ルートの宣言を示しています。

コンテナーの境界: `namespaces` 形式は、ID が指す対象に応じて `group` または `project` に解決されます。

例外: email_participants の `groups` 形式は、他の GET サブリソースとは異なり、ジョブトークンポリシーを宣言しています。

コンテナー自体が不可視の場合も、個別のアイテムが読み取り不可の場合も、拒否されたリクエストは `403` ではなく `404` を返します。フィーチャーフラグがオフの場合は別で、`403` を返します。

## フィーチャーフラグ {#feature-flags}

1. `work_item_rest_api`（タイプ `wip`、デフォルトはオフ、ユーザー単位、18.9 で導入）は、単一アイテムの取得、作成、更新、削除、および GET サブリソースを制御します。オフの間、これらは `403` を返します。リストエンドポイントは制御し**ません**。[ロールアウトの Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/588874)。
1. `work_item_rest_api_index`（タイプ `wip`、19.1 で導入、削除済み）は、以前リストエンドポイントを独立して制御していました。[ロールアウトの Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/601895)。
1. `work_item_rest_api_frontend_users`（タイプ `wip`、デフォルトはオフ、19.0 で導入）は、どのエンドポイントも制御しません。Vue のリストビューとボードビューが GraphQL の代わりに REST でワークアイテムを取得するかどうかだけを制御します。[ロールアウトの Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/596882)。

私たちがロールアウトを担当していない別のフラグも、エンドポイントが返す内容を変えます。group::work items が所有する `explicit_mr_work_item_relations` は、関連マージリクエストのレスポンスを拡張します。ここでは列挙せず、[該当するエンドポイント](#related-merge-requests)で説明しています。

## コアエンドポイント {#core-endpoints}

以下では、各エンドポイントの HTTP メソッド、パス、目的を示します。パラメータとレスポンスの詳細は折りたたまれています。確認するにはエンドポイントを展開してください。

### 一覧取得 {#list}

`GET /-/work_items`

指定したコンテナー内で、現在のユーザーに表示されるワークアイテムを一覧取得します（匿名での取得については[認可](#authorization)を参照してください）。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `order_by` | string | いいえ | デフォルトは `created_at` |
| `sort` | string | いいえ | デフォルトは `desc` |
| `fields` | string | いいえ | カンマ区切りのフィールド一覧。[フィールドと機能の選択](#selecting-fields-and-features)を参照してください |
| `features` | string | いいえ | カンマ区切りの機能一覧。デフォルトは空 |

フィルター（すべて任意。配列型のパラメータはカンマ区切りの値を受け取ります）:

| グループ | フィルター |
|---|---|
| 基本 | `ids`, `iids`, `state` (`opened`/`closed`/`all`), `work_item_type_ids` XOR `work_item_type_names`, `author_username`, `assignee_usernames` XOR `assignee_wildcard_id` (`None`/`Any`/`Me`), `label_name`, `milestone_title` XOR `milestone_wildcard_id` (`None`/`Any`/`Upcoming`/`Started`), `my_reaction_emoji`, `created_before`/`created_after`, `updated_before`/`updated_after`, `closed_before`/`closed_after`, `due_before`/`due_after`, `search`, `in` (`title`,`description`), `timeframe[start]`/`timeframe[end]`, `confidential`, `subscribed`, `parent_ids` XOR `parent_wildcard_id`, `include_descendant_work_items`, `release_tag` XOR `release_tag_wildcard_id`, `crm_contact_id`, `crm_organization_id` |
| `not[...]` | `assignee_usernames`, `author_username`, `label_name`, `milestone_title` XOR `milestone_wildcard_id`, `my_reaction_emoji`, `parent_ids`, `release_tag`, `work_item_type_ids` XOR `work_item_type_names` |
| `not[...]`（ライセンスが必要） | `iteration_id` XOR `iteration_wildcard_id` (Premium)、`health_status_filter` (Ultimate)、`weight` (Premium)。否定の `health_status_filter` はヘルスステータス値の配列を受け取ります。これは、`none` と `any` も受け取る単一の文字列であるトップレベルのフィルターとは異なります。 |
| `or[...]` | `assignee_usernames`, `author_usernames`, `label_names` |
| ライセンスが必要 | `iteration_id` XOR `iteration_wildcard_id`, `iteration_cadence_id` (Premium), `health_status_filter` (Ultimate), `weight` XOR `weight_wildcard_id` (Premium), `custom_field[]` (Premium), `status[id]` XOR `status[name]` (Premium), `verification_status_widget[verification_status]` (Ultimate) |
| グループ/名前空間のみ（`projects` 形式では受け付けない） | `include_ancestors`、`include_descendants`、`include_archived`（デフォルトは `false`） |

レスポンス: `WorkItemBasic` の配列。

</details>

### 取得 {#get}

`GET /-/work_items/:work_item_iid`

単一のワークアイテムを返します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `fields` | string | いいえ | カンマ区切りのフィールド一覧 |
| `features` | string | いいえ | カンマ区切りの機能一覧 |

レスポンス: `WorkItemDetail`。ルートのフィールドは `WorkItemBasic` と同一です。Ultimate では、`health_status` 機能に追加の詳細（`count`、`rolled_up_health_status`）が含まれます。`ai_workflows` スコープのトークンでアクセスできる唯一のエンドポイントです。

</details>

### 作成 {#create}

`POST /-/work_items` は `201` を返します。

ワークアイテムを作成します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | string | はい | — |
| `work_item_type_name` / `work_item_type_id` | string / integer | 少なくとも一方が必須 | ワークアイテムのタイプを選択します |
| `confidential` | boolean | いいえ | — |
| `created_at` | datetime | いいえ | 管理者/オーナーのみ |
| `fields` | string | いいえ | レスポンスに含めるフィールド |
| `features` | object | いいえ | 機能名をキーとする機能のペイロード。[機能のペイロード](#feature-payloads)を参照してください |

レスポンス: `WorkItemBasic`。

</details>

### 更新 {#update}

`PATCH /-/work_items/:work_item_iid` は `200` を返します。

ワークアイテムを更新します。`PATCH` のみで、ワークアイテムリソース自体に `PUT` はありません（API 内で唯一の `PUT` は子の並べ替えです）。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `title` | string | いいえ | — |
| `confidential` | boolean | いいえ | — |
| `state_event` | string | いいえ | `close` または `reopen` |
| `fields` | string | いいえ | レスポンスに含めるフィールド |
| `features` | object | いいえ | 機能名をキーとする機能のペイロード。[機能のペイロード](#feature-payloads)を参照してください |

リクエストで送信した `features` のキーは、レスポンスで返す機能のペイロードも選択します。ワークアイテムのタイプがサポートしていないウィジェットの場合は、`unsupported_widgets` のリストを伴う `400` を返します。タイプはサポートしていてもコンテナーで無効になっているウィジェットは、エラーにせず、通知なしに除外します。

レスポンス: `WorkItemBasic`。

</details>

### 削除 {#delete}

`DELETE /-/work_items/:work_item_iid` は `204` を返し、本文はありません。

### 機能のペイロード {#feature-payloads}

`features` は機能名をキーとするオブジェクトで、各機能に固有のペイロードがあります。作成と更新で受け付ける機能の集合が異なり、一部の機能はそれぞれ異なるキーを受け取るため、以下では両方を並べて示します。「受け付けない」は、その HTTP メソッドではその機能が拒否されることを意味します。

| 機能 | 利用可否 | 作成時のペイロード | 更新時のペイロード |
|---|---|---|---|
| `description` | Free | `description` <strong class="text-danger">必須</strong> | `description` <strong class="text-danger">必須</strong> |
| `assignees` | Free | `assignee_ids` <strong class="text-danger">必須、最大 30 件</strong> | `assignee_ids` <strong class="text-danger">必須、最大 30 件</strong> |
| `labels` | Free | `label_ids` <strong class="text-danger">必須、最大 30 件</strong> | `add_label_ids`、`remove_label_ids` <strong class="text-danger">それぞれ最大 30 件</strong> |
| `milestone` | Free | `milestone_id`。クリアするには `null` を送信します | 作成時と同じ |
| `hierarchy` | Free | `parent_id` | `parent_id`。`null` で親を解除します |
| `start_and_due_date` | Free | `start_date`, `due_date` | 作成時と同じ |
| `linked_items` | Free | `work_items_ids` <strong class="text-danger">必須、最大 30 件</strong>、`link_type`（デフォルトの `relates_to` のみ） | 受け付けない |
| `crm_contacts` | Free | `contact_ids` <strong class="text-danger">必須</strong> | `contact_ids` <strong class="text-danger">必須</strong>、`operation_mode`（デフォルトは `REPLACE`、ほかに `APPEND`、`REMOVE`） |
| `notes` | Free | 受け付けない | `discussion_locked` <strong class="text-danger">必須</strong> |
| `notifications` | Free | 受け付けない | `subscribed` <strong class="text-danger">必須</strong> |
| `current_user_todos` | Free | 受け付けない | `action` <strong class="text-danger">必須</strong>（`mark_as_done` または `add`）、`todo_id`（省略するとアイテム上のすべての To-Do を更新） |
| `award_emoji` | Free | 受け付けない | `action` <strong class="text-danger">必須</strong>（`add`、`remove`、`toggle` のいずれか）、`name` <strong class="text-danger">必須</strong> |
| `time_tracking` | Free | 受け付けない | `1h 30m` などの読みやすい形式の `time_estimate` と、`time_spent` <strong class="text-danger">必須</strong>、`spent_at`、`summary` を含む `timelog` |
| `color` | Premium | `color` <strong class="text-danger">必須</strong>。`#e24329` などの 16 進数コード | 作成時と同じ |
| `health_status` | Ultimate | `health_status` (`on_track`, `needs_attention`, `at_risk`) | 作成時と同じ |
| `iteration` | Premium | `iteration_id`。クリアするには `null` を送信します | 作成時と同じ |
| `weight` | Premium | `weight`。クリアするには `null` を送信します | 作成時と同じ |
| `status` | Premium | `status_id`。名前空間に対して、カスタムまたはシステム定義のステータスとして解決します | 作成時と同じ |
| `custom_fields` | Premium | 各エントリに `custom_field_id` と、フィールドの型に合った `text_value`、`number_value`、`date_value`、`selected_option_ids` のいずれかを持つ配列 | 作成時と同じ。<strong class="text-danger">最大 30 エントリ</strong> |
| `progress` | Ultimate | 受け付けない | `current_value` <strong class="text-danger">必須</strong>、`start_value`、`end_value` |
| `verification_status` | Ultimate | 受け付けない | `verification_status` <strong class="text-danger">必須</strong> |

`labels` には注意が必要です。作成時には `label_ids` を受け取りますが、更新時には `add_label_ids`/`remove_label_ids` を受け取るため、同じ機能名でも、一方の HTTP メソッドでは「これらを設定」、他方では「これらを変更」を意味します。

## サブリソースエンドポイント {#sub-resource-endpoints}

残りのエンドポイントはすべて、単一のワークアイテムに属します。いずれもパスに `work_item_iid` を受け取り、`:read_work_item` が必要で、`work_item_rest_api` フラグによって制御されます。特に断りのない限り、すべて `GET` です。以下では、公開する概念別に分類しています。

## 階層エンドポイント {#hierarchy-endpoints}

これらはワークアイテムの子を扱います。3 つの書き込み操作は、理由にかかわらず子が見つからない場合に同一の汎用的な `404` を返すため、存在の有無を探ることはできません。

### 子の一覧取得 {#list-children}

`GET /-/work_items/:work_item_iid/children`

ワークアイテムの子を一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | 親ワークアイテムの IID。パスパラメータ |
| `state` | string | いいえ | `opened` または `closed`。省略すると両方を返します |
| `fields` | string | いいえ | カンマ区切りのフィールド一覧 |
| `features` | string | いいえ | カンマ区切りの機能一覧 |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |

レスポンス: `WorkItemBasic` の配列。

</details>

### 子の追加 {#attach-a-child}

`POST /-/work_items/:work_item_iid/children/:child_id` は `201` を返します。

既存のワークアイテムを子として関連付けます。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | 親ワークアイテムの IID。パスパラメータ |
| `child_id` | integer | はい | 関連付けるワークアイテムの数値 ID。パスパラメータ |

子は別の名前空間に存在することもあるため、`child_id` は子の iid ではなく数値 ID です。`global_id` フィールドで返される `gid://` 値でもありません。

レスポンス: `WorkItemBasic` としての子。ワークアイテムがすでにこの親の子である場合は `409`、無効な階層の場合は `422` を返します。

</details>

### 子の関連付け解除 {#detach-a-child}

`DELETE /-/work_items/:work_item_iid/children/:child_id` は `204` を返し、本文はありません。

親と子のリンクを削除します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | 親ワークアイテムの IID。パスパラメータ |
| `child_id` | integer | はい | 子の数値 ID。パスパラメータ |

リンクを削除できない場合は `422` を返します。

</details>

### 子の並べ替え {#reorder-a-child}

`PUT /-/work_items/:work_item_iid/children/:child_id` は `200` を返します。

同じ親を持つ子の間で、子の位置を移動します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | 親ワークアイテムの IID。パスパラメータ |
| `child_id` | integer | はい | 移動する子の数値 ID。パスパラメータ |
| `move_before_id` | integer | いいえ | この ID の兄弟アイテムの前に移動します。数値 ID |
| `move_after_id` | integer | いいえ | この ID の兄弟アイテムの後に移動します。数値 ID |

`move_before_id` と `move_after_id` の少なくとも一方が必要で、位置の基準となる同じ親を持つ子は、呼び出し元が読み取れる必要があります。

レスポンス: `WorkItemBasic` としての子。移動が無効な場合は `422` を返します。

</details>

## ノートエンドポイント {#notes-endpoints}

ノートは、ワークアイテム上の個々のコメントおよびシステムが生成するアクティビティの記録です。現在利用できるノート操作は一覧取得のみで、今後追加する予定です。

### ノートの一覧取得 {#list-notes}

`GET /-/work_items/:work_item_iid/notes`

ワークアイテム上のノートを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `order_by` | string | いいえ | デフォルトは `created_at`、ほかに `updated_at` |
| `sort` | string | いいえ | デフォルトは `asc`、ほかに `desc` |
| `activity_filter` | string | いいえ | デフォルトは `all_notes`、ほかに `only_comments`、`only_activity` |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |

`:read_work_item` に加えて `:read_note` が必要です。

レスポンス: `Note` の配列。

</details>

## ディスカッションエンドポイント {#discussion-endpoints}

ディスカッションはノートのスレッドです。両エンドポイントとも、`:read_work_item` に加えて `:read_note` が必要です。

### ディスカッションの一覧取得 {#list-discussions}

`GET /-/work_items/:work_item_iid/discussions`

ワークアイテム上のディスカッションを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `sort` | string | いいえ | デフォルトは `asc`、ほかに `desc` |
| `activity_filter` | string | いいえ | デフォルトは `all_notes`、ほかに `only_comments`、`only_activity` |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | デフォルトは `20`、最大 `100` |

レスポンス: `Discussion` の配列。

</details>

### ディスカッションの取得 {#get-a-discussion}

`GET /-/work_items/:work_item_iid/discussions/:discussion_id`

単一のディスカッションを返します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `discussion_id` | string | はい | ディスカッションの ID。パスパラメータ |

レスポンス: 単一の `Discussion`。ラベルや状態の変更などのリソースイベントから生成されたディスカッションには `notes` 内の行がなく、ここでは取得できないため、一覧レスポンスから取得した ID で `404` が返される場合があります。GraphQL も同じ動作です。

</details>

## 開発ウィジェットのエンドポイント {#development-widget-endpoints}

この 4 つは、ワークアイテムを関連するマージリクエスト、ブランチ、フィーチャーフラグに結び付ける開発ウィジェットを支えます。いずれもプロジェクトスコープの概念を扱うため、グループレベルのワークアイテムではそれぞれ空のコレクションを返します。

### クローズするマージリクエスト {#closing-merge-requests}

`GET /-/work_items/:work_item_iid/closing_merge_requests`

ワークアイテムをクローズするマージリクエストを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: `id`、`from_mr_description`、ネストされた `merge_request` を公開する `ClosingMergeRequest` の配列。

別のプロジェクトのマージリクエストでもクローズできるため、クエリのスコープはワークアイテムのプロジェクトに限定されません。SQL で可視性を適用するため、ページの件数が不足することはありません。

</details>

### 関連するマージリクエスト {#related-merge-requests}

`GET /-/work_items/:work_item_iid/related_merge_requests`

ワークアイテムを参照するマージリクエストを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: `MergeRequestBasic` の配列。

この集合は GraphQL の開発ウィジェットを支えるサービスと同じサービスで導出するため、REST は別の方法で集合を導出せず、GraphQL に追従します。結果は `iid` 順に並べ、同値の場合は `id` で順序を決めることで、ページ間のページネーションを安定させます。`explicit_mr_work_item_relations` フラグが有効な場合、レスポンスにはノート内で参照するマージリクエストだけでなく、ワークアイテムに明示的に関連付けられたマージリクエストも含まれます。両方に該当するマージリクエストは 1 回だけ返します。

</details>

### 関連するブランチ {#related-branches}

`GET /-/work_items/:work_item_iid/related_branches`

名前がワークアイテムを参照しているブランチを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: `name`、`compare_path`、`pipeline_status` を持つ `RelatedBranch` の配列。

ブランチはデータベースではなく Gitaly から取得するため、名前順に並べ、メモリ内でページネーションを行います。`read_code` を持たないユーザーには空の配列を返します。

</details>

### フィーチャーフラグ {#feature-flags-1}

`GET /-/work_items/:work_item_iid/feature_flags`

ワークアイテムにリンクされたフィーチャーフラグを一覧取得します。EE ビルドのみで利用でき、ライセンスは不要です。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: `id`、`name`、`active`、`path`、`reference` を持つ `FeatureFlag` の配列。

読み取り不可のフラグはページネーションの実行前に除外するため、実行後に除外する[ページネーション](#pagination)で説明したエンドポイントとは異なり、ページの件数が不足することはありません。

</details>

## その他のサブリソースエンドポイント {#other-sub-resource-endpoints}

これらはそれぞれ 1 つの概念を公開し、上記の規約以外に共通点はありません。

### リンクされたアイテム {#linked-items}

`GET /-/work_items/:work_item_iid/linked_items`

このワークアイテムにリンクされたワークアイテムを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `state` | string | いいえ | `opened` または `closed` |
| `link_type` | string | いいえ | `relates_to`。Premium では `blocks` と `is_blocked_by` も指定可能 |
| `fields` | string | いいえ | カンマ区切りのフィールド一覧 |
| `features` | string | いいえ | カンマ区切りの機能一覧 |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |

レスポンス: `WorkItemBasic` に `link_id`、`link_type`、`link_created_at`、`link_updated_at` を追加した `LinkedWorkItem` の配列。

</details>

### リンクされたリソース {#linked-resources}

`GET /-/work_items/:work_item_iid/linked_resources`

リンクされた外部リソースを一覧取得します。現在は Zoom のリンクのみです。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: 単一の `url` フィールドを公開する `LinkedResource` の配列。

</details>

### 絵文字リアクション {#emoji-reactions}

`GET /-/work_items/:work_item_iid/award_emoji`

ワークアイテム上の絵文字リアクションを一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

パスの `work_item_iid` に加えて、`cursor` と `per_page` を受け取ります。

レスポンス: `AwardEmoji` の配列。

</details>

### 現在のユーザーの To-Do {#current-user-to-dos}

`GET /-/work_items/:work_item_iid/current_user_todos`

呼び出し元ユーザーの、ワークアイテム上の To-Do を一覧取得します。常にそのユーザーにスコープが限定され、他のユーザーの To-Do を読み取る方法はありません。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `state` | string | いいえ | `pending` または `done`。省略すると両方を返します |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |

レスポンス: `Todo` の配列。

</details>

### メール参加者 {#email-participants}

`GET /-/work_items/:work_item_iid/email_participants`

ワークアイテム上の Service Desk のメール参加者を一覧取得します。

<details>
<summary markdown="span">パラメータとレスポンス</summary>

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `work_item_iid` | integer | はい | ワークアイテムの IID。パスパラメータ |
| `fields` | string | いいえ | カンマ区切りのフィールド一覧。以下を参照してください |
| `cursor` | string | いいえ | キーセットページネーションのカーソル |
| `per_page` | integer | いいえ | 1 ページの件数。デフォルトは `20` |

このエンドポイントには、ワークアイテムのフィールド一覧とは関係のない独自の `fields` があります。デフォルトの `id` と `email` に加え、`created_at` と `updated_at` を指定できます。メールアドレスは呼び出し元の権限に応じてマスクされます。

レスポンス: `EmailParticipant` の配列。ワークアイテムのタイプにメール参加者ウィジェットがない場合は `404` を返します。

このエンドポイントには、API の他のすべてのルートと異なる点が 2 つあります。機能カテゴリが `portfolio_management` ではなく `service_desk` であることと、グループスコープのルートで唯一ジョブトークンポリシーを宣言していることです。

</details>
