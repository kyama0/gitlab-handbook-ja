---
title: "デプロイメントとリリース"
upstream_path: /handbook/engineering/deployments-and-releases/
upstream_sha: "7d467b8ae210e5b3bb843857cd3639cbc27af386"
translated_at: "2026-06-02T00:00:00Z"
translator: "claude"
stale: false
lastmod: "2026-06-02T14:47:42-06:00"
---

## 概要と用語

このページでは、ユーザーへの変更デリバリーに使用されるデプロイメントとリリースのアプローチを説明します。全体的なプロセスは 2 つの重要な部分で構成されています。

1. **月次セルフマネージドリリース**: GitLab バージョン（XX.YY.0）が[毎月公開](https://gitlab.com/gitlab-org/release/docs/blob/master/general/monthly/process.md)されます。この月次リリースから、[計画済みパッチ](/handbook/engineering/releases/patch-releases/)が月 2 回スケジュールされ、[計画外の重要なパッチ](/handbook/engineering/releases/patch-releases/#patch-release-types)が必要に応じて作成されます。
2. **GitLab.com デプロイメント**: [マスターブランチから作成されたブランチ](https://www.youtube.com/watch?v=_G-EWRpCAz4)を定期的な間隔でデプロイする継続的デリバリープロセス。

個々のプロセスの詳細および使用方法については、GitLab.com の変更に関する[デプロイメントページ](/handbook/engineering/deployments-and-releases/deployments)と、セルフマネージドユーザー向けの変更に関する[リリースページ](/handbook/engineering/releases/)をご覧ください。

デプロイメントとリリースの**主要な優先事項は、GitLab.com 上および独自インフラで GitLab を実行しているユーザー向けのアプリケーションとしての [GitLab の可用性とセキュリティ](/handbook/engineering/development/principles/#prioritizing-technical-decisions)** です。

### デプロイメントとリリースプロセスの概要


{{< youtube "aAQuhUnpbQE" >}}


テスト目的のため、すべての変更はセルフマネージドリリースの候補として検討される前に GitLab.com にデプロイされます。デプロイメントとリリースのサイクルは異なるタイムラインで運用されており、変更は 1 日に複数回 GitLab.com にデプロイされ、パッケージは月に数回セルフマネージドユーザー向けにリリースされます。

この概要は 2 つのプロセスがどのように連携しているかを示しています。

![デプロイメントとリリースプロセスの概要](/images/engineering/deployments-and-releases/deployment-and-release-process-overview.png)

- [図のソース](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit?usp=sharing)

1. エンジニアが機能またはバグ修正を作成。変更はメンテナーによってレビューされます
1. 検証済みの変更がデフォルトブランチにマージされます
1. スケジュールされたパイプラインがすべての新しい変更を GitLab.com へのデプロイ用「自動デプロイパッケージ」にパッケージ化します。パッケージは[指定された時間](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)に毎日複数回作成されます
1. デプロイメントが許可されている場合、自動デプロイパイプラインが開始されます。本番環境変更ロック、不健全な環境、または他の進行中のデプロイメントがデプロイメントを妨げる可能性があります
1. 自動デプロイパッケージが GitLab.com にデプロイされます。詳細は[デプロイメントプロセスを参照](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)してください
1. GitLab.com に正常にデプロイされた変更は、セルフマネージドユーザー向けのパッケージリリースの候補として検討できます。これらの変更の新しいリリース候補パッケージが作成されます
1. リリース候補がテスト環境にデプロイされ、自動 QA テストが実行されます
1. リリース候補が公式にタグ付けされ、リリース用に公開されます

プロセスの詳細については[デプロイメントページ](/handbook/engineering/deployments-and-releases/deployments/)および[リリースページ](/handbook/engineering/releases/)をご覧ください

## リリースマネージャー

デプロイメントとリリースプロセスの全体的な調整と運用は、リリースマネージャーの責任です。

現在のリリースマネージャーについては、GitLab の[リリースマネージャースケジュール](/handbook/engineering/releases/release-managers/)をご確認ください。

### リリースマネージャーへの連絡方法

現在のリリースマネージャーに連絡するには:

1. GitLab の Issue およびエピックで `@gitlab-org/release/managers` ハンドルを使用する
1. Slack で `@release-managers` ハンドルを使用する

デプロイメントとリリースの議論と調整には `#releases` および `#f_upcoming_releases` チャンネルを使用します。自動デプロイメントステータスのアナウンスは `#announcements` チャンネルに行われます。

リクエストをエスカレーションする必要がある場合は、[リリース管理エスカレーションプロセス](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#release-management-escalation)を使用してください。

### 週次デリバリーメトリクスレビュー

毎週、現在のリリースマネージャーが EMEA/AMER Delivery 週次同期（[YouTube プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoPzC03-4yXuJEWdUo7VZfX)）で主要なデリバリーグループメトリクスを確認します。目標は最近のデプロイメントとリリースの経験を共有し、グループがツールとプロセスを改善する方法を特定することです。

[月次 MTTP](https://internal.gitlab.com/handbook/company/performance-indicators/product/saas-platforms-section/#mean-time-to-production-mttp) - [デプロイメントブロッカー](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1822) - [デプロイメント SLO](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery-deployment-slo?orgId=1) - [GitLab: デプロイメント頻度とリードタイム](https://gitlab.com/gitlab-org/gitlab/-/analytics/dashboards/dora_metrics?date_range_option=30d)

1. [自動デプロイパッケージダッシュボード](https://dashboards.gitlab.net/d/delivery-auto_deploy_packages/delivery-auto-deploy-packages-information?orgId=1)のウォークスルー
1. [DORA メトリクス分析ダッシュボード](https://gitlab.com/gitlab-org/gitlab/-/analytics/dashboards/dora_metrics?date_range_option=30d)の `Deployment frequency over time` および `Lead time for changes over time` パネルの月次ビューのウォークスルー — パターンや異常を確認します
1. [デプロイメント SLO ダッシュボード](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery3a-deployment-slo)のウォークスルー — デプロイメント SLO とパッケージャーパイプライン期間
1. [デプロイメントブロッカーダッシュボード](https://dashboards.gitlab.net/d/delivery-deployment_blockers/delivery3a-deployment-blockers?orgId=1&from=now-6d&to=now&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-ops&var-root_cause=$__all)および先週の[デプロイメントブロッカー](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/1822)のウォークスルー
1. 先週の MTTP に基づいてアクションが必要かどうかの確認

### デプロイメントターゲット

このセクションでは、GitLab でサポートされているデプロイメントタイプの階層を定義します。
注意: FreeBSD Ports やソースインストールなど他のデプロイメントタイプも可能ですが、公式サポート対象ではないため対象外です。
これは階層的な分類体系であるため、アイテムはツリーの複数レベルで表現されることがあります。

場合によっては、使用状況のピングデータの制限により、より広い（リーフノード以外の）分類を使用する必要がありますが、一般的にデプロイメントは利用可能な最も具体的な分類で分類されるべきです。

#### タクソノミー

このセクションでは、GitLab を配布するデプロイメントタイプのタクソノミーについて説明します。
可能な場合は、これらのデプロイメントタイプに合致させるために使用できる Service Ping 属性も記載しています。

1. **SAAS** `~deployment-type:saas`

   SaaS は、すべての顧客向け GitLab マネージドインスタンスを表します。

    1. **GitLab.com** `~deployment-type:saas-gitlab`

        GitLab.com は 2 つの _マルチテナント_ デプロイメントタイプを表します。

        1. **Original GitLab.com** `~deployment-type:saas-config-mgmt`

           GitLab.com はオリジナルのモノリシックデプロイメントで、[config-mgmt](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/) プロジェクトで設定されます。
           主に CNG チャートを使用し、Gitaly、Patroni、Postgres のデプロイには Omnibus を使用します。Service Ping データは送信されません。

        1. **Cells** `~deployment-type:saas-gitlab-cells`

           Cells は新興の組織的シャードデプロイメントであり、段階的に採用される予定です。Cells は Dedicated テナントデプロイメントツール（Instrumentor）を使用しているため、多くの点で Dedicated と同様にプロビジョニングされます。

          | Service Ping 属性            | 値                          |
          |------------------------------|-----------------------------|
          | `installation_type`          | `gitlab-cloud-native-image` |
          | `gitlab_dedicated`           | `true`                      |
          | `gitlab_environment_toolkit` | `true`                      |
          | 自律システム（ASN）          | Google                      |

    1. **Dedicated** `~deployment-type:saas-dedicated`

       Dedicated は _シングルテナント_ の SaaS オファリングです。
       Dedicated は主に GitLab Environment Toolkit（GET）ハイブリッドを使用します。
       GET は、アプリケーションサービスに Omnibus（Gitaly 向け）とクラウドネイティブチャート（CNG）を使用します。可能な場合は、Postgres（RDS、CloudSQL）、Redis（ElastiCache、MemoryStore）、Kubernetes（EKS、GKE）などのクラウドマネージドサービスが優先されます。

       GitLab.com とは異なり、Dedicated のオペレーターは GitLab 管理コンソールやその他の GitLab アプリケーションへの直接アクセス権を持っていません。
       これらのテナントは大規模での運用を想定しているため、機能フラグや設定オプションなど、テナントごとの設定オプションは最小限に抑えられています。

        1. **Commercial** `~deployment-type:saas-dedicated-comm`

           Commercial Dedicated は AWS のみにデプロイされますが、Google Cloud も利用可能（ただし商業的にはサポートされていません）。
           現在、Commercial Dedicated は GitLab Geo でレプリケートされる唯一の SaaS プラットフォームです。

           | Service Ping 属性            | 値                          |
           |------------------------------|-----------------------------|
           | `installation_type`          | `gitlab-cloud-native-image` |
           | `gitlab_dedicated`           | `true`                      |
           | `gitlab_environment_toolkit` | `true`                      |
           | 自律システム（ASN）          | Amazon                      |

        1. **US Public Sector** `~deployment-type:saas-dedicated-uspubsec`

           AWS GovCloud にデプロイされます。

           | Service Ping 属性            | 値                          |
           |------------------------------|-----------------------------|
           | `installation_type`          | `gitlab-cloud-native-image` |
           | `gitlab_dedicated`           | `true`                      |
           | `gitlab_environment_toolkit` | `true`                      |
           | 自律システム（ASN）          | AWS GovCloud                |

1. **セルフマネージド** `~deployment-type:sm`

   セルフマネージドの分類は、顧客によってデプロイおよび運用されるすべての GitLab インスタンスをカバーします。

    1. **クラウドプロバイダーデプロイ** `~deployment-type:sm-cloud`

       「クラウドプロバイダー」とは、GET でサポートされている 3 つのクラウドプロバイダー（AWS、Azure、Google Cloud）を指します。
       その他のクラウドプロバイダーはオンプレミスとして分類されます。
       クラウドプロバイダーホスト環境を他のセルフマネージド/オンプレミス環境と区別することが重要です。
       これらの環境は比較的均質な環境を提供し、PostgresSQL（RDS、CloudSQL）、Redis（ElastiCache、MemoryStore）、Kubernetes（EKS、GKE）などのマネージドサービスをサポートし、Secrets Management ツールのデプロイに重要な Key Management Services などのリソースも利用できます。

        1. **GitLab Environment Toolkit（GET）プロビジョニング**  `~deployment-type:sm-get`

           GitLab Environment Toolkit は AWS、Google Cloud、Microsoft Azure のクラウド環境をターゲットにしています。すべての GET デプロイメントターゲットは[リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/)に含まれており、ノード数と適切なノードサイジングのガイドラインを提供しています。

            1. **GET Omnibus VM ベース** `~deployment-type:sm-get-omnibus`

               すべてのサービスは Omnibus を使用して VM インスタンスにデプロイされます。
               顧客は Omnibus マネージド VM またはクラウドマネージド代替を選択できます。

               | Service Ping 属性            | 値               |
               |------------------------------|------------------|
               | `installation_type`          | `omnibus-gitlab` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `true`           |

            1. **GET クラウドネイティブ** `~deployment-type:sm-get-cng`

               部分的に（ハイブリッド）または完全に Kubernetes を使用してデプロイされた任意の GET 環境。現時点では、Service Ping データを使用してハイブリッドとフルクラウドネイティブを区別できません。

               | Service Ping 属性            | 値               |
               |------------------------------|------------------|
               | `installation_type`          | `gitlab-cloud-native-image` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `true`           |

               1. **ハイブリッド** `~deployment-type:sm-get-hybrid`

                  GET はステートレスサービス（Sidekiq、Webservice など）のみを Kubernetes にデプロイします。Gitaly は Omnibus を使用して VM にデプロイされ、顧客は Postgres と Redis を Omnibus マネージド VM またはクラウドマネージド代替から選択できます。

                  このデプロイメントは GitLab テナントデプロイメントツール（Instrumentor）でドッグフーディングされています。

               1. **フルクラウドネイティブ** `~deployment-type:sm-get-cng-full`

                  GET はステートレスサービス（Sidekiq、Webservice など）のみを Kubernetes にデプロイし、Gitaly も Kubernetes にデプロイします。ステートフルサービス（Redis、Postgres）はクラウドマネージドサービスでプロビジョニングする必要があります。
                  `ops.gitlab.net` がこのデプロイメントタイプをドッグフーディングしています。

        1. **セルフプロビジョニング** `~deployment-type:sm-cloud-sp`

           クラウドリソースのプロビジョニングに GET を使用しないクラウドデプロイ GitLab インスタンスです。
           理想的には、これらの顧客をより一貫した体験のために GET へ移行させるべきですが、様々な理由でまだそうしていません。
           これらの顧客とオンプレミスの主な違いは、これらの顧客は Postgres、Redis、Kubernetes、KMS などのマネージドサービスを使用できるオプションがあることです。

            1. **クラウド Omnibus** `~deployment-type:sm-cloud-omnibus`

               顧客はクラウドにデプロイされており、Omnibus を使用していますが GET は使用していません。

               | Service Ping 属性            | 値               |
               |------------------------------|------------------|
               | `installation_type`          | `omnibus-gitlab` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `false`          |
               | 自律システム（ASN）          | 認識済みクラウド  |

               1. **Omnibus シングルノード** `~deployment-type:sm-cloud-omnibus-single`

                  GitLab は Omnibus を使用して単一のノード/VM インスタンスにデプロイされます。
                  すべてのアプリケーションサービスは Omnibus でデプロイされます。
                  顧客は RDS などのマネージドサービスを使用している場合があります。
                  `dev.gitlab.org` はこのアプローチでデプロイされています。

               1. **Omnibus マルチノード** `~deployment-type:sm-cloud-omnibus-multi`

                  GitLab は Omnibus を使用して複数の VM にデプロイされます。マルチノードクラスター内の各ノード間の調整と設定のメカニズムは提供されていません。これは顧客に委ねられており、手動または Chef、Ansible、SaltStack などのツールで行うことができます。

            1. **Kubernetes CNG Helm チャート** `~deployment-type:sm-cloud-sp-cng`

               GitLab は顧客がプロビジョニングおよび管理する Kubernetes クラスターにデプロイされます。`~deployment-type:sm-get-cng` と同様に、Postgres と Redis は提供されず、顧客が個別にプロビジョニングする必要があります。
               顧客は GitLab Operator を使用している場合と使用していない場合があります。

               | Service Ping 属性            | 値                           |
               |------------------------------|------------------------------|
               | `installation_type`          | `gitlab-cloud-native-image`  or `gitlab-operator-2`|
               | `gitlab_dedicated`           | `false`                      |
               | `gitlab_environment_toolkit` | `false`                      |
               | 自律システム（ASN）          | 認識済みクラウド              |

    1. **オンプレミス** `~deployment-type:onprem`

       このドキュメントにおけるオンプレミス（「on-prem」）とは、クラウドベースでないデプロイメント、_または_ AWS、Google Cloud、Azure 以外のクラウドへのデプロイメントを指します。
       一般的に、オンプレミスデプロイメントでは Postgres、Redis、Kubernetes などのマネージドサービスを使用できません。
       歴史的に、Omnibus はこれらのサービスを設定する手段を提供してきましたが、ユーザーが独自のものを持ち込むこともできます。
       Secrets Management などの提案された新サービスの中には、オンプレミスで PKCS11 互換ハードウェアの統合が必要になる場合があるなど、固有の課題があります。

       1. **オンプレミス Omnibus** `~deployment-type:onprem-omnibus`

          顧客は認識済み ASN クラウドにはデプロイされておらず、Omnibus を使用しています。

          | Service Ping 属性            | 値               |
          |------------------------------|------------------|
          | `installation_type`          | `omnibus-gitlab` |
          | `gitlab_dedicated`           | `false`          |
          | `gitlab_environment_toolkit` | `false`          |
          | 自律システム（ASN）          | 未認識            |

          1. **Omnibus VM ベース シングルノード** `~deployment-type:onprem-omnibus-single`

             顧客は独自の Postgres、Redis を持ち込むことができますが、多くの場合、これらのノードはローカルの Omnibus マネージドサービスで動作しています。

          1. **Omnibus VM ベース マルチノード** `~deployment-type:onprem-omnibus-multi`

             顧客は GitLab をデプロイするための独自の設定ツール（Ansible、Chef、Saltstack など）を構築する必要があります。ノード数とノードサイズを選択するために[リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/)に従うことを顧客に推奨します。

       1. **Kubernetes CNG Helm チャート** `~deployment-type:onprem-cng`

          顧客は独自の Kubernetes クラスター、独自の Redis、および独自の Postgres を提供します。
          Kubernetes 上の Gitaly サポートは未成熟ですが利用可能です。

          | Service Ping 属性            | 値                              |
          |------------------------------|---------------------------------|
          | `installation_type`          | `gitlab-cloud-native-image` or `gitlab-operator-2` |
          | `gitlab_dedicated`           | `false`                         |
          | `gitlab_environment_toolkit` | `false`                         |
          | 自律システム（ASN）          | 未認識                          |

## リソース

| 説明                     | 場所                |
|--------------------|---------------------|
| リリースドキュメント | [リンク](https://gitlab.com/gitlab-org/release/docs) |
| リリース関連タスクの Issue トラッカー | [リンク](https://gitlab.com/gitlab-org/release/tasks/) |
| デリバリーチームの Issue トラッカー | [リンク](https://gitlab.com/gitlab-com/gl-infra/delivery/issues) |
| リリースマネージャースケジュール | [リンク](/handbook/engineering/releases/release-managers/) |
| デプロイメントプロセス | [リンク](/handbook/engineering/deployments-and-releases/deployments/) |
| リリースプロセス | [リンク](/handbook/engineering/releases/) |
| メンテナンスポリシー | [リンク](https://docs.gitlab.com/ee/policy/maintenance.html) |
