---
title: "ソーシャルメディアにおけるデベロッパーアドボカシー"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/social-media/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: 2026-06-08T11:30:44+02:00
translated_at: "2026-06-12T12:50:04Z"
translator: claude
stale: false
model: claude-opus-4-7
---

## はじめに {#introduction}

デベロッパーアドボカシーは、ソーシャルメディアとコミュニティエンゲージメントを通じてソートリーダーシップを築いていきます。ここで共有するヒントや戦略は、チームメンバーやより広いコミュニティが、GitLab のエバンジェリストおよびアドボケイトとして自身のプロフィールを築くのに役立てられます。

トピック:

- 教育と学習: 自身の経験からのヒント。ワークショップ、スライド、ブログ記事、動画など。
- イベントのライブ投稿。スクリーンショット、写真、メッセージでトークを増幅します。
- [リリースエバンジェリズム](#release-evangelism): 個人的な視点を添えて機能のインサイトを共有します。
- コミュニティと顧客のベストプラクティス、そして GitLab のインサイト。
- GitLab へのコントリビューション、顧客に GitLab との共同制作を促すこと。

### UTM トラッキング {#utm-tracking}

GitLab のデベロッパーアドボケイトは、コンテンツの共有がどれだけうまくパフォーマンスしているかに関する分析とインサイトを提供するために、[URL のタグ付けとトラッキングのための UTM](/handbook/marketing/developer-relations/developer-advocacy/#utms-for-url-tagging-and-tracking) を追加することが推奨されています。この手法は [KPI 指標](/handbook/marketing/developer-relations/content-effectiveness/)の検証に役立ちます。

## ターゲットプラットフォーム {#target-platforms}

LinkedIn は、コンテンツ配信、リリースエバンジェリズム、顧客エンゲージメントのための主要なターゲットプラットフォームです。

> 注: 2024 年の Twitter/X におけるプラットフォームの変更と、それに伴うコンテンツエンゲージメントの不足を受けて、私たちは FY25Q4 にデベロッパーアドボケイト向けのプラットフォームとして Twitter/X の優先度を下げました。

ソーシャルプラットフォームの評価:

- Bluesky、進行中。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/277)。
- Mastodon、中止。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/123)。

### 一般的なソーシャルメディアのヒント {#general-social-media-tips}

以下のセクションでは、エンゲージメントとリーチを高め、コンテンツを増幅するためのソーシャルメディアのベストプラクティスを紹介します。

#### メッセージのヒント {#message-tips}

- メッセージは短く魅力的に保ちます。複数の文がある場合は、リストに分解します。
  - 💡 絵文字をリストマーカーとして使います。これは何かを学ぶ意味です。
  - 🏗 こうすることで、ユーザーはあなたが共有して一緒に作りたいもの、たとえば CI/CD を学びます。
  - 🔥 適切な絵文字を選びます。これはたとえば素早い成功を表します。
  - 🛡️ この絵文字はセキュリティ関連にできます。
  - 🌱 何か新しいことを始める、あるいはコントリビューションとして初めての MR がマージされたことを、この絵文字で表現できます。
- ハッシュタグは最大 3 〜 4 個まで、メッセージの末尾に付けます。LinkedIn ではハッシュタグで検索できますが、Instagram や Threads と同様、多くのハッシュタグを付けたコンテンツを増幅することはありません。
  - `#development` と `#DevSecOps` は良い例です。ただし毎回含める必要はありません。
- 絵文字が多すぎると、重要なメッセージが隠れてしまうことがあります。
- スクロール中に人の手を止めさせる、魅力的なスクリーンショット画像やアニメーション GIF を使います。
  - 投稿に画像を添付する際は、コンテンツを説明する ALT テキストを必ず含めます。
- Bluesky と Twitter/X では `@` 文字で始めないでください。返信として隠され、オーディエンスへのリーチを妨げます。先頭に `.` または絵文字を付けてエスケープします。例: `.@gitlab 13.9 adds ...`。

制限:

- LinkedIn: URL を含めて 3000 文字。
- Bluesky: 300 文字
- Twitter/X: 280 文字
- Mastodon: 500 文字

##### メッセージ用のメディアファイル {#media-files-for-messages}

