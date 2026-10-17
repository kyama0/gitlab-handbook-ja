---
title: "Professional Services のプリセールス方法論"
description: "プリセールスサイクルにおいて GitLab が Professional Services をどのようにスコープし、Customer Journey に組み込んでいくかを紹介します。"
upstream_path: /handbook/customer-experience/professional-services-engineering/professional-services-presale-methodology/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-17T08:53:47+00:00"
translator: codex
stale: false
lastmod: "2026-10-14T13:22:17-04:00"
---

## Customer Journey に対応付けた PS プロセスと方法論 {#ps-process--methodology-mapped-to-the-customer-journey}

Professional Services のプロセスと方法論は、カスタマーサクセスが支える Customer Journey の中に組み込まれています。Professional Services は **SOW Close** から **Project Close** フェーズまでの Customer Journey に貢献します。

方法論の各ステージには、Directly Responsible Individuals（DRI）、アクティビティ、アウトカム、ツール／資料があります。プリセールスとポストセールスのフェーズで、ステージが明確に分類されていることもわかります。

これらはすべて、[Professional Services の社内ハンドブックページ](https://internal.gitlab.com/handbook/customer-experience/professional-services/)にまとめられています。

## プリセールスの概要 {#pre-sales-overview}

このページの目的は、Professional Services Engagement Manager と Regional Delivery Manager が用いる、セールス支援型のセリングモーションを文書化することです。GitLab の営業アカウントチームに所属していて情報をお探しの場合は、[Professional Services のポジショニング](/handbook/customer-experience/professional-services-engineering/positioning)や[Professional Services の販売](/handbook/customer-experience/professional-services-engineering/selling/#custom-scoped-services)に関するページをご覧ください。

このページでは、サービスのポジショニングとスコーピングに関与するタイミングと方法、見積もりと SOW の作成方法、および承認方法の概要を説明します。

> *注: サービス契約には[2 つの形態](/handbook/customer-experience/professional-services-engineering/selling)があります。本ページでは、Standard SKU プロセスではなく **カスタム SOW スコーピング** プロセスに焦点を当てます。*

カスタム SOW については、[SOW 作成のワークフロー](/handbook/customer-experience/professional-services-engineering/selling/#custom-scoped-services)はアカウントチームと Professional Services チームのパートナーシップによって進められます。

[出典: GitLab チームメンバー限定](https://docs.google.com/presentation/d/1TOI2aoseBoyWYQC6-xpJVMknEncCNreSFfMvOHO7EBA/edit#slide=id.gbfb62d0c00_0_58)

## 1. ポジショニング {#1-positioning}

- **DRI**: アカウントチーム (SAE/AE, SA, CSM)
- **サポート**: Engagement Manager

### MEDDPICC {#meddpicc}

プロフェッショナルサービスは、見込み客が顧客になるとき（例: 新規ディールの Land 時）や、既存顧客がスタッフを増員したり GitLab の新機能を導入しようとしているとき（例: 拡大時）にポジショニングできます。SA、SAE、AE、または CSM（つまり「アカウントチーム」）が、[Command of the Message](/handbook/sales/command-of-the-message/) と [MEDDPICC](../../../sales/meddppicc.md) のメッセージングフレームワークに従って、このプロセスを主に担当します。

より大規模で戦略的な顧客では、PS の Engagement Manager がセリングプロセスの早い段階で関与し、ディスカバリーを支援したり、過去の契約から得られたロールアウトの教訓を提供したりします。中規模の顧客では、Engagement Manager は SFDC ステージ 4（Proposal）に到達したタイミングでアカウントチームに関与する傾向があります。

### PS 機会の選定 {#ps-opp-qualification}

サブスクリプション全体のディールが進行するなかで、アカウントチームは付随するプロフェッショナルサービス機会を選定（採否）すべきです。これは、まずプロフェッショナルサービスの価値を確立するための[シンプルなスクリプト](/handbook/customer-experience/professional-services-engineering/positioning/#value-of-gitlab-professional-services)を使って行えます。次に、以下のような選定質問を投げかけます:

1. GitLab プラットフォームへの今後の移行をどのように実行する予定ですか？
1. 技術面とチェンジマネジメント面の両方で、誰がこれを管理しますか？
1. その人物は、これを推進するために何を後回しにすることになりますか？
1. その人物は、過去にこのような移行の細かな部分に取り組んだ経験がありますか？
1. 移行期間を通じてリスクをどのように顕在化させ、管理する予定ですか？

これらの質問に対して顧客が不明確であれば、GitLab のロールアウトのリスクを軽減し、サブスクリプション購入の価値／インパクトを最大化するためのオプションとして、PS Engagement Manager に契約をスコープしてもらうことが理にかなっていると主張できます。

### AE が SFDC で PS Only Opportunity を作成 {#ae-creates-ps-only-opp-in-sfdc}

顧客がプロフェッショナルサービスを利用したいと判明したら、アカウントチームの責任で[Engagement Manager に連絡](/handbook/customer-experience/professional-services-engineering/engagement-mgmt/#how-to-contact-or-collaborate-with-us)します。

## 2. スコーピング {#2-scoping}

- **DRI**: Engagement Manager
- **サポート**: PS Practice、アカウントチーム (SAE/AE, SA, CSM)

### データ収集 {#gather-data}

アカウントチームが PS Opportunity を作成すると、スコーピング Issue が自動的に作成されます。Engagement Manager はスコーピング Issue と PS Compass の見積もりを使用し、アカウントチームから非同期にデータを収集します。検討中のエンゲージメントに関する質問は、すでに行われたディスカバリーをもとにアカウントチームが回答できる場合もあります。私たちは、顧客に重複した質問をしないようにしたいと考えています。アカウントチームがエンゲージメントを作成するために必要な詳細情報を提供できない場合、EM はアカウントチームと顧客とのミーティングで追加のディスカバリー質問を行い、必要な詳細情報を得ます。

### 契約見積もりの作成 {#create-engagement-estimate}

Engagement Manager は GitLab の社内見積もりツールである PS Compass で見積もりを作成します。PS サービスカタログからスコープに含めるサービスを選び、各アクティビティの工数を見積もります。私たちが提供するサービスは、[オファリングフレームワーク](/handbook/customer-experience/professional-services-engineering/framework)のページに記載されています。

### 契約見積もりのイテレーション／レビュー {#iterate--review-engagement-estimate}

たたき台に詳細を肉付けする最初のイテレーションを終えたら、Engagement Manager は[Professional Services の Slack チャンネル](/handbook/customer-experience/professional-services-engineering/working-with/#slack)でアカウントチームにレビューを依頼します。多くの場合、Engagement Manager は顧客と Zoom コールを行い、コンテキストを提供してフィードバックを集めます。

### SOW の生成 {#generate-sow}

Engagement Manager は、サービスエンゲージメントの規模と含まれるアクティビティについてアカウントチームや顧客から合意を得たら、PS Compass の見積もりから SOW を生成します。

### SOW データのイテレーション／レビュー {#iteratereview-sow-data}

SOW が生成されたら、アカウントチームによるレビューが可能になります。ここでもイテレーションは可能ですが、たたき台ステップで適切にイテレーションが行われていれば、最小限に抑えられるはずです。

### SOW レビュー／承認 {#sow-reviewapproval}

アカウントチームからのフィードバックに基づいて 1 回以上のイテレーションを行った後、SOW は PS Leadership のレビューを含む GitLab の社内契約承認ワークフローに進みます。GitLab チームメンバーは、社内の[契約と見積書作成](https://internal.gitlab.com/handbook/customer-experience/professional-services/contracting-and-quoting/)ページで詳細を確認できます。

## 3. デリバリー準備 {#3-delivery-prep}

- **DRI**: Project Manager
- **サポート**: EM、PM、PSE、TA、アカウントチーム

契約が Salesforce のステージ 6 `awaiting signature` に進むと、Engagement Manager は PM と顧客のステークホルダーとの間で「GitLab でのプロジェクト管理方法」について議論する紹介ミーティングをセットします。このコールでは、PM はリソースアサインとスケジュール詳細についても議論します。並行して、PM は EM、PM、PSE、TA、アカウントチームとの内部トランジションミーティングをセットして、顧客スコーピングミーティングで行われた技術的な議論をレビューします。これは、チーム全体が顧客プロジェクトチームの内情とダイナミクスについて議論し開示する機会となります。

### PM の紹介 {#pm-introduction}

Engagement Manager は、スコーピング作業中に顧客と契約していたため、PS Project Manager を紹介するのに最適な立場にあります。

### リソースの特定 {#resource-identification}

PS Project Coordinator は Regional Delivery Manager と緊密に連携し、スキルセット、タイムゾーン、人柄、在籍年数、稼働可能性に基づいて、プロジェクトをデリバリーする最適なリソースを特定します。

### プロジェクト準備コール {#project-prep-call}

これは顧客のステークホルダーと PS Project Manager の間で、私たちの働き方について話し合うコールです。プロジェクトの進捗をどこで追跡するか、ステータスレポートはどのような形式か、ミーティングの頻度はどの程度か、週あたりの最低時間や有効期限・遅延文言など働き方に影響する契約条件のレビュー、そして最も重要な点として、プロジェクトチーム全体が参加するキックオフコールの前に、暫定的なプロジェクトスケジュールについて顧客と相互合意に達する方法について話し合います。

PS Delivery 方法論を確認して、プリセールスからデリバリーチームへの引き継ぎの詳細を理解し、円滑な関係と生産的な契約を確保してください。

### 4. SOW 実行／クローズ {#4-sow-executionclose}

- **DRI** Engagement Manager
- **サポート**: PS Leader、Sr. PSE、SAE/AE、Legal、Finance、Deal Desk

### 承認と署名 {#approval-and-signature}

Engagement Manager は PS Compass から GitLab の契約ワークフローへ SOW を送信します。そこで、社内でのレビューと承認（PS Leadership、Revenue、Legal を含む）を行い、顧客からの修正案に対応します。承認後、SOW を署名のために顧客へ送付します。GitLab チームメンバーは、社内の[契約と見積書作成](https://internal.gitlab.com/handbook/customer-experience/professional-services/contracting-and-quoting/)ページで詳細を確認できます。

### Deal Desk が SFDC を更新 {#deal-desk-updates-sfdc}

SOW の署名がすべて完了したら、Deal Desk チームが Salesforce の PS-Only Opportunity を `closed-won` に更新します。
