---
title: "ソフトウェア部品表（SBOM）成熟度モデルおよび実装計画"
upstream_path: /handbook/security/security-assurance/security-compliance/sbom-plan/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

## 目的

このページの目的は、ソフトウェアプロデューサーおよびソフトウェアコンシューマーの両面において、GitLabがソフトウェアサプライチェーンのセキュリティに関する透明性と、何より可視性を提供するために、どこに向かうべきかの方向性を示すことです。GitLabは、米国および米国外におけるさまざまな法案ドラフト、大統領令や指令、顧客要望、多数のコミュニティフレームワークやフォーマット仕様の中でSBOM要件への言及がなされている、非常に動的な規制環境を評価しています。

### なぜSBOMなのか

完全かつ正確なSBOMを生成・利用する能力は、私たちのソフトウェアを保護し、ソフトウェアサプライチェーンのリスクを管理するうえで**不可欠**です。これを優先すべき理由をいくつか以下に示します。

1. **透明性は私たちの中核的価値観の一つです**
    - 名前とバージョンを超えて系譜と脆弱性の悪用可能性データを含む、ソフトウェアで使用されるコンポーネントに関する完全かつ正確な情報を提供することは、私たちの価値観、そして私たちがオープンコア企業であるという事実と直接合致します。SBOMはソフトウェアの透明性を実現する手段です。
1. **ソフトウェアの依存関係および脆弱性に対する可視性の欠如は、すべての企業にとって最大級のリスクです**
    - 他社やオープンソースプロジェクトのSBOM内の情報は、GitLabが迅速かつリスクに基づいた意思決定を行うのに役立ちます。
1. **競争上の差別化**
    - 世界はまだ、SBOMの現在と未来の現実に対して理解を深めようとしている最中です。DevSecOpsカテゴリーリーダーとして、GitLabは競合他社よりも高い基準で評価されることになり、製品の観点からも顧客信頼の観点からもこの領域で世界をリードする必要があります。
1. **効率性**
    - CycloneDXやVEXのような標準化された権威あるフォーマットで情報を伝達することは、私たちと顧客が多くの効率性を得ることを意味します。たとえば、ソフトウェアに実際に存在する依存関係や、悪用可能な脆弱性とそのステータスについて、質問やリクエストが発生することがなくなります。
1. **規制上の要件**
    - 現時点では拘束力のある要件はほとんどありませんが、SBOMは大統領令、National Cybersecurity Strategy、NIST SSDF標準、CISAなどにおいて、米国連邦政府機関がソフトウェアプロバイダーと取引するための要件として参照されており、すでに法案ドラフトや情報提供依頼書（RFI）に登場しています。米国外の公共部門および商業の規制フレームワークもこれに追随しており、規制環境は今後数年間で非常に動的に推移すると予想されます。詳細についてはページ下部のリソースセクションを参照してください。

## 現状（%16.4時点）

