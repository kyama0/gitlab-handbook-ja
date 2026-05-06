---
title: "デモシステム"
description: "GitLab デモシステムは、GitLab の Customer Success・Marketing・Sales・Training チームが、様々な非同期・ライブの場面で GitLab の機能・価値・ワークフローをデモするためのインフラを提供します。"
upstream_path: /handbook/customer-success/demo-systems/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:17:48Z"
translator: claude
stale: false
---

## デモシステムの概要

GitLab デモシステムは、GitLab の Customer Success・Marketing・Sales・Training チームが、様々な非同期・ライブの場面で GitLab の機能・価値・ワークフローをデモするためのインフラを提供します。

デモシステムは、[Jeff Martin](https://gitlab.com/jeffersonmartin) が 2019 年 10 月にシニアデモシステムエンジニアとして設計を開始したものです。現在は ([デモアーキテクチャ](/handbook/solutions-architects/center-of-excellence/demo-architecture/)) チームの [Logan Stucker](https://gitlab.com/lfstucker) と [Seraphine Young](https://gitlab.com/seraphiney)、そして [Scott Cosentino](https://gitlab.com/scottcosentinogitlab)（[GitLab University](https://university.gitlab.com)）がデモシステムの主要メンテナーとして引き継ぎ、トレーニングインストラクターや受講生の [GitLab Learn Labs](https://gitlab.com/gitlab-learn-labs) サポートも担当しています。

利用可能なデモサンプルプロジェクトに関するご質問や、失敗したパイプラインジョブのトラブルシューティングについては、`#demo-architect-partners` Slack チャンネルでお問い合わせください。

インフラやアクセスリクエストに関するご質問は、以下の Slack チャンネルで `@Logan Stucker` にタグ付けしてください。

- `#demo-systems` — SA・CSM・PSE チームメンバーのご質問や技術サポート用。トレーニング・ワークショップ関連の投稿は対象外です。
- `#demo-architect-partners` — ワークショップ関連の議論用。
- `#demo-systems-ps-education` — Professional Services の ILT/SPT 等に関する議論用。
- `#sandbox-cloud-questions` — [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/)（AWS アカウントおよび GCP プロジェクト）のサポート用。

このハンドブックドキュメントを、`gitlabdemo.com`・`gitlabdemo.cloud`・`gitlabtraining.cloud` ドメイン名を使用するすべてのリソースに関する唯一の信頼できる情報源（SSOT）としてください。

### デモシステムが必要な理由

- **GitLab.com を使えばよいのでは？** GitLab.com のほとんどの価値はデモできますが、AWS・GCP・ローカル VM/コンテナへの GitLab Omnibus インフラのデプロイが必要な管理機能が一部存在します。また、多くのエンタープライズ顧客がセルフマネージドを選択しているため、「顧客が本番環境で見るものを見せる」ことを意識しています。

- **インフラに特別な点はありますか？** デモシステムのインフラ自体は、適切な人員と技術投資があれば顧客やパートナー企業でも実現できる内容です。

- **トレーニングクラスやワークショップには特別なスケーラビリティ上の考慮事項がありますか？** はい。GitLab 製品は、ユーザーが一日を通じてさまざまな操作を行うことを想定して設計されており、小規模なリファレンスアーキテクチャは、数十人から数百人のユーザーが同じボタンを同時にクリックしたり、同じバックグラウンドジョブやパイプラインジョブを同時に実行したりするようには設計されていません。また、ユーザーはエフェメラルで、通常の GitLab 製品のユースケースでは一般的でない自動ガベージコレクション要件があります。これにより、特に Container Registry・Sidekiq・Kubernetes に関して特別なスケーラビリティの考慮が必要です。スケーラビリティの課題として以下の点が挙げられます。

  - 10 秒で起動する 500 の同時パイプライン向けのオートスケーリングランナー
  - 60 秒で 500 の同時レビューアプリ/デプロイ向けのオートスケーリング Kubernetes ノード
  - 大量のリソースを消費する Auto DevOps パイプライン
  - 不要な Kubernetes サービス（例：Postgres データベース）
  - ワークショップ中に不要な集中テストジョブ（例：Code Quality・Dependency Scanning 等）
  - 500 の同時プロジェクトインポートで失敗するプロジェクトのエクスポート/インポートのキュージョブ
  - インポート/エクスポートプロセスで既知の問題がある機能（例：Wiki）
  - 受講生への管理者アクセス権限（代替ユースケース）
  - パッケージレジストリのキャッシュとガベージコレクション
  - コンテナレジストリのキャッシュとガベージコレクション
  - レート制限のある Docker Hub からの CI イメージのプル
  - 非互換またはバグ修正でアップグレードされた CI イメージバージョン
  - `.gitlab-ci.yml` でテンプレートを使用する際の基礎的なジョブ負荷の見落とし
  - 実行するアクションのコメントのないカスタム `.gitlab-ci.yml` ファイルの使用
  - Dependency Proxy の設定（特に npm および maven の依存関係）
  - ステップバイステップの手順の欠如による受講生の設定ミスとエラー

## 共有環境

これらの共有環境は、デモクラウドまたはトレーニングクラウドと呼ばれます。歴史的に、トレーニングユーザーはデモクラウドを使用していたため、会話によっては名前が混用されることがあります。


{{% panel header="**デモシステム v1 廃止のお知らせ**" header-bg="warning" %}}
<code>gitlab-core.us.gitlabdemo.cloud</code> インスタンスは 2021-04-20 に廃止され、2021-06-03 に削除されました。データのバックアップはありません。<code>cs.gitlabdemo.cloud</code> インスタンス（直接の置き換え）へのアクセス手順については、<a href="#access-shared-omnibus-instances">共有 Omnibus インスタンスへのアクセス</a>をご参照ください。
{{% /panel %}}


- `cs.gitlabdemo.cloud` — すべてのチームメンバーがアクセスできる主要な GitLab Omnibus インスタンスです。セルフマネージド Omnibus インスタンス上でグループ・プロジェクト・サンドボックスを作成できます。これは全チームメンバーが共有する環境ですので、管理者エリアは読み取り専用として扱ってください。
- `cs-gitlabamazonq.com` — Amazon Q を中心としたイネーブルメントとデモに使用されます。
- `gitlab-amazonq.com` — Amazon Q の公開インスタンスとして使用されます。
- `ilt.gitlabtraining.cloud` — インストラクター主導のトレーニングクラスに使用されます。インストラクターでサンプルプロジェクトのインポートやクラス内の全受講生のグループを確認するための管理者アクセスが必要な場合は、このインスタンスの資格情報を生成してください。
- `spt.gitlabtraining.cloud` — EdCast で公開されているセルフペーストレーニングクラスに使用されます。教材設計または自習型の受講生コースの認定採点に関わる場合のみ、このインスタンスの資格情報を生成してください。自習型トレーニングに登録している場合は、[招待コードの引き換え](#invitation-code-redemption)の手順に従い、トレーニングラボガイドの手順のために設定済みのインスタンスにアクセスするための一時的な資格情報を生成してください。
- `workshop.gitlabtraining.cloud` — 定期的に開催されるイネーブルメントおよびフィールドマーケティングのワークショップに使用されます。ラボサンプルプロジェクトやラボガイドの作成、プレゼンテーション、またはワークショップのサポートに関わる場合は、このインスタンスの資格情報を生成してください。

## 独立した環境

- **AWS アカウント**: GitLab Sandbox Cloud を使用して独自の独立した AWS アカウントをプロビジョニングするための[手順](#aws-account-or-gcp-project-sandbox-cloud)をご覧ください。
- **GCP プロジェクト**: GitLab Sandbox Cloud を使用して独自の独立した GCP プロジェクトをプロビジョニングするための[手順](#aws-account-or-gcp-project-sandbox-cloud)をご覧ください。
- **AWS Elastic Kubernetes Service (EKS) クラスター**: AWS アカウントを使用して、GitLab ドキュメントの [EKS クラスターの追加](https://docs.gitlab.com/ee/user/project/clusters/add_eks_clusters.html)に従い EKS クラスターをプロビジョニングできます。
- **GCP Google Kubernetes Engine (GKE) クラスター**: `group-cs` GCP プロジェクトのクラスターについては Jeff Martin にメッセージを送ってください。クラスターを GitLab グループに追加するには、[グループレベルの Kubernetes クラスターで GitLab を設定するチュートリアル](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/)をご参照ください。

## はじめ方

これらの手順は、[gitlabdemo.cloud](https://gitlabdemo.cloud) ポータルを使用するデモシステム v2 向けです。[gitlabdemo.com](https://gitlabdemo.com) を使用していたデモシステム v1 インフラは、トレーニングクラスの招待コードを除いて廃止されました。

### 共有 Omnibus インスタンスへのアクセス {#access-shared-omnibus-instances}

以下の手順により、[共有環境](#shared-environments)（Omnibus セルフマネージドインスタンス）の 1 つ以上にアクセスできます。

> デモクラウドポータルとプロビジョニングシステムは、[Jeff Martin](https://gitlab.com/jeffersonmartin) が作成したオープンソースプロジェクト [gitlabdemo-cloud-app](https://gitlab.com/gitlab-com/demo-systems/management-apps/gitlabdemo-cloud-app) によって提供されています。

1. GitLab Demo Cloud ポータル（[https://gitlabdemo.cloud](https://gitlabdemo.cloud)）にアクセスし、Okta の資格情報でサインインします。
1. ナビゲーションの Environments リンクをクリックするか、ダッシュボードの **View Environments** ボタンをクリックします。
1. アクセスしたいインスタンスを探し、**Generate Credentials** ボタンをクリックします。
1. 資格情報が生成されたら、**View Credentials** ボタンをクリックします。
1. 生成された資格情報を 1Password の Vault に新しいレコードとして保存します。
1. **Access Instance** ボタンをクリックすると、GitLab Omnibus インスタンスの URL が新しいタブで開きます。
1. インスタンスをブックマークしておくと、次回以降のアクセスが簡単になります。資格情報の生成（アクセスリクエスト）時のみ [https://gitlabdemo.cloud](https://gitlabdemo.cloud) ポータルにアクセスする必要があります。
1. サインイン後、プロジェクトを保存するためのグループが事前に作成されています。名前空間の一貫性とセキュリティのベストプラクティスのため、カスタム名の他のトップレベルグループは作成しないでください。事前作成されたグループまたは個人の名前空間の下であれば、サブグループやプロジェクトを自由に作成できます。
1. 各インスタンスには、共有 GitLab Runner と Kubernetes クラスターが事前設定されています。これらは CI/CD パイプライン実行時に使用するためのもので、共有環境では管理アクセスはありません。
1. `#cs-questions` Slack チャンネルで他のメンバーに質問できます。

### AWS アカウントまたは GCP プロジェクト（Sandbox Cloud）

独自の AWS アカウントおよび/または GCP プロジェクトを作成し、集中課金のメリットを享受しながら独自のインフラをデプロイするための手順については、[Sandbox Realm](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) ハンドブックページをご参照ください。

### 招待コードの作成 {#invitation-code-creation}

https://cloud.gitlabdap.com/ にアクセスし、GitLab チームメンバーとしてサインインして、ニーズに応じたコンテンツ/ラボリクエストフォームに入力してください。ご質問は `#demo-architect-partners` Slack チャンネルまでお問い合わせください。

### 招待コードの引き換え {#invitation-code-redemption}

> **GitLab チームメンバーへの警告:** このプロセスでは既存の GitLab.com アカウントを使用するため、事前に準備が完了していることを確認してください。

1. [https://cloud.gitlabdap.com/](https://cloud.gitlabdap.com/) にアクセスし、**Workshop/Lab Redemption** ボタンをクリックします。
1. **Sign In With GitLab** をクリックします。
1. インストラクターまたはコース資料から提供された招待コードを入力します。
1. **Submit Code** を押します。
1. 青い **My Group** ボタンをクリックすると、Learn Labs 上の GitLab グループの URL が新しいタブで開きます。

### ワークショップの準備

> ワークショップのプロセスは複数回イテレーションされました。最新バージョンのワークショップ準備プロセスは、セルフサービスモデルとして簡略化されています。

**ワークショッププレゼンターおよびサポートチームメンバーとして、サンプルプロジェクトとラボガイドコンテンツのインポートとテストを行う責任があります。プロジェクトや CI ジョブの設定ミス、パイプラインの失敗、GitLab Runner のエラーメッセージに対するサポートは提供されません。**

フィールドマーケティングチームとのスケジュール調整以外に、ピアレビューや承認プロセスはありません。これらの手順はベストプラクティスのガイダンスです。サポートが必要な場合は、`#demo-architect-partners` Slack チャンネルで同様のワークショップを実施した経験のある他のチームメンバーに相談してください。

ワークショップの準備手順は、[こちら](https://cloud.gitlabdap.com/)のリクエストフォームに記入すると作成される Issue にリンクされます。

### ワークショップラボガイドカタログ

公式に作成されたワークショップコンテンツはすべて、[デモアーキテクトポータル](https://cloud.gitlabdap.com/)のコンテンツディスカバリーセクションで確認できます。

## バージョンアップグレードとメンテナンス

[月次リリース](/handbook/engineering/releases/)翌週の週末にバージョンアップグレードを実施します。週末のアップグレードは、エンジニアの都合に合わせて土曜日または日曜日のランダムな時間に行われ、約 30 分かかります。

リスクが高いと判断したアップデートや休暇期間中のアップデートは、アップグレードウィンドウを延期します。これは毎年 5 月の米国メモリアルデーの休日、12 月のクリスマス休暇、そして 1 月の年度末（販売デモが完了するまで設定フリーズ期間）に発生します。

パッチおよびセキュリティアップデートについては、通常、重要なアップデートのみアップグレードを実施し、Slack の `#demo-systems` チャンネルでメンテナンスウィンドウをアナウンスします。

### レガシーバージョンサポート

私たちは、最新の機能とソリューションが提供する価値を紹介するために、共有環境を最新バージョンに保ちます。

古いバージョンが必要なデモやサンドボックスのユースケースについては、コンテナサンドボックスのコンテナや、コンピュートサンドボックスの Omnibus を使用して GitLab インスタンスをデプロイできます。データの移行やパリティ設定のサポートは提供しません。

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

### デモシステム v2（廃止済み）

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
