---
title: "GitLab Delivery: Operate"
description: "Operate チームは、標準化されたツール、リファレンスアーキテクチャ、運用エクセレンスフレームワークを通じて、オペレーターがあらゆる規模で GitLab 環境をデプロイおよびメンテナンスできるよう支援します。GitLab デプロイのためのデプロイインフラと運用ツールを提供します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-30T16:57:54+00:00"
---

## 概要

Operate チームは、さまざまな環境とスケールにわたって GitLab をデプロイできるようにするためのデプロイツールと運用インフラストラクチャを構築・保守します。GitLab デプロイを実行可能で保守可能にするツール、自動化、ガイダンスを開発しています。一方、開発チームは GitLab のアプリケーション機能とその機能性のオーナーシップを保持します。

## ミッション

Operate チームは、GitLab がさまざまな環境にわたって信頼性高くインストールおよび運用できるようにするデプロイ自動化、インフラストラクチャツール、運用フレームワークを構築・保守します。GitLab のパッケージ化されたコンポーネントと、多様なインフラストラクチャ環境における成功裏のデプロイメントとのギャップを埋めるツールを開発しています。

私たちのフォーカスは、GitLab デプロイメントを単純化し、運用上の複雑さを軽減する、標準化されたデプロイツール、インフラストラクチャ自動化、運用ガイダンスを作成することです。

## 戦略ビジョン

私たちは、複数のデプロイメントパターンをサポートするデプロイツールを開発・保守しています:

### シングルノードデプロイメント

- ツール: [Build](../build/_index.md) チームと Omnibus デプロイメント機構の共同オーナーシップ
- フォーカス: シンプルなインストール自動化、アップグレードプロセス、運用ガイダンス
- サポート: シングルノード構成のドキュメンテーションおよびトラブルシューティング

### マルチノードおよびクラウドネイティブデプロイメント

- ツール: Omnibus、GitLab Charts、GitLab Operator、GitLab Environment Toolkit (GET)、リファレンスアーキテクチャ
- フォーカス: インフラストラクチャ自動化、スケールでのオーケストレーション、ゼロダウンタイム運用
- サポート: マルチノード構成のドキュメンテーションおよびトラブルシューティング

## チームメンバー

以下のメンバーがチームに所属しています:

{{< team-by-manager-slug manager="cjwilburn" team="Operate">}}

