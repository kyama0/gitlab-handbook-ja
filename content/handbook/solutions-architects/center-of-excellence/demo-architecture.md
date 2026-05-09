---
title: "Demo Architect の提供サービス"
description: "このガイドでは Demo Architect チームが提供するすべてのサービスを概説します"
upstream_path: /handbook/solutions-architects/center-of-excellence/demo-architecture/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## Demo Architect の提供サービス

### 用語の定義

すべての提供サービスを紹介する前に、まず用語を整理しておく必要があります。GitLab がワークショップやラボなどに使う言葉は、以前の職場での呼び方と異なるかもしれません。

- ワークショップ (Workshop): これは多くの場合、Field Marketing チームが主催する大規模なオンライン (時には対面) のイベントを指します。これらのイベントの目標参加者数は約 250 名で、フルの GitLab スタッフが MC を務め、質問対応にあたります。実態としては、講師が個々の参加者と直接やり取りすることはないため、ハンズオン演習付きのウェビナーに近いものです。
- ラボ (Lab): ハンズオン演習、ワークショップなどとも呼ばれます。一般的に「ワークショップ」と呼ぶような、より小規模で個別性の高いイベントです。あらかじめ計画されたインタラクティブなハンズオンアクティビティを通じて、顧客にパーソナライズされたコンテンツを販売することを目的とします。
- デモ (Demos): このドキュメントでデモという場合、自分のコールで使えるすぐに利用できるプロジェクト/スクリプト/動画を指します。ハンズオン要素がない場合は Demo カテゴリに該当します。
- ランチ＆ラーン (Lunch & Learns): 主に CSE/CSM グループが、より大人数の聴衆に向けて行うデモを表すために使う用語です。CICD のようなトピックを短時間で扱い、ハンズオン部分はないのが一般的です。ここにあるコンテンツのほぼすべてはこの形式に変換できます。
- コホート (Cohorts): CSE チームが主催する、ラボとワークショップの中間に位置するセッションを指す用語です。コンテンツは通常、重要な内容に絞ったワークショップですが、参加者がライブで質問できる設定になっています。

### ワークショップ

ワークショップは、一般的に FFM チームと連携して 3 時間のセッション (一部例外あり) として提供されます。このコンテンツは公開されていて多様なスキルセットの参加者が集まるため、あまり技術的に深くは踏み込みません。誰もがイベントから何かを学べるようにするためです。FMM チームと連携していない場合は、ラボの方が適している可能性が高いです。

このセクションのコンテンツは、通常各リリースの少なくとも 1 か月後に更新され、ワークショップの実施前後にも小規模な更新が行われます。

#### GitLab Security & Compliance Workshop

