---
title: "DevOps ソリューションリソース: 継続的インテグレーション"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/
upstream_sha: d0a19ab78fc5e0d322868c8f35ab8f81e761bd21
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

**GitLab の継続的インテグレーション（CI）ケイパビリティに関するお客様向けの概要をお探しですか？ [CI Solution](https://about.gitlab.com/solutions/continuous-integration/) を参照してください**

以下のページは、DevSecOps を中心とした GitLab の go-to-market の取り組みについて、セールスとマーケティングを単一の信頼できる情報源に整合させることを目的としています。

## 連絡先

| プロダクトマーケティング | デベロッパーアドボケイト |
| ---- | --- |
| Daniel Hom (@danielhom) | Itzik Gan-Baruch ( @iganbaruch ) |

## 市場の視点

## 継続的インテグレーション

継続的インテグレーション（CI）ユースケースは、デジタル時代における現代のソフトウェア開発の定番です。「DevOps」という言葉を聞いたら、すぐに「継続的インテグレーションと継続的デリバリー」（CI/CD）への言及が続かないことはまずありません。最も基本的な意味では、CI の部分は、開発チームがコードのビルドとテストを自動化できるようにします。

CI を実践する際、チームは共有リポジトリを使って、コードベースに対する頻繁な変更を保存・修正・追跡し、プロジェクトでコラボレーションします。開発者は 1 日に何度もコードをチェックインしてリポジトリに統合し、バックグラウンドで実行される自動テストに依存します。これらの自動テストは、潜在的なバグやセキュリティ脆弱性、パフォーマンスとコード品質の劣化をチェックして変更を検証します。問題が深刻化する前に検知するため、ソフトウェア開発ライフサイクルのできるだけ早い段階でテストを実行することが有利です。

CI はソフトウェア開発を開発者にとってより簡単に、より速く、リスクを少なくします。ビルドとテストを自動化することで、開発者はより小さな変更を行い、自信を持ってコミットできます。彼らはイテレーションして迅速に改善するためにコードに対する早期のフィードバックを得ることで、イノベーションの全体的なペースを上げます。DevOps Research and Assessment（DORA）が実施した研究は、[堅牢な DevOps プラクティスがビジネスアウトカムの改善につながる](https://cloud.google.com/devops/state-of-devops/)ことを示しています。これらの「DORA 4」メトリクスはすべて CI を使うことで改善できます:

- **リードタイム:** 早期のフィードバックとビルド/テスト自動化は、コードがコミットされてから本番で正常に動作するまでの時間の短縮に役立ちます。
- **デプロイ頻度:** 自動化されたビルドとテストは、自動化されたデプロイの前提条件です。
- **サービス復旧時間:** 自動化されたパイプラインによってより速く本番に修正をデプロイでき、平均復旧時間（MTTR）が短縮されます。
- **変更失敗率:** 早期の自動テストは、本番に到達する欠陥の数を大きく減らします。

[GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/) は、単一のアプリケーションとして提供される GitLab の完全な DevOps プラットフォームに組み込まれています。複数のツールをつぎはぎする必要はなく、ユーザーはすぐにシームレスな体験を得られます。

## ペルソナ

### ユーザーペルソナ

このユースケースの典型的な**ユーザーペルソナ**は、開発者、開発チームリード、DevOps エンジニアです。

#### ソフトウェア開発者 Sasha

[ソフトウェア開発者](/handbook/product/personas/#sasha-software-developer)は、あらゆる種類の開発ツールとプログラミング言語の専門知識を持ち、DevOps 領域において非常に貴重なリソースとなります。彼らはソースコード管理と CI ケイパビリティを併用して、迅速かつ一貫した高品質のコードを提供します。

- 開発者は問題解決者であり、批判的思考者であり、学ぶことが大好きです。彼らは計画されたタスクで最高の働きをし、時間の大半を、お客様に愛される機能としてデリバーされるコードを書くことに費やしたいと考えています。

#### 開発チームリード Delaney

[開発チームリード](/handbook/product/personas/#delaney-development-team-lead)は、チームの生産性と計画された作業を期日通りにデリバーする能力を重視します。CI を活用することで、チームの生産性を最大化し、計画されたタスクへの混乱を最小化できます。

- チームリードは、今後のタスクを割り当てるためにチームのキャパシティを把握する必要があり、また、適切なリソースを割り当ててブロッカーの解決を支援する必要があります。

#### DevOps エンジニア Devon

[DevOps エンジニア](/handbook/product/personas/)は、組織の SDLC を深く理解し、インフラ、環境、インテグレーションをサポートします。CI は、自動テストを実行し、開発チームによって SCM に統合し直されたコード変更を検証する単一の場所を提供することで、彼らの仕事を楽にします。

- DevOps エンジニアは開発チームを直接サポートし、リアクティブではなくプロアクティブに働くことを好みます。彼らは時間を、機能やバグ修正の実装のためのコーディングと、開発者がコードをビルド・テスト・リリースするのを支援することの間で分けます。

### バイヤーペルソナ

CI の購入には通常、エグゼクティブの関与は必要ありません。多くの場合、調達や IT の承認なしに、フリーミアムオファリングを通じて取得・インストールされます。このプロセスは一般にシャドー IT として知られています。アップグレードが必要になると、[アプリケーション開発マネージャー](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/)が最も頻繁な意思決定者となります。[アプリケーション開発ディレクター](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/)の影響力も注目に値します。

## 業界アナリストリソース

このユースケースに関する比較調査の例は以下に列挙しています。このユースケースに関連するその他の調査は、[Analyst Reports - Use Cases](https://docs.google.com/spreadsheets/d/1vXpniM08Ql0v0yDd22pcNmXpDrA-NInJOwj25PRuHXA/edit?usp=sharing) スプレッドシートで確認できます。

- [Forrester Wave for Cloud-Native CI Tools](https://about.gitlab.com/analysts/forrester-cloudci19/)

## 市場要件

| 市場要件 | 説明 | 典型的なケイパビリティ実現機能 | バリュー / ROI |
|---------|-------------|-----------|------|
| 1) ビルド自動化 | シンプルで反復可能な自動化されたタスクを一連の相互依存する自動ビルドにつなぐことで、アプリケーション開発ワークフローを合理化します。これにはコンパイル、リンク、パッケージング、出力されたバイナリライブラリ/ファイルがテストの準備が整っていることの確認が含まれます。**手作業の介入なしにソフトウェアを一貫してビルドし、開発者が自動テストをパイプラインに組み込んでコード変更の検証/バリデーションを開始できるようにします。** チームは、自動化されたジョブをクラウド（パブリック/プライベート/ハイブリッド）または共有インフラのどちらで実行するかをコントロールできます。 | CI/CD パイプライン、スケーラブルなリソース、ジョブオーケストレーション/ワーク分散、キャッシュ、外部リポジトリとの統合。自動ビルドは、開発チームが頼る幅広い言語、フレームワーク、ライブラリをサポートします。 | ビルド速度を上げる。開発チームは手作業を減らすことでより効率的に働きます。 |
| 2) テスト自動化 | 自動テストを実行・管理し、本番にマージする前に変更を検証します。これには基本的なテストからより詳細なテストまで含まれ、機能テスト、システムテスト、パフォーマンステストなどの領域にテスト自動化を拡張します。**ソフトウェアが手作業の介入なしに技術的・ビジネス的な要件を満たすよう一貫してテストされ、開発者がコード変更が潜在的な欠陥や脆弱性を引き起こすかどうかについて迅速なフィードバックを得られるようにします。** | CI/CD パイプライン内で隔離された自動テストを実行する能力。さまざまなテストには、ユニットテスト、コードインテグレーションテスト、回帰テスト、静的コード解析、機能テスト、アクセシビリティテストなどが含まれますが、これらに限りません。 | 問題が深刻化する前に、後ではなくより早い段階で潜在的なエラーを捕捉します。|
| 3) パイプライン構成管理 | CI ソリューションは、開発者がビルドとテストのワークフローを簡単に自動化できるようにします。具体的には、ソースコードリポジトリへの接続、ビルドパイプラインでの特定のアクション/タスクの定義、ジョブを正確にいつ/どのように実行するかのパラメータ設定、そしてスクリプトおよび/または GUI を使ったパイプライン変更の構成です。構成は容易に再現可能であり、トレーサビリティが存在することで、環境への変更の迅速な比較と追跡が可能になります。 | Web UI による構成、または YAML のような人間が読める構文での config-as-code をサポート。 | 開発時間を最大化し、生産性を向上させます。手作業を減らせます。 |
| 4) 可視性とコラボレーション | このソリューションは、パイプライン構造、特定のジョブ実行への可視性を開発チームに提供し、パイプラインジョブへの変更と更新を管理できるようにします。このソリューションは、チームが容易にコラボレーションし、コード変更を行い、作業をレビューし、直接コミュニケーションできるようにする必要があります。CI ソリューションは、ビルドの状態への可視性とインサイトを提供する必要があります。 | プルリクエストまたはマージリクエスト、コミット履歴、自動通知/アラート、ChatOps、コードレビュー、プレビュー環境。 | より速いフィードバックと、変更がビルドを壊すリスクの低減。 |
| 5) プラットフォームと言語のサポート | 多くの組織は、開発チーム内で OS とコードスタックの混在を使用しています。CI ソリューションは複数の OS（Windows、Linux、Mac）で動作する必要があります。CI ソリューションは、幅広い開発言語（Java、PHP、Ruby、C など）のビルドとテストの自動化をサポートする言語非依存である必要があります。 | ネイティブパッケージ、インストーラー、ソースからのダウンロード、コンテナを使用するオプション。パブリック、プライベート、ハイブリッドホスティング向けのクラウドネイティブプラットフォームサポート。任意の OS で動作。 | チームに柔軟性を与え、採用を容易にします。 |
| 6) パイプラインセキュリティ |  自動化されたプロセスにセキュリティを組み込むことで、CI パイプラインへのアクセスが一貫して管理・コントロールされるようにします。適切なユーザーがジョブ/ブランチに安全にアクセスできるようにし、シークレットなどの機密データを安全に保管・管理し、誰の作業も遅らせることなくガバナンスとコンプライアンスのポリシーを強制します。 | アクセス制御（RBAC など）、エンタープライズベースのアクセスシステム（LDAP など）、データ暗号化、シークレット管理、セキュアなネットワーク接続。 | ビジネスリスクを軽減し、知的財産を保護します。エンドユーザーに信頼を植え付けます。 |
| 7) 組み込みのコンプライアンス | このソリューションは、デリバーされるコードが監査の際にコンプライアンスとセキュリティを満たすことを保証する組み込みのケイパビリティとポリシーを持っています。重要なイベントを追跡・管理し、誰が特定のアクションを実行したか、いつ発生したかにまで遡れます。 | CI パイプラインに組み込まれた自動セキュリティとコンプライアンステスト。コンプライアンス問題に対する自動通知。監査コントロールとポリシーが整っている。 | リスクを軽減し、開発プロセスのより早い段階で欠陥や潜在的な違反を発見します。 |
| 8) 始めやすい | CI を正常にセットアップするために必要なステップは、シンプルで直接的であり、参入障壁が最小限であるべきです。チームが初期インストール、構成、ユーザーオンボーディング、価値の提供までに必要な時間と労力は短いべきです（数週間ではなく数日）。 | オンプレミスと SaaS の両方の実装をサポート。リポジトリへの接続と CI サーバーを迅速に立ち上げる手順をまとめた堅牢なドキュメントを持つ。configuration-as-code をサポートするか、または初期構成のための GUI を提供する。ユーザーをプロビジョニングする Web インターフェイス。 | 価値実現までの時間を短縮。 |
| 9) DevOps ツールとインテグレーション | このソリューションは、プロジェクト管理、ソースコード管理とバージョン管理、アーティファクトリポジトリ、セキュリティスキャン、コンプライアンス管理、継続的デリバリーなどの上流・下流プロセスとの強力なインテグレーションをサポートします。強力な DevOps インテグレーションを持つ CI ソリューションは、ネイティブケイパビリティとインテグレーションのバランスを必要としたり望むユーザーに柔軟性があることを意味します。 | ビルド自動化ツール（Gradle、Maven など）、コード解析ツール、バイナリリポジトリ、CD ツール、IDE、API、サードパーティライブラリ、またはプラグインによる拡張機能との統合。 | 効率を高めます。潜在的な移行に伴うコストや余分な作業を減らします。 |
| 10) 分析 | ボトルネック、制約、その他の改善機会を特定するために、ビルド/テストプロセス全体を通じてパイプラインのパフォーマンスメトリクスとデータを取り込みレポートします。失敗するテスト、コード品質の問題、アプリケーション全体の品質を示すデータの貴重なトレンドを特定します。 | ビルドヘルス、パイプライン可視化、コードカバレッジ、ロギング、デプロイ頻度などのパフォーマンスメトリクス。 | 効率を高め、不要なコストを削減します。 |
| 11) エラスティックなスケーラビリティ | このソリューションは、可能な限り良く理解されたサードパーティのメカニズムを活用してエラスティックスケーリングをサポートします。既存のクラウド固有および仮想環境ベンダー固有のケイパビリティを使ったビルドのスケーラビリティをサポートします。これらは複雑な問題に対する既にデバッグされたコードを表しており、お客様のアーキテクト/オペレーターは選択したインフラ/クラウドプロバイダーで、これらのメカニズムにより精通している可能性が高いためです。 | エフェメラルプロビジョニングをサポート。スケール時に強力な Kubernetes インテグレーションを利用するか、または非 Kubernetes スケーリングオプションをサポート。例えば、AWS では AWS Autoscaling Groups、GCP では GCP scaling、Azure では Azure Autoscale を使用。 | より速くより効率的。オンデマンドリソースでインフラオーバーヘッドを削減。人気のあるクラウドプロバイダーを使用して大規模なワークロードをスケールする柔軟性を提供。 |
| 12) アーティファクトと依存関係の管理 | このソリューションは、ビルド/テストプロセスからの出力とバイナリの管理を容易にします。リポジトリ、アプリケーションパッケージ、コンテナを、それらの依存関係への可視性とともに管理します。 | アーティファクトの表示・ダウンロード。イメージの修正・保存・共有。一般的なパッケージフォーマットとサードパーティ統合の幅広いサポート。オンプレミスまたはクラウドで使用可能。 | CI/CD ワークフローを合理化し、開発を加速します。 |

