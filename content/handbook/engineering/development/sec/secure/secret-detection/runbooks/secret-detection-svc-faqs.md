---
title: "Secret Detection サービス: 一般的な FAQ"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-detection-svc-faqs/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

このページには Secret Detection サービスに関する一般的な質問への回答が含まれています。このランブックは、サービスの技術的な側面を理解したいすべての人が使用できます。

## 一般的な FAQ

 1. **サービスはどこにデプロイされていますか？**

    サービスはコンテナを管理するために内部で [Google Cloud Run](https://cloud.google.com/run/docs/overview/what-is-cloud-run) を使用する [Runway](https://docs.runway.gitlab.com/) にデプロイされています。

 2. **サービスはいくつの環境にデプロイされますか？**

    サービスはステージング（`https://secret-detection.staging.runway.gitlab.net`）と本番（`https://secret-detection.production.runway.gitlab.net`）にデプロイされます。

 3. **本番環境ではどのリージョンにデプロイされますか？**

    サービスは GitLab Rails モノリスがデプロイされているのと同じリージョン `us-east1` のみにデプロイされます。

 4. **サービスは環境変数を使用しますか？**

    はい。現在、アプリケーションが動作しているアクティブな環境を決定するための `ENV`（非機密）変数と、API リクエストに埋め込まれたトークンを照合するための `AUTH_TOKEN`（機密）変数を使用しています。

 5. **サービスの環境変数はどこに保存されており、誰が変更できますか？**

    非機密変数は[プロジェクトリポジトリ](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/tree/main/.runway?ref_type=heads)の `env-<environment>.yml` ファイルに保存されており、機密変数は [Hashicorp Vault](https://vault.gitlab.net/ui/) に保存されています。現在、~"group::secret detection" チームが Vault へのアクセス権を持っています。

 6. **Vault の SD サービス変数はどこで見つけられますか？**

    ステージング環境については[こちら](https://vault.gitlab.net/ui/vault/secrets/runway/kv/list/env/staging/service/secret-detection/)、本番環境については[こちら](https://vault.gitlab.net/ui/vault/secrets/runway/kv/list/env/production/service/secret-detection/)で見つけられます。

 7. **サービスの API は公開アクセス可能ですか？**

    環境によります。現在、ステージング環境のサービスは公開アクセス可能で、後でプライベートに変更する可能性があります。セキュリティリスクを軽減するために、本番環境のサービスは GitLab Rails モノリスインスタンスのみからアクセス可能になっています。

 8. **サービスが公開する API のカテゴリは何ですか？**

    サービスは Secret Detection スキャン用の gRPC エンドポイントのみを公開しています。詳細については[こちら](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#secret-detection-scan-unary-rpc-call)をお読みください。

 9. **サービス API にアクセスするための認証プロセスはありますか？**

    はい。クライアントがリクエストにトークンを埋め込み、それをサービスの `AUTH_TOKEN` と照合するという基本的なトークンベースの認証があります。認証は Secret Detection 関連の RPC エンドポイントのみに適用されることに注意してください。詳細については[こちら](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#calling-grpc-endpoints-from-terminal)をお読みください。

10. **サービスが動作していることを確認するにはどうすればよいですか？確認するためのヘルスチェックエンドポイントはありますか？**

    サービスはサービスの健全性を確認するために Runway が使用するヘルスチェック RPC エンドポイントを公開しています。[こちら](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#health-check)で見つけることができます。ただし、本番環境では、インスタンスが公開アクセス可能でないため、ヘルスチェックの失敗についてはログに頼る必要がある場合があります。あるいは、Rails モノリスがサービスにアクセスできるため、[teleport コンソール](https://production.teleport.gitlab.net/)からアクセスすることもできます。

11. **SD サービスにアクセスする GitLab サービスはどれですか？**

    Rails モノリスサービスのみが SD サービスにアクセスしてスキャンを呼び出します。

12. **サービスのログにはどこからアクセスできますか？**

    [Google Cloud Run ログ](https://console.cloud.google.com/run/detail/us-east1/secret-detection/logs?project=gitlab-runway-production)からアクセスできます。カスタムフィルタリング/クエリ機能を取得するために [GCP ログエクスプローラー](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%0Aresource.labels.service_name%20%3D%20%22secret-detection%22%0Aresource.labels.location%20%3D%20%22us-east1%22%0A%20severity%3E%3DDEFAULT;storageScope=project;cursorTimestamp=2024-09-26T08:37:16.966685Z;duration=PT1H;aroundTime=2024-09-26T08:37:16.966523Z?project=gitlab-runway-production)からもログを確認できます。

13. **モニタリング目的でサービスのダッシュボードにはどこからアクセスできますか？**

    ステージング環境については[こちら](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?orgId=1&var-PROMETHEUS_DS=mimir-runway&var-environment=gstg&var-type=secret-detection&var-region=All&from=now-30d&to=now)、本番環境については[こちら](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?orgId=1&var-PROMETHEUS_DS=mimir-runway&var-environment=gstg&var-type=secret-detection&var-region=All&from=now-30d&to=now)で見つけることができます。

14. **API にレート制限は追加されていますか？**

    アプリケーションレベルのレート制限は追加されていませんが、Cloud Run はサービスが対象となるインスタンスの[レート制限](https://cloud.google.com/run/quotas#networking_limits)を定義しています。

15. **可用性を決定するためのサービスのサービスレベル指標（SLI）は何ですか？**

    Runway のデフォルト SLI（[`runway_ingress`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L51)）を使用しており、Apdex スコア、リクエストレート、エラーレートが含まれています。

16. **サービスに設定されているサービスレベル目標（SLO）は何ですか？**

    サービスの SLO は Apdex スコアの 99.9%（`0.999`）とエラー比率の 99.9%（`0.999`）を満たすように設定されています。これらは Runway によって設定されたデフォルトの SLO 値であり、サービスに十分と思われるためデフォルト値のままにしています。必要な場合は[こちら](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/services/secret-detection.jsonnet)で変更できます。

17. **SLO 違反が発生した場合にアラートは設定されていますか？**

    はい。アラートは[こちら](https://dashboards.gitlab.net/alerting/list?search=secret-detection&view=grouped)に設定されています。アラートは、Apdex 違反、エラーレート違反、トラフィック停止（サーバーシグナルあり、トラフィックなし）、およびトラフィック不在（ヘルスチェックを含むサーバーシグナルなし）について過去30分間でトリガーされます。

18. **SLO 違反が発生した場合はどうなりますか？**

    SLO 違反インシデントが発生した場合、alertmanager はすべてのアラートを `#feed_alerts-general` Slack チャンネルに発送し、そのコピーを `#g_secure-secret-detection` Slack チャンネルにも送信します。

19. **トリガーされたアラートにはどの深刻度が割り当てられますか？**

    サービスは [Runway の SLI デフォルト](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet)を借用しているため、デフォルトには[深刻度を S4 に設定すること](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L18)も含まれています。必要に応じて異なる深刻度に変更できます（Readiness Review の承認が必要）。

20. **SLO 違反が発生した場合、SRE チームにページが送られますか？**

    いいえ。深刻度 S1 または S2 のアラートのみが SRE チームにページが送られます。`group::secret detection` チームがインシデントの監視に責任を持ちます。

#### 追加参考資料

* [ドキュメント](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/blob/main/README.md?ref_type=heads)

* [アーキテクチャ](../../../../../../engineering/architecture/design-documents/secret_detection/decisions/004_secret_detection_scanner_service.md)

* [ベンチマーク](https://gitlab.com/gitlab-org/gitlab/-/work_items/468107)

* [モニタリング](./secret-detection-svc-monitoring.md)
