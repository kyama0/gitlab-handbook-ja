---
title: "補助ソリューションリソース: 継続的デリバリー"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/
upstream_sha: d0a19ab78fc5e0d322868c8f35ab8f81e761bd21
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

#### 連絡先

| プロダクトマーケティング | デベロッパーアドボケイト |
| ---- | --- |
| Daniel Hom (@danielhom) | Cesar Saavedra ( @csaavedra1 ) |

## 市場の視点

## 継続的デリバリー

> 「デプロイが手作業」
> 「機能テストが手作業」
> 「パフォーマンス劣化や本番エラーが起きてもロールバックに時間がかかる、もしくはロールバックできない」
> 「環境構成の維持が難しく、運用も難しい」
> 「デプロイプロセスに一貫性がない」
> 「手作業 / ハードコードされた構成」
> 「標準化されたソフトウェアアーティファクトがない」
> 「リリース管理が確立されていない」
> 「リリースを行うのに他チームへの依存度が高すぎる」

これらが日常的に直面している典型的な課題であれば、継続的デリバリーは皆さんのためのものです。

継続的デリバリーは継続的インテグレーションの次の論理的なステップであり、アプリケーションのリリースプロセスを合理化・自動化することで、ソフトウェアのデリバリーを再現可能かつオンデマンドにします。インフラ環境のプロビジョニングから、テスト済みのアプリケーションソフトウェアをテスト/ステージング・本番環境にデプロイするまでをカバーします。継続的デリバリーを実践する組織は、リリースプロセスとスケジュールを計画し、インフラとアプリケーションのデプロイメントを自動化し、デプロイされたインフラとアプリケーションのリソースを管理し、メトリクスを分析してソフトウェアデリバリープロセスを最適化することができます。

### なぜ継続的デリバリーなのか？

- **一貫性のある反復可能なリリースプロセス** - 手作業のプロセスが少なくなることで、リリースプロセスのエラーが減り、コードへの最小限の変更ごとに反復可能になります
- **市場投入までの時間の短縮** - 環境プロビジョニング、ソフトウェアデプロイメント、迅速なフィードバックの自動化により、チームはより速くイテレーションし、必要に応じてロールバックできます
- **リスクの低いリリース** - 漸進的デプロイメント（インクリメンタル / ブルーグリーン / カナリアデプロイメント）、Review Apps、Feature Flags、デプロイメントのパフォーマンスフィードバックループといったプログレッシブデリバリーの実践によって、組織は広範なデプロイの前にソフトウェアを検証できます

## ペルソナ

### ユーザーペルソナ

このユースケースの典型的な**ユーザーペルソナ**は次のとおりです:

#### DevOps エンジニア、Devon

[DevOps エンジニア](/handbook/product/personas/)は、開発者がコードをテスト/ステージング・本番環境にデプロイするために必要なインフラ、環境、インテグレーションのサポートを提供する、開発者の安定したカウンターパートです。

#### システム管理者、Sidney

