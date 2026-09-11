---
title: "Deployment Interfaces"
description: "Deployment Interfaces チームは、GitLab を構築するチームと運用する人々の間で共有する契約を担当します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/deployment-interfaces/"
upstream_sha: "4246c71d16beefada2a847b698b152ff280860c5"
lastmod: "2026-09-11T15:26:39Z"
translated_at: "2026-09-11T21:12:37+00:00"
stale: false
translator: codex
---

## ミッション

Deployment Interfaces チームは、GitLab を構築するチームと運用する人々の間で共有する契約を担当します。このインターフェースは、エンジニアのノートパソコン、GitLab.com、Dedicated、Cells、すべての Self-Managed のお客様など、GitLab が稼働するあらゆる場所で一貫したデプロイ体験を保証します。

私たちは、簡単にリリースする方法が正しいリリース方法にもなるよう、整備された開発基盤を構築します。これにより、チームが取り組む作業を、標準でどのお客様にも適切にデプロイできるようにします。

Deployment Interfaces は、より広範な [Theseus イニシアチブ](../../../architecture/design-documents/theseus_platform_vision/)の一部です。

## チームメンバー

{{< team-by-manager-slug manager="mkomor1" team="Deployment Interfaces(.*)" >}}

## 主要プロジェクト

| 名前 | 説明 |
|------|-------------|
| [Fairway](https://gitlab.com/gitlab-com/gl-infra/platform/runway/fairway) | サービスのデプロイ構成とインフラストラクチャへの依存関係を宣言する `FairwayManifest` から、自己完結した Helm チャートを生成します。Fairway は、Kubernetes ベースの対象環境に向けた Deployment Interfaces の契約の具体的な実装です。 |

## 共通リンク

| 項目 | リンク |
|------|-------|
| **Slack** | [`#g_deployment-interfaces`](https://gitlab.enterprise.slack.com/archives/C0BJ19WFZV3) *（予定）* |
