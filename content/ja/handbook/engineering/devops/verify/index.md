---
title: "Verify"
description: "Verify 開発グループのハンドブックページ。"
upstream_path: "/handbook/engineering/devops/verify/"
upstream_sha: "1065c86ab1ba75adefbb07560d726608885e6d4e"
translated_at: "2026-04-28T14:02:31Z"
translator: claude
stale: false
---

## ビジョン

私たちは、[スマートフィードバックループ](https://about.gitlab.com/direction/ops/#smart-feedback-loop)を提供し、[すべての人のためのオペレーション](https://about.gitlab.com/direction/ops/#operations-for-all)を体現した[包括的な CI プラットフォーム](https://about.gitlab.com/direction/ops/#verify)において[高速で信頼性の高いパイプライン](https://about.gitlab.com/direction/ops/#speedy-reliable-pipelines)を提供することで、グローバルなソフトウェア組織とチームが優れた意思決定を行えるよう支援します。

## テクニカルロードマップ

### FY25 〜 FY26

GitLab CI で引き続き注力する 3 つのコアテーマがあります:

1. スケーラビリティ
1. 可用性
1. 持続可能性とメンテナビリティ

GitLab.com、セルフマネージド、Dedicated のお客様に利益をもたらす改善を推進することを目指しています。

1. [加速された取り組み](https://gitlab.com/gitlab-org/verify-stage/-/issues/508)により、FY25 中に CI データベースの上位 6 テーブルに対する [CI データパーティショニング](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/ci_data_decay/pipeline_partitioning.md)を完了することを目指しています。これは CI だけでなく、gitlab.com 全体に影響する重大な可用性ニーズにも対処するものです。これは Verify 全体のバックエンドエンジニアが協力する横断的な取り組みです。（ETA: Q3）
1. [CI データ保持](https://gitlab.com/gitlab-org/verify-stage/-/issues/440): CI データベーステーブルの継続的な増加に伴い、Verify とインフラチームがディスク使用量の分析に基づいてデータを削除する取り組みを行います。これにはテーブルレコードとインデックスの両方の削除が含まれます。エンジニアリングはまた、セルフマネージドおよび Dedicated のお客様が独自の CI データ保持ポリシーを設定できる機能を実装するためにプロダクトとも協力します。（ETA: Q3 に分析、Q4 〜 FY26-Q1/Q2 に実装）
1. CI データ管理（TBD）: お客様が自身の CI データを管理するための最大の柔軟性を提供するデータ管理ツールを決定します。（例: 古い CI ビルドやディスク使用量を消費するアーティファクトの削除）プロダクトおよび UX と協議して、最もリクエストされているツール・機能セットを把握します。（ETA: FY26-Q3）
1. [CI Minutes / Compute Units サポート](https://gitlab.com/gitlab-org/gitlab/-/issues/490681): GitLab.com での顧客ネームスペースの CI Minutes を復元する必要があるインシデントに対応する際に、Support および SRE チームのためのより良いツールを構築し、Verify と Fulfillment チーム間でドメイン知識を共有します。（ETA: Q4）
1. [パイプライン作成速度の改善](https://gitlab.com/groups/gitlab-org/-/epics/7290): ボトルネックを特定してパイプライン作成速度を向上させるために、ベンチマークとインストルメンテーションに注力します。これは[エラーバジェット](/handbook/engineering/error-budgets/)の改善を推進するために重要です。（ETA: FY26 まで継続的な取り組み）
1. [Cells 1.0 データベースサポート](https://gitlab.com/groups/gitlab-org/-/epics/12323): Q4 までに Verify の依存関係を完了することが目標です。

[プロダクトロードマップ](https://gitlab.com/gitlab-com/Product/-/issues/12911)は FY25 の期待される成果物を概説しています。

#### 3 年ビジョン

1. Verify ステージのテクニカルデットロードマップのイテレーションを継続します。Issue ボードのような SSOT で最高優先度をどのように表現するか？
1. **計画外の作業**を追跡してより可視化し、エンジニアリングのキャパシティやヘッドカウント計画においてこれを考慮するようにします。（例: インシデント対応、ヘルプ依頼 Issue、Slack でのトリアージ）
1. [パイプライン速度の改善](https://gitlab.com/groups/gitlab-org/-/epics/7290) - ベンチマークとインストルメンテーションに注力してきましたが、以下はまだ実施できていません:
   1. [CI ワーカーへの分散トレーシングの実装](https://gitlab.com/groups/gitlab-org/-/epics/11040#note_1568112854)
   1. [CI/CD ビルド速度ワーキンググループ](/handbook/company/working-groups/ci-build-speed/)での更なる作業の優先化
   1. パイプライン速度改善に関連したオブザーバビリティの構築
1. [CI イベント](https://docs.gitlab.com/ee/architecture/blueprints/gitlab_ci_events/) - FY25 では Verify のキャパシティ制約により延期されています。
1. CI のサブジェクトドメインの専門家でないコントリビューターのためのオンボーディング改善 - コードの可読性とアクセシビリティの向上、またはより良いドキュメントとオンボーディング資料が含まれます。

### FY24

Verify パイプラインチームは、FY24 年次目標の成果物に加えて、以下のエンジニアリング主導のイニシアチブに注力しました:

1. [CI データパーティショニング](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/ci_data_decay/pipeline_partitioning.md)
1. パイプライン速度の改善 - パイプラインパフォーマンスの分析を含む
1. [gitlab.com の CI データ保持戦略のレビュー](https://gitlab.com/gitlab-org/verify-stage/-/issues/440)
1. SaaS 可用性に関連するセキュリティ脆弱性と infradev Issue
1. FY24 の機能開発が計画されていないカテゴリの S1/S2 バグのバーンダウン
   1. これには `Continuous Integration` カテゴリも含まれます。このカテゴリは Verify で最大のバグバックログを持っています。「メンテナンス」（新機能開発なし）と見なされる場合があるものの、GitLab CI をパフォーマンス良く信頼性高く維持するためにこの作業は依然として重要です。
   1. [Pipeline Execution](/handbook/engineering/devops/verify/pipeline-execution/) は `Continuous Integration` カテゴリを担当しています。このチームは CI データパーティショニングとパイプライン速度改善の取り組みの DRI でもあります。

### FY23

Verify ステージは GitLab CI の信頼性とスケーラビリティに注力しました。これは gitlab.com の可用性にとって重要でした。データベースパフォーマンス、セキュリティ脆弱性、パフォーマンス改善、および関連するテクニカルデットへの対応が含まれます。
これにより GitLab は安全で、コンプライアンスに準拠し、パフォーマンスを維持でき、[gitlab.com の SLA](/handbook/engineering/monitoring/#gitlabcom-service-availability)を維持できる SaaS 提供を続けることができました。

## ミッション

Verify のエンジニアとして、私たちはお客様を知っています。なぜなら私たち自身がお客様だからです。私たちはプラットフォームをすべての人にとってより良くするために常に努力しています。これを[イテレーション](/handbook/values/#iteration)、[ドッグフーディング](/handbook/values/#dogfooding)、そしてオープンソースコミュニティへの参加を通じて実現します。私たちは革新し、協力し、前提を問い直して優れた結果を導き出します。

私たちは構築するものに対して責任を持ち、安定性と可用性に焦点を当てます。これは、プラットフォームの運用とパフォーマンス特性について深い技術的理解を持ち、将来の成長に対してプロアクティブな視点を持つことで実現します。

## 私たちについて

Verify ステージは 3 つのグループで構成されています:

1. [Verify:Pipeline Authoring](/handbook/engineering/devops/verify/pipeline-authoring/)

1. [Verify:Pipeline Execution](/handbook/engineering/devops/verify/pipeline-execution/)

1. [Verify:CI Platform](/handbook/engineering/devops/verify/ci-platform/)

### Verify:Pipeline Authoring


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/#verifypipeline-authoring" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Verify:Pipeline Execution


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/#verifypipeline-execution" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Verify:CI Platform


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/#verifyci-platform" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Verify エンジニアリングリーダー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/#verify-engineering-leaders" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### ステーブルカウンターパート


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/verify/#stable-counterparts" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 私たちの働き方

### Jobs to be done（JTBD）

[Job to be Done（JTBD）](/handbook/product/ux/jobs-to-be-done/)は、お客様が達成しようとしているジョブという観点からプロダクトとソリューションを見るためのフレームワーク、またはレンズです。

* [Verify:Pipeline Execution JTBD](/handbook/engineering/devops/verify/pipeline-execution/jtbd/)
* [Verify:Pipeline Authoring JTBD](/handbook/engineering/devops/verify/pipeline-authoring/jtbd/)

### Verify での開発者オンボーディング

チームへようこそ！GitLab の新規採用者として、内部異動者として、または CI ドメイン知識を身につけるために私たちの領域の Issue に取り組む方として、コードベース、テックスタック、そして Verify チームでの一般的な開発プロセスに慣れるために、[オンボーディング/シャドーイングバディ](/handbook/company/culture/all-remote/onboarding)が割り当てられます。

このページを出発点として読み、バディと定期的な同期または非同期のやり取りを自由に設定してください。最低でも週次のタッチポイントを設定し、私たちの定期チームシンクに参加して、私たちの働き方についてより深く学ぶことをお勧めします。（定期ミーティングへの招待はエンジニアリングマネージャーに連絡してください）チームメンバーと知り合うためにいくつかのコーヒーチャットをスケジュールしてください。チーム固有の開発者オンボーディング Issue（例: [Pipeline Execution 開発者オンボーディングチェックリスト](https://gitlab.com/gitlab-org/ci-cd/onboarding/-/blob/master/.gitlab/issue_templates/verify-pipeline-execution_developer-onboarding.md)）が割り当てられます。これには完了すべき管理タスク（新チームメンバーとして、該当する場合）と、技術ドキュメント、ミーティングアジェンダ、レコーディングへのリンクが含まれています。

`~onboarding` ラベルが付いた Issue は、CI 機能領域へのオンボーディングを助けるための小さな Issue です。私たちは通常 Kanban で作業するので、[現在のマイルストーンに `~onboarding` Issue がない](https://gitlab.com/groups/gitlab-org/-/boards/1372896?milestone_title=%23started&label_name[]=onboarding)場合は、プロダクトマネージャーおよび/またはエンジニアリングマネージャーに連絡して、オンボーディング期間中に取り組める Issue を確認してください。

2021 年 5 月に、[CI シャドウプログラム](https://gitlab.com/gitlab-com/Product/-/issues/2542)を導入しました。これは他のエンジニアリングチームの既存 GitLab チームメンバーを CI ドメインにオンボーディングし、CI 機能に貢献するための試みとして実施しています。

#### オンボーディングバディ

オンボーディングバディは、新入社員の最初の数ヶ月のオンボーディングがスムーズに進むよう確保するために割り当てられます。オンボーディングバディは、週次チェックインを設定することが推奨されます（Slack DM などの非同期、または定期的なコーヒーチャットなどの同期）。

**マージリクエストのレビュー**

設定や割り当てられたタスクで問題が生じた際に _新規採用者/異動者_ を支援することに加えて、オンボーディングバディがレビューを依頼された MR に _新規採用者/異動者_ を追加のレビュアーとして追加することが推奨されます。理想的には、両者の合意のもと、Verify での業務開始後少なくとも 3 ヶ月経過してから行います。このステップにより、_新規採用者/異動者_ の CI 知識がさらに深まり、CI ドメインの専門知識が Verify のすべてのエンジニア間で共有されます。

[レビュアーメンタープログラム](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program)と同様に、_新規採用者/異動者_ はコードレビューを実施しているかのように MR をレビューします。完了後、オンボーディングバディに MR を戻します。オンボーディングバディもコードレビューを完了し、次のチェックインで _新規採用者/異動者_ にコードレビューに関するフィードバックを提供することが期待されます。理想的には、次のチェックインの場で共有 Google Doc または GitLab Issue にメモを残して、共同作業しやすくします。

### API 開発

私たちの API は 2 つのフォーマット（[REST](https://docs.gitlab.com/ee/api/#rest-api) と [GraphQL](https://docs.gitlab.com/ee/api/#graphql-api)）で存在し、同等のクエリが可能です。
Verify では **`GraphQL` ファースト** であり、デフォルトで `GraphQL` を使用して新しいユーザー向け機能を開発します。
可能な限り、古い `REST` ユーザー向け機能を `GraphQL` サポートにリファクタリングします。
場合によっては、`REST` で機能を維持または新規開発する方が理にかなっていることがあります。
例えば、`REST` はファイル処理が `GraphQL` より優れているため、この機能は `REST` で維持する方が良いかもしれません。
各チームが `REST` を使用する方が適切と判断するタイミングを決定できますが、最終的にはすべてを `GraphQL` にすることが目標です。

### 共有 Issue

Verify チームでは、GitLab のミッション「[誰でも貢献できる](/handbook/company/mission/#mission)」に積極的に取り組んでいます！
グループ全体でこのワークロードのバランスを取るために、[`Verify candidate`](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=Verify+candidate) ラベルを使用しています。
このラベルが付いた Issue はすべて、Verify ステージのどのグループでも取り組む候補として適しています。
これはフロントエンドとバックエンドの Issue の両方に適用されます。
優先順位はプロダクトマネージャーが決定します（例えば、エンジニア自身のグループの成果物が引き続き優先されることを確認）が、エンジニアは[このボード](https://gitlab.com/gitlab-org/gitlab/-/boards/1339417?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Verify%20candidate)から作業を取り上げることが奨励されています。
これによりサイロを取り除き、ワークロードのバランスを取り、破壊的な再配置を防ぐことができます。

利用可能な `Verify candidate` Issue の中での優先順位付けには、[プロダクト優先度](/handbook/product/product-processes/#prioritization)リストの Issue タイプを参照し、Issue に適用されている severity を確認することをお勧めします。

### 共有テクニカルデット

Verify ステージでは、より高速に移動できるようにテクニカルデットを優先することが最重要課題です。2024 年 8 月から、Verify ステージの Pipeline チームは、テクニカルデットの優先順位付けと、最も重要なテクニカルデット作業に関してチームメンバー間の整合性を取るための[ボード](https://gitlab.com/groups/gitlab-org/-/boards/1438885?not%5Blabel_name%5D%5B%5D=group%3A%3Ahosted%20runners&not%5Blabel_name%5D%5B%5D=group%3A%3Arunner&label_name%5B%5D=devops%3A%3Averify&label_name%5B%5D=type%3A%3Amaintenance)を作成しました。各チームのエンジニア DRI は EM と協力して、どの Issue を特定の時期に最も主張すべきかを整合させます。

### Issue ヘルスステータス定義と非同期 Issue 更新

Verify 全体では[透明性](/handbook/values/#transparency)を重視し、[包摂性](/handbook/values/#bias-towards-asynchronous-communication)の価値観に従い、Issue ヘルスステータスを活用して進行中の Issue に定期的な更新を提供することで[効率性](/handbook/values/#write-things-down)を実践しています。Verify ステージの各チームは更新のサイクルと具体的なステータス定義を定めますが、一般的に期待されるのは、以下のヘルスステータスを使用して進行中の Issue への週次更新です:

* On Track（順調）
* Needs Attention（要注意）
* At Risk（リスクあり）

これらの更新は、エンジニアがステータスの詳細を追加する機会であり、なぜ何かが遅れているまたはマイルストーンを逃すかについての正当化を提供することは期待されていません。常に[非難のない問題解決](/handbook/values/#blameless-problem-solving)と[親切さ](/handbook/values/#kindness)を奨励します。

### Verify でのマージリクエスト

Verify ステージでは、チームの協力、イテレーション、お客様の成果の共有パフォーマンス指標として [MR レート](/handbook/product/groups/product-analysis/engineering/metrics/#merge-request-rates-mr-rates)を重視しています。チーム全体が Issue のイテレーティブなスコープに責任を持ちます。これはプロダクト管理がユーザーインサイトに結びついた明確な問題文を作成することから始まります。その後、UX がインタラクション仕様と受け入れ基準を追加し、エンジニアリングチームが検討・評価します。チームは[可能な限り小さなこと](/handbook/values/#iteration)を提供するためにスコープをイテレーティブに扱うことが奨励されています。

MR レートをスループットの指標として考えることで、プロダクト管理はユーザー体験を改善するために分解されたスコープの作成に注力しています。これにより UX とエンジニアリングのチームメイトが同じ問題をよりシンプルな方法で解決することを促し、最終的にチーム全体のスループットを向上させます。

2023 年 4 月から、Verify コードへのコード変更は、Continuous Integration プラットフォーム全体が GitLab の重要な機能であるため、Verify メンテナーの承認が必要になりました。
[承認プロセスの品質を追跡するため](https://gitlab.com/gitlab-org/gitlab/-/issues/411559)
Verify のコードを変更するマージリクエストには、Verify メンテナーが以下のいずれかのラベルを適用するよう求めています:

* `~"verify-review::impacted"` - メンテナーがニアミスのバグ、非効率性、テクニカルデットを特定できたマージリクエスト
* `~"verify-review::not impacted"` - 変更が些細なものであるか、Verify メンテナーが問題を見つけなかったマージリクエスト

#### ラバースタンプが適切な場合

「ラバースタンプ」とは、MR がすでに他のメンテナーから徹底的なレビューを受けており、Verify 固有の変更が最小限または十分に理解されている場合の軽量な承認を指します。これが適切なのは:

* MR がすでにバックエンドメンテナーによって徹底的にレビューされている場合
* CI 関連コードへの変更が最小限で単純な場合
* 変更が CI の安定性、機能性、またはアーキテクチャに大きく影響しない場合

**ラバースタンプの依頼方法:** レビューを依頼する際に明示的に言及してください。例: `@verify-maintainer - please rubberstamp this Verify MR`

これにより、Verify メンテナーはレビューに期待される労力をより適切に理解し、より迅速なレビューに役立てることができます。
メンテナーが、ラバースタンプレベル以上のレビューが必要であると判断する場合があります - これは変更が無条件に通過されることを保証するものではありません。

#### 深いレビューがあまり必要でない領域

以下の領域は通常、Verify メンテナーからの深いアーキテクチャレビューを必要としません:

* **コントローラー** - プレゼンテーション層のロジック
* **プレゼンター** - ビューのフォーマットロジック
* **ビュー** - UI テンプレート
* **ヘルパー** - ビューヘルパーメソッド

これらの領域では、Verify メンテナーの承認は、CI 機能が悪影響を受けていないことの確認に集中できます。深いアーキテクチャレビューは不要です。

### Pipeline Authoring と Pipeline Execution の協力

Pipeline Authoring と Pipeline Execution は密接に関連していますが、ユーザーのパイプラインとのインタラクションサイクルにおける異なる段階を表しています。非常に高レベルでは、この画像は各グループの主な焦点と、どのように協力してより良いパイプライン体験を提供できるかを示しています。

![Verify グループ](/images/product/groups/verify_groups_banner.jpg)

### 非同期作業週

Verify では、四半期の最初の月曜日から始まる[四半期ごとの非同期作業週](https://gitlab.com/gitlab-org/verify-stage/-/issues/412)を実施しています。

注目すべきメリットとして、同期ミーティングの時間が削減され、非同期コミュニケーションファーストの文化と多様性・包括性の価値観に沿ったより深い集中が可能になります。ただし、これはミーティングを一切行わないという意味ではありません。それぞれのミーティング参加者が適宜判断します。例外として: 優先度の高い Issue とイニシアチブ、ソーシャルコール、コーヒーチャットなどが挙げられます。また、他の時間には非同期ファーストをデフォルトにすべきでないという意味でもありません。定期的にスケジュールされた非同期週を設けることで、プロセスが同期ミーティングに依存するようにならないようにします。

## Verify エンジニアリング - 非同期アップデート

### 現在（2022 年以降）

2022 年 6 月以降、[Ops セクションの非同期アップデートプロセス](/handbook/engineering/devops/)に従い、ステージレベルおよびステージ内の各グループについて週次で非同期 Issue アップデートが作成されています。コントリビューションは、Verify ステージのプリンシパル以上のエンジニア、エンジニアリングマネージャー、シニアエンジニアリングマネージャーによって追加されます。

### 2020〜2021 年

隔週で Verify エンジニアリングアップデートニュースレターがオプトインサブスクライバーリストに送付されていました。メールの目的は、Verify ステージの最近のハイライトを共有し、他のチームで何が起きているかをより良く把握し、学習と協力の新たな機会を提供することでした。

誰でもニュースレターページでサインアップまたは以前の Issue を閲覧できます（リンクは現在利用不可）。

ニュースレターの各号は[ニュースレターエピック](https://gitlab.com/groups/gitlab-com/-/epics/1148)にリンクされた個別の Issue を使用して計画されています。コンテンツは通常マネージャーによって提供されますが、誰でもニュースレターのトピックのコントリビューションが奨励されています。

## Verify テクニカルディスカッション

Verify テクニカルディスカッションは、Verify ステージのチームメンバーが毎月主催する Zoom ミーティングです。誰でも招待されていますが、特に Verify ステージメンバーの参加が奨励されています。

ミーティングでは、Verify ステージのロードマップに関連するさまざまな技術的側面について議論します。また、CI ドメインの問題に取り組む際に直面している課題を共有することも奨励されています。

誰でも[アジェンダドキュメント](https://docs.google.com/document/d/1SEydi30hYjqZ5ellZgwcijUesRnWjQVd___h3J9SSKY)にポイントを追加できます。

以下に、Verify テクニカルディスカッションとテクニカルディープダイブのレコーディングへのリンクのテーブルがあります。

### 現在のレコーディングの在庫

Verify テクニカルディスカッションは自動的に録画され、[Google Drive（内部）](https://drive.google.com/drive/folders/1Kk3RAfiOeHyny2OTSjGNVEjcO4Wb60oV)に追加されます。

### YouTube にアップロードされたレコーディング

| 日付       | タイトル                                                          | レコーディング                                 |
|------------|----------------------------------------------------------------|-------------------------------------------|
| 2021-01-21 | テクニカルディスカッション - パイプラインエディタとデータベースストレージ   | [レコーディング](https://youtu.be/KsOR3lIz_4w) |
| 2021-01-07 | テクニカルディスカッション - CI/CD パイプライン DAG の次のイテレーション   | [レコーディング](https://youtu.be/CvYEqSwd-UE) |
| 2020-12-10 | テクニカルディープダイブ - デモ付き GitLab でのオブザーバビリティ       | [レコーディング](https://youtu.be/DVNyH3zQWBo) |
| 2020-11-19 | テクニカルディープダイブ - クラウドネイティブビルドログ機能概要 | [レコーディング](https://youtu.be/Fq1ecmb_zk0) |
| 2020-05-08 | テクニカルディープダイブ - GitLab Compose Kit で Prometheus を使用する | [レコーディング](https://youtu.be/y9NW7A_XJrU) |

## 週次トリアージレポート

各グループのプロダクトマネージャー、エンジニアリングマネージャー、デザイナーは、[週次トリアージレポートの一部として機能提案とバグをトリアージしてスケジュールを立てる](/handbook/engineering/infrastructure-platforms/developer-experience/triage-operations/#group-level-bugs-features-and-deferred-ux)責任があります。プロダクトマネージャーは、マイルストーンまたはバックログに Issue を割り当てることでスケジュールを設定します。バグトリアージでは、エンジニアリングマネージャーとプロダクトマネージャーが協力して、正しい `severity` と `priority` ラベルが適用されていることを確認します。[プロダクトマネージャーが優先順位付けの DRI](/handbook/product-development/how-we-work/issue-triage/#priority) であるため、バグへの初期 `priority` ラベルを検証または適用します。エンジニアリングマネージャーは、トリアージレポートにリストされたバグの `severity` ラベルを追加または更新し、必要に応じてバグの重大性と技術的実現可能性の理解をプロダクト管理に支援する責任があります。

バグ解決の SLO は severity に紐付いていますが、適切な目標解決時間を持ったグループの優先順位を設定するのはプロダクト管理次第です。例えば、`severity::2` レベルのバグの量などの基準により、プロダクトマネージャーは期待される解決時間を反映するために優先度を適宜調整することが適切な場合があります。

### 可用性、セキュリティ、パフォーマンス、バグのトリアージプロセス

Verify ステージでは、[severity SLO チャート](/handbook/product-development/how-we-work/issue-triage/#severity-slos)に従い、新しい可用性、セキュリティ、パフォーマンス Issue を割り当てられた severity の SLO 内で解決することを目指しています。これらのタイプの Issue は最高優先度であり、バグとテクニカルデットがそれに続きます。

可用性とパフォーマンスの Issue（一般的に infradev と呼ばれる）は[Infra/Dev トリアージボード](https://gitlab.com/groups/gitlab-org/-/boards/1193197?label_name[]=gitlab.com&label_name[]=infradev)でもトリアージされます。

## コミュニティコントリビューションのサポート

私たちはオープンソースコミュニティのサポートを信じています。2 つの主な成功指標をサポートすることを目指しています:

1. [コミュニティコントリビューションのマージ済み MR](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=Community%20contribution&label_name[]=devops%3A%3Averify)
1. [MRARR](/handbook/marketing/developer-relations/performance-indicators/#mrarr)

Verify ステージの各チームは、コミュニティが効果的にサポートされ、自由に機能や修正をプロダクトに追加できるようにするために、ほぼ同じプロセスに従っています。コミュニティコントリビューション MR の管理は、コントリビューションの処理、レビュー、マージという 3 つの主要な領域にわたっています。

### プロセス

Verify へのコードコントリビューションは通常、次の 3 種類で行われます:

1. 無料ユーザー、スコープが定められた Issue からのオープンソースコントリビューション
1. 有料ユーザー、スコープが定められていない Issue からのオープンソースコントリビューション
1. 有料ユーザー、スコープが定められていない Issue からの独自コントリビューション

無料ユーザーと有料ユーザー両方からのコントリビューションは同等に重要であり、[GitLab コントリビューションガイドライン](https://about.gitlab.com/community/contribute/)に従います。特にコントリビューションのレビュー段階において、ユーザーと Verify のエンジニアリングチームとの間のこのプロセスをできる限り摩擦のないものにするよう努めています。

### コントリビューションのレビュー

コントリビューションが作成されると、エンジニアリングマネージャーがコミュニティコントリビューターとともに管理・レビューするエンジニアを割り当てます。コントリビューションのレビューは、完了の定義、スタイルガイドライン、その他の開発プラクティスに従います。レビューの DRI として、割り当てられた Verify エンジニアはコミュニティコントリビューターとともに未解決の項目を解決します。その後、MR はマージ前の最終レビューのために関連するドメイン専門知識を持つメンテナーに渡されます。

#### パートナーからのコントリビューション

パートナーは GitLab のエコシステムの重要な部分です。これらのコントリビューションは、コミュニティ MR コントリビューションと同じ[GitLab コントリビューションガイドライン](https://about.gitlab.com/community/contribute/)でレビューされるべきであり、コードベースの Verify 領域での作業のための [Verify コントリビューションガイドライン](https://docs.gitlab.com/ee/development/contributing/verify/)と整合しています。

### コントリビューションのマージ

コードベースのメンテナーが、コントリビューションを Verify プロダクトにマージする DRI となります。

### コミュニティコントリビューションの SLO

**洗練された** Issue については、レビューとマージの優先事項と見なされます。洗練された Issue は `workflow::ready for development`（開発準備完了）状態で、`direction` ラベルが付き、技術提案があるか重みが設定されています。`workflow::ready for development` と `direction` ラベルが付いていない Issue は **洗練されていない**と見なされ、レビューの優先度が低くなり、マージ SLO が長くなります。この 2 種類の Issue の SLO を以下のテーブルに定義します:

| Issue とユーザーの種類 | レビュー SLO の時間枠 | マージ SLO の時間枠 |
| --- | --- | --- |
| 洗練された Issue またはS2・S1 の severity のバグへのすべてのユーザーコントリビューション | 30 日 | 次のリリース（60 日） |
| 洗練されていない Issue またはS3 の severity のバグへの有料ユーザーコントリビューション | 60 日 | 次の 3 リリース以内（約 1 四半期、90 日） |
| 洗練されていない Issue またはS4 の severity のバグへの無料ユーザーコントリビューション | 90 日 | 次の 3 リリース以降（1 四半期以上、120 日超） |

コミュニティコントリビューションの流入がチームエンジニアを圧倒し、計画された Issue への取り組みに影響しないよう、レビュー担当エンジニアあたり WIP 制限 5 件の割り当て済みコミュニティコントリビューション MR があります。これにより、単一のエンジニアが行うコンテキスト切り替えの量を制限し、レビューに圧倒されるのを防ぎます。

## 緊急優先事項の管理

エスカレーションや優先度の高いタスクが発生した場合、できる限り迅速にタスクを完了できるよう[フォローザサン（follow-the-sun）ローテーション](https://www.lucidchart.com/blog/follow-the-sun-model)を採用します。これらの緊急タスクの例には（これに限らず）: 重要な顧客修正、重大なセキュリティ Issue、または深刻なインシデントに関連する是正措置が含まれます。この緊急性のレベルはチームリーダーシップ（エンジニアリングマネージャーとプロダクトマネージャーなど）によって確認される必要があります。フォローザサンローテーションでは、エンジニアが勤務時間内にそのタスクに集中し、次のエンジニアがオンラインになったら引き継ぎます。エンジニアは必要に応じて互いの作業の引き継ぎを調整します（例えば、コントリビューターとレビュアーとしてともに MR を共同作業する場合など）。この取り組みはまた、Verify ステージグループ全体のエンジニアの協力を伴うステージをまたいだ取り組みになる可能性があります。

GitLab の価値観の一部として、[従業員が少ない地域の人々に対して包括的かつ公平であること](/handbook/values/#inclusive-and-fair-policy-to-regions-with-fewer-employees)を目指しています。その結果、通常の業務時間外に継続的に作業することは期待されていません。特定の地域（APAC など）で利用可能な人数が限られている場合は、Verify ステージ以外にエスカレーションして緊急取り組みへの集中を維持することを検討すべきです。エンジニアや他の SME に連絡し、マネージャーがこのエスカレーションパスを支援するようにしてください。

## 共通リンク

### Slack チャンネル

* Verify [#s_verify](https://gitlab.slack.com/archives/C0SFP840G)
  * Verify:Pipeline Execution [#g_pipeline-execution](https://gitlab.slack.com/archives/CPCJ8CCCX)
  * Verify:Pipeline Authoring [#g_pipeline-authoring](https://gitlab.slack.com/archives/C019R5JD44E)
  * Verify:Pipeline Security [#g_pipeline-security](https://gitlab.slack.com/archives/CPANF553J)
* Verify エンジニアリング管理 [#s_verify-em](https://gitlab.slack.com/archives/C014UTH4W02)
* Verify フロントエンドエンジニアリング [#s_verify_fe](https://gitlab.slack.com/archives/CUYH1MP0Q)
* CI/CD UX [#ux_ci-cd](https://gitlab.slack.com/archives/CL9STLJ06)
