---
title: 'Organization データ移行 ADR 003: Org Mover コントロールプレーン'
description: 'Org Mover は、GitLab.com の Organization を Cells 間で移動する処理をオーケストレーションする、Runway でデプロイされるコントロールプレーンです。'
status: proposed
creation-date: "2026-06-09"
authors: [ "@mkozono" ]
coaches: [ "@ayufan" ]
dris: [ "@mkozono" ]
owning-stage: "~devops::tenant scale"
participating-stages: ["~devops::tenant scale", "~devops::data stores", "~devops::systems"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization-data-migration/decisions/003_org_mover_architecture/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

## サマリー

**Org Mover** は、GitLab.com の Organization を Cells 間で移動する処理をオーケストレーションする、[Runway](https://docs.runway.gitlab.com/)でデプロイされるコントロールプレーンサービスです。

| | |
|---|---|
| **Problem** | Organization をレガシー Cell からターゲット Cell へ移行する自動化が存在しない。 |
| **Approach** | 任意のエンジニアが各移動を順序付けられたステップのシーケンスとして実行できる、Runway でデプロイされるコントロールプレーンとして Org Mover を構築する。Org Mover はデータを移動するシステムを調整するが、データ自体は移動しない。Org Mover は REST API を公開する。 |
| **Status** | 提案中 |
| **Scope** | GitLab.com SaaS のみ: レガシー Cell からターゲット Cell。詳しくは [Scope](#scope) と [Non-goals](#non-goals) を参照。 |
| **Decision needed** | Tenant Scale、Geo、Siphon、Infrastructure のステークホルダーによるコントロールプレーンの形、スコープ、非目標の承認。 |
| **See also** | [ADR-002 rollback](002_rollback_strategy.md) · [ADR-010 read-only mode](../../organization/decisions/010_organization_read_only_mode.md) · [Org data migration blueprint](../_index.md) |

### Organization を Cells 間で移動する必要がある理由 {#why-do-we-need-to-move-organizations-across-cells}

GitLab.com は単一のモノリシックなデプロイとして稼働しており、まずデータベースでスケーリング上限に強くぶつかっています。[Cells](../../cells/) は、[Organizations](../../organization/) を独立した水平方向にスケール可能なインスタンスへ分散することで、これに対処します。

### これが難しい理由 {#why-this-is-hard}

Organization を単にオフラインにして移動することはできません。理由は 2 つあります。

1. 大規模 Organization を移動できなければなりません
2. 顧客への影響を最小限にして実施しなければなりません。

#### 顧客規模

多くの小規模 Organization は、数分で転送できる程度のデータしか持たず、夜間や週末には非アクティブなものも多くあります。そのような Organization は、比較的単純な手段と比較的単純なオーケストレーションで移動できます。

しかし、大規模 Organization は [データベース負荷の大きな割合（内部リンク）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/staff/lstaff/-/work_items/3)を占めているため、レガシー Cell を最終的に十分に緩和するには、小規模 Organization だけでなく、それらも移動する必要があります。また、[データ量の大きな割合（内部リンク）](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/work_items/417)も占めています。

#### ダウンタイム

レガシー Cell を緩和するために空にする必要はありませんが、意味のある余裕を回復するのに十分な負荷とデータの大きな割合を移動する必要があります。わずかな削減では不十分です。そして Cell は成長を続けており、その成長は加速しているため、緩和は一度限りの取り組みではなく、持続的でなければなりません。この目標を満たすには、多くの移動を継続的かつ並列に実行する必要があります。移行速度を顧客の営業時間外の時間枠で制限すると、追いつけません。

最大規模の Organization では、ダウンタイムの時間枠はまったく使えません。あらゆるタイムゾーンにまたがるため、読み取り専用期間をスケジュールできる営業時間外がありません。失われる開発時間のコストはユーザー数に比例して増えるため、1 日の中断は数百万ドルに達します。GitLab.com のスケーリングは GitLab の責任であり、顧客の責任ではないため、そのコストを顧客に押し付けることはできません。

したがって、Organization の規模にかかわらず、Organization のダウンタイムを最小化しなければなりません。しかし、Organization は許容できる読み取り専用時間枠内で転送するにはデータが多すぎます。これにより、Organization を移動するための中心的な要件が生まれます。データの大部分は読み取り専用時間枠が開く前に移行先に存在していなければならず、その時間枠ではすべてを転送するのではなく、小さな差分だけを処理する必要があります。

## 決定事項

GitLab.com Cells 間で Organization の移動をオーケストレーションする、Runway でデプロイされるコントロールプレーンサービスとして Org Mover を構築します。

1. **Org Mover サービスはコントロールプレーンです。** 各移動を順序付けられたステップのシーケンスとして実行し、各遷移の前に条件を確認し、すべての移動に関する状態を保持し、リアルタイムのステータスを公開し、監査証跡を記録します。
2. **デプロイモデル: 長期稼働の RunwayService。** Org Mover は永続的な状態データベースに支えられた長期稼働の [RunwayService](https://docs.runway.gitlab.com/welcome/introduction/) です。RunwayJobs は避けるべきであり、その代わりに重い作業をサブシステムに委譲すべきです。
3. **移動は保存されたステップのシーケンスとして実行されます。** 各移動は事前チェック、データレプリケーション、最終同期、ルーティング切り替えなどの順序付けられたステップを通ります。Org Mover は各ステップの後に進捗を保存するため、中断された移動は最初からやり直すのではなく、中断された場所から再開します。
4. **不完全なデータへルーティングを切り替えない。** Org Mover は、チェックサム、行数、スポットチェックを使用してターゲットのデータが完全でソースと一致していることを確認するまで、Organization のトラフィックをターゲット Cell に送りません。途中の通常のレプリケーション失敗は想定され、再試行されます。それらは移動を止めません。この確認なしに切り替えると顧客データを失うリスクがあります。
5. **最初は人が go/no-go 判断を行います。** カットオーバーは、Org Mover が Organization のトラフィックを旧 Cell から新 Cell へ送る瞬間であり、移動が本番反映される時点です。カットオーバーの前に、エンジニアがレプリケーションと検証のステータスをレビューし、切り替えを承認します。メトリクスと確信度が高まれば、この判断は自動化できます。
6. **ダウンタイムの時間枠の前に各 Organization のデータを事前レプリケーションする。** Organization のデータの大部分は、すべてのデータストアにわたり、移行元が書き込み可能なまま移行先へレプリケーションされます。短い読み取り専用時間枠では小さな差分だけを処理します。
7. **PostgreSQL レプリケーションは Siphon に委譲されます。** Org Mover はストリームを設定してレプリケーションを開始します。Siphon は初期スナップショットを取得し、その後 CDC を自律的にストリーミングします。Org Mover は遅延を監視し、すべてのテーブルが追いつくのを待ち、完了または中止時にレプリケーションスロットを削除します。
8. **非 PG レプリケーションは Geo をベースラインとして再利用します。** これには Git リポジトリ、オブジェクトストレージ、コンテナレジストリ、Secrets Manager が含まれます。Org Mover はレプリケーションに Geo を再利用するため、必要に応じて両方の Cell を設定します。将来的には Geo が全体または一部で置き換えられる可能性があります。コントロールプレーンのコントラクトはそれにかかわらず同一です。
9. **ルーティングは Topology Service に委譲されます。** Org Mover は Topology Service の 2 フェーズの claim 更新を通じてカットオーバーを呼び出し、ルートを検証します。Topology Service はルーティング権限を持つシステムです。
10. **ロールバックは ADR-002 に従います。** カットオーバー後のデータロールバックはありません。戦略はカットオーバー前の go/no-go ゲート、短い [ADR-002](002_rollback_strategy.md) Stage 2 切り戻し時間枠、その後の前進修正に依存します。
11. **1 つのコントロールプレーンが多くの同時移動をオーケストレーションします。** 単一の Org Mover デプロイが多数の移動を同時に実行し、それぞれが独自の保存済み状態を持ち、それら全体への可視性と制御を提供します。移動ごとに 1 つのサービスがあるわけではありません。

### 検討した代替案 {#alternatives-considered}

#### デュアルライト

ソース Cell にコミットされた後にデータをレプリケーションする代わりに、遷移中にアプリケーションがすべての変更をソースとターゲットの両方へ書き込み、ターゲットが追いついてから切り替える方法があります。デュアルライトには、Organization が使用するすべてのデータストア、つまり PostgreSQL、Git リポジトリ、オブジェクトストレージ、コンテナレジストリ、Secrets Manager にわたる書き込み経路の変更が必要です。それはデータストアごとにモノリスへの大規模で侵襲的な変更です。Cells の緊急性とあわせて、現時点ではこれを却下します。

#### Direct Transfer

GitLab の [direct transfer による移行](https://docs.gitlab.com/user/group/import/) を使って、Organization のグループとプロジェクトを API 経由で移動します。却下: これは既知のカバレッジギャップを持つ、遅い論理的な API レベルの移行です。レコード ID を書き換えるため参照が壊れ、それだけで除外されます。また事前レプリケーションの経路がないため、転送全体を読み取り専用時間枠内で行う必要があり、まさに大規模 Organization が除外するものです。

#### ファイルベースのグループ・プロジェクトのエクスポート／インポート

各グループとプロジェクトをファイルにエクスポートし、そのファイルをターゲット Cell でインポートします。Direct Transfer と同じ理由で却下され、さらにいくつかの理由が加わります: これは同じ ID 書き換えとカバレッジギャップを持つ、より古いファイルベースの経路であり、エクスポート、アップロード、インポートのラウンドトリップを追加します。Direct Transfer と同様に事前レプリケーションの経路がないため、転送全体が読み取り専用時間枠内で行われます。

#### Cell 全体をコピーし、カットオーバー後に移行先をクリーンアップする

レガシー Cell 全体をレプリケーションし、移動した Organization をカットオーバーしてから、それ以外のすべてを削除します。これをより形式的にしたもの、[大規模 Cell の分割](../../cells/impacted_features/data-migration/) は、システム全体の物理レプリケーション（Geo、PostgreSQL 物理レプリケーション）を使って Cell を多数のレプリカにクローンし、各レプリカを保持する Organization に対して権威あるものとして昇格させます。却下: いずれの形式でも依然として Organization へのスコープ化が必要であり、それは今度はライブ Cell 上のリスクのある大量削除になります。すぐに破棄される完全なコピーでストレージを増幅させ、他のテナントのデータを自分のものではない Cell に置くことになります。

#### モノリス内部からオーケストレーションする

スタンドアロンのコントロールプレーンサービスではなく、モノリス内部の Rails 機能と Sidekiq ジョブとしてオーケストレーションを構築します。却下: オーケストレーターは、それが操作する Cell の内部に存在することになります。これには、緩和して最終的に廃止することを目的としているレガシー Cell も含まれ、それらの Cell のデプロイ、スケーリング、障害ドメインを共有することになります。スタンドアロンのサービスは独自の状態データベースを保持し、すべての Cell にまたがってクラスター全体で稼働し、単一の Cell が読み取り専用になったり消失したりしても生き残ります。スタンドアロンのサービスが委譲する Cell ローカルのコントロールプレーンは [将来の方向性](#boundary-contracts) であり、その代替ではありません。

## スコープ {#scope}

この ADR は **GitLab.com SaaS** のユースケース、具体的には GitLab.com Cells 間で Organization を移動すること、**レガシー Cell からターゲット Cell** を対象とします。設計は意図的により広いユースケースを視野に入れていますが（[Non-goals](#non-goals)を参照）、GitLab.com のレガシーからターゲットへのケースを超えるものはここでは約束しません。Org Mover が扱う必要がある具体事項は次のとおりです:

- レガシー Cell には複数の物理 PostgreSQL データベースがあり、ターゲット Cell は複数の論理データベースを持つ 1 つの物理 PostgreSQL を使用します。
- レガシー Cell のデプロイインフラストラクチャはカスタムです。ターゲット Cell は標準化された Cell デプロイを使用します。Org Mover 自体は標準化された Runway デプロイを使用しますが、これは self-managed ではまだ利用できません。Org Mover のソース Cell とのやり取りはレガシーインフラストラクチャを反映します。
- レガシー Cell にはターゲット Cell よりはるかに多くの Gitaly ストレージがあります。Org Mover はそれらの間を変換しなければなりません。

## 非目標 {#non-goals}

これらのユースケースはスコープ外です。それぞれ後で再検討される可能性があります:

- **Self-managed および GitLab Dedicated の移行オーケストレーション。** Org Mover は GitLab.com Cells を対象とします。
- **クロスプラットフォーム移行（self-managed から SaaS へ、またはその逆）。**
- **任意の Cell から任意の Cell へ。** 将来の方向性であり、この設計で提供されるものではありません。GitLab.com のレガシーからターゲットへの移行が運用可能になった後の後続ワークストリームです。
- **派生データストア（ClickHouse、Elasticsearch）の移行。** これらはレプリケーションされるのではなく、移行後にターゲット Cell 上で再構築されます。ClickHouse については特に、ターゲット Cell の既存の [PostgreSQL から ClickHouse への Siphon パイプライン](https://docs.gitlab.com/development/database/clickhouse/clickhouse_table_design_with_siphon/#working-in-cells-environment) がこれを自動的に処理します。

## エンジニアリング原則 {#engineering-principles}

これらの原則は、すべての実装上の選択とレビューを導きます。データプレーンに依存せず、チームがどのデータプレーンアーキテクチャを選択しても成り立ちます。これに違反する変更には、明示的で記録された根拠が必要です。

1. **Org Mover サービスはコントロールプレーンであり、データはそれを通過しません。** Org Mover はコマンドを発行し、進捗を読み、判断します。調整されるシステムがバイト列を移動します。
2. **各ステップを再試行しても安全にする。** 中断または再実行されたステップは、二重適用やデータ破損ではなく、同じ結果に到達するべきです。insert より upsert、最初からの再開よりチェックポイントからの再開のように、安全に繰り返せる操作を優先します。
3. **読み取り専用の前に高コストなものをすべて事前レプリケーションする。** 移行元が書き込み可能な間に大量データを移動し、読み取り専用時間枠中は小さな差分だけを処理します。
4. **コンポーネントを直交させる。** Org Mover は各サブシステムを小さく固定されたコントラクト、つまりコマンドの発行、進捗の読み取り、検証、ゲートを通じて調整します。サブシステムのセマンティクスが正しくゲートするために漏れ出す必要がある場合は、その結合を隠すのではなくコントラクトで明示します。

## 境界コントラクト {#boundary-contracts}

Org Mover は複数のシステムを調整します。高レベルのコントラクトは次のとおりです。

移動ごと、およびフリート全体で以下を担当します:

- エンジニアが移動を管理するためのインターフェース（最初はおそらく Slack ボットと API）を提供する。複数のオペレーターが移動を進め、引き継ぎ、ステータスを確認できるように構築される
- 移動状態を追跡する
- デプロイフリーズやアクティブなバッチ化バックグラウンドマイグレーションの確認など、移動の遷移を事前検証する
- カットオーバーの前に、ソースとターゲットの両方にまたがるチェックサム、行数、スポットチェックを使用して、ターゲットのデータがソースと一致することを検証する
- Organization Read-Only Mode を切り替える
- Siphon を設定および管理する
- Geo を設定および管理する
- 監査のためにオペレーターの操作を Org Mover で追跡する
- 一時停止、再開、中止を調整する
- [Cell ローカルのコントロールプレーン（内部リンク）](https://gitlab.com/gitlab-com/gl-infra/delivery/-/work_items/22133) が存在する場合、Org Mover は Cell のモノリス API、サービス、データストアと直接やり取りするのではなく、それを通じて Cell とやり取りする（Siphon のパブリッシャーとレシーバーのセットアップなど）

### Siphon（PostgreSQL レプリケーション）

Siphon は、当初の Cohort 0 計画であった [AWS DMS](../dms-blueprint.md) より優先して選ばれました。DMS は [org 移動のコンテキストで PostgreSQL のパーティション化テーブルをレプリケーションできませんでした](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/work_items/419)。パーティション化テーブルに対する DMS の唯一の文書化された回避策は、ロード前にターゲットを truncate することですが、これはターゲット Cell が既に他の Organization のデータを保持している場合には不可能です。さらに悪いことに、`partition_id` の値は各 Cell に固有なので、リーフパーティションには変換ステップが必要ですが、クローズドな AWS サービスである DMS はこれを提供しません。Siphon は GitLab が所有しているため、その変換を行えるように拡張できます。

担当:

- PostgreSQL 変更データキャプチャ: 初期スナップショットと CDC ストリーミング
- 起動時にレプリケーションスロットを作成する（Org Mover が削除する）

コントロールプレーンが考慮しなければならない制約:

- PostgreSQL レプリケーション中、ターゲットスキーマはソーススキーマと後方互換でなければならない
- Siphon は起動時にレプリケーションスロットを作成するが、削除しない。未消費のスロットはソースプライマリディスクを埋めるため、Org Mover が削除しなければならない
- Siphon は停止を指示されるまでストリーミングを続ける。Org Mover はカットオーバー時に Siphon を停止しなければならない

### Geo（非 PG データレプリケーション）

担当:

- Git リポジトリ、オブジェクトストレージ、コンテナレジストリ、Secrets Manager のデータをターゲット Cell へコピーまたはレプリケーションする
- 非 PG データのレプリケーションを検証する

コントロールプレーンが考慮しなければならない制約:

- 非同期レプリケーションはアクティブな Organization で 100% には決して到達しない

### Monolith（アプリケーションと Organization の状態）

担当:

- アプリケーションの読み取り専用モード（正しさはアプリケーション側が所有、[ADR-010 読み取り専用モード](../../organization/decisions/010_organization_read_only_mode.md)を参照）
- ターゲット Cell モード
- スキーマと DDL

### Topology Service（ルーティング）

担当:

- ルーティング権限を持つシステムとしてのルーティング
- Org Mover がカットオーバーで呼び出す 2 フェーズの claim 更新、つまり後戻りできない時点

## 参考資料 {#references}

- [ADR-002: ロールバック戦略](002_rollback_strategy.md)
- [Organization 読み取り専用モード (ADR-010)](../../organization/decisions/010_organization_read_only_mode.md)
- [Organization データ移行ブループリント](../_index.md)
- [`gitlab-org/cells/org-mover` リポジトリ](https://gitlab.com/gitlab-org/cells/org-mover)
- [Topology Service](../../cells/topology_service.md)
- [Runway](https://docs.runway.gitlab.com/)
