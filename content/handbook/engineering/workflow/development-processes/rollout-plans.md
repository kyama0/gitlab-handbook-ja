---
title: 開発部門のロールアウトプランプロセス
upstream_path: /handbook/engineering/workflow/development-processes/rollout-plans/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## このページについて

このページでは、開発部門内のロールアウトプランの要件、成功基準、および手順について説明します。

### ロールアウトプランとは何か、なぜ必要なのか？

ロールアウトプランとは、変更を本番環境に正常に適用し、期待通りに動作させるための方法の説明です。

ロールアウトプランを作成するプロセスは、多くの場合プラン自体よりも価値があります。なぜなら、成功を達成するために何をすべきかを考えることに時間を投資するからです。これにより、本番環境に移行する前に対処できる実装または観測可能性の問題が明らかになる場合があります。その時点では変更が容易であることが多いです。

これらのプランを持つことが有用なのは、初回でロールアウトを成功させることで、手戻りや機能が期待通りに動作しないリスクを軽減できるためです。

### ロールアウトプランの作成

ロールアウトプランは、必要なプロジェクトやIssueごとに異なります。

最低限、ロールアウトプランには以下が含まれている必要があります:

- 期待される結果の詳細。
- その結果を検証する方法についての情報。
- ロールアウトに影響する可能性のあるリスクや障壁の考慮。
- ロールアウトが失敗した場合のロールバックプランの定義。

ロールアウトプランに含めることを検討すべき事項:

1. 期待値
    - ロールアウトプランが完了した時に期待される成果を定義する。どのように機能すべきか？ユーザーには何が表示されるか？システムはどのような詳細やメトリクスを提供すべきか？
    - ロールアウトが失敗した場合に何が起こるかを文書化して、_予期しない_成果に備える。何を見れば分かるか？これらの予期しない成果のリスクをどのように軽減できるか？
    - 問題が発生した場合の対応手順を文書化する。これには特定のSlackチャンネルでSREチームと連携したり、フィーチャーフラグを無効化したりするなど複数のタスクが含まれる場合があります。完全なロールバックプランになる場合もあります。
1. 観察するメトリクス
    - 期待値が満たされているかどうかを理解するために監視できるデータへのリンクを提供する。データはSentry、Sitespeed、Grafana、Kibana、または私たちの他の[監視ツール](/handbook/engineering/monitoring/#monitoring)などのツールからの事前定義済み検索に基づく場合があります。
1. テストシナリオ
    - ロールアウト中にロールアウトが期待通りに機能していることを確認するための手動テストを定義する。
    - 必要な自動化テストが通過していることを確認するためにカウンターパートと連携する。
    - プロダクトへの広範な影響を持つ変更については、テストケースを収集するために関連するプロダクトグループと連携する。
    - キャッシュされたデータや以前有効な状態のデータなど、ロールアウト中のデータの異なる状態を考慮する。
    - [マルチバージョン互換性/後方互換性のサポート](https://docs.gitlab.com/ee/development/multi_version_compatibility.html)を確認するためのチェックリストを含める。
1. コミュニケーション
    - 他のステージグループ、部門などの関連ステークホルダーを含むコミュニケーションプランや、変更をユーザーに伝えるための[サポートとの連携](/handbook/support/managers/change-management/)を含める。
    - ロールアウト失敗のシグナルを伝達するまたは探す場所をロールアウトプランに記載する（#productionSlackチャンネルや新しいIssueリストなど）。
1. ステージングおよび本番環境のチェック
    - 変更がステージングおよび本番環境でリリースされた際に行う必要がある特定のチェックを含める。
    - セルフマネージドインスタンスに特別に必要なチェックを含める。これは、リリース前に[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)で変更をテストすることを含む場合があります。
1. ロールアウトプロセス自体
   - ロールアウトの準備として何をしなければならないかを説明する
   - 従うべき具体的な手順を含める
   - 観察するメトリクスとそれをいつ観察すべきかを含める（たとえば、一部の機能は変更が成功したかどうかを判断する前に1日分のメトリクス観察が必要）
1. ロールアウト後のレトロスペクティブ
   - 次のロールアウトが容易になるよう、ステージ/グループの共通プラクティスを更新する
   - ロールアウトを振り返り、チームに学びを共有する
   - ロールアウトをより安全で効率的にするためにその一部を自動化するIssue/MRを開くことを検討する。マネージャーにこの作業を[エンジニアリングアロケーション](/handbook/product/product-processes/#prioritization-framework)の一部にするよう推薦する。

#### 追加のロールアウトプランプロセス

注意すべき追加のロールアウトプランプロセス:

- [低リスクのフィーチャーフラグのロールアウト](/handbook/product-development/how-we-work/product-development-flow/feature-flag-lifecycle/#rollout)
- [高リスクのフィーチャーフラグのロールアウト](/handbook/engineering/infrastructure-platforms/change-management/#feature-flags-and-the-change-management-process)
- [実験の実行](/handbook/engineering/development/growth/experimentation/#experiment-rollout-issue)

#### ロールアウトプランテンプレート

上記のシナリオ向けにこれらのテンプレートが存在しますが、ロールアウトプランのベースとしても使用できます:

- [本番環境の変更](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/change_management.md)
- [フィーチャーフラグロールアウト](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md)
- [実験ロールアウト](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Experiment%20Rollout.md)

### 過去のロールアウトプランの例

- [失敗する可能性がある際にシステムへの悪影響を防ぐ](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1085)
- [大規模な変更のロールアウト前のプレチェックリストの作成](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1267#pre-check)
- [フィーチャーフラグの背後での実験のロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/281024)
- [フィーチャーフラグのロールアウト](https://gitlab.com/gitlab-org/gitlab/-/issues/335799)
