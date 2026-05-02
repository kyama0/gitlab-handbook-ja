---
title: Distributionグループのテストプラットフォーム
upstream_path: /handbook/engineering/testing/distribution/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## 概要

このページの目的は、Distributionグループにおける既存の品質エンジニアリング活動を文書化することです。

### ダッシュボード

- [QE Distributionダッシュボード](https://gitlab.com/groups/gitlab-org/-/boards/2187925?label_name%5B%5D=Quality&label_name%5B%5D=devops%3A%3Asystems&label_name%5B%5D=group%3A%3Adistribution) - 品質エンジニアリングの作業項目を追跡するダッシュボード
- [Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard) - バグの優先順位付けに重要なメトリクスを視覚化するダッシュボード
- [バグ優先順位付けメトリクス](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard?:iid=2) - [バグ優先順位付け](#bug-prioritization)に必要なバグメトリクス（Distributionグループでフィルタリングすることを確認してください）

### 品質作業

品質作業は[epic#9057](https://gitlab.com/groups/gitlab-org/-/epics/9057)で追跡されています。このエピックには、Distributionグループにおける品質をより良くサポートするために取り組む必要がある大規模なイニシアチブが一覧されています。

### GitLab QA

GitLab QAはDistributionプロジェクトでGitLabが期待通りに動作することを検証するために使用されています。

| プロジェクト | テスト種類 | スケジュール   |
|--------------------|------------|-----------------------------|
| [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab)                | フル       | [QAミラーパイプラインがトリガーされる](https://gitlab.com/gitlab-org/omnibus-gitlab/-/blob/master/doc/development/pipelines.md#triggerqa-test) |
| [GitLab Charts](https://gitlab.com/gitlab-org/charts/gitlab)                  | サニティ     | [マージリクエストで自動実行](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/.gitlab-ci.yml)および[デフォルトブランチに対してスケジュール実行](https://gitlab.com/gitlab-org/charts/gitlab/-/pipeline_schedules)                                                                    |
| [GitLab Charts](https://gitlab.com/gitlab-org/charts/gitlab)                  | フル       | [マージリクエストで手動トリガー](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/.gitlab-ci.yml)                              |
| [GitLab Operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | スモーク      | [マージリクエストで自動実行](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/blob/master/.gitlab-ci.yml)        |
| [GitLab Operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | フル       | [手動トリガー](https://docs.gitlab.com/operator/developer/ci.html#qa-pipelines)               |
| [Reference Architecture Tester](https://gitlab.com/gitlab-org/distribution/reference-architecture-tester)                                                | フル       | [手動トリガー](https://gitlab.com/gitlab-org/omnibus-gitlab/-/blob/master/doc/development/pipelines.md#rat)およびFIPS QAナイトリー    |

開発用にGitLab QAをローカルで実行する方法については、[GitLab QAの実行](https://docs.gitlab.com/charts/development/gitlab-qa/)を確認してください。

#### QA失敗の調査

1. オープン中の[パイプライントリアージIssue](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues)で失敗を検索するか、[メインGitLabプロジェクト](https://gitlab.com/gitlab-org/gitlab/-/issues/?scope=all&search=qa%20failure&state=opened&utf8=%E2%9C%93)でspecの名前を検索します
    - Allureレポートが利用可能な場合: レポートリンクをクリック -> プロダクト欠陥 -> 失敗したspecを選択 -> 失敗Issueをクリック。[デモ](https://youtu.be/_0dM6KLdCpw?t=234)
    - 一部のspecには、異なるスタックトレースを持つ複数のQA失敗Issueが存在する場合があります。その場合は、ジョブからの失敗したスタックトレースをIssueにリストされているものと比較してください。
1. 同じエラーのIssueが見つからない場合
    - [ガイドに従って](/handbook/engineering/testing/pipeline-triage/#investigate-the-root-cause)QA失敗のデバッグを続けます
    - Developer Experienceステージ - [オンコールDRI](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule)または[Distribution SET](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/#team-members)に連絡を取ります

### バグ優先順位付け

Distributionチームは[バグ優先順位付け](/handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/)を協力して行い、[チームの現在の稼働状況に基づいて](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1075#note_1056963489)マイルストーンあたり少なくとも6つのバグをクローズすることを目指しています。マイルストーンあたりのバグ数は次の[issue#1100](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1100)で再検討されます。

プロセス:

- チームが新しい[計画Issue](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/?label_name%5B%5D=Planning%20Issue)を作成します
- SETが[バグ優先順位付けテンプレート](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/new?issuable_template=Distribution%20Bug%20Prioritization)を使用して新しいIssueを作成します
- SETが[Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard)を使用してオープンなバグを確認します
  - 重大度ラベルがないバグに[重大度ラベル](/handbook/product-development/how-we-work/issue-triage/#severity)を追加します
  - [優先順位付けガイドライン](/handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/#prioritization-guidelines)に従ってオープンなバグを確認します
- SETがチーム計画Issueでマイルストーンで考慮する6つのバグを提案します
- 四半期末に:
  - SETがオープンなバグの[Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard)メトリクスを確認します
  - SETがDistributionチームと分析を共有します
  - Distributionはプロセスを調整すべきかどうかを議論します

### クアッドプランニング

品質チームは[クアッドプランニングプロセス](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=section%3A%3Aenablement&label_name%5B%5D=Quality&first_page_size=20)に従って、クアッドプランニング用のオープンなIssueを確認します。
