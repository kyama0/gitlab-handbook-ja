---
title: "Secret Detection サービス: モニタリング"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-detection-svc-monitoring/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-17T10:51:38-06:00"
---

### このランブックを使用するタイミング

このランブックは、[Secret Detection サービス](../../../../../../engineering/architecture/design-documents/secret_detection/#phase-2---standalone-secret-detection-service)を監視する際に使用することを意図しています。Gitlab.com や Dedicated で有効化された際に発生する可能性がある信頼性の問題やパフォーマンスの低下を特定・軽減するためのものです。

### 何を監視するか？

主にシステムメトリクスとサービス内で発生する繰り返しエラーを監視する必要があります。以下は絞り込まれた監視対象のリストです。

* **リソース飽和度**: 飽和度は現在利用されている有限リソースの比率の指標です。
* 集約されたサービスレベル指標（SLI）
  * **Apdex スコア**: Apdex はサービスの許容可能な時間内に完了するリクエストの指標です。
  * **エラー比率**: エラーレートは1秒あたりの未処理サービス例外の指標です。可能な場合はクライアントエラーを除外します。
  * **リクエストレート**: 操作レートは、このサービス内のすべてのコンポーネントで処理されているすべてのリクエストの合計です。単一のユーザーリクエストが複数のコンポーネントへのリクエストにつながる場合があることに注意してください。
* サービスによって発生する繰り返しのアプリケーションエラー。

### サービスをどのように監視するか？

上記の監視対象のほとんど（リソース飽和度と集約 SLI）は、[**サービス概要ダッシュボード**](https://dashboards.gitlab.net/d/secret-detection-main/secret-detection3a-overview?orgId=1)で確認できます。

繰り返しのアプリケーションエラーは通常、GitLab エラーモニタリング/[Sentry](https://new-sentry.gitlab.net/organizations/gitlab) ツールで確認できます。ただし、まだサービスとエラーモニタリングツールを統合していません。統合の進捗を追跡するには、この [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/499067) を参照してください。

それまでの間、アプリケーション関連のエラーを探すために `ERROR` レベルのログメッセージをログで確認してください。**ログ**は[こちら](https://console.cloud.google.com/run/detail/us-east1/secret-detection/observability/logs?project=gitlab-runway-production)で確認できます。

### サービスの SLO 違反があるかどうかはどうすれば分かりますか？

サービスは SLO 違反が発生した場合に Slack アラートを受信します。現在、alertmanager によって複数のメトリクスを追跡する[6つのアラート](https://dashboards.gitlab.net/alerting/list?search=secret-detection)が設定されています。

SLO 違反が発生した場合、alertmanager は `#feed_alerts-general` と `#g_secure-secret-detection` Slack チャンネルにアラートを送信します。

**注意**: alertmanager はこのサービスの SLO 違反が発生した場合、オンコール SRE チームメンバーに**ページを送信しません**。サービスは Runway のデフォルト SLI を[継承](https://gitlab.com/gitlab-com/runbooks/-/blob/0df5f62959e813330c572465b20879b07b886f46/metrics-catalog/services/secret-detection.jsonnet#L6-10)しており、それがアラートの深刻度を `S4` に[設定](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L18)します。`S1` または `S2` としてマークされたアラートのみがオンコールにページが送られます。つまり、Secure::Secret Detection チームが Slack アラートに目を向けることでサービス中断インシデントへの対応に責任を持ちます。

alertmanager が Slack アラートのトリガーに失敗した場合、[`alerts ダッシュボード`](https://alerts.gitlab.net/#/alerts?silenced=false&inhibited=false&active=true&filter=%7Btype%3D%22secret-detection%22%7D)でサービスに対して_アクティブに_発動しているアラートを常に確認できます。

### サービスが発行するログはどのように確認するか？

Runway は GCP Cloud Logs を使用してサービスが発行するログを管理しています。サービスのログは[こちら](https://console.cloud.google.com/run/detail/us-east1/secret-detection/observability/logs?project=gitlab-runway-production)で確認できます。

#### 追加参考資料

* [ドキュメント](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/blob/main/README.md?ref_type=heads)

* [アーキテクチャ](../../../../../../engineering/architecture/design-documents/secret_detection/decisions/004_secret_detection_scanner_service.md)

* [サービス FAQ](./secret-detection-svc-faqs.md)

* [Runway モニタリングスタック](https://docs.runway.gitlab.com/reference/observability/)
