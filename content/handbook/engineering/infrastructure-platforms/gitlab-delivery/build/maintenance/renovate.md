---
title: "DistributionチームのRenovate利用方法"
description: "DistributionチームがRenovateを利用している外部GitLabプロジェクト、MRの処理方法、Renovateのメンテナンスと新しい依存関係の追加に関するリソースについて説明します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/maintenance/renovate/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T23:09:27Z"
translator: claude
stale: false
lastmod: "2025-11-03T17:49:46+01:00"
---

## 共通リンク

* [Renovate](https://www.mend.io/renovate)
* [Renovateドキュメント](https://docs.renovatebot.com)

## はじめに

私たちは外部リポジトリを監視し、アップグレードがリリースされたときに適切なプロジェクトへのマージリクエストを開くためにRenovateを使用しています。

現在これを使用しているプロジェクトは以下のとおりです：

* [omnibus-gitlab](https://gitlab.com/gitlab-org/omnibus-gitlab)
  * [オープンマージリクエスト](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8557)
* [CNG images](https://gitlab.com/gitlab-org/build/CNG)
  * [オープンマージリクエスト](https://gitlab.com/gitlab-org/build/CNG/-/issues/1927)
* [charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)
  * [オープンマージリクエスト](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/5629)
* [cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)
  * [オープンマージリクエスト](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/issues/1688)

リポジトリのすべての依存関係は[Renovate botリポジトリ](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/tree/main/renovate/distribution)で定義されています。

## マージリクエストの処理

プロジェクトへのマージリクエストが作成されると、RenovateはReviewer Rouletteを使用してレビュアーをアサインします。

マージリクエストを適時に処理することはDistributionチーム全員の責任です。チームメンバーは、担当可能なマージリクエストに取り組む際は、他のアサインを削除して自分自身をアサインします。チームメンバーはアップグレードのための適切なマイルストーンを決定し、新しいソフトウェアバージョンが期待通りに動作するかを検証する必要があります。問題がなければ、changelogエントリを追加してマージリクエストをメンテナーにアサインします。

### omnibus-gitlab

マージリクエストのパイプラインはトリガーされたパイプラインを実行し、パッケージをビルドしてパッケージに対してgitlab-qaを実行します。ソフトウェアによっては手動テストが必要な場合があります。満足できる状態になったら、changelogエントリを作成し、マージリクエストをメンテナーにアサインします。

### CNG

パイプラインは必要なソフトウェアを使用して新しいイメージセットをビルドします。helmチャートのインスタンスを起動し、そのインスタンスに対してテストを実施します。完了したら、MRをメンテナーにアサインしてマージしてもらいます。

### charts/gitlab

パイプラインはチャートのレビューアプリバージョンをインストールし、specテストとQAテストの両方がレビューアプリに対して実行されます。ソフトウェアによっては手動テストが必要な場合があります。満足できる状態になったら、changelogエントリを作成し、マージリクエストをメンテナーにアサインします。

## Renovateのデバッグ

Renovateをデバッグするには、MRパイプラインによって生成されたログとアーティファクトを確認します。
この[マージリクエスト](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/merge_requests/863#note_1949448556)に例があります。

## Renovateのローカルデバッグ

パイプラインは実行に時間がかかるため、より速いフィードバックを得るためにRenovateをローカルでデバッグすると便利です。

ローカルでテストする方法を説明した[スニペット](https://gitlab.com/-/snippets/3761950)があります。

## 追加情報

* [Distribution: Renovate GitLab Bot 101](https://gitlab.com/gitlab-org/distribution/distributions-101/-/tree/main/GitLab%20Renovate%20Bot?ref_type=heads)に追加情報があります。
* 新しい依存関係を追加するための具体的な手順は[Renovate GitLabドキュメント](https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot/-/blob/main/docs/setting-up-a-new-project.md)にあります。
