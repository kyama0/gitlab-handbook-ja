---
title: "GitLab の Customer Assurance Activities"
upstream_path: /handbook/security/security-assurance/field-security/customer-security-assessment-process/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T21:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-23T12:32:50+00:00"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

NDA の対象となるセキュリティ用 collateral (SOC 2 Type 2、ペンテスト executive summary など) をリクエストしたい場合は、[Trust Center](https://trust.gitlab.com/) にアクセスし、右上隅にある request access ボタンをクリックしてください。

## リクエストの送信

<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=main_template" class="btn bg-primary text-white btn-lg">Customer Call Request</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=cap_request_template" class="btn bg-primary text-white btn-lg">General Request</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/customer-assurance-activities/caa-servicedesk/-/issues/new?issuable_template=Contract%20Review%20CAA" class="btn bg-primary text-white btn-lg">Contract Review Request</a>

*上記は GitLab チームメンバー専用です。顧客は GitLab の[アカウントオーナー](/handbook/sales/#initial-account-owner---based-on-segment)に連絡してリクエストを開始してください。顧客が自分のアカウントオーナーを知らない場合や、まだアカウントオーナーが割り当てられていない場合は、[セールスチームに連絡](https://about.gitlab.com/sales/)できます。Issue を送信していただければ、それは私たちのキューに入り、次に空くタイミングで Field Security エンジニアの 1 人にアサインされます (以下に記載されている SLA をご参照ください)。*

## Customer Assurance Activity リクエストの概要

GitLab の顧客や見込み顧客が GitLab と契約する前にセキュリティのデューデリジェンス活動を行うのは驚くべきことではありません。私たちはこれらのレビューの重要性を認識しており、**GitLab チームメンバー**が Customer Assurance Activities をリクエストするためにこの手順を設計しました。

### **GitLab チームメンバー**

私たちはすべての CAA リクエスト (契約レビューを除く) を、**Trust Center を顧客と共有することから**開始します。Trust Center は顧客の質問の多くに回答し、私たちが顧客により効率的で包括的なエクスペリエンスを提供できるようにします。

**Issue をアサインしないでください。Field Security が適切なチームメンバーに Issue をアサインします。よろしくお願いします！**

### Trust Center へのアクセス

GitLab の Trust Center にアクセスするには:

- trust.gitlab.com に移動
- 右上隅の「Get Access」をクリック
- メールアドレスを入力し、「Continue」をクリック
- **「Log into GitLab's workspace」をクリックしないでください。** これは管理ポータル用です。

プロセスは顧客の場合とまったく同じです。顧客が click-wrap NDA に署名したくなく、すでに SFDC に完全に署名された NDA があるか、有効な GitLab サブスクリプションを持っている場合、私たち側で click-wrap NDA をバイパスできます。ただし、**これは最後の手段とすべき**であり、Trust Center へのアクセスをさらに遅延させるためです。顧客を成功に導く最速の方法は、Trust Center のセルフサービスの性質を最大限に活用するよう促すことです。質問がある場合は、#sec-fieldsecurity Slack チャンネルでお問い合わせください。

### アンケートについて

プロセスは SafeBase で取り扱われます。[Trust Center](https://trust.gitlab.com) へのアクセス権を持つ顧客/見込み顧客は、Trust Center 上部の *Submit a Questionnaire* リンクをクリックして直接アンケートをアップロードできます。

Field Security には、いつ、どの程度まで顧客からのカスタムセキュリティレビューアンケートに回答するかを判断する一定の閾値があります。Field Security は、内部ハンドブックの[こちら](https://internal.gitlab.com/handbook/security/security-assurance/field_security/questionnaire_thresholds)に詳述されているとおりにアンケートへの回答を検討します。

### Customer Calls と General Requests について

上記の `Customer Call Request` または `General Request` ボタンを使用し、指示に従ってください。

- プロセスを迅速化するためにリクエストされたすべての情報を含めるようにしてください。
- ARR または潜在的な ARR が必要です
- Customer Calls には、必要な subject matter expert をコールに招集できるよう、顧客がカバーしたいトピックの概要が必要です。
- どのタイプかわからない場合は、可能な限り多くの情報を含めていただければ、私たちのチームが必要に応じて調整します。

### RFP 完了について

送信については上記の指示に従い、RFP プロセスについて詳しくは[こちらの RFP ページ](/handbook/security/security-assurance/field-security/field-security-rfp)をご覧ください。

### 契約レビューについて

上記の `Contract Review Box` を使用し、指示に従ってください。

## Field Security との協業 {#collaborate-with-field-security}

Field Security チームは、**GitLab チームメンバー**が私たちと協業するための以下のリソースも維持しています！

<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/field-security/-/issues/new?issuable_template=customer%20feedback" class="btn bg-primary text-white btn-lg">Customer Feedback</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/field-security/-/issues/new?issuable_template=internal%20feedback%20request" class="btn bg-primary text-white btn-lg">Internal Feedback</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/field-security/-/issues/new?issuable_template=cap_collateral_request" class="btn bg-primary text-white btn-lg">Collateral Request</a>
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team/field-security/-/issues/new?issuable_template=ad_hoc_field_security_request" class="btn bg-primary text-white btn-lg">Ad Hoc Request</a>

### Knowledge Base

Field Security が SafeBase をどのように使用し、どのようにあなたのワークフローをサポートできるかについての情報は、[Knowledge Base](/handbook/security/security-assurance/field-security/knowledge_base/) ページをご覧ください。

### Field Security からのフィードバック

Field Security チームは、顧客と GitLab のチームメンバー双方と会話し、フィードバックを受け取れるという独自の特権を持っています。常に顧客をサポートできるよう、Field Security は GitLab の[観察事項作成手順](/handbook/security/security-assurance/observation-management-procedure/)に従って、顧客の要件や懸念事項を社内の適切なチームに伝えます。Field Security から積極的にフィードバックをリクエストするには、[Internal Feedback](/handbook/security/security-assurance/field-security/customer-security-assessment-process/#collaborate-with-field-security) ボタンを使用してリクエストをオープンしてください。

**注意:** Field Security の観察事項は、[Field Security Observation and OFI Quality Guide](/handbook/security/security-assurance/field-security/field_security_observation_and_ofi_quality_guide/) に従う必要があります。

---

## 公開ドキュメント

- 公開ハンドブックで [GitLab に関する一般情報](https://about.gitlab.com)を検索する。
- [GitLab の製品セキュリティドキュメント](https://docs.gitlab.com)をレビューする。
- [GitLab の Trust Center](https://trust.gitlab.com) をレビューし、公開されているセキュリティアシュアランスドキュメントをダウンロードする。SOC2 レポートのような `NDA Required` ドキュメントをリクエストするには、Trust Center の `Request Access` ボタンを利用してください。

## Self-Attestations

イテレーションの精神に基づき、GitLab はコンプライアンス自己証明 (self-attestation) のリストを継続的に進化させています。完成した自己証明は継続的な該当性について毎年レビューされ、[Trust Center](https://trust.gitlab.com) で見つけることができます。顧客は、アカウントマネージャーを通じて新しい自己証明への提案やリクエストを送信できます。GitLab チームメンバーは、[Regulatory Security Compliance Feedback and Field Research epic](https://gitlab.com/groups/gitlab-com/gl-security/-/epics/56) を通じて将来のコンプライアンス評価に対する推奨事項を送信できます。

## サービスレベルアグリーメント {#service-level-agreements}

- **セキュリティアンケート:** 営業 10 日。SA または CSM は、Field Security のアシスタンスをリクエストする前に、Knowledge Base やその他のセルフサービスリソースを利用します。SA または CSM は、Field Security チーム全員がすべてのファイルやポータルにアクセスできるようにします。
- **契約レビュー:** 営業 5 日。Field Security はすべての関連する契約レビューに関与する必要があります。
- **Customer Calls:** SA または CSM は、ミーティング前に顧客や見込み顧客の質問や懸念事項に関するコンテキストを提供します。Field Security は、GitLab Security に関する重要な情報と顧客や見込み顧客のリクエストへの具体的な内容を含む PowerPoint プレゼンテーションを提供します。Field Security はすべての関連する顧客ミーティングに招待される必要があります。
- **セキュリティドキュメント:** Trust Center を通じて管理されます。Trust Center で対応できない独自の問い合わせには General Request を作成してください。

## 例外

アカウントオーナーまたは Customer Success の連絡先が、Customer Assessment を完了するための十分な知識とリソースがあると感じる場合、この手順を使用する必要はありません。これらの例外は追跡されません。

<div class="d-grid gap-2 my-4">
<a href="https://handbook.gitlab.com/handbook/security/security-assurance/field-security/" class="btn bg-primary text-white btn-lg">Field Security ホームページに戻る</a>
</div>
