---
title: "リポジトリバックアップ"
status: proposed
creation-date: "2023-04-26"
authors: [ "@proglottis" ]
coach: "@DylanGriffith"
approvers: []
owning-stage: "~devops::systems"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/repository_backups/
upstream_sha: 4c7d94ca4f485376c886b7c2b9575091c8b7d3cf
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/proglottis" class="text-blue-600 hover:underline">@proglottis</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::systems</span></td>
<td class="px-3 py-2 border border-gray-300">2023-04-26</td>
</tr>
</tbody>
</table>
</div>


<!-- For long pages, consider creating a table of contents.  The `[_TOC_]`
function is not supported on docs.gitlab.com.  -->

## 概要

この提案は、Gitaly 固有の最適化を適用する機会をより多く与える、すぐに使えるリポジトリバックアップソリューションを GitLab に提供することを目的としています。これは、`backup.rake` からリポジトリバックアップを移動させて、リポジトリを列挙してリポジトリごとの決定を行い、Gitaly からオブジェクトストレージに直接ストリームされるリポジトリバックアップをトリガーするコーディネーションワーカーに移行することで実現します。

このアプローチの利点は以下の通りです:

- バックアップは物理リポジトリをホストする Gitaly からオブジェクトストレージへと、一度だけ転送されます。
- 特定のリポジトリアクセスパターンを活用することで、より賢い決定が可能になります。
- バックアップと復元の負荷を分散します。
- プロセス全体が Gitaly 内で実行されるため、既存のモニタリングが使用できます。
- 将来の WAL アーカイブとその他の最適化のためのアーキテクチャを提供します。

これにより、既存の 2 つの戦略の主な問題点が解消されるはずです:

- `backup.rake` - リポジトリバックアップは Gitaly の外から RPC を使用してストリームされ、単一の大きな tar ファイルに保存されます。転送されるデータ量のため、これらのバックアップは小規模なインストールに限定されます。
- スナップショット - クラウドプロバイダーは物理ストレージスナップショットの取得を許可しています。これらはクラウドプロバイダーに固有であるため、すぐに使えるソリューションではありません。

## 動機

### 目標

- リポジトリバックアップの作成と復元の時間を改善する。
- リポジトリバックアップのモニタリングを改善する。

### 非目標

- ファイルシステムベースのスナップショットの改善。

### ファイルシステムベースのスナップショット

スナップショットはクラウドプラットフォームに依存して、Gitaly と Praefect がデータを保存するために使用するディスクの物理スナップショットを取得します。公式に推奨されたことはありませんが、この戦略は `backup.rake` を使用してバックアップを作成または復元するのに時間がかかりすぎる場合に使用される傾向があります。

Gitaly と Git は、並行プロセスによるリポジトリの破損やクラッシュによる部分的な書き込みを防ぐためにロックファイルと fsync を使用します。これは一般的に、ファイルが書き込まれれば有効であることを意味します。しかし、Git リポジトリは多くのファイルで構成されており、多くの書き込み操作が行われている可能性があるため、ファイル操作が進行していない間にスナップショットをスケジュールすることは不可能です。これはスナップショットの一貫性が保証できないことを意味し、スナップショットバックアップからの復元には手動の介入が必要になる可能性があります。

