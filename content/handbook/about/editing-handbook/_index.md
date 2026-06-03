---
title: "ハンドブックの編集"
description: "ヒントやトラブルシューティングを含む、ハンドブックの編集方法に関する情報。"
upstream_path: /handbook/about/editing-handbook/
upstream_sha: b4d6f155a3f220e28a2c8c0191c96e9a9be2f4ef
translated_at: "2026-06-03T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-03T15:16:43+02:00"
---

このページではハンドブックの編集方法に焦点を当てています。
ハンドブックをどのように、なぜ使うかについては[ハンドブックの使い方ページ](../handbook-usage.md)を、その他の参照には[docs ページ](https://handbook.gitlab.com/docs/)をご覧ください。

このページは、[GitLab における GitLab の使用](/handbook/people-group)を補完することを目的としています。

**ご自身の実用的なハンドブック編集のヒントをお持ちですか？以下に動画を投稿してください！**

> **ヒント** AI を活用してハンドブックをより速く編集しましょう。[Anthropic Claude](/handbook/tools-and-tips/ai/claude/) と [GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/) について学んでください。

## チームページに自分を追加する

チームページに自分を追加する方法については、[チームページに自分を追加するガイド](edit-team-page.md)を参照してください。

## マークダウンの書式設定

ハンドブックでマークダウンを書式設定する方法については、動画の埋め込み方法を含む[マークダウンスタイルガイド](https://handbook.gitlab.com/docs/markdown-guide)を参照してください。

## Web IDE を使ってハンドブックを編集する

ハンドブックを編集する典型的なワークフローは以下のとおりです。

1. [Web IDE を使って変更を加える](https://docs.gitlab.com/ee/user/project/web_ide/#use-the-web-ide)。
1. [変更をコミットする](https://docs.gitlab.com/ee/user/project/web_ide/#commit-changes)。
1. [マージリクエストを作成し](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)、[レビュアーをアサイン](/handbook/about/handbook-usage/#when-to-get-approval)します。
1. 提案があれば[適用](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/suggestions.html#apply-suggestions)するか、必要に応じてさらに変更を加えます。
1. 「自動マージに設定」するか、すべての提案が解決され、必要な承認を得たらマージします。

### 新規 MR を作成する Web IDE の手順

1. 編集したいハンドブックページに移動します。下部または右側にある `Edit this page` の URL をクリックして、新しい Web IDE を開きます。

1. [Web IDE](https://docs.gitlab.com/ee/user/project/web_ide/) に慣れましょう。
   - メニューセクションは左側にあります
   - エクスプローラーセクションはプロジェクトのファイルツリーを提供し、ハンドブックファイルを編集するときに自動的に開きます。（キーボードショートカット: `Shift+Cmd+E`）
   - 編集ビューは右側にあります。上部には、開いているファイルを整理するタブがあります。
   - 追加のメタ情報は下部にあります。Git ブランチ、問題、現在の行番号、インデント用のスペース、エンコーディング、行末シーケンス、言語モード、レイアウト、通知などです。
   - **ヒント:** メニューセクションや項目にカーソルを合わせると、その目的やキーボードショートカットについて詳しく知ることができます。

   ![Web IDE の概要、ファイルツリーでハンドブックページがハイライトされている](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_file_tree_edit_handbook_page.png)

1. 選択したファイルを編集し、Markdown プレビューを試します。macOS では `Cmd+Shift+P` で Web IDE のコマンドパレットを開いてコマンドを検索できます。たとえば、`Markdown` と入力し、`Markdown: Open Preview to the Side` を選択してプレビューを試してください。
   - [ハンドブックのマークダウンエンジン](https://handbook.gitlab.com/docs/markdown-guide/)は [VS Code ベースの Web IDE プレビュー](https://code.visualstudio.com/docs/languages/markdown)よりも多くのレンダリング機能をサポートしているため、一部のアイテムは適切にレンダリングされません。コミットして[ドラフトのマージリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/drafts.html)を作成し、ハンドブックの[レビューアプリ](#preview-changes-on-gitlab)でページをプレビューしてください（埋め込み画像の確認など）。

   ![Web IDE エディタ、Markdown プレビュー](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_console_markdown.png)

1. 右クリックして `Upload...` を選択し、画像などの新しいファイルをハンドブックのディレクトリ構造に従って `static/images/handbook/` および対応するファイルツリーにアップロードします。
   - マークダウンガイドの[画像セクション](https://handbook.gitlab.com/docs/markdown-guide/#images)に注意してください。

   ![Web IDE 概要、ファイルアップロード](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_file_upload_images.png)

1. 左メニューにある `Source Control` アイコンを開きます。これにはファイル変更数を示す色付きのマーカーが付いています。ヒント: キーボードショートカット `Ctrl+Shift+G`。

   ![Web IDE メニュー、ソースコントロール](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_menu_explorer_search_source_control.png)

1. 変更されたファイルを確認し、準備ができたら Git のコミットメッセージを指定します。メッセージは変更内容の簡潔な（120 文字未満）説明にしてください。
1. `Commit and push` ボタンの右側にある ⋁ をクリックし、`Create new branch and commit` オプションを選択します。キーボードショートカット: `Cmd+Enter`。

   ![Web IDE、コミットアンドプッシュ: コミットメッセージ](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_source_control_commit_message.png)

1. 新しい Git ブランチ名を指定します（任意）。`Enter` を押して続行します。このアクションで変更が Git リポジトリにプッシュされます。変更は GitLab サーバーに保存され、プロジェクトビューですぐに表示されます。

   ![Web IDE、コミットアンドプッシュ: ブランチ名](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_source_control_commit_new_branch_name.png)

1. 右下のポップアップを確認し、`Create Merge Request` をクリックして GitLab MR タブを開きます。ヒント: 下部の通知ベルアイコンを使用すると、誤って消した通知を再表示できます。

   ![Web IDE、コミットアンドプッシュ: マージリクエストを作成](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_source_control_popup_create_mr.png)

1. MR テンプレートを記入し、マージリクエストを作成する理由を提供し、ラベルを追加し（クイックアクション `/label ~handbook` の使用も可）、自分自身をアサインし（`/assign me`）、マージ時にブランチを削除するように設定します。任意で、準備ができるまでマージを防ぐために[ドラフトオプション](https://docs.gitlab.com/ee/user/project/merge_requests/drafts.html)を使用できます。

   ![GitLab マージリクエストビュー](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_gitlab_create_mr.png)

**ヒント**: ワークフローのキーボードショートカットを練習しましょう。変更後、`Control+Shift+G` でコミット、`Cmd+Enter`、カーソルでブランチを選択、`Enter` などです。

**注意:** Web IDE のファイルタブを閉じる `Cmd+w` キーボードショートカットは、Chrome ブラウザによってブラウザタブを閉じる動作に上書きされます。これは[既知の問題](https://gitlab.com/gitlab-org/gitlab/-/issues/386209)であり、このショートカットは慎重に使用してください。

### 既存の MR を編集する Web IDE の手順

既存のマージリクエスト（MR）を編集する場合、新しい MR を作成する場合との主な違いは 2 つあります。
エディタを開く場所と、コミット先です。

1. MR にさらに変更を加える: 右上のメニューから `Code > Open in Web IDE` を選択します。これで Web IDE が再度開いて変更を加えられます。すべての変更されたファイルが自動的に開きます。

   ![マージリクエスト、Web IDE で開く](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_gitlab_mr_open_in_web_ide.png)

1. 変更を加え（詳細は前のセクションを参照）、`Source Control` 領域に移動し、コミットメッセージを追加し、`Commit and push` ボタンをクリックします。新しいブランチを作成する場合、既存の MR を編集するのではなく、新しい MR が作成されます。

   ![Web IDE、コミットして MR 関連ブランチを選択](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_from_mr_changes_source_control_select_branch.png)

1. 任意: ポップアップ通知に従って MR に戻ります。あるいは、MR タブを閉じていなければエディタタブを閉じます。

   ![Web IDE、コミット＆プッシュ後に MR に戻る](/images/handbook/about/editing-handbook/practical_handbook_edits_web_ide_vs_code_from_mr_changes_popup_go_to_mr.png)

### 動画: Web IDE と単一ファイルエディタを使った編集

注意: 動画は古い `www-gitlab-com` プロジェクトを示しています。ただし、編集プロセスは同じです。

この動画では以下を扱います。

- マーケティングハンドブックを例とした編集
- Web IDE を使用した `Edit this page` アクション、概要のウォークスルー、ハンドブックの編集、および同じアクションでマージリクエストを再度作成します。
- このハンドブックで紹介されている実用的なハンドブック編集のヒント。

{{< youtube DJo4bQdawSo >}}

### 過去の動画

これらの動画では、専門家とともに GitLab ハンドブックを通読し、日々の業務でハンドブックを最適に活用する方法を発見し、ハンドブック編集のベストプラクティスを学びます。GitLab がどのように動作しているかを一般的に理解するのに役立つことを目的としていますが、**GitLab のエディタとリポジトリが変わったため、手順をそのまま実行することはできません**。

1. [新しいハンドブックページの作成とマルチメディア埋め込みのベストプラクティス](https://www.youtube.com/watch?v=hQgS97M8abc)
1. [ハンドブックページの場所を移動する方法](https://www.youtube.com/watch?v=aQl001ka3Y4)
1. [ページ名の変更とその後の更新](https://www.youtube.com/watch?v=HeQax_U74NM)
1. [mermaid 図の作成](https://www.youtube.com/watch?v=SQ9QmuTHuSI)
1. [Issue テンプレートの作成](https://www.youtube.com/watch?v=ObNWS3trqIY)
1. [ハンドブックへの画像追加とハンドブックアナリティクス](https://www.youtube.com/watch?v=P7Nv7bzksiY)
1. [新しいディレクトリとページをハンドブックに追加する方法](https://www.youtube.com/watch?v=9NcJG9Bv6sQ)
1. [main への修正マージ後にパイプラインの失敗を修正するためのリベース方法](https://www.youtube.com/watch?v=PeopYsoweGU)
1. [ハンドブックのパイプラインが失敗している理由](https://youtu.be/Qg0ICfs_Noo)
1. [パイプラインが失敗している理由を特定する方法](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A)

## ローカルでハンドブックを編集する

1. 以前にしていない場合は、GitLab で使用する [SSH キー](https://docs.gitlab.com/ee/user/ssh.html)を設定します。
1. [Git をセットアップ](https://docs.gitlab.com/ee/topics/git/commands.html)し、[公開ハンドブック](https://gitlab.com/gitlab-com/content-sites/handbook)などの適切なリポジトリをクローンします。
1. お好みのエディタを使用して変更を加えます。[Visual Studio Code](https://code.visualstudio.com/download) を任意で [VS Code 用 GitLab Workflow 拡張機能](https://docs.gitlab.com/ee/editor_extensions/visual_studio_code/)とともに使用する場合、[Web IDE 編集手順](#use-the-web-ide-to-edit-the-handbook)に従えます。
1. [変更を GitLab にプッシュ](https://docs.gitlab.com/ee/topics/git/commands.html#send-changes-to-gitlab)します。
1. マージリクエストを作成します。

追加の注意事項:

1. ハンドブックには [.gitkeep ファイル](https://stackoverflow.com/questions/7229885/what-are-the-differences-between-gitignore-and-gitkeep)は必要ありません。エディタでファイルを素早く開くのが難しくなります。追加せず、見つけたら削除してください。

ローカルでテストおよびプレビューするためにウェブサイトのローカル版をインストールしたい場合は、セットアップ方法の手順について[ハンドブック開発ページ](https://handbook.gitlab.com/docs/development/#run-the-handbook-locally-for-edits)を参照してください。

## GitLab で変更をプレビューする

変更をプレビューするには、レビューアプリをデプロイします。

1. マージリクエスト（MR）のパイプラインが完了するのを待ちます。
1. MR の「Pipelines」タブまたは「Overview」タブのパイプラインウィジェットで、`Stage:deploy` と `pages` ジョブが見つかるまで、異なるパイプラインステージを示す円をクリックします。
1. `pages` ジョブ名の横にある「再生」ボタンをクリックします。
1. _2 つの_ `pages` ジョブが完了したら、MR の「Overview」タブのパイプラインウィジェットで「View app」ボタンをクリックします。
1. 任意のページに移動し、左のナビゲーションツリーを使用してページに移動する必要がある場合があります。これには検索を使用しないでください。
   - URL を編集する方が好ましい場合は、レビューアプリは `.html` 拡張子を使用するため、ページが `content/handbook/path/to/page.md` の場合、URL は `review/app/public/handbook/path/to/path.html` になることに注意してください。

MR で変更があるたびにレビューアプリをデプロイする必要がある場合は、`~"deploy-review-app-always"` ラベルを追加すると、MR 作成時を含めて常にジョブをトリガーできます。

ハンドブックプロジェクトでレビューアプリがどのように設定されているかについての詳細情報は、[ハンドブックページのデプロイ](https://handbook.gitlab.com/docs/development/#gitlab-pages-deployment)を参照してください。

## ページの命名とフォルダ構造

サイトはページバンドル、セクション、リーフページの概念を使用しています。セクションには複数のリーフページを含めることができ、その場合はセクション用に `_index.md` が必要です。ページバンドルは画像のグループを伴う単一のページで、`index.md` にすることができます。

一般的に、ハンドブックの URL はその内容を説明するもので、できるだけクリーンで覚えやすいものにすべきです。

ディレクトリ（フォルダ）とページは、小文字 `a-z`、ハイフン `-`、アンダースコア `_` を使用してください。
Git と Hugo はファイルパスに任意の UTF-8 文字を使用できますが、その他の文字（スペースなど）を使用するとパイプラインで問題が発生する可能性があるため、許可されていません。

セクション:

```plain
section-dir/
|- _index.md
|- leaf-page1.md
|- leaf-page2.md
```

ページバンドル:

```plain
page-name/
|- index.md
|- image1.png
|- image2.png
```

ページバンドル付きセクション:

```plain
section-dir/
|- _index.md
|- leaf-page1.md
|- leaf-page2/
|  |- index.md
|  |- image.pmg
|- leaf-page3.md
```

### ページの移動、削除、名前変更

ページを削除、名前変更、または移動する場合、以下を行ってください。

1. ハンドブック **および** 内部ハンドブックの[既存のすべてのリンクを更新](practical-handbook-edits.md#find-and-replace-a-string-in-all-matching-files)します。
   - 注意: リンクを検索するときは、ページ名を使用してください。リンクはページ相対リンクを使用していることがあり、これはフルパスを使用していないことを意味します。
   - [docs](https://docs.gitlab.com) や [gitlab-com](https://gilab.com/gitlab-com) および [gitlab-org](https://gitlab.com/gitlab-org) のプロジェクトテンプレートなど、他の場所のハンドブックリンクの検索と更新も検討してください。
1. [リダイレクトを追加](https://handbook.gitlab.com/docs/development/#redirects)します。

## ページのメンテナーを編集する

ページの右側に「Maintainers」というリストがあります。

リストは関連リポジトリの `CODEOWNERS` ファイルから生成されます。たとえば、[ハンドブックリポジトリ](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/.gitlab/CODEOWNERS)などです。

- 特定のユーザーのみがリストされます。グループのメンバーはリストされません。
- リストは最も具体的なパスに基づいて生成されます。

  - ディレクトリに対してユーザーが指定され、そのディレクトリ内の特定のページに対してさらに指定されている場合、
    リストには特定のページに対するユーザーのみが含まれます。
  - 特定のユーザーがいない特定のページに対してグループまたはサブグループがリストされている場合、
    メンテナーのリストは空になります。

`.gitlab/CODEOWNERS` ファイルへの変更には承認が必要です。
適切な承認を得る方法については、ボットのコメントを確認してください。

## ショートコードからのコンテンツを編集する

コンテンツを編集しようとすると、[ショートコード](https://handbook.gitlab.com/docs/shortcodes/)とデータファイルを使用して「構築」されたコンテンツに遭遇することがあります。
ショートコードは `{{` `% performance-indicators "ux_department" %` `}}` のような形式です。

ショートコード内のコンテンツに遭遇し、編集したい場合:

1. [shortcodes フォルダ](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/layouts/shortcodes)でショートコードを探します。
   - 上記の例では、`performance-indicators` です。
1. ショートコードファイルの上部には、関連データファイルの場所に関するコメントがあるはずです。ファイルを表示するときは「Display source」を使用していることを確認してください。
   - たとえば、`https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators` で `ux_department` ファイルを探します。
   - コメントがない場合は、`#handbook` で投稿してヘルプを得て、それを追加するための MR を作成できます。
1. 既存のフォーマットに合わせるよう注意して[ファイルを編集](#use-the-web-ide-to-edit-the-handbook)します。

## チームメンバーのマージリクエストがコミュニティ貢献としてラベル付けされている

最近作成したマージリクエストがコミュニティ貢献としてラベル付けされた場合、チームメンバーディレクトリの自分の個人エントリの GitLab ユーザー名を、業務で使用している GitLab アカウントと一致するように更新することで、今後この誤ったラベル付けの問題を修正できます。

[チームページ編集手順](edit-team-page.md)を使用してチームページのエントリファイルを見つけ、`gitlab` 属性（通常は 10 行目にあります）を業務で使用している GitLab.com ユーザー名と**完全一致**させて更新します。

## トラブルシューティング

### 編集アクションでの 404 エラー

ブラウザでハンドブックページの右上にある `Edit this page` をクリックすると、GitLab Web IDE で `404` エラーが発生することがあります。

チームメンバーとしては、この問題は GitLab.com プロファイルの SAML セッションの期限切れに関連している可能性があります。問題を緩和して解決するには、`View page source` をクリックして Okta での SAML 認証を再度トリガーします。

あるいは、GitLab.com プロファイルの [To-Do リスト](https://gitlab.com/dashboard/todos)に移動するか、機密 Issue を開いて認証をトリガーしてみてください。

ブラウザに関連している場合もあります。キャッシュをクリアし、シークレットウィンドウを開く（macOS では: `cmd shift n`）、または別のブラウザを使ってテストしてください。

### 新規ページでの 404

マージリクエストの一部として新規ページが作成されたが、ページがサイトに表示されない場合は、ファイル名を確認してください。

最も一般的な問題は、他のページがあるフォルダで `_index.md` ではなく `index.md` を使用していることです。
他のページは表示されません。

詳細については、[ページとフォルダ構造の命名](#naming-pages-and-folder-structure)を参照してください。

### 画像が正しく読み込まれない

新しい画像を追加してレビューアプリで正しく読み込まれない場合は、
[マークダウンガイドの画像セクション](https://handbook.gitlab.com/docs/markdown-guide/#images)を確認してください。

### パイプラインの失敗

パイプラインが失敗する理由を確認するには、主に 2 つの場所を見ます。

1. マージリクエストへのボットによる最新コメント。すべてのリンターエラーのリストが含まれているはずです。ただし、ビルドエラーはコメントを生成しません。
1. 失敗した個別のジョブ。MR > 「Pipelines」タブ > 任意の赤い円を選択 > 失敗したジョブを選択します。エラーメッセージはジョブログの下部近くにあり、`Error` で始まります。

ジョブログのエラーメッセージは通常、以下を提供します。

1. エラー
1. エラーが発生したファイル
1. 行番号
1. 文字番号（行のどの位置か）

例: `Error: error building site: assemble: "/builds/gitlab-com/content-sites/handbook/content/handbook/security/security-assurance/field-security/trust_center_guide.md:1:2": closing tag for shortcode 'details' does not match start tag`

- ファイル: `content/handbook/security/security-assurance/field-security/trust_center_guide.md`
- 行: 1
- 文字: 2

マークダウンエラーを修正するには、メッセージを確認してください。あるいは、[マークダウンスタイルガイド](https://handbook.gitlab.com/docs/markdown-guide/)の関連セクションを確認してください。

その他のすべてのエラーについては、エラーメッセージが修正に必要な情報を提供するはずです。

特定の種類の問題を解決する方法の詳細については、以下のセクションを参照してください。

問題が `main` ブランチで発生した場合、[リベース](https://docs.gitlab.com/ee/user/project/quick_actions.html#issues-merge-requests-and-epics)が必要になることがあります。

不明な場合は、[ヘルプを求める](#need-help)ことができます。

#### リンクとアンカーのエラー

ハンドブック全体のリンクとアンカーを検証するリンター（Hugolint）があります。変更によって _新たに_ リンクが壊れた場合、パイプラインジョブは失敗します。エラーのリストの探し方については、[前のパイプラインの失敗セクション](#failing-pipelines)の手順に従ってください。

失敗する主な理由は 2 つあります。

1. MR で追加されたコンテンツに壊れたリンクが含まれている。
1. MR で変更されたコンテンツが既存のリンクを壊している。

ジョブログで見たときの `hugolint` ジョブのエラーメッセージの失敗例を以下に示します。

```plain
Newly broken (only in "linkcheck.json", 3 issues):
❌ [content/handbook/security/product-security/_index.md:43]: <major> Link destination "architecture/" does not exist
❌ [content/handbook/security/product-security/security-architecture/_index.md:269]: <major> Link destination "/handbook/business-technology/tech-stack/#panther" does not exist
❌ [content/handbook/security/product-security/security-architecture/zero-trust.md:45]: <major> Link destination "/handbook/security/corporate/systems/#laptop-or-desktop-system-configuration" does not exist
```

1. エラーは、壊れたリンクが含まれているファイルから始まり、行番号が続きます。
   （たとえば、ファイルパス - `content/handbook/security/product-security/_index.md`、行番号: 43。）
1. 次に、エラーはどのリンクが壊れているかを示します。（たとえば、`architecture/` が壊れたリンク先です。）
1. 壊れたまたは存在しないアンカーリンク（たとえば、`#panther`）の場合:
   1. MR でリンク先となっている見出しを変更しましたか？その場合、新しい見出しに合わせてリンクされたアンカーを更新する必要があります。
   1. 見出しにリンクしている場合、それは存在しますか？ウェブサイトではなくリポジトリのファイルを確認してください。リンクはビルド前にチェックされるため、生成されたコンテンツ（ショートコードやインクルードからのもの）はリンクチェッカーには「存在しない」のです。
      - リンク先のページに大量の生成コンテンツがある場合（パフォーマンス指標ページなど）、関連する設定ファイルで [`hugolint` の除外を追加](https://gitlab.com/gitlab-com/content-sites/handbook-tools/hugolint/#configuration)できます。

#### コミュニティ貢献

プライベートフォークからのハンドブックへのコミュニティ貢献のパイプラインは失敗します。
コントリビューターはパブリックフォーク、または可能であれば[コミュニティフォーク](https://gitlab.com/gitlab-community/meta#gitlab-community-forks)を使用すべきです。

### デフォルトブランチエラーの修正

MR パイプラインは、関連リポジトリにマージされる前にほぼすべてのエラーをキャッチするはずです。
ハンドブックプロジェクトは `www-gitlab-com` の `yml` ファイルからもデータを引き出しています。

デフォルトブランチ `main`（公開および内部ハンドブック）または `master`（`www-gitlab-com`）が「壊れて」全員のパイプラインが失敗している場合、根本的な問題はおそらくデータファイルのエラーです。

1. エラーメッセージを確認します。
1. サイトのビルド、または何かをレンダリングする際のエラーが言及されている場合、トレースをたどります。
1. レイアウトファイルで、`site.Data.public.` で始まるものの表示で失敗している場合、それはデータファイルの問題です。
1. 修正する方法は 2 つあります。どちらか:
   1. 遭遇する可能性のある値の種類に対処できるよう、コード自体をより堅牢にします。
      ただし、それを素早く実行できるほど Go と Hugo を熟知している人は多くありません。
      必要に応じて、パイプラインの問題を修正した後、ハンドブックリポジトリに「Handbook::Operations」「type::bug」Issue を作成して問題を文書化します。
   1. ビルドが失敗しない値を持つようにデータファイルを編集します。

#### 例: tech writing ショートコードでの壊れた main の修正

この[エラーの例](https://gitlab.com/gitlab-com/content-sites/handbook/-/jobs/5968799321#L123)を考えてみましょう。

```plain
Error: error building site: failed to render shortcode: "/builds/gitlab-com/content-sites/handbook/content/handbook/product/ux/technical-writing/_index.md:126:1": failed to render shortcode "tech-writing": failed to process shortcode: "/builds/gitlab-com/content-sites/handbook/layouts/shortcodes/tech-writing.html:16:28": execute of template failed: template: shortcodes/tech-writing.html:16:28: executing "shortcodes/tech-writing.html" at <ref page (printf "/handbook/product/categories#%s-section" $section)>: error calling ref: parse "/handbook/product/categories#%!s(<nil>)-section": invalid URL escape "%!s"
```

エラートレースをたどると、フルパスと行番号を伴う最後のエラーは次のとおりであることに気付きます。
`failed to process shortcode: "/builds/gitlab-com/content-sites/handbook/layouts/shortcodes/tech-writing.html:16:28"`。

[`tech-writing` ショートコード](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/114d8f9bf00342360be14dce8cf6e55e1d8a6edd/layouts/shortcodes/tech-writing.html#L16)を見ると、
問題は `printf "/handbook/product/categories#%s-section" $section` の中の予期しない値であり、
これはエラーメッセージの最後の部分と一致します。

そこから、[`tech-writing` ショートコードの 11 行目](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/114d8f9bf00342360be14dce8cf6e55e1d8a6edd/layouts/shortcodes/tech-writing.html#L11)を見ると、
データは `site.Data.public.stages.stages "section"` から来ていることがわかります。

サイトのローカルビルドがある場合、`data/public` フォルダにすべてのデータファイルが見つかります。
関連ファイル（通常は `yml` ファイル）の上部には、原本の場所が記載されているはずです。

ローカルビルドがない場合でも、[www-gitlab-com data フォルダ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data)で見つけられる可能性があります。

コードに基づいて、ファイル名を理解できます。`site.Data.public.stages.stages` は、それが
`data/public` 内にあり、ファイルは `stages.yml` であることを意味します。

最後の部分 `.stages "section"` は、それが `stages:` の中にあり、各 `section:` 行からデータを引き出していることを意味します。

ファイルへの最近の変更を確認したり、`main` が失敗し始めたときと比較したりできます。

この場合、[空の `section:` 行](https://gitlab.com/gitlab-com/www-gitlab-com/-/commit/17a5406b9a8fd33756cd5e0c4a2343ea2b4ab7a7)が問題でした。

迅速で簡単な修正は、空の `section:` 行にテキストを追加し、マージし、公開ハンドブックプロジェクトで新しいパイプラインを実行することです。

この場合、[ハンドブックのコードがより堅牢になりました](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/2820/diffs)。

### Prettier がマークダウンファイルをフォーマットしている

VS Code で `prettier` をセットアップしていて、`.md` ファイルが意図せずフォーマットされている場合は、ユーザー設定で `"editor.defaultFormatter": "esbenp.prettier-vscode"` のように Prettier をデフォルトフォーマッタとして設定しているかを確認してください。

加えて、拡張機能の設定で [Glob パターン](https://code.visualstudio.com/api/references/vscode-api#GlobPattern)を使用して、自動的にプリティファイするファイルを指定することを検討してください。

## 追加のヒント

ファイル内の文字列の置換方法など、追加のヒントについては、[実用的なハンドブック編集の例](practical-handbook-edits.md)を参照してください。

## ヘルプが必要ですか？

GitLab ハンドブックの編集でトラブルが発生した場合、ヘルプを利用できます。

[MR Buddies](/handbook/people-group/general-onboarding/mr-buddies/) と呼ばれるチームメンバーが、マージリクエストの作成や GitLab ハンドブックの更新中に発生する可能性のある問題のデバッグを支援します。一般的な質問のいくつかは、[MR Buddies プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrCVFOwSGW6M3k16yLtPO1M)の動画でカバーされています。リンク付きでリクエストを [`#mr-buddies`](https://gitlab.slack.com/archives/CLM8K5LF4/p1678812429884979) Slack チャンネルに投稿してください。

ハンドブックに関する一般的な質問については、[handbook Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C81PT2ALD)に投稿してください。

より深刻な問題、特に時間的に緊急なものや重要な情報へのアクセスを妨げるものについては、問題の解決を支援できるチームメンバーに連絡するための[エスカレーションプロセス](../escalation.md#when-to-escalate-an-issue)があります。
