---
title: "Dovetailでリサーチインサイトを文書化する"
description: "GitLab UXリサーチチームのDovetailでのインサイト文書化ガイド"
upstream_path: /handbook/product/ux/dovetail/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
translated_at: "2026-07-17T06:29:12+09:00"
translator: codex
stale: false
lastmod: "2026-07-16T17:32:42-03:00"
---

UXリサーチチームは、GitLabのUXリサーチプログラムを通じて発見されたすべてのリサーチインサイトを文書化するために [Dovetail](https://dovetailapp.com/) を使用しています。リサーチインサイトは、ユーザー[インタビュー](/handbook/upstream-studios/experience-research/facilitating-user-interviews/)、[ユーザビリティテスト](/handbook/upstream-studios/experience-research/usability-testing/)、サーベイ、カードソート、ツリーテスト、顧客との会話などの手法を通じて収集できます。

#### なぜDovetailでリサーチを文書化するのか？

UXリサーチチームは、消化しやすくアクセスしやすいリサーチレポートを作成する最良の方法を見つける上で、[常に課題に直面してきました](https://about.gitlab.com/blog/2019/07/10/building-a-ux-research-insights-repository/)。PDF、Googleドキュメント、GitLab Issueそのものを通じてリサーチインサイトを共有する際、研究結果を追跡し共有するのが困難でした。さらに、以前の研究で学んだ情報を素早く呼び起こすことを求められることが多いため、古いレポートを読み返したり、インタビューノートのページをめくったり、必要な情報を見つけるためにビデオ録画を見直すのは面倒です。研究レポートを継続的に作成し、情報の蓄積が無限に増えるため、この問題は積み重なります。

Dovetailの目標は、リサーチの発見を検索可能で、簡潔で、参照しやすくすることです。

### Dovetailを使い始める

1. この [ビデオ](https://dovetailapp.com/help/videos/getting-started-with-dovetail/) を視聴して、10分以内でDovetailの基本を学んでください。GitLabがDovetailプラットフォームをどのように使用し、ナビゲートするかについてのより詳細な概要については、この [プライベートGitLab Unfilteredビデオ](https://www.youtube.com/watch?v=SnyJDR5yjYU) を視聴してください。
1. Dovetailの [ビデオハイライトとトランスクリプション機能](https://dovetailapp.com/features/video-audio-transcription-for-research/) について読んでください。
1. Dovetail内で質的データ分析を行う方法に関する [ウォークスルー動画](https://www.youtube.com/watch?v=mUCx_3HhRn0) を視聴してください。
1. よくある質問については、[DovetailのHelp Center](https://dovetailapp.com/help/) をチェックしてください。
1. データの整理、タグの使用、ハイライトをインサイトに変える方法の優れた例については、この [プロジェクト](https://dovetailapp.com/projects/7fa7fb97-1c9e-41ab-ad3a-55a32987b048/readme)（社内アクセスのみ）をチェックしてください。

### UXリサーチチームのDovetailでのインサイト文書化ガイド

#### プロジェクトの作成

各リサーチ研究の終わりに、研究のDRIはDovetailでリサーチを文書化する責任があります。最初のステップは、製品ステージ（例: Manage）に対応するフォルダの下に、Dovetailで新しいプロジェクトを作成することです。

1. `Projects` に移動します。
1. ステージグループを見つけます。
1. `New project` をクリックし、プロジェクトに必要なテンプレートを選択します。プロジェクトのReadMeファイルにリダイレクトされます。

#### ReadMeファイルの更新

ReadMeファイルで、プロジェクト名を `Problem or Solution Validation Research` からより認識しやすいものに更新します。リサーチリクエスト／ブリーフへのリンクを必ず追加してください。

テンプレートの一部として、GitLab UXリサーチプロジェクトのリサーチIssueへのリンクを提供する必要があります。リサーチIssueの適切な追跡を確保するため、`UX Problem Validation`、`UX Solution Validation`、または `CM Scorecard` タグを必ず使用してください。

希望しない限り、プロジェクトに関するそれ以上の情報をReadMeファイルに追加する必要はありません。より多くのコンテキストを提供したい場合は、研究で使用されたリサーチ方法論や、リサーチ参加者に関する背景情報を記述できます。

#### Dovetailへの生データのインポート

左側メニューの `Data` をクリックします。リサーチセッション中に取られたノート/観察、ビデオ録画、顧客からのサポートチケット、ソーシャルメディアからのユーザーセンチメントなど、生データをプロジェクトに追加します。自分にとってしっくりくる方法で生データを整理し構造化してください。

以下の動画は、インポート機能の使い方と、リサーチ質問/タスクの周りにデータを構造化する方法を実演します。

{{< youtube "dod5EUYYgDk" >}}

### Dovetailでデータをタグ付けする

Dovetailは、リサーチデータ全体に現れるパターンとテーマを特定し、それをインサイトステートメントに変えるのに役立ちます。すべての生データをインポートしたら、コンテンツをハイライトしてタグ付けする準備が整いました。ハイライトとは、リサーチセッション中に聞いたり観察したりした興味深いもの（例えば、ユーザーのペインポイントやモチベーション）と考えてください。ハイライトには、可能であれば、ハイライトが関連するGitLabの機能/エリア（例: 'Merge Requests'）と、コメントしたペルソナ（例: 'Sasha: Software Developer'）でタグを付けます。

[アフィニティマッピング](https://en.wikipedia.org/wiki/Affinity_diagram) のように、Dovetailのタグはリサーチデータ全体に現れるパターンを特定し追跡するのに役立ちます。単一のハイライトに、1つまたは複数のタグを関連付けることができます。詳細なヘルプは、私たちの [ユーザーデータの分析と統合](/handbook/upstream-studios/experience-research/analyzing-research-data/) ハンドブックページにあります。

#### プロジェクトでグローバルタグを有効にする

GitLabのリサーチをより一貫したものに保つため、UXリサーチチームによってメンテナンスされている、Dovetailで利用可能なGitLabのグローバルタグをすべての人に活用するよう推奨しています。リサーチが一貫した方法で行われると、ステージ全体や長期間にわたるインサイトの収集がはるかに簡単になります。一貫したリサーチというゴールに向かって進むのを助けるため、質的リサーチの統合時には、グローバルタグを取り入れ、タグ付けのベストプラクティスに従うようにしてください。プロジェクトのタグの50%をグローバルタグから持ってくることが良い目標です。

プロジェクトで使用できるタグのセットは2つあります。いつでもどちらのセットも使用でき、独自のカスタムタグも使用できますが、**各プロジェクト**でタグを有効にする必要があることに注意してください。リサーチを要約するときは、まずグローバルタグを見て、次に適切な場合はセクションタグを見て、最後に独自のタグを作成してください。2つのタグセットの違いは以下のとおりです。

- [GitLab Global Tags](https://gitlab.dovetailapp.com/settings/tags/1imTtBuMIPQSxT46mHjDeX) には、すべてのステージグループで広範なプロジェクトに使用できるタグが含まれていますが、特に解決策検証に有用です。まずこれらのタグを見るようにしてください。
- [GitLab Section Tags](https://gitlab.dovetailapp.com/settings/tags/79TyjJnDkNehFnB4h9DfTp) には、[セクション](/handbook/product/categories/#devops-stages) ごとに整理されたタグが含まれており、より機能固有、機能関連の作業に使用できます。

この [ビデオ](https://www.youtube.com/watch?v=Cmh4yNu8fxE) には、プロジェクトでグローバルタグを有効にするための以下のステップのウォークスルーが含まれています。

1. 取り組んでいるプロジェクトを開きます
1. `Tags` の隣の `plus` アイコンをクリックします
1. `Use an existing board` を選択します
1. `Workspace` タブの下で、`GitLab Global Tags` を選択し、`Link to project` をクリックします
1. `Tags` の下にボードとして `GitLab Global Tags` が表示されるようになります
1. `GitLab Section Tags` を有効にするために、ステップ3〜5を繰り返します
1. 取り組んでいる各プロジェクトでこのプロセスを繰り返します

##### グローバルタグをノートと一緒に使う方法

手動で作成したタグと同様に、グローバルタグはタグ付けしたいテキストをハイライトし、有効にしたグローバルタグをクリックすることで使用できます。これは下の画像で示されています。

![Dovetailノート](/images/product/ux/dovetail/dovetail-note-tag-example.png)

タグはカテゴリーに整理されているので、タグとそのカテゴリーの整理に慣れておくとよいでしょう。

##### グローバルタグを使うタイミング

グローバルタグは、標準化と構造を提供することによって、手動タグ付けを補完する手段として使用できます。プロジェクトで使用されるタグの唯一のソースとして意図されているわけではありません。各リサーチプロジェクトの独自性のため、グローバルタグの1つを使うよりも新しいタグを作成するほうが役立つことがしばしばあります。

**例:** ユーザーインタビューを実施する際、ユーザーの特定のエクスペリエンスに対する感情を特定するようにしてください。エクスペリエンスについて話すときに、`feature request` や `frustrated` のようなGitLab Global Tagsからのタグを使いたいときが何度もあるかもしれません。これらのインサイトはリサーチに対して十分に具体的でない場合があるので、`wants a drop-down for options` のような追加のタグを作成することもできます。

***プロジェクトに設定する良いゴールは、タグの50%をグローバルタグから持ってくることです。***

自分のタグを作成するか既存のグローバルタグを使用するかについて確信が持てない場合は、まずどちらが最も有益なインサイトを生み出すかを考えてください。インサイトの正確性を保ちながらグローバルタグを使えるなら、それに従ってください。そうでない場合は、Dovetailでのタグ作成のベストプラクティスに従ってください。

##### どのようなタグが利用できますか？

GitLabチームメンバーは、UXリサーチチームによってメンテナンスされている [Global Dovetail Tags](https://docs.google.com/spreadsheets/d/1N3ALqllthLveuH6jof2pv0HrJUm5k7k5HSjGeh1fgdM/edit?usp=sharing) Google Sheetを表示できます。

GitLab Global Tagsは6つのカテゴリーに整理されています。

| カテゴリー      | 詳細           |  例              |
| ------------- | ------------- | ---------------- |
| User Action   | これらのタグは、ユーザーがUIを使用中に何をしたかを示すために使用できます。 | タスクが与えられたとき、ユーザーは `unsure what to do` で、その後 `down the wrong path` に進む場合があります。|
| User Feedback | リサーチセッション中にユーザーが言ったことを記述するのに有用。<br>また、汎用オプション（AからD）を持つタグのセットがあり、[解決策検証](/handbook/upstream-studios/experience-research/solution-validation-and-methods/) で使用できます。<br>| ワークフローに必要な機能について話すとき、ユーザーは `feature request` を持っているかもしれません。<br><br>または、デザイン評価でユーザーが `Prefer Option B` する場合もあります。                                            |
| User Emotion  | これらのタグは、[ユーザビリティテスト](/handbook/upstream-studios/experience-research/usability-testing/) やウォークスルーのように、UIに対するユーザーの態度に関連しています。 | UIを提示されたとき、ユーザーは `overwhelmed` と感じる可能性があります。 |
| Workflow      | ワークフローでのユーザーの行動を具体的に追跡するために使用できます。<br><br>また、汎用タスク番号（1〜10）を持つタグのサブセットがあり、[ユーザビリティテスト](/handbook/upstream-studios/experience-research/usability-testing/) や [UX Scorecards](/handbook/product/ux/ux-scorecards/#option-b-perform-a-formative-evaluation) で使用できます。| 一連のタスクを終えたが主要な成果物を逃した場合、`unsuccessful end task` タグを使用できます。<br><br>または、ユーザーが `task 1` と `task 2` を終えたタイミングを追跡したい場合があります。|
| Personas      | 各タグは、私たちの [ユーザーペルソナ](/handbook/product/personas/#list-of-user-personas) の1つ、またはそれらのペルソナの特性に関連しています。<br><br>特定のペルソナに対応するジョブまたは機能を探すときに、これらのタグを使用してください。| ユーザーが静的スキャナーを設定するとき、`Amy, Application Security Engineer` の可能性があります。<br><br>または、ユーザーの組織について [基礎研究](/handbook/upstream-studios/experience-research/foundational-research/) を行う場合は、`enterprise` や `start-up` タグを使用できます。 |
| JTBD          | ほとんどのタグは、[ジョブのマッピング](/handbook/product/ux/jobs-to-be-done/jtbd-playbook/) のさまざまな段階に関連しています。<br><br>[コンテクスチュアル・インクワイアリー](/handbook/upstream-studios/experience-research/problem-validation-and-methods) のような基礎ジョブリサーチを行うときに使用できます。 | コンテクスチュアルを実施するとき、ユーザーはパイプラインの監視について話す可能性があり、これは `Step in Job - monitor` でタグ付けできます。|

#### グローバルタグの定義

##### User Actionタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Workaround |  参加者が予測された "Happy Path" 以外の方法でタスクを完了する。 |
| Seeks help | 参加者がセッション中にモデレーターや他のソースからの援助を必要とする。 |
| Unsure what to do | 参加者が立ち往生し、どのように進めるかについて自信がない。 |
| Focuses on UI element | 参加者が特定のインターフェース要素に時間を費やしている。 |
| Confused by UI element | 参加者が特定のインターフェース要素に困惑している。  |
| Undo previous action | 参加者がタスクで行った進捗を元に戻す。 |
| Understands goal | 参加者が主要タスクについて望ましいフィードバックを与える。 |
| Blocker | 参加者がタスクの完了をブロックされている。 |
| Configuration | 参加者が設定やプロフィールに変更を加える。 |

##### User Feedbackタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Prefer option A | 参加者がオプションAを選ぶ。 |
| Prefer option B | 参加者がオプションBを選ぶ。 |
| Prefer option C | 参加者がオプションCを選ぶ。 |
| Prefer option D | 参加者がオプションDを選ぶ。 |
| General insights | 特定のプロダクトチームや機能セットの範囲外のフィードバック。 |
| Feedback on UI | デザイン要素に焦点を当てたフィードバック。 |
| Feedback on UX | ユーザーエクスペリエンスに焦点を当てたフィードバック。 |
| Opportunity | ユーザーエクスペリエンスに焦点を当てたフィードバック。 |
| Pain point | 製品が参加者のタスクの邪魔をする具体的または一般的な事例。 |
| Feature request | 参加者が、製品に追加されるべき具体的で特定の機能のリクエストをする。 |
| Feature requirement | 参加者が、現在のプロジェクトのために製品に必要な機能の側面を特定する。 |
| Missing functionality or feature | 参加者が、製品に何らかの機能や特徴が欠けていると表現する。 |
| Answer to question | 参加者がモデレーターによって投げかけられた質問に答える。 |
| Rationale for decision | 参加者が特定のトピックについての考えを明確にしたり、拡張したりする。 |

##### User Emotionタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Positive | 参加者が製品に対してポジティブな発言をする。 |
| Mixed feelings | 参加者が製品に対して相反する感情や情動を表現する。 |
| Negative | 参加者が製品に対してネガティブな発言をする。 |
| Delighted | 参加者が製品に対して大きな喜びを感じたり示したりする。 |
| Excited | 参加者が製品に対して非常に熱心で熱意がある。 |
| Interested | 参加者が製品に対して何かに対する好奇心や関心を示す。 |
| Satisfied | 参加者が製品に対して満足しているか、喜んでいる。 |
| Indifferent | 参加者が製品に対して無関心、または特に関心がない。 |
| Confused | 参加者が製品について明確に考えられない。 |
| Frustrated | 参加者が製品に対して苦痛や苛立ちを表現する。 |
| Disappointed | 参加者が製品に対して悲しんだり不満を感じたりしている。  |
| Dissatisfied | 参加者が製品に対して大きな不満を感じている。  |
| Overwhelmed | 参加者が製品で圧倒される感覚や、何かが手に負えないと感じる。 |

##### Workflowタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Workflow | 参加者が製品で特定のエンドツーエンドのエクスペリエンスを進む。 |
| Task 1 | 参加者が最初のタスクを実行する。 |
| Task 2 | 参加者が2番目のタスクを実行する。 |
| Task 3 | 参加者が3番目のタスクを実行する。 |
| Task 4 | 参加者が4番目のタスクを実行する。 |
| Task 5 | 参加者が5番目のタスクを実行する。 |
| Task 6 | 参加者が6番目のタスクを実行する。 |
| Task 7 | 参加者が7番目のタスクを実行する。 |
| Task 8 | 参加者が8番目のタスクを実行する。 |
| Task 9 | 参加者が9番目のタスクを実行する。 |
| Task 10 | 参加者が10番目のタスクを実行する。 |
| Start task | 参加者がタスクを開始する。 |
| Successful end task | 参加者がタスクを正常に完了する。  |
| Unsuccessful end task | 参加者がタスクの終わりに到達するが、主要な要件を満たしていない。 |
| Failed task | 参加者がタスクを終えられない。 |
| Doesn't understand task | 参加者が混乱し、タスクの指示を誤解する。 |
| Mistake in workflows | 参加者がワークフローで容易に修正可能な間違いを犯す。 |
| Critical mistake in workflow | 参加者がワークフローで元に戻したり修正したりできない間違いを犯す。 |
| Group-level interaction | 参加者がグループ中心の志向でUXに取り組む。 |
| Project-level interaction | 参加者がプロジェクト中心の志向でUXに取り組む。 |
| Group/project | 参加者がグループまたはプロジェクトのどちらかについてフィードバックを持つ。 |

##### Personasタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Parker, Product Manager | 参加者の役割やタスクが [Parker](/handbook/product/personas/#parker-product-manager) と一致する。 |
| Delaney, Development Team Lead | 参加者の役割やタスクが [Delaney](/handbook/product/personas/#delaney-development-team-lead) と一致する。 |
| Presley, Product Designer | 参加者の役割やタスクが [Presley](/handbook/product/personas/#presley-product-designer) と一致する。 |
| Sasha, Software Developer | 参加者の役割やタスクが [Sasha](/handbook/product/personas/#sasha-software-developer) と一致する。 |
| Devon, DevOps Engineer | 参加者の役割やタスクが [Devon](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/persona-snippets/user-personas/devon/) と一致する。 |
| Sidney, Systems Administrator | 参加者の役割やタスクが [Sidney](/handbook/product/personas/#sidney-systems-administrator) と一致する。 |
| Rachel, Release Manager | 参加者の役割やタスクが [Rachel](/handbook/product/personas/#rachel-release-manager) と一致する。 |
| Simone, Backend Engineer | 参加者の役割やタスクが [Simone](/handbook/product/personas/#simone-backend-engineer) と一致する。 |
| Allison, Application Ops | 参加者の役割やタスクが [Allison](/handbook/product/personas/#allison-application-ops) と一致する。 |
| Ingrid, Infrastructure Operator | 参加者の役割やタスクが [Ingrid](/handbook/product/personas/#ingrid-infrastructure-operator) と一致する。 |
| Dakota, Application Development Director | 参加者の役割やタスクが [Dakota](/handbook/product/personas/#dakota-application-development-director) と一致する。 |
| Amy, Application Security Engineer | 参加者の役割やタスクが [Amy](/handbook/product/personas/#amy-application-security-engineer) と一致する。 |
| Isaac, Infrastructure Security Engineer | 参加者の役割やタスクが [Isaac](/handbook/product/personas/#isaac-infrastructure-security-engineer) と一致する。 |
| Alex, Security Operations Engineer | 参加者の役割やタスクが [Alex](/handbook/product/personas/#alex-security-operations-engineer) と一致する。 |
| Cameron, Compliance Manager | 参加者の役割やタスクが [Cameron](/handbook/product/personas/#cameron-compliance-manager) と一致する。 |
| New or unknown persona | [ハンドブック](/handbook/product/personas/) で以前に特定していないユーザーペルソナ。 |
| Buyer personas | 組織内で主要な購買者として機能するユーザー、またはエンタープライズ内で購買会話を推進するチャンピオン。 |
| Team leader | マネジメント職にあり、直属の部下がいるユーザー。 |
| C-Suite Executive | 組織内の高位幹部であるユーザー（CEO、CIO、CFO等）。 |
| Individual Contributor | マネジメント職ではなく、直属の部下がいないユーザー。 |
| Enterprise | 従業員1,000人以上の企業。 |
| SMB- Small Medium Business | 従業員1,000人までの企業。 |
| Start-up | ユニークな製品やサービスを開発するために設立された若い企業。 |
| SaaS | 現在のGitLab SaaSユーザー。GitLab.comにログインしてアカウントにアクセスする。 |
| Self-managed | 現在のGitLab self-managedユーザー。自身のGitLabインスタンスをメンテナンスする。 |

##### Jobs and Toolsタグ

| タグ      | 定義       |
| ------------- | ------------- |
| Step in job (define) | 参加者がプロセスの動作方法を理解する。 |
| Step in job (locate) | 参加者がどこに行く必要があるかを理解しナビゲートする。 |
| Step in job (prepare) | 参加者がジョブの主要なステップに備える。 |
| Step in job (confirm) | 参加者がジョブのステップをレビューまたは検証する。 |
| Step in job (execute) | 参加者がジョブのステップを実行する。 |
| Step in job (monitor) | 参加者がジョブのステップの成果をモニターする。 |
| Step in job (modify) | 参加者がジョブの前のステップを修正する。 |
| Step in job (conclude) | 参加者がジョブのステップを終える。 |
| Job goal | ジョブの目的が何であるかの明確なデモンストレーション。 |
| Possible JTBD insight | 参加者がJTBDに関連する一般的なインサイトに言及する。 |
| Tool in job | 参加者がジョブを実行するときに使用するツールを指摘する。 |
| Critical tool in job | 参加者がジョブを実行するために重要なツールを指摘する。 |

##### もっとタグを追加できますか？

グローバルタグはイテレーティブなプロセスであり、将来も成長を続けます。可能な限り多くのニーズに合うようリストを調整できるよう、ステークホルダーからのフィードバックを強く奨励します。

タグライブラリーが不完全である、または編集が必要であると考える場合は、[#ux_research](https://gitlab.slack.com/archives/CMEERUCE4) Slackチャンネルにメッセージを送ってください。より多くのフィードバックとリサーチが行われる中で、時間とともに段階的にタグを追加することを予期しており、そのため特定のタグをすぐには追加しないかもしれないので、カスタムタグを作成することが役立つ短期的な解決策になります。

#### Dovetailタグ付けのベストプラクティス

多くのプロジェクトでは、いくつかのグローバルタグに加えてカスタムタグのミックスが必要になります。Dovetailでは、ユーザーデータをインサイトの証拠の断片に蒸留する助けにするため、任意のタグを作成できます。これは便利ですが、問題にもなり得ます。理由は次のとおりです。

- これらのタグは、プロジェクトから別のプロジェクトに引き継がれないため、プロジェクト間で類似のインサイトを特定するのが困難になります。
- タグは任意の名前を付けられます。これは、同様のテーマのタグが大量に発生する結果になり、プロジェクト間でのインサイトによる検索が困難になります（例えば、`opportunity`、`opportunities`、`opportunity for UI` のようなタグ）。

Dovetail内でリサーチインサイトを適切に管理するために、独自のタグを作成する際のDo'sとDon'tsを紹介します。

##### Do's

- データが頭に新鮮なうちにタグ付けする
  - セッションを実施した直後、またはトランスクリプトを読み直した直後にデータをタグ付けしてください。すべてが頭に新鮮にあると、テーマがより明確になります。
- タグをリサーチ仮説と整合させる
  - 各タグの目的は、ユーザーデータをリサーチのゴールにリンクすることです。各タグは、リサーチ仮説のいずれかに直接関連するべきです。
- 一貫性を保つ
  - どのタグを使うかを特定したら、それに従ってください。タグが一貫しているほど、データの傾向を見つけやすくなります。
- Less is more
  - 自信のない10個のタグよりも、自信のある5個のタグを持つほうがよいです。ガイドラインとして、ほとんどの研究で **15個未満のタグ** に制限するようにしてください。
- どのように使われるかを考える
  - いつか、あなた以外の誰かがタグを使って類似のインサイトを特定すると仮定してください。そうしやすくしてあげてください。
- もう一度見直す
  - タグを作った後、少し休憩を取り、もう一度読み直してください。

##### Don'ts

- 完全な文を使わない
  - タグは1〜3単語の長さにすべきです。複数の異なるタグを使うことは、1つの長いタグよりも有用なインサイトをもたらします。
- 絵文字を使わない
  - 絵文字はテキストよりも本質的に曖昧で、タグは可能な限り明確であるべきです。

| 悪いタグの例     | より良いタグの例  |
| ----- | ------ |
| `User is confused by navigation and fails the task`   | `Confusion`, `Navigation failure`, `Task failure` |
| `🆕 Features communicate the problem being solved and value to a new user` | `Positive Value`  |
| `Lack of clarity for some users` | `Confusion`   |

#### 共有タグを使ったクロスステージの認知の作成

ユーザーリサーチから生データをインポートする際、自分以外のステージやグループに有用なインサイトがある場合があります。Dovetail内の [extensions機能](https://dovetailapp.com/blog/extensions/) を使うと、プロジェクト間で使用できるタグを作成できます。これらの拡張タグを使って、他のステージやグループによってクロスステージのコンテンツをより発見しやすくできます。

`Shared Tags` 拡張機能の下でグローバルタグを使う際に従うべきベストプラクティス:

- まず、プロジェクトに拡張機能を追加する必要があります。新しいプロジェクトを開始するたびに、このプロセスを繰り返す必要があります。これを行うには、それぞれのプロジェクトの `Settings` ページに移動し、`Extensions` タブの下で、既に作成された `Shared Tags` 拡張機能をプロジェクトにリンクします。
- 次に、プロジェクトの `Tags` ページに移動します。プロジェクトで拡張機能タグが利用可能になっていることが分かります。拡張機能がプロジェクトで利用可能になったので、それをインサイトに追加するだけです。他のセクション、ステージ、グループにとって価値があるかもしれないインサイトを見つけ、適切な拡張機能タグを追加します。
- 新しいタグを追加する ***前に***、拡張機能タグのリストを必ず再確認してください。このリストはGitLab Dovetailアカウントの誰もが利用できるため、タグがすでに存在することに気づくかもしれません。
- ハイライトされたコンテンツに ***単一のグローバルタグ*** のみを使用してください。例えば、関連するステージグループの名前を使ってそのインサイトのタグを作成します。それ以外の場合は、関連するステージ名を使ってタグを適用してください。どのステージを使うか不明な場合は、代わりにプロダクトセクションを言及してください。
- これらのグローバルタグでハイライトされたすべてのコンテンツは、設定にある [extensionページ](https://dovetailapp.com/settings/extensions) 内でGitLab Global Tagsを選択することで、プロジェクト全体で追跡できます。

#### チャート＆インサイト

次のステップは、研究のために [インサイトステートメントを作成](https://dovetailapp.com/help/the-basics/insights/) し、タグ、ハイライト、チャートで収集した証拠でそれらを裏付けることです。`Charts` を使うと、リサーチデータ全体でテーマがどのくらい頻繁に言及されているかの概要を素早く取得できます。データに頻繁に再発するテーマは、インサイトに値します。`Insights` はリサーチの発見を要約するのに役立ちます。インサイトを作成するために複数のハイライトを選択してください。

リサーチ研究中に、興味深いものに気づくが、観察または聞いたことが [エッジケース](https://en.wikipedia.org/wiki/Edge_case) なのか、他のユーザーに影響を及ぼしているものなのかを判断するための十分なデータがまだない場合があります。

一般的な経験則: 何かをインサイトに変えるべきかどうか確信が持てない、および/またはテーマを支持するハイライトが1〜2個しかない場合、観察は `insight` に変換するのではなく `highlight` のままにしておくべきです。

ハイライトは、より多くのリサーチデータを集めた将来に、まだ検索、追跡、再訪することができます。

#### 発見を共有する

インサイトステートメントを作成したら、Dovetailの [「プレゼンテーションモード」](https://dovetailapp.com/help/the-basics/insights/#view-insights-as-a-presentation) 機能を使って、チームや他のステークホルダーに発見を共有できます。最後のステップは、元のUXリサーチIssueで直接Dovetailプロジェクトへのリンクを提供することです。これらのステップの素晴らしい例として、この [プロジェクト](https://dovetailapp.com/projects/838a723f-d93b-48c1-9ade-8b2bd692152c/readme) （社内リンクのみ）をチェックしてください。

#### コンテンツ管理の提案

このビデオは、複数のメモ取り係でGoogle Sheetと同じようにDovetailで構造化されたメモを取る方法を実演します。

{{< youtube "K7WuC0QCOyM" >}}

### パブリックアクセスを無効にする

PII（個人を特定できる情報）を保護するため、インサイトのプロジェクト設定が [パブリックアクセスに対して無効](https://dovetailapp.com/help/share-insights-with-public-access/) になっていることを確認してください。これを行うには、プロジェクトに移動し `Insights` をクリックします。そこから共有設定が以下のようになっていることを確認します。

![Dovetailウィンドウ](/images/product/ux/dovetail/sharesettings.png)

### よくある質問

#### 私はプロダクトマネージャーです。顧客との通話を追跡するためにDovetailを使用できますか？

はい！ 新しいプロジェクトを作成する際は、`Customer calls` テンプレートを選択してください。ReadMeファイルで、プロジェクト名を `Customer calls` からより認識しやすいものに更新します。[Dovetailへの生データのインポート](/handbook/product/ux/dovetail/#importing-raw-data-into-dovetail) から始まる、UXリサーチチームのDovetailでのインサイト文書化ガイドに概説されたステップに従い続けてください。

注: 1人の顧客のみと話しており、他の顧客から同じ問題を経験しているか、同じ機能改善を希望しているという証拠を聞いていない場合、発見は `insight` に変換するのではなく `highlight` のままにしておくべき可能性が非常に高いです。確信が持てない場合は、UXリサーチャーに気軽に連絡してください。

#### チームのカウンターパートがDovetailでリサーチインサイトへのアクセスを必要としています。彼らをDovetailに追加できますか？

はい、チームのカウンターパートを **閲覧のみ** のアクセスでDovetailに追加できます。これにより、利用可能なライセンス数に影響を与えることなく、インサイトと関連データを閲覧できます。

カウンターパートをDovetailに追加するには、以下のステップに従ってください。

1. アプリの右上にあるプロフィール画像をクリック
1. メニューで `profile` を選択
1. 検索バーの近くの左上にある `settings` に移動（**注:** 左ナビゲーションの設定オプションではありません）
1. 左ナビゲーションで `users` を選択
1. `invite users` ボタンをクリック
1. チームメンバーのメールアドレスを入力し、**Markup、Playback、Backstage** のために `viewer` アクセスを選択
1. 招待を送信するために `**` をクリック

#### Dovetailでデータを構造化する方法のアイデアが欲しいのですが、何か例はありますか？

はい、プロジェクトリストの一番下にスクロールすると、`Sample data` の下にDovetailの人々が作成したサンプルプロジェクトが見えます。

#### 機密情報を統合するためのプライベートプロジェクトを作成したい

私たちのDovetailプロジェクトは現在GitLab従業員のみがアクセスできますが、自分または少数の人々だけが見るべきだと感じるプロジェクトがあることがあります。プロジェクトへの [アクセスを制御する](https://dovetailapp.com/blog/2018/access-controls/) ことでこれを行います。

##### 機密情報を構成するもののガイドライン

Dovetailやリサーチイシューでリサーチインサイトを文書化する際は、参加者の [個人を特定できる情報（PII）](https://dataprivacymanager.net/what-is-personally-identifiable-information-pii/) を **絶対に開示しない** ことが極めて重要です。これは、彼らのフィードバックとアイデンティティが機密に保たれ、知る必要がある人だけが利用できるようにするためです。例えば、セッション録画にタイトルをつけたり、セッション要約をメモしたり、引用を使ったりするとき、参加者をフルネームで参照する代わりに「参加者[番号]」または対応するユーザーペルソナを使ってください。

詳細は、[Code of Business Conduct & Ethics](https://ir.gitlab.com/governance/governance-documents/default.aspx) を参照してください。

### フィードバックと質問

フィードバックと質問は、[#ux_research](https://gitlab.slack.com/archives/CMEERUCE4) Slackチャンネルに投稿してください。

他の人にも役立つ有用なことを見つけた場合は、このページにMRを送信して `@asmolinski2` にアサインしてください。
