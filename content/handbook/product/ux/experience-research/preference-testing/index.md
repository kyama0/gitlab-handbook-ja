---
title: "プリファレンステスト"
description: "参加者がどのデザインを好むかを判断する方法。"
upstream_path: /handbook/product/ux/experience-research/preference-testing/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

プリファレンステストは、ユーザーに好みのオプションを選択してもらうことで、デザインのバリエーション（アイコン、1 ページのモックアップ、カラーパレット、デザインコンポーネントなど）を選ぶのに役立ちます。デザインの外観、情報をどれだけうまく伝達するか、または仮説を評価する他の特性に基づいて、参加者に好みを選んでもらうことができます。

このメソッドは、ワークフローやユーザビリティ、インタラクションを必要とするものをテストするためには使うべきではないことに注意することが重要です。参加者が**なぜ**その選択をしたかを尋ねる自由回答質問と組み合わせて使い、好みの背後にある理由を理解することはできます。モデレーター付きの形式が、追加のフォローアップ質問ができるためそれに最適です。

### プリファレンステスト作成のヒント

- 使用するビジュアルには、デザインを正確に評価するための完全なコンテキストが含まれている必要があります。
- スクリーンショットは、はっきりと見えて簡単に読めるサイズである必要があります。
- これらのテストは、美的魅力を測定するために一般的に使用されますが、信頼性や、特定のメッセージやアイデアをどれだけうまく伝えるかに基づいてデザインを判断するよう参加者に指示することもできます。

### Qualtrics でプリファレンステストを実行する方法

**ステップ 1:** Qualtrics にログインした後、「Welcome to XM」と呼ばれるサイドパネルの左下に表示される「Create a new project」をクリックします。

**ステップ 2:** ブランクの調査プロジェクトを作成することを選択します。

**ステップ 3:** Text / Graphic 質問タイプを使ってタスクシナリオを追加します。
[UX Research & Product Question Library](https://www.qualtrics.com/support/survey-platform/account-library/survey-library/#UsingABlockOrQuestionFromTheLibrary)の Questions フォルダから「Preference Question Block」をインポートすることで、以下のステップ 3 から 6 をスキップできます。

**ステップ 3:** 「Multiple Choice」質問タイプを使ってプリファレンス質問を追加します。

- 「Allow one answer」オプションが選択されていることを確認します。
- 回答項目をクリックし、ドロップダウンから[「Insert Graphic」](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/rich-content-editor/insert-a-graphic/)項目を選択します。
- 「Upload a new Graphic」を選択してコンピュータからグラフィックをアップロードします。
- 各回答オプションに対して繰り返します。

![Preference Test](/images/product/ux/ux-research/preference-testing/preference-test.png)

**ステップ 4:** ユーザーの好みを理解するのに役立つ質問を追加します。

- その質問の後に[Text Entry](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/text-entry/)質問を続けて、参加者がそのオプションを選んだ理由を理解します。
  - 質問例:
    - なぜそのデザインを好んだのですか？
    - なぜそのオプションを選んだのですか？
    - なぜそのオプションが最も[形容詞]に思えたのですか？
