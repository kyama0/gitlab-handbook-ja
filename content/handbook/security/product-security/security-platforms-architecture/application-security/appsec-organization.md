---
title: "Application Securityチーム組織"
description: チームがどのように組織されているかについてのApplication Securityページ
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/appsec-organization/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

このページでは、以下のリソースを提供します。

- チームの作業がどのように組織されているかを理解する
- 私たちがどのリポジトリで作業を行っているかを知る

## 作業組織

Application Securityチームは、月次マイルストーンベースで作業を組織しています。詳細については、専用のマイルストーン計画ページ[こちら](milestone-planning.md)をご覧ください

## 重要なリポジトリ

Application Securityチームは、[私たちのミッション](_index.md#application-security-mission)を支える複数の重要なリポジトリを維持しています。これらのリポジトリは、セキュリティ標準とプロセスを維持しながら、エンジニアリングとプロダクトチームとのコラボレーションを可能にします。

### チーム組織と計画

**目的**: チームオペレーション、Issue追跡、クロスチームコラボレーションのためのセントラルリポジトリ
**場所**: [appsec-team tracker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team)
**主な用途**:

- チームのイニシアチブとオペレーション改善を追跡する
- クロスチームコラボレーションの取り組みを調整する
- マイルストーン作業を計画する

### Application Securityレビュー

**目的**: AppSecレビューをリクエストおよび実行するためのリポジトリ
**場所**: [appsec-team reviews](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-reviews/)
**主な用途**:

- 機能設計レビュー
- アーキテクチャアセスメント

私たちのセキュリティレビュープロセスについては、[専用ページ](appsec-reviews.md))で詳しく学べます。

### セキュリティツールと自動化

**目的**: 自動化ツールを格納
**場所**: [Toolingリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling)
**主な用途**:

- 自動化スクリプト

### 脅威モデリングリソース

**目的**: 脅威モデリング活動のためのテンプレートとドキュメント
**場所**: [Threat modelingリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models)
**詳細はこちら**: [脅威モデリングプロセス](./threat-modeling/)

### PSIRTオペレーション

**目的**: PSIRTチームのオペレーションとIssue追跡のためのセントラルリポジトリ。
**場所**: `gitlab-com/gl-security/product-security/appsec/psirt`
**詳細はこちら**: [PSIRTサービス](./appsec-operations/psirt-services/)

## 外部のお客様向けの有用な情報

### パブリックセキュリティリソース

- [GitLab Security Disclosure](https://about.gitlab.com/security/disclosure/)
  - 私たちの協調的セキュリティ開示ポリシーとプロセスの詳細
- [HackerOne Bug Bountyプログラム](https://hackerone.com/gitlab)
  - 私たちのBug Bounty HackerOneプログラムポリシー
- [GitLabリリースおよびパッチリリースプロセス](/handbook/engineering/releases/)
  - リリースおよびパッチリリースプロセスに関する専用ハンドブックページを参照

### ドキュメント

- [GitLab Application Security機能を使用したアプリケーションのセキュア化方法](https://docs.gitlab.com/ee/user/application_security/secure_your_application.html)
- GitLabインスタンスのハードニング推奨事項:
  - 私たちの[公式ドキュメント](https://docs.gitlab.com/security/hardening/)(各バージョンに同梱され、セルフマネージドインスタンスドキュメントで利用可能)
  - 私たちの[ハンドブック推奨事項](https://about.gitlab.com/security/hardening/)
