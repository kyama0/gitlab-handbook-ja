---
title: SME プロダクトマネジメントとの関わり

description: SME、SA、CSM がプロダクトマネジメントから支援を要求する際のエンゲージメントのルール
upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-engage-pm/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-08T18:59:21Z"
translator: claude
stale: false
lastmod: "2025-11-05T14:29:36-05:00"
---

## 課題

GitLab のプロダクトマネージャーは、タグ付けされた任意の Slack チャンネルで、技術的または非技術的な質問すべてに答えられるようにすること、そして即座に顧客と会えるようにすることが期待されてきました。これは GitLab のプロダクトマネージャー（PM）のキャパシティに負担をかけています。

サブジェクトマターエキスパートシッププログラムの成果のひとつは、技術的な質問に答え、SA や AE からの要請に応じて機会で支援を提供する第一線のエキスパートとなることで、PM がスケールできるようにすることです。

これにより、プロダクトマネジメントは解放され、エスカレーションのポイントとして活用され、適切なときに顧客と会い、ロードマップの開発と提供に集中できます。

そのため、150 人の異なる SA や CSM から 150 件のリクエストを受ける代わりに、SME プログラムがそれを 50% 削減できれば、PM は SME のエンパワーメントと、SME が行き詰まったときに SME に答えることに集中できます。

現場チームは、私たちのプロダクトを販売するための営業活動のほとんどをセルフサービスで行えるべきです。SME は、より広い営業アカウントチームをサポートする方法です。

## SME と PM がどのように相互に支援できるか

SME は PM を支援し、より広い営業チームを以下のようにサポートします：

1. 専門領域の知識を活用して、プロダクトディスカバリセッションと戦略ワークショップに参加する。
1. 深い技術的概要を提供し、機会で支援する
1. 他の SA や AE からの技術的な質問、特に顧客に代わっての質問に `sme-` チャンネルで答える。
1. よく聞かれる質問への回答を含む知識ベースを維持する。
1. ドキュメント、市場進出資料、その他のセールスイネーブルメントに貢献する。
1. 顧客と関わってフィードバックを集め、成果を達成する上でのギャップが何かをよりよく理解する
1. プロダクトを改善するための Issue を協働で作成または提起する。
1. プロダクト提供を拡大するか、ギャップを減らす機会を見つける
1. 定期的なケイデンスで現場からのフィードバックを PM や EM に提起する
1. SME 領域でチームの残りをイネーブルメントする - チームコールで新しい洞察、更新、学びなどを共有する

この共生関係の一部として、私たちは GitLab プロダクトマネジメントが、ソフトコントラクトの一部として、以下のように SME プログラムを支援することを期待しています：

