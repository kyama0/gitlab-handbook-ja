---
title: "Code Suggestions モデル評価ガイド"
description: "Code Suggestions 向けの新しい AI モデルを評価するためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/model_evaluation_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:24:31.0151723+09:00"
translator: codex
stale: false
---

このドキュメントは、新しい Code Suggestions モデルを評価するための技術的なハウツーガイドです。

## 評価テンプレート {#evaluation-template}

モデル評価プロセスを開始する際は、
[モデル評価テンプレート](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/model_evaluation_template.md)を使って Issue を作成する必要があります。

## 評価基準

Code Suggestions でモデルをサポートする前に、**正確性（correctness）** や**レイテンシ（latency）** など、いくつかの基準に対してそのモデルを評価する必要があります。
考慮すべき基準のより詳細なリストについては、[評価テンプレート](#evaluation-template)を参照してください。

### 正確性の評価

モデルの正確性を評価するには、[ELI5](#evaluating-by-eli5) を使用してください。

### レイテンシの評価

モデルのレイテンシを評価するには、[ELI5](#evaluating-by-eli5)
または [ai-model-latency-tester](#evaluating-by-ai-model-latency-tester)のいずれかを使用してください。

レイテンシで評価する際は、異なるリージョンから来るリクエストを確認することが推奨されます。
テスト対象としてよくあるリージョンは、**北米**、**ヨーロッパ**、**APAC** です。

レイテンシは以下の方法で評価できます。

- **プロバイダーへ直接**
  - Vertex AI や Anthropic などの AI モデルプロバイダーへ直接リクエストを送信します。
- **AIGW を経由してプロバイダーへ**
  - AIGW にリクエストを送信し、AIGW がプロバイダーへリクエストを送信します。
  - これを実施するには、事前に [AIGW にモデルを実装する](implementation_guidelines.md#ai-gateway)必要があります。
    AIGW にモデルを実装しても、GitLab ユーザーに対して一般公開しないことも可能です。

## 評価方法

### ELI5 による評価 {#evaluating-by-eli5}

[ELI5（Eval like I'm 5）](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/tree/main/doc/eli5)は、[LangSmith](https://docs.smith.langchain.com/) を使って AI モデルを評価するための構造化された方法を提供します。
ELI5 リポジトリには評価スクリプトが含まれており、サンプルデータセットと評価結果は [LangSmith プラットフォーム](https://smith.langchain.com/)に保存されます。

#### ELI5 での評価の実行と分析

以下のガイダンスについて：

- 評価の実行については、[ELI5 のドキュメント](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md)を参照してください。
- 正確性とレイテンシの評価については、[結果の分析ドキュメント](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md#analyzing-results)を参照してください。

**GCP インスタンス上での評価の実行**

GCP インスタンス上で ELI5 評価を実行することは、自分のインターネット接続や現在の場所に影響されずに一貫したレイテンシ値を取得するのに最適です。
現時点では GCP インスタンスで評価を実行する自動化された方法はないため、手動で行う必要があります。

ガイダンスについては `#g_code_creation` Slack チャンネルへお問い合わせください。

### AI Model Latency Tester による評価

[AI Model/Provider Latency Tester](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester) は、
さまざまな地理的リージョンのクライアントを使用してサードパーティ AI サービスプロバイダーのレイテンシ評価を自動化し、
地理的に分散したユーザーの体験をシミュレートします。これは、GitLab の AI 機能を支えるべきモデルに関して
データドリブンな意思決定を行うことを支援することを目的としています。

詳細なガイダンスやアップデートについては、[Latency evaluations の Issue](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester/-/issues/57) を参照してください。

### Load Tester による評価

[AI Model/Provider Load Tester](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/load-test) は、本番に近いトラフィックをシミュレートし、モデルプロバイダーが実世界のワークロードを処理できることを確認するために設計されています。モデル評価プロセス中に、私たちはモデル向けの負荷テストを作成し、実行する必要があります。

テストスクリプトの追加と実行の手順については、[こちらの手順](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/load-test#add-load-test-for-new-models)に従ってください。
