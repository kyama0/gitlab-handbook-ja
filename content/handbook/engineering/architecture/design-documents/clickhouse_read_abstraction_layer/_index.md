---
title: "ClickHouse または代替との対話のための抽象化レイヤーの検討"
status: proposed
creation-date: "2023-02-23"
authors: [ "@mikolaj_wawrzyniak", "@jdrpereira", "@pskorupa" ]
coach: "@DylanGriffith"
approvers: [ "@nhxnguyen" ]
owning-stage: "~workinggroup::clickhouse"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/clickhouse_read_abstraction_layer/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/mikolaj_wawrzyniak" class="text-blue-600 hover:underline">@mikolaj_wawrzyniak</a>, <a href="https://gitlab.com/jdrpereira" class="text-blue-600 hover:underline">@jdrpereira</a>, <a href="https://gitlab.com/pskorupa" class="text-blue-600 hover:underline">@pskorupa</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/nhxnguyen" class="text-blue-600 hover:underline">@nhxnguyen</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~workinggroup::clickhouse</span></td>
<td class="px-3 py-2 border border-gray-300">2023-02-23</td>
</tr>
</tbody>
</table>
</div>


## 目次

- [概要](#summary)
- [動機](#motivation)
- [目標](#goals)
- [非目標](#non-goals)
- [可能なソリューション](#possible-solutions)
  - [推奨アプローチ](#recommended-approach)
  - [オープンソースツールの概要](#overview-of-open-source-tools)
- [未解決の質問](#open-questions)

## 概要

ClickHouse のインストールを選択しない GitLab インストール向けに、ClickHouse またはその代替への読み取りアクセスを標準化するソリューションを提供します。さまざまな[オープンソースツール](#overview-of-open-source-tools)を分析し、[内部でソリューションを構築する](#recommended-approach)オプションと比較した結果、現在の推奨アプローチでは各データソースに直接接続するための専用データベースレベルドライバーの使用を提案しています。さらに、オプションのデータベース可用性の複雑さを単一のアプリケーション層に封じ込めるために[リポジトリパターン](https://martinfowler.com/eaaCatalog/repository.html)の使用を提案しています。

## 動機

ClickHouse はかなりのリソースを必要とし、小規模な GitLab インストールでは提供されるパフォーマンス改善からの投資対効果が得られない可能性があります。これにより、ClickHouse がすべてのインストールでグローバルに利用可能でない可能性があり、機能が利用可能な異なるデータストア間で切り替える必要が生じるリスクがあります。ワーキンググループの一部として提案されている[現在および将来の ClickHouse ユースケース](https://gitlab.com/groups/gitlab-com/-/epics/2075)のすべてのうち、10 件中 7 件は ClickHouse 以外のデータストアを使用するデータです。そのコンテキストを考慮すると、利用可能なデータストアとの対話を標準化するためのツールとガイドラインを提供することで、ClickHouse の採用を支援することが重要です。

提案するソリューションは、基盤となるデータストアとの対話のための統一インターフェースを提供するスタンドアロンツールから、各データストアを個別にサポートするライブラリのセット（データストアの対話の周囲にルールと制限を記述し、カプセル化の境界を引く実装ガイドラインに裏付けられた）まで、さまざまな形を取り得ます。

## 目標

- オプションで利用可能なデータストアが GitLab アプリケーションコードベース全体に与える影響を[単一の抽象化レイヤー](https://docs.gitlab.com/ee/development/reusing_abstractions.html#abstractions)に制限する
- すべてのデータストア固有の機能をサポートする
- メインの GitLab アプリケーションのサテライトサービスの通信をサポートする

## 非目標

- この提案はデータベースへの書き込み通信を直接考慮していません。これは[補完的な取り組み](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111148)の対象です
- この提案はスキーマ変更とデータマイグレーションの課題を直接考慮していません

上記の点が非目標であるにもかかわらず、それらが最終的なソリューションにいくつかの変更を加える可能性があることを認識しており、このドキュメントの最後の[未解決の質問](#open-questions)セクションにそれが表明されています。

## 可能なソリューション

前の段落で説明した高レベルの目標は、社内構築ソリューションとオープンソースツールの採用の両方で達成できます。以下のセクションでは、両方のアプローチを詳しく見ていきます。

### 推奨アプローチ

MVC とイテレーションの精神に基づき、Ruby の ActiveRecord など、対応するデータストアと直接対話するドライバーに依存するソリューションから始めることを提案します。このソリューションが終了基準のために設定された目標を達成し、このドキュメントの*動機*セクションで挙げられた問題を軽減するのに役立つためには、そのようなドライバーは静的コード分析で強制される開発ガイドラインのセットによってサポートされる必要があります。

このソリューションは、オープンソースツールによって課される可能性のある制限のリスクを懸念するワーキンググループのさまざまなメンバーからのフィードバックを受けた後、推奨として選択されました（それにより、ClickHouse の機能をフルに活用できなくなる可能性があります）。このドキュメントに提示されたワーキンググループ基準に関して共同作業するメンバーは、懸念事項は包括的なプロトタイプセットを構築することで軽減できる可能性があるとして同意しましたが、それを達成するのに必要な時間と労力はこのワーキンググループの限界を超えています。また、ClickHouse の採用は探索的な段階にあり、グループがまだ自分たちの要件を述べることができない可能性があることに注意することも重要です。

#### 提案するドライバー

ClickHouse のドキュメントに従うと、Ruby と Go の以下のドライバーがあります:

##### Ruby

1. [ClickHouse Ruby ドライバー](https://github.com/shlima/click_house) - Observability グループの調査の一環として GitLab での使用に以前から選ばれたドライバー（[Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/358158) 参照）
1. [Clickhouse::Activerecord](https://github.com/PNixx/clickhouse-activerecord)

##### Go

1. [ClickHouse/clickhouse-go](https://github.com/ClickHouse/clickhouse-go) - 公式 SQL データベースクライアント。
1. [uptrace/go-clickhouse](https://clickhouse.uptrace.dev/) - 代替クライアント。

##### 提案するクライアントアーキテクチャ

コードベースを整理し、特定のデータベースエンジンへの結合を制限するために、クエリデータを含む対話を単一のアプリケーション層にカプセル化することが重要です。それにより、[ActiveRecord のインターフェース伝播を通じた抽象化レイヤー](https://docs.gitlab.com/ee/development/reusing_abstractions.html)と同様の方法で、上の層へのインターフェースが提供されます。

基盤となるデータベースエンジンをカプセル化し続けることで、推奨されるソリューションは、後で他のツールを導入する機会を維持しながら、グループがユースケースを探索・理解するための時間を与える優れた双方向の決定になります。

最も低い抽象化レイヤーでは、ClickHouse ドライバーと直接対話するクラスのファミリーが存在すると予想されます。MVC パターン（Rails で実装）に従うこれらのクラスは*モデル*として分類されます。

モデルレベルの抽象化は既存のパターンやガイドラインに沿ったものですが、残念ながらセルフマネージドインスタンスに対する ClickHouse データベースエンジンのオプションの可用性という課題を解決しません。ビジネスロジックリクエストを処理するのに最適なデータベースを選択する責務を持つ専用エンティティを設計する必要があります。すでに述べた既存の抽象化[ガイドライン](https://docs.gitlab.com/ee/development/reusing_abstractions.html)の中で、`Finders` は `Finders` がデータベース固有の対話を独自のパブリック API の背後に隠し、すべての上のレイヤーからデータベースベンダーの詳細を隠すという理由で、与えられた要件に最も近いようです。

ただし、それらは `ActiveRecord` ORM フレームワークと密接に結合しており、`ActiveRecord::Relation` オブジェクトを返すという既存の GitLab 規則に縛られており、さらに複雑なクエリを構成するために使用される可能性があります。この結合により、返されるデータが 2 つの異なるデータベースから来る可能性があり、互いに互換性がない可能性があるため、`Finders` は ClickHouse のオプションの可用性に対応するのに不向きです。

以上のことを考慮すると、`Finders` と同様の抽象化レベルで存在するが、データオブジェクトの`配列`を返すことが必要な新しいエンティティをコードベースに追加することを検討する価値があります。

必要なレベルの分離は[リポジトリパターン](https://martinfowler.com/eaaCatalog/repository.html)の使用で達成できます。リポジトリパターンはビジネス/ドメインロジックとデータアクセスの懸念を分離するよう設計されており、これがまさにこの提案が求めているものです。さらに、リポジトリパターンは基盤となるデータベースで実行される操作を制限せず、その機能を完全に活用できます。

リポジトリパターンを実装するためには、以下のものを作成する必要があります:

1. サポートされている各データベースの**戦略**（例: `MyAwesomeFeature::Repository::Strategies::ClickHouseStrategy` と `MyAwesomeFeature::Repository::Strategies::PostgreSQLStrategy`）。戦略は基盤となるデータベースとの通信を実装する責務を持ちます（クエリの構成など）。
1. データベース可用性などの事前定義された基準で選択された利用可能な戦略の 1 つを使用してデータベースと対話するための高レベルインターフェースを公開する責務を持つ**リポジトリ**。単一のリポジトリで使用される戦略は、交互に使用できるよう同じパブリックインターフェースを共有しなければなりません。
1. リポジトリを使用するアプリケーション層が実装するビジネスロジック内でデータを表現する**プレーンオールドルビーオブジェクト（PORO）モデル**。データベースに依存しないものでなければなりません。

リポジトリパターンに基づくソリューションがすでに Observability グループによって実装されていることに注目することが重要です（@ahegyi、@splattael、@brodock に感謝します）。[`ErrorTracking::ErrorRepository`](https://gitlab.com/gitlab-org/gitlab/-/blob/1070c008b9e72626e25296480f82f2ee2b93f847/lib/gitlab/error_tracking/error_repository.rb) は、エラートラッキング機能を PostgreSQL から ClickHouse（API 経由で統合）に移行するために使用されており、機能フラグのトグルをデータベース選択基準として使用しています。これはデータベースのオプションの可用性の素晴らしい例です。

`ErrorRepository` は 2 つの戦略を使用しています:

1. API プロキシエンティティを使用して ClickHouse と対話する [`OpenApiStrategy`](https://gitlab.com/gitlab-org/gitlab/-/blob/d0bdc8370ef17891fd718a4578e41fef97cf065d/lib/gitlab/error_tracking/error_repository/open_api_strategy.rb)
1. `ActiveRecord` フレームワークを使用して PostgreSQL と対話する [`ActiveRecordStrategy`](https://gitlab.com/gitlab-org/gitlab/-/blob/d0bdc8370ef17891fd718a4578e41fef97cf065d/lib/gitlab/error_tracking/error_repository/active_record_strategy.rb)

これらの各戦略は、以下の PORO モデルを使用して上の抽象化レイヤーにデータを返します:

1. [`Gitlab::ErrorTracking::Error`](https://gitlab.com/gitlab-org/gitlab/-/blob/a8ea29d51ff23cd8f5b467de9063b64716c81879/lib/gitlab/error_tracking/error.rb)
1. [`Gitlab::ErrorTracking::DetailedError`](https://gitlab.com/gitlab-org/gitlab/-/blob/a8ea29d51ff23cd8f5b467de9063b64716c81879/lib/gitlab/error_tracking/detailed_error.rb)

さらに、`ErrorRepository` はリポジトリパターンが提供するサポートされているデータストアの種類に関する注目すべき柔軟性の素晴らしい例です。ライブラリや外部サービス API など、全く異なるソリューションを単一の統一インターフェースの下で統合できます。その例は、将来的にリポジトリパターンがあるユースケースがそれを必要とする場合に、ClickHouse と PostgreSQL のニーズを超えて拡張できる機会を示しています。

以下の[マージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/85907/diffs)は、ActiveRecord モデル、サービス、Finders に基づく現在の GitLab アーキテクチャからリポジトリパターンに移行するために Observability グループが行った変更をドキュメント化しています。

##### クライアントアーキテクチャを強制する可能な方法

クライアント側のアーキテクチャを提案するだけでは、一般的な慣行として完全に確立するには不十分で、開発者が無意識にそれに反するリスクを軽減するために自動的に強制される必要があります。リポジトリパターンの実装の自動検証を導入する複数の方法があります:

1. [Database::PreventCrossJoins](https://gitlab.com/gitlab-org/gitlab/-/blob/master/spec/support/database/prevent_cross_joins.rb) と同様の方法で `ActiveRecord` クエリサブスクライバーを利用して、*戦略*の外で実行される ClickHouse へのクエリを検出する
1. [`CodeReuse`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/rubocop/cop/code_reuse) RuboCop ルールを拡張して、*戦略*の外での ClickHouse ドライバーのすべての使用をフラグ立てする
1. *リポジトリ*の外で行われる ClickHouse インスタンスの存在を確認するユーティリティメソッドへの呼び出し（例: `CurrentSettings.click_house_enabled?`）を検出する RuboCop ルールを作成する

この開発段階では、著者はリストされたオプションのすべてが実行可能で有望であると考えているため、どれを使用するかの決定は ClickHouse の最初のリポジトリパターン実装が登場した時点に延期します。

### オープンソースツールの概要

このセクションでは、著者が述べた目標を達成するための代替アプローチとして検討されたが、推奨アプローチとして選択されなかった既存のサードパーティオープンソースソリューションの概要を提供します。

#### 評価基準

##### 1. ライセンス（必須）

1. ソリューションは[受け入れ可能なライセンス](../../../open-source/#acceptable-licenses)のオープンソースである必要があります。

##### 2. 異なるデータストアのサポート（必須）

1. 提案された抽象化レイヤーが ClickHouse と PostgreSQL の両方をサポートできるかどうかに焦点を当てます（必須）。
1. 2 つの必須ストレージ以上のストレージがサポートされているかどうかの追加の考慮事項。
1. ソリューションは PostgreSQL の[最小必要バージョン](https://docs.gitlab.com/ee/install/requirements.html#postgresql-requirements)をサポートしなければなりません。

##### 3. プロトコル互換性

すべての抽象化レイヤーには、ツールへの直接アクセスと比較した API の制限というコストがあります。この終了基準は、共通の抽象化のためにツールの API を制限するトレードオフの程度を理解しようとしています。

1. PostgreSQL と ClickHouse を通じて何の読み取り操作が可能かをリストアップします（`selects`、`joins`、`group by`、`order by`、`union` など）。
1. 提案された抽象化レイヤーで何の操作ができるか、そのような操作を行うのがどれだけ複雑か、またネイティブで操作を実行した場合と比較してパフォーマンスの懸念があるかをリストアップします。
1. 必要な操作が抽象化レイヤーでサポートされていない場合に、データソースへの直接アクセスがまだ可能かどうか（例: `ActiveRecord` では `#execute` で生 SQL 文字列を実行できます）。

##### 4. 運用負担

1. デプロイプロセス: どれだけ複雑ですか？提案されるツールはスタックに追加されるライブラリツールですか、それとも GitLab システムとは独立して追加のサービスをデプロイする必要がありますか。ツールがサポートするデプロイタイプ（Kubernetes/VM、SaaS/セルフマネージド、サポートされている OS、クラウドプロバイダー）。オフラインインストールをサポートしていますか。
1. 動作するために必要なハードウェアリソース。
1. 安定したパフォーマンスのサービスを確保するための複雑な監視と運用が必要かどうか。
1. 成熟したメンテナンスプロセスと周辺ドキュメント: アップグレード、バックアップとリストア、スケーリング。
1. 高可用性サポート。セルフマネージド向けの HA クラスターの構築とフェイルオーバー実施方法のドキュメントはありますか？ゼロダウンタイムアップグレードをサポートしていますか？
1. FIPS と FedRAMP コンプライアンス。
1. レプリケーションプロセスと新しいツールが GitLab Geo にどのように適合するか。

##### 5. 開発者エクスペリエンス

1. ソリューションは、採用を容易にし、学習コストを下げるために、よく構造化されており、明確で、十分にドキュメント化された API を持っている必要があります。

##### 6. 成熟度（できれば）

1. ソリューションはどのくらいの期間存在していますか？頻繁に使用されていますか？安定したコミュニティがありますか？ライセンスが許す場合、フォークするツールも考慮すべきです。

##### 7. 技術的な適合性

1. ソリューションはバグ修正や新機能をより簡単に貢献できるよう、GitLab で使用しているプログラミング言語の 1 つで書かれていますか？

##### 8. 相互運用性（必須）

1. ソリューションは Ruby on Rails で書かれたメイン GitLab アプリケーションと、Go で書かれたコンテナレジストリなどのサテライトサービスの両方をサポートできますか？

#### オープンソースソリューション

##### 1. Cube.dev

[Cube.dev](https://cube.dev/)

**評価**

1. ライセンス
   Apache 2.0 + MIT ✅
1. 異なるデータストアのサポート
   あり ✅
1. プロトコル互換性
   OLAP 理論の概念を使用してデータを集計します。これは使用指標の集計などの一部のユースケースでは有用ですが、他のケースでは有用でない可能性があります。SQL クエリと独自のクエリ形式の両方のための API があります。
1. 運用負担
   Docker または k8s を使用してデプロイする別のサービス。Redis をキャッシュとデータ構造ストアとして使用します。
1. 開発者エクスペリエンス
   良好な[ドキュメント](https://cube.dev/docs/product/introduction)
1. 成熟度
   ヘッドレス BI ツール自体はかなり新しいアイデアですが、Cube.js はこの分野での主要なオープンソースソリューションのようです。Analytics セクションはプロダクトアナリティクスのスタックとして内部的に使用しています。
1. 技術的な適合性
   REST と GraphQL API を使用します。独自のクエリとデータスキーマ形式がありますが、よくドキュメント化されています。YAML または JavaScript でのデータ定義。

**コメント**

このソリューションはすでに ~"group::product analytics" が ClickHouse の読み取りインターフェースとして使用されており、直接の経験を得るために @mwoolf との会話が行われ、主な結論は以下の通りです:

1. cube.dev の ClickHouse ドライバーはコミュニティソースで、現在メンテナーがいないため、積極的な開発がありません。これは ClickHouse の新しいメジャーバージョンが破壊的変更をもたらすまでは動作し続ける可能性がある小さくてシンプルなリポジトリです。
1. Cube.dev は TypeScript と JavaScript で書かれており、GitLab の技術スタックの一部で、それらに精通したエンジニアがいますが、Cube.dev は主にバックエンド開発者によって使用されることが期待されており、それらの技術にはあまり経験がありません。
1. シンプルな SQL の抽象化レイヤーは機能し、JSON に基づいてバックエンドに応じた正しいクエリを構築します。
1. データストア固有の関数（ClickHouse のウィンドウファネルなど）は他のエンジンに変換されないため、同じデータを表すために追加の cube スキーマを構築する必要があります。
1. ローカル開発と AWS VPS 上での数百万行のインポート負荷テストでは、今のところパフォーマンスは問題ありませんでした。
1. ほとんどのエンジンに対して PostgreSQL SQL のようなインターフェースを公開しますが、ClickHouse は残念ながら対象外なので、ワーキンググループのユースケースでは JSON API の方が実行可能かもしれません。
1. Cube.dev はスキーマをフライで自動生成できます。これにより ClickHouse などのオプションのコンポーネントを処理する実行時の条件付き使用が可能になります。

その会話の[録音](https://youtu.be/iBPTCrvOBBs)も利用可能です。

##### 2. ClickHouse FDW

[ClickHouse FDW](https://github.com/ildus/clickhouse_fdw)

**評価**

PostgreSQL 向けの ClickHouse 外部データラッパー。ClickHouse テーブルを PostgreSQL に保存されているかのようにクエリできます。Postgres がスケールしなくなった場合に ClickHouse をドロップイン代替として簡単に導入するための実行可能なオプションになり得ます。

1. ライセンス
   Apache 2.0 ✅
1. 異なるデータストアのサポート
   あり。PostgreSQL インスタンスを通じて ClickHouse を呼び出すことで。✅
1. プロトコル互換性
   一見 SELECT、INSERT ステートメントをサポートします。結合については不明。定義により生 SQL が可能。
1. 運用負担
   1. PostgreSQL 拡張機能。2 つの DB 間のマッピングが必要です。
   1. ClickHouse からの応答を待ちながら CPU サイクルを浪費するため、PostgreSQL のパフォーマンスに悪影響を与える可能性があります。
   1. PostgreSQL と ClickHouse のデプロイ間の接続の公開と管理が必要です。
1. 開発者エクスペリエンス
   TBD
1. 成熟度
   数年間存在しており、ClickHouse のドキュメントにも掲載されていますが、広く使用されているようではありません。
1. 技術的な適合性
   生 SQL 文。

**コメント**

##### 3. Clickhouse::Activerecord

[Clickhouse::Activerecord](https://github.com/PNixx/clickhouse-activerecord)

**評価**

1. ライセンス
   MIT ライセンス ✅
1. 異なるデータストアのサポート
   あり。アプリケーション層で PostgreSQL と一緒にクエリするために使用できる ClickHouse 用の ActiveRecord アダプターを提供するという意味で。✅
1. プロトコル互換性
   結合については不明 - 例がありません。
1. 運用負担
   Ruby on Rails ライブラリツール - ActiveRecord アダプターの形式の ORM インターフェース。
1. 開発者エクスペリエンス
   Rails に慣れた開発者には使いやすい。
1. 成熟度
   数年間存在していますが、リポジトリの活動は少ない（それ自体は悪いことではありませんが）。
1. 技術的な適合性
   Rails ライブラリなので、適合。

**コメント**

##### 4. Metriql

[Metriql](https://metriql.com/)

**評価**

DBT を使用してデータのソースを取得するヘッドレス BI ソリューション。データからメトリクスを定義して集計で変換する点で Cube.dev と似ています。著者は [FAQ エントリ](https://metriql.com/)で Cube.js などの他の BI ツールとの違いを説明しています。

1. ライセンス
   Apache 2.0 ✅
1. 異なるデータストアのサポート
   DBT を使用してデータソースから読み取るため、ClickHouse と PostgreSQL が可能です。
1. プロトコル互換性
   OLAP 理論の概念を使用してデータを集計します。REST API を通じてアドホック SQL クエリが可能です。
1. 運用負担
   デプロイする別のサービスで DBT が必要です。
1. 開発者エクスペリエンス
   セットアップと使用に DBT の知識が必要だと思われます。シンプルな REST API がドキュメント化されています。
1. 成熟度
   2021 年 5 月に最初のリリース。リポジトリの活動は少ない（それ自体は悪いことではありません）。
1. 技術的な適合性
   REST API または JDBC アダプターを通じて BI ツールと接続します。SQL または MQL（SQL のフレーバー/サブセット）を使用したクエリが可能です。

**コメント**

##### 5. 注目すべき却下されたサードパーティソリューション

Airflow や Meltano などの ETL のみのソリューション、および Tableau や Apache Superset などの可視化ツールは、通常明らかに基準の外にあるとして候補リストから除外されました。

**[pg2ch](https://github.com/mkabilov/pg2ch)**
論理レプリケーションを使用した PostgreSQL から ClickHouse へのミラーリング。
リポジトリはアーカイブされており、本番環境での使用は明示的にラベル付けされていません。論理レプリケーションは私たちのスケールでは十分なパフォーマンスがない可能性があります - パフォーマンスの懸念から PostgreSQL DB では使用していません。

**Looker**
BI ツール。
クローズドソース、プロプライエタリ。

**[Hasura](https://github.com/hasura/graphql-engine)**
データベースソースの GraphQL インターフェース。
まだ ClickHouse のサポートがありません。

**[dbt Server](https://github.com/dbt-labs/dbt-server)**
dbt 用の HTTP API。MariaDB Business Source License（BSL）❌

### 未解決の質問

1. この提案の主な焦点は読み取りインターフェースですが、書き込みインターフェースに焦点を当てた[補完的な取り組み](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111148)の結果によっては、書き込み対話のオプションの可用性に関する同様の懸念が適用される可能性があります。取り込みパイプラインが書き込みインターフェースのオプションの可用性の課題を解決しない場合、このドキュメントで提案されているリポジトリパターン実装に書き込み対話を含めることを検討する価値があるかもしれません。
1. ClickHouse スキーマ変更とデータマイグレーションに関する懸念は、既存のワーキンググループ基準ではカバーされていません。このドキュメントのスコープ外ではありますが、スキーマ変更をサポートするためにリポジトリパターンに基づく提案された実装に何らかの変更が必要になる可能性があることを認識しておくことが重要です。
