---
title: "Distribution チームの Renovate 利用"
description: "Distribution チームが使用する外部 GitLab プロジェクト、これらからの MR の処理方法、Renovate のメンテナンスと新しい依存関係の追加に関するリソースについて説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/renovate/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
---

## 共通リンク

* [Renovate](https://www.mend.io/renovate)
* [Renovate ドキュメント](https://docs.renovatebot.com)

## はじめに

私たちは Renovate を使用して外部リポジトリを監視し、アップグレードがリリースされたときに適切なプロジェクトへマージリクエストを開きます。

現在これを使用しているプロジェクトは以下のとおりです:

* [omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab)
  * [オープンなマージリクエスト](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8557)
* [CNG images](https://gitlab.com/gitlab-org/build/CNG)
  * [オープンなマージリクエスト](https://gitlab.com/gitlab-org/build/CNG/-/issues/1927)
* [charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)
  * [オープンなマージリクエスト](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/5629)
* [cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)
  * [オープンなマージリクエスト](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/issues/1688)

リポジトリのすべての依存関係は [Renovate bot リポジトリ](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/tree/main/renovate/distribution) で定義されています。

## マージリクエストの処理

プロジェクトへのマージリクエストが開かれると、Renovate はレビュアールーレットを使用してレビュアーをアサインします。

マージリクエストが適切なタイミングで処理されることを確保するのは Distribution チーム全体の責任です。チームメンバーは作業を開始するときに、他のアサイニーを削除して、利用可能なマージリクエストを自分自身にアサインする必要があります。チームメンバーはアップグレードのために適切なマイルストーンを決定し、新しいソフトウェアバージョンが期待通りに動作することを確認する必要があります。すべて問題なければ、changelog エントリを追加して、マージリクエストをメンテナーにアサインします。

### omnibus-gitlab

マージリクエストのパイプラインはトリガーされたパイプラインを実行し、パッケージをビルドしてパッケージに対して gitlab-qa を実行します。ソフトウェアによっては、手動テストが必要な場合があります。満足したら、changelog エントリを作成し、マージリクエストをメンテナーにアサインします。

### CNG

パイプラインは必要なソフトウェアを使用して新しいイメージセットをビルドします。helm チャートのインスタンスを起動し、そのインスタンスに対してテストを実行します。完了したら、MR をマージのためにメンテナーにアサインします。

### charts/gitlab

パイプラインはチャートのレビューアプリバージョンをインストールし、レビューアプリに対してスペックテストと QA テストの両方が実行されます。ソフトウェアによっては、手動テストが必要な場合があります。満足したら、changelog エントリを作成し、マージリクエストをメンテナーにアサインします。

## Renovate のデバッグ

Renovate をデバッグするには、MR パイプラインで生成されたログとアーティファクトを確認してください。例として、この [マージリクエスト](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/merge_requests/863#note_1949448556) を参照できます。

## ローカルでの Renovate デバッグ

パイプラインの実行には時間がかかるため、より迅速なフィードバックのためにローカルで Renovate をデバッグすると便利です。

ローカルでのテスト方法を説明する [スニペット](https://gitlab.com/-/snippets/3761950) があります。

## 追加情報

* 追加情報は [Distribution: Renovate GitLab Bot 101](https://gitlab.com/gitlab-org/distribution/distributions-101/-/tree/main/GitLab%20Renovate%20Bot?ref_type=heads) にあります。
* 新しい依存関係を追加するための具体的な手順は [Renovate GitLab ドキュメント](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/blob/main/docs/setting-up-a-new-project.md) にあります。
