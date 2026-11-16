---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 008: Omnibus は高度なコンポーネントのデータストアを管理しない"
description: "Omnibus は、高度なコンポーネント用の PostgreSQL、Redis、その他のデータストアをプロビジョニングまたは設定せず、高度なコンポーネントは外部のデータストアを使用するべきであるという決定。"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/008_no_omnibus_managed_data_stores/
upstream_sha: "000b58dcbc2a482a76ad9c605d66f7a602ebfd63"
lastmod: "2026-11-16T11:43:18-03:00"
translated_at: "2026-11-16T21:15:41+00:00"
translator: codex
stale: false
---

この ADR は、
[ADR-006: OAK コンポーネントのデータベース準備を自動化しない](006_no_automated_database_preparation.md)
および
[ADR-004: OAK でのマルチノード Omnibus サポート](004_multi_node_omnibus_support.md)の「データストレージの考慮事項」セクションにある PostgreSQL と Redis に関するガイダンスを置き換えます。

## 背景 {#context}

OpenBao や Artifact Central などの高度なコンポーネントは、独自のデータストアを必要とします。ほとんどは
PostgreSQL を必要とし、一部は Redis も必要とします。Gitaly リポジトリなど、GitLab 自体のデータへのアクセスを
必要とするものもあります。この ADR では、そのアクセスを別に扱います（[決定](#decision)を参照）。

ADR-006 は、コンポーネントを有効にしても Omnibus はデータベースを自動的にプロビジョニングしないと決定しましたが、
運用者が Omnibus 管理下の PostgreSQL 上でコンポーネントのロール、データベース、拡張機能を作成する手段として、
`postgresql['component_databases']` を残しました。ADR-004 は、高度なコンポーネントがネットワーク経由で
Omnibus 管理下の PostgreSQL、Redis、Gitaly にアクセスする方法を説明していました。

その後、次のような変化がありました。

- ADR-007（[handbook!21809 で提案](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/21809)）は、OAK を Omnibus ホストの外部で稼働する Kubernetes クラスターに限定しています。
  Omnibus 管理下のデータストアを使うコンポーネントは、常にホストをまたいでアクセスすることになります。
- 同梱されたデータストアをクラスターに公開することは、標準的なネットワーク設定より難しいと判明しました。
  [omnibus-gitlab!9696](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9696)での
  作業により、多くの CNI が Pod トラフィックをマスカレードするため、通常 `pg_hba.conf` では Pod CIDR ではなく、
  クラスターのノードアドレスを許可する必要があることがわかりました。また、`listen_addresses` の変更が
  有効になるのは PostgreSQL の再起動後のみであることと、単一ノードの Redis で TCP とパスワードを有効にすると、
  ほかの設定も同時に変更しない限り Rails の接続が切れることもわかりました。
- [gitlab#617038](https://gitlab.com/gitlab-org/gitlab/-/work_items/617038)で行った
  OAK 上の OpenBao の評価では、Kubernetes 上で稼働するコンポーネントが、そもそも Omnibus 管理下の PostgreSQL に
  依存すべきかどうかは未決のままでした。
  そこでの推奨は、依存すべきではないというものでした。

Omnibus 管理下のデータストアにデータを保存するコンポーネントは、どちらの側も制御できない形で
Omnibus デプロイメントと結び付きます。

- **可用性とフェイルオーバー。** コンポーネントは Omnibus のデータベースノードとともに停止し、
  フェイルオーバーの振る舞いは、コンポーネントのオーナーが運用していない
  Omnibus のトポロジー（Patroni、PgBouncer）に依存します。
- **分離。** Omnibus Redis は 1 つの共有パスワードを使用し、`gitlab.rb` には
  Redis ACL ユーザーの設定がないため、コンポーネントが GitLab のセッションや Sidekiq キューを読み取ったり、全消去したりできます。
  `md5_auth_cidr_addresses` を使って PostgreSQL を公開すると、クラスターのアドレス範囲から、すべてのロールと
  データベースへのパスワードログインが許可されます。
  [Artifact Central の概念実証（内部リンク）](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/10143#why-ac-doesnt-use-omnibus-postgresql-or-redis)で、
  これらの問題が見つかりました。
- **アップグレード。** `gitlab-ctl pg-upgrade` による PostgreSQL のメジャーバージョンアップグレードと Redis の
  アップグレードは、GitLab のニーズに合わせて計画されます。同じサーバー上のすべてのコンポーネントは
  互換性を持ち、同じダウンタイムを受け入れる必要があります。
- **バックアップと復元。** GitLab のバックアップツールは、GitLab 自体のデータベースを対象とします。コンポーネントの
  データベースには、いずれにしても独自のバックアップ、復元、災害復旧手順が必要です。
- **Geo。** コンポーネントのデータベースをセカンダリサイトに複製すべきであることや、
  コンポーネントが読み取り専用レプリカをサポートしていることを前提にするのは安全ではありません。
- **容量。** リファレンスアーキテクチャは、GitLab 向けに PostgreSQL と Redis のサイジングを行います。コンポーネントの負荷、
  接続数、ストレージは、このサイジングへの追加要因となり、各コンポーネントでその内容を文書化する必要があります。
- **サポートの境界。** データベースを共有すると、パフォーマンスや
  可用性の問題を誰が担当するのかが不明確になります。
- **移行パス。** OAK はクラウドネイティブ GitLab への橋渡しです。その本番デプロイメントでは、
  すでに外部の PostgreSQL と Redis を使用しています。Omnibus のデータベース内にあるコンポーネントのデータは、
  先に外部へ移行する必要があります。

## 決定 {#decision}

1. **Omnibus は、高度なコンポーネント用のデータストアをプロビジョニングまたは設定しません。** これには、次の作業が含まれます。
   - コンポーネント用に PostgreSQL、Redis、その他のデータストアサーバーを稼働させること。
   - ロール、データベース、スキーマ、拡張機能、PgBouncer プールなど、
     コンポーネント用のデータベースオブジェクトを作成すること。
   - コンポーネントのために、Omnibus 管理下の PostgreSQL や Redis を Kubernetes クラスターネットワークへ
     公開すること。
1. **高度なコンポーネントは外部のデータストアを使用するべきです。** たとえば、マネージドクラウドサービスや、
   Omnibus デプロイメントに含まれないセルフマネージドサーバーを使用し、コンポーネントに合わせて
   サイジングと運用を行います。
1. **Omnibus 管理下のデータストアを使うことは可能ですが、推奨しません。** 運用者が
   既存の設定（たとえば `postgresql['listen_address']`、
   `postgresql['md5_auth_cidr_addresses']`、Redis の `bind`、`port`、`password`
   設定）を使って、コンポーネントの接続先を Omnibus 管理下の PostgreSQL や Redis にすることは妨げません。GitLab は、
   高度なコンポーネント向けにこの構成のテストやドキュメント化を行わず、Omnibus も
   自動化しません。この構成のサポートはベストエフォートです。リスクについては[背景](#context)を
   参照してください。

この決定は、Omnibus ホストの外部で稼働する高度なコンポーネントに適用します。Omnibus が
同梱サービス用のデータストアを管理する方法は変更しません。`postgresql['component_databases']` は、
それらのサービス向けの内部メカニズムとして残します。たとえば、将来の基盤コンポーネントで、
Omnibus 管理下の PostgreSQL にそのデータベースを配置する必要があるものが該当します。これは、高度なコンポーネント用の
データベースを作成するためのユーザー向けの手段ではありません。

この決定は、独自のデータを保存するコンポーネントを対象とします。
GitLab データベースを複製する Orbit や、Gitaly にアクセスする Zoekt のように、GitLab 自体のデータを元の保存先から
読み取る必要があるコンポーネントは対象にしません
（[外部 Zoekt サーバー用の Gitaly の設定](https://docs.gitlab.com/integration/zoekt/#configure-gitaly-for-an-external-zoekt-server)）。
これらのコンポーネントは、既存の設定でそのアクセスを有効にして文書化します。その際、
保持する WAL の上限やレプリケーションスロットの監視など、GitLab のデータストアを保護するための
対策も含めます。この場合も、Omnibus は OAK 固有の自動化を追加しません。

## 結果 {#consequences}

- コンポーネントのドキュメントでは、外部のデータストアをサポート対象の構成として説明し、
  データストアの要件（エンジンとバージョン、拡張機能、サイジング、接続数、
  TLS）を記載します。
- コンポーネントのドキュメントには、高度なコンポーネント用の `postgresql['component_databases']` エントリを
  含めません。コンポーネントごとにコピー＆ペースト可能なエントリを文書化するという ADR-006 の
  要件は、適用されなくなります。
- Omnibus は、Omnibus 管理下の PostgreSQL や Redis をクラスターネットワークに公開するための
  OAK 固有の自動化を追加しません。
- 単一ノードの Omnibus インストールを使用するお客様は、高度なコンポーネントを実行する前に、
  追加のデータストアを用意する必要があります。小規模なインストールではコストが増えるため、コンポーネントの
  サイジングガイダンスに反映するべきです。
- コンポーネント用データストアのプロビジョニングと運用は、お客様だけに委ねるのではなく、
  その目的のために作られたツールへ移します。
  - Amazon RDS、Cloud SQL、Azure Database、ElastiCache、
    Memorystore などのマネージドサービス。
  - CloudNativePG などのクラスター内オペレーター。
  - コンポーネント向けに CloudNativePG 管理下の PostgreSQL を同梱する Crete
    （[Crete ADR-0016（内部リンク）](https://gitlab.com/gitlab-org/crete/-/blob/main/docs/adr/0016-crete-facilitates-oak-transition.md)、
    提案中）。
  - GitLab Operator と Bridge
    （[gitlab-operator#2308](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/work_items/2308)）。

  この手間を減らす自動化は、Omnibus ではなく、それらのツールで行います。
- Omnibus 管理下の PostgreSQL 上にコンポーネントのデータベースを配置している既存のインストールでは、
  遅くとも ADR-007 に基づいて `oak` 設定が削除されるリリースまでに、外部のデータストアへ
  移行する必要があります。方法は各コンポーネントで文書化します。OpenBao の手順は、
  [gitlab!266750](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/266750)の
  「Migrate from a colocated cluster」で提案されています。
- ホストをまたぐすべてのトラフィックと同様に、コンポーネントとそのデータストアの間のトラフィックは
  暗号化する必要があります。

## 検討した代替案 {#alternatives-considered}

- コンポーネントのデータベースを配置する推奨手段として `postgresql['component_databases']` を使う、**ADR-006 の現状を維持する**案。
  [背景](#context)で説明した結合関係のため不採用です。
  すべてのコンポーネントが別のインフラストラクチャ上で稼働すると、この問題はさらに悪化します。
- [omnibus-gitlab!9696](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9696)で提案された、
  **同梱の PostgreSQL と Redis のネットワーク公開を自動化する**案。
  この提案はマージせずにクローズされました。推奨しないトポロジーを採用しやすくするため、不採用です。
  この構成を選ぶ運用者は、既存の設定を使って、すでにこれらのサービスを内部
  インターフェースで公開できます（決定 3 を参照）。

## 参考資料 {#references}

1. [omnibus-gitlab#10150: OAK のスコープを縮小する](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/10150)
1. [gitlab#617038: OAK 上の Secrets Manager を評価する](https://gitlab.com/gitlab-org/gitlab/-/work_items/617038)
1. [omnibus-gitlab#9997: OAK のデータベース準備に関する設計戦略を定義する](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/9997)
1. [ADR-004: OAK でのマルチノード Omnibus サポート](004_multi_node_omnibus_support.md)
1. [ADR-006: OAK コンポーネントのデータベース準備を自動化しない](006_no_automated_database_preparation.md)
