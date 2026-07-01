---
title: "プロダクトセキュリティエンジニアリング"
description: "プロダクトセキュリティエンジニアリングチームのチャーター"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
translated_at: "2026-07-02T07:50:09+09:00"
translator: claude
stale: false
lastmod: 2026-06-26T14:40:46+12:00
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

## チームバリュー

ProdSecEng は、[GitLab 全社の運用原則](/handbook/company/operating-principles/)に従って運営します。加えて、チームは次を実践します。

1. **透明性**: 私たちはオープンに作業します。意思決定、トレードオフ、進捗は、見に来る人なら誰でも確認できます。ブロッカーにぶつかったり方向転換したりしたときは、非公開で整理するのではなく、Issue やエピックでそのことを伝えます。
1. **エンジニアリング標準**: 私たちは GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)に従い、他の Engineering チームと同じ品質基準で貢献します。コードレビュー、テスト、ドキュメント、パフォーマンス標準はすべて適用されます。
1. **ドッグフーディング**: 私たちはユーザー体験を理解するため、可能な限り GitLab を使用します。これには、チームが私たちのインプットを必要とするタイミングを把握するためのメンションや TODO の使用、work item での議論と意思決定の記録、エンジニアリングワークフローでの GitLab 機能の使用、見つけたバグへのフィードバックや MR でのリードが含まれます。

## 運用モデル {#operating-model}

### 計画とマイルストーン {#planning-and-milestones}

ProdSecEng は、Product と Engineering のケイデンスに合わせるため、[Product Milestones](/handbook/product/product-processes/milestones/)を使用して作業を計画します。マイルストーンはおよそ 4 週間です。Engineering Manager は、PSRR の優先度、クロスチームの議論、チームキャパシティを踏まえてマイルストーン計画をリードします。

### 優先度 {#priority}

