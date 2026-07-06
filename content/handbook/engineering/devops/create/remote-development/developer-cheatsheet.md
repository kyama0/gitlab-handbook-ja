---
title: 開発者チートシート
description: Editor チームの開発者に役立つ情報。
upstream_path: /handbook/engineering/devops/create/remote-development/developer-cheatsheet/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T07:58:23+09:00"
translator: codex
stale: false
lastmod: 2026-06-29T08:59:00-04:00

---

## 便利なコマンド

### 全般

- CI/CD ジョブのローカルテスト: `gitlab-runner exec shell job_name`

### gitlab-org/gitlab

- `gdk start`
- `gdk doctor`
- `bin/rake frontend:fixtures`
- テストの実行:
  - `yarn karma`
  - `yarn jest`
- [Capybara のデバッグ](https://docs.gitlab.com/ee/development/testing_guide/best_practices.html#debugging-capybara)
  - `CHROME_HEADLESS=0 bundle exec rspec spec/features/projects/tree/create_directory_spec.rb`
- [Capybara スクリーンショット](https://gitlab.com/gitlab-org/gitlab/blob/master/doc/development/testing_guide/best_practices.md#screenshots)
  - `screenshot_and_save_page`
  - `screenshot_and_open_image`
- [`live_debug`](https://docs.gitlab.com/ee/development/testing_guide/best_practices.html#live-debug)
- 静的解析:
  - `scripts/static-analysis`（時間がかかる）
  - `yarn eslint`（速い）
- フォーカスした karma スペック用の `fdescribe` と `fit`

#### QA スペックの実行

詳細については <https://gitlab.com/gitlab-org/gitlab/tree/master/qa#how-can-i-use-it> を参照してください。

- `cd qa`
- `bundle`
- `brew cask <install|reinstall> chromedriver`
- `bundle exec bin/qa Test::Instance::All https://0.0.0.0:3000 -- qa/specs/features/ee/browser_ui/1_manage/project/project_templates_spec.rb`

RubyMine で QA スペックを実行するには、カスタム rspec ランナー設定を使用し（ガター内の矢印の隣にある例を右クリック）、カスタム RSpec ランナースクリプトとして `qa/bin/rubymine` スクリプトを設定し、作業ディレクトリを `qa` に設定してください。

このプロセスの詳細な手順については <https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/end_to_end_test_configuration.md#starting-tests-using-the-rubymine-gutter> を参照してください。

### gitlab-com/www-gitlab-com

- ローカルでサイトを実行:
  - `cd sites/handbook && NO_CONTRACTS=true bundle exec middleman`
  - （詳細は [monorepo ドキュメント](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/monorepo.md) を参照）
- [開発ドキュメント](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md)
  - [テストのヒント](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md#testing)
- このダッシュボードを使用してページビューのページまたはページ群と期間を選択できます: [https://datastudio.google.com/reporting/e7618539-81b4-4174-9731-3c858e3057b2/page/xXKYB](https://datastudio.google.com/reporting/e7618539-81b4-4174-9731-3c858e3057b2/page/xXKYB)

## ヒントとコツ

## GDK のヒント

- EE 機能にアクセスするには、`/admin/license` に EE ライセンスが追加されていることを確認してください。

### GDK で Web IDE ターミナルを実行する

- GDK ドキュメント: [Web IDE ターミナルの設定方法](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/web_ide_terminal_gdk_setup.md)
- YouTube: [Web IDE ターミナル - GDK を使った設定（23:44）](https://www.youtube.com/watch?v=MhwmqqaREw0)

### GDK のデバッグ

#### ログデバッグ

- デバッグメッセージを出力したい場合:
  - `puts` または `p` は `gdk tail rails` にのみ表示されます
  - `logger.info('...')` は `tail -f log/development.log` にのみ表示されます

#### RubyMine デバッグ

**_移動済み: RubyMine デバッガーを使った GDK のデバッグに関するこのセクションは <https://handbook.gitlab.com/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/individual-ides/rubymine/#debugging-rails-web> に移動しました_**

## Git のヒント

### リベース

#### インタラクティブリベース

- インタラクティブリベース（`git rebase -i master`）と `reword`/`fixup` によるメッセージのクリーンアップは、慣れていない場合は詳しく学ぶ価値があります。
- インタラクティブリベースのヒント:
  - このプロセスにより、`merge-base`（ブランチの `HEAD` とアップストリームブランチ `master` の共通の祖先）に対する「インタラクティブリベース」を、最新のアップストリーム `master` に対するリベース時の「コンフリクト解消」の可能性から切り離すことができます。
  - まず `git rebase -i $(git merge-base HEAD master)` を実行します。これにより、コンフリクトに対処する必要性なしに `merge-base` に対してインタラクティブリベースができます。`merge-base` コミットが master ブランチに含まれていることを確認してください（つまり、master を更新せずにブランチを直接フェッチしてチェックアウトしていないことを確認）。`git fetch` してから `origin/master` に対してリベースすることもできますが、これは `--force-with-lease` を使用する利点を否定します。
  - オプションで `git push --force-with-lease` を実行します（次のステップの後まで待って余分なビルドをトリガーしたくない場合は省略可能）
  - 次に、最新の master に対してリベースするために `git rebase master` を実行し、クリーンアップ済みのインタラクティブリベース済みブランチに対してコンフリクトを解消します。
  - `git push --force-with-lease`（force-with-lease は最後にプルしてから他の誰かがブランチにプッシュしていないことを保証します）

#### スタックされた MR のリベースに --onto オプションを使用する

複数の MR が相互に「スタック」されている場合、`--onto` オプションは非常に便利で、不必要なリベースコンフリクトを回避するのに役立ちます。

以下の状況を想定してください:

1. `first` の MR とブランチは `master`（`main`）ブランチをベースにしており、いくつかのコミットがあります。
1. `second` の MR とブランチは `first` ブランチをベースにしており、いくつかのコミットがあります。
1. `first` ブランチが `master` からリベースされました。
1. つまり、`first` ブランチのコミットの SHA が変更されており、`second` ブランチ内のそれらのコミットの SHA は古くなっています。

ここで `--onto` が役に立ちます。単純に `second` を `first` の上にリベースしようとすると、`second` ブランチが現在知っている `first` ブランチの「履歴」または状態が変わったため、意味のない多くのリベースコンフリクトが発生します。

しかし、これらの紛らわしく不必要なコンフリクトを回避する方法があります: `second` ブランチの一部であるコミットだけを取り、`--onto` オプションを使用して `first` ブランチの現在の状態の上にリベースします。

手順は次のとおりです:

1. `git checkout second`
1. `git log second` を実行し、`first` ブランチの最新コミットであったコミットの SHA をコピーします。例えば `abcdef`
    - 注意: `second` ブランチに（上記の通り定期的なインタラクティブリベースと `fixup` を経て）コミットが 1 つだけあることが保証できる場合は、特定の SHA を取得する代わりに `head^` を使用することもできます。
1. そのコミットに「相対的に」リベースし、`first` ブランチの「上に」: `git rebase abcdef --onto first`、または `second` にコミットが 1 つだけある場合は `git rebase head^ --onto first`
1. 通常通りリベースを続けます。`first` が `second` と同じ行を変更している場合は、いくつかの正当なコンフリクトを解消する必要があるかもしれませんが、`--onto` で無視したことにより `second` ブランチの `first` に関する「古い履歴」による紛らわしく不必要なコンフリクトはありません。

### Git リファレンス

- 詳細な git のヒントは[このブログ記事](https://about.gitlab.com/blog/2016/12/08/git-tips-and-tricks/)と私たちの [git チートシート](/pdfs/press/git-cheat-sheet.pdf)を参照してください。

### インタラクティブな Git 学習ツール

- [https://onlywei.github.io/explain-git-with-d3/](https://onlywei.github.io/explain-git-with-d3/) は、さまざまな git コマンドのチュートリアルをリアルタイムの可視化とともに提供する非常にクールなサンドボックスサイトです。多くの場合、チュートリアルの指示以外に独自のコマンドを入力することもできます！
- [https://ndpsoftware.com/git-cheatsheet.html](https://ndpsoftware.com/git-cheatsheet.html) は、git のさまざまな「エリア」にグループ化されたさまざまな git コマンドの優れたリファレンスと可視化です。

### master がマージされたブランチをスカッシュダウンする

ブランチがリベースではなくマージのワークフローに従っている場合、何が起きているかを把握するのが非常に困難になり、単一のコミットにスカッシュしたくなります。ただし、ブランチに master がマージされている場合は、master に対して通常のインタラクティブリベースを行うことはできません。代わりに次の手順が必要です。

この方法よりも効率的な方法がある可能性があり、提案は歓迎します。また、場合によってはこれが機能せず、ステップ 5 の後にブランチのほぼすべての変更がコミットされていない状態になることがあります — 理由は不明です :(

ブランチの名前が `branch`、アップストリームの名前が `master` と仮定します:

1. ブランチのすべてのコミットのログを取得: `git log master..branch --oneline`
1. ブランチの最後（最新）のコミットを見つけます。それはリストの一番上になります。例えば `c60ed83` とします。
1. マージコミットの _直前_ のブランチのコミットを見つけます。
   1. `git log --graph --oneline --decorate` をブランチ上で実行してマージコミットを見つけます — マージコミットには「resolve merge conflicts（マージコンフリクトを解消）」のようなコミットメッセージがある可能性が高いです。
   1. ブランチの「ライン」を下って、マージコミットの _直前_ のブランチ上のコミットを見つけます。
   1. 以下はその例です。この例では `c36ee33` がマージコミットで、`b48156a` がその直前のコミットです。
      実際のターミナルでは、読みやすくするために行も異なる色で表示されます。

      ```text
      * c60ed83 (HEAD -> caw-investigate-rebase-conflicts, origin/caw-investigate-rebase-conflicts) chore: fix vue
      * a5269d6 chore: fix vue
      * b3941ad chore: fix previous commits
      *   c36ee33 chore: resolve conflicts
      |\
      | *   a13f09e (origin/llb/conditionally-load-legacy-web-ide-scripts) Merge branch 'removeRemoteFromExample' into 'main'
      | |\
      | | * a5144c2 chore: Remove "Remote Development" mode from the example app
      | |/
      | *   c33f00c Merge branch 'cwoolley-gitlab-main-patch-d6cd' into 'main'
      | |\
      | | * fcfb4a1 (origin/cwoolley-gitlab-main-patch-d6cd, cwoolley-gitlab-main-patch-d6cd) chore: Update file Default.md
      | * |   e97eeec Merge branch 'replaceLogger' into 'main'
      | |\ \
      | | * | 8d48c3e chore: Replace console.log reference with actual logger
      | * | |   60be327 Merge branch 'rename-group-ide-label' into 'main'
      | |\ \ \
      | | |_|/
      | |/| |
      | | * | 90ac565 chore: Rename group::ide to "group::remote development"
      | |/ /
      | * |   0b89422 (origin/365-make-vscode-loglevel-configurable-2, origin/365-make-vscode-loglevel-configurable) Merge branch 'dp-remove-remote-repository' into 'main'
      | |\ \
      | | |/
      | |/|
      | | * fc374f0 feat: Remove "Configure a Remote Connection" command
      | |/
      | *   522f9b9 Merge branch 'updateCommit' into 'main'
      | |\
      | | * 9a99045 feat: update copy for committing to new branch
      | * |   e6a542f Merge branch 'ealcantara/web-ide-development-process-issue-template' into 'main'
      | |\ \
      | | |/
      | |/|
      | | * a520ee4 (origin/ealcantara/web-ide-development-process-issue-template) chore: Web IDE development process issue template
      * | | b48156a chore: fix waitForReady
      * | | 3f4bae3 chore: ran prettier
      * | | bc990b1 chore: remove with erroneous configType
      * | | 75ad9f0 chore: fix errors
      ...
      ...
      ```

   1. マージコミットの _直前_ のコミットの SHA をコピーします。この例では `b48156a` とします。
1. マージコミットの直前のコミットにハードリセット: `git reset --hard b48156a`
1. 最後のコミットを `merge --squash`: `git merge --squash c60ed83`
1. ここで `git log --graph --oneline --decorate` を再度実行すると、
   **マージコミットとその後のすべてのコミットが単一の通常の非マージコミットに置き換えられている**のがわかります。
   上記のログの例がこの後どのように見えるかを示します:

   ```text
   * b48156a (HEAD -> caw-investigate-rebase-conflicts) chore: fix waitForReady
   * 3f4bae3 chore: ran prettier
   * bc990b1 chore: remove with erroneous configType
   * 75ad9f0 chore: fix errors
   ...
   ...
   ```

1. 他のマージコミットがある場合は、同じステップでそれらも解消します。
1. 注意: 一部のケースでは、スカッシュ後に含めたくない master コミットからの余分な変更がある場合があります。それらを削除するには:
    1. `git restore --staged .`
    1. `git checkout .`
    1. `git clean -df`

これで通常通りブランチに `rebase` と `rebase --interactive` を使用できるようになるはずです。

この例を自分で試してみたい場合は、
[このブランチ](https://gitlab.com/gitlab-org/gitlab-web-ide/-/tree/caw-investigate-rebase-conflicts?ref_type=heads)
をチェックアウトできます（リポジトリにプッシュしないでください）。

## Issue/MR の操作

- [検索のための Issue/MR スレッドの展開](https://gitlab.com/gitlab-org/gitlab/issues/38235)

## 新しい習慣

[コントリビューターおよび開発ドキュメント](https://docs.gitlab.com/ee/development/)が唯一の信頼できる情報源ですが、コードコントリビューションプロセスに慣れていない場合に開発するとよい追加の習慣があります。

既存の習慣や `git` の練習方法によっては、以下の習慣がコード提出時の苦労を軽減するのに役立つ場合があります。

- GDK を最新の状態に保つ（頻繁に更新する、できれば毎日）
- コミット履歴をきれいに保つ
  - [コミットメッセージのガイドライン](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#commit-messages-guidelines)を特に参照してください
  - 上記の「Git のヒント」を参照してください
- マージリクエストを小さく保つ
  - マージコンフリクトは避けられませんが、MR を小さくすることに集中することで後の苦労を減らせます
- ローカライゼーションファイルを最新の状態に保つ
  - 英語のコピー、メッセージ、ラベルを追加する際は、[ローカライゼーションファイルを更新する](https://docs.gitlab.com/ee/development/i18n/externalization.html#updating-the-po-files-with-the-new-content)ことを忘れないでください

## 壊れた Master への対処

- <https://handbook.gitlab.com/handbook/engineering/workflow/#broken-master>
- <https://handbook.gitlab.com/handbook/engineering/workflow/#merging-during-broken-master>

## ブラウザテスト

- ブラウザテスト: <https://docs.gitlab.com/ee/development/fe_guide/index.html#browser-support>
- E2E テストでの動的要素検証: <https://docs.gitlab.com/ee/development/testing_guide/end_to_end/dynamic_element_validation.html>

## テストとソフトウェア設計に関するリンク

テストについて:

- Vue test utils ガイド: <https://v1.test-utils.vuejs.org/guides/>
- 書籍: The way of the web tester: <https://pragprog.com/titles/jrtest/>
- モックに関するエッセイ: <https://martinfowler.com/articles/mocksArentStubs.html>
- クリーンアーキテクチャの書籍: <https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164>

Web セキュリティワークショップの後に受講したいいくつかの frontendmasters ワークショップ:

- <https://frontendmasters.com/courses/testing-practices-principles/>
- <https://frontendmasters.com/courses/testing-javascript/>

## JetBrains IDE の使用

**_移動済み: JetBrains IDE に関する専用ハンドブックセクションができました: <https://handbook.gitlab.com/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/>_**
