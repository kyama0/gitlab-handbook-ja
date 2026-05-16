---
title: "Linux のツールとヒント"
description: " GitLab における Linux ノート PC の利用に関する各種ツールやヒント"
upstream_path: /handbook/tools-and-tips/linux/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
lastmod: "2026-02-05T13:09:58-05:00"
---

Linux は macOS の代替として利用可能ですが、サポートが限定的なため推奨はされていません。Linux を選択した場合、自身の環境を維持する責任をすべて自分で負うことになり、IT がサポートを提供しないことを理解する必要があります。Slack には `#linux` チャンネルがありヒントやコツを交換できますが、これは公式のヘルプデスクリソースではありません。

以下は、可能な限りすばやく使い始められるよう、インストールが推奨される基本事項を解説したガイドです。

- ここに記載されているすべてが自分のユースケースに当てはまるとは限りません。
- このドキュメントでは、自分自身のデスクトップ／ウィンドウマネージャーなどの個人的な構成・設定のカスタマイズについては扱いません。
- このガイドは非常に汎用的な内容を意図しています。記載されているパッケージ名は変更されている可能性があるので注意してください。
- そして常にそうであるように、多くの事柄には複数のやり方があります。もし他にお気に入りの方法や慣れた方法があれば、自由にそちらを使い、このドキュメントにフィードバックしてください。

## 基本セットアップ

すべてのノート PC およびデスクトップシステム向けに [こちら](/handbook/security/corporate/end-user-services/laptop-management/laptop-security) に列挙されている基本事項に加えて、Linux には追加で必要なステップがあります。会社標準は **Ubuntu LTS（最新版）** が動作する Dell ノート PC で、これが唯一承認された Linux ディストリビューションです。詳細なインストール手順と必要なセキュリティツールについては、[Linux オンボーディングガイド](/handbook/security/corporate/end-user-services/onboarding101/linux-onboarding101/) を参照してください。

## 一般的なアプリケーション

- 以下のコマンドでファイアウォールを有効にします:

`$ sudo ufw enable`

