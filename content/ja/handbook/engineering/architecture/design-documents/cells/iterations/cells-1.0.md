---
stage: core platform
group: Tenant Scale
title: "Cells: 1.0"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/iterations/cells-1.0/
upstream_sha: c82d3d351baf0f945623f1feaf9adc987ec1d4f9
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
---

**注記:** Cells 1.0、1.5、2.0 というフェーズ名は Protocells に置き換えられています。Cells 1.0 で行われた多くの作業はそのまま Protocells に引き継がれます。

このドキュメントは Cells 1.0 の技術的な提案について説明します。

Cells 1.0 はセル型アーキテクチャの最初のイテレーションです。Cells 1.0 のターゲットは社内顧客のみを対象としたソリューションを提供し、次のイテレーションの基盤となるステップとして、より小さなスコープで何かを提供することです。

Cells 1.0 は GitLab.com SaaS にデプロイされることを意図した完全に動作する機能です。

[Cells 1.5](cells-1.5.md) について詳しく読んでください。これは既存の顧客を移行するメカニズムを提供することを意図しており、Cells 1.0 アーキテクチャの上に構築されています。

[Cells 2.0](cells-2.0.md) について詳しく読んでください。これはセル型アーキテクチャで公開およびオープンソースの貢献モデルをサポートすることを意図しています。

## はじめに

Cells 1.0 は以下の期待を持つ社内顧客をターゲットとしています:

1. Organization のために私たちのマルチテナント SaaS ソリューション（GitLab.com）を使用したい。
1. GitLab.com の他の部分よりも遅れてアップデートを受け取る可能性があることを受け入れる。GitLab がパッチリリースを行う際、Delivery チームはリリースを公開する前にすべての Cell（本番環境）がパッチリリースバージョンを実行していることを確認します。これは、パッチリリース以外では、すべての Cell が同じバージョンの GitLab を実行していることを意味するわけではありません。詳細については[このプライベートな議論](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/issues/45#note_1794904358)を参照してください。
1. システムの他の部分からより高い度合いの分離を持つ環境を使用したい。
1. Organization に貢献するすべてのユーザーを制御したい。
1. グループとプロジェクトはプライベートであることが意図されている。
1. ユーザーは他の Organization とやり取りしたり、アカウントでパブリックプロジェクトに貢献したりする必要がない。
1. アカウントで Organization を切り替えられないことを受け入れる。

開発とインフラストラクチャの観点から、以下の目標を達成したいと考えています:

1. すべての Cell は単一のドメインでアクセス可能。
1. Cell は最小限のデータ共有で大部分が独立している。すべてのステートフルなデータが分離され、最初は最小限のデータ共有が必要。これにはすべてのデータベースとクラウドストレージバケットが含まれる。
1. Cell は異なるバージョンで独立して実行できる必要がある。
1. すべての Cell 間で状態を同期するためのクラスター全体のサービスが提供される。
1. 堅牢かつシンプルなルーティングソリューション。
1. すべての識別子（主キー、ユーザー名、グループ、プロジェクトパス）はクラスター全体で一意であり、後でロジカルな再バランシングを実行できる。これには `gitlab_internal` または `gitlab_shared` スキーマを使用するものを除くすべてのデータベーステーブルが含まれる。
1. すべてのユーザーとグループはクラスター全体で一意であるため、同じユーザーが [Cells 2.0](cells-2.0.md) で GitLab.com の他の Organization とグループにアクセスできる。
1. Cell の管理とアップグレードのオーバーヘッドは最小限であり、GitLab Dedicated インスタンスの管理に似ている。Cell は運用負荷の線形増加であってはならない。
1. Cell は GitLab Dedicated と同じツールを使用してデプロイされる必要がある。

この提案は可能な限りスコープを削減するように設計されていますが、以下の長期目標を達成することを不可能にしてはなりません:

1. ユーザーは多くの Organization とやり取りできる。
1. Cell は Organization を Cell 間で移動することで再バランシングできる。
1. ルーティングソリューションはリクエストを動的にルーティングできる。

## 提案

以下の文章は Cells 1.0 を達成するための高レベルな提案を説明しています:

1. 使用される用語:

    1. Cell: Topology Service に接続する単一の分離された GitLab デプロイメント。
    1. Topology Service: クラスター内の権威あるエンティティである中央サービス。一意性とルーティング情報を提供する。

1. Organization のプロパティ:

    1. ユーザーが Cell に新しい Organization を作成できるようにします。選択された Cell は GitLab 管理者によって制御されます。
    1. Organization はプライベートであり、公開できません。
    1. グループとプロジェクトはプライベートにできますが、公開にはできません。

1. ユーザーのプロパティ:

    1. ユーザーは Organization を含む Cell で作成されます。
    1. ユーザーには Organization ナビゲーションが表示されますが、単一の Organization にのみ所属できます。
    1. ユーザーは他の Organization に参加したり、やり取りしたりできません。
    1. ユーザーアカウントは Cell 間で移行できません。
    1. ユーザーの個人名前空間はその Organization 内に作成されます。

以下の文章は上記の目標を達成するための低レベルの開発提案を説明しています:

1. アプリケーションのプロパティ:

    1. アプリケーションによって生成された各シークレットトークン（個人アクセストークン、ビルドトークン、Runner トークンなど）には、例えば `us0` のような Cell を示す一意の識別子が含まれます。識別子は Cell に関する情報を難読化しようとするべきです。
    1. クライアントに送信されたセッションクッキーには、例えば `us0` のような Cell を示す一意の識別子がプレフィックスとして付けられます。
    1. アプリケーション設定には Cell シークレットプレフィックスと Topology Service の場所が含まれます。
    1. ユーザーは常にユーザーが作成された Cell にログインします。

1. データベースのプロパティ:

    1. データベースの各主キーはクラスター全体で一意です。Topology Service によって割り当てられるデータベースシーケンスを使用します。
    1. 各テーブルを Organization または Cell ローカルとして分類することが必要です。
    1. 結果整合性のモデルに従います:
        1. すべてのテーブルは Cell ローカルのデータベースに格納されます。
            1. すべてのクラスター全体の属性はクラスター全体で一意制約を保持します。
        1. クラスター全体の属性は、特定のレコードに対して権威のある Cell によってのみ変更が制限されます:
            1. ユーザーレコードはその Cell がこのレコードの権威あるソースである場合にのみ、与えられた Cell によって変更できます。
            1. Cells 1.0 ではクラスター全体でデータをレプリケートしない可能性が高いため、権威あるソースはレコードを含む Cell です。
    1. Topology Service は一意制約（ID またはユーザー、グループ、プロジェクトの一意性）の単一の真実の情報源として機能します。
        1. すべての Cell は gRPC を使用してユーザー名、グループ、またはプロジェクトを主張します。
        1. Topology Service は、ユーザー名、グループ、またはプロジェクトがどの Cell にあるかを知ることができるメタデータ情報を保持します。
        1. Topology Service はソース情報（実際のユーザーまたはプロジェクトレコード）を保持しません。その情報が格納されている Cell を示す参照のみを保持します。

1. ルーティングのプロパティ:

    1. プレフィックスに基づいたシークレットベースのルーティングを実行するルーティングサービスを実装します。
    1. ルーティングサービスは Cloudflare Worker として実装されてエッジで実行されます。ルーティングサービスはルールセットを定義し、Topology Service を使用してデータのルーティング方法を分類します。
    1. Cell はパブリックインターネットで公開されていますが、Zero Trust で保護されている場合があります。

### 問題点

以下の技術的な問題に対処する必要があります:

1. シンプルなルーティング層がシークレットベースのルーティングを実行するために必要なため、すべてのシークレットにプレフィックスが付けられます。
1. すべてのユーザー名、Organization、トップレベルグループ（その結果グループとプロジェクトも）はクラスター全体で一意です。
1. すべての主キー識別子はクラスター全体で一意です。

### GitLab 設定

`gitlab.yml` の GitLab 設定は以下のパラメーターで拡張されます:

```yaml
production:
    gitlab:
        topology_service:
            address: https://cell1.gitlab.com
            certificate: ...
        secrets_prefix: kPptz
```

### Topology Service

サポートされているすべてのサービスは、[Topology Service](../topology_service.md) に関する専用のドキュメントで説明されています。

## メリット

- 提案は無駄がない:
  - 各 Cell はクラスターが動作するために必要なデータの一部のみを保持します。
- Topology Service は単一障害点です:
  - 機能のセットを削減することで高可用性サービスにすることができます。
  - 高可用性データベースソリューション（Cloud Spanner）を使用します。
- ルーティング層は、シークレットベースでプレフィックスを使用するため、このサービスを非常にシンプルにします。
  - サービスの信頼性は Cell の可用性に依存しません。分類を実行するための Topology Service の可用性に依存します。
- 混合デプロイメント互換性が設計上組み込まれています。
  - データベース接続を共有しません。クラスター全体のデータと対話するための API を公開します。
  - アプリケーションはバージョン間で API 互換性をサポートする責任があり、初日から多くのバージョンのアプリケーションを簡単にサポートできます。
- データベースマイグレーション。
  - すぐに動作し、Cell に分離されます。

## デメリット

- クラスター全体のデータをすべてのクラスター Cell に意図的に分割します。
  - ある意味でデータベースレプリケーションを再発明しています。
- クラスター全体の属性をどれだけ多く作れるかによって厳しく制限されます。多くのデータを公開することは、クロス Cell の相互作用を可能にするために大量の追加コードが必要です。
  - すべてのテーブルを分類する必要があります。レコードがレプリケートされる場合、クラスター全体でデータの整合性を確保したいと考えています。

## Cells でサポートされていない GitLab.com の機能 {#features-on-gitlabcom-that-are-not-supported-on-cells}

Cells 1.0 の初期デプロイメントでは、何かをデプロイするためにいくつかの機能のスコープを削減しています。これは Cells 1.0 がこれらを将来サポートしないことを意味するわけではありませんが、アプリケーション/インフラストラクチャがまだサポートしていません。

以下の表は、既存の GitLab.com の機能との比較であり、セルフマネージド/Dedicated とは比較していません。

| 初期サポートなし | 理由 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitLab Pages | [複雑性](#questions)。 |
| CI Catalog | CI Catalog はパブリックプロジェクトに依存しており、Cells 1.0 の Organization はパブリックプロジェクトを見ることができない。 |
| Organization の切り替え | ユーザーは単一の Organization に所属する。 |
| Cell 間での共有ユーザーアカウント | ユーザーは現在のところ各 Cell で新しいユーザーアカウントを持つ必要がある。 |
| GitLab Duo Pro ライセンスはインスタンス上のすべてのプロジェクトで機能する | GitLab Duo Pro ライセンスは一度付与されると、[インスタンス上のすべてのプロジェクトで GitLab Duo Pro を使用できるようになるべき](https://gitlab.com/gitlab-org/gitlab/-/issues/441244)。Cells 1.0 では、これは自分の Cell 内でのみ機能します。 |
| ユーザーの削除 | ユーザーは 1 つの Organization にのみ所属できます。この場合、削除はユーザーの削除と同等になるため、Cells 1.0 では Organization のユーザー削除のみが提供されます。削除後、ユーザーが参加する別の Organization を見つける方法がなくなります（Cells 1.0 ではプライベートのため）。 |
| Windows および macOS 上のホスト型 Runner | Windows および macOS 上のホスト型 Runner はまだベータ版であり、コストに関するより複雑な技術的考慮事項があります。リソースの共有に関する議論は[こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/434982#note_1789275416)を参照してください。セルフマネージド Runner はサポートされています。 |
| Linux Runner の複数サイズ | [Cells 1.0 では small の Linux Runner のみをサポートします](https://gitlab.com/gitlab-org/gitlab/-/issues/434982#note_1806447839)。 |
| GitLab for Jira Cloud アプリおよび GitLab for Slack アプリの統合 | Jira と Slack アプリは単一のエンドポイントにのみ投稿するよう設定できるため、設定されたエンドポイントのルートには Cells Router がどの Cell にルーティングするかを知ることができるものが何もありません。Organization レベルでサポートする必要があるかもしれません。詳細は [#467791](https://gitlab.com/gitlab-org/gitlab/-/issues/467791) と [#467809](https://gitlab.com/gitlab-org/gitlab/-/issues/467809) を参照してください。 |
| クロス Organization の下流パイプライン | プライベート Organization は Cells 1.0 にのみあり、下流パイプラインはパブリック Organization を見ることができない。 |
| Clickhouse に依存するすべての機能 | Clickhouse は Cells の基礎となるプロビジョニングツールである Dedicated ではサポートされていません。Clickhouse は Geo、Org Mover、バックアップ/リストアなどの他のツールではサポートされていません。 |
| [受信メール](https://docs.gitlab.com/ee/administration/incoming_email.html)（`mail_room`）に依存するすべての機能 | スコープ削減。Cell ごとのメール取り込みの[提案](https://gitlab.com/gitlab-org/gitlab/-/issues/442161#note_1828026768)はありますが、Organization が別の Cell に移動した場合でも使用できる安定したメールアドレスを持つ方法をまだ見つけられていません。 |
| グローバル検索 | 各 Cell は独立した検索クラスターを持ちます。Cells 1.0 では、グローバル検索は Cell 内でのみ機能します。詳細は [Cells: グローバル検索デザインドキュメント](../impacted_features/global-search.md)を参照してください。 |
| 有料サブスクリプションフロー | CustomersDot は GitLab への Single Sign-On とデータの取得/更新のために[パスベース](https://gitlab.com/gitlab-org/gitlab/-/issues/466369)および [OAuth トークン](https://gitlab.com/gitlab-org/gitlab/-/issues/465811)ルーティングに依存しています。これらなしでは、CustomersDot からのすべてのリクエストはレガシー Cell に送られます。 |
| レガシー CI_JOB_TOKEN | レガシー CI_JOB_TOKEN はルーティング情報を含まず、リクエストボディで渡される可能性があるため、ルーティングできません。顧客は、レガシー Cell 外で CI_JOB_TOKEN を利用できるようにするために JWT 形式を使用する必要があります。 |
| [OAuth プロバイダー](https://docs.gitlab.com/integration/oauth_provider/) [OIDC プロバイダー](https://docs.gitlab.com/integration/openid_connect_provider/) | OAuth/OIDC アプリケーションは、サードパーティおよびファーストパーティサービスが GitLab に統合するためのメカニズムを提供します。Cells 1.0 ではクロス Cell 通信が制限されているため、OAuth アプリケーションを確実に実装できません。 |
| グループ SAML | グループ SAML はレガシー Cell 外では利用できません（[Cell 1.5 向けのオープン Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/443478)）。 |

## フェーズ

すべての Cells 1.0 の作業は [Cells 1.0 Epic](https://gitlab.com/groups/gitlab-org/-/epics/12383) の下で追跡されています。
Epic は複数のフェーズに分割されており、各フェーズは Cells 1.0 を達成するためのイテレーションを表します。
これらのフェーズの一部は互いに依存関係があり、一部は並行して実行できます。

### フェーズ 1: PreQA Cell {#phase-1-preqa-cell}

終了基準:

- 新しい GCP Organizations が作成されている。
- ブレークグラス手順がある。
- リング定義が存在する。
- Dedicated スタックを使用して Cell がプロビジョニングされている。
- Cell に設定変更を加えることができる。
- Cell が `xxx.cells.gitlab.com` で利用可能。
- Cell はデータの一意性を処理しない。

![phase-1](/images/cells/phase-1.png)

[source](https://excalidraw.com/#json=DuwGFqR2LcS6k2TZlYu9u,LKDzUCdkiHLO11c3rgFVeQ)

ブロック解除:

- [フェーズ 3](#phase-3-gitlabcom-https-session-routing): Topology Service のランウェイデプロイメントをプロビジョニングするため
- Delivery チーム: リングのデプロイテストの開始

依存関係:

- なし

詳細:

- [Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1293>)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_1)

### フェーズ 2: GitLab.com HTTPS パススループロキシ {#phase-2-gitlabcom-https-passthrough-proxy}

終了基準:

- 100% の API トラフィックがパススループロキシルールを使用してルーターを経由する。
- 100% の Web トラフィックがパススループロキシルールを使用してルーターを経由する。
- 100% の Git HTTPS トラフィックがパススループロキシルールを使用してルーターを経由する。
- リクエストが[レイテンシーターゲット](https://docs.gitlab.com/ee/architecture/blueprints/cells/http_routing_service.html#low-latency)を満たす。
- registry.gitlab.com はプロキシされない。

![phase-2](/images/cells/phase-2.png)

[source](https://excalidraw.com/#json=ymWufV5324javtKSrYiZW,5S-bkgtFS_yEIRxmVZ1rag)

ブロック解除:

- [フェーズ 3](#phase-3-gitlabcom-https-session-routing): ルーターがフェーズ 3 で追加のルールで設定される。

依存関係:

- なし

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/12775)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_2)

### フェーズ 3: GitLab.com HTTPS セッションルーティング {#phase-3-gitlabcom-https-session-routing}

終了基準:

- Rails 設定を使用してプレフィックス付きの `_gitlab_session` を生成するように PreQA Cell が設定されている。
- 静的設定ファイルを使用した TopologyService::Classify（REST のみ）で一致するプレフィックスを持つ `_gitlab_session` を PreQA Cell にルーティングする。
- ロールバック機能なしで Ring 0 への継続的デリバリーを行い、本番デプロイメントをブロックしない。
- Topology Service の[実験](https://docs.gitlab.com/ee/policy/development_stages_support.html#experiment)向けの[準備レビュー](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/topology-service)。
- Topology Service の gRPC エンドポイントは実装されていない。

ブロック解除:

- [フェーズ 4](#phase-4-gitlabcom-https-token-routing)

変更前/後:

![phase-3](/images/cells/phase-3.png)

[source](https://excalidraw.com/#json=z7-ihTQ69trj5vdpXZ-7V,k0NtksWZMRdaR-lHoH3JMQ)

依存関係:

- [フェーズ 2](#phase-2-gitlabcom-https-passthrough-proxy): パススループロキシがデプロイされている必要がある。
- [フェーズ 1](#phase-1-preqa-cell): GCP Organizations、リング定義が存在する。

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14509)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_3)

### フェーズ 4: GitLab.com HTTPS トークンルーティング {#phase-4-gitlabcom-https-token-routing}

終了基準:

- Rails でルーティング可能なトークンを生成するためのフレームワーク。
- HTTP Router でルーティング可能なトークンを分類するためのフレームワーク。
- より多くの基準に基づいて分類できる Topology Service。
- TopologyService::Classify を使用して個人アクセストークンを異なる Cell にルーティングする。
- `PRIVATE-TOKEN:` と `Authorization:` HTTP ヘッダーの個人アクセストークンをサポートし、後のフェーズで解決される他のものの Issue を作成する。
- 追加された各ルーティングルールは関連する e2e テストでカバーされる必要がある。
- TopologyService::Classify を使用してジョブトークンと Runner 登録を異なる Cell にルーティングする。

依存関係:

- [フェーズ 3](#phase-3-gitlabcom-https-session-routing): Topology Service とルーターが本番環境で実行されている必要がある。

変更前/後:

![phase-4](/images/cells/phase-4.png)

[source](https://excalidraw.com/#json=rWNPd77fLEhwZpERiUYLA,Tb-v5Hen6NomaopcmE9_mw)

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14510)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_4)

### フェーズ 5: クラスター認識 {#phase-5-cluster-awareness}

終了基準:

- Topology Service の本番準備レビュー（Beta）。
- Google Spanner に保存する TopologySerivce::Claims を使用してグローバルにリソースを主張するためのフレームワーク。
- 以下のリソースが主張可能: ユーザー名、E メール、トップレベルグループ名、Routes。
- 主張が必要なすべてのリソースが特定されている。
- 一意のインデックスが監査され、アプリケーションが必要とする一意性を壊さず、データマイグレーションを可能にする。
- ToplogyService::Sequence を使用して Cell にシーケンスをリースする。
- Rails アプリケーションが内部ネットワークを使用して TopologyService にリクエストを送信できる。
- TopologyService と HTTP Router の間の mTLS 通信。
- TopologyService と Rails の間の mTLS 通信。
- HTTP Router と Cell の間の mTLS 通信。
- PreQA Cell がリソースの主張を開始できる（まだレガシー Cell からは切り離されている）。
- PreQA Cell によって行われた主張は削除される。

依存関係:

- [フェーズ 3](#phase-3-gitlabcom-https-session-routing): Topology Service がデプロイされている。

変更前/後:

![phase-5](/images/cells/phase-5.png)

[source](https://excalidraw.com/#json=UpWQ_mQElSNOnEtOx3ZcI,MsAdeBL_6-CFH0c4P0BeZA)

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14511)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_5,groups_Phase_5_1_mTLS,groups_Phase_5_2_Sequence,groups_Phase_5_3_Claim,groups_Phase_5_4_Deploy)

### フェーズ 6: モノリス Cell {#phase-6-monolith-cell}

終了基準:

- Topology Service 本番準備 GA。
- TopologyService で Cell としてレガシー Cell が設定されている。
- レガシー Cell のすべての新しいリソースが TopologyService::Claims を使用して主張されている。
- レガシー Cell がすべての既存のリソースを主張している。
- レガシー Cell にシーケンスがリースされている。
- リースされたシーケンスのキャパシティプランニング。
- グローバルに一意なリソースの作成に対するレイテンシーの増加は最大 20ms。

依存関係:

- [フェーズ 5](#phase-5-cluster-awareness): クラスター認識

変更前/後:

![phase-6](/images/cells/phase-6.png)

[source](https://excalidraw.com/#json=b5JgJCXAldtsXx6iSzAdq,4A2TRSwU9WI19zbOn09gaA)

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14513)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_6)

### フェーズ 7: Cell の初期化 {#phase-7-cell-initialization}

終了基準:

- TBD

変更前/後:

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14514)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_7)

### フェーズ 8: Organization のオンボーディング {#phase-8-organization-onboarding}

終了基準:

- TBD

変更前/後:

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14749)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_8)

### フェーズ 10: 本番準備 {#phase-10-production-readiness}

終了基準:

- Cell レベルの可観測性（ログ、メトリクス、アラート、ダッシュボード）。
- 既存のインシデント管理ツールとの統合。
- GitLab.com セキュリティ標準への準拠。
- リージョンおよびゾーンのディザスタリカバリ機能。
- GitLab.com/dev.gitlab.org の可用性から独立した運用ツール。
- GitLab.com ドメインの集中型 WAF 管理。
- 同期を伴う Cell レベルのアプリケーションレート制限。
- SRE エスカレーションパスを持つ最小権限アクセスの実装。
- ロールバックサポートを持つ Cell 全体への段階的なインフラストラクチャ変更のロールアウト。
- ロールバックサポートを持つレガシー Cell と Cells 全体への段階的なデプロイメント機能。
- レガシー Cell と Cells 全体でのフィーチャーフラグのトグルのサポート。

依存関係:

- [フェーズ 1](#phase-1-preqa-cell): GCP Organizations、リング定義が存在する。

変更前/後:

詳細:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14807)

## 質問 {#questions}

1. 追加の Cell で Organization にユーザーをオンボードするにはどうすればよいか？

    管理者は以下のタスクを実行します:

    1. 追加の Cell に Organization を作成する。
    1. Organization でオーナーロールを持つ新しいユーザーを作成する。
    1. 組織から管理者を削除する（機能セットに応じてオプション）。
    1. 新しいオーナーがこのグループのデータをインポートする。これによりユーザーが作成され、グループ/プロジェクトに追加され、Organization に追加されます。

1. 追加の Cell の既存の Organization に新しいユーザーを登録するにはどうすればよいか？

    標準の[グループ](https://docs.gitlab.com/ee/user/group/#add-users-to-a-group)と[プロジェクト](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)の招待フローを使用できます。つまり、[適切な権限](https://docs.gitlab.com/ee/user/permissions.html#user-management)を持つユーザーは Organization 内の任意のグループまたはプロジェクトにメールでユーザーを招待できます。ユーザーが登録されると、グループまたはプロジェクト _および_ Organization に追加されます。

1. ユーザーはどのようにログインするか？

    - UI: Organization へのログインは Organization にスコープされます: `https://<GITLAB_DOMAIN>/users/sign_in?organization=gitlab-inc`。
    - SAML: `https://<GITLAB_DOMAIN>/users/auth/saml/callback` は `?organization=gitlab-inc` を受け取り、正しい Cell にルーティングされます。
    - これには高可用性のソリューションを使用して利用可能な Organization のリストを持つ動的ルーティング方法を使用する必要があります。

1. 最初に追加の Cell にデプロイされる場合、新しいテーブルを追加するにはどうすればよいか？

    Topology Service はシーケンスの一意性を確保するため、`sequence` を持つ必要があります。

1. Container Registry はクラスター全体か Cell ローカルか？

    Container Registry は Cell ローカルで実行でき、シークレットベースのルーティングに従うと、フィルタリングのために同じモデルを使用できます。GitLab によって署名された JWT トークンがルーティング層によって静的にルーティングできる形式であることを確認する必要があります。

1. GitLab Pages はクラスター全体か Cell ローカルか？

    GitLab Pages は Cells 1.0 には不可欠ではないと判断されたため、Cells 1.0 ではサポートしません。
    この議論は[こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/434972#note_1763737452)で見つけることができます。

    GitLab Pages が `.gitlab.io` ドメインをサポートすることを意図している場合:

    - GitLab Pages は Cell の一部として実行されない単一のサービスとして実行する必要があります。
    - GitLab Pages は API を使用するため、ルーティング可能にする必要があります。
    - `routes` と同様に、Topology Service に `pages_domain` を主張する
    - 分類キーに基づいたルーティングサービスの動的分類を実装する。
    - デメリット: これによりクラスター全体で一意に保たれる必要がある別のテーブルが追加されます。

    代替として:

    - GitLab Pages を Cell で実行しますが、別のドメインを提供します。
    - カスタムドメインは別のドメインを使用します。
    - デメリット: これにより Cell ごとのドメインを管理する問題が生じます。
    - デメリット: Cell がユーザーに公開されます。

1. 内部エンドポイントには静的シークレットを使用すべきか JWT を使用すべきか？

    定義予定。静的シークレットは提示されたソリューションのシンプルさのために使用されています。

1. SSH クローニングをどのように処理するか？

    これはルーティングとは切り離された別の問題であり、この提案では意図的に解決されていません。SSH クローニングに関連する問題は:

    - 公開鍵を保持している Cell を識別するためにユーザーの公開鍵を検証する必要があります。
    - クラスター全体での公開鍵の一意性を確保する必要があります。

1. 他にクラスター全体で一意の制約はあるか？

    - 認証済みキー
    - GPG キー
    - カスタム E メール
    - Pages ドメイン
    - TBD

1. ブロードキャストメッセージやアプリケーション設定などのクラスター全体のテーブルはどのように同期するか？

    おそらくナイーブなアプローチを取ります: それらの情報を API を使用して公開し、定期的に同期します。同期されそうなテーブルは:

    - アプリケーション設定
    - ブロードキャストメッセージ
    - TBD

1. この作業をどのようにドッグフーディングするか？

    定義予定。

1. 管理者アカウントをどのように管理するか？

    クラスター全体での同期をまだ行っていないため、管理者アカウントは Cell ごとに提供される必要があります。
    これは GitLab Dedicated によってすでに解決されている可能性があります。

1. シークレットはどのように生成されるか？

    Cell プレフィックスは、プレフィックスをエンコードする方法でシークレットを生成するために使用されます。プレフィックスが生成されたシークレットに追加されます。
    例:

    - GitLab Runner トークンは `glrt-2CR8_XYZ` の形式で生成されます。
    - Cell プレフィックス: `secrets_prefix: kPptz` の場合
    - `glrt-kPptz_2CR8_XYZ` の形式で Runner トークンを生成します。

1. パスベースのルーティングではなくシークレットベースのルーティングを使用する理由は？

    Cells 1.0 は、マルチテナントおよびマルチ Cell ソリューションを迅速にデプロイできるアーキテクチャの最初の近似を提供することを意図しています。
    パスベースのルーティングを解決するには大きな努力が必要です:

    - 既存のすべてのルートを `/org/<org-name>/-/` でプレフィックスすることは、`/api/v4/jobs/request` などのあいまいな、Cell ローカルな、またはクラスター全体のルートをどのように処理するかについての意図的な選択を必要とします。ルートを変更すると、移行するすべてのユーザーに対して破壊的な変更が発生します。
    - すべての既存のルートをルーティング可能にすることは、`/-/autocomplete/users` などのルートを修正するために大きな努力が必要であり、おそらく複数年の取り組みになります。どれだけのルートがすでに分類されているかに関する予備分析は[このコメント](https://gitlab.com/gitlab-org/gitlab/-/issues/430330#note_1633125914)で見つけることができます。
    - どちらの場合も、ルーティングサービスは定義された基準に基づいて既存のルートを動的に分類できる必要があり、大きな開発努力が必要で、Topology Service への依存を増加させます。

    シークレットベースのルーティングに従うことで、多くの初期の複雑さを削減でき、後で最善の決定を下すことができます:

    - 注入されたプレフィックスは静的ルーティングメカニズムを持つための一時的な措置です。
    - いずれにせよ後で動的分類を実装する必要があります。
    - Cells 1.0 の後でパスベースのルーティングへのアプローチの最善策を見つけることができます。

1. Cell 間のデータ移行についてはどうか？

    Cells 1.0 は**社内**顧客を対象としています。既存の顧客の移行と新しい顧客のオンボードはそれ自体が大きな取り組みです:

    - 移行される顧客はまず Organization モデルにオプトインする必要があります。
    - 新しい顧客は[サポートされていない機能](#features-on-gitlabcom-that-are-not-supported-on-cells)を持つことを望みません。
    - 分離機能のほとんどが動作することを期待しています。
    - ソース Cell からターゲット Cell へ透過的にデータを移動する必要があります。最初は Cell 分割モデルに従います。Cell をクローンし、与えられたレコードが存在する場所にマークを付けます。

    既存の顧客でも Cells 1.0 に移行できますが、GitLab.com から Dedicated に顧客を移行する方法と同様に、インポート/エクスポート機能を使用する必要があります。その結果、すべての情報が移行されるわけではありません。例えば、現在のプロジェクトのインポート/エクスポートでは CI トレースもジョブアーティファクトも移行されません。

1. シークレットベースのルーティングは問題か？

    決定予定。

1. Cell 間でどのように `users` を同期するか？

    アウトオブバンドレプリケーションを構築します。これが Rails の一部の `API` を使用して行うのか、Dedicated サービスを使用して行うのかはまだ定義されていません。
    ただし、Rails を使用することがおそらく最もシンプルで信頼できるソリューションです。なぜなら、アプリケーションは予想されるデータ構造を知っているからです。

    上記の提案に従い、`users` とおそらくすべての隣接するテーブルを `API`: `/api/v4/internal/cells/users/:id` を使用して公開します。API は `users` テーブルを `protobuf` データモデルにシリアライズします。
    この情報は、ユーザーエントリを同期する別の Cell によってフェッチされます。

1. Cell はユーザーまたはプロジェクトをどのように見つけるか？

    Cell は Topology Service の [分類サービス](../topology_service.md#classify-service) を使用します。

1. エンタープライズ顧客向けに作成された場合、ユーザープロフィールは公開されるか？

    いいえ。与えられた Organization の別の Cell で作成されたユーザーはこの Organization にのみ制限されます。ユーザープロフィールはログインしている場合に利用可能です。

1. クラスター全体の API を公開する Topology Service の回復力はどのようなものか？

    API はユーザー、グループ、プロジェクト、Organization、SSH キー、Pages ドメイン、E メールの一意性を確保する責任があります。
    API はルーティングサービスの分類キーを分類する責任もあります。
    Topology Service のクラスター全体の API が高可用性であることを確保する必要があります。

1. 新しい Cell でインスタンス全体の CI Runner をどのように設定できるか？

    定義予定。

1. 代わりに FQDN（`mycorp.gitlab.com` または `mygitlab.mycorp.com`）を使用しない理由は？

    私たちは `gitlab.com` が、やり取りする Organization の数に関わらず、単一のアプリケーションのように感じられることを望んでいます。
    これは後の時点でユーザーを共有し、おそらく Organization 間でいくつかのデータを共有することを望んでいることを意味します。
    `mycorp.gitlab.com` または `mygitlab.mycorp.com` のモデルに従うことで、インスタンス間の強い分離の感覚が生まれ、実際にシステムがどのように動作するかと比較してシステムの動作に対する異なる認識が生まれます。

1. フィーチャーフラグは Cell ローカルかクラスター全体か？

    定義予定。

1. Cells 1.0 は [GitLab Dedicated](https://about.gitlab.com/dedicated/) とどのように異なるか？

    - GitLab Dedicated は、GitLab Inc. がカスタムドメインで単一の顧客にサービスを提供するためのシングルテナントのホストソリューションです。
    - セル型アーキテクチャは `gitlab.com` ドメインを使用するマルチテナントソリューションであることを意図しています。
    - GitLab Dedicated は設計上、テナント間のすべてのリソースが分離されています。
    - セル型アーキテクチャは、より高い運用効率とコスト削減を達成するために、テナント間でリソースを共有します。

1. Cells 1.0 で「Organization はプライベートであり、公開できない」理由は？

    - Cell 上のプライベート Organization は、これが現在のシステムによって達成されているため、データの共有や分離が必要ありません。

        - Organization を分離するための大規模な作業はまだ必要ありません。

    - すべてのリクエストが認証されることを予測しているため、ルーティングが簡単でルーティングが容易になります。

        - ルートをシャーディング済みにする必要はまだありません。

1. すべての Organization に対してすべてのエンドポイントを `relative_path` でプレフィックスしない理由は？

    これは達成したいことの主要な契約を壊します:

    - Organization を使用するための移行はシームレスです。
    - ユーザーがグループを Organization に移行する際、または Organization を別の Cell に移行する際に既存のユーザーワークフローを壊したくありません。
    - この理由から、特定のパスの使用やサブドメインの使用を強制しない理由です。
    - `relative_path` の使用を強制するパスを選択すると、すべての Cell 全体のエンドポイントが壊れます。これは、後で共有にすることで既存のシャーディングされていないものを[修正できる](https://gitlab.com/gitlab-org/gitlab/-/issues/430330)アプローチよりも長く複雑に思われます。
    - 後の時点で既存のシャーディングされていないものを修正する場合、はるかに優れた API の一貫性と、おそらくはるかに少ない作業量を達成できます。

1. `mycorp.gitlab.com` のようなサブドメインを使用しない理由は？

    ルーティングに DNS を使用することを避ける理由:

    - 実際にはそうでない完全な分離の期待を設定するリスクがあります。
    - サブドメイン全体でクッキーが漏洩するセキュリティ問題を防ぐために注意が必要です。
    - 変化するホスト名と、すべてのリンクに完全なホスト名を渡す要件により、Organization をまたいで作業することが複雑になります。
    - URL とホストが Organization に基づいて変わるため、統合と API のやり取りが複雑になります。
    - ユーザーを有効な Organization/URL にリダイレクトする共通のログインサービスを構築する必要があります。
    - 大きな影響を持つ命名の衝突のリスクが増加します。例えば、大企業の異なる部門や組織、または似たような名前の会社など。

1. Geo サポートについてはどうか？

    Geo サポートは Cells 1.0 のスコープ外です。ただし、以下を想定するのは妥当です:

    - Geo は Cell ごとです。
    - ルーティングサービスは Cell の Geo レプリカに誘導できます（それを知っている場合）。
    - 多くのリージョンに多くのルーティングサービスがある可能性があります。

1. クラスター全体のテーブルはすべての Cell で利用可能か？

    いいえ、クラスター全体のテーブルは Cell ローカルのデータベースに格納されます。ただし、クラスター全体のテーブルの同期はケースバイケースで決定します。

1. Cells と互換性を持つように機能を適応させるにはどうすればよいか？

    多くのグループが Cell の機能を適応させる方法について質問しています。
    これは特に、機能がインスタンスレベルで利用可能な場合、またはグループをまたいで使用できる場合に当てはまります。

    Cells 1.0 のために物事を進化させるためのいくつかの戦略を示します:

    - 機能を変更しないままにする。
      例えば、管理者/ユーザーは Cell ごとにアカウントを作成する必要があります。
    - Cells 1.0 の機能を無効にする。
    - 重要なケースでは、機能をクラスター全体のレベルに移動する。
      例えば、ユーザーは単一の場所 `https://gitlab.com/users/sign_in` でサインインできます。

    多くの場合、クラスター全体のレベルで機能するようにインスタンス全体の機能を再実装する必要はまだありません。これは、Cells 1.0 では、プライベート表示のみを許可し新しいユーザーを持つという正味の効果から、Cells 1.5 まで延期できるためです。
