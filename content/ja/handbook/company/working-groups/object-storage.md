---
title: "オブジェクトストレージ ワーキンググループ"
description: "GitLab オブジェクトストレージ ワーキンググループは、現在のオブジェクトストレージソリューションのパフォーマンス、セキュリティ、技術的負債の改善を支援することを目的としています。詳細をご覧ください！"
upstream_path: "/handbook/company/working-groups/object-storage/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ        | 値                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 作成日    | 2021年11月3日                                                                                                                                                          |
| 目標終了日 | 2022年5月31日                                                                                                                                                          |
| Slack           | [#wg_object-storage](https://gitlab.slack.com/messages/wg_object-storage/)（社内からのみアクセス可能）                                                                      |
| Google Doc      | [Object Storage Working Group Meeting Agenda](https://docs.google.com/document/d/1K4zb9taDyj74NlAdKDOGPmuBzkTQFCbae-oJMMUQuQk/edit?usp=sharing)（社内からのみアクセス可能） |

## チャーター

GitLab は3種類のユーザーデータを保存しています: データベースレコード、Git リポジトリ、およびユーザーがアップロードしたファイルです。

ファイルストレージに関するユーザーエクスペリエンスとコントリビューターエクスペリエンスには、大幅な改善の余地があります。

- GitLab の初期セットアップには1つではなく [13のバケット](https://docs.gitlab.com/ee/administration/object_storage.html#storage-specific-configuration)の作成と設定が必要です。
- ファイルストレージを使用する機能では、コントリビューターがローカルストレージとオブジェクトストレージの両方について考える必要があり、摩擦と複雑さが生じます。これにより機能の不具合とセキュリティ上の問題が発生することが多いです。
- ファイルストレージにコントリビュートする際には、Workhorse、Omnibus、および CNG のコードも記述する必要があります。

このワーキンググループは、過去数年にわたって蓄積された技術的負債、すなわち CarrierWave の削除と Go と Ruby の両方でのオブジェクトストレージクライアントの重複をなくすことに取り組みます。

ワーキンググループは、簡略化されたオブジェクトストレージプロセスの設計と新しいソリューションの実装の任務を担っています。

## ビジネス目標

あらゆる種類のアップロードにオブジェクトストレージが利用できるようにすることで、SaaS のスケーラビリティ、信頼性、開発速度を向上させます。

すぐに利用できる[シングルバケット設定](https://gitlab.com/gitlab-org/gitlab/-/issues/292958)を提供することで、セルフマネージドの顧客の機能採用を向上させます。

オブジェクトストレージは GitLab の主要機能であり、すべてのセクションにわたるエンジニアリンググループに影響します。ワーキンググループの成果は、エンジニアが最終ソリューションにコントリビュートしやすくする効果もあります。

## スコープと定義

オブジェクトストレージは GitLab の基本コンポーネントであり、共有・分散型・高可用性（HA）ファイルストレージの基盤実装を提供します。

時間をかけて、私たちはアプリケーション全体にオブジェクトストレージのサポートを構築し、[多数のイテレーション](#company-efforts-on-uploads)で特定の問題を解決してきました。これにより、開発（新機能とバグ修正）からインストールまで、全般的に複雑さが増しています:

- 新規 GitLab インストールでは、各グループの機能が独自のものを必要とするため、1つではなく複数のオブジェクトストレージバケットの作成と設定が必要です。これはインストールエクスペリエンスと新機能の採用に影響を与え、シンプルなソリューションから遠ざかります。
- Cloud Native GitLab のリリースにより NFS 共有ストレージの削除が必要となり、ダイレクトアップロードの開発が行われました。これはマイルストーンごとに複数の種類のアップロードに拡大されましたが、グローバルには有効化されることはありませんでした。
- 今日の GitLab はローカルストレージとオブジェクトストレージの両方をサポートしています。ローカルストレージはシングルボックスインストールまたは NFS でのみ機能しますが、私たちはユーザーに対して[NFS の使用を推奨しておらず](https://docs.gitlab.com/ee/administration/nfs.html)、GitLab.com では使用されていません。
- すべての動作パーツとフローを理解するのは非常に複雑です: CarrierWave、Fog、Golang S3/Azure SDK がすべて使用されており、これはテストも複雑にします。
- Fog と CarrierWave はネイティブ SDK（例: AWS S3 SDK）ほどメンテナンスされていないため、通常は「無料」で利用できる顧客が要求する機能（例: https://gitlab.com/gitlab-org/gitlab/-/issues/242245）をサポートするためにこれらのツールをメンテナンスしたりモンキーパッチしたりする必要が生じています。
- 多くの場合、不必要にオブジェクトストレージファイルをコピーしています（例: https://gitlab.com/gitlab-org/gitlab/-/issues/285597）。大きなファイル（LFS、パッケージなど）のファイナライズが遅くなったり、まったく機能しないことがあります。

### 定義

#### CarrierWave

Ruby アプリケーションからファイルをアップロードするためのシンプルで非常に柔軟な方法を提供する gem です。最初に実装された時点ではシンプルなソリューションでしたが、私たちのユースケースはもはやそれではありません。Workhorse からファイルをアップロードするようになり、ダイレクトアップロードをサポートするために [CarrierWave の内部にパッチを当てる](https://gitlab.com/gitlab-org/gitlab/-/issues/285597#note_452696638)必要がありました。

#### ダイレクトアップロード

Workhorse でファイルアップロードをインターセプトし、コストのかかるアップロード操作をよりコストの低い Workhorse で処理するために開発した技術です。詳細は[アップロード開発ドキュメント](https://docs.gitlab.com/ee/development/uploads/#)をご覧ください。

### キックオフ動画


<div class="relative my-6" style="aspect-ratio: 16 / 9;">
  <iframe src="https://www.youtube.com/embed/X9V_w8hsM8E" title="YouTube video" loading="lazy" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>

</div>


## 終了基準（100%）

このグループの作業を通じて、オブジェクトストレージの実装に対して行うことができる改善を文書化し、十分な情報に基づいた実装提案を行うことが全体的な目標です。具体的には:

- オブジェクトストレージの現状を文書化し、機能垂直および統合パターン別にその使用を分類します（機能間のドリフトが存在することがわかっているため）。
  - [既存のオブジェクトストレージバケットの分類](https://gitlab.com/gitlab-org/gitlab/-/issues/345282)
  - [オブジェクトストレージ実装の現状の記述](https://gitlab.com/gitlab-org/gitlab/-/issues/351213)
- オブジェクトストレージの新しい簡略化されたアーキテクチャを設計することで前進の道筋を示します。そのアーキテクチャを実現するために必要なハイレベルなステップを特定します。
  - [新しいオブジェクトストレージアーキテクチャの要件](https://gitlab.com/gitlab-org/gitlab/-/issues/345256)
  - [提案: 統合 blob ストレージ](https://gitlab.com/gitlab-org/gitlab/-/issues/356035)
  - [オブジェクトストレージ: carrierwave なしでの添付ファイルの保存](https://gitlab.com/gitlab-org/gitlab/-/issues/348959)
- ActiveStorage などの新技術を探索したり、既存コードを改修することで、提案されたアーキテクチャの個々の側面をプロトタイプします。
  - [Workhorse アップロードルーティンの文書化とリファクタリング](https://gitlab.com/gitlab-org/gitlab/-/issues/351657)
  - [POC: シングル認可エンドポイント](https://gitlab.com/gitlab-org/gitlab/-/issues/351650)
  - [POC: ActiveStorage 実験](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79012)
- メンテナンスの複雑さを軽減するために廃止すべき機能と設定を特定します。
  - [バックグラウンドアップロードの廃止](https://gitlab.com/gitlab-org/gitlab/-/issues/26600)
  - [オブジェクトストレージ: バックグラウンドアップロードの削除](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/734)
  - [Pseudonymizer の廃止と削除の評価](https://gitlab.com/gitlab-org/gitlab/-/issues/348400)
  - [Pseudonymizer の廃止と削除](https://gitlab.com/gitlab-org/gitlab/-/issues/219952)

## スコープ外

- 提案されたソリューションの最終決定。
- すべての提案されたソリューションの実装。
- 将来的なオブジェクトストレージ開発の永続的な管理者または監督者になること。

## 成果

このワーキンググループの開始時点では、改善すべき3つの主要な領域がありました: オブジェクトストレージファイルの単一バケットへの統合、コードの複雑さの軽減、ローカルストレージの削除。

しかしながら、ワーキンググループメンバーにとって最大の課題は、現在の実装を理解し、共通言語を話せるようになることであるということがすぐに明らかになりました。

ワーキンググループは製品内のオブジェクトストレージのすべての使用例を収集・分類する取り組みを主導しました。その結果、問題の共通理解を構築し、刷新された[アップロード開発ガイド](https://docs.gitlab.com/ee/development/uploads/)を作成し、Pseudonymizer やバックグラウンドアップロードなどの機能を削除しました。

オブジェクトストレージファイルの単一バケットへの統合とローカルストレージサポートの削除は、ワーキンググループによってコードの複雑さを軽減し製品のインストールとメンテナンスを簡略化するための優れた方法として評価されました。しかしながら、これらのトピックはワーキンググループのスコープに収まらない、より重大な部門横断的な意思決定を必要とします。最初のイテレーションとして、ワーキンググループメンバーは技術的課題に焦点を当て、コードの複雑さを軽減する方法に取り組みました。

このワーキンググループの実行中に[スケーラビリティフレームワークチーム](/handbook/engineering/infrastructure-platforms/team-history#scalability-group-history)が設立されたことで、この取り組みを継続するための完璧なパートナーが誕生しました。Epic [gitlab-com/gl-infra&733](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/733)は現在のロードマップを説明しています。

## 役割と責任

ファンクショナルリードは以下の責任を担います:

- 自分の部門/サブ部門の個々のステークホルダーのニーズを代表します。
- 自分の部門/サブ部門からの特定の提案に関するフィードバックを収集・統合します。
- ワーキンググループからのアウトプット（もしあれば）を伝達し、自分の部門/サブ部門からの質問に回答します。

理想的には、ファンクショナルリードは影響を受けるグループで働く IC（個人貢献者）ですが、上記の方法でグループ、部門、またはサブ部門を代表できる人であれば誰でも歓迎します。

| ワーキンググループの役割 | 担当者                             | ステークホルダー部門 | 役職                                |
| ------------------ | ---------------------------------- | ----------------- | ------------------------------------ |
| エグゼクティブスポンサー  | Marin Jankovski @marin             | Infrastructure    | Director of Infrastructure, Platform |
| ファシリテーター        | Alessio Caiazza @nolith            | Infrastructure    | Staff Backend Engineer               |
| ファンクショナルリード    | Grzegorz Bizon @grzesiek           | Ops, Verify       | Staff Backend Engineer               |
| ファンクショナルリード    | Jason Plum @WarheadsSE             | Distribution      | Staff Backend Engineer               |
| ファンクショナルリード    | Matthias Käppler @mkaeppler        | Memory            | Senior Backend Engineer              |
| ファンクショナルリード    | Łukasz Korbasiewicz @lkorbasiewicz | Support           | Support Engineer                     |
| メンバー             | Vladimir Shushlin @vshushlin       | Release group     | Senior Backend Engineer              |
| メンバー             | Erick Bajao @iamricecake           | Verify            | Senior Backend Engineer              |
| メンバー             | Jaime Martinez @jaime              | Package           | Backend Engineer                     |
| メンバー             | David Fernandez @10io              | Package           | Senior Backend Engineer              |
| メンバー             | Tiger Watson @tigerwnz             | Configure         | Senior Backend Engineer              |
| メンバー             | Vitor Meireles De Sousa @vdesousa  | AppSec            | Senior Application Security Engineer |
| メンバー             | Patrick Bajao @patrickbajao        | Workhorse         | Senior Backend Engineer              |
| メンバー             | Catalin Irimie @cat                | Geo               | Senior Backend Engineer              |
| メンバー             | Sofia Vistas @svistas              | Quality           | Senior Software Engineer in Test     |
| メンバー             | Jacob Vosmaer @jacobvosmaer-gitlab              | Scalability           | Staff Backend Engineer    |

## アップロードに関する会社の取り組み {#company-efforts-on-uploads}

GitLab では[イテレーション](/handbook/values/#iteration)で作業を進めており、ダイレクトアップロードは複数のマイルストーンを経て複数のチームによって段階的に開発されました。

関与するチームとマイルストーンの数を示すために、機能開発から技術的負債とセキュリティ修正に至るオブジェクトストレージ開発のタイムラインを以下に示します:

- **10.4** から **10.5** にかけて、CI/CD チームは NFS ストレージを削除して Cloud Native GitLab をリリースできるようにする方法を考える[プロダクトディスカバリー](https://gitlab.com/gitlab-org/gitlab/-/issues/4184)に取り組みました。
- **10.6** において、CI/CD チームは [Git LFS のダイレクトアップロード](https://gitlab.com/gitlab-org/gitlab/-/issues/3507)を開発しました。
- **10.7** において、plan チームは[オブジェクトストレージサポートを EE から CE に移植](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/40781)しました。
- **10.7** において、CI/CD チームは [Google Cloud Storage のみでのアーティファクトのダイレクトアップロード](https://gitlab.com/gitlab-org/gitlab/-/issues/4183)を実装しました。
- **10.8** および **11.0** において、CI/CD チームは [AWS S3 および互換ストレージへのアーティファクトのダイレクトアップロード](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/44142)を実装しました。
- **11.1** において、plan チームは[ユーザー添付ファイルのダイレクトアップロード](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/44663)を実装しました。
- **12.5** において、delivery チームは[技術的負債](https://gitlab.com/gitlab-org/gitlab/-/issues/22547)に取り組みました。これは[50k リファレンスアーキテクチャのブロッカー](https://gitlab.com/gitlab-org/quality/performance/-/issues/66)であり、[VM の再起動](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/7872)、[LFS アクセス禁止](https://gitlab.com/gitlab-org/gitlab/-/issues/32718)、[新しい pre 環境の問題](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/392)など、GitLab.com インフラに複数の問題を引き起こしていました。
- **12.6** において、P1/S1 セキュリティ問題 - [パストラバーサルによるリモートコード実行](https://gitlab.com/gitlab-org/gitlab/-/issues/36029)を修正しました。修正後、元の Issue の P2/S2 亜種が報告されました:
  - **12.7** および **12.8** において[依存プロキシのパストラバーサル](https://gitlab.com/gitlab-org/gitlab/-/issues/36324)を修正しました。
  - **12.10** において[NPM パッケージのパストラバーサル](https://gitlab.com/gitlab-org/gitlab/-/issues/121735)を修正しました。
  - **13.0** において[Nuget パッケージのパストラバーサル](https://gitlab.com/gitlab-org/gitlab/-/issues/211636)を修正しました。
  - **13.5** において P1/S1 [Git LFS のパストラバーサル](https://gitlab.com/gitlab-org/gitlab/-/issues/255886)を修正しました。
- **12.7** において、P1/S1 セキュリティ問題 - [Workhorse バイパスによりパッケージの情報開示と `/tmp` のファイル開示が発生](https://gitlab.com/gitlab-org/gitlab/-/issues/209080)を修正しました。修正後、同じ攻撃の P1/S1 亜種が報告されました:
  - **12.10** において [Nuget パッケージ](https://gitlab.com/gitlab-org/gitlab/-/issues/213040)と[アーティファクト](https://gitlab.com/gitlab-org/gitlab/-/issues/213139)の2つの Workhorse バイパスを修正しました。
  - 別のセキュリティリリース（まだ **12.10**）が [Nuget パッケージ](https://gitlab.com/gitlab-org/gitlab/-/issues/214636)を完全に修正するために必要でした。
  - **13.2** において [Maven リポジトリの Workhorse バイパス](https://gitlab.com/gitlab-org/gitlab/-/issues/225259)を修正しました。
  - **13.3** において [Conan リポジトリの Workhorse バイパス](https://gitlab.com/gitlab-org/gitlab/-/issues/228841)を修正しました。
- **13.1** において、IC が[統合されたオブジェクトストレージ設定](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/34460)を追加しました。
- **13.2** において、IC がマルチパートアップロードと ETag チェックを改善するために [Workhorse に S3 クライアントを追加](https://gitlab.com/gitlab-org/gitlab-workhorse/-/issues/222)しました。
- **13.3** において、IC が [AWS S3 サーバーサイド暗号化のサポートを追加](https://gitlab.com/gitlab-org/gitlab/-/issues/22200)しました。
- **13.4** において、IC が [Azure Blob ストレージのサポートを追加](https://gitlab.com/gitlab-org/gitlab/-/issues/25877)しました。
- **13.4** から **14.0** にかけて、Release グループが [GitLab Pages New Architecture ブループリント](https://docs.gitlab.com/ee/architecture/blueprints/cloud_native_gitlab_pages/index.html)に従い [GitLab Pages を NFS からオブジェクトストレージに移行](https://gitlab.com/groups/gitlab-org/-/epics/3901)しました。
