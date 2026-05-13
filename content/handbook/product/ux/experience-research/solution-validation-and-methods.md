---
title: "ソリューション検証と手法"
description: "ソリューション検証リサーチは、プロダクト／機能／デザインが当初解決しようとした問題を実際に解決したかどうかを批判的に評価します"
upstream_path: /handbook/product/ux/experience-research/solution-validation-and-methods/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

GitLab では、回答が必要な質問やデザインプロセスでの位置づけに応じて、問題検証リサーチとソリューション検証リサーチの両方を実施しています。これらの手法の最終結果は高い確信度であり、それが全体的により良いユーザー体験につながります。

### ソリューション検証とは

問題、そのコンテキスト、それを取り巻く人々を特定し理解した後（[問題検証](/handbook/product/ux/experience-research/problem-validation-and-methods/)とも呼ばれる）、次のステップはどのソリューションが機能し、どれが機能しないかを学ぶことです。ソリューション検証リサーチは、プロダクト／機能／デザインが当初解決しようとした問題を実際に解決したかどうかを批判的に評価します。

### ソリューション検証をいつ使うか

ソリューション検証は、[プロダクトライフサイクルの後半](/handbook/product/ux/experience-research/when-to-conduct-ux-research/#design-things-rightsolution-validation)、つまり潜在的なソリューションやユーザーに提供可能になったソリューションに対するフィードバックを得たいときに行います。

ソリューション検証リサーチは、問題検証リサーチで発見された問題を解決するために作成された動作するデザインまたはプロトタイプができた後に実施されます。デザインまたはプロトタイプは高忠実度である必要はなく、設計対象のタスクをサポートできさえすればよいのです。

提案されたソリューションへの確信度が高くない場合、ソリューション検証リサーチを実施することができ、また実施すべきです。これにより、プロジェクトの他のステージで見逃された可能性のある Issue を特定できます。ソリューションへの確信度を高める優れた方法は、デザインの意思決定を事前のユーザーリサーチに基づかせることです。

GitLab UX Research プロジェクトでは、リサーチ Issue に `UX Solution Validation` ラベルを適用してください。

### ソリューション検証が答えられる質問

- 参加者は新しいプロダクト／機能／デザインをどのように活用してタスクを達成するか？
- どのようなペインポイントが存在するか？
- タスクの成功を保証するために他にどのような情報を利用できるようにすべきか？
- プロダクト／デザイン／機能はユーザーの期待に応えているか？
- どのデザインが最も良いタスク完了を可能にするか？
- 新しいプロダクト／デザイン／機能はユーザーの既存ワークフローにどう影響するか？

### さまざまなソリューション検証リサーチ手法

リサーチ課題に適した方法論を選ぶ際は、[複数の要因](/handbook/product/ux/experience-research/choosing-a-research-methodology/)を考慮する必要があります。

ユーザビリティテストを実施することを選択した場合、[ユーザビリティテストスクリプト](/handbook/product/ux/experience-research/writing-usability-testing-script/)の書き方のヒントを活用してください。また、[モデレートなしユーザビリティテストツール](/handbook/product/ux/experience-research/unmoderated-testing/)である UserTesting.com もあります。

UX テストとリサーチ用に予約された GitLab インスタンスである [UX Cloud Sandbox](/handbook/product/ux/experience-research/ux-cloud-sandbox/) があります。参照されているハンドブックページに必要なものはすべて揃っており、ヘルプを求めるための #ux-cloud-sandbox Slack チャンネルもあります。

サンドボックスとは別のクリーンなテスト環境の作成についてヘルプが必要な場合は、#demo-systems Slack チャンネルで [Demo Systems](/handbook/customer-success/demo-systems/) グループに連絡してください。ユーザー向けのデモ環境を作成し、テスト環境に必要な特定のパラメータの構築を支援できます。この方法でリサーチ研究用のテスト環境をセットアップするのは時間がかかり困難な場合があることに注意してください。

適切な **ソリューション検証** リサーチ手法を選ぶには、リサーチの目的を特定する必要があります。 ***「デザインへの確信度を高めるためには何を学ぶ必要があるか？」*** と自問してみてください。あなたの答えがどの手法を使うかを選ぶのに役立ちます。それでも不明な場合は、UX Researcher に連絡してください。

|                                                  リサーチの全体的な目的                                                  |            リサーチ手法            |
|:-------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| <ul><li>機能や／プロセスへの変更を評価する</li> <li>現在のデザインがユーザーの目標をどの程度サポートしているかを評価する</li></ul> | [ユーザビリティテスト](/handbook/product/ux/experience-research/usability-testing/)        |
| <ul><li>現在の情報アーキテクチャがどのように機能しているかを理解する</li> <li>現在のラベルがユーザーにとって理解しやすいかを学ぶ</li> <li>ユーザーが必要な情報を簡単かつ迅速に見つけられるかを学ぶ</li></ul>                           | [ツリーテスト](https://www.optimalworkshop.com/101guides/tree-testing-101/tree-testing-overview) <br>[カードソート](https://digital.gov/guides/hcd/design-operations/methods/)        |
| <ul><li>特定のワークフロー内のユーザビリティの懸念を特定する</li> <li>特定のワークフロー内のユーザビリティ懸念対応の工数をスコープし追跡する</li></ul>                                         | [UX スコアカード](/handbook/product/ux/ux-scorecards/) |
| <ul><li>ユーザーがインターフェース上で最初にクリックする箇所が、特定のワークフローやナビゲーション要素の意図された開始点かどうかを検証する</li></ul>                                          | [First Click Testing](/handbook/product/ux/experience-research/first-click-testing/) |
