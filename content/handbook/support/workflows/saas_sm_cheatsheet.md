---
title: SaaS / セルフマネージド / Dedicated トラブルシューティング表
category: Support Team
description: "GitLab の各プラットフォームタイプにおける、さまざまな問題のトラブルシューティングのヒント"
upstream_path: /handbook/support/workflows/saas_sm_cheatsheet/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
---

## 概要

このページの目的は、サポートエンジニアが任意の GitLab プラットフォーム上のさまざまな問題に対するトラブルシューティングのヒントを必要としたときに使用できる、単一の参照ポイントを提供することです。これにより、各サポートエンジニアが、関係する GitLab プラットフォームに関係なく、サポートチケットをより容易に解決できるようにすることを目指します。

## このページの使い方

ご自身の関心のあるトピックを見つけ、対象となる GitLab プラットフォーム（セルフマネージド、SaaS、または Dedicated）に該当するテーブル行内の指示に従ってください。

### ログとパフォーマンス

|      |       |
|:----:| ----- |
|セルフマネージド| [GitlabSOS](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos) は、潜在的な問題をさらに調査するためにお客様のインスタンスからすべてのログを収集する優れた手段です。<br/>GitLabSOS と同様に、お客様がソースまたは omnibus インストールではなく Kubernetes を利用している場合は [KubeSOS](https://gitlab.com/gitlab-com/support/toolbox/kubesos) を使用してください。<br/>[Fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) は GitLab ログから、また GitLab ログ間でパフォーマンス分析を比較する優れた手段です。<br/>[Green-hat](https://gitlab.com/gitlab-com/support/toolbox/greenhat) は実験的な SOS およびログパーサーです。[GitLab Log Analysis](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis): この実験的プロジェクトは、Kibana、Filebeat、Elasticsearch、Logstash を使って GitLab ログを分析するための環境を構築します。起動時にダッシュボードが自動でインポートされ、ログ分析の準備が整います。|
|DotCom|[Kibana](https://log.gprd.gitlab.net/) は Elasticsearch クラスターでインデックス化されたコンテンツの上に可視化機能を提供し、Web ベースのクエリで情報を見つけることができます。このツールでどのような情報が引き出せるかを理解するには、[ヒントとテクニック](/handbook/support/workflows/kibana/#tips-and-tricks)を確認してください。<br/>[Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/) は、たとえば Ruby コード関連のエラーなど、さまざまなアプリケーションまたは環境にまたがるエラーの調査に役立ちます。Sentry での検索は通常、Correlation ID を使用して行います。<br/>[Grafana](/handbook/engineering/monitoring/#main-monitoring-dashboards) は GitLab.com のインフラメトリクス収集に使用されています。|
|Dedicated|[GitLab Dedicated Logs](/handbook/support/workflows/dedicated_logs/) ワークフローには、Opensearch を使ってログを表示する方法に関する情報があります。[Observability and Monitoring](/handbook/support/workflows/dedicated_instance_health/) ワークフローには、Grafana を使ってパフォーマンスの問題を診断する方法に関する情報があります。|

### 構成

|      |       |
|:----:| ----- |
|セルフマネージド| お客様はセルフマネージドインスタンスの構成を自身で管理します。デプロイ方法に応じて、構成は `/etc/gitlab/gitlab.rb`、`docker-compose.yml`、`values.yaml` または同様のファイルにあります。|
|DotCom| [GitLab.com の構成](https://docs.gitlab.com/user/gitlab_com/)はインフラチームによって管理されており、個々のお客様のニーズに合わせて変更することはできません。|
|Dedicated|[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) のお客様は、[Switchboard](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/) および **Admin Area** を経由してテナントを構成できます。GitLab サポートチームのメンバーは、[こちらの手順](/handbook/support/workflows/dedicated_switchboard/#accessing-switchboard)に従って Okta 経由で [Switchboard](dedicated_switchboard.md) にアクセスできます。一部の[構成変更](/handbook/support/workflows/dedicated/#configuration-changes)は、[Request for Help Issue](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) を経由して行う必要があります。|

### アーキテクチャ

|      |       |
|:----:| ----- |
|セルフマネージド| お客様に推奨している[リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/)とそのさまざまなバリエーションをご確認ください。|
|DotCom| [GitLab.com のアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/#infra-current-archi-diagram)はインフラチームによって管理されており、個々のお客様のニーズに合わせて変更することはできません。|
|Dedicated|[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) は、[GitLab Dedicated Group](/handbook/engineering/infrastructure-platforms/gitlab-dedicated) によって AWS 上で管理されている、完全に分離されたシングルテナントの SaaS サービスです。GitLab Dedicated テナントは、高可用性を有効にした GitLab の[Cloud Native Hybrid リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/#cloud-native-hybrid)を[使用](https://docs.gitlab.com/subscriptions/gitlab_dedicated/data_residency_and_high_availability/#availability-and-scalability)しています。[リファレンスアーキテクチャからの変更点](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/architecture/Architecture/#changes-from-reference-architectures)の一覧をご確認ください。|

### 認証

|      |       |
|:----:| ----- |
|セルフマネージド| セルフマネージドの管理者は、希望する[認証プロバイダーを構成](https://docs.gitlab.com/administration/auth/)する必要があり、構成は gitlab.rb で直接行います。このファイルに対する設定変更は、変更を反映するために `gitlab-ctl reconfigure` の実行が必要です。|
|DotCom| お客様は **Group > Settings > SAML SSO** に移動して、[グループ向けの SAML SSO を直接構成](https://docs.gitlab.com/user/group/saml_sso/)できます。|
|Dedicated| SAML が[サポートされています](https://docs.gitlab.com/administration/dedicated/configure_instance/saml/)。調査は[ログを検索](/handbook/support/workflows/dedicated_logs)するところから始めてください。エスカレーションするには、[GitLab Dedicated チームに Issue を起票](/handbook/support/workflows/dedicated/#filing-issues)してください。|

### Geo

|      |       |
|:----:| ----- |
|セルフマネージド| Geo は [gitlab.rb 内で構成](https://docs.gitlab.com/administration/geo/setup/)します。Premium 以上のサブスクリプションが必要です。**手順は記載されている順序で実行する必要があります。**|
|DotCom| *Geo は `gitlab.com` 上ではお客様による構成は提供されていません。*|
|Dedicated| GitLab Geo は[いくつかの制約あり](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#operational-features)でサポートされています。[Dedicated チームに Issue を起票](/handbook/support/workflows/dedicated/#filing-issues)してください。|

### Admin Area

|      |       |
|:----:| ----- |
|セルフマネージド| セルフマネージドシステムの管理者は、自分のインスタンスの管理画面にアクセスできます。|
|DotCom| GitLab.com 上では、GitLab チームメンバーのみが管理タスクを行うことができ、お客様にはアクセス権が付与されません。|
|Dedicated| お客様には Admin Area にアクセスできるインスタンス管理者がいます。お客様向けの [GitLab Rails コンソール](https://docs.gitlab.com/administration/operations/rails_console/)アクセスはありません。|

参照には [Admin Area のドキュメント](https://docs.gitlab.com/administration/admin_area/#gitlab-admin-area)を使用してください。

### Gitaly

|      |       |
|:----:| ----- |
|セルフマネージド| [Gitaly](https://docs.gitlab.com/administration/gitaly/) の構成は **gitlab.rb** ファイルを通じて管理されます。お客様は git の要件を満たすために、スタンドアロンの [Gitaly](https://docs.gitlab.com/administration/gitaly/configure_gitaly/) を構成することも、[Gitaly Cluster](https://docs.gitlab.com/administration/gitaly/praefect/) を活用することもできます。トラブルシューティングを始める前に、セルフマネージドのお客様がどちらのタイプの Gitaly 構成を使用しているか必ず確認してください。|
|DotCom| Gitaly は GitLab のインフラチームによって管理されているため、お客様はアクセスできません。|
|Dedicated| Gitaly は Environment Automation SRE によって管理されています。必要に応じて [RFH を起票](/handbook/support/workflows/dedicated/#filing-issues)してください。|

### サブスクリプション

|      |       |
|:----:| ----- |
|Dedicated|GitLab Dedicated のお客様は **Ultimate** を[利用できます](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#application)が、[一部の機能は GitLab Dedicated では利用できない](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#unavailable-features)点にご注意ください。|
|DotCom| GitLab.com を利用される方向けの[利用可能なプラン](https://about.gitlab.com/pricing/)には、**Free**、**Premium**、**Ultimate** が含まれます。|
|セルフマネージド| セルフマネージドインスタンスの場合は、ライセンスなしで GitLab CE（Community Edition）または GitLab EE（Enterprise Edition）のいずれかを利用できます。GitLab EE は **Premium** または **Ultimate** ライセンスで[アクティベート](https://docs.gitlab.com/administration/license/)できます。|

[GitLab Duo アドオン](https://docs.gitlab.com/subscriptions/subscription-add-ons/)はサブスクリプションとは別に取り扱われる点にご注意ください。

### Runner

|      |       |
|:----:| ----- |
|セルフマネージド| セルフマネージド Runner はお客様が所有するインフラに[デプロイ](https://docs.gitlab.com/runner/install/index.html)され、セルフマネージドの GitLab インスタンスに[登録](https://docs.gitlab.com/runner/register/index.html)されます。|
|DotCom| [GitLab ホステッド Runner](https://docs.gitlab.com/ci/runners/) は GitLab.com に保存されているすべてのプロジェクトで利用できます。セルフマネージド Runner も GitLab.com に登録できます。|
|Dedicated| [GitLab ホステッド Runner（ベータ）](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#hosted-runners)は Dedicated のお客様向けにプロビジョニングできます。セルフマネージド Runner も Dedicated 環境に登録できます。|

### Rails コンソール

|      |       |
|:----:| ----- |
|セルフマネージド| Rails コンソールのコマンドは、Rails ノード上で[Rails コンソールを起動](https://docs.gitlab.com/administration/operations/rails_console/)することで実行できます。|
|DotCom| GitLab.com では、Rails コンソールへは[内部リクエスト](/handbook/support/workflows/internal_requests/#gitlabcom-console-escalation)を作成することでアクセスできます。|
|Dedicated| Dedicated では Rails コンソールは利用できません。緊急の事案については、[Dedicated チームへの Request for Help](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new) を作成してください。|

### 機能フラグ

|      |       |
|:----:| ----- |
|セルフマネージド| インスタンス管理者は [Rails コンソール経由で機能フラグを有効化](https://docs.gitlab.com/administration/feature_flags/)できます。|
|DotCom| GitLab.com 上では、一部の機能フラグは [chatops を経由して有効化](/handbook/support/workflows/saas_feature_flags/)できます。|
|Dedicated| GitLab Dedicated では、機能フラグがデフォルトで有効化されるまで利用できません。[GitLab Dedicated のお客様からの機能フラグリクエストの取り扱い](/handbook/support/workflows/dedicated/#feature-flags-are-not-supported)についての詳細をご確認ください。|
