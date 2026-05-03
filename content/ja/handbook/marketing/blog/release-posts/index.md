---
title: "GitLab リリースポスト"
description: "リリースポストの作成および更新のガイドライン"
upstream_path: https://handbook.gitlab.com/handbook/marketing/blog/release-posts/
upstream_sha: 4dd867bb5474243a3eda82ced06a78b7e4682f34
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## はじめに

リリースポストは、GitLab アプリケーションの変更を発表する [ブログ投稿](https://about.gitlab.com/releases/categories/releases/) です。これには、[毎月](/handbook/engineering/releases/) 行われる定期的な月次リリースに加え、必要に応じてのパッチ／セキュリティリリースが含まれます。

リリースポストは、ここで概説するプロセスに従い、作成に使用するテンプレートには、誰が、いつまでに、何をする必要があるかが明示されています。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">⚠️ プロセスは過渡期にあります</p>

リリースポストのプロセスは変更されつつあります。**19.0** では、以下に記載されている内容と特定の点で異なります。
[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。

**19.1 から始まる新しいプロセス** が開発中です。詳細は
[Release to Docs Phase 2a エピック](https://gitlab.com/groups/gitlab-org/-/work_items/21556) を参照してください。
新しいプロセスが確定したら、このページは更新されます。

</div>


## クイックリンク

- [よく使われるテンプレート](/handbook/marketing/blog/release-posts/#templates)
- [参考になるリファレンスページ](/handbook/marketing/blog/release-posts/#pages)
- [リリースポストのスケジュール](/handbook/marketing/blog/release-posts/managers/)

## スケジュール

ハイレベルのリリースポストスケジュールは以下の通りです。

### リリース 3 週間前の月曜日

- リリースポストマネージャーは、[www-gitlab-com プロジェクトの以下のスケジュールパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を手動でトリガーします。
  - `Release Post Process Kickoff Tasks`
- これらは `bin/rake release_post:start` rake タスクを呼び出します。([パイプライン構成](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L280-288); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L9))
- このタスクはリリースポストプロセスの実行に必要なブランチ、MR、Issue を作成します。
- MR と Issue は、[release_post_managers.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_post_managers.yml) の内容を使用してリリースポストマネージャーに割り当てられます。
- `Release Post Process Kickoff Tasks` パイプラインの完了後、リリースポストブランチが関連するマージリクエストとともに作成されたら、[www-gitlab-com プロジェクトの以下のスケジュールパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を手動でトリガーします。
  - `Add deprecations and removals to current release post branch`

### リリース 3 週間前の月曜日から木曜日

- **PM** は自分の [コンテンツブロック](#pm-contributors) の MR を作成します
  - [機能とアップグレード](#release-post-item-instructions) は、リリースポストブランチをターゲットにしたリリースポストアイテム MR として貢献されます
  - 主要なアイテムは `features.yml` に追加されます
  - Omnibus、GitLab Runner、Mattermost のための定期的なコンテンツブロックは、エリアオーナーが追加します
  - 標準外の製品アナウンス、未分類のアイテム、その他のアナウンスは、[`extras`](#extras) コンテンツタイプを使用してアナウンスできます
- **EM と PM** は [非推奨化と削除](#deprecations-removals-and-breaking-changes) をアナウンスします

### リリース 1 週間前の木曜日

**コードカットオフ**

- **EM と PM** は、フィーチャーフラグが付いているアイテムが `enabled by default` になっていることを確認し、Self-Managed リリースに含まれることを保証します。
- 非推奨化と削除の MR は、最終レビューとマージのため TW にアサインされます。
- **TW レビュアー** は、機能、非推奨化、削除、アップグレード、Extras のレビューを完了します
- **PMM、Product Design Manager、Product Designer、PM Leader** は、リリースポストアイテム MR の任意レビューを行います
- **EM**:
  - リリース 1 週間前の木曜日までに基となるコードがマージされた場合、機能リリースポストアイテム MR をマージします
  - リリースに含まれていることが手動で検証された場合、機能リリースポストアイテム MR をマージします
    - MR は `/chatops run release check <MR URL> <RELEASE>` chatops コマンドを使用して手動で検証できます
- **TW レビュアー** は非推奨化と削除の MR をマージします


<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>

リリース 1 週間前の木曜日以降に追加された MR は、`master` ではなく `release-x-y` ブランチをターゲットにする必要があります

</div>


### リリース週の月曜日

- <time datetime="16:00">UTC 4 pm (ET 11 am / PT 8 am)</time> に、別の **リリースポスト自動化** タスク ([スケジュールパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L290-299); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L373-399)) がコンテンツアセンブリを実行します
- **リリースポストマネージャー** は、ハイライトする機能を選び、紹介コンテンツを作成します

### リリース週の月曜日から火曜日

- **Developer Relations Engineering** チーム:
  - [Notable Contributor](#notable-contributor) を追加します
  - 広いコミュニティへの感謝メッセージで [貢献の合計](https://10az.online.tableau.com/#/site/gitlab/views/WiderCommunityPIsPart1/MergedMRsperMilestonebasedondate) を検証します
- **リリースポストマネージャーとテクニカルライター** が最終レビューを行います
  - リリース週の月曜日 <time datetime="16:00">UTC 4 pm (ET 11 am / PT 8 am)</time> 以降の変更は、`release-X-Y` ブランチを介して行われ、リリースポストマネージャーの承認が必要です。
  - TW Lead はリリースポスト内の非推奨化と削除のリンクを検証します
  - RPM は [What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) MR を作成します


<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>

リリース週の月曜日から火曜日は、休暇や祝日に当たることがあります。PM は、連絡が取れない場合に時間に敏感な問い合わせに対応する人を指名する必要があります。リリースポストマネージャーは、リリース週の火曜日の終業時までに応答が得られない場合、決定を下し、[アクション志向のバイアス](/handbook/values/#operate-with-a-bias-for-action) を発揮する権限を持ちます。

</div>


### 木曜日、リリース日

- **Release チーム** が最新のパッケージを公開します
- パッケージが [リリース](/handbook/engineering/releases/) されたら、**リリースポストマネージャー** はリリースポストを master ブランチに公開します
- リリースポストが公開されると、[GitLab.org Releases ページ](https://gitlab.com/gitlab-org/gitlab/-/releases) も **自動プロセス** によりチェンジログが反映されます ([パイプラインタスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L303-318))


<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>

これらすべてのステップの詳細は、[月次リリース **ポスト** MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) と [月次リリース **ポストアイテム** MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に記述されています。

</div>


## 参加者

- [**リリースポストマネージャー**](#release-post-manager)
- [**PM コントリビューター**](#pm-contributors)
- [**PMM レビュアー**](#pmm-reviewers)
- [**PMM リード**](#pmm-lead)
- [**TW リード**](#tw-lead)
- [**Product Design レビュアー**](#product-design-reviewers)
- [**TW レビュアー**](#tw-reviewers)
- [**テクニカルアドバイザー**](#technical-advisors)
- [**エンジニアリングマネージャー**](#engineering-managers)

## リリースポストへの立候補

毎月、Product Manager、Technical Writer、Engineering Department の Technical Advisor が [リリースポストスケジューリングページ](managers/) に掲載されているとおり、リリースポストの管理に立候補します。Product Marketing Manager もサインアップしますが、関連するマーケティング活動の認知のためのシャドウとしての参加が中心です。Product Manager の立候補者は、リリースポストマネージャーとしてリリースポストをリードし、リリースポスト公開時に著者として記載されます。[リリースポストスケジューリングリスト](managers/) を更新するには、すべての立候補者は以下のデータファイルを編集する必要があります。

- **[データ YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/release_post_managers.yml)**: すべてのリリース (9.0 以降) のリリースポストマネージャーを集めています。これがあなたの最初のリリースである場合は、必ず "Versions" の下にある "Managers" セクションを更新してください。

すべての立候補者は、自分が運営するリリースポストの前に、リリースポストをシャドウすることが強く推奨されます。立候補者は、上記のデータ YAML ファイルを更新して、シャドウしたタイミングおよびリリースポストの運営を支援したタイミングを示すことができます。

リリースポストマネージャーは、`https://gitlab.com/gitlab-com/www-gitlab-com/` プロジェクトに対する [Maintainer](https://docs.gitlab.com/user/permissions/#project-permissions) のアクセス権限が必要です。アクセスが必要な場合は、[この機密 Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/10031) をモデルにリクエストを行ってください。

### リリースポストマネージャー

どのレベル (IC またはマネージャー) の Product Manager でも、まだ誰もアサインされていないリリースに立候補できます。IC の Product Manager がリーダーシップスキルを発揮するためにこの機会を活用することを奨励する一方で、マネージャーがその経験を役割に持ち込むことも私たちは大切にしています。

希望する日付を確定する前に、月の [リリース日](/handbook/engineering/releases/) と [月次 MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) で定義されているとおり、リリース 1 週間前の木曜日からリリース日までの間に、クリティカルパスのリリースポストマネージャータスクを実行できることを必ず確認してください。リリース 1 週間前の木曜日から月の [リリース日](/handbook/engineering/releases/) までの間にリリースポストマネージャーのタスクを実行できない場合は、ご自身の都合により合うリリースポストにサインアップしてください。

自分自身をリリースポストマネージャーまたはリリースポストマネージャーのシャドウとして割り当てるには、`/data/release_post_managers.yml` ファイルを更新する MR を提出して、[リリースポストスケジューリングページ](managers/) に名前を追加するだけです。それ以外の場合、PM は、この [トラッキングドキュメント](https://docs.google.com/spreadsheets/d/12tFW2nOqZ7Cxm0T-WKZVHmPdZNPtkS6fdIvLwvWVLLc/edit#gid=0) を活用した公平なスケジューリング原則を使用して割り当てられます。

1. 以前にリリースポストを管理したことがないメンバー
1. 最後にリリースポストを管理してから最も長い間隔があったメンバー

会社に入社後、新しい Product Manager がプロセスに慣れるために数か月の猶予期間があり、その後リリースポストの管理がスケジュールされます。

リストへのメンバーの追加は共有タスクであり、上記の原則に従って誰でも貢献できます。スケジュールされた人は、認識のためにマージリクエストで ping されます。リストはいつでも更新できるため、確認や承認は不要です。指定されたリリースポストの期間に対応できない場合は、リストを更新できます。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">⚠️ 重要</p>

ある月にあなたがスケジュールされていて、休暇、過剰な負荷、その他の理由で対応できない場合は問題ありません。**ただし、マージリクエストを作成し、プロセス全体を開始する前に、リリースポストマネージャーの役割を他の誰かと交換する** ことが条件です。引き受けた場合、プロセス全体に対して責任があり、最後まで遂行できる状態である必要があります。

</div>


### リリースポストマネージャーシャドウ

毎月、Product Manager がシャドウとしても活動し、必要に応じてリリースポストマネージャーのタスクをサポートし、リリースポストマネージャーの不在時に決定のバックアップを行い、次のリリースポストを運営する準備を行います。リードする月の前月にシャドウすることで、Product Manager は前回参加してから発生したプロセスの変更や必要な最適化に備え、認識を持ちます。

シャドウは、以下を行うことでリリースプロセスに関与し続ける必要があります:

- Slack チャンネルでのアクティビティをフォローする
- 週次スタンドアップに参加する
- リリースポストマネージャーのコンテンツレビューや、彼らが助けを求める他のタスクを支援する

シャドウを適切にオンボーディングするために、リリースポストマネージャーは以下を行うべきです:

- 前回のリリースが出荷された後の週に、シャドウとお互いを知り、シャドウからの最初の質問を明確にするための初回コーヒーチャットを設定する
- このページをシャドウに案内する
- 最初のリリースポスト MR の作成にシャドウを含める
- すべてのミーティングと、レビューや一緒に同期的に作業できる他の機会のような活動にできるだけシャドウを含める

覚えておいてください: シャドウの目標は、彼らが自分でリリースポストを実施できるように、関与させ、プロセスを認識してもらうことです。シャドウができるだけ多く学び、準備できるように、できるだけ含めてください！

### テクニカルアドバイザーに関する考慮事項

テクニカルアドバイザーは、プロセスへの慣れと進行中の技術的バックログのために、少なくとも連続 2 〜 3 回のリリースポストに立候補することを推奨します。

テクニカルアドバイザーには以下が期待されます:

- Git ブランチの競合と Ruby のインストールに関する問題を解決する。
- [`www-gitlab-com`](https://gitlab.com/gitlab-com/www-gitlab-com) のソースコードに技術的に貢献できる。
- いくつかの [バックログ Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/3130926?&label_name%5B%5D=Release%20Post%3A%3ATech%20Advisor) を解決する。

テクニカルアドバイザーの責任は、[テクニカルアドバイザー](#technical-advisors) でより詳しく確認できます。

## リリースポストマネージャーの責任

### クリティカルパスタスク

- リリースポスト MR テンプレートでリリースポストマネージャーに割り当てられたすべてのタスクを完了する
  - 注意: [月次 MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) で定義されているとおり、リリース 1 週間前の木曜日から月の [リリース日](/handbook/engineering/releases/) までの間にリリースポストマネージャーのタスクを実行できない場合は、別のリリースポストにサインアップすることをお勧めします。リリースポストにすでにサインアップした後にスケジュール／状況が変わった場合は、Slack の #product でスレッドを開始し、`@[今月レビューしている PLT メンバーの名前]` をタグ付けしてください。今月レビューしている PLT メンバーの名前は [リリースポストスケジューリングページ](/handbook/marketing/blog/release-posts/managers/) で確認できます
- リリースポストページでハイライトする最重要機能を特定し、Product VP からのフィードバックを収集する
- What's New MR を作成し、Product VP と協力して [What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) に含めるものを特定する
- 期限の事前リマインダーを送信する
- [リリース日](/handbook/engineering/releases/) にリリースポスト MR をマージし、リリースポストページが公開されることを確認する
- リリースポスト中のリリースポストレトロスペクティブ Issue でフィードバックを収集する。自分自身の課題だけでなく、Slack や他の場所で発生する他のチームメンバーの課題も含める
  - [リリース日](/handbook/engineering/releases/) の翌日から [リリース日](/handbook/engineering/releases/) の 1 週間後の間で、Technical Writer、Technical Advisor、リリースポストマネージャーシャドウとシンクのレトロを行い、プロセスを改善し、ハンドブック／MR を更新するためのアクションを特定して共同で完了する
  - レトロスペクティブ Issue のすべてのアクションが完了し、[リリース 3 週間前の月曜日にリリースポスト自動化タスクが実行される](#release-post-branch-creation-rake-task) 前に Issue がクローズされていることを確認する

### その他の主要タスク

- リリースポストチームと一緒に週次のシンクまたは非同期スタンドアップを実施する (メジャーリリースの場合はシンクスタンドアップが必要)
- リリースポストで公開されるすべてのコンテンツの全体的な品質と正確性をレビューおよびサポートする
- リリースポストマネージャーシャドウをローテーションの前に学習できるよう、できるだけ活動に含める
- 300 KB 未満の (jpg、png) [カバー画像](#cover-image-license) を追加する
- Slack のリリースポストチャネルを監視し、質問への回答やハードルのトラブルシューティングを支援する
- フィードバックの解決に役立つよう、必要に応じて Slack または MR で PM やその他に ping を送る
- リリースポストが **[リリース日](/handbook/engineering/releases/) の 2 日前にマージ可能な状態** であることを確認する
- リリースポストブログが [リリース日](/handbook/engineering/releases/) に公開された後、視聴者から出てくる質問に対応するため、必要に応じて Slack の [#product](https://gitlab.slack.com/archives/C0NFPSFA8) を使用して product manager と直接 [コミュニケーション](#communication) を取る
- コミュニティとの関わりに追加のサポートが必要な場合は、Developer Advocacy チーム (Slack の [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B)) が [リリース日](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#release-days) のサポートを行います
- セカンダリ機能のタイトル (アルファ) およびステージによる自動ソートが概して見栄えが良いか、または必要に応じて修正されているかを確認する [コンテンツレビュー](#content-reviews)
- PM やその他と協力して、コンテンツブログで参照されている外部ブログが [リリース日](/handbook/engineering/releases/) にリリースポストブログが公開される前に公開されるようにする
- リリースポストアイテムがリリース週の月曜日以降に追加または削除された場合、TW Lead が認識していることを確認する
- ソーシャルチームにリリースポストが公開され、ソーシャルメディア投稿のスケジュールを設定する時期であることを通知する
- 協力者からの連絡があれば、[メジャーリリース](#major-releases) に固有のタスクをサポートする

### 始め方

`https://gitlab.com/gitlab-com/www-gitlab-com/` プロジェクトに対する [Maintainer](https://docs.gitlab.com/user/permissions/#project-permissions) のアクセス権限があることを確認してください。アクセスが必要な場合は、[この機密 Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/10031) をモデルにリクエストを行ってください。

[自動化タスク](#schedule) は、[リリースポストマネージャースケジュール](/handbook/marketing/blog/release-posts/managers/) に基づいて適切なアサインメントとメンションを行いつつ、リリースポストプロセスの実行に必要なブランチ、MR、Issue を作成します。

リリース 3 週間前の月曜日の終わりまでにリリースポスト X.Y MR にアサインされていない場合:

- テクニカルアドバイザーと協力して [`bundle exec rake release_post:start`](#release-post-branch-creation-rake-task) を実行し、X-Y リリースポストをキックオフする、または
- [リリースポストブランチと必要なディレクトリ／ファイルを手動で作成する](/handbook/marketing/blog/release-posts/manual-release-post-kickoff/) ためにこれらの手順に従う

### コミュニケーション

リリースポストマネージャー、テクニカルアドバイザー、テクニカルライター、PMM リードは、リリースポストに関連しているが、より広いチームには関係のないトピックについてコミュニケーションを取る必要があります。これらのチャットは Slack の `#release-post-prep` チャネルで行い、Slack #release-post でのより広いチームへの混乱と不要な通知を最小限に抑える必要があります。

リリースポストマネージャーは、最も頻繁に Slack チャンネルにリマインダーを投稿します。そのため、リリースポストマネージャーが特定の投稿の言い回しに関するガイダンスを求めている場合は、関連する Slack チャンネルで、その投稿が前のリリースポストマネージャーによって作成されたであろうおおよその日付までスクロールすることを推奨します。ただし、ここにいくつかのベストプラクティスと例があります:

- 何が共有されているか、なぜ共有されているかを明確に、説明的に述べる
- 誰かにアクションを取ってもらう必要がある場合は、明示的にそう述べ、その人をタグ付けする
- 要求されたアクションが時間に敏感な場合は、明確な期限を示す
- 認識すべき既知の問題がある場合は、それらをリストアップする
- 大きな発表については、常にリリースポストチームに cc して、全員が理解できるようにする

Slack の `#release-post` または `#release-post-prep` でコミュニケーションを取る場合は、会話を追跡しやすくするために、ユニークな議論スレッドを通じて発表とリクエストを整理してください。たとえば、異なるトピックを扱う際に、同じ日付であるという理由で、さまざまなリマインダーを組み合わせることは避けてください。一般的なルールとして、リマインダーに対して MR テンプレートに固有のタスクリストアイテムがある場合、そのリマインダーは、Slack または MR のいずれかで別の独立した投稿を取得すべきです。GitLab の [効果的な Slack コミュニケーション](/handbook/communication/#slack) ガイダンスもレビューしてください。

レビュー対象の幹部ステークホルダーへのサンプル投稿は以下の通りです。
今月レビューしている PLT メンバーの名前は [リリースポストスケジューリングページ](/handbook/marketing/blog/release-posts/managers/) で確認できます

```md
@[今月レビューしている PLT メンバーの名前] 13.6 リリースポストが生成され、`https://release-13-6.about.gitlab-review.app/releases/2020/11/22/gitlab-13-6-released/index.html` でレビューできます

11 月 20 日金曜日 (明日) <time datetime="18:00">UTC 6 pm (ET 1 pm / PT 10 am)</time> までにフィードバックを共有してください。レビューありがとうございます！

現在、コンテンツに対する既知の問題／調整はありませんが、追加が必要な非推奨化が 1 つあり、最初の編集の波で行われます。

13.6 リリースポストの MR は次のとおりです: `https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/66652`

cc @TW Lead @tech-advisor @PMM
```

投稿のその他のサンプルには、リリースポストマネージャーが取り組んでいるアイテムに関するリマインダーや通知が含まれます:

```md
🎺 こんにちは、チームの皆さん！リリース 1 週間前の木曜日以降、バグ、パフォーマンスの改善、ユーザビリティの改善 MR にこれ以上の貢献は受け付けないという「ラストコール」をアナウンスします。今のうちに送ってください 🏃‍♂️ cc @[今月レビューしている PLT メンバーの名前]
```

```md
チームの皆さん、現在 XX.X マイルストーンをターゲットにした XX 件の Open and Ready MR があることをリマインドします (Open MR へのリンク)。少し時間を取って、EM にマージするか、マイルストーンに含まれないアイテムの移動を依頼してください。
```

```md
皆さん、次の 45 分から 1 時間でリリースポストの最終マージを完了する予定です！発生する問題を解決するために、チームメンバーとアクティビティを調整します。cc @Tech Advisor @TW Lead
```

Developer Advocacy チームは、リリースポストブログのコンテンツに関する問い合わせへの対応を支援する必要がある場合、[リリース日プロセス](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#release-days) に従って Slack の #release-post でリリースポストマネージャーに連絡します。これらのニーズは、主にブログ公開後の最初の 1 週間内に発生します。ただし、特定のリリースポストの著者として、問題が発生した数週間後に対応の調整を依頼するために ping されることがあります。通常、問題を処理するのに最適な DRI を見つけるだけで済みます。多くの場合、問題のリリースポストアイテムの PM です。

外部の PR およびマーケティング会社が、リリースについて報告したり、メディアリレーションを管理したりする場合、RPM が「著者」であるため、RPM に直接質問を ping することがあります。これが起こった場合、リリースポストマネージャーはマーケティングの誰がこのコミュニケーションを引き継ぐことができるかを把握すべきです。

### コンテンツレビュー

すべての参加者にわたるさまざまなレビューの期日は、[リリースポスト MR テンプレート](#templates) と [リリースポストアイテム MR テンプレート](#templates) で確認できます。PM コントリビューターは、リリース 1 週間前の木曜日のコンテンツマージ期限以降、特にリリース週の月曜日の <time datetime="15:00">UTC 3 pm (ET 11 am / PT 8 am)</time> の最終コンテンツアセンブリ後の新しいコンテンツブロックの追加を試みるのを停止することが推奨されます。影響度の高い機能については例外が認められますが、リリース日前日の水曜日まで PM と協力してさらにコンテンツブロックを追加するかどうかは、リリースポストマネージャーの裁量に委ねられます。

個々のリリースポストアイテム (コンテンツブロック MR) のさまざまなコンテンツレビュー (TW、PMM、Director) を監視するのは、PM コントリビューターの責任です。ただし、リリースポストマネージャーは、月のリリース 3 週間前の木曜日にまだ Ready ラベルでマークされていないアイテムの数、またはリリース 1 週間前の木曜日にまだマージされていないアイテムの数を監視し、必要に応じて Slack のリリースポストチャネルで PM にチェックインしてサポートしハードルをクリアにすることが推奨されます。これを行う本当に簡単な方法は、[プレビューページ](https://about.gitlab.com/releases/gitlab-com/) に注目し、新しいアイテムが表示されたときにアイテムをコピー編集およびリンクチェックすることです。このページはユーザーに LIVE であり、エラーがあってはならないため、これを行うことも重要です。

ステークホルダーのフィードバックによる二次機能の順序付けのレビューと必要な調整は、リリースポストマネージャーの責任です。二次機能、削除、アップグレード注記はすべて、ステージごとにグループ化され、タイトルでアルファベット順にソートされます。二次機能のソート順序に影響を与えるには、コンテンツブロックの `title` への変更が必要です。リリースポストマネージャーは、正確性と整合性を確保するために、コンテンツブロックの product manager と協力してこれらの変更を行うべきです。

リリースポストの Review App が生成された後、リリースポストマネージャーは、Slack の #release-post チャネルで [プロダクトリーダー](/handbook/product/product-leaders/product-leadership/#product-leadership-team-structure) からの追加フィードバックを募集します。

リリース週の火曜日までにすべてのコンテンツが完成していることを確認し、最終的なエラー修正と小さな改善のための 1 日のバッファを確保することは、リリースポストマネージャーの責任です。

**注:** 可能な限り、リリースポストコンテンツレビューを実施する際には、[GitLab のコミュニティコードレビューガイドライン](https://docs.gitlab.com/development/code_review/#getting-your-merge-request-reviewed-approved-and-merged) を使用するよう努めます。

#### コンテンツブロックをレビューするときに RPM が確認すべきこと

リリースポストマネージャーには、マーケティング紹介を含むすべてのコンテンツの品質をレビューすることが推奨されます。ただし、各リリースポストアイテム MR のコンテンツブロックをレビューするとき、RPM は以下を確認すべきです:

1. なぜ (問題) と何が (解決策) 明確に述べられているか? 機能の説明に含めるべきもののガイドラインとして、[機能について書く](/handbook/product/product-processes/#writing-about-features) を参照してください。
1. 説明はかなり簡潔か (約 125 語以下)?
1. ファイル名は推奨されるファイル命名規則に従っているか? PM コントリビューター向け [指示](#release-post-item-instructions) の **ファイル命名に関する重要な注意** を参照してください。

#### レビューのヒント

1. [GitLab で利用可能](https://about.gitlab.com/releases/gitlab-com/) ページを利用して、マージされたリリースポストアイテムを簡単にスキャンします。
1. [GitLab で利用可能](https://about.gitlab.com/releases/gitlab-com/) およびプレビューページで `[`、`]`、`(`、`)` のような文字を検索して、不正なリンクを見つけます。
1. これらのページのコンテンツを Grammarly のようなツールにコピー＆ペーストして、重複した単語のような目立たないタイポを見つけます。

### リリースポストの紹介コンテンツ

リリースポストの紹介コンテンツ (`YYYY-MM-DD-gitlab-X-Y-released.html.md` にあります) は、すべてのリリースポストにわたって標準であるようにテンプレート化されており、`@justinfarris` の承認なしに変更すべきではありません。このファイルは、参考と編集の容易さのため、リリースポスト MR の上部にリンクされています。リリースポストマネージャーは、すべての主要なアイテムが承認され、最重要機能が指定されていることを確認し、Product VP にフィードバックを依頼します。

## PM コントリビューター

Product Manager は、[コンテンツブロックの MR を提起](#content-blocks) し、期日までに必要なコントリビューターによってレビューされるようにする責任があります。これらは主に Product Manager が追加し、それぞれが [責任を負う](/handbook/product/categories/#devops-stages) セクションを埋めますが、コミュニティコントリビューターを含む誰でも貢献できます。配信されたエピックや注目すべきコミュニティ貢献についても、コンテンツブロックを追加すべきです。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">⚠️ PM: プロセスは過渡期にあります</p>

**19.0** のリリースポストアイテムを貢献する場合、以下のプロセスは完全には適用されない可能性があります。
主な違いには、コンテンツのカットオフ日、コンテンツの組み立て方法、リリースポストの公開場所が含まれます。
[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。

**19.1** から、ここに記載されているプロセスを置き換える全く新しいプロセスが始まります;
進捗状況については、[Phase 2a エピック](https://gitlab.com/groups/gitlab-org/-/work_items/21556) を参照してください。

</div>


### 貢献の手順

機能開発と並行して、必要なコンテンツを含むマージリクエストを PM が準備すべきです。リリースポストアイテムの起草の前に、機能のマージを **待たないで** ください。マイルストーンキックオフの準備をする際に、PM はリリースポストアイテム MR を書くことが推奨されます。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">重要</p>

以下の [指示](#release-post-item-instructions) は、リリース週の月曜日の <time datetime="07:59">UTC 7:59 am (ET 2:59 am / リリース 1 週間前の木曜日 PT 11:59 pm)</time> まで適用されます。リリース週の月曜日のコンテンツアセンブリ後、次のリリースポストに変更を含めたい人は、リリースポストマネージャーと調整し、遅い追加の特別な扱いについては [リリース週の月曜日以降のコンテンツブロックのマージ](#adding-editing-removing-before-release-date) セクションの詳細な指示に従う必要があります。

</div>


### 重要な日付

- キックオフ準備中、または次のマイルストーンを計画するとき: チームが [逆算して作業](https://www.product-frameworks.com/Amazon-Product-Management.html) できるよう、リリースポストを早期に作成することを検討する
- **リリースの 3 週間前の木曜日 - 起草済み**: Product Marketing、Tech Writer、PM Group Manager または PM Director によるレビューの準備ができている
- **リリースの前週の月曜日から木曜日 - レビュー済み**: すべての必要なステークホルダーによってレビューされ、必要に応じてコンテンツが修正され、マージの準備ができている
- **リリース 1 週間前の木曜日 - マージ済み**: 機能がマージされている場合、Engineering Manager によってリリースポストアイテム MR がマージされる
- **リリース週の月曜日 - 最終コンテンツアセンブリ**: 最終レビュー／編集の準備として、リリースポストブログのコンテンツロックイン


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">重要</p>

発表される機能が外部のビジネスパートナーへの参照を含む場合、より早く MR ドラフト承認を開始する必要があります。そのような例の 1 つは [Cloud Seed](https://about.gitlab.com/releases/2022/10/22/gitlab-15-5-released/#deploy-apps-to-google-cloud-with-gitlab-cloud-seed) です。これらのタイプの発表には、GitLab リーダーシップ、ビジネスパートナー、Legal チームによる追加レビューが必要です。これらの場合、リリースポスト発表を行いたいマイルストーンの少なくとも 1 マイルストーン前に MR レビューを開始するために `@justinfarris` に連絡してください。

</div>


### リリースポストアイテムの指示

#### オプション 1: 自動化された MR の作成

[リリースポストアイテムジェネレーター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/release-post-item) は、Issue とエピックを使用してリリースポストアイテムの作成を自動化します。機能 Issue テンプレートの **Release notes** セクションの下にリリースポストコンテンツを起草し、[リリースポストアイテムジェネレーター](#release-post-item-generator) の指示に従ってください。


<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>

ジェネレーターは機密 Issue に対して MR を作成しません。機密 Issue に関連する作業のリリースポストアイテムを追加するには、以下の手順に従って手動で MR を作成し、機密情報やリンクを削除してください。

</div>


#### オプション 2: 手動の MR の作成

- 各機能 (主要、二次、削除) について、[www-gitlab-com リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com) の `master` から新しいブランチを作成します。[非推奨化は別の方法で扱われます](#deprecations-and-other-planned-breaking-change-announcements)
- `master` ブランチをターゲットにしたマージリクエストを開きます
- [リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) を使用します
- コンテンツは、`master` ブランチの [`data/release_posts/unreleased/`](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/) に追加された 1 つの YAML ファイルである必要があります
  - フォーマットとサンプルコンテンツについては、[`data/release_posts/unreleased/samples/`](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/samples?ref_type=heads) を参照してください
  - `features:` の次に `primary:` 、その次に機能コンテンツのような構造を保持する必要があることに注意してください
- `data/features.yml` (該当する場合) を更新して機能を含め、変更を同じマージリクエストの一部としてコミットします
- [リリースポストアイテム MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に含まれる PM チェックリストを完了します。これには以下のタスクが含まれますが、これらに限定されません:
  - [コンテンツタイプ](#content) に基づいて、適切な `release post item::` スコープラベルを追加する
  - 関連する Tech Writer に MR をアサインしてレビューを依頼する
  - 必要に応じて、関連する Product Marketing Manager や Director に MR をアサインしてレビューを依頼する
  - すべてのコンテンツがレビューされ、完了したら、`Ready` ラベルを追加し、機能がデプロイされて有効になったときにマージするために、適切な Engineering Manager (EM) に MR をアサインします。

  **ファイル命名に関する重要な注意**: PM は、コンテンツブロック自体のタイトルと適切な重複を持つ説明的なファイル名を作成すべきです。これにより、レビュープロセスのさまざまな参加者が yml ファイルにコンテンツブロックを関連付けることが容易になります。以下に記載されている正しい接頭辞 (`stagename`、`removal`、または `upgrade`) が使用されている限り、アンダースコア `_` またはハイフン `-` のいずれかを使用できます。

  - 機能ファイル名: `stagename-featurename.yml` (たとえば、`create-group-wikis.yml`)。**やってはいけないこと:**
    - 主要 vs. 二次を指定する。それは変更されることがあるためです。
    - カテゴリまたはグループ名を使用する。
    - レポーターの名前を含める。

  - 削除ファイル名: `removal-something-else-descriptive.yml`
  - アップグレードファイル名: `upgrade-another-description.yml`

  **トラブルシューティングのヒント:**

  - **`git merge` を使用し、`git rebase` は使用しないでください。** Rebase はクリーンなコミット履歴を作る強力なツールですが、`www-gitlab-com` リポジトリのコラボレーター数によるコミットの量により、通常は手動で対処する多くの競合が発生します。コンテンツ MR には、自分のコンテンツブロックに関連する変更と `features.yml` への 1 つの追加のみが含まれるべきであり、マージ競合は最小限であるべきで、通常は存在しないはずです。Rebase を開始して問題が発生した場合は、`git rebase --abort` でいつでもバックアウトできます。
  - **引用符を閉じ、ファイル名を確認し、適切にインデントすることを忘れないでください。** 多くのあいまいなパイプラインエラーは、よくあるコーディングの落とし穴によって引き起こされます。引用符が閉じられていること、参照しているファイルが *正確に* リストしたファイル名と同じであること、そして各行に正しいインデントが設定されていることを確認してください。

### コンテンツ

人々が新機能を理解して採用を増やすのを助けたいと考えています。一般的に、リリースポストは、解決すべき問題、解決策、そして顧客が解決策からどのように恩恵を受けるかを簡潔に述べるべきです。Direction アイテムと Release 機能を必ず参照してください。[今後のリリースページ](https://about.gitlab.com/upcoming-releases/) に表示されるすべてのアイテムは、関連するリリースポストに含まれるべきです。

コンテンツブロックを書くとき、リリースポストアイテムの説明が GitLab のコミュニケーション方法と一致するように、[機能について書く](/handbook/product/product-processes/#writing-about-features) を必ず参照してください。たとえば、私たちは「発表できることを嬉しく思います」のような形式的なフレーズを避け、一般的に「ユーザーは x を実行できるようになりました」ではなく「あなたは x を実行できるようになりました」と言って、ユーザーに直接話しかけます。これらのガイドラインへのリンクをチェックすることで、書き込む際にトーン／声を調整するのに役立ち、リリースポストアイテムのよりスムーズで迅速なレビュープロセスを確保できます。

PM コントリビューターは、リリース 1 週間前の木曜日の最終マージ期限以降、特に午前 8 時 PST (UTC 3 pm) に最終コンテンツアセンブリが行われた後の新しいコンテンツブロックの追加には裁量を働かせることが推奨されます。ただし、次のブログ投稿まで待てない影響度の高い機能がリリースされた場合、PM はリリースポストマネージャーに連絡して調整すべきです。リリースの前日水曜日まで PM と協力してさらにコンテンツブロックを追加するかどうかは、リリースポストマネージャーの裁量に委ねられます。

#### 主要 vs. 二次

リリースポストアイテムのコンテンツを作成するときは、`primary` 機能か `secondary` 機能かを判断する必要があります。これは PMM カウンターパートと協力して行い、確信が持てない場合はこのガイダンスを参照してください:

機能は以下の場合に `primary` であるべきです:

- **新しい** か、または重要な改善 - 以前には存在しなかった主要な機能を追加する、または既存の機能を大幅に変更する。
- 顧客またはより広いコミュニティからの高い需要がある (エピック／Issue での議論または賛成票で測定される)。
- 機能が現在のマーケティングナラティブまたはキャンペーンに結びつく。
- すべての `primary` 機能は、`features.yml` に対応するエントリを持つべきです。
- ベータ機能は、主要または二次アイテムとして含まれる場合がありますが、`Beta` ステータスを明確に反映する必要があります。
- 実験的機能はリリースポストの主要または二次アイテムには含まれません。

#### 実験的機能

リリースポストに実験的機能を含めるには、`unreleased` ディレクトリにリリースポストアイテムを作成するときに [実験的テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/experiment_feature.yml) を使用します。実験的機能は、リリースポストの独自のセクションに表示されます。

### レビュー

PM Director/Group Manager、PMM、Product Design レビューは強く推奨されますが、リリースポストへの掲載に必要なのは Tech Writer レビューのみです。リリース週の月曜日以降にリリースポストに遅い追加が行われた場合でも、Tech Writer レビューが必要です。Tech Writing レビューは、タイポ、文法エラーを探し、スタイルを支援することに焦点を当てるべきです。PM は、重要なコンテンツ／技術変更を調整する責任があります。どのリリースポストアイテムがレビューに最も重要かを伝えることで、Product Section リード、PMM、Tech Writer がリリース 3 週間前の木曜日までに正しいアイテムをレビューでき、適切なラベルが MR に適用され、レビュー準備ができたときにレビュアーが MR にアサインされることが保証されます (例: `Tech Writing`、`Direction`、`Deliverable` など)。

- **注: 一貫性のために、PM Director/Group Manager、PMM、TW、Product Design チームメンバーをコンテンツレビューにアサインするときは、GitLab の [マージリクエストレビュアー](https://docs.gitlab.com/user/project/merge_requests/reviews/) 機能を使用してください。**

#### オプションの PM Director/Group Manager および PMM レビューに関する推奨事項

PMM レビューは必須ではないものの推奨されており、Product Leader と Product Design レビューはオプションであるため、PM はレビューを依頼するコンテンツブロックを決定する際にいくつかのことを考慮すべきです:

- 機能はグループまたはステージの全体的な Direction に貢献していますか?
- 機能は私たちが市場で競争する能力を高めますか?
- 機能には、かなりの顧客需要がありますか?
- 機能は、重要な UX の改善を表していますか?

これらのいずれかへの答えが「はい」である場合、Director、PMM、Product Design カウンターパートと調整して、リリース 1 週間前の木曜日までにコンテンツブロックをレビューすることが推奨されます。PM として、複数のコンテンツブロック MR がレビューを必要とする場合は、TW、PMM、Product Designer、Director からレビューが必要な MR と、それらの相対的な優先度をコミュニケーションすることが、あなたの責任です。

### コンテンツブロック MR のマージ

Engineering Manager は、機能がコードベース自体にマージされたときに、これらの MR をマージする DRI です。これにより、すべての関連する関係者 (Product Manager、PMM、Product Designer、Section リード、Technical Writer) が、エンジニアリングが機能をリリースするのを保留することなく、コンテンツをレビューするのに十分な時間を持つことができます。

Engineering Manager が Issue がクローズされたらすぐに機能ブロックをマージできるようにするため、リリースポストに含めたいすべてのスケジュールされたアイテムについて、コンテンツブロック MR が作成され、コンテンツの貢献とレビューが完了したときに `Ready` ラベルが適用されていることを確認してください。

### マージされたコンテンツブロックのレビュー、編集、更新

コンテンツブロック MR がマージされた後、[プレビューページ](https://about.gitlab.com/releases/gitlab-com/) で表示でき、**リリース 1 週間前の木曜日の最終マージ期限** までは、master への MR を介して更新／編集すべきです。リリース週の月曜日以降、コンテンツブロック MR は **最終コンテンツアセンブリ** 後にリリースポストブランチの Review app で表示し、リリースポストマネージャーと調整してリリースポストブランチで更新／編集すべきです。[リリース日](/handbook/engineering/releases/) 以降は、[ブログ](https://about.gitlab.com/releases/categories/releases/) でコンテンツブロックを表示すべきです。コンテンツブロック MR がマージされた後、このページはユーザーに LIVE であり、エラーがあってはならないため、このページを確認することが重要です。

### リリース週中のマージされたコンテンツブロックの追加、編集、または削除 {#adding-editing-removing-before-release-date}


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">⚠️ 遅い貢献: プロセスは過渡期にあります</p>

**19.0** のために遅い貢献を行う場合、以下のプロセスは完全には適用されない可能性があります。
コンテンツのカットオフ日と遅い追加に関する現在のガイダンスについては、[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。

</div>


[リリース週](/handbook/engineering/releases/) の月曜日にコンテンツアセンブリが開始してから、リリース週の火曜日終わりまでの間、新しいリリースポストアイテムの追加またはマージされたリリースポストアイテムの削除は **リリースポストマネージャーと調整する必要があります**。

これは、彼らがリリースポストへの影響を評価し、必要に応じてリリースポストチーム (Tech Writer、PM など) と調整することを可能にするために必要です。これを怠ると、変更がリリースポストに取り込まれない可能性があります。

リリースポストマネージャーに ping する前に、コンテンツが現在のリリースポストに絶対に含まれる必要があるかどうかを自問してください。リリース週の火曜日の終業時には、遅いコンテンツブロックは受け付けられません。

#### リリース週中の遅い追加の依頼 {#requesting-late-addition-before-release-date}

- [リリースポスト](/handbook/engineering/releases/) の新しい遅い追加を要求するため、`#release-post` でリリースポストマネージャー (RPM) に ping し、RPM が進行する確認をするのを待ちます。新しい遅い追加とは、コンテンツアセンブリがすでに実行された後に作成されたリリースポストアイテムです。リリースポストマネージャーはリクエストに対応するために最善を尽くしますが、保証はされません。
- RPM が遅い追加を承認した場合、PM と RPM は次のように進行します:
  - PM はリリースポストアイテム MR を編集し、ターゲットブランチをリリースポスト `release-X-Y` ブランチに更新します。
  - PM はリリースポストアイテム MR を `release-X-Y` ブランチの上に [リベース](https://docs.gitlab.com/user/project/merge_requests/conflicts/#rebase-in-the-gitlab-ui) します。
  - PM は RPI yml ファイルを `/data/release_posts/unreleased` から `/data/release_posts/x_y/` に移動します。
  - PM は、リリースポストマネージャーとリリースポストテックアドバイザーから、リリースポストアイテム MR のレビューを依頼します。クイックアクション: `/assign_reviewer RP-manager`
  - PM は、`#X-Y-release-post` Slack チャネルで、遅い追加が依頼されたことを MR へのリンクとともにリリースポストチームに通知します。
  - MR はリリースポストマネージャーによって承認およびマージできます。
- 機能が主要であり、以前に `features.yml` に追加していない場合は、`master` から分岐した 2 つ目の MR を作成して、`features.yml` に機能を追加する必要があります。(`features.yml` は、リリースポストブランチではなく、`master` にマージすべきです)。

### マージされたコンテンツブロックを削除するプロセス

- すでに `the release X-Y` ブランチにマージされたアイテムを削除する必要があることを通知するため、Slack の `#release-post` でリリースポストマネージャーに ping します。
- リリースポストマネージャー、または PM がリリースポストマネージャーの承認を得て、`release X-Y` ブランチから YAML ファイルを削除します。
- PM は master の `features.yml` から機能を削除します。

### リリース日後のマージされたコンテンツブロックの追加、編集、または削除 {#adding-editing-removing-after-release-date}

[リリースポスト](/handbook/engineering/releases/) が公開された後でも、機能コンテンツブロックの編集を行うことができます。

コンテンツブロックを編集するには:

1. 編集したいリリースポストの下部で、「Edit this page」を選択します。
1. 正しいサブディレクトリで関連する `.yml` ファイルを見つけて編集します。たとえば、14.6 リリースポストに例の Widgets 機能を追加または編集するには、`master` に対する MR で `data/release_posts/14_6/widgets_example.yml` を作成または編集します。

   機能ブロックを削除するには、MR でファイルを削除します。または、次のリリースポストでアナウンスするには、ファイルを `data/release_posts/unreleased` フォルダに移動します。

1. レビューと承認のため、現在のサイクルの [リリースポストマネージャー](/handbook/marketing/blog/release-posts/managers/) をレビュアーとしてアサインします。

非推奨化を編集するには、[アナウンスエントリの編集](#editing-an-announcement-entry) に従ってください。

### 説明責任

**ブログ投稿に追加するコンテンツについて、あなたが責任を負います**。したがって、以下を確認してください:

- このリリースのすべての新機能がリリースポストにある。
- すべてのエントリが正しい。特にドキュメントまたは機能ページへのリンク (利用可能な場合) について。
- 機能ティアの可用性: すべてに [正しいエントリ](#feature-availability) が含まれる。
- すべての新規および／または主要機能が *機能を伴うスクリーンショット (機能が UI で表示される場合) とともに* [`data/features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) に追加されている。
  - [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml?ref_type=heads) は、`about.gitlab.com` 全体で機能を表示するための SSOT であることに注意してください。
- すべての機能には、明確な価値ドライバーがあり、約 125 語未満であるべきです。

[リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に記載されているとおり:

- 機能が **新しい** か、または既存機能の改善であるかを明確にする。
- コンテンツが [機能について書く](/handbook/product/product-processes/#writing-about-features) のガイダンスと合理的に一致していることを確認する。
- タイトルが、機能および製品名にキャピタルケースを使用したセンテンスケースを使用していることを確認する。

すべての機能の説明を、通常のブログ投稿と同様に書きます。
[Markdown ガイド](https://about.gitlab.com/community/markdown-guide-middleman/) に従って書いてください。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">⚠️ 重要</p>

マージ競合を避けるため、既存のファイルへの変更を **プッシュする前に**、必ず `master` をリリースポストブランチにマージしてください。Rebase はせずに、`git pull origin master` を行い、`:wq` を実行します。

</div>


### PM チェックリスト

PM が責任を負うすべてを含めたら、リリースポスト MR の説明で **アイテムをチェック** すべきです:

![PMs check list](/images/marketing/blog/release-posts/features-checklist.png)

アイテムをチェックすることで、リリースポストマネージャーに、自分の役割を時間内 (一般貢献ステージ中) に完了し、レビューを待っていることを明確にします。チェックしない場合、実際の状況がそうであるかどうかにかかわらず、自分の役割を時間内に完了しなかったことが暗黙的に示されます。

すべてのコンテンツがレビューおよび完了されたら、`Ready` ラベルを追加し、Engineering Manager (EM) にこの Issue をアサインします。EM は、実装する Issue が GitLab.com にデプロイされたらすぐにマージする責任があります。その後、このコンテンツは GitLab.com Release ページに表示され、次のリリースポストに含めることができます。すべてのリリースポストアイテムは、リリース 1 週間前の木曜日までにマージされる必要があります。リリース 1 週間前の木曜日の期限までに機能の準備ができていない場合、EM はリリースポストアイテムを次のマイルストーンにプッシュすべきです。

### PM の注意事項

#### 休暇

リリース前／リリース中に休暇中の場合は、すべてのアイテムを埋め、何らかの理由で追加できないすべてのアイテムについて、リリースポスト Yaml ファイルにプレースホルダーを作成します。それらを完了し、責任のあるすべてのコンテンツをフォローアップするには、引き継ぐ人を割り当て、リリースポストマネージャーに通知します。

#### 返信

可能な限り早く MR スレッドのコメントに応答してください。リリースポストには交渉できない期日があります。

#### ドキュメント

コンテンツブロックをリリースポストに追加するのと同時に `documentation_link` を追加してください。後で追加するために残しておくと、おそらく忘れてしまい、レビュアーがレビューステージで後で ping し、書く時間、MR をレビューしてもらう時間、承認を得る時間、マージする時間、[ドキュメント](https://docs.gitlab.com/) で利用できるようにする時間がほとんどありません。

## PMM レビュアー

### メッセージングレビュー

*各 PM は、リリースポストアイテム MR または `features.yml` への変更のメッセージングのレビューが必要なときに、PMM カウンターパートに ping する責任があります。*

- MR のアイテムファイルに PM へのコメントを残します。PM がコンテキストを持ち、コメントを適切に解決できるよう、参照している行の差分でコメントを必ず行ってください。
- 機能の説明に何が含まれるべきかのガイドラインとして、[機能について書く](/handbook/product/product-processes/#writing-about-features) を参照してください。
- これらの機能のメッセージングをレビューし、これらの 5 つの要素を探します:
  - **問題／解決策**: ユーザーの痛みのポイント (問題) と、新機能がどのように痛みのポイントを解消する (問題を解決する) かを説明していますか?
  - **短く／要点**: できるだけ少ない言葉で明確に伝えていますか (できれば 125 語以下)?
  - **トーンの明確さ**: 言語と文構造が明確で、文法的に正しいですか? テキストは現在形であり、「ユーザー」の代わりに「あなた」が使用されていますか?
  - **技術的な明確さ**: 機能の説明は、GitLab に深く精通していない人を含む、さまざまな視聴者にとって意味がありますか?
  - **価値ドライバー**: 機能はユーザーが運用効率を高め、より良い製品をより早く提供し、セキュリティとコンプライアンスのリスクを低減するのに役立ちますか?
- 機能をよりよく理解するために、機能の Issue と MR を見てください。それらは YAML にリンクされています。Issue の説明には、価値提案が含まれていることがあります。機能の Issue と MR のコメントを読んでください。多くの場合、ユーザーや顧客が、なぜその機能を望むのか、機能がないことがどのような痛みを引き起こしているのかをコメントしています。
- リリースポストと `features.yml` は、同じまたは非常に類似したコンテンツを持つことができます - たとえば、同じスクリーンショットなど。
  - リリースポストのトーンは、機能を紹介することに重点を置いています「私たちは XYZ をリリースできて嬉しいです...」
  - `features.yml` のトーンは、Web サイトのさまざまな場所に表示されるよう、[エバーグリーン](https://web.archive.org/web/20190610215424/https://www.thebalancecareers.com/what-is-evergreen-content-definition-dos-and-don-ts-2316028) であるべきです。

## PMM リード

PMM リードは、現場と PR が消費するためのリリースポストハイライトの抜粋を作成する責任があります。

タスクは、[リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) と [月次リリースポスト紹介ドキュメント](https://docs.google.com/document/d/13bGcGxkAQjdUgonX8tbQ72bkCtgkEY6EM9dsXFqfwN0/edit) に含まれています。

月の 3 週目の木曜日まで:

- PMM-Release-Post テンプレートで [新しい Product marketing](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new) Issue を作成します。
- リリースハイライトを作成 - 説明付きの 3 〜 4 つのテーマ。このドキュメントを使用してハイライトを文書化します
- ハイライトで Issue を更新します
- Highspot を更新します
  - 実際のリリースポストブログを Highspot (Customer Outreach spot) に新しいコンテンツとして追加します (例: [release post](https://gitlab.highspot.com/items/64be9cb7a725d13bebaaf6c2?lfrm=shp.1))
  - GitLab Release Post セクションの [GitLab Releases spot 概要ページ](https://gitlab.highspot.com/items/624626054e2472aa8611b5bf) に Highspot 上のこの新しいリリースポストを追加します
  - Highspot (Company Pitch Templates spot) でこのリリースの新しいピッチテンプレートを作成します (例: [pitch template](https://gitlab.highspot.com/items/64e642a213d3aeb2992e8ec4))
  - Release Pitch Templates セクションの [GitLab Releases spot 概要ページ](https://gitlab.highspot.com/items/624626054e2472aa8611b5bf) にこの新しいピッチテンプレートを追加します
- #sales で共有するため、comms にフラグを立てます
- PR と Field enablement チームと共有し、リリースポストマネージャーをタグ付けします

## TW リード


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

テクニカルライターは、[割り当てられたステージ／グループ](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) に従って、個々のリリースポストアイテムをレビューします。
毎月、テクニカルライターの 1 人が、最終的なリリースポストマージリクエストの構造的なチェックの責任を持ちます。
このセクションは後者についてです。

</div>


TW リードは、以下の最終レビューの責任があります:

- [リリースポストの最重要機能](#top-feature) 特定された問題については、適切に解決するよう [TW レビュアー](#tw-reviewers) に通知します。
- [リリースポストの主要機能](#primary-features) 特定された問題については、適切に解決するよう [TW レビュアー](#tw-reviewers) に通知します。
- [フロントマターチェック](#frontmatter)
- リリースポストの非推奨化と削除セクションが、GitLab Docs の対応するページにリンクしていることを検証します。

個々の TW レビュアーと product manager がリリースポストアイテムのスタイルと言語の最終的な責任を持ちますが ([非推奨化、削除、破壊的変更](#deprecations-removals-and-breaking-changes) や [アップグレード](#upgrades) を含む)、TW リードはスタイルと言語が合理的に一貫していないように見える場合に、リリースポストマネージャー、product manager、TW レビュアーに通知する全体的な責任を持ちます (既知のガイドラインと明らかに同期していないこと)。ただし、スタイルと言語の不一致を *修正* することは TW リードの責任ではありません。しかし、TW リードは、リリースポスト内のすべてのリンクが関連するコンテンツを指していることを確認し、問題が見つかった場合は修正する責任とオーナーシップを持ちます。

考慮事項: リリースポストチームとコミュニケーションを取るときは、リリースポスト準備チャネルを使用し、会話を追跡しやすくするためにディスカッションをスレッドに整理します。GitLab の [効果的な Slack コミュニケーション](/handbook/communication/#slack) ガイダンスもレビューしてください。

### 構造的チェック

*リリースポストマージリクエストにアサインされたテクニカルライターが、構文とコンテンツ構造をチェックします。*

**構造的チェック** [メインのリリースポストマージリクエストの説明にあるチェックリスト](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb#L301)
が、構造的チェックをガイドします。

テクニカルライティングのレビューはリリースポストアイテムの
マージリクエストで行われるため、構造的チェックの目的は次のとおりです:

- 投稿全体の一貫性をレビューします。たとえば、前のリリースポストで `auth-server` という名前のアイテムをこの日付で非推奨化するエントリがある場合、`auth_server` と呼ばれるアイテムを削除するエントリもある場合は、質問を提起します。
- 投稿が適切にレンダリングされるようにします。
- 全体としてのコンテンツが、新機能と機能改善を明確に説明していること。
- すべてのリンクが機能し、適切に配置されていることを確認します。
- すべてのコンテンツに構文エラー、タイポ、文法ミスがないか、追加の空白を削除します。
- これはリリースポストアイテムレビューで行われるべきですが、時間があれば、ドキュメントリンクと製品ティアをダブルチェックします。
- 現在のリリースの非推奨化と削除も [非推奨化ドキュメント](https://docs.gitlab.com/update/deprecations/) に表示されることを確認します。

紹介を追加するリリースポスト Markdown ファイルに特に注意を払ってください。
紹介を簡単にレビューしますが、書き方やメッセージングを変更しないでください。
これらは PMM が所有しているため、不要なやり取りを避けるため、彼らに任せてください。

機能の説明が意味をなし、アンカーが正常に機能し、すべての内部リンクが
相対パスを持つことを確認してください。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

リリースポストの紹介や他の部分には、外部の
ブログ投稿へのリンクが含まれている場合があります。これらのリンクは、リリース前日水曜日まで壊れている可能性がありますが、構造的チェック中に TW リードによってフラグを立てる必要があります。
そうすることで、リリースポストマネージャーは、リリースポストブログが [リリース日](/handbook/engineering/releases/) に公開される前に、これらの外部ブログの著者と調整して、それらが公開されていることを確認することを忘れません。

</div>


リリースポストはブログ投稿の特別なインスタンスとみなされるため、Marketing
編集チームの [スタイルガイド](../../brand-and-product-marketing/brand/content-style-guide.md) に従う必要があります。

### 変更の実施

リリース週の月曜日の太平洋時間午前 8:00 まで、TW リードはリリースポストに直接変更を加えることができるはずです。
その時刻以降、次のリリースに変更を含めたい人は、`release-X-Y` ブランチを
ターゲットとした別の MR で送信する必要があります。詳細については、
[機能ブランチでの開発](https://docs.gitlab.com/topics/git/) を参照してください。

### フロントマター

[フロントマター](#frontmatter) では:

- 以下のコードブロックに示すように、各エントリを探します。
- 残っている HTML コメントと未使用のブロックを削除して、ファイルをクリーンアップします。
- `title` の長さを確認します。タイトルは短く、理解しやすいメッセージを伝えるべきです。タイトルが、ブログ投稿のタイトルグラフィックとうまくフィットすることを確認してください。タイトルの長さの一般的なガイドラインは約 60 〜 70 文字です。

```yaml
---
release_number: "X.Y"
title: "GitLab X.Y Released with Feature A and Feature B"
author: "Name Surname"
author_gitlab: gitlab.com-username
categories: releases
image_title: '/images/X_Y/X_Y-cover-image.ext'
description: "GitLab X.Y Released with XXX, YYY, ZZZ, KKK, and much more!"
twitter_image: '/images/X_Y/X_Y-cover-image.ext' # required - copy URL from image title section above
layout: release
featured: yes
# header_layout_dark: true #uncomment if the cover image is dark
# release_number_dark: true #uncomment if you want a dark release number
# release_number_image: "/images/X_Y/X_Y-release-number-image.svg" # uncomment if you want a svg image to replace the release number that normally overlays the background image
---
```

**レイアウト:**

投稿のフロントマターの最後の 2 つのエントリは、異なる
レイアウトのオプションを提供します。ダークなカバー画像を使用したい場合は、
`header_layout_dark: true` のコメントを解除する必要があります。

リリース番号のみをダークにしたい場合は、`release_number_dark: true` のコメントを解除します。

これら 2 つの変数は独立して動作します。同じ投稿のいずれか一方または両方を割り当てることができます。

### バージョン管理されたドキュメントリリース

新しい GitLab バージョンが [毎月](/handbook/engineering/releases/) リリースされると、前のマイルストーンのリリースポスト構造的チェックを完了したテクニカルライターが、そのバージョンの公開ドキュメントのリリースを設定します。

手順については、GitLab docs の [月次リリースプロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md) を参照してください。

## TW レビュアー


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

TW レビュアーは [TW リード](#tw-lead) と混同しないでください。

</div>


Technical Writing チームの各メンバーは、[それぞれのステージ／グループ](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) に該当する個々のリリースポストアイテムと非推奨化アイテムのレビューの責任があります。

PM がリリースポストアイテムマージリクエストを作成、または [非推奨化アナウンスを作成](#deprecations-and-other-planned-breaking-change-announcements) する場合、レビューのため (必須) 自分のグループの TW にアサインすべきです。TW レビューのプロセスは、以下に記述されています:

- [リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md)
- [**非推奨化** MR テンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md)

### 非推奨化ドキュメントの更新

[非推奨化](https://docs.gitlab.com/update/deprecations/) ドキュメントは、[`gitlab/data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data) の .yml ファイルから生成されます。

html ページは自動的に生成されません。非推奨化アイテムのレビュアーとしてアサインされた TW は、ドキュメントをコンパイルするために Rake タスクを実行する必要があります。また、ドキュメントが最新であることをチェックする別のタスクを実行することもできます。

非推奨化 MR の作成者は、コンテンツの作成に責任がありますが、ドキュメントの更新の責任はありません。

ドキュメントの更新:

1. コマンドラインから、[`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトのローカルクローンに移動し、MR のブランチをチェックアウトします。
1. [非推奨化ドキュメントをコンパイル](https://docs.gitlab.com/development/deprecation_guidelines/#update-the-deprecations-and-removals-documentation) します。
1. 更新されたドキュメントをコミットして変更をプッシュします。
1. パイプライン成功時にマージするように MR を設定します (またはパイプラインがすでに完了している場合はマージします)。

非推奨化 MR は、リリース 1 週間前の木曜日までにマージされる必要があります。それ以降にマージされた場合、コードカットオフを逃して self-managed リリースのドキュメントに含まれない可能性があります。

エントリを編集する必要がある場合、[更新プロセス](#editing-an-announcement-entry) は同様です。

Rake タスクの実行で問題が発生した場合は、[トラブルシューティング手順](#deprecation-rake-task-troubleshooting) を確認してください。

## Product Design レビュアー


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

Product Designer [DRI](/handbook/people-group/directly-responsible-individuals/) は、[各デザイナーがアサインされているステージ／グループ](/handbook/product/categories/#devops-stages) に従って、個々のリリースポストアイテムをレビューします。

</div>


*各 PM は、リリースポスト内のコンテンツやビジュアルのレビューが必要なときに、Product Design カウンターパートに ping する責任があります。*

Product Designer は、リリースポストアイテムについて協力し、以下をレビューすべきです:

- **JTBD**: メッセージングが、アイテムがユーザーの [Job to be Done](/handbook/product/ux/jobs-to-be-done/) をどのようにサポートするかを包含することを確認します。
- **MVC メッセージング**: 該当する場合、デザインビジョンや将来のイテレーションを明確に表現します。これは、[under construction](/handbook/values/#under-construction) のアイテム、またはその製品エリアの大幅な成熟に貢献するアイテムを検討するときに特に重要です。
- **アーティファクト**: 投稿に含まれる UI 要素 (スクリーンショット、GIF) が最新であり、すべてのデザイン変更を反映していることを検証します。モックが使用されていないことを確認します。

## エンジニアリングマネージャー

エンジニアリングマネージャーの責任は、
[エンジニアリングハンドブック](/handbook/engineering/workflow/release-feature-determination-workflow/) に文書化されています。

## テクニカルアドバイザー

毎月、リリースポストプロセス中に技術的なハードルでリリースポストマネージャーに助けが必要な場合があります。
テクニカルアドバイザーは、リリースポストの文書化された [技術的側面](#technical-aspects) を参考としてレビューすることを推奨します。

リリースポストの他の月次ボランティアとは異なり、テクニカルアドバイザーは常にリリースポストプロセスに従うことは期待されないことに注意してください。リリースポストマネージャーが Slack 経由でテクニカルアドバイザーに連絡します。その後、テクニカルアドバイザーは、リリースポストの依頼が時間に敏感であることが多いため、夜間／週末を含めて、リリースポストマネージャーまたはリリースポスト DRI にできるだけ早く応答することが期待されます。**特にリリース週の月曜日から月の [リリース日](/handbook/engineering/releases/) の間は重要です**。

良いニュースは、リリースポストの技術的なハードルは、技術専門家にとってトラブルシューティングが比較的容易であることが多いということです！

以下は、リリースポストマネージャーが助けが必要になる可能性のある問題のタイプです。

- リリースポストのさまざまな [自動化](#automation) と [技術的側面](#technical-aspects) のトリアージ
- パイプラインエラーをトリアージし、関連するマージリクエストへの変更を提案または修正を提供する
- リリースポストとのマージ競合を解決する
- 上流の問題を解決するために他の技術チームと連携するタイミングを特定する

## リリースポストアセンブリ中のヘルプの取得

### リリースポストマネージャー

`#release-post-prep` または `#release-post` チャネルに投稿してヘルプを求め、アセンブリに遅延が生じる可能性があることを他の人に知らせます。
スクリーンショット、ビデオなどでブロッカーの詳細を説明します。問題の診断に役立ちます。問題が緊急かどうかを示します。緊急であることを示す場合、応答または解決が必要な明確な日時を提供します。

### テクニカルアドバイザー

リリースポストアセンブリステージ中の以前の課題で見たことは、リリースポストマネージャーがローカル開発環境 (Ruby のセットアップ、権限、gem など) や git の競合の問題で困難を経験することです。Git、Ruby、コマンドラインに精通している必要があります。手元の問題を診断および解決するために使用できるリソースがいくつかあります:

- アセンブリスクリプトの出力 (git ステータスを含む) をレビューします
- ./bin/doctor の実行を検討し、出力をレビューします
- [以前の問題のリスト](/handbook/marketing/blog/release-posts/manual-release-post-kickoff/#possible-script-errors-with-corrective-actions) を参照します

インシデントの解決について最善の判断に従い、診断と解決のために実行された手順を記録して、リリースポストプロセスと準備状況を改善できるようにします。この情報を新しい Issue または現在のリリースポストレトロスペクティブの一部として配置します。

#### 自動化

[スケジュールパイプラインジョブ](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を導入したので、慣れておく必要があります:

- リリース 3 週間前の月曜日にタスクが実行され、月次リリースポスト、MR、Issue を作成して、リリースポストをキックオフします ([パイプライン構成](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L280-288); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L9))
- <time datetime="16:00">UTC 4 pm (ET 11 am / PT 8 am)</time> に、コンテンツアセンブリを実行するタスクが実行されます ([スケジュールパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L290-299); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L373-399))

## リリースポストデプロイ中のヘルプの取得

### リリースポストマネージャー

ブロッカーを迅速に解決する能力を使い果たした場合は、`#release-post-prep` または `#release-post` チャネルでテクニカルアドバイザーをメンションしてヘルプを求め、リリースポストデプロイに遅延が生じる可能性があることを他の人に知らせます。
スクリーンショット、ビデオなどでブロッカーの詳細を説明します。問題の診断に役立ちます。問題が緊急かどうかを示します。緊急であることを示す場合、応答または解決が必要な明確な日時を提供します。

### テクニカルアドバイザー

リリースポストデプロイは、重要で時間に敏感な操作です。慎重かつ迅速に応答してください。

以下について最善の判断に従います:

- ご自身の介入のみで、またはリリースポストマネージャーと協力して回復できる軽微なインシデントの場合は、診断とインシデントを解決するために実行された手順を記録しながらそうします。これにより、プロセスと準備状況を改善できます。この情報を新しい Issue または現在のリリースポストレトロスペクティブの一部として配置します。
- GitLab.com に影響を与える主要なインシデントの場合は、インシデントがすでに宣言されているかどうかを確認し、そうでない場合は [インシデントの報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) を検討してください。

## ヘルプ対応

リリース週の月曜日のリリースポストコンテンツアセンブリと [リリース日](/handbook/engineering/releases/) のリリースポストデプロイは、さまざまな部門にわたる複数の依存関係があるため時間に敏感です。GitLab チームメンバーは、これら 2 つの時間に敏感な手順中に見つかったブロッカーを支援するために自発的に努力することがよくありますが、誰がアクティブなブロッキング問題を解決するために何をしているのかが混乱することがあります。私たちの対応努力の一部の手続き的な詳細を以下に示します。

### 応答および解決 SLO

両方の主要なリリースポストアクション (アセンブリとデプロイ) の時間に敏感な性質のため、初期応答時間は非常に迅速 (15 分以内) でなければなりません。問題の解決も同様に迅速に、可能であれば 60 分以内であるべきです。

### テクニカルアドバイザーの役割

テクニカルアドバイザーの役割は、途中で発生するブロッカーに対応する調整役割を意味します。彼らは単独で、または他のボランティアと並行してブロッカーを解決するために、自分が適切と思う方法で作業することがあります。彼らはまた、ブロッカーをクリアし、他のメンバーをアセンブルし、応答タスクを委任する責任があります。

### オーナーシップ、ポジティブコントロール、意図

任意の時点で、Issue のオーナーは 1 人だけであるべきです。誰が問題を調査して修復するアクションのコントロールを持っているかについて、明確な理解が必要です。ポジティブな交換、つまりコントロールを別の人に渡し、その人が今度は責任者になるようにします。
一度に 1 人だけがコントロールを持つべきです。同様に、アクションを取る人は意図を宣言する必要があります。「13.8 リリースポストブランチに master をマージし、競合を解決します。」

### タイムライン

1. リリースポストマネージャーがブロックされます。最初のブロック解除の試みが失敗します。
1. リリースポストマネージャーは、`#release-post-prep` チャネルに投稿し、ブロッカーの性質と重大度を詳細にこのリリースのテクニカルアドバイザーをメンションします。
1. テクニカルアドバイザーがメッセージを見て応答したことを確認します。
1. テクニカルアドバイザーは、`release-post-13.8-deploy-failure` のような問題に関するコミュニケーションのための専用のパブリック Slack チャネルをオプションで作成します。そのチャネルは、他の人がフォローできるように共有されます。
1. 必要に応じて、Zoom コールを開始します。新しく作成された Slack チャネルに Zoom ルームの招待を投稿します。
1. テクニカルアドバイザーは、リリースポストマネージャーからコントロールを引き継ぎます。
1. 調査が始まります。可能な限り見えるようにし、画面を共有します。Zoom セッションの記録を検討します。
1. アクションが取られます。
1. ブロッカーが解決されます。
1. Zoom を閉じます。
1. スクリーンショット、録画、ターミナル履歴、Slack のコメント、または問題の他の証拠を収集します。
1. インシデントを文書化し、履歴を預け入れ、是正措置または防止のための提案を追加するために、新しい Issue を開きます。Issue を現在のリリースポストレトロスペクティブにリンクします。

参照: [Google SRE Ch. 14](https://sre.google/sre-book/managing-incidents/)

## 進行中の技術サポートタスクの管理

リリースポストプロセスをサポートする技術的な問題には誰でも貢献できますが、その負担は主に現在のボランティアテックアドバイザーにかかっています。以下は、アクティブおよび今後の Issue を管理する方法を概説します。

### トラッキング

リリースポストの配信を促進するツールへの変更が必要な Issue には、`~Release Post::Tech Advisor` ラベルを使用します。マイルストーン中に発生する優先度の低い課題、またはレトロスペクティブ中に行われた決定の成果物として Issue を作成します。リリースポストの配信は迅速な解決と同期コミュニケーションを必要とするため、即時のインシデント応答のための Issue の作成は必須ではありません。

[このボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/3130926?&label_name[]=Release%20Post%3A%3ATech%20Advisor) は、これらのラベル付きの Issue を、おなじみのソフトウェア開発ワークフローに整理します。Issue で作業するときは、自分自身をアサインし、適切なワークフローラベルと毎週の非同期更新で Issue を最新の状態に保つよう努めます。テクニカルアドバイザーは、推奨を行い、Issue にマイルストーンを適用することを歓迎します。

### ハンドオフ

1 人のテクニカルアドバイザーが連続するマイルストーンで奉仕する可能性は低いです。したがって、リリースポストレトロスペクティブとキックオフの一部として、入ってくるテクニカルアドバイザーに Issue の状態について明確にコミュニケーションすることは良いアイデアです。これを行うには:

- 移行 Issue を作成します
- アクティブに作業している Issue について、アクション、優先順位付け、マイルストーンの変更を推奨します
- 自分が作業する予定がない場合は、自分のアサインを解除し、ワークフローラベルを変更して、ピックアップする必要があることを明確にします
- リリースポストでの最終ローテーション後、次のテックアドバイザーに連絡してコーヒーチャットを行い、彼らの今後のサイクルで優先度の高い Issue やバグについて役立つ情報を提供します

ボランティアローテーション後にアクティブな開発下の Issue に貢献し続けたい場合は、それは素晴らしいです。その場合は、アサインメントと Issue 更新を通じて、自分が DRI であることを明確にしてください。

---

## 月次リリースブログ投稿セクション

- [Notable Contributor](#notable-contributor)
- [機能](#features)
  - [最重要機能](#top-feature)
  - [主要機能](#primary-features)
  - 二次機能 (#secondary-features)
- [UI 改善、パフォーマンス改善、バグ修正](#ui-improvements-performance-improvements-and-bug-fixes)
- [Omnibus 改善](#omnibus-improvements) (二次機能として追加)
- [アップグレードに関する重要な注意事項](#important-notes-on-upgrading) (オプション)
- [非推奨化と削除](#deprecations-and-other-planned-breaking-change-announcements)

### Notable Contributor

Developer Relations Engineering チームは、リリースポストの GitLab Notable Contributor (旧 MVP) の指名、選択、追加のプロセスを所有します。Developer Relations Engineering の [GitLab Notable Contributor 選択プロセス](/handbook/marketing/developer-relations/engineering/notable-contributor-process/) を参照してください。

リリースポストマネージャーは、Notable Contributor 関連のタスクを持つことはなくなりました。

### 機能

リリースの最も関連性の高い機能は、[product manager](/handbook/product/categories/#devops-stages) によって投稿に含まれます。機能をその関連性と、ブログ投稿のどこに配置したいかに応じて分類します:

#### 最重要機能

リリースの最重要機能は、Notable Contributor セクションの直後、他の主要機能の前に言及されます。ドキュメントリンクが必要です。[TW リード](#tw-lead) は、このアイテムのコンテンツに細心の注意を払います。リリースの「目玉」機能であり、特に正しく取得することが重要です。

リリースポストマネージャーは `top` 機能を選択します。以下は、選択する機能のガイドラインとして使用できます:

`top` 機能は次のとおりであるべきです:

- ユーザーへの大きな影響がある。
- 現在の FY 製品投資テーマに合致する。
- すべてのデプロイメントタイプ (.com、SM、Dedicated) をカバーする。

`top` 機能は次のものでもよい:

- 有料ティア (premium または ultimate のみ) のみ。
- ベータ、ただし [実験的](#experimental-features) ではない。

リリースポストマネージャーは `top` 機能を選択し、`primary` 機能のレビューと一緒に #release-post でアサインされた Product VP からのフィードバックを依頼します。リリースポストマネージャーは、`top` または `primary` 機能のフィードバックを取り入れるべきです。

最重要機能を指定するには、選択した機能のリリースポストアイテム `.yml` ファイルで `primary` を `top` に変更します:

```yaml
features:
  top:
```

#### 主要機能

最重要機能の後の行に表示される、影響度の高い機能です。
すべてのリリースポスト [主要機能](#primary-features) は、[TW レビュアー](#tw-reviewers) によってレビューされる必要があります。
主要機能を特定するには、RP `.yml` ファイル内の `features` の直下で `primary` を探します:

```yaml
features:
  primary:
```

#### 二次機能

最重要機能および主要機能に続く、GitLab における他の関連性のある改善。すべてのリリースポストの二次機能は、[TW レビュアー](#tw-reviewers) によってレビューされる必要があります。

二次機能を特定するには、RP `.yml` ファイル内の `features` の直下で `secondary` を探します:

```yaml
features:
  secondary:
```

### コンテンツブロック

***注:** 「機能ブロック」は現在、機能だけでなく多くのものがあるため、コンテンツブロックとして知られています。たとえば、アップグレード警告、Omnibus インストーラーの改善、パフォーマンス強化が含まれます。*

YAML データファイルに機能やその他のコンテンツを追加するには、コンテンツブロックを使用します。レイアウトは Middleman の [テンプレートシステム](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/#template_engine) によって自動的に適用されます。

YAML データファイルのコンテンツブロックには、以下に例示するエントリが含まれます:

```yaml
features:
  primary:
    - name: "Do great things with this feature"
      available_in: [core, premium, ultimate]
      documentation_link: 'https://docs.gitlab.com/ci/pipelines/downstream_pipelines/#multi-project-pipelines'
      reporter: bikebilly
      stage: secure
      categories:
        - "Application Security Testing"
        - "SAST"
      issue_url: 'https://gitlab.com/gitlab-org/gitlab/issues/1234'
      description: |
        Use present tense, and speak about "you" instead of "the user."

        Describe how the new functionality is beneficial. Use phrases that start with, "In previous versions of GitLab, you couldn't... Now you can..."

        [Add another link](#link) if needed. Use no more than 125 words for your description.
```

#### 説明

**説明** のコンテンツは、Marketing 編集チームの [スタイルガイド](../../brand-and-product-marketing/brand/content-style-guide.md) に従う必要があります。

機能の説明に UI ナビゲーション指示を含めないでください。これらの指示は、関連するドキュメントに含まれるべきです。

#### 機能の優先度

コンテンツブロックの 2 行目は、機能が top、primary、または secondary 機能であるかどうかを示すべきです。主要機能の場合、上記の [サンプルコンテンツブロック](/handbook/marketing/blog/release-posts/#content-blocks) に示すように `primary` キーを使用します。二次機能の場合は、`primary` キーを `secondary` という単語に置き換え、最重要機能の場合は `primary` を `top` に置き換えます。

#### 機能名

- `name`: 機能名 (大文字)

すべての機能名には、短く強い名前を使用します。

#### 機能の可用性

機能に正しいバッジ (Free、Premium、Ultimate) を適用し、アドオン (Duo Pro、Duo Enterprise) を指定するには、以下のパターンを使用します。

##### サブスクリプションティア

機能が利用可能なサブスクリプションティアには、`available_in` を以下とともに使用します:

- GitLab Free の場合、`[core, premium, ultimate]`
- GitLab Premium の場合、`[premium, ultimate]`
- GitLab Ultimate の場合、`[ultimate]`

  **重要な注意**: GitLab Free ティアは、データファイルでは `core` としてリストされます。これは意図的なものであり、ページテンプレートはフロントエンドで適切なティア名を適用します。

##### オファリング

機能は、以下のフィールドを使用して、GitLab.com、GitLab Self-Managed、GitLab Dedicated、GitLab Dedicated for Government で利用可能にできます:

| フィールド                          | 説明                                                       | デフォルト |
| --------------------------------- | --------------------------------------------------------- | ------- |
| `gitlab_com`                      | GitLab.com での可用性を制御。                               | `true`  |
| `self_managed`                    | GitLab Self-Managed での可用性を制御。                      | `true`  |
| `gitlab_dedicated`                | GitLab Dedicated での可用性を制御。                         | `false` |
| `gitlab_dedicated_for_government` | GitLab Dedicated for Government での可用性を制御。           | `false` |

一般的なシナリオ:

- GitLab.com でのみ利用可能な機能の場合:

  ```yaml
    gitlab_com: true
    self_managed: false
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab Self-Managed でのみ利用可能な機能の場合:

  ```yaml
    gitlab_com: false
    self_managed: true
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab.com と GitLab Self-Managed で利用可能な機能の場合:

  ```yaml
    gitlab_com: true
    self_managed: true
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab Dedicated でのみ利用可能な機能の場合:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: true
    gitlab_dedicated_for_government: false
  ```

- GitLab Dedicated for Government でのみ利用可能な機能の場合:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: false
    gitlab_dedicated_for_government: true
  ```

- 両方の GitLab Dedicated オファリングで利用可能な機能の場合:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: true
    gitlab_dedicated_for_government: true
  ```

- すべてのオファリングで利用可能な機能の場合:

  ```yaml
    gitlab_com: true
    self_managed: true
    gitlab_dedicated: true
    gitlab_dedicated_for_government: true
  ```

##### `available_in` を使用したレガシー設定


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

下位互換性のため以下の設定は引き続き機能しますが、
前のセクションで説明した明示的なオファリングフィールドを使用すべきです。
明示的なフィールドは、ティアの組み合わせを解釈する必要なく、
各機能がどのオファリングをサポートするかを明確にします。

</div>


GitLab.com でのみ利用可能な機能の場合、`available_in:` を以下とともに使用します:

- GitLab.com Free の場合、`[free, silver, gold]`
- GitLab.com Silver の場合、`[silver, gold]`
- GitLab.com Gold の場合、`[gold]`

`gitlab_com: false` が設定されている場合、GitLab.com バッジを self-managed バッジと混在させることもできます:

- `available_in`:
  - GitLab.com のすべてのティアと self-managed の Premium および Ultimate ティアのみで可用性がある場合、`[free, silver, gold, premium, ultimate]` を使用し、`gitlab_com: false` を設定します
  - GitLab.com の Silver および Gold ティアと、self-managed のすべてのティアで可用性がある場合、`[core, premium, ultimate, silver, gold]` を使用し、`gitlab_com: false` を設定します
  - GitLab.com の Gold ティアと self-managed の Premium および Ultimate ティアのみで可用性がある場合、`[premium, ultimate, gold]` を使用し、`gitlab_com: false` を設定します

##### アドオン

サブスクリプションアドオンを指定するには、`add_ons: [ ]` フィールドにテキストを入力します。
各エントリはバッジを追加します。Duo Pro と Duo Enterprise の場合、両方を指定します。たとえば:

```yaml
add_ons: ["Duo Pro", "Duo Enterprise"]
```

Duo Pro のみが該当する場合、`add_ons: ["Duo Pro"]` を使用します。

##### フラグの後ろにある機能

機能はフィーチャーフラグの後ろで開発され、より広いオーディエンスに [徐々に利用可能](https://docs.gitlab.com/development/feature_flags/#feature-flags-in-gitlab-development) になることがあります。これが該当する場合、意図的にベータテスターを募集していない限り、リリースポストにアイテムを含めないでください。これにより、機能 Issue がアナウンスされたマイルストーンよりも前のマイルストーンでクローズされることがあります。

意図的にベータテストを求めている場合は、リリースポストと、機能を有効にしてフィードバックを提供する方法に関する手順を含めます。

#### ドキュメント

機能の **更新された** ドキュメントへのリンクを提供します。これは必須フィールドです。
これは、優先順位の順に次のいずれかになります:

- 利用可能な場合、**機能のドキュメント** リンク
- 専用のドキュメントが利用できない場合、**機能関連のドキュメント** リンク

機能が CE で利用可能であっても、常に EE ドキュメントにリンクします。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">重要</p>

リリースポストに記載されているすべての機能は、機能フリーズの前に時間内に出荷された
最新のドキュメントにリンクする必要があります。
*"Docs or it didn't happen!"*

</div>


#### 機能のレポーター

- `reporter`: コンテンツブロックをリリースポストに追加するユーザーの GitLab ハンドル (機能の作成者ではない)。
これは機能を担当する PM であるべきで、レビューフェーズで誰でも明確化を得るために誰に ping するかを知ることができます。
これは必須フィールドです。

#### ステージ

- `stage`: 機能が属する [ステージ](https://about.gitlab.com/stages-devops-lifecycle/) (小文字):

  - [`manage`](https://about.gitlab.com/stages-devops-lifecycle/)
  - [`plan`](https://about.gitlab.com/stages-devops-lifecycle/plan/)
  - [`create`](https://about.gitlab.com/stages-devops-lifecycle/create/)
  - [`verify`](https://about.gitlab.com/stages-devops-lifecycle/verify/)
  - [`package`](https://about.gitlab.com/stages-devops-lifecycle/package/)
  - [`release`](https://about.gitlab.com/stages-devops-lifecycle/release/)
  - [`configure`](https://about.gitlab.com/stages-devops-lifecycle/configure/)
  - [`monitor`](https://about.gitlab.com/stages-devops-lifecycle/monitor/)
  - [`secure`](https://about.gitlab.com/stages-devops-lifecycle/secure/)
  - [`software_supply_chain_security`](https://about.gitlab.com/stages-devops-lifecycle/govern/)
  - [`systems`](/handbook/product/categories/#systems-stage)

ステージは、製品ティアのバッジの隣にアイコンとして表示され、正規表現を使用してステージの Web ページにリンクします:
`https://about.gitlab.com/stages-devops-lifecycle/<stage>/`. [カスタムステージ URL](#custom-stage-url) でオーバーライドすることもできます。

`stage` は必須フィールドですが、機能がいずれのステージにもまったく属さない場合、`stage` 行を削除でき、何も出力されません。

アイコンを表示することに加えて、`stage` を設定すると、PM は他のユーザーが報告したものでも、自分のエリアに関連するものを簡単に見つけることができます。


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

`team` は 2018 年 12 月 [非推奨化](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/17198)
され、GitLab 11.6 では `stage` に置き換えられました。フォローアップのイテレーションで、それぞれの [アイコン](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/17210) が導入されました。

</div>


##### カスタムステージ URL

DevOps ライフサイクル外のステージ (たとえば Growth など、他のステージと同じパス (`/stages-devops-lifecycle/<stage>`) を持たないもの) については、デフォルトのパスをオーバーライドするためにコンテンツブロックに `stage_url` を追加する必要があります:

```yml
# Growth
stage: growth
stage_url: '/handbook/product/growth/'
```

#### カテゴリ

- `category` (配列): 機能が属するカテゴリ。これらは通常、機能の Issue にラベルとして付けられます。カテゴリのリストは [`/data/categories.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/categories.yml) で見つけることができます。
データファイルに記述された通りにカテゴリ `name` を正確に追加してください。

#### 関連 Issue、エピック、マージリクエスト、または Web ページ

- `issue_url`: 機能が議論および開発されている GitLab.com の Issue へのリンク。このリンクを使用して、レビュアーは特定の機能のステータスを一貫性および追加の参照のために確認できます。広いコミュニティが変更に関するコンテキストを取得できるよう、機密 Issue へのリンクは避けてください。
これは必須フィールドですが、`mr_url`、`issueboard_url`、または `epic_url` で置き換えることができます。
リンクは常に単一引用符で囲んでください (`'https://example.com'`)。複数のリンクは許可されます。
- `issueboard_url`: 機能に関連する Issue ボードへのリンク。必須ではありませんが、利用可能です。
- `mr_url`: 機能を導入した MR へのリンク。必須ではありませんが、利用可能です。
- `epic_url`: 機能に関連するエピックへのリンク。必須ではありませんが、利用可能です。
- `webpage_url`: 機能のマーケティング Web ページへのリンク。必須ではありませんが、利用可能です。

#### 機能の説明

- `description: |`: このエントリに機能の説明を追加します。
パイプラインシンボル `|` の下の行にカーソルが意図したとおりにあることを確認してください。
すべての `description` フィールドは [Markdown](https://about.gitlab.com/community/markdown-guide-middleman/) を完全にサポートしており、心配する必要があるのはインデントを尊重することだけです。

### カバー画像のライセンス

サードパーティのカバー画像が使用されている場合、[ブログハンドブック](../../blog/_index.md#preparing-images) に従って、カバー画像のソースを提供する必要があります。`...release.html.md` ブログ投稿の最後にこの情報を表示するには、以下のエントリを入力します:

```yaml
cover_img:
  image_url: '#link_to_original_image'
  licence: CC0 # which licence the image is available with
  licence_url: '#link_to_licence'
```

画像が GitLab によって生成された場合、著作権情報は不要であり、`rebrand_cover_img` を `true` に設定した後、`.html.md` ファイルから削除できます。

### アップグレードに関する重要な注意事項

*Distribution Product Manager によって追加されます。*


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

「アップグレードバロメーター」セクションは、GitLab 11.8 で [非推奨化](https://gitlab.com/gitlab-com/gl-infra/delivery/issues/124) され、「GitLab X.Y へのアップグレードに関する重要な注意事項」と呼ばれるセクションに置き換えられました。

</div>


アップグレード警告は、リリースポストに **重要なアップグレード注記を説明するためにのみ** 追加すべきです。たとえば:

- マイグレーション、ポストマイグレーション、バックグラウンドマイグレーション
- ダウンタイム
- 特殊なケース

特定のリリースに関連する情報がない場合、このセクションを投稿に追加しないでください。

### UI 改善、パフォーマンス改善、バグ修正

リリースポストは、以下のラベルでフィルタリングされた、関連するマイルストーンのクローズされた Issue またはマージリクエストに直接リンクします:

- バグ修正: `type::bug` `workflow::complete` `workflow::verification` `workflow::production`
- パフォーマンスの改善: `bug::performance` `workflow::complete` `workflow::verification` `workflow::production`
- UI の改善: `UI polish` `Beautifying our UI`

[`workflow::complete` ラベルの追加](/handbook/product-development/how-we-work/product-development-flow/#required-statuses-2) を採用する間、`workflow::verification` と `workflow::production` が含まれています。`workflow::complete` は、Issue がユーザーによって配信されたとみなされることを示す望ましいラベルです。

### Omnibus 改善

*Distribution Product Manager によって追加されます。*

このセクションには、パッケージ化されたソフトウェアに関連する更新、新機能、Omnibus パッケージを使用してデプロイされた self-managed GitLab インスタンスの管理に関連する新しいコマンドが含まれているべきです。たとえば、(`gitlab-backup`)。

### Extras

*Product Manager が追加し、Engineering Manager によってマージされます。*

他のコンテンツタイプにあまりフィットしないアナウンスメントがある場合、`extras` コンテンツブロックを使用できます。アナウンスメントがこのタイプにフィットすると思う場合は、ガイダンスのために `#release-post` でリリースポストマネージャーと `@justin` に ping してください。

例は [`/data/release_posts/unreleased/samples/extras.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/extras.yml) ファイルで提供されています。

```yaml
---
extras:
  - title: "Example title"
    description: | # supports markdown
      Description
```

複数のブロック:

```yaml
extras:
  - title: "Example title one"
    description: | # supports markdown
      Description one
  - title: "Example title two"
    description: | # supports markdown
      Description two
```

MR に以下のラベルを適用します:

- `release post item`
- `release post`
- `release post item::extras`

レビューには、ステージにアサインされた [テクニカルライター](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) を選択します。

MR が承認されたら、マージする前に `Ready` ラベルを追加します。

### 非推奨化、削除、破壊的変更

非推奨化、削除、破壊的変更のアナウンスは、[GitLab Docs](https://docs.gitlab.com/update/deprecations/) と、アナウンスメントの対応するマイルストーンのリリースポストに表示されます。

破壊的変更のアナウンスや進行に先立ってリーダーシップの承認が必要なため、[破壊的変更、非推奨化、削除のガイダンス](https://docs.gitlab.com/development/deprecation_guidelines/) を確認し、従ってください。

#### マイルストーンの期日

- リリース 3 週間前の木曜日: アナウンスメント MR が作成済み
- リリース 1 週間前の木曜日: MR がテクニカルライターにアサイン済み
- リリース 1 週間前の木曜日: MR がマージ済み

#### ウォークスルービデオ

このビデオは、アナウンスメントを行うプロセスを説明します:

<figure class="video_container">
    <iframe src="https://www.youtube.com/embed/9gy7tg94j7s" title="Overview of deprecation and removal of features in GitLab releases" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

#### 非推奨化およびその他の計画された破壊的変更のアナウンス

- Product Manager または Engineering Manager によって追加され、Technical Writer によって計画された削除日の少なくとも 3 マイルストーン前にマージされます。

  *たとえば、意図された削除マイルストーンが `17.0` で、以下のリリーススケジュール: `16.9, 16.10, 16.11, 17.0` の場合、`16.9` は意図された削除に先立つ 3 番目のマイルストーンであり、非推奨化アナウンスメントのための最後のマイルストーンです。*
- 各アナウンスメントについて別の MR を作成します。
- 機能が製品から削除されるか、破壊的変更が実装されるまで、`features.yml` ファイルを編集しないでください。
- 1 つの MR に複数のアナウンスメントをまとめたい場合 (たとえば、「all or none」として同じ日に発生する依存関係のある非推奨化のグループの場合) は、まずリリースポストマネージャーに連絡して話し合ってください。

##### アナウンスメントの作成

1. [`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトに新しいブランチを作成します。
1. [テンプレートファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/deprecations/templates/example.yml) をコピーし、[`data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) フォルダに保存します。
1. ファイル名を `XX-YY-feature-name.yml` とします。`XX-YY` は最初のアナウンスメントのマイルストーンです。たとえば、`14-7-pseudonymizer-deprecation.yml`。
1. [**Deprecations**](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md) MR テンプレートを使用して、変更の説明のためにマージリクエストを作成します。
   1. タイトルは、非推奨化または計画された変更を明確に説明する必要があります。たとえば:
      - "The `confidential` field for a `Note` is deprecated."
      - "The maximum number of characters in a job name will be limited to 250."
      - "Access tokens with no expiration date will be changed to have an expiration of one year."
      - "The `omniauth_crowd` gem is deprecated."
   1. 説明は次のものでなければなりません:
      - 明確で簡潔。
      - 変更の詳細または理由について簡単に説明する。
   1. 説明はまた、変更の結果としてユーザーが何をしなければならないかを説明する必要があります。言い換えれば、エントリはユーザーまたは管理者によって *アクション可能* で **なければなりません**。たとえば:
      - "Use the `internal` keyword instead of `confidential`."
      - "Reduce the number of characters in all job names to be 250 characters or less."
      - "Give an expiration date to any access tokens that have no expiration date."
      - "Stop using the `omniauth_crowd` gem. It will be removed and will not be replaced."
   1. 「機能 A は非推奨化され、削除されます。代替機能がリリースされるまで待って、その時点で切り替えてください」のようなアナウンスを避けます。
      エントリがアクション可能でない場合、ユーザーが変更に対処するためのアクションが利用可能になるまで、非推奨化または変更のアナウンスを遅らせます。
1. テンプレートで推奨されているとおりにレビュアーをアサインします。
1. `breaking_change` 値を `true` に設定し、MR に `~"breaking change"` ラベルを追加します。非推奨化または計画された変更が破壊的変更を引き起こさない場合 (まれですが、可能です)、`false` を使用し、ラベルは追加しません。
1. [ステージにアサインされた](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) テクニカルライターに MR をアサインします。

##### アナウンスメントのレビューとマージ

1. TW レビュアーはコンテンツをレビューし、[非推奨化ドキュメントを更新する](#update-the-deprecations-doc) コミットを追加し、リリース 1 週間前の木曜日までに MR をマージします。マージ後、アナウンスメントは [非推奨化ドキュメントページ](https://docs.gitlab.com/update/deprecations/) で 1 時間以内に表示可能になります。
1. MR がカットオフ日に間に合わないリスクがある場合、重複した MR を開き、ターゲットブランチをリリースされたバージョン `X.Y` と一致する `X-Y-stable-ee` に設定します。問題がある場合は、`#mr-buddies` でヘルプを依頼するか、[MR のバックポートのフルプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/process_new.md#gitlab-project) を参照してください。

#### サポート終了期間のアナウンス

[非推奨化テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/deprecations/templates/example.yml) は、機能が削除される前にサポートを終了するオプションを提供します。このオプションは特殊な状況でのみ使用すべきであり、一般的な使用には推奨されません。ほとんどの機能は非推奨化され、その後削除されるべきです。

サポート終了マイルストーンは、非推奨化アナウンスメントの少なくとも 3 マイルストーン *後* でなければなりません。たとえば、非推奨化アナウンスメントが `15.1` で行われた場合、サポート終了マイルストーンは早くても `15.4` でなければなりません。サポート終了マイルストーンと削除マイルストーンの間のギャップに要件はありません。

サポート終了マイルストーンがアナウンスされた場合、それは [非推奨化ページ](https://docs.gitlab.com/update/deprecations/) の非推奨化アナウンスメントのタイトルの下に表示されます。サポート終了マイルストーンは、現在リリースポストには表示されません。

**サポート終了期間を定義するタイミング**

- 非推奨化と計画された削除の間に長い期間がある場合。
- 拡張された非推奨化期間中に機能をサポートすることが、エンジニアリングの速度に影響を与える場合 (肥大化、依存関係管理など)。

**サポート終了の伝達**

サポート終了期間を宣言することを決定した場合:

- 自分の開発グループの [Support Stable Counterpart](/handbook/support/support-stable-counterparts/) ([製品カテゴリページ](/handbook/product/categories/) にも記載) を確認し、`end_of_support_milestone` に値を追加する MR でタグ付けします。
- グループに Support Stable Counterpart がない場合は、ステージまたはセクションの Support Counterpart を探します。なければ、`#support_leadership` Slack チャネルに、レディネス Issue へのリンク (次の行) とともに投稿してください。
- [Support コミュニケーションガイダンス](/handbook/support/internal-support/#contacting-users-about-gitlab-incidents-or-changes) に従って Support レディネス Issue も開いてください。

#### アナウンスメントエントリの編集

このプロセスは、アナウンスメントエントリを作成するのに非常に似ています。違いは、YAML ファイルがすでに存在することです。

既存のエントリを編集するには:

1. [`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトに新しいブランチを作成します。
1. [`data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) ディレクトリで `.yml` ファイルを見つけて編集します。
1. 変更のためにマージリクエストを作成し、変更には [Deprecations](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md) MR テンプレートを使用します。
1. テンプレートで推奨されているとおりにレビュアーをアサインします。
1. [ステージにアサインされた](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) テクニカルライターに MR をアサインします。(今後のリリースのエントリを修正する場合は、リリース 1 週間前の木曜日までに)
1. TW レビュアーはコンテンツをレビューし、[ドキュメントを更新する](#update-the-deprecations-doc) コミットを追加して、MR をマージします。(リリース 1 週間前の木曜日までに)

---

#### アップグレード

*Product Manager または Engineering Manager によって追加され、Engineering Manager によってマージされます。*

このバージョンへのアップグレード時に管理者が考慮すべき点を説明します。これには、潜在的なデータ損失に関する警告、事前のメンテナンスの推奨、その他の同様の懸念が含まれます。

将来のアップグレードに対する考慮事項は、[非推奨化](#deprecations-and-other-planned-breaking-change-announcements) セクションに記載すべきです。

*1 つの注目すべき例は %12.10 で、[管理者は Postgres 10 から Postgres 11 へ移行する必要がありました](https://about.gitlab.com/releases/2020/04/22/gitlab-12-10-released/#upgrade)。*

アップグレードアイテムは通常のリリースポストアイテムと同じディレクトリに入ります。アップグレード通知を作成するには、[アップグレードテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/upgrade_sample.yml) を参照してください。各通知について、`/data/release_posts/unreleased/` フォルダに 1 つの .yml ファイルを作成し、以下のコンテンツブロックを使用します:

```yaml
upgrades:
  - reporter: bikebilly # item author username
    description: |  # example (supports markdown)
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Veritatis, quisquam.
```

MR に以下のラベルを適用します:

- `release post`
- `release post item`
- `release post item::upgrades`

レビューには、ステージにアサインされた [テクニカルライター](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) を選択します。

MR が承認されたら、マージする前に `Ready` ラベルを追加します。

## メジャーリリース

メジャーリリースは年に 1 回発生し、新しいバージョニングサイクルを開始します: 14.0 - 14.10 --> 15.0 など。メジャーリリースのコンテンツへの貢献と管理は、[月次リリース](#schedule) と同じスケジュールに従います。ただし、メジャーリリースの場合、リリースポストマネージャーは、メジャーリリースのための余分な活動とニーズのため、Social、PR、Marketing チームから余分な調整とコミュニケーションを期待できます。

### 破壊的変更の伝達

Product Manager と Engineering Manager は、リリースする破壊的変更のコミュニケーション計画の責任があります。メジャーリリースについては、すべての破壊的変更を 1 か所で説明する [ブログ投稿](https://about.gitlab.com/blog/a-guide-to-the-breaking-changes-in-gitlab-18-0/) も公開します。

## コンテンツの追加

Markdown をサポートするエントリには、すべてのブログ投稿と about.GitLab.com の Web ページで使用するように、通常の [Markdown Kramdown](https://about.gitlab.com/community/markdown-guide-middleman/) を使用します。

## 技術的側面

リリースポストは多数の小さなデータファイルから作成され、テンプレートとヘルパーを使用して最終形式にレンダリングされます。

コンテンツファイルは、[始め方](#getting-started) セクションで説明されているとおり、そのリリースに固有のコンテンツで毎リリース作成する必要があります。

### 始め方

テンプレートとヘルパーファイルは、多数のコンテンツファイルからブログ投稿をレンダリングするために使用され、ほとんどのリリースで変更する必要はありません。

- **テンプレート:**
  - [レイアウト (Haml) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/layouts/release.haml):
    最終的な HTML ファイルのレイアウトを作成し、以下の include ファイルを必要とします。
  - [Include (Haml) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/sites/uncategorized/source/includes/release.html.haml):
    カスタムスタイルを適用して投稿のコンテンツを構築します。そのマークアップには、セマンティックな SEO の改善が含まれています。
- **ヘルパー:**
  - [ヘルパー (Ruby) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/helpers/release_post_helpers.rb): リリースポストがレンダリングされているとき、ヘルパーはすべてのリリースポストアイテムを変数に結合し、include (Haml) ファイルで使用されます。ヘルパーの出力は、GitLab 12.8 まで使用された単一のデータファイルプロセスと一貫しています。
- **コンテンツ:**
  - **データ (YAML) ファイル**: 各ファイルには、1 つの機能、改善、または非推奨化のコンテンツが含まれます。データファイルは [unreleased](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased) または [data/deprecations](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) ディレクトリに追加された後、[release](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/12_8) ディレクトリに移動されます。ヘルパー (Ruby) の目的は、リリースポストをレンダリングするときにこれらのファイルを結合することです。
  - **ブログ投稿 (Markdown) ファイル**: ブログ投稿ファイルには、ブログ投稿の紹介とフロントマターが含まれます ([テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/blog/monthly_release_blog_template.html.md)、[例](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/sites/uncategorized/source/releases/posts/2017-05-22-gitlab-9-2-released.html.md))。

テンプレートシステムがどのように機能するかをさらに学ぶには、[モダンな静的サイトジェネレーター](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/) の概要を読んでください。

プロジェクトをローカルで実行するには:

1. ターミナルで `www-gitlab-com` プロジェクトに移動します。クローンした場所によって異なります:

   ```sh
   cd /path/to/www-gitlab-com
   ```

1. 依存関係をインストールします:

   ```sh
   bundle install
   yarn
   ```

1. [Middleman を実行](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md#run-middleman) します。
1. `https://about.gitlab.com/` の代わりに `https://127.0.0.1:4567/` を使用して、リリースポストをローカルで表示します。たとえば、`https://127.0.0.1:4567/releases/2021/09/22/gitlab-14-3-released/`。

### 機能の順序

重要な注意: 機能の順序は、リリースポストマネージャーの承認なしに変更すべきではありません。

主要機能のコンテンツブロックはファイル名でアルファベット順にソートされるため、必要に応じて、各個別のコンテンツブロックのファイル名に 2 桁の数値プレフィックスを追加することで順序に影響を与えることができます。たとえば、`01_filename.yml`、`02_another_file.yml` など。

二次機能はまずステージごとにグループ化され、各ステージ内ではタイトルでアルファベット順にソートされます。指定されたステージのない機能は最後にグループ化されます。リリース 13.10 以前では、バグ修正、パフォーマンスの改善、ユーザビリティのセクションもこの自動ソート順序の一部でした。リリース 13.11 から、バグ、パフォーマンスの改善、ユーザビリティのセクションは二次機能から三次機能に変更されたため、現在は自動的に二次機能の後、非推奨化、削除、アップグレードセクションの前に来ます。

時には、二次機能のコンテンツの高さが、左または右の列で大幅に長くなり、空白が生じることがあります。その場合、エントリの yml ファイルに `force_left: true` または `force_right: true` を追加することで、コンテンツのブロックを左から右、または逆に強制できます。([このサンプル MR を参照](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/100024/diffs))。

### リリースポストブランチ作成 Rake タスク

リリースポストブランチと、ほとんどの関連するディレクトリ、ファイル、Issue、MR は、[`release:start` Rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/lib/tasks/release_post.rake) がリリース 3 週間前の月曜日に自動的に実行されるときに自動的に作成されます。
スクリプトの実行に失敗した場合、またはパイプラインの問題がある場合、`bundle exec rake release:start` を自分で実行して、以下のことを発生させることができます:

1. GitLab バージョン (たとえば 13.10) と、ISO 形式のリリースポスト日付 (たとえば 2021-03-22) を尋ねられます。スクリプトはそれら 2 つの値を読み取り、次のステップで言及されているテンプレートで使用します。
   いずれかが欠けている場合、スクリプトは停止して終了します。
1. ブランチ名は `release-X-Y` に設定され、上記で指定したバージョンに基づきます。
1. スクリプトはリリースブランチがすでに存在するかどうかをチェックします。存在する場合は、停止して終了します。スクリプトを再実行したい場合は、ローカルブランチを削除する必要があります (`git branch -D release-X-Y`)。
1. Git は現在の変更があれば stash し、`master` をチェックアウトし、`origin` (これはデフォルトのリモートで `gitlab-com/www-gitlab-com` リポジトリを指している必要があります。`git remote -v` で確認できます) からプルします。
1. その後、スクリプトは新しいリリースブランチを作成します。
1. [紹介](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/sites/uncategorized/source/releases/posts) は、`doc/templates/blog/monthly_release_blog_template.html.md` のテンプレートを使用して作成されます。最初のステップで指定したバージョンでスタブの X.Y 値を置き換え、著者の名前とハンドルを追加します。
1. リリースのデータディレクトリは `data/release_posts/X_Y/` の下に作成されます。
   存在する場合、スクリプトは停止して終了します。スクリプトを再実行したい場合は、このディレクトリを削除する必要があります。
1. [Notable Contributor (MVP) テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/mvp.yml) は、Notable Contributor (MVP) ファイル (`data/release_posts/X_Y/mvp.yml`) を作成するために使用されます。
1. レトロ Issue が生成され、[Release-Post-Retrospective テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/Release-Post-Retrospective.md) を使用してアサインされます
1. スクリプトは、上記のすべての MR と Issue で `data/release_post_managers.yml` のコンテンツを使用して以下の値を更新するための検索と置換を実行します:

- `@release_post_manager`: `manager`
- `@tw_lead`: `structural_check`
- `@tech_advisor`: `technical_advisor`
- `@pmm_lead`: `messaging`

1. スクリプトは、現在の日付とマイルストーンに基づいて、`X-Y`、`X_Y`、`YYYY`、`MM`、`DD`、`_MILESTONE_` の出現を更新するための検索と置換を実行します。

### リリースポストアイテムジェネレーター

[リリースポストアイテムジェネレーター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/release-post-item) は、Issue とエピックを使用してリリースポストアイテムの作成を自動化します。Issue とエピックは、どのような問題が解決されているかと、それがどのように行われているかの真実の単一ソースであり、明確な説明と良いラベル付けが必要です。スクリプトはこの情報を使用して、リリースポストアイテム MR を事前入力します:

| Issue/エピック要素                                       | リリースポストアイテム属性 (yml) または MR 要素 |
|---------------------------------------------------------|-------------------------------------------------|
| Issue タイトル                                          | `title:`                                        |
| ラベル `devops::`                                        | `stage:`                                        |
| ラベル `group::`                                         | グループプロダクトマネージャーをレポーターとしてアサインし、[関連するチームメンバーを MR でタグ付けします](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) |
| ラベル `category:`                                       | `categories:`                                   |
| ラベル `release post item::` (`primary`/`secondary`)     | コンテンツブロックタイプ `primary:` または `secondary:`   |
| ラベルティア (例: `GitLab Core` `GitLab Premium` `GitLab Ultimate`) | `available_in:`                                 |
| Issue Web URL (例: `/gitlab-org/gitlab/-/issues/####`)  | `issue_url:`                                    |
| `### Release notes` 下の Issue 説明                     | `description:` には `documentation_link` 以外のすべてのテキストが含まれる <br><br>`documentation_link:` は、`https://docs.gitlab.com*` を含む `### Release notes` セクションの最初の URL |

**重要な注意:** GitLab Free ティアは、データファイルでは `core` として参照されます。これは意図的なものであり、ページテンプレートはフロントエンドで適切なティア名を適用します。

ジェネレータースクリプトが正しく実行されるようにするには、以下のプロセスに従ってください:

1. Issue が開いていることを確認します。
1. Issue が機密でないことを確認します。機密 Issue にリンクする必要がある場合、[リリースポストアイテムジェネレーター](/handbook/marketing/blog/release-posts/#release-post-item-generator) は現在機密 Issue から MR を作成しないため、リリースポストアイテムマージリクエストを手動で作成する必要があります。
1. Issue またはエピックを、`### Release notes` のコンテンツ (ドキュメントリンクを含むが、これらは後で MR で常に追加／更新できる) で更新し、特に `Description:` と `Documentation:` の両方が含まれているようにします。
1. `### Release notes` の下のコンテンツに、プレーンテキストのみがあることを確認します。追加の書式設定がある場合、スクリプトは失敗します。
1. `devops::`、`group::`、`category:`、ティア (例: `GitLab Core`) ラベルが適用されていることを確認します
1. `release post item::` スコープラベルの 1 つを適用します。これにより、ジェネレータースクリプトが次に実行されたとき (1 時間に 1 回) にあなたの Issue を取得します

スクリプトが実行されると、`/gitlab-com/www-gitlab-com` プロジェクトで draft MR が開かれ、グループ PM にアサインされます。そこから MR の編集とレビューを続けることができます。

最後にパイプラインが実行された (そしてあなたの Issue を取得したか) を確認するには、[こちら](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) でスケジュールパイプラインを検査できます。

[このオーバービュービデオ](https://www.youtube.com/watch?v=rfn9ebgTwKg) を見て、`release post item generator` の使用方法を実演しているのを確認することもできます。

*注: `release post item generator` で問題を見つけた場合、質問は Slack #release-post に投稿するか、リリースポストレトロスペクティブ Issue にフィードバックを追加し、リリースポストの [テクニカルアドバイザー](#technical-advisors) をタグ付けしてください。

ジェネレータースクリプトはコンピューターでも実行できます。

1. `www-gitlab-com` プロジェクトをクローンし、`bundle install` を使用して依存関係をインストールします
1. GitLab プライベートアクセストークンと Issue URL を提供してスクリプトを実行します:

   ```shell
   PRIVATE_TOKEN=<token> bin/release-post-item --no-local <issue_url>
   ```

完全なドキュメントについては `bin/release-post-item --help` を参照してください。

### リリースポストアイテムリンティング

[リリースポストアイテムリンター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/validate-release-post-item) は、`data/release_posts/unreleased` ディレクトリにマージされるすべてのアイテムが最小限の標準を満たしていることを検証します。具体的には、以下を確認します:

- YAML が解析できる
- [スキーマ]( https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/schemas/releasepost.schema.json) への適合
  - 各ファイルには、正確に 1 つのアイテム (たとえば、機能または非推奨化) が含まれる
  - コンテンツブロックには有効なフィールドがある
  - 非推奨化には有効なフィールドがある
- `stage` フィールドが `data/stages.yml` の有効なステージキーにマップされている
- `categories` リストには `data/categories.yml` の有効なカテゴリ名のみが含まれる

以下は確認しません:

- `issue_url` が提供されているかどうか。他の代替手段があるためです

スキーマは [Rx](https://rx.codesimply.com/index.html) を使用して実装されています。

### 非推奨化 rake タスクのトラブルシューティング

rake タスクの実行に問題がある場合、以下のトラブルシューティング手順を確認できます:

- Ruby のバージョンが [`gitlab-org/gitlab` プロジェクトの Ruby バージョン](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.ruby-version) と一致することを検証します。`ruby -v` で確認できます。ターミナルから `./bin/doctor` を実行することで、セットアップを検証することもできます。
- `bundle install` を実行して gem を更新します。
- bundler バージョンが古い可能性があるため、`gem install bundler:2.1.4` を実行してみてください。

### deprecations.md でのマージ競合の解決

非推奨化または削除 MR のブランチを rebase した場合、`deprecations.md` ファイルで複数のマージ競合が発生する可能性があります。IDE から個々のマージ競合を解決しないでください。代わりに、削除 rake タスクを使用してファイルを更新し、マージ競合を解決します。

マージ競合を解決するには:

1. `gitlab-org/gitlab` プロジェクトでチェックアウトしたブランチで、非推奨化 Rake タスクを実行します:

   ```sh
   # For deprecations
   bin/rake gitlab:docs:compile_deprecations
   ```

1. 変更をステージします:

   ```sh
   git add .
   ```

1. rebase を続行します:

   ```sh
   git rebase --continue
   ```

rebase を続行した後にマージ競合が発生した場合、`deprecations.md` がまだ最新の `yml` 変更と同期していない可能性があります。これが発生した場合、マージ競合がクリアされるまで再度手順を完了します。

### リリースポストマージリクエストテンプレート

[リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) は、すべてのリリースのチェックリストです。最新の状態を保ちましょう! :)

### `www-gitlab-com` への非推奨化と削除のインデックスの追加

リリースポストに非推奨化と削除のリストを表示するには、`gitlab` プロジェクトからインデックスを生成し、`www-gitlab-com` プロジェクトの `data/release_posts/xx_y` に追加する必要があります。

1. `gitlab` プロジェクトでターミナルを開きます
1. `bin/rake gitlab:docs:write_deprecations` を実行します
1. 入力を促されたら関連するマイルストーンを入力します
1. 生成されたファイルを `www-gitlab-com` プロジェクトの対応する `/data/release_posts/xx_y` に手動でコピー＆ペーストします
1. 非推奨化インデックスの最初の行に `deprecations:` を追加します
1. 両方のファイルで `name:` のすべてのインスタンスを `feature_name:` に変更します

---

## パッチおよびセキュリティリリースポスト

Delivery チームは、[パッチ](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/blog-post.md) と [セキュリティリリース](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#critical-security-releases) のリリースポストを作成する責任があります。

リリースポストは `sites/uncategorized/source/releases/posts` にある必要があります。パッチおよびセキュリティリリースの場合、タイトルでそれらを指定し、正しい [カテゴリ](../#categories) を追加してください:

- パッチリリース:
  - `title: "GitLab Patch Release: x.y.z and x.y.z"`
  - `categories: releases`
- セキュリティリリース:
  - `title: "GitLab Security Release: x.y.z and x.y.z"`
  - `categories: releases`

## What's New エントリの MR の作成

[プロセスのビデオウォークスルー](https://youtu.be/GxKooIAknM8)

**「What's new」は、GitLab のナビゲーションメニューの `?` アイコンをクリックし、「What's new」を選択することで確認できます。**

[What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) MR は、リリース週の火曜日にリリースポストマネージャーによって開始され、リリース週の水曜日に最終確認され、通常は [リリース日](/handbook/engineering/releases/) でリリースポストが公開されてから 2 〜 4 時間後に `maintainer` によってマージされます。マージの正確なタイミングは、それをマージできる `maintainer` の可用性に依存します。


<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>

以下の手順は、完全な手動プロセスを概説しています。リリースポスト MR の説明には、利用可能な部分的な自動化の手順が記述されています。

</div>


1. リリース週の火曜日に、リリースポストマネージャーは What's New MR を作成します。
1. RPM は、リリースポストの最終／承認済みのすべての主要アイテムを取り出し、「What's New」で特集します
    - 選択されたアイテムは、リリースポストの主要機能と一致できますが、必須ではありません。RPM が独自の選択を行うことに自信がある場合、そうすることができます。
    - 無料および有料ユーザーの両方が利用できる機能のバランスを目指すことが推奨されます。Ultimate 機能のみを含めると、Ultimate 以外のユーザーが関与をやめる可能性があります。
1. リリースポストマネージャーは、`gitlab.com/gitlab-org/gitlab` プロジェクトに新しい MR を作成します
   1. この [テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/whats_new/templates/YYYYMMDD0001_XX_YY.yml) を使用して、`gitlab/data/whats_new` ディレクトリに新しいファイルを作成します。
   1. ファイル名を `YYYYMMDD0001_XX_YY.yml` とします - たとえば、13.4 エントリのタイトルは `202009300001_13_04.yml` です。
   1. リリースポストアイテムにあるコンテンツを使用して、What's New のためにコンテンツを複製します。
      1. 説明をトリミングする必要があることがあります。これらは短く、一般的に単一の段落であるべきだと覚えておいてください。
      1. SaaS のみの機能は、リリースポストアイテムで使用される `[free, silver, gold]` または `core` の代わりに、What's New MR で `[free, premium, ultimate]` を使用する必要があります。私たちは将来この相違をなくしますが、今のところ、RPM は What's New MR を作成するときに必要に応じて値を更新する必要があります。
      1. ステージ名は大文字小文字を区別するため、パイプラインがパスするためにステージが大文字になっていることを確認してください。
1. 関連するリリース `milestone` (「expired」と表示されていてもよい) と、`documentation`、`type::maintenance`、`whats new`、`release post` というラベルを適用します。
1. リリース週の火曜日に、MR がレビュー準備ができたとき、`@[今月レビューしている PLT メンバーの名前]` をレビュアーとしてアサインし、MR で `@mention` してリリース週の水曜日までにレビューを完了するよう依頼します。今月レビューしている PLT メンバーの名前は [リリースポストスケジューリングページ](/handbook/marketing/blog/release-posts/managers/) で確認できます
1. リリースポストが公開された後、私たちの標準の [コードレビュープロセス](https://docs.gitlab.com/development/code_review/) に従って MR がレビューされ、`maintainer` によってマージされるようにします。MR が時間に敏感であることをメンテナーに直接伝えて、不要な遅延を回避することが推奨されます。
1. 重複した MR を開き、ターゲットブランチをリリースされたバージョン `X.Y` と一致する `X-Y-stable-ee` に設定します。前の MR をマージしたのと同じメンテナーにアサインします。この 2 番目の MR は、バージョン `X.Y` への追加リリースにこの「What's New」更新が含まれるようにします。問題がある場合は、`#mr-buddies` でヘルプを依頼するか、[MR のバックポートのフルプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/process_new.md#gitlab-project) を参照してください。

**重要: MR は、リリースポストが [リリース日](/handbook/engineering/releases/) に公開されるまでマージしないでください。** リリースポストが公開された後、しかしマージする前に、ブランチをチェックアウトし、すべてのリンクが正確であり、What's New アイテムが最終リリースポストの一部であることを確認するため、GDK でコンテンツを確認する必要があります。それが確認されたら初めて、MR をマージする必要があります。通常、これは What's New コンテンツが、メンテナーレビューに依存して [リリース日](/handbook/engineering/releases/) の翌日または 2 日後にライブになることを意味します。

## 関連

### ページ

- [GitLab the product](/handbook/product/categories/gitlab-the-product/#gitlab-the-product)
- [非推奨化、削除、破壊的変更に関する一般的なガイダンス](https://docs.gitlab.com/development/deprecation_guidelines/)
- [リリースポストボランティアスケジュール](managers/)
- [セキュリティと月次リリース](https://about.gitlab.com/releases/categories/releases/)
- [リリースごとの機能](https://about.gitlab.com/releases/)
- [GitLab CE と GitLab EE のチェンジログ](https://gitlab.com/gitlab-org/gitlab/-/blob/master/CHANGELOG.md)
- [リリースマネージャー](https://about.gitlab.com/community/release-managers/)

### テンプレート

- [月次リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb)
- [リリースポストアイテム MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md)
- [非推奨化 Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Deprecations.md)
- [非推奨化 MR テンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md)
- [リリースポストレトロスペクティブ Issue テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/Release-Post-Retrospective.md)
- [YML コンテンツブロックのサンプル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/samples)
- [パッチリリーステンプレート](https://gitlab.com/gitlab-org/release-tools/-/blob/master/templates/patch_release_blog_template.html.md.erb)
- [セキュリティリリーステンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/blog/security_release_blog_template.html.md)
