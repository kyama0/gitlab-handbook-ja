---
title: Finance Systems アクセスリクエスト
description: Finance Systems アクセスリクエスト
upstream_path: /handbook/business-technology/enterprise-applications/entapps-crm/finsys-access-requests/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T06:00:00Z"
translator: claude
stale: false
---

## <i class="fas fa-book" id="biz-tech-icons"></i> アクセスリクエスト

プロビジョニングされる多くのファイナンスシステムは SOX システムとも見なされており、[SOX プログラム](https://internal.gitlab.com/handbook/internal-audit/sarbanes-oxley/)の対象となります。

ファイナンスシステム管理チームは、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を処理する際に追加の手順を踏みます。

これは以下のシステムに適用されます:

- Adaptive Insights
- Avalara
- Coupa
- Navan
- NetSuite
- Stripe
- Zuora Billing
- Zuora Revenue

### 追加手順

[GitLab アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)プロセスに加えて、チームは以下を実施します:

- リクエストされているアクセスが対象システムに固有のものであることを確認・明確化します。
  - 例: `NetSuite への読み取り専用アクセスが必要` という代わりに、チームはリクエスターに対して NetSuite の `Custom Auditor (read only)` ロールを求めているのかを確認します。
  - システム固有の要件については[こちら](/handbook/business-technology/enterprise-applications/finsys-access-requests/#-system-specific-access-request-requirements)のマトリクスを参照してください。
- [テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)に記載されている担当者に従って、リクエストされている正確なロールや権限についてビジネスオーナーの承認を求めます。これには[ベースライン権限](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/)も含まれます。
- 承認後、チームはシステム内でユーザーをプロビジョニングし、対応する Okta Google グループに追加します（必要な場合）。
- プロビジョニング後、チームはシステム内のタイムスタンプ付きユーザーレコードのスクリーンショットを撮影し、Issue に添付してクローズします。

**注:** [AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) に本番環境以外の環境が明示されていない限り、チームはリクエスターが本番環境のアクセスのみをリクエストしているものとして常に想定します。

### 完了の定義

- AR は FinSys の観点から、以下が揃っている場合のみ `Done` と見なされます:
  - 明確なシステム固有のロールと権限のリクエスト
  - マネージャーおよびビジネスオーナーの承認者
  - タイムスタンプ付きのプロビジョニング済みユーザーレコードのスクリーンショット

## システム固有のアクセスリクエスト要件

| システム | AR 要件 | 注意事項 |
|-------------------|----------------------------------------|-------------------|
| Adaptive Insights | AR には以下を明示的に記載すること: | James Shen（FP&A シニアディレクター）がすべての AI AR を承認する必要があります。 |
| | **権限セット（いずれか1つ）:** | AI はさまざまな「レベル」で設定されており、基本的に私たちの部門に対応しています。AI には多くの機密データが格納されているため、ほとんどのユーザーはすべてのレベルへのアクセス権を持つべきでは/持ちません。 |
| | - Administrative | |
| | - Analysis | |
| | - Editable Sheet Access Only | |
| | - IT Administrator | |
| | - Report Only | |
| | - Standard | |
| | **レベル:** | |
| | - 一覧として記載すること。 | |
| | - レベルには細心の注意を払うこと。Master Corporate または Corporate チェックボックスが選択されると、リクエスターはすべてのものへのアクセス権を持つことになります（意図していない可能性が高い）。 | |
| Avalara | AR にはリクエストするアクセスの**正確な**ロールを明記すること。 | ロールはカスタマイズできません。 |
| | **ロール:** | |
| | - Account administrator | |
| | - Company administrator | |
| | - Read-only account access | |
| | - Read-only company access | |
| | - No access | |
| Coupa | | 注: リクエスター/購買担当者は常に ***Custom User*** ロールのみ取得します。昇格されたアクセスには調達チームの承認が必要です。 |
| Navan | AR にはリクエストするアクセスの**正確な**ロールおよびポリシーを明記すること。 | Navan には多くのポリシーがあります。通常、チームが受け取る AR は Navan 管理者向けです。チームメンバーは自動的にプロビジョニングされます。 |
| | | ほとんどの AR はファイナンスシステム管理者向けであるため、通常はすべてのポリシーへのアクセスが必要で、その場合は AR にすべてのポリシーを列挙する必要はありません。 |
| NetSuite | AR では、ビジネスオーナーが AR を承認する前に、リクエストする NetSuite ロールを正確に明記すること。 | |
| Stripe | AR にはリクエストするアクセスの**正確な**ロールおよび Stripe アカウントを明記すること: | ロールはカスタマイズできません。 |
| | - about.gitlab | |
| | - Bizzabo | |
| | - GitHost | |
| | - Zoom | |
| | **ロール:** | |
| | - Administrator | |
| | - Analyst | |
| | - Developer | |
| | - Support Specialist | |
| | - View Only | |
| Zuora Billing | AR には各モジュールについてリクエストするロールを明記すること: | |
| | - Platform | |
| | - Billing | |
| | - Payments | |
| | - Finance | |
| | - Commerce | |
| | - Reporting | |
| Zuora Revenue | AR では、ビジネスオーナーが AR を承認する前に、リクエストする ZREV ロールを正確に明記すること。 | |
