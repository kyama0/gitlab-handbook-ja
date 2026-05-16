---
status: proposal
group: Engineering Productivity
title: 'Cells: フィーチャーフラグ'
authors: [ "@skarbek" ]
coach: "@rymai"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/feature_flags/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-02T12:41:38-07:00"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposal</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/skarbek" class="text-blue-600 hover:underline">@skarbek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rymai" class="text-blue-600 hover:underline">@rymai</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
</tr>
</tbody>
</table>
</div>


## 概要

このドキュメントは、Cells インフラストラクチャ上の開発において使用されるフィーチャーフラグについて、GitLab の現在の使用状況と将来の利用方法を説明するものです。フィーチャーフラグに関する開発ドキュメントは以下を参照してください:

- [開発ドキュメント](https://docs.gitlab.com/ee/development/feature_flags/index.html)
- [Blueprint 実装](../feature_flags_development/)
- [Blueprint 運用提案](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/)

:warning: GitLab アプリケーションの機能セットである [フィーチャーフラグ](https://docs.gitlab.com/ee/operations/feature_flags.html) と混同しないようにしてください。

### 現在の使用状況

フィーチャーフラグは GitLab の開発において重要な役割を果たしています。コードのまとまりをテストする際に安全な方法でテストでき、新機能が期待通りに動作し、.com のスケールでも問題なく動作するという確信を高められます。Cells は、フィーチャーフラグの広範な採用に関連する既存の技術的負債に加えて、新たな課題をもたらします。詳細については、フィーチャーフラグに関する既存の blueprint を参照してください: [フィーチャーフラグのユースケース](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/)

### Cells における課題

- どのアクターがどの Cell に存在するかを把握するためのディスカバリー機能がない
- Cell ごとのロールアウト機能が存在しない
- フィーチャーフラグの状態管理が一元化されていない
- Cells の拡張は開発チームと運用チームへの負担増大につながる

## 提案

私たちはフィーチャーフラグの Cells への利用拡大にイテレーションを重ねていきますが、レガシー Cell（現在の .com インフラストラクチャ）がテスト目的でフィーチャーフラグの大部分を活用する主要な場であり続けるため、そのペースはかなりゆっくりとなります。将来的には顧客を Cells に移行させることが目標であるため、ターゲットアクターに対するフィーチャーフラグとのやり取りを拡張したいと考えていますが、まず .com の安全性と安定性を確保するための機能と手順を整備する必要があります。

### イテレーション Cells 1.0

Cells がより安定したバージョンの GitLab をホストすることを最終目標として、フィーチャーフラグに関する最初のイテレーションは主に実施すべき作業のディスカバリーと適切なチームとの優先順位付けが中心となります。これにより、将来のイテレーションについて考え、適宜改善する時間が得られます。

ここでは、私たちのレガシー Cell（現在のインフラストラクチャ）を引き続き使用して、今日と同様にフィーチャーフラグを管理・変更し、いずれの Cell に関しても開発チームの振る舞いや期待に変化がないことが前提となります。進行中のすでに取り組まれているかもしれない改善作業は、干渉や不必要な複雑性をもたらさないよう考慮する必要があります。

### 将来のイテレーション

#### 機能の追加

##### Cells への関与

歴史的に、フィーチャーフラグはインシデントを軽減する可能性を持っています。例えば、フィーチャーフラグの背後にある機能が有効になっていても、コードが期待通りに動作していない場合、これをてこにしてインシデントを軽減できます。別の例として、ある機能が積極的に開発中で、その機能をクラスター全体で有効にする前に追加情報を収集する必要がある場合があります。開発チームが直接 Cell とやり取りするメカニズムを提供できます。これを実現するためには、Chatops の機能を拡張して Cell の概念を理解させるとともに、エンジニアリングチームが Cell をターゲットにするコマンドを実行できる UX を提供する必要があります。

例を挙げましょう。特定のインシデントに関連して Cell 7 上のフィーチャーフラグ `lorem_ipsum_dolar` を変更したいとします。以下のコマンドを使用します:

> `/chatops run feature set lorem_ipsum_dolar false --cell 7`

このコマンドにより Cell 7 にアクセスしてフィーチャーフラグが無効になります。

##### アクターへの関与

開発を支援するための情報収集に活用されるフィーチャーフラグは、特定のプロジェクト、ユーザー、またはパーセンテージベースのアクターをターゲットにする場合があります。これをすべての Cells にまたがって設定することを難しくする問題が存在します。そのため、アクターベースのフィーチャーフラグの変更は、レガシー Cell のみに限定されます。

例を挙げましょう。アクター `@ayufan` に対してフィーチャーフラグ `lorem_ipsum_dolar` を変更したいとします。このユーザーは合計 3 つの Cell に分散している可能性があります。以下のコマンドを使用します:

> `/chatops run feature set lorem_ipsum_dolar ayufan`

このコマンドはレガシー Cell 上のそのアクターに対してのみフラグを変更します。他のすべての
Cell は無視されます。特定の Cell 上のアクターを直接設定できるような追加フラグを
受け付けるよう Chatops を拡張できるかもしれません。しかし、そのためにはエンジニアが
アクターが存在する Cell を把握している必要があります。このような制限を設ける理由は、
ユーザーやプロジェクトが複数の Cell に分散している可能性があるためです。また、Cells は
ある Cell から別の Cell にデータを移行できるよう設計されています。フィーチャーフラグの
データは Cell の設定として保存されており、どのフラグが設定されているかに関するメタデータは
アクターに関連する知識の一部ではありません。これにより、アクターをターゲットにした後、
そのアクターが移動された場合、フラグが正しく設定されなくなるリスクが生じます。
これにより特定のアクターに対して異なる動作が発生しますが、通常このような変更は
GitLab の内部顧客に対して行われるため、ユーザーが Cell 間を移動する際に動作の変化に
気づくリスクは低くなります。この実装はシンプルであり、Cells とアクターが存在する
_何らかのサービス_ をクエリする必要がなく、結果として対象が単一の Cell を超える場合の
特殊なロールアウト手順を開発する必要もありません。これについては次のセクションでもう少し
詳しく説明します。

##### 環境への関与

現在、私たちは環境全体にフィーチャーフラグを設定する機能を持っています。本番環境はその一例です。では、すべての Cells にフィーチャーフラグをロールアウトするにはどうすればよいでしょうか? 理想的にはフラグが十分にテスト済みであることが望ましいですが、すべての Cells にフラグをロールアウトする前に何らかの形でテストして動作を検証する必要があるかもしれません。

例を挙げましょう。本番環境全体でフラグ `lorem_ipsum_dolar` を有効にしたいとします。以下のコマンドを使用します:

> `/chatops run feature set lorem_ipsum_dolar true --production`

このコマンドは多くの処理を行う必要があります。まず、このフィーチャーフラグが存在する
すべての Cells を収集する必要があります。フラグがいずれの Cell にも存在しない場合は、
エンジニアの期待と本番環境の間の一貫性の問題を引き起こすため変更してはなりません。
ただし、まだ完全に完了していないデプロイのインシデントを軽減するためにこれを活用しようと
している場合は、オーバーライドを検討するかもしれません。フラグが特定の環境のすべての Cells
にまたがって存在する場合、そのすべての Cells にわたって変更のロールアウトを開始します。
すべての Cells を同時に変更することは推奨されません。Chatops には、特定の Cell リストに
変更を加え、何らかのシグナルを待ってから次の Cell リストに進む、完了するまで繰り返す
というメカニズムが必要になります。すべての Cells にまたがるインシデントを解決するフラグを
対象としている場合、この意図的にゆっくりとしたロールアウトをバイパスするメカニズムが
必要になるかもしれません。Delivery チームは Cells にリング方式のデプロイを使用することを
計画しており、このユースケースのロールアウトに役立てるよう類似のメタデータを活用できる
かもしれません。

#### 要件

- Chatops が必要な情報を取得するために _何らかのサービス_ と通信できる必要があります。これには以下が含まれます:
  - Cells の一覧
  - Cell の一覧に割り当てられたアクター
- 新しい Cell がオンラインになった際、Chatops の設定を管理する必要がありません。代わりに、Chatops は新しい Cell への自動アクセスが可能であるべきです。これにより、Cell が新たに構築された際の管理負担が最小化されます。
- 手順の改善。私たちはフィーチャーフラグの様々な側面を改善するための[既存の取り組み](https://gitlab.com/groups/gitlab-org/-/epics/5324)をすでに持っています。この進行中の作業を意識する必要があります。
