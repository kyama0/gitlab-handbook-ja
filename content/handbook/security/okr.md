---
title: "セキュリティ OKR"
upstream_path: /handbook/security/okr/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T12:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## セキュリティ OKR

セキュリティ組織は四半期ごとに [目標と主要な結果 (Objectives and Key Results, OKR)](/handbook/company/okrs) を実行しています。

### 業務の計画、割り当て、実行の方法

会計四半期開始の 4 週間前の月曜日、CEO が #okr チャネルで GitLab 全社に OKR を共有した後の数日以内に、CISO は OKR ドラフトレビューミーティングのアジェンダで、最大 5 つの目標についてセキュリティ部門の OKR を提案します。セキュリティリーダーは、ミーティングに先立って CISO に OKR ドラフトを提案する必要があります。
FY24 Q1 以降、すべてのセキュリティ OKR は [GitLab OKR プロジェクト](https://gitlab.com/gitlab-com/gitlab-OKRs) に文書化されています。フィルタリングを容易にするため、すべてのセキュリティの目標および KR Issue には [division::Security](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?label_name%5B%5D=division%3A%3ASecurity) ラベルが適用されています。

複数のチームやプロジェクトの範囲にまたがる大規模なイニシアチブには、[ワーキンググループ](/handbook/company/working-groups) が必要になる場合があります。

{{% alert title="Note" color="primary" %}}
[クリティカルプロジェクト](/handbook/security/critical-projects/) は比較的定期的に発生し、OKR よりも優先されます。
{{% /alert %}}

#### CEO OKR との整合

セキュリティ部門は、ビジネスが OKR を反復できるようにするために存在します。これは、セキュリティ OKR は通常 CEO レベルの OKR と直接的な関係を持たないものの、ビジネスが継続的な成功を収めるために基礎的なものであることを意味します。

#### OKR の文脈において、優先順位とは何か?

優先順位の高い OKR の目標は、[トップ 5 リスク](/handbook/security/security-assurance/security-risk/storm-program/#top-5-risks) の排除、軽減、または転嫁に直接貢献し、一般的に [複数年戦略](https://internal.gitlab.com/handbook/security/information_security_goals_and_priorities/) (内部リンク) に整合します。そのため、セキュリティの各サブ部門が特定の四半期に独自の OKR を発行しない場合があります。例えば、[セキュリティアシュアランス](/handbook/security/security-assurance/) のアウトプットは、トップ 5 リスクの作成とコンプライアンス活動の実行につながります。そのため、通常業務への注力が優先される場合があります。

#### 合意された優先順位を踏まえ、機能領域はどのように整合するか?

新しい四半期の前:

- **7 週間前の月曜日**: 大まかなアイデアをまとめたボイラープレート Google ドキュメントが作成され、[機能領域のリーダー](/handbook/company/structure/#functional-leaders) 全体で共有されます
- **6 週間前の月曜日**: 機能領域のリーダーが (非同期と同期で) 協力し、次の四半期の目標を決定します。各機能領域のリーダーは、少なくとも 1 つの目標を提案するか、目標ごとに最大 3 つの KR を含めて、すでに提案されている目標に貢献する責任があります。セキュリティの機能領域リーダーは、CISO に OKR ドラフトを提案する必要があります。
  - このレベルの KR は、明確でデータドリブン、定量的なターゲットを持つべきです。場合によっては、KR がベースライン KPI の確立を中心とすることも問題ありません。
- **4 週間前の月曜日**: CEO が #okr チャネルで GitLab 全社に OKR を共有した後の数日以内に、CISO は OKR ドラフトレビューミーティングのアジェンダで、最大 5 つの目標についてセキュリティ部門の OKR を提案します。
  - セキュリティ部門のシニアマネージャー以上はドラフトレビューに参加し、他の機能領域のチームへの依存関係を完全に特定し、シニアリーダーシップから必要な KR の明確化を得ます。
- **2 〜 4 週間前の月曜日**: 各機能領域のマネージャーは、チームと協力して次の四半期の KR 業務を準備します。ハンドブックに記載されているとおり、新しい依存関係が発見される可能性があり、適切にトリアージされる必要があります。他のチームの KR の依存関係となるチームは、責任を持つチームと共にその業務をサポートできることを確認する責任があります。これは直接影響を受けるマネージャー間で決定されます。その確認が行われるまで、KR は最終決定とは見なされません。チームがサポートできない場合、KR は範囲を再設定するか削除されます。包括的な目標は、リスクのある KR がその目標の成功基準の 50% 以上を担う状況でのみ作り直すべきです。
"キャパシティなし" の決定は、主に将来のキャパシティと人員計画の目的でリーダーシップメトリクスとして文書化する必要があります。
- **2 週間前の月曜日**: OKR が最終決定され、[GitLab OKR プロジェクト](https://gitlab.com/gitlab-com/gitlab-OKRs) で共有されます。

### ラベル

ラベルは私たちの OKR と KR に適用され、グループ化と検索を容易にするだけでなく、その優先順位を反映します。

以下を適用します:

- `~Division: Security` ラベルを OKR と KR の両方に
- `FY<yy>-Q<x>` ラベルを OKR と KR の両方に
- `~OKR` ラベルを OKR のみに
- ~`sec-okr::p<x>` 優先度ラベル (下記参照) を OKR のみに

#### 優先度ラベル

OKR の優先度を反映するために、以下のラベルを使用します:

優先度の [スコープ付き](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels) ラベルは 0 から 2 までの範囲で、OKR に適用されます。

- `sec-okr::p0`: [クリティカルプロジェクト](https://internal.gitlab.com/handbook/security/critical_projects) のためにのみ予約されるべきです
- `sec-okr::p1`: チーム/目標全体で 70% 以上完了、重要
- `sec-okr::p2`: ストレッチ (将来の P1 または P0、P0/1 を片付ければこれらに到達する)

### KR の DRI であるとはどういうことか?

KR の Directly Responsible Individual (DRI) は、その主要な結果の成功に責任を負う人を意味します。

これは、あなたが KR の各個別マイルストーンの担当者であることを意味するのではなく、KR が成功し、進捗、リスク、ブロッカーがセキュリティアシュアランスチーム内で適切にコミュニケーションされるように変化を推進する人であることを意味します。

KR の DRI であることには以下が含まれます:

- KR マイルストーンのドラフト作成 (一貫したタイトル付けを含む)
- マイルストーンの進捗を週次で監視
- マイルストーンが期限通りの完了のリスクにある場合、適切なステークホルダーに事前に警告
- OKR レベルのリーダーシップ更新をサポートするための週次 KR レポート

特定の目標は、機能領域のリーダー (ProdSec、SecOps、SecAssurance など) または機能領域リーダーの直属の部下によって DRI されます。個人貢献者が目標をオーナーできそうに見える場合、その目標はおそらくスコープが狭すぎます。

特定の KR はマネージャーまたは IC によって DRI されます。ルールとして、DRI は個人の行動を通じて KR に直接影響を与えられる必要があります。

KR の DRI は、その目標を所有する部門の一員である必要はありません。例えば、InfraSec の IC が SecOps の目標下にある KR を DRI することもできます。

### テンプレート

#### 新しいセキュリティ KR - GitLab テンプレート

:scissors: 以下を GitLab Issue の説明にコピー & ペーストしてください

```text
`Issue Title: FYxx-Qx KR# (OKR Title Reference) measurable title. Example: FY22 Q3 KR1 (Security Training) Achieve 90% completion rate org wide for annual security training.`

## Dependencies

`what do you need to be succcessful with this KR`

## Milestones

- [ ] Milestone 1: Description: `add here` DRI: `add here`
- [ ] Milestone 2: Description: `add here` DRI: `add here`
- etc.
```

#### セキュリティ KR 週次更新

フィールドの更新:

- 進捗 %
- 健全性ステータス: On Track / Needs Attention / At Risk

:scissors: 週末に以下を GitLab.com の KR Issue にコピー & ペーストしてください

```text
## Weekly KR Update for the week starting on YYYY-MM-DD

## What was accomplished this week

-

## What will be accomplished next week

-
```

`YYYY-MM-DD` は週の始まり (月曜日。その日が休日や Family and Friends Day であっても月曜日) です。

### 組織横断的なコラボレーションと共有

**他のチームは私たちの戦略目標への洞察から通常何を得たいと考えているか?** これは、この業務を定義する際に使用すべきレンズです。姉妹部門の戦略的イニシアチブを理解することは、期待値の予測と調整の目的で重要です。

**最もシンプルに、他のチームとどのように共有するか?**
これは最小限実行可能なモデルを示します。姉妹組織が異なるものを必要とすることになれば、イテレーションできます。

- **「今」取り組んでいること** よく構造化されたラベルとエピックなどへの裏付けリンク
- **包括的な戦略的優先事項は何か?** CISO の複数年 + 機能領域戦略文書 (例: 複数年 ProdSec 戦略)
- **セキュリティ組織が今年注力していることは何か?** 今年の一般的な優先事項の箇条書きリスト:
  - 各機能領域のリーダーが 1〜3 個の箇条書きを、それぞれ 1〜2 文で箇条書きリストに提供します。
  - これらはほとんど変わるべきではありませんが、現実主義が常に勝つべきです。
