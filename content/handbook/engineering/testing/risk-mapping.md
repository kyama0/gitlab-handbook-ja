---
title: "Risk Mapping"
description: "リスクと緩和計画への戦略的アプローチを構築する。"
upstream_path: /handbook/engineering/testing/risk-mapping/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

### ゴール

リスクマップを次のためのツールとして活用します:

- チームが直面するリスクを理解する
- 緩和計画の透明性を高める
- 限られたリソースを効果的に配分する
- Quality の改善に戦略的に協働する

### リスク管理

リスク管理とは、リスクと、それがビジネスおよび組織のすべての領域に与える影響を特定するプロセスです。これらのリスクを特定することは、その悪影響を最小限に抑える決定を下し実行する上で、チームを大いに助けます。リスクに注意を集中させ、それらをコントロールし緩和するために必要なリソースを投入することで、チームは不確実性からより良く身を守り、製品の安定性、品質、パフォーマンスを向上させられます。

リスク管理のサイクルは 6 つのフェーズで構成されます:

- 認識 (Awareness)
- 特定 (Identification)
- 評価 (Evaluation)
- コントロール (Control)
- 実装 (Implementation)
- 監視 (Monitoring)

## リスクマップの構築方法

### 一般的なリスクマップ

認識を高めリスクの特定を始めるため、まず 2 つのリスト — Areas（領域）と Facets（側面） — を作成します。例:

| Area |
| ------ |
| Team |
| Product |
| Infrastructure |
| UX |
| Quality |
| Community |
| Customers |
| ... |

| Facet |
| ------ |
| Expertise |
| Performance |
| Test Coverage |
| Migrations |
| Scalability |
| Stabilility |
| Experience |
| Data |
| ... |

Areas と Facets を組み合わせて、各セルが関連するリスクとなるテーブルを作成します。例:

| **Areas** | Team | Product | Infrastructure | UX | Quality | ... |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Facets** | ------ | ------ | ------ | ------ | ------ | ------ |
| Expertise | ドメイン知識の集中 |  | | | SET の不足 | |
| Performance | バーンアウト | SLO/SLA をしばしば達成できない | 障害 |  | フレーキーなテスト | |
| Test Coverage | |  | テスト環境を再現するのが難しい | |  | |
| Migrations | | 顧客が以前の製品/プラットフォームから移行するのに苦労する | データベース移行がしばしば障害を引き起こす | |  | |
| Scalability |  | |  | | 需要に応えるための Quality 取り組みの格下げ | |

異なる Areas と Facets を統合してリスクに名前を付け、ブレインストーミングを助けた後、次のフェーズ — 評価 — では、それがどのような影響を引き起こす可能性があるかを理解し、各リスクの影響レベルと発生確率を見積もる必要があります。これら 2 つの次元の積がリスクのスコアを決定します（スコアが高いほど優先度が高い）。

#### 一般的なリスクマップの例

#### マップの凡例

- Impact — リスクが緩和または排除されない場合に何が起こるか
- Impact level — 1（低）から 5（高）で評価
- Probability — 1（低）から 5（高）で評価
- Priority — Impact × Probability。最も高いスコアに最初に対処する。
- Mitigation — 影響または確率を下げるためにできること

| Risk Area            | Risk Description                                             | Impact | Impact level | Probability | Priority | Mitigation |
| -------------------- | ------------------------------------------------------------ | ------ | ------------ | ----------- | -------- | ---------- |
| Team/Stability       | バーンアウト                                                     | 低い生産性と人員流出 | 5 | 2 | 10 | |
| Team/Scaling        | 非効率なチームメンバーのオンボーディング                            | 長期にわたる低い生産性 | 3 | 2 | 6 | |
| Team/Expertise       | 知識の集中                                   | SLO/SLA の未達 | 4 | 3 | 12  | |
| Customer             | 約束の不履行                                              | GMAU の減少 | 5 | 2 | 10 | |
| Customer             | コミュニティとの信頼の毀損                              | コミュニティ貢献の減少 | 5 | 1  | 5 | |
| Product/Scope        | 製品がどのように使われているかについての知識不足     | [METRIC] の減少 | 3 | 3 | 9 | |
| Product/Scope        | 製品の多くの異なる領域を持つことによるセキュリティ脆弱性の増加 | 信頼/収益の損失 | 5  | 1 | 5 | |
| Product/Data         | ユーザーメトリクスとアクティビティメトリクスが不完全で追跡が難しい | 不正確なセンシングデータ | 4  | 3 | 12 | |
| Quality              | 目標達成のための品質の格下げ                            | 流出したバグ | 5 | 3 | 15 | |
| Quality              | 不確実なテストカバレッジ                                      | テスト工数の優先順位付けが難しい | 3 | 3 | 9 | |
| Feature/Performance  | _____ による低いパフォーマンス      | 低い顧客満足度、[METRIC] の減少 | 5  | 4 | 20 | |
| Feature/Testability  | 実世界のテストシナリオを推進するのが難しい                      | 流出したバグ | 4 | 4 | 16 | |
| Feature/Dependencies | グループ間の作業がタイムリーに優先順位付けされない    | 成果物の遅延、顧客満足度の低下、チーム生産性の低下 | 3 | 3 | 9 | |

チームは、この演習を自分たちの Product Categories、さらには Feature レベルにまで拡張することで反復し、リスクをより詳細に理解できます。

### リスクコントロール

リスクの影響と確率を評価した後、コントロールと実装のフェーズでは、影響の悪影響を減らすために各リスクに対する緩和策を作成する必要があります。緩和策は、影響領域の周辺で作業を計画するための戦略です。リスクに対処するためのいくつかの戦略的な方法は次のとおりです:

- リスク回避 (Risk avoidance) — 結果が、問題を緩和するコストを正当化するには大きすぎると判断される場合に使用します。
- リスク受容 (Risk acceptance) — 緩和の取り組みを優先するため、一定期間リスクを受け入れます。
- リスク移転 (Risk transfer) — リスクを防御または緩和する能力に応じて、異なるチーム間にリスクを配分します。
- リスク監視 (Risk monitoring) — プロジェクトと関連リスクの、関連リスクの影響における変化を追跡し続けます。

リスクと、その緩和に向けて行われている作業を追跡・監視することは、チームの好みのワークフローに委ねられます。

#### Risk Mapping Tool

Risk Mapping Tool は、チームがリスクと計画された緩和策を簡単に可視化するのに役立ちます。手動でリスクマップを作成する必要を避けたい場合に、チームはこれを実装してもよいでしょう。これはリスクマッピングプロセスをサポートし、チームが生産的な方法で全体的な品質を戦略的に改善する際に、より透明で協働的かつ効率的になれるようにします。

Risk Mapping Tool のセットアップは必須ではありませんが、リスク状況のすばやい可視化に役立つかもしれません。リスク状況を測定するメトリクスが整っている場合、Risk Mapping Tool はこれらをより簡単に明らかにできます。

Risk Mapping ツールをインストールするには、[README](https://gitlab.com/gitlab-org/quality/risk-mapping-tool/-/blob/master/README.md) の手順に従ってください。

希望すれば、チームやグループは [視覚的なリスクマップ](https://docs.google.com/presentation/d/1T_9mMQuBHeQzgXIZdV5asicW6h8z_10kbqJYswzJCjM/edit?usp=sharing) にこれらを手動で入力することもできます。完成した視覚的なリスクマップの例は [こちら](https://docs.google.com/presentation/d/1d3RoC7Tp1qoQrv1sldjgC9Q0u5ODkSo50ECS0dS9XIo/edit?usp=sharing) です。
