---
title: Zoom 録画
description: Zoom 録画 - セットアップと設定
aliases:
  - /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording/
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-recording/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

## 目次

- [Zoom での録画](#recording-in-zoom)
  - [ギャラリービューを使用して全参加者を録画する](#record-all-participants-using-gallery-view)
  - [Zoom ミーティングを HD で録画する](#recording-zoom-meetings-in-hd)
  - [自動録画](#auto-recording)
  - [共有ドライブ録画](#shared-drive-recording)
  - [録画権限を持つミーティングホストを識別する方法](#how-to-identify-the-meeting-host-with-recording-permissions)
  - [ホストが不在の場合に録画を許可する方法](#how-to-allow-recording-when-the-host-is-not-present)
    - [Web サイトを使用する](#using-the-website)
    - [Zoom アプリを使用する](#using-the-zoom-app)
  - [録画動画の文字起こし](#recording-video-transcripts)

## Zoom での録画 {#recording-in-zoom}

Zoom ミーティングを録画できるようにするには、まず Zoom プロフィールで録画を有効にする必要があります。\
[Recording Settings](https://zoom.us/profile/setting?tab=recording)からこのページにアクセスできます。\
録画するにはサインインしている必要があります。

### ギャラリービューを使用して全参加者を録画する {#record-all-participants-using-gallery-view}

デフォルトの録画ビューを `Gallery view` に設定することを検討してください。

設定するには:

1. zoom.us にログインします。
1. 左側のサイドバーの Settings タブをクリックし、次に上部の横方向オプションの Recording タブをクリックします
1. `Record gallery view with shared screen` が選択されていることを確認します
1. `Record active speaker with shared screen` と `Record active speaker, gallery view and shared screen separately` の選択を解除します
1. 保存してください。

Zoom サポートの録画に関する一般情報は[こちら](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059856)でも確認できます

### Zoom ミーティングを HD で録画する {#recording-zoom-meetings-in-hd}

1. [Zoom プロフィール設定](https://gitlab.zoom.us/profile/setting)に移動します
1. 上部メニューの `Meeting` タブをクリックします
1. `In Meeting (Advanced)` サイドタブをクリックします
1. `Meeting-HD Video Quality` セクションまでスクロールし、トグルを押します
1. `Full HD (1080P)` ラジオボタンを選択します
1. `Save` ボタンを押します

これで、Zoom ミーティングをフル HD で録画するよう設定が更新されます。

### 自動録画 {#auto-recording}

ミーティングを自動録画するには、[クラウド録画](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067954)を設定します

Zoom を設定して、クラウドに自動保存することもできます。

1. "My Meeting Settings" に移動して "Recording" セクションを見つけ、"Cloud Recording" をクリックします
1. ミーティングのトピックを設定することは重要です。設定しない場合、すべてのミーティングが一般的な名前で録画されます
1. 録画が完了すると、動画は Zoom アカウントの "Recordings" セクションに表示されません

### 共有ドライブ録画 {#shared-drive-recording}

<div class="w3-panel w3-yellow">
  <h3>注意！</h3>
  <p>この方法で保存した録画は、会社全体に表示されます。プライベートまたは機密情報を含むミーティングには使用しないでください。</p>
</div>

- Zoom のミーティングトピック（<https://zoom.us/> にログインして編集可能）に `[REC]` というテキストが含まれている場合、これらの録画は `GitLab Videos Recorded` の下にある Google Drive のフォルダーに自動保存されます（[Google Hidden shared drives](https://drive.google.com/drive/shared-drives-hidden)からアクセス可能）
- フォルダー名の先頭にはホストのメールアドレスが付きます。例えば、ホストが `someuser@gitlab.com` でミーティングタイトルが `Company Training [REC]` の場合、フォルダーは `someuser@gitlab.com-Company Training` と表示されます
- [スクリプト](https://gitlab.com/gitlab-com/zoom-sync/-/blob/a73aee8f5921ac3fec16b74232ac17add4e33afb/zoom-sync.rb)（[zoom-sync プロジェクト](https://gitlab.com/gitlab-com/zoom-sync)から）は、毎時録画を同期します
- タイトルを変更せずにミーティングを自動アップロードしやすくするため、同期スクリプトでは[許可リスト](https://gitlab.com/gitlab-com/zoom-sync#allow-list)も使用します
- ミーティングタイトルが、指定したホストのメールアドレスを持つ提供された正規表現に一致する場合、そのミーティングも Google Drive にアップロードされます。[現在のリスト](https://gitlab.com/gitlab-com/zoom-sync/-/blob/master/zoom_sync.yml)を変更するにはマージリクエストを作成してください。

### 録画権限を持つミーティングホストを識別する方法 {#how-to-identify-the-meeting-host-with-recording-permissions}

ミーティングに参加した後、以下のいずれかの方法でこの情報を確認できます。

1. 参加者サイドバーを使用
   1. ウィンドウ下部の参加者アイコンに移動します
   1. ウィンドウ右側のパネルに参加者リストが表示されます
   1. ホストは名前の末尾に括弧内で表示されます。（参加者ウィンドウのサイズ変更が必要になる場合があります）
1. ミーティング情報ポップアップを使用
   1. 左上隅に移動すると、i アイコンが表示されます
   1. アイコンを選択して、通話を録画できるミーティングホストを見つけます

### ホストが不在の場合に録画を許可する方法 {#how-to-allow-recording-when-the-host-is-not-present}

これは通常、ホストが常に参加できるとは限らない定期ミーティングで発生します。

ミーティング作成者は、参加できない場合でも他の人が録画を開始できるよう、同僚を `Alternative Hosts` として追加する必要があります。

#### Web サイトを使用する {#using-the-website}

1. `https://gitlab.zoom.us/meeting/<meeting id>/edit` に移動します
1. 下までスクロールして "Alternative Hosts" を見つけます
1. 1 人以上の同僚のメールアドレスをコンマで区切って追加します
1. Save をクリックします

#### Zoom アプリを使用する {#using-the-zoom-app}

1. "Meetings" をクリックします
1. アプリの左側でミーティングを見つけます
1. アプリの右側にある "Edit" をクリックします
1. ウィンドウ下部の "Advanced Options" ドロップダウンを展開します
1. 下部にある "Alternative Hosts" ボックスを見つけます
1. 1 人以上の同僚のメールアドレスをセミコロンで区切って追加します
1. Save をクリックします。

### 録画動画の文字起こし {#recording-video-transcripts}

- [クローズドキャプションとライブ文字起こし](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062490)はすべてのユーザーでデフォルトで有効ですが、ホストがミーティング開始後に手動で有効にしない限り、参加者には字幕が表示されません
- 録画されたミーティングの終了後、文字起こしは他の録画ファイルと同じフォルダー内のテキストファイルで利用できます
- ローカル録画の場合、文字起こしは `closed_caption.txt` に保存されますが、共同ホストが有効にした場合のみです
- クラウド録画の場合、ファイル名は `.transcript.txt` で終わり、完全な文字起こしが常に利用できます。処理には約 15 分かかるため、動画ファイルは文字起こしより先に表示されます
