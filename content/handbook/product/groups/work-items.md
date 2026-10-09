---
title: "Plan:Work Items"
upstream_path: /handbook/product/groups/work-items/
upstream_sha: 48abec5939783dec7dd722f4427e0eba53023f6f
translated_at: "2026-10-09T21:10:17+00:00"
translator: claude
stale: false
lastmod: "2026-10-06T15:47:25+03:00"
---

### Plan: Work Items {#welcome}

[すべてのチームメンバーと固定の連携担当者を表示](/handbook/product/categories/#work-items-group)

このチーム全体の責任範囲は、[Work Items Group](/handbook/product/categories/#work-items-group)に記載されています。このグループは、Team Planning（Issue、タスク、マイルストーン、To-Do リスト、タイムトラッキング、ワークアイテムの種類。[ドキュメント](https://docs.gitlab.com/topics/plan_and_track/)を参照）、Service Desk（[ドキュメント](https://docs.gitlab.com/user/project/service_desk/)を参照）、Notifications（[ドキュメント](https://docs.gitlab.com/user/profile/notifications/)を参照）の 3 つのカテゴリを担当します。ワークアイテムのフレームワーク自体も担当します。

- 質問があります。誰に聞けばよいですか？

GitLab の Issue で質問する際は、まず Product Manager（`@gweaver`）にメンションしてください。UX に関する質問は、Plan ステージの Product Design の窓口である [Nick Brandt](https://gitlab.com/nickbrandt) または [Sunjung Park](https://gitlab.com/sunjungp)に @ メンションしてください。GitLab のチームメンバーは、[#g_work_items](https://gitlab.slack.com/archives/g_work_items)も使用できます。

### パフォーマンス指標 {#performance-indicators}

#### 顧客価値 {#customer-value}

- [有料月間アクティブユーザー数（Paid GMAU）](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/3315ab7c-ed1d-4053-bba8-cb8fc870af2b/AllGMAU?:iid=1)
- [月間アクティブユーザー数](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/97aea9ea-11af-4f4e-8e6b-21db9738de2b/PaidGMAU?:iid=1)
- システムユーザビリティスコア（SuS）- Work Items の製品領域に起因する批判者の数を、直近の四半期を対象とする集計で減らす

#### 製品品質 {#product-quality}

- [エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-work_items/stage-groups-group-dashboard-plan-work-items?orgId=1)の目標は `> 99.95%`
- 流出した不具合 - canary または本番環境で見つかった不具合や脆弱性について登録されたバグまたはセキュリティ Issue の数を、直近の 1 か月を対象に集計する

#### プロセス {#process}

- オープン中の MR の経過時間（OMA）
- オープン中の MR のレビュー時間（OMRT）
- マージリクエスト率 - 直近の 1 か月を対象とする、エンジニア 1 人あたりの平均 MR 数
- リードタイム - Issue が `workflow::validation backlog` から `closed` まで進むのにかかる日数の中央値。
- 検証トラックのサイクルタイム - Issue が `workflow::validation backlog` から `workflow::planning breakdown` まで進むのにかかる日数の中央値。
- ビルドトラックのフェーズ 1 のサイクルタイム - Issue が `workflow::planning breakdown` から `workflow::ready for development` まで進むのにかかる日数の中央値。
- ビルドトラックのフェーズ 2 のサイクルタイム - Issue が `workflow::ready for development` から `closed` まで進むのにかかる日数の中央値。
- 製品開発フローのワークフローラベルの採用

### 私たちの働き方 {#how-we-work}

- 私たちの [GitLab の価値観](/handbook/values/)に従います。
- 透明性を保ちます。ほぼすべてを公開し、可能な限りミーティングを録画/ライブ配信します。
- 自分が取り組みたいことに取り組む機会があります。
- 誰でも貢献できます。サイロはありません。
- [#s_plan_standup](https://gitlab.slack.com/messages/CF6QWHRUJ)で、任意参加の非同期の日次スタンドアップを行います。

#### キャパシティ計画 {#capacity-planning}

今後のリリースのキャパシティを計画する際、私たちは次のことを考慮します。

1. 次のリリース中にチームが稼働できる時間。（休暇を取る人がいるか、ほかに時間を割く必要があるか。）
1. 現在開発中で、まだ完了していない作業。
1. グループごとの過去の提供実績（ウェイト換算）。

最初の項目により、最大キャパシティとの比較ができます。たとえば、チームに 4 人いて、そのうち 1 人が月の半分を休む場合、チームのキャパシティは最大の 87.5%（7/8）と言えます。

2 番目の項目は難しく、一度着手した Issue に残っている作業量は過小評価しやすいものです。特に、その Issue がほかの Issue をブロックしている場合はそうなります。現在、繰り越す Issue のウェイトは付け直していないため（元のウェイトを保持するため）、この項目は現時点ではかなり曖昧です。

3 番目の項目は、過去の実績を示します。傾向が下降している場合、EM がマイルストーン計画の議論で取り上げます。

予想キャパシティ（項目 1 と 3 の積）から繰り越し分のウェイト（項目 2）を差し引くと、次のリリースのキャパシティが分かるはずです。

#### ワークフロー {#workflow}

Issue とエピックは、通常、私たちの[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)に従います。

Work Items の Issue 一覧：

- [`group::work items` ラベルが付いた Issue](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items)
- [同じ一覧のうち、現在のマイルストーンのもの](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items&milestone_title=%23started)

#### テーマ {#themes}

少数の優先度の高い機能を、一定期間の「テーマ」として選びます。テーマは、直接貢献しないメンバーも含めて、チーム全体が成果物を中心に結集する機会を作ります。関係者全員がこれらの項目に特に注意を払い、小さなイテレーションで提供し、作業がブロックされないようにします。チームごとに同時に進行するテーマは、決して 2 つを超えてはなりません。

- #f_[feature name] という規約で Slack チャンネルを作成します。
- イテレーションに対応するサブエピックを持つエピック階層を作成し、それぞれを 1 つのマイルストーン内で達成できるようにします。
- イテレーションを独立して完了できる複数の Issue に分割し、PM が通常どおりスケジュールします。
- 定期的な「オフィスアワー」の通話など、ほかの活動を設けることもあります。

複雑さが明らかになるにつれて、チームメンバーが協力してイテレーションを継続的に改善します。

このように分解したテーマの例：

1. **設定可能なステータス**（[エピック](https://gitlab.com/groups/gitlab-org/-/epics/17709)）
1. **カスタムフィールド**（[エピック](https://gitlab.com/groups/gitlab-org/-/epics/235)）

#### 顧客との対話 {#talking-with-customers}

理想的には、顧客とのすべての対話に各部門の代表者が参加します。この実現に近づくため、セールス経由で顧客との通話を設定する人、ユーザビリティ調査を行う人、顧客や見込み客と話す時間を設ける人には、イベントの招待先として [Plan Customer Interviews カレンダー](https://calendar.google.com/calendar/u/0/embed?src=gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com)を追加することを推奨します。これにより、予定されている顧客やユーザーとのやり取りが共有カレンダーに自動的に登録されます。すべてのチームメンバーの参加を歓迎し、推奨します。話を聞いて背景を把握するだけの参加でも構いません。

[gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com](mailto:gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com)という URL を使ってカレンダーを購読し、自分が設定する顧客ミーティングの参加者として招待できます。

### スピードラン {#speed-runs}

- ラベル
  - [スコープ付きラベル](https://youtu.be/ebyCiKMFODg)
- Issue
  - [説明の変更履歴](https://youtu.be/-JgfJSSLYlI)
