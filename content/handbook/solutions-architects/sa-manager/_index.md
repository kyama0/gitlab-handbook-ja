---
title: SA マネージャーのオペレーティングリズム
description: "SA マネージャーに関連するプロセスの完全な概要: ビジネスの管理とチームの管理。"
upstream_path: /handbook/solutions-architects/sa-manager/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-08T14:07:20+02:00"
---

その他の SA 関連ハンドブックページについては、[SA ハンドブックホームページ](/handbook/solutions-architects/) をご覧ください。

簡単なサマリーは、[SA マネージャー オペレーティングリズム テンプレート](https://docs.google.com/spreadsheets/d/1wJVQVtIafqe__14BXuhqyewWXQBPDq4hoQqZntX0aas/edit?gid=1939895239#gid=1939895239) を参照してください。

## ビジネスの管理

### FY26 Solutions Architecture リーディング KPI

[会社の目標と整合させる](https://docs.google.com/document/d/1ZLQA5aj--2gxkcGRI-MakRwE2tpGtbZl0DEA7BDAd4I) ため、SA は POV と SA Validated Tech Evaluation を率（例えば、技術的勝利であり、必ずしもオポチュニティの勝利ではない）を含めてターゲットにしています。

1. **[適格なオポチュニティ](/handbook/solutions-architects/processes/customer-success-plan/#opportunity-thresholds-for-creating-and-reviewing-mutual-customer-success-plans) の 100% で CSP が作成され、顧客とレビューされること**
2. **[SA Validated Technical Evaluation](/handbook/solutions-architects/processes/activity-capture/sfdc-logging/#sa-validated-tech-evaluation) の技術的勝率 90%**
3. **[Proof of Value](/handbook/solutions-architects/playbooks/pov/) の技術的勝率 90%**

これらのターゲットを達成するために、SA リーダーは高品質なデータを保証し、進捗を定期的に検査し、チームの説明責任を促進し、実行を反復改善する必要があります。SA リーダーを支援するために、次のレポートとダッシュボードが提供されています。

### 利用可能なレポートとダッシュボード {#available-reports-and-dashboards}

- [CQ Hygiene metrics dashboard](https://10az.online.tableau.com/#/site/gitlab/views/CommandPlanCompletionReviewsRLSenabled/HygieneMetrics-CQ?:iid=1) - CQ 内のオープンオポチュニティに対する CSP と CSP レビュー率を含みます。
- [CSP Rates Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/RolesResponsibilitesMetrics/CSPRates?:iid=1) - すべての適格オポチュニティに対する CSP の作成とレビューをターゲットと比較して提供します。
- [CSP Exceptions](https://gitlab.lightning.force.com/lightning/r/Report/00OPL00000EPfG62AL/view?queryScope=userFolders) - 現在の FY における CSP 例外のオポチュニティと関連する理由のリスト。
- [POV and SA Tech Eval Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/RolesResponsibilitesMetrics/POVsTechEvals?:iid=1) - POV および技術評価の勝率をターゲット、衛生追跡、その他関連情報に対して提供します。
- [Global Top Deal Review Sheet](https://docs.google.com/spreadsheets/d/1mcqOAJEvfUcA0pznusA-jiBV_3_suGqN9F_AKXAAUfs/edit?gid=695806319#gid=695806319) - 100K Net ARR を超えるすべてのオポチュニティの詳細（SA エンゲージメント情報を含む）を提供します。（AMER と EMEA にもこのシートの独自バージョンがあります）
- [SA Feasibility Rating - Operational Dashboard](https://gitlab.lightning.force.com/lightning/r/Dashboard/01ZPL0000025nOj2AI/view?queryScope=userFolders) - 実現可能性スコアリングの採用、トレンド、その他の詳細を可視化します。
- [SA Activity Dashboards](https://10az.online.tableau.com/#/site/gitlab/workbooks/2924393/views) - SA 活動、アカウント、ファーストタッチ、個人パフォーマンスのトレンドを探索する動的ダッシュボード。
- [SA Activity Dashboards (Legacy)](https://10az.online.tableau.com/#/site/gitlab/workbooks/2105107/views) - SA 活動、オポチュニティ、個人パフォーマンスのトレンドを探索する動的ダッシュボード。
- [Rattle ボード](https://board.gorattle.com/) でも、Salesforce データをグリッド内で表示・編集できます。
- [IC Facing Opportunity Hygiene Salesforce Dashboard](https://gitlab.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJkZXNrdG9wRGFzaGJvYXJkczpkYXNoYm9hcmQiLCJhdHRyaWJ1dGVzIjp7ImRhc2hib2FyZElkIjoiMDFaUEwwMDAwMDJWWkExMkFPIiwiZGlzcGxheU1vZGUiOiJlZGl0In0sInN0YXRlIjp7fX0%3D)  CSP、POV、アクティブなオポチュニティ、実現可能性レーティング、SA の「次のステップ」を可視化します。

### 活動レビュー

ビジネスの定期的なリズムの一環として、見込み客と顧客のエンゲージメントに関連する活動をレビューすることが重要です。これにより、KPI の推進と実行の改善のための洞察を導き出すために必要なデータを確保できます。

### 週次

1. **SA Next Steps と Next Step Date**: 1on1 中に SA がオポチュニティ上の SA Next Steps を完了して報告することを確認します。技術戦略について計画通り進んでいるかを確認します。
SA マネージャーは、コメント（例: 認識、パターンマッチング、アシスト、質問、データ衛生コーチング）を追加し、SA から次のステップに関する洞察を得ることもできます。
1. **SA 活動レビュー**: [利用可能なレポートとダッシュボード](#available-reports-and-dashboards) を使用して、主要なオポチュニティの [SA 活動記録](/handbook/solutions-architects/processes/activity-capture/activity-logging) をレビューします。AE が、SA が活動を記録していたオポチュニティを閉じたり、重複させたりしていないことを確認します。
1. **SA 実現可能性レーティング**: チームが取り組むオポチュニティの [実現可能性レーティングをレビュー](https://gitlab.lightning.force.com/lightning/r/Dashboard/01ZPL0000025nOj2AI/view?queryScope=userFolders) します。実現可能性レーティングが設定されておらず SA が関与している場合のプラクティス遵守を促進します。レーティングの品質を検査し、必要に応じてベストプラクティスをチームにコーチングします。
1. **Primary SA 割り当て**: Strategic と Enterprise アカウントについて、Clari または SFDC で四半期内の最も可能性の高いオポチュニティのリストをレビューし、特に Negotiation Stage に入る際に Primary Solution Architect フィールドが空白でなく、正確に割り当てられていることを確認します。Closing Stage に入ると、クレジットのために Primary SA 割り当てを変更するには遅すぎます。
1. **技術評価レビュー**: Strategic と Enterprise アカウントについて、Stage 3 のすべてのオポチュニティをレビューし、すべての技術評価フィールドがチームによって適切に入力されていることを確認します。
1. **POV レビュー**: SFDC に POV レコードを持つべき Stage 3 のすべてのオポチュニティをレビューします。SA がそれを作成していることを確認します。Success Criteria を伴う POV Collaboration Project が完了し、URL が SFDC の POV レコードに記載されていることを確認します。POV オポチュニティのために特別な Google スプレッドシートまたはその他のものに記入する必要がある場合、それらが完了していることを確認します。
1. [**Customer Success Plan**](/handbook/solutions-architects/processes/customer-success-plan/): Stage 4 で 100k 以上のすべてのオポチュニティをレビューし、Customer Success Plan を構成する必要な要素とコンテンツが整っていることを確認します。1on1 中に、SA がそれを Customer や CSM（必要に応じて）とレビューしたかを尋ね、SFDC で適切にチェックボックスを設定します。
1. [**Marketing Event Issue Board**](https://gitlab.com/gitlab-com/customer-success/solutions-architecture/marketing-support-requests/-/boards/5503764): リクエストにタイムリーに対応していることをレビュー・確認します。
1. **Gong 録画のレビュー**: [Gong 通話](https://us-81995.app.gong.io/home) を定期的にレビューすることで、SA マネージャーはチェックインを行い、技術的なディスカバリー通話やデモに対してタイムリーなフィードバックを提供する機会を得られます。Gong AI 分析を伴う [Gong スコアカード](/handbook/solutions-architects/sa-manager/gong-scorecards/) の追加使用は、効率と反復改善のためにフィードバックサイクルを加速できます。世界の特定の地域や国におけるデータ主権の課題を考慮すると、Gong 通話の録画を常にレビューできるとは限らない場合があります。これは APAC や EMEA のような地域です。その結果、SA マネージャーは部門横断的なチームと協力し、代わりに内部または外部のミーティングへの参加を検討すべきです。これにより、販売計画と戦略の遵守、および主要なビジネスオポチュニティの支援が保証されます。さらに、イニシアチブとオポチュニティでリーダーシップを発揮することにより、SA マネージャーはチームとクライアントとベストプラクティスやアプローチを共有できます。可能であれば、レビューする通話について SA と事前に整合し、エクササイズが協働的でスキルレビューとコーチングへの肯定的な意図を示すものになるようにしてください。
1. **地域営業、CS、パートナー、その他の CRO 組織リーダーとの定期的な同期**: Regional Sales Director (RD)、CS、エコシステム営業、ESA カウンターパートと定期的にミーティングすることで、地域チームの健全性、戦略的テリトリー商談、オポチュニティのクローズ分析と地域データを議論する時間を持てます。SFDC オポチュニティ レコード、Tableau ダッシュボードデータの組み合わせを使い、Google Docs にメモを取ることが推奨されます。すべてのミーティングにはアジェンダがあるべきです。

    推奨アジェンダ:

    - SA／CS／AE チームの健全性を議論する
    - 戦略的テリトリー商談をレビューする
    - オポチュニティのクローズ分析と地域データをレビューする

### 月次

1. **Growth and Renewal At Risk Opportunities**: 現在および次の四半期のリスクのある成長と更新をレビューします。適切なアクションプランをレビューします。
2. **エスカレーションのレビュー**: エスカレーション中のすべてのアカウントをレビューします。進捗が出ていることを確認します。
3. **Go To Market レビュー**: GTM レビューミーティングで SA イニシアチブと進捗を報告します。
4. **マーケティングイベント、トレードショー、カンファレンススケジュールレビュー**: チームが今後 1 か月以内に出席予定の非顧客イベントをレビューします。チームがイベントをサポートする能力を持たない場合、代替（部門横断など）を見つけるか、イベントチームに知らせます。チームメンバーがそれらのイベントに参加することにより、顧客エンゲージメントとオポチュニティの成功に影響が出ないようにします。

### 四半期

1. **SA 整合**: SA テリトリーやオポチュニティマッピング整合をレビューします。高速度チームのための戦略的プールをレビューします。
2. [**Executive Business Review**](/handbook/solutions-architects/sa-manager/#executive-business-reviews)
3. [**Quarterly Business Review**](/handbook/solutions-architects/sa-manager/#quarterly-business-reviews)
4. **SA ディスカバリーとデモスキルの校正**: Geo レベルでマネジメントチームとして複数（3-5）のサンプル Gong（またはその他の方法で録画された）通話をレビューします。SA マネージャーは独立してスコアを付け、結果を議論します。SA リーダーシップ QBR で結果を報告します。目標は、SA リーダー仲間グループ全体でスキル評価の一貫性を高め、SA シニアリーダーシップレビューの指標を改善することです。
5. **SA クリアランス**: PubSec について、チームのクリアランスをレビューし、FSO 契約者と会合します。
6. **昇進候補者レビュー**: 昇進予測とチームの昇進ドキュメントをレビューします。SA の [昇進プロセス](/handbook/solutions-architects/sa-career-development/#promotion-process) に従っていることを確認します。
7. **Quarterly Achiever Nomination のキャプチャ**: [Google Doc](https://docs.google.com/document/d/1U4Ezp16RF15TKgVsDOW9xz1t3WzHPYzjOKm008m1s80/edit?tab=t.0) で四半期 Achiever 賞のノミネーションを追加します。

#### Executive Business Review {#executive-business-reviews}

過去 6 か月間に EBR がなかったすべてのアカウントを CSM マネージャーまたは RD とレビューします。スケジュールが組まれていることを確認します。

これは地域目標の達成に向けた効率を高め、潜在的な問題と課題について上級管理職に報告するのに役立ちます。主要な戦略的クライアントオポチュニティの技術評価中における Solution Architecture 関与の完全な適格化と提供を管理するため、営業マネジメントとのコラボレーションが推奨されます。

#### Quarterly Business Review {#quarterly-business-reviews}

SA マネージャーは、各四半期にチームのために [Quarterly Business Review](/handbook/sales/qbrs/) を開発・提供する責任があります。

SA マネージャーは通常、次の情報をカバーします。

- 過去四半期のレビュー
- 現在の四半期の評価
- 戦略的イニシアチブのレビュー
- 営業人材ニーズのレビュー
- レトロスペクティブ結果のレビュー

## チームの管理

### オペレーティングリズム

SA マネージャーとして、チームを管理する際のオペレーティングリズムのサマリーは次のとおりです。

### 週次

1. [**SA 1on1**](/handbook/solutions-architects/sa-manager/#one-on-ones):
2. **SA チームミーティング**: 週次 AMER、EMEA、または APJ ミーティングに SME corner を含め、SME からの最新情報を求め、SA がその週の顧客フィードバックを SME がそれぞれの PM と会合する際に PM に表面化させるよう求めるコントリビューションを募ることを確認します。

#### 1on1 {#one-on-ones}

チーム活動のレビューとサポートの一環として、SA マネージャーは各チームメンバーと毎週ミーティングすべきです。これは、マネージャーとチームメンバーの間の信頼関係を構築するために重要です。これを念頭に置き、SA マネージャーはアジェンダにトピックを追加し、チームメンバーにもアジェンダにコントリビュートするよう促してください。1on1 は、チームメンバーの健全性と作業負荷をチェックし、個々のチームメンバーのニーズを特定し、トップ商談をレビューし、フィードバックとコーチングを提供する素晴らしい場所になり得ます。直属チームメンバーとの 1on1 ミーティングは、[こちら](/handbook/leadership/1-1/) で説明されている GitLab のガイダンスに従い、議論を文書化すべきです。

### 月次

1. Workday で **SA 休暇レポートをレビュー**
2. Navan で **SA 月次経費をレビュー**

### 四半期

1. [**SA Individual Growth Plan レビュー**](/handbook/people-group/learning-and-development/career-development/igp-guide/): 各四半期、1on1 とは別の時間を確保し、Workday で SA の Individual Growth Plan と進捗をレビューします。
2. [**Quarterly Sit Down**](/handbook/solutions-architects/sa-manager/#quarterly-sit-downs-qsds)
3. **SA Club Leaderboard と Wildcard レビュー**: Tableau で SA Club Leaderboard をレビューし、Wildcard システムに調整を加えます。
4. **チーム四半期イネーブルメント** あるいは Quarterlies: 地域として四半期チームイネーブルメントを実施し、[意図的な練習](/handbook/solutions-architects/sa-manager/#deliberate-practice) を実施し、レトロを実施し、SA がお互いに優れたプラクティスを実証できるようにし、PS、パートナー、PM などを招いて SA と話してもらうことを強く推奨します。
5. **チームレトロ**
6. [**四半期意図的な練習**](/handbook/solutions-architects/sa-manager/#deliberate-practice)

### 半期

1. [**SA Talent Assessment**](/handbook/people-group/talent-assessment/)
2. [**チームとスキル評価**](/handbook/solutions-architects/sa-manager/#team-assessment)

### 年次

1. [年次報酬レビュー](/handbook/total-rewards/compensation/compensation-review-cycle/#annual-compensation-review)

#### 意図的な練習 {#deliberate-practice}

意図的な練習はチームがスキルを磨き、商談獲得につながるエンゲージメントを継続的に提供できるようにします。SA マネージャーは、進行中のロールプレイ演習と主要アカウントのドライランをサポートする必要があります。これには、セッションのファシリテーション、チームがこれを優先事項とすることへの支援、MEDDPPICC や Demo2Win を含む主要な提供方法論をチームが順守していることの確認が含まれます。重要なツールには、Google スライド、ロールプレイ、[picker wheel](https://pickerwheel.com/) があります。

#### チーム評価 {#team-assessment}

年に 2 回、SA マネージャーは次の目的のためにチーム評価を実施するべきです。

- リスクのあるチームメンバーと将来性のあるチームメンバーを特定する
- 今後 6 か月間のリソースニーズを特定する
- 後継者計画を決定する
- 6 か月から 12 か月のローリング昇進予測を更新する

#### Quarterly Sit Down (QSD) {#quarterly-sit-downs-qsds}

Solutions Architect の役割が役割と責任において多様であることを考えると、年間を通じて継続的なフィードバックの一貫したパスを確保することは価値があります。Quarterly Sit Down (QSD) は、非公式で包括的、かつ刺激的な方法でフィードバックを提供することを目的としています。つまり、Sit Down は SA マネージャーと Solutions Architect の双方に、お互いの視点を聞き、マネージャーと個人貢献者の間のミスアライメントを特定することを促します。

Quarterly Sit Down (QSD) の構造（[テンプレート](https://docs.google.com/document/d/15mkysv8qbpmG1-ULlMn-nBjPeUEjf5zuvSS_aBgtI-g/edit#)）は、マネージャーと直属の部下の双方が、直属の部下のために独立して回答を作成する機会を与え、次の領域に整合します。

- 過去四半期の主要な成果
- 前四半期の目標のレビュー（前四半期の QSD に基づく）
- 次四半期のトップ 5 目標
- 強み
- 開発する領域
- マネージャーが私をサポートするためにできること

これは四半期ごとに行われ、直属の部下とマネージャーの間のより良い整合性とより多くの可視性をもたらすことを目的としています。

各セクションは、直属の部下とマネージャーが、直属の部下の成果、目標などとして認識したものをキャプチャするために使用され、QSD 中にセクションごとに共有することを意図しています。各領域は声に出して読み上げ（画面共有なし）、受け手は聞き取って書き留める機会を与えられます。ミーティングが終了するまで、お互いのシートを見てはいけません。この会話形式は、認識の違いや意見の相違を浮上させ、将来の優先事項や成長領域に関する有用な会話を開くのに役立ちます。

Quarterly Sit Down の終わりに、各リストの間のギャップをレビューし、ドキュメントを読み取り専用形式でお互いに共有することは価値があります。

次の Quarterly Sit Down では、前回の Quarterly Sit Down の目標セクションをレビューすることが重要です。

**チームが Talent Assessment が行われる Q3 の終わりに QSD を行う理由**

Quarterly Sit Down (QSD) の目標は、双方向の目標整合性が四半期ごとに行われることを保証することであり、これが QSD が四半期ごとに行われる理由です。

毎年 Q3 の終わりに、個人は年間の Talent Assessment を自身で行うよう求められます。Talent Assessment は QSD フォーマットと非常に似ています。

同様に、Q4 の終わりには、Talent Assessment の結果がマネージャーから直属の部下に共有されます。

Q3 の終わりと Q4 の両方で QSD を行うのは、Talent Assessment が Q3 の終わりに記入され、Q4 の終わりまで直属の部下に表示されないためです。さらに、結果は四半期固有ではなく、年間全体の集大成です。

---

### 採用と発掘

SA マネージャーは常に採用活動を行うべきです！SA マネージャーは常に人材に注意を払い、人材ネットワークの構築に意識的であることが重要です。GitLab Field Manager Development Program の [Winning Top Talent](/handbook/sales/field-manager-development/#winning-top-talent) セクションで概説されているように、見込み候補者を面接する時間を作り、GitLab での職務の価値を明確に説明できるようにします。

**主要なリソース**

- Success Profile
- Interview Guide
- Networking ツール
- "Why GitLab" Summary

### オンボーディング

SA マネージャーは、新しい SA チームメンバーが必要なツールにアクセスでき、オンボーディングバディが割り当てられていることを確認することで、成功への準備が整っていることを保証すべきです。さらに、新しい SA と協力して明確なパフォーマンス期待を設定し、オンボーディングプロセス中に定期的なフィードバックを提供するべきです。SA マネージャーは、新しい SA に一般的な GitLab オンボーディング Issue を完了するよう促し、[Sales Quick Start](/handbook/sales/onboarding/) に積極的に参加し完了するよう保証すべきです。

GitLab 内の一般的な slack チャンネルである #thanks と #deal-graditude は、お知らせと祝福の観点から手動です。#wins-key-deals は自動リスティングとお知らせです。これらの自動 Slack チャンネルには、チームと組織のロールアップに関する SFDC マッピングが必要です。SA マネージャーは、新規入社者と既存のチームメンバー（昇進後など）の一貫性を保証するため、四半期ごとに SFDC マッピングをレビューすることが推奨されます。

### 育成と維持

主要な人材の育成と維持は、ハイパフォーマンスの SA マネージャーにとって常に最優先事項です。最高の SA マネージャーは、定期的な[コーチング](/handbook/leadership/coaching/) を提供し、[パフォーマンス管理](/handbook/sales/field-manager-development/#performance-management-and-giving-feedback) のベストプラクティスに従い、GitLab の [Field Functional Competencies](/handbook/sales/training/field-functional-competencies/) を活用して、望ましい結果／成果につながる重要なスキルと行動を強化します。

さらに、SA マネージャーは [主要なイネーブルメントイニシアチブ](https://gitlab.edcast.com/teams/solution-architects-sas) を強化し、[CS Skills Exchange](/handbook/sales/training/customer-success-skills-exchange/) への参加を奨励すべきです。

SA マネージャーは、チームメンバーが [個人の開発と成長パス](/handbook/people-group/learning-and-development/career-development/#roles-and-responsibilities) について積極的に議論するよう奨励・主導し、常にチームメンバーのキャリア成長を支援することを目指すべきです。

#### 認識と感謝

マネージャーとして、チームメンバーの成果を認識することは非常に重要です。感謝を示すことは、受け手の人生とマインドセットを改善するだけでなく、感謝を伝える側にも改善をもたらすことを示す[研究](https://www.mindful.org/the-science-of-gratitude/) があります。完全リモートな会社として、その感謝をタイムリーに伝えることは非常に重要です。ただし、すべてのチームメンバーが同じ方法で認識されたいわけではないことを念頭に置いてください。1on1 でチームと会うときは、認識される方法を尋ね、それを行う時と方法に留意してください。

##### SA 認識テーマ

SA リーダーが優れた仕事を特定し、一貫して認識するのに役立つよう、チームメンバーのコントリビューションを評価する際に次の主要なテーマを考慮してください。

- **卓越した技術的卓越性と専門性の発揮** - 深い技術的知識を披露し、革新的なソリューションを生み出し、特定の領域でサブジェクトマターエキスパートになるチームメンバー
- **ディスカバリーと CSP を通じた価値販売** - 顧客ディスカバリーに優れ、説得力のある Customer Success Plan を作成し、強力な価値販売技法を発揮する個人
- **重大な収益インパクト** - 商談クロージング、競合勝利、大型 TCV 商談、戦略的アカウントの成長への直接的なコントリビューション
- **再利用可能なコンテンツ作成と知識共有** - より広範な組織に利益をもたらすドキュメント、ワークショップ、アーキテクチャ図、その他の資料の開発
- **部門横断的なコラボレーション** - 複雑な問題を解決したり、包括的なソリューションを提供したりするためのチーム間（CS、PS、Product、Engineering）の効果的なパートナーシップ
- **チームと会社のイニシアチブへのコントリビューション** - 組織プロジェクト、プロセス改善、または戦略的イニシアチブへの積極的な参加

_注: このリストは認識機会のリマインダーとして役立ち、網羅的でも排他的でもありません。これを使用して認知バイアスを減らし、SA 組織全体で一貫した感謝の念を確保してください。_

##### Slack での認識

GitLab には専用の #thanks Slack チャンネルがあり、チームメンバーはあらゆる種類のコントリビューションに対する感謝のメッセージを提供することが奨励されています。原則として、チームメンバーの 1 人を認識するときは、`@sa_leaders` Slack グループを含めて、すべての Solutions Architect リーダーが認識し、成果にコメントできるようにしてください。そうすることで、行われた作業への可視性が高まり、SA のブランドを構築するのに役立ちます。追加のガイドラインは[こちら](/handbook/communication/#say-thanks) で見つけられます。

##### 成果の追跡

チームメンバーの成果のランニングログ（例: #thanks チャンネルからのスクリーンショット、AE、RD などからのメモ）を保持することも良いプラクティスかもしれません。これを行う簡単な方法は、各メンバーのために保持している個別の 1on1 ドキュメントの専用セクション、または SA が Individual Growth Plan ドキュメントに集めることです。この情報を統合された場所に持つことは、レビュー時やそのチームメンバーが昇進の準備ができたときに大いに役立ちます。

##### 任意ボーナス

認識は、[任意ボーナス](/handbook/total-rewards/incentives/#discretionary-bonuses) の形でも実現できます。これは GitLab が、期待を上回るパフォーマンスを発揮するチームメンバーに提供する素晴らしいインセンティブと福利厚生です。マネージャーとして、Nominator アプリ経由で Slack でノミネーションを受け取ったら、[承認基準](/handbook/total-rewards/incentives/#valid-nomination-examples) に基づいて承認または拒否してください。このステップでノミネーションテキストを更新するオプションもあります。承認後、第 2 レベルのマネージャーと People チームからのさらに 2 つの承認があります。チームメンバーがボーナスを承認された場合、#thanks Slack チャンネルでお知らせを行うのはあなた次第です。繰り返しになりますが、その際にはメッセージの一部として `@sa_leaders` Slack グループを必ず追加してください。サポートする RD との定期的なミーティングの一環として、彼らとそのチームが必要な場合に任意ボーナスをログする方法を知っていることを確認してください。
