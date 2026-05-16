---
title: "その他のアプリ"
description: このページでは、GitLab でのワークフローに役立つかもしれない様々なアプリを紹介します。
upstream_path: /handbook/tools-and-tips/other-apps/
upstream_sha: 68af60af15ea4dcb51c3d985f7473b212e4f2cb4
translated_at: "2026-05-07T15:33:18Z"
translator: claude
stale: false
lastmod: "2026-03-17T12:53:03-04:00"
---

### 一般的なセキュリティのヒント

私たちの [利用規定ポリシー](/handbook/people-group/acceptable-use-policy/) を確認してください。

一部のツールや拡張機能は、各種業務アカウントに統合され、それらに対する特定の権限を要求します。アプリケーションが要求する権限には常に注意してください。たとえば、ユーザープロフィールの読み取りのみを要求する GitLab 統合は適切ですが、API への読み書きアクセスを持てる統合は適切ではありません。同様に、業務アカウントに紐づいた GitLab の [パーソナルアクセストークン](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) をサードパーティのツールに入力するべきではありません。

以下は、網羅的ではないガイドラインです:

- アプリケーションが業務アカウント（GitLab、Google、Okta など）の認証情報（パスワード、アクセストークンなど）を要求する場合、認証情報を入力せずアプリケーションを削除してください。
- アプリケーションが OAuth を使用する場合、要求される権限が非常に最小限である場合（公開プロフィールへのアクセスなど）にのみアカウントへのアクセスを許可してください。

    ![プロフィールスコープでの OAuth 認可画面](/images/tools-and-tips/oauth1.png)

    アプリケーションが API への読み取り専用アクセスや、機密データへのアクセスを許可しうる何らかを要求する場合、認証プロセスを続行せずアプリケーションを削除してください。

    ![プロフィールおよび read_api スコープでの OAuth 認可画面](/images/tools-and-tips/oauth2.png)