[システム管理者](/handbook/product/personas/#sidney-systems-administrator)はインフラのエキスパートであり、テスト/ステージング・本番環境（物理・仮想・クラウドインフラ、データベースやミドルウェアといったアプリケーションインフラを含む）のモデリング、保守、スケーリングに貢献します。

#### リリースマネージャー、Rachel

[リリースマネージャー](/handbook/product/personas/#rachel-release-manager)はリリース計画、スケジューリング、依存関係とリソースの特定において中心的な役割を担い、リリースが期日通りに行われることを保証します。リリースマネージャーはリリースプロセスの自動化を支援します。

#### プラットフォームエンジニア、Priyanka

[プラットフォームエンジニア](/handbook/product/personas/#priyanka-platform-engineer)はモダンなプラットフォームのスペシャリストであり、開発者がセルフサービス方式で多層環境のプロビジョニング、デプロイ、廃止を行えるようにすることを目指します。

#### アプリケーションオペレーション、Allison

[オペレーションスペシャリスト](/handbook/product/personas/#allison-application-ops)は、デプロイされたアプリケーションが利用可能であり、要求されたパフォーマンスパラメータで動作していることを保証します。

### バイヤーペルソナ

このユースケースの典型的な**バイヤーペルソナ**は次のとおりです:

#### インフラエンジニアリングディレクター、Kennedy

[インフラエンジニアリングディレクター](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/)は、高可用性環境の構築とスケーリングを担当します。組織においてクラウドイニシアティブやコスト最適化のアジェンダを持っていることが多いです。

#### リリース・チェンジマネジメントディレクター、Casey

[リリース・チェンジマネジメントディレクター](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/)は、コンセプトからデリバリーまでの複雑なリリースの管理を担当します。最終的な意思決定者またはバイヤーは CIO の場合もありますが、リリース・チェンジマネジメントディレクターは購買プロセスにおいて大きな影響力を持ちます。

## 業界アナリストリソース

このユースケースに関する比較調査の例は以下に列挙しています。このユースケースに関連するその他の調査は、[Analyst Reports - Use Cases](https://docs.google.com/spreadsheets/d/1vXpniM08Ql0v0yDd22pcNmXpDrA-NInJOwj25PRuHXA/edit?usp=sharing) スプレッドシートで確認できます。

## 市場要件

| 市場要件 | 説明 | 典型的なケイパビリティ実現機能 | バリュー / ROI |
|---------|-------------|-----------|------|
| 1) **リリース計画** | リリースワークフローの計画を定義できること。リリースに含まれるもの（アプリケーション・サービスの BOM）の決定、依存関係（アプリケーション/マイクロサービス間の依存関係）、誰が実施するか（人的リソース管理）、いつ実施するか（スケジューリング）、レディネス基準、誰がリリースを承認するかを定義する | - Bill of Materials（リリースモデリング）<br/> - リリース依存関係 <br/> - リリースバージョニング <br/> - リリースのシーケンス <br/> - イベントスケジュールとリリースカレンダー <br/> - 予測を含むリソース計画 <br/> - レディネス基準 <br/> - 承認ゲート <br/> - リリースに含まれる Issue の一覧とそのステータス <br/> - リリースエビデンス |  |
| 2) **アーティファクトとバイナリアセットの管理**  | 継続的インテグレーションからのインプット（アーティファクトとバイナリアセット）を管理し、テスト・ステージング・本番環境にアーティファクトをデプロイできること | - アプリケーションのバージョン、依存関係、メタデータの維持 <br/> - コンテナイメージの維持 <br/> - デプロイメントのためのアプリケーション/バイナリアーティファクトの取得 <br/> - 職務分掌とアクセス制御 <br/> - 一般的なパッケージフォーマットとサードパーティ統合のサポート <br/> - リポジトリ/レジストリをオンプレミスまたはクラウドで利用可能 |  |
| 3) **環境管理（オペレーティング環境）** | テスト・ステージング・本番環境（オンプレミス、仮想、クラウド（マルチクラウドとハイブリッドクラウドの混在）を含む）について一貫性のある反復可能なモデリングを実現でき、環境および環境のさまざまな要素（CMDB に類似するもの）の System of Record を維持できること | - インフラのモデリング（UI / Infrastructure as Code、ブループリント、Runbook 経由） <br/> - ハイブリッドインフラ環境（物理・仮想・クラウド（マルチおよびハイブリッド））のモデリングサポート <br/>  - 各環境（テスト、ステージング、本番）の System of Record <br/>  - 構成・ポリシーの System of Record <br/>  - 環境変更に対するアクセス制御 / 承認者 <br/>  - 構成・ポリシー変更管理 <br/>  - 自動環境発見 |  |
| 4) **データベースのプロビジョニング** | 稼働するアプリケーションをサポートするために必要なデータベースのモデリング、プロビジョニング、デプロイができること | - データベース依存関係のモデリング <br/> - データベースの発見 <br/> - スキーマやストアドプロシージャなどデータベースのプロビジョニングと構成 <br/> - データのロード（データプロビジョニング） <br/> - アクセス制御 / 承認者 <br/> - 構成変更 |  |
| 5) **ミドルウェアのプロビジョニング** | 稼働するアプリケーションをサポートするために必要なミドルウェアソフトウェアのモデリング、プロビジョニング、デプロイができること | - ミドルウェア依存関係のモデリング <br/> - ミドルウェアの発見 <br/> - ミドルウェアサーバー & クラスタの構成 <br/> - アクセス制御 / 承認者 <br/> - 構成変更 |  |
| 6) **アプリケーションリリース自動化 & デリバリー** | ビルドとテスト（継続的インテグレーションの一部としてカバー）、および各種タスクのスケジューリング、目的の環境へのアプリケーションのデプロイ、ロールアウトシナリオ、ロールバック、システム検証を含むデプロイメント自動化など、エンドツーエンドのリリースアクティビティを自動化できること |  - デリバリーパイプライン <br/> - パイプラインバージョニング <br/> - タスクスケジューリング & シーケンシング <br/> - カナリア、インクリメンタルロールアウト、ブルーグリーンなどのロールアウトシナリオ <br/> - Feature Flags <br/> - Review Apps <br/> - パフォーマンステスト & 検証 |  |
| 7) **リソースの割り当てと管理** | モデリングされたインフラとアプリケーションインフラに関連するコストの詳細・サマリービュー、および最適化レコメンデーションを提供できること | - コスト管理 <br/> - コスト最適化 |  |
| 8) **マルチプラットフォーム/クラウド/インテグレーションのサポート** | 複数のクラウド、複数のプラットフォーム（例: Linux、Unix、Windows、コンテナプラットフォーム、メインフレーム、ミッドレンジ、モバイル、特殊環境）、複数のインテグレーション（例: CMP、レジストリ、オーケストレーションツール、APM ツールなど）と連携できること | - クラウドサポート（AWS、GCP、Azure、IBM、Oracle など） <br/> - プラットフォームサポート（Linux、Unix、Windows、コンテナプラットフォーム、メインフレーム、ミッドレンジ、モバイル、特殊環境） <br/> - インテグレーションサポート（CMP、レジストリ、オーケストレーションツール、APM ツール） |  |
| 9) **ガバナンス & コンプライアンス** | 職務分掌、アクセス制御を強制でき、コンプライアンス目的での変更の System of Record を維持し、要件まで遡れるリリーストレーサビリティを維持し、情報セキュリティのチェックとポリシーを強制できること | - パイプラインとデプロイ環境への RBAC を含む職務分掌 <br/> - 認証情報管理 <br/> - 承認者ゲート <br/> - 要件へのトレーサビリティ <br/> - セキュリティチェック <br/> - 変更ログ <br/> - コンプライアンスレポート |  |
| 10) **分析とレポート** | リリースステータスと統計、パイプラインステータスと統計、デプロイメントステータスと統計、環境ステータスと統計、コンプライアンスのための変更レポートを可視化する分析とレポートを提供できること | - リリース計画、タイムライン、ステータスなどのリリースステータスと統計 <br/> - 成功率、失敗率、パイプラインヘルスなどのパイプラインステータスと統計 <br/> - デプロイ頻度、変更失敗率（DORA メトリクス）などのデプロイメントステータスと統計 <br/> - 利用状況、可用性、ダウンタイム、失敗率などの環境ステータスと統計 <br/> - 変更ログ、承認者 & コンプライアンスレポート - リリースエビデンス <br/>  |  |
| 11) **エンタープライズレディネス** | 高可用性 / ディザスタリカバリー、データのセキュアな保管、アクセス制御などのエンタープライズケイパビリティをサポートできること | - 高可用性、ディザスタリカバリー <br/> - データのセキュアな保管 <br/> - 職務分掌とアクセス制御 |  |

