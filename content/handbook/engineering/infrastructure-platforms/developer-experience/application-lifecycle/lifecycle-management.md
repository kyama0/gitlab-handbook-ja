---
title: "Developer Experience: Application Lifecycle / Lifecycle Management"
description: "GitLab Helm チャート、プラットフォームチャート、GitLab Operator、Bridge など、GitLab デプロイのライフサイクルツールを担当します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/application-lifecycle/lifecycle-management/"
upstream_sha: "3dfe7f05ed4a09b9eb0c0f24cd7eb7f1ac83404d"
lastmod: "2026-11-11T15:33:17Z"
translated_at: "2026-11-12T14:20:07+00:00"
translator: codex
stale: false
---

## ミッション {#mission}

Lifecycle Management は、[Application Lifecycle](_index.md) 内の機能別チームです。さまざまなデプロイ先で GitLab インスタンスをデプロイ、スケーリング、アップグレードするツールを構築し、維持します。

GitLab Helm Charts、GitLab Operator、クラウドネイティブのコンテナイメージをインストールおよびアップグレードできる状態に保ち、運用担当者が予測可能な結果を得ながら GitLab を運用・更新できるようにします。

## ビジョン {#vision}

未定です。

## 責任範囲 {#areas-of-responsibilities}

### Kubernetes デプロイツール {#kubernetes-deployment-tooling}

- **GitLab Charts（Helm）:** Kubernetes 上に GitLab をデプロイする主要な方法です。リポジトリ: [gitlab-org/charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)。ドキュメント: [docs.gitlab.com/charts](https://docs.gitlab.com/charts/)。
- **GitLab Operator:** OpenShift と標準的な Kubernetes 上での GitLab の Kubernetes ネイティブなライフサイクル管理です。現在の Operator は限定提供中で、[新しいバージョンの Operator](https://gitlab.com/gitlab-org/cloud-native/operator)を開発しています。リポジトリ: [gitlab-org/cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)。
- **プラットフォームチャート:** GitLab のデプロイが依存するプラットフォームの依存関係に対応する Helm チャートで、[gitlab-org/cloud-native/charts](https://gitlab.com/gitlab-org/cloud-native/charts) 配下で維持されています（例: OpenBao、Zoekt、ingress-nginx）。
- **Bridge:** 管理者が YAML を書かずに Kubernetes 上の GitLab をインストールし、管理できる、GitLab Operator 上の Web UI です。Bridge は開発中です。
- **Cloud Native GitLab（CNG）イメージ:** GitLab Charts、プラットフォームチャート、Operator がデプロイするコンテナイメージです。

### アップグレードとスケーリング {#upgrades-and-scaling}

- チームが担当する各デプロイ方法のアップグレードプロセスとアップグレードパスのガイダンス。
- 水平および垂直スケーリングのためのツールとプロセス。
- マルチノードおよびクラウドネイティブのデプロイ環境での、ダウンタイムなしのアップグレードと運用。

### モジュラーなデリバリーの方向性 {#modular-delivery-direction}

- [Theseus](https://theseus.gitlab.net/) が示すモジュラーサービスのデリバリー方針に、デプロイツールを整合させます。この方針は [Application Lifecycle ページ](_index.md)で言及されています。

### GitLab Environment Toolkit（GET）と Reference Architectures {#gitlab-environment-toolkit-get-and-reference-architectures}

- [GET](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) と [Reference Architectures](https://gitlab.com/gitlab-org/quality/reference-architectures) は、現在、保守と移行の段階にあります。長期的な扱いが決まるまで、チームは引き続きこれらを維持します。
- GET に関する質問は `#gitlab_environment_toolkit` に送ってください。Reference Architectures に関する質問は `#reference-architectures` に送ってください。

### 対象外 {#out-of-scope}

- Omnibus のデプロイの仕組みは [Build](../../gitlab-delivery/build/_index.md) チームと共同で担当します。
- GitLab インスタンスの設定と設定の一貫性は [Instance Configuration](instance-configuration.md) が担当します。
- コンポーネントの準備状況に関する要件とチェックは [Platform Readiness](platform-readiness.md) が担当します。

## チームメンバー {#team-members}

{{< team-by-manager-slug manager="cjwilburn" team="Application Lifecycle:Lifecycle Management" >}}

- Engineering Manager: [Courtney Wilburn](https://gitlab.com/cjwilburn) (@cjwilburn)
- Product Manager: [Martin Brümmer](https://gitlab.com/mbruemmer) (@mbruemmer)

## 私たちとの協働 {#working-with-us}

| 説明 | リンク |
| ----------- | ---- |
| **Slack チャンネル** | `#g_application_lifecycle` |
| **GitLab チームハンドル** | [`@gitlab-org/quality/application-lifecycle`](https://gitlab.com/gitlab-org/quality/application-lifecycle) |
| **グループラベル** | `group::application lifecycle` |
| **機能別チームラベル** | `team::lifecycle management` |

チームのサポートが必要なリクエストについては、支援を求めるサポートリクエストや環境構築リクエストを含め、[Application Lifecycle チームとの協働](_index.md#working-with-the-application-lifecycle-team)セクションを参照してください。

## 働き方 {#how-we-work}

Kanban ボード、セレモニー、Issue のウェイトなど、Application Lifecycle チームのワークフローに従います。[Application Lifecycle チームのワークフロー](workflow.md)を参照してください。
