---
title: "Claude"
description: "Claude は、業務を進めるための GitLab のデスクトップ AI です。すべてのチームメンバーが Claude Enterprise 経由でアクセスできます。"
upstream_path: /handbook/eta/ai/tools/claude/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:12:29Z"
translator: claude
stale: false
lastmod: "2026-06-01T17:35:18+01:00"
---

## GitLab における Claude とは

Claude は、業務を進めるための GitLab のデスクトップ AI です。ドラフト作成、推論、コード、複数ステップのエージェント型タスクに対応します。Glean は、社内システムに根ざしたナレッジマネジメントと個人スコープの自動化のための GitLab のパーソナル AI です。両者は補完関係にあります。Claude には Glean コネクタが組み込まれているため、ツールを切り替えることなく GitLab のコンテキストを Claude の会話に取り込めます。一方を他方より優先するのではなく、タスクに応じて適切なツールを使ってください。

## Claude.ai (Claude Enterprise)

すべての GitLab チームメンバーは、Okta 経由で Claude Enterprise にアクセスできます。これは、ほとんどのチームメンバーにとって日常的に使う AI であり、Web アプリ、macOS および Windows のデスクトップアプリ、iOS および Android のモバイルアプリで利用できます。

Claude Enterprise は、チームメンバーが日々利用する機能を一通り提供します。

- **Skills.** 任意の会話で呼び出せる、再利用可能で名前付きの機能。
- **Plugins.** Claude を追加のツールやサーフェスに接続します。
- **Projects.** 進行中の作業のための、独自のコンテキストとファイルを持つ永続的なワークスペース。
- **Connectors.** Glean コネクタを含み、GitLab のコンテキスト (ハンドブック、GitLab.com、Slack、Salesforce、Google Drive など) を、既存の権限を尊重したうえで Claude の会話に取り込むことができます。

Claude.ai にアクセスするには、Okta を開いて Claude タイルを探すか、Okta SSO を使って [https://claude.ai](https://claude.ai) にサインインしてください。

## Claude Console (Anthropic Console)

Claude Console は Claude.ai とは別の製品で、別途ライセンスされ、**CorpSec によって管理されています**。これは、Claude API を直接利用するビルダーのためのサーフェスです。チャット製品の外側でのプロンプト開発、評価、エージェント構築に使います。

プロビジョニングは管理されており、セルフサービスではありません。Console アクセスのプロセスは現在策定中で、おそらく Serval 経由で進む見込みです。API キーは次の 2 つの目的のためにのみプロビジョニングされます。

- **アプリケーション AI アクセス。** マネージドアプリケーションの背後にあるサービスアカウント。
- **個人 API トークン。** Claude Code 以外のハーネスで使われるもの。Claude Code には独自の統合認証があるため、個人 API トークンは必要ありません。

チームメンバーは自分でトークンを作成しません。トークンは指定されたユーザーまたはアプリケーション向けにプロビジョニングされ、本人に共有されます。

## Claude と Glean

Glean は、ハンドブック、GitLab.com、Slack、Salesforce、Google Drive、その他 Glean がインデックス化している実際の GitLab コンテキストに根ざした、パーソナルなナレッジマネジメント自動化に適した選択肢です。Claude は、業務を進めたいとき (ドラフト作成、推論、コード、複数ステップのタスク) に適した選択肢です。

両者は意図的にオーバーラップしています。Claude の Glean コネクタは、ある作業に両方が必要なとき (Claude の推論と文章の深みを、実際の社内コンテキストに根ざして使いたいとき) に、GitLab のコンテキストを Claude に取り込めるようにします。厳格な二者択一ではなく、タスクに応じて選択してください。

## ガバナンスとデータ分類

Claude は、Glean ガイドと同様に **Orange 以下のデータ** について認可されています。チームメンバーは、Orange のみ認可されているツールに Red のデータを貼り付けない責任を引き続き負います。

どの Claude 機能が本番利用に承認されているかは、AI ツールリスクフレームワークが規定します。

## ヘルプの受け方

- 質問は Slack の [**#enterprise-ai-collab**](https://gitlab.enterprise.slack.com/archives/C0AE5DX6SQJ) に投稿してください。
- インシデントは Serval 経由でチケットを起票してください。
