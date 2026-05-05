---
title: "Tableau 開発者向けヒントとコツ"
description: "Tableau 開発者向けのヒントとコツ"
upstream_path: "/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/"
upstream_sha: "cd48478a4249801968533c5281c38a2b58b5e688"
translated_at: "2026-04-29T12:00:00Z"
translator: claude
stale: false
---

## 日付処理

Tableau には日付を処理・可視化する方法が多数ありますが、選択肢が多いがゆえに、特にカスタムなニーズがある場合には、最適な方法を知るためのコツが役立ちます。

## 本番ダッシュボードにおける日付処理

会計年度の開始日が 2 月であること、および Tableau に会計年度の日付計算が欠けているという固有の課題から、私たちは日付フィルタリングや折れ線グラフ・棒グラフの日付軸作成を迅速かつシンプルに行うための日付処理ガイドラインを作成しました。以下のすべての計算とジョイン、およびサンプルデータを含んだワークブックを作成しており、[Templates](https://10az.online.tableau.com/#/site/gitlab/workbooks/2269304/views) フォルダーの `Developers Guide Example Workbook` という名前で見つけられます。

### 日付の統一

ワークブックに複数のデータソースがある場合、まず日付スパインを中心に日付を統一することが最初の手順です。これはカレンダーテーブルの使用を意味します。GitLab では、prod データベースの common スキーマにある dim_date テーブルを利用できます。`dim_date.date_actual = your_table.your_date` で、日付スパインに使用したい日付に合わせて各テーブルを dim_date テーブルに結合してください。dim_date テーブルのドキュメントは[こちら](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_date)をご覧ください。

複数のテーブル・日付を使用していない場合でも、dim_date テーブルはフィルターやコントロールに使用できる便利な日付情報を含んでいるため、利用することを推奨します。例えば、今日の日付と日付の四半期を比較して前四半期のデータをフィルタリングする標準的なフィルタリング手法を使いたい場合、次のようにするかもしれません:
`Current Period: DATETRUNC('quarter',Date Actual) = DATETRUNC('quarter',TODAY())`。

しかし、これは 11/11/23 を 10/1/2023 に切り詰めるなど、非会計四半期にデータを切り詰めてしまいます。これはデータの会計的な並べ替えとフィルタリングを誤らせる原因になります。dim_date テーブルを使用すれば、次の計算を使うことができます:

**Current Period:** `[First Day of Fiscal Quarter] = [Current First Day of Fiscal Quarter]`。これは日付テーブルなしでの代替案（一連の `DATEADD` および `DATETRUNC` 計算を丁寧に積み重ねる必要がある）よりもはるかにシンプルです。

### レポート日付の追加

多くの場合、エンドユーザーはレポート内の「今日」を変更できることを望みます。例えば、前四半期の最終日時点でレポートを表示したい場合があります。`report date` という日付パラメーターを追加することでこの点のユーザー体験を向上できます。ただし、カレンダーテーブルの `date_actual` とレポート日付を比較する必要がある場合に問題が生じます。`date_actual` フィールドに含まれるような組み込みの日付情報がレポート日付にはないからです。パラメーター作成の様子はこちらです: ![パラメーター作成](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-1.png)

この問題を解決するシンプルな方法があります。これは行レベルセキュリティ（このガイドの後半に記載）の仕組みに似ています。`Report Date parameter` に対して `Fiscal_quarter_name` や `First_day_of_fiscal_quarter` などの日付情報を追加するには、次の手順で `dim_date` テーブルを再結合してから通常のデータモデルに 2 回目のイテレーションをフィルタリングします。

#### 新しい Dim_Date テーブルの作成

1. まず、ワークブックの Data Source ペインを開き、左側の connections バーで `dim_date` テーブルに移動します。![dim_date connection ペイン](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image.png)

1. データモデルに `dim_date` を追加します。リレーションシップを使用できますが、主要な日付情報を含むテーブル（`date_actual` など）に必ず結合してください。Tableau は自動的に新しいテーブルを `DIM_DATE1` と命名します。常に true と評価されるリレーションシップ（または物理結合を選択する場合はジョイン）を作成する必要があります。限られた数の日付フィールドを扱っているため、`First_Day_of_Year` と `Last_Day_of_Year` フィールドを使用するオプションがあります。

1. カスタムリレーションシップの計算を作成するには、2 つのテーブルをつなぐ noodle をクリックし、通常フィールドを選択するドロップダウンで、下部の「Create Relationship Calculation」をクリックします。![カスタムリレーションシップの作成](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-2.png)

1. 計算式 `MONTH([First Day Of Year]) <= MONTH([Last Day Of Year (Dim Date1)])` を使用します。経験上、2 行目に 1 = 1 を追加すると若干パフォーマンスが向上する場合があります。ソーステーブルに新しい列を作成しないと、1 = 1 のみのカスタム計算は単独では使用できません。次のような状態になるはずです: ![リレーションシップ計算の挿入](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-3.png)
***この計算では、会計年度の初日・最終日ではなく、年の初日・最終日を使用することに十分注意してください。***

`MONTH([First Day Of Year]) <= MONTH([Last Day Of Year (Dim Date1)])` 計算の目的は、フィルターが適用されていても常に true と評価されることです。これは追加の 1=1 の手法と同様です。これにより、作成しているレポート日付情報がデータセットのすべての行に追加され、Report Date パラメーターの情報にいつでもアクセスできるようになります。SQL のクロス結合と同様に機能します。

1. これで 2 つの `dim_date` テーブルが存在しますが、2 番目のテーブルからは 1 行の情報のみが必要です。次に、`DIM_DATE1` テーブルをデータ（あなたとエンドユーザーが選択した Report Date に対応するデータ）の 1 行だけにフィルタリングするフィルターを作成します。

1. Data Source ペインを閉じてワークブックの空白シートに移動します。後でテーブルをフィルタリングするために使用できる新しい計算 **Report Date Filter** を作成します: `[Date Actual (Dim Date1)] = [Report Date]`。これをワークシートに適用しないでください — 他の場所で使用します。

1. Data Source Pane に戻り、右上の「Filters」見出しの下にある「Add」ボタンを見つけます。![追加ボタン](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-4.png)

1. 「Add」を選択して再度「Add」をクリックすると、選択するフィールドを選ぶポップアップが表示されます。「Report Date Filter」フィールドを検索して選択します。次のウィンドウで「True」を選択して「ok」をクリックします。Data Source Filters リストにこのフィルターが表示されるはずです。「ok」をクリックします。!]](images/image-5.png)

