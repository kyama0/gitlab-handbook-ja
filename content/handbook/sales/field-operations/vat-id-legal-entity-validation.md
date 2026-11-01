---
title: "VAT ID と法人名の検証"
description: "新規の海外見込み顧客アカウントで、商談を受注登録できるようになる前に、GitLab が販売先顧客の VAT ID と法人名を取得して検証する方法。"
upstream_path: /handbook/sales/field-operations/vat-id-legal-entity-validation/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
lastmod: "2026-10-28T10:16:47-04:00"
translated_at: "2026-11-01T08:44:52.736278+00:00"
stale: false
translator: codex
---

## 概要 {#overview}

**2026 年 10 月 7 日**以降、新規の海外見込み顧客アカウントの商談には、アカウントの VAT ID と法人名を検証する要件が適用されます。

**この要件によって商談がブロックされることはありません。** 見積もり、注文書の作成、クローズには影響しません。検証が完了していない場合や成功していない場合でも、申請時に例外理由を選択することで商談を承認申請できます。例外について別途承認を得る必要はなく、事前のレビューも不要です。

### この要件によってブロックされる操作とされない操作 {#what-this-does-and-does-not-block}

| 操作 | ブロックされるか？ |
| --- | --- |
| 見積もり | ブロックされません |
| 注文書の作成 | ブロックされません |
| 承認申請 | ブロックされません。検証が未完了の場合は、申請時に例外理由を選択します。 |
| 商談のクローズ | ブロックされません |
| Zuora への送信と受注登録 | ブロックされません |

**「VAT ID」の意味。** このページ全体で、「VAT ID」および「VAT ID の検証」は、間接税の目的で事業者を識別するために使用するあらゆる納税者番号を指します。これには以下が含まれます。

- VAT 番号（例：EU や英国）
- GST 番号（例：オーストラリア、インド、シンガポール）
- 顧客の国で使用されるその他の納税者番号（TIN）

検証は、Salesforce からサードパーティーの納税者番号確認サービスである Fonoa への API 呼び出しで実行します。Fonoa は、その国の政府公式データベースで VAT ID を照合し、登録されている会社名と住所を返します。また、API 呼び出しで Fonoa に送信したデータの正確性に基づいて、検証結果を返します。Salesforce は Fonoa の結果をアカウントに保存し、Fonoa が返した登録名を Salesforce のアカウント名と比較します。

Salesforce のアカウントは、顧客の法人情報の正式な記録です。検証済みのアカウント名と VAT ID は注文書に表示され、商談を受注登録すると Zuora の請求アカウントに引き継がれます。

### この仕組みの目的 {#why-this-exists}

GitLab は、請求書に正しい VAT を適用するため、顧客の VAT ID と登記上の法人名を取得時に検証します。これにより、GitLab と顧客の双方が、誤った（還付を受けられない）VAT に直面する事態を防ぎます。

**販売先法人の有効な VAT ID 番号が重要な理由は何ですか？**

- GitLab にとって：VAT ID が無効または不一致の場合、本来請求すべき VAT が請求されていなかったことを意味します。その分は利息や罰金とともに GitLab の債務となり、後から顧客から回収できることはほとんどありません。
- 顧客にとって：VAT ID や住所が誤っている請求書は、ほとんどの法域で有効な税務上の請求書と認められず、仕入 VAT の還付を受けられません。そのため、請求された VAT が追加費用となります。

Account Executive（AE）がまだ顧客とやり取りしている取得時点で検証することで、誤ったデータが受注登録や請求に引き継がれるのを防ぎ、請求後に手動で修正を繰り返す必要をなくします。

## フェーズ 1：VAT 検証の適用基準 {#phase-1-criteria-for-when-vat-validation-applies}

より大きな導入計画の初期展開にあたるこの段階では、アカウントが以下の**両方**を満たす商談にこの要件が適用されます。

| 条件 | 値 |
| --- | --- |
| Account Type | Prospect |
| Account billing country | 米国とカナダ以外 |

いずれかの条件を満たさない場合、バナーは表示されず、検証も不要です。

理解しておくべき点が 2 つあります。

- この要件は、商談のサブスクリプション種別ではなく、アカウントの状態（見込み顧客か既存顧客か）によって決まります。将来的には、この要件を既存顧客にも拡大する予定です。
- **国内取引への影響はありません。** 米国とカナダのアカウントは完全に対象外です。

