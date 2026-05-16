---
title: Analytics Instrumentation - モニタリングとトラブルシューティング
description: "Analytics Instrumentation グループは、GitLab プロジェクト全体でプライバシーに配慮したプロダクトアナリティクスの機能拡張と実装に取り組んでいます"
upstream_path: /handbook/engineering/data-engineering/analytics/analytics-instrumentation/monitoring_troubleshooting/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:53:44Z"
translator: claude
stale: false
lastmod: "2025-08-18T10:18:01-07:00"
---

このページは、[Analytics Instrumentation グループ](/handbook/engineering/data-engineering/analytics/analytics-instrumentation)が提供する内部アナリティクスインフラストラクチャのモニタリングとトラブルシューティングに役立つ情報とリンクを掲載することを目的としています。

## Snowplow

### モニタリング

Snowplow の使用状況をモニタリングするために使用するツールの簡単なビデオ概要については、[この内部動画](https://www.youtube.com/watch?v=NxPS0aKa_oU)をご確認ください（視聴するには GitLab Unfiltered にログインする必要があります）。

- [Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2358326/views)では、データウェアハウスにインポートされた良好なイベントと不良なイベントの数、および不良なイベントの最も一般的なエラーメッセージの種類に関する情報を確認できます。
- [Analytics Instrumentation Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-intelligence-main/product-intelligence-product-intelligence?orgId=1)は、GitLab.com インスタンスからコレクターフリートに送信されるバックエンドイベントを監視します。このダッシュボードでは以下の情報を確認できます:
  - Snowplow コレクターに正常に到達したイベントの数。
  - Snowplow コレクターへの到達に失敗したイベントの数。
  - 送信されたバックエンドイベントの数。
- [AWS CloudWatch ダッシュボード](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=SnowPlow;start=P3D)。ダッシュボードを開く前に、Okta 経由で AWS にログインする必要があります。処理パイプライン内のイベントの状態を監視します。パイプラインは Snowplow コレクターから始まり、エンリッチャーと疑似匿名化を経て、S3 バケットへの永続化まで続きます。S3 から、イベントは Snowflake データウェアハウスにインポートされます。
- [Snowflake](https://app.snowflake.com/) はアナリティクスデータの最終的な保存先で、クエリを実行できます。Snowflake でのデータアクセスの基本的な入門については[この動画](https://www.youtube.com/watch?v=0RGnh7eErDs)をご覧ください。

### アラート

アラートは、Snowflake のデータに基づく場合は [Monte Carlo](https://getmontecarlo.com/settings/notifications2/audiences/f61407c9-6b9f-4cef-8fb8-fbd8a6051919) に、Snowplow AWS インフラに関連する場合は [AWS Cloud Watch](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:) に記録されます。

`#g_analytics_instrumentation_alerts` Slack チャンネルの通知を有効にすることで、受信アラートをすぐに把握できます。

#### 不良イベント数の違反

##### 症状

[Monte Carlo アラート](https://getmontecarlo.com/monitors/c8e6772d-39dd-4dd7-946d-7daeec72dbe4)を通じて `#g_analytics_instrumentation_alerts` Slack チャンネルへ警告が届きます。これは、直近 1日間における不良イベントの割合が通常よりも高くなっていることを示しています。

##### 問題の特定

まず、Snowplow の S3 バケットから取り込まれた生データに基づく [Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2358326/views)を確認します。以下の点を確認してください:

1. 不良イベントの数が異常に多いのか、それとも良好なイベントの数が通常より少ないのかを確認します。後者の場合、良好なイベントの未アラート減少を示しているため、[良好なイベントの量の減少アラート](#good-events-volume-drop)を続けてください。
1. 影響を受けた期間で最も増加した短縮メッセージを特定します（[チャート](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventVolumeDebugging/BadEventmessages?:iid=1)参照）。これがエラーの原因である可能性が高いです。
1. メッセージが「Payload with vendor」で始まる場合、Snowplow がパス内の最初のフォルダーをベンダーとして解釈するため（例: `https://snowplow-collector.com/snowplow` の場合、ベンダーは `snowplow`）、何らかのボットによるディレクトリスキャンによって引き起こされている可能性があります。これらのエラーは数日以内に解消されれば無視できます。
1. 短縮されたエラーメッセージが何が問題かを直接教えてくれているかどうかを確認します。

##### 問題のあるイベントのデバッグ

短縮されたメッセージが有効なイベント送信の試みによって引き起こされたエラーのように見える場合、実際に送信されたリクエスト/イベントを詳しく調べる必要があります。特定のエラーメッセージに対するイベントのサンプルを取得するには、Snowflake で以下のような SQL クエリを使用します:

```sql
SELECT
    JSONTEXT:errors[0]:message as message,
    JSONTEXT:line::text as base_64_request
FROM RAW.SNOWPLOW.GITLAB_BAD_EVENTS
WHERE uploaded_at > DATEADD(Day ,-1, current_date)
AND STARTSWITH(JSONTEXT:errors[0]:message::text, '[shortened message]')
LIMIT 10
```

`shortened_message` を最も多くのエラーを引き起こしているメッセージに置き換えてください。
`echo '<base_64_request>' | base64 -D` を使用してリクエストをデコードし、パターンを探すことができます。

[この動画](https://youtu.be/1GyUera6uH4)では、Snowplow での不良イベントのデバッグセッションを紹介しています。

#### 良好なイベントの量の減少 {#good-events-volume-drop}

##### 症状

[Monte Carlo アラート](https://getmontecarlo.com/monitors/c16474d8-4660-4be2-9be6-5af3be25bd48)または [Cloud Watch アラーム](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/Low+good+events+record+volume)を通じて `#g_analytics_instrumentation_alerts` Slack チャンネルへ警告が届きます。これは、新しく受信した Snowplow イベントの量が実現可能なしきい値を下回っていることを示しています。

##### 問題の特定

まず、Snowplow データパイプラインのどの段階で減少が発生しているかを特定する必要があります。
CloudWatch 上の [Snowplow ダッシュボード](https://console.aws.amazon.com/systems-manager/resource-groups/cloudwatch?dashboard=SnowPlow&region=us-east-1#)から始めます。
CloudWatch にアクセスできない場合、GitLab チームメンバーはこちらに類似したアクセスリクエスト Issue を作成できます: `https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/9730`。
CloudWatch ダッシュボードで時間範囲を過去 4週間に設定し、経時的なシステム特性の全体像を把握します。次に以下のチャートを確認します:

1. `ELB New Flow Count` と `Collector Auto Scaling Group Network In/Out` - それぞれ、ロードバランサー経由のコレクターへの接続数とコレクターが処理するデータ量（バイト）を示します。そこに減少が見られる場合、GitLab アプリケーションからのイベント送信量が少なくなっていることを意味します。詳細については[アプリケーションレイヤーガイド](#troubleshooting-gitlab-application-layer)を参照してください。
1. `Firehose Records to S3` - S3 バケットに保存されたイベントレコードの数を示します。このチャートで減少が見られるが、1番のチャートでは見られない場合、問題は AWS インフラストラクチャレイヤーにあります。[AWS レイヤーガイド](#troubleshooting-aws-layer)を参照してください。
1. 前のチャートのいずれでも減少が見られない場合、問題はデータウェアハウスレイヤーにあります。[データウェアハウスレイヤーガイド](#troubleshooting-data-warehouse-layer)を参照してください。

##### GitLab アプリケーションレイヤーのトラブルシューティング {#troubleshooting-gitlab-application-layer}

アプリケーションレイヤーで発生する減少は何らかの問題の症状である可能性がありますが、通常のアプリケーションライフサイクル、アナリティクスインストルメンテーションや実験トラッキングへの意図的な変更、あるいはユーザーベースの大きい一部地域での祝日の結果である可能性もあります。根本的な問題があるかどうかを確認するには、以下の点を確認できます:

1. [Analytics Instrumentation Grafana ダッシュボード](https://dashboards.gitlab.net/d/product-intelligence-main/product-intelligence-product-intelligence?orgId=1)を確認して、正常に送信されたイベントに減少があるかどうかを確認します。
1. GitLab.com を閲覧しネットワークタブで `snowplow` を検索することで、フロントエンドイベントが正しく発火しコレクターに到達できるかを確認します。
1. [Web Apdex ダッシュボード](https://dashboards.gitlab.net/d/general-service/general3a-service-platform-metrics?orgId=1&from=now-2d&to=now)で 1秒あたりのリクエスト数を確認して、トラフィックが通常通りの動作をしているかどうかを確認します。
1. 報告されるイベント数の減少を引き起こす可能性のある MR がマージされていないか確認します。[~"analytics instrumentation"](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&label_name[]=analytics%20instrumentation) と [~"growth experiment"](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&label_name[]=growth%20experiment) ラベルの MR に注目してください。
1. [Kibana のログ](https://log.gprd.gitlab.net/app/discover#)で `{ "query": { "match_phrase": { "json.message": "failed to be reported to collector at" } } }` フィルターを使用して、失敗したイベントがログに記録されていないか確認します。

Snowplow イベント量の予期しない減少について調査を実施しました。

GitLab チームメンバーはこちらの機密 Issue で詳細を確認できます: `https://gitlab.com/gitlab-org/gitlab/-/issues/335206`

##### AWS レイヤーのトラブルシューティング {#troubleshooting-aws-layer}

AWS レイヤーはインフラチームによって管理され、[Terraform リポジトリ](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/aws-snowplow)を通じて設定されています。

AWS レイヤーがイベントの減少の原因である可能性が高い場合、オンコール中の SRE の助けが必要です。
重要度 S4、プロジェクトを `gitlab` として[公式インシデントを宣言](https://docs.gitlab.com/ee/operations/incident_management/slack.html#declare-an-incident)し、注意を促してください。

#### Snowplow エンリッチャーの遅延

**Snowplow Raw Good Stream Backing Up** のアラートがある場合、メール通知を受け取ります。これは Snowplow エンリッチャーが Snowplow イベントの量に対してスケールアップが十分でないために発生することがあります。

遅延が 48 時間を超えると、データが失われます。

オンコール中の SRE にアラートを出すには、重要度 S4、プロジェクトを `gitlab` として[公式インシデントを宣言](https://docs.gitlab.com/ee/operations/incident_management/slack.html#declare-an-incident)してください。

過去に実施した調査:

- [Snowplow ページビューの急激な減少](https://gitlab.com/gitlab-org/gitlab/-/issues/268009)
- [`snowplow.trx.gitlab.net` への接続不能](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/5073)

##### データウェアハウスレイヤーのトラブルシューティング {#troubleshooting-data-warehouse-layer}

[Data チーム](/handbook/enterprise-data/)に連絡してデータウェアハウスの現在の状態を確認してください。ハンドブックページには[連絡先の詳細のセクション](/handbook/enterprise-data/#how-to-connect-with-us)があります。

##### "不良" として誤ってマークされたイベントの回復

誤って送信された不良なイベントによって、イベントが "不良" として誤ってマークされることがあります。これは、新しいプロパティがコンテキストに追加されたような[この事例](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17782)のように、イベントスキーマの更新後に最も起きやすい状況です。
このようなイベントは再処理によって回復できます。

1. イベントを送信する方法を選択します:
   1. データ量が数ギガバイトの場合、ローカルマシンを使用できます。
   2. HTTPリクエストの数が多くなるため、プロセスを高速化するために Snowplow コレクターと同じリージョンの EC2 インスタンスを使用することも選択肢の一つです。
      並行イベント処理は比較的 CPU 負荷が高いため、少なくとも `x2.large` インスタンスを検討してください。
      非圧縮イベントはダウンロードした圧縮ファイルより約 70% 多くのスペースを取るため、少なくとも 300Gb の HDD ボリュームを検討してください。
      Linux で gem の依存関係をインストールするには、追加パッケージが必要な場合があります。例えば、Ubuntu では gcc と make のために `build-essential` が必要です。
2. `aws` CLI を使用して `enriched-bad` S3 フォルダーからイベントをダウンロードします: `aws s3 cp s3://gitlab-com-snowplow-events/enriched-bad/{year}/{day}/{day} {local_folder} --recursive`。次にアーカイブを解凍します: `gunzip -r .`。
3. [snowplow anonymizer リポジトリ](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/snowplow-pseudonymization)をチェックアウトします。これにはバイナリ base64 エンコードペイロードをデシリアライズするために必要なクラスが含まれています。
4. ペイロードを修正して再送信するための処理スクリプトを作成します。重要な点として:
`collector_tstamp` はイベントを再送信した後に異なる値になります。データの破損を避けるために、このフィールドは DW では `dvce_sent_tstamp` に設定する必要があります。
   [サンプルスクリプト](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/blob/master/scripts/bad_events_reprocessing.rb)。

### Snowplow イベント内の PII または機密データ

Snowplow イベントに個人情報または機密データが含まれている疑いがある場合:

1. [Analytics Instrumentation テンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Analytics%2520Instrumentation%2520Incident&issue%5Bissue_type%5D=incident)を使用してインシデント Issue を作成します。
2. インシデント Issue を自分、エンジニアリングマネージャー、プロダクトマネージャーに割り当てます。
3. [severity::1](/handbook/product-development/how-we-work/issue-triage/#severity) と [Analytics Instrumentation::Incident-High Severity](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/#incident-creation) ラベルを追加します。
4. [#g_analyze_analytics_instrumentation](https://gitlab.slack.com/archives/CL3A7GFPF)、[#data](https://gitlab.slack.com/archives/C8D1LGC23)、[#data-rd-analytics](https://gitlab.slack.com/archives/C02C82WDP0U) の各 Slack チャンネルにメッセージを投稿します。
5. インシデント解決プロセスと SLO については、Analytics Instrumentation の[インシデント管理プロセス](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/#incident-resolution)に従ってください。

## Service Ping

### モニタリング

現在、誤動作を監視・調査するためのいくつかのダッシュボードがあります:

[Service Ping Health](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics)。最も重要なチャート:

1. Recorded Service Pings Created Per Week（週あたりの Service Ping 作成数の記録）- 最近の週に受信した異常なイベント量を素早く特定できます。
2. Service Ping payloads by major version（メジャーバージョン別 Service Ping ペイロード）- 特定バージョンの欠落した Service Ping を素早く特定できます。
3. Service Ping fail reasons（Service Ping の失敗理由）- Service Ping の生成中に記録されたエラーメッセージの一覧。

### アラート

[Data](/handbook/enterprise-data/) チームとその [Monte Carlo アラート](/handbook/enterprise-data/platform/monte-carlo/)によって通知されます。

### 問題の特定

まず、Service Ping データパイプラインのどの段階で減少が発生しているかを特定する必要があります。

Tableau 上の [Service Ping Health ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics)から始めます。

減少がいつ始まったかを検出し始めるための例として、[このクエリ](https://gitlab.com/gitlab-org/gitlab/-/issues/347298#note_836685350)を使用できます。

### GitLab アプリケーションレイヤーのトラブルシューティング

過去に Service Ping ペイロードイベント量の予期しない減少について調査を行いました。
GitLab チームメンバーは[この機密 Issue](https://gitlab.com/gitlab-data/analytics/-/issues/11071)で詳細を確認できます。

### VersionApp レイヤーのトラブルシューティング

[エクスポートジョブ](https://gitlab.com/gitlab-org/gitlab-services/version.gitlab.com/-/tree/main/#data-export-using-pipeline-schedules)が成功しているかどうかを確認します。

[Service Ping Health ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics)で Service Ping のエラーを確認します。

### Google Storage レイヤーのトラブルシューティング

[Google Storage](https://console.cloud.google.com/storage/browser/cloudsql-gs-production-efd5e8-cloudsql-exports;tab=objects?project=gs-production-efd5e8&prefix=&forceOnObjectsSortingFiltering=false)にファイルが存在するかどうかを確認します。

### データウェアハウスレイヤーのトラブルシューティング

[Data チーム](/handbook/enterprise-data/)に連絡してデータウェアハウスの現在の状態を確認してください。ハンドブックページには[連絡先の詳細のセクション](/handbook/enterprise-data/#how-to-connect-with-us)があります。

### Salesforce との統合のトラブルシューティング

Version app の [Sidekiq ジョブ](https://version.gitlab.com/sidekiq/)が失敗していないこと、キューが正常であることを確認します。
