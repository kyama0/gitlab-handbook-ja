---
title: Support 向け Reclaim.ai のセットアップ
category: References
description: "Support Engineering で Reclaim.ai のスケジュールリンクを設定して使用するためのワークフロー"
upstream_path: /handbook/support/workflows/reclaim/
upstream_sha: e6de02eba910babdd302a4f920edec669cff51cf
lastmod: "2026-08-14T13:51:29+10:00"
translated_at: "2026-08-15T07:12:58+09:00"
translator: codex
stale: false
---

**注**: 顧客にコールを提案する場合は、常に[使い捨てのスケジュールリンク](#generating-a-customized-hidden-scheduling-link)を使用してください。デフォルトのスケジュールページの URL は決して共有しないでください。

## 概要 {#overview}

Reclaim.ai は、Support の顧客コールに使用する GitLab のスケジュールツールです。このワークフローでは、スケジュールページへの意図しないアクセスを防ぐため、Zendesk チケットごとにカスタマイズされた非表示の一意なスケジュールリンクを使用します。

## 対応可能時間スケジュールのセットアップ {#availability-schedule-setup}

対応可能時間のスケジュールを設定すると、意図した時間帯にコールがスケジュールされるようになります。

- [Reclaim Settings > Scheduling](https://app.reclaim.ai/settings) に移動します
  - 希望する `Scheduling Window` を設定します。デフォルトは 12 週間です。好みに応じて 4 〜 8 週間に短縮することを推奨します
  - `Date Format` を ISO（YYYY/MM/DD）に設定します
- [Settings | Hours](https://app.reclaim.ai/settings/hours) に移動します
  - `Home timezone` を設定します
  - 必要に応じて、旅行中に一時的なタイムゾーンを設定します。ガイダンスについては[以下](#temporarily-changing-your-timezone)を参照してください。
  - `Hours` を設定します。スケジュールリンクには最大 3 つの異なるスケジュールを設定できます。そのため、15 分のミーティングの提案には広めの時間帯を使用し、長めのコールの提案は午前中（または同様の時間帯）のみにすることもできます。Meeting Links の**デフォルト**は `Meeting Hours` スケジュールになるため、1 つだけ設定する場合はこれを設定してください。ニーズに合わせて、必要な数だけ設定してください。
- 必要に応じて、[`Settings | Buffers`](https://app.reclaim.ai/settings/buffer-time) に移動するか、左側のサイドバーから `Time blocking | Buffers` を選択して、ミーティング間のバッファ時間を設定します。

### タイムゾーンを一時的に変更する {#temporarily-changing-your-timezone}

通常のスケジュールと異なる時間帯で一時的に勤務する場合は、更新後のタイムゾーン中に顧客コールが予約されるよう Reclaim を更新できます。

1. Reclaim にログインし、Settings | Hours に移動します
1. Travel timezone を選択します
1. そのタイムゾーンに滞在する開始日と終了日を設定します。

異なる日付に対して複数の旅行先タイムゾーンを設定できます。そのため、複数の場所を巡る旅程がある場合は、それらを一度にすべて設定できます。また、別のタイムゾーンに滞在する日付が分かった時点で、すぐに Reclaim.ai に追加できます。

## Reclaim スケジュールリンクのセットアップ {#reclaim-scheduling-links-setup}

Support で使用する場合は、メインの Booking Page を訪れた人に表示される Scheduling Links を削除し、上記のとおり Hidden Links を使用します。

次のようにセットアップを変更します（この作業は一度だけ行います）。

1. Okta タイルを使用して Reclaim にアクセスし、プライマリの勤務用カレンダーが接続されていることを確認します
1. Reclaim アカウントの [Integrations](https://app.reclaim.ai/settings/integrations) で Zoom 連携を設定します
1. `Meetings | Scheduling Links` に移動します
1. デフォルトでは、1 時間、15 または 30 分、15 分の 3 つのリンクがあります。
1. それぞれを次のように変更します（必要に応じて、ほかの所要時間も作成します）。
   - **Event Details**
     - それぞれのタイトルを変更して「Support」を含めます
     - 説明を `GitLab Support との x 分間のミーティング` に変更します
   - **Organizers**
     - Organizers フィールドでは、3 つの時間スケジュールのうちどれを提案するかを選択できます。デフォルトは `Meeting Hours` ですが、ほかの 2 つのスケジュールのいずれかを使用する場合や、非常に限定された対応可能時間を設定する場合は、ここで変更します
   - Zoom をデフォルトのビデオ会議オプションにします: **Organizers** > **Videoconference link & location**
   - **Scheduling**
     - Organizers セクションで選択したスケジュールに基づいて、対応可能時間がグラフに表示されます。ここでは変更できず、確認のためだけに表示されます。
     - `Durations` を説明に記載した時間と一致させます。予期しない結果を防ぐため、リンクごとに所要時間を 1 つだけ使用してください。
     - `Soonest Scheduling time` は、リンクの作成後、どのくらい早い時間から予約できるかを決定します。デフォルトは 4 時間です。それより早い時間に顧客が予約できるようにする場合は、ニーズに合わせて変更します
   - **Link settings**
     - リンクを非表示にするため、`Hide link on your booking page` オプションをオンに切り替えます
   - **Booking page customization**
     - ブランディングを `Use custom branding` に変更します
     - `Webhooks` で `+ Add webhook` をクリックし、役割に応じて `Add to Global Support calendar` または `Add to US Gov Support calendar` を選択します。[Support カレンダーの webhook をオプトインする方法](/handbook/eta/css/reclaim/#how-to-opt-into-it)を参照してください。これにより、スケジュールされた顧客コールをチームが確認できるようになります。

    よし、ここまでの作業を一度済ませれば、もう繰り返す必要はありません。続いて、顧客に提供するチケット用の[カスタマイズされた非表示リンク](#generating-a-customized-hidden-scheduling-link)を生成する方法を確認してください。

### 非表示リンクが重要な理由 {#why-hidden-links-matter}

スケジュールリンクを非表示にすると、次のようになります。

- 公開ページ（例: `https://app.reclaim.ai/m/your-username`）には「No scheduling link found」と表示されます（デフォルトの Reclaim.ai リンクをすべて再設定したか、非表示のスケジュールリンクに置き換えた場合）
- 非表示リンクの URL を直接知っている人だけがアクセスして時間を予約できます
- スケジュールページを見つけた人による、許可されていない予約や予期しない予約を防げます
- 各チケット固有のリンクは、対象の顧客が引き続き利用できます

## カスタマイズされた非表示のスケジュールリンクを生成する {#generating-a-customized-hidden-scheduling-link}

カスタマイズされた非表示リンクは、顧客コールのスケジュールに推奨される方法です。チケットごとに一意のリンクを用意する必要があります。

### チケット用のリンクを作成する {#creating-a-link-for-a-ticket}

チケット固有のスケジュールリンクを作成するには、次の手順に従います（注: [Reclaim スケジュールリンクのセットアップ](#reclaim-scheduling-links-setup)に記載されているセットアップが完了していることを前提としています:

1. [Reclaim](https://app.reclaim.ai/) を開き、`Meetings | Scheduling Links | Hidden Links` から Support のスケジュールリンクに移動します
1. 提案したい所要時間のリンクを使用し、**...**（3 点メニュー）から `Share & personalize` を選択します
1. ダイアログの下部にある `Personalize` ボタンをクリックします。
   - `Details | Invitee` に顧客の名前とメールアドレスを追加します
   - `Details` セクションの `Meeting name` を変更して Zendesk チケット番号を含めます。これにより、ほかのチームメンバーが Support Calendar でこの参照情報を確認できます
   - `Attendees & Location` で、対応可能時間が想定どおりであることを確認します
   - `Location` が Zoom であることを確認します。
1. `Scheduling` では、対応可能な `Soonest time` と `Latest time` をカスタマイズできます。対応可能期間の終了日を設定するか、将来の特定の日数までに制限します。
1. `Link options` セクションを開き、`URL` スラッグを変更して、`support-zd-123456` のようにチケット番号を含む一意の識別子を使用します
1. `Copy link` をクリックします。URL は次のパターンになります。

   ```plaintext
   https://app.reclaim.ai/m/your-username/support-zd-123456
   ```

1. **重要**: リンクを Zendesk チケットに保存します。Reclaim は、カスタマイズされた非表示リンクを通常の Scheduling Links リストに保持しません。そのため、再共有する必要がある場合は URL を保存しておく必要があります。（これらのリンクは編集できないことに注意してください）。
1. 適切な顧客コール用マクロを使用して、リンクを顧客に送信します。

### 複数のスケジュールリンクを管理する {#managing-multiple-scheduling-links}

顧客コールが必要な複数のチケットに同時に対応する場合:

- **すべての**チケットに個別の使い捨てリンクを作成します
- リンクを簡単に識別できるよう、URL スラッグにチケット番号を使用します（例: `support-zd-123456`、`support-zd-123457`）
- 参照できるよう、各リンクの URL を対応する Zendesk チケットに保存します

## リンクの有効期限と制限事項 {#link-expiration-and-limitations}

### 現在の制限事項 {#current-limitations}

Reclaim のカスタマイズされたリンクには、いくつかの制限事項があります。

- 現在、カスタマイズされた非表示リンクでは、予約を 1 回に制限することを強制**できません**
- リンクは作成後 30 日間、再利用可能なままになることがあります

### 補完的なコントロール {#compensating-controls}

予約後にリンクを明示的に無効化する機能が Reclaim から提供されるまでは、次の補完的なコントロールを使用します。

1. **チケット固有の URL**: 各チケットには独自の一意なリンクがあり、公開範囲を制限します
1. **非表示リンク**: 公開スケジュールページからリンクを見つけることはできません
1. **保存されたチケット記録**: 追跡のため、リンクの URL は Zendesk に保存されます
1. **短い期間を提案する**: 対応可能期間を設定する際は、顧客に選択肢を提供するのに十分な長さでありながら、そのリンクで複数の予約が行われることを制限できる程度に短い、終了日またはローリング期間を設定します。
1. **30 日後の期限切れ**: リンクは 30 日後に自動的に期限切れになります
1. **拒否する権利**: 重複、無関係、または不正利用にあたる予約には、既存の拒否権のプロセスを適用します

## チームカレンダー内の Support コール {#support-calls-in-the-team-calendar}

チームが把握できるよう、顧客コールは GitLab Support Google カレンダーに表示する必要があります。これは、リンクに [Support カレンダーの webhook](/handbook/eta/css/reclaim/#how-to-opt-into-it) を設定することで対応します。

- ミーティングのタイトルに含まれるチケット番号は、参加する可能性があるほかのメンバーにコンテキストを提供します

## スケジュールページを保護する {#protecting-your-scheduling-page}

顧客コールは招待制にする必要があります。カスタマイズされた非表示リンクを使用すると、次のようになります。

- 公開 Reclaim ページには、利用可能なスケジュールオプションが表示されません
- 直接リンクを知っている顧客だけが時間を予約できます
- カレンダーへの不正なアクセスを防止できます

## 参考資料 {#references}

- [Reclaim: リンクグループを使用してリンクを整理し共有する](https://help.reclaim.ai/en/articles/6806567-using-link-groups-to-organize-and-share-your-links)
- [Reclaim: Scheduling Links のドキュメント](https://help.reclaim.ai/en/collections/3527648-scheduling-links)
