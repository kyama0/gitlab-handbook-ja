---
title: "GraphQL API"
status: accepted
creation-date: "2021-01-07"
authors: [ "@grzesiek" ]
coach: [ "@ayufan", "@grzesiek" ]
approvers: [ "@dsatcher", "@deuley" ]
owning-stage: "~devops::manage"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/graphql_api/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T00:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">accepted</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/dsatcher" class="text-blue-600 hover:underline">@dsatcher</a>, <a href="https://gitlab.com/deuley" class="text-blue-600 hover:underline">@deuley</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::manage</span></td>
<td class="px-3 py-2 border border-gray-300">2021-01-07</td>
</tr>
</tbody>
</table>
</div>


[GraphQL](https://graphql.org/) は API のためのデータクエリおよび操作言語であり、既存のデータでクエリを実行するためのランタイムです。

GitLab では、より広いコミュニティが信頼性の高い方法で GitLab と連携しやすくするため、また GraphQL を使用してバックエンドとフロントエンドのコンポーネント間のコミュニケーションをモデル化することで自社プロダクトを発展させるために、GraphQL の採用を進めていきたいと考えています。

GraphQL の移行に関する四半期 OKR を定義することで採用ペースを最近加速させました。これにより GraphQL の開発により多くの時間を費やすようになり、新しい API を拡張するために使用するツールの改善の必要性が浮き彫りになりました。

このドキュメントでは、開発努力をサポートし、[GraphQL API](https://docs.gitlab.com/ee/api/graphql/index.html) の大規模な使用を支える安定した基盤を構築するために必要な作業について説明します。

## 概要

GitLab における GraphQL イニシアチブは[約 3 年前に始まりました](https://gitlab.com/gitlab-org/gitlab/-/commit/9c6c17cbcdb8bf8185fc1b873dcfd08f723e4df5)。GraphQL エコシステム周辺の作業の大部分は、[GraphQL エキスパート](https://gitlab.com/groups/gitlab-org/graphql-experts/-/group_members?with_inherited_permissions=exclude)であるボランティアによって行われてきました。

[進捗の振り返り](https://gitlab.com/gitlab-org/gitlab/-/issues/235659)により、GraphQL 開発努力を合理化し、GraphQL API を観測可能かつ大規模に運用可能にするために必要な基本的なメカニズムのギャップに関連するパフォーマンス低下や可能な障害のリスクを軽減するためのいくつかの機会が浮かび上がりました。

GraphQL エンジン自体への小さな改善に加え、チームメンバーが GraphQL API 内部で何が起きているかを把握できるようにする包括的な監視ダッシュボードを構築したいと考えています。SLO を定義し、違反した SLI をトリアージし、Grafana と Elastic を使用して関連する詳細にズームインできるようにしたいです。履歴データを確認し、将来の使用量を予測したいと考えています。

REST API をスケールに合わせて進化させた経験から学び、この知識を GraphQL の開発努力に適用する機会があります。クエリから機能への相関メカニズムを構築し、スケーラブルな状態同期サポートを追加し、[ダイレクトアップロードのサポート](https://gitlab.com/gitlab-org/gitlab/-/issues/280819)など並行して実行されている他のアーキテクチャイニシアチブと GraphQL を整合させることでそれを実現できます。

GraphQL はデフォルトでセキュアであるべきです。私たちに関連する [OWASP GraphQL の推奨事項](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html)を適用するのに役立つメカニズムを構築することで、一般的なセキュリティの間違いを避けることができます。

より広いコミュニティのニーズを理解することで、非推奨ポリシーをより適切に計画し、そのニーズに合った GraphQL と REST API のパリティを設計できるようになります。

## 課題

### GraphQL で何が起きているかを把握する

GraphQL が本番環境でどのようなパフォーマンスを発揮しているかを確認できることは、そのサービスのパフォーマンスと信頼性を向上させるための前提条件です。

GraphQL のパフォーマンスとボトルネックについての質問に答えるためのツールがまだありません。これは、GraphQL 採用のペースと予想される動作スケールと組み合わさると、解決が困難な本番インシデントの発生率を高めるリスクをもたらします。

GraphQL エンドポイントのパフォーマンスに関するインサイトを提供しながら、チームメンバーが詳細にズームインできる包括的な Grafana ダッシュボードを構築したいと考えています。Elastic を使用して GraphQL クエリと機能をより良く相関させ、パフォーマンスの問題を早期に検出できる方法でインデックスを付けられるようにログを改善したいです。

- GraphQL 向け包括的な Grafana ダッシュボードの構築
- GraphQL クエリから機能への相関メカニズムの構築
- Elastic での GraphQL クエリのログ改善
- フロントエンドでの警告を表示するためのエラー処理の再設計

### 変動する GraphQL データ構造の管理

私たちの GraphQL API は時間とともに進化します。GraphQL はそのような進化を容易にするように設計されています。GraphQL は構成可能性により GraphQL API を拡張しやすくしています。一方でこれがバージョニングが不要と見なされる理由でもあります。API をバージョニングする代わりに、一部のフィールドを非推奨としてマークしたいですが、非推奨フィールドやタイプの使用状況を理解し、それを分かりやすい方法で可視化する方法が必要です。非推奨フィールドの使用を検出し、削除を予定していることをユーザーに通知することも考えられます。

- ユーザーにより良く対応するデータに基づく非推奨ポリシーの定義
- 非推奨 GraphQL フィールドの使用頻度を示すダッシュボードの構築
- Service Ping で非推奨フィールドの使用状況を送信するために必要なメカニズムの構築

### コードベースの残りの部分との一貫性の確保

GraphQL は私たちが取り組む唯一のものではありませんが、アプリケーション全体にわたって影響します。プロダクトのほぼすべての部分で収集および処理されたデータを公開するために使用されています。これにより、モノリシックなコードベースと緊密に結合しています。

GraphQL の使用方法が、GitLab のパフォーマンスと信頼性を向上させるために設計した他のメカニズムと一貫していることを確認する必要があります。

REST API を進化させてきた豊富な経験があります。この知識を GraphQL に適用し、デフォルトでパフォーマンスが高くセキュアにしたいと考えています。

- GraphQL のダイレクトアップロードの設計
- GraphQL クエリの深さと複雑さのヒストグラムの構築
- 制限に達している GraphQL クエリの数の可視化
- 既存の機能に対する GraphQL ETag のサポートの追加

### GraphQL と REST API の相互運用性の設計

REST API を非推奨にする予定はありません。これは GitLab と連携するためのシンプルな方法であり、GraphQL が従来の REST API の完全な代替になることはないかもしれません。2 つの API は共存する必要があります。コードベースを維持可能にするために、それらの間の重複を取り除く必要があります。ただし、このシンビオシス（共生）はバックエンドで解決しなければならない技術的な課題だけではありません。ユーザーは 2 つの API を交互に、または同時に使用したい場合があります。共通のリソース識別子スキームを公開することで相互運用可能にすることは、相互運用性の前提条件です。

- GraphQL と REST API の相互運用性の実現
- 両方の API のための共通リソース識別子の設計

### スケーラブルな状態同期メカニズムの設計

GitLab での GraphQL 採用に関連する最も重要な目標の一つは、GitLab バックエンドとフロントエンドのコンポーネント間のインタラクションをモデル化するために使用することです。これは進行中のプロセスであり、より良い状態同期メカニズムを構築し、既存のメカニズムにフックする必要性がすでに浮き彫りになっています。

- スケーラブルな状態同期メカニズムの設計
- pub/sub と WebSocket を通じた状態同期の評価
- GraphQL 機能相関と機能 ETag のための汎用サポートの構築
- 共有グローバル状態の管理を担当するフロントエンドコードの再設計

## イテレーション

### ブループリントのスコープ内

1. [GraphQL API アーキテクチャ](https://gitlab.com/groups/gitlab-org/-/epics/5842)
   1. [GraphQL 向け包括的な Grafana ダッシュボードの構築](https://gitlab.com/groups/gitlab-org/-/epics/5841)
   1. [Elastic での GraphQL リクエストのログ改善](https://gitlab.com/groups/gitlab-org/-/epics/4646)
   1. [GraphQL クエリ相関メカニズムの構築](https://gitlab.com/groups/gitlab-org/-/epics/5320)
   1. [より良いデータに基づく非推奨ポリシーの設計](https://gitlab.com/groups/gitlab-org/-/epics/5321)

### 将来のイテレーション

1. [GraphQL 向けスケーラブルな状態同期の構築](https://gitlab.com/groups/gitlab-org/-/epics/5319)
1. [GraphQL 向けダイレクトアップロードのサポート追加](https://gitlab.com/gitlab-org/gitlab/-/issues/280819)
1. [セキュリティに関連する GraphQL 設計上の選択のレビュー](https://gitlab.com/gitlab-org/security/gitlab/-/issues/339)
