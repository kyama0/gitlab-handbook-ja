---
title: お客様向けプロジェクトエクスポート
description: "GitLab チームメンバーがお客様に代わってプロジェクトのエクスポートを提案する場面と、その手順について案内します。"
category: GitLab.com
upstream_path: /handbook/support/workflows/exporting_projects/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-12-20T00:01:10+00:00"
---

## プロジェクトエクスポート

お客様がプロジェクトのエクスポートで問題を抱えている場合は、通常通り次の手順を含めてトラブルシューティングを行います。

1. UI と API の両方を試すようユーザーに依頼する。
1. ログを検索するために必要な情報を集める。コツについては [Kibana エクスポートエラー](/handbook/support/workflows/kibana/#export-errors) セクションを参照してください。
1. 関連する Issue を見つけてコメントするか、必要に応じて Kibana/Sentry のリンクを添えて新規作成する。

Issue が作成または既存のものへコメントされたら、[`Support::SaaS::Gitlab.com::Export::Offer one time` マクロ](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Offer%20one%20time.md?ref_type=heads) を使って一回限りのエクスポートを提案できます。

お客様が提案を受け入れた場合、エクスポート自体は成功した（メールが届いた、または「Download export」ボタンが出ている）にもかかわらず、ダウンロード時にエラーが発生していますか？例: [gitlab#330833](https://gitlab.com/gitlab-org/gitlab/-/issues/330833)。

1. はいの場合、[インフラエクスポートリクエスト](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/new?issuable_template=Project%20Export.md) を開き、関連情報をすべて記入します。これによりサポートコンソールでの試行をスキップできます。プロジェクトエクスポートから 30 日以内に実施可能です。
1. いいえ（または不明）の場合、[内部リクエストトラッカーでエクスポートリクエストを開きます](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/new?issuable_template=GitLab.com%20Console%20Export%20Request)。
1. **インフラエクスポートリクエストが開かれた** 際にはいつでも、関連する GitLab バグ Issue に「infradev」ラベルが追加されていることを確認してください。

利便性のため、エクスポート試行後に使える追加マクロが 2 つ用意されています。

- [`Support::SaaS::Gitlab.com::Export::Completed - Successful`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Complete%20-%20Successful.md?ref_type=heads)
- [`Support::SaaS::Gitlab.com::Export::Completed - Failed`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Export/Complete%20-%20Failed.md?ref_type=heads)