### 初期導入フェーズ（「フェーズ 1」）の対象外 {#out-of-scope-for-the-early-implementation-phase-phase-1}

- Web 直接購入とセルフサービス購入（後続フェーズで対応予定、時期未定）
- 更新、契約変更、追加購入（フェーズ 2 で対応予定）
- パートナーとリセラーのアカウント（後続フェーズで対応予定、時期未定）
- 米国とカナダの住所検証
- ラテン文字以外で返された登録名の翻訳（フェーズ 2 で対応予定）

## VAT 検証バナーのプロセス {#the-vat-validation-banner-process}

### ステップ 1 — ステージ 3 でメッセージが表示されます {#step-1--the-prompt-appears-at-stage-3}

ステージ 1 と 2 では何も表示されないため、初期段階の見込み評価を円滑に進められます。

**Stage 3 – Technical Evaluation**以降、検証が未完了である限り、商談にバナーが継続して表示されます。

> Please validate the VAT ID and Legal Entity Name. You cannot book the deal until this validation is complete.

バナーの文言は、システムの実際の動作より厳しい表現です。フェーズ 1 では、検証が未完了でも例外理由を選択すれば商談を承認申請でき、その例外を承認する人はいません。フェーズ 1 では、検証が完了しない箇所と理由を把握するため、意図的に制限を緩くしています。バナーには **Validate VAT ID | Legal Entity Name** ボタンがあり、検証に成功するまでステージ 4、5、6 を通じて表示され続けます。アカウントが検証済みの状態になると表示されなくなります。アカウント名を変更しないと判断した場合など、アカウントが検証済みの状態にならない場合、バナーは無期限に表示され続けます。ステップ 4 を参照してください。

![ステージ 3 の商談に表示される検証バナー](/images/sales/field-operations/vat-id-validation/stage-3-banner.png)

### ステップ 2 — 検証を実行します {#step-2--run-the-validation}

ボタンを選択すると、**VAT ID Validator**が開きます。アカウント名、ISO 国コード、登録済みの住所、現在の VAT/Tax ID が表示され、3 つのタブがあります。

![TIN 検証タブを表示した VAT ID 検証ツール](/images/sales/field-operations/vat-id-validation/validator-tin-validation.png)

#### TIN 検証タブ {#tin-validation-tab}

デフォルトのタブであり、ほとんどの場合に使用します。

1. 見込み顧客から提供された情報を使い、**VAT / Tax ID**を入力または確認します。
1. **TIN Type**を選択します。Business または Individual を選びます。これにより、Fonoa が適用する形式とチェックサムのルールが決まります。
1. **Validate VAT ID**を選択します。

Fonoa は、まず国ごとの形式の事前チェックを実行します。形式が不適合の場合、リクエストはデータベースに到達せず、ステータスは直ちに Invalid - Format に設定されます。

形式が適合していれば、Salesforce はステータスを "Pending" に設定し、ISO 国コードと VAT ID を使って Fonoa を呼び出し、応答が届くと自動的にレコードを更新します。ページを再読み込みする必要はありません。

#### 国ごとの要件 {#country-specific-requirements}

一部の国では、登録事業者名、UIN、登録住所の郵便番号など、追加の情報が必要です。見込み顧客にこれらの情報を依頼してください。該当する国には以下が含まれます。

- 中国
- クロアチア
- エジプト
- インド
- インドネシア
- リトアニア
- マレーシア
- メキシコ
- フィリピン
- ポーランド
- スペイン
- トルコ

#### 応答時間 {#response-time}

検証に必要な時間は国によって異なります。大部分の国では数秒で検証が完了します。一部の国では、検証に最大 3 分かかる場合があります。その場合は、検証のポップアップを閉じ、数分後に商談に戻ることをお勧めします。検証はバックグラウンドで継続し、Fonoa から受信した応答で VAT ID または法人名の検証ステータスフィールドを更新します。

#### TIN 検索タブ、または「逆引き検索」 {#tin-search-tab-or-reverse-lookup}

別の方法として、会社の**名前と住所**で検索し、納税者番号を見つけることもできます。この機能は、顧客が VAT ID を提供できない場合に使用してください。