1. ワークブックのシートを開き、フィルターが機能しているか確認します。機能している場合、データセット内のすべての `Date Actual` に対して、`DIM_DATE1` テーブルの `Date_actual1` の値が 1 つだけ表示されるはずです。![1 つの日付のみ表示](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-6.png)

1. ライブ接続を使用している場合は、準備完了です。あなたとエンドユーザーは必要に応じてレポート日付の日付を変更でき、dim_date1 テーブルはその都度更新されます。

1. 抽出データ接続を使用している場合は、もう 1 つ重要な手順があります。これらの変更を公開する前に、レポート日付を変更した場合にあなたとエンドユーザーが必要とする情報がデータ抽出に含まれていることを確認する必要があります。[Tableau の操作順序](https://help.tableau.com/current/pro/desktop/en-us/order_of_operations.htm)を参照すると、データへのフィルターは Extract Filter の後に来る必要があります。そうしないと、抽出時に選択されたもの以外の日付のデータが抽出に含まれなくなります。これは、フィルターを Data Source フィルターのみにする必要があることを意味します。デフォルトでは、Tableau が Data Source フィルターを Extract Filters リストに追加する場合があります。

1. Data Source Pane で、Live と Extracted 接続の切り替え領域にある「Edit」を選択します。フィルターリストの下に `Report Date Filter` が選択されており、true のみを保持していることがわかります。それをクリックして「Remove」を選択します。その後「ok」をクリックします。![追加フィルターの削除](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-7.png)

1. 抽出にはすべてのデータが含まれますが、「Filters」の下に数字の 1 があることに注目してください。これは extract フィルターを削除し、データソースフィルターを保持したことを意味します。![正しいフィルターの保持](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-8.png)

データのフィルタリングと並べ替えに `dim_date` テーブルを完全に活用できるようになりました！`Dim_Date1` テーブルのフィールドの名前を変更して、これらのフィールドが Report Date に固有であることを明確にすることもできます。また、「Current Date」に関連する `Dim_date1` テーブルの不要な列はオプションで非表示にすることもできます。

### 軸の日付

Tableau では、任意の日付フィールドの会計年度開始日をカスタマイズできます。![会計年度開始日のカスタマイズ](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-9.png)

ただし、これは万全な解決策ではありません。棒グラフや折れ線グラフの軸に文字列の日付を使用する方が、ネイティブの日付フィールドよりもはるかに効果的な場合が多数あります。例えば、シンプルな離散棒グラフを作成したいが、エンドユーザーが月次・四半期・年次データを切り替えられるようにしたい場合、同じシートでそれを行う簡単な方法はありません。通常は、ダッシュボードに「シートスワッパー」を作成し、希望する日付粒度に基づいて特定のシートを選択的に表示・非表示にする必要があります。

代わりに、日付粒度に応じて自動的に更新される 1 つの日付軸を作成できます。すでにデータモデルに `dim_date` を結合していることを前提に、次の手順を実行します。

1. Select Time Period パラメーターを作成します。![期間パラメーター](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-10.png)
2. **Axis Dates** という計算フィールドで次のコードを使用します:

<details markdown=1>

<summary><b>Axis Dates</b></summary>

```text
IF [Select Time Period] = 'year' THEN
    "FY " + STR([Fiscal Year])

ELSEIF [Select Time Period] = 'quarter'
    THEN [Fiscal Quarter Name Fy]

ELSEIF [Select Time Period] = 'week'
    THEN STR([Fiscal Year]) + "- " + STR([Week Of Fiscal Quarter Normalised])

ELSE //STR([Fiscal Year]) + "- "+
STR([Fiscal Month Name])
END
```

</details>

1. 棒グラフや折れ線グラフで使用できるシンプルな日付軸ができました。

1. ただし、発生する可能性のある問題として、日付がアルファベット順に並べ替えられることがあります。`dim_date` テーブルを使用している場合は、これに対するシンプルな解決策もあります。dim_date テーブルには `date_id` というフィールドがあり、毎日に一意の ID を昇順に付与しています。つまり、明日の date_id は常に今日より 1 大きくなります。

1. `Axis Dates` フィールドを Rows または Columns に配置し、フィールドを右クリックして「Sort...」を選択してソートオプションにアクセスします。次にデフォルトを「By Field」に変更し、「Date id」を選択して「Average」などの集計を使用します。
![軸の日付の並べ替え](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-11.png)

これで、同じワークシートで日付の粒度を動的に切り替えながら、ビューの見た目と機能を最大限にコントロールできる日付軸ができました。

### 日付フィルタリング

`Dim_Date` テーブルの追加と動的日付軸の検討により、動的な日付フィルタリングを使用する機会が生まれます。日付フィルターは、dim_date テーブルと Select Time Period パラメーターを活用することで作成できます。

この日付フィルターを作成するには、エンドユーザー入力のためのパラメーターをもう 1 つ作成するか、フィルターを固定したい日付範囲を決定する必要があります。ダッシュボードに配置できる `Date Interval` パラメーターを作成すれば、エンドユーザーは棒グラフや折れ線グラフなどの時系列グラフで一度に表示したい期間数をコントロールできます。![日付インターバルパラメーター](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-12.png)

それが完了すると、次の動的な日付フィルターがデータのフィルタリングに機能します:

<details markdown=1>

<summary><b>Date Filter - Dynamic</b></summary>

```text
IF [Select Time Period] = 'month' THEN
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', -[Date Interval], DATETRUNC('month',[Report Date]))

ELSEIF  [Select Time Period] = 'quarter' THEN
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) // earlier than report date
        AND
    DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', (-[Date Interval]*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)]))

ELSE
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])
        AND
    [First Day Of Fiscal Year] > DATEADD('month', -[Date Interval]*12, [First Day Of Fiscal Year (Dim Date1)])
END
```

</details>

#### 当期・前期の計算

日付フィルターに加えて、`Current Period` と `Previous Period` という T/F フィールドを作成すると、これらをメジャーやディメンションと組み合わせて `Current Period Sales` などのフィールドを作成できます。これはツールチップ、ビッグナンバー、固定した期間比較フィールドの作成、分析ラインに使用できます。

これらの計算を作成する方法は 2 つあります。最初のオプションは、会計期間（月・四半期・年）の現在の日でデータを切り捨てて、期間を均等に比較することです。例えば、今四半期の最初の 13 日と前四半期の最初の 13 日だけを比較します。これらの計算は次のようになります:

<details markdown=1>

<summary><b>Fiscal Date Filters</b></summary>

**Is Fiscal Period to Date Dynamic**

```text
IF [Select Time Period] = 'year' THEN
 [Day Of Fiscal Year] <= [Day Of Fiscal Year (Dim Date1)] // Cuts data off at the day of the report date


ELSEIF [Select Time Period] = 'quarter' THEN
    [Day Of Fiscal Quarter] <= [Day Of Fiscal Quarter (Dim Date1)] // Cuts data off at the day of the report date

ELSE
[Day Of Month] <= [Day Of Month (Dim Date1)] // Cuts data off at the day of the report date

END
```

**Current Period**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = [First Day Of Fiscal Year (Dim Date1)] // in the same year
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = [First Day Of Fiscal Quarter (Dim Date1)] // in the same quarter
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

ELSE
DATETRUNC('month',[Date Actual]) = DATETRUNC('month',[Report Date]) // in the same month
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

END
```

**Previous Period**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = DATEADD('year',-1,[First Day Of Fiscal Year (Dim Date1)])
            AND [Is Fiscal Period To Date Dynamic]


ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = DATEADD('month',-3,[First Day Of Fiscal Quarter (Dim Date1)])
            AND [Is Fiscal Period To Date Dynamic]

ELSE
DATETRUNC('month',[Date Actual]) = DATEADD('month',-1,DATETRUNC('month',[Report Date]))
AND [Is Fiscal Period To Date Dynamic]// Cuts data off at the day of the report date

END
```

もう 1 つのオプションは、当期・前期の合計を取得することです。これらの計算は次のようになります:

**Current Period (Total)**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = [First Day Of Fiscal Year (Dim Date1)] // in the same year

ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = [First Day Of Fiscal Quarter (Dim Date1)] // in the same quarter

ELSE
DATETRUNC('month',[Date Actual]) = DATETRUNC('month',[Report Date]) // in the same month

END
```

**Previous Period (Total)**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = DATEADD('year',-1,[First Day Of Fiscal Year (Dim Date1)])



ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = DATEADD('month',-3,[First Day Of Fiscal Quarter (Dim Date1)])


ELSE
DATETRUNC('month',[Date Actual]) = DATEADD('month',-1,DATETRUNC('month',[Report Date]))


END
```

</details>

これらを同じシートで使用するユースケースとしては、今四半期の `Report Date` までの `Actual Sales` 情報を得たいが、四半期の `Total Sales Target` と比較したい場合があります。この場合、すべてのデータを `report date` で止めるようにフィルタリングすると、ターゲットが不完全になってしまいます。

### 追加のコツ

これらのコツは、この日付処理方法に必須ではありませんが、ワークブックの UI を改善したり、フィルターの作成時間を節約したりするのに役立つかもしれません。

#### 非加算的または半加算的なデータ

このコツは直感的ではありませんが、慎重にテストされています。より簡単な方法がある場合は更新で貢献してください。非加算的なデータのフィルタリングは困難な場合があります。特に GitLab では「最終」月のデータのみを見たいことが多いですが、四半期や年の非最終月（例えば 3 月）にいる場合は、その期間のライブデータを見たいと思うからです。これをさらに複雑にするのは、レポート日付を 2 月に変更した場合、3 月のデータはもう表示したくないということです。そのような場合、Tableau が 2 月と 3 月の数値を合算してしまい、非加算的なデータでは誤りになります。

次の計算でそれらの問題を回避できます。

<details markdown=1>

<summary><b>m/q/y filters for KPI's</b></summary>

**m/q/y filters for KPI's**

```text
IF [Select Time Period] = 'quarter' THEN
( [Month Of Fiscal Year] % 3 = 0// last month of quarter
        AND [First Day Of Fiscal Quarter] < [First Day Of Fiscal Quarter (Dim Date1)] // Earlier than this quarter
) // For all previous quarters, it is the last month of the quarter.

    OR ([Fiscal Year] = [Fiscal Year (Dim Date1)] AND [Month Of Fiscal Year] = [Month Of Fiscal Year (Dim Date1)] )
// For this quarter, it is the same month as the report date

ELSEIF
 [Select Time Period] = 'year' THEN
   [Month Of Fiscal Year] = 12 OR (YEAR([Date Actual]) = YEAR([Report Date]) AND [Month Of Fiscal Year] = [Month Of Fiscal Year (Dim Date1)])

ELSEIF [Select Time Period] = 'month' THEN TRUE

END
```

</details>

次に、ARR などの非加算的な KPI のフィールドを作成します。次のコードを使用します:

<details markdown=1>

<summary><b>KPI - m/q/y</b></summary>

```text
IF [m/q/y Filters for KPI's]
     THEN [ARR] END
```

</details>

これはすべての非加算的な KPI に使用でき、作成とメンテナンスをシンプルにします。

#### 全日付範囲での前年比テーブル計算の有効化

期間比較計算を含むテーブルやグラフを作成したい場合、Tableau はそれらのテーブル計算を実行するためにビュー上（ワークシート上）にあるデータのみを使用できます。テーブル計算の詳細については[こちら](https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations.htm)をご確認ください。***つまり、テーブルの先頭の値はテーブル計算を作成するためのデータが利用できません。***

例えば、`Sales` の棒グラフを作成したいが、ツールチップに `Period over Period` 情報を埋め込みたい場合、フィルターに 1 年分のデータのみを含めると、前年のデータを「見る」ことができないため、Tableau は***いかなる***前年比計算も実行できません。これをハードコーディングで回避する方法もありますが、Tableau を「だます」ことで任意の日付粒度で期間比較計算を許可するシンプルな解決策があります。

解決策は、ワークブックで探している日付範囲を実質的に 2 倍にする日付フィルターを作成し、別のテーブル計算を使って先頭の値をフィルタリングすることです。2 番目のテーブル計算でビューに正しい数の期間を表示することで、Tableau が前年比計算を作成するために必要な基礎データを保持しながら、意図したとおりにビューを表示できます。

1. まず、日付範囲を 2 倍にする動的な日付フィルターを作成します。これを「True」として適用します。前のフィルターを変更する 2 つのオプションがあります。レポート日付の日にデータを切り捨てるか、レポート日付と同じ期間にデータを切り捨てるかです。例えば、データをレポート日付の日で切り捨てると 2023 年 11 月 13 日で止まる場合があります。しかし、データをレポート日付と同じ期間で切り捨てると、レポート日付が 11 月 13 日で日付粒度が四半期に設定されている場合、データセット内の 11 月 1 日〜1 月 31 日のデータがビューに表示されます（会計年度開始日が 2 月の場合）。

<details markdown=1>

<summary><b>Date Filters</b></summary>

**Dynamic Date Filter for PoP (to report date)**

```text
IF [Select Time Period] = 'month' THEN (
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) //sooner than the day of report date and
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', (-[Date Interval]*2), DATETRUNC('month',[Report Date])) //after the month of the date interval * 2 back in time

    )

ELSEIF [Select Time Period] = 'quarter' THEN
   ( DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) AND  // earlier than the report date
         DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', ((-[Date Interval]-4)*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)])) // sooner than the number of quarters back (months *3 because of fiscal quarters)

    )

ELSEIF [Select Time Period] = 'year' THEN
   ( DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) AND  // earlier than the report date
         [First Day Of Fiscal Year] > DATEADD('month',-[Date Interval]*12,[First Day Of Fiscal Year (Dim Date1)]) // the same year or sooner than the report date * -interval (12mos)

    )

END

```

**Dynamic Date Filter for PoP (total periods)**

```text
IF [Select Time Period] = 'month' THEN (
    DATETRUNC('month',[Date Actual]) <= DATETRUNC('month',[Report Date]) //sooner than or = to the month of the report date
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', (-[Date Interval]*2), DATETRUNC('month',[Report Date])) //after the month of the date interval * 2 back in time

    )

ELSEIF [Select Time Period] = 'quarter' THEN
   ( [First Day Of Fiscal Quarter] <= [First Day Of Fiscal Quarter (Dim Date1)] AND  // sooner than or = to the quarter of the report dateearlier than the report date
         DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', ((-[Date Interval]-4)*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)])) // sooner than the number of quarters back (months *3 because of fiscal quarters)

    )

ELSEIF [Select Time Period] = 'year' THEN
   ([First Day Of Fiscal Year] <= [First Day Of Fiscal Year (Dim Date1)] AND // sooner than or = to the year of the report date
         [First Day Of Fiscal Year] > DATEADD('month',-[Date Interval]*12,[First Day Of Fiscal Year (Dim Date1)]) // the same year or sooner than the report date * -interval (12mos)

    )

END
```

</details>

1. 次に、もともと選択した日付範囲のみを表示するようにビューを調整するフィルターを作成します。

<details markdown=1>

<summary><b>View Filter</b></summary>

**Don't Show Leading Values Filter**

```text
IF [Select Time Period] = 'quarter' THEN
FIRST() <= -4
ELSEIF [Select Time Period] = 'month' THEN FIRST() <= -12
ELSE FIRST() <= -1
END
```

</details>

1. これで各日付粒度のテーブル計算を作成できます。選択した日付粒度に基づいて動的に変更できるようにするには、`Sales` を KPI の例として次の計算を使用します。
   1. まず、1 期間・4 期間・12 期間オフセットするテーブル計算を作成します:

<details markdown=1>

<summary><b>Time Period Table Calculations</b></summary>

**Sales -1**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -1)) / ABS(LOOKUP(ZN(SUM([Sales])), -1))
```

**Sales -4**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -4)) / ABS(LOOKUP(ZN(SUM([Sales])), -4))
```

