---
title: "サンドボックスクラウドレルム"
description: "このハンドブックセクションでは、GitLab の全部門・グループにおける AWS および GCP サンドボックスのインフラストラクチャ標準の最新イテレーションを定義します。"
upstream_path: "/handbook/company/infrastructure-standards/realms/sandbox/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

### クイックリンク

#### ユーザーポータル

- [gitlabsandbox.cloud](https://gitlabsandbox.cloud)

#### ドキュメント

- [グローバルインフラストラクチャ標準](/handbook/company/infrastructure-standards/)
- [グローバルラベルおよびタグ](/handbook/company/infrastructure-standards/labels-tags/)
- [インフラストラクチャポリシー](/handbook/company/infrastructure-standards/policies/)

#### Issue トラッキングとコラボレーション

- [HackyStack Issue トラッキング](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced/-/issues)（機能開発およびバグ）
- [CorpSec インフラストラクチャ Issue トラッキング](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)（GitLab 固有のトピックとリクエスト）
- `#sandbox-cloud-questions` Slack チャンネルで質問やサポートを受けられます。

#### コードとサンプル

- [HackyStack Enhanced ソースコード](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced)
- [HackyStack Enhanced README](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced/-/blob/main/README.md)

#### Infrastructure-as-Code

- [サンドボックスクラウド - プロジェクトテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)
- [サンドボックスクラウド - Terraform モジュール](https://gitlab.com/gitlab-com/infra-standards/terraform-modules)
- [サンドボックスクラウド - Ansible ロール](https://gitlab.com/gitlab-com/infra-standards/ansible-roles)
- [IT Infrastructure Realm IaC - gitlabsandbox.cloud 向け Terraform 設定](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-app-tf) - アクセス制限あり
- [IT Infrastructure Realm IaC - gitlabsandbox.cloud 向け Ansible 設定](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-ansible) - アクセス制限あり

## 概要

サンドボックスクラウドは、デモ・サンドボックス・テスト・本番相当の目的で使用できる AWS アカウントまたは GCP プロジェクトを自動でプロビジョニングするプラットフォームです。GitLab が費用を負担し、請求は一元管理されます（クレジットカード不要）。

このプラットフォームは、Jeff Martin によって作成されたオープンソースの Laravel アプリケーションである [HackyStack Enhanced](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced) によって動作しており、現在は Vlad Stoianovici が保守しています。HackyStack は Okta 連携を使用してアクセスリクエストプロセスを自動化し、部門に基づいてロールと権限を自動割り当てし、クラウドプロバイダー API を使用して AWS アカウントと GCP プロジェクトをプロビジョニングします。

サンドボックスクラウドは [CorpSec Identity](/handbook/security/corporate/) チームが管理しています。ご質問がある場合は Slack の `#sandbox-cloud-questions` でお問い合わせいただくか、CorpSec Issue で `@vlad` にタグ付けしてください。

### はじめ方

#### 個人用 AWS アカウントまたは GCP プロジェクト

すべてのチームメンバーは、以下のセルフサービス手順を使用して、個人用途（サンドボックス・テストなど）の AWS アカウントまたは GCP プロジェクトをプロビジョニングできます。セキュリティ上の理由から、個人用アカウントに他のチームメンバーを招待することはできません。

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にアクセスし、Okta アカウントでサインインします。
1. 上部ナビゲーションの **Cloud Infrastructure** に移動します。
1. 紫色の **Create Individual Account** ボタンをクリックします。
1. ドロップダウンリストから *クラウドプロバイダー* と *クラウド組織ユニット* を選択します。**組織ユニットのドロップダウンリストに選択肢がない場合、お客様の部門が HRIS での部門名変更または追加により、まだデータベースに登録されていません。`#sandbox-cloud-questions` でご連絡ください。**
1. 緑色の **Create Account** ボタンをクリックします。
1. AWS サービスがアカウントに対して有効化される間、AWS API によるプロビジョニングプロセスが完了するまで 2〜5 分かかります。
1. ユーザーアカウントのステータスが `Provisioning` から `Active` に変わるまで、約 60 秒ごとにブラウザウィンドウを更新してください。
1. 以下の [AWS アカウントへのアクセス](#accessing-your-aws-account)または [GCP プロジェクトへのアクセス](#accessing-your-gcp-project)の手順を参照してください。

> Okta でサインインできますが、AWS リソースをプロビジョニングするつもりがない場合はクラウドアカウントを作成しないでください。

**現在の AWS アカウントに問題が発生していますか？** `#sandbox-cloud-questions` でサポートをお求めください。問題が確認され、新しい AWS アカウントの取得が承認された場合は、[New AWS Individual Account Rebuild Request](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/new?issuable_template=aws_individual_account_rebuild_request) Issue テンプレートを使用してください。

#### 自動シャットダウンポリシー

コスト削減とリスク低減のため、個人アカウント（例: `dmurphy-a1b2c3d4`）の GCP コンピュートエンジンインスタンスは、2023-02-03 以降、毎週金曜日の 23:59 UTC に自動的にシャットダウンされます。影響を受けるインスタンスについては、24 時間前に Slack ボット通知が届き、シャットダウンを防ぐためのラベル追加手順が案内されます。

インスタンスがシャットダウンされた場合は、作業を再開したいときに起動し直すだけです。

起動していないコンピュートインスタンスの時間分は課金されません（e2-standard-4/4vCPU/16GB のコストは $0.13/時間、または $96.48/月）。シャットダウン中のインスタンスのストレージは安価で、20GB の永続ディスクは月額 $0.80 です。

土曜日・日曜日に一時的なインフラが稼働しないことで、即座に 28% 以上のコスト削減が見込まれます。インスタンスを再起動するまで課金されないため、さらなるコスト削減も期待できます（数日・数週間・数ヶ月後の再起動も同様）。また、デモに数時間だけ使用された放置インスタンスもこの対象となります。

AWS アカウントについては将来のイテレーションで対応する予定です。

#### コラボレーティブ AWS アカウントまたは GCP プロジェクト（非本番）

すべてのチームメンバーは、特定のプロジェクトやワーキンググループ、または部門グループが共有の非本番リソースとして一般利用する新しい AWS アカウントまたは GCP プロジェクトをリクエストできます。これらはコラボレーティブアカウント/プロジェクトと呼ばれます。全チームメンバーがサンドボックスクラウドからセルフプロビジョニングできる個人アカウント/プロジェクトとは区別されます。

**これらのアカウント/プロジェクトでは RED データは許可されません。** RED データは、適切なインフラストラクチャレルム管理者（例: `eng-infra-saas`、`it-infra` など）が管理する本番 AWS アカウントまたは GCP プロジェクトでホストする必要があります。

コラボレーティブアカウント/プロジェクトのセルフサービス作成および IAM 管理は、まだエンドユーザーが HackyStack で利用できません。それまでの間、セキュリティコンプライアンス上の理由から、アクセスリクエスト方式の Issue テンプレートを暫定的に使用し、HackyStack 管理者が管理者 CLI でアカウントとユーザーをプロビジョニングします。

- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_create): 新規 AWS グループワークロード（複数ユーザー）アカウントリクエスト
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_iam_update): AWS グループワークロードアカウントへの IAM ユーザー追加/削除
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_delete): AWS アカウントの廃止
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_create): 新規 GCP グループ（複数ユーザー）プロジェクトリクエスト（[プロビジョナーランブック](https://gitlab.com/gitlab-com/gl-security/corp/infra/runbooks/-/blob/main/gitlab-sandbox-cloud/add-group-project-for-gcp.md)）
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_iam_update): GCP グループプロジェクトへの IAM ユーザー追加/削除
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_delete): GCP プロジェクトの廃止