TIN 検索は、すべての国で利用できるわけではありません。Fonoa は約 120 か国で形式の検証に対応していますが、逆引き検索に対応しているのは約 40 か国です。非対応の国では、検索時に国名を示す明示的なエラーが返されます。その場合、AE は顧客から VAT ID を取得してください。

![TIN 検索タブ](/images/sales/field-operations/vat-id-validation/tin-search.png)

TIN 検索は、Salesforce のアカウント名と住所を検索フィルターとして Fonoa に渡します。Fonoa は関連する政府データベースを照会し、1 件以上の結果を返します。各結果には、名前と住所のあいまい一致率が、その他の主要な属性とともに表示されます。ユーザーはこれらの結果を確認し、最も一致するものを選択して、「Use this TIN」をクリックします。

![あいまい一致率を示す TIN 検索結果](/images/sales/field-operations/vat-id-validation/tin-search-results.png)

#### サポート依頼タブ {#request-support-tab}

Sales Operations にケースを作成します。ステップ 4 を参照してください。

### ステップ 3 — 結果を確認します {#step-3--read-the-result}

アカウントには 2 つのステータスが記録され、商談を受注登録するには両方の条件を満たす必要があります。

#### VAT 検証ステータス {#vat-validation-status}

| ステータス | 意味 | 申請時の動作 |
| --- | --- | --- |
| Valid（有効） | 形式が有効で、公式データベースで ID が見つかり、事業が非活動状態ではなく、納税者登録されています。 | 通常どおり申請 |
| Pending（保留中） | Fonoa 呼び出しの直前に設定される一時的な状態です。 | 例外理由が必要 |
| Invalid - Format（無効 - 形式） | 国ごとの形式チェックに不合格でした。他のどのルールより先に評価されるため、呼び出しは Fonoa に到達しません。 | 例外理由が必要 |
| Invalid - Not Found（無効 - 未検出） | VAT ID の形式は正しいものの、その VAT ID が公式データベースに存在しません。 | 例外理由が必要 |
| Invalid - Not Tax Registered（無効 - 納税者未登録） | データベースには存在しますが、納税者登録されていません。 | 例外理由が必要 |
| Invalid - Inactive（無効 - 非活動） | 事業のステータスが非活動です。 | 例外理由が必要 |
| Inconclusive（判定不能） | Fonoa から応答がありましたが、結果が上記のいずれにも該当しませんでした。たとえば、納税者登録や事業のステータスが不明と返された場合です。 | 例外理由が必要 |
| Validation Error（検証エラー） | 呼び出し自体が失敗したか、検証の詳細が返されませんでした。 | 例外理由が必要 |

結果が無効または判定不能でも、そこで終わりではありません。VAT ID を修正して再度検証してください。各試行は個別に記録され、監査履歴の過去の結果は上書きされません。

有効な結果：

![法人のステータスがツール検証済みに設定された、有効な結果](/images/sales/field-operations/vat-id-validation/result-valid.png)

無効な結果：

![無効な結果](/images/sales/field-operations/vat-id-validation/result-invalid.png)

#### 法人検証ステータス {#legal-entity-validation-status}

VAT ID の検証に成功すると、Fonoa が返した登録名を Salesforce のアカウント名と比較し、法人検証ステータスを生成します。

| ステータス | 設定方法 | 申請時の動作 |
| --- | --- | --- |
| Tool-Verified（ツール検証済み） | 自動。Fonoa の登録名がアカウント名と一致しています。 | 通常どおり申請 |
| Sales Rep-Verified（営業担当者検証済み） | 手動。AE が顧客に直接名前を確認した後、**Mark as Verified**を選択します。 | 通常どおり申請 |
| Sales Ops-Verified（Sales Ops 検証済み） | Sales Operations が**アカウント名を更新したうえで** Account Name Change/M&A のケースをクローズすると設定されます。名前を変更せずにケースをクローズした場合、ステータスは Pending Sales Ops Update のままです。 | 通常どおり申請 |
| Pending Review（レビュー待ち） | 自動。VAT ID は有効ですが、Fonoa が登録名を返さなかったため、比較対象がありません。 | 例外理由が必要 |
| Pending Sales Ops Update（Sales Ops 更新待ち） | 自動。Fonoa が VAT ID に関連付けられた登録名を返しましたが、その名前がアカウント名と一致しません。 | 例外理由が必要 |

