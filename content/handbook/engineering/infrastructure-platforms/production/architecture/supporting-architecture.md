---
title: "サポートアーキテクチャ"
controlled_document: true
upstream_path: /handbook/engineering/infrastructure-platforms/production/architecture/supporting-architecture/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T03:12:43Z"
translator: claude
stale: false
lastmod: "2026-01-23T12:25:37-06:00"
---

このドキュメントは GitLab.com の機能をサポートするアーキテクチャを対象としていますが、ユーザー向けではなく、[インフラチーム](../)が管理しています。

## dev.gitlab.org {#dev-gitlab-org}

Dev.gitlab.org は Azure でホストされている GitLab インスタンスです。このインスタンスは、すべての GitLab コンポーネントの main ブランチから作成された[ナイトリービルド](https://packages.gitlab.com/gitlab/nightly-builds)の vanilla GitLab Community Edition パッケージを実行しています。インスタンスは、[gitlab-server](https://gitlab.com/gitlab-cookbooks/gitlab-server/-/blob/adb75f4574cace07cf75c5c591d30c2107dce685/attributes/default.rb#L105-112) クックブックで定義された cron を使用して毎日自動的にアップグレードされ、[chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/381c4de3db52c202de3f5abd6ca02a14c75e5106/roles/dev-gitlab-org.json#L317-319) のロールオーバーライドが設定されています（GitLab 内部のみ）。

主な用途は、公式 Docker イメージと GitLab パッケージのビルドであり、これらはその後公式リリースパイプラインの一部として使用されます。

また、ユーザーが dev.gitlab.org アカウントを使用して他のサービスにサインインできるように、OAuth 認証サービスとしても使用されています。例えば:

* Sentry
* バージョンアプリ

<img src="/images/handbook/engineering/infrastructure/supporting-architecture/dev-oauth.png" alt="">

[ソース](https://drive.google.com/file/d/1SOMy5CxZbm8sRDt9QZyIqy3plKFkqdqA/view?usp=sharing)、GitLab 内部使用のみ

### アーキテクチャ

Dev.gitlab.org は単一の VM 上で動作し、公式 Linux パッケージにバンドルされているデータベース、Redis などのサービスを使用しています。リポジトリは専用の SSD に保存され、アーティファクト、LFS オブジェクト、コンテナレジストリオブジェクト、アップロードは GCS に保存されています。

データベースバックアップとリポジトリバックアップは、パッケージアップグレード前に実行される組み込みパッケージのバックアップ手順を使用して自動的に作成されます。
これらのバックアップは、公式 Linux パッケージの自動バックアップ機能を使用して、特定の [chef ロール](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/7b995cb11444e37bbafe362195d9ce273ec9b233/roles/dev-gitlab-org.json#L175-182)で設定された AWS S3 バケットに自動的にアップロードされます。

<img src="/images/handbook/engineering/infrastructure/supporting-architecture/dev-arch.png" alt="">

[ソース](https://drive.google.com/file/d/1tG8rxbv7xRxShXdJGQEX1hBzW-mRel6J/view?usp=sharing)、GitLab 内部使用のみ

## ops.gitlab.net {#ops-gitlab-net}

Ops.gitlab.net は GCP でホストされている GitLab インスタンスです。このインスタンスは、[公式リリースチャンネル](https://packages.gitlab.com/gitlab/gitlab-ee)からの vanilla GitLab EE パッケージを実行しています。インスタンスは、[gitlab-server](https://gitlab.com/gitlab-cookbooks/gitlab-server/-/blob/adb75f4574cace07cf75c5c591d30c2107dce685/attributes/default.rb#L105-112) クックブックで定義された cron を使用して自動的にアップグレードされ、[chef-repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/381c4de3db52c202de3f5abd6ca02a14c75e5106/roles/ops-infra-gitlab.json#L276-278) のロールオーバーライドが設定されています（GitLab 内部のみ）。

主に運用タスクに使用されます。

GitLab.com インフラの管理用リポジトリと、インフラリポジトリのミラーが含まれています。
また、デプロイ管理のためのさまざまなツールや、Slack から送信される便利な chatops コマンドもホストしています。
ops.gitlab.net の管理者は、インフラマネージャー（Reliability、Scalability、Delivery）です。

### アーキテクチャ

インスタンスは単一の VM 上で動作し、データベースバックエンドとして CloudSql を、Redis サービスとして Memorystore（マネージド Redis サービス）を使用しています。リポジトリは専用の SSD に保存され、アーティファクト、LFS オブジェクト、コンテナレジストリオブジェクト、アップロードは GCS に保存されています。

<img src="/images/handbook/engineering/infrastructure/supporting-architecture/ops-arch.png" alt="">

[ソース](https://drive.google.com/open?id=1QFRpog0jmZyci1UlB291xzwfX_ToMcEm)、GitLab 内部使用のみ

## version.gitlab.com

バージョンサービスは Google Cloud の Kubernetes クラスター上でホストされています。
バージョンは、利用可能な GitLab バージョンとそれに脆弱性が含まれているかどうかを保存し、
Self-Managed の GitLab インスタンスのバージョンチェックバッジをレンダリングし、バージョンチェックや
Self-Managed インスタンスから送信された使用状況 ping のデータを収集するために使用されます。

### アーキテクチャ

version.gitlab.com は Kubernetes 上で動作し、デプロイ管理には Auto DevOps を使用しています。アプリケーションは複数の Pod 上で動作します。Pod のデータ保存には Google Cloud SQL（PostgreSQL）が使用され、Cloud SQL には 2 つのレプリカが設定されています。Google Cloud Memorystore はキャッシュストアとして使用されています。

#### 本番環境

<img src="/images/handbook/engineering/infrastructure/production-architecture/version-gitlab-com-arch.png" alt="">

[ソース](https://drive.google.com/file/d/1_ESP2-hT0giqIEHYiY6ZtzAcJMk7cnk1/view?usp=sharing)、GitLab 内部使用のみ
