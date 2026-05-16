---
title: "Professional Services EM 実装スコーピング"
description: "GitLab 実装のスコーピングプロセスについて説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/implementation/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

`:warning: このページは作成中です`

## 実装スコーピングの詳細

- 過去にいくつかの異なるリファレンスアーキテクチャをスコーピングしてきました。例は [Engagement Estimates TEMPLATES ドキュメントの Deployment Equations タブ](https://docs.google.com/spreadsheets/d/1YKMyflzsA-VPEVobB82zC8-n0hlC-uRBtiNB7Fm-kZg/edit#gid=1929043076) で確認できます。

- 実装には標準でドキュメント化された [リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/) を使用します。

- Geo を含むオンプレミスのすべての実装サービスは、セカンダリに単一の大型 omnibus 実装を使用することを前提としています。完全な HA セカンダリにはいくつかの課題があるため、HA Geo をスコーピングすることを選択した場合、複雑性を考慮して、一般的なルールとしてスコープに 20〜25 日を追加します。

- AWS 上の実装は、HA のために AWS が提供するさまざまなサービスを活用するため、オンプレミス実装よりも複雑性が低くなる傾向があります。

- 同じサイズのリファレンスアーキテクチャの場合、K8s 実装は VM 実装と同程度の作業量です。

- [GitLab System Administration Basic](https://university.gitlab.com/pages/system-admin-training/) と [GitLab Advanced System Administration](https://university.gitlab.com/pages/system-admin-training/) のトレーニングクラスは、通常実装プロジェクトのスコープに含まれます。これらのコースは、シングルノード Omnibus と HA 実装の両方について、GitLab を設定、管理、トラブルシューティングするための基礎的な概念を提供します。現時点では、Kubernetes 実装にこれらのクラスを推奨していません。コース内容は、Kubernetes 実装でユーザーが実行する必要のある [kube 固有のコマンド](https://docs.gitlab.com/charts/troubleshooting/kubernetes_cheat_sheet.html) を反映していないためです。顧客は、標準的な実装アクティビティの中でバックアップ/復元およびアップグレードのアクティビティについて「トレーニング」を受けます。顧客が管理トピックに精通するのを助けるために、追加のコンサルティング日数/デプロイ後の Q&A セッションをスコープに追加できます。

- 私たちの PSE チームは、インフラストラクチャのプロビジョニングおよびプロビジョニングされたサーバーの設定に Infrastructure as Code 自動化を使用しています。ツールは [Proliferate](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/implementation/proliferate) プロジェクトで管理されています。プロジェクトの readme には、現在サポートされている Infrastructure as Code に関する情報があります。これは、Terraform と Ansible を使用して新しいシステムをプロビジョニングするために QA チームが使用するオープンソースの [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) とは異なることに注意してください。

[services calculator](https://services-calculator.gitlab.io/) を使用して、SA/SAE/AE/CSM がスコーピング Issue を作成し、[エンゲージメントマネージャー](/handbook/customer-success/professional-services-engineering/engagement-mgmt/) と協力して顧客向けのサービス見積りを反復・改善できます。この Issue では、実装スコーピング質問に追加コンテキストを含めており、以下でプレビューできます。

<!--DEBT: below should be embedded from the SSOT locaed https://gitlab.com/services-calculator/services-calculator.gitlab.io/-/blob/master/make-ps-creates.py#L46-->

| スコーピング質問 | 顧客の回答 | 回答例 | 質問する理由 |
| - | - | - | - |
| ライセンスレベル（HA のサポートには少なくとも Premium が必要） | to-do | Premium | リクエストされた機能をインストール、設定、使用するために必要な適切なライセンスを顧客が保持していることを検証します。 |
| これは GitLab の新規インストールですか、それとも既存のインスタンスをスケールアップしようとしていますか？ | to-do | 新規インストール | 顧客が既存の GitLab デプロイメントを持っており、より強力な可用性/安定性要件を持つ新しいシステムに移行したい場合、現在のデプロイメントをアップグレードするか、新しいものを立ち上げてからデータを移行するかについて話し合いたいと考えます。 |
| 完全に実装された場合、顧客は GitLab に何人のユーザーがいると予想していますか？ | to-do | 3,250 | ユーザー数は、[GitLab リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/) に基づいて、ユーザー数をサポートできるインフラストラクチャを実装するのに役立ちます。 |
| 顧客には高可用性（HA）に関する厳格な要件はありますか？ | to-do | はい - 99.5% の可用性が目標 | 可用性要件は、デプロイするアーキテクチャを理解するのに役立ち、エンゲージメントを正確にスコーピングするのに役立ちます。 |
| 顧客は、地理的に分散したチームのパフォーマンスを向上させるため、または災害復旧（DR）に使用するため、セカンダリサイトミラーリング（Geo）を必要としていますか？ | to-do | はい - プライマリは AWS US-east、GEO セカンダリは US-west | 見積りで Geo セカンダリ構成を構築・設定する時間を正確に計上するために、この情報が必要です。 |
| Terraform と Ansible を使用した GitLab IaC、または AWS の CloudFormation で問題ありませんか、それとも顧客固有の IaC 要件はありますか？ | to-do | Terraform + Ansible が望ましい | GitLab はほとんどのデプロイメントについて、Terraform と Ansible 経由で標準の Infrastructure as Code（IAC）を提供しています。AWS には CloudFormation を、k8s 実装には Helm chart を提供できます。顧客が異なる IAC（例: Puppet または Chef）を希望する場合、これを過去に顧客向けに記述したことがあるか、またはこの作業を考慮するために追加の作業を組み込む必要があるかを検討する必要があります。 |
| これはどこにインストールされますか？（AWS、Azure、GCP、クライアントのデータセンター内のオンプレミス） | to-do | AWS | 実装アーキテクチャの検証に役立ちます。AWS デプロイメントは、このクラウドに関する経験と HA のためのさまざまな組み込みサービスのため、通常オンプレミスよりも作業量が少なくなります。他のクラウド（Azure、GCP）は追加の作業が必要になる場合があります。 |
| 顧客は Kubernetes へのインストールを計画していますか？ はいの場合: - どの k8s 実装が使用されますか（EKS、GKE、AKS、Openshift）？ | to-do | はい、EKS | これによりデプロイメントアーキテクチャが変わり（K8s ではステートレス、クラウドマネージドストレージサービスではステートフル）、実装エンゲージメントのスコーピング方法に影響します。 |
| Kubernetes 管理に関する顧客の経験レベルはどのくらいですか？ - 顧客は Helm 経由でデプロイすることに問題ありませんか？ | to-do | 初心者。Helm に慣れていません。 | 顧客のプラットフォームチームが、Helm を使用してシステムをデプロイおよび維持するための適切な必要な知識を持っていることを確認するために質問します。PS エンゲージメント終了後にデプロイメントを維持できない顧客が出ないようにしたいと考えています。 |
| 顧客が必要とする特定の OS はありますか？（例: RedHat Enterprise Linux（RHEL）、CENTOS、Ubuntu など） | to-do | RHEL | 私たちが使用できる一部のデプロイメントツールは特定のオペレーティングシステムのみをサポートしており、実装サービスエンゲージメントのサイズに影響する可能性があります。 |
| 非クラウド実装の場合、Redis、nfs などのアプライアンスはありますか？ | to-do | はい、git ストレージに NFS を使用しています。 | NFS のデプロイは、End of Life であるため推奨されません。アーキテクチャ設計で適切なガイダンスを提供するため、これに関する厳格な要件があるかどうかを把握する必要があります。 |
| 顧客は GitLab インスタンスをエアギャップにする必要がありますか？ つまり、インスタンスがインターネットに接続できない状態にする必要がありますか？ | to-do | はい、GitLab システムが直接（またはプロキシ経由で）インターネットに接続することを許可しません。 | GitLab CI がビルド、テスト、スキャン、デプロイのジョブを実行するために必要なコンテナにアクセスする方法がない場合、GitLab の価値は大幅に低下します。これに該当する場合、これらのコンテナを定期的に取り込み、セキュリティ脆弱性をスキャンし、コンテナレジストリで内部的にホストする方法を構築する作業をスコープに含めます。 |
| 顧客は GitLab デプロイメントからインターネットに出るためにプロキシを必要としますか？ | to-do | はい | これはセキュリティ攻撃ベクトルを減らすための一般的なアプローチです。GitLab が適切に機能できるよう、GitLab CI ジョブがオープンインターネットでホストされているレジストリからコンテナをプルできるよう、プロキシで動作するように GitLab システムの設定を支援します。 |
| 顧客は公的に信頼された証明書を使用しますか、それとも非標準の認証局を使用しますか？ 証明書はすぐに利用できますか、それともまだ発行が必要ですか？ | to-do | 公的に信頼された証明書を使用。はい、すでに証明書をプロビジョニング済み。 | 公的に信頼された証明書により、GitLab 標準デプロイメントをシームレスに行えます。非標準の認証局がある場合、デプロイメントはより複雑になります。また、証明書がまだ取得されていない場合、プロジェクトに遅延が発生する可能性があります。 |
| GitLab はデフォルトでロードバランサーで暗号化を終端し、GitLab コンポーネント間の通信中の暗号化は使用しません。この暗号化方式で十分ですか、それともコンポーネント間の通信中の暗号化が必要ですか？ | to-do | すべてのコンポーネント間で SSL を必要とする | すべてのコンポーネント間で SSL を有効にする必要がある場合、設定により時間がかかり、エンゲージメント見積りで考慮する必要があります。 |
| 顧客は高可用性の git ストレージを必要としますか？ | to-do | いいえ、強力なバックアップ/復元ポリシーを使用してメンテナンスの負担を軽減できます | GitLab には gitaly cluster と呼ばれる機能があり、git データを多くの gitaly ノード間で複製して、git データが高可用性であることを保証します。この機能はデプロイメントアーキテクチャに最低 10 個の追加ノードを必要とし、追加のメンテナンス負担が伴います。エンゲージメントを正確にスコーピングできるよう、このトレードオフを考慮する必要があります。 |
| 非クラウドおよび非 Kubernetes デプロイメントの場合、顧客は VM の管理にどのハイパーバイザー（例: VMWare）を使用しますか？ | to-do | N/A - AWS を使用 | 内部にデリバリーするためのスキルセットがあるか、またはニッチなハイパーバイザーについてはパートナーと連携する必要があるかを理解するのに役立ちます。 |
