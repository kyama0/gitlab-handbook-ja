---
title: "プロダクトセキュリティエンジニアリング"
description: "プロダクトセキュリティエンジニアリングチームのチャーター"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:40:09Z"
translator: claude
stale: false
---

プロダクトセキュリティエンジニアリング (ProdSecEng) は、脆弱性管理および PSIRT の各チームと並んで、[セキュリティケイパビリティエンジニアリング](/handbook/security/product-security/security-capabilities-engineering/) (SecCapEng) の一部です。

## ミッションステートメント (Why)

ProdSecEng は、組織とともにスケールし、製品セキュリティを向上させるプロアクティブで予防的な制御を作り出します。製品ファーストのコード貢献と自動化を通じて、エンジニアリングのベロシティを維持しながらセキュアなソフトウェア開発を可能にする[「舗装された道路」](https://netflixtechblog.com/scaling-appsec-at-netflix-part-2-c9e0f1488bc5)を構築します。

## 価値提案 (What)

私たちは、現場のエンジニアリングの専門知識、スケーラブルな自動化ソリューション、製品への貢献を提供することで、プロダクトセキュリティ (ProdSec) 部門が手作業ではなく価値の高いセキュリティイニシアチブに集中できるようにし、GitLab の製品チームが現実の顧客課題を解決するセキュリティ機能を迅速に提供できるようにします。

## FY27 重点領域

- 脆弱性管理の製品機能と自動化
- ツールの積極的な保守、廃止、製品への統合

## スコープと責任

### 私たちが所有するもの

ProdSecEng は、以下の領域にわたるセキュリティエンジニアリング作業の管理と提供を所有します:

1. **セキュリティ強化機能**: GitLab の製品リスクを軽減し、顧客のセキュリティ機能を強化するセキュリティ機能と改善。
2. **セキュリティのための「舗装された道路」**: 開発チームがセキュリティのベストプラクティスに従いやすくする製品ファーストのソリューション。
3. **ProdSec 自動化**: プロダクトセキュリティチームの手作業の負担を軽減する自動化。
4. **セキュリティ要件の実装**: セキュリティ部門の要件とユースケースを製品機能に翻訳すること。
5. **ProdSec ツール統合**: GitLab に統合するためのカスタム ProdSec ツールを特定し、実装、ロールアウト、引き渡しを管理。
6. **概念実証と検証**: より広範な実装または引き渡しの前に、提案されたセキュリティソリューションを検証。
7. **カスタムツールの保守**: セキュリティ部門に代わってプロジェクトとツールを保守。完全なインベントリ（パスフォワードのカテゴリと保守の詳細を含む）は[内部ハンドブック](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/) (GitLab チームメンバーのみアクセス可能) で利用可能です。
8. **ドキュメントとナレッジ移転**: 私たちの貢献に関するドキュメント、Runbook、ガイドの作成と保守。

### 仕事の入手元

ProdSecEng は、いくつかの主要な領域から作業を調達し、私たちのバックログにインプットを提供するチームとインターフェースします:

1. **ProdSec 自動化リクエスト**: ProdSec チームが自動化候補を特定し、私たちは[インテーク自動化リクエスト基準](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/)に対して評価します。
2. **既存の GitLab セキュリティ強化 Issue**: GitLab プロジェクト全体のセキュリティ関連 Issue で、評価のために `~ProdSecEng Candidate` のラベル付けがされたもの。
3. **クロスファンクショナルなセキュリティリクエスト**: 脆弱性管理、セキュリティコンプライアンス、セキュリティリスク、Trust & Safety、または SIRT からのリクエスト（`@gitlab-com/gl-security/product-security/product-security-engineering` を介して言及されるもの）。
4. **プロダクトセキュリティリスクレジスター (PSRR)**: セキュリティプラットフォーム & アーキテクチャ (SPA) およびその他の ProdSec チームによって特定された、製品エンジニアリングソリューションが必要なシステミックリスク。
5. **セキュリティインターロックと製品検証**: [Customer Zero](/handbook/security/product-security/security-platforms-architecture/security-interlock/) イニシアチブを通じた GitLab セキュリティ機能の検証。

### スコープ外

| 領域 | DRI |
|------|-----|
| アプリケーションセキュリティの標準、レビュー、テスト | [AppSec](/handbook/security/product-security/security-platforms-architecture/application-security/) |
| インフラストラクチャ、クラウド、データセキュリティのツールやアーキテクチャ | [InfraSec](/handbook/security/product-security/infrastructure-security/) |
| 脆弱性管理運用 | [脆弱性管理](/handbook/security/product-security/vulnerability-management/) |
| 脆弱性開示とトリアージ | [PSIRT](/handbook/security/product-security/psirt/) |

## 運用モデル

ProdSecEng は、計画立案、優先順位付け、サイジング、作業追跡について、共有の [SecCapEng の働き方](/handbook/security/product-security/security-capabilities-engineering/) に従います。

バックログ管理、リファインメント、開発、引き渡しプロセスを含む、私たちのチーム固有のワークフローの詳細については、[詳細ワークフロー](detailed-workflow/)を参照してください。

## コミュニケーション

- **Slack**: Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) または [`#security-capabilities-engineering`](https://gitlab.enterprise.slack.com/archives/C0AEU6LHQ7R) で質問し、`@product-security-engineering` ハンドルをメンションしてください
- **GitLab**: `@gitlab-com/gl-security/product-security/product-security-engineering` をメンションしてください
- **Issue**: [ProdSecEng チームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) に提出してください
- **緊急時**: 任意の Slack チャンネルで `/security` を使用してセキュリティインシデント対応チームをページングしてください

[Professional Services Engineer](/job-description-library/sales/professional-services-engineer/) と混同しないように、私たちは「ProdSecEng」を短縮名として使用しています。

## 成功指標

ProdSecEng は、ラベル付けされたマージリクエストと Issue を通じて指標を追跡します。次の指標ラベルが追跡とレポートを推進します:

### 指標ラベルとカテゴリ

| **カテゴリ** | **ラベル** | **説明** | **なぜ重要か** | **適用先** |
| --- | --- | --- | --- | --- |
| **プロダクトセキュリティ要件** | `~ProdSecEngMetric::ProdSecRequirement` | GitLab プロダクトセキュリティチームによって必要とされる製品内の機能 | プロダクトセキュリティチームが製品自体を使用して GitLab を保護できるようにする機能の提供における私たちの効果性を実証 | Issue とマージリクエスト、ときどきエピック |
| **多層防御** | `~ProdSecEngMetric::Defense in Depth` | 「以前の」セキュリティ制御が失敗した場合により堅牢になるように既存の脆弱でない機能を変更すること | 主要な制御が侵害されてもリスクを軽減する多層的なセキュリティアプローチへのコミットメントを示す | Issue とマージリクエスト、ときどきエピック |
| **舗装された道路** | `~ProdSecEngMetric::Paved Road` | GitLab の貢献者がより簡単に活動を安全に実行できる新しいツール、メソッド、またはチェック | スケーラブルで開発者にやさしいセキュリティソリューションを作成する成功度を測定 | Issue とマージリクエスト、ときどきエピック |
| **ツール統合** | `~ProdSecEngMetric::Tooling Integration` | カスタムインハウスツールから GitLab 製品への機能の統合の一環として実施される作業 | 外部依存関係の削減とプロダクトセキュリティツールのプラットフォームへの統合の進捗を追跡 | Issue とマージリクエスト、ときどきエピック |
| **カスタムツール** | `~ProdSecEngMetric::Custom Tooling` | プロダクトセキュリティ要件を満たすために必要な、製品外のカスタムツールを構築、保守、または拡張するために実施される作業 | プロダクトセキュリティ運用をサポートするツールへの必要な投資を反映 | Issue とマージリクエスト、ときどきエピック |
| **廃止** | `~ProdSecEngMetric::Sunsetting` | カスタムツールを廃止するために必要な特定の機能や機能性を表す Issue | ツールを GitLab 製品に統合する進捗を実証 | [product-security-engineering-team リポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues) の Issue |
| **保留中** | `~ProdSecEngMetric::Pending` | 作業タイプがまだ完全に明確ではないが、進捗をブロックしたくない | カテゴライズが必要だが勢いを遅らせない作業を追跡できる | Issue、マージリクエスト、エピック |
| **内部** | `~ProdSecEngMetric::Internal` | チームタスク、たとえばプロセスや計画 | 内部チーム運用を外部向け作業から分離 | Issue とマージリクエスト、エピック |

これらのラベルに基づくメトリクスデータについては、[私たちの Tableau ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/views/ProductSecurityEngineering/ProdSecEngValueDeliveryMetrics?:iid=6) を参照してください。

### 戦略的 KPI

私たちが収集する指標に基づき、私たちのミッションでどのように進んでいるかを伝えるために追跡する戦略的 Key Performance Indicator (KPI) は以下のとおりです。

| **指標** | **なぜ重要か** | **計算方法** | **測定頻度** | **レポートメカニズム** |
| --- | --- | --- | --- | --- |
| **配信されたプロダクトセキュリティチーム要件** | プロダクトセキュリティチームが私たちの製品を使用して GitLab を保護できるようにする機能の提供における私たちの効果性を実証 | `~ProdSecEngMetric::ProdSecRequirement` ラベル付きのマージされた MR の数 | TBD | TBD |
| **配信されたセキュリティ強化と舗装された道路** | GitLab のセキュリティ態勢の改善と組織全体での安全な開発実践の有効化への私たちの貢献を実証 | `~ProdSecEngMetric::Defense in Depth` または `~ProdSecEngMetric::Paved Road` ラベル付きのマージされた MR の数 | TBD | TBD |
| **製品に統合されたカスタムツールの価値** | 外部依存関係を削減し、プロダクトセキュリティツールを GitLab に統合する成功度を測定 | 現在のインハウスカスタムツールの個別の価値提案のうち、製品に貢献されたものの割合 (`~ProdSecEngMetric::Tooling Integration` および `~ProdSecEngMetric::Sunsetting` ラベルを使用して追跡) | TBD | TBD |

### 運用指標

チームの効率性を追跡するため、以下の運用 KPI を追跡します。

| **指標** | **なぜ重要か** | **計算方法** | **測定頻度** | **レポートメカニズム** |
| --- | --- | --- | --- | --- |
| **バックログのヘルスとリファインメント** | 開発のためのよくメンテナンスされ優先順位付けされた作業のバックログを確保 | リファインメントされた候補 Issue の数、`Ready for Development` ステータスの Issue、マイルストーン全体でのリファインメントへの参加 | 月次 | TBD |
| **マイルストーンの予測可能性** | 計画されたマイルストーン内でコミットされた作業を完了する能力を追跡 | 各マイルストーンで計画された vs 実際に完了した作業（適用された重みと指標ラベルで測定） | 月次 | TBD |
| **指標ラベルカバレッジ** | すべての作業が追跡とレポートのために適切にカテゴライズされていることを確保 | 適切な `~ProdSecEngMetric::*` ラベルが適用されたマージされた MR とクローズされた Issue の割合 | 月次 | TBD |

## チーム構成

ProdSecEng チームは以下で構成されます:

- セキュリティエンジニアリングマネージャー: チームの優先順位付け、ロードマップ計画、マイルストーン計画をリード、クロスファンクショナルな関係を管理
- プロダクトセキュリティエンジニア: セキュリティ機能、自動化ソリューション、ツール統合の設計、開発、検証

### 開発目標

私たちのチームはソフトウェアおよびセキュリティエンジニアの混合体です。チーム内部の成長と開発の計画は次のとおりです:

- スケーラブルなセキュリティアーキテクチャと設計パターンの専門知識を拡大
- GitLab のコードベースと開発実践に関する実践的な経験を開発
- AI セキュリティ統合と実装の能力を構築
- セキュリティ要件をユーザー中心のソリューションに翻訳するためのプロダクトマネジメントスキルを強化
- クロスチームコラボレーションとコミュニケーションスキルを強化

## レビューと更新

このチャーターは四半期ごとにレビューされます。次回予定されているレビュー: 2026 年 8 月 1 日。