**名前は完全一致で比較します。** 結果には以下の 2 通りがあります。

- **名前が一致しない。** 大文字と小文字、句読点、法人種別を示す接尾辞、末尾のスペースに違いがあれば、同じ会社を指すように見えても不一致になります。法人検証ステータスは*Pending Sales Ops Update*に設定されます。次の手順についてはステップ 4 を参照してください。
- **登録名が返されない。** Fonoa が登録名を返さない場合、比較対象がありません。法人検証ステータスは*Pending Review*に設定され、検証ツールには次のメッセージが表示されます。*"Fonoa did not return a Registered Business Name for this validation. Click the button 'Mark as Verified' to confirm the Registered Business Name has been verified with the Customer."*

どちらの場合も、**顧客に法人名を確認した**後でのみ、**Mark as Verified**を使用してください。これはレコード上で確認済みと表明するものであり、商談の受注登録を可能にするものです。

![Mark as Verified ボタンが表示された Pending Review の状態](/images/sales/field-operations/vat-id-validation/pending-review.png)

### ステップ 4 — 名前の不一致：Sales Operations のケースを作成します {#step-4--name-mismatch-raise-a-sales-operations-case}

Fonoa の登録名がアカウント名と一致しない場合、検証ツールに 2 つの名前が並べて表示されます。

> Legal Entity Name Validation: Fonoa's registered company name [registered name] does not match the Account name [account name]. Please click Request Support to open a case with Sales Ops to change the name of this account.

VAT ID Validator 内で **Request Support** を選択すると、1 回の操作で**Account Name Change/M&A**のケースが作成されます。チーム、依頼の種類、詳細はあらかじめ入力されており、必須の理由/メモのフィールドには、不一致の詳細が自動入力されます。

> Fonoa's database lookup returned legal entity name "[legal entity name returned by Fonoa]" which does not match the Salesforce Account name "[Salesforce account name]". Please, update the Salesforce account name to match the legal entity name.

上記のテキストは自動生成されます。内容を確認し、必要に応じて編集して送信してください。ケースの所有者は **Sales Ops Team** キューとなるため、手動で振り分ける必要はありません。

不一致のバナー：

![法人名の不一致](/images/sales/field-operations/vat-id-validation/name-mismatch.png)

アカウント名変更/M&A のケース：

![あらかじめ入力されたアカウント名変更と M&A のケース](/images/sales/field-operations/vat-id-validation/sales-ops-case.png)

**ケースの処理を待たないでください。** 商談を進める前にケースが解決されている必要はありません。見積もりと注文書の作成は通常どおり継続でき、例外理由を使用すればすぐに承認申請できます。

不一致の大半は、法人種別を示す接尾辞の欠落、句読点の違い、末尾のスペースなど、ほぼ一致しているものです。こうした不一致はよくあり、想定されているものです。ケースの作成は、元のデータを継続的に修正するための手段であり、商談を進めるための条件ではありません。

#### バナーが消えないのは想定どおりです {#the-banner-will-not-go-away-and-that-is-expected}

バナーが消えるのは、法人検証ステータスが合格となった場合だけです。名前の不一致の場合は、アカウント名を Fonoa が返した登録名に一致するよう実際に変更したことを意味します。名前を変更しない場合、ステータスは Pending Sales Ops Update のままとなり、**バナーは商談に無期限に表示され続けます**。

バナーが消える条件と消えない条件を具体的に示します。

- **ケースを作成してもバナーは消えません。**
- アカウント名を変更せずにケースをクローズした場合、**Sales Operations がケースをクローズしてもバナーは消えません**。名前を変更しない正当な理由がある場合もあり、その形でケースをクローズするのは通常の結果であり、誤りではありません。
- 2 つの名前が一致しない限り、現在対応している商談だけでなく、**そのアカウントのすべての商談にバナーが表示され続けます**。
- **これらによって作業が止まることはありません。** 承認申請して例外理由を選択すれば、商談は進みます。その後も、この商談と次の商談でバナーが表示され続けます。

バナーが消えることを、申請可能になった合図と捉えないでください。このような場合、バナーは消えず、消える必要もありません。

ケースを作成すると、法人検証ステータスは「Pending Sales Ops Update」に設定されるため、ケースを処理している間、アカウントが「Pending Review」のままになることはありません。これは、ポップアップを早めに閉じた場合も同様です。

