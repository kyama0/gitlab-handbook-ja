---
title: "CI Runner を使用したワークスペースのデプロイ"
status: ongoing
creation-date: "2024-12-24"
authors: [ "@DylanGriffith" ]
coaches: [ ]
dris: []
owning-stage: "devops::create"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/deploy-workspaces-with-ci-runner/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T07:37:29Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---

<!-- Design Documents often contain forward-looking statements -->

<!-- This renders the design document header on the detail page, so don't remove it-->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">devops::create</span></td>
<td class="px-3 py-2 border border-gray-300">2024-12-24</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab で Workspaces を設定・デプロイするには、現在、顧客が Kubernetes クラスターと GitLab Kubernetes Agent、および他のいくつかのコンポーネントを設定する必要があります。セットアップには非常に多くの手間がかかり、Kubernetes を実行するだけでも顧客にとってかなりの負担になる可能性があります。

Workspaces を実行するための Kubernetes のセットアップの複雑さに加え、実行中のワークスペースがない場合でも Kubernetes クラスターのベースラインワークロードは無視できないため、一部の顧客にとってはコスト効率が悪い可能性もあります。

この設計ドキュメントでは、顧客がプロジェクト用に設定した既存の CI Runner を使用して Workspaces をデプロイできるようにすることを提案します。

## 提案

この設計ドキュメントは
https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10804 に関連していますが、このドキュメントはコンテナ内で実行している GitLab VS Code fork へのネットワークアクセスの方法ではなく、ワークスペースのデプロイに焦点を当てています。

この提案のアイデアは、CI Runner を使用してワークスペースを作成するオプションをワークスペース作成に追加することです。これにより、舞台裏では Workspaces の Kubernetes Agent に関連するすべてのロジックをスキップし、CI パイプラインを作成します。CI パイプラインは、Devfile で指定された同じ Docker イメージを使用し、GitLab VS Code fork を Kubernetes Workspaces に注入するのと同様の方法でその Docker イメージに注入します。

