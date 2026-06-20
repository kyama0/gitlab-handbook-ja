---
title: "AI 領域での UX 調査の実施"
description: "調査ガイドラインを含む、人工知能（AI）領域での UX 調査の実施方法。"
upstream_path: /handbook/product/ux/experience-research/research-in-the-ai-space/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
translated_at: "2026-06-20T13:13:04Z"
translator: claude
stale: false
lastmod: 2026-06-16T09:26:31-04:00
---

より多くのチームが人工知能（AI）領域内でイノベーションを起こすために迅速なプロトタイピング活動に参加するにつれて、立ち止まって自分自身に問いかけることは自然なことです: *これは何の問題を解決することを目指しているのか？*

エキサイティングなブレイクスルー技術が製品イノベーションにつながることは一般的です。ただし、これは、チームがユーザーの問題を探している技術的なソリューションを提示することにつながる可能性があります（その逆ではなく）。

イノベーションしながら、ユーザーのニーズ（および満たされていないニーズ）を念頭に置くようにする必要があります。これを行わないと、特定されたユーザーの問題に対処しないかもしれない強力な AI ソリューションを構築することになるリスクがあります。

このページでは、AI ソリューションの設計と開発を通じてユーザーの視点を含めることで、**AI 領域での UX 調査を実施する**方法をガイドします。

**UX 調査作業で AI を使用する方法**については、[AI usage](/handbook/upstream-studios/how-we-work/ai-usage/)を参照してください。

## UX Researcher サポート

