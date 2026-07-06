---
title: "GitLab で学ぶ Git の基礎 - ハンズオンラボ: ローカルで Git を使う"
description: "このハンズオンガイドでは、Git コマンドを使ってリモートリポジトリとローカルリポジトリの両方を操作する方法を順を追って説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/gitbasicshandsonlab2/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: 2026-06-29T08:59:00-04:00
translated_at: "2026-07-06T08:30:42+09:00"
translator: codex
stale: false
---

> 完了までの推定時間: 45 分

## 目標 {#objectives}

このラボでは、ローカルコンピューター上のリポジトリを使う練習を行い、次の概念について学びます。

- リポジトリのクローン
- ブランチの作成、使用、マージ
- ファイルの編集とコミット
- リモートリポジトリへの変更のプッシュおよびリモートリポジトリからの変更のプル。

いずれのラボでも、コピー＆ペーストするよう求められたコードについては、その内容を理解する時間を取ってください。不明なコードがあれば、インストラクターに説明を求めてください。

> このラボで使用する Git コマンドの多くは、GitLab の便利な [git チートシート](/pdfs/press/git-cheat-sheet.pdf)にまとめられています。このラボでは、ローカルコンピューターからインターネットへの SSH アクセスができる必要があります。お使いのマシンに必要な権限があることを確認してください。

## タスク A. Git がローカルにインストールされていることを確認する {#task-a-verify-that-git-is-installed-locally}

1. コンピューターでターミナルを開き、次のコマンドを入力します。

   ```bash
   git version
   ```

1. バージョン番号が出力されれば、Git はインストールされています。コマンドがエラーになる場合は、Git のインストールに関する[ドキュメント](https://docs.gitlab.com/ee/topics/git/how_to_install_git/)を参照してください。

## タスク B. SSH キーを生成する {#task-b-generate-an-ssh-key}

> GitLab は Git との安全な通信に SSH プロトコルを使用します。SSH キーを使って GitLab のリモートサーバーに認証すると、毎回ユーザー名とパスワードを入力する必要がなくなります。詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/ssh.html)を参照してください。

### セキュリティ推奨事項: SSH キーの生成に 1Password を使用する {#security-recommendation-use-1password-for-ssh-key-generation}

