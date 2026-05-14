---
title: KPI
upstream_path: "/handbook/company/kpis/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: "claude"
stale: false
---

## KPI とは

GitLab のあらゆる部分には Key Performance Indicators（KPI）があります。
より明示的に表現できる場面では metric という用語を避けます。
代わりに KPI を使います。
ある機能の KPI は、E-group の該当メンバーが所有します。
1 つの機能は、追跡している多くの Performance Indicator（PI）を持つことができ、そのすべてが KPI になるわけではありません。
KPI は PI のサブセットであるべきで、リーダーシップに対して可視化すべき最も重要な PI を示すために使われます。

KPI の定義は、[機能と成果](/handbook/about/handbook-usage/#organized-by-function-and-results)で構成されたハンドブックの中で最も関連性の高い箇所に置く必要があります。
定義の中では、この指標の正式な情報源が何かを必ず明記します。
計算式がある場合は、それも含めます。
KPI に関連する目標は、定義と一緒に配置するべきです。
たとえば「リリースあたりのワイダーコミュニティからの貢献数」はハンドブックの Developer Relations の部分にあり、「採用までの平均日数」はハンドブックの Talent Acquisition の部分に置きます。

## KPI インデックス

## 凡例

以下のアイコンは [Phase 1](/handbook/company/kpis/) に該当し、GitLab の誰でも割り当てることができます。

📊 KPI が稼働中であり、公開されており、GitLab ハンドブック内で定義の隣に埋め込まれている。

🔗 KPI が稼働中であり、別システムへのリンクである。KPI が[Internal](/handbook/communication/confidentiality-levels/#internal)であるか、まだ GitLab ハンドブックに埋め込めないため。

🔒 KPI が稼働中であり、[Limited Access](/handbook/communication/confidentiality-levels/#limited-access) のシステムへのリンクである。

🚧 KPI が `WIP: work in progress` 状態で、1 か月以内に稼働予定。Issue へのリンクを含めるべき。

🐔 KPI が近い将来に稼働する見込みが低い。

## GitLab KPI

GitLab の **North Star metric** はランレート売上です。加えて他に 10 個のトップ KPI があります。

GitLab KPI はこのページの下にあるレポートの目標と重複します。
GitLab KPI は会社のパフォーマンスを示す最も重要な 10 個の指標であり、最も重要な KPI は Net ARR です。
これらは取締役会の四半期ごとの会議で毎回レビューします。
これらの KPI は、会社にとっての単独での重要性と、その指標を改善するために割かれているマネジメントの集中度の組み合わせによって決定されます。

1. [Revenue](/handbook/company/kpis/#sales-kpis) vs. plan（遅行指標）
1. [R&D Overall MR Rate](/handbook/engineering/performance-indicators/#rd-overall-mr-rate)（先行指標）
1. [Estimated Combined Monthly Active Users (CMAU)](https://internal.gitlab.com/handbook/company/performance-indicators/product/#estimated-combined-monthly-active-users)（先行指標）
1. [Net New Business Pipeline Created ($s)](/handbook/marketing/performance-indicators/#net-new-business-pipeline-created) 🐔（先行指標）
1. [Pipeline coverage start of quarter stage 3+](/handbook/marketing/performance-indicators/#pipeline-coverage)（先行指標）
1. [Percent of Ramped Reps at or Above Quota](https://internal.gitlab.com/handbook/company/performance-indicators/sales/#percent-of-ramped-reps-at-or-above-quota)（遅行指標）
1. [Net Retention](/handbook/customer-success/customer-success-vision/#retention-and-reasons-for-churn)（遅行指標）
1. [Gross Retention](/handbook/customer-success/customer-success-vision/#retention-and-reasons-for-churn)（遅行指標）
1. [12 Month Team Member Voluntary Retention](/handbook/people-group/people-success-performance-indicators/#team-member-voluntary-retention-rolling-12-months)（遅行指標）
1. [Unique Wider Community Contributors per Month](/handbook/marketing/developer-relations/performance-indicators/#unique-wider-community-contributors-per-month)（遅行指標）

## Sales KPI

[Sales KPI](https://internal.gitlab.com/handbook/company/performance-indicators/sales/#kpi-summary) は [Not Public](/handbook/communication/confidentiality-levels/#not-public) であり、[Internal handbook](/handbook/about/handbook-usage/#the-internal-handbook) に文書化されています。

{{< kpi "Sales" >}}

## Marketing KPI

{{< kpi "Marketing" >}}

### Developer Relations 部門 KPI

{{< kpi "Developer Relations Department" >}}

## People Group KPI

### People Success KPI

{{< kpi "People Success" >}}

## Finance KPI

### Finance チーム KPI - Key Review にて報告

{{< kpi "Finance Team" >}}

## Product KPI

GitLab のチームメンバーは、`Okta > GitLab Internal Handbook` から Internal handbook 内のすべての Product Performance Indicator にアクセスし、更新できます。

## Engineering KPI

{{< kpi "Engineering Function" >}}

### Customer Support 部門 KPI

{{< kpi "Customer Support Department" >}}

### Development 部門 KPI

{{< kpi "Development Department" >}}

### Infrastructure 部門 KPI

{{< kpi "Infrastructure Department" >}}

### UX 部門 KPI

{{< kpi "UX Department" >}}

## 満足度

私たちは満足度を 1〜5 の段階で測り、体験にどれだけ満足したかを把握します。
NPS は使いません。NPS は特定のスコアを切り捨てるため、忠実度を保ちたい私たちには合いません。
SAT の前に以下の略称を 1 文字つけます。前置の文字なしで SAT を使わないでください。

- C = 使用しません。customer は曖昧（プロダクトかサポートかが分からず、すべてのユーザーが顧客とは限らない）なため
- E = 使用しません。他社では employee が使われるものの、私たちは使いません
- I = Interviewee（ここに応募するよう人にすすめますか）
- L = Leadership（専任の事務サポートを持つエグゼクティブとして、提供される秘書サポートはどうですか）
- O = [Onboarding](/handbook/people-group/people-success-performance-indicators/#onboarding-tsat)（オンボーディング体験はどうでしたか）
- P = [Product](https://internal.gitlab.com/handbook/company/performance-indicators/product/)（GitLab プロダクトを他人にすすめますか）
- S = [Support](/handbook/support/performance-indicators/#support-satisfaction-ssat)（私たちのサポートフォローアップを他人にすすめますか）
- T = Team-members（ここで働くことを他人にすすめますか）

## リテンション

私たちは多くの形でリテンションを追跡しているため、種類を示さずに単に「Retention」と表記するべきではありません。
追跡しているもの:

- [Net Retention](/handbook/customer-success/customer-success-vision/#retention-and-reasons-for-churn)
- [Gross Retention](/handbook/customer-success/customer-success-vision/#retention-and-reasons-for-churn)
- User Retention
- [Team Member Retention](/handbook/people-group/people-success-performance-indicators/#team-member-retention)

## KPI のレイヤー

私たちは多くの異なる[レイヤー](/handbook/company/structure/#layers)で KPI を持っています。

KPI が会社（たとえば GitLab）レイヤーで存在できるのは、それが機能レイヤーでも存在している場合のみです。
言い換えれば、GitLab KPI はエグゼクティブの KPI の複製です。
すべての機能 KPI が GitLab KPI ではありませんが、すべての GitLab KPI は機能 KPI です。

GitLab が成長するにつれて、このことはレイヤー全体にも当てはまるようになります。
すべての部門 KPI が機能 KPI になるわけではありませんが、すべての機能 KPI は部門 KPI になります。
これは組織全体にカスケードしていき、すべての職務ファミリーにそれに関連する Performance Indicator が紐づくようになります。

[KPI インデックス](#kpi-index)は、会社、機能、部門の KPI を捕捉します。これらが最上位の 3 つのレイヤーであるためです。

これに対する唯一の例外は、KPI のフィルターが変わる場合です。
たとえば、GitLab KPI が「Hires vs Plan」であるのに対し、Engineering KPI は「Engineering Hires vs Plan」となる場合があります。
ロジックは同じですが、フィルターが変わります。

## KPI を構成する要素

KPI または指標は複数の要素から構成されます。

1. 定義: データソースは何か。どのように計算されるか。どのフィールドが含まれるか。どんな注意事項が考慮されているか。なぜ選ばれたのか。
    - 注: 例として [Infrastructure Hosting Cost per MAU](/handbook/engineering/infrastructure/performance-indicators/#infrastructure-hosting-cost-per-gitlab-com-monthly-active-users) を参照してください。
1. ターゲット: 上回ることを目指すもの。たとえば ARR にはターゲットがあります
1. 上限: 下回ることを目指すもの。たとえば離職率には上限があります
1. [職務記述](/handbook/hiring/job-description-library/): この Performance Indicator を含む職務記述へのリンク
1. 計画: 年次計画に組み込んでいるもの
1. コミット: 最も悲観的な見通し
1. 50/50: 中央値の見積もり。上振れと下振れが 50% ずつ
1. ベストケース: 最も楽観的な見通し
1. フォーキャスト: 4 四半期のローリングフォーキャストで使うもの
1. 実績: 実際の数字

## 何が公開されるか

ドキュメント「GitLab Metrics at IPO」には、私たちが公開する可能性のある KPI が記載されています。
すべての KPI には公開可能な定義、目標、職務ファミリーへのリンクがあります。
実際の実績と各種見積もりは以下のいずれかになります。

1. ライブ報告
1. 四半期報告
1. 非公開
