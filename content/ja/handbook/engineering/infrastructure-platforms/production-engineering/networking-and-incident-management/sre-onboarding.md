---
title: "SRE オンボーディング"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/sre-onboarding/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:14:34Z"
translator: claude
stale: false
---

## オンボーディングテンプレート

SRE のオンボーディングは主に2つの Issue テンプレートで処理されます。

1. [マシンセットアップ](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-machine-setup.md)
1. [コンテキストの収集](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-context.md)

これらは SRE の入社時にアサインされます。このテンプレートがシステムのさまざまな領域を案内し、簡単なタスクから始めて SRE と SRE マネージャー双方が各種アクセス問題を解決するのを助けます。

[オンコールオンボーディング](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-oncall.md)のための3番目の Issue テンプレートもあり、これは最初の2つが完了した後に実施され、開始日から少なくとも3ヶ月かかる可能性があります。

## GitLab.com インフラストラクチャ管理

SREチームは GitLab.com インフラストラクチャの構成管理に [Terraform](https://www.terraform.io/) と [Chef](https://www.chef.io/) を使用しています。

### Terraform

Terraform の設定は現在3つの環境に分割されています。

* [production（本番）](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gprd)
* [staging（ステージング）](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gstg)
* [ops](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/ops)

ステージングと本番の両方に対して、これらの環境間のトポロジの一致を保つための [共有 terraform 設定](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/master/environments/ops/shared-configurations.tf) があります。インスタンスサイズ、フリートサイズ、その他の環境固有の設定は、ステージング、本番、ops 向けの変数ファイルに設定されています。

Terraform のステートはオブジェクトストレージに保持されており、マスターブランチは常にインフラストラクチャの現在の状態を表している必要があります。変更はCI経由でマージおよび適用されるべきです。

### Chef

Chef は SRE インフラストラクチャ管理の重要な要素です。現在、OS のパッチ適用、システムレベルの設定適用、リリース用の omnibus パッケージのインストールに使用されています。新しい SRE にとって良い出発点となるいくつかの注目すべきクックブックを以下に示します。

* [cookbook-omnibus-gitlab](https://gitlab.com/gitlab-cookbooks/cookbook-omnibus-gitlab): このクックブックは GitLab がインストールされているすべてのサーバーに `gitlab.rb` を作成する責任があります。この設定ファイルは omnibus パッケージによって使用されます。
* [gitlab-cookbooks](https://gitlab.com/gitlab-cookbooks): GitLab.com で使用されるクックブックのコレクションです。

### リリース

リリース候補は週を通じて行われる自動デプロイを通じて GitLab.com にデプロイされます。GitLab.com でのリリースについての情報は [リリースプロセス](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process) および [release プロジェクトのドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/README.md) を参照してください。

GitLab.com のデプロイとパッチについては、以下のリリースドキュメントを参照してください。

* [デプロイヤー向けリリースドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/gitlab-com-deployer.md)
* [デプロイ後パッチドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/post-deployment-patches.md)

## 情報の探し方

### リポジトリ

以下のリポジトリは GitLab.com インフラストラクチャ管理に使用されています。これらのリポジトリの場所は、SREチームがプッシュ、Issue、MRに使用するリモートです。GitLab.com が利用できない場合に備えてミラーが設定されています。アセット、設定、インフラストラクチャ、リリース、パッチ管理に必要なリポジトリは https://ops.gitLab.net をリモートとして使用します。

1. [terraform](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt): GitLab.com のステージング、本番、運用環境のすべての terraform 設定を保持するリポジトリです。GitLab.com 上に [リポジトリミラー](https://gitlab.com/gitlab-com/gl-infra/config-mgmt) があります。

1. [chef クックブック](https://gitlab.com/groups/gitlab-cookbooks): GitLab.com に使用されるクックブックのリポジトリです。フリートのランリストはロールで設定されています。これらのクックブックの [ops.gitLab.com](https://ops.gitlab.net/gitlab-cookbooks) 上にリポジトリミラーがあります。

1. [chef](https://gitlab.com/gitlab-com/gl-infra/chef-repo): このリポジトリには GitLab.com インフラストラクチャのすべてのロールとノード属性が含まれています。また、クックブックバージョンのピン留めのための本番、ステージング、ops の環境設定も含まれています。

1. [runbooks](https://gitlab.com/gitlab-com/runbooks/): このリポジトリには GitLab.com のランブック、ハウツー、アラート定義が含まれています。このリポジトリで定義されたアラートは、マスターにマージされると監視インフラストラクチャに自動的に適用されます。詳細は [アラートセクション](https://gitlab.com/gitlab-com/runbooks/-/tree/master#alerts) を参照してください。ops.GitLab.net 上に [リポジトリミラー](https://ops.gitlab.net/gitlab-com/runbooks/) があります。

### ダッシュボード

以下のダッシュボードをブックマークして簡単にアクセスできるようにしておくと便利です。

1. [Grafana](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [システムログ](https://log.gprd.gitlab.net/app/kibana)
1. [Fastly](https://manage.fastly.com/dashboard/services/652MHuIME217ZATbh7vFWC/datacenters/all) CDN

### クラウドプロバイダー

1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [Amazon Web Services](https://console.aws.amazon.com/console/home?region=us-east-1#)

### 監視ツール

1. [incident.io](https://app.incident.io/gitlab/dashboard) アラート
1. [Grafana](https://dashboards.gitlab.net/d/bd2Kl9Imk/host-stats?orgId=1) パフォーマンス監視
1. [アラートダッシュボード](https://dashboards.gitlab.net/d/SOn6MeNmk/alerts)

### Issue トラッカー

以下の Issue トラッカーをブックマークして簡単にアクセスできるようにしておくと便利です。

1. [オンコール Issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=oncall)
1. [本番インシデント Issue](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=incident)
1. [変更管理 Issue](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=change)

### YubiKey

SRE は [YubiKey](https://www.yubico.com) を使用するべきで、ラップトップに鍵を保存すべきではありません。プライマリキーを紛失した場合にアカウントからロックアウトされないよう、予備の YubiKey を持つことをお勧めします。

セットアップには [yubikey ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/yubikey.md) に従ってください。

## 認証情報

以下は、上記または他のハンドブック箇所でカバーされていない、設定が必要な認証情報とアクセスの包括的なリストを意図しています。リストは最新でない場合があります。不足しているものがあれば追加してください。

1. SSH キー - yubikey セットアップで提供されます
1. [GitLab.com](https://gitlab.com) アカウント
1. [GitLab.com](https://gitlab.com) 管理者アカウント
1. [dev.GitLab.org](https://dev.gitlab.org) アカウント
1. [ops.GitLab.net](https://ops.gitlab.net) アカウント
1. Chef アクセス
1. クラウドプロバイダー

   * Amazon Web Services
   * Azure
   * Digital Ocean
   * Google Cloud

## Slack チャンネル

* オンコール関連チャンネル:
  * `production`
  * `incident-management`
  * `alerts`
  * `announcements`
  * `dev-escalation`
  * `feed_alerts-general`
  * `cloud-provider-alerts`
* インフラストラクチャチャンネル:
  * `infrastructure-lounge`
  * `infra-read-feed`
  * `g_release_and_deploy`
  * `infra_capacity-planning`
  * `ansible`
  * `kubernetes`
  * `terraform`

## Zendesk

すべての SRE は Zendesk で「ライトエージェント」アカウントを登録するべきです。インシデントはしばしばカスタマーレポートから発生し、彼らの提出内容やサポートとのやり取りを確認することが有用です。また、トラブルシューティングのためにより多くの情報を収集できるよう、サポートエンジニア向けの内部メモを残すこともできます。

## Time Off by Deel

計画的な休暇の通知と委任には Time Off by Deel を使用します。Slack との連携を設定する際は、`/time-off-deel help` コマンドを実行してから「Go to Home Tab」をクリックし、ドロップダウンで「Calendar Sync」を選択し、「Add Calendar」をクリックしてチームの共有 Google カレンダー（ID: `gitlab.com_oji6dki1frc8g8qq9feuu1jtd0@group.calendar.google.com`）を「Additional calendars to include?」として追加してください。

## 推奨ソフトウェアツール

プロダクションエンジニアとして Linux ワークステーションの利用が許可されています。以下のリストは主に macOS ツールで構成されています。お使いの Linux ディストロに合った Linux 相当品を見つける必要があります。

GitLab の他の部分と連携するための標準ツールに加えて、以下のツールは本番の問題を処理するうえで役立ちます。

必須ツール

1. [Homebrew](https://brew.sh)
1. [SSH（適切に設定済み）](https://gitlab.com/gitlab-com/gl-infra/infrastructure/blob/master/onboarding/ssh-config)
1. [chef、knife、berkshelf](https://docs.chef.io/workstation/install_workstation/)
1. kubectl（`brew install kubernetes-cli`）

あると便利

1. iTerm（`brew install iterm2`）または kitty（`brew install kitty`）（kitty は設定により多くの手間がかかるため上級ユーザー向けです）
1. macOS はデフォルトで ~/.bashrc ファイルを読み込まないため、処理させたい場合はプロファイルファイルでソースする必要があります（手動で作成が必要な場合もあります）。プロファイルの代わりにrcファイルを作成する理由は、一部のツールがデフォルトでrcになっているためプロファイルを処理しないためです。実際にはさらに多くの違いがあります。詳しくは [macOS での bash_profile と bashrc について](https://scriptingosx.com/2017/04/about-bash_profile-and-bashrc-on-macos/) を参照してください。
1. macOS はデフォルトで bash 補完機能を持っていません。インストールするには `brew install bash-completion` を実行し、有効化するには `echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bashrc` を実行します。
1. fzf はシェルでのファジー補完（例: 履歴検索やファイルパス）に使用されます（`brew install fzf` + `echo "[ -f ~/.fzf.bash ] && source ~/.fzf.bash" >> ~/.bashrc`）
1. macOS のデフォルトの bash 履歴の長さは 500 です。保持するエントリ数を増やしてタイムスタンプを保存するには、.bashrc に以下を追加します。

```console
export HISTFILESIZE=2000000
export HISTSIZE=1000000
export HISTTIMEFORMAT="%d/%m/%y %T "
```

1. helm - 「Kubernetes パッケージマネージャー」（`brew install kubernetes-helm`）
1. minikube（`brew install minikube`）および virtualbox（`https://www.virtualbox.org/wiki/Downloads`）
1. GCP cli [gcloud クイックスタート macOS](https://cloud.google.com/sdk/docs/quickstart-macos)
1. Digital Ocean cli（`brew install doctl`）
1. Azure cli（`brew install azure-cli`）
1. AWS cli（`pip3 install awscli --upgrade`）
1. [Sublime](https://www.sublimetext.com/)、[Textmate](https://macromates.com)、[MacVim](https://macvim.org/)、または [neovim](https://neovim.io) などのテキストエディタ
1. watch（`brew install watch`）
1. tmux/tmate（`brew install tmux tmate`）
1. [macdown](https://macdown.uranusjr.com) などの Markdown エディタ（`brew install macdown`）
1. [BitBar](https://github.com/matryer/xbar) と [GitLab プラグイン](https://gitlab.com/devin/gitlab-bitbar)
1. [gnu ユーティリティをインストールして Mac ユーティリティを置き換える](https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities)には --with-default-names オプションを使用します。
1. gpg を使用する場合、パスワードが要求されます。パスワードの問い合わせはさまざまなツールで容易にできますが、かなり標準的で広くサポートされているのは pinentry-mac です（`brew install pinentry-mac`）。gpg エージェントにそれを使うよう伝えるには: `echo 'pinentry-program /usr/local/bin/pinentry-mac' >> ~/.gnupg/gpg-agent.conf`

### Brew ファイル

サンプルの brew ファイルは [Infrastructure プロジェクト](https://gitlab.com/gitlab-com/gl-infra/infrastructure/tree/master/onboarding) にあります。

### iOS アプリ

1. [Slack](https://apps.apple.com/us/app/slack/id618783545)
1. [Zoom](https://apps.apple.com/us/app/zoom-workplace/id546505307)
1. [incident.io](https://apps.apple.com/ca/app/incident-io/id6471268530)
1. [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)（オプション）

## リファレンス資料

エンジニアが復習する必要があるかもしれない関連リファレンス資料のリスト

1. [Chef](https://docs.chef.io)
1. [Terraform ドキュメント](https://developer.hashicorp.com/terraform/docs) または [入門ガイド](https://developer.hashicorp.com/terraform/intro)
