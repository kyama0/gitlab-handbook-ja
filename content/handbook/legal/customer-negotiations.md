---
title: Sales Guide | GitLab Legal との協働
description: このリソースは、顧客との交渉において GitLab Legal と協働する際の運用面・教育面の要素について、GitLab Sales チームを支援するものです
upstream_path: "/handbook/legal/customer-negotiations/"
upstream_sha: "877082e5cd4baeabe3d6e802b3b4b1efdb6573f1"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-21T12:17:18-04:00"
---

 この Handbook リソースの目的は、あらゆる種類の go-to-market のコマーシャル Legal リクエストやプロセスをナビゲートする上で、すべての GitLab チームメンバーに明確な道筋を提供することです。以下の情報は、皆さんが特定の情報を自分自身で見つけてアクセスできるよう支援するとともに、GitLab Commercial Legal チームと最善の形でつながり、その支援を調整する方法を明確に示すことを目的としています。

注: この Handbook ページ内で言及する「GitLab Legal」または「Legal」は、すべて Commercial Legal チームを指します。

(1) [運用面（Operational）](#operational) - 案件をクローズするための要件、リーガルオペレーションに関する一般的な FAQ（Finance や Deal Desk との関連を含む）を含め、GitLab Legal とどう協働し、どう関与するか。

(2) [教育面（Educational）](#educational) - 営業サイクル中に Sales をよりよく支援するために、Legal とその契約の仕組みを学ぶこと。顧客から法務関連の質問があったときに Sales がより自信を持てるようにするための、先回りのアドバイスや教育を含みます。

このページに含まれる情報は、以下のとおり「運用面（Operational）」と「教育面（Educational）」の 2 つの明確なカテゴリーに整理されています。

| 運用面（OPERATIONAL） | 教育面（EDUCATIONAL） |
| ------ | ------ |
| [**Commercial Legal への連絡方法**](#how-to-reach-commercial-legal) | [**GitLab 契約の概要**](#overview-of-gitlab-agreements)  |
| [**契約への署名取得方法**](#how-to-get-an-agreement-signed)（NDA、DPA、Letters of Authorization を含む） | [**GitLab はいつ交渉するか**](#when-does-gitlab-negotiate)  |
| [**SFDC での Export Review のクリア**](#export-review-in-sfdc) | [**オープンソースソフトウェアとは何か**](#what-is-open-source) |
| [**ベンダーリクエストフォームの記入**](#completing-vendor-request-forms) | [**GitLab Subscription Agreement（「Subscription Agreement」）の基礎**](#gitlab-subscription-agreement-basics) |
| [**GitLab の財務情報および保険証明書のリクエスト**](#requests-for-gitlab-financial-information-and-insurance-certificates) | [**Business Associate Agreements**](#business-associate-agreements-baas) |
| [**エスカレーションプロセス**](#escalation-process) | [**データプライバシーと GitLab Data Processing Addendum**](#data-privacy-security-and-the-gitlab-data-processing-addendum) |
| [**名称変更または支配権の変更のリクエスト**](#request-for-name-change-or-change-in-control) | [**Contract Lifecycle Management（CLM）プロセス**](#contract-lifecycle-management-clm-process) |
| [**Legal Commercial Coverage Model**](#legal-commercial-coverage-model) | |
| [**GitLab Issue: 部門横断での協働**](#collaborating-cross-functionally-with-gitlab-issues) |  |
| [**Legal Call のベストプラクティス**](#best-practices-for-a-legal-call) |  |
| [**トレーニング（LevelUp）認定資格購入のリクエスト**](#request-for-training-levelup-certification-purchases)|  |
| [**評価契約のリクエスト**](#request-for-a-trial-or-evaluation-agreement) |  |
| [**新規または非標準の Go-To-Market マネタイズ構造のリクエスト**](https://gitlab.com/gitlab-com/Product/-/issues/new) | |

## OPERATIONAL

### Commercial Legal への連絡方法

**状況が異なれば、異なるアプローチが必要です。収益関連のリクエストに関する大半のケースでは、Legal チームに関与してもらう適切な方法は、以下のプロセスに従って Salesforce（SFDC）で Legal Case または Ironclad ワークフローを作成することです。**

1. Legal Case を作成するには、SFDC の顧客 Opportunity の右上にあるドロップダウンメニューから「Request Support」ボタンを選択し、次のドロップダウンメニューから「Legal」を選択します。**Opportunity が存在しない場合は、$0 の Opportunity を開き、このセクションに記載の手順に従ってください。**
    - リクエストに **NDA または MSA** が関わる場合は、[**Ironclad ワークフロー**を開始する](https://docs.google.com/document/d/12UcfqG7Pnt2NbrjwF7OwxSxsyersFINem_qtb3BkOgw/edit?usp=sharing)プロセスに従ってください。署名を迅速化するためのセルフサービスオプションがあることに注意してください。
    - NDA と MSA は、最終的にすべてのテンプレートタイプを含むことになる Ironclad ロールアウトのフェーズ 1 でした。
2. Legal Case または Ironclad ワークフローが正しく作成されると、リクエストはキューにログされ、適切な Legal チームメンバーが自分自身をそのケースに割り当て、必要に応じて依頼者と連絡を取ります。

#### Legal Case を開くための手順

1. SFDC の Opportunity の上部にある「Request Support」を選択します。
1. 「Request Support」を選択した後に表示されるドロップダウンメニューで「Legal」を選択します。
1. 各フィールド（すなわち「Type of Legal Request」および「Summary of Actions」）について最も適切な回答を選び、「Next Steps」セクションにすべての関連詳細を追加し、関連するドキュメントをアップロードした上で「Submit」を押します。**可能な限り多くの詳細を追加し、リクエストの緊急度や期限を含めてください。これにより、Legal チームメンバーがそれに応じて計画を立て、優先順位を付けられます。**
1. 適切に送信されると、新しい Legal Case が Legal チームのキューに追加され、適切なチームメンバーがその Legal Case を自分自身に割り当てて皆さんを支援します。
1. また、新しく作成された Legal Case の Chatter セクションおよびメールで自動メッセージが届きます。これは、Legal Request の種類に応じて、Legal チームが皆さんを支援するために必要なドキュメントおよび/または情報を概説するものです。あるいは、皆さんのクエリに直接答えるリソースが案内される場合もあります。このメッセージを確認し、必要な情報がすべて提供され、ドキュメントが添付されていることを確認してください。
    - Legal Case はレビューされ回答され、依頼者が @ メンションされます。
    - リクエストが対応されると、Legal Case は Legal チームメンバーによってクローズされます。
1. Legal Case を開く際に何か問題が発生した場合は、Slack の #legal に連絡して支援を求めてください。
1. SFDC で @Legal をタグ付けしないでください。チーム全体に不要な通知が送られます。
1. 顧客の特定の Opportunity に関するすべての契約またはドキュメントは、同じ Legal Case に添付すべきです（例: 顧客がサブスクリプション契約とオーダーフォームの両方にレッドラインを返してきた場合、両方を同じ Legal Case にアップロードすべきです）。

**リマインダー: 各 Opportunity に対して開く SFDC Legal Case は 1 つだけにすべきです。**

### 契約への署名取得方法

1. Sales 組織の誰も契約に署名する権限を持っていません。一部の個人のみが GitLab を代表して署名できます。[こちら](https://internal.gitlab.com/handbook/company/authorization-matrix/)（随時更新）の Authorization Matrix を参照してください。ご質問がある場合は、該当するリクエストを支援している Legal チームメンバーに連絡してください。
1. すべての契約は、署名されるために、ドキュメント上での Legal の承認が必要です。これは次の 2 つのいずれかの方法で行われます。
     - 実行可能なバージョンに到達した時点で、Legal チームメンバーが契約にスタンプを押す。
     - 契約が Ironclad で処理された場合、承認した Legal チームメンバーが署名ワークフローで最初にイニシャルを適用する。
     - **注: Legal スタンプは署名ではありません**

1. 契約が Legal によってスタンプされたら、[DocuSign プロセス](/handbook/sales/field-operations/order-processing/#how-to-send-an-order-form-to-the-customer-for-signature-via-docusign)に従って、SFDC 内で署名のために契約を送信します。
1. すべての Sales チームメンバーは DocuSign にアクセスできます。使い方についてご質問があれば Sales Ops と協働してください。**完全に締結されたすべての契約について、必ず該当する Legal チームメンバーを CC に入れてください**

#### Non-Disclosure Agreement（NDA）

[Ironclad Process Guide for Requesters](https://docs.google.com/document/d/12UcfqG7Pnt2NbrjwF7OwxSxsyersFINem_qtb3BkOgw/edit?usp=sharing) の手順に従ってください。

#### Data Processing Addendum（DPA）

GitLab は、署名済みバージョンの DPA を Terms of Use のウェブサイトに掲載しています。Subscription Agreement に記載のとおり、この DPA はすべての顧客に適用され、副署する必要はありません。さらに、DPA のヘッダーに記載のとおり、顧客による Subscription Agreement の承諾は、DPA への同意として扱われます。

#### Letters of Authorization（LOA）

[Partner Operations ページ](/handbook/sales/field-operations/channel-operations/#letters-of-authorization)で、パートナーが Letter of Authorization をリクエストする方法を確認してください。

**LOA レビュー手順:**

1. パートナーが GitLab のパートナー契約を締結、またはその他の方法でクリックして承諾すると、パートナーが LOA をリクエストできるよう、認証情報およびパートナーポータルへのアクセスが提供されます。パートナーが LOA のリクエストを開始すると、Ecosystem Operations は `partnersupport@gitlab.com` 宛に DocuSign 経由でリクエストを受け取り、そのパートナーが有効かつ承認されたパートナーであることを確認します。Ecosystem Operations が確認すると、Legal は `loa@gitlab.com` 宛に DocuSign 経由でメールを受け取ります。
2. DocuSign プロセスがパートナーによって開始され、Ecosystem Operations がリクエスト元のパートナーが有効かつ承認されたパートナーであることを確認すると、LOA は Legal チームにルーティングされて Legal Stamp が追加され、その後 GitLab の承認された署名者に実行のためにルーティングされます。完了すると、完全に締結された LOA は DocuSign 経由で GitLab Legal とパートナーに配布されます。
3. パートナーがカスタム条件を含む非標準の LOA をリクエストする場合は、上記のとおり SFDC で Legal Request を開いてください。

### SFDC での Export Review

1. Legal のみが輸出コンプライアンスツールでフラグ付けされたアカウントをクリアできます。これらのリクエストの支援について他のグループをタグ付けしないでください。
2. 詳細情報および手順については、[Trade Compliance Handbook ページ](https://internal.gitlab.com/handbook/sales/sales-operations/#trade-compliance-navex-risk-rate)を参照してください。

### RFP プロセス

Request for Proposal（「RFP」、RFI、RFQ、RFX と呼ばれることもあります）の完了に関しては、[RFP Process handbook ページ](/handbook/security/security-assurance/field-security/field-security-rfp/)で、Sales チームメンバーが DRI として既存の Answer Base を活用し、部門横断のステークホルダーから関連情報を収集する方法に関する情報をご覧ください。

### ベンダーリクエストフォームの記入

**ベンダーリクエストフォームを記入するのは Sales チームメンバーの責任です**

1. これらのドキュメントは通常、(i) 適切な GitLab ステークホルダーによるレビューが必要な、法務以外のさまざまな要素を含み、また (ii) [Company Information ページ](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/company-information)、GitLab [Investor Relations ページ](https://ir.gitlab.com/)、GitLab Handbook、または GitLab.com ですでに公開されている情報を含むことが多いです。Sales チームメンバーは、Legal チームに連絡する前に、まずこれらの公開リソースを参照することで、法務レビューの時間を大幅に削減できます。

    **Company Information ページに含まれるもの:**

    - 各 GitLab 事業体に関する住所/情報
    - すべての銀行情報
    - ECCN Number
    - NAICS Code
    - Dun and Bradstreet Number
    - およびその他の関連する企業情報

2. Company Information ページに見つからない情報については、Sales チームメンバーは残りの事項について適切な GitLab 部門のオーナーを特定すべきです。財務リクエストを調整するには、[Sales Order Process](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/company-information) ページから Deal Desk に連絡するか、あるいは Finance Slack チャンネル内で Finance チームに関与してもらってください。正しい部門が不明な場合、Legal が適切なルーティングについてガイダンスを提供できます。
3. GitLab の W9 は Finance の [Forms ページ](/handbook/finance/#forms)にあります
4. GitLab の [Trust Center](https://trust.gitlab.com/) に見つからないセキュリティ関連の質問がある場合、Sales チームメンバーは [Customer Assurance Activities ページ](/handbook/security/security-assurance/field-security/customer-security-assessment-process)を通じて Field Security Team に関与してもらうべきです。
5. 税務固有の質問については、Sales チームメンバーは Tax Slack チャンネル内で、またはすでに既存の SFDC ケースがある場合は SFDC chatter で、Tax チームに関与してもらうべきです。Tax Certificate のリクエストについては、Finance チームに 'tax@gitlab.com' 宛にメールしてください。

**次の場合にのみ Legal Request を開いてください:** (i) 明示的に特定された法的質問がある場合、および/または (ii) ドキュメント上の GitLab 署名のために Legal スタンプが必要な場合。

### GitLab の財務情報および保険証明書のリクエスト

1. 保険証明書のリクエストについては、SFDC で Legal Case を開いてください。**当社の Certificate of Insurance は GitLab の秘密情報であり、配布前に NDA または合意済みの Subscription 条件のいずれかが整っている必要があることに注意してください。**
2. GitLab の財務情報に関しては、GitLab は公開会社であり、その公開提出書類は SEC.gov または [GitLab の Investor Relations ウェブサイト](https://ir.gitlab.com/financial-information/sec-filings)で見つけられます。

### エスカレーションプロセス

顧客またはパートナーが重要な非標準条件をリクエストし、その取引が GitLab のリーダーシップによる追加検討に値する場合は、[GitLab Escalation Process](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/)（以下「本プロセス」）に従ってください。本プロセスは、重要な非標準リクエストをリーダーシップにエスカレーションする前に考慮すべき要素を定めており、初期のしきい値の検討、その事項が適切なレベルのレビューを受けられるようにすること、エスカレーションを適切に文書化するための指示などを含みます。
**注: このドキュメントは GitLab チームメンバーのみが利用できます。**

### 名称変更または支配権の変更のリクエスト

GitLab は、顧客またはパートナーから、その会社の法的名称の変更、または会社の支配権の変更を概説する通知を受け取ることが時折あります。以下の手順は、SFDC で顧客またはパートナーのアカウントを更新するためのプロセスを概説しています。

1. 顧客が Sales/Ecosystems に名称変更通知を提供します。
2. Sales/Ecosystems が SFDC で Legal Request を開きます。
3. Legal が名称変更か支配権の変更かを確認します。

    a. **名称変更のみ**の場合、顧客は財務ドキュメント、W9 または W8BEN を Sales/Channels に提供します。
        - Sales/Ecosystems がドキュメントを SFDC にアップロードします。
        - Legal は提供されたドキュメントをレビューし、必要に応じて名称変更を文書化する Amendment を起草します。
        - Legal は、顧客/パートナーのレビューおよび実行のために Sales/Ecosystems に提供します。
        - Sales/Ecosystems Ops が SFDC の該当情報を更新します。
        - Legal は、Sales/Ecosystems Ops の作業が完了したことを確認した上で、Legal Case をクローズします。

4. **支配権の変更**の場合、Legal は取引カテゴリー（買収、事業売却、資産売却、合併、支払不能）を確認します。

    - Legal は顧客/パートナーのドキュメントおよび既存の契約をレビューします。
    - Legal は適切な移転ドキュメントを起草し、顧客/パートナーに送付するために Sales に提供します。
    - 顧客/パートナーは署名済みの同意ドキュメントを Sales/Ecosystems に提供します。
    - Sales/Ecosystems Ops が SFDC の該当情報を更新します。
    - Legal は、Sales/Ecosystems Ops の作業が完了したことを確認した上で、Legal Case をクローズします。

### Legal Commercial Coverage Model

1. リージョン別・セグメント別の GitLab Legal カバレッジモデルの概要を提供する [Legal Coverage Model](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/#legal-coverage-model) を確認してください。**注: これは GitLab チームメンバーのみが利用できます**
2. このリソースは個別の連絡先情報を提供していますが、顧客に関連するニーズがある場合は、該当する手順に従って Legal Request を開いてください。
3. このモデルはガイドであることに注意してください。割り当てられる具体的なチームメンバーは、現在のワークフローおよび専門知識を考慮します。

### GitLab Issue を使った部門横断での協働

SFDC の外で処理する必要があり（例: プロジェクトベースの作業、または SFDC アクセスを持たないチームメンバーからのインプットが必要なトピック）、かつ Legal チームの対応が必要な事項については、(i) [Legal and Compliance Project](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues) で Issue を開き、(ii) 適切な Issue テンプレートを選択し、(iii) ラベル *legal-commercial::to-do* を適用し、(iv) どの Legal チームメンバーと協働するかが分かっている場合は、その人を Assignee に含めてください。これにより、Legal チームのために [Commercial Legal Issue Board](https://gitlab.com/groups/gitlab-com/-/boards/5411841) が更新され、チームが適切にピックアップおよび/または割り当てできるようになります。また、ステータスを示すために以下のラベルを使用しています。

- *legal-commercial:in progress* は、Commercial Legal チームがその Issue に積極的に取り組んでいることを意味します。
- *legal-commercial:pending requester* は、Issue が進行する前に依頼者が満たさなければならない要件またはタスクが Commercial Legal チームにあることを意味します。
- *legal-commercial:done* は、Commercial Legal チームが Issue の自分たちの担当部分を完了したことを意味します。

### Legal Call のベストプラクティス

Legal と顧客またはパートナーの法務担当者との間の通話を検討する際のベストプラクティスを概説した、GitLab の [Legal Best Practices Resource](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/#best-practices-for-a-legal-call) を確認してください。
**注: これは GitLab チームメンバーのみが利用できます**

### トレーニング（LevelUp）認定資格購入のリクエスト

トレーニング認定バウチャーは、Order Form を通じて購入でき、LevelUp で引き換えられます。

Sales 向けの Order Form プロセス:

- 顧客が注文している認定資格とその数量を判断する。
- Salesforce で完全かつ正確な見積もりを生成する。
- 修正された認定 Order Form の準備のために Salesforce で Legal Case を開く。
- Legal Case の Chatter で Deal Desk に ping を送り、Order Form の Word ドキュメントをリクエストする。
- Legal は、購入される認定資格に基づき、書面による手順に従って Order Form を修正します。

### 評価契約のリクエスト

GitLab ソフトウェアへの無償アクセスを希望するすべての顧客は、GitLab ソフトウェアへのアクセスのために[無料トライアル](https://gitlab.com/-/trials/new)を開始するよう案内すべきです。これは GitLab の Subscription Agreement の対象となり、これに準拠します。無料トライアルは通常、顧客が内部評価のために使用するもので、該当する場合は、GitLab がガイドするより本格的な [proof of value](/handbook/solutions-architects/playbooks/pov/) をサポートすることもあります。

顧客がトライアルプロセスを断り、別個の Evaluation Agreement を強く希望する場合、Sales チームメンバーまたはソリューションアーキテクトは次を行うべきです。

- Request Form 付きの Evaluation Agreement をリクエストするための Legal Request を開く。
- Legal Request は、(i) Area Sales Manager 以上からの承認のリクエストを含み、(ii) 顧客の連絡先情報、評価の期間、ユーザー数など、Request Form を完成させるための該当する詳細を定めるべきです。

必要な承認を取得した上で、該当する Legal チームメンバーが、顧客と GitLab による実行のために評価の詳細を定めた Request Form を提供します。Request Form および GitLab ソフトウェアへの無償アクセスは、Request Form に添付される Evaluation Agreement の条件の対象となります。

Request Form が実行されたら、Sales チームメンバーまたはソリューションアーキテクトは、SFDC の顧客のアカウントにドキュメントを保存すべきです。その後、Sales チームメンバーは SFDC で Sales Support をタグ付けして、該当する期間およびユーザー数について顧客の GitLab ソフトウェアへの無償アクセスの有効化を支援してもらうべきです。

### Legal への非標準の Go-To-Market および価格設定のリクエスト

価格設定およびパッケージングのバリエーション（例: OEM）を含む、非標準の GTM 構造に関するすべての Sales 関連リクエストは、Legal の支援が必要になる可能性が高いですが、適切な部門横断のステークホルダーとともにマネタイズリクエストを適切に精査するため、依頼者が [こちら](https://gitlab.com/gitlab-com/Product/-/issues/new) の Product board で Issue を開くことから始めるべきです。**monetization-intake** テンプレートまたは **monetization-intake-simple** テンプレートのいずれかを選択してください。作成されると、その Issue は内部レビュー、コメント、承認のために適切なステークホルダーに通知します。Legal は Issue の進捗を追い、適切なステークホルダーが承認された構造について明確なガイダンスを提供した後、関連する契約または非標準の文言の起草を開始します。

## EDUCATIONAL

### GitLab 契約の概要

1. GitLab は、GitLab Subscription Agreement に従ってそのソフトウェア（オンプレミスと SaaS の両方）を提供し、GitLab Professional Services Agreement に従ってそのプロフェッショナルサービスを提供します。オンライン版は[こちら](https://about.gitlab.com/terms/)で見つけられます。
2. GitLab は、サブスクリプション条件の過去のバージョンを含めることで完全な透明性を提供します。これらは Agreement History セクション内で見つけられます。
3. Subscription Agreement は、次のいずれかによって合意されます。(i) 顧客が GitLab ウェブサイトを通じてソフトウェアを購入（またはダウンロード）する際にクリックスルーすること、(ii) 顧客が署名するオーダーフォームで参照されること、(iii) 交渉されたサブスクリプション契約に署名すること、または (iv) 顧客が認定パートナーを通じて購入する場合にパートナー経由で渡されること。
4. 交渉のしきい値を満たす新規顧客については、Subscription 条件と Professional Service 条件の両方をカバーする単一の契約をリクエストするために Legal Request を開ける場合があることに注意してください。
5. GitLab には、パートナーが GitLab のソフトウェアおよびプロフェッショナルサービスを (i) 再販、(ii) 紹介、または (iii) 配布することを可能にする複数の Exhibit を含めることができる [Master Partner Agreement](/handbook/legal/reseller-agreement/) があります。

### GitLab はいつ交渉するか

GitLab には、当社の標準条件をいつ、どの程度交渉するかを判断する際の一定のしきい値があります。GitLab は、[こちら](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-commercial/index.html/)に詳述するとおり、交渉に関与することを検討します。
**注: これは GitLab チームメンバーのみが利用できます**

net ARR のしきい値要件を満たす場合、Sales チームメンバーは最新の契約テンプレートを求めるために Legal Request を開かなければなりません。契約テンプレートはローカルドライブに保存しないでください。最新バージョンの契約ではない可能性があります。Sales チームメンバーは裁量を働かせ、割り当てられた Legal チームメンバーとアプローチを話し合って、顧客と適切な期待値を設定することを強く推奨します。以下の Subscription Agreement の基礎を参照してください。交渉は避けられないかもしれませんが、以下の影響と、潜在的な交渉のトーンを最善の形でどう設定するかを常に考慮する価値があります。

1. **GitLab の標準契約での交渉**: 逸脱に対応する GitLab の柔軟性は、Opportunity の金額、Net ARR（NARR）、戦略的重要性、Landable Addressable Market（LAM）など、多くの要因に大きく結びついています。例えば、将来の LAM が重要でない 3 万ドルの Opportunity / NARR では、最小限の変更が見込まれます。

    - *Channel Partner に関する注: パートナーに関しては、交渉の適格性はパートナーの分類（Open Partner または Select Partner）から生じ、Select パートナーのみが条件を交渉することを許可されます。*

2. **顧客の契約テンプレートでの交渉**: NARR にかかわらず、顧客の契約は、当社が販売するソフトウェアの種類、当社のソフトウェアのライセンス方法、およびプロフェッショナルサービスの場合は当社のソフトウェアの実装方法とは無関係な、場合によっては完全に相反する条件をほぼ常に含んでいます。

     顧客の契約を利用すると判断された場合、割り当てられた Legal チームメンバーと協働して、顧客に先回りでメッセージを伝え、期待値を設定することがベストプラクティスです。これにより、広範な修正が必要になり、条件の最終化までの時間が長くなる可能性が高いことを承知の上で、一定レベルの信頼と透明性を確立できます。

    - *Ecosystem Partner に関する注: GitLab のパートナープログラム、および GitLab がパートナーをどう支援するかにより、パートナーの定型契約を利用することははるかに難しくなります。それには複数の部門横断のステークホルダー間での足並みの揃え合わせと、前進する前の追加レベルの精査が必要になります。当該プロセスをガイドしてもらうために、Legal チームメンバーと協働してください。*

### オープンソースとは何か

1. GitLab は、そのオープンコアビジネスモデルの一環としてオープンソースソフトウェアを使用しています。GitLab の [Open Core Business Model](/handbook/company/stewardship/#business-model) について詳しく学んでください。
2. GitLab で使用する許容可能なオープンソースライセンスおよび許容できないオープンソースライセンスのリストを含む、オープンソースの一般的な紹介については、[Open Source at GitLab](/handbook/engineering/open-source/) を参照してください。
3. オープンソースソフトウェアに関する役立つ外部リソースは、[Opensource.com](https://opensource.com/) および [Open Source Initiative](https://opensource.org/) で見つけられます。
4. GitLab のオープンソースプロジェクトは [gitlab.com/gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/) で見つけられます。

### GitLab Subscription Agreement の基礎

🎥 [「Subscription Agreement Basics」ビデオ](https://www.youtube.com/watch?v=jaX81XXD55w)を見る
{.h4}

**注: 上記のビデオは GitLab チームメンバーのみが利用できます**

### Business Associate Agreements（BAAs）

Business Associate Agreement（BAA）または Business Associate Contract は、HIPAA（Health Insurance Portability and Accountability Act）に基づき、covered entity とその business associate との間の法的拘束力のある契約で、Protected Health Information（PHI）がどのように取り扱われ保護されるかを概説するものです。

GitLab はなぜ BAA に署名しないのか?

- GitLab は、当社の製品およびサービスを提供するために必要とする情報、または必要としない情報について透明性を保っています。
- GitLab は Protected Health Information（PHI）を必要とせず、また PHI を保存するように設計されてもいません。さらに、GitLab は組織として、当社の製品およびサービスを提供するために PHI を受領、処理、保存、取引、その他の方法で保有することを望んでおらず、その必要もありません。GitLab が PHI を受領すべきでないことを具体的に強調する Subscription Agreement の [Section 14.3](/handbook/legal/subscription-agreement/#14-security--data-protection) をご覧ください。そのため、GitLab は Health Insurance Portability and Accountability Act（HIPAA）に定義される「Business Associate」の定義を満たしておらず、また満たす意図もありません。
- 顧客が「incidental disclosures（付随的開示）」について質問した場合は、HIPAA の定義そのものを強調してください。それは次のように述べています。「covered entity を代理する business associate の機能または活動には、クレーム処理、データ分析、利用審査、請求が含まれます。covered entity への business associate のサービスは、法務、保険数理、会計、コンサルティング、データ集約、管理、運営、認定、または財務サービスに限定されます。**ただし、その機能またはサービスが保護対象保健情報の使用または開示を伴わず、当該者による保護対象保健情報へのアクセスがあったとしても付随的なものにとどまる場合、その者または組織は business associate とはみなされません。**」

### データプライバシー、セキュリティ、および GitLab Data Processing Addendum

1. [GitLab Privacy Policy](https://about.gitlab.com/privacy/) は、GitLab が顧客の個人情報をどのように収集、使用、共有するか、および顧客がその個人情報に関する権利をどのように行使できるかを説明しています。GDPR に関する多数のよくある質問への回答を含む、GitLab のプライバシーコンプライアンスに関する追加の詳細は、GitLab の [Privacy Compliance handbook ページ](https://about.gitlab.com/privacy/#compliance-with-a-legal-obligation)で見つけられます。
2. 通常「DPA」と呼ばれる GitLab Data Processing Addendum は、GitLab の [Terms of Use ページ](https://about.gitlab.com/terms/)からアクセスできます。GitLab Subscription Agreement に記載のとおり、DPA の条件は企業顧客に自動的に適用されます。
3. データプライバシーについて質問する際、顧客はセキュリティについても質問する場合があります。一般に、そのような質問は [Field Security Team](/handbook/security/security-assurance/field-security/) に向けるのが最善です。ただし、Field Security チームに連絡する前に、以下のリソースが役立つ場合があります。
    -[Security Practices handbook ページ](/handbook/security/)は、GitLab の組織的セキュリティに関する詳細を提供します。
    -GitLab の [Trust Center](/handbook/security/security-assurance/field-security/customer-security-assessment-process/) は、GitLab の現在のセキュリティおよびコンプライアンスポリシーの詳細とドキュメントを提供します。
    -[アプリケーションのセキュア化](https://docs.gitlab.com/ee/user/application_security/)、[インストールのセキュア化](https://docs.gitlab.com/ee/security/)の方法を説明する GitLab ドキュメント、および GitLab の [permissions guide](https://docs.gitlab.com/ee/development/permissions.html) は、顧客が GitLab によって処理される個人データをセキュアにするために講じられる手順を理解するのに役立ちます。

### Contract Lifecycle Management（CLM）プロセス

1. Contract Lifecycle Management（CLM）は、Legal チームがその Subscription Agreements の法的および事業上の条件に関連するデータを取得し報告できるようにするツールです。CLM の最終目標は、CPQ / quote-to-cash プロセス中に法務プロセスをより効率化し、内部リクエストプロセスへの可視性を高めることです。**このプロセスを円滑にするため、完全に締結されたすべての契約が、Legal Request に割り当てられた Legal チームメンバーに送付されるか、その他の方法で CC に入れられるよう、必ず確認してください。**

2. 契約が完全に締結された後に Legal チームが従う手順には、次が含まれます。
    - 完全に締結された契約（すでに Sales チームメンバーによって SFDC アカウントに保存されているはずのもの）をアップロードする。
    - アップロードされる契約に関連する情報を Intake Form に記入する。
    - 「Save」を押す
3. CLM で契約をアップロードすることにより、Intake Form を通じて提供された情報が CLM に保存されます。完全に締結されたバージョンは、SFDC 上の場所に加えて、CLM リポジトリに保存されます。
 **注: これは GitLab チームメンバーのみが利用できます。**

### コンテンツのリクエスト

- 皆さんやチームの役に立つ将来のコンテンツのリクエストは、常に歓迎します。[こちら](https://forms.gle/2zznmLFznSqJAQUH6)のフォームに記入するだけです。