## GitLab ソリューション

<iframe width="960" height="569" src="https://www.youtube.com/embed/ljth1Q5oJoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## GitLab がどのように市場要件を満たすか

| 市場要件 | GitLab がどう実現するか | GitLab の **ステージ**/カテゴリ | デモ |
| ------ | ------ | ------ | ------ | ----
| ビルド自動化 | `.gitlab-ci.yml` ファイルで CI パイプラインを設計し、CI プロセスを構造化し、GitLab Runner を実行エージェントとしてアプリをビルド。[CI services](https://docs.gitlab.com/ee/ci/services/)、[parent-child pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#parent-child-pipelines)、[multi-project pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)、[merge trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) を含む | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [GitLab Runner](https://docs.gitlab.com/runner/), [Merge Trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) | [![ビルド自動化](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) ビルド・テスト自動化](https://youtu.be/rti7T1yGrlw) |
| テスト自動化 | CI パイプラインでさまざまな自動テストを実行し、本番前にコードを検証/バリデーション。ユニットテスト、インテグレーションテスト、ブラウザパフォーマンステスト、コード品質、コードカバレッジ、ユーザビリティテスト、アクセシビリティテストを含む。  | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html), [Web Performance](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html), [Usability Testing](https://docs.gitlab.com/ee/ci/review_apps/#visual-reviews), [Accessibility Testing](https://docs.gitlab.com/ee/ci/testing/accessibility_testing.html)| [![テスト自動化](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) ビルド・テスト自動化](https://youtu.be/rti7T1yGrlw) |
| パイプライン構成管理 | [AutoDevOps](https://docs.gitlab.com/ee/topics/autodevops/index.html) は事前設定された CI/CD テンプレートに基づいて CI/CD 構成を自動的に設定します。 | [**Verify ステージ**](https://about.gitlab.com/stages-devops-lifecycle/verify/) <br> [**Package ステージ**](https://about.gitlab.com/stages-devops-lifecycle/package/) <br> [**Secure ステージ**](https://about.gitlab.com/stages-devops-lifecycle/secure/) <br> [**Release ステージ**](https://about.gitlab.com/stages-devops-lifecycle/release/) <br> [**Configure ステージ**](https://about.gitlab.com/stages-devops-lifecycle/configure/) <br> [**Monitor ステージ**](https://about.gitlab.com/stages-devops-lifecycle/monitor/) | [![パイプライン構成管理](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) パイプライン構成管理](https://youtu.be/opdLqwz6tcE) |
| 可視性とコラボレーション | ソースコードからコード品質分析とコードカバレッジの詳細を確認。GitLab で[マージリクエスト（MR）](https://docs.gitlab.com/ee/user/project/merge_requests/)と[Issues](https://docs.gitlab.com/ee/user/project/issues/)を通じてコード変更へのフィードバックを直接取得: 1 か所で編集、コメント、レビュー、共有が可能。Review Apps で変更をプレビューし、コミット履歴を確認し、重要なイベントの自動アラートを取得。 | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html) <br> [**Create ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [Code Review](https://about.gitlab.com/stages-devops-lifecycle/create/), [Source Code Management](https://about.gitlab.com/solutions/source-code-management/), [Design Management](https://docs.gitlab.com/ee/user/project/issues/design_management.html) <br> [**Configure ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/configure/) [ChatOps](https://docs.gitlab.com/ee/ci/chatops/) <br> [**Release ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/release/) [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/) | [![可視性とコラボレーション](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) 可視性とコラボレーション](https://youtu.be/z8r3rFQT8xg) |
| プラットフォームと言語のサポート | GitLab はマルチプラットフォーム（Unix、Windows、OSX、その他 Go をサポートする任意のプラットフォーム）でありマルチ言語（Java、PHP、Ruby、C、その他任意の言語）です。 | [すべて](https://about.gitlab.com/stages-devops-lifecycle/) | tbd |
| パイプラインセキュリティ | GitLab CI パイプラインにセキュリティ自動化とスキャンケイパビリティ（SAST、DAST、依存関係スキャン、コンテナスキャン）が組み込まれています。Auto DevOps でもセキュリティスキャンケイパビリティを使用できます。 | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) <br> [**Secure ステージ**](https://about.gitlab.com/stages-devops-lifecycle/secure/) | [![Shifting Security Left - GitLab DevSecOps Overview](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Shifting Security Left - GitLab DevSecOps Overview](https://youtu.be/XnYstHObqlA) |
| 組み込みのコンプライアンス |  コンプライアンステストと監査コントロールが GitLab CI パイプラインに組み込まれています。  |  [**Manage ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/) [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html) <br> [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) <br> [**Secure ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/secure/) [License compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)|  [![Manage Compliance with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) GitLab でコンプライアンスを管理](https://youtu.be/QV2dIocn-hk) |
| 始めやすい | GitLab は、`.gitlab-ci.yml` ファイルによる config-as-code と、構成を事前定義する Auto DevOps、または素早く簡単に始められる Web UI をサポートしています。 | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) | [![始めやすい](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) 始めやすい](https://youtu.be/e0iQD1qgxZg) |
| DevOps ツールとインテグレーション | Slack、Jira、Docker、Kubernetes、GitHub、Bitbucket などの外部リポジトリ、その他の任意の Git ベースリポジトリ。GitLab は外部サービスとビルドツールを接続するためのさまざまな API とサードパーティライブラリ、コミュニティ貢献者向けの GDK と Frontend Foundations もサポートしています。 | [すべて](https://about.gitlab.com/stages-devops-lifecycle/) | tbd |
| 分析 | デリバリー速度を合理化・向上させるため、メトリクスとバリューストリームインサイトでソフトウェアデリバリーライフサイクルを管理・最適化します。パイプラインを可視化し、メモリ使用量、負荷テストの結果、コード複雑度、コードカバレッジ統計などのパフォーマンスメトリクスをレポートします。 | [**Manage ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/) [Insights](https://docs.gitlab.com/ee/user/project/insights/index.html), [Value Stream Management](https://about.gitlab.com/solutions/value-stream-management/) <br> [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html), [Web Performance](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html) | tbd |
| エラスティックなスケーラビリティ | 並列ビルドのワークロードをオーケストレーションし分散します。GitLab Runner で自動スケーリング。 | [**Verify ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [GitLab Runner](https://docs.gitlab.com/runner/) <br> [**Release ステージ**](https://about.gitlab.com/stages-devops-lifecycle/release/) | tbd |
| アーティファクトと依存関係の管理 | GitLab でパッケージ、リポジトリ、コンテナをそれらの依存関係とともに管理。アーティファクトを表示/ダウンロード。イメージを編集、保存、共有。 | [**Package ステージ:**](https://about.gitlab.com/stages-devops-lifecycle/package/) [Package Registry](https://docs.gitlab.com/ee/user/packages/), [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/), [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) | tbd |

## CI 向け GitLab トップ機能

- **マルチプラットフォーム:** Unix、Windows、OSX、その他 Go をサポートする任意のプラットフォームでビルドを実行できます。
- **マルチ言語:** ビルドスクリプトはコマンドラインで駆動され、Java、PHP、Ruby、C、その他の任意の言語で動作します。
- **並列ビルド:** GitLab はビルドを複数のマシンに分散して高速に実行します。
- **自動スケーリング:** VM や Kubernetes Pod を自動的に立ち上げ・停止し、コストを最小化しながらビルドが即座に処理されるようにします。
- **リアルタイムロギング:** マージリクエスト内のリンクから、動的に更新される現在のビルドログに移動できます。
- **バージョン管理されたテスト:** テストを含む `.gitlab-ci.yml` ファイルにより、開発者が変更を貢献でき、各ブランチが必要なテストを得られるようにします。
- **柔軟なパイプライン:** ステージごとに複数のジョブを定義でき、他のパイプラインをトリガーすることもできます。
- **ビルドアーティファクト:** バイナリやその他のビルドアーティファクトを GitLab にアップロード。簡単に閲覧・ダウンロードできます。
- **ローカルでテスト:** `gitlab-runner exec` を使ってローカルでテストを再現できます。
- **Docker サポート:** カスタム Docker イメージを使い、テストの一部としてサービスを立ち上げ、新しい Docker イメージをビルドし、Kubernetes 上で実行できます。
- **Container Registry:** コンテナイメージを保存・共有・利用するための組み込みコンテナレジストリ。
- *より魅力的な機能の構築を続ける中で、このリストに追加していきます！*

## GitLab トップ 3 差別化要因

| 差別化要因 |  バリュー  |  プルーフポイント | デモ |
|----------|-------------|------|----|
| 1) 単一アプリケーションでリーディングな SCM、コードレビュー、CI |  GitLab で、実証されたエンタープライズスケールでコードレビューを合理化しコラボレーションを増加でき、開発ワークフローを管理しやすくし、複雑な DevOps ツールチェーンでツール間で必要なコンテキストスイッチを最小化できます。市場の変化に迅速に対応する能力で、ソフトウェアをより速くリリースし、競合を凌駕します。 | Forrester は GitLab を [2017 Continuous Integration Tools のリーダー](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/)に選出。Alteryx は GitLab を使ってコードレビュー、ソースコントロール、CI、CD を[すべて統合](https://about.gitlab.com/customers/alteryx/)。 | [![単一アプリケーションでリーディングな SCM と CI](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) 単一アプリケーションでリーディングな SCM、CI、コードレビュー](https://youtu.be/DvuqGA4FhXM) |
| 2) 迅速なイノベーションを独自に実現 |  組織の市場投入速度は、開発チームが個人レベルでどれだけ速く動き、変化に適応できるかに直接影響を受けます。GitLab はチームが品質を犠牲にすることなく、より速くイノベーションでき、中央集権的な場所でクロスチームのコラボレーションを可能にする完全な DevOps プラットフォームを提供します。「ただ動く」強力な機能を組み合わせ、可能な限り手作業を自動化に置き換えることで、SDLC 全体にわたって役割に関係なくチームをまとめます。プロダクトマネージャー、デザイナー、開発者、マネージャー、その間のすべての役割が、SDLC 全体にわたる単一の会話の一部としてより効率的に働き、関与し続けることができます。 | GitLab は 1 日に 160 回以上デプロイし、CNCF の [30 Highest Velocity Open Source Projects](https://about.gitlab.com/blog/2017/07/06/gitlab-top-30-highest-velocity-open-source/) の 1 つです。170 を超える公開レビューと 4.4 の評価を持つ G2 Crowd Leader 2018 に選出され、「ソフトウェア開発プロジェクトを管理するための強力なチームコラボレーション」と評価されています。アクティブな貢献者は 2,900 人以上います。Forrester の [Total Economic Impact (TEI) of GitLab](https://about.gitlab.com/resources/study-forrester-tei-gitlab-ultimate/) 調査では、GitLab を採用するコスト削減とビジネスメリットが詳述されています。 | [![迅速なイノベーションを独自に実現](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) 迅速なイノベーションを独自に実現](https://youtu.be/MLrqJ1sxkjQ) |
| 3) 組み込みのセキュリティとコンプライアンスを「最大限左にシフト」 | すぐに使えるセキュリティ機能と、ポリシーコンプライアンスを促進する監査コントロール付きの自動セキュリティテストを得られます。SDLC のより左にセキュリティテストを移動することで、潜在的な問題をより早く捕捉し、開発者のフィードバックループを短縮します。これは、市場投入までの時間が短縮され、セキュアでコンプライアンスに準拠したコードを提供し、お客様の信頼が増えることを意味します。 | Gartner は[2019 Hype Cycle for Application Security](https://www.gartner.com/en/documents/3953770/hype-cycle-for-application-security-2019) のアプリケーションモニタリングと保護プロファイルで GitLab をベンダーとして言及。GitLab は [2020 Gartner Magic Quadrant for Application Security Testing のニッチプレイヤー象限](https://about.gitlab.com/press/releases/2020-05-11-gitlab-positioned-niche-players-quadrant-2020-gartner-magic-quadrant-application-security-testing/)に位置付けられました。Wag! は GitLab で[組み込みのセキュリティとより速いリリース](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/)を活用し、Glympse は[監査プロセスを容易にし、セキュリティ問題をより速く修正](https://about.gitlab.com/customers/glympse/)しています。 |  [![組み込みのセキュリティとコンプライアンス](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) 組み込みのセキュリティとコンプライアンス](https://youtu.be/Fd5DhebtScg) |

## CI ユースケース メッセージハウス

[メッセージハウス](message-house/)は、GitLab を使った継続的インテグレーションのバリューと差別化要因を記述・議論する構造を提供します。

### GitLab Runner メッセージングとポジショニング

[Runner メッセージハウス](runner-message-house/)は、ジョブを実行して結果を GitLab に送り返すために使用されるオープンソースプロジェクトである [GitLab Runner](https://docs.gitlab.com/runner/) のバリューと差別化要因を記述・議論する構造を提供します。

## カスタマーフェイシングスライド

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRmT3xh0VnNckhZOKRJz1x02tfY90ySaYb48YM55HInYMWa8fmSugK6lknvTChiNWSyYgy4ngK9FK3B/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### ディスカバリー質問

以下のサンプルディスカバリー質問は、ベースラインを提供し、現在 CI に GitLab を使用していない見込み客やお客様と話す際に機会を発掘するのに役立つよう作られています。質問のより完全なリストを参照したり、フィードバックを提供したり、提案をコメントしたい場合は[GitLab の CI ディスカバリー質問](https://docs.google.com/document/d/12NJZZr4A_CQWlODNc2JMWc1Gqtt2_uelPYLdT-VAm-M/edit?usp=sharing)を参照し、お気軽にご貢献ください！

#### サンプルディスカバリー質問

- CI/CD ツールのスプロールは私たちが目にする最も一般的な問題の 1 つです。さまざまなツールを使用する多くの異なるチームの複雑さをどう管理し、それでも彼らのニーズを満たしていますか？
- 一部のお客様は複雑なパイプラインの管理とインテグレーションのサポートに苦労していると聞いています。これらの領域で皆さんおよび/または皆さんのチームが目にしている難しさは何ですか？チームがどれだけの時間を費やしているか感覚はありますか？
- 当社のお客様の多くは複数の Jenkins 管理者を抱えています。皆さんもそうですか？もしこれらの人々の半分をパイプライン管理以外のことに自由に使えるとしたら、組織にとってどんな意味がありますか？
- 現在の CI ソリューションのユーザビリティとインターフェイスにチームはどれだけ満足していますか？
- 既に他のニーズで GitLab を使用しているので、CI を単一のソリューションに標準化する議論はありましたか？
- 現在 CI を内部でどのようにサポートしていますか？ガイダンス、ベストプラクティス、問題の修正のために専任チームや社内専門家が必要ですか？
- CI ツールの修正や保守のために日々の業務や計画された作業がどれくらいの頻度で中断されていますか？
- ソースコードとは別に Jenkins 環境を管理することによる遅延のせいで失われている生産性はどれくらいですか？
- チームはパイプラインジョブを「子守」するのにどれくらい時間を費やしていますか？
- 組織は短期と長期のどちらで CI/CD の改善に投資していますか？明確に定義された戦略やタイムラインはありますか？
  - チームにこのイニシアチブをサポートまたは促進する期待はありますか？
  - 例えば今後 12 か月以内に追加のチームをオンボーディングする予定はありますか？
- スケールでビルド/テストを自動化する際にチームが直面する障害やハードルはどのようなものですか？スケールするにつれてベロシティにどう影響していますか？
- 開発者が新しいパイプラインを作成したり、既存のパイプラインにジョブを追加したい場合のワークフローは何ですか？それは開発者が「実際の作業」から離れる時間にどれくらいの時間がかかりますか？
- もしチームが標準とベストプラクティスがすべて守られているとの自信を持って 1 時間以内にセルフサービスで動作するパイプラインを得られるとしたら、影響はどうなりますか？
- GitLab CI が皆さんとチームに何ができるかをもっと議論するためのフォローアップコールをスケジュールできますか？

#### 追加ディスカバリー質問

- 既に他のニーズで GitLab を使用しているので、CI を単一のソリューションに標準化する議論はありましたか？
- CI/CD の改善に関する戦略は何ですか？
- CD ソリューションが CI と同じ構成と形式を使用し、アイデアから本番までの製品パイプライン全体への可視性を持つことに価値があるでしょうか？
- 複雑なパイプラインの管理とインテグレーションのサポートで皆さんが抱えている難しさを教えてください。

#### Jenkins 固有のディスカバリー質問

[Jenkins 固有の質問](https://docs.google.com/document/d/1g0ftF3kSQ0_OUpvuM4WUseFUjd_iSsPXQoIqKR7Ledg/edit) を参照してください  *(GitLab 内部のみ)*

### 業界アナリストリレーションズ（IAR）プラン

- IAR ハンドブックページは、[ユースケースをアナリストとの会話に組み込む計画](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions)を反映するよう更新されています。
- 各ユースケースに固有の詳細、および業界アナリストファームとの契約上の機密保持に関しては、エンゲージメントプランは GitLab チームメンバー向けに以下の保護されたドキュメントで利用できます: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=0)。

このユースケースに関する GitLab のケイパビリティについて最新の理解を持つアナリストの一覧については、Slack（#analyst-relations）または[Issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new)を提出して "AR-Analyst-Validation" テンプレートを選択することで Analyst Relations にお問い合わせください。

## 競合比較

DevOps 領域の多くの競合の中で、Jenkins と CircleCI が継続的インテグレーションケイパビリティを提供する最も近い競合です。

## プルーフポイント - お客様の評価

### お客様の声とレビュー

#### Gartner Peer Insights

*Gartner Peer Insights のレビューは、個々のエンドユーザーが自身の体験に基づいて述べた主観的な意見であり、Gartner やその関連会社の見解を表すものではありません。明らかな誤字は修正されています。*

>「私たちはわずか 6 か月ですべての製品をいくつかの「リタイア」VCS から GitLab に移行しました。- CI/CD プロセスの採用も含め - コードを[失う]ことなく - 開発者を不満にすることなく - 莫大なコストもかからずに」
>
> - **アプリケーション開発マネージャー**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1037269)
>
>「最後に、GitLab の最も素晴らしい点は、[GitLab] エコシステムがどれほどよく統合されているかです。VCS から CI、デプロイメントまで、開発のほぼすべてのステップを見事にカバーしています。」
>
> - **ソフトウェアエンジニア**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1038051)
>
>「ソースコード管理（Git）とリリースパイプライン管理 [CI/CD] へのアプローチとして最良のものの 1 つ。[GitLab] は、複雑なトピックであるリリース管理に対し、シンプルでありながら高度にカスタマイズ可能なアプローチを提供します。」
>
> - **システムエンジニア**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1045457)
>
>「すべてのプロジェクトを管理し [CI/CD] を構成する最良のソフトウェアツールです。新しいプロジェクトを始めて、あまり多くのツールを使いたくない人にはぜひ GitLab をお勧めします。GitLab には管理に必要なすべてが揃っています。」
>
> - **Web 開発者**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1063698)
>
>「長年にわたり、私たちは [GitLab の] 継続的デプロイメントとインテグレーションメカニズムを活用して、堅牢で確かなコードベースを構築[し、維持]してきました。」
>
> - **共同創設者/CEO**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1111080)
>
>「継続的インテグレーションと継続的デプロイメントのための最良の[ツール]の 1 つ。」
>
> - **リード - モバイルアプリ**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1117401)
>
>「全体として、GitLab での体験は非常にポジティブで、特に継続的インテグレーションと[継続的デプロイメント]に関する強力な機能を多く提供しています」
>
> - **デベロッパーアナリスト**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1140016)
>
>「[GitLab の] UI はとても簡単で管理しやすく理解できます。組み込みの継続的インテグレーションは最高の[機能]の 1 つです。」
>
> - **テクニカルエヴァンジェリスト**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1092444)
>
>「GitLab はコードのホスティングだけでなく、コードのライフサイクル全体のためのものです。彼らはコードをホストしているので、開発と本番環境へのコード投入のサービスを提供するのは理にかなっています。他のサービスへの統合も非常に簡単です。yaml ファイルから駆動する CI/CD ニーズに応える GitLab-CI を提供してくれます。」
>
> - **テストアナリスト**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/886423)
>
>「GitLab の組み込みの機能である堅牢な CI プラクティスを可能にする、本当に素晴らしいソースコードリポジトリツールセットです。スムーズな CI/CD パイプラインを探しているあらゆるエンタープライズで活用できます。」
>
> - **ソフトウェアエンジニア**, [Gartner Peer Review](https://www.gartner.com/reviews/market/enterprise-agile-planning-tools/vendor/gitlab/product/gitlab/review/view/1009762)

### Gartner Peer Insights 'Voice of the Customer'

[GitLab が ARO 部門で Gartner Peer Insights Customers' Choice に選出](https://www.gartner.com/en/documents/3982008)

> - [Gartner Peer Insights 'Voice of the Customer' Application Release Orchestration 2020](https://www.gartner.com/en/documents/3982008)

### ブログ

#### Jaguar Land Rover

[Jaguar Land Rover](https://about.gitlab.com/blog/2018/07/23/chris-hill-devops-enterprise-summit-talk/)

- **問題:** JLR は **6 週間のフィードバックループ**でスローダウンに苦しんでいた
- **ソリューション:** Premium（CI）
- **結果:** **フィードバックループが 30 分に短縮**。JLR はエンジニアリング環境内で、各ソフトウェアをターゲットや車両に 1 日 50〜70 回デプロイしている。
- **セールスセグメント:** エンタープライズ

#### Ticketmaster

[Ticketmaster](https://about.gitlab.com/blog/2017/06/07/continuous-integration-ticketmaster/)

- **問題:** 長い Jenkins ビルド時間が CI パイプラインを遅くしていた
- **ソリューション:** Premium（CI）
- **結果:** コミットからビルド、テスト、アーティファクト生成まで合計 8 分未満
- **セールスセグメント:** エンタープライズ

### ケーススタディ

#### Goldman Sachs

[Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/)

- **問題** 開発者の効率とソフトウェア品質を高める必要があった
- **ソリューション:** GitLab Premium（CI/CD、SCM）
- **結果:** **2 週間に 1 回のビルドから 1 日 1000 回以上に改善**、つまり開発者あたり 1 日 6 回リリース、ブランチからマージまでの平均サイクルタイムは 30 分に短縮。ワークフローと管理の簡素化。
「ソフトウェア開発プラットフォームのすべての新しい戦略的部分が GitLab に統合されました。GitLab は、開発、ソースコード管理とレビュー、ビルド、テスト、QA、本番デプロイメントの完全なエコシステムとして使用されています。」
- **セールスセグメント:** エンタープライズ

#### Hotjar

[Hotjar](https://about.gitlab.com/customers/hotjar/)

- **問題** Hotjar は Jenkins を置き換えてツールスタック内の複雑さを減らすことを探していた
- **ソリューション:** GitLab Silver（CI/CD）
- **結果:** CI ビルドの時間が **30% 削減**、1 日 2〜15 回のデプロイに改善、デプロイ時間が 50% 節約。
- **セールスセグメント:** SMB

#### CERN

[CERN](https://about.gitlab.com/customers/cern/)

- **問題:** CERN はパイプラインをホストするオープンソースの方法を探していた
- **ソリューション:** GitLab Starter（CI）
- **結果:** ヨーロッパベースの素粒子物理研究所は、GitLab を**月 12,000 人以上のユーザーと 120,000 件以上の CI ジョブ**で使用している
- **セールスセグメント:** エンタープライズ

### クロージングを助けるリファレンス

[Verify のリファレンス可能なお客様の SFDC レポート](https://gitlab.my.salesforce.com/a6l4M000000kDwk) 注: セールスチームメンバーはこのレポートにアクセスできるはずです。アクセスできない場合は、[カスタマーリファレンスチーム](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact)に連絡してサポートを受けてください。

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

この表は、採用が推奨される機能、製品ドキュメントへのリンク、それぞれのサブスクリプション層、および [Service Ping](/handbook/customer-success/csm/service-ping-faq/) メトリクスを示しています。

| 機能                                           | F  | P  | U  | Service Ping メトリクス | メモ |
| ------------------------------------------------------------ | -----| ---- | ---- | --------- | ---- |
| [Auto DevOps を試す](https://docs.gitlab.com/ee/topics/autodevops/#quick-start)  |   x    |   x   |  x    |     instance_auto_devops_enabled and counts.ci_pipeline_config_auto_devops       |    |
| [共有 Runner を有効化](https://docs.gitlab.com/ee/ci/runners/)  |   x    |   x   |   x   |   gitlab_shared_runners_enabled        ||
| [コンテナレジストリ](https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry) をインスタンス全体で有効化  |   x    |  x   |   x   |   container_registry_enabled        |   GitLab.com のコンテナレジストリは [Group レベル](https://docs.gitlab.com/ee/user/packages/container_registry/index.html#control-container-registry-for-your-group)で有効化されています  |
| [インスタンステンプレートリポジトリ](https://docs.gitlab.com/ee/administration/settings/instance_template_repository.html) を構築  |       |   x    |  x     |     counts.template_repositories      |     |
| [カスタムインスタンスレベルのプロジェクトテンプレート](https://docs.gitlab.com/ee/administration/custom_project_templates.html) を作成 |       |   x   |  x    | counts.ci_pipeline_config_repository   |GitLab.com は[グループレベルのプロジェクトテンプレート](https://docs.gitlab.com/ee/user/group/custom_project_templates.html) を活用できます  |
| `.gitlab-ci.yml` ファイルをリポジトリのルートディレクトリに追加    |   x    |    x  |   x   | redis_hll_counters.pipeline_authoring.o_pipeline_authoring_unique_users_committing_ciconfigfile_monthly |     |
| [宣言的 Jenkinsfile を変換](https://docs.gitlab.com/ee/ci/migration/jenkins.html) *(Jenkins 変換のみ)* |    x   |   x   |  x    |     counts.projects_jenkins_active      |     |
| **パイプラインを実行！** CI/CD の例は[こちら](https://docs.gitlab.com/ee/ci/examples/)で確認できます  |   x    |  x    |  x    |     usage_activity_by_stage.verify.ci_pipelines       |    |
| GitLab の [CI 機能インデックス](https://docs.gitlab.com/ee/ci/#gitlab-cicd-features) を活用   |   x    |   x   |   x   |      counts.ci_runners, counts.ci_builds     |     |
|[デプロイをトリガー](https://docs.gitlab.com/ee/ci/environments/)    |   x    |   x   |   x   |  usage_activity_by_stage_monthly.release.deployments         |     |
| [コンプライアンスフレームワークを使用](https://docs.gitlab.com/ee/user/project/settings/#compliance-frameworks) | | x | x | usage_activity_by_stage.manage.projects_with_compliance_framework | |
|[監査イベントを表示](https://docs.gitlab.com/ee/administration/audit_event_reports.html)    |      |   x   |   x   |  compliance_unique_visits.g_compliance_audit_events         |     |
| [バリューストリーム分析を表示](https://docs.gitlab.com/ee/user/group/value_stream_analytics/) | x | x | x | analytics_unique_visits.p_analytics_valuestream| |
| [DevOps 採用を表示](https://docs.gitlab.com/ee/user/group/devops_adoption/) | | | x | analytics_unique_visits.i_analytics_dev_ops_adoption| |
| [プロジェクトを GitLab に移行](https://docs.gitlab.com/ee/user/project/import/) | x | x | x | usage_activity_by_stage.manage.project_imports.total | |
| [外部プロバイダーで認証](https://docs.gitlab.com/ee/administration/auth/) | x | x | x| usage_activity_by_stage.manage.user_auth_by_provider.standard| |

この表には、GitLab の Self-managed とクラウドオファリングに関連する Free/コミュニティ層と有償層が含まれます。

- F = Free
- P = Premium
- U = Ultimate

### プロダクト採用 - ライトハウスメトリクスと CI のリーディング指標

プロダクト採用 - ライトハウスメトリクスとリーディング指標の SSOT ハンドブックページは [Enterprise Data Team Handbook](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/product-adoption-lighthouse-metrics/) で確認できます。

#### 追加のドキュメントリンク

- [GitLab で始める CI/CD 入門](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD を始める](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD 例](https://docs.gitlab.com/ee/ci/examples/)
- [CircleCI から GitLab への移行](https://docs.gitlab.com/ee/ci/migration/circleci.html)
- [Jenkins から GitLab への移行](https://docs.gitlab.com/ee/ci/migration/jenkins.html#migrating-from-jenkins)

### イネーブルメントとトレーニング

以下では、イネーブルメントとトレーニングのビデオやコンテンツへのリンクを提供します。

- [CI/CD で人生をもっと楽に プレゼンテーション](https://docs.google.com/presentation/d/1scYkmV4Xdfj-8iwwpEiLCe0vBfpAdrL5pyA2w1Fgnf0/edit#slide=id.g7193b194b5_0_96)
- [CI/CD 概要動画](https://www.youtube.com/watch?v=wsbSvLyC2Z8)
- [GitLab CI/CD を始める](https://www.youtube.com/watch?v=sIegJaLy2ug&feature=youtu.be)
- [CS Skills Exchange: CI Deep Dive](https://www.youtube.com/watch?v=ZVUbmVac-m8&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=3&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [Microsoft Azure DevOps と技術的に競合する](https://drive.google.com/open?id=18jwSeeUylGXv8LoEedCMRfBZt9t7QLOYKCHJp-SvdqA) *(GitLab 内部のみ)*
- [Jenkins と競合する](https://drive.google.com/open?id=1IvftLfaQyKn5-n1GLgCZokOoLU-FFzQ8LfJ9cf0FVeg) *(GitLab 内部のみ)*
- [CI Customer Use Case Learning Path](https://gitlab.edcast.com/insights/continuous-integration-customer)

### プロフェッショナルサービスオファー

GitLab は、お客様とパートナー向けに[さまざまなパッケージ済みおよびカスタムサービス](https://about.gitlab.com/services/) を提供しています。以下はこのソリューションに固有のサービスオファーです。追加のサービスについては[完全なサービスカタログ](https://about.gitlab.com/services/catalog/) を参照してください。

- [GitLab CI Training](https://university.gitlab.com/pages/ci-cd-training/)
- [Jenkins Migration Services](https://about.gitlab.com/services/catalog/)
- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals)

## キーバリュー（ティアごと）

### Premium

**なぜ CI に GitLab Premium を選ぶのか？**
組織全体で CI をスケールし、追加のチームをオンボーディングする際、GitLab Premium はエキスパートサポート、高度な構成、一貫した標準で、任意の数のチーム向けに、価値実現までの道のりを高速化します。

- 安心を得る: 24 時間 365 日のアップタイムサポート、専任のカスタマーサクセスマネージャー（CSM）、アップグレード支援を含むエンタープライズレベルの優先サポートを活用。
- 信頼性とコンプライアンス: [監査ログ](https://docs.gitlab.com/ee/administration/audit_event_reports.html)、[監査ユーザー](https://docs.gitlab.com/ee/administration/auditor_users.html)、[高可用性](https://docs.gitlab.com/ee/administration/reference_architectures/) のサポートを伴う実行可能な[ディザスタリカバリー戦略](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html) の能力を得られます。

**Premium の主要機能:**

- [Multi Project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)- 複数のプロジェクトの CI パイプラインをリンク。
- [Operations dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/index.html#doc-nav)- CI/CD パイプラインの全体的な健全性と組織全体の運用を俯瞰的に把握。
- [Browser Performance Testing](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html)- アプリケーション内のパフォーマンス回帰を検出。
- [CI/CD for external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/)- 既存プロジェクト全体を移動させずに外部リポジトリを接続して GitLab CI/CD のメリットを得られます。この機能は [GitHub](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html)、[Bitbucket Cloud](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/bitbucket_integration.html)、その他の Git ベースリポジトリをサポートします。

### Ultimate

**なぜ CI に GitLab Ultimate を選ぶのか？**
エグゼクティブの可視性、利用状況に関するより深いインサイト/分析、環境を全体にわたってセキュアでコンプライアンスに準拠した状態に保つための追加のケイパビリティで、高度な DevOps 成熟度を実現します。

- 24 時間 365 日のアップタイムサポート、専任のカスタマーサクセスマネージャー（CSM）、アップグレード支援を含むエンタープライズグレードの優先サポートも引き続き Gold/Ultimate に含まれます。
- CI パイプラインにセキュリティとコンプライアンスを組み込む。
- 知的財産を保護し、無料のゲストユーザーへのアクセスを得られます。

**Ultimate の主要機能:**

- [Static Application Security Testing](https://docs.gitlab.com/ee/user/application_security/sast/)- 静的コードを評価して潜在的なセキュリティ問題をチェック。
- [Dynamic Application Security Testing](https://docs.gitlab.com/ee/user/application_security/dast/)- レビューアプリケーションを分析して潜在的なセキュリティ問題を特定。
- [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)- サードパーティの依存関係を評価して潜在的なセキュリティ問題を特定。
- [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)- Docker イメージを分析して潜在的なセキュリティ問題をチェック。
- [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#project-security-dashboard)- プロジェクトのセキュリティステータスを可視化。
- **License Compliance-** プロジェクトに含まれる新しいソフトウェアライセンスの存在を特定し、プロジェクト依存関係を追跡。特定のライセンスの含有を承認または拒否。
- **Compliance Dashboard-** グループ内のすべてのプロジェクトと特定のマージリクエストの承認者の俯瞰ビューを提供することで、グループのマージリクエストアクティビティを確認できる。

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

### 継続的インテグレーション動画

- [CI/CD with GitLab](https://youtu.be/1iXFbchozdY)
- [GitLab for complex CI/CD: Robust, visible pipelines](https://youtu.be/qy8A7Vp_7_8)
- [How do Runners work?](https://youtu.be/IsthhMm64u8)

### 統合デモ動画

- [Migrating from Jenkins to GitLab](https://youtu.be/RlEVGOpYF5Y)
- [Using GitLab CI/CD pipelines with GitHub repositories](https://youtu.be/qgl3F2j-1cI)

### クリックスルー & ライブデモ

- [Live Demo: GitLab CI/CD Deep Dive](https://youtu.be/pBe4t1CD8Fc)

## バイヤーズジャーニー

バイヤーズジャーニーにおける主要ページのインベントリ

| **認知** <br> 課題について学ぶ  |  **検討** <br> ソリューションのアイデアを探す  |  **決定** <br> これは適切なソリューションか|
| ------ | -------- |-------- |
| トピックページ?  | ソリューションページ | プルーフポイント |
| ランディングページ? | ?比較?  | 比較 |
| - その他?            |   |  - プロダクトページ x <br>  - プロダクトページ y <br>  - プロダクトページ z |
