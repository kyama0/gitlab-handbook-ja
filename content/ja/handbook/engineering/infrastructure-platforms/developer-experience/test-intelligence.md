---
title: "Test Intelligence"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/test-intelligence/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T21:28:32Z"
translator: claude
stale: false
---

## はじめに

[GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)の[パイプライン設定](https://docs.gitlab.com/ee/development/pipelines/index.html)のオーナーとして、Engineering Productivity チームは以下のメリットによってパイプラインの効率を改善することを目的としたいくつかのテストインテリジェンス戦略を採用しています:

- 最も失敗しやすいテストを優先することによるフィードバックループの短縮
- マージトレインが有効な場合により良くスケールするための高速パイプライン

これらの戦略には以下が含まれます:

- テストマッピングによる予測的テストジョブ
- フェイルファストジョブ
- 以前に失敗したテストの早期再実行
- パイプラインルールによる選択的ジョブ
- ラベルによる選択的ジョブ

## テストマッピングによる予測的テストジョブ

各マージリクエストのコード変更のカバレッジを提供するテストは最も失敗しやすいです。そのため、[GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)のマージリクエストパイプラインは、デフォルトで予測的なテストセットのみを実行します。これには以下が含まれます:

- [RSpec 予測ジョブ](https://docs.gitlab.com/ee/development/pipelines/#rspec-predictive-jobs): コードの変更にマッピングされた関連する RSpec テストを実行します
- [Jest 予測ジョブ](https://docs.gitlab.com/ee/development/pipelines/#jest-predictive-jobs): コードの変更にマッピングされた関連する Jest テストを実行します

詳細については <https://docs.gitlab.com/ee/development/pipelines/index.html#predictive-test-jobs-before-a-merge-request-is-approved> を参照してください。

## フェイルファストジョブ

各マージリクエストパイプラインには、コードの変更のカバレッジを提供する（最も失敗しやすい）すべての RSpec テストを実行することを目的とした[フェイルファストジョブ](https://docs.gitlab.com/ee/development/pipelines/#fail-fast-job-in-merge-request-pipelines)があります。テストマッピングには同じ [test_file_finder](https://gitlab.com/gitlab-org/ruby/gems/test_file_finder) gem を使用します。このジョブは早期に実行することで高速なフィードバックを提供し、フェイルファストジョブのテストのいずれかが失敗した場合は直ちにパイプラインの残りを停止します。
[GitLab](https://gitlab.com/gitlab-org/gitlab) が test_file_finder を使用してフェイルファストジョブを実装する方法の詳細については、この [YouTube 動画](https://www.youtube.com/watch?v=FCCbxZky5Nk) をご覧ください。
現在の設計は、テストの小さなセットにのみマッピングされる影響の小さいマージリクエストでのみ機能することに注意してください。マージリクエストで失敗しそうなテストが多数ある場合、それらを 1 つのジョブに入れることは実現可能ではなく、目的を無効にする長時間実行のボトルネックとなる可能性があります。

詳細については <https://docs.gitlab.com/ee/development/pipelines/index.html#fail-fast-job-in-merge-request-pipelines> を参照してください。

GitLab Premium の顧客で、Ruby プロジェクトに `フェイルファストジョブ` を組み込みたい場合は、[Verify/Failfast](https://docs.gitlab.com/ee/ci/testing/fail_fast_testing.html) テンプレートで設定できます。

## 以前に失敗したテストの早期再実行

マージリクエストで以前に失敗したテストは再び失敗する可能性が高いため、次の実行で最も緊急のフィードバックを提供します。
これらのテストに最高の優先度を付与するために、[GitLab](https://gitlab.com/gitlab-org/gitlab) パイプラインは[以前に失敗したテストを専用ジョブで早期に再実行](https://docs.gitlab.com/ee/development/pipelines/#re-run-previously-failed-tests-in-merge-request-pipelines)することで優先順位を付けています。これにより、注意が必要な場合に最初に失敗するジョブの 1 つになります。

詳細については <https://docs.gitlab.com/ee/development/pipelines/index.html#re-run-previously-failed-tests-in-merge-request-pipelines> を参照してください。

## パイプラインルールによる選択的ジョブ

GitLab パイプラインは数百のジョブで構成されていますが、すべてのジョブがすべてのマージリクエストに必要なわけではありません。たとえば、ドキュメントファイルのみを変更するマージリクエストはバックエンドテストを実行する必要がないため、パイプラインからすべてのバックエンドテストジョブを除外できます。
ファイルの変更に基づいて CI ジョブを含める/除外する方法については [specify-when-jobs-run-with-rules](https://docs.gitlab.com/ee/ci/jobs/job_control.html#specify-when-jobs-run-with-rules) を参照してください。
[GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)のパイプラインルールのほとんどは <https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/ci/rules.gitlab-ci.yml> で確認できます。

## ラベルによる選択的ジョブ

開発者はパイプラインルールで選択されたジョブに加えてジョブを実行するためのラベルを追加できます。これらのラベルは `pipeline:` で始まり、複数適用できます。よく使われる例:

- `~"pipeline:run-all-rspec"`
- `~"pipeline:run-all-jest"`
- `~"pipeline:run-as-if-foss"`
- `~"pipeline:run-as-if-jh"`
- `~"pipeline:run-praefect-with-db"`
- `~"pipeline:run-single-db"`

これらのパイプラインラベルをいつ使用するかについては、[ドキュメント](https://docs.gitlab.com/ee/development/pipelines/) を参照してください。
