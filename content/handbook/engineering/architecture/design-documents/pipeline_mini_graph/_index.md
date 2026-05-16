---
title: "パイプラインミニグラフ"
status: ongoing
creation-date: "2024-05-27"
authors: [ "@bsandlin" ]
coach: "@ntepluhina"
approvers: [ "@dhershkovitch", "@nmezzopera" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/pipeline_mini_graph/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
translated_at: "2026-04-27T06:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/bsandlin" class="text-blue-600 hover:underline">@bsandlin</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ntepluhina" class="text-blue-600 hover:underline">@ntepluhina</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dhershkovitch" class="text-blue-600 hover:underline">@dhershkovitch</a>, <a href="https://gitlab.com/nmezzopera" class="text-blue-600 hover:underline">@nmezzopera</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2024-05-27</td>
</tr>
</tbody>
</table>
</div>


このブループリントはパイプラインミニグラフの生きたドキュメントとして機能します。パイプラインミニグラフは、関連するパイプラインのステータスをユーザーに伝えるためにプラットフォーム全体のさまざまな場所で使用されています。ユーザーはコンポーネントから直接ジョブを再実行したり、さらなる調査のために特定のジョブやリンクされたパイプラインにドリルダウンすることができます。

![パイプラインミニグラフ](/images/engineering/architecture/design-documents/pipeline_mini_graph/pipeline_mini_graph.png)

## 動機

パイプラインミニグラフは当初、REST を機能の基盤として使用していました。私たちはコンポーネントを GraphQL をサポートするように更新し、すべてのインスタンスをこの API に移行する過程にあります。このドキュメントはリファクタリングの単一の情報源（SSOT）として機能します。REST と GraphQL の 2 つの API が共存しているため、開発者はコンポーネントへの貢献が困難であると感じており、REST と GraphQL の両方との互換性を確保しながらコードをシンプルにすることが不可欠です。

### ゴール

- 保守性の向上
- 後方互換性
- クエリパフォーマンスの向上
- REST サポートの廃止
- リアルタイムパイプラインステータスの更新

### 非ゴール

- パイプラインミニグラフ UI の再設計

## 提案

実装を分解するために、以下のステップを踏みます:

1. [完了] REST バージョンと GraphQL バージョンのコンポーネントを `pipeline_mini_graph` と `legacy_pipeline_mini_graph` と呼ばれる 2 つのディレクトリに分離する。これにより、開発者がより容易に貢献でき、すべてのアプリが GraphQL を使用するようになったら REST バージョンを簡単に削除できます。
1. [完了] GraphQL クエリ構造をより高パフォーマンスに最適化する。
1. [完了] GraphQL を完全にサポートするように新しいコンポーネントの更新を完了する。
1. [完了] `ci_graphql_pipeline_mini_graph` をロールアウトして、コンポーネントの GraphQL インスタンスをグローバルに有効にする。

## 実装の詳細

| Issue | マイルストーン | ステータス |
| ----- | ---------  | ------ |
| [レガシーファイルを新しいディレクトリに移動](https://gitlab.com/gitlab-org/gitlab/-/work_items/464375) | [17.1](https://gitlab.com/groups/gitlab-org/-/milestones/99#tab-issues) | ✅ |
| [残りのレガシーコードを移動](https://gitlab.com/gitlab-org/gitlab/-/work_items/464379) | [17.1](https://gitlab.com/groups/gitlab-org/-/milestones/99#tab-issues) | ✅ |
| [PMG の README を作成](https://gitlab.com/gitlab-org/gitlab/-/work_items/464632) | [17.1](https://gitlab.com/groups/gitlab-org/-/milestones/99#tab-issues) | ✅ |
| [GraphQL クエリの最適化](https://gitlab.com/gitlab-org/gitlab/-/issues/465309) | [17.1](https://gitlab.com/groups/gitlab-org/-/milestones/99#tab-issues) | ✅ |
| [ダウンストリームパイプライン専用コンポーネント](https://gitlab.com/gitlab-org/gitlab/-/issues/466238) | [17.1](https://gitlab.com/groups/gitlab-org/-/milestones/99#tab-issues) | ✅ |
| [ID でステージを取得](https://gitlab.com/gitlab-org/gitlab/-/issues/464100) | [17.2](https://gitlab.com/groups/gitlab-org/-/milestones/100#tab-issues) | ✅ |
| [ジョブアイテム](https://gitlab.com/gitlab-org/gitlab/-/issues/467278) | [17.2](https://gitlab.com/groups/gitlab-org/-/milestones/100#tab-issues) | ✅ |
| [ジョブアクション](https://gitlab.com/gitlab-org/gitlab/-/issues/467279) | [17.3](https://gitlab.com/groups/gitlab-org/-/milestones/101#tab-issues) | ✅ |
| [`ci_graphql_pipeline_mini_graph` のロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/407818) | [17.8](https://gitlab.com/groups/gitlab-org/-/milestones/107#tab-issues) | ✅ |
| [パイプラインエディターの PMG を GraphQL インスタンスに移行](https://gitlab.com/gitlab-org/gitlab/-/issues/466275) | [17.8](https://gitlab.com/groups/gitlab-org/-/milestones/107#tab-issues) | ✅ |
| [コミットページの PMG を GraphQL インスタンスに移行](https://gitlab.com/gitlab-org/gitlab/-/issues/466274) | [17.8](https://gitlab.com/groups/gitlab-org/-/milestones/107#tab-issues) | ✅ |
| [PMG コードベースからデッドロジックを削除](https://gitlab.com/gitlab-org/gitlab/-/issues/466277) | TBD | To Do |
| [MR PMG を GraphQL インスタンスに移行](https://gitlab.com/gitlab-org/gitlab/-/issues/419725) | TBD | To Do |

## 設計の詳細

### 構造

パイプラインミニグラフのすべてのデータはコンポーネントに渡されます。このデータは、コンポーネントを使用するさまざまなアプリ全体のさまざまな API 呼び出しから得られます。渡されたデータはエントリファイル内で GraphQL 構造にフォーマットされます。その後コンポーネント内で発生するすべての API 呼び出しは GraphQL クエリ/ミューテーションです。

#### プロパティ

| 名前 | 型 | 必須 | 説明 |
| ---- | ---- | -------- | ----------- |
|`downstreamPipelines` | Array | false | 現在のパイプラインによってトリガーされたパイプライン |
|`isMergeTrain` | Boolean | false | パイプラインがマージトレインの一部かどうか |
|`pipelinePath` | String | false | パイプライン URL |
|`pipelineStages` | Array | true | 現在のパイプラインのステージ |
|`upstreamPipeline` | Object | false | 現在のパイプラインをトリガーしたアップストリームパイプライン |

#### ファイル構造

```plaintext
├── pipeline_mini_graph/
│   ├── downstream_pipelines.vue
│   ├── pipeline_mini_graph.vue << エントリポイント
│   ├── pipeline_stage_dropdown.vue
│   └── pipeline_stages.vue
├────── graphql/
│       └── fragments/
│           └── job.fragment.graphql
│       └── mutations/
│           ├── job_cancel.mutation.graphql
│           ├── job_play.mutation.graphql
│           ├── job_retry.mutation.graphql
│           └── job_unschedule.mutation.graphql
│       └──queries/
│           └── get_pipeline_stage_jobs.query.graphql
```

#### 考慮事項

##### プロパティ

- `isMergeTrain`: このプロパティは MR ページに固有であり、マージトレインのジョブを再試行できないことをユーザーに警告するためにジョブドロップダウンにメッセージを表示するために使用されます。これは少し奇妙なフローです。このデータをパイプラインミニグラフ内の別の場所から取得するか、マージトレインウィジェット自体に含めることを検討するべきかもしれません。このブール値はこのメッセージを表示する以外のロジックに使用されていないことに注意する価値があります。

## 今後の改善

- [GraphQL サブスクリプション](https://gitlab.com/gitlab-org/gitlab/-/issues/406652)
- [ダウンストリームパイプラインのジョブを表示](https://gitlab.com/gitlab-org/gitlab/-/issues/345571)
- 再設計の可能性