SSH キーはディスクに保存するのではなく、1Password を使って生成・保存することをおすすめします。この方法のほうが秘密鍵をより安全に保護できます。詳しい手順は [1Password での SSH キー生成ガイド](https://docs.gitlab.com/user/ssh_advanced/#generate-an-ssh-key-pair-with-1password)に従ってください。

### 代替方法: SSH キーをローカルで生成する {#alternative-generate-ssh-key-locally}

ローカルで SSH キーを生成したい場合は、次の手順に従ってください。

1. ここでは OpenSSH クライアントを使用します。これは GNU/Linux、macOS、Windows 10 にプリインストールされています。現在のバージョンを確認するには、ターミナルまたは PowerShell で次のコマンドを実行します。

   ```bash
   ssh -V
   ```

2. ターミナルまたは PowerShell で次のコマンドを実行して、公開鍵と秘密鍵のペアを作成します。

   ```bash
   ssh-keygen -t ed25519
   ```

3. 最初のプロンプトでは、SSH キーを保存する場所を尋ねられます。コマンドがキーを保存する場所を控えておいてください。デフォルトのパスは `~/.ssh` です。**Enter** キーを押すと、デフォルトのキーの保存場所と名前が使用されます。

   > 必要に応じて、この手順でカスタムのファイルパスとキー名を指定することもできます。

4. 2 番目のプロンプトでは、キーファイルのパスワードを設定するよう求められます。**Enter** キーを押すと、ローカルのキーファイルに空のパスフレーズを使用します。

   > 手順をシンプルにするため、ここではキーファイルにパスワードを設定しないことにします。空のパスフレーズは一般的にベストプラクティスとは見なされません。必要であればパスフレーズを設定してかまいません。

> **セキュリティ警告:** SSH キーをディスクに保存することにはセキュリティリスクがあります。秘密鍵は保護し、決して共有しないでください。本番環境では、1Password などの安全なキー管理ソリューションの利用を検討してください。

## タスク C. SSH キーを GitLab プロフィールに追加する {#task-c-add-an-ssh-key-to-your-gitlab-profile}

1. ブラウザで、Lab 1 で作成したプロジェクトを開きます。

1. 左上隅のユーザーアバターをクリックします。

1. ドロップダウンメニューから **Edit profile** をクリックします。

1. 左側のナビゲーションペインで **SSH Keys** をクリックします。

1. 既存のターミナルウィンドウを開きます。次のように `cd ~/.ssh` を使って SSH キーを保存したディレクトリに移動し、`ls` コマンドでそのディレクトリ内のすべてのファイルを一覧表示します。

   ```bash
   cd ~/.ssh
   ls
   ```

   Windows の場合:

   ```bash
   cd ~\.ssh
   ```

   > デフォルトでは、キーは `~/.ssh` ディレクトリに保存されます。別のディレクトリにキーを保存した場合は、代わりにそのディレクトリへ `cd` する必要があります。

1. 2 つのキーファイル、すなわち公開鍵（例: `id_ed25519.pub`）と秘密鍵（例: `id_ed25519`）が表示されるはずです。公開鍵は `.pub` で終わり、GitLab と共有する必要があるのはこちらです。

   > **セキュリティ警告:** 秘密鍵は決して共有したり、ウェブサイトのフォームフィールドに貼り付けたりしてはいけません。共有してよいのは公開鍵のみです。

1. 次のコマンドを使って、公開鍵の内容を表示します。

   ```bash
   cat id_ed25519.pub
   ```

   > 別のファイル名を使用した場合、コマンドは `cat <filename>.pub` になります。

1. 画面に表示されたファイルの内容をクリップボードにコピーします。

1. ウェブブラウザの GitLab Web UI で、**Add new key** ボタンをクリックします。

1. **Key** フィールドに公開鍵の内容を貼り付けます。

1. **Title** フィールドに任意のタイトル（例: お使いのコンピューターのホスト名）を入力し、**Add key** をクリックします。

   > **ヒント:** キーがどこで使われているかを簡単に識別できるよう、ほかに好みの命名規則がない場合は、コンピューターのホスト名や説明（例: `alextanuki-m2-mac`）を使うとよいでしょう。

1. **Usage type** では、**Authentication & Signing** が選択されていることを確認します。

   > この使用タイプでは、キーを GitLab への認証だけでなく、コミットの署名にも使用できます。署名付きコミットについて詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/project/repository/signed_commits/ssh.html)を参照してください。

1. **Expiration date** はデフォルトの日付のままにします。

   > キーには有効期限を設定し、定期的にローテーションするのが理想的です。キーの有効期限として推奨される値は、お使いのセキュリティ要件によって異なります。

1. **Add key** ボタンをクリックします。

1. ターミナルで、次のコマンドを実行して接続をテストします。

   インスタンスの URL に `gitlab-learn-labs/*` が含まれる場合は次を実行します。

   ```bash
   ssh -T git@gitlab.com
   ```

   インスタンスの URL に `ilt.gitlabtraining.cloud` が含まれる場合は次を実行します。

   ```bash
   ssh -T git@ilt.gitlabtraining.cloud
   ```

コマンドがエラーではなくウェルカムメッセージで完了すれば、SSH キーは正しく設定されています。

> 接続が拒否された旨のエラーが表示される、またはコマンドが動作しない場合は、ネットワークが SSH 経由の接続をブロックしている可能性があります。その場合は、次のタスクに進んでください。

## タスク D. GitLab のプロジェクトリポジトリをローカルコンピューターにクローンする {#task-d-clone-a-gitlab-project-repository-to-your-local-computer}

