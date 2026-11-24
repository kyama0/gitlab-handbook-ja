---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 007: Omnibus ホストの外部で稼働する Kubernetes クラスターのみをサポートする"
description: "Omnibus ホストの外部で稼働する Kubernetes クラスターのみをサポートし、高度なコンポーネント向けの Omnibus の自動化を、各接続の Omnibus 側の設定、シークレット、NGINX コンポーネントプロキシに限定するという決定。"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/007_external_kubernetes_clusters_only/
upstream_sha: be228760349beb5ac063e32579ee6507e09f8b6e
translated_at: "2026-11-24T21:19:28+00:00"
translator: codex
stale: false
lastmod: "2026-11-24T16:41:22-03:00"
---

この ADR は、
[ADR-003: Omnibus は Kubernetes サービス公開方法に依存しない](003_omnibus_agnostic_k8s_service_exposure.md)の `oak` 設定モデル、
[ADR-004: OAK でのマルチノード Omnibus サポート](004_multi_node_omnibus_support.md)の Helm values 生成に関する部分、
および [OAK 設計ドキュメント](../_index.md)に記載された同一ホスト構成を置き換えます。

## 背景 {#context}

OAK の Beta は、単一ノードの Omnibus インスタンスと同じホスト上で軽量 Kubernetes ディストリビューションが稼働する構成
（クラスターの配置は _同一ホスト_）を前提に設計されました。この構成を機能させるため、Omnibus の `oak` クックブックは 3 つの処理を行います。

1. **Helm values の生成。** OpenBao チャート用の `/etc/gitlab/openbao-helm-values.yaml` を書き出します。
1. **クラスターネットワークへの NGINX のバインド。** クラスターから見た Omnibus ホストのアドレスである
   `oak['network_address']` を NGINX のリッスンアドレスに追加し、Pod がそのアドレスで GitLab にアクセスできるようにします。
   生成される Helm values では、同じアドレスを PostgreSQL ホストとして使用します。
1. **コンポーネントごとの NGINX リバースプロキシ。** コンポーネントの外部 URL に対する TLS を終端し、
   トラフィックをクラスターへ転送する NGINX のサーバーブロックを生成します（現在は OpenBao 向けです）。

同一ホスト構成は、デフォルトとしては不適切と判明しました。

- **リソースの競合。** Omnibus と Kubernetes クラスターが 1 台のホストで CPU、メモリ、ディスク I/O を取り合います。
  サイジングの指針には両方の要件を合算する必要があり、一方の負荷が高まると他方のパフォーマンスが低下します。
- **ホスト上での競合。** 多くの小規模ディストリビューションは、Omnibus NGINX がすでに使用しているポート 80 と 443 に
  バインドするロードバランサーをインストールします。ユーザーはそれらを無効にする必要があり、
  NGINX にはサーバー名でリクエストをルーティングするための追加のリッスンアドレス設定が必要です。
- **ネットワークへの公開。** PostgreSQL、Redis、NGINX はクラスターと共有するネットワークでリッスンする必要があるため、
  そこにスケジュールされるすべての Pod に公開されます。
- **移行につながりません。** OAK はクラウドネイティブ GitLab への移行を支える過渡的アーキテクチャです。
  Omnibus とホストを共有するクラスターは移行前に別の場所に作り直す必要がありますが、
  分離したクラスターならお客様の利用規模に合わせて拡張できます。
