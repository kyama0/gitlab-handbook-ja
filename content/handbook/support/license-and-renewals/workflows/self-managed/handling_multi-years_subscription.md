---
title: 複数年サブスクリプションの処理
description: "GitLab の複数年サブスクリプションを処理する方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/handling_multi-years_subscription/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
---

時折、顧客が複数年サブスクリプションを持っているケースに遭遇します。これは Sales 経由で購入されたサブスクリプションでのみ可能で、[CustomersDot](https://customers.gitlab.com) から複数年サブスクリプションを作成する手段はありません。

### 複数年サブスクリプションに関する問題

1. レガシーライセンスにおける複数年サブスクリプションは、**最初の 1 年分のみ**が自動的に生成されます。[クラウドライセンシング](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/)およびオフラインクラウドライセンシングの複数年サブスクリプションは、[サブスクリプション期間全体に対して生成](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4816)されます。詳細は [Licensing FAQ](https://about.gitlab.com/pricing/licensing-faq/#i-purchased-a-multi-year-subscription-why-is-my-license-only-for-1-year) を参照してください。

---

## ワークフロー

### 顧客のサブスクリプションを確認する

顧客が複数年サブスクリプションを持っているかを確認するには：

1. Salesforce に移動し、通常は `Close date` が直近過去の関連 Opportunity を探します。
1. その Opportunity をクリック → `quotes` を検索 → 最新の Quote をクリックします。
1. `Renewal Term` を検索すると、その Quote のサブスクリプション期間が月数で表示されます。

### リクエストの処理

確認後、適切な `Start date` と `End date` で[新しいライセンスを生成する](/handbook/support/license-and-renewals/workflows/self-managed/creating_licenses/)前に、ZenDesk の `Subscriptions::Active Users` マクロを使用して顧客のシステム情報を確認してください。

1. `Users over license` が *存在しない* 場合、新しいライセンスの生成に進みます。
   - **注意: 複数年サブスクリプションのライセンスは [12 ヶ月単位で発行されます](https://about.gitlab.com/pricing/licensing-faq/#i-purchased-a-multi-year-subscription-why-is-my-license-only-for-1-year)**
   - 該当する期間に合わせて日付を変更します。たとえば、複数年サブスクリプションの 2 年目の年次ライセンスは、元の開始日と有効期限にそれぞれ 1 年を追加します。
   - たとえば、`Start date: 2021-05-01`、`End date: 2022-05-01` であれば、それぞれ `2022-05-01`、`2023-05-01` になります。
   - これはトライアルではないため、Trial チェックボックスにはチェックを入れないでください！
   - 前年のライセンスの `Users count` を、新しいライセンスの `Previous Users Count` として使用します。
1. `Users over license` が *存在する* 場合、Quote にそれが含まれていることを確認します。そうでない場合は、[Working with sales workflow](/handbook/support/license-and-renewals/workflows/working_with_sales/) に従ってください。`Users over license` の支払いが完了し次第、新しいライセンスを生成できます。