**Sales -12**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -12)) / ABS(LOOKUP(ZN(SUM([Sales])), -12))
```

   1. 次に Period over Period の計算を作成します:

**Sales MoM**

```text
IF [Select Time Period] = 'month' THEN [Sales -1] END
```

**Sales QoQ**

```text
IF [Select Time Period] = 'month' THEN [Sales -4]
ELSEIF [Select Time Period] = 'quarter' THEN [Sales -1]
END
```

**Sales YoY**

```text
IF [Select Time Period] = 'month' THEN [Sales -12]
ELSEIF [Select Time Period] = 'quarter' THEN [Sales -4]
ELSEIF [Select Time Period] = 'year' THEN [Sales -1]
END
```

</details>

1. ボーナスとして、これらをツールチップに含めて日付粒度が四半期または年の場合に消える「month over month」ラベルを含めたい場合、次のラベルを作成できます。

<details markdown=1>

<summary><b>Labels</b></summary>

**MoM Label**

```text
IF [Select Time Period] = 'month'  THEN ", and the month over month change was: " // "MoM change: "
END
```

**QoQ Label**

```text
IF [Select Time Period] = 'month' OR [Select Time Period] = 'quarter' THEN ", the quarter over quarter change was: " // "QoQ Change: "
END
```

1. それらをまとめると、ツールチップには以下のコードが含まれます（中央揃えでフォーマット済み）:

``` text
In <Axis Dates> the Sales were <SUM(Sales)>.
The Year over Year change was <AGG(Sales YoY)><ATTR(QoQ Label)><AGG(Sales QoQ)><ATTR(MoM label)><AGG(Sales MoM)>.
```

</details>

このツールチップの出力はこのようになります: ![ツールチップ](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-13.png)![ツールチップ](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-14.png)

## デザインのヒント

ワークブック作成の効率を向上させるのに役立つ追加のデザインヒントです。

### ダッシュボード開発でコンテナーを使用する

Tableau でダッシュボードを構築するとき、シートをダッシュボードに追加するには 2 つのオプションがあります。「浮動」シートまたは「タイル」コンテナーです。浮動シートはダッシュボードのどこにでも配置でき、サイドからサイズを調整できます。タイルコンテナーは背景に「スナップ」する必要があり、含まれているより大きなコンテナーのサイズに合わせる必要があります。

Tableau 初心者はすべてに浮動コンテナーを使用しがちですが、Tableau に非常に熟練した人と話すと、*常に*コンテナーを使用することを勧めるでしょう。

コンテナーには多くのメリットがあり、コンテナーを使用したダッシュボード開発に慣れておくことが得策で、浮動ワークシートは使うべきではありません。カラーレジェンドやドロップダウンアイテムをグラフやタイトルの上に配置したい場合、アイテムがダッシュボード上に「浮動」するメリットがある唯一の状況です。

コンテナーの詳細については[こちら](https://www.youtube.com/watch?v=96371LvULXM&t=80s)の参考になる短いビデオをご覧ください。

コンテナーを使用する理由をいくつか挙げます:

1. すべてのワークシートに「浮動」スタイルを使用すると、Cloud/Server にワークブックを公開するとき、エンドユーザーのモニター/ディスプレイのサイズによっては、一部のアイテムが任意の方向に数インチ移動する場合があります。

1. パラメーターを使用して関連するいくつかのシートを「オフ」と「オン」（一度に 1 つのワークシートのみが表示される）にできる方法を学べると、コンテナーは不可欠です。

    例えば、「Sales」「Revenue」「Profit」に関する情報を含むテーブルを表示したい場合、その 3 つのオプションを選択肢とするパラメーターを作成します。3 つの KPI それぞれに 1 つずつワークシートを作成し、パラメーターの選択に基づいて 1 つだけが「オン」（表示）になるようにフィルターを各ワークシートに配置できます。

    次に 3 つのワークシートをすべて同じコンテナー（水平コンテナーまたは垂直コンテナー）に入れ、各ワークシートの「タイトル」を非表示にします。これにより、3 つのワークシートすべてが常にダッシュボードのまったく同じ場所に表示され、浮動コンテナーとして完璧に整列させようとする手間が省けます。それぞれが「オン」になると、それを含む親コンテナー全体を埋めるようにスライドして「開き」ます。コンテナーは常に同じ場所にあるため、その中のワークシートも常に同じ場所にあります。

1. 多くの人がコンテナーを使って情報をグループ化します。例えば、棒グラフとレジェンド、および関連するテーブルを 1 つの親コンテナーにタイルしているとします。このアイテムのグループをダッシュボードの左側から右側に移動したいとしましょう。コンテナーを使用していれば、親コンテナーを選択して 3 つのアイテムをまとめてスライドできます。

### GitLab カラーを追加する

Tableau Desktop にカラーパレットを追加することで、ビジュアライゼーションの色を選択する際に GitLab のカラーにアクセスできるようになります。詳細な手順は[こちら](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/#standard-color-palette)をご覧ください。

### デュアル軸グラフを使用する

2 つの軸を持つグラフを作成することで、Tableau が持つ柔軟性とカスタマイズ性を引き出せます。主な用途は、2 つ以上の軸を画面上に表示する柔軟性の向上と、画面上のラベルをより細かくコントロールするためのハックです。デュアル軸グラフの作成と使用に関する詳細は[こちら](https://help.tableau.com/current/pro/desktop/en-us/multiple_measures.htm)をご覧ください。

*2 つの軸*
棒グラフと折れ線グラフを画面上に一緒に表示したいですか？Tableau はそれが得意です。デュアル軸グラフを使用して一方をもう一方に重ねることができます。「軸を同期する」かどうかを考慮することを忘れないでください！つまり、両方の軸を同じ場所から開始・終了させるかどうかです。
![2 つの軸で 2 つの棒を作成](/images/handbook/enterprise-data/platform/tableau/dual_axis_two_axes.png)

多くの人はすでに 2 つのメジャーにデュアル軸グラフを発見していますが、ラベルの作成にも役立つことをご存知ですか？

例えば、画面上に積み上げ棒グラフ（メジャーが 1 つ）があり、ラベルを追加したい場合、Tableau は棒の各セグメントにラベルを付けます。でも棒全体にラベルを付けたい場合はどうでしょう！デュアル軸グラフを使用して、2 つの棒のうち後ろの棒からカラーを削除することで、望んだラベルが得られます！
![1 つの棒にカラー、もう 1 つの棒にラベルのデュアル軸](/images/handbook/enterprise-data/platform/tableau/dual_axis_label.png)

### アップグレードされたユーザー体験のためのダッシュボードアクション

[ダッシュボードアクション](https://help.tableau.com/current/pro/desktop/en-us/actions_dashboards.htm)は機能を追加し、ユーザー体験をスムーズにし、ダッシュボードを「より高度」に見せます。さまざまなオプションは次のとおりです。

![アクション](/images/handbook/enterprise-data/platform/tableau/actions.png)

ダッシュボードが何かきれいで予想外のことをしているのを見かけたら、それはおそらくダッシュボードアクションのクリエイティブな使い方です。

知っておくべきことがいくつかあります:

- ダッシュボードアイテムを URL にリンクできます。よく使われる方法として、ダッシュボードテーブルの Opportunities を実際の Salesforce URL に直接リンクすることがあります。

- Filter アクションは私の経験では最もよく使われるアクションです。ダッシュボードの一部がユーザーのクリックに動的に反応してデータのサブセットにフィルタリングできることは、非常に一般的で便利です。フィルターアクションについての参考になる [YouTube ビデオはこちら](https://www.youtube.com/watch?v=c1CYxo9xkQc&t=299s)をご覧ください。

- 「Go to Sheet」はワークブック内のダッシュボードタブ間のナビゲーションのより直感的なユーザー体験を作成する便利な方法です。例えば、ユーザーが「エグゼクティブサマリー」にいる場合、「Users per Product」の棒グラフをクリックすると Users と Products の詳細ダッシュボードに移動する「Go to Sheet」アクションを設定できます。Go to Sheet アクションについての[参考になるビデオはこちら](https://www.youtube.com/watch?v=u9OUyZy_d8M)。

- 「highlight」アクションはあまり使われませんが、強力です。ユーザーが棒グラフの「Product = Ultimate」バーにホバー/クリックすると、ダッシュボード上の「Product = Ultimate」がある他のすべての場所がハイライトされるように設定できます。これはダッシュボードにテーブルがある場合に特に便利です。ハイライトアクションの [YouTube ビデオはこちら](https://youtu.be/oMnuXhvb5ag?si=BSlwOFBavCirA_eK&t=189)。

- 「Change Parameter」アクションは、Tableau Public でユーザーがボタンや画像をクリックして結果のダッシュボードを変更できるようにするためによく使用されます。これはパラメータードロップダウンからユーザーが選択するよりも見栄えがよくなります。また通常のビジネスダッシュボードには手間に見合わないことが多いです。パラメーターを使ってダッシュボードを直感的にフィルタリングする[上級ビデオはこちら](https://www.youtube.com/watch?v=Psz7hoK7lu0)、このアクションを使ってクリック可能なボタンを作成する[ブログ記事はこちら](https://www.thedataschool.co.uk/chris-meardon/button-based-parameter-actions/)。

    パラメーターアクションを使ってボタンを作成した例は、[このダッシュボード](https://public.tableau.com/app/profile/p.padham/viz/SuperstoreDashboard_16709573699130/SuperstoreDashboard)で「Sales」「Profit」「Orders」をクリックするとダッシュボードがその KPI に変更されます。これにより標準的なパラメータードロップダウンの使用を避けられます。

## 拡張機能

Tableau には、Tableau での開発プロセスを強化し容易にするための拡張機能があります。例えば、以前は膨大な量の複雑なロジックが必要だった Sankey Chart を数クリックで作成できるようになりました。

### Tableau テーブル

シンプルなテーブルを構築するための非常に役立つ拡張機能が 2024 年秋にリリースされた Tableau テーブル拡張機能です。これにより標準のテーブルオプションよりもテーブルの作成、メンテナンス、並べ替えが容易になります。テキストテーブルに棒グラフや条件付きフォーマットを簡単に追加することもサポートしています。

![tableau テーブル](/images/handbook/enterprise-data/platform/tableau/table-screenshot.png)

この拡張機能には、より高度でカスタマイズされたテーブルには制限があります。例えば、テーブルの条件付きフォーマットは現在機能が限られており、より複雑な「ハック」で現在達成できるカスタマイズニーズを満たせない場合があります。ただし、テキスト、棒グラフ、ヒートマップスタイルのセルを列に含む比較的シンプルなテーブルには、この拡張機能がそれらのニーズをサポートします。

拡張機能を使った Tableau テーブルの設定・使用方法を示したビデオがあります。棒グラフの追加、ヒートマップスタイルのセル、条件付きフォーマット、列名の変更、列の並べ替え、フィルターの追加、「クロス集計のダウンロード」ボタンの表示などを説明しています。

## 開発者向けヒントとコツ

Tableau の開発体験を高速化・簡略化するためのヒントとコツのコレクションです。これらは `#`data-tableau Slack チャンネルの `#`TableauTipTuesday でも頻繁に取り上げられます。

