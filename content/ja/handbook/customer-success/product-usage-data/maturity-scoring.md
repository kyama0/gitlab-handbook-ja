---
title: "ユースケース採用スコアリング"
description: "採用スコアリングの概要、計算方法、および CSM が顧客との会話でその情報をどのように活用できるかについて。"
upstream_path: /handbook/customer-success/product-usage-data/maturity-scoring/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

*Gainsight の概要およびログイン方法については、[Gainsight 概要ページ](/handbook/sales/gainsight/)をご参照ください。*

CSM が Gainsight をどのように使用するかの概要については、[Gainsight CSM 概要ページ](/handbook/customer-success/csm/gainsight)をご参照ください。

## 採用スコアリング

ユースケースの採用スコアリングは、特定の指標リストに基づいて顧客の採用状態を理解するために CSM を支援します。
採用スコアを確認することで、CSM は採用ジャーニーにおける顧客の現在の状態を理解できます。

<details>
  <summary markdown="span"> 採用スコアの構築 </summary>

### 採用の定義とライトハウス指標の特定

**期間: 2〜3 ヶ月**

ユースケースの採用スコアを構築するプロセスの最初のステップは、特定のユースケースにおける顧客のパフォーマンスと採用レベルを測定できるライトハウス指標の特定から始まります。ユースケース採用の幅を捉えるために、ユースケース内の主要機能の週次/月次使用状況を捉えて顧客の採用成熟度を正確に測定する先行指標に依存しています。

プロダクトマネジメント・データ・カスタマーサクセスチームは、ユースケース採用に特有の指標の特定において重要な役割を果たします。プロダクトマーケティングはプロダクトマネージャーと協力して、各ユースケースの採用推奨事項を特定し、それぞれのユースケースリソースページで確認できます。主要な指標の特定後、それぞれのプロダクトチームが（まだ存在しない場合）指標のインストルメンテーションの責任を担い、その後、指標を正規化するための分母の特定（例: `Git Operations - User L28D` / `Billable Users` = `Git Operation Utilization %`）に進みます。

<details>
  <summary markdown="span"> ユースケースリソースページ </summary>

