---
title: Gitaly での Reftable ロールアウト
status: ongoing
creation-date: "2024-09-19"
authors: [ "@knayakgl" ]
owning-stage: "~devops::systems"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitaly_reftable_rollout/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T08:55:32Z"
translator: claude
stale: false
lastmod: "2025-09-01T10:53:30+02:00"
---

<!-- Design Doucments often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

{{< engineering/design-document-header >}}


<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## サマリー

Gitaly の Git リポジトリは参照を格納するために「files」バックエンドを使用しています。このブループリントは、既存および新規のすべてのリポジトリを新しい reftable バックエンドに移行することをカバーします。reftable バックエンドは参照をバイナリ形式で格納し、「files」バックエンドのいくつかの欠点を克服します。reftable バックエンドの詳細については、[このトピックに関するブログ投稿](https://about.gitlab.com/blog/2024/05/30/a-beginners-guide-to-the-git-reftable-format/)をご覧ください。

reftable バックエンドは全体的にパフォーマンスが高く（各書き込みが別のトランザクションを使用する連続した書き込みを除く）、トランザクションとアトミックな書き込みをサポートし、より効率的なストレージを持っています。最終的な結果は非常に有益ですが、データの破損を避けるために安全な移行パスを確保する必要があります。

このブループリントは特に GitLab SaaS のロールアウトを対象としています。Gitaly でのトランザクションが完全にロールアウトされたら、それに続くことができます。

参照バックエンドをクライアントに公開しないため、管理者からの関与は期待されていません。

注意: リポジトリを「files」バックエンドから「reftable」バックエンドに変換しても、クライアントには何も影響しません。クライアントは自分のシステムで「files」バックエンドを使い続けることができます。変更はサーバー側のみであり、クライアントは違いに気づかないはずです。

## Issue トラッキング

ロールアウトは[独自のエピック](https://gitlab.com/groups/gitlab-org/-/epics/14946)で追跡されます。これはさらに[ステージング](https://gitlab.com/groups/gitlab-org/-/epics/12503)と[本番](https://gitlab.com/groups/gitlab-org/-/epics/14942)のロールアウトに分割されており、個々の OKR との追跡とリンクを容易にしています。

__現在の状態: Reftables はステージングに正常にロールアウトされました。__

これは[GitLab で reftables を有効にする](https://gitlab.com/groups/gitlab-org/-/epics/4220)という、いくつかのノンブロッキングな改善も含む、より大きなエピックの一部です。

## 動機

伝統的に、Git には「files」バックエンドと呼ばれる単一の参照バックエンドのみが付属していました。「files」バックエンドは参照をルーズなファイルに格納しており、参照名がファイルのパスでその内容が参照の値です。ハウスキーピング中、いくつかのルーズな参照が単一の「packed-refs」ファイルに結合されます。

「files」バックエンドにはいくつかの欠点があります。

- ルックアップには packed-refs ファイルから参照を読み取ることに加えて、ルーズな参照ファイルを確認する必要があります。リポジトリには通常、両方が混在しています。
- 参照トランザクションはアトミックにコミットされません。
- 人間が読めるテキスト形式で格納されるため、ストレージが効率的に利用されません。
- packed-refs から参照を削除するにはファイル全体を書き直す必要があります。多くの参照を持つリポジトリでは、これが著しく遅い操作になる可能性があります。
- ルーズな参照を packed-refs にコンパクション化するのはコストのかかる操作です。

[Git v2.45.0 以降](https://about.gitlab.com/blog/2024/04/30/whats-new-in-git-2-45-0/#reftables-a-new-backend-for-storing-references)、「reftable」と呼ばれる新しい参照バックエンドが追加されました。reftable バックエンドは「files」バックエンドのすべての欠点に対処します。

- ストレージを最適化するために、プレフィックススキップを持つバイナリ形式を使用します。
- 読み込むファイルが少なくなり、アクセス時間が短縮されます。
- グローバル参照ストアロックを使用してアトミックな変更をサポートします。
- 参照の削除は O(1) の操作です。
- コンパクションをその場で実行します。

Gitaly でホストされているリポジトリの長年の問題点の 1 つは、大規模なリポジトリで参照数が増加することで生じるスケーラビリティの Issue でした。

例えば、Gitaly での参照削除が非常に遅い操作であることがわかります。新しいルーズ参照ファイルの作成のみが必要な参照の書き込みと比較して、再パックが必要なためです。

__DeleteRefs レイテンシー（[参照](https://dashboards.gitlab.net/d/gitaly-feature-status/gitaly3a-gitaly-feature-status?from=1726030947986&to=1726052547986&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main&orgId=1&var-method=DeleteRefs&viewPanel=8)）__

![DeleteRefs レイテンシー](/images/handbook/engineering/architecture/design-documents/gitaly_reftable_rollout/gitaly_reftable_rollout_deleterefs.png)

<br/>

__WriteRef レイテンシー（[参照](https://dashboards.gitlab.net/d/gitaly-feature-status/gitaly3a-gitaly-feature-status?from=1726030800000&to=1726052459999&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main&orgId=1&var-method=WriteRef&viewPanel=8)）__

![WriteRef レイテンシー](/images/handbook/engineering/architecture/design-documents/gitaly_reftable_rollout/gitaly_reftable_rollout_writerefs.png)

<br/>

参照削除の平均レイテンシーが WriteRefs の約 20 倍と非常に高いことがわかります。この差は、より大きなパックファイルを持つ大規模なリポジトリではさらに大きくなります。このような問題や上記で述べた問題を解決するために、既存のリポジトリを「files」バックエンドから新しい reftable バックエンドに移行することは理にかなっています。この移行には、新しいリポジトリのデフォルトとして reftable バックエンドを設定し、最終的には Gitaly で「files」バックエンドを非推奨にすることが含まれます。

### ゴール

- 既存のリポジトリが files バックエンドから reftable バックエンドに移行されます。
- 新しいリポジトリはデフォルトで reftable バックエンドを使用します。
- 移行中または移行後に予期しない Issue が発生した場合、回復戦略はそれに対処して解決することです。
- 移行前後の参照の読み書きに関連するパフォーマンスとストレージの変化を追跡するメトリクス。
- セルフホストの顧客が reftable に移行するための計画が策定されます。特に指定のない限り、このドキュメントの残りは GitLab SaaS に適用されます。

### 非ゴール

- Reftables は Gitaly でのトランザクションでのみサポートされます。これは、トランザクションなしの Praefect はサポートされないことを意味します。Reftables は参照データベース上のグローバルロックを取得するため、Praefect との使用時に 2 つ以上の並行リクエストが同時に更新を試みるとデッドロックが発生する可能性があるためです。ただし、トランザクションでは各書き込み操作がスナップショット上で動作するため、これはもはや Issue ではありません。

## プロポーザル

ステージングへのロールアウトが完了した状態で、現在の本番へのロールアウト計画は以下の通りです。

- Prod Canary
  - MigrateReferenceBackend RPC を使用してターゲットリポジトリを移行する（詳細は以下）。
  - 移行後のメトリクスを評価し、Issue/エラーを監視する。
  - 既存のリポジトリを移行するために機会的マイグレーターを有効にする。
  - 新しいリポジトリに対して reftable を有効にする。
- 本番の残り
  - WAL のロールアウト後、既存のリポジトリを移行するために機会的マイグレーターを有効にし、新しいリポジトリに対して reftables を有効にする。

Canary インスタンスは WAL がしばらくの間 Canary で実行されており、ロールバックの計画がないため、単独で取り上げます。

### 本番 Canary でターゲットにするリポジトリ

初期移行では、以下のリポジトリをターゲットにする予定です。

- gitlab-renovate-forks/gitlab
- gitlab-community/gitlab-org/gitlab
- gitlab-org/gitlab

これらは Canary で最もアクティブな上位 3 つのリポジトリです。しかし、`gitlab-org/gitlab` は重要な性質を持ち、数百万の参照を含むため、最初にターゲットにしたくありません。`gitlab-renovate-forks/gitlab` から移行を開始します。これは内部リポジトリであるためです。1 週間安定したら、`gitlab-community/gitlab-org/gitlab`、次に `gitlab-org/gitlab` をターゲットにします。

## 設計と実装の詳細

ロールアウトを 2 つのストリームに分ける必要があります。

1. 新しいリポジトリ
2. 既存のリポジトリ

既存のリポジトリのみにロールアウトを実装すると、常に新しいリポジトリに追いつくことになります。逆に、新しいリポジトリのみにロールアウトを実装すると、既存のリポジトリを移行することはありません。

したがって、両方を計画することが不可欠です。2 つのうち最も簡単にターゲットにできるのは新しいリポジトリです。新しいリポジトリは一般的に小さく、これにより小規模で reftable ライブラリをテストできます。また、既存のリポジトリのみ移行が必要となる明確な線引きが確保されます。例外は URL からインポートされるリポジトリの場合ですが、この値はすべての新しいリポジトリの約 2% と非常に少なく、段階的にロールアウトするため、リポジトリ自体がゼロから作成されてインプレース移行が関与しないため、Issue は発生しないはずです。

もう 1 つのオプションは、フィーチャーフラグを使用していくつかの既存のリポジトリを移行することです。移行の正確さと効率性、および reftable ライブラリを検証した後、新しいリポジトリに対して reftables を有効にし、残りのリポジトリを移行します。このアプローチにより、移行ツールをすでにテストしているため、新しいリポジトリを files バックエンドに戻す安全ラッチが得られます。しかし、そうなると、既存のリポジトリの最良の戻し方はバックアップから復元することになるため、reftables から files バックエンドへの移行を実際にはテストしないことになります。

結論として、最初にいくつかの GitLab リポジトリを移行してドッグフーディングします。次に、すべての新しいリポジトリに対して reftables を徐々に有効にします。最後に、残りの既存のリポジトリを移行します。

### 新しいリポジトリ

Gitaly で作成されるすべての新しいリポジトリは `git-clone(1)` または `git-init(1)` で行われます。どちらのコマンドも使用する参照バックエンドを指定する `--ref-format=<backend>` 引数を取ります。

新しいリポジトリに reftable を使用するには、`gitaly_new_repo_reftable_backend` フィーチャーフラグを有効にする必要があります。

### 既存のリポジトリ

Git は `git-refs(1)` の `migrate` サブコマンドを通じて移行に必要なツールを提供しています。このコマンドは reftable バックエンドへの移行手段を提供しますが、移行中にリポジトリ全体をロックしないため、並行した書き込みが発生すると不整合な状態になる可能性があります。そのため、reftable 移行の依存関係としてトランザクションマネージャーに依存します。トランザクションマネージャーが孤立したスナップショットを提供するためです。

#### MigrateReferenceBackend RPC

特定のリポジトリを移行するために、`MigrateReferenceBackend` RPC を提供します。この RPC は指定されたリポジトリを移行します。これはテスト用の単一リポジトリを移行し、パフォーマンスの劣化が観察された場合に元に戻すのに有益です。

Rails コンソールからリポジトリを見つけて移行するには以下のようにします。

```ruby
project = Project.find_by_full_path('gitlab-org/gitlab-test')
gitaly_repository_client = Gitlab::GitalyClient::RepositoryService.new(project.repository)

# Will print the current reference backend used in Git
gitaly_repository_client.repository_info

# To migrate to the Files backend.
gitaly_repository_client.migrate_reference_backend

# To migrate to the reftable backend.
gitaly_repository_client.migrate_reference_backend(to_reftable: true)
```

#### 機会的マイグレーター

単一リポジトリの移行は reftable バックエンドをテストするための迅速な方法ですが、より広いロールアウトのためには自動化されたプロセスが必要です。機会的マイグレーターは、すべての受信 RPC にミドルウェアを追加し、以下のときに移行を開始します。

1. 受信した読み取りリクエストがある
2. 完了した書き込みリクエストがある

バックグラウンドの goroutine が実行する新しい移行を一度に 1 つずつ取得し、新しい/別のトランザクションで実行します。これにより RPC 自体に干渉しないことが保証されます。マイグレーターはリポジトリに新しい書き込みリクエストがある場合、そのリポジトリの進行中の移行もキャンセルします。これにより書き込みの競合をできるだけ避けることができます。

移行が失敗した場合（例えば、別の受信書き込みリクエストが競合を引き起こす）、理由をログに記録し、高アクティビティのリポジトリでシステムを過負荷にしないように指数バックオフメカニズムを使用します。

機会的マイグレーターを有効にするには、`gitaly_reftable_migration` フィーチャーフラグを使用します。

#### 強制移行

機会的マイグレーターはリポジトリを移行しようとしますが、すべてのリポジトリの移行を保証しません。reftables に対して十分な確信を得たら、残りのリポジトリを強制的に移行したいと思うでしょう。これはブロッキングマイグレーターを追加することで行えます。

WAL はそのようなマイグレーションを追加するためのフレームワークを提供しており、リポジトリの他のリクエストの前に実行されます。このフレームワークを利用して既存の移行コードをプラグインし、すべてのリポジトリが reftables を使用するように変換されることを確保できます。

#### 正確性のチェック

files バックエンドから reftable バックエンドに既存のリポジトリを移行する際、移行がリポジトリの整合性を維持することを確認する必要があります。ファイルシステムの状態は変化しますが、論理的な状態は同じままである必要があります。移行の前後で `git for-each-ref --include-root-refs` を実行したハッシュを比較することで確認できます。

移行はトランザクションで実行されるため、検証が成功した場合のみ変更をコミットします。失敗した場合、トランザクションは単に中止されてリポジトリは移行前の状態のまま維持されます。

### 有効性の評価

「reftables」バックエンドを使用することの期待は、最終的に「files」バックエンドを上回るパフォーマンスを発揮することです。これは差異を示す十分なメトリクスをキャプチャする必要があることを意味します。これらのメトリクスは「reftable」バックエンドへの改善のための情報も提供すべきです。

現在、Gitaly で実行されるすべての Git コマンドの[メトリクスをキャプチャ](https://gitlab.com/gitlab-org/gitaly/-/blob/master/internal/command/command.go#L29)しています。最も簡単な方法は、これらのメトリクスに「ref-backend」ラベルを追加して、これらのコマンドからより高レベルのグラフを構築できるようにすることです。

特に確認したいいくつかの詳細：

- 単一参照に対する CRUD レイテンシー
- 単一トランザクションでの複数参照に対する CRUD レイテンシー
- コンパクションにかかる時間
- refs を扱う RPC の平均レイテンシー。具体的には[ref サービス](https://gitlab.com/gitlab-org/gitaly/-/blob/master/proto/ref.proto)の RPC。

この情報はこの[エピック](https://gitlab.com/groups/gitlab-org/-/epics/15072)で追跡します。

[GPT](/handbook/support/workflows/gpt_quick_start/)を使用して reftables 上で E2E を実行する可能性もあり、[こちらで追跡](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/2432)しています。

## メトリクスとロギング

- [Grafana ダッシュボード](https://dashboards.gitlab.net/d/ce1mnfe77u9s0f/reftable-rollout?from=now-30m&orgId=1&timezone=browser&to=now&var-PROMETHEUS_DS=mimir-gitlab-gstg&var-stage=main)。
- [機会的マイグレーターのログ](https://nonprod-log.gitlab.net/app/r/s/iu5RU)

## 元に戻す

移行をロールアウトする前にドライランの多段階アプローチをとるため、エラーの可能性は大幅に減少します。それでも、対処する必要が生じる可能性のある未知の未知があります。

Issue を 2 つの広いシナリオに分類できます。

### 移行の失敗

移行は移行プロセス中にエラーがある場合に失敗します。多くの Issue から発生する可能性があります。しかし、Gitaly のトランザクションマネージャーを使用しているため、失敗した移行は単にロールバックされます。移行にはコミット前の検証も含まれるため、システムは失敗した試みをロールバックします。移行が失敗した理由を評価する以外に介入は必要ありません。

### 移行の成功

成功した移行とは、リポジトリが最終的に reftables を使用しており、移行の検証ステップが成功したものです。移行がコミットされます。このようなシナリオでは理想的にはロールバックの必要はないはずですが、以下のシナリオを考慮すべきです。

1. reftables を使用したリポジトリのパフォーマンスが満足のいくものでない。
2. reftable バックエンドにバグがあるが、リポジトリの状態は正常です。リポジトリの状態が正常であるため、このようなバグは Git のバグとして扱い、Git チームが対処します。Gitaly が使用する Git バージョンでバグにパッチを当てるか、修正を直接アップストリームに適用します。
3. リポジトリが時間とともに破損した。reftable バックエンドが時間とともにリポジトリを破損させた場合、唯一の解決策はディスクバックアップから復元することです。これがどれほど効果的かについての議論は[こちら](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/team/-/issues/16#note_2230262996)にあり、Gitaly でのバックアップ復元の将来についても同様です。
4. いくつかのリポジトリがすでに reftables に移行されたノードで Gitaly トランザクションモード（WAL）が無効にされている。`.com` の場合、Praefect を使用していないため問題ありません。Reftables はトランザクションが元に戻された場合でも引き続き機能します。しかし、Praefect を使用しているセルフホストの顧客のためにこの可能性を考慮する必要があります。

#### 単一リポジトリの元に戻し

単一リポジトリを元に戻すには、`MigrateReferenceBackend` RPC を使用して特定のリポジトリをターゲットにし、files バックエンドに移行するだけです。

#### 複数リポジトリの元に戻し

複数リポジトリの移行にも単一リポジトリと同じアプローチを使用できます。大規模なリポジトリの破損がある場合、バックアップから復元するか、よりケースバイケースの修正が必要になります。一般的な元に戻しソリューションはここには適用されません。

WAL の後に reftables ロールアウトが続くという前提条件があります。reftables へのリポジトリの移行の前に、そのノードで WAL がすでに安定していることを確認する必要があります。WAL のロールバックが予見される場合、リポジトリを files バックエンドに戻すためのカスタムロジックを追加する必要があります。これは `internal/gitaly/storage/storagemgr/middleware_recovery.go` の WAL の回復ロジックに従うことができます。

## Dedicated

TBA

## セルフホスト

reftable ロールアウトはトランザクションマネージャーに依存しています。Praefect なしの環境では、reftables は WAL なしで機能できます。混乱を避けるために、WAL を有効にする将来にのみ焦点を当てましょう。

ただし、考慮すべきエッジケースがあります。Praefect を実行しているセルフホストの顧客が WAL を有効にし、すべてのリポジトリを reftable に移行し、最終的に Praefect の使用に戻すことを決定した場合、これは機能しません。reftables は Praefect と互換性がないためです。このようなシナリオを計画する必要があります。

### トランザクションを無効にする際に reftable バックエンドを元に戻す

Gitaly ノードは Praefect ノードの背後にあるかどうかを知りません。そのため、顧客が Praefect を再有効にする環境をターゲットにするのは難しいですが、顧客がトランザクションマネージャーを有効/無効にするタイミングは常に知ることができます。

顧客がトランザクションを無効にすると、reftables を使用しているリポジトリの存在を検出できます。
