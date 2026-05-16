---
title: "デベロッパーリレーションズ - コンテンツ効果測定"
description: "デベロッパーリレーションズチームが作成するコンテンツの効果を測定する方法について。"
upstream_path: /handbook/marketing/developer-relations/content-effectiveness/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-27T18:13:57+01:00"
---

## クイックリンク

- Tableau の [Marketing Influenced Pipeline ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/MarketingInfluencedPipeline/MarketingInfluencedPipelineReview?:iid=3)
- Tableau の [Marketing Campaigns ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1)
- [Looker レポート](https://lookerstudio.google.com/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_k19k34iwad)
  - [多言語 YouTube 視聴レポート](https://lookerstudio.google.com/u/0/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_zzca42mped)
- [コンテンツ資産インベントリ](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0)
- [Youtube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets) スクリプト
- [CommunityApps](https://campaign-manager.gitlab.com/)（Campaign Manager）
- [DevRel-Influenced Epic ボード](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epic_boards/1056370?label_name[]=DevRel-Influenced)

## コンテンツ効果測定

デベロッパーリレーションズチームは、動画、ブログ記事、カンファレンス講演、デモなど、さまざまなトピック・形式でコンテンツを制作しています。このハンドブックページでは、コンテンツの効果を測定する方法、使用しているツール、そしてそれらがどのように連携するかについて詳しく説明します。まず、各コンポーネントを見ていきましょう。

### コンテンツ効果の測定方法

デベロッパーリレーションズチームにとって、コンテンツ効果の重要な指標は、私たちが作成するコンテンツや貢献するキャンペーンが収益にどう影響したかです。これは、私たちが作成するすべてのコンテンツアイテムが、GitLab ユーザーや顧客の体験に影響を与えるようにすることで実現されます。インパクトは、コミュニティに耳を傾け、関連性のあるコールトゥアクションを伴って、コミュニティのニーズに応えるコンテンツを作成することで達成されます。また、他のチームと協力してコンテンツやソートリーダーシップを提供することで、ユーザー体験にも影響を与えます。

#### 測定するメトリクス

- ブログビュー: チームが GitLab ブログに公開したブログ記事から生成されたインプレッションです。
- 動画ビュー: 動画は YouTube の[公式](https://www.youtube.com/gitlab)および [GitLab Unfiltered](https://youtube.com/gitlabunfiltered) チャンネルにアップロードされます。関連する UTM コード付きの短縮リンクも含みます。
- キャンペーン: デベロッパーリレーションズチームは、外部メディアで共有するコンテンツやアクティビティとのエンゲージメントを追跡するために、`devrel` UTM キャンペーン名を使用します。
- 影響を与えたキャンペーン: 他のマーケティングチームが所有するキャンペーンで、私たちが貢献したものです。私たちの影響の結果は、[Marketing Campaigns ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1) と [Marketing Influenced Pipeline ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/MarketingInfluencedPipeline/MarketingInfluencedPipelineReview?:iid=3) で追跡します。

すべての要素がどのように連携しているかは、こちらの[概要動画](https://drive.google.com/file/d/1s0HIm64oY27ZIbxsUv0cW0MyWhKoQaQA/view?usp=drive_link)（社内向け）でご確認いただけます。

![DevAdvocacy メトリクスデータパイプライン](/images/handbook/marketing/developer-relations/DevAdvocacy-Metrics-Pipeline.png)

#### すべてはキャンペーン

コンテンツの効果を測定するうえで重要なのは、エンゲージメントが計測可能であることです。これは、UTM キャンペーンと Salesforce キャンペーンを伴うコールトゥアクション（CTA）を使用することで実現できます。サードパーティブログ、YouTube、フォーラム、講演など、外部チャネルで公開するコンテンツには UTM キャンペーンを使用します。GitLab ブログ、ウェブサイト、ドキュメント、ハンドブックなどの GitLab チャネルでは、Campaign Manager や他の URL 短縮ツールで短縮リンクを作成した場合でも、UTM キャンペーンは使用しません。

Marketing Campaigns ダッシュボードは `utm_budget` を使用してキャンペーンを追跡し、それがタッチポイント、リード、MQL（適格リード）、最終的には ARR にどうつながるかを追跡します。そのため、CTA に正しい `utm_budget` を使用することが非常に重要です。[CommunityApps Campaign Manager](https://campaign-manager.gitlab.com/) を使用すると、リンクを適切なチームの下に配置することで、適切な `utm_budget` が自動的に追加されます。デベロッパーリレーションズチームのページには、[こちらのリンク](https://campaign-manager.gitlab.com/teams/view/2)からアクセスできます。

私たちが影響を与えるキャンペーンについては、UTM 名または Salesforce キャンペーン名を確認し、DevRel コンテンツ資産インベントリの [devrel_influenced_campaigns](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=1201530981) シートを更新することが重要です。このステップを行わないと、Marketing Campaigns ダッシュボードはそのキャンペーンをデベロッパーリレーションズの影響を受けたものとして含めません。チームが影響を与えるキャンペーンの追跡を容易にするため、[gitlab-com](https://gitlab.com/gitlab-com) GitLab グループ全体で `DevRel-Influenced` ラベルを使用しています。

### デベロッパーリレーションズが影響を与えたキャンペーン

デベロッパーリレーションズチームは、GitLab 全体のさまざまなキャンペーンに貢献しています。これらの貢献の影響を測定するために、[コンテンツ資産インベントリ](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=1201530981) の `devrel_influenced_campaigns` シートで DevRel が影響を与えたキャンペーンを追跡しています。このシートは、[Marketing Campaigns ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1) で「DevRel」が影響を与えたキャンペーンを表示するためのフィルターのデータソースとして機能します。

デベロッパーリレーションズチームに該当するフィルターは2つあります: Developer Relations 予算保有者フィルターと、DevRel Influence Type フィルターです。

#### Developer Relations Integrated 予算保有者フィルター

![budget_holder_filter](/images/handbook/marketing/developer-relations/budget_holder_filter.png)

「Integrated Budget Holder」フィルターの「Developer Relations」オプションは、`utm_budget` でチームが `devrel`、または古いキャンペーンの場合は `cmty` を使用して生成したキャンペーンタッチポイントのデータを表示します。これらは私たち自身が共有するリンク（主に CommunityApps を使用）にのみ適用されます。CommunityApps を使用して DevRel チーム配下で短縮リンクを作成すると、トラッキングが有効になっているときに `utm_budget` が自動的に追加されます。

#### DevRel Influence Type フィルター

![devrel_influence_type](/images/handbook/marketing/developer-relations/devrel_influence_type.png)

「DevRel Influence Type」フィルターにアクセスするには、Marketing Campaigns ダッシュボードの「Campaign Drill Down」タブにある「Advanced filters」をクリックします。DevRel Influence Type フィルターは、`devrel` UTM キャンペーン予算コードを持つものを含む、デベロッパーリレーションズチームが影響を与えたすべてのキャンペーンを表示します。「No DevRel Influence」チェックボックスをオフにして、ダッシュボードをフィルターします。特定の影響タイプでさらにフィルターすることもできます。「Owned」フィルターは、`devrel` 予算保有者からのタッチポイントデータです。

### コンテンツ資産インベントリ

コンテンツの効果追跡における共通のボトルネックは、コンテンツが関連メタデータでリストアップされ、インデックス化されているソースを持つことです。ブログ記事のような個別のコンテンツタイプは、公開された媒体から取得できますが、特定のチームやグループに対して自動的にフィルタリングするのは困難な場合が多いです。回避策として、すべてのコンテンツを集約したスプレッドシートを用意し、それをさらに活用します。これがコンテンツ資産インベントリ[スプレッドシート](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0) が果たす役割です。私たちの Looker Studio と Tableau のダッシュボードは、この資産インベントリをデータソースとして使用しています。スプレッドシートのシートは次のとおりです:

- `youtube_views_gitlab`: GitLab が所有する YouTube チャンネルで公開された動画。
- `devrel_blog_posts_views`: デベロッパーリレーションズチームのメンバーが GitLab ブログで公開したブログ記事。
- `devrel_influenced_campaigns`: デベロッパーリレーションズチームのメンバーが影響を与えたキャンペーン。
- `External Videos`: デベロッパーリレーションズチームのメンバーが作成、または協力して作成し、GitLab が所有しない YouTube チャンネルや YouTube 以外のプラットフォームで公開された動画。

### YouTube2Sheets

[YouTube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets) は、UTC の正午と深夜の1日2回実行される Ruby スクリプトです。[JSON 設定ファイル](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads) で提供される YouTube プレイリストのリストを取得し、YouTube API に接続して、プレイリスト内のすべての動画とそのメタデータを取得し、各プレイリストに指定された Google シートに保存します。

このスクリプトの背景にある考えは、YouTube に公開された動画を追跡するための半自動化された方法を作成することです。これが機能するには、動画がプレイリストに整理されている必要があり、プレイリストは [JSON 設定ファイル](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads) に追加する必要があります。ファイルの形式は次のとおりです:

```json
[
    {
        "playlist_id":"PL05xxxxx", //The ID of the YouTube playlist to fetch videos from.
        "spreadsheet_id":"1WLuayxxxx", //The ID of the Google Spreadsheet the meta data of videos will be stored.
        "sheet_name":"Sheet1", //The name of the the Sheet in the Google Spreadsheet where the video data should be stored.
        "task":"Developer Relations - DA", // An name for the list, useful in cases where the spreadsheet is used for multiple playlists.
        "description":"Developer Advocacy Team"
    }
]
```

動画のメタデータは、以下の形式でスプレッドシートに保存されます:

|      |   A   |   B   |   C   |   D   |   E   |   F   |   G   |   H   |
|------|-------|-------|-------|-------|-------|-------|-------|-------|
| 1 | Video ID | Task/Team Name  | Channel Title  | Playlist Title |  Video URL  | Video Title  | Publication Date | GitLab Publication Quarter |
| 2 | _OSDh_L5M_E |    Developer Relations - DA | GitLab Unfiltered |    Developer Advocacy Team | https://www.youtube.com/watch?v=_OSDh_L5M_E     |  5. #everyonecancontribute cafe: HashiCorp Waypoint | 2020-05-27T22:43:09.000Z | FY21Q2 |

スプレッドシートのデータは、さらなる自動化やプロセスのためにそのまま使用できます。デベロッパーリレーションズチームの場合、データはコンテンツ資産インベントリ [スプレッドシート](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0) の `youtube_views_gitlab` シートに供給されます。

### Looker レポート

![looker-report](/images/handbook/marketing/developer-relations/looker-report.png)

[Looker Studio レポート](https://lookerstudio.google.com/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_k19k34iwad) は、Tableau に移行される前の迅速な最初のイテレーションとして作成されました。レポートを構築するために使用されるデータソースは次のとおりです:

- Google Analytics 4 API
- YouTube API
- コンテンツインベントリの `youtube_views_gitlab` シート
- `devrel_blog_posts_views` シート

これら4つのデータソースを使用して、`DevRel Filtered Youtube Data Source`、`DevRel Filtered Youtube (Official Channel) Data Source`、`DevRel Filtered Blog` の3つのブレンドが作成されました。[Looker Studio のブレンド](https://support.google.com/looker-studio/topic/9061419?hl=en&ref_topic=10388842&sjid=10095352649474076992-EU) は、同じビジュアライゼーション内で複数のデータソースを組み合わせることを可能にします。

`DevRel Filtered Youtube Data Source` と `DevRel Filtered Youtube (Official Channel) Data Source` は、API からの `External Video ID` とシートの `video_id` 列を使用して、`youtube_views_gitlab` シートと YouTube API のデータを内部結合（Inner join）でブレンドします。`DevRel Filtered Youtube (Official Channel)` データソースは、John Coghlan の Google アカウントを使用して公式チャンネルに、`DevRel Filtered Youtube Data Source` は同じアカウントで Unfiltered チャンネルに認証されています。`DevRel Filtered Blog` は、`devrel_blog_posts_views` と Google Analytics（GA4）API のデータをブレンドします。

ブレンドの例は次のとおりです:

![looker-blend](/images/handbook/marketing/developer-relations/looker-blend.png)

#### 多言語 YouTube 視聴レポート

GitLab.com で公開される動画の一部は、スペイン語やポルトガル語など他の言語で吹き替えられています。英語版に対するパフォーマンスを理解するために、Looker Studio に [多言語 YouTube 視聴レポート](https://lookerstudio.google.com/u/0/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_zzca42mped) を用意しています。

![looker_studio_multilingual_report](/images/handbook/marketing/developer-relations/looker_studio_multilingual_report.png)

このレポートは、コンテンツインベントリシートの `youtube_views_gitlab` シートに `video_topic` 列を導入することで使用しています。この列は、同じ内容で異なる言語の動画セットをグループ化するために使用されます。たとえば、下の画像では、リストされた動画の英語版、スペイン語版、ポルトガル語版に同じ video_topic が指定されているのがわかります。このプロセスは手動です。動画が [YouTube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/) によって同期されたら、シートを更新し、多言語レポートに含めたい動画の `video_topics` を入力する必要があります。

![multilingual_reports-sheet-example](/images/handbook/marketing/developer-relations/multilingual_reports-sheet-example.png)

この設定は、公式 GitLab YouTube チャンネルで公開された動画のみをサポートしています。新しい動画を公開する場合は、適切な[英語](https://www.youtube.com/playlist?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED)、[ポルトガル語](https://www.youtube.com/playlist?list=PLFGfElNsQthaRSNTv93cM57GBB1l_95Px)、[スペイン語](https://www.youtube.com/playlist?list=PLFGfElNsQthbm-EfY2AyFNr8o6qT5A2ud) のプレイリストに含めるようにしてください。新しい言語のプレイリストを作成する場合は、[Youtube2Sheets 設定ファイル](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads) にプレイリストを追加し、言語を指定してください。

## メンテナンスガイド

このセクションでは、コンテンツ効果測定ワークフローのさまざまなコンポーネントがどのように連携しているか、それらをどのようにメンテナンスするかについて説明します。

### メンテナンス

#### キャンペーン

- Campaign Manager を使用して短縮リンクまたは完全なキャンペーンリンクを生成し、キャンペーンで使用してください。
- 取り組んでいるキャンペーンの Issue または epic に `DevRel-Influenced` ラベルを追加してください。
- キャンペーンが別のチームに属する場合は、UTM または Salesforce キャンペーン名を確認し、それに応じてコンテンツインベントリの `devrel_influenced_campaigns` シートを更新してください。キャンペーン名が重複しないように注意してください。すでに存在する場合は再度追加する必要はありません。データパイプラインが壊れます。
- 非 GitLab メディアでは、できるだけキャンペーンリンクを使用することをお勧めします。

#### ブログ記事

ブログ記事が GitLab ブログに公開されたら、URL とその他の詳細を `devrel_blog_posts_views` シートに追加してください。これは、コンテンツが関連ダッシュボードに表示されるようにするための重要なステップです。

#### 動画

公式および Unfiltered チャンネルの YouTube 動画については、動画がプレイリストに整理されていることを確認し、プレイリストを YouTube to Sheets の `data_config.json file` に追加してください。DevRel コンテンツインベントリのスプレッドシート ID が使用されていることを確認してください。これはファイル内の他のプレイリストから見つけることができます。これが完了すると、YouTube2Sheets プロジェクトの[スケジュールパイプライン](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/pipeline_schedules)が実行されたときに、プレイリストの動画が `youtube_views_gitlab` シートに追加されます。

非 GitLab チャンネルや他のプラットフォームの動画については、動画の詳細を `External Videos` シートに追加してください。
