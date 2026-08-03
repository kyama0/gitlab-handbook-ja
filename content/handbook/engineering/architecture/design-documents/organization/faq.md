---
title: "Organization: よくある質問"
owning-stage: "~devops::tenant scale"
group: Tenant Scale
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/faq/
upstream_sha: 30048133aad0232ed4d59fa0c80643620c85adb3
translated_at: "2026-08-04T06:12:43+09:00"
translator: claude
stale: false
lastmod: "2026-08-03T15:47:52+08:00"
---

## 大規模な SaaS 顧客は Organization レベルでライセンスを取得することが想定されますか？

はい。現時点では請求は Organization レベルに移行します。[Organization と請求](billing.md) の更新を継続します。

## セルフマネージドと Dedicated は複数の Organization を許可しますか？

はい、おそらくそうなります。最初は GitLab.com に集中しますが、他のプラットフォームでも複数の Organization への需要があることは理解しており、最終的にはこの機能をロールアウトする予定です。

## Organization はセルフマネージドにどのような影響を与えますか？

セルフマネージドは比較的変わりません。Organization は他のプラットフォームと同様にセルフマネージドにも公開され、機能は Organization レベルに上下に移動する可能性があります。

最終的には、すべてのプラットフォームで複数の Organization を運用する機能を提供することを期待しています。

私たちの目標は、GitLab.com を他のプラットフォームと同等にしながら、セルフマネージドと Dedicated への混乱を最小限に抑えることです。

長期的には、Organization をすべてのプラットフォームにわたる共通のトップレベルエンティティとして持つことで、より高速な機能開発が可能になると予想しています。

## ユーザーは複数の Organization のメンバーになれますか？

はい。ただし、それらの Organization が非隔離である場合に限ります。所有権（`organization_id`）は常に 1 つの Organization だけを指しますが、メンバーシップがその Organization に限定されるのは、Organization が隔離された後だけです（[ユーザーのホーム Organization](users.md#the-users-home-organization)を参照）。それまでは、同じアカウントで任意の数の非隔離 Organization のメンバーになれます。モデル全体については[リクエストコンテキスト](contexts.md)を参照してください。特定の Organization に隔離機能が提供された後は、単一の隔離された Organization のメンバーになることが長期的な目標です。

## Organization に代替の GitLab ドメイン名（`customer.gitlab.com` など）を設定できるようになることが想定されますか？

現時点では、代替の GitLab ドメイン名の設定を許可する計画はありません。
現時点では GitLab Dedicated の方がはるかに適しています。

## Organization には独自の公開設定（パブリック/プライベート）があることが想定されますか？

公開設定はメインの [Organization ページ](_index.md#visibility) に記載されています。

## トップレベルグループから Organization への機能の移行はどのようなものになりますか？

後日、詳細情報を提供します。Organization 機能がリリースされるまでは、機能を完全に Organization レベルで構築することはできません。

ただし、Organization データの隔離のために、トップレベルグループのデータは Organization にリンクされている必要があります。

## GitLab.com にはいくつの Cell と Organization が存在すると予想されますか？

現時点では、存在する Organization や Cell の数を大まかに見積もることしかできません。

Cell はマルチテナントであり、多くの Organization が 1 つの Cell に所属するため、Cell よりも Organization の数が多くなることは避けられません。

Cell をまたいで数千の Organization が存在する可能性があります。
トップレベルグループのほとんどが独自の Organization に変換される場合、数百万の Organization になる可能性さえあります。

また、数百から数千の Cell が存在する可能性もあります。

ただし、最初は本番環境での顧客データによる運用経験を積み、どれだけスケールするかを判断しながら進めるため、それぞれの数ははるかに少なくなります。
