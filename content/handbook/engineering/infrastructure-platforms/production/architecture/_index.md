---
title: "本番アーキテクチャ"
controlled_document: true
tags:
  - security_policy
  - security_policy_caplscsi
upstream_path: "/handbook/engineering/infrastructure-platforms/production/architecture/"
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T07:58:23+09:00"
translator: codex
stale: false
lastmod: 2026-06-29T08:59:00-04:00

---

{{< label name="Visibility: Audit" color="#E24329" >}}

GitLab.com のコアインフラは主に Google Cloud Platform（GCP）の `us-east1` リージョンにホストされています（[リージョンとゾーン](https://cloud.google.com/compute/docs/regions-zones/)を参照）。

このドキュメントは GitLab.com の公開向け運用に不可欠でないサーバーはカバーしていません。

## 目的

このページは GitLab.com の本番アーキテクチャの概要を記録した[文書](/handbook/security/controlled-document-procedure/#purpose)です。

## スコープ

GitLab.com を実行するコンピュートとネットワークのレイアウト

## 役割と責任

| 役割  | 責任 |
|-----------|-----------|
| インフラチーム | 設定と管理の責任者 |
| インフラ管理（コードオーナー） | 重大な変更とこの手順の例外の承認責任者 |

## 手順

### 関連ページ

- [アプリケーションアーキテクチャのドキュメント](https://docs.gitlab.com/ee/development/architecture.html)
- [GitLab.com の設定](https://docs.gitlab.com/ee/user/gitlab_com/)
- [GitLab.com のレート制限](https://docs.gitlab.com/user/gitlab_com/#rate-limits-on-gitlabcom)
- [GitLab.com のモニタリング](/handbook/engineering/monitoring/)
- [GitLab パフォーマンスモニタリングのドキュメント](https://docs.gitlab.com/ee/administration/monitoring/performance/index.html)
- [アプリケーションのパフォーマンス](/handbook/engineering/performance/)
- [CI サービスアーキテクチャ](ci-architecture.md)
- [dev.gitlab.org のアーキテクチャ](supporting-architecture.md#dev-gitlab-org)
- [ops.gitlab.net のアーキテクチャ](supporting-architecture.md#ops-gitlab-net)
- [version.gitlab.com のアーキテクチャ](supporting-architecture.md)

### 現在のアーキテクチャ {#infra-current-archi-diagram}

#### GitLab.com 本番アーキテクチャ {#gitlab-com-architecture}

<img
  src="https://docs.google.com/drawings/d/e/2PACX-1vT_5uGw5WDdR3zwjmT3ejgSVvY_HbyOthj5vCdDiOh5zSXmVMZm0-4NtBbETNYQNADcrS5_8FSLiWQI/pub?w=669&amp;h=551"
  alt="GitLab.com 本番アーキテクチャ図">

[ソース](https://docs.google.com/drawings/d/1xM32ToSpKvySEHmkTzd4Fc4IAmdZu9lixdK98Fr0LTk/edit)、GitLab 社内使用のみ。

GitLab.com の大部分は [GitLab クラウドネイティブ Helm チャート](https://docs.gitlab.com/charts/)を使用して Kubernetes 上にデプロイされています。`PostgresSQL`、`Gitaly`、`Redis`、`Elasticsearch` などのデータストアサービスにはいくつかの例外があります。

##### クラスター設定 {#cluster-configuration }

GitLab.com は本番用に 4 つの Kubernetes クラスターを使用しており、ステージング用にも同様の設定のクラスターがあります。
1 つは `us-east1` リージョンのリージョナルクラスターで、残りの 3 つは GCP のアベイラビリティゾーン `us-east1-b`、`us-east1-c`、`us-east1-d` に対応するゾーンクラスターです。
複数のクラスターを持つ理由は以下の通りです。

- 高帯域幅サービスがゾーンをまたいでネットワークトラフィックを送信しないようにするため
- ワークロードの分離
- クラスターのメンテナンス変更とアップグレードの分離

複数のゾーンクラスターにトラフィックを分割することを選択した理由の詳細については、[単一のリージョナルクラスターに対する代替案を検討したこの Issue](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/1150)を参照してください。
単一のリージョナルクラスターは Sidekiq や Kas のような高帯域幅要件のないサービスやリージョナルデプロイがより適したサービスにも使用されています。

GitLab の透明性の価値に従い、GitLab.com のすべての Kubernetes クラスター設定はインフラと設定を含めて公開されています。

インストールの管理には以下のプロジェクトが使用されています。

- [k8s-workloads/gitlab-com](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com): GitLab.com の Kubernetes ワークロード設定を含み、コアの GitLab.com アプリケーションをデプロイする [GitLab Helm チャート](https://gitlab.com/gitlab-org/charts/gitlab)の設定もここに含まれます。
- [argocd/apps](https://gitlab.com/gitlab-com/gl-infra/argocd/apps): ArgoCD で管理される Kubernetes サービスワークロード用の ArgoCD Applications を含みます。ArgoCD は、コアの gitlab-com アプリケーション以外の GitLab.com インフラワークロードに対する標準の GitOps デプロイツールです。
- [argocd/config](https://gitlab.com/gitlab-com/gl-infra/argocd/config): ArgoCD のトップレベル Applications、AppProjects、リポジトリ、クラスターインベントリ、RBAC 設定を含みます。
- [config-mgmt](https://gitlab.com/gitlab-com/gl-infra/config-mgmt): クラスターの Terraform 設定で、クラスター、ノードプール、サービスアカウント、IP アドレス予約など、クラスターを実行するために必要なすべてのリソースが設定されています。
- [charts](https://gitlab.com/gitlab-com/gl-infra/charts): インフラ部門が、コミュニティチャートのないサービスをデプロイするために作成したチャートです。

すべてのインバウンドの Web リクエスト、git http リクエスト、git ssh リクエストは Cloudflare で受信され、HAProxy をオリジンとしています。Sidekiq では、Sidekiq キューを異なるリソースグループに分割するために複数の Sidekiq クラスター用ポッドが設定されています。詳細は [Sidekiq のチャートドキュメント](https://docs.gitlab.com/charts/charts/gitlab/sidekiq/)を参照してください。

##### モニタリングとロギング

GitLab.com のモニタリングはアプリケーションと同じクラスターで実行されます。メトリクスは ops クラスターで Mimir を使用して集約され、複数のコンポーネントを持つ [Grafana](https://grafana.gitlab.net) でインターフェースを提供しています。

Prometheus は `monitoring` ネームスペースの [kube-prometheus-stack Helm チャート](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)を使用して設定されており、すべてのクラスターが独自の Prometheus を持つことでメトリクスのシャーディングを実現しています。

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRsr0FMLtX9Cy6KiXhAc90SNz_w_JyifZzdWw8y8WsVotU-7qtRpxHLbKkDoAE60ckhWP30PEw9bOvZ/pub?w=800" alt="">

[ソース](https://docs.google.com/drawings/d/1ELrompqluRa00-Q_L9Ruq6W5KHFmgh1Wn1cdwEpOhaw/edit?usp=sharing)、GitLab 社内使用のみ

クラスターのアラートは、プラットフォームの[全体的な SLA](/handbook/engineering/monitoring/) に集約される生成済みの[ルール](https://gitlab.com/gitlab-com/runbooks/-/tree/master/mimir-rules)を使用します。

ロギングは [fluentd-elasticsearch](https://gitlab.com/gitlab-com/gl-infra/argocd/apps/-/blob/main/services/fluentd-elasticsearch/README.md) を使用して設定されており、すべてのポッドのログが一意の Elasticsearch インデックスに転送されます。fluentd-elasticsearch は `logging` ネームスペースにデプロイされています。

##### クラスター設定の更新

GitLab アプリケーションのみに使用される単一のネームスペース `gitlab` があります。
チャート設定の更新は [`k8s-workloads/gitlab-com` プロジェクト](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com)で設定され、環境ごとのオーバーライドがある GitLab.com 環境のデフォルト設定として [YAML 設定ファイル](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/tree/master/releases/gitlab/values)が使用されています。
これらの設定の変更は、MR レビューワークフローを使用してレビューした後、SRE と Delivery チームによって適用されます。
GitLab.com で変更が承認されると、設定の更新が本番環境の可用性に依存しないよう、変更を適用するパイプラインは別の運用環境で実行されます。

ロギング、モニタリング、インテグレーションなどの他のサービス向けのクラスター内ネームスペースについては、ArgoCD を使用した別の GitOps ワークフローが踏まれ、サービス定義は [`argocd/apps`](https://gitlab.com/gitlab-com/gl-infra/argocd/apps) に、共通の ArgoCD 設定は [`argocd/config`](https://gitlab.com/gitlab-com/gl-infra/argocd/config) に配置されています。

GitLab.com は Kubernetes クラスターで使用されるイメージのプルに自分自身に依存しません。
代わりに、[CNG イメージ](https://gitlab.com/gitlab-org/build/CNG/)には [dev.gitlab.org](https://dev.gitlab.org) コンテナレジストリを使用します。
これはインシデント発生時でもイメージのプルとアプリケーションの実行を必要に応じて維持できるようにするためです。
自分たちでビルドしないイメージについては、Docker Hub からプルする場合があります。
便利なことに、これらのイメージは Google の [Container Registry 製品](https://cloud.google.com/container-registry/docs/pulling-cached-images)にミラーリングされています。
GKE ノードはこのミラーを最初から設定しており、Docker Hub が利用できない場合のさらなる冗長性を提供しています。

#### データベースアーキテクチャ

<img src="https://docs.google.com/drawings/d/e/2PACX-1vT-w2R-TuNkrvYzn6pmVOPmswhxt1o6yOhfEczgT3EHkD7xVkx3wtyOHndSJxBwcHwsnSPUun5SSVRc/pub?w=960&amp;h=720" alt="">

[ソース](https://docs.google.com/drawings/d/1BWb1Q-hJzCZs8krvYwi5V9F_hJe-4CJdtIORfVGWJLo/edit)、GitLab 社内使用のみ

#### Redis アーキテクチャ

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRlVEM91d_D4YzzQCzb7kaclbw-F4QvYg7Ml7Xz9S9aAcNCEUM6RGMF3Uadx8jYaniE1NCOmLP754xz/pub?w=960&h=720" alt="">

[ソース](https://docs.google.com/drawings/d/1-j_nFW7EJ01Te26f6zZzFNaPboVzVUtAmuFBbqzztVQ/edit)、GitLab 社内使用のみ

<img src="https://docs.google.com/drawings/d/e/2PACX-1vTL1CvbRbxx3Q9iEQGntgdQ6Vw4iSc5eokogS-0UvBj5mEMbJIz0nKAh8SBaInmdXpwblRju2tcFNs6/pub?w=960&amp;h=720" alt="">

[ソース](https://docs.google.com/drawings/d/1vz4cluxqoccE2REyJLfLOM2etJjPvYvonwJoIHMtC2w/edit)、GitLab 社内使用のみ

GitLab.com はキャッシュ、レート制限、Sidekiq キューイングなど、さまざまなユースケース向けに複数の Redis シャードを使用しています。各 Redis シャードの設定と使用法についての詳細は、[chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/tree/master/roles) および [GitLab](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/redis) を参照してください。Redis インスタンスと GitLab デプロイメントの関係は[この Grafana リンク](https://dashboards.gitlab.net/goto/tq8iLlaHR?orgId=1)で確認できます。

必要に応じて、アプリケーションの変更によって CPU 飽和に対処することもあります。これに関するいくつかのテクニックについては[このビデオ](https://youtu.be/qgK8TPTZllU)で説明されています。

#### ネットワークアーキテクチャ

<img src="/images/handbook/engineering/infrastructure/production-architecture/network-arch.png" alt="">

[ソース](https://drive.google.com/file/d/19-IMmcJHVUz_bWOXU7_1NoYOdQJEZ3lM/view?usp=sharing)、GitLab 社内使用のみ

ネットワークインフラは現在のアーキテクチャ図で定義された各クラスのサーバー向けのネットワークで構成されています。各ネットワークには上記で定義された同様のルールセットが含まれています。

現在、ops ネットワークとピアリングしています。このネットワーク内には、メトリクスシステムを充実させるために InfluxDB と Prometheus データの流入を許可するモニタリングインフラの大部分があります。

アラート管理のために、環境の潜在的な障害に関わらずアラートを送信できるよう、すべてのネットワークをピアリングしてアラートマネージャーのクラスターを構成しています。

これらのネットワークピア間でアプリケーションデータや顧客データは流れません。

#### DNS と WAF

GitLab は Cloudflare の Web アプリケーションファイアウォール（WAF）を活用しています。DNS（gitlab.com、gitlab.net）は Cloudflare でホストし、Amazon Route 53（gitlab.io など）も使用しています。
CloudFlare についての詳細は[ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/cloudflare/README.md)と[アーキテクチャ概要](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/6f92124563835415e5c6e59f40b32e7307d3fb67/cloudflare/README.md#with-cloudflare)を参照してください。

#### TLD ゾーン

DNS 名については、GitLab をサービスとして提供するすべてのサービスは `gitlab.com` ドメイン、GitLab をサポートする補助サービス（Chef、ChatOps、VPN、ロギング、モニタリングなど）は `gitlab.net` ドメインに配置します。

#### リモートアクセス

本番環境へのアクセスはバスチョンホストを通じて、アクセスが必要な者のみに付与されます。
バスチョンを通じたアクセスの設定手順は[バスチョンランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/bastions)を参照してください。

### シークレット管理

GitLab は 2 つの異なるシークレット管理アプローチを使用しています。Google Cloud Platform（GCP）サービスには GKMS、その他のすべてのホストシークレットには Chef Encrypted Data Bags を使用しています。

#### GKMS シークレット

シークレット管理の詳細については、[GKMS を使用した Chef シークレット](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/fleet-management/config_management/gkms-chef-secrets.md)および [Kubernetes でのシークレット管理方法](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com#gitlab-secrets)のランブックを参照してください。

### モニタリング

状態を確認するには、詳細について[モニタリングハンドブック](/handbook/engineering/monitoring/)を参照してください。

## 例外

このアーキテクチャポリシーと設計への例外は[コンプライアンス Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/-/issues/)で追跡されます。

## 参考資料

- [管理文書手順](/handbook/security/controlled-document-procedure/)
