---
title: "手動リリース投稿キックオフ"
description: "リリース投稿を手動でキックオフするためのガイドライン"
upstream_path: /handbook/marketing/blog/release-posts/manual-release-post-kickoff/
upstream_sha: "02cf85a2ba59858c59b2a31a0356f2371a2a8979"
translated_at: "2026-04-30T07:00:13Z"
translator: claude
stale: false
---

## リリース投稿ブランチと必要なディレクトリ / ファイルを手動で作成する

自動化されたパイプラインが失敗した場合、以下の手動手順はローカルまたは GitLab Web IDE を使用して実行できます:

1. `gitlab.com/gitlab-com/www-gitlab-com` で `master` から新しいブランチ `release-X-Y` を作成します。
1. `release-X-Y` ブランチで、はじめにとブログ投稿のフロントマター情報を含むブログ投稿ファイルを作成します:
   1. `sites/uncategorized/source/releases/posts/` ディレクトリに、[月次リリースブログテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/blog/monthly_release_blog_template.html.md)をコピーして `YYYY-MM-22-gitlab-X-Y-released.html.md` という名前の新しいファイルを追加します。
   1. `sites/uncategorized/source/releases/posts/YYYY-MM-22-gitlab-X-Y-release.html.md` の 36 行目にリリース番号を追加し、バックティックを削除してください。
   1. `sites/uncategorized/source/releases/posts/YYYY-MM-22-gitlab-X-Y-release.html.md` の 3 行目と 4 行目に著者として自分の名前を追加します。
   1. `sites/uncategorized/source/releases/posts/YYYY-MM-22-gitlab-X-Y-release.html.md` の 41 行目にある「これには `YY` リリースキックオフビデオが含まれています」という行を更新し、`YY`（バックティックを削除することも含めて）を**次の**リリースに言及するよう変更します。
