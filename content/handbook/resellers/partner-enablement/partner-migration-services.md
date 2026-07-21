---
title: "チャネルパートナーマイグレーションサービス"
upstream_path: /handbook/resellers/partner-enablement/partner-migration-services/
upstream_sha: db1b52fb5e65d37509c3eaaaebfd50dd491e4b36
translated_at: "2026-07-22T06:32:52+09:00"
translator: claude
stale: false
lastmod: "2026-07-21T09:08:15+00:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

GitLab はパートナーが GitLab への移行などのテクニカルサービスに関与し、リードすることを推奨しています。このページでは、さまざまな GitLab 移行先に対して転送できる、さまざまなデータソースを概観します。より深い技術的理解を得るために、エンジニアは GitLab University の [GitLab Certified Migration Services Specialist Learning Path](https://university.gitlab.com/learning-paths/gitlab-certified-migration-services-specialist-learning-path) に登録して学んでください。

コンテンツを視聴覚形式で消費したい方で、かつ GitLab Partner でもある方は、GitLab Ecosystem Solutions Architects がこのハンドブックページのコンテンツや **その他** を議論する以下の動画をご覧いただけます。_このセクションのリンクについては、先に [GitLab Partner Portal](https://partners.gitlab.com/) にログインしてから、リンクをクリックしてください:_

1. [GitLab Partner Migration Services Knowledge Transfer 1/2](https://partners.gitlab.com/prm/api/objects/v1/asset/gqw2lqq1eqtn/_view)
2. [GitLab Partner Migration Services Knowledge Transfer 2/2](https://partners.gitlab.com/prm/api/objects/v1/asset/xff2aecrqdkx/_view)

## GitLab パートナーの一般的な移行ステップ

_このセクションのリンクについては、先に [GitLab Partner Portal](https://partners.gitlab.com/) にログインしてから、リンクをクリックしてください:_

顧客向けの移行で成功している GitLab パートナーは、クライアントエンゲージメントで次の例のような経路をたどることが多いです。

1. 移行のスコープ／サイズ: ユーザー数は何人か? コードリポジトリはいくつか? グループ構造はそのまま維持するのか、それとも移行を機に GitLab 内の「未使用プロジェクトを整理」するのか? GitLab インスタンスおよび／またはグループ（サブグループを含む）のすべてのプロジェクトに関する情報を収集するために実行できるオープンソーススクリプト [GitLab Evaluate](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate) の実行を検討してください。また、プロジェクトストレージ使用量の CSV レポートを作成する [Project storage report](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/project-storage-report) の実行も検討してください。単一グループおよびセルフマネージドインスタンス上のすべてのプロジェクトのレポートがサポートされています。
1. 顧客のビジネスを理解する: 移行すべきアーティファクトは何か? ユーザー、Issue、マージリクエストの監査コンプライアンス履歴は会社にとって重要か? それとも Git コードリポジトリの移行だけで十分か? お客様が移行に対して機密と考えるデータは何か? [GitLab Partner Led Optimization Service](https://partners.gitlab.com/prm/English/s/assets?collectionId=55025&id=459892&renderMode=Collection) を最初のステップとしたほうがよいか?
1. ヘルスチェック: インポートデータソースは健全か、それとも [Readiness Assessment](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/readiness/) で GitLab ソースのヘルス状況を確認するべきか? クローンできない Git リポジトリや、クリーンアップが必要なリポジトリはあるか? 長期にわたる履歴を持つ大規模なコードリポジトリはあるか?
1. 移行後のニーズ: 移行および GitLab または GitLab.com への採用の一環として構成が必要な、アクセス制御や Single-Sign-On (SSO) など、他のコンサルティング上の考慮事項はあるか?

技術的なスコープ／サイズに関する会話をお客様と行った後、GitLab パートナーは [GitLab Channel Service Packages](https://partners.gitlab.com/prm/English/c/Channel_Service_Packages) が役立つと感じるでしょう。これらにはテンプレートのデータシート、Statement of Work (SOW)、プロジェクトプランが含まれています。GitLab パートナーは、これらの GitLab Channel Service Packages をお客様の業務向けのテンプレートとして自由に利用できます。独自のテクニカルサービスオファリングに合わせてリブランド・リワードすることが推奨されます。表には、`Aligned Partner Certification` 列でパートナーが保有すべき認定に関する GitLab の期待も示されています。

GitLab Professional Services が提供する [Migration Readiness Checklist](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/migration-readiness-checklist.md) は、活用できる役立つサンプルです。アクセス、コミュニケーション、ユーザー移行計画、移行準備、Wave 計画、移行後のチェック、移行後の検討事項、投資の最大化に関する技術的な要件が含まれています。本ドキュメントは GitLab の [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/) というオープンソースのコマンドラインインターフェース (CLI) 移行ツールの使用を前提としています。Congregate は GitLab Professional Services が推奨する方法です。

[顧客の移行前・移行中・移行後の義務と責任とは](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-are-a-customers-obligations-and-responsibilities-prior-during-and-after-a-migration) と [移行に必要なインスタンスアクセスと権限のレベル](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-level-of-instance-access-and-permission-are-needed-for-migrating) について顧客と明確にコミュニケーションすることも、円滑な移行を確実にします。

同様に、[Migration グループ](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits/migration-delivery-kits)は、私たちの [GitLab Professional Services Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits)にあり、非常に役立ちます。これらのプロジェクトは「単一のアクティビティから Statement of Work (SOW) 全体まで、あらゆる作業の提供に関するステップバイステップの手順を提供する」ためです。

## 他の DevOps プラットフォームから GitLab へ

GitLab 以外のシステムからプロジェクトを移行するには、[Supported import sources](https://docs.gitlab.com/ee/user/project/import/#supported-import-sources) および [Other Import Sources](https://docs.gitlab.com/ee/user/project/import/#other-import-sources)（同一ページ内のアンカーリンク）のリストを確認してください。

他システムからパイプラインを移行することは、付加価値のある **手動** の開発プロセスです。そのような移行のための自動化ツールも存在しますが、GitLab が公式にサポートしているものはありません。パイプラインの数、現在のパイプラインパフォーマンス、[環境変数](https://docs.gitlab.com/ee/ci/variables/)、使用されているシークレットを理解してスコープを設定することをパートナーに推奨します。パートナーは、他のソースシステムと [GitLab のパイプライン構文](https://docs.gitlab.com/ee/ci/) との間でパイプラインを開発するコンサルティングを行う際に、タイム & マテリアル方式の契約が有用だと感じています。

### Jenkins

GitLab Duo Agent Platform の [Convert to GitLab CI/CD Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/convert_to_gitlab_ci/) は、これらの移行に大いに役立ちます。

### Azure DevOps

GitLab Professional Services チーム自身が執筆した、[Azure DevOps から GitLab への移行に関する詳細ガイド](https://about.gitlab.com/blog/migration-from-azure-devops-to-gitlab/) を参照してください。

### Jira

* [Jira からの移行に関するドキュメントページ](https://docs.gitlab.com/user/import/third_party_systems/jira/) - 利用可能なすべてのオプションを一覧にしています。
* [Jira2Lab ツール](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/jira2lab) - Ecosystem チームが推奨しています。
* [Jira Migration Delivery Kit](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits/migration-delivery-kits/migration-delivery-kit/-/blob/main/Jira/Jira-Importer.md) - Jira2Lab を使用します。
* [GitLab Triage](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage) - 自動化された作業項目ステータス管理。

## GitLab セルフマネージドから GitLab セルフマネージドへ

セルフマネージドの GitLab サーバーから別の GitLab サーバーへ移行する最良の方法は、ソースインスタンスで [フルバックアップ](https://docs.gitlab.com/ee/administration/backup_restore/) を取り、ターゲットインスタンスでリストアすることです。ステップバイステップの手順は [Migrate to a new server](https://docs.gitlab.com/ee/administration/backup_restore/migrate_to_new_server.html) のドキュメントページで確認できます。

この移行方法は [ソースとターゲットインスタンスがまったく同じバージョン](https://docs.gitlab.com/ee/administration/backup_restore/restore_gitlab.html#the-destination-gitlab-instance-must-have-the-exact-same-version) である場合にのみ機能することに注意してください。お客様の環境がそうでない場合（通常はソースシステムが遅れている）、[Upgrade Path tool](https://docs.gitlab.com/ee/update/index.html#upgrade-path-tool) でソースシステムの必要なアップグレード計画を立てられます。（アップグレード**前**にフルバックアップを必ず取得してください！）

## GitLab セルフマネージドから GitLab SaaS、またはその逆へ

顧客移行向けの 3 つの異なるオプションから選択するには、移行後のお客様のニーズを理解することが必要です。各方法の長所と短所を表形式で比較した完全な技術ページが [Migration features](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/gitlab-migration-features-matrix.md#migration-features) に概説されています。**Congregate** は移行する機能の大半をサポートしていますが、Congregate を使用した GitLab.com への／からの移行は、GitLab.com SaaS（マルチテナント）データへのアクセスが制限されているため、[GitLab Professional Services チーム](#gitlab-professional-migration-services)のサポートが必要です。移行サービスは他の方法の 1 つを使用することで達成できる場合があります。

これらの移行には 3 つの異なるオプションがあります。

### 1. Direct transfer

[Direct transfer](https://docs.gitlab.com/user/group/import/) は、インスタンス間で顧客データを移動するための GitLab の組み込み機能です。これは移行を行うための推奨される方法です。この機能の最適な使い方に関する詳細な見識は、[一般提供開始を発表したブログ記事](https://about.gitlab.com/blog/migrating-by-direct-transfer-is-generally-available/) を参照してください。

#### GitLab Log Analysis Tool

[このツール](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis) は、direct transfer 移行が失敗した場合のデバッグに役立ちます。

GitLab ログ専用に調整された完全な ELK Stack（Elasticsearch、Logstash、Kibana）環境を立ち上げます。

リポジトリをクローンし、たった 1 つのコマンドで環境が準備完了です！顧客のログが自動的にインデックス化され、Kibana が事前構成済みダッシュボードと共に起動し、GitLabSOS、KubeSOS、GDK ログの即時の視覚分析を提供します。

### 2. File exports

direct transfer が対応できない、または対応しない場合のためのものです。良い例は [air-gapped 環境](#air-gapped-environments) です。

* [Migrating projects using file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html)

* [Items that are exported via file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-exported)

* [Items that are not exported via file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-not-exported)

* [Project import and export API](https://docs.gitlab.com/ee/api/project_import_export.html)

* [Group import and export API](https://docs.gitlab.com/ee/api/group_import_export.html)

### 3. Congregate

file exports と同様に、direct transfer が対応できない／対応しない場合のために、[Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/) があります。

これは [GitLab Professional Services](#gitlab-professional-migration-services) が使用しており、GitLab で最も成熟した移行ソリューションで、多くのオプションをサポートします。**SaaS への移行は、GitLab SaaS（マルチテナント）データへのアクセスが制限されているため、GitLab PS の関与が必要であることに注意してください。** 後者に関する詳細は [こちら](/handbook/customer-success/csm/risk-mitigation/self-managed-vs-saas/) で確認できます。

Congregate について重要な点:

* [Congregate Migration Features Matrix](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/gitlab-migration-features-matrix.md)

* [Migration Readiness Checklist](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/migration-readiness-checklist.md)

* [顧客の義務と責任 - Congregate FAMQ](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-are-a-customers-obligations-and-responsibilities-prior-during-and-after-a-migration)

* [Congregate によるセルフマネージドから SaaS への移行の制限事項 - Congregate FAMQ](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-level-of-instance-access-and-permission-are-needed-for-migrating)

## Air-gapped 環境

GitLab は [オフライン環境](https://docs.gitlab.com/ee/user/application_security/offline_deployments/) でインストールおよび運用できます。このセットアップは移行プロジェクトをより複雑にします。

* Direct transfer はこれをサポートしていません。Project/export import が回避策です。これを実行するための微妙な技術詳細については、GitLab Issue [Direct transfer - Support for air-gapped solutions](https://gitlab.com/groups/gitlab-org/-/epics/8985) および [maintain project and group file-based import/export as a workaround for migrations over air-gapped networks and to serve other use cases](https://gitlab.com/gitlab-org/gitlab/-/issues/363406) を参照してください。

* GitLab のオープンソース CLI 移行ツール [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/) は Air-gapped 環境をサポートしています。[Support air-gapped environment migrations](https://gitlab.com/groups/gitlab-org/professional-services-automation/tools/migration/-/epics/116) および [Migrating data in an air-gapped environment](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/runbooks/airgapped-migration-usage.md) を参照してください。

## パッケージ／コンテナレジストリの移行

[推奨事項](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#does-congregate-migrate-data-from-packagecontainer-management-tools-like-artifactory-or-nexus)（Congregate の使用にかかわらず）: 「通常は、ソースコード移行後に GitLab でパイプラインジョブを確立し、これらのコンテナ／パッケージを希望どおりに GitLab レジストリにパブリッシュすることを顧客にお勧めしています。監査履歴の維持に関心のある顧客には、監査期間が終了するまで、ライセンス支出を削減しつつレガシーのパッケージ／コンテナレジストリツールを残しておくことをお勧めします。」

セルフマネージドの GitLab インスタンスから移行する際に監査履歴を保持する必要がある場合、良い選択肢は旧インスタンスのバックアップを保持することです。バックアップには [パッケージデータが含まれます](https://docs.gitlab.com/administration/backup_restore/backup_gitlab/#data-included-in-a-backup)。

古いパッケージの移行も必要な場合は、[packages importer tool](https://gitlab.com/gitlab-org/ci-cd/package-stage/pkgs_importer) を使用できます。ドキュメントは [こちら](https://docs.gitlab.com/ee/user/packages/package_registry/supported_functionality.html#importing-packages-from-other-repositories) です。

## GitLab Professional Migration Services

[GitLab Professional Services](https://about.gitlab.com/services/) チームは、直接の顧客向けに [利用可能な完全なサービスカタログ](https://about.gitlab.com/services/catalog/) を提供しています。パートナーは、類似のプロフェッショナル（コンサルティング）サービスオファリングを提供するためのインスピレーションとしてオファリングを確認できます。

[GitLab Professional Services Migration Package](https://drive.google.com/file/d/1SK4iEg3XKx2nBWNo7xDlBbjLfOe1cFhB/view) は人気のあるオファリングの 1 つです。