#### 本番環境

##### 製品関連

顧客向けのステージングまたは本番（相当）のインフラサービス、[Red または Orange データ](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels)を含むもの、GitLab 製品または GitLab.com SaaS に関連するもの、または Engineering スポンサードサービスについては、`#infrastructure_lounge` Slack チャンネルで [Reliability Engineering](/handbook/engineering/infrastructure/team/) チームに次のステップのご案内を求めてください。

ほとんどの環境は、[Create a new environment](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/#creating-a-new-environment) の手順を使用して [config-mgmt プロジェクト](https://gitlab.com/gitlab-com/gl-infra/config-mgmt) で作成されます。

GitLab.com SaaS の詳細については、[プロダクションアーキテクチャ](/handbook/engineering/infrastructure-platforms/production/architecture/)ハンドブックページをご覧ください。

[Yellow または Green](/handbook/security/policies_and_standards/data-classification-standard/#data-classification-levels) データを含むプロジェクトは、通常、[インフラストラクチャ標準](/handbook/infrastructure-standards)のガイドラインを使用した[グループプロジェクト](#collaborative-aws-account-or-gcp-project-non-production)によるセルフ管理の方が適しています。

##### ビジネス関連

ビジネス運営や技術スタックに関連するインフラサービスについては、`#it_help` で IT チームに次のステップのご案内を求めてください。私たちの[技術スタック](/handbook/business-technology/tech-stack-applications/)のほとんどは SaaS ベースで、各ベンダーがホストしています。

新しい SaaS アプリケーションは[調達プロセス](/handbook/finance/procurement/)を経る必要があり、各部門の[システムオーナー](/handbook/business-technology/#cross-department-system-owners)が管理します。

セルフホストアプリケーションのインフラは個別に判断され、CorpSec インフラストラクチャ、[インフラストラクチャセキュリティ](/handbook/security/product-security/infrastructure-security/)、[アプリケーションセキュリティ](/handbook/security/product-security/security-platforms-architecture/application-security/)、および[サードパーティリスク](/handbook/security/security-assurance/security-risk/third-party-risk-management/)と協力して設計されます。新しいサービスについての初期ガイダンスは、Issue で `@vlad` にタグ付けしてください。まだ Issue がない場合は、[CorpSec インフラストラクチャ Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)で作成してください。

#### AWS アカウントへのアクセス {#accessing-your-aws-account}

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、[Cloud Infrastructure](https://gitlabsandbox.cloud/cloud) に移動します。
1. アカウントをまだ作成していない場合は、[Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) ボタンをクリックし、フォームで新しいアカウントを作成します。すでにアカウントがある場合は、アクセスしたい AWS アカウントのタイトルまたはギアアイコンをクリックします。
1. `Cloud Account` 詳細ページで、右上の `View IAM Credentials` ボタンをクリックしてポップアップモーダルウィンドウを開きます。
1. AWS アカウントへのサインインに使用できる `AWS Console URL`、`Username`、および `Password` が表示されます。URL の先頭にある 12 桁の数字が AWS アカウント ID/番号です。
1. これらの認証情報を保存するため、プライベートボールトに新しい 1Password レコードを作成します。
1. リンクをクリックして AWS コンソールを開くか、モーダルウィンドウを閉じて `Cloud Account` 詳細ページの `Open AWS Web Console` ボタンをクリックします。
1. 提供された **URL**、**Username**、**Password** を使用して新しい AWS アカウントにサインインします。*ブラウザが別のアカウントの保存済み認証情報を自動入力しないよう注意してください。*
1. サインイン後、IAM に移動してユーザーアカウントに Virtual MFA デバイスを追加し、1Password レコードにワンタイムパスワード（OTP）を追加してください。
1. IAM ユーザーアカウントには、AWS アカウント内で任意の操作を実行できる `AdministratorAccess` が付与されています。`root` ユーザーアカウントへのアクセスはチームメンバーには提供していません。これは、ブレークグラスのセキュリティインシデントや[インフラストラクチャレルムオーナー](/handbook/company/infrastructure-standards/#realm-owners)による関連管理アクティビティにのみ使用します。

#### GCP プロジェクトへのアクセス {#accessing-your-gcp-project}

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、[Cloud Infrastructure](https://gitlabsandbox.cloud/cloud) に移動します。
1. アカウントをまだ作成していない場合は、[Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) ボタンをクリックし、フォームで新しいアカウントを作成します。すでにアカウントがある場合は、アクセスしたい GCP プロジェクトのタイトルまたはギアアイコンをクリックします。
1. `Cloud Account` 詳細ページで、右上の `View Credentials` ボタンをクリックしてポップアップモーダルウィンドウを開きます。
1. `GCP Console URL` とユーザー名が表示されます。GCP は Google 認証を使用しているため、Google 上で GitLab メールアドレスでサインインするだけです。HackyStack はプロジェクト作成時にメールアドレスに `Owner` GCP IAM ロールを付与しています。プロジェクト ID は `{emailHandle}-{cloudAccountShortId}` の形式です。GCP コンソールで別のプロジェクトにアクセスする際はドロップダウンリストからこのプロジェクトを選択できます。
1. プロジェクトに初めてアクセスする際、使用したい各 GCP サービスのサービス有効化を求めるプロンプトが表示されます。これは想定される動作で、数秒かかりますが、プロジェクトの初期設定時に一度だけ行う手順です。

## ドメイン名

詳細は IT ガイドのイントラハンドブック「[ドメイン名と DNS レコード](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/domains-dns/)」ページを参照してください。

## Terraform 環境

### Terraform 環境の仕組み

- すべてのチームメンバーがサンドボックスクラウドでクラウドアカウントを作成する際に、GitLab Terraform（GitOps）プロジェクトを安全にホストするための新しい GitLab Omnibus インスタンス。
- Terraform スキャフォールディングと[使いやすい Terraform モジュール](https://gitlab.com/gitlab-com/infra-standards/terraform-modules)を備えた新しい[GitLab プロジェクトテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)。Google Cloud プロバイダーのビルトインサポートとともに、[Terraform.io Registry のプロバイダーまたはモジュール](https://registry.terraform.io/)を使用するための基盤を提供します。
- すべての GitLab サンドボックスクラウド GCP プロジェクトに、GitLab CI による自動プロビジョニングを備えた [GitOps Terraform 設定スキャフォールディングを含むスターター GitLab プロジェクト](https://gitlab.com/gitlab-com/infra-standards/project-templates/gcp-sandbox-environment-template)と自動作成された GitLab グループが追加されました。これにより、Terraform のセットアップなしで数分以内にリソースのデプロイを開始でき、セキュリティのベストプラクティスに準拠した環境を実現できます。
- 今後数ヶ月かけて、数クリックでプロビジョニングできる事前設定済み環境を提供する追加のプロジェクトテンプレートをリリースします。[Omnibus/Runner/Cluster オールインワン環境](https://gitlab.com/gitlab-com/infra-standards/terraform-modules/gcp/gitlab-omnibus-sandbox-tf-module)、Kubernetes クラスター環境などが含まれます。また、[GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) のサポートを検討するための基盤も整っています。
- サンドボックスクラウド UI で、異なる環境や設定に応じた追加の Terraform プロジェクトを同じクラウドアカウントに簡単に作成でき、ユースケースに基づいてモジュール/リソース設定を分離できます。

### Terraform 環境の作成方法

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインします。
1. GCP にクラウドアカウント（GCP プロジェクト）を作成するか、既存のプロジェクトに移動します。
1. **Create Terraform Environment** ボタンをクリックし、フォームに入力します:
   1. **Cloud Account** ドロップダウンリストからクラウドアカウントを選択します。
   1. **Environment Template** ドロップダウンリストから使用するテンプレートを選択します。初めての場合は `gcp-sandbox-environment-template-v2-########` テンプレートを使用してください。
      - バージョンを設定してランナーを有効にできる詳細なテンプレートが必要な場合は `support-resources-template-v2` を使用してください。
   1. **Environment Name (`Alphadash` Slug)** テキストフィールドに環境名を入力します。
1. 環境が作成されたら、**View Terraform Configuration** ボタンをクリックします。これは [https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud) の新しい GitLab インスタンスでホストされています。GitLab インスタンスの認証情報は「View GitOps Credentials」ボタンのモーダルで確認できます。
   - GCP リソースクォータとコストを考慮した上で、複数の Terraform 環境を作成できます。毎週金曜日に、コスト削減とセキュリティのベストプラクティスとして GCP コンピュートインスタンスが自動的にシャットダウンされます。

### Terraform 環境の使用方法

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) で生成された認証情報を使用して、[https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud) にサインインします。ユーザー名は `{firstInitial}{lastName}-{hash}` 形式であり、通常の GitLab ユーザー名とは異なることに注意してください。
1. 作成した Terraform 環境のプロジェクトに移動します。[https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) のクラウドアカウントページのリンクからすぐにアクセスできます。
1. ローカルコンピュータで `~/.ssh` フォルダに移動し、SSH キーを生成します。

   ```shell
   ssh-keygen -t rsa -b 4096 -C <name_of_project>
   ```

1. このプロジェクトの terraform/main.tf に移動し、公開鍵をコピーして貼り付けます。以下のサンプルを参照してください。

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

1. 新しい CI パイプラインを実行します。`Plan` ジョブが完了したら、`Deploy` ジョブをトリガーします（設定が一切不要なことに注目してください）。
1. `terraform apply` の出力を確認しながら、テスト用のサンプル Ubuntu 仮想マシンを含む新しい環境が構築されていく様子を見てください。必要に応じてさらに Terraform リソースを追加できます（以下参照）。
1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) のリンクから GCP コンソールに移動して、デプロイされた VM を確認します。`gcloud` コマンドまたは Cloud Shell を使って SSH で VM に接続してください。
1. `Destroy` の GitLab CI ジョブを実行してリソースをクリーンアップします。
1. Git リポジトリの `terraform/main.tf` ファイルを更新して、さらに Terraform リソースやモジュールを追加できます。
1. `Deploy` CI パイプラインジョブを実行するだけでリソースをデプロイできます。

### GCP 環境での Terraform 環境のナビゲート

1. GCP アカウントページを開くと、ページ下部に作成したテスト環境が表示されます。
1. CI パイプラインを表示するには、リストから環境を見つけ、行の右端のアクション列にあるロケットアイコン（🚀）をクリックします。
   1. GitLab サンドボックスクラウド GitOps 環境にログオンします。
    - GitOps URL の認証情報を確認するには、GCP サンドボックスアカウントのホームページに移動して **View Credentials** をクリックします。
1. これで環境を表示できます。

## AWS アカウントまたは GCP プロジェクトの削除

### 個人アカウント

個人アカウントはサンドボックスクラウドポータルからセルフサービスで削除できます。削除前に、猶予期間中のコストが継続しないよう、アカウント内のすべてのリソースをできる限り削除してください。

1. [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) にサインインし、**Cloud Infrastructure** に移動します。
1. 削除したいアカウントをクリックします。
1. アカウント詳細ページの **Delete Account** オプションを使用します。
1. アカウントは完全に削除される前に猶予期間（AWS は 90 日、GCP は 30 日）に入ります。この期間中は `#sandbox-cloud-questions` に連絡することでアカウントを復元できます。

チームメンバーが GitLab を退職する際、その個人サンドボックスアカウントは Okta 連携によって自動的にプロビジョニング解除されます。

### コラボレーティブアカウント

コラボレーティブ（複数ユーザー）AWS アカウントまたは GCP プロジェクトを廃止するには、適切な Issue テンプレートを使用してリクエストを提出してください。マネージャーの承認が必要です。

- [AWS アカウントの廃止](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_account_delete)
- [GCP プロジェクトの廃止](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_project_delete)

削除をリクエストする前に、チームと連携してアカウント内のすべてのリソースを削除してください。ご不明な点は `#sandbox-cloud-questions` でお問い合わせください。

## 背景と歴史

長年にわたり、GitLab の非本番インフラリソースは、GCP および AWS 全体で説明責任・コスト管理・セキュリティのベストプラクティスなしに有機的に増加していきました。FY21-Q3 に、会社全体の[インフラストラクチャ標準](/handbook/company/infrastructure-standards/)が、[ラベル・タグ・命名規則](/handbook/company/infrastructure-standards/labels-tags/)と、異なるユースケースのために分離されたセキュリティ境界を作成する[レルム](/handbook/company/infrastructure-standards/#gitlab-infrastructure-realms)の概念とともに確立されました。

Jeff Martin は、サンドボックスのプロビジョニングをエンドツーエンドで自動化するオープンソースプロジェクトとして [HackyStack](https://gitlab.com/hackystack/hackystack-portal) の初回リリースを開発しました。このコードベースは後に、積極的な開発のために CorpSec Identity チームの下で [HackyStack Enhanced](https://gitlab.com/gitlab-com/gl-security/identity/eng/hackystack-enhanced) にフォークされました。所有権と保守は Jeff Martin から Vlad Stoianovici と CorpSec Identity チームに移管されました。

### ビジネスおよび財務上のインパクト

- すべてのインフラリソースはコスト配賦のためにユーザーと部門に紐付けられています
- 個人利用の AWS 請求書に関する経費精算の削減または排除（一元請求）
- 放置されたテスト環境のコストを削減するための予算とコスト管理（Slack 通知付き）
- アクセスリクエストとプロビジョニングプロセスの自動化
- AWS アカウントと GCP プロジェクトの標準化された組織階層と命名スキーマ
- 自動化されたセキュリティのベストプラクティスコントロールと最小権限の付与
- Okta 連携による退職したチームメンバーのクラウドリソースの自動クリーンアップ（2025 年 11 月実装）、FY26 における放置アカウントからの年間クラウド支出 60 万ドル以上を削減

### 技術スタック

- [Laravel 11](https://laravel.com/docs/11.x)（PHP 8.1）— ウェブポータル・CLI アプリケーション・API プロビジョニングハンドラー
- MySQL — データベース
- [Terraform](https://www.terraform.io/) — Infrastructure-as-Code 設定
- [AWS SDK for PHP](https://github.com/aws/aws-sdk-php)
- [Google Cloud Client for PHP](https://github.com/googleapis/google-api-php-client)
- [GitLab API](https://github.com/GitLabPHP/Client) — Terraform 設定の Git SCM
- [GitLab CI](https://docs.gitlab.com/ee/ci/) — 自動化された Terraform デプロイ
- MCP Server（TypeScript）— HTTP API を通じたサンドボックスクラウド操作へのプログラムアクセス

### 最近の開発状況

- **MCP HTTP API**（2026 年 3 月）— gitlabsandbox.cloud 上の HTTPS エンドポイントにより、サンドボックスクラウド操作へのプログラムアクセスを実現し、自動化に必要な SSH/VPN への依存を解消
- **ユーザーごとの MCP API キー**（2026 年 3 月）— SHA-256 ハッシュを使用したユーザーごとの個別 API キー、共有 API キーモデルからの移行
- **Okta 連携**（2026 年 3 月）— プロフィール自動同期（部門・役職・マネージャー）のための Okta との OAuth クライアント認証フロー、および退職時のアカウントプロビジョニング解除のための Webhook 駆動型連携
- **Slack 通知フレームワーク**（2026 年 3 月）— コストダイジェスト・課金アラート・廃止警告を Slack を通じてユーザーに配信
- **退職ユーザーの一括クリーンアップ**（2026 年 2 月）— AWS および GCP で退職ユーザーの 263 アカウントをクリーンアップし、年間クラウド支出 60 万ドル以上を削減

### 現在の優先事項

CorpSec Issue トラッカーの [Sandbox Cloud Issues](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/work_items?label_name%5B%5D=corpsys-sandbox-cloud) で最新の優先事項と計画中の作業を確認してください。

### 貢献方法

Slack の `#sandbox-cloud-questions` または [CorpSec Issue トラッカー](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new)でアイデアを投稿して、最善の実装方法について議論しましょう。

サンドボックスクラウドは CorpSec Identity チームが保守しています。ご質問・機能リクエスト・バグ報告は、CorpSec Issue で `@vlad` にタグ付けするか、`#sandbox-cloud-questions` でお問い合わせください。
