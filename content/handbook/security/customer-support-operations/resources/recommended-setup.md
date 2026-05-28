---
title: '推奨セットアップ'
description: 'チームの推奨セットアップに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/resources/recommended-setup/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

{{% alert title="注" color="primary" %}}

これらはあくまでもおすすめです。一部は業務上必須になるかもしれませんが (1Password、Zoom、Slack、Okta など)、より良い代替手段があると感じる場合はそちらを使ってもらって構いません!

{{% /alert %}}

## 私たちが推奨するツーリング

| ツール | おすすめする理由 |
|---------|---------------------|
| 1Password | いろいろなサービスにログインすることになります。手元にあると便利です |
| .bashrc/.bash_profile | CLI 経由で多くのスクリプトを簡単に実行できるようになります。詳細はセットアップを参照してください |
| GitLab トークン | CLI 経由で gitlab.com に対して API コールを実行するのに役立ちます |
| Homebrew | macOS 上でいろいろなものをインストールするのに非常に便利です |
| nodenv | 私たちはさまざまな Node バージョンを使う多くのプロジェクトを扱います。このツールを使うと、それらの間を素早く切り替えられます。 |
| Okta ブラウザプラグイン | いろいろなサービスにログインすることになります。手元にあると便利です |
| rbenv | 私たちはさまざまな Ruby バージョンを使う多くのプロジェクトを扱います。このツールを使うと、それらの間を素早く切り替えられます。 |
| Slack | 会社のかなりの部分のコミュニケーションがここで行われます |
| Visual Studio Code | コードエディタが必要になります。これは GitLab Web IDE と整合性があります |
| Zendesk Global トークン | Zendesk API をかなり頻繁に使うことになります。自分の管理者トークンを持っていると非常に便利です |
| Zendesk Global Sandbox トークン | Zendesk API をかなり頻繁に使うことになります。自分の管理者トークンを持っていると非常に便利です |
| Zendesk US Government トークン | Zendesk API をかなり頻繁に使うことになります。自分の管理者トークンを持っていると非常に便利です |
| Zendesk US Government Sandbox トークン | Zendesk API をかなり頻繁に使うことになります。自分の管理者トークンを持っていると非常に便利です |
| Zoom | 私たちが会議の 99% で使用しているツールです |

### Homebrew {#homebrew}

{{% alert title="注" color="primary" %}}

これは macOS を使っている方のみ向けです

{{% /alert %}}

Homebrew をインストールするには、単純にセットアップスクリプトを使います。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### rbenv

これは、多くの異なる Ruby バージョンを使う必要があるときに特に素晴らしいツールです! ぜひあなたの環境にインストールし、セットアップすることを強くおすすめします。

セットアップが完了したら、私たちがよく使う Ruby バージョンをインストールするために、以下のコマンドの使用をおすすめします。

- `rbenv install 3.0.1`
- `rbenv install 3.2.2`

