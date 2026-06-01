---
title: "プロのように GitLab を検索する"
upstream_path: /handbook/tools-and-tips/searching/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:50:58Z"
translator: claude
stale: false
lastmod: "2026-06-01T17:35:18+01:00"
---

GitLab や Web の検索を通常より速くするコツがいくつかあります。
このページでは、それらのコツのいくつかを紹介します。

## Glean を使った検索

すべての GitLab チームメンバーは、人、ドキュメント、Issue、チケット、社内ツール全体の会話を 1 か所で見つけるために使う、GitLab の AI ナレッジプラットフォームである [Glean](/handbook/eta/ai/tools/glean/) にアクセスできます。

**Glean を使うとき:**

* 複数のシステムを横断して検索する必要がある場合（公開および内部ハンドブック + Slack + Google Drive + Salesforce + GitLab.com）
* 自然言語で質問したい場合: 「経費はどうやって提出する？」や「顧客のエスカレーションは誰が対応している？」
* 複数のシステムに散らばっている顧客情報、ミーティングメモ、ドキュメントを探している場合

[app.glean.com](https://app.glean.com) にアクセスするか、Okta 経由でアクセスして検索します。Glean は既存のパーミッションを尊重します。あなたがアクセスを許可されている情報のみが見えます。フィルターを使ってソースで結果を絞り込んだり（ハンドブックのみ、Slack のみなど）、一度にすべてを検索したりできます。

GitLab での Glean の使い方の詳細は、ハンドブックの [Glean ガイド](/handbook/eta/ai/tools/glean/) を参照してください。

## Anthropic の Claude を使ったハンドブック検索

Anthropic とのエンタープライズ契約の一環として、すべての GitLab チームメンバーは [Claude.ai](/handbook/tools-and-tips/ai/claude/) を利用できます。

Claude の Web 検索機能を活用すれば、この強力なツールを使って GitLab ハンドブック内の情報を検索したり、ハンドブックのガイダンスに基づいてさまざまなトピックについて助言を得たりできます。ハンドブックで参照可能なコンテンツを見つけて解釈する助けになります。

「GitLab ハンドブックに基づき、〇〇について教えて」のようなシンプルなプロンプトは、求めている情報を見つける良い方法です。

## `site:` を使った検索

多くの検索エンジンでは、特定のウェブサイトのみを検索できます。
これを行うには、`site:` の後に検索したい特定のウェブサイトを続け、その後に検索クエリを入力します。
`site:` は [Google](https://www.google.com/), [Bing](https://www.bing.com/), [DuckDuckGo](https://duckduckgo.com/) など、多くの検索エンジンでサポートされています。

たとえば、GitLab ハンドブックで `iteration` を検索するには次のように入力します。

> `site:handbook.gitlab.com iteration`

または、GitLab ドキュメントで `permissions` を検索するには次のとおりです。

> `site:docs.gitlab.com permissions`

## キーワード検索を使う

`site:` のテクニックは強力ですが、頻繁に使うと毎回 URL を打つことになり、あまり効率的ではありません。

キーワード検索を使うと、キーワードで特定のウェブサイトを検索でき、ウェブ全般を検索する非常に高速な方法です。

たとえば、GitLab ハンドブックで `iteration` を検索するには、ブラウザで次のように入力できます（`hb` は `handbook` の意味）。

> `hb iteration`

または、GitLab ドキュメントで `permissions` を検索するには、ブラウザで次のように入力できます（`gd` は `GitLab docs` の意味）。

> `gd permissions`

Chrome と Firefox でのキーワード検索の設定手順は以下で確認できます。

### Chrome でのキーワード検索の設定

キーワード検索は、Chrome の [検索エンジン](chrome://settings/searchEngines) 設定で新しい `Site searches` として作成します。デフォルトでは、[Chrome のオムニボックス](https://developer.chrome.com/docs/extensions/reference/api/omnibox)（アドレスバー）にキーワードを入力し、<kbd>space</kbd> または <kbd>tab</kbd> をタップしてからクエリを入力して <kbd>return</kbd> を押すと、このキーワード検索が使われます。

以下の手順は、GitLab ドキュメントを検索するキーワード検索を設定する方法です。

| 手順 | 画像 |
|---|---|
| 1. Chrome のアドレスバーを右クリックして `Manage Search Engines...` を選択 | ![検索エンジン管理](/images/tools-and-tips/1_manage_search_engine.png) |
| 2. `Site search` セクションで `Add` ボタンをクリック | ![検索エンジン追加](/images/tools-and-tips/2_add_search_engine.png) |
| 3. 新しい `Add search engine` ダイアログで以下を入力し `Add` をクリック: <br> a. *Search Engine* に `GitLab documentation` <br> b. *Shortcut* に `gd` <br> c. *URL* に `https://docs.gitlab.com/search/?q=%s` |  |

これをテストするには、新しいタブを開いてアドレスバーに `gd` <kbd>Tab</kbd> `merge requests` と入力して Enter キーを押します。
GitLab ドキュメントページが開き、`merge requests` の検索結果が表示されるはずです。

### Firefox でのキーワード検索の設定

キーワード検索は、Firefox では新しいブックマークとして作成します。
以下の手順は、GitLab ドキュメントを検索するキーワード検索を設定する方法です。

| 手順 | 画像 |
|---|---|
| 1. メニューバーの `Bookmarks` をクリックし、`Show All Bookmarks` をクリック | ![Firefox 検索](/images/tools-and-tips/ff_1_library_menu.png) |
| 2. 左側の `Bookmarks Menu` を選択 | ![Firefox 検索](/images/tools-and-tips/ff_2_select_bookmarks_menu.png) |
| 3. 歯車アイコンをクリックして `New Bookmark...` を選択 | ![Firefox 検索](/images/tools-and-tips/ff_3_new_bookmark.png) |
| 4. 新しいポップアップダイアログで以下を入力し `Add` をクリック: <br> a. *Name* に `Search GitLab documentation` <br> b. *Location* に `https://docs.gitlab.com/search/?q=%s` <br> c. *Keyword* に `hb` |  |

これをテストするには、新しいタブを開いてアドレスバーに `gd merge requests` と入力して Enter キーを押します。
GitLab ドキュメントの検索結果ページが開き、`merge requests` の検索結果が表示されるはずです。

#### Firefox でのキーワード検索のインポート

Firefox ではキーワード検索がブックマークとして保存されるため、インポートが可能です。
以下の手順は、後述の [§ キーワード検索 URL の例](#examples-of-keyword-search-urls) のキーワード検索をインポートする方法です。

| 手順 | 画像 |
|---|---|
| 1. [キーワード検索 Firefox ブックマークファイル](/handbook/tools-and-tips/searching/gitlab-keyword-search-firefox-bookmarks/) をダウンロード | |
| 2. Bookmarks ウィンドウに移動し、インポート・エクスポートアイコンをクリックして `Import Bookmarks from HTML...` をクリック | ![Firefox ブックマークインポート](/images/tools-and-tips/ff_import_bookmarks.png) |
| 3. 新しいポップアップダイアログで、手順 1 でダウンロードしたファイルを選択して、キーワード検索を Firefox のブックマークにインポート | |

これをテストするには、新しいタブを開いてアドレスバーに `gd merge requests` と入力して Enter キーを押します。
GitLab ドキュメントの検索結果ページが開き、`merge requests` の検索結果が表示されるはずです。

### キーワード検索 URL の例

次の表は、ブラウザで設定できるキーワード検索 URL の例です。
Chrome と Firefox にキーワード検索を追加する手順は上記にあります。

| アクション | キーワード例 | キーワード検索 URL |
| --- | --- | --- |
| GitLab ハンドブックを検索 | gh | ***Google 検索:*** `https://www.google.com/search?q=(site:handbook.gitlab.com) %s` |
| GitLab ウェブサイトを検索 | gw | ***Google 検索:*** `https://www.google.com/search?q=(site:about.gitlab.com) %s` <br><br> ***GitLab 検索 (about.gitlab.com):*** `https://about.gitlab.com/#stq=%s` |
| GitLab インハウス - 内部ハンドブックを検索 | gi | `https://internal.gitlab.com/handbook/?search=%s` |
| GitLab ドキュメントを検索 | gd | `https://docs.gitlab.com/search/?q=%s` |
| GitLab ドキュメント、ハンドブック、フォーラムを検索 | gl | `https://google.com/search?q=site:*.gitlab.com %s` |
| GitLab Issue を検索 | gi | ***GitLab.org プロジェクト***: `https://gitlab.com/search?search=%s&group_id=9970&project_id=278964&scope=issues` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/search?search=%s&group_id=6543&project_id=7764&scope=issues` |
| gitlab-org グループを検索 | go | `https://gitlab.com/search?search=%s&group_id=9970` |
| gitlab-com グループを検索 | gc | `https://gitlab.com/search?search=%s&group_id=6543` |
| 特定のエピックへ移動 | epic | ***GitLab.org グループ:*** `https://gitlab.com/groups/gitlab-org/-/epics/%s`<br><br> ***GitLab.com グループ:*** `https://gitlab.com/groups/gitlab-com/-/epics/%s` |
| 特定の Issue へ移動 | issue | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/issues/%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/issues/%s` |
| 特定の MR へ移動 | mr | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/merge_requests/%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/%s` |
| 作者でオープン Issue を検索 | iauthor | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` |
| 作者でオープン MR を検索 | mrauthor | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` |
| Google Drive ファイルを検索 | dv | `https://drive.google.com/drive/search?q=%s` |
| Wikipedia を検索 | w | `https://en.wikipedia.org/w/index.php?search=%s` |

キーワード検索 URL では、検索クエリが入る位置を示すために URL に `%s` が含まれています。

通常、キーワード検索 URL に使う URL は次の方法で見つけられます。

1. ウェブサイトで `asdf` を検索する
1. 検索結果ページがロードされたら、アドレスバーの URL で `asdf` を探す
1. URL に `asdf` が含まれていれば、これを `%s` に置き換えるとキーワード検索 URL に使える URL になる

## Firefox で追加の検索エンジンを使った検索

キーワードを使う代わりにアドレスバーで検索エンジンを選択して検索したい場合は、以下の手順で Firefox にカスタム検索エンジンを追加して GitLab を検索できます。

| 手順 | 画像 |
|---|---|
| 1. [Add custom search engine 拡張機能](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/) をインストール | |
| 2. インストール後、ツールバーのアドオンアイコンをクリックするか、アドオンマネージャーから「Preferences」をクリック | ![Add custom search engine 拡張機能](/images/tools-and-tips/1_add_search_engine_firefox.png) |
| 3. 以下を入力し `Add custom search engine` をクリック: <br> a. *Name* に `GitLab handbook` <br> b. *Search URL* に `https://handbook.gitlab.com/?search=%s` <br> c. *Icon* に `https://about.gitlab.com/ico/favicon.ico` | ![検索エンジンフォーム](/images/tools-and-tips/2_add_search_engine_firefox.png) |

これをテストするには、新しいタブに移動してアドレスバーにテキストを入力します。サジェストリストの一番下に新しい検索エンジンのアイコンが表示されるはずです。

## Alfred (MacOS) を使った検索

[Alfred](https://www.alfredapp.com/) でキーワード検索を作成できます。
以下の各 URL をクリックすると Alfred に追加できます。

Alfred にキーワード検索を追加するリンク

* [gl](alfred://customsearch/gitlab%20handbook/gl/utf8/nospace/https%3A%2F%2Fhandbook.gitlab.com%2Fhandbook%2F%3Fsearch%3D%7Bquery%7D)
* [gd](alfred://customsearch/gitlab%20docs/gd/utf8/nospace/https%3A%2F%2Fdocs.gitlab.com%2Fsearch%2F%3Fq%3D%7Bquery%7D)
* [gg](alfred://customsearch/GitLab%20issues%20search/gg/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fsearch%3Fsearch%3D%7Bquery%7D%26project_id%3D%26group_id%3D6543%26scope%3Dissues)
* [mr](alfred://customsearch/MR%20Author%20GitLab/mr/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fdashboard%2Fmerge_requests%3Fscope%3Dall%26utf8%3D%25E2%259C%2593%26state%3Dopened%26author_username%3D%7Bquery%7D)
* [author](alfred://customsearch/GitLab%20Issues%20Author/author/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fdashboard%2Fissues%3Fscope%3Dall%26utf8%3D%25E2%259C%2593%26state%3Dopened%26author_username%3D%7Bquery%7D)
* [issue](alfred://customsearch/GitLab%20issue/issue/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fgitlab-org%2Fgitlab%2Fissues%2F%7Bquery%7D)

GitLab の favicon ![favicon](/images/ico/favicon-32x32.png) を Alfred のカスタム検索にドラッグ＆ドロップして favicon を追加できます。
![Alfred favicon](/images/tools-and-tips/AF_add_icon.png)

GitLab チームメンバーの [Simon M.](https://gitlab.com/simon_mansfield) が、Alfred と Firefox を使って GitLab をプロのように検索するプロセスを解説する以下の動画も録画しています。

GitLab 関連のワークフローを集めた [GitLab チームメンバーが維持するリポジトリ](https://gitlab.com/gitlab-org/alfred) もあります。

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/tu7YHZAKKN8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

## Raycast (MacOS) を使った検索

[Raycast](https://www.raycast.com/) で、quicklink 機能を使って Spotlight ライクな検索を実行できます。

1. Raycast のホットキーを押す（デフォルト: `option` + `space`）
1. ストアを開く（`store` と入力）
1. `GitLab Docs` をインストール
1. （オプション）ショートカットを設定する
   1. `extensions` を検索
   1. Enter キーを押す
   1. `GitLab Docs` を探す
   1. `Alias` または `Hotkey` を割り当てる

これで Raycast を使って検索できます。

1. Raycast のホットキーを押す
1. `GitLab Docs`、`GitLab Handbook`、または `Pajamas` と入力
1. Enter キーを押す
1. 検索クエリを入力
1. Enter キーを押す

選択したブラウザで検索が開きます。

![Raycast 検索の例](/images/tools-and-tips/raycast_docs_search.png)

## GitLab Unfiltered を使った録画イベントの検索

[YouTube チャンネルの GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/featured) で録画イベントを検索する手順は次のとおりです。

* [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/featured) を開く
* トップバーの「Search」を示す虫眼鏡アイコンをクリックする
* 録画を探したいイベントを入力する（例: AMA、Group Conversation、Product Kickoff Review、Key Reviews など）
* 検索ページをスクロールして録画動画を見つける
* 「[Videos](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos)」タブをクリックすることもできる
* 「Date Added (newest)」または「Date Added (oldest)」で並べ替える
* 必要な録画を見つける
* 部門、チーム、トピック別に整理された「[Playlists](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/playlists)」にグルーピングされた録画を検索することもできる

## Git history と Git blame を使った変更の検索

{{< youtube "VsgToca4oCw" >}}

*上記の [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) 動画で、Darren M. が Git ファイルヒストリーと Git blame を使ってハンドブックの変更を追跡する短いチュートリアルを解説しています。*

GitLab のリポジトリで [Git ファイルヒストリー](https://docs.gitlab.com/ee/user/project/repository/files/git_history.html) と [Git blame](https://docs.gitlab.com/ee/user/project/repository/files/git_blame.html) を使って変更を検索できます。

Git ファイルヒストリーはファイルに関連するコミット履歴の情報を提供し、blame はファイル内の各行について最終変更時刻、作者、コミットハッシュなど、より多くの情報を提供します。

これは「GitLab はいつ BlueJeans から Zoom に切り替えた？」のような質問に答えるのに便利です（答えは `2016-09-22` の [このコミット](https://gitlab.com/gitlab-com/www-gitlab-com/commit/5ecfa0794f09337d9f2509f4583c34d56904e24c) にあり、これらの用語を参照する元のハンドブック変更が示されています）。

検索を開始する場所の参考として、GitLab のウェブサイト/ハンドブックは [`www-gitlab-com` リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com) にホストされており、GitLab ドキュメントは [こちら](https://gitlab.com/gitlab-org/gitlab-docs) にあります。

## GitLab 検索バーを使った GitLab のナビゲーション

GitLab には、検索バーに入力するとさまざまなページへのオートコンプリートナビゲーションを得られる、ハードコードされたショートカットがいくつかあります。この検索バーを使って、プロジェクトやグループ間を移動することもできます。

GitLab チームメンバーの [Dylan](https://gitlab.com/DylanGriffith) が、その仕組みを示す以下の動画を録画しています。

{{< youtube "OE9b0Qc6KaI" >}}
