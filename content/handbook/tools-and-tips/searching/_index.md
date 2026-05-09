---
title: "プロのように GitLab を検索する"
upstream_path: /handbook/tools-and-tips/searching/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
---

GitLab や Web の検索を通常より速くするコツがいくつかあります。
このページでは、それらのコツのいくつかを紹介します。

## Glean を使った検索

すべての GitLab チームメンバーは、人、ドキュメント、Issue、チケット、社内ツール全体の会話を 1 か所で見つけるために使う、GitLab の AI ナレッジプラットフォームである [Glean](/handbook/business-technology/enterprise-applications/guides/glean-guide/) にアクセスできます。

**Glean を使うとき:**

* 複数のシステムを横断して検索する必要がある場合（公開および内部ハンドブック + Slack + Google Drive + Salesforce + GitLab.com）
* 自然言語で質問したい場合: 「経費はどう申請すればいい？」または「カスタマーエスカレーションは誰が対応しているの？」
* 複数のシステムに散在している顧客情報、ミーティングノート、ドキュメントを探している場合

[app.glean.com](https://app.glean.com) に移動するか、Okta 経由でアクセスして検索してください。Glean はあなたの既存の権限を尊重します。アクセス権限のある情報のみが表示されます。フィルターを使ってソース（ハンドブックのみ、Slack のみなど）で結果を絞り込むか、すべてを横断検索してください。

GitLab で Glean を使う詳しい手順については、ハンドブックの [Glean ガイド](/handbook/business-technology/enterprise-applications/guides/glean-guide/) を参照してください。

## Anthropic 社の Claude を使ってハンドブックを検索する

Anthropic とのエンタープライズ契約の一環として、すべての GitLab チームメンバーは [Claude.ai](/handbook/tools-and-tips/ai/claude/) を使用できます。

Claude には Web 検索能力があり、この強力なツールを使って GitLab ハンドブック内の情報を検索したり、ハンドブックのガイダンスに基づいてさまざまなトピックについてアドバイスしたりすることは、ハンドブックで利用可能なコンテンツを見つけて解釈する助けになります。

「GitLab ハンドブックに基づいて、'質問を入力'…」のようなシンプルなプロンプトは、探している情報を見つけるのに最適な方法です。

## "site:" を使った検索

多くの検索エンジンでは、特定の Web サイトのみを検索できます。
これを行うには、検索したい特定の Web サイトの後に `site:` を付け、その後に検索クエリを入力します。
`site:` は [Google](https://www.google.com/)、[Bing](https://www.bing.com/)、[DuckDuckGo](https://duckduckgo.com/) など、多くの検索エンジンでサポートされています。

たとえば、GitLab ハンドブックで `iteration` を検索するには次のように入力します:

> `site:handbook.gitlab.com iteration`

または GitLab ドキュメントで `permissions` を検索するには:

> `site:docs.gitlab.com permissions`

## キーワード検索を使った検索

`site:` テクニックは強力ですが、頻繁に使用すると常に URL を入力することになり、あまり効率的ではありません。

キーワード検索では、キーワードを使って特定の Web サイトを検索でき、Web を一般的に検索する驚くほど高速な方法です。

たとえば、GitLab ハンドブックで `iteration` を検索するには、ブラウザで次のように入力できます（`hb` は `handbook` の略）:

> `hb iteration`

または GitLab ドキュメントで `permissions` を検索するには、次のように入力できます（`gd` は `GitLab docs` の略）:

> `gd permissions`

Chrome と Firefox でキーワード検索を設定する手順については、以下を参照してください。

### Chrome でキーワード検索をセットアップする

キーワード検索は Chrome の [Search engine](chrome://settings/searchEngines) 設定で新しい `Site searches` として作成されます。デフォルトでは、[Chrome のオムニボックス](https://developer.chrome.com/docs/extensions/reference/api/omnibox)（アドレスバー）にキーワードを入力して <kbd>space</kbd> または <kbd>tab</kbd> をタップし、その後クエリを入力して <kbd>return</kbd> を押すことで、このキーワード検索が使われます。

以下のステップでは、GitLab ドキュメントを検索するキーワード検索の設定方法を示します。

| ステップ | 画像 |
|---|---|
| 1. Chrome のアドレスバーを右クリックして `Manage Search Engines...` を選択 | ![Manage search engine](/images/tools-and-tips/1_manage_search_engine.png) |
| 2. `Site search` セクションで `Add` ボタンをクリック | ![Add search engine](/images/tools-and-tips/2_add_search_engine.png) |
| 3. 新しい `Add search engine` ダイアログで以下を入力し `Add` をクリック: <br> a. *Search Engine* に `GitLab documentation` <br> b. *Shortcut* に `gd` <br> c. *URL* に `https://docs.gitlab.com/search/?q=%s` |  |

これをテストするには、新しいタブを開き、アドレスバーに次のように入力します: `gd` <kbd>Tab</kbd> `merge requests` Enter キーを押します。
GitLab ドキュメントページが `merge requests` の検索結果を表示してロードされるはずです。

### Firefox でキーワード検索をセットアップする

キーワード検索は Firefox の新しいブックマークとして作成されます。
以下のステップでは、GitLab ドキュメントを検索するキーワード検索の設定方法を示します。

| ステップ | 画像 |
|---|---|
| 1. メニューバーの `Bookmarks` をクリックし、`Show All Bookmarks` をクリック | ![Firefox 検索](/images/tools-and-tips/ff_1_library_menu.png) |
| 2. 左で `Bookmarks Menu` を選択 | ![Firefox 検索](/images/tools-and-tips/ff_2_select_bookmarks_menu.png) |
| 3. 歯車アイコンをクリックして `New Bookmark...` を選択 | ![Firefox 検索](/images/tools-and-tips/ff_3_new_bookmark.png) |
| 4. 新しいポップアップダイアログで以下を入力し `Add` をクリック: <br> a. *Name* に `Search GitLab documentation` <br> b. *Location* に `https://docs.gitlab.com/search/?q=%s` <br> c. *Keyword* に `hb` |  |

これをテストするには、新しいタブを開き、アドレスバーに `gd merge requests` と入力して Enter キーを押します。
GitLab ドキュメント検索結果ページが `merge requests` の検索結果を表示してロードされるはずです。

#### Firefox にキーワード検索をインポートする

Firefox のキーワード検索はブックマークとして保存されているため、インポートすることが可能です。
以下のステップでは、[§ キーワード検索 URL の例](#examples-of-keyword-search-urls) で説明されているキーワード検索のインポート方法を示します。

| ステップ | 画像 |
|---|---|
| 1. [キーワード検索 Firefox ブックマークファイル](/handbook/tools-and-tips/searching/gitlab-keyword-search-firefox-bookmarks/) をダウンロード | |
| 2. ブックマークウィンドウに移動し、インポート・エクスポートアイコンをクリックして `Import Bookmarks from HTML...` をクリック | ![Firefox ブックマークインポート](/images/tools-and-tips/ff_import_bookmarks.png) |
| 3. 新しいポップアップダイアログで、ステップ 1 でダウンロードしたファイルを選択して、Firefox ブックマークにキーワード検索をインポート | |

これをテストするには、新しいタブを開き、アドレスバーに `gd merge requests` と入力して Enter キーを押します。
GitLab ドキュメント検索結果ページが `merge requests` の検索結果を表示してロードされるはずです。

### キーワード検索 URL の例 {#examples-of-keyword-search-urls}

以下の表は、ブラウザで設定できるいくつかのキーワード検索 URL を示しています。
Chrome と Firefox でキーワード検索を追加する手順は上記のとおりです。

| アクション | キーワード例 | キーワード検索 URL |
| --- | --- | --- |
| GitLab ハンドブックを検索 | gh | ***Google 検索:*** `https://www.google.com/search?q=(site:handbook.gitlab.com) %s` |
| GitLab Web サイトを検索 | gw | ***Google 検索:*** `https://www.google.com/search?q=(site:about.gitlab.com) %s` <br><br> ***GitLab 検索 (about.gitlab.com):*** `https://about.gitlab.com/#stq=%s` |
| GitLab inhouse - 内部ハンドブックを検索 | gi | `https://internal.gitlab.com/handbook/?search=%s` |
| GitLab ドキュメントを検索 | gd | `https://docs.gitlab.com/search/?q=%s` |
| GitLab ドキュメント、ハンドブック、フォーラムを検索 | gl | `https://google.com/search?q=site:*.gitlab.com %s` |
| GitLab Issue を検索 | gi | ***GitLab.org プロジェクト***: `https://gitlab.com/search?search=%s&group_id=9970&project_id=278964&scope=issues` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/search?search=%s&group_id=6543&project_id=7764&scope=issues` |
| gitlab-org グループを検索 | go | `https://gitlab.com/search?search=%s&group_id=9970` |
| gitlab-com グループを検索 | gc | `https://gitlab.com/search?search=%s&group_id=6543` |
| 特定のエピックに移動 | epic | ***GitLab.org グループ:*** `https://gitlab.com/groups/gitlab-org/-/epics/%s`<br><br> ***GitLab.com グループ:*** `https://gitlab.com/groups/gitlab-com/-/epics/%s` |
| 特定の Issue に移動 | issue | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/issues/%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/issues/%s` |
| 特定の MR に移動 | mr | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/merge_requests/%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/%s` |
| 作者で開いた Issue を検索 | iauthor | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` |
| 作者で開いた MR を検索 | mrauthor | ***GitLab.org プロジェクト***: `https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` <br><br> ***GitLab.com プロジェクト***: `https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?scope=all&utf8=%E2%9C%93&state=opened&author_username=%s` |
| Google Drive ファイルを検索 | dv | `https://drive.google.com/drive/search?q=%s` |
| Wikipedia を検索 | w | `https://en.wikipedia.org/w/index.php?search=%s` |

キーワード検索 URL には、検索クエリが入る場所を示す `%s` が URL 内に含まれています。

通常、次の方法でキーワード検索 URL に使用する URL を見つけられます:

1. Web サイトで `asdf` を検索する
1. 検索結果ページがロードされたら、アドレスバーの URL で `asdf` を確認する
1. URL に `asdf` が含まれている場合、これを `%s` に置き換えると、キーワード検索 URL に使える URL が得られる

## Firefox での追加検索エンジンを使った検索

キーワードを使うのではなく、アドレスバーで検索エンジンを選択して検索したい場合、以下のステップに従って Firefox にカスタム検索エンジンを追加して GitLab を検索できます。

| ステップ | 画像 |
|---|---|
| 1. [Add custom search engine 拡張機能](https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/) をインストール | |
| 2. インストールが完了したら、ツールバーのアドオンアイコンをクリックするか、アドオンマネージャーから「Preferences」をクリック | ![Add custom search engine 拡張機能](/images/tools-and-tips/1_add_search_engine_firefox.png) |
| 3. 以下を入力し `Add custom search engine` をクリック: <br> a. *Name* に `GitLab handbook` <br> b. *Search URL* に `https://handbook.gitlab.com/?search=%s` <br> c. *Icon* に `https://about.gitlab.com/ico/favicon.ico` | ![検索エンジンフォーム](/images/tools-and-tips/2_add_search_engine_firefox.png) |

これをテストするには、新しいタブに移動してアドレスバーにテキストを入力すると、提案リストの下部に新しい検索エンジンのアイコンが表示されます。

## Alfred を使った検索（MacOS）

[Alfred](https://www.alfredapp.com/) でキーワード検索を作成できます。
以下の各 URL をクリックすると Alfred に追加できます。

Alfred にキーワード検索を追加するためのリンク

* [gl](alfred://customsearch/gitlab%20handbook/gl/utf8/nospace/https%3A%2F%2Fhandbook.gitlab.com%2Fhandbook%2F%3Fsearch%3D%7Bquery%7D)
* [gd](alfred://customsearch/gitlab%20docs/gd/utf8/nospace/https%3A%2F%2Fdocs.gitlab.com%2Fsearch%2F%3Fq%3D%7Bquery%7D)
* [gg](alfred://customsearch/GitLab%20issues%20search/gg/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fsearch%3Fsearch%3D%7Bquery%7D%26project_id%3D%26group_id%3D6543%26scope%3Dissues)
* [mr](alfred://customsearch/MR%20Author%20GitLab/mr/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fdashboard%2Fmerge_requests%3Fscope%3Dall%26utf8%3D%25E2%259C%2593%26state%3Dopened%26author_username%3D%7Bquery%7D)
* [author](alfred://customsearch/GitLab%20Issues%20Author/author/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fdashboard%2Fissues%3Fscope%3Dall%26utf8%3D%25E2%259C%2593%26state%3Dopened%26author_username%3D%7Bquery%7D)
* [issue](alfred://customsearch/GitLab%20issue/issue/utf8/nospace/https%3A%2F%2Fgitlab.com%2Fgitlab-org%2Fgitlab%2Fissues%2F%7Bquery%7D)

GitLab favicon ![favicon](/images/ico/favicon-32x32.png) を Alfred カスタム検索にドラッグ＆ドロップしてファビコンを追加できます:
![Alfred favicon](/images/tools-and-tips/AF_add_icon.png)

GitLab チームメンバー [Simon M.](https://gitlab.com/simon_mansfield) は、Alfred と Firefox を使ってプロのように GitLab を検索するプロセスをウォークスルーする以下の動画を録画しました。

[GitLab チームメンバーがメンテナンスしているリポジトリ](https://gitlab.com/gitlab-org/alfred) にも、GitLab 関連のワークフローがあります。

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/tu7YHZAKKN8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

## Raycast での検索（MacOS）

[Raycast](https://www.raycast.com/) のクイックリンク機能を使って、Spotlight のような検索を実行できます。

1. Raycast のホットキーを押す（デフォルト: `option` + `space`）
1. ストアを開く（`store` と入力）
1. `GitLab Docs` をインストール
1. （オプション）ショートカットを設定
   1. `extensions` を検索
   1. Enter を押す
   1. `GitLab Docs` を見つける
   1. `Alias` または `Hotkey` を割り当てる

これで Raycast を使って検索できます:

1. Raycast のホットキーを押す
1. `GitLab Docs`、`GitLab Handbook`、`Pajamas` のいずれかを入力
1. Enter を押す
1. 検索クエリを入力
1. Enter を押す

選択したブラウザで検索が開きます。

![Raycast 検索の例](/images/tools-and-tips/raycast_docs_search.png)

## GitLab Unfiltered で録画されたイベントを検索する

[GitLab Unfiltered の YouTube チャンネル](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/featured) で録画されたイベントを検索するには、以下のステップに従います:

* [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/featured) を開く
* 上部バーの「検索」を示す虫眼鏡アイコンをクリックする。
* 録画を見つけたいイベント（例: AMA、Group Conversation、Product Kickoff Review、Key Reviews など）を入力する。
* 検索ページをスクロールして録画動画を見つける。
* 「[動画](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos)」タブもクリックできる。
* 「Date Added (newest)」または「Date Added (oldest)」でソートする。
* 必要な録画を見つける。
* 部署、チーム、トピックで整理された「[プレイリスト](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/playlists)」にグループ化された録画も検索できる。

## Git の履歴と Git blame を使って変更を検索する

{{< youtube "VsgToca4oCw" >}}

*上記の [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) 動画では、Darren M. が Git ファイル履歴と Git blame を使ってハンドブックの変更を追跡する簡単なチュートリアルをウォークスルーしています。*

GitLab のリポジトリで [Git ファイル履歴](https://docs.gitlab.com/ee/user/project/repository/files/git_history.html) と [Git blame](https://docs.gitlab.com/ee/user/project/repository/files/git_blame.html) を使って変更を検索できます。

Git ファイル履歴はファイルに関連付けられたコミット履歴の情報を提供し、blame はファイル内の各行の最終更新時刻、作者、コミットハッシュなどの詳細情報を提供します。

これは、「GitLab はいつ BlueJeans から Zoom に切り替えたのか？」のような質問に答えるのに役立ちます（答えは `2016-09-22` のこの [コミット](https://gitlab.com/gitlab-com/www-gitlab-com/commit/5ecfa0794f09337d9f2509f4583c34d56904e24c) にあり、用語を参照したオリジナルのハンドブック変更が見られます）。

検索を始めるべき場所の参照として、[`www-gitlab-com` リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com) は GitLab Web サイト／ハンドブックがホストされている場所で、GitLab ドキュメントは [こちら](https://gitlab.com/gitlab-org/gitlab-docs) で見つけられます。

## GitLab 検索バーを使って GitLab をナビゲートする

GitLab には、検索バーに入力すると異なるページへのオートコンプリートナビゲーションができるハードコードされたショートカットがいくつかあります。この検索バーを使ってプロジェクトとグループの間を移動することもできます。

GitLab チームメンバー [Dylan](https://gitlab.com/DylanGriffith) は、それがどう動くかを示す以下の動画を録画しました。

{{< youtube "OE9b0Qc6KaI" >}}
