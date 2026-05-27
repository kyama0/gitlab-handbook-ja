---
title: '推奨セットアップ'
description: 'チームの推奨セットアップに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/resources/recommended-setup/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: 2026-05-26T12:05:00-05:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

{{% alert title="Note" color="primary" %}}

これらはすべて推奨事項です。一部は業務を行ううえで必須となる場合がありますが（1Password、Zoom、Slack、Okta など）、より良い代替手段があると感じる場合は、ぜひそちらを使ってください。

{{% /alert %}}

## 私たちが推奨するツール

| ツール | 推奨する理由 |
|---------|---------------------|
| 1Password | 様々なものにログインすることになります。手元にあると便利です |
| .bashrc/.bash_profile | 多くのスクリプトを CLI 経由で簡単に実行できるようになります。詳細はセットアップを参照してください |
| GitLab Token | gitlab.com に対して CLI 経由で API コールを実行する際に役立ちます |
| Homebrew | macOS でいろいろなものをインストールするのに非常に便利です |
| nodenv | 私たちは様々な node バージョンを使う多くのプロジェクトを扱っています。このツールを使うと、それらを素早く切り替えられます。 |
| Okta browser plugin | 様々なものにログインすることになります。手元にあると便利です |
| rbenv | 私たちは様々な ruby バージョンを使う多くのプロジェクトを扱っています。このツールを使うと、それらを素早く切り替えられます。 |
| Slack | 社内のかなりの部分のコミュニケーションがこれで行われます |
| Visual Studios Code | コードエディタが必要になります。これは GitLab Web IDE と揃っています |
| Zendesk Global Token | Zendesk API をかなり使うことになります。自分用の管理者トークンがあると非常に便利です |
| Zendesk Global Sandbox Token | Zendesk API をかなり使うことになります。自分用の管理者トークンがあると非常に便利です |
| Zendesk US Government Token | Zendesk API をかなり使うことになります。自分用の管理者トークンがあると非常に便利です |
| Zendesk US Government Sandbox Token | Zendesk API をかなり使うことになります。自分用の管理者トークンがあると非常に便利です |
| Zoom | ミーティングの 99% で使用しています |

### Homebrew

{{% alert title="Note" color="primary" %}}

これは macOS を使っている人のみが対象です

{{% /alert %}}

Homebrew をインストールするには、Homebrew のセットアップスクリプトを使うだけです。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### rbenv

これは特に多くの異なる ruby バージョンを使う必要がある場合に、すばらしいツールです。お使いの環境にインストールしてセットアップすることを強くおすすめします。

セットアップが完了したら、私たちがよく使う一般的な ruby バージョンをインストールするために、次のコマンドを使うことをおすすめします。

- `rbenv install 3.0.1`
- `rbenv install 3.2.2`

