---
title: "Code Suggestions Model Evaluation Guide"
description: "Code Suggestions 向けの新しい AI モデルを評価するためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/model_evaluation_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

このドキュメントは、新しい Code Suggestions モデルを評価するための技術的なハウツーガイドとして機能します。

## 評価テンプレート

モデルの評価プロセスを開始する際は、[Model Evaluation Template](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/model_evaluation_template.md) を使用して Issue を作成する必要があります。

## 評価基準

Code Suggestions のモデルをサポートする前に、**正確性**や**レイテンシ**などのいくつかの基準に照らしてそのモデルを評価する必要があります。検討すべき基準のより詳細なリストについては、[評価テンプレート](#evaluation-template)を参照してください。

### 正確性の評価

モデルの正確性を評価するには、[ELI5](#evaluating-by-eli5) を使用します。

### レイテンシの評価

モデルのレイテンシを評価するには、[ELI5](#evaluating-by-eli5) または [ai-model-latency-tester](#evaluating-by-ai-model-latency-tester) のいずれかを使用します。

レイテンシで評価する場合は、異なるリージョンから来るリクエストを確認することをお勧めします。テストする一般的なリージョンは、**North America**、**Europe**、**APAC** です。

レイテンシは次の方法で評価できます。

- **プロバイダーへ直接**
  - Vertex AI や Anthropic など、AI モデルプロバイダーに直接リクエストを送信します。
- **AIGW を経由してプロバイダーへルーティング**
  - AIGW にリクエストを送信し、AIGW がプロバイダーにリクエストを送信します。
  - これを行うには、事前に [AIGW にモデルを実装する](implementation_guidelines.md#ai-gateway)必要があります。GitLab ユーザーに一般提供することなく、AIGW にモデルを実装できます。

## 評価方法

### ELI5 による評価

[ELI5 (Eval like I'm 5)](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/tree/main/doc/eli5) は、[LangSmith](https://docs.smith.langchain.com/) を使用して AI モデルを評価する構造化された方法を提供します。ELI5 リポジトリには評価スクリプトが含まれており、サンプルデータセットと評価結果は [LangSmith platform](https://smith.langchain.com/) に保存されます。

#### ELI5 での評価の実行と分析

以下に関するガイダンスについては:

- 評価の実行については、[ELI5 documentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md) を参照してください。
- 正確性とレイテンシの評価については、[Analyzing results documentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md#analyzing-results) を参照してください。

**GCP インスタンスでの評価の実行**

GCP インスタンスで ELI5 評価を実行することは、インターネット接続や現在の場所の影響を受けない一貫したレイテンシ値を取得するのに最適です。現在、GCP インスタンスで評価を実行する自動化された方法はないため、これは手動で行う必要があります。

ガイダンスについては、`#g_code_creation` Slack チャンネルにお問い合わせください。

### AI Model Latency Tester による評価

[AI Model/Provider Latency Tester](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester) は、地理的に異なるリージョンのクライアントを使用して、地理的に分散したユーザーの体験をシミュレートし、サードパーティの AI サービスプロバイダーのレイテンシ評価を自動化します。これは、GitLab の AI 機能を支えるべきモデルについて、データに基づいた意思決定を支援することを目的としています。

詳細なガイダンスと更新情報については、[Latency evaluations issue](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester/-/issues/57) を参照してください。

### Load Tester による評価

[AI Model/Provider Load Tester](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/load-test) は、本番環境に近いトラフィックをシミュレートし、モデルプロバイダーが実世界のワークロードを処理できることを確認するために設計されています。モデルの評価プロセス中に、私たちはそのモデルの負荷テストを作成して実行する必要があります。

テストスクリプトの追加と実行の手順については、[こちらのステップ](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/load-test#add-load-test-for-new-models)に従ってください。
