---
title: "セールス戦略プロジェクト"
description: "GitLab のセールス戦略チームの手法と目標を紹介します"
upstream_path: /handbook/sales/field-operations/sales-strategy/projects/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

セールス戦略チームは、アナリティクス、GTM、フィールドプランニングの領域で複数のプロジェクトに関与しています。

---

## Fortune Rank to SFDC

[Sales Handbook Definitions Doc を参照してください](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#bookmark=id.vkhb6a9ugrkh)

## Forbes 2000 to SFDC

[Sales Handbook Definitions Doc を参照してください](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#bookmark=id.hlidqemi1m03)

## Potential LAM

このプレースホルダーは、プロジェクトの完了後に更新されます。

## Rosetta Stone

Rosetta Stone プロジェクトの目的は、セグメント、Geo、リージョン、エリア別にクリーンで標準化されたレポートを整備し、全社的なメトリクスを多角的に分析できるようにすることです。このプロジェクトは、セールス戦略、Sales Ops、Sales Systems、Finance、Marketing、Data チームなど、GitLab 全体の多数のチームを横断するコラボレーションによる取り組みです。

### 背景

FY22 以前、セールスマネージャーは商談クローズ時点で *アカウント* を所有していた者に基づいて報酬を支給されていました。そのため、社内のトップレベルのセールスチーム別ビジネスレポートは、Salesforce の Opportunity オブジェクト上の [account_owner_team スタンプフィールド](https://gitlab.my.salesforce.com/00N6100000ICas4?setupid=OpportunityFields) に基づいていました。しかし、特定のレポートで使用される他にもさまざまな Salesforce フィールドがあり、レポート間で混乱や不一致が多く発生していました。過去のレポートに関する詳細は、[このスライドデッキ](https://docs.google.com/presentation/d/1c3vu8K5U2q8hZKlTB3vkFCl1cimOn0KRMH-RLinjLc0/edit#slide=id.gb7e12c6784_0_40) を参照してください。

FY22 から、報酬プランを変更しました。営業担当者とマネージャーの両方に対して、クローズ時点で *商談* を所有している者に基づいて報酬を支払うようにしました。この変更に伴い、レポートもアカウント所有ベースから商談所有ベースに変更する必要がありました。こうして Rosetta Stone プロジェクトが立ち上がり、商談所有に基づく正しいレポートを構築するだけでなく、レポートで使用される Salesforce フィールドを整理して、誰もが同じ正しい答えを簡単に取得できるようにすることが目標となりました。

### セールスチーム別レポート用の主要 Salesforce フィールド

商談所有に基づくセールスチーム別のクリーンなレポートを実現するため、2020 年 12 月に Salesforce の User オブジェクトに 4 つの新しいフィールドを作成しました。

- [User Segment](https://gitlab.my.salesforce.com/00N6100000ICbBT?setupid=UserFields)
- [User Geo](https://gitlab.my.salesforce.com/00N4M00000IbHo5?setupid=UserFields)
- [User Region](https://gitlab.my.salesforce.com/00N4M00000IbHo6?setupid=UserFields)
- [User Area](https://gitlab.my.salesforce.com/00N4M00000IbHo4?setupid=UserFields)

これらのフィールドは、Salesforce ユーザーが所属するセールスチームを識別するために使用されます。ユーザーが Enterprise または Commercial Sales チームに所属していない場合（チャネル担当者、ISR、BDR、Community Advocate、Sales Ops または Sales Strategy のメンバーなど）、フィールドはデフォルトで「Other」になります。

これらのフィールドは、通常の Salesforce ライセンスプロビジョニングの一環として、Sales Ops がユーザーレコード上で手動で設定します。Sales Ops は SFDC に追加されるすべての新規ユーザーに対してフィールドを設定し、ユーザーがセールスチームを変更するたびにフィールドを更新します。

セールスサイクルのさまざまなタイミングで、これらのフィールドの値を商談レコードにスタンプし、これらのフィールドを使って各商談に関与したセールスチームを特定します。

ユーザー階層の詳細については、[このページ](/handbook/sales/sales-term-glossary/#user-hierarchy) を参照してください。

### アカウント特性別レポート用の主要 Salesforce フィールド

Salesforce の Account オブジェクトにも、User オブジェクトのフィールドを反映した segment/geo/region/area フィールドがあります。Account フィールドは、User フィールドと同じ値を持つこともありますが、Account に関与したセールス担当者の特性ではなく、Account 自体の特性に基づきます。

たとえば、スタンプされた商談オーナーのユーザーセグメントが「Large」であれば、その Account に Enterprise Sales チームの担当者が関与したことを示しますが、アカウントのセールスセグメントが「Large」であれば、その Account が一定の従業員数を持つことを示します。場合によっては、ユーザーセグメントとアカウントセグメントが異なることもあります。たとえば、Mid-Market Sales チームの担当者が、従業員数に基づいて「Large」セールスセグメントに分類される Account に関与する場合などです。

セールスパフォーマンスレポートのほとんどは、特定の商談に関与したセールスチームに基づいていますが、Account の特性についてもレポートしたいユースケースもあります。両者のクリーンで標準化されたレポートを整備し、これら 2 種類のレポートの違いを全員が理解することが重要です。

### プロジェクトプラン

Rosetta Stone のプロジェクトプランと関連 Issue は [こちら](https://gitlab.com/gitlab-com/sales-team/field-operations/analytics/-/issues/242#note_495712375) で確認できます。要約すると、以下のステップで進めます。

- Phase I: セールスチーム別レポート
  - レポートにおける主要 SFDC フィールドと、アカウント所有 vs 商談所有について各チームの認識を合わせる
  - すべてのユーザーレコードで user segment/geo/region/area フィールドを埋める
  - ユーザーレコードの値が商談に正しくスタンプされていることを確認する
  - スタンプされた商談フィールドに正確な過去データをバックフィルする
  - スタンプされたフィールドに空白や不可能な segment/geo/region/area の組み合わせがないことを確認する
  - 既存のレポートを新しい user segment/geo/region/area フィールドを使うように更新する
- Phase II: アカウント特性別レポート
  - 主要な SFDC フィールドについて各チームの認識を合わせる
  - Account オブジェクトの segment/geo/region/area フィールドが機能していることを確認する
  - セールスチームと Account の segment/geo/region/area が一致しない場合の例外レポートと突合プロセスを作成する
- クリーンアップ
  - User、Opportunity、Account オブジェクトの既存フィールドを監査する。重複するフィールドは廃止する。

このプロジェクトの理想的な最終状態は次のとおりです。

- segment/geo/region/area 別のセールスチームパフォーマンスに関するあらゆる質問に答えるために使える SFDC のフィールドが **たった 4 つだけ** になり、当社のセールスマネジメント構造（rep --> ASM --> RD --> CRO）にきれいに整合すること
- segment/geo/region/area 別のアカウント特性に関するあらゆる質問に答えるために使えるフィールドが **たった 4 つだけ** になること

これらのフィールドは、すべてのレポートをスライス＆ダイスするための重要なディメンションとして機能し、SFDC からデータウェアハウスの信頼できるデータフレームワークに流れ、全社で標準化されたレポートに使用されます。
