---
title: "Code Suggestions Model Rollout Guide"
description: "Code Suggestions 向けの新しい AI モデルをロールアウトするためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/model_rollout_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

このドキュメントは、Code Suggestions モデルをロールアウトするためのガイドとして機能します。

## ロールアウト計画の作成

[Rollout Plan Template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Code%20Suggestions%20Model%20Rollout%20Plan) を使用して Issue を作成します。これは、新しいモデルの実装の前または実装中に行う必要があります。異なる[ロールアウトフェーズ](#rollout-phases)ごとに、特定のロールアウト計画を作成する必要がある場合があります。

## ロールアウト方法

新しいモデルのロールアウトは、[`beta` フィーチャーフラグ](./implementation_guidelines.md#introduce-behind-a-feature-flag)を通じて行われます。

## ロールアウト前のチェックリスト

- [新しいモデルを追加する際の考慮事項](implementation_guidelines.md#considerations-when-adding-a-new-model)を確認したことを確認してください。
- モデルプロバイダーまたはホストが、AI Gateway 上のリクエスト量を処理できることを確認してください。

## ロールアウトフェーズ

新しいモデルのロールアウトは、通常 3 つのフェーズで行われます。

1. AI Coding のチームメンバーおよびその他の関心のあるステークホルダーへのロールアウト。
2. すべての GitLab チームメンバーへのロールアウト。
3. [任意] 選択した顧客を新しいモデルからオプトアウトする
4. すべてのユーザーへのロールアウト。

### AI Coding のチームメンバーおよびその他の関心のあるステークホルダーへのロールアウト

これは任意ですが、すべての GitLab チームメンバーにロールアウトする前に推奨されるステップです。AI Coding のチームメンバーや関心のあるステークホルダーは、現在使用されているモデルについてより詳しい知識を持っており、現在のモデルと比較したレイテンシや正確性について貴重なフィードバックを提供できます。

ロールアウトの前に、[内部フィードバック Issue](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md) が作成されていることを確認してください。すべてのフィードバックを内部フィードバック Issue に集約するようにしてください。

### すべての GitLab チームメンバーへのロールアウト

これは、すべてのユーザーにロールアウトする前に必須のステップです。GitLab チームメンバーによるドッグフーディングと、より大量のリクエストにより、次のことを判断するのに役立ちます。

- モデルのリクエストクォータを増やす必要があるか。
- モデルから来る補完に追加の後処理が必要か。
- バグ修正やその他の考慮事項についてモデルプロバイダーに連絡する必要があるか。

ロールアウトの前に、[内部ロールアウト](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_rollout.md)の Issue と[内部フィードバック](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md)の Issue が作成されていることを確認してください。すべてのフィードバックを内部フィードバック Issue に集約するようにしてください。

### [任意] 選択した顧客を新しいモデルからオプトアウトする

一部の顧客は、ロールアウトのタイムライン内に新しいモデルへ切り替えられない場合があります。[オプトアウト用のフィーチャーフラグ](./implementation_guidelines.md#allow-customers-to-opt-out)を実装することで、それらの顧客をオプトアウトできます。

理想的には、すべてのユーザーへロールアウトする_前に_、該当する顧客に対してこのオプトアウトを有効にすべきです。

### すべてのユーザーへのロールアウト

このステップは、モデルが広く使用できる状態になったときに実施します。すべてのユーザーへのロールアウトは、アクターの割合（推奨）で行うか、すべてのユーザーへ一度にロールアウトできます。

これは機能リリースとみなされるため、ローンチ前に適切なチャンネルを通じてリリースを適切に告知してください。
