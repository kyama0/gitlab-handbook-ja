---
title: "ソーシャルメディアでの Developer Advocacy"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/social-media/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: 2026-06-08T13:31:46-07:00
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

## はじめに

Developer Advocacy は、ソーシャルメディアとコミュニティへの取り組みを通じてソートリーダーシップを築いていきます。ここで共有するヒントや戦略は、チームメンバーやより広いコミュニティが、GitLab のエバンジェリスト・アドボケイトとして自分自身のプロフィールを築くために活用できます。

トピック:

- 教育と学習: 自身の経験からのヒント。ワークショップ、スライド、ブログ記事、動画など。
- イベントのライブ投稿。スクリーンショット、写真、メッセージでトークを増幅します。
- [リリースエバンジェリズム](#release-evangelism): 機能のインサイトを個人的な視点とともに共有します。
- コミュニティと顧客のベストプラクティス、GitLab のインサイト。
- GitLab への貢献、顧客に GitLab と共創することを促します。

### UTM 追跡

GitLab の Developer Advocate には、[URL タグ付けと追跡のための UTM](/handbook/marketing/developer-relations/developer-advocacy/#utms-for-url-tagging-and-tracking) を追加することが推奨されています。これにより、コンテンツ共有のパフォーマンスに関する分析やインサイトを得られます。この方法は [KPI 指標](/handbook/marketing/developer-relations/content-effectiveness/)の検証に役立ちます。

## ターゲットプラットフォーム

LinkedIn は、コンテンツ配信、リリースエバンジェリズム、顧客エンゲージメントの主要なターゲットプラットフォームです。

> 注: 2024 年の Twitter/X のプラットフォーム変更と、それに伴うコンテンツエンゲージメントの不足を受けて、私たちは FY25Q4 に Twitter/X を Developer Advocate 向けのプラットフォームとして優先度を下げました。

ソーシャルプラットフォームの評価:

- Bluesky、進行中。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/277)。
- Mastodon、停止。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/123)。

### ソーシャルメディアの一般的なヒント

以下のセクションでは、エンゲージメント、リーチを高め、コンテンツを増幅するためのソーシャルメディアのベストプラクティスを紹介します。

#### メッセージのヒント

- メッセージは短く魅力的に保ちます。複数の文がある場合は、リストに分割します。
  - 💡 絵文字をリストマーカーとして使います。これは何かを学ぶことを表します。
  - 🏗 こうすることで、ユーザーはあなたが共有したいことや一緒に構築したいこと、例えば CI/CD を学べます。
  - 🔥 適切な絵文字を選びます。これは例えば、素早い成功を表します。
  - 🛡️ この絵文字はセキュリティ関連を表せます。
  - 🌱 新しいことを始める、または貢献として最初の MR がマージされたことは、この絵文字で表せます。
- ハッシュタグは最大 3 〜 4 個までにし、メッセージの末尾に付けます。LinkedIn ではハッシュタグで検索できますが、Instagram や Threads のように、多くのハッシュタグを付けたコンテンツを増幅することはありません。
  - `#development` と `#DevSecOps` は良い例です。ただし、毎回含める必要はありません。
- 絵文字が多すぎると、重要なメッセージが隠れてしまうことがあります。
- スクロール中に手を止めてもらえるよう、魅力的なスクリーンショット画像やアニメーション GIF を使います。
  - 投稿に画像を添付する際は、内容を説明する ALT テキストを必ず含めてください。
- Bluesky や Twitter/X では、`@` 文字で始めないでください。これは返信として隠され、オーディエンスへのリーチを妨げます。先頭に `.` か絵文字を付けてエスケープします。例: `.@gitlab 13.9 adds ...`。

文字数制限:

- LinkedIn: URL を含めて 3000 文字。
- Bluesky: 300 文字
- Twitter/X: 280 文字
- Mastodon: 500 文字

##### メッセージ用のメディアファイル

