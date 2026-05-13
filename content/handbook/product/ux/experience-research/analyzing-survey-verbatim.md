---
title: "サーベイ自由記述の分析"
description: "サーベイ自由記述の分析方法に関するガイドライン"
upstream_path: /handbook/product/ux/experience-research/analyzing-survey-verbatim/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

[自由記述（verbatim）は自由形式の質問に提出されたコメント](https://goascribe.com/blog/verbatim-coding/)（例: 「GitLab の使いやすさについて何か共有したいことはありますか？」）で、通常はサーベイで尋ねられ、回答者が自由形式で回答を入力できる項目です。自由記述分析は、それらの回答全体にわたるテーマを探すことで、ユーザーエクスペリエンスのような様々な現象を理解するのに役立ちます。

自由記述を分析するプロセスは通常「コーディング」と呼ばれますが、これはプログラミング言語でコンピュータプログラムを書くこととは関係なく、自由記述が伝えようとしている内容を表すコードを割り当てるプロセスを指します。

- **コード**は[「テキストのセグメントのラベルとして機能する単語またはフレーズ」](https://www.nngroup.com/articles/thematic-analysis/#:~:text=Definition%3A%20A%20code%20is%20a,a%20hashtag%20describes%20a%20tweet)です。
- **コーディング**は[「テキストのセグメントに適切なコードを付けるプロセス」](https://www.nngroup.com/articles/thematic-analysis/#:~:text=Definition%3A%20A%20code%20is%20a,a%20hashtag%20describes%20a%20tweet)を指します。
- **テーマ**は、ユーザーエクスペリエンスについて何かを伝えてくれるコードのグループを表します。

自由記述を分類するアプローチには 2 つの異なる方法があります。

- **トップダウン:** 事前に決められたカテゴリーのリストを取り、それを個々の自由記述に割り当てる方法です。このアプローチは、自由記述に観察されるコードやテーマの種類について既に感覚を持っているときに最適です。
- **ボトムアップアプローチ:** 各データポイントを 1 つずつ分析してカテゴリーを作成し、それらをカテゴリーにグループ化し、最終的に回答サンプル全体を意味的に表現するコードとテーマができるまで洗練していく方法です。このアプローチはより時間がかかりますが、観察されるコードやテーマの種類について感覚がない場合や、分析でバイアスを抑制したい場合に特に有用です。ボトムアップアプローチは、[グラウンデッドセオリーアプローチ](https://en.wikipedia.org/wiki/Grounded_theory)と呼ばれることもあります — ただし、ここで私たちが説明するステップはより学術的な追求の簡略版にあたるため、その用語は使っていません。

自由記述の分析は、通常以下のステップに従います。実際に取るステップは、リサーチプロジェクトの範囲とゴールによって変わります。

## 自由記述分析のステップ

### トップダウンアプローチ

1. データを並べ替え・「クレンジング」して特定する
1. 最終テーマを割り当てる
1. サマリーテーブルを作成する

### ボトムアップアプローチ

1. データを並べ替え・「クレンジング」して特定する
1. *データに慣れる
1. *コードの初期ドラフトを割り当てる
1. *コードを再帰的に洗練・集約する
1. *コードをテーマに昇格させる（反復的に）
1. 最終テーマを決定する
1. 最終テーマを割り当てる
1. サマリーテーブルを作成する

*= ユーザーエクスペリエンスを反映するテーマのセットができるまでこれらのステップを繰り返す

## 自由記述分析の各ステップに関する詳細なメモ

### 1. **データを並べ替え・「クレンジング」して特定する。**

分析に含められるデータを選択します。「クレンジング」という言葉は、分析に含めるのに役立たないデータを取り除くプロセスを指して使っています。あなたのデータの一部は分析に含めるのに適していないでしょう。

- **一部の自由記述は曖昧すぎて実行可能でないため、分析から除外する必要があります**。例えば、「It's fine」という回答はユーザーエクスペリエンスについて多くを伝えていないので、NA としてタグ付けして脇に置きます。

- **一部の自由記述は、リサーチのゴールや質問に直接結びついていないため実行可能でないので、分析から除外する必要があります**。例えば、SUS の自由記述分析では、ポジティブなだけの自由記述（例: 'GitLab is a fine tool to help developers'）は含めません。これは、GitLab の現在のユーザビリティ問題を理解し改善点を特定するという私たちのリサーチゴールに情報を提供しないためです。

- **一部の自由記述には多くの異なるアイデアや考えが含まれていることがあります。** この場合、それらの自由記述を分割して、1 つのトピックについてのみ語るようにクレンジングすることができます。これにより、コードをよりクリーンに割り当てられます。例えば、SUS 分析では、以下の表の自由記述の段落をナビゲーションについてのものと検索についてのものの 2 つの別々の自由記述に分割しました。これにより、元の自由記述の各セクションにコードを割り当てやすくなります。

| 元の自由記述 | 自由記述 1 | 自由記述 2 |
| ------ | ------ | ------ |
|   "I think there are many things about GitLab, which I am not aware of especially the navigation, our team manages the tickets in GitLab but I was never able to find it in GitLab, I think search needs to be very much improved in GitLab providing more insights in the search bar or dashboard itself regarding everything."     |   "I think there are many things about GitLab, which I am not aware of especially the navigation, our team manages the tickets in GitLab but I was never able to find it in GitLab"     |   "I think search needs to be very much improved in GitLab providing more insights in the search bar or dashboard itself regarding everything."     |

### 2. **データに慣れる。**

すべてのデータを読むか、500 を超える非常に大きなデータセットを扱っている場合は 25% のランダムサンプルを読みます — 完全なデータセットで遭遇する自由記述の感覚を得るのに十分な量を読みます。目標は、データがどのようなものかについて一般的な感覚を得ることです。データを頭にロードして感覚をつかみ、最終的に作成するテーマがデータセットを反映していることを確認できるようにします。

### 3. **コードの初期ドラフトを割り当てる。**

開始するには、後でレビューするコードの初期ドラフトを作成します。これは分析の生成的な部分なので、ここで時間をかけすぎないようにします。代わりに、これは自由記述で見たことに関する短いメモと考えることができます。目標は、初期ドラフトのコードリストを見て、どのコードを集約できるかを把握できるようにすることです。

以下の表では、分析の最後に同じテーマに整合した 5 つの例の自由記述を使用しています。これらの自由記述は、分析の初期段階ではこのようにグループ化されないことに注意してください。

例の表:

| SUS の自由記述 | コードの初期ドラフト |
| ------ | ------ |
|    I find the new "rules" section of gitlab-ci not intuitive. The former system was less complex and easier to understand.    |   CI rules not intuitive, complex     |
|   Pipelines are too complex and confusing     |   Pipelines confusing     |
|   My experience is that is really overly complex for my  use case. I came over from bitbucket and this seems to just have way too much going on, when I just want to simply have a private repo that me and my small team work on.     |   Lots going on, wants simplicity     |
|   I find the way different pipelines are presented to be confusing and it's hard to know which are running     |    Pipeline presentation confusing    |
|    Any simplification wherever possible is welcome    |   Wants simplicity     |

注: スプレッドシートで分析を行っている場合、これまでに割り当てたすべてのコードを集約する [ピボットテーブル](https://www.statology.org/crosstab-google-sheets/) を作成して、これまでに割り当てたコードの初期ドラフトをすばやく見渡せるようにすると役立ちます。次のステップであるコードの洗練と集約に進む前に、すべての自由記述の完全なデータセットでこれを行うのがベストプラクティスです。

### 4. **コードを再帰的に洗練・集約する。**

すべての自由記述、または少なくともさらに 25% を見終わったら、コードを再訪して洗練し、新しい自由記述やデータセット全体をより正確に反映するように改善できるかを確認します。例えば、「feels lost」というコードのドラフトから始めて、より多くの自由記述をそのコードでカバーするために「confusing」に移行することがあります。以下の表により多くの例を含めました。

分析のこの部分では、次のような質問を自分に投げかけるべきです。

- このコードを違う方法でリフレームすれば、結合できるか？
- これらの 2 つのコードは本当にそれほど違うのか？
- コードを結合しすぎて、各自由記述について意味のあることを言えなくなっていないか？
- 読んだ中で、このコードリストに反映されていないものはあるか — もしあれば、それを反映する新しいコードを作成する必要があるか？

注: 分析にスプレッドシートを使用している場合、コードの初期ドラフトに基づいてソート（例: アルファベット順にソート）し、検索機能を使用（例: 各コード内で complex という単語が使われているすべての箇所を検索）して、それらを組み合わせる方法を見つけるのに役立てます。

例の表:

| SUS の自由記述 | コードの初期ドラフト |
| ------ | ------ |
|    I find the new "rules" section of gitlab-ci not intuitive. The former system was less complex and easier to understand.    |   CI rules not intuitive, complex     |
|   Pipelines are too complex and confusing     |   Pipelines confusing     |
|   My experience is that is really overly complex for my  use case. I came over from bitbucket and this seems to just have way too much going on, when I just want to simply have a private repo that me and my small team work on.     |   Lots going on, wants simplicity     |
|   I find the way different pipelines are presented to be confusing and it's hard to know which are running     |    Pipeline presentation confusing    |
|    Any simplification wherever possible is welcome  | w ants simplicity    |

### 5. **コードをテーマに昇格させる（反復的に）。**

集約されたコードのリストができたら、それらが示唆する根本的なテーマを探し、テーマを割り当てて洗練します。分析のこの部分では、リサーチ質問に答えるのに役立つテーマを特定する作業をしています。

そのために、次のような質問を自分に投げかけてください。

- このコードはユーザーエクスペリエンスについて何を伝えるか？
- このテーマを作ることで、コードを結合できるか？
- このテーマはリサーチ質問に対処するか、または私のリサーチゴールに整合しているか？
- 集約テーマを作成すると、データセット全体を見たときに見えていたデータのニュアンスを失うほど広くなりすぎないか？
- スプレッドシートで作業している場合、元のコードをテーマとは別の列に保つと、作業を失わずにイテレーションできます。

例の表:

| SUS の自由記述 | コードの初期ドラフト | コードの次のイテレーション |
| ------ | ------ |  ------ |
|    I find the new "rules" section of gitlab-ci not intuitive. The former system was less complex and easier to understand.    |   CI rules not intuitive, complex     | CI rules complex |
|   Pipelines are too complex and confusing     |   Pipelines confusing     | Pipelines confusing |
|   My experience is that is really overly complex for my  use case. I came over from bitbucket and this seems to just have way too much going on, when I just want to simply have a private repo that me and my small team work on.     |   Lots going on, wants simplicity     | wants simplicity - private repo for team |
|   I find the way different pipelines are presented to be confusing and it's hard to know which are running     |    Pipeline presentation confusing    | Pipelines confusing |
|    Any simplification wherever possible is welcome    |   wants simplicity     | wants simplicity |

### 6. **最終テーマを決定する。**

通常、テーマは最大 10 個までにしたいところです。それは、テーマが多ければ多いほど、データを明確に読み取るのが難しくなるからです。一部のテーマは結合できないこともあり、それは問題ありません。

ここでは概念的にも、実際の休憩を取るという意味でも、テーマ数を減らす方法を考えるために一歩下がる必要があるかもしれません。例えば、SUS 自由記述分析では、各自由記述（例:「Pipelines are too complex and confusing」）について別途トピックリスト（例: Pipelines）を作成し、ユーザーエクスペリエンスを反映するより短いテーマリスト（例: テーマ: complex / confusing）を作成できるようにしました。これにより、SUS の自由記述分析のテーマを 23 個のリストから 10 個のより小さなリストに減らすことができました。データを見る方法、つまり 2 つの異なる軸を作ることは [アキシャルコーディング](https://en.wikipedia.org/wiki/Axial_coding) と呼ばれる手法の一形態ですが、これはこのハンドブックページの範囲を少し超えています。要するに、互いにどう関係しているかを見るために異なるタイプのテーマを作ることが役立つ場合があるということです。追加のコーディング軸を使う別の例として、各自由記述を価電性（valence）— 例えば表現されているポジティブまたはネガティブな感情 — でコーディングすることで、表現されたユーザー感情が異なるトピック（例: どのトピックが最もポジティブに語られたか）にどう関係するかを見ることができます。

例の表:

| SUS の自由記述 | 最終コード | トピック | SUS のテーマ |
| ------ | ------ |  ------ |  ------ |
| Pipelines are too complex and confusing   |  Pipelines confusing |  Pipelines  | Complex/Confusing |

### 7. **最終テーマを割り当てる。**

テーマの最終リストができたら、データに戻ってすべての自由記述にテーマが割り当てられていることを確認する必要があります。データセット内のテーマの全体的なパーセンテージをレポートできるように、1 つの自由記述に 1 つのテーマを割り当てるのがベストプラクティスです。

例の表:

| SUS の自由記述 | 最終コード | トピック | SUS のテーマ |
| ------ | ------ |  ------ |  ------ |
|    I find the new "rules" section of gitlab-ci not intuitive. The former system was less complex and easier to understand.    |   CI rules complex     | CI /CD | Complex/Confusing |
|   Pipelines are too complex and confusing     |   Pipelines confusing     | Pipelines  | Complex/Confusing |
|   My experience is that is really overly complex for my  use case. I came over from bitbucket and this seems to just have way too much going on, when I just want to simply have a private repo that me and my small team work on.     | wants simplicity - private repo for team | Repository | Complex/Confusing |
|   I find the way different pipelines are presented to be confusing and it's hard to know which are running  | Pipelines confusing |  Pipelines  | Complex/Confusing |
|    Any simplification wherever possible is welcome    |   wants simplicity     | Not applicable | Complex/Confusing |

### 8. **各テーマの例を含むサマリーテーブルを作成する。**

最終テーマを定義して割り当てた後（または定義中）、各テーマの例と簡単な説明を含む表を作成します。これにより、ステークホルダーが何をしたかを理解しやすくなります。

例の表:

| SUS の自由記述 | 簡単な説明 | SUS 自由記述の例 |
| ------ | ------ |  ------ |
| Complex/Confusing | ユーザーが GitLab には多くのことが行われていることや、非常に複雑であることを指摘 | "I think the way different pipelines are presented to be confusing and it's hard to know which are running" |

分析に取り組むためのまとまった時間を取りたいところです。一般的に、分析の完了には 1〜2 週間かかります。分析中にコンテキストスイッチを必要とする場合は、これまで生成したコードやテーマに再度慣れる時間を費やす必要があるため、ずっと長くかかります。また、休憩を取りすぎるとデータセットをレビューして、テーマがデータセット全体で見たものを反映していることを確認する必要が出てきます。
