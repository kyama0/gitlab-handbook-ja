---
owning-stage: "~devops::verify"
title: "Runnerインテグレーションのための Steps Runner デプロイとライフサイクル管理"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/gitlab_steps/service-deployment/"
upstream_sha: "94fe412d61c1d75e0a7a0fe4b90222476478db38"
translated_at: "2026-04-27T11:51:33Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

このブループリントが扱う内容は以下のとおりです:

- Step Runner バイナリをターゲット環境へデプロイまたは注入すること。これには Docker、Kubernetes、およびインスタンスエクゼキューター向けのビルドコンテナが含まれます。
- 上記の環境で Step Runner gRPC サービスを起動すること。
- インストール時に必要な設定の実施。
- クラッシュ時のサービス再起動。
- Step Runner サービスが長期間稼働する環境における Step Runner バイナリのアップグレード。
- Step Runner サービスが使用するリソースの管理。
