---
title: "GitLabのHVS-FO Data and Opsチーム"
description: "HVS-FO Data and Opsチームは、データを活用してセルフサービス顧客体験を最適化し、セールス効率を通じてnARR成長を推進する責任があります。このチームのデータインサイトは、セールス可視性、セルフサービスフルフィルメント機能、グロース/マーケティング実験にフィードされます。HVS-FO Data and Opsチームはまた、効率、優先順位付け、意思決定を支援するデータツールの作成も目指します。"
upstream_path: /handbook/sales/high-velocity-sales-fo-team/hvs_fo_data_ops/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-18T08:17:29-07:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## HVS-FO Data and Ops チームハンドブックへようこそ

{{% alert color="success" %}}
HVS-FO Data and Ops チームは、データを活用してセルフサービス顧客体験を最適化し、セールス効率を通じて nARR 成長を推進する責任があります。このチームのデータインサイトは、セールス可視性、セルフサービスフルフィルメント機能、グロース/マーケティング実験にフィードされます。HVS-FO Data and Ops チームはまた、効率、優先順位付け、意思決定を支援するデータツールの作成も目指します。
{{% /alert %}}

## チーム

|  **名前** | **GitLab ハンドル** | **タイトル** |
| :--------------- | :----------------- | :----------------- |
| Max Fleisher | @mfleisher | Sr. Mgr, HVS Data and Operations |
| Sara Gladchun | @sglad | Sr. Analyst, HVS Data |
| Ed Lu | @eclu94 | Sr. Analyst, HVS Operations |

## 私たちが協業する相手

**HVS-FO チーム** - セールス効率と戦略を通じて nARR と成長を推進するためのデータインサイトと運用サポートを提供するため、HVS-FO チーム全体とパートナリングしています。

**中央データチーム** - クロスファンクショナルなデータイニシアチブに関与し続け、可能な場合は協業し、データモデルと Snowflake に存在するデータに関するフィードバックを提供することで、中央データチームと協働しています。また、データサイエンスチームのプロジェクトとモデルを最新の状態に保ち、彼らの予測アウトプットの多くを私たちの分析とトリガーに組み込むことで、データサイエンスチームとも協働しています。

**Product Analytics** - 彼らが取り組んでいる主要プロジェクトを最新の状態に保ち、彼らのモデルの多くを私たち自身のデータ作業で活用することで、Product Analytics と協働しています。

**Fulfillment** - セルフサービスフルフィルメント機能と機能リクエストに関するデータを提供するため、Fulfillment と協働しています。

**Marketing Analytics** - FO ファネルに関するデータと、プールされたアカウント顧客へのターゲットデジタルアウトリーチを提供するため、Marketing Analytics とパートナリングしています。

## リソース

### 一般

