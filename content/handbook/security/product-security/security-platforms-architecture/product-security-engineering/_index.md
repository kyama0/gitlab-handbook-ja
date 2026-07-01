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

Product Security Engineering (ProdSecEng) は、[Product Security](/handbook/security/product-security/) (ProdSec) 内のチームであり、VP of Product Security にレポートします。

## ミッションステートメント

ProdSecEng は、セキュリティリスクに対処する価値の高いセキュリティ機能を GitLab 製品に組み込み、出荷します。私たちは Product および Engineering と直接連携し、セキュリティ要件、リスクインサイト、社内の専門知識を、GitLab とお客様の双方に利益をもたらす製品改善と機能に変換します。

私たちは GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)に従い、長期的にその機能を所有するチームと並んでコードに貢献します。

## 価値提案

私たちは、実践的なセキュリティエンジニアリングを製品開発プロセスへ直接持ち込みます。ProdSec チームがリスクと要件を特定し、ProdSecEng がそれらを出荷済みの製品機能に変換します。これにより、セキュリティ機能をより早くお客様へ届けられ、Product と Engineering は専任のセキュリティエンジニアリングパートナーを得られ、ProdSec は自分たちのワークフローに対して GitLab 製品自体を検証できます。

## 重点領域

私たちの作業は、価値の高いセキュリティリスクに対処し、Product と Engineering の方向性に沿ったエピックによって推進されます。具体的な重点領域は、マイルストーン計画中に設定され、[Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/) とクロスチームの議論を踏まえて決まります。

## スコープと責任

### 私たちが所有するもの

ProdSecEng は、GitLab 製品に出荷されるセキュリティエンジニアリング作業の提供を所有します。

