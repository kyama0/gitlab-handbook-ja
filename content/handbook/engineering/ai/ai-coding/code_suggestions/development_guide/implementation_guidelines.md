---
title: "Code Suggestions 実装ガイドライン"
description: "Code Suggestions に新しい AI モデルを実装するためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/code_suggestions/development_guide/implementation_guidelines/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

これらは、**[AI Gateway (AIGW)](#ai-gateway)** および/または **[GitLab Rails](#gitlab-rails)** で Code Suggestions のためのモデルをサポートするためのガイドラインです。

## 概要

Code Suggestion リクエストは、**AI Gateway へ直接** または **GitLab Rails 経由で間接的に** ルーティングできます。

- **AIGW への直接** リクエストの場合、IDE は [Direct Connections API エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information) を介して GitLab Rails からモデルの詳細を取得します。
IDE はその後、GitLab Rails から取得したモデルの詳細を使用して AIGW にリクエストを送信します。
- **GitLab Rails 経由の間接的な** リクエストの場合、IDE は GitLab Rails の [Code Completions API エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions) にリクエストを送信します。
GitLab Rails は次に AIGW にリクエストを送信します。

Code Completions と Code Generations、AIGW への直接リクエストと GitLab Rails 経由の間接リクエストのより詳細な概要については、[Code Suggestions 技術概要](../engineering_overview.md#code-suggestions-technical-overview) と [Code Completion](../engineering_overview.md#code-completion) ガイドを参照してください。

## AI Gateway

[AI Gateway リポジトリ](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)。

ここで AI モデルへのリクエストが実装されています。
AIGW は、AI モデルと GitLab の他のシステムの間のハブとして機能します。

すべての GitLab ユーザーに一般提供することなく、AIGW に新しいモデルを導入できます。
たとえば、レイテンシテスト用に新しいモデルを導入できます。新しいモデルが GitLab ユーザーに利用可能になるのは、[GitLab Rails](#gitlab-rails) を介して有効化されたときのみです。

### AIGW API エンドポイント

Code Completions と Code Generations のリクエストは、異なる Code Suggestions API エンドポイントを介して AI Gateway に送信されます。AIGW の Code Suggestions API の詳細については、[Code Suggestions API ドキュメント](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/api.md#code-suggestions) を参照してください。本番およびステージングに直接 `curl` を送信する方法の詳細については、[内部ドキュメント](https://internal.gitlab.com/handbook/product/ai-strategy/code-suggestions/testing_code_suggestions_aigw_api/) を参照してください。

### 新しいモデルを追加する際の考慮事項

- モデルへのリクエストで **stop tokens** を指定したことを確認してください。([MR の例](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1298) を参照。)
- モデルとユースケースに応じて、リクエストに **追加のコンテキストを含める** 必要がある場合があります。これには、プロジェクトライブラリなどの開いているファイルの内容を追加することが含まれます。
- ほとんどのモデルでは、空白のトリミングやコメントの削除などの **後処理** が必要です。既存の post-processor を使用するか ([MR の例](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1351/))、必要に応じて新しいものを追加できます ([MR の例](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1470))。

## GitLab Rails

[GitLab Rails リポジトリ](https://gitlab.com/gitlab-org/gitlab/)。

GitLab Rails は AI モデルにリクエストを直接送信 _しません_。AIGW にリクエストを送信し、AIGW が AI モデルにリクエストを送信します。

GitLab Rails は、Code Completions または Code Generations にどのモデルを使用するかについての唯一の信頼できる情報源です。[機能フラグ](#introduce-behind-a-feature-flag) を介して現在のモデルを切り替えます。

AIGW への直接リクエストの場合、GitLab Rails は Direct Access エンドポイントを介してモデルの詳細を指定します。
GitLab Rails 経由の間接リクエストの場合、GitLab Rails は AIGW へのリクエストのペイロードにモデルの詳細を含めます。

### GitLab Rails API エンドポイント

- [Direct Access エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information) -
AIGW への直接リクエストの場合、このエンドポイントは AIGW にリクエストを送信するために必要な情報を提供します
- [Code Suggestions エンドポイント](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions) -
これは GitLab Rails 経由の間接リクエストに使用されるエンドポイントです

## モデルをサポートするための一般的なガイドライン

これらは、Code Suggestions のモデルをサポートする準備ができているとき (たとえば、評価を行いモデルを許容できると判断した後) のガイドラインです。

### エピックを作成する

モデルの導入は通常、複数のタスクにまたがるため、この作業のためにエピックまたはサブエピックを作成するのが最適です。

### ロールアウト計画を作成する

新しいモデルをデプロイする前に、ロールアウト計画を作成する必要があります。
詳細については、[Rollout Guide](model_rollout_guide.md#create-a-rollout-plan) を参照してください。

### 機能フラグの背後に導入する {#introduce-behind-a-feature-flag}

AIGW への直接リクエストと GitLab Rails 経由の間接リクエストの両方について、どのモデルを使用するかの決定は最終的に GitLab Rails から来ます。新しいモデルを導入する際は、新しいモデルの有効化を切り替えるために
[GitLab Rails で `beta` タイプの機能フラグを作成](https://docs.gitlab.com/ee/development/feature_flags/) する必要があります。この機能フラグには、対応する
[ロールアウト Issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md) が必要です。

### 顧客がオプトアウトできるようにする

一部の顧客は、ロールアウトのタイムライン内で新しいモデルに切り替えることができない場合があります。
新しいモデルに切り替える前に顧客により多くの時間を与えるために、オプトアウト機能を追加できます。
これは `ops` 機能フラグを導入することで行うことができます。
これは理想的には _opt-out_ フラグ (_opt-in_ ではなく) であるべきで、デフォルトで常に `false` であるべきです。

機能フラグのアクターはケースバイケースで決定できますが、一般的には:

- GitLab SaaS では、フラグはユーザーに [GitLab Duo Add-on](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html) シートを提供している _トップレベルグループ_ に対してチェックされます。
- Self-Managed の GitLab インスタンスでは、フラグはインスタンスレベルでチェックできます。
