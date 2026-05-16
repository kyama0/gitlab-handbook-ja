---
title: "Distribution チームのインフラとメンテナンス"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-16T11:23:19-05:00"
---

## 共通リンク

* [Distribution チームハンドブック](..)

## インフラ

チームタスクの一環として、チームは以下のノード/タスクに対して責任を持ちます：

* `dev.gitlab.org`: この内部 GitLab インスタンスは毎晩 CE パッケージを実行し、公式パッケージのビルドおよびセキュリティリリース関連の MR の公開前ホスティングに使用されます。ノードの詳細とメンテナンスタスクは [dev.gitlab.org 固有のドキュメント](dev-gitlab-org/)にあります。

* ビルドマシン: さまざまな CI ジョブのパッケージのビルドと公開に使用されるマシンをスピンアップする Runner マネージャーマシンです。ノードの詳細とメンテナンスタスクは[ビルドマシン固有のドキュメント](build-infrastructure.md)にあります。

* `packages.gitlab.com`: これは GitLab Infrastructure チームが管理するセルフホストのパッケージサーバーです。Distribution チームが GitLab CE と EE の omnibus-gitlab パッケージを、Verify チームが gitlab-runner パッケージをユーザーに提供するために使用しています。GitLab CE と EE パッケージは `dev.gitlab.org` の CI パイプライン経由でビルドされます。

  * _Distribution はパッケージサーバーをツールとして使用しており、それに関連するメンテナンスタスクはありません。パッケージサーバーは現在、Packagecloud.io が提供するパッケージから自社インフラ上にデプロイされています。Infrastructure チームが支援を必要とする場合、Distribution チームは Issue の解決にベストエフォートで提供すべきです。_

* `gitlab.com` と `dev.gitlab.org` の SSH 公開鍵を最新の状態に保つ: **omnibus-gitlab** の CI 設定は実行中にこれらのサーバーの SSH 公開鍵を使用します。鍵はコードベース（[`support/known_hosts`](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/support/known_hosts)）に保存されており、いずれかが変更された場合に更新するのはチームの責任です。変更する場合は以下のコマンドを実行します：

  ```console
  bundle exec rake infrastructure:known_hosts
  git add support/known_hosts
  git commit -m "Update SSH keys"
  ```

  この変更は別の MR としてプッシュし、メンテナーにレビューを依頼する必要があります。

## 外部サービス

チームタスクの一環として、チームは以下の外部サービスを使用しています：

* [dependencies.io](https://www.dependencies.io/): GitLab が必要とするソフトウェアコンポーネントを自動的に更新するために使用されます。このサービスの使用方法については[固有のドキュメント](https://www.dependencies.io/quickstart/)をご覧ください。