#### Sales Operations チームが実行する作業 {#tasks-performed-by-the-sales-operations-team}

Sales Operations はケースを確認し、アカウント名、VAT ID、販売先の国のうち、Fonoa が不整合を示した項目を修正します。登録名と一致するようにアカウント名を更新した場合、法人検証ステータスは Sales Ops Verified に設定され、バナーが消えます。アカウント名を変更せずにケースをクローズした場合、バナーは削除されます。どちらも有効な結果であり、いずれも商談を妨げません。

### ステップ 5 — 見積もりの販売先の国が不一致の場合 {#step-5--sold-to-country-mismatch-on-the-quote}

税はアカウントの国に基づいて決まります。販売先担当者の**国**が販売先アカウントの国と異なる場合、見積もりに警告が表示されます。

> WARNING: Sold To Country Mismatch: The Sold To Contact's country [contact country] is different from the Account's country [account country]. VAT will be calculated incorrectly. Please escalate to the Sales Ops/Deal Desk team.

この警告で見積もりがブロックされることはありませんが、無視すると請求書の税額が誤ったものになります。Sales Ops/Deal Desk チームにエスカレーションし、サポートを依頼してください。

![見積もりに表示される販売先の国の不一致の警告](/images/sales/field-operations/vat-id-validation/quote-country-mismatch.png)

### ステップ 6 — 承認申請 {#step-6--submitting-for-approval}

**Submit for Approval**を行う準備が整いました。以下の場合に申請が通ります。

- VAT 検証ステータスが「有効」であり、**かつ**
- 法人検証ステータスが「ツール検証済み」、「営業担当者検証済み」、「Sales Ops 検証済み」のいずれかである

両方を満たすと、追加のメッセージなしで申請が進みます。

![検証が完了したアカウントのフィールド](/images/sales/field-operations/vat-id-validation/account-fields-complete.png)

### ステップ 7 — 例外 {#step-7--exceptions}

検証が未完了の場合も、Account Executive は承認申請できますが、例外として進めるかどうかを確認されます。

> Would you like to submit this Opportunity with an exception reason?

**No**を選択すると申請を中止し、商談はそのままの状態にとどまります。**Yes**を選択すると、例外理由が必要です。

| 例外理由 | 使用する場面 |
| --- | --- |
| Customer acknowledged that they don't have a valid VAT ID | 顧客が VAT 登録をしていないと確認した場合。 |
| Customer has provided VAT exemption certificate | 免税証明書を受領した場合。商談に添付してください。 |
| Case Pending with Sales Ops | アカウント名変更/M&A のケースがオープンで、未解決の場合。 |
| Validation Tool Issue | 検証ツールまたは Fonoa が利用可能な結果を返さない場合。 |
| Other | その他の場合。追加の詳細が必須です。 |

**例外を承認する人はいません。** 承認キューもレビュー担当者もなく、待つ必要もありません。理由を選択すると申請が進み、その理由が記録されます。ここでは Deal Desk は承認者ではなく、誰かが処理する必要のある制限解除リクエストもありません。

![例外理由を指定して承認申請](/images/sales/field-operations/vat-id-validation/submit-with-exception.png)

理由は、アカウントと商談に関連付けられた検証ログに記録され、商談と顧客情報の記録の一部になります。すべての例外を Tax、Finance、Sales Operations が確認できるため、実際に当てはまる理由を選んでください。

例外を適用しても、アカウントが検証済みになるわけではありません。根本となる VAT ID と法人名の問題が解決するまで、そのアカウントは検証待ちとして報告され続けます。

### ステップ 8 — 注文書と後続システム {#step-8--order-form-and-downstream-systems}

注文書には、アカウントの販売先法人名と VAT ID が表示されます。

Salesforce の「Closed Won（受注）」と「Send to Zuora（Zuora に送信）」の属性により、アカウント名が Zuora の請求アカウント名に入力されます。検証済みの VAT ID は Zuora の VAT ID フィールドに引き継がれます。税ルールは請求アカウントレベルで VAT ID を参照するため、見積もりを送信する前にアカウントが正確である必要があります。

Salesforce での一連の検証の最後に Zuora 内で請求アカウントを作成します。流れは以下のとおりです。

