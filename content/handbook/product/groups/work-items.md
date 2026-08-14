---
title: "Plan:Work Items"
upstream_path: /handbook/product/groups/work-items/
upstream_sha: e6de02eba910babdd302a4f920edec669cff51cf
translated_at: "2026-08-15T07:12:58+09:00"
translator: claude
stale: false
lastmod: "2026-08-14T14:39:01+02:00"
---

### Plan: Work Items {#welcome}

[すべてのチームメンバーと安定したカウンターパートを表示](/handbook/product/categories/#work-items-group)

このチーム全体の責任は、[Work Items Group](/handbook/product/categories/#work-items-group) に記載されています。これは特に、ワークアイテム、ボード、マイルストーン、イテレーション、To-Do リスト、タイムトラッキング、プランニングアナリティクス、通知に関する GitLab の機能を扱うことを意味します。

- 質問があります。誰に聞けばいいですか?

GitLab Issue では、質問はまずプロダクトマネージャー（`@gweaver`）にメンションしてください。UX に関する質問は、プロダクトデザイナー（`@nickleonard`）にメンションしてください。GitLab チームメンバーは、[#s_plan](https://gitlab.slack.com/messages/C72HPNV97) も使用できます。

### 方向性

[GitLab](https://about.gitlab.com/direction/) > [Dev Section](https://about.gitlab.com/direction/dev/) > [Plan Stage](https://about.gitlab.com/direction/plan/) > [Project Management Group](https://about.gitlab.com/direction/plan/project_management/)

### パフォーマンス指標

#### 顧客価値

- [Paid Monthly Active Users (Paid GMAU)](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/3315ab7c-ed1d-4053-bba8-cb8fc870af2b/AllGMAU?:iid=1)
- [Monthly Active Users](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/97aea9ea-11af-4f4e-8e6b-21db9738de2b/PaidGMAU?:iid=1)
- System Usability Score (SuS) - Project Management 製品サーフェスエリアに起因する detractor の数を、四半期ローリングベースで減少させる

#### 製品品質

- ターゲット [Error Budget](https://dashboards.gitlab.net/d/stage-groups-work_items/stage-groups-group-dashboard-plan-work-items?orgId=1)、`> 99.95%`
- Escaped defects - canary または本番で見つかった欠陥や脆弱性についてファイルされたバグまたはセキュリティ Issue の数（月次ローリングベース）

#### プロセス

- Open MR Age (OMA)
- Open MR Review Time (OMRT)
- Merge Request Rate - エンジニア 1 人あたりの月次ローリングベースでの平均 MR 数
- Lead Time - Issue が `workflow::validation backlog` から `closed` まで流れるのにかかる中央値の日数。
- Validation Track Cycle Time - Issue が `workflow::validation backlog` から `workflow::planning breakdown` まで流れるのにかかる中央値の日数。
- Build Track Phase 1 Cycle Time - Issue が `workflow::planning breakdown` から `workflow::ready for development` まで流れるのにかかる中央値の日数。
- Build Track Phase 2 Cycle Time - Issue が `workflow::ready for development` から `closed` まで流れるのにかかる中央値の日数。
- Product Development Flow ワークフローラベルの採用

### プロセス改善の取り組みの履歴

| ゴール | ステータス | Issue |
| --------------- | ------ | ----- |
| Issue の 90% 超が現在の Product Development Workflow ステージを正しく反映している | 進行中 | https://gitlab.com/gitlab-org/plan/-/issues/442 |
| 現在のリリースでエンジニアリングがコミットした Issue は、毎月 17 日までに `Deliverable` ラベルが適用されている | 進行中 | https://gitlab.com/gitlab-org/plan/-/issues/442 |

### 私たちの働き方

- [GitLab 価値観](/handbook/values/) に従って。
- 透明性: ほぼすべてが公開で、可能な限りミーティングを記録/ライブ配信します。
- 自分が取り組みたいものに取り組む機会があります。
- 誰でも貢献できます。サイロはありません。
- [#s_plan_standup](https://gitlab.slack.com/messages/CF6QWHRUJ) でオプションの非同期日次スタンドアップを行います。

#### キャパシティ計画

次のリリースのキャパシティを計画する際、私たちは次のことを考慮します。

1. 次のリリース中のチームの可用性。（オフィスを離れているかどうか、または時間に対する他の需要が来るかどうか。）
1. 現在開発中だが完了していない仕事。
1. グループごとの過去の納品（重みによる）。

最初の項目は、最大キャパシティとの比較を私たちに与えます。例えば、チームに 4 人いて、そのうち 1 人が月の半分オフを取る場合、チームは最大キャパシティの 87.5% (7/8) を持っていると言えます。

2 番目の項目は難しく、特に Issue が他の Issue をブロックしている場合、Issue を開始した後にどれだけの仕事が残っているかを過小評価しやすいです。私たちは現在、繰り越される Issue の重み付けを変更しません（元の重みを保持するため）。そのため、これは現時点ではかなり曖昧です。

3 番目の項目は、過去にどうしていたかを示します。トレンドが下向きの場合、これを [レトロスペクティブ](#retrospectives) で議論することを検討できます。

繰り越し重み（項目 2）を期待キャパシティ（項目 1 と 3 の積）から差し引くと、次のリリースのキャパシティが分かるはずです。

#### ワークフロー

Issue とエピックは一般的に、私たちの [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) に従います。

2022 年 1 月から、計画ケイデンスをマイルストーンからイテレーションにシフトする 3 〜 6 か月の実験を実施します。主な目標は、よりタイムリーで質の高い意思決定を可能にするため、より小さなバッチで計画を立てることです。イテレーション計画は、30 分間の週次 Engineering/Product/UX シンクで行われます。重み付けされ `~workflow::ready for development` とマークされた Issue のみが、今後のイテレーションにスケジュールされます。イテレーションを活用しますが、文書化された [プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline) には引き続き従います。

Work Items ボード:

- [Validation Track](https://gitlab.com/groups/gitlab-org/-/boards/4058642?label_name[]=group%3A%3Awork%20items)
- [Build Track](https://gitlab.com/groups/gitlab-org/-/boards/1235826?label_name[]=group%3A%3Awork%20items)
- [Iteration Planning](https://gitlab.com/groups/gitlab-org/-/boards/2528314?label_name[]=group::work+items)
- [Milestone Planning](https://gitlab.com/groups/gitlab-org/-/boards/1910149?label_name[]=group%3A%3Awork%20items)
- [Team](https://gitlab.com/groups/gitlab-org/-/boards/2089576)

#### テーマ

少数の優先度の高い機能が、一定期間の「テーマ」として選ばれます。テーマは、直接貢献しないチームメンバーであっても、チーム全体が成果物を中心に結集する機会を提供します。これらのアイテムは、関係するすべての人によって、小さなイテレーションを提供し、仕事のブロックを解除し続けるという観点で、特に注意深く扱われます。チームごとに同時に進行中のテーマは決して 2 つを超えてはなりません。

- Slack チャンネルは #f_[feature name] という規約で作成されます。
- エピック階層が作成され、サブエピックがイテレーションにマッピングされ、それぞれがマイルストーン内で達成可能です。
- イテレーションは独立に達成できる複数の Issue に分割され、PM はそれらを通常通りスケジュールします。
- 定期的な「オフィスアワー」コールなど、他のアクションも確立される可能性があります。

チームメンバーは、複雑さが明らかになるにつれてイテレーションを継続的に洗練するよう協力します。

成功したテーマの例:

1. **Requirements Management** ([#f_requirements-management](https://app.slack.com/client/T02592416/CUEQBQ7K8)、[エピック](https://gitlab.com/groups/gitlab-org/-/epics/2703))
1. **Jira Importer** ([#f_jira-importer](https://app.slack.com/client/T02592416/CUS6GB2JH)、[エピック](https://gitlab.com/groups/gitlab-org/-/epics/2738))

#### 顧客との対話

理想的な世界では、顧客との対話のすべてにクロスファンクショナルな代表者が参加します。これを実現するために、セールス経由で顧客とのコールをスケジュールしている人、ユーザビリティリサーチを実施している人、または顧客や見込み客と話す時間を一般的にセットアップしている人は、イベントに [Plan Customer Interviews カレンダー](https://calendar.google.com/calendar/u/0/embed?src=gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com) を招待者として追加することが推奨されます。これにより、共有カレンダーに今後の顧客とユーザーのインタラクションが自動的に登録されます。すべてのチームメンバーは、参加して聞くだけのためであっても、参加することが歓迎され推奨されます。

[gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com](mailto:gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com) という URL を使って、カレンダーを購読し、スケジュールしている顧客ミーティングに参加者として招待できます。

#### レトロスペクティブ {#retrospectives}

Plan ステージは、GitLab Issue で月次レトロスペクティブを実施しています。
これらは、最初の議論中は機密扱いとなり、
各月の [GitLab レトロスペクティブ] に間に合うように公開されます。
詳細は、[team retrospectives] を参照してください。

レトロスペクティブ Issue は、[async-retrospectives] プロジェクト内のスケジュールされたパイプラインによって作成されます。動作の詳細については、そのプロジェクトの README を参照してください。

- [GitLab retrospective](/handbook/engineering/careers/management/group-retrospectives/)
- [team retrospectives](/handbook/engineering/careers/management/group-retrospectives/)
- [async-retrospectives](https://gitlab.com/gitlab-org/async-retrospectives)
- [retros](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)

### プロダクトシャドーイング

エンジニアリングのチームメンバーは、プロダクトの安定したカウンターパートをシャドーイングできます。シャドーイングセッションは 2 営業日、または役割の異なる機能で経験を最大化するため複数日に分割された相当する期間続きます。チームのカウンターパートをシャドーイングするには:

1. [plan](https://gitlab.com/gitlab-org/plan) プロジェクトトラッカーで `Product-Shadowing` テンプレートを使用して Issue を作成する;
1. このページへの WIP MR を作成し、以下の表を更新して、自分の名前と Issue リンクを追加する。そして、
1. カウンターパートが Issue にアサインされたら、彼らの名前を追加し、WIP ステータスを削除して、レビューのためにマネージャーにアサインします。

| 月 | Engineering カウンターパート | Product カウンターパート | Issue リンク |
| ----- | ----------------------- | ------------------- | ---------- |
| 2020-07 | Charlie Ablett ([@cablett](https://gitlab.com/cablett)) | Keanon O'Keefe ([@kokeefe](https://gitlab.com/kokeefe)) | [gitlab-org/plan#118](https://gitlab.com/gitlab-org/plan/-/issues/118) |
| 2020-10 | Jan Provaznik ([@jprovaznik](https://gitlab.com/jprovaznik)) | Gabe Weaver ([@gweaver](https://gitlab.com/gweaver)) | [gitlab-org/plan#185](https://gitlab.com/gitlab-org/plan/-/issues/185) |

### スピードラン

- Labels
  - [Scoped Labels](https://youtu.be/ebyCiKMFODg)
- Issues
  - [Description Change History](https://youtu.be/-JgfJSSLYlI)
