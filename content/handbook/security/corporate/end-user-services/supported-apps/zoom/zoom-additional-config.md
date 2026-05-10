---
title: Zoom - 追加設定
description: Zoom の追加セットアップおよび設定手順
upstream_path: /handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-additional-config/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 目次

- [Zoom で音声と映像をテストする](#test-audio-and-video-in-zoom)
- [Zoom プロフィールをカスタマイズする](#customize-your-zoom-profile)
- [カスタマイズされたパーソナルリンクを作成する](#create-a-customized-personal-link)
- [Zoom 待機室](#zoom-waiting-rooms)
- [画面共有を有効にする](#enable-screen-sharing)
- [字幕とライブ文字起こしを有効にする](#enable-captions-and-live-transcription)
- [Zoom でミュートのショートカットを設定する](#set-up-a-shortcut-for-muting-in-zoom)
- [参加者がホストより先に参加した際のホストへのメール通知を有効にする](#enabling-email-notifications-for-hosts-when-attendees-join-first)

## Zoom で音声と映像をテストする {#test-audio-and-video-in-zoom}

Zoom を初めて使用する前に、[音声をテストする](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062765) ことと、[映像をテストする](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061836) ことが推奨されます。
Zoom には、すべてが正しくセットアップされていることを確認するために利用できる独自の [テスト](https://zoom.us/test) もあります。

## Zoom プロフィールをカスタマイズする {#customize-your-zoom-profile}

Zoom では、表示名、所在地、職位など、さまざまな設定をカスタマイズできます。

1. Chrome を開いて [Zoom プロフィールページ](https://gitlab.zoom.us/profile) にアクセスします
1. ページ上の各フィールドの横にある **Edit** をクリックして、すべての詳細が正しいことを確認します

## カスタマイズされたパーソナルリンクを作成する {#create-a-customized-personal-link}

パーソナライズされたリンクを使用すると、より短く覚えやすい Zoom ミーティング用のリンクを作成できます。

<div class="w3-panel w3-yellow">
  <h3>Talent Acquisition チーム</h3>
  <p>パーソナライズされたリンクは、面接のスケジューリングに使用されます。デフォルトの命名規則 (<code>gitlab.firstnamelastname</code>) を使用し、ミーティングにパスワードを設定しないことが重要です。</p>
</div>

パーソナルリンクは、同僚やお客様向けに一貫した、読みやすく覚えやすいミーティングルームを提供するための優れた方法です。\
 ただし、同じミーティングを再利用することにはいくつかの欠点があります。たとえば、ミーティングが連続してスケジュールされている場合に、参加者が進行中のミーティングに参加してしまうなどです。場合によっては、一意のミーティングリンクを使用する方が良いかもしれません。

**セットアップ**

1. [プロフィールページ](https://gitlab.zoom.us/profile) にアクセスします。
1. Meeting セクションで、自分の "Personal Link" を確認できます
1. **Customize** を選択し、完了したら **Save Change** を選択します
1. [ミーティングページ](https://gitlab.zoom.us/meeting) に移動します。
1. 上部のタブ "Personal Room" を選択します。
1. ページの下部にある "Edit" を選択し、"Passcode" のチェックボックスをオフにします。
1. "Save" を選択します。

## Zoom 待機室 {#zoom-waiting-rooms}

連続してミーティングが行われる場合などに他の人が参加することを防ぐため、パーソナルミーティングルームに対して [待機室](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063329) 機能を有効にすることをお勧めします。\
パーソナルミーティングでこれを有効にするには、いくつかの手順があります。

1. [Zoom 設定ページ](https://gitlab.zoom.us/profile/setting) にアクセスします
1. **Meeting** タブをクリックします
1. **Security** までスクロールダウンし、**Waiting Room** オプションをオンに切り替えます
1. ここから、待機室のオプションをさらに編集したり、カスタム動画や画像で待機室をカスタマイズしたりできます。
    1. 詳細については [Zoom の公式ドキュメント](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059359) をご参照ください

## 画面共有を有効にする {#enable-screen-sharing}

通話の参加者と画面を共有するためには、Mac のシステム設定で Zoom に適切なアクセス権を付与する必要があります。

<div class="w3-panel w3-yellow">
  <h3>注意!</h3>
  <p>この設定を有効にするには Zoom アプリの再起動が必要であり、また EUS チームがサポートセッション中に画面共有をお願いする場合があるため、できるだけ早くこの設定を有効にすることをお勧めします。</p>
</div>

1. Zoom を開き、**New meeting** を使用してミーティングを開始します
1. **Share** をクリックして、共有する画面またはアプリケーションウィンドウを選択します
1. "zoom.us" にこのコンピュータの画面と音声の録画を許可するかどうか尋ねるプロンプトが表示されます。"Open System Settings" をクリックします。表示されるリストから "zoom" を有効にします。
    1. 手動で有効にするには、Mac のシステム設定アプリを開き、Privacy & Security > Screen & System Audio Recording に移動し、zoom を有効にしてプロンプトに従います。
    1. Zoom がリストに表示されない場合は、`+` ボタンをクリックして手動で **zoom.us** アプリケーションを選択します
1. Zoom を再起動します

## 字幕とライブ文字起こしを有効にする {#enable-captions-and-live-transcription}

ミーティングのホストである場合、アクセシビリティのためにライブ文字起こしを有効にすることを検討してください。ライブ文字起こしはデフォルトでは有効になっておらず、各ミーティングごとに手動で有効化する必要があります。

1. Zoom ツールバーで、**CC**（クローズドキャプション）を選択します。
1. **Enable live transcription** を選択します。

ホストが不在の場合、誰もライブ文字起こしを有効にできません。ミーティングを作成しても出席しない場合は、出席する人に代替ホスト権限を割り当てて、その人がライブ文字起こしを有効にできるようにすることを検討してください。

## Zoom でミュートのショートカットを設定する {#set-up-a-shortcut-for-muting-in-zoom}

Zoom が選択されたウィンドウでない場合でも、ミュート/ミュート解除のためにホットキーが必要になることがあります。
これを設定するには、以下の手順に従います。

1. `Zoom > Preferences > Keyboard Shortcuts` に移動します
1. `Mute/Unmute My Audio` の `Enable Global Shortcut` のチェックボックスをオンにします
1. `F1` (Cmd 1) など、任意のキーボードショートカットに割り当てることができます

## 参加者がホストより先に参加した際のホストへのメール通知を有効にする {#enabling-email-notifications-for-hosts-when-attendees-join-first}

1. Zoom アカウントの [設定](https://gitlab.zoom.us/profile/setting) にアクセスします。
1. `Meeting` タブをクリックします。
1. `Email notification` の下で、`When attendees join meeting before host` トグルをクリックして有効または無効にします。