1. ワークシートの任意のピル（列、行、マークカード上のアイテム - 「ピル」は青または緑で、使用しているフィールドです）を複製できます。command（cmd）を押しながら青または緑のピルをクリックしてドラッグするだけで、移動する代わりに複製されます。

2. フィールドを初めてビューにドラッグする際、option キー（Mac）を押しながらドラッグ＆ドロップすることで集計/メジャータイプを選択できます。日付フィールドの場合、日付の粒度（年、月、日、月/日/年など）を確認するウィンドウがポップアップします。デフォルトオプションは「Year」で、粒度を変更する前にビューが読み込まれるのを待つ必要があるため、これで時間を節約できます。

    これは非メジャーフィールドでも機能します。例えば、option を押しながら Opportunity Id をビューにドラッグすると、COUNT(Opportunity Id) としてドロップするオプションが表示されます。

3. 計算フィールドにメジャーを簡単にドラッグできます。これで時間を節約できます。新しい計算フィールドを作成する際、使用したいフィールドがすでにワークシートにある場合は、ワークシートからフィールドを計算フィールドにドラッグできます。逆に、計算フィールドのメジャーやディメンションをハイライトしてドラッグするとワークシートにドラッグされます。

4. テーブル計算 - 既存のメジャーにテーブル計算を追加する通常の方法でテーブル計算を作成できます。次に、新しい計算フィールドのボックスを開き、テーブル計算がかかったそのメジャーをボックスにドラッグします。これで再利用可能な計算フィールドにテーブル計算の数式ができました！ここから計算フィールドを調整することもできます。例えば、Period over Period の計算を 1 期間ではなく 4 期間遡るようにするなど。

