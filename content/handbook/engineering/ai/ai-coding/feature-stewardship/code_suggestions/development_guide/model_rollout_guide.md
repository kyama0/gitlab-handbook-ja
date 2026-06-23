---
title: "Code Suggestions モデルロールアウトガイド"
description: "Code Suggestions 向けの新しい AI モデルをロールアウトするためのガイドライン"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/code_suggestions/development_guide/model_rollout_guide/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:24:31.0151723+09:00"
translator: codex
stale: false
---

このドキュメントは、Code Suggestions モデルをロールアウトするためのガイドです。

## ロールアウト計画の作成

[ロールアウト計画テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Code%20Suggestions%20Model%20Rollout%20Plan)を使って Issue を作成してください。
これは新しいモデルの実装の前または実装中に行う必要があります。
[ロールアウトフェーズ](#rollout-phases)ごとに個別のロールアウト計画を作成する必要がある場合があります。

## ロールアウト方式

新しいモデルのロールアウトは、[`beta` フィーチャーフラグ](./implementation_guidelines.md#introduce-behind-a-feature-flag)を通じて行われます。

## ロールアウト前のチェックリスト

- [新しいモデルを追加する際の考慮事項](implementation_guidelines.md#considerations-when-adding-a-new-model)を確認したことを確認してください。
- モデルプロバイダーまたはホストが AI Gateway 上のリクエスト量を処理できることを確認してください。

## ロールアウトフェーズ {#rollout-phases}

新しいモデルのロールアウトは通常、3 つのフェーズで行われます。

1. AI Coding チームメンバーおよびその他の関心のあるステークホルダーへのロールアウト。
2. すべての GitLab チームメンバーへのロールアウト。
3. [オプション] 選択された顧客を新しいモデルからオプトアウトする
4. すべてのユーザーへのロールアウト。

### AI Coding チームメンバーおよびその他の関心のあるステークホルダーへのロールアウト

これは、すべての GitLab チームメンバーへのロールアウト前のオプションですが推奨されるステップです。AI Coding チームメンバーや関心のあるステークホルダーは、現在使用されているモデルについてより多くの知識を持っており、現在のモデルと比較したレイテンシや正確性に関する貴重なフィードバックを提供できます。

ロールアウト前に、[内部フィードバック Issue](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md) が作成されていることを確認してください。すべてのフィードバックを内部フィードバック Issue に向けるようにしてください。

### すべての GitLab チームメンバーへのロールアウト

これは、すべてのユーザーへのロールアウト前の必須ステップです。GitLab チームメンバーによるドッグフーディングと、それに伴うより多くのリクエスト量により、以下を判断するのに役立ちます。

- モデルのリクエストクォータを増やす必要があるかどうか。
- モデルからの補完に対して追加の後処理が必要かどうか。
- バグ修正やその他の考慮事項についてモデルプロバイダーに連絡する必要があるかどうか。

ロールアウト前に、
[内部ロールアウト](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_rollout.md)
および[内部フィードバック](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md)
の Issue が作成されていることを確認してください。すべてのフィードバックを内部フィードバック Issue に向けるようにしてください。

### [オプション] 選択された顧客を新しいモデルからオプトアウトする

ロールアウトのタイムライン内で新しいモデルに切り替えることができない顧客もいるかもしれません。[オプトアウトフィーチャーフラグ](./implementation_guidelines.md#allow-customers-to-opt-out)を実装することで、彼らをオプトアウトできます。

理想的には、すべてのユーザーへのロールアウト _前_ に、関連する顧客に対してこのオプトアウトを有効にすべきです。

### すべてのユーザーへのロールアウト

このステップは、モデルが広範な利用に向けて準備が整ったときに行います。すべてのユーザーへのロールアウトは、アクター（actor）の割合で行うことができます（推奨）し、または一度にすべてのユーザーへロールアウトすることもできます。

これは機能リリースとみなされるため、ローンチ前に適切なチャンネルを通じてリリースの適切な発表を行うようにしてください。
