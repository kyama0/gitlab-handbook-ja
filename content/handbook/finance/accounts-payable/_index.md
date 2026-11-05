---
title: Accounts Payable
decription: >-
  This page contains GitLab's Accounts Payable department policies, procedures
  and guidelines.
upstream_path: /handbook/finance/accounts-payable/
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
translated_at: "2026-11-05T14:29:10.809889+00:00"
translator: claude
stale: false
lastmod: "2026-11-04T20:19:30+01:00"
---

このページには GitLab の Accounts Payable 部門のポリシー、手順、ガイドラインが記載されています。私たちの目標は、チームメンバーと外部パートナーの双方への支払いをタイムリーに行えるようにすることです。また、買掛金処理に関連するハンドブックの他の領域への便利なリンクも提供しています。

## <i class="far fa-paper-plane"></i> はじめに {#introduction}

Accounts Payable（一般的に AP と呼ばれます）へようこそ。質問の大半は以下のセクションで回答が見つかるはずです。お探しのものが見つからない場合は、私たちに連絡してください:

- **Compass**: `accountspayable`
- **メール**: `ap@gitlab.com`

## <i class="fas fa-bullseye"></i> 一般ガイドライン {#general-guidelines}

- ベンダーは請求書を処理するために ZIP にオンボーディングする必要があります。
- 契約合計金額が $5000 を超えるすべての購入/サービスには発注書（PO）が **必要** です。ただし [PO 例外ポリシー](/handbook/finance/procurement/#what-are-the-exceptions-to-the-po-policy)に該当する場合は除きます。年間合計 <$5000 のベンダーからの単発購入は、PO 例外ポリシーに従って PO なしで処理できます。
- 請求書のコピーに PO 番号を必ず明記してください。PO なしの請求書（PO 例外ポリシーに従って承認されたもの）の場合は、ZIP で「Request Payment for Non-PO backed Invoices」を提出してください。
- すべての請求書は 10% の PO 許容範囲の対象となります。この許容範囲を超える超過分は次のように扱われます:
  - $1,000 USD（または現地通貨換算額）までの金額は AP チームがレビューし、承認のため FP&A に回付します。
  - $1,000 USD を超える金額は処理されず、PO 変更リクエストが必要となります。
- ベンダーには、ZIP Portal を使用して直接請求書をアップロードし、PO と照合することを強く推奨します。ベンダーが ZIP 経由で請求書を提出できない場合は、PDF コピーを ap@gitlab.com に送信できます。
- 支払いランは、月末決算の週や主要な祝日を除き、木曜日に実行されます。支払いはその後数日以内に送金され、ベンダーの銀行に届くまでに 1 〜 5 営業日かかる場合があります。これは国、通貨、選択された支払い方法によって異なります。
- 請求書は請求書の支払期限に厳密に従って支払われます。**「緊急支払い」** リクエストは、請求書が ZIP で完全に承認されている限り、次に利用可能な支払いランで支払われます。**AP は当日支払いリクエストには対応できません**。
- サプライヤーは NetSuite Electronic Payments、ACH、または Wire のみで支払われます。AP は小切手支払いを発行しません。

## <i class="fas fa-file-invoice"></i> 買掛金処理 {#accounts-payable-processing}

1. ベンダー請求書 - これらの請求書は ZIP で PO 付きまたは PO なしで処理されます。ベンダーは ZIP に設定/オンボーディングされている必要があり、請求書には処理に必要なすべての情報（請求書番号、請求書日付、支払い条件、PO 番号、請求書金額、通貨、サービス日付/期間）が含まれている必要があります。見積書、注文書、契約書、契約は請求書処理には有効ではなく、「Invoice」のみが許可されます。
    - 請求書が PO 例外ポリシーに該当しない場合、処理のために AP チームに送る前に、請求書に対応する PO があることを確認してください。
    - PO 付きの請求書の場合、処理を進めるために PO がすでに承認されていることを確認し、AP チームがそのセクションを確認/監視できないため、PO に請求書を添付しないでください。
    - PO に請求書を処理するための十分な残高があることを確認してください。完全にマッチした、またはすでにクローズされた PO 番号をベンダーに提供しないでください。双方に混乱を生じる可能性があります。
    - PO 変更リクエスト（例：現在の PO に資金を追加する）を行う必要がある場合は、ZIP で変更リクエストを提出するか、#procurement チャンネルにサポートを依頼してください。
    - ベンダーは、PO Flip メソッドを使用して ZIP Portal で請求書を処理できます。
    - ベンダーは請求書を AP@gitlab.com に送ることもできます。処理の遅延を避けるため、請求書のコピーまたはメール本文に PO 番号を明記する必要があります。
    - PO なしの請求書については、ZIP で「Request Payment for Non-PO backed invoices」を提出してください。
    - PO なしで請求書が受領された場合、AP チームが GitLab DRI に連絡し、PO の作成をリクエストします。PO が作成されたら、DRI は処理を進めるために PO 番号を AP チームにメールで送る必要があります。
2. 給与計算請求書 - これらは Payroll チームから処理のために提供される請求書で、Netsuite に手動で入力されます。承認サインが請求書に明示されています。
    - $500,000 USD 以上の請求書には、Payroll チームから 2 名の署名者（Manager と Director）が必要です。
    - 会計コードは給与支払いの銀行取引トラッカーに記載する必要があります。

3. 特別請求書 - 主に払い戻しに関するものです（例：スピーカー払い戻し、面接候補者払い戻し、元チームメンバー払い戻し、BOD 払い戻し）。
    - テンプレートが必要で、ベンダー名/払い戻し対象者名、請求書日付、支払い条件、請求書金額、通貨、サービス日付/期間など、必要なすべての情報が含まれている必要があります。払い戻しリクエストには領収書がサポートドキュメントとして必要です。
    - テンプレートには受益者の完全な銀行情報が含まれている必要があります。該当しない場合は N/A を入力してください。
        - 銀行名:
        - 受益者名:
        - 受益者住所:
        - 口座番号:
        - IBAN:
        - Routing/ABA 番号:
        - Wire 番号:
        - Swift Code/BIC:
        - Sort Code:
        - Transit Number および Institution Number:
        - IFSC Code:（インド向け）
        - BSB Code:（オーストラリア向け）
    - スピーカー払い戻しの場合は、スピーカーが参加したイベントの関連 PO をお知らせください。PO に合わせて経費を記録します。PO 詳細は払い戻しテンプレートまたはメールに明記できます。

## <i class="fas fa-receipt"></i> 買掛金支払い {#accounts-payable-payments}

- 請求書を支払うための最初のステップは、適切な [購買プロセス](/handbook/finance/procurement/)をレビューすることです。
- 請求書は請求書の支払期限、またはベンダー契約の支払い条件のいずれか早い方に従って支払われることに注意してください。
- **AP は当日の支払いリクエストには対応できません**。上記のプロセスに従い、支払い前にすべての承認が取得されていることを確認する必要があります。
- 支払いは毎週 **木曜日** に設定され、それぞれの支払いシステムを通じてベンダーに資金がリリースされます。送金がベンダーに届くまで、所在地と利用銀行により数日かかる場合があります。
  - 木曜日の支払いランに請求書を含めるには、水曜日の終業時（EOD）までに受領され、完全に承認されている必要があります。支払いランのスケジュールについて毎週リマインダーを送信していますので、確認してください。
- 手動支払いは **以下にのみ** 適用可能です:
  - 給与計算請求書
  - スピーカー払い戻し
  - 元チームメンバー払い戻し
  - 面接候補者払い戻し
  - BOD 払い戻し
  - クロスカレンシー支払い
  - 緊急ベンダー支払い
  - 税金支払い（送金参照番号が必要）
  - カスタマー返金
  - 中継銀行情報を必要とする支払い

## <i class="fas fa-receipt"></i> ZIP バーチャルカード (Brex) {#zip-virtual-card-brex}

GitLab がサプライヤーに対して推奨する支払い方法は、サプライヤー請求書をサポートドキュメントとして提供する電子資金振替です。サプライヤーでこのオプションが利用できない場合、一時的なクレジットカードであるバーチャルカードを代替支払い方法として使用できます。

## <i class="fab fa-gitlab fa-fw"></i> Fedex {#fedex}

- GitLab に代わってパッケージを送る必要があるとき、私たちのメイン宅配業者アカウントは FedEx にあります。
- 最初のステップは、#AccountsPayable チャンネルで AP に連絡して、コーポレートアカウント番号をリクエストすることです。
- パッケージを送るとき、**送付者は送付者欄の GitLab Inc の下に自分の名前、またはコストセンターの正式名称（例：Marketing - Field Marketing）を必ず記入してください**。完全なコストセンターがわからない場合は、Workday アプリケーション内に進み（Profile アイコンをクリック > Job をクリック > Organization を選択 . Cost Center を探します）。
- AP が宅配料金を適切にコード化する能力を妨げる、正しい情報を提供しない人は、将来会社のアカウントを使用することが許可されません。

## <i class="fab fa-gitlab fa-fw"></i> グローバル出張と経費 {#global-travel-and-expense}

- [会社のお金の使い方](/handbook/finance/spending-company-money/)のページをレビューして、あなたの支出が GitLab の [経費ポリシー](/handbook/finance/expenses/)内であることを確認してください。
- GitLab はすべての出張関連のフライト、ホテル、列車旅行、車両レンタル予約に **Navan Travel** を、すべての従業員払い戻し可能経費に **Navan Expense** を利用しています。
- これには **Physical Cards** の準備も含まれます。
- [Physical Cards](https://internal.gitlab.com/handbook/finance/expenses/#5-physical-cards) - この Navan Physical Card ポリシーの目的は、会社運営に必要な購入を促進し、効率的にプロセスを早めることです。制限は $10,000 USD に設定されており、承認された Issue のリクエストに対して提供されます。
- 経費について一般的な質問がある場合は、[Compass](/handbook/eta/corporate-it/compass/compass-guide/#how-to-get-help-3-ways-to-reach-compass)にチケットを提出してください。
- Compass の導入に伴い - すべての質問は、[一般経費関連の問い合わせ](https://app.serval.com/new-request)の Compass チケットプロセスを通じて AP Admin チームにお寄せください。
- 経費に関する詳細なガイダンスについては、経費ポリシーおよび FAQ ページもレビューしてください。これらの便利な情報リンクは、Compass ツールの Expenses > Quick links セクションにあります。

## <i class="fas fa-stream"></i> クイックリンク {#quicklinks}

### <i class="far fa-flag"></i> 参考リンク {#reference-link}

- [ZIP エンドユーザーガイド](/handbook/business-technology/enterprise-applications/guides/zip-guide/)
- [Navan Expense スタックガイド](/handbook/finance/accounts-payable/tech-stack-guide-liquid/)
