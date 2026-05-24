---
title: パイプライン DRI オンコールローテーション
description: >-
  Developer Experience サブ部門には 2 つのオンコールローテーションがあります：パイプライントリアージ（SET 主導）とインシデント管理（EM 主導）。
upstream_path: /handbook/engineering/testing/oncall-rotation/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

> ⚠️ 注意：このプロセスは現在更新中です。Software Engineer in Test（SET）の役割は Backend Engineer へ移行中であり、パイプライン DRI プロセスは廃止される予定です。決定が確定次第、このページは新しいプロセスを反映するように改訂されます。

## Developer Experience サブ部門のパイプライントリアージオンコールローテーション

これは、複数の環境で実行されるさまざまなスケジュールパイプラインの失敗をデバッグ / 分析する責任を共有するためのスケジュールです。
Developer Experience サブ部門のオンコールは、GitLab の通常の業務時間外の作業を含みません。週末と[Family and Friends Days](/handbook/company/family-and-friends-day/)も除外されます。チームメンバーは、オンコール週中に 1:1 ミーティングや部門ミーティングへの出席を非同期に変更する完全な自律性を持ちますが、その場合はマネージャーへの適切な連絡をお願いします。

現在のイテレーションでは、タイムゾーンベースのローテーションがあり、トリアージ活動は各チームメンバーの勤務時間中に行われます。

詳細なスケジュールパイプラインの一覧と、失敗したテストの適切なレベルの調査方法および次のステップを判断するための具体的な手順については、[デバッグ失敗テスト](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/)のガイドラインと[スケジュールパイプラインの一覧](/handbook/engineering/testing/end-to-end-pipeline-monitoring/)、[パイプライントリアージ](/handbook/engineering/testing/pipeline-triage/)をご参照ください。

### 責任

#### 失敗のトリアージ、記録、ブロック解除

