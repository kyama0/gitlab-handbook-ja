---
description: "GitLab がソフトウェアデリバリー自動化ソリューションをどのように実現するか、メッセージングや、マーケティングと営業を支援する主要リソースを含めて解説します。"

title: "DevSecOps ソリューションリソース: 自動化されたソフトウェアデリバリー"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## GitLab の自動化されたソフトウェアデリバリー機能の顧客向け概要をお探しですか？

[Automated Software Delivery](https://about.gitlab.com/solutions/delivery-automation/) を参照してください。

このページは、自動化されたソフトウェアデリバリーに関する Go-to-Market の取り組みの単一の情報源として、GitLab の営業・マーケティング活動の整合をとることを目的としています。

### 連絡先

|     プロダクトマーケティング    |    デベロッパーアドボケイト    |
| ------------------------ | ------------------------- |
| Daniel Hom (@danielhom) / Aathira Nair (@anair5) | Itzik Gan Baruch (@iganbaruch) |

## 背景（2 分で読める）

**自動化されたソフトウェアデリバリー** は、組織がより速くソフトウェアを開発できるようにするものです。チームの生産性を高め、運用効率を引き出し、アプリケーションのモダナイゼーションを加速し、デジタルトランスフォーメーションの価値を解き放ちます。

- GitLab の機能視点で見ると、SCM、CI、CD、GitOps、Auto DevOps、Observability といった DevOps の必須要素が含まれます

その機会は非常に大きいです。[GitLab DevSecOps Survey 2022](https://about.gitlab.com/developer-survey/previous/2022/) によると、

- 85% の組織が 2〜10 種類の DevOps ツールを使用している
- 69% の組織がツールチェーンを統合したいと考えている
- 開発者はかつてないほど多くの時間をツールチェーンの保守や統合に費やしている。約 40% が時間の 1/4〜1/2 をこれらのタスクに費やしていると回答（2021 年比で 2 倍以上）し、33% は時間の少なくとも半分、最大ですべての時間をツールチェーンの統合・保守に費やしている

クラウドトランスフォーメーションとアプリケーションモダナイゼーションは 2022 年の CIO の重要施策です。

- マイクロサービスや一時的なインスタンスの増加に伴い、これらを手作業でセットアップ・構成・破棄することはもはや現実的ではないため、自動化されたソフトウェアデリバリーがクラウドインスタンスの増加を支える鍵となります

## はじめに {#getting-started}

### 誰に会うか／理想的な顧客プロファイル {#who-to-meet}

アプリケーション自動化に関心を持つペルソナは、一般にインフラストラクチャ自動化や継続的デリバリーに関心を持つペルソナとは異なります。アプリケーション自動化への関心は開発・エンジニアリング組織から、インフラ自動化・継続的デリバリーへの関心は組織の運用、システム、インフラ、プラットフォーム、クラウド側から生まれます。

| | エンタープライズ | ミッドマーケット | SMB |
| - | ----------- | -------------- |
| **ユーザーペルソナ** | SCM/CI → 開発者、チームリード、DevOps エンジニア <br> CD → DevOps エンジニア、アプリ運用担当、システム管理者、リリースマネージャー、プラットフォームエンジニア | SCM/CI → 開発者、チームリード、DevOps エンジニア <br> CD → DevOps エンジニア、アプリ運用担当、システム管理者、リリースマネージャー、プラットフォームエンジニア | 様々 |
| **バイヤーペルソナ** | C レベルの CIO / CTO <br> SCM/CI → アプリ開発のマネージャー / ディレクター <br> CD → インフラ／運用のマネージャー / ディレクター | C レベルの CIO / CTO <br> SCM/CI → アプリ開発のマネージャー / ディレクター <br> CD → インフラ／運用のマネージャー / ディレクター | 様々 |
| **技術スタック** | GitHub、Perforce、Jenkins、BitBucket、Subversion、ArgoCD、Harness などを含む | GitHub、Perforce、Jenkins、BitBucket、Bamboo、Subversion、ArgoCD、Harness などを含む。または技術スタックがない、もしくは GitLab / GitHub の Freemium 版 | 技術スタックがない、もしくは GitLab / GitHub の Freemium 版 |
| **インフラ／クラウドプロバイダー／デプロイ先** | AWS、GCP、社内データセンター、Kubernetes | AWS、GCP（または何もない）、Kubernetes | AWS、GCP（または何もない）、Kubernetes |
| **追加基準** | - 自動化が重要施策 <br> - 合併・買収 <br> - CI-CD ソリューションの統合 <br> - 採用増・プロジェクト増 <br> - 新たな CIO、アプリ開発、インフラチームの採用 | - 自動化が重要施策 <br> - 採用増・プロジェクト増 <br> - 新たな CIO、アプリ開発、インフラチームの採用 | - 採用増・プロジェクト増 <br> - 新しいクラウド／技術の採用 |
| **ビジネスドライバー** | - デジタルトランスフォーメーション <br> - クラウドトランスフォーメーション <br> - アプリケーションモダナイゼーション <br> - 自動化されたソフトウェアデリバリー | - クラウドトランスフォーメーション <br> - アプリケーションモダナイゼーション <br> - 自動化されたソフトウェアデリバリー | - クラウドトランスフォーメーション <br> - アプリケーションモダナイゼーション <br> - 自動化されたソフトウェアデリバリー |

### 注目すべきキーワード  {#keywords}

- 手作業
  - 手動ビルド、手動コードレビュー、手動ピアレビュー、手動テスト、手動デプロイ、手動インフラ構成など
- 従業員の不満
  - 繰り返し作業、パイプライン管理に時間がかかりすぎる、パイプラインのセットアップ・構成、インフラのセットアップ・構成、リリース管理など
- スピード／速度の向上
- クラウドネイティブアプリケーション
- Kubernetes とコンテナ
- マルチプラットフォーム／マルチ言語サポート
- クラウドトランスフォーメーション
- アプリケーションモダナイゼーション

### 価値の発見 {#value-discovery}

### ディスカバリー質問 — 現状: 痛みはどこにあるか？

1. **チームの仕事のうちどれくらいが手作業ですか？** 関心の範囲を把握するのに役立ちます。多くのチームは自動化がほとんど、または全くなく、非効率、エラー、従業員の不満が生じています。手作業の主な領域には、ユニットテスト、パフォーマンステスト、コードレビュー、ピアレビュー、ライセンスチェック、アプリケーションイメージの手動転送、手動デプロイ、デプロイ後の手動テストなどがあります。
1. **チームは「本当の仕事」と比べて、パイプラインの構成・修正・保守にどれくらい時間を費やしていますか？** 複雑なパイプラインの管理は本物の問題です。複雑なツールチェーンを持つお客様は、複雑なパイプラインの管理や統合のサポートに苦労しています。これによって、CI/CD の導入と運用が当初の計画より高コストになることがよくあります。
1. **既存ツールセットで現行と最新の両方の技術を管理できていますか？** クラウドや Kubernetes のようなクラウドネイティブ技術への移行には異なる運用方法が必要です。既存ツールセットはこうしたトランスフォーメーションを念頭に作られていない場合が多く、サポートのために多くの脆弱な統合をつなぎ合わせる必要があるかもしれません。
1. **自動化の重要な成功指標を測定できていますか？** Change Lead Time、Deployment Frequency、Mean Time to Resolution、Change Failure Rate といった指標です。これにより、自動化を実現するために組み合わされた各種ツール間で統合性やトレーサビリティが欠如している実態が見えてきます。
1. **自信を持ってデプロイできていますか？** アイデアから本番までパイプライン全体を可視化できていますか？ インフラを構築し、フェーズごとにデプロイし、テストし、エラー時にロールバックする、これらすべてを単一のアプリケーションから実行できますか？

### ディスカバリー質問 — 将来: どこを目指したいか？

1. **自動化の成功とはどのような姿ですか？** SDLC のうちどの部分を完全に自動化したいですか？ これにより、すぐに痛みを感じている領域や、お客様の成長領域を特定できます。
1. **パイプライン保守から解放された時間で、チームは何をしたいですか？** 真の成功とはどのような姿か、リソースを解放することでチームが生み出す生産的な価値がどう向上するかを議論する機会となります。
1. **CI-CD ソリューションがサポートすべき技術はどれだとお考えですか？** 将来の技術採用や変化のドライバーが見えてきます。同じソリューションで様々な技術をサポートする必要があるかもしれません。
1. **どのような成功指標を見せたいですか？** 短期と長期の指標は何ですか？ 我々がすぐに示せる成功領域が見えてきます。
1. **安全で漸進的なデプロイは組織にとってどれほど重要ですか？** ダウンタイムの重要性や、自動化の成功にとって柔軟なデプロイ選択肢がどれほど重要かが明らかになります。

### 共通のペインポイント  {#common-pains}

| 課題（"before scenarios"） | だから何？（"否定的な結果"） |
| ----------------------------- | -------------------------------- |
| 手動プロセス、標準化の欠如 | 非効率でエラーが起きやすいプロセス |
| 手動・反復的なプロセスによる従業員の不満 | 離職、人材確保・定着の困難 |
| 脆弱で複雑なパイプラインは保守が困難 | 専門家・高コストのチームメンバーが必要となり、単一障害点になる |
| 新技術の採用が十分速くない  | 新技術を管理するための新しいツールや専門知識が必要  |
| インフラ構成が十分速くない、または再現可能でない  | 標準化・自動化の欠如により、ダウンタイムやエラーが増加  |
| スケーラブルなレビュー・承認プロセスの欠如  | 高度な技術者が単純作業を行い、不満につながる  |
| 安全なデプロイ選択肢とトレーサビリティの欠如  |  修復時間の長期化、ダウンタイム、顧客評価への影響 |

### 共通のメリット  {#common-benefits}

| 望ましい将来像（"After Scenarios"） | だから何？（"ポジティブなビジネス成果"） |
| ----------------------------- | -------------------------------- |
| テスト、レビュー、パッケージング、リリース、デプロイの自動化と標準化により、価値提供までの時間を短縮  |  自動化により「本当の仕事」に集中でき、リスク低減、従業員満足度の向上  |
| トレーサビリティとデプロイ選択肢の改善により、修復までの平均時間を短縮  |  顧客評価への影響、ダウンタイムを低減し、リテンション向上  |
| クラウドネイティブ技術の採用を加速  | 単一ツールで現行のデプロイ先と並行してクラウドネイティブファースト開発を実現し、柔軟性が向上   |
| 従業員満足度の向上  |  自動化の改善、手動／反復タスクの削減、統合作業の削減により従業員満足度が向上  |

### 必要な機能  {#required-capabilities}

| 必要な機能  | 顧客指標 |
| ----------------------------- | -------------------------------- |
| テスト自動化、パイプライン構成管理  | 自動化により「本当の仕事」に集中でき、リスク低減、従業員満足度の向上  |
| 変更管理とコラボレーション  | 顧客評価への影響、ダウンタイムを低減し、リテンション向上  |
| 安全なデプロイとロールバック  | 単一ツールで現行のデプロイ先と並行してクラウドネイティブファースト開発を実現し、柔軟性が向上  |
| コード品質、ピアレビュー  | 自動化の改善、手動／反復タスクの削減、統合作業の削減により従業員満足度が向上  |

### 顧客の採用と価値

これらのバリューステートメントは、お客様による GitLab の採用度合いを測定するためのものであり、フィールドチーム（特に CSM）が利用拡大に向けた会話を行う際の指針を提供します。

#### CI 採用スコア

| 領域 | 測定方法 | 価値 |
| -- | -- | -- |
| CI 利用率 | 有償ライセンスシート数に対する CI 採用の深さ（割合） | - ビルド速度の向上。手作業を減らすことで開発チームの効率を高めます。<br> - 潜在的なエラーを後で深刻化する前に早期に発見します。<br> - 開発時間を最大化し、生産性を向上させます。手作業の削減。 <br> - フィードバックの高速化と、変更によるビルド失敗のリスク低減。 <br> - チームの柔軟性が増し、採用しやすくなります。 <br> - ビジネスリスクを低減し、知的財産を保護します。エンドユーザーの信頼を醸成します。 |
| Container Registry | Container Registry の有効化  | - コンテナイメージの公開と利用を一元化 <br> - ソフトウェアライフサイクル全体を通じた認証方式・認可モデルの標準化 <br> - サードパーティシステムの認証情報の保管・ローテーションを不要に（GitLab CI で CI Job Token を活用して認証） <br> - クラウドオブジェクトストレージの標準利用により攻撃面を限定（オープンな S3 バケットからの漏洩を回避するなど） <br> - クラウドストレージ利用状況をプロジェクト／グループ単位で可視化・制御（ストレージクォータ、有効期限ポリシー、利用状況レポートなど） |
| テンプレート | インスタンス内に存在するインスタンス全体テンプレートリポジトリの数 | - 再利用しやすいパイプラインテンプレートを通じてベストプラクティスを普及 <br> - テンプレート活用によりインナーソーシングとコラボレーションを促進 <br> - 新規プロジェクトに明確な出発点を提供することでパイプライン成功までの時間を短縮 <br> - 必須レポートやその他重要なパイプラインタスク（テストカバレッジ、Lint、スキャンなど）のコンプライアンスを向上 |
| デプロイ利用率 | 有償ライセンスシート数に対するデプロイ採用の深さ（割合） | - テスト、レビュー、パッケージング、リリース、デプロイの自動化・標準化により価値提供までの時間を短縮 <br> - トレーサビリティとデプロイ選択肢の改善により、修復までの平均時間を短縮 <br> - 単一ツールで現行のデプロイ先と並行してクラウドネイティブファースト開発を実現し、柔軟性が向上 |
| ユーザー単位のデプロイ数（直近 28 日） | ユーザー単位のデプロイ数（直近 28 日） <br> - 直近 28 日のデプロイ数を有償ユーザー数で割ったもの | - テスト、レビュー、パッケージング、リリース、デプロイの自動化・標準化により価値提供までの時間を短縮 <br> - トレーサビリティとデプロイ選択肢の改善により、修復までの平均時間を短縮 <br> - 単一ツールで現行のデプロイ先と並行してクラウドネイティブファースト開発を実現し、柔軟性が向上 |
| Value Stream Analytics | 直近 28 日に VSA ページを訪れたユーザー数 | - VSA は、ビジネスがムダや非効率を特定・対象化し、ワークストリームを最適化することで、可能な限り高速に価値を提供できるよう支援します。 <br> - GitLab の単一プラットフォームアプローチは、単一のプラットフォーム、ワークスペース、データモデルを保証し、エンドツーエンドのソフトウェアデリバリーライフサイクルにおける実用的なインサイトを共有できる環境を作り出します |

## ポジショニングバリュー  {#positioning-value}

### エレベーターピッチ

GitLab はより良いソフトウェアをより速く提供できるようにします。アプリケーションのビルド・テスト・デプロイを自動化することで、チームの生産性と効率を引き出し、ソフトウェア開発の速度を加速します。クラウドネイティブインフラストラクチャの自動プロビジョニングと保守により、デジタルトランスフォーメーションとアプリモダナイゼーションの目標を加速します。さらに GitLab は、お客様が今いる場所から始められ、エンドツーエンドのセキュリティと組み込みの統合機能を備えた柔軟なプラットフォームによって、採用が成熟するにつれてツールと複雑さを削減できます。

### バリュープロポジション（GitLab はどのように実現するか？）

- **GitLab はより良いソフトウェアをより速くお届けします**

> "本番環境のセットアップと手動テストに丸 1 日を費やすのではなく、それらの単純作業が自動化されました。これによりリリースにかかる時間が 24 時間からわずか 10 分に短縮されました。" - [Airbus](https://about.gitlab.com/customers/airbus/)

- **GitLab は DevOps の旅を最も簡単に始められるプラットフォームの一つです**

> "ただ動きました。GitLab のインストール、アップデートで全く問題がなく、本当に簡単に使い始められたのが最大の成功でした。" [MGA]

- **GitLab はあなたの旅の現在地から始められ、採用が成熟するにつれて他のツールを削減できます**

> "Forrester Total Economic Impact 調査によると、お客様は年間少なくとも 3 つのツールを削減できました。" [TEI](https://about.gitlab.com/resources/study-forrester-tei-gitlab-ultimate/)

- **GitLab はクラウドネイティブアプリケーションのトランスフォーメーション（および従来型アプリケーション！）をサポートします**

> "GitLab は Kubernetes とネイティブに統合されており、開発チームは常時保守なしにツールが自動的に動作することを信頼できるので安心です。" - [Hotjar](https://about.gitlab.com/customers/hotjar/)

- **GitLab はインフラを自動化し、様々なクラウドプロバイダー（既存インフラへも）にデプロイできます**

> "私たちの DevOps チームは、Kubernetes からマルチクラウド・マルチティアの複雑なハイブリッドクラウドインフラに至るまで、本番環境用ソリューションを数分でプロビジョニングできます。" - [SURF](https://about.gitlab.com/customers/surf/)

- **GitLab は、変更管理、CI/CD、インフラ自動化を含む完全な自動化ソフトウェアデリバリーを単一アプリケーションで実現し、より高い安定性と高品質なアプリケーションをより速く出荷できるようにします**

> "問題が起きても、GitLab はシンプルな修正を提供します。たとえば、サーバーへのサービスの比率を間違えてデプロイしてしまった場合、履歴を確認し、コミットメッセージを読んで、誰が作成したかを特定し、コミットをロールバックできます。" - [Parimatch](https://about.gitlab.com/customers/parimatch/)

- **GitLab は開発者体験の向上に役立ちます**

> "ハッピーな開発者は単純により良い仕事をするので、開発者の幸福度は重要です。開発者体験を高水準に保つ必要があります。それが価値を速く届けられる唯一の方法だからです。GitLab は……開発者体験の向上に大きな役割を果たしてきました。" - [Moneyfarm](https://about.gitlab.com/customers/moneyfarm/)

### 差別化要因（GitLab が自動化されたソフトウェアデリバリーをどのように優れて提供するか？）

単一アプリケーション、DevOps プラットフォームというナラティブとは別に、GitLab が競合よりも優れている主要領域がいくつかあります。

| 差別化要因 | 説明 |
| -------------- | ----------- |
| **マルチプラットフォーム** | Unix、Windows、OSX、その他 Go をサポートする任意のプラットフォーム上でビルドを実行 |
| **マルチ言語** | Java、PHP、Ruby、C などあらゆる言語でビルドスクリプトが動作 |
| **マルチデプロイ先** | 組み込みシステム、オンプレミスサーバー、Raspberry Pi デバイス、メインフレーム、仮想マシン、Kubernetes クラスター、FaaS、AWS、GCP、Azure、IBM、Oracle といった複数のクラウドにデプロイ可能 |
| **高速なビルド** |  GitLab は複数マシンにビルドを分散して並列実行 |
| **オートスケーリング** | コストを最小化しつつビルドが即座に処理されるよう、VM や Kubernetes ポッドを自動で起動・停止 |
| **バージョン管理されたテスト** | テストを含む .gitlab-ci.yml ファイルにより、開発者が変更を貢献でき、すべてのブランチが必要なテストを得られる |
| **柔軟なパイプライン** | ステージごとに複数のジョブを定義でき、他のパイプラインをトリガーすることも可能 |
| **テスト環境の容易な作成** | Review App により、カスタム Docker イメージの利用、テストの一部としてサービスの起動、新しい Docker イメージのビルド、Kubernetes 上での実行が可能で、UX テスト、DAST、ユーザビリティテストなどに活用 |
| **組み込みの Container Registry** | コンテナイメージを保存・共有・利用できる組み込み Container Registry |
| **分散バージョン管理** | 地理的に分散したチームでも大規模リポジトリのクローン・フェッチ時間を短縮 |
| **製品開発管理** | ソースコードに加え、IP、グラフィックアセット、アニメーション、バイナリなどもバージョン管理 |
| **デプロイとオブザーバビリティの統合** | 本番に投入されるもの（Review App とリリース計画）、本番にデプロイするもの（Feature Flag）、デプロイ対象（Canary などの Progressive Delivery とデプロイ戦略）、デプロイのパフォーマンス監視（ブラウザパフォーマンステスト、パフォーマンス監視／トレース経由）、パフォーマンスに基づくロールバックを、デプロイ後の監視を通じてすべて単一アプリケーションから可視化 |
| **セキュアな Kubernetes クラスターアクセス** | CI/CD ジョブ向けに Kubernetes クラスターとセキュアな接続を確立し、クラスターを露出させずに済む |
| **プッシュ型・プル型デプロイ** | 多くのお客様はプッシュ型デプロイの制御性を依然として好んでおり、GitLab は両方をサポート |

### 競合

自動化されたソフトウェアデリバリーの競合比較において、主要な競合と高レベルでの不足点は以下のとおりです。詳細な比較は [devops-tools](https://about.gitlab.com/why-gitlab/) 比較ページを参照してください。

- [GitHub](https://web.archive.org/web/20240331181506/https://about.gitlab.com/competition/github/) - SCM では強いが、CI/CD 用の GitHub Actions はまだ本番運用に十分でない。GitLab は SCM に GitHub を使うお客様を簡単に統合・移行可能。
- Jenkins - 管理が複雑、脆弱な統合が多く、クラウドネイティブトランスフォーメーションに不向き
- [JFrog](https://about.gitlab.com/why-gitlab/) - CI には強いが、その他の領域は統合が必要、もしくは機能が限定的
- [Circle CI](https://about.gitlab.com/why-gitlab/)
- [Weaveworks Flux CD](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#weaveworks---using-flux-oss-operator) - 主なソリューションは GitOps オペレーターのみで、エンドツーエンドの GitOps フローを実現するには複数の統合が必要

### 反論への対応

| 反論 | 回答 |
| ----------------------------- | -------------------------------- |
| *"既存ツールを置き換える別のツールは要らない"*  | - 我々はお客様の現在地に合わせます。既存ツールをすべて引き剥がして置き換える必要はありません <br> - 既存の Jira、GitHub、Jenkins などのツールセットに、GitLab CI、CD、SCM を補完する形で始められます <br> - 特定の領域（SCM、CI、CD、Security、Compliance など）で価値を見出した後、GitLab の利用を拡大することで、より大きな ROI を実現できます  |
| *"DevOps ライフサイクル全体を 1 社にロックインされたくない"*  | - ツールチェーンの肥大化は現実です。多くのお客様はこれにより DevOps の恩恵を享受できなくなっています <br> - アプリケーションとリソースの統合・管理は、組織がいかに速く動けるかを実際に阻害しています。 <br> - お客様が GitLab とパートナーシップを結ぶ理由は、新製品／サービスの市場投入時間を加速し、効率を改善し、セキュリティ・コンプライアンスリスクを低減するためです。御社の優先事項がこれらの成果とどう一致するか、教えてください。  |
| *"各開発チームが必要なものを決める"*  | - 各チームが決めると、イノベーションと開発のサイロが生まれます。デジタルトランスフォーメーションの効果も大幅に制限されます。 <br> - 各チームはこれらの統合をセットアップ・維持する必要も出てきます。 <br> - これがどう機能しているか教えてください。その結果、いくつのツールにお金を費やしてきましたか？   |

## 各ティアにおける主な価値  {#tier-value}

### Premium での価値

組織が自動化の旅を始め、成長していく中で、GitLab Premium はチームの生産性とコラボレーションを高めるために、より速いコードレビュー、高度な CI/CD、リリース制御、自己管理型の信頼性と専門サポートを提供します。GitLab Premium には、優先サポート、アップグレード支援、テクニカルアカウントマネージャー（対象アカウント）といったエンタープライズレベルの機能が追加されます。

最新かつ完全な Premium の価値は [Why Premium](https://about.gitlab.com/pricing/premium/) を参照してください。主な機能は以下のとおりです（購入後アンケート結果上位順）。

- **より速いコードレビュー** シームレスなコードレビューワークフローでチーム全体の高品質なコードを担保
  - コードレビューにおける[複数承認者](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html) 厳格なコードレビューを行うため、マージ前に最小数のユーザーがマージリクエストを承認するよう設定可能。
  - [Code Owners](https://docs.gitlab.com/ee/user/project/codeowners/) Code Owner をファイルに割り当て、プロジェクトのコードに責任を持つチームメンバーを示します。Code Owner は自動的にマージリクエストの承認者として割り当てられます。
  - [Code Review Analytics](https://docs.gitlab.com/ee/user/analytics/code_review_analytics.html) オープンなマージリクエストがレビュー中である期間を可視化し、コードレビュープロセスのボトルネックを特定。
- **高度な CI/CD** 複雑なパイプラインを構築・保守・デプロイ・監視
  - [CI/CD Pipelines Dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/) ユーザーごとにカスタマイズ可能な単一ダッシュボードで、プロジェクト・グループ横断のパイプライン履歴と現在のステータスを可視化。
  - [マルチプロジェクトパイプライングラフ](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines) プロジェクト間の依存関係を含めて、プロジェクト横断のパイプラインがどのようにつながっているかを可視化。
  - [Merge Trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) パイプラインを並列実行できる Merge Train により、各パイプラインが前のマージ結果に基づいてビルドされ、キューイングと待ち時間を削減。
  - [外部リポジトリ向け CI/CD](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/) GitHub や Bitbucket など外部サービス上のプロジェクトに接続し、GitLab CI/CD パイプラインの力を活用してアプリケーションを簡単にビルド・テスト・デプロイ。
- **リリース制御** チームが高品質かつセキュアなコードを出荷できるよう制御を実装
  - [コードレビュー用の承認ルール](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/rules.html) 承認可能な人と必要な最小承認数を指定し、適切な人がマージリクエストをレビューすることを保証。
  - [必須マージリクエスト承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/) 必要な承認数を義務付け、特定承認者リストを事前定義することで、コードの品質と標準を保証。
  - [マージリクエスト依存関係](https://docs.gitlab.com/ee/user/project/merge_requests/dependencies.html) 同一プロジェクト内・異なるプロジェクト間でマージリクエストがマージされる順序を調整。
  - [Push ルール](https://docs.gitlab.com/ee/user/project/repository/push_rules.html) 会社のポリシーに従わない新しいコードやコミットを拒否。
- **自己管理型の信頼性** 自己管理型デプロイのディザスターリカバリ、高可用性、ロードバランシングを保証
  - [ディザスターリカバリ](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html) 数分で別のデータセンターにフェイルオーバー。
  - [メンテナンスモード](https://docs.gitlab.com/ee/administration/maintenance_mode/index.html) システム管理者が、エンドユーザーへの影響を最小限に抑えつつ、計画されたフェイルオーバーの準備などのメンテナンス作業を実施可能。
  - [Gitaly によるフォールトトレラントな Git ストレージ](https://docs.gitlab.com/ee/administration/gitaly/praefect.html) 自動フェイルオーバー、強整合性、読み取り分散を伴うレプリケーション付き Git ストレージで、フォールトトレランスとパフォーマンスを向上。

### Ultimate での価値

自動化されたソフトウェアデリバリーソリューションの価値の大半は GitLab Premium ティアで提供されます。GitLab Ultimate では、Security、Compliance、Portfolio、Value Stream Management が追加されますが、これらは別のソリューション領域でカバーされています。

最新の Ultimate の価値は [Why Premium](https://about.gitlab.com/pricing/ultimate/) を参照してください。

## リソース {#resources}

### 関連ページ  {#resource-page}

- 継続的インテグレーション（[Sales Resource Page](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/)、[Customer Solution Page](https://about.gitlab.com/solutions/continuous-integration/)）
- 継続的デリバリー（[Sales Resource Page](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/)、[Customer Solution Page](https://about.gitlab.com/stages-devops-lifecycle/continuous-delivery/)）
- ソースコード管理（[Sales Resource Page](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/)、[Customer Solution Page](https://about.gitlab.com/solutions/source-code-management/)）
- GitOps（[Sales Resource Page](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/)、[Customer Solution Page](https://about.gitlab.com/solutions/gitops/)）

### 顧客事例  {#customer-stories}

| 企業 | 課題 | ソリューション | 結果 |
| [Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/) | 開発者の効率とソフトウェア品質を高める必要があった | GitLab Premium (CI/CD, SCM) | 1 日 2 ビルドから 1,000 ビルド以上に改善。ワークフローと管理を簡素化 |
| [Sopra Steria](https://about.gitlab.com/customers/sopra_steria/) | 単一認可で DevOps 用ツールを標準化する必要があった | GitLab Premium (CI/CD, SCM) | 6 分未満のビルド、AWS、GCP、Azure へのデプロイ  |
| [Wag!](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/) | 40 分以上かかる遅いリリースプロセス | GitLab Ultimate (CI, CD) | リリースプロセスを 6 分に短縮、組み込みセキュリティで 1 日 8 リリース、Amazon Elastic Container Service (ECS) への完全なデプロイパイプライン  |
| [ANWB](https://about.gitlab.com/customers/anwb/) | 長期化する障害、ツールセット統合のデバッグに長時間 | GitLab Premium (CI, CD) |  クラウドトランスフォーメーション向けセットアップ - K8S 上の Google Cloud |
| [Ticketmaster](https://about.gitlab.com/blog/2017/06/07/continuous-integration-ticketmaster/) | 遅いビルドプロセスがイノベーションを阻害 | GitLab Premium (CI) | 15 倍高速化 - 2 時間以上から 8 分のビルドへ。リリースの高速化と顧客体験の向上（5 つ星アプリレビュー）  |
| [Hotjar](https://about.gitlab.com/customers/hotjar/) | レガシーシステム、ツール統合の保守、クラウド技術の遅い採用 | GitLab Premium (CI, CD) |  デプロイ 50% 高速化、ビルド時間 30% 短縮、1 日 2〜15 デプロイ |
| [Paessler](https://about.gitlab.com/customers/paessler-prtg/)  | 大規模で複雑なパイプライン、フィードバックループが遅い | GitLab Premium (CI, CD) | ビルド時間 75% 短縮、テストが 45 分から 15 分へ  |

その他のケーススタディは [ケーススタディボード](https://gitlab.com/gitlab-com/marketing/strategic-marketing/customer-reference-content/case-study-content/-/boards/1804878) で *CI*、*CD*、*SCM*、*GitOps* のユースケースでフィルタしてご確認ください。

### ウェビナー、e-book、ホワイトペーパー、動画、プレゼンテーション  {#resources-list}

#### 顧客向けプレゼンテーション

- [Source code management](https://docs.google.com/presentation/d/1mVi6-dsMsaA-KPVd2fn1StXuJQ62-kJDm-4J0rc_B1U/edit?usp=sharing)
- [Continuous Integration](https://docs.google.com/presentation/d/1O6iwRt1DO9m-3vp3RAsUDLp6PGTOoA16UUrsBmx_MJo/edit#slide=id.p)
- [Continuous Delivery](https://docs.google.com/presentation/d/1bGdjQNfHxmYKYz_ZsrtyhEyXLGlv8UoTavi_aGl3UNc/edit#slide=id.p)
- [GitOps](https://docs.google.com/presentation/d/1o728pUdk1rrNqWAZpzZVdfZ3gzADvTXSssVzqL-6WB4/edit#slide=id.g8d846209b0_25_172)

### Webページ、ホワイトペーパー、インフォグラフィック、ブログ

- [What is GitOps?](https://about.gitlab.com/topics/gitops/)
- [Infrastructure as Code using GitLab & Ansible](https://about.gitlab.com/blog/2019/07/01/using-ansible-and-gitlab-as-infrastructure-for-code/)
- [Part 1 of 3: Why collaboration technology is critical for GitOps](https://about.gitlab.com/topics/gitops/gitops-gitlab-collaboration/)
- [Part 2 of 3: How infrastructure teams use GitLab and Terraform for GitOps](https://about.gitlab.com/topics/gitops/gitlab-enables-infrastructure-as-code/)
- [Part 3 of 3: How to deploy to any cloud using GitLab for GitOps](https://about.gitlab.com/topics/gitops/gitops-multicloud-deployments-gitlab/)
- [GitOps with GitLab: The CI/CD Tunnel](https://about.gitlab.com/blog/2022/01/07/gitops-with-gitlab-using-ci-cd/)
- [Auto DevOps 101: How we're making CI/CD easier](https://about.gitlab.com/blog/2019/10/07/auto-devops-explained/)
- [Progressive Delivery](https://about.gitlab.com/blog/2019/04/19/progressive-delivery-using-review-apps/)
- [How We Switched to a Continuous Delivery Pipeline in 3 months](https://faun.pub/how-we-switch-to-a-continuous-delivery-pipeline-in-3-months-9667b9f65f7a)

### 動画

- SCM: [Source Code Walk Through, January 2020](https://www.youtube.com/watch?v=wTQ3aXJswtM) by James Ramsey, Group Product Manager for the Create Stage
- SCM: [GitLab Flow pattern](https://youtu.be/InKNIvky2KE?list=WL)
- SCM: [Design Management Walkthrough, January 2020](https://youtu.be/LzFRBMGl2SA) by Christen Dybenko, PM Knowledge Group
- SCM: [Web IDE walkthrough, January 2020](https://www.youtube.com/watch?v=oDZu71nWctc&list=PL05JrBw4t0Kp0LPy37-rcLf9KYppouxPR&index=11&t=2s) by Kai Armstrong, PM Editor Group
- SCM: [Merge Request and Source Control as part of the Software Development Life Cycle](https://youtu.be/UuX-GnYWNwo?t=274) by William Chia sPMM CI/CD
- SCM: [GitLab Namespaces: users, groups and subgroups](https://www.youtube.com/watch?v=r0sJgjR2f5A) by Brendan O'Leary, Tech Evangelist
- SCM: [Rich Change Controls for Building Workflows you can Trust](https://youtu.be/uW95PV8d-w8?t=186) by Darwin Sanoy, Solutions Architect
- CI/CD: [CI/CD with GitLab](https://youtu.be/1iXFbchozdY)
- CI/CD: [GitLab for complex CI/CD: Robust, visible pipelines](https://youtu.be/qy8A7Vp_7_8)
- CI/CD: [How do Runners work?](https://youtu.be/IsthhMm64u8)
- CI/CD: [Mastering CI/CD](https://about.gitlab.com/webcast/mastering-ci-cd/)
- CI/CD: [What is Auto DevOps?](https://www.youtube.com/watch?v=pPRF1HEtQ3s&feature=youtu.be)
- GitOps: [What is GitOps? Why is it important? How can you get started?](https://www.youtube.com/watch?v=JtZfnrwOOAw)
- GitOps: [What is Infrastructure as Code](https://www.youtube.com/watch?v=zWw2wuiKd5o)
- GitOps: [Infrastructure as Code using GitLab & Ansible](https://youtu.be/M-SgRTKSeOg)
- GitOps: [Part 1 of 3: How GitLab supports GitOps: The Process](https://www.youtube.com/watch?v=wk7YAXijIZI)
- GitOps: [Part 2 of 3: How GitLab supports GitOps: The Infrastructure](https://www.youtube.com/watch?v=5rqoLj8N5PA)
- GitOps: [Part 3 of 3: How GitLab supports GitOps: The Application](https://www.youtube.com/watch?v=heQ1WY_08Tc)
- GitOps: [GitOps with GitLab and Terraform](https://www.youtube.com/watch?v=G7JOjI6V3AY)
- GitOps: [Using GitLab for GitOps to break down silos and encourage collaboration](https://www.youtube.com/watch?v=5ykRuaZvY-E)
- GitOps: [GitOps Click Through Demo](https://drive.google.com/open?id=1UT32lLvXtwAslkK7o8asbko3a231WKrjmlcM0z9coPw)

#### トレーニング

- [Git in Gifs](https://www.youtube.com/playlist?list=PLFGfElNsQthZcx-NEyMsPl-dl3Q_p-3yv)
- [Why You Should Move To Git](https://www.youtube.com/watch?v=iVUqKJpHc5s)
- [CI/CD Overview Video](https://www.youtube.com/watch?v=wsbSvLyC2Z8)
- [CS Skills Exchange: CI Deep Dive](https://www.youtube.com/watch?v=ZVUbmVac-m8&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=3&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [Technically Competing Against Microsoft Azure DevOps](https://drive.google.com/open?id=18jwSeeUylGXv8LoEedCMRfBZt9t7QLOYKCHJp-SvdqA) *(GitLab 内部限定)*
- [Competing Against Jenkins](https://drive.google.com/open?id=1IvftLfaQyKn5-n1GLgCZokOoLU-FFzQ8LfJ9cf0FVeg) *(GitLab 内部限定)*
- [Make Your Life Easier with CI/CD Presentation](https://docs.google.com/presentation/d/1scYkmV4Xdfj-8iwwpEiLCe0vBfpAdrL5pyA2w1Fgnf0/edit#slide=id.g7193b194b5_0_96)

#### デモ動画とクリックスルーデモ

- [All Marketing Click Through Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs)
- [All Marketing Live Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#live-instructions)
- [Jira & Jenkins Integration Video](https://www.youtube.com/embed/Jn-_fyra7xQ)
- [How to setup the Jira Integration](https://www.youtube.com/watch?v=p56zrZtrhQE)
- [GitHub Integration Video](https://www.youtube.com/embed/qgl3F2j-1cI)
- [Migrating from Jenkins to GitLab](https://youtu.be/RlEVGOpYF5Y)
- [Using GitLab CI/CD pipelines with GitHub repositories](https://youtu.be/qgl3F2j-1cI)
- [Live Demo: GitLab CI/CD Deep Dive](https://youtu.be/pBe4t1CD8Fc)

### サービス {#services}

GitLab プロフェッショナルサービスは、お客様が GitLab を効率的かつ迅速に使いこなせるよう支援します。GitLab（または GitLab パートナー）はお客様を支援するための様々なサービスを提供しています。

お客様にご提案いただけるサービスは以下のとおりです。

1. [GitLab CI/CD トレーニング](https://university.gitlab.com/pages/ci-cd-training/)
1. [GitLab with Git Basics トレーニング](https://university.gitlab.com/pages/gitlab-fundamentals-training)
1. [Data Migration Services](https://about.gitlab.com/services/catalog/)
1. [Dedicated Engineering](https://about.gitlab.com/services/catalog/)

GitOps 導入を支援するアドバイザリ／コンサルティングサービスは、本年後半に提供開始予定です。GitOps アドバイザリの提供に関心がある場合は、PS が効果的に優先順位付けできるよう、[こちら](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/issues/74) からご登録ください。

サービスを提案する際は、PS とのエンゲージメントの価値を確立するための [Services Pitch Deck](https://docs.google.com/presentation/d/1CFR8_ZyE9r4Dk_mjoWGe4ZkhtBimSdN0pylIPu-NAeU/edit#slide=id.g2823c3f9ca_0_9) を活用できます。その他のサービスは、[プロフェッショナルサービス提供の全リスト](https://about.gitlab.com/services/) をご覧ください。

詳しくは [プロフェッショナルサービス Slack チャンネル](/handbook/customer-success/professional-services-engineering/working-with/#slack) で @em までお問い合わせください。
