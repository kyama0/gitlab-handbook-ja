---
title: "User Satisfaction Plus（USAT+）調査"
description: "User Satisfaction（USAT+）調査は、プロダクト健全性を主要な次元にわたって追跡するためにプロダクト＆マーケティング部門内で年2回使用する統合された指標調査です。"
upstream_path: /handbook/product/ux/performance-indicators/usat-plus/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-17T16:54:45-04:00"
---

### USAT+データ収集スケジュール

| USAT+調査（FY27） | 送信日 | 締め切り日 |
| :---- | :---- | :---- |
| Q1 送信（2 月〜4 月） |  2026 年 2 月 3 日 | 2026 年 3 月 13 日 |
| Q3 送信（8 月〜10 月） |  未定 | 未定 |

### USAT+の概要

USAT+は、主要な UX 次元にわたる全体的なプロダクト認識とユーザーエクスペリエンス健全性を定期的に測定するための GitLab のリサーチ手法です。[GitLab の UX Quality Metrics Framework](https://docs.google.com/document/d/14EUaiiJaYV27NtkugeTs48u_tqsQvs2EHjXXTJxBQf0/edit?usp=sharing)（internal only）に基づいて、USAT+は、年 2 回実施されるよう設計された統合調査を通じて、GitLab 全体のユーザーエクスペリエンス健全性の包括的なビューを提供します。

USAT+以前は、全体的なプロダクト満足度、ユーザビリティ、ナビゲーションエクスペリエンスを測定するための個別の定期的な調査を実施していました。USAT+はこれらを単一の調査に統合し、調査疲労と運用負担を減らしながら、追加の UX 指標を含むようにカバレッジを拡大します。

USAT+を効果的に活用するためには、その強みと制限の両方を理解することが重要です。

### GitLab 全体の満足度調査

GitLab 全体には、別個ですが関連する満足度調査を実施する 2 つのチームがあります。UX リサーチは User Satisfaction Plus（USAT+）調査を実施し、Customer Success は All-Customer Satisfaction 調査を実施します。この[ハンドブックセクション](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/nps-csat-scores/#what-are-the-differences-between-the-all-customer-csat-and-usat-surveys)には、これら 2 つの満足度指標がどのように異なるかについての詳細があります。

### USAT+の目的

**ユーザーエクスペリエンスの脈動を捉える**

- 全体的な UX 健全性の定量的指標を提供する
- 過去データや競合他社に対するベンチマークをサポートする

**主要な次元にわたるユーザーエクスペリエンスを解読する**

- 全体的なスコアを細かい UX 次元に分解して、UX ランドスケープを理解する
- 異なる UX 次元がどのように相関し、ユーザー行動およびビジネス成果と関連しているかの定量分析をサポートする

**注意が必要な領域を強調する**

- 注意が必要な主要な UX 側面を特定し、焦点を絞った調査のためのコンテキストを提供する
- 次元のパターンに基づいてリサーチイニシアチブの優先順位付けを導く

### USAT+が目的としていないこと

**ソリューションプロバイダーではない**

- USAT+は、ソリューションを処方するのではなく、方向性指標として機能する
- USAT+の発見は、適切なソリューションを決定し、特定のデザインまたはプロダクト推奨を提供するために、追加の焦点を絞った調査が必要

**スタンドアロンの意思決定ツールではない**

- USAT+は意思決定の唯一の入力として使用すべきではない
- USAT+の発見は、プロダクト分析、サポートチケット、直接ユーザーフィードバック、ユーザビリティテスト、深いユーザーリサーチなどの他のデータソースと並行して考慮されるべきで、これらの代替にはなり得ない

### USAT+調査の実施方法

UX リサーチは、Qualtrics を通じて開始される調査により、GitLab.com の有料ユーザーと GitLab Self-Managed のユーザー向けに、年 2 回の頻度で USAT+スコアを決定します。データ収集開始の 1 か月前に、UX リサーチ DRI により[USAT+テンプレート Issue](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/USAT%2B%20Survey%20(UX%20Research%20only).md?ref_type=heads)が作成されます。Issue テンプレートには、調査を最初から最後まで実施するための背景情報、リサーチ目標、プロセスが含まれています。作成されたすべてのドキュメントは、[UX リサーチ内部のみの Google Drive](https://drive.google.com/drive/u/0/folders/1ia-SJujFRWgOpnBGUdLE6gAWE8ldf0DM)に保管されています。

## USAT+に含まれる質問

USAT+は、ユーザーエクスペリエンスを測定する標準化された評価スケールで構成され、数字の背景にあるコンテキストを提供し、追加のフィードバックを捕捉するオープンテキストのフォローアップ質問が付いています。調査は 2 つの主要なセクションで構成されています。

**セクション 1: 全体的なユーザー満足度（USAT）**

このセクションは、プロダクトに対する全体的な満足度（USAT）の評価から始まり、満足度レベルの背後にある理由を表面化し、改善領域を特定するために設計された 2 つのオープンテキストフォローアップ質問が補完します。

- 「GitLab（プロダクト）にどの程度満足していますか？」 *（1 = 非常に不満足; 2 = 不満足; 3 = 中立; 4 = 満足; 5 = 非常に満足）*
- 「GitLab（プロダクト）に満足または不満足な理由は何ですか？」（フリーテキストフィールド）
- 「GitLab（プロダクト）に対する満足度をどのように改善できますか？」（フリーテキストフィールド）

注: GitLab 全体には 2 つの満足度調査の取り組みがあります。UX リサーチは USAT+調査の一部として USAT スコアを収集し、Customer Success は All-Customer Satisfaction 調査を実施します。これらの調査がどのように異なるかについての詳細は、この[ハンドブックセクション](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/nps-csat-scores/#what-are-the-differences-between-the-all-customer-csat-and-usat-surveys)を参照してください。

**セクション 2: 包括的なユーザーエクスペリエンス評価**

このセクションには、特定の UX 側面を測定する 20 の Likert 型質問が含まれています。質問は応答バイアスを最小化するためにランダムな順序で提示されます。各質問は同意応答スケール *（1 = 強く同意しない; 2 = 同意しない; 3 = どちらでもない; 4 = 同意する; 5 = 強く同意する）* を使用し、回答者が評価を説明できるオプションのフリーテキストフィールドが直後に続きます: 「なぜそう感じるのか、もう少し詳しく教えてください。」

**[UMUX-Lite](https://measuringu.com/umux-lite/)（SUS 相当スコア）**

- 「GitLab の機能は私の要件を満たしている。」
- 「GitLab は使いやすい。」

**追加の質問**

- 「GitLab で新機能に気づくのは簡単だ。」
- 「GitLab をナビゲートするとき、探しているものを簡単に見つけられる。」
- 「GitLab は学びやすい。」
- 「誰かの助けなしに GitLab を使い始めることができた。」
- 「GitLab のインターフェースは視覚的に魅力的だ。」
- 「GitLab でアクセシビリティの問題（視覚、聴覚、身体、言語、認知のニーズに関連する）に遭遇しない。」
- 「GitLab のさまざまな部分はスムーズに連携する。」
- 「GitLab は他のツールとシームレスに動作する。」
- 「GitLab は私が効率的に作業できるようにする。」
- 「GitLab は私が使う必要があるときに利用可能だ。」
- 「GitLab は大きな待ち時間なしに動作する。」
- 「GitLab はエラーなしに動作する。」
- 「GitLab のインターフェース要素は、私がクリックしたときに意図したとおりに応答する。」
- 「GitLab を使うことに自信を感じる。」
- 「GitLab のインターフェースは視覚的に圧倒される。」*
- 「GitLab には一貫性がなさすぎる。」*
- 「GitLab は不必要に複雑だ。」*
- 「GitLab で行きたい場所に到達するのにステップが多すぎる。」*

*ネガティブな言葉遣いの質問のスコアは分析中に反転されます（「1」が「5」に、「2」が「4」になるなど）、これにより、すべてのスコアが同じ方向に整合し、高いスコアがより良いエクスペリエンスを示します。*

USAT+で測定される指標の詳細な定義と解釈については、[UX Quality Metrics Framework](https://docs.google.com/document/d/14EUaiiJaYV27NtkugeTs48u_tqsQvs2EHjXXTJxBQf0/edit?usp=sharing)を参照してください。

## USAT+の仕組み

### 収集スケジュール

USAT+は年 2 回（会計年度ごとに 2 回）実施されるよう設計されています。

最初の収集は FY2026 Q1 で開始され、以前の USAT 調査の運用アプローチに基づきながら、抽選インセンティブ、拡張された質問セット、強化されたメールテンプレートを含む変更を導入しました。当初予定されていた FY2026 Q3 の収集は、他の調査を優先する必要があったためスキップされました。

次の収集は FY2027 Q3 に予定されており、将来のイテレーションの前に信頼できるベースラインを確立するための一貫した手法を維持します。

### 現在のワークフロー

### ターゲット参加者と募集アプローチ

USAT+は、有料の SaaS ユーザー（GitLab.com Premium と Ultimate ティア）と Self-Managed ユーザー（Premium と Ultimate ティア）をターゲットにしており、サンプリングは、異なるプランタイプとユーザー在籍期間にわたるアクティブユーザーベースを代表し、信頼性のあるセグメント分析のための十分なサンプルサイズを維持するように設計されています。

調査招待は、過去 12 か月間にコンタクトされていない Premium および Ultimate プランタイプの有料 GitLab ユーザーに送信されます。SaaS ユーザーは、最近のプロダクト体験を持つアクティブユーザーをターゲットにするために Snowflake クエリを使用して選択されます。Self-Managed ユーザーのリストは、Customer Experience チームから来ています。

調査疲労を防ぐために、UX リサーチチームは大規模調査を実施する組織全体のリサーチオペレーションおよび Customer Experience チームと連携して USAT+のタイミングを調整し、データ収集スケジュールを少なくとも 1 か月前に伝えます。

対象ユーザーは、約 5,000 人のユーザーごとのメールウェーブを通じて招待され、可視性を最大化するために月曜日〜金曜日の東部時間午前 8〜9 時にスケジュールされます。回答は 4 週間の期間にわたって収集され、抽選によってインセンティブが提供されます。

### データ収集プロセス

調査招待は Rally を通じてメールで配信され、調査自体は Qualtrics でホストされます。詳細な運用ワークフロー、募集プロセス、デプロイテンプレートは、UX リサーチチームによってメンテナンスされ、GitLab の GitLab UX Research プロジェクトで内部的に利用可能な USAT+ Issue テンプレートに文書化されています。

#### 対象ユーザーのリストを生成する

各四半期の初めに、UX リサーチ DRI は以下の手順を通じて USAT+調査を配布する対象ユーザーのリストを生成します:

1. Snowflake で以下の[クエリ](https://docs.google.com/document/d/1XSABfApXJY_VHm7Q9j4V64xsMNkSorb5SWcLn-b4Tfk/edit?usp=sharing)を使用して、コンタクトする有料 GitLab.com ユーザーの新しいリストを生成します。約 40,000 のユーザー ID とメールアドレスをクエリします。注: このステップでデータテーブルをクエリするには、Snowflake と SAFE データへのアクセスが必要です。一方または両方へのアクセスがない場合は、[Access Request Issue](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)を作成してください。
2. 両方のプログラムで同じユーザーにコンタクトすることを防ぐために、関連する調査の取り組みについて Customer Experience チームに連絡します。
3. ステップ 1 で編集したユーザーのリストを新しい Rally プロジェクトに作成し、四半期のコンタクトを追跡するためにユーザーコンタクトのリストをプロジェクトにアップロードします。
4. Rally のプロジェクト/スタディフィルターを使用して、12 か月以上前にコンタクトされたユーザーを削除します。これにより、他の USAT+ Rally プロジェクトのユーザーへのコンタクトを回避します。
5. 現在の四半期の[プランタイプ別の比率](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDLicensedUsersbyProductRatePlanName/TDLicensedUsersbyProductRatePlanName?:iid=1)を計算します。これらのパーセンテージをユーザーリストに追加して、各プランタイプに招待する必要があるユーザーの数を計算するのに役立てます。最終目標は、人口の内訳とほぼ一致する（+/- 3%）サンプル内訳を達成することです。注: このステップのリンクを表示するには、Tableau と SAFE データへのアクセスが必要です。一方または両方へのアクセスがない場合は、[Access Request Issue](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)を作成してください。

##### メールウェーブの送信

1. [USAT+ユーザーリスト Google Sheet テンプレート](https://docs.google.com/spreadsheets/d/1y9cedI2uoHNaoZ1IgXkH7CB0fecvlg-RGsJp_mihpEI/edit#gid=776912528)の`percentages`タブで計算したパーセンテージを使用して、ウェーブのために各プランタイプにコンタクトする必要があるユーザーの数を決定します。最初のウェーブの場合は、人口比率を使用します。後続のウェーブの場合は、これまでの回答に基づいて計算した比率を使用します（次のポイントを参照）。
2. 現在のサンプルプラン比率を計算するには、Qualtrics または Rally から調査結果をダウンロードします。これまでのプランのパーセンテージ内訳を計算します。次に、その数を人口パーセンテージから引いて、結果を人口パーセンテージに加えます。
偽の数字を使った例:

- Ultimate の人口パーセンテージ = 73%
- ウェーブ 1 送信後の Ultimate プランタイプのパーセンテージ = 65%
- Ultimate のウェーブ 2 パーセンテージ: (73% - 65%) + 73% = 81%

この例では、サンプルが人口を下回っているため、次のウェーブのパーセンテージは Ultimate の人口パーセンテージの 3%以内に到達しようとするために、人口より高くなっています。

1. ウェーブは各約 5,000 人のユーザーであるべきです。送信するウェーブの名前で、各プランタイプのパーセンテージに合うその 5,000 人の内のユーザー数をマークします。
2. Rally の UXR プロジェクトで、`@gitlab.com`メールアドレス、クールダウン中またはメールをオプトアウトしたユーザー、過去 12 か月間に以前の USAT+調査でコンタクトされたユーザーを除外します。
3. それらの個人を除外した後、最新のウェーブのメール数を選択します。
4. Rally の`USAT+ survey template`メールを使用して、新しいメール配信を作成します。
5. メール配信を送信します。通常、メールは可視性と回答を最大化することを目標として、月曜日〜金曜日の早朝（東部時間午前 8〜9 時）に配信されるようスケジュールされます。

#### データ分析

データ分析は 2 つのコンポーネントで構成されています: 定量分析とオープン回答のコード化。

**定量分析**

USAT+は以下の両方を提供します:

- **ベンチマークスコア**: USAT と SUS スコアを提示し、現在の結果を過去のトレンドと業界ベンチマークと比較します。両方とも USAT+の質問セットに統合されており、USAT は全体的な満足度を測定し、SUS（UMUX-Lite 質問を介して計算される）は全体的なユーザビリティを評価します。
- **詳細な内訳**: 調査でカバーされた各 UX 側面の評価を分析し、時間の経過に伴う健全性を追跡するための全体的な数値と、特定の強み・懸念領域を特定するための内訳を提供します。

**定性分析**

オープンエンドの回答を 2 つのレベルで分析します:

- **全体的な満足度フィードバック**: 調査の最初の部分で全体的な満足度評価に続く 2 つの主要なオープンエンドの質問（「GitLab に満足または不満足な理由は何ですか？」と「満足度をどのように改善できますか？」）への回答をコード化します。これらの回答は、繰り返されるユーザーペインポイントとフィードバックパターンを強調する高レベルのテーマにコード化され、実行可能なコンテキストのために特定のステージとチームに接続され、調査と Issue 作成のためにプロダクトマネージャーとデザイナーと共有されます。テーマは、時間の経過に伴うトレンド分析を可能にするために、すべての USAT+収集にわたって標準化されています。
- **指標固有の洞察**: 20 の追加 Likert 型質問のそれぞれには、回答者が評価を説明できるオプションのフリーテキストフィールドが含まれています。これらの回答を使用して、特定の指標の追加コンテキストを提供し、スコアの「なぜ」を説明する主要な強みとペインポイントを強調します。**注**: これらのフリーテキストフィールドはオプションであり、限られたパーセンテージのユーザーのみが詳細な正当化を提供します。そのため、これらの例はユーザーパースペクティブの全範囲を表していない可能性があります。特定の指標に関する深い洞察については、フォローアップリサーチにオプトインした参加者へのターゲットアウトリーチを推奨します。

**データ品質とクリーニング**

データの整合性を確保するために、以下を含む品質チェックを実装しています:

- 潜在的なボットまたは詐欺的な回答の検出
- 満足度評価とオープンエンドのフィードバックの不一致の特定
- 回答パターンのレビュー（例: ストレートライニング、完了時間）
- ピアレビューを通じたデータ処理と計算の検証

データ品質を維持するために、必要に応じてフラグ付き回答がレビューされ、分析から削除されます。

### レポートと洞察

各データ収集に続いて、USAT+の結果がステークホルダーと共有されます。レポートには以下が含まれます:

- 全体およびセグメント化されたユーザー人口の定量指標とスコア
- 以前の収集と比較するトレンド分析
- ステージとプロダクト領域別に整理されたテーマ別の逐語的フィードバック
- リサーチフォーカス領域の方向性に関する推奨事項

すべてのレポートと分析ドキュメントは、内部の[UX リサーチ Google Drive](https://drive.google.com/drive/folders/14p0VgkAJzA5QIyUl1Sggydxmrd74HQgP)（internal）に保管されています。

#### USAT+ダッシュボードとメンテナンス

USAT 結果を提示するための Tableau には、2 つの内部ダッシュボードがあります:

- [USAT Scores](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/WIPDRAFTCSATScores?:iid=7): このダッシュボードは、GitLab のプロダクトに満足しているユーザー（`satisfied`と`very satisfied`の評価）と満足していないユーザー（`neutral`、`dissatisfied`、`very dissatisfied`の評価）の回答数とパーセンテージを示します。
- [USAT Line Chart](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/WIPDRAFTCSATLineChart?:iid=7): このダッシュボードは、スコアを時間の経過とともに追跡するために、USAT スコアを四半期ごとに示します。

これらのダッシュボードは[UX 部門パフォーマンス指標ページ](/handbook/product/ux/performance-indicators/#regular-performance-indicators)でも見つけることができます。

[分析テンプレート](https://docs.google.com/spreadsheets/d/1Klb9RO83F7EiB6TojIxvr-qEqyXjr36P7LJ-S4b0924/edit?usp=sharing)の調査データは Tableau に接続され、現在と前の四半期のデータを示します。UX リサーチは、Product Data Insights と協力して、これらの Tableau ダッシュボードを四半期ごとに更新する責任があります。

### USAT+回答者へのアウトリーチ

調査に記入する際、UX リサーチは USAT+回答者にフォローアップインタビューを受け入れるかどうかを示すオプションを提供します。分析の一部として、UX リサーチ DRI はフォローアップインタビューに同意したユーザーのリストをまとめます（[USAT+フォローアップユーザーの Google Sheet テンプレート](https://docs.google.com/spreadsheets/d/1425a6pwfjTKjTpiNKPGYzvwzEHUgm5L3JorFv8cE2wk/edit?usp=sharing)を参照）。

リサーチレポートが共有された後、UX リサーチ DRI は、この[USAT+ Responder Outreach Issue Template](https://gitlab.com/gitlab-org/ux-research/-/blob/master/.gitlab/issue_templates/USAT%2B%20Responder%20Outreach%20(UX%20Research%20only).md?ref_type=heads)を通じて、コンタクトをオプトインした USAT 回答者についてプロダクトマネージャー、プロダクトデザイナー、カスタマーサクセスマネージャーに通知します。USAT+回答者アウトリーチワークフローは[ここ](/handbook/product/product-processes/#usat-responder-outreach)でより詳細に説明されています。

## 継続的な改善

USAT+は FY2026 Q1 でパイロットされた新しい調査です。新しいリサーチ手法と同様に、体系的な学習と検証を通じて、調査自体と運用プロセスの両方を引き続き洗練しています。

### 運用の洗練

最初のデータ収集後、過去の USAT データと比較して満足度スコアが予想外に増加したことを観察しました。調査により、手法の変更（懸賞インセンティブの導入、拡張された質問セット、強化されたメールテンプレート、調査構造の修正を含む）が、潜在的なプロダクト改善とともにこの増加に寄与した可能性があることが明らかになりました。

この発見を考慮して、信頼できるベースラインを確立するために、将来の収集サイクル全体で一貫した手法を維持することにしました。これにより、さらなる洗練を行う前に、ユーザー満足度の真のシフトを手法のばらつきから区別できます。これには、調査構造とページレイアウト、質問の表現と順序、インセンティブ戦略、メールテンプレートとタイミング、応答収集ウィンドウの一貫性を保つことが含まれます。

並行して、UX リサーチチームは USAT+ Process Refinement イニシアチブを通じて、USAT+の運用を積極的に標準化し改善しています。この作業は、調査管理、分析、レポートのテンプレートを標準化し、データ品質チェックと AI/ボット検出を強化し、サンプリング戦略と募集ワークフローを最適化し、ステークホルダーの調整と洞察提供を改善し、アクセシビリティ監査の実施と分析スクリプトの洗練に焦点を当てています。

詳細な調査結果と計画については、[FY2026 Q1 スコア調査 Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/3457)（internal only）と[USAT+ Process Refinement and Standardization Issue](https://gitlab.com/gitlab-org/ux-research/-/work_items/3469)（internal only）を参照してください。

### サイコメトリック検証

USAT+のサイコメトリック品質を探り、調査が意図した UX 次元を反映しているかどうかを検証するために、FY2026 Q1 データセットで探索的因子分析を実施しました。この分析は、データが 3 つの主要なユーザーエクスペリエンス次元によって説明できる可能性を示唆しました。これは将来 USAT+のより合理化されたバージョンを潜在的にサポートする可能性がありますが、手法の安定性を維持するために、少なくとももう 1 ラウンドのデータ収集のためにすべての質問セットを保持しています。将来の最適化の取り組みは、この追加データに基づいて構築されます。

完全なサイコメトリック分析と詳細な質問マッピングについては、[USAT+ Factor Analysis Report](https://docs.google.com/document/d/1SOgLhtS-20GLWD5rv5y9iRhgzX70hnKh/edit?usp=sharing&ouid=102315570292206763138&rtpof=true&sd=true)（internal）を参照してください。

### ステークホルダーからのフォローアップ質問

過去のレポートに対して、UX リサーチは USAT+調査データに関するフォローアップ質問に答えるリクエストを受けてきました（例: 調査回答にわたる会社規模の内訳は？）。これらのリクエストが発生した場合、Product Data Insights と提携して、USAT+回答者を内部データソース（例: Snowflake）に接続する支援を受けてきました。GitLab の[Product Data Insights プロジェクト](https://gitlab.com/gitlab-data/product-analytics)に`ad hoc request` Issue を作成し、このリクエストを[チームのメンバー](/handbook/product/groups/product-analysis/#team-members)に提出します。

## 質問

USAT+の手法、管理、結果に関する質問については、UX リサーチチームに#ux-research で連絡してください。

## 関連リソース

### USAT+レポート

- [FY27 Q1 レポート](https://docs.google.com/presentation/d/1HCnNnN8FEYCOJC3EOtPyVFjXU1Dj97GbI7bcZOZ1-OE/edit?usp=sharing)
- [FY26 Q1 レポート](https://docs.google.com/presentation/d/1fA1GSxKmEMu42CBr5cD47uKPFCq7vIfQrKj2Eks0pOU/edit?usp=drive_link) - 最初の USAT+データ収集

### 過去の調査レポート

**USAT**

- [FY25 Q3 USAT レポート](https://docs.google.com/presentation/d/1zLtH5lc3GNx8dtzn8Q4y-fwXWyrccbdd0J263BEKkAE/edit?usp=drive_link)
- [FY25 Q2 USAT レポート](https://docs.google.com/presentation/d/1Oy8uM-1tD7wOfzrdieJrC9tHB2S6LuLijbDyE3zBmVE/edit?usp=drive_link)

**SUS**

- [FY25 Q2 SUS レポート](https://docs.google.com/presentation/d/1yrhtQFIAhfpDei1TZy3fr_KOtToezv2SayRVFkiXEYM/edit?usp=drive_link)
- [FY24 Q4 SUS レポート](https://docs.google.com/presentation/d/1vhlgxitGWp-jX9FJ3BIwWwypBlrDNnhDP-EwL0ApUAM/edit?usp=drive_link)
- [FY24 Q2 SUS レポート](https://docs.google.com/presentation/d/1Dkq2cueFHJIxQQkalk-aYM40Vh27OeWjfzmfdRmerO8/edit?usp=drive_link0)
- [FY24 Q1 SUS レポート](https://docs.google.com/presentation/d/1o_m3h1be3pVYVROLgNbPZn6SYNtjRugLf_X1t-2Nmsg/edit?usp=drive_link)
- [FY23 Q4 SUS レポート](https://docs.google.com/presentation/d/1fJnEgCl_M2jkTzn6Z-qx_bP-9t4_cAYPg8o3P9Lad7s/edit?usp=drive_link)
- [FY23 Q3 SUS レポート](https://docs.google.com/presentation/d/1Ib1Iz3fstGUA8TvjyuaSjTpuO1zjTawo4UZkdg_0YG4/edit?usp=drive_link)
- [FY23 Q2 SUS レポート](https://docs.google.com/presentation/d/13dARNmJMxizpOVh48rg3_0HARJLF-rvj-M8iWVk94OE/edit?usp=drive_link)
- [FY23 Q1 SUS レポート - SM](https://docs.google.com/presentation/d/13YsmwRYC--hJgIJNp7tGIwQbUw2kMDCgdZ6s9pB680k/edit?usp=drive_link); [FY23 Q1 SUS レポート - SaaS](https://docs.google.com/presentation/d/1hlhyL5Ox30R9oTe3_huDwjG3X0WakFigvjiF3t81Gx4/edit?usp=drive_link)
- [FY22 Q4 SUS レポート](https://docs.google.com/presentation/d/1Op9-3pW3HcHfYb1A52dMMjLoqTDXg9V8ig13z2IBiFY/edit?usp=drive_link)
- [FY22 Q3 SUS レポート](https://docs.google.com/presentation/d/1VmpIyXPK8xoiSUbYrKEHkcCQ_L-T4MxcziQTmE4aPU4/edit?usp=drive_link)
- [FY22 Q2 SUS レポート](https://docs.google.com/presentation/d/1L8hisjJSwkuuwsAGNAcAM7SEXi81cqYRgHn0RTRS3lo/edit?usp=drive_link)
- [FY22 Q1 SUS レポート](https://docs.google.com/presentation/d/1crS0oQ91Tr895FEk0Qmm3KTe9F_T5y9CDuSIBtFA87M/edit?usp=sharing)
- [FY21 Q4 SUS レポート](https://docs.google.com/presentation/d/1xSWQI5c_nQw581PcVaUAK3YmInq85zczD51iAjdmZWA/edit?usp=drive_link)
- [FY21 Q3 SUS レポート](https://docs.google.com/presentation/d/1gl1fK13N8ARp5BNaaTFy0s9lnniIAnnJnxe1Ojf3PJw/edit?usp=drive_link)

**ナビゲーション**

- [FY25Q1 Navigation Survey レポート](https://docs.google.com/presentation/d/1j_5f1i-rdpBNkzObRrdodr4QKnxwf83vMRf9v2iKM8g/edit?usp=sharing)
- [FY24Q4 Navigation Survey レポート](https://docs.google.com/presentation/d/1ONVvAfjcnqyEDJsRGX93_z629L9P2xIaljxziDK2K6w/edit?usp=drive_link)
- [FY24Q3 Navigation Survey レポート](https://docs.google.com/presentation/d/1no5K09jvCpq6J-PavW3tRrfEVeznM0jz1kqmVxIPpTE/edit?usp=drive_link)
- [FY24Q2 Navigation Survey レポート](https://docs.google.com/presentation/d/1bR5T0tPqrjef0P8iC6pjpiXGq-dgSlJnVMgAaGx9hK8/edit?usp=drive_link)
- [FY24Q1 Navigation Survey レポート](https://docs.google.com/presentation/d/1xOrXJ6chrd3oTtQtBFnSjhxQJ3pl7O3WBujODV12jfc/edit?usp=drive_link)

### 関連ハンドブックページ

- [UX 部門パフォーマンス指標](/handbook/product/ux/performance-indicators/)
  - [System Usability Scale（SUS）指標](/handbook/product/ux/performance-indicators/system-usability-scale/)