ソーシャルメディア向けの画像・動画変換の詳細については、[画像のリサイズ](/handbook/tools-and-tips/#resizing-images)や [GIF の作成](/handbook/product/product-processes/making-gifs/)、[GIF のリサイズ](/handbook/product/product-processes/making-gifs/#resizing-gifs)などのヒントに従ってください。常に利用可能な最良のソースを使うか、一般的なファイル形式に変換してください。例えば、macOS は独自の `HEIC` 画像形式でエクスポートしますが、これは[デスクトップ版 LinkedIn](https://www.linkedin.com/help/linkedin/answer/a564109) ではサポートされていません。代わりに、互換性を高めるために `JPG` または `PNG` を使ってください。ImageMagick や macOS Finder を使って [HEIC を JPG に変換](/handbook/tools-and-tips/#convert-heic-to-jpg)できます。

メディアの制限:

- LinkedIn は 1 つの投稿に最大 20 枚の画像をアップロードできます。
  - [ファイルサイズの上限: 5 MB](https://www.linkedin.com/help/lms/answer/a527229)
  - 画像と動画を混在させることはできません。
  - 投稿エディターでは、ドラッグ＆ドロップまたはカーソルキーで画像の順序を変更できます。
- Bluesky は最大 4 枚の画像、または 60 秒の動画 1 本をアップロードできます（[2024-09 以降](https://bsky.social/about/blog/09-11-2024-video)）。
- Twitter/X: 4 枚の画像、または 140 秒・512 MB の動画 1 本。
- Mastodon: 4 枚の画像。

##### ユーザーのタグ付け

- LinkedIn では、`@` を入力してタグ付けする企業、ブランドアカウント、ユーザーの検索を開始します。
- Bluesky、Mastodon、Twitter/X では、`@` を使ってユーザーにメンションできます。

##### アクセシビリティ

- 添付するメディアファイル（画像、GIF、動画）には常に ALT タグを追加してください。
- 太字／斜体に見えるよう装飾したテキストは使わないでください。ジェネレーターツールは特殊な Unicode 文字を使うため、スクリーンリーダーやアクセシビリティを壊してしまいます。代わりに絵文字や書式設定のテクニックを使ってください。

#### ソーシャルカードバリデーター

共有する前に、ソーシャルカードバリデーターを使って、含めた URL のソーシャルプレビューを検証してください。

- タグ（ソーシャルプレビューを含む）をデバッグするための [OpenGraph validator](https://www.opengraph.xyz/)。
- [LinkedIn post inspector](https://www.linkedin.com/post-inspector/)

#### 素早い絵文字ワークフロー

> 任意の効率化のヒント。

[Raycast](/handbook/tools-and-tips/other-apps/#raycast) は生産性アプリで、macOS の Spotlight を置き換えられます。好みのショートカット（デフォルトは `option + space`）で Raycast を開き、`emoji` と入力し始め、`enter` を押して絵文字の名前を入力します。拡張機能の設定を開いて、絵文字ビューにショートカットを割り当てることもできます。Raycast を開いて `extensions` と入力し、プロンプトで `Extensions Raycast Settings` を選択します。`emoji` を検索し、例えば `cmd 2` のようなキーボードショートカットを割り当てます。

![Raycast 拡張機能: 絵文字のキーボードショートカット](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/raycast_extensions_settings_emojis_keyboard_shortcut.png)

### LinkedIn のヒント

#### LinkedIn: コメントへのリンク

LinkedIn は 2025 年にフィードのアルゴリズムを変更し、ユーザーをプラットフォームに留めるため、外部 URL のない投稿を優先するようになりました。コンテンツクリエイターは回避策を見つけました:

1. テキストの投稿を作成し、画像または動画を LinkedIn にアップロードします。
1. 外部 URL を含む新しいコメントを返信として追加します。
1. 任意: 投稿を「URL はコメントに」で締めます。

リンクに価値があり、ユーザーが LinkedIn 投稿を保存することが見込まれる場合は、説明文の中にリンクを残してください。LinkedIn のアルゴリズムは、まず小さなオーディエンスセグメントで投稿をテストし、ブックマークやエンゲージメントなどの指標を、より多くのフィードで共有するかどうかの判断基準として使います。

#### LinkedIn: グループ投稿

LinkedIn は[グループ](https://www.linkedin.com/help/linkedin/answer/a540824/linkedin-groups-membership-overview?lang=en)を提供しており、ユーザーは参加してコミュニティがキュレーションしたコンテンツのストリームをフォローできます。ソートリーダーシップ戦略や、より広いコミュニティとの関わりに関連するグループを見つけてください。

- [DevOps and SRE discussions](https://www.linkedin.com/groups/6585254/): 2023-07-04 時点で 137,000 名のメンバー
- [Artificial Intelligence (AI), Digital Transformation, Data Science, Automation, Machine Learning, and Analytics Group](https://www.linkedin.com/groups/4376214/): 2023-07-04 時点で 101,000 名のメンバー

メリット: コンテンツ共有（例えば [GitLab ブログ](https://about.gitlab.com/blog/)）のリーチを高め、[クリエイターモードのプロフィール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#linkedin-use-creator-mode-profile)を使って新しいフォロワーを引きつけます。

一部のグループでは、投稿をモデレーターが承認する必要があります。次のガイドラインに従ってください:

- 投稿が役立つものであり、リンク先の記事の短い要約を提供していることを確認します。
- [ソーシャルカードのプレビュー](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を確認し、人々がスクロールの手を止めるようなスクリーンショットや [GIF](/handbook/product/product-processes/making-gifs/) に置き換えます。
- 毎日メッセージを送ってグループをスパムしないでください。共有については慎重になり、グループオーナーが無料の学習コンテンツの役立つストリームを作るのを手助けしてください。

例: CI/CD パイプライン、ジョブトレース、CLI API 呼び出しを含む CLI インターフェースをスクリーンショットとして添付した [Michael による GitLab CLI 告知投稿](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-7006375881359130624-1812)は、24 時間で 92 件のいいねと 5,200 インプレッションを獲得しました。同じ投稿を [LinkedIn の DevOps グループ](https://www.linkedin.com/groups/2825397/)に投稿したところ、承認後に 9 時間で 40 件のいいねと 9000 インプレッションを獲得しました。

#### LinkedIn: クリエイターモードのプロフィールを使う

LinkedIn はデフォルトでユーザー間のつながり（コネクション）を前提としており、誰もがコネクションを管理する異なる戦略を持っています。例えば、実際に対面で会った人だけにする、などです。ユーザーが LinkedIn のコネクションを直接必要とせずに、あなたのコンテンツをフォローして関わりたいと思う場合もあります。これは、Twitter と同じように[自動スケジュール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content)で LinkedIn でもソートリーダーシップコンテンツを共有する優れた戦略です。

LinkedIn はプロフィール向けに[クリエイターモード](https://www.linkedin.com/help/linkedin/answer/a522537/creator-mode)を提供しており、複数のメリットがあります:

- `Activity` セクションと `Featured` セクションがプロフィールの上部に移動し、コンテンツが強調されます。
- デフォルトのアクションとして、ユーザーがあなたをフォローできます。
  - コネクションはドット付きメニューの中の追加ステップになります。これは、レビューすべきコネクションリクエストを減らすのにも役立ちます。
  - フォロワーはあなたのコンテンツをフィードで見て、関わることができます。
  - コネクションリクエストは、たとえあなたがリクエストを辞退しても、自動的にあなたをフォローします。
- フォロワー数がプロフィールに表示されます。あなたのプロフィールがインフルエンサープロフィールやフォロー候補として他の人に表示される場合があります。
- そこへのトラフィックを誘導するために、[プロフィールの紹介に URL を追加](https://www.linkedin.com/help/linkedin/answer/a727760)できます。
- [クリエイターアナリティクス](https://www.linkedin.com/help/linkedin/answer/a701208)
  - インプレッション、エンゲージメント、プロフィールビューの指標が LinkedIn プロフィールに表示されます。
  - Developer Advocacy のソートリーダーシップ戦略の指標に必要です。

クリエイターモードを有効にした [Michael Friedrich](https://www.linkedin.com/in/dnsmichi/) のプロフィール例:

![クリエイターモードを有効にした LinkedIn プロフィール: Michael Friedrich](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_creator_mode_profile_michael_friedrich.png)

#### LinkedIn: モバイルでの QR コード接続

イベントに参加する際は、ネットワーキングや新しい人とのつながりがよくあります。LinkedIn モバイルアプリは[プロフィール用の QR コード](https://www.linkedin.com/help/linkedin/answer/a525286/using-a-linkedin-qr-code-to-connect-with-members?lang=en)と、他の QR コードをスキャンするアプリ内機能を提供します。これにより、対面でのつながりがより効率的になります。

1. iOS または Android で LinkedIn モバイルアプリを開きます。
2. 検索バーをタップします。

   ![LinkedIn iOS アプリ: 検索バー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_01_search_bar.png)

3. この操作で、検索バーの右側に QR コードアイコンが表示されます。

   ![LinkedIn iOS アプリ: 検索バー、QR アイコン](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_02_search_bar_qr_icon.png)

4. QR コードアイコンをタップすると、共有用の QR コードが表示されます。

   ![LinkedIn iOS アプリ: QR コードビュー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_03_qr_code_view.png)

5. QR コードビューには、他の QR コードをスキャンするタブもあります。LinkedIn アプリにカメラへのアクセスを許可したくない場合は、モバイルのカメラを使って QR コードをスキャンし、スキャンしたプロフィール URL から LinkedIn アプリを開くこともできます。

### Bluesky のヒント

Bluesky は新しいプラットフォームで、ユーザーベースが成長しています。フォロワーを増やすことと、他のユーザーと関わって自分のネットワークを成長させることの両方が重要です。

#### Bluesky のアカウントと設定

Bluesky は連合型（フェデレーション）プロトコルを使い、`bsky.social` 上の単一インスタンスから始まりました。その後、コミュニティが複数のインスタンスを作成しています。`bsky.social` インスタンスでアカウントを作成することが推奨されます。

1. [bsky.app](https://bsky.app) でアカウントを登録します。
1. 任意: アプリをダウンロードします
    - [iOS](https://apps.apple.com/us/app/bluesky-social/id6444370199)
    - [Android](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app&hl=en&pli=1)：アプリストアから。
1. Bluesky にログインします。
1. アカウントをセットアップします。
    - プロフィール写真とバナー画像をアップロードします
    - 自己紹介を追加します: 役割、興味のあるトピック、提供するコンテンツに焦点を当てます。複数行と URL を追加できます。例: [@dnsmichi プロフィール](https://bsky.app/profile/dnsmichi.dev)。ヒント: `@gitlab.com` を使って GitLab ハンドルにメンションすると、直接のハンドル URL がレンダリングされます。

   ![@gitlab.com ブランドハンドルを含む @dnsmichi の Bluesky プロフィール](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_profile_bio_gitlab.png)

推奨される[設定](https://bsky.app/settings):

1. 二要素認証: アカウントへのログインにメールコードを要求します。
1. アクセシビリティ設定:
    - ALT テキスト: メディアを投稿する前に ALT テキストを要求します。
    - メディア: 動画と GIF の自動再生を無効にします。
1. チャット設定: `Allow messages from` 設定を確認し、全員、自分がフォローしているユーザー（デフォルト）、誰も、のいずれから受け取るかを決めます。
1. 自分のドメインをカスタム Bluesky ハンドルとして使えます。例: `@gitlab.com`、`@sugaroverflow.com`、`@dnsmichi.dev`。これにより、ハンドルを覚えやすく、共有しやすくできます。
    - DNS TXT レコードの検証を設定するには、[Bluesky ブログの手順](https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial)または [@dnsmichi のチュートリアル](https://dnsmichi.com/2024/11/19/moving-to-bluesky-with-custom-domain-handle/)に従ってください。
    - ハンドルは早めに変更することを検討してください。過去のタグや引用はすべてリダイレクトされますが、スターターパックなどへの受信 URL は壊れてしまい、外部での更新が必要になります。
    - 古いハンドルをセカンダリのメールアドレスで登録し、自己紹介に `moved to @newhandle` というメモを追加してください。これは名前のスクワッティングを避けるのに役立ちます。

#### Bluesky に関する任意の提案

1. [Bluesky を GitLab プロフィールに追加](https://docs.gitlab.com/ee/user/profile/#add-external-accounts-to-your-user-profile-page)します。
1. [Dean Lofts による Bluesky はじめ方ガイド](https://blog.deanlofts.xyz/guides/getting-started-bluesky/)を確認します。
1. 代替の UI を探索します
    - [deck.blue](https://deck.blue/) は Bluesky 向けの Tweetdeck の代替です。
1. 利用可能なモデレーションのブロックリストを確認します（Bluesky で `block list` を検索）。`Subscribe` をクリックし、リスト内のすべてのアカウントをミュートするかブロックするかを選べます。

Twitter/X からのデータインポートのオプションを確認してください:

- [Sky follower bridge Chrome 拡張機能](https://chromewebstore.google.com/detail/sky-follower-bridge/behhbpbpmailcnfbjagknjngnfdojpko?hl=en)は、Twitter/X のフォロワーリストを検索し、Bluesky 上のユーザーを見つける手助けをします。
- 自動データインポート:
  - オープンソースのデータインポート: [twitter-to-bluesky](https://github.com/marcomaroni-github/twitter-to-bluesky) は、ダウンロードした Twitter/X アーカイブの zip ファイルをインポートします。まずテストアカウントで試してください。
  - 有料のデータインポート: [BlueArk](https://blueark.app/en-us/)
- なりすましを避けるため、Twitter/X アカウントは保持することが推奨されます。アカウントを保護し、新しいソーシャルメディアの所在地で自己紹介を更新できます。
- Bluesky で新たに始めて、何もインポートしないこともできます。

_不足している機能、2024-11-11:_

1. 投稿を保存するブックマークアクション（[Issue](https://github.com/bluesky-social/social-app/issues/1091)）。
    - 回避策: [このフィード](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/feed/my-pins)をホームタイムラインにピン留めします。投稿に 📌 絵文字を使うと、自分の 📌 フィードに表示されます。

   ![ピン付きの Bluesky フィード](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_bookmarks_workaround_pins_feed.png)

1. フォロワーが 1,000 人を超える場合に正確なフォロワー数を表示する。
    - 回避策: ハンドルを使って生の API 呼び出しを行います: ブラウザで `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=YOURHANDLE`、または CLI で `curl` と `jq` を使います。`dnsmichi.dev` の例:

    ```shell
    curl -s 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=dnsmichi.dev' | jq -c '.handle,.did,.followersCount'
    "dnsmichi.dev"
    "did:plc:orvu3nk4bdy7edgw3bvnk4pm"
    2605
    ```

1. プロフィールビューからユーザーをスターターパックに追加する（[Issue](https://github.com/bluesky-social/social-app/issues/6104)）。

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

スターターパックはフォローするユーザーのリストを提供し、フィードでフォローして読む潜在的なユーザーをすぐに見つけられるようにします。

ユーザーは特定のトピック、コミュニティグループ、イベントなどについて自分のプロフィール上でスターターパックを作成し、より広いコミュニティと共有できます。

GitLab チームメンバーは以下のスターターパックの作成・メンテナンスを始めています:

| スターターパック | メンテナー |
|--------------|------------|
| [GitLab Community](https://bsky.app/starter-pack/dnsmichi.dev/3l7t2mtkdmu22) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [GitLab DevRel team](https://bsky.app/starter-pack/dnsmichi.dev/3laofnohynf2o) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [AI/ML](https://bsky.app/starter-pack/dnsmichi.dev/3l7szgjersb2e) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [Platform Engineering](https://bsky.app/starter-pack/bryanross.me/3l7pz6aoenx2s) | [Bryan Ross](https://bsky.app/profile/bryanross.me) |

その他のコミュニティがメンテナンスするスターターパック:

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

完全なリストや Bluesky のスレッドも利用できますが、急速に変化しています。_最終更新 2024-11-11、外部 URL。_

- Steven Borrelli による [Bluesky Tech Starter Packs list](https://github.com/stevendborrelli/bluesky-tech-starter-packs)
- Dana Woodman による [Starter Packs thread on Bluesky - Dev, Cloud Native, Ops, Sec](https://bsky.app/profile/danawoodman.com/post/3l7yeqhnopp2s)
- Mubashar Iqbal による [Bluesky Directory - curated collection with search](https://blueskydirectory.com/)

#### Bluesky でのフォロワーとエンゲージメント

1. チームメンバーや友人に、[スターターパック](/handbook/marketing/developer-relations/developer-advocacy/social-media/#bluesky-starter-packs)に追加してもらうよう依頼します。
    - ユーザーはスターターパックの `Follow all` アクションボタンをクリックする傾向があります。例: 2024 年 10 月下旬にテックコミュニティが Bluesky に移行した際、@dnsmichi のフォロワー数は 3 週間で 200 から 1,200 に増えました。Michael は DevRel、DevOps、CloudNative のスターターパックに入っています。
1. 投稿に関わってディスカッションを始め、自身の経験からユーザーの質問に答える手助けをします。
1. GitLab に焦点を当てたコンテンツと、一般的なテクノロジーの考察、役立つチュートリアル、ヒント、ミーム、写真とのバランスを取ります。

### Mastodon のヒント

1. 信頼できるコミュニティとモデレーションを持つ Mastodon サーバーを選び、アカウントを作成します。
    - [hachyderm.io](https://hachyderm.io): [@sugaroverflow](https://hachyderm.io/@sugaroverflow)、[@john_cogs](https://hachyderm.io/@john_cogs)
    - [crashloop.social](https://crashloop.social)（#EveryoneCanContribute cafe のメンバーが運営する小さなコミュニティインスタンス）: [@dnsmichi](https://crashloop.social/@dnsmichi)
1. モバイルアプリ
    - Mastodon: [iOS](https://apps.apple.com/de/app/mastodon/id1571998974)、[Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=en&gl=US&pli=1)
    - Metatext: [iOS](https://apps.apple.com/de/app/metatext/id1523996615?l=en)
1. Tweetdeck の代替が Mastodon の Web インターフェースに組み込まれています。
    - [`Preference > Appearance`](https://docs.joinmastodon.org/user/preferences/) に移動し、`enable advanced web interface` を選択します。
1. Mastodon は投稿のインプレッションを追跡しません。GitLab 所有のコンテンツには **常に** [短縮 URL での UTM 追跡](/handbook/marketing/developer-relations/developer-advocacy/social-media/#utm-tracking)を使ってください。

## コンテンツ

### コンテンツの共有

Twitter、LinkedIn、Mastodon などのコンポーザー機能を使って、ライブコンテンツを投稿できます。**注**: GitLab ブログ記事やマーケティングウェブサイトを指すコンテンツを共有する際は、常に UTM 追跡付きの短縮 URL を作成してください。

- [LinkedIn ウェブアプリ](https://www.linkedin.com/)。新しい投稿を開始すると、右下に時計アイコンがあり、[投稿をスケジュール](https://www.linkedin.com/help/linkedin/answer/a1347212/schedule-posts?lang=en)できます。
- Bluesky: アプリにログインしてコンテンツを投稿します。
- [Twitter/X ウェブアプリ](https://twitter.com/home)。コンポーザーでスケジュール投稿のツイートも送れます。
- Mastodon: 自分のインスタンスにログインし、コンポーザーフォームを使います。[Mastodon scheduler](https://www.scheduler.mastodon.tools/) で投稿をスケジュールできます。

_2023-07-01:_ Twitter/X はプラットフォーム上のすべてのユーザーに対する[レート制限を発表](https://techcrunch.com/2023/07/01/twitter-imposes-limits-on-the-number-of-tweets-users-can-read-amid-extended-outage/)し、認証済みユーザーのみがツイートを見られるようになりました。これはアクセシビリティの問題を引き起こします。ウェブサイトに埋め込まれたツイートやプレビューは見られますが、追加のエンゲージメントには Twitter/X アカウントとログインが必要です。Twitter/X によればこれらの制限は一時的なものでしたが、2024-11-11 時点でもログイン要件は残っています。_Twitter/X の URL を社内で共有する際は、誰もがコンテンツにアクセスして貢献できるよう、常にスクリーンショット／テキストのコピーを作成してください。_

### コンテンツソース

#### ニュースレター

- [GitLab Community newsletter](https://about.gitlab.com/community/newsletter/) (GitLab、DevOps、Cloud)
- [CloudSecList](https://cloudseclist.com/) (Cloud、Security)
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) (大手テックと高成長スタートアップ - 有料購読が必要、@dnsmichi に問い合わせ)
- [Last week in AWS](https://www.lastweekinaws.com/) (Cloud)
- [The New Stack](https://thenewstack.io/newsletter/) (Cloud Native、DevOps)
- [allesnurgegloud.com](https://allesnurgecloud.com/) (Cloud、ドイツ語)

#### コミュニティプラットフォーム

- [GitLab Forum](https://forum.gitlab.com/) - [ハンドブック](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Hacker News](https://news.ycombinator.com/)
  - 検索例: [Rust](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=rust&sort=byDate&type=story)
  - Slack: [#hn-mention](https://gitlab.slack.com/archives/CBL93C22D) (内部)
- ブログ＆ニュース
  - [InfoQ](https://www.infoq.com/)
  - [The New Stack](https://thenewstack.io/)
  - [GitLab blog](https://about.gitlab.com/blog/)

#### その他のコンテンツソース

- GitLab Slack (内部): [#external-comms](https://gitlab.slack.com/archives/CB274TZRR)、[#newswire](https://gitlab.slack.com/archives/CERAPFN7R)、[#competition](https://gitlab.slack.com/archives/C1BBL1V3K)、[#ceo](https://gitlab.slack.com/archives/C3MAZRM8W)

## アナリティクス

私たちの方法とツールについては、[コンテンツの効果](/handbook/marketing/developer-relations/content-effectiveness/)を参照してください。

## ソートリーダーシップ戦略

この戦略は、インプレッションを増幅し、ソートリーダーシップを築くのに役立ちます。

- よりアクティブなフォロワーを引きつけ、それによってインプレッション数とエンゲージメントを向上させます。
  - ユーザーは LinkedIn であなたをフォローできるので、すべての招待を受け入れる必要はありません。ビジネスネットワークを広げる計画がある場合は、プライベートなメールや電話番号などのプロフィール詳細が誰にも共有されないようにしてください。
- ユーザーを助け、教育します
- プロフィール統計を分析します
  - 最も多いインプレッション、トップのメディアツイート、最もエンゲージメントの高いツイートの理由
- 興味深いストーリーを共有するユーザーをフォローします
  - その人がフォローバックしてくれることで、フォロワー数が増える可能性があります。
- コメント付きでリツイートし、自分の考えや楽しい絵文字を添えます。
  - これを「通常の」リツイートと混ぜます。
- ツイートに関わり、頻繁にいいねし、返信を追加してディスカッションに参加します。
  - 必要なときはいつでも `Thanks for sharing :emoji:` と伝えます
  - ポジティブな雰囲気を共有します
  - [チームメンバーのソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/)に従います
- 批判には耳を傾け、ヘイトスピーチは無視します。
- GitLab の競合を批判しないでください。
  - 代わりに、彼らのコミュニティと関わり、どう改善できるかを学びます。
- フィードバックを製品・エンジニアリングチームにフィードバックします。
- ライブストリーミングやコミュニティのコーヒーチャットで新しいアイデアを取り入れます。
  - コミュニティメンバーをディスカッションに巻き込みます。

例: Chromium のビルド時間に関するディスカッションは、月曜日の [Self-Managed GitLab with auto-scaling runners](https://twitter.com/dnsmichi/status/1351241954349223944) につながりました。水曜日には、[#everyonecancontribute cafe](https://www.youtube.com/watch?v=isKaBJ4VT24) で [YouTube でライブ](https://twitter.com/dnsmichi/status/1351944765697363974)で試すことにしました。その後、Max が[ブログ記事](https://web.archive.org/web/20240211154203/https://fotoallerlei.com/blog/2020/autoscaling-gitlab-runners-on-hetzner-cloud/)を書きました。

### ソーシャルプロフィールを築く

- 個人的なメモを追加し、ユーザーがあなたの生活を垣間見られるようにします。食べ物、レジャー活動、ちょっと変わった習慣など、何でも構いません。
- `#allremote` と `#remotework` で自分の印象や考えを共有します。
- 日々の仕事について定期的にツイートします。ハッシュタグ `#LifeAtGitLab` を使ってインサイトや楽しい瞬間を共有します。
- 別のステージ／グループの優れた GitLab 機能を選んで投稿します（ブログ記事、スクリーンショットなど）。
  - ツイート／LinkedIn の URL をリンクして、Slack で称賛を共有します。
- 楽しいものを投稿し、テックのストーリーに関連するアニメーション GIF を使います。見たときに思わず笑えるようなものです。

ブランドアカウントと共有したい興味深いものを見つけたら、[#social_media_action](https://gitlab.slack.com/archives/C01AZ9C8Z4G) で Slack に共有し、自分でもリツイートしてください。

## ソーシャルキャンペーン

### リリースエバンジェリズム {#release-evangelism}

[GitLab のリリース](https://about.gitlab.com/releases/)は、毎月多くの価値を追加します。開発者として、それらが具体的に解決しうるユースケースやワークフローの強化について、あなたは知っています。この知識を使って、この新機能がなぜあなたに役立つのかを **なぜ** という観点から説明してください。

[製品キックオフ](https://about.gitlab.com/direction/kickoff/)は、計画中の機能についてのインサイトを提供します。私たちは野心的に計画するため、すべてが計画どおりにリリースされる保証はありません。したがって、リリースエバンジェリズムのキャンペーンは、[リリース日](/handbook/engineering/releases/)前後に直前のタイミングで行う必要があります。

> **ヒント**: GitLab チームメンバーは [#release-post](https://gitlab.slack.com/archives/C3TRESYPJ) Slack チャンネルにアクセスして、毎月のリリースブログ記事の更新を確認できます。
> より広いコミュニティのメンバーは、`gitlab-com/www-gitlab-com repository` で[リリース投稿 MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=release+post)を確認するか、[DE-Release-Evangelism](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?sort=updated_desc&state=opened&label_name[]=DE-Type::Evangelist) ラベルが付いた Developer Advocate の Issue をフォローできます。

ワークフロー:

- [ワークフローハンドブック](/handbook/marketing/developer-relations/developer-advocacy/workflow/)からリンクされている、リリースエバンジェリズムの会計年度エピックを開きます。
- Developer Advocate がリリースブログ記事のドラフトをレビューします。
  - レビューアプリを使います。
  - リリース日前にマージリクエストにフィードバックと提案を追加します。
  - 興味深い項目をソーシャルテキストの例とともにリリースエバンジェリズムエピックに追加します。
- Developer Advocate は、リリース日にお気に入りの機能を共有・スケジュールします。
  - リリースエバンジェリズムのインプレッションを追跡するために、キャンペーンマネージャーの短縮 URL を使います。
  - リリースブログ記事の既存メディア（画像、動画）を使うか、新しいスクリーンショット／動画を作成します。
  - ドキュメント、またはすでにリリース済みであればリリース投稿のアンカーにリンクします。**レビューアプリには決してリンクしないでください。**

ヒント:

- リリース前後の 1 週間にわたって 1 〜 2 回の共有
  - PTO 中の場合は、後で関わります。空き時間に共有をスケジュールしないでください。
- メッセージの形式: `課題? -> 解決策`
- 絵文字と CTA URL を追加します。
- アニメーション GIF や動画は、人々が「ドゥームスクロール」をやめるのに役立ちます。
- PT と CEST（9 〜 11am PT）の時間帯を狙います。

KPI:

- インプレッションとエンゲージメント

#### リリース投稿の共有

[ソーシャルカードバリデーター](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を使って、リリースブログ記事のソーシャルプレビューを検証してください。プレビューが正しくレンダリングされない、または読者からの注意がさらに必要な状況があるかもしれません。地味な解決策として、ブラウザのサイズを変更し、機能を一覧表示するサブタイトルを含むヘッダーの[スクリーンショットを撮影](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)して、その画像をソーシャル共有に添付します。15.1 の例: [Twitter](https://twitter.com/dnsmichi/status/1539646159500853248)、[LinkeDIn](https://www.linkedin.com/posts/dnsmichi_it-is-the-22nd-of-the-month-gitlab-activity-6945411563717574656-ZZdr?utm_source=linkedin_share&utm_medium=member_desktop_web)

#### リリースエバンジェリズムの注目すべきコントリビューター

毎月のリリース投稿では、コミュニティのコントリビューターに [Notable Contributor](https://contributors.gitlab.com/notable-contributors) が授与されます。Developer Advocate からの個人的な称賛はコミュニティエンゲージメントに役立ち、可視性を高めて、誰もが貢献したくなるようにします。

ワークフロー:

- リリースブログ記事を開きます
- Notable Contributor セクションの[スクリーンショットを作成](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)します
- 280 文字でソーシャル共有を準備します
  - 機能への貢献に基づいたパーソナライズされたメッセージを使います
  - GitLab プロフィールに記載されているソーシャルタグ（Twitter、LinkedIn）を使って Notable Contributor をタグ付けします
  - `#EveryoneCanContribute` ハッシュタグを追加します
  - URL に `/#notable-contributor` アンカーを付けてリリースブログ記事を追加します
  - [14.9、LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) の例: `Shoutout to Timo Furrer for becoming the GitLab 14.9 MVP 🎉 Your work on the #Terraform provider, automating all things GitLab, is invaluable. Thanks for all your contributions! 💜 🦊 #EveryoneCanContribute https://about.gitlab.com/releases/2022/03/22/gitlab-14-9-released/#mvp`
- Notable Contributor の共有を Twitter と LinkedIn に投稿します
  - URL をリリースエバンジェリズムの Issue に追加します
- [#ceo Slack チャンネル](https://gitlab.slack.com/archives/C3MAZRM8W)で CEO に、Notable Contributor の共有に関わるよう依頼します
  - 推奨アクション: 再共有／いいね、貢献に感謝するコメントを追加。
  - 提案テキストを効率的にコピー／ペーストできるよう、Slack スレッドにコメントテキストのみを含むコメントを追加します。
  - 共有のコメントとエンゲージメント指標を確認します

#### リリースエバンジェリズムの例

GitLab 14 の高パフォーマンスな共有例:

- 14.9: Notable Contributor を [LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) で（3,000+ ビュー、60+ リアクション）
- 14.8: Notable Contributor を [Twitter](https://twitter.com/dnsmichi/status/1496140144067465227) で（8,000 インプレッション、150 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-devops-activity-6901905241671835648-X4Vk)（2,500 ビュー、32 リアクション）
- 14.7: Notable Contributor を [Twitter](https://twitter.com/dnsmichi/status/1484898545849315333) で（18,000 インプレッション、600 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-community-devops-activity-6890664006277754880-OCJ5)（7,500 ビュー、150 リアクション）
- 14.6: Issue のタイトルの Markdown レンダリングを [LinkedIn](https://www.linkedin.com/posts/dnsmichi_yesssss-gitlab-146-allows-to-render-markdown-activity-6879493371191156736-RHCu) で（3,000 ビュー、62 リアクション）
- 14.6: Notable Contributor を [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6879464875018465280-skt5) で（1,500 ビュー、30 リアクション）
- 14.5: IaC セキュリティスキャンを [LinkedIn](https://www.linkedin.com/posts/dnsmichi_security-infrastructureascode-kics-activity-6870082879037173761-kyaQ) で（2,300 ビュー、28 リアクション）
- 14.5: CI/CD での exists を使った条件付き include を [Twitter](https://twitter.com/dnsmichi/status/1464279272214958095) で（12,000 インプレッション、600 エンゲージメント）
- 14.3: CI/CD での条件付き include を [Twitter](https://twitter.com/dnsmichi/status/1440690461673340933) で（21,000 インプレッション、1,800 エンゲージメント）
- 14.2: ステージレスな CI/CD パイプラインを [Twitter](https://twitter.com/dnsmichi/status/1429475480030351364) で（55,000 インプレッション、1,900 エンゲージメント）と [LinkedIn](https://www.linkedin.com/posts/dnsmichi_async-cicd-pipelines-with-needs-as-job-activity-6835241415748939776-I6kI)（9,000 ビュー、127 リアクション）
- 14.2: Gitpod で MR を開く Notable Contributor を [Twitter](https://twitter.com/dnsmichi/status/1429469773058936841) で（43,000 インプレッション、300 エンゲージメント）[RT で引用されたツイート](https://twitter.com/ludmann/status/1429735681513951235)
- 14.2: ライブ Markdown プレビューを [Twitter](https://twitter.com/dnsmichi/status/1429463680182276100) で（7,000 インプレッション、300 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_wohooooooo-live-markdown-preview-while-typing-activity-6835229767072014336-sDCg)（5,000 ビュー、62 リアクション）
- 14.2: CI/CD の include 文のパラメータ化を [Twitter](https://twitter.com/dnsmichi/status/1429473222098100233) で（8,000 インプレッション、400 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_you-can-parametrize-cicd-include-statements-activity-6835239058843688960-Xc6v)（800 ビュー、13 リアクション）
- 14.2 @Jira の Issue から @gitlab で直接ブランチを作成？！ ぜひお願いします、を [Twitter](https://twitter.com/olearycrew/status/1429899257700618249) で（15,000 インプレッション、900 エンゲージメント）
- 14.2 おっと見てください。代名詞 AND 名前の発音が GitLab プロフィールに入りました、を [Twitter](https://twitter.com/olearycrew/status/1429459101294157829) で（5,000 インプレッション、150 エンゲージメント）
- 14.1: MR でのステータスチェック向け外部 API を [Twitter](https://twitter.com/dnsmichi/status/1418271636722274307) で（8,000 インプレッション、500 エンゲージメント）
- 14.1: Helm Charts リポジトリを [LinkedIn](https://www.linkedin.com/posts/dnsmichi_cloudnative-helm-activity-6823949221377388544-9spE) で（1,100 ビュー、17 リアクション）
- 14.1: Kubernetes クラスターイメージスキャンを [LinkedIn](https://www.linkedin.com/posts/dnsmichi_kubernetes-activity-6823916460750974976-FJEc) で（2,500 ビュー、27 リアクション）
- 14.0: Pipeline Editor を [Twitter](https://twitter.com/dnsmichi/status/1407359717282828298) で（38,000 インプレッション、1,400 エンゲージメント）
- 14.0: GitLab のコンテナスキャンで @AquaSecTeam の Trivy を使う、を [Twitter](https://twitter.com/olearycrew/status/1407358974601707520) で（7,000 インプレッション、100 エンゲージメント）
- 14.0: Terraform Module Registry の導入を [Twitter](https://twitter.com/sarki247/status/1407995667121901568) で（4,200 インプレッション、55 エンゲージメント）
- 14.0: Helm 3 を使ったクラスター管理プロジェクトテンプレートを [Twitter](https://twitter.com/sarki247/status/1408056830551601159) で（2,000 インプレッション、64 エンゲージメント）

過去の例:

- [13.12: 条件に基づく動的 CI/CD 変数を Twitter で](https://twitter.com/dnsmichi/status/1396129739622998022)（23,000 インプレッション、2,300 エンゲージメント）
- [13.11: 13.11 を強調し 13.12 を予告するツイートストーム](https://twitter.com/dnsmichi/status/1395686623132758017)（32,000 インプレッション）
- [13.10: ネストされた CI/CD 変数を Twitter で](https://twitter.com/dnsmichi/status/1383014333500813322)（18,000 インプレッション、1,100 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-1310-allows-to-nest-cicd-variables-activity-6787693633425424384-WelD)（2,300 ビュー、35 リアクション）
- [13.10: 子パイプライントリガーでの並列 CI/CD ジョブ実行を Twitter で](https://twitter.com/dnsmichi/status/1382351735960797184)（13,000 インプレッション、700 エンゲージメント）[LinkedIn](https://www.linkedin.com/posts/dnsmichi_parallel-cicd-job-execution-in-gitlab-improves-activity-6788117887266652160-hNIV)（1,100 ビュー、25 リアクション）
- [13.9: 拡張された CI/CD 設定を Twitter で](https://twitter.com/dnsmichi/status/1363879804785803268)（5,000 インプレッション、400 エンゲージメント）
- [13.9: .NET 5.0 での SAST](https://www.linkedin.com/posts/dnsmichi_gitlab-dotnet-activity-6772576735876714496-noR_)（1,600 ビュー、43 リアクション）
- [13.8: CI パイプラインエディターを LinkedIn で](https://www.linkedin.com/posts/dnsmichi_best-release-ever-gitlab-inc138-is-here-activity-6758427487870451712-TttR)（5,000 ビュー、10 コメント、316 リアクション、15 リシェア）
- [13.8: MR ウィジェットでの CI/CD ジョブアーティファクトのダウンロードを LinkedIn で](https://www.linkedin.com/posts/dnsmichi_gitlab-activity-6758714643964805120-9Yyd)（800 ビュー、14 リアクション）
- [13.7: Merge Request Reviewers を LinkedIn で](https://www.linkedin.com/posts/dnsmichi_gitlab-devops-productivity-activity-6756907989321433088-TRW9)（500 ビュー、16 リアクション）
- [13.7: CI/CD ジョブログでのレンダリング済み URL を LinkedIn で](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6723982784492273664-cwg0)（4,800 ビュー、350 リアクション、12 コメント）
- [13.6: VS Code GitLab workflow を Twitter で](https://twitter.com/dnsmichi/status/1336362663107063808)（16,000 インプレッション、700 エンゲージメント）
- [13.5: グループ wiki を Twitter で](https://twitter.com/dnsmichi/status/1319656105249820672)（18,000 インプレッション、600 エンゲージメント）
- [13.4: Pipeline Efficiency ドキュメントを LinkedIn で](https://www.linkedin.com/posts/dnsmichi_on-a-personal-note-my-first-larger-contribution-activity-6714235003447853056-Kkv4)（2,100 ビュー、49 リアクション）
- [13.3: KubeCon Kubernetes ティザー](https://twitter.com/dnsmichi/status/1296051268448915456)（18,000 インプレッション、500 エンゲージメント）
- [13.3: 並列 CI/CD ジョブ実行のマトリックスビルドを LinkedIn で](https://www.linkedin.com/posts/dnsmichi_gitlab-development-cicd-activity-6702933595721351168-c-nV)（2,400 ビュー、49 リアクション）
- [13.1: 個別の CI/CD ジョブアーティファクトレポートを LinkedIn で](https://www.linkedin.com/posts/dnsmichi_gitlab-cicd-development-activity-6683033972479451136-VNVL)（700 ビュー、16 リアクション）

#### より広いコミュニティの関与を奨励する

- [Discord](https://discord.gg/gitlab) で GitLab heroes に、お気に入りの今後の機能をソーシャルで共有するよう依頼します。
- ヒントやベストプラクティスのためにこのハンドブック URL を含め、レビューアプリ付きのリリース MR を共有します。

### リリース投稿の機能をレビューする

Developer Advocate は、毎月 18 日前後のリリース前に、エンドユーザーの視点に立ってリリースブログ記事の項目をレビューします。レビューには次が含まれます:

- 機能の説明と、解決される課題／ユースケースの明確化。
- 機能をプライマリに昇格することを提案する。
- 大きな影響が見込まれる機能や、欠けている追加項目を Changelog から追加する。

最初のパイロット実験は、[2021 年 8 月の GitLab 14.2](https://gitlab.com/gitlab-org/verify-stage/-/issues/97#note_664350725) について、私たちの [Verify 製品グループ](/handbook/product/categories/#verify-stage)と確立しました。DRI は @jreporter（Group Manager, Product）と @dnsmichi（DE stable counterpart）でした。

### 製品フィードバック

ユーザーリサーチキャンペーンやプロジェクトの Issue でのフィードバックに加えて、私たちはソーシャルメディアでフィードバックや興味深いアイデアをよく目にします。ユーザーが私たちのブランドアカウント `@gitlab` をタグ付けすることもあれば、`gitlab` を検索して発見するシナリオもあります。

これを `もし 1 つだけ機能を追加できるとしたら、それは何ですか?` のような直接的な質問に変えることで、ステークホルダーを特定しやすくなり、より直接的なフィードバックループを促せます。

この取り組みには、製品＆エンジニアリング、ソーシャル、DE チーム間のクロスチームコラボレーションが必要です。割り当てられた DE DRI は [Michael Friedrich](https://gitlab.com/dnsmichi) です。

ワークフロー:

- 新しい DE リクエスト Issue を作成する
- トピック／スコープを定義する
- ソーシャル向けのメッセージを、最大 280 文字で提案する
- ソーシャル共有をスケジュールして文書化する
- ソーシャル共有の反応をモニターする
- 特定の反応を Slack の #product に移動する

第 2 イテレーション: これをリクエストフォーム付きのセルフサービスにし、Slack などでの反応の収集／更新を自動化する。

KPI:

- エンゲージメント数
- 更新／作成された Issue

### チームエバンジェリズム

良いフィードバックであれ、回答に追加の専門家が必要であれ、ソーシャル共有を製品チャンネルに移動します。GitLab チームメンバーをタグ付けし、会話から恩恵を受けられるときにソーシャルメディアで返信／ディスカッションするよう促します。白熱した議論の場合は、ソーシャルメディア DRI の小さなグループ内に留めます。

寄せられた質問への対応や、より多くの専門家の関与については、Developer Advocate が [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) で Slack で支援できます。

#### リリースマネジメント

[GitLab 12.9](https://about.gitlab.com/releases/2020/03/22/gitlab-12-9-released/) のツイート例:

- 良いタイトルを選び、みんなに新しいリリースを作ってみるよう促します: `Have you created your first release through the in @gitlab yet? Let's do this!`
- デモ環境に行き、ガイドとなる手順を含めて 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）
- リリースブログ記事への URL を含めるべきです
- ユーザー名の前に @ を付けて @gitlab にメンションします
- ハッシュタグ `#gitlab #releasemanagement` を使います

#### パッケージ

[レジストリのオープンソース化](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/)のツイート例:

- ユーザーがユースケースを解決するよう促す、かっこいいタイトルを選びます: `Unstable npm mirrors no more: @gitlab got you covered - the NPM registry will be open sourced.`
- デモ環境に行き、ガイドとなる手順を含めて 1 〜 4 枚のスクリーンショットを作成します（これをミニチュートリアルにします）
- リリースブログ記事への URL を含めるべきです
- ユーザー名の前に @ を付けて @gitlab にメンションします
- ハッシュタグ `#gitlab #packages #registry` を使います
