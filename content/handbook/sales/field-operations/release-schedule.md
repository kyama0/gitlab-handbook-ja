---
title: "オペレーション/プロセス/ツール更新のための Spekit"
description: "RSOE は Spekit ツールを使用して、オペレーション、プロセス、および/またはツールの変更について Field チームに更新を伝えます。"
upstream_path: /handbook/sales/field-operations/release-schedule/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T10:00:00Z"
translator: claude
stale: false
---

## オペレーション/プロセス/ツール更新における Spekit の活用方法

GitLab は Spekit をジャストインタイムのイネーブルメントプラットフォームとして活用し、Field チームメンバーが作業しているツールやシステムに直接、カスタムリソースとプロセスの詳細を埋め込んでいます。

[Field Communications チーム](/handbook/sales/field-communications/)は、オペレーション、プロセス、ツールに関連する変更や更新をサポートするために Spekit を活用しています。これにより、チームメンバーは関連するツール内に直接表示される通知を通じて、ツールやプロセスの変更が何で、いつ起こるかを理解できます（変更について Slack やその他のコミュニケーションチャネルを通じて文脈外で伝達する場合は、見落とされたり忘れられたりする可能性が高くなります）。

### アナウンスタイプ別の Spekit アプローチ

Field Communications は、影響範囲に基づいて各更新を評価し、このアナウンスタイプに基づいて Spekit 通知への定義されたアプローチを適用します。

