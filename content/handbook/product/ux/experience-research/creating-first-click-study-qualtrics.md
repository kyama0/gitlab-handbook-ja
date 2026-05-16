---
title: "Qualtrics でのファーストクリックスタディの作成"
description: "このページでは、Qualtrics でファーストクリックテストを設定する方法を詳述します。"
upstream_path: /handbook/product/ux/experience-research/creating-first-click-study-qualtrics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

これらの手順により、Qualtrics を使ってファーストクリックスタディを作成し、参加者が意図したタスクを完了するためにインターフェース内で最初にどこをクリックするかを調べることができます。

[テキスト/グラフィック質問](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/)、[ヒートマップ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/)、[タイミング](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/timing/) の質問タイプを組み合わせて、タスクシナリオを作成し、回答者が画像で最初にクリックした箇所を記録します。

以下が設定方法です:

**ステップ 1:** Qualtrics にログインしたら、「Welcome to XM」というサイドパネルの左下に表示される「Create a new project」をクリックします。

**ステップ 2:** 空白のサーベイプロジェクトを作成することを選びます

**ステップ 3:** テキスト/グラフィック質問タイプを使ってタスクシナリオを追加します
[UX Research & Product Question Library](https://www.qualtrics.com/support/survey-platform/account-library/survey-library/#UsingABlockOrQuestionFromTheLibrary) の Questions フォルダから「Heat Map Question Block」をインポートすることで、以下のステップ 3〜6 はスキップできます

- テキスト/グラフィック質問タイプを使って、タスクシナリオを説明する場所を作成します:
  - 新しいサーベイブロックを作成
  - 新しい質問ブロックの右下に表示される「+Add new question」ボタンを選択
  - その質問をクリックすると、左パネルに質問タイプのオプションが表示されます
  - 質問タイプのドロップダウンから ['Text / Graphic'](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/) を選択
  - テキスト「Click to write the question text」の代わりにタスクシナリオを挿入

**ステップ 4:** [ヒートマップ質問タイプ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/) を使って、参加者にファーストクリックを行ってもらいたいグラフィックを追加します

- ヒートマップ質問を設定するには、次の手順に従います:
   1. 各質問ブロックの右下に表示される「+Add new question」ボタンを選択
   1. 「+Add new question」のドロップダウンから「Heat Map」を選択
   1. 「Select a graphic to use for this question」をクリック
   1. 既に Qualtrics アカウントにアップロードしているグラフィックを選択（またはコンピューターから新しくアップロード）
   1. 左サイドパネルで、各回答者が画像でクリックできる回数を設定（デフォルトは「1」）
      - 注意: 回答者が許可された回数より多くクリックした場合、最も古いクリックが最新のものに置き換えられます。
        - ユーザーの最初の直感（1 クリックのみ）に基づいてデータを分析する予定なら、1 クリックのみを許可すべきです。
        - 複数の正しい位置を評価したい場合、またはユーザーのファーストクリックとラストクリックを見たい場合は、複数のクリックを許可すべきです。
   1. 「Add Region」をクリック
      - 領域を追加することで、正しい位置をクリックしたユーザーの割合をより効率的に計算できます。
      - 正しい位置の領域を追加しないと、Qualtrics のデータレポートではすべてのクリックが「Other」としてグループ化されます。
      - ヒートマップ質問では領域は必須ではありませんが、レポート作成を容易にします。
   1. 領域をクリックしてドラッグして移動するか、角をクリックしてドラッグしてサイズを変更します。
   1. 領域の下のテキストボックスをクリックして領域名を入力します（この名前は回答者には表示されませんが、サーベイ結果で使われるので、わかりやすい名前を使ってください）。
   1. 参加者が選ぶ可能性のあるコンテンツの各エリア（例: ナビゲーションパネルのボタンまたはサブ見出し）に領域を作成します

**ステップ 5:** タイミング質問を追加して、参加者がファーストクリック質問のあるページでどれだけの時間を費やしているかを追跡します

- 各質問ブロックの右下に表示される「+Add new question」ボタンを選択
- 「+Add new question」のドロップダウンから「Timing」を選択
- タイミング質問は参加者には表示されませんが、サーベイをプレビューすると表示されます。これは質問が機能していることを確認できるようにするためです。
- 質問の下にホバーして「+Add page break」オプションが表示されたらクリックし、タイミング質問の後に [改ページ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/add-page-break/) を挿入します

**ステップ 6:** ユーザーがなぜそこをクリックしたか、またはファーストクリックについてどう感じたかを理解するのに役立つ質問を追加します
ユーザーがなぜそこをクリックしたかを知ることで、デザインの調整方法を理解できます。

- テキストエントリー質問を追加して、ユーザーに特定のエリアをクリックした動機を説明してもらいます。例: なぜそこをクリックしましたか? （自由テキスト）
- [複数選択](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/multiple-choice/) 質問を使って自信レベルを評価してもらうこともできます。
  - 例: 正しい位置をクリックしたという自信はどの程度ですか?
    - 完全に自信がある
    - ある程度自信がある
    - どちらでもない
    - やや自信がない
    - 全く自信がない
