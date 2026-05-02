---
title: "ソーシャルメディアレポーティング"
description: 指標の定義、サイクル、目標
twitter_image: "/images/opengraph/handbook/social-marketing/social-handbook-reporting.png"
twitter_image_alt: "GitLab のソーシャルメディアハンドブックブランド画像"
twitter_site: "gitlab"
twitter_creator: "gitlab"
upstream_path: /handbook/marketing/integrated-marketing/digital-strategy/social-marketing/social-reporting/
upstream_sha: 45c75393c11589128fb6c8af61ce5be83a8031dd
translated_at: "2026-05-01T14:48:17Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

ブランドのオーガニックソーシャルメディア施策に関するレポーティングは、私たちが行っていることが機能しているかを判断し、オーディエンスをよりよく理解するために重要です。このページではレポーティング、特にメトリクスの定義について詳細を概説します。

</div>


## ダッシュボードとレポート

GitLab チームメンバーのみが閲覧可能

| 探しているもの                                                       | ...こちらのレポートまたはダッシュボードが役立ちます。                                                    |
|----------------------------------------------|----------------------------------------------------------------------------------------|
| 生のパフォーマンスデータを入力するシート                              | [Sisense 用 Raw metrics sheetload](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0)（ソーシャルおよびデータチームのみ閲覧可） |
| すべてのソーシャルデータの広告等価ダッシュボード                      | [目的とキャンペーン別 Social Ad Equivalency Dashboard](https://docs.google.com/spreadsheets/d/1sZwoUwnk5BXHrmRkAPkipgtMJZ8_stS-hMagTujym0k/edit?usp=sharing)                              |

## FY23 のフォーカス

[FY23 の OKR Epic はこちらから確認できます](https://gitlab.com/groups/gitlab-com/marketing/corporate_marketing/-/epics/184)

### FY23 におけるレポーティングの変更点

- 優先度に基づいた指標の並び替え
  - エンゲージメント、エンゲージメント率、クリック数（重要度の高い 3 つの指標）
  - 次に
  - インプレッション、フォロワー、ソーシャル広告価値（重要度の低い指標）
- 以前は CPC 広告価値は所有リンクのみで測定していましたが、FY23 ではすべてのリンクを 1 つの指標として統合しました。これは、ソーシャルチャンネル上ではすべてのリンクが同等に扱われるためです（所有リンクとサードパーティリンクは区別されず、パフォーマンスはパフォーマンスです）。リンククリック広告価値のレポーティング上の値は徐々に上昇していくと予想されます。
- 以前は CPM はリンクなしの投稿のみで測定していましたが、インプレッションはインプレッションとして測定されるため、FY23 ではリンクなし投稿に限らずすべてのインプレッションをカウントします（再度、パフォーマンスはパフォーマンスです）。FY23 では CPM 広告価値が増加することが予想されます。

### エンゲージメント

#### Engagements

レポーティング期間中にユーザーが私たちの投稿に対してアクションを起こした回数。これには「いいね」、リツイート、コメント、保存、リプライ、リアクション、シェアが含まれます。引用リツイートは含みません。これらのアクションは均等に重み付けされておらず、時間をかけてエンゲージメント独自の専有的なレポーティング手法を開発していきます。

#### Engagement Rate（エンゲージメント率）

レポーティング期間中にユーザーが投稿にエンゲージした回数を、インプレッションに対する割合で表したもの。この指標は特定のコンテンツやキャンペーンが全体としてどれだけエンゲージしているかを示します。エンゲージメント率は 10 年以上にわたりソーシャルレポーティングの柱であり、コンテンツ品質と最も密接に結びついています。

## データはどこから来るのか？

ブランドソーシャルチームはソーシャルメディア管理ソフトウェアとして Sprout Social を使用し、ソーシャルメディア施策のスケジュール、エンゲージメント、レポーティングを行っています。データの大半はチャンネル上でネイティブに利用可能ですが、目的に合った形でキュレートされたり集約されたりしているわけではありません。**オーガニックなブランドソーシャルデータの単一の情報源は Sprout Social です。**

[この動画で、Sprout からデータを取得し、シートロードに追加し、Sisense に取り込む方法を学べます](https://youtu.be/gol6eKcmIew?t=83)（GitLab Unfiltered YouTube アカウントにログインしているチームメンバーのみ視聴可）。

## ソーシャルメディアメトリクスの定義

**Impressions**（インプレッション）はコンテンツがユーザーに表示された回数です。いくつかの注意点があります：

- Twitter：他のユーザーが当社の投稿をリツイートした場合も含みます。
- LinkedIn：他のユーザーが当社の投稿をシェアした場合は含みません。
- Facebook：投稿だけでなく、ページに関連するあらゆるコンテンツ（画像更新を含む）がユーザーに表示された回数です。
- Instagram：プロフィール訪問者は含みません。
- インプレッション = ビュー（コーポレートマーケティングの定義に従う）。これはソーシャル単独のパフォーマンスにとって最重要指標ではありませんが、各チームでのトップオブファネル活動に直接帰属する数少ない指標の 1 つです。

**Engagements**（エンゲージメント）はレポーティング期間中にユーザーが投稿に対してアクションを起こした回数です。これには「いいね」、リツイート、コメント、保存、リプライ、リアクション、シェアが含まれます。引用リツイートは含みません。

**Post Link Clicks**（投稿リンククリック数、または略してリンククリック／クリック）は、レポーティング期間中にユーザーが投稿のリンクをクリックした回数です。

**Ad Value（広告価値、または等価値）** は GitLab 固有のソーシャルメディア広告ドル相当を、投稿目的別に整理したものです。

- インプレッション（CPM、つまり 1000 インプレッションあたりのコストで測定）
- リンククリック（CPC、つまりクリック単価で測定）
- 広告等価値は、私たちの実際のソーシャル広告支出によって完全に決定される、価値駆動型の指標です。チャンネル／四半期ごとの広告等価値の平均を評価します。
- 広告価値はレポーティング期間における CPM + CPC の同等コストの合計で決まるドル金額として表示します。

**Net Follower Growth**（純フォロワー増加数）は、新規フォロワー数からフォロー解除数を差し引いた合計です。

**Follower Growth Rate**（フォロワー増加率）は、レポーティング期間における成長率（パーセンテージ）です。月次比較もできますが、四半期比較や年次比較で見るのが最善です。

**Engagement Rate**（エンゲージメント率）は、レポーティング期間中にユーザーが投稿にエンゲージした回数を、インプレッションに対する割合で表したもの。この指標は特定のコンテンツやキャンペーンが全体としてどれだけエンゲージしているかを示します。

## レポーティングのサイクル

サイクルにより、定期的なレポーティング期間を設け、他のグループのチームメンバーに対して説明責任を果たし、定期的にパフォーマンスをレポーティングできます。事前に必要・合意されていなかったランダムなレポーティング依頼や、データを使用・確認するのが時間的に不適切とチームが判断するものには対応しません。

### FY 用レポーティング Epic を作成し、年間を通じてすべてのレポートをここにリンクする

これらの Epic は、四半期の進捗やキャンペーン固有のラップアップ Issue からデータを参照する、GitLab 上の生きた倉庫として機能します。ソーシャルチームは FY パフォーマンス Epic に、これらのレポーティング Issue へのリンクを追加するべきです。

- [FY22 Performance Epic](https://gitlab.com/groups/gitlab-com/-/epics/1465)

### 月次レポーティング

ソーシャルチームは、レポーティング対象月の翌月の第 2 週末までに、ブランド全体のパフォーマンスおよび一部のトピック／キャンペーンのデータを取得します（例：1 月のデータは 2 月中旬までに利用可能）。

また、Google Sheets の [Ad Equivalency dashboard](https://docs.google.com/spreadsheets/d/1sZwoUwnk5BXHrmRkAPkipgtMJZ8_stS-hMagTujym0k/edit?usp=sharing) にも必要なデータを追加します。

ワークフローは次のとおりです：

1. [Sprout reports](https://app.sproutsocial.com/reports/home) を開き、レポーティング対象月用に設定する
1. [Sheetload intake sheet](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0) を別ウィンドウで開く - 横並びで作業するか、セカンドモニターを使用する。
1. [Sheetload intake sheet](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0) で前月分のセクションをすべてハイライトします。これらのセクションをコピーし、最後の利用可能なデータセットの直下にシリーズ全体を貼り付けます。`month` と `value` セクションを削除して、レポーティング対象月用に更新できるようにします。
1. Sprout からデータを取得します。各データポイントの最適な所在は [Sheetload intake sheet](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0) の `source_details` セクションに記載されています。
1. ブランド全般の数値を完了したら、毎月レポートする各トピックに移ります。[Sheetload intake sheet](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0) の `Topic Template` タブに移動します。列 c から右側のすべてのデータをハイライトしてコピーします。
1. この空のデータテンプレートを、[Sheetload intake sheet](https://docs.google.com/spreadsheets/d/1Lc3uLs7gpoYYu10cLlzqzxWCFISja1Df-FSvY_xBQU4/edit#gid=0) の `Campaign and Topic Reporting` タブに、列 c から右側に貼り付けます。これは、レポートする 1 つのトピック／キャンペーンの取り込み用として機能します。`Topic/Sprout Tag` 項目の 1 つを選択し、[Sprout の Tag Performance Report](https://app.sproutsocial.com/reports/tag_performance) に移動して該当のタグを選択し、すべてのデータを記入します。
1. 各レポーティング対象キャンペーン／トピックについて手順 6 を繰り返します。現在の対象は 3 つ：`Campaign: All Remote Brand`、`Tag: Press Coverage`、`Tag: Blog Shares`

### 四半期レポーティング

ソーシャルチームが [ad equivalency dashboard](https://docs.google.com/spreadsheets/d/1sZwoUwnk5BXHrmRkAPkipgtMJZ8_stS-hMagTujym0k/edit?usp=sharing) に四半期の 3 ヶ月目のデータを追加した時点で、ソーシャルチャンネル別の平均 CPC と CPM を含めて、四半期のメトリクスをクローズします。なお、広告価値のパフォーマンスは四半期がクローズした後に利用可能になります。

各四半期はパフォーマンスとインサイトを概説する Issue で締めくくります。[social-quarterly-report Issue テンプレート](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/blob/master/.gitlab/issue_templates/social-quarterly-report.md) を使用してください。[四半期パフォーマンスに関する完成済み Issue の例はこちら](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/4647)。

### 年次レポーティング

[FY22 Performance Review Deck](https://docs.google.com/presentation/d/1_rLCvBP3fz0ttPOteRphOoAEji_LMvT1sfHrUYC91Gw/edit#slide=id.g639141d4c5_0_15)

[FY21 Performance Review Deck](https://docs.google.com/presentation/d/1nlnysWmeVShRK4-frKKkKfUdBPz96qBOAkt26RmZmAM/edit?usp=sharing)

年次レポートはあらゆる消費形式を網羅すべきです：Epic、Issue、文章による要約、デッキ、ソーシャルチームによるレビュー付きデッキ録画。

[FY21 の Epic と Issue のアウトラインを使って FY22 版を作成してください。](https://gitlab.com/groups/gitlab-com/marketing/corporate_marketing/-/epics/67)

年次レポーティングは、キャンペーン／トピックのステークホルダー、コミュニケーションおよびコーポレートマーケティングチーム、マーケティング組織全体に伝達すべきです。#marketing Slack チャンネルに最新情報として含めてください。

## レポーティング、データ、ユーザー行動の制約

ソーシャルメディアデータには、利用可能な指標、各チャンネルでの定義、ツールでのデータ集約方法、その他の変数が関わっているかどうかに基づき、常に一定の制約があります。

- 現在、Sprout タグを組み合わせて全体のパフォーマンスをレビューすることはできません（例：特定キャンペーンのパフォーマンスを確認したいが、所有リンクとリンクなしの投稿を比較したい場合は、手動計算が必要）。これは Sprout 内部のメカニズムにより、Sprout インスタンス全体で共通です。
- 投稿は 1 つの広告等価値メトリクスにのみカウントされます。投稿はブランド認知とソーシャルチャンネルでのエンゲージメントのいずれか、もしくはウェブサイトへのクリック生成のいずれかに区分されます。このため、投稿の ROI は特定タイプの広告等価値に従って評価できますが、複数の種類にまたがって評価することはできません。
- 広告等価値は、GitLab がソーシャル広告で支払う必要があった金額の 1:1 ではありません。広告として書かれた投稿はオーガニックソーシャルメディア向けに作られたものとは大きく異なります。ソーシャル広告で利用可能な特定のターゲティングも、広告のパフォーマンスに影響します。したがって広告等価値は、支出のプロキシとして見るべきです -- 価値を加えており、広告予算を削減しているわけではありません。
- 広告等価値は、成長を測定する指標ではありません。GitLab のソーシャルメディア広告は時間の経過とともに効率的になり、コストは下がります。ソーシャル広告コストが下がるにつれ、最適化の対象であるインプレッションやクリックの各アクション価値も購入時に安くなります。したがって、ソーシャル広告がより効果的になるにつれて、オーガニックソーシャルメディアの広告等価値は減少するはずです。広告等価値は付加価値として測定します。
- ソーシャルチームがレポートするコアメトリクスの多くは、逆相関の関係にあります。インプレッションが高い投稿はクリックが少ない傾向があります（逆も然り）。世界中で共有された投稿でエンゲージメント数が多くても、インプレッションが高ければエンゲージメント率は低くなる場合があります。他のメトリクス間にも逆相関の関係があります。投稿を作成する際、ソーシャルチームはユーザーに取ってもらいたい 1 つのアクションを考慮し、コピー、アセット、時間、チャンネルが私たちにとって有利になるよう構成しようとします。

## レポーティングのヒント

- Sprout でキャンペーン／タグごとの特定メトリクスをレビューするには、すべての投稿を csv ファイルとしてエクスポートし、csv ファイルを Sheets にアップロードしてから、レポートしたいタグでタグ付けされた投稿をフィルタリングします。これはチャンネル間で同等に重み付けされたレビューではありませんが、チャンネル別のレポーティングを提供します。

## Sprout のタグ

Sprout でのタグの使用は、ソーシャルメディアパフォーマンスのレポート開発における中核機構です。だからこそ、スケジュールするすべての投稿について、適切なタグをすべて使用することを検討することが重要です。以下では、最もよく使われるタグの詳細と、効果的な使用のためのヒントを紹介します。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

キャンペーンタグを除くすべてのタグは併用可能であり、しばしば併用すべきです。これは複数の柱（pillar）またはタイプタグを使用する可能性があることを意味します。

</div>


### Sprout のタグ使用例

- REMOTE イベントをハイライト動画と登録リンクとともに宣伝する
  - 使用タグ：Pillar: All Remote、Type: Link、Type: Video、Campaign: REMOTE event
- GitLab で働くことに関する一般的な新しいブログを宣伝する
  - 使用タグ：Pillar: Blogs、Pillar: Talent Brand、Type: Link
- Commit のスピーカーが登壇する Twitter Spaces Q&A（テーマは DevOps Leadership）を宣伝する
  - 使用タグ：Pillar: Corporate Events、Pillar: DevOps、Type: Audio、Campaign: Commit

### コンテンツピラータグ

コンテンツピラータグでは、ソーシャルチームが投稿の中で最も共通する識別項目（投稿全体の目的やフォーカス）にタグ付けできます。ピラータグの多くは、ソーシャルマーケティングチームが連携する他のチームに関連付けられています。これらは最もつなぎやすい識別子だからです。ピラータグでは、トップレベルのフォーカスについてレポートを作成し、最高レベルでの長期的なパフォーマンスを示すことができます。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

これらのタグはスタック可能であり、組み合わせ可能です。

</div>


- 🏷 Pillar: All Remote
  - _GitLab のオールリモートブランドに関するコンテンツをスケジュールする際_
- 🏷 Pillar: Blogs
  - _ブログのコンテンツをスケジュールする際_
- 🏷 Pillar: Community
  - _コミュニティチームに関連するコンテンツをスケジュールする際_
- 🏷 Pillar: Corporate Events
  - _コーポレートイベントチームに関連するコンテンツをスケジュールする際_
- 🏷 Pillar: DevOps
  - _DevOps をテーマとしたコンテンツをスケジュールする際。GitLab に関する内容である必要はない。ソートリーダーシップ。_
- 🏷 Pillar: Press / News
  - _コーポレートコミュニケーションチームに関連するコンテンツや、PR エージェンシーから来るコンテンツをスケジュールする際_
- 🏷 Pillar: Product
  - _GitLab の製品提供に直接関連するコンテンツをスケジュールする際_
- 🏷 Pillar: Talent Brand
  - _タレント／雇用主ブランドに関連するコンテンツをスケジュールする際_

### コンテンツタイプタグ

コンテンツタイプタグでは、ソーシャルチームがフォーマット別にパフォーマンスを測定できます。これは個別のコンテンツタイプがどれだけエンゲージしているか、また他の目標を達成しているかを測定するために重要です。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

これらのタグはスタック可能であり、組み合わせ可能です。

</div>


- 🏷 Type: Audio
  - _Twitter Spaces のように、音声のみのファイルを含むコンテンツをスケジュールする際_
- 🏷 Type: Case Studies
  - _GitLab のケーススタディへのリンクを含むコンテンツや、その詳細を含むコンテンツをスケジュールする際。ケーススタディのリンクを共有する場合は、Type: Link タグも併用する。_
- 🏷 Type: Link
  - _ソーシャルカードを含むかどうか、画像か、GitLab かサードパーティ宛てかに関わらず、リンクを追加したコンテンツをスケジュールする際。_
- 🏷 Type: Photo
  - _写真アセットが添付されたコンテンツをスケジュールする際。_
- 🏷 Type: Poll
  - _ソーシャルチャンネルの投票機能を使用するコンテンツをスケジュールする際。質問とは異なり、ユーザーが選択する事前選定済みの選択肢が短い形で用意されている場合。_
- 🏷 Type: Question
  - _ユーザーが自由に答えるオープンエンドな質問を含むコンテンツをスケジュールする際。投票（事前定義済みの選択肢からユーザーが選ぶ）とは異なる。_
- 🏷 Type: Video
  - _ネイティブ動画、または別の動画アセットへのリンクを含むコンテンツをスケジュールする際。別の動画アセットへリンクする場合は Type: Link タグも併用する_

### キャンペーン

キャンペーンタグタイプは Slack で異なる形で表示されます。コンテンツをスケジュールする際にタグを選択するための独自のセクションがあります。[Campaign Planner 機能を使えば、最初から最後までソーシャルキャンペーンを構築でき、タイムライン、ブリーフフォームなどの詳細も含まれます。](https://support.sproutsocial.com/hc/en-us/articles/4404605325325-Sprout-Campaigns#h_01FA3GQZGA3J1AFDQA4B6H95EA) キャンペーンタグは GitLab で取り組むキャンペーンに基づいて使用され、より粒度の高いレポーティングを可能にします。オールリモートコンテンツ全体のパフォーマンスに頼る代わりに、特定のイベント（REMOTE など）やマーケティングキャンペーン（Remote Work Report など）をターゲットにできます。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

キャンペーンタグはスタック不可であり、組み合わせて使えません。1 投稿に使用できるキャンペーンタグは 1 つだけなので、投稿のコミュニケーション目的を明確にし、キャンペーンを 1 つだけ含めることが重要です。

</div>


年間を通じて使用する可能性のある既存のタグの一部を以下に示しますが、新しいキャンペーンタグは年間で取り組むキャンペーンに応じて作成されます。

- 🏷 Commit
- 🏷 Kubecon
- 🏷 GitLab 15
- 🏷 REMOTE by GitLab
- 🏷 Remote Playbook
- 🏷 DevSecOps Survey
- 🏷 AWS reInvent
- 🏷 _ここに記載のないその他のタグ_
