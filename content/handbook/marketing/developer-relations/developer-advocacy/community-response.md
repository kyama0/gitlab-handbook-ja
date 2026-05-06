---
title: "デベロッパーアドボカシー コミュニティ対応プロセス"
upstream_path: /handbook/marketing/developer-relations/developer-advocacy/community-response/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## コミュニティ対応にデベロッパーアドボケイトを巻き込む方法

デベロッパーアドボカシーチームのコミュニティへの理解と GitLab に関する幅広い知識を踏まえて、私たちはコミュニティメンバーの緊急かつ重要な懸念に GitLab が対処する必要がある状況に従事します。

私たちのチームは、[Community response ボード](https://gitlab.com/groups/gitlab-com/-/boards/2727876?&label_name[]=Community%20response) を使用してタスクを整理しています。

### 通知

* **来たる発表:** デベロッパーアドボカシーチームに、コミュニティから反応を引き起こす可能性のある来たる発表、製品変更、その他のニュースイベントを通知するには、DRI は関連する Issue で `@johncoghlan` にコメントするか、[#dev-advocacy-team Slack チャンネル](https://gitlab.slack.com/archives/CMELFQS4B) でデベロッパーアドボカシーチームに通知してください。また、この発表に関連する Issue または epic に `~Community Interest` および `~Community response` ラベルを付けてください。
* **進行中の状況:** デベロッパーアドボカシーチームに進行中の緊急の状況を通知するには、状況が議論されている Slack スレッドまたはチャンネル、または [#dev-advocacy-team Slack チャンネル](https://gitlab.slack.com/archives/CMELFQS4B) で `@dev-advocates` ユーザーグループにタグを付けてください。
* 発表のメッセージングへの影響、コミュニティへの返信の準備、対応のスケジューリングを支援できるよう、デベロッパーアドボカシーチームにできるだけ早めに通知してください。詳細は以下の **スケジューリング** を参照してください。
* 関連する Issue、epic、MR に `Community response` ラベルを追加してください。私たちのチームは、[gitlab-com](https://gitlab.com/groups/gitlab-com/-/labels?search=community+response) と [gitlab-org](https://gitlab.com/groups/gitlab-org/-/labels?search=community+response) グループのラベルを所有しています。次のクイックアクションを使用してラベルを適用できます: `/label ~"dev-evangelism" ~"Community response"`

### 準備

* GitLab の [効率（efficiency）バリュー](/handbook/values/#efficiency) に沿って、デベロッパーアドボケイトはコミュニティ対応の状況の [直接の責任者（DRI）](/handbook/people-group/directly-responsible-individuals/) と協力して、DRI と他の専門家がコミュニティのフィードバックや質問に直接対処できるよう支援します。
* 可能な場合、デベロッパーアドボカシーチームは通常、DRI と協力して、コミュニティから予想される質問・懸念のリストと回答ドラフトを作成します。利用可能な場合、メディア対応、顧客対応のために用意された資料、または状況に関連するその他の資料も対応準備に含めます。
* 優先度の高い発表やニュースについては、DRI と一緒に練習演習を行い、準備をテストします。
* 多くの場合、コミュニティが GitLab フォーラムでフィードバックを共有するように誘導したいと考えます。ブログ記事、発表、コミュニティ対応からリンクできる投稿を準備しておくことで、フィードバックの収集と返信の管理を効率化できます。この投稿は、発表時に公開されるプライベートな投稿として、フォーラム管理者によって事前に作成する必要があります。
  * _注: フィードバックにフォーラム投稿が使用される場合、議論をフォーラムで促すためにブログのコメントをオフにすることを検討してください。_

#### コミュニティ対応計画

* 可能な場合、[Community Response Plan テンプレート](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=community-response-plan) を使用して Issue を作成し、テンプレートの指示に従って各セクションに詳細を追加してください。
* この Issue は、ステークホルダーと共有して詳細情報を収集したり、必要に応じて承認を得たりするために使用できます。

#### フォーラムトピックの準備

* [フォーラムについてのページ](https://forum.gitlab.com/about) にリストされている管理者とモデレーターの中からフォーラム DRI を定義してください。
* 対応依頼者として、次の詳細を提供してください:
  * **フォーラムトピックタイトル**。ブログ記事のタイトル、または緊急時には中立的なプレースホルダーで構いません。Discourse フォーラムは、トピックを URL スラッグとして自動的にレンダリングします。
  * **最終的なブログ記事の URL**。まだ存在している必要はありません。
* フォーラム DRI は `+ New topic` に移動し、カテゴリとして [Internal](https://forum.gitlab.com/c/internal/) を選択します。これは、チームメンバーがアクセスできるプライベートカテゴリです。
  * トピックタイトルを設定し、後でプレビューがレンダリングされるブログ記事の URL をリンクします。
  * フォーラムトピックを作成し、URL を対応依頼者に送信します。
  * URL を [フォーラムコミュニティ対応ワークフロー](/handbook/marketing/developer-relations/workflows-tools/forum/#forum-community-response-workflow) ハンドブックと一緒に共有し、フォーラムでトピックをレビュー・編集する方法の指示を提供します。

**ブログ記事の公開とフォーラムトピックの公開を調整してください。** これらは互いに循環的に依存しており、同じ分単位で実行する必要があります。

* フォーラム DRI はトピックを編集し、カテゴリを `Community` に変更して編集を保存します。
* トピックが発表前に準備されていた場合、フォーラム DRI はタイムスタンプを公開日に合わせて更新します。
* トピックが編集され、複数のリビジョンがある場合、混乱を避けるため、フォーラム DRI は各リビジョンを `Hide Revisions` する必要があります。
* これにより、トピック URL が一般公開されます。新しいシークレットブラウザ（macOS の Chrome では `cmd+shift+n`）でこれを確認してください。
* Slack や Issue で URL を対応依頼者と共有してください。

ヒント: ブログ記事の URL がまだ準備できていない場合は、空のフォーラムトピックを作成し、公開ステップでブログ URL を追加してください。Discourse には投稿にテキストが必要なので、`**TODO: Add blog post URL and description**` を使用してください。

### スケジューリング

* 通常の業務時間外（通常は月曜～金曜、UTC 9:00～22:00）の監視と対応が必要と予想される場合は、できるだけ早めに私たちのチームに通知して、対応をスケジュールできるようにしてください。
* 通常の業務時間外で状況に対応するデベロッパーアドボカシーチームのメンバーは、状況の前後の日・週に休暇をスケジュールすることで、追加の時間を相殺することを強く推奨します。
* スケジューリングは DRI と調整し、スプレッドシートで追跡してください。必要なカバレッジの量に応じて、ソーシャルメディアチームや他のチームとのコラボレーションが必要になる場合があります。
* デベロッパーアドボケイトは、Hacker News におけるリリース投稿の過去のパフォーマンスを踏まえて、リリース日にリリース投稿に対応する準備を常に整えておくべきです。

### モニタリング

* 私たちのチームは通常、[GitLab フォーラム](https://forum.gitlab.com/)、[Hacker News](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/)、Reddit、その他のオンラインフォーラムをモニタリングします。
* ソーシャルメディアで特定したコンテンツは、必要に応じて適切なチャンネルでフラグを立てます。
* これらのフォーラムを監視する目的は、GitLab からの応答が必要なコメントを特定し、直接応答するか、それらのコメントを応答する適切なチームメンバーと共有することです。

#### モニタリングの自動化

効率と対応チームの個人への不必要なストレスを避けるために、手動のタスクを自動化することを目指すべきです。多くの場合、RSS フィードを使用して、Slack チャンネルに GitLab への言及を投稿します。

個別のコミュニティ対応チャンネルの監視プロセスにおける一貫性を目指していますが、プラットフォームの性質上、不可能な場合があります。自動化が不可能な場合は、監視タスクをそのチームに分散します。

これは、チームが聞き取る一部のチャンネルでの監視プロセスを自動化するための一般的な推奨事項のセットです:

* **Hacker News**:
  * "GitLab" キーワードを含む新しい投稿とコメントは、[#hn-mentions](https://gitlab.slack.com/archives/CBL93C22D) Slack チャンネルで共有されます。
  * フロントページに到達し、"GitLab" キーワードを含む投稿は、@dev-advocates と @sytses の追加タグ付きで [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) Slack チャンネルで共有されます。
  * 注: これらの自動化はどちらも、対応が不要な多くの投稿やコメントを取得します。たとえば、GitLab でホストされているオープンソースプロジェクトへのリンクなどです。
* **GitLab フォーラム**:
  * 対応チームの全員が特定のフォーラムスレッドのアラートに登録し、監視タスクを分散できます。
* **ブログ投稿**:
  * 変更を発表するブログ投稿からフォーラム投稿がリンクされている場合、フォーラム投稿でのエンゲージメントを促進し、より効率的な監視のために、コメントを無効にすることをお勧めします。コメントを無効にする方法はブログハンドブックで [コメントを無効にする](/handbook/marketing/blog/#comments) を確認してください。
  * コメントが有効な場合、新しいコメントは [#mentions-of-gitlab](https://gitlab.slack.com/messages/mentions-of-gitlab) Slack チャンネルに投稿されます。より効率的な監視のために、そのチャンネルに参加してください。

### 対応

可能で適切な場合、私たちのチームは、コミュニティに対応するために専門家を巻き込みます。DRI からのこの直接的なフィードバックは、[広範な GitLab コミュニティのメンバーから感謝されています](https://news.ycombinator.com/item?id=26261479)。また、DRI と専門家がコミュニティの感情をよりよく理解し、コミュニティから直接フィードバックを得ることができます。特定の機能の DRI を特定するには、次のいずれかの手順に従ってください:

1. 該当する機能のドキュメントページを Google で検索します。例: [CI/CD](https://docs.gitlab.com/ee/ci/)。
1. 機能のドキュメントページの一番下までスクロールします。
1. ページの一番下にある「View page source」リンクをクリックします。
1. ファイルがブラウザで開いたら、ファイルの先頭をレビューして、機能を所有するステージ・グループを確認します。
1. ブラウザの検索機能（macOS のキーボードショートカット `cmd + f`）を使用して、[製品セクション、ステージ、グループ、カテゴリ](/handbook/product/categories/) ページまたは [グループ別機能](/handbook/product/categories/features/) ページでその機能、グループ、ステージを検索します。

可能な限り、可視性を高めるために PM またはその他の適切な DRI に公開 Slack チャンネルで連絡し、DRI が対応できない場合に他の人が関与できるようにしてください。

これらの追加ステップをレビューしてください:

* 必要に応じて、デベロッパーアドボケイトは GitLab フォーラム、Hacker News、その他のフォーラムで、コミュニティの質問や懸念に対応します。
* GitLab に関する投稿が Hacker News のフロントページに到達した場合、Zoom ルームと Google ドキュメントを使用して、同期的に応答について協力する場合があります。状況が議論されている Slack スレッドまたはチャンネル、または [#dev-advocacy-team Slack チャンネル](https://gitlab.slack.com/archives/CMELFQS4B) で Zoom ルームと Google ドキュメントへのリンクを共有します。
* デベロッパーアドボカシーチームは、これらの発表や速報の状況の間、Twitter やその他のソーシャルメディアチャンネルでの応答にはほとんど関与しません。これらの状況では、Twitter、Facebook、LinkedIn は主に [ソーシャルメディアチーム](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) が所有します。
* メッセージングが繊細な状況では、応答を作成するために [コーポレートコミュニケーションズチーム](/handbook/marketing/corporate-communications/) からの承認済みメッセージングに依存します。

#### ラピッドアクション応答

多くのスレッドがあり、複数の回答が必要な進行中の議論がある場合、それらに対処するために行動を起こすバイアスで進めてください。

* 議論がバグやセキュリティ上の懸念に関するものである場合、行動を起こす前にトピックを分析・理解してください。
  * 懸念事項に明確に対処するようにしてください。
  * 根本的な質問や推測への回答を含めてください。
* フィードバックから Issue の説明を更新してください（不明な点や議論ポイントが残っている場合）。
* リンクされた URL のコンテキストを返信にコピーしてください。すべての人が URL をクリックするわけではなく、コンテキストを見逃す可能性があります。
* 機能やコード品質を改善する方法についてフィードバックや貢献を求めてください。
* 送信前に、すべての応答が [SAFE](/handbook/legal/safe-framework/) であり、GitLab の [チームメンバーソーシャルメディアポリシー](/handbook/marketing/team-member-social-media-policy/) に準拠していることを確認してください。

[ユーザー名でファイル拡張子が許可されない件についての HackerNews スレッド](https://news.ycombinator.com/item?id=28535298) の分析例:

```text
This bug affects the user profile page, when you call it like https://gitlab.com/dnsmichi.html it will not render the page correctly.
The attempt to fix was to disallow reserved file type extensions, but the error message was wrong.
```

加えて、セキュリティに関する推測がありました: `does GitLab filtering this indicate that the protection against injection attacks is brittle?` これは [このコメント](https://news.ycombinator.com/item?id=28540665) で追加の説明が必要でした。

明確さが加わることで、より多くの専門家やステークホルダーを議論に巻き込むことができます。

**トピックが GitLab について明示的に言及されており、Hacker News のフロントページに数時間あるとき、私たちは頻繁に監視・再訪する必要があります。**

### フィードバック

* 主要なコミュニティ対応の状況の後には、次の目的を達成するためにレトロスペクティブを開催する必要があります:
  * メッセージと準備の質を評価する
  * 状況に対するスタッフィングのレベル、イベントのカバーに費やした時間を評価する
  * より良い準備のために行ったこと、または行えたことを特定し、将来の対応状況に適用できるようにする
  * 学んだことに基づいて、このハンドブックページや他の資料を更新する
* 私たちのチームは、サポートを求められた発表または進行中の状況に対するレポートまたはレトロスペクティブプロセスの一部として、監視からのセンチメント評価を喜んで提供します。フィードバックをリクエストするには、明確な依頼を伴って適切な Issue またはドキュメントで私たちにタグを付けてください。