Product Manager: [Martin Brümmer](https://gitlab.com/mbruemmer)

## 主な責任

### デプロイメントツールの開発

- **Omnibus 統合:** Build チームとのデプロイメント機構の共同開発
- **GitLab Charts (Helm):** 包括的な設定オプションを備えた主要な Kubernetes デプロイメント方法
- **GitLab Operator:** OpenShift および vanilla Kubernetes 上に GitLab をデプロイするための Kubernetes オペレーター (新バージョンを開発中)
- **GitLab Environment Toolkit (GET):** インフラストラクチャプロビジョニングと構成の自動化
- **リファレンスアーキテクチャ:** デプロイメントパターン、サイジングガイダンス、アーキテクチャ仕様

### インフラストラクチャ自動化

- **プロビジョニング自動化:** クラウドプロバイダーをまたいだ一貫したインフラストラクチャセットアップのためのツール
- **構成管理:** GitLab デプロイの自動化された構成
- **スケーリング自動化:** 水平および垂直スケーリングのためのツールとプロセス

### 運用ガイダンスと標準

- **ドキュメンテーション:** インストール手順、運用ランブック、トラブルシューティングガイド
- **ベストプラクティス:** 運用標準とデプロイメントガイダンス

## 主要プロジェクトとツール

### GitLab Charts (Helm) - 主要な Kubernetes デプロイメント

**リポジトリ:** [gitlab-org/charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)
**ドキュメンテーション:** [docs.gitlab.com/charts/](https://docs.gitlab.com/charts/)

Kubernetes 上に GitLab をデプロイするための主要な方法で、以下を提供します:

- すべての GitLab コンポーネント向けの包括的な Helm chart
- さまざまなデプロイメントシナリオに対する柔軟な設定オプション
- クラウドネイティブエコシステム (Ingress、cert-manager など) との統合
- 広範なカスタマイズ機能を備えた本番運用ready のデフォルト
- GitLab リリースに合わせた定期更新

### GitLab Operator (Limited Availability)

**リポジトリ:** [gitlab-org/cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

現在限定提供で、置き換えが計画されています:

- Kubernetes ネイティブのライフサイクル管理 (スコープ限定)
- [新オペレーターバージョン](https://gitlab.com/gitlab-org/cloud-native/operator) で置き換え予定
- 本番 Kubernetes デプロイメントでは現在 GitLab Charts に注力

### GitLab Environment Toolkit (GET)

**リポジトリ:** [gitlab-org/gitlab-environment-toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)

リファレンスアーキテクチャに従ってスケールされた GitLab 環境をデプロイするためのオピニオン化された Terraform と Ansible のスクリプト。GET は以下を提供します:

- クラウドプロバイダーをまたいだ標準化されたインフラストラクチャプロビジョニング
- Cloud Native 環境のための GitLab Operator との統合
- 自動化された構成管理
- デプロイメントモデル間の明確な移行パス

### リファレンスアーキテクチャ

**リポジトリ:** [gitlab-org/quality/reference-architectures](https://gitlab.com/gitlab-org/quality/reference-architectures)

スケールされたデプロイメントパターンで、以下を提供します:

- 実際の使用メトリクスに基づく現実世界のサイジングガイダンス
- さまざまなスケールと要件に対する検証済み構成
- 新しいサービスのための統合パターン

## Operate チームとの連携

### Slack チャンネル

- **#g_operate** - ディスカッションとリクエストのための主なチームチャンネル
- **#gitlab_environment_toolkit** - GET 固有のディスカッションと質問
- **#reference-architectures** - リファレンスアーキテクチャのディスカッションとリクエスト
- チームハンドル: `@gitlab-org/software-delivery/operate`

### 支援のためのサポートリクエスト

GitLab は、顧客をサポートするための request for help (RFH) を作成する統一プロセスを提供します。このプロセスは、これらの単一の真実の情報源を確保するために整備されており、リクエストは多くの場合、製品の複数領域の専門知識を必要とするか、または顧客をサポートするのにどの領域がより適しているかが最初は明確でないため、機能をまたいでより良くコラボレーションできるようにします。同じサポートリクエストプロセス内で複数の関連グループと情報を共有することで、はるかに効率的に解決策に到達できます。

RFH を開くには、私たちの [how to get help](/handbook/support/workflows/how-to-get-help.md) ハンドブックページの手順を参照してください。

このプロセスにより、関与する時間を追跡し、適切な関係者が適切な時期に関与することを確認できます。

### 環境構築リクエスト

**Operate チームは、キャパシティ制約のためにオーダーメイドの環境構築リクエストを満たすことができません。** また、コスト影響のために、厳密に必要でない限り、GET を使った大きなサンドボックス環境の構築は一般的に推奨されません。ただし、これらのタイプの環境を構築する際にセルフサーブできるオプションがいくつかあります:

- GET ドキュメントを使ったセルフサービス
  - チームは、自分の環境を構築するために包括的な [GET ドキュメント](https://gitlab.com/gitlab-org/gitlab-environment-toolkit#documentation) に従えます。これは、カスタム環境を必要とするチームにとっての主要な推奨アプローチです。
  - 自動化された [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) オファリングを使うことが、テストおよび開発目的でクラウドアカウントをセットアップするために推奨されます。
- GitLab をローカルで実行: より単純なニーズに対しては、コストと複雑さを軽減するために、大きな環境を構築する代わりに GDK または Docker をローカルで実行することが推奨されます。
- Infra からの共有環境を使用: Infrastructure チームが提供する既存の共有環境を活用します。

## コミュニティとの連携

インストールおよびアップグレードプロセスは、システム管理者が GitLab を扱う際に最初に経験する機能です。
そのため、Operate チームが管理するプロジェクトはユーザーベースから高いレベルのエンゲージメントを持っています。GitLab コミュニティはコードのコントリビューターだけでなく、Issue や機能リクエストを記録するユーザーは、私たちを継続的に前進させ、より良い体験を作るのに役立っています。

私たちのパブリックプロジェクトでは、以下を目指しています:

1. 私たちの [Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) を堅持します。
1. [GitLab のミッションである誰もがコントリビュートできる](/handbook/company/mission/#mission) を可能にします。
1. 私たちの作業を [パブリック](#public-by-default) に示します。
1. コントリビューターの作業に対して[認識し感謝](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#recognition-for-contributors)します。
1. [タイムリーなレビュー回答時間](/handbook/engineering/workflow/code-review/#review-turnaround-time)を提供することで、コントリビューターの提供された時間を尊重します。

### オープンソースコミュニティとの連携

[GitLab のオープンコア](/handbook/company/stewardship) は、何千ものオープンソース依存関係の上に構築されています。これらの依存関係とそのコミュニティは GitLab 戦略にとって重要であり、これらの依存関係との連携はチームが保守するプロジェクトの本質的な部分です。

私たちは以下を目指しています:

1. 私たちが恩恵を受けているオープンソースコミュニティに対する作業の影響を考慮します。
2. GitLab 内でこれらのオープンソースコミュニティの重要性を促進します。
3. 私たちの [stewardship promises](/handbook/company/stewardship/#promises) に反する決定があれば、Issue を提起します。
4. [行った変更を還元する](/handbook/engineering/open-source/#using-forks-in-your-code) 機会を見つけます。

## デフォルトでパブリック {#public-by-default}

チームが行うすべての作業はパブリックです。一部の例外が適用されます:

- 作業にセキュリティ上の影響の可能性がある場合 - 作業の過程でセキュリティ上の懸念がもはや有効でない場合、この作業はパブリックになることが期待されます。
- サードパーティとの作業の場合 - サードパーティが作業をパブリックにしないよう要求した場合のみ。
- 作業に財務上の影響がある場合 - 財務的な詳細を作業から省略できない場合を除く。
- 作業に法的影響がある場合 - 法的詳細を作業から省略できない場合を除く。

チームの作業の一部は、開発サーバー `dev.gitlab.org` で行われます。
[Infrastructure overview document](https://docs.gitlab.com/omnibus/release/#infrastructure) で理由を一覧化しています。

セキュリティに関連しない限り、その他のすべての作業は `GitLab.com` のプロジェクトで行われます。
機密性の高い Issue を提出する必要がある場合は、機密 Issue を使用してください。

何かをプライベートのままにする必要があるかどうか不明な場合は、チームの Engineering Manager に確認してください。

## ワーク／ライフハーモニー

[all-remote](/handbook/company/culture/all-remote/) および [asynchronous first](/handbook/company/culture/all-remote/asynchronous/) で働くことは、チームメンバーが 1 日の作業にどう取り組むかに柔軟性を提供します。チームメンバーは、仕事の時間と人生の他の領域とのバランスを最良の方法で取るための選択をしなければなりません。

新しいチームメンバーには、自分の時間に集中する方法の例として以下のリソースが用意されています:

- [How team members approach their day](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/907)
- ブログ記事: [A day in life of a remote worker](https://about.gitlab.com/blog/2019/06/18/day-in-the-life-remote-worker/)
- [非線形ワークデー](/handbook/company/culture/all-remote/non-linear-workday/) の選択肢
- GitLab handbook: [Work/life Harmony](/handbook/company/culture/all-remote/)

健全なワーク／ライフバランスを保つには、以下の GitLab Handbook 領域が重要です。

- [家族と友人優先、仕事は二の次](/handbook/values/#family-and-friends-first-work-second)
- [リモートワークにおけるバーンアウト、孤立、不安への対処](/handbook/company/culture/all-remote/mental-health/)
- [バーンアウトの認識](/handbook/people-group/time-off-and-absence/time-off-types/)
