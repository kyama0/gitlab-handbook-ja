---
title: "GitLab Security Essentials - ハンズオンラボ: SAST、シークレット検出、DAST の設定"
description: "このハンズオンガイドでは、GitLab プロジェクトで SAST、シークレット検出、DAST スキャンを使用する方法を解説します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/secessentialshandson1/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T05:28:22Z"
translator: claude
stale: false
---

> 推定所要時間: 45 〜 60 分

## 目標

このラボでは、GitLab プロジェクトに対して SAST、シークレット検出、DAST スキャンを有効化します。

CI/CD パイプラインでスキャンが実行された後、3 つのスキャンすべての結果を表示します。脆弱性を今後の対応のためにマークし、別の脆弱性を却下します。

最後に、ブランチ上の脆弱性を修正し、同じブランチに新しい脆弱性を導入することで、デフォルトブランチと非デフォルトブランチの間の脆弱性の違いを確認できるようにします。

ラボでコピー＆ペーストを求められるコードは、時間をかけて理解するようにしてください。明確でないコードについてはインストラクターに説明を求めてください。

## タスク A. ラボ環境へのアクセス

1. Web ブラウザで [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) に移動します。

1. **招待コード**フィールドに、インストラクターまたは LevelUp LMS から提供された招待コードを入力します。

1. **トレーニング環境のプロビジョニング**を選択します。

