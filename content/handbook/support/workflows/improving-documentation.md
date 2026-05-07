---
title: ドキュメントの改善
description: "サポートチームから GitLab ドキュメントの改善を提出するためのワークフロー"
category: Handling tickets
upstream_path: /handbook/support/workflows/improving-documentation/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## ドキュメントの改善

**チケットへの応答方法** ワークフローの [ドキュメントセクション](/handbook/support/workflows/how-to-respond-to-tickets#documentation) で説明されているとおり、包括的なドキュメントはチケット偏向のための強力なツールです。

> 応答に [docs-first](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology) アプローチを取ることで、ドキュメントが非常に有用な [単一の情報源](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot) であり続けることを保証できます。実際の問題に基づいて構築されたドキュメントのコーパスを構築することで、GitLab の顧客が必要な答えや解決策をキューに来る前に見つけるのを助けます。

これを念頭に置き、可能な限り、チケットへの応答の一部として該当するドキュメントへのリンクを含めてください。ドキュメントがまだ存在しない場合は、ドキュメント Issue またはドラフトのマージリクエストを *書き*、応答にリンクを送信します。

以下に集約された情報は、ドキュメントに貢献する際に役立つはずです。

### 一般的なドキュメントガイドライン

#### 変更を行う

ドキュメントガイドラインに従って名付けられた新しいブランチで、編集とコミットを行います。これらのガイドラインでは、ブランチ名は `docs-` で始まる必要があります（または [ブランチ名スキームに記載されている他のオプションのいずれか](https://docs.gitlab.com/development/documentation/workflow/#pipelines-and-branch-naming)）。

- 変更をコミットします。コミットメッセージが [コミットメッセージガイドライン](https://docs.gitlab.com/development/contributing/merge_request_workflow/#commit-messages-guidelines) に従っていることを確認します。
    ガイドラインに従わない場合、コミットがガイドラインと整合しているかをチェックする際に [Danger Bot](https://docs.gitlab.com/development/dangerbot/) ジョブが失敗する可能性があります。失敗した場合は、ジョブのトレースを読み、新しいコミットまたは [インタラクティブな rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) で問題を修正します。（rebase の方法がわからない場合はヘルプを求めてください！）

> **注:** Git または GitLab 環境での作業の基本に慣れていない場合は、ドキュメントの変更を試みる前に [Git および GitLab の基本トレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/Git%20and%20GitLab%20Basics.md) を完了してください。

#### スタイルガイドと Linting

- [ドキュメントスタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/) をレビューします。
  - スタイルガイドを暗記する必要はありませんが、ドキュメントを書くときに準拠していることを確認するためにそれを参照することを忘れないでください。これにより、マージリクエストが迅速に承認されるよう支援します。
- [トピックタイプページ](https://docs.gitlab.com/development/documentation/topic_types/) もレビューすることを忘れないでください。特に [トラブルシューティングセクション](https://docs.gitlab.com/development/documentation/topic_types/troubleshooting/) に注意を払います。
- 必須ではありませんが、パイプラインが失敗するのを防ぐため、ローカルエディターに [docs linters をインストール](https://docs.gitlab.com/development/documentation/testing/) することを強くお勧めします。または [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit) を使用します。プラグインはコマンドラインからも使用できます。
  - [markdownlint](https://docs.gitlab.com/development/documentation/testing/markdownlint/) をセットアップします。
  - [Vale](https://docs.gitlab.com/development/documentation/testing/vale/) をセットアップします。
  - [長い行を分割する](https://docs.gitlab.com/development/documentation/styleguide/#text) のに役立つ、[垂直ルーラーをセットアップ](https://stackoverflow.com/questions/29968499/how-can-i-have-multiple-vertical-rulers-in-vs-code) します。

#### ドキュメントマージリクエスト

- MR を作成する際は、[docs MR ガイドライン](https://docs.gitlab.com/development/documentation/) に従います
- MR の説明には、関連するチケットや Issue へのリンクを必ず含めます
- 適切なラベルを追加します:
  - documentation（テンプレートが自動的にこのラベルを追加するはずですが、確認してください）。
  - グループ [スコープラベル](https://docs.gitlab.com/user/project/labels/#scoped-labels)（迷った場合は、ドキュメントページの上部にリストされているはずです）
  - customer（チケットに関連する場合）
  - *注: ボットは、指定されない場合、ステージ、セクション、[Support Team Contributions](/handbook/support/#support-fixes)、および docs-only ラベルを追加します*
- [コードレビューガイドライン](https://docs.gitlab.com/development/code_review/) に従い、関連するテクニカルライター（TW）をレビュアーとして設定します。
  - ドキュメントテンプレートにはこれを見つける方法の指示がありますが、基本的にはドキュメントページのソース版の上部にあるメタデータ情報を参照します。
  - 編集したページに適切なテクニカルライターを見つけるには、[Technical Writing Assignments](/handbook/product/ux/technical-writing/#assignments) を確認します。
  - [Support dotfiles](https://gitlab.com/gitlab-com/support/toolbox/dotfiles) を使用している場合、`find-technical-writer` コマンドを使用して、特定のグループのテクニカルライターを素早く確認できます。
- MR を提出する前に、以下のオプションがチェックされていることを確認します:
  - `Delete source branch when merge request is accepted.`
  - `Squash commits when merge request is accepted.` 「Apply suggestion」機能はドキュメント MR で頻繁に使用されるため、このチェックボックスはマージ後にデフォルトブランチのきれいな履歴を維持するために不可欠です。

### マージリクエストでテクニカルライターと協働する

- テクニカルライティングチームがあなたの貢献について尋ねる質問に、迅速に回答することを忘れないでください。
- [ドキュメントプロセス](https://docs.gitlab.com/development/documentation/workflow/) を読みます。
  - 注: サポートは、TW に割り当てる前にドキュメント MR の技術的正確性を検証することが期待されています。迷ったときは、まずエンジニアから技術的レビューを受けてください。編集したページのメタデータ情報を使用して [適切なエンジニア](/handbook/product/categories/) を見つけます。
- [マージ後レビューガイドライン](https://docs.gitlab.com/development/documentation/workflow/#post-merge-reviews) を読みます。
  - サポートでは、緊急のドキュメント MR がある場合、たとえばドキュメントの修正をできるだけ早く公開する必要がある場合に、マージ後レビューオプションを使用するかもしれません。
  - 任意のページの「トラブルシューティングセクション」にある場合は、ガイドラインに従いますが、迅速にレビューしてマージするオンラインのサポートマネージャーに割り当てます。
  - そうでない場合は、必要な速さに応じて、[#docs Slack チャンネル](https://gitlab.slack.com/archives/C16HYA2P5) で共有して、そこにいる誰かにできるだけ早くレビューしてマージするよう依頼します。これは TW レビューが含まれるため、マージ後レビューを必要としません。
- [docs deploy](https://docs.gitlab.com/development/documentation/site_architecture/deployment_process/) について読みます。重要なことは、ドキュメントがどのくらいの頻度でデプロイされるかに注目することです。
  - オプションで、ドキュメントサイトがどのように構築されるかを学ぶために、[サイトアーキテクチャ情報](https://docs.gitlab.com/development/documentation/site_architecture/) の残りを読みます。
- フィードバックを個人的に受け取らないことも忘れないでください - 私たちは皆、ドキュメントが正確で従いやすいものであることを望んでいるので、テクニカルライターからのすべてのフィードバックは、この目標を念頭に置いています！

### Zendesk「Document this」ワークフロー

ドキュメント作成がより時間のかかる作業となる状況のため、完了する必要のあるドキュメントタスクを追跡するために、自動的に [GitLab Issue トラッカー](https://gitlab.com/gitlab-org/gitlab/-/issues) に Issue を作成するプロセスを設定しました:

- チケットに [マクロ `General::Document This`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/Document%20This.yaml) を適用します。このマクロは `create_doc_issue` タグを適用し、記入するためのテンプレートを事前に入力します。
- タイトルと説明を変更してテンプレートを記入します。記入されたテンプレートの例:

```text
CREATE DOCUMENTATION ISSUE
Title: Document how to use Y with an X
Description
There is a new cool feature Y that we released last month. It can be used with X to improve Z. We need to document how Y can be used with X.

## Test h2 header

We should remember to document:

1. requirements
1. how to enable
1. how to configure
1. how to troubleshoot
```

- 内部メモとして送信します。Issue が作成されると、`doc_issue_created` タグがチケットに追加されます。

このワークフローを使用して複数の Issue を作成する必要がある場合は、マクロをもう一度適用するだけです。
自動化により [label_name\[\]=documentation&label_name\[\]=customer](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&state=opened&label_name[]=documentation&label_name[]=customer) のラベルが付いた Issue が作成され、内部メモを送信したエージェントに割り当てられます。

**注:** 内部メモがトリガーによって正しく解析されるよう、必ずテンプレートを使用してください。

このワークフローは、内部メモを解析し、ドキュメント Issue を作成する [Zendesk の HTTP ターゲット](https://developer.zendesk.com/api-reference/ticketing/targets/targets/) に送信する [zendesk トリガー](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/blob/master/triggers/active/Lifespan%20Stage/Create%20documentation%20issue.yaml) を使用して実装されています。
