---
title: 'Cells ADR 028: オブザーバビリティフェデレーション'
description: "各 Cell の Prometheus エンドポイントを保護されたパブリックイングレス経由で公開し、Instrumentor によって Grafana データソースの登録を自動化します。"
owning-stage: "~devops::tenant services"
group: cells-infrastructure
creation-date: "2026-07-06"
authors: ["@romongbale"]
approvers: ["@jarv", "@daveyleach", "@a_richter", "@knottos", "@nduff"]
status: proposed
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/028_observability_federation/
upstream_sha: c75ccd81af7d76262c8cb188bf7e7e2a7f838894
lastmod: "2026-07-29T15:19:52-04:00"
translated_at: "2026-07-31T08:29:15+09:00"
translator: codex
stale: false
---

## 概要

各 Cell は、AWS のテナントと GCP のグローバル Grafana 間のマシン間トラフィックに対して TLS を終端する、Tenant Ingress Gateway（Gateway API、`gateway.networking.k8s.io`）リソースを通じて、クラスター内の Prometheus エンドポイントを公開します。アクセスは CIDR 許可リストによって制限され、読み取り専用の Prometheus クエリパスのみに限定されます。グローバル Grafana はデータソースとしてエンドポイントに直接クエリし、データソースのプロビジョニングは、サービスアカウント API キーを使用して Grafana HTTP API 経由で Instrumentor が自動化します。mTLS はアーキテクチャを変更せず、Cell ごとに有効化できます。

