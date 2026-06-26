---
title: "Product Security Engineering"
description: "Product Security Engineering チームのチャーター"
upstream_path: /handbook/security/product-security/security-platforms-architecture/product-security-engineering/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
translated_at: "2026-06-26T20:39:13+09:00"
translator: codex
stale: false
lastmod: "2026-06-26T14:40:46+12:00"
---

Product Security Engineering (ProdSecEng) は [Product Security](/handbook/security/product-security/) (ProdSec) 内のチームであり、VP of Product Security にレポートします。

## ミッションステートメント

ProdSecEng は、セキュリティリスクに対応する価値の高いセキュリティ機能を GitLab 製品に構築し、出荷します。私たちは Product および Engineering と直接連携し、セキュリティ要件、リスクのインサイト、内部の専門知識を、GitLab とお客様の双方に利益をもたらす製品改善と機能へ変換します。

私たちは GitLab の [Engineering workflow](/handbook/engineering/workflow/) に従い、長期的に機能を所有するチームと並んでコードに貢献します。

## 価値提案

私たちは、実践的なセキュリティエンジニアリングを製品開発プロセスへ直接持ち込みます。ProdSec チームがリスクと要件を特定し、ProdSecEng がそれを出荷済みの製品機能へ変換します。これにより、セキュリティ機能がお客様へより早く届き、Product と Engineering は専任のセキュリティエンジニアリングパートナーを得られ、ProdSec は自分たちのワークフローに対して GitLab 自身の製品を検証できます。

## 重点領域

私たちの作業は、価値の高いセキュリティリスクに対応し、Product と Engineering の方向性と整合するエピックによって推進されます。具体的な重点領域はマイルストーン計画時に設定され、[Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/) とクロスチームの議論によって情報を得ます。

## スコープと責任

### 私たちが所有するもの

ProdSecEng は、GitLab 製品へ出荷されるセキュリティエンジニアリング作業の提供を所有します。

1. **セキュリティ製品への貢献を共創し、提供する**: 貢献は、GitLab の製品リスクを低減する改善、またはお客様や開発チームがデフォルトでセキュリティプラクティスに従いやすくするソリューションです。私たちは [co-create workflow](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#co-create-workflow) に従い、ロードマップを補完する作業について Engineering および Product と整合します。
1. **製品検証 (Customer Zero)**: ProdSec が Customer Zero として行動する [Security Interlock](/handbook/security/product-security/security-platforms-architecture/security-interlock/) イニシアチブを通じて、GitLab のセキュリティ機能を検証します。
1. **概念実証**: より広範な実装または引き継ぎの前に、提案されたセキュリティソリューションを検証します。
1. **ドキュメントとナレッジ移転**: 私たちの貢献に関するドキュメント、Runbook、ガイドを作成および保守します。

> **移行: カスタムツール (2026 年 7 月 1 日発効)**
>
> 2026 年 7 月 1 日以前、ProdSecEng は Security 部門に代わり、カスタム内部セキュリティツールのメンテナンスと管理も所有していました。これには、ツールのインテーク、メンテナンス、廃止が含まれます。この責任は、GitLab の Act 2 operating model の変更の一環として縮小中です。
>
> チームの既存のカスタムツールに関するコミットメントは、それぞれの所有チームへ移行中です。移行計画は最終化されつつあり、[内部ハンドブックのツールインベントリ](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/) (GitLab チームメンバーのみアクセス可能) に文書化されています。新しいカスタムツールのリクエストは受け付けていません。既存ツールについて質問があるチームは、Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) で連絡してください。

### 作業の入手元

ProdSecEng は以下から作業を得ます。

1. **Product Security Risk Register (PSRR)**: [Security Platforms & Architecture (SPA)](/handbook/security/product-security/security-platforms-architecture/) とその他の ProdSec チームによって特定された、製品エンジニアリングソリューションを必要とするシステミックリスク。
1. **ProdSec とのクロスチームの議論**: 手作業のプロセスを製品機能で置き換えられる箇所や、セキュリティギャップを埋められる箇所を特定するための、ProdSec チームとの直接のコラボレーション。
1. **Product と Engineering との整合**: 製品ロードマップに適合するセキュリティ機能を形作るための、Product Manager および Engineering チームとの共同計画。
1. **Security Interlock**: 必要に応じて [Customer Zero](/handbook/product/product-processes/customer-0/) イニシアチブを通じて GitLab のセキュリティ機能を検証します。

### スコープ外

