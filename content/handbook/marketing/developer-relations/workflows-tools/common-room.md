---
title: "Common Room のワークフロー"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/common-room/
upstream_sha: a6d55368c73e5825dab217629d9ddb5d23a5fb53
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-30T09:28:09+09:00"
translator: codex
stale: false
---

[Common Room](https://www.commonroom.io/docs/get-started/) は、さまざまなプラットフォームのデータを統合し、メンバーを特定し、トレンドと感情をレポートすることで、デジタルコミュニティの管理、関与、成長を支援するコミュニティ成長プラットフォームです。

[Developer Relations](/handbook/marketing/developer-relations/) チームは、コミュニティプラットフォーム全体からのインサイトを集約、レビューし、アクションを取るために Common Room を使用します。トレンドとコミュニティの感情を追跡するためにも使用します。

## Common Room へのアクセス

アクセスは Okta 経由で付与され、個別のシートごとに課金されます。現在、利用可能な空きシートはありません。追加のシートは Zip リクエストで購入できます。

Common Room へのアクセスをリクエストするには、

1. ビジネスケースと説明をこのハンドブックページに追加してください。
2. MR がマージされたら、`Individual_Bulk_Access_Request` テンプレートを使用して、Common Room の [アクセスリクエスト](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests/)を作成してください。
3. ステップ 2 の _Justification for this access_ で、Common Room を使用するビジネスケースを説明し、リンクしてください。

### 一時アクセス

シートを購入する可能性を評価するため、3 か月間の一時アクセスを利用できます。Common Room との 30 分間のオンボーディングを行う必要があります。

1. Individual_Bulk_Access_Request テンプレートを使用して[アクセスリクエスト](/handbook/eta/corporate-it/end-user-services/access-requests/access-requests/)を作成してください。3 か月間の一時シートであることを指定してください。
2. Developer Evangelism Meta で[機密 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=common-room-temporary-access)を作成して、一時シートの有効期限を記録してください。
3. `@sugaroverflow` が Common Room との必須オンボーディングミーティングを予定し、3 か月後にシートをデプロビジョニングします。

## GitLab データ

Common Room は GitLab とネイティブには統合されていません。
スケジュールされたパイプラインで実行されてデータを取り込む[カスタム Ruby スクリプト](https://gitlab.com/gitlab-org/developer-relations/gitlab-common-room-api-source)があります。

## リソース

* Common Room の[開始方法に関するドキュメント](https://www.commonroom.io/docs/get-started/)。
* Common Room の[コミュニティ育成のプレイブック](https://www.commonroom.io/resources/)。

## Developer Relations のビジネスケース

### GitLab コントリビューターとスーパーユーザーの支援

**DRI**: [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)

**説明**:

* [セグメント](https://www.commonroom.io/docs/using-common-room/segments/)の Heroes、Core Team、MVP を監視します。
* それらのセグメントでどのトピックがトレンドになっているかを確認し、ネガティブな感情を追跡します。
* 活動に基づいて、新しいコントリビューターになる可能性がある人を見つけます。

**KPI**:

* 各セグメントのアクティブなコントリビューター数とエンゲージメント率。

**成果**:

* 上位のコントリビューター、スーパーユーザー、新たなスーパーユーザー候補の活動と関心をよりよく理解します。
* さまざまな種類のコントリビューションに関するインサイト。

### コミュニティエンゲージメントの追跡

**DRI**: [Fatima Sarah Khalid](https://gitlab.com/sugaroverflow)

**説明**:

* すべてのコミュニティプラットフォームで人気のあるディスカッションをレビューします。
* カスタムダッシュボードを作成するか、レポートをエクスポートして分析とレポート作成を行います。
* ネガティブな感情とトレンドのトピックを追跡します。

**KPIs**:

* コミュニティプラットフォーム全体のアクティブな参加者数とエンゲージメント（投稿/コメント/リアクション）。
* コミュニティ全体の感情分析。
* コミュニティの応答率。

**成果**:

* コミュニティプラットフォームにおけるエンゲージメントのレベルと種類を理解します。
* 人気のトレンドとネガティブな感情を早期に明らかにします。
* 活動またはエンゲージメントの低さに関する議論または戦略を促します。

### ソートリーダーシップのためのキーワードトレンドの特定と監視

**DRI**: [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/)
**説明**:

* チームアラートを通じてトレンドのキーワードと会話を追跡します。
* これらのキーワードが私たちのコミュニティと目標に関連するかを評価します。
* ソートリーダーシップの参考および今後のコンテンツ作成のために、キーワードバンクを作成・更新します。

**KPIs**:

* トレンドのキーワードの数と頻度。

**成果**:

* コミュニティ内のトレンドトピックについて常に情報を得ます。
* トレンドトピックとコミュニティの関心に基づいてコンテンツ作成を導きます。

### Open Source プログラムの機会の特定

**DRI**: [Developer Relations Programs](/handbook/marketing/developer-relations/programs/)

**説明**:

* [Open Source プログラム](/handbook/marketing/developer-relations/programs/open-source-program/)の潜在的な組織を監視します。
* 潜在的な協業を特定するため、既存パートナー（セグメント経由）の活動、トレンドのキーワード、感情をレビューします。

**KPI**:

* 既存のパートナー組織によるアクティブな参加の割合。

**成果**:

* OSS プログラムの潜在的なメンバーと活動を特定します。
* 機会を積極的に特定して協業の数と質を向上させます。

### 新規メンバーのオンボーディング（Discord）

**DRI**: [Fatima Sarah Khalid](https://gitlab.com/sugaroverflow)

**説明**:

* コミュニティの新規メンバーを自動的に特定し、主要なリソースとコミュニティガイドラインを含むウェルカムメッセージを送信します。自動フォローアップのオプションも含まれます。

**KPIs**:

* オンボーディングした新規メンバー数とエンゲージメント率。
* 新規メンバーの定着率。

**成果**:

* 新規メンバーがコミュニティにスムーズに移行します。
* エンゲージメントと定着率が向上する可能性があります。

## Common Room から情報をリクエストする

Common Room から情報を抽出するリクエストについては、[Developer Advocacy Meta プロジェクトで機密 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/de-tmm-meta/-/issues)を開き、リクエストの詳細を記載して `@sugaroverflow` に割り当ててください。その後、DevRel チームがクエリを実行し、レポートを PDF として Issue にエクスポートできます。

リクエストは、情報をエクスポートすることも、Slack への[チームアラート](https://www.commonroom.io/docs/using-common-room/team-alerts-page/)を設定することもできます。レポートの種類の詳細は、[Common Room のドキュメント](https://www.commonroom.io/docs/using-common-room/reporting-page/room-overview/)で確認できます。

リクエストに基づくビジネスケースをいくつか示します:

### 特定の顧客エンゲージメントの追跡

**DRI**: [Jordan Chivell](https://gitlab.com/jchivell)

**説明**:
Sales は、特定の顧客に関する重要な情報やコンテキストを得たい場合があります。Sales は、コミュニティでの顧客の交流パターン（投稿、コメント、主な関心領域、コミュニティプラットフォームで提起した可能性があるクエリ）を確認したいと考えます。

**成果**:

* コミュニティ内の顧客行動に対する理解を深めます。
* コミュニティからの重要なコンテキスト情報を提供して、営業パイプラインの生成プロセスを支援します。
