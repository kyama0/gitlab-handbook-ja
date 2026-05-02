---
title: トラブルシューティング
description: "Flows のモニタリングおよびロギングツールに関する情報。"
upstream_path: /handbook/engineering/ai/agent-foundations/troubleshooting/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## ビデオチュートリアル

GitLab Duo workflows のトラブルシューティングに関する包括的なウォークスルーをご覧ください。


<div class="relative my-6" style="aspect-ratio: 16 / 9;">
  <iframe src="https://www.youtube.com/embed/T1KWz_xthEY" title="YouTube video" loading="lazy" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>
</div>


## ツール

Duo Flows は次のロギングおよびモニタリングツールを使用します。

1. [LangSmith](https://smith.langchain.com/o/477de7ad-583e-47b6-a1c4-c4a0300e7aca/projects/p/5409132b-2cf3-4df8-9f14-70204f90ed9b?timeModel=%7B%22duration%22%3A%227d%22%7D) - LLM の completion やツールコールなど、基盤となるグラフ実行にスコープされたログを収集します
1. [Google Cloud (GCP) logs explorer](https://cloudlogging.app.goo.gl/wqUxHXbqYzQ7ebb6A) は Duo Workflow Service からのログです
   1. ユーザーから「session ID」を提供してもらい、これらの GCP ログでこれを検索できます。たとえば、ユーザーのセッション ID が `123` の場合、[`resource.labels.service_name="duo-workflow-svc" and jsonPayload.workflow_id="1234"` で検索](https://console.cloud.google.com/logs/query;query=resource.labels.service_name%3D%22duo-workflow-svc%22%20and%20jsonPayload.workflow_id%3D%221234%22;duration=PT30M?project=gitlab-runway-production) して、そのユーザーセッションに関連するすべてのログエントリを取得できます。
1. GCP ログでは、`correlation_id` も表示されます。この `correlation_id` を使用して Rails と workhorse のログと相関させることができます。これらのログは <https://log.gprd.gitlab.net/> で見つけることができます。左上隅のドロップダウンで、Rails ログ用に `pubsub-rails-inf-gprd-*` を選択するか、workhorse ログ用に `pubsub-workhorse-inf-gprd-*` を選択できます。
1. Kibana で、検索バーの横のプラスボタンを使用して `json.correlation_id.keyword` でフィルタリングします。Kibana のヒントは <https://handbook.gitlab.com/handbook/engineering/monitoring/#logs> および <https://handbook.gitlab.com/handbook/support/workflows/kibana/> で見つけることができます。
1. Sentry エラートラッキングは、次のエラートレースを収集します。
   1. [Duo Workflow Service](https://new-sentry.gitlab.net/organizations/gitlab/issues/?limit=5&project=36&query=&sort=freq&statsPeriod=14d)
   1. [Duo Workflow Executor](https://new-sentry.gitlab.net/organizations/gitlab/issues/?limit=5&project=40&query=&sort=freq&statsPeriod=14d)
1. Runway モニタリング [ダッシュボード](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?from=now-24h&orgId=1&timezone=utc&to=now&var-PROMETHEUS_DS=mimir-runway&var-environment=gprd&var-region=$__all&var-type=duo-workflow) - これは Duo Workflow Service のハードウェアリソース消費を追跡する Grafana ダッシュボードです
1. [内部イベント追跡用の Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/DuoRequestWorkflow/DuoWorkflow) - 内部イベント追跡で収集された集計データを表示し、ワークフローの総数や異なるワークフロー結果間の分布などの追加のプロダクトメトリクスを表示します

### Google Cloud (GCP) Logs explorer

次のプロジェクトには、Runway デプロイメントのさまざまな部分のログが保持されています。

1. `gitlab-runway-production` - 本番 Runway デプロイメントのログを保持します
1. `gitlab-runway-staging` - ステージング Runway デプロイメントのログを保持します

Runway ログを参照するときは、次のフィルタを使用して、関心のあるインフラストラクチャの部分にスコープを絞ることができます。

1. ロードバランサーログのみをフィルタリングするには:

   ```plain
   resource.type="http_load_balancer"
   resource.labels.forwarding_rule_name="duo-workflow-https"
   ```

1. Duo Workflow Service デプロイメントログのみをフィルタリングするには:

   ```plain
   resource.labels.service_name="duo-workflow-svc"
   ```

### gRPCurl

[grpcurl](https://github.com/fullstorydev/grpcurl) は、`curl` が HTTP に対して行うのと同じように gRPC サーバーと対話できる CLI ツールです。

Agent Foundations での `grpcurl` の使用例を以下に示します。

1. Agent Foundations の認証情報は `curl` で取得できます

```bash
curl -X POST -H "Authorization: Bearer $GITLAB_API_PRIVATE_TOKEN" https://gitlab.com/api/v4/ai/duo_workflows/direct_access
```

1. 認証情報を環境変数に割り当てた状態で、`grpcurl` を使用して Duo Workflow Service への双方向チャンネルを開始できます

```bash
grpcurl -keepalive-time 20 -H "x-gitlab-global-user-id":"$GLOBAL_USER_ID" \
   -H "x-gitlab-instance-id":"ea8bf81......." -H "x-gitlab-realm":"saas" \
   -H "x-gitlab-authentication-type":"oidc" \
   -H authorization:"bearer $GRPC_TOKEN" -d @ -vv -proto ../duo-workflow-service/contract/contract.proto
   -import-path ../duo-workflow-service/contract cloud.gitlab.com:443 DuoWorkflow/ExecuteWorkflow


Resolved method descriptor:
rpc ExecuteWorkflow ( stream .ClientEvent ) returns ( stream .Action );

Request metadata to send:
authorization: bearer eyJhbGc.....
x-gitlab-authentication-type: oidc
x-gitlab-global-user-id: Rf9.........
x-gitlab-instance-id: ea8bf810-..........
x-gitlab-realm: saas
```

1. チャンネルが確立されたら、stdin を介してメッセージを送信できます

```json
{
  "startRequest": {
    "workflowID": "12344",
    "goal": "create hello world in go",
    "workflowMetadata":  "{\"extended_logging\":true,\"git_sha\":\"e621c52bb0f3af0a102a06cf2e485aa961f60d8c\",\"git_url\":\"gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/metric-dictionary.git\"}"
  }
}
```

## チームメンバー向けの拡張ロギング

### 拡張ロギングの有効化

トラブルシューティングを改善するために拡張ロギングを有効にするには、`#production` Slack チャンネル内で次の Slack コマンドを使用します。

```bash
/chatops run feature set duo_workflow_extended_logging --user=your_user_name true
```

> `your_user_name` を実際の GitLab ユーザー名に置き換えてください。

これにより、LangSmith で詳細なトレースが有効になり、LLM の completion、ツールコール、実行フローを含むワークフロー実行の最も包括的なビューが提供されます。

#### 重要なプライバシーとセキュリティに関する考慮事項

**⚠️ データプライバシー警告**: 拡張ロギングは、LangSmith で詳細なワークフロー実行データ (LLM の completion、ツールコール、プロンプト、モデル応答など) をキャプチャします。

* **[RED](/handbook/security/policies_and_standards/data-classification-standard#red) データなし**: `duo_workflow_extended_logging` 機能フラグが有効になっているときに [RED](/handbook/security/policies_and_standards/data-classification-standard#red) データで Agentic Chat を使用しないでください
* **前向きのみのロギング**: この機能は、有効化された後の新しいインタラクションのみをログに記録します。フラグを有効にする前に問題を経験した場合、拡張ロギングを有効にした後に問題を再現する必要があります
* **アクセス制限**: GitLab AI Engineering チームメンバーのみが、トラブルシューティング目的で LangSmith ログにアクセスできます

### AI エンジニアと共有する内容

支援を要求する際は、以下を提供してください。

* **Workflow ID**: 特定の実行をトレースするのに不可欠です
* **期待される動作と実際の動作**: 何を期待していたか vs 実際に何が起こったか
* **再現手順**: 問題が再現可能な場合
* **タイムスタンプ**: 問題が発生した時刻 (ログを絞り込むのに役立ちます)
* **エラーメッセージ**: エラーメッセージのスクリーンショットまたはコピーされたテキスト

### Workflow ID の取得方法

`workflow_id` は `session_id` と同じです。Agentic Duo Chat の場合、UI で見つけることができます。

## ヒントとコツ

問題のある Agent Foundations 実行に関する典型的な調査は、以下にリストされたステップに従います。

ユーザーレポートに基づく場合:

1. ワークフローのリストに表示される問題のあるワークフローの `workflow_id` をユーザーに尋ねます
2. 前のステップの `workflow_id` を使用して、`metadata` と `thread_id=[workflow_id]` のフィルタを適用して [langsmith のトレース](https://smith.langchain.com/o/477de7ad-583e-47b6-a1c4-c4a0300e7aca/projects/p/a86cfa18-72b2-4729-844e-94d4ffb7f54a?timeModel=%7B%22duration%22%3A%227d%22%7D) を絞り込みます
3. 1 番目のステップの `workflow_id` を使用して、GCP logs explorer で `jsonPayload.workflow_id="123456789"` でログを絞り込みます

Sentry の Issue に基づく場合:

1. Agent Foundations の Sentry Issue を使用して、問題のあるワークフローの `correlation_id` を見つけます。
2. 前のステップの `correlation_id` を使用して、GCP logs explorer でログを絞り込みます。フィルタの例: `jsonPayload.correlation_id="e7171f28-706d-4a47-be25-29d9b3751c0e"`

さらに、Sentry またはログエクスプローラーに記録されたワークフローの `workflow_id` を使用して、_metadata_ の `thread_id` フィルタで LangSmith ログを絞り込み、`workflow_id` と比較できます。

## 過去の詳細な調査

1. Cloudflare 経由の不良ネットワークプロキシ [調査 Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/501170)
