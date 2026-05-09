---
title: グローバルナレッジベース
description: GitLab グローバルナレッジベース
upstream_path: /handbook/support/knowledge-base/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T13:00:00Z"
translator: claude
stale: false
---
グローバルナレッジベースは、顧客の問題に対するソリューションを検索可能な形で集約したリポジトリで、ユーザーがサポートに問い合わせることなく素早く回答を見つけられるよう設計されています。

![Knowledge Management](/images/support/assets/km_graphic.jpg)

**ナレッジベース記事はこちらで参照できます**

- [グローバルサポートナレッジベース](https://support.gitlab.com/hc/en-us/sections/15215649512604-Knowledge-Base)
- [米国政府サポートナレッジベース](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Knowledge-Base)

**メリット**:

- チケット作成を回避できる。
- ユーザーの問題をより早く解決できる。
- 一貫した、標準的な回答を生み出せる。
- 信頼の環境を作れる。
- サポートが、より難しい Issue や改善に注力できる時間が増える。

## 原則

- **習慣にする。** 解決する価値のある問題は、保存する価値もあります。
  - 顧客、チームメンバー、または自分自身の問題を解決するたびに、ナレッジ記事を作成しましょう。

- **ナレッジの蓄積を加速させる。** 私たちのツールやプロセスは、ナレッジベースに知識を追加する速度を高めるものであるべきです。
  - コンテキストが最も明確で、顧客のフィードバックにアクセスできる瞬間にナレッジを蓄積しましょう。
  - より良いやり方を見つけたら、できるだけ早くフィードバックを提供しましょう。

- **顧客のコンテキストを蓄積する。** 適切なナレッジを、顧客のコンテキストの中で蓄積することを優先しましょう。
  - 他のユーザーが見つけやすくなるよう、顧客が表現したエラーや Issue を記録することに焦点を当てましょう。
  - ソリューションを記録するときは、明確な手順とコンテキストを含めましょう。迷ったら、[Josh Darnit がそれを実行できるか？](https://www.youtube.com/watch?v=cDA3_5982h8) を考えてみてください。

- **常にイテレーションする。** ナレッジベースは私たちのためのものでもあり、顧客のためのものでもあります。使用と再利用を通してナレッジを見直し、更新します。
  - 再利用はレビューでもある: 常にイテレーションすることでナレッジの品質を向上させます。

## ナレッジ記事と GitLab ドキュメントの違い

ナレッジベースと製品ドキュメントは、いずれも GitLab のデジタルサポート体験における重要な要素ですが、それぞれ異なるニーズに応えるものです。
[例と詳細はこちら](../knowledge-base/docs-vs-kb/) を参照してください。

### ドキュメント

ドキュメントが答えるのは: 「これはどう動作するのか？」

- 製品の機能、アーキテクチャ、使用法に関する包括的な情報を提供します。
- 製品の現バージョンの概要を提供します。
- より技術的で詳細であることが多い
- 更新頻度は低い（新機能リリース時など）
- 主にエンジニア、上級ユーザー、製品詳細を求める人向けに作成

### ナレッジ記事

ナレッジ記事が答えるのは: 「これをどう直せばいいのか？」

- 製品を使っているときに遭遇する問題を解決します。
- 一般的な Issue や質問に対するソリューションを提供します。
- 通常タスク指向で、動画やスクリーンショットを含みます。
- 新しい Issue、新しい回避策、新しいトラブルシューティング、フィードバックに基づいて頻繁に更新されます。
- 主に顧客のセルフサービス向けに作成

## ナレッジ記事を作成すべき理由

ナレッジ記事は、ユーザーが製品を使っているときに遭遇するかもしれないタスクの実行、質問への回答、Issue の修正をサポートします。

ナレッジが **社内向け** か **社外向け** かを使い分けられることをご存知ですか？！ナレッジ記事は顧客のためだけのものではありません。社内ユーザーのためのものでもあります。ナレッジベース内では、社内チームメンバーを支援する社内専用ナレッジを提供しています。

エンドユーザーに情報を効率的に提供するため、ナレッジの *タイプ* を活用しています。これには次のものが含まれます:

- ハウツー
- 故障／修正
- FAQ（質問と回答）
- トラブルシューティング
- プロセス

## ナレッジ記事を作成すべきタイミング

要するに、その情報から誰かが恩恵を受ける場合に記事を作成すべきです。

考慮すべき質問:

- 顧客が情報を素早く見つけるのに役立つか？
- よくある質問／Issue に答えているか？
- 何かを行う再現可能な方法を文書化しているか？
- この情報により、顧客がサポート介入なしで必要なものを得られるか？
- 頻繁な更新が必要な情報か？
- サポートチケットの急増を引き起こしうる新しい Issue（解決策の有無を問わず）か？

## ナレッジ記事に含めるべき／含めてもよいもの

- 概要
- 回避策、根本原因、Issue
- 動画（動画へのリンク）
- スクリーンショット（個人を特定できる情報のスクリーンショットを追加しないよう注意）
- 参考資料（記事が外部向けの場合は、社内リンクに注意）

### ZenDesk のナレッジ記事に関するトレーニングは何があるか？

利用可能なトレーニングのリストは [Knowledge Base Training Resources](../knowledge-base/knowledge-base-training) にあります。

## 実装

現在、ナレッジベース記事の作成、変更、公開には [Sync Repo](https://gitlab.com/gitlab-com/support/articles) を使用しています。

Sync repo でナレッジ記事を作成する方法を見たいですか？ [LevelUp の動画](https://levelup.edcast.com/insights/creating-an-knowledge-article-in-the-sync-repo-mp) を確認してください。

**知っておくべきこと**

- Zendesk との連携は維持されています。Sync repo はナレッジ記事を Zendesk と「同期」して顧客に提示します。
- Zendesk の Create article ボタンは引き続き表示されますが、Sync repo にリダイレクトされます（注記が表示されます）。
- ナレッジ記事はサポートポータルのナレッジベースで引き続き表示されます。
- サポートエンジニアは検索機能を使ってサポートチケットにナレッジ記事やドキュメントをリンクできます。

**変わらないこと**

- Zendesk は引き続きサポートチケットのツールです
- 顧客には違いは見えません
- 社内記事の可視性は変わりません（社内専用コンテンツの 🔒 アイコンに注目）
- 記事の閲覧方法は変わりません

- **要約**: 読み取り体験は同じ、書き込みプロセスが新しい。

## Sync Repo でナレッジ記事を作成する方法

このプロセスでは、WebIDE とナレッジ記事テンプレートを使ったナレッジ記事の作成手順を説明します。視覚的なガイドとして [動画](https://drive.google.com/file/d/1oxcPg4IA3yRDAshab31yO8Yf24XqmvY8/view?usp=sharing) も用意されています。

1. Sync Repo プロジェクト [Articles](https://gitlab.com/gitlab-com/support/articles) に移動します
1. WebIDE を開きます（キーボードのピリオドキーを押すと WebIDE が開きます）
1. Explorer の **Knowledge Articles > Templates** フォルダを選択します。
1. 適切なテンプレートファイル（Breakfix、FAQ、How-To、Process）を開きます。
1. ファイルの内容全体をコピーします。
1. Knowledge Articles の下から [適切なセクション](../../security/customer-support-operations/zendesk/knowledge-center/sections#current-sections-in-use) を選択します。**注意**: セクションがまだ存在しない場合は、[セクションの作成](../../security/customer-support-operations/zendesk/knowledge-center/sections#creating-a-section) の手順に従います。
1. 適切なセクションの下に新しいファイルを作成します（セクションを右クリック > New File...）。
    1. ファイル名（記事のタイトル）を付け、タイトルの後に .md を追加します。例: TitleOfYourKnowledgeArticle.md
    1. コピーしたテンプレートの詳細をエディタに貼り付けます。
    1. [メタデータフィールド](./#metadata-fields) を更新します
    1. ナレッジ記事の本文（詳細）を入力します（必要に応じて情報を削除または追加）。
1. 保存し、コミットしてマージリクエスト（MR）を作成します

### メタデータフィールド {#metadata-fields}

- **Title**: TITLE をナレッジ記事のタイトルに変更します
- **Previous Title**（Title と一致させる）
- **Category** - Knowledge Articles（そのまま）
- **Section** - 記事を含めるセクションを追加します（Administrative、CI/CD Pipeline、Errors、How To、Kubernetes、Licensing and Subscription、Migrations、Other articles、Performance、Security、Upgrades、Troubleshooting）
- **Author** ご自身の GitLab ハンドル
- **Tags** - バージョン固有の詳細を追加します。例 '17.10'
- **Labels** - 製品の詳細
- **Instances** - 記事はグローバルと Gov の両方のナレッジベースに表示されます。Gov のみに表示する場合は Global を削除します。Global のみに表示する場合は Gov の行を削除します。
- **Public** - TRUE に設定されています。これは記事が PUBLIC（一般公開）であることを示します。社内専用の場合は FALSE に設定します。
- **convert_markdown** - 記事が HTML で、それを markdown に変換する場合は、`convert_markdown` を `true` に変更する必要があります。HTML 形式のままにする場合は `convert_markdown` を `false` のままにします。
- **source** - サポートチケットの詳細をここに追加します。完全なチケット URL を使うと、追跡して Gov か Global かを判断できます。
- **Product Categories** - 製品カテゴリ [製品カテゴリリスト](https://docs.google.com/spreadsheets/d/14CIIVup-tS5HdLyl0wInf-2m50AptauyhG-ZW5uhs-I/edit?gid=1850218997#gid=1850218997)

**注意**: その後ワークフローが開始されます - MR が作成され、レビュアーがレビューし、記事が承認されて Sync Repo に追加され、ナレッジベースに表示されます。

## ナレッジ記事を作成するその他の方法

**オプション 1 - 外部テンプレートのリクエスト**

1. [フォルダに移動してテンプレートを選択](https://drive.google.com/drive/folders/1hpHAB51x49bRS1tfUqxiQ56UnlITtFHR) します
2. テンプレートを使って記事を作成し、ドキュメントを保存します。
3. ナレッジ Slack チャンネル [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) を使って記事の作成をリクエストします。{{< member-by-name "Kirsty Allen" >}} にタグ付けしてください。
4. 記事は Article（Sync）リポジトリに作成され、レビュアーに割り当てられて公開されます。
5. ロールと権限はそのままです。今日「Reviewer」だった同じ人が、記事を公開する MR の承認権限を持ち続けます。

**オプション 2 - Support Team Meta のテンプレート**

1. [Support Team Meta](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues) の **テンプレート** を使います。テンプレート名は `knowledge-base-article-request` です。{{< member-by-name "Kirsty Allen" >}} にタグ付けしてください
2. 記事は Article（Sync）リポジトリに作成され、レビュアーに割り当てられて公開されます。公開時に通知されます。

**オプション 3 - Articles リポジトリのテンプレート**

1. [Articles](https://gitlab.com/gitlab-com/support/articles/-/work_items) の **テンプレート** を使います。テンプレート名は `knowledge-base-article-request` です。{{< member-by-name "Kirsty Allen" >}} にタグ付けしてください
2. 記事は Article（Sync）リポジトリに作成され、レビュアーに割り当てられて公開されます。公開時に通知されます。

**オプション 4 - Slack 経由で作成**

ナレッジに新しい Issue を作成するには、Slack で次のコマンドを使います

- /gitlab gitlab-com/support/articles issue new

既存の Issue を Slack で更新するには、Slack で次のコマンドを使います

- /gitlab gitlab-com/support/articles issue comment  Work item number (shift + Enter) Add the comment

## 社内ナレッジ記事を閲覧するには

社内ナレッジ記事を閲覧するには、Zendesk Global ライトエージェントアカウントが必要です。現在持っていない場合は、リクエスト方法について [ZenDesk「ライトエージェント」アカウントのリクエスト](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account) を参照してください。

Zendesk Global エージェントアカウントを取得したら、ログインして https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles に移動します。

> 社内ナレッジ記事の隣には **ロック** アイコンが付いています。

### ロールと権限 {#roles-and-permissions}

3 つのロールがあります: Support Engineer、Knowledge Champions、Knowledge Admins。

- **Knowledge Contributors**: チケット内で KB 記事を作成、更新、利用します。
- **Technical Reviewers**: 公開前に記事の技術的正確性をレビューします。
- **Knowledge Champions（Coaches）**: 作成、変更、レビュー、公開のほか、ジュニアメンバー（ナレッジ）の指導を行い、ナレッジの機会を見つけ出します。
- **Knowledge Admins**: プロセスが守られているか確認し、アーカイブと復元を支援します。

詳細は [ナレッジロール、権限、責任](/handbook/support/knowledge-base/knowledge-roles/) ページを参照してください。

### サポートを得るには

質問は専用の [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) Slack チャンネルでできます。

権限に関する問題は、ナレッジ専用の Slack チャンネル [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) を使ってタグ付けするか、[Issue](https://gitlab.com/gitlab-com/support/support-team-meta) を起票して {{< member-by-name "Kirsty Allen" >}} にタグ付けしてください。
