---
title: 共有機能・体験領域における協業
description: "製品グループ向けの協業プロセスと、共有機能領域のドキュメント"
upstream_path: /handbook/product/cross-stage-features/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

## ステージ横断の機能コラボレーション

各ステージは、自身のビジョンや方向性を推進する機能を構築する責任を負います。たとえその機能の一部のコンポーネントが他のステージが通常所有する領域に踏み込むことがあっても、(そのステージにとって重要であれば) そのまま構築すべきです。

その機能が _前進するために必要、または緊急に必要なものではない_ 場合 (例えば、他の機能の開発をブロックしない場合)、その機能を所有するステージのバックログに入れることも常に検討できます。

「この作業はどのステージがやるべきか?」を考える際のガイドラインを以下に示します:

1. あるステージが自分たちにとって中核的な価値を持つ新機能を開発したい場合、たとえその機能が _たまたま_ 別のステージが所有する機能の内部に存在することになっても、そのステージが構築すべきです。
1. 一方で、機能が別のステージの機能の内部に存在し、かつ _「あれば嬉しい」_ 程度のものである場合、Issue にして適切なラベルを付けることを検討しましょう。こうすることで、その機能を所有するステージが後日、適切なタイミングで優先順位付けできます。
1. 3rd-party システムとの統合に関する外部からの要求は、その統合の価値提案または影響を受ける領域に最も近いグループに振り向けます。

### 既存の統合のオーナーシップ

以下の表は、GitLab コードベースに存在する統合のオーナーシップを示しています。

#### セキュリティ関連の統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Akismet | group Authorization | セキュリティモニタリング統合 |
| Arkose Protect | group Authorization | セキュリティモニタリング統合 |
| ReCAPTCHA | group Authorization | セキュリティモニタリング統合 |

#### CI/CD 統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Bamboo CI | group Pipeline Execution | CI/CD パイプライン統合 |
| Drone CI | group Pipeline Execution | CI/CD パイプライン統合 |
| GitHub | group Pipeline Execution | CI/CD パイプライン統合 |
| Jenkins | group Pipeline Execution | CI/CD パイプライン統合 |
| JetBrains TeamCity CI | group Pipeline Execution | CI/CD パイプライン統合 |
| Diffblue Cover | group Pipeline Execution | CI/CD パイプライン統合 |

#### 外部 Issue トラッカー