| 領域 | DRI |
|------|-----|
| アプリケーションセキュリティの標準、レビュー、テスト | [AppSec](/handbook/security/product-security/security-platforms-architecture/application-security/) |
| インフラストラクチャ、クラウド、データセキュリティのツールやアーキテクチャ | [InfraSec](/handbook/security/product-security/infrastructure-security/) |
| 脆弱性管理、開示、トリアージ | [Vulnerability Operations](/handbook/security/product-security/vulnerability-management/) |
| 新しいカスタム内部ツールの構築または受け入れ | 上記の「移行: カスタムツール」を参照 |

## チームバリュー

ProdSecEng は [GitLab 全社の operating principles](/handbook/company/operating-principles/) に基づいて運営します。さらに、チームは次を実践します。

1. **透明性**: 私たちはオープンに作業します。意思決定、トレードオフ、進捗は、見に来る人なら誰でも確認できます。ブロッカーに当たったり方向転換したりする場合は、非公開で整理するのではなく、Issue またはエピックで伝えます。
1. **Engineering standards**: 私たちは GitLab の [Engineering workflow](/handbook/engineering/workflow/) に従い、他の Engineering チームと同じ品質基準で貢献します。コードレビュー、テスト、ドキュメント、パフォーマンス基準はすべて適用されます。
1. **ドッグフーディング**: ユーザー体験を理解するため、可能な限り GitLab を使用します。これには、チームが私たちのインプットを必要とするタイミングを理解するためにメンションや TODO を使用すること、議論や判断を Work Item に記録すること、Engineering workflow で GitLab 機能を使用すること、見つけたバグについてフィードバックを提供したり MR でリードしたりすることが含まれます。

## 運用モデル

### 計画とマイルストーン

ProdSecEng は、Product と Engineering のリズムに合わせるため、[Product Milestones](/handbook/product/product-processes/milestones/) を使用して作業を計画します。マイルストーンはおおよそ 4 週間です。Engineering Manager は、PSRR の優先順位、クロスチームの議論、チームキャパシティを踏まえてマイルストーン計画を主導します。

### 優先度

