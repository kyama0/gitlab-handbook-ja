---
title: "シークレットプッシュ保護 パフォーマンステスト"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-push-protection-performance-testing/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

### このランブックをいつ使用しますか?

このランブックは以下の目的で使用します:

* [GPT テストの実行](#running-gpt-tests) — テストを実行して以前のベンチマークと比較する
* [GET への新しいバージョンの GitLab のデプロイ](#re-deploying-a-new-build) — GET インスタンスの更新（シークレットプッシュ保護に関連する変更のテストに使用する場合がほとんど）
* [新しい GET 環境のセットアップ](#setting-up-a-get) — さまざまなリファレンスアーキテクチャのテスト

### 前提条件

* gcloud（[公式手順](https://cloud.google.com/sdk/install)）— さまざまなコマンドの実行、テストランナー VM へのログインに使用
* Static Analysis GCP プロジェクト（[リソースセクション](#resourcesacronyms) を参照）— インフラへの変更に必要なアクセス権

### GPT テストの実行 {#running-gpt-tests}

#### 手動テスト

Engineering Vault で Static Analysis を検索して、1password から `root` ユーザーの URL とパスワードを取得します。プロジェクト、グループ、ユーザーは削除しないでください。ただし、作成したり、テストしたいものを何でも作成することは自由です。

#### 自動テストの実行（GCP VM 経由）

VM へのログインオプション:

* VM に SSH 接続: `gcloud compute ssh --zone us-west1-c gpt-test-runner-2 --project dev-sast-prereceive-8a4574ec`
* または、[Static Analysis GCP プロジェクト: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec) にアクセスし、`Compute Engine` をクリック、`gpt-test-runner-2` を見つけて `SSH` をクリックします。これによりウェブベースの SSH セッションが起動します。

初回セットアップ（VM からテストを実行するすべての人が必要）:

* `git clone https://gitlab.com/gitlab-org/quality/performance.git`
* `performance` に cd
* [この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から gcp-2k.json ファイルを `performance` ディレクトリにコピー
* `.tool-versions` ファイルを作成し、`ruby 3.2.2`（または最新版）を追加
* `bundle install`
* ブランチ `secret-detection` をチェックアウト

テストの実行:

* Engineering Vault で Static Analysis を検索して、1password から glpat トークンを取得
* `performance` ディレクトリにいることを確認
* `git_secret_detection.js` テストのみを実行する場合（例）: `ACCESS_TOKEN=glpat-REDACTED SD_PUSH_CHECK_ENABLED=true SD_FILES_PER_COMMIT=4 GPT_DEBUG=true SD_FILE_SIZES="10kb" GPT_SKIP_RETRY=true ./bin/run-k6 --environment gcp-2k.json --options 60s_40rps.json --unsafe --tests k6/tests/git/pre-receive/git_secret_detection.js`
* すべてのテストを実行する場合: `ACCESS_TOKEN=glpat-REDACTED SD_PUSH_CHECK_ENABLED=true ./bin/run-k6 --environment gcp-2k.json --options 60s_40rps.json`

#### 自動テストの実行（Docker 経由）

* Engineering Vault で Static Analysis を検索して、1password から glpat トークン (ACCESS_TOKEN) を取得
* GPT テストは `environments` ディレクトリを含む任意のディレクトリから実行できます
* ローカルターミナルを開いて `git clone https://gitlab.com/gitlab-org/quality/performance.git`
* ルートに `environments` ディレクトリを作成
* [この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から gcp-2k.json ファイルをその `environments` ディレクトリにコピー
* gcp-2k.json ファイルを必要に応じてリネームし、`name` と `url` の値も変更
* `git_secret_detection.js` テストのみを実行する場合（例）: `docker run -it -e ACCESS_TOKEN=glpat-REDACTED -v $PWD:/config gitlab/gitlab-performance-tool SD_PUSH_CHECK_ENABLED=true SD_FILES_PER_COMMIT=4 GPT_DEBUG=true SD_FILE_SIZES="10kb" GPT_SKIP_RETRY=true --environment gcp-2k.json --options 60s_40rps.json --tests git_secret_detection.js`
* すべてのテストを実行する場合: `docker run -it -e ACCESS_TOKEN=glpat-REDACTED -v $PWD:/config gitlab/gitlab-performance-tool --environment gcp-2k.json --options 60s_40rps.json`

### GET のセットアップ {#setting-up-a-get}

GCP 環境は、プレフィックス `gcp-2k` の 2k リファレンスアーキテクチャを使用した GET で、[Static Analysis GCP プロジェクト: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec) の下にセットアップされています。

#### 新しい環境のブートストラップ

注記: 以下の手順は別の 2k リファレンスアーキテクチャのセットアップを想定して書かれています。25k リファレンスアーキテクチャのようなものをセットアップする必要がある場合は、このガイドでカバーされていない変更が必要になる場合があります。代替のリファレンスアーキテクチャは[こちら](https://gitlab.com/gitlab-com/gl-infra/software-delivery/framework/get-environments/ra-test-environments/-/tree/main/configs/reference_architectures?ref_type=heads)で確認できます。

初回ステップ:

* [GET リポジトリ](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) をクローンして cd で移動
* [この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から `bootstrap.sh` をルートにコピーし、必要に応じて更新
* 実行可能にする必要がある場合があります: `chmod +x bootstrap.sh`

注記、`bootstrap.sh` には 1 回だけ実行するステップと、新しい `$GCP_ENV_PREFIX` のセットアップに必要なステップがあり、まだ分離する必要があります。

新しい `$GCP_ENV_PREFIX` の追加手順:

* [Terraform による環境のプロビジョニング](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_provision.md) を Terraform のセットアップガイドとして使用します（GCP を使用しているので AWS の手順は無視してください）
* クローンした [GET リポジトリ](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) 内にいることを確認
* `bootstrap.sh` の変数を必要に応じて更新
* `./bootstrap.sh` を実行
* 最後に表示された IP アドレスをメモ
* SSH キーがサービスアカウントに追加されたときに作成されたユーザー名をメモ（後で使用）
* `mkdir -p terraform/environments/$GCP_ENV_PREFIX` を実行
* [この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から `environment.tf`、`main.tf`、`variables.tf` を対応するディレクトリにコピー
* 必要に応じてこれらの `*.tf` ファイルを更新:
  * `variables.tf` の `external_ip` の下に先ほど取得した IP アドレスを追加
  * `environment.tf` に[適切なサービスアカウントプレフィックス](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_provision.md#service-account-prefix-gcp)を追加
  * `main.tf` のプレフィックスを `$GCP_ENV_PREFIX` の値と一致するように更新
* `/terraform/environments/$GCP_ENV_PREFIX` に cd
* `terraform init` を実行
* `terraform apply` を実行
* 小さなお祝い :tada:
* [Ansible による環境の設定](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md) を Ansible のセットアップガイドとして使用します（GCP を使用しているので AWS の手順は無視してください）
* [GET リポジトリ](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) のルートディレクトリに cd
* `mkdir -p ansible/environments/$GCP_ENV_PREFIX/files/gitlab_configs` を実行
* `mkdir -p ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks` を実行
* `mkdir -p ansible/environments/$GCP_ENV_PREFIX/inventory` を実行
* [先ほど参照した MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から、`environments/gcp-2k/files/gitlab_configs/gitlab_rails.rb.j2` を `ansible/environments/$GCP_ENV_PREFIX/files/gitlab_configs` にコピー — これはライセンスが設定適用時に正しく追加されるために必要です
* [その MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) から `vars.yml` と `gcp_2k.gcp.yml` をその `/inventory` ディレクトリにコピー
* `gcp_2k.gcp.yml` を `$GCP_ENV_PREFIX`（アンダースコアを使用）に合わせてリネームし、両方の `*.yml` ファイルを必要に応じて更新
* `monitor.yml` を `ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks` にコピー
* モニタリングをセットアップする場合は、他のファイルとフォルダもコピーする必要がある場合があります:
  * `dashboards.yml` を `ansible/environments` にコピー
  * `datasources.yml` を `ansible/environments` にコピー
  * `linux-package` フォルダを `ansible/environments` にコピー
* `monitor.yml` に変更は必要ありませんが、`vars.yml` に `grafana_password` が設定されていることを確認してください
* 先ほど取得したユーザー名（`./bootstrap.sh` 実行時）を `vars.yml` ファイルに `ansible_user` として追加
* 必要に応じて[他の変数](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#environment-config-varsyml)（パスワード/シークレット）を設定してください（リファレンスアーキテクチャによって異なりますが、少なくとも `gitlab_root_password`、`postgres_password`、`gitaly_token`、`redis_password` が必要です）
* `prefix`、`external_url` の更新と `gitlab_license_file` などのいくつかの行のコメント解除も必要になる場合があります
* その他の変数については[ドキュメント](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#environment-config-varsyml)と他のリファレンスアーキテクチャファイル（例: [25k リファレンスアーキテクチャのもの](https://gitlab.com/gitlab-com/gl-infra/software-delivery/framework/get-environments/ra-test-environments/-/blob/main/configs/reference_architectures/25k/ansible/inventory/vars.yml?ref_type=heads)）を参照してください
* [Support Super Form を使用して](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) 新しい Ultimate ライセンスを取得
* ライセンスファイルを（リネームせず）`/ansible/environments/$GCP_ENV_PREFIX/files` に追加
* ルートディレクトリから、[仮想環境での Ansible のインストール](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#installing-ansible-with-a-virtual-environment) の手順に従ってください
* `ansible` ディレクトリに cd
* `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml` を実行
* インスタンスにログイン後、Ultimate ライセンスが適用されない場合は、手動でライセンスをアップロードする必要がある場合があります

#### 既存の環境のセットアップ（$GCP_ENV_PREFIX）

* [GET リポジトリ](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) をクローン（まだ存在しない場合）して cd で移動
* `mkdir terraform/environments/$GCP_ENV_PREFIX` を実行
* `mkdir -p ansible/environments/$GCP_ENV_PREFIX/files/gitlab_tasks` を実行
* https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs に移動（[この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) のマージ待ち）
* `configs/$GCP_ENV_PREFIX/terraform/*.tf` ファイルを `terraform/environments/$GCP_ENV_PREFIX` ディレクトリにコピー
* `configs/$GCP_ENV_PREFIX/ansible/*.yml` ファイルを `ansible/environments/$GCP_ENV_PREFIX` ディレクトリにコピー
* ルートディレクトリから、[仮想環境での Ansible のインストール](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_configure.md#installing-ansible-with-a-virtual-environment) の手順に従ってください
* `ansible` ディレクトリに cd
* `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml` を実行

#### データの投入

* [GPT リポジトリ](https://gitlab.com/gitlab-org/quality/performance) をクローン
* データのインポートを以下の 2 つのステップに分けます

水平データ:

```console
docker run -it \
  -e ACCESS_TOKEN=glpat-REDACTED \
  -e GPT_GENERATOR_POOL_TIMEOUT=600 -e GPT_GENERATOR_POOL_SIZE=1 -e GPT_GENERATOR_RETRY_COUNT=20 -e GPT_GENERATOR_RETRY_WAIT=10 \
  -v $PWD:/results \
  -v $PWD:/config \
  gitlab/gpt-data-generator \
  --environment gcp-2k.json --environment-url=https://34.83.26.81 \
  --subgroups 10 --projects 10 --no-vertical
```

このコマンドはタイムアウトする可能性が高いですが、ブラウザでインポート中と表示されている場合は、インポートが完了するまで待ちます。

垂直データ:

```console
docker run -it \
  -e ACCESS_TOKEN=glpat-REDACTED \
  -e GPT_DEBUG=true \
  -e GPT_GENERATOR_POOL_TIMEOUT=600 -e GPT_GENERATOR_POOL_SIZE=1 -e GPT_GENERATOR_RETRY_COUNT=20 -e GPT_GENERATOR_RETRY_WAIT=10 \
  -v $PWD:/config \
  -v $PWD:/tests \
  -v $PWD:/results \
  gitlab/gpt-data-generator --environment gcp-2k.json --no-horizontal
```

### 新しいビルドの再デプロイ {#re-deploying-a-new-build}

* 今後の `GET のセットアップ` セクションでカバーされる前提条件ステップがあります
* クローンした [GET リポジトリ](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) に移動して cd で移動
* ターミナルでまだアクティベートされていない場合は、`. ./get-python-env/bin/activate` を実行
* クローンした GET リポジトリの `ansible` ディレクトリに cd
* どの 3 つのデプロイ方法を対象としているかを確認し、デプロイ前に変更が必要かどうかを `ansible/environments/$GCP_ENV_PREFIX/inventory/vars.yml` で確認
* セットアップステップと同じ ansible コマンドで再デプロイ: `ansible-playbook -i environments/$GCP_ENV_PREFIX/inventory playbooks/all.yml`

### モニタリング

Grafana ダッシュボードは `/-/grafana/dashboards/` で確認できます。ログイン認証情報は 1password の "Static Analysis - 2K GCP Grafana" で確認できます。

環境のセットアップは前のセクションで説明されていますが、これを機能させるために必要なファイルは以下のとおりです:

* ansible/environments/gcp-2k/files/gitlab_tasks/monitor.yml
* ansible/environments/linux_package/server-performance.json
* ansible/environments/dashboards.yaml
* ansible/environments/datasources.yaml

これらのファイルは[この MR](https://gitlab.com/gitlab-org/secure/pocs/gitlab-environment-toolkit-configs/-/merge_requests/4) で確認できます。

詳細は GET ドキュメントの[カスタムタスクセクション](https://gitlab.com/gitlab-org/gitlab-environment-toolkit/-/blob/main/docs/environment_advanced.md#custom-tasks)を参照してください。

### リソース/略語 {#resourcesacronyms}

* [GitLab Environment Toolkit (GET)](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
* [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance)
* [Static Analysis GCP プロジェクト: dev-sast-prereceive-8a4574ec](https://console.cloud.google.com/welcome?project=dev-sast-prereceive-8a4574ec)
* GCP - Google Cloud Platform
* [シークレットプッシュ保護ドキュメント](https://docs.gitlab.com/ee/user/application_security/secret_detection/secret_push_protection/)

### その他

このランブックの例のほとんどは `gcp-2k` 環境を基準として追加されています。

#### Rails コンソールとフィーチャーフラグの確認

* Rails サーバーに SSH 接続: `gcloud compute ssh --zone us-west1-c gcp-2k-gitlab-rails-1 --project dev-sast-prereceive-8a4574ec`

* Rails コンソールの起動: `sudo gitlab-rails console`（接続に少し時間がかかります）

* プロジェクトのプッシュチェック機能のステータス確認: `Feature.enabled?(:pre_receive_secret_detection_push_check, Project.find(123))`

#### アプリケーション設定の有効化

* Web 経由でインスタンス全体で機能を有効化するには `/admin/application_settings/security_and_compliance` に移動
* Rails コンソール経由:

```ruby
a = ApplicationSetting.first
a.pre_receive_secret_detection_enabled = true
a.save!
```

#### 現在のバージョンの確認

インスタンスで実行されている GitLab の現在のバージョンを確認するには、ログインして `/help` に移動します。
