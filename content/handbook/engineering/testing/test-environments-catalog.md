---
title: "GitLab テスト環境カタログ"
upstream_path: "/handbook/engineering/testing/test-environments-catalog/"
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-15T21:34:06Z"
translator: codex
stale: false
lastmod: "2026-07-15T17:51:54+00:00"
---

このページは .com、セルフマネージド、Dedicated プラットフォーム向けに GitLab で利用可能なテスト環境のカタログを提供します。

## 概要

このカタログは GitLab 全体で使用される様々なテスト環境（その目的、オーナー、デプロイモデル、主な特性）を文書化しています。開発者やその他のステークホルダーが利用可能な環境と使用方法を理解しやすいよう情報を整理しています。

## 環境カタログ

### Staging-Canary

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | GitLab.com | [staging.gitlab.com](https://staging.gitlab.com) | インフラチーム | N/A | 有効 | 全エンジニア |

**目的:** 混在デプロイの問題を捉えるための Staging 内の Canary ステージ。Main ステージのロールアウト前にデプロイを受け取ります。

**主な特徴:**

- Web、API、Git HTTPS、WebSocket、レジストリ、ページ、シェル、Gitaly サービスが利用可能
- Main（Staging）と共有: Sidekiq、PostgreSQL、Redis、その他のデータストレージ（データベースとフィーチャーフラグが両ステージに影響します）
- HTTP ルーターが有効
- トポロジーサービスがデプロイ済み（まだプロダクショントラフィックを処理していません）

**アクセス:**

プロダクションアカウントは自動的に Staging に引き継がれるため、すでにアカウントをお持ちの場合があります。[access-request プロジェクト](https://gitlab.com/gitlab-com/team-member-epics/access-requests)でアクセスリクエストを作成し、マネージャーに承認を依頼してください。

Staging にアクセスする際、ブラウザで `gitlab_canary` クッキーを `true` に設定してください。また、GitLab ロゴの左上に "next" という緑のボックスが表示されます。

注意: `gitlab_canary` クッキーを `false` に設定すると Canary ステージへのアクセスを回避できますが、インフラのルールセットに基づいてトラフィックの一部が Canary にリダイレクトされるため 100% の保証はありません。

**自動テスト:**

- 2つのブロッキング E2E スモークテストセットを実行: 1つは Staging-Canary 向け、もう1つは Staging Main 向け
- デプロイが成功するには両テストセットが合格する必要があります
- 環境互換の完全 E2E テストを実行

[Staging-Canary の詳細](/handbook/engineering/infrastructure-platforms/environments/#staging-canary)

---

### Staging

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | GitLab.com | [staging.gitlab.com](https://staging.gitlab.com) | インフラチーム | N/A | 有効 | 全エンジニア |

**目的:** GitLab.com デプロイのプリプロダクションテスト。プロダクションと同じトポロジーを持ち、仮名化されたプロダクションデータベースを使用。プロダクションデプロイ前に頻繁（少なくとも数時間ごと）にデプロイされます。

**主な特徴:**

- プロダクションのトポロジーと設定をミラーリング
- 段階的なロールアウト向けの Staging-Canary 環境を含む
- プロダクションからの仮名化データベーススナップショット
- HTTP ルーターが有効
- トポロジーサービスがデプロイ済み（まだプロダクショントラフィックを処理していません）

**自動テスト:**

- 各デプロイ時にスモーク E2E テストスイートを実行

**アクセス:**

プロダクションアカウントは自動的に Staging に引き継がれるため、すでにアカウントをお持ちの場合があります。[access-request プロジェクト](https://gitlab.com/gitlab-com/team-member-epics/access-requests)でアクセスリクエストを作成し、マネージャーに承認を依頼してください。

[Staging の詳細](/handbook/engineering/infrastructure-platforms/environments/#staging)

---

### Staging-Ref

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | セルフマネージド | [staging-ref.gitlab.com](https://staging-ref.gitlab.com) | `group::release-and-deploy` | [Staging-Ref GET Config](https://gitlab.com/gitlab-org/quality/gitlab-environment-toolkit-configs/staging-ref) | 無効 | 全エンジニア |

**目的:** 完全な管理アクセスとデータ制御を持つ最新 Staging Canary コードをテストするためのプリプロダクションサンドボックス環境。プロダクションライクな環境でのエンジニアリング部門のテストニーズをカバーします。

**主な特徴:**

- Deployer と GET を使用して Staging Canary と並行してデプロイ
- 3k Cloud Native Hybrid Reference Architecture
- US プライマリサイトと EU セカンダリサイトの Geo セットアップ
- デフォルトで Free プランの Ultimate ライセンス
- 管理者アクセス可能
- 自動再構築機能
- 様々なシナリオ向けの既存テストアカウント
- Advanced Search、Sentry、Snowplow トラッキング、監査イベントストリーミングを設定済み
- Staging Ref の CustomersDot はメインの Staging CustomersDot とは別に利用可能（[CustomersDot Ansible インベントリ](https://gitlab.com/gitlab-org/customersdot-ansible/-/tree/master/inventories?ref_type=heads)）

**自動テスト:**

デプロイ時にテストは実行されません。

**アクセス:**

staging-ref.gitlab.com にアクセスし、GitLab Google アカウントを使用してください。管理者アクセスには、1Password Engineering vault の管理者認証情報でサインインし、管理者エリアでユーザーを昇格させてください。SSH/Rails コンソールへのアクセスには `#staging-ref` Slack チャンネルまたは [access-request プロジェクト](https://gitlab.com/gitlab-com/team-member-epics/access-requests)を通じて `gitlab-staging-ref` プロジェクトへのアクセスをリクエストしてください。

フィーチャーフラグには `#staging-ref` Slack チャンネルで ChatOps コマンドを使用してください。

[Staging Ref の詳細](/handbook/engineering/infrastructure-platforms/environments/staging-ref)

---

### Production-Canary

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | GitLab.com | [gitlab.com](https://gitlab.com) | インフラチーム | N/A | 有効 | SRE |

**目的:** 全プロダクション展開前の段階的ロールアウトテスト。問題の影響を最小化するため、メインプロダクションステージより先にデプロイを受け取る制御されたロールアウト向けの本番内環境サブセット。

**主な特徴:**

- コミュニティトラフィックの一部が自動的に Canary にルーティング
- Web、API、Git HTTPS、WebSocket、レジストリ、ページ、シェル、Gitaly サービスが利用可能
- Main（プロダクション）と共有: Sidekiq、PostgreSQL、Redis、その他のデータストレージ（データベースとフィーチャーフラグが両ステージに影響します）
- HTTP ルーターが有効
- トポロジーサービスがデプロイ済み（まだプロダクショントラフィックを処理していません）

**アクセス:**

プロダクションにアクセスする際、ブラウザで `gitlab_canary` クッキーを `true` に設定してください。また、GitLab ロゴの左上に "next" という緑のボックスが表示されます。

注意: `gitlab_canary` クッキーを `false` に設定すると Canary ステージへのアクセスを回避できますが、インフラのルールセットに基づいてトラフィックの一部が Canary にリダイレクトされるため 100% の保証はありません。

**自動テスト:**

- デプロイ時にスモーク E2E テストスイートを実行
- フィーチャーフラグの切り替え時に実行

[Production-Canary の詳細](/handbook/engineering/infrastructure-platforms/environments/#production-canary)

---

### Production

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | GitLab.com | [gitlab.com](https://gitlab.com) | インフラチーム | N/A | 有効 | パブリック |

**目的:** GitLab.com のプロダクション環境。GitLab コミュニティにサービスを提供するメイン SaaS プラットフォーム。アクセスが制限されたフルスケールデプロイです。

**主な特徴:**

- 2段階デプロイ: Canary ステージ → Main ステージ
- Canary ステージが先にデプロイを受け取り、限られたコミュニティトラフィックを処理
- Main ステージが GitLab コミュニティの残りのトラフィックを処理
- リリース候補のデプロイ
- HTTP ルーターが有効
- トポロジーサービスがデプロイ済み（まだプロダクショントラフィックを処理していません）

**アクセス:**

お客様の GitLab アカウント。

**自動テスト:**

- フィーチャーフラグの切り替え時に E2E スペックを実行

[Production の詳細](/handbook/engineering/infrastructure-platforms/environments/#production)

---

### .org (dev.gitlab.org)

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| 永続 | アクティブ | GitLab.com | [dev.gitlab.org](https://dev.gitlab.org) | インフラチーム | [インフラ環境](/handbook/engineering/infrastructure-platforms/environments/) | プロダクションおよびビルドチーム |

**目的:** GitLab.com インフラ向けツール。GitLab.com がオフラインの際に必要なビルドとリポジトリをホストするミッションクリティカルなインフラ。

**主な特徴:**

- テスト目的ではありません
- GitLab CE（EE ではない）を実行
- ビルドとインフラ向けのミッションクリティカルなインスタンス
- アクセス制限あり - ほとんどのエンジニアはアカウントを持たないか制限された権限を持ちます
- アクセスは主に製品のビルドとリリースに携わるチームメンバー向け

[.org の詳細](/handbook/engineering/infrastructure-platforms/environments/#org)

---

### Ops (ops.gitlab.net)

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| 永続 | アクティブ | GitLab.com | [ops.gitlab.net](https://ops.gitlab.net) | インフラチーム | [インフラ環境](/handbook/engineering/infrastructure-platforms/environments/) | SRE |

**目的:** GitLab.com 運用インフラ。GitLab.com の管理に必要なすべてのインフラを保持します。

[Ops の詳細](/handbook/engineering/infrastructure-platforms/environments/#ops)

**主な特徴:**

- テスト目的ではありません
- ビルドとインフラ向けのミッションクリティカルなインスタンス

---

### Pre

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | セルフマネージド | [pre.gitlab.com](https://pre.gitlab.com) | インフラチーム | N/A | 無効 | SRE |

**目的:** 最終セルフマネージドリリースとプロダクションパッチ向けのリリース候補を検証します。また SRE がインフラ変更の検証に使用します。

**主な特徴:**

- 完全なプロダクション HA トポロジーやプロダクションデータベースのコピーはありません
- 月次ペースでリリース候補を受け取ります
- Gitaly Cluster（Praefect）を持ちます

**自動テスト:**

- デプロイ時にスモーク E2E テストスイートを実行

[Pre の詳細](/handbook/engineering/infrastructure-platforms/environments/#pre)

---

### リリース環境

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | アクティブ | セルフマネージド | N/A（エフェメラル） | `group::release-and-deploy` | [リリース環境](https://gitlab.com/gitlab-com/gl-infra/release-environments) | `#g_release_and_deploy` に連絡 |

**目的:** GitLab のメンテナンスポリシーに従ったメンテナンス対象バージョン（最新3つのマイナーバージョン）へのバックポートの検証。安定ブランチのテストに GitLab Environment Toolkit（GET）を使用します。

**主な特徴:**

- CI による自動作成
- バージョンがメンテナンスポリシーのサポート対象外になると環境は削除
- 2種類のリリース環境セットアップ:
  - GKE クラスターへの Helm Chart デプロイ（手動テストには利用不可）
  - GitLab Environment Toolkit デプロイ（手動テストに推奨される環境）

**自動テスト:**

- デプロイ後の自動 E2E スモークテスト（Helm デプロイの安定ブランチパイプラインにおけるブロッキングステップ）

**アクセス:**

Google アカウントを使用して Web インターフェースにログインできます。

管理者アクセス、Rails コンソール、Kubernetes インフラへのアクセスには [runbook の手順](https://gitlab.com/gitlab-org/release/docs/-/blob/master/runbooks/release-environment/get/connect-to-instance.md#connect-to-a-release-environment-instance)に従ってください。

---

### Dedicated テストサンドボックス

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| 永続 | アクティブ | Dedicated | [dedicatedtestsandbox.gitlab-private.org](https://dedicatedtestsandbox.gitlab-private.org) | サポートチーム | [Dedicated テストサンドボックス](https://dedicatedtestsandbox.gitlab-private.org/users/sign_in) | サポートチーム |

**目的:** サポートチームのテストと再現

サポートワークフロー向けの静的な Dedicated サンドボックス。サポートチームが GitLab Dedicated 上のお客様の問題をテストおよび再現できるようにします。

[サポートハンドブック](/handbook/support/workflows/dedicated/#test-and-reproduction-on-gitlab-dedicated-instance)

---

### Dedicated Instrumentor レビューアプリ

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | N/A | Dedicated | N/A（エフェメラル） | Dedicated SRE チーム | [Instrumentor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor) | [セットアップガイド](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/sandbox-setup.md) |

**目的:** 変更を検証するための Dedicated SRE サンドボックス

Dedicated インフラ変更向けのエフェメラル環境。E2E スモークテストスイートを実行します。

**リソース:**

- [テストドキュメント](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/blob/main/docs/testing.md)

---

### Dedicated UAT

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| 永続 | アクティブ | Dedicated | N/A（内部） | Dedicated チーム | [Switchboard UAT](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/sandbox/switchboard_uat) | Dedicated チームに連絡 |

**目的:** Dedicated のユーザー受け入れテスト。Dedicated の自動化とワークフローのテスト環境。

---

### Reference Architecture Tester (RAT)

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | N/A | セルフマネージド | N/A（エフェメラル） | `group::build`（旧 Distribution） | [Reference Architecture Tester](https://gitlab.com/gitlab-org/distribution/reference-architecture-tester) | CI で自動 |

**目的:** Omnibus MR でのマルチノードデプロイ検証。

環境をプロビジョニングし、完全 E2E スイートを実行してから削除。Omnibus パッケージがマルチノード設定で正しく動作することを検証します。

**主な特徴:**

- 現在 Omnibus-gitlab パッケージをさまざまなマルチノード設定でテストするための 1k、2k、3k、10k アーキテクチャをサポート

**自動テスト:**

- EE 向けの毎晩の実行（FIPS テストを含む）
- 完全 E2E テストスイートを実行

#### FIPS テスト

**目的:** GitLab ソフトウェアが FIPS 140-2/140-3 暗号標準を満たすことを検証。

米国連邦政府機関および規制産業向けのコンプライアンス要件をテストします。インフラはパイプライン実行ごとに作成され、テスト後に削除されます。

**主な特徴:**

- 環境プロビジョニングに [RAT](https://gitlab.com/gitlab-org/distribution/reference-architecture-tester) を使用
- ナイトリー FIPS Omnibus パッケージビルド

**自動テスト:**

- ノンブロッキング、ナイトリービルドまたは手動 EE パイプライントリガーで実行
- スケジュールされた FIPS E2E パイプライン結果は `#e2e-run-fips` で確認可能

**オーナー/DRI:** 明確なオーナーなし（[Issue #4022](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/work_items/4022)）

---

### GitLab Sandbox Cloud

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | N/A | セルフマネージド | `*.gitlabsandbox.cloud` | [Infrasec への移行中](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/work_items/2356) | [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) | 全エンジニア |

**目的:** チームがクラウドプロバイダー間でテストできるようにします。`gitlabsandbox.cloud` レルムを使用。テストには AWS/GCP クラウド上に GitLab インスタンスを構築する必要があります。

[サポートワークフロー](/handbook/support/workflows/test_env/)

---

### CustomersDot Staging

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| 永続 | アクティブ | SaaS アプリケーション | customers.staging.gitlab.com | Fulfillment | [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com) |  |

**目的:** GitLab Customers Portal のステージング環境。Zuora Central Sandbox と接続されています。

**自動テスト:**

- MR デプロイ後に CustomersDot E2E テストが Staging に対して自動実行されます。テスト結果は `#e2e-run-staging` および `#s_fulfillment_status` Slack チャンネルに表示されます。

[CustomersDot アーキテクチャ](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc/architecture#customersdot)
[CustomersDot 環境マッピング](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/environment_mapping.md)

---

### Test-on-CNG

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| エフェメラル | アクティブ | Cloud Native GitLab | N/A（MR ごとのエフェメラル） | Developer Experience | [CNG オーケストレーター](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/gems/gitlab-orchestrator) | 無効 | MR パイプラインで自動 |

**目的:** Cloud Native GitLab 向けのマージ前 E2E 検証。E2E テストを使用して [Cloud Native GitLab（CNG）](https://gitlab.com/gitlab-org/build/CNG)インストールに対して MR の変更をテストします。マージ前検証ライフサイクルの一部であり、コードをマージするには合格が必要です。

**主な特徴:**

- マージリクエストパイプラインで自動トリガー（`e2e:test-on-cng` 子パイプライン）
- デプロイは [`orchestrator`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/gems/gitlab-orchestrator) CLI ツールで管理
- テスト環境は orchestrator CLI を使用してローカルで再現可能

---

### Test-on-GDK

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| エフェメラル | アクティブ | 開発 | N/A（MR ごとのエフェメラル） | Developer Experience | [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit) | 有効 | MR パイプラインで自動 |

**目的:** エンジニア向けの高速 E2E テストフィードバック。[GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit)（GDK）に対して実行することで、Omnibus ベースのテストよりも高速なエンドツーエンドテスト実行を提供します。

**主な特徴:**

- マージリクエストパイプラインでトリガー（`e2e:test-on-gdk` 子パイプライン）
- CI では: `build-gdk-image` ジョブが GDK を Docker イメージとしてビルド
- ローカルでは: GDK はローカル GitLab 開発向けのシングルノード開発環境（[インストールガイド](https://gitlab.com/gitlab-org/gitlab-development-kit#installation)）
- エンジニア向けの高速フィードバックループ
- `http router` が設定済み

---

### Test-on-Omnibus

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | N/A | セルフマネージド | N/A（MR ごとのエフェメラル） | Developer Experience | [Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab) | MR で手動トリガー |

**目的:** Omnibus インストールに対する E2E 検証

プロダクションライクなデプロイを検証するために [Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab) インストールに対してテストを実行します。Linux パッケージデプロイは [`gitlab-qa`](https://gitlab.com/gitlab-org/gitlab-qa) で管理されます。

**主な特徴:**

- `e2e:test-on-omnibus-ee` ジョブによる手動トリガー
- デフォルトでは MR パイプラインで実行されません
- 手動トリガー時でもテストの失敗が許容されノンブロッキング
- Docker で実行されるセルフマネージド環境

**自動テスト:**

- staging などの本番/永続環境でのみ実行されるテストを除く完全 E2E テストスイート

---

### Charts レビューアプリ

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| エフェメラル | N/A | Kubernetes（Cloud Native） | N/A（エフェメラル） | `group::operate` | [GitLab Charts](https://gitlab.com/gitlab-org/charts/gitlab) | 無効 | CI で自動 |

**目的:** Helm chart 検証

クラウドネイティブ Kubernetes 環境で GitLab Helm chart を検証します。EKS および GKE クラスターにデプロイ。E2E と RSpec テストを実行します。

[Charts 開発](https://docs.gitlab.com/charts/development/#review-apps)

---

### Operator レビューアプリ

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| エフェメラル | N/A | OpenShift | N/A（エフェメラル） | `group::operate` | [GitLab Operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | 無効 | CI で自動 |

**目的:** OpenShift および Kubernetes クラスターでの GitLab Operator 検証

OpenShift テストのための唯一の既知の環境です。[Operator CI ドキュメント](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/blob/master/doc/developer/ci.md#openshift-ci-clusters)

---

### Upgrade Tester

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | 非アクティブ | セルフマネージド | N/A | DevEx | [Upgrade Tester](https://gitlab.com/gitlab-org/quality/upgrade-tester) | 全エンジニア |

**目的:** マルチレベルアップグレードパス検証。複数の GitLab バージョンにわたる複雑なアップグレードシナリオのテスト向けに構築されました。

[アップグレードパステスト](https://internal.gitlab.com/handbook/engineering/infrastructure-platforms/software-delivery/upgrade/upgrade-path-testing)

---

### バックアップ & リストアテスト

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | アクティブ | セルフマネージド | N/A（エフェメラル） | Geo チーム | [バックアップ & リストアテスト](https://gitlab.com/gitlab-com/gl-infra/gitlab-restore/backup-and-restore-testing) | 全エンジニア |

**目的:** さまざまな Reference Architecture において GitLab のバックアップ・リストア機能を検証するための自動テストフレームワーク。環境プロビジョニングからデータ検証までの完全なライフサイクルテストを通じて、GitLab のバックアップ・リストアプロセスの信頼性と整合性を確保します。

**主な特徴:**

- GitLab Environment Toolkit（GET）を使用した自動環境プロビジョニング
- テストデータジェネレーターによるリアルなテストデータシーディング
- 完全なバックアップ・リストアライフサイクルの自動化
- 複数の Reference Architecture のサポート（1k、3k、3k-cng）
- 設定可能なパラメーターによる手動パイプライン実行
- GCP ベースのインフラ（`gitlab-restore` プロジェクト）

**自動テスト:**

- 1k および 3k アーキテクチャ向けの毎週日曜日の自動実行。`#tp-backup-results` への自動レポートの Slack 統合。

---

### UX クラウドサンドボックス

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | Cells | アクセス |
|------|--------|----------|-----|-----------|---------|-------|--------|
| 永続 | アクティブ | セルフマネージド | https://ux.gitlabdemo.cloud/ | UX チーム | [UX リサーチ](/handbook/product/ux/experience-research/ux-cloud-sandbox/) | 無効 | UX チームに連絡 |

**目的:** UX リサーチとテスト。外部参加者がセキュリティ/プライバシーの懸念なく画面共有できる安全な環境。

---

### サポート GET テンプレート

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | N/A | セルフマネージド | N/A | サポートチーム | [サポート GET テンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-Gitlab-Environment-Toolkit-template) | [テンプレート](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-Gitlab-Environment-Toolkit-template) |

**目的:** サポートチームの環境プロビジョニング。サポートチームメンバーが GitLab Environment Toolkit（GET）を使用してテスト環境を素早く作成するためのテンプレートプロジェクト。

---

### パフォーマンステスト RFH 環境

| タイプ | ステータス | プラットフォーム | URL | オーナー/DRI | プロジェクト | アクセス |
|------|--------|----------|-----|-----------|---------|--------|
| エフェメラル | アクティブ | セルフマネージド | N/A（エフェメラル） | DevEx - パフォーマンスイネーブルメント | [パフォーマンステスト RFH](https://gitlab.com/gitlab-org/quality/gitlab-environment-toolkit-configs/performance-test-rfh) | `#g_performance_enablement` に連絡 |

**目的:** アドホックなパフォーマンステスト。容易なリセットと再利用のためのべき等スクリプトを使用したパフォーマンステスト環境を作成するフレームワーク。

---

*関連 Epic: [テスト環境の理解](https://gitlab.com/groups/gitlab-org/quality/-/epics/262)*
