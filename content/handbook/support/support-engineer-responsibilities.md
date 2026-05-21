---
title: サポートエンジニアの責務
description: GitLab におけるサポートエンジニアの責務の詳細なリスト。Support Global Change Management Issue なしにこのページを移動しないでください。
upstream_path: /handbook/support/support-engineer-responsibilities/
upstream_sha: 18c3e90de89449f1cbbf92c21776a3ea7899476c
translated_at: "2026-05-08T18:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T09:44:14+00:00"
---

## はじめに

1. このページは [サポートエンジニアジョブファミリー](/job-description-library/engineering/support-engineer/) ページの拡張です。
1. このページは [サポートキャリアフレームワーク](/handbook/engineering/careers/matrix/support/) を反映する必要があります。
1. このページの **目的** は、**サポートエンジニアとしてのあなたの責務が何かを知るのに役立つこと** です。
1. **すべての領域に毎週取り組むことは期待されていません**。一部の領域では、見出しタイトルの後ろに括弧書きで頻度の提案が示されています。これは、その領域でどのくらいの頻度で作業するかの目安を示すためのものです。マネージャーは、定期的にどこに努力を集中すべきかを知るのに役立ちます。
1. '**成功とはどのようなものか？**' のサブセクションは、グローバルチーム全体での一貫した貢献を促すのに役立ちます。これらは必ず満たさなければならない厳格な目標ではありません。あなたのロールで成功するために、どのように、どこで貢献するかを知るのに役立つものです。
1. **年次レビューと昇進のためのパフォーマンス測定は、ここに記載されている主な責務とは別の活動です。**
     1. People Group は [GitLab 年次レビュープロセス](/handbook/people-group/360-feedback/) を担当します。
     1. 昇進や、異なるレベルでのロールの理解に関するさらなるリソースは、[サポートエンジニアキャリアパス](/handbook/support/support-engineer-career-path) を読んでください。
