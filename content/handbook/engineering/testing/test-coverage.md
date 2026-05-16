---
title: "テストカバレッジ"
description: "Test Platform 部門は特定のシナリオのテストをサポートするカバレッジを有しています。"
upstream_path: "/handbook/engineering/testing/test-coverage/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-21T10:07:01+12:00"
---

### オフライン環境 / エアギャップ GitLab QA シナリオ

Test Platform 部門は、[オフライン環境 / エアギャップ](https://docs.gitlab.com/ee/user/application_security/offline_deployments/)テストをサポートする GitLab QA シナリオを持っています。
[シナリオ](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/lib/gitlab/qa/scenario/test/instance/airgapped.rb) `Test::Instance::Airgapped` は [GitLab QA](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#testinstanceairgapped) テストシナリオの一部です。このスイートは、特定のポートへのアクセスを許可しつつその他のトラフィックを `iptables` でドロップするよう設定された [Gitaly Cluster](https://docs.gitlab.com/ee/administration/gitaly/) を含むテスト環境に対して実行されます。

#### テスト実行スケジュール

これは [`gitlab-org/gitlab` ナイトリースケジュールパイプライン](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/ci/test-on-omnibus-nightly/main.gitlab-ci.yml) でトリガーされ、CE および EE のほぼすべてのテストスイートが実行されます（外部ソースからのデータインポートなど、ネットワーク接続に依存する製品機能のテストは除外されます）。`gitlab-org/gitlab` ナイトリースケジュールパイプラインの結果は [Allure レポート](https://gitlab-qa-allure-reports.s3.amazonaws.com/nightly/master/index.html) で確認でき、失敗などのテスト状態でフィルタリングできます。
ナイトリーパイプラインは [`gitlab-org/gitlab` ナイトリースケジュールパイプライン](https://gitlab.com/gitlab-org/gitlab/-/pipeline_schedules) ページ（内部のみ）で確認できます。
オフライン環境 / エアギャップテストのジョブ名は `ce:airgapped` および `ee:airgapped` です。

#### その他の参考ガイド

Secure ステージには、アナライザーがオフラインで実行できることをテストするための追加テストがあります。
[セキュアテスト](https://gitlab.com/gitlab-org/security-products/tests/common/-/blob/master/README.md#known-testing-branches)（内部のみ）の詳細情報をご参照ください。

オフライン環境のテスト設定については、[オフライン GitLab インストールのはじめかた](https://docs.gitlab.com/ee/topics/offline/quick_start_guide.html) ガイドに従ってください。セキュアスキャナーの操作手順は [オフライン環境](https://docs.gitlab.com/ee/user/application_security/offline_deployments/) ガイドに記載されています。

### GitLab アップグレード

GitLab アップグレードテストカバレッジの目的は、[アップグレードパス](https://docs.gitlab.com/ee/update/index.html#upgrade-paths) に従うお客様が成功できることを確保することです。

最良のカバレッジを達成するため、Test Platform は[テストピラミッドアプローチ](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html)に従い、マージリクエストにおけるビルド環境なしのユニットテストへシフトレフトし、実際の環境を構築するシステムレベルテストに進みます:

1. 下位レベルテスト - [マルチバージョンマイグレーションアップグレードジョブ](#マルチバージョンマイグレーションアップグレードジョブ)
1. システムレベルテスト - [シングルノード/Docker アップグレード](#gitlab-qa-アップデートシナリオ)
1. システムレベルテスト - [マルチノード/セルフマネージドアップグレード](#upgrade-tester)

#### マルチバージョンマイグレーションアップグレードジョブ

| アップグレードパスシナリオ | 例 |
|--------------------------------------------|---------------------|
| 最新アップデートストップ → GitLab マージリクエスト | [16.7.7 → MR in 16.11](https://gitlab.com/gitlab-org/gitlab/-/jobs/6488556764) |

[`db:migrate:multi-version-upgrade`](https://docs.gitlab.com/ee/development/database/dbmigrate_multi_version_upgrade_job.html) は、最新の必須アップグレードストップから作業ブランチへのマルチバージョンアップグレードでマイグレーションが通過することを検証します。環境を構築せずにユニットレベルでマイグレーションエラーを早期発見できます。テストジョブはテストデータを含む最新の既知 GitLab バージョンストップから作成された PostgreSQL ダンプに対してデータベースマイグレーションを実行します。

#### GitLab QA アップデートシナリオ

| アップグレードパスの説明 | アップグレードパス | ジョブ名 | ジョブリンク例 |
|--------------------------|--------------|----------|------------------|
| 前メジャーバージョンの最新アップデートストップからブランチ/MR でビルドされた現在のパッケージへ | Major-1 → アップデートストップ → pre-package | `update-major` | [15.11.13 → 16.1.6 → 16.3.7 → 16.7.7 → 16.11-pre](https://gitlab.com/gitlab-org/gitlab/-/jobs/6539783636#L351) |
| 最新マイナーリリースからブランチ/MR でビルドされた現在のパッケージへ | Minor-1 → pre-package | `update-minor` | [16.10.1 → 16.11-pre](https://gitlab.com/gitlab-org/gitlab/-/jobs/6539783632#L350) |
| 現在のパッチバージョンからブランチ/MR でビルドされた現在のパッケージへ | Patch-1 → pre-package | `update-patch` | [17.7.6 → 17.7.7-pre](https://gitlab.com/gitlab-org/gitlab/-/jobs/9274895196) |
| ブランチ/MR でビルドされた現在のパッケージから次の安定 GitLab リリースへ | pre-package → N+1 | `update-from-patch-to-stable` | [17.7.7-pre → 17.8.4](https://gitlab.com/gitlab-org/gitlab/-/jobs/9274895197) |
| 現在の内部パッチバージョンからブランチ/MR でビルドされた現在のパッケージへ | Internal Patch-1 → pre-package | `update-patch-from-internal-to-internal` | [17.7.7-internal0-0 → 17.7.7-pre](https://gitlab.com/gitlab-org/gitlab/-/jobs/9832220256) |

GitLab QA には [`Test::Omnibus::UpdateFromPrevious`](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md?plain=0#testomnibusupdatefromprevious-full-image-address-current_version-majorminorpatch-from_edition) シナリオがあり、前（メジャー|マイナー|パッチ）バージョンから現在の GitLab バージョンへのアップデートを検証します（[シナリオコード](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/lib/gitlab/qa/scenario/test/omnibus/update_from_previous.rb)）。

また、[`Test::Omnibus::UpdateToNext`](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#testomnibusupdatetonext-full-image-address-current_version-from_edition) GitLab QA シナリオは開発バージョンから次の安定リリースへのアップグレードパスのテストをサポートします。

##### テスト実行スケジュール

1. `Test::Omnibus::UpdateFromPrevious` シナリオは以下で実行されます:
   - GitLab `master` に対して [2時間ごとのスケジュールパイプライン](https://gitlab.com/gitlab-org/gitlab/-/pipeline_schedules) から実行される `e2e:test-on-omnibus-ee` / `e2e:test-on-omnibus-ce` ジョブ
   - GitLab `master` に対して [ナイトリースケジュールパイプライン](https://gitlab.com/gitlab-org/gitlab/-/pipeline_schedules) から実行される `e2e:test-on-omnibus-nightly` ジョブ
   - MR 内でビルドされた pre-release パッケージへの安定リリースからのアップグレードをテストする [バックポート](/handbook/engineering/releases/backports/) マージリクエスト
1. `Test::Omnibus::UpdateToNext` シナリオは以下で実行されます:
   - MR 内でビルドされた pre-release パッケージから安定リリースへのアップグレードをテストする [バックポート](/handbook/engineering/releases/backports/) マージリクエスト

##### リリースパイプラインでのテスト実行

1. `Test::Omnibus::UpdateFromPrevious` シナリオは以下で実行されます:
   - [月次](https://gitlab.com/gitlab-org/release-tools/-/blob/8e91ba8c1a53e8f7cf3ec58b941c72b3258cd941/lib/tasks/monthly.rake#L254)および[パッチ](https://gitlab.com/gitlab-org/release-tools/-/blob/4bb7fc754df6d32c372f3683dfada93525a31a29/lib/tasks/security.rake#L415)リリースパイプラインで、現在の最新リリースバージョンから次のバージョンへのアップグレードをテスト

#### パフォーマンス環境のナイトリーアップグレード

Framework および Performance Enablement チームは、[Reference Architecture](https://docs.gitlab.com/ee/administration/reference_architectures/#how-to-interpret-the-results) ページに記載されているテストパフォーマンス環境をサポートしています。これらの環境は GitLab Environment Toolkit で構築され、環境に応じて毎日または毎週最新のナイトリーイメージにアップグレードされます。

詳細なプロセスは [パフォーマンスとスケーラビリティ](https://docs.gitlab.com/ee/administration/reference_architectures/#how-to-interpret-the-results) ページに記載されています。

#### Upgrade Tester

| アップグレードパスシナリオ | 例 |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 最新アップデートストップ → GitLab ナイトリー | [16.7.7 → nightly](https://gitlab.com/gitlab-org/quality/upgrade-tester/-/pipelines/1234507969) |
| 最新 GitLab リリース → GitLab ナイトリー | [16.10.1 → nightly](https://gitlab.com/gitlab-org/quality/upgrade-tester/-/pipelines/1240098663) |
| カスタムパスシナリオ | [15.0.0, 15.0.5, 15.4.6, 15.11.13, 16.1.6, 16.3.7, 16.7.7, 16.10.0](https://gitlab.com/gitlab-org/quality/upgrade-tester/-/pipelines/1238546334) |

[Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/) を使用して様々なアップグレードパスをビルドおよびテストすることに特化した Upgrade Tester パイプラインは、指定したバージョンから始まり最新のナイトリーパッケージまたは特定のバージョンで終わる環境をビルドおよびアップグレードします。各アップグレードで使用するパスは開始バージョンと終了バージョンによって異なります。例えば、バージョン 16.0.0 から開始する場合、アップグレードパスは `16.0.0, 16.1.6, 16.3.7, 16.7.7, nightly` となります。

スケジュールおよびテストに使用される Reference Architecture タイプの詳細は [Upgrade Tester プロジェクト](https://gitlab.com/gitlab-org/quality/upgrade-tester) を参照してください。テスト結果は Slack の `#qa-upgrade-results` チャンネルに報告され、Self-Managed Platform チームがモニタリングします。

#### 作業中

Test Platform チームは GitLab アップグレードカバレッジの改善に取り組んでおり、この取り組みは [epic#12458](https://gitlab.com/groups/gitlab-org/-/epics/12458) で追跡されています。
