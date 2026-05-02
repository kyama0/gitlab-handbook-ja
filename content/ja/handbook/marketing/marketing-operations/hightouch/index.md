---
title: Hightouch
description: Hightouch の概要
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/marketing-operations/hightouch/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

## <i class="fab fa-gitlab fa-fw" style="color:rgb(252,109,38); font-size:.85em" aria-hidden="true"></i>

## DRI

| DRI            | 役割            |
| -------------- | --------------- |
| Amy Waller     | ビジネスオーナー  |
| Mihai Conteanu | 技術オーナー |

## Hightouch ハンドブック - Iterable へのデータ同期

Hightouch ハンドブックへようこそ！このドキュメントページでは、Hightouch ツールを使って [Iterable](/handbook/marketing/marketing-operations/iterable/) にデータを同期するための重要な情報を提供します。マーケティングオペレーションマネージャーにとって、信頼性が高く効率的なデータ同期プロセスを持つことは極めて重要であり、Hightouch はそれを実現するうえで重要な役割を果たします。それでは、主な構成要素である syncs（同期）、models（モデル）、sources（ソース）、objects（オブジェクト）について詳しく見ていきましょう。

## Syncs（同期）

| Sync 名                               | オブジェクト          | タイプ        | Sync 更新間隔 | 説明                                                              |
|-----------------------------------------|-----------------|-------------|--------------|--------------------------------------------------------------------------|
| Iterable-Production                     | Record/user     | Update Only | 24 時間     | 個人がメンバーとなっているすべての namespace に関するデータを同期 |
| Iterable - First Namespace Details Sync | Record/user     | Update Only | 24 時間     | 個人が最初に作成した namespace に関する情報を個別フィールドに同期 |
| Iterable - First Namespace Details Sync | Custom Event    | Update Only | 24 時間     | 追跡およびデバッグ目的で Iterable にイベントを同期              |
| Marketo Activities                      | Custom Activity | Update Only | 24 時間     | Marketo にカスタムアクティビティを作成                                     |

Syncs は Hightouch のデータ転送機能の中核です。さまざまなソースから Iterable へのデータ転送を担います。簡単に言えば、syncs は Iterable のデータを最新の状態に保つための処理です。ニーズに合わせて syncs を構成することで、オンボーディング体験やナーチャーメールなどのキャンペーン配信に向けて、正確で関連性のあるデータを確保できます。

Hightouch sync 構成の主な要素:

- Model（モデル）: 同期したいモデル。モデルでは同期したいオブジェクトタイプとフィールドを定義します。
- Destination（送信先）: 同期したい送信先。Hightouch はさまざまなマーケティングツールやシステム、独自の送信先に対応しています。各送信先はアドオン費用として扱われます。私たちは Marketo と Iterable を利用しています。
- Sync mode（同期モード）: 使用する同期モード。Hightouch は upsert、insert、update の同期モードに対応しています。
- Record matching（レコード照合）: ソース行を送信先のレコードにどう一致させるか。update および upsert の sync では特に重要です。
- Schedule（スケジュール）: sync の頻度。sync の頻度は慎重に検討してください。頻度が高すぎると、データウェアハウスやマーケティングツールに負荷がかかる可能性があります。標準として、私たちはデータを 24 時間ごとに同期しています。

### Tips

- Hightouch sync を構成するときは、同期したいデータを慎重に検討することが重要です。データは送信先と関連性があるべきです。
- 使用する同期モードも慎重に検討する必要があります。誤った同期モードを使うと、送信先のデータが上書きされる可能性があります。
- 本番運用前に sync を十分にテストすることが重要です。これにより潜在的な問題を発見し修正できます。
- sync を定期的にモニタリングして、スムーズに動作していることを確認してください。
- Sync ログ: sync ログには各 sync の実行に関する詳細情報が含まれます。各 sync の開始時刻と終了時刻、同期されたレコード数、発生したエラーを確認できます。
- データ品質チェック: データが正しく同期されていることを確認するためにデータ品質チェックを実行できます。例えば、ソースシステムと送信先システムのレコード数を比較して一致するかどうかを確認できます。

### よくあるエラー

`No record was found with lookup for email:johndoe@john.com`
- このエラーは Iterable-Marketo Sync で想定されます。`update only` 方式を使っているためです。これは Snowflake のテーブルには存在するが Iterable には存在しないレコードがあり、それを同期しようとするためです。Iterable のレコードは製品からの API 呼び出しで作成され、サイズ制限のため、ウェアハウスからすべてのレコードを同期することは望ましくありません。

