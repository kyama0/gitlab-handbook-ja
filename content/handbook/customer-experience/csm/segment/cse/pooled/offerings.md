---
title: "CSE Pooled: 提供サービス"
description: "アカウントチームが Pooled モデルでリクエストできる CSE の提供サービスと、それぞれの対象範囲および対象外の範囲を説明します。"
weight: 20
upstream_path: /handbook/customer-experience/csm/segment/cse/pooled/offerings/
upstream_sha: 2dbfc49e47c784740ced3e2c617530f365412492
lastmod: "2026-10-09T17:05:37Z"
translated_at: "2026-10-12T00:04:07+00:00"
translator: codex
stale: false
---

ここでは、アカウントチームが [Pooled モデル](/handbook/customer-experience/csm/segment/cse/pooled/)で Customer Success Engineer（CSE）を
リクエストする際に選べる提供サービスを紹介します。

CSE のセッションでは助言を提供します。CSE はガイダンス、推奨事項、ベストプラクティスを共有し、
顧客の環境を直接変更しません。選択する提供サービスは要望に完全に一致している必要はありません。選択されたサービスは CSE の準備と、
顧客の要望の把握に役立ちます。

## CI/CD と DevOps {#cicd-and-devops}

### CI ワークフローの効率化 {#streamline-your-ci-workflows}

Engineering のリードや DevOps チームが、CI パイプラインのパフォーマンスとリソース使用の改善方法を学びます。CSE は
顧客の `.gitlab-ci.yml` 設定をレビューし、ジョブ効率、キャッシュ、パイプラインアーキテクチャのパターンを共有します。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 現在の CI パイプライン設定のレビュー | パイプラインの直接変更 |
| Runner のガイダンスとベストプラクティス | |
| 最適化のパターン | Runner のセットアップや設定 |
| キャッシュの推奨事項 | 特定のパイプライン障害のデバッグ |
| ジョブ効率の改善 | カスタムパイプラインコードの作成 |
| パイプラインアーキテクチャのベストプラクティス | |

リソース:

- **ドキュメント:** [GitLab CI/CD](https://docs.gitlab.com/ci/)、[CI/CD を使用したアプリケーションのビルド](https://docs.gitlab.com/topics/build_your_application/)、[パイプラインの効率](https://docs.gitlab.com/ci/pipelines/pipeline_efficiency/)、[パイプラインアーキテクチャ](https://docs.gitlab.com/ci/pipelines/pipeline_architectures/)、[CI/CD YAML リファレンス](https://docs.gitlab.com/ci/yaml/)、[GitLab Runner の設定](https://docs.gitlab.com/runner/configuration/)、[CI/CD カタログ](https://docs.gitlab.com/ci/components/#cicd-catalog)、[CI/CD コンポーネント](https://docs.gitlab.com/ci/components/)
- **ブログ記事:** [CI パイプラインの効率をさらに高める](https://about.gitlab.com/blog/2022/03/09/efficient-pipelines/)、[パイプラインを改善する 3 つの YAML のヒント](https://about.gitlab.com/blog/2020/10/01/three-yaml-tips-better-pipelines/)、[GitLab CI/CD カタログのベータ版の紹介](https://about.gitlab.com/blog/2023/12/21/introducing-the-gitlab-ci-cd-catalog-beta/)、[CI/CD コンポーネントの紹介](https://about.gitlab.com/blog/2023/07/10/introducing-ci-components/)、[再利用しやすい CI/CD テンプレートの作成方法](https://about.gitlab.com/blog/2023/05/01/how-to-build-reusable-ci-templates/)、[インクルード可能な CI/CD 設定ファイルへの入力パラメータの定義](https://about.gitlab.com/blog/2023/05/08/use-inputs-in-includable-files/)、[GitLab Runner の作成の自動化方法](https://about.gitlab.com/blog/2023/07/06/how-to-automate-creation-of-runners/)、[DevSecOps ワークフローを向上させる 3 つの GitLab 機能](https://about.gitlab.com/blog/2024/10/29/3-gitlab-features-to-level-up-devsecops-workflows/)
- **関連するウェビナー/ラボ:** GitLab 入門、GitLab を使った CI/CD 入門、高度な CI/CD、GitLab Runner の概要、CI/CD コンポーネント、ラボ: CI 入門、ラボ: 高度な CI/CD

### ソフトウェアデリバリーの加速 {#accelerate-your-software-delivery}

DevOps チームが、デプロイメントの自動化、環境設定、リリース管理を通じて、
継続的デプロイメントの信頼性を高める方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| デプロイメント自動化の戦略 | 環境のセットアップ |
| 環境設定の推奨事項 | カスタムデプロイメントスクリプト |
| リリース管理 | インフラストラクチャの直接設定 |
| 信頼性とデプロイ頻度の向上 | デプロイメントの実行 |

リソース:

- **ドキュメント:** [アプリケーションのデプロイとリリース](https://docs.gitlab.com/topics/release_your_application/)、[デプロイとリリースの入門](https://docs.gitlab.com/user/get_started/get_started_deploy_release/)、[パッケージとレジストリ](https://docs.gitlab.com/user/packages/)、[環境](https://docs.gitlab.com/ci/environments/)、[デプロイメント](https://docs.gitlab.com/ci/environments/deployments/)、[リリース](https://docs.gitlab.com/user/project/releases/)、[段階的ロールアウト](https://docs.gitlab.com/ci/environments/incremental_rollouts/)、[フィーチャーフラグ](https://docs.gitlab.com/operations/feature_flags/)
- **ブログ記事:** [GitLab による CI、デリバリー、デプロイメント](https://about.gitlab.com/blog/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/)、[CI のデプロイメントと環境](https://about.gitlab.com/blog/2021/02/05/ci-deployment-and-environments/)、[コードから本番環境へ: GitLab による継続的デプロイメントのガイド](https://about.gitlab.com/blog/2025/01/28/from-code-to-production-a-guide-to-continuous-deployment-with-gitlab/)、[安全なデプロイ](https://about.gitlab.com/blog/2020/07/23/safe-deploys/)
- **関連するウェビナー:** [高度な CI/CD](https://www.youtube.com/watch?v=N7YIRQrNe50)

## セキュリティとコンプライアンス {#security-and-compliance}

### アプリケーションセキュリティの強化 {#strengthen-your-application-security}

開発とセキュリティのリードが、開発の速度を落とさずにセキュリティスキャンを自動化し、セキュリティポリシーを適用し、
脆弱性を管理する方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| セキュリティスキャンの戦略 | カスタムセキュリティルールの開発 |
| ポリシー適用の推奨事項 | 特定の脆弱性の修正 |
| 脆弱性管理のワークフロー | 外部セキュリティツールの統合の実作業 |
| セキュリティ機能設定のガイダンス | コンプライアンス文書の作成 |
| CI/CD パイプラインへのセキュリティの統合 | |
| 関連ドキュメントの検索と説明、製品やドキュメントの不足箇所の特定 | |

リソース:

- **ドキュメント:** [アプリケーションのセキュリティ確保を始める](https://docs.gitlab.com/user/application_security/get-started-security/)、[アプリケーションセキュリティテスト](https://docs.gitlab.com/user/application_security/)。スキャナー: [シークレット検出](https://docs.gitlab.com/user/application_security/secret_detection/)、[依存関係スキャン](https://docs.gitlab.com/user/application_security/dependency_scanning/)、[SAST](https://docs.gitlab.com/user/application_security/sast/)、[DAST](https://docs.gitlab.com/user/application_security/dast/)、[カバレッジガイドファズテスト](https://docs.gitlab.com/user/application_security/coverage_fuzzing/)、[Web API ファジング](https://docs.gitlab.com/user/application_security/api_fuzzing/)、[コンテナスキャン](https://docs.gitlab.com/user/application_security/container_scanning/) （概要動画: https://www.youtube.com/watch?v=C0jn2eN5MAs 、解説: https://youtu.be/h__mcXpil_4 、チュートリアル: [Docker コンテナの脆弱性スキャン](https://docs.gitlab.com/tutorials/container_scanning/)）。結果の処理: [マージリクエストの承認](https://docs.gitlab.com/user/project/merge_requests/approvals/)、[承認ルール](https://docs.gitlab.com/user/project/merge_requests/approvals/rules/)、[脆弱性レポート](https://docs.gitlab.com/user/application_security/vulnerability_report/) (Ultimate)。 [ポリシー](https://docs.gitlab.com/user/application_security/policies/) (Ultimate): [スキャン実行](https://docs.gitlab.com/user/application_security/policies/scan_execution_policies/)、[マージリクエスト承認](https://docs.gitlab.com/user/application_security/policies/merge_request_approval_policies/)、[パイプライン実行](https://docs.gitlab.com/user/application_security/policies/pipeline_execution_policies/)、[脆弱性管理](https://docs.gitlab.com/user/application_security/policies/vulnerability_management_policy/)
- **ブログ記事:** [GitLab アプリケーションセキュリティの入門](https://about.gitlab.com/blog/2023/03/15/getting-started-with-gitlab-application-security/)、[GitLab Premium でセキュリティ脆弱性に対応する方法](https://about.gitlab.com/blog/2023/03/13/actioning-security-vulnerabilities-in-gitlab-premium/)、[GitLab 17、17.1 のセキュリティとガバナンスの更新](https://about.gitlab.com/blog/2024/07/17/get-to-know-the-security-and-governance-updates-in-gitlab-17-17-1/)、[移行ガイド: GitHub Advanced Security から GitLab Ultimate へ](https://about.gitlab.com/blog/2024/05/01/migration-guide-github-advanced-security-to-gitlab-ultimate/)、[カスタムセキュリティスキャナーを GitLab に統合する方法](https://about.gitlab.com/blog/2024/02/27/how-to-integrate-custom-security-scanners-into-gitlab/)、[GitLab Advanced SAST + Duo AI による迅速な脆弱性修正](https://about.gitlab.com/blog/2024/10/22/quick-vulnerability-remediation-with-gitlab-advanced-sast-duo-ai/)
- **その他のリソース:** [GitLab University: セキュリティ](https://university.gitlab.com/pages/security-content)、[SAST ルール](https://gitlab.com/gitlab-org/security-products/sast-rules)、[セキュリティスキャンのデモプロジェクト](https://gitlab.com/gitlab-da/tutorials/security-and-governance/devsecops/simply-vulnerable-notes)
- **関連するウェビナー/ラボ:** セキュリティとコンプライアンスのラボ、開発ライフサイクルを保護する包括的なアプローチ

## AI: GitLab Duo と Duo Agent Platform {#ai-gitlab-duo-and-the-duo-agent-platform}

### AI によるワークフローの変革 {#transform-your-workflow-with-ai}

開発チームと技術リーダーが、計画、コーディング、レビュー、セキュリティといったソフトウェア開発ワークフロー全体で、
GitLab Duo と Duo Agent Platform を活用する方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| GitLab Duo と Duo Agent Platform の機能概要と導入戦略 | カスタム AI モデルの設定 |
| GitLab Duo と Duo Agent Platform のユースケースの発見 | |
| 計画ワークフローの改善戦略 | |
| 採用と導入の戦略 | 特定のレビュー自動化の構築 |
| AI を活用したコードレビューとセキュリティの推奨事項 | 顧客に代わる機能の実装 |
| Code Suggestions の最大限の活用 | 個々のコード提案のレビュー |
| 関連ドキュメントの検索と説明、製品やドキュメントの不足箇所の特定 | |

リソース:

- **ドキュメント:** [GitLab Duo](https://docs.gitlab.com/user/gitlab_duo/)、[Code Suggestions](https://docs.gitlab.com/user/project/repository/code_suggestions/)
- **ブログ記事:** [GitLab ブログ: AI/ML](https://about.gitlab.com/blog/categories/ai-ml/)、[GitLab Duo を使った現代的な言語へのコードのリファクタリング](https://about.gitlab.com/blog/2024/08/26/refactor-code-into-modern-languages-with-ai-powered-gitlab-duo/)、[効率的に Code Suggestions を使用するためのヒント](https://about.gitlab.com/blog/2024/06/11/top-tips-for-efficient-ai-powered-code-suggestions-with-gitlab-duo/)、[GitLab Duo Chat の 10 のベストプラクティス](https://about.gitlab.com/blog/2024/04/02/10-best-practices-for-using-ai-powered-gitlab-duo-chat/)
- **その他のリソース:** [GitLab University: GitLab Duo](https://university.gitlab.com/pages/ai)。操作できるデモ: [Duo Chat](https://tech-marketing.gitlab.io/static-demos/duo-chat.html)、[GitLab Duo](https://tech-marketing.gitlab.io/static-demos/ai-demos.html)、[GitLab Duo による脆弱性の解決](https://tech-marketing.gitlab.io/static-demos/pt-explain-vulnerability.html)。製品ツアー: [Duo Self-Hosted](https://gitlab.navattic.com/gitlab-duo-self-hosted)、[Duo with Amazon Q](https://gitlab.navattic.com/duo-q)、[AI の効果分析](https://gitlab.navattic.com/ai-impact)、[Duo Enterprise](https://gitlab.navattic.com/duo-enterprise)、[Code Suggestions](https://gitlab.navattic.com/code-suggestions)。YouTube: [GitLab Duo Snapshots](https://www.youtube.com/playlist?list=PLFGfElNsQthZGazU1ZdfDpegu0HflunXW)、[GitLab Duo を使った DevOps](https://www.youtube.com/playlist?list=PL05JrBw4t0Krzu4U6gO3tS738hlsQGFz5)、[GitLab Duo Coffee Chat](/handbook/marketing/product-and-technical-marketing/developer-advocacy/projects/#gitlab-duo-coffee-chat)

## 移行とアーキテクチャ {#migration-and-architecture}

### 移行戦略の最適化 {#optimize-your-migration-strategy}

技術リーダーと移行チームが、影響を最小限に抑えて GitLab に移行する方法を学びます。他のツールからの移行、
セルフマネージドから GitLab.com への移行、GitLab インスタンス間の移行のいずれについても、移行方法、前提条件と制限、
アーキテクチャ上の考慮事項、リスク低減を扱います。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 移行方法の計画 | 移行の実行 |
| リスクの低減 | カスタムスクリプト |
| アーキテクチャ上の考慮事項 | データの整理 |
| 段階的な移行の計画 | 実装の実作業 |
| スケジュールとリソース計画のガイダンス | |

リソース:

- **ドキュメント:** [グループとプロジェクトのインポートと移行](https://docs.gitlab.com/user/project/import/)、[GitLab CI/CD への移行計画](https://docs.gitlab.com/ci/migration/plan_a_migration/)、次の製品からの移行: [Bamboo](https://docs.gitlab.com/ci/migration/bamboo/)、[CircleCI](https://docs.gitlab.com/ci/migration/circleci/)、[GitHub Actions](https://docs.gitlab.com/ci/migration/github_actions/)、[Jenkins](https://docs.gitlab.com/ci/migration/jenkins/)、[TeamCity](https://docs.gitlab.com/ci/migration/teamcity/)。[直接転送](https://docs.gitlab.com/user/group/import/)、[ファイルのエクスポート](https://docs.gitlab.com/user/project/settings/import_export/)、次の製品からのインポート: [GitHub](https://docs.gitlab.com/user/project/import/github/)、[Bitbucket Cloud](https://docs.gitlab.com/user/project/import/bitbucket/)、[Bitbucket Server](https://docs.gitlab.com/user/project/import/bitbucket_server/)。[新しいサーバーへの移行](https://docs.gitlab.com/administration/backup_restore/migrate_to_new_server/)、[Jira の移行オプション](https://docs.gitlab.com/user/project/import/jira_migration_options/)
- **ブログ記事:** [Jenkins から GitLab への移行を簡単に](https://about.gitlab.com/blog/2024/02/01/jenkins-to-gitlab-migration-made-easy/)、[GitHub から GitLab に簡単に移行する方法](https://about.gitlab.com/blog/2023/07/11/github-to-gitlab-migration-made-easy/)、[GitLab プロジェクトの移行と自動化](https://about.gitlab.com/blog/2023/01/18/try-out-new-way-to-migrate-projects/)、[Jira2Lab を使用した Jira から GitLab への大規模な移行](https://about.gitlab.com/blog/2024/10/10/seamlessly-migrate-from-jira-to-gitlab-with-jira2lab-at-scale/)、[GitLab グループとプロジェクトをより効率的に移行する方法](https://about.gitlab.com/blog/2023/08/02/how-to-migrate-gitlab-groups-and-projects-more-efficiently/)、[Jira から GitLab への移行を成功させるヒント](https://about.gitlab.com/blog/2023/10/24/tips-for-a-successful-jira-to-gitlab-migration/)
- **その他のリソース:** [GitLab University: GitLab への移行](https://university.gitlab.com/pages/migrating-to-gitlab)、ウェビナー [セルフマネージドから SaaS への GitLab 移行の準備](https://www.youtube.com/watch?v=zuDu5sL_p-g)

### GitLab アーキテクチャの最適化 {#optimize-your-gitlab-architecture}

Enterprise Architect や技術リードが、高可用性とディザスタリカバリを含む、堅牢で
スケーラブルな GitLab デプロイメントの設計方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| アーキテクチャのパターンと推奨事項 | インフラストラクチャのセットアップや変更 |
| 高可用性のガイダンス | 設定の実作業 |
| ディザスタリカバリと Geo の戦略 | 特定のハードウェアやクラウドプロバイダーの選定 |
| スケーラビリティの計画 | 高可用性や Geo の実装 |
| バックアップ戦略 | 公式ドキュメントに記載されていないバックアップソリューション |

リソース:

- **ドキュメント:** [アーキテクチャの概要](https://docs.gitlab.com/development/architecture/)、[リファレンスアーキテクチャ](https://docs.gitlab.com/administration/reference_architectures/)、[GitLab Geo](https://docs.gitlab.com/administration/geo/)、[GitLab のスケーラビリティ（コンポーネント）](https://docs.gitlab.com/development/scalability/)
- **その他のリソース:** [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)、[GET デプロイメントワークショップ](https://gitlab.com/gitlab-org/professional-services-automation/tools/implementation/get-deployment-workshop)、[GitLab Certified Implementation Services Specialist の学習パス](https://university.gitlab.com/learning-paths/gitlab-certified-implementation-services-specialist-learning-path)

## プラットフォームと運用 {#platform-and-operations}

### GitLab 導入の迅速化 {#fast-track-gitlab-implementation}

DevOps のリードやプラットフォーム管理者が、GitLab の初期導入について、設定、
ユーザー管理、導入の順序、文書化されたベストプラクティスに関する具体的な推奨事項を得られます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 設定のベストプラクティス | 設定変更の実作業 |
| ユーザー管理の戦略 | カスタムスクリプトとインテグレーション |
| 導入計画と順序の決定 | ユーザーの設定と管理 |
| 新規リリース、非推奨化、インスタンスのアップグレード | 実装の実作業 |

リソース:

- **ドキュメント:** [GitLab の管理](https://docs.gitlab.com/administration/)、[ユーザーとグループの管理](https://docs.gitlab.com/administration/auth/)、[インストールガイド](https://docs.gitlab.com/install/)、[GitLab のアップグレード](https://docs.gitlab.com/update/)、[サブグループ](https://docs.gitlab.com/user/group/subgroups/)、[ユーザーアカウント](https://docs.gitlab.com/user/profile/)、[組織](https://docs.gitlab.com/user/organization/)
- **ブログ記事:** [GitLab 入門: ユーザーの管理方法](https://about.gitlab.com/blog/2025/01/14/getting-started-with-gitlab-how-to-manage-users/)、[GitLab での最小権限アクセスの決定版ガイド](https://about.gitlab.com/blog/2024/03/06/the-ultimate-guide-to-least-privilege-access-with-gitlab/)、[GitLab Runner の作成の自動化方法](https://about.gitlab.com/blog/2023/07/06/how-to-automate-creation-of-runners/)
- **関連するウェビナー/ラボ:** GitLab ユーザー管理の基礎、GitLab.com 上での GitLab の管理、Git の基礎、GitLab 入門、GitLab Runner の概要、職務分掌、継続的な変更、ラボ: GitLab の基礎

### GitLab 運用の強化 {#strengthen-your-gitlab-operations}

システム管理者が、大規模環境で GitLab を運用するための認証、ユーザー管理、グループ構造、プロジェクト
設定について学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 認証戦略 | 設定の直接変更 |
| ユーザー管理 | ユーザーディレクトリの統合 |
| グループ構造 | カスタムスクリプト |
| プロジェクト設定 | 実装作業 |
| 管理のベストプラクティス | |

リソース:

- **ドキュメント:** [組織の管理](https://docs.gitlab.com/topics/set_up_organization/)、[チュートリアル: 組織のセットアップ](https://docs.gitlab.com/tutorials/manage_user/)、[名前空間](https://docs.gitlab.com/user/namespace/)、[メンバー](https://docs.gitlab.com/user/project/members/)、[組織](https://docs.gitlab.com/user/organization/)、[グループ](https://docs.gitlab.com/user/group/)、[プロジェクトとグループの共有](https://docs.gitlab.com/user/project/members/sharing_projects_groups/)、[エンタープライズユーザー](https://docs.gitlab.com/user/enterprise_user/)、[サービスアカウント](https://docs.gitlab.com/user/profile/service_accounts/)、[ユーザーアカウント](https://docs.gitlab.com/user/profile/)、[SSH キー](https://docs.gitlab.com/user/ssh/)、[GitLab.com の設定](https://docs.gitlab.com/user/gitlab_com/)、[プロジェクトを使った作業の整理](https://docs.gitlab.com/user/project/organize_work_with_projects/)、[プロジェクトの入門](https://docs.gitlab.com/user/get_started/get_started_projects/)、[プロジェクトの作成](https://docs.gitlab.com/user/project/)、[プロジェクトの管理](https://docs.gitlab.com/user/project/working_with_projects/)、[プロジェクトの可視性](https://docs.gitlab.com/user/public_access/)、[プロジェクト設定](https://docs.gitlab.com/user/project/settings/)、[説明テンプレート](https://docs.gitlab.com/user/project/description_templates/)、[プロジェクトアクセストークン](https://docs.gitlab.com/user/project/settings/project_access_tokens/)、[デプロイキー](https://docs.gitlab.com/user/project/deploy_keys/)、[デプロイトークン](https://docs.gitlab.com/user/project/deploy_tokens/)、[予約名](https://docs.gitlab.com/user/reserved_names/)、[検索](https://docs.gitlab.com/user/search/)、[バッジ](https://docs.gitlab.com/user/project/badges/)、[プロジェクトのトピック](https://docs.gitlab.com/user/project/project_topics/)
- **関連するウェビナー:** GitLab.com 上での GitLab の管理

### プラットフォームのオブザーバビリティの最適化 {#optimize-your-platform-observability}

プラットフォームエンジニアが、基本的なシステム監視からオブザーバビリティ、ハウスキーピング、
リソースの追跡まで、GitLab の監視方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 監視戦略 | 監視ツールのセットアップ |
| オブザーバビリティのガイダンス | アラートの設定 |
| リソースの追跡 | カスタムダッシュボードの構築 |
| パフォーマンス指標 | 特定の問題のトラブルシューティング |
| ハウスキーピングとガベージコレクション | |

リソース:

- **ドキュメント:** [GitLab の監視](https://docs.gitlab.com/administration/monitoring/)、[パフォーマンス監視](https://docs.gitlab.com/administration/monitoring/performance/)、[ログ](https://docs.gitlab.com/administration/logs/)、[監査イベントストリーミング](https://docs.gitlab.com/administration/compliance/audit_event_streaming/)、[コンテナレジストリの管理](https://docs.gitlab.com/administration/packages/container_registry/)、[パッケージレジストリのストレージ削減](https://docs.gitlab.com/user/packages/package_registry/reduce_package_registry_storage/)、[ハウスキーピング](https://docs.gitlab.com/administration/housekeeping/)、[パフォーマンスバー](https://docs.gitlab.com/administration/monitoring/performance/performance_bar/)
- **その他のリソース:** [GitLab Performance Tool（GPT）のクイックスタート](/handbook/support/workflows/gpt_quick_start/)

### アジャイル計画の拡張 {#scale-your-agile-planning}

プロジェクトリーダーとデリバリーチームが、Issue、エピック、イテレーションを使って計画を立て、依存関係を追跡し、
バリューストリーム分析で進捗を測定する方法を学びます。

| 対象範囲 | 対象外の範囲 |
| --- | --- |
| 計画ワークフローの戦略 | ワークフローのセットアップ |
| Issue とエピックの管理 | カスタムフィールドの設定 |
| イテレーション計画 | テンプレートの作成 |
| 依存関係の追跡 | チームのトレーニングセッション |
| バリューストリーム分析のレビュー | |

リソース:

- **ドキュメント:** [作業の計画と追跡](https://docs.gitlab.com/topics/plan_and_track/)、[バリューストリーム分析](https://docs.gitlab.com/user/group/value_stream_analytics/)、[エピック](https://docs.gitlab.com/user/group/epics/)、[イテレーション](https://docs.gitlab.com/user/group/iterations/)
- **関連するウェビナー:** DevOps 指標の入門、Jira から GitLab へ

## 顧客がさらに支援を必要とする場合 {#when-a-customer-needs-more}

- 移行の実行、インテグレーションの構築、アーキテクチャのデプロイなどの**実作業**は、
  [Professional Services](https://about.gitlab.com/services/)のエンゲージメントに該当します。上記の提供サービスに含まれる
  ガイダンスと設計上の助言は、引き続き CSE が担当します。
- 定期的な通話、ロードマップの支援、顧客に合わせたワークショップ、機能リクエストのフォローアップなどの**継続的なガイダンス**は、
  [Success Tier](/handbook/customer-experience/success-services/)に含まれます。

いずれのニーズも、CSE がアカウントチームに知らせます。
