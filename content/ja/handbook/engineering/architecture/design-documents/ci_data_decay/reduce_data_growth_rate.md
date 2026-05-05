---
title: "パイプラインデータの成長率削減"
status: ongoing
creation-date: "2024-05-27"
authors: [ "@fabiopitino", "@mbobin" ]
coach: [ "@fabiopitino", "@grzesiek" ]
approvers: [ "@jreporter", "@cheryl.li" ]
owning-stage: "~devops::verify"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_data_decay/reduce_data_growth_rate/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T08:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a>, <a href="https://gitlab.com/mbobin" class="text-blue-600 hover:underline">@mbobin</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/fabiopitino" class="text-blue-600 hover:underline">@fabiopitino</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jreporter" class="text-blue-600 hover:underline">@jreporter</a>, <a href="https://gitlab.com/cheryl.li" class="text-blue-600 hover:underline">@cheryl.li</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::verify</span></td>
<td class="px-3 py-2 border border-gray-300">2024-05-27</td>
</tr>
</tbody>
</table>
</div>


## 解決すべき問題

CI/CD パイプラインデータは GitLab で最も速く成長するデータセットの一つです。`p_ci_builds_metadata` テーブルがこの成長に大きく貢献しているのは、ジョブの設定が同一であっても、各パイプライン実行がビルド全体にわたってジョブメタデータを重複して作成するためです。

これにより以下の問題が発生します:

- **過剰なストレージ消費**: すべてのビルドに対して同じジョブ設定を繰り返し格納しています
- **データベースのパフォーマンス低下**: 大きなテーブルはクエリのパフォーマンスとメンテナンスに影響します
- **スケーラビリティの課題**: 重複情報を含む数十億行の管理が困難になります

主な課題は、ジョブのメタデータ（オプション・変数・シークレットなど）がパイプライン実行間でジョブの設定が変わっていなくても、すべてのビルド実行で重複して格納されることです。

## ジョブ定義の重複排除

