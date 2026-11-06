---
title: AI ワークフロー
category: AI
description: "AI 機能に関連するチケットのワークフロー"
upstream_path: /handbook/support/workflows/ai_features/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
translated_at: "2026-11-06T21:04:26.963167+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T16:04:58-05:00"
---

## 概要 {#overview}

このワークフローは、お客様向けにリリースされた AI 機能に関連するすべてのチケットを対象としています。

## ワークフロー {#workflow}

このプロセス段階において、サポートの対応範囲は、バグや機能拡張に関連するすべてのフィードバックを収集することです。
エラー、結果、期待される結果などの必要な情報を収集した後、サポートはこの情報を当該 AI 機能専用のフィードバック Issue に追加します。

## AI 機能テーブル {#ai-features-table}

この表は、エピック名または本番ドキュメントへのリンクと、使用すべきフィードバック Issue をまとめています。

| AI 機能 | フィードバック Issue |
| ------ | ------ |
| [開発チーム向け AI：レビュー担当者の提案](https://docs.gitlab.com/user/project/merge_requests/reviews/#suggested-reviewers) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/375624)    |
| [開発チーム向け AI：Code Suggestions](https://docs.gitlab.com/user/project/repository/code_suggestions/) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/405152)       |
| [開発チーム向け AI：自分の MR レビューの要約](https://gitlab.com/groups/gitlab-org/-/epics/10347) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408991) |
| [開発チーム向け AI：提案された MR の変更の要約](https://gitlab.com/groups/gitlab-org/-/epics/10223) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408726) |
| [セキュリティおよび運用向け AI：この脆弱性の説明](https://gitlab.com/groups/gitlab-org/-/epics/10284) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407295) |
|  [セキュリティおよび運用向け AI：リポジトリ UI のこのコードブロックの説明](https://gitlab.com/groups/gitlab-org/-/epics/10218) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407285#demo) |
| [セキュリティおよび運用向け AI：MR でのテストの生成](https://gitlab.com/groups/gitlab-org/-/epics/10366) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408995) |
| [すべての人向け AI：Issue コメントの要約](https://gitlab.com/groups/gitlab-org/-/epics/10344) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407779) |
| [すべての人向け AI：GitLab Chat](https://gitlab.com/groups/gitlab-org/-/epics/10220) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408527)|
| [すべての人向け AI：AI によるマージリクエストの説明の入力](https://gitlab.com/groups/gitlab-org/-/epics/10591) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/416537)|

## お客様が有効な GitLab Duo Pro シートを保有しているかの確認方法 {#how-to-check-if-a-customer-has-valid-gitlab-duo-pro-seats}

購入された Duo Pro シートは、Premium または Ultimate シートを含むお客様のメインサブスクリプションに **アドオン** として追加されます。

Self-Managed と GitLab.com のいずれの場合も、お客様のアカウントに代理ログイン（impersonate）してサブスクリプションが Duo Pro シートを保有しているかを確認するのが最も簡単な方法です。

1. https://customers.gitlab.com/admin/customer でお客様のメールドメインを使って検索し、CustomersDot アカウントを特定します。
1. `Subscription` ラベルが付いた CustomersDot アカウントに代理ログインし、**Duo Pro シート**の詳細を確認します。

   - 注意: Duo Pro アドオンシートの **開始日と終了日** を必ず確認してください。

その他の任意の方法は以下のとおりです。

- Self-Managed の場合、[Duo Pro のシート数がライセンスページに表示される](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411) が実装されるまでは、以下の手順に従ってください。
  1. https://customers.gitlab.com/admin/license でお客様のメールドメインを使って検索し、CustomersDot アカウントを特定します。
  1. `i` アイコンをクリックして、ライセンス詳細ページに移動します。
  1. 下にスクロールして、`License Key` をコピーします。
  1. [Validate License ページ](https://customers.gitlab.com/admin/license/validate_license) に移動します。
  1. ライセンスキーを `License File` ボックスに貼り付けて、`Validate` をクリックします。
  1. `restrictions` キーの下にある `code_suggestions_seat_count` の値を確認します。0 以外の値であれば、お客様は Duo Pro シートを利用可能であるはずです。
  1. または、お客様にインスタンス内の [GitLab Duo Pro ページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlab-self-managed-1) をお願いして検証することもできます。
- GitLab.com の場合、[Duo Pro のシート数が Orders ページに表示される](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411)
および [ユーザーが Duo Pro シートを割り当てられているかを Admin ページに表示する](https://gitlab.com/gitlab-org/gitlab/-/issues/457675) が実装されるまでは、以下の手順に従ってください。
  - GitLab.com の管理者アクセス権をお持ちの場合は、[Usage Quotas ページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom) によって GitLab グループが Duo Pro を保有しているかを確認します。

## お客様が有効な GitLab Duo Pro トライアルを保有しているかの確認方法 {#how-to-check-if-a-customer-has-a-valid-gitlab-duo-pro-trial}

お客様が [GitLab Duo Pro トライアル開始の手順](https://docs.gitlab.com/subscriptions/gitlab_duo_trials/) に従ってトライアルを開始すると、デフォルトで最大 50 シートの 60 日間トライアルが付与されます。

### Self-Managed Duo Pro トライアル {#self-managed-duo-pro-trials}

1. CustomersDot の [Self-Managed Duo Pro トライアルページ](https://customers.gitlab.com/admin/trial) に移動します。
1. お客様のメールドメイン、会社名、またはサブスクリプションを使って検索します。
1. または、お客様にインスタンス内の [GitLab Duo Pro ページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-self-managed) をお願いして検証することもできます。
    - **注意**: Duo Pro トライアルの **開始日と終了日** を必ず確認してください。

### GitLab.com Duo Pro トライアル {#gitlabcom-duo-pro-trials}

すべての GitLab.com Duo Pro トライアルは、次のクエリで特定できます: https://customers.gitlab.com/admin/order?query=saas-gitlab-duo-pro-trial-plan-id

1. CustomersDot の [Orders ページ](https://customers.gitlab.com/admin/order) に移動します。
1. お客様の [Namespace ID](https://docs.gitlab.com/user/group/#find-the-group-id) を使って検索します。
1. プランが `saas-gitlab-duo-pro-trial-plan-id` の注文を特定します。
1. GitLab.com の管理者アクセス権をお持ちの場合は、[Usage Quotas ページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom) によって GitLab グループが Duo Pro を保有しているかを確認します。
   - **注意**: Duo Pro の **開始日と終了日** を必ず確認してください。

### AI のトラブルシューティング {#troubleshooting-ai}

お客様向けの [トラブルシューティングドキュメント](https://docs.gitlab.com/user/project/repository/code_suggestions/troubleshooting/) もありますが、Kibana の `pubsub-mlops-inf-gprd-*` インデックスでさらに詳しい情報を確認することもできます。検索には次のいずれかのキーワードを使用します。

- `json.jsonPayload.gitlab_host_name`、GitLab.com の値は `gitlab.com` です。
- `json.jsonPayload.url`、GitLab Code Suggestion の場合は `https://codesuggestions.gitlab.com/`、GitLab Duo chat の場合は `https://cloud.gitlab.com/v1/chat/agent` です。

トラブルシューティングを行う際は、必ず [該当する拡張機能](https://gitlab.com/gitlab-org/editor-extensions) のデバッグログを取得してください。

AI チームがサポートチームと連携する方法については、Editor Extensions チームの Issue トラッカー https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues でお気軽に Issue を作成してください。
