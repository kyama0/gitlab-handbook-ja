---
title: "ユースケース: アーティファクト管理"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/package/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-08T22:55:54+00:00"
---

#### 連絡先

| Product Marketing | Developer Advocate | Product Management |
| ---- | --- | --- |
| Daniel Hom (@danielhom)  | Itzik Gan-Baruch ( @iganbaruch ) | Tim Rizzi (@trizzi) |

## 市場の視点

## アーティファクト管理

大規模なエンタープライズ組織の管理者として、開発者が必要なすべての依存関係について、Maven、npm、pip のようなツールをローカルプロキシサーバーに向けられるようにする必要があります。サーバーは、リモートリポジトリから依存関係をフェッチし、アーティファクトをキャッシュし、定期的にエアギャップシステムへ依存関係のデータベースをエクスポートできなければなりません。依存関係が最初にダウンロードされるときに、セキュリティ脆弱性のスキャンや何らかの他の選択基準(許容ライセンス、許容パッケージ作者など)を適用するなど、ポリシーを容易に適用する機能が必要です。

エアギャップ要件は少しオーバーかもしれませんが、上記は通常顧客から聞かれる内容です。地理レプリケーション、高可用性、監査などの要件を簡単に追加することもできます。大規模な組織では、アーティファクト管理に関する支援が必要です。なぜ大規模な組織なのか?それは、小規模な開発チームは通常、世に出回っている多種多様なアーティファクト管理ソリューションで対応できるからです。なぜなら彼らは:

- Maven Central のような公開リポジトリからのみパッケージをプルする
- 1 つか 2 つのプログラミング言語のプロジェクトしかない
- 開発者が、パッケージのダウンロード方法と場所を扱う共有設定ファイルを管理できる

大規模な組織では:

- 多くの異なるプログラミング言語のプロジェクトを持っており、おそらく忘れているものもあるでしょう。
- 多くの開発者がいるため、依存関係のダウンロード方法と場所を安全に管理するために必要な様々な設定ファイルを管理するのが難しいです。
- コンプライアンス要件がはるかに厳しい可能性があります。
- 世界中にチームメンバーが分散している可能性があり、どこからでも高速で信頼できるダウンロード時間が必要です。
- パッケージの読み取りや公開のアクセス権を与えたい関連会社やベンダーが複数ある可能性があります。
- 誰がパッケージをダウンロードしているか、どれくらいの頻度で、不審な活動があるかを把握する必要があります。(これはコンプライアンスの下に記載されている可能性があります)

上記を読むと、大規模で複雑な組織にとってアーティファクト管理の問題が困難であることがわかるでしょう。それでは、追加のツールにさらにお金を費やして難しくする必要はありません。統合に向かうトレンドは理にかなっています。これは、JFrog や Sonatype のような企業が、ユニバーサルアーティファクトマネージャーから完全な DevOps プラットフォームへと製品を拡大しようと努力している理由です。

GitLab は、GitLab アーティファクト管理機能でお金と時間を節約できます。以下の記事では、アーティファクト管理ツールの要件、GitLab が競合と比べてどう異なるか、ベンダーをどのように評価すべきかについて説明します。

## ペルソナ

このユースケースのペルソナは、多種多様なフォーマットの依存関係を多数の異なるソースから安全に管理するためのツールが必要な、大規模で複雑な組織にフォーカスします。

### ユーザーペルソナ

#### 現在

