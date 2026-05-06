---
title: リニューアルマネージャー - 私たちが行うこと
upstream_path: /handbook/customer-success/renewals-managers/what/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

リニューアルマネージャーのハンドブックページを参照してください:

- [Home](/handbook/customer-success/renewals-managers/home) - 組織についての情報。
- [How We Do It（私たちのやり方）](/handbook/customer-success/renewals-managers/how) - リニューアルマネージャーがミッションをどのように実行するかについての情報。

リニューアルマネージャー --> 詳細は内部ハンドブック[ページ](https://internal.gitlab.com/handbook/sales/go-to-market/renewals/)を参照してください。

---

## FY25 リニューアル機会管理

FY25 において、グローバルリニューアルチームは GitLab の他のどのチームよりも多くの顧客対応トランザクションを管理します。そのため、リニューアルチームは、高度な組織化、アカウントチームとの効果的なコラボレーション、成功裏のリニューアル成果を確保するため、リニューアル機会を最高水準の厳密さとデータ品質で管理します。

リニューアルチームは、リニューアル機会において主に以下のキーフィールドを使用します:

## Opportunity Info

- `Close Date` - この Opportunity がクローズすると予想される日（まだオープンの場合）、またはクローズした日。
- `Subscription Renewal Date` - 有効なサブスクリプションのリニューアル日
- `Customer Subscription link` - サブスクリプション情報へのハイパーリンク
- `Type` - Opportunity が New Business、Add-on、Renewal のいずれであるかを示す
- `Order Type` - この Opportunity が新規、グロース、縮小、チャーンのいずれにカウントされるかを示す。
- `Auto Renew Status` - サブスクリプションが自動更新に設定されているかを示す

## Deal Management

- `Stage` [link](/handbook/sales/field-operations/gtm-resources/#opportunity-stages)- ディールがリニューアル/セールスサイクルのどこにあるかを示す
- `Renewal Manager Next Steps` - ディールライフサイクル中に発生した重要な情報やアクション、次のステップが何でいつ発生するかを記録するフィールド
- `Renewal Manager Notes` - リニューアルマネージャー固有のランニングノートを記録するフィールド

## Forecasting

- `Renewal Forecast Health` [link](https://internal.gitlab.com/handbook/sales/sales-forecasting/#forecast-category-and-renewal-forecast-health-fields) - Net ARR フィールドに基づくレッド、イエロー、グリーンの健全性評価
- `Renewal Risk Category` - リニューアルにおけるリスクの大きさと、リスクが Actionable かどうかを分類するために使用
- `ATR` - Available to Renew (ATR) の収益
- `Amount` - ディールの予測収益
- `Renewal Swing ARR` - アカウントチームがリスクのあるリニューアルでアクションを取れば救うことができると考える収益
- `Net ARR` - ATR と Amount の差分。Positive な NetARR はグロースを反映し、Negative な NetARR はチャーンまたは縮小を反映します。
- `ATR` - リニューアル率の計算に使用。これは Available to Renew (ATR) の収益です
- `Won ATR` - リニューアル率の計算に使用。これはディールの予測リニューアル収益です。このフィールドは ATR フィールドの 100% を上限とし、100% 以上のリニューアルがないことを反映します。
- `Active Mitigation` - 機会がリスクにさらされている場合の主な緩和策を説明するために使用
- `(Best Case / Most Likely / Commit) Forecasted Churn` - ベストケース、最も可能性が高い、ワーストケース（Commit）のシナリオを記述します。Best Case と Commit は他のリスク予測フィールドに依存する計算フィールドです。ML はリニューアルマネージャーが最も可能性が高いと考えるチャーンまたは縮小の額を記述する手動入力フィールドです。
- `Renewal Manager Notes` - リスク理由、お客様ブリーフ、進行中の介入のメモ、必要な介入の観察事項を記述するテンプレートでよく入力されるフィールド。

## Ownership

- `Opportunity Owner` - Opportunity の結果に対する DRI
- `Renewals Manager` - この Opportunity をサポートするリニューアルマネージャー
- `Carahsoft Renewals Manager` - このディールをサポートする Carahsoft Renewals Manager を示す

## Analytics

- `Closed Won Reason` - ディールが Closed Won となった理由
- `Risk/Loss Reason Category` - ディールが Closed Lost となった理由、または Opportunity の縮小の原因
- `Risk/Loss Reason Sub Category` - 縮小または Opportunity が失われた理由の追加詳細
- `Closed Won Details` - ディールに勝った理由に関する追加情報と洞察のための自由形式フィールド
- `Closed Lost Details` - ディールを失った理由に関する追加情報と洞察のための自由形式フィールド
- `Downgrade Details` - お客様が縮小した理由に関する追加情報と洞察のための自由形式フィールド。

## リニューアルフォーキャスト方法論

FY25 において、グローバルリニューアルチームは、Enterprise-Growth (ENTG) と Commercial (COMM) セグメントについて、定期的にリニューアル率とチャーンフォーキャストをビジネスに提供する責任を負います。

正確でデータ駆動型のフォーキャストを提供することは、GitLab の継続的な成長に不可欠です。なぜなら、それにより以下が可能になるからです:

- チャーンと縮小のリスクを効果的に特定・管理する
- 戦略的意思決定を支える収益予測可能性を推進する
- リスクを軽減するため、GitLab のビジネスブック内のトレンドを分析し戦略的アクションを取る

## アプローチ

AE と連携して、リニューアルチームは「ボトムアップ」のリニューアル率およびチャーンフォーキャストを生成します。これにより、すべての ENTG および COMM のリニューアル機会に、リニューアルの結果や潜在的な結果を予測する予測収益範囲が含まれます。各リニューアル機会で「ワーストケース」と「ベストケース」のシナリオを予測することで、リニューアルマネージャーは特定の期間、テリトリーなどのワーストケースリニューアル率とベストケースリニューアル率の予測範囲を提供できます。リスクが特定、分類、予測されると、リニューアルマネージャーは適切なチャネルを使用して関連当事者（CSM、AE）に警告します。

## キーリニューアルフォーキャスティングフィールド

リニューアルでリスクをキャプチャするためのキーリスクフィールドは:

- `Renewal Risk Category` 以下の選択肢:

  - `Will Renew`: お客様が Available to Renew (ATR) のすべての収益を更新するという完全な確信がある場合に使用
  - `Will Churn`: 機会が完全にチャーンするという 100% の確信がある場合のみ使用（まれに使用、ほとんどのケースは 100% ではない）。
    - 例: お客様が廃業した、または米国が当社が事業を行う国に貿易制裁を課した。
  - `Will Churn (actionable)`: 機会全体がリスクにさらされているが、そのリスクを軽減するためのステップを取れる場合に使用
    - 例: 競合入札の状況、お客様が他の選択肢を検討していると示している、適切な聴衆と適切なエグゼクティブの関与があれば、その決定に影響を与えられると考える。
  - `Will Contract`: サブスクリプション上のシート数の削減または下位ティアへの移行があるという 100% の確信がある場合に使用（まれに使用）
    - 例: お客様での大規模な人員削減により、GitLab プラットフォームを使用できるエンジニアの数が現在のシート数（適切なバッファレベルを含む）を大きく下回るレベルに減少。
  - `Will Contract (actionable)`: リニューアル機会の一部にリスクがあるが、そのリスクを完全または部分的に軽減するためのステップを取れる場合に使用。
    - 例: お客様が Premium への下位ティア移行を評価していると示している - SA 主導の VSA で Ultimate バージョンに関連する価値とコスト削減を実証し、その決定に影響を与えられると考える。

## リスクの割り当て方法の基準（見積もり前と見積もり後）

- **見積もり前**

  - `Will Churn (actionable)` または `Will Contract (actionable)` の場合

    1. `Amount` フィールドに更新が予想される年間値（つまり、実際にブッキングされると予測する額）を入力します。Amount が ATR よりも少ない場合、Renewal Forecast Health フィールドは自動的に Red に更新されます。
    2. `Renewal ARR Swing` 額に、介入で救えるかもしれないチャーン/縮小の額を入力します。（注: Renewal Swing ARR は正の数で、Forecasted Churn の絶対値以下である必要があります。例: Forecasted Churn が -$100k の場合、Renewal Swing ARR は +$100k を超えることはできません）
    3. `Next Steps` を記録します
    4. `Renewal Manager Notes` セクションにリスク介入のアイデア/依頼/動きを記録します（リスク介入テーブルをアイデアに使用できます）

        他の 2 つのカテゴリー - `Will Churn` と `Will Contract` - は同じ手順を使用しますが、Renewal ARR Swing フィールドは不要です

- **見積もり後**

  - `Will Churn (actionable)` の場合
    1. `Renewal Forecast Health` フィールドを `Red` にし、`Renewal Forecast Health Override` ボックスにチェックを入れます。（注: Red でこのボックスにチェックを入れると、Won ATR が自動的に $0 に設定されます）
    2. `Renewal ARR Swing` フィールドを入力します

  - `Will Contract (actionable)` の場合
    1. プライマリ見積もりが最も保守的（または Commit）なリニューアル結果を示していることを確認します。最も保守的な結果を予測するためにプレースホルダーまたは「ダミー」の見積もりが必要になる場合があります。プライマリ見積もりが縮小を反映している場合、`Renewal Forecast Health` は自動的に Red を示します。
    2. `Renewal Swing ARR` フィールドを更新します

    Sales がネット ARR グロースを反映するプライマリ見積もりを持っているが、Renewals が継続的な縮小リスクを認識している場合は、`Renewal Forecast Health` を `Red` に更新し、`Renewal Forecast Health Override` ボックスにチェックを入れます。これにより Won ATR フィールドが $0 に設定されることに注意してください。

`Will Churn` と `Will Contract` の選択は、`Subscription Renewal Date` に非常に近いタイミングでのみ行うべきです - お客様の状況は急速に変化する可能性があるため。これらの選択は、機会上のリスクがもはや積極的に緩和されないことを示します。

すべての `Will Churn` リニューアルは、`Subscription Renewal Date` までに Closed-lost にする必要があります

## フォーキャスティングの目標

- 2 つの完全な四半期分のリスクを予測した状態を維持する（Q1 の終わりまでに Q2 と Q3 が予測されている状態）

## リスク介入戦術

これらの戦術/動きが各リスクシナリオで常に承認されたり適切であったりするとは限りませんが、リニューアルマネージャーがリニューアルリスクの状況に介入する方法のスターターおよびリポジトリとして役立ちます。

1. エグゼクティブの関与 - メール
2. エグゼクティブの関与 - 意思決定者とのコール
3. 割引されたプロフェッショナルサービス
4. CSM/E ワークショップ
5. 特定のリニューアルでの割引/リベート
6. より良い契約条件の提供（Net 60 など）
7. プロダクトチーム - 機能プレビュー
8. 有利なランプディール
9. SA VSA エンゲージメント
10. ピア電話コール（お客様のピア）
11. 取締役会メンバーとの接触
12. お客様の社内正当化のためのカスタム ROI デッキ開発

## リスク緩和の開始（エンドツーエンドのサマリー）

1. 機会に対して **現在のリスクを割り当てる**（見積もり前は `Amount` フィールドを使用、見積もり後は見積もりを使用）
2. `Risk Renewal Category` と `Renewal Forecast Health` フィールドを使用して **リスクを分類する**（機会がリスクにさらされている場合は常に Red）
3. `Renewal Swing ARR` フィールドで **成功裏の介入の影響を記述する**
4. 以下の構文で `Renewal Manager Notes` フィールドに **アクションされている/要求されている介入を明示する**:

   - *Date*: あなたの更新の日付

   - *Current Risk Status*: 機会がリスクにさらされている理由?

   - *Customer Brief*: お客様のリニューアルに対する立場やセンチメントについて何を知っているか?

   - *LT Intervention in Process*: 現在進行中の介入戦術は何か、何もない場合は N/A としてマーク。

   - *LT Intervention Needed*: どのような介入戦術が必要か、上記のメモで「進行中」とアウトラインされている場合は N/A としてマーク。

5. **適切なステータスを示すために、以下のハッシュタグの 1 つ以上で Renewal Manager Notes セクションを更新する**
   - A. [#UserMigration] - 実際の収益が会社から離れるのではなく、別の機会にシフトされるシナリオで C&C を示す（RM はマネージャーノートにリンクをハッシュタグと一緒に含めることで、収益がキャプチャされる機会を文書化する必要があります）
   - B. [#Risk] - リニューアル機会が「ウォッチリスト」に載せるべきだが、リスクがフォーキャスティングフィールドに反映されるほど精査されていない場合に活用。リスクと見積もりが一致しない場合の縮小リスクを記述するためにも使用できます。
   - C. [#DeferredChurn] - 標準的な慣行外の活動により、リニューアル率および/または ARR ベースに負の影響が発生したリニューアル機会で活用。例 1、True-up を免除（リニューアル準備段階で）し、ユーザーを追加し、お客様が次のリニューアルでシート数を減らす可能性が高いことを知りつつ ARR ベースの支出を増やす。例 2、移行プロジェクトに関連する 2 つの機会があり、四半期の終わりに NetARR がアタッチされた機会を Close-Won し、新しい四半期に negative ARR の機会を Close-Loss するのを待つ。
   - D. [#RiskMitigated] - 緩和努力を通じてリニューアル機会を Red から Green に戻すジャーニーを表現するために活用。このハッシュタグを使用するときは、ジャーニー/緩和努力を示すイベントの簡単な概要を文書化する必要があります。
6. マネジメントチームとの予定されているフォーキャスティングコールで **介入をレビューし優先順位付けする**。
7. このサンプルフォーマットを使用して **Chatter で介入を開始する**:
   - [Risk Intervention] (Executive involvement - EXEC_NAME email, in the next 2 weeks) Hi EXEC_NAME - お客様はあなたの仕事の大ファンであり、あなたからのメールがこの機会に見られるリスクを軽減するのに影響力があると思います。文言とコンテキストを含む *doc* がこちらです。@EXEC_NAME, CC: @MANAGER
   - [Risk Intervention] (CSM/E Workshop - premium feature demo, next week) Hi CSM_Name、このお客様向けに Premium 機能の有効性を実証できれば、この機会を救うチャンスがあります。ワークショップを管理するためのトリアージ Issue を開始しました - こちらが *link* です。@CSM_Name CC: @MANAGER

## 機会へのリスクの定量化

以下は、さまざまな機会と、リスクとスイングフィールドを定量化/ラベル付けする標準的なアプローチについて詳述します。

1. **お客様の応答なし** --> `Will Churn (actionable)` で完全な `Renewal Swing ARR` フィールド（回復可能な全額）
2. **縮小の見積もりにサインしたが PO 待ち** --> `Will Contract`
3. **競合入札状況** --> `Will Churn (actionable)` で完全な `Renewal Swing ARR` フィールド（回復可能な全額）
4. **初期段階のリスク（deploy、activate、adopt フェーズでの過少展開）** --> `Will Contract (actionable)` で過少展開された割合を `Amount` フィールドにリスクとして示し、`Renewal Swing ARR` フィールドに過少展開額を影響可能として示す。
5. **調達リスク（必須割引のある新 BPA、お客様がサードパーティベンダーを使用している）** --> `Will Contract (actionable)` で新しい必須または予想割引を `Amount` フィールドに（見積もり前）、`Renewal Swing ARR` フィールドに割引額を Actionable として示す。
6. **プログラム/プロジェクトの終了** - `Will Churn (actionable)` で完全な `Renewal Swing ARR` フィールド（回復可能な全額）

## フォーキャストの計算のための主要フィールド

リニューアルフォーキャストを設定するための主要な収益フィールドは:

- `ATR`
- `Amount`
- `Won ATR`
- `Renewal Swing ARR`

`ATR` フィールドは、Available to Renew (ATR) の収益額です。`Won ATR` は、特定のサブスクリプション上で更新されると考える ATR の額を示すために使用するフィールドです。このフィールドは `Amount` フィールドに入力された収益に基づいて入力されます。

`Won ATR` フィールドを `ATR` フィールドと比較することで、以下の式で予測リニューアル率を決定できます:

`(Won ATR` / `ATR`) * 100 = Worst Case Renewal Rate`

たとえば、`ATR` フィールドに $100k のリニューアルがある場合、それは更新する $100k の ARR のサブスクリプションがあることを意味します。彼らの分析に基づいて、リニューアルマネージャーは、ワーストケースシナリオとして、$100k のうち $75k を更新し、お客様が $25k 縮小すると予測します。リニューアルマネージャーは `Amount` フィールドに $75k を入力します（これにより `Won ATR` フィールドに $75k が入力されます）。上記の式に基づいて、このディールのワーストケースシナリオとして 75% のリニューアル率に到達します。

`($75,000/$100,000)*100 = 75%`

次のステップは、潜在的なベストケースシナリオを決定することです。`Renewal Swing ARR` フィールドを使用し、その値を `Won ATR` フィールド値に追加することでこれを達成します。式は次のようになります:

```plaintext
(`Won ATR`+` Renewal Swing ARR` / `ATR`) * 100 = Best Case Renewal Rate
```

上記の例を踏まえて、リニューアルマネージャーは、アクションを取れば、リスクのある $25k の収益を救えると判断します。これをフォーキャストに反映するため、リニューアルマネージャーは `Renewal Swing ARR` フィールドを $25k で更新し、ベストケースのリニューアル率は次のようになります:

```plaintext
($75,000 + $25,000/$100,000)*100 = 100%
```

このフォーキャストでリニューアルマネージャーが言っているのは、ワーストケースシナリオは 75% のリニューアル率で、ベストケースシナリオは 100% のリニューアル率だということです。

要約すると、リニューアルマネージャーは、お客様がサブスクリプションを $100k から $75k に減らすリスクがあるが（$25k の縮小）、アクションを取れば、お客様にサブスクリプションの $100k 全額を更新してもらえる可能性があると予測しています（縮小なし）。

特定のリニューアルにリスクがない場合、ワーストケースシナリオとベストケースシナリオは同じ（100% リニューアル）になり、`Renewal Swing ARR*`* フィールドの入力は不要であることに注意してください。

## アカウントチームのコラボレーション

リニューアルマネージャーは、Customer Success Managers/Engineers と Account Executives と密に連携します。お客様が GitLab とサブスクリプションを購入した後、これらのペルソナから次のような関わりを期待できます:

- **Account Executive**: アカウントレベルでの GitLab との総合的なお客様との関係を管理。主な焦点は、お客様の GitLab との関係をどのように成長させるか。Account Executive はセールス担当です。ベストプラクティス - お客様とのコミュニケーションでは、アカウントの CSM/AE を CC してください。
- **Customer Success Manager/Engineer**: 私たちのセグメンテーションに応じて、CSM または CSE がアカウントまたはテリトリーに割り当てられる可能性があります。彼らの主な焦点は、採用、成果、推奨です。CSM/E はセールス担当ではなく、Customer Success のスペシャリストです。ベストプラクティス - お客様とのコミュニケーションでは、アカウントの CSM/AE を CC してください。
- **Renewals Manager**: お客様の既存の更新可能なビジネスを管理。主な焦点は維持、二次的な焦点はグロース。リニューアルマネージャーはハイブリッドな役割で、リニューアルの「セールス」とリニューアルプロセスを管理します。彼らは Customer Success とセールスの交差点に位置します。
