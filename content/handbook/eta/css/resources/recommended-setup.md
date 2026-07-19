---
title: '推奨セットアップ'
description: 'チームが推奨するセットアップに関するドキュメント'
upstream_path: "/handbook/eta/css/resources/recommended-setup/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:25:37+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

{{% alert title="注記" color="primary" %}}

これらはすべて推奨事項です。仕事に必要なものもあります（1Password、Zoom、Slack、Okta など）が、より良い代替手段があると考える場合は、そちらを選んでください。

{{% /alert %}}

## 推奨するツール

| ツール | 推奨する理由 |
|---------|---------------------|
| 1Password | さまざまなサービスへログインするため、手元にあると便利です |
| .bashrc/.bash_profile | 多くのスクリプトを CLI で簡単に実行できます。詳細はセットアップを参照してください |
| GitLab Token | gitlab.com への API 呼び出しを CLI で実行するのに役立ちます |
| Homebrew | macOS へのツールのインストールに非常に便利です |
| nodenv | さまざまな node バージョンを使用するプロジェクトを扱います。このツールで素早く切り替えられます。 |
| Okta browser plugin | さまざまなサービスへログインするため、手元にあると便利です |
| rbenv | さまざまな ruby バージョンを使用するプロジェクトを扱います。このツールで素早く切り替えられます。 |
| Slack | 会社の大部分のコミュニケーションに使用します |
| Visual Studios Code | コードエディターが必要です。GitLab Web IDE と整合します |
| Zendesk Global Token | Zendesk API を頻繁に使用します。個人の管理者トークンがあると非常に便利です |
| Zendesk Global Sandbox Token | Zendesk API を頻繁に使用します。個人の管理者トークンがあると非常に便利です |
| Zendesk US Government Token | Zendesk API を頻繁に使用します。個人の管理者トークンがあると非常に便利です |
| Zendesk US Government Sandbox Token | Zendesk API を頻繁に使用します。個人の管理者トークンがあると非常に便利です |
| Zoom | 会議の 99% で使用します |

### Homebrew

{{% alert title="注記" color="primary" %}}

これは macOS を使用する人のみを対象とします。

{{% /alert %}}

Homebrew をインストールするには、セットアップスクリプトを使用します。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### rbenv

これは、特に多数の ruby バージョンを使用する際に優れたツールです。ワークステーションへインストールして設定することを強く推奨します。

設定後は、使用頻度の高い ruby バージョンをインストールするために、次のコマンドを推奨します。

- `rbenv install 3.0.1`
- `rbenv install 3.2.2`

