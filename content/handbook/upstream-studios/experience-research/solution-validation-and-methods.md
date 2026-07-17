---
title: "Solution Validation と方法"
description: "Solution Validation リサーチは、プロダクト / 機能 / デザインが当初解決しようとした問題を実際に解決したかどうかを批判的に評価します"
upstream_path: /handbook/upstream-studios/experience-research/solution-validation-and-methods/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:44-03:00"
translated_at: "2026-07-17T08:00:00+09:00"
translator: codex
stale: false
---

GitLab では、回答が必要な質問とデザインプロセスのどの段階にいるかに応じて、Problem Validation と Solution Validation の両方のリサーチを実践します。これらの方法の最終成果は、高い確信であり、それが全体としてより良いユーザー体験につながります。

### Solution Validation とは {#what-is-solution-validation}

問題、そのコンテキスト、およびそれに関わる人々を特定して理解した後（[Problem Validation](/handbook/upstream-studios/experience-research/problem-validation-and-methods/)とも呼ばれます）、次のステップは、どのソリューションが機能し、どれが機能しないかを学ぶことです。Solution Validation リサーチは、プロダクト / 機能 / デザインが当初解決しようとした問題を実際に解決したかどうかを批判的に評価します。

### Solution Validation を使用するタイミング {#when-to-use-solution-validation}

Solution Validation は、潜在的なソリューション、またはユーザーに利用可能になったソリューションについてフィードバックを得たい場合に、[プロダクトライフサイクルの後半](/handbook/upstream-studios/experience-research/when-to-conduct-ux-research/#design-things-rightsolution-validation)で行います。

Solution Validation リサーチは、Problem Validation リサーチで発見された問題を解決するために作成した、機能するデザインまたはプロトタイプがある後に実施します。デザインまたはプロトタイプは高忠実度である必要はなく、デザインされたタスクを支援できれば十分です。

提案したソリューションへの確信が高くない場合は、Solution Validation リサーチを実施できますし、実施すべきです。これは、プロジェクトの他の段階で見落とした可能性がある問題の特定に役立ちます。ソリューションへの確信を高める優れた方法は、デザインの意思決定を過去のユーザーリサーチに基づかせることです。

GitLab UX Research プロジェクトのリサーチ Issue に `UX Solution Validation` ラベルを適用してください。

### Solution Validation が回答できる質問 {#what-questions-can-solution-validation-answer}

- 参加者は、新しいプロダクト / 機能 / デザインをどのように活用してタスクを達成するか?
- どのようなペインポイントが存在するか?
- タスクの成功を確保するために、他にどのような情報を利用可能にすべきか?
- プロダクト / デザイン / 機能はユーザーの期待を満たしているか?
- 最も良いタスク完了を可能にするデザインはどれか?
- 新しいプロダクト / デザイン / 機能は、ユーザーの既存ワークフローにどのような影響を与えるか?

### さまざまな Solution Validation リサーチ方法 {#different-solution-validation-research-methods}

リサーチ質問に適した方法論を選ぶ際には、考慮すべき[複数の要素](/handbook/upstream-studios/experience-research/choosing-a-research-methodology/)があります。

ユーザビリティテストを実施する場合は、[ユーザビリティテストスクリプト](/handbook/upstream-studios/experience-research/writing-usability-testing-script/)の書き方に関するヒントを活用してください。モデレートなしのユーザビリティテストツールである [UserTesting.com](/handbook/upstream-studios/experience-research/unmoderated-testing/)もあります。

UX のテストおよびリサーチ用に予約された GitLab のインスタンスである [UX Cloud Sandbox](/handbook/upstream-studios/experience-research/ux-cloud-sandbox/)があります。参照先のハンドブックページには開始に必要なすべてがあり、支援を求めるための #ux-cloud-sandbox Slack チャンネルもあります。

Sandbox とは別に、きれいなテスト環境を作る支援が必要な場合は、#demo-systems Slack チャンネルで [Demo Systems](/handbook/customer-success/demo-systems/)グループに必ず連絡してください。ユーザー用のデモ環境を作成し、テスト環境に必要な特定のパラメーターの構築を支援できます。この方法でリサーチ調査のテスト環境を設定するのは、時間がかかり難しい場合があることに注意してください。

適切な**Solution Validation**リサーチ方法を選ぶには、リサーチの目的を特定する必要があります。自分にこう問いかけてください。***「デザインへの確信を高めるために、どのような情報を学ぶ必要があるか？」***答えは、使用する方法を選ぶ助けになります。それでも不明な場合は、UX Researcher に連絡してください。

|                                                  リサーチの全体的な目的                                                  |            リサーチ方法            |
|:-------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| <ul><li>機能および / またはプロセスへの変更を評価する</li> <li>現在のデザインがユーザーの目標をどの程度支援するかを評価する</li></ul> | [ユーザビリティテスト](/handbook/upstream-studios/experience-research/usability-testing/)        |
| <ul><li>現在の情報アーキテクチャがどのように機能するかを理解する</li> <li>現在のラベルがユーザーにとって意味を成すかを学ぶ</li> <li>ユーザーが必要な情報を簡単かつ迅速に見つけられるかを学ぶ</li></ul>                           | [ツリーテスト](https://www.optimalworkshop.com/101guides/tree-testing-101/tree-testing-overview) <br>[カードソート](https://digital.gov/guides/hcd/design-operations/methods/)        |
| <ul><li>特定のワークフロー内のユーザビリティ上の懸念を特定する</li> <li>特定のワークフロー内のユーザビリティ上の懸念に対処する労力をスコープ化し、追跡する</li></ul>                                         | [UX Scorecard](/handbook/product/ux/ux-scorecards/) |
| <ul><li>ユーザーがインターフェース上で最初に行うクリックが、特定のワークフローまたはナビゲーション要素に対する意図した開始点であることを検証する</li></ul>                                          | [ファーストクリックテスト](/handbook/upstream-studios/experience-research/first-click-testing/) |
