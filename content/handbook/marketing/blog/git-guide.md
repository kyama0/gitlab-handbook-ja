---
title: "ブログコントリビューター向け Git ガイド"
description: "Git、ターミナル、www-gitlab-com リポジトリを使用するためのガイド"
upstream_path: /handbook/marketing/blog/git-guide/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
translated_at: "2026-07-06T07:50:45+09:00"
translator: codex
stale: false
lastmod: "2026-06-29T08:59:00-04:00"
---

## 一般的なヒント

このガイドは GitLab の使用方法とローカルマシンでの Git の使用方法についての知識がある程度あることを前提としています。何かの意味がわからない場合は、ローカルで Web サイトを編集するためのコンピューターのセットアップ方法を説明している[ハンドブックの編集](/handbook/about/editing-handbook/#editing-the-handbook)を確認する必要があるかもしれません。

### ターミナルを最新の状態に保つ

その日の作業を始めるとき、ターミナルで `git pull origin master` を実行して、他の人から最新のファイルと変更をローカルに取得するようにしてください。これにより、マージコンフリクトやファイルの上書きを避けることができます。
これを行う際は、正しいディレクトリ（例: MacBook-Pro:www-gitlab-com user$）にいることを確認してください。

一日を通じて `git pull` を実行して最新の変更をローカルに取得することもできます。

### 変更のコミットとプッシュ

変更のコミットはコンピューターへの保存に似ています。ブログ投稿ファイルを編集するか、新しいファイルを追加してから、コミットして保存します。変更のプッシュは、それらの変更を共有ディレクトリ（Google ドライブなど）にアップロードするようなものです。つまり、他のチームメンバーが GitLab.com の MR で変更を確認できるようになります。

まず、ターミナルで `git checkout 0000-branch-name`[Enter] を使用して正しいフィーチャーブランチにいることを確認してください。

#### リポジトリ内のファイルの追加、変更、更新

ターミナルで `git status` [Enter] を実行して変更したすべてのファイルを確認します。`Git add .` [Enter] はこれらのファイル（および作成したファイル）をコミットのためにステージングします。

次に、`git commit -m "[説明的なメッセージをここに]"` [Enter] でコミットメッセージを追加する必要があります。

これで `git push origin 0000-branch-name` [Enter] を使用して、ローカルの変更を `0000-branch-name` にプッシュする準備ができました。

#### 早めに頻繁にコミットする

早めに頻繁にコミットしてください。複数の大きなファイルに対して作業してからすべてのファイルをまとめてコミット・プッシュすることは避けてください（インターネット接続によっては、プッシュに数分、最悪の場合は数時間かかる場合があります。タイムアウトする可能性もあります）。
`git pull` [Enter] を時々実行して、最新の変更・更新をローカルに持っていることを確認してください。

### Static Site Editor 開発者向けヒント

Static Site Editor グループが[こちらの Git ヒント](/handbook/engineering/devops/create/remote-development/developer-cheatsheet/#git-tips)をまとめています。

## メインブランチからの最新変更の取得

### マージワークフローをいつどのように使用するか

**複数の人が作業している**フィーチャーブランチにはマージワークフローを使用してください。MR をマスターにマージする際は、組み込みの[スカッシュとマージ](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html)機能を使用して、クリーンなアトミックでスカッシュされたコミットのみがマスターに到達するようにしてください。

```console
git checkout 0000-branch-name
git fetch
git merge origin/master
git push origin  0000-branch-name
```

### リベースとは何ですか？なぜ気にする必要があるのですか？

マージリクエストにしばらく作業していて多くの変更をコミットした場合、他の人が Web サイトのメインブランチに加えた変更を反映するために MR をリベース（更新）する必要があるかもしれません。これにより、[マージコンフリクト](#how-to-resolve-merge-conflicts)（他の誰かの変更があなたの変更と競合し、Git がどちらを受け入れるかわからない場合）や、古い MR に反映されていない技術的変更によるパイプラインの失敗を防ぐことができます。

リベースするには、ターミナルで以下のコマンドを実行してください:

```console
git checkout 0000-branch-name
git fetch
git rebase origin/master
git push origin  0000-branch-name
```

## マージコンフリクトの解決方法 {#how-to-resolve-merge-conflicts}

### 公式 GitLab ドキュメント

こちらが GitLab での[マージリクエストのコンフリクト解決に関する公式ドキュメント](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html)です。

[GitLab UI からのマージコンフリクトの解決](https://about.gitlab.com/blog/2016/09/06/resolving-merge-conflicts-from-the-gitlab-ui/)についての優れたブログ投稿もあります。

### ローカルブランチに変更を加えていない場合のマージコンフリクト

ローカルブランチに変更を加えておらず、オリジンからコンフリクトメッセージが出ている場合は、ローカルブランチをオリジンとまったく同じ状態にリセットしてください。**警告: ブログ投稿に変更を加えている場合、それらの変更は失われます！**

```console
git fetch
git checkout 0000-branch-name
git reset -hard  origin/0000-branch-name
```

## Git のヘルプ

### Slack チャンネル

Git で問題がある場合は、以下の Slack チャンネルで連絡してください。

- [#git-help](https://app.slack.com/client/T02592416/C1E21S2LD)
- [#mr-buddies](https://app.slack.com/client/T02592416/CLM8K5LF4)

### 既存のリソース

Git のための GitLab の既存リソースをいくつか紹介します。

- [デベロッパーチートシート、エンジニアリング ハンドブック](/handbook/engineering/devops/create/remote-development/developer-cheatsheet/)
- [プレス向け Git チートシート](/pdfs/press/git-cheat-sheet.pdf)