1. **高インパクトな変更（通常 [Field Comms tier 1-3](/handbook/sales/field-communications/#field-communications-playbook) に整合）:** この変更は、対象者にとって本質的に顧客または収益に影響を与える主要なプロセスに影響します（例: 新しい SKU、システムダウンタイム、Sales Stages のような tier 1/tier 2 のローンチ）。
   1. **Spekit Comms 取り扱い – 最も大きな声で:** 最も関連性の高い URL（ツールのホームページ）のホームページに Spotlight が表示され、変更の詳細を含む spek を共有します。Field Comms は、必要と判断された場合、Update Tickers での補強の権利を留保します。*例: ツール非推奨の通知が、ユーザーがログインしたときにツールのホームページに表示される。*
1. **中インパクトな変更（通常 [Field Comms tier 4-5](/handbook/sales/field-communications/#field-communications-playbook) に整合）:** この変更は、対象者の効率にとって重要であり、混乱を減らし正しい行動を促進するために認識しておく必要があるプロセスに影響します（例: 見積もりの変更、新しい優先度の高いフィールド、ダッシュボード/レポートのような新しいリソース）。
   1. **Spekit Comms 取り扱い – より静かに:** ツール/システム内の特定のページに Spotlight が表示され、変更の詳細を含む spek を共有します。*例: 見積もりの変更が、次回ユーザーがクオートモジュールを開いたときに SFDC に表示される。*
1. **低インパクトな変更（通常 [Field Comms tier 6](/handbook/sales/field-communications/#field-communications-playbook) に整合）:** この変更は対象者が知っておくとよいものですが、彼らにとって主要な効率向上要因ではありません。
   1. **Spekit Comms 取り扱い – 最も静かに:** ユーザーは Spekit プラグインの通知ペインで更新を含む新しい spek について通知されます。*例: ユーザーは Spekit のサイドパネルで通知ベルを受け取り、Opportunity ページの新しいフィールドの概要を示す spek を共有します。*

注: 変更の範囲によっては、同じ変更でも対象者ごとに異なるインパクトレベルが適用される場合があります。例えば、見積もりの変更は Sales 担当者にとっては中インパクトであっても、CSM/SA にとっては低インパクトかもしれません。チームは、このスコープに基づいて、さまざまな対象者に対して通知の表示方法をカスタマイズできます。

### Spekit を介したオペレーション/プロセス/ツール更新のサポート要請

**リクエスト者は、Field チームに通知する必要があるすべての更新に使用される、同じ [Field Announcement Request Process](/handbook/sales/field-communications/#requesting-field-announcements) に従う必要があります。**

1. Issue が開かれたら、リクエスト者は変更に応じてアナウンスタイプとして `System Changes/System Updates` および/または `Process Change` を選択する必要があります。
1. リクエスト者は、[Spekit テンプレート]を満たすために必要なすべての情報を提供する必要があります。
1. Field Comms はリクエストをトリアージし、ツール/システムまたはオペレーション/プロセスの更新として識別すると、リクエスト者に Spekit の Spek を完成させるために必要な情報を提供するよう依頼します。
1. この時点で、Field Comms はアナウンスタイプに基づいてコミュニケーションアプローチについて助言し、合意を得ます。
1. 変更がアナウンスする準備ができたら、Field Comms は関連する Spek を公開ビューに移動させ、アナウンスをサポートする Spotlight または Notification の作成を支援します（上記のステップで定義されたアプローチに基づく）。
1. Field Comms は、アナウンスから 1 週間後に Spekit での Spotlight または Notification のパフォーマンスのスナップショットを提供します。

### Spekit に関する Field Communications ガイドライン

1. すべての Spotlight は、システムのクラッターを避けるために、特に指定がない限り、アナウンス日から 2 週間で期限切れに設定されます。
1. すべての Spek は、システムのクラッターを避けるために、特に指定がない限り、アナウンス日から 6 ヶ月で期限切れに設定されます。
   1. Spek の作成者は、GitLab YYY-MM-DD 形式で Spek 内のカスタムフィールドに Spek の有効期限を追加する必要があります。
1. メール通知機能は、Field チームに対するノイズを増やしすぎないように、現時点では活用しません。これは後日再評価される可能性があります。
1. Spotlight は、無視されたりネイティブツールの通知と間違えられたりしないように、[GitLab ブランドのイメージ](/handbook/sales/field-operations/release-schedule/#gitlab--branded-imagery-in-spekit) を組み込む必要があります。
1. Field チームへの過負荷を避けるため、Spekit で 1 週間に 1〜2 件以上の Spotlight を送信すべきではありません。週の上限に達した場合、Field Comms は次週への持ち越しを助言します。[四半期末の静寂期間](/handbook/sales/field-communications/#field-comms-quiet-periods)中は Spotlight を送信すべきではありません。例外は優先度に基づいて検討されますが、推奨されません。
1. 更新がページの特定の部分（例: 新しいフィールド）に関連する場合、既存のものをオーバーライドしない限り、可視性を高めるために spek を埋め込むのがデフォルトとなります。

### Spekit のオペレーション/プロセス/ツール更新テンプレート

Spekit へのアクセス権がある場合は、テンプレートを[こちら](https://app.spekit.co/app/wiki/?type=object%2Cfield_value%2Cbusiness_term%2Casset&topic=4cfd134c-8f0d-4e21-8eb5-b2816ead2d88&tag=Changes%2FAnnouncements%20Drafts&expanded=true)で見つけることができます。アクセス権がない場合は、以下の更新テンプレートを確認し、Field Announcement Request の Issue を作成する際にこのテンプレートを完成させるために必要なすべての情報を提供していることを確認してください。

> - **Title:** 変更が何であるかを説明する詳細なタイトル
> - **Summary:** 変更の概要。何が変更されるか、なぜ変更されるかを必ず述べてください。
> - ❗️**Action Needed:**❗️ アクション/CTA が必要な場合は、ここで明確に概説し、期日を含めてください。
> - 📖 **Resources:** 📖 サポートリソース/リンクのリストを提供してください。例にはハンドブックページや Issue のリンクが含まれます。
> - **Who:** この変更が影響を与える対象者/チームを概説してください。可能な限り具体的にしてください。
> - **DRI:** 名前を提供してください
> - **Timeline:** この変更に関連する時間制限/終了日などはありますか、それとも今後常時適用されるものですか？ --> Time-bound / Evergreen
>   - Time-bound の場合 --> 終了日/期間を提供してください

### Spekit における GitLab ブランドのイメージ

クリエイターは、Spekit で Spotlight を構築する際に使用する 6 つのカスタム画像から選択できます。これらの画像は[こちらの Drive ファイル](https://drive.google.com/drive/folders/11GwsupAb3dayfSSP_SZ_w0w7KkkPsXIc?usp=sharing)で見つけることができ、以下で構成されています:

1. 3 - 汎用 GitLab 画像
1. 3 - 注意を引くテキストベースの画像
   1. Process Update
   1. Tool Update
   1. Incident Report

加えて、3 つの既存画像のいずれも該当しない場合に、ブランドガイドラインに沿ったテキストベースの画像をカスタム作成するための [Canva テンプレート](https://www.canva.com/design/DAGOCmVEVoI/-J-pk80dtxI59EyYqIp5Eg/edit?utm_content=DAGOCmVEVoI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)が利用可能です。Canva へのアクセス権がない場合は、[Access Request](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を開いてください。

### Phase 2: Field 更新のための GitLab Spekit エキスパート

将来の状態では、ツール/システムおよびオペレーション/プロセス更新に貢献する主要な RSOE + 拡張チームのそれぞれから 1〜2 名のチームメンバーを特定します。これらのチームメンバーは Spekit のトレーニングを受け、Changes/Announcements Drafts トピックに貢献するための「エキスパート」ユーザー権限（「RSOE Experts」グループ経由）が付与されます。これらの分野の更新に関連するアナウンスのリクエストが行われると、これらのチームメンバーがテンプレート形式に従って spek を作成するよう ping されます。