## GitLab ソリューション

<iframe width="960" height="569" src="https://www.youtube.com/embed/QArt7rqfbqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## GitLab がどのように市場要件を満たすか

GitLab の CD ケイパビリティを示す短いデモのコレクションです。

| 市場要件 | GitLab がどう実現するか | GitLab の **ステージ**/カテゴリ | デモ |
| ------ | ------ | ------ | ------ |
| 1) **リリース計画** | GitLab Release は、リリースされたバージョンのコードに関連するソース、ビルド出力、アーティファクト、その他のメタデータのスナップショットです。リリースエビデンスはリリースの BOM、つまりリリースに含まれるすべて（リリースマイルストーンとリリースアセットを含む）を保持します | [**Release ステージ**](https://about.gitlab.com/stages-devops-lifecycle/release/): [Release Orchestration](https://docs.gitlab.com/ee/user/project/releases/), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) | tbd |
| 2) **アーティファクトとバイナリアセットの管理**  | CD ユースケースでは、CI ユースケースで既に作成されたアーティファクトを表示、ダウンロード、編集、共有できます。maven、npm、nuget などさまざまなフォーマットがサポートされています | [**Package ステージ**](https://about.gitlab.com/stages-devops-lifecycle/package/): [Package Registry](https://docs.gitlab.com/ee/user/packages/), [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/), [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) | tbd |
| 3) **環境管理（オペレーティング環境）** | GitLab は Terraform などのパートナーを活用してハイブリッド環境のモデリングと発見を行います。GitLab は、これらの環境と構成をコードとして保存し、各環境とその構成をコードとしての System of Record として維持し、環境のスナップショットビューをダッシュボードで提供し、ハイブリッドインフラ環境へのデプロイをサポートします。GitLab CD ではほぼどこにでもアプリをデプロイできますが、GitLab は Kubernetes をネイティブにサポートし、非クラウドネイティブのサポートも改善することを意識しています | [**Configure ステージ**](https://about.gitlab.com/stages-devops-lifecycle/configure/): [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/), [Kubernetes Management](https://about.gitlab.com/solutions/kubernetes/), [Runbooks](https://docs.gitlab.com/ee/user/project/clusters/runbooks/), [Infrastructure as Code](https://docs.gitlab.com/ee/user/infrastructure/), [Environments Dashboard](https://docs.gitlab.com/ee/ci/environments/environments_dashboard.html) <br> [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/)| tbd |
| 4) **データベースのプロビジョニング** | GitLab は Terraform と統合し、データベースを含むインフラのモデリングとプロビジョニングを実現します。GitLab は Terraform を使った Infrastructure as Code を可能にし、環境のインフラと構成を GitLab 内のソース管理で維持します  | [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/), [Infrastructure as code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/) | tbd |
| 5) **ミドルウェアのプロビジョニング** | GitLab は Terraform と統合し、ミドルウェアを含むインフラのモデリングとプロビジョニングを実現します。GitLab は Terraform を使った Infrastructure as Code を可能にし、環境のインフラと構成を GitLab 内のソース管理で維持します | [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/), [Infrastructure as code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/) | tbd |
| 6) **アプリケーションリリース自動化 & デリバリー** | GitLab はプログレッシブ・インクリメンタルデリバリーを含む複数の高度なデプロイ戦略をサポートします。Review Apps はデプロイ前に Web アプリケーションをプレビューする機会を提供し、Feature Flags は機能のオーディエンスを制御できます。GitLab CI/CD パイプラインはパイプラインを構成・シーケンスするように設計でき、`.gitlab-ci.yml` ファイルでパイプラインバージョンをセットアップ・定義できます。さらに Web アプリ向けのブラウザパフォーマンステストや、Analytics Stage の機能を使ったアプリケーションパフォーマンステストにより、デプロイ後のモニタリングを実施できます | [**Release ステージ**](https://about.gitlab.com/stages-devops-lifecycle/release/): [Continuous Delivery](https://about.gitlab.com/stages-devops-lifecycle/continuous-delivery/), [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/), [Advanced Deployments](https://docs.gitlab.com/ee/topics/autodevops/index.html#incremental-rollout-to-production), [Feature Flags](https://docs.gitlab.com/ee/operations/feature_flags.html), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence), [Secrets Management](https://docs.gitlab.com/ee/integration/vault.html) <br> [**Analytics ステージ**](https://about.gitlab.com/stages-devops-lifecycle/monitor/): [Metrics](https://docs.gitlab.com/ee/operations/metrics/), [Logging](https://docs.gitlab.com/ee/administration/logs/), [Tracing](https://docs.gitlab.com/ee/operations/tracing.html), [Error Tracking](https://docs.gitlab.com/ee/operations/error_tracking.html) <br> [**Verify**](https://about.gitlab.com/stages-devops-lifecycle/verify/): [Browser Performance Testing](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html)  | [![Incremental rollout](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) アプリケーションリリース自動化 & デリバリー](https://youtu.be/ZAYBxLLcZrM) <br> [![Feature Flags](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) Feature Flags](https://youtu.be/_BZDM8LgGzg) |
| 7) **リソースの割り当てと管理** | GitLab CI とモニタリング機能を活用してリソースの割り当てと消費をチャート化し、しきい値到達時にアラートを設定したり、提案された Infrastructure as Code 変更のコストへの影響をマージリクエスト内で確認したりできます。このケイパビリティのネイティブサポートは GitLab のロードマップに含まれています | [Cluster Cost Optimization](https://about.gitlab.com/direction/delivery/#what-we-arent-focused-on-now) [特定のリソースへのデプロイ数を制限](https://docs.gitlab.com/ee/ci/yaml/#resource_group) - 同じリソースグループに属する複数のジョブが同時にエンキューされた場合、Runner はそのうちの 1 つだけをピックアップし、その他のジョブは `resource_group` が空くまで待機します。  | tbd |
| 8) **マルチプラットフォーム/クラウド/インテグレーションのサポート** | GitLab は AWS、Google Cloud、Azure にインストールでき、AWS、Google Cloud、Azure、VMWare、IBM などの複数のクラウドにデプロイできます。GitLab のインストールは Linux ベースのディストリビューションのみサポートしています。  | **すべてのステージ**: [GitLab Installation Clouds](https://docs.gitlab.com/ee/install/#install-gitlab-on-cloud-providers) [Cloud Deployment Targets](https://about.gitlab.com/install/), [Install Requirements](https://docs.gitlab.com/ee/install/requirements.html), [Integrations](https://docs.gitlab.com/ee/user/project/integrations/) | tbd |
| 9) **ガバナンス & コンプライアンス** | コンプライアンステストと監査コントロールが GitLab CI パイプラインに組み込まれています。 | [Compliance at GitLab](https://about.gitlab.com/solutions/compliance/) <br> [Manage Stage](https://about.gitlab.com/stages-devops-lifecycle/): [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Audit Logs](https://docs.gitlab.com/ee/administration/logs/#audit_jsonlog), [Audit Reports](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) <br> [Secure Stage](https://about.gitlab.com/stages-devops-lifecycle/secure/): [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html), [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)| tbd |
| 10) **分析とレポート** | GitLab はエグゼクティブインサイト、生産性インサイト、運用インサイト、セキュリティインサイトといった多様なインサイトを提供します | **すべてのステージ**: <br> **エグゼクティブインサイト** DevOps スコア、バリューストリーム分析、CI/CD チャート、ロードマップ <br> **運用インサイト**: Operations ダッシュボード、Environments ダッシュボード、Environments <br> **その他のインサイト** 生産性インサイトや開発者インサイトなどは、他のユースケースに該当します| tbd |
| 11) **エンタープライズレディネス** | GitLab はエンタープライズグレードの認証・認可、アクセス管理、監査情報、コンプライアンス、高可用性とディザスタリカバリー、ロケーション間で優れたユーザー体験を実現する地理的レプリケーション、大規模ユーザー向けリファレンスアーキテクチャ、Infrastructure as Code などをサポートします  | **すべてのステージ**、特に [Manage ステージ](https://about.gitlab.com/direction/dev/#manage)、[Enablement Section](https://about.gitlab.com/direction/core_platform/#enablement-section-overview) | tbd |

## CD のロードマップトップアイテム

- [ハイパークラウドデプロイメントのネイティブサポート](https://gitlab.com/groups/gitlab-org/-/epics/1804)
- [高度なデプロイ（Blue/Green、カナリア、トラフィックベクタリング）](https://gitlab.com/groups/gitlab-org/-/epics/2213)
- [AWS デプロイメントの合理化](https://gitlab.com/groups/gitlab-org/-/epics/2351)
- [AWS 向けの高度なデプロイメント](https://gitlab.com/groups/gitlab-org/-/epics/3798)
- [Feature Flags のエンタープライズグレード化](https://gitlab.com/groups/gitlab-org/-/epics/3976)
- [Feature Flag 戦略](https://gitlab.com/groups/gitlab-org/-/epics/3978)
- [デプロイ後モニタリング（継続的検証）MVC](https://gitlab.com/groups/gitlab-org/-/epics/3088)
- [Feature Flags ベースの A/B テスト](https://gitlab.com/groups/gitlab-org/-/epics/2966)
- [Review Apps を有効化した Feature Flags](https://gitlab.com/groups/gitlab-org/-/epics/2683)
- [パッケージ済みかつ拡張可能なデプロイテンプレート](https://gitlab.com/groups/gitlab-org/-/epics/2608)
- [モバイル向けデプロイの Review Apps](https://gitlab.com/groups/gitlab-org/-/epics/2372)

## GitLab トップ 3 差別化要因

| 差別化要因 |  バリュー  |  プルーフポイント | デモ |
|----------|-------------|------|----|
| 1) **デプロイメントとモニタリングの統一戦略** | GitLab は、本番に何をリリースするか（[Review Apps](https://docs.gitlab.com/ee/ci/review_apps/) 経由）、本番に何をデプロイするか（[Feature Flags](https://docs.gitlab.com/ee/operations/feature_flags.html) 経由）、誰にデプロイするか（[Progressive Delivery](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html) と [Canary](https://docs.gitlab.com/ee/user/project/canary_deployments.html) などのデプロイ戦略経由）を可視化し、デプロイのパフォーマンスをモニタリング（[ブラウザパフォーマンステスト](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html)、パフォーマンスモニタリング/トレーシング経由）し、[デプロイ後モニタリング](https://gitlab.com/groups/gitlab-org/-/epics/3088)を通じてパフォーマンスに基づきロールバックする能力を、**すべて単一のアプリケーションから**提供します。 | [Forrester Wave for Continuous Delivery and Release Automation Q2 2020](https://about.gitlab.com/blog/2020/07/08/forrester-cdra2020/) で Strong Performer に選出 <br/> - RedMonk の James Governor が[GitLab のプログレッシブデリバリーへの注力](https://redmonk.com/jgovernor/2019/07/10/progressive-delivery-at-gitlab/)について言及 - GitLab はいくつかの重要な理由で興味深いケースである: <br/> a) CD 製品で特に大きく急成長中のエンタープライズフットプリントを持っている。 <br/> b) 月次リリーススケジュールと出荷重視のバイアスでハイベロシティでソフトウェアを開発しているため、改善をリアルタイムで観察できる。同社はオープンソースソフトウェアを提供しており、企業としての観測可能性の文化が強い。 | [![統一・統合されたモニタリングとデプロイメント戦略](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) 統一・統合されたモニタリングとデプロイメント戦略](https://youtu.be/ihdxpO5rgSc) |
| 2) **自動化・統合された継続的デリバリー** |  GitLab [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/index.html) は、すぐに使える完全なデリバリーパイプラインでデリバリーを簡素化・高速化します。コードをコミットするだけで、あとは GitLab がやってくれます。GitLab は CI/CD パイプラインのステータスとデプロイメントステータスを横断する統合ダッシュボードも提供します | - Auto DevOps の組み込み機能により、当社の体験はより充実し効果的になりました - [G2 Peer Reviews の Daniel B](https://www.g2.com/products/gitlab/reviews/gitlab-review-572450)<br/> - リードタイムの短縮に大いに役立ち、当社が測定するすべての指標にプラスの影響を与えました - [Chorus.ai](https://about.gitlab.com/customers/chorus/) <br/> - GitLab Auto DevOps は真の CI/CD に必要なテクノロジーコンポーネントも提供し、すぐに使えるエンドツーエンドのパイプラインで製品提供を加速しました - [ExtraHop Networks](https://about.gitlab.com/customers/extra-hop-networks/) | [![自動化・統合された継続的デリバリー](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) 自動化・統合された継続的デリバリー](https://youtu.be/blJT8f6ZDH8)  |
| 3) **継続的デリバリーのモダンコンプライアンス** | GitLab は[コンプライアンス](https://docs.gitlab.com/ee/administration/compliance.html#compliance-features)を簡素化します。MR を承認できる人、本番にプッシュできる人、職務分掌、リリースガバナンスなどの**詳細なポリシーを定義**し、ライセンスコンプライアンス、パスワードポリシー、認証情報インベントリなどの**セキュリティポリシーを定義**し、コミット、権限変更、承認変更、ログイン、パスワード変更、リリースエビデンスなどのユーザーアクションといった**コンプライアンス遵守状況を追跡**できます。これらすべてを単一のアプリケーション内で実現し、デプロイメントからコード変更や要件まで遡る**トレーサビリティ**を提供します | - 最近の SOC2 コンプライアンス監査の際、監査人は Chorus がこれまで見た中で最も速い監査プロセスを持っていると述べ、その大半は GitLab のケイパビリティによるものでした - [Chorus.ai](https://about.gitlab.com/customers/chorus/) <br/> - 組み込みのセキュリティとコンプライアンスのおかげで、ライセンスキーや複数のログインが不要になりました。ソフトウェアはどこにでもデプロイされ、開発者のローカリゼーション制約から解放されます。 | tbd |

## メッセージハウス

[メッセージハウス](message-house/)は、GitLab の継続的デリバリーのバリューと差別化要因を記述・議論するための構造を提供します。

## カスタマーフェイシングスライド

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/1bGdjQNfHxmYKYz_ZsrtyhEyXLGlv8UoTavi_aGl3UNc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### ディスカバリー質問

-

#### サンプルディスカバリー質問

-

#### 追加ディスカバリー質問

-

### 業界アナリストリレーションズ（IAR）プラン

- IAR ハンドブックページは、[ユースケースをアナリストとの会話に組み込む計画](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions)を反映するよう更新されています。
- 各ユースケースに固有の詳細、および業界アナリストファームとの契約上の機密保持に関しては、エンゲージメントプランは GitLab チームメンバー向けに以下の保護されたドキュメントで利用できます: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=0)。

このユースケースに関する GitLab のケイパビリティについて最新の理解を持つアナリストの一覧については、Slack（#analyst-relations）または[Issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new)を提出して "AR-Analyst-Validation" テンプレートを選択することで Analyst Relations にお問い合わせください。

## 競合比較

## プルーフポイント - お客様の評価

### お客様の声とレビュー

#### Gartner Peer Insights

*Gartner Peer Insights のレビューは、個々のエンドユーザーが自身の体験に基づいて述べた主観的な意見であり、Gartner やその関連会社の見解を表すものではありません。レビューは誤りや読みやすさを考慮して編集されています。*

「GitLab は世界で最も好まれているサービスであり、ユーザーコミュニティも非常に広いです。GitLab ではプロジェクトやブランチに基づくユーザー認証を行えます。さらに継続的デプロイメントの統合も非常に迅速に実現できます。加えて、好みの制約内でマージリクエストを作成し、簡単に管理できます。コンフリクトの防止も非常に簡単です。ソフトウェア開発チームには必須のサービスです。」

> - ソフトウェア開発リード, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1324677)

「GitLab は私の[会社の]継続的インテグレーションと継続的デリバリー（CI/CD）プロセス全体をサポートしています。ソフトウェアプロセス管理に使用している Jira ともスムーズに統合されています。」

> - プリンシパル Android エンジニア, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1210153)

「私の会社では[GitLab を]使ってさまざまなプロジェクトをホストしています。多くの開発者と一緒に簡単に使えてコラボレーションできるからです。各プロジェクトには、プロジェクトの閲覧と機能構築の権限を持つ特定のメンバーがアクセスできます。ピアレビューは分割ウィンドウでコード変更を確認するのが非常に簡単です。CI/CD でパイプラインを作成するのも簡単です。」

> - ソフトウェアエンジニア, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1187975)

#### G2

「私にとって彼らのツールチェーンで最も印象的だったのは CI/CD プラットフォームです。使いやすさと柔軟性が素晴らしいです。CI/CD パイプラインの構築がこれほど簡単に感じられたことはありません。」

> - Luca Favaretto Marques, ソフトウェアエンジニア, ミッドマーケット, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-4215029)

「GitLab は私たちの開発者に統一された体験を生み出してくれます。以前はチームの間にいくつかの best-of-breed ソリューション（コードリポジトリ、Issue トラッカー、CI ランナー、デプロイメントパイプライン）が混在していましたが、それらを単一のソリューションに集約することができ、当社のニーズの大半を満たしています。」

> - Joël Cox, パートナー, スモールビジネス, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-3160908)

「Github を何年も使っていたのに GitLab を選んだ主な理由は CI/CD ツールでした。Github はそれを標準で備えていません。しかし私たちのチームには DevOps はおらず、JS デベロッパーしかいないため、ソリューションが必要でした」

> - Cynthia Sanchez, 創業者, プロダクトマネージャー, SMB, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-4193586)

「GitLab は提供する多くのリソースを通じて、Git、CI/CD パイプライン、そしてソフトウェア開発全般を習得するのに役立ちました。多くの個別のサービスを学んでそれらがどう組み合わさるかを把握する時間を費やす必要がなくなります。開発活動のための優れたツールを探している方には強くお勧めします。」

> - Justin Smith, システム管理者, ミッドマーケット, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-3606488)

### Gartner Peer Insights 'Voice of the Customer'

[GitLab が ARO 部門で Gartner Peer Insights Customers' Choice に選出](https://www.gartner.com/en/documents/3982008)

> - [Gartner Peer Insights 'Voice of the Customer' Application Release Orchestration 2020](https://www.gartner.com/en/documents/3982008)

### ブログ

#### Wag

[Wag!](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/)

- **問題:** 遅く、壊れやすく、手作業のリリースプロセスが開発者の効率に影響を与えていた
- **ソリューション:** GitLab Premium（CI/CD）
- **結果:** 以前は 40 分から 1 時間かかっていた作業が、わずか 6 分で完了するようになりました。
- **セールスセグメント:** SMB
- **Safe Deployments**（https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/51235）

#### Athlinksx

[Athlinks](https://about.gitlab.com/blog/2019/12/17/athlinks-cuts-runtime-in-half-with-giltab/)

- **問題:** 複雑なツールチェーンがデプロイ時間を妨げ、開発者を制約していた
- **ソリューション:** GitLab Ultimate（SCM、CI、CD）と Terraform
- **結果:** Athlinks は GitLab で実行時間を半減
- **セールスセグメント:** エンタープライズ

### ケーススタディ

#### Hemmersbach

- **問題** [Hemmersbach](https://about.gitlab.com/customers/hemmersbach/)は複数のツールとコミュニケーションの非効率性に苦しんでおり、本番ビルドの遅さと手作業のプロセスにつながっていました
- **ソリューション:** GitLab Ultimate（CI/CD）
- **結果:** 1 つの傘下にすべてのコラボレーション機能を集約することで、前例のないデプロイメント速度（1 日最大 30 回の自動デプロイ）を実現
- **セールスセグメント:** エンタープライズ

#### BI Worldwide

- **問題** [BI Worldwide](https://about.gitlab.com/customers/bi_worldwide/)は開発者環境のコラボレーションと効率を高め、ツールチェーンの複雑さを軽減する方法を探していました
- **ソリューション:** GitLab Ultimate（SCM/CI/CD）
- **結果:** デプロイメントが 1 日 10 回に増加
- **セールスセグメント:** エンタープライズ

#### Glympse

[Glympse](https://about.gitlab.com/customers/glympse/)

- **問題** 20 を超える異なるツールから成る複雑な開発者向けテックスタックは、保守が難しく、イノベーションの妨げとなっていました
- **ソリューション:** GitLab Ultimate（SCM/CI/CD）
- **結果:** デプロイ速度が 8 倍に（4 時間から 30 分未満に）
- **セールスセグメント:** エンタープライズ

#### KnowBe4

- **問題** [KnowBe4](https://about.gitlab.com/customers/knowbe4/)はコードを社内に保ちつつ、複数のツールの機能を 1 つにまとめられるツールを探していました
- **ソリューション:** GitLab Ultimate（CI/CD）と AWS
- **結果:** 任意のアプリケーションについて 1 日 5 回以上の本番デプロイ、加えて 1 日 20 回以上の開発環境デプロイ
- **セールスセグメント:** エンタープライズ

#### MGA

- **問題** MGA はワークフロー、ナレッジ、コード品質を改善できるコスト効率の高い CI プラットフォームを探していました。
- **ソリューション:** GitLab Starter（SCM/CI/CD）
- **結果:** 手作業のデプロイより CD で 10 倍高い成功率、加えて CD への移行で 80% の時間を節約
- **セールスセグメント:** SMB

### クロージングを助けるリファレンス

[Release のリファレンス可能なお客様の SFDC レポート](https://gitlab.my.salesforce.com/a6l4M000000kDwa)。注: セールスチームメンバーはこのレポートにアクセスできるはずです。アクセスできない場合は、[カスタマーリファレンスチーム](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact)に連絡してサポートを受けてください。

ステージ 3 以降のオポチュニティの上部にある「Find Reference Accounts」ボタンを押すと、リファレンスコールをリクエストできます。

## アダプションガイド

以下のセクションでは、CSM がケイパビリティ採用をリードするためのリソースを提供しますが、GitLab のステージとカテゴリの採用に関心のある見込み客やお客様にも使用できます。

### プレイブックステップ

1. ディスカバリー質問を行ってお客様のニーズを特定する
2. デモ、プルーフポイント、バリューポジショニングなどを共有してより深いディスカバリーを完了する
3. [パイプライン変換ワークショップ](/handbook/customer-success/playbooks/ci-verify/) とユーザー有効化の例を実施する
4. 採用ロードマップ、タイムライン、変更管理計画に合意し、関連するサービスを提供（必要に応じて）し、サクセスプランを更新する（必要に応じて）
5. お客様と一緒に採用計画をリードし、エンゲージメントや製品分析データを通じてユースケース採用を示しながら、チームを有効化し進捗を追跡する

### 採用レコメンデーション

この表は、採用が推奨されるユースケース、製品ドキュメントへのリンク、それぞれのサブスクリプション層、および製品分析メトリクスを示しています。

| 機能 / ユースケース                                           | F  | P  | U  | 製品分析 | メモ |
| ------------------------------------------------------------ | -----| ---- | ---- | --------- | ---- |
| [Auto DevOps を試す](https://docs.gitlab.com/ee/topics/autodevops/#quick-start) | x | x |x | instance_auto_devops_enabled and counts.ci_pipeline_config_auto_devops | |
| [GitLab CI のセットアップ](https://docs.gitlab.com/ee/ci/quick_start/) | x | x | x |  | `.gitlab-ci.yml` を持つことが GitLab をデプロイメントに使う基礎です |
| [Environment のセットアップ](https://docs.gitlab.com/ee/ci/environments/) | x | x | x | counts.environmnets | |
| [Environment へのデプロイ](https://docs.gitlab.com/ee/ci/environments/#view-environments-and-deployments) | x | x | x | counts.deployments, usage_activity_by_stage_monthly.release.deployments | |
| [Release の作成](https://docs.gitlab.com/ee/user/project/releases/) | x | x | x | counts.releases | |
| [Release Evidence の作成](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) | x | x | x | | |
| [Feature Flags のセットアップと利用](https://docs.gitlab.com/ee/operations/feature_flags.html) | x | x | x | | |

#### 追加のドキュメントリンク

- [GitLab で始める CI/CD 入門](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD を始める](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD 例](https://docs.gitlab.com/ee/ci/examples/)

### イネーブルメントとトレーニング

以下では、イネーブルメントとトレーニングのビデオやコンテンツへのリンクを提供します。

- [CI/CD で人生をもっと楽に プレゼンテーション](https://docs.google.com/presentation/d/1scYkmV4Xdfj-8iwwpEiLCe0vBfpAdrL5pyA2w1Fgnf0/edit#slide=id.g7193b194b5_0_96)
- [CI/CD 概要動画](https://www.youtube.com/watch?v=wsbSvLyC2Z8)
- [CS Skills Exchange: CI Deep Dive](https://www.youtube.com/watch?v=ZVUbmVac-m8&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=3&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [Microsoft Azure DevOps と技術的に競合する](https://drive.google.com/open?id=18jwSeeUylGXv8LoEedCMRfBZt9t7QLOYKCHJp-SvdqA) *(GitLab 内部のみ)*
- [Jenkins と競合する](https://drive.google.com/open?id=1IvftLfaQyKn5-n1GLgCZokOoLU-FFzQ8LfJ9cf0FVeg) *(GitLab 内部のみ)*
- *近日公開... CD ラーニングパス*

### プロフェッショナルサービスオファー

## キーバリュー（ティアごと）

### Core/Free

**なぜ CD に GitLab Core/Free を選ぶのか？**
私たちは CI/CD ジャーニーに乗り出す組織にとっての障壁を低くすることに注力しています。2020 年 3 月、私たちは多くの CD 機能が[Core に移行する](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/)ことを発表しました。

**Core/Free の主要機能:**

- [Package repository](https://docs.gitlab.com/ee/user/packages/): さまざまなパッケージマネージャー向けのプライベートリポジトリ
- デプロイ戦略: リリースに自信を持てるよう [カナリアデプロイ](https://docs.gitlab.com/ee/user/project/canary_deployments.html)、[インクリメンタルロールアウト](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html)、[ブルーグリーンデプロイ](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html#blue-green-deployment)、Feature Flags をサポート
- [Deploy boards](https://docs.gitlab.com/ee/user/project/deploy_boards.html): Kubernetes デプロイメントの健全性とステータスを統合的に表示
- [Multiple Kubernetes Clusters](https://docs.gitlab.com/ee/user/group/clusters/#multiple-kubernetes-clusters): テスト、ステージング、本番などの異なる環境ごとに別々のクラスターを維持できます
- [Environments and Deployments](https://docs.gitlab.com/ee/user/group/clusters/#multiple-kubernetes-clusters): 複数の環境を構成し、GitLab から管理・モニタリングします
- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/): GitLab から直接静的 Web ページをデプロイ
- [Deploy Tokens](https://docs.gitlab.com/ee/user/project/deploy_tokens/): アクセスにユーザー名/パスワードを要求して、パッケージとコンテナレジストリイメージをセキュアに保護
- [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/index.html#release-evidence): リリースを比較・監査するためのリリースデータのスナップショット
- [Vault integrations](https://docs.gitlab.com/ee/ci/secrets/hashicorp_vault.html): Hashicorp Vault によるシークレット認証
- [ChatOps](https://docs.gitlab.com/ee/ci/chatops/): チャットサービス経由で GitLab とやり取り
- [AutoDevOps](https://docs.gitlab.com/ee/topics/autodevops/): アプリケーションのビルド、テスト、デプロイ、モニタリングを簡素化

### Premium

**なぜ CD に GitLab Premium を選ぶのか？**
Premium はマルチチーム利用にスケールしていく組織に最適で、高度な構成、一貫した標準、コンプライアンスで DevOps デリバリーをスケールできるようにします。24 時間 365 日のアップタイムサポート、専任のカスタマーサクセスマネージャー（CSM）、アップグレード支援を含むエンタープライズレベルの優先サポートを活用できます。

**Premium の主要機能:**

- [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) - パッケージのローカルプロキシ
- [Multi Project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)- 複数のプロジェクトの CI パイプラインをリンク
- [Operations dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/index.html#doc-nav)- CI/CD パイプラインの全体的な健全性と組織全体の運用を俯瞰的に把握
- [Environments dashboard](https://docs.gitlab.com/ee/ci/environments/environments_dashboard.html) - クロスプロジェクトの環境ベースのビューでデプロイステータスを追跡
- [CI/CD for external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/)- 既存プロジェクト全体を移動させずに外部リポジトリを接続して GitLab CI/CD のメリットを得られます。この機能は [GitHub](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html)、[Bitbucket Cloud](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/bitbucket_integration.html)、その他の Git ベースリポジトリをサポートします。

### Ultimate

**なぜ CD に GitLab Ultimate を選ぶのか？**
[Ultimate](https://about.gitlab.com/pricing/ultimate/) は、優先順位、セキュリティ、リスク、コンプライアンスを管理しながらエグゼクティブが可視性を必要とするプロジェクトに最適です。

**Ultimate の主要機能:**

- [Compliance dashboard](https://docs.gitlab.com/ee/user/compliance/compliance_center/) - プロジェクトのコンプライアンスステータスとマージリクエスト承認者の俯瞰ビュー
- [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)- Docker イメージを分析し、潜在的なセキュリティ問題をチェック
- [Dynamic Application Security Testing](https://docs.gitlab.com/ee/user/application_security/dast/)- レビューアプリケーションを分析し、デプロイ前に稼働中の Web アプリケーションの潜在的なセキュリティ問題を特定

## リソース

### CI/CD とは？

この入門動画を見て、ソフトウェア開発のベストプラクティスとしての CI/CD の基本と、それらが GitLab CI/CD でどう適用されるかを学びましょう！
<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/nLwJtVWXN70" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

### プレゼンテーション

- [Why CI/CD?](https://docs.google.com/presentation/d/1OGgk2Tcxbpl7DJaIOzCX4Vqg3dlwfELC3u2jEeCBbDk)

### 継続的デリバリー動画

- [CI/CD with GitLab](https://youtu.be/1iXFbchozdY)
- [GitLab for complex CI/CD: Robust, visible pipelines](https://youtu.be/qy8A7Vp_7_8)
- [How do Runners work?](https://youtu.be/IsthhMm64u8)
- [Mastering CI/CD](https://about.gitlab.com/webcast/mastering-ci-cd/)
- [What is Auto DevOps?](https://www.youtube.com/watch?v=pPRF1HEtQ3s&feature=youtu.be)

### 統合デモ動画

- [Migrating from Jenkins to GitLab](https://youtu.be/RlEVGOpYF5Y)
- [Using GitLab CI/CD pipelines with GitHub repositories](https://youtu.be/qgl3F2j-1cI)

### クリックスルー & ライブデモ

- [Live Demo: GitLab CI/CD Deep Dive](https://youtu.be/pBe4t1CD8Fc)

### ブログと記事

- [Auto DevOps 101: How we're making CI/CD easier](https://about.gitlab.com/blog/2019/10/07/auto-devops-explained/)
- [Progressive Delivery](https://about.gitlab.com/blog/2019/04/19/progressive-delivery-using-review-apps/)

### 興味深い読み物

- [How We Switched to a Continuous Delivery Pipeline in 3 months](https://faun.pub/how-we-switch-to-a-continuous-delivery-pipeline-in-3-months-9667b9f65f7a)

## バイヤーズジャーニー

バイヤーズジャーニーにおける主要ページのインベントリ

| **認知** <br> 課題について学ぶ  |  **検討** <br> ソリューションのアイデアを探す  |  **決定** <br> これは適切なソリューションか|
| ------ | -------- |-------- |
| トピックページ?  | ソリューションページ | プルーフポイント |
| ランディングページ? | ?比較?  | 比較 |
| - その他?            |   |  - プロダクトページ x <br>  - プロダクトページ y <br>  - プロダクトページ z |
