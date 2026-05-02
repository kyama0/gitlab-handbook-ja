---
title: "Beefree"
description: "Beefree メールビルダー"
upstream_path: /handbook/marketing/marketing-operations/beefree/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---
## Beefree について

Beefree は、プロフェッショナルなメールテンプレートやキャンペーンを作成するために使用されるメールビルダーツールです。

## アクセス

Beefree は主に Lifecycle Marketing チームで利用されています。シート数は限られていますが、特殊なメールを作成する必要があるチームメンバーには割り当てています。

アクセスをリクエストするには、Lumos でリクエストを完了してください。アクセスが承認されると、Beefree 組織への招待メールが届きます。

ログイン: Okta の Beefree タイルをクリックし、ログイン画面で「SSO」オプションを選択します。

## Beefree を使うべきとき

私たちのマーケティングオートメーションプラットフォームと統合するプロフェッショナルなメールテンプレートを作成する必要がある場合に Beefree を使用します。

## トレーニング

* ハンズオントレーニング動画

## 連携

Beefree は Marketo および Iterable と統合されます。プロジェクトのステータスを追うには、[こちら](https://app.asana.com/1/306855239930259/project/1210465915628353/list/1210467082112980) の Asana プロジェクトを参照してください。

## BeeFree と Marketo でトークンを使用する

BeeFree は動的コンテンツに対して「マージタグ」という用語を使用しますが、Marketo および Iterable と統合されているため、代わりに Marketo トークンと Iterable マージパラメーターを使用します。

Marketo 用に BeeFree でメールを作成するときは、`{{my.tokenName}}` の形式でトークンを追加してください。リンク内の UTM トラッキングには `{{my.utm}}` を使用します。

## クイックベストプラクティス

1. クローンではなく、必ずテンプレートから作成すること

2. 可能な限り、ゼロから構築するのではなく、フォルダーから保存されたモジュールを利用すること。新しいモジュールが念頭にある場合は、@aklatzkin または @cbaun にサポートを依頼してください。

3. Marketo 用と Iterable 用で正しいフッターおよびヒーローモジュールを使用していることを確認すること:
   * Iterable 版には `{{utm}}`、`{{email}}`、`{{unsubscribeUrl}}`、`{{viewInBrowserUrl}}` が含まれます
   * Marketo 版には `{{my.utm}}`、`{{my.email address}}`、`{{system.unsubscribeLink}}`、`{{system.viewasWebPageLink}}` が含まれます

4. メール内のメール詳細 (件名とプリヘッダーテキストのみ) を必ず更新すること。これはメールのタイトルとプレビューテキストに表示されます

   ![Email details section](/handbook/marketing/marketing-operations/beefree/Screenshot_2025_10_06_at_5.19.51_PM.png "件名とプリヘッダーテキストフィールドを示すメール詳細セクション")

5. メール内に主要な CTA リンクが 1 つある場合、リンクにはトークンを使用すること (例: スケーラビリティのための Marketo 用 `https://{{my.LandingPageURL}}?lb_email={{lead.email address}}&{{my.utm}}`)

6. デスクトップ版とモバイル版の両方でリンクが正しいことを確認すること

7. 矢印やチェックマークを箇条書きとして使用している場合、モバイル版ではこれらを箇条書きに設定すること。

8. イベントの場合、スケーラビリティのためメールのできるだけ多くの部分をトークン化すること。

9. メールを Marketo または Iterable に追加したら:
   * メールのテキストのみのバージョンを更新すること
   * 以下を含め、すべてのトークンが正しくコピーされていることを確認すること:
     * 配信停止リンク: Marketo の場合は `{{system.unsubscribeLink}}`、Iterable の場合は `{{unsubscribeUrl}}`
     * Web ページとして表示するリンク: Marketo の場合は `{{system.viewAsWebpageLink}}`、Iterable の場合は `{{viewInBrowserUrl}}`
   * 件名とプリヘッダーテキストが反映されていることを確認すること
     * Marketo の場合、以下の詳細が記入されていることを確認:

      ![Marketo email settings](/handbook/marketing/marketing-operations/beefree/Screenshot_2025_10_07_at_2.10.59_PM.png "件名とプリヘッダー設定を示す Marketo のメール設定")

     * Iterable の場合: 以下の詳細が記入されていることを確認:

      ![Iterable email settings](/handbook/marketing/marketing-operations/beefree/Screenshot_2025_10_07_at_2.12.59_PM.png "件名とプリヘッダー設定を示す Iterable のメール設定")
