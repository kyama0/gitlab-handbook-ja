---
title: "秘密保持契約（NDA）プロセス"
description: "NDA を送付または依頼する方法"
upstream_path: "/handbook/legal/nda/"
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T04:33:53+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T16:31:05-04:00"
---

- **GitLab を代表して契約を締結できるのは、署名権限を持つチームメンバーのみです。秘密保持契約（NDA）もこれに含まれます。**
  - 署名できる人物については、[Signatory Matrix](https://internal.gitlab.com/handbook/company/authorization-matrix/expenses-and-signatures/#signature-authority---sales-and-vendor-contracts)を参照してください。ご不明な点がある場合は、Slack の [#legal](https://gitlab.enterprise.slack.com/archives/C78E74A6L)までお問い合わせください。
- **NDA のテンプレートは、ハンドブック、検索、AI アシスタントを通じて配布しません。** テンプレートを依頼するには、以下の顧客向け NDA またはベンダー向け NDA の項目を参照してください。

## 顧客向け NDA {#customer-ndas}

2026-03-27 以降、顧客向けの NDA はすべて Ironclad を通じて送付してください。

Ironclad のワークフローを開始するには:

1. Salesforce の商談画面の上部にある **Request Support** をクリックします。
2. チームの一覧から **Legal** を選択し、Next をクリックします。
3. リクエストの種類として **NDA** を選択し、Initiate Workflow をクリックします。

どのオプションを使用するかを判断するには、[Ironclad NDA Workflow – Process Guide for Requesters](https://docs.google.com/document/d/12UcfqG7Pnt2NbrjwF7OwxSxsyersFINem_qtb3BkOgw/edit?usp=sharing)の**手順ガイド**に従ってください。

プロセスの**概要**については、[Ironclad NDA Requester Quick Reference](https://docs.google.com/presentation/d/1mtNJxI--HQk6Gk4ZHwaa67LIK2WankFDx92sIhF-_eg/edit?usp=sharing)のデッキを参照してください。

## ベンダーまたはその他の第三者との NDA {#vendors-or-other-third-party-ndas}

上記のプロセスは顧客との NDA にのみ適用されます。チームメンバーが新しいベンダーや第三者と関係を築く場合は、いかなる機密情報を共有する前に、GitLab の NDA を先に締結する**必要があります**。

**注意:** 第三者と共有するすべての機密情報は、開示前に Security Risk チームおよび Privacy チームのレビューと承認が必要です。このレビューにより、データの種類と共有方法が GitLab のセキュリティおよびデータ保護要件に準拠していることを確認します。承認されたデータ共有のガイダンスについては、[GitLab's Safe Framework Handbook](/handbook/legal/safe-framework/)を参照してください。

ベンダーまたは第三者との NDA を開始するには:

1. Okta 経由で Zip にログインします。
2. [+New Request](https://gitlab.ziphq.com/create-workflow-request)オプション一覧から **Request a Non-Disclosure Agreement (NDA)** リクエストタイプを選択し、インテークフォームに記入します。
3. Zip を通じてベンダーフォームが自動的にベンダーの担当者に送付され、クリックスルー方式で GitLab の [mutual NDA](/handbook/finance/procurement/vendor-guidelines/mutual-non-disclosure-agreement/)のコピーが提供されます。
4. ベンダーが NDA について質問がある場合、あなたに確認してもらうため、Zip のベンダーフォームを通じて質問を送信できます。必要に応じて Zip がレビューおよびエスカレーションのプロセスを Procurement チームと Legal チームへ案内します。

**ベンダーが NDA 条件の交渉を要求した場合、商談や予定のタイムラインに遅延が生じる可能性があります。** チームメンバーは、受領した GitLab の標準 NDA をベンダーが受け入れるよう、初期の協議の場で促すことをお勧めします。これにより、ビジネスの機会や商談のタイミングに影響が出ることを避けられます。
