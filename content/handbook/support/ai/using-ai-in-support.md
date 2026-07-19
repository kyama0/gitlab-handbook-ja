---
title: サポートでの AI 利用
description: シナリオ別ツール選択、プロンプトエンジニアリング、モデル選択など、サポートエンジニアが AI ツールを日常的に使用するための実践ガイド
upstream_path: /handbook/support/ai/using-ai-in-support/
upstream_sha: 1312dadbdf7381446077faefcfae17ba323692b6
translated_at: "2026-07-19T06:06:15+09:00"
translator: codex
stale: false
lastmod: "2026-07-17T14:14:19-07:00"
---

## 概要

このページは、日々のサポートエンジニアリング業務で AI ツールを使用するための実践的でシナリオ駆動のガイダンスを提供します。ツールの機能、データ分類ルール、プロンプトエンジニアリングのテクニック、モデル選択のアドバイスを 1 つのリファレンスに統合しています。

このページを使う前に、以下を読んでおいてください:

1. [AI とサポート業務](_index.md) — AI を使うタイミングに関する意思決定フレームワーク
1. [AI ツール選択](ai-tool-selection.md) — 詳細なツールの機能と承認状況
1. [AI 利用の推奨事項](ai-usage-recommendations.md) — 一般的なプロンプティング戦略

## シナリオ別ツール

異なるツールが異なるタスクに適しています。以下のテーブルは、データ分類、アクセス機能、強みに基づいて、一般的なサポートエンジニアリングシナリオを推奨ツールにマッピングしています。

