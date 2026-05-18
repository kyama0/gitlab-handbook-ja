---
title: "ステージ採用メトリクス"
upstream_path: /handbook/customer-success/csm/stage-adoption/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:39:45Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

CSM 関連のハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/)をご覧ください。

---


{{% alert title="2023-06-15 注記" color="warning" %}}
以下に説明するアプローチは現在アクティブに使用されていません。CSM がユースケースの採用を測定するために使用する閾値と方法論については、[ユースケース採用スコアリング](/handbook/customer-success/product-usage-data/use-case-adoption/)ページをご参照ください。
{{% /alert %}}


顧客とのステージ採用と拡大を推進するという CSM のマンデートの一環として、GitLab でステージを採用することの意味を正確に定義する必要があります。[ステージ拡大がどのように記録・報告されるかの詳細については、このページをご覧ください](/handbook/customer-success/csm/success-plans/#open-and-categorize-a-stage-adoption-objective-within-a-success-plan-in-gainsight)
以下の詳細は、顧客が GitLab 内でそのステージを採用したと言うために何が必要かを定義するためのガイドです。以下で定義されるように、アカウントの 25% 以上がステージを使用している場合をステージ採用と定義します。25% 未満（概ね）はパイロットまたは進行中の作業であり、ステージが企業内で大きな価値を提供する重要な足がかりを確立するための途中と見なします。

## Manage

以下の 2 つを使用している:

- GitLab 内で [Code Analytics](https://about.gitlab.com/direction/foundations/) と [Insights](https://docs.gitlab.com/ee/user/project/insights/index.html) を使用している。
- GitLab 内で [Value Stream Management](https://about.gitlab.com/solutions/value-stream-management/) を使用している。

使用状況のディスカバリー質問:

1. 管理者はユーザーパーミッションレベルの変更をどのように監視していますか？
1. GitLab 内のどのユーザーが特定のグループにアクセスできるかをどのように追跡していますか？
1. 開発者のサイクルタイムをどのように測定していますか？
1. グループやプロジェクト内の効率性をどのように測定していますか？

## Plan

- 50% 以上のチームで Issue トラッキングおよび/またはエピックを使用している。

使用状況のディスカバリー質問:

1. プロジェクト作業の整理、計画、追跡にどのようなツールを使用していますか？
1. Issue とエピックのワークフローを説明してください。

## Create

version.gitlab.com に現在顧客のデータが記録されていない場合は、以下を行っているか確認できます:

- GitLab を git リポジトリストレージとコードレビュー（MR）に使用している。

version.gitlab.com のデータと[メトリクスディクショナリ](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html)を使用して、顧客が以下を行っているかを確認できます:

- 開発ライフサイクルの一部としてマージリクエストを使用している。（counts.merge_requests）
- 3ヶ月以上継続的に増加しているリポジトリを持つプロジェクト数が増加している（counts.projects_with_repositories_enabled）
- 3ヶ月以上継続的に増加しているソースコードのプッシュ/コミット数が増加している（counts.source_code_pushes）

使用状況のディスカバリー質問:

1. コードベースをどこで管理していますか？
1. コードレビューにどのようなプロセスを使用していますか？

## Verify

version.gitlab.com に現在顧客のデータが記録されていない場合は、以下を行っているか確認できます:

- インスタンスレベルの共有ランナーを利用可能にしている。
- 25% 以上のチームまたはプロジェクトが GitLab CI/CD を使用している。
- 75% 以上のパイプラインが GitLab CI/CD を使用している場合。

version.gitlab.com のデータと[メトリクスディクショナリ](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html)を使用して、顧客が以下を行っているかを確認できます:

- インスタンスレベルの共有ランナーを利用可能にしている。（gitlab_shared_runners_enabled）
- 3ヶ月以上継続的に増加している継続的インテグレーション（CI）を使用している（ci_internal_pipelines）
- CI ランナーを使用してパイプラインをビルドしている（counts.ci_builds）

使用状況のディスカバリー質問:

1. 現在どのような種類のランナーを使用していますか？（共有、グループ、特定）
1. 継続的インテグレーションにどのようなツールを使用していますか？

## Package

- 1 つ以上のレジストリ（パッケージレジストリ、コンテナレジストリ、Helm レジストリ）を使用している。

使用状況のディスカバリー質問:

1. パッケージ管理にどのようなツールを使用していますか？
1. Docker イメージの管理に何を使用していますか？
1. Helm チャートの管理に GitLab コンテナレジストリを使用していますか？

## Secure

version.gitlab.com に現在顧客のデータが記録されていない場合は、以下を行っているか確認できます:

- 3ヶ月以上継続的に増加している 1 つ以上のセキュリティテストツール（SAST、DAST、コンテナスキャン、依存関係スキャン）を使用している

version.gitlab.com のデータと[メトリクスディクショナリ](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html)を使用して、顧客が以下を行っているかを確認できます:

- 3ヶ月以上継続的に増加している 1 つ以上のセキュリティテストツール（SAST、DAST、コンテナスキャン、依存関係スキャン）を使用している
- SAST ジョブ（counts.sast_jobs）
- DAST ジョブ（counts.dast_jobs）
- 依存関係スキャンジョブ（counts.dependency_scanning_jobs）
- ライセンス管理ジョブ（counts.license_management_jobs）
- シークレット検出ジョブ（counts.secret_detection_jobs）
- コンテナスキャンジョブ（counts.container_scanning_jobs）

使用状況のディスカバリー質問:

1. アプリケーションのソースコードとバイナリをスキャンするために何を使用していますか？
1. 既知のランタイム脆弱性について実行中の Web アプリケーションを分析していますか？
1. Docker イメージの既知の脆弱性を確認するために何を使用していますか？
1. 外部依存関係の既知の脆弱性を調べていますか？

## Release

- GitLab CI/CD を使用して製品をデプロイしている（顧客がこれを伝えるか、使用 Ping データで多数の `deployments` および/または `environments` が確認できる）。
- 機能の観点から、以下の機能のうち 2 つを使用している場合...
  - [Pages](https://docs.gitlab.com/ee/user/project/pages/)
  - [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/)
  - [Feature Flags](https://docs.gitlab.com/ee/operations/feature_flags.html)
  - [Release Orchestration](https://docs.gitlab.com/ee/user/project/releases/)

使用状況のディスカバリー質問:

1. アプリケーションのデプロイに GitLab を使用していますか？
1. 静的サイトの作成、管理、デプロイに GitLab Pages を使用していますか？
1. 全マージリクエストで本番に近い環境を確保するためにレビューアプリを活用していますか？
1. 現在リリースをどのように管理していますか？（バージョン管理、リリースノートなど）

## Configure

- 25% 以上のチームまたはプロジェクトで AutoDevOps、Kubernetes、または Infrastructure As Code を使用している。

使用状況のディスカバリー質問:

1. ユーザーに事前定義の CI/CD 設定を提供するために AutoDevOps を使用していますか？
1. 以下のシナリオのいずれかに Kubernetes を使用していますか？
1. GitLab CI/CD パイプラインから Kubernetes にソフトウェアをデプロイする
1. GitLab インスタンスに接続されたランナーを管理するために Kubernetes を使用する
1. Kubernetes クラスター上で GitLab アプリケーションとサービスを実行する

## Monitor

- Prometheus と Grafana を使用して GitLab サーバーを監視している。
- または Prometheus を使用してプロジェクトデプロイメントの 25% を監視している。

使用状況のディスカバリー質問:

1. GitLab インスタンスの安定性とパフォーマンスをどのように監視していますか？
1. デプロイされたアプリケーションを監視するために何を使用していますか？

## ソフトウェアサプライチェーンセキュリティ

- [脆弱性リスト](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/)
- [依存関係リスト](https://docs.gitlab.com/ee/user/application_security/dependency_list/)
- [セキュリティポリシー](https://docs.gitlab.com/ee/user/application_security/policies/)
- GitLab の管理の一環として、インスタンスレベルで[監査イベント](https://docs.gitlab.com/ee/administration/audit_event_reports.html)を活用している。
- GitLab 内で[コンプライアンス管理](https://about.gitlab.com/direction/software_supply_chain_security/compliance/compliance-management/)を使用している。

使用状況のディスカバリー質問:

1. デプロイされたアプリケーションへの HTTP トラフィックをどのように管理していますか？
1. アプリケーションに到達する前に悪意のあるトラフィックをブロックするために何を使用していますか？
1. 既知の脆弱性についてコンテナイメージをどのように管理していますか？
1. ホスト/ネットワークレベルでのセキュリティ脅威から Kubernetes デプロイメントをどのように保護していますか？
