---
title: Zoom - 追加設定
description: Zoom の追加セットアップおよび設定手順
upstream_path: /handbook/eta/corporate-it/end-user-services/supported-apps/zoom/zoom-additional-config/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:07:25+09:00"
translator: codex
stale: false
---

## 目次

- [Zoom で音声とビデオをテストする](#test-audio-and-video-in-zoom)
- [Zoom プロフィールをカスタマイズする](#customize-your-zoom-profile)
- [カスタマイズしたパーソナルリンクを作成する](#create-a-customized-personal-link)
- [Zoom 待機室](#zoom-waiting-rooms)
- [画面共有を有効にする](#enable-screen-sharing)
- [キャプションとライブ文字起こしを有効にする](#enable-captions-and-live-transcription)
- [Zoom でミュートするショートカットを設定する](#set-up-a-shortcut-for-muting-in-zoom)
- [参加者が先に参加した場合のホスト向けメール通知を有効にする](#enabling-email-notifications-for-hosts-when-attendees-join-first)

## Zoom で音声とビデオをテストする

Zoom を初めて使用する前に、[音声をテスト]( https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062765)し、[ビデオをテスト](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061836)することをおすすめします。
Zoom には独自の[テスト](https://zoom.us/test)もあり、すべてが正しく設定されていることを確認するために使用できます。

## Zoom プロフィールをカスタマイズする

Zoom では、表示名、場所、役職名など、さまざまな設定をカスタマイズできます。

1. Chrome を開き、[Zoom プロフィールページ](https://gitlab.zoom.us/profile)に移動します
1. ページ上の各種フィールドの横にある **Edit** をクリックし、すべての詳細が正しいことを確認します

## カスタマイズしたパーソナルリンクを作成する

パーソナライズされたリンクを使用すると、Zoom ミーティング用に短く覚えやすいリンクを作成できます。

<div class="w3-panel w3-yellow">
  <h3>Talent Acquisition チーム</h3>
  <p>パーソナライズされたリンクは、面接のスケジュール設定に使用します。デフォルトの命名規則 (<code>gitlab.firstnamelastname</code>) を使用し、ミーティングにパスワードを設定しないことが重要です。</p>
</div>

パーソナルリンクは、同僚や顧客に一貫性があり、読みやすく覚えやすいミーティングルームを提供する優れた方法です。\
 ただし、連続して 2 つのミーティングが予定されている場合に参加者が進行中のミーティングに参加するなど、同じミーティングを再利用することにはいくつかの欠点があります。場合によっては、一意のミーティングリンクを使用する方がよいことがあります。

**セットアップ**

1. [プロフィールページ](https://gitlab.zoom.us/profile)に移動します。
1. Meeting セクションに "Personal Link" が表示されます
1. 完了したら **Customize** を選択し、**Save Change** を選択します
1. [ミーティングページ](https://gitlab.zoom.us/meeting)に移動します。
1. 上部タブの "Personal Room" を選択します。
1. ページ下部付近で "Edit" を選択し、"Passcode" ボックスのチェックを外します。
1. "Save" を選択します。

## Zoom 待機室

他の人が参加することを防ぐため（例えば、連続したミーティングの場合）、パーソナルミーティングルームで[待機室](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063329)機能を有効にすることをおすすめします。\
パーソナルミーティングでこれを有効にするには、いくつかの手順があります:

1. [Zoom 設定ページ](https://gitlab.zoom.us/profile/setting)に移動します
1. **Meeting** タブをクリックします
1. **Security** までスクロールし、**Waiting Room** オプションをオンに切り替えます
1. 待機室のオプションをさらに編集したり、カスタム動画や画像で待機室をカスタマイズしたりできます。
    1. 詳細は [Zoom の公式ドキュメント](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059359)を参照してください

## 画面共有を有効にする

通話の参加者と画面を共有するには、Mac のシステム設定で Zoom に適切なアクセスを許可する必要があります。

<div class="w3-panel w3-yellow">
  <h3>注意！</h3>
  <p>この設定を有効にすると Zoom アプリの再起動が必要になり、EUS チームがサポートセッション中に画面共有を依頼する場合があるため、できるだけ早くこの設定を有効にすることをおすすめします。</p>
</div>

1. Zoom を開き、**New meeting** を使用してミーティングを開始します
1. **Share** をクリックし、共有する画面またはアプリケーションウィンドウを選択します
1. "zoom.us" にこのコンピューターの画面と音声の録画を許可するよう求めるプロンプトが表示されるので、"Open System Settings" をクリックします。表示されるリストから "zoom" を有効にします。
    1. 手動で有効にするには、Mac のシステム設定アプリを開き、Privacy & Security > Screen & System Audio Recording に移動して zoom を有効にし、プロンプトに従います。
    1. Zoom がリストに表示されない場合は、`+` ボタンをクリックし、**zoom.us** アプリケーションを手動で選択します
1. Zoom を再起動します

## キャプションとライブ文字起こしを有効にする

ミーティングのホストである場合は、アクセシビリティのためにライブ文字起こしを有効にすることを検討してください。ライブ文字起こしはデフォルトで有効になっておらず、ミーティングごとに手動で有効にする必要があります:

1. Zoom ツールバーで、**CC**（クローズドキャプション用）を選択します。
1. **Enable live transcription** を選択します。

ホストが不在の場合、誰もライブ文字起こしを有効にできません。ミーティングを作成したが参加しない場合は、出席する人に代替ホスト権限を割り当てて、その人がライブ文字起こしを有効にできるようにすることを検討してください。

## Zoom でミュートするショートカットを設定する

Zoom が選択されているウィンドウでない場合でも、ミュート／ミュート解除用のホットキーが必要になることがあります。
次の手順で設定します:

1. `Zoom > Preferences > Keyboard Shortcuts` に移動します
1. `Mute/Unmute My Audio` の `Enable Global Shortcut` ボックスにチェックを入れます
1. `F1`（Cmd 1）など、任意のキーボードショートカットにマッピングできます

## 参加者が先に参加した場合のホスト向けメール通知を有効にする

1. Zoom アカウントの[設定](https://gitlab.zoom.us/profile/setting)に移動します。
1. `Meeting` タブをクリックします。
1. `Email notification` で、`When attendees join meeting before host` トグルをクリックして有効または無効にします。
