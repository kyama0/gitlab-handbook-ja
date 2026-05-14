---
title: "SRE オンボーディング"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/sre-onboarding/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## オンボーディングテンプレート

SRE のオンボーディングは、主に 2 つの Issue テンプレートで管理されます:

1. [マシンセットアップ](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-machine-setup.md)
1. [コンテキスト収集](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-context.md)

これらは、SRE が業務を開始するときに割り当てられます。簡単なタスクから始めて
システムのさまざまな領域へとガイドし、SRE と SRE マネージャーの両方が
各種アクセス関連の問題を解決していくのを助けます。

3 つ目の Issue テンプレートとして [オンコールオンボーディング](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-oncall.md)
があります。最初の 2 つの完了後に着手するもので、開始日からおそらく少なくとも 3 か月程度を要します。

## GitLab.com インフラストラクチャ管理

SRE チームは GitLab.com インフラストラクチャの構成管理に [Terraform](https://www.terraform.io/) と
[Chef](https://www.chef.io/) を使用しています。

### Terraform

Terraform 構成は現在、以下の 3 つの環境に分かれています:

* [production](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gprd)
* [staging](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gstg)
* [ops](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/ops)

staging と production の間でトポロジの一貫性を保つため、
[共有 terraform 設定](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/master/environments/ops/shared-configurations.tf)
が用意されています。インスタンスサイズ、フリート規模、その他の環境固有設定は、
staging、production、ops の変数ファイルで設定されます。

terraform の state はオブジェクトストレージで管理されており、master ブランチが常に
インフラストラクチャの現在の状態を表すべきです。変更は CI を通じてマージおよび適用されるべきです。

### Chef

Chef は SRE インフラストラクチャ管理の重要な部分です。現在、OS のパッチ適用、
システムレベルの構成適用、リリース用 omnibus パッケージのインストールに使用されています。
新しい SRE にとって良い出発点となるいくつかの注目すべき cookbook を以下に示します:

* [cookbook-omnibus-gitlab](https://gitlab.com/gitlab-cookbooks/cookbook-omnibus-gitlab): この cookbook
  は、GitLab がインストールされているすべてのサーバーで `gitlab.rb` を作成する役割を担います。
  この設定ファイルは omnibus パッケージで使用されます。
* [gitlab-cookbooks](https://gitlab.com/gitlab-cookbooks): GitLab.com で使用される cookbook のコレクションです。

### リリース

リリース候補は、週を通して行われる自動デプロイメントによって GitLab.com にデプロイされます。GitLab.com におけるリリースの仕組みについては、[リリースプロセス](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)を参照し、
[release プロジェクトのドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/README.md)もご覧ください。

GitLab.com のデプロイメントとパッチについては、以下の
release ドキュメントを参照してください:

* [deployer の release ドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/gitlab-com-deployer.md)
* [post-deployment patch ドキュメント](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/post-deployment-patches.md)

## どこに何があるか

### リポジトリ

GitLab.com インフラストラクチャ管理には以下のリポジトリが使用されます。
これらのリポジトリの場所は、SRE チームが push、Issue、MR に使用するリモートです。
GitLab.com が利用できない場合に備えて、ミラーが設定されています。
アセット、構成、インフラストラクチャ、リリース、パッチ管理に必要なリポジトリは、
リモートとして https://ops.gitLab.net を使用します。

1. [terraform](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt):
   このリポジトリには、GitLab.com の staging、production、ops 環境のすべての terraform 構成が保管されています。
   GitLab.com 側には
   [リポジトリミラー](https://gitlab.com/gitlab-com/gl-infra/config-mgmt)
   があります。

1. [chef cookbooks](https://gitlab.com/groups/gitlab-cookbooks):
   これらは GitLab.com で使用される cookbook のリポジトリです。フリートの runlist は role で構成されています。
   これらの cookbook の[リポジトリミラー](https://ops.gitlab.net/gitlab-cookbooks)が ops.gitLab.com にあります。

1. [chef](https://gitlab.com/gitlab-com/gl-infra/chef-repo):
   このリポジトリには、GitLab.com インフラストラクチャのすべての role と node の属性が含まれます。
   cookbook のバージョン固定のための production、staging、ops の環境設定もあります。

1. [runbooks](https://gitlab.com/gitlab-com/runbooks/): このリポジトリには、
   GitLab.com のランブック、ハウツー、アラート定義が含まれています。このリポジトリで定義されたアラートは、
   master にマージされるとモニタリングインフラストラクチャに自動的に適用されます。詳細は
   [alert セクション](https://gitlab.com/gitlab-com/runbooks/-/tree/master#alerts)を参照してください。
   ops.GitLab.net 上に[リポジトリミラー](https://ops.gitlab.net/gitlab-com/runbooks/)があります。

### ダッシュボード

以下のダッシュボードをブックマークしてすぐにアクセスできるようにしておくと便利です。

1. [Grafana](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [System Logs](https://log.gprd.gitlab.net/app/kibana)
1. [Fastly](https://manage.fastly.com/dashboard/services/652MHuIME217ZATbh7vFWC/datacenters/all) CDN

### クラウドプロバイダー

1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [Amazon Web Services](https://console.aws.amazon.com/console/home?region=us-east-1#)

### モニタリングツール

1. [incident.io](https://app.incident.io/gitlab/dashboard) アラート
1. [Grafana](https://dashboards.gitlab.net/d/bd2Kl9Imk/host-stats?orgId=1) パフォーマンスモニタリング
1. [アラートダッシュボード](https://dashboards.gitlab.net/d/SOn6MeNmk/alerts)

### Issue トラッカー

以下の Issue トラッカーをブックマークしてすぐにアクセスできるようにしておくと便利です。

1. [On Call Issues](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=oncall)
1. [Production Incidents Issues](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=incident)
1. [Change Management Issues](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=change)

### Yubikey

SRE は [YubiKey](https://www.yubico.com) を使用し、ノートパソコンに鍵を置かないようにすべきです。プライマリキーを紛失したときにアカウントからロックアウトされないように、予備の YubiKey を用意することを推奨します。

[yubikey ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/yubikey.md)に従ってセットアップしてください。

## クレデンシャル

以下は、上記または handbook の他の箇所でカバーされていない、設定する必要のあるクレデンシャルとアクセスの包括的なリストとなることを意図しています。
このリストは最新ではない可能性があります。何か漏れている場合は、追加してください。

1. SSH キー - yubikey のセットアップで提供されます
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

* オンコール関連のチャンネル:
  * `production`
  * `incident-management`
  * `alerts`
  * `announcements`
  * `dev-escalation`
  * `feed_alerts-general`
  * `cloud-provider-alerts`
* Infrastructure チャンネル:
  * `infrastructure_platforms`
  * `infra-read-feed`
  * `g_release_and_deploy`
  * `infra_capacity-planning`
  * `ansible`
  * `kubernetes`
  * `terraform`

## Zendesk

すべての SRE は ZenDesk で「Light Agent」アカウントに登録するべきです。インシデントはしばしば顧客レポートから発生するので、顧客の提出内容とサポートとのやり取りを確認できると便利です。また、サポートエンジニアがトラブルシューティング目的でより多くの情報を集められるように、内部メモを残すこともできます。

## Time Off by Deel

私たちは Time Off by Deel を使って、計画された休暇の通知と委譲を行っています。Slack との連携を設定する際は、
`/time-off-deel help` コマンドを実行してから _Go to Home Tab_ をクリックし、ドロップダウンで _Calendar Sync_ を選択した後、_Add Calendar_ を選んで、チームの共有 Google カレンダー
(ID: `gitlab.com_oji6dki1frc8g8qq9feuu1jtd0@group.calendar.google.com`) を "Additional calendars to include?" として追加することを忘れないでください。

## 推奨ソフトウェアツール

プロダクションエンジニアとして、私たちは Linux ワークステーションを利用できます。以下のリスト
はほとんどが macOS ツールで構成されています。お好みの Linux ディストリビューションに合わせて
Linux 同等のものを見つける必要があります。

GitLab の他の部分とやり取りするための標準ツールに加えて、
プロダクションの問題に取り組む際に役立つツールは以下のとおりです。

必須ツール

1. [Homebrew](https://brew.sh)
1. [SSH、適切に設定済み](https://gitlab.com/gitlab-com/gl-infra/infrastructure/blob/master/onboarding/ssh-config)
1. [chef, knife, berkshelf](https://docs.chef.io/workstation/install_workstation/)
1. kubectl (`brew install kubernetes-cli`)

あると良いもの

1. iTerm (`brew install iterm2`) または kitty (`brew install kitty`) (ただし kitty は使用開始までに多くの設定が必要なため、より上級者向けです)
1. macOS はデフォルトでは ~/.bashrc ファイルを読み込まないので、それを処理させたい場合は、自分の profile ファイルでソースする必要があります（このファイルは手動で作成する必要がある場合があります）。すべてを profile に保持する代わりに rc ファイルを作成するのはなぜか？ 一部のツールはデフォルトで rc を使用するため、profile はまったく処理されません。実際にはもっと多くの違いがあります。[macOS での bash_profile と bashrc について](https://scriptingosx.com/2017/04/about-bash_profile-and-bashrc-on-macos/)を参照してください
1. macOS はデフォルトでは bash 補完機能を持たないので、インストールするには: `brew install bash-completion` を実行し、有効化するには: `echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bashrc`
1. fzf はシェルでのファジー補完（履歴検索やファイルパスなど）に使用します (`brew install fzf` + `echo "[ -f ~/.fzf.bash ] && source ~/.fzf.bash" >> ~/.bashrc`)
1. macOS では bash 履歴のデフォルト長は 500 です。保持されるエントリ数を拡大し、タイムスタンプを保存するには、たとえば以下を .bashrc に追加できます:

```console
export HISTFILESIZE=2000000
export HISTSIZE=1000000
export HISTTIMEFORMAT="%d/%m/%y %T "
```

1. helm - "Kubernetes package manager" (`brew install kubernetes-helm`)
1. minikube (`brew install minikube`) と virtualbox (`https://www.virtualbox.org/wiki/Downloads`)
1. GCP cli [gcloud quickstart macos](https://cloud.google.com/sdk/docs/quickstart-macos)
1. Digital Ocean cli (`brew install doctl`)
1. Azure cli (`brew install azure-cli`)
1. AWS cli (`pip3 install awscli --upgrade`)
1. [Sublime](https://www.sublimetext.com/)、[Textmate](https://macromates.com)、[MacVim](https://macvim.org/)、[neovim](https://neovim.io) などのテキストエディタ
1. watch (`brew install watch`)
1. tmux/tmate (`brew install tmux tmate`)
1. [macdown](https://macdown.uranusjr.com) (`brew install macdown`) などの markdown エディタ
1. [BitBar](https://github.com/matryer/xbar) と [GitLab Plugin](https://gitlab.com/devin/gitlab-bitbar)
1. [GNU ユーティリティをインストールして mac ユーティリティを置き換える]( https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities)には --with-default-names オプションを使います。
1. gpg を使う場合、パスワードを聞かれます。パスワードの問い合わせはさまざまなツールで容易にできますが、かなり標準的で広くサポートされているのが pinentry-mac です (`brew install pinentry-mac`)。gpg-agent にこれを使うよう伝えるには: `echo 'pinentry-program /usr/local/bin/pinentry-mac' >> ~/.gnupg/gpg-agent.conf`

### Brew ファイル

[Infrastructure プロジェクト](https://gitlab.com/gitlab-com/gl-infra/infrastructure/tree/master/onboarding)に brew ファイルのサンプルがあります。

### iOS アプリ

1. [Slack](https://apps.apple.com/us/app/slack/id618783545)
1. [Zoom](https://apps.apple.com/us/app/zoom-workplace/id546505307)
1. [incident.io](https://apps.apple.com/ca/app/incident-io/id6471268530)
1. [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) (オプション)

## 参考資料

エンジニアが復習する必要があるかもしれない関連参考資料のリスト

1. [Chef](https://docs.chef.io)
1. [Terraform ドキュメント](https://developer.hashicorp.com/terraform/docs) または [入門ガイド](https://developer.hashicorp.com/terraform/intro)