- プロンプトは "Firewall is active and enabled on system startup" と応答します。
- インストールする一般的なアプリケーションには Google Chrome、Slack、Zoom などがあります。すべてが通常の Ubuntu リポジトリから利用できるわけではありませんが、それぞれのサイトから最新のインストール手順とともにダウンロードできます:
  - [Google Chrome](https://www.google.com/chrome/)
  - [Slack](https://slack.com/downloads/linux)
  - [Zoom](https://zoom.us/download)
  - その他のアイテムについては [ツールページ](/handbook/tools-and-tips/) を確認してください。

## Java の利用

Linux で利用される一部のアプリケーションは Java を必要とすることがあります。Oracle Java の最後のオープンソース版がリリースされたのは 2019 年 1 月で、それ以降のすべての新バージョンには有償／ライセンス購読が必要です。そのため GitLab は Oracle Java をサポートしておらず、すべてのチームメンバーに OpenJDK のようなオープンソース代替の使用を求めています。Oracle は Oracle Java のすべてのダウンロードを定期的に監査し、コンプライアンス違反の企業を積極的に追跡しています。そのため IT 部門は、チームメンバーのマシンで見つかったすべての Oracle Java インスタンスを削除するポリシーを適用しています。

正しいバージョンを使用していることを確認するには、`java -version` コマンドを使用してください。

OpenJDK がインストールされている場合、応答は次のようになります:

``` shell
$ java -version
openjdk version "11.0.14.1" 2022-02-08
OpenJDK Runtime Environment (build 11.0.14.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.14.1+1-Ubuntu-0ubuntu1.20.04, mixed mode, sharing)
```

Oracle Java がインストールされている場合、応答は次のようになります:

``` shell
$ java -version
java version "16.0.1" 2021-04-20
Java(TM) SE Runtime Environment (build 16.0.1+9-24)
Java Hotspot(TM) 64-Bit Server VM (build 16.0.1+9-24, mixed mode, sharing)
```

ほとんどのシステムでは OpenJDK 版が動作しているか、Java がインストールされていないかのいずれかになります。Java がインストールされておらず OpenJDK をインストールしたい場合は、`$ java -version` コマンドの実行後に表示されるインストール手順に従ってください。Oracle Java 版が動作している場合は、Ubuntu については [こちら](https://linuxhint.com/uninstall-java-ubuntu/) の手順に従ってください。

## Dell と Nvidia

一部の GitLab チームメンバーは、Dell 上の Nvidia ドライバーで問題に遭遇しています。たとえば、ノート PC を閉じた際のスリープ問題によるバッテリー消耗、ノート PC を起動した際のランダムなロックアップなどです。これが起こった場合は、以下のステップを検討してください:

- /etc/default/grub ファイルを確認します。`GRUB_CMDLINE_LINUX_DEFAULT` を含む行は次のようになっているかもしれません:

 `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"`

- この行を次のように編集します:

 `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash mem_sleep_default=deep"`

- それから grub を更新します:

 `$ sudo update-grub`

これは最新版の Nvidia ドライバー（2019 年 12 月時点）で動作することが報告されているため、ドライバーを更新できます。

## エンジニアリング／コーディングツール

- プログラミング言語向けには何らかのバージョンマネージャーを持つことが推奨されます。リポジトリから提供されるものは通常十分ではないからです。
  - [asdf](https://github.com/asdf-vm/asdf) はかなり優れており、多くのプラットフォームで利用できます。
    - このプロジェクトには、必要となる各種パッケージや言語を制御するための [大量のプラグイン](https://github.com/asdf-vm/asdf-plugins) が含まれています。
  - [mise](https://mise.jdx.dev/) は組織全体で広く使われている、`asdf` 互換のモダンな代替です。
- その他の一般的なパッケージ - 以下は仕事の領域に関わらず常に必要となるように見えるものです:
  - `gcc`
  - `git`
  - `libssl-dev`
  - `make`
  - `zlib1g-dev`
- 私たちの [セキュリティプラクティス](/handbook/security/) に従ってください:

## プロダクションエンジニアリング

- プロダクションエンジニアの場合、以下を検討してください:
  - [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
  - [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
  - [Docker](https://docs.docker.com/get-started/get-docker/)
  - [Vagrant](https://developer.hashicorp.com/vagrant/install)
  - [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)
  - [gcloud CLI](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version)
- その他の重要なパッケージ:
  - `gnupg2`
  - `pwgen`
  - `scdaemon`
  - `yubikey-personalization`
- 上記の `asdf` の利用を選択した場合、将来的にいくつかのツールをインストールできるようプラグインをいくつか入れておきましょう:
  - `asdf plugin-add golang`
  - `asdf plugin-add kubectl`
  - `asdf plugin-add minikube`
  - `asdf plugin-add ruby`
  - `asdf plugin-add terraform`
- それから、上記のうちどのバージョンをインストールする必要があるかを確認します。
  - 該当するリポジトリを確認するか、誰かに尋ねてください（記載のバージョンは例です）:
  - `asdf install ruby 2.4.4`
  - `asdf install terraform 0.11.5`

## 開発

- 開発では、おそらく次のパッケージのインストールが必要になります:
  - `cmake`
  - `g++`
  - `krb5`
  - `libkrb5-dev`
  - `libmysqlclient-dev`
  - `libpq-dev`
  - `libre2-dev`
  - `libsqlite3-dev`
- 上記の `asdf` の利用を選択した場合、将来的にいくつかのツールをインストールできるようプラグインをいくつか入れておきましょう:
  - `asdf plugin-add nodejs`
  - `asdf plugin-add postgres`
  - `asdf plugin-add ruby`
- それから、上記のうちどのバージョンをインストールする必要があるかを確認します。
  - 該当するリポジトリを確認するか、誰かに尋ねてください（記載のバージョンは例です）:
  - `asdf install ruby 2.4.4`
  - `asdf install nodejs 8.11.3`

## 指紋リーダーの有効化

承認された Dell ノート PC のいくつかには、公式 Ubuntu イメージではサポートされていない指紋リーダーが搭載されています。しかし、[fprintd](https://fprint.freedesktop.org/) を利用することで指紋リーダーを有効化できます。

- 必要なソフトウェアをインストールします:

``` shell
sudo apt install fprintd libpam-fprintd
```

- PAM 設定を更新します:

``` shell
sudo pam-auth-update
```

- ターミナルやその他のパスワードプロンプトで指紋認証を有効にするため、`/etc/pam.d/common-auth` 設定を編集します。`auth [success=1 default=ignore] pam_unix.so nullok_secure` の行を見つけて、次の 2 行に置き換えます。

``` shell
auth    [success=2 default=ignore]      pam_fprintd.so max-tries=3 timeout=10
auth    [success=1 default=ignore]      pam_unix.so nullok_secure
```

  なお、`max-tries` はパスワード入力を求められる前に指紋スキャンを試みられる回数で、`timeout` は認証がタイムアウトするまでに指紋をスキャンできる時間です。これらは要件に合わせて設定できます。

- ログイン画面（`sddm`）で指紋認証を有効にするには、`/etc/pam.d/sddm` ファイルを編集し、**ファイルの先頭** に次の行を追加します。

``` shell
auth        sufficient        pam_unix.so try_first_pass likeauth nullok
auth        sufficient        pam_fprintd.so
```

- 最後に、`fprintd` で指紋を登録します:

``` shell
fprintd-enroll $USER
```

これで指紋ログインと認証が有効化されました！sddm ログイン画面のユーザーインターフェースは直感的でないことに注意してください。通常通りパスワード入力欄が表示されます。Enter を押すと画面が少し暗くなります。これで指紋をスキャンしてログインできます。

## トラブルシューティング

### Wayland 上の GNOME での Zoom 画面共有

Wayland 上の GNOME でユーザーの画面を共有するため、Zoom はプライベートなスクリーンショット API を使用して連続したスクリーンショットをストリームに連結します。[GNOME 41 以降、これらのプライベート D-Bus API はセキュリティ上の理由から本来の呼び出し元に制限されているため、そのハックは動作しなくなりました。](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/4665#note_1283742)。

回避策として、[looking glass](https://wiki.gnome.org/Projects/GnomeShell/LookingGlass) を使って `global.context.unsafe_mode = true` を設定できます。デフォルトのセキュリティ設定に戻すには、セッションを終了するか `global.context.unsafe_mode = true` を実行します。

この回避策にはいくつか注意点があります。

- セキュリティ設定を無効化することになります。（これはデフォルトの Xorg セッションよりも悪いわけではありません。）
- 画面共有セッションを開始する際、Zoom が約 15 秒フリーズします。「アプリケーションが応答していません」のダイアログが現れた場合は待ち、「ディスプレイを選択」プロンプトが表示されます。
- デスクトップ全体は共有できますが、個別のアプリケーションウィンドウは共有できません。
- 画面共有セッションを終了する際、Zoom が約 5 秒フリーズします。
- この回避策はログインのたびに適用する必要があります。

### よくある問題

以下は、Linux で問題となる一般的な状況のリストです。

- 次のコンポーネントが期待どおりに動作することを確認したいでしょう:
  - 各種ヘッドフォンを通したオーディオ
  - ビデオキャプチャ - Zoom のビデオと Zoom の画面共有
  - ディスプレイ - 画面解像度やビデオカード関連の問題
- Linux で Okta に問題がある場合、最新の Chrome（Chromium ではなく）と、Yubi-Key またはカスタム ROM を載せていないスマートフォンを使用してください。
