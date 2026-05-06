---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 007: Self-ManagedとDedicatedの単一Organization'
creation-date: "2025-11-18"
authors: [ "@tkuah" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/007_self_managed_dedicated_single_organization/
upstream_sha: 7fadd0122802b16e64b0e88962c637a09d27bd53
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

Organizations機能はGitLabにマルチテナントアーキテクチャを導入し、GitLab.comの複数の隔離されたOrganizationsを可能にします。このアーキテクチャは、多くの顧客が同じインフラを共有するGitLab.comのSaaSモデルをサポートするように設計されています。

ただし、Self-managedとDedicated GitLabインスタンスは異なる運用モデルを持っています。

- **Self-managed**: 顧客は通常、単一の企業またはエンティティのために自分のGitLabインスタンスをインストールして運用します
- **Dedicated**: GitLabは1人の顧客専用のシングルテナントインスタンスを運用します

両方のデプロイメントモデルは、複数の異なる顧客Organizationsにサービスを提供するGitLab.comとは異なり、単一の顧客Organizationにサービスを提供します。

### 現状

Self-managedとDedicatedインスタンスは、インスタンスレベルの管理とフラットなNamespace構造で運用されています。顧客はインスタンス全体を統一されたエンティティとして管理することを期待しています。BillingとライセンスはInstance全体に適用されます。

### 変更点

Organizationsの導入に伴い、データモデルとアクセスパターンがマルチテナンシーをサポートするように移行しています。これにより、Self-managedとDedicatedインスタンスがOrganizationsアーキテクチャをどのように採用するべきかという疑問が生じます。

## 決定

Self-managedとDedicatedインスタンスは現在のところ単一のOrganizationを持ちます。この単一のOrganizationは以下のようになります。

- インスタンスのセットアップ時に自動的に作成される
- インスタンス上のすべてのGroups、Projects、Usersのデフォルトコンテナーとなる

Self-managedとDedicatedインスタンスでは他のOrganizationの作成は許可されません。

## 結果

- Self-managedとDedicatedインスタンスは、Instance Levelから単一のOrganizationへの小規模で透過的な移行のみを必要とします。ほとんどの場合、現在のユーザー体験が維持されます。
- バックエンドコードはすべてのデプロイメントタイプにわたって統一でき、同じOrganization対応データアクセスパターンを使用します
- 必要に応じて複数のOrganizationsへの将来の移行が可能です（アーキテクチャがサポートしているため）
- Organization コンテキスト解決（[ADR 001](001_organization_context_resolution.md)）が透過的に適用されます - すべての操作が単一のOrganizationコンテキスト内で行われます
- 管理と設定（[ADR 006](006_administration_and_settings.md)）はユーザーの視点からはInstance Levelに残りますが、技術的にはバックエンドのOrganization Levelで動作します

## 代替案

### Self-managedとDedicatedのOrganizationsを完全にバイパスする

Self-managedとDedicatedインスタンスがOrganizationsアーキテクチャをまったく使用しない別個のコードパスを維持することができます。これは以下の理由で却下されました。

- コードベースとデータアクセスパターンが共有されているため、GitLab.comのOrganizationsを誤ってバイパスするリスクがあります。
- デプロイメントタイプ間で大きなコードの分岐が生じます。
- メンテナンスの負担とテストの複雑さが増加します。

### 最初から複数のOrganizationsを公開する

Self-managedとDedicatedの顧客が最初から複数のOrganizationsを作成できるようにすることができます。これは以下の理由で却下されました。

- シングルテナント環境でこの機能に対する明確な顧客要求がありません。
- Self-managedとDedicatedの体験に不必要な複雑さが追加されます。
- GitLab.comと一貫性のあるクロスOrganizationアクセスパターンの実装が複雑です。