- [スライド](https://drive.google.com/drive/folders/1kWp97Whuf-OH_1wSq9DpcQbSUPZtYhfA)
- [コンテンツ](https://gitlab.com/gitlab-learn-labs/sample-projects/security-and-compliance-workshop)
- 何を販売/カバーするか: Ultimate 中心。このワークショップの大部分は、パイプラインでセキュリティスキャンを実行し、その結果に基づいてコンプライアンスを強制する方法を示します。
- 追加のインフラが必要か?: いいえ
- その他の Security & Compliance リソース: **Lab** | Demo | Guided Trial | [POV](/handbook/solutions-architects/playbooks/pov/compliance/) | *Education Services* | *Professional Services*

#### GitLab DevSecOps Workshop

- [スライド](https://drive.google.com/drive/folders/1kWp97Whuf-OH_1wSq9DpcQbSUPZtYhfA)
- [コンテンツ](https://play.instruqt.com/gitlab/tracks/devsecops-workshop)
- 何を販売/カバーするか: Ultimate 中心。このワークショップは基本的に Security & Compliance ワークショップからコンプライアンス要素を除き、ライブアプリケーションのデプロイを加えたものです。99% の場合は、Security & Compliance ワークショップを実施する方が理にかなっています。
- クラウドインフラが必要か?: はい
- その他の DevSecOps リソース: **Lab** | Demo | Guided Trial | [POV](/handbook/solutions-architects/playbooks/pov/devsecops/) | *Education Services* | *Professional Services*

#### GitLab Advanced CI/CD Workshop

- [スライド](https://drive.google.com/drive/folders/1JyA-_8ymrG5axRWas2ZHX1k5mT4dubqn)
- [コンテンツ](https://play.instruqt.com/gitlab/tracks/advanced-cicd)
- 何を販売/カバーするか: Premium または Ultimate に向いています。このワークショップでは高度なトピック (DAG、Includes、Needs など) を基本的な方法で紹介します。CICD 初心者がワークショップから何かを得て、エキスパートが学んだ内容を高度な機能にどう適用できるかを理解することを目指します。
- クラウドインフラが必要か?: はい
- その他の Advanced CI/CD リソース: **Lab** | *Demo* | *Guided Trial* | [POV](/handbook/solutions-architects/playbooks/pov/automation/) | *Education Services* | *Professional Services*

#### GitLab AI Workshop

- [スライド](https://drive.google.com/drive/folders/1OsGp7HyrPO3tC0OFxtVHuD_kEiP_6dzY)
- [コンテンツ](https://gitlab.com/gitlab-learn-labs/sample-projects/ai-workshop)
- 何を販売/カバーするか: Ultimate 中心。このワークショップは Code Suggestions ワークショップでありながら、参加者に他のすべての AI 機能を有効化して自分でテストする方法も示すものと考えてください。Suggested Reviewers のような機能を後で確認する時間を参加者に与えるため、必ず週の早い時期に実施してください。
- クラウドインフラが必要か?: いいえ
- その他の AI リソース: **Lab** | Demo | Guided Trial | [POV](/handbook/solutions-architects/playbooks/pov/ai/) | *Education Services* | *Professional Services*

#### GitLab Basics Workshop

- [スライド](https://drive.google.com/drive/folders/11ETvCDMUMp7pNlZdkLXaCU71nOprTjLa)
- [コンテンツ](https://gitlab.com/gitlab-learn-labs/sample-projects/gitlab-basics-issues)
- 何を販売/カバーするか: 任意のティア。GitLab の基本と、特定のトピックに深入りせずに多くのものを 1 つのプラットフォームで結びつけるという事実に焦点を当てます。
- クラウドインフラが必要か?: いいえ
- その他の Basics リソース: **Lab** | Demo | Guided Trial | [POV](/handbook/solutions-architects/playbooks/pov/platform/) | *Education Services* | *Professional Services*

#### GitLab PM Workshop

- [スライド](https://drive.google.com/drive/folders/1Hi8aeh2oDQpCkvKTamss06Vw85S4aKim)
- [コンテンツ](https://gitlab.com/gitlab-learn-labs/sample-projects/pm-workshop-issues)
- 何を販売/カバーするか: Premium または Ultimate に向いています。プランニングステージのみに焦点を当てるため、参加者が技術的なワークショップを期待していないことを必ず確認してください。
- クラウドインフラが必要か?: いいえ
- その他の PM リソース: **Lab** | Demo | Guided Trial | *POV* | *Education Services* | *Professional Services*

#### GitOps Workshop

*一時休止中。質問は Logan Stucker までご連絡ください*

- [スライド](https://drive.google.com/drive/folders/1xFxULChxjLmiQYjIENKNpbiifhhDfvo2)
- [コンテンツ](https://play.instruqt.com/gitlab/tracks/gitlab-gitops-workshop)
- 何を販売/カバーするか: Premium と Ultimate の両方に適しています。このワークショップの真のメリットは、参加者が IAC やアプリケーションのデプロイにエージェントを使う方法を習得できることです。今後は Flux についても深掘りする予定です。
- クラウドインフラが必要か?: はい

#### X to GitLab Workshop

*( GitHub、Bitbucket など)*

- [スライド](https://drive.google.com/drive/folders/1L_kd6QudSWcvAKDM-h6oPvvC6LiNj_ER)
- [コンテンツ](https://gitlab.com/gitlab-learn-labs/sample-projects)
- 何を販売/カバーするか: 様々なトピックに対応できますが、通常は GitHub または Bitbucket です。GitLab を初めて使う方に対し、プラットフォーム移行がいかに簡単で、何が欠けているかを示すことが目標です。
- クラウドインフラが必要か?: 場合により必要

#### ワークショップのフィードバック/アンケートプロセス

ワークショップ参加者の体験がまだ新鮮なうちにフィードバックを収集する、再現可能なプロセスを構築することを目指しています。QR コード付きのアンケートスライドを用意し、ウェビナー終了直前にチャットでリンクを共有します。回答は 2 分以内で完了します。

これは最初のイテレーションで、最終的にはプロセスを自動化する予定です。時間とともに、このフィードバックは改善点の特定、新しい資料の開発、ワークショップの提供方法の洗練に役立ち、参加者に常に価値ある体験を提供できるようにします。

ご自身のフィードバック用 QR コードをコピーして生成するには、下記の **手順** に従ってください。

- [手順](https://gitlab.com/gitlab-com/customer-success/demo-engineering/workshop-resources/-/blob/main/Workshop%20Survey/Survey-steps.md?ref_type=heads)

- [アンケートテンプレート](https://drive.google.com/drive/folders/1s_d5Klh9qzBO2uF8wYvJKh-6LzjT3aDy)

### ラボ/ハンズオンコンテンツ

ラボの目的は、SA/CSM/CSE が顧客にハンズオンデモを実施して受注に結びつけるための準備作業をすべて代行することです。ラボは初回受注を獲得したり、顧客に Ultimate の価値を実感してもらう鍵として、絶大な成功を収めてきました。トライアルの代替としても優れており、ハンズオン演習を短いトライアルに組み込むことで、見せたい機能を確実にテストしてもらえます。そのためコンテンツは多くの場合カスタマイズが必要で、ワークショップや CS デモのような決まったテンプレートはありません。代わりに、それらを最終形に到達するための出発点として使うことが多いです。ラボをリクエストするには、まず [Demo Architect Portal](https://cloud.gitlabdap.com/) からフォームに記入し、その後 Demo Architect の 1 名がイントロコールを設定してコンテンツを確認し、プロセスを開始します。以下は過去に実施したラボの例です。

- Interactive Security Lab: このラボの目的は、参加者に GitLab を使ってセキュリティ問題を解決する実体験を提供することでした。小規模な対面イベントだったため、多くの Issue を含む安全でないプロジェクトを用意し、それらを参加者に割り当てました。GitLab + セキュリティの短い導入の後、2 時間のハンズオングループワークで、参加者は割り当てられた Issue で協力してプロジェクトをセキュアにしました。その後のレトロとまとめで、価値を実感してもらえました。

- Customer Lab Series: GitLab Premium を一部使っていたものの主に BitBucket アカウントだった顧客がありました。SA + CSM のチームが結集し、BitBucket から GitLab への移行方法を一通り紹介し、その後 GitLab の Ultimate セキュリティ機能を詳しく見る、20 件以上のラボシリーズを提供しました。これによりライセンスと Ultimate の両方で大幅なアップセルにつながりました。

- 0 to Hero Labs: このラボシリーズは公共部門で実施されており、SA がオンサイト訪問をスケジュールしてラボの 1 日を計画します。午前は PM と GitLab 基礎セッションで全員が製品に慣れ、午後はハンズオンあり/なしの GitLab セキュリティのベストプラクティスをハイライトするセッションです。GitLab を聞いたことのない人と既存顧客が混在する場合、特に素晴らしいパイプライン創出につながっています。セッションが長いため、議論の時間が十分にあり、参加者はその分野での製品の本当の価値を語り合えます。

## 共有 CS デモ

これらのデモは、CS 組織の誰かが「子パイプラインの動作を見せてもらえますか?」のような質問を受けたときに、車輪の再発明をせずに、トピックをカバーしたすぐに使えるアプリケーションのカタログから利用するためのものです。誰でも貢献でき、コンテンツを最新に保ち、トピックの説明に役立つ適切なスクリプトや録画を提供するのは貢献者の責任です。月初には CS と SA の Slack チャンネルもチェックしてください。今月のプロジェクトを発表します。

### AI

[AI](https://gitlab.com/gitlab-learn-labs/webinars/ai)

- [Code Suggestions Python Demo](https://gitlab.com/gitlab-learn-labs/webinars/ai/code-suggestions-python-demo): このデモは、基本的な Simply Simple Notes アプリケーションをベースに、Code Suggestions を使って RESTful API を素早く完成させ、安全でないアプリケーションを書き直す方法を示します。

- [GitLab Duo Java Demo](https://gitlab.com/gitlab-learn-labs/webinars/ai/just-a-web-app-gitlab-duo): このデモは、シンプルなアプリケーションをベースに、GitLab Duo の全機能を使って脆弱性を素早く修正し、コードをより速く生成する方法を示します。

### Analytics

[Analytics](https://gitlab.com/gitlab-learn-labs/webinars/analytics)

- [DORA Metrics Demo](https://gitlab.com/gitlab-learn-labs/webinars/analytics/dora-metrics-demo): このデモは、GitLab が収集する組み込みの DORA メトリクスと VSA ダッシュボードをどう活用できるかを示すためのものです。

### CICD

[CICD](https://gitlab.com/gitlab-learn-labs/webinars/cicd)

- [child-project](https://gitlab.com/gitlab-learn-labs/webinars/cicd/child-project): CICD-Samples プロジェクトで使用される子パイプラインです。そのデモに含まれる以外では使い道があまりありません。

- [CICD Project](https://gitlab.com/gitlab-learn-labs/webinars/cicd/cicd-demo-project): このデモは、DAG からセキュリティスキャナー、テンプレートまで CICD の基礎をすべてカバーします。各セクションの完成形は別ブランチで確認できます。

- [CICD-Samples](https://gitlab.com/gitlab-learn-labs/webinars/cicd/cicd-samples): このプロジェクトは様々な CI/CD シナリオのサンプルを提供します。@samer.akkoub が作成し、主に GitLab の主要な CI/CD 機能をデモするために使っていました。

- [Docker App Example](https://gitlab.com/gitlab-learn-labs/webinars/cicd/docker-app-example): このプロジェクトは Docker イメージから構築され GitLab CI/CD でデプロイされるウェブサイトを特長とします。Docker イメージがビルドされ、Container Registry にアップロードされた後、Container Scanning がビルドされたイメージをプルしてスキャンを実施し、最後にアプリケーションが GitLab Pages に公開されます。

- [Merge Trains](https://gitlab.com/gitlab-learn-labs/webinars/cicd/merge-trains): マージトレインの威力を見せるための基本的な CICD 例です。

- [monorepo](https://gitlab.com/gitlab-learn-labs/webinars/cicd/monorepo): このプロジェクトは、3 つの個別のプロジェクトフォルダを持つモノレポアプリケーションの概念実証で、変更されたプロジェクトに応じてパイプラインを実行します。

- [secure-cicd-demo](https://gitlab.com/gitlab-learn-labs/webinars/cicd/secure-cicd-demo): このリポジトリの目的は、複数の Attestor を使った Binary Authorization Attestation の積み上げによる CICD フローをデモすることです。

- [sfdx-cicd-demo](https://gitlab.com/gitlab-learn-labs/webinars/cicd/sfdx-cicd-demo): ウェビナー <https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci_package_dev.htm> で使われたサンプルリポジトリです。

- [sfdx-cicd-template](https://gitlab.com/gitlab-learn-labs/webinars/cicd/sfdx-cicd-template): このプロジェクトには、パッケージ開発モデルに従う Salesforce DX プロジェクトで動作する完全に設定された CI パイプラインが含まれています。
このプロジェクトの .yml ファイルのコピーを自分のプロジェクトに含めるか、インポートできます。
クイックスタートの例については sfdx/sfdx-project-template を参照してください。

### GitHub Competitive Demos

[GitHub Competitive Demos](https://gitlab.com/gitlab-learn-labs/webinars/github-competitive-demos)

近日公開予定です!

### Infrastructure

[Infrastructure](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure)

- [Automatic Labeler](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/automatic-labeler): label プロジェクトと API tester プロジェクトと連携し、夜間スクリプトとして実行され、各プロジェクトにすべてのコンプライアンスフレームワークラベルを適用します。GitLab CICD を使って GitLab API を操作することに興味がある人にとって良いデモです。

- [Cluster Management](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/cluster-management): いくつかの静的デモが使う、クラスター管理プロジェクトの例です。

- [Demo Foundation](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/demo-foundation): GCP でグループ + エージェント + クラスターの立ち上げを自動化する Terraform デモです。

- [gitlab-cluster-management-eks](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-cluster-management-eks): EKS 用のクラスター管理プロジェクトの例です。

- [gitlab-cluster-management-gke](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-cluster-management-gke): GKE 用のクラスター管理プロジェクトの例です。

- [gitlab-iac-demo](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-iac-demo): このプロジェクトは Ultimate の機能をハイライトする GitOps パイプラインのデモに使えます。Infrastructure as Code と構成管理の最良のツールを組み合わせつつ、典型的な日常開発デモに似たワークフローに従います。

- [gitlab-terraform-eks](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-eks): EKS で gitlab エージェントを使う Terraform アプローチです。

- [gitlab-terraform-gke](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-gke): GKE で gitlab エージェントを使う Terraform アプローチです。

- [gitlab-terraform-gke-argocd](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-gke-argocd): このリポジトリの目的は、ArgoCD があらかじめインストールされた GKE クラスターを立ち上げ、GitOps でクラスターを構成できるようにすることです。

- [gitlab-terraform-gke-flux-config](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-gke-flux-config): flux を使った GKE 用の Terraform プロジェクト例です。gitlab-terraform-gke-fluxcd プロジェクトとも連携します。

- [gitlab-terraform-gke-fluxcd](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-gke-fluxcd): このリポジトリの目的は、GKE クラスターを立ち上げ、FluxCD で GitOps を構成することです。

- [gitlab-terraform-gke-fluxcd-apps](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitlab-terraform-gke-fluxcd-apps): gitlab-terraform-gke-fluxcd プロジェクトと連携します。

- [GitOps Demo](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/gitops-demo): エージェントを通じて GitLab がどう GitOps を実現するかを示す基本的なデモです。

- [IaC Scanning](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/iac-scanning): 14.5 で kics をベースにサポートされた IaC Scanning。Terraform 化された IAC スキャナーデモです。

- [IaC Terraform](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/iac-terraform): GitLab 組み込み機能を活用するための GitLab 内 IaC/GitOps Terraform プロジェクトです。
このプロジェクトは init、validate、build、deploy のステージを実行する GitOps パイプラインを作成し、EC2 環境を作ります。

- [IaC with Ansible](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/iac-with-ansible): GitLab が Ansible で IAC をどう実現するかを示します。

- [Infrastructure As Code Scanning](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/infrastructure-as-code-scanning): GitLab 14.5 で導入された Infrastructure as Code Scanning のデモプロジェクトです。

- [terraform-multi-env](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure/terraform-multi-env): このプロジェクトは、3 つの個別の環境フォルダを持つ単一プロジェクトの概念実証で、変更された環境フォルダに応じてパイプラインを実行します。

### Project Management

[Project Management](https://gitlab.com/gitlab-learn-labs/webinars/project-management)

- [Agile Demo](https://gitlab.com/gitlab-learn-labs/webinars/project-management/agile-demo): 複数のプロジェクトでアジャイルに GitLab のプラン機能を使う方法を示す、いくつかのプロジェクトのグループです。

- [PM Tools Demo](https://gitlab.com/gitlab-learn-labs/webinars/project-management/pm-tools-demo): このデモには PM ワークショップと同じプランニング Issue が含まれており、当社のプランニング機能の数々を披露できます。

- [spring-sample](https://gitlab.com/gitlab-learn-labs/webinars/project-management/spring-sample): このデモは GitLab と Jira の連携の見せ方を案内し、自分専用の無料 Jira インスタンスの立ち上げ手順も提供します。

### Security

[Security](https://gitlab.com/gitlab-learn-labs/webinars/security)

- [API DAST Security Scanner](https://gitlab.com/gitlab-learn-labs/webinars/security/api-dast-security-scanner): graphql、har、openapi、postman、soap 用の DAST セキュリティスキャナーです。

- [API Fuzzing Security Scanner](https://gitlab.com/gitlab-learn-labs/webinars/security/api-fuzzing-security-scanner): graphql、postman、soap 用のファジングスキャナーです。

- [Coverage Fuzzing Security Scanner](https://gitlab.com/gitlab-learn-labs/webinars/security/coverage-fuzzing-security-scanner): afl、cpp、go、heartbleed、java、js、python、ruby、rust、swift など多数のファジング例があります。

- [External Required Scans](https://gitlab.com/gitlab-learn-labs/webinars/security/external-required-scans): このプロジェクトは、コンプライアンスフレームワーク領域内のプロジェクト向けに利用できるいくつかのスキャナーを含む単一の CI/CD YAML ファイルを示します。複数の外部スキャナーとスキャン結果を識別し、対応可能な様々な結果をプロジェクトに提供することを目的とします。

- [External Scans with C++ Compliance](https://gitlab.com/gitlab-learn-labs/webinars/security/external-scans-with-c-compliance): このプロジェクトは、GitLab スキャナーと外部スキャナーを組み合わせた C/C++ スキャンの動作例を提供します。LibFuzzer スキャナーの例を提供する GitLab プロジェクトからフォークされました。LibFuzzer はかなり特殊なため、他のスキャナーを追加する出発点として良いと感じました。

- [OWASP Juice Shop](https://gitlab.com/gitlab-learn-labs/webinars/security/juice-shop): GitLab 用の OWASP セキュリティデモです。競合他社が当社のプラットフォーム向けの罠を仕掛けているため、使用前に練習してください。

- [Security Dashboard Project](https://gitlab.com/gitlab-learn-labs/webinars/security/security-dashboard-project): セキュリティスキャンの最終結果を確認できる静的プロジェクトです。

- [Security Demo Project](https://gitlab.com/gitlab-learn-labs/webinars/security/workshop-project): セキュリティスキャナーを追加して結果をパースする方法を示すための基本的なセキュリティデモです。

- [Tanuki Trust](https://gitlab.com/gitlab-learn-labs/webinars/tanuki-enterprises): 大規模プロジェクトで、PM だけでなくセキュリティや CICD のデモにも最適です。gitlab.com 上のグループの全体像を顧客に見せたい場合に素晴らしいです。

### 共有 CS インフラストラクチャ

[Shared CS Infrastructure](https://gitlab.com/gitlab-learn-labs/webinars/infrastructure)

CS チームメンバーは、チームメイトが既に行ったインフラの立ち上げに常に時間を費やして車輪の再発明をしてきました。この共有インフラの目的は、その時間の無駄をなくし、CS チームメンバーが動作させるための作業ではなく、統合自体に集中できるようにすることです。アクセスを得るには、各プロジェクトのアクセスフォームに記入するだけです。アプリケーションに見せたかった機能 (例: Grafana プラグイン) が欠けていることに気づいたら、機能拡張フォームの提出も歓迎します。使いたかったプロジェクトが見当たらない? その場合は [Dev Issue Board](https://gitlab.com/gitlab-learn-labs/webinars/dev-issue-board/-/issues) に Issue を作成してください。SA の 1 人がタスクを引き受けます。なお、インフラには 2 種類あります。1 つ目はコストをかけずに簡単に立ち上げられるアプリケーションです。Snyk や Auth0 などは、無料クラウドティアの使い方や、デモを行うための回避策の README を提供しますが、これらを当社で立ち上げる予定はありません。

- Grafana
- Hashicorp Vault
- JFrog Artifactory
- Jenkins
- Remote Development Host
- Terraform GCP GKE
- Azure
- Jira

### Live Talk/Keynote リソース

[Live Talk/Keynote Resources](https://gitlab.com/gitlab-learn-labs/webinars/live-presentation-talk-tracks)

このグループには、各種カンファレンスでの基調講演や公開トークに活用できるスライドデッキとトークトラックが満載です。多くの場合録画も付いており、過去に他の従業員が成功した例を確認できます。これらはデモ録画ではなく、GitLab 製品のコンセプトと価値に関するトークです。
