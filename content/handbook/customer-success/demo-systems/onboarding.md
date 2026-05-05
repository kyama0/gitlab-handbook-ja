---
title: "デモシステムのオンボーディング"
description: "このガイドは、CS 組織の新入社員がデモシステムをセットアップし、製品デモを開始できるようにするためのものです"
upstream_path: /handbook/customer-success/demo-systems/onboarding/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T02:17:48Z"
translator: claude
stale: false
---

## デモシステムの初期セットアップ

### はじめに

環境のセットアップ中に問題が発生した場合は、[元のプロジェクトで Issue をオープン](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up/-/issues/new)するか、以下にリンクされているオフィスアワーに参加してください。

このガイドを完了することで、この共有デモグループを使用・貢献できるようになることが目標です: <https://gitlab.com/gitlab-learn-labs/webinars>

オンボーディングバディや同僚と協力してこのブロッカーを解消し、マージリクエストを作成して手順を改善し、全員のオンボーディングを簡単にしましょう。

### デモシステム・共有デモオフィスアワー

行き詰まったときにご質問がある場合は、このドキュメントの上部にリンクされている週次オフィスアワーにお気軽に参加してください: [デモシステムオンボーディングリンク](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing)

## 環境

デモを実施するための 3 種類の環境があります。

### GitLab.com SaaS グループ

GitLab.com には、各 SaaS ライセンスティアの機能を披露できる 2 つの専用グループがあります。

- `https://gitlab.com/gl-demo-ultimate-{handle}`
- `https://gitlab.com/gl-demo-premium-{handle}`

