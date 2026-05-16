---
title: "GitLab for Startupsプログラムのワークフロー"
description: "GitLab for Startupsプログラムに関連するプログラム固有のワークフローの詳細"
upstream_path: /handbook/sales/high-velocity-sales-fo-team/startups-program/startups-program-workflows/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T10:25:24+00:00"
---

## 概要

このページには、[GitLab for Startups](https://about.gitlab.com/solutions/startups/join/)プログラム固有のワークフローに関する詳細が含まれています。

現在、VCまたはアクセラレーターが支援するスタートアップのみがプログラムの対象となります。
スタートアップは、1暦年内にGitLabの有料顧客であった場合、プログラムの対象とはなりません。

私たちは2つの異なる資金調達適格性によって承認オファリングをカテゴリ化します:

- シードステージ: 資金調達がUSD$5百万未満
- アーリーステージ: USD$5百万を超えるが$20百万未満

スタートアップは、現在の資金調達ステータスとともに、VCまたはアクセラレーターファンドとの関連の証拠を提出する必要があります。
この情報を取得する最も簡単な方法は、Crunchbase、PitchBook、またはY Combinatorのプロフィールリンクで、申請時に提出する必要があります。

## スタートアッププログラムサービスデスク

- スタートアッププログラムの**申請**と**サポート**を管理するためにGitLabサービスデスクのIssueボードを使用しています。
- スタートアッププログラムでステータスを確認したり、質問を提出したい場合は、以下のスタートアッププログラムIssueボードを通じて行ってください。
- [Startups Program Issue Board](https://gitlab.com/gitlab-com/marketing/developer-relations/startups-program/startups-program-support/-/boards)

## フォーム

私たちの申請は以下のフィールドを持つMarketoフォームです:

- 名
- 姓
- メールアドレス
- 国(ドロップダウン)
- 会社名
- 請求先住所
- 市町村
- 郵便番号
- 国(ドロップダウン)
- crunchbase、pitchbook、またはy-combinatorのプロフィールを提供してください。あるいは、連絡時に、現在の資金調達ステータスを示すための財務諸表またはその他の合理的な裏付けを提供するようお願いします。
- GitLab製品を選択
- リクエストするシート数
- サポートを購入したいですか(チェックボックス)
- マーケティングメールのオプトイン(チェックボックス)

貿易管理に関連する理由により、キューバ、イラン、シリア、北朝鮮、ロシア、ベラルーシ、ウクライナからの申請者を受け入れることはできません。

## 法的合意

GitLab for Startupsプログラムメンバーは、このプログラムが12ヶ月間のGitLab Ultimate無料利用のみを付与するため、通常のGitLab顧客と同じ利用規約の対象となります。
プロモーション期間が終了すると、スタートアップは通常の有料顧客になるオプションを持ちます。

## 検証フロー

以下は、スタートアップを適格化することを含む、プログラムを管理することに関連するいくつかの一般的なワークフローです:

### 申請を以下でレビューする

- [Startups Issue Board](https://gitlab.com/gitlab-com/marketing/developer-relations/startups-program/startups-program-support/-/boards)

シナリオ: ユーザーが完全な申請を提出しなかった

**GitLabサービスデスク**で:

1. [Support-Macros](https://gitlab.com/gitlab-com/marketing/developer-relations/strategy-programs/operations/-/tree/main/support-macros?ref_type=heads0)に移動して、"Funding Info"マクロを使用します。

その後、**Salesforce**で:

1. チケット内のリード/コンタクトを開く
2. Ctrl Fで"Startups Program Status"を検索
3. ステータスをFunding Docs Requestedに変更

### CrunchbaseまたはFunding Statusへのリンクを伴うユーザー提出申請(完全な申請)

**シードステージフロー**

資金調達額がUSD$5百万未満の場合、スタートアップは**シードステージ**と判断されます。
このフローに従ってください。

**GitLabサービスデスク**で:

1. `Seed stage`マクロを適用して顧客にウェルカムメールを送信
2. マクロ内のクーポンコードシートからクーポンコードを挿入
3. `Name`およびその他のフィールドが正しく完了されているかをレビュー

その後、**Salesforce**で:

1. サービスデスクチケット内のリード/コンタクトを開く
2. Ctrl Fで"Startups Program Status"を検索
3. "Qualified" Seed Y1に変更

**アーリーステージフロー**

資金調達額がUSD$20百万未満で$5百万を超える場合、スタートアップは**アーリーステージ**と判断されます。
このフローに従ってください。

**GitLabサービスデスク**で:

1. `Early Stage`マクロを適用
2. チケットステータスを`Open`に設定

**Sales Case Routing Sheetを使用する**

このシートは[こちら](https://docs.google.com/spreadsheets/d/1etzGAGH4n-pzA52xka_VAymMYSE44UBySblXhAEh6rM/edit?gid=0#gid=0)で見つけることができます

- Sales Case Routingを通じて提供される手順に従って、これらのスタートアップ企業を適格化するステージを決定してください。

スタートアップが該当する適格化のタイプは以下のとおりです:

- Seed Year 1
- Seed Year 2
- Early Stage Year 1
- Early Stage Year 2

その後、**Salesforce**で:

1. サービスデスクチケット内のリード/コンタクトを開く
2. Ctrl+Fで"Startups Program Status"を見つける
3. "Qualified" Early Y1に変更
4. リードをOppに変換
5. 商談を`Customer Name, Seats, License Type, Startups - Early - Y(1)`としてリネーム
6. 正しいアカウントエグゼクティブをアサインするためにMktgopsをChatter
7. アカウントエグゼクティブが確認されたら、サービスデスクチケットを介して顧客を引き渡す

スタートアップセールスプロセスに関するさらなる明確化については、この[highspotページ](https://gitlab.highspot.com/items/6410e355fb9e0fe9d2823fcc?lfrm=irel.1#3)を参照してください
