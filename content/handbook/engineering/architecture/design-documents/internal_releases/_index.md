---
title: "GitLab SaaS シングルテナントインスタンスのための内部リリース"
status: ongoing
creation-date: "2024-09-24"
owning-stage: "~devops::platforms"
group: Delivery::Releases
authors: ["@mayra-cabrera"]
dris: ["@mayra-cabrera"]
coach: ["@cmiskell"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/internal_releases/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T05:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T15:13:07-06:00"
---

## はじめに

2023 年、GitLab は新しい完全マネージドプライベートソリューション [GitLab Dedicated](https://about.gitlab.com/dedicated/) を
開始しました。これは GitLab Inc. が完全に管理するシングルテナント SaaS オファリングです。これらの内部インスタンスは
公開 GitLab バージョンで実行されており、公開開示前にセキュリティ修正をデプロイする能力を制限しています。
シングルテナント SaaS インスタンスの[安全性と可用性](/handbook/engineering/development/principles/#prioritizing-technical-decisions)を保証するために、
Delivery は[特定の SLA](/handbook/security/product-security/vulnerability-management/sla/) 内で重大な Issue を修正するための
プライベートパッケージを準備する必要性が高まっています。

これらのプライベートインスタンスを修正するための公式なリリースプロセスが存在しません。GitLab の
[オープンコア](/handbook/company/stewardship/#business-model)と[デフォルトで公開](/handbook/values/#public-by-default)
という性質を考えると、GitLab のリリースは最初からパブリックになるように設計されていました。
重大な Issue の場合、リリースマネージャーは利用可能なリリースツールを手動で操作して、修正 SLA 内に
シングルテナント SaaS インスタンスを修正する必要があり、GitLab 顧客とその適時な修正に影響を与えます:

* リリースマネージャーと関与するすべてのステークホルダー間の調整の増加。
* 現在のリリースツールは同時リリースを実行する柔軟性を欠いており、例えば月次リリース週の準備中に
  脆弱性が見つかった場合、開発サイクルの早い時点でリリース候補を作成する必要があり、
  アクティブな月次リリースの機能とバグ修正を断念することになります。
* 既存のリリースプロセスはシングルテナント SaaS インスタンスの修正に適しておらず、
  その可用性と整合性を危険にさらしています。

![現在の修正戦略](/images/handbook/engineering/architecture/design-documents/internal-releases/current_remediation_strategy.png)

## 目標

プライベート GitLab SaaS マネージドインスタンスをターゲットとしたプライベートパッケージをリリースすることに焦点を当てた
内部リリース GitLab プロセスを導入します。プライベートパッケージには、一般的な視聴者に開示する前の重大な Issue の
修正が含まれます。[GitLab のビジネスモデル](/handbook/company/stewardship/#business-model)の性質上、
内部リリースへの対応は、今後の四半期に Delivery-Releases の作業を推進する独自の長期的な課題をもたらします:

1. **内部リリースの性質を理解する**。GitLab のデフォルトでオープンな性質の上にプライベートリリースを導入することは、
問題、ビジョン、スコープ、課題を理解することから始まるユニークな課題です。この最初のステップの成果は、
内部リリースのロードマップを文書化したこのブループリントです。
2. **リリースのブロック性を排除する**。エンジニアリングの制約により、月次リリース週の準備中に
パッチリリースを準備できません。プライベートリリースプロセスを確立するには、この制約を解消し、
脆弱性を開示することなく同時リリースを可能にする柔軟なツールが必要です。
3. **GitLab リリース戦略に GitLab Dedicated 修正プロセスを組み込む**。GitLab SaaS シングルテナントインスタンスは、
クリティカルパッチリリースプロセスを手動で操作することで修正されています。これには、リリース管理、セキュリティ、
エンジニアリングのステークホルダーによる相当な作業が伴います。内部リリースは、GitLab Dedicated の修正プロセスを
GitLab.com やセルフマネージドの修正プロセスと同じレベルに引き上げることを目的としています。

![目標](/images/handbook/engineering/architecture/design-documents/internal-releases/goal.png)

## 主要な用語

* 内部リリース: [特定の SLA](/handbook/security/product-security/vulnerability-management/sla/) 内に GitLab SaaS シングルテナントインスタンスを修正するための新しいプライベートリリース戦略。
* GitLab SaaS シングルテナントインスタンス: GitLab Inc. が管理する SaaS インスタンス。現時点では [GitLab Dedicated](https://about.gitlab.com/dedicated/) に限定されています。
* 重大な Issue: GitLab SaaS シングルテナントインスタンスの[可用性](/handbook/product-development/how-we-work/issue-triage/#availability)、[機能性](/handbook/product-development/how-we-work/issue-triage/#severity)、または[セキュリティのクリティカル性](/handbook/security/product-security/vulnerability-management/sla/)に影響を与える ~"severity::1" として定義されたバグやセキュリティ脆弱性。
* 追加の定義については[リリース用語](/handbook/engineering/releases/#terminology)を参照してください。

## 目標と非目標

### ビジョン

#### 短期的

内部リリースの取り組みを GitLab Delivery 戦略に合わせます。内部リリースプロセスを GitLab リリースの一部として
組み込むためのビジョン、取り組み、課題と要件の理解をまとめます。以下を提供することでこれを実現します:

* 内部リリースビジョンを達成するためのロードマップとイテレーションステップを詳述したブループリントを文書化する。
  * Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1292

#### 中期的

リリースマネージャーは、脆弱性を公開せずに GitLab Dedicated を修正するために必要な関連修正を含む
プライベートリリースバージョンを作成するための自動化プロセスを開始します。GitLab Dedicated チームが
すべてのインスタンスがアップグレードされたという確認を送信した後、公開プロセスが開始されます。
以下を提供することでこれを実現します:

* GitLab SaaS シングルテナントインスタンスの重大な Issue を修正するための内部リリースプロセスを設計する。
  * Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1201
* 現在の GitLab Dedicated 修正戦略を考慮するためにパッチリリースプロセスをブリッジする。これにより、
  公開パッチとは異なるタグを持つプライベートパッケージの生成が可能になります。
  * Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1373
* 現在の自動デプロイ戦略を分離する。これにより、リリースツールが高度に柔軟なツールに変換され、
  修正が公開/リリースされる前に GitLab Dedicated がパッチ適用済みバージョンを実行していることを
  保証するためにプロセスのプライベートとパブリック部分を明確に分離できます。
  * Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1050.

#### 長期的

GitLab SaaS シングルテナントインスタンスの重大な Issue を修正するための内部リリースプロセスが
GitLab リリース戦略の一部となります。リリースマネージャーは、GitLab SaaS シングルテナントインスタンスの
重大な Issue を修正するための内部リリースプロセスを実行できるようになります。このプロセスの結果により、
GitLab は修正 SLA に基づいて、または緊急の必要がある場合（短いクリティカルな修正ターゲット）に、
GitLab Dedicated へのフィックスをイテレーティブに提供できるようになります。

内部リリースプロセスはエンドツーエンドで自動化される必要があり、手動介入が必要な場合のみエンジニアに通知し、
GitLab リリースのブロック性を排除する必要があります: 複数のリリースタイプが同時に実行できる必要があります。

* GitLab インスタンスへのパッケージの配信を、GitLab リポジトリ間のミラーリングを壊すことなく、
  パッチリリースを開始せずに行うための高度なパッケージデプロイ戦略を使用する。
* 一般的な視聴者に脆弱性を開示せずにプライベートパッケージを発行する。
* Switchboard API を介した Dedicated テナントの自動アップグレードを有効にする。

### スコープ

内部リリースは、GitLab Inc. が管理する SaaS インスタンスに新しいリリースプロセスを導入することに限定されています。
現時点では、GitLab Dedicated に限定されています。

### スコープ外

* 内部リリースは、標準的な GitLab 製品オファリングから逸脱するカスタム機能を持つリリースを作成することを意図していません。
* 内部リリースは、GitLab SaaS シングルテナントインスタンスの可用性に影響を与えるクリティカルな脆弱性や
  バグ修正を軽減することに限定されています。重大度が低い Issue は[パッチリリースのケイデンス](/handbook/engineering/releases/patch-releases/#patch-release-cadence)に従います。
* GitLab.com と GitLab セルフマネージドインスタンスは内部リリースの対象ではありません。これらのインスタンスでは、
  自動デプロイ、パッチ、月次リリースが[修正 SLA](/handbook/security/product-security/vulnerability-management/sla/) 内に
  バグと脆弱性を修正します。
* GitLab Cells は初期ロードマップでは内部リリースの対象ではありませんが、将来変更される可能性があります。
* セルフマネージドのお客様向けの内部リリースチャンネルは初期ロードマップでは考慮されていません。
  今後のステージで製品分析と検証が実施されます。

## 提案されたアクションプラン

内部リリースの概念を理解し、新しい内部リリース戦略を導入することに加えて、
2 つの主要な要件を対処する必要があります:

1. GitLab リリースのブロック性を排除する。
2. GitLab Dedicated の修正プロセスをファーストクラスの市民に引き上げる。

これら 2 つの要件は同時に対処でき、各作業は複数の四半期にわたって展開されます。

![ロードマップ](/images/handbook/engineering/architecture/design-documents/internal-releases/roadmap.png)

### GitLab リリースのブロック性の排除

GitLab.com での重大な Issue の軽減には、修正が GitLab セキュリティリポジトリにマージされ、
GitLab 本番環境にデプロイされる必要があります。この操作は GitLab 正規リポジトリとセキュリティリポジトリ間の
ミラーリングを破壊し、月次リリースの準備を妨げます: 未開示のセキュリティ脆弱性を持つ月次リリースを実行すると、
GitLab Dedicated や GitLab セルフマネージドインスタンスを修正する能力が損なわれます。この制限のため、
脆弱性を公開せずにパッチと月次リリースを同時に実行することはできません。

自動デプロイ戦略は高度に柔軟になるように適応させ、GitLab リポジトリ間のミラーリングを壊すことなく、
パッチリリースを開始せずに、すべての GitLab インスタンスへのパッケージの配信を可能にする必要があります。
この作業は複数の四半期にわたるイテレーションで行われます:

1. **最初のイテレーション: 自動デプロイタグ付けをロールアウトから分離** - パッケージのビルドと
   GitLab.com 本番環境へのロールアウトの間の強い結合を排除します。これにより、パッケージをビルドするための
   プロセスとロールアウトするためのプロセスという 2 つの独立したプロセスが確立されます。
   このイテレーションは高度なパッケージ選択戦略への道を開きます。
2. **2 番目のイテレーション: 自動デプロイパッケージのフィルタリングと選択** - 自動デプロイプロセスの分離により、
   パッケージを特定の要件で構築するように設定できます。例えば、すべての今後のパッケージで最小 SHA を要求します。
   この機能は本番インシデントの軽減を保証するために使用できます。
3. **3 番目のイテレーション: カスタム自動デプロイパッケージを作成する能力** - 自動デプロイの柔軟性は、
   実験的な機能（Ruby/Rails アップグレード）や未マージの変更（セキュリティ修正）を含むパッケージの作成を
   許可することに焦点を当て、GitLab リポジトリ間のミラーリングの発散を防ぐ必要があります。

### GitLab リリース戦略への GitLab Dedicated 修正プロセスの組み込み

GitLab Dedicated の新しいプライベートリリースモデルを確立し、GitLab.com やセルフマネージドの
修正プロセスと同じ標準に引き上げます。GitLab のオープンコアの性質を考えると、これは未踏の領域であり、
複数のイテレーションが必要です:

1. **最初のイテレーション: GitLab Dedicated 修正戦略に対応するためにパッチリリースプロセスをブリッジ** -
   パッチリリースプロセスに干渉せずにセルフマネージドパッケージを生成するようにリリースツールを調整します。
2. **2 番目のイテレーション: 内部リリースプロセスを導入** - GitLab Dedicated インスタンスを修正するための
   内部リリースプロセスを設計して導入します。
3. **3 番目のイテレーション: 内部リリースプロセスをエンドツーエンドで自動化** - 確立された内部リリースプロセスと
   カスタム内部パッケージを作成する能力により:
   * 高度に柔軟な自動デプロイプロセスを使用して、GitLab リポジトリ間のミラーリングを壊すことなく
     セキュリティ修正をデプロイします。
   * 内部リリースプロセスは予測可能性と結果を保証し、プロセスからの人的要素を最小限に抑えます。
     GitLab Dedicated インスタンスでの重大な Issue の修正は、Switchboard 機能を使用した
     Dedicated テナントの自動アップグレードによって最初から最後まで自動化されます。
