---
title: "Runway"
description: "Runway は GitLab の内部 Platform as a Service であり、チームがサービスを迅速かつ安全にデプロイ・運用できるようにすることを目指しています。"
upstream_path: /handbook/engineering/infrastructure-platforms/tools/runway/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T05:26:36Z"
translator: claude
stale: false
---

## Runway とは？

Runway は GitLab の内部 Platform as a Service 実装であり、チームがサービスを迅速かつ安全にデプロイ・運用できるようにすることを目指しています。モニタリングとスケーリングの組み込み機能により、開発チームは機能の提供と改善に集中できます。

Runway は [Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) チームによってメンテナンスされています。

## 初期目標

- 開発チームが Runway の提供するインフラ、スケーリング、モニタリングの組み込み機能を使ってサービスをデプロイできるようにする。
- ステートレスであり、需要に応じてオートスケールできるサテライトサービスに焦点を当てる。
- GitLab の既存ツール（例: Pipeline）と統合して、シームレスなエクスペリエンスを実現する。

## Runway 上にデプロイされているサービス

- [AI-gateway](/handbook/engineering/architecture/design-documents/ai_gateway/)
- [Duo Workflow](/handbook/engineering/architecture/design-documents/duo_workflow/)
- [PVS Service](https://docs.gitlab.com/administration/cicd/external_pipeline_validation)
- [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse)
- [glgo](https://gitlab.com/gitlab-org/auth/glgo)
- [Runway Docs](https://docs.runway.gitlab.com/)
- [Topology Service](/handbook/engineering/architecture/design-documents/cells/topology_service/)
- [Contributors Platform](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com)
- [GitLab Secrets Manager](/handbook/engineering/architecture/design-documents/secret_manager)

## マイルストーン

## ドキュメント

[Runway ドキュメント](https://docs.runway.gitlab.com/)

### Runway は私のサービスに適していますか？

はい！Runway は新しい取り組みであるため、いくつかの制限がある場合があります。ただし、チームがお客様の具体的な要件を理解することが重要です。それによって、あらゆるサービスをデプロイできる堅牢なシステムを構築できます。

### Runway を通じてサービスをデプロイするには？

以下のリンクからチームにお問い合わせください。

### さらに詳しいサポートを受けるには？

Runway が役に立てるかどうかの理解、またはフィードバックや質問がある場合は、[Issue](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/new) を作成するか、[#f_runway](https://gitlab.slack.com/archives/C05G970PHSA) にメッセージを送ることで、[Runway](/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/) チームにお問い合わせください。

### 技術仕様

- [Epic: Runway - AI イノベーションをサポートするプラットフォームツール](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969)
- [Runway Docs: アーキテクチャ](https://gitlab.com/gitlab-com/gl-infra/platform/runway/docs/-/blob/master/architecture.md)
- [Blueprint: GitLab Service-Integration: AI and Beyond](https://docs.gitlab.com/ee/architecture/blueprints/gitlab_ml_experiments/)

## リソース

- Slack チャンネル: [#f_runway](https://gitlab.slack.com/archives/C05G970PHSA)
- [Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/)
- [プロジェクトリポジトリ](https://gitlab.com/gitlab-com/gl-infra/platform/runway)
- [Youtube: Runway デモ](https://www.youtube.com/playlist?list=PL05JrBw4t0Kosd76voQ6tbQbW-YnlIuBy)
