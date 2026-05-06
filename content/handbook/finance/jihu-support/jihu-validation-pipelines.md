---
title: JiHu バリデーションパイプライン
upstream_path: /handbook/finance/jihu-support/jihu-validation-pipelines/
upstream_sha: a1349675d55d5e861385a14a4b2d2b617d2381b1
translated_at: "2026-04-29T19:06:37Z"
translator: claude
stale: false
---

## JiHu バリデーションパイプライン

通常の開発で JiHu のパイプラインを壊さないよう、JiHu のパイプラインを壊す可能性が高いと判断されたマージリクエストで JiHu バリデーションパイプラインを実行します。

これらのパイプラインは現在、失敗が許容されており、マージリクエストのマージをブロックしてはいけません。

このポリシーを再検討するには、[as-if-jh パイプラインの失敗を不許可にする](https://gitlab.com/gitlab-org/gitlab/-/issues/351136)をご確認ください。

## 実行のタイミングと場所

変更が JiHu のパイプラインを壊す可能性が高いと検出された場合にバリデーションパイプラインを実行します。検出は自動化されており、検出されない場合に強制実行するために `~"pipeline:run-as-if-jh"` ラベルを手動で適用することもできます。

`start-as-if-jh` ジョブは [GitLab JH validation](https://gitlab.com/gitlab-org-sandbox/gitlab-jh-validation) プロジェクトでクロスプロジェクトのダウンストリームパイプラインをトリガーします。

検出の仕組みとこのバリデーションパイプラインの実行方法の技術的な詳細については、
[as-if-JH クロスプロジェクトダウンストリームパイプライン](https://docs.gitlab.com/ee/development/pipelines/#as-if-jh-cross-project-downstream-pipeline)をご確認ください。

## バリデーションパイプラインが失敗した場合の対処法

バリデーションパイプラインが失敗した場合は、以下のワークフローに従ってください：

- 既存の Issue やマージリクエストを検索して、既知の失敗かどうかを確認する：
  - [`~"JiHu Broken Pipeline"` ラベルの付いた Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?label_name%5B%5D=JiHu%20Broken%20Pipeline)
  - [`~"JiHu Broken Pipeline"` ラベルの付いたマージリクエスト](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/?label_name%5B%5D=JiHu%20Broken%20Pipeline)
  - [`~"main-jh broken"` ラベルの付いた JiHu の Issue](https://jihulab.com/gitlab-cn/gitlab/-/issues/?label_name%5B%5D=main-jh%20broken)
  - [`~"main-jh broken"` ラベルの付いた JiHu のマージリクエスト](https://jihulab.com/gitlab-cn/gitlab/-/merge_requests?label_name%5B%5D=main-jh%20broken)
- [JiHu のパイプライン](https://jihulab.com/gitlab-cn/gitlab/-/pipelines?ref=main-jh)が壊れていないか確認する

関連する項目が見つかった場合は、Issue またはマージリクエストで参照を記載して、次に進んでください。

何も見つからない場合は、以下のワークフローに従ってください：

- 潜在的な障害について JiHu に通知する Issue を作成する。[@qianzhangxa](https://gitlab.com/qianzhangxa) に連絡できます
- `~"JiHu impacted"` ラベルをマージリクエストに追加して追跡できるようにする
- （ボーナス）失敗を調査し、適切にフォローアップする。これは JiHu に失敗の理由と発生状況、または必要な対応や変更点を伝えることを意味します。より良いサポートのために、JiHu がより簡単にフォローアップできる方法を見つけることが推奨されます
