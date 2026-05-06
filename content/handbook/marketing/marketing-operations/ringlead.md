---
title: "Ringlead"
description: "Ringlead プラットフォームは、重複の管理、データの正規化、セグメンテーション、エンリッチメントなどの Salesforce およびマーケティングオートメーションプロセスをオーケストレーションします。"
upstream_path: /handbook/marketing/marketing-operations/ringlead/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

### Ringlead について

RingLead は、セールスとマーケティングが効率的かつ生産的になることを可能にするために設計された SaaS アプリケーションです。

Ringlead プラットフォームは、重複の管理、データの正規化、セグメンテーション、エンリッチメントなどの Salesforce およびマーケティングオートメーションプロセスをオーケストレーションします。

入門として、以下はプラットフォームの使用と、それらのツールがデータ目標を達成するのにどう役立つかを理解するのに役立ついくつかのアイテムです。

<table>
  <tr>
        <td style = "text-align: center;"> <b>製品</b> </td>
                 <td style = "text-align: center;"> <b>概要</b> </td>
                         <td style = "text-align: center;"> <b>機能</b> </td>
                                 <td style = "text-align: center;"> <b>説明 </b> </td>
   </tr>
   <tr>
        <td rowspan = "4" style = "text-align: left; vertical-align: top;"> <b> Cleanse </b> </td>
          <td rowspan = "4" style = "text-align: left; vertical-align: top;">Cleanse でデータベースをクレンジングし、コストのかかる重複や数百のカスタムオブジェクトレコードを削除しながら、標準化された簡単に更新できるデータレコードを作成します。 </td>
              <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/Overview-of-Salesforce-Deduplication-Best-Practices"> Overview of Salesforce Deduplication Best Practices</a> </td>
                <td style= "text-align: left; vertical-align: top;"> 定義した特定の基準に基づいてデータベースをスキャンして重複を検索します。重複を特定したら、簡単にマージしてストレージコストと時間を節約できます。 </td>
   </tr>
     <tr>
         <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/Overview-of-Normalization-Rules-in-RingLead">Overview of Normalization Rules in RingLead</a> </td>
            <td style= "text-align: left; vertical-align: top;"> 住所、ウェブサイト、電話番号などを標準化して、データのナビゲートと検索を容易に保ちます </td>
  </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/How-to-Create-and-Run-a-Mass-Update-Task">How to Create and Run a Mass Update Task</a> </td>
            <td style= "text-align: left; vertical-align: top;"> フィルタリングと新しい値を定義した後、カスタムおよび標準オブジェクトのフィールドを更新します </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/How-to-Mass-Delete-Leads-with-Last-Activity-Greater-Than-2-Years">How to Mass Delete Leads with Last Activity Greater Than 2 Years</a> </td>
            <td style= "text-align: left; vertical-align: top;"> カスタムおよび標準オブジェクトを削除して Salesforce をクリーンアップします </td>
  </tr>
     <tr>
         <td rowspan = "6" style= "text-align: left; vertical-align: top;"> <b>Enrichment </b> </td>
            <td rowspan = "6" style= "text-align: left; vertical-align: top;"> 持っているデータを最大限に活用し、ない場所のギャップを埋めます。会社のファーモグラフィックとコンタクトデータは、このツールで完了および更新できます。既存のベンダーを使用するか、任意のベンダーから最高のデータを見つけるのを手伝わせてください。 </td>
            <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/How-to-Perform-Salesforce-Mass-Enrichment">How to Perform Salesforce Mass Enrichment</a> </td>
            <td style= "text-align: left; vertical-align: top;"> 任意のデータベンダーから直接レコードをエンリッチします。 </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://university.zoominfo.com/formcomplete-made-easy"> FormComplete Made Easy </a> </td>
          <td style= "text-align: left; vertical-align: top;"> ウェブフォームのユーザーが、フォーム上の RingLead パワードアドレス検索でデータの入力に費やす時間を減らせます </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://api-docs.zoominfo.com/#4d0c0007-bb7c-4eea-a2a0-53b01730713f">API Enrichment</a> </td>
            <td style= "text-align: left; vertical-align: top;"> 住所や会社情報などの拡張データをフォーム送信とともに取得できるようにします </td>
  </tr>
     <tr>
         <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/Instant-Enrich-Explained">Instant Enrich Explained</a> </td>
          <td style= "text-align: left; vertical-align: top;"> Salesforce の Lead、Contact、Account オブジェクト内で直接データをエンリッチします </td>
  </tr>
  <tr>
        <td style= "text-align: left; vertical-align: top;"> <a href = "https://university.zoominfo.com/ringlead-multi-vendor-enrich-overview-for-admins-live-webinar"> RingLead Multi-Vendor Enrich Overview for Admins (Live Webinar)</a> </td>
          <td style= "text-align: left; vertical-align: top;"> RingLead 以外のデータベンダーを使用してデータをエンリッチします。 </td>
   </tr>
  <tr>
        <td style= "text-align: left; vertical-align: top;"> <a href = "www.help.zoominfo.com/lightning/articles/help/Package-Manage-Explained">Package Manage Explained</a> </td>
          <td style= "text-align: left; vertical-align: top;"> 複数の配信メカニズムを持つ複数のベンダーを持つことは難しい場合があり、Package Management はこれらを使いやすいコードレスのシステムに統合する方法を提供します。 </td>
  </tr>
