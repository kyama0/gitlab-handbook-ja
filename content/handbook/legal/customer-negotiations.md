---
title: "営業ガイド | GitLab 法務部門との連携"
description: "このリソースは、GitLab の営業チームに対して、顧客交渉のための GitLab 法務部門との連携における業務的・教育的側面についての支援を提供します。"
upstream_path: "/handbook/legal/customer-negotiations/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

 このハンドブックリソースの目的は、すべての GitLab チームメンバーに、あらゆるタイプの市場開拓に関する法務コマーシャルリクエストやプロセスを管理するための明確な道筋を提供することです。以下の情報は、自分自身で特定の情報を見つけてアクセスし、GitLab コマーシャル法務チームへの最良の連絡方法と支援の調整方法を明確に確立するのに役立てることを目的としています。

注意: このハンドブックページ内の「GitLab 法務」または「法務」への言及はすべて、コマーシャル法務チームを指します。

(1) [業務的](#operational) - ディールをクローズするための要件、法務運営に関する一般的な FAQ（財務やディールデスクに関する並行点を含む）を含む、GitLab 法務との連携および関与方法。

(2) [教育的](#educational) - 法務について学び、顧客が法務に関連する質問を持っている場合により自信を持って対応できるよう積極的なアドバイスや教育を含む、販売サイクル中の営業をより良くサポートするための契約の仕組み。

このページに含まれる情報は、次のように業務的と教育的の2つの区分に整理されています:

| 業務的 | 教育的 |
| ------ | ------ |
| [**法務コマーシャルチームへの連絡方法**](#how-to-reach-the-legal-commercial-team) | [**GitLab 契約の概要**](#overview-of-gitlab-agreements)  |
| [**契約書への署名を取得する方法**](#how-do-i-get-an-agreement-signed)（NDA、DPA、認可書を含む） | [**GitLab はいつ交渉するか**](#when-does-gitlab-negotiate)  |
| [**SFDC での輸出レビューのクリア**](#export-review-in-sfdc) | [**オープンソースソフトウェアとは？**](#what-is-open-source) |
| [**ベンダーリクエストフォームの完了**](#completing-vendor-request-forms) | [**GitLab サブスクリプション契約 (「Subscription Agreement」) の基礎**](#gitlab-subscription-agreement-basics) |
| [**GitLab の財務情報および保険証明書のリクエスト**](#requests-for-gitlab-financial-information-and-insurance-certificates) | [**Business Associate Agreement**](#business-associate-agreements-baas) |
| [**エスカレーションプロセス**](#escalation-process) | [**データプライバシーと GitLab Data Processing Addendum**](#data-privacy-security-and-the-gitlab-data-processing-addendum) |
| [**名称変更または支配権変更のリクエスト**](#request-for-name-change-or-change-in-control) | [**契約ライフサイクル管理 (CLM) プロセス**](#contract-lifecycle-management-clm-process) |
| [**法務コマーシャルカバレッジモデル**](#legal-commercial-coverage-model) | |
| [**GitLab Issues: クロスファンクショナルなコラボレーション**](#collaborating-cross-functionally-with-gitlab-issues) |  |
| [**法務コールのためのベストプラクティス**](#best-practices-for-a-legal-call) |  |
| [**トレーニング (LevelUp) 認定購入のリクエスト**](#request-for-training-levelup-certification-purchases)|  |
| [**評価契約のリクエスト**](#request-for-a-trial-or-evaluation-agreement) |  |
| [**新規または非標準の Go-To-Market マネタイゼーション構造のリクエスト**](https://gitlab.com/gitlab-com/Product/-/issues/new) | |

## 業務的

### 法務コマーシャルチームへの連絡方法

**異なる状況には異なるアプローチが必要です。収益関連リクエストに関するほとんどのケースでは、法務チームに連絡する適切な方法は、以下のプロセスに従って Salesforce (SFDC) で法務ケースを作成することです。**

1. 法務ケースを作成するには、SFDC の顧客 Opportunity の右上隅にあるドロップダウンメニューから「Request Support」ボタンを選択し、その後次のドロップダウンメニューから「Legal」を選択します。**Opportunity が存在しない場合は、$0 Opportunity を開いて、このセクションで設定された手順に従ってください。**
2. 法務ケースが正しく作成されると、リクエストはキューに記録され、適切な法務チームメンバーが自分自身にケースを割り当て、必要に応じてリクエスターと通信します。
3. 法務ケースを開くためのステップバイステップの説明:
    - SFDC で Opportunity の上部にある「Request Support」を選択します。
    - 「Request Support」を選択した後に表示されるドロップダウンメニューで「Legal」を選択します
    - 各フィールド（つまり「Type of Legal Request」と「Summary of Actions」）に最も適切な答えを選び、すべての関連する詳細を「Next Steps」セクションに追加し、関連するドキュメントをアップロードしてから「Submit」を押します。**できる限り多くの詳細を追加し、リクエストの緊急性または期限を含めてください。これにより、法務チームメンバーが計画と優先順位付けを行うことができます。**
    - 適切に提出されると、新しい法務ケースが法務チームのキューに追加され、適切なチームメンバーが法務ケースを自分自身に割り当ててサポートします。
    - また、メールおよび新しく作成された法務ケースの Chatter セクションを介して自動メッセージを受信します。これは、法務リクエストの種類に応じて、法務チームがあなたを支援するために必要なドキュメントおよび／または情報を概説します。あるいは、クエリに直接答えるかもしれないリソースを指摘されることもあります。このメッセージをレビューし、必要なすべての情報が提供されていること、ドキュメントが添付されていることを確認してください。
    - 法務ケースがレビュー、回答され、リクエスターは @ メンションされます。
    - リクエストが対処されると、法務ケースは法務チームメンバーによってクローズされます。
4. 法務ケースを開く際に問題が発生した場合は、Slack の #legal までサポートを求めてください。
5. SFDC で @Legal をタグ付けしないでください。チーム全体に不必要に通知されます。
6. 顧客の特定の Opportunity のすべての契約またはドキュメントは、同じ法務ケースに添付する必要があります: 例: 顧客が Subscription Agreement と注文書の両方にレッドラインを返した場合、両方とも同じ法務ケースにアップロードする必要があります。

**リマインダー: 各 Opportunity につき 1 つの SFDC 法務ケースのみを開く必要があります。**

### 契約書への署名を取得する方法

1. 営業組織の誰も契約書に署名する権限を持っていません。GitLab を代表して特定の個人のみが署名できます。Authorization Matrix を[こちら](https://internal.gitlab.com/handbook/company/authorization-matrix/) で確認してください（随時更新）。質問がある場合は、該当するリクエストを支援している法務チームメンバーに連絡してください。
1. すべての契約書には署名するために法務承認スタンプが必要です。このスタンプは、実行可能なバージョンに達したときに法務チームメンバーによって契約書に配置されます。

    **注 - 法務スタンプは署名ではありません**

1. 契約書が法務によってスタンプされたら、[DocuSign プロセス](/handbook/sales/field-operations/order-processing/#how-to-send-an-order-form-to-the-customer-for-signature-via-docusign) に従って、SFDC 内で契約書を署名のために送信します。
1. すべての営業チームメンバーは DocuSign アクセス権を持っています。使い方に関する質問は Sales Ops と連携してください。**完全に実行された契約書については、必ず該当する法務チームメンバーに cc してください**

NDA に署名が必要ですか？ [DocuSign アクセスを持つチームメンバー向けのプロセス](/handbook/legal/nda/) に従ってください。
{.h3}

### Data Processing Addendum (DPA) に署名を取得する方法

GitLab は、Terms of Use ウェブサイトに DPA の署名済みバージョンを含めています。Subscription Agreement に記載されているとおり、この DPA はすべての顧客に適用され、副署する必要はありません。さらに、DPA のヘッダーに記載されているとおり、顧客の Subscription Agreement への同意は、DPA への同意として扱われます。

### 認可書 (LOA)

パートナーが認可書をどのようにリクエストできるかについては、[Partner Operations ページ](/handbook/sales/field-operations/channel-operations/#letters-of-authorization) をご覧ください。

**LOA レビューの手順:**

1. パートナーが GitLab パートナー契約を実行または同意のためにクリックすると、パートナーが LOA をリクエストできるように、認証情報とパートナーポータルへのアクセスが提供されます。パートナーが LOA のリクエストを開始すると、Ecosystem Operations が DocuSign を介して `partnersupport@gitlab.com` でリクエストを受け取り、パートナーが有効で認可されたパートナーであることを確認します。
確認されると、Ecosystem Operations、Legal は DocuSign を介して `loa@gitlab.com` にメールを受け取ります。
2. パートナーによって DocuSign プロセスが開始され、Ecosystem Operations がリクエストしているパートナーが有効で認可されたパートナーであることを確認すると、LOA は法務チームにルーティングされて法務スタンプが追加され、その後 GitLab 認可署名者に実行のため送付されます。完了すると、完全に実行された LOA は DocuSign を介して GitLab Legal とパートナーに配布されます。
3. パートナーがカスタム条項を持つ非標準の LOA をリクエストする場合、上記のように SFDC で法務リクエストを開いてください。

### SFDC での輸出レビュー

1. 輸出コンプライアンスツールでフラグが立てられたアカウントをクリアできるのは Legal のみです。これらのリクエストに対する支援のため他のグループにタグ付けしないでください。
2. 詳細と手順については、[Trade Compliance ハンドブックページ](https://internal.gitlab.com/handbook/sales/sales-operations/#trade-compliance-navex-risk-rate) をご覧ください。

### RFP プロセス

Request for Proposal（「RFP」）を完了することに関しては、RFI、RFQ、RFX と呼ばれることもありますが、営業チームメンバーが既存の Answer Base を活用し、クロスファンクショナルなステークホルダーから関連情報を収集するため DRI として運営する方法については、[RFP プロセスハンドブックページ](/handbook/security/security-assurance/field-security/field-security-rfp/) で情報をご覧ください。

### ベンダーリクエストフォームの完了

**ベンダーリクエストフォームの完了は営業チームメンバーの責任です**

1. これらのドキュメントには通常: (i) 適切な GitLab ステークホルダーによるレビューを必要とするさまざまな非法務要素が含まれ、(ii) [Company Information ページ](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/company-information)、GitLab [Investor Relations ページ](https://ir.gitlab.com/)、GitLab ハンドブックまたは GitLab.com で既に公開されている情報が含まれることがしばしばあります。営業チームメンバーは、法務チームに連絡する前に最初にこれらの公開リソースを確認することで、法務レビュー時間を大幅に短縮できます。

    **Company Information ページに含まれるもの:**

    - 各 GitLab エンティティに関連するアドレス／情報
    - すべての銀行情報
    - ECCN 番号
    - NAICS コード
    - Dun and Bradstreet 番号
    - その他の関連する企業情報

2. Company Information ページにない情報については、営業チームメンバーが残りの事項のための適切な GitLab 部門オーナーを特定する必要があります。財務リクエストを調整するため、[Sales Order Process](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/company-information) ページを介して Deal Desk に連絡するか、Finance Slack チャンネルで Finance チームに連絡してください。正しい部門について不明な場合、Legal は適切なルーティングについてガイダンスを提供できます。
3. GitLab の W9 は Finance [フォームページ](/handbook/finance/#forms) にあります
4. GitLab の[Trust Center](https://trust.gitlab.com/) で見つからないセキュリティ関連の質問がある場合、営業チームメンバーは[Customer Assurance Activities ページ](/handbook/security/security-assurance/field-security/customer-security-assessment-process) を介して Field Security チームに連絡する必要があります。
5. 税金固有の質問については、営業チームメンバーは Tax Slack チャンネルで Tax チームに連絡するか、既存の SFDC ケースがある場合は SFDC chatter で連絡する必要があります。Tax Certificate リクエストについては、`tax@gitlab.com` で Finance チームにメールしてください。

**法務リクエストを開くのは以下の場合のみ:** (i) 明示的に識別された法務質問がある場合、および／または (ii) ドキュメントへの GitLab 署名のために法務スタンプが必要な場合。

### GitLab の財務情報および保険証明書のリクエスト

1. 保険証明書のリクエストについては、SFDC で法務ケースを開いてください。**当社の保険証明書は GitLab の機密情報であり、配布前に NDA または合意された Subscription 条項が必要です。**
2. GitLab の財務情報については、GitLab は公開企業であり、その公開ファイリングは SEC.gov または[GitLab の Investor Relations ウェブサイト](https://ir.gitlab.com/financial-information/sec-filings) で見つけることができます

### エスカレーションプロセス

顧客またはパートナーが重要な非標準条項をリクエストしており、トランザクションが GitLab のリーダーシップによる追加の考慮を必要とする場合は、[GitLab エスカレーションプロセス](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/)（「プロセス」）に従ってください。プロセスは、初期しきい値の考慮、事項が適切なレベルのレビューを受けることの確認、エスカレーションの適切な文書化に関する指示など、重要な非標準リクエストをリーダーシップにエスカレートする前に考慮すべき要因を定めています。
**注 このドキュメントは GitLab チームメンバーのみが利用可能です。**

### 名称変更または支配権変更のリクエスト

時折、GitLab は、会社の法的名称の変更または会社の支配権の変更を概説する通知を顧客またはパートナーから受け取ります。以下の手順は、顧客またはパートナーのアカウントを SFDC で更新するプロセスを概説しています。

1. 顧客が名称変更通知を Sales/Ecosystems に提供します。
2. Sales/Ecosystems が SFDC で法務リクエストを開きます。
3. 法務は、名称変更か支配権変更かを確認します:

    a. **名称変更のみ** の場合、顧客が財務文書、W9 または W8BEN を Sales/Channels に提供します。

    - Sales/Ecosystems がドキュメントを SFDC にアップロードします。
    - 法務は提供されたドキュメントをレビューし、必要に応じて名称変更を文書化するための Amendment を起草します。
    - 法務は、顧客／パートナーのレビューと実行のために Sales/Ecosystems に提供します。
    - Sales/Ecosystems Ops は、SFDC で該当する情報を更新します。
    - 法務は、Sales/Ecosystems Op の作業が完了したことを確認した上で、法務ケースをクローズします。

4. **支配権の変更** の場合、法務はトランザクションのカテゴリ（買収、ダイベスチャー、資産売却、合併、破産）を確認します。

    - 法務は顧客／パートナーのドキュメントと既存の契約をレビューします。
    - 法務は適切な譲渡文書を起草し、顧客／パートナーに送信するため Sales に提供します。
    - 顧客／パートナーが署名された同意ドキュメントを Sales/Ecosystems に提供します。
    - Sales/Ecosystems Ops は、SFDC で該当する情報を更新します。
    - 法務は、Sales/Ecosystems Op の作業が完了したことを確認した上で、法務ケースをクローズします。

### 法務コマーシャルカバレッジモデル {#legal-commercial-coverage-model}

1. 地域＆セグメント別の GitLab 法務カバレッジモデルの概要を提供する[法務カバレッジモデル](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/#legal-coverage-model) をレビューしてください。**注: これは GitLab チームメンバーのみが利用できます**
2. このリソースは個人の連絡先情報を提供しますが、顧客に関連するニーズがある場合は、該当する手順に従って法務リクエストを開いてください。
3. このモデルはガイドであり、割り当てられる特定のチームメンバーは現在のワークフローと専門知識を考慮することに注意してください。

### GitLab Issues でのクロスファンクショナルなコラボレーション {#collaborating-cross-functionally-with-gitlab-issues}

SFDC の外部で処理する必要のある事項（例: プロジェクトベースの作業、または SFDC アクセスのないチームメンバーからの入力が必要なトピック）で、法務チームの注意が必要な場合は、(i) [Legal and Compliance プロジェクト](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues) で Issue を開き、(ii) 適切な Issue テンプレートを選択し、(iii) ラベル *legal-commercial::to-do* を適用し、(iv) どの法務チームメンバーと協力するかが分かっている場合は、それらをアサインとして含めてください。これにより法務チームの利益のために[Commercial Legal Issue Board](https://gitlab.com/groups/gitlab-com/-/boards/5411841) が更新され、チームが適切にピックアップおよび／または割り当てできるようになります。また、ステータスを指定するために以下のラベルを使用します:

- *legal-commercial:in progress* は、コマーシャル法務チームが Issue に積極的に取り組んでいることを意味します。
- *legal-commercial:pending requester* は、Issue が進捗する前にリクエスターが満たす必要のある要件またはタスクをコマーシャル法務チームが持っていることを意味します。
- *legal-commercial:done* は、コマーシャル法務チームが Issue の自分の部分を完了したことを意味します。

### 法務コールのためのベストプラクティス {#best-practices-for-a-legal-call}

法務と顧客またはパートナーの法務代理人との間のコール検討時のベストプラクティスを概説する GitLab [法務ベストプラクティスリソース](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/#best-practices-for-a-legal-call) をレビューしてください。
**注: これは GitLab チームメンバーのみが利用できます**

### トレーニング (LevelUp) 認定購入のリクエスト {#request-for-training-levelup-certification-purchases}

トレーニング認定バウチャーは Order Form を介して購入でき、LevelUp で交換されます。

Sales 向け Order Form プロセス:

- 顧客が注文している認定とその数量を特定する;
- Salesforce で完全で正確な見積もりを生成する;
- 修正された認定 Order Form の準備のため Salesforce で法務ケースを開く;
- 法務ケースの Chatter で Deal Desk に ping し、Order Form の Word Doc をリクエストする;
- 法務は、購入されている認定に基づいた書面の手順に従って Order Form を修正します。

### トライアルまたは評価契約のリクエスト {#request-for-a-trial-or-evaluation-agreement}

GitLab Software への無料アクセスを希望するすべての顧客は、GitLab の Subscription Agreement に従って統治される GitLab Software へのアクセスのための[無料トライアル](https://gitlab.com/-/trials/new) を開始するよう導かれる必要があります。無料トライアルは通常、顧客が内部評価のために使用し、該当する場合、GitLab がガイドするより関与した[価値の証明](/handbook/solutions-architects/playbooks/pov/) もサポートできます。

顧客がトライアルプロセスを拒否し、別個の評価契約を持つことを強く主張する場合、営業チームメンバーまたはソリューションアーキテクトは:

- リクエストフォームと共に評価契約をリクエストするための法務リクエストを開きます。
- 法務リクエストには、(i) Area Sales Manager またはそれ以上からの承認のリクエストを含み、(ii) 顧客の連絡先情報、評価の長さ、ユーザー数など、リクエストフォームを完了するための該当する詳細を設定する必要があります。

必要な承認を取得した上で、該当する法務チームメンバーは、評価の詳細を設定したリクエストフォームを、顧客と GitLab による実行のために提供します。リクエストフォームと GitLab Software への無料アクセスは、リクエストフォームに添付された評価契約の条項に従います。

リクエストフォームが実行されたら、営業チームメンバーまたはソリューションアーキテクトは、SFDC の顧客のアカウントにドキュメントを保存する必要があります。営業チームメンバーは、該当する期間とユーザー数の GitLab Software への無料アクセスを有効化するため、SFDC で Sales Support をタグ付けします。

### 法務からの非標準 Go-To-Market および価格設定のリクエスト

非標準 GTM 構造の販売関連リクエスト、価格設定とパッケージングのバリエーション（例: OEM）を含むものは、おそらく法務支援を必要としますが、適切なクロスファンクショナルなステークホルダーとマネタイゼーションリクエストを適切にチェックするため、リクエスターによって Product ボード[こちら](https://gitlab.com/gitlab-com/Product/-/issues/new) で Issue を開くことから始める必要があります。**monetization-intake** テンプレートまたは **monetization-intake-simple** テンプレートのどちらかを選択してください。作成されると、Issue は内部レビュー、コメント、承認のために適切なステークホルダーにアラートを送信します。法務は Issue の進捗をフォローし、適切なステークホルダーが承認された構造について明確なガイダンスを提供した後、関連する契約または非標準の言語の起草を開始します。

## 教育的

### GitLab 契約の概要

1. GitLab は、GitLab Subscription Agreement に従ってそのソフトウェア（オンプレミスと SaaS の両方）を提供し、GitLab Professional Services Agreement に従ってそのプロフェッショナルサービスを提供します。当社のオンラインバージョンは[こちら](https://about.gitlab.com/terms/) で確認できます。
2. GitLab は、サブスクリプション条項の過去のバージョンを含めることで完全な透明性を提供します。これらは Agreement History セクション内で見つけることができます。
3. Subscription Agreement は、以下のいずれかによって同意されます: (i) 顧客が GitLab ウェブサイトを介してソフトウェアを購入（またはダウンロード）する際にクリックスルーする、(ii) 顧客によって署名された注文書で参照される、(iii) 交渉されたサブスクリプション契約に署名する、(iv) 顧客が認可されたパートナーを介して購入している場合、パートナーを介してパススルーされる。
4. 交渉のしきい値を満たすネットニュー顧客の場合、サブスクリプションとプロフェッショナルサービスの条項の両方をカバーする単一の契約をリクエストするため、法務リクエストを開くことができることに注意してください。
5. GitLab には、パートナーが以下を可能にする複数の Exhibit を含むことができる[マスターパートナー契約](/handbook/legal/reseller-agreement/) があります: (i) リセル、(ii) リファラル、または (iii) GitLab ソフトウェアおよびプロフェッショナルサービスの配布。

### GitLab はいつ交渉するか？

GitLab には、いつ、どの程度標準条項を交渉するかを決定する特定のしきい値があります。GitLab は、[こちら](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/) に詳述されているように交渉に参加することを検討します。
**注: これは GitLab チームメンバーのみが利用できます**

ネット ARR しきい値要件が満たされている場合、営業チームメンバーは、最新の契約テンプレートを依頼するため法務リクエストを開く必要があります。最新のバージョンの契約ではないかもしれないため、契約テンプレートをローカルドライブに保存しないでください。営業チームメンバーが裁量を使い、顧客との適切な期待を設定するため、割り当てられた法務チームメンバーとアプローチを話し合うことを強くお勧めします。以下の Subscription Agreement の基礎を参照してください。交渉が避けられないかもしれませんが、以下の含意と、潜在的な交渉のトーンを確立する最善の方法を考慮することは常に価値があります:

1. **GitLab の標準契約での交渉**: GitLab が偏差を受け入れる柔軟性は、Opportunity 額、Net ARR (NARR)、戦略的重要性、Landable Addressable Market (LAM) などの多くの要因に大きく結びついています。たとえば、未来の LAM が重要でない $30K Opportunity / NARR では、最小限の変更が予想されます。

    - *チャネルパートナーに関する注: パートナーに関しては、交渉の適格性はパートナーの分類（Open Partner または Select Partner）から生じるため、Select パートナーのみが条項を交渉できます。*

2. **顧客の契約テンプレートでの交渉**: NARR に関係なく、顧客の契約は、私たちが販売するソフトウェアの種類、ソフトウェアのライセンス方法、およびプロフェッショナルサービスの場合、ソフトウェアの実装方法とは無関係で、場合によっては完全に対立する条項をほぼ常に持ちます。

     顧客の契約を活用すると決定された場合、信頼と透明性のレベルを確立するため、割り当てられた法務チームメンバーと協力して顧客と先制的にメッセージし、期待を設定するのがベストプラクティスです。これは、広範な修正と条項を最終化するための増加した時間枠が予想されることを知って行います。

    - *エコシステムパートナーに関する注: GitLab のパートナープログラムと GitLab がパートナーを有効にする方法により、パートナーのフォーム契約を活用することがはるかに困難になります。前進する前に、複数のクロスファンクショナルなステークホルダーへの整合と追加のレベルの精査が必要になります。そのようなプロセスをガイドしてもらうため、法務チームメンバーと協力してください。*

### オープンソースとは？

1. GitLab は、オープンコアビジネスモデルの一部としてオープンソースソフトウェアを使用しています。GitLab [オープンコアビジネスモデル](/handbook/company/stewardship/#business-model) について詳しく学んでください。
2. GitLab で使用する受け入れ可能および受け入れ不可能なオープンソースライセンスのリストを含むオープンソースの一般的な紹介については、[GitLab のオープンソース](/handbook/engineering/open-source/) を参照してください。
3. オープンソースソフトウェアに関する役立つ外部リソースは、[Opensource.com](https://opensource.com/) および [Open Source Initiative](https://opensource.org/) で見つかります。
4. GitLab のオープンソースプロジェクトは [gitlab.com/gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/) にあります。

### GitLab Subscription Agreement の基礎

🎥 [「Subscription Agreement Basics」のビデオ](https://www.youtube.com/watch?v=jaX81XXD55w) を視聴
{.h4}

**注: 上記のビデオは GitLab チームメンバーのみが利用できます**

### Business Associate Agreement (BAA)

Business Associate Agreement（BAA）または Business Associate Contract は、HIPAA（Health Insurance Portability and Accountability Act）に基づき、対象事業体とその事業関係者の間で法的拘束力のある契約であり、Protected Health Information（PHI）の取り扱いと保護方法を概説します。

なぜ GitLab は BAA に署名しないのか？

- GitLab は、製品とサービスを提供するために必要、または必要でない情報について透明性を保っています。
- GitLab は、Protected Health Information（PHI）の保存を必要としません、またそれを目的として設計されていません。さらに、組織として GitLab は、製品とサービスを提供するために PHI を受信、処理、保存、取引、またはその他の方法で所有することを望んでも必要としていません。Subscription Agreement の[第 14.3 節](/handbook/legal/subscription-agreement/#14-security--data-protection) をご覧ください。これは、GitLab が PHI を受け取るべきではないことを具体的にハイライトしています。そのため、GitLab は、Health Insurance Portability and Accountability Act (HIPAA) で定義される「Business Associate」の定義を満たさず、満たす意図もありません。
- 顧客が「偶発的な開示」について質問する場合、HIPAA 定義自体をハイライトしてください。これは次のように述べています: 「対象事業体に代わる Business associate 機能または活動には、クレーム処理、データ分析、利用レビュー、請求が含まれます。対象事業体への Business associate サービスは、法律、保険数理、会計、コンサルティング、データ集約、管理、行政、認定、または財務サービスに限定されます。**ただし、機能またはサービスが保護された健康情報の使用または開示を含まない場合、およびそのような人による保護された健康情報へのアクセスが偶発的である場合、人または組織は事業関係者と見なされません。**」

### データプライバシー、セキュリティと GitLab Data Processing Addendum

1. [GitLab プライバシーポリシー](https://about.gitlab.com/privacy/) は、GitLab が顧客の個人情報をどのように収集、使用、共有するか、および顧客がその個人情報に関してどのように権利を行使できるかを説明します。GDPR に関するよくある質問への回答を含む GitLab でのプライバシーコンプライアンスの追加詳細は、GitLab の[プライバシーコンプライアンスハンドブックページ](https://about.gitlab.com/privacy/#compliance-with-a-legal-obligation) で見つけることができます。
2. 通常「DPA」と呼ばれる GitLab Data Processing Addendum は、GitLab の[Terms of Use ページ](https://about.gitlab.com/terms/) からアクセスできます。GitLab Subscription Agreement に記載されているとおり、DPA の条項は法人顧客に自動的に適用されます。
3. データプライバシーについて質問する場合、顧客はセキュリティについても質問する可能性があります。一般に、そのような質問は[Field Security チーム](/handbook/security/security-assurance/field-security/) に向けるのが最善です。ただし、Field Security チームに連絡する前に、以下のリソースが役立つ可能性があります:
    -[Security Practices ハンドブックページ](/handbook/security/) は、GitLab の組織的セキュリティについての詳細を示します。
    -GitLab の[Trust Center](/handbook/security/security-assurance/field-security/customer-security-assessment-process/) は、GitLab の現在のセキュリティとコンプライアンスポリシーの詳細とドキュメントを提供します。
    -[アプリケーションをセキュアにする](https://docs.gitlab.com/ee/user/application_security/)、[インストールをセキュアにする](https://docs.gitlab.com/ee/security/) を説明する GitLab ドキュメントと GitLab [permissions ガイド](https://docs.gitlab.com/ee/development/permissions.html) は、GitLab によって処理される個人データをセキュアにするために顧客が取れる手順を理解するのに役立ちます。

### 契約ライフサイクル管理 (CLM) プロセス

1. Contract Lifecycle Management (CLM) は、Subscription Agreements 内の法務およびビジネス条項に関連するデータをキャプチャしてレポートするための法務チームを可能にするツールです。CLM の最終的な目標は、CPQ / quote-to-cash プロセス中に法務プロセスをより効率化し、内部リクエストプロセスへのより多くの可視性を提供することです。**このプロセスを促進するため、すべての実行済み契約書が、法務リクエストに割り当てられた法務チームメンバーに送信されるか、それ以外の方法でコピーされていることを確認してください。**

2. 契約書が完全に実行された後、法務チームが従う手順には以下が含まれます:
    - 完全に実行された契約書をアップロード。これは営業チームメンバーによって既に SFDC アカウントに保存されているはずです；
    - アップロードされる契約書に関連する情報を持つ Intake Form を完了；そして
    - 「Save」を押す
3. CLM に契約書をアップロードすることで、Intake Form を介して提供された情報が CLM に保存されます。完全に実行されたバージョンは、SFDC の場所に加えて、CLM リポジトリにも保存されます。
 **注: これは GitLab チームメンバーのみが利用できます。**

### コンテンツのリクエスト

- あなたとチームに役立つ将来のコンテンツについて、常にリクエストすることを奨励されます。[こちら](https://forms.gle/2zznmLFznSqJAQUH6) のフォームを完成させるだけです。