1. **セキュリティ製品貢献の共創と提供**: 貢献には、GitLab の製品リスクを低減する改善や、お客様と開発チームがデフォルトでセキュリティプラクティスに従いやすくするソリューションが含まれます。私たちは [co-create workflow](/handbook/security/product-security/security-platforms-architecture/security-interlock/prodsec-to-product-workflow/#co-create-workflow)に従い、Engineering と Product のロードマップを補完する作業について両チームと連携します。
1. **製品検証 (Customer Zero)**: ProdSec が Customer Zero として行動する [Security Interlock](/handbook/security/product-security/security-platforms-architecture/security-interlock/) イニシアチブを通じて、GitLab セキュリティ機能を検証します。
1. **概念実証**: より広範な実装または引き渡しの前に、提案されたセキュリティソリューションを検証します。
1. **ドキュメントとナレッジ移転**: 私たちの貢献に関するドキュメント、Runbook、ガイドを作成および保守します。

> **移行: カスタムツール（2026 年 7 月 1 日発効）**
>
> 2026 年 7 月 1 日より前は、ProdSecEng は Security 部門に代わって、インテーク、保守、ツールの廃止を含むカスタム社内セキュリティツールの保守と管理も所有していました。この責任は、GitLab の Act 2 運用モデル変更の一環として終了に向かっています。
>
> チームの既存のカスタムツールに関するコミットメントは、所有チームへ移行中です。移行計画は最終化され、[社内ハンドブックのツールインベントリ](https://internal.gitlab.com/handbook/security/product_security/product_security_engineering/)（GitLab チームメンバーのみアクセス可能）に文書化されています。新しいカスタムツールのリクエストは受け付けていません。既存ツールについて質問があるチームは、Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) で連絡してください。

### 仕事の入手元

ProdSecEng は次の場所から作業を調達します。

1. **Product Security Risk Register (PSRR)**: [Security Platforms & Architecture (SPA)](/handbook/security/product-security/security-platforms-architecture/) および他の ProdSec チームが特定した、製品エンジニアリングソリューションを必要とするシステミックリスク。
1. **ProdSec とのクロスチーム議論**: 手作業プロセスを製品機能で置き換えたり、セキュリティギャップを埋めたりできる場所を特定するための、ProdSec チームとの直接的なコラボレーション。
1. **Product と Engineering との整合**: 製品ロードマップに合うセキュリティ機能を形作るための、Product Managers および Engineering チームとの共同計画。
1. **Security Interlock**: 適切な場合、[Customer Zero](/handbook/product/product-processes/customer-0/) イニシアチブを通じて GitLab セキュリティ機能を検証します。

### スコープ外

| 領域 | DRI |
|------|-----|
| アプリケーションセキュリティ標準、レビュー、テスト | [AppSec](/handbook/security/product-security/security-platforms-architecture/application-security/) |
| インフラストラクチャ、クラウド、データセキュリティのツールまたはアーキテクチャ | [InfraSec](/handbook/security/product-security/infrastructure-security/) |
| 脆弱性管理、開示、トリアージ | [Vulnerability Operations](/handbook/security/product-security/vulnerability-management/) |
| 新しいカスタム社内ツールの構築または受け入れ | 上記の「移行: カスタムツール」を参照 |

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

## 成功指標 {#success-metrics}

ProdSecEng は、ラベル付けされたマージリクエストと Issue を通じて指標を追跡します。

### アクティブな指標ラベル

これらのラベルは、現在のプロダクト中心のミッションに適用されます。

| **カテゴリ** | **ラベル** | **説明** |
| --- | --- | --- |
| **Product Security 要件** | `~ProdSecEngMetric::ProdSecRequirement` | GitLab Product Security チームが必要とする製品内の機能 |
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

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **配信された Product Security チーム要件** | `~ProdSecEngMetric::ProdSecRequirement` ラベル付きのマージされた MR の数 | アクティブ |
| **配信されたセキュリティ強化と舗装された道路** | `~ProdSecEngMetric::Defense in Depth` または `~ProdSecEngMetric::Paved Road` ラベル付きのマージされた MR の数 | アクティブ |
| **製品に統合されたカスタムツールの価値** | 製品に貢献されたカスタムツール内の個別価値提案の割合 | 終了予定 |

### 運用 KPI

| **指標** | **計算方法** | **ステータス** |
| --- | --- | --- |
| **バックログのヘルスとリファインメント** | リファインメントされた候補 Issue の数、`Ready for Development` ステータスの Issue、マイルストーン全体でのリファインメントへの参加 | アクティブ |
| **マイルストーンの予測可能性** | 各マイルストーンで計画された作業と実際に完了した作業（weight と指標ラベルで測定） | アクティブ |
| **指標ラベルカバレッジ** | 適切な `~ProdSecEngMetric::*` ラベルが付いたマージ済み MR とクローズ済み Issue の割合 | アクティブ |

## コミュニケーション

1. **Slack**: Slack の [`#security_help`](https://gitlab.enterprise.slack.com/archives/C094L6F5D2A) で質問し、`@product-security-engineering` ハンドルをメンションしてください
1. **GitLab**: `@gitlab-com/gl-security/product-security/product-security-engineering` をメンションしてください
1. **Issue**: [ProdSecEng チームリポジトリ](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-engineering/product-security-engineering-team/-/issues/new) に提出してください
1. **緊急時**: 任意の Slack チャンネルで `/security` を使用して Security Incident Response Team をページングしてください

[Professional Services Engineer](/job-description-library/sales/professional-services-engineer/) と混同しないように、私たちは短縮名として「ProdSecEng」を使用しています。

## チーム構成

ProdSecEng チームは以下で構成されます。

- **Security Engineering Manager**: チームの優先順位付け、ロードマップ計画、マイルストーン計画をリードし、Product および Engineering とのクロスファンクショナルな関係を管理します
- **Product Security Engineers**: セキュリティ機能、自動化ソリューション、製品貢献を設計、開発、検証します

### 開発目標

私たちのチームはソフトウェアエンジニアとセキュリティエンジニアの混合体です。成長と開発の計画は次のとおりです。

1. GitLab のコードベース、アーキテクチャ、開発プラクティスに関する専門性を拡大する
1. セキュリティ要件をユーザー中心の製品機能に変換するスキルを深める
1. Product Managers および Engineering チームとのクロスチームコラボレーションを強化する
1. AI 支援セキュリティツールと実装に関する実践的な経験を開発する

## レビューと更新

このチャーターは四半期ごとにレビューされます。次回予定されているレビュー: 2026 年 10 月 1 日。