| 統合 | DRI グループ | 理由 |
|---|---|---|
| [Asana](https://docs.gitlab.com/ee/user/project/integrations/asana.html) | group Plan:Project Management | プロジェクト管理ツールとの整合 |
| [Bugzilla](https://docs.gitlab.com/ee/user/project/integrations/bugzilla.html) | group Plan:Project Management | Issue 追跡機能 |
| [ClickUp](https://docs.gitlab.com/ee/user/project/integrations/clickup.html) | group Plan:Project Management | プロジェクト管理統合 |
| [Custom issue tracker](https://docs.gitlab.com/ee/user/project/integrations/custom_issue_tracker.html) | group Plan:Project Management | 汎用の Issue 追跡フレームワーク |
| [EWM - IBM Engineering Workflow Management](https://docs.gitlab.com/ee/user/project/integrations/ewm.html) | group Plan:Project Management | エンタープライズプロジェクト管理統合 |
| [Jira issue integration](https://docs.gitlab.com/ee/integration/jira/configure.html) | group Plan:Project Management | コア Issue 追跡統合 |
| [GitLab for Jira Cloud app](https://docs.gitlab.com/ee/integration/jira/development_panel.html) | group Plan:Project Management | Jira 統合の拡張 |
| [Pivotal Tracker](https://docs.gitlab.com/ee/user/project/integrations/pivotal_tracker.html) | group Plan:Project Management | アジャイルプロジェクト管理統合 |
| [Redmine](https://docs.gitlab.com/ee/user/project/integrations/redmine.html) | group Plan:Project Management | Issue 追跡およびプロジェクト管理 |
| [YouTrack](https://docs.gitlab.com/ee/user/project/integrations/youtrack.html) | group Plan:Project Management | Issue 追跡統合 |
| [ZenTao integration](https://docs.gitlab.com/user/project/integrations/zentao/) | group Plan:Project Management | 外部 Issue 追跡統合 |

#### ソースコード統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| PlantUML | group Source Code | ダイアグラム生成統合 |
| Sourcegraph | group Source Code | コード検索統合 |
| Beyond Identity | group Source Code | アイデンティティ統合 |
| GitGuardian | group Source Code | セキュリティスキャン統合 |
| [Gitpod integration](https://docs.gitlab.com/ee/integration/gitpod.html) | group Remote Development | 開発環境統合 |
| [Visual Studio Code extension](https://docs.gitlab.com/ee/user/project/repository/vscode.html) | group Editor Extensions | IDE 統合 |

#### プロジェクト管理統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Kroki diagrams | group Project Management | ダイアグラム統合 |
| Mailgun | group Project Management | メールサービス統合 |

#### 認証統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| [Google Cloud IAM](https://docs.gitlab.com/integration/google_cloud_iam/) | group Authentication | 認証統合 |

#### コンテナおよびパッケージ統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Google Artifact Management integration | group Container Registry | コンテナレジストリ統合 |
| Harbor integration | group Container Registry | コンテナレジストリ統合 |
| Packagist | group Package Registry | パッケージレジストリ統合 |

#### 検索統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Elasticsearch integration | group Global Search | 検索統合 |
| Zoekt integration | group Global Search | 検索統合 |

#### モバイル DevOps 統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| Apple App Store Connect | group Mobile DevOps | モバイルアプリ配信統合 |
| Google Play | group Mobile DevOps | モバイルアプリ配信統合 |

#### 通知統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| [Slack Notifications](https://docs.gitlab.com/ee/user/project/integrations/slack.html) (非推奨) | group Plan:Project Management | インシデント管理機能を持つチームコミュニケーション |
| [Discord](https://docs.gitlab.com/ee/user/project/integrations/discord_notifications.html) | group Plan:Project Management | チームコミュニケーションおよびアラート通知 |
| [Google Chat](https://docs.gitlab.com/ee/user/project/integrations/hangouts_chat.html) | group Plan:Project Management | エンタープライズチームコミュニケーションおよびインシデントアラート |
| [Irker](https://docs.gitlab.com/ee/user/project/integrations/irker.html) | under group Plan:Project Management | アラートおよび通知向けの IRC ベースのコミュニケーション |
| [Mattermost notifications](https://docs.gitlab.com/ee/user/project/integrations/mattermost.html) | group Plan:Project Management | インシデント管理機能を備えたチームコミュニケーションプラットフォーム |
| [Microsoft Teams](https://docs.gitlab.com/ee/user/project/integrations/microsoft_teams.html) | group Plan:Project Management | 運用アラートを備えたエンタープライズチームコミュニケーション |
| [Pumble](https://docs.gitlab.com/ee/user/project/integrations/pumble.html) | group Plan:Project Management | 通知向けのチームコミュニケーションプラットフォーム |
| [Unify Circuit](https://docs.gitlab.com/ee/user/project/integrations/unify_circuit.html) | group Plan:Project Management | 運用アラート向けのチームコミュニケーションプラットフォーム |
| [Webex Teams](https://docs.gitlab.com/ee/user/project/integrations/webex_teams.html) | group Plan:Project Management | インシデント対応機能を備えたエンタープライズチームコミュニケーション |
| [Telegram](https://docs.gitlab.com/ee/user/project/integrations/telegram.html) | group Plan:Project Management | アラート向けのモバイル中心のチームコミュニケーション |
| Campfire | group Plan:Project Management | チャット/通知統合 |
| Flowdock | group Plan:Project Management | チャット/通知統合 |
| Pushover | group Plan:Project Management | 通知統合 |

#### その他の統合

| 統合 | DRI グループ | 理由 |
|---|---|---|
| [Slack slash commands](https://docs.gitlab.com/ee/user/project/integrations/slack_slash_commands.html) | group Create:Import | Slack ワークスペースからスラッシュコマンドを実行して GitLab データを操作 |
| [GitLab for Slack app](https://docs.gitlab.com/ee/user/project/integrations/slack.html) | group Plan:Project Management | Slack スラッシュコマンド統合と Slack 通知統合の組み合わせに、追加のインシデント管理フローを加えたもの |
| [Mattermost slash commands](https://docs.gitlab.com/ee/user/project/integrations/mattermost.html) | group Plan:Project Management | Mattermost 環境からスラッシュコマンドを実行して GitLab データを操作 |
| [Trello PowerUp](https://docs.gitlab.com/ee/integration/trello_power_up.html) | group Plan:Project Management | ボードベースのプロジェクト管理統合 |
| [Pipeline status emails](https://docs.gitlab.com/ee/user/project/integrations/pipeline_status_emails.html) | group Verify:Pipeline Execution | CI/CD パイプライン通知統合 |
| [Emails on push](https://docs.gitlab.com/ee/user/project/integrations/emails_on_push.html) | group Create:Source Code | ソースコードイベントの通知統合 |
| [Gmail Actions Buttons](https://docs.gitlab.com/ee/integration/gmail_action_buttons_for_gitlab.html) | group Plan:Project Management | 運用対応機能を備えたメール統合 |
| [Squash TM](https://docs.gitlab.com/ee/user/project/integrations/squash_tm.html) | group Plan:Product Planning | テスト管理統合 |
| [Datadog integration](https://docs.gitlab.com/ee/integration/datadog.html) | group CI Platform | モニタリング統合 |

### DRI グループの責任

統合の DRI として指定された製品グループは、以下に責任を負います:

- ドメイン戦略に基づき、新しいコミュニティコントリビュート統合を GitLab コードベースに追加すべきかどうかを判断する
- ドメイン戦略に従って、既存の統合を GitLab コードベースに残すべきかどうかを判断する
- 必要に応じて統合を非推奨化・削除する適切なプロセスに従う
- 統合のドキュメントを保守する
- 統合関連の Issue を再アサイン・トリアージし、優先順位を判断する
- 目標 SLO の範囲内でバグとセキュリティ脆弱性を修正する
- infradev Issue に対処し、緊急の要求に応答する
- ヘルプの要求に応答し、統合を改善するイテレーションを行う

製品グループは、特定の統合をコミュニティサポートに指定し、コミュニティによる改善や追加機能の対象とすることも、各自の裁量で行えます。

このモデルにより、チームは柔軟に優先順位を調整でき、いずれのチームも「ブロック」されることがないようにしています。例外は、変更内容がソフトウェアエンジニアには許されていないこと (例えば本番環境の変更) を必要とする場合で、その場合はインフラストラクチャチームがブロッカーとなります。

どのチームもどのステージにも機能を貢献できますが、コントリビュートしているチームがそのグループの広範な計画とビジョンに整合できるよう、そのグループから最も関連するプロダクトマネージャーに連絡を取り、戦略的なサポートを得ることを推奨します。

以下は、他の製品グループがこれらの領域で作業する方法を理解し、その分野で支援してくれそうな最適な関係者を素早く見つけるためのガイドです。

このセクションは、エンジニアリングハンドブック版の [共有サービスとコンポーネントのオーナーシップ](/handbook/company/infrastructure-standards/realms/infra-shared-services/) をモデルにしています。

### 既存のステージ横断機能

- [マージリクエスト](https://docs.gitlab.com/user/project/merge_requests/) - [協業プロセス](/handbook/product/cross-stage-features/merge-requests) も参照
- [CI/CD パイプラインをリポジトリ内で直接定義](https://docs.gitlab.com/ci/yaml/)
- [マイルストーンに紐づくリリース](https://docs.gitlab.com/user/project/releases/#associate-milestones-with-a-release)
- [.gitlab-ci.yml からリリースを生成](https://docs.gitlab.com/ci/yaml/#release)
- [脆弱性から GitLab または Jira Issue を作成](https://docs.gitlab.com/user/application_security/vulnerabilities/#create-an-issue-for-a-vulnerability)
- [Issue からマージリクエストを作成](https://docs.gitlab.com/user/project/repository/web_editor/#create-a-new-branch-from-an-issue)
- [DORA メトリクスを通じた DevOps の成功の測定](https://docs.gitlab.com/api/dora/metrics/)
- [Issue タイプとしてのインシデントの作成](https://docs.gitlab.com/operations/incident_management/manage_incidents/#from-the-issues-list)
- [CI/CD トンネル経由でクラスタに接続](https://docs.gitlab.com/user/clusters/agent/ci_cd_workflow/)
- [Issue とフィーチャーフラグの関連付け](https://docs.gitlab.com/operations/feature_flags/#feature-flag-related-issues)
- [マルチプロジェクトパイプラインでの複数パイプラインの実行とプロジェクト依存関係](https://docs.gitlab.com/ci/pipelines/downstream_pipelines/#multi-project-pipelines)
- [Resource Groups でデプロイ中の同時実行制御を有効化](https://docs.gitlab.com/ci/resource_groups/)
- [ジョブアーティファクトまたは汎用パッケージをリリースに関連付ける](https://docs.gitlab.com/user/project/releases/)

### 計画中のステージ横断改善

- [Software Supply Chain Security](https://about.gitlab.com/direction/supply-chain/)
