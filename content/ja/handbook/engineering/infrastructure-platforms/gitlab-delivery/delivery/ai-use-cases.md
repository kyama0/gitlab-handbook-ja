---
title: リリース・デプロイの LLM/AI ユースケース
summary: このページでは、リリースとデプロイにおける AI/LLM の可能なユースケースについて概説します。これらは、繰り返しのタスクを軽減し、Release Manager が定期的に行う分析を支援し、またはデプロイプロセスに向けて取り組んでいる開発上の改善を支援することが期待されます。一部のケースでは、エージェント型エージェントが機能する必要があります。
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/ai-use-cases/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## 提案されたユースケース

### 1. Release Manager のハンドオーバー支援

Release Manager は複雑な日々のハンドオーバーを行う必要があります。Incident.io はインシデント Issue に集約される優れたサマリーを提供します。Duo Agent に `~incident` ラベルを持つ本番 Issue キューを確認させ、Release Manager にとって意味のあるサマリー項目や示唆を持つインシデントを探させることができます。各地域のハンドオフ（APAC → EMEA、EMEA → AMER、AMER → APAC）ごとに Issue にサマリーコメントを追加することができます。

### 2. デプロイブロッカーなど週次リリースメトリクスの要約と読み上げ支援

Delivery の週次ミーティングでは、先週の状況について[メトリクス](https://about.gitlab.com/handbook/engineering/deployments-and-releases/#weekly-delivery-metrics-review)の読み上げを行っています。そのステップの一つは、[デプロイブロッカー](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1496)の分類・説明・トレンド分析です。この作業は現在、手動で行われています。要約作業は、指定したリリースタスク Issue（[例](https://gitlab.com/gitlab-org/release/tasks/-/issues/21317)）のサマリーを依頼することで実施できるかもしれません。

### 3. デプロイメントマネージャー業務を効率化するための chatops の将来的な拡張

私たちはデプロイメントマネージャーのような役割を担う chatops の拡張を検討しています。新しい chatops コマンドを追加する必要があります（[1](https://gitlab.com/gitlab-org/release/tasks/-/merge_requests/133#note_2746357795)、[2](https://gitlab.com/gitlab-org/release/tasks/-/merge_requests/133#note_2747860135)）。その開発には Duo Agent を活用することを試みるべきです。

### 4. バックポート作業の自動化

[メンテナンスポリシーのソフトローンチ](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/21474)の拡張に伴い、開発チームがサポートされているバージョンへのバックポートをより容易に行えるようにする方法を引き続き検討しています。その作業の一部は、開発中の現在のバージョンのバグ修正後に安定ブランチへの MR を作成することです。Duo Agent がこれらのバックポート MR の作成を支援できるかどうかを検討しています。

### 5. リリースドキュメントの検索支援

Release&Deploy チームは、コード変更がさまざまな種類のリリースにどのように反映されるかについて、知識共有とエンジニアのガイドのために https://gitlab.com/gitlab-org/release/docs に広範なドキュメントを持っています。GitLab Duo Agentic Chat を使用することで、質問と回答のやり取りを減らし、ステークホルダーと Release&Deploy チームメンバーの両方の時間を節約できます。
