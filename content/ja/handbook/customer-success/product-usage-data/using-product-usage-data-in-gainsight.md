---
title: "製品利用レポーティングの活用方法"
description: "Gainsight 内の顧客の製品利用レポーティングを活用し、ユースケース採用戦略を見直し、データのつながりとデータ品質の懸念への対応を理解するためのガイド。"
upstream_path: /handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

<style>
  .td-content {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 10px;
      width: 100%;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 15px;
      height: 100%;
      min-height: 80px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
    }

    .btn-purple {
      background-color: #6666c4;
      color: white;
    }
  }
</style>

---

## 目的

Gainsight 内の顧客の製品利用レポーティングの活用方法をガイドし、ユースケース採用戦略を見直し、データのつながりとデータ品質の懸念への対応を理解します。

目的と意図するアウトカムのより詳しい説明については、[製品利用レポーティングのビジョン](/handbook/customer-success/product-usage-data/)ページを参照してください。

3 年間のビジョン全体については、[製品利用レポーティングロードマップ](https://docs.google.com/presentation/d/1_v4hxKdbL6--UjpjVdveGEGD_MjmUnBg0-OIU1R14m8/edit#slide=id.p)（GitLab 内部ドキュメント）を参照してください。

## ビデオ

概要（7 分間）については、[Gainsight での製品利用レポーティングの使用 — はじめに](https://youtu.be/bny-SoH-MNc)ビデオをご覧ください。

- [製品利用レポーティングと健全スコアリングとは何か、Gainsight での確認方法](https://www.youtube.com/watch?v=H6l3_AmQif8)
- [Gainsight でのライセンス利用率の確認方法とその意味](https://www.youtube.com/watch?v=Mezt6knBxI0)

## クイックリンク

<div class="grid-container" markdown="0">
  <a href="/handbook/customer-success/product-usage-data/" class="btn btn-purple">運用データ <br> ビジョンページ</a>
  <a href="https://metrics.gitlab.com/" class="btn btn-purple">指標辞書</a>
  <a href="/handbook/sales/field-operations/sales-systems/license-usage-app/" class="btn btn-purple">Salesforce ライセンス <br> 利用アプリ</a>
  <a href="https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/product-usage-data/" class="btn btn-purple">データチームハンドブック</a>
  <a href="/handbook/customer-success/product-usage-data/use-case-adoption/" class="btn btn-purple">健全スコアリング — 計算と手法</a>
  <a href="/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/" class="btn btn-purple">Salesforce での Gainsight <br> 利用レポーティングの活用</a>
  <a href="/handbook/customer-success/product-usage-data/use-case-adoption/#license-utilization-in-gainsight" class="btn btn-purple">Gainsight での <br> ライセンス利用率</a>
  <a href="/handbook/customer-success/csm/health-score-triage/#gainsight-scorecard-attributes-and-calculations" class="btn btn-purple">Gainsight スコアカード <br> 属性と計算</a>
  <a href="/handbook/customer-success/product-usage-data/freemium-saas-usage-data/" class="btn btn-purple">SaaS 無料/トライアル <br> 利用レポーティング</a>
  <a href="/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#frequently-asked-questions" class="btn btn-purple"> 製品利用レポーティング FAQ </a>
</div>

## Gainsight のレポートとダッシュボード

[製品利用レポーティング — v2](https://gitlab--jbcxm.vf.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJvbmU6YWxvaGFQYWdlIiwiYXR0cmlidXRlcyI6eyJhZGRyZXNzIjoiaHR0cHM6Ly9naXRsYWItLWpiY3htLnZmLmZvcmNlLmNvbS9hcGV4L0dhaW5zaWdodE5YVCNkYXNoYm9hcmQlMjMlMkYxNzE0MTVhNy04ZTJhLTQ3YWYtODFmMy1iYTU1N2IxNjlhOGQifX0=) ダッシュボードを使用して、すべてのアカウントの完全な一覧を確認できます。

アカウントの C360 ページを使用する際、使用状況の評価に最も関連するトピックは以下の通りです。

| レポート名 | 説明 | 適用方法 |
| ------ | ------ | ------ |
| **サマリー** | 会社全体のライセンス利用率と販売済みライセンスの合計を表示します | 採用の深さを迅速に確認し、アカウントがレポートしているかどうかを確認するために使用します |
| **ユーザー採用指標** | アカウントの採用率をグラフ化するためのコンテキストベースの指標（例: パイプラインを実行したユーザーをマンスリーアクティブユーザーで割ったもの）。 | アカウントチームが拡大またはイネーブルメントの意思決定のために月次ユースケースとライセンス使用状況を理解するための指標。異なるグラフを表示するためにレポートを切り替えます。 |
| **製品利用トレンド** | SCM・CI・DevSecOps・ライセンス利用率などのユースケースの月次比較分析 | ユースケース固有の指標の月次データポイント。機能とデプロイの深さと採用について学ぶためにアカウントチームが使用します — 月次蒸留指標と組み合わせて使用します。ユースケースベースの上位指標を分析するためにレポートを切り替えます。 |
| **インスタンスとネームスペースの詳細** | `インスタンスタイプ` メタデータを含むアカウントに関連するすべてのインスタンスの一覧 | [セルフマネージドのインスタンスタイプの更新でホスト名を更新する](#self-managed)を使用します |

## これらの指標の活用方法

MVC デプロイにはいくつかの制限があります。ユースケースに遭遇した場合は、[Issue を開く](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues)か、必要に応じて[新しい指標をリクエスト](#requesting-new-metrics)してください。データを活用するための潜在的なユースケースをいくつか紹介します。

| トピック | 説明 | 対処すべき質問 | 参照 |
| :--- | --- | --- | --- |
| **顧客の使用状況を理解する** | 使用データを使用して、どのインスタンスから使用データを受け取っているかを確認するためにアカウントをすばやく検索できます。<br> ユーザーストーリー: アカウントに関連するすべてのインスタンスとネームスペース（本番および非本番）とアクティビティを確認します。<br> **注**: アクティブなサブスクリプションに紐付けられている必要があります。 | - 誰がサービス Ping データを送信しているか？ <br> &bull; 本番データを送信しているか？ <br> &bull; アクティビティは私の期待と一致しているか？ <br>&bull; アクティビティは彼らの使用状況についての認識と一致しているか？ | <br>&bull; [VIDEO: Gainsight での製品利用データの使用 — はじめに](https://www.youtube.com/watch?v=bny-SoH-MNc)<br> &bull; [VIDEO: 製品利用データとは何か、Gainsight での確認方法](https://youtu.be/H6l3_AmQif8) |
| **C360: インスタンスとネームスペースの詳細** | セルフマネージドインスタンスのアップグレードやパッチ適用を支援するために、どの GitLab バージョンを使用しているかを知る必要があります。 | <br>&bull; 顧客が使用しているバージョンは？<br>&bull; 複数のインスタンスがある場合、そのインスタンスのバージョンをどのように確認するか？<br>&bull; ネームスペースとは何か？ | C360: インスタンスとネームスペース<br><br> 製品利用データダッシュボード（`Self Managed Instances - Current GitLab Version Details` レポート） |
| **顧客はライセンスを何個デプロイしているか？** | 顧客のライセンス利用率（上記参照）を理解して、デプロイされたライセンスの数 `billable_user_count/licensed seats` を把握します。<br> 例: 顧客が 200 ライセンスを購入して 9 ヶ月後に 80 をデプロイした場合、80/200 = 40%。 | <br>&bull; どのようなトレンドが見えるか？<br>&bull; 顧客のライセンス利用率をどのように理解するか？ | <br>&bull; [VIDEO: Gainsight でのライセンス利用率の確認方法とその意味](https://youtu.be/Mezt6knBxI0)<br>&bull; C360: ユーザー採用指標<br>&bull; 製品利用データダッシュボード<br>&bull; [ライセンス利用率ハンドブック](/handbook/customer-success/product-usage-data/use-case-adoption/)<br>&bull; [VIDEO: Gainsight での製品利用データの使用 — はじめに](https://www.youtube.com/watch?v=bny-SoH-MNc) |
| **顧客の GitLab 採用を理解する** | SCM・CI・CD・DevSecOps のユースケース別指標を把握して採用を理解します。<br> ユースケース採用の定義については[ユースケース採用ガイド](/handbook/customer-success/product-usage-data/use-case-adoption/)を参照してください。<br> SCM・CI・CD・DevSecOps の採用についての説明は[GitLab 採用ジャーニー](/handbook/customer-success/customer-success-vision/#high-level-visual-of-gitlab-adoption-journey)を参照してください。 | <br>&bull; 顧客はどのユースケースを採用したか？<br>&bull; どの程度採用しているか？<br>&bull; どの機能を採用したか？<br>&bull; 機能の採用は顧客の購入意図と一致しているか？ | C360: スコアカード<br><br>製品利用データダッシュボード |
| **製品利用レポーティングで健全スコアをどのように理解するか？** | Gainsight を使用して、顧客の採用を迅速かつ高レベルにロールアップします。顧客が GitLab ユースケース別に順調かどうかを特定します。 |<br>&bull; 顧客のユースケース健全性が赤・黄・緑 — それはどのように計算されるか？<br>&bull; 製品利用データはどのように重み付けされるか？<br>&bull; 「良好な」健全性とは何か？ | [ユースケース採用手法](/handbook/customer-success/product-usage-data/use-case-adoption/)<br><br>[健全スコア指標の重み付け](/handbook/customer-success/customer-health-scoring/#gainsight-scorecard-attributes-and-calculations)<br><br>[VIDEO: 製品利用レポーティングとは何か、Gainsight での確認方法](https://youtu.be/H6l3_AmQif8)<br><br>[使用トレンドダッシュボード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/ced1d18a-62f4-4e22-8efd-a7b1d7abcac2) |

これは MVC です — [新しい指標の提案・顧客ジャーニーの評価方法の提案・その他のアイデアのために Issue を作成](#requesting-new-metrics)してください。

ユースケースとその健全手法の詳細については、[ユースケース採用](/handbook/customer-success/product-usage-data/use-case-adoption/)を参照してください。

## Salesforce での Gainsight データの活用

様々な製品利用統計が Gainsight から Salesforce に戻ってプッシュされます。Gainsight から Salesforce に同期される顧客健全関連フィールドの完全なリストについては、[Salesforce での Gainsight データの使用](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/)ページ内の[顧客の健全性](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/#customer-health)を参照してください。

## 顧客インスタンスとネームスペースのラベル付け

### 定義

- **インスタンス**: 顧客の GitLab の*セルフマネージド*デプロイ
- **ネームスペース**: gitlab.com 上の顧客の GitLab の *SaaS* デプロイ
- **ラベル付け**: Gainsight 内でインスタンスを本番・非本番などとして内部的に識別し、Snowflake に同期する行為。詳細については[リンク](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#viewing-all-unknown-self-managed-instances)を参照してください
- **プロジェクト**: 顧客の GitLab インスタンス内の特定のプロジェクトまたはフォルダ（例: `gitlab-com` 使用内の「フィールドオペレーション」プロジェクト）

### 重要な理由

GitLab と顧客にとって、顧客が本番コードを開発する`本番`インスタンスとして使用しているインスタンスを知る必要があります。これは、顧客が GitLab を適切に採用できるよう正確に支援するために必要です（[製品利用レポーティングのビジョン](/handbook/customer-success/product-usage-data/)）。

一般的なルールとして、各サブスクリプションには 1 つの本番インスタンス**または**ネームスペースが紐付けられています。以下では、インスタンスがどのように決定・ラベル付けされ、データが GitLab 内でどのように適用されるかについて説明します。

#### セルフマネージド

顧客のサーバーにはタイプの識別がありません（本番・テスト・非本番・ミラーなど）。GitLab が顧客のサービス Ping を受け取るとき、それが本番コードのデプロイ用なのか、テストサーバーなのか、ミラーなのかは分かりません。

**問題**: これはセルフマネージドの顧客にとって重要です。なぜなら、顧客は単一のサブスクリプションに 1 つから 10 のインスタンスを紐付けていることがあり、GitLab は顧客がエアギャップ、IP ポートをブロックしているなどによって、1 つまたは複数の本番インスタンスからデータを受け取る場合も、まったく受け取らない場合もあるためです。

#### SaaS

ネームスペースについては、顧客がネームスペースに直接支払いを行い、テストはネームスペース内のさまざまな*プロジェクト*で行えるため、これは問題になりません。SaaS については、問題になる前に一般的に解決されます。

### ラベル付きインスタンスの使用方法

1. 本番インスタンスに基づいて顧客の健全性を計算する
2. 本番インスタンスで顧客が何をしているかについてアカウントチームにインサイトを提供する（Gainsight と Snowflake）
3. 顧客サブスクリプションのライセンス利用レポーティング（Gainsight・Snowflake・Salesforce）
4. 集約した使用状況のための会社全体のレポーティング機能（Snowflake）
5. 傾向モデルの入力（Snowflake）
6. 使用データのカバレッジを追跡する（何個のアカウントが運用指標を送信しているか？）（Snowflake）

### インスタンスのラベル付け方法

#### セルフマネージド

##### CSM 所有のアカウント（Strategic と Growth）

セルフマネージドの顧客については、CSM が顧客のインスタンスを本番・ステージング・廃止済みとしてラベル付けします。手順:

1. Gainsight で顧客に移動します
2. 左ナビパネルで、下部の**インスタンスとネームスペースの詳細**をクリックします
3. 更新するインスタンスの**⋮**をクリックします
4. **編集**をクリックします
5. `インスタンスタイプ` フィールドで適切なオプションを選択します
6. **更新**をクリックし、他の変更は行わないでください

**注意事項**:

1. インスタンスタイプが不明な場合は、顧客に確認するか、左ナビパネルの**製品利用トレンド**をクリックして**NOT Production Instance Usage** レポートに切り替えて、そのインスタンスの使用トレンドを確認してください
2. 「Unknown」とラベル付けされたものはすべて、本番・非本番・廃止済みに更新する必要がある*一時的な*保留タイトルとして扱ってください。
3. `Non-Production`/`Unknown`/`Obsolete`/`Geo Secondary Node` インスタンスは、`NOT Production Instance Usage` レポートを除いて、アカウントの製品利用トレンドセクションには反映されませんのでご注意ください。
4. `インスタンスタイプ` が他のタイプから `Production` に切り替えられた場合は、使用レポートに反映されるまで 24 時間お待ちください。

##### CSM 非所有のアカウント（Scale と Digital）

上記のプロセスはどのアカウントでも機能しますが、CSM が所有しない小規模なアカウントには自動化が必要です。Gainsight での自動化は 2 つの方法に分かれます。

1. **ルール**: *NEW Admin: Set Instance Type - Programmatically by License Utilization*
   1. **コンテキスト**: ライセンス利用率または UMAU 利用率が 20% 以上のものに基づいてセルフマネージドインスタンスを `Production` に設定します。これは新しいインスタンスを迅速に特定しながら、少数のユーザーのみが使用する単一のサブスクリプションに紐付けられたテストインスタンスを除外することを目的としています
1. **ルール**: *NEW Admin: Set Instance Type - Programmatically by Instance Count = 1*
   1. **コンテキスト**: ほとんどのサブスクリプション（特に小規模なもの）は…

#### SaaS

ネームスペースは Gainsight ルール「[Load to Instance Data - Label SaaS Instances as Production](https://gitlab.gainsightcloud.com/v1/ui/rules#v2/rule/3027ca2b-34e6-4dbb-be5f-8f640a636074)」を使用して Gainsight 内で自動的にラベル付けされます。

### 注意事項とリスク

1. ライセンスの関係で、一部の顧客は複数の本番インスタンスに 1 つのサブスクリプションを使用できるユニークなライセンス契約を持っています。これにより、デプロイされたライセンスの数を計算することが困難になります
2. 小規模アカウントの自動化が必要なため、一部のインスタンスを本番として誤ってラベル付けし、他のインスタンスを見落としてしまうことがあります
3. Strategic/Growth の CSM 所有アカウントは手動でラベル付けされるため、すべてのシステムへの伝播に遅延が生じます

### **CSM/CSE アクション**

#### **未確認のセルフマネージドインスタンスをすべて表示する**

新しいセルフマネージドインスタンスは常に登場しています。さまざまなタイプには以下が含まれます。

- **本番**: サブスクリプションに紐付けられた本番インスタンス
- **非本番**: テスト・ステージング・開発サーバー
- **廃止済み**: 使用されなくなったサーバー
- **Unknown**: まだラベル付けされていないサーバー
- **Geo Secondary Node**: セカンダリまたはミラーサーバー

本番とその他のタイプを正しく識別していることを確認するために、これらの手順を使用して、まだラベル付けされていないインスタンスの完全なリストを確認してください。

1. `CSM Burn-Down Dashboard` に移動します
2. 自分の名前でフィルタリングします
3. `* Unknown Instances - CSM Owned` レポートまでスクロールします
4. クリックして完全なリストを確認します
5. アカウントをクリックします
    1. アカウント内の左ナビパネルで `製品利用トレンド` をクリックします
    2. `NOT Production Instance Usage` レポートに切り替えます
    3. インサイトのために使用状況を確認します
6. `インスタンスとネームスペースの詳細` セクションで、インスタンスをそれに応じてラベル付けします

このプロセスは、顧客が複数のサブスクリプションを持ち、各サブスクリプションが複数のインスタンスを持てるため、重要です。例示図をご覧ください。

![架空のセルフマネージド図](https://lucid.app/publicSegments/view/74e7b4aa-6e71-4f60-83bb-6439c459358c/image.png)

### Snowflake 同期

インスタンスタイプは Gainsight から Snowflake に週次で同期され、日曜日の夜（PST）に更新されます。Gainsight はデータを収集し、ルール *[Admin - Drop Instance Type to S3 for Snowflake Pickup](https://gitlab.gainsightcloud.com/v1/ui/rules#v2/rule/46570bbe-742c-4e2a-8475-1dd1973b7b49/basicInfo)* を使用して S3 バケットにアップロードし、Snowflake が毎週日曜日の夜にテーブルを処理・更新します。

### 複数の本番インスタンスの健全スコアリング

アカウントが本番として識別された複数の GitLab インスタンスを持っている場合（[セルフマネージドインスタンスタイプの更新](#self-managed)方法の手順を参照）。

健全スコアは現在、組織全体のすべてのインスタンスを組み合わせたアカウントレベルでの使用データを集約することで計算され、Gainsight の健全スコアリングにも使用されます。値は Gainsight に提供され、以下の[閾値](/handbook/customer-success/product-usage-data/use-case-adoption/)に基づいて適切な赤/黄/緑の値が表示されます。

複数のインスタンスに問題が観察された場合、ユーザーはまだどのインスタンスがプライマリかを確認して割り当てる必要があります。

<details>

<summary markdown='span'>複数の本番インスタンス: Gainsight 管理プロセス</summary>
<br>

DevSecOps の健全指標はアカウントを「Ultimate」として確認するため、特定のアカウント下に複数のサブスクリプションがある場合に正しい本番インスタンスがスコアリングされるようにするために、このステップが追加されました。

CSM が Premium サブスクリプション下で本番インスタンスをマークした場合、DevSecOps の健全性は「NA」として表示されます。つまり、1 つの Premium と 1 つの Ultimate という 2 つのサブスクリプションがある場合でも、CSM が Premium を健全スコアリング用にマークした限り、アカウントに DevSecOps の健全スコア（一般的には赤）が表示されなくなります。

**Gainsight ルール:**

1. `NEW: Admin: Update Plan Name on Product Usage Instance Metrics`
   1. これは Product Usage Instance Metrics オブジェクトに Customer Subscription オブジェクトから `Plan Name` をプッシュします
2. `Set Score: DevSecOps Adoption Individual Measures`
   1. ルールは Company オブジェクトの `Products Purchased` ではなく、Product Usage Instance Metrics オブジェクトの `Plan Name` を確認します

</details>

## フィールドの定義

製品ステージの定義は[指標辞書](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html)から抽出されています。ステージ指標の詳細については、辞書を参照してください。

最終的には、指標のリストと定義をハンドブックに直接組み込む予定です。最初のイテレーションとして、指標のリストとその定義は[データマート — テーブル定義](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit#gid=0)スプレッドシートに記載されています。

[Gainsight Adoption Explorer のインスタンス](https://docs.google.com/document/d/1TvSCT_yj73AS0PuLxPonuF5QHWyM3dqG_i8H1U1cwf0/edit)の技術ドキュメントを参照してください。

### ユーザーとプロジェクトの採用指標

計算された指標については、[Gainsight 定義の製品利用レポーティング](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit#gid=650262484)の「ユーザーとプロジェクト採用指標」タブを参照してください。

## データ

### データ統合

データは月次ベースで Snowflake から Gainsight に統合されます。時間の経過とともに、これは隔週、そして週次に移行します。

![製品利用データフロー図](https://lucid.app/publicSegments/view/cba91861-d0aa-4f96-8848-56a2eec5798b/image.jpeg)

### データ品質のトリアージ

1. CS オペレーションにデータ品質の問題が Gainsight 固有か上流にあるかを確認します（#cs-product-analytics に投稿）。
   1. または、Gainsight と LicensesDot を比較します。
1. データ品質の問題が上流にある場合は、[データ品質プロジェクト](https://gitlab.com/gitlab-org/data-quality/-/issues)でデータ品質 Issue を作成してください。`Data Quality Problem` Issue テンプレートを使用してください。
   1. [データ品質 epic](https://gitlab.com/groups/gitlab-org/-/epics/10586) に添付してください。
   1. トラブルシューティングのためにスクリーンショットを含め、*Issue を機密に設定*してください。

### ライセンス↔サブスクリプションマッピングの再マッピング

顧客がデータを送信しているが Gainsight に表示されない場合は、手動で再マッピングするための手順を以下に示します。

1. GitLab がデータを受け取っていることを確認します
   1. セルフマネージドインスタンスの場合、本番インスタンスから[バージョンアプリ](https://version.gitlab.com/)で最近の Ping を受け取っていることを確認します
   1. SaaS の場合、ネームスペースデータが Gainsight に表示されていない場合は問題があることが分かります（確認の必要なし）
1. 対象インスタンスにマッピングされるべきサブスクリプション ID と、そのインスタンスのライセンス ID（ライセンス md5）を見つけます。
1. この[Issue テンプレート](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new?issuable_template=Manual%20License%20Mapping%20Self-Managed)を通じて CS Ops と共有します（DRI: Brandon）
1. CS Ops が CSV ファイルを更新します
   1. [セルフマネージド CSV ファイル](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/data/license_md5_to_subscription_mapping_temp.csv)
   1. SaaS CSV ファイルを追加する必要あり
1. データチーム（DRI: Miles）が変更を確認し承認します
1. データチームがマージのためにマネージャーに割り当てます（DRI: Israel）

注: このプロセスはスケジュールと負荷によっては数日または 1 週間かかる場合があります。自動化がこれらの問題を解決するまでは完全に手動プロセスであるため、ご了承ください。

### タイミングとフロー

データ統合（上記の一覧参照）のため、顧客がサービス Ping（セルフマネージド）を通じてデータを送信する瞬間から、Gainsight や Salesforce などのシステムで表示・使用可能になるまでに特定の遅延があります。この遅延はサービス Ping が顧客から受け取られてから 1〜2 日です。

SaaS 顧客のデータは毎週月曜日の 00:00 UTC（日曜日の午後 5 時 PST）に収集されます。収集後、Snowflake のリネージを通じて処理され、月曜日の 15:00 UTC（月曜日の午前 8 時 PST）に Gainsight に取り込まれます。

セルフマネージドの顧客からのデータも週次ベースで届きますが、各インスタンスはデータが収集される独自の日時を持っています。このプロセスは SaaS の収集と同じように標準化されていないため、データが収集される時間（1 から 2 日間）に基づいてより長い遅延が予想されます。

### データソースとアプリケーション

以下は、様々なデータソース・その定義・用途です。

#### クラウドライセンスと運用指標（セルフマネージドのみ）

クラウドライセンスで有効化すると、顧客は基本的なライセンス使用状況とインスタンスバージョン情報を含む `サブスクリプションデータ` を共有します。このデータは、有効化・プロビジョニング・コタームと更新を自動化するのに役立ちます。`サブスクリプションデータ` の共有は GitLab のサブスクリプション契約の標準的な部分です。`運用指標` はより詳細な製品利用指標を含み、サービス Ping のサブセットです。このデータにより、[ユースケース採用スコア](/handbook/customer-success/product-usage-data/maturity-scoring/)でのガイド・ベストプラクティスの提供・アップグレード推奨の支援を通じて顧客をサポートできます。データについての[7 分間のビデオ](https://youtu.be/8kbuZ-6Z5gs)（内部のみ）を参照してください。顧客は国家安全保障がリスクである場合、`運用指標` の共有について免除を求めることができます。

#### クラウドライセンス・サービス Ping・運用指標の関係

- **クラウドライセンス**: 顧客が `サブスクリプションデータ` を共有できるようにする有効化方法
  - 14.1 以上で利用可能
  - [クラウドライセンスの概要](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/)
- **サービス Ping**: サブスクリプション・運用・オプション指標を含むペイロードを収集するサービス
  - [運用サービスデータ](https://internal.gitlab.com/handbook/product/fulfillment/archive/operational-service-data/#register) — 内部ハンドブック
- **運用指標**: [カスタマーサクセスサービス](/handbook/customer-success/csm/digital-journey/)で必要なコア指標を収集するために必要な製品利用データを含むサービス Ping のサブセット
  - 14.1 以上で利用可能

**参考資料**:

- [カスタマーサクセスサービス](/handbook/customer-success/csm/digital-journey/)（クライアント向け）
- [運用データのビジョン](/handbook/customer-success/product-usage-data/)
- [クラウドライセンスドキュメント](https://internal.gitlab.com/handbook/product/fulfillment/cloudlicensing/cloud-licensing/)（内部ハンドブック）
- [Strict クラウドライセンス](https://internal.gitlab.com/handbook/product/fulfillment/cloudlicensing/strictcloudlicensing/)（内部ハンドブック）
- [サービス Ping 指標リスト](https://metrics.gitlab.com/)（サブスクリプション・運用・オプション）
- [運用サービスデータ](https://internal.gitlab.com/handbook/product/fulfillment/archive/operational-service-data/#register)（内部ハンドブック）

#### サービス Ping（セルフマネージド）

サービス Ping を活用してセルフマネージドの顧客利用レポーティングを導出します。詳細については、[サービス Ping FAQ](/handbook/customer-success/csm/service-ping-faq/)を参照してください。Gainsight の「サービス Ping」への参照はすべて、セルフマネージドの製品利用データ（ライセンス + 機能使用）を明示的に指します。

#### SaaS（Snowplow）

SaaS の顧客利用は Gainsight にあり、Snowplow コレクターを通じて収集されます。

#### ライセンスとサブスクリプションのマッピング

ライセンスが自動的に生成される場合（WebStore または Deal Desk 経由）、Zuora サブスクリプション ID がライセンスにマッピングされます。このマッピングにより、Gainsight でデータがリンクされてアカウントの完全な全体像が作成されます。

そのデータがマッピングされていない問題が発生した場合は、以下の手順に従ってください。

1. VersionApp を確認して、アカウントでサービス Ping が有効になっていることを確認します。
1. ライセンスキーに CustomersDot で Zuora サブスクリプションがリンクされているか確認します。
1. Zuora サブスクリプションが見つからない場合は、[サポート Issue を開いて](/handbook/support/internal-support/#internal-requests)正しい Zuora サブスクリプション ID を含む新しいライセンスを生成してもらいます。

この問題が発見された Issue の例: https://gitlab.com/gitlab-data/analytics/-/issues/8518

## 新しい指標のリクエスト

新しい指標をリクエストするには、[Product Analytics プロジェクト](https://gitlab.com/gitlab-org/product-analytics/-/issues/new)で Issue を開き、Product Analytics PM にメンションしてください。例として[プロジェクトごとのカウントの追加](https://gitlab.com/gitlab-org/product-analytics/-/issues/425)を参照してください。ただし、Issue を作成する前に、[イベント辞書](https://docs.google.com/spreadsheets/d/1VzE8R72Px_Y_LlE3Z05LxUlG_dumWe3vl-HeUo70TPw/edit#gid=618391485&fvid=1422977269)に指標がすでに存在しないことを確認してください。

新しい指標の例には以下が含まれます。

- 新しい機能のトラッキング
- 異なるコンテキストでの機能使用の確認（生カウント・ユーザー当たり・プロジェクト当たりなど）
- 異なる製品ティアでの使用をトラッキングするための既存指標の拡張（例: Core と有料ティアで使用される機能コンポーネントを具体的にトラッキングする）

## よくある質問（FAQ）

### データの可用性

#### 顧客が製品利用統計を持っていない理由は？

- セルフマネージド — サービス Ping にオプトインしていないか、オフにしました。
- セルフマネージド — インスタンスが本番としてラベル付けされていません。[インスタンスを本番としてラベル付けする方法](#self-managed)の手順はこちら。
- SaaS — 正しいネームスペースが Gainsight に表示されていない場合、顧客はネームスペースを（新しい）サブスクリプションに関連付ける必要があります。これは顧客が SM から SaaS に移行する場合や、顧客がネームスペースをサブスクリプションに紐付けることが必要な新規顧客の場合に起こりやすいです。顧客のネームスペースがサブスクリプションに紐付けられているかを確認するには、https://customers.gitlab.com/admin/order にアクセスして、Salesforce レコードにある最新の `サブスクリプション名`（例: A-S00012345）を入力してください。`Gl namespace` フィールドが空白の場合、サブスクリプションはネームスペースに紐付けられていません。これは顧客に代わって[内部サポートチケットを開く](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)か、顧客自身がサポートに連絡することで修正できます。

#### 顧客の課金対象ユーザー（またはライセンス利用率）の値が `Null` になっている理由は？

[`Billable Users`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) はバージョン 14.0 でインストルメント化されたため、SM 顧客がバージョン 14.0 より低い旧バージョンを使用している場合、`Billable Users` の値は収集されず `Null` として表示され、指標が `Billable Users` / `Licensed Users` を使用して計算されるため `License Utilization` のスコアにも影響します。

#### インスタンスとネームスペースの詳細に詳細が表示されているが使用トレンドが表示されない場合は？

顧客がセルフマネージドの場合、`Production` としてラベル付けされたインスタンスがあるか確認してください。使用トレンドレポートに表示されるには、インスタンスを `Production` としてラベル付けする必要があります。

インスタンスとネームスペースの詳細レポートセクションの目的は以下の通りです。

- 統計をレポートしている SaaS またはセルフマネージドインスタンスがあるか。
- GitLab のバージョン（セルフマネージドの場合）。
- 最後の統計レポート。例えば、2021-07-01 に統計を送信して停止しました。

#### セルフマネージドの顧客で指標が欠けている理由は？

指標がより新しいリリースで実装された場合は表示されません。データマートテーブル定義を確認して、対象指標のリリースを特定してください。インスタンスとネームスペースの詳細を確認して、顧客がどのリリースバージョンを使用しているかを確認できます。例: `Billable Users` は 14.0 でインストルメント化されており、顧客が 13.9 以前を使用している場合はこのフィールドが `NULL` として表示されます。

#### オフライン/エアギャップされたインスタンスのサービス Ping データを手動でアップロードするプロセスは？

顧客またはアカウントチームは、このリンクを使用して JSON ファイルをアップロードできます — https://version.gitlab.com/usage_data/new

#### 手動でアップロードしたサービス Ping データが Gainsight に反映されるまでどのくらいかかるか？

このプロセスは Gainsight レポートとスコアカードに反映され始めるまで 24〜48 時間かかる場合があります。

#### インスタンスデータを更新した後、データが更新されるまでどのくらいかかるか？

Gainsight でインスタンスに変更を加えてから 24〜48 時間お待ちください。

### サービス Ping とは何か？

サービス Ping は、セルフマネージドインスタンスの顧客アナリティクスを収集し、週次のペイロードを GitLab に送信する GitLab プロセスです。このペイロードは、GitLab の使用状況を理解するのに役立つ重要な高レベルの統計を提供し、プロダクト・サポート・セールスチームを支援します。

- [サービス Ping ガイド](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)
- [サービス Ping FAQ](/handbook/customer-success/csm/service-ping-faq/)

#### 顧客がサービス Ping にオプトインしていることを確認する方法は？

オプトインしているかどうかを確認する唯一の方法は、そのデータがあることです。詳細については[サービス Ping ガイド](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)を参照してください。

#### 顧客はサービス Ping をオプトアウトできるか？

はい。

#### 顧客はクラウドライセンスをオプトアウトできるか？

いいえ。ただし、（特定の公共機関に限定された）契約上の免除を行う場合を除きます。

#### クラウドライセンスからどのような統計が得られるか？

運用指標。

#### Gainsight の使用統計でサービス Ping はどのように機能するか？

使用統計は週次で受け取り・収集され、それらの統計は毎週 Gainsight に追加されます。指標は受け取られ週次で追加されますが、`Last 28 Days (L28)` や `All-Time` など月次として表示されます。

### Gainsight でのデータはどのくらいの頻度で更新されるか？

- SaaS — 使用 Ping は毎週スケジュールに従って（通常月曜日）インスタンス全体のすべての顧客/ネームスペースに対して手動で取得されます。Snowflake に読み込まれ Gainsight に渡されますが、これらのプロセスには 1〜2 日かかる場合があります。
- セルフマネージド — 各セルフマネージドインスタンスの使用 Ping は週次で更新され、週次 Ping のスケジュールはインスタンスごとに異なります。Snowflake に読み込まれ Gainsight に渡されますが、これらのプロセスには 1〜2 日かかる場合があります。

### 過去 28 日間の指標はどのように機能するか？

- 最新の使用 Ping 日付を含む過去 28 日間のデータを表示します。<br>

**例:**<br>

- 1 月 9 日の Ping は 12 月 12 日〜1 月 9 日のデータを表示
- 1 月 16 日の Ping は 12 月 19 日〜1 月 16 日のデータを表示
- 1 月 23 日の Ping は 12 月 26 日〜1 月 23 日のデータを表示
- 1 月 30 日の Ping は 1 月 3 日〜1 月 30 日のデータを表示
- これが最終 Ping であるため、1 月のデータは 1 月 3 日〜1 月 30 日。
- Gainsight の 1 月のデータは 1 月 3 日〜1 月 30 日を含み、1 月 1・2・31 日は除外。
- 2 月 6 日の Ping は 1 月 9 日〜2 月 6 日のデータを表示 <br>

<details>
  <summary markdown="span"> ビジュアルの例を参照してください: </summary>
 ![28d ロジック](https://lucid.app/publicSegments/view/0de4f2de-99f8-44a1-a47d-a7b31cab896e/image.png)
</details>

### 週/月のカレンダーデータを持っているか？

いいえ。[過去 28 日間の指標はどのように機能するか？](#how-do-last-28-days-metrics-work)を参照してください

### 月初に使用統計が欠けているのはなぜか？

顧客から Ping が収集されるまで、月初の最初の 1 週間の使用統計が欠けている場合があります。Ping のスナップショット日は顧客ごとに異なります。

### 赤い DevSecOps スコアに対して CSM センチメントを黄/緑に設定すると赤の健全スコアが上書きされるか？

DevSecOps 固有の上書きはありません。ただし、1 つの上書きオプションがあります — CSM センチメントです。CSM はそれを赤に変更でき、アカウント全体を赤にします。[ハンドブック参照](/handbook/customer-success/customer-health-scoring/#csm-sentiment)。CSM センチメントの全体的な重み付けは 25% であり、製品は 50% です

---

## データの定義

### 指標が何を測定しているかを理解する最善の方法は？

[Gainsight 定義の製品利用データ](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?usp=sharing)を確認してください。

### 指標の詳細を理解する最善の方法は？

[Gainsight 定義の製品利用データ](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?usp=sharing)を確認してください。

### 課金対象ユーザー・ライセンスユーザー・アクティブユーザーの違いは？

- アクティブユーザー数はボット・ゲストユーザーを含むため削除されました。
- 課金対象ユーザーはアクティブユーザーを含み、ボットとゲストを除外します。これを販売されたライセンス数と正確に比較してライセンス利用率を確認できます。
- ライセンスユーザーは CustomersDOT でプロビジョニングされたライセンスの数です。

### UUID とは何か？

UUID は GitLab がサーバーに割り当てた ID です。1 つのホスト名に複数のサーバーが存在する場合があります。

### 製品利用統計とテレメトリの違いは？

テレメトリはサードパーティのアナリティクスという意味合いがあるため、この言葉の使用を避けています。詳細と代替表現については、[よく誤用される用語のハンドブックページ](/handbook/communication/top-misused-terms/)を参照してください。

---

## 複数のホスト名とサブスクリプション

以下のレポートは、複数のホスト名とサブスクリプションを持つアカウントには効果的ではありません。

- 製品利用スコアカード計算
- スコアカード製品利用指標
