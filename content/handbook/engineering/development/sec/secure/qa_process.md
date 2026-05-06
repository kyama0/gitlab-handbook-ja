---
title: Secure QA プロセス
upstream_path: /handbook/engineering/development/sec/secure/qa_process/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## すべてはマージリクエストから始まります

私たちは、プロダクトへのすべての貢献がフォーマルなレビューを伴うマージリクエストを経ることを求め、要求しています。そのため、私たちは GitLab の開発者ドキュメントに記載されている[マージリクエストワークフロー](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html)と[コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)に従っています。ただし、これらのドキュメントからいくつかの項目を強調し、レビュアーと著者に対するいくつかの追加的な考慮事項を追加したいと思います。

### マージリクエストレビュアーへの追加的な考慮事項

* ピアやコミュニティメンバーのブロックを解除する最善の方法は、[タイムリーにフィードバックを提供すること](/handbook/engineering/workflow/code-review/#review-turnaround-time)です。キャパシティがいっぱいで、私たちが目指す SLO 内でレビューを行えない場合は、別のレビュアーを見つけられるようにマージリクエストでその旨を知らせてください。

### マージリクエスト著者への追加的な考慮事項

* グローバルに分散した組織であることは、人々の間のやり取りに遅延を生じさせることがあり、頻繁にそうなります。変更へのフィードバックを受け取るのが予想より長くかかっても、[個人的に受け取らないでください](/handbook/values/#assume-positive-intent)。

## Secure QA プロセス

Secure アナライザーは、サポートされる言語/フレームワークのダウンストリームテストプロジェクトに対して新しいコミットを実行することで、マージリクエストを検証します（例: `Dependency Scanning` の [`gemnasium` アナライザー](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium) は `php`、`go`、およびその[他いくつかの](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium/-/blob/v2.21.0/.gitlab-ci.yml#L35-89)テストプロジェクトに対してテストをトリガーします）。検証は、生成されたレポート出力をアナライザーのリポジトリにコミットされた期待レポートと比較することで行われます。アナライザーの動作が変更された場合、期待レポートと生成されたレポートの内容が一致しなくなるため、パイプラインは失敗します。

`Dependency Scanning`、`SAST`、`Secrets Detection` アナライザーの期待値は、プロジェクトの `qa/expect` ディレクトリに、各フレームワーク/言語タイプのサブディレクトリとともに格納されています。

### テストプロジェクト

テストプロジェクトは Secure の [tests サブグループ](https://gitlab.com/gitlab-org/security-products/tests/)にあり、その使用方法とベストプラクティスは [common README](https://gitlab.com/gitlab-org/security-products/tests/common/-/blob/master/README.md) に記載されています。

### アナライザーの動作変更

アナライザーへの変更がレポート出力を変更する場合、期待レポートも変更する必要があります。

`SAST`、`Dependency Scanning`、`Secret Detection` では、期待レポートはアナライザーとともに、言語/フレームワークのサブディレクトリ内のテストプロジェクトに対応するパスに格納されています。例えば、`java-maven` の依存関係をスキャンするための期待レポートは [gemnasium-maven/qa/expect](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-maven/-/tree/master/qa/expect/java-maven) に格納されています。このようにして、アナライザーの動作が変更された場合、期待値を同じコミットで変更してパッケージ化できます。

`License Compliance` については、期待値はテストプロジェクトの `qa/expect` ディレクトリ（例: [ruby-bundler/qa/expect](https://gitlab.com/gitlab-org/security-products/tests/ruby-bundler/-/tree/master/qa/expect)）に格納されています。

詳細については、[Security Products テストプロジェクトリポジトリ](https://gitlab.com/gitlab-org/security-products/tests/common/-/blob/master/README.md)で確認できます。

### OpenShift でのテスト

現在、OpenShift の自動テストはありません。変更がアナライザーの動作に OpenShift 上でどのような影響を与えるかを確認したい場合は、OpenShift 環境をセットアップしてテストできます。これを行うには2つの方法があります。

#### 1. 自動スクリプト

ディストリビューションチームが OpenShift クラスターをセットアップするための[自動スクリプト](https://gitlab.com/gitlab-org/distribution/infrastructure/openshift-provisioning)を共有しています。私たちのグループではテストされていませんが、この方法はクラスター作成プロセスを効率化できる可能性があります。

#### 2. 手動セットアップ

[GitLab Sandbox Cloud](https://gitlabsandbox.cloud/) へのアクセスがすでにある場合、以下の手順に従って OpenShift クラスターをセットアップできます。

1. https://gitlabsandbox.cloud/ にログインします。
1. [Static Analysis Group EC2 開発マシンセットアップガイド](/handbook/engineering/development/sec/secure/static-analysis/ec2_dev_environment_setup/#static-analysis-group-ec2-development-machine-setup-guide)のステップ `1` から `3` に従って、AWS サンドボックスアカウントを作成し、AWS コンソールにログインします。
1. AWS コンソールにログインしたら、左上の検索フィールドで「OpenShift」を検索します。Services カテゴリの下に `Red Hat OpenShift Service on AWS` が表示されます。ROSA は AWS との統合された OpenShift エクスペリエンスを提供します。この検索結果をクリックして進みます。

   ![openshift-service-on-aws-search-results](/images/handbook/engineering/development/sec/secure/openshift/openshift-service-on-aws-search-results.png)

1. `Red Hat OpenShift Service on AWS (ROSA)` ランディングページにリダイレクトされます。左サイドバーの `Get started` リンク、または `Get started` オレンジボタンをクリックします。

   ![openshift-service-on-aws-landing-page](/images/handbook/engineering/development/sec/secure/openshift/openshift-service-on-aws-landing-page.png)

1. `Verify ROSA prerequisites` ページにリダイレクトされます。

   ![verify-rosa-prerequisites](/images/handbook/engineering/development/sec/secure/openshift/verify-rosa-prerequisites.png)

   `ROSA enablement` セクションの `Enable ROSA HCP and ROSA classic` ボタンをクリックし、`I agree to share my AWS account number...` のチェックボックスをオンにしたままにします。`ROSA enablement` セクションには「お客様の ROSA 有効化リクエストは保留中であり、解決に数分かかる場合があります。エラーを確認できるようにこのページを開いたままにすることをお勧めします。」と表示されます。

1. 数分後、`ROSA enablement` セクションが更新され、以下のメッセージが表示されます。

   * `You have agreed to share your AWS account number and email address with red hat.`
   * `You have enabled ROSA and HCP and ROSA classic.`

   ![rosa-enabled](/images/handbook/engineering/development/sec/secure/openshift/rosa-enabled.png)

1. 右下隅の `Continue to Red Hat` オレンジボタンをクリックします。これにより https://sso.redhat.com にリダイレクトされ、`Log in to your Red Hat account` が要求されます。

   ![login-to-your-redhat-account](/images/handbook/engineering/development/sec/secure/openshift/login-to-your-redhat-account.png)

1. `Log in with Google` をクリックし、`gitlab.com` の Gmail アカウントを使用します。`Register for a Red Hat account` ページにリダイレクトされます。

   ![register-for-red-hat-account](/images/handbook/engineering/development/sec/secure/openshift/register-for-red-hat-account.png)

   必要なフィールドに入力します。`Email address` には `gitlab.com` の Gmail アカウントを使用し、`Create my account` をクリックします。

1. `Complete your account connection` ページにリダイレクトされます。`I have read and agreed to the terms and conditions` チェックボックスをオンにし、`Connect accounts` ボタンをクリックします。

   ![complete-your-account-connection](/images/handbook/engineering/development/sec/secure/openshift/complete-your-account-connection.png)

1. 次に `We need a little more information` と説明する別のページにリダイレクトされます。必要なフィールドに入力します。`Email address` には `gitlab.com` の Gmail アカウントを使用し、`Account type` には `Personal` を選択します。

   ![we-need-a-little-more-information](/images/handbook/engineering/development/sec/secure/openshift/we-need-a-little-more-information.png)

1. `Terms and conditions` ボックスが表示されます。`View Terms and Conditions` をクリックして同意します。

   ![terms-and-conditions](/images/handbook/engineering/development/sec/secure/openshift/terms-and-conditions.png)

1. [Red Hat Hybrid Cloud Console Overview](https://console.redhat.com/openshift/overview) 画面にリダイレクトされます。`Red Hat OpenShift Service on AWS (ROSA)` ダイアログボックスの `Create cluster` をクリックして OpenShift クラスターをセットアップできます。

   ![redhat-overview](/images/handbook/engineering/development/sec/secure/openshift/redhat-overview.png)

    テストのみにクラスターを使用する予定の場合は、2ヶ月間の無料試用期間がある `OSD Trial` を選択することをお勧めします。この期間後、クラスターは削除されます。無料試用期間中は2ヶ月以内に有料プランにアップグレードできます。

1. クラスターのセットアップが完了したら、OpenShift クラスターにログインするためのユーザーを作成する必要があります。`Cluster List > <your cluster>` を選択し、`Identity Provider` に `htpasswd` を選択します。`Cluster Roles and Access` で OpenShift クラスターにアクセスするためのユーザーを作成できます。このユーザーが `dedicated-admin` グループと `cluster-admins` グループに属していることを確認してください。
1. その後、`Open console` ボタンをクリックし、前のステップで作成したクラスター管理者ユーザーでログインします。
1. OpenShift クラスターにログインしたら、`Operators > Operator Hub` を選択して GitLab Runner Operator をインストールできます。GitLab Runner を検索し、検索結果をクリックして、[こちら](https://docs.gitlab.com/runner/install/operator.html)で説明されているように `Install` ボタンをクリックします。
1. OpenShift クラスターでランナーをセットアップするには、[operator の README](https://gitlab.com/gitlab-org/gl-openshift/gitlab-runner-operator/-/blob/5f1134143f1b73171a7bb90d48b1fec948360db8/operator.yaml#L380) に含まれる手順に従ってください。

   [gitlab-runner-operator README.md](https://gitlab.com/gitlab-org/gl-openshift/gitlab-runner-operator/-/blob/master/README.md?plain=1#L43) で参照されている[ランナートークン](https://gitlab.com/gitlab-org/gl-openshift/gitlab-runner-operator/-/blob/master/README.md?plain=1#L43)は、GitLab プロジェクトから `CI/CD Settings > Runners > New Runner` を選択することで取得できます。

   ランナーのセットアップには、コマンドラインツール [`oc`（OpenShift クライアント）のインストール](https://docs.redhat.com/en/documentation/red_hat_build_of_microshift/4.12/html/cli_tools/microshift-oc-cli-install#cli-installing-cli_cli-oc-installing)が必要です。`oc` を使用する前に、クラスターに対して認証する必要があります。OpenShift クラスター管理者ユーザー名をクリックし、`Copy login command` を選択することで認証情報を確認できます。デフォルトのランナーセットアップでは、コンテナが root 権限で実行されることに注意してください。root 以外のユーザーへのアクセスを制限するには、以下の設定を提供できます。

    ```toml
    [[runners]]
    name = "gitlab-runner"
    url = "https://gitlab.com"
    executor = "kubernetes"
    [runners.kubernetes]
        [runners.kubernetes.pod_security_context]
        run_as_non_root = true
        run_as_user = 1000
    ```

   この設定を `oc create configmap my-runner-config --from-file=config.toml` で適用した後、以下のようにランナー設定を更新し、`oc appy -f gitlab-runner.yml` で適用できます。

    ```yaml
    apiVersion: apps.gitlab.com/v1beta2
    kind: Runner
    metadata:
      name: gitlab-runner
    spec:
      gitlabUrl: https://gitlab.com
      buildImage: alpine
      token: gitlab-runner-secret
      tags: openshift
      config: my-runner-config
    ```

1. OpenShift ランナーは、GitLab プロジェクト設定の `CI/CD Settings > Runners` に緑色で表示されるはずです。