次に、各 ruby バージョンへ `gem install bundler` で [bundler gem](https://rubygems.org/gems/bundler)をインストールすることを推奨します。ほとんどのプロジェクトでは `Gemfile` を使用するため、`bundle` を実行すればプロジェクトに必要な gem をダウンロードできます。

#### rbenv の macOS セットアップ

[Homebrew](#homebrew)を使用すれば簡単に行えます。コマンドは次のとおりです。

`brew install rbenv`

アップグレードして新しい ruby バージョンを取得する必要がある場合は、次を実行します。

`brew upgrade rbenv ruby-build`

#### rbenv の Linux セットアップ

これには `apt` などのパッケージマネージャーも使用できますが、代わりに `git` でインストールすることを推奨します。次のコマンドを実行します。

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

rbenv とプラグインをアップグレードするには、次を実行します。

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

#### 1Password のアプリベースセットアップ

{{% alert title="注記" color="primary" %}}

これは macOS 専用です。Linux 版もありますが、現在は正常に動作しません。

{{% /alert %}}

1Password アプリをインストールするには、[Homebrew](#homebrew)で次のコマンドを使用します。

```bash
brew install --cask 1password
```

アップグレードするには、次を使用します。

```bash
brew upgrade --cask 1password
```

#### 1Password のブラウザベースセットアップ

Chrome ベースのブラウザには、[Chrome 用 1Password browser plugin](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)ページから追加できます。

Firefox ベースのブラウザには、[Firefox 用 1Password browser plugin](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/)ページから追加できます。

### Okta browser plugin

Chrome ベースのブラウザには、[Chrome 用 Okta browser plugin](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)ページから追加できます。

Firefox ベースのブラウザには、[Firefox 用 Okta browser plugin](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)ページから追加できます。

インストール後、ブラウザで Okta にログインしていれば動作を開始します。

### nodenv

これは、特に多数の node バージョンを使用する際に優れたツールです。ワークステーションへインストールして設定することを強く推奨します。

#### nodenv の macOS セットアップ

[Homebrew](#homebrew)を使用すれば簡単に行えます。コマンドは次のとおりです。

`brew install nodenv`

アップグレードして新しい node バージョンを取得する必要がある場合は、次を実行します。

`brew upgrade nodenv node-build`

#### nodenv の Linux セットアップ

これには `apt` などのパッケージマネージャーも使用できますが、代わりに `git` でインストールすることを推奨します。次のコマンドを実行します。

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

nodenv とプラグインをアップグレードするには、次を実行します。

```bash
cd ~/.nodenv
git pull
cd ~/.nodenv/plugins/node-build
git pull
```

### .bashrc/.bash_profile/.zshrc のセットアップ

このファイルへ何を記述するかは自分で決められますが、使用するすべてのスクリプトなどが正しく動作するよう、少なくとも次を行うことを推奨します。

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

Zendesk 管理者として、API 呼び出しを行う必要が生じる可能性が高いです。API トークンを介して行うのは便利で、多くのスクリプトもこの方法を使用します。そのため、管理する各 Zendesk インスタンス（本番環境とサンドボックス）で、個人用の API トークンを生成することを推奨します。

### GitLab トークン

gitlab.com と連携するものを頻繁に作成します。そのため、API 呼び出し用の API トークンを手元に用意しておくと常に便利です。

### Slack

Slack で頻繁にコミュニケーションを取るため、これは仕事に必要です。

#### Slack の macOS セットアップ

[Homebrew](#homebrew)を使用すれば簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask slack
```

アップグレードする必要がある場合は、次を実行します。

```bash
brew upgrade --cask slack
```

#### Slack の Linux セットアップ

[Slack ダウンロードページ](https://slack.com/downloads/linux)から DEB パッケージをインストールし、次のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Visual Studios Code

これはコードエディターが必要で、特に好みがない場合にのみ必要です。GitLab の複数のメンバーが使用しており、GitLab WebIDE と整合します。

#### Visual Studios Code の macOS セットアップ

[Homebrew](#homebrew)を使用すれば簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask visual-studio-code
```

アップグレードする必要がある場合は、次を実行します。

```bash
brew upgrade --cask visual-studio-code
```

#### Visual Studios Code の Linux セットアップ

[Visual Studios Code ダウンロードリンク](https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64)から DEB パッケージをインストールし、次のように DEB ファイルをインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Zoom

Zoom で頻繁にコミュニケーションを取るため、これは仕事に必要です。

#### Zoom の macOS セットアップ

[Homebrew](#homebrew)を使用すれば簡単に行えます。コマンドは次のとおりです。

```bash
brew install --cask zoom
```

アップグレードする必要がある場合は、次を実行します。

```bash
brew upgrade --cask zoom
```

#### Zoom の Linux セットアップ

[Zoom ダウンロードセンター](https://zoom.us/download?os=linux)へ移動して DEB ファイルをダウンロードします。次のコマンドでインストールします。

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## ファイルシステムのセットアップ

私たちは非常に多くのリポジトリを使用します。GitLab UI で多くの作業を行えますが、最終的にはコマンドラインを使用する必要があります。

そのため、次の 2 点を推奨します。

1. 作業するすべてのリポジトリ（アクセス権があるもの）のローカルクローンを持つ
1. 必要に応じて一括更新するスクリプトを用意する

具体的な方法は自分で決められます。

{{% alert title="Jason の方法" color="primary" %}}

<details>
<summary>長文を展開する</summary>

これはあくまで私が好む方法です。すべて好みに基づきます。ただし、私が CLI で行う作業を見かけた場合は、同じ方法にすると再現に役立つかもしれません。

まず、ホームディレクトリに `dev` というフォルダーを作成しました。

扱うすべてのリポジトリの namespace パスに合わせて子フォルダーを作成します。

私たちの namespace と gitlab-com namespace で作業することが多いため、`dev` に 2 つのフォルダーを作成しました。

```plaintext
.
└── dev
    ├── gitlab-com
    └── gitlab-support-readiness
```

ここから、namespace の自然なパスに従いました。例えば、ファイルシステム上の [Zendesk Global Support Ops Super app](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app)へのパスは次のようになります。

```plaintext
.
└── dev
    └── gitlab-support-readiness
        └── zendesk-global
            └── apps
```

その `apps` フォルダーで、対象リポジトリを `git clone` しました。

すべてをクローンしてセットアップした後、リポジトリ（およびサブモジュール）を更新するスクリプトを作成しました。毎日の開始時に実行しています。古いリポジトリで作業することを防げます。

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

サポート管理コンテンツやハンドブックなど、他のパスを追加するたびに、それらも含まれるよう更新スクリプトを変更しました。

最後に、より速く移動できるよう .bashrc ファイルにいくつかのエイリアスを作成しました。

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

作業中のブランチを把握できるよう、プロンプトに表示するようシェルも調整しました。これも .bashrc ファイルで行います（これは私が使用する Linux 固有です）。

```bash
## Show branch info on PS1

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

</details>

{{% /alert %}}

## 便利なリンク

- [Homebrew サイト](https://brew.sh/)
- [rbenv リポジトリ](https://github.com/rbenv/rbenv)
- [Chrome 用 Calendly browser plugin](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
- [Firefox 用 Calendly browser plugin](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
- [Chrome 用 1Password browser plugin](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [Firefox 用 1Password browser plugin](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/)
- [Chrome 用 Okta browser plugin](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
- [Firefox 用 Okta browser plugin](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
- [Slack ダウンロードページ](https://slack.com/downloads/linux)
- [Zoom ダウンロードセンター](https://zoom.us/download?os=linux)
