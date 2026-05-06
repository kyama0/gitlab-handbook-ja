---
title: "Distribution チームインフラ: ARM"
description: "ARM パッケージのビルドに使用するインフラのハードウェアと利用方法について説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/arm/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
---

## ハードウェアプロバイダー

AWS Graviton が現在の ARM64 および Raspberry Pi ランナーインスタンスのプロバイダーです。[Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) チームの全メンバーは、自分自身の認証情報でログインできる必要があります。

## ARM 関連タスクに取り組むチーム

複数の GitLab チームが ARM のサポート提供のために協力しています:

1. [Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) は ARM ランナープロバイダーとビルドパイプラインの Issue を管理します。
1. [Developer Relations チーム](/handbook/marketing/developer-relations/) とサポートチームがフォーラムで質問に答え、コミュニティ支援を提供します。
1. [Verify CI](/handbook/engineering/devops/verify/) が ARM ランナー向けパッケージのビルドを支援します。

## 障害通知

master、安定ブランチ、タグのビルド障害は [Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) チームの Slack チャンネルに送信されます。開発者は、通常の他のブランチと同様に、フィーチャーブランチからトリガーされたパイプラインの障害通知をメールで受け取ります。

## よくある質問

### Raspberry Pi 向けにビルドされる GitLab パッケージは何ですか？

[メモリ要件](https://docs.gitlab.com/ee/install/requirements.html#memory) により、現在 Raspberry Pi を本番環境プラットフォームとして推奨していません。そのため、Community Edition のパッケージのみをビルドしています。