`Specified password has expired. Password must be changed using the Snowflake web console.`
- Snowflake コネクタのパスワードは 3 ヶ月ごとに有効期限が切れるため、`HIGHTOUCH_USER` でログインして Snowflake UX 上でリセットする必要があります。その後、Hightouch>Sources>Snowflake でパスワードを変更してください。

![Syncs](/images/source/handbook/marketing/marketing-operations/hightouch/Hightouch_1.png)

![Syncs_2](/images/source/handbook/marketing/marketing-operations/hightouch/Hightouch_2.png)

## Models（モデル）

Hightouch のモデルは、同期したいデータの定義です。各オブジェクトタイプ（例: users、accounts、leads）と、それぞれについて同期したいフィールドが含まれます。私たちは、同期したい具体的な情報に応じて、SQL エディタを使って Snowflake のデータをモデル化します。Hightouch のモデルは、データウェアハウスとマーケティングツールの間で同期されるデータをコントロールできるという点で重要です。

Hightouch モデルの作成方法:

1. 同期元のソースを選択します。Hightouch は Amazon Redshift、Google BigQuery、Snowflake などさまざまなデータウェアハウスをサポートしています。
2. モデリング方法を選びます。Hightouch は 3 つのモデリング方法をサポートしています:

    - SQL editor: SQL クエリを書いてモデルを定義する。
    - Table selector: モデルに含めるテーブルとカラムを選択する。
    - dbt model selector: モデルとして使用する dbt モデルを選択する。

3. 同期したいオブジェクトタイプとフィールドを定義します。
4. モデルのプライマリキーを構成します。
5. モデルを保存します。
6. モデルを作成したら、それを使って sync を作成できます。

### Hightouch モデルの例

- 顧客の名前、メールアドレス、購入履歴を含む顧客モデル。
- リードの名前、会社名、メールアドレスを含むリードモデル。
- イベントの種類、イベント日付、顧客 ID を含むイベントモデル。
- 製品名、説明、価格を含む製品モデル。

## Sources（ソース）

ソースは、私たちが sync のためにデータを抽出するデータシステムやプラットフォームを表します。Hightouch はデータベース、データウェアハウス、サードパーティアプリケーションなどさまざまなソースに対応しています。これらのソースに Hightouch を接続することで、データを sync に取り込むプロセスを簡素化し、データ同期を効率化します。

Hightouch は人気のあるデータソース向けに事前構築済みのコネクタを提供しており、スムーズな連携を実現します。さらに、独自のコネクタを作成する柔軟性も提供しており、要件を満たす任意のソースに接続できます。

私たちの現在のソースは、Snowflake のデータウェアハウスです。dbt モデル[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.poc_pump_marketing_contact_namespace_detail#code)からデータを取得しています。

## Objects（オブジェクト）

Hightouch はさまざまな種類のオブジェクトを Iterable に同期でき、マーケティングキャンペーンで幅広いデータを活用できるようにします。よく同期されるオブジェクトには以下があります:

1. **Users**: Hightouch はユーザープロファイル、属性、イベントを Iterable に同期し、各ユーザーの全体像を提供します。このデータはパーソナライズされターゲット化されたキャンペーンを作成するうえで不可欠です。

2. **Events**: イベントを同期することで、Hightouch はユーザーの操作や行動を追跡できます。このデータは特定のマーケティングアクションをトリガーしたり、エンゲージメントに基づいてユーザーをセグメント化するために活用できます。

3. **Segments**: Hightouch は動的セグメントを Iterable に同期でき、最新のユーザーグループをキャンペーンで利用できるようにします。これにより、特定のセグメントにメッセージを合わせたターゲティングが可能になります。

これらのオブジェクトなどを同期することで、Hightouch は Iterable を介して非常にパーソナライズされ魅力的な体験をユーザーに届けるパワーを与えてくれます。

## Monthly Queried Records (MQR)

Hightouch で sync が実行されレコードがクエリされるたびに、MQR が消費されます。同じレコードが請求期間中に複数回クエリされても、1 件としてカウントされます。
請求期間あたりの Monthly Queried Records (MQR) の上限は 150 万件である点に注意してください。