このアイデアは、次のマージリクエストの POC の変更で構成されたこの[動画デモ](https://youtu.be/TVGkBn726Bk)でデモされました:

1. https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176479
1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

## CI Runner の主なメリット

CI Runner と CI（全般）はワークスペースの動作方法と大きく異なることは明らかです。したがって、これらを適合させようとする理由を問うことは合理的です。このパスでイテレーションを進める主な利点をいくつか挙げます:

1. CI Runner は、セルフマネージドと GitLab.com の顧客がすでに使用している成熟したプロダクトです
1. CI Runner はすでに複数のクラウドプロバイダー（AWS、GCP、Azure）と通信する方法を知っており、K8s Pod の作成もサポートしており、K8s でワークスペースをプロビジョニングする既存のアプローチを置き換えることも可能です。さらに CI Runner は、ユーザーが独自のクラウドプロバイダーサポートを実装できる[プラグインシステム](https://gitlab.com/gitlab-org/fleeting/fleeting)に基づいています
1. ランナーを拡張してこれらのより汎用的なワークロードをサポートすることで、まさにこの同じワークスペースのプロビジョニング問題（[こちら](https://gitlab.com/groups/gitlab-org/-/epics/16050)参照）に取り組んでいる Duo Workflow にも簡単に拡張でき、ランナーをより汎用的なワークロードに活用するさらなる提案もあります（[こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/328489)参照）

## 技術的詳細

https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176479 に POC があり、ランナータイプのワークスペースとエージェントタイプのワークスペースの両方をサポートする方法の概要が示されています。

### GitLab VS Code fork の注入

GitLab VS Code fork は、既存の Kubernetes 機能と同様の方法で CI ジョブに注入できます。`.gitlab-ci.yml` の構文はすでに追加コンテナ（`services` と呼ばれる）をサポートしており、共有ボリュームがあります。既存のワークスペースツールイメージを使用して、ほぼ同一の方法で GitLab VS Code fork を注入できます。次に、CI ジョブの `script` にコマンドを追加して GitLab VS Code fork を実行できます。

### 動作の維持（と宣言的プログラミング）

これらの種類のワークロードを実行するための Kubernetes の代替に関する多くの議論は、Kubernetes の宣言的 API のメリットに焦点を当てています。具体的には、実行することを期待するすべてのワークロードを宣言するだけで、Kubernetes が新しいワークロードの起動、不要なワークロードのシャットダウン、クラッシュしたプロセスの再起動を処理するというアイデアが好まれています。

コンピュートのプロビジョニングのプライマリ API として CI パイプラインとランナーを使用する場合、その「無料で提供される」部分は得られません。CI Runner に依存して、一定時間後にジョブをシャットダウンしたり、Rails 側からキャンセルするジョブをベストエフォートでシャットダウンしたりすることができます。ただし、クラッシュしたワークスペースのより堅牢な「再起動」メカニズムが依然として必要です。簡単なオプションとしては、GitLab Rails 上でいくつかの定期的なプロセスを実行し、実行されるべきだと思っているすべてのワークスペースをループして、まだ実行中かどうかを確認することが考えられます。

ネットワークアクセスの問題から、ワークスペースまたはランナーによってプッシュされる何らかのヘルスチェックが必要になる可能性があります。これは既存のランナー [`heartbeat`](https://gitlab.com/gitlab-org/gitlab/-/blob/8e1b70181095ef8d93ddaa01388ac25a74aeac24/app/models/ci/runner.rb#L524) を利用できるかもしれません。実装の詳細はこのドキュメントでは省略しますが、Rails が一定の頻度でワークスペースが状態を報告したかどうかを知ることができると仮定します。

ワークスペースが実行されていない（または正常でない）ことがわかり、実行されるべきだと思われる場合、GitLab Rails は2つのことを行います:

1. ワークスペースの既存ジョブをキャンセルする: ランナーがまだ実行中だと思っている場合、終了するよう通知します
2. ワークスペースの新しいジョブを作成する: ランナーがそれを取得し、再作成します

これはすべて Kubernetes が提供する宣言的 API よりはるかにエレガントではありませんが、究極的にはこれが Kubernetes によって抽象化される種類のものです。GitLab Rails コードベースに同様に「エレガントな」抽象化を提供して、この複雑さをすべて隠すことは何も妨げません。

### 永続性

GitLab CI ジョブはすでに「キャッシュ」による永続性をサポートしています。CI ジョブ内のキャッシュストレージは通常、ディレクトリを zip 圧縮し、オブジェクトストレージにアップロードし、次に同じキャッシュキーで CI ジョブが実行されたときにダウンロードして解凍することを含みます。最初のイテレーションのスコープを縮小するためにこのメカニズムを再利用できる可能性があります。CI キャッシュの使用では、ユーザーが誤って別のユーザーと同じキャッシュデータを取得しないようにする必要があります。各ワークスペースに一意のキャッシュキーを使用することでこれが可能になるはずです。

ただし、CI キャッシュは zip/unzip のコストと耐久性のために長期的な解決策には適していない可能性があります。そのため、すぐにより良い解決策に置き換えることを検討します。ここで最も有望なオプションは、ワークスペースごとにボリュームを作成し、ワークスペースが再起動されたときにそのボリュームを再利用することです。ボリュームはワークスペースが停止したときではなく、削除されたときにのみ破棄されるべきです。CI ジョブでの高速キャッシュ取得という類似の目標と CI Runner の永続ボリューム作成の拡張が一致するかもしれません。

ここで関連する注意事項として、クラウド開発環境の主な利点の一つは、ゼロから簡単に再作成できることであり、これにより新しい開発者のオンボーディングが最適化され、チーム全体で一貫した開発環境が提供されるということです。開発者がワークスペースを起動後に自分のものにしたいという要望があるかもしれませんが、それはクラウド開発環境に関するアンチパターンかもしれません。長期間稼働するワークスペースには、ベースイメージの変更への対応、ワークスペースの改善をチームに貢献すること、他のチームメンバーが再作成できないスノーフレーク VM を誤って作成することといったトレードオフがあります。代わりに、GitLab が開発者がワークスペースの永続的なカスタマイズを作成するためのツール（例: 起動時に適用される git で管理された別の設定ファイル）を改善することが望ましいかもしれません。これは私が議論の中で聞いた永続性の重要性への言及によるサイドノートであり、このドキュメントではそれ以上探求しません。

主として、このアーキテクチャの一部として、CI ベースのワークスペースで既存の Kubernetes ベースのワークスペースと少なくとも同程度の永続性を提供することを目指すべきですが、それを改善することを目指す必要はありません。

### Devfile vs Development Container vs その他

現在、ワークスペース機能は [devfile](https://devfile.io/) フォーマットを使用しています。このツールは実質的に Kubernetes のみをサポートしているため、Devfile から離れて別の設定ファイルを試す良い機会かもしれません。[Development Containers](https://containers.dev/) のサポートへの移行を検討できますが、GitLab にさらに多くの機能を構築する必要が生じる可能性があります。

今のところ、Devfile の構文から CI 内で比較可能なワークスペースを作成するために必要な最小限の詳細を変換することから始めるべきです。この作業とは独立して、Development Containers または別のフォーマットへの移行を調査するべきです。

Devfile を CI ジョブで実行できるものに変換するために多大な労力が必要であることがわかった場合、この問題にもっと早く取り組む必要が生じるかもしれません。

## イテレーション計画

1. `.gitlab-ci.yml` を定義せずにワークロードを作成できる `CI::Workload` の概念を導入する
1. `Ci::Workload` を使用してワークスペースを作成するためのアルファサポート。この時点では生き続ける保証はありませんが、作成されます
1. ワークスペースコードディレクトリの永続化と復元を実装する
1. ワークスペースがクラッシュした場合（または CI ジョブがタイムアウトした場合）のロバストな再起動を実装する

## 検討した代替案

### VM を管理する新しいサービスの使用

[fleeting API](https://gitlab.com/gitlab-org/fleeting/fleeting) を含む Runner スタックの一部を再利用することができます。これにより、これらのクラウドプロバイダーとの統合における重複した作業が少なくとも削減され、顧客が独自のクラウドプロバイダーサポートを実装するためのプラグインシステムも提供されます。デメリットは CI Runner をすべて再利用することと同様かもしれません。なぜなら、コードをより扱いにくくする VM の管理方法に違いがある可能性があるためです。

### 既存の Google Cloud IAM 統合の使用

私たちは [Google Cloud IAM との統合](https://docs.gitlab.com/ee/integration/google_cloud_iam.html)を持っています。この統合は、顧客がクラウドアカウントを GitLab に接続する方法と、短期間の認証情報をプロビジョニングするための GitLab 内のメカニズムを提供します。ワークスペース用の VM のプロビジョニングのための統合の基盤となる可能性がありますが、現在は認証のみを提供しており、その他のすべてを構築する必要があります。