ソーシャルメディア向けの画像・動画変換について詳しく学ぶには、[画像のリサイズ](/handbook/tools-and-tips/#resizing-images)や [GIF の作成](/handbook/product/product-processes/making-gifs/)、[GIF のリサイズ](/handbook/product/product-processes/making-gifs/#resizing-gifs)などのヒントに従ってください。常に利用可能な最良のソースを使うか、一般的なファイル形式に変換します。たとえば macOS は独自の `HEIC` 画像形式をエクスポートしますが、これは [LinkedIn のデスクトップ](https://www.linkedin.com/help/linkedin/answer/a564109)ではサポートされていません。代わりに、互換性を高めるために `JPG` または `PNG` を使ってください。ImageMagick と macOS Finder を使って [HEIC を JPG に変換](/handbook/tools-and-tips/#convert-heic-to-jpg)できます。

メディアの制限:

- LinkedIn では 1 つの投稿に最大 20 枚の画像をアップロードできます。
  - [ファイルサイズ上限: 5 MB](https://www.linkedin.com/help/lms/answer/a527229)
  - 画像と動画を混在させることはできません。
  - 投稿エディターでは、ドラッグ&ドロップまたはカーソルキーで画像を並べ替えられます。
- Bluesky では最大 4 枚の画像、または 60 秒の動画 1 本をアップロードできます（[2024 年 9 月以降](https://bsky.social/about/blog/09-11-2024-video)）。
- Twitter/X: 4 枚の画像、または 140 秒・512 MB の動画 1 本。
- Mastodon: 4 枚の画像。

##### ユーザーをタグ付けする {#tagging-users}

- LinkedIn では、`@` を入力すると企業、ブランドアカウント、ユーザーの検索が始まり、タグ付けできます。
- Bluesky、Mastodon、Twitter/X では、`@` を使ってユーザーにメンションできます。

##### アクセシビリティ {#accessibility}

- 添付するメディアファイル（画像、GIF、動画）には常に ALT タグを追加します。
- 太字/斜体に見えるフォーマット済みテキストを使わないでください。ジェネレーターツールは特殊な Unicode 文字を使用しており、これがスクリーンリーダーとアクセシビリティを壊します。代わりに絵文字やフォーマット手法を使ってください。

#### ソーシャルカードバリデーター {#social-card-validators}

ソーシャルカードバリデーターを使って、共有する前に含まれる URL のソーシャルプレビューを確認します。

- タグ（ソーシャルプレビューを含む）をデバッグするための [OpenGraph validator](https://www.opengraph.xyz/)。
- [LinkedIn post inspector](https://www.linkedin.com/post-inspector/)

#### 高速な絵文字ワークフロー {#fast-emoji-workflows}

> オプションの効率化ヒント。

[Raycast](/handbook/tools-and-tips/other-apps/#raycast) は生産性向上アプリで、macOS の Spotlight を置き換えられます。お好みのショートカット（デフォルトは `option + space`）で Raycast を開き、`emoji` と入力し始め、`enter` を押して絵文字名を入力します。拡張機能設定を開いて、絵文字ビューにショートカットを割り当てることもできます。Raycast を開いて `extensions` と入力し、プロンプトで `Extensions Raycast Settings` を選択します。`emoji` を検索し、たとえば `cmd 2` のようなキーボードショートカットを割り当てます。

![Raycast extensions: Emoji keyboard shortcut](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/raycast_extensions_settings_emojis_keyboard_shortcut.png)

### LinkedIn のヒント {#linkedin-tips}

#### LinkedIn: コメントにリンクを入れる {#linkedin-link-in-comments}

LinkedIn は 2025 年にフィードのアルゴリズムを変更し、ユーザーをプラットフォームに留まらせるために外部 URL のない投稿を優先するようになりました。コンテンツ制作者は回避策を見つけました。

1. テキスト付きの投稿を作成し、LinkedIn に画像または動画をアップロードします。
1. 外部 URL を含む新しいコメントを返信として追加します。
1. オプション: 投稿を「URL in comments.」で締めくくります。

リンクが価値あるもので、ユーザーがその LinkedIn 投稿を保存することが期待される場合は、リンクを説明文に残しておきます。LinkedIn のアルゴリズムは、まず小さなオーディエンスセグメントで投稿をテストし、ブックマークやエンゲージメントといった指標を、より多くのフィードに共有するかどうかの判断指標として使います。

#### LinkedIn: グループ投稿 {#linkedin-group-posts}

LinkedIn は、ユーザーが参加してコミュニティがキュレーションしたコンテンツのストリームをフォローできる[グループ](https://www.linkedin.com/help/linkedin/answer/a540824/linkedin-groups-membership-overview?lang=en)を提供しています。ソートリーダーシップ戦略やより広いコミュニティとのエンゲージメントに関連するグループを特定します。

- [DevOps and SRE discussions](https://www.linkedin.com/groups/6585254/): 2023-07-04 時点で 137,000 メンバー
- [Artificial Intelligence (AI), Digital Transformation, Data Science, Automation, Machine Learning, and Analytics Group](https://www.linkedin.com/groups/4376214/): 2023-07-04 時点で 101,000 メンバー

メリット: コンテンツ共有（たとえば [GitLab ブログ](https://about.gitlab.com/blog/)/）のリーチを高め、[クリエイターモードプロフィール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#linkedin-use-creator-mode-profile)を使って新しいフォロワーを引きつけます。

一部のグループでは、モデレーターが投稿を承認する必要があります。次のガイドラインに従ってください。

- 投稿が有用であり、リンク先の記事の短い要約を提供していることを確認します。
- [ソーシャルカードプレビュー](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を確認し、スクロールの手を止めさせるスクリーンショットや [GIF](/handbook/product/product-processes/making-gifs/) に置き換えます。
- 毎日メッセージでグループをスパムしないでください。共有について慎重に考え、グループのオーナーが有益な無料学習コンテンツのストリームを作るのを手伝いましょう。

例: CI/CD パイプライン、ジョブのトレース、CLI API 呼び出しを示す CLI インターフェイスをスクリーンショットとして添付した、[Michael による GitLab CLI 告知投稿](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-7006375881359130624-1812)は、24 時間で 92 いいねと 5,200 インプレッションを獲得しました。同じ投稿を [LinkedIn の DevOps グループ](https://www.linkedin.com/groups/2825397/)に投稿したところ、承認後 9 時間で 40 いいねと 9000 インプレッションを獲得しました。

#### LinkedIn: クリエイターモードプロフィールを使う {#linkedin-use-creator-mode-profile}

LinkedIn はデフォルトでユーザー間のつながりを前提としており、誰もがつながりを管理する戦略を、たとえば直接会った人だけに限定するなど、それぞれ違った形で持っています。ときに、ユーザーは LinkedIn のつながりを直接必要とせずに、あなたのコンテンツをフォローしエンゲージしたいことがあります。これは、Twitter と同じように[自動スケジュール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content)で LinkedIn でもソートリーダーシップコンテンツを共有する優れた戦略です。

LinkedIn はプロフィール向けに[クリエイターモード](https://www.linkedin.com/help/linkedin/answer/a522537/creator-mode)を提供しており、複数のメリットがあります。

- `Activity` と `Featured` のセクションをプロフィールの上部に移動することで、コンテンツが強調されます。
- ユーザーはデフォルトのアクションとしてあなたをフォローできます。
  - つながりは、3 点メニュー内の追加の手順になります。これは、レビューすべきつながりリクエストを減らすのにも役立ちます。
  - フォロワーはあなたのコンテンツをフィードで見て、エンゲージできます。
  - つながりリクエストは、リクエストを拒否しても自動的にあなたをフォローします。
- フォロワー数がプロフィールに表示されます。あなたのプロフィールが、インフルエンサープロフィールやフォローのおすすめとして他の人に表示されることがあります。
- トラフィックを誘導するために、[プロフィールの紹介に URL を追加する](https://www.linkedin.com/help/linkedin/answer/a727760)ことができます。
- [クリエイターアナリティクス](https://www.linkedin.com/help/linkedin/answer/a701208)
  - インプレッション、エンゲージメント、プロフィールビューの指標が LinkedIn プロフィールに表示されます。
  - デベロッパーアドボカシーのソートリーダーシップ戦略指標に必要です。

クリエイターモードを有効にした [Michael Friedrich](https://www.linkedin.com/in/dnsmichi/) のプロフィール例:

![LinkedIn Profile with creator mode enabled: Michael Friedrich](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_creator_mode_profile_michael_friedrich.png)

#### LinkedIn: モバイルでの QR コードによるつながり {#linkedin-qr-code-connect-on-mobile}

イベントに参加するとき、ネットワーキングや新しい人とつながることがよくあります。LinkedIn モバイルアプリは[プロフィール用の QR コード](https://www.linkedin.com/help/linkedin/answer/a525286/using-a-linkedin-qr-code-to-connect-with-members?lang=en)と、他の QR コードをスキャンするアプリ内機能を提供しています。これにより、対面でのつながりがより効率的になります。

1. iOS または Android で LinkedIn モバイルアプリを開きます。
2. 検索バーをタップします。

   ![LinkedIn iOS app: Search bar](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_01_search_bar.png)

3. この操作により、検索バーの右側に QR コードアイコンが表示されます。

   ![LinkedIn iOS app: Search bar, QR Icon](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_02_search_bar_qr_icon.png)

4. QR コードアイコンをタップして、共有用の QR コードを表示します。

   ![LinkedIn iOS app: QR Code view](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_03_qr_code_view.png)

5. QR コードビューには、他の QR コードをスキャンするタブもあります。LinkedIn アプリにカメラへのアクセスを許可したくない場合は、モバイルのカメラを使って QR コードをスキャンし、スキャンしたプロフィール URL から LinkedIn アプリを開くこともできます。

### Bluesky のヒント {#bluesky-tips}

Bluesky は新しいプラットフォームで、ユーザーベースが成長しています。フォロワーを増やすことと、他のユーザーとエンゲージして自身のネットワークを広げることの両方が重要です。

#### Bluesky のアカウントと設定 {#bluesky-account-and-settings}

Bluesky はフェデレーテッドプロトコルを使用しており、`bsky.social` 上の単一インスタンスから始まりました。その後、コミュニティは複数のインスタンスを作成しました。`bsky.social` インスタンスでアカウントを作成することをおすすめします。

1. [bsky.app](https://bsky.app) でアカウントを登録します。
1. オプション: アプリストアからアプリをダウンロードします。
    - [iOS](https://apps.apple.com/us/app/bluesky-social/id6444370199)
    - [Android](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app&hl=en&pli=1)
1. Bluesky にログインします。
1. アカウントをセットアップします。
    - プロフィール画像とバナー画像をアップロードします
    - 自己紹介を追加します: ロール、興味のあるトピック、または提供するコンテンツに焦点を当てます。複数行と URL を追加できます。例: [@dnsmichi profile](https://bsky.app/profile/dnsmichi.dev)。ヒント: `@gitlab.com` を使って GitLab のハンドルにメンションすると、直接のハンドル URL がレンダリングされます。

   ![Bluesky profile from @dnsmichi, with @gitlab.com brand handle](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_profile_bio_gitlab.png)

推奨[設定](https://bsky.app/settings):

1. 二要素認証: アカウントへのログインにメールコードを要求します。
1. アクセシビリティ設定:
    - ALT テキスト: メディアを投稿する前に ALT テキストを要求します。
    - メディア: 動画と GIF の自動再生を無効にします。
1. チャット設定: `Allow messages from` 設定を確認し、すべての人、フォローしているユーザー（デフォルト）、誰からも受け付けないのいずれにするかを決めます。
1. あなたのドメインをカスタム Bluesky ハンドルとして使えます。たとえば `@gitlab.com`、`@sugaroverflow.com`、`@dnsmichi.dev` などです。これにより、ハンドルを覚えやすく、共有しやすくできます。
    - DNS TXT レコードの検証を設定するには、[Bluesky ブログの手順](https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial)または [@dnsmichi のチュートリアル](https://dnsmichi.com/2024/11/19/moving-to-bluesky-with-custom-domain-handle/)に従ってください。
    - ハンドルの変更は早めに検討してください。過去のすべてのタグと引用はリダイレクトされますが、スターターパックなどへの受信 URL は壊れるため、外部での更新が必要になります。
    - 古いハンドルをセカンダリのメールアドレスで登録し、自己紹介に `moved to @newhandle` というメモを追加してください。これは名前のスクワッティングを避けるのに役立ちます。

#### Bluesky のオプション提案 {#optional-suggestions-for-bluesky}

1. [Bluesky を GitLab プロフィールに追加](https://docs.gitlab.com/ee/user/profile/#add-external-accounts-to-your-user-profile-page)します。
1. [Dean Lofts による Bluesky Getting Started ガイド](https://blog.deanlofts.xyz/guides/getting-started-bluesky/)を確認します。
1. 代替の UI を試します
    - [deck.blue](https://deck.blue/) は Bluesky 向けの Tweetdeck の代替です。
1. 利用可能なモデレーションブロックリストを確認します（Bluesky で `block list` を検索）。`Subscribe` をクリックして、リスト内のすべてのアカウントをミュートするかブロックするかを選べます。

Twitter/X からデータをインポートするためのオプションを確認します。

- [Sky follower bridge Chrome 拡張機能](https://chromewebstore.google.com/detail/sky-follower-bridge/behhbpbpmailcnfbjagknjngnfdojpko?hl=en)は、Twitter/X のフォロワーリストを検索して、Bluesky 上のユーザーを見つけるのに役立ちます。
- 自動データインポート:
  - オープンソースのデータインポート: [twitter-to-bluesky](https://github.com/marcomaroni-github/twitter-to-bluesky) は、ダウンロードした Twitter/X アーカイブの zip ファイルをインポートします。まずテストアカウントで試してください。
  - 有料のデータインポート: [BlueArk](https://blueark.app/en-us/)
- なりすましを避けるために、Twitter/X アカウントは保持しておくことをおすすめします。アカウントを保護し、自己紹介を新しいソーシャルメディアの場所で更新できます。
- Bluesky でまっさらに始めて、何もインポートしないこともできます。

_欠けている機能、2024-11-11:_

1. 投稿を保存するブックマークアクション（[issue](https://github.com/bluesky-social/social-app/issues/1091)）。
    - 回避策: [このフィード](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/feed/my-pins)をホームタイムラインにピン留めします。投稿に 📌 絵文字を使うと、自分の 📌 フィードに表示されます。

   ![Bluesky feeds, with pins](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_bookmarks_workaround_pins_feed.png)

1. フォロワーが 1,000 人を超える場合に正確なフォロワー数を表示する。
    - 回避策: ブラウザで、または CLI で `curl` と `jq` を使って、ハンドル付きの生の API 呼び出し `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=YOURHANDLE` を使います。`dnsmichi.dev` の例:

    ```shell
    curl -s 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=dnsmichi.dev' | jq -c '.handle,.did,.followersCount'
    "dnsmichi.dev"
    "did:plc:orvu3nk4bdy7edgw3bvnk4pm"
    2605
    ```

1. プロフィールビューからユーザーをスターターパックに追加する（[issue](https://github.com/bluesky-social/social-app/issues/6104)）。

#### チームメンバーとそのフォロワーをフォローする {#follow-team-members-and-their-followers}

| 名前 | Bluesky ハンドル |
|------|----------------|
| Cesar Saveedra | [@cealsair.bsky.social](https://bsky.app/profile/cealsair.bsky.social) |
| Daniel Helfand | [@dhelfand.bsky.social](https://bsky.app/profile/dhelfand.bsky.social) |
| Fatima Sarah Kalid | [@sugaroverflow.com](https://bsky.app/profile/sugaroverflow.com) |
| John Coghlan | [@coghlan.me](https://bsky.app/profile/coghlan.me) |
| Michael Friedrich | [@dnsmichi.dev](https://bsky.app/profile/dnsmichi.dev) |
| William Arias | [@pywarias.bsky.social](https://bsky.app/profile/pywarias.bsky.social) |
| GitLab brand social | [@gitlab.com](https://bsky.app/profile/gitlab.com) |

#### Bluesky のスターターパック {#bluesky-starter-packs}

スターターパックはフォローするユーザーのリストを提供し、フィードでフォローして読みたい潜在的なユーザーとのクイックスタートに役立ちます。

ユーザーは、特定のトピック、コミュニティグループ、イベントなどについて自分のプロフィールでスターターパックを作成し、より広いコミュニティと共有できます。

GitLab のチームメンバーは、以下のスターターパックの作成とメンテナンスを始めています。

| スターターパック | メンテナー |
|--------------|------------|
| [GitLab Community](https://bsky.app/starter-pack/dnsmichi.dev/3l7t2mtkdmu22) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [GitLab DevRel team](https://bsky.app/starter-pack/dnsmichi.dev/3laofnohynf2o) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [AI/ML](https://bsky.app/starter-pack/dnsmichi.dev/3l7szgjersb2e) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [Platform Engineering](https://bsky.app/starter-pack/bryanross.me/3l7pz6aoenx2s) | [Bryan Ross](https://bsky.app/profile/bryanross.me) |

その他のコミュニティがメンテナンスしているスターターパック:

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

完全なリストと Bluesky のスレッドも利用できますが、変化が速いです。_最終更新 2024-11-11、外部 URL。_

- Steven Borrelli による [Bluesky Tech Starter Packs list](https://github.com/stevendborrelli/bluesky-tech-starter-packs)
- Dana Woodman による [Starter Packs thread on Bluesky - Dev, Cloud Native, Ops, Sec](https://bsky.app/profile/danawoodman.com/post/3l7yeqhnopp2s)
- Mubashar Iqbal による [Bluesky Directory - curated collection with search](https://blueskydirectory.com/)

#### Bluesky でのフォロワーとエンゲージメント {#followers-and-engagements-on-bluesky}

1. チームメンバーや友人に [スターターパック](/handbook/marketing/developer-relations/developer-advocacy/social-media/#bluesky-starter-packs)へ追加してもらえるよう頼みます。
    - ユーザーはスターターパックの `Follow all` アクションボタンをクリックする傾向があります。例: @dnsmichi のフォロワー数は、2024 年 10 月下旬にテックコミュニティが Bluesky に移行した際、3 週間で 200 人から 1,200 人に増えました。Michael は DevRel、DevOps、CloudNative のスターターパックに入っています。
1. 投稿にエンゲージし、議論を始め、自身の経験からユーザーの質問を手助けします。
1. GitLab に焦点を当てたコンテンツと、一般的なテクノロジーに関する考え、役立つチュートリアル、ヒント、ミーム、写真とのバランスを取ります。

### Mastodon のヒント {#mastodon-tips}

1. 信頼できるコミュニティとモデレーションを持つ Mastodon サーバーを選び、アカウントを作成します。
    - [hachyderm.io](https://hachyderm.io): [@sugaroverflow](https://hachyderm.io/@sugaroverflow), [@john_cogs](https://hachyderm.io/@john_cogs)
    - [crashloop.social](https://crashloop.social)（#EveryoneCanContribute cafe メンバーが運営する小規模なコミュニティインスタンス）: [@dnsmichi](https://crashloop.social/@dnsmichi)
1. モバイルアプリ
    - Mastodon: [iOS](https://apps.apple.com/de/app/mastodon/id1571998974), [Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=en&gl=US&pli=1)
    - Metatext: [iOS](https://apps.apple.com/de/app/metatext/id1523996615?l=en)
1. Tweetdeck の代替は Mastodon の Web インターフェイスに組み込まれています。
    - [`Preference > Appearance`](https://docs.joinmastodon.org/user/preferences/) に移動し、`enable advanced web interface` を選択します。
1. Mastodon は投稿のインプレッションをトラッキングしません。GitLab 所有のコンテンツには **常に** [短縮 URL での UTM トラッキング](/handbook/marketing/developer-relations/developer-advocacy/social-media/#utm-tracking)を使ってください。

## コンテンツ {#content}

### コンテンツの共有 {#sharing-content}

Twitter、Linked、Mastodon などのコンポーザー機能は、ライブコンテンツを投稿するために利用できます。**注** GitLab のブログ記事やマーケティングウェブサイトを指すコンテンツを共有する際は、常に UTM トラッキング付きの短縮 URL を作成してください。

- [LinkedIn ウェブアプリ](https://www.linkedin.com/)。新しい投稿を始めると、右下に時計アイコンがあり、[投稿をスケジュール](https://www.linkedin.com/help/linkedin/answer/a1347212/schedule-posts?lang=en)できます。
- Bluesky: アプリにログインしてコンテンツを投稿します。
- [Twitter/X ウェブアプリ](https://twitter.com/home)。コンポーザーではスケジュール投稿のツイートも送信できます。
- Mastodon: 自分のインスタンスにログインし、コンポーザーフォームを使います。[Mastodon scheduler](https://www.scheduler.mastodon.tools/) で投稿をスケジュールできます。

_2023-07-01:_ Twitter/X は、プラットフォーム上のすべてのユーザーに[レート制限を発表](https://techcrunch.com/2023/07/01/twitter-imposes-limits-on-the-number-of-tweets-users-can-read-amid-extended-outage/)し、認証済みユーザーのみがツイートを見られるようになりました。これはアクセシビリティの問題を引き起こします: ウェブサイトに埋め込まれたツイートやプレビューは見られますが、追加のエンゲージメントには Twitter/X のアカウントとログインが必要です。Twitter/X によればこれらの制限は一時的なものでしたが、2024-11-11 時点でもログイン要件は残っています。_Twitter/X の URL を社内で共有する際は、誰もがコンテンツにアクセスしてコントリビュートできるよう、常にスクリーンショット/テキストのコピーを作成してください。_

### コンテンツソース {#content-sources}

#### ニュースレター {#newsletters}

- [GitLab Community newsletter](https://about.gitlab.com/community/newsletter/)（GitLab, DevOps, Cloud）
- [CloudSecList](https://cloudseclist.com/)（Cloud, Security）
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/)（ビッグテックと急成長スタートアップ - 有料サブスクリプションが必要、@dnsmichi に問い合わせてください）
- [Last week in AWS](https://www.lastweekinaws.com/)（Cloud）
- [The New Stack](https://thenewstack.io/newsletter/)（Cloud Native, DevOps）
- [allesnurgegloud.com](https://allesnurgecloud.com/)（Cloud、ドイツ語）

#### コミュニティプラットフォーム {#community-platforms}

- [GitLab Forum](https://forum.gitlab.com/) - [ハンドブック](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Hacker News](https://news.ycombinator.com/)
  - 検索例: [Rust](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=rust&sort=byDate&type=story)
  - Slack: [#hn-mention](https://gitlab.slack.com/archives/CBL93C22D)（社内）
- ブログ＆ニュース
  - [InfoQ](https://www.infoq.com/)
  - [The New Stack](https://thenewstack.io/)
  - [GitLab blog](https://about.gitlab.com/blog/)

#### その他のコンテンツソース {#other-content-sources}

- GitLab Slack（社内）: [#external-comms](https://gitlab.slack.com/archives/CB274TZRR), [#newswire](https://gitlab.slack.com/archives/CERAPFN7R), [#competition](https://gitlab.slack.com/archives/C1BBL1V3K), [#ceo](https://gitlab.slack.com/archives/C3MAZRM8W)

## アナリティクス {#analytics}

私たちの手法とツールについては、[Content Effectivness](/handbook/marketing/developer-relations/content-effectiveness/) を参照してください。

## ソートリーダーシップ戦略 {#thought-leadership-strategy}

この戦略は、インプレッションを増幅し、ソートリーダーシップを築くのに役立ちます。

- よりアクティブなフォロワーを引きつけ、それによってインプレッション数とエンゲージメントを向上させます。
  - ユーザーは LinkedIn であなたをフォローでき、すべての招待を承認する必要はありません。ビジネスネットワークを広げる予定がある場合は、プライベートなメール/電話などのプロフィール詳細が誰とも共有されないようにしてください。
- ユーザーを助け、教育します
- プロフィールの統計を分析します
  - 最も多くのインプレッション、トップのメディアツイート、または最もエンゲージメントの高いツイートの理由
- 興味深いストーリーを共有するユーザーをフォローします
  - 彼らもフォローバックして、フォロワー数が増えるかもしれません。
- コメントを添えてリツイートし、自分の考えや面白い絵文字を加えます。
  - これを「通常の」リツイートと混ぜます。
- ツイートにエンゲージし、頻繁にいいねし、返信を加えて議論に参加します。
  - 必要なときはいつでも `Thanks for sharing :emoji:` と言います
  - ポジティブな雰囲気を共有します
  - [チームメンバーソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/)に従います
- 批判に耳を傾け、ヘイトスピーチは無視します。
- GitLab の競合を批判しないでください。
  - 代わりに、彼らのコミュニティにエンゲージし、改善方法を学びます。
- フィードバックをプロダクトチームやエンジニアリングチームに還元します。
- ライブストリーミングやコミュニティのコーヒーチャットで新しいアイデアを取り入れます。
  - コミュニティメンバーを議論に巻き込みます。

例: Chromium のビルド時間に関する議論が、月曜日に [Self-Managed GitLab with auto-scaling runners](https://twitter.com/dnsmichi/status/1351241954349223944) につながりました。水曜日に、私たちは [#everyonecancontribute cafe](https://www.youtube.com/watch?v=isKaBJ4VT24) で [YouTube でライブ配信](https://twitter.com/dnsmichi/status/1351944765697363974)して試すことにしました。Max はその後[ブログ記事](https://web.archive.org/web/20240211154203/https://fotoallerlei.com/blog/2020/autoscaling-gitlab-runners-on-hetzner-cloud/)を書きました。

### ソーシャルプロフィールを築く {#build-your-social-profile}

- 個人的なメモを追加し、ユーザーがあなたの生活を垣間見られるようにします。食べ物、レジャー活動、ちょっと変わった習慣など何でも構いません。
- `#allremote` と `#remotework` を使って、あなたの印象や考えを共有します。
- 日々の仕事について定期的にツイートします。`#LifeAtGitLab` ハッシュタグを使って、インサイトや楽しい瞬間を共有します。
- 別のステージ/グループの優れた GitLab 機能を取り上げて投稿します（ブログ記事、スクリーンショットなどでも構いません）。
  - ツイート/LinkedIn の URL をリンクして、Slack で称賛を共有します。
- 面白いことを投稿します。テックストーリーに関連したアニメーション GIF を使います。見たときに笑えるようなものです。

私たちのブランドアカウントで共有したい興味深いものを見つけたら、[#social_media_action](https://gitlab.slack.com/archives/C01AZ9C8Z4G) で Slack に共有し、自分でもリツイートしてください。

## ソーシャルキャンペーン {#social-campaigns}

### リリースエバンジェリズム {#release-evangelism}

[GitLab のリリース](https://about.gitlab.com/releases/)は、毎月多くの価値を追加します。開発者として、あなたはそれらが具体的に解決し得るユースケースやワークフローの改善を知っています。この知識を使って、この新機能が **なぜ** 役に立つのかを説明します。

[プロダクトキックオフ](https://about.gitlab.com/direction/kickoff/)は、計画中の機能に関するインサイトを提供します。私たちは野心的に計画するため、すべてが計画どおりにリリースされる保証はありません。したがって、リリースエバンジェリズムのキャンペーンは、[リリース日](/handbook/engineering/releases/)前後の短い通知期間に行う必要があります。

> **ヒント**: GitLab のチームメンバーは [#release-post](https://gitlab.slack.com/archives/C3TRESYPJ) Slack チャンネルにアクセスして、月次リリースブログ記事のアップデートを確認できます。
> より広いコミュニティメンバーは、`gitlab-com/www-gitlab-com repository` で[リリース記事の MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=release+post) を確認するか、[DE-Release-Evangelism](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?sort=updated_desc&state=opened&label_name[]=DE-Type::Evangelist) ラベルでデベロッパーアドボケイトの Issue をフォローできます。

ワークフロー:

- [ワークフローハンドブック](/handbook/marketing/developer-relations/developer-advocacy/workflow/)からリンクされている、リリースエバンジェリズムの会計年度エピックを開きます。
- デベロッパーアドボケイトはリリースブログ記事のドラフトをレビューします。
  - レビューアプリを使います。
  - リリース日前にマージリクエストにフィードバックや提案を追加します。
  - 興味深い項目をソーシャルテキストの例とともにリリースエバンジェリズムのエピックに追加します。
- デベロッパーアドボケイトはリリース日にお気に入りの機能を共有および/またはスケジュールします。
  - キャンペーンマネージャーの短縮 URL を使って、リリースエバンジェリズムのインプレッションをトラッキングします。
  - リリースブログ記事の既存のメディア（画像、動画）を使うか、新しいスクリーンショット/動画を作成します。
  - ドキュメント、またはすでにリリース済みであればリリース記事のアンカーにリンクします。**レビューアプリには絶対にリンクしないでください。**

ヒント:

- リリース前後の 1 週間にわたって 1 〜 2 回共有します
  - PTO 中の場合は、後でエンゲージします。共有を自分の自由時間にスケジュールしないでください。
- メッセージの形式: `問題？ -> 解決策`
- 絵文字と CTA URL を追加します。
- アニメーション GIF や動画は、人々の「ドゥームスクロール」の手を止めさせるのに役立ちます。
- PT と CEST の時間帯（PT 午前 9 〜 11 時）を狙います

KPI:

- インプレッションとエンゲージメント

#### リリース記事の共有 {#release-post-share}

[ソーシャルカードバリデーター](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を使って、リリースブログ記事のソーシャルプレビューを確認します。プレビューが正しくレンダリングされない、あるいは読者にもっと注目してもらう必要がある状況があるかもしれません。地味な解決策として、ブラウザのサイズを変更し、機能を列挙したサブタイトルを含むヘッダーから[スクリーンショットを撮り](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)、その画像をソーシャル共有に添付します。15.1 の例: [Twitter](https://twitter.com/dnsmichi/status/1539646159500853248), [LinkeDIn](https://www.linkedin.com/posts/dnsmichi_it-is-the-22nd-of-the-month-gitlab-activity-6945411563717574656-ZZdr?utm_source=linkedin_share&utm_medium=member_desktop_web)

#### リリースエバンジェリズムの Notable Contributor {#release-evangelism-notable-contributor}

月次リリース記事は、コミュニティコントリビューターに [Notable Contributor](https://contributors.gitlab.com/notable-contributors) を授与します。デベロッパーアドボケイトからの個人的な称賛は、コミュニティエンゲージメントに役立ち、可視性を高めて、誰もがコントリビュートしたくなるようにします。

ワークフロー:

- リリースブログ記事を開きます
- Notable Contributor セクションから[スクリーンショットを作成](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)します
- 280 文字でソーシャル共有を準備します
  - 機能へのコントリビューションに基づいたパーソナライズドメッセージを使います
  - Notable Contributor を、その GitLab プロフィールに記載されているソーシャルタグ（Twitter、LinkedIn）を使ってタグ付けします
  - `#EveryoneCanContribute` ハッシュタグを追加します
  - URL に `/#notable-contributor` アンカーを付けてリリースブログ記事を追加します
  - [14.9, LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) の例: `Shoutout to Timo Furrer for becoming the GitLab 14.9 MVP 🎉 Your work on the #Terraform provider, automating all things GitLab, is invaluable. Thanks for all your contributions! 💜 🦊 #EveryoneCanContribute https://about.gitlab.com/releases/2022/03/22/gitlab-14-9-released/#mvp`
- Notable Contributor の共有を Twitter と LinkedIn に投稿します
  - URL をリリースエバンジェリズムの Issue に追加します
- [#ceo Slack チャンネル](https://gitlab.slack.com/archives/C3MAZRM8W)で CEO に Notable Contributor の共有にエンゲージするよう依頼します
  - 推奨アクション: リシェア/いいね、コントリビューションに感謝するコメントを追加。
  - 推奨テキストを効率的にコピー/ペーストできるよう、コメントテキストのみを含むコメントを Slack スレッドに追加します。
  - 共有のコメントとエンゲージメント指標を確認します

#### リリースエバンジェリズムの例 {#release-evangelism-examples}

GitLab 14 の高パフォーマンスな共有例:

- 14.9: Notable Contributor on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q)（3,000 回以上の閲覧、60 件以上のリアクション）
- 14.8: Notable Contributor on [Twitter](https://twitter.com/dnsmichi/status/1496140144067465227)（8,000 インプレッション、150 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-devops-activity-6901905241671835648-X4Vk)（2,500 回の閲覧、32 件のリアクション）
- 14.7: Notable Contributor on [Twitter](https://twitter.com/dnsmichi/status/1484898545849315333)（18,000 インプレッション、600 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-community-devops-activity-6890664006277754880-OCJ5)（7,500 回の閲覧、150 件のリアクション）
- 14.6: Render markdown titles of issues on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_yesssss-gitlab-146-allows-to-render-markdown-activity-6879493371191156736-RHCu)（3,000 回の閲覧、62 件のリアクション）
- 14.6: Notable Contributor on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6879464875018465280-skt5)（1,500 回の閲覧、30 件のリアクション）
- 14.5: IaC Security scanning on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_security-infrastructureascode-kics-activity-6870082879037173761-kyaQ)（2,300 回の閲覧、28 件のリアクション）
- 14.5: Conditional includes with exists in CI/CD on [Twitter](https://twitter.com/dnsmichi/status/1464279272214958095)（12,000 インプレッション、600 エンゲージメント）
- 14.3: Conditional includes in CI/CD on [Twitter](https://twitter.com/dnsmichi/status/1440690461673340933)（21,000 インプレッション、1,800 エンゲージメント）
- 14.2: Stageless CI/CD Pipelines on [Twitter](https://twitter.com/dnsmichi/status/1429475480030351364)（55,000 インプレッション、1,900 エンゲージメント）および [LinkedIn](https://www.linkedin.com/posts/dnsmichi_async-cicd-pipelines-with-needs-as-job-activity-6835241415748939776-I6kI)（9,000 回の閲覧、127 件のリアクション）
- 14.2: Open MR in Gitpod Notable Contributor on [Twitter](https://twitter.com/dnsmichi/status/1429469773058936841)（43,000 インプレッション、300 エンゲージメント）[RT-quoted tweet](https://twitter.com/ludmann/status/1429735681513951235)
- 14.2: Live Markdown Preview on [Twitter](https://twitter.com/dnsmichi/status/1429463680182276100)（7,000 インプレッション、300 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_wohooooooo-live-markdown-preview-while-typing-activity-6835229767072014336-sDCg)（5,000 回の閲覧、62 件のリアクション）
- 14.2: Parametrize CI/CD include statements on [Twitter](https://twitter.com/dnsmichi/status/1429473222098100233)（8,000 インプレッション、400 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_you-can-parametrize-cicd-include-statements-activity-6835239058843688960-Xc6v)（800 回の閲覧、13 件のリアクション）
- 14.2 Creating branches directly in @gitlab from a @Jira issue?!  Yes please on [Twitter](https://twitter.com/olearycrew/status/1429899257700618249)（15,000 インプレッション、900 エンゲージメント）
- 14.2 Oh hey check it out. Pronouns AND name pronunciation is now in GitLab profiles on [Twitter](https://twitter.com/olearycrew/status/1429459101294157829)（5,000 インプレッション、150 エンゲージメント）
- 14.1: External API for status checks in MRs on [Twitter](https://twitter.com/dnsmichi/status/1418271636722274307)（8,000 インプレッション、500 エンゲージメント）
- 14.1: Helm Charts repository on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_cloudnative-helm-activity-6823949221377388544-9spE)（1,100 回の閲覧、17 件のリアクション）
- 14.1: Kubernetes cluster image scanning on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_kubernetes-activity-6823916460750974976-FJEc)（2,500 回の閲覧、27 件のリアクション）
- 14.0: Pipeline Editor on [Twitter](https://twitter.com/dnsmichi/status/1407359717282828298)（38,000 インプレッション、1,400 エンゲージメント）
- 14.0: Container Scanning in GitLab to use Trivy from @AquaSecTeam on [Twitter](https://twitter.com/olearycrew/status/1407358974601707520)（7,000 インプレッション、100 エンゲージメント）
- 14.0: Introduction of Terraform Module Registry on [Twitter](https://twitter.com/sarki247/status/1407995667121901568)（4,200 インプレッション、55 エンゲージメント）
- 14.0: Cluster management project template using Helm 3 on [Twitter](https://twitter.com/sarki247/status/1408056830551601159)（2,000 インプレッション、64 エンゲージメント）

過去の例:

- [13.12: Dynamic CI/CD variables based on conditions on Twitter](https://twitter.com/dnsmichi/status/1396129739622998022)（23,000 インプレッション、2,300 エンゲージメント）
- [13.11: Tweetstorm to highlight 13.11 and tease 13.12](https://twitter.com/dnsmichi/status/1395686623132758017)（32,000 インプレッション）
- [13.10: Nested CI/CD variables on Twitter](https://twitter.com/dnsmichi/status/1383014333500813322)（18,000 インプレッション、1,100 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-1310-allows-to-nest-cicd-variables-activity-6787693633425424384-WelD)（2,300 回の閲覧、35 件のリアクション）
- [13.10: Parallel CI/CD job execution in child pipeline triggers on Twitter](https://twitter.com/dnsmichi/status/1382351735960797184)（13,000 インプレッション、700 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_parallel-cicd-job-execution-in-gitlab-improves-activity-6788117887266652160-hNIV)（1,100 回の閲覧、25 件のリアクション）
- [13.9: Expanded CI/CD configuration on Twitter](https://twitter.com/dnsmichi/status/1363879804785803268)（5,000 インプレッション、400 エンゲージメント）
- [13.9: SAST with .NET 5.0](https://www.linkedin.com/posts/dnsmichi_gitlab-dotnet-activity-6772576735876714496-noR_)（1,600 回の閲覧、43 件のリアクション）
- [13.8: CI pipeline editor on LinkedIn](https://www.linkedin.com/posts/dnsmichi_best-release-ever-gitlab-inc138-is-here-activity-6758427487870451712-TttR)（5,000 回の閲覧、10 件のコメント、316 件のリアクション、15 件のリシェア）
- [13.8: Download CI/CD job artifacts in the MR widget on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-activity-6758714643964805120-9Yyd)（800 回の閲覧、14 件のリアクション）
- [13.7: Merge Request Reviewers on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-devops-productivity-activity-6756907989321433088-TRW9)（500 回の閲覧、16 件のリアクション）
- [13.7: Rendered URLs in CI/CD job logs on LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6723982784492273664-cwg0)（4,800 回の閲覧、350 件のリアクション、12 件のコメント）
- [13.6: VS Code GitLab workflow on Twitter](https://twitter.com/dnsmichi/status/1336362663107063808)（16,000 インプレッション、700 エンゲージメント）
- [13.5: Group wikis on Twitter](https://twitter.com/dnsmichi/status/1319656105249820672)（18,000 インプレッション、600 エンゲージメント）
- [13.4: Pipeline Efficiency docs on LinkedIn](https://www.linkedin.com/posts/dnsmichi_on-a-personal-note-my-first-larger-contribution-activity-6714235003447853056-Kkv4)（2,100 回の閲覧、49 件のリアクション）
- [13.3: KubeCon Kubernetes teaser](https://twitter.com/dnsmichi/status/1296051268448915456)（18,000 インプレッション、500 エンゲージメント）
- [13.3: Matrix builds of parallel CI/CD job execution on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-development-cicd-activity-6702933595721351168-c-nV)（2,400 回の閲覧、49 件のリアクション）
- [13.1: Individual CI/CD job artifcat reports on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-cicd-development-activity-6683033972479451136-VNVL)（700 回の閲覧、16 件のリアクション）

#### より広いコミュニティの関与を奨励 {#wider-community-involvement-is-encouraged}

- [Discord](https://discord.gg/gitlab) の GitLab ヒーローに、お気に入りの今後の機能をソーシャルで共有するよう依頼します。
- ヒントやベストプラクティスのためのこのハンドブック URL を含め、レビューアプリ付きのリリース MR を共有します。

### リリース記事のための機能レビュー {#review-features-for-release-posts}

デベロッパーアドボケイトは、エンドユーザーの視点に立ち、毎月 18 日前後のリリース前にリリースブログ記事の項目をレビューするのを手伝います。レビューには以下が含まれます。

- 機能の説明と、解決される問題/ユースケースの明確化。
- 機能をプライマリに昇格させることの提案。
- Changelog から、大きなインパクトのある機能や、欠けている追加項目を追加。

最初のパイロット実験は、[2021 年 8 月の GitLab 14.2](https://gitlab.com/gitlab-org/verify-stage/-/issues/97#note_664350725) に向けて [Verify プロダクトグループ](/handbook/product/categories/#verify-stage)とともに確立されました。DRI は @jreporter（Group Manager, Product）と @dnsmichi（DE stable counterpart）でした。

### プロダクトフィードバック {#product-feedback}

ユーザーリサーチキャンペーンやプロジェクト Issue でのフィードバックに加えて、私たちはソーシャルメディアでフィードバックや興味深いアイデアをよく目にします。ときにユーザーは私たちのブランドアカウント `@gitlab` をタグ付けし、別のシナリオでは `gitlab` を検索してそれらを発見します。

これを `追加できる機能が 1 つあるとしたら、それは何ですか？` のような直接的な質問に変えることで、ステークホルダーを特定し、より直接的なフィードバックループを促すのに役立ちます。

この取り組みには、プロダクト＆エンジニアリング、ソーシャル、DE チーム間のクロスチームコラボレーションが必要です。割り当てられた DE DRI は [Michael Friedrich](https://gitlab.com/dnsmichi) です。

ワークフロー:

- 新しい DE リクエスト Issue を作成します
- トピック/スコープを定義します
- ソーシャル向けのメッセージを最大 280 文字で提案します
- ソーシャル共有をスケジュールしてドキュメント化します
- 返信についてソーシャル共有をモニタリングします
- 特定の返信を Slack の #product に移動します

第 2 イテレーション: これをリクエストフォーム付きのセルフサービスにし、Slack などで返信の収集/更新を自動化します。

KPI:

- エンゲージメントの数
- 更新/作成された Issue

### チームエバンジェリズム {#team-evangelism}

良いフィードバックであれ、回答に追加の専門家が必要なものであれ、ソーシャル共有をプロダクトチャンネルに移します。GitLab のチームメンバーをタグ付けし、その会話から恩恵を受けられる場合にはソーシャルメディアで返信/議論するよう促します。白熱した議論については、ソーシャルメディアの DRI の小さなグループ内に留めます。

受信した質問やより多くの専門家を巻き込むために、デベロッパーアドボケイトは [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) の Slack で手助けできます。

#### リリースマネジメント {#release-management}

[GitLab 12.9](https://about.gitlab.com/releases/2020/03/22/gitlab-12-9-released/) のツイート例:

- 素敵なタイトルを選び、みんなに新しいリリースの作成を試すよう促します: `Have you created your first release through the in @gitlab yet? Let's do this!`
- デモ環境に移動し、ガイドとなる手順を含む 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）
- リリースブログ記事への URL を含めるべきです
- ユーザー名の前に @ を付けて @gitlab にメンションします
- ハッシュタグ `#gitlab #releasemanagement` を使います

#### Package {#package}

[レジストリのオープンソース化](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/)のツイート例:

- かっこいいタイトルを選び、ユーザーが自分のユースケースを解決するよう促します: `Unstable npm mirrors no more: @gitlab got you covered - the NPM registry will be open sourced.`
- デモ環境に移動し、ガイドとなる手順を含む 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）
- リリースブログ記事への URL を含めるべきです
- ユーザー名の前に @ を付けて @gitlab にメンションします
- ハッシュタグ: `#gitlab #packages #registry` を使います
