---
title: "Developer Relations のワークフローとツール"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-05T12:56:31Z"
translator: claude
stale: false
lastmod: "2026-05-01T10:44:51-04:00"
---

## ワークフロー

<!-- Keep this incoming anchor for compatibility -->
<a id="community-response-workflows"></a>

### チームの目標

GitLab における目標の設定および管理方法の詳細については、社内限定の [GitLab Operating Model](https://internal.gitlab.com/handbook/company/gitlab-operating-model/) ハンドブックページをご確認ください。Developer Relations の目標は、社内限定グループ内で [`Owner::DevRel-Strategy` ラベル](https://gitlab.com/groups/gitlab-operating-model/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Owner%3A%3ADevRel-Strategy&type%5B%5D=epic&first_page_size=50) によって示されています。

### チームのワークフロー

- [行動規範の運用](/handbook/marketing/developer-relations/workflows-tools/code-of-conduct-enforcement/)
- [チーム予算](/handbook/marketing/developer-relations/workflows-tools/team-budgets)
- [Developer Advocate のコミュニティ対応プロセス](/handbook/marketing/developer-relations/developer-advocacy/community-response/)
- [Community Operations: コミュニティプログラムの自動化](/handbook/marketing/developer-relations/programs/program-resources/#automated-application-workflow)
- [Swag オペレーション](/handbook/marketing/developer-relations/workflows-tools/swag/)
- [コンテンツレビュー / Fix Fridays](/handbook/marketing/developer-relations/workflows-tools/content-review/)

### コミュニティプラットフォーム

- [Forum](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Discord](/handbook/marketing/developer-relations/workflows-tools/discord/)
- [Reddit](/handbook/marketing/developer-relations/workflows-tools/reddit/)
- [StackOverflow](/handbook/marketing/developer-relations/workflows-tools/stackoverflow/)

### 自動化

- [Workato](/handbook/marketing/developer-relations/workflows-tools/workato/)

### コミュニケーション

- [Email](/handbook/marketing/developer-relations/workflows-tools/e-mail/)
- [Twitter](/handbook/marketing/developer-relations/workflows-tools/twitter/)

### Tech Stack への追加待ちのツール

Developer Relations チームは、HelpLab の [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) プロセスを通じて Tech Stack への追加を待っている以下のツールについても DRI を担っています:

| ツール | 説明 | 用途 |
|---|---|---|
| Proxi.id | [Proxi.id](https://www.proxi.id/) は、コミュニティプログラムへの応募を自動的に審査するために利用しているプラットフォームです | |

### その他に依存しているツール

以下は、一部のコミュニティプログラムにとって不可欠なツールですが、Developer Relations チームが DRI ではないものです:

| ツール名 | 説明 | 用途 |
|---|---|---|
| Customer Portal | [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#customersdot) - 顧客がサブスクリプションやアカウント情報を管理し、GitLab ライセンスを発行・管理できる Web ポータルです。 | コミュニティプログラム応募に関する問題のトラブルシューティングに利用します。コミュニティプログラム応募者および [GitLab EE コントリビューター](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) 向けのライセンス発行・管理にも使用します。 |
| Marketo | [Marketo](/handbook/marketing/marketing-operations/marketo/) | 各プログラム（[Education](https://about.gitlab.com/solutions/education/)、[Open Source](https://about.gitlab.com/solutions/open-source/)、[Startups](https://about.gitlab.com/solutions/startups/)）の応募フォームを支えています。応募レコードを Salesforce に挿入する連携機能です。 |
| Printfection | [Printfection](https://www.printfection.com/) は、私たちが利用している Swag 管理プラットフォームです | [Printfection の利用方法](/handbook/marketing/brand-and-product-marketing/brand/merchandise-handling) |
| Salesforce | [Salesforce](https://www.salesforce.com) は私たちの [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management) です | Salesforce (SFDC) を [Education プログラムおよび Open Source プログラムの支援](/handbook/marketing/developer-relations/programs/) に利用しています |
| Canva | [Canva](https://www.canva.com/) は、GitLab ブランドのマテリアルを多数作成する際に利用しているツールです。 | コミュニティチームメンバーは `@gitlab.com` のメールアドレスでアカウントを作成し、Design チームに [Canva Enterprise へのアクセスを申請](/handbook/security/corporate/end-user-services/access-requests/access-requests/) してください。 |

### Developer Relations のツールスタックへの新規ツール追加

1. 新しいツールを追加する際は、HelpLab の [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) プロセスを通じて、通常の調達プロセスに従ってください。
