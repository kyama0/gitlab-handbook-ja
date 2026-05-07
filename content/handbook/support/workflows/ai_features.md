---
title: AIワークフロー
category: AI
description: "AI機能に関連するチケットのワークフロー"
upstream_path: /handbook/support/workflows/ai_features/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

## 概要

このワークフローは、お客様向けにリリースされたAI機能に関連するすべてのチケットを対象としています。

## ワークフロー

このプロセス段階において、サポートの対応範囲は、バグや機能拡張に関連するすべてのフィードバックを収集することです。
エラー、結果、期待される結果などの必要な情報を収集した後、サポートはこの情報を当該AI機能専用のフィードバックIssueに追加します。

## AI機能テーブル

この表は、エピック名または本番ドキュメントへのリンクと、使用すべきフィードバックIssueをまとめています。

| AI機能 | フィードバックIssue |
| ------ | ------ |
| [AI for Developer Teams: Suggested Reviewers](https://docs.gitlab.com/user/project/merge_requests/reviews/#suggested-reviewers) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/375624)    |
| [AI for Developer Teams: Code suggestions](https://docs.gitlab.com/user/project/repository/code_suggestions/) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/405152)       |
| [AI for Developer Teams: Summarize my MR review](https://gitlab.com/groups/gitlab-org/-/epics/10347) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408991) |
| [AI for Developer Teams: Summarize proposed MR Changes](https://gitlab.com/groups/gitlab-org/-/epics/10223) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408726) |
| [AI for Security and Operations: Explain this vulnerability](https://gitlab.com/groups/gitlab-org/-/epics/10284) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407295) |
|  [AI for Security and Operations: Explain this block of code in repository UI](https://gitlab.com/groups/gitlab-org/-/epics/10218) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407285#demo) |
| [AI for Security and Operations: Generate tests in MR](https://gitlab.com/groups/gitlab-org/-/epics/10366) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408995) |
| [AI for Everyone: Summarize Issue Comments](https://gitlab.com/groups/gitlab-org/-/epics/10344) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407779) |
| [AI for Everyone: GitLab Chat](https://gitlab.com/groups/gitlab-org/-/epics/10220) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408527)|
| [AI for Everyone: Fill in merge request descriptions with AI](https://gitlab.com/groups/gitlab-org/-/epics/10591) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/416537)|

## お客様が有効なGitLab Duo Proシートを保有しているかの確認方法

購入されたDuo Proシートは、PremiumまたはUltimateシートを含むお客様のメインサブスクリプションに **アドオン** として追加されます。

Self-ManagedとGitLab.comのいずれの場合も、お客様のアカウントに代理ログイン（impersonate）してサブスクリプションがDuo Proシートを保有しているかを確認するのが最も簡単な方法です。

1. <https://customers.gitlab.com/admin/customer> でお客様のメールドメインを使って検索し、CustomersDotアカウントを特定します。
1. `Subscription` ラベルが付いたCustomersDotアカウントに代理ログインし、**Duo Proシート**の詳細を確認します。

   - 注意: Duo Proアドオンシートの **開始日と終了日** を必ず確認してください。

その他の任意の方法は以下のとおりです。

- Self-Managedの場合、[Duo Proのシート数がライセンスページに表示される](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411) が実装されるまでは、以下の手順に従ってください。
  1. <https://customers.gitlab.com/admin/license> でお客様のメールドメインを使って検索し、CustomersDotアカウントを特定します。
  1. `i` アイコンをクリックして、ライセンス詳細ページに移動します。
  1. 下にスクロールして、`License Key` をコピーします。
  1. [Validate Licenseページ](https://customers.gitlab.com/admin/license/validate_license) に移動します。
  1. ライセンスキーを `License File` ボックスに貼り付けて、`Validate` をクリックします。
  1. `restrictions` キーの下にある `code_suggestions_seat_count` の値を確認します。0以外の値であれば、お客様はDuo Proシートを利用可能であるはずです。
  1. または、お客様にインスタンス内の [GitLab Duo Proページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlab-self-managed-1) をお願いして検証することもできます。
- GitLab.comの場合、[Duo Proのシート数がOrdersページに表示される](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411)
および [ユーザーがDuo Proシートを割り当てられているかをAdminページに表示する](https://gitlab.com/gitlab-org/gitlab/-/issues/457675) が実装されるまでは、以下の手順に従ってください。
  - GitLab.com の管理者アクセス権をお持ちの場合は、[Usage Quotasページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom) によってGitLabグループがDuo Proを保有しているかを確認します。

## お客様が有効なGitLab Duo Proトライアルを保有しているかの確認方法

お客様が [GitLab Duo Proトライアル開始の手順](https://docs.gitlab.com/subscriptions/gitlab_duo_trials/) に従ってトライアルを開始すると、デフォルトで最大50シートの60日間トライアルが付与されます。

### Self-Managed Duo Proトライアル

1. CustomersDotの [Self-Managed Duo Proトライアルページ](https://customers.gitlab.com/admin/trial) に移動します。
1. お客様のメールドメイン、会社名、またはサブスクリプションを使って検索します。
1. または、お客様にインスタンス内の [GitLab Duo Proページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-self-managed) をお願いして検証することもできます。
    - **注意**: Duo Proトライアルの **開始日と終了日** を必ず確認してください。

### GitLab.com Duo Proトライアル

すべてのGitLab.com Duo Proトライアルは、次のクエリで特定できます: <https://customers.gitlab.com/admin/order?query=saas-gitlab-duo-pro-trial-plan-id>

1. CustomersDotの [Ordersページ](https://customers.gitlab.com/admin/order) に移動します。
1. お客様の [Namespace ID](https://docs.gitlab.com/user/group/#get-the-group-id) を使って検索します。
1. プランが `saas-gitlab-duo-pro-trial-plan-id` の注文を特定します。
1. GitLab.com の管理者アクセス権をお持ちの場合は、[Usage Quotasページの確認](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom) によってGitLabグループがDuo Proを保有しているかを確認します。
   - **注意**: Duo Proの **開始日と終了日** を必ず確認してください。

### AIのトラブルシューティング

お客様向けの [トラブルシューティングドキュメント](https://docs.gitlab.com/user/project/repository/code_suggestions/troubleshooting/) もありますが、Kibanaの `pubsub-mlops-inf-gprd-*` インデックスでさらに詳しい情報を確認することもできます。検索には次のいずれかのキーワードを使用します。

- `json.jsonPayload.gitlab_host_name`、GitLab.comの値は `gitlab.com` です。
- `json.jsonPayload.url`、GitLab Code Suggestion の場合は `https://codesuggestions.gitlab.com/`、GitLab Duo chat の場合は `https://cloud.gitlab.com/v1/chat/agent` です。

トラブルシューティングを行う際は、必ず [該当する拡張機能](https://gitlab.com/gitlab-org/editor-extensions) のデバッグログを取得してください。

AIチームがサポートチームと連携する方法については、Editor Extensionsチームの Issue トラッカー <https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues> でお気軽に Issue を作成してください。
