---
title: "DevOps ソリューションリソース: DevSecOps"
description: "GitLab が DevSecOps ソリューションをどのように実現するか、メッセージングや、マーケティングと営業を支援する主要リソースを含めて解説します。"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

**GitLab の DevSecOps 機能の顧客向け概要をお探しですか？ [DevSecOps Solution](https://about.gitlab.com/solutions/security-compliance/) をご覧ください**

**GitLab フィールドチームは、最新情報については [Security and Governance highspot ページ](https://gitlab.highspot.com/items/61f415455b20d8eb224750a3) を参照してください**

このページは、DevSecOps に関する Go-to-Market の取り組みについて、GitLab の営業・マーケティング活動の整合をとる単一の情報源とすることを目的としています。

### 連絡先

|     プロダクトマーケティング    |    デベロッパーアドボケイト    |
| ------------------------ | ------------------------- |
| Brian Mason ( @BrianMason )  | Fernando Diaz ( @fjdiaz ) |

## 市場の視点

## DevSecOps

DevSecOps ユースケースは、DevOps 方法論の中でセキュリティ脆弱性をより早く見つけるために「シフトレフト」を試みているが、期待された結果を達成できていないお客様に当てはまります。

セキュリティが DevOps フローから切り離されていると、アプリケーションセキュリティは難しくなります。セキュリティは伝統的に開発ライフサイクルの最後の関門とされてきました。反復的な開発ワークフローはセキュリティをリリースのボトルネックにし得ます。お客様にはすべてのコードをテストするのに十分なセキュリティ人材がおらず、セキュリティアナリストを増やしてもアプリセキュリティとエンジニアリングチーム間の摩擦が自動的に減るわけではありません。メジャーリリースだけテストする、または特定アプリにテストを限定すると、ハッカーが悪用できる弱点が残ります。彼らはリスクとビジネスのアジリティのバランスをとる方法を必要としています。開発プロセスの最後にセキュリティを待つのではなく、DevOps ワークフロー内にセキュリティを含めたいと考えています。これがしばしば DevSecOps と呼ばれます。

DevSecOps は CI パイプライン内に自動セキュリティスキャンとコンプライアンス制御を統合します。GitLab はこのアプローチをさらに進め、DevOps プラットフォームにシームレスにセキュリティとコンプライアンスを組み込み、シンプルさ、可視性、制御を提供します。

### なぜ DevSecOps が必要なのか？

セキュリティ専門家は常に開発者よりも数で劣ります。アプリケーションセキュリティの取り組みをスケールさせるには、開発者が自身でコードを作業しているときに、自分でソフトウェアのセキュリティ脆弱性を見つけて修正できるようにする必要があります。さらに、コンプライアンスと監査可能性のニーズはこれまでも重要でしたが、ソフトウェアサプライチェーンに対する高プロファイル攻撃や、それに関連する米国大統領の[サイバーセキュリティ向上に関する大統領令](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) を受けて、これらの要件への注目はさらに高まっています。

アプリケーションセキュリティテストは依然として基盤ですが、いまや「ソフトウェア工場」全体にわたる可視性と制御がさらに重要になっています。これを DevSecOps 2.0 と考えてください。GitLab の DevOps へのプラットフォームアプローチは、これらの新しい、より広範な DevSecOps 要件を満たす上で明確な優位性を提供します。

### 期待されるビジネス成果

- シフトレフトして、修正コストが低い段階で脆弱性を見つけて修正
- 既存ツールでシフトレフトを試みたがスケールせず、よりシンプルなソリューションを探している
- 本番に脆弱性を持ち込まないことでリスクと技術的負債を低減
- DevOps、高速、反復的な環境におけるアプリセキュリティのコストの予測性向上
- エンドツーエンドのガバナンス強化により、よりセキュアなソフトウェアサプライチェーンと、セキュリティ・コンプライアンスリスクの低減

### ペルソナ

#### ユーザーペルソナ

ユーザーには開発者とセキュリティ専門家の両方が含まれます。私たちはソフトウェア脆弱性とその解決状況に対する統一されたビューを持つことを誇りにしています。

**開発者** は GitLab を主に MR パイプラインレポート内で利用します

開発者はセキュリティを気にしてはいるものの、セキュリティの専門家になりたくはありません。セキュアなコードを書く主な動機は、個人的・職業的な評判を守ることです。自身が書いた脆弱なコードによって会社を倒すような人にはなりたくないのです。同時に、彼らは主にユーザー要件を満たすコードを素早く出すことを目標とされています。多くの場合、彼らはセキュリティ欠陥で評価されません。セキュリティは必要悪のように感じられることがあります。コンテキストスイッチなしにワークフローに収まるツールが最も受け入れられます。GitLab がコードコミット時に脆弱性をレポートして提供する明瞭性は役立ちます。

**[Amy アプリケーションセキュリティエンジニア](/handbook/product/personas/#amy-application-security-engineer)** は GitLab を主に Security Dashboard と脆弱性レポートで利用します

セキュリティ専門家はエンタープライズ／機関のリスク管理を最も気にします。プロセス改善の領域を探してプロセスを広く見て、リスクを低減し繰り返しのミスを避けます。リスクを気にするため、未解決の脆弱性、その重大度、修復状況を特定したいと考えています。時系列の傾向や集計改善を気にします。多くの場合、彼らの指標は平均修復時間です。セキュリティ担当者自身がソフトウェアセキュリティ欠陥を修復できることはまれで、開発者に依存することが多いです。この目標の不一致は、グループ間の対立の原因となることがよくあります。SDLC の最後にテストが行われる従来のアプリセキュリティ環境では、彼らは脆弱性ステータスの追跡・レポート、結果の精査、開発チームへのトリアージに多くの時間を費やすかもしれません。開発がより自動化されている場所では、ポリシーの設定とツールによるその適用に集中できる場合があります。多くの場合、新たな Critical／High 脆弱性が本番に入ることを避けたいと考え、これを徹底するためにビルドを失敗させることを好みます。

開発者と DevOps チームは GitLab をセキュリティに使うのを好む傾向がありますが、セキュリティ専門家はしばしば懐疑的で、お気に入りの既存スキャナーと比較します。彼らは独自の複雑なダッシュボードを構築しており、お気に入りのスキャナーにキャリアを賭けてきたかもしれません。たとえ作業を簡素化できる場合でも、置き換えに消極的なことが多いです。

#### バイヤーペルソナ

**Security Manager または CISO（Sam の上司）は通常、Ultimate ティアのバイヤーです**

セキュリティリーダーは Fortify や Veracode のような非常に高価なスキャナーを正当化することにキャリアを賭けてきたかもしれず、たとえ開発者・セキュリティ双方の作業を簡素化できる場合でも、置き換えに消極的なことが多いです。

彼らの心を掴む鍵は、**シンプルさと制御** に焦点を当てることです。

- 複雑性は CISO の主要な不満の一つです。1 つのツールで一箇所に幅広いスキャン結果を提供し、継続的な統合・保守なしで運用できれば、彼らの努力を大きく簡素化できます。
- CISO はおそらく制御不能と感じている、または少なくとも進化する脅威、高プロファイルなサイバー攻撃、新しいコンプライアンス上の懸念、開発ツールの肥大化の中でセキュアであるよう圧力を感じています。これらのソフトウェアリスクを管理するのは難しいことです。エンドツーエンドのシンプルさ、可視性、制御を提供する単一プラットフォームでソフトウェア開発を制御してください。GitLab を選んでください。

## 業界アナリストカバレッジ

[2021 Gartner Magic Quadrant for Application Security Testing](https://page.gitlab.com/resources-report-gartner-magic-quadrant-ast-2023.html)

## 市場要件（優先順位順）

| 市場要件 | 説明 | 該当する機能例 | 価値／ROI |
| ------ | ------ | ------ | ------ |
| 共通のコンプライアンス制御 |  ソフトウェア開発・デプロイプロセスの完全性を保護するために必要な制御 | ロールベースアクセス、MR 承認、その他多数 | 監査・コンプライアンスを簡素化し、コンプライアンス違反のリスクを低減 |
| 開発者向けスキャン結果 | 開発者がコーディング中に脆弱性を見つけて修正できるよう、脆弱性スキャン結果を開発者のネイティブワークフロー内で利用可能にする必要がある。自動的に修正可能な発見項目は自動化を使って修正を適用しテストする。 | 高速で反復的なスキャンのためのインクリメンタルスキャン。スキャン結果を CI パイプラインに統合。Auto Remediation で自動的に修正を作成し、開発者の労力を削減。  | コストが安い段階でセキュリティ欠陥を早期に修正でき、コンテキストスイッチを排除し、脆弱性が本番に到達するのを防いでリスクを最小化。 |
| コードとコンポーネントのアプリケーションセキュリティテスト | しばしば Software Composition Analysis (SCA) と呼ばれ、すべてのコードコンポーネント（カスタムコードとオープンソース）をどこにあっても（コンテナ内などでも）テストします。GitLab の調査では Dependency Scanning が最も頻繁に使われるスキャンタイプです。 | SAST、Dependency Scanning、Container Scanning、Secrets Detection、（オプションで）License Compliance | セキュリティおよびコンプライアンスリスクを低減。|
| 動作中アプリのアプリケーションセキュリティテスト | コード実行時に脆弱なコードの挙動を探すスキャン。| DAST、IAST、Input Fuzzing、UEBA／脅威モデリング、モバイルアプリセキュリティテスト | セキュリティおよびコンプライアンスリスクを低減。 |
| セキュリティガバナンス | ソリューションは、適切なリスクのみが取られるようにセキュリティポリシーを自動的にコードに適用します。リスクを表すアプリケーション脆弱性は追跡・管理・レポートされます。ソリューションはリスク、コンプライアンス、監査、プロセス改善（通常は教育目的）の機会を評価するためのセキュリティプラクティスの定期的な評価を可能にします。 |  セキュリティポリシー自動化、リスクとコンプライアンスのレポート、監査レポート、各種セキュリティメトリクスとプロセスレポート、脆弱性データベースと管理 | リスクを効率的に監視・管理・低減。例外を特定し、ポリシーを段階的に改善する能力。 |
| セキュリティガードレール（予防的 - CI/CD 前） | 予防的アプリケーションセキュリティはガードレールを使ってチームが最初からセキュアなものを一貫して構築できるよう支援します。 | 開発者がタイプする際に安全でないフレーズを識別するスペルチェッカーのような機能、開発者の選択を事前承認済みコードライブラリに限定する Bill of Materials、すべてのサードパーティコードをカタログ化する自動検出。 | 新しい脆弱性の作成を防止。 |
| 既存・多様なツールと共存| セキュリティスキャナーは、サードパーティ CI やセキュリティスキャナーを使用している既存環境に統合できる必要があります。 | API とプラグイン | 既存投資の継続利用を可能にし、置き換え＝大手術となるシナリオを回避。 |

## GitLab のソリューション

## GitLab が市場要件を満たす方法

GitLab DevSecOps ユースケースの概要
<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XnYstHObqlA" frameborder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

| 市場要件 | GitLab がどう実現するか | GitLab カテゴリー | デモ |
| ------ | ------ | ------ | ------ |
| 共通のコンプライアンス制御 |  GitLab は SDLC 全体で[多くの共通制御](https://docs.gitlab.com/ee/administration/compliance.html) を提供 | Manage ステージ内の Access and Compliance | [![Compliance pipelines](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Compliance pipelines](https://www.youtube.com/watch?v=jKA_e_jimoI) |
| 開発者向けスキャン結果 | 高速で反復的なスキャンのためのインクリメンタルスキャン。スキャン結果を CI パイプラインに統合。Auto Remediation で自動的に修正を作成。 | CI（[MR パイプライン](https://docs.gitlab.com/ee/user/application_security/) 用）、[Auto remediation](https://docs.gitlab.com/ee/user/application_security/#solutions-for-vulnerabilities-auto-remediation) | [![Adding Security to your CICD Pipeline](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Adding Security to your CICD Pipeline](https://youtu.be/Fd5DhebtScg) |
| コードとコンポーネントのアプリケーションセキュリティテスト | SAST、Dependency Scanning、Container Scanning、Secrets Detection、License Compliance | [SAST](https://docs.gitlab.com/ee/user/application_security/sast/)、[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)、[Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)、[Secrets Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/#:~:text=GitLab%2011.9%20includes%20a%20new,Security%20Dashboard)、[License Compliance](https://docs.gitlab.com/ee/user/compliance/license_scanning_of_cyclonedx_files/) | [![SAST and Secret Detection](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) SAST and Secret Detection](https://youtu.be/8sOjvlkl8QY)<BR>[![Dependency scanning](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Dependency scanning](https://youtu.be/39RvTMLDszc)<BR>[![Container scanning](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Container scanning](https://youtu.be/wIcaSerMfFQ)<BR>[![License compliance](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) License compliance](https://youtu.be/42f9LiP5J_4)<BR>[![Mobile SAST](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Mobile SAST](https://youtu.be/v0GhEHZWtdw)|
| 動作中アプリのアプリケーションセキュリティテスト | GitLab は CI 中に立ち上げられた Review App を使って動的アプリケーションセキュリティテストを実行します。最近の買収により、API スキャンに有用な多次元ファズテスト機能が提供されます。モバイルアプリのセキュリティテストは、当社の言語スキャン機能内のあらゆるアプリで実行可能です。 | [DAST](https://docs.gitlab.com/ee/user/application_security/dast/)、[Input Fuzzing](https://about.gitlab.com/direction/application_security_testing/dynamic-analysis/fuzz-testing/)、モバイルアプリセキュリティテスト（パートナーが必要） | [![DAST](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) DAST](https://youtu.be/9tIrrByOum4) |
| セキュリティガバナンス | セキュリティポリシー自動化、コンプライアンス評価、セキュリティリスク評価、監査評価、セキュリティプロセス改善／評価、脆弱性管理、Advisory Database  | [Security Dashboards](https://docs.gitlab.com/ee/user/application_security/security_dashboard/)、[脆弱性管理](/handbook/security/product-security/vulnerability-management/)、[Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) [Compliance Management](https://about.gitlab.com/direction/software_supply_chain_security/compliance/compliance-management/) | [![Accelerate AppSec Efficiency with the GitLab Security Dashboard](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Accelerate AppSec Efficiency with the GitLab Security Dashboard](https://youtu.be/p3qt2z1rQk8) |
| セキュリティガードレール（予防的 - CI/CD 前） | GitLab は依存関係を示す Bill of Materials を提供します。現時点では、これを使って開発者を事前承認済みの依存関係のみに制限することはできていません。 | [Bill of Materials 機能](https://docs.gitlab.com/ee/user/application_security/dependency_list/) | [![Manage your Application Dependencies with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Manage your Application Dependencies with GitLab](https://youtu.be/scNS4UuPvLI)|
| 既存・多様なツールと共存 | GitLab は、外部 CI ツールを GitLab CI と並行して動作させることが可能で、Jenkins ユーザーも GitLab Secure 機能を利用できるようにします。同様に、ユーザーがサードパーティセキュリティスキャナーに投資している、もしくは GitLab がカバーしていない言語向けに別のスキャナーが必要な場合もあります。当社はサードパーティスキャナーが GitLab の MR と Security Dashboard に統合しやすくしました。 | CI（[MR パイプライン](https://docs.gitlab.com/ee/user/application_security/) 用）、[Security Dashboards](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) | [![Using GitLab Application Security Capabilities with Jenkins](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Using GitLab Application Security Capabilities with Jenkins](https://youtu.be/8VoxulxxM4Y)<BR>[![Creating Jira issues from GitLab vulns](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Creating Jira issues from GitLab vulns](https://youtu.be/fTELCoSkBiY) |

## トップ差別化要因

| 差別化要因 | 価値 | 証跡  | デモ |
| ------ | ------ | ------ | ------ |
| **機能ブランチから作成された MR で表示される詳細かつ実行可能なスキャン結果** | GitLab はコードがマージされる前に SAST、ライセンスコンプライアンス、Dependency Scanning などのセキュリティスキャンを実行し、開発者が他の活動にコンテキストスイッチする前にセキュリティ脆弱性を特定・修正する機会を提供します。これにより、開発サイクルの後で検出されるほど指数関数的に増える欠陥・脆弱性の解決時間とコストが下がり、サイクルタイムと開発コストが改善します。 | [Gartner - Integrating Security Into the DevSecOps Toolchain](https://www.gartner.com/en/documents/3975263) は、開発者が素早く対応でき、欠陥追跡ワークフローに統合できる、小さく実行可能なステップでセキュリティを DevSecOps ライフサイクルに含めることで、セキュリティ修正のペースを開発のペースに合わせる方法を説明しています。 | [![Security Scans as Displayed in DevSecOps Overview](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Security Scans as Displayed in DevSecOps Overview](https://youtu.be/XnYstHObqlA?t=218) |
| **セキュリティポリシーに基づく MR のブロック** | セキュリティチームが組織のセキュリティポリシーを事前に適用し、コードがマージされる前にセキュリティ例外をレビュー／承認することで、開発チームとセキュリティチームの距離を縮めます | **-**  | [![Merge-Request Approvals as Displayed in DevSecOps Overview](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Merge-Request Approvals as Displayed in DevSecOps Overview](https://youtu.be/XnYstHObqlA?t=174) |
| **コンプライアンス管理** | GitLab は単一データストアを通じて Dev、Sec、Ops に単一の情報源を提供することでコンプライアンスを容易にします。すべてが監査され、変更ごとにすべての意思決定とアクションの完全な監査ログを含む単一のスレッドが残るため、監査コンプライアンスは容易になります | [Glympse](https://about.gitlab.com/customers/glympse/) の監査担当者は、20 年のキャリアの中で他のどの企業よりも速くセキュリティ問題を是正していると指摘しました。Glympse は 2 週間という 1 スプリント内に、GitLab の CI テンプレートを使ってすべてのリポジトリにセキュリティジョブを実装できました。 | [![Manage Compliance with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Manage Compliance with GitLab](https://youtu.be/QV2dIocn-hk) |
| **カバレッジガイド付きファズテスト** | GitLab はソースコードからのコンテキスト情報を活用してファズテストの精度を高めるとともに、ファズテストのクラッシュ結果を脆弱なコード領域に直接相関させるのに役立ちます。これにより初期ファズテストからクラッシュ、脆弱領域の更新までのサイクルタイムが劇的に改善します。 | **-** | [![Finding Bugs with Coverage Guided Fuzz Testing](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Finding Bugs with Coverage Guided Fuzz Testing](https://youtu.be/4ROYvNfRZVU) |
| **オフライン環境** | GitLab はオフラインまたは限定接続環境で動作する様々なスキャナーを提供します。この機能により、オフライン環境にあるコードのセキュリティ脆弱性を検出できます。 | **-** | [![Running GitLab Security Scans in Limited Connectivity and Offline Environments](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Running GitLab Security Scans in Limited Connectivity and Offline Environments](https://youtu.be/FoLmRvTcOAY) |

### GitLab DevOps プラットフォームが DevSecOps の達成にどう役立つか

**シンプルさ／効率**

- すべてのコードはコミット時にセキュリティ脅威がないかテストされ、追加コストなしに、修復に対する明確な説明責任を提供します。
- 開発者はそのコードで作業中に修復するか、ワンクリックで Issue を作成できます。
- 脆弱性はソフトウェア開発の副産物として記録され、セキュリティが管理でき、より良いコラボレーションのための単一の情報源となります。
- 単一プラットフォームにより、DevOps パイプライン全体でポイントソリューションを購入・統合・保守するコストと労力を回避できます。

**可視性**

- セキュリティ専門家向けダッシュボードは、マージ時に解決されない脆弱性への早期インサイトを提供します。
- 単一プラットフォームにより、組織は SDLC 全体で誰が何をいつどこで変更したかを把握できます。

**制御**

- 一貫性、コンプライアンス、簡素化された監査のために、すべてのパイプラインにセキュリティポリシーを自動的に適用できます
- [ロールベースアクセス制御](https://docs.gitlab.com/ee/user/permissions.html) は職務分掌を提供し、悪意のある内部脅威や偶発的な事象から保護します
- 幅広い追加[コンプライアンス制御](https://docs.gitlab.com/ee/administration/compliance.html) は、ソフトウェア開発、提供、利用に対する優れたガバナンスを提供します。

### GitLab の優位性とは？

**プラットフォームアプローチ**。SDLC 全体に対する単一プラットフォームを持つことで、GitLab はセキュリティスキャンを組み込むシンプルさと、ポイントソリューションでは不可能なエンドツーエンドの可視性・制御を実現します。脆弱性はワンクリックでフォローアップ用の Issue にできます。修復ステータスは常に明白です。コードの変更と、コードが依存するクラウドネイティブ環境の変更が追跡されます。GitLab を使えば、アプリセキュリティとチケッティング、CI/CD などの間に追加の統合は不要です。

**DevOps プロセスとの整合性**。主にセキュリティ専門家による使用を想定した従来のアプリケーションセキュリティツールとは異なり、GitLab のセキュリティスキャンは開発者が活動する CI/CD ワークフローに組み込まれています。開発サイクルの早い段階で開発者が脆弱性を特定し排除できるようにします。同時に、開発者によって解決されなかった脆弱性をプロジェクト・グループ横断で評価・トリアージ・管理する能力をセキュリティ専門家に提供します。

**現代的なアプリケーションに包括的**。GitLab Ultimate は SAST、DAST、Dependency Scanning（あらゆるソフトウェアセキュリティプログラムにとってのテーブルステーク）に加え、今日のクラウドネイティブアプリケーションに不可欠な包括的なスキャンを含みます。スキャンには Infrastructure-as-Code (IaC)、API、コンテナ、Kubernetes クラスターイメージ、ファズテストが含まれます。これらはすべて、ソフトウェアサプライチェーンの一部として保護すべき新しい攻撃面を表しています。

**一貫性と制御**。自動スキャンに加えて、開発者が速く、しかし安全に走れるガードレールを提供するためにポリシーを自動化することも重要です。コンプライアンス用の共通制御、承認ルール、中央管理されるコンプライアンスパイプラインワークフローはすべて連携してソフトウェアサプライチェーンの保護に役立ちます。

## メッセージハウス

DevSecOps の[メッセージハウス](message-house/) は、ユースケースの価値と差別化要因を記述・議論するための構造を提供します。

## 競合比較

[他のセキュリティツールとの比較](https://about.gitlab.com/why-gitlab/) をご覧ください。

ガバナンスの比較:

1. 職務分掌のためのロールベースアクセス制御 (RBAC)。競合製品のロールはより広範で、人物が役割を変えると権限を手動で変更する必要があります。なぜ重要なのでしょうか？ 本番にプッシュする権限を持つ人が降格や別グループに移動した場合、内部脅威を避けるために権限を自動的に変更したいでしょう。
1. 当社のワークフローは MR 承認内にコンプライアンスを含めます。スピードに影響する手動チェックは不要です（実質、コンプライアンスもシフトレフトしています）。
1. [外部ステータスチェック](https://docs.gitlab.com/ee/user/project/merge_requests/status_checks.html) は規制業界にとって重要な機能です。変更は承認され、所定の期限内に本番にプッシュする必要があります。遅延が発生すると承認プロセスをやり直す必要があるかもしれません。
1. GitLab はプロジェクトとグループを持ち、プロジェクトはグループからポリシーを継承します。競合は GitLab ほど柔軟にポリシーを構造化できません。エンタープライズユーザーにとって重要な機能です。例として、グループレベルのランナーが挙げられます。
1. コンプライアンスパイプラインにより、GitLab ユーザーはコンプライアンスフレームワーク（PCI、HIPPA など）を選択でき、それらのポリシーが使われ、開発者はそれを無効化できません（RBAC のため）

## ティアごとの主要価値

### Free と Premium

**なぜ DevSecOps に GitLab Free または Premium を選ぶのか？** セキュリティはすべての人にとって重要であり、私たちは完全にセキュアでコンプライアントな SDLC への障壁を下げることに尽力しています。そのために、Brakeman SAST スキャンと Secret Detection を Free に移行し、すべての製品ティアの開発者がソースコードを既知の脆弱性についてスキャンできるようにしました。

**Free / Premium の主要 DevSecOps 機能:**

- [静的アプリケーションセキュリティテスト](https://docs.gitlab.com/ee/user/application_security/sast/) - 静的コードを評価して潜在的なセキュリティ問題をチェック
- [Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) - シークレットや認証情報の漏洩を回避し、悪用される可能性を防止

### Ultimate

**なぜ DevSecOps に GitLab Ultimate を選ぶのか？** エンタープライズレベルのアプリケーションセキュリティ機能で高度な DevOps 成熟度を達成。

- プロジェクト、グループ、インスタンスレベルでの脆弱性レポートと Security Dashboard による脆弱性管理は、SDLC のより早い段階でアプリケーションリスクへの可視性を提供し、修復ステータスへの可視性も提供します。
- [マージリクエストにおけるセキュリティ承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#security-approvals-in-merge-requests)
- [GitLab Secure](https://docs.gitlab.com/ee/user/application_security/) は、開発者が脆弱性を早期に発見・修正できるようにシフトレフトを支援します。多面的なスキャンには SAST、DAST、Container Scanning、Dependency Scanning、Secrets Detection、カバレッジガイド付きファズテスト、API ファズテスト、License Compliance チェックが含まれ、すべて GitLab マージリクエスト CI パイプライン内で行われ、結果はコードコミット時点で開発者に提供されます。脆弱性の発見項目は実行可能で、開発者がコードに取り組んでいる間に修復アドバイスを提供します。
- より多くのエンタープライズレベルのコンプライアンス制御

加えて、Ultimate のメリットを享受できます。

- エンタープライズ級の優先サポートには、24 時間 365 日のアップタイムサポート、専任 Customer Success Manager (CSM)、アップグレード支援が含まれます。
- CI パイプラインにセキュリティとコンプライアンスを組み込み。
- 知的財産の保護と、無料 Guest ユーザーへのアクセス。

**Ultimate の主要 DevSecOps 機能:**

- [動的アプリケーションセキュリティテスト](https://docs.gitlab.com/ee/user/application_security/dast/) - Review App を分析して潜在的なセキュリティ問題を特定
- [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) - サードパーティ依存関係を評価して潜在的なセキュリティ問題を特定
- [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/) - Docker イメージを分析して潜在的なセキュリティ問題をチェック
- [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) - プロジェクトのセキュリティステータスを可視化
- [脆弱性管理](/handbook/security/product-security/vulnerability-management/)
- [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_scanning_of_cyclonedx_files/) - プロジェクトに含まれる新しいソフトウェアライセンスの存在を特定し、プロジェクト依存関係を追跡。特定ライセンスの組み込みを承認・拒否
- [Compliance Dashboard](https://docs.gitlab.com/ee/user/compliance/compliance_center/) - マージリクエストが承認されたか、誰が承認したかを確認

## 技術パートナーシップ

私たちは主要業界ベンダーと提携し、GitLab がお客様のニーズに対応し市場要件を満たす能力を拡張しています。

[スキャン結果を統合](https://docs.gitlab.com/ee/development/integrations/secure.html) し、GitLab Security Dashboard と GitLab CI パイプラインに統合した最初のパートナーの一つが [WhiteSource](https://www.mend.io/) です。

- [約 200 の追加言語](https://www.mend.io/blog/is-one-programming-language-more-secure/) にスキャン言語サポートを拡張し、より深い依存関係インサイトを提供します。
- [GitLab 内での WhiteSource の使い方](https://docs.mend.io/integrations/latest/mend-for-gitlab) と [その他](https://about.gitlab.com/blog/2020/01/14/whitesource-gitlab-security-integration/) について詳しく学びましょう。
- 始めるには [![Dependency Scanning with GitLab and WhiteSource](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/youtube_social_icon_red-32x23.png) Dependency Scanning with GitLab and WhiteSource](https://www.youtube.com/watch?v=yJpE_ACt9og) をご覧ください。

技術パートナーのより完全なリストは [セキュリティパートナーページ](https://about.gitlab.com/partners/technology-partners/#security) でご覧いただけます。

あなたまたはお客様が GitLab に統合したいサードパーティをお持ちの場合は、手順について [パートナー統合ページ](https://about.gitlab.com/partners/technology-partners/integrate/) をご紹介ください。

## DevSecOps ソリューションを売る

## 顧客向けスライド

- [Security customer presentation](https://docs.google.com/presentation/d/1WHTyUDOMuSVK9uK7hhSIQ_JbeUbo7k5AW3D6WwBReOg/edit?usp=sharing)

## ディスカバリー質問

以下のディスカバリー質問は、現在 Secure/Protect に GitLab を使用していない見込み客やお客様と話す際の機会発見に役立ちます。トピックや切り口で分類されています。**すべてを使おうとせず、お客様に最も関連性が高いものだけを選んでください。** プロセスを深掘りできるほど、GitLab を使うメリットを多く示せる可能性が高くなります。ぜひ追加の質問も貢献してください！

**方向性を探る初期プローブ。痛みはどこにあるか？**

アジャイル DevOps ソフトウェア開発にアプリケーションセキュリティテストを統合するのは難しく、潜在的な課題が多くあります。次の 6 つの質問で、最も懸念されている領域を少し探ってから、以下でそれらのトピックをさらに深く掘り下げてください。

1. セキュリティ脆弱性の発見 - セキュリティスキャンは反復的なコーディング速度に追いつけていますか？ セキュリティスキャンを待つためにプロジェクトが停止する頻度はどの程度ですか？
2. コラボレーション／可視性 - dev と sec の間に摩擦はありますか？ SDLC の任意の時点でセキュリティリスクを可視化できますか？
3. 修復 - sec が見つけたものを dev が行うべきことに翻訳し、それが行われたかどうか追跡することにどれだけ時間が浪費されていますか？ セキュリティ修復のステータスを素早く把握できますか？
4. DevOps 環境におけるリスク管理 - 現在コードの何 % をスキャンしていますか？ 攻撃者が侵入し横移動しやすい穴はありますか？ コード全体をスキャンするには現在いくらコストが増えますか？
5. ポリシー自動化 - セキュリティ要件が開発プロセスに組み込まれた状態でセキュリティポリシーが自動化されていますか？ それともほとんどのプロジェクトは毎回少しずつ異なる方法でセキュア化されていますか？
6. ツール - 御社はアプリケーションセキュリティの改善に短期的または長期的に投資していますか？ 明確に定義された戦略やタイムラインはありますか？ アプリセキュリティツールを DevOps ツールチェーンに統合する取り組みをしていますか？

C レベルと話す際は、ガバナンスと制御の課題について尋ねてください。

**1. セキュリティ脆弱性の発見**

- 脆弱性発見の主要手段としてペネトレーションテストにどの程度頼っていますか？（自動化が少ないことを示す。当社のすぐに使えるスキャンが素早く始める助けになる）
- DevOps プロセス内でアプリセキュリティテストを自動化していますか？ もう少し詳しく教えていただけますか？
- どのアプリケーションセキュリティスキャンが最も重要ですか？（SAST、DAST、IAST、Dependency Scanning、Container Scanning、Secrets Detection、License Compliance？ モバイルアプリテスト？ ファズテスト？） 多層防御のために複数タイプのスキャンを実行できることに価値はありますか？ そうしていない場合、何が妨げていますか？
- 開発者が自分で脆弱性を見つけて修正できるようにするためにどのようなステップを取っていますか？ スキャン結果は CI パイプラインにありますか？
- コードがコーダーの手から離れる前に、開発者がより多くの脆弱性を自分で見つけて修正できるとしたら、どれほどの価値がありますか？
- 開発者を助けるためにセキュリティ「スペルチェッカー」を使っているなら、どれくらい効果的ですか？ コードがマージされた後でも静的テストで脆弱性を見つけていますか？（要点はこれだけでは十分でないということ）

**2. コラボレーション／可視性**

- チーム間の非効率な引き継ぎ、システム横断的な可視性の欠如、計画と検討の欠如によりプロジェクトが遅延していますか？
- セキュリティツールの発見項目、計画／開発ツール、Issue 追跡の間で翻訳または調整するのに時間が失われていますか？
- セキュリティに対する責任とそれを向上させる能力の間に緊張がありますか？
- 脆弱性を見つけて管理するためにセキュリティと開発の両方に単一の情報源があれば、プロセスはどのように簡素化できますか？
- 開発者とセキュリティの両方が、脆弱性がコード内のどこに存在するか、誰が作成したか、取られたアクション（Issue 作成、却下、未解決）、修復ステータスを簡単に追跡できますか？ この情報を入手するのにどれくらい時間がかかりますか？

**3. 修復の効率**

- 脆弱性が修復可能な開発者に届くまでに何ステップ必要ですか？ 開発とセキュリティの間のこれらのステップにどれくらい時間が浪費されていますか？
- もしコードに取り組んでいる間に見つかれば、開発者がすぐに修復できる脆弱性は何 % だと思いますか？ それがもっと多ければ、時間とコストを節約できますか？

**4. リスク管理**

- 主に OWASP Top 10 を懸念していますか？ コード変更ごとに OWASP Top 10 を見つけられたら？ また開発ワークフローを整理して、過去の取り組みからの技術的負債ではなく、今作成したばかりの脆弱性に集中できるようにすることで、新しい技術的負債の作成を避けられますか？ それで新しい技術的負債を回避し、リスクを低減するのに役立ちますか？
- Critical と High 脆弱性の修復に集中していますか？ Medium と Low 脆弱性の修復はどのくらいですか？ ほとんどのエクスプロイトは中リスク脆弱性に対するものだとご存知ですか？ 開発者が作成された各脆弱性を発見して修正するのを助けることができたら？
- 現在コードの何 % をスキャンしていますか？ 攻撃者が侵入し横移動しやすい穴はありますか？ コード全体をスキャンするには現在いくらコストが増えますか？
- コンテナ、オーケストレーター、マイクロサービス／API を使用している場合、それらの脆弱性をどのようにスキャンし、本番中にどのように監視していますか？
- 修復が必要として見つかった脆弱性のうち、実際に修復される割合は何 % ですか？ どのくらい速く（平均修復時間）？
- 見つかった脆弱性を開発者がどのように扱ったかを確認できますか？ ライフサイクルの早い段階で脆弱性とそのリスクへの可視性があれば価値がありますか？ これはセキュリティ監査に役立ちますか？
- セキュリティチームの時間のどのくらいが、脆弱性の追跡、トリアージ、修復が行われたか確認するフォローアップに費やされていますか？

**5. ポリシー自動化**

- 自動化はセキュリティ標準を強制していますか？ セキュリティ要件が開発プロセスに組み込まれた状態でセキュリティポリシーが自動化されていますか？ それともほとんどのプロジェクトは毎回少しずつ異なる方法でセキュア化されていますか？ どのくらい手動介入が必要ですか？
- ポリシーへのコンプライアンスとドリフト／例外を評価することはどれくらい難しいですか？
- コンプライアンスは定期的に評価され、例外がレビューされるべきです。過度に厳格なポリシーを自動化することはビジネス目標を損ね、現実的に達成できないかもしれないため、コンプライアンスと効率のバランスを取ることが重要です。
  - アクセス制御、レポート、変更ログへの可視性はありますか？
  - ポリシー例外がどのくらいの頻度で承認されているかを把握していますか？

**6. ツール**

- いくつの異なるセキュリティツールを使用していますか？（どれですか？）
- セキュリティツールを CI パイプラインに統合してセキュリティスキャンが自動的に走るようにしていますか、それとも手動でキックオフしていますか？ 統合は脆弱ですか？ 複雑ですか？ 時間を要しますか？ そのプロセスはどのくらいの頻度で更新が必要ですか？ 新しいプロジェクトのセットアップにはどれくらいの労力が必要ですか？ スキャンが一貫して適用されるようどう保証していますか？ 計画された作業がセキュリティ統合の修正や保守のためにどのくらいの頻度で中断されますか？
- どのセキュリティスキャンが脆弱性の発見項目を直接開発者に提供できますか？ 機能ブランチをスキャンできますか？（コードがマージされる前に） コード行とどの開発者が脆弱性を作成したかを確認できますか？ 脆弱性は自動的に作業チケット／Issue 作成を起動しますか？
- チームは大規模な CI パイプライン内でセキュリティテストを自動化する障害やハードルに直面したことがありますか？
- アプリセキュリティツールのコストはどのくらい予測可能ですか？ より多くの脆弱性を見つけたり、より多くのアプリをテストすると、コストが増えますか？

## 想定される反論

**既存ツールがあります。あなたのスキャンとどう比較しますか？**

 GitLab のスキャナーは実績のあるオープンソーススキャナーと独自スキャナーを組み合わせて使用しています。

脆弱性を見つけることは重要ですが、結果に対して何をするかも同じくらい重要です。検討してください。

- 開発者は、コードコミットごと、または少なくとも他とコードをマージする前に、自分が作成した脆弱性を見られますか？
- スキャンの発見項目は開発者のネイティブワークフロー内で実行可能ですか？
- プラグイン管理と互換性が継続的な懸念事項ですか？

また、これらのツールのコストはどのくらい予測可能ですか？ より多くの脆弱性を見つけたり、より多くのアプリをテストすると、コストが増えますか？ より多くのテストを実質的にペナルティとして課されていますか？ DevOps が[マイクロサービス](https://about.gitlab.com/topics/microservices/) にアプリを分割し、より頻繁なパイプラインを実行することと、それはどう機能しますか？ 実際、Gartner はアプリセキュリティプログラムを安価にセットアップする方法に関するレポートで当社を取り上げました（[7 Tips to Set Up an Application Security Program Without Breaking the Bank](https://www.gartner.com/document/3986206)）。

**Fortify、Veracode、Synopsys を使用している場合**

- スキャン時間はソフトウェアの反復に追いついていますか、それとも反復を阻害していますか？
- すべてのコード変更をスキャンできますか？
- 発見項目の数に圧倒されていませんか？ すべてが修復されていますか？ そうでない場合、どのように優先順位付けし、どのくらい時間／労力が必要ですか？ もし開発者が、セキュリティと同じガイドラインを使って優先順位付けし、自身が作成した脆弱性を修正できたら？
- すべてのコードをスキャンする余裕がありますか？

**Snyk、WhiteSource、その他のポイントソリューションを使用している場合**

- API とコンテナをどのようにスキャンしていますか？ 本番中に監視できますか？
- すべてのコードをスキャンしていますか？ コミットごとに？ 開発者は修復に必要な情報をすべて持っていますか？

**GitHub Actions や Azure DevOps を使用している場合**

- すべてのプロジェクトでセキュリティスキャンをセットアップするのにどのくらいの労力が必要ですか？
- すべてのプロジェクト／パイプラインでセキュリティスキャンのポリシー／標準を強制することはどのくらい難しいですか？
- ロールベースの権限を管理することはどのくらい難しいですか？
- ガバナンス制御は必要なだけきめ細かいですか？
- 市場で使用されているすべてのツールにわたって、誰が何をいつどこで変更したかを可視化できますか？

**Ultimate のコスト差を正当化できません。**

NIST は 2002 年に[セキュリティをシフトレフトすることによるコスト削減](https://www.nist.gov/system/files/documents/director/planning/report02-3.pdf) を実証しました。現在どこまでシフトレフトしていますか？ 仮に、脆弱性の 50% が開発者によって発見可能で、その半分がコードが開発者の手から離れる前に修正できるとしたら、コストとリスクエクスポージャーにとってどんな価値がありますか？ 以下の潜在的なメリットを検討しましょう。

- 優先順位付け、精査、トリアージ、追跡すべき脆弱性が少なくなる
- 関連するリスクエクスポージャーを持つ脆弱性が少なくなる
- 後付けでセキュリティ欠陥を修正するためにビジネスイノベーションを止める必要が減る

他のアプリセキュリティツールのコストはどのくらい予測可能ですか？ より多くの脆弱性を見つけたり、より多くのアプリをテストすると、コストが増えますか？ より多くのテストを実質的にペナルティとして課されていますか？ DevOps がアプリをマイクロサービスに分割し、より頻繁なパイプラインを実行することと、それはどう機能しますか？ 今後すべてのコード変更をスキャンする価値はどのくらいですか？ 時間の経過に伴う技術的負債への影響は？ 他のツールですべてのソフトウェア変更をスキャンするにはいくらかかりますか？

## 証跡 - 顧客

### 引用とレビュー

GitLab のお客様 HERE は、GitLab を使ってシフトレフトした[体験を共有](https://www.here.com/learn/blog/shifting-security-left-in-the-here-platform) し、[GitLab Commit 2021](https://learn.gitlab.com/commit-2021/teaching-old-cicd-ne?lx=UqDHIY) でも講演しました。

GitLab のお客様 Arctic Engine は、GitLab のファズテストを使って未知の脆弱性を発見した[体験を共有](https://about.gitlab.com/blog/2020/08/19/arctic-engine-fuzz-testing-blog/) しています。

#### Gartner Peer Insights

*Gartner Peer Insights のレビューは、個々のエンドユーザーが自身の経験に基づいて述べた主観的な意見であり、Gartner またはその関連会社の見解を代表するものではありません。明らかな誤字は修正しています。*

「GitLab Application Security Testing は、ソースコードを分析して脆弱性を GitLab Security Dashboard に列挙します。Docker セットアップで簡単に構成できます。プロジェクト内で新しいマージリクエストが作成された直後に、完全な脆弱性レポートを表示します。コード内の潜在的なリスクを列挙するのに加え、Critical、High、Low、Medium といった重大度で脆弱性を優先順位付けし、チームが何を最初に計画・集中すべきかを把握できるようにします。」
>
> - Sr. Software Engineer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-security-testing/vendor/gitlab/product/gitlab/review/view/1307149)

「[GitLab] のアプリケーションテスト機能は、アプリケーションの脆弱性スキャンに非常に役立ちます。複数のテストが利用可能です。私たちは主に、Docker コンテナ、依存関係、ソースコード、Web アプリケーションの脆弱性をスキャンするために使用しています。」
>
> - Native Android Application Developer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-security-testing/vendor/gitlab/product/gitlab/review/view/1320427)

#### G2

- GitLab は [G2 Grid® for Static Application Security Testing (SAST)](https://www.g2.com/categories/static-application-security-testing-sast/) のリーダーです
- GitLab は [G2 Grid® for Dynamic Application Security Testing (DAST)](https://www.g2.com/categories/dynamic-application-security-testing-dast/) のリーダーです

### 顧客ケーススタディ

**[HackerOne](https://about.gitlab.com/customers/hackerone/)**

- **課題:** セキュリティを伴うスピード
- **ソリューション:** GitLab Ultimate
- **結果:** GitLab セキュリティで 5 倍のデプロイ速度

**[Glympse](https://about.gitlab.com/customers/glympse/)**

- **課題** 20 を超える異なるツールで構成された複雑な開発者技術スタックの保守と管理が困難。チームはアプリへのイノベーション出荷ではなく、ツール稼働の維持に週に数時間を費やしていた。
- **ソリューション:** GitLab Ultimate (SCM, CI, DevSecOps)
- **結果: 約 20 のツールを GitLab に統合し、セキュリティ監査担当者の経験上、他のどの企業よりも速くセキュリティ問題を是正。
- **販売セグメント:** SMB

**[BI Worldwide](https://about.gitlab.com/customers/bi_worldwide/)**

- **課題:** 何年も前に作成された大規模なレガシーコードベースを持っていた。手動テストとオンプレミスインフラへの手動デプロイを排除（または大幅に削減）したかった。
- **ソリューション:** GitLab Ultimate (SCM, CI, DevSecOps)
- **結果:** **1 日 10 倍のデプロイ** ツールチェーンを簡素化し、以前の Git ツールから GitLab に移行。GitLab への移行の結果、コラボレーションとリリースペースの即座の改善が見られた。
- **販売セグメント:** ミッドマーケット

**[Chorus](https://about.gitlab.com/customers/chorus/)**

- **課題:** Chorus の創業者は最初から GitLab を使ってツールを構築。
- **ソリューション:** GitLab Ultimate (SCM, CI, DevSecOps)
- **結果:** **6 週間の本番サイクルが 1 週間に短縮** SOC2 コンプライアンスの最近の監査中、監査担当者は Chorus が見たことのある中で最速の監査プロセスを持っており、その大部分が GitLab の機能によるものだと述べた。
- **販売セグメント:** SMB

### クロージングを支援するリファレンス

[紹介可能なセキュア顧客の SFDC レポート](https://gitlab.my.salesforce.com/a6l4M000000kDw2) 注意: 営業チームメンバーはこのレポートにアクセスできるはずです。アクセスできない場合は、[customer reference team](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact) に支援を求めてください。

## 採用ガイド

以下のセクションでは、CSM が機能の採用をリードするためのリソースを提供しますが、GitLab のステージとカテゴリーの採用に関心のある見込み客やお客様にも使用できます。

### Playbook の手順

- 最初の 6 つのディスカバリー質問から始めて、さらに掘り下げる領域を特定します。

### 採用推奨

GitLab の DevSecOps ワークフローを採用する道筋は、お客様の現状によって複数あります。次の図は採用シーケンスとシナリオ間の関係を示しています。

![Secure Adoption path](/images/handbook/customer-success/adoption-path-secure.png "Secure Adoption Path")

この表は、採用すべきユースケース、製品ドキュメントへのリンク、ユースケースに対応するサブスクリプションティアを示します。

| 機能 / シナリオ                                  |    Free   |    Premium  | Ultimate | Product Analytics | 備考                      |
| --------------------------------------------------- | :-------: | :-------: | :------: | :---------------: | :------------------------- |
| GitLab Flow を採用                                   |     X     |      X    |    X     |                   |                            |
| Auto DevOps を試す／活用                           | *Partial* | *Partial* |    X     |                   |                            |
| CI による自動テスト                           |     X     |     X     |    X     |                   |    すべてのティアで SAST のみ                        |
| Review App                                          |     X     |     X     |    X     |                   | CI/CD パイプラインで DAST を実行するために必要 |
| [マージリクエスト承認フロー / ルール](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html)                 |           |     X     |    X     |   counts.merged_merge_requests_using_approval_rules            |                            |
| 保護環境                              |           |     X     |    X     |                   |                            |
| [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/) |     X     |     X     |    X     |  container_registry_enabled |                            |
| [Package Registry](https://docs.gitlab.com/ee/user/packages/package_registry/) |     X     |     X     |    X     | counts_monthly.packages |                            |
| [SAST (静的アプリケーションセキュリティテスト)](https://docs.gitlab.com/ee/user/application_security/sast/)                              |     X     |     X     |    X     | user_sast_jobs                | |
| [Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)                                            |     X     |     X     |    X     | user_secret_detection_jobs    | |
| [DAST (動的アプリケーションセキュリティテスト)](https://docs.gitlab.com/ee/user/application_security/dast/)                             |           |           |    X     | user_dast_jobs                | |
| [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)                                        |           |           |    X     | user_container_scanning_jobs  | |
| [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)                                      |           |           |    X     | user_dependency_scanning_jobs | |
| [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_scanning_of_cyclonedx_files/)                                                  |           |           |    X     | user_license_management_jobs  | |
| [API Fuzzing](https://docs.gitlab.com/ee/user/application_security/api_fuzzing/)                                                      |           |           |    X     | user_api_fuzzing_jobs, user_api_fuzzing_dnd_jobs on self-managed | |
| [Coverage Fuzzing](https://docs.gitlab.com/ee/user/application_security/coverage_fuzzing/)                                            |          |        |    X     | user_coverage_fuzzing_jobs    | |
| [セキュリティ承認](https://docs.gitlab.com/ee/user/application_security/#security-approvals-in-merge-requests)                      |           |           |    X     |                   |                            |

この表には、GitLab の自己管理型およびクラウド製品に関連する Free／コミュニティおよび有償ティアが含まれます。

- F/C = Free
- S/P = Premium
- G/U = Ultimate

### 追加のドキュメントリンク

- [From SCM and CI to Security](https://docs.google.com/presentation/d/1Oq8znDkHrgGK5Xe5D23SdiRLt33OIJZ30OWCHNNDV14/edit?usp=sharing) *(GitLab 内部限定)*
- [GitLab セキュリティコンプライアンス制御](/handbook/security/security-assurance/security-compliance/sec-controls/)
- [GitLab セキュリティプラクティス](/handbook/security/)
- [セキュリティプランニング](/handbook/security/planning/)

### イネーブルメントとトレーニング

以下では、イネーブルメントとトレーニングの動画とコンテンツへのリンクを提供します。

- [Handling Security Audits](https://www.youtube.com/watch?v=ziIJIec4w0g)
- [Application Security at High Velocity](https://www.youtube.com/watch?v=VN6Z6qtlMjg)
- [Adding Security to your pipelines](https://www.youtube.com/watch?v=Fd5DhebtScg&t=3s)

### プロフェッショナルサービスの提供

GitLab はお客様とパートナーに対し [様々なパッケージ済みおよびカスタムサービス](https://about.gitlab.com/services/) を提供しています。本ソリューションに特化したサービスは以下のとおりです。その他のサービスについては、[フルサービスカタログ](https://about.gitlab.com/services/catalog/) をご覧ください。

- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals)（DevOps ライフサイクル全段階）
- [GitLab CI/CD Training](https://university.gitlab.com/pages/ci-cd-training/)
- [Integration Services](https://about.gitlab.com/services/catalog/ )

## リソース

### ホワイトペーパー

- [A Seismic Shift Left](https://about.gitlab.com/resources/downloads/gitlab-seismic-shift-in-application-security-whitepaper.pdf)

### eBook: Ten Steps Every CISO Should Take to Secure Next-gen Applications

- [Gated](https://lnkd.in/er8tjQg)
- [Ungated](https://drive.google.com/file/d/0B-ZpQfvLs-2AVFI5VmNybTBvWWttRWxENWpGVnlNbVBFODNZ/view?usp=sharing)

### サードパーティ商用スキャナーとの統合

- [WhiteSource](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/enablement/security-integrations-whitesource/)

### ブログ

- [How application security engineers can use GitLab to secure their projects](https://about.gitlab.com/blog/2020/07/07/secure-stage-for-appsec/)
- [How to capitalize on GitLab Security tools with external CI](https://docs.gitlab.com/ee/integration/jenkins.html)

### その他の DevSecOps 動画

- [Deep Dive into a Security demo](https://youtu.be/k4vEJnGYy84)
- [DevSecOps の成功には統合が鍵](https://about.gitlab.com/blog/2018/09/11/what-south-africa-taught-me-about-cybersecurity/) を参照

### クリックスルー & ライブデモ

- [All Marketing Click Through Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs)
- [All Marketing Live Demos](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#live-instructions)

### ロードマップ

- [Secure and Govern Roadmap](https://docs.google.com/presentation/d/1XcOmwUvaSEYhj87dvHj05l3t-JuBEcLaFdhSEDvX4EY/edit#slide=id.g1364cbe562a_0_269)

## ソリューションアーキテクト向け技術リソース

お客様や見込み客には、好みのスキャンツールの使用や、ツールチェーンの他の部分との統合に関する独自の要件があることが多いです。あなたまたはお客様が GitLab に統合したいサードパーティをお持ちの場合は、手順について [パートナー統合ページ](https://about.gitlab.com/partners/technology-partners/integrate/) をご紹介ください。GitLab はお客様のすべてのニーズを満たす単一プラットフォームとなり得ますが、移行を支援するオンランプや GitLab を購入する前の統合の証明が必要なことが多いです。以下のリソースが役立つ場合があります。
**注意:** GitLab が[公式に認識](https://about.gitlab.com/partners/technology-partners/) していないサードパーティ製品の統合をユーザーに期待されるような立場に GitLab を置くために、これらを使用しないでください。

- [Using OSS Review as your default License scanner](https://youtu.be/dNmH_kYJ34g)
- [Integrating GitLab with Sonarqube](https://www.youtube.com/watch?time_continue=1&v=OItsDDzIP8g)

## バイヤーズジャーニー

[バイヤーズジャーニーの主要アセットのインベントリ](https://docs.google.com/spreadsheets/d/15-yai90Ol7k4D2exHXqHXtFastR6FcE6HABD_GisAl8/edit#gid=0)
