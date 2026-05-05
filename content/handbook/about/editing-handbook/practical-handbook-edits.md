---
title: "実用的なハンドブック編集のヒント"
description: "ハンドブックファーストで働くための追加のヒントについて、チームメンバー向けの動画記録と書面によるヒント。"
upstream_path: /handbook/about/editing-handbook/practical-handbook-edits/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T04:45:05Z"
translator: claude
stale: false
---

このページには、技術職以外のチームメンバーがハンドブックファーストで働くための手順、ヒント、過去の録画が含まれています。

このページの内容は、[ハンドブック編集ページ](_index.md)を補完する追加のヒントとして提供されています。
ヘルプを得る方法を含む、ハンドブックの基本的な編集方法は、[ハンドブック編集ページ](_index.md)に保管しておいてください。

> **ヒント** AI を活用してハンドブックをより速く編集しましょう。[Anthropic Claude](/handbook/tools-and-tips/ai/claude/) と [GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/) について学んでください。

## コマンドラインを始める前に

一部のヒントには、macOS/Linux 上でのターミナルシェルアクセスが必要な場合があります。環境が動作しており、たとえば[公開ハンドブック](https://gitlab.com/gitlab-com/content-sites/handbook)リポジトリをクローンしていることを確認してください。

```shell
git clone https://gitlab.com/gitlab-com/content-sites/handbook.git
```

同期します。コミットしていないローカル変更を退避させていることを確認してください。

```shell
cd handbook
git stash
git checkout main
git pull
```

macOS では Homebrew を使用して GNU ツールをインストールすることをお勧めします。macOS のセットアップについては、[こちらのブログ記事](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)を参照してください。

```shell
brew install gnu-sed
```

## ファイルを見つける

macOS/Linux GNU で提供されるシェルツールの一つに `find` があります。ターミナルを開き、`www-gitlab-com` リポジトリのメインディレクトリで次のコマンドを実行すると、すべての `*.md` ファイルのリストを取得できます。これは `.md` をサフィックスとして一致させます。

```shell
find . -type f -name '*.md'
```

`.` の代わりに、現在のパス内のディレクトリも使用できます。

```shell
find source/handbook -type f -name '*.md'
```

タイプ `f` はファイルを指定し、`d` はディレクトリと一致します。指定しない場合、すべてのファイルとディレクトリが対象になります。

`-name` を `-regex` に置き換えると、より敏感なマッチングを行うことができます。たとえば、すべての `.md` および `.md.erb` ファイルを一致させるためです。

```shell
find . -type f -regex '.*\.md[.erb]*'
```

これは、**ブログ記事がデフォルトブランチにマージされたかどうかを確認する**のに役立ちます：

```shell
git checkout master
git pull
find . -type f -name '*blogpost-filename*'
```

## ファイルを見つけてアクションを実行する

これは、すべての一致をプレフィックス付きで表示したい場合や、追加の置換アクションを実行したい場合に便利です。主な原則は、上記で説明した一致ルールに従い、`-exec` パラメータを追加することです。

`exec` アクションはシェルを起動し、その中でコマンドを実行します。`sh -c '' \;` は、一致するすべてのファイルに対してこれを処理します。これは、アクションを実行する逐次ステップのループとして想像してください。最後に欠けているのは、現在のループのイテレーションでファイルにアクセスすることです。これは出力を表示する `echo` の例の中の `{}` マーカーで行われます。

ターミナルでコマンドを実行して、その動作を確認してください：

```shell
find source/handbook/marketing -type f -name '*.md' -exec sh -c 'echo "Matched {}"' \;
```

## ファイル内の文字列を置換する

GNU の `sed` シェルコマンドは、ファイル内の定義された文字列を置換するのに役立ちます。`-i` フラグは、同じファイル内でインラインで置換することを指定します。`g` フラグはグローバル一致を定義し、すべてのパターン一致を置換します。

```shell
sed -i 's/<searchtext>/<replacementtext>/g' file.md
```

macOS では、`gnu-sed` パッケージがインストールされていることを確認し、（`sed` の代わりに）`gsed` を実行します。

```shell
gsed -i 's/<searchtext>/<replacementtext>/g' file.md
```

`/` セパレータを使用する場合、文字列内のすべての `/` 文字をエスケープする必要があります。これを避けるには、別のセパレータを選択できます。たとえば、`,`：

```shell
gsed -i 's,<searchtext>,<replacementtext>,g' file.md
```

## コンテンツの検索と置換の方法


{{< youtube "lWBkNqxPxw8" >}}


単語、フレーズ、またはリンクのすべてのインスタンスを見つける必要があり、ハンドブックのオンライン検索フィールドで検索するのが面倒で正確な結果を返さないことがあります。コードエディタとターミナルを使用すると、コンテンツを簡単かつ素早く検索および置換できます。

**ターミナル**

1. 適切なプロジェクトに移動します。プロジェクトをルートディレクトリにクローンしている場合、`cd www-gitlab-com` を試してください
1. `git checkout master`
1. `git pull` または `git pull origin master`（これでマスターから最新の変更がローカルマシンに取り込まれます。）
1. `git checkout -b MYBRANCH`（`MYBRANCH` をマージリクエストに使用するブランチ名に置き換えてください。）
1. ターミナルウィンドウを開いたままにして、コードエディタ（この例では Visual Studio Code）を開きます。

**Visual Studio Code**

1. 検索セクションに移動します（View -> Search）。
1. 検索したい単語、フレーズ、またはリンクを入力します。
1. 検索フィールドの下の置換フィールドに、置き換えたい単語、フレーズ、またはリンクを入力します。
1. 置換フィールドの末尾にある Replace All シンボルを押します（または Option-Command-Enter）。
1. `Replace X occurence(s) accross X files with X ?` の確認を求めるポップアップが表示されます。正しい場合、`Replace` を押します。
*検索結果をクリックして個別の変更を確認したり、特定の検索結果の隣にある置換ボタンをクリックすることで、すべての出現の一部のみを置換できることに注意してください。*

    ![picture-of-vscode-replace](/images/about/vscode_employee.png)
1. ターミナルに戻ります。

**ターミナル**

1. `git add .`（これで VS Code からの現在のすべての変更が追加されます。）
1. `git commit -m "Title of your MR"`（例：`"Update #peopleops Slack Channel to #people-connect"`、タイトルは必ず引用符で囲んでください。）
1. `git push`
1. ターミナルに `To push the current branch and set the remote as upstream, use` というメッセージが表示され、その後に `git push` で始まる文が続きます。この文を最新のアクティブなターミナル行（% で終わる）にコピー＆ペーストしてください。
1. `remote: <https://gitlab.com/> ....` を含む行がターミナルに表示されます。https:// で始まるリンクをカット＆ペーストしてブラウザに移動します。これで Create Merge Request ページに移動します。Web IDE で MR を作成するときと同じようにブラウザで続行できます。
1. `git checkout master`（これでターミナルでマスターに戻ります。）

## すべての（一致する）ファイルで文字列を検索および置換する

一括検索および置換を行うための以下の提案を参照してください。

ハンドブックリポジトリのいずれかでファイル/URL の名前を変更する場合は、[リダイレクトを追加](https://handbook.gitlab.com/docs/development/#redirects)してください。

`www-gitlab-com` リポジトリでファイル/URL の名前を変更する場合は、[このプロセス](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/redirects_on_about_gitlab_com.md)に従って、[`redirects.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/redirects.yml) にリダイレクトを追加することを忘れないでください。

### ターミナルを使う

プロジェクト、URL ターゲット、または Slack チャンネルの名前を変更することがあります。GitLab.com の Web IDE で簡単に検索および編集できますが、その他のファイルには素早く自動化された方法が必要です。

この方法は、上記で説明した find、exec、sed のヒントを組み合わせています。`exec` アクションは `sed` を使ってパターン/文字列のインライン置換を実行します。

以下の例は、すべてのファイルで Corporate Marketing プロジェクト URL を更新する[この MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/49617) で使用されています。

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

要約すると：

- `source/handbook` ディレクトリ内のすべてのファイルを検索および一致させます。URL は他のファイルにもある可能性があります。
- `exec` は `sed/gsed` アクションを実行します。
- 置換は `https://gitlab.com/gitlab-com/marketing/corporate-marketing` を `https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing` にします。
- コミットする前に `git status` および `git diff` で変更を確認します。
- コミット、プッシュ、URL から MR を作成します。

### Visual Studio Code を使う

[Visual Studio Code](https://code.visualstudio.com/download) と [VS Code 用 GitLab Workflow 拡張機能](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/) を使って、一括検索および置換操作を実行することもできます。次の手順は `sub-value` を `operating principle` に更新するこの [MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/106599) で使用されました。

[ハンドブックのローカル編集手順](_index.md#editing-the-handbook-locally)に従って、関連するリポジトリをクローンします。

`Visual Studio Code` を設定およびインストールしたら、リポジトリをクローンした関連ディレクトリを開きます。

新しいブランチを作成するには：

1. 下部のバーで `main` をクリック
1. `Create new branch` を選択
1. ブランチ名を入力
1. Enter キーを押す

その後、`Search` 機能（`⌘⇧F`）を使用して、希望する検索に一致するすべてのファイルを見つけられます。`Visual Studio Code` での検索では、大文字小文字の一致、単語全体の一致、または正規表現の使用ができます。省略記号（`…`）をクリックすると、パスのパターンマッチングでファイルを含めるか除外するオプションも利用できます（カンマで複数の include/exclude を区切ります）。

`Search` 機能で直接、一致する検索語のすべてのファイルで `Replace All` を実行できます：

1. `Search` フィールドの隣にある開示矢印をクリックするか、`⌘⇧H` を入力
1. `Search` 語を入力
1. `Replace` 語を入力
1. `Replace` フィールドの隣にある `Replace All` ボタンをクリックするか、`⌥⌘Enter` を入力

編集が完了したら、`Source Control`（`⌃⇧G`）機能を使用して：

1. 各ファイルの `+` 記号、または全コミットの `+` 記号をクリックして変更をステージング
1. メッセージフィールドにコミット名を入力し、`⌘Enter` で保存
1. publish または sync ボタンをクリック

ブランチをプッシュして MR を作成した後、`GitLab Workflow` 拡張機能を使用して `Merge Request`（MR）を管理できます。

## 末尾の空白を削除する

CI/CD のリンティングジョブは末尾の空白のチェックを使用できます。検出されると、チェックによってパイプラインが失敗し、ファイルを再度編集する必要があります。これにより、MR の作成およびレビュー時間が増加する可能性があります。次のヒントは、検出されたファイルの末尾のスペースをより速く削除するのに役立ちます。

```shell
content/handbook/marketing/developer-relations-and-community/_index.md:78:70 MD009/no-trailing-spaces Trailing spaces [Expected: 0 or 2; Actual: 1]
```

IDE またはコマンドラインは、問題を解決する一般的な方法です。

1. [Visual Studio Code](/handbook/tools-and-tips/editors-and-ides/visual-studio-code/)：編集するファイルを開きます。macOS では、[ショートカット `cmd k x`](https://code.visualstudio.com/docs/getstarted/keybindings#_rich-languages-editing) を使用して末尾の空白をクリアし、[`cmd s` でファイルを保存](https://code.visualstudio.com/docs/getstarted/keybindings#_file-management)します。
1. [vim](/handbook/tools-and-tips/editors-and-ides/vim/)：コマンドモード（ESC）に切り替え、`:` でコマンドを開始し、すべての末尾の空白をクリアするために次のシーケンスをコピーします：`%s/\s\+$//e`。Enter を押し、`:wq` でファイルを保存します。

Visual Studio Code は、末尾の空白を恒久的に削除するエディタ設定を提供しています。`File > Preference > Settings > User > Text Editor > Files > Trim Trailing Whitespace` に移動し、ファイル保存時に空白を自動的にトリミングするためにボックスをチェックします。一部のファイルには修正すべき多くの空白があり、マージリクエストの変更差分を読みにくくする可能性があるため、この設定は注意して使用してください。これは MR レビュー時間を増加させます。末尾の空白を別の MR で削除および修正することをお勧めします。

### 末尾の空白を一括削除する

[GNU sed](#before-you-begin-in-command-line) と [find](#using-a-terminal) を使用して、コマンドラインで複数のファイルの末尾の空白を置換できます。次の例は、`content/handbook` ディレクトリを再帰的に検索して `*.md` パターンに一致するファイルを探し、各ファイルでスクリプトを実行して末尾の空白をインラインで置換します（`sed -i ...`）。

```shell
find content/handbook -type f -name '*.md' -exec sh -c "sed -i 's/[ \t]*$//' "$1" '{}'" \;
```

### マージリクエストで末尾の空白を削除する

末尾の空白の lint エラーを 1 つまたは数個修正する最も簡単な方法は、マージリクエスト内で直接行うことです。

1. マージリクエストの `Changes` タブから、lint エラーメッセージで言及されたファイルと行番号を見つけます
1. 行番号の隣の吹き出しをクリックしてコメントを追加します
1. コメントダイアログで、`insert suggestion` ボタンをクリックして行をコメントダイアログにコピーします
1. 行末から末尾の空白を削除します
1. `Add comment now` をクリックし、提案を適用します


{{< youtube "Kfdf2VAk9sM" >}}