> リポジトリをクローンすると、リモートリポジトリのファイルがコンピューターにダウンロードされ、接続が作成されます。詳しくは[ドキュメント](https://docs.gitlab.com/ee/topics/git/commands.html#clone-a-repository)を参照してください。

1. Lab 1 で作成した `Top Level` プロジェクトに戻ります。

1. 左サイドバーで **Code > Repository** をクリックします。

1. プロジェクトリポジトリの右側で **Code** ボタンをクリックします。**Clone with SSH** の下にある URL をクリップボードにコピーします。

1. ターミナルまたは PowerShell ウィンドウで、ホームディレクトリに `training` という名前の新しいディレクトリを作成し、次のコマンドでそこへ移動します。

   ```bash
   mkdir ~/training
   cd ~/training
   ```

   Windows の場合:

   ```cmd
   mkdir ~\training
   cd ~\training
   ```

1. **Clone with SSH** からコピーしたコマンドを使って、`git clone` コマンドを実行します。

   ```bash
   git clone <Clone with SSH Command>
   ```

> 接続がタイムアウトした、または拒否された旨のエラーが表示される場合は、ファイアウォールによってネットワークがポート 22 の接続をブロックしている可能性があります。その場合は、Task D の手順を繰り返しますが、**Code** ボタンで **Clone with SSH** の代わりに **Clone with HTTPS** の選択肢を使ってください。

Mac でクローンしたプロジェクトをマシン上で見つけるには、ホームディレクトリに移動する必要があるかもしれません。Finder から Go > Go to Folder > マシンのユーザー名で検索すると、ホームディレクトリを開けます。あるいは Finder で **Option** キー（Alt）を押しながら、左下に表示されるメニューからマシンのユーザー名を選択します。

1. `cd` コマンドで、たった今クローンしたリポジトリに移動します。このディレクトリ内のすべてのファイルが Git で追跡され、このラボで実行する Git コマンドはすべてこのディレクトリから実行する必要があります。

   ```bash
   cd top-level-project
   ```

1. `ls -a` コマンドで、ピリオドで始まる隠しファイルや隠しディレクトリも含めて、ディレクトリの内容を表示します。

   ```bash
   ls -a
   ```

   > `.git` ディレクトリが存在することに注目してください。`.git` ディレクトリには、プロジェクトのメタデータとオブジェクトデータベースが格納されています。

1. 次のコマンドを実行して、リポジトリのステータスを確認します。

   ```bash
   git status
   ```

   > 出力に `nothing to commit, working tree clean` と表示されます。これは、このディレクトリ内のファイルが、Git に保存されているこれらのファイルのバージョンと同じ内容であることを意味します。

## タスク E. ブランチで作業する {#task-e-work-on-a-branch}

> ブランチはプロジェクトのワーキングツリーのバージョンです。新しいプロジェクトを作成すると、GitLab はリポジトリに `main`（旧称 `master`）という名前のデフォルトブランチを作成します。これは削除できません。デフォルトブランチの設定は、プロジェクト、サブグループ、グループ、またはインスタンスのレベルで構成できます。詳しくは[ドキュメント](https://docs.gitlab.com/ee/user/project/repository/branches/)を参照してください。

1. コンピューター上に **temporary_branch** という名前の新しいブランチを作成します。

   ```bash
   git branch temporary_branch
   ```

2. たった今作成したブランチに切り替えます。

   ```bash
   git checkout temporary_branch
   ```

3. リポジトリ内のすべてのブランチを一覧表示します。

   ```bash
   git branch -a
   ```

   > ブランチ一覧を終了するには、キーボードの `q`（quit の意）を押します。

4. 赤色のブランチはリモートサーバー上にあり、これはリポジトリが保存されている GitLab インスタンスです。

5. アスタリスクは、現在いるブランチを示します。

## タスク F. ファイルを編集する {#task-f-edit-a-file}

1. 任意のテキストエディター（Visual Studio Code、Sublime Text、メモ帳、vi など）を使って、`README.md` の末尾に次の行を追加し、ファイルを保存します。

   ```text
   a line added to temporary_branch locally
   ```

1. Git がファイルの変更を検知したか確認します。

   ```bash
   git status
   ```

   > 出力には `README` ファイルが赤色で表示され、ステータスは `modified` になっています。赤色の文字は、`README` ファイルがまだ Git のステージングエリアに追加されていないことを示します。

## タスク G. 編集したファイルを Git のステージングエリアに追加する {#task-g-add-the-edited-file-to-gits-staging-area}

1. `git add` コマンドを使って、ファイルをステージングエリアに追加します。コマンドが成功すると、何も出力されません。

   ```bash
   git add README.md
   ```

   > `git add` はファイルシステム上の `README.md` を移動するわけではありませんが、Git の「ステージングエリア」に追加します。

1. `README.md` がコミットできる状態になっている（つまり、正常にステージングされた）ことを確認します。

   ```bash
   git status
   ```

これで、`README` ファイルが緑色の文字で表示されます。これは、変更が Git のステージングエリアで追跡されるようになったことを示します。

## タスク H. 編集をコミットする {#task-h-commit-the-edit}

1. 下記の `git commit` コマンドを使って、ステージングしたファイルをコミットします。コミットごとに、内容を説明したコミットメッセージを付けることが重要です。

   ```bash
   git commit -m "Add a line to README.md"
   ```

   これで、必要に応じて後から参照できるファイルのスナップショットを作成しました。

1. ステージングエリアが再び空になっていることを確認します。

   ```bash
   git status
   ```

## タスク I. GitLab インスタンスに変更をプッシュする {#task-i-push-your-changes-to-the-gitlab-instance}

1. GitLab サーバー上のリモート Git リポジトリに **temporary_branch** という名前の新しいブランチを作成し、`git push` コマンドを使って変更をそのブランチにプッシュします。

   ```bash
   git push -u origin temporary_branch
   ```

   > 変更をリモートサーバーにプッシュする正確なコマンドが分からない場合は、`git push` と入力すると、Git がコピー＆ペーストできる正しいコマンドをエラーメッセージで出力してくれます。

## タスク J. ファイルを再度編集・コミット・プッシュする {#task-j-edit-commit-and-push-the-file-again}

1. ローカルマシンのテキストエディター（GitLab のブラウザ内エディターではありません）で、ローカルにある `README.md` のコピーの末尾に次の新しい行を追加し、ファイルを保存します。

   ```a second line in README.md```

1. ターミナルで、`git add` コマンドを使って、編集したファイルを Git のステージングエリアに移動します。

   ```bash
   git add README.md
   ```

1. `git commit` コマンドを使って、ステージングしたファイルをコミットします。内容を説明したコミットメッセージを付けるか、下記の例を自由に使ってください。

   ```bash
   git commit -m "Modify README.md"
   ```

1. `git log` コマンドを使って、たった今行ったコミットの内容を確認します。

   ```bash
   git log
   ```

   > `git log` の出力画面を終了するには `q` を押します。

1. `git push` コマンドを入力して、コミットを GitLab インスタンス上のリモートリポジトリにプッシュします。

   ```bash
   git push
   ```

   > アップストリームブランチ（つまり、ローカルマシンのブランチと同じ名前で、リモートリポジトリにすでに存在するブランチ）に変更をコミットするには、最初にコミットを GitLab インスタンスにプッシュしたときに使った長いコマンドの代わりに、単に `git push` を実行すればよいです。システムがアップストリームブランチを設定する必要があるのは 1 回だけです。

1. GitLab Web UI でプロジェクトに移動します。

1. プロジェクトのメインページに移動したら、**Code > Branches** に移動します。

1. **temporary_branch** をクリックしてそのブランチに切り替えます。ローカルブランチで `README.md` に加えた変更が、リモートリポジトリにプッシュされたことを確認します。

   > 適用されたすべての変更を確認するには、**History** ボタンをクリックします。これにより、ブランチに適用されたすべてのコミットが表示されます。

## タスク K. リモートブランチを編集する

> ここでは、組織内の別の誰かが、GitLab インスタンス上のリモートリポジトリにある **temporary_branch** に変更を加える状況をシミュレートします。このセクションが終わると、**temporary_branch** のリモート版とローカル版が異なる状態になります。つまり、そのブランチのコードが（言わば）知らないうちに変わっているということです。次のセクションでは、この差異をどう解消するかを見ていきます。

1. GitLab で、**Top Level Project** のランディングページに移動します。まだ **temporary_branch** にいない場合は、左側のナビゲーションペインで **Code > Branches > temporary_branch** をクリックします。

1. これで **temporary_branch** のファイルを見ています。**README.md** をクリックして内容を表示します。

1. ファイルを編集するため、右上隅の **Edit > Edit single file** をクリックします。

1. ファイルの末尾に新しい行を追加します。

   ```text
   a third line added on the remote copy of temporary_branch
   ```

1. ページの右上にある **Commit Changes** ボタンをクリックします。

1. 適切なコミットメッセージを入力します。

1. ターゲットブランチを **temporary_branch** に設定します。

1. **Commit changes** ボタンをクリックします。

このコミットを行った後、GitLab インスタンス上のリモートリポジトリは、ローカルリポジトリより 1 コミット *進んだ* 状態になります。

## タスク L. リモート **temporary_branch** への変更に関するメタデータを取得する

> ローカルの **temporary_branch** は、GitLab インスタンス上のリモートの **temporary_branch** と同期が取れていません。`git fetch` コマンドは、ローカルブランチの内容を更新することなく、リモートブランチの最新の状態を取得します。言い換えると、ローカルブランチがリモートブランチより何コミット遅れているかを教えてくれますが、ローカルブランチのファイルには何の変更も加えません。

1. `git fetch` コマンドを使って、リポジトリのリモートコピー上のブランチに関するメタデータを取得します。

   ```bash
   git fetch
   ```

1. リポジトリのリモートコピーにあってローカルコピーにないコミット、あるいはその逆のコミットが何件あるかを確認します。

   ```bash
   git status
   ```

`git status` の出力で、ブランチが 1 コミット遅れていることが分かります。

## タスク M. リモートリポジトリからプルする

> リモートの **temporary_branch** からの変更をマージして、ローカルの **temporary_branch** のコピーの内容を更新する必要があります。

1. ターミナルで、`git pull` コマンドを使って、リモートのコピーをローカルのコピーにマージします。

   ```bash
   git pull
   ```

1. `cat README.md` コマンドを入力して、更新されたファイルの内容を確認します。GitLab Web IDE で追加した 3 行目が表示されるはずです。

   ```bash
   cat README.md
   ```

## タスク N. 変更を main ブランチにマージする

> ローカルの **temporary_branch** がリモートの **temporary_branch** と同一になったので、これをローカルの **main** ブランチにマージできます。これにより、**main** にある安定したコードベースに編集内容が追加されます。

1. `git branch` と入力して、現在作業しているブランチを確認します。

   ```bash
   git branch
   ```

1. ターミナルで `git checkout` コマンドを使って、**main** ブランチに切り替えます。

   ```bash
   git checkout main
   ```

1. `git merge temporary_branch` と入力して、ローカルの **temporary_branch** のすべての変更（この場合は変更された `README.md` だけ）を、ローカルの **main** ブランチに取り込みます。

   ```bash
   git merge temporary_branch
   ```

## タスク O. リモートリポジトリを更新する

1. `git status` と入力して、ステージングまたはコミットが必要な編集済みファイルがないこと、および **main** ブランチにいることを確認します。

   ```bash
   git status
   ```

1. `git push` と入力して、ローカルコピーの変更で **main** ブランチのリモートコピーを更新します。

   ```bash
   git push
   ```

1. ブラウザで GitLab のページに戻り、プロジェクトの **main** ブランチで `README.md` を表示して、たった今 **main** のリモートコピーにプッシュした変更を確認します。

## ラボガイド完了

このラボの演習は完了です。[このコースのほかのラボガイド](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson)を見ることができます。