[Rapid Action](https://gitlab.com/groups/gitlab-org/-/epics/16520) イニシアチブの中で、ジョブ設定とジョブ実行データを分離する 2 つの新しいテーブルを導入することで、ジョブメタデータを重複排除するための正規化戦略を実装しました。

この分離は 2 種類のデータを区別します:

- **固有データ**: アーカイブ後にパイプラインとジョブの高レベルな詳細を表示するために必要な情報で、ジョブが再試行できなくなった後も必要です。この段階のパイプラインは読み取り専用となります。例としては、表示目的に必要なジョブ名・ステージ・ステータス・基本設定があります。
- **処理データ**: ジョブの実行と再試行に必要な情報です。ジョブ実行の `options`・`variables`・`secrets` などが含まれます。このデータは各ジョブ実行に固有のもので、ジョブが実行不可能になった（パイプラインがアーカイブされて再試行できなくなった）時点で安全に削除できます。

ジョブ定義アーキテクチャは、まだ必要な（再試行可能な期間中の）処理データを重複排除します。ほとんどのジョブが同一の設定で繰り返し実行されるため、**約 90% の重複排除率**を達成します。ジョブが実行不可能になると、この処理データを安全に削除でき、長期的なストレージ要件を大幅に削減します。

### アーキテクチャ

このソリューションは 2 つの主要なコンポーネントで構成されています:

#### 1. ジョブ定義テーブル（`p_ci_job_definitions`）

このテーブルは、複数のビルドにわたって共有できる一意かつ不変のジョブ設定を格納します。

**主な特徴:**

- **チェックサムによる重複排除**: 各ジョブ設定は SHA256 を使用してハッシュ化され、一意のチェックサムを作成します
- **不変レコード**: 作成後、ジョブ定義はデータの整合性を確保するため読み取り専用です
- **パーティショニング設計**: スケーラビリティのために `partition_id` によるリストベースのパーティショニングを使用します
- **正規化された列**: `interruptible` などの頻繁にクエリされる属性はパフォーマンスのためにインデックス付き列として格納されます

**スキーマ:**

```ruby
create_table(:p_ci_job_definitions, primary_key: [:id, :partition_id]) do |t|
  t.bigserial :id, null: false
  t.bigint :partition_id, null: false
  t.bigint :project_id, null: false
  t.timestamps_with_timezone null: false
  t.boolean :interruptible, default: false, null: false, index: true
  t.binary :checksum, null: false
  t.jsonb :config, default: {}, null: false

  t.index [:project_id, :checksum, :partition_id], unique: true
end
```

格納される設定属性:

- `options`: ジョブ実行オプション（キャッシュ・アーティファクトなど）
- `yaml_variables`: .gitlab-ci.yml で定義された変数
- `id_tokens`: JWT トークン設定
- `secrets`: 外部シークレット設定
- `interruptible`: ジョブを中断できるかどうか
- `tag_list`: ジョブタグ
- `run_steps`: 関数の実行設定

#### 2. ジョブ定義インスタンステーブル（`p_ci_job_definition_instances`）

この結合テーブルは、すでに多くのインデックスが付いた `p_ci_builds` テーブルにインデックスを追加せずに、ビルドをジョブ定義にリンクします。

**なぜ別の結合テーブルが必要か？**

`p_ci_builds` テーブルは PostgreSQL のインデックスの実用的な上限に達しています。`job_definition_id` への外部キーを追加するには追加のインデックスが必要で、書き込みパフォーマンスをさらに低下させ、インデックスメンテナンス操作を遅くします。

別の結合テーブルを使用することで:

- `p_ci_builds` のパフォーマンスに影響を与えずに関係を維持できます
- パイプラインが再試行不可能になった後に古い関連付けを削除するためにパーティションを効率的にトランケートできます
- ビルドテーブルに影響を与えることなく結合テーブルに必要なインデックスを追加できます

**スキーマ:**

```ruby
create_table(:p_ci_job_definition_instances, primary_key: [:job_id, :partition_id]) do |t|
  t.bigint :job_id, null: false
  t.bigint :job_definition_id, null: false, index: true
  t.bigint :partition_id, null: false
  t.bigint :project_id, null: false, index: true
end
```

#### 重複排除の仕組み

1. **ジョブ作成**: パイプラインが作成されると、ジョブ設定が抽出されます
1. **チェックサム計算**: 設定が JSON にシリアライズされ、SHA256 でハッシュ化されます
1. **ルックアップまたは作成**:
    - `project_id`・`checksum`・`partition_id` が一致する既存の定義を `p_ci_job_definitions` でクエリします
    - 見つかった場合は既存の定義を再利用します
    - 見つからない場合は新しいジョブ定義レコードを作成します
1. **リンク作成**: ビルドをジョブ定義にリンクする `p_ci_job_definition_instances` にレコードを作成します
1. **ビルド実行**: ジョブは結合テーブルを通じて設定を参照します

**レガシーデータの処理:**

レガシーデータ形式（`p_ci_builds_metadata` に格納）を使用したジョブを再試行する場合、ジョブ定義はオンザフライで自動的に作成されます。これにより移行期間中の後方互換性が確保され、元々いつ作成されたかにかかわらず、すべてのジョブが重複排除アーキテクチャの恩恵を受けられます。

#### データのライフサイクルとクリーンアップ

このアーキテクチャの主要なメリットの一つは、効率的なデータ削除です:

- パーティションがアーカイブに十分なほど古くなったら、単純に `p_ci_job_definition_instances` パーティションをトランケートできます
- これにより、そのパーティションのビルドとジョブ定義間のすべての関連付けが即座に削除されます
- `p_ci_job_definitions` のジョブ定義は、参照されなくなった場合にクリーンアップできます
- これは個々の行を削除するよりもはるかに高速で、データベースのブロートを作成せず、ディスクスペースを即座に返します。

**孤立した定義のクリーンアップ:**

どのビルドからも参照されなくなったジョブ定義は識別して削除できます。[パイプラインのアーカイブ](https://gitlab.com/groups/gitlab-org/-/epics/19547)が有効な場合、古いジョブが再試行ウィンドウから外れ、ジョブ定義のパーティションをトランケートできるため、これは自然に発生します。

#### マイグレーション戦略

この新しいアーキテクチャへのマイグレーションは段階的にロールアウトされています:

1. GitLab 18.3 で新しいテーブルを作成
1. 新しいパイプラインは古い宛先と新しい宛先の両方に書き込む
1. フィーチャーフラグを通じて古いテーブルから新しいテーブルへの読み取りを徐々に移行し、欠落している場合は古いテーブルにフォールバック
1. `p_ci_builds_metadata`・`p_ci_builds`・`p_ci_build_tags`・`p_ci_builds_execution_configs` から他のテーブルへの既存データのマイグレーション
1. マイグレーション完了後に古い列とテーブルを削除
1. [テーブルブロートを回収するために `p_ci_builds` パーティションを再パック](https://gitlab.com/groups/gitlab-org/-/epics/19286)

バックグラウンドマイグレーション（[Issue #552069](https://gitlab.com/gitlab-org/gitlab/-/issues/552069)）は、以下のように複数の宛先テーブルにデータを移動します:

| ソーステーブル | ターゲットテーブル | 列 | 目的 |
|--------------|--------------|---------|----------|
| `p_ci_builds_metadata` | `p_ci_job_definitions` | • `config_options`<br>• `config_variables`<br>• `id_tokens`<br>• `secrets`<br>• `interruptible` | ジョブ設定データ |
| `p_ci_builds` | `p_ci_job_definitions` | • `options`<br>• `yaml_variables` | レガシーのジョブ設定データ |
| `p_ci_build_tags` | `p_ci_job_definitions` | • `tag_list` | ジョブタグ |
| `p_ci_build_execution_configs` | `p_ci_job_definitions` | • `run_steps` | 実行ステップ |
| `p_ci_builds_metadata` | `p_ci_job_definition_instances` | *(関係)* | ビルドと定義のリンク |
| `p_ci_builds_metadata` | `p_ci_builds` | • `scoped_user_id`<br>• `timeout`<br>• `timeout_source`<br>• `exit_code`<br>• `debug_trace_enabled` | ビルド実行データ |
| `p_ci_builds_metadata` | `p_ci_job_artifacts` | • `exposed_as`<br>• `exposed_paths` | アーティファクト設定 |
| `p_ci_builds_metadata` | `job_environments` | • `expanded_environment_name`<br>• `environment options` | 環境設定 |

マイグレーションは各テーブルパーティションに対して 1 つずつ、複数のジョブに分割されました。これにより並列実行を活用でき、各マイグレーションジョブが完了次第、メタデータパーティションをトランケートできます。

## 検討した代替アプローチ

### パイプラインブループリントアプローチ（未実装）

ジョブレベルの重複排除を実装する前に、パイプラインレベルのブループリントアプローチを検討しました（[MR !11967](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/11967) で詳述）。このアプローチでは、パイプライン設定全体を格納する `p_ci_pipeline_blueprints` テーブルを導入します。

**実装されたソリューションとの主な違い:**

- **粒度**: パイプラインレベル対ジョブレベルの重複排除
- **ストレージ形式**: パイプラインごとの単一 JSON ファイル対正規化されたジョブ定義
- **重複排除のトリガー**: いずれかのジョブ変更で新しいブループリントを作成 対 変更されたジョブのみ新しい定義を作成
- **データアクセス**: ファイルのダウンロード/キャッシュが必要 対 直接データベースクエリ

**ジョブレベルの重複排除を選択した理由:**

1. **より良い重複排除率**: ジョブはパイプライン内の他のジョブが変更されても安定していることが多い
2. **シンプルなデータアクセス**: ファイルキャッシュやオブジェクトストレージ統合が不要
3. **増分マイグレーション**: ジョブごとに既存データをマイグレーションしやすい
4. **パーティション管理**: パーティション再バランシングのためのトップダウン階層を維持
5. **クエリパフォーマンス**: 正規化された構造はファイル解析なしに効率的なクエリをサポート

**パイプラインブループリントの欠点:**

- 1 つのジョブ変更でもパイプライン全体のまったく新しいブループリントが作成される
- 大きな JSON ファイルを繰り返しダウンロードしないために Redis キャッシュ層が必要
- 既存のメタデータ構造からのより複雑なマイグレーションパス
- ジョブレベルのブループリットはパーティション階層に循環依存を作成してしまった

パイプラインブループリントアプローチは、将来の参照のために[クローズされた MR !11967](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/11967/diffs) に詳しく文書化されています。

### パイプライン処理データの削除

ビルドがアーカイブされると、そのパイプラインの処理を再開することは不可能になります。これは、PostgreSQL に格納されているビルドを効率的かつ確実に処理するために必要なすべてのメタデータを安全に別のデータストアに移動できることを意味します。

パイプラインの処理データの格納はコストが高く、この種の CI/CD データは CI/CD テーブルに格納されているデータのかなりの部分を占めています。アーカイブされたパイプラインの処理へのアクセスを制限した後、このメタデータを別の場所（できればオブジェクトストレージ）に移動し、本当に再び必要になったとき（例えばコンプライアンスや監査目的）にオンデマンドでアクセスできるようにすることができます。

データの移動が最適なソリューションかどうかを評価する必要があります。このデータセットのクエリ能力を保持しながら、より少ないストレージを使用するために、メタデータエントリの重複排除や他の正規化戦略を使用できる可能性があります。ここで最良のソリューションを見つけるには技術的な評価が必要です。

## 結果と影響

新しい `p_ci_job_definitions` テーブルを導入してから 1 週間後、`p_ci_builds_metadata` レコードの約 **85% の重複排除**を達成しました。

以下のグラフは、`p_ci_job_definitions` への書き込みを有効にした時点から影響を受けた CI テーブルの成長率を示しています:

![CI パーティションの成長率比較](/images/engineering/architecture/design-documents/ci_data_decay/metadata_growth_graph_comparison.png)

この成長率の劇的な削減は、ジョブ定義重複排除戦略の有効性を実証しています。ジョブ設定を正規化し複数のビルドにわたって再利用することで、パイプライン実行と過去データのアクセスの完全な機能を維持しながら、CI データベース成長の主要な要因の一つに正常に対処しました。

## 重複排除に努力する価値があるのはいつか？

データの重複排除は、レコード間で大部分のデータが一定のままである場合（パイプラインからパイプラインへジョブが変わらない場合など）に最も効果的です。このパターンがユースケースに適しているかどうかを判断する際に、以下のデータ基準を考慮してください:

- **実行間で不変**: 設定が実行ごとに変化しない。
- **多くのレコードで共有**: 同じ設定が頻繁に重複している。
- **論理的に分離可能**: データが、主要なモデルを複雑にせずに独自のテーブルに合理的に存在できる一貫したコンセプトを表している。

設定が頻繁に変化する、または実行ごとの状態と密接に結合している場合、このパターンは意味のある利点を提供しない可能性があります。チームは採用を決定する前に、クエリパフォーマンスへの影響・リファクタリングの労力・マイグレーションの複雑さを検討すべきです。

### クエリパフォーマンスに関する考慮事項

データを別のテーブルに移動すると、クエリの記述と最適化の方法に影響します。以下を考慮してください:

- **より複雑なクエリパターン**: 移動された列のフィルタリングやソートには、追加の JOIN や代替のクエリ戦略（例: `IN`/`EXISTS` 句・サブクエリ・CTE）が必要になる場合があります。これらは構造的な複雑さを追加し、大きなデータセットではクエリ全体のコストを増加させる可能性があります。
- **インデックスの有効性**: テーブルをまたいだソートやフィルタリングは、単一テーブルのインデックスから恩恵を受けられなくなる場合があります。属性がテーブル間で分割されると、一部のクエリでインデックスの有効性が低下します。
- **インデックス関連のオーバーヘッド:**
  - *インデックスのない列:* インデックスで最適化されていないクエリに依存していなかったため、マイグレーションのコストが低い。
  - *インデックスのある列:* マイグレーションのコストが高い。インデックスの再設計が必要になる場合があります（例: 移動した列の削除・外部キー列の追加・既存の複合インデックスの再構築）。大きなテーブルでは、インデックスの再構築や大幅なスキーマ変更が長時間の操作を引き起こしたり、複雑なロールアウト戦略が必要になる場合があります。

### リファクタリングとマイグレーションの複雑さ

このパターンを採用するには通常、構造化された移行計画が必要です。以下を評価してください:

- **マイグレーションパス戦略:**
  - *デュアルリード期間:* マイグレーションが完了するまで、アプリケーションは古いテーブルと新しいテーブルの両方から読み取ります。これにより複雑さが増し、フィーチャーフラグの慎重な配置やフォールバックが必要になります。
  - *完全バックフィル先行:* すべての既存データを事前にマイグレーションし、その後すべての読み取りを新しいテーブルに一度に切り替えます。長期的にはシンプルですが、リスクが高くリソース集約的になる可能性があります。
- **既存のデータ構造への依存関係:** 機能・サービス・レポートクエリが現在のスキーマに大きく依存している可能性があります。結合が多いほど、リファクタリングのリスクが高くなります。
- **運用上の考慮事項:** 大規模なデータマイグレーションとインデックスの更新は、本番ワークロードへの影響を最小化するよう計画する必要があります。

エピック: [ビルドメタデータテーブルの成長率削減](https://gitlab.com/groups/gitlab-org/-/epics/7434)。