1. セルフペースコースの場合は、**GitLab.com** のユーザー名が必要です。ユーザー名を確認するには、[Gitlab](https://gitlab.com) に移動します。

1. 左サイドバーでプロフィール画像を選択します。

1. 表示されるドロップダウンに `@` で始まる値が表示されます。これが GitLab ユーザー名です。

1. 招待コードを入力すると、ポータルから **GitLab.com** のユーザー名の入力を求められます。先頭の `@` 記号を除いた GitLab.com のユーザー名を入力します。

1. **トレーニング環境のプロビジョニング**を選択します。

1. ページ下部の **My Group** を選択します。

1. GitLab.com の認証情報でサインインします。

1. トレーニングのラボステップを実行するためのサンドボックスとして機能する **My Test Group** グループにリダイレクトされます。

    > このグループには GitLab Ultimate ライセンスがあり、すべての機能を利用できます。個人ユーザーの名前空間ではすべての機能にアクセスするために有料サブスクリプションまたは無料トライアルが必要です。
    >
    > グループにアクセスしたときに 404 エラーが発生する場合は、ラボのプロビジョニング時に入力したユーザー名に問題があると考えられます。GitLab ユーザー名が正しく入力されていることを確認してください。

1. **My Test Group** トレーニングサブグループから、**New project** ボタンをクリックします。

## タスク B. プロジェクトの作成

1. **Create blank project** タイルをクリックします。

1. **Project name** フィールドに `Security Labs` と入力します。

    > プロジェクトスラグは自動的に入力されます。必要に応じて短い文字列に変更できます。このラボではデフォルトのままにしてください。

1. ラボ環境の URL が `https://gitlab.com/gitlab-learn-labs/…` で始まる場合、**Project URL** フィールドで URL の後半部分のドロップダウンをクリックして、**グループ名**（`gitlab-learn-labs/*` で始まる）を指していることを確認してください。**ユーザー名**は指定しないでください。このプロジェクトはグループ内に作成してください（ユーザーの名前空間に直接作成しないでください）。

1. グループ URL が `https://ilt.gitlabtraining.cloud/...` で始まる場合、**Project URL** フィールドで URL の後半部分のドロップダウンをクリックして、**グループ名**（`training-users/*` で始まる）を指していることを確認してください。**ユーザー名**は指定しないでください。このプロジェクトはグループ内に作成してください（ユーザーの名前空間に直接作成しないでください）。

1. **Visibility Level** で **Private** をクリックします。

    > 親グループはプライベートであるため、その下のすべての子グループとプロジェクトもプライベートになります。プロジェクトの可視性レベルの詳細については、[ドキュメント](https://docs.gitlab.com/ee/user/application_security/secret_detection/pipeline/custom_rulesets_schema.html)を参照してください。

1. **Initialize repository with a README** にチェックを入れます。

1. **Enable Static Application Security Testing (SAST)** チェックボックスがオフのままであることを確認します。このラボでは SAST 機能を手動で追加します。

1. **Create project** をクリックします。

## タスク C. SAST の有効化と設定

> 静的アプリケーションセキュリティテスト（SAST）は、脆弱性についてソースコードを調査するプロセスです。SAST スキャンを使用すると、コードリポジトリを既知の脆弱性について自動的にスキャンできます。また、マージリクエストのコードをマージ前に脆弱性についてチェックするためにも使用できます。このプロセスにより、コードが脆弱性のない状態を維持できます。

1. **(+) > This directory > New file** をクリックして、`main` ブランチに新しいファイルを作成します。

1. **Filename** フィールドに `.gitlab-ci.yml` と入力します。このタスクでは空白のままにできるテンプレートが自動的に表示されます。

1. 単一の **test** ステージを定義します。

    ```yml
    stages:
    - test
    ```

    > YAML ファイルはスペース 2 つでインデントする必要があることに注意してください。Web IDE がタブ 4 スペースを使用しようとする場合は、バックスペースを使用して 2 スペースに設定してください（例をコピー＆ペーストしない場合）。

1. `.gitlab-ci.yml` の stages 定義の後に以下のテキストをペーストして SAST を有効化します。

    ```yml
    include:
    - template: Security/SAST.gitlab-ci.yml
    ```

    > GitLab UI で SAST を設定することも可能です。**Secure > Security configuration** に移動して **Enable SAST** ボタンをクリックする方法もあります。このラボでは CI ファイルを編集して設定する方法を選択し、内部の仕組みをより深く理解します。

1. `.gitlab-ci.yml` ファイルの末尾に variables セクションを追加し、`SAST_EXCLUDED_PATHS: venv/` を設定します。

    ```yml
    variables:
      SAST_EXCLUDED_PATHS: venv/
    ```

    > `.gitlab-ci.yml` ファイルの variables セクションに設定を追加することで SAST をカスタマイズできます。たとえば、`SAST_EXCLUDED_PATHS` 変数を使用してプロジェクトパスを SAST スキャンから除外できます。このオプションを設定することで、不要なファイルのスキャンを防止できます。
    >
    > 例として、Python プロジェクトにはプロジェクトで使用されるパッケージを含む `venv` ディレクトリが含まれることが多いです。このディレクトリには独自のソースコードが含まれていないため、SAST スキャンから除外する必要があります。
    >
    > SAST 変数の完全なリストは[ドキュメント](https://docs.gitlab.com/user/application_security/sast/#available-cicd-variables)で確認できます。

1. **Commit changes** ボタンをクリックし、適切なコミットメッセージ（例: `Add SAST template to .gitlab-ci.yml`）を追加し、「現在の `main` ブランチにコミット」オプションが選択されていることを確認します。

1. **Commit changes** ボタンをクリックします。

1. 完了すると、`.gitlab-ci.yml` ファイルは次のようになります。

    ```yml
    stages:
    - test

    include:
    - template: Security/SAST.gitlab-ci.yml

    variables:
      SAST_EXCLUDED_PATHS: venv/
    ```

## タスク D. アプリケーションに脆弱性を追加する

> SAST スキャンが設定されたので、マージリクエスト内のセキュリティ脆弱性を確認できるようになりました。この SAST スキャンの動作を示すために、脆弱なコードを含むブランチを作成しましょう。

1. **Code > Repository** に移動してプロジェクトのソースコードを確認します。

1. **(+) > This directory > New file** をクリックして新しいファイルを追加します。

1. ファイル名を `main.py` に設定します。

1. 新しい脆弱性を導入します（意図的でないものとして扱ってください！）。`main.py` ファイルに次のコードを追加します。

    ```python
    import subprocess

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    gitlab_token = 'glpat-XXXXXXXXXXXXXXXXXXXX'
    rsa_data = '''
    -----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: DES-EDE3-CBC,86C3F4011519BFBB
    PxyzMAlAmEu/Qkx9nPh696SU7/MjXpCpOnfFiijLhJumNcRlWgsOiI9rfwlkh4aN
    -----END RSA PRIVATE KEY-----
    '''

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. **Commit changes** ボタンをクリックし、適切なコミットメッセージ（例: `Add prompt for server authentication`）を追加して、ターゲットブランチを `add_auth` に設定します。

    > ターゲットブランチを `add_auth` に設定すると、`add_auth` という名前の新しいブランチが作成され、そのブランチでマージリクエストが開きます。

1. **Create a new merge request for this change** チェックボックスにチェックが入っていることを確認します。

1. **Commit changes** ボタンをクリックします。

1. 作成されたマージリクエストで、名前を `Add prompt for server authentication` に設定し、残りのフィールドはデフォルトのままにします。

1. **Create merge request** ボタンをクリックします。

1. マージリクエストページでセキュリティパイプラインが実行されているのが確認できます。パイプラインが完了するまで待ちます。

1. パイプラインが完了すると、セキュリティスキャンの結果を示す新しいセクションがマージリクエストに表示されます。

    > 新しいセキュリティスキャンセクションを表示するにはページを更新する必要がある場合があります。

1. この例では、セキュリティスキャンで 1 件の新しい重大な脆弱性が表示されます。脆弱性レポートの詳細を確認するには、**View all pipeline findings** オプションをクリックします。

## タスク E. マージリクエストの脆弱性レポート

> セキュリティスキャンの主な目的のひとつは、安全でないコードがリポジトリに入るのを防ぐことです。マージリクエストの脆弱性レポートを使用して、単一のマージリクエストで検出されたすべての脆弱性を確認できます。このレポートには、現在のマージリクエストで新たに導入された脆弱性のみが表示されます。リポジトリにすでに存在する脆弱性はここには表示されませんが、プロジェクトレベルの脆弱性レポートには表示されます。

1. 脆弱性列で、**Improper neutralization of special elements used in an OS Command ('OS Command Injection')** という脆弱性をクリックします。

1. 表示されたウィンドウに **OS Command Injection** 脆弱性の詳細が表示されます。検出結果に脆弱性の場所（`main.py` の 4 行目）が示されていることに注意してください。右上の X またはモーダルウィンドウの下部の `Cancel` ボタンをクリックしてモーダルウィンドウを閉じます。

1. サイドバーで **Code > Merge requests** に移動します。

1. マージリクエスト **Add prompt for server authentication** をクリックします。

1. マージリクエストのタイトル下にある Changes タブをクリックします。`main.py` ファイルで、**縦の省略記号 -> 単一ファイルエディターで編集** をクリックします。

1. スキャンでは 4 行目に脆弱性が含まれていることが示されました。

    ```python
    # main.py Line 4
    subprocess.run(["ping", in])
    ```

    > 問題は、この行でユーザー入力を使用してシステムコマンドを実行している点です。この状況では、ユーザーが意図しないコマンドをアプリケーションに実行させる入力を作成できます。これを解決するには、コマンドを削除するか、コマンドからユーザー入力を削除します。

1. コードの 1 〜 4 行目を削除します。ファイルは次のようになります。

    ```python
    gitlab_token = 'glpat-XXXXXXXXXXXXXXXXXXXX'
    rsa_data = '''
    -----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: DES-EDE3-CBC,86C3F4011519BFBB
    PxyzMAlAmEu/Qkx9nPh696SU7/MjXpCpOnfFiijLhJumNcRlWgsOiI9rfwlkh4aN
    -----END RSA PRIVATE KEY-----
    '''

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. **Commit changes** ボタンをクリックし、再度 **Commit changes** をクリックします。

    > 最新の変更を確認するにはページを更新する必要がある場合があります。

1. マージリクエストのタイトル下にある **Overview** タブをクリックします。

    > 概要には、セキュリティパイプラインが実行されているのが確認できます。パイプラインが完了したらページを更新してセキュリティレポートを確認してください。セキュリティレポートには、新しい潜在的な脆弱性は検出されなかったと表示されます。新しい脆弱性が検出されなければ、ブランチを main にマージする準備が整います！

1. `Delete source branch` をチェックしたままにして **Merge** をクリックします。

## タスク F. シークレット検出の有効化と設定

> 前のセクションでは、ソースコードの脆弱性を検出するために SAST を適用しました。脆弱性のコードスキャンに加えて、GitLab はキーや API トークンなどのシークレットのコードもスキャンできます。シークレット検出をコードに追加することで、リポジトリ内の機密データの漏洩を防止できます。
>
> シークレット検出ジョブはデフォルトで **test** ステージに属しています。`.gitlab-ci.yml` にはすでにそのステージが定義されているため、再度定義する必要はありません。

1. 左サイドバーで **Code > Repository** に移動します。

1. `.gitlab-ci.yml` ファイルをクリックします。コードの上部右側で **Edit > Edit single file** に移動します。

1. `.gitlab-ci.yml` の既存の `include:` セクションの末尾に `template: Security/Secret-Detection.gitlab-ci.yml` を追加してシークレット検出を有効化します。このインデントは前のテンプレートと同じレベルにしてください。

    ```yml
    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml
    ```

    > GitLab UI でシークレット検出を設定することも可能です。**Secure > Security configuration** に移動して **Pipeline Secret Detection** の下にある **Configure with a merge request** ボタンをクリックする方法もあります。このラボでは CI ファイルを編集して設定する方法を選択し、内部の仕組みをより深く理解します。

1. `.gitlab-ci.yml` の末尾にこのジョブ定義をペーストして、テストディレクトリを無視するようにシークレット検出を設定します。最初の行はインデントなしにしてください。

    ```yml
    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests/
    ```

    > デフォルト以外の動作を使用するようにシークレット検出を設定するには、**secret_detection** ジョブ定義をオーバーライドして、その中に変数を追加します。
    >
    > シークレット検出変数の完全なリストは[ドキュメント](https://docs.gitlab.com/user/application_security/secret_detection/pipeline/configure/#customize-analyzer-behavior)で確認できます。

1. `.gitlab-ci.yml` ファイルは次のようになります。

    ```yml
    stages:
    - test

    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml

    variables:
      SAST_EXCLUDED_PATHS: venv/

    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests/
    ```

1. 変更を新しいブランチにコミットしてマージリクエストを作成する方法はすでに学習しました。変更を `add_secret_detection` ターゲットブランチにコミットします。コミットメッセージはデフォルトのままにするか、`Add Secret Detection to .gitlab-ci.yml` に更新できます。単一コミットのブランチでは、コミットメッセージがマージリクエストのタイトルとして使用されます。

    > このマージリクエストのセキュリティレポートを確認すると、脆弱性が検出されていないことがわかります。これは `main.py` 内のシークレットがすでに main ブランチに存在しているためです。マージリクエストで発生するスキャンでは、そのマージリクエストで新たに導入された脆弱性のみが表示されます。既存の脆弱性を確認するには、次のセクションで扱うプロジェクトレベルの脆弱性レポートを参照する必要があります。

1. パイプラインが通過したら、マージリクエストの `Merge` ボタンをクリックします。

## タスク G. プロジェクトレベルの脆弱性レポートの表示

> main ブランチにコードをマージするたびに、セキュリティパイプラインが実行され、*デフォルトブランチの最新コミットにおけるすべての脆弱性*を示すプロジェクトレベルの脆弱性レポートが生成されます。これは他のブランチの脆弱性と比較するための基準となる脆弱性セットです。

1. **Secure > Vulnerability Report** に移動します。

1. **開発の脆弱性テーブル**の **Tool** 列を確認すると、追加したシークレット検出スキャンで検出された 2 件の重大な脆弱性が表示されます。

1. いくつかの脆弱性をクリックして詳細を確認し、コード内のどこで発生しているかを確認します。

1. **Status**、**Severity**、**Tool** フィルターを試してみてください。

## タスク H. 脆弱性の確認

> セキュリティスキャナーが脆弱性を発見したとき、それを修正すべきか無視すべきかを追跡する必要があります。これは脆弱性の**ステータス**を設定することで行います。複数の方法がありますが、このラボでは脆弱性レポート内でステータスを設定します。

1. レポートに `RSA private key` という説明の脆弱性があります。この脆弱性は RSA プライベートキーがリポジトリに書き込まれていることを示しています。コードを確認すると、RSA プライベートキーがコード内にあることを確認できます。2 つ目の脆弱性 `GitLab Personal Access Token` は GitLab トークンがコード内に存在することを示しています。コードを確認すると、これも事実であることが確認できます。

1. 脆弱性がコード内に実際に存在するので、各脆弱性の横にあるチェックボックスをクリックします。**Set status** ドロップダウンで **Confirm** をクリックします。**Change status** をクリックします。

## タスク I. ブランチとマージリクエストの作成

> RSA プライベートキーの脆弱性を修正するために、ブランチと MR が必要です。

1. **Code > Branches** に移動します。

1. **New branch** ボタンをクリックします。

1. ブランチ名を `fix-rsa` にします。

1. **Create from** ドロップダウンをデフォルト値の `main` のままにして、**Create branch** ボタンをクリックします。

1. `fix-rsa` ブランチの **Repository** ページに戻ります。`main.py` ファイルをクリックします。

1. コードの上部右側で **Edit > Edit single file** に移動します。

1. コードは現在次のようになっています。

    ```python
    gitlab_token = 'glpat-XXXXXXXXXXXXXXXXXXXX'
    rsa_data = '''
    -----BEGIN RSA PRIVATE KEY-----
    Proc-Type: 4,ENCRYPTED
    DEK-Info: DES-EDE3-CBC,86C3F4011519BFBB
    PxyzMAlAmEu/Qkx9nPh696SU7/MjXpCpOnfFiijLhJumNcRlWgsOiI9rfwlkh4aN
    -----END RSA PRIVATE KEY-----
    '''

    print("Attempting to connect to the server")
    print("Application authentication was successful")

    ```

1. 最初の 2 つの変数を削除して次の結果を得ます。

    ```python
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

    > この例では、トークンと API キーを削除します。コードの機能にこれらの値が必要な場合は、コードに直接書き込むのではなく、環境変数（または CI 変数）として保存することが一般的です。こうすることで、コードを閲覧できる人へのデータの漏洩を防ぎます。

1. **Commit changes** ボタンをクリックします。

1. **現在の fix-rsa ブランチにコミット**オプションが選択されていることを確認して、**Commit changes** をクリックします。

1. **Create merge request** ボタンをクリックします。

1. すべてのオプションをデフォルトのままにして、**Create merge request** をクリックします。

1. マージリクエストページでパイプラインが完了するまで待ちます。

1. パイプラインが完了すると、セキュリティスキャンがマージリクエストに表示されます。**View all pipeline findings** リンクをクリックします。

    > セキュリティスキャンを表示するにはページを更新する必要がある場合があります。

1. レポートを確認します。脆弱性が表示されなくなっているはずです。

    > このマージリクエストではキーを削除しましたが、リポジトリの履歴にはまだ残っている場合があります。リポジトリでキーが検出された場合は、常にキーをローテーションすることが推奨されます。

## タスク J. ブランチをマージして修正済みの脆弱性を解決する

1. マージリクエストで **Merge** ボタンをクリックします。

1. **Build > Pipelines** に移動します。

1. ブランチをマージしたときにトリガーされたパイプラインのステータスアイコンをクリックします。

1. すべてのジョブが完了したら、**Secure > Vulnerability Report** に移動します。

1. **RSA private key** と **GitLab Personal Access Token** の脆弱性の横にあるチェックボックスをクリックします。**Set status** ドロップダウンで **Resolve** をクリックします。**Change status** をクリックします。

## タスク K. DAST の有効化と設定

> 動的アプリケーションセキュリティテスト（DAST）は、シミュレートされた攻撃を使用して実行中のアプリケーションの脆弱性をスキャンするプロセスです。DAST を使用すると、アプリケーションが実際にどのように動作するかを確認でき、静的テストでは検出できない脆弱性を発見できます。このセクションでは、プロジェクトで DAST スキャンを設定する方法を学びます。

1. **Code > Repository** に移動します。

1. **.gitlab-ci.yml** をクリックします。

1. **Edit > Edit single file** をクリックします。

1. デフォルトの DAST ジョブは `dast` ステージに属しているため、既存の `stages:` セクションの末尾にこの行をペーストしてそのステージを定義する必要があります。`dast` ステージは `test` ステージと同じインデントレベルにしてください。

    ```yml
    stages:
    - test
    - dast
    ```

1. `.gitlab-ci.yml` の既存の `include:` セクションの末尾に `template: DAST.gitlab-ci.yml` を追加して DAST を有効化します。この行は他のテンプレートと同じインデントにしてください。

    ```yml
    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml
    - template: DAST.gitlab-ci.yml
    ```

1. 既存のグローバル `variables:` セクションの末尾（`secret_detection` ジョブ定義内の `variables:` セクションではなく）に `DAST_WEBSITE: https://example.com` を追加します。`SAST_EXCLUDED_PATHS` 変数と同じインデントを使用してください。

    ```yml
    variables:
      SAST_EXCLUDED_PATHS: venv/
      DAST_WEBSITE: https://example.com
    ```

    > 通常は、レビュー環境または本番環境で実行中のプロジェクトのコードに対して DAST を実行します。このプロジェクトのコードは単一の Python ファイルであってデプロイ可能な Web アプリではないため、このプロジェクトのコードとは無関係な外部の Web アプリに対して DAST スキャンを設定します。
    >
    > DAST 変数の完全なリストは <a target="_blank" href="https://docs.gitlab.com/ee/user/application_security/dast/browser/index.html#available-cicd-variables">ドキュメント</a>で確認できます。

1. これらの変更後、`.gitlab-ci.yml` ファイルは次のようになります。

    ```yml
    stages:
    - test
    - dast

    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml
    - template: DAST.gitlab-ci.yml

    variables:
      SAST_EXCLUDED_PATHS: venv/
      DAST_WEBSITE: https://example.com

    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests/
    ```

1. **Commit changes** ボタンをクリックします。

1. DAST スキャンの進行状況を確認するには、**Build > Pipelines** に移動します。ジョブの `Status` をクリックしてパイプライン内の各ジョブを確認します。`dast` をクリックしてジョブの CI 出力を確認します。

    > DAST スキャンは完了までに約 90 秒かかります。

1. スキャンが完了したら、**Secure > Vulnerability Report** に移動します。

1. 脆弱性レポートで、DAST によって発見された新しい脆弱性に注目します。各脆弱性をクリックして詳細を確認します。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson)を参照できます。

## ご提案

*GitLab Security Essentials ハンズオンガイド*への変更を提案される場合は、マージリクエストで提出してください。
