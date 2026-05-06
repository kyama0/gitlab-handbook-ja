---
title: 買掛金（Accounts Payable）
description: >-
  このページにはGitLabの買掛金部門のポリシー、手順、ガイドラインが記載されています。
upstream_path: /handbook/finance/accounts-payable/
upstream_sha: 8aa1a9efd98433fb2296996366f1023b5675ea70
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

このページにはGitLabの買掛金（Accounts Payable）部門のポリシー、手順、ガイドラインが記載されています。私たちの目標は、チームメンバーと外部パートナーの両方に対してタイムリーな支払いを実現することです。また、買掛金の手続きに関連するハンドブックの他のセクションへの有用なリンクも提供しています。

## <i id="biz-tech-icons" class="far fa-paper-plane"></i> はじめに

買掛金（Accounts Payable）、通称APへようこそ。以下のセクションで大半の質問に対する回答が見つかるはずです。お探しの情報が見つからない場合は、私たちにご連絡ください。

- **チャットチャンネル**: `#accountspayable`
- **メール**: `ap@gitlab.com`

## <i id="biz-tech-icons" class="fas fa-bullseye"></i> 一般ガイドライン

- ベンダーは請求書を処理するためにCoupaにオンボードされている必要があります。
- 契約総額が$5,000を超えるすべての購入・サービスは、[PO例外ポリシー](/handbook/finance/procurement/#what-are-the-exceptions-to-the-po-policy)に該当しない限り、購買注文書（PO）が**必須**です。年間合計$5,000未満の一回限りの購入または購入は、PO例外ポリシーに基づいてPOなしで処理できます。
- 請求書コピーにPO番号を記載してください。Non-PO請求書の場合は、請求先の関連部門を明記してください。
- ベンダーは、CoupaサプライヤーポータルでPO番号を使用して直接請求書をアップロードし、POと照合することを強く推奨します。ベンダーがCoupa経由で請求書を提出できない場合は、ap@gitlab.comにPDFコピーをメールで送信できます。
- 支払いランは毎週木曜日に完了します。木曜日に支払いに選定される請求書は、その週の火曜日の業務終了までに完全に承認され、ベンダーのオンボードが完了している必要があります。支払いはその後数日以内に行われ、ベンダーの銀行に届くまでに1〜5営業日かかる場合があります。これは国、通貨、選択した支払い方法によって異なります。
- 請求書は請求書の支払期限を厳守して支払われます。**「緊急支払い」**リクエストは、完全に承認されベンダーのオンボードが完了している限り、次回の支払いランに含まれます。**APは当日支払いリクエストには対応できません**。
- サプライヤーへの支払いはCoupaPay、ACH、または電信送金のみです。APは小切手での支払いは行いません。
- 顧客返金の締め切りは毎月25日です。25日以降に受領した顧客返金リクエストは翌月に支払われます。

## <i class="fas fa-file-invoice"></i> 買掛金処理

1. ベンダー請求書 - これらの請求書はCoupaでPO付きまたはPOなしで処理されます。ベンダーはCoupaでセットアップまたはオンボードされている必要があり、請求書には処理を進めるために、請求書番号、請求書日付、支払い条件、PO番号、請求書金額、通貨、サービス日付・期間などのすべての必要情報が含まれている必要があります。見積書、注文書、合意書、契約書は請求書処理には有効ではなく、「Invoice（請求書）」のみが許可されます。
    - 請求書がPO例外ポリシーに該当しない場合は、APチームに処理のために送付する前に、請求書に対応するPOがあることを確認してください。
    - PO付き請求書の場合は、処理を進めるためにPOがすでに承認されていることを確認し、APチームがその箇所を確認・監視できないため、請求書をPOに添付しないでください。
    - POに請求書を処理するのに十分な残高があることを確認してください。すでに完全に照合済みまたはクローズしたPO番号をベンダーに提供しないでください。両者に混乱を生じさせる可能性があります。
    - PO変更リクエストが必要な場合（例：現在のPOへの資金追加）は、調達チームのこちらの[ビデオチュートリアル](https://www.loom.com/share/c932bc6308fd46939766dee333ca8401)をご参照ください。
    - ベンダーはCoupaサプライヤーポータルでPOフリップ方式を使用して請求書を処理できます。この[リンク](https://compass.coupa.com/en-us/products/product-documentation/supplier-resources/for-suppliers/coupa-supplier-portal/set-up-the-csp/invoices/create-or-edit-an-invoice)で**「POから請求書を作成する」**のビデオチュートリアルをご覧ください。
    - ベンダーはAP@gitlab.comに請求書を送付することもできます。処理の遅延を避けるために、PO番号を請求書コピーまたはメール本文に記載する必要があります。
    - GitLab DRIが送付するNon-PO請求書については、代わりに請求先部門とCoupaの承認者を記載してください。
    - POなしで請求書が受領された場合、APチームはGitLab DRIに連絡し、POの作成を依頼します。POが作成されたら、DRIは処理を進めるためにAPチームにPO番号をメールで連絡する必要があります。
    - 外部サプライヤーフォームは、ベンダーがCoupaで有効化されるようにAPチームが最終承認を行います。最終承認を提供するため、ベンダーはこれら2つの重要書類を提出する必要があります。
        - 米国ベンダーはW-9、米国外ベンダーはW-8
        - 署名入り銀行レターヘッドの銀行情報
    - Coupaの詳細については、こちらの[Coupaガイドリンク](/handbook/business-technology/enterprise-applications/guides/coupa-guide/)をご参照ください。さらなるサポートが必要な場合は[調達ハンドブックページ](/handbook/business-technology/enterprise-applications/guides/zip-guide/#how-to-initiate-a-new-request)もご確認ください。

1. 給与請求書 - 給与チームが処理のために提供するこれらの請求書は、Netsuiteに手動で入力されます。承認の署名は請求書に記載されています。
    - USD $500,000以上の金額の請求書は、給与チームの2名の署名（マネージャーとディレクター）が必要です。
    - コーディングは給与銀行トラッカーに記載する必要があります。

1. 特別請求書 - これらは主に払い戻し（スピーカー払い戻し、面接候補者払い戻し、元チームメンバー払い戻し、BOD払い戻しなど）に関連しています。
    - テンプレートが必要で、払い戻しを受ける人のベンダー名・氏名、請求書日付、支払い条件、請求書金額、通貨、サービス日付・期間などすべての必要情報が含まれている必要があります。払い戻しリクエストの証拠書類として領収書が必要です。
    - すべてのテンプレートには受取人の完全な銀行情報が含まれている必要があります。該当しない場合はN/Aと記入してください。
        - 銀行名（Bank Name）:
        - 受取人名（Beneficiary Name）:
        - 受取人住所（Beneficiary Address）:
        - 口座番号（Account Number）:
        - IBAN:
        - ルーティング/ABAナンバー（Routing/ABA number）:
        - 電信番号（Wire Number）:
        - Swiftコード/BIC（Swift Code/BIC）:
        - ソートコード（Sort Code）:
        - トランジットナンバーと機関番号（Transit Number And Institution Number）:
        - IFSCコード（IFSC Code）:（インドの場合）
        - BSBコード（BSB Code）:（オーストラリアの場合）
    - スピーカー払い戻しについては、スピーカーが参加したイベントの関連POをお知らせください。費用の記録をPOと同じように整合させるためです。POの詳細は払い戻しテンプレートまたはメールに記載できます。

## <i class="fas fa-receipt"></i> 買掛金支払い

- 請求書を支払ってもらうための最初のステップは、適切な[調達プロセス](/handbook/finance/procurement/)を確認することです。
- 請求書は請求書の支払期限またはベンダーの契約上の支払い条件のいずれか早い方に従って支払われることにご注意ください。
- **APは当日支払いリクエストを処理できません**。上記のプロセスに従い、支払い前にすべての承認を取得する必要があります。
- 支払いは毎週**木曜日**にセットアップされ、それぞれの支払いシステムを通じてベンダーに振り込まれます。振込がベンダーに届くまで、所在地や利用銀行によって数日かかる場合があります。
  - 木曜日の支払いランに含めるには、火曜日までに受領し完全に承認されている必要があります。**例えば**、6月3日（木）に支払いバッチを行う場合、請求書は6月1日（火）の業務終了までに承認されている必要があります。
- 手動支払いは以下の場合**のみ**適用されます。
  - 給与請求書
  - スピーカー払い戻し
  - 元チームメンバーの払い戻し
  - 面接候補者の払い戻し
  - BOD払い戻し
  - クロスカレンシー支払い
  - Coupaの1日あたりの上限を超える支払い（単一請求書でUSD 200万超）
  - Coupaの週次カットオフを満たすためのAP裁量（Coupaバッチあたりへ USD 200万）
  - 緊急ベンダー支払い
  - 税金支払い（電信送金の参照番号が必要）
  - 顧客返金
  - 銀行の仲介機関詳細が必要な支払い

## <i class="fas fa-receipt"></i> Coupa バーチャルカード

GitLabのサプライヤーへの優先支払い方法は、サプライヤーの請求書を裏付け書類として提供する電子資金移動です。サプライヤーがこの方法に対応していない場合、一時的なクレジットカードである[バーチャルカード](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/)を代替支払い方法として使用できます。

## <i class="fab fa-gitlab fa-fw"></i> FedEx

- GitLab を代表して荷物を送る必要がある場合、主要な宅配業者アカウントはFedExです。
- 最初のステップは#AccountsPayableチャンネルでAPに連絡し、法人アカウント番号を要求することです。
- 荷物を送る際、**発送者は送付者フィールドにGitLab Inc.の下に自分の名前を記入するか、完全なコストセンター（例：Marketing - Field Marketing）を記入する必要があります。** 完全なコストセンターがわからない場合は、Workdayアプリケーション（プロフィールアイコンをクリック > 職務をクリック > 組織を選択 > コストセンターを確認）を確認してください。
- APが配送料を適切にコーディングする能力を妨げる正確な情報を提供しなかった場合、将来的に会社アカウントの使用が許可されなくなります。

## <i class="fab fa-gitlab fa-fw"></i> グローバル出張・経費

- 支出がGitLabの[経費ポリシー](/handbook/finance/expenses/)の範囲内であることを確認するために、[会社のお金の使い方](/handbook/finance/spending-company-money/)のページをご確認ください。
- GitLabは、すべての出張関連の航空券、ホテル、列車旅行、レンタカー予約に**Navan Travel**を使用し、すべての従業員精算可能な経費に**Navan Expense**を使用しています。
- また、**Navan購買カード**と**フィジカルカード**の準備も含まれています。
- [Navan購買カード](https://internal.gitlab.com/handbook/finance/expenses/#6-purchase-cards) - APチームのみが使用するバーチャルカードで、オンボーディング時に新しいチームメンバーにホームオフィスセットアップのための$1,500 USD（または現地通貨相当）のスティペンドを提供するためだけに使用されます。
- [フィジカルカード](https://internal.gitlab.com/handbook/finance/expenses/#5-physical-cards) - このNavanフィジカルカードポリシーの目的は、会社運営に必要な購入を容易にし、効率的にプロセスを迅速化することです。上限は$10,000 USDに設定されており、承認されたIssueのリクエストに応じて提供されます。
- 経費に関する一般的な質問がある場合は、[HelpLab](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#how-do-i-use-helplab)にチケットを提出してください。
- HelpLabの開始に伴い、[一般経費関連お問い合わせ](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=f9c88a6a47f3f55067429ee0026d43b6)のHelpLabチケットプロセスを通じてAP管理チームにすべての質問を送るようご協力をお願いしています。
- 経費についてのより詳しいガイダンスは、経費ポリシーとFAQページもご確認ください。これらの参考情報リンクはHelpLabツールの経費 > クイックリンクセクションにあります。

## <i id="biz-tech-icons" class="fas fa-stream"></i> クイックリンク

<a href="/handbook/finance/accounting/#procure-to-pay" class="btn btn-lg btn-primary"><i class="fa-solid fa-file-invoice-dollar"></i> 請求書と支払い</a>
<a href="../accounts-payable/corp-credit-cards/" class="btn btn-lg btn-primary"><i class="fa-regular fa-credit-card"></i> 法人クレジットカード</a>
<a href="../procurement/" class="btn btn-lg btn-primary"><i class="fa-solid fa-cart-plus"></i> 調達</a>

### <i id="biz-tech-icons" class="far fa-flag"></i> 参照リンク

- [Coupaテックスタックガイド](/handbook/finance/accounts-payable/tech-stack-guide-coupa/)
- [Navan Expenseスタックガイド](/handbook/finance/accounts-payable/tech-stack-guide-liquid/)
- [買掛金向けCoupaバーチャルカードガイド](/handbook/finance/accounts-payable/coupa-virtual-card-guide-for-accounts-payable/)