次に、`gem install bundler` コマンドを使って各 ruby バージョンに [bundler gem](https://rubygems.org/gems/bundler) をインストールすることをおすすめします。私たちのほとんどのプロジェクトは `Gemfile` を使っているため、`bundle` コマンドを実行することでプロジェクトに必要な gem をダウンロードできます。

#### rbenv の macOS セットアップ

これは [Homebrew](#homebrew) を使って簡単に行えます。コマンドは次のとおりです。

`brew install rbenv`

（より新しい ruby バージョンを取得するために）アップグレードが必要になった場合は、次のようにするだけです。

`brew upgrade rbenv ruby-build`

#### rbenv の Linux セットアップ

`apt` などのパッケージマネージャーを使うこともできますが、代わりに `git` 経由でインストールすることをおすすめします。そのためには、次のコマンドを実行します。

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

rbenv とプラグインをアップグレードするには、次のようにするだけです。

```bash
cd ~/.rbenv
git pull
cd ~/.rbenv/plugins/ruby-build
git pull
```

### 1Password

これには 2 つの方法があります。

- アプリベース（macOS のみ）
- ブラウザベース

#### 1Password のアプリベースのセットアップ

{{% alert title="Note" color="primary" %}}

これは macOS のみが対象です。Linux 版もありますが、現在のところ正しく動作しません。

{{% /alert %}}

1Password アプリをインストールするには、次のコマンドで [Homebrew](#homebrew) を利用します。

```bash
brew install --cask 1password
```

アップグレードするには、次を使います。

```bash
brew upgrade --cask 1password
```

#### 1Password のブラウザベースのセットアップ

Chrome ベースのブラウザには、[1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en) のページから追加できます。

Firefox ベースのブラウザには、[1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/) のページから追加できます。

### Okta browser plugin

Chrome ベースのブラウザには、[Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en) のページから追加できます。

Firefox ベースのブラウザには、[Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/) のページから追加できます。

インストール後は、ブラウザで Okta にログインしているのを確認するだけで、動作し始めるはずです。

### nodenv

これは特に多くの異なる node バージョンを使う必要がある場合に、すばらしいツールです。お使いの環境にインストールしてセットアップすることを強くおすすめします。

#### nodenv の macOS セットアップ

これは [Homebrew](#homebrew) を使って簡単に行えます。コマンドは次のとおりです。

`brew install nodenv`

（より新しい node バージョンを取得するために）アップグレードが必要になった場合は、次のようにするだけです。

`brew upgrade nodenv node-build`

#### nodenv の Linux セットアップ

`apt` などのパッケージマネージャーを使うこともできますが、代わりに `git` 経由でインストールすることをおすすめします。そのためには、次のコマンドを実行します。

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

nodenv とプラグインをアップグレードするには、次のようにするだけです。

```bash
cd ~/.nodenv
git pull
cd ~/.nodenv/plugins/node-build
git pull
```

### .bashrc/.bash_profile/.zshrc のセットアップ

このファイルに正確に何を書くかはあなた次第ですが、私たちが使うスクリプトなどが正しく動作するように、少なくとも次のことを行うことをおすすめします。

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

Zendesk の管理者として、API コールを行う必要が出てくる可能性が非常に高いです。これを API トークン経由で行うのは便利です（私たちのスクリプトの多くもそうしています）。そのため、管理するすべての Zendesk インスタンス（本番環境とサンドボックス）で、自分用の API トークンを生成しておくことをおすすめします。

### GitLab トークン

私たちは gitlab.com とやり取りするものをよく作ります。そのため、API コール用の API トークンを手元に用意しておくと常に役立ちます。

### Slack

私たちは Slack でかなりコミュニケーションを取るため、これは業務上必須となります。

#### macOS の Slack セットアップ

これは [Homebrew](#homebrew) を使って簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask slack
```

アップグレードが必要になった場合は、次のようにするだけです。

```bash
brew upgrade --cask slack
```

#### Linux の Slack セットアップ

これを行うには、[Slack download page](https://slack.com/downloads/linux) から DEB パッケージをインストールし、次のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Visual Studios Code

これは、コードエディタが必要で特に好みがない場合にのみ必要です。GitLab では私たちのうち数名がこれを使っており、GitLab WebIDE と揃っています。

#### macOS の Visual Studios Code セットアップ

これは [Homebrew](#homebrew) を使って簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask visual-studio-code
```

アップグレードが必要になった場合は、次のようにするだけです。

```bash
brew upgrade --cask visual-studio-code
```

#### Linux の Visual Studios Code セットアップ

これを行うには、[Visual Studios Code download link](https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64) から DEB パッケージをインストールし、次のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Zoom

私たちは Zoom でかなりコミュニケーションを取るため、これは業務上必須となります。

#### macOS の Zoom セットアップ

これは [Homebrew](#homebrew) を使って簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask zoom
```

アップグレードが必要になった場合は、次のようにするだけです。

```bash
brew upgrade --cask zoom
```

#### Linux の Zoom セットアップ

これを行うには、[Zoom download center](https://zoom.us/download?os=linux) に移動して DEB ファイルをダウンロードします。次に、以下のコマンドを使ってインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## ファイルシステムのセットアップ

私たちは _大量_ のリポジトリを利用しています。GitLab UI で多くのことができますが、最終的にはコマンドラインを使う必要が出てきます。

そのため、次の 2 点をおすすめします。

1. （アクセス権のある）扱うすべてのリポジトリのローカルクローンを持つ
1. それらを必要に応じて一括更新するスクリプトを持つ

具体的な方法はあなた次第です。

{{% alert title="Jason はこうしている" color="primary" %}}

<details>
<summary>大量のテキストを展開</summary>

最初に断っておきますが、これはあくまで私が好む方法です。すべて好みに基づくものです。ただ、私が CLI で何かをしているのを見たとき、私のやり方に合わせると再現の助けになるかもしれません。

まず、ホームディレクトリに `dev` という名前のフォルダを作りました。

そして、扱うすべてのリポジトリの名前空間のパス構成に合わせて子フォルダを作り始めます。

私はよく私たちの名前空間と gitlab-com 名前空間で作業するため、`dev` に 2 つのフォルダを作りました。

```plaintext
.
└── dev
    ├── gitlab-com
    └── gitlab-support-readiness
```

ここから、私たちの名前空間のパス構成の自然な流れに従いました。例として、私のファイルシステム上での [Zendesk Global Support Ops Super app](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app) へのパスは次のようになります。

```plaintext
.
└── dev
    └── gitlab-support-readiness
        └── zendesk-global
            └── apps
```

その `apps` フォルダ内で、対象のリポジトリの `git clone` を行いました。

すべてをクローンしてセットアップしたら、次に自分のリポジトリ（とサブモジュール）を更新するスクリプトを作りました。私はこれを 1 日の始まりに実行する傾向があります。古いリポジトリで作業してしまうのを防ぐのに役立ちます。

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

（サポート管理コンテンツやハンドブックなどの）他のパスを追加するにつれて、それらも含めるようにこの更新スクリプトを修正しました。

最後に、より素早いナビゲーションのために .bashrc ファイルにいくつかのエイリアスを作りました。

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

また、主に作業中のブランチを把握しやすくするために、プロンプトに作業中のブランチを表示するようシェルを調整しました。これも .bashrc ファイルで行います（私が使っているのが Linux なので、これは特に Linux 向けである点に注意してください）。

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

- [Homebrew site](https://brew.sh/)
- [rbenv repo](https://github.com/rbenv/rbenv)
- [Calendly browser plugin for Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
- [Calendly browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
- [1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/)
- [Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
- [Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
- [Slack download page](https://slack.com/downloads/linux)
- [Zoom download center](https://zoom.us/download?os=linux)
