---
title: "ユースケース: アーティファクト管理"
upstream_path: "/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/package/"
upstream_sha: "877082e5cd4baeabe3d6e802b3b4b1efdb6573f1"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

#### 連絡先

| Product Marketing | Developer Advocate | Product Management |
| ---- | --- | --- |
| Daniel Hom (@danielhom)  | Itzik Gan-Baruch ( @iganbaruch ) | Tim Rizzi (@trizzi) |

## 市場の視点

## アーティファクト管理

大規模なエンタープライズ組織の管理者として、開発者が Maven、npm、pip などのツールを、必要なすべての依存関係に対するローカルプロキシサーバーに向けられるようにする必要があります。そのサーバーは、リモートリポジトリから依存関係を取得し、アーティファクトをキャッシュし、その依存関係のデータベースを一定間隔でエアギャップシステムにエクスポートできなければなりません。依存関係が最初にダウンロードされる際に、簡単にポリシーを適用できる能力が必要です。それはセキュリティ脆弱性のスキャンであったり、その他の選定基準（許容可能なライセンス、許容可能なパッケージ作成者など）の適用であったりします。

エアギャップの要件は少し過剰かもしれませんが、上記は私が顧客からよく聞く内容です。geo レプリケーション、高可用性、監査といった要件も同じくらい簡単に追加できます。大規模な組織であれば、アーティファクト管理に関する支援が必要です。なぜ大規模な組織なのでしょうか? 小規模な開発チームは、通常、世の中に数多くあるアーティファクト管理ソリューションでうまくやっていけるからです。なぜなら、彼らはおそらく次のとおりだからです。

- Maven Central のようなパブリックリポジトリからのみパッケージを取得している
- 1 つか 2 つのプログラミング言語のプロジェクトしか持っていない
- 開発者が、パッケージをどのように、どこからダウンロードするかを扱う共有設定ファイルを管理できる

大規模な組織の場合:

- おそらく、多数の異なるプログラミング言語のプロジェクトを持っており、その中にはおそらく忘れてしまったものもあります。
- 多数の開発者がいるため、依存関係をどのように、どこからセキュアにダウンロードするかを管理するために必要なさまざまな設定ファイルを管理するのは困難です。
- おそらく、はるかに厳格なコンプライアンス要件があります。
- チームメンバーが世界中に分散している可能性があり、どこからでも高速かつ確実なダウンロード時間が必要です。
- パッケージの読み取りまたは公開のアクセス権を付与したい、複数の関連会社やベンダーがいるかもしれません。
- 誰がパッケージをダウンロードしているか、どのくらいの頻度か、不審なアクティビティがないかを把握する必要があります。（これはおそらくコンプライアンスの下に記述できます）

上記を読んで、アーティファクト管理の問題が大規模で複雑な組織にとって厄介であることが推察できると思います。では、追加のツールにさらにお金を費やして、なぜそれをより困難にするのでしょうか。統合に向かうトレンドは理にかなっています。これが、JFrog や Sonatype のような企業が、ユニバーサルアーティファクトマネージャーから完全な DevOps プラットフォームへと製品を拡大しようと努めてきた理由です。

GitLab は、GitLab Artifact Management の提供によって、お金と時間を節約できます。以下の記事では、アーティファクト管理ツールの要件、GitLab が競合製品とどう比較されるか、そしてベンダーをどのように評価すべきかをご案内します。

## ペルソナ

このユースケースのペルソナは、さまざまなソースからさまざまな形式の依存関係をセキュアに管理するためのツールを必要とする、大規模で複雑な組織に焦点を当てます。

### ユーザーペルソナ

#### 現在