1. サポートエンジニアリングには [チームレベルのパフォーマンス指標](/handbook/support/#how-we-measure-our-performance) があります。このページの責務をうまく実行することは、直接的または間接的に KPI の改善に役立ちます。すべてのチームレベルの KPI は、結果として GitLab の会社レベルの目標に関連しています。

## サポートエンジニアの注力領域

現在、サポートエンジニアには 2 つの主要な注力領域があります:

1. GitLab — gitlab.com、GitLab Dedicated、GitLab Self-Managed のいずれかの GitLab プラットフォームで製品関連の問題に遭遇した顧客を支援
1. License and Renewals — License and Renewals の問題で顧客を支援

注力領域別のチームの現在の配分を表示するには、社内の [サポートチーム情報サイト](https://gitlab-com.gitlab.io/support/team-pages/area-of-focus.html) を参照してください。

オンボーディング中に、最初の注力領域が明確に示されます。

このページを読む際は、現在の注力領域を念頭に置いてください。これにより、正しいワークフローとロールを見つけるのに役立ちます。

## サポートエンジニアのコアな責務

GitLab サポートエンジニアのコアな責務は、サポートチケットで提示される問題を解決し、質問に答えるために顧客と協力することで、日々顧客に優れたサポート体験を提供することです。

この責務は 5 つの主要なコンポーネントに分けることができます:

1. [適切に対応可能であること](#1-be-appropriately-available)
1. [リージョンと協力して FRT SLA 目標を達成する](#2-work-with-your-region-to-meet-our-frt-sla-target)
1. [割り当てられたすべてのチケットで解決まで良好な進捗を維持する](#3-maintain-good-progress-through-to-resolution-on-all-of-your-assigned-tickets)
1. [顧客の期待を管理し、チケットとコールを通じて徹底的にコミュニケーションする](#4-manage-customer-expectations-and-communicate-thoroughly-through-tickets-and-calls)
1. [他者がチケットの進捗を維持するのを助ける](#5-help-others-to-maintain-progress-on-their-tickets)

各コンポーネントを読む際は、Associate と Intermediate サポートエンジニアの注力点が、Senior や Staff サポートエンジニアのそれとは異なることを念頭に置いてください:

- Associate と Intermediate: 注力点は割り当てられたチケットの管理と解決
- Senior と Staff: 自分自身の割り当てられたチケットの管理と解決は引き続き重要ですが、注力点はチケットで直接支援すること（ペアリング、内部ノートなど）と、トレーニング（メンタリング、クラス、ビデオなど）を提供することによって、Associate と Intermediate サポートエンジニアが割り当てられたチケットを解決するのを助けることです。

### 1. 適切に対応可能であること {#1-be-appropriately-available}

カスタマーサポートチームとして、私たちは契約条件に従って顧客をサポートできるように対応する責任があります。GitLab 全体としては
[非同期作業とコミュニケーション](/handbook/values/#bias-towards-asynchronous-communication)
が優先されますが、サポートエンジニアリングではいつでもサポートを提供するために十分な人数が対応可能であるというビジネスニーズが常にあります。

サポートエンジニアは以下に責任があります:

- マネージャーと共に作業スケジュールを作成すること
- マネージャーやサポート Pod など他者と、チケット作業の日々の対応可能性を調整すること
- 顧客のニーズに基づいて、より優先度の高いタスク（STAR やアカウントエスカレーションなど）を引き受けるためにサポートマネージャーと協力すること

### 2. リージョンと協力して FRT SLA 目標を達成する {#2-work-with-your-region-to-meet-our-frt-sla-target}

**[サポートパフォーマンス指標ページ](/handbook/support/performance-indicators/#service-level-agreement-sla)
に記載されている私たちの目標は、優先サポートチケットの少なくとも 95% について、顧客との
[サービスレベルアグリーメント](https://about.gitlab.com/support/#gitlab-support-service-levels)
で指定された期間内に、実質的（意味のある、役に立つ）な最初の応答を提供することです。**

各営業日中、各サポートエンジニアはリージョン内で、必要に応じて他のリージョンとも協力して、サポート全体がその目標を達成できるよう手助けすべきです。どうやって？

1. リージョンが FRT に関する独自のプロセスを定義している場合があります。その場合は、それに従ってください。そうでない場合は、リージョンの各メンバー（あなたを含む）が一日中グローバルビューを監視し、可能な限りチケットを引き受け、他者が引き受けられる新しいチケットがある場合はリージョンの他のメンバーに呼びかけることを期待してください。
1. チケットの検索と選択、チケットの割り当て、最初の応答の提供に関するガイダンスは、[Working on Tickets ページ](/handbook/support/workflows/working-on-tickets) を参照してください。

#### チケットのトリアージ

全員が [チケットのトリアージ](/handbook/support/workflows/ticket_triage) に責任を持ち、以下を確認します:

1. 正しいチケットフォーム（GitLab.com サポートを求めている場合は `SaaS` など）。
1. [正しい優先度](/handbook/support/workflows/setting_ticket_priority#setting-ticket-priority)
1. 正しい 'Problem Type'

### 3. 割り当てられたすべてのチケットで解決まで良好な進捗を維持する {#3-maintain-good-progress-through-to-resolution-on-all-of-your-assigned-tickets}

これは実際にサポートエンジニアが行うことの中心であり、ここで成功するには技術的および非技術的スキルのバランスの取れた適用が必要です。サポートエンジニアは、形式化されたトレーニング（[サポートトレーニングプロジェクト](https://gitlab.com/gitlab-com/support/support-training) を参照）だけでなく、他者とのペアリング、挑戦的なチケットの引き受けなどを通じて、両方の領域でスキルを向上させるよう常に取り組むべきです。

良好な進捗を維持するためのいくつかのヒント:

1. 各チケットの作業を、自分が理解した問題の明確な再記述から始める
1. 顧客が新しい問題や質問を持ち出した場合、それらは追加のチケットで対処する必要があり、あなたの注力点は元の問題または質問のままであることを伝える
1. 次のステップが何であるべきか不明確になったらすぐに助けを求める。詳細は [助けを求める方法](/handbook/support/workflows/how-to-get-help) ページを参照してください
1. 顧客に届けるメッセージや、前向きな影響を達成するためのメッセージの言い回しが不明な場合は、[#spt_how-do-i-say](https://gitlab.slack.com/archives/C01AQRPQ58C) Slack チャンネルで助けを求める
1. 顧客と設定した期限よりも遅くならないように、各チケットを更新し、したがって各顧客を更新するようにしてください。これに成功するには:
   1. 顧客とアクションプランを設定するときに、合理的な次回更新期限（時刻も）を設定できるよう、自分のワークロード全体を念頭に置く
   1. 更新時刻までに意図した作業を完了できなかった場合は、進捗状況を顧客に伝えてから、新しい更新時刻を設定する
1. ビジネスアワー中にチケットが [STAR](/handbook/support/internal-support/support-ticket-attention-requests/) された場合は、オンコールマネージャーと STAR を提出した人と協力して懸念事項に対処してください。
   1. 対応できない場合（例: PTO 中や時間外）は STAR に応答したり関与したりすることは期待されていません。オンラインに戻ったら、最新情報を把握するため STAR スレッドをレビューし、該当する場合はフォローアップアクションに対処してください。

### 4. 顧客の期待を管理し、チケットとコールを通じて徹底的にコミュニケーションする {#4-manage-customer-expectations-and-communicate-thoroughly-through-tickets-and-calls}

すべてのサポートエンジニアのオンボーディングに含まれる [Customer Service Skills モジュール](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issuable_template=Customer%20Service%20Skills) は、このトピックのトレーニングと情報の最良のソースです。このモジュールが存在する前にオンボーディングした場合は、モジュール全体を通じて、または興味のあるトピックに対処するビデオを選んで視聴することで、その内容に慣れてください。そのモジュールから [Ticket Management Quick Reference Guide](https://docs.google.com/document/d/1O9ZzUCJxnuE42ssJ-pir7QK16Vucja6pKk321LBzyyo) を入手することもおすすめします。クイックリファレンスガイドへのクイックリファレンスは以下のとおりです:

- 顧客の本当のニーズを理解する
- 顧客が求めることができないとき、顧客を助けるために自分が **できる** ことを見つける
- 自分が何をしているか、なぜしているかを常に顧客に知らせる
- すべてのインタラクションで、次回の更新の期日と時刻を含むアクションプランを明確にコミュニケーションする
- 状況の変化に応じて、期待値を設定、管理、リセットする

ほとんどの場合サポートエンジニアは顧客と非同期に（サポートチケットを通じて）コミュニケーションしますが、状況に応じて同期的なコミュニケーション、Zoom コールを使用することは重要です。例えば次のような場合です:

1. チケットでのコミュニケーションから問題やリクエストの明確な理解を得るのに苦労している
1. 顧客があなたのリクエストを理解していないと考えられる
1. 顧客が非常に不安、いら立ち、動揺、または混乱しているように見える
1. 顧客が繰り返しコールを依頼する
1. ライブのトラブルシューティングとディスカッションが解決に向けて進む最良の方法である

**成功とはどのようなものか？**

毎月 2 ～ 8 件の顧客ペアリング／コールを目標とする

コールの調整、実施、管理に関する推奨されるプラクティスとワークフローについては [顧客コールページ](/handbook/support/workflows/customer_calls) を参照してください。

### 5. 他者がチケットの進捗を維持するのを助ける {#5-help-others-to-maintain-progress-on-their-tickets}

コラボレーションは GitLab の価値の 1 つであり、他者のチケットを支援することは、その価値を生きる毎日の機会を提供します。すべての高優先度の項目がコントロール下にあるとき（[作業の優先順位付け](#prioritizing-work) を参照）、サポート Pod に関与すること、シニアヘルプセッションに貢献すること、クラッシュセッションに貢献すること、チケットでペアリングすること、さまざまな Slack チャンネルでヘルプリクエストを探すことなど、他のサポートエンジニアのチケットを助ける方法を探してください。

**成功とはどのようなものか？**

成功とは、割り当てられたサポートチケットを解決することと、他者を成功させるのを助けることの間の健全なバランスのように見えます。個々のチケット作業については、あなたとマネージャーは以下の 2 つの基準（最初は定量的、2 つ目は定性的）から始めるべきです:

1. 定期的な 1:1 ミーティングでマネージャーとあなたのチケットのサンプルをレビューする。問題を解決する技術的スキルの証拠だけでなく、チケットをどう管理し、顧客とどう協力したかも確認してください。あなたの成功レベルの証拠を生み出すことに加えて、これらのレビューはチケット作業の品質（技術的および非技術的）を改善する結果につながるはずです。
1. 毎週の結果を [チケットベースライン](#ticket-baseline) の 3 つの部分と比較してください:

#### チケットベースライン {#ticket-baseline}

チケットベースラインは、あなたとマネージャーが時間を通じて、グローバルサポートチーム全体に対するあなたのチケット作業を測定するのに役立ちます。これは 2 つの主要なメトリックで構成されています:

1. **週次チケットベースライン** – あなたが毎週、最初の実質的な応答を提供する新規チケットの数（チケットタイプ別: Self-managed、SaaS、SaaS Accounts、L&R）。現在の週次最初応答ベースラインは Working on tickets → How many new tickets should I pick up each week? のセクションで定義されています。
1. **解決までの時間中央値（TTR/MTTR）** – R&D との時間を除いた MTTR として測定され、チケットタイプ別の目標値が Median TTR ダッシュボードと FY26 サポートエンジニアパフォーマンス指標で定義されています:

- Median TTR – Self-Managed: 目標 141 時間
- Median TTR – SaaS: 目標 76 時間
- Median TTR – SaaS Account: 目標 25 時間
- Median TTR – L&R: 目標 7 時間

これらの目標は [Managers Dashboard](https://gitlab.zendesk.com/explore/dashboard/3FEA996E9CA8CFAFE0031C6FF90CF0A6748043995DEB61F6C2A31A347F18AB5C/tab/44791522) で表示され、[Median TTR ダッシュボード](https://gitlab.zendesk.com/explore/studio#/dashboards/5CB98A840DDD3FFF1A274944BCC070229D377C1D23901AF90988FBD0CA79C706) と [サポートエンジニアパフォーマンス指標 FY26 Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6635#note_2498022715) と整合しています。

チーム全体での比較を公平に保つため、私たちのダッシュボードでは各メトリックのチーム全体平均の 85% に等しい動的ベースラインを使用しています。実際には、次のようにすべきです:

- ロールに該当するチケットタイプの週次割り当てチケットベースラインを少なくとも達成し、可能であれば超えることを目指す。
- 自分の解決までの時間中央値を、チケットの複雑さとミックスを考慮しながら、上記のチケットタイプ別 TTR/MTTR 目標以下に保つことを目指す。

これらのベースライン値を、毎週必ず満たさなければならないハードクオータではなく、合理的な期間（例えば数週間）で達成すべき最小値として扱ってください。1 つ以上のベースラインを満たさない場合は、次回の 1:1 でマネージャーと話し合い、エスカレーション、プロジェクト作業、PTO、チケットの複雑さなどの要因を考慮しながら、何か変える必要があるかを決定してください。私たちは量ではなく品質を信じています。数値が高いことが自動的に良いわけではありません。GitLab はあなたに選択の自由を与え、[作業の優先順位付け](#prioritizing-work) と、チケットの量、解決時間、深さ／顧客成果の品質のバランスについて毎日決定を下す際に、その自由を健全な判断で使うことを信頼しています。

**マネージャー向けのガイダンス**

マネージャーは、チケットの複雑さ、コラボレーション、ドキュメント作業、顧客フィードバックなどの定性的要因と並んで、時間を通じてチケット関連のパフォーマンスを議論する際の主要な定量的入力として、週次割り当てチケットベースラインとチケットタイプ別の中央値 TTR/MTTR 目標の組み合わせを使用すべきです。これらの定義と整合していない古い「ベースライン」ダッシュボードは、主要なパフォーマンスゲージとして使用すべきではありません。

## 作業の優先順位付け {#prioritizing-work}

各サポートエンジニアは、一般に以下のリストに従って毎日の作業の優先順位を付けるべきです。面接、トレーニング、特別な任務、その他の時間制約のあるコミットメントは、これらの優先順位の良い一時的な例外の例です。

このリストは、決定を下すのに役立つツールとして考えてください。複数のことが行われる場合、これらの優先順位は、それらのうちどれを最初に行うかを決定するのに役立ちます。

1. 以下を処理する:
   - サポートエンジニアオンコールである場合の緊急事態、またはオンコールエンジニアが助けを必要とする場合
   - CMOC である場合のインシデント
   - DRI またはアクティブなエスカレーションの貢献メンバーである場合の [アカウントエスカレーション](/handbook/customer-success/csm/escalations/)
1. 自分に割り当てられた [STAR されたチケット](/handbook/support/internal-support/support-ticket-attention-requests/) を処理する
   - STAR された割り当て済みチケットは、担当者とオンコールマネージャーに通知されます
   - ビジネスアワー中にチケットが STAR された場合は、#support_ticket-attention-requests Slack チャンネルで作成された STAR スレッドに関与し、質問や懸念事項に対処することを計画してください
   - ビジネスアワー外にチケットが STAR された場合は関与する必要はありませんが、オンラインに戻ったときにフォローアップする計画を立ててください。オンコールマネージャーが即時のニーズに対処します。
1. グローバルビューからチケットを取り、上から下に作業する
   - 新しいチケットには、SLA 内に意味のある最初の応答を提供する
   - 再ホームされたチケットには、チケットを受け取ったことを顧客に伝え、次に何が起こるかの期待を設定する
1. [サポート Pod](/handbook/support/workflows/working-with-pods/) の作業に参加する
1. 割り当てられたチケットがすべて最新であり、適切に進捗していることを確認する
1. 他者に割り当てられたチケットを以下によって支援する:
   - 関連する有用な情報を持つ内部ノートを投稿する、または
   - 担当者が Slack に投稿した質問に答える、または
   - 担当者にチケットでペアリングしたいか尋ねる、または
   - 顧客に直接応答する、**好ましくは応答が緊急に必要であり、かつ担当者がチケットの作業に対応できない場合のみ**
1. 以下のような必要な間接的なチケット作業に対処する:
   - ドキュメント更新
   - Issue の作成または貢献
   - トレーニング

## オンコールローテーションに参加して緊急事態を調整・解決する（時々）

以下のオンコールローテーションはサポートエンジニアによって運営されます:

1. [Self-managed 顧客緊急オンコール](/handbook/support/on-call/)
1. [GitLab.com Communications Manager on Call (CMOC)](/handbook/support/workflows/cmoc_workflows)

Intermediate、Senior、Staff サポートエンジニアは、これらのローテーションの 1 つに参加します — 両方ではありません（オンコールが大好きな場合を除く！）。

**新チームメンバー:** あなたのサポートエンジニアオンボーディング Issue にローテーションへの参加準備基準が示されています。

**成功とはどのようなものか？**

1. オンコールがスケジュールされたときに対応可能であること（[シフトの交換方法](/handbook/support/on-call/#swapping-on-call-duty) を学んでください）
1. アラートがエスカレーションされる前に必要な時間内にアラートに応答すること
1. .com インシデントまたは Self-managed 緊急事態のオンコールコミュニケーションプロセスを成功裏に実行すること

[オンコールへの期待](/handbook/support/on-call/#expectations-for-support-on-call) の詳細はハンドブックを参照してください。

注目すべきインシデントは 1:1 ノートドキュメントに必ず強調表示してください。

## チームメンバーや顧客とコラボレーションする（毎日）

[コラボレーション](/handbook/values/#collaboration) は GitLab のコアバリューです。サポートチームメンバー、他の GitLab チームメンバー、顧客と協力して、直接的または間接的に顧客の問題を解決することが推奨されます。

**成功とはどのようなものか？**

1. [ペアリングセッション](https://gitlab.com/gitlab-com/support/support-pairing)。この [ペアリングサマリーページ](https://gitlab-com.gitlab.io/support/team-pages/pairings.html) で自分の状況を確認できます。
1. Slack で質問し、答える。（これを簡単に可視化する方法はありませんが、誇りに思うことを 1:1 ノートドキュメントでマネージャーと共有してください。）
1. [Support Stable Counterpart](/handbook/support/#support-stable-counterpart) としてボランティアした場合は、割り当てられたグループとコラボレーションし、サポートチームと知識を共有してください。
1. コラボレーションする方法は他にもたくさんあります。1:1 ノートドキュメントにコラボレーションのメモを残してください。
1. 週に 2 ～ 5 件のペアリングセッションを目指す。

## バグや機能リクエストの Issue を作成・更新する（毎週）

将来の顧客の問題を減らすことは、サポートエンジニアであることの重要な部分です。[バグや機能リクエストの Issue を作成、更新、エスカレーションする](/handbook/support/workflows/working-with-issues) ことで、これを達成するのに役立ちます。

**成功とはどのようなものか？**

1. 必要なときはいつでもバグ Issue と機能リクエストを作成する。1:1 ノートの 'GitLab issues' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、自分の状況を確認できます。[サンプルリンク](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=dblessing) はこちらです。フォーマットは `https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&author_username=YOUR_USERNAME`（`YOUR_USERNAME` を置き換えてください）

1. 優先順位付けと影響に役立つよう、顧客に代わってバグ Issue や機能リクエストにコメントする。

1. GitLab は現在、[Issue で行ったすべてのコメントを見つける方法](https://gitlab.com/gitlab-org/gitlab/-/issues/28268) を持っていません。この機能が利用可能になるまで、製品 Issue への貢献を可視化するのは難しいです。代わりに、Zendesk チケットに、作成または更新した Issue へのリンクがあることを確認してください。1:1 ノートドキュメントで貢献を強調することもできます。

| レベル        | 例 | メトリック |
| ------------ | ----------------- | ----------------- |
| Associate    | 他のサポートエンジニアとコラボレーションし、説明と適切なラベルが完了した Issue を作成 | 月 1 ～ 2 件 |
| Intermediate | 説明と適切なラベルが完了した Issue を作成 | 月 1 ～ 4 件 |
| Senior       | さらに、専門知識と顧客とのやりとりに基づいて、適切な場合は修正・拡張を推進する | 月 1 ～ 4 件 |
| Staff       | [Request for Help Issue](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) をレビューし、専門知識と顧客とのやりとりに基づいて、適切な場合は修正・拡張を推進する | 月 1 ～ 4 件 |

## ドキュメント、ナレッジベース、公開知識を改善する（毎週）

[ドキュメントを更新する](/handbook/support/workflows/improving-documentation) ことと、[ナレッジベース記事を定期的に作成・更新する](/handbook/support/knowledge-base/#why-you-should-create-a-knowledge-article) ことが推奨されます。これにより、私たちに連絡することなく顧客が問題を解決するのに利用できる情報を改善することで、チケット作成を防ぐのに役立ちます。

[ブログ投稿の作成](/handbook/marketing/blog/) や、検索エンジンからアクセス可能なその他の公開知識は、チケット作成を防ぐのに価値があります。

私たちはボットを使用して、毎週 [サポートチームの貢献を要約しています](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues?label_name%5B%5D=Support%20Team%20Contributions)。

**成功とはどのようなものか？**

| レベル        |  メトリック             |
|--------------|---------------------|
| Associate    | 月 1 ～ 3 件       |
| Intermediate | 月 2 ～ 4 件       |
| Senior       | 月 2 ～ 5 件       |
| Staff        | 月 2 件以上 |

- 1:1 ノートの 'Docs updates' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、ドキュメント更新の状況を確認できます。[サンプルリンク](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=dblessing&label_name[]=documentation) はこちらです。フォーマットは `https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=YOUR_USERNAME&label_name[]=documentation`（`YOUR_USERNAME` を置き換えてください）
- ナレッジベース記事の更新の状況については、[ナレッジベースのレポートとメトリック](/handbook/support/knowledge-base/reporting-and-metrics/) ハンドブックページを参照してください。

他の公開場所（*例えば* ブログ投稿）に情報を公開する場合は、1:1 ノートドキュメントに記録してください。

## GitLab のバグを修正し、機能を作成する（時々）

経験豊富なサポートエンジニアやプログラミングに精通している人は、[GitLab のバグを修正し、機能を作成する](/handbook/support/#our-role-within-gitlab) ことが推奨されます。

私たちはボットを使用して、毎週 [サポートチームのバグ修正と機能リクエストを要約しています](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues?label_name%5B%5D=Support%20Team%20Contributions)。

**成功とはどのようなものか？**

この領域には目標はありません。1:1 ノートの 'Support Fix' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、自分の状況を確認できます。[サンプルリンク](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=dblessing&label_name[]=Support%20Team%20Contributions) はこちらです。フォーマットは: `https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=YOUR_USERNAME&label_name[]=Support%20Team%20Contributions&not[label_name][]=documentation`（`YOUR_USERNAME` を置き換えてください）

## GitLab とサポートのプロセスを改善する（時々）

私たちはプロセスを継続的に進化・改善しています。[ハンドブックを更新する](/handbook/about/handbook-usage/) ことや、[Support Meta プロジェクトの Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues) に貢献してサポートプロセスを改善することが推奨されます。

たくさんのことが進行中です。すべてに貢献しようとすると圧倒されるかもしれません。集中して興味のある領域を見つけるのに役立つように、Issue がより大きなイニシアチブにグループ化されている [Support Team Epic](https://gitlab.com/groups/gitlab-com/support/-/epics/) を見てください。Epic にはタイトルの後ろに括弧書きで Directly Responsible Individual（DRI）の名前があります。手助けしたい場合は、その DRI に連絡し、マネージャーに相談してください。

**成功とはどのようなものか？**

この領域には目標はありません。1:1 ノートの 'Handbook updates' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、自分の状況を確認できます。[サンプルリンク](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=lyle) はこちらです。フォーマットは `https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=YOUR_USERNAME`（`YOUR_USERNAME` を置き換えてください）

## GitLab とサポートに関する最新情報を保つ {#keep-up-to-date-on-gitlab-and-support}

1. **[毎月](/handbook/engineering/releases/) 新しいリリースを出荷している** ため、各リリースに多くの素晴らしい新機能と修正を詰め込もうとするとき、サポートチームが主要な変更を最新に保つのが難しい場合があります。一般に、リリースブログ投稿を読み、必要または希望に応じて深く掘り下げ、新しい GitLab バージョンを最新に保つことは各サポートチームメンバーの責任です。これをさらに促進するため、参加できる Retrospective が毎月あります（GitLab Team Meetings カレンダーに記載されています）。
1. 出席するか録画を視聴することが推奨される [サポート週次ミーティング](/handbook/support/#weekly-meetings) がいくつかあります。
1. [Support Week in Review](/handbook/support/#support-week-in-review)（SWIR）ドキュメントは、サポートの全員が知っておくべき毎週の最近の発表と更新をすべて含むことを意図しています。あなたは毎週このドキュメントを読むか録画を聴くことが **期待されます**。また、ドキュメントへの貢献も推奨されます。*月曜日の朝に SWIR を読む（または聴く）週次のリマインダーを設定することを検討してください。*

**成功とはどのようなものか？**

この領域には目標はありません。目的は、GitLab とチームの最近の主要な変更を把握し続けるのに役立つ情報とリソースを認識し、活用していることを確認することです。

### 製品変更の準備を支援する（オプション）

[GitLab の最新情報を保つ](#keep-up-to-date-on-gitlab-and-support) の延長として、変更に対するチームの準備を支援することは常に歓迎されます。時々、そして常にすべての主要なリリースで、サポートチームが準備する必要がある非推奨や破壊的変更がある場合があります。

主要なリリースの場合、通常マネージャーが [Support Stable Counterparts](/handbook/support/#support-stable-counterpart) を編成して計画された変更をレビューします。

主要なリリース間に、製品または開発が [特定のユーザーに連絡する](/handbook/support/internal-support/#contacting-users-about-gitlab-incidents-or-changes) ための支援を要求することがあり、これは [サポート内のボランティアグループ](https://gitlab.com/groups/gitlab-com/support/readiness/-/group_members?with_inherited_permissions=exclude) によって処理されます。

毎月、サポートはまた [Release Review Party](https://drive.google.com/drive/u/0/search?q=Release%20Review%20-%20Support%20Team)（GitLab 内部のみ）を開催し、新機能や変更を確認、デモンストレーション、議論します。

これらのアクティビティのいずれかに参加したい場合は、マネージャーまたは Director of Support, Global Readiness と相談してください。

## 学習とトレーニングを通じてスキルを開発する（毎週）

私たちは継続的な学習を通じてスキルの開発を支援することにコミットしています。[サポートトレーニングプロジェクトのモジュール](https://gitlab.com/gitlab-com/support/support-training) を完了できます。

GitLab の [Learning and Development チーム](/handbook/people-group/learning-and-development/) は、探求とトレーニングの機会を提供しています。

サポートエンジニアはまた、外部プロバイダーからのコースと認定を完了することが推奨されます。学習目標を計画するためにマネージャーと話してください。

**成功とはどのようなものか？**

1. 四半期（3 ヶ月）ごとに 1 つのモジュールを完了することを目指してください。1:1 ノートの 'Support Training' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、自分の状況を確認できます。[サンプルリンク](https://gitlab.com/gitlab-com/support/support-training/-/issues?scope=all&utf8=%E2%9C%93&state=closed&assignee_username[]=cynthia) はこちらです。フォーマットは `https://gitlab.com/gitlab-com/support/support-training/-/issues?scope=all&utf8=%E2%9C%93&state=closed&assignee_username[]=YOUR_USERNAME`（`YOUR_USERNAME` を置き換えてください）

2020 年のサポートチームの重要な注力点は、[学習・トレーニングリソースを改善する](https://gitlab.com/groups/gitlab-com/support/-/epics/49) ことで、スキル向上への明確なルートと、専門知識をチームに見えるようにする良い方法を持つのを助けることです。

## 学習・トレーニングリソースを改善する（時々）

サポートチームメンバーが [サポートトレーニング](https://gitlab.com/gitlab-com/support/support-training) リソースを更新または作成することが推奨されます。

**成功とはどのようなものか？**

この領域には目標はありません。作成または更新したい資料のアイデアがある場合は、マネージャーと話してください。1:1 ノートの 'Support Training Updates' [アクティビティリンク](/handbook/support/managers/support-1-1s#2-activity-links) を使用して、行った更新を追跡できます。[サンプルリンク](https://gitlab.com/gitlab-com/support/support-training/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=cynthia) はこちらです。フォーマットは `https://gitlab.com/gitlab-com/support/support-training/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&author_username=YOUR_USERNAME`（`YOUR_USERNAME` を置き換えてください）

## 採用を支援する（時々）

私たちは、チーム全体に [採用プロセス](/handbook/support/managers/hiring) を支援することを推奨しています。この領域で支援したい場合は、マネージャーと話し、[インタビュートレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=#) を開始してください。

**成功とはどのようなものか？**

この領域には目標はありません。トレーニングモジュールを完了したら:

1. アセスメントを採点するためのタレントアクイジションからのリクエストに迅速に応答する（全員）
1. スケジュールされたときに技術面接を完了する（マネージャーとの相談後）

この領域での貢献をより可視化したいと思っています。これを行う方法の提案は歓迎されます。

## チケットレビュー

**Senior と Staff** サポートエンジニアのチケットレビューには、自分が所有していないチケットに関連する高品質の内部コメントを追加することが含まれます。これは（マネージャーツールである）完全なチケットレビューとは異なります。目的は次のとおりです:

- 追加の技術的コンテキストを提供することで他のエンジニアを助ける
- 関連する知識と経験を共有する
- オーナーシップを引き継ぐことなくチケットの解決に価値を加える
- チーム全体でコラボレーションと知識共有を促進する

レビューは是正的ではなく、建設的で役に立つことに焦点を当てるべきです。メトリックはダッシュボードで「internal comments on not owned tickets」として追跡されます。

**成功とはどのようなものか？**

| レベル        |  メトリック      |
|--------------|--------------|
| Associate    | N/A          |
| Intermediate | N/A          |
| Senior       | 週 4 ～ 5 件 |
| Staff        | 週 4 ～ 5 件 |

## オフィスアワー

Senior エンジニアは、すべてのリージョンにわたるオフィスアワー／ヘルプセッションのカバレッジを確保するため、ローテーションに参加することが期待されます。目標は、リージョンごとに 1 日に少なくとも 1 つのオフィスアワーセッションが利用できるようにすることです。これには以下が含まれます:

- 技術的なディスカッションのための標準的なオフィスアワー
- 複数の Senior エンジニアが参加する可能性のあるヘルプセッション
- スケジュールされた知識共有セッション

Staff エンジニアは、定期的なローテーションセッションではなく、リーダーシップが合意した戦略的な主題ベースのオフィスアワーに焦点を当てます。