1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟨 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟨 [Simone - Software Engineer in Test](/handbook/product/personas/#simone-software-engineer-in-test)
1. 🟨 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟨 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. ⬜️ Central IT / System Admins

#### 中期(1〜2年)

[3 年戦略](https://about.gitlab.com/direction/#3-year-strategy)を実行する中で、私たちの中期(1〜2 年)の目標は、クラウドネイティブ開発チームとプラットフォームチーム間のコラボレーションを可能にする単一のアプリケーションを提供することです。

1. 🟩 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟩 [Allison - Application Ops](/handbook/product/personas/#allison-application-ops)
1. 🟩 [Simone - Software Engineer in Test](/handbook/product/personas/#simone-software-engineer-in-test)
1. 🟩 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟩 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. 🟨 Ops チーム
1. ⬜️ Central IT / System Admins

#### Software Developer Sacha

[ソフトウェア開発者](/handbook/product/personas/#sasha-software-developer)は、あらゆる種類の開発ツールとプログラミング言語に専門性を持っています。これは、パッケージの管理、イメージの保存と配布などを行いながら、アプリケーション開発プロセス全体とソフトウェア開発エコシステム全体での使いやすさと一貫性を確保するための、貴重なスキルセットです。

- 開発者は、問題解決者、批判的思考者であり、学ぶことを愛しています。彼らは計画されたタスクで最もよく働き、時間の大半を、愛されるべき機能の形で顧客に届けられる価値を創造することに費やしたいと考えています。

#### DevOps Engineer Devon

[DevOps Engineer](/handbook/product/personas/) は、彼らの組織の SDLC を深く理解しており、インフラ、環境、統合のサポートを提供します。

- DevOps エンジニアは、すべてを自動化することによって、毎日の生活を少しずつ楽にしようと努めています。

## 市場要件

| 市場要件                              | 説明 |
|---------                              |-------------|
| 1) パッケージレジストリ                | GitLab Package Registry は、様々な一般的なパッケージマネージャーのプライベートまたはパブリックレジストリとして機能します。下流のプロジェクトで依存関係として簡単に利用できるパッケージを公開・共有できます。|
| 2) コンテナレジストリ                  | Docker イメージを保存して配布できるようにする、高度にスケーラブルなアプリケーション。 |
| 3) API                                 | 顧客のワークフローをサポートするためには、すべての機能に対する API が必要です。       |
| 4) ストレージ管理                      | 依存関係はすぐに積み重なります。ストレージコストを管理する方法が必要です。          |
| 5) 豊富なメタデータ                    | 適切な依存関係を使用していることを検証するために、依存関係のメタデータが必要です。       |
| 6) 依存関係スキャン                    | アプリケーションの開発・テスト中に、依存関係内のセキュリティ脆弱性を自動的に発見します。  |
| 7) 依存関係ファイアウォール            | 外部依存関係からのセキュリティ脆弱性の導入を防止します  |
| 8) 仮想レジストリ                      | 単一の論理 URL を通じてアクセスされるローカル、リモート、その他の仮想リポジトリのコレクション。これにより、基盤となるリポジトリのアクセス詳細が隠され、ユーザーは単一のよく知られた URL で作業できます。          |
| 9) 高可用性                            | 高可用な製品により、チームの生産性が維持されます                |
| 10) 地理レプリケーション               | プライマリ Geo サイトのレジストリをミラーリングする Docker レジストリをセカンダリ Geo サイトにセットアップできます。           |
| 11) 検索可能な依存関係                 | 依存関係の検索と発見が容易であるべきです。                       |
| 12) 認証済みの依存関係(またはイメージ) | 重要な依存関係を破損や上書きから保護します。               |

## 採用ガイド

以下のセクションでは、CSM が機能の採用をリードするためのリソースを提供しますが、GitLab のステージとカテゴリの採用に関心のある見込み客や顧客にも使用できます。

### プレイブックステップ

