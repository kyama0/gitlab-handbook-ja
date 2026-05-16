---
title: "RStudio ガイド"
description: "RStudio ガイド"
upstream_path: "/handbook/enterprise-data/platform/rstudio/"
upstream_sha: "d638a3d5418a620365f135648ea547e0992abbf1"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

---

## R とは何か？

[Python](https://www.python.org/) と同様に、[R](https://cran.r-project.org/) はデータのクリーニングと分析に使用されるオープンソースの統計ソフトウェアです。データサイエンスコミュニティで広く使われており、統計学者やデータサイエンティストにとって統計モデリングを容易にする多くのパッケージがあります。R を学ぶ価値がある理由については、[このブログ記事](https://www.dataquest.io/blog/three-mighty-good-reasons-to-learn-r-for-data-science/)が素晴らしい説明を提供しており、読む価値があります。

R をダウンロードするには、[CRAN（Comprehensive R Archive Network）のウェブサイト](https://cran.r-project.org/)に移動し、システム用の R バージョンをダウンロードしてください。

`R-4.2.2.pkg` に似たファイルをダウンロードしてください。R をマシンにダウンロードしたら、プロンプトに従って（デフォルトを受け入れるのが最善）ソフトウェアをインストールしてください。

## RStudio とは何か？

RStudio は R の統合開発環境（IDE）で、オープンソース版と商用版の両方で利用可能です。RStudio は[Posit](https://posit.co/)によって開発されています。Posit はデータサイエンス、科学研究、テクニカルコミュニケーション向けのオープンソースソフトウェアを作成する会社です。多くの R リソースとパッケージ開発にも責任を持っています。詳細については Posit ウェブサイトのリソースページをご覧ください。以下は RStudio からのいくつかの役立つリソースです。

- [書籍](https://resources.rstudio.com/resources/books/)
- [Tidyverse ブログ](https://www.tidyverse.org/blog/)
- [Posit ブログ](https://posit.co/blog/)
- [RMarkdown ドキュメント](https://rmarkdown.rstudio.com/)
- [R と Tidyverse へのモダンなダイブ](https://moderndive.netlify.app/index.html) - この本は R と RStudio の違いを説明し、RStudio の使い方に慣れるのに初心者にとって非常に役立ちます

**RStudio をダウンロードする前に**、まず R をダウンロードする必要があります。*マシンに R をダウンロードしていないと RStudio は動作しません*。

**RStudio をダウンロードする**には、Posit ウェブサイトに移動し、*Products > RStudio IDE > （クリック）Download RStudio > Download RStudio Desktop* を通じてナビゲートしてください。

または[こちら](https://posit.co/download/rstudio-desktop/)に移動してウェブサイトの手順に従ってください。

**注意** *このページ全体で R と RStudio は同義に使用される場合があります。*

## Snowflake ドライバーのダウンロードと設定（MacOS）

RStudio はモデルの本番開発やアドホック分析のためにさまざまなデータベースに接続できます。Snowflake に接続したい場合は、以下の手順を実行してください。

1. まず、[homebrew](https://brew.sh/) を使用して unixODBC をインストールする必要があります。まだマシンに homebrew をインストールしていない場合は、ウェブサイトにインストールコマンドが記載されています。homebrew がインストールされたら、unixODBC を以下のコマンドでインストールできます: `brew install unixodbc`
   - 代替として iODBC を使用できますが、このドキュメントでは選択したドライバーマネージャーとして unixODBC を使用しています。

1. これにより、2つの設定ファイル **odbcinst.ini** と **odbc.ini** が作成されます。
   - **odbcinst.ini** は ODBC ドライバーの情報を保持します。
   - **odbc.ini** はホスト、ユーザー名などのデータベースへの接続に必要な情報を保持します。ここでシステムの DSN を設定します。
   - これらの設定ファイルの場所を確認するには、コマンド `odbcinst -j` を実行してください。

1. Snowflake の最新ドライバーを[こちら](https://sfc-repo.snowflakecomputing.com/odbc/mac64/index.html)からダウンロードしてください。その後、[これらの指示](https://docs.snowflake.com/developer-guide/odbc/odbc-mac)に従ってマシン上でドライバーの設定を完了してください。
   - 設定ファイルには、ロール、データベース、ウェアハウス、ユーザー名など、任意のパラメーターを入力できます。ただし、RStudio でも指定できます。設定ファイルにこれらの詳細を設定する場合は、Snowflake で使用するデータベース/スキーマごとに DSN を設定する必要があるかもしれません。
   - 以下は、ユーザーファイルの場所にある **odbc.ini** と **odbcinst.ini** ファイルの設定例です。

**odbcinst.ini**（上記の `odbcinst -j` コマンドの出力に基づくファイルの場所）

```text
[Snowflake]
Driver      = /opt/snowflake/snowflakeodbc/lib/universal/libSnowflake.dylib
```

**odbc.ini**（上記の `odbcinst -j` コマンドの出力に基づくファイルの場所）

```text
[ODBC Data Sources]
SnowflakeDSII = Snowflake

[SnowflakeDSII]
Server = gitlab.snowflakecomputing.com
Port =
UID =
Schema =
Warehouse =
Driver = /opt/snowflake/snowflakeodbc/lib/universal/libSnowflake.dylib
Description = Snowflake DSII
Locale = en-US
Tracing = 0
Authenticator = gitlab.okta.com
```

[このビデオ](https://www.youtube.com/watch?v=d0AkKsQsIZ0&list=PLy4OcwImJzBIX77cmNYiXIJ3tBhpNSUKI&index=5)は、ODBC 経由で Snowflake にツール（Excel を使用）を接続する基本的な手順を示しています。

## RStudio で Snowflake に接続する

次のステップは、設定したドライバー設定を使用して RStudio を Snowflake に接続することです。これは、R の `DBI`、`tidyverse`、`odbc` パッケージを使用することで実現できます。RStudio でデータベースに接続する方法の概要については、[このウェブサイト](https://solutions.posit.co/connections/db/)を参照してください。

以下は、R で Snowflake に接続するためのコード例です。

```json
con <- DBI::dbConnect(odbc::odbc(),
  driver = "Snowflake",
  uid = rstudioapi::askForPassword("Database UserID"),
  role = [your user role],
  warehouse = [warehouse you wish to connect to],
  pwd = rstudioapi::askForPassword("Database password"),
  Authenticator = "externalbrowser",
  database = [database you wish to connect to],
  schema = [schema you wish to connect to],
  server = "gitlab.snowflakecomputing.com"
)
```

上記のコードに関する詳細:

1. [**DBI**](https://dbi.r-dbi.org/) は R をさまざまなデータベースに接続するのに役立つパッケージです。上記では、`dbConnect()` 関数を使用してデータベースパラメーターを渡しています。
1. `odbc::odbc()` は、この接続に ODBC ドライバーを使用することを関数に伝えます。
1. `rstudioapi::askForPassword("")` 関数は、UID や PWD がスクリプトに保存されないようにユーザーに入力を求めます。
1. `driver = "Snowflake"` は、上記で設定した odbcinst.ini ファイルに固有です。これは使用するドライバーを指定します。（注意：接続に問題がある場合は、R でドライバーの実際のパスに構文を変更してみてください。例: `driver = "/opt/snowflake/snowflakeodbc/lib/universal/libSnowflake.dylib"`）
1. `server = "gitlab.snowflakecomputing.com` はアクセスする Snowflake インスタンスに固有です。

### Okta 認証

Okta などの認証は Snowflake への接続によく使用されるため、上記の指示で**`Authenticator`**を何度か参照しています。最初は **odbc.ini** ファイルで、GitLab で使用される認証（Okta）を指定しています。次に `DBI::dbConnect()` で使用されるパラメーターで `Authenticator = "externalbrowser"` という行で参照されます。

`"externalbrowser"` は、Snowflake にログインするために設定ファイルで指定された URL を参照するよう `dbConnect()` に伝えます。`rstudioapi::askForPassword()` プロンプト中に入力するパスワードは、ユーザーの Okta パスワードである必要があります。

上記の手順を完了してコードを実行しようとすると、ログインを完了するためのウェブページに移動します。R のコンソールには、ウェブページに移動する前に以下のテキストが表示されます。

`Initiating login request with your identity provider. A browser window should have opened for you to complete the login. If you can't see it, check existing browser windows, or your OS settings. Press CTRL+C to abort and try again...`

**注意:** ID が確認されて Snowflake に接続されたことが示されるまで、ウェブページに留まる必要があります。

## .Rprofile で R を管理する

RStudio での特定のセッションのスタートアッププロセスをカスタマイズするために **.Rprofile** ファイルを設定することをお勧めします。他のユーザーとのコードの共有も簡略化できます。起動時に R と RStudio は .Rprofile ファイルを探して実行し、R セッションの動作（オプションや環境変数の設定など）を制御するために使用できます。

.Rprofile ファイルはユーザーレベルまたはプロジェクトレベルのいずれかにすることができます。ユーザーレベルの .Rprofile ファイルはユーザーのホームディレクトリのベースにあり、プロジェクトレベルの .Rprofile ファイルはプロジェクトディレクトリのベースにあります。R は 1 つの .Rprofile ファイルのみをソースします。そのため、プロジェクト固有の .Rprofile ファイルと使用したいユーザーの .Rprofile ファイルの両方がある場合は、プロジェクトレベルの .Rprofile の先頭で `source("~/.Rprofile")` を使用してユーザーレベルの .Rprofile を明示的にソースしてください。

.Rprofile ファイルを編集する簡単な方法の1つは、R セッション内から `usethis::edit_r_profile()` 関数を使用することです。ユーザーレベルまたはプロジェクトレベルの .Rprofile のどちらを編集するかを指定できます。

以下の例に従って、Snowflake のユーザー名、ロール、ドライバーを自動的に設定する新しい .Rprofile ファイルを設定してください。他のユーザーが同じテンプレートに従えば、あなたの R コードを使用して Snowflake（または他のデータベース）テーブルにアクセスする際にこの情報を更新する必要がなくなります:

- まず、パッケージをインストールして `usethis` パッケージの `edit_r_profile()` 関数を実行して空の .Rprofile ドキュメントを作成します

```r
install.packages("usethis")
library(usethis)
usethis::edit_r_profile()
```

- 別のタブで開く .Rprofile ファイルに必要な情報を入力します:

```r
.First <- function() cat("Welcome to R!")
.Last <- function()  cat("Goodbye!")

uid = "CSMITH@GITLAB.COM"
role = "CSMITH"
driver = "/opt/snowflake/snowflakeodbc/lib/universal/libSnowflake.dylib"
styler::tidyverse_style()

message("*** Successfully loaded .Rprofile ***")
```

- .Rprofile ファイルを保存してください。動作確認のために、R の画面上部で **Session** >> **Restart R** に移動してください
- R が再起動すると、コンソールにメッセージが表示されます。上記の例では `*** Successfully loaded .Rprofile ***
Welcome to R!` と表示されます
- 環境に `uid`、`role`、`driver` 変数も表示されます。これらの変数は、データベース（GitLab では Snowflake）への接続や、必要と判断した他の変数に使用されます。

## dbplyr

[**dbplyr**](https://dbplyr.tidyverse.org/) パッケージは tidyverse 言語を使用してデータベースと対話するために使用できます。すでに [tidyverse](https://dbplyr.tidyverse.org/) に慣れている場合は、このパッケージが特に役立つでしょう。

## RStudio で Git を使用する方法

このドキュメントは RStudio バージョン 2022.07.1 を使用して作成されました。

### 目標

1. Git のセットアップとインストール
2. RStudio で Git をセットアップ
3. GitLab から既存のプロジェクトをクローン
4. トラブルシューティング

### パート 1: インストールとセットアップ

- [R](https://cloud.r-project.org/) をダウンロードしてインストールする（まだインストールしていない場合）。
- [RStudio Desktop](https://posit.co/products/open-source/rstudio/) をダウンロードしてインストールする（まだインストールしていない場合）。
- [Homebrew](https://brew.sh/) をインストールする（まだインストールしていない場合）。
- Git をインストールする
  - Homebrew がインストールされたら、ターミナルを開く（Mac では Command+Space Bar で検索バーを開き、「Terminal」を検索）
  - ターミナルでコマンド `brew install git` を実行する
  - 代替として、Git は[こちら](https://git-scm.com/downloads)からダウンロードできます。この方法を使用する場合は、インストール先のパスをメモしておいてください。
- クローンしたいプロジェクトへの GitLab アカウントとアクセスも必要です

### パート 2: RStudio で Git をセットアップする

- RStudio を開き、**Tools** > **Global Options** > **Git/SVN** に移動する
- **Enable version control interface for RStudio project**（RStudio プロジェクトのバージョン管理インターフェースを有効にする）のチェックボックスをオンにする
- インストールした Git 実行ファイルへのパスを設定する。
  - Git がどこにインストールされているかわからない場合は、ターミナルを開いてコマンド `which git` を入力して **return** キーを押す
  - パスは `/usr/bin/git` のようなものになるはずです。（注意：Finder でナビゲートする場合、`Command` + `Shift` + `.` を押すと隠しファイルを表示できます）
- [SSH キーペアの生成](https://docs.gitlab.com/ee/user/ssh.html)セクションの指示に従って SSH キーを作成する。
  - ED25519 を推奨
  - 完了したら、**SSH RSA Key** フィールドにプライベートキーのパスを追加する
  - ![Git-SVN](/images/enterprise-data/platform/rstudio/Git1.png)
- RStudio で **GitLab ユーザー名** と **GitLab メール** を設定して Git を構成する
  - Git プロンプトを開くには **Tools** > **Shell** に移動し、以下を入力する:
    - `git config --global user.name 'yourGitHubUsername'`
    - `git config --global user.email 'name@provider.com'`
- RStudio を再起動する

### パート 3: Git を使用した RStudio プロジェクトを作成する

- リモートの Git リポジトリを元に新しいプロジェクトを作成するには:
  - **File** > **New Project** > **Version Control** を選択する
  - ![Git-Project](/images/enterprise-data/platform/rstudio/Git2.png)
  - **Git** を選択し、リポジトリ URL を入力する:
    - ![Git-Repo](/images/enterprise-data/platform/rstudio/Git3.png)
    - クローンしたい GitLab プロジェクトにアクセスする
    - 右上の **Clone** ドロップダウンボタンを選択する
    - **Clone with HTTPS** の URL をコピーする
    - ![Git-Clone](/images/enterprise-data/platform/rstudio/Git5.png)
    - このリンクを RStudio の **Repository URL** セクションに貼り付ける
    - **Create New Project** を選択する
- GitLab プロジェクトが R Studio に表示されるはずです
- ウォークスルー手順の[ソース](https://microsite.geo.uzh.ch/reproducible_research/post/rr-rstudio-git/)

### パート 4: トラブルシューティング

- エラー:

  ```console
  Cloning into 'repo-name'
  gitlab.com: Permission denied (publickey).
  fatal: Could not read from remote repository.

  Please make sure you have the correct access rights and repository exists.
  ```

  - 解決策: これは特定バージョンの RStudio での既知の問題で、解決に向けて取り組んでいます。[古いバージョン](https://dailies.rstudio.com/version/2022.02.4+500.pro1/)を再インストールすると解決する場合があります（[ソース](https://forum.posit.co/t/git-authentication-error-in-rstudio/145686/2)）。

## R Studio からの更新で GitLab プロジェクトを更新する方法

- ローカルで行った変更を GitLab プロジェクトにアップロードする前に、R の **Git** セクションから **Pull with Rebase** を選択して最新のブランチで作業していることを確認してください（**main** ブランチからリベースしていることを確認してください）
  - ![Pull](/images/enterprise-data/platform/rstudio/Pull.png)
- 変更が完了してアップロードの準備ができたら、新しいブランチアイコンを選択してブランチに名前を付けてください（スペースは使用できません）。**Create** を選択してください
  - ![Push](/images/enterprise-data/platform/rstudio/Push.png)
- R で開く **Review Changes** ウィンドウで、画面左側の変更が **Staged** にチェックされており、画面右側にコミットメッセージが入力されていることを確認してください。
- **Commit** を選択する
- GitLab で、更新を行ったプロジェクトに移動してください。作成が必要なマージリクエストが表示され、R で行った変更が含まれているはずです。関連するレビュアーと承認者を選択して変更をマージしてください。

## RStudio と Google スプレッドシートを接続する方法

Google スプレッドシートと R は、R の `googlesheets4` と `googledrive` パッケージを通じて対話できます。

1. Google App 認証のセットアップ
2. パッケージのインストール
3. 既存の Google スプレッドシートの読み取り
4. Google スプレッドシートへの書き込み

### パート 1: Google App 認証のセットアップ

1. [ハンドブック](/handbook/security/corporate/systems/google/apps/)の手順に従って、Google Cloud プロジェクトに自分自身を追加してください。
2. 自分専用のアクセスを設定するために、[これ](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/877)のような Issue を提出してください
3. アクセスが設定されたら、以下のコードを使用して RStudio でのアクセスの設定と構成を進めることができます。

```r
library(googlesheets4)
library(googledrive)
## googlesheets4 Test
google_app <- httr::oauth_app(
    "R",
    key = "[KEY].apps.googleusercontent.com",
    secret = "[SECRET]"
)

google_key <- "[GOOGLE_KEY]"

# googlesheets4::gs4_auth_configure(app = google_app,
#                                   api_key = google_key)

googlesheets4::gs4_auth_configure(client = gargle::gargle_oauth_client_from_json("~/Google Drive/Shared drives/People Analytics/Google API in R/googlesheets_api_sm.json"),
                                  api_key = google_key)

googlesheets4::gs4_auth()

## Test Read
googlesheets4::read_sheet(ss = "https://docs.google.com/spreadsheets/d/1Oe7AduRIKO7Zqh60v51Zn-WnTJYpcMDho_394urBmpA",
                          sheet = "stop_words") |>
    View()


## googledrive Test

googledrive::drive_auth()

googledrive::drive_mv(file = "[SHEET_NAME]",
         path = as_id("[PATH]"),
         overwrite = TRUE)

```

### パート 2: インストール

- R で以下のコードを実行して、RStudio に必要なパッケージをインストールします

```r
pkg <- c("googlesheets4", "googledrive")
invisible(lapply(pkg, function(x) if (x %in% rownames(installed.packages())==F) install.packages(x)))
invisible(lapply(pkg, library, character.only = TRUE))
rm(pkg)
```

### パート 3: 既存の Google スプレッドシートを読み取る

- `read_sheet()` 関数を使用すると、既存のスプレッドシートを読み取ることができます
  - 表示したいスプレッドシートの URL を指定して R で `read_sheet()` コマンドを実行してください
  - URL の例: `googlesheets4::read_sheet("https://docs.google.com/spreadsheets/...")` <br>
- スプレッドシートへのアクセスを初めて試みると、アカウント情報の入力を求められます
  - 「R セッション間でフォルダーに OAuth アクセス認証情報をキャッシュしても大丈夫ですか」と尋ねられた場合は RStudio で `Yes` と入力してください
  - ブラウザで Google アカウントにログインするよう求められます
  - Tidyverse API パッケージが Google スプレッドシートのスプレッドシートにアクセスできるようにするチェックボックスをオンにしてください
  - 認証が完了したことを示す新しいウィンドウが開きます。ブラウザウィンドウを閉じてください。
  - `read_sheet()` コマンドを再度実行して、R で出力が表示できることを確認してください

### パート 4: Google スプレッドシートに書き込む

以下は、Google スプレッドシートにデータを書き込むために使用できる関数のリストと例です。

- **gs4_create()** は新しいスプレッドシートを作成し、オプションで初期データを入力できます
  - 例:

    ```r
    (ss <- gs4_create("fluffy-bunny", sheets = list(flowers = head(iris))))
    ```

- **sheet_write()** は Google スプレッドシートのタブにデータフレーム全体を（上書き）書き込みます。
  - 例:

    ```r
    head(mtcars) %>%
    sheet_write(ss, sheet = "autos")
    ```

- **range_write()** は Google スプレッドシートの同じセル範囲にデータフレームを書き込み/上書きします。ターゲットシートはすでに存在している必要があります。
  - 例:

    ```r
    df <- dataframe
    ss <- "https://docs.google.com/spreadsheets/..."
    googlesheets4::range_write(ss = ss,
    data = df,
    sheet = "tabname")
    ```

- **range_clear()** は既存のスプレッドシートタブからデータをクリアするために使用できます
  - 例:

    ```r
    df <- dataframe
    ss <- "https://docs.google.com/spreadsheets/..."
    googlesheets4::range_clear(ss = ss,
    sheet = "tabname"
    range = "tabname!A2:ZZ1000000")
    ```

- **sheet_append()** は既存のタブに行を追加するために使用できます。注意：この関数はターゲットシートの行として列ヘッダーを除外します。
  - 例:

    ```r
    df <- dataframe
    ss <- "https://docs.google.com/spreadsheets/..."
    googlesheets4:sheet_append(
    ss = ss,
    data = df,
    sheet = "tabname")
    ```

- このトピックの詳細については[ソース](https://googlesheets4.tidyverse.org/)を参照してください。