- 何らかの「アプリストア」からインストールする場合は、レビュー、ダウンロード数、特にアプリストアで審査されたことを示す「バッジ」を確認してください。たとえば Chrome ウェブストアには、人気の信頼できるアプリケーション向けの [フィーチャーバッジ](https://support.google.com/chrome_webstore/answer/1050673?visit_id=638011195121439702-999154480&p=cws_badges&rd=1#cws_badges&zippy=%2Cunderstand-chrome-web-store-badges) があります。
- 疑問があるなら、アプリケーションをインストールしないでください。

いずれの場合も、サードパーティアプリのインストール前に、私たちの [個人利用ソフトウェアリクエスト](/handbook/finance/procurement/individual-use-software/) プロセスの利用が推奨されます。

## インターネットブラウザー

### 広告のプライバシー

画面を共有してアイデアを伝えるのは非常に生産的ですが、Web ページにパーソナライズされた広告が表示されるのは望ましくないかもしれません。
設定で関心ベースの広告をオフにしましょう。
[Google 広告設定](https://adssettings.google.com/)、[AdChoices](https://optout.aboutads.info/?c=2&lang=EN)

### ブラウザー拡張機能

GitLab が管理するデバイス上のブラウザー拡張機能は、許可リストモデルで管理されています。Corporate Security によって審査・承認された拡張機能のみがインストールできます。それ以外の拡張機能はデフォルトでブロックされます。

承認済み・ブロック済みの拡張機能の最新リスト、新しい拡張機能のリクエスト方法や関連ポリシーについては、[内部ドキュメント](https://corpsecdevices-gitlab-io-a3d14d.gitlab.io/Policies/Chrome/Approved_Extensions/) を参照してください。

#### One Tab

[One Tab (無料)](https://www.one-tab.com/) は、タブをソートおよびエクスポート可能なリストに変換します。

#### SessionBox

[SessionBox](https://sessionbox.io/) は複数のセッションを扱えるブラウザー拡張機能です。
特定のセッションをタブにバインドします。
これは、同じブラウザーで異なるユーザーでテストする場合に特に便利です。

#### RSS Feed Reader

新しく作成された Issue について毎日通知を受け取りたい場合、Chrome 拡張機能 [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) はこのタスクを達成するための優れたツールです。
拡張機能をインストールしたら、フォローしたいプロジェクトページにアクセスし、プロジェクト Issue の下にあるページ右上の「Subscribe to RSS feed」ボタンをクリックします。

### ブラウザーでのプロトタイピング

バグレポートや機能提案の一部として、Web ページの小さなテキストや視覚的な変更をキャプチャするだけでよい場合があります。
ほとんどのブラウザーに通常組み込まれている [開発ツール](https://en.wikipedia.org/wiki/Web_development_tools) を使用すると、ページ要素の属性を選択・編集したり、ボタンやリンクなどのページ要素を移動したりできます。

[`designMode`](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode) 属性を使用して、開発ツールのコンソールに `document.designMode="on";` と入力するか、以下のボタンをブックマークバーにドラッグしてブックマークを作成することで、Web ページ全体を編集可能にできます。

<a href="javascript:document.body.contentEditable='true'; document.designMode='on'; void 0" class="btn btn-primary">Edit page</a>

## ノート／執筆

ノートや執筆ツールの一部はバックエンドでクラウドサーバーを利用しているため、機密情報を入れないでください。

### Bear

[Bear (無料)](https://bear.app/) は、ノートや長文執筆向けのクリーンな執筆ツールです。
[Ulysses ($5/月)](https://ulysses.app/) も素晴らしい選択肢です。

### LanguageTool

Grammarly の代替として、ブラウザーの LanguageTool とローカルの LanguageTool サーバーを組み合わせることができます。
これにより、スペルチェックと文法チェックの利便性と機密性の両方を維持できます:

1. [LanguageTool ブラウザー拡張機能](https://languagetool.org/#firefox_chrome) をインストールします。
1. [LanguageTool を Homebrew のサービスとしてインストール](https://formulae.brew.sh/formula/languagetool) するか、
   [Docker エンジンをインストール](/handbook/tools-and-tips/mac/#docker-desktop) して、
   任意の [LanguageTool Docker イメージ提供者](https://github.com/languagetool-org/languagetool#docker) のセットアップ手順に従います。
1. ブラウザー拡張機能を `Experimental settings > Local server` で設定します。

### Simplenote

[Simplenote](https://simplenote.com/) は無料のオープンソースなノート取りアプリで、クロスプラットフォーム、全デバイス間で同期し、Markdown をサポートしています。

## 生産性

ノートやトラッキングで参照されている拡張機能と同様に、これらのツールの一部はクラウドサーバーを利用しているため、機密情報を入れないでください。

### Alfred

[Alfred](https://www.alfredapp.com/) は macOS 向けのアプリケーションランチャー兼生産性ツールです。
コアアプリは無料でダウンロード・利用できますが、有償の [Powerpack](https://www.alfredapp.com/powerpack/) は、より強力な検索機能、素晴らしいクリップボード履歴機能、アプリ統合、シェルコマンドへの簡単なアクセスなどを有効にします。
開発者にも一般的な生産性愛好家にも、優れたツールです。
クリップボード履歴機能は多くのツールとうまく統合されており、たとえば 1Password からコピーされたパスワードは貼り付け後に忘れられます。

Alfred はカスタム検索を作成する機能を追加します。docs とハンドブックを検索する 2 つを以下に示します。

```url
https://docs.gitlab.com/search/?q={query}
```

```url
https://handbook.gitlab.com/handbook/#stq={query}&stp=1
```

詳細と自動追加方法については [Alfred を使用した検索](/handbook/tools-and-tips/searching/#searching-using-alfred-on-macos) を読んでください。

[GitLab チームメンバーがメンテナンスしているリポジトリ](https://gitlab.com/gitlab-org/alfred) にも、GitLab 関連のワークフローがあります。

### Brain.fm

[Brain.fm (無料トライアル)](https://www.brain.fm/) は、集中、リラックス、瞑想、リチャージ、睡眠（飛行機での移動に最適）を助けるよう特別に設計された音楽を提供します。
ただの音楽ではありません。
彼らは結果を得るために科学的に検証された脳波操作を使用しています。
驚くほど効果があり、本当に機能します。
必ずヘッドフォンで使用し、脳が慣れるのに 10〜15 分かけてください。
（月額 $6.95／四半期 $15.99／年額 $47.40）

### Calendly

**注**: Google カレンダーは [予約スケジュールの作成](https://support.google.com/calendar/answer/10729749?hl=en) のサポートを追加しました。これは Calendly が提供する機能と同様です。

[Calendly](https://calendly.com/) は Google カレンダーに接続し、GitLab 外の人があなたの時間を簡単に予約できるようにします。
GitLab チームメンバーとミーティングをスケジュールする場合は、Google カレンダーを使用し、[ミーティングのスケジュール](/handbook/communication/#scheduling-meetings) に関するハンドブックのガイダンスに従ってください。

1. [Calendly](https://calendly.com/) をセットアップします。まず GitLab メールアドレスでサインアップし、利用規約に同意してから Google SSO で認証します。
1. GitLab Google カレンダーにリンクし、人々があなたとの通話をスケジュールできるようにします。
1. [Zoom ミーティング設定](https://gitlab.zoom.us/meeting) に移動し、*Personal Room* タブを選択して *Invite Link* の値をコピーすることで、個人的なミーティングルームの URL を取得します（*Copy the invitation* は使用しないでください）。
1. Basic Calendly Subscription（無料）を使用している場合、一度に 1 つのイベントタイプ（15、30、45、60 分のいずれか）のみをセットアップできます。Customer Support などの有償プランを利用しているチームは、複数のイベントタイプを設定できます。
1. 以下のイベント説明テキスト（`{}` 内のテキストをご自身の情報に置き換えて）で目的の時間枠をセットアップします。説明のため 45 分を使用します:

> This will be a Zoom Meeting at {Zoom personal meeting room URL}
>
> Question? Please email me. {your GitLab email}

1. イベント名を `45 Minute Meeting` に設定します。
1. イベントリンクを `45min` に変更します。
1. イベントの説明は 15、30、60 分のミーティングにもコピーする必要があります。
1. 他のイベントタイプを使用する予定がある場合は、それらのイベント説明にもこれを追加してください。
1. GitLab Inc 外の人には、45 分の時間枠に直接リンクする Calendly リンクを送信します: 「`https://calendly.com/XXXXX/45min/` の中で都合のよい時間はありますか？ あれば予約してください。なければ都合の良い時間をお知らせいただければ、別の時間を見つけます。」
1. アクション歯車をクリックしてイベントタイプ（例: 15 分のミーティング）の編集オプションをクリックし、イベント詳細で「When can people book this event?」セクションをクリックして「Availability」セクションをクリックすることで、[Calendly イベントタイプ](https://calendly.com/event_types/) で空き状況を更新します。
   ここで、ミーティングを受け付けたい勤務時間を設定でき、「Advanced」タブでは強制したい最小スケジュール通知時間を設定できます。
   Calendly は Google カレンダーと同期して空き状況を表示しますが、Calendly でさらなる制限を設定したい場合があります。
   1 つのイベントを設定したら、他のすべてのイベントで「Copy Availability From」オプションを使用できます。

通常の Google カレンダーイベントとは異なり、Calendly イベントは変更時に両当事者間で自動的に同期されないことに注意してください。
イベントをキャンセルまたは変更する必要がある場合は、必ず Calendly で行ってください。

### Freedom

特に集中が必要な期間に、気が散る Web サイトに切り替えてしまい、それが生産性に影響するのではないかと心配な場合は、[Freedom](https://freedom.to/why) の利用を検討してください。
彼らのブラウザー拡張機能、モバイルアプリ、デスクトップアプリは、設定可能なセッション時間中、気が散る Web サイトやアプリをブロックします。
筋肉の記憶で `f` を打って `enter` を押してしまうことがあっても、友達のランチ写真を延々とスクロールすることはありません。

### Paste

[Paste for macOS](https://pasteapp.io/) はクリップボードマネージャーで、コピーしたものすべてを保存し、オプションで全デバイス間で同期します。
頻繁にコピーするデータをピンボードに整理できるので、同じデータを何度もコピーする必要がなく、検索、複数貼り付け、見やすいビジュアルユーザーインターフェースを提供します。

### ポモドーロテクニック

[ポモドーロテクニック](https://en.wikipedia.org/wiki/Pomodoro_Technique) は、時間を「作業」と「休憩」の間隔に分割することで生産性を高める、シンプルな時間管理プロセスです。
簡単に言うと、30 分の各時間ブロックを 25 分の作業セッションと 5 分の休憩セッションに分割します。
1 日が終わるまで 1 時間に 2 回これを行い、どれだけ完了したかに驚きましょう。

各種 [Chrome 拡張機能](https://chrome.google.com/webstore/search/pomodoro "Chrome ウェブストア - pomodoro")、[Firefox アドオン](https://addons.mozilla.org/en-US/firefox/search/?q=pomodoro "「pomodoro」の検索結果 – Firefox 用アドオン (en-US)")、モバイルアプリ、デスクトップアプリ、さらには洒落た物理的な目覚まし時計まで、間隔を追跡するのに役立つツールが利用可能ですが、手元のほぼあらゆるタイマーを使用できます&mdash;特にキッチンにあるかわいいトマトのタイマーが最適です。

### Quitter

[Quitter (無料)](https://marco.org/apps) は、一定の非アクティブ期間後にアプリをオフにします。
新着メッセージを常にチェックしたい衝動を減らすため、しばらくしたら Slack を非表示にする用途を検討してください。Quitter は Mac でのみ利用可能です。

### Raycast

[Raycast](https://www.raycast.com/) は、macOS 上の [Alfred](#alfred) や Spotlight に似た生産性ツールです。アプリをダウンロードして、お好みのショートカットを選択してください。`cmd + space` をショートカットとして選択すれば、Spotlight を完全に置き換えることもできます。

コアアプリには多くのワークフローが組み込まれており、[ストア](https://www.raycast.com/store) からの拡張機能は Web から直接、または組み込みの [拡張機能検索](https://developers.raycast.com/basics/install-an-extension) を使用してインストールできます。

GitLab ドキュメント、ハンドブック、Pajamas デザインシステムを検索する [GitLab チームメンバーがメンテナンスする非公式拡張機能](https://www.raycast.com/saschaeggi/gitlab-docs) があります。

**セキュリティ上の理由から、パーソナルアクセストークン（PAT）を使用する GitLab 用拡張機能は使用しないでください。**

### TripMode

[TripMode ($7.99)](https://tripmode.ch/) は、どのアプリがインターネットを使用できるかを制御できます。
これはセルラー／従量制接続で作業している場合に特に便利です。TripMode は Mac でのみ利用可能です。

### Stream Deck

ホットキーを覚えるのが苦手であったり、複数ステップの自動化が必要な場合、[Stream deck](https://www.elgato.com/ww/en/s/welcome-to-stream-deck) などが最適かもしれません。Stream Deck では、ボタンをプログラムして単一のキー押下で複雑な一連のアクションを実行できます。

#### Stream deck で Apple ショートカットを使う方法

公式統合の他に、Apple のショートカットアプリを使用して、プログラミング知識なしで、外部プラグインを必要とせずアクションを定義する簡単な方法を利用できます。

1. Stream deck のボタンにバインドしたいショートカットをショートカットアプリで追加します。
   - 注: 後でショートカットを実行するために名前を識別する必要があるため、複雑すぎる名前は使用しないでください。空白は使用できます。
1. 以下のコードをコンピュータに `ShortcutScript.scpt` として保存します（リネームしてもよく、`scpt` 拡張子だけが重要です）。Stream deck がこのスクリプトを参照するため、後で見つけられる場所に保存し、削除するとボタンも壊れることに注意してください。

   ```applescript
   on run argv
      tell application "Shortcuts Events"
         set shortcutName to item 1 of argv
         run shortcut shortcutName
      end tell
   end run
   ```

1. Stream deck アプリケーションに新しいアクションを追加します。これには System > Open をテンプレートとして使用します。アクションのタイトルは自由に選択でき、これは自身の参照用であり、ショートカットとは何の関係もありません。App/File については、ファイルロケータを使用してステップ 2 の .scpt ファイルを参照できます。その後、入力フィールドにクリックで戻り、ファイルロケータがパスの周りに追加したアポストロフィを削除する必要があります。これでショートカットの名前をスクリプトに渡せます。ショートカットの名前に空白がある場合は引用符で囲む必要があります。たとえば `Active Speaker` というショートカットの場合、App/File 入力には次が含まれている必要があります: `/path/to/script/ShortcutScript.scpt "Activate speaker"`

1. 必要に応じて、さらにアクションを追加します。.scpt ファイルがパラメータ化されているため、ステップ 2 を繰り返す必要はなく、すべてのショートカットでこのスクリプトを使用できます！

#### その他の Stream deck ユースケース

- OBS でのシーン切り替え
- マイクのミュート
- スピーカーとヘッドフォンの切り替え
- 言語とキーボードレイアウトの切り替え
- タイマーの開始（残り時間をボタンに表示する優れたポモドーロアプリがあります）
- おやすみモードの有効化／無効化
- 照明の制御とシーンの変更

## テキストエディタ

### GitHub Copilot

GitHub は 2021 年に [Copilot](https://github.com/features/copilot/) という、VSCode 内でその場での提案を行う AI 駆動ツールをリリースしました。これは興味深くエキサイティングなツールです。しかし現時点では、提案されるコードが [私たち自身のプロジェクトと互換性のあるオープンソースライセンス](https://gitlab.com/gitlab-org/gitlab-foss/-/blob/master/LICENSE) で管理されているコードベースから厳密に提供されている保証はなく、ライセンス上の競合を引き起こす可能性があります。提案のライセンスが確立されるまで、Copilot は使用しないでください。

## ビデオ通話

### Krisp

[Krisp](https://krisp.ai/) は、騒がしい環境にいる際にバックグラウンドノイズをミュートし、通話で聞き取りやすく、聞かせやすくします。

### Shush

[macOS 用の $4.99 ツール](https://mizage.com/shush/) で、ホットキー（たとえば `fn`）を設定してマイクをミュートできます（「プッシュ・トゥ・トーク」または「プッシュ・トゥ・ミュート」）。
話したりミュートしたりするためにウィンドウフォーカスを Google Hangouts や Zoom に切り替える必要はもうありません。
アイコンはマイク入力の現在の状態を示します（x はミュート）。
右クリック（または設定したホットキー）で、プッシュ・トゥ・トークとプッシュ・トゥ・ミュートを切り替えられます。
参加直後に Zoom／Google Hangouts でマイクのブロック解除を忘れないでください。
fn+下矢印でページアップを使うと有効化されてしまうので注意してください。
fn+上矢印の代わりにスペースでページダウンを使用してください。
**警告**: 購入前にヘッドセットの互換性を確認してください。
多くの USB ヘッドセットはミュート不可能です。

#### Linux 向けの Shush 代替

Linux（[Arch](https://archlinux.org/)、[Ubuntu](https://ubuntu.com/)、[Fedora](https://fedoraproject.org/) など）を使用している場合、システム全体のキーボードショートカットを作成してマイクをミュート／ミュート解除できます。
これはサウンドに [ALSA](https://www.alsa-project.org/wiki/Main_Page) を使用する Linux ディストリビューションでのみ動作することに注意してください（ほとんどの一般的な Linux ディストリビューションは ALSA を使用しています）。
必要なのはデスクトップ環境の *キーボード設定* に移動して、`amixer set Capture toggle` コマンドでカスタムショートカットを作成し、お好みのキーの組み合わせ（たとえば `Pause Break` キー）を割り当てるだけです。
これが完了すると、任意のアプリケーション内で割り当てたキーボードショートカットを使用してマイクをミュート／ミュート解除できます。
詳細については [Askubuntu](https://askubuntu.com/questions/12100/command-to-mute-and-unmute-a-microphone/13364) のオリジナルの回答を参照してください。

### Webex

GitLab は内部および外部のコミュニケーションのための主要なビデオコラボレーションプラットフォームとして [Zoom](https://zoom.us/) を使用しています。私たちのお客様やパートナーの一部は別の好みのツールを持っており、それらの当事者とのコミュニケーションを促進するため、GitLab は WebEx のライセンスを提供しています。このサービスはミーティングをホストする業務上のニーズがあり、Zoom が受け入れられないチームメンバーにのみ提供されます。

- これらのツールへのアクセスをリクエストするには、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) を作成し、アクセスの正当な理由を提供してください。
- [ネイティブアプリ](https://www.webex.com/downloads.html) のインストールを検討してください。チームメンバーから Safari で WebEx を使用しようとした際に問題が報告されているため、ミーティングのホストや参加には Google Chrome などの他のブラウザーの使用をおすすめします。
- Webex ミーティングに参加する前に、[テストミーティング](https://www.webex.com/test-meeting.html) に参加することで Webex が正しくセットアップされていることをテストできます。
- ブラウザー内プラグインの画面共有が動作しないことがあります。

### Whereby

[Whereby](https://whereby.com/) を使用すると、ログインもインストールも不要で、最大 4 人の参加者向けの無料ビデオチャットルームを瞬時に作成できます。
信頼できる無料のモバイルビデオ会議アプリも提供しています。

## 動画、GIF、スクリーンショット

### Loom

[Loom (無料)](https://www.loom.com/) は、動画ウォークスルー用の便利な Chrome プラグインツールです。
デモ録画や内部／外部ドキュメント用の素晴らしいツールです。注: Loom 動画はデフォルトで公開されているため、非公開のままにすべきデータを公開していないことを確認してください。GitLab には Loom ワークスペースがあり、ライセンスについては [tech stack ページ](/handbook/business-technology/tech-stack/) の指示に従ってください。

## 言語と翻訳

### DeepL

GitLab ハンドブックとその他のほとんどのコンテンツは英語で書かれています。ノンネイティブスピーカーの英語がかなり良くても、コンテンツが洗練されすぎていて翻訳が歓迎される場合があります。別のブラウザータブやアプリへの面倒なコピー＆ペーストを避けるには、[DeepL 翻訳](https://www.deepl.com/en/translator) を使用すると簡単にできます。
DeepL は Web サイトとして利用可能ですが、Mac アプリとしても無料で利用できます。MacOS 上のショートカットを使用すると、ハンドブックから選択したテキストをアプリにそのまま取り込み、翻訳を開始できます。Linux ユーザーは Chrome 拡張機能のみ使用でき、右クリックして別のタブで Web 版を開きます。
