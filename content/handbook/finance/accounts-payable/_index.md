---
title: 買掛金（Accounts Payable）
decription: >-
  このページにはGitLabの買掛金部門のポリシー、手順、ガイドラインが記載されています。
upstream_path: /handbook/finance/accounts-payable/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-06T06:00:45-07:00"
---

このページにはGitLabの買掛金部門のポリシー、手順、ガイドラインが記載されています。私たちの目標は、チームメンバーと外部パートナーの双方への支払いをタイムリーに行えるようにすることです。また、買掛金処理に関連するハンドブックの他の領域への便利なリンクも提供しています。

## <i id="biz-tech-icons" class="far fa-paper-plane"></i> はじめに

買掛金（一般的にAPと呼ばれます）へようこそ。質問の大半は以下のセクションで回答が見つかるはずです。お探しのものが見つからない場合は、私たちに連絡してください:

- **チャットチャンネル**: `#accountspayable`
- **メール**: `ap@gitlab.com`

## <i id="biz-tech-icons" class="fas fa-bullseye"></i> 一般ガイドライン

- ベンダーは請求書を処理するためにCoupaにオンボーディングする必要があります。
- 契約合計金額が$5000を超えるすべての購入／サービスには発注書（PO）が **必要** です。ただし [PO例外ポリシー](/handbook/finance/procurement/#what-are-the-exceptions-to-the-po-policy) に該当する場合は除きます。年間合計$5000未満の単発購入は、PO例外ポリシーに従ってPOなしで処理できます。
- 請求書のコピーにPO番号を必ず明記してください。PO非対応の請求書の場合は、課金対象の関連部門を明記してください。
- すべての請求書は10%のPO許容範囲の対象となります。この許容範囲を超える超過分は次のように扱われます:
  - $1,000 USD（または現地通貨換算額）までの金額はAPチームによってレビューされ、承認のためFP&Aにルーティングされます。
  - $1,000 USDを超える金額は処理されず、PO変更リクエストが必要となります。
- ベンダーはCoupa Supplier Portalを使用して直接請求書をアップロードし、POと照合することを強く推奨します。ベンダーがCoupa経由で請求書を提出できない場合は、PDFコピーをap@gitlab.comに送信できます。
- 支払いランは木曜日に実行されます。木曜日に支払い対象として選定される請求書は、その週の火曜日の終業までに完全に承認され、ベンダーが正常にオンボーディングされていなければなりません。支払いは続く日に送金され、ベンダーの銀行に届くまでに1〜5営業日かかる場合があります。これは国、通貨、選択された支払い方法によって異なります。
- 請求書は請求書の支払期限に厳密に従って支払われます。**「緊急支払い」** リクエストは、完全に承認され、ベンダーが正常にオンボーディングされている限り、次に利用可能な支払いランで支払われます。**APは当日支払いリクエストには対応できません**。
- サプライヤーはNetSuite Electronic Payments、ACH、またはWireのみで支払われます。APは小切手支払いを発行しません。
- カスタマー返金支払いの締切は毎月25日です。25日以降に受領したカスタマー返金リクエストは翌月に支払われます。

## <i class="fas fa-file-invoice"></i> 買掛金処理

1. ベンダー請求書 - これらの請求書はCoupaでPO付きまたはPO非対応で処理されます。ベンダーはCoupaに設定／オンボーディングされている必要があり、請求書には処理に必要なすべての情報（請求書番号、請求書日付、支払い条件、PO番号、請求書金額、通貨、サービス日付／期間）が含まれている必要があります。見積書、注文書、契約書、契約は請求書処理には有効ではなく、「Invoice」のみが許可されます。
    - 請求書がPO例外ポリシーに該当しない場合、処理のためにAPチームに送る前に、請求書に対応するPOがあることを確認してください。
    - PO対応の請求書の場合、処理を進めるためにPOがすでに承認されていることを確認し、APチームがそのセクションを確認／監視できないため、POに請求書を添付しないでください。
    - POに請求書を処理するための十分な残高があることを確認してください。完全にマッチした、またはすでにクローズされたPO番号をベンダーに提供しないでください。双方に混乱を生じる可能性があります。
    - PO変更リクエスト（例：現在のPOに資金を追加する）を行う必要がある場合は、Procurementチームの [このビデオチュートリアル](https://www.loom.com/share/c932bc6308fd46939766dee333ca8401) を参照してください。
    - ベンダーは、PO Flipメソッドを使用してCoupa Supplier Portalで請求書を処理できます。[このリンク](https://compass.coupa.com/en-us/products/product-documentation/supplier-resources/for-suppliers/coupa-supplier-portal/set-up-the-csp/invoices/create-or-edit-an-invoice) で **"Create an invoice from a PO"** のビデオチュートリアルを見つけてください。
    - ベンダーは請求書をAP@gitlab.comに送ることもできます。処理の遅延を避けるため、請求書のコピーまたはメール本文にPO番号を明記する必要があります。
    - GitLab DRIによって送信されたPO非対応の請求書については、代わりに課金対象部門とCoupa承認者を明記してください。
    - POなしで請求書が受領された場合、APチームがGitLab DRIに連絡し、POの作成をリクエストします。POが作成されたら、DRIは処理を進めるためにPO番号をAPチームにメールで送る必要があります。
    - 外部サプライヤーフォームはAPチームによって最終承認される必要があり、これによりベンダーがCoupaで有効化されます。最終承認を提供するために、ベンダーはこれら2つの重要なドキュメントに準拠する必要があり、これにより私たちはサプライヤーフォームをキューで適切に確認できます。
        - 米国ベンダーの場合はW9、非米国ベンダーの場合はW8
        - 署名された銀行レターヘッドの銀行詳細
    - Coupaについて詳しくは、[Coupaガイドリンク](/handbook/business-technology/enterprise-applications/guides/coupa-guide/) をご覧ください。さらにサポートが必要な場合は、[購買ハンドブックページ](/handbook/business-technology/enterprise-applications/guides/zip-guide/#how-to-initiate-a-new-request) も確認できます。

1. 給与計算請求書 - これらはPayrollチームから処理のために提供される請求書で、Netsuiteに手動で入力されます。承認サインが請求書に明示されています。
    - $500,000 USD以上の請求書には、Payrollチームから2つの署名者（マネージャーとディレクター）が必要です。
    - コードはpayroll banking trackerに提供する必要があります。

1. 特別請求書 - 主に払い戻しに関するものです（例：スピーカー払い戻し、面接候補者払い戻し、元チームメンバー払い戻し、BOD払い戻し）。
    - テンプレートが必要で、ベンダー名／払い戻し対象者名、請求書日付、支払い条件、請求書金額、通貨、サービス日付／期間など、必要なすべての情報が含まれている必要があります。払い戻しリクエストには領収書がサポートドキュメントとして必要です。
    - すべてのテンプレートには受益者の完全な銀行情報が含まれている必要があります。該当しない場合はN/Aを入力してください。
        - 銀行名:
        - 受益者名:
        - 受益者住所:
        - 口座番号:
        - IBAN:
        - Routing/ABA番号:
        - Wire番号:
        - Swift Code/BIC:
        - Sort Code:
        - Transit NumberおよびInstitution Number:
        - IFSC Code:（インド向け）
        - BSB Code:（オーストラリア向け）
    - スピーカー払い戻しの場合は、スピーカーが参加したイベントの関連POをお知らせください。同じPOとして経費の記録を整列します。PO詳細は払い戻しテンプレートまたはメールに明記できます。

## <i class="fas fa-receipt"></i> 買掛金支払い

- 請求書を支払うための最初のステップは、適切な [購買プロセス](/handbook/finance/procurement/) をレビューすることです。
- 請求書は請求書の支払期限、またはベンダー契約の支払い条件のいずれか早い方に従って支払われることに注意してください。
- **APは当日の支払いリクエストには対応できません**。上記のプロセスに従い、支払い前にすべての承認が取得されていることを確認する必要があります。
- 支払いは毎週 **木曜日** に設定され、それぞれの支払いシステムを通じてベンダーに資金がリリースされます。送金がベンダーに届くまで、所在地と利用銀行により数日かかる場合があります。
  - 木曜日の支払いランに請求書を含めるには、火曜日までに受領され完全に承認されている必要があります。**例えば**、6月3日（木曜日）に支払いバッチを行う場合、6月1日（火曜日）の終業までに請求書が承認されている必要があります。
- 手動支払いは **以下にのみ** 適用可能です:
  - 給与計算請求書
  - スピーカー払い戻し
  - 元チームメンバー払い戻し
  - 面接候補者払い戻し
  - BOD払い戻し
  - クロスカレンシー支払い
  - Coupaの日次制限を超える支払い（単一請求書でUSD 2M以上）
  - CoupaのウィークリーカットオフのためのAP裁量（CoupaバッチあたりUSD 2M）
  - 緊急ベンダー支払い
  - 税金支払い（wire参照が必要）
  - カスタマー返金
  - 銀行仲介詳細を必要とする支払い

## <i class="fas fa-receipt"></i> Coupaバーチャルカード

GitLabがサプライヤーに対して推奨する支払い方法は、サプライヤー請求書をサポートドキュメントとして提供する電子資金振替です。サプライヤーでこのオプションが利用できない場合、一時的なクレジットカードである [バーチャルカード](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/) を代替支払い方法として使用できます。

## <i class="fab fa-gitlab fa-fw"></i> Fedex

- GitLabに代わってパッケージを送る必要があるとき、私たちのメイン宅配業者アカウントはFedExにあります。
- 最初のステップは、#AccountsPayableチャンネルでAPに連絡して、コーポレートアカウント番号をリクエストすることです。
- パッケージを送るとき、**送付者はGitLab Inc下の送付者フィールドに自分の名前を入れる必要があります。または自分の完全なコストセンター（例：Marketing - Field Marketing）を入れる必要があります**。完全なコストセンターがわからない場合は、Workdayアプリケーション内に進み（Profileアイコン > Job > Organization > Cost Centerを探します）。
- APが宅配料金を適切にコード化する能力を妨げる、正しい情報を提供しない人は、将来会社のアカウントを使用することが許可されません。

## <i class="fab fa-gitlab fa-fw"></i> グローバル出張と経費

- [Spending Company Money](/handbook/finance/spending-company-money/) のページをレビューして、あなたの支出がGitLabの [経費ポリシー](/handbook/finance/expenses/) 内であることを確認してください。
- GitLabはすべての出張関連のフライト、ホテル、列車旅行、車両レンタル予約に **Navan Travel** を、すべての従業員払い戻し可能経費に **Navan Expense** を利用しています。
- これには **Navan Purchase Card** と **Physical Cards** の準備も含まれます。
- [Navan Purchase Card](https://internal.gitlab.com/handbook/finance/expenses/#6-purchase-cards) - これらはAPチームによってのみ使用されるバーチャルカードで、新しいチームメンバーにオンボーディング時にホームオフィスセットアップ用の$1,500 USD（または現地通貨換算額）の手当を提供するためにのみ使用されます。
- [Physical Cards](https://internal.gitlab.com/handbook/finance/expenses/#5-physical-cards) - このNavan Physical Cardポリシーの目的は、会社運営に必要な購入を促進し、効率的にプロセスを早めることです。制限は$10,000 USDに設定されており、承認されたIssueのリクエストに対して提供されます。
- 経費について一般的な質問がある場合は、[HelpLab](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#how-do-i-use-helplab) にチケットを提出してください。
- HelpLabのローンチに伴い - すべての質問を [一般経費関連の問い合わせ](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=f9c88a6a47f3f55067429ee0026d43b6) のためのHelpLabチケットプロセスを通じてAP Adminチームに向けることを丁寧にリクエストします。
- 経費に関する詳細なガイダンスについては、Expense PolicyおよびFAQページもレビューしてください。これらの便利な情報リンクは、HelpLabツールのExpenses > Quick linksセクションにあります。

## <i id="biz-tech-icons" class="fas fa-stream"></i> QuickLinks

<a href="/handbook/finance/accounting/#procure-to-pay" class="btn btn-lg btn-primary"><i class="fa-solid fa-file-invoice-dollar"></i> 請求書と支払い</a>
<a href="../accounts-payable/corp-credit-cards/" class="btn btn-lg btn-primary"><i class="fa-regular fa-credit-card"></i> コーポレートクレジットカード</a>
<a href="../procurement/" class="btn btn-lg btn-primary"><i class="fa-solid fa-cart-plus"></i> 購買</a>

### <i id="biz-tech-icons" class="far fa-flag"></i> 参考リンク

- [Coupa Tech Stack Guide](/handbook/finance/accounts-payable/tech-stack-guide-coupa/)
- [Navan Expense Stack Guide](/handbook/finance/accounts-payable/tech-stack-guide-liquid/)
- [Coupa Virtual Card guide for Accounts Payable](/handbook/finance/accounts-payable/coupa-virtual-card-guide-for-accounts-payable/)