- [SCM](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/#adoption-recommendation)
  <br>
- [CI](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#adoption-recommendation)
  <br>
- [CD](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/#adoption-recommendation)
  <br>
- [セキュリティ（DevSecOps）](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/)
  <br>
- [コンプライアンス](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/compliance/)
  <br>
- [アーティファクト管理（Package）](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/package/)
  <br>
- [GitOps](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#adoption-recommendation)
  <br>
- [アジャイル](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/agile/#adoption-recommendation)

  </details>

### 指標のインストルメンテーション

**期間: 8〜12 ヶ月**

ユースケースの各プロダクトチームは、ライトハウスおよび/または先行指標として選択された主要機能の使用状況を収集・測定するために必要な作業のトリアージと優先順位付けを支援する責任を担います。このプロセスは、帯域幅と優先順位付けに応じて 2〜6 ヶ月かかる場合があります。

インストルメンテーションはパズルの最初のピースです。採用スコアを計算するための閾値設定には、指定されたユースケースと機能の使用状況の歴史的データが必要なためです。各指標の閾値を正確に設定するには、少なくとも 6〜8 ヶ月の使用履歴データが必要です。
<br>

### インジェスションモデルへの指標の追加（Snowflake テーブル）

**期間: 1〜2 ヶ月**

データチームは、選択されたライトハウス指標/先行指標を、Tableau（以前は Gainsight）などの BI システムにフィードする関連インジェスションモデル（Snowflake テーブル）に追加する責任を担います。このプロセスには、インスタンスレベルで使用状況を正確に把握していることを確認するために、最低 4 週間の作業と検証が必要です。
<br>

### 閾値と重み付けの分析

**期間: 3〜6 週間**

閾値のパーセンテージは、特定の四分位数に当てはまる顧客数を確認するとともに、このユースケースで健全な使用状況を持っていることが分かっている顧客のサブセットの平均値/中央値を確認することで選択されます。この 2 つを組み合わせることで、各指標のパーセンテージがどこであるべきかの優れた出発点が得られます。次に、その出発点に基づいて各色に何人の顧客が当てはまるかを確認します。その後、各色のパーセンテージの設定について CSM やプロダクトからのフィードバックを集める等、最終的な微調整を行います。
<br>

### テスト

**期間: 2〜4 週間**

これは、選択した指標・閾値・重み付け・データの整合性を検証する重要な部分です。このプロセスでは、少なくとも 15〜20 の実際のアカウントのスコアを計算します。特に指定されたユースケースの採用をよく理解しているアカウントを選び、CSM と共有して結果スコアを確認します。
<br>

### Gainsight/Tableau での運用化

**期間: 2〜3 週間**

ユースケース採用指標は現在 Snowflake に存在し、計算されてから Gainsight スコアカードで視覚化されます。C360 内には対応するレポートがあり、Gainsight ユーザーが特定のユースケースの深掘りを行い、ベストプラクティスと改善の推奨事項について顧客との会話をサポートできるようにします。
<br>

### イネーブルメント

**期間: 1〜2 週間**

最後のピースは、CSM がスコアを計算し、顧客向けスライドデッキを作成し、スコアを詳細に提示できるようにするためのイネーブルメントです。これには、CSM・CSM マネージャー・イネーブルメント・CSOps 間のクロスファンクションなパートナーシップが必要で、CSM が通常モックプレゼンテーションでイネーブルメントセッションをリードし、CSOps が Q&A とフォローアップを担当します。
<br>

### 変更管理

**期間: 様々**

GitLab のユースケースに新機能を追加しながら毎月更新される製品において、顧客の製品採用を最も正確に描写することを目指し、それぞれの採用スコアを継続的に改善するプロセスを持っています。新機能が構築・利用可能になるにつれて、各プロダクトチームによって新しい指標もインストルメント化され、顧客が GitLab での DevOps 目標を達成し体験を改善するのに役立つインサイトを提供できるようになります。
<br>

</details>

### CI 採用スコアリング

顧客の CI 採用スコアを決定するために、以下の主要および補助指標が使用されます。
<br>
![CI 採用スコアリング](https://lucid.app/publicSegments/view/14463ed0-bdf2-47a1-998b-40a6bdba9986/image.png)
<br>
[採用ガイドリファレンスリンク](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#adoption-guide)

#### リソース

- [顧客会話用テンプレートデッキ](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing)（内部のみ）
- Gainsight の[ユースケース採用スコアカード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e)ダッシュボードを使用して、顧客の CI 指標を表示・エクスポートし採用スコアを計算します
- [CI 採用スコアのバリューステートメント](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/#customer-adoption-and-value)
  - CI 採用の測定方法と採用を改善する方法についての会話をガイドするのに役立ちます。
- [ユースケース採用スコアリング — 定義された指標](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing)（内部のみ）

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/zurUFQDSWt8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

- CI 採用スコアリングウォークスルー
  - [セッション 1](https://youtu.be/E4IMgFWGkNM)（内部のみ）
  - [セッション 2](https://chorus.ai/meeting/E4F00AFC0C4A4036A7AC370653A50112?)（内部のみ）
  - [CI 採用のバリューステートメント](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/#customer-adoption-and-value)

### セキュリティ（DevSecOps）採用スコアリング

顧客のセキュリティ採用スコアを決定するために、以下の指標が使用されます。
<br>
![DevSecOps 採用スコアリング](https://lucid.app/publicSegments/view/2ddbf5a5-0a5e-4695-ac50-b073e3dc6eec/image.png)
<br>
[採用ガイドリファレンスリンク](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#adoption-guide)
<br>

#### リソース

- [顧客会話用テンプレートデッキ](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing)（内部のみ）
- Gainsight の[ユースケース採用スコアカード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e)ダッシュボードを使用して、顧客のセキュリティ（DevSecOps）指標を表示・エクスポートし採用スコアを計算します
- [バリューステートメント](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#the-gitlab-solution)
- [ユースケース採用スコアリング — 定義された指標](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing)（内部のみ）

#### CS イネーブルメント

この内部[イネーブルメントセッション](https://youtu.be/WrhUfVWa3BU)では、CS が以下について説明します。

- スコアリングルーブリックへの新しい変更
- 新たに追加された指標の詳細
- 顧客向けスライドデッキの作成プロセス
- 4 つの異なるタイプの顧客シナリオのスコアリング例

<!-- blank line -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/WrhUfVWa3BU?si=RwOKuhj9nEz275Vi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- blank line -->

### CD 採用スコアリング

顧客の CD 採用スコアを決定するために、以下の指標が使用されます。
<br>
![CD 採用スコアリング](https://lucid.app/publicSegments/view/52a3c35f-a4c0-4632-ab89-258a02d78042/image.jpeg)
<br>
[採用ガイドリファレンスリンク](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/#adoption-guide)
<br>

#### リソース

- [顧客会話用テンプレートデッキ](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing)（内部のみ）
- Gainsight の[ユースケース採用スコアカード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e)ダッシュボードを使用して、顧客の CD 指標を表示・エクスポートし採用スコアを計算します
- [ユースケース採用スコアリング — 定義された指標](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing)（内部のみ）

#### CS イネーブルメント

この内部[イネーブルメントセッション](https://youtu.be/MQkIlvlsBUA)では、CS が以下について説明します。

- CD 指標を選択した方法と理由
- 閾値の設定方法
- 顧客向けプレゼンテーションデッキの計算と作成方法
- デプロイとは何か？なぜ重要か？顧客との会話をどのように進めるか
- 異なるデプロイ戦略を持つ 3 つの顧客シナリオ

<!-- blank line -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/MQkIlvlsBUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- blank line -->

### SCM 採用スコアリング

顧客の SCM 採用スコアを決定するために、以下の指標が使用されます。
<br>
![SCM 採用スコアリング](https://lucid.app/publicSegments/view/c9c1cd25-4435-4c40-965d-744852dd71b2/image.png)
<br>
[採用ガイドリファレンスリンク](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/#adoption-recommendation)

### 使用ロールアップ手法

使用データは通常、GitLab インスタンスレベルで計算されます。このデータを顧客アカウントレベルにロールアップする際、まずサブスクリプションを代表する単一のインスタンスを特定します。基本的には、最も多くの課金対象ユーザーを持つ本番インスタンスを特定することで行われます（CSM/E は本番インスタンスが適切にラベル付けされていることを確認することが不可欠です）。各サブスクリプションに単一インスタンスを紐付けた後、顧客の総 ARR に占めるサブスクリプションの ARR の割合を使用して各サブスクリプションの関連使用状況を重み付けする以下の手法を適用します。

![使用ロールアップ手法](https://lucid.app/publicSegments/view/e8045d2a-3135-4e66-b52d-21e42b566d10/image.png)

### 採用不足の理由追跡

**概要:**
<br>

CSM/A が管理するすべての顧客で、CI とセキュリティユースケースの採用不足の主要な理由を追跡します。これらはプラットフォームのより広い価値を解放するために重要です。理由を体系的に追跡することで、各理由を中心としたコンテンツやプログラムの構築により集中した取り組みができるようになります。GitLab の CSM/A として、管理するすべての顧客についてこの理由を入力し、必要に応じて更新することが期待されています（セキュリティの理由は Ultimate 顧客のみ必要）。その後、顧客のサクセスプランを策定・実行する際に念頭に置く必要があります。
<br>

**追跡方法:**
<br>

1. Gainsight にログインする
2. 顧客の C360 に移動する
3. アカウント属性（編集可能）セクションまでスクロールする
4. 追跡したいユースケースに対応するフィールドを探す（現在利用可能なのは「CI 採用不足の理由」と「セキュリティ採用不足の理由」の 2 つ）
5. ドロップダウンから最も適切な理由を選択する
6. 選択内容は自動保存されます
<br>

**すべての顧客の採用不足の理由を表示する方法:**
<br>

1. Gainsight にログインする
2. サイドナビゲーションを使用してダッシュボードに移動する
3. 左上のピックリストから CSM ポートフォリオダッシュボードを選択する
4. 現在入力されている採用不足の理由は、ダッシュボードの顧客詳細レポートセクションで確認できます
<br>

**CI 採用不足の理由:**
<br>

1. ライセンスティア・シート・コンピュート分・ストレージコストに関する課題
2. セキュリティとコンプライアンスのワークフローの課題
3. 機能の学習と使用方法に関する課題
4. 採用に関する社内の組織的な課題
5. GitLab 継続的インテグレーション（CI）ワークフローの課題
6. GitLab 内のデプロイワークフローの課題
7. 作業の計画と追跡に関する課題
8. リポジトリとコードレビューのワークフローの課題
9. GitLab への移行
10. プラットフォームのダウンタイム / 可用性
11. GitLab CI を使用する意図がない
12. GitLab CI をフル活用している（他のソリューションなし）が、ビジネスユーザー数が多い
13. N/A（CI 採用グリーン）
<br>

**セキュリティ採用不足の理由:**
<br>

1. ユーザーロールとアクセス管理
2. アプリケーションコードのセキュリティスキャンの設定と維持
3. セキュリティスキャン結果の管理と確認された脆弱性の修復
4. 依存関係の管理・スキャン・可視化
5. シークレットおよび/または CI 変数の管理
6. SSO プロバイダーとの統合
7. コンプライアンスワークフロー（ロールアップビュー・ワークフローを含む）
8. DSO（CI など）以外での採用が滞っている
9. GitLab への移行
10. 採用に関する社内の組織的な課題
11. セキュリティとコンプライアンスのワークフローの課題
12. N/A（DSO 採用グリーン）
<br>

#### リソース

- [顧客会話用テンプレートデッキ](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing)（内部のみ）
- Gainsight の[ユースケース採用スコアカード](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e)ダッシュボードを使用して、顧客の SCM 指標を表示・エクスポートし採用スコアを計算します
- [ユースケース採用スコアリング — 定義された指標](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing)（内部のみ）
- [顧客 360](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCustomer360/Customer360LandingPage?:iid=1) — 個々の顧客の健全スコア・ユースケース採用・アカウント情報を統合した包括的かつ詳細なビューを提供するダッシュボード
- [アカウントランドスケープ](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTAccountLandscapeUseCaseAdoption/AccountLandscapeDashboard?:iid=1) — すべての顧客のマクロレベルの概要を提供し、ユースケース採用の変化がある特定の顧客セグメントを特定・ターゲットにするダッシュボード
<br>
