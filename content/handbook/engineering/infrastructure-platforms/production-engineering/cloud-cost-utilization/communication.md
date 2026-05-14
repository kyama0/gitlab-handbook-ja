---
title: "コミュニケーションと機密性"
description: "Cloud Cost Utilization チームのコミュニケーションのあり方、および FinOps/CCU データを public、internal、confidential のレベルでどのように分類するかについて"
upstream_path: /handbook/engineering/infrastructure-platforms/production-engineering/cloud-cost-utilization/communication/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## 概要

このページでは、Cloud Cost Utilization (CCU) チームがどのようにコミュニケーションを取り、FinOps/CCU の領域における情報をどのように分類しているかを説明します。これは、[チーム概要](_index.md) のガイダンスを補完し、GitLab の [コミュニケーションハンドブック](/handbook/communication/) および [機密性レベル](/handbook/communication/confidentiality-levels/) に基づくものです。

CCU は GitLab の [public by default](/handbook/values/#public-by-default) の価値観に従っています。アクセスを制限する具体的な理由がない限り、情報のデフォルトは internal (全チームメンバーから閲覧可能) とし、可能であれば public とします。

## なぜこれが重要か

プライベートな会話は非効率を生みます。貢献できる可能性のある人を排除し、コンテキストを把握しづらくし、同じ質問を繰り返させる原因となります。議論を public なチャンネルや Issue に移すことで、チームのスループットが向上し、個々のチームメンバーの精神的な負担が軽減されます。

透明性が最も価値を発揮するのは、それが最も難しく感じられる時です。confidential をデフォルトにすると安全に感じられ、「全員が意見を持つ」問題を避けられますが、まさにそこにプライベートなコミュニケーションのコストが蓄積されていきます。何かが confidential として扱われる場合は、*その理由* を明示してください。「これは … という理由で confidential です」。該当する理由がなければ、internal をデフォルトとします。

## CCU/FinOps のデータ分類

CCU/FinOps のデータは、GitLab の [SAFE フレームワーク](/handbook/legal/safe-framework/) と [機密性レベル](/handbook/communication/confidentiality-levels/) に沿って 3 つのレベルに分類します。

### Public (ハンドブック)

手法、フレームワーク、定義 — **数値、顧客、マージンは含めない**。

- CCU のミッションとスコープ
- [ラベリング戦略](labeling-strategy.md) およびコスト配分のアプローチ
- ユニットエコノミクスの計算式と定義 (測定対象、測定方法、ディメンション、例)

### Internal (SAFE データ)

すべてのクラウドコスト数値、およびマージンを含まない集計値。GitLab のチームメンバー全員が閲覧可能。

- ベンダー、アカウント、サービス、製品ごとのクラウドコスト数値
- マージンや顧客コンテキストを含まないユニットエコノミクスの集計値 (例: `gl_service` ごとのコスト、環境ごとのコスト)
- `gl_service` レベルのコスト予算と削減目標 (オーナーチームと議論して設定する技術的予算)

### Confidential / MNPI

特定の対象者に限定されます。例:

- マージンビュー (ホスティングマージン、製品/セグメントマージン、マージンブリッジ)
- 顧客レベルまたは顧客セグメントのエコノミクス (例: 顧客ごとのホスティングコスト、プランごとのマージン、Duo のユニットマージン)
- 会社レベルのホスティング AOP/予算
- 将来予測の財務情報

## コミュニケーションチャンネル

| チャンネル | 用途 |
|---|---|
| [`#g_cloud-cost-utilization`](https://gitlab.enterprise.slack.com/archives/C09MUMXRECC) | CCU チームチャンネル — CCU が **主導またはオーナーとなる** チーム業務やトピック |
| `#g_finops` | より広い FinOps 領域 — CCU が参加または影響を受けるが、主導はしないトピック |
| `#g_hosting_exec` | VP/エグゼクティブのコンテキストでの Confidential/MNPI のトピック |
| [CCU Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/issues) | 追跡対象の業務およびリクエスト |

`#g_cloud-cost-utilization` は CCU チームの議論のデフォルトです。

ホスティングコストに関する質問など、トピックがより広い FinOps 領域に及ぶ場合は `#g_finops` を使用してください。

confidential なチャンネルは、内容が上記の confidential 分類に実際に該当する場合のみ使用してください。

## ダイレクトメッセージとプライベートグループの取り扱い

CCU はダイレクトメッセージやプライベートグループチャットでの業務リクエストを受け付けません。GitLab ハンドブックでも同様のガイダンスが示されています: [グループダイレクトメッセージは使わない](/handbook/communication/#do-not-use-group-direct-messages) および [public チャンネルを使う](/handbook/communication/#use-public-channels)。

CCU に対してアクション、トピックへの時間の割り当て、意思決定への意見を求めるプライベートメッセージを受け取った場合:

1. メッセージを受け取ったことを伝え、`#g_cloud-cost-utilization`、`#g_finops`、または [CCU Issue トラッカー](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/issues) の Issue といった public なフォーラムにリダイレクトします。
2. 自分で理由を説明するのではなく、[グループダイレクトメッセージは使わない](/handbook/communication/#do-not-use-group-direct-messages) へのリンクを示します。
3. リダイレクトされるまでは、そのトピックに時間を割きません。

これは依頼者が誰であっても適用されます。本質的な質問が優先順位付けにある場合は、リクエストを CCU の Engineering Manager にルーティングできます。

Issue に収まらない議論の場合は、適切な public Slack チャンネルに会話を移し、スレッド内で返信してください。コンテキストは多くの場合より広い対象者にとっても有用であり、他のメンバーも意見を述べることができます。