1. `release-X-Y` ブランチで、機能やその他のデータが追加されるリリース投稿データディレクトリを作成します:
   1. `data/release_posts` ディレクトリに新しいディレクトリ `X_Y` を作成します。
   1. [`data/release_posts/unreleased/samples/mvp.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/release_posts/unreleased/samples/mvp.yml) を `data/release_posts/X_Y/mvp.yml` にコピーします。

### リリース投稿 MR の作成

前回の投稿がマージされた後、フィーチャーフリーズ日前に、チームからのコントリビューションを受け取れるようにする導入変更とともにマージリクエストを作成します:

1. ソースブランチは `release-X-Y`、ターゲットブランチは `master` でなければなりません。
1. タイトルを `Draft: Release post - GitLab X.Y` に設定します。タイトルの先頭に `Draft:` を付けてください。
1. 「マージリクエストが承認されたらソースブランチを削除する」が選択されていることを確認してください。
1. MR にリリース投稿テンプレートを使用してください。

   ![リリース投稿 MR テンプレート](/images/marketing/blog/release-posts/manual-release-post-kickoff/release-post-mr-template.png)

リリース投稿 MR を作成したら、MR のチェックリストを参照して、取るべき各アクションとその期日を確認してください。使い勝手の改善、バグ、パフォーマンス改善の MR には独自のチェックリストがあり、リリース投稿マネージャーがこれらの MR を最終コンテンツアセンブリの前の 17 日までにマージするタスクが含まれていることに注意してください。

## レトロスペクティブ Issue の作成

1. [リリース投稿レトロスペクティブテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/issue_templates/Release-Post-Retrospective.md)を使用してリリース投稿レトロスペクティブ Issue を作成し、タイトルとして `Release Post X.Y Retrospective` を使用します。
1. Issue に適切なマイルストーンを追加します。
1. 自分を Issue に割り当てます。

**注:** リリース投稿 MR とすべての関連ファイルを作成したら、MR のチェックリストを参照して取るべき各アクションとその期日を確認してください。使い勝手の改善、バグ、パフォーマンス改善の MR には独自のチェックリストがあり、リリース投稿マネージャーがこれらの MR を最終コンテンツアセンブリの前の 17 日までにマージするタスクが含まれていることに注意してください。

### コンテンツアセンブリ: リリース投稿アイテム（コンテンツブロック）をブランチにマージする


{{% alert title="重要" %}}
この手順は 18 日の <time datetime="07:59">07:59 UTC（18 日の ET 02:59 / 17 日の PT 23:59）</time> まで適用されます。この時刻以降、今後のリリース投稿に変更を含めたい場合は、`release-X-Y` ブランチを対象にした別の MR でリリース投稿マネージャーと直接調整するか、リリース投稿マネージャーに割り当ててマージしてもらう必要があります。詳細については、[フィーチャーブランチでの開発](https://docs.gitlab.com/topics/git/add_files/)に関するドキュメントを参照してください。
{{% /alert %}}


リリース投稿をアセンブルする時が来たら、コンテンツブロックファイルを `data/release_posts/unreleased` から `data/release_posts/X_Y` に移動し、画像を `source/images/unreleased` から `source/images/X_Y` に移動します。

これらのブロックアイテムは、各 PM が各機能のために作成したリリース投稿アイテムで構成されています。

`bin/release-post-assemble` スクリプトを使用するとこれが簡単にできます:

```bash
  git checkout master
  git pull
  git checkout release-X-Y
  git pull
  git merge master
  bin/release-post-assemble
  git status
  # コンテンツブロックと画像が `unreleased` から `X_Y` に移動されたことを確認
  git add .
  git commit -m "Content assembly"
  git push origin release-x-y
```

#### コンテンツアセンブリボットが失敗した場合

何らかの理由でコンテンツアセンブリボットが失敗した場合、最も簡単な対処法はファイルを手動で移動することです。変更のウォークスルー動画も[こちら](https://www.youtube.com/watch?v=SAtiSiSh_eA)にあります。

1. `/data/releases_posts/unreleased/` から `/data/release_posts/x_y/` に（`x_y` はリリース投稿ディレクトリ例: `13_2`）すべての `.yml` ファイルを手動で移動します。| *注: `/samples` ディレクトリは同じ場所に残してください。移動しないでください。*
1. `/source/images/unreleased/` から `/source/images/x_y/` にすべての画像を手動で移動します。
1. VS Code などのテキストエディタを使用して、各リリース投稿 `.yml` ファイルの `image_url:` の下にある画像パスをすべて `/unreleased/` から `/x_y/` に**検索・置換**します。上の動画でこれをデモンストレーションしています。
1. `git commit` と `git push` を実行すれば完了です。

### リリース投稿アセンブリ

[リリース投稿アセンブリ](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/validate-release-post-item)スクリプトは、リリース投稿のコンテンツブロックとその画像を現在のリリースディレクトリに移動します。

シンプルな正規表現を使用してコンテンツファイルと画像を見つけます。バリデーションは行いません。将来的には、維持するスクリプトの数を減らすためにリンターの機能と組み合わせることが簡単にできるでしょう。

18 日のコンテンツアセンブリに備えて、リリース投稿マネージャーはローカル開発環境が最新であることを確認してください（例: 最新バージョンの Ruby を実行していること）。事前にローカル開発環境を準備するためのステップについては、[リリース投稿 MR チェックリスト](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post.md)の「コンテンツアセンブリと初期レビュー」セクションに従ってください。

#### スクリプトのエラーと是正措置の例

[development.md](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md) には、ローカル開発環境をセットアップする手順が含まれています。

何をすべきかが明確でない場合に遭遇する可能性のある一般的なエラーをいくつか示します。

**必要な Ruby Gem がありません**

このようなあいまいなエラーが発生する可能性があります:

```bash
Traceback (most recent call last):
  6: from ./bin/release-post-item:5:in `<main>'
  5: from ./bin/release-post-item:5:in `require_relative'
  4: from /Users/chase/work/www-gitlab-com/lib/release_posts.rb:13:in `<top (required)>'
  3: from /Users/chase/work/www-gitlab-com/lib/release_posts.rb:13:in `require_relative'
  2: from /Users/chase/work/www-gitlab-com/lib/release_posts/post_entry.rb:6:in `<top (required)>'
  1: from /Users/chase/.asdf/installs/ruby/2.6.6/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:117:in `require'
/Users/chase/.asdf/installs/ruby/2.6.6/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:117:in `require': cannot load such file -- styled_yaml (LoadError)
```

この場合、Ruby は `styled_yaml` という名前のファイルをロードしようとしています。これが gem（自己完結した Ruby ライブラリ）であることは明確ではありませんが、出力の `require` ステートメントが未解決の依存関係があることを示しています。**この場合に取るべきアクションは `bundle install` を実行することです。** `./bin/doctor` を実行することもでき、何をすべきかガイダンスを提供する*はず*です。ここに不安を感じる場合や困難に遭遇した場合は、アドバイスを求めて[リリース投稿 DRI](https://gitlab.com/fseifoddini) に連絡してください。

**Ruby のバージョンの不一致**

Ruby バージョンマネージャーがインストールされている場合、`ruby  3.0.0  Not installed. Run "asdf install ruby 3.0.0"` のようなエラーがターミナルに表示されることがあります。

ハンドブックスクリプトを実行するために必要なものと比較して、Ruby バージョンが古い可能性があります。`./bin/doctor` を実行して、現在の Ruby バージョンと `.tool-versions` ファイルのバージョンを比較できます。

**取るべきアクションは、必要な Ruby バージョンをインストールすることです**

最も一般的な Ruby バージョンマネージャーで Ruby をインストールするには、以下を試してください:

- asdf の場合: `asdf install ruby 3.0.0` を実行
- rbenv の場合: `brew upgrade rbenv ruby-build && rbenv install 3.0.0` を実行
- rvm の場合: `rvm install 3.0.0` を実行

ここに不安を感じる場合や困難に遭遇した場合は、アドバイスを求めて[リリース投稿 DRI](https://gitlab.com/fseifoddini) に連絡してください。

ハンドブックは現在[`rvm` を推奨](/handbook/about/editing-handbook/#4-install-ruby-version-manager-rvm)していますが、エンジニアリングは `asdf` を採用しています。このドキュメントに `rbenv` への参照も見つかるかもしれません。どれでも問題ありませんが、それぞれ少し動作が異なり、**Ruby バージョンマネージャーは一つだけ必要です**。

macOS のアップグレード、特に以前のバージョンから Catalina 以降へのアップグレードによって、Ruby バージョンマネージャーの設定が誤っているか変更されている可能性もあります。このシナリオに対する具体的なアクションを提案することは難しいため、アドバイスを求めて[リリース投稿 DRI](https://gitlab.com/fseifoddini) に連絡することをお勧めします。

**Gem は正しくインストールされるが、それでも gem が見つからないエラーが発生する**

Ruby gem パッケージマネージャーは bundler と呼ばれます。インストールされている bundler のバージョンによっては、`--path that_other_directory` を渡すことで gem を通常（および必要な）場所とは異なる場所にインストールするように bundler を設定できます。これらの設定は `./.bundle/config` または `./bundle/config` に保存されます。

`./bundle/config` ファイルを確認すると次のように表示されることがあります:

```yaml
BUNDLE_PATH: "that_other_directory"
```

**この場合に取るべきアクションは、そのファイル `./bundle/config` と場合によっては `./bundle/config` を編集して BUNDLE_PATH 設定を削除し、`bundle install` を再実行することです。** 多くの場合 `vendor` である `that_other_directory` も削除したい場合があります。ここに不安を感じる場合や困難に遭遇した場合は、アドバイスを求めて[リリース投稿 DRI](https://gitlab.com/fseifoddini) に連絡してください。

**ロックサポート**

ローカルコミットをオリジンにプッシュする際に、ロックサポートに関してこのようなメッセージが表示されることがあります:

```bash
Locking support detected on remote "origin". Consider enabling it with:
  $ git config lfs.https://work-gitlab/gitlab-com/www-gitlab-com.git/info/lfs.locksverify true
```

この提案は安全に無視できます。[Git LFS ファイルロック](https://github.com/git-lfs/git-lfs/wiki/File-Locking)の詳細ドキュメントを参照してください。

**JAMF と git-lfs の競合**

コミットを gitlab.com にプッシュしようとする過程で、git が gitlab.com の SSL 証明書を確認しようとしています。JAMF がインストールされている場合（コンプライアンス上インストールされているはずです）、git が gitlab.com に対して異なる証明書を見つけ、`Post "https://gitlab.com/gitlab-com/www-gitlab-com.git/info/lfs/locks/verify": x509: certificate signed by unknown authority error: failed to push some refs to 'gitlab.com:gitlab-com/www-gitlab-com.git'` というエラーが発生することがあります。

**この場合に取るべきアクションは IT に連絡することです**

詳細については、[この Issue](https://gitlab.com/gitlab-com/business-ops/team-member-enablement/issue-tracker/-/issues/1263#note_491341250) を参照してください。
