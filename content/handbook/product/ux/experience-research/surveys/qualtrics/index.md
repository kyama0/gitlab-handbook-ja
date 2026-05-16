---
title: "Qualtrics のヒントとコツ"
description: "GitLab で Qualtrics を使ってアンケートを実施する方法"
upstream_path: /handbook/product/ux/experience-research/surveys/qualtrics/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

## アンケートを作成する

1. `Blank survey project` を選択します。
1. プロジェクトに名前を付けます。
1. アンケートの質問を入力します。画面右側には次の項目があります。
    - [質問タイプ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/question-types-overview/)と書式設定（回答選択肢の数、位置など）。
    - [検証](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/validation/)（回答者に質問への回答を強制する、またはページを離れる前に回答を検討するよう求める）。
    - アクション（[ページ区切り](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/add-page-break/)、[スキップロジック](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/skip-logic/)、[表示ロジック](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/display-logic/)など）。
1. アンケートの `Look & Feel` を更新します。
    - ガイダンスについては[Look & Feel 設定](#styling-look--feel-settings)を参照してください。
1. [Survey Options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/)を適切に調整します。
1. [Tools](https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/survey-tools-overview/)メニューには、次のような便利な機能が多数あります。
    - `Collaborate` - 別の Qualtrics ユーザーとアンケートを共有し、一緒に編集や結果の分析ができます。
    - `Spell check` - 英語（米国）のみサポートしています。
    - `Generate test responses` - アンケート用の自動ダミー回答を生成し、実際の参加者にアンケートを送信する前にデータセットとレポートがどのように見えるかを確認できます。
    - `Check survey accessibility` - スクリーンリーダーを使用する回答者がアンケートにアクセスできるかどうかを判断し、アクセシビリティを改善するための提案を受け取れます。
    - `Analyze Survey` - アンケートに対する [ExpertReview の](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/quality-iq-functionality/)提案を開きます。
    - `Import/export survey` - QSF、TXT、または DOC ファイルとの間でインポート／エクスポートできます。
1. アンケートの構築が完了したら、`Preview` で期待通りに動作しているかを確認します。
1. アンケートを起動する準備ができたら、`Publish` をクリックします。

## スタイリング（Look & Feel 設定） {#styling-look--feel-settings}

アンケートには以下の設定を適用してください。

1. Theme: Blank
1. Layout: Modern
1. General
    - Progress bar: Without Text
    - Progress bar position: Top
1. Style
    - Primary colour: #554488
    - Secondary colour: #554488
    - Font: Arial
    - Foreground contrast: Medium
    - Question spacing: Compact
    - Question text: 14px bold
    - Answer text: 14px
1. Motion
    - Page transition: None
    - Additional check boxes: Unticked
1. Logo
    - GitLab First Look ロゴ（Qualtrics 内の UX Research & Product グラフィックライブラリに保存されています）
    - Style: Banner
    - Placement: Left
    - Max height: 70px
    - Mobile scaling: 66%
1. Background
    - Background type: Color
    - Background color: #ffffff
    - Foreground contrast: Medium
    - Questions container: Off

## ソーシャルメディアからのスパム回答を回避する

ソーシャルメディアでアンケートを配布することは、調査の時間とコストを削減し、対象者を素早く拡大できる素晴らしい方法です。ただし、**ソーシャルメディアで共有されたアンケートは、ボットや偽の参加者によって標的にされることが多く**、短時間で数十から数百件の回答が送信され、[データの整合性に影響する](https://europepmc.org/article/MED/25846043)場合があります。**これは特に報酬付きのアンケートに影響を与えます。**

ボットには洗練度に差があります。例えば、基本的なボットはアンケートを「スピード」で通過したり、自由回答形式の質問に対して論理的でない回答を提供したりします。より洗練されたボットは、意図的にアンケートの完了に時間をかけたり、アンケート自体の言語を使用して自由回答形式の質問に論理的な回答を作成したりします。

[これらの回答のほとんど](/handbook/product/ux/experience-research/surveys/how-to-identify-low-quality-data-when-designing-and-reviewing-your-survey/)を防止またはフィルタリングするためにできることはいくつかあります。「これらの回答のほとんど」と言うのは、アンケート内のスパムを回避する唯一の真の方法は、ソーシャルメディアで共有するのではなく、[Marketo やデータウェアハウス](/handbook/product/ux/research-operations/recruitment-methods)などのリソースを活用して、私たちが保有する GitLab ユーザーの対象セットに連絡するために、[個別リンク付きのメールアンケート招待を送信する](https://www.qualtrics.com/support/survey-platform/distributions-module/email-distribution/emails-overview/#UnderstandingTheIndividualLink)（一度のみ使用可能）ことだからです。

### アンケート共有前にスパム回答を防止する

アンケートを共有する前に、ボットや偽の参加者を防止するために次のアプローチを使用します。Qualtrics の[キャプチャ質問](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/captcha-verification/)と[不正検出機能](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/)は役立ちますが、より洗練されたボットを防止するには不十分であることに注意してください。

- アンケートの最初に[キャプチャ質問](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/captcha-verification/)を追加します。
- すべての[不正検出機能](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/)を有効にします: 複数送信の防止、ボット検出、セキュリティスキャンモニター、RelevantID。
- 「ハニーポット」質問（人間からは隠されているがボットからは「見える」質問）を追加します。一部のボットはこの質問に回答するため、スクリーニングしたり、回答をフィルタリングしたりできます。
   1. アンケート内のどこかに**任意の**単一選択質問（チェックボックス）を追加します。質問と場所は重要ではありません（人間からは隠されるため）。例: 「あなたは人間ですか？」 `[ ] はい`。
   1. その質問に[次の JavaScript を追加します](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/)。既存の `Qualtrics.SurveyEngine.addOnload` 関数を置き換えます。

      ```js
      Qualtrics.SurveyEngine.addOnload(function()
      {
          jQuery("#"+this.questionId).hide();
      });
      ```

   1. アンケートをプレビューして、ページの読み込み時に質問が非表示になっていることを確認します。
- 回答者の注意力と論理性をチェックする**必須**の選択肢質問を追加します。例えば、選ぶべき回答を直接示すか、今年が何年かを尋ねます。
- 多肢選択式の質問に論理的でない選択肢を追加します。例えば、「コードレビューにどのツールを使用しますか？」という質問に、`[ ] Tanuki Code` のような論理的でない選択肢を追加します。
- アンケートの 2 つの別々のポイントで同じ**必須**の質問を尋ねます。人が簡単に答えられるシンプルな多肢選択式の質問を使用するようにしてください。例えば、職種やチームサイズなどです。
- 上記 3 つの質問タイプすべてについて、回答に基づいて回答者をスクリーニングしたい場合は、[アンケートフローでの回答者のスクリーニング](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#ScreeningOutRespondentsInTheSurveyFlow)セクションの**Branching Respondents Out of the Survey** セクションを参照してください。このセクションで説明されているアンケートフローロジックを追加した後、これらの回答を後で分析するために[フラグを立てる](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#FlaggingScreenedOutResponses)か、[即座に破棄する](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#DiscardingScreenedOutResponses)かを決定できます。

さらに、アンケートが複数のソーシャルメディアチャネルで共有される場合は、[クエリ文字列を通じて情報を渡す](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/passing-information-through-query-strings/#PassingInformationIntoASurvey)ことで、参加者がアンケートにアクセスしているソースを追跡できます。これは、あるソースが他のソースよりもスパムが多いように見える場合に回答をフィルタリングするのに役立ちます。

### アンケート終了後にスパム回答をフィルタリングする

アンケートを終了した後、防止策がスパム回答をどの程度軽減し、まだフィルタリングする必要のある回答がどれかを確認します。[Response Quality](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/)機能は、[いくつかの基準](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/response-quality/)に基づいて自動的に回答にフラグを立てます。

- [Response Quality](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/#ViewingResponseQuality)レポートを表示し、[回答をフィルタリングします](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/#FilteringResponsesbyIssue)。
- 該当する場合、自由回答形式の質問への論理的でない回答をチェックします。
- アンケートをあまりにも速く完了する回答者をチェックします。Response Quality 機能は[「スピーダー」回答にフラグを立てる](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/response-quality/#Speeders)ことを試みますが、これは少なくとも 100 件の回答があるアンケートでのみ機能します。
- 該当する場合、重複したメールアドレスをチェックします。また、アンケートのスパムによく使用される `@aol.com`、`@yahoo.com`、`@hotmail.com` のメールアドレスにも注意してください。

### 埋め込みデータ

**注意: これらの手順は UX Researcher と Research Coordinator にのみ適用されます。**

ユーザーが GitLab First Look にサインアップすると、次の埋め込みデータが自動的に収集されます。

1. `GitLab user` - その人が GitLab ユーザーかどうか。
    - `Yes` - その人は GitLab ユーザーです。
    - `No` - その人は GitLab ユーザーではありません。
1. `Job title` - その人の職種は何か。
    - `Back-end Engineer/Developer`
    - `Designer`
    - `DevOps Engineer`
    - `Executive (VP of Engineering, CTO, CEO, etc)`
    - `Front-end Engineer/Developer`
    - `Full-stack Engineer/Developer`
    - `Infrastructure Engineer`
    - `Operations Engineer`
    - `Penetration Tester`
    - `Product Manager`
    - `Project Manager`
    - `Quality Assurance Engineer`
    - `Researcher`
    - `Security Analyst`
    - `Security Professional`
    - `Scientist`
    - `Site Reliability Engineer`
    - `Software Engineer/Developer`
    - `Student`
    - `Systems Administrator/Engineer`
    - `Unemployed`
    - `Other`
1. `Organisation size` - ユーザーの組織内で何人が働いているか（2019 年 8 月に追加）。
    - `0-10 people`
    - `11-100 people`
    - `101-500 people`
    - `501-1000 people`
    - `1001-10,000 people`
    - `10,000+ people`
1. `Team size` - ユーザーのチーム内で何人が働いているか（2019 年 8 月に追加）。
    - `0 - it's just me!`
    - `1-5 people`
    - `6-10 people`
    - `11-20 people`
    - `21-30 people`
    - `30+ people`
1. `SaaS (GitLab.com) package`
    - `Free`
    - `Bronze`
    - `Premium (Previously Silver)`
    - `Ultimate (Previously Gold)`
    - `I don't know`
1. `Self managed package`
    - `Core`
    - `Starter`
    - `Premium`
    - `Ultimate`
    - `I don't know`

- このリストから何か欠けていますか？Caitlin に知らせれば追加してくれます！
- `Embedded Data Value` を使用するとき、Qualtrics は値を入力し始めると自動的にオートコンプリートしません。検索機能も不安定なことがあります。したがって、上記のように表示されている値を完全に入力してください。
- 埋め込みデータフィールドは以前は大文字小文字を区別していました。Qualtrics のユーザーの大多数では、埋め込みデータは大文字小文字を区別しなくなり、「test」と「Test」は同じフィールドとして扱われるようになりました。ただし、Qualtrics はベストプラクティスとして大文字小文字を一致させることを推奨しています。これは、この変更が行われていないアカウントの少数の部分があるためです。
- すべての埋め込みデータ値が GitLab の First Look 作成時点で作成されたわけではありません。したがって、すべてのユーザーに対して必ずしも完了した値を持っているわけではありません。また、ユーザーの値の一部は時間とともに変わる可能性があることに注意してください。例えば、ある人が転職することで、その人の職種、組織、チームサイズに影響する可能性があります。したがって、私たちが保有するユーザーに関する情報には食い違いがある場合があります。私たちは、GitLab First Look のメンバーに定期的にファイル上の情報をチェックし、必要に応じて更新するよう依頼することで、このリスクを軽減する予定です。

### サンプルサイズが期待よりも少ない場合の対処方法

**注意: これらの手順は UX Researcher と Research Coordinator にのみ適用されます。**

サンプル数が期待よりも少ない理由はいくつか考えられます。

1. GitLab First Look の連絡頻度が使い切られました。デフォルトでは、GitLab First Look のメンバーは週に 1 回または月に 4 回以上メールを受け取りません。この場合、アンケートの送信を遅らせるか（アンケートの送信を 1 日だけ遅らせるだけでよい場合もあります。確認のために UX Research Coordinator に連絡してください）、GitLab First Look パネル以外からユーザーを調達する必要があります。
1. サンプリング基準に一致する GitLab First Look メンバーが十分にいません。
1. サンプリング基準にエラーがあります。

- オプション 2 と 3 については、サンプルに移動して `List options` をクリックし、`Edit sample` を選択してサンプリング基準を変更します。

## アンケートを GitLab.com ユーザーに配布する

**注意: これらの手順は UX Researcher と Research Coordinator にのみ適用されます。**

特定の基準に基づいてユーザーの特定の集団をターゲットにしたい調査もあります（例えば、過去 30 日間に少なくとも 5 つのマージリクエストを作成したユーザー）。特定の基準に対するユーザー ID のリストを生成できる場合（通常は[データウェアハウス](/handbook/enterprise-data/platform/edw/)から）、そのリストを使用してそれらのユーザーの連絡先情報を Qualtrics にプッシュし、アンケートを配布できます。**これは GitLab.com のユーザーに限定され、Self-Managed ユーザーは含まれないことに注意してください。**

1. GitLab.com ユーザー ID のリストを生成し、Google Sheet の最初の列に配置します。最初の列の最初のエントリ（A1）は `id` でなければなりません。これは、これが使用したい ID のリストであることを確認するためです。**注意:** Google Sheet で指定した GitLab.com ユーザー ID は、埋め込みデータとして Qualtrics のメーリングリストに含まれます。これを使用して、得られた回答を元のユーザーリストに関連付けることができます。
1. 特定のシート（またはタブ）の名前は、Qualtrics のメーリングリストに付けたい名前にする必要があります。例: `05/20 - CI Pipeline Prototype Testing`。**この名前には次の文字を含めることはできません: `. < >`。これらを含めると Qualtrics への転送でエラーが発生します。**
1. スプレッドシート全体のファイル名は `qualtrics_mailing_list.` の後に、上記のステップで使用したワークシート／メーリングリストの名前を続けます。前の例を続けると、`qualtrics_mailing_list.05/20 - CI Pipeline Prototype Testing` となります。
1. すべての準備が整ったら、ファイルを `QualtricsRequest` Google Drive フォルダに移動します。
1. すべて正しく行われた場合、約 15 分以内に A1 の `id` エントリは `processing` に変わるはずです。これはデータパイプラインがリクエストを処理していることを意味します。
1. A1 に `processed` と表示されます。この時点でメーリングリストは Qualtrics にあるはずです。
1. どのファイルが完了したかを明確にし、また将来のプロセスをできるだけ迅速に実行し続けるために、ファイル名に `processed_` を追加します。
1. リストは *UX Research & Product* ディレクトリの共有リストとして表示されます。Qualtrics の *Contacts* セクションからリスト自体にアクセスするか、メール配布を送信するプロセスの一部としてリストを選択できます。
1. **重要:** オプトアウトしたユーザーをフィルタリングするために、作成したばかりのリストのサンプルを作成します。これを行うには、Qualtrics で新しいリストに移動し、右上の `List Options` ドロップダウンをクリックし、`Create sample from list` を選択し、サンプルに名前を付け、`Add sampling criteria` をクリックし、ドロップダウンから `Opt-out status` を選択し、`Is opted-in` が選択されていることを確認します。これにより、メール通信からオプトアウトしたユーザーには連絡されません。そこから `Create` を選択すると、Qualtrics は GitLab からのメールにオプトインしたユーザーのサンプルを作成します。作成されたサンプルはメール配布に使用されるものになります。

![Qualtrics でサンプルを作成するプロセス](/images/product/ux/ux-research/surveys/qualtrics/Create_a_sample.png)

上記のすべてのステップを正しく実行した後、Qualtrics Request ドライブに追加してから 20 分以内にスプレッドシートが処理されない場合、Qualtrics データパイプラインが壊れている可能性があります。これを修正するには、[GitLab Data Team プロジェクト](https://gitlab.com/gitlab-data/analytics/-/issues)で DE Triage テンプレートを使用して Issue を開きます。チームが以前に開いた[Issue の例](https://gitlab.com/gitlab-data/analytics/-/issues/11443#note_817069161)を参照してください。

### アンケート回答率を高めるためのヒント

1. アンケートの質問数を最小限に抑え（[Hubspot](https://blog.hubspot.com/service/ideal-survey-length)は 10 問以下を推奨）、質問タイプを基本的なものに保ちます（複数の自由回答質問やマトリックススタイルの質問を避けてください）。
1. メールでアンケートの目的と完了にかかる時間を回答者に伝えます。
1. メールに招待的な件名を使用して、潜在的な回答者に開封してもらいます（`We would love to hear from you`、`How did we do?`、`Take a quick 5 minute survey` など）。
1. メールの件名に特定の書式設定（すべて大文字）、文字（感嘆符）、または単語（last chance）を含めるのを避け、メールがスパムフォルダに入らないようにします。
1. アンケートの送信先と調査を実施している人をパーソナライズするために、できるだけ実名を使用します。
1. 回答者が混乱したり、入力をやめたいと思ったりするポイントを見つけるために、事前にアンケートをパイロットテストします。
1. 回答者が理解できない可能性のある会社固有の専門用語を取り除きます。
1. 正当であることを示すために、メールやアンケートに会社のロゴをブランド化します。
1. 回答者がアンケートに匿名で記入できるようにし、アンケートの回答が匿名になることを伝えます。
1. 可能な限り、何らかの形のインセンティブ（例: ギフトカードや会社のグッズ）を提供します。
1. アンケートの最初の質問をメール本文に埋め込むか、`Start Survey` ボタンを含めて、参加方法を明確にします。
1. 複数の配布方法を使用してアンケートを送信します（例: メール、ソーシャルメディア、会社のウェブサイト、ブログ）。可能な限り、各配布方法に関連する完了率を追跡し、どの方法が成功したか、または失敗したかを理解できるようにします。
1. 可能な限り、モバイルデバイス向けにメールを最適化します。
1. データがどのように安全に保管されるかをできるだけ早く回答者に保証します（例: データは GitLab 内部で使用され、調査レポートには顧客名や連絡先情報は含まれません）。
1. 中小企業や企業の顧客に送信されるアンケートについては、回答率を高めるために、早朝の勤務時間（午前 10 時～午後 12 時）または午後遅く（午後 3 時～午後 6 時）にアンケートを配布するようにしてください。
1. アンケートは平日（月曜日～金曜日）のみ送信してください。アンケートは通常、月曜日に最高の回答率が得られます。

## トラッキングリンクを作成する方法

複数の方法を使用してアンケートを宣伝し、どの方法が最も効果的かを追跡することができます（例: GitLab ソーシャル、UX チームソーシャル、ブログ投稿、または gitlab.com 内のバナー）。[クエリ文字列を使用する](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/passing-information-through-query-strings/)ことでこれを行えます。

## ディレクトリから連絡先を削除する方法

UX Research Coordinator は時々、すべてのリストから連絡先を削除するリクエストを受け取ります。各リストは独立しているため、1 つのリストから連絡先を削除しても、その連絡先がサブスクライブしている他のリストから自動的に削除されるわけではないことに注意することが重要です。

UX Research Coordinator、または Qualtrics Brand Administrator アクセス権を持つ他のチームメンバーは、将来のメール受信を防ぐためにグローバルレベルで連絡先を削除する必要があります。

ディレクトリから連絡先を削除するには:

1. Qualtrics アカウントにログインします。
1. 右上の Contacts タブをクリックします。
1. Directory Contacts をクリックします。
1. 削除したい連絡先を検索します。
1. 連絡先を選択します。
1. 連絡先を選択するとページの右側にオプションが表示されます。
1. レンチアイコンをクリックします。
1. Delete Contact を選択します。