次に、`gem install bundler` コマンドを使って、各 Ruby バージョンに [bundler gem](https://rubygems.org/gems/bundler) をインストールすることをおすすめします。私たちのプロジェクトのほとんどが `Gemfile` を使うため、`bundle` コマンドを実行することでプロジェクトに必要な gem をダウンロードできるようになります。

#### macOS での rbenv セットアップ

これは [Homebrew](#homebrew) を使えば簡単に行えます。コマンドは以下のとおりです。

`brew install rbenv`

(新しい Ruby バージョンを得るために) アップグレードする必要が出たら、単に以下を実行します。

`brew upgrade rbenv ruby-build`

#### Linux での rbenv セットアップ

(`apt` などの) パッケージマネージャを使うこともできますが、代わりに `git` 経由でインストールすることをおすすめします。これを行うには、以下のコマンドを実行します。

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
mkdir -p "$(rbenv root)"/plugins
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
source ~/.bashrc
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

rbenv とプラグインをアップグレードするには、単に以下を実行します。

```bash
cd ~/.rbenv
git pull
cd ~/.rbenv/plugins/ruby-build
git pull
```

### 1Password

これには 2 つの方法があります。

- アプリベース (macOS のみ)
- ブラウザベース

#### 1Password のアプリベースセットアップ

{{% alert title="注" color="primary" %}}

これは macOS のみです。Linux 版もありますが、現状正しく動作していません。

{{% /alert %}}

1Password アプリをインストールするには、[Homebrew](#homebrew) を使って以下のコマンドを実行します。

```bash
brew install --cask 1password
```

アップグレードするには以下を使います。

```bash
brew upgrade --cask 1password
```

#### 1Password のブラウザベースセットアップ

Chrome ベースのブラウザに追加するには、[1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en) ページから追加できます。

Firefox ベースのブラウザに追加するには、[1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/) ページから追加できます。

### Okta ブラウザプラグイン

Chrome ベースのブラウザに追加するには、[Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en) ページから追加できます。

Firefox ベースのブラウザに追加するには、[Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/) ページから追加できます。

インストール後は、ブラウザで Okta にログインしておけば動作を始めるはずです。

### nodenv

これは、多くの異なる Node バージョンを使う必要があるときに特に素晴らしいツールです! ぜひあなたの環境にインストールし、セットアップすることを強くおすすめします。

#### macOS での nodenv セットアップ

これは [Homebrew](#homebrew) を使えば簡単に行えます。コマンドは以下のとおりです。

`brew install nodenv`

(新しい Node バージョンを得るために) アップグレードする必要が出たら、単に以下を実行します。

`brew upgrade nodenv node-build`

#### Linux での nodenv セットアップ

(`apt` などの) パッケージマネージャを使うこともできますが、代わりに `git` 経由でインストールすることをおすすめします。これを行うには、以下のコマンドを実行します。

```bash
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc
source ~/.bashrc
mkdir -p "$(nodenv root)"/plugins
git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
source ~/.bashrc
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
```

nodenv とプラグインをアップグレードするには、単に以下を実行します。

```bash
cd ~/.nodenv
git pull
cd ~/.nodenv/plugins/node-build
git pull
```

### .bashrc/.bash_profile/.zshrc セットアップ

このファイルに何を書くかは本当に自由ですが、私たちが使うスクリプトなどがすべて正しく動作するようにするため、最低でも以下を行うことをおすすめします。

```bash
# us fed ZD instance
export US_ZD_URL='https://gitlab-federal-support.zendesk.com/api/v2'
export US_ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export US_ZD_TOKEN='ZENDESK_US_GOV_ADMIN_TOKEN'

# main ZD instance
export ZD_URL='https://gitlab.zendesk.com/api/v2'
export ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export ZD_TOKEN='ZENDESK_GLOBAL_ADMIN_TOKEN'

# main sandbox
export ZD_SB_URL='https://gitlab1707170878.zendesk.com/api/v2'
export ZD_SB_USERNAME='YOUR_EMAIL_ADDRESS'
export ZD_SB_TOKEN='ZENDESK_GLOBAL_SANDBOX_ADMIN_TOKEN'

# us fed sandbox
export US_SB_ZD_URL='https://gitlabfederalsupport1585318082.zendesk.com/api/v2'
export US_SB_ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export US_SB_ZD_TOKEN='ZENDESK_US_GOV_SANDBOX_ADMIN_TOKEN'

# GitLab token
export GL_TOKEN='YOUR_GITLAB_TOKEN'
```

### Zendesk トークン

Zendesk の管理者として、API コールを実行する必要が出てくる可能性が非常に高いです。これを API トークン経由で行うのは便利です (そして私たちのスクリプトの多くがそうしています)。そのため、管理する Zendesk インスタンス (本番とサンドボックス) ごとに、自分用の API トークンを生成しておくことをおすすめします。

### GitLab トークン

私たちは gitlab.com とやり取りするものをよく作ります。そのため、API コール用のトークンを手元に持っておくと常に便利です!

### Slack

これは業務に必須となります。私たちは Slack でかなり多くのコミュニケーションを行うためです。

#### macOS での Slack セットアップ

これは [Homebrew](#homebrew) を使えば簡単に行えます。コマンドは以下のとおりです。

```bash
brew install --cask slack
```

アップグレードする必要が出たら、単に以下を実行します。

```bash
brew upgrade --cask slack
```

#### Linux での Slack セットアップ

これを行うには、[Slack ダウンロードページ](https://slack.com/downloads/linux) から DEB パッケージをダウンロードし、以下のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Visual Studio Code

これはコードエディタが必要かつ特に好みがない場合にのみ必要です。GitLab の私たちの数名がこれを使っており、GitLab WebIDE と整合性があります。

#### macOS での Visual Studio Code セットアップ

これは [Homebrew](#homebrew) を使えば簡単に行えます。コマンドは以下のとおりです。

```bash
brew install --cask visual-studio-code
```

アップグレードする必要が出たら、単に以下を実行します。

```bash
brew upgrade --cask visual-studio-code
```

#### Linux での Visual Studio Code セットアップ

これを行うには、[Visual Studio Code ダウンロードリンク](https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64) から DEB パッケージをダウンロードし、以下のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Zoom

これは業務に必須となります。私たちは Zoom でかなり多くのコミュニケーションを行うためです。

#### macOS での Zoom セットアップ

これは [Homebrew](#homebrew) を使えば簡単に行えます。コマンドは以下のとおりです。

```bash
brew install --cask zoom
```

アップグレードする必要が出たら、単に以下を実行します。

```bash
brew upgrade --cask zoom
```

#### Linux での Zoom セットアップ

これを行うには、[Zoom ダウンロードセンター](https://zoom.us/download?os=linux) にアクセスして DEB ファイルをダウンロードし、以下のコマンドでインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## ファイルシステムのセットアップ

私たちは _膨大な_ 数のリポジトリを扱います。GitLab UI で多くのことができますが、最終的にはコマンドラインを使う必要が出てきます。

そのため、以下の 2 つをおすすめします。

1. (アクセス権を持つ) 扱うすべてのリポジトリのローカルクローンを持つこと
1. 必要に応じて一括更新するスクリプトを持つこと

具体的にどのようにそれを行うかはあなた次第です。

{{% alert title="Jason の場合のやり方" color="primary" %}}

<details>
<summary>展開して長文を読む</summary>

最初に断っておくと、これは私 (Jason) がやりたい方法に過ぎません。すべて好みに基づいています。ただ、私が CLI でいろいろやっているのを見たときに、私と同じやり方をすると再現する助けになるかもしれません。

まず、ホームディレクトリに `dev` という名前のフォルダを作りました。

そして、扱うすべてのリポジトリのネームスペースのパス構造に合わせて子フォルダを作っていきます。

私はよく自分たちのネームスペースと gitlab-com ネームスペースで作業するので、`dev` の中に 2 つのフォルダを作りました。

```plaintext
.
└── dev
    ├── gitlab-com
    └── gitlab-support-readiness
```

そこから、自分たちのネームスペースのパス構造を自然にたどっていきます。たとえば、私のファイルシステム上での [Zendesk Global Support Ops Super アプリ](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app) のパスは次のようになります。

```plaintext
.
└── dev
    └── gitlab-support-readiness
        └── zendesk-global
            └── apps
```

その `apps` フォルダ内で、対象のリポジトリの `git clone` を実行しました。

すべてをクローンしてセットアップした後に、リポジトリ (とサブモジュール) を更新するスクリプトを作りました。私はこれを 1 日のはじめに実行する傾向があります。これにより古いリポジトリで作業してしまうのを防ぎます。

```bash
#!/bin/bash

echo 'Updating Support Readiness repos...'
CWD=$PWD
find /home/jason/dev/gitlab-support-readiness -type d -name .git | while read dir; do
  path=$(echo $dir | sed s_/".git$"__)
  echo "  Updating $path"
  cd $path
  git submodule update --remote --quiet 2>/dev/null
  git pull -q 2>/dev/null
  if [ $? -eq 1 ]; then
    echo "    Branch issue: $(git branch|grep '*')"
  fi
done
find /home/jason/dev/support -type d -name .git | while read dir; do
  path=$(echo $dir | sed s_/".git$"__)
  echo "  Updating $path"
  cd $path
  git submodule update --remote --quiet 2>/dev/null
  git pull -q 2>/dev/null
  if [ $? -eq 1 ]; then
    echo "    Branch issue: $(git branch|grep '*')"
  fi
done
echo "  Updating /home/jason/dev/gitlab-com/content-sites/handbook"
cd /home/jason/dev/gitlab-com/content-sites/handbook
git pull -q 2>/dev/null
if [ $? -eq 1 ]; then
  echo "    Branch issue: $(git branch|grep '*')"
fi
cd $CWD
```

(サポート管理コンテンツ、ハンドブックなど) 他のパスを追加するたびに、それらも含めるよう更新スクリプトを修正しました。

最後に、もっと素早くナビゲートできるように .bashrc にいくつかエイリアスを作りました。

```bash
alias cdops='cd /home/jason/dev/gitlab-support-readiness'
alias cdglobal='cd /home/jason/dev/gitlab-support-readiness/zendesk-global'
alias cdusfed='cd /home/jason/dev/gitlab-support-readiness/zendesk-us-government'
alias cdusgov='cd /home/jason/dev/gitlab-support-readiness/zendesk-us-government'
alias cdforms='cd /home/jason/dev/gitlab-support-readiness/forms'
alias cdprocessor='cd /home/jason/dev/gitlab-support-readiness/processors'
alias cdslack='cd /home/jason/dev/gitlab-support-readiness/slack'
alias cdteam='cd /home/jason/dev/gitlab-support-readiness/support-team'
alias cdhandbook='cd /home/jason/dev/gitlab-com/content-sites/handbook'
```

また、現在作業しているブランチを把握しやすくするため、シェルプロンプトにブランチを表示するようにしました。これも .bashrc 内で行っています (これは私が使っている Linux 向けです)。

```bash
## Show branch info on PS1

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

</details>

{{% /alert %}}

## 役立つリンク

- [Homebrew サイト](https://brew.sh/)
- [rbenv リポジトリ](https://github.com/rbenv/rbenv)
- [Calendly browser plugin for Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
- [Calendly browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
- [1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/)
- [Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
- [Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
- [Slack ダウンロードページ](https://slack.com/downloads/linux)
- [Zoom ダウンロードセンター](https://zoom.us/download?os=linux)
