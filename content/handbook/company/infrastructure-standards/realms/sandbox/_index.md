---
title: "サンドボックスクラウドレルム"
description: "このハンドブックセクションでは、GitLab の全部門・グループにおける AWS および GCP サンドボックスのインフラストラクチャ標準の最新イテレーションを定義します。"
upstream_path: "/handbook/company/infrastructure-standards/realms/sandbox/"
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T22:00:00Z"
translator: claude
stale: false
---

### クイックリンク

#### ユーザーポータル

- [gitlabsandbox.cloud](https://gitlabsandbox.cloud)

#### ドキュメント

- [グローバルインフラストラクチャ標準](/handbook/company/infrastructure-standards/)
- [グローバルラベルとタグ](/handbook/company/infrastructure-standards/labels-tags/)
- [インフラストラクチャポリシー](/handbook/company/infrastructure-standards/policies/)

#### Issue トラッキングとコラボレーション

- [HackyStack Issue トラッキング](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced/-/issues)（機能開発とバグ）
- [CorpSec Infrastructure Issue トラッキング](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)（GitLab 固有のトピックと依頼）
- `#sandbox-cloud-questions` Slack チャネルで質問やヘルプを求めることができます。

#### コードと例

- [HackyStack Enhanced ソースコード](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced)
- [HackyStack Enhanced README](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced/-/blob/main/README.md)

#### Infrastructure-as-Code

- [Sandbox Cloud - プロジェクトテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)
- [Sandbox Cloud - Terraform モジュール](https://gitlab.com/gitlab-com/infra-standards/terraform-modules)
- [Sandbox Cloud - Ansible Roles](https://gitlab.com/gitlab-com/infra-standards/ansible-roles)
- [IT Infrastructure Realm IaC - gitlabsandbox.cloud 用 Terraform 設定](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-app-tf) - アクセス制限あり
- [IT Infrastructure Realm IaC - gitlabsandbox.cloud 用 Ansible 設定](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-ansible) - アクセス制限あり

## 概要

Sandbox Cloud は、AWS アカウントまたは GCP プロジェクトを作成するための自動化されたプロビジョニングプラットフォームで、デモ、サンドボックス、テスト、本番環境的な用途に使用でき、GitLab が連結請求で支払います（クレジットカードは不要）。

このプラットフォームは、Jeff Martin が最初に作成し現在 Vlad Stoianovici によってメンテナンスされているオープンソースの Laravel アプリケーションである [HackyStack Enhanced](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced) によって駆動されています。HackyStack は Okta インテグレーションを使用してアクセス要求プロセスを自動化し、部門に基づいて役割と権限を自動割り当てし、クラウドプロバイダー API を使用して AWS アカウントと GCP プロジェクトをプロビジョニングします。

Sandbox Cloud は [CorpSec Identity](/handbook/security/corporate/) チームによって管理されています。質問がある場合は Slack の `#sandbox-cloud-questions` で尋ねるか、CorpSec Issue で `@vlad` にタグ付けしてください。

### はじめ方

#### 個人 AWS アカウントまたは GCP プロジェクト

すべてのチームメンバーは、以下のセルフサービス手順を使用して、個人用（サンドボックス、テストなど）の AWS アカウントまたは GCP プロジェクトをプロビジョニングできます。セキュリティ上の理由から、個人アカウントには他のチームメンバーを招待できません。

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にアクセスし、Okta アカウントでサインインします。
1. 上部のナビゲーションで **Cloud Infrastructure** に移動します。
1. 紫色の **Create Individual Account** ボタンをクリックします。
1. ドロップダウンリストから *クラウドプロバイダー* と *クラウド組織単位* を選択します。**組織単位のドロップダウンリストにオプションがない場合、HRIS での部門名変更または追加により、あなたの部門がまだデータベースに作成されていない可能性があります。`#sandbox-cloud-questions` で追加を依頼してください。**
1. 緑色の **Create Account** ボタンをクリックします。
1. アカウントの AWS サービスがアクティブ化されている間、AWS API がプロビジョニングプロセスを完了するのに 2-5 分かかります。
1. ユーザーアカウントが `Provisioning` から `Active` に変更されたことを確認できるまで、約 60 秒ごとにブラウザウィンドウを更新してください。
1. [AWS アカウントへのアクセス](#accessing-your-aws-account) または [GCP プロジェクトへのアクセス](#accessing-your-gcp-project) の手順を参照してください。

> Okta でサインインできますが、AWS リソースをプロビジョニングする予定がない限り、Cloud Account を作成しないでください。

**現在の AWS アカウントで問題が発生していますか？** `#sandbox-cloud-questions` でヘルプを求めてください。問題が検証され、新しい AWS アカウントの取得が承認された場合は、[New AWS Individual Account Rebuild Request](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/new?issuable_template=aws_individual_account_rebuild_request) Issue テンプレートを使用してください。

#### 自動シャットダウンポリシー

コスト削減と露出削減の措置として、個人アカウント（例: `dmurphy-a1b2c3d4`）内のすべての GCP Compute Engine インスタンスは、2023-02-03 以降、毎週金曜日 23:59 UTC に電源オフされます。影響を受けるインスタンスがある場合、24 時間前に Slack ボット通知を受け取り、電源オフを防ぐためにインスタンスにラベルを追加する手順が示されます。

インスタンスが電源オフになった場合は、再び作業を始める準備ができたら単に電源をオンに戻すことができます。

電源がオンになっていない Compute インスタンスの時間については請求されません（e2-standard-4/4vCPU/16GB は $0.13/時 または $96.48/月）。電源オフのインスタンスのストレージは安価で、20GB 永続ディスクは月額 $0.80 です。

これにより、土曜日と日曜日にエフェメラルインフラストラクチャを実行しないことで、即座に 28%+ のコスト削減が実現します。インスタンスの電源を再度オンにするまで（数日後、数週間後、数か月後かもしれません）料金が発生しないため、追加のコスト削減も実現します。これは、デモで数時間だけ使用された放棄されたインスタンスもカバーします。

将来のイテレーションでは AWS アカウントに取り組む予定です。

#### 協働 AWS アカウントまたは GCP プロジェクト（非本番環境） {#collaborative-aws-account-or-gcp-project-non-production}

すべてのチームメンバーは、特定のプロジェクトまたはワーキンググループ用、または部門グループによる共有非本番リソースの一般使用のために、新しい AWS アカウントまたは GCP プロジェクトを要求できます。これらは協働アカウント/プロジェクトと呼ばれ、Sandbox Cloud からすべてのチームメンバーが自己プロビジョニングできる個人アカウント/プロジェクトとは対照的です。

**これらのアカウント/プロジェクトでは RED データは許可されません。** すべての RED データは、適切なインフラストラクチャレルム管理者（例: `eng-infra-saas`、`it-infra` など）が管理する本番 AWS アカウントまたは GCP プロジェクトでホストする必要があります。

協働アカウント/プロジェクトのセルフサービス作成と IAM 管理は、HackyStack のエンドユーザーにはまだ利用できません。当面の間、セキュリティコンプライアンス上の理由から退屈なソリューションとしてアクセス要求スタイルの Issue テンプレートを使用しており、HackyStack 管理者は Admin CLI を使用してアカウントとユーザーをプロビジョニングします。

- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_create): 新しい AWS グループワークロード（マルチユーザー）アカウントリクエスト
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_iam_update): AWS グループワークロードアカウントから IAM ユーザーを追加/削除
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_delete): AWS アカウントを廃止
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_create): 新しい GCP グループ（マルチユーザー）プロジェクトリクエスト（[プロビジョナーランブック](https://gitlab.com/gitlab-com/gl-security/corp/infra/runbooks/-/blob/main/gitlab-sandbox-cloud/add-group-project-for-gcp.md)）
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_iam_update): GCP グループプロジェクトから IAM ユーザーを追加/削除
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_delete): GCP プロジェクトを廃止

