---
title: "GitLab Delivery: Operate"
description: "Operate チームは、標準化されたツール、リファレンスアーキテクチャ、運用エクセレンスフレームワークを通じて、オペレーターがあらゆる規模で GitLab 環境をデプロイおよびメンテナンスできるよう支援します。GitLab デプロイのためのデプロイインフラと運用ツールを提供します。"
upstream_path: "/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:11:38Z"
translator: claude
stale: false
---

## 概要

Operate チームは、GitLab をさまざまな環境と規模でデプロイできるようにするデプロイツールと運用インフラを構築・維持します。私たちは GitLab のデプロイを実現可能でメンテナンス可能にするツール、自動化、ガイダンスを開発しており、開発チームは GitLab のアプリケーション機能と機能性の所有権を保持しています。

## ミッション

Operate チームは、GitLab をさまざまな環境で信頼性高くインストールおよび運用できるようにするデプロイ自動化、インフラツール、運用フレームワークを構築・維持します。私たちは GitLab のパッケージ化されたコンポーネントと多様なインフラ環境での成功したデプロイのギャップを埋めるツールを開発します。

私たちのフォーカスは、GitLab のデプロイを簡素化し、運用の複雑さを軽減する標準化されたデプロイツール、インフラ自動化、運用ガイダンスを作成することです。

## 戦略的ビジョン

私たちは複数のデプロイパターンをサポートするデプロイツールを開発・維持します:

### シングルノードデプロイ

- ツール: [Build](../build/_index.md) チームとの Omnibus デプロイメカニクスの共同所有
- フォーカス: シンプルなインストール自動化、アップグレードプロセス、運用ガイダンス
- サポート: シングルノード構成のドキュメントとトラブルシューティング

### マルチノードおよびクラウドネイティブデプロイ

- ツール: Omnibus、GitLab Charts、GitLab Operator、GitLab Environment Toolkit (GET)、リファレンスアーキテクチャ
- フォーカス: インフラ自動化、大規模なオーケストレーション、ゼロダウンタイム運用
- サポート: マルチノード構成のドキュメントとトラブルシューティング

## チームメンバー

以下の人々がチームのメンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


