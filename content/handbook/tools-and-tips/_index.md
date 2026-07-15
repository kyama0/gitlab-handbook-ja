---
title: ツールとヒント
simple_list: true
upstream_path: /handbook/tools-and-tips/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-16T07:30:25+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T11:05:13-04:00"
---

## 概要

このページには、GitLab で働く際の役立つヒントと、私たちが使用するさまざまなツールに関するヒントが含まれています。

## GitLab のヒント

### GitLab.com でのユーザー名の変更

- 開始点: ユーザー名が `old-mary` で、これを単に `mary` にしたいとします。
- **注意:** 各 GitLab アカウントは **userID**（データベースに保存される番号）で追跡されます。
ユーザー名を変更しても、userID は変わりません。
そして GitLab 内のすべての権限、Issue、MR、関連する事項は、ユーザー名ではなく、あなたの **userID** に関連付けられています。
- **注意:** GitLab Team メンバーでない場合、メールアドレス（[ステップ 2](#change-username-step-2)）を除いて同じプロセスが適用されます。これは異なります（@gitlab.com メールではない）ので、自分のメールアカウントに置き換えることができます。

#### ステップ 1: 新しいユーザー名をリクエストする

- この [マージリクエスト](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5170) 以降、[Namesquatting プロセス](/handbook/support/workflows/namesquatting_policy) を介してユーザー名をリクエストすることはできなくなりました。使用したいユーザー名が利用できない場合、別のものを選択する必要があります。

#### ステップ 2: 新しいユーザー名で新しいアカウントを作成する {#change-username-step-2}

- サポートからユーザー名が利用可能であると返事があった場合、それで新しい GitLab.com アカウントを作成します。
新しいアカウントの登録には個人メールを使用し、古い GitLab アカウントで使用されていないものを選択してください。
- [**Profile Settings** > **Emails**](https://gitlab.com/-/profile/emails) に移動し、新しいメールを追加します。
⭐️ **トリック** ⭐️ GitLab のメールが `mary@gitlab.com` の場合、新しいメールを `mary+something@gitlab.com` として追加します: これは [Gmail のトリック](https://support.google.com/mail/answer/12096?hl=en) です！このエイリアスに送信されたすべてのメールは、GitLab のメールアカウントに届きます 😃
- [https://gitlab.com/-/profile/notifications](https://gitlab.com/-/profile/notifications) に移動し、通知メールを `mary+something@gitlab.com` として選択します。
- 古いアカウントを 1 つのブラウザで、新しいアカウントを別のブラウザで開きます（例: Chrome と Firefox、または Chrome と Safari）- 両方のアカウントに同時にログインします。

#### ステップ 3: ちょっと楽しもう (冗談です、これは重要です！)

- 両方のアカウントで [https://gitlab.com/-/profile/account](https://gitlab.com/-/profile/account) に移動します。
- ユーザー名を探します。
この操作は素早く行う必要があります。さもないと、誰かに先を越されて素晴らしい新しいユーザー名を失うリスクがあります。
両方のアカウント間でユーザー名を **入れ替える** 必要があります。これにより、すべての履歴、特権、Issue、割り当てられた MR などを保持できます。
- 2 つのモニターで作業している場合、各ブラウザを 1 つのモニターに開きます。
そうでない場合は、並べて開いて両方を同時に見られるようにします。
- 新しいユーザー名 `mary` を `mary-1` のようなものに変更し、**まだ更新ユーザー名をクリックしないでください**。
古いユーザー名 `old-mary` を新しいユーザー名 `mary` に変更し、**それも更新しないでください**。
ボックスに入力したまま放置してください。
- 前の手順を正しく行ったか確認してください！
- ⚠️ **重要** ⚠️ 最初のもの（`mary` から `mary-1`）を更新します。
すぐに、もう一方（`old-mary` から `mary`）の **更新** をクリックします。
- すぐに、`mary-1` を古い `old-mary` に名前変更し、再度 **更新ユーザー名** をクリックします。
- ジャジャーン！🙌

#### ステップ 4: プロジェクトを移動する（または移動しない）

- 個人プロジェクトがある場合、新しいアカウント（古いユーザー名を持つもの）にインポートしたい場合があります。
これを行うには、新しいアカウント（古いユーザー名を持つもの）で **Create a New Project** をクリックし、元のものとまったく同じ名前を付け、**Git - add repo by url** をクリックし、プロジェクトの `https://` URL をそこに貼り付けます。
作業を簡単にするには、インポートしたいすべてのプロジェクトを `public` 表示に設定してください。
後でプライベートにすることができます。
- デフォルトの **GitLab.io** URL を持つ GitLab Pages プロジェクトがある場合、それらを新しいアカウントにインポートし、変更を加えて **ビルドをトリガー** してサイトを再デプロイする必要があります。
[A レコードの代わりにサブドメイン付き CNAME](https://about.gitlab.com/blog/2016/04/07/gitlab-pages-setup/#custom-domains) を使用している場合のみ影響を受けます。
これは、すべて `A` レコード経由で同じ Pages サーバー IP を指すカスタムドメインを使用する Pages プロジェクトには影響しません。
グループも独自の名前空間で動作するため影響を受けません。
両方のユーザーをグループのメンバーとして追加し、何も変わりません。

これで完了です！

#### ステップ 5: 他の場所でユーザー名を更新する

以下の場所でユーザー名を更新することを忘れないでください:

- [team page](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/team.yml)
- マーケティングの一員である場合、[Marketing Handbook](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/handbook/marketing/index.html.md)
- Workday - プロファイルアクションの 'Additional Data' > 'Edit Effective-Dated Custom Object' の下の GitLab Username

#### ステップ 6: 通知を設定する

チームメンバーは、さまざまな方法で GitLab アクティビティを管理することを選択します。あなたに最も適した方法で通知を設定してください。

1. **To-do リスト:** すべてのチームメンバーは、GitLab アカウント内に [to-do リスト](https://docs.gitlab.com/ee/user/todos.html) を表示します。これにより、さまざまなアクションアイテムを追跡できます。完了したアイテムは done としてマークできます。
1. **メール:** チームメンバーは、[フィルタを使用](#filters) して Gmail アカウントに表示する通知（あれば）を選択できます。
1. **Slack 通知:** チームメンバーは、[Slack 通知](https://docs.gitlab.com/ee/user/project/integrations/gitlab_slack_application.html) を有効化することを選択できます。GitLab slack は 90 日後に期限切れとなるため、長期的なアクティビティ管理のためのツールではないことに注意してください。

### GitLab チームメンバーのリソース

[GitLab チームメンバーリソースプロジェクト](https://gitlab.com/gitlab-com/gitlab-team-member-resources) には、[GitLab チームメンバー](/handbook/company/structure/) 間で共有するための wiki があります。

これは、子育てなど、人々が知識を共有したいかもしれないがハンドブックには最適でないトピック向けです。

### GitLab チームメンバーのセットアップ

[@tipyn](https://gitlab.com/tipyn) の [ホームオフィス機器と macOS セットアップ](https://gitlab.com/tipyn/tipyn/blob/master/mac-os-setup.md)

### Gravatar 写真のリンク

GitLab メールアドレスを GitLab、Slack、[Gravatar](https://gravatar.com/) 上の認識しやすい自分の写真にリンクします。
すべての GitLab アカウントには、写真を使用することは会社の方針です。アバター、ストック写真、サングラスを着けたものではなく。私たちには多くの GitLab チームメンバーがおり、私たちの脳は人を認識することに慣れているので、それを活用しましょう。

***注**: gitlab.com メールに関連付けて Gravatar に写真をアップロードした場合、GitLab と Slack のプロファイルに画像を設定する必要はなく、Gravatar の写真が自動的に使用されます。GitLab と Slack のプロファイルにすでに個別の写真をアップロードしている場合、それらを削除するだけで、デフォルトで Gravatar の写真が使用されます。*

### Mermaid の使用

Mermaid は、GitLab 内でフローチャート、グラフ、図、ガントチャートなどを作成できるツールです！Mermaid の使用方法については [GitLab ドキュメントの例](https://docs.gitlab.com/ee/user/markdown.html#mermaid) をご覧ください。

Mermaid を扱う際に役立つ追加リソース:

- 作業を確認するための [ライブ Mermaid エディタ](https://mermaid-js.github.io/mermaid-live-editor)！
- [GitHub の Mermaid 概要](https://mermaid.js.org/#/)
- チャートに色を追加するための [CSS カラーバンク](https://www.rapidtables.com/web/css/css-color.html)。
- Mermaid チャートに画像を追加する方法の例は [こちら](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgQVtDaHJpc3RtYXNdIC0tPnxHZXQgbW9uZXl8IEIoR28gc2hvcHBpbmcpXG4gIEIgLS0-IEN7TGV0IG1lIHRoaW5rfVxuICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICBDIC0tPnxUd298IEVbaVBob25lXVxuICBDIC0tPnxUaHJlZXwgRltmYTpmYS1jYXIgQ2FyXVxuICBDIC0tPiBHXG4gIEcoXCI8aW1nIHNyYz0naHR0cHM6Ly9pY29uc2NvdXQuY29tL21zLWljb24tMzEweDMxMC5wbmcnOyB3aWR0aD0nMzAnIC8-XCIpIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJzZWN1cml0eUxldmVsIjoibG9vc2UifX0) で確認できます。
- GitLab チームメンバーが作成した Mermaid チャートの例:
  - [Cassiana Gudgenov](https://gitlab.com/cgudgenov) (People Compliance Partner) による [Talent Development Program Chart](/handbook/people-group/talent-development-program/#talent-development-program-chart)
  - [CEO Year at a Glance](/handbook/company/cadence/#year)
  - [Data Infrastructure System Diagram](/handbook/enterprise-data/platform/)
- Mermaid 図の [高度なレイアウトデモ](mermaid)

*注: GitLab ハンドブックで Mermaid チャートを作成する際は、チャートの前に `バッククォート 3 つの記号` の後に `mermaid` という単語を、チャートの最後に `バッククォート 3 つの記号` を入力する必要があります。これにより、Markdown が .md と Mermaid を区別できるようになります。これがどのように見えるか確認するには、上記でリンクされている Mermaid チャートの例を参照してください。*

### GitLab サーバーを区別するための視覚的な助け

複数の GitLab インスタンスで作業しており、視覚的に区別したい場合は、デフォルトの [Navigation テーマ](https://docs.gitlab.com/ee/user/profile/preferences.html#navigation-theme) を別の色に変更できます。

### GitLab ハンドブックのページ数の計算

ページ数は、シンプルな 2 段階のプロセスで決定されます:

1. ハンドブックの単語数をカウントします。
これは、リポジトリのルートディレクトリから `find source/handbook -type f | xargs wc -w` を実行することで行えます。
1. 単語数を [WordCounter](https://wordcounter.net/words-per-page) に提出してページ数に変換します。

### Trainee maintainer Issue の管理

[maintainer トレーニングプロセス](/handbook/engineering/workflow/code-review/) の一部は、レビューしたマージリクエストを追跡し、maintainer トレーニング Issue にレビューに関する評価を書き留めることです。
maintainer トレーニング Issue の手動管理は時間がかかる場合があります。このタスクを支援するために他の人が作成したツールがあります:

- <https://gitlab.com/nolith/review-tanuki>
- <https://gitlab.com/splattael/traintainer>
- <https://gitlab.com/arturoherrero/trainee>
- <https://gitlab.com/alberts-gitlab/review-tanuki>
- <https://gitlab.com/gitlab-org/gitlab-dev-cli#maintainer-trainee-helper>

**注意:** これらのツールを使用する際、既存のコメントに maintainer へのメンションを追加しないようにしてください。編集されたコメントでメンションされたユーザーがメールで通知されない [既知の Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/118779) があります。それは TODO のみを生成し、maintainer はそれを使用しない場合があります。

## ハンドブックのヒント

ハンドブックのアーキテクチャ、構造、およびデスクトップでローカルに編集する方法については、[Handbook Development セクション](https://handbook.gitlab.com/docs/development/) を参照してください。ブラウザでハンドブックを編集する方法については、[ハンドブック編集ページ](/handbook/about/editing-handbook/) を参照してください。

## www-gitlab-com のヒント

[https://about.gitlab.com](https://about.gitlab.com) サイトの一部は、[www-gitlab.com](https://gitlab.com/gitlab-com/www-gitlab-com/) リポジトリにあります。マーケティングウェブサイトは、[digital experience team](/handbook/marketing/digital-experience/) によって [GitLab グループ](https://gitlab.com/gitlab-com/marketing/digital-experience) で保守されています。

`data/*.yml` ファイルは `www-gitlab-com` リポジトリにあり、マーケティングウェブサイトとハンドブックを含む多数のサイトで使用されています。

サイト自体のドキュメントは、[リポジトリの `doc` フォルダ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/doc) の下のマークダウンドキュメントにあります。サイトでローカル開発を行うには、[doc/development.md](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md) から始めるのがおそらく最善です。

## 画像と GIF のヒント

このセクションで紹介されているヒントの多くは、画像操作ツールである ImageMagick を必要とします。インストール方法は [ImageMagick セクション](#imagemagick) で説明されています。

### ImageMagick

[ImageMagick](https://imagemagick.org/) は、画像のリサイズ、ドロップシャドウの追加、GIF の編集などに使用できる `convert` CLI コマンドを提供します。

macOS では、Homebrew で ImageMagick をインストールします:

``` shell
brew install imagemagick
```

Linux では、パッケージマネージャを使用します:

``` shell
sudo dnf install ImageMagick
sudo apt install imagemagick
```

### GIF の作成

これについてはハンドブックに [専用セクション](/handbook/product/product-processes/making-gifs/) があります。

### 画像のリサイズ

[ImageMagick](#imagemagick) は、画像のリサイズに使用できる `convert` CLI コマンドを提供します。私たちのブログ画像は 1920x1080 を超える解像度は必要ありません。これにより帯域幅が節約され、ウェブサイトの読み込みが速くなります。

この例は、既存の画像を `1920x1080` 解像度に変換し、インラインで置き換えます:

``` shell
convert blogimage.jpg -resize 1920x1080 blogimage.jpg
```

`-resize` パラメータにパーセンテージ値を使用することもできます。`convert` CLI コマンドは [ドキュメント](https://imagemagick.org/script/convert.php) で説明されているもう少し多くのことができます。

複数の画像を変換する必要がある場合は、`convert` コマンドを `find` と組み合わせます。これにより画像がインラインで置き換えられることに注意してください。

```shell
find . -type f -name '*.jpg' -exec sh -c 'convert {} -resize 1920x1080 {}' \;
```

### HEIC を JPG に変換

> ヒント: 最近の macOS バージョンは、Finder で右クリックメニュー `Quick Actions > Convert Image` を提供しており、画像を自動的に JPG に変換します。クイックな UI 変換にはこの方法を使用してください。

[ImageMagick](#imagemagick) は、`HEIC` 画像形式をすべてのウェブサイトで受け入れられる `JPG` などの他の形式に変換できる `mogrify` CLI コマンドを提供します。

```shell
mogrify -format jpg icloudphoto.HEIC
```

複数の画像を変換する必要がある場合は、`mogrify` コマンドを `find` と組み合わせます。これにより新しいファイルが作成され、`.heic|HEIC` ファイルの手動クリーンアップが必要になることに注意してください。`-iname` は大文字小文字を区別しない一致を使用します。

```shell
find . -type f -iname '*.heic' -exec sh -c 'mogrify -format jpg \"{}\"' \;
```

シェルエイリアスの例は [@dnsmichi の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/.oh-my-zsh/custom/aliases.zsh?ref_type=heads) にあります。

### 画像にドロップシャドウを追加

[ImageMagick をインストール](#imagemagick) し、`convert` CLI コマンドを使用してドロップシャドウを追加します。`-shadow` パラメータの寸法を調整する必要があるかもしれません。

```shell
convert input.png \( +clone -background black -shadow 80x20+0+15 \) +swap -background transparent -layers merge +repage output.png
```

## トラブルシューティング

### 2FA デバッグ

予期せず 2FA が機能しなくなった場合（新しい電話やコンピュータがない場合）、通常はどちらかのデバイスで日付と時刻が正しく設定されていないためです。
両方のデバイスで「自動日付と時刻」が **有効** になっていることを確認してください。
すでに有効になっている場合は、強制的に更新するためにオフ/オンを切り替えてみてください。
これでうまくいかない場合は、IT Ops に 2FA 設定をリセットしてもらうようリクエストしてください。

設定を見つけるためのリンク:

- iOS: [iPhone、iPad、iPod touch の日付と時刻でヘルプを得る - Apple Support](https://support.apple.com/en-us/101619)
- macOS: [Mac で日付や時刻が間違っている場合 - Apple Support](https://support.apple.com/en-ca/guide/mac-help/mchlp2996/mac)
- Linux (systemd を使用): [systemd-timesyncd - ArchWiki](https://wiki.archlinux.org/title/Systemd-timesyncd)

Android については、ベンダーごとに設定の UI が異なるため、明確なリンクはありません。
ただし、設定アプリで「日付と時刻」を探すと、「自動日付と時刻」のトグルがあるはずです。

### 特定のポートを占有しているプロセスを確認する

#### Netstat を使用する

Netstat はネットワーク接続、ルーティングテーブル、インターフェース統計などを表示するのに便利なコマンドラインツールです。トラブルシューティング中の netstat の最も一般的な使用方法の 1 つは、接続を待機している開いているポートのリストを表示することです。

`sudo netstat -tulpn | grep -i listen`

```sh
[user@gitlab ~]$ sudo netstat -tulpn| grep -i listen
 tcp   0      0 127.0.0.1:5000     0.0.0.0:*     LISTEN     18948/registry
 tcp   0      0 127.0.0.1:9100     0.0.0.0:*     LISTEN     18841/node_exporter
 tcp   0      0 127.0.0.1:9229     0.0.0.0:*     LISTEN     18764/gitlab-workho
 tcp   0      0 127.0.0.1:8080     0.0.0.0:*     LISTEN     18980/unicorn maste
 tcp   0      0 127.0.0.1:9168     0.0.0.0:*     LISTEN     18808/puma 4.3.3.gi
 tcp   0      0 0.0.0.0:80         0.0.0.0:*     LISTEN     18831/nginx: master
```

すでに使用中のポートを見つけた場合、同じポートを利用するサービスやプログラムを正常に起動することはできません。解決方法のオプションは:

- 必要なポートで現在実行されているサービスを停止し、ポートが使用されていないことを確認する
- ドキュメントを確認して、どちらかのプロセス（既存のものまたは新しいサービス）に代替ポートを指定できるかどうかを判断する

#### 既知のポートの競合

GitLab Development Kit が `./run` コマンドで起動できず、ポート 3000 がすでに使用されているために Unicorn が終了する場合、何のプロセスがそれを使用しているかを確認する必要があります。
`sudo lsof -iTCP:3000 -sTCP:LISTEN -n -P` を実行すると違反者が表示されるので、このプロセスを終了できます。
このコマンドをシェルの `.bash_profile` または同等のものでエイリアスとして設定すると賢明かもしれません。

シェル用の `.bash_profile`（または同等のファイル）に次のような関数を追加することもできます:

``` zsh
function killport() {
  lsof -i tcp:$1 | awk '(NR!=1) && ($1!="Google") && ($1!="firefox") {print $2}' | xargs kill
}
```

これは次のように使用できます:

``` shell
> killport 3000
```

これにより、ポート 3000 を現在使用しているプロセスが終了します。

## ターミナル

### コンソールに現在の git ブランチを表示する

この小さな構成を追加することで、現在使用している git ブランチを見ることができます。
git リポジトリ内にいない場合、ユーザー名と現在のディレクトリのみを表示します。

**Bash 用:**

`.bash_profile` に次の行を追加します

``` sh
git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\u@\[\033[32m\]\w\[\033[33m\]\$(git_branch)\[\033[00m\]\$ "
```

以下を行うと、現在のターミナルで変更が反映されます:

``` sh
source ~/.bashrc
```

**Zsh 用:**

macOS Catalina では、ZSH が [デフォルトシェル](https://support.apple.com/en-us/102360) です。
[Oh My ZSH!](https://ohmyz.sh/) をインストールすると、git プラグインが自動的に読み込まれ、現在の git ブランチが表示されます。

別のオプションは:

`~/.zshrc` に次の行を追加します

``` sh
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
PROMPT="%n@%d~%f%\$(parse_git_branch) %# "
```

変更は次のターミナルに表示されるか、実行することですぐに表示されます。

``` sh
. ~/.zshrc
```

### シェルエイリアス

シェルでコマンドエイリアスを使用してワークフローを高速化します。
[これらのエイリアス](https://gitlab.com/sytses/dotfiles/blob/master/zsh/aliases.zsh) と [Sid の dotfiles プロジェクト](https://gitlab.com/sytses/dotfiles/tree/master) のその他のものを見てください。
たとえば、`.bash_profile` または同等のシェル用に次を追加することで、<kbd>s</kbd>を入力するだけで、このウェブサイトの `master` ブランチをチェックアウトし、最新の変更をプルし、Sublime Text でリポジトリを開くことができます:

``` sh
alias gco='git checkout'
alias gl='git pull --prune'
alias gca='git commit -a'
alias gp='git push origin HEAD'
alias www='cd ~/Dropbox/Repos/www-gitlab-com/source'
alias s='www;subl .;gco master;gl'
```

編集後は、<kbd>gca</kbd>を入力してすべての変更をコミットし、続いて<kbd>gp</kbd>を入力してリモートブランチにプッシュできます。

[Oh My ZSH!](https://ohmyz.sh/) を使用している場合、以下に示すカスタムエイリアスを追加できます。ファイル名は自由に定義でき、`.zsh` という接尾辞のみが重要です。

``` sh
vim ~/.oh-my-zsh/custom/aliases.zsh
```

例は [Michael Friedrich の dotfiles プロジェクト](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/.oh-my-zsh/custom) にあります。

#### リモートブランチが削除されたローカル Git ブランチを削除する

リモートサーバーで削除されたローカル Git ブランチを削除するには、`--prune` プル/フェッチコマンドを他のコマンドと組み合わせる必要があります。`git branch -vv` はローカルブランチのすべての詳細をリストし、続く `grep` はデフォルトのリモート `origin` で gone とマークされたすべてのものをフィルタリングし、結果を `awk` で印刷します。この引数は `git branch -d` に渡され、すべての一致する結果に対して実行されます。`-d` はマージされていないブランチを削除しないことに注意してください。`-D` はより影響が大きいですが、誤ってブランチを削除する可能性があります。

```sh
# Delete all remote tracking Git branches where the upstream branch has been deleted
alias git_prune="git fetch --prune && git branch -vv | grep 'origin/.*: gone]' | awk '{print \$1}' | xargs git branch -d"
```

潜在的に影響を受けるブランチを確認するには、最終的な削除コマンドなしでコマンドを実行します。エイリアスでは `\$1` がシェルエスケープされ、`$1` として実行する必要があることに注意してください。

```sh
git fetch --prune && git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}'
```

### Dotfiles

dotfiles を使用してシステムをカスタマイズし、すべての構成を中央の場所に保管できます。`dot file` という名前は、すべての構成ファイルがドットで始まり、デフォルトのリスト表示 `ls` から隠していた Linux/Unix から派生しています。

チームメンバーの dotfiles プロジェクト:

- [Sid Sijbrandij の dotfiles](https://gitlab.com/sytses/dotfiles)
- [Michael Friedrich の dotfiles](https://gitlab.com/dnsmichi/dotfiles)、詳細は [このブログ記事](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)
- [Brendan O'Leary の dotfiles](https://gitlab.com/brendan/dotfiles)

## 旅行

### 長距離フライト

注意: これらのアイテムは自分で支払う必要があります。

- [Quiet comfort Bose オーバーイヤーノイズキャンセリングヘッドフォン](https://www.bose.com/p/noise-cancelling-headphones/quietcomfort-acoustic-noise-cancelling-headphones/QC-HEADPHONEARN.html)（乾いた目に触れないように）
- カスタム成形耳栓（補聴器店で最大 200 ドルかかる場合がありますが、多くの状況で使用可能。[DIY キット](https://www.amazon.com/Radians-CEP001-Custom-Molded-Earplugs/dp/B003A28P4I) もありますが、Sid は試したことがありません）
- メラトニン（妊娠中および授乳中は安全でない可能性があります）
- 睡眠薬（市販薬で問題ありません）

### WorkFrom

[WorkFrom](https://workfrom.co/) は、リモートワークに優しいコーヒーショップやそのような場所のクラウドソースリソースです。

### Wi-Fi の使用

セキュリティのない Wi-Fi を使用する場合、GitLab のために旅行する、または未知のネットワークを頻繁に使用するなら、[個人用 VPN](/handbook/tools-and-tips/personal-vpn/) を検討してください。

地理的位置に基づく制限がある仕事の場合（たとえば、特定のデータ制限と国別アクセスを持つ顧客をサポートする）、個人用 VPN は最善の選択肢ではない可能性があることを覚えておいてください。VPN ベンダーはしばしばトラフィックを他の国経由でルーティングするためです。
この制限が当てはまる場合は、テザリングを検討してください。
[テザリング](https://en.wikipedia.org/wiki/Tethering) は、携帯電話をホットスポットとして設定し、Wi-Fi 経由でラップトップを接続することで、安全でない Wi-Fi ネットワークを避けます。
このトピックについての詳細情報は[こちら](https://www.computerworld.com/article/1536443/how-to-use-a-smartphone-as-a-mobile-hotspot.html) にあり、データプランがそれをサポートしていれば問題なく使用できます。
国際旅行の前にダブルチェックしてください。サポートされていても隠れたコストがある場合があります。

[キャプティブポータル](https://en.wikipedia.org/wiki/Captive_portal) のあるネットワークに接続するとき、現代のサイトは HTTPS を使用するため、ほとんどのウェブサイトは読み込まれません。キャプティブポータルはそのプロセスを中断します。
デバイスはこれを補おうとしますが、手動で管理するのは難しい場合があります。
問題がある場合は、まず [https://captive.apple.com/](https://captive.apple.com/) に接続してみてください。これは意図的に HTTP のみで、キャプティブポータルを読み込みます。

### FIDO2 / WebAuthn

FIDO2 は、暗号的に強力な 2FA（2 要素認証）方法です。これはハードウェアベースで、通常は USB、NFC、または MacBook の Touch ID や iPhone の Face ID などのデバイスに組み込まれて展開されます。標準はオープンで、[FIDO Alliance](https://fidoalliance.org/) によって維持されています。[WebAuthn](https://www.okta.com/sites/default/files/pdf/How_WebAuthn_Works_0.pdf) は、公開鍵暗号化を使用したウェブアプリケーションによる検証をサポートする FIDO2 のコンポーネントです。FIDO2/WebAuthn は推奨される 2FA の方法であり、GitLab のセキュリティ部門から強く推奨されています。2FA のポイントの 1 つは、最初の要因のためにユーザー名とパスワードで認証する一方で、二次要因は認証のために別の通信チャネル（または「アウトオブバンド (OOB)」）を使用するべきであるということです。FIDO2/WebAuthn デバイスは、確かに他のすべての方法よりもこの基準を満たしています。他にも [以下に概説されている](#other-2fa-methods) 2FA 方法があります。

#### 仕組み

認証プロセス中、ユーザー名とパスワードを入力します。2FA が有効で FIDO2/WebAuthn を使用するシステムでは、ハードウェアトークンが照会されます。FIDO2 デバイスのボタンを押すかセンサーをタップすることで、FIDO2 デバイスは暗号的に強力な方法で認証プロセスを完了します。これは一般に最も安全な形式の 2FA とされています。また、[TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) アプリケーションによって生成されたコードを手動で入力するよりも便利です。

FIDO2/WebAuthn デバイスの登録時、公開/秘密キーペアが生成され、公開キーは認証するサービスに登録され、秘密キーはデバイス上の安全なチップに保存されます。認証時、ユーザー名とパスワードを入力した後、デバイスは秘密キーによってのみ認証できる暗号化されたメッセージで照会されるため、デバイス上のボタンまたはセンサーが押されてクエリが完了し、ユーザーがシステムへのアクセスが許可されます。

#### FIDO2/WebAuthn デバイス

YubiKey: 最も人気のある FIDO2/WebAuthn デバイスは Yubico の YubiKey です。YubiKey にはさまざまなサイズとスタイルがあります。Yubico（Google とともに）は、FIDO2 標準の前身（U2F）の開発を支援した後、FIDO Alliance に移管されました。WebAuthn デバイスを持つほとんどの GitLab チームメンバーは YubiKey を持っています。注目すべきは、長い間 Yubico のファームウェアのソースコードがオープンソースだったことですが、新しいバージョンのファームウェアの一部はクローズドソースです。これにより、特に可能な限りオープンソースを使用することを好むセキュリティコミュニティ内で、いくつかの懸念が生じています。

#### 安全ですか？

YubiKey は、セキュリティ業界全体、サードパーティ監査、およびセキュリティチームによって調査されています。YubiKey は GitLab 内での使用に十分適しており、FIDO2/WebAuthn 互換システムでうまく機能します。

YubiKey にはいくつかの [セキュリティ Issue](https://www.yubico.com/support/security-advisories/) があり、通常は迅速に解決されます。Yubico はセキュリティ勧告のための専用ページを持っています。
まれに、ハードウェアトークンを含むセキュリティ Issue が発生し、ファームウェアの更新では問題を緩和できないため、ハードウェアトークンの交換が必要になります。これは [2017 年の Yubico](https://support.yubico.com/hc/en-us/articles/360021803580-Infineon-RSA-Key-Generation-Issue-Customer-Portal) で発生しました。

FIDO2/WebAuthn トークンに影響するほとんどの攻撃モデルは、トークン自体への物理的アクセスを必要とします。つまり、セキュリティ勧告には、トークンまたはトークンが差し込まれたコンピュータへのアクセスを介してのみ悪用できるコーディング Issue が関係します。これにより、デバイス自体の安全性がさらに高まります。

### 推奨事項

GitLab で機能するその他のハードウェアトークンもまずまずですが、いくつか制限があります。チームメンバーへの推奨ソリューションは、Yubico の YubiKey です。

- YubiKey を注文する前にこの [フォーム](https://forms.gle/VZ7Q4RWXfmfB58FJ9) に記入してください。グループ購入サブスクリプションを通じて YubiKey を提供できる可能性があります。
- 推奨される YubiKey モデルには、YubiKey 5Ci（iPhone ユーザー向け）と YubiKey 5 NFC（Android ユーザー向け）が含まれます。

GitLab チームメンバーが心に留めておくべきことは、会社のラップトップを持って旅行する場合 - 出張、家族や友人の訪問だが仕事を続けるつもり、または単に地元のコーヒーショップへの旅行 - トークンをクレジットカードと同じレベルの注意で扱うことです。盗まれる可能性のある場所に置いておかないでください。

ハードウェアトークンを失う可能性が心配な場合は、[Touch ID](/handbook/security/corporate/end-user-services/onboarding101/#macbook-step-5-okta-account-verification) と、可能であれば [モバイルデバイス](/handbook/security/corporate/end-user-services/onboarding101/onboarding-mobile-devices) を承認された認証トークンとして追加してください。FIDO2/WebAuthn 標準に従うサイトは、複数のトークンをサポートする必要があります。これにより、1 つを紛失または盗まれた場合でも、別の方法でログインできます。現在、YubiKey はユーザーごとに 1 つに制限されており、紛失または破損した場合は、#it_security_help Slack チャンネルで連絡してください。交換のサポートをします。

GitLab チームメンバーには 2FA の使用が必須です。

## その他の 2FA 方法 {#other-2fa-methods}

[FIDO2/WebAuthn](#fido2--webauthn) に加えて、2FA に使用される追加のプロトコルがあります。「暗号プッシュ」、[TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password)、SMS ベースの認証（テキストメッセージ）があります。それぞれの長所と短所を以下に列挙します。

### 暗号プッシュ

これは通常、単に「プッシュテクノロジー」と短縮されます。「プッシュ」と呼ばれるのは、認証プロセス中、ユーザー名とパスワードを入力した後、認証するサービスが、所有しているデバイスへの別の通信チャネルを介して二次認証を自動的に「プッシュ」するためです。これは通常、電話で、そのプロセス専用の電話アプリを介して促進されます。登録プロセス中、暗号的に安全なキーペアが生成され、アプリはそのキーペアを使用して認証先のサービスから来るプッシュを一意に識別します。通常、アプリは直接通知するか、アクセスすると、認証を試みていたかを尋ねるメッセージがポップアップ表示されます。「はい」と答えると認証プロセスが完了します。GitLab チームメンバーは、[Okta Verify](https://help.okta.com/eu/en-us/Content/Topics/end-user/ov-overview.htm) で使用されるため、このプッシュ方法に精通しているかもしれません。

#### プッシュの注意事項

この方法はハードウェアトークンほど安全ではありません。通常、これらのデバイスはデバイス上の安全なチップにデータを安全に保存します。プッシュ電話アプリも電話のローカル安全チップに秘密データを保存している可能性がありますが、プロセス全体はサービスのサーバーが稼働していることに依存しており、WebAuthn はより自己完結型です。ただし、プッシュテクノロジーは依然として非常に安全で、構成すると使用するのが比較的便利です。

### TOTP

Time-based One-Time Password はかなり安全です。この方法は、サービスとエンドユーザーが認証する間の通信を一意に識別するために使用される暗号シードに基づく回転値を含みます。値は通常、30 秒ごとに変わる 6 桁の数字で、ユーザー名とパスワードを正常に入力した後の認証プロセス中、その値を入力するように求められます。GitLab チームメンバーは、TOTP コードを管理するために [1Password](/handbook/security/corporate/systems/1password/) を使用する必要があります。

#### TOTP の注意事項

TOTP の主な問題は、この 2FA プロセス中、エンドユーザーが通常、単一の通信チャネル（通常はウェブブラウザ）を通じてすべての値を入力することです。これが事実であるため、攻撃者があなたに偽のウェブページを送り、TOTP 値を含む資格情報を入力させる可能性があります。確かに、攻撃者はあなたの返信を読み取ってすべての資格情報を非常に迅速に送信し、30 秒以内に全プロセスを完了する必要があるため、リスクは大幅に減少しますが、依然として存在します。WebAuthn とプッシュは TOTP よりも好ましいですが、コミュニケーションを開始するのが自分であり、メールのリンクをクリックしない限り、問題ないはずです。

### SMS

最も一般的な 2FA の方法の 1 つは、SMS ベースのテキストメッセージングです。これは TOTP に似ていますが、ローカルに保存されたアプリケーションを使用して 6 桁の数字を計算する代わりに、認証先のサービスが SMS テキストメッセージを介して 6 桁を送信します。アカウントを設定するときに、サービスに携帯電話番号を提供して、6 桁を送信する電話番号を知らせます。

#### SMS の注意事項

注意事項の数のため、SMS は他に 2FA オプションがない場合にのみ推奨されます。SMS メッセージングの主な問題を以下に示します。

- SMS は TOTP と同じフィッシュスタイルの攻撃の対象です。主な違いは、一部の SMS ベースの認証スキームは 30 秒ではなく 60 秒後にタイムアウトすることで、フィッシュスタイルの攻撃を攻撃者にとってわずかに容易にします。
- 携帯電話番号に関する情報は、電話の SIM カードに保存されています。電話への物理的アクセスを持つ攻撃者が SIM を盗む場合、自分の電話からあなたを偽装することができます。もちろん、ハードウェアトークンでも同じことができますが、ハードウェアトークンを使用するにはユーザー名とパスワードがまだ必要です。残念ながら、サービスに電話してパスワードのリセットを依頼することは、しばしば SMS メッセージングを使用して確認されるため、SIM カードを所持する攻撃者は、あなたを装うことができます。再び、電話をクレジットカードや現金と同じように扱う場合、このタイプの攻撃は最小限に抑えられます。
- 攻撃者は携帯電話会社に連絡し、あなたを偽装し、電話を失ったと主張し、新しい SIM カードを設定する可能性があります。残念ながら、多くの場合、アカウントは「母親の旧姓」、「お気に入りのレストラン」、または家系図ウェブサイトや、夕食の写真を投稿するソーシャルメディアから判断できる単純な質問でセキュリティ質問で保護されます。
- 「[SIMJacker](https://www.enea.com/info/simjacker/)」として知られる古い攻撃により、攻撃者は悪意のあるペイロードを含む SMS メッセージを電話に送信し、SIM カード自体の直接操作を可能にしました。この攻撃は古い SIM カードでもまだ機能しますが、より現代の SIM はもはや脆弱ではありません。SIMJacker を使用した既知の攻撃のほとんどは、ラテンアメリカと南アメリカ、中東、北アフリカ、東ヨーロッパの一部、東南アジアの一部に関与していました。

#### SMS を使用する必要がある場合

SMS を 2FA ソリューションとしてのみ提供するサービスがある場合があります。それらの場合、何もないよりはましです。これが事実である場合、わずかに物事を保護するためにいくつかのことを行うことができます。

- 古い電話（5 年以上前）がある場合、SIM を最近のものにアップグレードすることを検討してください。これらは SIMJacker の Issue の影響を受けません。
- 携帯電話会社に連絡し、PIN などのセキュリティ質問以外にアカウントを保護する追加のセキュリティ対策があるかどうかを尋ねてください。または、母親の旧姓や家族のペットのセキュリティ質問を、もっとユニーク（例えば、`Hdyla86kajDF64asdlui`）に設定することもできます。
- SIM PIN を設定します。iOS デバイスには、[Apple のこれらの手順](https://support.apple.com/en-us/118228) に従ってください。Android デバイスには、[これらの手順](https://www.digitalcitizen.life/how-change-or-remove-sim-pin-android-2-steps/) から始めますが、特定のモデルに合わない場合は、電話メーカーのウェブサイトに問い合わせてください。
- SMS のみではなく、より多くの 2FA を提供するようサービスに苦情を申し立ててください！苦情が増えるほど、より安全なオプションを提供する可能性が高くなります。

### その他の 2FA に関する懸念

2FA の目的を覚えておいてください - これは、主要な認証方法が成功した後に呼び出される二次認証方法です。直前に主要な認証を正常に完了した場合のみ、2FA リクエストを承認するべきです。要求されていない 2FA リクエストは、誰かがあなたのパスワードを持っていて、あなたとしてログインしようとしていることを意味します。これが 2FA が存在する理由で、パスワードを含む攻撃からユーザーアカウントを保護するためです。

このような不規則性が発生した場合は、セキュリティチームの注意を喚起してください。詳細については、[セキュリティ意識](/handbook/security/security-assurance/governance/sec-awareness-training/) に関するハンドブックを確認してください

## Slack

Slack に関する多くの情報があります。これは GitLab のコミュニケーションの重要な部分です。[Slack ハンドブックページ](slack.md) をご覧ください。

## Zoom

Zoom に関する多くの情報があります。これは GitLab のコミュニケーションの重要な部分です。
[Zoom ハンドブックページ](zoom.md) をご覧ください。

[Google Calendar](/handbook/tools-and-tips/#google-calendar) の招待は Zoom リンクの真実の唯一のソースです。Google Docs アジェンダで Zoom リンクをリンクすることを避けてください。これは、すぐに最新ではなくなる可能性があります。会議の開始頃に Zoom リンクが変更された場合、一時的にそこに置いておくことは大丈夫です。

## Google

新しい文書または新しいスライドデックを素早く必要としていますか？<https://doc.new> や <https://slide.new> などのショートカットを使用してください。完全なリスト（Google 製品に限定されない）は <https://whats.new/shortcuts/> にあります。

### Google Docs

#### Google Docs プロのヒント

1. Chrome で Google Docs を素早く作成する: Chrome のアドレスバーに「docs.new」を入力します。
同様に、Google Sheet には「sheets.new」など…
1. 多くの他の編集者がいる文書内では、文書の上部にあるユーザーの画像またはアイコンをクリックして、そのユーザーのカーソルと文書に何を入力しているかにフォーカスを移動できます。
これは、誰かがビデオ通話で何かを話しており、文書のどこにいるかわからないときに便利です。
1. [`followup:actionitems` の検索](https://drive.google.com/drive/search?q=followup:actionitems) であなたに割り当てられたすべてのアクションアイテムを素早く見つけます。
1. Google Docs の番号付きリストに追加の行を追加するには、`Return` を押して文書内の既存の番号付きリストの下に追加スペースを追加し、それらのスペースをハイライトし、フォーマットバーの番号付きリストアイコンをクリック（または Mac で `Command ⌘ + Shift + 7` を押す）してスペースから番号付きリストを作成します。クイックチュートリアルとして [番号付きリストに行を追加する方法](https://www.youtube.com/watch?v=dgyttEJi-ZQ) のビデオをご覧ください。
1. `@` 文字を入力して、何もクリックせずに今日の日付、他の文書のタイトル、人への参照などを素早く埋め込みます（メニューがポップアップ表示されます）。詳細は [Smart Canvas](https://cloud.google.com/blog/products/workspace/delivering-new-innovations-in-google-workspace-with-smart-canvas) ブログ記事と [Add items with the @ menu](https://support.google.com/docs/answer/11276813?hl=en) サポート文書を参照してください。
    - [絵文字ライブ検索](https://support.google.com/docs/answer/3371015) は `@:` を入力するか、`:` 文字を使用してアクセスできます。絵文字を検索するために入力を開始し、Enter を押して挿入します。
1. Pageless docs は、印刷する予定のない文書に最適で、[GitLab で推奨される形式](/handbook/communication/#pageless-is-the-gitlab-preferred-format) です。[File > Page setup で切り替えることができます](https://support.google.com/docs/answer/11528737)。

その他の Google Doc のヒントについては、[Live Doc Meetings](/handbook/company/culture/all-remote/live-doc-meetings/) もご覧ください。

### Google Analytics

[Google Analytics (GA)](https://analytics.google.com/) は、データ駆動の意思決定を行うための必須ツールです。
about.gitlab.com と docs.gitlab.com の両方のウェブサイトからデータを受信します。
GA に関する詳細情報は、[Google Analytics ハンドブック](/handbook/enterprise-data/marketing-analytics/google-analytics-4/) を読んでください。

たとえば、選択した期間内に特定のページがどれだけ訪問されたかを GA データを見て分析できます。
ユーザーがどこから来てどこに行くかを理解するために GA リファラルデータを見ることもできます。

### Google でプロフィール写真を設定する

オプション: Google で[プロフィール写真を設定する](https://myaccount.google.com/personal-info) ことで、Google Docs で自分がどこにいるかを写真で表示できます（最初の文字だけ表示されるのではなく）。これにより、会議の参加者が文書内で動き回るときに、他の人がディスカッションをより簡単にフォローできます。

### Google で名前の発音を追加する

名前の発音記号や発音録音を Google プロフィールに追加することを検討してください。

- 任意の Google アカウントページ（つまり Google Docs、Google Sheets）の右上のプロフィールアイコンをクリックします
- 「Manage your Google account」を選択します
- 左側のサイドパネルで「Personal info」を選択 >> ページの中央で「Name & pronunciation」に進みます
- 録音または発音記号を追加します。例: Rochana (Rosh-ah-na)

### Google Calendar

#### 時間を見つける

世界の他の場所のチームメイトとイベントをスケジュールするときは、特に Google Calendar の Find a Time タブを活用してください:

![Google Calendar - Find a Time](/images/tools-and-tips/google-calendar-find-a-time.png)

Find a Time は、必要に応じてタイムゾーンを調整して、すべての参加者の新しいまたは既存のイベントの時間を提示します。
Find a Time を使用するには:

1. 新しいイベントを作成するか、既存のイベントを変更します。
1. 「Find a Time」タブをクリックします。招待されたゲストは可用性テーブルに表示され、列で表されます。
    - 誰かの労働時間外（デフォルトでは午前 9 時から午後 5 時）は薄いグレーで表示されます。
    - オプショナルなゲストは、デフォルトでは可用性テーブルに表示されません。
    右側の「Guests」エリアで名前をチェックすることで追加できます。

複数のタイムゾーンと外部関係者にまたがる会議では、[Time & Date Calculator](https://www.timeanddate.com/worldclock/meeting.html) がスケジュールに最適な時間を決定するのに役立ちます。

#### GitLab の可用性カレンダー

GitLab Availability Calendar は、GitLab を効果的にスケーリングするために廃止されました。
私たちは [休暇を管理するためのツールとヒント](/handbook/people-group/time-off-and-absence/time-off-types/) を作成しました。

#### 労働時間と場所の設定

他のチームメンバーがあなたと会議をスケジュールするのを手助けするために、[Google Calendar で通常の労働時間と場所](https://support.google.com/calendar/answer/7638168) を設定できます。誰かがあなたとミーティングをスケジュールしようとすると、優先時間が表示されます。

労働時間を設定するには、`Settings` -> `General` -> `Working Hours & Location` に進みます。`Working location` はここで、または `All day` 行のピルをクリックして直接カレンダーで設定できます。Settings には便利な `Copy to all` オプションもあります。

すべての GitLab Team メンバーがリモートで働くため、`Home` は曖昧な選択肢です。人々は旅行する可能性があり、タイムゾーンに関するコンテキストを提供しないからです。よろしければ、`Somewhere else`（Settings 内）または `Edit pencil` -> `+` -> `Another location`（ピルから）を選択して、`City, State, Country (GMT-#)` のような形式に設定し、旅行時やタイムゾーン変更時に最新の状態に保つことで、計画とタイムゾーンの理解に役立ちます。

#### GitLab Team Meetings カレンダー

GitLab Team Meetings カレンダーはすべてのチームメンバーが利用でき、追加後にカレンダーリストに表示されます。GitLab Team Meetings カレンダーをカレンダーリストに追加するには:

1. [カレンダー](https://calendar.google.com/) に移動
1. 左サイドバーを下にスクロールして `Other calendars` まで
1. `+` を押す
1. `Subscribe to calendar` を選択
1. 検索フィールドに `gitlab.com_6ekbk8ffqnkus3qpj9o26rqejg@group.calendar.google.com` を入力し、キーボードで Enter を押す

ご質問があれば People Operations Team メンバーにお問い合わせください。注: このカレンダーまたはその他の共有カレンダーから会議を削除しないでください。これにより、すべての人のカレンダーからイベントが削除されます。

このカレンダーで Company Calls、Group Conversations、101s、その他のチームのミーティングの詳細を見つけることができるので、別のチームのミーティングに参加して質問したり、そのチームが何に取り組んでいるかを学んだり、GitLab の他の部門とチームについて知ったりできます。

これらのミーティングは GitLab のすべての人に開かれています。

新しいチームミーティングを作成する場合は、GitLab Team Meetings カレンダーに [追加](#adding-an-event-to-the-gitlab-team-meetings-calendar) してください

GitLab Team Meetings カレンダーに関する質問、リクエスト、変更については、[HelpLab](https://helplab.gitlab.systems/esc?id=emp_taxonomy_topic&topic_id=57e1ad3997804e50a326158de053af3d) 経由で People Operations Team にお問い合わせください。

##### GitLab Team Meetings カレンダーへのイベントの追加 {#adding-an-event-to-the-gitlab-team-meetings-calendar}

1. カレンダー招待を作成する
1. Zoom リンクを追加する
1. アジェンダまたは関連コンテンツを追加する
1. ゲストの追加で、招待したい他の人に加えて `GitLab Team Meetings` を追加する（会社全体を招待したい場合は everyone@ を使用）

   {{% note %}}
   これは部屋を追加するように見えますが、これは予想通りです
   {{% /note %}}

   ![GitLab Team Meetings の追加](/images/tools-and-tips/adding-gitlab-team-meetings.png)

#### 招待返信の管理

Gmail のクエリに精通している場合、次のクエリでフィルタを追加して招待の返信を受信トレイから削除できます:

`*.ics subject:("invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined") when where calendar who organizer`

次の検索用語ですべての招待返信を受信トレイから削除するフィルタを作成することもできます:

- 件名: "invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined"
- 含む単語: *.ics

次に Create filter をクリック:

- Skip the Inbox
- ラベル（あなたの選択）を適用

#### イベントの変更

「Guests can modify event」をクリックして、人々が他のチャネル経由で連絡することなくカレンダーで時間を更新できるようにしてください。
これは [Event Settings](https://calendar.google.com/calendar/r/settings) でデフォルトでチェックされるよう設定できます。

![Google Calendar - ゲストがイベントを変更できる設定](/images/tools-and-tips/google-calendar-guestsmodifyevent.png)

#### 通知

カレンダーごとにデフォルトの通知設定を変更できます（終日イベントの通知を追加または削除し、すべてのイベントに 2 番目のデフォルトの通知を追加するなど）。これは Settings -> `Settings for my calendars` -> カレンダーを選択 -> `Event notifications` および `All-day event notifications` でアクセスできます。

デフォルトの通知を変更すると、すべての既存のイベントもそれを継承します（通知がカスタマイズされていない限り）。

#### 削除されたカレンダーアイテムの復元

（これは [Google の新しい Calendar](https://support.google.com/calendar/answer/7541906) を使用していると仮定しています）。

Team Meetings カレンダーから誤って何かを削除した場合、次の方法で復元できます:

- [Google Calendar](https://calendar.google.com/calendar/r) に進み、画面の左上の歯車アイコンをクリックします。
- [Trash](https://calendar.google.com/calendar/r/trash) を選択します。
- 左サイドバーのカレンダー名をクリックして、正しいカレンダーにいることを確認してください。
- 復元したいアイテムにマウスオーバーし、矢印をクリックして「Restore」します。

#### 拒否されたイベントの表示

ミーティングに参加できないが、引き続きアジェンダや出席リストに非同期で貢献する場合は、「Show declined events」設定を有効にすることをお勧めします。他の何らかの理由で拒否されたミーティングをカレンダービューで見ることが役立つ場合は、この設定を使用してください。

- [Event settings](https://calendar.google.com/calendar/u/0/r/settings) に移動
- 「View options」の下の「Show declined events」のボックスをチェック

![Google Calendar - 拒否されたイベントの表示](/images/tools-and-tips/showdeclinedevents.png)

#### 共有

Google Calendar のアクセス権限を「Make available for GitLab - See all event details」に設定することをお勧めします。チームメンバーのカレンダーは、機密データの露出と[ズーム爆撃](https://en.wikipedia.org/wiki/Zoombombing) のリスクのため、アクセス権限を「Make available to public」に設定するべき**ではありません**。

以下の予約を「Private」としてマークすることを検討してください:

- 個人的な予約
- GitLab 外部の第三者との機密性の高いミーティング
- 1 対 1 のパフォーマンスまたは評価ミーティング
- 組織変更に関するミーティング

GitLab のすべての人とカレンダーを共有することのいくつかの利点と理由があります:

1. 透明性は私たちの価値観の 1 つで、何に取り組んでいるかを共有することは「できるだけ多くのことについてオープンである」というメッセージに沿っています。
1. タイムゾーンの違いにより、可用性が重なる小さな時間帯があります。
他のメンバーが新しいミーティングをスケジュールする必要がある場合、定期的なミーティング（1 対 1 など）の詳細を見ることで、チームメンバーからの確認を待つことなくスケジュールに柔軟性が得られます。
これは、より効率的であるという私たちの価値観に沿っています。

![Google Calendar - カレンダーを利用可能にする設定](/images/tools-and-tips/google-calendar-share.png)

Google Calendar をセットアップする際は、必ず[労働時間を設定](https://support.google.com/calendar/answer/7638168?hl=en) してください。

例えばパートナーとカレンダーを共有したい場合は、「Share with specific people」機能を使用し、権限を「See only free/busy (hide details)」に設定することができます:

![特定の人と共有](/images/tools-and-tips/share-with-specific-people.png)

#### スピーディなミーティング

スピーディなミーティングを有効にすると、スケジュールするイベントの最後にバッファが自動的に提供されます。
これにより、連続したイベントを持つ参加者がトイレに行ったり、コーヒーを飲んだりする機会を持つことができ、次の予定に遅れることなくなります。

![Google Calendar - スピーディなミーティングを有効化](/images/tools-and-tips/google-calendar-speedy-meetings.png)

#### 世界時計

Google Calendar で `Settings -> World Clock` に進むことで、必要なだけ多くのタイムゾーンの世界時計を追加して、チームメンバーの現地時間を確認できます。

![Google Calendar - 世界時計](/images/tools-and-tips/world-clock.png)

[TimeAndDate](https://www.timeanddate.com/worldclock/converter.html) のようなサイトを使用して、たとえば UTC との時間変換も可能です。

#### タイムゾーン

`Display secondary time zone` をチェックし、`(GMT+00:00) Coordinated Universal Time` (UTC) を選択します。これにより、チームメンバーがミーティングが行われるときの単一のタイムゾーンに標準化することができます。

![Google Calendar - タイムゾーン](/images/tools-and-tips/google-calendar-timezone.png)

### Google Cloud Platform

クラウドリソースのリストとそれらにアクセスする方法については、[Sandbox Cloud ページ](/handbook/company/infrastructure-standards/realms/sandbox) を参照してください。

### Google Drive

#### 最初に重要なメッセージ - Google Drive/Apps を使用しないでください（必要な場合を除く）

このセクションをこの重要なメッセージで始めるのを欠かすことはできません: **会社で他の人が利用できるよう永続化する必要のある情報のデフォルトの保存場所は、Google Drive と Google Apps ファイルではなく、ウェブサイト/会社のハンドブックにあるべきです！！** これは上層部からのものです。
これは私たちの運営方法です。Google Docs/Apps はチームメンバーによってのみ見つけることができ、貢献できます。ユーザー、顧客、アドボケイト、将来の従業員、Google ハンドブック検索、または開発者によってはできません。

#### Google Drive/Apps に直接リンクしないでください

それでも、ウェブサイトに直接作成することが意味をなさないコンテンツ（テーブルの大規模なデータコレクション、計算用のスプレッドシートなど）や、Google Drive ストレージが意味をなすコンテンツがあります。

これらのファイルに人々を Google Drive に誘導するときは、ハンドブックにファイル名を含めて、チームメンバーが Google Drive で検索できるようにしてください。直接 URL にリンクすると、組織外の人がアクセスをリクエストすることができ、作業負荷とミスの可能性が生じます。

#### 整理整頓を保つ

ファイルを共有 Google Drive のランダムまたは一般的な場所に投げ込まないことが重要です。
そうすることで、他の人がコンテンツを見つけて作業することが難しくなります。
Google Drive のコンテンツを整理するためのいくつかのガイドライン:

- 最初に部門別（例: strategic marketing）
- 次にサブジェクト別（例: analysts relations）
- 次にサブサブジェクト別、必要なだけ深く（例: Gartner -> 2018 ARO MQ）

#### Google Drive の使用

まず、GitLab Google 会社アカウントが作成されると、自分の「ホーム」ディレクトリ（My Drive と呼ばれる）に無制限のストレージ割り当てを持つ Google Drive が自動的に取得されます。
次のようにアクセスできます:

1. （オプション）ブラウザで GitLab アカウントにログイン（Chrome を使用している場合）
1. ウェブブラウザを <https://drive.google.com> に開きます
1. GitLab アカウントとしてまだログインしていない場合（Chrome ユーザーはログインしているはずです）、GitLab アカウントを使用して Google にログインします
1. これで、ホームディレクトリのような Google Drive（My Drive と呼ばれる）に移動します。
Google Apps を使用して Google ファイルを作成し、保存場所を指定しない場合、それらはこのホームディレクトリに置かれます。

これは独自の作業ファイルを保存するのに最適です。
すでに述べたように、**これは会社（またはそれ以外）の残りの人が使用することを目的とした共有ファイルの最終的な保管場所であってはなりません**。

#### 既存の GitLab Google Drive リポジトリ

GitLab 共有ファイルの Google Drive リポジトリがいくつかあります（もっとあるかもしれませんが、リストにない場合は追加してください）:

- [UX Research Drive](https://drive.google.com/drive/folders/0AH_zdtW5aioNUk9PVA) - これは [Customer Discovery Meetings](/handbook/product/product-processes/#customer-discovery-meetings) からのすべての発見と、Design、UX Research、Product、Customer Success と共有された顧客からの生の機密資料を保管します。[ユーザーリサーチ](/handbook/product/ux/experience-research/) からの抽出された発見は [UXR_Insights リポジトリ](https://gitlab.com/gitlab-org/uxr_insights/) に保管されます。
- [GitLab Marketing Drive](https://drive.google.com/drive/u/0/folders/0Bz6KrzE1R_3helZZQlV3ajFNTzg) - これはマーケティング組織全体からのすべての共有ファイルを保管します。
ベストプラクティスは、サブ組織がこのスペース内に独自のディレクトリを持つことです（例: [Strategic Marketing](https://drive.google.com/drive/u/0/folders/0Bz6KrzE1R_3hNjJMNUt2LUJGREU)）。
- [Sales Drive](https://drive.google.com/drive/u/0/folders/0BzQII5CcGHkKSFFJWkx3R1lUdGM) - これはセールス組織からのすべての共有ファイルを保管します。
ベストプラクティスは、一部のサブ組織がこのスペース内に独自のディレクトリを持つことです（例: [Customer Success](https://drive.google.com/drive/u/0/folders/0B3MA-pZf8fAYdUl6Nk5ObzlQbjQ)）。
- [GitLab Alliance Drive](https://drive.google.com/drive/folders/1ElkWOoepL1eAGi2WfxPNM3W9uEMx62US) - これは Alliance 組織全体からのすべての共有ファイルを保管します。
ベストプラクティスは、サブ組織がこのスペース内に独自のディレクトリを持つことです（例: [Partner Discussions](https://drive.google.com/drive/folders/1tAmu6pnw0cwR7dXj1Yeylrpt-ijerXyQ)）。

これらをどう使うのですか？これらの URL を覚える必要はありません。
これらのリンクを Google Drive My Drive ディレクトリに追加するには、次のようにします:

![Drive にアニメーションを追加](/images/tools-and-tips/add2drive.gif)

1. ブラウザで GitLab アカウントの Google Drive にログインしていることを確認
1. 上記から興味のあるリンクを開いて、そのディレクトリに移動
1. （「Search Drive」フィールドの下の）上部に渡るディレクトリパスを見つける
1. 自分のドライブに追加したいパス内のディレクトリの名前を見つける（例: Sales）
1. その横の下矢印をクリック
1. 結果のポップアップメニューから「Add to My Drive」を選択
1. これで、まずドライブに移動し（<https://drive.google.com>）、次にそのリンクを開いてそのディレクトリに行けるようになります

#### Mac に Google Drive を追加する

Google Drive にアクセスしやすくするために、Mac Finder で通常のドライブとして Google Drive を表示できます。
これにより、ビデオ、アナリストレポート（PDF）などのファイルの保存と表示が容易になります。

これを行う方法:

![Drive for Desktop をダウンロード](/images/tools-and-tips/drive-for-desktop.png)

1. ブラウザで GitLab アカウントの Google Drive にログインしていることを確認
1. Google Drive に進む（<https://drive.google.com>）
1. 検索フィールドの右側の「Settings」アイコン（歯車）をクリック
1. 結果のメニューから「Get Drive for desktop」を選択
1. 新しいページ/タブが表示され、個人ログインを使用する可能性があります。
これが起こると、ページに「Download & install Drive for desktop」が表示されません。
GitLab アカウントに切り替えてください。
1. ダウンロードしてインストール

### Google Forms

内部または外部のアンケートやフォームを作成するときは、これらの [GitLab ブランドフォームテンプレート](https://drive.google.com/open?id=0BxrZ6azkqZ1bVDl1TTZuelFOb1k) を使用してください。
フォームのコピーを作成し、コピーのみを編集してください。テンプレート自体を編集しないでください。

[GitLab でデータプライバシーが意味するもの](/handbook/legal/privacy/#what-data-privacy-means) を確認してください。次のガイドラインを適用して、参加者が情報に基づいた意思決定を行うことを支援してください:

- *外部フォームの場合*: 収集された個人データは [GitLab プライバシーステートメント](https://about.gitlab.com/privacy/) に従って処理されることを述べてください。
- *内部フォームの場合*: データを収集する目的を [Team Member Privacy Policy](/handbook/legal/privacy/employee-privacy-policy/) に基づいて述べ、この目的が Team Members に明確になるようにしてください。
- 個人データのフォームフィールドは、処理を達成するために絶対に必要でない限り、必須にしないでください。収集された不要な個人データは、自発的なフォームフィールドを通じて収集してください。
- 当初収集された理由のためのみに個人データを処理してください。例: Google Form が旅行者情報を収集した場合、その個人データを使用してマーケティングリストを作成しないでください。

### Google Mail (Gmail)

#### Auto-advance

archive 機能を使用すると、通常は概要に戻ります。
Auto-advance を使用すると、次のメッセージまたは前のメッセージに進むかを選択できます。
「Auto-advance」は Settings の Advanced セクションから有効にできます。
これにより、Settings の General セクションに Auto-advance 設定が表示されます。
通常、前の（古い）メッセージを表示するデフォルト設定が好まれます。

#### メールサイン

-[メールサイン](https://support.google.com/mail/answer/8395) を設定して、フルネームと役職を含めることで、人々があなたが誰でどのような仕事をしているかをすぐに知ることができます。
-メールサインに [個人代名詞](/handbook/people-group/pronouns/) を追加するオプションもあります。

##### 例

*注: 以下のテンプレートをコピーして自分のサインに使用できます。*

<span style="font-family: serif;font-size: small;display: block;">Alex Doe (they/them)</span>
<span style="color: #999999;font-family: sans-serif;font-size: small;display: block;">Frontend Engineer | GitLab</span>

<img src="/images/press/logo/png/gitlab-logo-gray-rgb.png" alt="GitLab ロゴ" width="98" height="37">

#### ドイツ法人で雇用されている場合のメールサイン

オンボーディング中に、GitLab Gmail を設定し、[次の例をガイドラインとして](/handbook/tools-and-tips/#email-signature) メールサインを設定するよう依頼された可能性があります。ドイツ法人で雇用されている場合、メールサインの最後に [こちら](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-and-compliance/germany/germany-works-council/#email-signature-if-employed-by-our-german-entity) に記載されている会社関連の詳細を追加する必要があります（*GitLab 社内のみアクセス可能*）。

#### ドイツ法人で雇用されている場合の特定の社外コミュニケーションへの会社詳細の追加

以下にリストされたコミュニケーションフォームには、ドイツ法人 GitLab GmbH に雇用されているチームメンバーが社外に送信し、GitLab のビジネス活動に関連する場合、サインとして特定の会社詳細を追加する必要があります:

- 注文書
- 物理メール
- ファックス
- ポストカード
- メール
- SMS
- Twitter
- Zendesk
- その他の電子コミュニケーション

そのようなコミュニケーションを外部に送信する場合は、関連するアプリケーションの設定を確認し、コミュニケーションの最後に以下の会社詳細を追加してください。疑問がある場合は、詳細を追加してください。何らかの理由でこの情報を追加できない場合は、legal-employment@gitlab.com にアラートしてください。

ドイツ法人で雇用されている場合、オンボーディング中に必要な場所でサインを設定し、特定の会社詳細を含めるよう依頼された可能性があり、依頼されていない場合は、[こちら](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-and-compliance/germany/germany-works-council/#add-company-details-to-certain-company-communications-if-employed-by-our-german-entity) に記載されているように今すぐ行ってください（*GitLab 社内のみアクセス可能*）。

#### フィルタ {#filters}

##### メンション時にラベルを適用

特に言及された GitLab 通知メールに（issue またはマージリクエストに購読していただけで受け取る通知ではなく）ラベルを追加する Gmail フィルタを追加すると便利な場合があります。

1. `from:(gitlab@mg.gitlab.com) "you+have+been+mentioned+on"` を検索します。
1. 検索フィールドの右側の下矢印をクリックします。
1. **Create filter with this search** をクリックします。
1. **Apply the label:** をチェックし、追加するラベルを選択するか、「Mentioned」のような新しいラベルを作成します。
1. **Also apply filter to matching conversations** をチェックします。
1. **Create filter** をクリックします。

##### レビュアーに割り当てられた時にラベルを適用

レビュアーとして割り当てられた GitLab 通知メールにラベルを追加する Gmail フィルタを作成できます:

1. `from:(gitlab@mg.gitlab.com) "(Reviewer) (Firstname Lastname)"` を検索します。
1. 検索フィールドの右側の下矢印をクリックします。
1. **Create filter with this search** をクリックします。
1. **Apply the label:** をチェックし、追加するラベルを選択するか、「Assigned」のような新しいラベルを作成します。
1. **Also apply filter to matching conversations** をチェックします。
1. **Create filter** をクリックします。

##### MR がマージされた時にラベルを適用

MR がマージされた GitLab 通知メールにラベルを追加する Gmail フィルタを作成できます:

1. `from:(gitlab@mg.gitlab.com) "Merge Request"+"was merged"` を検索します。
1. 検索フィールドの右側の下矢印をクリックします。
1. **Create filter with this search** をクリックします。
1. **Apply the label:** をチェックし、追加するラベルを選択するか、「Merged」のような新しいラベルを作成します。
1. **Also apply filter to matching conversations** をチェックします。
1. **Create filter** をクリックします。

##### すべての GitLab 生成メールにラベルを適用

GitLab Issue とマージリクエストは、設定とあなたの注意がどれだけ求められているかによって、多くのメール通知を生成する可能性があります。
これらの生成されたメールにラベルを適用し、すぐの受信トレイから移動することが役立つ場合があります。

1. `from:gitlab@mg.gitlab.com` を検索します。
1. 検索フィールドの右側の下矢印をクリックします。
1. **Create filter with this search** をクリックします。
1. **Skip the Inbox (Archive it)** をチェックします。
1. **Apply the label:** をチェックし、追加するラベルを選択するか、「GitLab.com」のような新しいラベルを作成します。
1. **Also apply filter to matching conversations** をチェックします。
1. **Create filter** をクリックします。

[Productivity Hack ビデオ](https://www.youtube.com/watch?v=YOgm-vZVqng) で、Gmail フィルタを使用して受信トレイを整理する方法について詳しく学べます。
ダウンロードした [フィルタエクスポート](https://drive.google.com/file/d/1vm_psZOXjYZ9ulKYmdMqrTk435KcR1DL/view) をインポートするには、Gmail => Settings => Filters and Blocked Addresses => Import filters に進みます。

#### キーボードショートカット

キーボードショートカットは Gmail Settings でオンにしている場合のみ機能します。

下のステップ:

- 「Settings」で「Keyboard shortcuts」セクションまでスクロールダウン
- キーボードショートカットを「on」に切り替え
- 下にスクロールして変更を保存

[使用できるショートカット](https://support.google.com/mail/answer/6594?hl=en&ref_topic=3394150)

#### スプリットスクリーン

この設定変更で、1 つのビューで受信トレイをリストし、メールをプレビューできます:

- 受信トレイの右上の歯車/設定。
- Settings オプション。
- Inbox タブ
- Reading pane: enable
- 読み取りペインの位置を選択、Right of Inbox または Below Inbox
- 変更を保存
- 受信トレイをリロード

#### Inbox Zero

Gmail を最大限に活用するために、[Inbox Zero](https://www.youtube.com/watch?v=oLdHnWLbn4A) 戦略を採用することを検討してください。これは Google 従業員が Gmail を使用する方法と同じです。

これについての内部トレーニング録画もあります。詳細を扱い、より「パワーユーザー」に焦点を当て、キーボードショートカットなどを扱います。

- [ビデオ](https://youtu.be/IwngC9NmcRs)（プライベートに設定されているので、GitLab Unfiltered でログインして視聴してください: 右上隅 > プロフィール画像をクリック > スイッチアカウント > GitLab Unfiltered）
- [ミーティングノート](https://docs.google.com/document/d/1EXEIENJrUkP75MmG6Nn9Ld4-T0P9SfpcQA4xmpx9Bck/edit?usp=sharing)

### Google Mail で Google Meet と Chat を無効化

Google Meet と Google Chat の統合はデフォルトで有効です。メールボックスフォルダをリストする左メニューでスペースを使い過ぎる可能性があります。Google Mail で統合を無効にするには、右上の `Settings` に移動し、`See all settings`、`Mail and Chat` の順に選択し、次のように選択します:

- Chat: `Off`
- Meet: `Hide the Meet section in the main menu`

変更を保存し、Google Mail がリロードするのを待ちます。

### Google Slides

内部および外部使用のスライドデックを作成するときは、汎用の [GitLab Slide Template](https://docs.google.com/presentation/u/0/?tgif=d&ftv=1) を使用してください。
スライドデックのコピーを作成し、コピーのみを編集してください。テンプレート自体を編集しないでください。誤ってソースデックを編集することを避けるために、Template ギャラリーで `[Fiscal Year] GitLab Slide Template` を選択して、すぐにコピーを作成し、新しいデックを開始します。スライドデックのすべてのページに番号を付け、タイトルページが常に番号 1 であることを確認してください。

#### セールススライドデック

スライドデックは [Highspot](/handbook/sales/field-communications/gitlab-highspot/) の [GitLab's Official Sales Deck Library](https://gitlab.highspot.com/items/650461a504701b188c124951?lfrm=shp.6) で利用できます。

### Google Jamboard

Jamboard は <https://jamboard.google.com/> でアクセスできるコラボレーティブホワイトボードプラットフォームです。結果は Drive に永続化され、他のオブジェクトのように共有可能です。

### Google Chrome

- ドキュメント/Issue/などのページタイトルからの単語を URL バーに入力して、物事を検索して見つけます（ページタイトルに表示されるすべてのもの）。検索は「ベストエフォート」ですが、最近アクセスしたドキュメントや Issue を見つけるのに驚くほど効率的です。
- 「Search engines」がさらに役立ちます！「drive」を入力して Tab を押すと、Google Drive で検索されます。これらを発見してカスタマイズするには、`Settings > Search engine` に移動します。
- [Chrome キーボードショートカット](https://support.google.com/chrome/answer/157179?hl=en) を練習しましょう。よく使う便利なショートカットをいくつか:
  - アドレスバーにジャンプ: `cmd l`
  - 新しいタブを作成 `cmd t`、タブを閉じる `cmd w`、閉じたタブを元に戻す `cmd shift t`
  - 新しい incognito ウィンドウを開く: `cmd shift n`（例: UI バグやログイン問題を再現する）
  - すべての開いているタブを検索: `cmd shift a`
  - ブックマークバーを非表示にする: `cmd shift b`（例: スクリーンショットや共有画面プレゼンテーション用）
  - 開発者ツールを開く: `cmd option i`（例: ウェブサイトエラーのデバッグ用）
- [タブをタブグループに整理](https://www.google.com/chrome/tips/#organize) し、名前とカスタムカラーを割り当て、折りたたみまたは並べ替えできます。タブをグループ間で移動することは、ブラウザウィンドウ間でも機能します。
- ブラウザにログイン（GitLab Workspace アカウントで）すると、[インストール間でプロフィールが保持](https://www.google.com/chrome/tips/#customize) されます。これは、[ラップトップを更新するとき](/handbook/security/corporate/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes) にブックマーク、拡張機能、構成を移行するのに役立ちます。

#### Chrome のパフォーマンス設定

1. [メモリセーバー](https://support.google.com/chrome/answer/12929150?hl=en) を有効にします。これにより、非アクティブなタブが一時停止され、メモリ消費が削減されます。
1. [エネルギーセーバー](https://support.google.com/chrome/answer/12929150?hl=en) を有効にします。これは Chrome にバックグラウンドタスク活動を減らすよう指示することで、バッテリー寿命を延ばすのに役立ちます。
