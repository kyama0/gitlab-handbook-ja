---
title: "GitLab リリースポスト"
description: "リリースポストの作成および更新のガイドライン"
upstream_path: /handbook/marketing/blog/release-posts/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## はじめに

リリースポストは、GitLab アプリケーションの変更を発表するものです。これらの変更には、[毎月](/handbook/engineering/releases/) 行われる定期的な月次リリースに加え、必要に応じてのパッチ／セキュリティリリースが含まれます。

2026年5月5日現在、リリースポストは以下のとおりです:

- [GitLab ドキュメンテーションサイト上で公開](https://docs.gitlab.com/releases/)。
- [`gitlab` リポジトリに保存](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/releases?ref_type=heads)。
- [GitLab docs にドキュメント化](https://docs.gitlab.com/development/documentation/release_notes/)。新しいプロセスについて詳しく学ぶには、このコンテンツをご覧ください。

{{% alert title="⚠️ プロセスは過渡期にあります" color="warning" %}}
以下のコンテンツはもはやリリースプロセスを反映していません。ただし、これらのプロセスを置き換える作業を進める間、コンテンツは残されます。

詳細については、[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。

19.0 リリースの結果に基づいて、19.1 で変更が続く可能性があります。
詳細については、[Release to Docs Phase 2a epic](https://gitlab.com/groups/gitlab-org/-/work_items/21556) を参照してください。

新しいプロセスが最終化された後、このページは再度更新されます。
{{% /alert %}}

## クイックリンク

- [よく使うテンプレート](/handbook/marketing/blog/release-posts/#templates)
- [役立つ参考ページ](/handbook/marketing/blog/release-posts/#pages)
- [リリースポストのスケジュール](/handbook/marketing/blog/release-posts/managers/)

## スケジュール

ハイレベルでは、リリースポストのスケジュールは次のとおりです:

### リリースの 3 週間前の月曜日

- リリースポストマネージャーは、www-gitlab-com プロジェクトで以下の[スケジュール済みパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を手動でトリガーします:
  - `Release Post Process Kickoff Tasks`
- これらは `bin/rake release_post:start` rake タスクを呼び出します。([パイプライン設定](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L280-288); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L9))
- このタスクは、リリースポストプロセスを実行するために必要なブランチ、MR、Issue を作成します
- MR と Issue は、[release_post_managers.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_post_managers.yml) のコンテンツを使用してリリースポストマネージャーに割り当てられます
- `Release Post Process Kickoff Tasks` パイプラインが完了し、リリースポストブランチが関連するマージリクエストとともに作成された後、www-gitlab-com プロジェクトの以下の[スケジュール済みパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を手動でトリガーします:
  - `Add deprecations and removals to current release post branch`

### リリースの 3 週間前の月曜日から木曜日

- **PM** は[コンテンツブロック](#pm-contributors) のために MR を貢献します
  - [機能とアップグレード](#release-post-item-instructions) は、リリースポストブランチをターゲットとするリリースポストアイテム MR として貢献されます
  - プライマリアイテムは `features.yml` に追加されます
  - Omnibus、GitLab Runner、Mattermost の繰り返しコンテンツブロックは、エリアオーナーによって追加されます
  - 非標準の製品アナウンス、未分類のアイテム、その他のアナウンスは、[`extras`](#extras) コンテンツタイプを使用してアナウンスできます
- **EM と PM** は[非推奨化および削除](#deprecations-removals-and-breaking-changes) を発表します

### リリースの 1 週間前の木曜日

**コードカットオフ**

- **EM と PM** は、機能フラグ付きのアイテムが `enabled by default` であることを確認し、self-managed リリースへの組み込みを確実にします。
- 非推奨化および削除の MR は、最終レビューおよびマージのために TW に割り当てられます。
- **TW レビュアー** は、機能、非推奨化、削除、アップグレード、Extras のレビューを完了します
- **PMM、Product Design Manager、Product Designer、PM リーダー** は、リリースポストアイテム MR のオプションレビューを行います
- **EM**:
  - リリースの 1 週間前の木曜日までに基礎となるコードがマージされた場合、機能リリースポストアイテム MR をマージします
  - リリースに含まれることが手動で検証された場合、機能リリースポストアイテム MR をマージします
    - MR は `/chatops run release check <MR URL> <RELEASE>` chatops コマンドを使用して手動で検証できます
- **TW レビュアー** は非推奨化および削除の MR をマージします

{{% note %}}
リリースの 1 週間前の木曜日以降に追加された MR は、`master` ではなく `release-x-y` ブランチをターゲットとする必要があります
{{% /note %}}

### リリース週の月曜日

- <time datetime="16:00">午後 4 時 UTC（午前 11 時 ET / 午前 8 時 PT）</time>に、別の**リリースポスト自動化** タスク（[スケジュール済みパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L290-299); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L373-399)）がコンテンツアセンブリを実行します
- **リリースポストマネージャー** はハイライトする機能を選び、イントロダクションコンテンツを作成します

### リリース週の月曜日から火曜日

- **Developer Relations Engineering** チーム:
  - [Notable Contributor](#notable-contributor) を追加します
  - より広いコミュニティへの感謝のメモで[貢献の合計](https://10az.online.tableau.com/#/site/gitlab/views/WiderCommunityPIsPart1/MergedMRsperMilestonebasedondate) を検証します
- **リリースポストマネージャーとテクニカルライター** が最終レビューを実行します
  - リリース週の月曜日の<time datetime="16:00">午後 4 時 UTC（午前 11 時 ET / 午前 8 時 PT）</time>以降の変更は、`release-X-Y` ブランチを介して行われ、リリースポストマネージャーの承認の対象となります。
  - TW Lead はリリースポストの非推奨化および削除のリンクを検証します
  - RPM は [What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) MR を作成します

{{% note %}}
リリース週の月曜日から火曜日は休暇や祝日にあたる可能性があります。PM は、連絡が取れない場合に時間に敏感な問い合わせに応答する人を指定する必要があります。リリースポストマネージャーは、リリース週の火曜日終了までに応答を受け取らなかった場合、決定を下し、[行動へのバイアスを示す](/handbook/values/#operate-with-a-bias-for-action) 権限を与えられています。
{{% /note %}}

### 木曜日、リリース日

- **リリースチーム** が最新パッケージを公開します
- パッケージが[リリース](/handbook/engineering/releases/) された後、**リリースポストマネージャー** がリリースポストを master ブランチに公開します
- [GitLab.org Releases ページ](https://gitlab.com/gitlab-org/gitlab/-/releases) は、リリースポストが公開されると **自動化されたプロセス** で変更ログにも値を入力します（[パイプラインタスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L303-318)）

{{% note %}}
これらすべての手順の詳細は、[月次リリース**ポスト** MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) と[月次リリース**ポストアイテム** MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に記述されています。
{{% /note %}}

## 参加者

- [**リリースポストマネージャー**](#release-post-manager)
- [**PM 貢献者**](#pm-contributors)
- [**PMM レビュアー**](#pmm-reviewers)
- [**PMM リード**](#pmm-lead)
- [**TW リード**](#tw-lead)
- [**Product Design レビュアー**](#product-design-reviewers)
- [**TW レビュアー**](#tw-reviewers)
- [**テクニカルアドバイザー**](#technical-advisors)
- [**Engineering Manager**](#engineering-managers)

## リリースポストへの志願

毎月、プロダクトマネージャー、テクニカルライター、Engineering 部門のテクニカルアドバイザーが、[リリースポストスケジュールページ](managers/) に記載されているように、リリースポストを管理することを志願します。プロダクトマーケティングマネージャーも、関連するマーケティング活動への認識のためのシャドウとしてサインアップしますが、ほとんどがシャドウです。プロダクトマネージャーの志願者はリリースポストマネージャーとしてリリースポストをリードし、公開時にリリースポストの著者として記載されます。[リリースポストスケジュールリスト](managers/) を更新するには、すべての志願者が以下のデータファイルを編集する必要があります:

- **[データ YAML ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/release_post_managers.yml)**: すべてのリリース（9.0 以降）のリリースポストマネージャーを集めます。これが初めてのリリースの場合は、必ず「Versions」の下の「Managers」セクションも更新してください。

すべての志願者が、運用するリリースポストの前のものをシャドウすることを強くお勧めします。志願者は、シャドウするときとリリースポストの運用を支援するときの両方を示すために、前述のデータ YAML ファイルを更新できます。

リリースポストマネージャーには、`https://gitlab.com/gitlab-com/www-gitlab-com/` プロジェクトの[Maintainer](https://docs.gitlab.com/user/permissions/#project-permissions) アクセス権限が必要です。アクセスが必要な場合は、[この機密 Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/10031) に従ってリクエストをモデル化してください。

### リリースポストマネージャー

どのレベルのプロダクトマネージャー（IC またはマネージャー）でも、まだ誰も割り当てられていないリリースに志願できます。IC プロダクトマネージャーがこの機会を活用してリーダーシップスキルを示すことを奨励しますが、マネージャーがこの役割に経験をもたらすことも評価します。

選択した日付にコミットする前に、[月次 MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) で定義されている、リリースの 1 週間前の木曜日から月の[リリース日](/handbook/engineering/releases/) までの間に重要な経路のリリースポストマネージャータスクを実行できることを確認してください。リリースの 1 週間前の木曜日から月の[リリース日](/handbook/engineering/releases/) までの間にリリースポストマネージャータスクのいずれも実行できない場合は、あなたの空き状況により合うリリースポストにサインアップしてください。

自分をリリースポストマネージャーまたはリリースポストマネージャーのシャドウとして割り当てるには、[リリースポストスケジュールページ](managers/) に名前を追加するだけです。`/data/release_post_managers.yml` ファイルを更新する MR を提出してください。それ以外の場合、PM は、この[追跡ドキュメント](https://docs.google.com/spreadsheets/d/12tFW2nOqZ7Cxm0T-WKZVHmPdZNPtkS6fdIvLwvWVLLc/edit#gid=0) を活用した公平なスケジューリングの原則を使用して割り当てられます:

1. 以前にリリースポストを管理したことがないメンバー
1. 最後にリリースポストを管理してから最も長い間隔を持つメンバー

会社に入社した後、新しいプロダクトマネージャーがプロセスに精通するための数か月の猶予期間があり、その後リリースポストを管理するようにスケジュールされます。

メンバーをリストに追加することは共有タスクであり、上記の原則に従って誰もが貢献できます。スケジュールされた人は、認識させるために MR で ping されます。彼らは、特定のリリースポストに利用可能でない場合は常にリストを更新できるため、確認や承認は必要ありません。

{{% alert title="⚠️ 重要" color="warning" %}}
特定の月にスケジュールされているが、休暇中、過負荷、その他の理由で対応できない場合、それは問題ありません。**マージリクエストを作成し、プロセス全体を開始する前に**、誰か他の人と **リリースポストマネージャーの役割を交代する** 限りです。引き受けた場合、あなたはプロセス全体に責任を持ち、最後まで実行できる必要があります。
{{% /alert %}}

### リリースポストマネージャーシャドウ

毎月、プロダクトマネージャーがシャドウとしても機能し、必要に応じてリリースポストマネージャータスクをサポートし、リリースポストマネージャーが不在の場合に決定のバックアップとして機能し、次のリリースポストを実行する準備をします。取り組みをリードする前の月にシャドウすることで、プロダクトマネージャーは前回の参加以降のプロセスの変化や必要な最適化について準備され、認識されます。

シャドウは、以下によってリリースプロセスに従事し続ける必要があります:

- Slack チャンネルでのアクティビティをフォローする
- 毎週のスタンドアップに出席する
- コンテンツレビューや、彼らが助けを求めるその他のタスクでリリースポストマネージャーを支援する

シャドウを適切にオンボーディングするために、リリースポストマネージャーは以下を行うべきです:

- 前のリリースが出荷された翌週にシャドウとの最初のコーヒーチャットをセットアップし、お互いを知り、シャドウからの最初の質問を明確にする
- シャドウをこのページに案内する
- 最初のリリースポスト MR 作成にシャドウを含める
- すべてのミーティングと、レビューや一緒に同期的に作業できるその他の機会に、できる限りシャドウを含める

覚えておいてください: シャドウの目標は、彼らがプロセスに従事し、認識して、独力で実行できるようにすることです。シャドウをできる限り多く含めて、学び、準備できるようにしてください！

### テクニカルアドバイザーの考慮事項

テクニカルアドバイザーには、プロセスへのオリエンテーションと進行中の技術バックログのための適切な時間を許可するため、少なくとも 2 回または 3 回連続のリリースポストに志願することをお勧めします。

テクニカルアドバイザーは以下を期待されます:

- Git ブランチの競合と Ruby のインストールに関する問題を解決する。
- [`www-gitlab-com`](https://gitlab.com/gitlab-com/www-gitlab-com) ソースコードに技術的に貢献できる。
- [バックログ Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/3130926?&label_name%5B%5D=Release%20Post%3A%3ATech%20Advisor) のいくつかを解決する。

テクニカルアドバイザーの責任の詳細は、[テクニカルアドバイザー](#technical-advisors) で確認できます。

## リリースポストマネージャーの責任

### 重要な経路のタスク

- リリースポスト MR テンプレートのリリースポストマネージャーに割り当てられたすべてのタスクを完了する
  - リマインダー: [月次 MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) で定義されている、リリースの 1 週間前の木曜日から月の[リリース日](/handbook/engineering/releases/) までの間にリリースポストマネージャータスクのいずれも実行できない場合は、別のリリースポストにサインアップすることをお勧めします。リリースポストにサインアップした後にスケジュール／状況が変わった場合は、Slack の #product でスレッドを開始し、`@[name of PLT member who is reviewing this month]` をタグ付けしてください。今月レビューする PLT メンバーの名前は、[リリースポストスケジュールページ](/handbook/marketing/blog/release-posts/managers/) で見つかります
- リリースポストページでハイライトするトップ機能を特定し、Product VP からのフィードバックを収集する
- What's New MR を作成し、Product VP と協力して [What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) に含めるものを特定する
- 今後の期日についてのリマインダーを送信する
- [リリース日](/handbook/engineering/releases/) にリリースポスト MR をマージし、リリースポストページが公開されることを確認する
- リリースポスト中に、自分の課題だけでなく、Slack やその他の場所で他のチームメンバーが直面している課題についても、リリースポストの振り返り Issue でフィードバックを集める
  - [リリース日](/handbook/engineering/releases/) の翌日から[リリース日](/handbook/engineering/releases/) の 1 週間後の間のいつかに、テクニカルライター、テクニカルアドバイザー、リリースポストマネージャーシャドウと同期振り返りを行い、プロセスを改善し、ハンドブック／MR を更新するアクションを特定して協力して完了する
  - 振り返り Issue のすべてのアクションが完了し、次の[リリースの 3 週間前の月曜日にリリースポスト自動化タスクが実行される](#release-post-branch-creation-rake-task) 前に Issue がクローズされることを確認する

### その他の主要タスク

- リリースポストチームと毎週同期または非同期スタンドアップを実行する（メジャーリリースには同期スタンドアップが必要）
- リリースポストに公開されるすべてのコンテンツの全体的なコンテンツの品質と正確性をレビューし、サポートする
- リリースポストマネージャーシャドウが彼らのローテーション前に学べるよう、できるだけ多くアクティビティに含める
- 300 KB 未満の[カバー画像](#cover-image-license)（jpg、png）を追加する
- Slack リリースポストチャンネルを監視して、質問への回答とハードルの解決を支援する
- フィードバックを解決するために必要に応じて Slack または MR で PM などに ping する
- リリースポストが**[リリース日](/handbook/engineering/releases/) の 2 日前にマージ準備ができている**ことを確認する
- [リリース日](/handbook/engineering/releases/) にリリースポストブログがライブになったときに、ブログの閲覧者から出てくる質問をフィールドするため、必要に応じて Slack の [#product](https://gitlab.slack.com/archives/C0NFPSFA8) を使用してプロダクトマネージャーと直接[コミュニケーション](#communication) する
- コミュニティとのエンゲージメントで追加のサポートが必要な場合、Developer Advocacy チーム（Slack の [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B)）が[リリース日](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#release-days) にサポートを提供できます
- 二次的な機能のタイトル（アルファ順）とステージによる自動ソートが概して問題ないか、必要に応じて修正されていることを確認する [コンテンツレビュー](#content-reviews)
- 必要に応じて PM などと協力して、彼らがコンテンツブログで参照する外部ブログが[リリース日](/handbook/engineering/releases/) にリリースポストブログが公開される前にライブになるようにする
- リリース週の月曜日以降にリリースポストアイテムが追加または削除された場合、TW リードに知らせる
- リリースポストが公開されたことをソーシャルチームに通知し、ソーシャルメディア投稿をスケジュールする時間であることを伝える
- 協力者が連絡してきた場合、[メジャーリリース](#major-releases) 固有のタスクをサポートする

### 開始方法

`https://gitlab.com/gitlab-com/www-gitlab-com/` プロジェクトへの[Maintainer](https://docs.gitlab.com/user/permissions/#project-permissions) アクセス権を持っていることを確認してください。アクセスが必要な場合は、[この機密 Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/10031) に従ってリクエストをモデル化してください。

[自動化されたタスク](#schedule) が、[リリースポストマネージャースケジュール](/handbook/marketing/blog/release-posts/managers/) に基づく適切な割り当てとメンションを含む、リリースポストプロセスを実行するために必要なブランチ、MR、Issue を作成します。

リリースの 3 週間前の月曜日の終わりまでにリリースポスト X.Y MR に割り当てられていない場合:

- テクニカルアドバイザーと協力して [`bundle exec rake release_post:start`](#release-post-branch-creation-rake-task) を実行して X-Y リリースポストをキックオフするか、
- [リリースポストブランチと必要なディレクトリ／ファイルを手動で作成する](/handbook/marketing/blog/release-posts/manual-release-post-kickoff/) ためのこれらの手順に従ってください

### コミュニケーション

リリースポストマネージャー、テクニカルアドバイザー、テクニカルライター、PMM リードは、リリースポストに関連するが広いチームには関連しないトピックについてコミュニケーションする必要があります。これらのチャットは、Slack の `#release-post-prep` チャンネルで行い、Slack #release-post の広いチームのための気を散らすことや不必要な通知を最小化する必要があります。

リリースポストマネージャーは、リマインダーで最も頻繁に Slack チャンネルに投稿します。そのため、特定の投稿の表現方法についてガイダンスを求める場合は、関連する Slack チャンネルで前のリリースポストマネージャーが投稿したであろうおおよその日付までスクロールすることをお勧めします。ただし、以下にいくつかのベストプラクティスと例を示します:

- 何を共有しているか、なぜかについて明確で説明的な声明をする
- 誰かに行動を取ってほしい場合は、明示的にそう言ってその人をタグ付けする
- 要求されたアクションが時間に敏感な場合は、明確な期日を与える
- 認識する必要がある既知の問題がある場合は、それらをリストする
- 全員が情報を共有するために、大きなアナウンスについては常にあなたのリリースポストチームに cc する

Slack の `#release-post` または `#release-post-prep` でコミュニケーションする際、会話を追跡しやすくするために、ユニークなディスカッションスレッドを介してアナウンスとリクエストを整理してください。たとえば、異なるトピックに対処する場合、同じ日付に該当するからといって、さまざまなリマインダーを組み合わせることは避けてください。一般的なルールとして、MR テンプレートにリマインダーのためのユニークなタスクリスト項目がある場合、そのリマインダーは、Slack または MR 自体に独自の別の投稿を取得する必要があります。また、GitLab の[効果的な slack コミュニケーション](/handbook/communication/#slack) ガイダンスを確認してください。

レビューのための役員ステークホルダーへのサンプル投稿は以下のとおりです。
今月レビューする PLT メンバーの名前は、[リリースポストスケジュールページ](/handbook/marketing/blog/release-posts/managers/) で見つかります

```md
@[name of PLT member who is reviewing this month] The 13.6 Release Post has been generated and can be reviewed at `https://release-13-6.about.gitlab-review.app/releases/2020/11/22/gitlab-13-6-released/index.html`

Please share your feedback by <time datetime="18:00">6 pm UTC (1 pm ET / 10 am PT)</time> on Friday November 20 (tomorrow). Thank you for your review!

Currently there are no known issues/adjustments to the content but I know of one deprecation that needs to be added and will happen with my first wave of edits.

Here's the 13.6 release post MR: `https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/66652`

cc @TW Lead @tech-advisor @PMM
```

その他のサンプル投稿には、リリースポストマネージャーが取っているアイテムに関するリマインダーや通知が含まれます:

```md
🎺 Hi team! Announcing a "last call" that no further contributions to the bugs, performance improvements, and usability improvements MRs will be taken after the Thursday, 1 week before release. Please get them in 🏃‍♂️ cc @[name of PLT member who is reviewing this month]
```

```md
Hey team, reminder that there are currently XX Open and Ready MRs targeting XX.X milestone (link to open MRs). Please take a moment to ask your EMs to merge or to move out the items that won't make milestone.
```

```md
Hi all, I will be completing the final merge for the release post in the next 45 minutes-1 hour! I will be coordinating any activities with team members to resolve any problems that come up. cc @Tech Advisor @TW Lead
```

Developer Advocacy チームは、リリースポストブログのコンテンツに関する問い合わせに応答するヘルプが必要な場合、[リリース日プロセス](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#release-days) に従って Slack #release-post でリリースポストマネージャーに連絡します。これらのニーズは主にブログがライブになってから最初の 1 週間以内に発生します。ただし、特定のリリースポストの著者として、問題が発生したときに応答を調整するため、数週間後に ping される場合があります。通常、問題を処理する最良の DRI を見つけるだけで、多くの場合、問題のリリースポストアイテムの PM です。

時には、リリースまたはメディア関係を管理する外部の PR およびマーケティング会社が、RPM がリリースポストの「著者」であるため、直接質問で RPM に ping することがあります。これが発生した場合、リリースポストマネージャーは、このコミュニケーションを引き継ぐことができるマーケティング内の誰かを見つける必要があります。

### コンテンツレビュー

すべての参加者のさまざまなレビューの期日は、[リリースポスト MR テンプレート](#templates) と[リリースポストアイテム MR テンプレート](#templates) で見つかります。PM 貢献者は、リリースの 1 週間前の木曜日のコンテンツマージ期限後、特にリリース週の月曜日<time datetime="15:00">午後 3 時 UTC（午前 11 時 ET / 午前 8 時 PT）</time>に最終コンテンツアセンブリが発生した後、新しいコンテンツブロックを追加しようとするのを停止することが奨励されます。例外は、影響力の大きい機能に対して行うことができますが、リリース週の前のリリース週の水曜日まで、PM と協力してさらにコンテンツブロックを追加するかどうかは、リリースポストマネージャーの裁量に任されています。

個々のリリースポストアイテム（コンテンツブロック MR）に対するさまざまなコンテンツレビュー（TW、PMM、Director）を監視することは、PM 貢献者の責任です。ただし、リリースポストマネージャーは、リリースの 3 週間前の月曜日の木曜日にまだ Ready ラベルでマークされていないアイテムの数、またはリリースの 1 週間前の木曜日にまだマージされていないアイテムの数を監視し、必要に応じて Slack リリースポストチャンネルで PM とチェックインして、サポートし、ハードルをクリアすることをお勧めします。これを行う本当に簡単な方法は、[プレビューページ](https://about.gitlab.com/releases/gitlab-com/) を監視し、新しいアイテムが表示されたらコピー編集とリンクチェックを行うことです。また、このページはユーザーに対してライブであり、エラーがないようにする必要があるため、これを行うことも重要です。

レビューと、ステークホルダーフィードバックによる二次的な機能の順序付けへの必要な調整は、リリースポストマネージャーの責任です。二次的な機能、削除、アップグレードノートはすべて、ステージごとにグループ化され、タイトル順にアルファベット順にソートされます。二次的な機能のソート順に影響を与えるには、コンテンツブロックの `title` への変更が必要です。リリースポストマネージャーは、正確性と整合性を確保するため、コンテンツブロックのプロダクトマネージャーと協力してこれらの変更を行う必要があります。

リリースポストのレビューアプリが生成された後、リリースポストマネージャーは、Slack #release-post チャンネルで[プロダクトリーダー](/handbook/product/product-leaders/product-leadership/#product-leadership-team-structure) からの追加のフィードバックを求めます。

すべてのコンテンツがリリース週の火曜日までに完了し、最終的なエラー修正と小さな改善のために 1 日のバッファが残されることを確認するのが、リリースポストマネージャーの責任です。

**注:** 可能な限り、リリースポストのコンテンツレビューを実行する際は、[GitLab のコミュニティコードレビューガイドライン](https://docs.gitlab.com/development/code_review/#getting-your-merge-request-reviewed-approved-and-merged) を使用するよう努めます。

#### コンテンツブロックをレビューする際に RPM が探すべきこと

リリースポストマネージャーは、マーケティングイントロを含むすべてのコンテンツの品質をレビューすることをお勧めします。ただし、各リリースポストアイテム MR でコンテンツブロックをレビューする際、RPM は以下を探す必要があります:

1. なぜ（問題）と何（解決策）が明確に述べられていますか？ 機能の説明に含めるべきものについては、ガイドラインとして[機能について書く](/handbook/product/product-processes/#writing-about-features) を参照してください。
1. 説明はかなり簡潔ですか（おおよそ 125 単語以下）？
1. ファイル名は推奨されるファイル命名規則に従っていますか？ PM 貢献者向けの[指示](#release-post-item-instructions) の下にある **ファイルの命名に関する重要な注意** を参照してください。

#### レビューのヒント

1. マージされたリリースポストアイテムを簡単にスキャンするには、[Available now on GitLab](https://about.gitlab.com/releases/gitlab-com/) ページを活用してください。
1. 不正な形式のリンクを見つけるには、[Available now on GitLab](https://about.gitlab.com/releases/gitlab-com/) およびプレビューページで `[`、`]`、`(`、`)` などの文字を検索してください。
1. 重複する単語のような明らかでないタイプミスを見つけるには、これらのページのコンテンツを Grammarly のようなツールにコピー／ペーストしてください。

### リリースポストイントロコンテンツ

リリースポストのイントロダクションコンテンツ（`YYYY-MM-DD-gitlab-X-Y-released.html.md` にあります）は、すべてのリリースポスト全体で標準であるようにテンプレート化されており、`@justinfarris` からの承認なしに変更されるべきではありません。このファイルは、リファレンスと編集のしやすさのために、リリースポスト MR の上部にリンクされています。リリースポストマネージャーは、すべてのプライマリアイテムが承認され、トップ機能が指定されていることを確認し、Product VP にフィードバックを求めます。

## PM 貢献者

プロダクトマネージャーは、[コンテンツブロック用の MR を作成し](#content-blocks)、必要な貢献者によって期日までにレビューされることを確認する責任があります。これらは主にプロダクトマネージャーによって追加され、それぞれが[責任を持つ](/handbook/product/categories/#devops-stages) セクションを埋めますが、コミュニティ貢献者を含む誰もが貢献できます。提供されたエピックや注目すべきコミュニティ貢献のためにもコンテンツブロックを追加する必要があります。

{{% alert title="⚠️ PM: プロセスは過渡期にあります" color="warning" %}}
**19.0** のリリースポストアイテムを貢献している場合、以下のプロセスが完全に適用されない可能性があります。
主な相違点には、コンテンツのカットオフ日、コンテンツの組み立て方、およびリリースポストの公開場所への変更が含まれます。
[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。

**19.1** からは、ここに記載されているプロセスを置き換える全く新しいプロセスが始まります。
進捗については [Phase 2a epic](https://gitlab.com/groups/gitlab-org/-/work_items/21556) を参照してください。
{{% /alert %}}

### 貢献の手順

機能開発と並行して、必要なコンテンツを含むマージリクエストを PM が準備する必要があります。リリースポストアイテムを起草する前に機能がマージされるのを **待たないでください**。PM は、マイルストーンのキックオフの準備として、リリースポストアイテム MR を書くことをお勧めします。

{{% alert title="重要" color="info" %}}
以下の[指示](#release-post-item-instructions) は、リリース週の月曜日<time datetime="07:59">午前 7:59 UTC（午前 2:59 ET / リリースの 1 週間前の木曜日 PT 午後 11:59）</time>まで適用されます。リリース週の月曜日のコンテンツアセンブリ後、今後のリリースポストに変更を含めたい人は誰でも、リリースポストマネージャーと調整し、[リリース週の月曜日以降のコンテンツブロックのマージ](#adding-editing-removing-before-release-date) セクションの遅い追加のための特別な処理に関する詳細な指示に従う必要があります。
{{% /alert %}}

### 主要な日付

- キックオフ準備中、または今後のマイルストーンの計画時: チームが[逆方向に作業する](https://www.product-frameworks.com/Amazon-Product-Management.html) ことを可能にするために、リリースポストを早めに作成することを検討する
- **リリースの 3 週間前の木曜日 - 起草済み**: プロダクトマーケティング、テクニカルライター、PM Group Manager または PM Director によるレビューの準備ができている
- **リリースの 1 週間前の月曜日から木曜日 - レビュー済み**: 必要なすべてのステークホルダーによってレビュー済み、コンテンツが必要に応じて修正され、マージの準備ができている
- **リリースの 1 週間前の木曜日 - マージ済み**: 機能がマージされている場合、Engineering Manager によってリリースポストアイテム MR がマージされている
- **リリース週の月曜日 - 最終コンテンツアセンブリ**: および最終的なレビュー／編集の準備のためのリリースポストブログコンテンツロック

{{% alert title="重要" color="info" %}}
発表される機能が外部のビジネスパートナーへの参照を含む場合、MR ドラフト承認を早めに開始する必要があります。そのような例の 1 つは [Cloud Seed](https://about.gitlab.com/releases/2022/10/22/gitlab-15-5-released/#deploy-apps-to-google-cloud-with-gitlab-cloud-seed) です。これらのタイプのアナウンスには、GitLab リーダーシップ、ビジネスパートナー、Legal チームによる追加のレビューが必要です。これらの場合、リリースポストアナウンスを行いたいマイルストーンの少なくとも 1 つのマイルストーンの前に MR レビューを開始するため、`@justinfarris` に連絡してください。
{{% /alert %}}

### リリースポストアイテムの指示

#### オプション 1: 自動 MR 作成

[リリースポストアイテムジェネレーター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/release-post-item) は、Issue とエピックを使用してリリースポストアイテムの作成を自動化します。機能 Issue テンプレートの **Release notes** セクションの下にリリースポストコンテンツを起草し、[リリースポストアイテムジェネレーター](#release-post-item-generator) の指示に従ってください。

{{% note %}}
ジェネレーターは機密 Issue 用の MR を作成しません。機密 Issue に関連する作業のリリースポストアイテムを追加するには、以下の手順に従って MR を手動で作成し、機密情報やリンクを削除してください。
{{% /note %}}

#### オプション 2: 手動 MR 作成

- 各機能（プライマリ、セカンダリ、削除）について、[www-gitlab-com リポジトリ](https://gitlab.com/gitlab-com/www-gitlab-com) の `master` から新しいブランチを作成します。[非推奨化は異なる方法で処理されます](#deprecations-and-other-planned-breaking-change-announcements)
- `master` ブランチをターゲットとするマージリクエストを開きます
- [リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) を使用します
- コンテンツは、`master` ブランチ上の [`data/release_posts/unreleased/`](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/) に追加された 1 つの YAML ファイルである必要があります
  - フォーマットとサンプルコンテンツについては [`data/release_posts/unreleased/samples/`](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/samples?ref_type=heads) を参照してください
  - 構造は `features:` の後に `primary:`、その後に機能コンテンツのように保持する必要があることに注意してください
- 該当する場合は `data/features.yml` を更新して機能を含め、同じマージリクエストの一部として変更をコミットします
- [リリースポストアイテム MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に含まれる PM チェックリストを完了します。これには以下のタスクが含まれますが、これに限定されません:
  - [コンテンツタイプ](#content) に基づいて適切な `release post item::` スコープラベルを追加します
  - レビューのために MR を関連するテクニカルライターに割り当てます
  - 追加のレビューが必要な場合は、関連するプロダクトマーケティングマネージャー、および／または Director に MR を割り当てます
  - すべてのコンテンツがレビュー・完了したら、`Ready` ラベルを追加し、機能がデプロイされて有効になったときにマージする適切な Engineering Manager (EM) に MR を割り当てます。

  **ファイルの命名に関する重要な注意**: PM は、コンテンツブロック自体のタイトルとの妥当な重複を持つ、説明的なファイル名を作成する必要があります。これにより、レビュープロセスの異なる参加者によって、関連するコンテンツブロックを yml ファイルに関連付けやすくなります。以下にリストされているように、正しいプレフィックス（`stagename`、`removal`、または `upgrade`）が使用されている限り、アンダースコア `_` またはハイフン `-` を使用できます。

  - 機能ファイル名: `stagename-featurename.yml`（例: `create-group-wikis.yml`）。**以下はしないでください:**
    - プライマリかセカンダリかを指定する。これは変更される可能性があります。
    - カテゴリーまたはグループ名を使用する。
    - レポーターの名前を含める。

  - 削除ファイル名: `removal-something-else-descriptive.yml`
  - アップグレードファイル名: `upgrade-another-description.yml`

  **トラブルシューティングのヒント:**

  - **`git merge` を使用し、`git rebase` を使用しないでください。** リベースは、クリーンなコミット履歴を作る強力なツールですが、`www-gitlab-com` リポジトリ上の協力者数によるコミットの量のため、通常は手動で対処する必要のある多くの競合があります。コンテンツ MR には自分のコンテンツブロックに関連する変更と `features.yml` への 1 つの追加のみを含む必要があるため、マージ競合は最小限であり、通常存在しません。リベースを開始して問題が発生した場合は、いつでも `git rebase --abort` でバックアウトできます。
  - **引用符を閉じることを忘れず、ファイル名を確認し、適切にインデントしてください。** 多くの曖昧なパイプラインエラーは、一般的なコーディングの落とし穴によって引き起こされます。引用符が閉じられていること、参照しているファイルがリストしたファイル名と*完全に*同じ名前を使用していること、各行に正しいインデントが設定されていることを確認してください。

### コンテンツ

私たちは、人々が新しい機能を理解して採用を増やすのを助けたいと思っています。一般に、リリースポストは、解決すべき問題、解決策、そして顧客が解決策からどのように利益を得るかを簡潔に述べる必要があります。Direction アイテムと Release 機能を必ず参照してください。[Upcoming Releases ページ](https://about.gitlab.com/upcoming-releases/) に表示されるすべてのアイテムは、関連するリリースポストに含める必要があります。

コンテンツブロックを書く際は、リリースポストアイテムの記述が GitLab のコミュニケーション方法と一致するよう、[機能について書く](/handbook/product/product-processes/#writing-about-features) を参照してください。たとえば、私たちは「お知らせできることを嬉しく思います」のようなフォーマルなフレーズを避け、一般的にユーザーに直接「あなたは今 x を行うことができます」と話します。これらのガイドラインへのリンクを確認することで、書きながらトーン／ボイスを合わせることに役立ち、リリースポストアイテムのレビュープロセスをスムーズで迅速にすることができます。

PM 貢献者は、リリースの 1 週間前の木曜日の最終マージ期限後、特に午前 8 時 PST（午後 3 時 UTC）に最終コンテンツアセンブリが発生した後、新しいコンテンツブロックを追加することについて裁量を使うことが推奨されます。ただし、次のブログ投稿まで待てない影響力の大きい機能がリリースされた場合、PM はリリースポストマネージャーに連絡して調整する必要があります。リリース週の前のリリース週の水曜日まで、PM と協力してさらにコンテンツブロックを追加するかどうかは、リリースポストマネージャーの裁量に任されています。

#### プライマリ vs. セカンダリ

リリースポストアイテムのコンテンツを作成する際に、それが `primary` または `secondary` 機能であるかを判断する必要があります。これは PMM カウンターパートと共同で行い、確信がない場合はこのガイダンスを参照してください:

機能は以下の場合 `primary` であるべきです:

- **新規** か、重大な改善 - 以前に存在しなかった主要機能を追加するか、既存の機能を大幅に変更する。
- 顧客または広いコミュニティからの需要が高い（エピック／Issue のディスカッションまたはアップ票で測定）。
- 機能が現在のマーケティングナラティブまたはキャンペーンに結びついている。
- すべての `primary` 機能には、`features.yml` に対応するエントリが必要です。
- ベータ機能はプライマリまたはセカンダリアイテムとして含めることができますが、`Beta` ステータスを明確に反映する必要があります。
- 実験的機能は、リリースポストのプライマリまたはセカンダリアイテムとして含めるべきではありません。

#### 実験的機能

リリースポストに実験的機能を含めるには、`unreleased` ディレクトリでリリースポストアイテムを作成するときに、[実験テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/experiment_feature.yml) を使用してください。実験機能は、リリースポストの独自のセクションに表示されます。

### レビュー

PM Director/Group Manager、PMM、Product Design のレビューは強く推奨されますが、リリースポストへの組み入れには、テクニカルライターのレビューのみが必要です。テクニカルライターのレビューは、リリース週の月曜日以降に遅延追加が行われた場合でも必要です。テクニカルライターのレビューは、タイプミス、文法エラーを探し、スタイルを支援することに焦点を当てる必要があります。重要なコンテンツ／テクニカル変更を調整する責任は PM にあります。どのリリースポストアイテムが最もレビューに重要かについての優先度を伝達することは、Product Section リード、PMM、テクニカルライターが、リリースの 3 週間前の木曜日までに適切なアイテムをレビューするのを助け、MR に適切なラベルが適用され、MR がレビュー準備ができている時に MR にレビュアーを割り当てます（例: `Tech Writing`、`Direction`、`Deliverable` など）。

- **注: 一貫性のため、コンテンツレビューのために PM Director/Group Manager、PMM、TW、Product Design チームメンバーを割り当てる際に、GitLab の[マージリクエストのレビュアー](https://docs.gitlab.com/user/project/merge_requests/reviews/) 機能を使用してください。**

#### オプションの PM Director/Group Manager および PMM レビューの推奨事項

PMM レビューは必須ではなく推奨されており、Product Leader および Product Design レビューはオプションであるため、PM はレビューをリクエストするコンテンツブロックを決定する際にいくつかのことを考慮する必要があります:

- 機能はグループまたはステージの全体的な Direction に貢献しますか？
- 機能は市場で競争する能力を向上させますか？
- 機能には顕著な顧客需要がありますか？
- 機能は重要な UX 改善を表していますか？

これらのいずれかへの答えが「はい」である場合、Director、PMM、Product Design カウンターパートと協力してリリースの 1 週間前の木曜日までにコンテンツブロックをレビューすることをお勧めします。PM として、TW、PMM、Product Designer、Director からのレビューが必要な MR と、複数のコンテンツブロック MR がレビューを必要としている場合の相対的な優先順位を伝達する責任があります。

### コンテンツブロック MR のマージ

Engineering Manager は、機能がコードベース自体にマージされたときにこれらの MR をマージする DRI です。これにより、すべての関連当事者（プロダクトマネージャー、PMM、Product Designer、Section リード、テクニカルライター）が、機能をリリースすることからエンジニアリングを慌てて、または保留することなく、コンテンツをレビューするのに十分な時間を持つことができます。

Engineering Manager が Issue がクローズされ次第機能ブロックをマージできるようにするため、リリースポストに含めたいすべてのスケジュールされたアイテムにコンテンツブロック MR が作成されており、コンテンツの貢献とレビューが完了したら `Ready` ラベルが適用されていることを確認してください。

### マージされたコンテンツブロックのレビュー、編集、更新

コンテンツブロック MR がマージされた後、それらは[プレビューページ](https://about.gitlab.com/releases/gitlab-com/) で表示でき、**リリースの 1 週間前の木曜日の最終マージ期限** まで master への MR を介して更新／編集する必要があります。リリース週の月曜日以降は、コンテンツブロック MR は **最終コンテンツアセンブリ** 後にリリースポストブランチのレビューアプリで表示する必要があり、リリースポストブランチでリリースポストマネージャーと調整して更新／編集する必要があります。[リリース日](/handbook/engineering/releases/) 以降は、[ブログ](https://about.gitlab.com/releases/categories/releases/) でコンテンツブロックを表示する必要があります。このページはユーザーに対してライブであり、エラーがないようにする必要があるため、コンテンツブロック MR がマージされた後にこのページを確認することが重要です。

### リリース週中のマージされたコンテンツブロックの追加、編集、削除 {#adding-editing-removing-before-release-date}

{{% alert title="⚠️ 遅延貢献: プロセスは過渡期にあります" color="warning" %}}
**19.0** の遅延貢献を行う場合、以下のプロセスが完全に適用されない可能性があります。
コンテンツのカットオフ日と遅延追加に関する現在のガイダンスについては、[19.0 移行プロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/work_items/643) を参照してください。
{{% /alert %}}

[リリース週](/handbook/engineering/releases/) の月曜日にコンテンツアセンブリが開始された後、リリース週の火曜日終了前に、新規または既にマージされたリリースポストアイテムを追加または削除することは、**リリースポストマネージャーと調整する必要があります**。

これは、リリースポストへの影響を評価し、リリースポストチーム（テクニカルライター、PM など）と必要な調整を調整できるようにするために必要です。これを怠ると、変更がリリースポストにピックアップされない可能性があります。

リリースポストマネージャーに ping する前に、コンテンツが現在のリリースポストの一部であることが絶対に必要かどうかを自問してください。リリース週の火曜日の終わりに、遅延コンテンツブロックは受け入れられません。

#### リリース週中の遅延追加のリクエスト {#requesting-late-addition-before-release-date}

- リリースポストマネージャー (RPM) を `#release-post` で ping して、[リリースポスト](/handbook/engineering/releases/) に新しい遅延追加を追加するようリクエストし、RPM が続行する確認を行うまで待ちます。新しい遅延追加は、コンテンツアセンブリがすでに実行された後に作成されたリリースポストアイテムです。リリースポストマネージャーは、リクエストに応えるためにベストを尽くしますが、保証されていません。
- RPM が遅延追加を承認した場合、PM と RPM は次のように進めます:
  - PM はリリースポストアイテム MR を編集し、ターゲットブランチをリリースポストの `release-X-Y` ブランチに更新します。
  - PM は、`release-X-Y` ブランチの上にリリースポストアイテム MR を[リベース](https://docs.gitlab.com/user/project/merge_requests/conflicts/#rebase-in-the-gitlab-ui) します。
  - PM は RPI yml ファイルを `/data/release_posts/unreleased` から `/data/release_posts/x_y/` に移動します。
  - PM は、リリースポストマネージャーとリリースポストテックアドバイザーからリリースポストアイテム MR のレビューをリクエストします。クイックアクション: `/assign_reviewer RP-manager`
  - PM は、`#X-Y-release-post` Slack チャンネルでリリースポストチームに、遅延追加がリクエストされたことを MR へのリンクとともに通知します。
  - MR はリリースポストマネージャーによって承認・マージできます。
- 機能がプライマリで、以前に `features.yml` に追加していなかった場合は、`master` から分岐した 2 番目の MR を作成して機能を `features.yml` に追加する必要があります（`features.yml` はリリースポストブランチではなく、`master` にマージする必要があります）。

### マージされたコンテンツブロックを削除するプロセス

- Slack `#release-post` でリリースポストマネージャーに ping して、すでに `release X-Y` ブランチにマージされているアイテムを削除する必要があることを通知します。
- リリースポストマネージャー、またはリリースポストマネージャーの承認を得て PM が、`release X-Y` ブランチから YAML ファイルを削除します。
- PM は、master の `features.yml` から機能を削除します。

### リリース日後のマージされたコンテンツブロックの追加、編集、削除 {#adding-editing-removing-after-release-date}

[リリースポスト](/handbook/engineering/releases/) は、ライブになった後でも、機能コンテンツブロックを編集するために変更を加えることができます。

コンテンツブロックを編集するには:

1. 編集したいリリースポストの下部で、「Edit this page」を選択します。
1. 正しいサブディレクトリで関連する `.yml` ファイルを見つけて編集します。たとえば、14.6 リリースポストに Widgets 機能の例を追加または編集するには、`master` に対する MR で `data/release_posts/14_6/widgets_example.yml` を作成または編集します。

   機能ブロックを削除するには、MR でファイルを削除します。または、次のリリースポストでアナウンスするには、ファイルを `data/release_posts/unreleased` フォルダーに移動します。

1. レビューと承認のために、現在のサイクルの[リリースポストマネージャー](/handbook/marketing/blog/release-posts/managers/) をレビュアーとして割り当てます。

非推奨化を編集するには、[アナウンスエントリの編集](#editing-an-announcement-entry) に従ってください。

### 説明責任

**ブログ投稿に追加するコンテンツに対して責任があります**。したがって、次のことを確認してください:

- このリリースのすべての新機能がリリースポストにあります。
- すべてのエントリが正しい、特にドキュメントや機能ページ（利用可能な場合）へのリンクに関して。
- 機能のティア可用性: すべてに[正しいエントリ](#feature-availability) が含まれている。
- すべての新規および／またはプライマリ機能が[`data/features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) に追加されている*機能のスクリーンショットが伴って（機能が UI に表示される場合）*。
  - [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml?ref_type=heads) が `about.gitlab.com` 全体で機能を表示するための SSOT であることに留意してください。
- すべての機能には明確な価値ドライバーがあり、おおよそ 125 単語未満である必要があります。

[リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) に記載されているとおり:

- 機能が **新規** か既存の機能の改善かを明確にしてください。
- コンテンツが[機能について書く](/handbook/product/product-processes/#writing-about-features) のガイダンスと妥当に整合していることを確認してください。
- タイトルが、機能と製品名がキャピタルケースを使用するセンテンスケースを使用していることを確認してください。

すべての機能の説明を、通常のブログ投稿と同じように書いてください。[Markdown ガイド](https://about.gitlab.com/community/markdown-guide-middleman/) に従って書いてください。

{{% alert title="⚠️ 重要" color="info" %}}
マージ競合を避けるため、既存のファイルへの変更を **プッシュする前**、必ず `master` をリリースポストブランチにマージしてください。リベースせず、`git pull origin master` の後 `:wq` を実行してください。
{{% /alert %}}

### PM のチェックリスト

PM は、責任を持つすべてを含めた後、リリースポスト MR の説明で **自分のアイテムをチェック** する必要があります:

![PMs check list](/images/marketing/blog/release-posts/features-checklist.png)

アイテムをチェックすることで、PM が時間内に（一般貢献ステージ中に）自分の役割を果たし、レビューを待っていることがリリースポストマネージャーに明確になります。チェックしない場合は、状況がそうでもそうでなくても、時間内に部分を完了しなかったことが暗黙的になります。

すべてのコンテンツがレビュー・完了したら、`Ready` ラベルを追加し、Engineering Manager (EM) にこの Issue を割り当てます。EM は、実装する Issue が GitLab.com にデプロイされ次第マージする責任があり、その後このコンテンツが GitLab.com Release ページに表示され、次のリリースポストに含めることができます。すべてのリリースポストアイテムは、リリースの 1 週間前の木曜日以前にマージする必要があります。機能がリリースの 1 週間前の木曜日の期限までに準備できていない場合、EM はリリースポストアイテムを次のマイルストーンにプッシュする必要があります。

### PM のためのメモ

#### 休暇

リリース前／中に休暇を取る場合、すべてのアイテムを記入し、何らかの理由で追加できないすべてのアイテムについてリリースポスト Yaml ファイルにプレースホルダーを作成してください。それらを完成させ、責任を持つすべてのコンテンツをフォローアップするため、誰かに引き継ぐよう割り当て、リリースポストマネージャーに通知してください。

#### 返信

MR スレッドのコメントには、できるだけ早く返信してください。リリースポストには交渉の余地のない期日があります。

#### ドキュメント

リリースポストにコンテンツブロックを追加するのと同時に、`documentation_link` を追加してください。後で追加することにすると、おそらく忘れ、レビュアーがレビュー段階で後で ping し、書く時間、MR をレビュー、承認、マージ、[ドキュメント](https://docs.gitlab.com/) で利用可能になる時間がほとんどなくなります。

## PMM レビュアー

### メッセージングレビュー

*各 PM は、リリースポストアイテム MR または `features.yml` への変更のメッセージングについてレビューが必要な場合、PMM カウンターパートに ping する責任があります。*

- MR のアイテムファイルで PM のためにコメントを残してください。PM がコンテキストを持ち、コメントが適切に解決できるよう、参照している行で diff にコメントを残すよう注意してください。
- 機能の説明に含めるべきものについてはガイドラインとして、[機能について書く](/handbook/product/product-processes/#writing-about-features) を参照してください。
- これらの機能のメッセージングについて、以下の 5 つの要素を探してください:
  - **問題／解決策**: これはユーザーの痛みのポイント（問題）と、新しい機能がペイントポイント（問題を解決する）をどのように取り除くかを記述していますか？
  - **短く、的確**: これは可能な限り少ない単語で明確に伝えられていますか（できれば 125 単語以下）？
  - **トーンの明確性**: 言語と文の構造は明確で、文法的に正しいですか？ テキストは現在時制で、「user」の代わりに「you」が使用されていますか。
  - **技術的明確性**: 機能の説明は、GitLab に深く精通していない人を含む、さまざまなオーディエンスにとって意味がありますか？
  - **価値ドライバー**: 機能は、ユーザーが運用効率を向上させ、より良い製品をより速く提供し、セキュリティとコンプライアンスリスクを削減するのに役立ちますか？
- 機能をよりよく理解するには、機能の Issue と MR を見てください。これらは YAML にリンクされています。場合によっては、Issue の説明に価値プロップが含まれていることがあります。機能の Issue と MR のコメントを読んでください。多くの場合、ユーザーと顧客が、機能を望む理由とその機能の欠如がもたらしている痛みについて言及します。
- リリースポストと `features.yml` は同じまたは非常に似たコンテンツを持てます - たとえば同じスクリーンショット。
  - リリースポストのトーンは「私たちは XYZ を出荷できることを嬉しく思います...」のように機能を導入することについてです
  - `features.yml` のトーンは、さまざまな場所で私たちのウェブサイトに表示されるよう、[エバーグリーン](https://web.archive.org/web/20190610215424/https://www.thebalancecareers.com/what-is-evergreen-content-definition-dos-and-don-ts-2316028) であるべきです。

## PMM リード

PMM リードは、フィールドおよび PR による消費のためのリリースポストハイライトブラーブを作成する責任があります。

タスクは[リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) と[月次リリースポストイントロドキュメント](https://docs.google.com/document/d/13bGcGxkAQjdUgonX8tbQ72bkCtgkEY6EM9dsXFqfwN0/edit) に含まれています。

月の第 3 木曜日以前に:

- [新しいプロダクトマーケティング](https://gitlab.com/gitlab-com/marketing/strategic-marketing/product-marketing/-/issues/new) Issue を PMM-Release-Post テンプレートで作成します。
- リリースのハイライトを作成 - 説明付きの 3〜4 テーマ。このドキュメントを使用してハイライトを記録してください
- ハイライトで Issue を更新します
- highspot を更新します
  - 実際のリリースポストブログを Highspot（Customer Outreach スポット）に新しいコンテンツとして追加します（例: [リリースポスト](https://gitlab.highspot.com/items/64be9cb7a725d13bebaaf6c2?lfrm=shp.1)）
  - highspot のこの新しいリリースポストを GitLab Release Post セクションの [GitLab Releases スポット概要ページ](https://gitlab.highspot.com/items/624626054e2472aa8611b5bf) に追加します
  - Highspot にこのリリースの新しいピッチテンプレートを作成します（Company Pitch Templates スポット）（例: [ピッチテンプレート](https://gitlab.highspot.com/items/64e642a213d3aeb2992e8ec4)）
  - この新しいピッチテンプレートを Release Pitch Templates セクションの [GitLab Releases スポット概要ページ](https://gitlab.highspot.com/items/624626054e2472aa8611b5bf) に追加します
- #sales で共有するために comms にフラグを立てます
- PR およびフィールドイネーブルメントチームと共有し、リリースポストマネージャーをタグ付けします。

## TW リード

{{% alert title="注" color="info" %}}
テクニカルライターは、[割り当てられたステージ／グループ](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) に従って個々のリリースポストアイテムをレビューします。
毎月、テクニカルライターの 1 人が、最終的なリリースポストマージリクエストの構造チェックも担当します。このセクションは後者についてです。
{{% /alert %}}

TW リードは以下の最終レビューに責任があります:

- [リリースポストトップ機能](#top-feature) 特定された問題については、適切に解決するよう [TW レビュアー](#tw-reviewers) に通知してください。
- [リリースポストプライマリ機能](#primary-features) 特定された問題については、適切に解決するよう [TW レビュアー](#tw-reviewers) に通知してください。
- [フロントマターチェック](#frontmatter)
- リリースポストの非推奨化および削除セクションが GitLab Docs の対応するページにリンクすることを検証します。

個々の TW レビュアーとプロダクトマネージャーは、[非推奨化、削除、ブレイキングチェンジ](#deprecations-removals-and-breaking-changes) と[アップグレード](#upgrades) を含む、リリースポストアイテムのスタイルと言語の最終責任を持ちますが、TW リードは、スタイルと言語が妥当に一貫していないように見える場合（既知のガイドラインと明らかに同期していない）、リリースポストマネージャー、プロダクトマネージャー、TW レビュアーに通知する全体的な責任を持ちます。ただし、TW リードがスタイルと言語の不整合を*修正する*責任はありません。ただし、TW リードはリリースポストのすべてのリンクが関連するコンテンツを指していることを確認する責任と所有権を*持ち*、問題が見つかった場合は修正する必要があります。

考慮事項: リリースポストチームとコミュニケーションする際は、会話を追跡しやすくするため、リリースポストプレップチャンネルを使用し、ディスカッションをスレッドに整理してください。また、GitLab の[効果的な slack コミュニケーション](/handbook/communication/#slack) ガイダンスを確認してください。

### 構造チェック

*リリースポストマージリクエストに割り当てられたテクニカルライターは、構文とコンテンツ構造をチェックします。*

[メインリリースポストマージリクエストの説明にある **構造チェック** チェックリスト](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb#L301) が、構造チェックを案内します。

テクニカルライティングレビューはリリースポストアイテムの
マージリクエストで行われるため、構造チェックの目的は次のとおりです:

- 一貫性のために投稿全体をレビューします。たとえば、この日付で `auth-server` というアイテムを非推奨にする以前のリリースポストのエントリがある場合、`auth_server` と呼ばれるアイテムを削除するエントリもある場合は、質問を提起します。
- 投稿が適切にレンダリングされることを確認します。
- 全体としてのコンテンツが、新機能と機能改善を明確に説明している。
- すべてのリンクが機能し、適切に配置されていることを確認します。
- すべてのコンテンツの構文エラー、タイプミス、文法ミスをチェックし、余分な空白を削除します。
- これはリリースポストアイテムレビューで発生するはずですが、時間があれば、ドキュメントリンクと製品ティアをダブルチェックします。
- 現在のリリースの非推奨化と削除も、[非推奨化ドキュメント](https://docs.gitlab.com/update/deprecations/) に表示されることを確認します。

イントロダクションを追加するリリースポスト Markdown ファイルに特に注意してください。
イントロダクションを簡単にレビューしますが、書き方やメッセージングは変更しないでください。
これらは PMM が所有しているため、不必要な行き来を避けるために任せてください。
機能の説明が意味をなしていること、アンカーが正常に動作していること、すべての内部リンクが
相対パスを持つことを確認してください。

{{% alert title="注" color="info" %}}
リリースポストのイントロダクションやその他の部分には、外部の
ブログ投稿へのリンクが含まれる場合があります。これらのリンクは、リリース前の水曜日まで壊れている可能性がありますが、TW リードは
構造チェック中にフラグを立て、リリースポストマネージャーが、リリースポストブログが[リリース日](/handbook/engineering/releases/) にライブになる前に、外部ブログの著者と調整して
それらがライブになることを確実にすることを忘れないようにしてください。
{{% /alert %}}

リリースポストは特別なブログ投稿インスタンスとみなされるため、マーケティング
編集チームの
[スタイルガイド](../../brand-and-product-marketing/brand/content-style-guide.md) に従う必要があります。

### 変更を加える

リリース週の月曜日太平洋時間午前 8 時まで、TW リードはリリースポストに直接変更を加えることができるはずです。その時間後、今後のリリースに変更を含めたい人は、`release-X-Y` ブランチをターゲットとする別の MR で送信する必要がある場合があります。詳細については、[フィーチャーブランチで開発する](https://docs.gitlab.com/topics/git/) を参照してください。

### フロントマター

[フロントマター](#frontmatter) で:

- 以下のコードブロックに示されているように各エントリを探します。
- 残っている HTML コメントと未使用のブロックを削除して、ファイルをクリーンアップします。
- `title` の長さを確認してください。タイトルは短く、理解しやすいメッセージを伝える必要があります。タイトルがブログ投稿のタイトルグラフィックとうまく合うことを確認してください。タイトルの長さの一般的なガイドラインは約 60〜70 文字です。

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

投稿のフロントマターの最後の 2 つのエントリは、異なるレイアウトのオプションを提供します。暗いカバー画像を使用したい場合は、`header_layout_dark: true` のコメントを解除する必要があります。

リリース番号だけを暗くしたい場合は、`release_number_dark: true` のコメントを解除します。

これら 2 つの変数は独立して動作します。それらのいずれかまたは両方を同じ投稿に割り当てることができます。

### バージョン付きドキュメントリリース

新しい GitLab バージョンが[毎月](/handbook/engineering/releases/) リリースされる際に、前のマイルストーンの構造チェックを完了したテクニカルライターが、そのバージョンの公開されたドキュメントのリリースを設定します。

手順については、GitLab docs [月次リリースプロセス](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com/-/blob/main/doc/releases.md) を参照してください。

## TW レビュアー

{{% alert title="注" color="info" %}}
TW レビュアーは [TW リード](#tw-lead) と混同しないでください。
{{% /alert %}}

テクニカルライティングチームの各人は、[それぞれのステージ／グループ](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) に該当する個々のリリースポストアイテムと非推奨化アイテムをレビューする責任があります。

PM がリリースポストアイテムマージリクエストを作成するか、[非推奨化アナウンスを作成する](#deprecations-and-other-planned-breaking-change-announcements) ときに、彼らはレビュー（必須）のためにグループの TW にそれを割り当てる必要があります。TW レビューのプロセスは以下に記述されています:

- [リリースポストアイテムテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md)
- [**非推奨化** MR テンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md)

### 非推奨化ドキュメントの更新

[非推奨化](https://docs.gitlab.com/update/deprecations/) ドキュメントは [`gitlab/data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data) 内の .yml ファイルで生成されます。

html ページは自動的に生成されません。非推奨化アイテムのレビュアーとして割り当てられた TW は、ドキュメントをコンパイルするために Rake タスクを実行する必要があります。彼らはまた、ドキュメントが最新であることを確認するため、別のタスクを実行することができます。

非推奨化 MR の著者はコンテンツを作成する責任がありますが、ドキュメントを更新する責任はありません。

ドキュメントを更新する:

1. コマンドラインから [`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトのローカルクローンに移動し、MR のブランチをチェックアウトします。
1. [非推奨化ドキュメントをコンパイル](https://docs.gitlab.com/development/deprecation_guidelines/#update-the-deprecations-and-removals-documentation) します。
1. 更新されたドキュメントをコミットし、変更をプッシュします。
1. パイプラインが成功したときに MR をマージするように設定します（またはパイプラインがすでに完了している場合はマージします）。

非推奨化 MR は、リリースの 1 週間前の木曜日までにマージする必要があります。後でマージされた場合、コードカットオフを逃し、self-managed リリースのドキュメントに含まれない可能性があります。

エントリを編集する必要がある場合、[更新プロセス](#editing-an-announcement-entry) は同様です。

Rake タスクの実行で問題が発生した場合は、[トラブルシューティングの手順](#deprecation-rake-task-troubleshooting) を確認してください。

## Product Design レビュアー

{{% alert title="注" color="info" %}}
Product Designer [DRI](/handbook/people-group/directly-responsible-individuals/) は、[各デザイナーが割り当てられているステージ／グループ](/handbook/product/categories/#devops-stages) に従って個々のリリースポストアイテムをレビューします。
{{% /alert %}}

*各 PM は、リリースポスト内のコンテンツやビジュアルのレビューが必要な場合、Product Design カウンターパートに ping する責任があります。*

Product Designer はリリースポストアイテムについて協力し、レビューする必要があります:

- **JTBD**: アイテムがユーザーの[実行すべき仕事](/handbook/product/ux/jobs-to-be-done/) をどのようにサポートしているかをメッセージングがカプセル化していることを確認します。
- **MVC メッセージング**: 該当する場合は、デザインビジョンや将来のイテレーションを明確にします。これは、[建設中](/handbook/values/#under-construction) のアイテムや、その製品エリアを大幅なレベルで成熟させるのに貢献するアイテムを検討する際に特に重要です。
- **アーティファクト**: 投稿に含まれる UI 要素（スクリーンショット、GIF）が最新であり、すべての設計変更を反映していることを検証します。モックが使用されていないことを確認します。

## Engineering Manager

Engineering Manager の責任は、[Engineering Handbook](/handbook/engineering/workflow/release-feature-determination-workflow/) に記述されています。

## テクニカルアドバイザー

毎月、リリースポストマネージャーはリリースポストプロセス中の技術的ハードルにヘルプが必要になる場合があります。
参考のため、テクニカルアドバイザーがリリースポストの文書化された[技術的側面](#technical-aspects) をレビューすることをお勧めします。

リリースポストの他の月次志願者と異なり、テクニカルアドバイザーは常にリリースポストプロセスに従うことは期待されていません。リリースポストマネージャーは Slack 経由でテクニカルアドバイザーに連絡します。リリースポストの依頼はしばしば時間に敏感であるため、テクニカルアドバイザーは、夕方／週末を含めて、できるだけ早くリリースポストマネージャーまたはリリースポスト DRI に応答することが期待されます。**特にリリース週の月曜日から月の[リリース日](/handbook/engineering/releases/) までの間に**。

良いニュースは、リリースポストの技術的ハードルは多くの場合、技術専門家にとって妥当に簡単にトラブルシューティングできることです！

以下は、リリースポストマネージャーがヘルプを必要とする可能性のある問題のタイプです。

- リリースポストのさまざまな[自動化](#automation) と[技術的側面](#technical-aspects) のトリアージ
- パイプラインエラーをトリアージし、関連するマージリクエストに変更を提案するか、修正を提供する
- リリースポストのマージ競合を解決する
- アップストリームの問題を解決するため、他の技術チームと連携する時を特定する

## リリースポストアセンブリ中のヘルプの取得

### リリースポストマネージャー

ヘルプを求めるために `#release-post-prep` または `#release-post` チャンネルに投稿し、アセンブリに遅延がある可能性があることを他の人に認識させます。
ブロッカーを詳細に記述してください。スクリーンショット、ビデオなどは問題を診断するのに役立ちます。問題が緊急かどうかを示します。緊急と示す場合、応答または解決が必要な明確な日付／時刻を提供してください。

### テクニカルアドバイザー

リリースポストアセンブリ段階での以前の課題で見られたのは、リリースポストマネージャーが、ローカル開発環境（Ruby のセットアップ、権限、gems など）または git の競合の問題のため、何らかの困難を抱えていることです。git、Ruby、コマンドラインに精通している必要があります。問題を診断して解決するために使用できるリソースがいくつかあります:

- git ステータスを含むアセンブリスクリプトの出力をレビューする
- ./bin/doctor の実行と出力のレビューを検討する
- [以前の問題のリスト](/handbook/marketing/blog/release-posts/manual-release-post-kickoff/#possible-script-errors-with-corrective-actions) を参照する

インシデントの解決について自分の最善の判断に従い、診断と取られた手順を記録して、リリースポストプロセスと準備を改善できるようにします。この情報を新しい Issue または現在のリリースポスト振り返りの一部としてデポジットします。

#### 自動化

私たちは、認識すべき[スケジュール済みパイプラインジョブ](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を導入しました:

- 月のリリースの 3 週間前の月曜日にタスクが実行され、月次リリースポスト、MR、Issue を作成してリリースポストをキックオフします（[パイプライン設定](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L280-288); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L9)）
- <time datetime="16:00">午後 4 時 UTC（午前 11 時 ET / 午前 8 時 PT）</time>に、コンテンツアセンブリを実行するタスクが実行されます（[スケジュール済みパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/.gitlab-ci.yml#L290-299); [rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/tasks/release_post.rake#L373-399)）

## リリースポストデプロイメント中のヘルプの取得

### リリースポストマネージャー

すばやくブロッカーを解決する能力を使い果たしたら、`#release-post-prep` または `#release-post` チャンネルでテクニカルアドバイザーにメンションしてヘルプを求め、リリースポストデプロイメントに遅延がある可能性があることを他の人に認識させます。
ブロッカーを詳細に記述してください。スクリーンショット、ビデオなどは問題を診断するのに役立ちます。問題が緊急かどうかを示します。緊急と示す場合、応答または解決が必要な明確な日付／時刻を提供してください。

### テクニカルアドバイザー

リリースポストデプロイメントは、重要で時間に敏感な操作です。慎重かつすばやく応答してください。

以下に対して自分の最善の判断に従ってください:

- 自分の介入だけ、またはリリースポストマネージャーと協力して回復できる小さなインシデントについては、診断と取られた手順を記録して実行し、プロセスと準備を改善できるようにします。この情報を新しい Issue または現在のリリースポスト振り返りの一部としてデポジットします。
- GitLab.com に影響する大きなインシデントについては、インシデントがすでに宣言されているかを確認し、もしなければ、[インシデントの報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) を検討します。

## ヘルプ応答

リリース週の月曜日のリリースポストコンテンツアセンブリと[リリース日](/handbook/engineering/releases/) のリリースポストデプロイメントは、さまざまな部署を横断する複数の依存関係があり、時間に敏感です。GitLab チームメンバーは、これら 2 つの時間に敏感な手順中に見つかったブロッカーを支援するために自発的にしばしば自分の道から外れますが、誰がアクティブなブロック中の Issue の解決のために何をしているのかを混乱させる可能性があります。応答の取り組みに対する手続き的な詳細は以下に示します。

### 応答および解決 SLO

両方の主要なリリースポストアクション、アセンブリとデプロイメントの時間に敏感な性質のため、最初の応答時間は非常に短く、15 分以内である必要があります。Issue の解決もできるだけすばやく、可能な場合は 60 分以内である必要があります。

### テクニカルアドバイザーの役割

テクニカルアドバイザーの役割は、途中で発生するブロッカーに応答する調整役を意味します。彼らは単独で、または他の志願者と協力して、自分が適切と判断する方法でブロッカーを解決することができます。彼らはまた、ブロッカーをクリアし、他の人のアセンブリを調整し、応答タスクを委任する責任もあります。

### オーナーシップ、ポジティブコントロール、意図

いつでも Issue のオーナーは 1 人だけである必要があります。誰が問題を調査し修正するアクションのコントロールを持っているかを明確に理解する必要があります。ポジティブな交換のコントロール、つまり今度は責任を取る別の人にコントロールを渡します。
1 度に 1 人だけがコントロールを持つ必要があります。同様に、アクションを取っている人は意図を宣言する必要があります、「私は master を 13.8 リリースポストブランチにマージし、競合を解決します。」

### タイムライン

1. リリースポストマネージャーがブロックされている。ブロック解除の最初の試みが失敗している。
1. リリースポストマネージャーが `#release-post-prep` チャンネルに投稿し、このリリースのテクニカルアドバイザーをメンションして、ブロッカーの性質と重大度を詳細に記述します。
1. テクニカルアドバイザーはメッセージを見たことを認め、応答します。
1. テクニカルアドバイザーは、`release-post-13.8-deploy-failure` のような Issue 周りのコミュニケーションのために、オプションで専用の公開 Slack チャンネルを作成します。そのチャンネルは、他の人がついていけるよう共有されます。
1. 必要な場合、Zoom コールを開始します。新しく作成された Slack チャンネルに Zoom ルームへの招待を投稿します。
1. テクニカルアドバイザーがリリースポストマネージャーからコントロールを引き受けます。
1. 調査が始まります。できるだけ可視的になり、画面を共有します。Zoom セッションの録画を検討します。
1. アクションが取られます。
1. ブロッカーが解決されます。
1. Zoom を閉じます。
1. Issue に関するスクリーンショット、録画、ターミナル履歴、Slack のコメント、その他の証拠を収集します。
1. インシデントを文書化し、履歴をデポジットし、修正アクションまたは予防の提案を追加するため、新しい Issue を開きます。現在のリリースポスト振り返りに Issue をリンクします。

参照: [Google SRE 第 14 章](https://sre.google/sre-book/managing-incidents/)

## 進行中の技術サポートタスクの管理

誰もがリリースポストプロセスをサポートする技術 Issue に貢献できますが、負担の多くは現在の志願テックアドバイザーにかかっています。以下は、アクティブな Issue と今後の Issue の管理方法を概説します。

### 追跡

リリースポストの配信を促進するツールに変更を必要とする Issue には `~Release Post::Tech Advisor` ラベルを使用します。マイルストーン中に発生するか、振り返りで行われた決定のアーティファクトとして発生する優先度の低い課題のために Issue を作成します。即時のインシデント応答のために Issue を作成する必要はありません。リリースポストの配信にはすばやい解決と同期コミュニケーションが必要だからです。

[このボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/3130926?&label_name[]=Release%20Post%3A%3ATech%20Advisor) は、これらのラベル付き Issue を馴染みのあるソフトウェア開発ワークフローに整理します。Issue で作業するときは、自分自身を割り当て、適切なワークフローラベルと毎週の非同期更新で Issue を最新に保つよう努力します。テクニカルアドバイザーは、推奨事項を作成し、Issue にマイルストーンを適用することを歓迎します。

### ハンドオフ

1 人のテクニカルアドバイザーが連続したマイルストーンで奉仕する可能性は低いです。したがって、リリースポスト振り返りとキックオフの一部として、入社するテクニカルアドバイザーに Issue の状態について明確に伝達することは良いアイデアです。これを行うには:

- トランジション Issue を作成する
- アクティブに作業している Issue に対して、アクション、優先順位付け、マイルストーンの変更を推奨する
- それらに取り組む予定がない場合は、自分自身を割り当て解除し、ワークフローラベルを変更して、ピックアップする必要があることを明確にする
- リリースポストの最終ローテーション後、次のテックアドバイザーに連絡してコーヒーチャットを行い、今後のサイクルで優先される Issue やバグについての役立つ情報を提供する

志願ローテーション後にアクティブに開発中の Issue に貢献し続けることを好む場合は、それは素晴らしいことです。その状況では、自分が DRI になることを割り当てと Issue 更新を通じて明確にしてください。

---

## 月次リリースブログ投稿セクション

- [Notable Contributor](#notable-contributor)
- [機能](#features)
  - [トップ機能](#top-feature)
  - [プライマリ機能](#primary-features)
  - セカンダリ機能 (#secondary-features)
- [UI 改善、パフォーマンス改善、バグ修正](#ui-improvements-performance-improvements-and-bug-fixes)
- [Omnibus の改善](#omnibus-improvements)（セカンダリ機能として追加）
- [アップグレードに関する重要なメモ](#important-notes-on-upgrading)（オプション）
- [非推奨化および削除](#deprecations-and-other-planned-breaking-change-announcements)

### Notable Contributor

Developer Relations Engineering チームは、リリースポストのために GitLab Notable Contributor（旧 MVP）を指名、選択、追加するプロセスを所有しています。Developer Relations Engineering の [GitLab Notable Contributor Selection Process](/handbook/marketing/developer-relations/engineering/notable-contributor-process/) を参照してください。

リリースポストマネージャーは Notable Contributor 関連のタスクを持たなくなりました。

### 機能

リリースの最も関連する機能は、[プロダクトマネージャー](/handbook/product/categories/#devops-stages) によって投稿に含まれます。関連性と、ブログ投稿のどこに配置するかに従って機能を分類します:

#### トップ機能

リリースのトップ機能は Notable Contributor セクションの直後、その他のプライマリ機能の前に言及されます。ドキュメントリンクが必要です。[TW リード](#tw-lead) はこのアイテムのコンテンツに細心の注意を払います。リリースの「ヘッドライン」機能であり、特に正しく取得することが重要だからです。

リリースポストマネージャーは `top` 機能を選択します。以下は、どの機能を選択するかについてのガイドラインとして使用できます:

`top` 機能は次のようであるべきです:

- 大きなユーザーインパクトを持つ。
- 現在の FY 製品投資テーマに沿っている。
- すべてのデプロイメントタイプ（.com、SM、Dedicated）をカバーする。

`top` 機能は次のような場合があります:

- 有料ティア（premium または ultimate のみ）のみ。
- ベータ、ただし[実験的](#experimental-features) ではない。

リリースポストマネージャーは `top` 機能を選択し、`primary` 機能のレビューと一緒に、#release-post で割り当てられた Product VP からのフィードバックを求めます。リリースポストマネージャーは、`top` または `primary` 機能のフィードバックを組み込む必要があります。

トップ機能を指定するには、選択した機能のリリースポストアイテム `.yml` ファイルで `primary` を `top` に変更します:

```yaml
features:
  top:
```

#### プライマリ機能

より高い影響を持つ機能、トップ機能の後の行に表示されます。
すべてのリリースポスト[プライマリ機能](#primary-features) は [TW レビュアー](#tw-reviewers) によってレビューされる必要があります。
プライマリ機能を識別するには、RP `.yml` ファイルの `features` の直下の `primary` を探してください:

```yaml
features:
  primary:
```

#### セカンダリ機能

トップとプライマリ機能の後に続く GitLab のその他の関連する改善。すべてのリリースポストのセカンダリ機能は [TW レビュアー](#tw-reviewers) によってレビューされる必要があります。

セカンダリ機能を識別するには、RP `.yml` ファイルの `features` の直下の `secondary` を探してください:

```yaml
features:
  secondary:
```

### コンテンツブロック

***注:** 「機能ブロック」は現在、コンテンツブロックとして知られています。なぜなら、機能だけではない多くがあるからです。たとえば、アップグレード警告、Omnibus インストーラーの改善、パフォーマンスの強化が含まれます。*

コンテンツブロックを使用して、YAML データファイルに機能やその他のコンテンツを追加します。レイアウトは、Middleman の[テンプレートシステム](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/#template_engine) によって自動的に適用されます。

YAML データファイル内のコンテンツブロックには、以下のように例示される次のエントリが含まれます:

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

**説明** のコンテンツは、マーケティング編集チームの
[スタイルガイド](../../brand-and-product-marketing/brand/content-style-guide.md) に従う必要があります。

機能の説明に UI ナビゲーションの指示を含めないでください。これらの指示は
関連するドキュメントに含まれている必要があります。

#### 機能の優先度

コンテンツブロックの 2 行目は、機能がトップ、プライマリ、セカンダリ機能であるかどうかを示す必要があります。プライマリ機能の場合は、[上のサンプルコンテンツブロック](/handbook/marketing/blog/release-posts/#content-blocks) に示されているように `primary` キーを使用します。セカンダリ機能の場合は、`primary` キーを `secondary` という単語に置き換え、トップ機能の場合は `primary` を `top` に置き換えます。

#### 機能名

- `name`: 機能名、大文字化

すべての機能名には短く強い名前を使用してください。

#### 機能の可用性

正しいバッジ（Free、Premium、Ultimate）を機能に適用し、アドオン（Duo Pro、Duo Enterprise）を指定するには、次のパターンを使用してください。

##### サブスクリプションティア

機能が利用可能なサブスクリプションティアには、`available_in` を以下と共に使用してください:

- GitLab Free の場合、`[core, premium, ultimate]`
- GitLab Premium の場合、`[premium, ultimate]`
- GitLab Ultimate の場合、`[ultimate]`

  **重要な注意**: GitLab Free ティアはデータファイル内で `core` としてリストされています。これは意図的なものであり、ページテンプレートが適切なティア名をフロントエンドに適用します。

##### Offering

機能は、以下のフィールドを使用して GitLab.com、GitLab Self-Managed、GitLab Dedicated、
GitLab Dedicated for Government で利用可能にできます:

| フィールド                             | 説明                                               | デフォルト |
| --------------------------------- | --------------------------------------------------------- | ------- |
| `gitlab_com`                      | GitLab.com での可用性を制御。                      | `true`  |
| `self_managed`                    | GitLab Self-Managed での可用性を制御。             | `true`  |
| `gitlab_dedicated`                | GitLab Dedicated での可用性を制御。                | `false` |
| `gitlab_dedicated_for_government` | GitLab Dedicated for Government での可用性を制御。 | `false` |

一般的なシナリオ:

- GitLab.com でのみ利用可能な機能:

  ```yaml
    gitlab_com: true
    self_managed: false
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab Self-Managed でのみ利用可能な機能:

  ```yaml
    gitlab_com: false
    self_managed: true
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab.com と GitLab Self-Managed で利用可能な機能:

  ```yaml
    gitlab_com: true
    self_managed: true
    gitlab_dedicated: false
    gitlab_dedicated_for_government: false
  ```

- GitLab Dedicated でのみ利用可能な機能:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: true
    gitlab_dedicated_for_government: false
  ```

- GitLab Dedicated for Government でのみ利用可能な機能:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: false
    gitlab_dedicated_for_government: true
  ```

- 両方の GitLab Dedicated オファリングで利用可能な機能:

  ```yaml
    gitlab_com: false
    self_managed: false
    gitlab_dedicated: true
    gitlab_dedicated_for_government: true
  ```

- すべてのオファリングで利用可能な機能:

  ```yaml
    gitlab_com: true
    self_managed: true
    gitlab_dedicated: true
    gitlab_dedicated_for_government: true
  ```

##### `available_in` を使用したレガシー設定

{{< alert type="note" >}}

以下の設定は下位互換性のためまだ動作しますが、
前のセクションで説明した明示的なオファリングフィールドを使用する必要があります。
明示的なフィールドは、ティアの組み合わせを解釈する必要なく、どのオファリングが各機能をサポートするかを明確にします。

{{< /alert >}}

GitLab.com でのみ利用可能な機能の場合、`available_in:` を以下と共に使用してください:

- GitLab.com Free の場合、`[free, silver, gold]`
- GitLab.com Silver の場合、`[silver, gold]`
- GitLab.com Gold の場合、`[gold]`

`gitlab_com: false` が設定されている場合、GitLab.com バッジを self-managed バッジと混合することもできます:

- `available_in`:
  - GitLab.com の全ティアと self-managed の Premium と Ultimate ティアのみの可用性の場合は、`[free, silver, gold, premium, ultimate]` を使用し、`gitlab_com: false` を設定する
  - GitLab.com の Silver と Gold ティアと self-managed の全ティアの可用性の場合は、`[core, premium, ultimate, silver, gold]` を使用し、`gitlab_com: false` を設定する
  - GitLab.com の Gold ティアと self-managed の Premium と Ultimate ティアのみの可用性の場合は、`[premium, ultimate, gold]` を使用し、`gitlab_com: false` を設定する

##### アドオン

サブスクリプションアドオンを指定するには、`add_ons: [ ]` フィールドにテキストを入力します。
各エントリがバッジを追加します。Duo Pro と Duo Enterprise の両方を指定します。たとえば:

```yaml
add_ons: ["Duo Pro", "Duo Enterprise"]
```

Duo Pro のみが適用される場合、`add_ons: ["Duo Pro"]` を使用します。

##### フラグの背後にある機能

時々、機能はフィーチャーフラグの背後で開発され、より大きなオーディエンスに[ゆっくり利用可能](https://docs.gitlab.com/development/feature_flags/#feature-flags-in-gitlab-development) になることがあります。これが該当する場合、ベータテスターを意図的に募集している場合を除き、リリースポストにアイテムを含めないでください。これにより、機能の Issue がアナウンスされるよりも早いマイルストーンでクローズされる可能性があります。

ベータテストを意図的に募集している場合、機能を有効にしてフィードバックを提供する方法に関する手順とともに、リリースポストを含めてください。

#### ドキュメント

機能の **更新された** ドキュメントへのリンクを提供してください。これは必須フィールドです。
優先順序で、次のようになります:

- **機能ドキュメント** リンク、利用可能な場合
- **機能関連ドキュメント** リンク、専用ドキュメントが利用できない場合

機能が CE で利用可能であっても、常に EE ドキュメントにリンクしてください。

{{% alert title="重要" color="warning" %}}
リリースポストで言及されたすべての機能は、機能フリーズの前に間に合うように出荷された
最新のドキュメントにリンクする必要があります。
*"Docs or it didn't happen!"*
{{% /alert %}}

#### 機能レポーター

- `reporter`: コンテンツブロックを追加するユーザーの GitLab ハンドル
リリースポストへ（機能の著者ではない）。
これは機能の責任を持つ PM であるべきで、レビューフェーズで誰でも明確化のために ping する必要がある人物を知ることができます。
これは必須フィールドです。

#### ステージ

- `stage`: 機能が属する[ステージ](https://about.gitlab.com/stages-devops-lifecycle/)（小文字）:

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

ステージは、正規表現を使用してステージウェブページにリンクする
製品ティアのバッジの隣にアイコンとして表示されます:
`https://about.gitlab.com/stages-devops-lifecycle/<stage>/`。
[カスタムステージ URL](#custom-stage-url) でこれを上書きすることもできます。

`stage` は必須フィールドですが、機能が
どのステージにも全く属さない場合、`stage`
行を削除でき、何も出力しません。

アイコンの表示とともに、`stage` が設定されているため、PM は
他のユーザーが報告した場合でも、自分のエリアに関連するものを簡単に
見つけることができます。

{{% alert title="注" color="info" %}}
`team` は、`stage` の優先で 2018 年 12 月に GitLab 11.6 のために
[非推奨化](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/17198) され、
[それぞれのアイコン](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/17210) を導入するフォローアップイテレーションがあります。
{{% /alert %}}

##### カスタムステージ URL

DevOps ライフサイクル以外のステージ、例えば
他のステージと同じパス
（`/stages-devops-lifecycle/<stage>`）を持たない Growth などの場合、
デフォルトパスを上書きするためにコンテンツブロックに
`stage_url` を追加する必要があります:

```yml
# Growth
stage: growth
stage_url: '/handbook/product/growth/'
```

#### カテゴリ

- `category`（配列）: 機能が属する任意のカテゴリ。これらは通常、
ラベルとして機能の Issue にアタッチされています。カテゴリのリストは
[`/data/categories.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/categories.yml) で見つかります。
カテゴリ `name` を、データファイルに入力されたとおり正確に追加してください。

#### 関連 Issue、エピック、マージリクエスト、またはウェブページ

- `issue_url`: 機能が議論および開発されている GitLab.com の Issue へのリンク
このリンクを使用して、レビュアーは特定の
機能のステータスを一貫性と追加の参照のためにチェックできます。
広範なコミュニティが変更についてコンテキストを得られるよう、機密 Issue へのリンクは避けてください。
これは必須フィールドですが、`mr_url`、`issueboard_url`、または `epic_url` で置き換えることができます。
常にリンクをシングルクォートで囲んでください（`'https://example.com'`）。複数のリンクが許可されます。
- `issueboard_url`: 機能に関連する Issue ボードへのリンク。必須ではありませんが、利用可能です。
- `mr_url`: 機能を導入した MR へのリンク。必須ではありませんが、利用可能です。
- `epic_url`: 機能に関連するエピックへのリンク。必須ではありませんが、利用可能です。
- `webpage_url`: 特定の機能のマーケティングウェブページへのリンク。必須ではありませんが、利用可能です。

#### 機能の説明

- `description: |`: このエントリに機能の説明を追加します。
パイプ記号 `|` の下の行にカーソルを置き、1 回インデントします。
すべての `description` フィールドは [Markdown](https://about.gitlab.com/community/markdown-guide-middleman/) を完全にサポートしており、心配する必要があるのはインデントを尊重することだけです。

### カバー画像のライセンス

[ブログハンドブック](../../blog/_index.md#preparing-images) に従って 3rd 当事者のカバー画像が使用される場合、カバー画像のソースを提供する必要があります。以下のエントリを入力して、`...release.html.md` ブログ投稿の最後にこの情報を表示します:

```yaml
cover_img:
  image_url: '#link_to_original_image'
  licence: CC0 # which licence the image is available with
  licence_url: '#link_to_licence'
```

画像が GitLab によって生成された場合、著作権情報は必要なく、`rebrand_cover_img` を `true` に設定した後に `.html.md` ファイルから削除できます。

### アップグレードに関する重要なメモ

*Distribution Product Manager によって追加されます。*

{{% alert title="注" color="info" %}}
「アップグレードバロメーター」セクションは GitLab 11.8 で[非推奨化](https://gitlab.com/gitlab-com/gl-infra/delivery/issues/124) され、「GitLab X.Y へのアップグレードに関する重要なメモ」というセクションに置き換えられました。
{{% /alert %}}

アップグレード警告は、以下のような重要なアップグレードノートを記述するためにのみ、リリースポストに追加する必要があります:

- マイグレーション、ポストマイグレーション、バックグラウンドマイグレーション
- ダウンタイム
- 特別なケース

特定のリリースに関連する情報がない場合、このセクションを投稿に追加しないでください。

### UI 改善、パフォーマンス改善、バグ修正

リリースポストは、以下のラベルでフィルタリングされた関連するマイルストーンのクローズされた Issue またはマージリクエストに直接リンクします:

- バグ修正: `type::bug` `workflow::complete` `workflow::verification` `workflow::production`
- パフォーマンス改善: `bug::performance` `workflow::complete` `workflow::verification` `workflow::production`
- UI 改善: `UI polish` `Beautifying our UI`

[`workflow::complete` ラベルの追加](/handbook/product-development/how-we-work/product-development-flow/#required-statuses-2) を採用している間、`workflow::verification` と `workflow::production` が含まれています。`workflow::complete` は、Issue がユーザーによって配信されたと見なされることを示す望ましいラベルです。

### Omnibus の改善

*Distribution Product Manager によって追加されます。*

このセクションには、Omnibus パッケージを使用してデプロイされた self-managed GitLab インスタンスの管理に関する、パッケージ化されたソフトウェアの関連する更新、新機能、新しいコマンド（例: (`gitlab-backup`)）を含む必要があります。

### Extras

*プロダクトマネージャーによって追加され、Engineering Manager によってマージされます。*

他のコンテンツタイプに完全に当てはまらないアナウンスがある場合、`extras` コンテンツブロックを使用できます。アナウンスがこのタイプに当てはまると思う場合は、ガイダンスのために `#release-post` でリリースポストマネージャーと `@justin` に ping してください。

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

MR に次のラベルを適用します:

- `release post item`
- `release post`
- `release post item::extras`

レビューについては、ステージに割り当てられた[テクニカルライター](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) を選択してください。

MR が承認されたら、マージする前に `Ready` ラベルを追加してください。

### 非推奨化、削除、ブレイキングチェンジ

非推奨化、削除、ブレイキングチェンジのアナウンスは、[GitLab Docs](https://docs.gitlab.com/update/deprecations/) と、アナウンスの対応するマイルストーンのリリースポストに表示されます。

ブレイキングチェンジを発表したり進めたりする前にはリーダーシップの承認が必要なため、[ブレイキングチェンジ、非推奨化、削除のガイダンス](https://docs.gitlab.com/development/deprecation_guidelines/) をレビューして従ってください。

#### マイルストーンの期日

- リリースの 3 週間前の木曜日: アナウンス MR が作成されている
- リリースの 1 週間前の木曜日: MR がテクニカルライターに割り当てられている
- リリースの 1 週間前の木曜日: MR がマージされている

#### ウォークスルービデオ

このビデオはアナウンスを行うプロセスを案内します:

<figure class="video_container">
    <iframe src="https://www.youtube.com/embed/9gy7tg94j7s" title="Overview of deprecation and removal of features in GitLab releases" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

#### 非推奨化およびその他の計画されたブレイキングチェンジアナウンス

- 計画された削除日の少なくとも 3 マイルストーン前にプロダクトマネージャーまたは Engineering Manager によって追加され、テクニカルライターによってマージされます。

  *たとえば、意図された削除マイルストーンが `17.0` で、以下のリリーススケジュール: `16.9, 16.10, 16.11, 17.0` がある場合、`16.9` が意図された削除前の 3 番目のマイルストーンであり、非推奨化アナウンスの最後のマイルストーンです。*
- 各アナウンスに対して別々の MR を作成してください。
- 機能が製品から削除されるか、ブレイキングチェンジが実装されるまで、`features.yml` ファイルを編集しないでください。
- 1 つの MR に複数のアナウンスをバンドルしたい場合、たとえば「すべてかなし」として同じ日に発生する依存する非推奨化のグループの場合、リリースポストマネージャーと連絡してこれをまず話し合ってください。

##### アナウンスの作成

1. [`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトに新しいブランチを作成します。
1. [テンプレートファイル](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/deprecations/templates/example.yml) をコピーし、[`data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) フォルダーに保存します。
1. ファイルに `XX-YY-feature-name.yml` という名前を付けます。ここで `XX-YY` は最初のアナウンスのマイルストーンです。たとえば、`14-7-pseudonymizer-deprecation.yml`。
1. 変更の説明には [**非推奨化**](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md) MR テンプレートを使用してマージリクエストを作成します。
   1. タイトルは非推奨化または計画された変更を明確に説明する必要があります。たとえば:
      - "The `confidential` field for a `Note` is deprecated."
      - "The maximum number of characters in a job name will be limited to 250."
      - "Access tokens with no expiration date will be changed to have an expiration of one year."
      - "The `omniauth_crowd` gem is deprecated."
   1. 説明は以下を行う必要があります:
      - 明確で簡潔である。
      - 変更の詳細または理由の簡単な説明を提供する。
   1. 説明は、変更の結果としてユーザーが何をする必要があるかも説明する必要があります。言い換えると、エントリはユーザーまたは管理者によって *実行可能* である **必要があります**。たとえば:
      - "Use the `internal` keyword instead of `confidential`."
      - "Reduce the number of characters in all job names to be 250 characters or less."
      - "Give an expiration date to any access tokens that have no expiration date."
      - "Stop using the `omniauth_crowd` gem. It will be removed and will not be replaced."
   1. 「機能 A は非推奨化され削除されます。代替機能がリリースされるまで待ち、その時点で切り替えてください。」のようなアナウンスは避けてください。
      エントリが実行可能でない場合、ユーザーが変更に対処するためのアクションが利用可能になるまで、非推奨化または変更のアナウンスを延期してください。
1. テンプレートで推奨されているレビュアーを割り当てます。
1. `breaking_change` 値を `true` に設定し、MR に `~"breaking change"` ラベルを追加します。非推奨化または計画された変更がブレイキングチェンジを引き起こさない場合（まれですが可能）、`false` を使用し、ラベルを追加しないでください。
1. MR を[ステージに割り当てられた](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) テクニカルライターに割り当てます。

##### アナウンスのレビューとマージ

1. TW レビュアーはコンテンツをレビューし、[非推奨化ドキュメントを更新する](#update-the-deprecations-doc) コミットを追加し、リリースの 1 週間前の木曜日までに MR をマージします。マージ後、アナウンスは 1 時間以内に[非推奨化ドキュメントページ](https://docs.gitlab.com/update/deprecations/) に表示されます。
1. MR がカットオフ日を逃すリスクがある場合、重複した MR を開き、ターゲットブランチを `X-Y-stable-ee` に設定します。ここで `X-Y` はリリースされたバージョン `X.Y` と一致します。問題がある場合は `#mr-buddies` でヘルプを求めるか、[MR のバックポートのための完全なプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/process_new.md#gitlab-project) を参照してください。

#### サポート終了期間のアナウンス

[非推奨化テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/deprecations/templates/example.yml) は、削除前に機能のサポートを終了するオプションを提供します。このオプションは特別な状況でのみ使用すべきで、一般使用には推奨されません。ほとんどの機能は非推奨化されてから削除されるべきです。

サポート終了マイルストーンは、非推奨化アナウンスの *少なくとも 3 マイルストーン後* である必要があります。たとえば、非推奨化アナウンスが `15.1` で行われた場合、サポート終了マイルストーンは最も早くて `15.4` である必要があります。サポート終了マイルストーンと削除マイルストーンの間のギャップに関する要件はありません。

サポート終了マイルストーンがアナウンスされている場合、[非推奨化ページ](https://docs.gitlab.com/update/deprecations/) の非推奨化アナウンスのタイトル下に表示されます。サポート終了マイルストーンは現在、リリースポストには表示されません。

**サポート終了期間を定義するとき**

- 非推奨化と計画された削除の間に長い期間がある場合。
- 延長された非推奨化期間中の機能のサポートが、エンジニアリング速度（肥大化、依存関係管理など）に影響を与える場合。

**サポート終了の通信**

サポート終了期間を宣言することを決定した場合:

- 開発グループの[Support Stable Counterpart](/handbook/support/support-stable-counterparts/)（[製品カテゴリーページ](/handbook/product/categories/) にもリストされている）を確認し、`end_of_support_milestone` に値を追加する MR でタグ付けしてください。
- グループに Support Stable Counterpart がない場合、ステージまたはセクションの Support Counterpart を探してください。なければ、`#support_leadership` Slack チャンネルに準備 Issue（次の行）へのリンクとともに投稿してください。
- [Support コミュニケーションガイダンス](/handbook/support/internal-support/#contacting-users-about-gitlab-incidents-or-changes) に従って Support Readiness Issue を開いてください。

#### アナウンスエントリの編集

このプロセスはアナウンスエントリの作成と非常に似ています。違いは YAML ファイルがすでに存在することです。

既存のエントリを編集するには:

1. [`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab) プロジェクトに新しいブランチを作成します。
1. [`data/deprecations`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) ディレクトリで `.yml` ファイルを見つけて編集します。
1. 変更のためのマージリクエストを作成し、変更には [非推奨化](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md) MR テンプレートを使用します。
1. テンプレートで推奨されているレビュアーを割り当てます。
1. MR を[ステージに割り当てられた](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) テクニカルライターに割り当てます。（次のリリースのためにエントリを修正する場合は、リリースの 1 週間前の木曜日まで）
1. TW レビュアーはコンテンツをレビューし、[docs を更新](#update-the-deprecations-doc) するコミットを追加し、MR をマージします。（リリースの 1 週間前の木曜日まで）

---

#### アップグレード

*プロダクトマネージャーまたは Engineering Manager によって追加され、Engineering Manager によってマージされます。*

このバージョンへのアップグレード時に管理者が持つべき考慮事項を記述してください。これらは、データ損失の可能性、事前のメンテナンス推奨事項、その他の類似の懸念に関する警告である可能性があります。

将来のアップグレードに関する考慮事項は、[非推奨化](#deprecations-and-other-planned-breaking-change-announcements) セクションに記載する必要があります。

*1 つの注目すべき例は %12.10 で、[管理者に Postgres 10 から Postgres 11 へのマイグレーションを要求](https://about.gitlab.com/releases/2020/04/22/gitlab-12-10-released/#upgrade) しました。*

アップグレードアイテムは、通常のリリースポストアイテムと同じディレクトリに移動します。アップグレード通知を作成するには、[アップグレードテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/upgrade_sample.yml) を参照してください。`/data/release_posts/unreleased/` フォルダー内に各通知の以下のコンテンツブロックを使用して 1 つの .yml ファイルを作成してください:

```yaml
upgrades:
  - reporter: bikebilly # item author username
    description: |  # example (supports markdown)
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Veritatis, quisquam.
```

MR に次のラベルを適用します:

- `release post`
- `release post item`
- `release post item::upgrades`

レビューについては、ステージに割り当てられた[テクニカルライター](/handbook/product/ux/technical-writing/#assignments-to-devops-stages-and-groups) を選択してください。

MR が承認されたら、マージする前に `Ready` ラベルを追加してください。

## メジャーリリース

メジャーリリースは年に 1 回発生し、新しいバージョン管理サイクルを開始します: 14.0 - 14.10 --> 15.0 など。メジャーリリースのコンテンツへの貢献と管理は、[月次リリース](#schedule) と同じスケジュールに従います。ただし、メジャーリリースのリリースポストマネージャーは、メジャーリリースのための追加のアクティビティとニーズのため、Social、PR、Marketing チームからの追加の調整と通信を期待できます。

### ブレイキングチェンジの通信

プロダクトとエンジニアリングマネージャーは、リリースするブレイキングチェンジに関するコミュニケーション計画に責任があります。メジャーリリースのために、私たちはまた、すべてのブレイキングチェンジを 1 つの場所に記述する[ブログ投稿](https://about.gitlab.com/blog/a-guide-to-the-breaking-changes-in-gitlab-18-0/) を公開します。

## コンテンツの追加

Markdown をサポートするエントリには、すべてのブログ投稿および about.GitLab.com のウェブページで使用される通常の [Markdown Kramdown](https://about.gitlab.com/community/markdown-guide-middleman/) を使用してください。

## 技術的側面

リリースポストは多くの小さなデータファイルから作成され、テンプレートとヘルパーを使用して最終形式にレンダリングされます。

コンテンツファイルは、[開始](#getting-started) セクションに記述されているように、そのリリースに固有のコンテンツでリリースごとに作成する必要があります。

### 開始方法

テンプレートとヘルパーファイルは、多くのコンテンツファイルからブログ投稿をレンダリングするのに使用され、ほとんどのリリースで変更する必要はありません。

- **テンプレート:**
  - [レイアウト (Haml) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/layouts/release.haml):
    最終 HTML ファイルのレイアウトを作成し、以下の include ファイルが必要です。
  - [Include (Haml) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/sites/uncategorized/source/includes/release.html.haml):
    カスタムスタイルを適用して投稿のコンテンツを構築します。そのマークアップにはセマンティック SEO の改善が含まれています。
- **ヘルパー:**
  - [ヘルパー (Ruby) ファイル](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/helpers/release_post_helpers.rb): リリースポストがレンダリングされるとき、ヘルパーはすべてのリリースポストアイテムを、include (Haml) ファイルによって使用される変数に結合します。ヘルパーの出力は、GitLab 12.8 まで使用されていた単一のデータファイルプロセスと一致しています。
- **コンテンツ:**
  - **データ (YAML) ファイル**: それぞれが 1 つの機能、改善、または非推奨化のコンテンツを含みます。データファイルは [unreleased](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased) または [data/deprecations](https://gitlab.com/gitlab-org/gitlab/-/tree/master/data/deprecations) ディレクトリに追加され、その後 [リリース](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/12_8) ディレクトリに移動されます。ヘルパー (Ruby) の目的は、リリースポストのレンダリング時にこれらのファイルを結合することです。
  - **ブログ投稿 (Markdown) ファイル**: ブログ投稿ファイルには、ブログ投稿のイントロダクションとフロントマターが含まれます（[テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/blog/monthly_release_blog_template.html.md)、[例](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/sites/uncategorized/source/releases/posts/2017-05-22-gitlab-9-2-released.html.md)）。

テンプレートシステムがどのように機能するかについてさらに学ぶには、[Modern Static Site Generators](https://about.gitlab.com/blog/2016/06/10/ssg-overview-gitlab-pages-part-2/) の概要を読んでください。

ローカルでプロジェクトを実行するには:

1. ターミナルで `www-gitlab-com` プロジェクトに移動します。クローンした場所に応じて:

   ```sh
   cd /path/to/www-gitlab-com
   ```

1. 依存関係をインストールします:

   ```sh
   bundle install
   yarn
   ```

1. [Middleman を実行](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md#run-middleman) します。
1. `https://about.gitlab.com/` の代わりに `https://127.0.0.1:4567/` を使用して、リリースポストをローカルで確認します。たとえば、`https://127.0.0.1:4567/releases/2021/09/22/gitlab-14-3-released/`。

### 機能の順序

重要な注意: 機能の順序は、リリースポストマネージャーの承認なしに変更すべきではありません。

プライマリ機能コンテンツブロックはファイル名でアルファベット順にソートされるため、必要に応じて、各個別のコンテンツブロックのファイル名に 2 桁の数値プレフィックスを追加することで順序を影響できます。たとえば、`01_filename.yml`、`02_another_file.yml` など。

セカンダリ機能は、最初にステージごとにグループ化され、各ステージ内でタイトル順にアルファベット順にソートされます。指定されたステージがない機能は最後にグループ化されます。リリース 13.10 以前は、バグ修正、パフォーマンス改善、ユーザビリティセクションもこの自動ソート順の一部でした。リリース 13.11 から、バグ、パフォーマンス改善、ユーザビリティセクションはセカンダリ機能から第三次機能に変更されたため、セカンダリ機能の後、非推奨化、削除、アップグレードセクションの前に自動的に来ます。

時には、セカンダリ機能コンテンツの高さが左または右の列で大幅に長くなり、空白ができることがあります。その場合、エントリの yml ファイルに `force_left: true` または `force_right: true` を追加することで、左から右へまたはその逆へコンテンツのブロックを強制できます。（[この MR を例として参照](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/100024/diffs)）

### リリースポストブランチ作成 Rake タスク

リリースポストブランチと、関連するディレクトリ、ファイル、Issue、MR のほとんどは、[`release:start` Rake タスク](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/lib/tasks/release_post.rake) がリリースの 3 週間前の月曜日に自動的に実行されたときに自動的に作成されます。
スクリプトが実行に失敗するか、パイプラインの問題がある場合は、自分で `bundle exec rake release:start` を実行して以下を発生させることができます:

1. GitLab バージョン（例: 13.10）と ISO 形式のリリース
   ポスト日（例: 2021-03-22）を尋ねられます。スクリプトはこれら
   2 つの値を読み取り、次の手順で言及されているテンプレートで使用します。
   どちらかが欠けている場合、スクリプトは停止して終了します。
1. ブランチ名は、上で提供したバージョンに基づいて `release-X-Y` に設定されます。
1. スクリプトは、リリースブランチがすでに存在するかどうかを確認します。存在する場合、
   停止して終了します。スクリプトを再実行したい場合は、ローカルブランチを削除する必要があります（`git branch -D release-X-Y`）。
1. Git は現在の変更（もしあれば）をスタッシュし、`master` をチェックアウトし、`origin` からプル
   します（これは `gitlab-com/www-gitlab-com` リポジトリを指すデフォルトのリモートであるはずです。
   `git remote -v` で確認できます）。
1. その後、スクリプトは新しいリリースブランチを作成します。
1. [イントロ](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/sites/uncategorized/source/releases/posts)
   は、`doc/templates/blog/monthly_release_blog_template.html.md` 配下のテンプレートを使用して作成されます。
   最初の手順で提供したバージョンでスタブ X.Y 値を置き換え、著者名とハンドルを追加します。
1. リリースのデータディレクトリが `data/release_posts/X_Y/` 配下に作成されます。
   存在する場合、スクリプトは停止して終了します。スクリプトを再実行したい場合は、
   このディレクトリを削除する必要があります。
1. [Notable Contributor (MVP) テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/release_posts/unreleased/samples/mvp.yml)
   が、Notable Contributor (MVP) ファイル（`data/release_posts/X_Y/mvp.yml`）を作成するために使用されます。
1. 振り返り Issue が [Release-Post-Retrospective テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/Release-Post-Retrospective.md) を使用して生成され割り当てられます
1. スクリプトは、`data/release_post_managers.yml` のコンテンツを使用して、上記のすべての MR と Issue で以下の値を更新するために検索と置換を実行します:

- `@release_post_manager`: `manager`
- `@tw_lead`: `structural_check`
- `@tech_advisor`: `technical_advisor`
- `@pmm_lead`: `messaging`

1. スクリプトは、現在の日付とマイルストーンに基づいて、適切な値で `X-Y`、`X_Y`、`YYYY`、`MM`、`DD`、`_MILESTONE_` の出現を更新するために検索と置換を実行します。

### リリースポストアイテムジェネレーター

[リリースポストアイテムジェネレーター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/release-post-item) は、Issue とエピックを使用してリリースポストアイテムの作成を自動化します。Issue とエピックは、何の問題が解決されているか、どのようにかについての真実のソースであり、明確な説明と適切なラベル付けが必要です。スクリプトはこの情報を使用してリリースポストアイテム MR を事前入力します:

| Issue／Epic 要素                                      | リリースポストアイテム属性 (yml) または MR 要素 |
|---------------------------------------------------------|-------------------------------------------------|
| Issue タイトル                                             | `title:`                                        |
| ラベル `devops::`                                        | `stage:`                                        |
| ラベル `group::`                                         | グループ製品マネージャーをレポーターとして割り当て、[関連するチームメンバーを MR でタグ付け](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md) |
| ラベル `category:`                                       | `categories:`                                   |
| ラベル `release post item::`（`primary`/`secondary`）     | コンテンツブロックタイプ `primary:` または `secondary:`   |
| ラベルティア（例: `GitLab Core` `GitLab Premium` `GitLab Ultimate`） | `available_in:`                                 |
| Issue ウェブ URL（つまり `/gitlab-org/gitlab/-/issues/####`） | `issue_url:`                                    |
| `### Release notes` の下の Issue 説明             | `description:` には `documentation_link` を除くすべてのテキストが含まれます<br><br>`documentation_link:` は `### Release notes` セクション内の `https://docs.gitlab.com*` を含む最初の URL です |

**重要な注意:** データファイル内で GitLab Free ティアは `core` として参照されます。これは意図的なものであり、ページテンプレートが適切なティア名をフロントエンドに適用します。

ジェネレータースクリプトが正しく実行されることを確認するには、以下のプロセスに従ってください:

1. Issue がオープンであることを確認します。
1. Issue が機密でないことを確認します。機密 Issue にリンクする必要がある場合は、[リリースポストアイテムジェネレーター](/handbook/marketing/blog/release-posts/#release-post-item-generator) は現在、機密 Issue から MR を作成しないため、リリースポストアイテムマージリクエストを手動で作成する必要があります。
1. Issue またはエピックを `### Release notes` のコンテンツ（docs リンクを含む。これらは常に MR で後で追加／更新できますが）で更新し、特に `Description:` の後に `Documentation:` を含めます。
1. `### Release notes` 配下のコンテンツに、プレーンテキストのみがあることを確認します。追加のフォーマットがある場合、スクリプトは失敗します。
1. `devops::`、`group::`、`category:`、ティア（例: `GitLab Core`）ラベルが適用されていることを確認します
1. `release post item::` スコープラベルの 1 つを適用します。これにより、ジェネレータースクリプトが次に実行されるとき（1 時間に 1 回）に Issue がピックアップされます

スクリプトが実行されると、`/gitlab-com/www-gitlab-com` プロジェクトでドラフト MR が開かれ、グループ PM に割り当てられます。そこからその MR の編集とレビューを続けることができます。

最後のパイプラインがいつ実行されたか（および Issue がピックアップされたか）を確認したい場合は、[スケジュール済みパイプライン](https://gitlab.com/gitlab-com/www-gitlab-com/-/pipeline_schedules) を確認できます。

`release post item generator` の使用方法を示す[この概要ビデオ](https://www.youtube.com/watch?v=rfn9ebgTwKg) を視聴することもできます。

*注: `release post item generator` で問題が見つかった場合、質問は Slack #release-post に投稿するか、リリースポスト[テクニカルアドバイザー](#technical-advisors) をタグ付けして、リリースポスト振り返り Issue にフィードバックを追加してください。

ジェネレータースクリプトはコンピューターでも実行できます。

1. `www-gitlab-com` プロジェクトをクローンし、`bundle install` を使用して依存関係をインストールします
1. GitLab プライベートアクセストークンと Issue URL を提供してスクリプトを実行します:

   ```shell
   PRIVATE_TOKEN=<token> bin/release-post-item --no-local <issue_url>
   ```

完全なドキュメントについては `bin/release-post-item --help` を参照してください。

### リリースポストアイテムのリンティング

[リリースポストアイテムリンター](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/validate-release-post-item) は、`data/release_posts/unreleased` ディレクトリにマージされるすべてのアイテムが最低限の標準を満たすことを検証します。具体的には、以下をチェックします:

- YAML が解析できる
- [スキーマ]( https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/schemas/releasepost.schema.json) への準拠
  - 各ファイルには正確に 1 つのアイテム（例: 機能または非推奨化）が含まれる
  - コンテンツブロックは有効なフィールドを持つ
  - 非推奨化は有効なフィールドを持つ
- `stage` フィールドは `data/stages.yml` で有効なステージキーにマッピングする
- `categories` リストには `data/categories.yml` から有効なカテゴリ名のみが含まれる

以下はチェックしません:

- `issue_url` が提供されているか、他の代替手段があるため

スキーマは [Rx](https://rx.codesimply.com/index.html) を使用して実装されています。

### 非推奨化 rake タスクのトラブルシューティング

rake タスクの実行に問題がある場合は、以下のトラブルシューティング手順を確認できます:

- Ruby バージョンが[`gitlab-org/gitlab` プロジェクトの Ruby バージョン](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.ruby-version) と一致することを確認します。`ruby -v` で確認できます。ターミナルから `./bin/doctor` を実行することで、セットアップを検証することもできます。
- `bundle install` を実行して gems を更新します。
- バンドラーバージョンが古い可能性があるため、`gem install bundler:2.1.4` を実行してみてください。

### deprecations.md でのマージ競合の解決

非推奨化または削除 MR のブランチをリベースする場合、`deprecations.md` ファイルに複数のマージ競合がある可能性があります。IDE から個々のマージ競合を解決しないでください。代わりに、削除 rake タスクを使用してファイルを更新し、マージ競合を解決してください。

マージ競合を解決するには:

1. `gitlab-org/gitlab` プロジェクトでチェックアウトしたブランチで、非推奨化 Rake タスクを実行します:

   ```sh
   # For deprecations
   bin/rake gitlab:docs:compile_deprecations
   ```

1. 変更をステージングします:

   ```sh
   git add .
   ```

1. リベースを継続します:

   ```sh
   git rebase --continue
   ```

リベースを継続した後にマージ競合が発生した場合、`deprecations.md` がまだ
`yml` の最新の変更と同期されていない可能性があります。これが発生した場合、マージ競合をクリアするまで手順をもう一度完了してください。

### リリースポストマージリクエストテンプレート

[リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb) はすべてのリリースのためのチェックリストです。最新の状態に保ちましょう！ :)

### `www-gitlab-com` に非推奨化と削除のインデックスを追加

リリースポストで非推奨化と削除のリストを表示するには、`gitlab` プロジェクトからインデックスを生成し、`www-gitlab-com` プロジェクトの `data/release_posts/xx_y` に追加する必要があります。

1. `gitlab` プロジェクトでターミナルを開きます
1. `bin/rake gitlab:docs:write_deprecations` を実行します
1. プロンプトされたら関連するマイルストーンを入力します
1. 生成されたファイルを `www-gitlab-com` プロジェクトの対応する `/data/release_posts/xx_y` に手動でコピー＆ペーストします
1. 非推奨化インデックスの最初の行に `deprecations:` を追加します
1. 両方のファイルで `name:` のすべてのインスタンスを `feature_name:` に変更します

---

## パッチおよびセキュリティリリースポスト

Delivery チームは、[パッチ](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/blog-post.md) および[セキュリティリリース](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#critical-security-releases) のリリースポストを作成する責任があります。

リリースポストは `sites/uncategorized/source/releases/posts` に存在する必要があります。パッチおよびセキュリティリリースのために、
タイトルに必ずそれらを指定し、正しい[カテゴリ](../#categories) を追加してください:

- パッチリリース:
  - `title: "GitLab Patch Release: x.y.z and x.y.z"`
  - `categories: releases`
- セキュリティリリース:
  - `title: "GitLab Security Release: x.y.z and x.y.z"`
  - `categories: releases`

## What's New エントリの MR を作成

[プロセスのビデオウォークスルー](https://youtu.be/GxKooIAknM8)

**"What's new" は GitLab のナビゲーションメニューの `?` アイコンをクリックして「What's new」を選択することで見ることができます。**

[What's New](/handbook/product/categories/gitlab-the-product/#using-whats-new-to-communicate-updates-to-users) MR は、リリースポストマネージャーによってリリース週の火曜日に開始され、リリース週の水曜日に最終化され、通常リリースポストが[リリース日](/handbook/engineering/releases/) にライブになった 2〜4 時間後に `maintainer` によってマージされます。マージの正確なタイミングは、マージできる `maintainer` の空き状況に依存します**。

{{< note >}}
以下の手順は完全な手動プロセスを概説しています。リリースポスト MR の説明は、利用可能な部分的な自動化に関する手順を提供します。
{{< /note >}}

1. リリース週の火曜日に、リリースポストマネージャーが What's New MR を作成します。
1. RPM は、「What's New」で特集するためにリリースポストのすべての最終／承認されたプライマリアイテムを引っ張ります
    - 選択されたアイテムは、リリースポストのプライマリ機能と一致できますが、必ずしも一致する必要はありません。RPM がユニークな選択を行うのに自信があれば、そうしても構いません。
    - 無料および有料ユーザーの両方が利用できる機能のバランスを目指すことをお勧めします。Ultimate 機能のみを含める場合、非 Ultimate ユーザーはエンゲージメントを止める可能性があります。
1. リリースポストマネージャーは、`gitlab.com/gitlab-org/gitlab` プロジェクトで新しい MR を作成します
   1. この[テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/data/whats_new/templates/YYYYMMDD0001_XX_YY.yml) を使用して、`gitlab/data/whats_new` ディレクトリに新しいファイルを作成します。
   1. ファイルを `YYYYMMDD0001_XX_YY.yml` というタイトルにします - たとえば、13.4 エントリは `202009300001_13_04.yml` という名前です。
   1. リリースポストアイテムにあるコンテンツを使用して、What's New のコンテンツを複製します。
      1. 説明をトリミングする必要がある場合があります。これらは短く、一般的に 1 段落であることを念頭に置いてください。
      1. SaaS のみの機能は、リリースポストアイテムで使用される `[free, silver, gold]` または `core` の代わりに、What's New MR で `[free, premium, ultimate]` を使用する必要があります。今後この不一致を合理化しますが、今のところ、What's New MR を作成する際に必要に応じて RPM が値を更新する必要があります。
      1. ステージ名は大文字小文字を区別するため、パイプラインが通るようにステージが大文字化されていることを確認してください。
1. 関連するリリース `milestone`（「expired」と表示されていても問題ありません）と、ラベル `documentation`、`type::maintenance`、`whats new`、`release post` を適用します。
1. リリース週の火曜日、MR がレビュー準備できたら、`@[name of PLT member who is reviewing this month]` をレビュアーとして割り当て、リリース週の水曜日までにレビューを完了するため MR で `@mention` します。今月レビューする PLT メンバーの名前は、[リリースポストスケジュールページ](/handbook/marketing/blog/release-posts/managers/) で見つかります
1. リリースポストがライブになった後、私たちの標準[コードレビュープロセス](https://docs.gitlab.com/development/code_review/) に従って MR をレビューし、`maintainer` によってマージしてもらいます。不必要な遅延を避けるため、MR が時間に敏感であることをメンテナに直接伝えることをお勧めします。
1. 重複した MR を開き、ターゲットブランチを `X-Y-stable-ee` に設定します。ここで `X-Y` はリリースされたバージョン `X.Y` と一致します。それを前の MR をマージしたメンテナと同じ人に割り当てます。この 2 番目の MR は、バージョン `X.Y` への追加のリリースがこの「What's New」更新を含むようにします。問題がある場合は `#mr-buddies` でヘルプを求めるか、[MR のバックポートのための完全なプロセス](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/patch/process_new.md#gitlab-project) を参照してください。

**重要: リリースポストが[リリース日](/handbook/engineering/releases/) にライブになるまで、MR をマージしないでください** リリースポストがライブになった後、しかしマージする前に、ブランチをチェックアウトし、すべてのリンクが正確であり、What's New アイテムが最終リリースポストの一部であることを確認するため GDK でコンテンツをチェックする必要があります。それらが確認されてから、初めて MR をマージする必要があります。通常、これは What's New コンテンツが[リリース日](/handbook/engineering/releases/) から 1 〜 2 日後にライブになることを意味します。メンテナレビューに依存します。

## 関連

### ページ

- [GitLab the product](/handbook/product/categories/gitlab-the-product/#gitlab-the-product)
- [非推奨化、削除、ブレイキングチェンジに関する一般ガイダンス](https://docs.gitlab.com/development/deprecation_guidelines/)
- [リリースポスト志願者スケジュール](managers/)
- [セキュリティおよび月次リリース](https://about.gitlab.com/releases/categories/releases/)
- [リリースごとの機能](https://about.gitlab.com/releases/)
- [GitLab CE と GitLab EE の変更ログ](https://gitlab.com/gitlab-org/gitlab/-/blob/master/CHANGELOG.md)
- [リリースマネージャー](https://about.gitlab.com/community/release-managers/)

### テンプレート

- [月次リリースポスト MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post.md.erb)
- [リリースポストアイテム MR テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/merge_request_templates/Release-Post-Item.md)
- [非推奨化 Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Deprecations.md)
- [非推奨化 MR テンプレート](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/merge_request_templates/Deprecations.md)
- [リリースポスト振り返り Issue テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/Release-Post-Retrospective.md)
- [YML コンテンツブロックのサンプル](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/release_posts/unreleased/samples)
- [パッチリリーステンプレート](https://gitlab.com/gitlab-org/release-tools/-/blob/master/templates/patch_release_blog_template.html.md.erb)
- [セキュリティリリーステンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/blog/security_release_blog_template.html.md)
