---
title: GitLab に検索サービスをパッケージングする
status: proposed
creation-date: "2025-04-18"
authors: [ "@terrichu" ]
coaches: [ "@DylanGriffith" ]
dris: [ "@terrichu", "@bvenker", "@changzhengliu" ]
owning-stage: "~devops::ai-powered"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/package_a_search_service_with_gitlab/
upstream_sha: 171236827c9a366363160b625ff53ec19c521940
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/terrichu" class="text-blue-600 hover:underline">@terrichu</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/terrichu" class="text-blue-600 hover:underline">@terrichu</a>, <a href="https://gitlab.com/bvenker" class="text-blue-600 hover:underline">@bvenker</a>, <a href="https://gitlab.com/changzhengliu" class="text-blue-600 hover:underline">@changzhengliu</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::ai-powered</span></td>
<td class="px-3 py-2 border border-gray-300">2025-04-18</td>
</tr>
</tbody>
</table>
</div>


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## 概要

GitLab は、複数の戦略的課題を解決し新しい機能を開放するために、検索サービスをディストリビューションにパッケージングすることを提案しています。現在、PostgreSQL によって支えられた検索とフィルタリング機能は、大規模なインスタンスや複雑なグループ階層に対して大きな制限があり、機能の提供とユーザー体験に影響を与えています。高度な検索はセルフマネージドインスタンスの一定割合に採用されている（大規模な顧客では割合が高い）一方、オプション機能のままであり、別途インストールと設定が必要なインフラに依存しています。

検索サービスを GitLab パッケージに直接含めることで、これを GitLab インフラの標準コンポーネントとすることを目指しています。この変更により、テキスト検索操作をオフロードすることでデータベースのスケーラビリティが向上し、より強力な検索・フィルタリング機能が実現し、埋め込みのためのベクターストレージが必要な AI 機能の一貫したプラットフォームが提供されます。例えば、[AI コンテキスト抽象化レイヤー](/handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/)があります。

このイニシアチブは、採用障壁を取り除き、パフォーマンスを向上させ、GitLab.com とセルフマネージドデプロイメント全体で一貫した体験を実現することで、既存および新規顧客に恩恵をもたらします。実装はフェーズ別アプローチに従い、オプションのインストールから始めますが、最終的には検索サービスを GitLab 機能の標準インフラとすることを目指して設計されています。

## 動機

この作業の動機は、GitLab 全体で検索、フィルタリング、ベクター操作のための標準データストアを確立することです。高度な検索が有効なインスタンスの割合を向上させることで、機能チームが最も多くのセルフマネージド顧客にパフォーマンスと機能豊富な体験を届ける最良の機会を提供します。

### 問題の概要

GitLab の機能は、特に検索とフィルタリング、AI、データ集約的な操作において、PostgreSQL の能力を超えたスケーラブルなデータストレージソリューションをますます必要としています。潜在的なソリューションの多数の評価にもかかわらず、断片化した状態に達しています:

1. すべてのセルフマネージドユーザーが GitLab の高度な検索を有効にしているわけではない（採用率は中規模・大規模の顧客では高い）
2. 機能チームは PostgreSQL を使用する中規模・大規模なインスタンスの機能を制限しなければならない
3. データベースのスケーラビリティは成長するインスタンスに対して継続的な課題のまま

その結果、機能の可用性がインフラの選択に依存するという分断されたユーザー体験が生まれ、採用障壁が生じ、GitLab がすべてのデプロイメントタイプで一貫した機能を提供する能力が制限されています。

### 業界コンテキスト

GitHub などの業界競合他社はすぐに使えるより統合された検索体験を提供しており、競合のギャップが生まれています。GitHub Enterprise Server は Elasticsearch を製品の統合コンポーネントとして含んでおり、このアプローチが実行可能で業界に先例があることを示しています。この統合により、GitHub はすべてのデプロイメントタイプで一貫した検索体験を提供できる一方、GitLab は現在 Elasticsearch または OpenSearch の別途インストールと設定を必要としています。ベクター埋め込みが AI 搭載機能の標準になるにつれ、堅牢なベクターデータベースを持つことは開発者プラットフォーム市場でますます基本要件になっています。

### 機会

1. **改善されたユーザー体験**: すべてのデプロイメントタイプにわたる機能の可用性の一貫性向上
2. **統一された機能開発**: チームが複数のデータストアとの互換性を維持する代わりに共通の基盤の上に構築できる
3. **データベース負荷の軽減**: PostgreSQL から検索とフィルタリング操作をオフロード
4. **AI 機能の強化**: ベクター埋め込みのネイティブサポートにより次世代 AI 機能が実現可能
5. **競合パリティ**: 統合された検索体験を提供する競合他社とのギャップを縮小
6. **インフラの簡素化**: 標準化されたコンポーネントにより運用・保守の複雑さが軽減

### ゴール

- セルフマネージドインスタンスにおける高度な検索の採用率の向上

### 非ゴール

- Elasticsearch または OpenSearch を使用しているインスタンスを切り替えさせる
- 外部 Elasticsearch または OpenSearch 設定のサポートを削除する
- 特殊なユースケース向けの他のベクターデータベースソリューションを置き換える
- PostgreSQL のすべてのスケーリング課題に対処する

## 提案

