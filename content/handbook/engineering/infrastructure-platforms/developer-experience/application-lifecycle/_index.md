---
title: "Developer Experience: Application Lifecycle"
description: "Application Lifecycle チームは、標準化されたツール、リファレンスアーキテクチャ、オペレーショナルエクセレンスのフレームワークを通じて、あらゆる規模の GitLab 環境をオペレーターがデプロイし、維持できるようにします。私たちは、GitLab デプロイのためのデプロイインフラストラクチャと運用ツールを提供します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/application-lifecycle/"
upstream_sha: "bc76a1a59f8b471f304263e712307581bdc7d128"
lastmod: "2026-08-21T10:31:23+10:00"
translated_at: "2026-09-04T22:10:05+09:00"
translator: "codex"
stale: false
---

## 概要 {#overview}

Application Lifecycle チームは、さまざまな環境や規模で GitLab をデプロイできるようにするデプロイツールと運用インフラストラクチャを構築し、維持します。私たちは、GitLab のデプロイを実現し、保守可能にするツール、自動化、ガイダンスを開発します。一方で、開発チームは GitLab のアプリケーションの機能と機能性に対するオーナーシップを維持します。

## ファンクショナルチーム {#functional-teams}

Application Lifecycle チームは、3 つの異なるファンクショナルチームに分かれています。

- [Lifecycle Management](lifecycle-management.md)
- [Instance Configuration](instance-configuration.md)
- [Platform Readiness](platform-readiness.md)

## ミッション {#mission}

Application Lifecycle チームは、異なる環境で GitLab を確実にインストールし、運用できるようにするデプロイ自動化、インフラストラクチャツール、運用フレームワークを構築し、維持します。私たちは、GitLab のパッケージ化されたコンポーネントと、多様なインフラストラクチャ環境へのデプロイ成功との隔たりを埋めるツールを開発します。

私たちは、GitLab のデプロイを簡素化し、運用上の複雑さを軽減する、標準化されたデプロイツール、インフラストラクチャ自動化、運用ガイダンスの作成に注力しています。

## 戦略的ビジョン {#strategic-vision}

私たちは、複数のデプロイパターンをサポートするデプロイツールを開発し、維持します。

### シングルノードデプロイ {#single-node-deployments}

- ツール: [Build](../../gitlab-delivery/build/_index.md) チームとの Omnibus デプロイメカニズムの共同所有
- 焦点: シンプルなインストール自動化、アップグレードプロセス、運用ガイダンス
- サポート: シングルノード構成のドキュメントとトラブルシューティング

### マルチノードおよびクラウドネイティブデプロイ {#multi-node-and-cloud-native-deployments}

- ツール: Omnibus、GitLab Charts、GitLab Operator、GitLab Environment Toolkit（GET）、Reference Architectures
- 焦点: インフラストラクチャ自動化、大規模なオーケストレーション、ゼロダウンタイム運用
- サポート: マルチノード構成のドキュメントとトラブルシューティング

## チームメンバー {#team-members}

チームのメンバーは次のとおりです。

{{< team-by-manager-slug manager="cjwilburn" team="Application Lifecycle">}}

