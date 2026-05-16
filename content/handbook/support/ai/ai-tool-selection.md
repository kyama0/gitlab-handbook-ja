---
title: AI ツール選択
description: 業務に最適な AI ツールを選択するためのガイドライン
upstream_path: /handbook/support/ai/ai-tool-selection/
upstream_sha: cf317047d2c9678524c0db59ab7ed8c050713245
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-18T11:19:27-07:00"
---

GitLab サポートは、さまざまな機能と専門性を持つ複数の AI ツールへのアクセスを提供しています。このガイドは、特定のタスク要件に基づいて適切なツールを選択するのに役立ちます。

> [!note]
> このガイドは、[AI とサポート業務](_index.md)ページを読み、AI がタスクに役立つと判断していることを前提としています。AI を使うかどうか不明な場合は、まずそちらから始めてください。

## クイックリファレンステーブル

| ツール | 最適な用途 | 顧客データ | GitLab アクセス | 承認状況 |
|------|----------|---------------|---------------|-----------------|
| [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/) | GitLab 固有の質問、コード分析 | ✅ 安全 | プロダクト知識 | ✅ 承認済み (RED) |
| [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) | 複雑なリサーチ、多段階分析 | ✅ 安全 | エコシステム全体へのアクセス | ✅ 承認済み (RED) |
| [Glean](../../security/customer-support-operations/zendesk/apps/global/#glean) | Zendesk チケットの要約、KB 記事、エンタープライズ検索 | ✅ 安全 | プロダクト知識 (Duo Chat 経由) | ✅ 承認済み (ORANGE) |
| [Anthropic Claude (Web)](#anthropic-claude-web) | ドラフト作成、要約、リサーチ、推論 |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE) |
| [Slack AI](#slack-ai) | Slack 内での要約とドラフト |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE) |
| [Gemini Chat (Workspace)](#gemini-chat-workspace) | Google Workspace 内でのライティング、リサーチ、Q&A |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE) |
| [Gemini API](#gemini-api) | カスタムアプリと統合 | ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE、事前の Legal/CorpSec API キーレビューが必要) |
| [NotebookLM](#notebooklm) | ドキュメントに基づく分析と要約 |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE) |
| [Zoom AI Assistant](#zoom-ai-assistant) | 会議のトランスクリプション、要約、アクションアイテム |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE) |
| [Metaview](#metaview) | 面接のトランスクリプションとノート |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE、採用) |
| [Reclaim AI](#reclaim-ai) | カレンダーとタイムブロッキング |  ⚠️ サニタイズが必要 | なし | ✅ 承認済み (ORANGE、アクセス申請) |

## ツール比較

### GitLab Duo Chat {#gitlab-duo-chat}

**最適な用途:** GitLab 機能に関する素早い質問、コード説明、標準的なトラブルシューティング

**データ分類:** [RED](/handbook/security/policies_and_standards/data-classification-standard/#red)

**参考資料:** [GitLab ハンドブック – GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/)

GitLab Duo は GitLab の AI ネイティブな DevSecOps スイートで、チャット、コード提案、エージェント型ワークフローを含みます。これは **Red データに承認されている唯一の AI ツール**です（例: チケット内の顧客データ、認証情報、PII）。GitLab UI とサポートされる IDE の両方で利用できます。

**強み:**

- GitLab プロダクトの深い知識とドキュメントへのアクセス
- シンプルな質問への高速なレスポンス
- 顧客データ処理に安全 — Red 分類で承認されている唯一のツール
- GitLab ワークフローと IDE (VS Code、JetBrains など) に統合
- GitLab でトレーニングされたモデルによるコード提案と説明

**最適なユースケース:**

- "GitLab の機能 X はどう動くのか？"
- "この顧客の構成を説明して"
- "この GitLab エラーの原因は何か？"
- 顧客環境からのログの処理
- エディタ内でインラインのコード提案と説明を取得

### GitLab Duo Agentic Chat {#gitlab-duo-agentic-chat}

**最適な用途:** GitLab エコシステム全体にわたるリサーチ、複雑な多段階ワークフロー

**データ分類:** [RED](/handbook/security/policies_and_standards/data-classification-standard/#red)

**参考資料:** [GitLab Duo Agentic Chat ドキュメント](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)

Duo Agent Platform の一部である Agentic Chat は、GitLab エコシステム全体にわたって多段階タスクを自律的に計画・実行できます。標準の Duo Chat とは異なり、Issue、MR、プロジェクトデータを横断して、複数のソースからのコンテキストを必要とする回答を組み立てられます。

**強み:**

- GitLab プロジェクト、Issue、MR に直接アクセスできる唯一のツール
- 複雑な多段階分析を扱える
- ドキュメントドラフトと MR を生成できる
- 顧客データ処理に安全

**最適なユースケース:**

- "この顧客の問題に関連する既存の Issue を見つけて"
- "長い Issue ディスカッションでの回避策を調査"
- "ドキュメント更新と MR を生成"
- "GitLab コードベースへのコード貢献"
- 複数のソースを必要とする複雑なチケット分析

### Anthropic Claude (Web) {#anthropic-claude-web}

**最適な用途:** ドラフト作成、要約、リサーチ、汎用推論、コミュニケーション強化

**データ分類:** [ORANGE](/handbook/security/policies_and_standards/data-classification-standard/#orange)

**参考資料:** [GitLab ハンドブック – Claude](/handbook/tools-and-tips/ai/claude/)

Anthropic Claude は GitLab チームメンバー向けの承認された汎用 AI アシスタントです。アクセスは [claude.ai](https://claude.ai) の Web インターフェース経由で提供されます。Red データ（顧客 PII、認証情報、その他の機密性のある顧客情報など）には使用してはいけません — すべての入力は Orange レベル以下にサニタイズする必要があります。

**利用可能なモデル:**

| モデル | 最適な用途 | 特性 |
|-------|----------|-----------------|
| Claude Sonnet 4 | 日々のタスク、高速イテレーション | 最速のレスポンス、強力な推論、コスト効率が高い。ほとんどのサポートタスクで最適なデフォルト。 |
| Claude Opus 4 | 複雑な分析、ニュアンスのある執筆 | 最も能力の高いモデル。複雑な多段階推論、詳細な技術的執筆、速度よりも深さが重要なあいまいな問題に最適。 |
| Claude Haiku 4 | 軽量タスク、高スループット | 最もコンパクトなモデル。素早い分類、シンプルな Q&A、または単純な質問に素早く回答が必要なときに適する。 |

**強み:**

- コミュニケーション強化に優れる — チケットレスポンスの明瞭さ、トーン、構造の改善
- 要約、ドラフト作成、創造的な問題解決に強い
- 技術領域・非技術領域を横断する有能な推論
- サニタイズ後の大きなドキュメントやログの分析のため、長いコンテキストウィンドウをサポート
- 最新トピックの調査のための Web 検索機能

**最適なユースケース:**

- 顧客向けコミュニケーションのレスポンスの明瞭さとトーンの改善
- 長い内部ドキュメントの要約や再構成
- 複雑なシナリオの素早い分析（サニタイズされたデータのみ）
- トラブルシューティングアプローチや回避策のブレインストーミング
- 内部ドキュメント、ランブック、プロセスガイドのドラフト作成
- 直接的な GitLab プロダクトアクセスを必要としない一般的な推論タスク

**制限事項:**

- GitLab プロダクトデータ、Issue、MR、内部システムへのアクセスはなし — それらのタスクには GitLab Duo を使用
- Red データを処理できない — 使用前に必ず入力をサニタイズ
- 知識はトレーニングデータと Web 検索に基づいており、最新の GitLab 固有の変更を反映していない可能性がある

### Glean {#glean}

**最適な用途:** Zendesk チケットの会話の要約、関連 KB 記事の提案、クロスプラットフォームエンタープライズ検索

**データ分類:** [ORANGE](/handbook/security/policies_and_standards/data-classification-standard/#orange)

**参考資料:** [GitLab ハンドブック – Glean ガイド](/handbook/business-technology/enterprise-applications/guides/glean-guide/)

Glean は、ハンドブック、GitLab、Google Drive、Slack、Zendesk、Salesforce、その他の接続されたデータソースのコンテンツをインデックス化するエンタープライズ AI 知識・検索プラットフォームです。サポートにとっての主な価値は、Zendesk サイドバー統合で、チケットインターフェースを離れずにチケット対応の AI 支援を提供することです。Zendesk コネクタ経由のサポートワークフローにも使用されます。

**強み:**

- 単一クエリで複数のデータソースを横断するエンタープライズ全体検索
- インコンテキスト支援のために Zendesk チケットサイドバーに直接組み込まれている
- チケットにリンクされた履歴により、過去の会話を継続したり再訪したりするのが容易
- 関連する KB 記事、ハンドブックページ、過去のチケット解決を一緒に表示できる

**最適なユースケース:**

- "ハンドオフのためにこのチケットの会話を要約"
- "この問題に関連する KB 記事を提案"
- ハンドブック、Slack、Google Drive に散在する関連情報の検索
- サポートワークフローに合わせたカスタムプロンプトの作成と再利用
- Zendesk を離れずに構造化された AI インサイトを素早く生成

## その他の承認済みツール

以下のツールは Orange データ分類レベルでの使用が承認されています。別途明記されない限り、Red データ（例: 顧客データ）には使用してはいけません。

### Slack AI {#slack-ai}

**承認:** 承認済み (Orange)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Slack に組み込まれた AI 駆動の要約とドラフト作成。見逃したチャンネルのキャッチアップ、長いスレッドの要約、メッセージ作成に役立ちます。既存の Slack ワークスペース内で動作し、Slack がすでに処理する範囲を超えてデータがプラットフォームから出ることはありません。

**一般的な用途:** PTO 中のチャンネル要約、長い意思決定スレッドの要点把握、素早いメッセージのドラフト作成。

### Gemini Chat (Workspace) {#gemini-chat-workspace}

**承認:** 承認済み (Orange)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Google Workspace (Docs、Sheets、Gmail など) に組み込まれた Gemini アシスタント。すでに作業しているツール内で直接、ライティング支援、リサーチ、一般的な Q&A に役立ちます。Workspace に統合されているため、コンテキストで Drive コンテンツを参照できます。

**一般的な用途:** Google Docs でのテキストのドラフトや改善、Sheets での数式の生成、Gmail のリプライ作成。

### Gemini API {#gemini-api}

**承認:** 承認済み (Orange、API キー承認が必要)

**参考資料:** [Legal & CorpSec – API キー申請](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#requests-for-api-key-use-for-anthropic-claude-and-google-gemini)

カスタムアプリケーションと統合のための Gemini API。**使用前に Legal/CorpSec のレビューと API キー承認が必要です** — 自分でキーをプロビジョニングしないでください。Orange データのみ。Red データをカスタム統合で送信してはいけません。

**一般的な用途:** 内部ツールの構築、カスタム自動化、LLM バックエンドが必要な実験的ワークフロー。

### NotebookLM {#notebooklm}

**承認:** 承認済み (Orange、ノートブック共有時は注意)

**参考資料:** [The Loop – NotebookLM](https://simpplr.link/d/e/theloop.gitlab.com/site/f2d115dc-bc7c-4925-8cab-2e55e97646ad/page/282d0c50-b2b3-4465-bfad-9cc9d32e4893)

ドキュメントに基づく分析と要約のための Google の AI ツール。ソースドキュメントをアップロードすると、NotebookLM はそれらのソースに厳密に基づいて質問に答えます — ドキュメント中心のリサーチでハルシネーションリスクを軽減します。

> [!warning]
> ノートブックは Google Drive の共有権限を**継承しません**。共有したノートブックは、基となる Drive ファイルが制限されていても、リンクを持つ誰にでもソースコンテンツを公開する可能性があります。機密性の高い (Red 以外の) コンテンツを含むノートブックを共有する際は注意してください。

**一般的な用途:** 長い RFC やアーキテクチャドキュメントの分析、複数のハンドブックページにわたる情報の統合、議題と背景ドキュメントをアップロードしてミーティングの準備をする。

### Zoom AI Assistant {#zoom-ai-assistant}

**承認:** 承認済み (Orange)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Zoom に組み込まれた、会議のトランスクリプション、要約、アクションアイテムのための AI アシスタント。会議後の要約を自動生成するため、参加者はノート取りではなく会話に集中できます。

**一般的な用途:** 自動生成された会議要約、録画通話からのアクションアイテム抽出、見逃した会議のキャッチアップ。

### Gong {#gong}

**承認:** 承認済み (Orange、営業のみ)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

営業電話のための AI 会議インテリジェンスプラットフォーム。顧客との会話を録音、トランスクリプト、分析し、洞察を引き出し、商談の進捗を追跡し、担当者をコーチングします。

> [!important]
> **顧客/営業電話のみ**承認されています。HR 会話、法務会議、内部人事討議、その他の非営業コンテキストでは使用してはいけません。

**一般的な用途:** 顧客通話のハイライトレビュー、商談を横断した反対意見の追跡、営業コーチングとイネーブルメント。

### Metaview {#metaview}

**承認:** 承認済み (Orange、採用)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

採用チーム向けの AI 面接トランスクリプションと構造化ノートツール。面接サマリーとスコアカードを自動生成します。**候補者の同意が必要**で、使用前に候補者に通知し、AI 支援のノート取りに同意してもらってください。

**一般的な用途:** 構造化された面接ノートの生成、一貫したドキュメント化による面接官のバイアス低減、採用フィードバックループの加速。

### Reclaim AI {#reclaim-ai}

**承認:** 承認済み (Orange、アクセス申請)

**参考資料:** [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

既存の会議の周りにフォーカス時間、休憩、タスクを自動的にスケジューリングする、AI 駆動のカレンダーとタイムブロッキングアシスタント。アクセスは **Lumos 経由でリクエスト**する必要があります — セルフサービスではありません。

**一般的な用途:** カレンダー上のフォーカス時間の保護、定期的な習慣 (昼食、運動) の自動スケジューリング、会議の多い週の最適化。

## 未承認ツール

以下の AI ツールは、通常のワークフローでの内部利用が**承認されていません**。GitLab または顧客データでこれらを使用することは内部ポリシーに違反します。

| ツール | ステータス | 備考 | 参考資料 |
|------|--------|-------|-----------|
| OpenAI ChatGPT / OpenAI API | ❌ 未承認 | 業務での OpenAI モデルの直接利用は禁止されています。AI 利用ポリシーの下、競合分析のための狭い例外があります。 | [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements) |
| Microsoft / GitHub Copilot | ❌ 未承認 | Microsoft Copilot と GitHub Copilot は、内部ワークフローでの利用が明示的に禁止されています。ポリシーの下、限定的な競合調査が許可される場合があります。 | [内部 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements) |
| Grammarly | ❌ 未承認 | 内部で非推奨化されています。コーポレート AI ツールポリシーで未承認として記載されています。 | [内部ハンドブック – AI at GitLab](https://internal.gitlab.com/handbook/company/ai-at-gitlab) |

> [!note]
> 競合調査目的で未承認ツールを評価する必要がある場合は、[AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)で具体的な例外と承認プロセスを参照してください。疑わしい場合は `#ai-security` で質問してください。