|  **リソース** | **概要** |
| :--------------- | :----------------- |
| [Data Request Issue Template](https://gitlab.com/gitlab-com/sales-team/hvs/-/issues/new?description_template=Data_Question_Intake) | アドホックなデータの質問とリクエストに使用すべきテンプレート |
| [Data Hub](https://docs.google.com/document/d/10p86n7f5vt4UmhHM4ZGRZm4OSa5k5g-LKQ0uBAKnvSc/edit?usp=sharing) | 私たちのデータアセットとリソースをすべて一か所にまとめたもの |

### OKRs

- [FY26](https://docs.google.com/spreadsheets/d/1i9yYZKZVJ-OimjoF-Ip_SbA2hlqqhYfoag2m71wqs1M/edit?gid=1461447719#gid=1461447719)

<!-- ### Quarterly Prioritization List

- [FY23-Q4](https://gitlab.com/groups/gitlab-com/sales-team/-/epics/61)
- [FY24-Q1](https://gitlab.com/groups/gitlab-com/sales-team/-/epics/66)
- [FY24-Q2](https://gitlab.com/groups/gitlab-com/sales-team/-/epics/66)
- [FY24-Q3](https://gitlab.com/groups/gitlab-com/sales-team/-/epics/66) -->

## 私たちと協業する

**目的**: より広いセルフサービスチームがセルフサービスデータスクワッド(Max、Sara)と関わる方法を概説する

**ゴール**: 透明性のあるエンゲージメントモデルを提供しながら、インサイトへの依存関係/ブロッカーを最小化する

**免責事項**: すべてのデータの質問に答えられるわけではありません。最終的に、アドホックな質問に答える時間を取ることは、プロジェクトに費やす時間が減ることを意味します(別名、ゼロサムキャパシティ問題)。これはアドホックな質問が重要でないということではありません。しかし、OKR プロセスを通じて優先順位付けされた進行中の「ボルダー」レベルのプロジェクトもあり、これも進める必要があります。

**アドホックなデータリクエストや質問を提出する方法**:

1. 既存のリソース(例: data hub、SFDC)を活用してこの質問に答えようとしましたか?

   - もしいいえなら、これらの既存のリソースを使用して質問に答えるよう試みてください。
   - もしはい、しかしまだ質問に答えられない場合は、質問 2 に進んでください。

2. [私たちのプロジェクト](https://gitlab.com/gitlab-com/sales-team/hvs/-/issues/new?description_template=Data_Question_Intake)の Data Question Intake issue テンプレートを使用して、以下を行ってください:

- "Filled out by Requestor"セクションの下のすべての項目に記入する
- "Self-Service Data"と"Self-Service Data Ad Hoc"ラベルを追加する
- ビジネスを停止させる場合: Issue へのリンクと共に Slack(理想的には#hvs)で Max にタグ付けする。

<!-- ## How we prioritize ad hoc requests
The more points the better!

1. Can this question be incorporated into existing OKR? If yes, +3
2. Ease of ability to answer question (+0 = 8+ hours; +1 = 4-8 hours; +2 = 2-3 hours; +3 = 1 hour or less)
3. Priority (High = +3, Medium = +2, Low = +1)
4. Is an c-suite member asking for this? If yes, +2

If an ad-hoc request scores north of 7 points, we will re-consider prioritizing it above existing OKR work. -->

## SSOT クエリ

SSOT データは、メトリックに自信を持ち、繰り返し可能で再現可能なレポーティングを行い、データチームがより効率的に作業するために必要です。基礎となる[ベースクエリ](https://gitlab.com/gitlab-com/sales-team/self-service/-/tree/main/SSOT%20Queries/Base_Queries)と[アドホック分析](https://gitlab.com/gitlab-com/sales-team/self-service/-/tree/main/SSOT%20Queries/Ad_Hoc_Analyses)の両方の SSOT SQL クエリを格納するための[GitLab リポジトリ](https://gitlab.com/gitlab-com/sales-team/self-service/-/tree/main/SSOT%20Queries)を作成しました。

これにより、ダッシュボードのような基礎プロジェクトと、将来繰り返し、調整、または変更が必要になる可能性のある一回限りの分析に使用されるクエリの記録を保持できます。
ダッシュボードクエリは、データチームが BI ツール内でより効率的に作業するために、Sisense のスニペットとしても格納されています。現在、これらのクエリを Tableau 内でも動作するように更新中です。

**スニペットと SSOT クエリを作成または更新するための現在のワークフローは次のとおりです**:

1. クエリを作成または更新し、望ましい結果と正確なデータを生成することを確認する
2. SSOT Queries ディレクトリのクエリを更新し、新しいブランチにコミットする
3. MR を作成し、別のデータチームメンバーをレビュアーとしてタグ付けする
4. レビュアーがコードをレビューし、MR をマージしてクエリを更新する
5. MR が承認されマージされたら、元の作成者が Sisense のスニペットを更新する(元の作成者は、コメントの日付を最も最近更新された日付で更新する必要もあります)

**Tableau データソースワークフロー(WIP - 新規データソース)**:

1. Snowflake ワークシートを使用して、望ましい出力を生成するクエリを作成する
2. Snowflake から Tableau Desktop で新しいデータソースを作成する
3. SSOT Repo にクエリをコピーして作業を保存し、変更を追跡する
4. Custom SQL としてクエリを Tableau にコピーし、Extract に設定する
5. Extract を実行し、データの整合性と精度をチェックする
6. 必要な変更を Repo にコミットする
7. クエリが完成したら:
        - データソースをサーバーに公開する
        - 重要 - データソースは Development -> Sales -> SAFE フォルダに公開する必要があります
        - リフレッシュを許可するために Snowflake 認証情報を埋め込む

**公開された Tableau データソースを更新する**:

1. Tableau Server にログインする
2. My Content または上記のフォルダでデータソースを見つける
3. Edit Data Source を選択する
4. Snowflake ワークシートを使用して、保存されたクエリへの変更をテストする
5. Repo に変更をコミットする
6. 新しいクエリを Data Source Custom SQL にコピーする
7. extract を実行する
8. 更新されたデータソースを公開する
