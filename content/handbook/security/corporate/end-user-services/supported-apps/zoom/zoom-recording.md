---
title: Zoom 録画
description: Zoom 録画 - セットアップと設定
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 目次

- [Zoom での録画](#recording-in-zoom)
  - [ギャラリービューを使用してすべての参加者を録画する](#record-all-participants-using-gallery-view)
  - [Zoom ミーティングを HD で録画する](#recording-zoom-meetings-in-hd)
  - [自動録画](#auto-recording)
  - [共有ドライブへの録画](#shared-drive-recording)
  - [録画権限を持つミーティングホストを特定する方法](#how-to-identify-the-meeting-host-with-recording-permissions)
  - [ホストが不在のときに録画を許可する方法](#how-to-allow-recording-when-the-host-is-not-present)
    - [ウェブサイトの使用](#using-the-website)
    - [Zoom アプリの使用](#using-the-zoom-app)
  - [ビデオの文字起こしを録画する](#recording-video-transcripts)

## Zoom での録画 {#recording-in-zoom}

Zoom ミーティングを録画できるようにするには、まず Zoom プロフィールで録画を有効にする必要があります。\
このページには [録画設定](https://zoom.us/profile/setting?tab=recording) からアクセスできます。\
録画機能を使用するには、サインインしている必要があります。

### ギャラリービューを使用してすべての参加者を録画する {#record-all-participants-using-gallery-view}

デフォルトの録画ビューを `Gallery view` に設定することを検討してください。

これを行うには:

1. zoom.us にログインします。
1. 左サイドバーの Settings タブをクリックし、上部の水平オプションの Recording タブをクリックします
1. `Record gallery view with shared screen` が選択されていることを確認します
1. `Record active speaker with shared screen` および `Record active speaker, gallery view and shared screen separately` の選択を解除します
1. 必ず保存してください。

録画に関する一般的な情報は、Zoom サポートの [こちら](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059856) でも読むことができます

### Zoom ミーティングを HD で録画する {#recording-zoom-meetings-in-hd}

1. [Zoom プロフィール設定](https://gitlab.zoom.us/profile/setting) に移動します
1. 上部メニューの `Meeting` タブをクリックします
1. サイドタブの `In Meeting (Advanced)` をクリックします
1. `Meeting-HD Video Quality` セクションまでスクロールダウンし、トグルを押します
1. `Full HD (1080P)` ラジオボタンを選択します
1. `Save` ボタンを押します

これで、Zoom ミーティングをフル HD で録画するように設定が更新されます。

### 自動録画 {#auto-recording}

ミーティングを自動録画するには、[クラウド録画](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067954) をセットアップします

Zoom を、自動的にクラウドに保存するように設定することもできます。

1. "My Meeting Settings" にアクセスし、"Recording" セクションを見つけて "Cloud Recording" をクリックします
1. ミーティングのトピックを設定することは重要です。そうしないと、すべてのミーティングが汎用的な名前で録画されます
1. 録画が完了すると、動画は Zoom アカウントの "Recordings" セクションには表示されません

### 共有ドライブへの録画 {#shared-drive-recording}

<div class="w3-panel w3-yellow">
  <h3>注意!</h3>
  <p>この方法を使用して保存された録画は、会社全体に表示されます。プライベートまたは機密情報を含むミーティングには使用しないでください。</p>
</div>

- Zoom のミーティングトピック (<https://zoom.us/> にログインして編集可能) に `[REC]` というテキストが含まれている場合、これらの録画は自動的に Google Drive 上の `GitLab Videos Recorded` の下にあるフォルダに保存されます ([Google の非表示の共有ドライブ](https://drive.google.com/drive/shared-drives-hidden) からアクセス可能)
- フォルダの名前にはホストのメールアドレスがプレフィックスとして付きます。例えば、ホストが `someuser@gitlab.com` でミーティングタイトルが `Company Training [REC]` の場合、フォルダは `someuser@gitlab.com-Company Training` として表示されます
- [スクリプト](https://gitlab.com/gitlab-com/zoom-sync/-/blob/a73aee8f5921ac3fec16b74232ac17add4e33afb/zoom-sync.rb) ([zoom-sync プロジェクト](https://gitlab.com/gitlab-com/zoom-sync) から) は、1 時間ごとに録画を同期します
- タイトルを変更せずにミーティングを自動的にアップロードしやすくするため、同期スクリプトは [許可リスト](https://gitlab.com/gitlab-com/zoom-sync#allow-list) も使用します
- ミーティングタイトルが指定されたホストのメールアドレスとともに提供された正規表現にマッチする場合、ミーティングも Google Drive にアップロードされます。[現在のリスト](https://gitlab.com/gitlab-com/zoom-sync/-/blob/master/zoom_sync.yml) を変更するためにマージリクエストを提出してください。

### 録画権限を持つミーティングホストを特定する方法 {#how-to-identify-the-meeting-host-with-recording-permissions}

ミーティングに参加した後、以下の方法のいずれかを使用してこの情報を見つけることができます。

1. 参加者サイドバー経由
   1. ウィンドウの下部にある参加者アイコンに移動します
   1. ウィンドウの右パネルに参加者のリストが表示されます
   1. ホストの名前の最後にカッコ書きで記載されています。（参加者ウィンドウのリサイズが必要な場合があります）
1. ミーティング情報ポップアップ経由
   1. 左上隅に移動すると、i アイコンが表示されます
   1. アイコンを選択して、通話の録画権限を持つミーティングホストを特定します

### ホストが不在のときに録画を許可する方法 {#how-to-allow-recording-when-the-host-is-not-present}

これは通常、ホストが常に出席できない定期的なミーティングで発生します。

ミーティングの作成者は、ホストが出席できない場合に備えて同僚を `Alternative Hosts` として追加し、他の人が録画を開始できるようにすべきです。

#### ウェブサイトの使用 {#using-the-website}

1. `https://gitlab.zoom.us/meeting/<meeting id>/edit` に移動します
1. ページ下部までスクロールして "Alternative Hosts" を見つけます
1. 1 人以上の同僚のメールアドレスをカンマ区切りで追加します
1. Save をクリックします

#### Zoom アプリの使用 {#using-the-zoom-app}

1. "Meetings" をクリックします
1. アプリの左側で自分のミーティングを見つけます
1. アプリの右側で "Edit" をクリックします
1. ウィンドウの下部にある "Advanced Options" ドロップダウンを展開します
1. 一番下にある "Alternative Hosts" ボックスを見つけます
1. 1 人以上の同僚のメールアドレスをセミコロン区切りで追加します
1. Save をクリックします。

### ビデオの文字起こしを録画する {#recording-video-transcripts}

- [クローズドキャプションとライブ文字起こし](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062490) はすべてのユーザーに対してデフォルトで有効になっていますが、ミーティングが開始した後にホストが手動で有効にしない限り、字幕は参加者に表示されません
- 録画されたミーティングが終了すると、文字起こしは他の録画ファイルと同じフォルダ内のテキストファイルとして利用可能になります
- ローカル録画では、文字起こしは `closed_caption.txt` に保存されますが、コホストによって有効にされた場合のみです
- クラウド録画では、ファイル名は `.transcript.txt` で終わり、完全な文字起こしが常に利用可能です。処理には約 15 分かかるため、文字起こしよりも先にビデオファイルが表示されます
