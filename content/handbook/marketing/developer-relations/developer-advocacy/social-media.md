---
title: "ソーシャルメディアでのデベロッパーアドボカシー"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/social-media/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: "2026-06-08T11:30:44+02:00"
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

## はじめに

デベロッパーアドボカシーは、ソーシャルメディアとコミュニティエンゲージメントを通じてソートリーダーシップを構築します。ここで共有されるヒントと戦略は、チームメンバーや広範なコミュニティが GitLab のエバンジェリストおよびアドボケイトとして自身のプロフィールを構築するのに役立ちます。

トピック:

- 教育と学習: 自身の経験から得たヒント。ワークショップ、スライド、ブログ記事、動画など。
- イベントのライブ投稿。スクリーンショット、写真、メッセージでトークを増幅します。
- [リリースエバンジェリズム](#release-evangelism): 個人的な見解を交えて機能の知見を共有します。
- コミュニティと顧客のベストプラクティス、および GitLab の知見。
- GitLab への貢献、顧客が GitLab と共創することの奨励。

### UTM トラッキング

GitLab のデベロッパーアドボケイトには、コンテンツ共有のパフォーマンスを測定する分析と知見を得るために [URL のタグ付けとトラッキング用の UTM](/handbook/marketing/developer-relations/developer-advocacy/#utms-for-url-tagging-and-tracking) を追加することを推奨しています。この方法は [KPI 指標](/handbook/marketing/developer-relations/content-effectiveness/)を検証するのに役立ちます。

## ターゲットプラットフォーム

LinkedIn は、コンテンツ配信、リリースエバンジェリズム、顧客エンゲージメントの主要なターゲットプラットフォームです。

> 注: 2024 年の Twitter/X におけるプラットフォーム変更と、それに伴うコンテンツエンゲージメントの低下を受けて、私たちは FY25Q4 においてデベロッパーアドボケイト向けのプラットフォームとして Twitter/X の優先度を下げました。

ソーシャルプラットフォームの評価:

- Bluesky、進行中。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/277)。
- Mastodon、停止。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/123)。

### 一般的なソーシャルメディアのヒント

以下のセクションでは、エンゲージメント、リーチを高め、コンテンツを増幅するためのソーシャルメディアのベストプラクティスを紹介します。

#### メッセージのヒント

- メッセージは短く魅力的にします。複数の文がある場合は、リストに分割します。
  - 💡 リストのマーカーに絵文字を使います。これは何かを学ぶことを表します。
  - 🏗 こうすることで、ユーザーはあなたが共有して一緒に構築したいもの、例えば CI/CD を学べます。
  - 🔥 適切な絵文字を選びます。これは例えば素早い成功を表します。
  - 🛡️ この絵文字はセキュリティ関連に使えます。
  - 🌱 何か新しいことを始める、または貢献として最初の MR がマージされたことは、この絵文字で表現できます。
- ハッシュタグは最大 3 〜 4 個まで、メッセージの末尾に付けます。LinkedIn はハッシュタグでの検索を可能にしていますが、Instagram や Threads と同様に、ハッシュタグの多いコンテンツを増幅することはありません。
  - `#development` や `#DevSecOps` は良い例です。ただし毎回含める必要はありません。
- 絵文字が多すぎると重要なメッセージが隠れてしまいます。
- 魅力的なスクリーンショット画像やアニメーション GIF を使って、スクロール中のユーザーの手を止めさせます。
  - 投稿に画像を添付する際は、内容を説明する ALT テキストを必ず含めます。
- Bluesky と Twitter/X では `@` 文字で始めないでください。返信として隠れてしまい、オーディエンスへのリーチを妨げます。先頭に `.` や絵文字を付けてエスケープします。例: `.@gitlab 13.9 adds ...`。

制限:

- LinkedIn: URL を含めて 3000 文字。
- Bluesky: 300 文字
- Twitter/X: 280 文字
- Mastodon: 500 文字

##### メッセージ用のメディアファイル

