---
title: ナレッジベース記事の作成ワークフロー
description: Support Engineers によるナレッジベース記事の作成・公開方法。人間の確認を組み込んだ AI 支援ワークフローも説明します。
upstream_path: "/handbook/support/knowledge-base/article-creation-workflow/"
upstream_sha: "2dbfc49e47c784740ced3e2c617530f365412492"
lastmod: "2026-10-07T13:14:40+01:00"
translated_at: "2026-10-11T23:57:10+00:00"
stale: false
translator: codex
---

このページでは、Support Engineers がナレッジベース記事を作成し、公開するまでの流れを説明します。
記事は[記事同期リポジトリ](https://gitlab.com/gitlab-com/support/articles)
（`master` ブランチ）で作成し、
[GitLab Support Portal](https://support.gitlab.com/hc/en-us/sections/15215649512604-Knowledge-Base)
と [U.S. Government Support Portal](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Knowledge-Base)に自動的に同期されます。

製品ドキュメントの更新とナレッジ記事の執筆をどのように使い分けるかについては、
[ドキュメントとナレッジ記事](/handbook/support/knowledge-base/docs-vs-kb/)を参照してください。

## 開始方法 {#entry-points}

記事の作成を始める方法は、主に 2 つあります：

- **AI 支援ワークフロー** - Glean Ticket to KB 計画エージェントまたは `/create-kb` スキルを使用して、
  サポートチケットから記事の下書きを作成し、レビューして記事リポジトリ経由で提出します。
  解決済みのチケットをもとに作業する場合は、この方法を推奨します。
- **手動ワークフロー** - Web IDE を使用して、記事リポジトリで直接記事を作成します。
  特定のチケットに関連しない記事や、最初から自分で書きたい場合は、この方法を使用します。

どちらの方法も、同じ記事リポジトリの MR プロセスにつながり、公開前に同じ人間によるレビューが必要です。

## AI 支援ワークフロー（人間による確認を組み込む） {#ai-assisted-workflow-human-in-the-loop}

AI 支援ワークフローには、計画ステージとビルドステージの 2 つがあります。

### ステージ 1：計画（Glean Ticket to KB エージェントまたは /create-kb スキル） {#stage-1-planning-glean-ticket-to-kb-agent-or-create-kb-skill}

計画ステージでは、AI を使ってサポートチケットから記事内容の下書きを作成します。終始、主導権はあなたにあります。
AI が作成した下書きをあなたがレビューし、承認するまでは、何もコミットされません。

**計画エージェントが行うこと：**

- チケットの内容を読み、記事のタイトル、タイプ、セクション、本文の下書きを提案します。
- タイトルを提案する前に、記事リポジトリ全体でタイトルの重複を確認します。
- 重複の可能性を示し、新しい記事を作成するか既存の記事を更新するかをあなたが判断できるようにします。

**このステージであなたが行うこと：**

- 提案されたタイトル、タイプ、セクション、本文の正確性と網羅性をレビューします。
- 既存の記事と重複していないことを確認します。
- 内容が対象読者に適していることを確認します：
  - お客様向けの記事には `public: true`、社内限定の記事には `public: false` を設定します。
  - 米国政府のお客様に適用されない記事の場合は `US Government` インスタンスを削除し、
    米国政府のみに適用される場合は `Global` を削除します。
  - お客様向けの記事には、社内リンク（Zendesk チケット、社内 Issue、Slack スレッド）を含めないでください。
- ビルドステージが始まる前に、下書きを承認します。

> 計画エージェントは、コミットや MR の作成を行いません。計画を作成し、ビルドステージを実行する前に
> あなたが明示的に承認する必要があります。

### ステージ 2：ビルド（Duo Developer フロー） {#stage-2-build-duo-developer-flow}

計画を承認すると、Duo Developer フローは記事リポジトリにブランチを作成し、記事ファイルをコミットして、
**"New KB Article"** MR テンプレートを使用してマージリクエストを作成します。MR の対象は
`master` ブランチです。

**ビルドエージェントが行うこと：**

- `Knowledge Articles/<section>/<Article Title>.md` に記事ファイルを作成します。
- 承認済みの計画からフロントマターを入力します。
- `product_categories: []` を設定します。このフィールドは Duo Developer が自動で入力します。
`@ai-support-knowledge-base-triage-flow-gitlab-com` にレビューを依頼することで設定できます

**このステージであなたが行うこと：**

- 作成された MR をレビューし、記事の内容、フロントマター、ファイルの配置が正しいことを確認します。
- トリアージフローが実行されたら、[Knowledge Champion](#knowledge-champion-review)にレビューを依頼します。

## 手動ワークフロー {#manual-workflow}

AI 支援ワークフローを使用しない場合は、記事リポジトリで直接記事を作成します：

1. お好みの IDE または Web IDE（キーボードで `.` を押します）で、
   [記事リポジトリ](https://gitlab.com/gitlab-com/support/articles)を開きます。
1. 既存のナレッジベースを検索し、その問題を扱う記事がまだないことを確認します：
   - [Global ナレッジベース](https://support.gitlab.com/hc/en-us/sections/15215649512604-Knowledge-Base)
   - [米国政府向けナレッジベース](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Knowledge-Base)
1. Explorer パネルで `Knowledge Articles > Templates` を開き、記事のタイプに応じたテンプレートをコピーします
   （下記の[記事のタイプ](#article-types)を参照）。
1. `Knowledge Articles > <your section>` に移動して、新しいファイルを作成します。記事のタイトルにできるだけ近い名前にし、
   `.md` 拡張子を付けます。
1. テンプレートの内容を貼り付け、フロントマターを更新し、記事の本文を書きます。
1. コミットし、**"New KB Article"** MR テンプレートを使用して、`master` を対象とする MR を作成します。

## 記事のタイプ {#article-types}

内容に最も合うテンプレートを選んでください。テンプレートは `Knowledge Articles/Templates/` にあります。

| タイプ | テンプレートファイル | 使用する場面 |
|------|--------------|----------|
| Break/Fix | `breakfix.md` | 特定の問題に、直接的な解決策による即時の修正が必要な場合 |
| FAQ | `faq.md` | よくある質問に回答する場合 |
| How-To | `how-to.md` | タスクの手順を段階的に説明する場合 |
| Process | `process.md` | 社内プロセスを文書化する場合 |
| Troubleshooting | `troubleshooting.md` | 根本原因に着目して、問題を診断・解決する場合 |

記事のタイプとセクションは、一致している必要はありません。たとえば、エラーに関する Break/Fix 記事は、
`Errors` セクションに配置します。

## セクション {#sections}

各記事は 1 つのセクションに属し、そのセクションによってリポジトリ内のディレクトリが決まります：

- Administrative
- AI
- Agile Planning
- CI/CD Pipeline & Runner
- CoreDevOps
- Errors
- How-To
- Infrastructure
- Kubernetes
- Licensing & Subscription
- Migrations
- Observability
- Other Articles
- Performance
- R&D TPM
- Security
- Security and Compliance
- Support Pages
- Troubleshooting
- Upgrades

## フロントマターの要件 {#frontmatter-requirements}

すべての記事は、YAML フロントマターで始める必要があります。フィールド定義と検証ルールの正式な情報は、
[記事リポジトリの README](https://gitlab.com/gitlab-com/support/articles/-/blob/master/README.md)
と [AGENTS.md](https://gitlab.com/gitlab-com/support/articles/-/blob/master/AGENTS.md)にあります。

```yaml
---
title: 'Your Unique Article Title'
previous_title: 'Your Unique Article Title'
category: 'Knowledge Articles'
section: 'Errors'
author: 'your-gitlab-handle'
tags: []
labels: []
instances:
- Global
- US Government
public: true
convert_markdown: true
source: 'https://gitlab.zendesk.com/agent/tickets/TICKET_NUMBER'
product_categories: []
---
```

主なルール（CI で強制されます。[検証](#validation)を参照）：

- **`title`** は、リポジトリ全体で一意である必要があります。作成前に確認してください。
- **`previous_title`** は、`title` と一致する必要があります（既存の記事の名前を変更する場合にのみ異なります）。
- **`section`** は、ファイルを配置したディレクトリと一致する必要があります。`'Templates'` から変更してください。
- **`instances`** には、`Global`、`Global Sandbox`、`US Government`、
  `US Government Sandbox` のうち少なくとも 1 つの値が必要です。
- **`public`** は公開範囲を制御します。お客様向けは `true`、社内限定は `false` です。
  社内記事には、サポートポータルで鍵のアイコンが表示されます。
- **`convert_markdown`** は、すべての新しい記事で `true` にする必要があります。
- **`product_categories`** は `[]` にする必要があります。KB Triage Agentic Flow が自動的に入力します。
- **`public`** と **`convert_markdown`** は、引用符付きの文字列ではなく、ブール値（`true`/`false`）にする必要があります。

### プライバシーとデータ分類 {#privacy-and-data-classification}

`public: true` を設定する前に、記事に次のものが含まれていないことを確認してください：

- お客様を特定する情報（名前、メールアドレス、組織の詳細）。
- お客様がアクセスできない社内リンク（Zendesk チケットの URL、社内 Issue、Slack スレッド）。
- [SAFE フレームワーク](/handbook/legal/safe-framework/)で社内向けに分類される情報。

いずれかに該当する場合は、機密性の高い内容を削除するか、`public: false` を設定します。

## 記事の本文 {#article-body}

選んだテンプレートのセクション構成に従ってください。すべての記事には、少なくとも次の内容が必要です：

- **説明**（タイプに応じて**概要** / **はじめに**）- 症状、タスク、状況を説明します。
  検索しやすくするため、ユーザーに表示されるエラーメッセージを、スクリーンショットではなく
  正確なテキストで含めてください。
- **影響を受ける製品・サービス** - 影響を受ける GitLab の製品・サービスを列挙します：

  ```markdown
  ## Impacted Offerings

  - GitLab.com
  - GitLab Dedicated
  - GitLab Self-Managed
  ```

- **解決策** / **解決方法** / **手順** - 主な内容を記載するセクションです。

書式のガイダンスは、[ナレッジベースのスタイルガイド](/handbook/support/knowledge-base/kb-style-guide/)を参照してください。

## 検証 {#validation}

記事リポジトリの CI パイプラインは、すべての MR で 2 つのチェックを実行します：

1. **`check_repo_files`**（ブロッキング）- フロントマターのフィールド、型、許可された値、
   タイトルの一意性、ファイルの配置を検証します。失敗すると、詳細を記載したコメントが MR に投稿されます。
   報告されたエラーを修正し、再度プッシュしてください。
1. **`check_triage_reviewer`**（ブロッキング）- KB Triage Agentic Flow
   （`@ai-support-knowledge-base-triage-flow-gitlab-com`）が MR に対して実行され、
   `product_categories` が入力されたことを確認します。トリアージフローが実行されていない場合、
   パイプラインは失敗し、ボットへのレビュー依頼の手順を表示します。

トリアージフローの実行を依頼するには、MR のコメントに次の内容を投稿します：

```plaintext
/request_review @ai-support-knowledge-base-triage-flow-gitlab-com
```

> **Duo Developer フローが作成した MR に関する注意：** Duo Developer フローが MR を作成した場合（ブランチが
> `duo/` で始まり、Duo Developer がコミットの作成者である場合）、トリアージレビュアーの要件は
> 自動的に免除されます。

プッシュ前に、ローカルでフロントマターの検証を実行できます：

```shell
gem install bundler && bundle install
./bin/check_validity
```

## Knowledge Champion によるレビュー {#knowledge-champion-review}

記事をマージする前に、
[Article Publishers / Knowledge Champions グループ](https://gitlab.com/groups/gitlab-com/support/article-publishers/-/group_members?with_inherited_permissions=exclude)
の人間のレビュアーによる承認が必要です。レビュアーは次の点を確認します：

- 技術的な正確性と網羅性。
- 記事テンプレートとの書式の一貫性。
- すべてのリンクが有効で、一般公開でアクセス可能であること（公開記事の場合）。
- トリアージフローによって `product_categories` が入力されていること。

変更が必要な場合、MR はあなたに再割り当てされます。承認後、レビュアーが MR をマージすると、
記事はサポートポータルに自動的に公開されます。

レビューの全プロセスは、[ナレッジ記事のレビュープロセス](/handbook/support/knowledge-base/article-review/)を参照してください。

## 重複の防止と裏付けの確認 {#duplicate-and-evidence-safeguards}

記事を作成する前に、同じ問題を扱う既存の記事がないことを確認してください：

- [Global ナレッジベース](https://support.gitlab.com/hc/en-us/sections/15215649512604-Knowledge-Base)
  と[米国政府向けナレッジベース](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Knowledge-Base)を検索します。
- [記事リポジトリ](https://gitlab.com/gitlab-com/support/articles)で、
  タイトルや内容が似ている記事を確認します。
- CI の `check_repo_files` ジョブは、リポジトリ全体でタイトルの一意性を強制し、
  重複するタイトルを検出した場合はマージをブロックします。

似た記事がある場合は、新しく作成するのではなく、その記事の更新を検討してください。更新には
**"Existing KB Article"** MR テンプレートを使用します。

## 記事の作成を依頼するその他の方法 {#other-ways-to-request-an-article}

自分で記事を作成したくない場合は、次の方法があります：

- **Slack**：[#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH)に投稿し、
  Knowledge チームにタグ付けします。
  [Google Drive のテンプレートフォルダー](https://drive.google.com/drive/folders/1hpHAB51x49bRS1tfUqxiQ56UnlITtFHR)にあるテンプレートを記入して添付します。
- **Support Team Meta の Issue**：
  [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues)で、
  `knowledge-base-article-request` テンプレートを使用して Issue を作成します。
- **記事リポジトリの Issue**：
  [記事リポジトリ](https://gitlab.com/gitlab-com/support/articles/-/work_items)で、
  `knowledge-base-article-request` テンプレートを使用して Issue を作成します。
- **Slack コマンド**：任意の Slack チャンネルで `/gitlab gitlab-com/support/articles issue new` を使用します。

## トラブルシューティング {#troubleshooting}

### フロントマターのエラーで CI が失敗する {#ci-fails-with-frontmatter-errors}

`check_repo_files` ジョブは、具体的なエラーを列挙したコメントを MR に投稿します。よくある原因は次のとおりです：

- `section` が `'Templates'` のままです。対象のディレクトリに合わせて変更してください。
- `public` または `convert_markdown` が引用符付きの文字列（`"true"`）になっています。ブール値の `true` を使用してください。
- `instances` が空です。少なくとも 1 つの値を追加してください。
- `title` が重複しています。一意のタイトルを選んでください。

### トリアージレビュアーがいないため CI が失敗する {#ci-fails-with-missing-triage-reviewer}

KB Triage Agentic Flow が実行されていない場合、`check_triage_reviewer` ジョブは失敗します。
レビューを依頼するには、MR のコメントに次の内容を投稿してください：

```plaintext
/request_review @ai-support-knowledge-base-triage-flow-gitlab-com
```

トリアージフローが実行されたのに `product_categories` が空のままの場合は、レビュー依頼を再試行してください。

### マージ後に記事がナレッジベースに表示されない {#article-not-appearing-in-the-knowledge-base-after-merge}

記事はマージ後に自動的に同期されます。ある程度の時間が経過しても記事が表示されない場合は、
[#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH)に投稿してください。

## サポートを受ける {#getting-help}

質問は [#spt_knowledge-base](https://gitlab.enterprise.slack.com/archives/C07QDCG4AGH)に投稿してください。
トレーニング資料については、[ナレッジベースのトレーニングリソース](/handbook/support/knowledge-base/knowledge-base-training/)を参照してください。
