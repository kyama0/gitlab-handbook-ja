---
title: "Cognism"
description: "Cognism は、コンタクトおよびアカウントデータを提供するセールスインテリジェンスソフトウェアであり、セールスチームとマーケティングチームが予測可能なパイプラインを推進するのに役立ちます。"
upstream_path: /handbook/marketing/marketing-operations/cognism/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

## Cognism について

Cognism は、コンタクトおよびアカウントデータを提供するセールスインテリジェンスソフトウェアであり、セールスチームとマーケティングチームが予測可能なパイプラインを推進するのに役立ちます。

## セットアップ

ログイン情報を受け取り Cognism プラットフォームに入ったら、Cognism Chrome 拡張機能をダウンロードする必要があります。Cognism Chrome 拡張機能のリンクは、こちらの [リンク](https://help.cognism.com/hc/en-gb/articles/4403402216722-How-to-install-the-Cognism-Chrome-Extension) からも確認できます。

## ツールの連携

Cognism Web App にログインしたら、まずツール (Salesforce および Outreach) を連携してください。これにより、両方のツールへリードをエクスポートできるようになります。

このプロセスは非常にシンプルですが、必要に応じて [Cognism と Salesforce の連携方法](https://help.cognism.com/hc/en-gb/articles/4407455139602-How-to-Integrate-Cognism-to-Salesforce-) および [Cognism と Outreach の連携方法](https://help.cognism.com/hc/en-gb/articles/12127689794834-How-to-integrate-Cognism-to-Outreach) のドキュメントを参照してください。

## Cognism へのアクセス方法

直接ログインを使用すると、[Cognism Web App](https://app.cognism.com/auth/sign-in) または Cognism Chrome 拡張機能のいずれにもログインできます。両方とも Cognism のデータにアクセスできます。さらに、Cognism データは私たちの SFDC インスタンスに直接取り込まれ、自動エンリッチの基準を満たすリード、または Chrome 拡張機能や Cognism Web App から手動でエクスポートされたリードについて、Cognism のフィールドに反映されます。

## GitLab で Cognism を利用できるのは誰ですか?

現時点では、Cognism Web App と Cognism Chrome 拡張機能は Sales Development Organization、特に BDR ロールでのみ利用されています。BDR ロール以外でも、利用可能な場合は一時ライセンスを許可していますが、BDR がライセンスを必要とした時点で、その一時ライセンスはすぐに取り消されます。

ただし、特定のリードレコードでエンリッチされた Cognism データは、リードおよびコンタクトオブジェクトの Cognism フィールドを確認することで、誰でも閲覧できます。

なお、アクティブでないシートは新しい Cognism ユーザーに再配布します。過去 2 か月間 Cognism にログインしていないユーザーはシートを失う可能性があります。Cognism のシートを保持したい場合は、定期的にログインしてプラットフォームを利用してください。

## トレーニング

Cognism Web App と Cognism Chrome 拡張機能はどちらも直感的で非常にユーザーフレンドリーですが、ツールに慣れるための追加動画も Cognism から提供されています。

| タイトル | 時間 | 概要 |
| ------ | ------ | ------ |
| [Cognism Chrome Extension Intro](https://www.youtube.com/watch?v=D0kv7aF7Iho&ab_channel=Cognism)| 2:04 | Cognism Chrome 拡張機能の一般的な概要 |
| [Cognism Chrome Extension Workflow](https://www.youtube.com/watch?v=GduWMj4nzx8&ab_channel=Cognism)| 1:13 | Cognism Chrome 拡張機能のワークフロー例 |
| [How to Use Cognism for Sales - Product Tour](https://www.youtube.com/watch?v=4YG5NhxbN-w) | 10:40 | Cognism プラットフォームの製品ツアー |
| [How to Use Cognism for Marketing](https://www.youtube.com/watch?v=4YG5NhxbN-w) | 04:19 | Cognism プラットフォームを活用してマーケティングエンジンを強化する方法 |

## SFDC フィールドマッピング

Cognism では、Cognism カスタムフィールドのみをエンリッチしているため、マッピングはこれを反映しています。これらのフィールドは、フィールドラベル名で `[Cognism]` を探すことで見つかります。リードおよびコンタクトレイアウトでは、Zoominfo セクションのすぐ下に Cognism セクションがあります。

フィールドマッピングについて懸念がある場合や、一部のフィールドが期待どおりにエンリッチされていないことに気づいた場合は、Marketing Operations までお問い合わせください。

## Do Not Call と Do Not Email の自動化

適切な基準が設定されていれば、Cognism によって SFDC 上のリード/コンタクトに `Do not email` および `Do not call` のラベルを付けることができます。ルールの詳細については [sales development ハンドブックページ](/handbook/marketing/sales-development/#do-not-call-and-do-not-email-automations) を参照してください。

## Outreach 連携

Cognism と Outreach の連携は稼働中で、コンタクトを Outreach に直接エクスポートできます。エクスポートしたコンタクトは SFDC にもエクスポートされます。

いくつか制限があります:

- Cognism から Outreach への新規アカウント作成/アカウント更新は許可されていません。
- メールアドレスのないコンタクトを Outreach にアップロードしないでください。アップロードした場合、見込み客は SFDC に同期されず、その見込み客に対する活動は SFDC に記録されません。
- メールアドレスなしで作成された見込み客は、毎月実施する Outreach データベース管理で検出され削除されます。メールアドレスのないコンタクトのアップロードを避けるために、利用可能な Cognism のフィルタリング機能を使用してください。

## メールなしのリードリストアップロードをエンリッチするための Cognism Enhance 機能の利用

さまざまなイベントから取得したリストアップロードにメールアドレスがなく、SFDC インスタンスにアップロードできない状況があります。この課題を回避するために、[Cognism Enhance](https://help.cognism.com/hc/en-gb/articles/4404423963026-Using-Cognism-Enhance) 機能を利用します。この機能は、特定のデータポイント (`First Name`, `Last Name`, `Company Name`) のみで、残りのデータ (`Email`) を埋めることができます。

リードリストにメールデータポイントが欠けている場合は、この Issue テンプレートを使用して MOps プロジェクトをオープンし、必要な詳細を記入してください。Cognism のデータベースと一致するリードについては、欠けているデータが追加されます。

**注:** メール情報でエンリッチされたすべてのリードは、デフォルトでメール通信からオプトアウトされています。これらはオプトインされておらず、適切な `明示的同意` を得た場合のみ連絡することができます。

## Cognism と Openprise の自動エンリッチメント

Openprise と Cognism API キーを使用することで、Cognism クレジットを活用し、Salesforce レコードを毎日自動的にエンリッチすることができます。レコードが以下の基準を満たすと、エンリッチメントキューに追加され、Cognism のデータベースと一致した場合に自動的にエンリッチされます。

現在のエンリッチメント基準は次のとおりです:

1. Owner Profile に `SDR, Sales Development` を含む *かつ* Initial Source が `AE Generated, Cognism, DiscoverOrg, Email Request, etc.` のいずれか、Lead Status が `Accepted`、*かつ* Created By が `Marketo Integration, Outreach Integration` でない;
2. Last Interesting Moment Date が `Last 30 Days` *かつ* [PQL] Product Qualified Lead が `True` *かつ* [PTPT] Score Group が `4,5`;
3. Initial Source が `Zoominfo` *かつ* (Phone が `blank` *または* Email が `blank`) *かつ* Demographic Score が `59` より大きい;
4. Initial Source が `Request - Contact` *かつ* (Phone が `blank` *または* Email が `blank`) *かつ* `Lead Owner` に `disq,inel,jihu` を含まない。
5. Lead Status が `MQL, Accepted, Qualifying` *かつ* Impartner Partner Account が `blank` *かつ* Campaign Field - Member First Responded Date が `Current FY` *かつ* Campaign Field - Campaign Type が `Trial` *かつ* [Cognism] Automatically Enriched が `False` *かつ* Account Demographics: Region が `EMEA`。
6. APJ の電話番号をエンリッチする WIP - `Account Demographics: Territory` に `APJ` を含む *かつ* (Phone が `NULL` *または* Mobile が `NULL`) *かつ* Account Demographics: Territory に `SMB` を含まない *かつ* Account Demographics: Employee Count が `101` より大きい

## Cognism ライセンスポリシーと手順

### 管理

Cognism の管理は Marketing Operations チームが専属で行っています。現在 Cognism のシートは 70 シートあり、すべて Sales Development Org 専用、特に BDR 向けに割り当てられています。BDR ロール以外には、BDR 側でライセンスが必要でない場合に限り、他のロール向けの一時ライセンスのみを許可しています。

### アクセスとヘルプ

BDR は、オンボーディングプロセスの一環として Cognism へのアクセスを受け取ります。チームメンバーがアクセスを受け取れなかった場合、またはアクセスが削除されて再度必要な場合は、[個人アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を作成してください。

Cognism で問題が発生している場合は、#mktgops slack チャンネルでお気軽にお問い合わせください。Cognism に直接 help@cognism.com まで連絡することもできます。

### 月次ライセンスレビュー

利用可能なシートが限られているため、ポリシーとの整合性を確保するために、ライセンスは毎月レビューされます。現在のポリシーでは、レビュー対象としてフラグが立てられないアクティブな非管理者ライセンスは、以下の基準を満たす必要があります:

1. SFDC と Outreach の両方と統合されていること;
2. 過去 3 か月で 10 件以上のプロフィールを閲覧していること;

ライセンスを無効化する前に、MOps はユーザーに連絡してプラットフォームへのアクセスがまだ必要かどうかを確認します。アクセスが不要であれば、ユーザーは Zoominfo から削除されます。なお、ユーザーアクセスが削除されても、SFDC 上の Cognism フィールドデータは引き続き閲覧できます。

### 詳細プロセス

1. Cognism にログインし、Dashboard の User Activity Section を確認;
2. 上記の基準についてユーザーをチェック;
3. Slack でユーザーに連絡;
4. アクセスが不要なユーザーを無効化; (返答がない場合はライセンスが不要と見なします)
5. Mktgops プロジェクトに Issue を作成し、無効化されたユーザーを記録。Mktg Tool Audit ラベルを使用します。

非 BDR ロールに一時ライセンスが割り当てられている場合、BDR ロールに必要な場合はいつでも取り消すことができます。

### 保留中の招待

保留中の Cognism 招待は、ライセンス割り当てをブロックするため、1 週間以内に承諾する必要があります。1 週間後も招待が承諾されない場合はキャンセルされます。再度招待が必要な場合は、[個人アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を通じてリクエストできます。