SBOMに関連する現在および計画中の機能の最新情報については、GitLabのSoftware Supply Chain Security[方向性ページ](https://about.gitlab.com/direction/supply-chain/)を参照してください。

GitLab製品には現在、以下のSBOM機能があります: GitLab[Dependency](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html#cyclonedx-software-bill-of-materials)および[Container](https://docs.gitlab.com/ee/user/application_security/container_scanning/index.html#cyclonedx-software-bill-of-materials)スキャン後にCycloneDXフォーマットのSBOMを生成する能力、および既存のGitLabデータベースから脆弱性とライセンスデータを取り込んだ[Dependency List](https://docs.gitlab.com/ee/user/application_security/dependency_list/)の表示能力。16.4時点で、GitLab製品には[パイプライン固有のCycloneDX SBOMエクスポート](https://docs.gitlab.com/ee/api/dependency_list_export.html)用のAPIと、[グループレベルの依存関係リスト](https://docs.gitlab.com/ee/user/application_security/dependency_list/)を作成する機能が追加されました。

GitLab社（カンパニー）はDependency Listを主要プロジェクトの脆弱性情報の表示に使用していますが、CIパイプラインで依存関係および／またはコンテナスキャンを実行した後は、通常代わりに[Vulnerability Report](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/)を使用しています。CycloneDX SBOMはほとんどのプロジェクトで生成されていますが、まだそれらを利用したり、互いに結合したり、VEX BOMを生成したり、顧客に容易に利用可能な形で提供したりはしていません。

## SBOM成熟度モデル（作業中）

### 基盤的能力

#### GitLab製品

- GitLabリポジトリに対して、CycloneDXのような受け入れ可能なフォーマットで、完全かつ正確なSBOMを自動的に生成する能力。これにはNTIAが推奨する最低限のデータ要素すべてを含みます: サプライヤー名、コンポーネント名、コンポーネントのバージョン、その他の固有識別子、依存関係、SBOMデータの作成者、タイムスタンプ。
  - これらのフィールドの多くは現在利用可能（`gitlab-org/gitlab`の依存関係スキャンジョブからサンプリングしたSBOM）ですが、依存関係と作成者は有効化が必要です。[不足フィールドに関する機能要望](https://gitlab.com/gitlab-org/gitlab/-/issues/428073)。
- 製品アーティファクトをビルドするために使用される開発環境、ソースファイル、含まれる依存関係から直接作成される「Source SBOM」機能。通常はソフトウェアコンポジション解析（SCA）ツーリングから生成され、手動の補足説明が伴います。
  - これは既に機能として存在します。[Dependency List](https://docs.gitlab.com/ee/user/application_security/dependency_list/)のドキュメントを参照してください。まだCycloneDXフォーマットへのエクスポートはできません。
- ビルド後のアーティファクト（実行ファイル、パッケージ、コンテナ、仮想マシンイメージなど）の解析を通じて生成される「Analyzed SBOM」機能。このような解析には一般的にさまざまなヒューリスティックが必要です。文脈によっては「サードパーティ」SBOMとも呼ばれます。通常はサードパーティのツーリングによるアーティファクトの解析を通じて生成されます。
  - これは既に機能として存在し、[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html#cyclonedx-software-bill-of-materials)と[Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/index.html#cyclonedx-software-bill-of-materials)の両方に対してCIパイプラインでCycloneDX SBOMを生成できます。
- ビルド時またはリリース時（リリース証跡）、および／または生成時にSBOMをデジタル署名するためのサポート。
  - これはすでにSoftware Supply Chain Securityの方向性ページの[SBOM generation and management](https://about.gitlab.com/direction/supply-chain/#provenance-and-signing)に反映された計画機能です。

#### GitLab社

- 顧客向けにすべての製品関連／リリース済みソフトウェアに対して、完全かつ正確なSBOMを生成する。SBOMが完全／正確でないインスタンス（依存関係を予期せぬ方法で宣言したことに起因するなど）を文書化する。
  - [GitLab Omnibus用のリリースSBOMをエクスポートする](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/6933)
- GitLabのSBOMを結合して、単発のコンポーネント／プロジェクトではなく、GitLab製品リリースを代表するものになるようにする。
  - これは手動で実行可能（たとえばCycloneDX CLIを使用）ですが、ネイティブのGitLabサポートはありません。
- 全社的なSBOM標準を作成し、ツールやフォーマット、SBOMをどのソフトウェア／プロジェクトに対してどの頻度で生成するか、必要な深さのレベル、どのように使用／消費するか、不正確さや不完全さをどのように追跡するか、顧客とどのように配布／共有するかなど、従うべきプラクティスとプロセスを含める。
- 整合性の検証と否認防止を提供するために、すべてのSBOMおよび／またはBOM内のアセンブリにデジタル署名する。
- 容易にアクセス可能でデジタル署名されたSBOMリポジトリを維持し、顧客とSBOMを共有するための文書化された仕組みを持つ。この仕組みは[Security CAP](https://trust.gitlab.com/)内でも、または同様の公開ページを通じても可能です。Product、Field Security、SalesにGitLab SBOMの顧客リクエスト／アクセス方法を周知する。

### 中級の能力

#### GitLab製品

- リンクされたSBOMに対してVEX BOM（またはSBOM内に埋め込まれたVEXデータ）を生成・注釈する能力。
  - [SBOMレポートでVEXをサポートする](https://gitlab.com/gitlab-org/gitlab/-/issues/413694)
- ソースファイル、依存関係、ビルド済みコンポーネント、ビルドプロセスの一時データ、その他のSBOMといったデータからリリース可能なアーティファクト（実行ファイルやパッケージなど）を作成するためのソフトウェアビルドプロセスの一部として生成される「Build SBOM」機能。通常はビルドプロセスの一部として生成されます。最終リリースアーティファクトのSBOMのために、統合された中間のBuildおよびSource SBOMで構成される場合があります。
  - これはすでにSoftware Supply Chain Securityの方向性ページの[Release Evidence Generation](https://about.gitlab.com/direction/supply-chain/#provenance-and-signing)に反映された計画機能です。
- 全体的なリスク体制の理解を深め、ユースケースを拡張するために、GitLabのSBOMに追加データ要素を含める。これには依存関係の出所と系譜情報、VEX BOMへのリンク、ライセンス情報、各コンポーネントのハッシュ、purl／cpe／swid参照が含まれます。
- すべてのコンポーネントのbom-refなど、[依存関係グラフ](https://cyclonedx.org/use-cases/#dependency-graph)を生成するためのメタデータを含める。
- GitLabにサードパーティSBOMをインポートする機能（理想的にはGitLab内でUIおよびAPIを使用）と、これに脆弱性データ（GitLab Security Advisoryデータベースなど）を加える機能を提供する。
- SBOM／VEX BOM内に[セキュリティアドバイザリを外部参照として](https://cyclonedx.org/use-cases/#security-advisories)含める。
- 特定のコンポーネント／アセンブリまたは製品の全体像を取得するために、GitLab内のSBOMを結合する機能を開発する。たとえば、これはトップレベルグループ内からさまざまなSBOMジョブアーティファクトおよび／または依存関係リストを手動で選択することによって実現可能です。
- SPDXのような他のSBOMフォーマットへのネイティブサポート。顧客はカスタムCIジョブまたは公開されているOSSツールを介して、CycloneDX出力をSPDXに変換することができます。

#### GitLab社

- SBOMフォーマット、詳細レベル、頻度、完全性／正確性などについて、私たち自身が設定するのと同じ基準に対してサードパーティの商用ベンダーに責任を負わせる仕組み（たとえば契約）をGitLabが持つ。これにはサードパーティリスクマネジメントプログラムの一部としてSBOMの可用性と正確性を確保することを含みます。
  - SBOMコンポーネントレベルでベンダーの脆弱性開示レポートを維持する。
- 脆弱性やライセンスのリスクがあるかどうかを理解するために、サードパーティの商用ベンダーおよび非GitLabのオープンソースソフトウェアからSBOMを利用・解析するプロセスをGitLabが持つ（理想的にはGitLab内でUIおよびAPIを使用）。
- リンクされたVEX BOM（または埋め込みVEXメタデータ）を注釈・更新することで、GitLabがそのSBOMの最新の脆弱性メタデータを維持する。意図はVEX情報を顧客に伝えることです。
- ある時点でGitLabが生成したSBOMおよびリンクされたVEX BOMから収集された脆弱性を自動的に利用してレポートする。意図は内部のセキュリティ意識と修正の優先順位付けを推進することです。
- GitLab.comとGitLab Dedicated用のSaaS SBOMを作成・維持する。
- GitLab OmnibusとCNG用のSBOMを作成・維持する。

### 高度な能力

#### GitLab製品

- サードパーティおよび他のオープンソースソフトウェアの脆弱性メタデータをGitLab内で直接表示できるよう、サードパーティVEX BOMをインポートする機能をGitLabが持つ。
- 系譜メタデータを使用して[修正状態情報を抽出する](https://cyclonedx.org/use-cases/#vulnerability-remediation)ことにより、VEX BOMを自動的に最新の状態に保つ。
- ネストされたソフトウェアコンポーネント／製品と推移的依存関係の関係を示すSBOM[アセンブリ](https://cyclonedx.org/use-cases/#assembly)のサポート。
- トリアージと修正プロセスの自動化を可能にする[他のプロパティ](https://cyclonedx.org/use-cases/#properties--name-value-store)（製品グループや部門を識別する組み込みのname-valueストア、内部の重大度情報、修正のSLA／期限など）をGitLabが生成するSBOMでサポートする。
- SBOM内の[コンポジションの完全性](https://cyclonedx.org/use-cases/#composition-completeness)情報のサポートを提供する。
- ML Transparencyメタデータ（CycloneDXなどの業界承認の仕様でサポートされ次第）。
- SBOMレポートの機能として[Vulnerability Disclosure Report (VDR)](https://cyclonedx.org/capabilities/vdr/)をサポートする。Issue: [SBOMレポートでVulnerability Disclosure Report (VDR)をサポートする](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8298)。
- システム上に存在するソフトウェアのインベントリを提供する「Deployed SBOM」機能。これは他のSBOMのアセンブリで、構成オプションの解析や、（潜在的にシミュレートされた）デプロイ環境における実行動作の検査を組み合わせる場合があります。通常はシステムにインストールされたアーティファクトのSBOMと構成情報を記録することで生成されます。
- ソフトウェアを実行しているシステムをインストルメンテーションして生成される「Runtime SBOM」機能。これにより、システムに存在するコンポーネントのみ、ならびに外部呼び出しや動的にロードされるコンポーネントを取得できます。文脈によっては「Instrumented」または「Dynamic」SBOMとも呼ばれます。通常はシステムと相互作用するツーリングが、実行中の環境に存在するアーティファクトおよび／または実行されたアーティファクトを記録することで生成されます。

#### GitLab社

- 取得側組織に対するSBOMの脆弱性開示の影響を動的にモニターするためのリスク管理および測定能力を開発する。
- ベンダーから提供されるSBOMがない場合（レガシーソフトウェアなど）に、技術的および法的に実現可能な範囲で、ソフトウェアインストールパッケージのバイナリ分解を実行してSBOMを生成する。
- 脆弱性メタデータ／VEX、コンポジションの完全性情報、アセンブリデータ、その他必要なプロパティを含め、GitLabのSBOMで利用可能なSBOM仕様プロパティをすべて入力する。
- CycloneDX SBOMに[Vulnerability Disclosure Report (VDR)](https://cyclonedx.org/capabilities/vdr/)データを追加する。

## SBOM実装計画／ロードマップ案（まだ合意されていません）

### FY 25

GitLab製品とGitLab社の両方について、すべての基盤的能力と一部の中級能力の実装を目標とします。

### FY 26

GitLab製品とGitLab社の両方について、顧客付加価値、製品差別化、またはセキュリティ／コンプライアンス要件によって正当化される場合に、すべての中級能力と一部の高度な能力の実装を目標とします。

## リソース
