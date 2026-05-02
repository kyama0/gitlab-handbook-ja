---
title: "Distribution チームインフラとメンテナンス - ビルドインフラ"
description: "Distribution チームのビルドノードの詳細とメンテナンスタスク"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/build-infrastructure/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
---

## 共通リンク

- [Distribution チームハンドブック](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
- [Distribution チームインフラとメンテナンス](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## ビルドインフラ

Distribution は GitLab CI を使用して GNU/Linux パッケージ、Docker イメージ、AWS AMI、およびユーザーのマシンに GitLab をインストールするために使用できるその他のアーティファクトをビルドします。これらのビルドプロセスの多くはより高い計算能力とリソースを必要とするため、Distribution はこれらのリソースを提供するために独自のインフラを維持しています。

### ランナーマネージャーマシン

Distribution チームは 2 台のランナーマネージャーマシンを維持しています。1 台は GitLab.com 用、もう 1 台は dev.gitlab.org 用です。ランナーマネージャーの設定は [chef-repo](https://gitlab.com/search?search=distribution&project_id=26735010&group_id=1112072) プロジェクトで管理されており、これらの設定と共に使用するシークレットは [Vault](https://vault.gitlab.net) で管理されています。

ランナーは `runners-manager-distribution-(com|dev)-(blue|green)-<count>` という構文で命名されています。

注意: これらのランナーマネージャーにはまだブルー/グリーンデプロイが設定されていませんが、[Issue 1138](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1138) でこれらのランナーマネージャーマシンの GitLab Runner のアップグレードを容易にするためのブルー/グリーンデプロイの使用について議論されています。現在、`gitlab.com` と `dev.gitlab.org` のそれぞれに対して、1 台の「`blue`」ランナーマネージャーのみが利用可能です。

### ビルドマシン

`com` と `dev` の両ランナーは、`autoscale` 設定を持つ `docker-machine` エグゼキューターを使用して同一のマシンを起動します。それぞれが起動するマシンの種類は以下のとおりです:

1. `distribution-(com|dev)-amd64-runner-gcp` - これらのランナーは GCP で 100GB SSD 付きの `n1-highcpu-32` マシンを起動し、`amd64` アーキテクチャ用の `omnibus-gitlab` GNU/Linux パッケージのビルドに使用されます。

1. `distribution-(com|dev)-arm64-runner-gcp` - これらのランナーは GCP で 100GB SSD 付きの `t2a-standard-8` マシンを起動し、`arm64` アーキテクチャ用の `omnibus-gitlab` GNU/Linux パッケージのビルドに使用されます。

1. `distribution-(com|dev)-arm64-runner-aws` - これらのランナーは AWS で 100 GB SSD 付きの `m6g.2xlarge` マシンを起動し、`armv7` アーキテクチャ（Raspberry Pi）用の `omnibus-gitlab` GNU/Linux パッケージのビルドに使用されます。GCP の T2A マシンが `armv7` パッケージのビルドに使用される [32 ビット命令セットをサポートしていない](https://cloud.google.com/compute/docs/general-purpose-machines#t2a_limitations) のに対し、AWS の Graviton はサポートしているため使用されています。

### メンテナンスタスク

**要件:**

- ノードへのアクセス権。
- [Chef Vault](https://vault.gitlab.net/) 内の特定フォルダへのアクセス権。
- [ops chef repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo) の master へのマージ権限。これは通常チームメンバーには付与されていません。そのため MR を開いた後、アクセス権を持つ人（主にインフラチームのメンバー）にレビューとマージを依頼してください。

#### GitLab CI ランナーのバージョン変更

*Distribution チームの任意のメンバーが実行します:*

   1. ランナーバージョンを更新する chef repo への新しいマージリクエストを作成します。

   1. CI がパスし、MR が別のチームメンバーにレビューされていることを確認します。

   1. 変更を chef repo にマージします。

   1. ノードにログインして以下を実行し、

      ```sh
      sudo /root/runner_upgrade.sh
      ```

      アップグレードを実行します。これにより chef-client サービスが停止し、ランナーが停止してマシンがクリーンアップされ、chef-client が新しいバージョンを取得するために実行され、最後に GitLab Runner が再起動します。