1. [ディスカバリー質問](#discovery-questions) を行い、顧客のニーズを特定します。
2. デモ、プルーフポイント、価値ポジショニングなどを共有しながら、より深いディスカバリーを完了します。
3. 採用ロードマップ、タイムライン、変更管理計画に合意し、関連サービスを(必要に応じて)提供し、(適切に)成功計画を更新します。
4. 顧客とともに採用計画をリードし、ユースケースの採用を示すエンゲージメントや製品分析データを通じてチームを支援し、進捗を追跡します。

### 採用推奨事項

この表は、採用が推奨されるユースケース、製品ドキュメントへのリンク、各ユースケースに対応するサブスクリプション層、製品分析メトリクスを示しています。

| 機能 / ユースケース                                          | F  | 製品分析 | 注記 |
| ------------------------------------------------------------ | ---| ----------------- | ----  |
| インスタンス全体で[コンテナレジストリ](https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry)を有効化 | x |`container_registry_enabled`        |   コンテナレジストリはデフォルトで有効化されていますが、管理者またはプロジェクトの設定の調整によって無効化できます。   |
| [プロジェクトにパッケージを公開する](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts.projects_with_packages`        |   このメトリクスは、少なくとも 1 つのパッケージを持つプロジェクトの数を見ます。(全形式) 組織内での採用について大局的な概要を得るために使用できます。 |
| [プロジェクトにパッケージを公開する](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts_monthly.packages`        |   このメトリクスは、月次で公開されるパッケージの総数(全形式)を測定します。採用が伸びているか縮小しているかを方向性で理解するために使用できます。  |
| [プロジェクトにパッケージを公開する](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`redis_hll_counters.user_packages.user_packages_total_unique_counts_monthly`        |   このメトリクスは、特定の月にパッケージを公開したユーザーの総数(全形式)を測定します。  |
| [Deploy Token を使用したパッケージの公開](https://docs.gitlab.com/ee/user/packages/package_registry/#authenticate-with-the-registry) | x |`counts.package_events_i_package_push_package_by_deploy_token`        |   このメトリクスは、Deploy Token を使用して公開された月次のパッケージ数を測定します。この重要なメトリクスは、Package Registry の採用が顧客の本番ワークフローへと成熟したことを示します。   |
| [Guest としてパッケージをプルする](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) | x |`counts.package_events_i_package_pull_package_by_guest`        |   このメトリクスは、Guest ユーザーによってダウンロードされた月次のパッケージ数を測定します。これも、複数の異なるチームとプロジェクトがパッケージを消費していることを意味するため、より広範な採用を示します。   |
| [npm パッケージを公開する](https://docs.gitlab.com/ee/user/packages/npm_registry/#publish-an-npm-package) | x |`redis_hll_counters.user_packages.i_package_npm_user_monthly`        |   このメトリクスは、npm パッケージを公開する月次のユーザー数を測定します   |
| [Maven パッケージを公開する](https://docs.gitlab.com/ee/user/packages/maven_repository/#publish-a-package) | x |`redis_hll_counters.user_packages.i_package_maven_user_monthly`        |   このメトリクスは、Maven パッケージを公開する月次のユーザー数を測定します   |
| [PyPI パッケージを公開する](https://docs.gitlab.com/ee/user/packages/pypi_repository/) | x |`redis_hll_counters.user_packages.i_package_pypi_user_monthly`        |   このメトリクスは、PyPI パッケージを公開する月次のユーザー数を測定します   |
| [Composer パッケージを公開する](https://docs.gitlab.com/ee/user/packages/composer_repository/#publish-a-composer-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_composer_user_monthly`        |   このメトリクスは、Composer パッケージを公開する月次のユーザー数を測定します   |
| [NuGet パッケージを公開する](https://docs.gitlab.com/ee/user/packages/nuget_repository/#publish-a-nuget-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_nuget_user_monthly`        |   このメトリクスは、NuGet パッケージを公開する月次のユーザー数を測定します   |
| [汎用パッケージを公開する](https://docs.gitlab.com/ee/user/packages/generic_packages/) | x |`redis_hll_counters.user_packages.i_package_generic_user_monthly`        |   このメトリクスは、汎用パッケージを公開する月次のユーザー数を測定します   |
| [Conan パッケージを公開する](https://docs.gitlab.com/ee/user/packages/conan_repository/#publish-a-conan-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_conan_user_monthly`        |   このメトリクスは、Conan パッケージを公開する月次のユーザー数を測定します   |
| [Helm チャートを公開する](https://docs.gitlab.com/ee/user/packages/helm_repository/#use-cicd-to-publish-a-helm-package) | x |`redis_hll_counters.user_packages.i_package_helm_user_monthly`        |   このメトリクスは、Helm チャートを公開する月次のユーザー数を測定します   |

### ディスカバリー質問

- CI に GitLab を使用していますか?
  - 現在アプリをコンテナ化していますか?
    - はいの場合、どのコンテナレジストリを使用していますか?
    - プロジェクトの何パーセントがコンテナをビルドしていますか?
    - コンテナレジストリにおいて重要な機能は何ですか?
    - カスタマイズされたワークフローや要件はありますか?
    - 現在のコンテナレジストリで動作している/動作していない点は何ですか?
  - ライブラリのパッケージ化はしていますか?する予定はありますか?
    - どの言語を使用していますか?
    - パッケージレジストリにおいて重要な機能は何ですか?
    - 現在のパッケージレジストリで動作している/動作していない点は何ですか?
  - コンテナやパッケージのいずれかにパブリックアクセスを提供したいですか?

#### 追加のドキュメンテーションリンク

- [CI/CD を使用してパッケージをビルド](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages)
- [CI/CD を使用してイメージをビルド・プッシュ](https://docs.gitlab.com/ee/user/packages/container_registry/#build-and-push-by-using-gitlab-cicd)
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

### 顧客からよく聞かれる質問

1. 必要なフォーマットをサポートしていますか?
1. 外部ソースから依存関係をプルできますか?キャッシュされますか?
1. 既知の脆弱性を持つ依存関係がダウンロードされるのを防げますか?
1. 私の組織で依存関係を信頼性をもって利用可能にできますか?(マルチリージョン、高可用性、エアギャップ)
1. OK ですが、これに本当に依存しています。本当に信頼できるのですか?
1. セキュアですか?
1. 何テラバイトもの依存関係があります。対応できますか?
1. 1 日数百万件のダウンロード/アップロードがあります。対応できますか?
1. ログを監査して、誰が/何を/いつ/どのようにパッケージをアップロードまたはダウンロードしたかを把握する機能も必要です。
1. 私の組織は、新バージョンをインストールする前に現在の GitLab インスタンスを破棄しています。私のパッケージはバックアップされていますか?
1. ベンダー `x` から GitLab に既存のパッケージをどのように移行すればよいのでしょうか?
1. 移行を超えて、すべてのパイプラインとクックブックをどのように更新するのでしょうか?
1. 私はちょっとうるさい Meseeks ですが、製品の可用性は実際どうですか?
1. CI と簡単に統合できますか?
1. ストレージを簡単に管理できますか?
1. リポジトリをプライベートにしながらレジストリをパブリックにする必要があります?
1. 大規模な組織のセンターオブエクセレンスで働いています。開発者が利用可能なものを知り、適切な依存関係を選択できるよう、依存関係に大きなバッジを付ける方法はありますか?
1. 依存関係の混乱やタイポスクワッティング攻撃を回避するのに役立ちますか?
1. 権限の仕組みを教えてください。
1. パッケージを不変オブジェクトにしたいのですが、GitLab はそのように動作しますか?
1. カスタマーサポートについてはどうですか?
1. 簡単に始められますか?
1. ドキュメントは理解できますか?
1. レジストリがダウンしたらどうなりますか?
1. 誰か GitLab の提供物を使用していますか?彼らは気に入っていますか?
1. どのようにタグ付けすべきですか?
1. API はありますか?
1. パッケージとそのビルドデータを表示できますか?
1. 何か問題が発生したときにそれを確認できますか?
1. 名前/バージョン/タイプ/説明/コミット/ビルド/本当に何でも、パッケージを検索できますか?
1. アプリを通じてパッケージをアップロードできますか?
1. パッケージがコンプライアンスに準拠していなかったり既知の脆弱性が含まれていたりするときにアプリは警告しますか?