1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟨 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟨 [Simone - Backend Engineer](/handbook/product/personas/#simone-backend-engineer)
1. 🟨 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟨 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. ⬜️ Central IT / System Admins

#### 中期（1〜2 年）

[3 年戦略](https://about.gitlab.com/direction/#3-year-strategy)を実行する中で、私たちの中期（1〜2 年）の目標は、クラウドネイティブ開発チームとプラットフォームチームの間のコラボレーションを可能にする単一のアプリケーションを提供することです。

1. 🟩 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟩 [Allison - Application Ops](/handbook/product/personas/#allison-application-ops)
1. 🟩 [Simone - Backend Engineer](/handbook/product/personas/#simone-backend-engineer)
1. 🟩 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟩 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. 🟨 Ops Teams
1. ⬜️ Central IT / System Admins

#### Software Developer Sacha

[Software developer](/handbook/product/personas/#sasha-software-developer) は、あらゆる種類の開発ツールとプログラミング言語に精通しています。これは、パッケージを管理し、イメージを保存・配布するなど、アプリケーション開発プロセス全体およびソフトウェア開発エコシステム全体を通じて、使いやすさと一貫性を確保するのに役立つ、かけがえのないスキルセットです。

- 開発者は問題解決者であり、批判的思考者であり、学ぶことが大好きです。彼らは計画されたタスクで最もよく働き、その時間の大半を、愛される機能の形で顧客に届けられる価値の創出に費やしたいと考えています。

#### DevOps Engineer Devon

[DevOps Engineer](/handbook/product/personas/) は、自分の組織の SDLC を深く理解しており、インフラ、環境、インテグレーションのサポートを提供します。

- DevOps エンジニアは、あらゆるものを自動化することで、毎日少しずつ日常を楽にしようと努めています。

## 市場要件

| 市場要件                    | 説明 |
|---------                              |-------------|
| 1) Package Registry                   | GitLab Package Registry は、さまざまな一般的なパッケージマネージャー向けのプライベートまたはパブリックレジストリとして機能します。パッケージを公開して共有でき、ダウンストリームプロジェクトの依存関係として簡単に利用できます。|
| 2) Container registry                 | Docker イメージを保存し、配布できる、高度にスケーラブルなアプリケーション。 |
| 3) API                                | 顧客のワークフローをサポートするために、すべての機能の API が必要です。       |
| 4) Storage management                 | 依存関係はすぐに積み重なります。ストレージコストを管理する方法が必要です。          |
| 5) Extensive metadata                 | 正しいものを使用していることを検証するために、依存関係のメタデータが必要です。       |
| 6) Dependency scanning                | アプリケーションを開発・テストしている間に、依存関係のセキュリティ脆弱性を自動的に見つけます。  |
| 7) Dependency firewall                | 外部依存関係からのセキュリティ脆弱性の導入を防止します  |
| 8) Virtual registries                 | 単一の論理 URL を通じてアクセスされる、ローカル、リモート、およびその他の仮想リポジトリのコレクション。これにより、基盤となるリポジトリのアクセス詳細が隠され、ユーザーは単一の周知の URL で作業できます。          |
| 9) High availability                  | 高可用性の製品により、チームの生産性が維持されます                |
| 10) Geo replication                   | セカンダリ Geo サイトに、プライマリ Geo サイトの Docker Registry をミラーリングする Docker Registry をセットアップできます。           |
| 11) Searchable dependencies           | 依存関係を簡単に検索・発見できるべきです。                       |
| 12) Certified dependencies (or images)| 重要な依存関係が破損したり上書きされたりすることを防ぎます。               |

## 導入ガイド

以下のセクションは、CSM が機能の導入をリードするのを支援するためのリソースを提供しますが、GitLab のステージやカテゴリーの導入に関心のある見込み客や顧客にも使用できます。

### Playbook の手順