私たちは GitLab 標準の[優先度スコープラベル](/handbook/product-development/how-we-work/issue-triage/#priority)を使用します。

| 優先度 | 意図 | 目標解決期間 |
|----------|-----------|-------------------|
| `~"priority::1"` | キャパシティ制約に関係なく、できるだけ早く対応する | 30 日 |
| `~"priority::2"` | 近いうちに対応する。次の数マイルストーンでキャパシティを割り当てる | 60〜90 日 |
| `~"priority::3"` | 可能なときに対応する。より優先度の高い作業に置き換えられる可能性がある | 90〜120 日 |
| `~"priority::4"` | 指定されたタイムラインなし | ベストエフォート |

優先度は、リスク評価、全社的な優先事項、クロスチームのリクエスト、チームのニーズを踏まえ、マイルストーン計画中に EM が設定します。

### サイジングと見積もり {#sizing-and-estimates}

Issue の weight には、標準の[修正フィボナッチスケール](https://docs.gitlab.com/tutorials/scrum_events/standups_retrospectives_velocity/#deciding-the-value-of-story-points)を使用します。

| Weight | 複雑さ | おおよその時間 |
|--------|-----------|------------------|
| 1 | 些細。副作用は想定されない | 1 日 |
| 2 | 小さい。要件が明確で、テストも単純 | 1〜2 日 |
| 3 | 中程度。コード範囲は広いが、要件は明確 | 2〜3 日 |
| 5 | 複雑。要件は理解されているが、途中でギャップが出る可能性が高い | 3〜5 日 |
| 8 | 非常に複雑。開始前に重要な調査とリサーチが必要 | 5〜10 日 |
| 13+ | 分割が必要。より小さな Issue に分割する | N/A |

これは通常、チームメンバー 1 人あたり 1 マイルストーンで約 20 weight の work item を意味し、休暇、祝日、成長と開発の時間に応じて減らします。キャパシティの 60〜80% を事前に計画し、残りは計画外のリアクティブな作業のために確保します。

### 計画外作業 {#unplanned-work}

計画後にマイルストーンへ追加された Issue と MR には `~Unplanned` ラベルを使用します。これにより、計画済みキャパシティと計画外キャパシティの分割が適切かどうかを追跡し、割り込みの反復的な発生源を特定できます。

### 作業追跡

私たちは、適切な作業を選び、正確にサイジングし、リスクを早期に提起し、進捗の可視性を提供できていることを確認するためにデータを追跡します。バックログ管理、リファインメント、開発、引き渡しプロセスを含むチーム固有のワークフローの詳細については、[詳細ワークフロー](detailed-workflow/)を参照してください。

## コミュニケーション

- **Slack**: Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) または [`#security-capabilities-engineering`](https://gitlab.enterprise.slack.com/archives/C0AEU6LHQ7R) で質問し、`@product-security-engineering` ハンドルをメンションしてください
- **GitLab**: `@gitlab-com/gl-security/product-security/product-security-engineering` をメンションしてください
- **Issue**: [ProdSecEng チームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) に提出してください
- **緊急時**: 任意の Slack チャンネルで `/security` を使用してセキュリティインシデント対応チームをページングしてください

[Professional Services Engineer](/job-description-library/sales/professional-services-engineer/) と混同しないように、私たちは「ProdSecEng」を短縮名として使用しています。

## 成功指標 {#success-metrics}

ProdSecEng は、ラベル付けされたマージリクエストと Issue を通じて指標を追跡します。

### アクティブな指標ラベル

これらのラベルは、現在のプロダクト中心のミッションに適用されます。

| **カテゴリ** | **ラベル** | **説明** |
| --- | --- | --- |
| **プロダクトセキュリティ要件** | `~ProdSecEngMetric::ProdSecRequirement` | GitLab Product Security チームが必要とする製品内の機能 |
| **多層防御** | `~ProdSecEngMetric::Defense in Depth` | 「以前の」セキュリティ制御が失敗した場合により堅牢になるよう、既存の脆弱でない機能を変更する作業 |
| **舗装された道路** | `~ProdSecEngMetric::Paved Road` | GitLab のコントリビューターが活動を安全に実行しやすくする新しいツール、方法、チェック |
| **保留中** | `~ProdSecEngMetric::Pending` | 作業タイプがまだ明確ではないが、進捗をブロックしたくないもの |
| **内部** | `~ProdSecEngMetric::Internal` | プロセスや計画などのチームタスク |

### 終了予定の指標ラベル

これらのラベルは、ProdSecEng の以前のカスタムツールミッション向けに設計されたものです。既存ツールの移行が完了したら廃止します。

| **カテゴリ** | **ラベル** | **説明** |
| --- | --- | --- |
| **ツール統合** | `~ProdSecEngMetric::Tooling Integration` | カスタムインハウスツールの機能を GitLab 製品へ統合する一環として実施される作業 |
| **カスタムツール** | `~ProdSecEngMetric::Custom Tooling` | Product Security 要件を満たすために必要なカスタムツールを構築、保守、拡張する作業 |
| **廃止** | `~ProdSecEngMetric::Sunsetting` | カスタムツールの廃止に必要な特定の機能や機能性を表す Issue |

### 戦略的 KPI

私たちが収集する指標に基づき、私たちのミッションでどのように進んでいるかを伝えるために追跡する戦略的 Key Performance Indicator (KPI) は以下のとおりです。

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **配信された Product Security チーム要件** | `~ProdSecEngMetric::ProdSecRequirement` ラベル付きのマージされた MR の数 | アクティブ |
| **配信されたセキュリティ強化と舗装された道路** | `~ProdSecEngMetric::Defense in Depth` または `~ProdSecEngMetric::Paved Road` ラベル付きのマージされた MR の数 | アクティブ |
| **製品に統合されたカスタムツールの価値** | 製品に貢献されたカスタムツール内の個別価値提案の割合 | 終了予定 |

### 運用指標

チームの効率性を追跡するため、以下の運用 KPI を追跡します。

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **バックログのヘルスとリファインメント** | リファインメントされた候補 Issue の数、`Ready for Development` ステータスの Issue、マイルストーン全体でのリファインメントへの参加 | アクティブ |
| **マイルストーンの予測可能性** | 各マイルストーンで計画された作業と実際に完了した作業（weight と指標ラベルで測定） | アクティブ |
| **指標ラベルカバレッジ** | 適切な `~ProdSecEngMetric::*` ラベルが付いたマージ済み MR とクローズ済み Issue の割合 | アクティブ |

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