- 新しいローテーション開始の前の土曜日、ハンドオーバーボットが[pipeline-triage](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues/)プロジェクトに Issue を作成します。
- ハンドオーバーボットは、以下のスケジュールに従って、次週の DRI に作成されたトリアージ Issue を割り当てます。
- スケジュールされた期間中、テスト実行に関連するサポートタスクは、Directly Responsible Individual（[DRI]）の最高優先事項となります。
- [Production](https://ops.gitlab.net/gitlab-org/quality/production/pipelines)、[Canary](https://ops.gitlab.net/gitlab-org/quality/canary/pipelines)、[Staging](https://ops.gitlab.net/gitlab-org/quality/staging/pipelines) パイプラインのエンドツーエンドテスト失敗の報告と分析は、[GitLab `master`](https://gitlab.com/gitlab-org/gitlab/pipelines)や[GitLab FOSS `master`](https://gitlab.com/gitlab-org/gitlab-foss/pipelines)よりも優先されます。これはテストの修正よりも優先されることにも注意してください。
- [Preprod](https://ops.gitlab.net/gitlab-org/quality/preprod/-/pipelines) パイプラインは、リリース週の月曜日から木曜日のリリース候補テスト期間中、`Production` および `Staging` パイプラインと同等の優先度を持ちます。
- 時間的制約がある場合、DRI は[Staging](https://ops.gitlab.net/gitlab-org/quality/staging/pipelines)、[Canary](https://ops.gitlab.net/gitlab-org/quality/canary/pipelines)、[Production](https://ops.gitlab.net/gitlab-org/quality/production/pipelines)パイプラインの失敗をアプリケーション問題かインフラ問題かを判断するのに十分な範囲で報告・分析し、[適切にエスカレーション](/handbook/engineering/workflow/development-processes/infra-dev-escalation/process/)してください。それらのパイプラインで報告されたすべての失敗は、そうでないと判断されるまで ~priority::1/~severity::1 として扱われます。つまり、できるだけ早く（理想的には報告から 2 時間以内に）調査する必要があります。DRI が対応できない場合は、対応できない調査を翌週の DRI に委任してください。どちらの DRI も対応できない場合は、`#s_developer_experience` Slack チャンネルでヘルプを求めてください。
- スモークスペックで新しい ~severity::1 リグレッションが見つかった場合、[インシデントを作成してリリースをブロックする](/handbook/engineering/deployments-and-releases/deployments/#i-found-a-regression-what-do-i-do-next)ことを検討してください。
- 他のすべての失敗調査を適時（理想的には報告から 24 時間以内）に完了することが重要です。DRI が[すべてのパイプライン](/handbook/engineering/testing/end-to-end-pipeline-monitoring/)で報告されたすべての失敗を時間内に調査できない場合は、`#s_developer_experience` Slack チャンネルでヘルプを求めてください。
- https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/530 のような横断的な Issue は、オンコール DRI がトリアージして次のアクションを決定します。他のチームメンバーがそのような Issue に遭遇した場合は DRI に通知してください。DRI は必要に応じて `#s_developer_experience` チャンネルを通じて部門の残りのメンバーに通知できます。
- Developer Experience サブ部門の全員がオンコール DRI をサポートし、Zoom コールに参加したり、必要に応じてヘルプを提供できるようにしてください。
  - [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/-/settings/ci_cd)の CI/CD 変数に変更が必要で DRI がアクセス権を持っていない場合、`#dx_maintainers` と `#development` Slack チャンネルでヘルプを求めることができます。Quality のメンテナーであれば、支援するのに十分なアクセス権を持っているはずです。
- 毎日、APAC/EMEA/AMER の DRI は[このように](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues/45#note_408358615)、その日に見つかった失敗をトリアージ Issue にまとめます。これは他のタイムゾーンの DRI への非同期ハンドオフとして機能します。
- DRI は [dri gem](https://gitlab.com/gitlab-org/ruby/gems/dri) を使用して、報告のハンドオフを自動化し、新規作成された失敗や環境ごとに有効化されたフィーチャーフラグなどの有用なトリアージ情報を表示することができます。
- staging/canary でスモークスペックが失敗すると、デプロイヤーパイプラインがブロックされ、本番インシデントとして扱われる可能性があることに注意してください。

### スケジュール

パイプライントリアージのローテーションスケジュールを確認するには、[pipeline-triage](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule)プロジェクトをご覧ください。

または Slack の `chatops` で `/chatops run quality dri schedule` コマンドを使用してください。

### スケジュールされたパイプラインの DRI の責任

- DRI は[トリアージ](/handbook/engineering/testing/pipeline-triage/)を行います。さらなる支援が必要な場合は `#s_developer_experience` Slack チャンネルでヘルプを求めてください。
- DRI はテストを修正するか検疫するかを判断します。
- すべての修正または検疫は、リリースの遅延を避けるためにすべてのリリースブランチに適用してください。
- DRI は共有所有権のテスト（`group::unknown` でラベル付けされた MR）に対する[自動生成された検疫 MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/?sort=merged_at_desc&state=opened&label_name%5B%5D=automation%3Abot-authored&label_name%5B%5D=quarantine&label_name%5B%5D=group%3A%3Aunknown)をレビューし、マージするかクローズするかを決定します。
- DRI は定期的に[未割り当ての検疫 Issue のリスト](https://gitlab.com/gitlab-org/gitlab/issues?state=opened&label_name%5B%5D=QA&label_name[]=type::bug)を確認して対応してください。
- スケジュールされた期間中に DRI が利用できない場合（2 日以上）、別のチームメンバーとスケジュールを交換できます。スケジュール中の DRI の不在が 2 日未満の場合、翌週の同じタイムゾーンの DRI がカバーできます。

### デプロイメントパイプラインの DRI の責任

- DRI はデリバリーチームがリリースプロセスに影響するテスト失敗のデバッグを支援します。
- DRI が利用できない場合は、翌週の同じタイムゾーンの DRI が代わりに対応します。

### 新規採用者のオンコールシャドウ

新規採用者が初めてのオンコールローテーションに備えられるように、最初のローテーションの数日前に DRI のシャドウを行ってください。新規採用者が DRI になったとき、翌週の DRI は質問に答えてテスト失敗のトリアージ / デバッグを支援するために、数日間新規採用者とペアを組んでください。

### インフラおよび環境アップグレードのサポート

Developer Experience チームは、GitLab 環境への計画されたアップグレードのサポートを提供します。これにより、変更がデプロイ前後に適切なテストスイートを通じて適切に検証されることが保証されます。

アップグレードサポートを要請するチーム（勤務時間内外を問わず）向け：

1. 事前に計画する：[RFH（ヘルプリクエスト）Issue](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help)を使用してください。少なくとも 2 週間前にリクエストを提出してください。
1. 重要な詳細を含める：

    - 提案されたアップグレードの日付と時刻
    - アップグレード予定の環境
    - アップグレードの種類（インフラ、データベース、サービスの分解など）
    - リクエストの例：
      - [Sec Decomposition GPRD ロールアウト](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help/-/issues/2)
      - [CI Decomposition ロールアウト](https://ops.gitlab.net/gitlab-com/gl-infra/db-migration/-/blob/ae6240c4bdf94a7774f9ad844dcec26f936a2946/.gitlab/issue_templates/ci_decomposition.md)
      - [PostgreSQL 14 アップグレード](https://ops.gitlab.net/gitlab-com/gl-infra/db-migration/-/blob/ae6240c4bdf94a7774f9ad844dcec26f936a2946/.gitlab/issue_templates/pg14_upgrade.md)
      - [データベースアップグレード中の SET カバレッジリクエスト](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help/-/work_items/70)

1. リクエスト提出後の対応について：

   - リクエストはトリアージされ、カバレッジスケジュールが作成されます。
     - 勤務時間内：
       - リクエストは[現在のパイプライン DRI](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule)が対応します
     - 週末：
       - 24 時間をカバーするための 4 時間シフトのスケジュールが作成されます。
   - スケジュールと希望するコミュニケーション方法は、予定されているアップグレードの 1 週間前までに共有されます。
   - オンコールの全員を専用 Slack チャンネルに追加して、シフト中にアップグレードの進捗を監視できるようにしてください。

注意：APAC エリアにはチームメンバーが多くないため、4 時間の空白時間が発生することがあります。その間は以下のトラブルシューティングガイドを使用することをお願いします：

- [Duo を使用したテスト失敗のデバッグ](../testing/using-duo-to-debug-test-failures.md)
- [E2E テスト失敗 Issue ガイド](../testing/guide-to-e2e-test-failure-issues.md)

パイプライン DRI 向け：

1. アップグレード前の準備：

    - 要請チームとアップグレード計画をレビューする
    - 変更を検証するための適切なテストスイートを特定・文書化する
    - テスト環境の準備が整っていることを確認する
    - テストスイートを実行してテスト結果のベースラインを取得する

2. アップグレード中：

    - テスト結果を監視・レビューする
    - テスト関連の問題に支援を提供する
    - 観察された問題や異常を文書化する

3. アップグレード後：

    - 特定された問題や改善事項のフォローアップ Issue を作成する
    - 学んだ教訓を文書化する

4. 利用できない場合：

    - 計画されたアップグレード（特に時間外アップグレード）に参加できない場合は、すぐにチームに連絡してカバレッジを見つける
    - 代替 DRI にアップグレード計画とテスト要件を説明する

## Developer Experience サブ部門のインシデント管理オンコールローテーション

EM はインシデントの監視、対応、軽減の責任を共有してください。
Developer Experience サブ部門のオンコールは、GitLab の通常の業務時間外の作業を含みません。週末と[Family and Friends Days](/handbook/company/family-and-friends-day/)も除外されます。
現在のイテレーションでは、インシデント管理活動は各チームメンバーの勤務時間中に行われます。

### 責任

- Engineering Manager は Slack チャンネル `#incidents` に参加していることを確認してください。
- Engineering Manager はインシデント管理チャンネルの監視、追跡、直接支援、委任、そして Developer Experience サブ部門内のインシデントの認知向上を適切に支援してください。
- 現在の DRI はインシデント Issue に明確に記載されているべきです。
- 是正措置が必要な場合、EM は DRI が Issue を作成して ~'corrective action' のラベルを付けていることを確認してください。
- Developer Experience サブ部門の全員がオンコール DRI をサポートし、必要に応じて Zoom コールに参加したりヘルプを提供できるようにしてください。