5. 計算フィールドの選択された部分をテスト用にワークシートにドラッグして、各部分が期待通りに機能しているか確認できます！計算フィールドで、テストしたい部分をハイライトし、Command（Cmd）を押しながら、テキストをワークシートの任意の部分にドラッグするだけです。[こちら](https://www.flerlagetwins.com/2022/09/tiny-tableau-tips-round-2.html)の tip #9 で例を確認できます。

6. ディメンションをエイリアスして、データペインでのフィールド名は変わらないが、エンドユーザーがワークシート/ダッシュボードを見るときにエイリアスが表示されるようにできます。エイリアスしたい名前を表示しているヘッダーを右クリックして「Edit Alias」を選択します。このエイリアスはすべてのワークシートのビューで維持されます。

7. メジャーのエイリアスはディメンションよりも少しトリッキーです。ヘッダーを右クリックして名前を変更する方法はありません。代わりに、[この記事](https://www.flerlagetwins.com/2024/03/random-tableau-tips.html)の Tip 1 で概説されているプロセスを実行できます。

    1. フィールドの「ピル」をダブルクリックします。Row シェルフ、Columns シェルフ、またはマークカード上のフィールド名です。これにより、緑色の「ピル」から、フィールド名がブラケットで囲まれたテキスト編集バージョン「[Field Name]」に変わります。
    2. フィールド名の前に入力を開始するためにカーソルをフィールドの先頭に置きます。
    3. //（計算フィールドのコメントのように）と入力します。
    4. // の後にスペースを入れ、希望するエイリアスを入力します。
    5. *Shift* を押しながら Enter を押します。[Field Name] だけが再び表示されます。
    6. *Shift* を離して、もう一度 Enter を押します。
    7. 列がエイリアスされているはずです！このエイリアスはワークブックのすべてのワークシートで維持されることに注意してください。
    <details>
    <summary>コード例</summary>

    ```text
    // Aliased Name
    [Field Name]
    ```

    </details>
