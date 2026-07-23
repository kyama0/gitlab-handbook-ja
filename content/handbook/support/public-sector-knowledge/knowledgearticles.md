---
title: 公共部門ナレッジベース
description: GitLab 公共部門ナレッジベース
upstream_path: /handbook/support/public-sector-knowledge/knowledgearticles/
upstream_sha: 7032d681eb34b7baa363eb97119170b35beb5d76
translated_at: "2026-07-24T06:08:04+09:00"
translator: claude
stale: false
lastmod: "2026-07-23T06:44:13-05:00"
---

ナレッジベースは、顧客の問題に対するソリューションを集めた検索可能なリポジトリであり、ユーザーがサポートに連絡することなく素早く回答を見つけられるようにすることを目的としています。

![ナレッジ管理](/images/support/assets/usg_kb.jpg)

**ナレッジベースの記事はこちらからご覧いただけます**

- [米国公共部門サポート ナレッジベース](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Knowledge-Base)
- [グローバルサポート ナレッジベース](https://support.gitlab.com/hc/en-us/sections/15215649512604-Knowledge-Base)

 **メリット**:

- チケット作成を抑制できます。
- ユーザーの問題を素早く解決できます。
- 一貫した標準的な回答を提供できます。
- 信頼の文化を育みます。
- サポートがより難しい問題や改善活動に注力できる時間を生み出します。

## 原則

- **習慣にしましょう。** 解決する価値がある問題なら、保存する価値があります。
  - 顧客やチームメンバー、あるいは自分自身の問題を解決したら、毎回ナレッジ記事の起票から始めましょう。

- **ナレッジ獲得を加速しましょう。** ツールとプロセスは、ナレッジベースへの追加スピードを高めるためにあるべきです。
  - コンテキストが最も明確で、顧客のフィードバックにアクセスできる瞬間にナレッジを取り込みましょう。
  - より良い方法を見つけたら、できる限り早くフィードバックを共有しましょう。

- **顧客のコンテキストを取り込みましょう。** 顧客の文脈で、適切なナレッジを優先的に取り込みます。
  - 他のユーザーが見つけやすいよう、顧客が説明したエラーや問題そのままの形での文書化に注力しましょう。
  - ソリューションを文書化する際は、明確な手順とコンテキストを含めます。迷ったら、[Josh Darnit に実行できるか?](https://www.youtube.com/watch?v=cDA3_5982h8) と問いかけましょう。

- **常にイテレーションしましょう。** ナレッジベースは顧客のためであると同時に、私たち自身のためのものでもあります。利用や再利用のたびに見直し・更新を行います。
  - 再利用はレビューです: 常にイテレーションすることで、ナレッジの品質を高めていきます。

## ナレッジ記事と GitLab のドキュメントの違い

ナレッジベースと製品ドキュメントは、どちらも GitLab のデジタルサポート体験における重要な要素ですが、それぞれ異なるニーズに応えるものです。
[こちらに例と詳細があります](../knowledge-base/docs-vs-kb/)。

### ドキュメント

ドキュメントが答えるのは「これはどう動作するのか?」です。

- 製品の機能、アーキテクチャ、利用方法に関する包括的な情報を提供します。
- 現在の製品バージョンの概要を提供します。
- 多くの場合、より技術的で詳細です。
- 更新頻度は低めです (新機能のリリース時)。
- 主にエンジニアや上級ユーザー、製品の詳細を必要とする方々向けに作成されています。

### ナレッジ記事

ナレッジ記事が答えるのは「これをどう直せばよいのか?」です。

- 製品の利用中に直面した問題を解決します。
- よくある問題や質問への解決策を提供します。
- 通常はタスク指向で、動画やスクリーンショットを含みます。
- 新たな問題、新たな回避策、新たなトラブルシューティング、フィードバックに基づいて頻繁に更新されます。
- 主に顧客のセルフサービス用に作成されています。

## ナレッジ記事を作成すべき理由

ナレッジ記事は、製品の利用中にユーザーがタスクを完了させたり、質問に答えを得たり、直面した問題を修正したりするのに役立ちます。

ナレッジは **内部** または **外部** のいずれにもなり得ることをご存じですか? ナレッジ記事は顧客向けのものだけではありません。社内ユーザー向けでもあります。ナレッジベース内には、社内のチームメンバーを支援する、社内限定のナレッジも提供しています。

エンドユーザーへの情報提供を効率化するために、ナレッジには *タイプ* を設けています。タイプには次のものがあります:

- ハウツー (How-To)
- 障害/修正 (Break/Fix)
- FAQ (Q&A)
- トラブルシューティング (Troubleshooting)
- プロセス (Process)

## ナレッジ記事を作成すべきタイミング

要するに、誰かがその情報から恩恵を受けるなら、記事を作成すべきです。

考慮すべきいくつかの問いは次のとおりです:

- 顧客が情報を素早く見つけるのに役立つか?
- よくある質問・問題に答えているか?
- 何かを行うための再現可能な方法を文書化しているか?
- サポートの介入なしに顧客が必要なものを得るのに、この情報は役立つか?
- 頻繁な更新が必要になりそうな情報か?
- サポートチケットの急増を引き起こしうる新たな問題 (解決策の有無を問わず) か?

## ナレッジ記事に含められる/含めるべき要素は?

- 概要 (Overview)
- 回避策、根本原因、問題 (Workarounds, Root Cause, Issue)
- 動画 (動画へのリンク)
- スクリーンショット (個人を特定できる情報のスクリーンショットを追加しないよう注意)
- 参考資料 (記事が外部公開の場合、社内リンクには注意)

### ZenDesk のナレッジ記事に関するトレーニング

利用可能なトレーニングの一覧は [ナレッジベースのトレーニングリソース](../knowledge-base/knowledge-base-training) にあります。

## 実装

現在、ナレッジベース記事の作成、変更、公開には [Sync Repo](https://gitlab.com/gitlab-com/support/articles) を使用しています。

Sync repo でナレッジ記事を作成する方法を確認したい方は、[LevelUp 動画](https://levelup.edcast.com/insights/creating-an-knowledge-article-in-the-sync-repo-mp) をご覧ください。

**知っておくべきこと**

- 引き続き Zendesk と連携しています。Sync repo はナレッジ記事を Zendesk と「同期」して、顧客に提示します。
- Zendesk の Create article ボタンは引き続き表示されますが、Sync repo に誘導されます (注記が表示されます)。
- ナレッジ記事は引き続きサポートポータルのナレッジベースで表示されます。
- サポートエンジニアは、検索機能を使ってナレッジ記事やドキュメントをサポートチケットに引き続きリンクできます。

**変わらないこと**

- Zendesk は引き続きサポートチケットのツールです
- 顧客から見た違いはありません
- 内部記事の可視性も変わりません (内部限定のコンテンツには 🔒 アイコンが付きます)
- 記事の閲覧方法は変わりません

- **TL;DR**: 読む体験は同じ、書くプロセスが新しくなりました。

## Sync Repo でのナレッジ記事の作成方法

以下のプロセスは、WebIDE とナレッジ記事テンプレートを使ってナレッジ記事を作成する手順です。視覚的なガイドとして [動画](https://drive.google.com/file/d/1oxcPg4IA3yRDAshab31yO8Yf24XqmvY8/view?usp=sharing) も用意されています。

1. Sync Repo プロジェクトの [Articles](https://gitlab.com/gitlab-com/support/articles) にアクセスします
2. WebIDE を開きます (キーボードのピリオドキーで WebIDE を起動できます)
3. Knowledge Articles の隣の矢印 (右側) を展開し、Templates フォルダを選択します。
4. Templates フォルダの隣の矢印を展開し、いずれか (Breakfix, FAQ, How-To, Process) を選択します。
5. ファイル全体の内容を **コピー** します
6. Knowledge Articles 配下のいずれかのセクション (Administrative, CI_CD Pipeline, Errors, how To, Kubernetes, Licensing and subscription, Migrations, Other articles, performance, Security, Upgrades, Troubleshooting) に移動します。**注**: 追加が必要なセクションが見当たらない場合も、追加方法があります! セクションの詳細はこちらをご覧ください: https://handbook.gitlab.com/handbook/security/customer-support-operations/zendesk/knowledge-center/sections/#current-sections-in-use
7. 名前を右クリックして「FILE」を選択します
8. ファイル名 (記事のタイトル) を入力し、末尾に .md を付けます。例: TitleOfYourKnowledgeArticle.md
9. コピーしたテンプレートの内容を右側のパネルに貼り付けます。
10. ナレッジ記事の本文 (詳細) を入力します (必要に応じて情報を追加・削除します)。
11. 保存し、コミットしてマージリクエスト (MR) を作成します

メタデータの先頭フィールドを **最初に** 更新します:

- **Title**: タイトル (ナレッジ記事のタイトル) に変更します
- **Previous Title** (Title と一致させます)
- **Category**- Knowledge Articles (そのままにします)
- **Section** - 記事を配置するセクション (Administrative, CI/CD Pipeline, Errors, How To, Kubernetes, Licensing and Subscription, Migrations, Other articles, Performance, Security, Upgrades, Troubleshooting) を追加します。
- **Author** (あなた自身になります)
- **Tags** - バージョン固有の詳細を追加します。例: '17.10'
- **Labels** - レポート関連の詳細や製品の詳細です。例: 'Runner', 'Duo'
- **Instances** - 記事は Global と Gov の両ナレッジベースに表示されます。Gov のみに表示する場合は Global を削除します。Global のみに表示する場合は Gov の行を削除します。
- **Public** - TRUE に設定されています。これは記事が一般公開されることを示します。記事を内部限定にする場合は FALSE に設定します。
- **convert_markdown** - 記事が HTML 形式で、それを Markdown に変換した場合は、`convert_markdown` を `true` に変更する必要があります。記事を HTML 形式のままにする場合は、`convert_markdown` は `false` のままにします。

**注**: その後ワークフローが開始されます - MR が作成され、レビュアーがレビューを行い、記事が承認されて Sync Repo に追加され、ナレッジベースに表示されます。

## ナレッジ記事を作成するその他の方法

**オプション 1 - 外部テンプレート リクエスト**

1. [フォルダにアクセスしてテンプレートを選択](https://drive.google.com/drive/folders/1hpHAB51x49bRS1tfUqxiQ56UnlITtFHR) します
2. テンプレートを使って記事を作成し、ドキュメントを保存します。
3. ナレッジ用 Slack チャネル [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) で記事の作成を依頼します。{{< member-by-name "Kirsty Allen" >}} をメンションしてください。
4. あなたの記事が Sync repo に作成され、レビュアーに割り当てられた後に公開されます。
5. ロールと権限はそのままです。本日と同じ「レビュアー」が、記事を公開するための MR を承認できます。

**オプション 2. - Support Team Meta のテンプレート**

1. [Support Team Meta](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues) 配下の **テンプレート** を使用します。テンプレート名は `knowledge-base-article-request` です。{{< member-by-name "Kirsty Allen" >}} を必ずメンションしてください
2. あなたの記事が Sync repo に作成され、レビュアーに割り当てられた後に公開されます。公開時に通知されます。

**オプション 3. - Articles Repo のテンプレート**

1. [Articles](https://gitlab.com/gitlab-com/support/articles/-/work_items) 配下の **テンプレート** を使用します。テンプレート名は `knowledge-base-article-request` です。{{< member-by-name "Kirsty Allen" >}} を必ずメンションしてください
2. あなたの記事が Sync repo に作成され、レビュアーに割り当てられた後に公開されます。公開時に通知されます。

**オプション 4 - Slack 経由で作成**

ナレッジに新規 Issue を作成するには、Slack で以下のコマンドを使用します

- /gitlab gitlab-com/support/articles issue new

Slack で既存の Issue を更新するには、Slack で以下のコマンドを使用します

- /gitlab gitlab-com/support/articles issue comment  ワークアイテム番号 (Shift + Enter) コメントを追加

### ロールと権限

3 つのロールがあります: サポートエンジニア、ナレッジチャンピオン、ナレッジ管理者です。

- **ナレッジコントリビューター**: チケット内で KB 記事を作成、更新、利用します。
- **テクニカルレビュアー**: 公開前に記事の技術的正確性をレビューします。
- **ナレッジチャンピオン (コーチ)**: 作成、修正、レビュー、公開を行うほか、ジュニアメンバー (ナレッジ) のメンタリングや、ナレッジ化の機会の特定を行います。
- **ナレッジ管理者**: プロセスが守られるよう徹底し、アーカイブ・復元の支援を行います。

詳細については [ナレッジのロール、権限、責務](/handbook/support/knowledge-base/knowledge-roles/) のページをご参照ください。

### ヘルプの入手

ご質問は専用の [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) Slack チャネルでどうぞ。

権限関連の問題については、ナレッジ専用 Slack チャネル [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH) を使用していただくか、[Issue](https://gitlab.com/gitlab-com/support/support-team-meta) を作成して {{< member-by-name "Kirsty Allen" >}} をメンションしてください。
