---
title: "RubyMine"
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/individual-ides/rubymine/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 概要

ウェブサイト: <https://www.jetbrains.com/ruby/>

最適な用途: Ruby または Rails アプリケーション（Javascript/Typescript やその他のほとんどの Web 技術を含む可能性があります）の編集。

## JetBrains 共通のセットアップと設定

JetBrains の IDE は標準化されているため、セットアップと設定情報の多くはすべての IDE に共通して適用され、[JetBrains 共通のセットアップと設定](../setup-and-config/_index.md) で確認できます。

RubyMine 固有の設定は、以下のセクションを参照してください。

## GDK で動作する GitLab に対する Rubymine デバッガーの利用

### `rails-web` のデバッグ

#### Rails Puma バインディングについての注意

デフォルトでは、GitLab が利用している Rails の [puma 設定テンプレートは TCP ポートではなくソケットにバインド](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/d948d5485e3f519688783dc92ad70d94f132e396/support/templates/puma.rb.erb#L44) します。

[このマージリクエスト](https://gitlab.com/gitlab-org/gitlab-development-kit/-/merge_requests/1693) により GDK で Rails puma を TCP ソケットにバインドする設定がサポートされ、また Workhorse が socket ではなく TCP ポートを使用するためのサポートが追加されました。さらに [この JetBrains の Issue](https://youtrack.jetbrains.com/issue/RUBY-27404) により、Run Configuration からソケットベースの Puma サーバーを起動するサポートが追加されました。

GitLab Workhorse と Puma がどのように協調動作するかの詳細については、[コンポーネントに関するアーキテクチャドキュメント](https://docs.gitlab.com/ee/development/architecture.html#components) を参照してください。

#### デフォルトのソケットバインディングを使う puma を使った RubyMine の "Ruby" Run Configuration を設定する

1. デバッグセッションごとに、事前に `gdk stop rails-web` を実行しておいてください（デバッグ完了時には `gdk start rails-web` を実行）
1. RubyMine で `/path/to/gdk/gitlab` にある gitlab リポジトリディレクトリを開きます（gitlab を別ディレクトリにクローンして実行しても、すぐには動作しません）
1. `Run -> Edit Configurations` から、RubyMine 上で次のように Rails Run/Debug 設定を構成します:
    - 名前: `GitLab: rails-web`
    - 設定:
      - Server: `Puma`
      - IP address: 空欄（`0.0.0.0` を削除）
      - Port: 空欄（`3000` を削除）
      - Environment: `development`
      - Environment Variables（注: 現在の GDK `Procfile` から取得した内容に加え、デバッグ中のタイムアウトを防ぐためのものを追加しています。古くなる可能性があります）:
        - `RAILS_RELATIVE_URL_ROOT=/;ACTION_CABLE_IN_APP=true;ACTION_CABLE_WORKER_POOL_SIZE=4;FIPS_MODE=false;GEO_SECONDARY_PROXY=0;GITLAB_RAILS_RACK_TIMEOUT=999999;GITLAB_RAILS_WAIT_TIMEOUT=999999;GITALY_DISABLE_REQUEST_LIMITS=false;PUMA_WORKER_TIMEOUT=99999999`
        - 注意: Procfile エントリの以下の値は不要なため省略しています:
            - `BUNDLE_GEMFILE`
            - `ENABLE_BOOTSNAP`
            - `RAILS_ENV`
1. Run（"Play" ▶️ ボタン）または Debug モード（右上）で設定を起動します

### `rails-background-jobs` のデバッグ

バックグラウンドジョブとして実行されるサービスをデバッグするには、`rails-web` デバッガーに加えて `rails-background-jobs` 用のデバッグも設定する必要があります。設定方法はほぼ同じですが、puma ではなく sidekiq プロセスに接続する点が異なります。

1. デバッグセッションごとに、事前に `gdk stop rails-background-jobs` を実行しておいてください（デバッグ完了時には `gdk start rails-background-jobs` を実行）
1. `Run -> Edit Configurations` から、RubyMine 上で次のように Ruby（Rails ではない）Run/Debug 設定を構成します:
    - 名前: `GitLab: rails-background-jobs`
    - Ruby Script: `/Users/YOUR_USER/.asdf/installs/ruby/RUBY_VERSION/bin/sidekiq`
    - Working Directory: `/Users/YOUR_USER/PATH_TO/gitlab-development-kit/gitlab/`
      - Environment Variables（注: 現在の GDK `Procfile` から取得しています。古くなる可能性があります）: `SIDEKIQ_VERBOSE=false;SIDEKIQ_QUEUES=default,mailers,email_receiver,hashed_storage:hashed_storage_migrator,hashed_storage:hashed_storage_project_migrate,hashed_storage:hashed_storage_project_rollback,hashed_storage:hashed_storage_rollbacker,project_import_schedule,service_desk_email_receiver;SIDEKIQ_WORKERS=1;RAILS_RELATIVE_URL_ROOT=/;GITALY_DISABLE_REQUEST_LIMITS=false`
      - 注意: Procfile エントリの以下の値は不要なため省略しています:
          - `BUNDLE_GEMFILE`
          - `ENABLE_BOOTSNAP`
          - `RAILS_ENV`

## GDK のデータベース接続の設定

まず ["GUI でデータベースにアクセスする"](https://docs.gitlab.com/ee/development/database/database_debugging.html#access-the-database-with-a-gui) の手順に従って、GDK 配下の postgresql を localhost で動作するよう再設定します。

次に development データベースを設定します:

1. `File -> New -> Data Source -> Postgresql` に移動します（または右側の `Databases` タブから）
1. 名前を入力: `gitlabhq_development@localhost`
1. Host: `localhost`
1. Port: `5432`
1. Authentication: `User & Password`
1. User: 空欄のまま
1. Password: デフォルトのまま、`<hidden>` と表示されます
1. URL（上記フィールドから自動計算）: `jdbc:postgresql://localhost:5432/gitlabhq_development`
1. 必要に応じてドライバーをダウンロードします。
1. `Test Connection` をクリックします。

その後、データベースにアクセスします:

1. 右側のボーダーから `Databases` パネルを開きます
1. リフレッシュボタン（円形矢印）をクリックします
1. 展開してテーブル／ビュー／その他を確認します

`config/database.yml` からさらにスキーマを追加したい場合:

1. `Database` タブを開きます
1. データベースの最上位を右クリックして `Properties` を表示します（または「レンチ」ボタン）
1. `Schemas` タブを開きます
1. 必要なスキーマを選択します。

## その他

- EE のコードに対して "Navigate to Test"（<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>t</kbd>）を有効にするには、`ee/spec` ディレクトリを右クリックして "Mark Directory As..." → "Test Sources" を選択します。
