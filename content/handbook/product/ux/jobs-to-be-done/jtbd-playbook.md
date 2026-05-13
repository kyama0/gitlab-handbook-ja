---
title: JTBD リサーチプレイブック
description: >-
  GitLab は、[Jim Kalbach の JTBD Playbook](https://www.amazon.com/Jobs-Be-Done-Playbook-Organization/dp/1933820683) に基づくプロセスに従い、[ジョブキャンバス](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy)を開発し、ランク付けされた顧客成果を特定します。
upstream_path: /handbook/product/ux/jobs-to-be-done/jtbd-playbook/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

このプレイブックは、すべての GitLab チームメンバーが JTBD リサーチを実施できるようにするものです。ジョブキャンバスの各側面の詳細については、[JTBD キャンバスの構造](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy) をレビューしてください。質問がある場合は、UX リサーチャーまたは JTBD 専門家に連絡してください。

### 時間、信頼度、検証についての注意

プレイブックプロセスを実行するには、通常少なくとも 1 四半期が必要です。タイムラインは、ジョブの複雑さとチームの JTBD 経験によって異なります。

未検証で仮定的な [JTBD キャンバス](https://www.figma.com/file/Z4lsAOLH1ANN3pstQFYgSk/Jobs-to-be-done----Playbook-Template?type=whiteboard&node-id=0%3A1&t=oMR9VPNke7aIfCoU-1) を作成することは、チームのアライメントにとってより速く価値があるかもしれません。しかし、ドメイン知識が高くても、Outcome ステートメントを検証するためにジョブパフォーマーのインタビューが推奨されます。

信頼度レベル:

- **高／検証済み**: ジョブパフォーマーのインタビューを通じて検証されている
- **中／やや仮定的**: 既存のユーザーリサーチに基づく
- **低／仮定的**: リサーチなしのドメイン知識に基づく

### 参考文献

- [JTBD 概要](/handbook/product/ux/jobs-to-be-done/)
- [JTBD キャンバスの構造](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy)

## プレイブックプロセス

### Issue を作成する

**[discover-jtbd](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/discover-jtbd.md)** Issue テンプレートを使用して、[UX リサーチプロジェクト](https://gitlab.com/gitlab-org/ux-research/-/issues) に Issue を作成します。UX リサーチャーをタグ付けするか、`#ux_research` Slack チャンネルでサポートを求めてください。

### ワークショップ 1: スコープ定義

[JTBD キャンバステンプレート](https://www.figma.com/file/Z4lsAOLH1ANN3pstQFYgSk/Jobs-to-be-done----Playbook-Template?type=whiteboard&node-id=0%3A1&t=oMR9VPNke7aIfCoU-1) を使用して、プロダクトデザイン DRI、プロダクトマネージャー、オプションで Engineering と UX リサーチチームメンバーとの 1 時間のワークショップを通じて、ドメイン、ジョブパフォーマー、メインジョブを定義します。

#### エクササイズ 1: ドメイン選択（10 分）

ドメインを考えるとき、自問自答します: どこでイノベーションを起こしたいか？

1. ブレインストーミング（5 分）: 潜在的なドメインをリストします。セクション、ステージグループ、またはカテゴリーが良い出発点になります。
1. 選択（5 分）: 1 つのドメインを選択し、キャンバスに追加します。

#### エクササイズ 2: ジョブパフォーマー選択（10 分）

ジョブパフォーマーを考えるとき、自問自答します: 誰のためにイノベーションを起こすか？市場のどこにニーズがあるか？私たちは誰にサービスを提供することに情熱を持っているか？私たちのビジネス戦略に関連性があるか、中心的なものは何か？

1. ブレインストーミング（5 分）: 選択したドメインに関連するアクター／ステークホルダーをリストします。
1. 投票（5 分）: 各ワークショップ参加者が投票
   - <3 名の参加者: 各自 2 票、同じ項目に投票可能
   - >3 名の参加者: 各自 1 票
1. 勝者をキャンバスに移動

#### エクササイズ 3: メインジョブ選択（15 分）

メインジョブを考えるとき、自問自答します: 戦略的価値があるものは何か？私たちは何に情熱を持っているか？私たちが最もサポートできるものは何か？私たちのビジネスと整合し、ジョブパフォーマーのコア目的は何か？

1. ブレインストーミング（10 分）: 選択したジョブパフォーマーが達成しようとするすべてのジョブをリストします
1. 投票（5 分）: 各ワークショップ参加者が投票
   - <3 名の参加者: 各自 2 票、同じ項目に投票可能
   - >3 名の参加者: 各自 1 票
1. 勝者をメインジョブセクションに移動
1. 他のものを関連ジョブセクションに移動

#### エクササイズ 4: 願望の選択（15 分）

願望を考えるとき、自問自答します: メインジョブを完了した後、私たちのジョブパフォーマーは何になりたいと願っているか？このタスクを完了する以上の彼らの究極の目標は何か？

1. ブレインストーミング（10 分）: メインジョブを完了した後、ジョブパフォーマーが何になりたいかをリストします
1. 投票（5 分）:
   - <3 名の参加者: 各自 6 票、同じ項目に投票可能
   - >3 名の参加者: 各自 3 票
1. トップ 3 を願望セクションに移動

### 調査インタビューの実施

代表的なジョブパフォーマーと 5〜10 回の 1 時間のインタビューを実施し、JTBD キャンバスの下半分（ジョブマップ、感情的／社会的側面、成果、ジョブ差別化要因）を理解し検証します。パターンが浮かび上がるまで、必要に応じてインタビューを追加します。

構造:

- モデレーターとノートテーカーが参加
- ノートテーカーがインタビュー中にジョブステップを文書化
- 正確性を確認するために参加者とキャンバスをレビュー

インタビューの目標:

- [ジョブステップ](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy#job-steps-how-does-the-job-performer-get-the-job-done) をマッピング
- [望ましい成果](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#outcomes-how-does-the-job-performer-measure-success) を特定
- [関連ジョブ](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy#related-jobs-what-else-is-the-job-performer-trying-to-get-done) を発見
- [ジョブ差別化要因](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#job-differentiators-what-factors-influence-how-the-job-gets-done) を理解

役立つプロンプトについては、Figjam テンプレートの [インタビューガイド](https://www.figma.com/file/Z4lsAOLH1ANN3pstQFYgSk/Jobs-to-be-done----Playbook-Template?type=whiteboard&node-id=78-2318&t=oMR9VPNke7aIfCoU-4) を参照してください。

### キャンバスを完成させる

インタビュー後、収集した情報を JTBD キャンバスに統合し、共通パターンに焦点を当て、外れ値を破棄します。[データ統合](/handbook/product/ux/experience-research/analyzing-research-data/) の専門知識を持つ UX リサーチャーとのコラボレーションを検討してください。

#### エクササイズ 1: ジョブマップを完成させる

1. インタビュー中にインタビューごとのジョブマップが作成されなかった場合、今作成します:
   - インタビューノート／ビデオをレビューして時系列でステップをキャプチャ
   - [ジョブステップガイドライン](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy#job-steps-how-does-the-job-performer-get-the-job-done) に従ってステップを書き直す
1. 統一されたジョブマップを作成:
   - 始まり、中間、終わりのカテゴリにステップをグループ化
   - 関連するステップを垂直スタックに整理
   - 高レベルの単一の動詞記述子でスタックにラベルを付ける

#### エクササイズ 2: 成果ステートメントを構築する

1. ジョブパフォーマーがメインジョブを完了した成功をどう測定するかを特定し、各成功測定のための付箋を作成します
1. [成果ガイドライン](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#outcomes-how-does-the-job-performer-measure-success) に従ってフォーマット
1. [後の検証](#outcome-opportunity-scores-survey) のために 50〜100 のステートメントを目指します

#### エクササイズ 3: 感情的および社会的側面を統合する

1. 感情的側面:
   - メインジョブを実行するときにジョブパフォーマーがどう感じるかへの言及を抽出
   - [ガイドライン](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#emotionalsocial-aspects-how-does-the-job-performer-feel-and-want-to-be-perceived) に従ってフォーマット

2. 社会的側面:
   - メインジョブを実行するときにジョブパフォーマーがどう認識されたいかへの言及を抽出
   - [ガイドライン](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#emotionalsocial-aspects-how-does-the-job-performer-feel-and-want-to-be-perceived) に従ってフォーマット

#### エクササイズ 4: ジョブ差別化要因を収集する

1. ジョブパフォーマーがメインジョブを完了する方法に影響する要因を特定します
1. [ガイドライン](/handbook/product/ux/jobs-to-be-done/jtbd-canvas-anatomy/#job-differentiators-what-factors-influence-how-the-job-gets-done) に従ってフォーマット

### ワークショップ 2: マップと優先順位付け

ジョブキャンバスを使用して、プロダクトデザイン DRI、プロダクトマネージャー、オプションで Engineering と UX リサーチチームメンバーとの 1 時間のワークショップを通じて、ジョブステップ、感情的・社会的側面、ジョブ差別化要因を選択します。

#### エクササイズ 1: ジョブステップのレビューと選択（15 分）

最も重要なジョブステップを考慮する際、自問自答します: 成功に最も挑戦的だが極めて重要なステップはどれか？

1. ジョブマップをレビュー（5 分）
   - インタビューデータと正確性を検証
   - 必要な調整を行う
1. 重要なステップに投票（10 分）
   - <3 名の参加者: 各自 2 票、同じ項目に投票可能
   - >3 名の参加者: 各自 1 票
1. 優先順位について整合するために投票を議論
1. 最多得票のステップを特定
1. 最終ジョブマップをキャンバスにコピーし、選択したステップにマークを付ける

#### エクササイズ 2: 感情的側面のステートメント選択（10 分）

感情的側面を考慮する際、自問自答します: 誰のためにイノベーションを起こすか？市場のどこにニーズがあるか？私たちは誰にサービスを提供することに情熱を持っているか？私たちのビジネス戦略に関連性があるか、中心的なものは何か？

1. レビュー（5 分）
   - 感情的側面をチームと共有
   - 理解を確実にする
1. 投票（5 分）
   - <3 名の参加者: 各自 6 票、同じ項目に投票可能
   - >3 名の参加者: 各自 3 票
1. 投票を優先順位ピラミッドに並べる
1. トップ選択に関するチームの整合を確認
1. トップの感情的側面をキャンバスに移動

#### エクササイズ 3: 社会的側面のステートメント選択（10 分）

社会的側面のステートメントを選択するためにエクササイズ 2 を繰り返します。

#### エクササイズ 4: ジョブ差別化要因のステートメント選択（10 分）

ジョブ差別化要因のステートメントを選択するためにエクササイズ 2 を繰り返します。

🎉🥳 おめでとうございます！検証済みの JTBD キャンバスを正常に作成しました！🥳🎉

### 成果機会スコア調査 {#outcome-opportunity-scores-survey}

成果ステートメントの優先順位付けには、[qualtrics テンプレート](https://gitlab.eu.qualtrics.com/survey-builder/LS_2l5ektxWK1wFRuC/edit?ContextLibraryID=GR_6ziMa2ooJx4Y6SF) を使用してこの調査を実行します。この調査を作成・提供するために UX リサーチャーと連携することを推奨します。

各成果ステートメントについて、次の質問をします:

1. この（成果）はあなたにとってどれほど_重要_ですか？
2. この（成果）は現在どれほどうまく_満たされて_いますか？

要件:

- メインジョブを実行する参加者をスクリーニング
- 約 50 件の有資格回答を目標
- GitLab ユーザーと非 GitLab ユーザーの両方を含める
- 10 ポイントスケールを使用（1='非常に低い'、10='非常に高い'）

リソース:

- [分析スプレッドシート](https://docs.google.com/spreadsheets/d/109GZqTYPpOLpHLj-gwV_ldMFwIKa9MaaLPyLJ4kdoQs/edit?usp=sharing)

#### スコアの計算

[分析スプレッドシートテンプレート](https://docs.google.com/spreadsheets/d/109GZqTYPpOLpHLj-gwV_ldMFwIKa9MaaLPyLJ4kdoQs/edit?usp=sharing) は、Qualtrics 調査からデータをエクスポートし、機会スコア付きのランク付けされた成果ステートメントのリストを生成するためのステップバイステップガイドを提供します。

[機会スコア](https://medium.com/uxr-microsoft/what-is-the-opportunity-score-and-how-to-obtain-it-bb81fcbf79b7) は 0〜20 の範囲です。10 未満のスコアでさえ改善の余地を示します — 範囲内の最高スコアを優先します。

![JTBD 機会スコア](/images/product/ux/jobs-to-be-done/JTBD_OpportunityScore.png)

1. 満足度ギャップ: 重要度 - 満足度
1. 機会スコア: 重要度 + 満足度ギャップ

| スコア | 優先順位レベル |
|-------|---------------|
| 16-20 | 即時のアクションが必要 |
| 10-15 | 高優先度 |
| 7-9   | 監視 |
| ≤6    | 低優先度 |

### ジョブストーリーを生成する

ジョブストーリーは、ジョブキャンバスのデータを統合して、解決策を規定することなく顧客の苦痛点をカプセル化します。それらは、開発を企業のビジョンと戦略と整合させるのに役立ちます。各ドメインには通常 3〜5 個のジョブストーリーがあります。

主要な特徴:

- ジョブキャンバスデータからのエビデンスベース
- 苦痛点について具体的
- コンテキストを通じて共感を構築
- 願望的だが達成可能
- 自明で十分にリサーチされている

苦痛点は次の通りでなければなりません:

- ニーズを表現し、解決策ではない
- 抽象的ではなく具体的
- 逸話的ではなく測定可能

#### ジョブストーリーのフォーマット

1. **When I**（このジョブステップで） + （これらのジョブ差別化要因の条件下で）
2. **I want**（この新しい能力／顧客の必須要件）
3. **So I can**（これらの成果に達する） + （そしてこれらの感情的／社会的側面を持つ）

#### ジョブストーリーの使用方法

- How Might We (HMW) ステートメントを生成
- デザインスプリントチャレンジを定義
- テスト可能な MVP 仮説を作成:
  - 私たちは [ジョブパフォーマー] が
  - [望ましい成果] を達成すると信じている
  - [ジョブステップ] を実行している間
  - [提案された解決策] を使用して。
  - 成功は [特定の測定値] によって証明されるだろう
- Issue が検証済みの問題を解決していることを保証
- ユーザビリティテスト基準を定義

<!-- Figure out how to incorporate this into UX Theme workshop

### Align on Ranked Outcomes: Workshop

Here's where the magic happens. If you have the ranked Outcomes by opportunity score from your survey, you have a list of the areas that will be most impactful to your users' experience of your product. Now is the time to meet with your stakeholders and discuss the top ranked Outcomes. Our [FigJam template](https://www.figma.com/file/Z4lsAOLH1ANN3pstQFYgSk/Jobs-to-be-done----Playbook-Template?type=whiteboard&node-id=0%3A1&t=qrubQYZLbPWYJjN3-1) has a workshop template and guide you can use to help address each Outcome statement.

A few things to think about during the workshop:

- Are the Outcomes already being addressed with current and planned work? If not, should they be incorporated into future planning?
- Where in the product is each Outcome done? Are there specific pages, controls, or parts of the UI that we can focus on?
- Who owns each Outcome? Are there other teams that 'own' some of the areas of opportunity? Who can you speak with to see if they are working on this Outcome already?
- What can be done to achieve the stated Outcome? Think of some potential solutions.

The result of the workshop should be that the team understands the top opportunities for that Main Job and Job Performer, and has discussed ways to address them.

You and your team now have a list of the most important areas to focus on - a list that you can share with other teams and stakeholders (even customers!) to help bring clarity and confidence to your product roadmap.

The list of opportunities will remain relevant for a long time (until you release changes to your product that address the opportunities), because they aren't based on particular features or solutions, but larger Outcomes that users want to achieve. Re-survey your Job Performers about certain Outcome statements after your team has made some changes, in order to see if the opportunity score has decreased (meaning you've made positive progress to fulfilling the desired Outcome).

-->

<!-- TODO: Connect to UX Themes (in a future MR) -->
