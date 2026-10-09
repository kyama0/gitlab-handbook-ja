---
title: "Plan:Work Items チーム"
upstream_path: /handbook/engineering/devops/plan/work-items/
upstream_sha: 48abec5939783dec7dd722f4427e0eba53023f6f
translated_at: "2026-10-09T21:10:17+00:00"
translator: claude
stale: false
lastmod: "2026-10-06T15:47:25+03:00"
---

## Plan:Work Items チーム {#planwork-items-team}

Plan:Work Items チームは、[Plan ステージ](/handbook/engineering/devops/plan/)の GitLab の [Work Items グループ](/handbook/product/categories/#work-items-group)に取り組みます。
このグループは、FY27 の組織再編で Project Management から改名しました。

### 私たちの担当範囲 {#what-we-own}

このグループは 3 つのカテゴリと、それらの基盤となるワークアイテムのフレームワーク（ウィジェット、およびワークアイテム用の GraphQL API と REST API）を担当します。

- Team Planning：Issue、タスク、ラベル、マイルストーン、担当者、ウェイト、日付、ステータス、タイムトラッキング、ディスカッション、内部メモ、説明テンプレート、クイックアクション、ワークアイテムの種類と設定、およびマージリクエストとのリンク。[計画と追跡のドキュメント](https://docs.gitlab.com/topics/plan_and_track/)を参照してください。
- Service Desk：サービスデスクの Issue、カスタムメールとブランディング、および顧客関係管理（CRM）。[Service Desk のドキュメント](https://docs.gitlab.com/user/project/service_desk/)を参照してください。
- Notifications：ウェブとメールの通知、および To-Do。[通知のドキュメント](https://docs.gitlab.com/user/profile/notifications/)を参照してください。

### チームメンバー {#team-members}

{{< team-by-manager-role role="Engineering Manager(.*)Plan:Work Items" team="Plan:Work Items">}}

### 固定の連携担当者 {#stable-counterparts}

{{% engineering/stable-counterparts manager-role="Engineering Manager(.*)Plan:Work Items" role="Plan:Work Items|Security(.*)Plan( |:|,|$)|Principal(.*)Plan$" %}}

Technical Writer は Brendan Lynch です。UX に関する質問は、Plan ステージの Product Design の窓口である [Nick Brandt](https://gitlab.com/nickbrandt) または [Sunjung Park](https://gitlab.com/sunjungp)に @ メンションしてください。

## 私たちの働き方 {#how-we-work}

Plan ステージのページには、[ステージとしての働き方](/handbook/engineering/devops/plan/)が記載されています。

特にバックエンドチームでは、GitLab 標準の
[エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用します。Plan:Work Items チームに連絡するには、
関連するプロジェクト
（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab)）で Issue を作成し、~"group::work items" ラベルと
その他の適切なラベルを追加してください。その後、上記に記載された該当する
Product Manager または Engineering Manager にメンションしてください。

簡単な質問には、Slack の [#g_work_items](https://gitlab.slack.com/archives/g_work_items)を使用してください。[#s_plan](https://gitlab.slack.com/archives/s_plan)はステージ全体のチャンネルで、[#s_plan_standup](https://gitlab.slack.com/archives/s_plan_standup)は非同期スタンドアップ用です。

### エラーバジェット {#error-budget}

[エラーバジェットのダッシュボード](https://dashboards.gitlab.net/d/stage-groups-work_items/stage-groups-group-dashboard-plan-work-items)には、グループの可用性目標に対する達成状況が表示されます。

[Engineering Excellence ダッシュボード](https://gitlab-com.gitlab.io/eng-excellence/?view=ee&scope=stage%3Aplan)（社内向け、サインインが必要）には、Plan ステージのベロシティ、信頼性、正確性、セキュリティ、効率性が表示されます。

### キャパシティ計画 {#capacity-planning}

#### 工数の見積もり {#estimating-effort}

今後の作業に関わる工数を見積もる際は、Plan ステージのほかのグループと同じ方法と数値尺度を使用します。

<!-- include omitted: includes/engineering/plan/estimating-effort.md (no localized version under content/ja/) -->

#### バグのウェイト付け {#weighing-bugs}

<!-- include omitted: includes/engineering/plan/weighing-bugs.md (no localized version under content/ja/) -->

#### 機能開発作業の詳細化と整理 {#refining-and-organizing-feature-work}

固定の連携担当者との認識合わせを促し、進捗を可視化し、ビジョンを一連の [MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)に分解するため、[`~workflow::planning breakdown`](/handbook/product-development/how-we-work/product-development-flow/#description-4)の段階で Product および UX と協力して、`~type::feature` の成果物を次の構造に詳細化・整理します。

- 機能（エピック）- 対応するフィーチャーフラグをデフォルトで「on」にするために必要な、機能を縦に分割したすべての単位を含みます。機能エピックは、対応するリリース投稿項目の MR を作成する場所としても機能します。機能エピックの範囲は、[顧客価値を提供する最小限の機能](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)に絞ってください。将来の拡張として予定している追加の範囲は、後続のエピックに記載してください。
  - スパイク（Issue）- 機能の実装に必要な工数を正確に見積もれない場合は、まずスパイクを実施します
  - UX（Issue）- 大規模な取り組みでは、UX が別の UX Issue を作成し、設計目標、設計の草案、設計に関する議論や批評、実装するものとして選ばれた設計方針の SSOT とします。[UX Issue の詳細](/handbook/upstream-studios/product-design/ux-themes/)を参照してください。
  - 機能を縦に分割した単位（Issue）- 1 つのマイルストーン内で完了でき、本番環境の `plan-stage` グループ内でテストおよび検証できる機能の一部です。
    - エンジニアリングタスク（タスク - *任意*）- 機能を縦に分割した単位を提供するために完了する必要がある、1 つ以上のエンジニアリングタスクです。タスクの範囲は通常、1 つの MR に対応するようにしてください。

`~workflow::planning breakdown` フェーズ中に、すべての Issue にウェイトを付ける必要があります。これにより、機能エピックを「適切なサイズに調整する」際に、Product および UX と効率的かつ効果的に協力できます。すべての Issue を、製品の特定領域で提案しているより広い改善内容を記した親エピックに関連付けることを推奨します。目指すのは、範囲をできる限り小さくし、イテレーションの余地を最大化し、提供に向けた全体の進捗を容易に追跡できるようにしながら、意味のある価値を提供し、顧客に過度な「変更疲れ」を与えないことです。

### バックエンドとフロントエンドの連携 {#collaboration-between-backend-and-frontend}

#### ~"backend complete" ラベルの使用 {#using-the-backend-complete-label}

~"backend complete" ラベルは、複数の専門領域（通常はバックエンドとフロントエンド）にまたがる Issue に追加して、
バックエンド部分が完了していることを示します。バックエンドの作業が
機能面で完了し、マージと検証が済んでいて、フロントエンドなどの作業が続いている場合に、このラベルを追加してください。

### 取り組む作業の選択 {#picking-something-to-work-on}

このマイルストーンの作業には、[現在のマイルストーンのうち `group::work items` ラベルが付いた Issue](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items&milestone_title=%23started)を使用し、すべての作業を見るには[全件の一覧](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items)を使用してください。~backend で絞り込むと、バックエンドエンジニア向けの Issue が表示されます。

解決できる自信がなければ、最上位の項目を選ばなくても
構いません。その場合は、[#g_work_items](https://gitlab.slack.com/archives/g_work_items)に投稿してください。おそらく、
Issue の仕様をより明確にする必要があります。

### 重大度の高い Issue {#high-severity-issues}

<!-- include omitted: includes/engineering/plan/high-severity-items.md (no localized version under content/ja/) -->

### スケジュールされていない Issue への取り組み {#working-on-unscheduled-issues}

私たちは[当事者意識](/handbook/company/operating-principles/#ownership-mindset)という行動原則に従います。作業に最も近い人が、その作業について意思決定し、結果に責任を持ちます。また、私たち自身の活動量ではなく、[顧客の成果](/handbook/company/operating-principles/#customer-outcomes)で自分たちを評価します。
スケジュールされていない重要な作業を見つけたら、[スケジュールへの追加を依頼](/handbook/engineering/workflow/#requesting-something-to-be-scheduled)するか、
[自分で提案に取り組む](/handbook/values/#iteration)ことができます。自分にアサインし、[#g_work_items](https://gitlab.slack.com/archives/g_work_items)で共有してください。

## 便利なリンク {#useful-links}

- [`group::work items` ラベルが付いた Issue](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items)
- [同じ一覧のうち、現在のマイルストーンのもの](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=group%3A%3Awork%20items&milestone_title=%23started)
- [エラーバジェットのダッシュボード](https://dashboards.gitlab.net/d/stage-groups-work_items/stage-groups-group-dashboard-plan-work-items)
- [Plan ステージの Engineering Excellence ダッシュボード](https://gitlab-com.gitlab.io/eng-excellence/?view=ee&scope=stage%3Aplan)（社内向け）
- Slack の [#g_work_items](https://gitlab.slack.com/archives/g_work_items) と [#s_plan](https://gitlab.slack.com/archives/s_plan)
- [現在の採用情報](https://about.gitlab.com/jobs/)
