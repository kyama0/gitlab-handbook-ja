---
title: "デモシステムのオンボーディング"
description: "このガイドは、CS Org の新入社員がデモシステムをセットアップし、製品デモを開始できるよう準備するためのものです。詳しい手順は、社内の Demo Systems Initial Set Up プロジェクトで管理されています。"
upstream_path: /handbook/customer-success/demo-systems/onboarding/
upstream_sha: 24ab594c7293ee988858a91b316798974a875cc1
translated_at: "2026-09-05T00:20:08+09:00"
translator: codex
stale: false
lastmod: "2026-09-04T15:13:44Z"
---

## デモシステムの初期セットアップ

### はじめに

現在のステップバイステップの手順を含む完全なオンボーディングガイドは、[Demo Systems Initial Set Up](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up) プロジェクト（社内限定）で管理されています。このページでは、必要な環境とリソースを要約します。

環境のセットアップ中に問題が発生した場合は、`#demo-architect-partners` Slack チャンネルで質問するか、[元のプロジェクトで Issue をオープン](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up/-/issues/new)するか、以下にリンクされているオフィスアワーに参加してください。

このガイドを完了するまでに、共有の [gitlab-learn-labs/webinars](https://gitlab.com/gitlab-learn-labs/webinars) デモグループを利用し、貢献できるようになることが目標です。

オンボーディングバディや同僚と協力してこのブロッカーを解消し、マージリクエストをオープンして手順を改善することで、全員のオンボーディングをより簡単にできます。

### デモシステム & 共有デモのオフィスアワー {#demo-systems--shared-demos-office-hours}

行き詰まったときは、隔週のオフィスアワーにお気軽に参加してご質問ください。EMEA/AMER と APJ のセッションがあります。スケジュールの詳細は、[オフィスアワーのノート](https://docs.google.com/document/d/1foLXt9XIptbl4ZLmMWR_TzhvFHzdo6sp_2dkSVCWL20/edit)（社内限定）に記載されています。

## 環境

デモの実施に利用できる環境は 3 種類あります。

### GitLab.com SaaS グループ

GitLab.com 上に、各 SaaS ライセンスティアの機能を紹介するための、自分専用のグループが 2 つ用意されます。

- `https://gitlab.com/gl-demo-ultimate-{handle}`
- `https://gitlab.com/gl-demo-premium-{handle}`

デモプロジェクトはすべてこれらのグループに保存してください。そうすることで、デモを個人の名前空間だけに置く場合の制約（[エピック](https://docs.gitlab.com/ee/user/group/epics/#epics)、[Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#gitlab-security-dashboards-and-security-center)、その他の[グループ機能](https://docs.gitlab.com/ee/user/group/#groups)など）を受けません。

- [ ] **アクション:** 自分でこれらのグループを作成しようとしないでください。[GitlabCom_Licensed_Demo_Group_Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitlabCom_Licensed_Demo_Group_Request)（社内限定）テンプレートを使用してアクセスリクエストをオープンしてください。

### セルフマネージド Omnibus 共有インスタンス

常時稼働している GitLab Demo Cloud のセルフマネージド GitLab Omnibus インスタンスを利用できます。このインスタンスでは管理者権限が付与され、GitLab SaaS では表示されないものも含め、Admin UI のすべての機能を紹介できます。また、GitLab.com で問題が発生した場合のデモのバックアップにもなります。

資格情報をプロビジョニングしたら、ログインして自分のユーザーがトップレベルグループを作成できることを確認します。Admin エリアで **Overview** > **Users** に移動し、自分のユーザーを選択して **Edit** を選び、**Can create top-level group** がチェックされていることを確認します。チェックされていない場合は、自分のユーザーだけでチェックしてください。その後、プロジェクトを保存するためのトップレベルグループを作成でき、必要に応じて学習用のテストプロジェクトも追加できます。これは共有環境であるため、自分のユーザーに対するこの 1 つの設定を除き、他のチームメンバーのデモを壊さないよう、管理者レベルの設定は変更しないでください。

- [ ] **アクション:** [セルフサービス手順](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances)に従い、Demo Architect Portal から Sales CS 共有インスタンスの資格情報をリクエストしてください。
- [ ] **アクション:** アナウンスを受け取り、問題が発生したときに安心して質問できる場として、`#demo-architect-partners` Slack チャンネルに参加してください。

### 個人用 AWS アカウントと GCP プロジェクト

各チームメンバーは [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) を使用して、自分でインフラをデプロイするための専用 AWS アカウントまたは GCP プロジェクトをプロビジョニングできます。

> オンボーディングでは GCP に焦点を当てます。AWS アカウントはすぐには必要ないため、後からこの手順に戻れます。

- [ ] **アクション:** [セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project)に従って GCP プロジェクトをプロビジョニングしてください。
- [ ] **アクション:** [セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project)に従って AWS アカウントをプロビジョニングしてください。
- [ ] **アクション:** [Terraform Environments](/handbook/company/infrastructure-standards/realms/sandbox/#terraform-environments)が Sandbox Cloud でどのように自動化されているかを読み、[利用可能なテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)を確認してください。[セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-create-a-terraform-environment)に従って、いずれかのテンプレートを使って環境を作成することも、AWS アカウントまたは GCP プロジェクト内に任意のリソースを手動で作成することもできます。

サービスの準備が完了するまで数分かかる場合があります。ログイン直後にエラーが表示された場合は、数分待ってから再度アカウントにアクセスしてください。

`#sandbox-cloud-questions` または `#demo-architect-partners` Slack チャンネルで他のメンバーに質問できます。

## グループ用 GitLab Agent for Kubernetes のセットアップ

この時点で、GitLab.com SaaS の自分専用グループと、[gitlabsandbox.cloud](https://gitlabsandbox.cloud/cloud)（社内限定）を使用して作成した GCP プロジェクトがあるはずです。

GKE Autopilot クラスターの作成、エージェントの登録とインストール、グループレベルの CI/CD 変数と Ingress の設定、サンプルアプリケーションのデプロイを行う現在のステップバイステップの手順は、[Demo Systems Initial Set Up](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up) プロジェクト（社内限定）で管理されています。所要時間は約 75 分です。

## サンプルデモプロジェクト

### すぐに使えるデモの追加

- [ ] **1 つのデモを個人の Ultimate グループにフォークする**

[https://gitlab.com/gitlab-learn-labs/webinars](https://gitlab.com/gitlab-learn-labs/webinars) にはウェビナー用の共有デモグループがあり、そこからプロジェクトを新しい Ultimate グループにフォークして、5 分以内に実行できます。

これらの共有プロジェクトの仕組みについて、[ドキュメント](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects)を読むことをお勧めします。これらのデモには、さまざまなトピックをどのように紹介するかについて推奨されるトークトラックも含まれているため、優れた内容になっています。

プロジェクトをフォークすることで自由に利用できるほか、元のプロジェクトにマージリクエストを提出して、バグの修正や新機能の追加について他のメンバーと協力できます。

これらのデモのセットアップの詳細については、[gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects)をご確認ください。

### 個人用 GitLab Runner のインストール

- [ ] **GitLab Runner をインストールする**

共有 Runner の利用可能な分数を使い切ってしまう場合にのみ、この手順が必要です。SAs + CSM/Es がコンピュート分数のクォータを使い切ることはよくあります。Runner のインストールと実行は高度なトピックですが、顧客から多くの質問が寄せられるため、このトピックに精通しておくのが最善です。挑戦する場合は、[ドキュメント](https://docs.gitlab.com/runner/install/)に従って別の方法で Runner をセットアップすることもできます。

GCP VM の作成、Docker と GitLab Runner のインストール、Runner の作成と登録を行う現在の手順は、[Demo Systems Initial Set Up](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up) プロジェクト（社内限定）で管理されています。所要時間は約 45 分です。

### エージェントのトラブルシューティング

エージェントまたはデプロイに失敗した場合は、[Demo Systems Initial Set Up](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up) プロジェクト（社内限定）のトラブルシューティングセクションを参照してください。グループレベルの `KUBE_CONTEXT` と `KUBE_INGRESS_BASE_DOMAIN` 変数、エージェント接続と `config.yaml` のエラー、Ingress IP の遅延、イメージのプル失敗について説明しています。また、`#f_agent_for_kubernetes` Slack チャンネルで進行中の問題を確認したり、[オフィスアワー](#demo-systems--shared-demos-office-hours)で質問したりできます。

### 次のステップ

自分のインスタンスとプロジェクトを起動できたら、私たちが実施している顧客向けワークショップをいくつか試してみてください。[Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）で **Content/Lab Request** を開き、**Customer Workshop/Lab** を選択して公式コースを選び、リクエストフォームで **Internal training** を選択します。有料サービス専用の Self Paced Training（SPT）は選択しないでください。これらのワークショップでは Advanced CI/CD と DevSecOps の基本を学べ、後から参照する際にも役立ちます。

### 追加メモ

- `Learn Labs Group` または `a group that was set up for you` と記載されている場合、それは上記で作成したグループを指します。

- どちらのラボにも `Kubernetes Agent` セクションがありますが、すでに完了しているためスキップできます。

- インストラクターと一緒に進めたい場合に利用できる録画が用意されていますが、録画の冒頭でグループを引き換えようとしないでください。

公式のワークショップコンテンツは、[Demo Architect Portal](https://cloud.gitlabdap.com/)（社内限定）の Content Discovery セクションにあります。
