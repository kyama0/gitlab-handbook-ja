---
title: "準備状況"
description: "ワークアイテムがエージェントによる実行に向けて準備できているかを示す、準備状況の設計。"
status: ongoing
maturity: still defining
creation-date: "2026-04-16"
authors: [ "@fredericcaplette" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/readiness/"
upstream_sha: "2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8"
lastmod: "2026-10-20T13:32:50-04:00"
translated_at: "2026-10-20T21:12:55Z"
translator: "codex"
stale: false
---

SDD の詳細は、[Spec-Driven Development](_index.md)を参照してください。

**成熟度：定義中**

## 概要 {#summary}

準備状況は、ワークアイテムがエージェントによる実行に向けてどの程度準備できているかを伝えます。Duo Developer に引き渡す前の、軽量な品質ゲートです。これがなければ、誰でも対象範囲が不明確なワークアイテムでエージェントを起動できてしまい、トークンを浪費し、品質の低い出力を生成します。また、ワークアイテムが引き渡しに十分な状態かどうかを示すものもありません。

準備状況は、Workplan だけでなく、ワークアイテム全体に適用します。数値の準備状況スコアがその基になっていますが、ユーザーインターフェースには数値ではなく、準備状況のレベルのみを表示します。信頼度からの名称変更は、[マージリクエスト 259555](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/259555)で実装されています。

エピック：[WS-6：ワークアイテムの準備状況スコア](https://gitlab.com/groups/gitlab-org/-/work_items/23050)

ユーザードキュメント：[準備状況](https://docs.gitlab.com/user/work_items/workplan/#readiness)

## スコアリングモデル {#scoring-model}

スコアは、0 〜 100 の数値です。スコアリング段階では、保存済みの Workplan を、ワークアイテムの説明とコメントに照らして評価します。スーパーバイザーは、3 名の評価者による 2 回の評価を調整します。

1. ルーブリック評価者は、網羅性、根拠、具体性、実現可能性と順序、完全性を採点します。網羅性の評価者は、要件と計画の手順を双方向に対応付けます。反証を試みる評価者は、誤った前提、誤った対象、問題を解決しなくても達成できてしまう成功基準がないか調べます。
1. 3 名の検証者が、それぞれの発見を突き合わせて再評価します。スーパーバイザーは、修正されたスコアをまとめ、重大な欠陥が残っている可能性がある、または残っていることが確認された場合に、結果に上限を設けます。

各回は並列に委任する設計ですが、実行環境が対応していない場合は順次実行に切り替えます。最初の評価が完了しなければ、スコアは生成しません。これらのスコアの上限は評価に影響しますが、ユーザーの実装権限には影響しません。

スーパーバイザーは、影響の大きい順に、Markdown で推奨事項も記述します。実際に有用な推奨事項が少なすぎる場合は、一覧を埋めるために問題を作り上げることはせず、フィードバックを省略します。実装は、[Workplan のスコアリング設定](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/duo_workflow_service/agent_platform/v1/flows/configs/workplan/1.1.0.yml)にあります。さらなる簡素化は、[Issue 2913](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/work_items/2913)で追跡しています。

## 算出 {#computation}

スコアリングは、別のワークフローを起動するのではなく、計画担当が計画を書いた後に、[非同期 Workplan フロー](workplan-flow.md)の内部で実行します。スコアリング段階では、保存済みのワークアイテムとシステムノート以外のノートを取得して評価し、スコアとフィードバックのみを書き込みます。計画は書き換えません（[マージリクエスト 7039](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7039)）。スコアリングに必要な取得が失敗した場合は、スコアリング段階を終了し、正常に書き込まれた計画の生成実行を失敗扱いにはしません。

スコアとフィードバックは Workplan とともに保存し、`readinessScore`、`readinessScoreFeedback`、`readinessScoreFeedbackHtml` を通じて公開します。AI Gateway のワークアイテムツールは、スコアとフィードバックの両方を永続化します（[マージリクエスト 7144](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7144)）。MCP ワークアイテムツールはスコアに対応しています。フィードバックへの対応は、引き続き [Issue 627234](https://gitlab.com/gitlab-org/gitlab/-/work_items/627234)で別途追跡しています。

## 表示 {#display}

Implementation ウィジェットは、ゼロも含めた数値のスコアが存在する場合にのみ、準備状況インジケーターを表示します。

| スコア | レベル | インジケーター |
| ----- | ----- | --------- |
| 0–39 | Low | バー 1 本、エラー |
| 40–79 | Medium | バー 2 本、警告 |
| 80–100 | High | バー 3 本、成功 |

**Readiness details** は、**How to improve readiness?** というタイトルのオーバーレイドロワーを開きます。表示の要求があった時点でレンダリング済みのフィードバックを取得し、準備状況のレベルはウィジェット内に維持します。ドロワーを開いても、ワークアイテムのサイズや URL は変わりません。閉じると、開くきっかけとなった要素にフォーカスを戻します（[マージリクエスト 259135](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/259135)）。

スコアが存在しない場合、UI はまだ、評価中、失敗、キャンセル、未評価の状態を区別しません。専用の `readinessScoreStatus` フィールドが、[マージリクエスト 262079](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/262079)で提案されており、UI は [Issue 633076](https://gitlab.com/gitlab-org/gitlab/-/work_items/633076)で追跡しています。

## 動作 {#behavior}

今回のイテレーションでは、準備状況は助言としてのものです。ユーザーは、準備状況のレベルにかかわらず実装を開始できます。これにより、厳格な承認ゲートを避けながらも、ワークアイテムのさらなる詳細化が必要なときにそれを示せます。

今後のイテレーションでは、次のものが追加される可能性があります。

- しきい値を下回る場合の引き渡しに対する、特定のロールに限定した承認ゲート。
- しきい値を上回る場合の自動引き渡しなど、プロジェクト単位のポリシー。
- スコアの履歴。
- プロジェクト所有者が設定できる基準。
- マージリクエストがどの程度 Workplan に沿っているかを示す、別のスコア。

## 未解決の質問 {#open-questions}

- 計画生成前にもスコアリングするかどうかと、計画の実行とは独立してスコアリングに対応する方法。
- 準備状況が 100% のときの空のフィードバックの扱い（[Issue 633996](https://gitlab.com/gitlab-org/gitlab/-/work_items/633996)）と、100% 未満の高いスコアをより正確に表示すること（[Issue 633988](https://gitlab.com/gitlab-org/gitlab/-/work_items/633988)）。
- 引き渡し前の警告に対するデフォルトのしきい値。
- スコアの履歴を保存するか、現在のスコアのみを保存するか。
