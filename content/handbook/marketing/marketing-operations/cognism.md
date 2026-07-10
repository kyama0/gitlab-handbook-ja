---
title: "Cognism"
description: "Cognism は、コンタクトおよびアカウントデータを提供するセールスインテリジェンスソフトウェアであり、セールスチームとマーケティングチームが予測可能なパイプラインを推進するのに役立ちます。"
upstream_path: /handbook/marketing/marketing-operations/cognism/
upstream_sha: 5ea6b5d6141bc938b1c87b63ca72396fbfe19b58
translated_at: "2026-07-11T06:05:57+09:00"
translator: claude
stale: false
lastmod: "2026-07-10T10:07:39-06:00"
---

## Cognism について

Cognism は、コンタクトおよびアカウントデータを提供するセールスインテリジェンスソフトウェアであり、セールスチームとマーケティングチームが予測可能なパイプラインを推進するのに役立ちます。

## セットアップ

ログイン情報を受け取り Cognism プラットフォームに入ったら、Cognism Chrome 拡張機能をダウンロードする必要があります。Cognism Chrome 拡張機能のリンクは、こちらの [リンク](https://help.cognism.com/hc/en-gb/articles/4403402216722-How-to-install-the-Cognism-Chrome-Extension) からも確認できます。

## ツールの連携

Cognism Web App にログインしたら、まずツール (Salesforce および Outreach) を連携してください。これにより、両方のツールへリードをエクスポートできるようになります。

このプロセスは非常にシンプルですが、必要に応じて [Cognism と Salesforce の連携方法](https://help.cognism.com/hc/en-gb/articles/4407455139602-How-to-Integrate-Cognism-to-Salesforce-) および [Cognism と Outreach の連携方法](https://help.cognism.com/hc/en-gb/articles/12127689794834-How-to-integrate-Cognism-to-Outreach) のドキュメントを参照してください。

## Cognism へのアクセス方法

Cognism には Okta 経由でアクセスし、Cognism Web App または Cognism Chrome 拡張機能のいずれかで開くことができます。どちらのインターフェースからも Cognism データにアクセスできます。Cognism データは、自動エンリッチメントの基準を満たすリードレコードと、Chrome 拡張機能または Web App から手動でエクスポートされたレコードについて、Salesforce にも書き込まれます。

## GitLab で Cognism を利用できるのは誰ですか?

Cognism ライセンスは、主に Sales Development 組織の BDR ロールと Sales 組織の AE ロールに割り当てられます。

シートに空きがある場合、これらのロール以外のチームメンバーに一時ライセンスを付与することがあります。主要ロールの新規ユーザーに必要となった場合、これらの一時ライセンスは再割り当てされることがあります。

ライセンスを持つユーザーが Cognism に 2 か月以上ログインしていない場合、そのシートは新しいユーザーに再割り当てされることがあります。

ライセンスを持たないチームメンバーも、Salesforce のリードおよびコンタクトレコードで Cognism によってエンリッチされたデータを閲覧できます。

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

## Cognism と Workato の自動エンリッチメント

GitLab は現在、既存の Salesforce リードおよびコンタクトレコードに対する Cognism の自動エンリッチメントを実行するため、Openprise ではなく Workato を使用しています。この連携では新規のリードやコンタクトは作成せず、Salesforce にすでに存在するレコードのみをエンリッチします。

現在のセットアップは 2 段階で動作します。まず、RingLead Mass Update が承認済みのエンリッチメント基準を満たすレコードを特定し、Enrich with Cognism チェックボックスを設定します。このフィールドが設定されると、Workato がレコードを取得して Cognism の API を呼び出し、マッピングされた Cognism データを Salesforce に書き戻します。

この連携は本番環境で 1 時間ごとに実行されます。過去 1 か月以内に Cognism でエンリッチ済みのレコードは、最後の Cognism エンリッチメントから 1 か月が経過するまで再エンリッチされません。

エンリッチメントの一環として、このプロセスは Cognism カスタムフィールドに書き戻し、Phone や Email などの標準フィールドが空の場合はそれらのフィールドにも値を入力できます。このプロセスによってリードの所有者が変更されることはありません。

現在のエンリッチメントコホートは次のとおりです。

- **Working EMEA Trial**

1. Status が `MQL`、`Accepted`、`Qualifying` のいずれか *かつ* Impartner Partner Account が `null` *かつ* `[Cognism] Automatically Enriched` が `False` *かつ* Account Demographics: Region が `EMEA` *かつ* Currently in Trial が `True` *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前。

- **Recently Engaged High-Score PQLs**

1. Last Interesting Moment Date が `Last 60 Days` *かつ* `[PQL] Product Qualified Lead` が `True` *かつ* `[PTP] Score Value` が `4, 5` *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前 *かつ* `Enrich with Cognism` が `False`。

- **Request Contact & ZoomInfo Exported Records with no Email/Phone**

1. Initial Source が `Request - Contact` *または* `Zoominfo` *かつ* Owner Name に `Disq`、`Inel`、`Jihu` を含まない *かつ* (Phone が `blank` *または* Email が `blank`) *かつ* Demographic Score が `59` より大きい *かつ* Created Date が `This Fiscal Year` *または* `Last Fiscal Year` *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前 *かつ* `Enrich with Cognism` が `False`。

- **APJ Missing Number**

1. Account Demographics: Territory に `APJ` を含む *かつ* Account Demographics: Territory に `SMB` を含まない *かつ* Account Demographics: Employee Count が `101` より大きい *かつ* Phone が `blank` *かつ* Mobile が `blank` *かつ* Created Date が `This Fiscal Year` *または* `Last Fiscal Year` *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前 *かつ* `Enrich with Cognism` が `False`。

- **EMEA SMB Growth Team**

1. Owner Name が `Arthur Gabor`、`Bastien Escudé`、`Ben Quilligan`、`Camilo Hernandez Murillo`、`Deepika Raj`、`Emma Szász`、`Hugo Barennes`、`Kellie Lewis` のいずれか *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前 *かつ* `Enrich with Cognism` が `False`。

- Accepted Leads

1. Owner Profile に `SDR` または `Sales Development` を含む *かつ* Initial Source が `AE Generated`、`Cognism`、`DiscoverOrg`、`Email Request` のいずれか *かつ* Status が `Accepted` *かつ* Created By が `Marketo Integration` または `Outreach Integration` ではない *かつ* `[Cognism] Automatically Enriched` の相対日付が `Last Month` より前 *かつ* `Enrich with Cognism` が `False`。

上記の自動化されたコホート以外で Cognism データによるレコードのエンリッチメントが必要なチームは、Mops プロジェクトで Marketing Operations Issue を作成し、レビューのために `@RobRosu` をタグ付けしてください。

## Cognism ライセンスポリシーと手順

### 管理

Cognism は現在、Marketing Operations チームと Revenue Technology チームが共同管理しています。

主要なライセンスの所有権は、Sales Development 組織の BDR ロールと Sales Operations 組織の AE ロール向けに確保されています。

シートに空きがある場合、これらのロール以外のチームメンバーに一時ライセンスを割り当てることがあります。主要ロールの新規ユーザーに必要となった場合、これらの一時ライセンスは再割り当てされることがあります。

### アクセスとヘルプ

BDR と AE は、オンボーディング中に Lumos 経由で Cognism へのアクセスをリクエストしてください。

チームメンバーがアクセスを失った場合や、アクセスの復元が必要な場合は、Lumos 経由で新しいアクセスリクエストを提出してください。

Cognism の問題に関するヘルプは、#mktgops または #sales-tools-support Slack チャンネルで質問するか、help@cognism.com で Cognism Support に直接問い合わせてください。

### 月次ライセンスレビュー

利用可能なシート数が限られているため、ライセンスポリシーとの整合性を確保するために毎月ライセンスをレビューします。

アクティブな非管理者ライセンスは、以下の基準を満たさない場合にレビュー対象としてフラグが立てられることがあります。

Salesforce と連携されている
過去 3 か月に 10 件を超えるプロフィールを閲覧している

Marketing Operations は所属組織内のユーザーに連絡し、アクセスが引き続き必要か確認します。ユーザーがアクセスを必要としない場合、または返答しない場合、ライセンスが再割り当てされることがあります。

ライセンスを持たないチームメンバーも、Salesforce のリードおよびコンタクトレコードで Cognism によってエンリッチされたデータを閲覧できます。

### 詳細プロセス

1. ダッシュボードで Cognism ユーザーのアクティビティをレビューします。
2. 月次レビュー基準を満たしていないユーザーを特定します。
3. Slack でそのユーザーに連絡し、アクセスが引き続き必要か確認します。
4. 不要になったライセンスを無効化または再割り当てします。
5. Marketing Operations プロジェクトに Issue を作成して、無効化したユーザーを追跡し、Mktg Tool Audit ラベルを適用します。

### 保留中の招待

保留中の Cognism 招待は、ライセンス割り当てをブロックするため、1 週間以内に承諾する必要があります。1 週間後も招待が承諾されない場合はキャンセルされます。再度招待が必要な場合は、[個人アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を通じてリクエストできます。
