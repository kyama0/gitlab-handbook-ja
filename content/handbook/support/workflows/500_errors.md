---
title: GitLab.com のエラー診断
description: このガイドは GitLab.com の HTTP 5XX エラーを診断するためのリソースを提供します。
category: GitLab.com
subcategory: Troubleshooting
upstream_path: /handbook/support/workflows/500_errors/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T19:23:50Z"
translator: claude
stale: false
---

### 概要

このガイドは、GitLab.com の **5XX** エラーを診断するためのリソースを提供します。これは、ユーザーが GitLab.com で `500` または `503` エラーを受信していると報告してサポートに連絡したときに使用します。

### 動作の遅さに関する報告

GitLab.com で動作の遅さに関する報告を受け取った場合、まず [GitLab Grafana Monitor](https://dashboards.gitlab.net/d/mnbqU9Smz/fleet-overview?orgId=1)、特に以下を確認してください:

- Worker CPU -> Git CPU Percent

- Worker Load -> Git Worker Load

#### Runner のパフォーマンス低下

お客様が共有 Runner が通常よりも遅く動作していると報告した場合、お客様がパイプラインで遅延を経験した期間中にパフォーマンス低下が発生している可能性が高いです。

[CI Runners Overview](https://dashboards.gitlab.net/d/ci-runners-main/ci-runners-overview?orgId=1) のグラフを確認すると、キューの apdex とレイテンシーの増加が見られるはずです。

[#feed_alerts](https://gitlab.slack.com/messages/C12RCNXK5)、[#production](https://gitlab.slack.com/messages/C101F3796)、および [#incidents](https://gitlab.slack.com/messages/C02HF90ME66) Slack チャンネルを確認して、これが障害やインフラストラクチャの問題でないことを確認してください。

### GitLab.com で自身が遅さに気づいた場合

#production に投稿したり Issue を作成する前に、問題を絞り込むのに役立つデータを取得する有用な方法をいくつか紹介します:

1. `performance_bar=flamegraph` クエリパラメータを追加して [CPU フレームグラフ](https://docs.gitlab.com/development/profiling/#speedscope-flamegraphs) を生成できます。
1. ブラウザウィンドウで `pb` と入力して [パフォーマンスバー](https://docs.gitlab.com/administration/monitoring/performance/performance_bar/) を使用します。ページをリロードしてサーバー側からの情報を取得します。
1. Chrome を使用している場合は、Chrome デベロッパーツールを開き（View > Developer > Developer Tools）、ページをリロードし、Network タブを確認します。これによりすべてのリクエストとタイミングが表示されます。
1. Firefox を使用している場合は、Tools > Web Developer > Network 配下に同様のネットワークビューがあり、リクエストとタイミングが表示されます。

これらのツールから取得したスクリーンショットは、問題を調査するエンジニアに大きく役立ちます。

### 接続のトラブルシューティング

お客様が GitLab.com への接続問題を報告している場合、以下を依頼してください:

```shell
traceroute gitlab.com
curl https://gitlab.com/cdn-cgi/trace
curl https://gitlab.com/cdn-cgi/trace
curl -svo /dev/null https://gitlab.com
```

### ファイル破損の報告

リポジトリが破損している場合、マージリクエストページで `503` エラーが発生することもあります。確認するには、破損したリポジトリにプッシュすると以下のように表示されることがあります:

```plaintext
data/repositories/@hashed/ee/98/ee98b34f343b4e48106fff666d12b61f23f.git/objects/f7/e7f4782) is corrupt
```

お客様が上記のようなエラーを報告している場合、以下の手順でファイルサーバーが影響を受けたかを確認します:

1. 影響を受けたリポジトリのプロジェクト URL を取得します。
1. `https://gitlab.com/admin/projects/user-namespace` という URL でプロジェクト管理ページを開きます。
1. `gitaly-storage-name` を確認してリポジトリのサーバーを特定します。
1. [GitLab Infrastructure Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues) で関連する Issue を検索します。
1. ファイルサーバーに関連する Issue が見つかった場合、Issue にチケット番号を投稿してインフラエンジニアが調査できるようにします。

### ワークフロー

以下のワークフローでは、特定の `5XX` エラーを引き起こしたイベントを Kibana や Sentry のログから検索する方法をガイドします。

#### Kibana の検索

[Kibana ワークフローの 500 固有セクション](/handbook/support/workflows/kibana#searching-kibana-for-500-level-errors) を参照してください。

#### Sentry の検索

[Sentry ワークフロー](/handbook/support/workflows/sentry) を参照してください。

Kibana と Sentry を使った 500 エラー調査のビデオウォークスルーは、[ここ](https://youtu.be/o02t3V3vHMs) （GitLab Unfiltered）で確認できます。

#### 結果を Issue にする

Kibana か Sentry で結果が見つかったら、以下を行います。

1. できるだけ多くの情報を集めます。Kibana か Sentry で見つかったログへのリンクを含む内部ノートをチケットに作成します。
1. [GitLab Issue トラッカー](https://gitlab.com/gitlab-org/gitlab) で重複または関連する Issue を検索します。
1. Issue が既知か未知かを確認し、それに従って進めます: [Issue が既知の場合](#issue-is-known) または [Issue が未知の場合](#issue-is-unknown)。

Priority 1/Severity 1 の状況では、[dev エスカレーション](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/) を検討します。

#### ユーザーへの応答

##### Issue が既知の場合 {#issue-is-known}

Issue が既知の場合、対応する Issue が GitLab Issue トラッカーにあるはずです。Sentry に Issue へ変換されたエントリが見つかった場合、Sentry のヘッダー内に Issue 番号が表示されているはずです:

![Sentry linked issue](/images/support/sentry-linked-issue.png)

Issue 番号をクリックすると Issue に直接移動でき、そこにコメントを残して Zendesk チケットへのリンクを提供できます。

その後、ユーザーに Issue の原因に関する情報を返答し、リンクを提供して、更新を購読するよう案内します。

##### Issue が未知の場合 {#issue-is-unknown}

###### Sentry で見つかった Issue

1. Issue ページの「Create GitLab Issue」ボタンを使って、Issue を GitLab Issue に変換します。**注:** Sentry の GitLab 連携には既知の Issue があり、`gitlab-org` グループ配下のプロジェクト数が多いためこれが機能しないことがあります。
   その結果、ほとんどの場合、GitLab Issue を手動で作成する必要があります。
1. Issue にコメントして Zendesk チケットへのリンクを提供します。
1. 必要に応じて `customer`、[priority and severity](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#severity-labels)、適切な DevOps ステージなどの追加ラベルを追加します。
1. ユーザーに Issue の原因に関する情報を返答し、リンクを提供して、更新を購読するよう案内します。

###### Kibana で見つかった Issue

1. Kibana ログへの [「short url」](https://www.elastic.co/guide/en/kibana/3.0/sharing-dashboards.html) を取得します。
1. 新しい [GitLab](https://gitlab.com/gitlab-org/gitlab) Issue を作成し、Zendesk チケットへのリンクと Kibana ログを必ず含めます。
1. `bug` ラベルと、必要に応じて `customer`、[priority and severity](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#severity-labels)、適切な DevOps ステージなどを追加します。
1. ユーザーに Issue の原因に関する情報を返答し、リンクを提供して、更新を購読するよう案内します。

>**注:** **5xx** エラーが Kibana で見つかった場合、それに対応する Sentry の Issue がある可能性が高いです。その場合は `json.correlation_id` フィルターを追加し、Sentry でその値を `correlation_id:` で検索してください。