1. [ディスカバリーの質問](#discovery-questions)を尋ねて、顧客のニーズを特定します。
2. デモ、実証ポイント、価値ポジショニングなどを共有して、より深いディスカバリーを完了します。
3. 導入のロードマップ、タイムライン、変更管理計画に合意し、（必要に応じて）関連するサービスを提供し、（適切に）成功計画を更新します。
4. 顧客とともに導入計画をリードし、チームを支援し、ユースケースの導入を示すエンゲージメントおよび/またはプロダクトアナリティクスのデータを通じて進捗を追跡します。

### 導入の推奨事項

この表は、導入を推奨するユースケース、プロダクトドキュメントへのリンク、ユースケースごとの該当するサブスクリプションティア、およびプロダクトアナリティクスのメトリクスを示しています。

| 機能 / ユースケース                                           | F  | Product Analytics | 備考 |
| ------------------------------------------------------------ | ---| ----------------- | ----  |
| インスタンス全体で [container registry](https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry) を有効化 | x |`container_registry_enabled`        |   Container Registry はデフォルトで有効になっていますが、管理者によって、またはプロジェクトの設定を調整することによってオフにできます。   |
| [プロジェクトにパッケージを公開](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts.projects_with_packages`        |   このメトリクスは、少なくとも 1 つのパッケージを持つプロジェクトの数（全形式）を見ます。組織内の導入のハイレベルな概要を把握するために使用できます。 |
| [プロジェクトにパッケージを公開](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts_monthly.packages`        |   このメトリクスは、毎月公開されるパッケージ（全形式）の総数を測定します。導入が伸びているか縮小しているかを方向性として理解するために使用できます。  |
| [プロジェクトにパッケージを公開](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`redis_hll_counters.user_packages.user_packages_total_unique_counts_monthly`        |   このメトリクスは、特定の月にパッケージを公開したユーザー（全形式）の総数を測定します。  |
| [Deploy Token を使ってパッケージを公開](https://docs.gitlab.com/ee/user/packages/package_registry/#authenticate-with-the-registry) | x |`counts.package_events_i_package_push_package_by_deploy_token`        |   このメトリクスは、Deploy Token を使って公開されたパッケージの月次数を測定します。この重要なメトリクスは、Package Registry の導入が顧客の本番ワークフローに成熟したことを示します。   |
| [Guest としてパッケージを取得](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) | x |`counts.package_events_i_package_pull_package_by_guest`        |   このメトリクスは、Guest ユーザーによって毎月ダウンロードされたパッケージの数を測定します。このメトリクスもより広い導入を示します。複数の異なるチームやプロジェクトがパッケージを利用していることを意味するからです。   |
| [npm パッケージを公開](https://docs.gitlab.com/ee/user/packages/npm_registry/#publish-an-npm-package) | x |`redis_hll_counters.user_packages.i_package_npm_user_monthly`        |   このメトリクスは、npm パッケージを公開するユーザーの月次数を測定します   |
| [Maven パッケージを公開](https://docs.gitlab.com/ee/user/packages/maven_repository/#publish-a-package) | x |`redis_hll_counters.user_packages.i_package_maven_user_monthly`        |   このメトリクスは、Maven パッケージを公開するユーザーの月次数を測定します   |
| [PyPI パッケージを公開](https://docs.gitlab.com/ee/user/packages/pypi_repository/) | x |`redis_hll_counters.user_packages.i_package_pypi_user_monthly`        |   このメトリクスは、PyPI パッケージを公開するユーザーの月次数を測定します   |
| [Composer パッケージを公開](https://docs.gitlab.com/ee/user/packages/composer_repository/#publish-a-composer-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_composer_user_monthly`        |   このメトリクスは、Composer パッケージを公開するユーザーの月次数を測定します   |
| [NuGet パッケージを公開](https://docs.gitlab.com/ee/user/packages/nuget_repository/#publish-a-nuget-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_nuget_user_monthly`        |   このメトリクスは、NuGet パッケージを公開するユーザーの月次数を測定します   |
| [Generic パッケージを公開](https://docs.gitlab.com/ee/user/packages/generic_packages/) | x |`redis_hll_counters.user_packages.i_package_generic_user_monthly`        |   このメトリクスは、generic パッケージを公開するユーザーの月次数を測定します   |
| [Conan パッケージを公開](https://docs.gitlab.com/ee/user/packages/conan_repository/#publish-a-conan-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_conan_user_monthly`        |   このメトリクスは、Conan パッケージを公開するユーザーの月次数を測定します   |
| [Helm chart を公開](https://docs.gitlab.com/ee/user/packages/helm_repository/#use-cicd-to-publish-a-helm-package) | x |`redis_hll_counters.user_packages.i_package_helm_user_monthly`        |   このメトリクスは、Helm chart を公開するユーザーの月次数を測定します   |

### ディスカバリーの質問

- CI に GitLab を使用していますか?
  - 現在、アプリをコンテナ化していますか?
    - はいの場合、どの container registry を使用していますか?
    - プロジェクトの何パーセントがコンテナをビルドしていますか?
    - container registry で重要な機能はどれですか?
    - カスタマイズしたワークフローや要件はありますか?
    - 現在の container registry でうまくいっている点・いっていない点は何ですか?
  - ライブラリをパッケージ化していますか? する予定はありますか?
    - どの言語を使用していますか?
    - package registry で重要な機能はどれですか?
    - 現在の package registry でうまくいっている点・いっていない点は何ですか?
  - コンテナやパッケージのいずれかへのパブリックアクセスを提供したいですか?

#### 追加のドキュメントリンク

- [CI/CD を使ってパッケージをビルド](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages)
- [CI/CD を使ってイメージをビルド・プッシュ](https://docs.gitlab.com/ee/user/packages/container_registry/#build-and-push-by-using-gitlab-cicd)
- [Dependency Proxy で Docker Hub のレート制限を回避](https://docs.gitlab.com/ee/user/packages/dependency_proxy/#docker-hub-rate-limits-and-the-dependency-proxy)

#### イネーブルメントとトレーニング

- [Package roadmap review - March 2022](https://youtu.be/gsSWEqX4dOA)
- [Helm Chart repository demo](https://youtu.be/B6K373-pAgw)
- [How to host all your packages in a single project](https://youtu.be/ui2nNBwN35c)
- [Fetch packages from npmjs.org when the package is not available in the GitLab NPM Registry](https://youtu.be/Do-5bmgvHOU)
- [Display more robust build data in the Package Registry](https://youtu.be/mo6q7mWmlfA)
- [Publish and share Composer dependencies](https://youtu.be/e_HqOOWuRoI)
- [Control access to the container registry](https://youtu.be/UyGEOLp_4E4)
- [How to remove Docker images using CI/CD (speedrun)](https://youtu.be/jDlFCrH9H7g)
- [Use the GitLab Dependency Proxy to proxy and cache images from DockeHub](https://youtu.be/fNTfL55fh5c)
- [Conan Repository Demo](https://youtu.be/7NYgJWg-w5w)

### 顧客からのよくある質問

1. 私が必要とする形式をサポートしていますか?
1. 外部ソースから依存関係を取得できますか? それらはキャッシュされますか?
1. 既知の脆弱性を持つ依存関係が一切ダウンロードされないように防止できますか?
1. 依存関係を私の組織に対して確実に利用可能にできますか?（マルチリージョン、高可用性、エアギャップ）
1. では、私たちはこれに本当に依存しているのですが、信頼できますか?
1. セキュアですか?
1. 私たちには数テラバイトの依存関係がありますが、それを扱えますか?
1. 私たちには 1 日あたり数百万のダウンロード/アップロードがありますが、それを扱えますか?
1. ログを監査し、パッケージが誰によって/何が/いつ/どのようにアップロードまたはダウンロードされたかを把握する能力も必要です。
1. 私の組織は、新しいバージョンをインストールする前に現在の GitLab インスタンスを破棄します。私のパッケージはバックアップされますか?
1. いったいどうやって、既存のパッケージをベンダー `x` から GitLab に移行するのですか?
1. 移行を超えて、すべてのパイプラインと cookbook をどのように更新するのですか。
1. 私はちょっとうるさい Meseeks なんですが、製品は実際どのくらい可用性がありますか?
1. CI と簡単に統合できますか?
1. ストレージを簡単に管理できますか?
1. リポジトリをプライベートにしつつ、レジストリはパブリックにする必要があるのですが?
1. 私は大規模な組織のセンターオブエクセレンスで働いています。開発者が利用可能なものを把握し、正しい依存関係を選べるように、依存関係に大きなバッジを貼る方法はありますか。
1. dependency confusion や typosquatting 攻撃を回避するのを手伝ってもらえますか?
1. パーミッションの仕組みを教えてもらえますか?
1. パッケージをイミュータブルなオブジェクトにしたいのですが、GitLab はそのように動作しますか?
1. カスタマーサポートはどうですか?
1. 簡単に始められますか?
1. ドキュメントは分かりやすいですか?
1. レジストリがダウンしたら何が起こりますか?
1. GitLab の提供を使っている人はいますか? 気に入っていますか?
1. どのようにタグ付けすべきですか?
1. API はありますか?
1. パッケージとそのビルドデータを表示できますか?
1. 何か問題が発生したときにそれを確認できますか?
1. 名前/バージョン/タイプ/説明/コミット/ビルド/本当に何でもでパッケージを検索できますか
1. アプリを通じてパッケージをアップロードできますか?
1. パッケージがコンプライアンスに準拠していない、または既知の脆弱性を含んでいるとき、アプリは私に警告しますか?
