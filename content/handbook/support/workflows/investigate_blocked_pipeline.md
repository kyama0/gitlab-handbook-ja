---
title: ブロックされたパイプラインの調査
description: "gitlab.com 上でパイプラインがブロックされた原因を特定するためのワークフロー"
category: GitLab.com
subcategory: Security
upstream_path: /handbook/support/workflows/investigate_blocked_pipeline/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
translated_at: "2026-11-06T21:10:30.442757+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T16:04:58-05:00"
---

## 概要 {#overview}

GitLab.com は [外部パイプライン検証サービス](https://docs.gitlab.com/administration/cicd/external_pipeline_validation/) を使用して、パイプラインを正当なアクティビティとして検証します。**これには特定の Runner で実行されるパイプラインも含まれます**。お客様からパイプラインが実行されないとの報告があった場合、検証サービスにどのようなアクティビティが記録されているかを私たちの側でログから確認できます。

不正利用を検知するルールの性質上、ほとんどの場合、お客様の `.gitlab-ci.yml` の何がパイプラインのブロック原因となっているかについては、一般的なフィードバックしかお伝えできません。判断に迷う場合は、`@trust-and-safety` にレビューを依頼してください。

## ユーザーから見るとどう見えるか？ {#what-does-it-look-like-for-a-user}

期待されるパイプラインが作成されない場合、パイプラインがパイプライン検証サービスによってブロックされた *可能性があります*。パイプラインが生成されるきっかけは以下のとおりです:

- 新しい push
- 手動アクション
- スケジュールされたパイプライン
- API

ただし、根本的な原因が別にある場合もあるため、ログを検索して検証することが重要です。

ユーザーには次のようなエラーが表示される場合があります:
> **Pipeline cannot be run.**
> External validation failed.

## ブロックの特定 {#identifying-a-block}

1. 影響を受ける `project_id` または `user_id` を特定します。
1. 適切な期間で Kibana の `pubsub-pvs-inf-gprd*` インデックスを以下で検索します:
   - `json.jsonPayload.project_id: <project_id>`
   - `json.jsonPayload.user_id: <user_id>`
1. パイプラインがブロックされた理由を理解するため、`msg` および `rejection_hint` フィールドを観察します。

詳細は [pvs-runbook](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/pipeline-validation-service/README.md#logging) を参照してください。

ルールは [Trust and Safety - Repository Validation Service リポジトリ](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/pipeline-validation-service/-/blob/master/rules/rules.yaml) にドキュメント化されています（GitLab 内部のみ）。

## トレンド／優先度の高いケース {#trends--high-priority-cases}

ルールが変更または更新されると、誤検知が一括で発生する可能性があります。短期間に多数のケースが報告されている場合は、[インシデントを報告](/handbook/engineering/infrastructure-platforms/incident-management/#report-an-incident-via-slack) してください。

以下の準備をしておくと役立ちます:

- ブロックされたパイプラインを報告しているチケットのリスト
- それらがパイプライン検証サービスによってブロックされたことの確認
- 共通点の特定

## お客様への対応 {#responding-to-customers}

`General::Blocked Pipeline` マクロがあり、ユーザーに `.gitlab-ci.yml`（またはアクセスの許可）を求め、パイプラインがブロックされた可能性があることを説明し、加えてチケットにタグを付与します。お客様が初回応答ですでに提供している項目は必ず削除してください。

ブロックを確認できたら、検出された不正利用の結果としてパイプラインがブロックされたことを肯定的に伝える返信をすることができます。

返信の際は、特定のルールに言及することを避けてください。例えば、架空の暗号通貨マイニングスクリプト `use-gitlab-to-mine-crypto.sh` をフィルタリングするルールがあったとします。次のように返信できます:

> お客様の `.gitlab-ci.yml` の `script` セクションにある項目が、私たちのマイニング対策に抵触したようです。一般的には、マイニングツールへの参照を
削除してください。

または

> 22 行目に、過去に不正利用としてフラグが付けられたスクリプトと似た名前のスクリプトを呼び出している項目があるようです。その行を削除すれば、パイプラインは検証を通ると思います。

次のように述べるのは **避けるべき** です:

> 私たちは、すべてのパイプラインで `use-gitlab-to-mine-crypto.sh` という文字列を検索しています。お客様の `.gitlab-ci.yml` にこの文字列が含まれているので、フラグが付けられないよう、そのスクリプトの名前を変更してください。

## 誤検知の報告 {#reporting-a-false-positive}

[Trust and Safety で Issue を作成](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues/new) します。影響を受けたユーザーのユーザー名、ブロックが発生したことを示す Kibana からの JSON 出力のコピー、リクエストを報告した Zendesk チケットへのリンクを含めてください。