</table>

現在、GitLab は Ringlead の Cleanse 機能、特に Deduplication を使用していますが、エンリッチメントは [Zoominfo](/handbook/marketing/marketing-operations/zoominfo/) を介して行われます。これは、リード/コンタクトのエンリッチメントに関する SSOT です。

### セットアップ & アクセス

現在、Sales & Marketing Operations が Ringlead にアクセスできます。アクセスをリクエストするには、business operations ハンドブックに記載されている [アクセスリクエストプロセスに従ってください](/handbook/security/corporate/end-user-services/access-requests/access-requests/)。

### Ringlead & ヘルプへのアクセス方法

アクセスを取得したら、[このリンク](https://dms.ringlead.com/auth/login/?next=/) からログインできます。Ringlead とその機能の詳細については、[Ringlead Overview](https://help.zoominfo.com/s/article/Overview-of-RingLead) をご覧ください。

## 現在のプロセス & 操作の順序

重複排除と CRM データベースのクリーンアップは、成功するために必要なプロセスについていくらかの考えが必要です。それは、私たちの緊急の問題と最終目標に大きく依存します。以下では、Salesforce を例として使用して、Ringlead の顧客が、メインオブジェクトから始めて、クリーンで効率的で使用可能なデータの目標を達成するために使用できるベストプラクティスの推奨事項が表示されます。メインオブジェクトは、究極の親（Salesforce ではアカウントが頻繁に例として）です。そのオブジェクトを最初に重複から削除し、次のレベルに移動するなどして移動します。基本的な Salesforce の推奨事項については、以下をご覧ください。

重複レコードの検索とマージは、貴重なデータが失われるのを防ぎながら、RingLead で簡単です。重複をマージするとき、各フィールドに Surviving Field Value Rules を設定でき、選択された Master レコードに最高の、最新の、最も価値のあるデータが含まれます。Master 内で生き残る値を完全に正確に制御できるため、大量の重複レコードグループを安全に自動的にマージできます。

Marketing Operations は、既存のリードとコンタクトレコード、および重複排除が必要な他のカスタムオブジェクトを重複排除するためにツールと連携します。

Lead と Contact オブジェクトは Marketing Operations が、Account オブジェクトは Sales Operations が処理しています。

重複排除を通じてデータベースの清潔さを向上させることは重要であり、それを行う良い方法と悪い方法があります。組織は、クリーンなデータベースを達成するために、操作の正しい順序に従っていることを確認する必要があります。現在のプロセスでは、MOps と SOps はデータベースの適切な重複排除のために Ringlead のガイダンスを使用しています。

## ⚠️ 実行前: RingLead Merge Timing & False MQL Stamps

RingLead が Salesforce で重複レコードをマージするとき、Marketo のタイミング依存の競合状態により、誤った MQL スタンプが発生する可能性があります。

**重要な構成要件**: `RingLead Merge Date/Time` フィールドは、[Rescoring Automation](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC22871A1ZN19) をサポートするためにマージ時に datetime で入力されるように設定する必要があります。

両方のレコードからのアクティビティがマージされると、Person Score がインフレートし、`RingLead Merge Date/Time` フィールドが SFDC から Marketo に同期する前に [MQL Stamp campaign](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC13588C3ZN19) をトリガーする可能性があるため、問題が発生します。SFDC から Marketo への同期遅延（通常は 5 分、バックログ中はさらに長い）により、マージフィールドはキャンペーンの 2 分間の待機ステップ内に入力されない可能性があります。これは、Rescoring Automation がスコアを適切に再計算する前に MQL スタンプが発火することを意味し、手動で逆転する必要のある誤った MQL が発生します。

### Dedupe ガイダンス

Marketing Operations は、`RingLead Merge Date/Time` フィールドの信頼性と、マージ期間中の MQL ボリュームスパイクを監視する必要があります。スコアベースのキャンペーンを構築するときは、最低 2 分の待機ステップを持つトリガーに `RingLead Merge Date/Time` の削除ロジックを常に含め、追加の保護のために、最近のアクティビティや「マージされていない」ステータスなどの追加フィルターを検討してください。

重複排除プロジェクトの場合、低トラフィック時間中に 100〜500 レコードの小さなバッチでマージを計画し、最初に 50 レコードのテストバッチを実行してタイミングを検証し、実行中に同期キューを監視し、Sales Dev と Analytics に潜在的な誤った MQL について連絡します。プロジェクト後の MQL 監査とクリーンアップのための時間を組み込み、大規模プロジェクト（10,000 件以上のレコード）の場合、レコードを一時的に一時停止/除外して、実行中に MQL Stamp キャンペーンによってピックアップされないようにすることを検討します。

**注意:** 影響を受けたリードから SLA データを削除する方法はありません。マネージャーは、特定のリード ID をレポートから除外して、チーム平均を歪めている場合に対処できます。

### 推奨される操作の順序

1. リード重複排除（完了 & 自動化済み - 毎週土曜日に実行）
2. アカウント重複排除（Openprise を選択ツールとして使用し、Sales Operations が実行）
3. リードを新しいコンタクトに変換（私たちのケースではこのステップはスキップされます。これは sales workflow に大きな影響を与えるためです。sales チームが現在のように heavily focused on leads でない場合、再評価します。）
4. コンタクト重複排除（完了 & 自動化済み - 毎週土曜日に実行）
5. リードからコンタクトの重複排除（完了し、Scheduled Task に取り組んでいます）
6. カスタムオブジェクトの重複排除（必要な場合のみ）

### アカウント重複排除

アカウント重複排除は現在、Sales Ops によって管理されています。重複排除ジョブは ZI Company ID を持たない Prospect Accounts に適用され、毎週土曜日 12:00 PDT に実行されます。

### リードからリードへの重複排除

リードからリードへの重複排除は Marketing Ops が管理し、毎週土曜日に実行されます。重複排除ジョブから、特定のリードレコードが除外されます:

- Impartner Partner Account フィールドに値があるレコード
- 積極的にシーケンスされているレコード
- ステータスが Qualifying または Qualified のレコード
- Last Name または Company Name のいずれかが `[[unknown]]` のレコード

### コンタクトからコンタクトへの重複排除

コンタクトからコンタクトへの重複排除は、リードからリードへの重複排除と同様に、Marketing Ops によって管理され、毎週土曜日に実行されます。重複排除ジョブから、特定のコンタクトレコードが除外されます:

- Account Type = `Partner` のレコード
- 積極的にシーケンスされているレコード
- ステータスが Qualifying または Qualified のレコード
- Last Name または Account Name のいずれかが `[[unknown]]` のレコード
- **On Open Quote** チェックボックスを使用してオープンクォート上にあるとフラグされたレコード
- **Current Customer** チェックボックスで現在の顧客としてマークされたレコード

### リードからコンタクトへの重複排除

リードからコンタクトへの重複排除は Marketing Ops によって管理され、最初のバッチの重複排除は FY25Q4 で完了しています。Marketing Ops は、スケジュールされたジョブをオンにするために MQL スタンプ/Rescoring 自動化を解決することを検討しています。重複排除ジョブから、特定の Leads と contacts のレコードが除外されます:

**Lead レコードフィルター**

- Impartner Partner Account フィールドに値があるレコード
- 積極的にシーケンスされているレコード
- ステータスが Qualifying または Qualified のレコード
- Last Name または Company Name のいずれかが `[[unknown]]` のレコード
- Lead Source が UserGems で始まらないレコード

**Contact レコードフィルター**

- Impartner Partner Account フィールドに値があるレコード
- Account Type = `Partner` のレコード
- 積極的にシーケンスされているレコード
- ステータスが Qualifying または Qualified のレコード
- Last Name または Account Name のいずれかが `[[unknown]]` のレコード
- **On Open Quote** チェックボックスを使用してオープンクォート上にあるとフラグされたレコード
- **Current Customer** チェックボックスで現在の顧客としてマークされたレコード
- Lead Source が UserGems で始まらないレコード

### カスタムオブジェクト重複排除

すべての標準フィールドが操作の正しい順序で重複排除されたら、カスタムオブジェクトの重複排除に移行して、すべてのカスタムオブジェクトもクリーンで重複のない状態であることを確認できます。
