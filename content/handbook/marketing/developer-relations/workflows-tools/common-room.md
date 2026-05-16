---
title: "Common Room ワークフロー"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/common-room/
upstream_sha: 6b2970dac4d9078a5a79c285a6ee08817ecbd954
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-27T10:00:00+01:00"
---

[Common Room](https://www.commonroom.io/docs/get-started/) は、異なるプラットフォーム間のデータを統合し、メンバーを特定し、トレンドや感情を可視化することで、デジタルコミュニティの管理・エンゲージメント・成長を支援するコミュニティグロースプラットフォームです。

[Developer Relations](/handbook/marketing/developer-relations/) チームは、コミュニティプラットフォーム全体からのインサイトを集約・レビューし、それを基にアクションを取るために Common Room を利用しています。トレンドやコミュニティ感情の追跡にも使用しています。

## Common Room へのアクセス

アクセス権は Okta 経由で付与され、個人席（シート）ごとに課金されます。現在、空きシートはありません。追加のシートは Zip リクエスト経由で購入できます。

Common Room へのアクセスをリクエストするには:

1. ビジネスケースと説明をこのハンドブックページに追加してください。
2. MR がマージされたら、`Individual_Bulk_Access_Request` テンプレートを使用して Common Room の[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を作成してください。
3. ステップ 2 の _Justification for this access_（このアクセスが必要な理由）に、Common Room を使用するビジネスケースの説明とリンクを記載してください。

### 一時的なアクセス

シート購入の事前評価のため、3 ヶ月間の一時的アクセスが利用可能です。Common Room との 30 分間のオンボーディングミーティングへの参加が必要です。

1. Individual_Bulk_Access_Request テンプレートを使用して[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を作成してください。3 ヶ月間の一時シートであることを明記してください。
2. Developer Evangelism Meta に[機密 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=common-room-temporary-access) を作成し、一時シートの有効期限を記録してください。
3. `@sugaroverflow` が Common Room との必須オンボーディングミーティングをスケジュールし、3 ヶ月後にシートをデプロビジョニングします。

## GitLab データ

Common Room はネイティブには GitLab と統合されていません。
データ取り込みのため、スケジュールパイプラインで実行される[カスタム Ruby スクリプト](https://gitlab.com/gitlab-org/developer-relations/gitlab-common-room-api-source)があります。

## リソース

* Common Room の[入門ドキュメント](https://www.commonroom.io/docs/get-started/)。
* Common Room の[コミュニティ育成のためのプレイブック](https://www.commonroom.io/resources/)。

## Developer Relations のビジネスケース

### GitLab コントリビューターとスーパーユーザーの支援

**DRI**: [Developer Relations Engineering チーム](/handbook/marketing/developer-relations/engineering/)

**説明**:

* [セグメント](https://www.commonroom.io/docs/using-common-room/segments/) Heroes、Core Team、MVPs を監視。
* これらのセグメントでトレンドのトピックやネガティブな感情を追跡。
* 活動内容に基づき、潜在的な新規コントリビューターを発見。

**KPI**:

* 各セグメントにおけるアクティブコントリビューターの数とエンゲージメント率。

**成果**:

* トップコントリビューター、スーパーユーザー、新たなスーパーユーザー候補の活動と興味の理解の向上。
* さまざまな種類のコントリビューションへのインサイト。

### コミュニティエンゲージメントのトラッキング

**DRI**: [Fatima Sarah Khalid](https://gitlab.com/sugaroverflow)

**説明**:

* すべてのコミュニティプラットフォーム横断で人気のディスカッションをレビュー。
* カスタムダッシュボードの作成またはレポートのエクスポートで分析・レポーティングを実施。
* ネガティブ感情とトレンドのトピックを追跡。

**KPIs**:

* コミュニティプラットフォーム全体のアクティブな参加者数とエンゲージメント（投稿/コメント/リアクション）。
* コミュニティ全体の感情分析。
* コミュニティの応答率。

**成果**:

* コミュニティプラットフォームのエンゲージメントのレベルと種類の理解。
* 人気のトレンドとネガティブ感情を早期に把握。
* 活動やエンゲージメントが低い場合の議論や戦略を促進。

### ソートリーダーシップのためのキーワードトレンドの特定とモニタリング

**DRI**: [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/)
**説明**:

* チームアラート経由でトレンドのキーワードや会話を追跡。
* これらのキーワードがコミュニティと目標にどの程度関連しているかを評価。
* ソートリーダーシップ向けのコンテンツ作成の参考や将来の利用に向けて、キーワードバンクを作成・更新。

**KPIs**:

* トレンドキーワードの数と頻度。

**成果**:

* コミュニティ内でトレンドとなっているトピックを把握し続ける。
* トレンドのトピックとコミュニティの関心に基づいてコンテンツ制作を導く。

### Open Source プログラムの機会発掘

**DRI**: [Developer Relations Programs](/handbook/marketing/developer-relations/programs/)

**説明**:

* [Open Source プログラム](/handbook/marketing/developer-relations/programs/open-source-program/)向けに潜在的な組織を監視。
* 既存パートナー（セグメント経由）の活動、トレンドキーワード、感情をレビューし、潜在的なコラボレーションを特定。

**KPI**:

* 既存パートナー組織からのアクティブな参加率。

**成果**:

* OSS プログラム向けの潜在メンバーや活動を特定。
* 機会を主体的に発掘することでコラボレーションの数と質を向上。

### 新規メンバーのオンボーディング（Discord）

**DRI**: [Fatima Sarah Khalid](https://gitlab.com/sugaroverflow)

**説明**:

* コミュニティ内の新規メンバーを自動的に特定し、主要リソースとコミュニティガイドラインを含むウェルカムメッセージを送信。自動フォローアップのオプションも含みます。

**KPIs**:

* オンボードされた新規メンバーの数とエンゲージメント率。
* 新規メンバーの定着率。

**成果**:

* 新規メンバーがコミュニティへスムーズに移行できる。
* エンゲージメントと定着率の向上の可能性。

## Common Room からの情報のリクエスト

Common Room からの情報抽出をリクエストする場合は、[Developer Advocacy Meta プロジェクトに機密 Issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/de-tmm-meta/-/issues) をリクエストの詳細とともに作成し、`@sugaroverflow` にアサインしてください。DevRel チームがクエリを実行し、レポートを PDF として Issue にエクスポートします。

リクエストは情報のエクスポートのほか、Slack への[チームアラート](https://www.commonroom.io/docs/using-common-room/team-alerts-page/)の設定も可能です。レポーティングの種類は [Common Room のドキュメント](https://www.commonroom.io/docs/using-common-room/reporting-page/room-overview/)で詳しく確認できます。

リクエストベースのビジネスケースの例:

### 特定顧客のエンゲージメント追跡

**DRI**: [Jordan Chivell](https://gitlab.com/jchivell)

**説明**:
営業（Sales）が特定の顧客に関する重要情報やコンテキストを得たい場合があります。コミュニティでの顧客のインタラクションパターン（投稿、コメント、関心領域、コミュニティプラットフォームで提起した質問など）を確認したいというニーズです。

**成果**:

* コミュニティ内での顧客行動の理解の向上。
* コミュニティからの重要なコンテキスト情報を提供することで、営業のパイプライン生成プロセスを支援。