[tenant-services work item #454](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/tenant-services/team/-/work_items/454)で追跡しています。
参照

## コンテキスト

この ADR は、[Cells 向け Observability 2.0](../infrastructure/observability_2_0.md)で提起された未解決の問いを扱います。フェデレーテッドプルモデルには、いくつかの設計上の課題があります。

- グローバル Grafana（`dashboards.gitlab.net`）は、AWS の Cell ごとの Prometheus エンドポイントにクエリする必要があります。
- Cell の Prometheus エンドポイントを Grafana データソースとしてオンボーディングする処理は、テナントのライフサイクルの一部として自動化する必要があります。
- GCP Grafana と AWS Prometheus 間のネットワークパスはパブリックインターネットを通過するため、保護する必要があります。

この ADR は次の問いを解決します。

- グローバルクエリ中に Cell に到達できない場合はどう扱うか。
- グローバル Grafana インスタンスと各 Cell のオブザーバビリティスタック間の認証/認可はどのように扱うか。
- グローバルなアラートレイヤーが必要か、それともアラートは Cell ローカルのままとするか。
- 新しい Cells をグローバル Grafana のデータソースとして自動登録する方法。

このフェデレーテッドプル設計が現在のアプローチです。Cell フリートがスケールするにつれ、厳選された高価値メトリクスセットを中央ストアへ選択的に remote write することが予想されます。[一元化された Remote Write ではなくフェデレーテッドプルを選ぶ理由](../infrastructure/observability_2_0.md#why-federated-pull-instead-of-centralized-remote-write)を参照してください。

## 決定

### 1. ネットワーク: TLS、CIDR 制限、パスフィルタリングを備えた Envoy Gateway

各 Cell の Prometheus エンドポイントは、次を備える Envoy Gateway（Gateway API、`gateway.networking.k8s.io`）リソースを通じて公開します。

- Gateway での **TLS 終端**（cert-manager 管理の証明書。専用 HTTP リスナーの ACME HTTP-01 によって更新）。AWS の Cell と GCP の Grafana 間のマシン間トラフィックを保護します。
- **パスフィルタリング**： `HTTPRoute` は、Grafana に必要な読み取り専用の Prometheus クエリサーフェスのみを公開します。`/api/v1/query`、`/api/v1/query_range`、`/api/v1/query_exemplars` です。管理、書き込み、設定のエンドポイントは、意図的にルーティングせずブロックしたままにします。`/api/v1/admin/*`、`/api/v1/write`、`/-/reload`、`/-/quit`、`/federate`、`/api/v1/status/config`、`/api/v1/status/flags`。
- Envoy Gateway `SecurityPolicy` による **CIDR 許可リスト**。既知の Grafana エグレス IP への受信アクセスを制限します。ポリシーは常に作成され、**fail closed** になります。オブザーバビリティ許可リストが空の場合、保護されていないルートではなく全拒否ポリシーになります。このホストでは Cloudflare WAF がバイパスされるため、これは重要です。
- **mTLS はデフォルトで無効**ですが、Gateway を再設計せずに Instrumentor テナントモデル（`prometheus_central_grafana_mtls_enabled`）を通じて Cell ごとに有効化できます。有効にすると、Envoy Gateway `ClientTrafficPolicy` は、テナントごとの CA（cert-manager 発行の `prometheus-mtls-ca-tls`）で署名されたクライアント証明書を要求します。この場合、CIDR 許可リストだけでは不十分です。ポリシーは `sectionName` によって HTTPS クエリリスナー（`prometheus-web-<i>`）のみを対象にします。クライアント証明書を提示しない HTTP-01 証明書更新を動作させ続けるため、ACME HTTP リスナーを除外します。また、`mergeGateways` が有効であるため、Gateway 全体に適用する（`sectionName` を持たない）ポリシーでは、テナントクラスターのマージされた Gateway のすべてのリスナーに誤って mTLS を強制し、Grafana 向け Prometheus パスだけでなく Cell の他のすべてのワークロードトラフィックも壊してしまいます。

### 2. 認証

認証は 2 つの異なるプレーンで行われます。

**Instrumentor から Grafana（データソース登録）:** Instrumentor は、データソース管理にスコープされた Grafana サービスアカウントが発行した **bearer token API キー**を使用して Grafana HTTP API を呼び出します。キーは次のとおりです。

- Vault に保存され、プロビジョニング時に Instrumentor へ注入されます。
- 標準の Instrumentor シークレットローテーションライフサイクルの一部としてローテーションされます。
- データソースを作成および削除する Grafana API 呼び出しで、`Authorization: Bearer <token>` ヘッダーとして渡されます。

**Grafana から Cell Prometheus（クエリパス）:** Grafana による各テナントの Envoy Gateway へのアクセスは、API キーではなくネットワークレイヤーで制限されます。

- Gateway で終端される **TLS** は、サーバーを Grafana に認証します。
- `SecurityPolicy` の **CIDR 許可リストは、受信アクセスを Grafana ロードバランサーのエグレス IP のみに制限します**。
- mTLS が有効な場合、Grafana は追加でテナントごとの CA（Vault に保存）で署名されたクライアント証明書を提示し、呼び出し元を認証します。

### 3. 自動化: Instrumentor が Grafana データソースをプロビジョニングする

Instrumentor は、テナントの設定およびデプロビジョニングフローの一部として Grafana データソースのライフサイクルを管理します。

- **プロビジョニング/設定時:** Grafana HTTP API を呼び出して、サービスアカウント API キーで認証され、`https://<tenant_managed_domain>/prometheus`（または同等のイングレスホスト名）を指す Prometheus データソースを作成します。データソース名は `cell-<tenant_id>-<region>`（例: `cell-icellapp-us-east-1`）です。
- **デプロビジョニング時:** Grafana HTTP API を呼び出してデータソースを削除します。
- Grafana API エンドポイントとサービスアカウントの認証情報は、`TENANT_PROMETHEUS_DB_DISK_SIZE` や他の環境変数と同じパターンで、Jsonnet によって生成された環境を通じて Instrumentor に注入されます。

### 4. 許可 IP リストの自動化

グローバルオブザーバビリティスタック（ダッシュボード用の Grafana と長期メトリクスストレージ用の Mimir）は、Vault への書き込みアクセスを持つ config-mgmt によってデプロイされます。config-mgmt は、Grafana のエグレス IP に基づいて Vault 内の許可 IP リストを自動更新します。Instrumentor はこのリストを使用して、各テナントの Prometheus エンドポイントのイングレスルールを構築します。

## セキュリティに関する考慮事項

| 懸念                                  | 緩和策                                                               |
|------------------------------------------|--------------------------------------------------------------------------|
| Prometheus への未認証アクセス     | CIDR 許可リスト（Grafana LB エグレス IP のみ）+ TLS              |
| 管理/書き込み/設定エンドポイントの公開 | パスフィルタリング: 読み取り専用クエリサーフェスのみをルーティング               |
| 空の許可リストによってルートが開いたままになる   | `SecurityPolicy` を常に作成し、fail closed で全拒否にする                |
| このホストで Cloudflare WAF がバイパスされる    | Gateway レベルの CIDR 許可リストおよびパスフィルタリングを代償的統制とする |
| 認証情報の公開                      | キーを Vault に保存し、ソースまたは env ファイルには保存しない                       |
| 機密性の高い Cells に対する認証が不十分    | テナントモデルごとの mTLS オプトイン（`ClientTrafficPolicy`、テナントごとの CA）      |
| 転送中のデータ                          | Grafana から Gateway へのトラフィックで TLS を強制し、平文のパブリック転送は許可しない |
| Grafana サービスアカウントの過剰権限   | データソース管理のみにスコープ                                         |

## 結果

- Instrumentor の設定およびデプロビジョニングのプレイブックに、2 つの新しい Grafana API 呼び出し（データソースの作成/削除）が追加されます。
- Grafana API キーの Vault シークレットパスの規約を定義し、文書化する必要があります。
- Envoy Prometheus Gateway リソース（`HTTPRoute`、`SecurityPolicy`、オプションの `ClientTrafficPolicy`）は、テナントモデルまたは既知の Grafana エグレス IP リストから取得した CIDR リストを使用し、Cell ごとに Instrumentor が管理します。
- Grafana エグレス IP 許可リストは、内容の信頼できる情報源である Observability（O11y）チームが所有します。静的で変更頻度は低いと予想されます。config-mgmt 内の許可リストが変更された場合、config-mgmt は対応する Vault シークレットを自動更新し、Instrumentor と Grafana 向け Gateway 設定が手動操作なしで最新の IP を使用できるようにする必要があります。
- mTLS の有効化には、より強い認証を必要とする Cells のためのフォローアップ用 runbook と、Grafana データソース設定にクライアント証明書を注入する Instrumentor のサポートが必要です。
- テナントごとの集約ネットワークエグレスを計測し、フェデレーテッドプルのクエリ時エグレスと継続的 remote write の取り込み時エグレスを直接比較できるようにする必要があります。これにより、どちらかのモデルを長期に採用する前に、受け入れた不確実性のトレードオフを検証します。

## フォローアップ

- [ ] Instrumentor: API 経由の Grafana データソース作成/削除（設定およびデプロビジョニング）
- [ ] Instrumentor: Cell ごとの Envoy Gateway による CIDR 制限、パスフィルタリング済み TLS Prometheus 公開（進行中: [instrumentor!8025](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/merge_requests/8025)）
- [ ] Grafana API キーの Vault シークレットパス規約を定義する
- [ ] config-mgmt: Grafana エグレス IP 許可リストの変更を Vault に自動同期する
- [ ] より強い認証を必要とする Cells 向けの mTLS 有効化 runbook
- [ ] テナントごとの集約ネットワークエグレスを計測し、フェデレーテッドプル（クエリ時エグレス）と一元化された remote write（取り込み時エグレス）の直接的なコスト比較を可能にする（追跡項目 TBD）
