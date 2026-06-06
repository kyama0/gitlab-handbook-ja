---
title: "実用的なハンドブック編集のヒント"
description: "ハンドブックファーストで働くための追加のヒントについて、チームメンバー向けの動画記録と書面によるヒント。"
upstream_path: /handbook/about/editing-handbook/practical-handbook-edits/
upstream_sha: 7b4218e2684ab0e2d919cef32fcfba84065bf46b
lastmod: 2026-06-05T19:02:22+12:00
translated_at: "2026-06-06T12:00:00Z"
translator: claude
stale: false
---

このページには、非技術系のチームメンバー向けに、ハンドブックファーストで働く方法についての手順、ヒント、過去の記録が含まれています。

このページの内容は、[ハンドブック編集ページ](_index.md)の補足として追加のヒントを提供するものです。
ハンドブックの編集方法（ヘルプの受け方を含む）の基本については、[ハンドブック編集ページ](_index.md)を参照してください。

> **ヒント** AI を使ってハンドブックをより速く編集しましょう。[Anthropic Claude](/handbook/tools-and-tips/ai/claude/) と [GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/) について学んでください。

## コマンドラインを始める前に

一部のヒントでは、macOS/Linux 上でのターミナルシェルへのアクセスが必要になる場合があります。環境が動作していること、そして例として [public handbook](https://gitlab.com/gitlab-com/content-sites/handbook) リポジトリをクローンしていることを確認してください。

```shell
git clone https://gitlab.com/gitlab-com/content-sites/handbook.git
```

同期します。まだコミットしていないローカルの変更があれば stash で退避してください。

```shell
cd handbook
git stash
git checkout main
git pull
```

macOS では Homebrew を使って GNU ツールをインストールすることをお勧めします。macOS のセットアップについては[このブログ記事](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)を参照してください。

```shell
brew install gnu-sed
```

## ファイルを探す

macOS/Linux GNU で提供されるシェルツールの 1 つが `find` です。ターミナルを開き、`www-gitlab-com` リポジトリのメインディレクトリで次のコマンドを実行すると、すべての `*.md` ファイルの一覧が得られます。これは `.md` を末尾（サフィックス）として一致させます。

```shell
find . -type f -name '*.md'
```

`.` の代わりに、現在のパス内のディレクトリを使うこともできます。

```shell
find source/handbook -type f -name '*.md'
```

タイプ `f` はファイルを指定し、`d` はディレクトリに一致します。指定しない場合は、すべてのファイルとディレクトリが対象になります。

`-name` を `-regex` に置き換えると、より細やかな一致が可能です。たとえば、すべての `.md` ファイルと `.md.erb` ファイルに一致させる場合は次のようにします。

```shell
find . -type f -regex '.*\.md[.erb]*'
```

これは **ブログ記事がデフォルトブランチにマージされたかどうかを確認する** のに役立ちます。

```shell
git checkout master
git pull
find . -type f -name '*blogpost-filename*'
```

## ファイルを探してアクションを実行する

これは、すべての一致をプレフィックス付きで出力したいときや、追加の置換アクションを実行したいときに便利です。基本原則は、上記で説明した一致のルールに従い、`-exec` パラメータを追加することです。

`exec` アクションはシェルを起動し、その中でコマンドを実行するはずです。`sh -c '' \;` が、一致するすべてのファイルに対してこれを処理します。これを、アクションを実行する順次ステップのループとして想像してください。最後に足りないのは、現在のループ反復のファイルにアクセスすることです。これは、出力を出力する `echo` の例の中にある `{}` マーカーを通じて行われます。

ターミナルでコマンドを実行して、どのように動作するか確認してください。

```shell
find source/handbook/marketing -type f -name '*.md' -exec sh -c 'echo "Matched {}"' \;
```

## ファイル内の文字列を置換する

GNU の `sed` シェルコマンドは、ファイル内の定義された文字列を置換するのに便利です。`-i` フラグは、それを同じファイル内でインラインに行うことを指定します。`g` フラグはグローバルな一致を定義し、一致したすべてのパターンを置換します。

```shell
sed -i 's/<searchtext>/<replacementtext>/g' file.md
```

macOS では、`gnu-sed` パッケージがインストールされていることを確認し、（`sed` の代わりに）`gsed` を実行してください。

```shell
gsed -i 's/<searchtext>/<replacementtext>/g' file.md
```

`/` セパレータを使う場合、文字列内のすべての `/` 文字をエスケープする必要があります。別のセパレータ（たとえば `,`）を選ぶことで、これを避けられます。

```shell
gsed -i 's,<searchtext>,<replacementtext>,g' file.md
```

## コンテンツを検索して置換する方法

{{< youtube id="lWBkNqxPxw8" title="How to Find and Replace Content in the Handbook using Terminal and a Code Editor" >}}

単語、フレーズ、リンクのすべての出現箇所を見つける必要があるのに、ハンドブックのオンライン検索フィールドでの検索が煩雑すぎたり、正確な結果が返らなかったりすることがあります。コードエディタとターミナルを使えば、コンテンツを簡単かつ素早く検索して置換できます。

**ターミナル**

1. 適切なプロジェクトに移動します。プロジェクトをルートディレクトリにクローンしている場合は、`cd www-gitlab-com` を試してください。
1. `git checkout master`
1. `git pull` または `git pull origin master`（これにより、master の最新の変更がローカルマシンに取り込まれます。）
1. `git checkout -b MYBRANCH`（`MYBRANCH` を、マージリクエストで使用するブランチの名前に置き換えてください。）
1. ターミナルウィンドウを開いたまま、コードエディタ（この例では Visual Studio Code）を開きます。

**Visual Studio Code**

1. Search セクションに移動します（View -> Search）。
1. 検索する単語、フレーズ、またはリンクを入力します。
1. Search フィールドの下にある Replace フィールドに、置換したい単語、フレーズ、またはリンクを入力します。
1. Replace フィールドの末尾にある Replace All のシンボルを押します（または Option-Command-Enter）。
1. `Replace X occurrence(s) across X files with X ?` という確認を求めるポップアップが表示されます。正しければ `Replace` を押します。
*検索結果をクリックすると個々の変更を確認でき、特定の検索結果の横にある置換ボタンだけをクリックすることで、すべての出現箇所のうち一部だけを置換することも可能です。*

    ![vscode の置換の画像](/images/about/vscode_employee.png)
1. ターミナルに戻ります。

**ターミナル**

1. `git add .`（これにより、VS Code での現在のすべての変更が追加されます。）
1. `git commit -m "Title of your MR"`（例: `"Update #peopleops Slack Channel to #people-connect"`。タイトルは必ず引用符で囲んで入力してください。）
1. `git push`
1. ターミナルに `To push the current branch and set the remote as upstream, use` というメッセージが表示され、続いて `git push` で始まる一文が表示されます。この一文をコピーして、% で終わる最新のアクティブなターミナル行に貼り付けてください。
1. `remote: <https://gitlab.com/> ....` を含む行がターミナルに表示されます。https:// で始まるリンクをカットして、ブラウザに貼り付けてください。これにより Create Merge Request ページに移動します。あとは、Web IDE で MR を作成するときと同じように、ブラウザで続行できます。
1. `git checkout master`（これにより、ターミナルが master に戻ります。）

## すべての（一致する）ファイルで文字列を検索して置換する

一括での検索と置換については、以下の提案を参照してください。

ハンドブックリポジトリのいずれかでファイル/URL の名前を変更する場合は、[リダイレクトを追加](https://handbook.gitlab.com/docs/development/#redirects)してください。

`www-gitlab-com` リポジトリでファイル/URL の名前を変更する場合は、[このプロセスに従って](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/redirects_on_about_gitlab_com.md)、[`redirects.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/redirects.yml) にリダイレクトを追加することを忘れないでください。

### ターミナルを使う

プロジェクト、URL のターゲット、または Slack チャンネルの名前が変更されることがあります。GitLab.com の Web IDE で簡単に検索・編集できますが、それ以外のファイルには素早く自動化された方法が必要になります。

この方法は、上記で説明した find、exec、sed のヒントを組み合わせたものです。`exec` アクションは、`sed` を使ってパターン/文字列のインライン置換を実行します。

次の例は、すべてのファイル内の Corporate Marketing プロジェクトの URL を更新するために [この MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/49617) で使われています。

```shell
git checkout master
git pull origin master

git checkout -b handbook/corp-mktg-project-url

find source/handbook -type f -exec sh -c 'gsed -i "s,https://gitlab.com/gitlab-com/marketing/corporate-marketing,https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing,g" "{}"' \;

git status
git diff

git commit -av -m "Handbook: Update corporate marketing project URL"

git push -u origin handbook/corp-mktg-project-url

<open URL in browser for MR>
```

要約すると次のとおりです。

- `source/handbook` ディレクトリ内のすべてのファイルを検索して一致させます。URL は他のファイルにも見つかるかもしれません。
- `exec` が `sed/gsed` アクションを実行します。
- 置換は `https://gitlab.com/gitlab-com/marketing/corporate-marketing` を `https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing` に置き換えます。
- コミットする前に、`git status` と `git diff` で変更を確認します。
- コミット、プッシュし、URL から MR を作成します。

### Visual Studio Code を使う

[Visual Studio Code](https://code.visualstudio.com/download) と [GitLab Workflow extension for VS Code](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/) を使って、一括での検索と置換の操作を行うこともできます。次のステップは、`sub-value` を `operating principle` に更新するためにこの [MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/106599) で使われたものです。

[ハンドブックをローカルで編集する手順](_index.md#editing-the-handbook-locally)に従って、関連するリポジトリをクローンしてください。

`Visual Studio Code` を設定してインストールしたら、リポジトリをクローンした関連ディレクトリを開きます。

次の手順で新しいブランチを作成します。

1. 下部のバーにある `main` をクリックします
1. `Create new branch` を選択します
1. ブランチ名を入力します
1. enter キーを押します

その後、`Search` 機能（`⌘⇧F`）を使って、目的の検索に一致するすべてのファイルを見つけられます。`Visual Studio Code` での検索では、大文字・小文字の一致、単語全体の一致、または正規表現の使用が可能です。省略記号（`…`）をクリックすると、パスに対するパターンマッチングでファイルを含めたり除外したりするオプションもあります（複数の include/exclude はカンマで区切ります）。

一致する検索語に対して、`Search` 機能内で直接、すべてのファイルにわたって `Replace All` を実行できます。

1. `Search` フィールドの横にある開閉用の矢印をクリックするか、`⌘⇧H` を入力します
1. `Search` 語を入力します
1. `Replace` 語を入力します
1. `Replace` フィールドの横にある `Replace All` ボタンをクリックするか、`⌥⌘Enter` を入力します

編集が終わったら、`Source Control`（`⌃⇧G`）機能を使って次のことを行います。

1. 各ファイルの `+` 記号、またはコミット全体の `+` 記号をクリックして、変更をステージングします
1. Message フィールドにコミットの名前を入力し、`⌘Enter` で保存します
1. publish または sync ボタンをクリックします

ブランチがプッシュされ MR が作成されたら、`GitLab Workflow` 拡張機能を使って `Merge Request`（MR）を管理できます。

## 末尾の空白を削除する

CI/CD の lint ジョブは、末尾の空白のチェックに使えます。検出されると、チェックによってパイプラインが失敗し、ファイルを再度編集する必要が生じます。これは MR の作成とレビューにかかる時間を増やす可能性があります。次のヒントは、検出されたファイル内の末尾の空白をより速く削除するのに役立ちます。

```shell
content/handbook/marketing/developer-relations-and-community/_index.md:78:70 MD009/no-trailing-spaces Trailing spaces [Expected: 0 or 2; Actual: 1]
```

IDE またはコマンドラインが、この問題を修正する一般的な方法です。

1. [Visual Studio Code](/handbook/tools-and-tips/editors-and-ides/visual-studio-code/): 編集するファイルを開きます。macOS では、[ショートカット `cmd k x` を使って](https://code.visualstudio.com/docs/getstarted/keybindings#_rich-languages-editing)末尾の空白をクリアし、[`cmd s` でファイルを保存](https://code.visualstudio.com/docs/getstarted/keybindings#_file-management)します。
1. [vim](/handbook/tools-and-tips/editors-and-ides/vim/): コマンドモードに切り替え（ESC）、`:` でコマンドを開始し、次のシーケンスをコピーしてすべての末尾の空白をクリアします: `%s/\s\+$//e`。enter を押し、`:wq` でファイルを保存します。

Visual Studio Code には、末尾の空白を永続的に削除するエディタ設定があります。`File > Preference > Settings > User > Text Editor > Files > Trim Trailing Whitespace` に移動し、ファイルが保存されるときに自動的に空白をトリムするようボックスにチェックを入れます。この設定は慎重に使ってください。一部のファイルには修正すべき空白が多く含まれており、マージリクエストの変更差分が読みにくくなることがあるためです。これは MR のレビュー時間を増やします。末尾の空白の削除と修正は、別の MR で行うことをお勧めします。

### 末尾の空白を一括で削除する

[GNU sed](#before-you-begin-in-command-line) と [find](#using-a-terminal) を使って、コマンドラインで複数のファイルの末尾の空白を置換できます。次の例は、`content/handbook` ディレクトリを再帰的に検索して `*.md` パターンに一致するファイルを見つけ、各ファイルに対してスクリプトを実行し、末尾の空白をインラインで置換します（`sed -i ...`）。

```shell
find content/handbook -type f -name '*.md' -exec sh -c "sed -i 's/[ \t]*$//' "$1" '{}'" \;
```

### マージリクエストで末尾の空白を削除する

1 つ、または数個の末尾の空白に関する lint エラーを修正する最も簡単な方法が、マージリクエストで直接行うことである場合もあります。

1. マージリクエストの `Changes` タブから、lint エラーメッセージに記載されているファイルと行番号を見つけます
1. 行番号の横にある吹き出しをクリックしてコメントを追加します
1. コメントダイアログで、`insert suggestion` ボタンをクリックして、その行をコメントダイアログにコピーします
1. 行末から末尾の空白を削除します
1. `Add comment now` をクリックして、提案を適用します

{{< youtube Kfdf2VAk9sM >}}
