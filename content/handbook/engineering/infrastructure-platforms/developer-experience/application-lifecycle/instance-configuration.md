---
title: "Developer Experience: Application Lifecycle / Instance Configuration"
description: "GitLab とその依存関係を含む GitLab インスタンスの設定と運用に、一貫性があり運用上効果的なエクスペリエンスを提供します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/application-lifecycle/instance-configuration/"
upstream_sha: "3dfe7f05ed4a09b9eb0c0f24cd7eb7f1ac83404d"
lastmod: "2026-11-11T15:33:17Z"
translated_at: "2026-11-12T14:20:07+00:00"
translator: codex
stale: false
---

## ミッション {#mission}

Instance Configuration は、[Application Lifecycle](_index.md) 内の機能別チームです。デプロイ方法を問わず、GitLab インスタンスとその依存関係の設定エクスペリエンスを担当します。

Linux パッケージ、Helm、Operator のいずれでデプロイしても、運用担当者が同じ方法で GitLab を設定し、同じ結果を得られることを目指します。

## ビジョン {#vision}

未定です。

## 責任範囲 {#areas-of-responsibilities}

### 設定インターフェース {#configuration-surface}

- **Linux パッケージ（Omnibus）:** `gitlab.rb` による設定。デプロイの仕組みについては [Build](../../gitlab-delivery/build/_index.md) チームと共同で担当します。
- **GitLab Charts（Helm）:** Helm values による設定。
- **GitLab Operator:** Operator のカスタムリソース定義による設定。
- **依存関係:** PostgreSQL、Redis、オブジェクトストレージなど、GitLab が依存するサービスのうち、GitLab インスタンスに関わる設定。

### 設定の一貫性 {#configuration-consistency}

- 同じ意味を持つ設定が、Omnibus、Helm、Operator で同じように動作します。
- デプロイ方法間の違いをドキュメント化し、ギャップを Issue として追跡します。
- デフォルト設定は本番運用に対応し、デプロイ方法が許す範囲で一貫性を維持します。

### アップグレードパスに伴う設定変更 {#upgrade-path-configuration-changes}

- 削除された設定、名称変更された設定、新たに必須となった設定など、アップグレードに必要な設定変更を特定します。
- [Lifecycle Management](lifecycle-management.md) と連携し、アップグレードガイドにこれらの変更を含めます。

### Omnibus Adjacent Kubernetes（OAK） {#omnibus-adjacent-kubernetes-oak}

- Omnibus の運用モデルで Kubernetes 上の GitLab を設定するための OAK の方向性を定義し、開発を進めます。正確なスコープと時期は今後確定します。

### 対象外 {#out-of-scope}

- インスタンスのデプロイ、スケーリング、アップグレードは [Lifecycle Management](lifecycle-management.md) が担当します。
- コンポーネントの準備状況に関する要件とチェックは [Platform Readiness](platform-readiness.md) が担当します。
- アプリケーションの機能設定は、引き続きその機能を構築する開発チームが担当します。

## チームメンバー {#team-members}

{{< team-by-manager-slug manager="cjwilburn" team="Application Lifecycle:Instance Configuration" >}}

- Engineering Manager: [Courtney Wilburn](https://gitlab.com/cjwilburn) (@cjwilburn)
- Product Manager: [Martin Brümmer](https://gitlab.com/mbruemmer) (@mbruemmer)

## 私たちとの協働 {#working-with-us}

| 説明 | リンク |
| ----------- | ---- |
| **Slack チャンネル** | `#g_application_lifecycle` |
| **GitLab チームハンドル** | [`@gitlab-org/quality/application-lifecycle`](https://gitlab.com/gitlab-org/quality/application-lifecycle) |
| **グループラベル** | `group::application lifecycle` |
| **機能別チームラベル** | `team::instance configuration` |

チームのサポートが必要なリクエストについては、支援を求めるサポートリクエストを含め、[Application Lifecycle チームとの協働](_index.md#working-with-the-application-lifecycle-team)セクションを参照してください。

## 働き方 {#how-we-work}

Kanban ボード、セレモニー、Issue のウェイトなど、Application Lifecycle チームのワークフローに従います。[Application Lifecycle チームのワークフロー](workflow.md)を参照してください。
