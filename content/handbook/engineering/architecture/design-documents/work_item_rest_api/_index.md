---
title: "ワークアイテム REST API"
description: "GitLab REST 規約に沿ったリソース指向インターフェースである Work Item REST API の設計ドキュメント。"
status: ongoing
creation-date: "2026-02-05"
authors: ["@nicolasdular", "@mdangelo6", "@msaleiko", "@daniyalAD", "@brytannia"]
coaches: ["ntepluhina", "@engwan"]
dris: []
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/work_item_rest_api/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-16T20:18:13-04:00"
translated_at: "2026-09-20T02:14:23.155976+00:00"
translator: codex
stale: false
---


{{< engineering/design-document-header >}}


## 概要 {#summary}

ワークアイテム REST API は、ワークアイテムアーキテクチャを、GitLab の広い REST 規約に沿ったファーストクラスのリソース指向インターフェースで拡張します。GraphQL を採用することなく、Issue、インシデント、タスク、エピック、将来のタイプを含む単一のワークアイテムドメインモデルを維持しながら、サードパーティの統合、自動化、CLI ツールがワークアイテムにアクセスできるようにします。このドキュメントでは、REST サーフェスの基本設計、その進化モデル、および GraphQL API との段階的な機能パリティに必要なバックエンドコンポーネントを提案します。

## 動機 {#motivation}

ワークアイテムは GitLab 全体の計画エンティティを表す優先フレームワークとなっています。既存の GraphQL エンドポイントは幅広さを提供していますが、多くのユーザーが REST API に依存または好んでいます。ドキュメント化された安定した REST インターフェースを確立することで、ワークアイテムの採用を促進し、レガシー Issue API からの移行を簡素化し、既存の REST API と GraphQL API の間のビジネスロジックの重複を削減します。

### 目標 {#goals}

- 既存の GitLab REST パターンと認証フローに沿った、ワークアイテム向けのバージョン付き REST サーフェスを提供する。
- REST API と GraphQL API 間の機能パリティを設計する。
- クライアントの効率を最大化するためにレスポンスを形成する際の柔軟性を提供する。
- GraphQL API と REST API の切り替えが簡単になるよう、パラメータとレスポンスのパリティを目指す。
- GraphQL から REST へのエンドポイント切り替えを望む際、ユーザーと内部の両方に優れた開発者エクスペリエンスを提供する。

### 非目標 {#non-goals}

- ワークアイテム GraphQL API の置き換え。

## 提案 {#proposal}

以下のエンドポイントでワークアイテム REST API を公開します:

1. `/namespaces/:full_path/-/work_items`。
    注目すべき点として、`full_path` のみをサポートします。ID は `Namespace` ID である必要があり、私たちは API でプロジェクトの Namespace ID を透過的に公開していないためです。これは開発者エクスペリエンスと機能のトレードオフです。このエンドポイントは主に内部的に使用されると予想されます。
2. `/projects/:id_or_full_path/-/work_items` と `/groups/:id_or_full_path/-/work_items`
    既存の Issue エンドポイントからの簡単な移行のため、`/groups` と `/projects` のエンドポイントも導入します。この場合、グループまたはプロジェクトの ID を API で共有しているため、ID も許可します。

### ワークアイテムのリストと単一ワークアイテムの取得 {#listing-and-returning-single-work-items}

#### フィルタリングとページネーション {#filtering-and-pagination}

フィルタリングには次のいずれかを使用できます:

1. GraphQL 定義からフィルターパラメータを生成し、新しいフィルターが自動的に同期される（[POC](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/221749/diffs#diff-content-99fa4134f164348eb12207e36f4f325203311e1c)を参照）
    自動的に生成されるという利点があります。デメリットは、GraphQL が REST API の真実の源であり、GraphQL API とは異なる廃止ポリシーがあることです。
2. フィルターが GraphQL API と REST API の両方で同じであることを保証するテストを追加する
    テストで確認できるという利点がありますが、依然として手動で追加する必要があります。

どちらを使用するにしても、設計でパリティを求め、REST または GraphQL のみの更新はリリースしません。

すべてのエンドポイントでキーセットベースのページネーションを使用します。その仕組みは[エンドポイントリファレンス](endpoints.md#pagination)で説明しています。

#### 柔軟なレスポンス {#flexible-response}

[スパースフィールドセット](https://jsonapi.org/format/#fetching-sparse-fieldsets)の JSON:API コンセプトの一部を適用することで、GraphQL の柔軟性の一部を保持します。

1. 常に返すのは `id`、`global_id`、`iid`、`title` のみです。その他のフィールドは明示的にリクエストする必要があります。
2. デフォルトでは、レスポンスの一部として機能やウィジェットは追加されません。
3. その他のトップレベルフィールドは `fields` パラメータで明示的にリクエストする必要があります。
4. 機能/ウィジェットには別の `features` パラメータを追加します。
5. `features` 内のネストされたフィールドの選択は許可しません。

レスポンスは、GitLab REST API の他の部分と一貫するように、フィールド名に `snake_case` を使用します。これはトップレベルフィールド、`features` キー、および各機能内のネストされたフィールドに適用されます。

`features` は最近 GraphQL に追加したフラット化された表現です。すべてのコンシューマーが切り替えたら、パリティのために古い `widgets` 配列の廃止を計画しています。

スパースフィールドをサポートする理由:

1. 不要なフィールドのシリアライズを避けます。
2. クライアントのペイロードを削減します。これはコンテキストサイズを最小化する必要があるエージェントにとって特に重要です。
3. API 内でフィールドがどのように使用されているかについての洞察を提供します。

すべての `features` の値をリストエンドポイントで利用できます。`hierarchy` はそこで親の可視性を事前ロードするため、N+1 クエリを発生させません。リストのレスポンスに含めるには負荷が高すぎる機能は、リクエストを拒否するのではなく、別のリスト用エンティティまたはサブリソースエンドポイントに分割します。

#### リクエスト例 {#example-requests}

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

  このコールはワークアイテム `42` を `id`、`iid`、`global_id`、`title` のみとともに返し、レスポンスに `labels` と `hierarchy` 機能を含めます。

### ワークアイテムの作成 {#creating-work-items}

ワークアイテムの作成は、GraphQL に使用する既存の機能サービス層に変換しながらも簡単である必要があります。REST コントラクトは、機能の入力を GraphQL ウィジェット入力を反映した単一の `features` オブジェクトにフラット化します。

#### 作成リクエスト例 {#example-create-request}

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

### ワークアイテムの更新 {#updating-work-items}

現在、更新は単一の `PATCH` エンドポイントを通じて行われます。これは GraphQL の更新ミューテーションが変更を扱う方法を反映しており、コアフィールドはトップレベルで設定され、機能の変更は GraphQL ウィジェット入力に合わせたネストキーを持つフラット化された `features` オブジェクトを通じて流れます。これにより、サービス層への変換を最小限に抑え、REST と GraphQL のコントラクトを互いに近く保てます。

#### 更新リクエスト例 {#example-update-request}

```shell
curl --request PATCH \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  --header "Content-Type: application/json" \
  --data '{
    "title": "Work Item REST API rollout",
    "state_event": "close",
    "features": {
      "description": { "description": "Track the rollout milestones and metrics." },
      "labels": { "add_label_ids": [81], "remove_label_ids": [23, 47] }
    }
  }' \
  "https://gitlab.example.com/api/v4/namespaces/gitlab-org%2Fplan/-/work_items/42"
```

このコールは以下を行います。

- ワークアイテム `42` のタイトルを更新します
- `state_event` を通じてクローズします
- 説明を更新します
- フラット化された `features` オブジェクトを通じてラベルを調整します

#### 機能ごとのエンドポイント（将来の検討事項） {#per-feature-endpoints-future-consideration}

GA 前に、クライアントが `features` ペイロード全体を再構築せずに単一の機能を更新できるよう、機能ごとの専用エンドポイントを導入する可能性があります。これはより典型的な REST の形ですが、現時点では実装されておらず、コミットメントではなく未解決の選択肢です。想定している形の例:

```shell
curl --request PATCH \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  --header "Content-Type: application/json" \
  --data '{ "add_label_ids": [81], "remove_label_ids": [23, 47] }' \
  "https://gitlab.example.com/api/v4/groups/gitlab-org/-/work_items/42/labels"
```

このような機能固有のルートは、GraphQL 入力と同じフィールド名を再利用しながら、大きな多目的ペイロードを避けます。導入される場合、それらはメインの更新エンドポイント上のフラット化された `features` オブジェクトを置き換えるのではなく、補完します。

### ワークアイテムの削除 {#deleting-work-items}

ワークアイテムの削除は、ワークアイテムリソースに `DELETE` リクエストを発行することで標準的な REST パターンに従います。ワークアイテムが削除されると、成功時にエンドポイントは `204 No Content` を返します。

#### 削除リクエスト例 {#example-delete-request}

```shell
curl --request DELETE \
  --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.example.com/api/v4/projects/gitlab-org%2Fplan/-/work_items/42"
```

## 実装済みのエンドポイント {#implemented-endpoints}

すべてのルート、パラメータ、ペイロード、ページネーション方式、フィーチャーフラグを網羅したエンドポイントリファレンスは、独立したページの[ワークアイテム REST API のエンドポイント](endpoints.md)にあります。API がフィーチャーフラグによる制御を終了するまでは公開の `doc/api/` ページの代わりとなり、その時点でそちらに移動します。

## ロールアウト計画 {#rollout-plan}

API は `experimental` とマークされ、すべてのルートが `hidden` になっているため、公開 API リファレンスにはまだ一切表示されません。REST API を正確に実装することが重要であり、公開後は破壊的な変更を導入できないため、API が期待を満たすことを確信した後にのみ `experimental` タグを削除します。

フラグの適用範囲は一様ではなく、何をまだ変更できるかを判断する際には、その違いが重要です。

1. 単一ワークアイテムの取得、作成、更新、削除、サブリソースの各エンドポイントは、`work_item_rest_api` フラグ（ユーザーをアクターとし、デフォルトはオフ）で制御されます。無効な場合は `403` を返します。
1. リストエンドポイントはロールアウトが完了しており、フラグによる制御を終了しています。ロールアウト中は `work_item_rest_api_index` で制御していましたが、このフラグを全体で有効にして 1 週間問題がなかったため削除しました。このエンドポイントは認証も不要で、GraphQL API と同様に、公開プロジェクトとグループのワークアイテムへの匿名リクエストが成功します。破壊的な変更に対する保護は、現在では `hidden` と `experimental` のステータスのみです。
1. `work_item_rest_api_frontend_users` はどのエンドポイントも制御しません。ワークアイテムのリストとボードのフロントエンドが、GraphQL の代わりに REST からリストを読み取るかどうかだけを制御します。

## 決定事項の記録 {#decision-registry}

1. [Issue REST API を拡張するのではなく、専用のワークアイテム REST API を構築します](https://gitlab.com/gitlab-org/gitlab/-/issues/368055#note_1227097586)。長期的には Issue API の非推奨化を目指します。

   その他のワークアイテムタイプ（要件、テストケース、目標、主要な成果）はタスクのウィジェットセットを共有しており、同じ機能差の問題に直面することになります。専用 API により、ワークアイテムに必要な柔軟性を確保できます。

1. [REST API を GraphQL から自動生成するのではなく、手書きで実装します](https://gitlab.com/gitlab-org/gitlab/-/issues/368055#note_1304000657)。

   API Vision Working Group の REST ラッパーの PoC は REST v5 を対象としており、機能がそろうまでに長すぎる時間がかかる見込みでした。API のバージョニングと、GraphQL と REST で異なる非推奨化ポリシーという 2 つの阻害要因は、解決されませんでした。

1. [ワークアイテム GraphQL API が Alpha を終了し、データモデルが安定するまで REST API を延期します](https://gitlab.com/gitlab-org/gitlab/-/issues/368055#note_1243016134)。

   それより早く REST を定義すると、破壊的な変更が避けられなくなっていました。REST での破壊的な変更は、Alpha の GraphQL API で行う場合よりもはるかに困難です。これが、以下のロールアウトの決定事項でも再び登場する、フラグの背後で実験する姿勢の起点です。

1. [この作業の一環としてエピック REST API を非推奨化しません](https://gitlab.com/gitlab-org/gitlab/-/issues/368055#note_1917379056)。

1. [フィルターとレスポンススキーマの唯一の情報源を GraphQL とし、設計の段階から GraphQL とのパリティを目指します](https://gitlab.com/groups/gitlab-org/-/work_items/9673#note_3052544341)。

1. [REST API をフロントエンドとのパリティではなくお客様のニーズに合わせて設計し、リストクエリのみを REST に移行します](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3517626531)。

   フロントエンドは、純粋にパフォーマンスのためにリストクエリだけを移行します。フロントエンド全体を移行するという明示されていない前提により、エンドポイントは GraphQL ミューテーションを反映する設計になっていました。この前提を修正すると、それらのエンドポイントを再設計してもフロントエンドに負担がかからなくなり、以下で説明するリンクされたアイテムと階層の切り出しが可能になりました。

1. [需要が不明確でも、GraphQL または従来の Issue とエピックの REST API にすでに存在するウィジェットを省略しません](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3514528434)。

   サードパーティがどの属性に依存しているかを知る方法はありません。それらを省略すると、既存のワークフローを壊すリスクがあり、従来のエンドポイントからの移行を妨げます。

1. [ほとんどのウィジェットには、フラット化された `features` オブジェクトを伴う汎用の `PATCH` を使用し、ウィジェットが個別に指定可能なエンティティのコレクションである場合に限り、専用のサブエンドポイントを追加します](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3517626531)。

   クライアントがエンティティを固有の ID で参照したり、リンクを解除したり、並べ替えたりする必要がある場合、それは子コレクションであり、スカラー値の PATCH にまとめることはできません。読み取り時の肥大化したレスポンスの問題は `fields` と `features` の設計ですでに解決されているため、切り出す必要があるのは、特にコレクションの書き込み側です。[コレクションの書き込みを分割するための判断基準](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3521914109)も参照してください。

1. [作成と更新から `features.linked_items` を削除し、単一アイテムの取得では読み取り専用として残し、`POST` と `DELETE /-/work_items/:iid/linked_items` でリンクを管理します](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3516168878)。

   このフィールドでは追加しかできませんでした。リンクの解除や並べ替えはできず、リンクには固有の ID とリンクごとの認可があります。

1. [`features.hierarchy.parent_id` は残しながら、作成と更新から `features.hierarchy.children_ids` を削除し、専用エンドポイントで子を管理します](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3516168878)。

   `children_ids` には同じく追加しかできないという問題があり、以前はリンクを解除するために各子の `parent_id` を null に変更する必要がありました。これは逆向きの操作であり、ツリーの変更が同時に発生すると安全ではありません。`parent_id` はアイテムの純粋なスカラープロパティであり、インラインのままにします。その後、子の書き込みエンドポイント（`POST`/`DELETE`/`PUT .../children/:child_id`）がリリースされています。

1. [書き込みを従来の `/issues/:iid/notes` API に残すのではなく、ワークアイテムにネイティブ対応したノートとディスカッションの CRUD エンドポイントを構築します](https://gitlab.com/groups/gitlab-org/-/work_items/21728#note_3490998470)。

   PATCH の `features.notes` は `discussion_locked` のみを受け付けます。さらに重要なことに、従来のエンドポイントは Issue のサービスを経由し、`/status` などのワークアイテム専用クイックアクションを通知なしに破棄するため、URL だけでなく動作も異なります。[従来のノート API が破棄するクイックアクションについての議論](https://gitlab.com/groups/gitlab-org/-/work_items/21728#note_3521919684)も参照してください。

1. [単一の機能名を、リストエンドポイントでは基本形、単一アイテムの取得では詳細形という 2 つのエンティティ形式に解決できるようにし、クライアントのパラメータではなくエンドポイントによって選択します](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/228670)。

   これにより、機能が N+1 を起こしやすい場合や、リストビューには表示しないデータを持つ場合でも、一覧取得の速度を維持できます。

1. [独自のページネーションが必要な機能は、`features` のキーではなく、別のサブエンドポイントとして公開します](https://gitlab.com/groups/gitlab-org/-/work_items/21728)。

   GraphQL はネストされたコネクションのページネーションをサポートしますが、REST はサポートしません。これが、ノート、ディスカッション、子、リンクされたアイテムの各エンドポイントの原則です。

1. [`work_item_type_ids` を正式な `Array[Integer]` フィルターとして宣言し、GA 前にベースタイプの `types` フィルターを削除します](https://gitlab.com/gitlab-org/gitlab/-/work_items/605888#note_3552897024)。

   以前の `work_item_type_ids` は、生の params ハッシュを通過する未宣言のパラメータとしてのみ動作していました。ベースタイプは内部の詳細であり、`types=issue` は Issue ベースタイプに基づくすべてのカスタムタイプも返すため、カスタムタイプを扱う場合に誤解を招きます。[`types` フィルターを削除するマージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/245936)も参照してください。

1. [`work_item_type_names` を REST 専用のフィルターとして追加し、大文字と小文字を区別せず、不明な名前は例外を発生させず何にも一致しないようにします](https://gitlab.com/gitlab-org/gitlab/-/work_items/605888#note_3571780518)。

   名前空間ごとに作成されるカスタムタイプには整数のタイプ ID は使えず、gitlab-triage などの汎用ツールは YAML にタイプ名を記述するため、ID を事前に知ることができません。不明な名前で何にも一致しない動作は、不明な ID に対する既存の動作と一致します。

1. [`exclude_group_work_items` と `exclude_projects` のパリティは実現せず、パリティの仕様に意図的な除外として記録します](https://gitlab.com/gitlab-org/gitlab/-/issues/595010)。

   これらは `traversal_ids` の最適化以前の一時的な GraphQL の回避策だったため、再現すると回避策を API のインターフェースとして固定化することになります。

1. [単一アイテムのエンドポイントでは、コンテナーだけでなくワークアイテム自体に対して `:read_work_item` を認可し、アクセスが拒否された場合は 403 ではなく 404 を返します](https://gitlab.com/gitlab-org/gitlab/-/issues/603898)。

   親だけを認可すると、コンテナーを読み取れるすべてのユーザーに、機密のものなどの個別ワークアイテムが漏えいします。404 はリストエンドポイントと一致し、存在の有無を明らかにすることを避けます。

1. [GitLab.com のみでベータを実施し、フィーチャーフラグによってグループ単位で有効化します。設計を確約しないことで、破壊的な変更を引き続き可能にします](https://gitlab.com/gitlab-org/gitlab/-/issues/599248#note_3461368353)。

1. [`participants` ウィジェットをベータと GA の対象から先送りし、通知なしに取り下げるのではなく、スコープ外の項目専用のエピックで追跡します](https://gitlab.com/groups/gitlab-org/-/work_items/22398#note_3514528434)。

   参加者は、従来パフォーマンスのボトルネックでした。追跡対象のエピックでこの作業を「実施しない」としてクローズすることで、除外を監査可能かつ撤回可能な状態に保ち、コミュニティの貢献も受け入れられます。[参加者ウィジェットをクローズする Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/601069#note_3516576976)も参照してください。
1. [すべてのエンドポイントでキーセットページネーションを使用し、不透明なカーソルとして公開します](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/20950#note_3788496964)。
   クライアントが、特定のソートにどの方式を使用しているかを知るためにレスポンスヘッダーを調べる必要はないはずです。統一されたカーソルのコントラクトにより、実装は自由に変更できます。並び順にキーセット形式がない場合、サーバーは同じカーソルの内部でオフセットによってページを取得します。実装は [gitlab-org/gitlab#628176](https://gitlab.com/gitlab-org/gitlab/-/work_items/628176)で追跡しています。
1. [不明な `fields` と `features` の値には `400` を返し、アイテムのタイプがサポートしていない機能やライセンスのない機能は省略します](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/20950#note_3788728139)。
   `200` はリクエストを完全に理解したことを意味するべきであるため、GraphQL がクエリの検証時に行うように、認識できない名前は破棄せず拒否します。有効な機能でも、個々のアイテムが持てない場合は、そのアイテムから省略します。これも GraphQL と同じ動作です。リストのレスポンスには複数のワークアイテムタイプが含まれ、単一の `400` によって複数タイプが混在するリストが利用できなくなるためです。[明示的に失敗させることについての議論](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/20950#note_3822228190)も参照してください。実装は [gitlab-org/gitlab#629477](https://gitlab.com/gitlab-org/gitlab/-/work_items/629477)で追跡しています。
