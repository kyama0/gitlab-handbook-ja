---
title: "選好テスト"
description: "参加者がどのデザインを好むかを判断する方法。"
upstream_path: /handbook/upstream-studios/experience-research/preference-testing/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:18:26+09:00"
translator: codex
stale: false
---

選好テストは、ユーザーに好みの選択肢を選んでもらうことで、デザインのバリエーション（アイコン、1 ページのモックアップ、カラーパレット、デザインコンポーネントなど）から選択するのに役立ちます。参加者には、デザインの外観、情報をどの程度伝えているか、または仮説を評価するその他の性質に基づいて好みを選んでもらうことができます。

この方法を、ワークフロー、ユーザビリティ、またはインタラクションを必要とするもののテストに使用してはならないことに注意することが重要です。参加者が選択した**理由**を尋ねる自由回答形式の質問と組み合わせて、好みの背後にある理由を理解するために使用できます。その場合は、モデレーターがより多くのフォローアップ質問をできるため、モデレート形式が最適です。

### 選好テストを作成するためのヒント {#tips-for-creating-preference-tests}

- デザインを正確に評価するには、使用するビジュアルに完全なコンテキストが含まれている必要があります。
- スクリーンショットは、はっきりと見て容易に読める大きさである必要があります。
- これらのテストは一般に美的魅力の測定に使用されますが、参加者には、信頼性や特定のメッセージまたはアイデアをどの程度伝えているかに基づいてデザインを判断するよう指示できます。

### Qualtrics で選好テストを実施する方法 {#how-to-run-a-preference-test-in-qualtrics}

**ステップ 1:** Qualtrics にログインした後、"Welcome to XM" というサイドパネルの左下に表示される "Create a new project" をクリックします。

**ステップ 2:** 空白のアンケートプロジェクトを作成することを選択します

**ステップ 3:** Text / Graphic の質問タイプを使用してタスクシナリオを追加します
[UX Research & Product Question Library](https://www.qualtrics.com/support/survey-platform/account-library/survey-library/#UsingABlockOrQuestionFromTheLibrary)の Questions フォルダから "Preference Question Block" をインポートすると、以下のステップ 3〜6 をスキップできます。

**ステップ 3:** 'Multiple Choice' の質問タイプを使用して選好に関する質問を追加します

- 'Allow one answer' オプションが選択されていることを確認します
- 回答項目をクリックし、ドロップダウンから ['Insert Graphic'](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/rich-content-editor/insert-a-graphic/) 項目を選択します
- コンピューターから 'Upload a new Graphic' を選択してグラフィックをアップロードします
- 各回答選択肢について繰り返します

![選好テスト](/images/product/ux/ux-research/preference-testing/preference-test.png)

**ステップ 4:** ユーザーの好みを理解するのに役立つ質問を追加します

- その質問に続けて、参加者がその選択肢を選んだ理由を理解するための [Text Entry](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/text-entry/) 質問を追加します。
  - 質問例:
    - なぜそのデザインを好みましたか？
    - なぜその選択肢を選びましたか？
    - なぜその選択肢が最も [形容詞] のものに見えましたか？
