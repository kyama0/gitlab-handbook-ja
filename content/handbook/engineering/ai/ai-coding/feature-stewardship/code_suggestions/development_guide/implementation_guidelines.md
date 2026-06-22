---
title: "Code Suggestions Implementation Guidelines"
description: "Code Suggestions に新しい AI モデルを実装するためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/implementation_guidelines/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
lastmod: "2026-06-22T16:36:51-04:00"
---

これは、**[AI Gateway (AIGW)](#ai-gateway)** および／または **[GitLab Rails](#gitlab-rails)** で Code Suggestions 用のモデルをサポートするためのガイドラインです。

## 概要

Code Suggestions のリクエストは、**AI Gateway に直接**ルーティングするか、**GitLab Rails 経由で間接的に**ルーティングできます。

- **AIGW へ直接（direct-to-AIGW）** のリクエストでは、IDE は [Direct Connections API エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information) を通じて GitLab Rails からモデルの詳細を取得します。その後、IDE は GitLab Rails から取得したモデルの詳細を使って AIGW にリクエストを送信します。
- **GitLab Rails 経由で間接的（indirect-through-GitLab-Rails）** なリクエストでは、IDE は GitLab Rails の [Code Completions API エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions) にリクエストを送信します。その後、GitLab Rails が AIGW にリクエストを送信します。

Code Completions と Code Generations、および direct-to-AIGW と indirect-through-GitLab-Rails のリクエストについてのより詳しい概要は、[Code Suggestions Technical Overview](../engineering_overview.md#code-suggestions-technical-overview) と [Code Completion](../engineering_overview.md#code-completion) のガイドを参照してください。

## AI Gateway

[AI Gateway リポジトリ](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)。

ここは、AI モデルへのリクエストが実装される場所です。AIGW は、AI モデルと GitLab の他のシステムとの間のハブとして機能します。

AIGW では、すべての GitLab ユーザーが一般に利用できるようにすることなく、新しいモデルを導入できます。たとえば、レイテンシーテストの目的で新しいモデルを導入できます。新しいモデルが GitLab ユーザーに利用可能になるのは、[GitLab Rails](#gitlab-rails) を通じて有効化されたときだけです。

### AIGW API エンドポイント

AI Gateway への Code Completions と Code Generations のリクエストは、それぞれ異なる Code Suggestions API エンドポイントを通じて送信されます。AIGW の Code Suggestions API についての詳細は、[Code Suggestions API ドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/api.md#code-suggestions) を参照してください。本番環境やステージング環境に直接 `curl` を送る方法についての詳細は、[社内ドキュメント](https://internal.gitlab.com/handbook/product/ai-strategy/code-suggestions/testing_code_suggestions_aigw_api/) を参照してください。

### 新しいモデルを追加する際の考慮事項 {#considerations-when-adding-a-new-model}

- モデルへのリクエストに **stop トークン** を指定していることを確認してください。（[サンプル MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1298) を参照。）
- モデルとユースケースによっては、リクエストに **追加のコンテキストを含める** 必要がある場合があります。これには、プロジェクトのライブラリなど、開いているファイルの内容を追加することが含まれます。
- ほとんどのモデルでは、空白のトリミングやコメントの削除などの **ポストプロセス（後処理）** が必要になります。既存のポストプロセッサを使用する（[サンプル MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1351/)）か、必要に応じて新しいものを追加する（[サンプル MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1470)）ことができます。

## GitLab Rails

[GitLab Rails リポジトリ](https://gitlab.com/gitlab-org/gitlab/)。

GitLab Rails は、AI モデルに *直接* リクエストを送信することは *ありません*。GitLab Rails は AIGW にリクエストを送信し、AIGW が AI モデルにリクエストを送信します。

GitLab Rails は、Code Completions または Code Generations にどのモデルを使用するかについての信頼できる唯一の情報源です。GitLab Rails は [フィーチャーフラグ](#introduce-behind-a-feature-flag) を通じて現在のモデルを切り替えます。

direct-to-AIGW のリクエストでは、GitLab Rails は Direct Access エンドポイントを通じてモデルの詳細を指定します。indirect-through-GitLab-Rails のリクエストでは、GitLab Rails は AIGW へのリクエストのペイロードにモデルの詳細を含めます。

### GitLab Rails API エンドポイント

- [Direct Access エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information) - direct-to-AIGW のリクエスト向けに、AIGW へリクエストを送信するために必要な情報を提供するエンドポイント
- [Code Suggestions エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions) - indirect-through-GitLab-Rails のリクエストに使用されるエンドポイント

## モデルをサポートするための一般的なガイドライン

これは、たとえば評価を行ってそのモデルが許容可能であると判断した後など、Code Suggestions 用のモデルをサポートする準備ができたときのためのガイドラインです。

### エピックを作成する

モデルの導入は通常、複数のタスクにまたがるため、この作業のためにエピックまたはサブエピックを作成するのが最善です。

### ロールアウト計画を作成する

新しいモデルをデプロイする前に、ロールアウト計画を作成する必要があります。詳細については [Rollout Guide](model_rollout_guide.md#create-a-rollout-plan) を参照してください。

### フィーチャーフラグの背後で導入する {#introduce-behind-a-feature-flag}

direct-to-AIGW と indirect-through-GitLab-Rails のどちらのリクエストでも、どのモデルを使用するかの決定は最終的に GitLab Rails から来ます。新しいモデルを導入するときは、新しいモデルの有効化を切り替えるために [GitLab Rails で `beta` タイプのフィーチャーフラグを作成](https://docs.gitlab.com/ee/development/feature_flags/) する必要があります。このフィーチャーフラグには、付随する [ロールアウト issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md) が必要です。

### 顧客がオプトアウトできるようにする {#allow-customers-to-opt-out}

一部の顧客は、ロールアウトのタイムライン内に新しいモデルへ切り替えられない場合があります。新しいモデルへ切り替えるまでの時間を顧客により多く与えるために、オプトアウト機能を追加できます。これは `ops` フィーチャーフラグを導入することで実現できます。これは理想的には（*オプトイン* ではなく）*オプトアウト* フラグであるべきで、デフォルトでは常に `false` であるべきです。

フィーチャーフラグのアクターはケースバイケースで決定できますが、一般的には次のとおりです。

- GitLab SaaS では、フラグは、ユーザーに [GitLab Duo アドオン](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html) のシートを提供している *トップレベルグループ* に対してチェックされます。
- Self-Managed の GitLab インスタンスでは、フラグはインスタンスレベルでチェックできます。
