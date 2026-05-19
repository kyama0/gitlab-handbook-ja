---
title: "ActivityPub サポート"
status: proposed
creation-date: "2023-09-12"
authors: [ "@oelmekki", "@jpcyiza" ]
coach: "@tkuah"
approvers: [ "@derekferguson" ]
owning-stage: ""
participating-stages: [ "~section::dev" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/activity_pub/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## 概要 {#summary}

この提案の最終的なゴールは、GitLab に相互運用機能を組み込むことで、ある GitLab インスタンスから別のインスタンスでホストされているプロジェクトに対してマージリクエストを開けるようにし、参加意思のあるすべてのインスタンスを 1 つのグローバルネットワークに統合することです。

これを実現するため、Fediverse で使用されている w3c 標準の ActivityPub を採用することを提案します。これにより、堅牢で実戦テスト済みのプロトコルの上に構築でき、GitLab をより広いコミュニティに開くことができます。

クロスインスタンスマージリクエストの実装に着手する前に、まず小さなステップから始めて、ActivityPub に関するドメイン知識を蓄積し、より高度な機能を支える基盤アーキテクチャを構築していきたいと考えています。そのため、まずソーシャル機能の実装から始めることを提案します。これにより Fediverse 上の人々が GitLab 上のアクティビティを購読できるようになり、例えば GitLab にホストされているお気に入りのプロジェクトが新しいリリースを作成した時に、好みのソーシャルネットワーク上で通知を受け取ることができます。
おまけに、これは GitLab をよりソーシャルにし、利用者層を拡大する機会でもあります。

## 関連する技術と用語の説明

ActivityPub と Fediverse が何かを既に知っている場合は、[Motivation](#motivation) まで飛ばしてかまいません。

[Web の分散化](https://en.wikipedia.org/wiki/Decentralized_web) を推進する動きの中で、いくつかのプロジェクトが、それぞれの理想に基づいた異なるプロトコルを試みてきました。
例:

- [Secure Scuttlebutt](https://en.wikipedia.org/wiki/Secure_Scuttlebutt)（または短縮形で SSB）
- [Dat](https://en.wikipedia.org/wiki/Dat_%28software%29)
- [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System)
- [Solid](https://en.wikipedia.org/wiki/Solid_%28web_decentralization_project%29)

その中で最近勢いを得たのが [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) で、これは [Mastodon](https://en.wikipedia.org/wiki/Mastodon_%28social_network%29)（分散版 Facebook のようなものと言える）や [Lemmy](https://en.wikipedia.org/wiki/Lemmy_%28software%29)（分散版 Reddit のようなものと言える）といったアプリケーションを通じて構築された [Fediverse](https://en.wikipedia.org/wiki/Fediverse) という口語的な呼称でよく知られています。

ActivityPub には、実装者にとって魅力的で、現在の成功を説明できるいくつかの利点があります:

- **HTTP 上に構築されている**。ActivityPub を実装するために新しいソフトウェアをインストールしたり、TCP/UDP をいじる必要はありません。Web サーバーや HTTP API を提供するアプリケーション（Rails アプリケーションなど）があれば、必要なものはすべて揃っています。
- **JSON 上に構築されている**。すべての通信は基本的に JSON オブジェクトで、Web 開発者にとって既に馴染みがあるため採用が容易です。
- **W3C 標準であり、既に複数の実装が存在する**。W3C によって導かれていることは、安定性と高品質な作業の保証です。彼らは過去に HTML、CSS、その他の Web 標準への取り組みを通じて、その上に構築しても数年後に非推奨化されたり無関係になったりする恐れがないことを十分に実証してきました。

### Fediverse

Mastodon と Lemmy の背後にあるコアアイデアは Fediverse と呼ばれます。完全な分散化ではなく、これらのアプリケーションは連合（フェデレーション）に依拠しています。つまり、依然としてサーバーとクライアントが存在します。SSB、Dat、IPFS のような P2P ではなく、単一エンティティが管理する中央サーバーを持つのではなく、互いにチャットするサーバー群の銀河のような形です。

ユーザーはそれらのサーバーの 1 つ（**インスタンス** と呼ばれます）にサインアップし、その後そのインスタンス上のユーザー、または他のインスタンス上のユーザーとやり取りできます。ユーザーから見ると、自分のインスタンスだけでなくグローバルネットワークにアクセスしているように感じられます。他のインスタンスに投稿された記事を見たり、コメントしたり、いいねしたりできます。

裏で何が起きているかというと: ユーザーが返信する相手のインスタンスを、自分のインスタンスが知っています。そのインスタンスに連絡して、メッセージがあることを知らせます - SMTP に少し似ています。同様に、ユーザーがフィードを購読すると、そのインスタンスはフィードがホストされているインスタンスにこの購読を通知します。そのターゲットインスタンスは、新しいアクティビティが作成された時にメッセージを送り返します。これにより、RSS のような常時ポーリングモデルではなく、プッシュモデルが可能になります。もちろん、今述べたのはハッピーパスです。途中ではモデレーション、検証、フォールトトレランスが行われています。

### ActivityPub

Fediverse の背後にあるのは ActivityPub プロトコルです。これはできるだけ汎用的なソーシャルネットワーク実装でありつつ、拡張可能なオプションを提供しようとする HTTP API です。

基本的なアイデアは、`actor`（アクター）が `activities`（アクティビティ）を送受信するというものです。アクティビティは、明確に定義されたプロパティを持つ構造化された JSON メッセージですが、あらゆるニーズをカバーできるように拡張可能です。アクターは 4 つのエンドポイントによって定義され、これらは `application/ld+json; profile="https://www.w3.org/ns/activitystreams"` HTTP Accept ヘッダーで呼び出されます:

- `GET /inbox`: アクターが自身宛の新しいアクティビティを見つけるために使用。
- `POST /inbox`: アクター宛の新しいアクティビティをインスタンスがプッシュするために使用。
- `GET /outbox`: アクターが作成したアクティビティを誰でも読むために使用。
- `POST /outbox`: アクターが新しいアクティビティを公開するために使用。

これらの中で、Mastodon と Lemmy はフェデレーションを実装するための最低限の `POST /inbox` と `GET /outbox` のみを使用しています:

- インスタンスは inbox にアクターのための新しいアクティビティをプッシュ。
- outbox を読むことでアクターのフィードを読める。

さらに Mastodon と Lemmy は `GET /` エンドポイント（前述の Accept ヘッダー付き）も実装しています。このエンドポイントは、アクターに関する一般情報（名前、inbox と outbox の URL など）を返します。標準では必須ではありませんが、発見を容易にします。

人物がアクターの主なユースケースですが、アクターは必ずしも人物に対応するわけではありません。何でもアクターになれます: トピック、サブレディット、グループ、イベントなど。GitLab では、アクティビティ（GitLab が言う「アクティビティ」の意味で）を持つものなら何でも ActivityPub アクターになれます。これにはプロジェクト、グループ、リリースなどが含まれます。これらのより抽象的な例では、アクターはアクション可能なフィードと考えることができます。

ActivityPub 自体は、Fediverse を実装するために必要なすべてをカバーしているわけではありません。特に、以下は実装者に委ねられています:

- スパム対策の方法を見つけること。スパムは他のインスタンスを認可またはブロック（「defederation」）することで処理されます。
- 新しいインスタンスの発見。
- ネットワーク全体の検索の実行。

## 動機 {#motivation}

なぜ GitLab にとってソーシャルメディアプロトコルが有用なのでしょうか? 人々は、各ホストに登録することなく、さまざまなプロジェクト間でやり取りできる、単一のグローバル GitLab ネットワークを求めています。

これに関する非常に人気のある議論が既にいくつか行われています:

- [ActivityPub 経由でイベントを外部に共有](https://gitlab.com/gitlab-org/gitlab/-/issues/21582)
- [クロスサーバー（フェデレート）マージリクエストの実装](https://gitlab.com/gitlab-org/gitlab/-/issues/14116)
- [分散マージリクエスト](https://gitlab.com/groups/gitlab-org/-/epics/260)。

理想的なワークフローは以下の通りです:

1. Alice は好みの GitLab インスタンス（例えば `gitlab.example.org`）に登録します。
1. 彼女は特定のトピックでプロジェクトを探し、Bob のプロジェクトを見つけます。Bob は `gitlab.com` 上にいるにもかかわらず。
1. Alice は **Fork** を選択し、`gitlab.com/Bob/project.git` が `gitlab.example.org/Alice/project.git` にフォークされます。
1. 彼女は編集を行い、マージリクエストを開きます。これは `gitlab.com` の Bob のプロジェクトに表示されます。
1. Alice と Bob はそれぞれの GitLab インスタンスからマージリクエストについて議論します。
1. Bob は追加コミットを送信でき、それは Alice のインスタンスでピックアップされます。
1. Bob がマージリクエストを承認すると、彼のインスタンスは Alice のインスタンスからコードをピックアップします。

このプロセスにおいて、ActivityPub は以下に役立ちます:

- フォークが発生したことを Bob に知らせる。
- マージリクエストを Bob に送信する。
- Alice と Bob がマージリクエストを議論できるようにする。
- コードがマージされたことを Alice に知らせる。

以下のケースでは _役に立たず_、特定の実装が必要です:

- ネットワーク全体の検索の実装。
- クロスインスタンスフォークの実装。（Git のおかげで不要。）

なぜここでクロスインスタンスマージリクエストをカスタムで実装するのではなく ActivityPub を使うのでしょうか? 理由は 2 つです:

1. **標準の上に構築することで、GitLab を超えて到達できる**。上記のワークフローは GitLab のみに言及していますが、W3C 標準の上に構築することで、他のフォージも GitLab に追従でき、コード共有の巨大な Fediverse を構築できます。
1. **GitLab をよりソーシャルにする機会**。上記のワークフロー向けにアーキテクチャを準備するため、より小さなステップを取って、人々が Fediverse のソーシャルネットワークからアクティビティフィードを購読できるようにします。RSS フィードを持つものは何でも ActivityPub フィードになり得ます。Mastodon 上の人々は、お気に入りの開発者、プロジェクト、トピックを GitLab からフォローし、Mastodon 上のフィードでニュースを見ることができ、これにより GitLab へのエンゲージメントが高まることが期待されます。

### 目標 {#goals}

- ActivityPub ベースのソーシャルメディア上で興味深いイベントを共有できるようにする
- あるインスタンスから別のインスタンスへ Issue を開いて議論できるようにする
- あるインスタンスから別のインスタンスへプロジェクトをフォークできるようにする
- あるインスタンスから別のインスタンスへマージリクエストを開き、議論し、マージできるようにする
- ネットワーク全体の検索を実行できるようにする?

### 対象外 {#non-goals}

- プライベートリソースのフェデレーション
- ネットワーク全体の検索を実行できるようにする?

## 提案 {#proposal}

この実装パスのアイデアは、最も付加価値の大きい機能（クロスインスタンスマージリクエスト）への最速ルートを取るのではなく、各イテレーションで最も小さくて有用な一歩を進み、各ステップが直ちに有用なものをもたらすことを保証することです。

1. **ソーシャルフォロー向けに ActivityPub を実装**。
   これにより、Fediverse は GitLab インスタンス上のアクティビティをフォローできるようになります。
   1. プロジェクトリリースを購読するための ActivityPub。
   1. トピック内のプロジェクト作成を購読するための ActivityPub。
   1. プロジェクトアクティビティを購読するための ActivityPub。
   1. グループアクティビティを購読するための ActivityPub。
   1. ユーザーアクティビティを購読するための ActivityPub。
1. **クロスインスタンスフォークを実装** して、別のインスタンスからプロジェクトをフォークできるようにする。
1. **クロスインスタンス議論のための ActivityPub を実装** して、別のインスタンスから Issue とマージリクエストを議論できるようにする:
   1. Issue 内で。
   1. マージリクエスト内で。
1. **クロスインスタンスマージリクエスト送信のための ActivityPub を実装** して、別のインスタンスにマージリクエストを送信できるようにする。
1. **クロスインスタンス検索を実装** して、他のインスタンス上のプロジェクトを発見できるようにする。

この最後のステップを含めるべきかは議論の余地があります。
現在、ほとんどの Fediverse アプリでは、自分のインスタンスが知らないインスタンスからリソース（典型的にはフォローしたいユーザー）を表示したい場合、リソースの URL を自分のインスタンスの検索ボックスに貼り付けると、リモートリソースが取得・表示され、自分のインスタンスからアクション可能になります。最初はこれを行う予定です。

問題は: それで十分でしょうか? この UX には深刻な摩擦があり、特に Fediverse の UX パターンに慣れていないユーザー（GitLab ユーザーの大半がそうでしょう）にとってはなおさらです。一方、分散検索はそれ自体が独立したブループリントに値するほど複雑な主題です（分散プロトコルやアプリケーションが長らく取り組んできたことで、かつてほど複雑ではなくなっていますが）。

## 設計と実装の詳細 {#design-and-implementation-details}

まず、これから使用する 3 つの標準の仕様に親しんでおくのが良いでしょう:

- [ActivityPub](https://www.w3.org/TR/activitypub/) はフェデレーションを実装するために発生する HTTP リクエストを定義します。
- [ActivityStreams](https://www.w3.org/TR/activitystreams-core/) はプロトコルのユーザー間で交換される JSON メッセージのフォーマットを定義します。
- [Activity Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) はデフォルトで認識されるさまざまなメッセージを定義します。

質問があれば、または文書が読むには密度が高すぎる場合は、@oelmekki に気軽に連絡してください。

### プロダクション準備

TBC

### ソーシャルフォローの部分

この部分は、GitLab に [新しい ActivityPub アクターを追加](https://docs.gitlab.com/ee/development/activitypub/actors/index.html) できるようにする土台を整えるものです。

実装したいアクターは 5 つあります:

- 特定のプロジェクトが新しいリリースを作成した時に通知を受ける `releases` アクター
- 新しいプロジェクトがトピックに追加された時に通知を受ける `topic` アクター
- プロジェクトからのすべてのアクティビティに関する `project` アクター
- グループからのすべてのアクティビティに関する `group` アクター
- ユーザーからのすべてのアクティビティに関する `user` アクター

現時点では公開リソースのみを扱います。プライベートリソースのフェデレーションを許可することは、後で解決する難題で、可能であればの話です。

#### エンドポイント

各アクターには 3 つのエンドポイントが必要です:

- プロフィールエンドポイント。名前、説明などの基本情報、および inbox と outbox へのリンクを含む
- outbox エンドポイント。アクターの過去のアクティビティを表示できる
- inbox エンドポイント。フォローと unfollow リクエストを送信するために投稿する（その他のことは現時点では使用しない）

これらのエンドポイントを提供するコントローラーは `app/controllers/activity_pub/` にあります。この namespace を使うことに決めたのは、ActivityPub の JSON レスポンスとフロントエンド向けのものを混ぜないためであり、また後で必要となる可能性のあるさらなる namespace 化のためです。アクティビティのフォーマット方法は、ある Fediverse アプリと別のアプリ、そして後のクロスインスタンス機能で異なる可能性があるためです。また、この namespace により、すべてのエンドポイントで必要なもの（プライベートプロジェクトにアクセスできないことの保証など）を簡単に切り替えられます。

#### シリアライザー

`app/serializers/activity_pub/` のシリアライザーは私たちの実装の中核で、ActivityStreams オブジェクトを提供します。抽象クラス `ActivityPub::ActivityStreamsSerializer` は、開発者が提供したデータの検証、共通フィールドのセットアップ、ページネーションの提供といった重い処理をすべて行います。

ページネーション部分は `Gitlab::Serializer::Pagination` で行われており、オフセットページネーションを使用しています。
[keyset ページネーションを行えるようにする必要があります](https://gitlab.com/gitlab-org/gitlab/-/issues/424148)。

#### 購読

リソースへの購読は、アクターの inbox に [Follow アクティビティ](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow) を投稿することで行います。Follow アクティビティを受信すると、[Accept または Reject アクティビティを返信として生成し](https://www.w3.org/TR/activitypub/#follow-activity-inbox)、購読者の inbox に送信する必要があります。

実装の一般的なワークフローは以下の通りです:

- POST リクエストが Follow アクティビティを JSON エンコードして inbox エンドポイントに送られる
- 受信したアクティビティがサポートされているタイプでない場合（例: アクティビティに対するコメント試行）は無視する。それ以外の場合:
- 購読者のプロフィール URL を持つ `ActivityPub::Subscription` を作成する
- 購読者の inbox URL を解決するジョブをキューに入れる
  - そこで、購読者プロフィールへの HTTP リクエストを実行して inbox URL（および共有 inbox URL があればそれも）を見つける
  - その URL を購読レコードに保存する
- 購読を承認するジョブをキューに入れる
  - そこで、購読者の inbox に Accept アクティビティを投稿する HTTP リクエストを実行する
  - 購読の状態を `:accepted` に更新する

`ActivityPub::Subscription` は新しい抽象モデルで、アクターに関連するモデルがそれを継承し、それぞれが独自のテーブルを持ちます:

- ActivityPub::ReleasesSubscription、テーブル `activity_pub_releases_subscriptions`
- ActivityPub::TopicSubscription、テーブル `activity_pub_topic_subscriptions`
- ActivityPub::ProjectSubscription、テーブル `activity_pub_project_subscriptions`
- ActivityPub::GroupSubscription、テーブル `activity_pub_group_subscriptions`
- ActivityPub::UserSubscription、テーブル `activity_pub_user_subscriptions`

単一テーブルでより単純な `actor` enum を Subscription モデルに持つのではなく、複数のモデルにする理由は、それぞれに固有の関連と検証が必要だからです（`ActivityPub::ProjectSubscription` は Project に属し、`ActivityPub::UserSubscription` はそうではない）。また、将来の拡張性の余地も増えます。

#### Unfollow

以前の Follow に言及する [Undo アクティビティ](https://www.w3.org/TR/activitypub/#undo-activity-inbox) を受信した際は、データベースから購読を削除します。

アクティビティを返送する必要はないため、ここでワーカーは不要で、データベースから直接レコードを削除できます。

#### アクティビティを送信する

アクターに関連する特定のイベント（どれが該当するか?）が発生した時、購読者の inbox にアクティビティを発行するためのイベントをキューに入れる必要があります（アクティビティはアクターの outbox に表示するものと同じです）。

同じ人物に同じアクティビティを 2 回送らないようにするため、購読者リストの重複排除を行う必要があります - ただし、Follow アクティビティを受信した時点でモデルからの一意性検証で対応する方が良いでしょう。

より重要なのは、同じホスト宛のリクエストはまとめるべきだということです: 10 ユーザーが全員 `https://mastodon.social/` 上にいる場合、ユーザーごとに 1 リクエスト送信するのではなく、提供された共有 inbox に対して、全ユーザーを受信者として 1 回のリクエストを発行するべきです。

#### Webfinger

[Webfinger](https://gitlab.com/gitlab-org/gitlab/-/issues/423079)

Mastodon は [インスタンスが Webfinger プロトコルを実装することを要求します](https://docs.joinmastodon.org/spec/webfinger/)。
このプロトコルは、既知の場所にエンドポイントを追加し、リソース名のクエリと、それを任意の URL にマッピングできるようにする（つまり、基本的には発見のために使われる）ものです。Mastodon は、他の Fediverse アプリにアクター名を問い合わせて、彼らのプロフィール URL を見つけるためにこれを使います。

実は、GitLab は既に Doorkeeper を通じて Webfinger プロトコルエンドポイントを実装しています（[これがそのルートにマップされるアクションです](https://github.com/doorkeeper-gem/doorkeeper-openid_connect/blob/5987683ccc22262beb6e44c76ca4b65288d6067a/app/controllers/doorkeeper/openid_connect/discovery_controller.rb#L14-L16)）。GitLab では [JwksController で](https://gitlab.com/gitlab-org/gitlab/-/blob/efa76816bd0603ba3acdb8a0f92f54abfbf5cc02/app/controllers/jwks_controller.rb) 実装されています。

ここに非互換性はないので、このコントローラーを拡張するだけです。
ただし、もはや Jwks にのみ関連するわけではなくなるので、おそらくリネームが必要です。

ひとつの困難は、Mastodon と異なり、私たちは単にユーザーだけを扱うわけではないという点です。そのため、例えばユーザーへの問い合わせとプロジェクトへの問い合わせを区別する何かを考える必要があります。明白な方法の一つは、`user-<username>`、`project-<project_name>` のようなプレフィックスを使うことです。私はまだこの epic で多くのコードを実装しておらず、Webfinger の仕様を深く掘り下げていない遠目から熟考しているので、実際の実装に達した時にはこの所見は時代遅れかもしれません。

#### HTTP signatures

[HTTP signatures](https://gitlab.com/gitlab-org/gitlab/-/issues/423083)

Mastodon は [HTTP signatures を要求します](https://docs.joinmastodon.org/spec/security/#http)。これはまた別の標準で、スパマーが特定のサーバーを偽装しないようにするためのものです。

これは秘密鍵と公開鍵を持つ非対称暗号で、SSH や PGP のようなものです。リクエストへの署名と検証の両方を実装する必要があります。これは、後の epic でさまざまな GitLab インスタンス間の通信を実現したい時に大いに役立ちます。

### ホスト allowlist と denylist

GitLab インスタンスのオーナーが潜在的なスパムをコントロールできるよう、相互排他的な 2 つのホストリストを保持できるようにする必要があります:

- allowlist: このリストに記載されたホストとのみフェデレートできる。
- denylist: このリストに記載されたホスト以外のすべてのホストとフェデレートできる。

設定で、オーナーが allowlist と denylist を切り替えられるようにする必要があります。
最初は Rails コンソールで管理可能ですが、最終的には管理インターフェースのセクションが必要になります。

### 制限とロールアウト

機能リリース後の数ヶ月間で負荷をコントロールするため、`gitlab.com` を allowlist 使用に設定し、Fediverse サーバーを少しずつフェデレーションにロールアウトしていきます。これにより負荷の取り方を段階的に確認でき、最終的に denylist に切り替えます（注: `gitlab.com` でフェデレーションを有効化すべきかどうかについて、[いくつかの議論が進行中](https://gitlab.com/gitlab-org/gitlab/-/issues/426373#note_1584232842) です）。

また、フェデレーションが乱用されないよう、制限を実装する必要があります:

- リソースが受け取れる購読数の制限。
- 第三者サーバーが生成できる購読数の制限。

### クロスインスタンス Issue とマージリクエストの部分

ActivityPub の現場経験を得るため、ソーシャルフォロー部分が完了するまでこの部分の設計は待ちます。
