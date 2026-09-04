---
title: "GitLab のカスタマーアシュアランス活動"
upstream_path: /handbook/security/security-assurance/field-security/customer-security-assessment-process/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
translated_at: "2026-09-04T14:20:43+09:00"
translator: claude
stale: false
lastmod: "2026-08-26T21:27:16-07:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

セキュリティドキュメント (SOC 2 Type 2、ペンテストのエグゼクティブサマリーなど) は [Trust Center](https://trust.gitlab.com/) で入手できます。_(ページ右上の Get Access ボタンをクリックし、会社のメールアドレスを入力してください。顧客と GitLab 従業員で同じプロセスです。詳しい手順は以下に記載しています。)_

## リクエストの送信

<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=main_template" class="btn bg-primary text-white btn-lg">顧客コールリクエスト</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=cap_request_template" class="btn bg-primary text-white btn-lg">セキュリティアンケートリクエスト</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=Contract%20Review%20CAA" class="btn bg-primary text-white btn-lg">契約レビューリクエスト</a>

_上記は GitLab チームメンバー専用です。顧客は GitLab の Trust Center にアンケートをアップロードするか、GitLab の[アカウントオーナー](/handbook/sales/#initial-account-owner---based-on-segment)に連絡してリクエストを開始できます。顧客がアカウントオーナーを知らない場合や、まだアカウントオーナーが割り当てられていない場合は、[セールスチームに連絡](https://about.gitlab.com/sales/)できます。_

## カスタマーアシュアランス活動リクエストの概要

GitLab の顧客や見込み顧客は、GitLab と契約する前にセキュリティデューデリジェンス活動を実施します。私たちはこれらのレビューの重要性を認識しており、**GitLab チームメンバー**がカスタマーアシュアランス活動をリクエストするためにこの手順を設計しました。

### **GitLab チームメンバー**

このリクエストを送信する際は、顧客が GitLab の [Trust Center](https://trust.gitlab.com) を認識していることを確認してください。Trust Center は顧客の質問の多くに回答し、私たちが顧客により効率的で包括的な体験を提供できるようにします。

**Issue をアサインしないでください。Field Security が適切なチームメンバーに Issue をアサインします。よろしくお願いします！**

### Trust Center へのアクセス

GitLab の Trust Center にアクセスするには:

1. [trust.gitlab.com](https://trust.gitlab.com) に移動します
1. 右上隅の「Get Access」をクリックします
1. メールアドレスを入力し、「Continue」をクリックします

* **「Log into GitLab's workspace」をクリックしないでください。** これは管理ポータル用です。
* 一部のドキュメントは公開されており、このプロセスは不要です (ISO 証明書 (27001、27017、27018、42001))。

プロセスは顧客の場合とまったく同じです。顧客がクリックラップ NDA に署名したくなく、すでに SFDC に完全に締結された NDA があるか、有効な GitLab サブスクリプションを持っている場合、私たち側でクリックラップ NDA をバイパスできます。ただし、**これは最後の手段とすべき**であり、Trust Center へのアクセスをさらに遅延させるためです。顧客を成功に導く最速の方法は、Trust Center のセルフサービスの性質を最大限に活用するよう促すことです。質問がある場合は、#security_help Slack チャンネルで @field-security をタグ付けしてください。

### アンケートについて

プロセスは Trust Center で取り扱われます。[Trust Center](https://trust.gitlab.com) へのアクセス権を持つ顧客／見込み顧客は、Trust Center 上部の _Submit a Questionnaire_ リンクをクリックして直接アンケートをアップロードできます (_Submit a Questionnaire_ ボタンを表示するには、上記の Get Access プロセスを完了している必要があります)。

上記のとおり、Field Security には顧客アンケートに回答するための一定の閾値があります。内部ハンドブックの[こちら](https://internal.gitlab.com/handbook/security/security-assurance/field_security/questionnaire_thresholds)を参照してください。

### 顧客コールについて

上記の `Customer Call Request` または `General Request` ボタンを使用し、指示に従ってください。

* プロセスを迅速化するためにリクエストされたすべての情報を含めるようにしてください。
* ARR または潜在的な ARR が必要です
* 顧客コールには、必要な分野の専門家をコールに招集できるよう、顧客がカバーしたいトピックの概要が必要です。
* どのタイプかわからない場合は、可能な限り多くの情報を含めていただければ、私たちのチームが必要に応じて調整します。

### 契約レビューについて

上記の `Contract Review Box` を使用し、指示に従ってください。

### RFP 完了について

送信については上記の指示に従い、RFP プロセスについて詳しくは[こちらの RFP ページ](/handbook/security/security-assurance/field-security/field-security-rfp)をご覧ください。

---

## 公開ドキュメント

* 公開[ハンドブック](https://handbook.gitlab.com)で、ポリシーや標準など GitLab に関する一般情報を検索します。
* セキュリティ設定を含む [GitLab の製品ドキュメント](https://docs.gitlab.com)をレビューします。
* [GitLab の Trust Center](https://trust.gitlab.com) をレビューし、公開されているセキュリティアシュアランスドキュメントをダウンロードします。SOC2 レポートのような `NDA Required` ドキュメントをリクエストするには、Trust Center の `Get Access` ボタンを利用してください。

## 自己証明

イテレーションの精神に基づき、GitLab はコンプライアンス自己証明のリストを継続的に進化させています。完成した自己証明は継続的な該当性について毎年レビューされ、[Trust Center](https://trust.gitlab.com) で確認できます。

* 顧客は、Account Manager を通じて新しい自己証明への提案やリクエストを送信できます。
* GitLab チームメンバーは、[Regulatory Security Compliance Feedback and Field Research エピック](https://gitlab.com/groups/gitlab-com/gl-security/-/epics/56)を通じて将来のコンプライアンス評価に対する推奨事項を送信できます。

## サービスレベルアグリーメント {#service-level-agreements}

* **セキュリティアンケート:** 10 営業日。SA または CSM は、Field Security の支援をリクエストする前に、Knowledge Base やその他のセルフサービスリソースを利用します。SA または CSM は、Field Security チーム全員がすべてのファイルやポータルにアクセスできるようにします。
* **契約レビュー:** 5 営業日。Field Security はすべての関連する契約レビューに関与する必要があります。
* **顧客コール:** SA または CSM は、ミーティング前に顧客や見込み顧客の質問や懸念事項に関するコンテキストを提供します。Field Security は、GitLab Security に関する重要な情報と顧客や見込み顧客のリクエストへの具体的な内容を含む PowerPoint プレゼンテーションを提供します。Field Security はすべての関連する顧客ミーティングに招待される必要があります。
* **セキュリティドキュメント:** Trust Center を通じて管理されます。質問がある場合は Slack の #security_help で @field-security をタグ付けしてください。

## 例外

Account Owner または Customer Success の連絡先が、顧客アセスメントを完了するための十分な知識とリソースを持っていると感じる場合、この手順を使用する必要はありません。これらの例外は追跡されません。

<div class="d-grid gap-2 my-4">
<a href="https://handbook.gitlab.com/handbook/security/security-assurance/field-security/" class="btn bg-primary text-white btn-lg">Field Security ホームページに戻る</a>
</div>