デモプロジェクトをすべてこのグループに保存することをお勧めします。個人の名前空間にデモを保管しようとする場合の制限（[Epic](https://docs.gitlab.com/ee/user/group/epics/#epics)・[セキュリティダッシュボード](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#gitlab-security-dashboards-and-security-center)・その他の[グループ機能](https://docs.gitlab.com/ee/user/group/#groups)等）に縛られません。

- [ ] **アクション:** 自分でこれらのグループを作成しようとしないでください。[GitlabCom_Licensed_Demo_Group_Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitlabCom_Licensed_Demo_Group_Request) テンプレートを使用してアクセスリクエストをオープンしてください。

## セルフマネージド Omnibus 共有インスタンス

Admin UI のすべての機能（GitLab SaaS では表示されない機能を含む）を示すために管理者権限を持つ、常時稼働の GitLab デモクラウドのセルフマネージド GitLab Omnibus インスタンスにアクセスできます。これは、GitLab.com で問題が発生した場合のデモのバックアップとしても機能します。

資格情報をプロビジョニングすると、プロジェクトを保管できる自分の名前の新しいトップレベルグループが作成されます。これは共有環境ですので、他のチームメンバーのデモを壊さないように管理者レベルの設定は変更しないでください。

- [ ] **アクション:** [セルフサービス手順](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances)に従って、`cs.gitlabdemo.cloud` インスタンスの資格情報をプロビジョニングしてください。
- [ ] **アクション:** システムメンテナンスのアナウンスや問題が発生した際の質問のために、`#demo-systems` Slack チャンネルに参加してください。

## 個人用 AWS アカウントと GCP プロジェクト

各チームメンバーは [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) を使用して、集中課金のメリットを受けながら独自のインフラをデプロイするための AWS アカウントまたは GCP プロジェクトをプロビジョニングできます。

> オンボーディングの目的上、GCP に焦点を当てます。AWS アカウントはすぐには必要ないため、後で戻ることができます。

- [ ] **アクション:** [セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project)に従って GCP プロジェクトをプロビジョニングしてください。
- [ ] **アクション:** [セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project)に従って AWS アカウントをプロビジョニングしてください。
- [ ] **アクション:** [Terraform 環境](/handbook/company/infrastructure-standards/realms/sandbox/#terraform-environments)が Sandbox Cloud でどのように自動化されているかを読み、[利用可能なテンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates)を調べてください。[セルフサービス手順](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-create-a-terraform-environment)に従ってテンプレートの 1 つを使用して環境を作成するか、AWS アカウントまたは GCP プロジェクトでリソースを手動で作成できます。

サービスが準備できるまで数分かかる場合があります。ログインしてすぐにエラーが表示された場合は、数分待ってからアカウントへのアクセスを再試行してください。

`#sandbox-cloud-questions` または [#cs-questions](https://gitlab.slack.com/archives/CR5JLJEEM) Slack チャンネルで他のメンバーに質問し、`@Logan Stucker` にタグ付けすることができます。

## グループ用の GitLab Agent for Kubernetes のセットアップ

この時点で、GitLab.com SaaS の独自グループと [gitlabsandbox.cloud](https://gitlabsandbox.cloud/cloud) を使用して作成した GCP プロジェクトがあるはずです。

### タスク 1. GKE クラスター

> 最初のタスクは GKE 上にクラスターをセットアップすることです。

1. [Google Cloud コンソール](https://console.cloud.google.com/)にログインします。
1. [Kubernetes Engine](https://console.cloud.google.com/kubernetes/) の API が有効になっているか確認します。
1. [Compute Engine](https://console.cloud.google.com/compute/) の API が有効になっているか確認します。
1. [**Kubernetes Engine > クラスター**](https://console.cloud.google.com/kubernetes/list/)に移動します。
1. **作成** をクリックします。
1. ポップアップモーダルウィンドウで ***Autopilot: Google がクラスターを管理（推奨）*** の横の **設定** をクリックします。
1. クラスターに問題のない識別可能な名前を付けます。
1. 最も近いリージョンを選択します。
1. 残りの設定はそのままにします。
1. **作成** をクリックします。クラスターの構築が開始され、約 10 分かかります。

> クラスターが起動するのを待つ間、最初のステップでセットアップした Ultimate グループでクラスター管理と Kubernetes エージェント接続をセットアップします。そこに移動してみましょう。

### タスク 2. GitLab Agent for Kubernetes とクラスター管理

> このエージェントにより、任意のプロジェクトをグループに取り込み、セットアップしたエージェントを使用してデプロイできます。GCP と AWS の両方にセットアップしたい場合は、2 つのサブグループを定義し、それぞれにエージェントとクラスター管理が必要です。

1. Ultimate グループに移動します。
1. **新しいプロジェクト** をクリックします。
1. フォローアップ画面で **テンプレートから作成** をクリックします。
1. テンプレートオプションで **GitLab Cluster Management** プロジェクトを見つけて **テンプレートを使用** をクリックします。
1. プロジェクトに `Cluster Management` という名前を付けます。
1. **Private** の可視性レベルのままにします。
1. **プロジェクトを作成** をクリックします。
1. プロジェクトが作成されるまで数秒待った後、**Web IDE** をクリックして GitLab Agent for Kubernetes のセットアップを開始します。
1. まず新しいファイルをクリックし、以下のスニペットをコピーして **ファイルを作成** をクリックします: `.gitlab/agents/primary-agent/config.yaml`
1. `config.yaml` 内で以下のコードを追加します。& の値は、Web IDE が開いている URL から取得できる正しいプロジェクトとグループのパスに編集してください。行き詰まった場合は、[こちら](https://docs.gitlab.com/user/clusters/agent/ci_cd_workflow/#restrict-project-and-group-access-to-specific-environments)のエージェント設定を参照してください。

   ```yaml
    ci_access:
      projects:
      # Adjust the line below for your Project
      # For Example: - id: gitlab-learn-labs/webinars/cicd-demo-project
        - id: {path-to-your-group}/project-1
        - id: {path-to-your-group}/project-2
      groups:
      # Adjust the line below for your Project
      # For Example: - id: gitlab-learn-labs/webinars
        - id: {path-to-your-group}
   ```

   > **上記のパス例には `https://gitlab.com` が含まれず、その後のパスのみが含まれていることに注意してください**
   >
   > この設定は、エージェントがマニフェストの変更のためにクラスター管理プロジェクトを参照し、グループ内の他のプロジェクトがデプロイに使用できるようにすることを指示しています。

1. エージェントの設定が完了したら、変更を `main` ブランチにコミットします。
1. コミットしたら、左上のプロジェクト名をクリックしてプロジェクトの概要ページに戻ります。
1. ランディングページの左側ナビゲーションメニューから **インフラ > Kubernetes クラスター** をクリックします。
1. **クラスターを接続** をクリックします。
1. ポップアップモーダルウィンドウでドロップダウンから新しいエージェント `primary-agent` を選択し、**登録** をクリックします。

   > デモ中、GitLab Agent for Kubernetes と旧来の証明書アプローチの違いについて質問される場合があります。簡単に言えば、エージェントははるかに安全で柔軟性も高いですが、この質問に備えてさらに調査することをお勧めします。

1. 表示されるポップアップで、helm コマンドを後で参照するためにローカルにコピーしておきます。エージェントを接続できるようになったので、Google Cloud コンソールに戻ってクラスターが作成されているか確認します。

### タスク 3. エージェントの接続

1. クラスターが準備できていれば、ステータス列に緑のチェックマークが表示されます。緑の場合はクラスターをクリックします。
1. 結果のページで **接続** をクリックします。
1. **クラウドシェルで実行** をクリックします。シェルが起動するのを待ちます。
1. GCP が自動生成したコマンドを実行して正しいクラスターに接続します。認証を求めるポップアップが表示されたら **認証** を押します。
1. GitLab でエージェントをセットアップする際に取得した helm コマンドをコピーして gcloud ターミナルに貼り付けます。
1. GitLab.com のタブに戻り、エージェント接続のポップアップが表示されている場合は閉じます。エージェントが接続を確立したことを確認するためにページを更新します。
1. GCP クラスターに接続されている GCP Cloud Shell で、以下のコマンドでログを表示できます: `kubectl logs -f -l=app=gitlab-agent -n gitlab-agent-primary-agent`
1. 次に、ページ上部のパンくずリストを使用してグループのトップレベルに移動します。グループレベルにいることを確認し（プロジェクトレベルではない）、左側ナビゲーションメニューから **設定 > CI/CD** をクリックします。

   > グループレベルに変数を追加しないことが、このセットアップを試みる際に最もよくある間違いです。時間をかけて慎重に読んでください。

1. CI/CD 設定で **変数** セクションを見つけて展開します。

1. **変数を追加** をクリックし、以下のキーバリューペアの例を使用して変数を追加します。

   ```text
   KUBE_CONTEXT:{path-to-your-group-and-project}:primary-agent
   ```

   ```text
   例
   KUBE_CONTEXT:gitlab-learn-labs/sample-project-testing/cm-test:primary-agent
   ```

   > この変数は、アクセス権を持つプロジェクトがエージェント設定の参照先を知るために使用されます。これがないと、クラスター管理プロジェクトは、どのエージェントの変更を比較すべきかがわからないため失敗します。

1. Protected と Masked の選択を解除します。
1. 完了したら **変数を追加** をクリックします。
1. 次に、左上のグループ名をクリックしてクラスター管理プロジェクトに戻ります。
1. 再び **Web IDE** をクリックしてコードを変更します。
1. Web IDE に入ったら `helmfile.yaml` を開きます。
1. 19 行目のコメントを解除します: `- path: applications/ingress/helmfile.yaml`

   > 後で cert manager もセットアップできます。その際、nip.io の証明書制限のため、独自のドメイン名または sslip.io を使用する必要があることを覚えておいてください。

1. 完了したら master に変更をコミットします。今度はウェブページの左下にパイプラインが起動するはずです。左下の # から始まるハイパーリンクをクリックして、クラスター管理パイプラインのビューを取得します。

   > 19 行目にはクラスターに ingress コントローラーをインストールするコマンドが含まれています。これにより GCP がアプリケーションをパブリック IP でアクセス可能にします。

1. 最初のジョブが完了するまで数分待ちます。すべてが正しくセットアップされていれば、ジョブが成功し、次に同期ジョブを手動で開始できます。ジョブが失敗した場合は、先に進む前にトラブルシューティングのセクションを参照してください。
1. パイプラインが完全に実行されたら（約 5 分）、Google Cloud コンソールを開いているタブに戻り、gcloud ターミナルで以下のコマンドを実行します。

   ```bash
   kubectl get service --all-namespaces
   ```

1. `gitlab-managed-apps` 名前空間で `ingress-ingress-nginx-controller` という名前のサービスを探します。EXTERNAL-IP の値をコピーしてローカルで使用します。
1. ingress の値が取得できたら、最後に GitLab.com タブに戻り、グループのトップレベルに移動します。アプリケーションデプロイが機能するようにするため、グループレベルにいることを確認しながら変数を追加します。
1. グループレベルの左側ナビゲーションメニューから **設定 > CI/CD** をクリックし、変数セクションを見つけます。
1. セクションを展開して **変数を追加** をクリックします。
1. ***protected*** と ***mask*** がチェックされていないこと、その他のデフォルト設定が同じであることを確認しながら、既存の変数に加えて以下の変数を追加します。{your-external-ip} の値は gcloud コンソールからコピーした ingress IP です:

   ```text
   KUBE_INGRESS_BASE_DOMAIN:{your-external-ip}.nip.io
   ```

### タスク 4. Ruby on Rails アプリケーションのデプロイ

1. すべての変数がセットアップされたので、準備完了です。
1. グループのプロジェクト概要ページに戻ります。
1. **新しいプロジェクト**、**テンプレートから作成** をクリックします。
1. ***Ruby on Rails*** プロジェクトを選択し、任意の名前で公開としてインポートします。
1. プロジェクトのインポート後、左側ナビゲーションメニューから **設定 > CI/CD** をクリックします。
1. ***Auto DevOps*** セクションを展開します。
1. ***Default to Auto DevOps pipeline*** をクリックし、***デプロイ戦略*** は最初のオプションのままにして **変更を保存** します。
1. 右上のプロジェクト名をクリックし、プロジェクトのホームページで **Web IDE** をクリックします。
1. IDE 内で ***.gitlab-ci.yml*** ファイルを見つけて削除します。
1. 削除したら master に変更をコミットし、Auto DevOps パイプラインが新しいエージェントとインフラを使用してアプリケーションをデプロイする様子を確認します。

   > このステップはエージェントが正しくセットアップされたかどうかも確認します。Auto DevOps パイプラインが下の図と異なる場合は、エージェントの設定が正しいか確認してください。yaml 全体を無効にする単一のインデントが欠けている可能性があります。

   ![正しい Auto DevOps パイプライン](/images/customer-success/demo-systems/ADO.png)

1. オンボーディングの範囲外ですが、このグループにプロジェクトを追加していくにつれて、エージェントを変更し、Kubernetes API を使用した[ユーザーインパーソネーション](https://docs.gitlab.com/user/clusters/agent/ci_cd_workflow/#impersonate-the-agent)を設定することもできます。以下の例は、複数のプロジェクトを追加し始めた場合のマニフェスト定義の例です:

  ```yaml
    ci_access:
      projects:
      # Adjust the line below for your Project
      # For Example: - id: gitlab-learn-labs/webinars/cicd-demo-project
        - id: {path-to-your-group}/project-1
        - id: {path-to-your-group}/project-2
      groups:
      # Adjust the line below for your Project
      # For Example: - id: gitlab-learn-labs/webinars
        - id: {path-to-your-group}
   ```

## サンプルデモプロジェクト

### すぐに使えるデモの追加

- [ ] **1 つのデモを個人の Ultimate グループにフォークする**

[https://gitlab.com/gitlab-learn-labs/webinars](https://gitlab.com/gitlab-learn-labs/webinars) にウェビナー用の共有デモグループがあり、プロジェクトをフォークして新しい Ultimate グループに取り込み、5 分以内に実行できます。

これらの共有プロジェクトがどのように機能するかについての[ドキュメント](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects)を読むことをお勧めします。これらのデモは、さまざまなトピックをどのように提示するかについての推奨トークトラックも含まれているため優れています。

プロジェクトをフォークすることで、好きなように使用し、バグを修正したり新機能を追加したりするために元のプロジェクトに MR を提出して他のメンバーと協力できます。

これらのデモのセットアップの詳細は [gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects) をご確認ください。

### 個人用 GitLab Runner のインストール

- [ ] **GitLab Runner をインストールする**

共有 Runner の分数が不足していることがわかった場合のみ必要です。SA・CSM/E がコンピュート分数のクォータを使い切ることはよくあります。エージェントのインストールと実行は高度なトピックですが、顧客からよく質問されるため、このトピックに精通していることが最善です。勇気があれば、[ドキュメント](https://docs.gitlab.com/runner/install/)に従って別の方法で Runner をセットアップすることもできます。

1. 先に進む前に Ubuntu VM をセットアップする必要があります。GCP プロジェクトに移動し、**Compute Engine > VM インスタンス** をクリックします。次に **インスタンスを作成** をクリックします。

1. 作成ページで名前（Runner 関連のもの）を追加し、**ブートディスク** セクションまで設定をそのままにします。**変更** をクリックし、***オペレーティングシステム*** を Ubuntu、***バージョン*** を 20.04 LTS x86/64, amd64 に変更します。次に **選択** をクリックします。

   > 「デバイスに空き容量がありません」と表示された場合は、後で[ボリュームサイズを増加](https://cloud.google.com/compute/docs/disks/resize-persistent-disk)できます。

1. **ファイアウォール** セクションまでスクロールし、**HTTP トラフィックを許可** と **HTTPS トラフィックを許可** の両方が選択されていることを確認します。

1. **作成** をクリックし、ポッドが起動するのを待ちます。起動したら **SSH > gcloud コマンドを表示** をクリックします。マシンに gcloud がすでにセットアップされている場合は、コマンドをコピーして任意のターミナルで実行します。セットアップされていない場合は、**クラウドシェルで実行** をクリックするとコマンドが自動的に貼り付けられます。ただし、クラウドシェルは信頼性が低いため、ローカル接続をセットアップすることをお勧めします。

1. ターミナルシェルで、まず以下のコマンドを実行して特権モードに入ります:

   ```console
   sudo -i
   ```

1. Docker をインストールします。

   ```console
   sudo apt-get update
   sudo apt install docker.io
   ```

   > 成功しない場合は、[Docker のドキュメント](https://docs.docker.com/engine/install/ubuntu/)を参照してください。

1. GitLab Runner をインストールします。

   ```console
   # GitLab リポジトリを追加する
   curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
   ```

   ```console
   # GitLab Runner パッケージをインストールする
   sudo apt-get install gitlab-runner
   ```

1. 以下のコマンドで Runner のステータスを確認できます:

    ```console
    sudo gitlab-runner status
    ```

1. Runner が起動して実行されたので、接続する必要があります。

   - グループレベルで設定する場合は、グループに移動し、左側ナビゲーションメニューから **CI/CD > Runner** をクリックします。右上隅で **グループ Runner を登録** を選択し、登録トークンをローカルにコピーします。
   - プロジェクトレベルで設定する場合は、プロジェクトに移動し、左側ナビゲーションメニューから **設定 > CICD** をクリックして下にスクロールし、**Runner** セクションを展開して登録トークンをローカルにコピーします。
   - 詳細については、[Runner の登録](https://docs.gitlab.com/runner/register/)のドキュメントを参照してください。

1. このコマンドをテキストエディターにコピーし、`REGISTRATION_TOKEN` プレースホルダーをローカルにコピーしたトークンに置き換えます。コマンドをターミナルにコピーして実行します。

   ```console
   sudo gitlab-runner register -n \
     --url https://gitlab.com/ \
     --registration-token REGISTRATION_TOKEN \
     --executor docker \
     --description "My Docker Runner" \
     --docker-image "docker:20.10.16" \
     --docker-privileged \
     --docker-volumes "/certs/client"
   ```

   - グループ Runner を設定した場合は、グループの **CI/CD > Runner** ページに戻ります。Runner が **オンライン** ステータスで一覧表示されているはずです。

     > `/etc/gitlab-runner/config.toml` にある Runner の設定を変更することを検討してください（例：concurrent、詳細は[こちら](https://docs.gitlab.com/runner/configuration/advanced-configuration.html)）。

   - プロジェクト Runner を設定した場合は、**設定 > CICD** ページに戻り、**Runner** セクションを展開します。Runner が **オンライン** ステータスで一覧表示されているはずです。

### エージェントのトラブルシューティング

- `KUBE_CONTEXT` と `KUBE_INGRESS_BASE_DOMAIN` の変数がプロジェクトレベルではなくグループレベルで設定されているか確認してください。

- `KUBE_CONTEXT` と `KUBE_INGRESS_BASE_DOMAIN` の変数に末尾のスペースやインデントがないか確認してください。

- エージェントの `config.yaml` が正しいグループまたはプロジェクトを指しているか確認してください。

- gcloud シェルで `kubectl logs -f -l=app=gitlab-agent -n gitlab-agent-primary-agent` を実行して、エラーがログに記録されていないか確認します。

- `#f_agent_for_kubernetes` Slack チャンネルを確認して、チームが進行中の問題を言及していないか確認します。

- このハンドブックページでさらなるトラブルシューティングを試してください: <https://docs.gitlab.com/ee/user/clusters/agent/troubleshooting.html>

- 週次オフィスアワーに参加してください（リンクはこちら）: [デモシステムオンボーディングリンク](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing)

### 次のステップ

独自のインスタンスとプロジェクトが起動したので、以下のリンクをクリックして私たちが実施している顧客向けワークショップのいくつかを試してみてください。

アクセスには GitLab が提供したメールアドレスでサインアップしてください。これらのワークショップでは、Advanced CI/CD と DevSecOps の基本を学べ、後々の参考資料としても活用できます。

### 追加メモ

- `Learn Labs グループ` または `あなたのために設定されたグループ` と記載されている場合、それは上記で作成したグループのことです。

- 両方のラボに `Kubernetes Agent` のセクションがありますが、すでにそれを完了しているため、スキップできます。

- インストラクターと一緒に進めたい場合のために録画が提供されています。ただし、録画の冒頭でグループを引き換えようとしないでください。

追加リソースについては、[デモシステムオンボーディングリンク](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing) Google ドキュメントをご参照ください。
