---
title: "Create:Code Review グループ"
description: Create:Code Review グループは、Create ステージの Code Review グループに属するすべてのプロダクトカテゴリを担当しています。
upstream_path: /handbook/engineering/devops/create/code-review/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
---

Create:Code Review グループは、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [Create ステージ](/handbook/product/categories/#create-stage)の [Code Review グループ](/handbook/product/categories/#code-review-group)に属するプロダクトカテゴリのすべての側面を担当しています。

## グループ概要

### グループメンバー

以下の方々が Create:Code Review グループの常設メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### サブ部門固有のページ

- [バックエンド](/handbook/engineering/devops/create/code-review/backend/)
- [フロントエンド](/handbook/engineering/devops/create/code-review/frontend/)

### プロダクトカテゴリ

Code Review グループは以下のプロダクトカテゴリを担当しています:

- [コードレビュー](https://about.gitlab.com/direction/create/code_review_workflow/)
- [GitLab CLI](https://about.gitlab.com/direction/create/gitlab_cli/)

### カテゴリパフォーマンス指標

- [コードレビューカテゴリ MAU](https://internal.gitlab.com/handbook/company/performance-indicators/product/dev-section/#createcode-review---category-mau---unique-users-using-merge-requests)（内部のみ）
- [Editor Extension カテゴリ MAU](https://internal.gitlab.com/handbook/company/performance-indicators/product/dev-section/#createcode-review---editor-extension---category-mau)（内部のみ）

## 作業

### 作業方法

一般的に、私たちは標準の GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用しています。Create:Code Review チームに連絡するには、関連プロジェクト（通常は [GitLab](https://gitlab.com/gitlab-org/gitlab)）に Issue を作成し、`~"group::code review"` ラベルと他の適切なラベル（`~devops::create`、`~section::dev`）を追加するのが最善です。その後、上記のリストの関連するプロダクトマネージャーおよび/またはエンジニアリングマネージャーに自由に ping してください。

より緊急なアイテムには、Slack の [#g_create_code_review](https://gitlab.slack.com/archives/g_create_code-review) を使用してください。

[カテゴリごとにサポートする機能はこちら。](/handbook/product/categories/features/#code-review)

### ワークフローラベル


<p class="my-3 text-sm text-gray-600 italic">ワークフローラベルは <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/#workflow" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## ミーティング

可能な限り、Issue、マージリクエスト、Slack を使用した非同期コミュニケーションを好みます。ただし、個人的なつながりを確立し、ブロッカーなど同期的に議論した方が効率的なアイテムを対処するために、対面ミーティングは有用です。

ミーティングを録画し、GitLab Unfiltered の [Create Code Review プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KpxYDEB9t5231bq775u_Ia3)にアップロードします。

### Code Review 週次

これは Code Review グループのすべてのメンバーが現在の優先事項、ブロッカー、計画について話し合うための機会です。

このミーティングのアジェンダは事前に設定され、誰でもトピックを追加できます。ミーティング開始30分前にアジェンダにアイテムがない場合、ミーティングはキャンセルします。

### Code Review UX 同期

このミーティングは UX と PM 間のコラボレーションに重点を置いていますが、誰でも参加して貢献できます。

### 非同期スタンドアップ


<!-- include omitted: includes/engineering/create-async-standup.md (no localized version under content/ja/) -->


チームメンバーが2番目の質問に関連して言及された場合、成果物の Issue またはマージリクエストへのリンクを投稿することを奨励します。これにより他のチームメンバーが他の人が何に取り組んでいるかを理解でき、将来的に同様のものに遭遇した場合に良い参照ポイントを持てます。

### 振り返り

1つの定期的な「マイルストームごと」の振り返りと、特定のケースの分析、通常はイテレーションアプローチを見ることに重点を置いたアドホックな「機能ごと」の振り返りを行います。

#### マイルストームごと


<p class="my-3 text-sm text-gray-600 italic">レトロスペクティブは <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/#retrospectives" rel="external noopener">原文 (英語)</a> を参照してください。</p>


#### プロジェクトごと

特定の Issue、機能、または他の種類のプロジェクトが特に有益な学習体験になった場合、それから学ぶために同期または非同期の振り返りを行うことがあります。取り組んでいるものが振り返りに値すると感じる場合:

1. 振り返りを行いたい理由を説明し、同期か非同期かを示す [Issue を作成する](https://gitlab.com/gl-retrospectives/create-stage/code-review/issues)
1. EM と関与すべき他の人（PM、カウンターパートなど）を含める
1. 同期ミーティングを調整する（該当する場合）

振り返りからのすべてのフィードバックは、参照のために最終的に Issue に記録される必要があります。

## コラボレーション

### プロダクトとの協力

プロダクトマネージャーとエンジニアリングマネージャー（フロントエンドとバックエンド）間の週次コールは「Code Review グループ」カレンダーに記載されています。誰でも参加でき、これらのコールはグループに影響する障害、懸念事項、ステータス更新、成果物、またはその他の考えを議論するために使用されます。月次コールも同じカレンダーで行われ、グループ全体が参加することが奨励されています。達成・改善を強調し、将来のイテレーションについて議論し、振り返りの懸念事項とアクションアイテムを確認し、グループに影響するその他の一般的なアイテムについても話し合います。

### 他のカウンターパートとのコラボレーション

PM 以外の安定したカウンターパートと必要に応じて密接に協力することが奨励されます。私たちは特に、リリースキックオフ前、コードレビューや Issue の懸念事項中に必要に応じて、品質エンジニアリングとアプリケーションセキュリティのカウンターパートを参加させています。

品質エンジニアリングは [Quad Planning プロセス](https://gitlab.com/gitlab-com/www-gitlab-com/issues/6318)を通じてワークフローに参加しています。

アプリケーションセキュリティは、チームにキックオフメールが送信されるのと同じタイミングでワークフローに参加し、今後のマイルストームの作業を確認し、私たちが認識すべき懸念事項や潜在的なリスクを記録できるようにしています。

### GitLab より広いコミュニティとの協力

私たちは非常に大きな機能セットをサポートしているため、チームはしばしば GitLab のより広いコミュニティからのコミュニティ貢献をレビューします。各コントリビューターに私たちの「[ホワイトグローブ対応](https://www.merriam-webster.com/dictionary/white-glove)」を提供することが奨励されます。寄贈された時間への認識を示し、非常に役立つレビューを行い、貢献を励ますことはすべてコミュニティ意識を築く優れた方法です。レビューや提案への ping に応答する時間がない場合は、別の人に ping できるよう ping した人に素早く知らせてください。

### ヘルプリクエスト（RFH）

Code Review グループはサポートチームによってオープンされた[ヘルプリクエスト（RFH）](https://gitlab.com/gitlab-com/request-for-help)への対応に責任があります。
これらのリクエストは通常、顧客が直面している問題を解決するためのものです。

重要でないサポートリクエストが Slack 経由で届いた場合は、より良い透明性と効率的な追跡・解決のために、グループの RFH（[テンプレートリンク](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-CodeReview)）をオープンするよう報告者に案内してください。

RFH ワークフロー:

1. [RFH プロジェクト](https://gitlab.com/gitlab-com/request-for-help)に文書化された応答性とラベリングに関する共通のガイダンスに従う。
1. RFH Issue が作成されると、フロントエンドとバックエンドの EM が自動的に言及されます。EM は Issue を速やかにトリアージする必要があります。PM もトリアージのサポートができます。助けになれると思うエンジニアは自発的に自分自身を割り当てることができます。
1. Issue のトリアージ:
   1. Issue 作成者に明確化のための質問をする。
   1. `gitlab-org/gitlab` にある関連するオープンまたはクローズ済みの Issue を特定する。
   1. ドメインの専門知識および/または可用性に基づいて、チームのメンバーに RFH Issue を割り当てる。
1. EM は [RFH ライフサイクルボード](https://gitlab.com/gitlab-com/request-for-help/-/boards/9606231?label_name[]=Help%20group%3A%3Acode%20review) または [EM ダッシュボード](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/wikis/EM-dashboard#open-requests-for-help)を通じて、オープン RFH Issue のステータスを定期的に確認します。
1. RFH Issue の担当者は、ブロッカーが生じたらすぐに表面化させる必要があります。
1. RFH が一般的な質問やドキュメントのギャップを明らかにした場合、将来の同様の問い合わせを防ぐために関連するハンドブックページやドキュメントの更新を検討してください。

## 成功のメトリクス

Code Review カテゴリの成功を測定するメトリクスは、コードレビューの目標、具体的には使いやすさ、愛されやすさ、効率性と整合しています。

### 主要メトリクス

私たちの_主要_メトリクスは: **コードレビューの期間を短縮する**ことです。これは最初のマージリクエストバージョンからマージまでの期間として測定されます。

MTTM はこの[ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2372920/views)で確認できます。

### 二次メトリクス

_二次_メトリクスは主要メトリクスのサポートとして機能し、カテゴリがどれほど成功しているかについてより完全な絵を構築するのに役立ちます。

時折、[様々なヒューリスティクス](/handbook/product/ux/heuristics/)を通じてユーザー体験を追跡するために [UX スコアカード](/handbook/product/ux/ux-scorecards/)を実施します — [コードレビューのすべての UX スコアカードを見る](https://gitlab.com/groups/gitlab-org/-/epics/5913)。Create ステージレベルでは、[ユーザビリティベンチマーキングスタディ](https://about.gitlab.com/direction/create/#usability-benchmark)を実施します。

現在、**知覚パフォーマンス**の測定と改善に注力しています: 「ウェブサイトがユーザーにとってどれほど高速で、応答性が高く、信頼性があると感じるか。サイトのパフォーマンスに対する認識は、実際のロード時間と応答時間よりもユーザー体験に大きな影響を与える可能性があります。」知覚パフォーマンスは_技術的_パフォーマンス（つまりロード時間と応答時間）だけでなく、_ユーザー_パフォーマンス（つまりタスク完了の効率）も含み、以下のように[定式化](https://youtu.be/7ubJzEi3HuA?t=405)できます:

```text
perceived performance = f(expected performance, UX, actual performance)
experience = f(perceived performance, task completion)
```

| 側面 | 測定方法 | 結果 |
|-|-|-|
| `Expected performance` と `UX` | 主にユーザーのフィードバックにより、次に競合他社の実際のパフォーマンスにより。 | [SaaS ユーザーのフィードバック](https://gitlab.com/gitlab-org/ux-research/-/issues/1475)（進行中）<br>[競合他社パフォーマンス（Software Forge Performance Index）](https://forgeperf.org/)（SourceHut が維持）<br>[主要ページの SaaS と GitHub.com の Largest Contentful Paint](https://dashboards.gitlab.net/d/performance-comparison/github-gitlab-performance?orgId=1) |
| `Actual performance`（ロードと応答時間） | 主に [Largest Contentful Paint（LCP）メトリクス](https://web.dev/articles/lcp)、次に[他の重要なメトリクス](https://web.dev/articles/user-centric-performance-metrics#important-metrics-to-measure)。 | [テストインスタンス](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/SiteSpeed/10k)（テストサンプル: [大きな MR の概要と変更タブ](https://staging.gitlab.com/gpt/large_projects/gitlabhq1/-/merge_requests/8785/diffs)、[大きな MR のコミットタブ](https://staging.gitlab.com/gpt/large_projects/gitlabhq1/-/merge_requests/4954/commits)）<br>[SaaS: `gitlab-foss` 大きな MR 概要タブ](https://dashboards.gitlab.net/d/000000043/sitespeed-page-summary?orgId=1&var-base=sitespeed_io&var-path=desktop&var-testname=gitlab&var-group=gitlab_com&var-page=_gitlab-org_gitlab-foss_merge_requests_9546&var-browser=chrome&var-connectivity=cable&var-function=median&var-resulturl=https:%2F%2Fs3.amazonaws.com%2Fresults.sitespeed.io&var-screenshottype=jpg)（[テストサンプル](https://gitlab.com/gitlab-org/gitlab-foss/-/merge_requests/9546)）<br>その他のメトリクス詳細はアップストリームのページを参照 |
| `Task completion`（タスク時間） | [GOMS アプローチ](https://en.wikipedia.org/wiki/GOMS)によるユーザーの主要タスク実行時間の見積もり。GitLab と競合他社、または現在と提案デザインのパーセンテージの差に注目します。 | [2021年7月の見積もり](https://gitlab.com/gitlab-org/ux-research/-/issues/1474#results) |

### 使用状況メトリクス

- [ページビュー](https://10az.online.tableau.com/#/site/gitlab/workbooks/3464818/views)

## 探索と実験

Code Review グループは、チームメンバーが関心のあるプロダクト領域を探索・実験する権限を持つことが重要だと考えています。会話を始める最善の方法は[マージリクエストから](/handbook/communication/#start-with-a-merge-request)であることもあります。

### 時間を確保する

チームメンバーが関心のある領域を追求する機会をより適切に提供するため、エンジニアはスケジュールされたキャパシティの約10%を確保することが奨励されます。

### 期待の設定

これらの領域で作業したり新しいアイデアを探ったりする場合、全員が同じ認識を持てるようにいくつかの基本ルールがあります:

1. これらの領域での作業はマイルストームの計画された成果物のコストとなってはいけません
1. これらの領域でのすべての努力がプロダクトにマージされるわけではありませんが、プロダクトとデザインと共有することで将来の作業の会話を方向付けるのに役立ちます
1. コードレビュー領域での作業は**必要ない**です; エンジニアは関心のある領域を探索することが奨励されます

### インスピレーションの領域

どこから始めれば良いか分からないことがあるため、インスピレーションを求めるかもしれない場所のリストを提供します:

1. [トップレベルのコードレビューエピック](https://gitlab.com/groups/gitlab-org/-/epics/688) — このリストのエピックは重要度でおおよそソートされています
1. [トップレベルの Editor Extension エピック](https://gitlab.com/groups/gitlab-org/-/epics/3322) — このリストのエピックは機能の全カテゴリを網羅していますが、グループは主に VS Code にのみ注力しています
1. [グループレベルの `gitlab-org` Issue リスト](https://gitlab.com/groups/gitlab-org/-/issues) — 関心のあるラベルでフィルタリングします
1. [開発の準備ができたコードレビューの Issue](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&label_name[]=workflow%3A%3Aready%20for%20development)
1. [パフォーマンス](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&label_name[]=performance)と[パフォーマンスリファインメント](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&label_name[]=performance-refinement)の Issue
1. [簡単な勝利](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&label_name[]=%F0%9F%8D%8E)

## ヒントとコツ

開発者向けドキュメントやハンドブックに追加するほど「準備が整っていない」ヒント、コツ、クイックシェルスクリプトには、[Create ステージウィキ](https://gitlab.com/groups/gitlab-com/create-stage/-/wikis/home)を使用しています。

### AI プロンプト

より効率的になるために使用する[一般的な AI プロンプト](/handbook/engineering/devops/create/code-review/ai-prompts/)のリストを維持しています。

## マージリクエストレポートウィジェットの共同責任

マージリクエストのトピックはコードレビューに属しますが、マージリクエストレポートウィジェットを動かすコード（[ワーキンググループ](/handbook/company/working-groups/merge-request-report-widgets/)を参照）はより大きなグループによって書かれ・維持されています。

これらのウィジェットに関するコミュニケーションとトラブルシューティングの目的で、[DRI リスト](/handbook/engineering/devops/create/code-review/report-widgets-dri-list/)をご参照ください。