**自分のステージに割り当てられた UX Researcher がいる場合:** UX 調査サポートが必要な場合は、[調査優先順位付けプロセス](/handbook/product/ux/experience-research/research-prioritization/)に従って、[割り当てられたステージ UX Researcher](/handbook/product/ux/experience-research/how-uxr-team-operates/#how-team-members-are-assigned)と連絡を取ります。AI 固有の調査トピックは、ステージ内ですでに特定された他の調査プロジェクトと優先順位付けされます。

**自分のステージに割り当てられた UX Researcher が**いない場合: 割り当てられた UX Researcher がいないステージグループで働いている人のために、Nick Hertz がそれらの調査リクエストを管理しています。[調査優先順位付けプロセス](/handbook/product/ux/experience-research/research-prioritization/)は引き続き適用され、調査 Issue を開いた後、この [AI 調査固有の優先度計算機](https://docs.google.com/spreadsheets/d/16iLvrY-saOJsSxFkjVYEu_Db_02caTsQLqzZ59SwFgs/edit#gid=1093756030)にトピックを追加できます。

## ガイドライン

### ガイドライン 1: ユーザーニーズの特定と理解から始める {#guideline-1-start-by-identifying-and-understanding-user-needs}

AI ソリューション自体は、それらが解決することを意図しているユーザーの問題を明らかにしません。ユーザーのニーズを特定し理解する（そして AI ソリューションが実際のユーザーの問題に対処しているかを判断する）ために、取ることのできる異なるアプローチがあります:

![ユーザーニーズを特定し理解するためのアプローチの概要](/images/product/ux/ux-research/research-in-the-ai-space/overview-of-approaches.png)

**既存の調査をレビューする**

- すでにどんな調査知識が存在するか理解します。Dovetail と [UX Research Drive](https://drive.google.com/drive/u/0/folders/0AH_zdtW5aioNUk9PVA) は良い出発点であり、割り当てられたステージ研究者に尋ねることも有用です。GitLab の外で存在する調査をレビューすることも価値があります。
- **レビューの結果、ユーザーのニーズに関して中程度または低レベルの確信**が得られる場合、次のオプションは追加データの収集に役立ちます。

**ユースケース定義（中レベルの確信に対する推奨オプション）**

- 既存の調査とドメインの専門知識を使用して、AI ソリューションで対処されると信じているユーザーの問題に関する仮定を策定します。私たちが [Jobs to be Done](/handbook/product/ux/jobs-to-be-done/) (JTBD) を書く方法と整合させて、次の形式で問題ステートメントをフレーズします:
  - 「[人が何かを達成したい状況にある場合]、私は[人が達成したい何か]したい。」
  - 例: *トリアージローテーション中で、ビジネス上の重大なリスクを優先順位付けしているとき、私は資産で検出された最新のリスクをレビューしたい。*
- 次に、定量的な[オンラインアンケート](/handbook/product/ux/experience-research/surveys/)を通じて問題ステートメントを検証し、次のことを理解します:
  - ユーザーがこの問題に遭遇する頻度
  - 問題に対処することの重要性
- アンケートに含めることができる他のパラメータがあります、例えば:
  - ユーザーが現在問題をどのように解決しているか
  - 今日この問題を解決することの難しさ
- 質問例については、この[テンプレート](https://docs.google.com/document/d/1-81BH7JPj_SU5L1YvfX2HpYuIdKnUuTpRHuRlKb5w3M/copy)を参照してください。例の調査がもうすぐ来ます。

**拡張ソリューション検証**

- ユーザーがプロトタイプや機能と関わる*前*に、ユーザーのニーズについてより多くを学ぶために[ソリューション検証タイプの調査](/handbook/product/ux/experience-research/solution-validation-and-methods/)を使用します。これを行うには、参加者がプロトタイプでタスクを開始する前に、彼らの仕事のタスク、ワークフロー、ツール、期待、痛みのポイントなどについていくつかの質問を追加します（この[例](https://docs.google.com/document/d/1FXvp1690AGCxJTUeuewit3e8JDljP4sLCf9R7K3wYtk/edit#heading=h.f246e42afjt9)を参照）。[モデレートセッション](/handbook/product/ux/experience-research/usability-testing/#different-types-of-usability-testing)は[非モデレートセッション](/handbook/product/ux/experience-research/unmoderated-testing/#pros-and-cons)よりも適しており、推奨されます。

**生成的調査（低確信に対する推奨オプション）**

- 問題ステートメントやユーザーニーズに対して高レベルの確信や理解がない場合、ユーザーグループとそのニーズについてもっと学ぶために生成的調査を実施する時間を取りたいと思うでしょう。このアプローチには時間がかかりますが、新しいソリューションのアイデアを得るために使用できるユーザーのニーズ、目標、痛みのポイントに対する深いインサイトを提供します。
- 時間があれば、これを行うことをお勧めします。出力は、AI 機能がユーザーにとってなぜ重要かについてのしっかりした正当化を提供します。

### ガイドライン 2: 何かを構築する前にアイデアに関するユーザーフィードバックを収集する {#guideline-2-collect-user-feedback-on-your-idea-before-building-anything}

エンジニアリングチームが構築している間に、[Wizard of Oz プロトタイピング](https://medium.com/@lizschemanski/wizard-of-oz-experiments-eed2c0a12081)を使用することで、将来の AI 搭載機能を並行して検証できることをご存知ですか？AI ソリューションが利用可能になる前に検証することは、ユーザーの期待と要件を早期に捉える素晴らしい方法です。それらは、AI のトレーニングにおけるエンジニアリングの取り組みに情報を提供できます。

プロトタイプを準備する際に念頭に置くべきいくつかのこと:

- ソリューションにパーソナライゼーションが含まれる場合、セッションが行われる前に、プロトタイプでより現実的な体験のために関連するユーザーデータを収集する必要があります。ユーザーが自分のデータがどのように使用されているかについて情報を得ていることを確認してください。
- 「間違った」推奨事項も含めてください。AI 技術は確率的であり、常に正確であるとは限らないからです（[ガイドライン 4](#guideline-4-learn-about-the-cost-of-errors-that-ai-will-make)を参照）。例えば、チャットボットを評価していて、参加者が UX 調査手法について質問したいとしましょう。そのトピックへの関連する応答に加えて、UX 調査に接続されていないいくつかも含めます。「間違った」応答が与えられる数を変えて、まだ受け入れ可能なものと、ユーザーがフラストレーションを感じて使用をやめるところを理解できるようにします。

魅力的かもしれませんが、ユーザーにこの AI 機能を使用するかどうか尋ねないでください。人々は将来の行動の悪い予測者なので、彼らの答えはあなたにとって正確でも有用でもないでしょう。人々がソリューションを使用するかどうかを理解するのに近づくためには、次のことを理解するのが最善です:

1. 彼らの問題やニーズ、そして
1. ソリューションがそれらに対処するのにどれくらい役立つか。言い換えれば、価値を提供するか？

### ガイドライン 3: AI プロトタイプ検証中にユーザビリティフィードバック以上のものを収集する {#guideline-3-collect-more-than-just-usability-feedback-during-ai-prototype-validation}

AI 搭載ソリューションが検証可能になったら、そのユーザビリティに関するフィードバックだけでなく、次の点も必ず収集してください:

- **ベースラインデータ** - ユーザーが現在この問題をどのように解決しているか。これにより、AI ソリューションが持つかもしれない影響と、それがどれくらい役立つかを評価できます。
- **信頼について** - 人々が AI が提供する情報を信頼するかどうか。彼らが信頼しないなら、使用しません。検討するためのいくつかの例の質問:
  - *[機能名、例: コード提案] が提供するものをどれくらい信頼しますか？*
  - *[機能名、例: コード提案] を[タスク、例: 正しいコードの提供] に信頼しますか？なぜ／なぜそうでないですか？*
- **フィードバックの提供について** - 例えば、コード提案が役立たない場合、システムフィードバックを提供することに快適に感じるかどうか。AI はユーザーフィードバックに基づいて改善されるので、それができることが重要です。「間違った」推奨事項に関するフィードバックを提供することに焦点を当てたタスクを含め、それを行うことに成功したかどうか、およびそれについてどう感じたかを測定することで、これを行うことができます。
- **サードパーティ AI サービスに対する態度について** - AI ソリューションがサードパーティ（例: OpenAI）によって動作している場合、ユーザーがサードパーティの使用を認識しているか、それに対する彼らの態度を理解することが重要です。これは、ユーザーのメンタルモデル（[ガイドライン 5](#guideline-5-plan-ahead-for-longitudinal-research)を参照）とブランドとしての GitLab への影響に対するインサイトを提供します。

私たちは[一連の AI メトリクス](#ai-user-experience-survey-pilot)をパイロットしており、ソリューション検証にそれらを含めることをお勧めします。

ソリューション検証中に堅牢なフィードバックを得るには、少なくとも 3 つのデータポイントを収集することをお勧めします。AI の出力はさまざまなので、最初の出力だけに頼ることは十分ではありません。3 つの類似したタスクを用意して、参加者がこれら 3 つの異なるシナリオで AI の応答にどう反応するかを確認することでこれを行うことができます。

**ヒント:** 魅力的な「これを使用しますか？」という質問を避けてください。

AI 機能を [Generally Available](https://docs.gitlab.com/policy/development_stages_support/#generally-available-ga) に向けて成熟させている場合、メトリクスと成功基準に関する追加のガイダンスについては、[UX 成熟度要件](/handbook/product/ai/ux-maturity/)を参照してください。

### ガイドライン 4: AI が犯すエラーのコストについて学ぶ {#guideline-4-learn-about-the-cost-of-errors-that-ai-will-make}

AI はその確率的な性質のために間違いを犯します。AI の間違いがユーザーにどのように影響するかを理解することが重要です。特定の間違いはユーザーをそれを使用することから遠ざけるでしょうか？または GitLab を使用することから？以下はできることです:

- どの間違いが行ってもよいか、どの間違いが害を引き起こし絶対に避ける必要があるかを評価する調査活動を計画します。
- ソリューション検証を実施する際に、AI の間違いに関連する質問を含める機会もあるかもしれません。例えば、初期のプロトタイプを評価するとき（[ガイドライン 2](#guideline-2-collect-user-feedback-on-your-idea-before-building-anything) および[3](#guideline-3-collect-more-than-just-usability-feedback-during-ai-prototype-validation)を参照）。
- 人々が AI の間違いにどう反応するかを捉えるために、プロトタイプを「間違った」推奨事項を含むように設定します。

### ガイドライン 5: 縦断的調査のために事前に計画する {#guideline-5-plan-ahead-for-longitudinal-research}

AI は、ユーザーが時間とともにそれと関わるにつれて進化します。その結果、ユーザーがそれと関わるにつれて、それがどのように機能するかについてのユーザーのメンタルモデルが時間とともに変化する可能性があります（これは継続的なループです）。価値のある AI ソリューションを提供し続けるためには、メンタルモデルが時間とともにどのように変化するかを理解し、ユースケースとユーザーが増加するにつれて AI ソリューションのパフォーマンスを評価することが重要です。

私たちは、時間の経過とともに AI 搭載機能に対するユーザーの体験を評価および追跡できる[一連の AI メトリクス](#ai-user-experience-survey-pilot)をパイロットしています。

## AI User Experience Survey（パイロット） {#ai-user-experience-survey-pilot}

私たちは、AI 搭載機能をユーザーニーズの満たし方（ユーザビリティではなく）の観点から評価するための一連の質問を含むアンケートを開発し、現在パイロットしています。このアンケートは、時間の経過とともに AI 搭載機能に対するユーザーの体験を追跡するために使用できます。

このアンケートは、文献レビューで観察し、[11 のアンケート質問](https://gitlab.fra1.qualtrics.com/jfe/form/SV_e3yxudPETRbZzfM)に捉えた次の 8 つの構成要素に焦点を当てています。

- **正確性:** ユーザーは私たちの AI をどれくらい正確と感じるか？意味のある応答を得るためにどれくらいの努力が必要か？
- **信頼性／誤りやすさ:** ユーザーは GitLab の AI を信頼するか？
- **価値:** 私たちはユーザーがより速く、より生産的になるのを助けているか？私たちはユーザーが新しいことを学ぶのを助けているか？ユーザーは AI 搭載機能を使用することから利益を認識するか？
- **コントロール:** ユーザーは AI の推奨事項やアクションがどのように採用されるかについてコントロールを持っていると感じるか？
- **エラー処理:** 私たちはユーザーが AI が生み出すエラーに対処できるようにしているか？
- **ガードレール:** AI が彼らのために何をしているかについて批判的に考えることができるように、AI とのユーザーインタラクションに十分な注意深い摩擦を組み込んだか？
- **学習容易性:** ユーザーは AI 搭載機能をすばやく理解できるか？
- **AI の限界:** ユーザーは AI 搭載機能ができることとできないことを理解していると感じるか？

このアンケートは、AI 機能に関わっている参加者に送信するために利用可能です。このアンケートを使用したい場合は、Anne Lasch または Erika Feldman に Qualtrics プロジェクトへのアクセスを依頼してください。

## AI ユーザビリティメトリック

AI 機能のユーザビリティを効果的に評価し、時間とともに進捗を追跡するために、以下の指示に従ってください:

### 何を測定するか

私たちは AI 機能のために測定される 3 つのデータに焦点を当てました:

- [効果](/handbook/product/ux/experience-research/usability-testing/#effectiveness)（合格／不合格）
- [効率](/handbook/product/ux/experience-research/usability-testing/#efficiency)（Single Ease Question）
- 体験の[満足度](/handbook/product/ux/experience-research/usability-testing/#satisfaction)

これらの尺度は軽量で、体験のメカニクスとユーザビリティの両方に焦点を当てており、モデレートまたは非モデレートテストのいずれにも適用できます。

### いつ測定するか

すべての AI／Duo 機能は、次のいずれかのシナリオで評価される必要があります:

- Generally Available (GA) になる前;
- 体験への重要な変更が導入されたとき。

変更を重要なものとみなすかどうかは、デザイナーと製品チームの裁量です。決定に役立ついくつかの例を以下に示します:

- 重要でない変更は、インターフェイスを強化するが、ユーザーの体験やタスクの実行方法／製品との関わり方を根本的に変更しない小さな調整かもしれません。例としては、ボタンの色を変更することが挙げられます。
- 重要な変更は、ユーザーの行動を大幅に変える可能性があり、ユーザーが新しい相互作用方法に適応することを必要とする場合があります。例としては、製品の情報アーキテクチャへの変更が挙げられます。

Duo 機能の GA Scope と Definition of Done の完全な説明は[ここ](https://gitlab.com/gitlab-org/gitlab/-/issues/444274#ga-scope--definition-of-done)にあります（内部アクセスのみ）。

### 測定方法と受け入れ基準

コンセプトとデザインの両方について、[ラピッド検証を実行する手順](/handbook/product/ux/experience-research/rapid-validations)に従います。

### その他の考慮事項

- ユーザーに価値を提供するユーザータスクに焦点を当てます。あなたが取り組んでいる領域には JTBD がまだ存在しないかもしれません。それはOKです; AI ユーザビリティテストのブロッカーになるべきではありません。
- 1 つのタスク失敗がある場合、失敗（合格／不合格）は文書化されますが、評価は文書化されません; 最低 5 人の参加者を満たすために代替の参加者を見つけます。
- 同じタスクで 2 つのタスク失敗がある場合、そのタスクのテストを停止します。何に対処する必要があるかを理解し、調整を行い、それからそのタスクのテストを再開します。
- 調整がユーザー体験に重要な変更をもたらす場合、5 人の新しい参加者で最初から始めるべきかどうかを決定するために[確信とリスクを天秤にかける](/handbook/product/ux/experience-research/when-to-conduct-ux-research/#additional-considerations-weighing-confidence-vs-risk)。
- AI 体験のテストは、考慮すべき新しい課題をもたらします。例えば、参加者に何が示されているかの機能について明確で正確であることが重要です。これは、正しい種類の期待を設定するためです。このトピックの詳細については、[この記事](https://www.uxmatters.com/mt/archives/2023/06/testing-the-future-a-guide-to-testing-ai-products-with-users.php)の **Challenges of Testing AI Products** セクションを参照してください。

### 参考文献

- [People + AI playbook by Google](https://pair.withgoogle.com/guidebook)
- [User research for machine learning systems - a case study](https://dl.acm.org/doi/10.1145/3290607.3299061)
- [Testing AI concepts in user research](https://uxdesign.cc/testing-ai-concepts-in-user-research-b742a9a92e55)
- [Human centered machine learning](https://medium.com/google-design/human-centered-machine-learning-a770d10562cd)
- [How to use AI in UX research at GitLab](/handbook/upstream-studios/how-we-work/ai-usage/)
