---
title: "LinkedIn Sales Insights"
description: "LinkedIn Sales Insights は LinkedIn のデータとインサイトに大規模にアクセスする手段を提供し、Sales Operations がよりスマートなセールスプランニングを行うために必要な明瞭さをもたらします。"
upstream_path: /handbook/sales/field-operations/sales-operations/linkedin-sales-insights/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

### LinkedIn Sales Insights について

LSI は、LinkedIn のデータベースから SFDC のアカウントレコードへとデータを参照・エクスポートできるツールです。

- 注: このツールが提供するデータは、すべて LinkedIn のレジュメに本人が記載した情報のみに基づいています。つまり、ある企業の全従業員が LinkedIn を使っているわけではない場合や、特定の国で LinkedIn があまり広く使われていない場合は、LinkedIn データが私たちのビジネス上の疑問のすべてに答えられるわけではありません。

GitLab における現在の主なユースケースは、SFDC Account オブジェクトの LinkedIn Developer Count フィールドに開発者数を投入することです。

- このフィールドは Sales が見ることができ、プロスペクトアカウントの優先順位付けに役立ちます。セールスマネージャーが LinkedIn Developer Count に異論がある場合は、Potential Users フィールドを設定できます。
- また、LinkedIn Developer Count を LAM 計算のインプットとしても使用し、アカウントの将来的な成長余地を把握するのに役立てます。

LSI は、従業員数、業界、HQ や本人の所在地のほか、最近 LinkedIn に投稿された求人件数（成長の指標）や、その企業の従業員が LinkedIn 上で GitLab 従業員とつながっている数（コネクティビティ）といった情報も提供します。

- 従業員数、業界、住所のデータは、より信頼性の高い他のソースからすでに取得しているため、LSI のその情報を使用するつもりはありません。セグメンテーションとアサインメントについては、引き続き [ROE](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement) に記載された手順とデータソースに従います。

### ログイン

このツールは現在、Sales Ops と Sales Leadership（ASM 以上）のみがアクセスできます。

LinkedIn Sales Insights（LSI）には、通常の LinkedIn ユーザー名/パスワードでログインできます: https://www.linkedin.com/sales-insights/

アクセスをリクエストするには、[Access Request](/handbook/security/corporate/end-user-services/access-requests/access-requests/#how-do-i-choose-which-template-to-use) を作成してください。

### Sales Leadership（ASM 以上）のユースケース

1. Sales Leadership はこのツールを使って、Salesforce アカウントレコードのデータと LinkedIn のデータベースの内容を比較できます。
   - Sources タブで、SFDC からエクスポートしたアカウントの .csv ファイルをアップロードできます。
   - Reports タブで、自分のリストを Source として選択すると、ツールがその企業についての LinkedIn データを返します。
   - あるいは、Reports タブで Salesforce CRM を Source として選択すると、ツールが一致するすべての Salesforce アカウントレコードについて LinkedIn データを返します。
   - レポート結果は LSI ツール内の画面で確認できます。レポート結果のエクスポートはできません。
   - Salesforce アカウントレコードと LinkedIn の企業レコードのマッチングはツールが自動的に行い、カスタマイズはできません。マッチングは SFDC のアカウント名、ウェブサイト、住所フィールドに依存します。LinkedIn は、正しい企業にマッチングできているかの確信度を示す Match Score（0〜5、5 が最高）を提供します。

1. このツールは Sales Leadership がホワイトスペース（GitLab の潜在顧客でありながら、まだ SFDC にアカウントが存在しない企業）を評価・調査するためにも使えます。
   - これは本格的なアウトバウンドプロスペクティングツールではありません。LinkedIn のデータベースにあって Salesforce CRM にないアカウントを見ることでホワイトスペースを調査できますが、ホワイトスペースを埋めるために新しい SFDC アカウントレコードを作成する機能は現時点ではありません。これは手動で行う必要があります。

### Sales Operations のユースケース

1. ソフトウェア開発者の人数を取得するには、特定の職務タイトルや職務機能を持つ人を探す Persona を設定できます。特定の Persona に対してレポートを実行すると、その Persona に一致する LinkedIn のレジュメから従業員数が得られます。たとえば、現在は「Eng/IT (by job function)」Persona を使って LinkedIn 上のソフトウェア開発者数を取得しています。
   - Persona は限られた数（3〜6）しか許可されていません。
   - 新しい Persona を作成する際は、Sales Strategy & Analytics のインプットを得て行う必要があります。
1. Sales Ops はレポート結果を Salesforce の該当アカウントレコードに直接エクスポートできます。
   - LinkedIn の企業を Salesforce CRM にエクスポートすると、その後は毎日午前 0 時（PST）に LinkedIn データで自動エンリッチが続きます。
   - LSI からのレコードエクスポートは 1 レコードあたり 1 クレジットを消費します。クレジットは年単位で 20k レコード単位で購入しています。
   - 追加クレジットの購入は、Sales Operations の Senior Director / Director と Sales Strategy & Analytics の Senior Director の承認が必要です。
1. クレジット購入や初期実装情報などの Sales Operations のさらなるユースケースについては、LSI Sync Doc を参照してください: [こちら](https://docs.google.com/document/d/1acxMAloxho4y3EjFb47OjuMhA0QvuTai-CQs-X89KN4/edit)