私たちは GitLab 標準の [priority scoped labels](/handbook/product-development/how-we-work/issue-triage/#priority) を使用します。

| 優先度 | 意図 | 目標解決 |
|----------|-----------|-------------------|
| `~"priority::1"` | キャパシティ制約にかかわらず、できるだけ早く対応する | 30 日 |
| `~"priority::2"` | 早めに対応する。今後数マイルストーンでキャパシティを割り当てる | 60〜90 日 |
| `~"priority::3"` | 可能なときに対応する。より優先度の高い作業によって後ろ倒しになる可能性がある | 90〜120 日 |
| `~"priority::4"` | 指定されたタイムラインなし | ベストエフォート |

優先度はマイルストーン計画時に EM が設定し、リスク評価、全社的な優先事項、クロスチームのリクエスト、チームのニーズを踏まえます。

### サイジングと見積もり

Issue の weight には標準の [modified Fibonacci scale](https://docs.gitlab.com/tutorials/scrum_events/standups_retrospectives_velocity/#deciding-the-value-of-story-points) を使用します。

| Weight | 複雑さ | おおよその時間 |
|--------|-----------|------------------|
| 1 | ごく小さい。副作用は想定されない | 1 日 |
| 2 | 小さい。要件が明確でテストが単純 | 1〜2 日 |
| 3 | 中程度。コードの範囲は大きめだが、要件は明確 | 2〜3 日 |
| 5 | 複雑。要件は理解されているが、途中でギャップが出る可能性が高い | 3〜5 日 |
| 8 | 非常に複雑。開始前に大きな調査とリサーチが必要 | 5〜10 日 |
| 13+ | 分割が必要。より小さな Issue に分ける | N/A |

これは通常、チームメンバー 1 人あたり 1 マイルストーンで約 20 weight の Work Item を意味し、休暇、祝日、成長と開発の時間に応じて減らします。キャパシティの 60〜80% を事前に計画し、残りは計画外のリアクティブな作業のために確保します。

### 計画外作業

計画後にマイルストーンへ追加された Issue と MR には `~Unplanned` ラベルを使用します。これにより、計画済みキャパシティと計画外キャパシティの配分が適切かを追跡し、繰り返し発生する割り込みの原因を特定できます。

### 作業追跡

私たちは、適切な作業を選べていること、正確にサイジングできていること、リスクを早期に提起できていること、進捗の可視性を提供できていることを確認するためにデータを追跡します。バックログ管理、リファインメント、開発、引き継ぎプロセスを含む、チーム固有のワークフローの詳細については、[Detailed Workflows](detailed-workflow/)を参照してください。

## 成功指標

ProdSecEng は、ラベル付けされたマージリクエストと Issue を通じて指標を追跡します。

### アクティブな指標ラベル

これらのラベルは、現在の製品に焦点を当てたミッションに適用されます。

| **カテゴリ** | **ラベル** | **説明** |
| --- | --- | --- |
| **Product Security Requirements** | `~ProdSecEngMetric::ProdSecRequirement` | GitLab Product Security チームによって必要とされる製品内の機能 |
| **Defense in Depth** | `~ProdSecEngMetric::Defense in Depth` | 「先行する」セキュリティ制御が失敗した場合にもより耐性を持つよう、既存の脆弱ではない機能を変更すること |
| **Paved Roads** | `~ProdSecEngMetric::Paved Road` | GitLab のコントリビューターが活動を安全に実行しやすくする新しいツール、方法、チェック |
| **Pending** | `~ProdSecEngMetric::Pending` | 作業タイプがまだ明確ではないが、進捗をブロックしたくないもの |
| **Internal** | `~ProdSecEngMetric::Internal` | プロセスや計画などのチームタスク |

### 縮小中の指標ラベル

これらのラベルは、ProdSecEng の以前のカスタムツールミッションのために設計されました。既存ツールの移行が完了したら廃止されます。

| **カテゴリ** | **ラベル** | **説明** |
| --- | --- | --- |
| **Tooling Integration** | `~ProdSecEngMetric::Tooling Integration` | カスタムインハウスツールの機能を GitLab 製品に統合する一環として行われる作業 |
| **Custom Tooling** | `~ProdSecEngMetric::Custom Tooling` | Product Security 要件を満たすために必要なカスタムツールの構築、保守、拡張作業 |
| **Sunsetting** | `~ProdSecEngMetric::Sunsetting` | カスタムツールを廃止するために必要な特定の機能や機能性を表す Issue |

### 戦略的 KPI

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **Product Security Team Requirements Delivered** | `~ProdSecEngMetric::ProdSecRequirement` ラベル付きのマージ済み MR の数 | Active |
| **Security Enhancements and Paved Roads Delivered** | `~ProdSecEngMetric::Defense in Depth` または `~ProdSecEngMetric::Paved Road` ラベル付きのマージ済み MR の数 | Active |
| **Custom Tool Value Integrated Into Product** | 製品に貢献されたカスタムツール内の個別の価値提案の割合 | Winding down |

### 運用 KPI

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **Backlog Health and Refinement** | リファインメントされた候補 Issue の数、`Ready for Development` ステータスの Issue、マイルストーン全体でのリファインメント参加 | Active |
| **Milestone Predictability** | 各マイルストーンで完了した実績と計画の比較 (weight と指標ラベルで測定) | Active |
| **Metric Label Coverage** | 適切な `~ProdSecEngMetric::*` ラベルが付いたマージ済み MR とクローズ済み Issue の割合 | Active |

## コミュニケーション

1. **Slack**: Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) で質問し、`@product-security-engineering` ハンドルをメンションしてください
1. **GitLab**: `@gitlab-com/gl-security/product-security/product-security-engineering` をメンションしてください
1. **Issue**: [ProdSecEng チームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) に提出してください
1. **緊急時**: 任意の Slack チャンネルで `/security` を使用して Security Incident Response Team をページングしてください

[Professional Services Engineer](/job-description-library/sales/professional-services-engineer/) と混同しないように、私たちは短縮名として「ProdSecEng」を使用しています。

## チーム構成

ProdSecEng チームは以下で構成されます。

- **Security Engineering Manager**: チームの優先順位付け、ロードマップ計画、マイルストーン計画をリードし、Product および Engineering とのクロスファンクショナルな関係を管理します
- **Product Security Engineers**: セキュリティ機能、自動化ソリューション、製品への貢献を設計、開発、検証します

### 開発目標

私たちのチームはソフトウェアエンジニアとセキュリティエンジニアが混在しています。成長と開発の計画には次が含まれます。

1. GitLab のコードベース、アーキテクチャ、開発プラクティスに関する専門知識を拡大する
1. セキュリティ要件をユーザー中心の製品機能へ変換するためのスキルをさらに深める
1. Product Manager や Engineering チームとのクロスチームコラボレーションを強化する
1. AI 支援セキュリティツールと実装に関する実践的な経験を積む

## レビューと更新

このチャーターは四半期ごとにレビューされます。次回予定されているレビュー: 2026 年 10 月 1 日。
