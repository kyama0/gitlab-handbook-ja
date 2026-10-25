---
title: "macOS のツールとヒント"
upstream_path: /handbook/tools-and-tips/mac/
upstream_sha: 37ce9f1fc6cb7cd8a0a8cf470c0de27d2cb53329
translated_at: "2026-10-25T21:00:25Z"
translator: claude
stale: false
lastmod: "2026-10-23T12:38:14-05:00"
---

このページでは、macOS 向けのさまざまなヒントとツールを紹介します。

## macOS のヒント {#macos-tips}

macOS を使い始めたばかりの方に役立つヒントをいくつか紹介します。
すでに使い慣れている方でも、これらの[キーボードショートカット](https://support.apple.com/en-us/102650)が役立つかもしれません。

Windows から macOS に切り替える場合は、[こちらのヒント](https://support.apple.com/en-us/102323)が役立つかもしれません。

## スクリーンショットや動画の撮影 {#taking-screenshots-and-videos}

macOS には、便利なスクリーンショットのキーボードショートカットがいくつかあります。

- `command + shift + 3` - 画面全体のスクリーンショットを撮影します（複数の画面がある場合は、画面ごとに画像が作成されます）
- `command + shift + 4` - 画面上の範囲を選択してスクリーンショットを撮影できます（選択した範囲の画像が 1 枚作成されます）
- `command + shift + 5` - 上記のすべての操作に加えて、画面全体または一部の動画（音声付き）を作成できるツールが起動します。

`command + shift + 3` および `command + shift + 4` の場合、control キーも同時に押すと（つまり `command + shift + control + 3`）、スクリーンショットがクリップボードに保存されます。あるいは、右下のスクリーンショットプレビューをすばやく選択して `command + c` を押すこともできます。

クリップボードに保存したスクリーンショットは、`command + v` で多くのアプリケーションに貼り付けられます。GitLab では、Issue の説明、コメント、Web IDE にスクリーンショットを貼り付けられます。

クリップボードにスクリーンショットがある場合は、`Preview` を開いて `File -> New from clipboard` を使い、クリップボードから画像を作成できます。

画面録画には、Quicktime Player を使って画面の一部または全体をキャプチャできます。
アプリケーションを開き、`File` メニューから `New Screen Recording` を選択するか、`command + control + n` を押します。

### スクリーンショットの生産性向上のヒント {#screenshot-productivity-tips}

スクリーンショットを自動的に圧縮して指定のディレクトリに移動し、`Desktop` ディレクトリがスクリーンショットのファイルで散らからないようにするには、GitLab Unfiltered のブログ記事「[スクリーンショットを 80% 小さくする簡単な方法](https://about.gitlab.com/blog/2020/01/30/simple-trick-for-smaller-screenshots/)」を参照してください。

## macOS の通知センターを無効にする {#disabling-macos-notification-center}

プレゼンテーションや画面共有中に、気が散ったり、気まずい思いをしたりしないよう、macOS の通知を無効にしたい場合があります。

通知センターは、画面右上のメニューバーアイコンを Option キーを押しながらクリックすると、すばやく無効にできます。
これにより、翌日まで通知が無効になります。
再度 Option キーを押しながらクリックすると、すぐに有効に戻せます。
あるいは、通知センターのアイコンをクリックして *上* にスクロールすると、「おやすみモード」の切り替えスイッチが表示されます。

Touch Bar を備えた MacBook を使っている場合は、Control Strip に便利な「おやすみモード」ボタンを割り当てられます。
システム環境設定でキーボード設定に移動し、「Control Strip をカスタマイズ...」をクリックして追加します。

## 画面のロック {#locking-your-screen}

### macOS のメニューバーから {#on-your-macos-menu-bar}

1. Apple ロゴ  のメニューをクリックします
1. 「画面をロック」をクリックします

あるいは、キーボードショートカット `⌃+⌘+Q` (`ctrl+cmd+Q`) を使うか、Mac または Magic Keyboard で利用できる場合は Touch ID を押します。

### macOS の Touch Bar から {#on-your-macos-touch-bar}

1. `System Preferences > Keyboard` を開きます
1. `Customize Control Strip…` をクリックします
1. `Screen Lock` アイコンを Touch Bar にドラッグします
1. 完了です!

## Docker Desktop {#docker-desktop}

Docker Desktop はライセンスが必要なツールで、利用が承認されています。[Tech Stack](/handbook/business-technology/tech-stack-applications/)の手順に従ってアクセスできます。

Docker Desktop の有償ライセンスの数には限りがあります。以下のオープンソースの代替ツールは、無料の代替手段としてメンテナンスされているようです（2025-02-28 時点）。まず、これらを試してください。

1. [Rancher Desktop](https://rancherdesktop.io/)
1. [Colima](https://gitlab.com/-/snippets/2259133)

これらの代替ツールが動作しない場合は、以下の手順に従って Docker へのアクセスをリクエストしてください。

1. `@gitlab.com` のメールアドレスを使い、[hub.docker.com](https://hub.docker.com)にアカウントを作成します。会社のメールアドレス以外ではアクセスを取得できません。
1. Access_Change_Request テンプレートで[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issue%5Bmilestone_id%5D=)を作成し、上記の代替ツールを利用できない理由を詳しく記載します。
1. マネージャーがリクエストを承認したら、このシステムについて [Tech Stack] に記載されている System Provisioner にアサインします。

アクセスがプロビジョニングされると、特定の `dockerdesktop` チームに追加されたことを知らせるメールが届きます。その後、[Docker desktop をインストール](https://www.docker.com/products/docker-desktop/)し、登録したアカウントでログインできます。

ライセンス数には限りがあるため、プロビジョニングに時間がかかったり、一時的にチームへのアクセスを取得できなかったりする場合があります。

将来このプロダクトを使わなくなった場合は、[アクセス変更リクエストを提出](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issue%5Bmilestone_id%5D=#)し、[Tech Stack](/handbook/business-technology/tech-stack-applications/)に記載されているプロビジョニング担当者にアサインしてください。これにより、そのライセンスを別の人に割り当てられます。

## Java の利用 {#usage-of-java}

MacOS で使う一部のアプリケーションには、Java が必要な場合があります。Oracle Java の最後のオープンソース版は 2019 年 1 月にリリースされました。それ以降の新しいバージョンには、すべて有償のライセンス契約が必要です。そのため、GitLab は Oracle Java のサポートを終了し、すべてのチームメンバーに OpenJDK などのオープンソースの代替ツールの使用を求めています。Oracle は Oracle Java のすべてのダウンロードを定期的に監査し、ライセンスに違反している企業を積極的に追及しています。そのため、IT 部門はチームメンバーのマシンで見つかったすべての Oracle Java を削除するポリシーを適用しています。

正しいバージョンを使用しているかを確認するには、`java -version` コマンドを使います。

OpenJDK がインストールされている場合は、次のような応答が表示されます。

``` shell
$  java -version
openjdk version "18.0.1" 2022-04-19
OpenJDK Runtime Environment Zulu18.30+11-CA (build 18.0.1+10)
OpenJDK 64-Bit Server VM Zulu18.30+11-CA (build 18.0.1+10, mixed mode, sharing)
```

Oracle Java がインストールされている場合は、次のような応答が表示されます。

``` shell
$ java -version
java version "16.0.1" 2021-04-20
Java(TM) SE Runtime Environment (build 16.0.1+9-24)
Java Hotspot(TM) 64-Bit Server VM (build 16.0.1+9-24, mixed mode, sharing)
```
