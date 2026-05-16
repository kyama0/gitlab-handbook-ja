---
title: "ソーシャルメディアでのデベロッパーアドボカシー"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/social-media/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## はじめに

デベロッパーアドボカシーは、ソーシャルメディアとコミュニティエンゲージメントを通じてソートリーダーシップを構築します。ここで共有されるヒントと戦略は、チームメンバーや広範なコミュニティが GitLab のエバンジェリストおよびアドボケイトとして自身のプロフィールを構築するのに役立ちます。

トピック:

- 教育と学習: 自身の経験からのヒント。ワークショップ、スライド、ブログ記事、ビデオなど。
- イベントのライブ投稿。トークをスクリーンショット、写真、メッセージで増幅する。
- [リリースエバンジェリズム](#release-evangelism): 個人的な視点で機能のインサイトを共有する。
- コミュニティとお客様のベストプラクティス、GitLab のインサイト。
- GitLab への貢献、お客様に GitLab との共創を促す。

### UTM トラッキング

GitLab のデベロッパーアドボケイトには、コンテンツ共有のパフォーマンスに関する分析とインサイトを提供するために、[URL タグ付けとトラッキング用の UTM](/handbook/marketing/developer-relations/developer-advocacy/#utms-for-url-tagging-and-tracking)を追加することが推奨されています。この方法は [KPI メトリクス](/handbook/marketing/developer-relations/content-effectiveness/)を検証するのに役立ちます。

## ターゲットプラットフォーム

LinkedIn は、コンテンツ配信、リリースエバンジェリズム、お客様エンゲージメントの主要なターゲットプラットフォームです。

> 注: 2024 年の Twitter/X のプラットフォーム変更とそれに伴うコンテンツエンゲージメントの欠如により、FY25Q4 でデベロッパーアドボケイトのプラットフォームとして Twitter/X の優先度を下げています。

ソーシャルプラットフォームの評価:

- Bluesky、進行中。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/277)。
- Mastodon、停止。[評価 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/123)。

### 一般的なソーシャルメディアのヒント

次のセクションでは、エンゲージメント、リーチを高め、コンテンツを増幅するためのソーシャルメディアのベストプラクティスを提供します。

#### メッセージのヒント

- メッセージは短く、魅力的に保ちます。複数の文がある場合は、リストに分解します。
  - 💡 絵文字をリストマーカーとして使用します。これは何かを学ぶことを表します。
  - 🏗 これにより、ユーザーは何を共有して一緒に構築したいかを学びます (たとえば CI/CD)。
  - 🔥 適切な絵文字を選びます。これはたとえば素早い成功を表します。
  - 🛡️ この絵文字はセキュリティ関連のものです。
  - 🌱 何かを始める、または初めての MR がマージされて貢献となったことを、この絵文字で表現できます。
- ハッシュタグは最大 3-4 個まで、メッセージの最後に使用します。LinkedIn ではハッシュタグを検索できますが、Instagram や Threads と同様に、多くのハッシュタグでコンテンツを増幅することはありません。
  - `#development` と `#DevSecOps` は良い例です。ただし、毎回含める必要はありません。
- 絵文字が多すぎると、重要なメッセージが隠れてしまいます。
- スクロール時に人々が止まるよう、魅力的なスクリーンショット画像やアニメーション GIF を使用します。
  - 投稿に画像を添付する際は、コンテンツを説明する ALT テキストを必ず含めます。
- Bluesky と Twitter/X では `@` 文字で始めないでください。返信として隠され、オーディエンスのリーチが妨げられます。先頭に `.` または絵文字を付けてエスケープします。例: `.@gitlab 13.9 adds ...`。

文字数制限:

- LinkedIn: 3000 文字、URL を含む。
- Bluesky: 300 文字
- Twitter/X: 280 文字
- Mastodon: 500 文字

##### メッセージ用のメディアファイル

ソーシャルメディア用の画像とビデオの変換、[GIF のリサイズ](/handbook/product/product-processes/making-gifs/#resizing-gifs)などについて学ぶには、[画像のリサイズ](/handbook/tools-and-tips/#resizing-images)と [GIF の作成](/handbook/product/product-processes/making-gifs/)に関するヒントに従ってください。常に利用可能な最良のソースを使用するか、共通のファイル形式に変換します。たとえば、macOS は独自の `HEIC` 画像形式をエクスポートしますが、これは [LinkedIn のデスクトップ](https://www.linkedin.com/help/linkedin/answer/a564109)ではサポートされていません。代わりに、互換性向上のために `JPG` または `PNG` を使用します。ImageMagick と macOS Finder を使用して [HEIC を JPG に変換](/handbook/tools-and-tips/#convert-heic-to-jpg)できます。

メディアの制限:

- LinkedIn では投稿に最大 20 枚の画像をアップロードできます。
  - [ファイルサイズ制限: 5 MB](https://www.linkedin.com/help/lms/answer/a527229)
  - 画像と動画を混在させることはできません。
  - 投稿エディタでは、ドラッグ&ドロップやカーソルキーで画像の順序を変更できます。
- Bluesky では最大 4 枚の画像、または 60 秒の動画 1 本をアップロードできます ([2024-09 以降](https://bsky.social/about/blog/09-11-2024-video))。
- Twitter/X: 4 枚の画像、または 140 秒の長さで 512 MB サイズの動画 1 本。
- Mastodon: 4 枚の画像。

##### ユーザーのタグ付け

- LinkedIn では、`@` を入力すると、企業、ブランドアカウント、ユーザーをタグ付けできます。
- Bluesky、Mastodon、Twitter/X では、`@` を使用してユーザーをメンションできます。

##### アクセシビリティ

- 添付メディアファイル (画像、GIF、ビデオ) には必ず ALT タグを追加します。
- 太字/斜体に見えるテキストを使用しないでください。ジェネレーターツールは特殊な Unicode 文字を使用するため、スクリーンリーダーやアクセシビリティを壊します。代わりに絵文字や書式テクニックを使用します。

#### ソーシャルカードのバリデーター

共有する前に、ソーシャルカードバリデーターを使って含める URL のソーシャルプレビューを確認します。

- [OpenGraph バリデーター](https://www.opengraph.xyz/) はタグ (ソーシャルプレビューを含む) のデバッグに使えます。
- [LinkedIn post inspector](https://www.linkedin.com/post-inspector/)

#### 高速な絵文字ワークフロー

> オプションの効率化のヒント。

[Raycast](/handbook/tools-and-tips/other-apps/#raycast) は生産性アプリで、macOS の Spotlight を置き換えることができます。お好みのショートカット (デフォルトでは `option + space`) で Raycast を開き、`emoji` と入力し始め、`enter` を押して絵文字名を入力します。拡張機能設定を開いて、絵文字ビューにショートカットを割り当てることもできます。Raycast を開いて `extensions` と入力し、プロンプトで `Extensions Raycast Settings` を選択します。`emoji` を検索し、たとえば `cmd 2` のようなキーボードショートカットを割り当てます。

![Raycast 拡張機能: Emoji キーボードショートカット](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/raycast_extensions_settings_emojis_keyboard_shortcut.png)

### LinkedIn のヒント

#### LinkedIn: グループ投稿

LinkedIn は、コミュニティでキュレーションされたコンテンツのストリームをフォローするためにユーザーが参加できる[グループ](https://www.linkedin.com/help/linkedin/answer/a540824/linkedin-groups-membership-overview?lang=en)を提供しています。ソートリーダーシップ戦略と広範なコミュニティとのエンゲージメントに関連するグループを特定します。

- [DevOps and SRE discussions](https://www.linkedin.com/groups/6585254/): 2023-07-04 時点で 137,000 メンバー
- [Artificial Intelligence (AI), Digital Transformation, Data Science, Automation, Machine Learning, and Analytics Group](https://www.linkedin.com/groups/4376214/): 2023-07-04 時点で 101,000 メンバー

メリット: コンテンツ共有 (たとえば [GitLab ブログ](https://about.gitlab.com/blog/)) のリーチを増やし、[クリエイターモードプロフィール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#linkedin-use-creator-mode-profile)を使って新しいフォロワーを引き付けます。

一部のグループでは、モデレーターが投稿を承認する必要があります。次のガイドラインに従ってください:

- 投稿が役立ち、リンクされた記事の短い要約を提供することを確認します。
- [ソーシャルカードプレビュー](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を確認し、人々がスクロールを止めるようなスクリーンショットや [GIF](/handbook/product/product-processes/making-gifs/) で置き換えます。
- グループに毎日メッセージでスパムをしないでください。共有について慎重になり、グループオーナーが役立つ無料学習コンテンツのストリームを作成するのを助けてください。

例: [Michael による GitLab CLI 発表投稿](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-7006375881359130624-1812)では、CI/CD パイプライン、ジョブトレース、CLI API コールを含む CLI インターフェースが添付スクリーンショットとして表示され、24 時間で 92 いいねと 5,200 インプレッションを生み出しました。同じ投稿が承認後 [LinkedIn の DevOps グループ](https://www.linkedin.com/groups/2825397/)に投稿され、9 時間で 40 いいねと 9000 インプレッションを得ました。

#### LinkedIn: クリエイターモードプロフィールを使用する

LinkedIn はデフォルトでユーザー間のコネクションになっており、誰もが異なる戦略でコネクションを管理しています。たとえば、対面で会った人だけにする、などです。場合によっては、LinkedIn のコネクションを直接必要とせずに、あなたのコンテンツをフォローしたりエンゲージしたいユーザーがいます。これは、Twitter と同じ方法で[自動スケジュール](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content)など、LinkedIn でソートリーダーシップコンテンツを共有する素晴らしい戦略でもあります。

LinkedIn は複数のメリットをもたらすプロフィール用の[クリエイターモード](https://www.linkedin.com/help/linkedin/answer/a522537/creator-mode)を提供しています:

- `Activity` および `Featured` セクションをプロフィールの上部に移動することで、コンテンツがハイライトされます。
- ユーザーはデフォルトのアクションとしてあなたをフォローできます。
  - コネクションは点線メニューの追加ステップになります。これはレビューするコネクションリクエストを減らすのにも役立ちます。
  - フォロワーはあなたのコンテンツをフィードで見て、エンゲージできます。
  - リクエストを拒否しても、コネクションリクエストは自動的にあなたをフォローしています。
- フォロワー数がプロフィールに表示されます。あなたのプロフィールがインフルエンサーのプロフィールやフォローの提案として他の人に表示される可能性があります。
- [プロフィール紹介に URL を追加](https://www.linkedin.com/help/linkedin/answer/a727760)してそこへのトラフィックを誘導することができます。
- [クリエイター分析](https://www.linkedin.com/help/linkedin/answer/a701208)
  - インプレッション、エンゲージメント、プロフィールビューのメトリクスが LinkedIn プロフィールに表示されます。
  - デベロッパーアドボカシーのソートリーダーシップ戦略のメトリクスに必要です。

クリエイターモードを有効にした [Michael Friedrich](https://www.linkedin.com/in/dnsmichi/) のプロフィール例:

![クリエイターモードを有効にした LinkedIn プロフィール: Michael Friedrich](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_creator_mode_profile_michael_friedrich.png)

#### LinkedIn: モバイルでの QR コード接続

イベントに参加して、ネットワーキングや新しい人とのコネクションがよくあります。LinkedIn モバイルアプリは、[プロフィール用の QR コード](https://www.linkedin.com/help/linkedin/answer/a525286/using-a-linkedin-qr-code-to-connect-with-members?lang=en)と、他の QR コードをスキャンするアプリ内機能を提供します。これにより、対面でのコネクションがより効率的になります。

1. iOS または Android で LinkedIn モバイルアプリを開きます。
2. 検索バーをタップします。

   ![LinkedIn iOS アプリ: 検索バー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_01_search_bar.png)

3. このアクションにより、検索バーの右側に QR コードアイコンが表示されます。

   ![LinkedIn iOS アプリ: 検索バー、QR アイコン](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_02_search_bar_qr_icon.png)

4. QR コードアイコンをタップして、共有する QR コードを表示します。

   ![LinkedIn iOS アプリ: QR コードビュー](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_03_qr_code_view.png)

5. QR コードビューには、他の QR コードをスキャンするためのタブもあります。LinkedIn アプリにカメラへのアクセスを許可したくない場合は、モバイルカメラで QR コードをスキャンし、スキャンしたプロフィール URL から LinkedIn アプリを開くこともできます。

### Bluesky のヒント

Bluesky は新しいプラットフォームであり、ユーザーベースが拡大しています。フォロワーを増やし、他のユーザーと交流して自分のネットワークを成長させることが重要です。

#### Bluesky のアカウントと設定

Bluesky はフェデレーションプロトコルを使用しており、`bsky.social` の単一インスタンスから始まりました。コミュニティはそれ以来、複数のインスタンスを作成しました。`bsky.social` インスタンスでアカウントを作成することを推奨します。

1. [bsky.app](https://bsky.app) でアカウント登録します。
1. オプション: アプリをダウンロード
    - アプリストアから [iOS](https://apps.apple.com/us/app/bluesky-social/id6444370199)
    - [Android](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app&hl=en&pli=1)
1. Bluesky にログインします。
1. アカウントをセットアップします。
    - プロフィール画像とバナー画像をアップロードします
    - 略歴を追加: 役割、興味のあるトピック、コンテンツを提供するトピックに焦点を当てます。複数行と URL を追加できます。例: [@dnsmichi プロフィール](https://bsky.app/profile/dnsmichi.dev)。ヒント: GitLab ハンドルを `@gitlab.com` でメンションすると、直接ハンドル URL がレンダリングされます。

   ![@dnsmichi の Bluesky プロフィール (@gitlab.com ブランドハンドル付き)](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_profile_bio_gitlab.png)

推奨される[設定](https://bsky.app/settings):

1. 二要素認証: アカウントへのログインに E メールコードを要求します。
1. アクセシビリティ設定:
    - ALT テキスト: メディア投稿前に ALT テキストを必須化します。
    - メディア: 動画と GIF の自動再生を無効化します。
1. チャット設定: 全員、フォローしているユーザー (デフォルト)、誰からも受け付けないかを判断するために、`Allow messages from` 設定を確認します。
1. ドメインをカスタム Bluesky ハンドルとして使用できます。たとえば `@gitlab.com`、`@sugaroverflow.com` または `@dnsmichi.dev` などです。これにより、ハンドルを覚えやすく、共有しやすくなります。
    - DNS TXT レコード検証をセットアップするには、[Bluesky ブログの説明](https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial)、または [@dnsmichi のチュートリアル](https://dnsmichi.com/2024/11/19/moving-to-bluesky-with-custom-domain-handle/)に従ってください。
    - ハンドルを早めに変更することを検討してください。すべての履歴タグと引用はリダイレクトされますが、スターターパックなどへの着信 URL は壊れ、外部での更新が必要になります。
    - 古いハンドルを副 E メールアドレスで登録し、略歴に `moved to @newhandle` のメモを追加してください。これにより、ネームスクワッティングを回避できます。

#### Bluesky のオプション提案

1. [Bluesky を GitLab プロフィールに追加](https://docs.gitlab.com/ee/user/profile/#add-external-accounts-to-your-user-profile-page)します。
1. Dean Lofts による [Bluesky Getting Started ガイド](https://blog.deanlofts.xyz/guides/getting-started-bluesky/)を確認します。
1. 代替 UI を探索します
    - [deck.blue](https://deck.blue/) は Bluesky 向けの Tweetdeck 代替です。
1. 利用可能なモデレーションブロックリストをレビューします (Bluesky で `block list` を検索)。`Subscribe` をクリックして、リスト内のすべてのアカウントをミュートまたはブロックするかを選択できます。

Twitter/X からのデータインポートのオプションをレビューします:

- [Sky follower bridge Chrome 拡張機能](https://chromewebstore.google.com/detail/sky-follower-bridge/behhbpbpmailcnfbjagknjngnfdojpko?hl=en)は Twitter/X のフォロワーリストを検索し、Bluesky でユーザーを見つけるのに役立ちます。
- 自動データインポート:
  - オープンソースデータインポート: [twitter-to-bluesky](https://github.com/marcomaroni-github/twitter-to-bluesky) はダウンロードした Twitter/X アーカイブの zip ファイルをインポートします。最初にテストアカウントでテストしてください。
  - 有料データインポート: [BlueArk](https://blueark.app/en-us/)
- なりすましを避けるため、Twitter/X アカウントを保持することを推奨します。アカウントを保護し、新しいソーシャルメディアの場所で略歴を更新できます。
- Bluesky で新しく始めて、何もインポートしないこともできます。

_2024-11-11 時点で不足している機能:_

1. 投稿を保存するブックマークアクション ([Issue](https://github.com/bluesky-social/social-app/issues/1091))。
    - ワークアラウンド: [このフィード](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt/feed/my-pins)をホームタイムラインにピン留めします。投稿に 📌 絵文字を使用すると、個人の 📌 フィードに表示されます。

   ![ピン留め付きの Bluesky フィード](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/bluesky_bookmarks_workaround_pins_feed.png)

1. フォロワーが 1,000 を超える場合の正確なフォロワー数の表示。
    - ワークアラウンド: ハンドルで生の API コールを使用します: ブラウザ内、または `curl` と `jq` を使った CLI で `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=YOURHANDLE`。`dnsmichi.dev` の例:

    ```shell
    curl -s 'https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=dnsmichi.dev' | jq -c '.handle,.did,.followersCount'
    "dnsmichi.dev"
    "did:plc:orvu3nk4bdy7edgw3bvnk4pm"
    2605
    ```

1. プロフィールビューからスターターパックにユーザーを追加 ([Issue](https://github.com/bluesky-social/social-app/issues/6104))。

#### チームメンバーとそのフォロワーをフォローする

| 名前 | Bluesky ハンドル |
|------|----------------|
| Cesar Saveedra | [@cealsair.bsky.social](https://bsky.app/profile/cealsair.bsky.social) |
| Daniel Helfand | [@dhelfand.bsky.social](https://bsky.app/profile/dhelfand.bsky.social) |
| Fatima Sarah Kalid | [@sugaroverflow.com](https://bsky.app/profile/sugaroverflow.com) |
| John Coghlan | [@coghlan.me](https://bsky.app/profile/coghlan.me) |
| Michael Friedrich | [@dnsmichi.dev](https://bsky.app/profile/dnsmichi.dev) |
| William Arias | [@pywarias.bsky.social](https://bsky.app/profile/pywarias.bsky.social) |
| GitLab ブランドソーシャル | [@gitlab.com](https://bsky.app/profile/gitlab.com) |

#### Bluesky スターターパック

スターターパックはフォローするユーザーのリストを提供し、フィードでフォロー・閲覧する潜在的なユーザーで素早くスタートするのに役立ちます。

ユーザーは特定のトピック、コミュニティグループ、イベントなどのために自身のプロフィールにスターターパックを作成し、広範なコミュニティと共有できます。

GitLab チームメンバーは次のスターターパックの作成とメンテナンスを開始しています:

| スターターパック | メンテナ |
|--------------|------------|
| [GitLab Community](https://bsky.app/starter-pack/dnsmichi.dev/3l7t2mtkdmu22) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [GitLab DevRel team](https://bsky.app/starter-pack/dnsmichi.dev/3laofnohynf2o) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [AI/ML](https://bsky.app/starter-pack/dnsmichi.dev/3l7szgjersb2e) | [@dnsmichi](https://bsky.app/profile/dnsmichi.dev) |
| [Platform Engineering](https://bsky.app/starter-pack/bryanross.me/3l7pz6aoenx2s) | [Bryan Ross](https://bsky.app/profile/bryanross.me) |

その他のコミュニティメンテナンスのスターターパック:

| スターターパック | メンテナ |
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

完全なリストと Bluesky スレッドも利用可能ですが、急速に変化しています。_最終更新 2024-11-11、外部 URL_

- Steven Borrelli による [Bluesky Tech Starter Packs list](https://github.com/stevendborrelli/bluesky-tech-starter-packs)
- Dana Woodman による [Starter Packs thread on Bluesky - Dev, Cloud Native, Ops, Sec](https://bsky.app/profile/danawoodman.com/post/3l7yeqhnopp2s)
- Mubashar Iqbal による [Bluesky Directory - curated collection with search](https://blueskydirectory.com/)

#### Bluesky のフォロワーとエンゲージメント

1. チームメンバーや友人に [スターターパック](/handbook/marketing/developer-relations/developer-advocacy/social-media/#bluesky-starter-packs)に追加してもらうよう依頼します。
    - ユーザーはスターターパックの `Follow all` アクションボタンをクリックする傾向があります。例: テックコミュニティが 2024 年 10 月下旬に Bluesky に移行したとき、@dnsmichi のフォロワー数は 3 週間で 200 から 1,200 に増えました。Michael は DevRel、DevOps、CloudNative のスターターパックに含まれています。
1. 投稿に取り組み、ディスカッションを開始し、自分の経験からユーザーの質問に役立てましょう。
1. GitLab を中心としたコンテンツと一般的な技術に関する考え、役立つチュートリアル、ヒント、ミーム、写真のバランスを取りましょう。

### Mastodon のヒント

1. 信頼できるコミュニティとモデレーションを持つ Mastodon サーバーを選び、アカウントを作成します。
    - [hachyderm.io](https://hachyderm.io): [@sugaroverflow](https://hachyderm.io/@sugaroverflow)、[@john_cogs](https://hachyderm.io/@john_cogs)
    - [crashloop.social](https://crashloop.social) (#EveryoneCanContribute cafe メンバーが運営する小規模コミュニティインスタンス): [@dnsmichi](https://crashloop.social/@dnsmichi)
1. モバイルアプリ
    - Mastodon: [iOS](https://apps.apple.com/de/app/mastodon/id1571998974)、[Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=en&gl=US&pli=1)
    - Metatext: [iOS](https://apps.apple.com/de/app/metatext/id1523996615?l=en)
1. Mastodon の Web インターフェースには Tweetdeck の代替が組み込まれています。
    - [`Preference > Appearance`](https://docs.joinmastodon.org/user/preferences/) に移動し、`enable advanced web interface` を選択します。
1. Mastodon は投稿のインプレッションを追跡しません。GitLab 所有のコンテンツには **必ず**[ショート URL での UTM トラッキング](/handbook/marketing/developer-relations/developer-advocacy/social-media/#utm-tracking)を使用してください。

## コンテンツ

### コンテンツの共有

Twitter、LinkedIn、Mastodon などのコンポーザー機能は、ライブコンテンツの投稿に利用できます。**注:** GitLab のブログ記事やマーケティングウェブサイトを指すコンテンツを共有する場合は、必ず UTM トラッキング付きのショート URL を作成してください。

- [LinkedIn ウェブアプリ](https://www.linkedin.com/)。新しい投稿を始めて、右下隅にある時計アイコンを見つけ、[投稿をスケジュール](https://www.linkedin.com/help/linkedin/answer/a1347212/schedule-posts?lang=en)します。
- Bluesky: アプリにログインしてコンテンツを投稿します。
- [Twitter/X ウェブアプリ](https://twitter.com/home)。コンポーザーでは、スケジュールされたツイートを送信することもできます。
- Mastodon: インスタンスにログインしてコンポーザーフォームを使用します。[Mastodon scheduler](https://www.scheduler.mastodon.tools/) で投稿をスケジュールできます。

_2023-07-01:_ Twitter/X はプラットフォーム上のすべてのユーザーに対する[レート制限を発表](https://techcrunch.com/2023/07/01/twitter-imposes-limits-on-the-number-of-tweets-users-can-read-amid-extended-outage/)し、認証されたユーザーのみがツイートを表示できるようになりました。これによりアクセシビリティの問題が発生します: ウェブサイトに埋め込まれたツイートとプレビューは表示されますが、追加のエンゲージメントには Twitter/X アカウントとログインが必要です。Twitter/X によると、これらの制限は一時的なものでしたが、2024-11-11 時点でログイン要件はまだあります。_社内で Twitter/X の URL を共有する際は、誰もがコンテンツにアクセスし貢献できるよう、必ずスクリーンショット/テキストコピーを作成してください。_

### コンテンツソース

#### ニュースレター

- [GitLab Community newsletter](https://about.gitlab.com/community/newsletter/) (GitLab、DevOps、Cloud)
- [CloudSecList](https://cloudseclist.com/) (Cloud、Security)
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) (大手テック企業と急成長スタートアップ - 有料サブスクリプションが必要、@dnsmichi に問い合わせてください)
- [Last week in AWS](https://www.lastweekinaws.com/) (Cloud)
- [The New Stack](https://thenewstack.io/newsletter/) (Cloud Native、DevOps)
- [allesnurgegloud.com](https://allesnurgecloud.com/) (Cloud、ドイツ語)

#### コミュニティプラットフォーム

- [GitLab Forum](https://forum.gitlab.com/) - [ハンドブック](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Hacker News](https://news.ycombinator.com/)
  - 検索例: [Rust](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=rust&sort=byDate&type=story)
  - Slack: [#hn-mention](https://gitlab.slack.com/archives/CBL93C22D) (内部)
- ブログとニュース
  - [InfoQ](https://www.infoq.com/)
  - [The New Stack](https://thenewstack.io/)
  - [GitLab blog](https://about.gitlab.com/blog/)

#### その他のコンテンツソース

- GitLab Slack (内部): [#external-comms](https://gitlab.slack.com/archives/CB274TZRR)、[#newswire](https://gitlab.slack.com/archives/CERAPFN7R)、[#competition](https://gitlab.slack.com/archives/C1BBL1V3K)、[#ceo](https://gitlab.slack.com/archives/C3MAZRM8W)

## 分析

私たちの方法とツールについては、[Content Effectiveness](/handbook/marketing/developer-relations/content-effectiveness/) を参照してください。

## ソートリーダーシップ戦略

この戦略は、インプレッションを増幅し、ソートリーダーシップを構築するのに役立ちます。

- よりアクティブなフォロワーを引き付け、それによってインプレッション数とエンゲージメントを向上させます。
  - LinkedIn ではユーザーがあなたをフォローでき、すべての招待を受け入れる必要はありません。ビジネスネットワークを拡大する予定なら、プライベート E メール/電話などのプロフィール詳細が誰とも共有されないようにします。
- ユーザーを助け、教育する
- プロフィールの統計を分析する
  - 最も多いインプレッション、トップメディアのツイート、最もエンゲージメントの高いツイートの理由
- 興味深いストーリーを共有するユーザーをフォローする
  - 彼らもフォローバックする可能性があり、フォロワー数が増えます。
- コメント付きでリツイートし、自分の考えや楽しい絵文字を追加する。
  - 「通常の」リツイートと混ぜます。
- ツイートに取り組み、頻繁にいいねをし、返信を追加してディスカッションに参加する。
  - 必要なときはいつでも `Thanks for sharing :emoji:` と言います
  - ポジティブなバイブスを共有します
  - [チームメンバーソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/)に従います
- 批判に耳を傾け、ヘイトスピーチは無視する。
- GitLab の競合他社を批判しない。
  - 代わりに、彼らのコミュニティに取り組み、改善方法を学びます。
- フィードバックを製品とエンジニアリングチームにフィードバックする。
- ライブストリーミングやコミュニティコーヒーチャットで新しいアイデアを採用する。
  - コミュニティメンバーをディスカッションに巻き込みます。

例: Chromium ビルド時間の議論が月曜日に [GitLab セルフマネージドとオートスケーリングランナー](https://twitter.com/dnsmichi/status/1351241954349223944)につながりました。水曜日には、[#everyonecancontribute cafe](https://www.youtube.com/watch?v=isKaBJ4VT24) で [YouTube のライブ](https://twitter.com/dnsmichi/status/1351944765697363974)で試すことを決定しました。Max は後で[ブログ記事](https://web.archive.org/web/20240211154203/https://fotoallerlei.com/blog/2020/autoscaling-gitlab-runners-on-hetzner-cloud/)を書きました。

### ソーシャルプロフィールの構築

- 個人的なメモを追加し、ユーザーがあなたの生活への小さな窓を見られるようにします。食べ物、レジャー活動、または風変わりな習慣など。
- `#allremote` と `#remotework` で印象や考えを共有します
- 日々の仕事について定期的にツイートします。ハッシュタグ `#LifeAtGitLab` を使ってインサイトや楽しい瞬間を共有します。
- 別のステージ/グループからの優れた GitLab 機能を選び、それについて投稿します (ブログ記事、スクリーンショットなど)。
  - ツイート/LinkedIn の URL をリンクして Slack で称賛を共有します。
- テックストーリーに関連するアニメーション GIF を使って、面白いものを投稿します。見て笑えるようなものです。

ブランドアカウントで共有したい興味深いものを見つけたら、[#social_media_action](https://gitlab.slack.com/archives/C01AZ9C8Z4G) の Slack で共有し、自分でもリツイートしてください。

## ソーシャルキャンペーン

### リリースエバンジェリズム

[GitLab リリース](https://about.gitlab.com/releases/)は毎月多くの価値を追加します。開発者として、ユースケースや特に解決するワークフローの改善について知っているはずです。この知識を使って、この新機能が **なぜ** 役立つかを説明してください。

[製品キックオフ](https://about.gitlab.com/direction/kickoff/)は、計画された機能のインサイトを提供します。私たちは野心的に計画しているため、すべてが計画通りにリリースされる保証はありません。したがって、リリースエバンジェリズムキャンペーンは[リリース日](/handbook/engineering/releases/)前後に短い予告で行う必要があります。

> **ヒント**: GitLab チームメンバーは [#release-post](https://gitlab.slack.com/archives/C3TRESYPJ) Slack チャンネルにアクセスして、月次リリースブログ記事の更新を確認できます。
> 広範なコミュニティメンバーは、`gitlab-com/www-gitlab-com リポジトリ`で[リリース投稿 MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=release+post)を確認するか、[DE-Release-Evangelism](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?sort=updated_desc&state=opened&label_name[]=DE-Type::Evangelist) ラベルが付いたデベロッパーアドボケイトの Issue をフォローできます。

ワークフロー:

- [ワークフローハンドブック](/handbook/marketing/developer-relations/developer-advocacy/workflow/)からリンクされたリリースエバンジェリズム用の会計年度エピックを開きます。
- デベロッパーアドボケイトはリリースブログ記事のドラフトをレビューします。
  - レビューアプリを使用します。
  - リリース日前にマージリクエストにフィードバックや提案を追加します。
  - リリースエバンジェリズムエピックにソーシャルテキスト例とともに興味深い項目を追加します。
- デベロッパーアドボケイトはリリース日にお気に入りの機能を共有および/またはスケジュールします。
  - リリースエバンジェリズムインプレッションを追跡するために、キャンペーンマネージャーからショート URL を使用します。
  - リリースブログ記事から既存のメディア (画像、ビデオ) を使用するか、新しいスクリーンショット/ビデオを作成します。
  - すでにリリースされている場合は、ドキュメントまたはリリース投稿のアンカーへのリンクを追加します。**レビューアプリへのリンクを絶対に貼らないでください。**

ヒント:

- リリース前後 1 週間にわたって 1-2 回の共有
  - PTO 中の場合は、後で取り組みます。自分の余暇に共有をスケジュールしないでください。
- メッセージ形式: `Problem? -> Solution`
- 絵文字と CTA URL を追加します。
- アニメーション GIF やビデオは、人々が「ドゥームスクロール」を止めるのに役立ちます。
- PT と CEST の時間帯 (PT 9-11am) をターゲットにします

KPI:

- インプレッションとエンゲージメント

#### リリース投稿の共有

[ソーシャルカードバリデーター](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators)を使って、リリースブログ記事のソーシャルプレビューを検証します。プレビューが正しくレンダリングされない、または読者からの注目をさらに必要とする状況があるかもしれません。退屈な解決策として、ブラウザのサイズを変更し、機能をリストするサブタイトルを含むヘッダーから[スクリーンショットを撮り](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)、画像をソーシャル共有に添付します。15.1 の例: [Twitter](https://twitter.com/dnsmichi/status/1539646159500853248)、[LinkeDIn](https://www.linkedin.com/posts/dnsmichi_it-is-the-22nd-of-the-month-gitlab-activity-6945411563717574656-ZZdr?utm_source=linkedin_share&utm_medium=member_desktop_web)

#### リリースエバンジェリズム Notable Contributor

毎月のリリース投稿では、コミュニティ貢献者に [Notable Contributor](/handbook/marketing/blog/release-posts/#notable-contributor) を授与します。デベロッパーアドボケイトからの個人的なシャウトアウトは、コミュニティエンゲージメントに役立ち、可視性を高めて、誰もが貢献したいと思うようにするのに役立ちます。

ワークフロー:

- リリースブログ記事を開きます
- Notable Contributor セクションから[スクリーンショットを作成](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos)します
- 280 文字でソーシャル共有を準備します
  - 機能の貢献に基づいてパーソナライズされたメッセージを使用します
  - GitLab プロフィールにリストされているソーシャルタグ (Twitter、LinkedIn) を使って Notable Contributor をタグ付けします
  - `#EveryoneCanContribute` ハッシュタグを追加します
  - URL に `/#notable-contributor` アンカー付きでリリースブログ記事を追加します
  - [14.9、LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) の例: `Shoutout to Timo Furrer for becoming the GitLab 14.9 MVP 🎉 Your work on the #Terraform provider, automating all things GitLab, is invaluable. Thanks for all your contributions! 💜 🦊 #EveryoneCanContribute https://about.gitlab.com/releases/2022/03/22/gitlab-14-9-released/#mvp`
- Twitter と LinkedIn に Notable Contributor 共有を投稿します
  - リリースエバンジェリズム Issue に URL を追加します
- [#ceo Slack チャンネル](https://gitlab.slack.com/archives/C3MAZRM8W)で CEO に Notable Contributor の共有に取り組むよう依頼します
  - 提案されるアクション: 再共有/いいね、貢献に感謝するコメントを追加。
  - 提案されたテキストの効率的なコピー/ペーストのために、コメントテキストのみを含む Slack スレッドにコメントを追加します。
  - 共有のコメントとエンゲージメントメトリクスを確認します

#### リリースエバンジェリズムの例

GitLab 14 のハイパフォーマンス共有例:

- 14.9: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) の Notable Contributor (3,000 以上のビュー、60 以上のリアクション)
- 14.8: [Twitter](https://twitter.com/dnsmichi/status/1496140144067465227) の Notable Contributor (8,000 インプレッション、150 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-devops-activity-6901905241671835648-X4Vk) (2,500 ビュー、32 リアクション)
- 14.7: [Twitter](https://twitter.com/dnsmichi/status/1484898545849315333) の Notable Contributor (18,000 インプレッション、600 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-community-devops-activity-6890664006277754880-OCJ5) (7,500 ビュー、150 リアクション)
- 14.6: Issue の Markdown タイトルレンダリング [LinkedIn](https://www.linkedin.com/posts/dnsmichi_yesssss-gitlab-146-allows-to-render-markdown-activity-6879493371191156736-RHCu) (3,000 ビュー、62 リアクション)
- 14.6: [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6879464875018465280-skt5) の Notable Contributor (1,500 ビュー、30 リアクション)
- 14.5: IaC セキュリティスキャン [LinkedIn](https://www.linkedin.com/posts/dnsmichi_security-infrastructureascode-kics-activity-6870082879037173761-kyaQ) (2,300 ビュー、28 リアクション)
- 14.5: CI/CD の exists 付き条件付き includes [Twitter](https://twitter.com/dnsmichi/status/1464279272214958095) (12,000 インプレッション、600 エンゲージメント)
- 14.3: CI/CD の条件付き includes [Twitter](https://twitter.com/dnsmichi/status/1440690461673340933) (21,000 インプレッション、1,800 エンゲージメント)
- 14.2: ステージレス CI/CD パイプライン [Twitter](https://twitter.com/dnsmichi/status/1429475480030351364) (55,000 インプレッション、1,900 エンゲージメント) と [LinkedIn](https://www.linkedin.com/posts/dnsmichi_async-cicd-pipelines-with-needs-as-job-activity-6835241415748939776-I6kI) (9,000 ビュー、127 リアクション)
- 14.2: Gitpod での MR オープン Notable Contributor [Twitter](https://twitter.com/dnsmichi/status/1429469773058936841) (43,000 インプレッション、300 エンゲージメント) [RT-引用ツイート](https://twitter.com/ludmann/status/1429735681513951235)
- 14.2: ライブ Markdown プレビュー [Twitter](https://twitter.com/dnsmichi/status/1429463680182276100) (7,000 インプレッション、300 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_wohooooooo-live-markdown-preview-while-typing-activity-6835229767072014336-sDCg) (5,000 ビュー、62 リアクション)
- 14.2: CI/CD include 文をパラメータ化 [Twitter](https://twitter.com/dnsmichi/status/1429473222098100233) (8,000 インプレッション、400 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_you-can-parametrize-cicd-include-statements-activity-6835239058843688960-Xc6v) (800 ビュー、13 リアクション)
- 14.2 @gitlab で @Jira issue から直接ブランチを作成?! Yes please [Twitter](https://twitter.com/olearycrew/status/1429899257700618249) (15,000 インプレッション、900 エンゲージメント)
- 14.2 GitLab プロフィールに代名詞と名前の発音が追加 [Twitter](https://twitter.com/olearycrew/status/1429459101294157829) (5,000 インプレッション、150 エンゲージメント)
- 14.1: MR の status checks 用の外部 API [Twitter](https://twitter.com/dnsmichi/status/1418271636722274307) (8,000 インプレッション、500 エンゲージメント)
- 14.1: Helm Charts リポジトリ [LinkedIn](https://www.linkedin.com/posts/dnsmichi_cloudnative-helm-activity-6823949221377388544-9spE) (1,100 ビュー、17 リアクション)
- 14.1: Kubernetes クラスタイメージスキャン [LinkedIn](https://www.linkedin.com/posts/dnsmichi_kubernetes-activity-6823916460750974976-FJEc) (2,500 ビュー、27 リアクション)
- 14.0: パイプラインエディタ [Twitter](https://twitter.com/dnsmichi/status/1407359717282828298) (38,000 インプレッション、1,400 エンゲージメント)
- 14.0: GitLab のコンテナスキャンが @AquaSecTeam の Trivy を使用 [Twitter](https://twitter.com/olearycrew/status/1407358974601707520) (7,000 インプレッション、100 エンゲージメント)
- 14.0: Terraform Module Registry の導入 [Twitter](https://twitter.com/sarki247/status/1407995667121901568) (4,200 インプレッション、55 エンゲージメント)
- 14.0: Helm 3 を使用したクラスタ管理プロジェクトテンプレート [Twitter](https://twitter.com/sarki247/status/1408056830551601159) (2,000 インプレッション、64 エンゲージメント)

過去の例:

- [13.12: 条件に基づく動的 CI/CD 変数 (Twitter)](https://twitter.com/dnsmichi/status/1396129739622998022) (23,000 インプレッション、2,300 エンゲージメント)
- [13.11: 13.11 をハイライトし 13.12 をティーザーするツイートストーム](https://twitter.com/dnsmichi/status/1395686623132758017) (32,000 インプレッション)
- [13.10: ネスト化された CI/CD 変数 (Twitter)](https://twitter.com/dnsmichi/status/1383014333500813322) (18,000 インプレッション、1,100 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-1310-allows-to-nest-cicd-variables-activity-6787693633425424384-WelD) (2,300 ビュー、35 リアクション)
- [13.10: チャイルドパイプライントリガーでの並列 CI/CD ジョブ実行 (Twitter)](https://twitter.com/dnsmichi/status/1382351735960797184) (13,000 インプレッション、700 エンゲージメント) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_parallel-cicd-job-execution-in-gitlab-improves-activity-6788117887266652160-hNIV) (1,100 ビュー、25 リアクション)
- [13.9: 拡張された CI/CD 設定 (Twitter)](https://twitter.com/dnsmichi/status/1363879804785803268) (5,000 インプレッション、400 エンゲージメント)
- [13.9: .NET 5.0 での SAST](https://www.linkedin.com/posts/dnsmichi_gitlab-dotnet-activity-6772576735876714496-noR_) (1,600 ビュー、43 リアクション)
- [13.8: CI パイプラインエディタ (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_best-release-ever-gitlab-inc138-is-here-activity-6758427487870451712-TttR) (5,000 ビュー、10 コメント、316 リアクション、15 リシェア)
- [13.8: MR ウィジェットでの CI/CD ジョブアーティファクトのダウンロード (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_gitlab-activity-6758714643964805120-9Yyd) (800 ビュー、14 リアクション)
- [13.7: マージリクエストレビュアー (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_gitlab-devops-productivity-activity-6756907989321433088-TRW9) (500 ビュー、16 リアクション)
- [13.7: CI/CD ジョブログでレンダリングされた URL (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6723982784492273664-cwg0) (4,800 ビュー、350 リアクション、12 コメント)
- [13.6: VS Code GitLab ワークフロー (Twitter)](https://twitter.com/dnsmichi/status/1336362663107063808) (16,000 インプレッション、700 エンゲージメント)
- [13.5: グループ Wiki (Twitter)](https://twitter.com/dnsmichi/status/1319656105249820672) (18,000 インプレッション、600 エンゲージメント)
- [13.4: Pipeline Efficiency ドキュメント (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_on-a-personal-note-my-first-larger-contribution-activity-6714235003447853056-Kkv4) (2,100 ビュー、49 リアクション)
- [13.3: KubeCon Kubernetes ティーザー](https://twitter.com/dnsmichi/status/1296051268448915456) (18,000 インプレッション、500 エンゲージメント)
- [13.3: 並列 CI/CD ジョブ実行のマトリックスビルド (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_gitlab-development-cicd-activity-6702933595721351168-c-nV) (2,400 ビュー、49 リアクション)
- [13.1: 個別の CI/CD ジョブアーティファクトレポート (LinkedIn)](https://www.linkedin.com/posts/dnsmichi_gitlab-cicd-development-activity-6683033972479451136-VNVL) (700 ビュー、16 リアクション)

#### 広範なコミュニティの参加が奨励されます

- [Discord](https://discord.gg/gitlab) の GitLab heroes に、お気に入りの今後の機能をソーシャルで共有するよう依頼します。
- このハンドブック URL をヒントとベストプラクティスとして含めて、レビューアプリ付きのリリース MR を共有します。

### リリース投稿の機能をレビュー

デベロッパーアドボケイトはエンドユーザーの視点を取り、毎月 18 日頃のリリース前にリリースブログ記事の項目をレビューするのを助けます。レビューには以下が含まれます:

- 機能の説明と、解決されている問題/ユースケースの明確化。
- 機能をプライマリに昇格させることを提案。
- 大きな影響や欠落している追加が見られる場合、Changelog から機能を追加。

最初のパイロット実験は、[GitLab 14.2 の 2021 年 8 月](https://gitlab.com/gitlab-org/verify-stage/-/issues/97#note_664350725)に [Verify product group](/handbook/product/categories/#verify-stage) と確立されました。DRI は @jreporter (Group Manager、Product) と @dnsmichi (DE stable counterpart) でした。

### 製品フィードバック

ユーザーリサーチキャンペーンとプロジェクト Issue でのフィードバックの次に、ソーシャルメディアでフィードバックや興味深いアイデアをよく見かけます。場合によっては、ユーザーがブランドアカウント `@gitlab` をタグ付けし、別のシナリオでは `gitlab` を検索して発見します。

これを「あなたが追加できる機能が 1 つあれば、それは何ですか?」のような直接的な質問に移すことで、ステークホルダーを特定し、より直接的なフィードバックループを促すのに役立ちます。

この取り組みには、製品とエンジニアリング、ソーシャル、DE チーム間のクロスチームコラボレーションが必要です。割り当てられた DE DRI は [Michael Friedrich](https://gitlab.com/dnsmichi) です。

ワークフロー:

- 新しい DE リクエスト Issue を作成
- トピック/スコープを定義
- 最大 280 文字でソーシャル用メッセージを提案
- ソーシャル共有をスケジュールし文書化
- ソーシャル共有のレスポンスをモニタリング
- 特定のレスポンスを Slack の #product に移動

第 2 イテレーション: これをリクエストフォーム付きのセルフサービスにし、Slack または同様の場所での自動レスポンス収集/更新を行います。

KPI:

- エンゲージメント数
- 更新/作成された Issue

### チームエバンジェリズム

ソーシャル共有を製品チャンネルに移動します。良いフィードバックでも、追加の専門家が応答するために必要なものでも構いません。GitLab チームメンバーをタグ付けし、会話から利益を得られる場合はソーシャルメディアで応答/議論するよう促します。激しい議論の場合は、ソーシャルメディアの DRI の小さなグループ内に留まります。

着信質問やより多くの専門家を巻き込む場合、デベロッパーアドボケイトは Slack の [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) で支援できます。

#### リリース管理

[GitLab 12.9](https://about.gitlab.com/releases/2020/03/22/gitlab-12-9-released/) のツイート例:

- 素敵なタイトルを選び、新しいリリースを作成するよう全員に促します: `Have you created your first release through the in @gitlab yet? Let's do this!`
- デモ環境に移動し、ガイダンスステップを含む 1-4 枚のスクリーンショットを作成します (ミニチュートリアルにします)
- リリースブログ投稿への URL を含めます
- ユーザー名の前に @ を付けて @gitlab をメンションします
- ハッシュタグ `#gitlab #releasemanagement` を使用します

#### Package

[レジストリのオープンソース化](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/)のツイート例:

- ユーザーがユースケースを解決するよう促すクールなタイトルを選びます: `Unstable npm mirrors no more: @gitlab got you covered - the NPM registry will be open sourced.`
- デモ環境に移動し、ガイダンスステップを含む 1-4 枚のスクリーンショットを作成します (ミニチュートリアルにします)
- リリースブログ投稿への URL を含めます
- ユーザー名の前に @ を付けて @gitlab をメンションします
- ハッシュタグを使用します: `#gitlab #packages #registry`