ソーシャルメディア向けの画像・動画変換について詳しくは、[画像のリサイズ](/handbook/tools-and-tips/#resizing-images)、[GIF の作成](/handbook/product/product-processes/making-gifs/)、[GIF のリサイズ](/handbook/product/product-processes/making-gifs/#resizing-gifs)などのヒントを参照してください。常に利用可能な最良のソースを使うか、一般的なファイル形式に変換します。例えば macOS は独自の `HEIC` 画像形式でエクスポートしますが、これは [LinkedIn のデスクトップ版](https://www.linkedin.com/help/linkedin/answer/a564109)ではサポートされていません。代わりに互換性の高い `JPG` や `PNG` を使ってください。ImageMagick と macOS Finder を使って [HEIC を JPG に変換](/handbook/tools-and-tips/#convert-heic-to-jpg)できます。

メディアの制限:

- LinkedIn は 1 つの投稿に最大 20 枚の画像をアップロードできます。
  - [ファイルサイズ制限: 5 MB](https://www.linkedin.com/help/lms/answer/a527229)
  - 画像と動画を混在させることはできません。
  - 投稿エディタでは、ドラッグ&ドロップまたはカーソルキーで画像を並べ替えできます。
- Bluesky は最大 4 枚の画像、または 60 秒の動画 1 本をアップロードできます（[2024-09 以降](https://bsky.social/about/blog/09-11-2024-video)）。
- Twitter/X: 画像 4 枚、または 140 秒・512 MB の動画 1 本。
- Mastodon: 画像 4 枚。

##### ユーザーのタグ付け

- LinkedIn では、`@` を入力して企業、ブランドアカウント、ユーザーをタグ付けする検索を開始します。
- Bluesky、Mastodon、Twitter/X では、`@` を使ってユーザーにメンションできます。

##### アクセシビリティ

- 添付するメディアファイル（画像、GIF、動画）には常に ALT タグを追加します。
- 太字/斜体に見えるようなフォーマット済みテキストを使わないでください。ジェネレーターツールは特殊な Unicode 文字を使うため、スクリーンリーダーやアクセシビリティを壊します。代わりに絵文字やフォーマット技法を使ってください。

#### ソーシャルカードバリデーター

共有前に、含まれる URL のソーシャルプレビューを確認するためにソーシャルカードバリデーターを使います。

- [OpenGraph バリデーター](https://www.opengraph.xyz/): ソーシャルプレビューを含むタグをデバッグします。
- [LinkedIn 投稿インスペクター](https://www.linkedin.com/post-inspector/)

#### 高速な絵文字ワークフロー

> 任意の効率化のヒント。

[Raycast](/handbook/tools-and-tips/other-apps/#raycast) は生産性向上アプリで、macOS の Spotlight を置き換えられます。お好みのショートカット（デフォルトは `option + space`）で Raycast を開き、`emoji` と入力し始め、`enter` を押して絵文字名を入力します。拡張機能設定を開いて絵文字ビューにショートカットを割り当てることもできます。Raycast を開いて `extensions` と入力し、プロンプトで `Extensions Raycast Settings` を選択します。`emoji` を検索し、例えば `cmd 2` のようにキーボードショートカットを割り当てます。

![Raycast 拡張機能: 絵文字のキーボードショートカット](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/raycast_extensions_settings_emojis_keyboard_shortcut.png)

### LinkedIn のヒント

#### LinkedIn: リンクをコメントに

LinkedIn は 2025 年にフィードのアルゴリズムを変更し、ユーザーをプラットフォームに留めるために外部 URL のない投稿を優遇するようになりました。コンテンツクリエイターは次の回避策を見つけました:

1. テキストの投稿を作成し、画像や動画を LinkedIn にアップロードします。
1. 外部 URL を含む新しいコメントを返信として追加します。
1. 任意: 投稿を「URL はコメントに」で締めくくります。

リンクに価値があり、ユーザーが LinkedIn の投稿を保存することが期待される場合は、リンクを説明文に残します。LinkedIn のアルゴリズムは、まず小さなオーディエンスセグメントで投稿をテストし、ブックマークやエンゲージメントといった指標を、より多くのフィードに共有するかどうかの判断材料として使います。

#### LinkedIn: グループ投稿

LinkedIn には[グループ](https://www.linkedin.com/help/linkedin/answer/a540824/linkedin-groups-membership-overview?lang=en)があり、ユーザーが参加してコミュニティがキュレーションしたコンテンツのストリームをフォローできます。ソートリーダーシップ戦略や広範なコミュニティとのエンゲージメントに関連するグループを特定します。

- [DevOps and SRE discussions](https://www.linkedin.com/groups/6585254/): 2023-07-04 時点で 137,000 メンバー
- [Artificial Intelligence (AI), Digital Transformation, Data Science, Automation, Machine Learning, and Analytics Group](https://www.linkedin.com/groups/4376214/): 2023-07-04 時点で 101,000 メンバー

メリット: コンテンツ共有（例えば [GitLab ブログ](https://about.gitlab.com/blog/)/）のリーチを高め、[クリエイターモードのプロフィール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#linkedin-use-creator-mode-profile)を使って新しいフォロワーを獲得します。

一部のグループでは、モデレーターが投稿を承認する必要があります。次のガイドラインに従ってください:

- 投稿が役立つものであり、リンク先記事の短い要約を提供していることを確認します。
- [ソーシャルカードのプレビュー](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を確認し、スクロールの手を止めさせるスクリーンショットや [GIF](/handbook/product/product-processes/making-gifs/) に置き換えます。
- 毎日メッセージを投稿してグループをスパムしないでください。共有には配慮し、グループオーナーが無料の学習コンテンツの有用なストリームを作るのを手助けします。

例: CI/CD パイプライン、ジョブのトレース、CLI API 呼び出しを示すスクリーンショットを添付した [Michael による GitLab CLI 発表投稿](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-7006375881359130624-1812)は、24 時間で 92 件のいいねと 5,200 インプレッションを獲得しました。同じ投稿を [LinkedIn の DevOps グループ](https://www.linkedin.com/groups/2825397/)に行ったところ、承認後 9 時間で 40 件のいいねと 9000 インプレッションを獲得しました。

#### LinkedIn: クリエイターモードのプロフィールを使う

LinkedIn はデフォルトでユーザー間のつながりを前提としており、誰もがつながりを管理するために異なる戦略を使います（例えば対面で会った人だけ、など）。ユーザーが直接の LinkedIn のつながりを必要とせずに、あなたのコンテンツをフォローしてエンゲージしたい場合があります。これは LinkedIn でもソートリーダーシップコンテンツを共有するための優れた戦略であり、例えば Twitter と同じように[自動スケジュール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content)を使えます。

LinkedIn はプロフィール向けに[クリエイターモード](https://www.linkedin.com/help/linkedin/answer/a522537/creator-mode)を提供しており、複数のメリットをもたらします:

- `Activity` と `Featured` セクションをプロフィールの上部に移動することで、コンテンツが強調されます。
- ユーザーはデフォルトのアクションとしてあなたをフォローできます。
  - つながりはドット付きメニュー内の追加ステップになります。これはレビューすべきつながりリクエストを減らすのにも役立ちます。
  - フォロワーはあなたのコンテンツをフィードで見て、エンゲージできます。
  - つながりリクエストは、たとえあなたがリクエストを拒否しても、自動的にあなたをフォローします。
- フォロワー数がプロフィールに表示されます。あなたのプロフィールが、インフルエンサープロフィールやフォローの提案として他のユーザーに表示される可能性があります。
- [プロフィールの自己紹介に URL を追加](https://www.linkedin.com/help/linkedin/answer/a727760)して、そこにトラフィックを誘導できます。
- [クリエイターアナリティクス](https://www.linkedin.com/help/linkedin/answer/a701208)
  - インプレッション、エンゲージメント、プロフィール閲覧の指標が LinkedIn プロフィールに表示されます。
  - デベロッパーアドボカシーのソートリーダーシップ戦略の指標に必要です。

クリエイターモードを有効にした [Michael Friedrich](https://www.linkedin.com/in/dnsmichi/) のプロフィール例:

![クリエイターモードを有効にした LinkedIn プロフィール: Michael Friedrich](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_creator_mode_profile_michael_friedrich.png)

#### LinkedIn: モバイルでの QR コードによるつながり

イベントに参加する際、新しい人とのネットワーキングやつながりはよくあることです。LinkedIn モバイルアプリは[プロフィール用の QR コード](https://www.linkedin.com/help/linkedin/answer/a525286/using-a-linkedin-qr-code-to-connect-with-members?lang=en)と、他の QR コードをスキャンするアプリ内機能を提供しています。これにより、対面でのつながりがより効率的になります。

1. iOS または Android で LinkedIn モバイルアプリを開きます。
2. 検索バーをタップします。

   ![LinkedIn iOS アプリ: 検索バー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_01_search_bar.png)

3. この操作で、検索バーの右側に QR コードアイコンが表示されます。

   ![LinkedIn iOS アプリ: 検索バー、QR アイコン](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_02_search_bar_qr_icon.png)

4. QR コードアイコンをタップして、共有する QR コードを表示します。

   ![LinkedIn iOS アプリ: QR コードビュー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_03_qr_code_view.png)

5. QR コードビューには、他の QR コードをスキャンするタブもあります。LinkedIn アプリにカメラへのアクセスを許可したくない場合は、モバイルのカメラで QR コードをスキャンし、スキャンしたプロフィール URL から LinkedIn アプリを開くこともできます。

### Bluesky のヒント

Bluesky は新しいプラットフォームで、ユーザーベースが成長しています。フォロワーを増やすことと、他のユーザーとエンゲージして自身のネットワークを広げることの両方が重要です。

#### Bluesky のアカウントと設定

Bluesky は連合型プロトコルを使用しており、`bsky.social` の単一インスタンスから始まりました。その後コミュニティが複数のインスタンスを作成しています。`bsky.social` インスタンスでアカウントを作成することをお勧めします。

1. [bsky.app](https://bsky.app) でアカウントを登録します。
1. 任意: アプリをダウンロードします。
    - [iOS](https://apps.apple.com/us/app/bluesky-social/id6444370199)
    - [Android](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app&hl=en&pli=1)（アプリストアから）。
1. Bluesky にログインします。
1. アカウントをセットアップします。
    - プロフィール写真とバナー画像をアップロードします。
    - 自己紹介を追加します: 役割、興味のあるトピック、提供するコンテンツに焦点を当てます。複数行や URL を追加できます。例: [@dnsmichi プロフィール](https://bsky.app/profile/dnsmichi.dev)。ヒント: `@gitlab.com` を使って GitLab のハンドルにメンションすると、直接ハンドル URL がレンダリングされます。

   ![@gitlab.com ブランドハンドル付きの @dnsmichi の Bluesky プロフィール](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_profile_bio_gitlab.png)

推奨される[設定](https://bsky.app/settings):

1. 二要素認証: アカウントへのログインにメールコードを必須にします。
1. アクセシビリティ設定:
    - ALT テキスト: メディアの投稿前に ALT テキストを必須にします。
    - メディア: 動画と GIF の自動再生を無効にします。
1. チャット設定: `Allow messages from` 設定を確認し、全員、自分がフォローしているユーザー（デフォルト）、誰からも受け付けない、のどれにするか決めます。
1. ドメインをカスタム Bluesky ハンドルとして使えます。例えば `@gitlab.com`、`@sugaroverflow.com`、`@dnsmichi.dev` などです。これによりハンドルが覚えやすく、共有しやすくなります。
    - DNS TXT レコード検証をセットアップするには、[Bluesky ブログの手順](https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial)または [@dnsmichi のチュートリアル](https://dnsmichi.com/2024/11/19/moving-to-bluesky-with-custom-domain-handle/)に従ってください。
    - ハンドルの変更は早めに検討してください。過去のすべてのタグや引用はリダイレクトされますが、スターターパックなどへの受信 URL は壊れるため、外部での更新が必要です。
    - 古いハンドルをセカンダリのメールアドレスで登録し、自己紹介に `moved to @newhandle` というメモを追加してください。これは名前の不正取得を避けるのに役立ちます。

#### Bluesky の任意の提案

1. [Bluesky を GitLab プロフィールに追加](https://docs.gitlab.com/ee/user/profile/#add-external-accounts-to-your-user-profile-page)します。
1. [Dean Lofts による Bluesky スタートガイド](https://blog.deanlofts.xyz/guides/getting-started-bluesky/)を確認します。
1. 代替 UI を探索します。
    - [deck.blue](https://deck.blue/) は Bluesky 向けの Tweetdeck の代替です。
1. 利用可能なモデレーションブロックリストを確認します（Bluesky で `block list` を検索）。`Subscribe` をクリックして、リスト内の全アカウントをミュートするかブロックするかを選択できます。

Twitter/X からのデータインポートのオプションを確認します:

- [Sky follower bridge Chrome 拡張機能](https://chromewebstore.google.com/detail/sky-follower-bridge/behhbpbpmailcnfbjagknjngnfdojpko?hl=en)は Twitter/X のフォロワーリストを検索し、Bluesky 上のユーザーを見つけるのに役立ちます。
- 自動データインポート:
  - オープンソースのデータインポート: [twitter-to-bluesky](https://github.com/marcomaroni-github/twitter-to-bluesky) はダウンロードした Twitter/X アーカイブの zip ファイルをインポートします。まずテストアカウントで試してください。
  - 有料のデータインポート: [BlueArk](https://blueark.app/en-us/)
- なりすましを避けるため、Twitter/X アカウントは保持することをお勧めします。アカウントを保護し、新しいソーシャルメディアの所在地で自己紹介を更新できます。
- Bluesky で一から始めて、何もインポートしないこともできます。

_不足している機能、2024-11-11:_

1. 投稿を保存するブックマークアクション（[Issue](https://github.com/bluesky-social/social-app/issues/1091)）。
    - 回避策: [このフィード](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/feed/my-pins)をホームタイムラインにピン留めします。投稿に 📌 絵文字を使うと、自分専用の 📌 フィードに表示されます。

   ![ピン付きの Bluesky フィード](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_bookmarks_workaround_pins_feed.png)

1. フォロワーが 1,000 を超える場合に正確なフォロワー数を表示すること。
    - 回避策: ハンドルを使った生の API 呼び出しを使います: ブラウザで `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=YOURHANDLE` を開くか、CLI で `curl` と `jq` を使います。`dnsmichi.dev` の例:

    ```shell
    curl -s 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=dnsmichi.dev' | jq -c '.handle,.did,.followersCount'
    "dnsmichi.dev"
    "did:plc:orvu3nk4bdy7edgw3bvnk4pm"
    2605
    ```

1. プロフィールビューからユーザーをスターターパックに追加すること（[Issue](https://github.com/bluesky-social/social-app/issues/6104)）。

#### チームメンバーとそのフォロワーをフォローする

| 名前 | Bluesky ハンドル |
|------|----------------|
| Cesar Saveedra | [@cealsair.bsky.social](https://bsky.app/profile/cealsair.bsky.social) |
| Daniel Helfand | [@dhelfand.bsky.social](https://bsky.app/profile/dhelfand.bsky.social) |
| Fatima Sarah Kalid | [@sugaroverflow.com](https://bsky.app/profile/sugaroverflow.com) |
| John Coghlan | [@coghlan.me](https://bsky.app/profile/coghlan.me) |
| Michael Friedrich | [@dnsmichi.dev](https://bsky.app/profile/dnsmichi.dev) |
| William Arias | [@pywarias.bsky.social](https://bsky.app/profile/pywarias.bsky.social) |
| GitLab brand social | [@gitlab.com](https://bsky.app/profile/gitlab.com) |

#### Bluesky スターターパック

スターターパックはフォローするユーザーのリストを提供し、フィードでフォローして読みたい潜在的なユーザーをすぐに見つけるのに役立ちます。

ユーザーは特定のトピック、コミュニティグループ、イベントなどに向けて自分のプロフィールにスターターパックを作成し、広範なコミュニティと共有できます。

GitLab チームメンバーは以下のスターターパックの作成と維持を始めています:

| スターターパック | メンテナー |
|--------------|------------|
| [GitLab Community](https://bsky.app/starter-pack/dnsmichi.dev/3l7t2mtkdmu22) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [GitLab DevRel team](https://bsky.app/starter-pack/dnsmichi.dev/3laofnohynf2o) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [AI/ML](https://bsky.app/starter-pack/dnsmichi.dev/3l7szgjersb2e) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [Platform Engineering](https://bsky.app/starter-pack/bryanross.me/3l7pz6aoenx2s) | [Bryan Ross](https://bsky.app/profile/bryanross.me) |

その他のコミュニティが維持するスターターパック:

| スターターパック | メンテナー |
|--------------|------------|
| [DevRel](https://bsky.app/starter-pack/matty.wtf/3l6xheltlof2a) | [Matty Stratton](https://bsky.app/profile/matty.wtf) |
| [DevOps](https://bsky.app/starter-pack/matty.wtf/3l6xh3p7du42o) | [Matty Stratton](https://bsky.app/profile/matty.wtf) |
| [CloudNative](https://bsky.app/starter-pack/justingarrison.com/3kvwk4rncwb2k) | [Justin Garrison](https://bsky.app/profile/justingarrison.com) |
| [The world of open source](https://bsky.app/starter-pack/kelset.dev/3l7vrkvoxh225) | [Lorenzo Sciandra](https://bsky.app/profile/kelset.dev) |
| [Diversify Tech's Starter Pack](https://bsky.app/starter-pack/diversifytech.com/3l7bakgvapc2m) | [Diversify Tech](https://bsky.app/profile/diversifytech.com) |
| [Ruby, Rails and Web](https://bsky.app/starter-pack/julianpinzon.com/3l7zyk5zr6u2m) | [Julián Pinzon](https://bsky.app/profile/julianpinzon.com) |
| [Ruby on Rails](https://bsky.app/starter-pack/joshuawood.net/3kw3olx5gf72m) | [Joshua Wood](https://bsky.app/profile/joshuawood.net) |
| [Python](https://bsky.app/starter-pack/savannah.dev/3l7y3twh7xm2l) | [Savannah Ostrowski](https://bsky.app/profile/savannah.dev) |
| [NLP Researchers](https://bsky.app/starter-pack/mariaa.bsky.social/3la4hhvdgsp2s) | [Maria Antoniak](https://bsky.app/profile/mariaa.bsky.social) |
| [Data](https://bsky.app/starter-pack/chrisalbon.com/3l7teencn4f2r) | [Chris Albon](https://bsky.app/profile/chrisalbon.com) |

完全なリストや Bluesky のスレッドも利用可能ですが、急速に変化しています。_最終更新 2024-11-11、外部 URL。_

- Steven Borrelli による [Bluesky Tech Starter Packs list](https://github.com/stevendborrelli/bluesky-tech-starter-packs)
- Dana Woodman による [Starter Packs thread on Bluesky - Dev, Cloud Native, Ops, Sec](https://bsky.app/profile/danawoodman.com/post/3l7yeqhnopp2s)
- Mubashar Iqbal による [Bluesky Directory - curated collection with search](https://blueskydirectory.com/)

#### Bluesky でのフォロワーとエンゲージメント

1. チームメンバーや友人に、[スターターパック](/handbook/marketing/developer-relations/developer-advocacy/social-media/#bluesky-starter-packs)に追加してもらうよう依頼します。
    - ユーザーはスターターパックの `Follow all` アクションボタンをクリックする傾向があります。例: テックコミュニティが 2024 年 10 月下旬に Bluesky へ移行した際、@dnsmichi のフォロワー数は 3 週間で 200 から 1,200 に増えました。Michael は DevRel、DevOps、CloudNative のスターターパックに入っています。
1. 投稿にエンゲージしてディスカッションを始め、自身の経験からユーザーの質問を手助けします。
1. GitLab に焦点を当てたコンテンツと、一般的なテクノロジーの考察、役立つチュートリアル、ヒント、ミーム、写真とのバランスを取ります。

### Mastodon のヒント

1. 信頼できるコミュニティとモデレーションを備えた Mastodon サーバーを選び、アカウントを作成します。
    - [hachyderm.io](https://hachyderm.io): [@sugaroverflow](https://hachyderm.io/@sugaroverflow)、[@john_cogs](https://hachyderm.io/@john_cogs)
    - [crashloop.social](https://crashloop.social)（#EveryoneCanContribute cafe のメンバーが運営する小規模コミュニティインスタンス）: [@dnsmichi](https://crashloop.social/@dnsmichi)
1. モバイルアプリ
    - Mastodon: [iOS](https://apps.apple.com/de/app/mastodon/id1571998974)、[Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=en&gl=US&pli=1)
    - Metatext: [iOS](https://apps.apple.com/de/app/metatext/id1523996615?l=en)
1. Mastodon の Web インターフェイスには Tweetdeck の代替が組み込まれています。
    - [`Preference > Appearance`](https://docs.joinmastodon.org/user/preferences/) に移動し、`enable advanced web interface` を選択します。
1. Mastodon は投稿のインプレッションを追跡しません。GitLab が所有するコンテンツには **常に** [短縮 URL を使った UTM トラッキング](/handbook/marketing/developer-relations/developer-advocacy/social-media/#utm-tracking)を使ってください。

## コンテンツ

### コンテンツの共有

Twitter、LinkedIn、Mastodon などのコンポーザー機能で、ライブコンテンツを投稿できます。**注** GitLab のブログ記事やマーケティングウェブサイトを指すコンテンツを共有する際は、常に UTM トラッキング付きの短縮 URL を作成してください。

- [LinkedIn Web アプリ](https://www.linkedin.com/)。新しい投稿を始めると、右下に時計アイコンがあり、[投稿のスケジュール](https://www.linkedin.com/help/linkedin/answer/a1347212/schedule-posts?lang=en)ができます。
- Bluesky: アプリにログインしてコンテンツを投稿します。
- [Twitter/X Web アプリ](https://twitter.com/home)。コンポーザーでスケジュールされたツイートを送信することもできます。
- Mastodon: 自分のインスタンスにログインしてコンポーザーフォームを使います。[Mastodon scheduler](https://www.scheduler.mastodon.tools/) で投稿をスケジュールできます。

_2023-07-01:_ Twitter/X はプラットフォーム上の全ユーザーに[レート制限を発表](https://techcrunch.com/2023/07/01/twitter-imposes-limits-on-the-number-of-tweets-users-can-read-amid-extended-outage/)し、認証済みのユーザーのみがツイートを閲覧できるようになりました。これによりアクセシビリティの問題が生じます: ウェブサイトに埋め込まれたツイートやプレビューは閲覧できますが、さらなるエンゲージメントには Twitter/X アカウントとログインが必要です。Twitter/X によれば、これらの制限は一時的なものでしたが、2024-11-11 時点でログイン要件はまだ残っています。_Twitter/X の URL を社内で共有する際は、全員がコンテンツにアクセスして貢献できるように、常にスクリーンショット/テキストのコピーを作成してください。_

### コンテンツソース

#### ニュースレター

- [GitLab Community newsletter](https://about.gitlab.com/community/newsletter/)（GitLab、DevOps、クラウド）
- [CloudSecList](https://cloudseclist.com/)（クラウド、セキュリティ）
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/)（大手テック企業と高成長スタートアップ - 有料購読が必要、@dnsmichi に問い合わせ）
- [Last week in AWS](https://www.lastweekinaws.com/)（クラウド）
- [The New Stack](https://thenewstack.io/newsletter/)（クラウドネイティブ、DevOps）
- [allesnurgegloud.com](https://allesnurgecloud.com/)（クラウド、ドイツ語）

#### コミュニティプラットフォーム

- [GitLab Forum](https://forum.gitlab.com/) - [ハンドブック](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Hacker News](https://news.ycombinator.com/)
  - 検索例: [Rust](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=rust&sort=byDate&type=story)
  - Slack: [#hn-mention](https://gitlab.slack.com/archives/CBL93C22D)（社内）
- ブログ & ニュース
  - [InfoQ](https://www.infoq.com/)
  - [The New Stack](https://thenewstack.io/)
  - [GitLab blog](https://about.gitlab.com/blog/)

#### その他のコンテンツソース

- GitLab Slack（社内）: [#external-comms](https://gitlab.slack.com/archives/CB274TZRR)、[#newswire](https://gitlab.slack.com/archives/CERAPFN7R)、[#competition](https://gitlab.slack.com/archives/C1BBL1V3K)、[#ceo](https://gitlab.slack.com/archives/C3MAZRM8W)

## アナリティクス

私たちの手法とツールについては [Content Effectivness](/handbook/marketing/developer-relations/content-effectiveness/) を参照してください。

## ソートリーダーシップ戦略

この戦略はインプレッションを増幅し、ソートリーダーシップを構築するのに役立ちます。

- よりアクティブなフォロワーを引き付け、それによってインプレッション数とエンゲージメントを改善します。
  - ユーザーは LinkedIn であなたをフォローでき、すべての招待を承認する必要はありません。ビジネスネットワークを拡大する予定がある場合は、プライベートなメール/電話番号などのプロフィール詳細が誰とも共有されないようにします。
- ユーザーを助け、教育します。
- プロフィールの統計を分析します。
  - 最も多くのインプレッション、最もメディアのツイート、最もエンゲージメントの高いツイートの理由
- 興味深いストーリーを共有するユーザーをフォローします。
  - 彼らがフォローバックして、フォロワー数が増えるかもしれません。
- コメント付きでリツイートし、自分の考えや面白い絵文字を追加します。
  - これを「通常の」リツイートと混ぜます。
- ツイートにエンゲージし、頻繁にいいねし、返信を追加してディスカッションに参加します。
  - 必要なときはいつでも `Thanks for sharing :emoji:` と言います。
  - ポジティブな雰囲気を共有します。
  - [チームメンバーソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/)に従います。
- 批判に耳を傾け、ヘイトスピーチは無視します。
- GitLab の競合他社を批判しないでください。
  - 代わりに、彼らのコミュニティとエンゲージし、改善方法を学びます。
- フィードバックをプロダクトチームやエンジニアリングチームに還元します。
- ライブストリーミングやコミュニティのコーヒーチャットで新しいアイデアを取り入れます。
  - コミュニティメンバーをディスカッションに巻き込みます。

例: Chromium のビルド時間に関するディスカッションが、月曜日の [自動スケーリング Runner を備えた Self-Managed GitLab](https://twitter.com/dnsmichi/status/1351241954349223944) につながりました。水曜日には、[#everyonecancontribute cafe](https://www.youtube.com/watch?v=isKaBJ4VT24) で [YouTube でライブ](https://twitter.com/dnsmichi/status/1351944765697363974)で試してみることにしました。Max はその後[ブログ記事](https://web.archive.org/web/20240211154203/https://fotoallerlei.com/blog/2020/autoscaling-gitlab-runners-on-hetzner-cloud/)を書きました。

### ソーシャルプロフィールを構築する

- 個人的なメモを追加し、ユーザーがあなたの生活を覗き見できるようにします。食べ物、レジャー活動、風変わりな習慣など、何でも構いません。
- `#allremote` と `#remotework` で自分の印象や考えを共有します。
- 日々の仕事について定期的にツイートします。ハッシュタグ `#LifeAtGitLab` を使って、知見や面白い瞬間を共有します。
- 別のステージ/グループから際立った GitLab の機能を選び、それについて投稿します（ブログ記事、スクリーンショットなど）。
  - ツイート/LinkedIn の URL をリンクして、Slack で称賛を共有します。
- 面白いものを投稿し、技術的なストーリーに関連するアニメーション GIF を使います。見たときに笑えるようなものを。

私たちのブランドアカウントで共有すべき興味深いものを見つけたら、[#social_media_action](https://gitlab.slack.com/archives/C01AZ9C8Z4G) の Slack で共有し、自分でもリツイートしてください。

## ソーシャルキャンペーン

### リリースエバンジェリズム

[GitLab のリリース](https://about.gitlab.com/releases/)は毎月多くの価値を加えます。デベロッパーとして、あなたはそれらが具体的に解決するユースケースやワークフローの強化について知っています。この知識を使って、なぜこの新しい機能が役立つのかを説明してください。

[プロダクトキックオフ](https://about.gitlab.com/direction/kickoff/)は計画された機能についての知見を提供します。私たちは野心的に計画するため、すべてが計画どおりにリリースされる保証はありません。したがって、リリースエバンジェリズムのキャンペーンは[リリース日](/handbook/engineering/releases/)前後に直前で行う必要があります。

> **ヒント**: GitLab チームメンバーは [#release-post](https://gitlab.slack.com/archives/C3TRESYPJ) Slack チャンネルにアクセスして、毎月のリリースブログ記事の更新を確認できます。
> 広範なコミュニティメンバーは、`gitlab-com/www-gitlab-com repository` で[リリース投稿 MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=release+post)を確認するか、[DE-Release-Evangelism](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?sort=updated_desc&state=opened&label_name[]=DE-Type::Evangelist) ラベルが付いたデベロッパーアドボケイトの Issue をフォローできます。

ワークフロー:

- [ワークフローハンドブック](/handbook/marketing/developer-relations/developer-advocacy/workflow/)からリンクされている、リリースエバンジェリズムの会計年度エピックを開きます。
- デベロッパーアドボケイトがリリースブログ記事のドラフトをレビューします。
  - レビューアプリを使います。
  - リリース日前にマージリクエストにフィードバックと提案を追加します。
  - 興味深い項目をソーシャルテキストの例とともにリリースエバンジェリズムエピックに追加します。
- デベロッパーアドボケイトがリリース日にお気に入りの機能を共有/スケジュールします。
  - キャンペーンマネージャーの短縮 URL を使ってリリースエバンジェリズムのインプレッションを追跡します。
  - リリースブログ記事の既存のメディア（画像、動画）を使うか、新しいスクリーンショット/動画を作成します。
  - ドキュメント、またはすでにリリースされている場合はリリース投稿のアンカーにリンクします。**レビューアプリには絶対にリンクしないでください。**

ヒント:

- リリース前後の 1 週間にわたって 1 〜 2 回共有します。
  - PTO 中の場合は後でエンゲージします。自分の余暇時間に共有をスケジュールしないでください。
- メッセージ形式: `問題? -> 解決策`
- 絵文字と CTA URL を追加します。
- アニメーション GIF や動画は、人々が「ドゥームスクロール」をやめるのに役立ちます。
- PT と CEST の時間帯を狙います（PT 午前 9 〜 11 時）。

KPI:

- インプレッションとエンゲージメント

#### リリース投稿の共有

[ソーシャルカードバリデーター](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を使って、リリースブログ記事のソーシャルプレビューを確認します。プレビューが正しくレンダリングされない、またはそれ以外で読者からより注目を集める必要がある状況があるかもしれません。地味な解決策として、ブラウザのサイズを変更し、機能を列挙したサブタイトルを含むヘッダーの[スクリーンショットを撮影](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)して、その画像をソーシャル共有に添付します。15.1 の例: [Twitter](https://twitter.com/dnsmichi/status/1539646159500853248)、[LinkedIn](https://www.linkedin.com/posts/dnsmichi_it-is-the-22nd-of-the-month-gitlab-activity-6945411563717574656-ZZdr?utm_source=linkedin_share&utm_medium=member_desktop_web)

#### リリースエバンジェリズム Notable Contributor

毎月のリリース投稿では、コミュニティの貢献者に [Notable Contributor](https://contributors.gitlab.com/notable-contributors) を授与します。デベロッパーアドボケイトからの個人的な称賛はコミュニティエンゲージメントに役立ち、可視性を高めて誰もが貢献したくなるようにします。

ワークフロー:

- リリースブログ記事を開きます。
- Notable Contributor セクションの[スクリーンショットを作成](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)します。
- 280 文字でソーシャル共有を準備します。
  - 機能への貢献に基づいてパーソナライズしたメッセージを使います。
  - GitLab プロフィールに記載されているソーシャルタグ（Twitter、LinkedIn）を使って Notable Contributor をタグ付けします。
  - `#EveryoneCanContribute` ハッシュタグを追加します。
  - URL に `/#notable-contributor` アンカー付きのリリースブログ記事を追加します。
  - [14.9、LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q)の例: `Shoutout to Timo Furrer for becoming the GitLab 14.9 MVP 🎉 Your work on the #Terraform provider, automating all things GitLab, is invaluable. Thanks for all your contributions! 💜 🦊 #EveryoneCanContribute https://about.gitlab.com/releases/2022/03/22/gitlab-14-9-released/#mvp`
- Notable Contributor の共有を Twitter と LinkedIn に投稿します。
  - URL をリリースエバンジェリズムの Issue に追加します。
- [#ceo Slack チャンネル](https://gitlab.slack.com/archives/C3MAZRM8W)で CEO に Notable Contributor の共有にエンゲージするよう依頼します。
  - 推奨アクション: 再共有/いいね、貢献に感謝するコメントを追加。
  - 推奨テキストを効率的にコピー/ペーストできるよう、コメントテキストのみを含むコメントを Slack スレッドに追加します。
  - 共有のコメントとエンゲージメント指標を確認します。

#### リリースエバンジェリズムの例

GitLab 14 の高パフォーマンスな共有例:

- 14.9: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) の Notable Contributor（3,000+ 閲覧、60+ リアクション）
- 14.8: [Twitter](https://twitter.com/dnsmichi/status/1496140144067465227) の Notable Contributor（8,000 インプレッション、150 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-devops-activity-6901905241671835648-X4Vk)（2,500 閲覧、32 リアクション）
- 14.7: [Twitter](https://twitter.com/dnsmichi/status/1484898545849315333) の Notable Contributor（18,000 インプレッション、600 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-community-devops-activity-6890664006277754880-OCJ5)（7,500 閲覧、150 リアクション）
- 14.6: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_yesssss-gitlab-146-allows-to-render-markdown-activity-6879493371191156736-RHCu) での Issue の Markdown タイトルレンダリング（3,000 閲覧、62 リアクション）
- 14.6: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6879464875018465280-skt5) の Notable Contributor（1,500 閲覧、30 リアクション）
- 14.5: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_security-infrastructureascode-kics-activity-6870082879037173761-kyaQ) での IaC セキュリティスキャン（2,300 閲覧、28 リアクション）
- 14.5: [Twitter](https://twitter.com/dnsmichi/status/1464279272214958095) での CI/CD の exists による条件付き include（12,000 インプレッション、600 エンゲージメント）
- 14.3: [Twitter](https://twitter.com/dnsmichi/status/1440690461673340933) での CI/CD の条件付き include（21,000 インプレッション、1,800 エンゲージメント）
- 14.2: [Twitter](https://twitter.com/dnsmichi/status/1429475480030351364) でのステージレス CI/CD パイプライン（55,000 インプレッション、1,900 エンゲージメント）と [LinkedIn](https://www.linkedin.com/posts/dnsmichi_async-cicd-pipelines-with-needs-as-job-activity-6835241415748939776-I6kI)（9,000 閲覧、127 リアクション）
- 14.2: [Twitter](https://twitter.com/dnsmichi/status/1429469773058936841) での Gitpod での MR オープン Notable Contributor（43,000 インプレッション、300 エンゲージメント）[RT 引用ツイート](https://twitter.com/ludmann/status/1429735681513951235)
- 14.2: [Twitter](https://twitter.com/dnsmichi/status/1429463680182276100) でのライブ Markdown プレビュー（7,000 インプレッション、300 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_wohooooooo-live-markdown-preview-while-typing-activity-6835229767072014336-sDCg)（5,000 閲覧、62 リアクション）
- 14.2: [Twitter](https://twitter.com/dnsmichi/status/1429473222098100233) での CI/CD include 文のパラメータ化（8,000 インプレッション、400 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_you-can-parametrize-cicd-include-statements-activity-6835239058843688960-Xc6v)（800 閲覧、13 リアクション）
- 14.2 @Jira の Issue から @gitlab で直接ブランチを作成できる?! Yes please on [Twitter](https://twitter.com/olearycrew/status/1429899257700618249)（15,000 インプレッション、900 エンゲージメント）
- 14.2 おっと見て。代名詞と名前の発音が GitLab プロフィールに加わった on [Twitter](https://twitter.com/olearycrew/status/1429459101294157829)（5,000 インプレッション、150 エンゲージメント）
- 14.1: [Twitter](https://twitter.com/dnsmichi/status/1418271636722274307) での MR のステータスチェック用外部 API（8,000 インプレッション、500 エンゲージメント）
- 14.1: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_cloudnative-helm-activity-6823949221377388544-9spE) での Helm Charts リポジトリ（1,100 閲覧、17 リアクション）
- 14.1: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_kubernetes-activity-6823916460750974976-FJEc) での Kubernetes クラスターイメージスキャン（2,500 閲覧、27 リアクション）
- 14.0: [Twitter](https://twitter.com/dnsmichi/status/1407359717282828298) でのパイプラインエディタ（38,000 インプレッション、1,400 エンゲージメント）
- 14.0: [Twitter](https://twitter.com/olearycrew/status/1407358974601707520) での @AquaSecTeam の Trivy を使う GitLab のコンテナスキャン（7,000 インプレッション、100 エンゲージメント）
- 14.0: [Twitter](https://twitter.com/sarki247/status/1407995667121901568) での Terraform Module Registry の導入（4,200 インプレッション、55 エンゲージメント）
- 14.0: [Twitter](https://twitter.com/sarki247/status/1408056830551601159) での Helm 3 を使うクラスター管理プロジェクトテンプレート（2,000 インプレッション、64 エンゲージメント）

過去の例:

- [13.12: Twitter での条件に基づく動的 CI/CD 変数](https://twitter.com/dnsmichi/status/1396129739622998022)（23,000 インプレッション、2,300 エンゲージメント）
- [13.11: 13.11 を強調し 13.12 を予告するツイートストーム](https://twitter.com/dnsmichi/status/1395686623132758017)（32,000 インプレッション）
- [13.10: Twitter でのネストされた CI/CD 変数](https://twitter.com/dnsmichi/status/1383014333500813322)（18,000 インプレッション、1,100 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-1310-allows-to-nest-cicd-variables-activity-6787693633425424384-WelD)（2,300 閲覧、35 リアクション）
- [13.10: Twitter での子パイプライントリガーでの並列 CI/CD ジョブ実行](https://twitter.com/dnsmichi/status/1382351735960797184)（13,000 インプレッション、700 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_parallel-cicd-job-execution-in-gitlab-improves-activity-6788117887266652160-hNIV)（1,100 閲覧、25 リアクション）
- [13.9: Twitter での拡張された CI/CD 設定](https://twitter.com/dnsmichi/status/1363879804785803268)（5,000 インプレッション、400 エンゲージメント）
- [13.9: .NET 5.0 での SAST](https://www.linkedin.com/posts/dnsmichi_gitlab-dotnet-activity-6772576735876714496-noR_)（1,600 閲覧、43 リアクション）
- [13.8: LinkedIn での CI パイプラインエディタ](https://www.linkedin.com/posts/dnsmichi_best-release-ever-gitlab-inc138-is-here-activity-6758427487870451712-TttR)（5,000 閲覧、10 コメント、316 リアクション、15 再共有）
- [13.8: LinkedIn での MR ウィジェットでの CI/CD ジョブアーティファクトのダウンロード](https://www.linkedin.com/posts/dnsmichi_gitlab-activity-6758714643964805120-9Yyd)（800 閲覧、14 リアクション）
- [13.7: LinkedIn でのマージリクエストレビュアー](https://www.linkedin.com/posts/dnsmichi_gitlab-devops-productivity-activity-6756907989321433088-TRW9)（500 閲覧、16 リアクション）
- [13.7: LinkedIn での CI/CD ジョブログ内のレンダリングされた URL](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6723982784492273664-cwg0)（4,800 閲覧、350 リアクション、12 コメント）
- [13.6: Twitter での VS Code GitLab ワークフロー](https://twitter.com/dnsmichi/status/1336362663107063808)（16,000 インプレッション、700 エンゲージメント）
- [13.5: Twitter でのグループ Wiki](https://twitter.com/dnsmichi/status/1319656105249820672)（18,000 インプレッション、600 エンゲージメント）
- [13.4: LinkedIn でのパイプライン効率化ドキュメント](https://www.linkedin.com/posts/dnsmichi_on-a-personal-note-my-first-larger-contribution-activity-6714235003447853056-Kkv4)（2,100 閲覧、49 リアクション）
- [13.3: KubeCon Kubernetes ティーザー](https://twitter.com/dnsmichi/status/1296051268448915456)（18,000 インプレッション、500 エンゲージメント）
- [13.3: LinkedIn での並列 CI/CD ジョブ実行のマトリックスビルド](https://www.linkedin.com/posts/dnsmichi_gitlab-development-cicd-activity-6702933595721351168-c-nV)（2,400 閲覧、49 リアクション）
- [13.1: LinkedIn での個別 CI/CD ジョブアーティファクトレポート](https://www.linkedin.com/posts/dnsmichi_gitlab-cicd-development-activity-6683033972479451136-VNVL)（700 閲覧、16 リアクション）

#### 広範なコミュニティの関与を奨励する

- [Discord](https://discord.gg/gitlab) の GitLab ヒーローに、お気に入りの今後の機能をソーシャルで共有するよう依頼します。
- ヒントとベストプラクティスのためにこのハンドブック URL を含めて、レビューアプリ付きのリリース MR を共有します。

### リリース投稿の機能をレビューする

デベロッパーアドボケイトはエンドユーザーの視点に立ち、毎月 18 日前後のリリース前にリリースブログ記事の項目のレビューを手助けします。レビューには次が含まれます:

- 機能の説明と、解決される問題/ユースケースの明確化。
- 機能をプライマリに昇格することの提案。
- Changelog から、大きなインパクトがある機能や欠けている追加項目を加える。

最初のパイロット実験は、[2021 年 8 月の GitLab 14.2](https://gitlab.com/gitlab-org/verify-stage/-/issues/97#note_664350725) について [Verify プロダクトグループ](/handbook/product/categories/#verify-stage)とともに確立されました。DRI は @jreporter（Group Manager, Product）と @dnsmichi（DE のステーブルカウンターパート）でした。

### プロダクトフィードバック

ユーザーリサーチキャンペーンやプロジェクト Issue でのフィードバックに加えて、ソーシャルメディアでもフィードバックや興味深いアイデアをよく目にします。ユーザーが私たちのブランドアカウント `@gitlab` をタグ付けすることもあれば、`gitlab` を検索して発見することもあります。

これを `もし 1 つ機能を追加できるとしたら、何にしますか?` のような直接的な質問に持っていくことで、ステークホルダーを特定し、より直接的なフィードバックループを促すのに役立ちます。

この取り組みには、プロダクト & エンジニアリング、ソーシャル、DE チーム間のクロスチームコラボレーションが必要です。割り当てられた DE DRI は [Michael Friedrich](https://gitlab.com/dnsmichi) です。

ワークフロー:

- 新しい DE リクエスト Issue を作成します。
- トピック/スコープを定義します。
- ソーシャル向けのメッセージを最大 280 文字で提案します。
- ソーシャル共有をスケジュールし、文書化します。
- ソーシャル共有の反応をモニタリングします。
- 特定の反応を Slack の #product に移動します。

第 2 イテレーション: これをリクエストフォームによるセルフサービスにし、Slack などで自動的に反応を収集/更新するようにします。

KPI:

- エンゲージメント数
- 更新/作成された Issue

### チームエバンジェリズム

良いフィードバックであれ、回答に追加の専門家が必要であれ、ソーシャル共有をプロダクトチャンネルに移します。GitLab チームメンバーをタグ付けし、会話から恩恵を受けられる場合はソーシャルメディアで返信/ディスカッションするよう促します。白熱したディスカッションの場合は、少人数のソーシャルメディア DRI グループ内に留めます。

受信した質問と、より多くの専門家を巻き込むために、デベロッパーアドボケイトは [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) の Slack で手助けできます。

#### リリース管理

[GitLab 12.9](https://about.gitlab.com/releases/2020/03/22/gitlab-12-9-released/) のツイート例:

- 素敵なタイトルを選び、新しいリリースを作成してみるよう全員に促します: `Have you created your first release through the in @gitlab yet? Let's do this!`
- デモ環境に移動して、ガイドとなる手順を含む 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）。
- リリースブログ記事への URL を含めます。
- ユーザー名の前に @ を付けて @gitlab にメンションします。
- ハッシュタグ `#gitlab #releasemanagement` を使います。

#### Package

[レジストリのオープンソース化](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/)のツイート例:

- ユーザーがユースケースを解決したくなるようなクールなタイトルを選びます: `Unstable npm mirrors no more: @gitlab got you covered - the NPM registry will be open sourced.`
- デモ環境に移動して、ガイドとなる手順を含む 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）。
- リリースブログ記事への URL を含めます。
- ユーザー名の前に @ を付けて @gitlab にメンションします。
- ハッシュタグ `#gitlab #packages #registry` を使います。
