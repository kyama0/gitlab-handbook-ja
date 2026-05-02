---
title: "YouTube の利用とアクセス"
description: "私たちは YouTube を、ライブストリーミングのグループカンバセーション、マーケティング動画、デモなどを含む動画コンテンツの単一の信頼できる情報源 (SSoT) として使用しています。"
upstream_path: /handbook/marketing/marketing-operations/youtube/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T01:35:00Z"
translator: claude
stale: false
---

## チャンネル

GitLab で使用している YouTube チャンネルは 2 つあります:

1. [Branded](https://www.youtube.com/channel/UCnMGQ8QHMAnVIsI3xJrihhg): より広いコミュニティの人々向けのコンテンツ用です。マーケティングとイベントのコンテンツ、顧客、コミュニティ、ユーザーのストーリー、雇用ブランディング、洗練されたセールス動画とデモなどが含まれます。例えば[GitLab のインフォマーシャル](https://www.youtube.com/watch?v=gzYTZhJlHoI)です。
1. [Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/): チームメンバーやコミュニティメンバー向けのコンテンツ用です。チームミーティング、ディスカッション、月次リリースキックオフ、オフィスアワー、CEO 101 ミーティング、カジュアルなデモなど (これらに限らず) が含まれます。例えば [Plan グループの週次ミーティング](https://www.youtube.com/watch?v=xXGAcFyBupA)です。
1. [Community coders](https://www.youtube.com/channel/UCVxPq_cVcZ5-ga9OTHKmuOg): **コミュニティ運営のチャンネル** で、チームメンバーやコミュニティメンバー向けのコンテンツ用です。コミュニティのコーディングセッションやペアリングセッションなど (これらに限らず) が含まれます。

**Branded** チャンネルに投稿されるすべてのものは、ブランドと制作基準の品質管理のために、Digital Production を経由する必要があります。動画を Branded チャンネルに掲載すべきかどうか迷っている場合は、[Slack の Digital Production チーム](https://gitlab.slack.com/archives/C01LRUKFQTB)に問い合わせてください。

## 公開ストリーミングまたはプライベートストリーミング

GitLab チーム内のすべての人が、ミーティングやイベントを GitLab Unfiltered でライブストリーミングすることが推奨されています。初めてのライブストリーミングですか？ 以下で方法を確認しましょう！

### なぜライブストリーミングするのか？

私たちはアップロードよりもライブストリーミングを好みます。その理由は:

1. より多くの人々がリアルタイムで参加できる。
1. 後で動画を YouTube にアップロードする必要がない (余計なステップ)。
1. 動画のアップロードを忘れてしまうことがない。
1. すべての参加者にコンテンツが公開されることが明確になる。

ただし、ライブストリーム中ではなく、興味深いことが出てくる場合があります。
その場合は、[YouTube にアップロード](#uploading-conversations-to-youtube)できます。

### ライブストリームの考慮事項

1. [録画動画の開始に関するガイドライン](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording)に必ず従ってください。
1. ホストでない場合、Zoom から直接ライブストリーミングはできませんが、現在のホストは別の参加者をホストに昇格できます。
1. ミーティングに複数のホストがいる場合、**ミーティングに最初に参加したホスト** だけが Zoom から直接ライブストリーミングできます。Zoom ミーティングから、別のチームメンバーがライブストリームの開始のために指定されている場合、ホストは他の人をホストに昇格できます。ホストを変更する手順:
    - ホストはホストコントロールを渡す参加者の名前にカーソルを合わせます
    - 「More」を選択します
    - 「Make Host」をクリックして「Yes」を選択します
    - 新しいホストは Zoom からコールをライブストリーミングできるようになります
1. 通常、ライブストリームの場合、[人々をパネリストに昇格](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063276)を担当する別の人がいると役立ちます。
1. アクセシビリティを向上させるために、[ライブトランスクリプションを有効](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-additional-config/#enable-captions-and-live-transcription)にしてください。
1. **YouTube 動画の説明には機密情報を含めないでください。[非公開動画の説明が公開動画にも反映されてしまう](https://gitlab.com/gitlab-com/business-ops/team-member-enablement/issue-tracker/-/issues/809)バグがあるためです**

### Zoom でのライブストリーム

1. GitLab Unfiltered YouTube チャンネルへのアクセス権を持っていることを確認します。これは、[GitLab Unfiltered アカウント](/handbook/marketing/marketing-operations/youtube/#unable-to-view-a-video-on-youtube)でサインインできることを確認することで確認できます。GitLab Unfiltered で非公開動画にアクセスできない場合は、[アクセス手順](/handbook/marketing/marketing-operations/youtube/#access)に従い、左上隅でサインインしているユーザーが GitLab Unfiltered であり、業務用または個人用のメールアドレスでないことを再確認してください。

1. Zoom の[詳細ミーティングオプション](https://zoom.us/profile/setting#advanced_meeting_options)を構成して、YouTube のライブストリーミングを有効にします。

![click the more button](/images/marketing/marketing-operations/youtube/zoom_livestream_settings.png)

1. \[ More ] ボタンをクリックして `Live on YouTube` をクリックします

![click the more button](/images/marketing/marketing-operations/youtube/zoom_live_on_youtube.png)

1. `GitLab Unfiltered` または `GitLab` を選択します

![choose your account](/images/marketing/marketing-operations/youtube/choose_your_account.png)

1. `[Allow]` ボタンをクリックして YouTube アカウントに権限を付与します

![grant permissions](/images/marketing/marketing-operations/youtube/grant_permissions.png)

1. [録画動画の開始](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording)の手順に従います。

![configure stream](/images/marketing/marketing-operations/youtube/stream_settings.png)

1. ストリーミングが開始されたら、左上の「Live on YouTube」の横にある下矢印をクリックします。次に「Copy Streaming Link」をクリックして、ミーティング後に簡単に参照できるよう、agenda に貼り付けます。

![stream link](/images/marketing/marketing-operations/youtube/youtube-stream-link.jpg)

#### YouTube へのライブストリーム方法のビデオウォークスルー

以下の 5 分間の動画では、Zoom ミーティングから YouTube Unfiltered へのライブストリームを開始する方法を示します。

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/mWWWdbS2q9U" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

ライブストリームを開始しようとしたときに権限エラー (「Please grant necessary privilege for live streaming」など) を受け取った場合、まず上記のステップ 4 で `user@gitlab.com` アカウントを選択する必要があるかもしれません。権限を付与するよう求められるので、付与してください。その後、ステップ 3 に戻り、今度はステップ 4 で GitLab / GitLab Unfiltered を選択します。問題が解決しない場合は、#it-help に連絡してください。

### OBS でのライブストリーム

1. [OBS Studio](https://obsproject.com/download) をインストールして起動します

1. OBS が設定を自動的に構成できるようにします:
    ![OBS Auto-Config](/images/marketing/marketing-operations/youtube/obs_run_autoconfig.png)

1. 推奨されるビデオ設定を承諾します:
    ![OBS Recommended Settings](/images/marketing/marketing-operations/youtube/obs_default_video_settings.png)

1. 「Custom」サービスを選択し、OBS を構成して [GitLab の Unfiltered チャンネル](https://www.youtube.com/live_dashboard?nv=1#)にライブストリーミングします:
    ![OBS Configure Service](/images/marketing/marketing-operations/youtube/obs_configure_stream.png)

1. Sources ツールから「Video Capture Device」として Webcam を追加します:
    ![OBS Add Webcam](/images/marketing/marketing-operations/youtube/obs_video_source.png)

## すべて投稿する

機密情報を含まないものはすべて YouTube に投稿します。
これは以下の点で役立つことがわかりました:

1. **採用** - 候補者がミーティングを見ることで会社の雰囲気を感じることができるため。
1. **リテンション** - 共有することで透明性の価値を強化するため。
1. **コミュニティ** - 人々が会社で起こっていることの一部であると感じられるため。
1. **セールス** - 人々が私たちのトレーニング資料を見ることで、自分自身に売り込めるため。
1. **イネーブルメント** - 人々が特定のテーマに関する詳細なコンテンツを見つけられるため。
1. **認知度** - YouTube に多くの時間が費やされており、私たちの動画は集計すると多くの再生回数があるため。
1. **トレーニング** - YouTube のコンテンツは、チームメンバーであっても消費しやすいため。[なぜ Google Drive を使わないか](#why-not-google-drive)を参照。

## 品質基準なし

何かが十分な品質ではないと心配する必要はありません。なぜなら:

1. [GitLab Unfiltered YouTube アカウント](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/) は、公衆とのコミュニケーションと共有のためのカジュアルなスペースです。Unfiltered チャンネルのコンテンツには、チームミーティング、ディスカッション、月次リリースキックオフ、オフィスアワー、CEO 101 ミーティング、非公式デモなどが含まれます (これらに限らず)。
1. アルゴリズムが動画を適切なサイズの視聴者に配信することを保証します。
1. 関連性のある場所、例えばドキュメントに動画を埋め込むことができます。
1. 必要に応じて後で動画を強化できます ([すぐに開始するようにトリミング](https://support.google.com/youtube/answer/9057455?hl=en)、トランスクリプトの追加、詳細な説明、関連資料へのリンク)。
1. 必要に応じて後でフォローアップできます (再録画、インタビューを行うなど)。
1. トークン漏洩インシデントを避けるために、GitLab Unfiltered に動画をアップロードする前に[シークレットを共有しない](#dont-share-secrets)セクションを必ず読んでください。

## 余計な作業はなし

Unfiltered チャンネル用のコンテンツ作成は余計な作業であってはいけません。
通常通り行うべきことを行えばいいのです。
ただし、ミーティングがより多くの人々にとって興味深い可能性がある場合は、Unfiltered チャンネル用のライブストリームにしてください。
あるいは、より多くの人々に関連する可能性があることについて話し始めるとき、録画ボタンを押してください。

## すばやくプライベートにする

Unfiltered チャンネルの動画について何らかの懸念が提起された場合、誰もが動画をプライベートにする権限を持っています。
許可を待つ必要はなく、チャンネル固有の YouTube Studio に行き、[unfiltered のものはこちら](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload)で動画をプライベートとしてマークします。
ライブ動画用の別のタブもあることに注意してください。
プライベートにする必要のない動画をプライベートとしてマークしてしまっても、簡単に元に戻せます: 単に動画をパブリックとしてマークし直してください。

### シークレットを共有しない

2025 年 7 月から、チームメンバーには [GitLab Video Scanner](https://internal.gitlab.com/handbook/security/product_security/token-leaks/video_scanner/) を使用して動画をアップロードすることが推奨されます。これは、GitLab Unfiltered チャンネルに公開される動画におけるトークン漏洩リスクの軽減を支援する内部サービスです。

シークレット (例: アクセストークン、秘密鍵、パスワード、GitLab インフラストラクチャー上で実行されるシステムへの認証情報) と GitLab チームメンバーの個人データ (電話番号、自宅住所) は、決して公衆と共有してはなりません。シークレットやチームメンバーの個人データを露呈する動画は、公開 YouTube 録画として共有してはなりません。

同様に、内部限定ドキュメントやプライベートまたは機密の Issue は、YouTube 動画で公開してはなりません。

動画にシークレットや機密情報が含まれている場合:

1. YouTube やその他のパブリックプラットフォームに動画を公開しないでください。
2. 動画で露呈したシークレットを直ちに失効させてください。
3. 個人データなどの他の機密情報については、[YouTube Studio の Blur 機能](https://support.google.com/youtube/answer/9057652?hl=en)を使用して情報を編集してください。
4. すべてのシークレットが失効され、機密情報が編集された後でのみ、動画の公開を進めることができます。

ぼかしは、露呈したシークレットを失効させることの代替ではないことを覚えておいてください。常に、ぼかしのみに依存するよりもシークレットを失効させることを優先してください。

シークレットや非公開情報を含む動画が誤って Unfiltered チャンネルにアップロードされた場合、[すばやくプライベートにする](#make-private-quickly)とともに、Slack で `/security` を使用して[セキュリティエンジニアのオンコールに連絡](/handbook/security/security-operations/sirt/engaging-security-on-call/#engage-the-security-engineer-on-call)し、漏洩のフォローアップを行ってください。
最初にシークレットや内部情報を露呈した動画は、すべてのシークレットが失効され、機密情報が編集されたことを確認した後でのみ、再びパブリックにできます。

## なぜ Google Drive ではないのか

Google Drive は動画配信を処理することを意図していないため、長いアップロードと処理時間が一般的です。Google Drive は次のような問題を引き起こす可能性があります:

1. 長いアップロード時間 (場合によっては長いコンテンツで最大 10 時間) で、完了前に失敗するリスクがあります。
1. 拡張された処理時間。Google Drive は再生のために動画をすばやくターンアラウンドすることを意図していません。
1. 損なわれた再生品質。
1. 包括的でない (例: キャプションサポートなし)。
1. 検索のためにインデックス化されていない。
1. 他の従業員と公衆の両方に対して透明性が低い。
1. 複数のデバイスにわたって表示するのが難しい。
1. プレイリスト、チャプター、説明、埋め込み、タイムコードなどの他の重要な機能のサポートがない。

[プライベート動画](#visibility)であっても、動画のために常に YouTube を使用し、Google Drive を決して使用しないでください。なぜなら YouTube 動画は:

1. [より信頼性の高いストリーミング](https://peering.google.com/#/infrastructure)を提供。
1. マウスオーバー時のサムネイルを持つ。
1. より高速で再生できる。
1. 10 秒ブロックで早送りと巻き戻しできる。
1. 後で見るリストに追加することでタイムシフトできる。
1. 例えばハンドブックに埋め込める。
1. リロード後に正しい場所から再開できる。
1. YouTube サポート付きの TV やストリーミングデバイスなど、他のデバイスで簡単に視聴できる。
1. [動画内の特定の時間へのリンク](https://www.h3xed.com/web-and-internet/link-to-a-specific-time-in-a-youtube-video)を許可する。
1. 字幕を自動的に追加できる。
1. [一部のモバイルプロバイダーでゼロ評価](https://www.t-mobile.com/tv-streaming/binge-on)。
1. YouTube は配信チャネルなので、関連性がある場合に自動的に人々に提供される。
1. コメントを残すことで誰でも貢献できる。
1. 公開動画は Google 検索に表示される。
1. 動画が適切な場合、簡単にパブリックにできる。
1. 動画コンテンツのより良い整理を可能にするプレイリストを持つ。
1. 再生回数を表示するので、何が共感を呼ぶかを見ることができる。
1. コメント機能があるので、人々が貢献できる。
1. 投票機能があるので、どの動画が期待を満たしていないかをレビューできる。

## 可視性

可視性には 3 つのタイプがあります:

1. メイン
2. パブリック
3. プライベート

可視性のレベルは、カレンダー招待のタイトルに明確に表示されるべきです。
たとえば、パブリックチャンネルにライブストリームをするときは、招待の冒頭に「Public stream」と書きます。
すべてのストリームはライブなので、ライブストリームでは「live」を省略できます。
あいまいなので「Unfiltered stream」とは言わないでください。
人々がアクセスのレベルを知らないので、単に「livestream」とは言わないでください。

私たちは投稿しません:

1. 限定公開 (Unlisted) 動画 (下記の「[限定公開しない (never unlisted)](#never-unlisted)」セクションを参照)。
2. Branded チャンネルのプライベート動画。そのチャンネルのすべての動画はより広い視聴者向けです。
3. 動画用に Google Drive を使用すること。なぜなら[多くの欠点](#why-not-google-drive)があるためです。

### 限定公開しない (never unlisted)

私たちはどのチャンネルにも[限定公開](https://support.google.com/youtube/answer/157177#zippy=%2Cunlisted-videos)動画を投稿しません: 機密素材には不安全すぎ、公開素材には十分に発見できません。
時々、いくつかの動画は依然として限定公開として投稿されます。これらは(`GitLab Unfiltered` アカウントを使用しながら)この[リンク](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos/upload?filter=%5B%7B%22name%22%3A%22VISIBILITY%22%2C%22value%22%3A%5B%22UNLISTED%22%5D%7D%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D)で見つけられます。
上記でリンクされたリストの動画にホバーしたときに `Details` ボタンをクリックすることで、動画の可視性を変更できます。

## YouTube で動画が表示できない

YouTube で「Video unavailable This video is private.」エラーが表示される場合、エラーは動画が GitLab Unfiltered にプライベートで、個人の YouTube アカウントで動画にアクセスしているために発生する可能性があります。
動画を見るには、

1. YouTube の右上隅にある写真またはアイコンをクリックします。

1. 次に > Switch Account をクリックします

![Switch-Account](/images/marketing/marketing-operations/youtube/Switch_account.png)

1. 次に > GitLab Unfiltered を選択します。あなたの名前のアカウントを選択しないでください。GitLab Unfiltered がオプションにない場合は、[Access](/handbook/marketing/marketing-operations/youtube/#access) を参照してください

![Select-User](/images/marketing/marketing-operations/youtube/YouTube_account.png)

1. GitLab unfiltered になったら、ページを **再読み込み** すると動画を見ることができます

GitLab Unfiltered でプライベート動画にアクセスする方法のビジュアルウォークスルーについては、[この動画](https://www.youtube.com/watch?v=dZtCuOf5aGk)をご覧ください。

## アクセス

1. GitLab Branded チャンネル: アクセスをリクエストするには、[個別アクセスリクエストの Issue](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request) を作成し、[Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) に列挙されたプロビジョナー (列 G) を割り当ててください。
1. GitLab Unfiltered: 全員がオンボーディング中に YouTube Unfiltered へのアクセスを取得すべきです。受信トレイに招待が見つからない場合は、Google Workspace アカウントの [Pending Invitations](https://myaccount.google.com/brandaccounts) セクションを確認してください。招待がそこにない場合、HelpLab を介して People Operations チームに新しい招待をリクエストしてください。

People Operations のトラブルシューティング:

1. チームメンバーが GitLab Unfiltered の招待を受け取っていないと連絡してきた場合、`Manage Permissions` から招待を再送信します
1. チームメンバーが依然として `Pending Invitations` の下に招待を見ない場合、チームメンバーのメールアドレスに対して `Manage Permissions` セクションで `command f` を行うことで、元の招待を取り消します。メールアドレスの横の `X` をクリックして取り消すことができます。
1. 招待を取り消したら、YouTube Unfiltered ページを閉じて再度開きます。
1. 再開したら、`Manage Permissions` を選択し、`Add` オプションをクリックしてチームメンバーのメールアドレスを入力することで、チームメンバーを再招待します。
1. これは [こちら](https://myaccount.google.com/brandaccounts)の `Pending Invitations` セクションに表示されるはずです。

## コメント

私たちのチャンネル動画の 1 つでユーザーコメントを見つけて返信する場合、それは会社からの公式コミュニケーションとして認識されることを覚えておいてください。**ほとんどすべての場合、あなたの仕事が特にコミュニティマネージャーロールまたはキャパシティでの対話を必要としない限り、YouTube で動画やユーザーと関わる前に個人アカウントに切り替えるのが最善です。**

個人アカウントに切り替え、コメントに返信し、自分が GitLab 従業員であることを明らかにしてヘルプを提供することを検討してください。

会社関連の YouTube プロフィールを使用して非 GitLab YouTube アカウントの動画にコメントしないでください。GitLab としてのコメントは、私たちのチャンネルでの自社動画への返信のみに予約されています。

## チャンネルへの登録

GitLab Unfiltered YouTube アカウントは、以下の例外を除き、どのチャンネルにも **登録すべきではありません**:

- [`@Gitlab`](https://www.youtube.com/@Gitlab)。

## ハウスクリーニング

GitLab Unfiltered YouTube アカウントは共有スペースです。時々、チームメンバーが個人アカウントにいると思って、誤って[コメント](#commenting)したり[チャンネルに登録](#subscribing-to-channels)したりすることがあります。

このハンドブックのルールに違反するチャンネル登録やコメントを見つけた場合、GitLab Unfiltered YouTube アカウントを清潔に保つために行動を起こす偏りを示してください。誤ったチャンネル登録やコメントを削除して、YouTube アカウントを清潔な状態に戻してください。関連するコメントや登録を削除できない場合は、[HelpLab](https://helplab.gitlab.systems/esc?id=emp_taxonomy_topic&topic_id=57e1ad3997804e50a326158de053af3d) を介して直ちに People Operations チームに通知してください。

## 整理

私たちの YouTube チャンネルには多くのコンテンツが含まれています。
そのため、特に Unfiltered チャンネルでは、動画が公開された後にそれらを見つけるのが難しいことがよくあります。
[タグ](https://support.google.com/youtube/answer/146402)と[プレイリスト](https://support.google.com/youtube/answer/57792)を自由に使用して、公開する動画コンテンツを整理してください。
Unfiltered チャンネルに投稿される定期ミーティングの公開された録画については、動画を入れるプレイリストを検索してください。該当するプレイリストがない場合は作成してください。タイトル、説明、タグに特定のテキストを含む新しい動画を自動的に追加するプレイリストを作成して、手動ステップを避けることもできます ([手順](https://support.google.com/youtube/answer/6084053?hl=en))。

## YouTube のオーディエンス

公開時に、YouTube はコンテンツが子供向けに作成されているかを尋ねます。GitLab のコンテンツは「No, it's not made for kids」とマークすべきです。

## 「livestream」または単に「recording」と決して呼ばない

何かが公開かプライベートかを常に知ることが不可欠です。
カレンダー招待のタイトルに常にそれを記載してください。

したがって以下のように言ってください:

- Public stream
- Private stream
- Public recording
- Private recording

「livestream」または「recording」とは決して言わないでください。これらはあいまいです。[最も誤用される用語のトップ](/handbook/communication/top-misused-terms/#livestream)を参照。

### ストリームが公開かプライベートか分からない場合は？

プライベートか公開かが不明確な録画や、YouTube で公開する前に Legal チームのレビューが必要な録画もあります。録画がプライベートだとチームに伝えてから、その録画を公開に変更するのは不誠実です。このシナリオでは、これが `Reviewed Stream` または `Reviewed Recording` であると述べるべきです。このストリームは最初プライベートであり、Legal レビュー時に公開に変更される可能性があります。

## ライブストリームの開始

以下の手順は、YouTube へのライブストリームに適用されます。

1. モデレーターはホストに「これから公開/プライベートストリームを開始します。Zoom の左上隅に YouTube アイコンが表示されたらすぐに話し始める準備はできていますか？」と尋ねます。公開かプライベートかを必ず述べてください。
1. ホストが確認した後、モデレーターは `Live to YouTube` をクリックしてライブストリームを開始します。
1. ホストは、自分が誰であるか、自分の役割は何か、ミーティングは何についてかを述べる紹介を行うべきです。例: 「私は Jane Doe で、ウィジェット制作担当 VP です。今日のグループカンバセーションは、ウィジェット制作の成形フェーズについてです。」
1. 録画開始時に「This meeting is being recorded」というメッセージが流れる場合、ホストはそれを上書きして話すべきです。さもないと録画動画は気まずい間を防ぐために編集が必要になります。ライブストリーミングはこのメッセージをトリガーしません。録画のみがトリガーします。

### 便利なリンク

- [My Live Events: 今後のライブイベントのスケジュールとレビュー](https://www.youtube.com/my_live_events)
- [YouTube ライブストリーミング紹介ページ](https://support.google.com/youtube/answer/2474026?hl=en) - ここでチャンネルがライブストリーミングのすべての要件を満たしているか確認できます
- [ライブストリームの設定に関する YouTube チュートリアル](https://support.google.com/youtube/answer/2853700?hl=en) - 一般的な YouTube ライブストリームの設定について追加のヘルプや情報が必要な場合
- [YouTube ライブダッシュボード](https://www.youtube.com/live_dashboard#) - ここでエンコーダー設定変数を見つけ、ストリームを管理し、チャットを表示できます

## YouTube への会話のアップロード

<iframe width="560" height="315" src="https://www.youtube.com/embed/xGwX9zjNr2E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

1. アップロードではなく[公開またはプライベートストリーミング](#public-or-private-streaming)をデフォルトとしてください。
1. [録画動画の開始](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-recording)プロセスに従ってください。
1. 別途記載または手配されていない限り、ミーティング後に動画を配信する責任はミーティング主催者にあるという期待される動作です。
1. ミーティングの [Zoom](https://zoom.us/) アカウントにログインし、右側のメニューに移動して「My Recordings」を選択します (録画が共有可能になるまで最大 30 分かかる場合があります)。
1. ミーティングを選択し、録画をコンピュータにダウンロードします (録画がしばらく前のものだったために見つからない場合は、左上のメニューの「Trash」を確認し、録画を「Recover」してください)。
1. [YouTube アップロードページ](https://www.youtube.com/upload)に移動し、[チャンネル](#channels)にログインします。個人の YouTube アカウントにログインしている場合、最初にチャンネルにアクセスするために GitLab YouTube アカウントにログインする必要があるかもしれません。すでに GitLab YouTube アカウントにログインしていてチャンネルにアクセスできる場合、そのチャンネルにアカウントを切り替える必要があります。アカウントを切り替えるには、右上隅のアカウントアイコンをクリックして「Switch account」をクリックします。
1. 録画をウィンドウにドラッグアンドドロップしてアップロードします。プライバシードロップダウンをデフォルトの「Public」設定のままにします (機密素材がある場合を除く)。動画に機密素材が含まれている場合は、ドロップダウンメニューを使用して動画をプライベートに設定します。
1. アップロード中に、タイトルと説明を編集します。動画が私たちの YouTube チャンネルでプライベートのままになる場合は、動画タイトルの先頭に「Confidential:」を配置します。
1. 説明には関連リンク (例: ハンドブックページやプレゼンテーション) を必ず含め、関連するプレイリストに動画を追加してください。
1. 「Comments and ratings」セクションで、「Hold potentially inappropriate comments for review」を選択します。これにより、すべての有効なコメントが投稿でき、誰もが貢献できますが、スパムや軽蔑的なコメントはレビューのために保留されます。コメントセクションを開きたくない、または各コメントをモデレートする必要がある動画があるかもしれません。動画がこの方向性を必要とする可能性があると思う場合は、#marketing Slack チャンネルに質問を追加してください。
1. アップロードが完了したら、publish を押し、Embed タブをクリックしてコードをコピーし、ハンドブックまたはドキュメントの関連部分に挿入します。
1. GitLab Unfiltered チャンネルに動画をアップロードした後、Slack の #content-updates チャンネルに新しい動画へのリンクを必ず追加してください。

## 品質を心配しないでください

1. 最低品質はないので、不適切または機密のものがない限り、私たちの [GitLab Unfiltered YouTube チャンネル](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A?view_as=subscriber)で共有してください。
1. 会社の全員が、おそらく週に少なくとも 1 回はより多くの人々に関連する会話を持っているので、それを共有してください。
1. 機密素材がある場合を除き、私たちは常に動画を[限定公開にする](#never-unlisted)代わりに公開でリストアップします。これにより、より多くの人々がコンテンツを見つけることができます。素材が機密である場合、動画をプライベートに設定してください。
1. 絶対にすべての人にとって興味深いかどうかを心配する必要はありません。何についてのものか分かるように分かりやすいタイトルを付け、視聴すべきかどうかを _彼ら_ に決めさせてください。
1. すべての参加者が録画していることを認識していることを確認してください。
1. 録画を開始するときに、それが興味深く共有しても OK だと確信する必要はありません。事実の後でその決定を行うことができます。
1. 携帯電話で対面の会話を録画する場合は、携帯電話を横向き (水平) モードで持ってください。

## 高度なセットアップ

ニーズに応じて、オーバーレイを提供したり、音声を再ルーティングしたりするためにソフトウェアを使用したい場合があります。
GitLab の人々の 99% はこれを使用しませんが、使用したい場合は以下の手順を参照してください。

### エンコーダー

- [OBS Studio Win/Mac/Lin Open Source](https://obsproject.com/) または mac で 'brew install --cask obs' でインストール

### 音声の再ルーティング

- [Soundflower Mac Open Source](https://github.com/mattingalls/Soundflower) または `brew install --cask soundflower` でインストール
- [Loopback Mac Closed Source](https://www.rogueamoeba.com/loopback/) - 優れたクローズドソース代替
- [Windows の代替](https://www.reddit.com/r/audioengineering/comments/3geqse/soundflower_alternative_on_windows/)
- [Linux の代替](https://askubuntu.com/questions/602593/whats-a-good-soundflower-replacement-for-ubuntu)

### セットアップ

- OBS Studio (エンコーダー) と音声再ルーティングソフトウェアの両方をインストールします。
- チャンネルがライブストリームの準備ができているかを[確認](https://support.google.com/youtube/answer/2474026?hl=en)します。
- [YouTube ライブダッシュボード](https://www.youtube.com/live_dashboard#)でエンコーダー変数をコピーし、ライブストリーミング環境をセットアップします
- OBS Studio を開き、preferences を開きます
- 「Stream」の下にエンコーダー変数を入力します

![obs studio preferences](/images/marketing/marketing-operations/youtube/OBS_Studio_Stream.jpeg)

- 録画予定のソフトウェアの音声を、代替の音声ソース/出力に再ルーティングするように構成します。
- OBS Studio の preferences の「Audio」の下で、Mic/Auxiliary Device 2 の下で代替の音声ソース/出力を選択します。詳しいヘルプは[このページ](https://code-zest.blogspot.com/2016/02/setting-up-obs-with-audio-output-in-mac.html)を参照
- 「Video」の下で、お好みの解像度と fps 設定を選択します。これらは、`1920x1080` のようなビデオアスペクト比を最適に反映するべきであることに注意してください。
- 必要に応じて「Output」の下でいくつかの出力オプションを設定できます
- OBS Studio の通常のウィンドウで、「Mic/Aux 2」を含む 2 つの音声スライダーが表示されるはずです。これらを好みに応じて構成します。
- 「Start Streaming」を選択: _これでストリーミング中です_
- [YouTube ライブダッシュボード](https://www.youtube.com/live_dashboard#)に移動して、ライブストリームを表示し、視聴者と対話します。

## いつ録画して YouTube に公開するか

<iframe width="560" height="315" src="https://www.youtube.com/embed/RB8OC70RAfo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
