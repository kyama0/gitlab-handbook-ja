---
title: "ユーザビリティベンチマーキング"
description: "GitLab におけるユーザビリティベンチマーキングのプロセス"
upstream_path: /handbook/product/ux/experience-research/usability-benchmarking/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

[Nielsen/Norman Group](https://www.nngroup.com/articles/product-ux-benchmarks/) によれば、ユーザビリティ（あるいはユーザーエクスペリエンス）ベンチマーキングとは、「製品やサービスのユーザーエクスペリエンスを、意味のある基準に対する相対的なパフォーマンスを測る指標を用いて評価するプロセス」と定義されます。ベンチマーキングはかなりの時間と労力を要しますが、これと同等のデータ量とインサイトの粒度を両立できる代替リサーチ手法は多くありません。本ページでは、GitLab でユーザビリティベンチマーキングを行う際のプロセスと考慮事項について説明します。

## なぜユーザビリティベンチマーキング調査を実施するのか

ユーザビリティベンチマーキングは、関連するワークフロー群を取り上げ、それらを個別のタスクに分解し、いくつかの観点でユーザビリティを測定します。これにより、特定のペインポイントや改善余地を浮き彫りにする豊富な定量・定性データが得られます。これらのペインポイントは、製品全体のユーザビリティを改善するためのアクション可能なインサイトに変換できます。ユーザビリティベンチマーキング調査を実施することで、製品をより良くするための検証済みかつ粒度の高い推奨事項をチームに提供できます。

## いつベンチマーキングを行うか

ベンチマーキングは、縦断的・定量的な比較（例えば、UI に大きな変更を加える前後でタスク完了時間を追跡するなど）を生み出すのに有用な手法です。ベンチマーキング調査を複数回実施することの利点を考えると、ベンチマーキングを単発の *アクティビティ* としてではなく、リサーチ *プログラム* として捉えると有用です。GitLab ではそのように捉えています。

## GitLab におけるベンチマーキング

ベンチマーキングは徹底的で時間集約的な取り組みであり、リサーチリードに高い厳密さを要求します。本ページでは、ベンチマーキングの取り組みと測定の品質と一貫性を確保しつつ、新規ベンチマーキングの「立ち上げコスト」を抑えるためのガイドラインとベストプラクティスを示します。

## 構成要素

すべてのベンチマーキング調査には類似した「骨格」、つまり調査を成功させるために必要な基本要素があります。一般的には次のとおりです。

- プロトコル: 各セッションの設計図です。これにはモデレーター（あなた）が各参加者に話す、調査を紹介・説明する内容、各質問の内容と順序が含まれます。一般に、各セッションを進めるためのスクリプトとして機能します。
- タスク: 参加者に実行してもらい、調査で測定する個別のタスクです。
- 指標: 調査開始前に、収集するデータ、報告予定の指標、方法論の根拠を明確にしてください。ユーザビリティベンチマーキングでは、他のベンチマークでも使われている同じ指標を報告することが重要です。ただし、価値があると判断した場合はステージレベルで追加の指標を報告することもできます。
- タイムライン: ベンチマーキング調査の計画・実施・分析には時間がかかります。自分とステークホルダーのためのタイムラインを作ることで、調査を予定どおりに進め、チームに情報を共有できます。

## ベンチマーキング調査の計画

ベンチマーキング調査をリードする際は、プロダクトマネージャー（PM）やプロダクトデザイナー（PD）を含む複数のステークホルダーと連携し、調査プロトコル、タスク、指標、タイムラインについて全員の合意を取る必要があります。あなたが推進する他の UX リサーチプロジェクトと同様に、テストプランを UX リサーチチームと共有して [ピアレビュー](/handbook/product/ux/experience-research/how-uxr-team-operates/#how-we-uphold-the-quality-of-our-work) を受けることを忘れないでください。

初期の計画段階は、調査の残り全体を成功に導くために極めて重要です。最初の数週間の調査計画を最大限活用するため、ステークホルダーがどのようにフィードバックを提供したいかを話し合いましょう。非同期でフィードバックを受け取る場合は、譲歩できない明確な期限を設けてください。期限が守られない場合は、リサーチタイムラインを維持するために、定例ミーティングなどの同期コミュニケーションへ切り替えることを検討します。

### サンプルとリクルーティング

ユーザビリティベンチマーク調査のリクルーティングではサンプルを慎重に検討する必要があります。サンプルに関する厳密なガイドラインはありませんが、次の要素について参加者をバランスよくミックスすることを考慮してください。

- 調査範囲の領域に関連するペルソナ。ターゲットユーザーでテストするためです。
- 参加者が勤務する企業の規模。エンタープライズスケールで働くユーザーは、典型的に実行するタスクの種類や習熟度が異なる場合があります。
- 参加者が直接所属するチームの規模。All-in-One チームに属している人は、プラットフォーム全体での経験が豊富で、各タスクへの習熟度も高いと考えられます。チーム規模はユーザーが GitLab とどのように関わるかに大きく影響します。
- 参加者が勤務する企業の SaaS と Self-Managed のライセンスタイプ。Self-Managed ユーザーは GitLab の古いバージョンを使っている可能性があり、それがパフォーマンスに影響することがあります。
- 個人参加者の GitLab 在籍期間（GitLab を使い始めてからの期間）。GitLab の経験が長い人ほど、タスクを完了するための背景知識を持ちます。ワークフローやタスクに応じて、新規ユーザーや初心者を意図的にサンプルに含めたい場合もあります。一般的には、ミックスを得ることが良い慣行です。
- 参加者が勤務する企業の業種。業界が異なれば、タスクへのアプローチも異なる場合があります。
- GitLab 在籍期間とは別の、職務における個人の経験年数。職務経験が長い人は、タスク完了に異なる背景知識を持ち込みます。
- 参加者が好んで使うインターフェース。好みに応じて、GitLab の Web UI を使う人もいれば、ターミナルを使う人もいます。これはタスクへのアプローチに影響します。

いずれか 1 つの要素に偏って参加者をサンプリングしないように注意してください。例えば、全員が Self-Managed ライセンスの参加者になるのは避けます。リクルーティング Issue を開く際は、Research Operations Coordinator がリクルーティングを最適化できるよう、ベンチマークで望む理想的なサンプル像を記述してください。

### プロトコル

各プロトコルは調査のトピックと詳細に合わせて調整されますが、しばしば共通のセクションを含みます。一般的には次の項目をカバーします（多くはモデレートありの調査すべてに共通します）。

- 参加者を歓迎し、時間を割いてもらえることへの感謝を述べる。
- 録画と、その録画を GitLab 内部で共有することへの同意を取得していることを確認する。
- 参加してもらう理由を説明し、調査の概要を伝える。
- 普段の業務内容、GitLab をどれくらい使っているか、その他のリラックスできる「ソフトな」質問を投げて、ウォームアップする。
- セッションの内容を説明する。ベンチマーキングでは、各タスクの進め方、推奨される／推奨されない行動（例えば、ベンチマーキングでは通常 think aloud は行いません）、参加者がセッション中に期待できる流れを説明します。

[ユーザビリティベンチマーキングテンプレート](https://docs.google.com/spreadsheets/d/1FK3rS0MaF57cpyVEFL7P9LwD-zwfLSLk-k6tul__cPI/edit?usp=sharing) には、自分の調査で使える定型文がいくつか含まれています。

### タスク

調査用のタスクを選択する際のいくつかのガイドラインです。

- すべてのタスクを、私たちのペルソナのいずれかの Job To Be Done に紐づけます。
- SUS フィードバックをレビューして、ユーザーが否定的にフィードバックしている領域を特定します。これは次の 2 つの理由で有用です。
     1) **タスクの作成に役立てる** - SUS や他のフィードバックメカニズムでペインポイントが特定されている場合、それらを深掘りする機会としてタスクに組み込むのが良い実践です。これにより、ペインポイントを実際に目の当たりにし、その詳細をより理解できます。
     2) **データの三角測量のため** - ベンチマークデータの分析後、タスクを通じてペインポイントを特定したことになります。SUS データを使って、ベンチマークで特定したペインポイントが SUS フィードバックにも現れているかを確認できます。三角測量によりインサイトを補強できるため有用です。例えば、「このペインポイントは Q1 の SUS フィードバックでもテーマでした」と述べることができます。ベンチマークのペインポイントがそれまで SUS フィードバックで特定されていなかった場合も、その点を指摘してさらに探求する価値があります。
- 個別のタスクをワークフローでグループ化し、合理的な順序に並べます（例えば、「Issue を開く」タスクの前に「Issue をクローズする」タスクを置かないなど）。
- タスクの複雑さの中庸を見つけます。簡単すぎると意味がありません。複雑すぎるとワークフローの特定部分の測定が難しくなります。
- 全タスクを完了させるために、各タスクに「打ち切り」時間制限を設けることを検討します。
- タスクを参加者に説明する際は注意してください。正確だが UI のテキストとは完全には一致しない言葉を使うことで、参加者を意図せず正解へ誘導しないようにします。
- 自分でタスクを実行し、「ハッピーパス」つまり期待される経路を記録します。不確かな場合はステークホルダーから確認を取ります。
- 1〜2 名のパイロット参加者を募って、タスク指示が不明確すぎないかをテストし、必要なら修正します。
- 各タスクの完了基準を明示的に列挙します。これはチェックリストとして機能し、完了の記録に一貫性を持たせます。
- ユーザーがタスクを完了できるすべての方法を特定します。GitLab では同じ結果に異なる経路を提供している場合があります（例えば、UI 上の 2 つの異なるページでデプロイメントを承認できるため、どちらも成功とみなされます）。
- 各タスクに重みや得点を割り当てて、優先順位や重要度の計算に役立てることを検討します。

タスクリストに記述する単一タスクの例を示します。

| Name | Example |
| ------ | ------ |
| Task Code | BRANCH_OPS_3 |
| Topic | Branch Operations |
| Task | Protect Branch |
| Cut off time | 5:00  |
| Description | Make this branch a protected branch, where devs and maintainers can merge, push, and force push. |
| Notes | Must be 'maintainer' role or higher. Will need to find project settings. Push rules are also allowed in GitLab Enterprise Edition. |
| Related JTBD | When product improvements are identified, I want to propose changes that address them, so that I can help build a better product. |
| Happy Path | Left nav, settings -> repository. Find protected branches section, click expand. Under protect a branch section, use dropdown to select 'newbranch'. In 'allowed to merge' and 'allowed to push' dropdowns, select 'Developers + Maintainers'. Toggle 'allowed to force push' to on. Click 'protect' button.  |
| Completion Criteria | •Correct branch is protected <br> •Allowed to merge checked <br> •Allowed to push checked <br> •Force push toggled <br>  •Protect button clicked |
| Weight | 5 |

#### 打ち切り時間についての注記

タスクへの打ち切り時間の割り当てに厳格なルールはありません。次のいくつかの方法があります。

- 自分でタスクを完了する時間を計り、自分が熟練者であればその時間を 3 倍します（[初心者がかかる時間のガイドライン](https://pmc.ncbi.nlm.nih.gov/articles/PMC5738945/#:~:text=An%20expert%20can%20take%20longer,second%20nature%20for%20an%20expert.&text=For%20routine%20tasks%2C%20experts%20complete,1.3%20to%20multiple%20times%20faster.)）。
- [KLM](https://measuringu.com/predicted-times/)（Keystroke Level Modeling）の計算を実施して、タスク時間のおおまかな見積もりを得ます。
- 打ち切りを設けずにパイロットを実施します。タスク時間を測定し、それをベースラインとして使います。これにはいくつかの注意点があります。パイロット参加者が素早く完了したタスクには時間を加え、長すぎたと感じたタスクからは時間を引くことを検討してください。

#### 重みについての注記

重み付けの方法の 1 つは、完了基準に必要なステップ数を見て、その数を使うことです。上の例では完了基準のセクションに 5 つのステップが記載されており、割り当てられた重みは 5 です。これによりタスクの複雑さの代理として重みを割り当てます（あなたの調査に適しているかどうかは別途検討してください）。計算で重みをどう使うかは、通常、サマリ指標を報告する際の乗数としてです。

簡単な例:

- タスク A と B の 2 つがあるとします。
- タスク A のスコアは満点の 20/20、タスク B のスコアは振るわず 10/20 です。
- ここで、タスク A の重みが 1、タスク B の重みが 2 だとします。この場合、B は A の 2 倍重く評価すべきです。
- **結合した** タスクの成績を採点する際は、各スコアにその重みを掛けます。A のスコアは 20/20 のまま、B のスコアは 20/40 になります（10 *2 = 20、20* 2 = 40）。
- 次に、タスクの合計を足して最終的な重み付きスコアを得ます（20 + 20 / 20 + 40）。
- 合計スコアは 40/60、つまり .67 となり、重み付けしない平均 30/40 つまり .75 にはなりません。これはタスク B により大きな重みを与え、タスク B のパフォーマンスがより悪かったためです。

### 指標

以下の指標と定義が、GitLab がベンチマーキングを行う際の中核となります。

| Measure | Definition | Scope | Calculation | Example |
|:------------:|:-------------:|:-------:|:---------------:|:---------------:|
| **Completion Rate** | % of users who successfully complete the task | Measured per participant, reported per task | Completed = 1, incomplete = 0. <br> Then sum and divide by total participants. **Note:** completion criteria for each task should be carefully enumerated with your stakeholders prior to running your study |  4 completions out of 5 participants for task 3 results in 80% completion rate  |
| **Time on task** | Time spent from start to finish of task  | Measured per participant, reported per task for each participant who meets the task completion criteria  | Start timer on verbal cue, stop timer when participant signals that they have completed the task or report that they have no path forward | Avg. time to completion for task 9 = 2:11 |
| **CES** (Customer Effort Score) | Qualitative measure of perceived effort (1-7, 1 = extreme effort, 7 = effortless) | Measured per task, reported as average | At the end of the task, ask the participant, "On a scale of 1-7 where, 1 is extremely difficult and 7 is extremely easy, how easy was it for you to complete this task?"| Avg. CES for task 13 = 5.9 |
| **Error Type Count**  | Number of the different type of errors or mistakes made during task completion | Measured per task, reported as average or mean | Errors need to be defined alongside the 'happy' or optimal path the user should take  | 2.6 avg. errors for task X|
| **Error Rate** | The number of different types of errors observed over the number of steps in the task | Per task | Take the number of observed types of errors and divide by the number of steps or actions in that task. | Task A has 5 steps. There are 10 participants in the study. Our total steps (denominator) is therefore 50. The numerator is the observed errors across all participants for task A. Suppose there are 20 errors recorded for task A. Error rate is thus 20/50, or 40% |
| **Severity**  |  Judged severity of the problem   |   Per task, overall   |  See [this handbook page](/handbook/product-development/how-we-work/issue-triage/) for details | Critical |
| **Grade**     |   A cumulative letter grade portraying the usability of the task overall      |       per task, overall          |    see 'Per task grade calculation section below'         | C |
| **UMUX lite** |  Canonically, UMUX lite is a 2-question survey that measures perceived usefulness and usability of a system or product. For benchmarking at GitLab, we tend to use it to measure usability against the specific JTBD in our study. |  Collected once per JTBD at end of session.  |    1 question, on a 7-point Likert scale from strongly disagree to strongly agree.    | On a scale of 1-7, where 1 is strongly disagree and 7 is strongly agree, how much to do agree with the statement, "This system helps me perform (insert description of JTBD here)" |

#### スコアリングと指標についての注記

参加者がタスクの完了基準を *満たさなかった* 場合:

- 当該参加者の当該タスクのタスク時間は **入力しない** でください。私たちはタスクの成功完了にかかる時間を測りたいのです。
- CES スコアとエラー数は **含める** べきです。タスクを完了した全員のエクスペリエンスを理解したいからです。
- 参加者がタスクを完了したと考えていても、完了基準を **満たしていない** 場合は、そのタスクを **未完了** とマークします。
- 参加者がタスクを完了していないと考えていても、完了基準を **満たしている** 場合は、そのタスクを **未完了** とマークします。

タスク別指標について:

- 別の理由がない限り、すべての指標を 95% 信頼区間で報告します。
- 完了率については、信頼区間に [adjusted Wald calculation](https://measuringu.com/calculators/wald/) を使います。
- タスク時間については、信頼区間に自然対数による計算を使い、中央値ではなく幾何平均を推奨される [ベストプラクティス](https://measuringu.com/calculators/ci-calc/) として報告します。
- エラーを正確に定義し正確にカウントすることは **難しく**、必ず行う必要はありません。実施する場合は、タスクにおけるエラーの定義について非常に明確にする必要があります。
- エラー率を収集する場合は、タスクごとに報告します。同じ参加者が同じタスクの同じ部分で複数のエラーを記録した場合（例えば、誤ったリンクを何度もクリックする）も含め、そのタスクで起こり得るすべてのステップに対してエラーをカウントします。これによりエラー率が 100% を超えることもあります。
- Customer Effort Score (CES) について: サンプルが 30 未満の場合は、母標準偏差を使って信頼区間を計算します。N が 30 より大きい場合は、標本標準偏差の計算を使います。[こちらの便利な計算機](https://www.calculator.net/standard-deviation-calculator.html) は両オプションと信頼区間を含んでいます。

ワークフロー別の総合グレード計算について:

- ワークフロー内のすべてのワークフロー別指標が 1 つのカテゴリー（例: "Fair"）にあるが、計算されたスコアが異なる採点カテゴリー（例: "Good"）にある場合、総合グレードは指標と同じカテゴリーとして表現します（例: ワークフロースコアが 80 で「Fair」カテゴリーのサブ指標を持つ場合は、「Fair」として分類します）。

#### 重要度の計算

各セッションでは、タスクごとに、[このハンドブックページ](/handbook/product-development/how-we-work/issue-triage/) で定義されているように、そのユーザーのエクスペリエンスを最も近く表す重要度番号を記録します。この方法論は広く知られている [Nielsen/Norman システム](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/) と似ていますが、逆向きです（私たちのシステムでは数字が小さいほど重要度が高い）。

未完了の各タスクについて重要度を 1 とします。非常に苦しい完了は重要度 2、軽度の苦しい完了は重要度 3 とします（以下同様）。ユーザーがユーザビリティの問題に遭遇しなかった場合は重要度 5 とします。

タスクごとに重要度スコアを平均し、次のスコアに従って総合重要度を割り当てます。

| Range | Severity |
| ------ | ------ |
| 0.0 - 1.9 | Severity 1: Blocker |
| 2.0 - 2.9 | Severity 2: Critical |
| 3.0 - 3.9 | Severity 3: Major |
| 4.0 - 5.0 | Severity 4: Low |

例として、調査に 10 名の参加者がいるとします。タスク A について個別の重要度スコアが *1, 4, 1, 2, 2, 3, 4, 5, 1, 3* で、合計は 26 です。これを 10 で割ると平均 2.6 が得られ、そのタスクには *2: Critical* の重要度が割り当てられます。

#### タスク別の総合グレード計算

各タスクについて、以下の基準で最終グレードを計算します。

1. 各タスクの完了数から始めます（例えば、20 人の参加者から 15 件の完了があるとします）。
1. そのタスクの平均 CES スコアを完了数に加えます（平均 CES が 5/7 だとすると、5 + 15 = 20）。
1. 次に、そのタスクの平均重要度スコアを加えます（上記の 2.6 を取ると、スコアは 22.6）。
1. この数値を、合計の最大可能ポイントで割ります。ここで合計最大は、参加者数（20）+ 最高 CES スコア（7）+ 最高（最良）重要度スコア（5）です。私たちの場合は 20 + 7 + 5 = 32 です。例では 22.6 / 32 = 0.70 となります。
1. 結果に 100 を掛けます（小数から変換するため） - つまり 0.70 * 100 = 70。
1. レターグレードルーブリック（90-100 = A、80-89 = B、など）を使って最終グレードを得ます: 70 = C。

上記の例を表形式で示します。

| Input | Action | Example |
|-------|--------|---------|
| Number off completions (out of total # of participants) | - | 15 (of 20) |
| Avg. CES for task (of 7) | add to completions | avg CES = 5, running score = 20 |
| Running total | Divide by total possible | 20 / 27 = 0.74 |
| Decimal result | multiply by 100 | 74 |
| Integer result | map to grading scale (letter grades in this case) | 74 = C |

#### SUS コンパニオン分析

上で述べたように、ベンチマーク調査で特定したペインポイントを、そのステージの SUS フィードバック原文と三角測量することで、各ペインポイントが SUS フィードバックの何パーセントに対応しているかを把握し、チームがどのペインポイントを優先するかを判断できます。

ベンチマーク調査の知見を、自分のステージの SUS フィードバック原文と三角測量するには、次の手順を踏みます。

1. 分析に使うステージの SUS フィードバック原文のセットを集めます。
1. ポジティブのみのもの（例: 「it's pretty slick with ci」）や、情報量が乏しすぎるほど短いもの（例: 「ci」）は除外します。
1. カテゴリを構築するために、25% のフィードバック原文をランダムサンプルとして取ります。
1. 各タスクと UX テーマのベンチマークペインポイントのリストから始め、Learnabilty や Documentation などの新しいテーマを捉えるため、必要に応じてカテゴリを追加します。複数のテーマを反映する複雑なフィードバック原文は、別々の原文に分割します。これにより、カテゴリを相互排他的に適用でき、異なるテーマに対応するフィードバック原文の割合を表せます。
1. カテゴライズできないフィードバック原文のための、NA（適用外）の一般カテゴリも用意します。すべてのフィードバック原文がベンチマークタスクやテーマに合致するわけではないのは当然です。
1. カテゴリを構築した後、分析に含めるフィードバック原文のサンプル全体に適用します。これにより、各フィードバック原文について可能なカテゴリをすべて検討したことになります。
1. ベンチマークレポートの付録「SUS Companion Analysis」に、ベンチマークタスクやテーマに合致したフィードバック原文の全体的な割合、各テーマ・タスク・ワークフロー別の割合、NA カテゴリのもの、観察された追加カテゴリ（例: Learnability、Documentation）を報告します。

#### アクション可能なインサイトとラベル

UX リサーチャーとそのチームは、知見への次のアクションステップを明確にした Issue である [アクション可能なインサイト](/handbook/product/ux/experience-research/research-insights/) を特定します。

アクション可能なインサイトには、次のラベルを付与します。

- `Usability benchmark`
- 調査でカバーしたセクションとステージを識別する `Section::Stage` スコープラベル
- `Actionable Insight::Product change` または `Actionable Insight::Exploration needed`
- 注: `Actionable Insight::Product change` は、各 Issue に重要度ラベルを付与する必要があります。
- ステークホルダーとあなた自身のために、各アクション可能なインサイトの重要度レベルを評価しておくことも役立ちます。これによりチームが優先順位付けの方法を理解できます。各アクション可能なインサイトの重要度レベルの帰属には、上で説明したタスクレベルの重要度評価を使えます。

#### タイムライン

ベンチマーキング調査の準備と実施には時間がかかります。以下は、典型的なベンチマーキングプログラムを開始し、最初の調査を実施するためのサンプルタイムラインです。

| Step | Description | Time |
|-------------|-------------|-------------|
| Clarify your goals and conduct background research. | Be clear on the why, what, who, when, and how you are going to approach the benchmarking.  | 1 week |
| Begin issue | Open a research issue and fill it out.  | 1 day |
| Conduct kickoff | Include your stakeholders in helping to refine the scope and direction of the study (focus areas, important metrics, personas, and so on) | 1 week |
| Plan: Overview | Begin your study plan, record the context, reasoning, metrics, personas, and outcomes for your study.  | 1 week |
| Plan: Protocol | Write your introduction (exactly what you are going to say), opening questions, and the general flow for your study.  | 1 week |
| Plan: Tasks | Enumerate the exact tasks you will measure, the happy path, completion criteria, and weight for each task.  | 2 weeks |
| Plan: Test environment | Set up your test environment with any projects and [sample data](/handbook/product/ux/experience-research/ux-cloud-sandbox) you will use for testing | 2 weeks |
| Recruitment | Open a research recruitment issue at least a month prior to when you wish to run your sessions. A typical benchmarking study uses about 20 participants. | Opening ticket: 1 day. Recruitment itself: 1 month |
| Run Pilot(s) | The week before your sessions, run 1 or 2 pilot sessions to perfect your protocol and tasks. | 1-2 days |
| Run Sessions | Benchmarking sessions typically last from 90 minutes to two hours. Meaning that for 20 participants, conducting two sessions per day, you are looking at a solid two to four weeks of conducting sessions. Note that you will need to invite more participants than necessary to fill 20 sessions, since not everyone who qualifies will accept the research invite. In order to maximize participant attendance and avoid late cancellations, send reminder emails within 24 hours of each session. | 2-4 weeks |
| Analyze the results. | Calculate metrics, extract recommendations, pull verbatim, put things into Dovetail, and so on.  | 2 weeks |
| Prepare the report and share it. | Produce research report, slides, recordings, and so on to disseminate your findings. | 2 weeks |

最初のベンチマーキング調査は、開始から完了までフルクォーターを見込む必要がありますが、時間のコミットメントは週によって異なります。セッション実施週を除き、この期間にベンチマーキングだけをリサーチアクティビティとして計画すべきではありません。
注: このタイムラインは、同じタスクとペルソナでの後続のベンチマーキング調査では大幅に短縮できる場合があります。

## ユーザビリティベンチマーキングツールキット

新しいベンチマーキングの取り組みの立ち上げコストを抑えるために役立ついくつかのリソースです。

- [スプレッドシートテンプレート](https://docs.google.com/spreadsheets/d/1FK3rS0MaF57cpyVEFL7P9LwD-zwfLSLk-k6tul__cPI/edit?usp=sharing) - セッションノートとデータを記録するための Google Sheets テンプレート。よく報告される指標のためのページと数式を含みます。
- [Google Slides テンプレート](https://docs.google.com/presentation/d/1x2R1-qASZVhEFQwYcX9U2puR-8k3XwpsfRSDYkipsOY/copy) - ベンチマーキングレポートを作成するための Google Slides テンプレート。
- [Q1FY23 Create Benchmarking の Google Slides](https://docs.google.com/presentation/d/1jX7bOij69uS_oT2tYEsB5Rwg5A9rErfmpi7YhcY1H3M/edit?usp=sharing) - 最初のベンチマーキング調査のスライドデッキ。スライドの構成と全体的なプレゼンテーションフローを確認できます。
- [ユーザビリティベンチマーキングアラインメントワークショップ用 Figjam テンプレート](https://www.figma.com/file/QQ30XlTxTSFx80lq8UpNDo/Usability-Benchmarking-Alignment-Template?type=whiteboard&node-id=0-1&t=o3p1uikRBbZQ5Bnh-0) - ステークホルダーとユーザビリティベンチマーキングアラインメントワークショップを実施するための Figjam テンプレート。
- [ベンチマーキング Epic の例](https://gitlab.com/groups/gitlab-org/-/epics/7205)
- [Neilsen/Norman のベンチマーキング - プロセス](https://www.nngroup.com/articles/product-ux-benchmarks/)
- [Neilsen/Norman のベンチマーキング - 指標](https://www.nngroup.com/articles/benchmarking-ux/)

## FAQ

**Q: ベンチマーキングは UX Scorecard リサーチとどう違うのですか？**

A: 例えで言えば、UX scorecard は虫眼鏡でユーザビリティを覗いているようなものです。ユーザビリティベンチマーキングは顕微鏡で覗いているようなものです。
ベンチマーキングはより時間集約的です。軽量なものを目指していません。より多くの参加者（〜20 名）と、より長い時間（〜120 分）で対話し、複数の JTBD にまたがる可能性のあるより多くのタスク（〜25 個）を実施します。
ベンチマーキングは同じ指標の多く（さらに多くも！）を報告し、N が大きいため代表性が高くなる可能性があります。GitLab では、業界標準の統計手法（95% 信頼区間、完了率には adjusted Wald 計算など）を使って指標を報告しています。この意味で、ベンチマーキングと UX scorecard を併用し、それらの知見を検証・更新できます。
ベンチマーキングはまた、単発の調査ではなくプログラムとして位置づけられます。ベンチマーキングはユーザビリティ改善のための非常に粒度の高い推奨事項を生み出し、それらの推奨事項が十分に実装された段階でベンチマーキングを再度実施することで、時系列のトレンドを観測できます。

**Q: ユーザビリティベンチマーキング調査を実施すれば、UX Scorecard や CM Scorecard 調査は行わなくてよいですか？**

A: いいえ、ユーザビリティベンチマーキング調査に加えて UX Scorecard と CM Scorecard 調査も実施する必要があります。3 種類の調査すべてが、製品に対するユーザーのエクスペリエンスを理解する上で価値があります。

**Q: このスコアを、UX Scorecard スコアや CM Scorecard スコアに対してどう見ればよいですか？**

A: 3 つすべて（UX scorecard、CMS、ベンチマーキング）が総合レターグレードを提供するため、同じタスクや JTBD に焦点を当てた場合、すべてのグレードが一致するのが理想です。

**Q: ユーザビリティベンチマーキングはどの程度の頻度で実施すべきですか？**

A: これはニーズと、前回のベンチマーキング調査の推奨事項がどれくらい素早く実装されるかによって変わります。ただし、一般的には同じタスクで年に 1〜2 回を超えてベンチマーキングを行う理由はありません。

**Q: ユーザビリティベンチマーキングは最新リリースで実施する必要がありますか？**

A: はい。ベンチマーキングは今後の機能のソリューション検証としては重すぎますし、以前のリリースに対してベンチマーキングを実施 *することは可能* ですが、収集する頃には結果がすでに無効になっている可能性があります。時間のコミットメントを考えると、これは **強く推奨されません**。

**Q: ユーザビリティベンチマーキングはどの GitLab 環境でテストすべきですか？**

A: プロジェクトの UX リサーチャーは、[UX Cloud Sandbox](/handbook/product/ux/experience-research/ux-cloud-sandbox/) ページの手順に従って GitLab のクラウドインスタンスを構築し、プロジェクトにサンプルデータを作成できます。パイロット調査を実施する際は、ベンチマーキング調査のすべてのタスクを完了できる十分なサンプルデータがあることを確認してください。Slack の #ux-cloud-sandbox チャンネルでヘルプを求めることもできます。

**Q: テスト環境はどの程度複雑／現実的である必要がありますか？**

A: 状況によります。基本的には、タスクリストを見て一つ一つ実行し、プロジェクトのどの領域に行っても（あるいは参加者が合理的に行きそうな場所に）何かが存在するようにする必要があります。理想的には、1 つ以上のアイテム（ファイル、マージリクエスト、コメント、環境、デプロイメントなど）があり、希望するパスをスキャン・検索する時間がタスク時間に含まれるようにします。焦点を当てる領域によっては、大量のサンプルデータが必要になることもあれば、そうでないこともあります。

**Q: これは [プロダクトライフサイクル](/handbook/product-development/how-we-work/product-development-flow/) のどこに位置づけられますか？**

A: ベンチマーキングは、ビルドトラックの「improve」ステージと、検証トラックの「collect ideas/understand the problem」部分の橋渡しの空間に位置します。ベンチマーキングは現在の製品がどのようにパフォーマンスを発揮しているかを見るのに最適な方法で、サイクルの「測定・学習・改善」部分にうまくフィットします。その「learn」と「improve」部分が、検証トラックの collect ideas/understand the problem 部分への入力として取り込まれます。つまり、ベンチマーキングでは、現在の製品を測定し、既知の問題を検証し、それらに対処する、あるいは全般的に製品を改善するアイデアを生み出しているわけです。
注: ベンチマーキングは通常のワークフローからやや外れています。時間集約的なため、すべての機能や Issue の一部にすべきではなく、同じタスクで年に 1〜2 回を超えて実施すべきものではありません。

**Q: 目指すスコアはどのくらいですか？**

A: 最初から特定のスコアを目指すのではなく、ベンチマーキングで本当に見たいのは時系列での改善（あるベンチマーキング調査から次へ）です。とはいえ、ベンチマーキングは指標が豊富で、ふるい分けるべき「スコア」が多くあります。目標は、各タスクと各 JTBD（A〜F、重要度 1〜5）の総合グレードによって 10,000 フィート上からの一望できるビューを得ることであり、興味のある人にも詳細な指標を提供することです。

**Q: プロダクトデザイナーはどのように推奨事項を処理・管理しますか？**

A: ベンチマーキングについては、UX リサーチャーが「処理」の多くを担います。UX リサーチチームには、アクション可能なインサイトをより活用するための [FY23 目標](https://gitlab.com/groups/gitlab-org/-/epics/7367) があります。ベンチマーキングの主要なアウトプットの 1 つは、アクション可能なインサイトまたは情報的なインサイトに変換される一連の推奨事項です。この [プロセス](/handbook/product/ux/experience-research/research-insights/#how-to-document-actionable-insights) の一部として、アクション可能なインサイトを「exploration needed」または「product change」カテゴリに分類し、それぞれが該当ラベルを持つ Issue になります。

UX リサーチャーは、ベンチマーキングから得られたすべての知見と推奨事項のリストを、すべての関連ステークホルダー（特にプロダクトデザイナーとプロダクトマネージャー）に共有する責任があります。この正確な構造はおそらくグループやステージによって異なりますが、このプロセスの一部としてすべての「product change」アクション可能インサイトのコミュニケーションとハンドオフが含まれる必要があります。そこから、チームは協力してこれらの Issue を優先順位付けし、完了させるよう取り組むべきです（次の質問につながります）。

アクション可能なインサイトが、より小さく、すぐに達成可能な単位に分解されていることを確認することも重要です。チームと（ワークショップ中に行うのが良いタイミングです）、アクション可能なインサイトが大きすぎないかを確認し、より小さな Issue にどう分解できるかを尋ねてください。

**Q: 推奨事項が陳腐化（優先順位付けされず実装されない）するのを防ぐにはどうすればよいですか？**

A: これは *まさに* 重要な質問です。リサーチチームには、ベンチマーキングから生まれた `Actionable Insight::Exploration Needed`（追加のリサーチが必要）とマークされたアクション可能なインサイトについて、[リサーチ優先順位付けの KR](https://gitlab.com/gitlab-org/ux-research/-/issues/1764) があります。これらの Issue は追加のリサーチのための [優先順位付けプロセス](/handbook/product/ux/experience-research/research-prioritization/) を経ます。プロダクトデザイナーやプロダクトマネージャーにとってより興味のある `Actionable Insight::Product change` カテゴリの推奨事項については、重要度ラベルが適用されるプロセスがあります。一般的に、プロダクトデザイナーが「product change」インサイトの重要度を割り当て、UX リサーチャーが「exploration needed」インサイトの重要度ラベルを割り当てます。プロセスの詳細については、[このハンドブックページ](/handbook/product/ux/experience-research/research-insights/#how-to-document-actionable-insights) を参照してください。

**Q: GitLab のベンチマーキングアプローチは競合分析を含みますか？**

A: いいえ、現時点では含みません。上記の例えを使うと、[競合ユーザビリティ評価](https://www.nngroup.com/articles/competitive-usability-evaluations/) もまた顕微鏡のようなもので、UX リサーチャーが特定のタスクとパフォーマンスの細かい側面を見ます。競合と比較するために、ベンチマークタスクのいくつかを競合ユーザビリティ評価で使うことはあり得ますが、その作業は現在スコープ外です。私たちはまず自社製品でベンチマーキングアプローチを導入してから、競合間のパフォーマンスを見たいと考えています。さらに、GitLab における競合ユーザビリティ評価の最初のイテレーションでは、それらを顕微鏡の下に置く前に、競合から何を学べるかを見る虫眼鏡として使うかもしれません。

**Q: 私のチームはどのようにベンチマーキング調査をリクエストできますか？**

A: チームの UX リサーチャーと話して、プロセスを開始してください！

**Q: ベンチマーク調査のプロトコルについて、どの部分を変更できますか？**

A: ベンチマーク調査の重要な特性は一貫性です。ただし、柔軟性は多くの面で存在します。例えば、データによる効率化、推奨事項の協働のための結果ワークショッピング、Issue／Epic の形作り方、ストーリーテリングなどです。タスクに関する追加データを集めることもできます。それ以外のもの（例えば、収集する指標）について提案したい場合は、Google ドキュメントを開始してください。Google ドキュメントの提案には、提案する変更、変更のメリット、変更の影響、導入する可能性のある懸念事項、変更をどのように実行するかを含めてください。
