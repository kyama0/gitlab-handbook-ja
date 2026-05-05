---
title: "Distributionチームのインフラとメンテナンス"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
---

## 共通リンク

* [DistributionチームのHandbook](..)

## インフラ

チームのタスクの一環として、チームは以下のノード/タスクに対して責任を負います：

* `dev.gitlab.org`: この内部GitLabインスタンスは毎晩CEパッケージを実行し、
  公式パッケージのビルドに使用されます。このインスタンスがより広範なビルドパイプラインに
  どのように関わるかについては、[ビルドインフラ](../../build-infrastructure.md)を参照してください。
  ノードの詳細およびメンテナンスタスクは
  [dev.gitlab.org固有のドキュメント](dev-gitlab-org/)を参照してください。

* ビルドマシン: 各種CIジョブでパッケージのビルドと公開に使用されるマシンをスピンアップする
  ランナーマネージャーマシンです。ノードの詳細およびメンテナンスタスクは
  [ビルドマシン固有のドキュメント](build-infrastructure.md)を参照してください。

* `packages.gitlab.com`: GitLab Infrastructureチームが管理するセルフホスト型パッケージサーバーです。
  DistributionチームがGitLab CEおよびEEのomnibus-gitlabパッケージを配布するために使用し、
  Verifyチームがgitlab-runnerパッケージをユーザーに配布するためにも使用されます。
  GitLab CEおよびEEパッケージは`dev.gitlab.org`上のCIパイプラインを通じてビルドされます。

  * _Distributionはパッケージサーバーをツールとして使用しており、それに関連するメンテナンスタスクはありません。
  パッケージサーバーは現在、Packagecloud.ioが提供するパッケージを使用して自社インフラ上にデプロイされています。
  Infrastructureチームがサポートを必要とする場合、Distributionチームはベストエフォートで問題解決にあたるべきです。_

* `gitlab.com`と`dev.gitlab.org`のSSH公開鍵を最新の状態に保つこと: **omnibus-gitlab**のCI設定は、
  実行中にこれらのサーバーの公開SSHキーを使用します。キーはコードベース内（[`support/known_hosts`](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/support/known_hosts)）に保存されており、
  いずれかが変更された場合に更新するのはチームの責任です。そのためには：

  ```console
  bundle exec rake infrastructure:known_hosts
  git add support/known_hosts
  git commit -m "Update SSH keys"
  ```

  この変更は独立したMRとしてプッシュし、メンテナーにレビューを依頼してください。

## 外部サービス

チームのタスクの一環として、チームは以下の外部サービスを使用します：

* [dependencies.io](https://www.dependencies.io/): GitLabが必要とするソフトウェアコンポーネントを自動的に更新するために使用されます。このサービスの使い方については[固有のドキュメント](https://www.dependencies.io/quickstart/)を参照してください。