以下の主要なイニシアチブを通じて、すべての GitLab インストール方法で[検索サービスをオプションコンポーネントとしてパッケージング](https://gitlab.com/groups/gitlab-org/-/epics/18396)することを提案します:

1. **検索サービスの選定**:
   - [GitLab にパッケージングする検索サービスの選定](https://gitlab.com/gitlab-org/gitlab/-/issues/554626)

2. **検索サービスのサイジングと設定**:
   - [リファレンスアーキテクチャとドキュメントを更新](https://gitlab.com/groups/gitlab-org/-/epics/18151)して、検索サービスの最小および推奨システム仕様を含める。これには以下が含まれます:
     - サイジングガイドラインのドキュメント
     - 設定とパフォーマンスの最適化
     - 耐障害性と高可用性
     - アップグレード
     - バックアップとリストア
     - Geo ディザスタリカバリ

3. **設定の自動化の改善**:
   - 適切なデフォルトで GitLab の[インデックス設定を自動化](https://gitlab.com/gitlab-org/gitlab/-/issues/549311)
   - [インデックスメンテナンスタスクを自動化](https://gitlab.com/groups/gitlab-org/-/epics/15888)
   - 接続チェックを含む既存のヘルスチェックと自己修復機能を拡張

## 設計と実装の詳細

### 技術的アプローチ

初期実装では、以下の考慮事項を踏まえ、GitLab のディストリビューションパッケージに検索サービスを含めることを提案します:

1. **パッケージング方法の考慮事項**:
   - Omnibus の場合: 新しいオプション[メタパッケージ](https://gitlab.com/groups/gitlab-org/distribution/-/epics/74)として含める
   - Kubernetes の場合: カスタム Helm チャートを構築するか、コミュニティの成果物を活用
   - Docker の場合: [gitlab/gitlab-ee Docker イメージ](https://hub.docker.com/r/gitlab/gitlab-ee/)に含める
   - GET の場合: 設定可能なコンポーネントとして含める（GET はすでに OpenSearch をサポート）
   - 技術的アプローチに影響するため、[セルフマネージド Basic and Advanced (SMB/SMA) ブループリント](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/14414)の進捗を追跡

2. **検索サービスのバージョン**:
   - バージョンは廃止予定でないこと
   - バージョンはハイブリッド検索機能をサポートすること。Elasticsearch の場合はバージョン 8.12+、OpenSearch の場合はバージョン 2.15+。
   - 最新バージョンには埋め込みストレージに対する無視できないコスト削減とパフォーマンス向上がある
   - **実装上の注意**: Elasticsearch の Docker Hub イメージにはコアとエンタープライズコードの両方がバンドルされており、後者はデフォルトで 30 日間のトライアルとして有効化されます。この作業の一環として、コア機能のみを明示的に使用するように CI 設定を変更する必要があります。

3. **設定とリソース割り当て**:
   - 小規模インスタンスに適した最小設定をデフォルトとする
   - 異なるインスタンスサイズ向けの設定テンプレートを提供
   - Elasticsearch と OpenSearch はともに JVM をパッケージングしています。単一サーバーの実装では、検索サービスが GitLab のパフォーマンスに影響を与えないよう、慎重なリソース割り当てが必要です。

### 評価と根拠

GitLab の複数のチームが潜在的なソリューションを評価するために多大なリソースを投資してきましたが、大多数の採用を達成したものはありません:

- [GitLab に検索エンジンをパッケージング](https://gitlab.com/groups/gitlab-org/-/epics/18389) - Elasticsearch を含めるための元のイニシアチブ
- [RAG のイテレーション計画](https://gitlab.com/gitlab-org/gitlab/-/issues/441110) - Retrieval Augmented Generation のデータストアオプションの包括的な評価
- [チャット向けドキュメントの質問](https://gitlab.com/gitlab-org/gitlab/-/issues/451215) - 回避策として Vertex AI Search を使用した実装
- [プライバシー重視の埋め込みに関するスパイク](https://gitlab.com/gitlab-org/gitlab/-/issues/458770) - 機密データの埋め込みストレージオプションの調査
- [PgVector 評価](https://gitlab.com/gitlab-org/gitlab/-/issues/438330#note_1780393655) - PgVector 拡張機能を持つ PostgreSQL の評価

これらの調査では、以下の理由から Elasticsearch が好まれるソリューションとして一貫して挙げられています:

- ハイブリッド検索機能（キーワードとベクター検索の組み合わせ）
- 関連性ランキングとフィルタリングのための成熟した機能セット
- GitLab の高度な検索との既存の統合
- 大規模なデプロイメントのためのスケーラブルなアーキテクチャ
- AI ユースケースの埋め込みを処理する能力

## 参考資料

- [Issue #438178: GitLab に検索エンジンをパッケージング](https://gitlab.com/gitlab-org/gitlab/-/issues/438178)
- [Issue #438330: 「ユーザーが SM Chat でドキュメントの質問をできる」の提供タイムラインを見積もる](https://gitlab.com/gitlab-org/gitlab/-/issues/438330)
- [Issue #441110: イテレーション計画: RAG](https://gitlab.com/gitlab-org/gitlab/-/issues/441110)
- [Issue #451215: 「ユーザーが SM Chat でドキュメントの質問をできる」の解決策の実装](https://gitlab.com/gitlab-org/gitlab/-/issues/451215)
- [Issue #458770: スパイク: プライバシー重視の埋め込みモデルの調査と検証](https://gitlab.com/gitlab-org/gitlab/-/issues/458770)
- [Issue #514017: Elasticsearch を GitLab デリバリーパッケージに含める](https://gitlab.com/gitlab-org/gitlab/-/issues/514017)
- [Merge Request #142787: RAG アーキテクチャブループリント](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/142787)
- [Issue #1048: Elasticsearch インテグレーション](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/1048)
- [Issue #3857: omnibus パッケージにデフォルトで elasticsearch を同梱する](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/3857)
- [Epic #14293: Issue とマージリクエストのフィルタ検索に高度な検索を使用](https://gitlab.com/groups/gitlab-org/-/epics/14293)
- [Epic #13510: ElasticSearch を活用した脆弱性管理](https://gitlab.com/groups/gitlab-org/-/epics/13510)
