---
title: AI ツール選択
description: 業務に最適な AI ツールを選択するためのガイドライン
upstream_path: /handbook/support/ai/ai-tool-selection/
upstream_sha: 839c14e40e08e6fd4099a01ee623aaf85faafd12
translated_at: "2026-06-01T21:50:58Z"
translator: claude
stale: false
lastmod: "2026-06-01T17:35:18+01:00"
---

GitLab サポートは、さまざまな機能と専門性を持つ複数の AI ツールへのアクセスを提供しています。このガイドは、特定のタスク要件に基づいて適切なツールを選択するのに役立ちます。

> [!note]
> このガイドは、[AI とサポート業務](_index.md) ページを読み、AI がタスクに役立つと判断していることを前提としています。AI を使うかどうか不明な場合は、まずそちらから始めてください。

## クイックリファレンステーブル

| ツール | 最適な用途 | 顧客データ | GitLab アクセス | 承認状況 |
|------|----------|---------------|---------------|-----------------|
| [GitLab Duo Chat](https://docs.gitlab.com/user/gitlab_duo_chat/) | GitLab 固有の質問、コード分析 | ✅ 安全 | プロダクトナレッジ | ✅ 承認済み (RED) |
| [GitLab Duo Agentic Chat](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/) | 複雑なリサーチ、多段階の分析 | ✅ 安全 | エコシステム全体へのアクセス | ✅ 承認済み (RED) |
| [Glean](../../security/customer-support-operations/zendesk/apps/global/#glean) | Zendesk チケットサマリー、KB 記事、エンタープライズ検索 | ✅ 安全 | プロダクトナレッジ (Duo Chat 経由) | ✅ 承認済み (ORANGE) |
| [Anthropic Claude (Web)](#anthropic-claude-web) | 下書き作成、サマリー、リサーチ、推論 |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE) |
| [Slack AI](#slack-ai) | Slack 内でのサマリーと下書き作成 |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE) |
| [Gemini Chat (Workspace)](#gemini-chat-workspace) | Google Workspace 内でのライティング、リサーチ、Q&A |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE) |
| [Gemini API](#gemini-api) | カスタムアプリと統合 | ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE、Legal/CorpSec の API キー事前レビューが必要) |
| [NotebookLM](#notebooklm) | ドキュメントに基づく分析とサマリー |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE) |
| [Zoom AI Assistant](#zoom-ai-assistant) | ミーティングの文字起こし、サマリー、アクションアイテム |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE) |
| [Metaview](#metaview) | 面接の文字起こしとメモ |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE、リクルーティング) |
| [Reclaim AI](#reclaim-ai) | カレンダーとタイムブロッキング |  ⚠️ サニタイズ必要 | なし | ✅ 承認済み (ORANGE、アクセス申請が必要) |

## ツール比較

### GitLab Duo Chat

**最適な用途:** GitLab 機能に関する簡単な質問、コード説明、標準的なトラブルシューティング

**データ分類:** [RED](/handbook/security/policies_and_standards/data-classification-standard/#red)

**参考:** [GitLab ハンドブック – GitLab Duo](/handbook/tools-and-tips/ai/gitlab-duo/)

GitLab Duo は GitLab の AI ネイティブな DevSecOps スイートで、チャット、コードサジェスチョン、エージェントワークフローを含みます。**Red データに対して承認されている唯一の AI ツール** です（例: チケット内の顧客データ、認証情報、PII）。GitLab UI とサポートされている IDE の両方で利用できます。

**強み:**

- GitLab プロダクトの深い知識とドキュメントへのアクセス
- 単純な質問への素早い応答
- 顧客データ処理に対して安全 — Red 分類に承認されている唯一のツール
- GitLab ワークフローと IDE (VS Code、JetBrains など) に統合
- GitLab で訓練されたモデルによるコードサジェスチョンと説明

**最適なユースケース:**

- 「GitLab の機能 X はどのように動作する？」
- 「この顧客の構成を説明して」
- 「この GitLab エラーの原因は何か？」
- 顧客環境のログ処理
- エディター内でインラインのコードサジェスチョンと説明を得る

### GitLab Duo Agentic Chat

**最適な用途:** GitLab エコシステム全体のリサーチ、複雑な多段階ワークフロー

**データ分類:** [RED](/handbook/security/policies_and_standards/data-classification-standard/#red)

**参考:** [GitLab Duo Agentic Chat ドキュメント](https://docs.gitlab.com/user/gitlab_duo_chat/agentic_chat/)

Duo Agent Platform の一部である Agentic Chat は、GitLab エコシステム全体で多段階のタスクを自律的に計画して実行できます。標準の Duo Chat とは異なり、Issue、MR、プロジェクトデータをたどって、複数のソースからのコンテキストを必要とする答えを組み立てられます。

**強み:**

- GitLab プロジェクト、Issue、MR への直接アクセスがある唯一のツール
- 複雑な多段階の分析を処理
- ドキュメントの下書きと MR を生成可能
- 顧客データ処理に対して安全

**最適なユースケース:**

- 「この顧客の問題に関連する既存の Issue を見つけて」
- 「長い Issue ディスカッション内のワークアラウンドを調査して」
- 「ドキュメントの更新と MR を生成して」
- 「GitLab コードベースへのコードコントリビューション」
- 複数のソースを必要とする複雑なチケット分析

### Anthropic Claude (Web)

**最適な用途:** 下書き作成、サマリー、リサーチ、汎用的な推論、コミュニケーションの改善

**データ分類:** [ORANGE](/handbook/security/policies_and_standards/data-classification-standard/#orange)

**参考:** [GitLab ハンドブック – Claude](/handbook/tools-and-tips/ai/claude/)

Anthropic Claude は GitLab チームメンバー向けに承認された汎用 AI アシスタントです。アクセスは [claude.ai](https://claude.ai) の Web インターフェース経由で提供されます。Red データ (例: 顧客 PII、認証情報、その他の機密の顧客情報) と一緒に使ってはいけません — すべての入力は Orange レベル以下にサニタイズする必要があります。

**利用可能なモデル:**

| モデル | 最適な用途 | 特徴 |
|-------|----------|-----------------|
| Claude Sonnet 4 | 日常業務、素早いイテレーション | 最速の応答、強力な推論、コスト効率が良い。ほとんどのサポートタスクのデフォルトに最適。 |
| Claude Opus 4 | 複雑な分析、繊細なライティング | 最も能力の高いモデル。複雑な多段階の推論、詳細な技術ライティング、速度よりも深さが重要な曖昧な問題に理想的。 |
| Claude Haiku 4 | 軽量タスク、ハイスループット | 最もコンパクトなモデル。素早い分類、シンプルな Q&A、単純な質問への素早い答えが必要なときに適している。 |

**強み:**

- コミュニケーション改善に優れる — チケット応答の明瞭さ、トーン、構造の改善
- サマリー、下書き作成、創造的な問題解決に強い
- 技術的・非技術的なドメインにわたる優れた推論
- 大きなドキュメントやログを分析するための長いコンテキストウィンドウをサポート (サニタイズ後)
- 現在のトピックを調査するための Web 検索機能

**最適なユースケース:**

- 顧客対応コミュニケーションの応答の明瞭さとトーンの改善
- 長い社内ドキュメントのサマリーや再構成
- 複雑なシナリオの素早い分析 (サニタイズされたデータのみ)
- トラブルシューティングのアプローチやワークアラウンドのブレインストーミング
- 社内ドキュメント、ランブック、プロセスガイドの下書き作成
- GitLab プロダクトへの直接アクセスを必要としない汎用的な推論タスク

**制限:**

- GitLab プロダクトデータ、Issue、MR、社内システムへのアクセスなし — それらのタスクには GitLab Duo を使う
- Red データを処理できない — 使用前に常に入力をサニタイズする
- 知識は訓練データと Web 検索に基づくため、最新の GitLab 固有の変更を反映していない可能性がある

### Glean

**最適な用途:** Zendesk チケット会話のサマリー、関連する KB 記事の提案、プラットフォーム横断のエンタープライズ検索

**データ分類:** [ORANGE](/handbook/security/policies_and_standards/data-classification-standard/#orange)

**参考:** [GitLab ハンドブック – Glean ガイド](/handbook/eta/ai/tools/glean/)

Glean は、ハンドブック、GitLab、Google Drive、Slack、Zendesk、Salesforce、その他の連携データソース全体のコンテンツをインデックスするエンタープライズ AI ナレッジ・検索プラットフォームです。サポートにとっての主な価値は、チケットインターフェースを離れずにチケットを意識した AI 支援を提供する Zendesk サイドバー統合です。Zendesk コネクター経由でサポートワークフローにも使われています。

**強み:**

- 単一のクエリで複数のデータソース全体にわたるエンタープライズ全社検索
- Zendesk チケットサイドバーに直接組み込まれ、コンテキスト内での支援を提供
- チケットにリンクされた履歴で過去の会話を継続したり再訪したりが容易
- 関連する KB 記事、ハンドブックページ、過去のチケット解決を一緒に表示できる

**最適なユースケース:**

- 「このチケットの会話をハンドオフ用にサマリーして」
- 「この問題に関連する KB 記事を提案して」
- ハンドブック、Slack、Google Drive に散らばっている関連情報の検索
- サポートワークフローに合わせたカスタムプロンプトの作成と再利用
- Zendesk を離れずに構造化された AI インサイトを素早く生成

## その他の承認済みツール

以下のツールは Orange データ分類レベルでの使用が承認されています。明記されていない限り、Red データ (例: 顧客データ) と一緒に使ってはいけません。

### Slack AI

**承認状況:** 承認済み (Orange)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Slack に組み込まれた AI 駆動のサマリーと下書き作成。見逃したチャンネルへのキャッチアップ、長いスレッドのサマリー、メッセージ作成に便利です。既存の Slack ワークスペース内で動作 — Slack がすでに扱う以上のデータはプラットフォームから出ません。

**よくある用途:** PTO 中のチャンネルのサマリー、長い意思決定スレッドの要点把握、素早いメッセージの下書き作成。

### Gemini Chat (Workspace)

**承認状況:** 承認済み (Orange)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Google Workspace (Docs、Sheets、Gmail など) に組み込まれた Gemini アシスタント。すでに作業しているツール内で直接、ライティング支援、リサーチ、汎用 Q&A に便利です。Workspace に統合されているため、文脈に応じて Drive のコンテンツを参照できます。

**よくある用途:** Google Docs でのテキストの下書きや磨き、Sheets での数式生成、Gmail 返信の作成。

### Gemini API

**承認状況:** 承認済み (Orange、API キー承認が必要)

**参考:** [Legal & CorpSec – API キーリクエスト](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#requests-for-api-key-use-for-anthropic-claude-and-google-gemini)

カスタムアプリケーションと統合のための Gemini API。**使用前に Legal/CorpSec のレビューと API キー承認が必要** — キーを自分でプロビジョニングしないでください。Orange データのみ。カスタム統合経由で Red データを送信してはいけません。

**よくある用途:** 社内ツール、カスタム自動化、LLM バックエンドが必要な実験的ワークフローの構築。

### NotebookLM

**承認状況:** 承認済み (Orange、ノートブック共有時は注意)

**参考:** [The Loop – NotebookLM](https://simpplr.link/d/e/theloop.gitlab.com/site/f2d115dc-bc7c-4925-8cab-2e55e97646ad/page/282d0c50-b2b3-4465-bfad-9cc9d32e4893)

Google の AI ツールで、ドキュメントに基づく分析とサマリーを行います。ソースドキュメントをアップロードすると、NotebookLM はそれらのソースに厳密に基づいて質問に答えます — ドキュメント中心のリサーチでのハルシネーションリスクを減らします。

> [!warning]
> ノートブックは Google Drive の共有権限を継承 **しません**。共有したノートブックは、リンクを持つ人全員にソースコンテンツを公開する可能性があります。元の Drive ファイルが制限されていてもです。機密性のある (ただし Red ではない) 素材を含むノートブックを共有する際は注意してください。

**よくある用途:** 長い RFC やアーキテクチャドキュメントの分析、複数のハンドブックページにわたる情報の統合、議題と背景ドキュメントをアップロードしたミーティング準備。

### Zoom AI Assistant

**承認状況:** 承認済み (Orange)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

Zoom 組み込みの AI アシスタントで、ミーティングの文字起こし、サマリー、アクションアイテムに使えます。ミーティング後のレキャップを自動生成するため、参加者はノートを取ることよりも会話に集中できます。

**よくある用途:** 自動生成されるミーティングサマリー、録画コールからのアクションアイテム抽出、見逃したミーティングへのキャッチアップ。

### Gong

**承認状況:** 承認済み (Orange、セールスのみ)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

セールスコール向けの AI ミーティングインテリジェンスプラットフォーム。顧客との会話を録音、文字起こし、分析して、インサイトの発見、ディール進捗の追跡、レップのコーチングを行います。

> [!important]
> **顧客/セールスコールのみに承認** されています。HR 会話、法務ミーティング、社内人事ディスカッション、その他の非セールス文脈で使ってはいけません。

**よくある用途:** 顧客コールのハイライトレビュー、ディール横断の異議追跡、セールスコーチングとイネーブルメント。

### Metaview

**承認状況:** 承認済み (Orange、リクルーティング)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

リクルーティングチーム向けの AI 面接文字起こしと構造化メモツール。面接サマリーとスコアカードを自動生成します。**候補者の同意が必要** — 候補者に AI 支援メモ取りについて通知し、同意を得ていることを確認してください。

**よくある用途:** 構造化された面接メモの生成、一貫したドキュメント化を通じた面接者のバイアス低減、採用フィードバックループの高速化。

### Reclaim AI

**承認状況:** 承認済み (Orange、アクセス申請が必要)

**参考:** [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements)

既存のミーティングの周りにフォーカスタイム、休憩、タスクを自動的にスケジュールする AI 駆動のカレンダー・タイムブロッキングアシスタント。アクセスは **Lumos 経由で申請が必要** — セルフサービスではありません。

**よくある用途:** カレンダーでのフォーカスタイム保護、繰り返しの習慣 (ランチ、エクササイズ) の自動スケジューリング、ミーティングの多い週の最適化。

## 非承認ツール

以下の AI ツールは、通常のワークフローでの社内利用が **承認されていません**。GitLab や顧客データと一緒に使うことは社内ポリシー違反です。

| ツール | 状況 | 注記 | 参考 |
|------|--------|-------|-----------|
| OpenAI ChatGPT / OpenAI API | ❌ 非承認 | 業務での OpenAI モデルの直接利用は禁止です。AI 利用ポリシーの下で、競合分析の限定的な例外があります。 | [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements) |
| Microsoft / GitHub Copilot | ❌ 非承認 | Microsoft Copilot と GitHub Copilot の両方が、社内ワークフローで明示的に禁止されています。ポリシーの下で限定的な競合リサーチが許可される場合があります。 | [社内 AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements) |
| Grammarly | ❌ 非承認 | 社内で非推奨化されています。社内 AI ツールポリシーで非承認として記載されています。 | [社内ハンドブック – AI at GitLab](https://internal.gitlab.com/handbook/company/ai-at-gitlab) |

> [!note]
> 競合リサーチ目的で非承認ツールを評価する必要がある場合は、特定の例外と承認プロセスについて [AI ツール利用要件](https://internal.gitlab.com/handbook/ai-security-at-gitlab/ai-tool-usage-requirements) を参照してください。不明な場合は `#ai-security` で質問してください。
