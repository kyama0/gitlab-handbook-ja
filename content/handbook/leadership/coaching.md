---
title: "コーチング"
upstream_path: /handbook/leadership/coaching/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T07:28:30+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## GitLab におけるコーチング {#coaching-at-gitlab}

GitLab では、以下のためにコーチングを使用します:

1. 自己反省、コミュニケーション、フィードバックの機会を提供する
1. 顧客に成果を届けるために必要なスキルをチームメンバーに身につけさせる
1. [ハイパフォーマンス](https://internal.gitlab.com/handbook/company/high-performing-teams/)を達成するための戦略を実践する場を作る

コーチングの会話は、コーチとコーチを受ける人が対等なパートナーである、流動的でダイナミックな共創の行為です。GitLab では、ピープルリーダーも個別の貢献者も同様に、[360 レビュープロセス](/handbook/people-group/360-feedback/)、[フィードバック](/handbook/people-group/guidance-on-feedback/)の提供と受領、[キャリア開発](/handbook/leadership/1-1/#career-development-discussion-at-the-1-1)のステージ全体などでコーチングを使用します。

### なぜコーチが必要、または欲しいのか {#why-you-might-need-or-want-a-coach}

コーチは最後の手段のリソースであり、パフォーマンス改善計画のチームメンバーだけのものだという誤解が一般的です。コーチングはシニアリーダーだけのものだという誤解もあります。

プロのコーチに会いたい、または会うことで利益を得られる理由の例を確認してください。このリストは網羅的ではありません。

1. ピープルマネージャーが自分のコーチングスキルとスタイルを開発して、チームに説明責任を構築する。
1. リーダーが四半期計画プロセスに透明性と効率性を加えたいが、どこから始めるべきかわからない。
1. 個別の貢献者が、自分の個人的なリーダーシップスタイルを定義し、キャリア成長の機会を計画したい。
1. チームメンバーが、オープンで正直なフィードバックを与えることに焦点を当てて、コミュニケーションスタイルを改善したい。
1. チームメンバーが緊急性と成果に基づいて自分の作業の優先順位を付けるシステムを構築するためのガイダンスが必要。

## コーチの選択 {#selecting-a-coach}

GitLab でコーチを見つける方法はさまざまあります:

```mermaid
graph TD
    A(I'm looking for a external coach focused on...) --> B(Career/professional growth)
    A --> C(Personal growth)
    B --> D(I'm a Job Grade 8+)
    B --> O(I'm below a Job Grade 8)
    O --> P(Modern Health)
    D --> F(Coaching Right Now)
    C --> J(Modern Health)
```

| コーチングタイプ | 説明 |
| ----- | --------------- |
| プロフェッショナル | 外部コーチによるプロフェッショナルコーチングは、[Growth and Development Fund](/handbook/people-group/learning-and-development/growth-and-development/#types-of-growth-and-development-reimbursements)を使用して Job Grade 8 以上のマネージャーおよび IC に提供されます。 |
| [Modern Health](/handbook/total-rewards/benefits/modern-health/) | Modern Health Employee Assistance Program を使用することで、すべてのチームメンバーにプロフェッショナルコーチングが提供されます。Modern Health のコーチは、プロフェッショナル／キャリア、メンタルヘルス、ファイナンシャルコーチングを専門としています。 |
| マネージャーコーチング | あなたのマネージャーは、あなたを将来の目標に導くコーチになることができます。マネージャーがあなたをコーチング能力で引き受けることができることを確認してください。ただし、コーチングは 1:1 ディスカッション中にマネージャーと持つ相互作用のタイプでもあります。 |
| 代替プロフェッショナルコーチ | 何らかの理由で、Coaching Right Now または Modern Health を通じて提供されるコーチがあなたのニーズに合わない場合、Job Grade 8+ のチームメンバーは代替の外部コーチを探し、承認を得ることができます。 |

## コーチがどのようにコーチするか {#how-coaches-coach}

コーチは、チームメンバーが自分の強みと開発領域を認識しながら、注意を未来に集中するのを支援します。コーチは、コーチを受ける人が自分の可能性を引き出し、望ましい結果を特定し、目標を達成するのを助けます。

コーチの主要な属性は以下を含みます:

1. 学習や洞察を深めるためにパワフルな質問をする。
1. コーチを受ける人が自分の強みと未開拓の可能性を認識するのを助ける。
1. コーチを受ける人が自分の選択に従って行動に移るよう奨励する。
1. コーチを受ける人がコミットしたアクションに対して責任を負わせる。
1. コーチを受ける人に完全に集中する。
1. サポートを提供しながら深く聴く。

### 必須のコーチングスキル {#essential-coaching-skills}

効果的なコーチは、コーチングの会話を可能にする定義されたスキルセットを使用します。これらのスキルには以下が含まれます:

{{% details summary="質問" %}}
パワフルでオープンエンドな質問をすること。コーチングとは、伝えるのではなく尋ねることから来ており、チームメンバーが自分の解決策を作り出せるようにします。コーチングは、個人から洞察を「引き出す」ように働きます。

**質問の構成方法**

- オープンエンドな質問をする。良い質問は「何」または「どのように」で始まります。アクションについての質問に移るときは、「誰」と「いつ」も役立ちます。
- 一度に 1 つの質問。会話の 1 つの要素に焦点を当てた 1 つの質問に注意を集中します。
- 質問を簡潔に保つ。
- コーチを受ける人のアジェンダに留まる。あなたがチームメンバーは「いるべき」だと思う場所ではなく、チームメンバーがいる場所を反映する質問を選びます。
- 許可を求める。その人にチャレンジしたい場合、またはチームメンバーが他では持たない可能性のある提案や洞察を与えたい場合は、許可を求めます。

**質問 - 避けるべきこと**

- クローズドな質問は避ける - 考えを閉じ込める可能性があります。以下を使う質問は避けます: 「それは...あなたは...したことがある...ありますか？」
- なぜの質問 - これらはその人を防御的にさせ、コーチからの学びを閉じ込める可能性があります。
- 質問の形での誘導的質問、声明、または意見。これらはあなたがコーチを受ける人は行くべきだと思う場所を指し示しますが、チームメンバーが自分の結論に至る場合のほうがアクションへのコミットメントが大きくなります。
- 古い質問 - セッションの始まりに考えたものの、もはや関連性がない可能性のある質問は避けます（質問する正しいタイミングを待っているなら、もはや聴いていない可能性があります）。

{{% /details %}}

{{% details summary="聴く" %}}
聴くことは、開放性と好奇心を可能にします。それはまた、あなたが完全に存在していることをコーチを受ける人に示します。素晴らしい質問をするためには、完全に聴く必要があります。

**コーチのように聴く**

- 身体的、精神的、感情的に存在する（画面を閉じ、コーチを受ける人に注意を完全に注ぐ）。
- 他のコーチを受ける人に焦点を当てる。
- 好奇心を持って、判断なしに聴く。
- コーチを受ける人があなたの質問を処理しているときの沈黙の時間を許す。
- ビデオチャットを通じてボディランゲージに注意を払う: カメラでアイコンタクトを取り、笑顔を見せ、うなずくようなジェスチャーで存在を示し、ディスカッションに身を乗り出す。
- 焦点を提供し、コーチを受ける人のために明確にしようとする。
- 判断なしに、観察を提供し、聞いていることを示し、相手の洞察を深めるために鏡を上げる。
- 判断なしに、制限的な信念かもしれないものに立ち向かい、またはチャレンジして、コーチを受ける人のための新しい機会を開く。

**何を聴くか**

- 声のトーン
- 会話のペースとエネルギーのシフト
- バーチャルなボディランゲージ
- 言葉の選択
- 包括的なテーマや、コーチを受ける人が繰り返し戻ってくること
- 根底にある信念と仮定
- ブラインドスポット
- 個人的な価値観と最も重要なもの
- 一時停止と沈黙
{{% /details %}}

{{% details summary="励ます" %}}
信頼を築くために、コーチを受ける人の強みを特定することで励まし、熱意を示します。オープンで、個々のチームメンバーの強みに根ざしてください。気付いたことを振り返り、コーチを受ける人への影響を判断し、[フィードバック](/handbook/people-group/guidance-on-feedback/)が届いたことを確認します。

**いつ励ますか**

- コーチングの会話の始まりに、達成された進捗または達成した成果を認める。
- 会話中、コーチを受ける人が接続を作る、または新しい洞察を得るときに認める。
- ブレインストーミング中、誰かがコンフォートゾーンを超えて伸びたときに認める。
- アクションの計画中、誰かの変化へのコミットメントを認める。

**励ますことを実践する戦略**

- 認識する: コーチを受ける人に焦点を当てます - チームメンバーが人としてだれであり、人生で何をしてきたか、チームメンバーの内面の性格。コーチを受ける人にユニークだと感じさせ、チームメンバーを他から際立たせるものを認識します。
- 評価する: 行為の他者への前向きな影響と貢献に焦点を当てます。
- 賞賛する: 行為、人々が行うことに焦点を当てます - 成果、透明性、効率性、[インクルージョン](/handbook/company/culture/inclusion/)、パフォーマンス。
{{% /details %}}

{{% details summary="チャレンジ" %}}
コーチを受ける人にコンフォートゾーンを押し広げ、バーを上げ、より大きな役割を担うようチャレンジします。コーチとしてのあなたの役割は、可能性のより大きな絵を保つことです。素晴らしいチャレンジは、相手がコンフォートゾーンの限界を調べ、それを超えて動くように促します。

**いつチャレンジするか**

- コーチを受ける人がコンフォートゾーンに座っている、または安全策をとる時間が長すぎたとき。
- 速く動いてきた、そしてチャレンジで栄えるコーチを受ける人。
- コーチを受ける人の自信を高め、可能と認識するものの認識を高めるため。
{{% /details %}}

{{% details summary="存在する" %}}
判断なしに他の人に焦点を当てます。コーチを受ける人にあなたの完全な注意を与えます。バーチャルコーチングセッション中は他のプログラムを閉じます。何が機能していて何が機能していないかを特定することで、オープンで好奇心を持ちます。身体的、精神的、感情的に本当に存在してください。

**存在する方法の戦略**

- うなずくなどのジェスチャーで存在を示す。
- 自分の焦点、注意、エネルギーを逸らしている自分の気がかりをすべて空にする。
- オープン、好奇心、感謝のマインドセットに自分を根付かせる。
- コーチを受ける人、自分自身、コーチングプロセスについて感謝する何かを探す。
- コーチングの会話への自分の意図に根付く。
{{% /details %}}

### 異なる会話のための異なる帽子 {#different-hats-for-different-conversations}

コーチングは、[リーダー](_index.md)として使用するかもしれない会話のモードの 1 つに過ぎません。エンジニアリングプログラムを運営するチームリードかもしれません。[私たちの TMRG の 1 つ](/handbook/company/culture/inclusion/tmrg-tmag/)を管理しているかもしれません。[メンター](/handbook/people-group/learning-and-development/mentor/) または [オンボーディングバディ](/handbook/people-group/general-onboarding/onboarding-buddies/)かもしれません。あなたはまた、ほぼ確実に他の誰かの直属の部下でもあります。これらの役割を `異なる帽子` を被ることのように考えてください。

任意の日に複数の帽子を被ることができます:

1. **マネージャーの帽子** - 指示的になり、チームにタスクを割り当てる。
1. **教師の帽子** - 自分の知識と専門性を伝えて、誰かのスキルを成長させる。
1. **メンターの帽子** - 自分の経験からアドバイスとガイダンスを共有する。
1. **コーチの帽子** - 質問をして深く聴き、チームメンバーがソリューションに到達するのを支援する。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTadK6g9lEwLV8nP9GWPrgcF7sRHxycOuLwlZQm_h05D_FJpC3T9JzGUB7FmZY0UyW-ii4IfP0groBd/embed?start=true&loop=false&delayms=3000" frameborder="0" width="500" height="769" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### 信頼とコーチング {#trust-and-coaching}

信頼の構築は、コーチングとチームダイナミクスにおいて重要な要素です。信頼は機能的でまとまりのあるチームの中心にあります。[Patrick Lencioni によると](https://www.youtube.com/watch?v=GCxct4CR-To)、チーム全体で信頼を崩す可能性のあるチームの 5 つの機能不全があります:

1. **信頼の欠如:** チームメンバーはお互いに脆弱になるのを嫌がり、間違い、弱点、または助けの必要性を認めようとしません。
1. **対立への恐れ:** 信頼の欠如は、タスク、アクティビティ、プロジェクトに関するフィルターのない、情熱的な議論の流れを妨げます。これらの会話は、すべての声が聞かれ、すべての選択肢が考慮されていることを確認するために重要です。
1. **コミットメントの欠如:** 何らかの対立がなければ、チームメンバーが意思決定にコミットするのは難しく、曖昧さが支配する環境を醸成します。強いコミットメントを持つチームは、より多くの努力を投入する可能性が高くなります。
1. **説明責任の回避:** チームが明確な行動計画にコミットしない場合、最も集中して動機付けられた個人でさえ、生産性に反すると思われる行動や振る舞いについて同僚に指摘することをためらいます。
1. **成果への注意不足:** 誰も責任を負わない場合、チームメンバーは自然に集合的な目標よりも自分のニーズを優先する傾向があります。たとえば、キャリア開発と承認。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQwmhv3MIUV4065TeQ4N1Lz4xhjROQRTaTW2XNa5qH4k-mq4GNLgRYhi2fr2hjZslZ7V8JBipbvuaBv/embed?start=true&loop=false&delayms=3000" frameborder="0" width="700" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

#### 信頼の方程式 {#the-trust-equation}

**[The Trust Equation&trade;](https://trustedadvisor.com/why-trust-matters/understanding-trust/understanding-the-trust-equation#:~:text=The%20Trust%20Equation%20uses%20four,%2C%20Intimacy%20and%20Self%2DOrientation.&text=The%20Trust%20Quotient%20is%20a,trustworthiness%20against%20the%20four%20variables.)** は、チームとの信頼性を高めるための概念です。チームメンバーとの信頼が多いほど、コーチングの会話を持つことが容易になります。

信頼の方程式は、信頼性を測定するために 4 つの客観的変数を使用します:

| 客観的変数 | 測定 |
| ----- | ---------- |
| **信頼性:** | 私たちの言葉は信じられます。簡単に言えば、信頼性は「あなたが言うこと、そして他者にとってあなたがどれだけ信じられるか」を評価します。言い換えれば、他者にあなたのリードに従うよう頼むなら、信頼できなければなりません。 |
| **頼りがい:** | 私たちは言ったことを行います。頼りがいは「アクション、そしてあなたがどれほど頼りになるように見えるか」を測定します。あなたは頼りにされる存在ですか？人々はリーダーがチームメンバーのために結果を出すと知る必要があります。 |
| **親密さ:** | 私たちは他者に共感します。親密さは「人々があなたと情報を共有するときにどれほど安全か」を考慮します。機密情報を提示されたとき、それを守る必要があります。 |
| **自己志向:** | 私たちの焦点は私たちのチームにあり、個人的な利益ではありません。自己志向は、自分または他者への個人的な焦点です。自己集中が強すぎると、信頼性の度合いが下がります。 |

信頼の方程式は、分母（自己志向）に 1 つ、分子（信頼性、頼りがい、親密さ）に 3 つの変数があります。分子の要素の値を増やすと、信頼の値が増えます。分母（自己志向）を増やすと、信頼の値が減ります。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ7oRKaXPc3-pqXJEU5SHdlBJlHw00HO4oOcfmH5z0Iq0ojz-lQ1HoudBSeUoHlQNQfUZf_4UoCyObR/embed?start=true&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

#### 信頼の神経科学 {#neuroscience-of-trust}

神経科学の研究は、功績を認めることが [目標が達成された後](https://hbr.org/2017/01/the-neuroscience-of-trust)に発生する場合、信頼に最大の影響を与えることを示しています。信頼の神経科学は、チームメンバーが共感を高め、効率的に計画し、脅威と恐怖への反応を減らすのに役立ちます。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSxZWO97gkIShmnZ-Ue7C9tbHVMT9BcuUx643pcGKrV29EQiXnpZ6yzTIZIuCUscwhTsT5ZoR6Gn-ZL/embed?start=true&loop=false&delayms=3000" frameborder="0" width="760" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

#### 信頼のリターン {#the-return-on-trust}

[Accenture の研究](https://bankingblog.accenture.com/the-importance-of-building-trust-in-the-financial-services-workplace-explained-in-6-eye-opening-statistics)によると、低信頼の企業の人々と比較して、高信頼の企業の人々は以下を報告しています:

1. 仕事で 106% 多くのエネルギー
1. 76% 多いエンゲージメント
1. 50% 高い生産性
1. 仕事で 60% 多い満足、生活で 29% 多い満足
1. 自社の目的と 70% 多く一致
1. 74% 少ないストレス
1. 40% 少ないバーンアウト

#### 信頼構築に関する追加リソース {#additional-resources-on-trust-building}

1. [信頼を築き、再構築する方法 - TED Talk](https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust?subtitle=en)
1. [新しいチームで信頼を築く方法（リモート編） - Harvard Business Review](https://hbr.org/2021/03/new-to-the-team-heres-how-to-build-trust-remotely)

### 意志とスキル {#will-and-skill}

意志とスキルは、チームメンバーをその意志とスキルに基づいてコーチするために使用できるフレームワークです。意志は、チームメンバーの仕事に対する動機付けとエンゲージメントを反映します。スキルは、タスクを行う能力の反映です。いずれかのカテゴリで高または低のスコアをつけると、チームメンバーは 4 つの象限の 1 つに該当し、それぞれが異なる方法でコーチおよびマネージできます。

- [Persinio による意志とスキルのマトリクスのガイド](https://www.personio.com/hr-lexicon/skill-will-matrix-defined/)
- [AIHR による意志とスキルのガイド](https://www.aihr.com/blog/skill-will-matrix/)
- [WhatFix による意志とスキルのブログ記事](https://whatfix.com/blog/skill-will-matrix/)
- [MindTool による意志とスキルの動画](https://www.youtube.com/watch?v=4DAk7fjai6c)
- [OMT Global による意志とスキルの動画](https://www.youtube.com/watch?v=KkkGt15-qtc)

### 内なる修理屋を管理する {#managing-your-inner-fixer}

効果的にコーチするためには、内なる修理屋を管理することが重要です – 私たちの内なる修理屋は、必死に伝えたいと思っています！コーチの役割は、人々が新しい習慣を発展させ、新しい関与方法を探求し、最高の状態でいるために何をする必要があるかを理解するのを支援することです。このアプローチは、伝えるよりもコーチングを多く必要とします。指示を与えるよりもサポートすることを多く必要とします。

- [コーチとしてのリーダー](https://hbr.org/2019/11/the-leader-as-coach)
- [問題を直すのをやめて、コーチングを始める](https://baird-group.com/stop-fixing-start-coaching/)
- [コーチングでは、すべての答えを持つよりも適切な質問をするほうが重要なのか？](https://www.fourstreamscoaching.com/in-coaching-is-asking-the-right-questions-more-important-than-having-all-the-answers/)

## GROW モデル {#grow-model}

GROW モデルは、コーチを受ける人とコーチングの会話を持つための 4 ステップの方法です。コーチングセッション中に適用して、未来に焦点を当てたディスカッションを通じてコーチを受ける人を導けます。

**G - Goals（目標）:** 成功を駆動し、エネルギーと動機付けを高く保つためのインスピレーションのある目標を特定します。

**R - Reality（現実）:** 現在の状況と、未来の目標を達成するために現在存在する障害について話します。

**O - Options（選択肢）:** 前進するための選択肢を探ります。

**W - Way Forward（前進の道）:** コーチを受ける人の説明責任を設定するために、具体的なアクションとタイムフレームに合意します。

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRyDezAdhbc9k5YOQmkUxCxkroz-yR6dpX1CoevIULZM10DcYLy_hBo3yQGlHPUgzPrAxZmNzR7Qjwj/embed?start=true&loop=false&delayms=3000" frameborder="0" width="760" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

## コーチを受ける人の属性 {#attributes-of-a-coachee}

コーチがコアのコーチングスキルを使用するように、コーチを受ける人は以下を通じてコーチングの会話から最大限を得るために自分自身のスキルとアクティビティのセットにアクセスできます:

1. **存在する**: コーチが存在しているように、コーチを受ける人は会話に存在し、注意深く、可能性にオープンで、完全に従事する必要があります。
1. **反省する**: コーチを受ける人は、パワフルな質問を通じてコーチングの会話を通じて反省し、不思議に思い、熟考し、考えることに招待されます。
1. **視覚化する**: コーチを受ける人は、想像力の力を活用し、成功の可能性を高めるために、望ましい将来の結果の絵を心に描けます。
1. **学ぶ**: コーチングの会話は、新しい理解や認識に至ることで、新しい視点を発見することを通じて学ぶことを中心に展開します。
1. **変革する**: 変化はコーチングのコアの属性です。時々、コーチを受ける人が前進するための適切なアクションについての明確さが増したとき、変革は小さい場合があります。時々、コーチを受ける人が戻ることができない方法でマインドセットをシフトできるとき、変革はより深い場合があります。

## コーチングの会話 {#coaching-conversations}

### アクションの計画 {#planning-for-action}

アクションフェーズの計画は、コーチを受ける人が自分の目標をサポートするアクションステップを持つ計画を作成できるようにすることに関するものです。

**アクションを計画する方法:**

- コーチを受ける人は、チームメンバーが自分のために設計するアクションにコミットし、責任を負います。
- コーチは、ブレインストーミング、調査、リクエスト、チャレンジ、またはバーを上げることがありますが、コーチを受ける人が最終的にアクションステップを設計する責任があります。
- コーチのコーチを受ける人のためのアクションは、コーチを受ける人のアジェンダに奉仕するものです。
- コーチは必ずしもコーチを受ける人が達成する結果に執着しません。
- アクションは、コーチを受ける人にとって重要なこと、チームメンバーが達成したい変化に根付いています。コーチは、アクションステップとコーチを受ける人の全体的な変化アジェンダのパフォーマンスについて、コーチを受ける人に責任を負わせるべきです。

コーチングの帽子を被りながらアクションを計画しているとき、評価したり判断したり、自分のアジェンダを推進したりすることはありません。コーチを受ける人は最終的にアクションステップを決定し、自分の前進の道にコミットするべきです。コーチとして、あなたは GitLab の価値観に沿って行動しながら、好奇心を持ち、判断しないでいます。

#### アクション計画の質問例 {#sample-planning-for-action-questions}

- ....するために、次に取れる 3 つのステップとして何が考えられますか？
- 何をしますか？いつしますか？どのように知ることができますか？
- ...についてもっと見つける必要／したいことは何ですか？
- どのようなサポートが必要ですか？誰から？
- 私たちのリクエストは、今週あなたが...することです。それでうまくいきますか？
- あなたに...することをチャレンジします。どう思いますか？
- どのように私たちにフォローアップしてほしいですか？

### コーチングの会話を終える {#ending-the-coaching-conversation}

コーチングセッションが完了したら、以下を尋ねることで、会話の目標と結果をレビューすることが重要です:

- _____について話したいとのことでしたが、この会話はどのようにあなたにとって有用でしたか？
- この会話から何を持ち帰りたいですか？

コーチは、このセッションが思い出させたことと、コーチを受ける人で本当に評価することについての声明で会話を終えたい場合もあります。コーチングはエンパワーメントに関するものです。チームメンバーが自分の自信と自己価値を増やし、バランスを取るのを支援しています:

- 私たちの会話から本当に評価したのは...
- 私たちがあなたを称賛するのは...
- あなたが私たちに気付かせてくれた、学ばせてくれた、または思い出させてくれたのは...

### 追加のコーチングスキル {#additional-coaching-skills}

- 全体像の視点を提供する
- メタファーの使用
- ブレインストーミング
- 何が可能かの説得力のある絵を作成する
- チャンピオニング
- チャレンジング
- 根底にある制限的な信念、仮定、マインドセットを特定する
- [対立を管理するためのヒント](/handbook/leadership/managing-conflict/#8-tips-for-managing-conflict)

## Team Member Relations {#team-member-relations}

コーチングが成功しないとき、GitLab の Team Member Relations グループがあなたを支援できます。マネージャーが最初にすべきことは、状況をレビューしアクションプランで協力するために、担当の Team Member Relations Partner に連絡を取ることです。
そのアクションには、口頭および文書化された追加のコーチングが含まれます。

チームメンバーの行動があまりにも悪質であり、パフォーマンスの問題以上のものになり、本当の行動上の懸念になることがあります。チームメンバーがそのような行動に従事した疑いがあると思うときは、チームメンバーをハイパフォーマーと見なすかどうかにかかわらず、TMR にすぐに関与してもらうべきです。

- [LDR 102 パフォーマンス不足](https://www.youtube.com/watch?v=nRJHvzXwXBU&t=1s)
- [パフォーマンス不足への対応に関するハンドブックインタビュー](https://www.youtube.com/watch?v=-mLpytnQtlY)

## ライブラーニングセッション {#live-learning-session}

マネージャーチャレンジパイロットの 2 週目に、[信頼の構築](/handbook/leadership/building-trust/)とコーチングをカバーするコースを開催しました。[スライドデック](https://docs.google.com/presentation/d/1PT8x7lUR0-X-M_H7n_tvYKsC1HRtKTiMy0BtmtPcO4Q/edit?usp=sharing)と [ミーティングアジェンダ](https://docs.google.com/document/d/1eHhOfgqllzAiGOf6gI98wegaxm5-8eLnZ8Qpq7KOLaY/edit?usp=sharing)はセッションに沿っています。

2 つのセッションの最初のセッションの録画はこちらで見られます:

{{< youtube "jvjBgC3Bi2s" >}}

### コーチング入門 {#introduction-to-coaching}

{{< youtube "9qUlp8LrduM" >}}

2020-12-03 に 50 分のコーチング入門 [ライブラーニング](/handbook/people-group/learning-and-development/#learning-delivery-methods---definitions) セッションを開催しました。録画は、[スライドデック](https://docs.google.com/presentation/d/1jOAZQkIJq9iU7ho6a09AOANKJs7W7IwnbVYBIlX9kmk/edit?usp=sharing)と [アジェンダ](https://docs.google.com/document/d/1UIyIeyCcWCtNcOR2Wz5jvbSdKHI2OanLoM-WR7Gtknw/edit?usp=sharing)に沿っています。

## コーチングマネージャーコンピテンシー {#coaching-manager-competency}

オールリモート組織では、コーチングは、マネージャーがキャリアを進歩する際に開発し改善するための重要なスキルです。コーチングは、定期的なコーチングの会話を通じて、チームメンバーのキャリア開発を促進するのに役立ちます。コーチングは、励まし、サポート、共同問題解決、目標設定、[フィードバック](/handbook/people-group/guidance-on-feedback/)を通じて、チームメンバーが行動を変え、パフォーマンスを改善し、コミットメントを維持するのを助けます。

**マネージャーの [コーチングコンピテンシー](/handbook/people-group/competencies/)のスキルと行動:**

- 定期的なコーチングセッションを提供することで、チームメンバーの職務パフォーマンスの成長を促進する
- チームメンバーの長期的なキャリア目標を理解し、それを達成するためのメンターおよびガイドとして行動する
- チームメンバーと継続的に開発およびキャリア計画のダイアログを実施する
- 自分のリーダーシップスタイル、チームとチームの状況への影響について反省する
- 新しいコーチングアプローチとテクニックを求め、スキルを継続的に開発することの意味を例示する
- [パフォーマンス不足](/handbook/leadership/underperformance/)のケースに対処するための効果的な戦略を提供し、組織全体の他のリーダーにそれを浸透させる

### 追加のコーチングリソース {#additional-coaching-resources}

- [コーチとしてのリーダー - Harvard Business Review 記事](https://hbr.org/2019/11/the-leader-as-coach)
- [コーチはあなたのために何ができるか？ - Harvard Business Review 記事](https://hbr.org/2009/01/what-can-coaches-do-for-you)
- [リモートの従業員をコーチングするための 4 つのヒント](https://insideoutdev.com/blog/4-Tips-for-Coaching-Remote-Employees)
- GROW、CLEAR、OSCAR を含む [コーチングモデル](https://www.businessballs.com/coaching-and-mentoring/)の概要と比較
- GROW モデルの代替としての [CLEAR コーチングモデル](https://www.youtube.com/watch?v=m2KVZzCMJd0)に関する 10 分の動画