| シナリオ | 推奨ツール | 理由 |
|----------|-----------------|-----|
| ハンドオフのために長い Zendesk チケットを要約する | [Glean](ai-tool-selection.md#glean) | Zendesk サイドバーから直接チケットコンテキストを読み、コピー＆ペーストが不要 |
| 類似する過去のチケット、Issue、MR を見つける | [Glean](/handbook/support/ai/ai-tool-selection/#glean) または [GitLab Duo Agentic Chat](/handbook/support/ai/ai-tool-selection/#gitlab-duo-agentic-chat) | Glean は Zendesk、ハンドブック、Slack を横断検索。Agentic Chat は GitLab の Issue と MR を直接検索 |
| 顧客ログを使った CI/CD 失敗の診断 | [GitLab Duo Chat](/handbook/support/ai/ai-tool-selection/#gitlab-duo-chat) | Red データに承認済み。GitLab プロダクト知識があり、ログを安全に処理できる |
| Issue、MR、コードを横断する多段階調査 | [GitLab Duo Agentic Chat](/handbook/support/ai/ai-tool-selection/#gitlab-duo-agentic-chat) | GitLab エコシステムを自律的に横断し、複数のソースから知見を統合できる |
| 内部ドキュメントやワークフローのドラフト作成・改良 | [Anthropic Claude](/handbook/support/ai/ai-tool-selection/#anthropic-claude-web) | 長いコンテキストウィンドウでドラフト作成、要約、推論に強い |
| Google Doc や Gmail での文言の磨き上げ | [Gemini (Workspace)](/handbook/support/ai/ai-tool-selection/#gemini-chat-workspace) | コンテンツがすでに存在する Google Workspace に直接統合されている |
| PTO 後に Slack チャンネルをキャッチアップ | [Slack AI](/handbook/support/ai/ai-tool-selection/#slack-ai) または [Glean](/handbook/support/ai/ai-tool-selection/#glean) | Slack AI はその場で要約。Glean はより広範なクロスプラットフォーム要約を提供できる |
| 解決済みチケットからドラフト KB 記事を生成 | [GitLab Duo Agentic Chat](/handbook/support/ai/ai-tool-selection/#gitlab-duo-agentic-chat) | チケットコンテキスト (Red データ承認済み) にアクセスでき、テンプレートに従って構造化された出力を生成できる |
| トラブルシューティングアプローチのブレインストーミング | [Anthropic Claude](/handbook/support/ai/ai-tool-selection/#anthropic-claude-web) または [GitLab Duo Chat](/handbook/support/ai/ai-tool-selection/#gitlab-duo-chat) | Claude は一般的な推論用。Duo Chat は問題が GitLab 固有のとき |
| Duo カスタムルールのプロンプトアイデアのプロトタイピング | [Anthropic Claude](/handbook/support/ai/ai-tool-selection/#anthropic-claude-web) | 他の場所にプロンプトをデプロイする前の反復的なドラフト作成と改良に良い |

## データ分類: クイックルール

適切なツールを選択することは、扱うデータを理解することから始まります。完全な分類標準は[データ分類標準](../../security/policies_and_standards/data-classification-standard/)にあります。

| データ種別 | 分類 | 承認済みツール |
|-----------|---------------|----------------|
| 顧客 PII、認証情報、機密データを含むログ、チケット添付ファイル | [RED](/handbook/security/policies_and_standards/data-classification-standard/#red) | GitLab Duo (Chat、Agentic Chat、Agent Platform) のみ |
| 内部ドキュメント、ハンドブックコンテンツ、匿名化された例、ワークフローのドラフト | [ORANGE](/handbook/security/policies_and_standards/data-classification-standard/#orange) | すべての承認済みツール (Glean、Claude、Gemini、Slack AI、NotebookLM、Zoom AI など) |

> 疑わしい場合はデータを Red として扱ってください。Orange 分類のツールを使用する前に、顧客を識別する情報をサニタイズしてください。検証要件については、[チケットでの作業に関する LLM 利用ガイダンス](../workflows/working-on-tickets.md#can-i-use-output-from-an-llm-in-ticket-replies)を参照してください。

## サポートエンジニアのためのプロンプトエンジニアリング

効果的なプロンプティングは無駄なイテレーションを減らし、より実行可能な出力を生み出します。以下の原則はすべての AI ツールに適用されます。

### 中核原則

1. **ゴールを明確に述べる** - オープンエンドな質問ではなく、必要な成果物 (診断、KB ドラフト、リプライの骨子、チェックリスト) を指定します。
1. **コンテキストを提供する** - GitLab バージョン、環境タイプ (SaaS または self-managed)、インストール方法、エラーメッセージ、すでに試したことを含めます。
1. **出力を制約する** - 3〜5 個の箇条書き、ステップバイステップのチェックリスト、長所短所付きの 2 つのオプションなど、特定のフォーマットを依頼します。
1. **不確実性を許容する** - 証拠が弱いときに推測するのではなく、ツールが「わからない」と答えることを許容します。
1. **イテレーションする** - レスポンスに基づいてプロンプトを改良し、ゼロから始めるのではなく不足している詳細を追加します。

### サポート固有のプロンプトパターン

#### Issue 分析と診断

> You are a GitLab Support Engineer. Here is a ticket summary, environment and logs.
>
> Please:
>
> - Identify the most likely root cause or causes.
> - Suggest up to five concrete next troubleshooting steps.
> - Use the GitLab docs, MRs, issues and codebase for your investigation.

#### 解決策のリサーチ

> I am working on a GitLab support case with the problem: [describe briefly].
>
> Please find relevant GitLab documentation, known issues and merge requests.

#### 顧客リプライのフォーマット

> Act as a GitLab Support Engineer.
>
> I have drafted the following response to a customer. Please help me improve the formatting, clarity and structure while preserving my original meaning and technical content:
>
> [paste your drafted response here]
>
> Ensure the response:
>
> - Restates the problem clearly.
> - Explains what is happening in simple terms.
> - Presents the next steps in a logical order with brief reasoning.
> - Sets expectations on what we will do next and when we will update them.
>
> Do not add information that is not present in my draft.

AI は、すでに自分でドラフトしたレスポンスのフォーマットや磨き上げを助けるために使用するべきです。LLM から完全に顧客向けリプライを生成してはいけません。まず自分の理解と調査に基づいてレスポンスを書き、それから AI を使って明瞭さ、構造、トーンを改善してください。顧客に送信するすべてのレスポンスの正確性と完全性については、あなたが責任を持ち続けます。

#### ナレッジベースまたはワークフローのドラフト

> Using the following ticket notes and solution, draft a short internal Support knowledge base article or workflow.
>
> Include sections: Description, Environment, Symptoms, Cause, Solution or Workaround, Additional Information.
>
> Keep it concise and technical and avoid customer-specific identifiers.

## トラブルシューティングのための GitLab Duo Agent Platform の使用

Red データ (完全なチケット内容、ログ、構成スニペット) が関与する場合、GitLab Duo Agent Platform (DAP) が推奨ツールです。Red データに承認されている唯一の AI ツールであり、GitLab エコシステムへの直接アクセスがあります。

### DAP が最も役立つとき

- チケットが複雑な CI/CD 動作、スケーリングの質問、コード、パイプライン、ドキュメントすべてが関連する構成を含む場合。
- 複数の GitLab プロジェクトやコンポーネントを一緒に考慮する必要がある場合。
- 提案されたステップが、汎用的なアドバイスではなく実際の GitLab コードとドキュメントに基づく必要がある場合。

### DAP に依頼すること

- サマリー、環境、ログ、最近の変更を含む、提供したチケットコンテキストを読む。
- 関連するコンポーネント、フィーチャーフラグ、構成キーについて GitLab コードベースをチェックする。
- 動作、機能、エラーを記述するページについて GitLab ドキュメントを検索する。
- 症状に一致する既存の Issue やマージリクエストを探す（リグレッション、機能変更、既知の制限を含む）。
- たとえば「`<file>` のコードと Issue `<link>` に基づく」と「可能性はあるが未確認の原因」を区別することで、証拠と仮説を分離する。

### モデル選択

DAP で使用する大規模言語モデル (LLM) を選択できます。選択はレスポンスの品質、速度、推論の深さに影響し、適切な選択は Duo Chat を直接使用しているか、エージェント型ハーネスを使用しているかによって異なります。

| モデル | 速度 | 推論の深さ | 最適な用途 |
|-------|-------|-----------------|----------|
| Claude Haiku | 最速 | 基本 | 素早い検索、シンプルな要約、テキストの再フォーマット |
| Claude Sonnet | 高速 | 強力 | ほとんどの日常的なサポート業務: 診断、ドラフト作成、リサーチ |
| Claude Opus | 低速 | 最強 | 詳細調査、あいまいな問題、長い多段階推論 |

#### Duo Chat を直接使用する場合

1. ほとんどのチケットで **Sonnet** から始めてください。診断、解決策のリサーチ、ドラフト作成を上手く扱います。
1. レスポンスに深さが欠けるか重要な詳細が抜けている場合、同じプロンプトで **Opus** を再試行してください。
1. 高ボリュームで複雑性の低いタスク (チケットの一括要約や箇条書きから散文への変換など) で速度が重要な場合は **Haiku** を使用してください。
1. コード、Issue、MR、ドキュメントを相互参照する詳細調査では、**Opus** が最も徹底した結果を生み出します。

#### エージェント型ハーネスを使用する場合

`internal-soslab` や GitLab Support の Agent Capabilities のようなエージェント型ハーネスを使用する場合は、大規模なモデルを優先してください。大きなコンテキストウィンドウと強力な推論により、これらのツールが対象とするログ量の多い複数ソースの調査を扱えます。

1. チケットを最初から最後まで扱う場合は、**Opus** のような大規模なモデルから始めてください。
1. 範囲が明確な個別タスクには、**Sonnet** のような小規模なモデルに切り替えてください。

Duo で選択するモデルは、ツールがアクセスできるデータには影響しません。

## ベストプラクティス

### プロンプトを送る前

- **ベースラインを把握する** - タスクが手動でどれくらいかかるかを見積もります。AI がそれを上回らないなら、役立っていません。
- **データ分類をまず確認する** - ツールを選ぶ前に Red データか Orange データかを判断します。これは任意ではありません。
- **知っていることから始める** - AI に依頼する前に自分の理解をドラフトします。AI は思考を置き換えるのではなく、強化するために使います。

### AI を使用中

- **すべてを検証する** - 環境変数、構成オプション、ドキュメント URL、API エンドポイント、CLI オプション、バージョン固有の詳細を権威あるソースに対してチェックします。LLM は自信ありげにもっともらしいが誤った技術的詳細を生成します。
- **バージョンと日付の混乱に注意する** - LLM はしばしば古いバージョン、不正確なリリース日、顧客のバージョンに存在しない機能を提案します。常にバージョン適用性を確認してください。
- **数字や数学を信頼しない** - LLM は数値推論で信頼できません。統計分析には専用ツールを使ってください。
- **ゼロから始めずにイテレーションする** - 最初のレスポンスが惜しいが不完全なら、新しい会話を始めるのではなく、フォローアッププロンプトで欠けている詳細を追加してください。
- **会話を集中させる** - スレッド途中でコンテキストを切り替えるよりも、1 会話 1 トピックの方が良い結果を生み出します。

### 顧客とのやり取り

- **AI を著者ではなくフォーマットに使う** - 自分の調査と理解に基づいて常にレスポンスを先に書きます。すでに書いたものに対してフォーマット、明瞭さ、構造、トーンを改善するために AI を使います。LLM が完全に生成したレスポンスを送らないでください。
- **共有前にコマンドとコードをテストする** - 顧客に送る前に、コマンドやコードスニペットを理解、説明し、テストできなければなりません。
- **Orange ツールを使う前に匿名化する** - Claude、Glean、または非 Duo ツールに貼り付ける前に、顧客名、アカウント識別子、認証情報、その他の PII をストリップしてください。
- **適切なときに開示する** - 顧客が AI を使用したかと尋ねたら、透明性を持ってください。GitLab は[透明性](/handbook/values/#transparency)を大切にしています。

### AI を使用した後

- **何が機能するかを追跡する** - 特定の問題タイプに有用な結果を生み出すプロンプトとツールを記録します。効果的なパターンをチームと共有してください。
- **AI が悪影響を及ぼしているときに認識する** - 解決するよりプロンプトに時間がかかっていたり、理解していないアドバイスに従っていたり、同僚が品質低下に気づいているなら、後ろに引いて手動で作業します。
- **専門性の構築を続ける** - AI は成長を加速するべきで、置き換えるべきではありません。AI が答えられるからといって学ぶことを避けるようになっていたら、それは基礎に再焦点を当てるべき兆候です。

## 関連ページ

- [AI とサポート業務](_index.md)
- [AI ツール選択](ai-tool-selection.md)
- [AI 利用の推奨事項](ai-usage-recommendations.md)
- [チケット返信での LLM 出力の利用](../workflows/working-on-tickets.md#can-i-use-output-from-an-llm-in-ticket-replies)
- [データ分類標準](/handbook/security/policies_and_standards/data-classification-standard/)
