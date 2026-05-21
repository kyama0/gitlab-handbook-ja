---
title: "Distribution チームのインフラストラクチャ: ARM"
description: "ARMパッケージのビルドに使用するインフラのハードウェアと使用方法について説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/arm/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## ハードウェアプロバイダー

現在、ARM64およびRaspberry PiランナーインスタンスにはAWS Gravitonを使用しています。[distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)チームの全メンバーは、自分のクレデンシャルでログインできるはずです。

## ARM関連タスクに取り組むチーム

ARMのサポートを提供するために、複数の GitLab チームが協力しています：

1. [Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)はARMランナープロバイダーとビルドパイプラインの Issue を管理します。
1. [Developer Relationsチーム](/handbook/marketing/developer-relations/)とサポートチームがフォーラムでの質問への回答とコミュニティサポートを担当します。
1. [Verify CI](/handbook/engineering/devops/verify/)はARMランナー向けパッケージのビルドをサポートします。

## 障害通知

master、stableブランチ、タグのビルド障害は、[distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)チームの Slack チャンネルに送信されます。開発者は、機能ブランチからトリガーされたパイプラインの障害通知を、他のブランチと同様にメールで受信します。

## よくある質問

### Raspberry Pi向けにどの GitLab パッケージがビルドされますか？

[メモリ要件](https://docs.gitlab.com/ee/install/requirements.html#memory)の関係で、現在Raspberry Piを本番プラットフォームとして推奨していません。そのため、Community Editionのパッケージのみをビルドしています。