1. SME と少なくとも月に 1 回会い、SME をイネーブルメントしてプロダクト変更について理解を提供するか、最後のミーティング以降のプロダクトの更新を提供する
1. 適切な [`sme-internal` チャンネル](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-operations/#sme-internal) で、SME からの質問に答えたり、SME から明確化を得たりして、SME が他のリソースを正確に支援できるよう、非常に応答的で利用可能であること。**SLA：私たちは PM が SME 内部チャンネル内で SME の問い合わせに 4 時間以内に応答することを期待します。**
1. [Shadow a PM プログラム（TBD）](https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/work_items/460) で、SME が PM をシャドウできるよう、許可し優先する
1. [Technical Skills Exchange](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-tech-skills) セッション中に現場をイネーブルメントし、ロードマップ更新を提供する。
1. 顧客にロードマップを提供する。
1. [顧客フィードバックの収集プロセス](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-customer-feedback.md) の一部として SME によって提起された Issue に優先順位を付ける。私たちは PM がそのプロセスによって決定された確立された SLA を満たすことを期待します。

## プロダクトマネジメントとどのように関わるか

**最初に SME リクエストを完了せずに、直接 PM に連絡することを控えてください**。

AE、SA、または CSM が PM、Field CTO に直接リクエストする場合は、リクエスター側に最初に [SME のリクエスト](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/) を検討するよう尋ねてください。あなた、つまり SA/CSM は、適切な SME チャンネルで SME をリクエストできます。

SME が最初にエンゲージされていなかったと判断され、リクエストがエスカレーションやプロダクトの方向性のリクエストに関連していない場合、PM はすべての質問を SME Slack ハンドルの使用により SME にリダイレクトするように指示されています。

その他の推奨事項については、[PM をエンゲージまたはリクエストする前に最初に SME のリクエストを検討する](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/#sme-pm-alternative) をご覧ください

### プロダクトマネージャーをいつ関与させるか {#sme-pm}

**まとめると、PM をエンゲージできます**。本ハンドブックの [プロダクトマネジメント](/handbook/product/product-management/#requests-for-product-support) および [プロダクトマネージャーのエンゲージ方法](/handbook/product/product-management/#how-to-engage-product-managers) のセクションで述べられているように、以下のシナリオで：

1. ロードマップのリクエスト。
1. プロダクトの方向性についての議論。
1. 機能ギャップに関するフィードバックと質問
1. 機能ギャップ、ロードマップ、またはプロダクトの将来の方向性について議論するための顧客ミーティングへの参加リクエスト。
   1. プロダクトマネジメントプロセスに従って [Customer Call](/handbook/product/product-management/#product-joining-customer-calls) をリクエストしてください
   1. **注：AE、SA、または CSA が、特に技術的な質問やベストプラクティスに答えるためだけに、PM が明日または翌日のコールに参加するようリクエストすることはいかなる時も避けてください。** PM の代わりに SME をリクエストするべきシナリオのリストを上記でご覧ください。
   1. AE が主張するからといって、または事前に必要なコンテキストを集めず、顧客が必要としていることについて広範なディスカバリを行わずに、単純にプロダクトマネージャーがコールに参加するようリクエストしないでください。
1. POV 中、上記で議論されたとおり、すでに SME とトリアージしている場合。これは通常、新機能で支援が必要な場合や、バグ修正または機能拡張の必要性がある場合です。
1. 顧客のエスカレーション中、適切な [エスカレーションプロセス](/handbook/product/product-management/#how-do-i-escalate-a-feature-request) に従った後。

## SME をエンゲージした後、どのように PM をエンゲージ/エスカレーションするか

[顧客機会](/handbook/product/product-processes/#customer-meetings) で、以下のシナリオでは少なくとも 48 時間前の通知で PM をエンゲージするべきです：

1. PM が顧客と会うリクエスト（評価中、ケイデンスコール中の 1 回限り）。
2. PM がプロダクトギャップに関する Issue を解決するリクエスト
3. 評価（トライアル、Proof of Value）への非同期の関与のための PM リクエスト

### 1. PM が顧客と会うリクエスト

- ディスカバリを行うために PM がコールに参加することを期待しないでください。
- PM が顧客コールに参加するようリクエストするには、["Product Joining Customer Calls"](/handbook/product/product-management/#product-joining-customer-calls) で説明されているプロセスに従ってください。
- PM は通常、すべての顧客コンテキストの収集、[PM Customer Meeting Briefing Document](https://docs.google.com/document/d/1TPJwjJTOrlrtuJ_srs631ndL6dkiwl9yIi3PPtgStos/edit#heading=h.sujaka5bd7jl) の記入、およびその [グループまたはカテゴリ](/handbook/product/categories/#devops-stages) の Slack チャンネルでの PM への連絡を要求します。

ただし、[一部のステージ](/handbook/product/categories/#devops-stages) ではこのプロセスにわずかなバリエーションがある場合があります。例：[Gitaly](/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/#customer-issues) では、Issue を開く必要がある場合があります。

[Issue ベースの標準化されたリクエストプロセス](/handbook/product/product-management/#requests-for-product-support) も参照してください。

### 2. PM がプロダクトギャップに関する Issue を解決するリクエスト

- [SME Customer Feedback Process（TBD）](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-customer-feedback.md) を参照してください

### 3. 評価（トライアル、Proof of Value）への非同期の関与のための PM リクエスト

- SA/SME/CSM は、Customer Collaboration Projects でトライアル/POV Issue を作成します
- TBD（プロセスは定義予定）

---

### **プロダクトマネジメントとのその他のエンゲージメント機会**

#### Technical Skills Exchange

1. [Technical Skills Exchange](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-tech-skills) では、テクニカルプロダクトマネージャーとプロダクトマネージャーが、新機能フィードバックのために SME にデモやデモのスニペットを提供します。

#### プロダクトマネジメントロードマップミーティング

1. SME とプロダクトマネージャー間の月次ミーティングで、今後のリリース、主要な新機能を議論し、フィードバックを集めます。
1. SME に対するプロダクトマネージャーまたはテクニカルプロダクトマネージャーによる四半期プレゼンテーションを以下の内容で組織する：
   - アーキテクチャの変更
   - 新しいユースケース
   - 機能と機能性
   - プロダクトロードマップ更新
1. SME がプロダクトロードマップをレビューし入力を提供する定期的なケイデンスを確立し、顧客のニーズと市場のトレンドとの整合性を確保する。

#### SME Slack 内部チャンネル

プロダクトマネジメントは、SME がプロダクトマネジメントに継続的なフィードバックや提案を提供するフォーラムを作成するために、[SME Slack 内部チャンネル](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-operations/#sme-slack) にも含められるべきです。

#### SME/プロダクトマネジメントケイデンスミーティング

SME と PM は少なくとも月に 1 回会うことが期待されます。一部の PM は独自のオフィスアワーも実施しています。提案されたケイデンスとアジェンダについては [SME/プロダクトマネジメントケイデンスミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-product-cadence) をご覧ください。