アカウント → 商談 → 見積もり → 見積もり承認 → 商談承認 → 受注 → 見積もりを Zuora に送信 → 請求アカウント

## フィールドリファレンス {#field-reference}

以下のフィールドは、アカウントの**Other Account Info**に、既存の VAT/Tax ID フィールドの隣に保持されます。

| フィールド | 入力者 | 注記 |
| --- | --- | --- |
| VAT/Tax ID | ユーザー | 顧客の VAT 番号または納税者番号。 |
| VAT Validation Status（VAT 検証ステータス） | システム | Fonoa チェックの結果。ステップ 3 を参照してください。 |
| VAT Last Validated Date（VAT 最終検証日） | システム | 直近の検証試行のタイムスタンプ。 |
| Legal Entity Validation Status（法人検証ステータス） | システム、または Mark as Verified を使う AE | 名前の比較結果。ステップ 3 を参照してください。 |
| Legal Entity Validation Date（法人検証日） | システム | 直近の法人判定のタイムスタンプ。 |

両方のステータスフィールドは、**Sales にとって読み取り専用**です。編集権限は Sales Operations、Finance User、System Administrator に限定されています。営業担当者はフィールドを編集するのではなく、検証ツールを通じてこれらの値を変更します。

また、検証を試行するたびに、送信した VAT ID、Fonoa の応答、登録名と住所、結果のステータス、例外理由を記録した追記専用のログレコードが書き込まれます。試行の記録は上書きされません。

## 役割分担 {#who-does-what}

| ロール | 責任 |
| --- | --- |
| Account Executive（AE）/ 商談所有者 | 顧客から VAT ID と法人名を取得します。ステージ 3 から検証を実行します。不一致があれば Sales Ops のケースを作成します。検証を完了できない場合に例外理由を選択します。 |
| Sales Operations | アカウント名変更/M&A キューを担当します。アカウント名、VAT ID、販売先の国を修正し、ケースをクローズします。 |
| Deal Desk | 見積もりレベルでの販売先の国の不一致について AE を支援します。Deal Desk は例外を承認せず、Deal Desk が解除するものもありません。 |
| Tax と Finance | 例外の件数と理由を監視し、VAT コンプライアンスと報告を担当します。 |

## 注意点 {#things-to-watch}

- **検証によって商談がブロックされることはありません。** 見積もり、注文書の作成、クローズ、受注登録はすべて継続できます。検証が未完了の場合は例外理由を指定して申請し、誰かがその理由を承認する必要はありません。
- **バナーが表示され続けることは、解決すべき問題ではありません。** アカウント名を変更しないと決めた場合、そのアカウントにはバナーが常に表示され続けます。例外理由を指定して申請し、そのまま進めてください。
- **見積もりの前に検証してください。** 税の判定と Zuora の請求アカウントは、どちらもアカウントを参照します。検証が完了する前に見積もりを作成すると、請求アカウントに VAT ID が入らない場合があります。
- **完全一致は厳密な一致を意味します。** 法人種別を示す接尾辞、カンマ、大文字が 1 つ違うだけでも不一致になります。データが間違っていると判断する前に、Fonoa が返した登録名を確認してください。
- **アカウント名は販売先の法人名です。** アカウント名は、屋号、ブランド名、最上位の親会社名ではありません。
- **Mark as Verified は確認済みという表明です。** 実際に顧客に名前を確認した後でのみ使用してください。
- **例外は可視化されます。** すべての例外理由が報告の対象です。これは文書化された手順であり、抜け道ではありません。

## サポートを受けるには {#getting-help}

検証結果が誤っていると思われる場合や、検証によって商談を進められない場合は、`#sales-support` に投稿してください。

アカウント名、VAT ID、販売先の国を修正する場合は、**商談ページの Request Support ボタンではなく、VAT ID Validator 内の Request Support を使用してください。** 商談には専用の Request Support ボタンがありますが、別の宛先に振り分けられ、不一致の詳細も引き継がれません。検証ツールの Request Support タブでは、両方の名前を入力済みの Account Name Change/M&A ケースを作成し、Sales Ops Team キューへ直接振り分けます。使用するケース種別とキューは、[社内サポートの依頼](/handbook/sales/field-operations/requesting-internal-support/)で文書化されているものと同じです。
