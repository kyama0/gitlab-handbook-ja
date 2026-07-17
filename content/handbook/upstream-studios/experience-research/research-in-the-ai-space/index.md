---
title: "AI 領域で UX リサーチを行う"
description: "リサーチガイドラインを含め、Artificial Intelligence（AI）領域で UX リサーチを実施する方法。"
upstream_path: /handbook/upstream-studios/experience-research/research-in-the-ai-space/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:37:26+09:00"
translator: codex
stale: false
---

より多くのチームが Artificial Intelligence（AI）領域でイノベーションを起こすための迅速なプロトタイピング活動に参加するにつれ、立ち止まって次のように問うのは自然なことです：*これはどの問題を解決することを目指していますか？*

画期的で刺激的な技術がプロダクトのイノベーションにつながることはよくあります。しかし、これは、ユーザーの問題を探している技術的なソリューションをチームが提示する結果につながる場合があります。本来はその逆であるべきです。

イノベーションを進める間も、ユーザーのニーズ（および満たされていないニーズ）を念頭に置く必要があります。これをしなければ、特定されたユーザーの問題に対処しない、強力な AI ソリューションを構築してしまうリスクがあります。

このページでは、AI ソリューションのデザインと開発全体にユーザーの視点を取り入れることで、**AI 領域で UX リサーチを行う**方法を案内します。

UX リサーチ業務で**AI を使用する**方法については、[AI の使用](/handbook/upstream-studios/how-we-work/ai-usage/)を参照してください。

## UX Researcher のサポート {#ux-researcher-support}

