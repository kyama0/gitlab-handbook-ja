---
title: "Qualtrics でファーストクリック調査を作成する"
description: "このページでは、Qualtrics でファーストクリックテストを設定する方法を説明します。"
upstream_path: /handbook/upstream-studios/experience-research/creating-first-click-study-qualtrics/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:07:05+09:00"
translator: codex
stale: false
---

これらの手順により、Qualtrics を使用して、参加者が意図したタスクを完了するためにインターフェース上のどこを最初にクリックするかを調べるファーストクリック調査を作成できます。

[Text/ Graphic Question](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/)、[Heatmap](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/)、[Timing](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/timing/)の質問タイプを組み合わせて、タスクシナリオを作成し、画像上での回答者の最初のクリックを記録します。

設定方法は次のとおりです。

**ステップ 1:** Qualtrics にログイン後、「Welcome to XM」というサイドパネルの左下に表示される「Create a new project」をクリックします。

**ステップ 2:** 空白のアンケートプロジェクトを作成することを選択します。

**ステップ 3:** Text / Graphic の質問タイプを使用してタスクシナリオを追加します。
[UX Research & Product Question Library](https://www.qualtrics.com/support/survey-platform/account-library/survey-library/#UsingABlockOrQuestionFromTheLibrary)の Questions フォルダーから「Heat Map Question Block」をインポートすると、以下のステップ 3 から 6 を省略できます。

- Text/ Graphic の質問タイプを使用して、タスクシナリオを説明する場所を作成します。
  - 新しいアンケートブロックを作成します。
  - 新しい質問ブロックの右下に表示される +Add new question ボタンを選択します。
  - その質問をクリックすると、左側のパネルに Question Type のオプションが表示されます。
  - Question Type のドロップダウンから、['Text / Graphic'](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/)を選択します。
  - 「Click to write the question text」というテキストの代わりにタスクシナリオを挿入します。

**ステップ 4:** 参加者に最初のクリックを実行してもらいたい画像を、[Heat Map の質問タイプ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/)を使用して追加します。

- 次の手順で Heatmap の質問を設定します。
   1. 各質問ブロックの右下に表示される +Add new question ボタンを選択します。
   1. +Add new question のドロップダウンから「Heat Map」を選択します。
   1. 「Select a graphic to use for this question」をクリックします。
   1. Qualtrics アカウントにすでにアップロードした画像を選択します（またはコンピューターから新しい画像をアップロードします）。
   1. 左側のパネルで、各回答者が画像上で行えるクリック数を設定します（デフォルトは「1」です）。
      - 注: 回答者が許可された回数を超えてクリックすると、最も古いクリックが最新のクリックに置き換えられます。
        - ユーザーの最初の直感に基づいてデータを分析する場合（クリックは 1 回のみ）は、クリックを 1 回に制限してください。
        - 複数の正しい位置を評価する場合、またはユーザーの最初と最後のクリックを確認したい場合は、1 回より多くのクリックを許可してください。
   1. 「Add Region」をクリックします。
      - リージョンを追加すると、正しい位置をクリックしたユーザーの割合をより効率的に計算できます。
      - 正しい位置にリージョンを追加しない場合、Qualtrics のデータレポートではすべてのクリックが「Other」としてグループ化されます。
      - Heat Map の質問でリージョンは必須ではありませんが、レポートを容易にできます。
   1. リージョンをクリックしてドラッグすると移動でき、角をクリックしてドラッグするとサイズを変更できます。
   1. リージョン下のテキストボックスをクリックしてリージョン名を入力します（この名前は回答者に表示されず、アンケート結果で使用されるため、説明的な名前にしてください）。
   1. 参加者が選択する可能性があるコンテンツの各領域（例: ボタンまたは Navigation パネルの小見出し）にリージョンを作成します。

**ステップ 5:** Timing の質問を追加し、参加者がファーストクリック質問のあるページに費やす時間を追跡します。

- 各質問ブロックの右下に表示される +Add new question ボタンを選択します。
- +Add new question のドロップダウンから「Timing」を選択します。
- タイミングの質問は参加者には表示されませんが、アンケートをプレビューすると表示されます。これは質問が機能していることを確認できるようにするためです。
- 質問の下にカーソルを合わせ、オプションが表示されたら「+Add page break」をクリックして、タイミングの質問の後に[改ページ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/add-page-break/)を挿入します。

**ステップ 6:** ユーザーがその場所をクリックした理由や、最初のクリックについてどう感じたかを理解するための質問を追加します。
ユーザーがその場所をクリックした理由を知ることで、デザインをどのように調整すればよいか理解できます。

- 特定の領域をクリックした動機をユーザーに説明してもらうため、Text Entry の質問を追加します。例: なぜそこをクリックしましたか？（自由記述）
- [Multiple Choice](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/multiple-choice/)の質問を使用して、確信度を評価してもらうこともできます。
  - 例: 正しい場所をクリックした確信はどの程度ありますか？
    - 完全に確信している
    - ある程度確信している
    - どちらでもない
    - やや自信がない
    - まったく自信がない