#### 本番環境

##### 製品関連

顧客対応の、[Red または Orange データ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels) を含む、GitLab 製品または GitLab.com SaaS に関連する、または Engineering 主催サービスのステージングまたは本番（的）インフラストラクチャサービスについては、`#infrastructure_lounge` Slack チャネルで次のステップのガイダンスについて [Reliability Engineering](/handbook/engineering/infrastructure-platforms/) チームに連絡してください。

ほとんどの環境は通常、[config-mgmt プロジェクト](https://gitlab.com/gitlab-com/gl-infra/config-mgmt) で [新しい環境を作成する](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/#creating-a-new-environment) 手順を使用して作成されます。

GitLab.com SaaS について [Production Architecture](/handbook/engineering/infrastructure-platforms/production/architecture/) ハンドブックページで詳しく学べます。

[yellow または green](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels) データを持つプロジェクトは通常、[インフラストラクチャ標準](/handbook/infrastructure-standards) ガイドラインを使用して [グループプロジェクト](#collaborative-aws-account-or-gcp-project-non-production) を使った自己管理に適しています。

##### ビジネス関連

ビジネスオペレーションと技術スタックに関連するインフラストラクチャサービスについては、次のステップのガイダンスについて `#it_help` で IT チームに連絡してください。私たちの [tech stack](/handbook/business-technology/tech-stack-applications/) のほとんどは SaaS ベースで、それぞれのベンダーがホストしています。

新しい SaaS アプリケーションは [調達プロセス](/handbook/finance/procurement/) を経由する必要があり、それぞれの部門の [system owners](/handbook/business-technology/#cross-department-system-owners) によって管理されます。

セルフホスト型アプリケーションインフラストラクチャはケースバイケースで決定され、CorpSec Infrastructure、[Infrastructure Security](/handbook/security/product-security/infrastructure-security/)、[Application Security](/handbook/security/product-security/security-platforms-architecture/application-security/)、[3rd Party Risk](/handbook/security/security-assurance/security-risk/third-party-risk-management/) と共同で設計されます。新しいサービスについての予備的ガイダンスについては、Issue で `@vlad` にタグ付けしてください。まだ Issue がない場合は、[CorpSec Infrastructure Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues) に作成してください。

#### AWS アカウントへのアクセス {#accessing-your-aws-account}

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、[Cloud Infrastructure](https://gitlabsandbox.cloud/cloud) に移動します。
1. まだアカウントを作成していない場合は [Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) ボタンをクリックし、フォームを使って新しいアカウントを作成します。既にアカウントを持っている場合は、アクセスしたい AWS アカウントのタイトルまたは歯車アイコンをクリックします。
1. `Cloud Account` 詳細ページで、右上隅の `View IAM Credentials` ボタンをクリックしてポップアップモーダルウィンドウを開きます。
1. `AWS Console URL`、`Username`、`Password` が表示され、AWS アカウントにサインインするのに使用できます。URL の先頭にある 12 桁の数字が AWS アカウント ID/番号です。
1. Private vault に新しい 1Password レコードを作成して、これらの認証情報を保存します。
1. リンクをクリックして AWS コンソールを開くことも、モーダルウィンドウを閉じて `Cloud Account` 詳細ページの `Open AWS Web Console` ボタンをクリックすることもできます。
1. 提供された **URL**、**Username**、**Password** を使用して、新しい AWS アカウントにサインインします。*ブラウザが別のアカウントの保存された認証情報を自動入力しないように注意してください。*
1. サインイン後、IAM に移動し、ユーザーアカウント用の仮想 MFA デバイスを追加し、1Password レコードに OTP（ワンタイムパスワード）を追加してください。
1. IAM ユーザーアカウントは、AWS アカウント内で任意のアクションを実行できる `AdministratorAccess` を持っています。`root` ユーザーアカウントへのアクセスは、ブレークガラスセキュリティインシデントまたは [Infrastructure Realm Owners](/handbook/company/infrastructure-standards/#realm-owners) による関連する管理活動でのみ使用するため、チームメンバーには提供しません。

#### GCP プロジェクトへのアクセス {#accessing-your-gcp-project}

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、[Cloud Infrastructure](https://gitlabsandbox.cloud/cloud) に移動します。
1. まだアカウントを作成していない場合は [Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) ボタンをクリックし、フォームを使って新しいアカウントを作成します。既にアカウントを持っている場合は、アクセスしたい GCP プロジェクトのタイトルまたは歯車アイコンをクリックします。
1. `Cloud Account` 詳細ページで、右上隅の `View Credentials` ボタンをクリックしてポップアップモーダルウィンドウを開きます。
1. `GCP Console URL` とユーザー名が表示されます。GCP は Google 認証を使用するため、GitLab のメールアドレスで Google にサインインしているだけで十分です。プロジェクトが作成されたときに、HackyStack があなたのメールアドレスに `Owner` GCP IAM ロールを追加しています。プロジェクト ID は `{emailHandle}-{cloudAccountShortId}` の形式です。GCP コンソールで別のプロジェクトにアクセスする際、ドロップダウンリストからこのプロジェクトを選択できます。
1. 初めてプロジェクトにアクセスした後、GCP プロジェクトで使用したい GCP サービスごとに、サービスを有効化するよう求められます。これは予期される動作で、数秒かかり、プロジェクトの初期構成中の一回限りのステップです。

## ドメイン名

詳細については [Domain Names and DNS Records](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/domains-dns/) IT ガイドの内部ハンドブックページを参照してください。

## Terraform 環境

### Terraform 環境の仕組み

- すべてのチームメンバーが GitLab Sandbox Cloud で Cloud Account を作成したときに、GitLab Terraform（GitOps）プロジェクトを安全にホストする新しい GitLab Omnibus インスタンス。
- Terraform スキャフォールディングと [使いやすい Terraform モジュール](https://gitlab.com/gitlab-com/infra-standards/terraform-modules) を備えた新しい [GitLab プロジェクトテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)。Google Cloud プロバイダーに対する組み込みサポートを備えた [Terraform.io Registry プロバイダーまたはモジュール](https://registry.terraform.io/) のいずれかを使用するための基盤を提供します。
- すべての GitLab Sandbox Cloud GCP プロジェクトには、自動的に作成された GitLab グループと、GitLab CI を活用したプロビジョニング自動化を備えた [GitOps Terraform 設定スキャフォールディングを持つスタータ GitLab プロジェクト](https://gitlab.com/gitlab-com/infra-standards/project-templates/gcp-sandbox-environment-template) があります。これにより、Terraform セットアップを扱わずに、セキュリティのベストスタンダードに準拠しながら、わずか数分でチームメンバーが Terraform でリソースをデプロイし始めることができます。
- 今後数か月で、わずか数回のクリックでプロビジョニングできる事前構成済み環境を提供する追加のプロジェクトテンプレートをリリースする予定です。これには [Omnibus/Runner/Cluster オールインワン環境](https://gitlab.com/gitlab-com/infra-standards/terraform-modules/gcp/gitlab-omnibus-sandbox-tf-module)、Kubernetes クラスター環境などが含まれます。[GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) のサポート方法を探求できる基盤もあります。
- 同じ Cloud Account 内の異なる環境や設定のために Sandbox Cloud UI で簡単に追加の Terraform プロジェクトを作成することもでき、実験中のユースケースに基づいてモジュール/リソース設定を分離できます。

### Terraform 環境の作成方法

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインします
1. GCP で Cloud Account（GCP プロジェクト）を作成するか、既存のプロジェクトに移動します。
1. **Create Terraform Environment** ボタンをクリックしてフォームに記入します。
   1. **Cloud Account** ドロップダウンリストから Cloud Account を選択します。
   1. **Environment Template** ドロップダウンリストから使用するテンプレートを選択します。初めての場合は `gcp-sandbox-environment-template-v2-########` テンプレートを使用してください。
      - より詳細なテンプレート（バージョンを設定しランナーを有効化できるもの）を探している場合は `support-resources-template-v2` を使用してください。
   1. **Environment Name (`Alphadash` Slug)** テキストフィールドに環境の名前を入力します。
1. 環境が作成された後、**View Terraform Configuration** ボタンをクリックします。これは [https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud) の新しい GitLab インスタンスでホストされます。GitLab インスタンスの認証情報は View GitOps Credentials ボタンのモーダルで確認できます。
   - GCP リソースクォータとコスト考慮事項に従って、複数の Terraform 環境を作成できます。毎週金曜日、GCP Compute インスタンスはコスト削減とセキュリティのベストプラクティスのために自動的に電源オフになります。

### Terraform 環境の使用方法

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) で生成された認証情報を使用して [https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud) にサインインします。これは `{firstInitial}{lastName}-{hash}` であり、通常の GitLab ユーザー名ではないことに注意してください。
1. 作成したばかりの Terraform 環境のプロジェクトに移動します。[https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) の Cloud Account ページのリンクからプロジェクトにすばやくアクセスできます。
1. ローカルコンピュータで `~/.ssh` フォルダに移動し、SSH キーを生成します

   ```shell
   ssh-keygen -t rsa -b 4096 -C <name_of_project>
   ```

1. このプロジェクトの terraform/main.tf に移動し、公開鍵をコピー＆ペーストします。以下の例を参照してください

   ```shell
   #     -------------------------------------------------------------------------    ----
   # Add your Terraform modules and/or resources below this line
   #     -----------------------------------------------------------------------------

   locals {
     ssh_key               = "<RSA public key here>"
     normalized_env_prefix = "sr-${var.env_prefix}"
    tags                  = ["sr-firewall-rule", "${local.normalized_env_prefix}-firewall-rule"]
   }
   ```

1. 新しい CI パイプラインを実行します。`Plan` ジョブが完了したら、`Deploy` ジョブをトリガーします。（設定をまったく行わずに済むことに注目してください。）
1. テスト用のサンプル Ubuntu 仮想マシンで新しい環境がスピンアップされる際の `terraform apply` 出力を観察します。必要に応じて追加の Terraform リソースを追加できます（下記参照）。
1. デプロイされた VM を表示するには、[https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) のリンクを使用して GCP コンソールに移動します。`gcloud` コマンドまたは Cloud Shell を使用して SSH 経由で VM に接続できます。
1. リソースをクリーンアップするには、`Destroy` の GitLab CI ジョブを実行します。
1. Git リポジトリの `terraform/main.tf` ファイルを更新して、より多くの Terraform リソースまたはモジュールを追加できます。
1. リソースをデプロイするには、`Deploy` CI パイプラインジョブを実行するだけです。

### GCP 環境での Terraform 環境のナビゲート

1. GCP アカウントページに入ると、ページの下部に作成したテスト環境が表示されます。
1. CI パイプラインを表示するには、リストで環境を見つけて、行の右端のアクション列にあるロケットアイコン（🚀）をクリックします。
   1. GitLab Sandbox Cloud GitOps 環境にログオンします。
    - GitOps URL の認証情報を見つけるには、GCP サンドボックスアカウントのホームページに移動し、**View Credentials** をクリックします。
1. 環境を表示できるようになりました。

## AWS アカウントまたは GCP プロジェクトを削除する

### 個人アカウント

個人アカウントは Sandbox Cloud ポータルでセルフサービスを通じて削除できます。削除前に、猶予期間中の継続的なコストを避けるために、アカウント内のすべてのリソースを削除するよう最善を尽くしてください。

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、**Cloud Infrastructure** に移動します。
1. 削除したいアカウントをクリックします。
1. アカウント詳細ページの **Delete Account** オプションを使用します。
1. アカウントは永続削除前の猶予期間に入ります（AWS は 90 日、GCP は 30 日）。この期間中は `#sandbox-cloud-questions` に連絡することでアカウントを復元できます。

チームメンバーが GitLab を離れる際、彼らの個人サンドボックスアカウントは Okta インテグレーションを通じて自動的にデプロビジョニングされます。

### 協働アカウント

協働（マルチユーザー）AWS アカウントまたは GCP プロジェクトを廃止するには、適切な Issue テンプレートを使用してリクエストを提出してください。マネージャーの承認が必要です。

- [AWS アカウントを廃止](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_delete)
- [GCP プロジェクトを廃止](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_delete)

削除を要求する前に、チームと連携してアカウント内のすべてのリソースを削除してください。質問がある場合は、`#sandbox-cloud-questions` で尋ねてください。

## 背景と歴史

何年にもわたって、GitLab の非本番インフラストラクチャリソースは、アカウンタビリティ、コスト管理、または GCP と AWS にわたるセキュリティのベストプラクティスなしで有機的に成長しました。FY21-Q3 では、[ラベル、タグ、命名規則](/handbook/company/infrastructure-standards/labels-tags/) と、異なるユースケース用の個別のセキュリティ境界を作成する [レルム](/handbook/company/infrastructure-standards/#gitlab-infrastructure-realms) という概念で、全社的な [インフラストラクチャ標準](/handbook/company/infrastructure-standards/) が確立されました。

Jeff Martin は、サンドボックスのプロビジョニングをエンドツーエンドで自動化するオープンソースプロジェクトとして [HackyStack](https://gitlab.com/hackystack/hackystack-portal) の最初のリリースを開発しました。コードベースは後にアクティブな開発のために CorpSec Identity チームの下で [HackyStack Enhanced](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced) にフォークされました。オーナーシップとメンテナンスは Jeff Martin から Vlad Stoianovici と CorpSec Identity チームに移管されました。

### ビジネスと財務への影響

- すべてのインフラストラクチャリソースは、コスト配分のためにユーザーおよび部門に関連付けられている
- 個人使用のための AWS 請求書（連結請求）による経費報告書の削減または排除
- 放棄されたテスト環境のコストを削減するための、Slack 通知付きの予算とコスト管理
- 自動化されたアクセス要求とプロビジョニングプロセス
- AWS アカウントと GCP プロジェクトのための標準化された組織階層と命名スキーマ
- 自動化されたセキュリティベストプラクティス管理と最小権限
- Okta インテグレーションを通じた、退職したチームメンバーのクラウドリソースの自動クリーンアップ（2025 年 11 月実装）、FY26 で放棄されたアカウントから 60 万ドル超の年間クラウド支出を削減

### 技術スタック

- [Laravel 11](https://laravel.com/docs/11.x)（PHP 8.1）— ウェブポータル、CLI アプリケーション、API プロビジョニングハンドラー
- MySQL — データベース
- [Terraform](https://www.terraform.io/) — Infrastructure-as-Code 設定
- [AWS SDK for PHP](https://github.com/aws/aws-sdk-php)
- [Google Cloud Client for PHP](https://github.com/googleapis/google-api-php-client)
- [GitLab API](https://github.com/GitLabPHP/Client) — Terraform 設定の Git SCM
- [GitLab CI](https://docs.gitlab.com/ee/ci/) — 自動 Terraform デプロイメント
- MCP サーバー（TypeScript）— HTTP API を通じた Sandbox Cloud 操作へのプログラマブルアクセス

### 最近の開発

- **MCP HTTP API**（2026 年 3 月）— Sandbox Cloud 操作へのプログラマブルアクセスのための gitlabsandbox.cloud 上の HTTPS エンドポイント、自動化のための SSH/VPN 依存性を排除
- **ユーザーごとの MCP API キー**（2026 年 3 月）— SHA-256 ハッシュを使ったユーザーごとの個別 API キー、共有 API キーモデルを置換
- **Okta インテグレーション**（2026 年 3 月）— 自動プロファイル同期（部門、役職、マネージャー）および従業員離職時のウェブフック駆動アカウントデプロビジョニングのための Okta との OAuth クライアント認証フロー
- **Slack 通知フレームワーク**（2026 年 3 月）— コストダイジェスト、請求アラート、廃止警告が Slack 経由でユーザーに配信される
- **退職ユーザーの一括クリーンアップ**（2026 年 2 月）— AWS と GCP にわたって退職ユーザーから 263 アカウントがクリーンアップされ、年間 60 万ドル超のクラウド支出を削減

### 現在の優先事項

最新の優先事項と計画作業については、CorpSec Issue トラッカーの [Sandbox Cloud Issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/work_items?label_name%5B%5D=corpsys-sandbox-cloud) を参照してください。

### 貢献方法

実装する最善の方法を議論できるように、Slack の `#sandbox-cloud-questions` または [CorpSec Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new) にアイデアを投稿してください。

Sandbox Cloud は CorpSec Identity チームによってメンテナンスされています。質問、機能リクエスト、バグレポートについては、CorpSec Issue で `@vlad` にタグ付けするか、`#sandbox-cloud-questions` で尋ねてください。
