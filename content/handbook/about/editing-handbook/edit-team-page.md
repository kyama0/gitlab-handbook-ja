---
title: "チームページのエントリを編集する"
description: "チームページに自分を追加し、編集する方法に関する手順。"
upstream_path: /handbook/about/editing-handbook/edit-team-page/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T04:45:05Z"
translator: claude
stale: false
lastmod: "2026-03-04T12:15:15-08:00"
---

このページでは、特にチームページに自分を追加する方法、ペットページにペットを追加する方法、関連するエントリを編集する方法について説明しています。

ハンドブックについては、[ハンドブック編集ページ](/handbook/about/editing-handbook/)を参照してください。

## チームページに自分を追加する

[当社のウェブサイト](https://about.gitlab.com/company/team/)および[ハンドブック内](/handbook/company/team/)にあるチームページにあなたを掲載できることを、私たちはとても嬉しく思います！[同期処理](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854)により、GitLab に入社して 3 日目にあなたの基本エントリが追加されます。このエントリをパーソナライズし、より多くの情報を追加することをお勧めします。更新が正しく反映されない場合は、Workday の設定が正しいか確認してください。両方のチームページで同じファイルが参照されていますが、表示されるフィールドの一部は異なります。利用可能なすべてのフィールドは、[チームメンバーデータスキーマ](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/team_members/person/README.md)に文書化されています。

チームページのエントリ用に Workday の設定を更新する方法のヘルプについては、[こちらのドキュメント](https://docs.google.com/document/d/16_G0jQEjV3f08rGZ65g6RHTCSX5IfFalo9ZUdLEqH1s/edit?tab=t.0)を確認してください。

必要であれば、`#mr-buddies` Slack チャンネルなど、社内の誰にでもヘルプを求めてください。ウェブサイトを更新する**3 つの**方法があります：

1. [Web IDE を使って GitLab.com で情報を追加する](#method-1-add-your-info-on-gitlabcom-using-web-ide)（推奨）
1. [Web インターフェースを使って GitLab.com で情報を追加する](#method-2-add-your-info-on-gitlabcom-using-the-web-interface)
1. [ローカルの Git クローンを使って情報を追加する（ターミナルと IDE を使用）](#method-3-add-your-info-using-a-local-git-clone-using-the-terminal-and-an-ide)

最も使いやすそうな方法を以下から選んで、次の情報を手元に用意してください：

- オンボーディングを支援してくれている People Operations チームメンバーの名前。
<a name="picture-requirements"></a>
- チームページ用のあなたの写真
  > **写真の要件**
  >
  > - 完璧な正方形に画像をクロップしてください。
  > - 最大寸法は 400 x 400 ピクセルです。
  > - JPEG (`.jpg`) または PNG (`.png`) 形式を使用してください。
  > - ファイルサイズは 100k 未満に保ってください。[tinyjpg.com](https://tinyjpg.com/) などを使って圧縮してください。
  > - カラーと白黒で画像をテストしてください（カラー版を追加します）。
  > - ファイル名は `yournameinlowercase` に適切なファイル拡張子を付けてください。
- 経歴と興味についてのストーリー。（他のチームメンバーのプロフィールを例として参照してください。）
- 個人の LinkedIn / Twitter / GitLab のハンドルを追加してください。これらのハンドルを追加するときは、リンクや先頭の `@` を含めず、ユーザー名のみを記載してください（例：`LinkedIn: username`）。（誤った例：`LinkedIn: linkedin.com/in/username`、`LinkedIn: @username`。）
- あなたの役割への相対リンク。リンクが `https://handbook.gitlab.com/job-description-library/engineering/support-engineer/` であれば、`/job-description-library/engineering/support-engineer/` を使用してください。他のエントリを参考にしてください。


{{% alert title="Note" color="primary" %}}
以下に記載されている `Export Name/Location to Team Page?` のオプトイン設定の詳細については、[「How to: Set Team Page Export Preferences」 Google Docs](https://drive.google.com/drive/search?q=how+to+Set+Team+Page+Export+Preferences)（社内）を検索してください。
{{% /alert %}}


### 方法 1：Web IDE を使って GitLab.com で情報を追加する

1. [ハンドブックバージョンのチームページ](/handbook/company/team/)に行き、自分を見つけます。
   - 注意：Workday で `Export Name/Location to Team Page?` に `No` を選択した場合、名前ではなく職種で自分を見つける必要があります。この場合、`name` などの一部の変更は同期処理によって上書きされます。
1. 自分の名前（または職種）の上のアバターをクリックします。モーダルが開きます。
1. そのモーダルの下部にある `Edit this page` ボタンをクリックします。
1. ウェブエディタが開き、あなたのチームページエントリが表示されます。
1. 詳細を更新します：
   - 必要に応じて `name` を `FirstName LastName` または `PreferredName LastName` に更新してください
   - `locality` は空のままにしてください
   - `country` は `Remote` に設定してください
   - `role` を確認してください
   - 役職タイトルが間違っているか入力されていない場合は、`job_families.yml` に移動し、`command-F`（macOS）または `ctrl-F`（nix）を使用して職種を検索してください。Web IDE では `command-P`（macOS）または `ctrl-P`（nix）でファイルを検索できます。
   - 役割に職種説明へのリンクがあるかを確認します。ない場合はリンクを追加してください。たとえば、`<a href="">Solutions Architect</a>` を `<a href="/job-description-library/sales/solutions-architect/">Solutions Architect</a>` に変更します。
   - `reports_to` がチームページエントリの `slug` 値を使ってマネージャーをリストしているか確認してください。拡張子なしのファイル名がスラッグでもあり、つまり `aname.yml` のスラッグは `aname` になります。
   - あなたがマネージャーの場合、直属の部下の `reports_to` があなたの `slug` を参照しているか確認してください。
   - 現在借入リクエスト中の場合、`borrow` を追加し、以下のように `to` と `end_date` キーを設定してください：

     ```yaml
     borrow:
       to: ramya-authappan
       end_date: 2023-09-15
     ```

   - 現在の業務優先事項を `work_priorities` フィールドに配列として設定します。例：

     ```yaml
     work_priorities:
       - Product Analytics
       - ModelOps
     ```

   - プロフィール写真のファイル名を追加し、大文字小文字も一致させてください。`../gitlab-logo-extra-whitespace.png` がある場合は削除してください。完成した行は以下のようになります：`picture: yournameinlowercase.jpg`。
   - 代名詞を追加してください。
   - 他の人があなたの名前を正しく発音できるよう、フルネームの `pronunciation` を追加することを検討してください（例：Sid Sijbrandij の場合は `Sid See-brandy`）。
   - Twitter および GitLab のハンドルを先頭の `@` なしで追加してください。
   - Mastodon アカウントを `mastodon.instance/@username` の形式で追加してください。基本的に、`https://` を除いたプロフィールリンクです。
   - `departments` のリストが正確であることを確認してください。他のチームメンバーを参考にしてください。
   - [`specialty`](/handbook/company/structure/#specialist) を追加してください。
   - [`expertise`](/handbook/company/structure/#expert) を追加してください。これは HTML としてフォーマットする必要があります。配列は正しく表示されません。
   - 自分自身の `story` を追加してください。他のチームメンバーのストーリーを参考にしてください。
   - リモートワークがあなたの[人生を意味のある形で変えた](/handbook/company/culture/all-remote/)場合、他のチームメンバーのリモートストーリーを[参考](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/uploads/8161ceac4523a9f36244f9533960ccbd/remote-story-example.png)にして、独自の `remote_story` を追加することを検討してください。
   - 入力されているが正しくないデータを更新してください。

     **重要:** ページのフォーマットが崩れないように、`tab` 文字を使用せず、行間のスペースを保持してください。参照されるファイル名/拡張子は大文字小文字を区別し、見つからないファイルはパイプラインの失敗を引き起こします。ファイルは空の改行で終わる必要があり、そうでないとパイプラインの失敗を引き起こします。
1. 画像をアップロードするには、[写真の要件](#picture-requirements)に従って準備されていることを確認してください。
   1. `sites/uncategorized/source/images/team/` のパスを使って `team` フォルダを見つけます。これを行うには、まず（デフォルトで）左側のファイルツリーで、`person` フォルダ内のファイルにいることに気付く必要があります。これは `team_members` フォルダ内、さらに `data` フォルダ内です。フォルダ名の左の ⋁ をクリックすることでフォルダを閉じられます。`data` フォルダを閉じると、6 つ下のフォルダに `sites` フォルダが表示されます。`>` をクリックして `sites` を開き、次に `uncategorized`、`source`、`images`、最後に `team` を開きます。
   1. `team` フォルダを右クリックし、`Upload` を選択します。
   1. アップロードする画像を選択し、`Open` をクリックします。
   1. 画像のファイル名が以前に更新したチームページファイルと異なる場合、チームページエントリに戻る必要があります。`sites` フォルダを閉じて `data`、その後 `team members`、`person`、ファイルを含むフォルダを開くか、上部のバーにあるファイルタブに気付き、それをクリックしてそのファイルに移動します。
   1. 前の手順を行った場合、`picture` フィールドをファイル名に更新します。`picture:` の後にある `../gitlab` などで始まる内容を削除してください。画像ファイルの大文字小文字を一致させてください。完成した行は、たとえば `picture: yournameinlowercase.jpg` のようになります。
1. 完了したら、左の `Source Control` アイコンをクリックします。中に数字が入った小さな円があるはずです。詳細は [Web IDE を使ったハンドブックの編集](/handbook/about/editing-handbook/#use-the-web-ide-to-edit-the-handbook) のポイント 5 を参照してください。
1. `Commit and push` ボタンの上のボックスに変更点の簡単な説明を追加します。例の説明は `Update details to my team page entry` のようになります。
1. `Commit and push` ボタンの右側にある ⋁ をクリックします。
1. `Create new branch and commit` オプションを選択します。
1. その後、`Create a new branch name and commit` フィールドに移動します。`yourinitials-add-YOURNAME-to-team-page-date` などの形式でブランチ名を入力します。例：`plh-add-paulalilyherbert-to-team-page-feb06`、そして `Return/Enter` を押します。
1. 右下のポップアップを探し、`Create MR` をクリックします。このメッセージが消えた場合、右下の通知ベルアイコンをクリックすると、メッセージが再表示されます。
1. `Create a new merge request` ページに到達したら、`Description` ボックスの `Why is this change being made?` 見出しの下に、変更内容と理由を説明します。この特定の MR では、`Adding my information and picture to the team page as part of onboarding tasks.` のようなものを入力できます。この MR では、説明テキストの他の部分を変更する必要はありません。
1. 下にスクロールして、`Create merge request` をクリックします。
1. 説明内の Author Checklist を確認し、該当するすべてのタスクをチェックしてください。
1. People Operations オンボーディングチームメンバーとマネージャーを Reviewer として追加してください。右側にレビュアー用のセクションがあり、リストを編集して名前またはユーザー名で検索することで追加できます。
1. レビューが完了し変更要求がない場合、レビュアーが MR を承認しマージするはずです。

### 方法 2：「Web インターフェース」を使って GitLab.com で情報を追加する

1. [GitLab.com / www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com/) プロジェクトに移動します。
1. 画面上部近くの赤い線の下にある `+` をクリックします。
1. `New branch` をクリックします。
1. `Branch name` には、*your initials-team-page-update-yourdepartment-the date* のような一意の名前を付けます（一時的なものなので、正確な名前についてあまり心配する必要はありません）。`Create branch` をクリックします。例：`hk-team-page-update-custsupport-feb06`
1. 画像を追加することから始めます。左側の `Repository` をクリックします。
1. ファイルブラウザで、`sites/uncategorized/source/images/team` に移動します。
1. ページ上部の `+` をクリックし、`Upload file` を選択して写真をアップロードします。[写真の要件](#picture-requirements)を必ず守ってください。コミットメッセージを *Add YourFirstName YourLastName to team page* の形式で追加します。ターゲットブランチが先ほど作成したものであることを確認します。`Start a new merge request with these changes` トグルをオフにします。`Upload file` をクリックします。
1. 次に、経歴情報を編集します。チームページに表示されるすべての経歴情報はデータファイルから取得されます。`data/team_members/persondata/FIRST_LETTER_OF_YOUR_FIRST_NAME/SLUG_REPLACE.yml` に移動します（あなたの名前またはスラッグを指定するファイルを探しています）。
1. 関連する `yourslug.yml` ファイルに移動します。画面右上の `Edit` をクリックし、`Edit single file` を選択します。
1. フィールドのリストとその記入方法については、上記の[方法 1：Web IDE を使って GitLab.com で情報を追加する](#method-1-add-your-info-on-gitlabcom-using-web-ide)のポイント 5 を参照してください。
1. 情報を追加した後、コミットメッセージを追加し、`Commit Changes` をクリックします。「create a new merge request」オプションがチェックされている場合、マージリクエスト（MR）が作成されます。
1. 次に `Create merge request` ボタンをクリックして、作成したブランチで [GitLab.com](https://gitlab.com/gitlab-com/www-gitlab-com) で[マージリクエストを作成](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)します。
1. `Create a new merge request` ページに到達したら、`Description` ボックスの `Why is this change being made?` 見出しの下に、変更内容と理由を説明します。この特定の MR では、`Adding my information and picture to the team page as part of onboarding tasks.` のようなものを入力できます。この MR では、説明テキストの他の部分を変更する必要はありません。
1. `Create merge request` をクリックします。
1. 新しいページの右上で、`Reviewer` の横の `edit` をクリックします。このマージリクエストのレビュアーとして、People Operations オンボーディングチームメンバーとマネージャーを設定します。

### 方法 3：ローカルの Git クローンを使って情報を追加する（ターミナルと IDE を使用）

*注意：* この方法は、大規模なリポジトリの `git clone` が必要なため、他の方法より時間がかかる場合があります。

1. [Git の使い始めドキュメント](https://docs.gitlab.com/ee/topics/git/how_to_install_git/)に従って、Git をダウンロードします。
1. 手順に従って [SSH キー](https://docs.gitlab.com/ee/user/ssh.html)を作成して追加します。
1. [コマンドラインコマンドのドキュメント](https://docs.gitlab.com/ee/topics/git/commands.html#git-clone)に従って、ターミナル経由で [www-gitlab-com プロジェクト](https://gitlab.com/gitlab-com/www-gitlab-com)をクローンします。
1. 行う変更のために[新しいブランチを作成してチェックアウト](https://docs.gitlab.com/ee/topics/git/branch.html)します。
1. `sites/uncategorized/source/images/team/` ディレクトリに写真を追加します。[写真の要件](#picture-requirements)を必ず守ってください。
1. お好みのエディタで `data/team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/SLUG_REPLACE.yml` を開き、特に自分の名前またはスラッグのファイルを探します。
1. フィールドのリストとその記入方法については、上記の[方法 1：Web IDE を使って GitLab.com で情報を追加する](#method-1-add-your-info-on-gitlabcom-using-web-ide)のポイント 5 を参照してください。
1. 編集した `data/team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/` のファイルに変更を保存します。
1. オプションで、ローカルで変更を確認するには：
   1. 加えた変更をチームページに反映するファイルにコンパイルするために、コマンドを手動で実行します：

      ```bash
      cd <WWW-GITLAB-COM REPO ROOT>
      bundle exec rake build:team_yml
      ```

   1. `uncategorized` サイトで middleman 開発サーバーを起動します：

      ```bash
      cd sites/uncategorized
      NO_CONTRACTS=true bundle exec middleman
      ```

   1. チームページを開いて、`http://localhost:4567/company/team` で自分の名前を検索します。
      *注意：* ローカル環境でハンドブックを検索すると本番の結果が得られるため、変更を確認するには URL を使ってチームページに直接移動してください。
1. 準備ができたら、コメント *Add details for FirstName LastName to team page* で[変更をステージングしコミット](https://docs.gitlab.com/ee/topics/git/commit.html)します。
1. [ブランチをプッシュ](https://docs.gitlab.com/ee/topics/git/commit.html#send-changes-to-gitlab)します。
1. 作成したブランチで [GitLab.com](https://gitlab.com/gitlab-com/www-gitlab-com) で[マージリクエストを作成](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)し、マネージャーをレビュアーとしてアサインします。

## 変更を確認する

MR を作成し、パイプラインが通過したら：

1. MR の「Overview」タブのパイプラインウィジェットで「View app」ボタンを探します。これがレビューアプリのリンクを提供します。`company/team/` をその末尾に追加してください。
   - たとえば、レビューアプリのドメイン `https://your-branch.about.gitlab-review.app/` を使い、`company/team/` を追加して `https://your-branch.about.gitlab-review.app/company/team/` を形成してチームページの変更をプレビューします。
1. 変更を加えた場合、プレビューを見る前に最新のパイプラインが通過していることを確認してください。そうでないと、最新の変更は反映されません。

## ペットをチームペットページに追加する

[上記の手順](#add-yourself-to-the-team-page)で学んだことを使って、ペットを[チームペットページ](https://about.gitlab.com/company/team-pets/)に追加することを検討してください。

主な違いは、物事の名前と場所です。

1. 写真は同じ[写真の要件](#picture-requirements)で `petname.jpg` または `petname.png` にしてください。
1. 写真を `sites/uncategorized/source/images/team/pets` にアップロードしてください。
1. ペットの情報は `data/pets.yml` ファイルの末尾に追加してください。
1. コミットメッセージは `Adding my dog Gary to the Team Pets Page` のようなものになります。
1. マネージャーをレビュアーとしてアサインしてください。
   - マネージャーを追加した後、そのアバターに警告の黄色い三角形のシンボルがある場合、承認はできますがマージはできません。マネージャーが承認した後、`#mr-buddies` Slack チャンネルに投稿してマージしてもらうようリクエストしてください。
