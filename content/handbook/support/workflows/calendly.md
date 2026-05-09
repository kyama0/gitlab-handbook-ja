---
title: サポート向けCalendlyセットアップ
category: References
description: "Support EngineeringにおけるCalendlyのセットアップと使用方法のワークフロー"
upstream_path: /handbook/support/workflows/calendly/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

**注意**: お客様への通話を提案する際は、必ず [シングルユース Calendly リンク](#generating-a-single-use-calendly-link) を使用してください。

## Calendlyのセットアップ

GitLabのオンボーディングの一環として、[tools and tipsの手順](/handbook/tools-and-tips/other-apps/#calendly) に従ってCalendlyをセットアップしているはずです。

セットアップは次のように変更してください。

- [ログイン](https://calendly.com/login) します
- [integrations](https://calendly.com/integrations) でCalendlyアカウントにZoom連携をセットアップします
- 1時間のイベントが利用可能であることを確認します
- Calendlyイベントを編集します:
  - イベント名のタイトルに「Support」が含まれていることを確認します
  - 利用可能枠の刻み幅の変更を検討します（下記参照）
  - ロケーションは「Zoom conference call」と表示されている場合がありますが、これは実際には連携を使用しません。ロケーションを編集して、Zoom（青いカムコーダーアイコン付き）を選択します

## 利用可能スケジュールのセットアップ

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/QeqvcjZEVpM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

利用可能スケジュールのセットアップはとても重要です。これにより、意図した時間帯に通話が予約されるようになり、また私たちが利用しているさまざまなイベントに追加してもらえるようになります。

上記の動画でセットアップ方法が示されていますが、概要は次のとおりです。

- [https://calendly.com/app/availability/schedules](https://calendly.com/app/availability/schedules) に移動します
- デフォルトスケジュールのタイムゾーンを設定します
- デフォルトスケジュールの名前を「Working hours」に変更します
- 利用可能な時間帯を編集します

### GitLab Supportグループアカウント

複数の [「event types」](https://help.calendly.com/hc/en-us/articles/14073251046807-How-to-customize-your-event-types)
を追加できる機能（下記の [提案](#suggestions) で推奨されているとおり、お客様や同僚との通話の予約に使用）など、
Calendly Pro アカウントの機能を有効にするには、GitLab Supportグループアカウントに追加される必要があります。

グループアカウントに追加してもらうには:

1. [Schedule update request](https://gitlab.com/gitlab-com/support/support-ops/other-software/calendly/-/issues/new?issuable_template=Schedule%20update%20request) Issueを開きます
1. マネージャーに割り当てると、承認のうえCalendlyをプロビジョニングするチームメンバーに割り当て直されます。

このアクセスは、Self-Managedのお客様のチケットを取り扱うGitLab Support Engineerの [サポートオンボーディング](/handbook/support/#onboarding) の一部としても含まれています。

### 利用可能枠の刻み幅

Calendlyの60分ミーティングは、デフォルトで「Availability Increment」が60分に設定されています。

毎時0分から始まるスロットのみが提供されます。90分の空きがある場合や、たとえば14:30〜15:30の枠が空いている場合、刻み幅を30分に縮小することで利用可能枠が増えます。

- ログインしてイベントタイプを編集します
- `More Options` をクリックします
- `Booking Page Options` ドロップダウンの下、`Start time increments` で時間間隔を選択します

他のミーティング時間も用意している場合は、異なる開始時間を提供することが理にかなっているかを検討してください。
プライベート/インコグニートのブラウザセッションを使用して、自分のCalendlyの利用可能枠を確認できます。

### タイムゾーンを一時的に変更する

通常のスケジュールとは異なる時間帯に一時的に勤務する場合は、お客様との通話が更新後のタイムゾーンで予約されるようにCalendlyを更新できます。

1. Calendlyにログインします。`Availability` タブをクリックする（または [このURL](https://calendly.com/app/availability/schedules) を使う）。
1. `Schedule` > `Working hours` エリアで、`Time zone` ドロップダウンから更新後のタイムゾーンを選択します。変更は自動保存されます。
1. 通常の勤務時間に戻った際にタイムゾーンをリセットするように、自分用のカレンダーリマインダーを設定します。

### イベント開始までに必要となる最小通知時間の設定

イベント開始時刻から構成可能な間隔の範囲内ではイベントを予約できないようにするスケジューリング条件を指定できます。

1. ログインしてイベントタイプを編集します
1. `Availability` ドロップダウンをクリックします
1. `Date-Range` の下で、ドロップダウン値のリストから適切な通知期間を選択します。デフォルトは `4 hours` です
1. `Save changes` をクリックします

## チームカレンダーへのサポート通話の反映

私たちは [Zapierのzap](https://zapier.com/app/editor/33897756?redirect=true) を使ってお客様との通話を *GitLab Support* Googleカレンダーにコピーしています。これが機能するには:

- あなたのCalendlyアカウントがグループアカウントの一部である必要があります。
- 「support」という単語が連携をトリガーします。Calendlyのイベント名に「support」が含まれていることを確認してください。

Zapが正常に動作している場合、1〜2分以内にカレンダーイベントがコピーされるはずです。お客様がキャンセルした場合も同様に、Supportカレンダーから削除されます。

### カレンダーイベントへのチケットIDの付与

個人のCalendlyお客様向けイベントに [**必須の質問** を追加](https://help.calendly.com/hc/en-us/articles/226893168#invitee-question-and-answer-types-0-5) してください。この質問では、お客様があなたとスケジュールする際にGitLab Supportのチケット番号を入力するように求めます。これによりカレンダーイベントにチケット番号が表示され、他のメンバーが通話に参加してサポートする際の文脈が提供されます。

## シングルユースCalendlyリンクの生成 {#generating-a-single-use-calendly-link}

### Chrome プラグイン / Firefox 拡張機能を使用する

Calendlyには、お客様に送信するシングルユースリンクを簡単に生成できる
[Chromeプラグイン](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp)
と [Firefox拡張機能](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
があります。ブラウザに追加した後、ブラウザの右上にあるCalendlyアイコンを探してください。Calendlyにサインインすると、イベントのリストが表示されます。
あとは、希望するイベントの下にある `Copy link` アイコンをクリックするだけで、お客様へのメッセージに貼り付け可能なリンクを生成できます。

![Browser plug-in](/images/support/workflows/assets/calendly.png)

サポートされているブラウザを使用したくない場合は、[Calendlyのドキュメント](https://help.calendly.com/hc/en-us/articles/1500001292022-How-to-create-and-share-a-single-use-link-to-a-specific-event) に従ってCalendlyのホームページからリンクを生成できます。

### curlを使用する

CalendlyのAPIトークンを設定します:

```plaintext
t=<your Calendly API token>
```

個人のURIを取得します:

```plaintext
uri=$(curl -s -H "Authorization: Bearer $t" \
  https://api.calendly.com/users/me | jq -r '.resource.uri')
```

利用可能なイベントを一覧表示します:

```plaintext
curl -sG -H "Authorization: Bearer $t" \
  -d user=$uri \
  "https://api.calendly.com/event_types" \
  | jq -r '.collection[]|select(.active == true)|([.name,.uri] | join(","))' \
  | column -s',' -t -d
```

これにより、次のようなテーブルが生成されます:

```plaintext
15 Minute Meeting                   https://api.calendly.com/event_types/DGFGYBLAHK4CNXJF
30 Minute Coffee Call               https://api.calendly.com/event_types/DEBLAHWQSO3GGUES
GitLab Government Customer Call        https://api.calendly.com/event_types/DADPABBLAHWZY57A
GitLab Support Call                 https://api.calendly.com/event_types/CEGFRWO2BLAHSAQE
Upgrade Assistance             https://api.calendly.com/event_types/AHBRCBLAH6ECV5E6
Pairing Session                     https://api.calendly.com/event_types/EBLAHIHDJDJRSS42
Support call with me                https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2
US Government Upgrade Assistance  https://api.calendly.com/event_types/BLAHTQKLLSHV3GL3
```

「Support call with me」イベントのシングルユースリンクを生成するには:

```plaintext
curl -s -H "Authorization: Bearer <your Calendly API token>" \
  -F max_event_count=1 \
  -F owner_type=EventType \
  -F owner=https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2 \
  https://api.calendly.com/scheduling_links \
  | jq -r '.resource.booking_url'
```

これにより、次のような出力が得られます:

```plaintext
https://calendly.com/d/m6we-x8r7/support-call-with-me
```

### `httpie` を使用する

以下は [`httpie`](https://github.com/httpie/cli) で同じセットアップ、パターン、出力を使用しています。

個人のURIを取得します:

```plaintext
uri=$(https https://api.calendly.com/users/me \
  Authorization:"Bearer $t" \
  | jq -r '.resource.uri')
```

利用可能なイベントを一覧表示します:

```plaintext
https -b  api.calendly.com/event_types \
  user==$uri \
  Authorization:"Bearer $t" \
  | jq -r '.collection[]|select(.active == true)|([.name,.uri] | join(","))' \
  | column -s',' -t -d
```

シングルユースリンクを生成します:

```plaintext
https -b  api.calendly.com/scheduling_links \
  Authorization:"Bearer $t" \
  max_event_count=1 \
  owner_type=EventType \
  owner=https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2 \
  | jq -r '.resource.booking_url'
```

## CalendlyでCustomer CallイベントをSecretにして保護する

Customer Callは招待制とすべきです。これを実現するには、すべてのCustomer Callイベントを `Secret event` にします。これにより、特定のイベントへのCalendlyリンクを持つ人のみが、あなたとのミーティングを閲覧できるようになります。

**注意:** このアクションを実行しないと、誰でもあなたの公開Calendlyページ上でCustomer Callイベントを閲覧できてしまいます。

1. いずれかのイベント（具体的には、Customer Callに使用するもの）を編集します。
1. ページ左側のサイドバーの **Settings**（**{settings}**）アイコンをクリックします。
1. `Make secret` をクリックします。
1. ページを離れます。問題が発生した場合は [Calendlyドキュメント](https://help.calendly.com/hc/en-us/articles/1500004754122-Managing-additional-rules-for-your-availability#make-an-event-secret-0-6) を確認してください。

## CalendlyでPagerDutyシフトを自動的にブロックする

PagerDutyのシフトをCalendlyで自動的にブロックすることが可能で、これにより当番中にお客様の通話が予約されることを防げます。これは、PagerDutyのオンコールスケジュールをGoogleカレンダーで購読し、Calendlyが競合をチェックする際にこれを使用するように設定することで機能します。これをセットアップするには:

1. PagerDutyで **Your profile > On-Call Shifts > Export > WebCal feed** に移動します。右クリックしてURLをコピーします。
1. Googleカレンダーの **Other calendars > + > From URL** からPagerDutyカレンダーを追加し、ステップ1のWebCal URLを貼り付けます。
1. Calendlyで **Account > Calendar Sync > Configuration > Check for conflicts** に [移動](https://calendly.com/app/personal/availability/connected_calendars) し、**Edit** ボタンをクリックします。
1. ステップ2で追加したPagerDutyカレンダーがここで選択されていることを確認し（Googleで付けた名前ではなく「On Call Schedule for *Your Name*」としてリストされます）、**Update** ボタンをクリックします。リストにカレンダーが表示されない場合は、CalendlyからGoogleカレンダーアカウントを切断して再接続することで、カレンダーリストを更新できます。

## 複数の同僚の利用可能枠の組み合わせをお客様に提示する

PagerDutyシフトをブロックするのと同じ原則を使い、
複数のGitLab同僚が利用可能な時間枠のみをCalendlyで提示することもできます。
これは、他のSupport Engineer、開発者、マネージャーが
お客様との通話に参加する必要がある場合に便利です。

1. Googleカレンダーの **Other calendars > + > Subscribe to calendar** で、
   同僚の名前を入力し始め、自動補完された名前をクリックして購読します。
1. Calendlyで **Account > Calendar Sync > Configuration > Check for conflicts** に [移動](https://calendly.com/app/personal/availability/connected_calendars) し、**Edit** ボタンをクリックします。
1. 同僚の `…@gitlab.com` エントリ経由で、同僚のカレンダーを利用可能チェックに追加します。
1. 通話のスケジュールが完了したら、そのエントリを再度削除します。

## 提案 {#suggestions}

Ben Prescott

- 私は社内GitLabミーティング用に25分・50分のミーティング、そして「GitLab Customer support」と呼ばれる別の30分・60分のミーティングを用意しています。Zendeskでリンクを送るのは後者です。
- デフォルトで60分を提供し、説明／指示文を以下のように変更しました。最後の行を含めているのは、お客様の現地時間の午前3時に予約されたことがあり、Calendlyがタイムゾーンを誤認したのではないかと考えたためです。

> This will be a Zoom Meeting.
>
> Let me know via the ticket if you have any questions, will need to use a different conference platform, or if you want a link to schedule a 30 minute call instead (which may be available sooner.)
>
> Check that your time zone and current time are displayed correctly on this page (below the calendar.)
