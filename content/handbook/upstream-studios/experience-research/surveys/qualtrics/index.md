---
title: "Qualtrics のヒントとコツ"
description: "GitLab で Qualtrics を使用してアンケートを実施する方法"
upstream_path: /handbook/upstream-studios/experience-research/surveys/qualtrics/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T08:16:44+09:00"
translator: codex
stale: false
---

## アンケートの作成

1. `Blank survey project` を選択します。
1. プロジェクトに名前を付けます。
1. アンケート質問を入力します。画面の右側には、次の項目があります。
    - [質問の種類](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/question-types-overview/)と書式設定（回答の選択肢数、配置など）。
    - [検証](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/validation/)（回答者に質問への回答を強制する、またはページを離れる前に質問への回答を検討するよう求める）。
    - アクション（[改ページ](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/add-page-break/)、[スキップロジック](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/skip-logic/)、[表示ロジック](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/display-logic/)など）。
1. アンケートの `Look & Feel` を更新します。
    - ガイダンスについては、[Look & Feel の設定](#styling-look--feel-settings)を参照してください。
1. 必要に応じて[Survey Options](https://www.qualtrics.com/support/survey-platform/survey-module/survey-options/survey-options-overview/)を調整します。
1. [Tools](https://www.qualtrics.com/support/survey-platform/survey-module/survey-tools/survey-tools-overview/)メニューには、次のような便利な機能が多数あります。
    - `Collaborate` - アンケートを別の Qualtrics ユーザーと共有して、一緒に編集したり、結果を分析したりできます。
    - `Spell check` - 米国英語のみをサポートしています。
    - `Generate test responses` - 実際の参加者にアンケートを送信する前に、アンケートのデータセットとレポートがどのように見えるかを確認するための自動ダミー回答を生成します。
    - `Check survey accessibility` - スクリーンリーダーを使用する回答者にとってアンケートがアクセシブルかどうかを確認し、アクセシビリティを改善するための提案を受け取ります。
    - `Analyze Survey` - アンケートに対する[ExpertReview の](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/quality-iq-functionality/)提案を開きます。
    - `Import/export survey` - QSF、TXT、または DOC ファイルへのインポートまたはエクスポートです。
1. アンケートの作成が完了したら、`Preview` して、すべてが期待どおりに機能することを確認します。
1. アンケートを開始する準備ができたら、`Publish` をクリックします。

## スタイル設定（Look & Feel の設定）

アンケートには次の設定を適用してください。

1. テーマ: Blank
1. レイアウト: Modern
1. 一般
    - 進捗バー: テキストなし
    - 進捗バーの位置: 上部
1. スタイル
    - プライマリカラー: #554488
    - セカンダリカラー: #554488
    - フォント: Arial
    - 前景のコントラスト: 中
    - 質問の間隔: コンパクト
    - 質問テキスト: 14px 太字
    - 回答テキスト: 14px
1. モーション
    - ページ遷移: なし
    - 追加のチェックボックス: オフ
1. ロゴ
    - GitLab First Look Logo（Qualtrics 内の UX Research & Product グラフィックライブラリに保存されています）
    - スタイル: バナー
    - 配置: 左
    - 最大高さ: 70px
    - モバイルスケーリング: 66%
1. 背景
    - 背景タイプ: 色
    - 背景色: #ffffff
    - 前景のコントラスト: 中
    - 質問コンテナ: オフ

## ソーシャルメディアからのスパム回答の回避

ソーシャルメディアでアンケートを配布することは、オーディエンスを迅速に拡大し、リサーチの時間とコストを削減する優れた方法です。ただし、**ソーシャルメディアで共有したアンケートは、短時間に何十件、何百件もの回答を送信するボットや偽の参加者の標的になることがよくあります**。これは[データの完全性に影響します](https://europepmc.org/article/MED/25846043)。**これは特に報酬付きのアンケートに影響します。**

一部のボットは他よりも高度です。たとえば、基本的なボットはアンケートを「高速で」通過したり、自由記述の質問に論理性のない回答を提供したりします。一方、より高度なボットは、意図的にアンケートの完了に時間をかけたり、アンケート自体の言葉を使用して自由記述の質問に論理的な回答を作成したりすることもあります。

*これらの回答の大半*を防止または除外するためにできる[複数の方法](/handbook/upstream-studios/experience-research/surveys/how-to-identify-low-quality-data-when-designing-and-reviewing-your-survey/)があります。「これらの回答の大半」と言うのは、アンケートのスパムを真に回避する唯一の方法は、ソーシャルメディアで共有せず、[1 回しか使用できない個別リンクを含むメールのアンケート招待を送信する](https://www.qualtrics.com/support/survey-platform/distributions-module/email-distribution/emails-overview/#UnderstandingTheIndividualLink)ことだからです。そのためには、[Marketo または Data Warehouse](/handbook/upstream-studios/research-operations/recruitment-methods)などのリソースを活用して、登録済みの GitLab ユーザーの対象セットに連絡します。

### アンケートを共有する前にスパム回答を防止する

アンケートを共有する前に、ボットや偽の参加者を防ぐため、次のアプローチを使用してください。Qualtrics の[captcha 質問](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/captcha-verification/)と[不正検出機能](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/)は役立ちますが、より高度なボットを防ぐには不十分であることに注意してください。

- アンケートの最初に[captcha 質問](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/captcha-verification/)を追加します。
- すべての[不正検出機能](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/)を有効にします。Prevent multiple submissions、Bot detection、Security scan monitor、RelevantID です。
- 人間からは隠され、ボットからは「見える」質問である「ハニーポット」質問を追加します。一部のボットはこの質問に回答するため、ボットをスクリーニングで除外する、またはその回答を除外できます。
   1. アンケート内のどこかに、**任意**の単一選択質問（チェックボックス）を追加します。人間には隠すため、質問と場所は重要ではありません。例: 「あなたは人間ですか？」`[ ] はい`。
   1. 既存の `Qualtrics.SurveyEngine.addOnload` 関数を置き換えて、その質問に[次の JavaScript を追加します](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/)。

      ```js
      Qualtrics.SurveyEngine.addOnload(function()
      {
          jQuery("#"+this.questionId).hide();
      });
      ```

   1. アンケートをプレビューして、ページの読み込み時に質問が非表示になることを確認します。
- 回答者の注意力とロジックを確認する、**必須**の選択質問を追加します。たとえば、選ぶべき回答を直接示す、または今年が何年かを尋ねます。
- 複数選択の質問に非論理的な選択肢を追加します。たとえば、「コードレビューには次のどのツールを使用しますか？」という質問に、`[ ] Tanuki Code` のような非論理的な選択肢を追加します。
- アンケート内の 2 つの別の箇所で、同じ**必須**の質問をします。人が簡単に答えられる単純な複数選択の質問を使用してください。たとえば、役職やチームサイズです。
- 上記の 3 種類の質問すべてについて、回答に基づいて回答者をスクリーニングで除外する場合は、[Screening Out Respondents in the Survey Flow](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#ScreeningOutRespondentsInTheSurveyFlow)セクションの**Branching Respondents Out of the Survey**セクションを参照してください。そのセクションで説明されているアンケートフローのロジックを追加した後、後で分析するためにそれらの[回答をフラグ付けする](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#FlaggingScreenedOutResponses)か、[直ちに破棄する](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/advanced-elements/screen-out-management/#DiscardingScreenedOutResponses)かを決められます。

さらに、アンケートが複数のソーシャルメディアチャネルで共有される場合は、[クエリ文字列を通じて情報を渡す](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/passing-information-through-query-strings/#PassingInformationIntoASurvey)ことで、参加者がどのソースからアンケートにアクセスしているかを追跡できます。これは、あるソースのスパムが他より多いように見える場合に回答を除外する助けになります。

### アンケートを閉じた後にスパム回答を除外する

アンケートを閉じた後は、防止策によってスパム回答がどの程度緩和されたか、またどの回答をまだ除外する必要があるかを確認する時です。[Response Quality](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/)機能は、[多数の基準](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/response-quality/)に基づいて、回答を自動的にフラグ付けします。

- [Response Quality](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/#ViewingResponseQuality)レポートを確認し、[回答を除外します](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/response-quality-functionality/#FilteringResponsesbyIssue)。
- 該当する場合は、自由記述の質問に対する非論理的な回答を確認します。
- アンケートを完了するのが早すぎる回答者を確認します。Response Quality 機能は[「高速回答」の回答にフラグを付ける](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/response-quality/#Speeders)ことを試みますが、少なくとも 100 件の回答があるアンケートでのみ機能します。
- 該当する場合は、重複するメールアドレスを確認します。アンケートのスパムに頻繁に使用される `@aol.com`、`@yahoo.com`、`@hotmail.com` のメールアドレスにも注意してください。

### 埋め込みデータ

**注: これらの手順は UX Researchers と Research Coordinators にのみ適用されます。**

ユーザーが GitLab First Look にサインアップすると、次の埋め込みデータを自動的に収集します。

1. `GitLab user` - その人が GitLab ユーザーかどうか。
    - `Yes` - その人は GitLab ユーザーです。
    - `No` - その人は GitLab ユーザーではありません。
1. `Job title` - その人の役職。
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
1. `Organisation size` - ユーザーの組織で働く人は何人ですか？（2019 年 8 月に追加）
    - `0-10 people`
    - `11-100 people`
    - `101-500 people`
    - `501-1000 people`
    - `1001-10,000 people`
    - `10,000+ people`
1. `Team size` - ユーザーのチームで働く人は何人ですか？（2019 年 8 月に追加）
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

- このリストにないものはありますか？Caitlin に知らせれば、追加してくれます。
- `Embedded Data Value` を使用する際、Qualtrics は入力を開始しても値を自動補完しません。検索機能も不安定な場合があります。そのため、上記に表示されているとおりに値を完全に入力してください。
- 埋め込みデータフィールドは以前は大文字と小文字を区別していました。Qualtrics のユーザーの大半では、埋め込みデータで大文字と小文字を区別しなくなっており、「test」と「Test」は同じフィールドとして扱われます。ただし、この変更が行われていないアカウントも一部あるため、Qualtrics はベストプラクティスとして大文字と小文字を一致させるよう引き続き助言しています。
- すべての Embedded Data Value が GitLab First Look の作成時点で作成されたわけではありません。そのため、すべてのユーザーについて完全な値があるとは限りません。ユーザーの値の一部は時間とともに変わる可能性があることにも注意してください。たとえば、誰かが転職すると、役職、組織、チームサイズに影響する場合があります。そのため、保持しているユーザー情報には不一致がある可能性があります。このリスクを減らすため、GitLab First Look のメンバーに対し、登録されている情報を確認し、必要に応じて更新するよう定期的に依頼する予定です。

### サンプルサイズが予想より少ない場合の対応

**注: これらの手順は UX Researchers と Research Coordinators にのみ適用されます。**

サンプル数が予想より少ない理由はいくつか考えられます。

1. GitLab First Look の連絡頻度を使い切っています。デフォルトでは、GitLab First Look のメンバーにメールが届くのは 1 週間に 1 回、または 1 か月に 4 回までです。この場合は、アンケートの送信を遅らせる（1 日だけ遅らせればよい可能性があります。確認については UX Research Coordinator に連絡してください）か、GitLab First Look パネルの外部からユーザーを探す必要があります。
1. サンプリング基準に一致する GitLab First Look メンバーが十分にいません。
1. サンプリング基準にエラーがあります。

- 選択肢 2 と 3 については、サンプルに移動して `List options` をクリックし、`Edit sample` を選択してサンプリング基準を変更します。

## GitLab.com ユーザーへのアンケート配布

**注: これらの手順は UX Researchers と Research Coordinators にのみ適用されます。**

一定の基準に基づいて、特定のユーザー集団を対象にしたい調査があります（たとえば、過去 30 日間に少なくとも 5 件のマージリクエストを作成したユーザー）。所定の基準のユーザー ID リストを生成できる場合（通常は[データウェアハウス](/handbook/enterprise-data/platform/edw/)から）、そのリストを使用してユーザーの連絡先情報を Qualtrics にプッシュし、アンケートを配布できます。**これは GitLab.com のユーザーに限定され、Self-Managed ユーザーは含まれないことに注意してください。**

1. GitLab.com のユーザー ID リストを生成し、Google Sheet の最初の列に入れます。最初の列の最初のエントリ（A1）は `id` とします。これは、使用する ID のリストであることを確認するためです。**注:** Google Sheet で指定した GitLab.com ユーザー ID は、埋め込みデータとして Qualtrics のメーリングリストに含まれます。これを使用して、取得した回答を元のユーザーリストに関連付けられます。
1. 特定のシート（またはタブ）の名前は、Qualtrics メーリングリストに付けたい名前にします。たとえば、`05/20 - CI Pipeline Prototype Testing` です。**この名前には次の文字を含めることはできません: `. < >`。含めると Qualtrics への転送でエラーが発生します。**
1. スプレッドシート全体のファイル名は、`qualtrics_mailing_list.` の後に、上記の手順で使用したワークシートまたはメーリングリストの名前を続けたものにします。前の例を使うと、`qualtrics_mailing_list.05/20 - CI Pipeline Prototype Testing` です。
1. すべての準備ができたら、ファイルを `QualtricsRequest` Google Drive フォルダーに移動します。
1. すべてが正しく行われた場合、約 15 分以内に A1 の `id` エントリが `processing` に変わります。これは、データパイプラインがリクエストを処理していることを意味します。
1. A1 に `processed` と表示されます。この時点で、メーリングリストは Qualtrics にあるはずです。
1. どのファイルが完了したかを明確にし、将来もプロセスを可能な限り迅速に実行し続けるため、ファイル名に `processed_` を追加します。
1. このリストは、*UX Research & Product* ディレクトリの共有リストとして表示されます。リスト自体には Qualtrics の *Contacts* セクションからアクセスするか、メール配信を送信するプロセスの一部としてリストを選択できます。
1. **重要:** オプトアウトしたユーザーを除外するため、作成したばかりのリストのサンプルを作成します。これを行うには、Qualtrics の新しいリストに移動し、右上隅の `List Options` ドロップダウンをクリックし、`Create sample from list` を選択してサンプルに名前を付け、`Add sampling criteria` をクリックし、ドロップダウンから `Opt-out status` を選び、`Is opted-in` が選択されていることを確認します。これにより、メールコミュニケーションをオプトアウトしたユーザーに連絡しないことが確保されます。続いて `Create` を選択すると、Qualtrics は GitLab からのメールをオプトインしたユーザーのサンプルを作成します。作成されたサンプルが、メール配信に使用するものになります。

![Qualtrics でサンプルを作成するプロセス](/images/product/ux/ux-research/surveys/qualtrics/Create_a_sample.png)

上記の手順をすべて正しく実施しても、スプレッドシートを Qualtrics Request ドライブに追加してから 20 分以内に処理されない場合、Qualtrics Data Pipeline が壊れている可能性があります。これを修正するには、[GitLab Data Team プロジェクト](https://gitlab.com/gitlab-data/analytics/-/issues)で DE Triage テンプレートを使用して Issue を開いてください。チームが開いた[以前の Issue](https://gitlab.com/gitlab-data/analytics/-/issues/11443#note_817069161)の例を次に示します。

### アンケート回答率を高めるヒント

1. アンケートの質問数を最小限に抑え（[Hubspot](https://blog.hubspot.com/service/ideal-survey-length)は 10 問以下を推奨しています）、質問の種類を基本的なものにします（複数の自由記述質問やマトリクス形式の質問は避けます）。
1. アンケートの目的と、完了までにかかる時間をメールで回答者に伝えます。
1. 送信候補者にメールを開いてもらうため、招待する件名を使用します（`We would love to hear from you`、`How did we do?`、`Take a quick 5 minute survey`）。
1. メールがスパムフォルダーに入らないよう、メールの件名に特定の書式（すべて大文字）、文字（感嘆符）、単語（last chance）を含めないようにします。
1. アンケートの送信先とリサーチの実施者をパーソナライズするため、可能な限り実名を使用します。
1. 回答者が混乱する、または記入をやめたくなる箇所を見つけるため、事前にアンケートをパイロットテストします。
1. 回答者に理解されない可能性がある、会社固有の専門用語を取り除きます。
1. アンケートが正当なものであることを示すため、メールおよび／またはアンケートに会社のロゴを付けます。
1. 回答者が匿名でアンケートに記入できるようにし、アンケート回答が匿名であることを伝えます。
1. 可能な限り、何らかのインセンティブ（例: ギフトカードまたは会社のノベルティ）を提供します。
1. メール本文にアンケートの最初の質問を埋め込む、または `Start Survey` ボタンを含めて、参加方法を明確にします。
1. 複数の配布方法を使用してアンケートを送信します（例: メール、ソーシャルメディア、会社の Web サイト、ブログ）。可能な限り、各配布方法に関連する完了率を追跡して、どの方法が成功または不成功だったかを理解します。
1. 可能な限り、メールをモバイルデバイス向けに最適化します。
1. 回答者のデータがどのように安全に保たれるかを、できるだけ早い段階で保証します（例: データは GitLab 内部で使用され、リサーチレポートに顧客名および／または連絡先情報は含まれません）。
1. 中小企業またはエンタープライズの顧客に送るアンケートでは、回答率を高めるため、早朝（午前 10 時〜午後 12 時）または午後遅く（午後 3 時〜午後 6 時）の勤務時間に配信するようにします。
1. アンケートは平日（月曜日〜金曜日）にのみ送信すべきです。アンケートは通常、月曜日に最も良い回答率を得ます。

## トラッキングリンクの作成方法

複数の方法でアンケートを宣伝し、どの方法が最も優れた成果を上げるかを追跡したい場合があります（例: GitLab のソーシャル、UX チームのソーシャル、ブログ投稿、gitlab.com 内のバナー）。これは、[クエリ文字列を使用する](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/passing-information-through-query-strings/)ことで行えます。

## ディレクトリから連絡先を削除する方法

UX Research Coordinators は、すべてのリストから連絡先を削除するリクエストを受けることがあります。各リストは独立しているため、あるリストから連絡先を削除しても、連絡先が登録している可能性がある他のリストから自動的に削除されるわけではないことに注意してください。

UX Research Coordinators または Qualtrics Brand Administrator アクセス権を持つ他のチームメンバーは、今後のメールを受信しないよう、グローバルレベルで連絡先を削除する必要があります。

ディレクトリから連絡先を削除するには、次の手順を実行します。

1. Qualtrics アカウントにログインします。
1. 右上の Contacts タブをクリックします。
1. Directory Contacts をクリックします。
1. 削除する連絡先を検索します。
1. 連絡先を選択します。
1. 連絡先を選択すると、ページ右側にオプションが表示されます。
1. レンチのアイコンをクリックします。
1. Delete Contact を選択します。
