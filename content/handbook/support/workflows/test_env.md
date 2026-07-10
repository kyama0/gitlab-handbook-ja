---
title: テスト環境
category: Infrastructure for troubleshooting
description: "サポートエンジニアのテスト環境のセットアップ選択肢とガイドライン"
upstream_path: /handbook/support/workflows/test_env/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T06:15:47+09:00"
translator: codex
stale: false
lastmod: "2026-07-09T08:13:40+02:00"
---

## 適切なテスト環境の選択

サポートエンジニアは、GitLab のサポート方法を学ぶため、また顧客の問題を再現するためにテスト環境を必要とします。

このページでは、利用可能な主な選択肢を説明します。いくつかのガイドライン:

1. 顧客の問題を再現できるよう、特定の GitLab バージョンを素早く立ち上げられる方法を選択すべきです。現在推奨される方法は [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) を使うことです。使用する各特定モジュールには、デプロイメントプロジェクトに独自の `README.md` があるので、それも必ず読んでください。
1. ローカルでのテストも推奨されます。Docker Engine / VM ベースのシステム（詳細は下記）を好みに合わせて構成すれば、特定の GitLab バージョンを素早く立ち上げられます。
1. 顧客の機能と一致させるためには、すべての self-managed ティアのライセンスが必要です。次のセクションを参照してください。
1. ほとんどのテストには、シングルボックスの Omnibus インストールで十分です。
1. より複雑な環境が必要な場合、以下のツールが役立ちます:
    - [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
    - ローカル（Virtualbox、VMWare、libvirt）VM 経由の [GitLab Support Setups](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-setups/-/blob/master/README.md)
1. K8s Helm インストールの場合、[GKE の使用を推奨します](#gcp-gke-kubernetes-cluster)。
1. 特定のクラウドプロバイダ環境（例: スケールされたアーキテクチャ）を再現する必要がある場合、下記の GCP、AWS、Azure のセクションを参照してください。
1. テスト環境のヒントやコツを共有するために [#spt_testing Slack チャンネル](https://gitlab.slack.com/archives/C0167JB9E02) への参加を検討してください。

楽しんでください！

## テスト環境のライセンス {#testing-environment-license}

テスト用にライセンスが必要な場合:

- **self-managed インスタンス** については、[チームメンバー向け self-managed / GDK での Premium/Ultimate 機能のアンロック](/handbook/support/internal-support/#unlock-premiumultimate-features-on-self-managed--gdk-for-team-members) を参照してください。
- **GitLab.com** については、ライセンスが事前に適用された個別のテスト namespace が、オンボーディングの一環としてプロビジョニングされています。

*顧客向けのライセンスは生成できません*。自分自身のテスト目的にのみ使用してください。

### AWS Marketplace のリソース

一部の AWS Marketplace リソースを使用する際、無料トライアル（GitLab Ultimate を含む）が自動的に更新される場合があります。常にテストライセンスの使用を優先すべきですが、テスト目的で何かをトライアルした場合は必ず [AWS Marketplace のサブスクリプションをキャンセル](https://aws.amazon.com/premiumsupport/knowledge-center/cancel-marketplace-subscription/) してください。

## GitLab.com でのテスト

[テスト環境のライセンス](#testing-environment-license) で記したように、オンボーディングの一環として GitLab.com でテストするためのライセンス付き namespace が提供されます。

これらのグループには `Owner` として追加され、顧客との協業のために特定のプロジェクトに顧客を招待することを含め、自由に変更を加えられます。

- namespace を public にすることは **避けてください**。
  - *代わりに*、テスト namespace 内、または顧客ケースに固有の namespace 内にサブグループまたはプロジェクトを作成し、コラボレーション招待のために十分な権限を割り当ててください。

- 顧客に永続的なアクセスを付与することは **避けてください**。
  - *代わりに*、顧客を招待する際にアクセスの有効期限を設定してください。

- メイン GitLab アカウントのアクセストークンを使用することは **避けてください**。テストプロジェクトでのリークが自動検出されない可能性があり、機密の会社 namespace を横断するために使われる恐れがあります。
  - *代わりに*、[Project Access Tokens](https://docs.gitlab.com/user/project/settings/project_access_tokens/) または [Group Access tokens](https://docs.gitlab.com/user/group/settings/group_access_tokens/) の使用を試してください。それ以外の場合は、テストアカウントを作成し、その個人アクセストークンを使用してください（その際、トークンの有効期限が最大2日以内になるように設定してください）。

テスト namespace には月400分の compute minutes があります。さらに必要な場合は、[ChatOps を使って compute minutes を追加](/handbook/support/workflows/chatops/#setting-minutes-quota-for-a-namespace) してください。

## クラウドテスト環境 {#cloud-testing-environments}

（一時的な）テスト環境を作成できます。それを行うのに [Sandbox Cloud Realm](/handbook/company/infrastructure-standards/realms/sandbox/)（[gitlabsandbox.cloud](https://gitlabsandbox.cloud)）の使用を推奨します。

役割を遂行するために必要なテスト環境は自由に作成できますが、注意点があります。

- クラウドリソースは無料ではありません。使用していないインスタンスは削除またはシャットダウンしてください。
- マルチノードリファレンスアーキテクチャは実行が *非常に* 高価なので、必要以上に長くアクティブにしないよう特に注意してください。
- インスタンスをパブリックインターネットに公開したり TLS なしで実行したりすべきではありません。既知の RCE やその他のエクスプロイトに脆弱なインスタンスは、自動スキャンで検出されると警告なしにシャットダウンされます。最初のインスタンスを作成する前に [クラウドテスト環境のセキュリティ確保](#securing-cloud-testing-environments) を確認してください。

### GCP

GCP のリソースは異なる [GCP プロジェクト](https://cloud.google.com/storage/docs/projects) に所属できます。リソースを作成するために利用可能な GCP プロジェクトが多数あります。

#### GCP 用 GitLab Sandbox Cloud（推奨）

テスト環境作成に柔軟性が必要な場合、[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) で個人所有の GCP プロジェクトを作成できます。[GCP コンソール](https://console.cloud.google.com/home/dashboard) または [gcloud コマンドラインツール](https://cloud.google.com/sdk/gcloud) を使用してテストリソースを作成できます。[リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/) のいずれかを再現する必要がある場合、[GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) の使用を推奨します。

**注:** 使用しなくなったリソースはシャットダウンするのを忘れないでください。
週末にリソースをシャットダウンする [自動化スクリプト](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/instance-ttl-automation) を使用しています。リソースをシャットダウン対象から除外するには、リソースに `instance-ttl-bot-ignore` ラベルを追加する必要があります。

##### GCP リソースを自動的に管理する

[Terraform Environments](/handbook/company/infrastructure-standards/realms/sandbox/#terraform-environments) を使って、個人所有の GCP プロジェクトの GCP リソースを自動的に管理できます。runner 付きのシンプルな Omnibus マシンが目的の場合、`support-resources-template-v2-########` テンプレートを選択してください。利用可能な他の [プロジェクトテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates) も自由に試して、[GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) をデプロイしたり、Helm chart 経由で GitLab がすでにインストールされた GKE クラスターを作成したりできます。

これらの環境は一時的なものです。

詳しいウォークスルーは [このデモ動画](https://www.youtube.com/watch?v=aBF-AyQiFfA) を確認してください。

#### その他の GCP プロジェクト

**警告:** `gitlab-internal` および `gitlab-support` GCP プロジェクトへのアクセス権を持っている場合があります。これらのプロジェクトでリソースを作成する代わりに、[GitLab Sandbox Cloud](#cloud-testing-environments) を使用すべきです。

**注:** 使用しなくなったリソースはシャットダウンまたは削除するのを忘れないでください。

#### GCP GKE Kubernetes クラスター {#gcp-gke-kubernetes-cluster}

GCP Kubernetes (GKE) クラスターを作成するには、[GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) GCP プロジェクトを使用してください。コンソールから手動で GKE クラスターを作成するか、[GitLab Sandbox アカウント](https://gitlabsandbox.cloud/cloud) から [Support GKE cluster template](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-gke-cluster-template)（空の GKE クラスターの場合）または [Support GitLab GKE cluster template](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-gitlab-gke-template)（GitLab Helm デプロイメント付きの GKE クラスター）を使用できます。GitLab Sandbox で terraform を使用してリソースを起動する詳細については [こちら](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-create-a-terraform-environment) をクリックしてください。

**注:** GitLab Runner のテストに GKE を使用する場合、GitLab Runner は [GCP の RBAC ロール](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control) の使用を必要とします。`support-resources` GCP プロジェクトでは必要なロールを作成するための十分な権限がユーザーに付与されませんが、個人の [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) GCP プロジェクトでなら可能です。

<details>
<summary>自分のプロジェクトで GKE を手動で作成する手順を見るにはここを開いてください。</summary>
<div markdown="1">

1. [GCC](https://console.cloud.google.com) の上部で自分のプロジェクトを選択していることを確認します。
1. [GCP](https://console.cloud.google.com) の上部のナビゲーションメニューを開きます。
1. ダッシュボードから **Kubernetes Engine > Create Cluster** を選択します。
1. 名前を入力し、ゾーンを選択し、代替バージョンを使用する特別な理由がない限りデフォルトの static master バージョンを選択します。[kubectl クライアントバージョンに合致する](https://kubernetes.io/docs/tasks/tools/#before-you-begin) サーバーバージョンを使用することが重要です。

カスタマイズをクラスターに追加する必要がない限り、残りのオプションはすべてデフォルト設定のままにできます。注目すべきは、Maximum Pods per Node オプションがノードの [CIDR 割り当てに直接対応する](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr?_ga=2.246280516.-1734733517.1581009580) ことです。

クラスターへの接続および設定は、[gcloud](https://cloud.google.com/sdk/docs#install_the_latest_cloud_tools_version_cloudsdk_current_version) と [kubectl](https://kubernetes.io/docs/tasks/tools/#download-as-part-of-the-google-cloud-sdk) を使用してローカルで行えます。または Google Cloud Shell を使用できます。GCP で Connect をクリックすると、ローカルで実行するコマンドを提供してくれてコピー＆ペーストできるか、すぐに Cloud Shell を開けます。すべてのツールをローカルで素早くデプロイする選択肢として [docker images](https://hub.docker.com/r/kiwigrid/gcloud-kubectl-helm) を使うこともできます。
</div>
</details>

### AWS テスト環境

AWS の認証情報を作成するには、[Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) を使用してください。

#### Helm を使った EKS テスト環境

<details>
<summary>EKS と Helm でデプロイメントを素早く作成する手順を見るにはここを開いてください</summary>
<div markdown="1">

以下のガイドは、テスト目的でこの環境上で EKS と Helm を使用して Kubernetes 環境を素早くデプロイするのに役立ちます。

前提条件:

- ドメイン名
- [GitLab Sandbox Cloud](https://gitlabsandbox.cloud) アカウント

ローカルコンピュータに以下のプログラムをインストールします:

- [Helm v3 (3.3.1 以上)](https://helm.sh/docs/intro/install/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Certbot](https://certbot.eff.org/instructions?ws=other&os=osx)（OSX 以外の OS を使用している場合は、特定の OS を確認してください。）

OS X の場合、以下を実行することで上記すべてのプログラムをインストールできます:

```shell
brew install certbot helm kubectl
```

##### AWS IAM アクセスキーの取得

1. [Sandbox Cloud](https://gitlabsandbox.cloud/) にログインします。
1. Sandbox Cloud で AWS 個別アカウントにログインします。
1. [IAM アクセスキーを作成](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html) します。

キーが正常に作成されると、**Access key ID** と **Secret key** が取得できます。

##### AWS IAM アクセスキーをローカルで設定

ターミナルで AWS CLI を IAM アクセスキーを使用するように設定します:

1. `aws configure` と入力します
1. プロンプトで **Access key ID** と **Secret key** を入力します
1. 任意でリージョンを設定します
1. [出力フォーマット](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output-format.html) を選択します（これは AWS CLI がデータを出力する際に使用するフォーマットを制御します。オプションには `json`、`yaml`、`text` が含まれます。）

##### EKS セットアップ

[bootstrap スクリプト](https://gitlab.com/gitlab-org/charts/gitlab) は、Cloud Formation を使ったより簡単で自動化されたクラスター作成をセットアップするために作成されています。
このプロジェクトをローカルにクローンし、`gitlab/scripts` に移動して `./eks_bootstrap_script up` を実行します。このスクリプトは CloudFormation スタックを使ってクラスターに必要なすべてのリソースをデプロイするので、完了までに時間がかかります。完了が成功すると、次のような出力が表示されます:

**注:** Kubernetes クラスターのバージョンが `>= 1.23` の場合、クラスターに GitLab をデプロイする **前に** `./eks_bootstrap_script add_ebs_csi_driver` を実行する必要があります。

```shell
2022-07-18 16:47:40 [ℹ]  node "ip-192-168-63-211.us-east-2.compute.internal" is ready
2022-07-18 16:47:41 [ℹ]  kubectl command should work with "/Users/cats/.kube/config", try 'kubectl get nodes'
2022-07-18 16:47:41 [✔]  EKS cluster "gitlab-cluster" in "us-east-2" region is ready
```

クラスターの準備ができたら、Certbot を使用してドメインの証明書を作成します:

```shell
sudo certbot --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns-01 certonly -d "*.<DOMAIN NAME>"
```

Certbot は、ドメインに有効な HTTPS 証明書を持たせるために、DNS レジストラに追加する必要がある TXT DNS レコードを作成します。GitLab インスタンスで使用できるようになります。

レコードがレジストラに追加された後、クラスターで証明書を使用するためのシークレットを作成します:

```shell
sudo kubectl create secret tls tls-star-<SECRET NAME> --cert=/etc/letsencrypt/live/<DOMAIN NAME>/fullchain.pem --key=/etc/letsencrypt/live/<DOMAIN NAME>/privkey.pem
```

（オプション）クラスターに GitLab Pages を持たせたい場合、ドメイン用に別の証明書とクラスター用に別のシークレットを作成する必要があります

```shell
sudo certbot --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns-01 certonly -d "*.pages.<DOMAIN NAME>"
```

```shell
sudo kubectl create secret tls tls-star-pages-<SECRET NAME> --cert=/etc/letsencrypt/live/pages.<DOMAIN NAME>/fullchain.pem --key=/etc/letsencrypt/live/pages.<DOMAIN NAME>/privkey.pem
```

##### Helm セットアップとチャートデプロイ

- GitLab リポジトリチャートを Helm 環境に追加します

```shell
helm repo add gitlab https://charts.gitlab.io/
```

- リポジトリを最新バージョンに更新します

```shell
helm repo update
```

- インスタンスをデプロイしたい希望の値で `values.yml` ファイルを作成します。（サンプルファイルは [こちら](https://gitlab.com/-/snippets/2402111) にあります）
- 以下を使用して GitLab をデプロイします

```shell
helm install gitlab gitlab/gitlab -f <values.yml>
```

- GitLab デプロイメントのロードバランサーホスト名を取得するには次を実行します

```shell
kubectl get ingress/gitlab-webservice-default -ojsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

- HTTPS でインスタンスにアクセスするために、`gitlab` という名前の CNAME レコードを作成し、ロードバランサーホスト名を指すようにします。
- （オプション）GitLab Pages を設定したい場合、`*.pages` を使用する別の CNAME レコードを作成し、同じロードバランサーホスト名を指すようにします。
- 以下を実行して初期 root パスワードを取得します

```shell
kubectl get secret gitlab-gitlab-initial-root-password -ojsonpath='{.data.password}' | base64 --decode ; echo
```

:tada: GitLab インスタンスが起動して動作しています！

これらのステップが完了したら、`gitlab.<DOMAIN NAME>` を使用して GitLab インスタンスにアクセスできます。

##### 環境の破棄と再作成

- EKS インスタンスの使用が終わったら、`./eks_bootstrap_script down` を実行して使用したすべてのリソースを破棄します。
- 新しいクラスターを作成するときは、以下を実行する必要があります:

1. `./eks_bootstrap_script up`。
1. 以前と同じように Kubernetes シークレットを作成します。
1. Helm chart をデプロイします。
1. レジストラで CNAME を新しいロードバランサーで更新します。

**注**: レジストラでロードバランサーを更新した後、インスタンスにアクセスする前に TTL がリセットされるのを待つ必要があるかもしれません。

</div>
</details>

### ROSA を使った OpenShift テスト環境

GitLab および GitLab Runner Operator を実行する OpenShift クラスターを作成するための1つの選択肢として、[Red Hat OpenShift Service on AWS (ROSA)](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws) を使用できます。

インストールはあなたのラップトップから `rosa` ユーティリティを使用して実行されます。これはクラスター設定の詳細を収集し、AWS で OpenShift クラスターのスクリプトされたデプロイメントを実行します。インストールは通常 30〜45 分かかります。

主なステップは以下のとおりです:

前提条件:

1. AWS サンドボックスアカウントにアクセスするために、`AWS_REGION`、`AWS_ACCESS_KEY_ID`、`AWS_SECRET_ACCESS_KEY` 環境変数を設定して、ローカルの AWS コマンドラインアクセスをラップトップで構成します。
1. AWS ROSA 前提条件を満たします - AWS コンソールで `Red Hat OpenShift Service on AWS` サービスを検索し、**Get started** をクリックして、ROSA が有効化され、Service Quotas と ELB service-linked role の要件が満たされていることを確認します。
1. 個人の Red Hat アカウント - https://www.redhat.com/wapps/ugc/register.html で新しい個人アカウントを登録します。

クラスターセットアップ:

1. https://console.redhat.com/openshift/create/rosa/getstarted を開きます。
1. Red Hat アカウントでログインします。これによって Hybrid Cloud Console に移動します。
1. ローカル OS 用の ROSA CLI ツールをダウンロードしてインストールします（ステップ1）。
1. Red Hat アカウントトークンで ROSA CLI にログインし、セットアップページの説明（ステップ2）に従って AWS アカウントロールおよびポリシーを作成します。
1. ラップトップから `rosa create cluster` を実行してインストールを開始します。多くの設定を求められます - 以下を除いて、提示されるデフォルトをすべて受け入れてください:

   - `Cluster name` - クラスター名を選択
   - `Create cluster admin user` - Yes を選択
   - `Openshift version` - 希望する OpenShift バージョンを入力
   - `AWS region` - 希望する AWS リージョンを入力

1. インストールプロセスが開始され、`operator-roles` および `oidc-provider` を作成するためのコマンドを実行するよう促すメッセージが表示されます。これらをすぐに実行する必要があります。さもなければインストールは無期限に一時停止します。
   プロンプトが表示されたらデフォルトオプションを受け入れます。
1. セットアップステップ中に表示された admin ユーザー名とパスワードを記録します。
1. インストールの進行状況とインストールログは、Hybrid Cloud Console の **Cluster List** ページから監視できます。サービスがプロビジョニングされている間に複数の接続エラーがログに記録されますが、これらは想定通りです。
1. クラスターがインストール中に、必要に応じてクラスターステータスページで提供されるリンクから OpenShift CLI ツール (`oc`) をダウンロードできます。

#### OpenShift クラスターへのログイン

クラスターステータスが `ready` になったら、Hybrid Cloud Console から **Cluster List** でクラスターを選択し、**Open Console** ボタンをクリックすることで、クラスターコンソールにログインできます。

ただし、デフォルトの ID プロバイダおよび TLS 証明書のセットアップが完了し、`cluster-admin` ID プロバイダボタンがログインページに最初に表示されるまで、さらに 5〜10 分待つ必要があります。ユーザー名とパスワードフィールドのみが表示されている場合は、もう数分待ってから、コンソールログインページにブラウズし直してみてください。

`cluster-admin` ボタンが表示されたらクリックすると、先に記録した admin ユーザーとパスワードを求められます。これでクラスターにログインしています。

#### コマンドラインから OpenShift クラスターにアクセス

コマンドラインからクラスターにアクセスするには、`oc` コマンドを使用してまずログインする必要があります。クラスターコンソールから、右上の **cluster-admin** ドロップダウンをクリックし、**Copy login command** をクリックします。クラスター admin として再度ログインを求められ、その後 **Display token** リンクが表示されます。リンクをクリックして、表示される `oc login` コマンドをコピーします。

提供されたトークンでラップトップで `oc login` コマンドを実行します - その後 `oc get pods -A` などの他のコマンドを実行できるはずです。

#### クラスターの破棄

ROSA クラスターは実行に費用がかかるので、AWS のコストを削減するために、不要になった OpenShift クラスターはできるだけ早く破棄すべきです（数日後に新しいクラスターを作成することになっても）。これはコマンドラインから `rosa delete cluster --cluster=mycluster` を実行することで行います。

### Azure テスト環境

*Group* SAML/SCIM (GitLab.com) のテストでは、共有アカウントの認証情報が 1password エントリ `Azure Active Directory Sandbox (SAML Testing)` 内にあります。このアクセスレベルは、ほとんどのテストケースで十分です。

AKS や類似機能のテストのために共有インフラチームの Azure アカウントへのアクセスが必要な場合、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成して、マネージャーをタグ付けしてください。

いずれのインスタンスでも利用できない機能については、独自に Azure のトライアルを作成してください。

### Okta テスト環境

SAML および SCIM をテストするために Okta サンドボックス環境が必要な場合、<https://developer.okta.com/signup/> にアクセスし、認証情報を入力して、すべてのテストを実行できる無料の開発者インスタンスを取得してください。これはフル機能の環境なので、アプリケーションの追加と削除、通常の本番インスタンスにいる場合と同様にすべてのテストを実行できるはずです。

### Google Workspace テスト環境

IT チームは Support チームが使用できる Google Workspace のテスト環境を持っています。1つの admin と1つの user アカウントの認証情報は 1password で次のように見つけられます:

- Google Workspace Admin Test Account
- Google Workspace User Test Account

ユーザーテストアカウントをさらに作成する必要がある場合、後で削除してください。テスト環境にはシート制限があります。

アプリを作成するときは、アプリ名にあなたの名前またはチケット番号を含めてください。すべてのアプリは一時的なものとみなされ、作成から2週間後に削除される可能性があることに注意してください。

### LDAP テスト環境

self-managed GitLab インスタンスとの LDAP 統合のテストでは、これらの選択肢を検討できます:

1. [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/ldap.md)。
1. [Docker コンテナ](https://github.com/osixia/docker-openldap)。
1. [Jumpcloud](https://jumpcloud.com/)（最大10ユーザーまで無料）。

### Keycloak テスト環境

[GitLab.com グループ用の SAML SSO](https://docs.gitlab.com/user/group/saml_sso/) の学習・トラブルシュート時にテスト用 Keycloak インスタンスのセットアップが役立つ場合があります。デプロイするには、[Deploying a test instance of Keycloak](keycloak-test-server.md) に従ってください。

### テストインスタンス用 DNS

[ドメイン名と DNS レコード](https://internal.gitlab.com/handbook/security/product_security/infrastructure_security/guides/domains-dns/)に関する InfraSec ポリシーについては、ハンドブックを参照してください。

手順とガイドラインは、[商標を含まないドメイン名の手順](https://internal.gitlab.com/handbook/security/product_security/infrastructure_security/guides/domains-dns/#non-trademark-domain-names)にあります。

## クラウドテスト環境のセキュリティ確保 {#securing-cloud-testing-environments}

テストインスタンスはデフォルトでインターネット上で公開アクセス可能です。多くの場合、リモート侵害に対して脆弱な特定のバージョンや構成をテストする必要があります。テストインスタンスを保護し、それが侵害されてクラウド環境への攻撃に使われないようにする責任はあなたにあります。

[GitLab Red Team](/handbook/engineering/security/threat-management/red-team/) は、既知の脆弱性を持つ公開アクセス可能なインスタンスについて、GitLab のクラウド環境を定期的にスキャンしています。既知の RCE やその他のエクスプロイトに脆弱なインスタンスは、自動スキャンで検出されると警告なしにシャットダウンされます。

### IP フィルタリング

クラウドインスタンスを保護する非常に効果的な方法は、作成する各テストインスタンス（GitLab インスタンスかどうかに関わらず）に [IP フィルタリングの概念](https://www.oreilly.com/library/view/linux-network-administrators/1565924002/ch09s03.html) を適用することです。ほとんどの場合、これは1つ以上の [CIDR ブロック範囲](https://whatismyipaddress.com/cidr) からのソース IP フィルタリングを意味し、特定の IP と統合のみが GitLab インスタンスとやり取りできるようにします。これにより GitLab 組織全体としての攻撃面が削減されます。

ソース IP フィルタリングに使用する現在の IP アドレスがわからない場合、[whatsmyipaddress.com](https://whatismyipaddress.com/) や [ipinfo.io](https://ipinfo.io/) のようなサービスを利用して取得できます。IP フィルタリングの設定は現在、各クラウドサービスごとに手動プロセスですが、執筆時点で、複雑さと、場合によっては必要となる手動プロセスを減らすために、このプラクティスを自動化する最善の方法について [議論が進行中](https://gitlab.com/gitlab-com/business-technology/engineering/tools/hackystack/-/issues/134) です。IP フィルタリングを実装するステップは、クラウド環境ごとに異なります。以下に、サポートエンジニアリングチームが管理する詳細なガイドがあります。

- [IP フィルタリング実装に関するサポートエンジニアリング ステップバイステップガイド](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/content/ip%20filtering/ip_filtering_test_instances.md)

加えて、IP フィルタリング実装に関わる機能の公式プラットフォーム別ドキュメントを参照できます:

- [Google Cloud](https://cloud.google.com/vpc/docs/using-firewalls#creating_firewall_rules#console)
- [Amazon Web Services (AWS)](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)
- [Azure](https://learn.microsoft.com/en-us/training/modules/introduction-azure-web-application-firewall/)

### TLS

[GitLab の暗号化ポリシー](/handbook/security/product-security/vulnerability-management/encryption-policy) に沿うために、公開向けのテストリソースには TLS も実装すべきです。

特に GitLab インスタンスについては、[Omnibus インストールで LetsEncrypt を手動で有効化する](https://docs.gitlab.com/omnibus/settings/ssl/) ことを推奨します。まず、クラウドプラットフォームに関係なく、外部 IP に割り当てられたドメインが必要です。Omnibus インストールで LetsEncrypt を有効化する方法は上記リンクで詳しく説明されています。

#### 自己署名証明書

ログインページを含む任意のテストインスタンスでの TLS 実装は、希望する場合は自己署名証明書で行えます。自己署名証明書は無料で、テスト環境に適しており、有料証明書と同じ暗号化方式で ingress と egress トラフィックを暗号化します。欠点は、自己署名証明書はどのブラウザや OS にも信頼されないため、自己署名（信頼されない）証明書を使用するサイトにアクセスするユーザーにリスクを警告することです。TLS 実装に依存すべき外部の関係者がインスタンスにアクセスする場合、正規の認証局からの署名証明書を含めるのがベストです。

自己署名証明書は [`mkcert`](https://github.com/FiloSottile/mkcert) のようなツールで生成できます。`mkcert` がインストールされたら、このコマンドを使用して `gitlab.example.com` 用の証明書ファイルとキーファイルを生成できます:

```sh
mkcert gitlab.example.om
```

コマンドの出力で、生成されるファイル名を知らせます:

>```sh
> The certificate is at "./gitlab.example.com.pem" and the key at "./gitlab.example.com-key.pem" ✅
>```

テストインスタンスで自己署名証明書を使用する手順については、[Configure HTTPS manually](https://docs.gitlab.com/omnibus/settings/ssl/index.html#configure-https-manually) に関する GitLab ドキュメントと、これらのクラウドサービスプロバイダから利用可能なドキュメントを確認してください:

- [Google Cloud](https://cloud.google.com/load-balancing/docs/ssl-certificates/self-managed-certs)
- [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html)
- [Azure](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-self-signed-certificate)

### 既知の脆弱性へのパッチ適用

既知の脆弱性を持つ Support テストインスタンスを実行することは、セキュリティ問題になる可能性があります。テストインスタンスを実行するときは、可能であれば既知の脆弱性にパッチを適用すべきです。

たとえば、GitLab バージョン 11.9 から 13.10.2 は [CVE-2021-22205](https://about.gitlab.com/releases/2021/04/14/security-release-gitlab-13-10-3-released/#Remote-code-execution-when-uploading-specially-crafted-image-files) に対して脆弱です。

GitLab バージョン 12.6 から 13.10.2 を実行している場合、各インスタンスで以下のコマンドを実行することでこの脆弱性にパッチを適用できます:

```sh
sudo su
cd ~
curl -JLO https://gitlab.com/gitlab-org/build/CNG/-/raw/master/gitlab-ruby/patches/allow-only-tiff-jpeg-exif-strip.patch
cd /opt/gitlab/embedded/lib/exiftool-perl
patch -p2 < ~/allow-only-tiff-jpeg-exif-strip.patch
```

GitLab バージョン 11.9.0 から 12.5.x の場合、以下のコマンドで `exiftool` バイナリを置き換えることで脆弱性に「パッチ」を当てられます:

```sh
sudo rm -f /opt/gitlab/embedded/bin/exiftool
sudo printf '#!/bin/bash \n\ncat -' > /opt/gitlab/embedded/bin/exiftool
sudo chmod a+x /opt/gitlab/embedded/bin/exiftool
```

## ローカルテスト環境

### Docker

[Docker Desktop for Mac](https://www.docker.com/get-started/) を使用したい場合、業務利用にはサブスクリプションが必要です。ライセンス取得方法に関する詳しい情報および推奨される代替手段の一覧については、[Docker Desktop ハンドブックページ](/handbook/tools-and-tips/mac/#docker-desktop) を確認してください。

その間、Docker 環境のテストには [Linux Engine](https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux) を使用したクラウドまたはローカル VM の使用を検討してください。

なお、M1 / Apple Silicon の Mac では、現在 Docker での GitLab の実行が正常に動作しません。M1 Mac でのローカルセットアップの代替として、下の [UTM](#utm-apple-m1-compatible) を確認してください。

### Docker Machine

Docker Toolbox は非推奨になったため、Docker Machine は手動でダウンロード・インストールする必要があります。Docker Machine を別途インストールまたはアップグレードするには、以下のコマンドを使用します:

```sh
$ curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-`uname -s`-`uname -m` >/usr/local/bin/docker-machine && \
  chmod +x /usr/local/bin/docker-machine
```

### VMWare

このガイドは、VMWare と Docker をローカルに設定およびセットアップすることを含み、macOS を使用していると仮定しています。

#### VMWare のインストール（有料）

1. [VMWare ストア](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion) に移動して、**VMWare Fusion 10 (for macOS)**（または現行バージョン）を購入します。
1. 提供されるリンクで **VMWare Fusion 10 (for macOS)** をダウンロードします。
1. VMWare Fusion 10 をインストールします。
1. VMWare Fusion を起動します。
1. プロンプトが表示されたらライセンスの詳細を入力します。

### UTM (Apple M1 互換) {#utm-apple-m1-compatible}

UTM は MacOS 用のオープンソース QEMU ベースの仮想化ソフトウェアです。現在 Apple silicon ハードウェアのサポートを提供しているため、Apple M1 デバイスのエンジニアがローカル仮想マシンをデプロイするのに役立つ可能性があります。

#### UTM のインストール

1. [UTM ホームページ](https://mac.getutm.app/) に移動して 'Download' を選択します。
1. インストールしたら、[ARM ベースの Ubuntu インストール手順](https://mac.getutm.app/gallery/ubuntu-20-04) に従います。
1. UTM インターフェース内で VM を起動します。

### VirtualBox（Apple M1 と非互換）

このガイドは、VirtualBox と Docker をローカルで設定およびセットアップすることを含み、macOS を使用していると仮定しています。*VirtualBox は現在 Apple M1 CPU をサポートしていません。*

#### VirtualBox のインストール

Oracle VM VirtualBox は、x86 仮想化のための無料かつオープンソースのホスト型ハイパーバイザーです。

1. [VirtualBox](https://www.virtualbox.org/wiki/Downloads) に移動します。
1. お使いの OS 用の最新バージョンのソフトウェアをダウンロードします。
1. VirtualBox をインストールします。

**注** 以下のコマンドリストは、新しいインスタンスを素早く起動するための bash スクリプトとして保存できます。

### Vagrant

#### Vagrant のインストール

[Vagrant 入門](https://developer.hashicorp.com/vagrant/intro) より

> Vagrant は、単一のワークフローで仮想マシン環境を構築および管理するためのツールです

Vagrant は、ローカル VM アプリ VMWare および Virtual を [libvirt](https://libvirt.org/) と共にカプセル化します。

Vagrant をインストールするには、[tutorials/vagrant/getting-started-install](https://developer.hashicorp.com/vagrant/tutorials/getting-started/getting-started-install) に移動します。

インストール後、[support/toolbox](https://gitlab.com/gitlab-com/support/toolbox) には、ローカル GitLab とツールセットアップのために探索できる2つのプロジェクトがあります。

- [GitLab Support Toolkit](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-toolkit)

> GitLab inventory を管理し、docker コンテナ経由で追加のサービスを管理するためのサポートツールキット。

- [GitLab Support Setups](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-setups)

> 連携した GitLab Runner を含むさまざまなサポートセットアップに対し、共通のプロビジョニングおよびディレクトリ構造を提供する。

### Multipass

#### multipass のインストール

Multipass は、Linux、macOS、Windows でクラウドスタイルの Ubuntu VM を素早く生成するためのツールです。この方法は Vagrant に似ています。

[brew でインストール](https://canonical.com/multipass/docs/install-multipass) するか [パッケージインストーラ](https://canonical.com/multipass/docs/install-multipass) でインストールできます。

注: 古い OS の Mac ユーザーは、MacOS のファイアウォールが Multipass の一貫した機能を妨げる [長年のバグ](https://github.com/canonical/multipass/issues/2387) に遭遇する可能性があります。MacOS 15 以降ではこの問題はもうないはずです。

インストール後、`multipass help` を使用してできることのアイデアを得てください。一般的な形式は `multipass <command> <name>` です。

multipass を使用するソリューションについては [GitLab-in-a-VM](https://gitlab.com/gitlab-com/support/toolbox/gitlab-in-a-vm) を参照してください。VM のセットアップや、GitLab runner と GitLab インスタンス自体の間でインスタンスが信頼されるようにすることに関する多くのことを自動化します。

#### 例

##### Omnibus

1. multipass をダウンロードしてインストールしていることを確認します。
1. `~/mp_mount`（または好みのマウントディレクトリ）内に、以下の内容で `install-omnibus.sh` というスクリプトを作成します:

   ```bash
   #!/bin/bash

   echo "Starting script..."
   sudo apt-get update
   sudo apt-get install -y curl openssh-server ca-certificates
   curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
   export GITLAB_ROOT_PASSWORD="your_root_password"
   export EXTERNAL_URL="$(hostname -I | awk '{print $1}')"
   echo $EXTERNAL_URL
   echo "Please enter the GitLab version (ex. 15.1.1-ee.0):"
   read GL_VERSION
   apt install -y "gitlab-ee=$GL_VERSION"
   ```

   ***注意:*** 上記のパスワードエントリ "your_root_password" を、単語やフレーズの組み合わせではない英数字パスワードに置き換える必要があります。さもなければ「Password must not contain commonly used combinations of words and letters」というエラーメッセージに遭遇します。

1. 以下のワンライナーを実行します。メモリやディスクを増減したい場合、適切な値で置き換えてください。このコマンドの詳細については `multipass help launch` を使用できます。

   ```bash
   multipass launch --cpus 4 --memory 8G --disk 10G --name gitlab-omnibus && multipass mount ~/mp_mount/ gitlab-omnibus:/mp_mount && multipass exec gitlab-omnibus -- sh -c 'sudo sh /mp_mount/install-omnibus.sh'
   ```

1. 完了です！ `multipass shell gitlab-omnibus` を使用してインスタンスにアクセスします。さらに:
    - `multipass list` または `multipass ls` ですべてのインスタンスを確認
    - `multipass stop gitlab-omnibus` でインスタンスを停止
    - `multipass delete gitlab-omnibus` でインスタンスを削除
    - [duti を使用](https://canonical.com/multipass/docs/changing-terminal) してデフォルトの `open shell` メニュー項目を変更

##### GitLab Runner

1. `~/mp_mount`（または好みのマウントディレクトリ）内に、以下の内容で `install-runner.sh` という実行可能スクリプトを作成します:

    ```bash
    #!/bin/bash

    echo "Starting script..."
    sudo apt-get update
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
    apt-get install -y gitlab-runner
    ```

1. 新しいインスタンスを作成します:

   ```bash
   multipass launch --cpus 2 --memory 4G --disk 5G --name gitlab-runner && multipass mount ~/mp_mount/ gitlab-runner:/mp_mount && multipass exec gitlab-runner -- sh -c 'sudo sh /mp_mount/install-runner.sh'
   ```

1. `multipass shell gitlab-runner` を使用してインスタンスにアクセスします。

##### Elasticsearch インスタンス

1. `~/mp_mount`（または好みのマウントディレクトリ）内に、以下の内容で `install-es.sh` というスクリプトを作成します:

    ```bash
   #!/bin/bash

   wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
   sudo apt-get install apt-transport-https
   echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-9.x.list
   sudo apt-get update && sudo apt-get install elasticsearch

   sudo /bin/systemctl daemon-reload
   sudo /bin/systemctl enable elasticsearch.service

   # Configure with security disabled (DEVELOPMENT ONLY)
   sudo tee /etc/elasticsearch/elasticsearch.yml > /dev/null <<EOF
   path.data: /var/lib/elasticsearch
   path.logs: /var/log/elasticsearch
   network.host: $(hostname -I | awk '{print $1}')
   http.port: 9200
   discovery.seed_hosts: ["$(hostname -I | awk '{print $1}')"]
   cluster.initial_master_nodes: ["$(hostname -I | awk '{print $1}')"]

   # Disable security (NOT for production!)
   xpack.security.enabled: false
   xpack.security.enrollment.enabled: false
   xpack.security.http.ssl.enabled: false
   xpack.security.transport.ssl.enabled: false
   EOF

   sudo systemctl start elasticsearch.service
    ```

1. 新しいインスタンスを作成します:

    ```bash
    multipass launch --cpus 2 --memory 4G --disk 5G --name gitlab-es && multipass mount ~/mp_mount/ gitlab-es:/mp_mount && multipass exec gitlab-es -- sh -c 'sudo sh /mp_mount/install-es.sh'
    ```

1. `multipass shell gitlab-es` を使用してインスタンスにアクセスします。`multipass ls` を使って IP アドレスを取得し、ブラウザのポート `:9200` で接続することで動作を確認できます。または、GitLab Omnibus インスタンスから `curl ip_address:9200` を実行して、Elasticsearch インスタンスに到達できることを確認できます。

## GitLab テストインスタンスの作成

### 設定変数の作成

```sh
export SSH_PORT=2222
export HTTP_PORT=8888
export VERSION=11.9.9-ee.0
export ENV_NAME=gitlab-test-env
export CONTAINER_NAME=gitlab-test-11.9
```

### 新しい docker host の作成

このコマンドは、docker host として動作する `gitlab-test-env` という新しい VirtualBox 仮想マシンを作成します。

- CPU 数: ホストと同じ (`-1`)
- RAM: `4GB`
- 名前: `gitlab-test-env`
- ドライバ: `virtualbox`

```sh
docker-machine create \
--virtualbox-cpu-count -1 \
--virtualbox-memory 4096 \
--virtualbox-disk-size 30000 \
--driver virtualbox $ENV_NAME
```

- リソース: [https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/drivers/virtualbox/](https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/drivers/virtualbox/)

### docker machine での GitLab テストインスタンスの作成

#### 新しいマシンにシェルを接続

この例では GitLab EE 11.9.9 インスタンスを作成します。

まず、先に作成した docker host に docker クライアントを接続します。

```sh
eval "$(docker-machine env gitlab-test-env)"
```

これを `~/.bash_profile` ファイルに追加して、`docker` クライアントが `gitlab-test-env` docker host を使用するようにできます。`echo` を使用してそれを行えます:

```sh
echo 'eval "$(docker-machine env gitlab-test-env)"' >> ~/.bash_profile
```

#### GitLab の利用可能なタグを取得

URL の `ee` を `ce` に置き換えるのは任意です。

```sh
wget -q https://registry.hub.docker.com/v1/repositories/gitlab/gitlab-ee/tags -O - | sed -e 's/[][]//g' -e 's/"//g' -e 's/ //g' | tr '}' '\n' | awk -F: '{print $3}'
```

#### 新しい GitLab コンテナの作成

- HTTP ポート: `8888`
- SSH ポート: `2222`
  - `--env GITLAB_OMNIBUS_CONFIG` を使用して `gitlab_shell_ssh_port` を設定
- ホスト名: docker host の IP
- コンテナ名: `gitlab-test-11.9`
- GitLab バージョン: **EE** `11.9.9-ee.0`

<!-- #####  Set up container settings

```sh
export SSH_PORT=2222
export HTTP_PORT=8888
export VERSION=11.9.9-ee.0
export NAME=gitlab-test-11.9
``` -->

##### コンテナの作成

```sh
export IP=$(docker-machine ip $ENV_NAME)

docker run --detach \
--env GITLAB_OMNIBUS_CONFIG="external_url 'https://$IP:$HTTP_PORT'; gitlab_rails['gitlab_shell_ssh_port'] = $SSH_PORT;" \
--hostname $IP \
-p $HTTP_PORT:$HTTP_PORT -p $SSH_PORT:22 \
--name $CONTAINER_NAME \
gitlab/gitlab-ee:$VERSION
```

#### GitLab コンテナへの接続

##### docker host IP の取得

```sh
echo $IP
# example output: 192.168.151.134
```

- ブラウズ先: <https://192.168.151.134:8888/>

**注**: コンテナがブラウザ経由でアクセス可能になるまで起動に数秒かかる場合があります。

##### 対話シェルの実行 / 設定の編集

```sh
docker exec -it $CONTAINER_NAME /bin/bash
```

```sh
# example commands
root@192:/# vi /etc/gitlab/gitlab.rb
root@192:/# gitlab-ctl reconfigure
```

##### sed を使った gitlab.rb 値の更新方法

たとえば、**gitlab-ee** という名前のコンテナで **gitlab_shell_ssh** ポートを **2222** に設定するには:

```sh
docker exec -it gitlab-ee \
sed -i "s/.*gitlab_shell_ssh_port.*/gitlab_rails['gitlab_shell_ssh_port'] = 2222/g" /etc/gitlab/gitlab.rb

docker exec -it gitlab-ee gitlab-ctl reconfigure
```

#### リソース

- <https://docs.gitlab.com/install/docker/>
- <https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/get-started/>
- <https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/reference/ip/>

## Windows

[Windows Runner](https://docs.gitlab.com/runner/install/windows.html) や [混在クラスターでの Kubernetes Executor](https://docs.gitlab.com/runner/executors/kubernetes/index.html#example-for-windowsamd64) のテストのために、Windows 環境が必要になることもあるかもしれません。

選択肢は上記と同じです:

- クラウド環境: GCP と AWS には RDP で接続できるよう起動可能な Windows Server イメージがあります。
- ローカル環境: Microsoft はお好みのハイパーバイザー用の [事前パッケージされた Windows VM](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/) を提供しています。