Product Manager: [Martin Brümmer](https://gitlab.com/mbruemmer)

## 主な責任 {#core-responsibilities}

### デプロイツールの開発 {#deployment-tooling-development}

- **Omnibus の統合:** Build チームとのデプロイメカニズムの共同開発
- **GitLab Charts（Helm）:** 包括的な設定オプションを備えた、Kubernetes の主要なデプロイ方法
- **GitLab Operator:** OpenShift と標準の Kubernetes に GitLab をデプロイするための Kubernetes オペレーター（新しいバージョンを開発中）
- **GitLab Environment Toolkit（GET）:** インフラストラクチャのプロビジョニングと設定の自動化
- **Reference Architectures:** デプロイパターン、サイジングのガイダンス、アーキテクチャ仕様

### インフラストラクチャの自動化 {#infrastructure-automation}

- **プロビジョニングの自動化:** クラウドプロバイダー間で一貫したインフラストラクチャをセットアップするためのツール
- **設定管理:** GitLab デプロイの設定の自動化
- **スケーリングの自動化:** 水平方向および垂直方向のスケーリングのためのツールとプロセス

### 運用ガイダンスと基準 {#operational-guidance-and-standards}

- **ドキュメント:** インストール手順、運用ランブック、トラブルシューティングガイド
- **ベストプラクティス:** 運用基準とデプロイのガイダンス

## 主なプロジェクトとツール {#primary-projects-and-tools}

### GitLab Charts（Helm）- Kubernetes の主要なデプロイ方法 {#gitlab-charts-helm-primary-kubernetes-deployment}

**リポジトリ:** [gitlab-org/charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)
**ドキュメント:** [docs.gitlab.com/charts/](https://docs.gitlab.com/charts/)

Kubernetes に GitLab をデプロイする主要な方法であり、次の機能を提供します。

- GitLab の全コンポーネントに対応する包括的な Helm chart
- さまざまなデプロイシナリオに対応する柔軟な設定オプション
- クラウドネイティブエコシステム（Ingress、cert-manager など）との統合
- 幅広いカスタマイズ機能を備えた、本番環境に適したデフォルト設定
- GitLab のリリースに合わせた定期的な更新

### GitLab Operator（限定提供） {#gitlab-operator-limited-availability}

**リポジトリ:** [gitlab-org/cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

現在は限定提供中であり、置き換えが計画されています。

- Kubernetes ネイティブのライフサイクル管理（限定的な範囲）
- [新しいオペレーターバージョン](https://gitlab.com/gitlab-org/cloud-native/operator)に置き換え中
- 本番 Kubernetes デプロイ向けの GitLab Charts に現在は注力

### GitLab Environment Toolkit（GET） {#gitlab-environment-toolkit-get}

**リポジトリ:** [gitlab-org/gitlab-environment-toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)

Reference Architectures に従ってスケーリングされた GitLab 環境をデプロイするための、規約を定めた Terraform および Ansible スクリプトです。GET は次の機能を提供します。

- クラウドプロバイダー間で標準化されたインフラストラクチャのプロビジョニング
- クラウドネイティブ環境向けの GitLab Operator との統合
- 設定管理の自動化
- デプロイモデル間の明確な移行パス

### Reference Architectures {#reference-architectures}

**リポジトリ:** [gitlab-org/quality/reference-architectures](https://gitlab.com/gitlab-org/quality/reference-architectures)

スケーリングされたデプロイパターンであり、次を提供します。

- 実際の使用メトリクスに基づく、実用的なサイジングのガイダンス
- さまざまな規模と要件に対応する検証済みの構成
- 新しいサービスの統合パターン

## Application Lifecycle チームとの連携 {#working-with-the-application-lifecycle-team}

### Slack チャンネル {#slack-channels}

- **#g_application_lifecycle** - 議論とリクエストのためのメインチームチャンネル
- **#gitlab_environment_toolkit** - GET に関する議論と質問
- **#reference-architectures** - Reference Architecture に関する議論とリクエスト
- チームハンドル: `@gitlab-org/software-delivery/operate`

### サポートへの支援リクエスト {#support-requests-for-help}

GitLab では、お客様をサポートするために支援リクエスト（RFH）を作成する統一プロセスを提供しています。このプロセスは、これらのリクエストについて単一の信頼できる情報源を確保するために設けられています。多くの場合、リクエストには製品内の複数領域の専門知識が実際に必要であったり、お客様のサポートにどの領域がより適しているかが当初は不明確だったりするため、部門横断的によりよくコラボレーションできます。同じサポートリクエストプロセス内で複数の関連グループに情報を共有すると、より効率的に解決策へ到達できます。

RFH を作成するには、ハンドブックの[支援を得る方法](/handbook/support/workflows/how-to-get-help.md)ページにある手順を参照してください。

このプロセスにより、かかった時間を追跡し、適切な関係者が適切なタイミングで関与するようにできます。

### 環境構築リクエスト {#environment-build-requests}

**Application Lifecycle チームは、キャパシティの制約により、個別仕様の環境構築リクエストには対応できません。** また、コストへの影響があるため、厳密に必要な場合を除き、GET で大規模なサンドボックス環境を構築することは一般に推奨されません。ただし、この種の環境をセルフサービスで構築するには、次の選択肢があります。

- GET のドキュメントを使用したセルフサービス
  - チームは包括的な [GET のドキュメント](https://gitlab.com/gitlab-org/gitlab-environment-toolkit#documentation)に従って、独自の環境を構築できます。これは、カスタム環境が必要なチームに第一に推奨される方法です。
  - テストや開発用のクラウドアカウントをセットアップするには、自動化された [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/)サービスの使用を推奨します。
- GitLab をローカルで実行: より単純なニーズの場合は、コストと複雑さを減らすために、大規模な環境を構築する代わりに GDK または Docker をローカルで実行することを推奨します。
- Infra の共有環境を使用: Infrastructure チームが提供する既存の共有環境を利用します。

## コミュニティとの連携 {#working-with-the-community}

インストールとアップグレードのプロセスは、すべてのシステム管理者が GitLab を使用するときに最初に体験する機能です。
そのため、Application Lifecycle チームが管理するプロジェクトには、ユーザー層から高いレベルの関与があります。GitLab
コミュニティは、コードのコントリビューターだけで構成されているわけではありません。Issue や機能リクエストを登録するユーザーは、絶えず
私たちを前進させ、よりよいエクスペリエンスの実現を支援しています。

私たちは、公開プロジェクトで次のことに努めます。

1. [コミュニティ行動規範](https://about.gitlab.com/community/contribute/code-of-conduct/)を遵守します。
1. [誰もがコントリビュートできるという GitLab のミッション](/handbook/company/mission/#mission)を実現します。
1. 作業内容を[公開](#public-by-default)します。
1. コントリビューターの取り組みを[認め、感謝します](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#recognition-for-contributors)。
1. [迅速なレビューのターンアラウンドタイム](/handbook/engineering/workflow/code-review/#review-turnaround-time)を提供し、コントリビューターが提供してくれた時間を尊重します。

### オープンソースコミュニティとの連携 {#working-with-open-source-communities}

[GitLab のオープンコア](/handbook/company/stewardship)は、数千ものオープンソース
依存関係の上に構築されています。これらの依存関係とそのコミュニティは、GitLab の戦略にとって重要であり、
これらの依存関係と連携することは、チームが維持するプロジェクトに不可欠です。

私たちは次のことに努めます。

1. 私たちが恩恵を受けるオープンソースコミュニティに対して、作業が及ぼす影響を検討します。
2. GitLab 内で、これらのオープンソースコミュニティの重要性を広めます。
3. 私たちの[スチュワードシップの約束](/handbook/company/stewardship/#promises)に反する意思決定に対して、問題を提起します。
4. [私たちが行った変更を還元する](/handbook/engineering/open-source/#using-forks-in-your-code)機会を見つけます。

## デフォルトで公開 {#public-by-default}

チームが行うすべての作業は公開されます。ただし、いくつかの例外があります。

- 作業にセキュリティ上の影響が考えられる - 作業の途中でセキュリティ上の懸念が解消された場合、その作業は公開することが求められます。
- 作業を第三者と行う - 第三者が作業を非公開にするよう求めた場合のみです。
- 作業に財務上の影響がある - 作業から財務上の詳細を省略できる場合を除きます。
- 作業に法的な影響がある - 作業から法的な詳細を省略できる場合を除きます。

チームの作業の一部は、開発サーバー `dev.gitlab.org` で行われます。
[インフラストラクチャ概要ドキュメント](https://docs.gitlab.com/omnibus/release/#infrastructure)に理由が記載されています。

セキュリティに関連する作業を除き、その他のすべての作業は `GitLab.com` 上のプロジェクトで行われます。
機密性の高い Issue を提出する必要がある場合は、confidential Issue を使用してください。

何かを非公開にしておく必要があるか分からない場合は、チームの Engineering Manager に確認してください。

## ワークライフハーモニー {#worklife-harmony}

[オールリモート](/handbook/company/culture/all-remote/)で[非同期を第一](/handbook/communication/#asynchronous-communication)に働くことは、
チームメンバーの働き方に柔軟性をもたらします。チームメンバーは、仕事の時間と生活の他の領域とのバランスを最適に取る方法を選択する必要があります。

新しいチームメンバーにとって、次のリソースは時間の使い方に焦点を当てるための例となります。

- [チームメンバーが 1 日をどう過ごすか](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/907)
- ブログ記事: [リモートワーカーのある 1 日](https://about.gitlab.com/blog/2019/06/18/day-in-the-life-remote-worker/)
- [非線形な勤務日](/handbook/company/culture/all-remote/non-linear-workday/)という選択肢
- GitLab ハンドブック: [ワークライフハーモニー](/handbook/company/culture/all-remote/)

次の GitLab ハンドブックの領域は、健全なワークライフバランスを維持するうえで重要です。

- [家族と友人を第一に、仕事は第二に](/handbook/values/#family-and-friends-first-work-second)
- [リモートワーク環境での燃え尽き、孤立、不安への対処](/handbook/company/culture/all-remote/mental-health/)
- [燃え尽きの認識](/handbook/people-group/time-off-and-absence/time-off-types/)