**ステージに担当の UX Researcher がいる場合：**UX Research のサポートが必要な場合は、[担当ステージの UX Researcher](/handbook/upstream-studios/experience-research/how-uxr-team-operates/#how-team-members-are-assigned)に、[リサーチの優先順位付けプロセス](/handbook/upstream-studios/experience-research/research-prioritization/)に従って連絡してください。AI 固有のリサーチトピックは、そのステージ内ですでに特定されている他のリサーチプロジェクトと比較して優先順位付けされます。

**ステージに担当の UX Researcher がいない場合：**UX Researcher が割り当てられていないステージグループで働く人については、Nick Hertz がそのリサーチリクエストを管理しています。[リサーチの優先順位付けプロセス](/handbook/upstream-studios/experience-research/research-prioritization/)は引き続き適用され、リサーチ Issue を作成した後に、この [AI リサーチ専用の優先順位計算ツール](https://docs.google.com/spreadsheets/d/16iLvrY-saOJsSxFkjVYEu_Db_02caTsQLqzZ59SwFgs/edit#gid=1093756030)へトピックを追加できます。

## ガイドライン {#the-guidelines}

### ガイドライン 1：ユーザーニーズの特定と理解から始める {#guideline-1-start-with-identifying-and-understanding-user-needs}

AI ソリューション自体は、解決することを意図するユーザーの問題を明らかにしません。ユーザーニーズを特定・理解するため（また、AI ソリューションが実際のユーザー問題に対処しているかを判断するため）には、さまざまなアプローチを取れます：

![ユーザーニーズを特定・理解するアプローチの概要](/images/product/ux/ux-research/research-in-the-ai-space/overview-of-approaches.png)

**既存のリサーチをレビューする**

- すでにどのようなリサーチ知識があるかを理解します。Dovetail と [UX Research Drive](https://drive.google.com/drive/u/0/folders/0AH_zdtW5aioNUk9PVA)は、担当ステージのリサーチャーに尋ねることと同様に、始めるのに適した場所です。GitLab 外でどのようなリサーチが存在するかをレビューすることも価値があります。
- **レビューの結果、ユーザーニーズへの確信が中程度または低い場合**、次の選択肢が追加データの収集に役立ちます。

**ユースケースの定義（中程度の確信に推奨される選択肢）**

- 既存のリサーチとドメイン専門知識を使用し、AI ソリューションで対処していると考えるユーザー問題について前提を作ります。[Jobs to be Done](/handbook/product/ux/jobs-to-be-done/)（JTBD）の書き方に合わせて、問題文を次の形式で表現してください：
  - 「[何かを達成したいときに人が置かれる状況]のとき、私は [その人が達成したいこと]をしたい。」
  - 例：*トリアージ当番で事業に重大なリスクを優先順位付けしているとき、私は自分の資産で検出された最新のリスクをレビューしたい。*
- 次に、定量的な[オンラインアンケート](/handbook/upstream-studios/experience-research/surveys/)を通じて問題文を検証し、次を理解します：
  - ユーザーがこの問題に遭遇する頻度
  - 問題に対処する重要性
- アンケートには、次のような他のパラメーターも含められます：
  - ユーザーが現在この問題を解決する方法
  - 今日この問題を解決する難しさ
- 質問例については[このテンプレート](https://docs.google.com/document/d/1-81BH7JPj_SU5L1YvfX2HpYuIdKnUuTpRHuRlKb5w3M/copy)を参照してください。追加の調査例は近日公開予定です。

**拡張したソリューション検証**

- 参加者がプロトタイプまたは機能に取り組む*前に*、ユーザーニーズをさらに知るには、[ソリューション検証タイプの調査](/handbook/upstream-studios/experience-research/solution-validation-and-methods/)を使用してください。そのためには、参加者がプロトタイプでタスクを開始する前に、職務タスク、ワークフロー、ツール、期待、ペインポイントなどについての質問をいくつか追加します（[この例](https://docs.google.com/document/d/1FXvp1690AGCxJTUeuewit3e8JDljP4sLCf9R7K3wYtk/edit#heading=h.f246e42afjt9)を参照）。[モデレートされたセッション](/handbook/upstream-studios/experience-research/usability-testing/#different-types-of-usability-testing)は[非モデレートのもの](/handbook/upstream-studios/experience-research/unmoderated-testing/#pros-and-cons)より適しており、推奨されます。

**生成的リサーチ（低い確信に推奨される選択肢）**

- 問題文またはユーザーニーズに対して高い確信や理解がない場合は、ユーザーグループとそのニーズについてさらに知るため、生成的リサーチを実施する時間を取りましょう。このアプローチには時間がかかりますが、新しいソリューションを発想するために使用できる、ユーザーニーズ、目標、ペインポイントへの深いインサイトを提供します。
- 時間がある場合は、これを行うことを推奨します。AI 機能がユーザーにとって重要である理由について、確かな根拠が得られます。

### ガイドライン 2：何かを構築する前に、アイデアに対するユーザーフィードバックを集める {#guideline-2-collect-user-feedback-on-your-idea-before-building-anything}

[Wizard of Oz プロトタイピング](https://medium.com/@lizschemanski/wizard-of-oz-experiments-eed2c0a12081)を使用すると、エンジニアリングチームが将来の AI 搭載機能を構築しているのと並行して検証できることを知っていますか？AI ソリューションが利用可能になる前の検証は、ユーザーの期待と要件を早期に把握する優れた方法です。AI のトレーニングにおけるエンジニアリング作業に情報を与えられます。

プロトタイプを準備する際には、次の点を念頭に置いてください：

- ソリューションにパーソナライゼーションが含まれる場合は、セッション前に、プロトタイプでより現実的な体験となる関連ユーザーデータを収集してください。データの使用方法をユーザーに確実に知らせてください。
- AI 技術は確率的で常に正確とは限らないため、「誤った」推奨も含めてください（[ガイドライン 4](#guideline-4-learn-about-the-cost-of-errors-that-ai-will-make)を参照）。たとえば、チャットボットを評価していて、参加者が UX Research の手法について質問したいとします。そのトピックに関連する回答に加え、UX Research に関係のない回答も含めます。ユーザーがまだ許容できるものと、どこで不満を抱いて利用をやめるかを理解するため、提供する「誤った」回答数を変えられます。

魅力的に思えるかもしれませんが、この AI 機能を使用するかをユーザーに尋ねないでください。人は将来の行動を予測するのが苦手であり、回答は正確でも有用でもありません。人々がソリューションを使用するかをより近く理解するには、次を理解するのが最善です：

1. その問題またはニーズ
1. ソリューションがそれらに対処するうえでどの程度役立つか。言い換えると、価値を提供するか？

### ガイドライン 3：AI プロトタイプ検証中に、ユーザビリティフィードバックだけでなくさらに多くを集める {#guideline-3-collect-more-than-just-usability-feedback-during-ai-prototype-validation}

AI 搭載ソリューションが検証可能になったら、ユーザビリティに関するフィードバックだけでなく、必ず次も集めてください：

- **ベースラインデータ** - ユーザーが現在この問題をどのように解決しているかに関するデータ。これにより、AI ソリューションが与えうる影響と、その有用性を評価できます。
- **信頼について** - 人々が AI によって提供される情報を信頼するか。信頼しなければ使用しません。検討すべき質問例：
  - *提供された [機能名、例：コード提案]をどの程度信頼しますか？*
  - *[機能名、例：コード提案]を [タスク、例：正しいコードの提供]について信頼しますか？なぜですか／なぜですか？*
- **フィードバックの提供について** - コード提案が役に立たない場合など、システムフィードバックを提供することに抵抗がないか。AI はユーザーフィードバックに基づいて改善するため、フィードバックを提供できることが重要です。「誤った」推奨に対するフィードバック提供に焦点を当てたタスクを含め、それを成功させられたか、どう感じたかを測定することで確認できます。
- **サードパーティー AI サービスへの態度について** - AI ソリューションがサードパーティー（例：OpenAI）により提供される場合、ユーザーがサードパーティーの使用を認識しているか、それに対する態度を理解することが重要です。これにより、ユーザーのメンタルモデル（[ガイドライン 5](#guideline-5-plan-ahead-for-longitudinal-research)を参照）と GitLab のブランドへの影響に関するインサイトが得られます。

私たちは [AI メトリクスのセット](#ai-user-experience-survey-pilot)を試験運用しており、ソリューション検証に含めることを推奨します。

ソリューション検証中に堅牢なフィードバックを得るには、少なくとも 3 つのデータポイントを収集することを推奨します。AI の出力は変化するため、最初の出力だけに依存することは十分ではありません。3 つの類似したタスクを用意して、参加者がこの 3 つの異なるシナリオで AI の応答にどう反応するかを見ることで行えます。

**ヒント：**魅力的な「これを使用しますか？」という質問は避けてください。

AI 機能を [Generally Available](https://docs.gitlab.com/policy/development_stages_support/#generally-available-ga)に向けて成熟させている場合は、メトリクスと成功基準に関する追加のガイダンスとして、[UX 成熟度の要件](/handbook/product/ai/ux-maturity/)を確認してください。

### ガイドライン 4：AI が犯すエラーのコストを知る {#guideline-4-learn-about-the-cost-of-errors-that-ai-will-make}

AI はその確率的な性質によりミスをします。AI のミスがユーザーにどのような影響を与えるかを理解することが重要です。特定のミスはユーザーが利用をやめる原因になりますか？または GitLab の利用をやめる原因になりますか？次のことを行えます：

- 許容できるミスと害をもたらし何としても避ける必要があるミスを評価するためのリサーチ活動を計画します。
- ソリューション検証を行う際に、AI のミスに関連する質問を含める機会もあります。たとえば、初期プロトタイプを評価する場合です（[ガイドライン 2](#guideline-2-collect-user-feedback-on-your-idea-before-building-anything)と [3](#guideline-3-collect-more-than-just-usability-feedback-during-ai-prototype-validation)を参照）。
- プロトタイプに「誤った」推奨を含め、人々が AI のミスにどう反応するかを把握できるよう設定します。

### ガイドライン 5：縦断的リサーチをあらかじめ計画する {#guideline-5-plan-ahead-for-longitudinal-research}

AI は、ユーザーが時間とともに関与するにつれ進化します。その結果、ユーザーが時間とともに AI に関与するなかで、その仕組みに関するメンタルモデルが変化する場合があります（継続的なループです）。価値のある AI ソリューションを継続して提供するには、メンタルモデルが時間とともにどのように変化するかを理解し、ユースケースとユーザーが増えるなかで AI ソリューションのパフォーマンスを評価することが重要です。

私たちは、AI 搭載機能に対するユーザー体験を時間とともに評価・追跡できる [AI メトリクスのセット](#ai-user-experience-survey-pilot)を試験運用しています。

## AI ユーザー体験アンケート（パイロット） {#ai-user-experience-survey-pilot}

AI 搭載機能がユーザーニーズをどの程度満たしているか（ユーザビリティではありません）を評価するための質問セットを含むアンケートを開発し、現在試験運用しています。このアンケートは、AI 搭載機能に対するユーザーの体験を時間とともに追跡するために使用できます。

このアンケートは、文献レビューで確認し、[11 のアンケート質問](https://gitlab.fra1.qualtrics.com/jfe/form/SV_e3yxudPETRbZzfM)に取り込まれた、次の 8 つの構成概念に焦点を当てています。

- **正確性：**ユーザーは私たちの AI をどの程度正確だと感じますか？意味のある応答を得るにはどの程度の労力が必要ですか？
- **信頼性／誤りうる性質：**ユーザーは GitLab の AI を信頼しますか？
- **価値：**私たちはユーザーがより速く、生産的になるのを支援していますか？ユーザーが新しいことを学ぶのを支援していますか？ユーザーは AI 搭載機能を使用することによるメリットを感じますか？
- **コントロール：**AI の推奨またはアクションの利用方法を自分でコントロールできているとユーザーは感じますか？
- **エラー処理：**AI が生み出すエラーにユーザーが対処できるようにしていますか？
- **ガードレール：**AI が自分のために何をしているかをユーザーが批判的に考えられるよう、AI とのユーザーインタラクションに十分な配慮ある摩擦を組み込んでいますか？
- **学習可能性：**ユーザーは AI 搭載機能をすばやく理解できますか？
- **AI の限界：**AI 搭載機能にできることとできないことを、ユーザーは理解していると感じますか？

このアンケートは、AI 機能に取り組む参加者に送信できます。このアンケートを使用する場合は、Qualtrics プロジェクトへのアクセスについて Anne Lasch または Erika Feldman に尋ねてください。

## AI ユーザビリティメトリクス {#ai-usability-metric}

AI 機能のユーザビリティを効果的に評価し、時間とともに進捗を追跡するには、以下の手順に従ってください：

### 測定するもの {#what-to-measure}

AI 機能について測定する 3 つのデータに焦点を当てています：

- [有効性](/handbook/upstream-studios/experience-research/usability-testing/#effectiveness)（合格／不合格）
- [効率性](/handbook/upstream-studios/experience-research/usability-testing/#efficiency)（Single Ease Question）
- 体験の[満足度](/handbook/upstream-studios/experience-research/usability-testing/#satisfaction)

これらの測定は軽量で、体験の仕組みとユーザビリティの両方に焦点を当てており、モデレートテストと非モデレートテストのどちらにも適用できます。

### 測定するタイミング {#when-to-measure}

すべての AI／Duo 機能は、次のいずれかのシナリオで評価する必要があります：

- Generally Available（GA）になる前。
- 体験に大きな変更が導入されたとき。

変更が大きいかどうかを判断するのは、デザイナーとプロダクトチームの裁量です。判断を助ける例を次に示します：

- 重要でない変更は、インターフェースを強化するものの、ユーザーの体験またはタスク実行／プロダクトとのやり取り方法を根本的に変えない軽微な調整です。例として、ボタンの色を変更することが挙げられます。
- 大きな変更はユーザーの行動を大幅に変える可能性があり、ユーザーは新しいインタラクション方法に適応する必要があります。例として、プロダクトの情報アーキテクチャの変更が挙げられます。

Duo 機能の GA Scope と Definition of Done の完全な説明は[こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/444274#ga-scope--definition-of-done)（内部アクセスのみ）にあります。

### 測定方法と受け入れ基準 {#how-to-measure-and-the-acceptance-criteria}

コンセプトとデザインの両方について、[迅速な検証を実行する手順](/handbook/upstream-studios/experience-research/rapid-validations)に従ってください。

### その他の考慮事項 {#other-considerations}

- ユーザーに価値を提供するユーザータスクに焦点を当ててください。取り組んでいる領域にはまだ JTBD が存在しない場合があります。それで問題ありません。AI のユーザビリティテストを妨げるべきではありません。
- タスク失敗が 1 件ある場合、失敗（合格／不合格）は記録しますが、その評価は記録しません。最低 5 人の参加者を満たすため、代替の参加者を見つけてください。
- 同じタスクでタスク失敗が 2 件ある場合は、そのタスクのテストを停止してください。対処すべきことを理解し、調整を行ってから、そのタスクのテストを再開してください。
- 調整によってユーザー体験に大きな変更が導入される場合、5 人の新しい参加者で最初から始めるべきかを判断するため、[確信とリスクを比較検討](/handbook/upstream-studios/experience-research/when-to-conduct-ux-research/#additional-considerations-weighing-confidence-vs-risk)してください。
- AI 体験のテストには、新しい考慮すべき課題が伴います。たとえば、参加者に表示するものの機能について明確かつ正確にすることが重要です。これは適切な期待を設定するためです。このトピックの詳細は、[この記事](https://www.uxmatters.com/mt/archives/2023/06/testing-the-future-a-guide-to-testing-ai-products-with-users.php)の**Challenges of Testing AI Products**セクションにあります。

### 参考資料 {#references}

- [Google による People + AI playbook](https://pair.withgoogle.com/guidebook)
- [機械学習システムのユーザーリサーチ - ケーススタディ](https://dl.acm.org/doi/10.1145/3290607.3299061)
- [ユーザーリサーチで AI コンセプトをテストする](https://uxdesign.cc/testing-ai-concepts-in-user-research-b742a9a92e55)
- [人間中心の機械学習](https://medium.com/google-design/human-centered-machine-learning-a770d10562cd)
- [GitLab で UX リサーチに AI を使用する方法](/handbook/upstream-studios/how-we-work/ai-usage/)
