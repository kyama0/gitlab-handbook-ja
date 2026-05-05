---
title: "Developer Relations のワークフローとツール"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/
upstream_sha: 6b2970dac4d9078a5a79c285a6ee08817ecbd954
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## ワークフロー

<!-- Keep this incoming anchor for compatibility -->
<a id="community-response-workflows"></a>

### チームの目標

GitLab で目標がどのように設定・管理されているかについては、社内専用の[GitLab Operating Model](https://internal.gitlab.com/handbook/company/gitlab-operating-model/) ハンドブックページをご確認ください。Developer Relations の目標は、社内専用グループにおいて [`Owner::DevRel-Strategy` ラベル](https://gitlab.com/groups/gitlab-operating-model/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Owner%3A%3ADevRel-Strategy&type%5B%5D=epic&first_page_size=50) でラベル付けされています。

### チームのワークフロー

- [行動規範の執行](/handbook/marketing/developer-relations/workflows-tools/code-of-conduct-enforcement/)
- [チームの予算](/handbook/marketing/developer-relations/workflows-tools/team-budgets)
- [Developer Advocate コミュニティ対応プロセス](/handbook/marketing/developer-relations/developer-advocacy/community-response/)
- [コミュニティオペレーション: 自動化されたコミュニティプログラム](/handbook/marketing/developer-relations/programs/program-resources/#automated-application-workflow)
- [スワッグオペレーション](/handbook/marketing/developer-relations/workflows-tools/swag/)
- [コンテンツレビュー / Fix Fridays](/handbook/marketing/developer-relations/workflows-tools/content-review/)

### コミュニティプラットフォーム

- [Forum](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Discord](/handbook/marketing/developer-relations/workflows-tools/discord/)
- [Reddit](/handbook/marketing/developer-relations/workflows-tools/reddit/)
- [StackOverflow](/handbook/marketing/developer-relations/workflows-tools/stackoverflow/)

### インテグレーション

- [Zapier](/handbook/marketing/developer-relations/workflows-tools/zapier/)

### コミュニケーション

- [Email](/handbook/marketing/developer-relations/workflows-tools/e-mail/)
- [Twitter](/handbook/marketing/developer-relations/workflows-tools/twitter/)

## ツールスタック概要

これらは Developer Relations チームが DRI を務めるツールです。

<!-- TODO Phase 2 retranslate: upstream is now a markdown table here. See translation-state/phase2-retranslate.txt -->

### コミュニティオペレーションのツールスタック（非推奨）


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<i class="fas fa-hand-point-right" aria-hidden="true" style="color: rgb(138, 109, 59)
;"></i> この概要は現在非推奨化を進めており、手動で生成されたリストから `data/tech_stack.yml` ファイルから自動生成されるものへ移行中です。
代わりに[自動生成されるテーブル](#tool-stack-overview)をご利用ください。

</div>


<details>
<summary markdown="span">非推奨のテーブルを表示するにはクリック</summary>

これらは Developer Relations チームが DRI を務めるツールです。

| ツール名 | 説明                                                                                                                                             | 利用方法 |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Crowdin   | [Crowdin](https://translate.gitlab.com/) は、より広いコミュニティが GitLab の翻訳を共同で寄稿するためのプラットフォームです。                  | [Crowdin の利用方法](https://docs.gitlab.com/ee/development/i18n/translation.html) |
| Discourse | [Discourse](https://www.discourse.org) は、[GitLab フォーラム](https://forum.gitlab.com)が稼働しているプラットフォームです。                                    | [Discourse の利用方法](/handbook/marketing/developer-relations/workflows-tools/forum/#administration)|
| Discord   | [Discord](https://discord.gg/gitlab) は、GitLab.com 自体に加えて GitLab コミュニティが利用するインスタントメッセージングプラットフォームです。          | 人気のチャンネルは #contribute、#general、各種サポートチャンネルです。 |
| Proxi.id  | [Proxi.id](https://www.proxi.id/) は、コミュニティプログラムへの応募を自動的に審査するために使用するプラットフォームです。                               | |
| Zapier    | [Zapier](https://zapier.com) は、メンションを検出して Zendesk のチケットや、場合によっては Slack に振り分けるために使用される自動化ツールです。 | [Zapier の利用方法](/handbook/marketing/developer-relations/workflows-tools/zapier) |

</details>

### テックスタックへの追加待ちのツール

Developer Relations チームは以下のツールについても DRI を務めており、HelpLab の [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) プロセスを通じて Tech Stack への追加待ちです。

| ツール | 説明                                                                                                               | 利用方法 |
|---|---------------------------------------------------------------------------------------------------------------------------|---|
| Proxi.id | [Proxi.id](https://www.proxi.id/) は、コミュニティプログラムへの応募を自動的に審査するために使用するプラットフォームです。 | |

### 私たちが頼っているその他のツール

これらは一部のコミュニティプログラムにとって不可欠なツールですが、Developer Relations チームが DRI ではないものです。

| ツール名       | 説明                                                                                                                                                                                                                               | 利用方法                                                                                                                                                                                                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| カスタマーポータル | [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#customersdot) — 顧客がサブスクリプションやアカウント情報を管理し、GitLab ライセンスを生成・管理できる Web ポータル。 | コミュニティプログラム応募に関する Issue のトラブルシューティングを支援するため。コミュニティプログラム応募および [GitLab EE コントリビューター](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee)向けのライセンスを作成・管理するため。 |
| Marketo         | [Marketo](/handbook/marketing/marketing-operations/marketo/)                                                                                                                                                                              | 各プログラム（[Education](https://about.gitlab.com/solutions/education/)、[Open Source](https://about.gitlab.com/solutions/open-source/)、[Startups](https://about.gitlab.com/solutions/startups/)）のインテークフォームを動かしています。応募レコードを Salesforce に挿入するインテグレーションです。                                                |
| Printfection    | [Printfection](https://www.printfection.com/) は私たちのスワッグ管理プラットフォームです。                                                                                                                                                             | [Printfection の利用方法](/handbook/marketing/brand-and-product-marketing/brand/merchandise-handling)                                                                                                                                                                                                |
| Salesforce      | [Salesforce](https://www.salesforce.com) は私たちの [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management) です。                                                                                                                     | Salesforce (SFDC) を使って [Education プログラムと Open Source プログラムをサポート](/handbook/marketing/developer-relations/programs/)しています。                                                                                                     |
| Canva           | [Canva](https://www.canva.com/) は、GitLab ブランドのマテリアルを多数作成するために使うツールです。                                                                                                                                       | Community チームメンバーは `@gitlab.com` メールでアカウントを作成し、Design チームから Canva Enterprise への[アクセスをリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)してください。                                        |

### Developer Relations のツールスタックに新しいツールを追加する

1. 新しいツールを追加する場合は、HelpLab の [Tech Stack Update](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=7eee5c19ff25e6503691fe34fc4fd9ab) プロセスに従って通常通り調達プロセスを進めてください。
1. tech stack ファイルのエントリにある `group_owner` フィールドを `Developer Relations` に設定してください。これにより、そのツールが [Developer Relations のツールスタック](#tool-stack-overview)に自動的に掲載されるようになります。