プロダクトマネージャー: [Martin Brümmer](/handbook/company/team/#mbruemmer)

## 主要責任

### デプロイツール開発

- **Omnibus 統合:** Build チームとのデプロイメカニクスの共同開発
- **GitLab Charts (Helm):** 包括的な設定オプションを持つプライマリ Kubernetes デプロイメソッド
- **GitLab Operator:** OpenShift と vanilla Kubernetes に GitLab をデプロイするための Kubernetes オペレーター（新バージョン開発中）
- **GitLab Environment Toolkit (GET):** インフラプロビジョニングと設定自動化
- **リファレンスアーキテクチャ:** デプロイパターン、サイジングガイダンス、アーキテクチャ仕様

### インフラ自動化

- **プロビジョニング自動化:** クラウドプロバイダー全体で一貫したインフラセットアップのためのツール
- **設定管理:** GitLab デプロイの自動設定
- **スケーリング自動化:** 水平および垂直スケーリングのためのツールとプロセス

### 運用ガイダンスと標準

- **ドキュメント:** インストール手順、運用ランブック、トラブルシューティングガイド
- **ベストプラクティス:** 運用標準とデプロイガイダンス

## 主要プロジェクトとツール

### GitLab Charts (Helm) - プライマリ Kubernetes デプロイ

**リポジトリ:** [gitlab-org/charts/gitlab](https://gitlab.com/gitlab-org/charts/gitlab)
**ドキュメント:** [docs.gitlab.com/charts/](https://docs.gitlab.com/charts/)

Kubernetes 上に GitLab をデプロイするための主要な方法であり、以下を提供します:

- すべての GitLab コンポーネントの包括的な Helm チャート
- さまざまなデプロイシナリオ向けの柔軟な設定オプション
- クラウドネイティブエコシステム（Ingress、cert-manager など）との統合
- 広範なカスタマイズ機能を持つ本番対応のデフォルト設定
- GitLab リリースに合わせた定期的な更新

### GitLab Operator（限定提供）

**リポジトリ:** [gitlab-org/cloud-native/gitlab-operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

現在、置き換えの計画を持つ限定提供:

- Kubernetes ネイティブのライフサイクル管理（限定スコープ）
- [新しいオペレーターバージョン](https://gitlab.com/gitlab-org/cloud-native/operator) で置き換え予定
- 本番 Kubernetes デプロイには現在 GitLab Charts を推奨

### GitLab Environment Toolkit (GET)

**リポジトリ:** [gitlab-org/gitlab-environment-toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)

リファレンスアーキテクチャに従ってスケールされた GitLab 環境をデプロイするための意見のある Terraform および Ansible スクリプト。GET は以下を提供します:

- クラウドプロバイダー全体での標準化されたインフラプロビジョニング
- クラウドネイティブ環境向けの GitLab Operator との統合
- 自動設定管理
- デプロイモデル間の明確な移行パス

### リファレンスアーキテクチャ

**リポジトリ:** [gitlab-org/quality/reference-architectures](https://gitlab.com/gitlab-org/quality/reference-architectures)

以下を提供するスケールされたデプロイパターン:

- 実際の使用メトリクスに基づいたリアルワールドのサイジングガイダンス
- さまざまな規模と要件に対する検証済みの設定
- 新しいサービスの統合パターン

## Operate チームとの連携

### Slack チャンネル

- **#g_operate** - ディスカッションとリクエストのためのプライマリチャンネル
- **#gitlab_environment_toolkit** - GET 固有のディスカッションと質問
- **#reference-architectures** - リファレンスアーキテクチャのディスカッションとリクエスト
- チームハンドル: `@gitlab-org/software-delivery/operate`

### サポートヘルプリクエスト

GitLab は顧客をサポートするためのヘルプリクエスト（RFH）を開くための統合プロセスを提供しています。このプロセスはシングルソースオブトゥルースを確保し、多くの場合リクエストは製品の複数の領域の専門知識を必要とするか、最初はどの領域が顧客をサポートするのに適しているか明確でないため、クロスファンクショナルな協力をより良く行えるようにします。同じサポートリクエストプロセス内で複数の関連グループと情報を共有することで、より効率的にソリューションに到達できます。

RFH を開くには、[ヘルプの入手方法](/handbook/support/workflows/how-to-get-help.md) ハンドブックページの手順を参照してください。

このプロセスにより、関与した時間を追跡し、正しい関係者が適切なタイミングで関与することを確保できます。

### 環境構築リクエスト

**Operate チームはキャパシティの制約により、カスタム環境構築リクエストを受け付けられません。** また、GET を使用して大規模なサンドボックス環境を構築することは、厳密に必要でない限りコストへの影響から一般的に推奨されません。ただし、これらのタイプの環境をセルフサービスで構築するためのいくつかのオプションがあります:

- GET ドキュメントを使用したセルフサービス
  - チームは包括的な [GET ドキュメント](https://gitlab.com/gitlab-org/gitlab-environment-toolkit#documentation) に従って独自の環境を構築できます。これはカスタム環境が必要なチームにとって推奨される主要なアプローチです。
  - テストと開発目的でクラウドアカウントをセットアップするには、自動化された [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) の利用が推奨されています。
- GitLab をローカルで実行する: よりシンプルなニーズには、コストと複雑さを軽減するために大規模な環境を構築するのではなく、GDK や Docker をローカルで実行することをお勧めします。
- インフラからの共有環境を使用する: インフラチームが提供する既存の共有環境を活用します。

## コミュニティとの連携

インストールとアップグレードプロセスは、GitLab を使用するすべてのシステム管理者が最初に経験する機能です。その結果、Operate チームが管理するプロジェクトはユーザーベースから高いエンゲージメントを受けています。GitLab コミュニティはコード貢献者だけでなく、Issue や機能リクエストを記録するユーザーも含まれており、常に私たちを前進させ、より良い体験を生み出す手助けをしています。

私たちは公開プロジェクトで以下を目指しています:

1. [コミュニティ行動規範](https://about.gitlab.com/community/contribute/code-of-conduct/) を守ること。
1. [誰でも貢献できる GitLab のミッション](/handbook/company/mission/#mission) を実現すること。
1. [公開](#public-by-default) で作業を示すこと。
1. 貢献者の作業を[認識して感謝する](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#recognition-for-contributors) こと。
1. [適時のレビューターンアラウンドタイムを提供する](/handbook/engineering/workflow/code-review/#review-turnaround-time) ことで貢献者が提供した時間を尊重すること。

### オープンソースコミュニティとの連携

[GitLab のオープンコア](/handbook/company/stewardship) は何千ものオープンソース依存関係の上に構築されています。これらの依存関係とそのコミュニティは GitLab の戦略にとって重要であり、これらの依存関係と協力することは、チームが維持するプロジェクトの不可欠な部分です。

私たちは以下を目指しています:

1. 私たちが恩恵を受けているオープンソースコミュニティへの作業の影響を考慮する。
2. GitLab 内でこれらのオープンソースコミュニティの重要性を促進する。
3. [スチュワードシップの約束](/handbook/company/stewardship/#promises) に反する決定に異議を唱える。
4. [私たちが行った変更を貢献し返す機会を見つける](/handbook/engineering/open-source/#using-forks-in-your-code)。

## デフォルトで公開 {#public-by-default}

チームが実施するすべての作業は公開されています。一部の例外があります:

- 作業にセキュリティへの影響がある可能性がある場合 - 作業の過程でセキュリティの懸念が無効になった場合、この作業が公開されることが期待されます。
- 作業が第三者と行われる場合 - 第三者が作業を公開しないよう要求した場合のみ。
- 作業に財務的な影響がある場合 - 財務詳細を作業から省略できない場合を除く。
- 作業に法的な影響がある場合 - 法的詳細を作業から省略できない場合を除く。

チームの作業の一部は `dev.gitlab.org` にある開発サーバーで実施されます。[インフラ概要ドキュメント](https://docs.gitlab.com/omnibus/release/#infrastructure) にその理由がリストされています。

セキュリティに関連する作業でない限り、他のすべての作業は `GitLab.com` のプロジェクトで実施されます。機密性の高い Issue を提出する必要がある場合は、機密 Issue を使用してください。

何かをプライベートにしておく必要があるかどうか不明な場合は、チームエンジニアリングマネージャーに確認してください。

## ワークライフハーモニー

[全リモート](/handbook/company/culture/all-remote/) と [非同期優先](/handbook/company/culture/all-remote/asynchronous/) での作業は、チームメンバーが業務日をどう進めるかについて柔軟性を提供します。チームメンバーは作業時間と生活の他の部分のバランスをどのように取るかを選択する必要があります。

新しいチームメンバーには、時間の使い方に焦点を当てる方法の例として以下のリソースを提供します:

- [チームメンバーの一日の過ごし方](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/907)
- ブログ記事: [リモートワーカーの一日](https://about.gitlab.com/blog/2019/06/18/day-in-the-life-remote-worker/)
- [非線形な業務日](/handbook/company/culture/all-remote/non-linear-workday/) のオプション
- GitLab ハンドブック: [ワークライフハーモニー](/handbook/company/culture/all-remote/)

以下の GitLab ハンドブック分野は健全なワークライフバランスを維持するために重要です。

- [家族と友人を最優先に、仕事は二番目に](/handbook/values/#family-and-friends-first-work-second)
- [リモートワークにおけるバーンアウト、孤独、不安への対処](/handbook/company/culture/all-remote/mental-health/)
- [バーンアウトの認識](/handbook/people-group/time-off-and-absence/time-off-types/)