[WAL](https://gitlab.com/groups/gitlab-org/-/epics/8911) はクラッシュ耐性を向上させ、スナップショットからの自動復旧を改善するかもしれませんが、各リポジトリはおそらく大多数の投票レプリカが同期していることを必要とするでしょう。

Gitaly クラスターの各ノードは均質ではなく、レプリケーションファクターによっては、完全なスナップショットバックアップを作成するためにすべてのノードのスナップショットを取得する必要があります。これはスナップショットバックアップにリポジトリデータの重複が多くなることを意味します。

スナップショットはクラウドプロバイダーに大きく依存しているため、すぐに使えるエクスペリエンスを提供することはありません。

### ダウンタイム

理想的なリポジトリバックアップソリューションは、バックアップと復元の両方の操作をオンラインで実行できるようにするものです。具体的には、各ノード/リポジトリの一貫性を確保するために書き込みをシャットダウンまたは一時停止する必要がないようにしたいです。

### 一貫性

リポジトリバックアップにおける一貫性は以下を意味します:

- 復元後に Git リポジトリが有効であること。部分的に適用された操作がないこと。
- クラスター内のすべてのリポジトリが復元後に正常であるか、自動的に正常な状態になること。

一貫性のないバックアップはデータ損失をもたらしたり、復元時に手動の介入が必要になる場合があります。

スナップショットを使用して両方の種類の一貫性を達成することは困難です。複数のホスト上のファイルシステムのスナップショットを同期して取得し、それらのホスト上のリポジトリが現在変更されていない状態で取得する必要があるためです。

### 作業の分散

バックアップ/復元作業を分散させて、`backup.rake` を実行するマシン、単一の Gitaly ノード、または単一のネットワーク接続にボトルネックが生じないようにしたいと考えています。

バックアップ時、`backup.rake` はすべてのリポジトリバックアップをローカルファイルシステムに集約します。これは、Rake タスクが実行されている場所に Gitaly（場合によっては Praefect を経由）からすべてのリポジトリデータをストリームする必要があることを意味します。これが CNG の場合、Kubernetes 上の大きなボリュームも必要です。結果のバックアップ tar ファイルはオブジェクトストレージに転送されます。復元でも同様のプロセスが発生し、リポジトリのサブセットを復元する部分的な復元の場合でも、tar ファイル全体をダウンロードしてローカルファイルシステムに展開する必要があります。実質的にすべてのリポジトリデータが複数のホスト間で複数回転送されます。

各 Gitaly がバックアップを直接アップロードできれば、リポジトリデータを 1 回だけ転送することになり、ホスト数と全体的に転送されるデータ量が削減されます。

### Gitaly 制御

Gitaly は自己完結型になることを目指しており、バックアップを所有する必要があります。

`backup.rake` は現在どのリポジトリをバックアップするかとそれらのバックアップの保存場所を決定しています。これは Gitaly が適用できる最適化の種類を制限し、開発/テストの複雑さを増やします。

### モニタリング

`backup.rake` はさまざまな異なる環境で実行されます。歴史的に Gitaly の観点からのバックアップは一連の切り離された RPC 呼び出しです。これにより、バックアップのモニタリングがほぼゼロになっています。理想的には、プロセスが Gitaly 内で実行されることで、既存のメトリクスとログスクレイピングを使用してプロセスを監視できるようになります。

### 自動バックアップ

`backup.rake` が cron で設定されている場合、正常に実行されているかどうか、まだ実行中かどうか、どのくらいの時間がかかったか、どれくらいのスペースが使用されたかを確認することが困難です。インクリメンタルバックアップを可能にするために前のバックアップへのアクセスを cron が常に持つようにしたり、バックアップの更新が必要かどうかを判断したりすることが難しいです。

継続的に実行されるコーディネーションプロセスを持つことで、単発のバックアップ戦略から、各リポジトリが使用パターンと優先度に基づいて独自のバックアップスケジュールを決定する戦略に移行できます。このようにして、Gitaly ノードに過度の負荷を追加せずに、各リポジトリが合理的に最新のバックアップを持てるようになります。

### 更新されたリポジトリのみ

`backup.rake` はすべてのリポジトリバックアップを tar ファイルにパッケージ化し、一般的に前のバックアップへのアクセスがありません。これにより、最後のバックアップ以降にリポジトリが変更されたかどうかを判断することが困難です。

オブジェクトストレージ上の以前のバックアップへのアクセスがあれば、Gitaly がバックアップを取得する必要があるかどうかをより簡単に判断できます。これにより、変更されなくなったリポジトリのバックアップに費やす時間を無駄にしないようになります。

### 特定時点への復元

リポジトリのセットを特定の時点に復元できるメカニズムが必要です。使用される識別子（バックアップ ID）は管理者が決定でき、すべてのリポジトリに適用されるものでなければなりません。

### WAL（先行書き込みログ）

WAL の継続的なアーカイブを可能にするインフラを提供できるようにしたいと考えています。これは、アーカイブをストリームするための中央の場所を提供し、任意のフルバックアップをログ内の場所と一致させることで、フルバックアップからリポジトリを復元し、WAL を特定の時点まで適用できるようにすることを意味します。

### WORM

Gitaly にアクセス可能なストレージは、攻撃者がノードのオブジェクトストレージの認証情報にアクセスした場合に既存のバックアップが変更されることを防ぐために、WORM（書き込み一回、読み取り多数）である必要があります。

リポジトリバックアップが現在使用している[ポインタレイアウト](https://gitlab.com/gitlab-org/gitaly/-/blob/master/doc/gitaly-backup.md#pointer-layout)はポインタファイルを上書きできることに依存しており、WORM ファイルストアでの使用には適していません。

WORM はオブジェクトストレージプロバイダーに固有の可能性があります:

- [AWS オブジェクトロック](https://aws.amazon.com/blogs/storage/protecting-data-with-amazon-s3-object-lock/)
- [Google Cloud WORM 保持ポリシー](https://cloud.google.com/blog/products/storage-data-transfer/protecting-cloud-storage-with-worm-key-management-and-more-updates).
- [MinIO オブジェクトロック](https://min.io/docs/minio/linux/administration/object-management/object-retention.html)

### `bundle-uri`

バックアップデータへの直接アクセスにより、bundle-uri を使用したクローン/フェッチ転送の最適化の扉が開かれる可能性があります。これにより、リポジトリ自体からパックを転送する代わりに、Git クライアントをバンドルファイルに直接向けることができます。バルクリポジトリ転送はそれにより高速化され、Gitaly サーバーではなく、プレーンな http サーバーにオフロードされます。

## 提案

提案は初期 MVP とリポジトリごとのコーディネーターに分解されています。

### MVP

MVP の目標は、バックアップ処理をサーバーサイドに移動することで最悪のケース（完全損失シナリオ）を改善することを検証することです。つまり、フルバックアップの作成と復元にかかる総時間を削減します。

MVP はバックアップと復元のリポジトリ RPC を導入します。コーディネーションワーカーは存在しません。RPC は呼び出された Gitaly ノードからオブジェクトストレージにバックアップを直接ストリームします。これらの RPC は `gitaly-backup` ツールを介して `backup.rake` から呼び出されます。`backup.rake` はリポジトリバックアップをバックアップアーカイブにパッケージ化しなくなります。

この作業はすでに進行中で、[サーバーサイドバックアップ MVP エピック](https://gitlab.com/groups/gitlab-org/-/epics/10077)で追跡されています。

### リポジトリごとのコーディネーター

`backup.rake` を介してすべてのリポジトリのバックアップを一度に取得する代わりに、バックアップコーディネーションワーカーが作成されます。このワーカーはバックアップを取得する必要があるかどうかを決定するために定期的にすべてのリポジトリを列挙します。これらの決定はリポジトリの使用パターンまたは優先度によって決定される可能性があります。

復元時は、各リポジトリが異なるバックアップ状態を持つため、ユーザーによってタイムスタンプが提供されます。このタイムスタンプは各リポジトリのどのバックアップを復元するかを決定するために使用されます。WAL アーカイブが実装されると、WAL を指定されたタイムスタンプまで再生できます。

この広範な取り組みは[サーバーサイドバックアップエピック](https://gitlab.com/groups/gitlab-org/-/epics/10826)で追跡されています。

## 設計と実装の詳細

### MVP

`BackupRepository` と `RestoreRepository` という一対の RPC が存在します。これらの RPC はオブジェクトストレージにバックアップを直接同期的に作成/復元します。`backup.rake` は新しい `--server-side` フラグを持つ `gitaly-backup` を引き続き使用します。各 Gitaly は使用するオブジェクトストレージサービスを指定するバックアップ設定が必要です。

初期状態では、オブジェクトストレージ内のバックアップの構造は既存の[ポインタレイアウト](https://gitlab.com/gitlab-org/gitaly/-/blob/master/doc/gitaly-backup.md#pointer-layout)と同じになります。

MVP では、バックアップ ID はオブジェクトストレージ上の正確なバックアップ ID と一致する必要があります。

オブジェクトストレージの設定は新しい設定 `config.backup.go_cloud_url` によって制御されます。[Go Cloud Development Kit](https://gocloud.dev) はプロバイダー固有の方法で認証を設定しようとします。これは VM から推測することも、環境変数から推測することもできます。
[サポートされるストレージサービス](https://gocloud.dev/howto/blob/#services)を参照してください。

## 代替案

<!--
It might be a good idea to include a list of alternative solutions or paths considered, although it is not required. Include pros and cons for
each alternative solution/path.

"Do nothing" and its pros and cons could be included in the list too.
-->