- **想定する構成では、すでにクラスターを分離しています。** マルチノード Omnibus については、
  [ADR-004 のレビュー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/19272#note_3244679306)で、
  クラスターを Rails と同じノードに置かず、専用ノードかマネージドサービスに分離すべきだと結論づけました。
  同じノードに置くと、マルチノード構成で回避していたノイジーネイバーの問題が再発するためです。
  マネージド Kubernetes サービスはそもそも別のインフラストラクチャで稼働し、
  [OpenBao の外部クラスター構成](https://docs.gitlab.com/administration/secrets_manager/linux_package_integration/)では、
  上記 3 つの自動化のいずれも使用しません。

クラスターが別のインフラストラクチャで稼働する場合、3 つの自動化はいずれも現在の形で維持する理由がありません。

### Helm values の生成

生成する OpenBao の values ファイルには、4 つの入力元から値を設定します。

| 値 | 入力元 | Omnibus 固有か |
|---|---|---|
| ネットワークアドレス | ユーザーが `gitlab.rb` に入力（`oak['network_address']`） | いいえ |
| PostgreSQL のポート | `postgresql['port']` | いいえ。外部データベースを使う場合は無関係 |
| GitLab URL（OIDC 発行者） | `external_url` | いいえ。OIDC ディスカバリーエンドポイントは公開 |
| OpenBao の外部 URL | ユーザーが `gitlab.rb` に入力 | いいえ |

データベース名とユーザー名はハードコードされており、パスワードは手動で作成します。Omnibus 管理下の PostgreSQL
以外を使用する場合、テンプレートが PostgreSQL ホストとして設定する値（ネットワークアドレス）は誤りです。

Omnibus 固有の情報は、生成されたシークレット（`gitlab-secrets.json`）と、インストール済みのバージョンです。
values ファイルはいずれも使用しません。また、マルチノードインストールでは全体を把握する単一のノードがないため、
ADR-004 の「Rails ノードを信頼できる情報源とする」というルールは、すべてのコンポーネントに当てはまるわけではありません。

Kubernetes ワークロードの設定は、クラスターを管理するツールが担います。現時点ではチャートとそのドキュメントが該当します。
ユーザーは情報が実際に使われる場所に一度だけ入力します。Omnibus が所有するシークレットは、
生成する values を介さず、Omnibus 側で扱います（決定 4）。

### `oak['network_address']` への NGINX のバインド

`oak['network_address']` は、クラスターから見た Omnibus ホストのアドレスです。同一ホスト上にクラスターがなくても使えますが、
Helm values の生成を廃止し、高度なコンポーネントが Omnibus 管理下の PostgreSQL を使用しなくなると
（[ADR-008](008_no_omnibus_managed_data_stores.md)）、この設定を使うものはなくなります。

- `nginx['listen_addresses']` のデフォルトは `['*']` なので、NGINX はすでにそのアドレスでリッスンします。
  OAK のコードがアドレスを追加するのは、運用者がリッスンアドレスを絞っている場合だけで、
  その場合も `nginx['listen_addresses']` で直接設定できます。
- Pod は、そのアドレスを直接使用するか、プライベート DNS で `external_url` のホスト名をそのアドレスに解決して、
  プライベートネットワーク経由で GitLab にアクセスします。どちらにも Omnibus の設定は不要です。

### コンポーネントごとの NGINX リバースプロキシ

プロキシの転送先 `internal_url` には NGINX から到達できる任意のアドレスを指定できるため、
ネットワークを共有する外部クラスターでも機能します。実際には、次の制約があります。

- **`oak` 名前空間と単一のコンポーネントに紐づいています。** このプロキシがあるのは OpenBao だけで、
  [OpenBao ドキュメント](https://docs.gitlab.com/administration/secrets_manager/linux_package_integration/)でも
  同一ホスト構成にのみ使っています。新しいコンポーネントを追加するたびに、`oak` 配下に専用の設定とテンプレートが必要です。
- **コンポーネントに直接アクセスするクライアントのみが対象です。** Rails と Sidekiq はプライベートネットワーク経由で
  コンポーネントを呼び出すため、クラスター側はどのみち GitLab ホストからアクセスできるようにする必要があります。
  プロキシは OpenBao からシークレットを取得するランナーなど、GitLab の外部にいるクライアント向けです。

プロキシの必要性は残ります。Beta や GA に到達する高度なコンポーネントが増えるにつれ、必要性も高まると見込んでいます。

- **クラスターに外部からアクセスできることや、Gateway または Ingress コントローラーが稼働していることは前提にできません。**
  セルフマネージドのセグメンテーション設計の
  [Early Self-Managed Advanced](/handbook/engineering/architecture/design-documents/selfmanaged_segmentation/#early-self-managed-advanced-sma)
  段階では、受信するウェブトラフィックはすべて Foundation を経由します。
- **お客様の負担になるのは DNS、TLS、ネットワークポリシーです。** クラスターに公開エントリーポイントを別途設けると、
  ホスト名と証明書が追加で必要になり、ファイアウォールルールも増えます。
- **カスタムサーバーブロックではコンポーネントの増加に対応しづらくなります。** Omnibus は、
  任意のバックエンドアプリケーションへのリバースプロキシに使える
  [カスタムサーバーブロック](https://docs.gitlab.com/omnibus/settings/nginx/#insert-custom-settings-into-the-nginx-configuration)を文書化していますが、
  これに頼ると、コンポーネントが増えるたびにお客様が NGINX の設定を書き、保守する必要があります。

Omnibus NGINX は Omnibus が設定するため、NGINX を介したコンポーネントへの転送は、
コンポーネントを呼び出すサービスの設定やシークレットと同様に、接続の Omnibus 側が担います。
クラスター内でのコンポーネントの公開は、引き続きクラスター側が担います。

## 決定

1. **OAK は Omnibus ホストの外部で稼働する Kubernetes クラスターのみをサポートします。**
   Omnibus サービスを実行するホスト上でクラスターを稼働させる構成は、サポート、ドキュメント化、テストの対象外です。
   Omnibus はその構成の検出やブロックを行いません。
1. **Omnibus は、高度なコンポーネント向けの Helm values を生成しません。** その他の Kubernetes 設定も生成しません。
   ユーザーはチャートのドキュメントに沿って values を記述します。
1. **Omnibus NGINX はクラスターネットワークにバインドせず、`oak` 配下のコンポーネントごとのプロキシを削除します。**
   - クラスターは、GitLab ホストが到達できるアドレスで高度なコンポーネントを公開します。
     NodePort、LoadBalancer IP、またはクラスターに Gateway や Ingress があればそれらを使用できます。
   - ランナーなど GitLab 外部のクライアントは、クラスター経由で直接コンポーネントにアクセスできます。
     GitLab ホストを唯一の公開エントリーポイントにする必要があれば、Omnibus の NGINX コンポーネントプロキシ（決定 4）を経由します。
1. **Omnibus は、高度なコンポーネントへの各接続の Omnibus 側を担います。**
   クラスターの設定やコンポーネント固有のデータの保存は行いません。Omnibus は各コンポーネントに次のものを提供します。
   - **設定。** 既存の外部サービスの場合と同様に、コンポーネントを利用するサービスの名前空間に設定を置きます。
     たとえば、`gitlab_rails['openbao']`、または `gitlab_rails['orbit_enabled']`、
     `gitlab_rails['orbit_grpc_endpoint']`、`gitlab_rails['orbit_secret']` です。
   - **シークレット。** 他の外部サービスと同様に、共有シークレットは双方の設定項目です。
     Omnibus は `gitlab_rails['orbit_secret']` など自らが所有するシークレットのみを生成、検証し、`gitlab-secrets.json` に保存します。
     利便性のため、`gitlab-ctl` コマンドで、Omnibus とコンポーネントの間で共有する個々のシークレット値を、
     Kubernetes Secret として適用できる形式でエクスポートおよびインポートできます。
     コンポーネントが必要とする Omnibus のシークレットと、Omnibus サービスが必要とするコンポーネント所有のシークレットの両方に対応します。
     扱うのはシークレット値だけで、設定は扱わず、`gitlab-secrets.json` 全体はエクスポートしません。
     現在 Omnibus に同梱している KAS や Pages などのサービスを将来クラスターに移す場合も対象です。
   - **NGINX コンポーネントプロキシ。** GitLab ホスト経由でコンポーネントにアクセスする GitLab 外部のクライアント向けです。
     コンポーネントごとに既存の `nginx` 設定にエントリを追加します。共通のデフォルトにより、ほとんどのエントリでは
     ホスト名とアップストリームを指定するだけで済みます。

     ```ruby
     nginx['component_proxy_defaults'] = {
       'protocol'         => 'https',   # http | https | grpc | grpcs
       'upstream_ca_file' => '/etc/gitlab/trusted-certs/cluster-ca.crt',
     }

     nginx['component_proxy']['openbao'] = {
       'external_url' => 'https://openbao.gitlab.example.com',
       'upstreams'    => ['10.0.1.10:30200', '10.0.1.11:30200'],
     }
     ```

     - アップストリームには、NodePort、LoadBalancer IP、またはクラスターに Gateway があればそれを使用できます。
       プロキシはクラスターに Gateway や Ingress コントローラーがあることを前提としません。
     - すべての区間で TLS を使用します。NGINX は、GitLab の証明書を使用するか、Let's Encrypt 証明書にホスト名を追加して
       TLS を終端します。アップストリームへの通信は再暗号化し、デフォルトでアップストリームの証明書を検証します。
     - デフォルトはコンポーネントに合わせ、リクエストボディのサイズ上限を大きくし、リクエストのバッファリングを無効化し、
       タイムアウトを長く設定します。各エントリがデフォルトを上書きできるキーは、
       `upstream_server_name`、`client_max_body_size`、`proxy_read_timeout` など、固定のリストに限られます。
       任意の NGINX スニペットを記述することはできません。`reconfigure` はリストにないキーを拒否し、
       キーを追加するには理由を記載した Omnibus のマージリクエストが必要です。ルーティングの詳細はコンポーネント側が管理します。
       リスト内の設定だけでは足りないコンポーネントは、クラスターのイングレスを経由させます。
     - SNI による TLS パススルーは対象外です。Omnibus の NGINX ビルドには `stream` モジュールが含まれないため、
       追加する場合は別途変更が必要です。
   - **内部トラフィックの Omnibus 側。** GitLab サービスとコンポーネントの間の双方向の通信が対象です。
     Rails や Sidekiq からコンポーネントへの呼び出しと、コンポーネントから GitLab API や Omnibus サービスへの呼び出しが該当します。
     接続方法は、チャートがプライベートネットワーク上でコンポーネントをどのように公開するかに応じて、
     コンポーネントで必要になった時点で決めます。

   Omnibus は、各機能を最初に必要とするコンポーネントが現れた時点で、その利用方法に合わせて実装します。
   コマンドや設定の正確な名前は実装時に確定します。
1. **`oak` 設定の名前空間は非推奨とし、その後削除します。** この ADR の承認後、最初のリリースで非推奨を告知します。
   そのリリースから 3 か月以上経った後、最初の必須アップグレード経由バージョンで削除します。OAK は
   [Beta 機能](https://docs.gitlab.com/policy/development_stages_support/#beta)であるため、
   メジャーリリース以外でも削除できます。GitLab 19.7 で告知する場合、削除は 19.11 になります。

## 結果

- 同一ホスト構成のユーザーは、削除が行われるリリースより前にクラスターを別のインフラストラクチャへ移す必要があります。
  また、`oak['components']['openbao']` を `gitlab_rails['openbao']` に置き換え、独自のチャート values を記述し、
  クラスターから OpenBao を公開するか、Omnibus の NGINX コンポーネントプロキシ（決定 4）経由でルーティングする必要があります。
- 削除までは、`gitlab.rb` に `oak[...]` の設定があると、`gitlab-ctl reconfigure` が非推奨の警告を表示します。
  削除後は、削除済みの他の Omnibus 設定と同様、`oak[...]` の設定が残っていると再設定が失敗します。
- 非推奨の告知では、OpenBao プロキシに依存しているユーザーに
  [omnibus-gitlab#10150](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/10150)でのフィードバックを求めます。
  この内容を Omnibus 側の設計に反映します。ユーザーが OpenBao プロキシに依存している場合、
  `oak` 名前空間の削除前に、OpenBao に最初の `nginx['component_proxy']` エントリを追加します。
- [Early Self-Managed Advanced](/handbook/engineering/architecture/design-documents/selfmanaged_segmentation/#early-self-managed-advanced-sma)のトラフィックモデルは引き続きサポートします。コンポーネントプロキシにより、高度なコンポーネント宛てのすべての受信トラフィックを
  Foundation に経由させることができます。クラスターからコンポーネントを直接公開する構成もサポートします。
- この方針では、20.0 での GA に Bridge
  （[gitlab-operator#2308](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/work_items/2308)）は不要です。
  Omnibus 側は設定、シークレット、コンポーネントプロキシで対応し、クラスター側はコンポーネントとチャートのドキュメントで説明します。
  将来の改善として、Bridge でクラスター側のセットアップの一部を自動化できます。
- 2 つのインストールを別々に運用する場合、一定の手間がかかります。チームは、OAK で高度なコンポーネントを実行する
  最初のお客様からのフィードバックをもとに、この分担と Omnibus が自動化する範囲を見直します。
- 削除の対象は、`oak` クックブック、NGINX の `oak['network_address']` へのバインド、OAK の BATS テスト、
  CI ジョブ `OAK:smoke-test` です。
- [OAK コンポーネント統合ガイド](https://gitlab.com/gitlab-org/omnibus-gitlab/-/blob/master/doc/development/oak_component_integration.md)は、
  Orbit のパターンに沿って、Omnibus 側の設定、シークレット、コンポーネントプロキシに内容を絞ります。
- クラスターと Omnibus の間のトラフィックは必ずホストをまたぎます。Omnibus は双方向のトラフィックの Omnibus 側を担い、
  詳細は各コンポーネントで必要になった時点で決めます。各コンポーネントはトラフィックを暗号化し、
  その方法をドキュメントに記載する必要があります。クラスターからのトラフィックに対して Omnibus で相互 TLS を終端する必要があれば、
  この ADR で一律に決めず、コンポーネントごとに判断します。
- [ADR-001](001_dont_package_or_bless_kubernetes_distros.md)は引き続き有効です。GitLab は Kubernetes ディストリビューションの
  パッケージ化や推奨を行いません。同一ホスト構成がなくなるため、調査フェーズで検証した軽量ディストリビューションを
  特別に扱うことはありません。
- 高度なコンポーネントのデータストアについては
  [ADR-008](008_no_omnibus_managed_data_stores.md)を参照してください。

## 検討した代替案

- **同一ホスト上のクラスターを引き続きサポートする案。**
  [背景](#context)に記載した理由で不採用です。最も問題が起きやすいトポロジーを引き続きサポートすることになり、
  Omnibus に最も多くのコードが必要です。
- **コンポーネントごとのプロキシを `oak` 配下に残す案。** `nginx['component_proxy']` 設定を採用するため、不採用です。
  現在のプロキシは OpenBao と `oak` 名前空間に固有のもので、
  コンポーネントを追加するたびに専用の設定とテンプレートが必要になります。
- **Omnibus で稼働するサービスの `<service>['nginx']` のパターンに沿って、コンポーネントごとにクックブックを用意する案。**
  `gitlab_kas['nginx']` などがこのパターンに該当します。Omnibus は高度なコンポーネントを実行せず、
  コンポーネントを追加するたびに新しいクックブックが必要になるため、不採用です。
- **クラスターの Gateway への汎用転送を 1 つ設ける案。** アップストリームを 1 つに絞り、ホスト名のリストを指定します。
  Gateway または Ingress コントローラーがクラスターで稼働していることが前提になり、さらにコンポーネントごとに異なる
  アップストリームが必要で、独自の設定が必要なコンポーネントもあるため、不採用です。
- **プロキシをカスタムサーバーブロックに委ねる案。** コンポーネントが増えるたびに NGINX の設定がお客様の負担となり、
  Omnibus NGINX は接続の Omnibus 側に属するため、不採用です。
- **最初からクラスターのイングレスを必須にし、コンポーネントの公開をクラスターに委ねる案。** ルーティングの情報を
  コンポーネントのチャートに一元化し、いずれクラスターのイングレスが必要になるクラウドネイティブ GitLab への移行に備えられます。
  ただし、Gateway や Ingress コントローラーがあることを前提にできず、GitLab ホストを唯一のエントリーポイントにしたい
  お客様に DNS、TLS、ファイアウォールの設定作業が増え、Early Self-Managed Advanced のトラフィックモデルが失われるため、
  不採用です。Bridge はクラスターに対して動作し、Omnibus NGINX を設定しないため、この事情は変わりません。
- **外部クラスター向けに Helm values の生成を残す案。** Omnibus から提供されるのはユーザーが自分で入力する情報だけで、
  Omnibus 管理下の PostgreSQL 以外のデータベースを使うと一部の値が誤りになるため、不採用です。

## 参考資料

1. [omnibus-gitlab#10150: OAK のスコープを縮小し、アドオン向けの Helm values 生成と NGINX 接続設定を非推奨にする](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/10150)
1. [gitlab-operator#2308: 混在環境向けの Bridge](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/work_items/2308)
1. [Linux パッケージでデプロイした GitLab 向けに OpenBao をインストールする](https://docs.gitlab.com/administration/secrets_manager/linux_package_integration/)
1. [ADR-003: Omnibus は Kubernetes サービス公開方法に依存しない](003_omnibus_agnostic_k8s_service_exposure.md)
1. [ADR-004: OAK でのマルチノード Omnibus サポート](004_multi_node_omnibus_support.md)
1. [ADR-008: Omnibus は高度なコンポーネントのデータストアを管理しない](008_no_omnibus_managed_data_stores.md)
