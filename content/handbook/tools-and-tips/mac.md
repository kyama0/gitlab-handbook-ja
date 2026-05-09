---
title: "macOS のツールとヒント"
upstream_path: /handbook/tools-and-tips/mac/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
---

このページでは macOS 向けの様々なヒントとツールを紹介します。

## macOS のヒント

macOS を使い始めたばかりの方に役立つヒントをいくつか紹介します。
すでに使い慣れている方でも、これらの [キーボードショートカット](https://support.apple.com/en-us/102650) は便利かもしれません。

Windows から macOS に切り替えた場合、[こちらのヒント](https://support.apple.com/en-us/102323) が役立つかもしれません。

## スクリーンショットや動画の撮影

macOS には、便利なスクリーンショットのキーボードショートカットがいくつかあります:

- `command + shift + 3` - 画面全体（複数ある場合は各画面ごと）のスクリーンショットを撮影します（持っている画面の数だけ画像が作成されます）
- `command + shift + 4` - 画面上のエリアを選択してスクリーンショットを撮影できます（選択したエリアの画像が 1 枚作成されます）
- `command + shift + 5` - 上記のすべてに加えて、画面の全部または一部の動画（音声付き）を作成できるツールが起動します。

`command + shift + 3` および `command + shift + 4` の場合、control キーも同時に押すと（つまり `command + shift + control + 3`）、スクリーンショットがクリップボードに保存されます。あるいは、右下のスクリーンショットプレビューをすばやく選択して `command + c` を押すこともできます。

クリップボードからのスクリーンショットは、`command + v` で多くのアプリケーションに貼り付けられます。GitLab では Issue の説明、コメント、Web IDE への貼り付けをサポートしています。

クリップボードにスクリーンショットがある場合、`Preview` を開いて `File -> New from clipboard` を使ってクリップボードから画像を作成できます。

画面録画には Quicktime Player を使用してエリアまたは画面全体をキャプチャできます。
アプリケーションを開いて `File` メニューの `New Screen Recording` を選択するか、`command + control + n` を押します。

### スクリーンショットの生産性向上のヒント

スクリーンショットを自動的に圧縮して指定のディレクトリに移動させ、`Desktop` ディレクトリがスクリーンショットファイルで散らからないようにするには、GitLab Unfiltered のブログ記事をチェックしてください: [One simple trick to make your screenshots 80% smaller](https://about.gitlab.com/blog/2020/01/30/simple-trick-for-smaller-screenshots/)。

## macOS の通知センターを無効化する

プレゼンテーションや画面共有中、気が散ることや恥ずかしい思いをするのを防ぐため、macOS の通知を無効にしたいことがあるかもしれません。

通知センターは、画面右上のメニューバーアイコンを Option キーを押しながらクリックすると、すばやく無効にできます。
これにより翌日まで通知が無効になります。
再度 Option クリックすると即座に再有効化されます。
あるいは、通知センターアイコンをクリックして *上* にスクロールすると「おやすみモード」のトグルが現れます。

ノート PC が Touch Bar を備えた MacBook の場合、Control Strip に便利な「おやすみモード」ボタンを割り当てられます。
システム環境設定でキーボード設定に移動し、「Control Strip をカスタマイズ...」をクリックして追加してください。

## 画面のロック

### macOS のメニューバーから

1. アップルロゴ メニューをクリックします
1. 「画面をロック」をクリックします

あるいは、キーボードショートカット `⌃+⌘+Q` (`ctrl+cmd+Q`) を使うか、Mac または Magic Keyboard で利用可能な場合は Touch ID を押すことができます。

### macOS の Touch Bar から

1. `システム環境設定 > キーボード` を開きます
1. `Control Strip をカスタマイズ…` をクリックします
1. `Screen Lock` アイコンを Touch Bar にドラッグします
1. 完了です！

## Docker Desktop

Docker Desktop はライセンスツールであり、利用が承認されています。アクセスについては [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) の手順を参照してください。

Docker Desktop の有償ライセンスは限られた数しか利用できません。以下のオープンソース代替（2025-02-28 時点でメンテナンスされている模様）が無償の代替として利用可能で、まずこれらを試すべきです:

1. [Rancher Desktop](https://rancherdesktop.io/)
1. [Colima](https://gitlab.com/-/snippets/2259133)

これらの代替が動作しない場合は、以下のステップに従って Docker へのアクセスをリクエストしてください:

1. `@gitlab.com` メールアドレスで [hub.docker.com](https://hub.docker.com) のアカウントを作成します。会社のメールアドレス以外でアクセスすることはできません。
1. Access_Change_Request テンプレートで [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issue%5Bmilestone_id%5D=) を作成し、（上記の通り）なぜ代替案が選択肢にならないのかを詳述します。
1. マネージャーがリクエストを承認したら、このシステムについて [Tech Stack] にリストされている System Provisioner にアサインしてください。

アクセスがプロビジョニングされると、特定の `dockerdesktop` チームに追加された旨のメール通知を受け取ります。その後、[Docker Desktop をインストール](https://www.docker.com/products/docker-desktop/) し、登録したアカウントでログインできます。

ライセンスの数は限られているため、プロビジョニングに時間がかかったり、一時的にチームへのアクセスが取得できないことがあります。

将来このプロダクトを使いたくなくなった場合は、[アクセス変更リクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issue%5Bmilestone_id%5D=#) を提出し、[Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) にリストされている provisioner にアサインしてください。これにより、ライセンスを別の人に割り当てられるようになります。

## Java の利用

macOS で利用される一部のアプリケーションは Java を必要とすることがあります。Oracle Java の最後のオープンソース版がリリースされたのは 2019 年 1 月で、それ以降のすべての新バージョンには有償／ライセンス購読が必要です。そのため GitLab は Oracle Java をサポートしておらず、すべてのチームメンバーに OpenJDK のようなオープンソース代替の使用を求めています。Oracle は Oracle Java のすべてのダウンロードを定期的に監査し、コンプライアンス違反の企業を積極的に追跡しています。そのため IT 部門は、チームメンバーのマシンで見つかったすべての Oracle Java インスタンスを削除するポリシーを適用しています。

正しいバージョンを使用していることを確認するには、`java -version` コマンドを使用してください。

OpenJDK がインストールされている場合、応答は次のようになります:

``` shell
$  java -version
openjdk version "18.0.1" 2022-04-19
OpenJDK Runtime Environment Zulu18.30+11-CA (build 18.0.1+10)
OpenJDK 64-Bit Server VM Zulu18.30+11-CA (build 18.0.1+10, mixed mode, sharing)
```

Oracle Java がインストールされている場合、応答は次のようになります:

``` shell
$ java -version
java version "16.0.1" 2021-04-20
Java(TM) SE Runtime Environment (build 16.0.1+9-24)
Java Hotspot(TM) 64-Bit Server VM (build 16.0.1+9-24, mixed mode, sharing)
```

ほとんどのシステムでは OpenJDK 版が動作しているか、Java がインストールされていないかのいずれかになります。Java がインストールされておらず OpenJDK をインストールしたい場合は、アプリケーションフォルダにある **Self Service** アプリを開き、Java 18 - Open Source というアプリをダブルクリックしてください。

![Self Service の Java 18 エントリ](/images/tools-and-tips/java_app_in_self_service.png)

Oracle Java 版が動作している場合、IT 部門から次のようなポップアップで自動的に通知されます:

![古い Java に関する Jamf 警告](/images/tools-and-tips/java_it_removal_notification.png)

そして、お使いのマシンから削除されます。
