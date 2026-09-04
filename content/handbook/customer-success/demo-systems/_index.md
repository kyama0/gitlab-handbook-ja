---
title: "デモシステム"
description: "GitLab デモシステムは、GitLab の Customer Success・Marketing・Sales・Training チームが、様々な非同期・ライブの場面で GitLab の機能・価値・ワークフローをデモするためのインフラを提供します。"
upstream_path: /handbook/customer-success/demo-systems/
upstream_sha: 24ab594c7293ee988858a91b316798974a875cc1
translated_at: "2026-09-05T00:20:08+09:00"
translator: codex
stale: false
lastmod: "2026-09-04T15:13:44Z"
---

## デモシステムの概要

GitLab デモシステムは、GitLab の Customer Success・Marketing・Sales・Training チームが、様々な非同期・ライブの場面で GitLab の機能・価値・ワークフローをデモするためのインフラを提供します。

デモシステムは 2019 年 10 月に設計されました。現在は [Logan Stucker](https://gitlab.com/lfstucker)、[Maria Redmond](https://gitlab.com/mredmond)、[Seraphine Young](https://gitlab.com/seraphiney) が [Demo Architecture](/handbook/solutions-architects/center-of-excellence/demo-architecture/) チームで、[Scott Cosentino](https://gitlab.com/scottcosentinogitlab)（[GitLab University](https://university.gitlab.com)）とともにデモシステムの主要メンテナーを引き継ぎ、トレーニングインストラクターや受講生の [GitLab Learn Labs](https://gitlab.com/gitlab-learn-labs) サポートも担当しています。

デモサンプルプロジェクト、インフラ、アクセスリクエストに関するご質問や、失敗したパイプラインジョブのトラブルシューティングについては、`#demo-architect-partners` Slack チャンネルでお問い合わせください。

[Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/)（AWS アカウントおよび GCP プロジェクト）に関するサポートは、`#sandbox-cloud-questions` Slack チャンネルでお問い合わせください。

このハンドブックドキュメントを、`gitlabdemo.com`・`gitlabdemo.cloud`・`gitlabtraining.cloud` ドメイン名を使用するすべてのリソースに関する唯一の信頼できる情報源（SSOT）としてください。

### デモシステムが必要な理由

- **GitLab.com を使えばよいのでは？** GitLab.com のほとんどの価値はデモできますが、AWS・GCP・ローカル VM/コンテナへの GitLab Omnibus インフラのデプロイが必要な管理機能が一部存在します。また、多くのエンタープライズ顧客がセルフマネージドを選択しているため、「顧客が本番環境で見るものを見せる」ことを意識しています。

- **インフラに特別な点はありますか？** デモシステムのインフラ自体は、適切な人員と技術投資があれば顧客やパートナー企業でも実現できる内容です。

- **トレーニングクラスやワークショップには、技術面またはスケーラビリティ上の特別な考慮事項がありますか？** はい。GitLab 製品は、ユーザーが一日を通じてさまざまな操作を行うことを想定して設計されており、小規模なリファレンスアーキテクチャは、数十人から数百人のユーザーが同じボタンを同時にクリックしたり、同じバックグラウンドジョブやパイプラインジョブを同時に実行したりするようには設計されていません。また、ユーザーはエフェメラルで、通常の GitLab 製品のユースケースでは一般的でない自動ガベージコレクション要件があります。これにより、特に Container Registry・Sidekiq・Kubernetes に関して特別なスケーラビリティの考慮が必要です。スケーラビリティの課題として以下の点が挙げられます。

  - 10 秒以内に開始される 500 本の同時パイプラインに対応するオートスケーリング Runner
  - 60 秒以内に発生する 500 件の同時レビューアプリ/デプロイに対応するオートスケーリング Kubernetes ノード
  - 大量のリソースを消費する Auto DevOps パイプライン
  - 不要な Kubernetes サービス（例：Postgres データベース）
  - ワークショップ中には不要な、負荷の高いテストジョブ（例：Code Quality、Dependency Scanning など）
  - 500 の同時プロジェクトインポートで失敗するプロジェクトのエクスポート/インポートのキュージョブ
  - インポート/エクスポートプロセスで既知の問題がある機能（例：Wiki）
  - 受講生への管理者アクセス権限（代替ユースケース）
  - パッケージレジストリのキャッシュとガベージコレクション
  - コンテナレジストリのキャッシュとガベージコレクション
  - レート制限のある Docker Hub からの CI イメージのプル
  - 非互換またはバグ修正でアップグレードされた CI イメージバージョン
  - `.gitlab-ci.yml` で CI/CD コンポーネントを使用する際に、背後で発生するジョブ負荷を把握していないこと
  - 実行するアクションのコメントのないカスタム `.gitlab-ci.yml` ファイルの使用
  - Dependency Proxy の設定（特に npm および maven の依存関係）
  - ステップバイステップの手順の欠如による受講生の設定ミスとエラー

## 共有環境 {#shared-environments}

これらの共有環境は、デモクラウドまたはトレーニングクラウドと呼ばれます。歴史的に、トレーニングユーザーはデモクラウドを使用していたため、会話によっては名前が混用されることがあります。

共有インスタンスの最新一覧、各インスタンスの用途、資格情報をリクエストすべき対象者については、Demo Architect Portal の [Sandbox Instance Request](https://cloud.gitlabdap.com/sandbox_instance_request)（社内限定）ページを参照してください。この一覧を同ページで管理することで、常に最新の状態を維持し、GitLab チームメンバーだけが閲覧できるようにしています。

Sales CS と記載されている主要な共有 Omnibus インスタンスは、グループやプロジェクトの作成、サンドボックス用途のために、すべてのチームメンバーが利用できます。チーム全体で共有されているため、[共有 Omnibus インスタンスへのアクセス](#access-shared-omnibus-instances)に記載されているとおり、自分のユーザーで **Can create top-level group** を有効にする場合を除き、Admin エリアは読み取り専用として扱ってください。セルフペーストレーニングクラスに登録している場合は、インスタンスの資格情報をリクエストせず、[招待コードの引き換え](#invitation-code-redemption)手順に従ってください。

## 独立した環境

- **AWS アカウント**： GitLab Sandbox Cloud を使用して独自の独立した AWS アカウントをプロビジョニングするための[手順](#aws-account-or-gcp-project-sandbox-cloud)をご覧ください。
- **GCP プロジェクト**： GitLab Sandbox Cloud を使用して独自の独立した GCP プロジェクトをプロビジョニングするための[手順](#aws-account-or-gcp-project-sandbox-cloud)をご覧ください。
- **AWS Elastic Kubernetes Service (EKS) クラスター**： AWS アカウントを使用して、GitLab ドキュメントの [EKS クラスターの追加](https://docs.gitlab.com/ee/user/project/clusters/add_eks_clusters.html)に従い EKS クラスターをプロビジョニングできます。
- **GCP Google Kubernetes Engine (GKE) クラスター**： `group-cs` GCP プロジェクトのクラスターについての質問は、Demo Systems Slack チャンネルで尋ねてください。クラスターを GitLab グループに追加するには、[グループレベルの Kubernetes クラスターで GitLab を設定するチュートリアル](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/)をご参照ください。

## はじめ方

共有環境へのアクセスは、[Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）からリクエストします。

### 共有 Omnibus インスタンスへのアクセス {#access-shared-omnibus-instances}

以下の手順により、[共有環境](#shared-environments)（Omnibus セルフマネージドインスタンス）の 1 つ以上にアクセスできます。

1. [Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）にアクセスし、**GitLab Team Member Login** をクリックします。
1. [Sandbox Instance Request](https://cloud.gitlabdap.com/sandbox_instance_request)（社内限定）フォームを開き、必要なインスタンスを選択します。ほとんどのチームメンバー向けの共有インスタンスは Sales CS です。
1. リクエストを送信します。
1. 資格情報の準備ができたら、1Password の Vault に新しいレコードとして保存します。
1. インスタンスを開き、生成された資格情報でサインインします。
1. 次回から直接アクセスできるように、インスタンスをブックマークします。
1. サインイン後、自分のユーザーがトップレベルグループを作成できることを確認します。Admin エリアで **Overview** > **Users** に移動し、自分のユーザーを選択して **Edit** を選び、**Can create top-level group** がチェックされていることを確認します。チェックされていない場合は、自分のユーザーだけでチェックしてください。これは、共有インスタンスを読み取り専用として扱うというガイダンスに対する、意図された唯一の例外です。その後、プロジェクトを保存するためのトップレベルグループを作成します。名前空間の一貫性とセキュリティのベストプラクティスのため、カスタム名のトップレベルグループを追加で作成しないでください。自分のグループまたは個人の名前空間の下であれば、サブグループやプロジェクトを自由に作成できます。
1. 各インスタンスには、共有 GitLab Runner と Kubernetes クラスターが事前設定されています。これらは CI/CD パイプライン実行時に使用するためのもので、共有環境では管理アクセスはありません。
1. `#demo-architect-partners` Slack チャンネルで他のメンバーに質問できます。

### AWS アカウントまたは GCP プロジェクト（Sandbox Cloud） {#aws-account-or-gcp-project-sandbox-cloud}

独自の AWS アカウントおよび/または GCP プロジェクトを作成し、集中課金のメリットを享受しながら独自のインフラをデプロイするための手順については、[Sandbox Realm](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) ハンドブックページをご参照ください。

### 招待コードの作成 {#invitation-code-creation}

[Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）にアクセスし、GitLab チームメンバーとしてサインインして、ニーズに応じた Content/Lab Request フォームに入力してください。ご質問は `#demo-architect-partners` Slack チャンネルまでお問い合わせください。

### 招待コードの引き換え {#invitation-code-redemption}

> **GitLab チームメンバーへの警告:** このプロセスでは既存の GitLab.com アカウントを使用するため、事前に準備が完了していることを確認してください。

1. [Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）にアクセスし、**Workshop/Lab Redemption** ボタンをクリックします。
1. **Sign In With GitLab** をクリックします。
1. インストラクターまたはコース資料から提供された招待コードを入力します。
1. **Submit Code** を押します。
1. 青い **My Group** ボタンをクリックすると、Learn Labs 上の GitLab グループの URL が新しいタブで開きます。

### ワークショップの準備

> ワークショップのプロセスは複数回イテレーションされました。最新バージョンのワークショップ準備プロセスは、セルフサービスモデルとして簡略化されています。

**ワークショッププレゼンターおよびサポートチームメンバーとして、サンプルプロジェクトとラボガイドコンテンツのインポートとテストを行う責任があります。プロジェクトや CI ジョブの設定ミス、パイプラインの失敗、GitLab Runner のエラーメッセージに対するサポートは提供されません。**

フィールドマーケティングチームとのスケジュール調整以外に、ピアレビューや承認プロセスはありません。これらの手順はベストプラクティスのガイダンスです。サポートが必要な場合は、`#demo-architect-partners` Slack チャンネルで同様のワークショップを実施した経験のある他のチームメンバーに相談してください。

ワークショップの準備手順は、[リクエストフォーム](https://cloud.gitlabdap.com/)（社内限定）に記入すると作成される Issue にリンクされます。

### ワークショップラボガイドカタログ

公式に作成されたワークショップコンテンツはすべて、[Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）の Content Discovery セクションで確認できます。

## バージョンアップグレードとメンテナンス

[月次リリース](/handbook/engineering/releases/)翌週の週末にバージョンアップグレードを実施します。週末のアップグレードは、エンジニアの都合に合わせて土曜日または日曜日のランダムな時間に行われ、約 30 分かかります。

リスクが高いと判断したアップデートや休暇期間中のアップデートは、アップグレードウィンドウを延期します。これは毎年 5 月の米国メモリアルデーの休日、12 月のクリスマス休暇、そして 1 月の年度末（販売デモが完了するまで設定フリーズ期間）に発生します。

パッチおよびセキュリティアップデートについては、通常、重要なアップデートのみアップグレードを実施し、Slack の `#demo-systems` チャンネルでメンテナンスウィンドウをアナウンスします。

### レガシーバージョンサポート

私たちは、最新の機能とソリューションが提供する価値を紹介するために、共有環境を最新バージョンに保ちます。

古いバージョンが必要なデモやサンドボックスのユースケースについては、Container Sandbox のコンテナや、Compute Sandbox の Omnibus を使用して GitLab インスタンスをデプロイできます。データの移行やパリティ設定のサポートは提供しません。

### GitLab Duo 機能

GitLab Duo はデモクラウド環境で有効化されています。管理者設定で自分や他のユーザーにシートを割り当てることができます。

## チュートリアル

- [グループレベルの Kubernetes クラスターで GitLab を設定する](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/)
- [Jenkins パイプラインの作成（廃止済み、教育目的のみ）](/handbook/customer-success/demo-systems/tutorials/integrations/create-jenkins-pipeline/)

## サンプルデータ

これまで、一貫したデモデータのセットは存在していませんでした。Solutions Architects はそれぞれ独自のデモデータを作成するか、他のチームメンバーのプロジェクトをフォークしています。

はじめるには、ハンドブックの [デモ準備](/handbook/solutions-architects/demonstrations/#demo-readiness) および [既存のデモ](/handbook/solutions-architects/demonstrations/#existing-demonstrations) ページをご参照ください。

進行中のクラウドソース OKR や [Communities of Practice](/handbook/customer-success/initiatives/communities-of-practice/) の開発に関する詳細は、<a href="https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/issues">Solutions Architecture Initiatives Issue トラッカー</a>をご参照ください。

## プロジェクトとコードリポジトリ

以下は、デモシステムを裏側で支えるプロジェクトです。ソースコードを自由に調べて学ぶことができます。各プロジェクトは、ソースコードや含まれる情報のセキュリティリスクに応じて `Public`（公開）または `Private`（非公開）に分類されています。

### デモシステム v2

- `Public` 基礎となる Terraform モジュールと Ansible ロール
  - [terraform-modules](https://gitlab.com/gitlab-com/demo-systems/terraform-modules)
  - [terraform-modules/gcp/gce/gcp-compute-instance-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gce/gcp-compute-instance-tf-module)
  - [terraform-modules/gcp/gke/gke-cluster-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gke/gke-cluster-tf-module)
  - [ansible-roles/omnibus](https://gitlab.com/gitlab-com/demo-systems/ansible-roles/omnibus)
- `Public` 組み立て済み Terraform モジュールと環境
  - [terraform-modules/gcp/gitlab/gitlab-omnibus-sandbox-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gitlab/gitlab-omnibus-sandbox-tf-module)
  - [environment-templates/gitlabtraining-shared-environment-template](https://gitlab.com/gitlab-com/demo-systems/environment-templates/gitlabtraining-shared-environment-template)
  - [INSTALL.md の例](https://gitlab.com/gitlab-com/demo-systems/environment-templates/gitlabtraining-shared-environment-template/-/blob/master/INSTALL.md)
- `Private` 環境の IaC — `terraform/terraform.tfvars.json` と CI パイプラインを参照
  - [environments](https://gitlab.com/gitlab-com/demo-systems/environments)
  - [environments/cs-gitlabdemo-cloud](https://gitlab.com/gitlab-com/demo-systems/environments/cs-gitlabdemo-cloud)
  - [environments/ilt-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/ilt-gitlabtraining-cloud-iac)
  - [environments/spt-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/spt-gitlabtraining-cloud-iac)
  - [environments/workshop-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/workshop-gitlabtraining-cloud-iac)
  - [environments/app-gitlabdemo-cloud](https://gitlab.com/gitlab-com/demo-systems/environments/app-gitlabdemo-cloud)
- `Public` 管理アプリケーション
  - [management-apps/gitlabdemo-cloud-app](https://gitlab.com/gitlab-com/demo-systems/management-apps/gitlabdemo-cloud-app)
  - [gitlab.com/hackystack/hackystack-portal](https://gitlab.com/hackystack/hackystack-portal)（オープンソース名前空間）
  - [sandbox-cloud/apps-tools/hackystack-portal](https://gitlab.com/gitlab-com/demo-systems/sandbox-cloud/apps-tools/hackystack-portal)（Ultimate 機能用ミラー）
- `Private - Ops` Sandbox Cloud インフラ
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-tf](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-tf)
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-ansible](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-ansible)
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-sandbox-cloud-dns-tf](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-sandbox-cloud-dns-tf)
- `Private` ランブック
  - [runbooks](https://gitlab.com/gitlab-com/demo-systems/runbooks)
  - [ops.gitlab.net/cloud-realms/apps-tools/runbook-docs](https://ops.gitlab.net/cloud-realms/apps-tools/runbook-docs)

### デモシステム v1（廃止済み）

デモシステム v1 のリポジトリは [gitlab.com/gitlab-com/customer-success/demo-systems](https://gitlab.com/gitlab-com/customer-success/demo-systems) にあります。

- `Private` Terraform モノリス環境とモジュール
  - [infrastructure/demosys-terraform](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform)
- `Private` Ansible モノリス設定とロール
  - [infrastructure/demosys-ansible](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-ansible)
- `Private` 管理アプリケーション（gitlabdemo.com）
  - [infrastructure/demosys-portal](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-portal)
- Issue トラッカー
  - [デモシステム](https://gitlab.com/gitlab-com/demo-systems/issue-tracker)

### 関連インフラのハンドブックリンク

- [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/)
- [GitLab インフラ標準](/handbook/company/infrastructure-standards/)
- [GitLab インフラ標準 — ラベルとタグ](/handbook/company/infrastructure-standards/labels-tags/)
- [デモシステム Kubernetes アーキテクチャドキュメント](/handbook/customer-success/demo-systems/infrastructure/kubernetes/)
- [デモシステムネットワークアーキテクチャとサブネットドキュメント](/handbook/customer-success/demo-systems/infrastructure/networking/)

### ヘルプとサポート

リアルタイムのサポートや迅速な対応には Slack を使用します。サポートの問い合わせ方法に迷った場合は、`#demo-systems` にお問い合わせください。30 分以上かかるタスクやプロジェクトには Issue トラッカーを使用します。内部チームコミュニケーションにメールは使用しません。

- [デモシステム Issue トラッカー](https://gitlab.com/gitlab-com/demo-systems/issue-tracker/-/issues)
- `#demo-systems` Slack チャンネル（デモクラウドのアナウンス・質問・技術サポート用）
- `#demo-systems-ps-education` Slack チャンネル（ILT/SPT トレーニングラボの議論用）
- `#demo-systems-workshops` Slack チャンネル（ワークショップの議論用）
- `#sandbox-cloud` Slack チャンネル（Sandbox Cloud のアナウンス用）
- `#sandbox-cloud-questions` Slack チャンネル（Sandbox Cloud の質問と技術サポート用）
- `demo-systems-admin@gitlab.com`（Slack を使用しないユーザー向け）
