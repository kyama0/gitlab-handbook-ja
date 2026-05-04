---
title: "DevOps ソリューションリソース: ソフトウェアコンプライアンス"
description: "GitLab がソフトウェアコンプライアンスソリューションにどう取り組むか、メッセージングとマーケティングおよびセールスを支援する主要リソース。"
upstream_path: /handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/compliance/
upstream_sha: d0a19ab78fc5e0d322868c8f35ab8f81e761bd21
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
---

**GitLab のソフトウェアコンプライアンスケイパビリティに関するお客様向けの概要をお探しですか？ [Compliance Solution](https://about.gitlab.com/solutions/compliance/) を参照してください**

**GitLab フィールドチームは最新情報のために [Security and Governance highspot ページ](https://gitlab.highspot.com/items/61f415455b20d8eb224750a3) を参照してください**

以下のページは、DevSecOps を中心とした GitLab の go-to-market の取り組みについて、セールスとマーケティングを単一の信頼できる情報源に整合させることを目的としています。

### 連絡先

|     プロダクトマーケティング    |    デベロッパーアドボケイト    |
| ------------------------ | ------------------------- |
| Brian Mason ( @BrianMason )  | Fernando Diaz ( @fjdiaz ) |

## 市場の視点

## ソフトウェアコンプライアンス

ソフトウェアコンプライアンスソリューションは、ソフトウェアサプライチェーンの保護と、一般的な業界規制への準拠を簡素化しながら、同時にソフトウェア速度を向上させたいお客様向けです。

GitLab のプラットフォームアプローチは、DevOps プラットフォーム内にセキュリティとコンプライアンスをシームレスに組み込み、シンプルさ、可視性、コントロールを提供します。

### なぜ今コンプライアンスが新たな関心事なのか？

コンプライアンスと監査可能性は常に重要でしたが、ソフトウェアサプライチェーンに対する高プロファイルの攻撃と、それに関連する米国大統領の[サイバーセキュリティを向上させる大統領令](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/)に伴い、これらの要件はより大きな注目を集めています。この大統領令（EO）は、NIST に対して 2021 年 11 月 8 日までにソフトウェアサプライチェーンセキュリティを強化するための予備ガイドラインを発行するよう指示しています。NIST（National Institute of Standards and Technology）からさらに多くのガイダンスが提供されることが見込まれています。[この記事](https://www.insideprivacy.com/cybersecurity-2/october-2021-developments-under-president-bidens-cybersecurity-executive-order/) は、なぜそれがソフトウェアを開発する誰にとっても重要かを明確に説明しています。記事は、EO は「米国政府に直接適用される」一方で、「米国政府機関向けに確立されている標準が、さまざまな業界が NIST サイバーセキュリティフレームワークをセキュリティコントロールベースラインとして採用するのと同様に、ソフトウェアを開発または取得するすべての組織の業界標準として採用される可能性がある」と述べています。

アプリケーションセキュリティテストは依然としてコンプライアンスの基礎部分ですが、今やソフトウェアファクトリー全体にわたる可視性とコントロールが以前にも増してさらに最重要となっており、複雑な DevOps ツールチェーンによってこのケイパビリティの実現は困難になっています。

### 望むビジネスアウトカム

- 業界の規制要件を満たす - 効率的に、開発速度を遅くすることなく
- ソフトウェアサプライチェーンを、より良いエンドツーエンドのガバナンスでセキュアにし、セキュリティとコンプライアンスのリスクを軽減する

## ペルソナ

### ユーザーペルソナ

**[コンプライアンスマネージャー Cameron](/handbook/product/personas/#cameron-compliance-manager)** は、会社のすべての開発プロセスがコンプライアンスに準拠していることを確認する必要があります。ソフトウェア開発・デリバリーライフサイクルが生成するデータの量と、典型的な DevOps ツールチェーンの複雑さを考えると、監査目的でシステム間で行われたすべての必要なデータと変更を見つけ、集約し、レポートするのは困難です。彼は、SDLC 全体にわたってエンドツーエンドで誰が何を、どこで、いつ変更したかを簡単に確認できる必要があります。情報を素早く簡単に得て、エビデンス収集プロセスにかかる時間と混乱を減らすことが必要です。

**[ソフトウェア開発者 Sasha](/handbook/product/personas/#sasha-software-developer)** は主に MR パイプラインレポート内で GitLab を使用しています。開発者はコンプライアンスとセキュリティを気にしますが、コンプライアンス専門家になりたいわけではありません。コンプライアンスを保ちながら速く動くのに役立つケイパビリティはありがたいものです。

**[アプリケーションセキュリティエンジニア Amy](/handbook/product/personas/#amy-application-security-engineer)** はコンプライアンスポリシーの自動化とレポートを任されている可能性があるため、可能な限りシンプルで効率的、自動化されていることを望みます。Amy は、開発プロセス内（CI パイプラインなど）で適用されるポリシーをコントロールし、回避されないようにすることが難しいと感じています。実際、回避されたことに気付かないことさえあります。

### バイヤーペルソナ

**CTO や DevOps アーキテクチャの責任者** は、コンプライアンスが主要な推進要因の場合のバイヤーであることが多いです。

CTO のニーズに対応する重要なケイパビリティは [コンプライアンスパイプライン](https://docs.gitlab.com/ee/user/project/settings/index.html#compliance-pipeline-configuration) と [コンプライアントなワークフロー自動化](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation) です。CI パイプラインでスキャンとポリシーを規定し、個々の開発者がそれをバイパスできないようにする能力が必要です。

**セキュリティマネージャーまたは CISO（Sam の上司）** は、セキュリティが関与する場合の Ultimate ティアのバイヤーであることが多いです。

彼らの心をつかむ鍵は **シンプルさとコントロール** に焦点を当てることです

- 複雑さは CISO の主な不満の 1 つです。SDLC 全体にわたる可視性とコントロールを提供する 1 つのツールを使うことには価値があります。
- CISO は、進化する脅威、高プロファイルのサイバー攻撃、新しいコンプライアンス上の懸念、開発ツールスプロールの中で、コントロールを失っている、あるいは少なくともセキュアであることへのプレッシャーを感じている可能性が高いです。これらのソフトウェアリスクの管理は困難です。GitLab の単一プラットフォームは、必要なエンドツーエンドのシンプルさ、可視性、コントロールを提供します。

## 業界アナリストカバレッジ

アナリストはソフトウェアコンプライアンスの市場セグメントをまだ特定していません。ただし記事を執筆しています。Forrester は GitLab の 2021 年秋の Commit イベントで大統領令について語りました。

## 市場要件

| 市場要件 | 説明 | 典型的なケイパビリティ実現機能 | バリュー / ROI |
| ------ | ------ | ------ | ------ |
| 共通コンプライアンスコントロール |  ソフトウェア開発とデプロイメントプロセスの完全性を保護するために必要なコントロール | ロールベースアクセス、MR 承認、その他多数 | 監査とコンプライアンスを簡素化し、不遵守のリスクを軽減します。 |
| 自動ポリシー強制 | 自動化により監査負担を軽減できます。MR 内でポリシーを強制することで、ライフサイクルの早い段階で開発者が問題を解決できるよう、コンプライアンスを左にシフトします | パイプライン内でポリシーを強制するロックされた CI テンプレート | 後の手戻りを回避します。規制された業界では、承認された変更指示ウィンドウがあります。手戻りでそれを逃すと、変更管理プロセスを最初からやり直す必要があります。|
| 監査レポート | 監査イベントは自動的にキャプチャされレポートされるべきです。コード、コントロール、IaC への変更は SDLC 全体にわたってトレース可能で、監査イベントとしてキャプチャされるべきです。 | 監査イベント、監査レポート | 不遵守のリスクを軽減し、セキュリティまたはコンプライアンスインシデント後のルートコーズを効率的に特定できる |
| セキュリティガバナンス | このソリューションは、適切なリスクのみが取られるよう、コード変更に対してセキュリティポリシーを自動的に適用しなければなりません。リスクを表すアプリケーションの脆弱性は追跡、管理、レポートされます。このソリューションは、リスク、コンプライアンス、監査、プロセス改善機会を評価するためのセキュリティプラクティスの定期的なアセスメントを可能にしなければなりません（通常は教育目的）。 |  セキュリティポリシー自動化、リスクとコンプライアンスのレポート、監査レポート、さまざまなセキュリティメトリクスとプロセスレポート、脆弱性データベースと管理 | 効率的にリスクをモニタリング、管理、軽減します。例外を特定し、時間とともにポリシーを洗練させる能力。 |
| セキュリティガードレール（予防的 - CI/CD 前） | 予防的アプリケーションセキュリティは、ガードレールを使ってチームが最初からセキュアなものを一貫して構築できるよう支援します。 | 開発者がバイパスできないコンプライアンスパイプライン、事前承認されたコードライブラリ、すべてのサードパーティコードをカタログ化する自動発見。 | 新しい脆弱性の作成を防ぎます。 |

## GitLab ソリューション

## GitLab がどのように市場要件を満たすか

GitLab ソフトウェアコンプライアンスソリューション概要

<figure class="video_container">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/QV2dIocn-hk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

| 市場要件 | GitLab がどう実現するか | GitLab カテゴリ | デモ |
| ------ | ------ | ------ | ------ |
| 共通コンプライアンスコントロール |  GitLab は SDLC 全体で[多くの共通コントロール](https://docs.gitlab.com/ee/administration/compliance.html)、[監査イベント](https://docs.gitlab.com/ee/administration/audit_event_reports.html)、[コンプライアンス管理](https://about.gitlab.com/direction/software_supply_chain_security/compliance/compliance-management/) を提供します | Manage ステージ内のアクセスとコンプライアンス | |
| 自動ポリシー強制 | [セキュリティポリシー](https://docs.gitlab.com/ee/user/application_security/policies/#policy-management) は 1 か所で管理でき、[コンプライアントなワークフロー自動化](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation) は管理者がプロジェクト全体に容易にコンプライアンスポリシーを適用するのに役立ちます。 | Govern | [![コンプライアンスパイプライン](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) コンプライアンスパイプライン](https://www.youtube.com/watch?v=jKA_e_jimoI) |
| 監査レポート | GitLab は SDLC 全体で[監査イベント](https://docs.gitlab.com/ee/api/audit_events.html) を追跡し、[それらをレポート](https://docs.gitlab.com/ee/administration/audit_event_reports.html) します | Manage ステージ内のアクセスとコンプライアンス | |
| セキュリティガバナンス | セキュリティポリシー自動化、[コンプライアントなワークフロー自動化](https://docs.gitlab.com/ee/administration/compliance.html#compliant-workflow-automation)、[セキュリティダッシュボード](https://docs.gitlab.com/ee/user/application_security/security_dashboard/) と [脆弱性レポート](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/)、[MR 承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)、[License compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) | Govern, Secure ||
| セキュリティガードレール（予防的 - CI/CD 前） | GitLab は他のベンダーが提供しているような事前承認された依存関係の提供にはまだ及びませんが、[BOM 機能](https://docs.gitlab.com/ee/user/application_security/dependency_list/) を提供しています | Govern, Secure | [![GitLab でアプリケーション依存関係を管理](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) GitLab でアプリケーション依存関係を管理](https://youtu.be/scNS4UuPvLI)|

## GitLab 差別化要因

| 差別化要因 | 説明 |
| ------ | ------ |
| DevOps ライフサイクル全体のための単一アプリケーション | 単一アプリケーションは複雑なインテグレーション、データのチョークポイント、ツールチェーンの保守を排除し、生産性を高めます |
| エンドツーエンドのインサイトと可視性 | GitLab の共通データモデルが DevOps ライフサイクル全体にわたるエンドツーエンドの可視性とトレーサビリティを実現し、データを自動的に相関・集約します |
| ソフトウェアをどこにでもデプロイ | GitLab はインフラ非依存（GCP、AWS、Azure、OpenShift、VMWare、On Prem、ベアメタルなどをサポート）であり、環境に関係なく一貫したワークフロー体験を提供します |
| 単一アプリケーションでリーディングな SCM と CI | DevOps ツールチェーンの背骨を 1 つのアプリケーションに持たせることで、コードレビューとコラボレーションが合理化されます（1 つのインターフェイス、1 つのユーザーモデル、1 つのデータモデル） |
| 組み込みのセキュリティとコンプライアンス | すぐに使えるセキュリティ機能（コードスキャン、依存関係スキャン、シークレット検出など）と、ポリシーコンプライアンスを促進する自動セキュリティテストと監査コントロールで、開発ライフサイクルのより早い段階にセキュリティテストを移動します |

## トップコンプライアンス差別化要因

| 差別化要因 | バリュー | デモ |
| ----------------- | ------------- | ------ |
| **セキュリティポリシーに基づく MR 承認** | セキュリティチームが事前に組織のセキュリティポリシーを適用し、コードがマージされる前にセキュリティ例外をレビュー/承認できるようにすることで、開発チームとセキュリティチームを近づけます | [![DevSecOps 概要に表示されるマージリクエスト承認](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) DevSecOps 概要に表示されるマージリクエスト承認](https://youtu.be/XnYstHObqlA?t=174) |
| **コンプライアンス管理** | GitLab は、単一データストアを通じて Dev、Sec、Ops に単一の信頼できる情報源を提供することで、コンプライアンスをより簡単にします。すべてが監査され、変更ごとに、すべての決定とアクションの完全な監査ログを含む単一スレッドが存在し、監査コンプライアンスをスムーズにします | [![GitLab でコンプライアンスを管理](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/youtube_social_icon_red-32x23.png) GitLab でコンプライアンスを管理](https://youtu.be/QV2dIocn-hk) |
| **コンプライアンスパイプライン** | 管理者はコンプライアンスフレームワークを選択してプロジェクトに適用できます。これは開発者がパイプラインに加えるどんな変更もオーバーライドします | [コンプライアンスパイプライン](https://www.youtube.com/watch?v=jKA_e_jimoI) |

## メッセージハウス

コンプライアンスのメッセージハウスは、ソフトウェアコンプライアンスソリューションのバリューと差別化要因を記述・議論する構造を提供します。

**トップメッセージ: GitLab は、エンドツーエンドの可視性/トレーサビリティを提供しながら開発プロセスとポリシーを自動化・標準化する単一のプラットフォームで、ソフトウェア開発のコントロールを取り戻すのに役立ちます。これにより、開発をより少ないリスクで速く進められます。**

GitLab DevOps プラットフォームアプローチは、監査とフォレンジックを簡素化しながら、より良い可視性とコントロールでコンプライアンスを達成するのに役立ちます。ガバナンスは、ポリシーを管理し、適用し、例外を評価し、ポリシーの効果を測定する 1 か所で簡素化されます。

- 単一のプラットフォームは、組織が SDLC 全体で誰が何を、どこで、いつ変更したかを確認できるようにします。
- コンプライアンスとセキュリティポリシーは、一貫性と簡素化された監査のために、すべてのパイプラインに自動的に適用できます
- [ロールベースアクセス制御](https://docs.gitlab.com/ee/user/permissions.html) は職務分掌を提供し、悪意のあるインサイダー脅威と偶発的なイベントから保護します
- [追加のコンプライアンスコントロール](https://docs.gitlab.com/ee/administration/compliance.html) の幅広さが、ソフトウェア開発、デリバリー、利用に対する優れたガバナンスを提供します

開発者はセキュリティ脆弱性とともに MR パイプラインでコンプライアンスの懸念を確認できるため、変更にコストや時間がかかる本番前まで待たずに、開発者がまだコードでイテレーションしている間にこれらを修正することもできます。

- コンプライアンスの懸念はコード変更と IaC で表示されます
- 開発者はコンプライアンスの懸念を特定するために別のツールを使う必要がありません
- コンプライアンスは開発プロセスの一部として扱われます。

## 競合比較

他の DevOps アプローチとの比較を確認

1. 職務分掌のためのロールベースアクセス制御（RBAC）。競合製品の役割はより広く、人が役割を変更すると権限を手動で変更する必要があります。なぜこれが重要なのか？ もし誰かが本番にプッシュするアクセス権を持っていて降格や別のグループへの異動があった場合、インサイダー脅威を回避するために権限を自動的に変更したいはずです。
1. 私たちのワークフローは MR 承認内にコンプライアンスを含みます。ベロシティに影響を与える手作業のチェックはありません。（要するに、私たちはコンプライアンスも左にシフトしています。）
1. [外部ステータスチェック](https://docs.gitlab.com/ee/user/project/merge_requests/status_checks.html) は規制された業界にとって重要な機能です。変更は承認され、所定の時間枠内で本番にプッシュされる必要があります。遅延は承認プロセスを最初からやり直すことを引き起こす可能性があります。
1. GitLab ではプロジェクトとグループがあり、プロジェクトはグループからポリシーを継承します。競合は GitLab ほど柔軟にポリシーを構造化できません。これはエンタープライズユーザーにとって重要な機能です。例として、グループレベルの Runner があります。
1. コンプライアンスパイプラインは、GitLab ユーザーがコンプライアンスフレームワーク（PCI、HIPPA など）を選択でき、それらのポリシーが使用される - そして開発者はそれを無効化できません（RBAC のため）

## ティア別キーバリュー

### Free と Premium

**Free/Premium のキーコンプライアンス機能:**

- [マージリクエストでのセキュリティ承認](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html#security-approvals-in-merge-requests) （Premium で利用可能）

加えて、一部のセキュリティスキャンは Free 層で利用可能です:

- [Static Application Security Testing](https://docs.gitlab.com/ee/user/application_security/sast/) - 静的コードを評価して潜在的なセキュリティ問題をチェック。
- [Secrets Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/) - 潜在的な悪用を防ぐために、シークレットと認証情報を露出させないようにする。
注: Free 層には、これらの結果を脆弱性レポートとダッシュボードに提供する機能は含まれません。生の結果が提供されます。

### Ultimate

**Ultimate のキーコンプライアンス機能:**

- [コンプライアントなワークフローとコンプライアンスパイプライン](https://docs.gitlab.com/ee/user/project/settings/index.html#compliance-pipeline-configuration) - プロジェクトにコンプライアンスフレームワークが割り当てられ、それに応じてポリシーが強制されます。これはコンプライアンスの機会を勝ち取るための重要なケイパビリティです！
- [コンプライアンスダッシュボード](https://docs.gitlab.com/ee/user/compliance/compliance_center/) - マージリクエストが承認されたかどうか、誰によって承認されたかを確認します。
- 2021 年米国大統領令で言及された Fuzz テスト
- [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) - プロジェクトに含まれる新しいソフトウェアライセンスの存在を特定し、プロジェクト依存関係を追跡します。特定のライセンスの含有を承認または拒否します。

加えて、より多くのセキュリティスキャナーが脆弱性管理とセキュリティダッシュボードとともに利用可能です。詳細は [DevSecOps ソリューション](https://about.gitlab.com/solutions/security-compliance/) を参照してください。

| 機能 / シナリオ                                  |    Free   |    Premium  | Ultimate | 製品分析 | メモ                      |
| --------------------------------------------------- | :-------: | :-------: | :------: | :---------------: | :------------------------- |
| コンプライアンスパイプライン |           |           |    X     |                   |                            |
| コンプライアンスダッシュボード |           |           |    X     |                   |                            |
| [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_scanning_of_cyclonedx_files/)                                                  |           |           |    X     | user_license_management_jobs  | |
| [マージリクエスト承認フロー / ルール](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/index.html)                 |           |     X     |    X     |   counts.merged_merge_requests_using_approval_rules            |                            |
| Protected Environments                              |           |     X     |    X     |                   |                            |
| [SAST（Static Application Security Testing）](https://docs.gitlab.com/ee/user/application_security/sast/)                              |     X     |     X     |    X     | user_sast_jobs                | |
| [Secret Detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)                                            |     X     |     X     |    X     | user_secret_detection_jobs    | |
| [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)                                        |           |           |    X     | user_container_scanning_jobs  | |
| [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)                                      |           |           |    X     | user_dependency_scanning_jobs | |
| [API Fuzzing](https://docs.gitlab.com/ee/user/application_security/api_fuzzing/)                                                      |           |           |    X     | user_api_fuzzing_jobs, user_api_fuzzing_dnd_jobs on self-managed | |
| [Coverage Fuzzing](https://docs.gitlab.com/ee/user/application_security/coverage_fuzzing/)                                            |          |        |    X     | user_coverage_fuzzing_jobs    | |
| [Security Approvals](https://docs.gitlab.com/ee/user/application_security/#security-approvals-in-merge-requests)                      |           |           |    X     |                   |                            |

この表には、GitLab の Self-managed とクラウドオファリングに関連する Free/コミュニティ層と有償層が含まれます。

## テクノロジーパートナーシップ

私たちは主要な業界ベンダーと提携し、お客様のニーズに対応し市場要件を満たす GitLab の能力を拡張しています。

- 鍵管理のための [Hashicorp Vault](https://about.gitlab.com/partners/technology-partners/hashicorp/)
- IaC、ID、その他のパートナーシップは[セキュリティ配下](https://about.gitlab.com/partners/technology-partners/#security)にあります

GitLab に統合してほしいサードパーティがある場合は、お客様向けに[パートナー統合ページ](https://about.gitlab.com/partners/technology-partners/integrate/) で手順をご確認ください。

## ソフトウェアコンプライアンスソリューションの販売

## 理想的なお客様プロファイル

多くの素晴らしい機会は、この理想的なプロファイルに完全には当てはまりません。理想的なお客様プロファイルは、私たちの「完璧な」お客様（個人やエンドユーザーではなく企業）の説明です。このプロファイルは、企業情報、環境、その他の要因を考慮して、最高価値のアカウントの注力リストを作成します。

| 属性 | エンタープライズ | ミッドマーケット | SMB |
| ------ | ------ | ------ | ------ |
| DevOps 成熟度 | 少なくともいくつかのプロジェクトや部門で DevOps を採用済み | 少なくともいくつかのプロジェクトや部門で DevOps を採用済み | 少なくともプロジェクトの半数で DevOps を採用中 |
| ツールの複雑さ | 複雑なツールチェーンがエンドツーエンドの可視性を妨げる | 複雑なツールチェーンがエンドツーエンドの可視性を妨げる | 複雑なツールチェーンを避けたい |
| CI パイプラインのコントロール | DevOps にセキュリティを統合済みだがプロジェクト間でパイプラインの一貫性が不足 | DevOps にセキュリティを統合済みだがプロジェクト間でパイプラインの一貫性が不足 | DevOps にセキュリティを統合済みだがプロジェクト間でパイプラインの一貫性が不足 |
| クラウドネイティブ | Docker と Kubernetes、API を使用しているが、これらのセキュリティに自信がない | Docker と Kubernetes、API を使用しているが、これらのセキュリティに自信がない | Docker と Kubernetes、API を使用しているが、これらのセキュリティに自信がない |
| 公共部門または公共部門に販売するベンダー | サイバーセキュリティ大統領令と潜在的な新規制を懸念 | サイバーセキュリティ大統領令と潜在的な新規制を懸念 | サイバーセキュリティ大統領令と潜在的な新規制を懸念 |
| 一般的なソフトウェアサプライチェーンセキュリティ懸念 | 被害者にならないことについての具体性のない懸念 | 被害者にならないことについての具体性のない懸念  | 被害者にならないことについての具体性のない懸念 |
| 規制された業界 | 厳格な変更管理は、コンプライアンス問題がプロセスの後半で見つかると、変更ウィンドウを逃すことを意味する | 厳格な変更管理は、コンプライアンス問題がプロセスの後半で見つかると、変更ウィンドウを逃すことを意味する | 厳格な変更管理は、コンプライアンス問題がプロセスの後半で見つかると、変更ウィンドウを逃すことを意味する |

## ディスカバリー質問

### 現状 - 痛みはどこにあるか？

**1. シンプルさ**

- コンプライアンス/監査プロセスはどれくらい困難ですか？（時間、人員、リスク）
- 開発者の時間を奪っていますか？
- ソフトウェア開発/デプロイメントプロセスの後半でコンプライアンスの問題が見つかり、手戻りが発生していますか？

**2. 可視性**

- ポリシーの設定/自動化と、それらが守られていることを保証することの間に課題はありますか？
- 監査イベント（アクセス制御、レポート、変更ログなど）への可視性/トレーサビリティはありますか？
- アプリケーションコードだけでなく、CI パイプライン、構成、テンプレートなどに対して誰が変更を加えたかを確認できますか？
- ポリシーの例外がどのくらいの頻度で承認されているかを把握していますか？ポリシーへの遵守状況とドリフト/例外を評価することがどれくらい困難ですか？

**3. コントロール**

- ポリシーが守られ、開発者やその他の人によって変更または無視されないようにできますか？
- セキュリティとコンプライアンス利用の一貫性が問題ですか？ほとんどのプロジェクトが毎回少し異なる方法でセキュアにされていますか？
- もしあなたのソフトウェア開発が規制標準に準拠していない場合、潜在的なコスト/リスクは何ですか？

**4. 公共部門と規制された業界のみ**

- 変更管理ウィンドウをよく逃して変更管理プロセスを再開する必要がありますか？

**5. 関連するセキュリティ質問**

- 現在コードの何パーセントをスキャンしていますか？攻撃者がより簡単に侵入し、横方向に移動できる穴はありますか？すべてのコードをスキャンするのにどれくらい余分にコストがかかりますか？
- コンテナ、オーケストレーター、マイクロサービス/API を使用している場合、脆弱性をスキャンし、本番中にモニタリングする方法は？
- セキュリティチームの時間のどれくらいが脆弱性の追跡、トリアージ、修正されたかどうかを確認するためのフォローアップに費やされていますか？

#### 以前の状態とネガティブな結果

| 以前の状態 | ネガティブな結果 |
| ------ | ------ |
| 1. 複雑なツールチェーンが、SDLC 全体にわたって誰が何を、どこで、いつ変更したかを確認することを困難にしている | 監査が困難で、侵害が発生した場合、ルートコーズの特定に数日/数週間/数か月かかる可能性がある |
| 2. 複数のシステムにまたがるコントロールを示すための監査が困難で時間がかかる | トレーサビリティの欠如は、効率的でない手作業または他の補完的なプロセスを必要とする可能性がある。あるいは、特定のプロジェクトに対してシステム間で一貫してコントロールを示すことができず、リスクにさらされる。 |
| 3. 不遵守は本番直前に発見される可能性がある | 手戻りとベロシティの損失。規制された業界では変更管理プロセスを再開しなければならない |
| 4. ポリシーは設定されているが、開発者や他のユーザーが単にオフにできる | これはセキュリティとコンプライアンスの問題（インサイダー攻撃を含む）の扉を開く。コントロールの欠如は監査努力を長期化させる。 |
| 5. プロジェクト間でパイプラインに一貫性がない | すべてのプロジェクトはコンプライアンスのために独自に検査されなければならない。 |

### 望ましい状態 - 求められる状態は何か？

- プロジェクトを監査するのにどれくらいの時間がかかるべきかについての目標はありますか？そのプロセスはどのようなものになりますか？
- もしプロジェクトが業界規制に準拠したパイプラインを使用するように保証できれば、どれくらいの時間/労力を節約できますか？
- もし不遵守の領域を、開発者がまだコードでイテレーションしている間のより早い段階で発見できれば、どれくらいの手戻りを排除でき、ベロシティはどう改善されますか？
- もしコンプライアンスの自動コントロールを実証できれば、それは監査をどれくらい簡素化しますか？

**公共部門と規制された業界のみ**

- もし変更ウィンドウが始まる前にコンプライアンス問題を特定して解決することで変更管理ウィンドウを満たせるなら、手戻りに関して何を節約できますか？ベロシティはどう改善されますか？

#### 後のシナリオと PBO

| 後のシナリオ | ポジティブビジネスアウトカム |
| ------ | ------ |
| 1. アプリケーションコード、その依存関係、その IaC について、誰が何を、どこで、いつ変更したかのエンドツーエンドの可視性 | より簡単な監査、インサイダー脅威のリスクの軽減、侵害をより早く発見 |
| 2. プロジェクト全体でポリシーのエンドツーエンドの一貫した実行 | 簡素化された監査とリスクの軽減 |
| 3. 業界規制に準拠したソフトウェア開発 | 罰金やその他の不遵守の結果のリスクが少ない |
| 4. 開発者がまだコードでイテレーションしている早い段階でコンプライアンス問題を発見 | 手戻りが少なく、したがって開発者の時間も少ない。規制された業界では、変更管理ウィンドウの逃失が少ない。ベロシティの改善。 |

## 必要なケイパビリティ

| 必要なケイパビリティ | メトリクス |
| ------ | ------ |
| 1. アプリケーションコード、その依存関係、その IaC について、誰が何を、どこで、いつ変更したかのエンドツーエンドの可視性 | ルートコーズを特定する時間 |
| 2. 1 つのコンソールから SDLC 全体に対するポリシー強制 | 例外の追跡とシステム間でのポリシー統合に費やす時間 |
| 3. SDLC 全体に対する 1 つのロールベースアクセス制御 | 回避策に費やす時間 |
| 4. インスタンスからグループ、プロジェクトへ継承されるポリシー | 個々のプロジェクトのコンプライアンスをセットアップしてレビューするのに費やす時間 |
| 5. MR 内で開発者にコンプライアンス上の懸念をレポート | SDLC 後半での手戻りに費やす時間 |

## 反論への対応

- **現在の DevOps ツールを置き換える余裕はない** - 私たちは現状の場所で対応し、徐々により少ないツールセットに向けて作業できます。排除されたツールはすべて、コンプライアンスとセキュリティポリシーをマップしてモニタリングする場所が 1 つ減ります。
- **現在のプロセスでうまくいっている** - もし侵害された場合、潜在的な侵害源を素早く特定できますか？それはあなたにとってどれくらいの価値がありますか？
- その他?

## プルーフポイント - お客様

### お客様の声とレビュー

### お客様ケーススタディ

**[Glympse](https://about.gitlab.com/customers/glympse/)**

- **問題** 20 を超える異なるツールから成る複雑な開発者向けテックスタックは、保守と管理が困難。チームはアプリへのイノベーションの出荷ではなく、ツールの稼働維持に週に数時間を費やしていた。
- **ソリューション:** GitLab Ultimate（SCM、CI、DevSecOps）
- **結果: 約 20 のツールを GitLab に集約し、セキュリティ監査人の経験上どの会社よりも速くセキュリティ問題を修正した。
- **セールスセグメント:** SMB

**[Chorus](https://about.gitlab.com/customers/chorus/)**

- **問題:** Chorus の創設者は、最初から GitLab を使ってツールを構築した。
- **ソリューション:** GitLab Ultimate（SCM、CI、DevSecOps）
- **結果:** **6 週間の本番サイクルが 1 週間に短縮**。最近の SOC2 コンプライアンス監査で、監査人は Chorus がこれまで見た中で最も速い監査プロセスを持っていると述べ、その大半は GitLab のケイパビリティによるものでした。
- **セールスセグメント:** SMB

### クロージングを助けるリファレンス

[Secure のリファレンス可能なお客様の SFDC レポート](https://gitlab.my.salesforce.com/a6l4M000000kDw2) 注: セールスチームメンバーはこのレポートにアクセスできるはずです。アクセスできない場合は、[カスタマーリファレンスチーム](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact)に連絡してサポートを受けてください。

## 共有するアセット

### ソフトウェアコンプライアンスアセット

- ブログ: [DevOps プラットフォームがサプライチェーン攻撃にどう役立つか](https://about.gitlab.com/blog/2021/04/28/devops-platform-supply-chain-attacks/)
- ブログ: [GitLab で簡単になるコンプライアンス](https://about.gitlab.com/blog/2020/07/02/compliance-made-easy/)
- ブログ: [GitLab セキュリティについて知らないかもしれない 3 つのこと](https://about.gitlab.com/blog/2021/11/23/three-things-you-might-not-know-about-gitlab-security/)
- 記事: [CI、セキュリティ専門家のための新しいフロンティア](https://thenewstack.io/continuous-integration-the-new-frontier-for-security-pros/)
- Commit 2021: [ポリシーベースの CI/CD でコンプライアンスを強化](https://learn.gitlab.com/commit-2021/enhance-your-complia?lx=UqDHIY)
- ウェビナー: [DevOps から DevSecOps へ: CI でセキュリティテストを自動化](https://www.youtube.com/watch?v=fTFsbGyl6o0)
- ウェビナー: [ソフトウェアサプライチェーンをセキュアにする](https://www.youtube.com/watch?v=dZfS4Wt5ZRE)
- デモ: [コンプライアンスパイプライン](https://www.youtube.com/watch?v=jKA_e_jimoI)
- デモ: [GitLab でアプリケーション依存関係を管理](https://youtu.be/scNS4UuPvLI)
- eBook: [ソフトウェアサプライチェーンセキュリティガイド](https://learn.gitlab.com/devsecops-aware/software-supply-chain-security-ebook)

### カスタマーフェイシングスライド

- [継続的ソフトウェアコンプライアンス](https://docs.google.com/presentation/d/1VR36MFEYzAd2XpITpvIdPrXlAhM0QRKzJ_OihAjVBbc/edit#slide=id.gcf27821480_2_291) ソリューションスライド - デック内のコメントとしてフィードバックを歓迎します。

### 追加のドキュメントリンク

- [GitLab Security Compliance Controls](/handbook/security/security-assurance/security-compliance/sec-controls/)
- [GitLab Security Practices](/handbook/security/)
- [Security Planning](/handbook/security/planning/)

### イネーブルメントとトレーニング

以下では、イネーブルメントとトレーニングのビデオやコンテンツへのリンクを提供します。

- [セキュリティ監査への対応](https://www.youtube.com/watch?v=ziIJIec4w0g)
- [パイプラインへのセキュリティ追加](https://www.youtube.com/watch?v=Fd5DhebtScg&t=3s)

### プロフェッショナルサービスオファー

GitLab は、お客様とパートナー向けに[さまざまなパッケージ済みおよびカスタムサービス](https://about.gitlab.com/services/) を提供しています。以下はこのソリューションに固有のサービスオファーです。追加のサービスについては[完全なサービスカタログ](https://about.gitlab.com/services/catalog/) を参照してください。

- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals)（DevOps ライフサイクルのすべてのステージ）
- [GitLab CI/CD Training](https://university.gitlab.com/pages/ci-cd-training/)
- [Integration Services](https://about.gitlab.com/services/catalog/ )

## リソース

### クリックスルー & ライブデモ

- [すべてのマーケティングクリックスルーデモ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#click-throughs)
- [すべてのマーケティングライブデモ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/#live-instructions)

### ロードマップ

- [Manage Direction](https://about.gitlab.com/direction/foundations/)

### ソリューションアーキテクト向けのテクニカルリソース - TBD

### バイヤーズジャーニー

[主要アセットのインベントリ](https://docs.google.com/spreadsheets/d/15-yai90Ol7k4D2exHXqHXtFastR6FcE6HABD_GisAl8/edit#gid=0) バイヤーズジャーニーにおける
