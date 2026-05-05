---
title: "Distributionチームのインフラとメンテナンスーービルドインフラ"
description: "Distributionチームのビルドノードの詳細とメンテナンスタスク"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/build-infrastructure/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
---

## 共通リンク

- [DistributionチームのHandbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
- [DistributionチームのインフラとメンテナンスHandbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## ビルドインフラ

DistributionはGitLab CIを使用してGNU/Linuxパッケージ、Dockerイメージ、AWS AMI、
およびユーザーのマシンにGitLabをインストールするために使用できるその他のアーティファクトをビルドします。
これらのビルドプロセスの多くはより大きな計算能力とリソースを必要とするため、
Distributionはこれらのリソースを提供するための独自インフラを維持しています。

### ランナーマネージャーマシン

Distributionチームは2台のランナーマネージャーマシンを管理しています。1台はGitLab.com用、
もう1台はdev.gitlab.org用です。ランナーマネージャーの設定は
[chef-repo](https://gitlab.com/search?search=distribution&project_id=26735010&group_id=1112072)プロジェクトで管理され、
これらの設定と共に使用されるシークレットは[Vault](https://vault.gitlab.net)で管理されています。

ランナーは`runners-manager-distribution-(com|dev)-(blue|green)-<count>`という命名規則を使用しています。

NOTE: これらのランナーマネージャーにはまだブルー/グリーンデプロイメントが設定されていませんが、
[Issue 1138](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1138)では
これらのランナーマネージャーマシンでのGitLab Runnerのアップグレードを容易にするためにブルー/グリーン
デプロイメントの使用について検討しています。現在は、`gitlab.com`と`dev.gitlab.org`それぞれに
単一の「`blue`」ランナーマネージャーのみが利用可能です。

### ビルドマシン

`com`と`dev`の両方のランナーは、`autoscale`設定で`docker-machine`エグゼキューターを使用して
同一のマシンをスピンアップします。スピンアップされる各タイプのマシンは以下のとおりです：

1. `distribution-(com|dev)-amd64-runner-gcp` - このランナーはGCP上に100GB SSDを備えた
   `n1-highcpu-32`マシンをスピンアップし、`amd64`アーキテクチャ向けの`omnibus-gitlab`
   GNU/Linuxパッケージのビルドに使用されます。

1. `distribution-(com|dev)-arm64-runner-gcp` - このランナーはGCP上に100GB SSDを備えた
   `t2a-standard-8`マシンをスピンアップし、`arm64`アーキテクチャ向けの`omnibus-gitlab`
   GNU/Linuxパッケージのビルドに使用されます。

1. `distribution-(com|dev)-arm64-runner-aws` - このランナーはAWS上に100GB SSDを備えた
   `m6g.2xlarge`マシンをスピンアップし、`armv7`アーキテクチャ（Raspberry Pi）向けの
   `omnibus-gitlab` GNU/Linuxパッケージのビルドに使用されます。GCPのT2Aマシンは
   [32ビット命令セットをサポートしていない](https://cloud.google.com/compute/docs/general-purpose-machines#t2a_limitations)ため使用できませんが、
   AWSのGravitonはこれをサポートしているためです。

### メンテナンスタスク

**前提条件：**

- ノードへのアクセス権。
  - SSHアクセスは、[Chef Repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)に公開SSHキーと`build`グループアクセスを追加することで付与されます。この[アカウント例](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/17825ae3faefcbe9b6d80117d63cd1c17186fc51/data_bags/users/balasankarc.json)を参照してください。
- [Chef Vault](https://vault.gitlab.net/)内の特定フォルダーへのアクセス権。
- [ops chef repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)のmasterへのマージ権限。
  これは通常チームメンバーには付与されていません。そのためMRを作成後、アクセス権を持つ人物
  （主にInfrastructureチームのメンバー）にレビューとマージを依頼してください。

#### GitLab CIランナーのバージョン変更

*Distributionチームのメンバー誰でも実行可能：*

   1. ランナーのバージョンを更新するchef repoへの新しいマージリクエストを作成します。

   1. CIがパスし、別のチームメンバーによるレビューが完了していることを確認します。

   1. 変更をchef repoにマージします。

   1. ノードにログインし、以下を実行します。

      ```sh
      sudo /root/runner_upgrade.sh
      ```

      これによりアップグレードが実行されます。chef-clientサービスを停止し、ランナーを停止して
      マシンをクリーンアップし、chef-clientを実行して新しいバージョンを取得し、
      最後にGitLab Runnerを再起動します。
