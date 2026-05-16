---
title: Geo スケジュールパイプライン
description: "スケジュールされた Geo パイプラインのドキュメント"
upstream_path: "/handbook/engineering/infrastructure-platforms/tenant-scale/geo/scheduled_pipelines/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-26T12:28:09-05:00"
---

## 概要

[GET](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
と [gitlab-qa](https://gitlab.com/gitlab-org/gitlab-qa) を組み合わせて、Geo に破壊的な変更がないかどうかを確認するための[スケジュールパイプライン](https://gitlab.com/gitlab-org/geo-team/geo-ci/-/pipeline_schedules)が定期的に実行されます。エラーを確認するために[アラート](https://gitlab.com/gitlab-org/geo-team/geo-ci/-/alert_management)をチェックし、適切に対処する必要があります。

## パイプライン

| タイトル                  | 説明                                           | 頻度                         |
| -----                  | -----------                                           | ------                            |
| 1k QA                  | 1k リファレンスアーキテクチャに対して Geo QA ステップを実行 | 非アクティブ                          |
| 3k QA                  | 3k リファレンスアーキテクチャに対して Geo QA ステップを実行 | 非アクティブ                          |
| 1k Failover & Recovery | 1k リファレンスアーキテクチャでフェイルオーバーをテスト         | 非アクティブ                          |
| 1k Rebuild             | 1k リファレンスアーキテクチャを破棄して再作成  | UTC 午前 4 時に毎日                  |
| 3k Rebuild             | 3k リファレンスアーキテクチャを破棄して再作成  | UTC 午前 4 時に毎週月曜日                |
| 3k Update              | 3k リファレンスアーキテクチャで GitLab をアップグレード      | UTC 午前 4 時に火曜日から金曜日 |

## 対応方法

1. [アラートリスト](https://gitlab.com/gitlab-org/geo-team/geo-ci/-/alert_management)
   でトリガーされた未割り当てのアラートを確認する
1. 未対処のアラートを確認し、自分自身に割り当てる
1. 失敗したパイプラインを確認して障害の原因を特定する
    1. すべてのインスタンスは [gitlab-qa-geo-ci](https://console.cloud.google.com/home/dashboard?project=gitlab-qa-geo-ci-737c31) GCP グループで構築されています。
       Geo エンジニアはグループへのアクセス権を持っているはずで、必要に応じてログにアクセスするために個々の VM にログインできます。
1. 問題がない場合は、アラートを解決済みとしてマークする
1. 問題がある場合は、解決を追跡するためのインシデントを作成する
1. 同じ理由で複数のアラートがトリガーされている場合は、インシデントを 1 つだけ作成する
1. 単純な修正の場合は、修正してインシデントをクローズする
1. 単純な修正でない場合は
   1. 修正を処理するためのフォローアップ Issue を開く
   1. 失敗したテストを[隔離](https://docs.gitlab.com/ee/development/testing_guide/flaky_tests.html#quarantined-tests)する
   1. インシデントをクローズする
