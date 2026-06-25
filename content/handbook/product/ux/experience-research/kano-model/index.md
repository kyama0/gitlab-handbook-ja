---
title: "機能の優先順位付けのための Kano サーベイ"
description: "Kano モデルは、私たちが構築する予定の機能について考えるためのシンプルで強力な方法を提供します。"
upstream_path: /handbook/product/ux/experience-research/kano-model/
upstream_sha: 62edb06625b18110a4f377cb1d2c733fed49f122
translated_at: "2026-06-25T07:39:40+09:00"
translator: codex
stale: false
lastmod: "2026-06-24T15:19:10-04:00"
---

## Kano モデル

[Kano モデル](https://www.qualtrics.com/en-au/experience-management/research/kano-analysis/)は、認知された製品機能とユーザー満足度を結びつける理論です。1980 年代に日本の狩野紀昭教授によって開発されました。

Kano モデルは、製品機能の開発がユーザー満足度にどのように影響するかに基づいて、5 つのカテゴリーに分類します:

- **当たり前品質（Must-be）**: 初期採用に不可欠な機能ですが、どれだけ投資しても高い満足度にはつながりません。
- **一元的品質（Performance）**: （別名 One-dimensional）これらの望ましい機能への追加投資に応じて満足度が高まります。
- **魅力的品質（Attractive）**: あったらいい機能ですが、うまく実装すれば満足度が急上昇します。
- **無関心品質（Indifferent）**: これらの機能への投資はユーザー満足度を増加させたり減少させたりしません。
- **逆品質（Reverse）**: これらの機能は持っているよりも持っていないほうが実は良いです。

![KanoImage](/images/product/ux/ux-research/kano-model/KanoImage.png)

機能がどのカテゴリーに属するかがわかれば、開発で最も重要なものに優先順位を付けることができます。理論上、当たり前品質カテゴリーの機能を最初に優先し、次に一元的品質、そして魅力的品質を優先するべきです。各カテゴリーに属する機能の数によっては、製品チームと協力して優先順位を決定する必要があるかもしれません。

### なぜ使うのか？

Kano モデルを使うことで、新製品の機能を優先順位付けする際により情報に基づいた決定を下し、これらの機能がユーザーに共感を呼ぶかどうかとその理由をよりよく理解するのに役立ちます。

### どう使うのか？

Kano モデルは、特に機能の優先順位付けに情報を提供するときに、顧客データとともに最もよく活用されます。このデータを収集するには、Kano 分析モデルの一部として開発された[標準化された質問票](/handbook/product/ux/experience-research/kano-model/#standardized-questionnaire)を使ってリサーチスタディを実施することをお勧めします。

リサーチの観点からは Kano スタディのサーベイを設計するのはどちらかというとシンプルですが、プロダクトマネージャーには多くの準備が必要です – 特に機能と製品領域の現状を説明することです。次のセクションでは、GitLab で Kano スタディを設計する詳細について議論します。

## Kano サーベイの例

下のプロジェクトでは、新しい GitLab 機能のセットを優先順位付けする方法を理解するために Kano サーベイが開発されました。

例プロジェクト: [CI 機能優先順位付けのためのサーベイ](https://gitlab.com/gitlab-org/ux-research/-/issues/1027)

プロジェクト要約: *チームは、ユーザーに利益をもたらすと考える 12 の新機能の構築を検討していました。新機能を構築するのはコストがかかり時間もかかるので、チームは各機能についてユーザーがどう感じるか、優先順位とともに理解したいと思いました。目標は、チームが最初に構築すべき 12 のうちのどれかをより明確に理解することでした。*

12 の機能についてのフィードバックを得るために、チームは各機能について短い要約や説明を開発し、繰り返し改善する必要がありました。次のセッションでは、機能説明を作成しサーベイに転送するプロセスの詳細を提供します。

### 準備

スタディの成功にはよく定式化された機能説明が不可欠です。参加者は、聞かれている機能とその機能の価値を正確に理解できなければ、率直なフィードバックを提供できません。明確に理解されるのに十分な詳細を提供することを保証するために、機能が綿密な改善プロセスを経た後にのみサーベイを作り始めることが理にかなっています。

#### カテゴリーの説明

私たちは通常、既存の機能のコンテキストで新機能を開発します。そのため、最初に提示される機能を含む現在のエクスペリエンスを参加者に説明する必要があります。

**カテゴリー説明の例:**

> GitLab における継続的インテグレーションパイプラインは、プロジェクトの Git リポジトリ内のバージョン管理ファイルとして定義されます。このファイルは「gitlab-ci.yml」と呼ばれ、ユーザーはこのファイルを編集してリポジトリにプッシュすることで CI パイプラインを構成します。パイプラインはジョブとステージで構成されます。ジョブはパイプラインが何をすべきかを定義します。ステージは 1 つまたは複数のジョブで構成され、ジョブが実行される順序を定義します。ステージ内のすべてのジョブは並列に実行され、それらすべてが成功すれば、パイプラインは次のステージに進みます。前提条件、例外などのさまざまな種類の条件をパイプラインに指定できます。プロジェクトをローカルでクローンするか、オンラインテキストエディタを使って、パイプライン YAML ファイルを編集できます。

#### 機能説明

機能説明を作成する際は、これらのガイドラインに従ってください:

1. MVC ではなく機能を記述する
   - 調査結果は、合理的に長い期間にわたって関連性があるべきです。言い換えれば、1 つまたは 2 つのマイルストーンで開発できないようなものでしょう。
1. 機能説明の認識におけるバイアスを避けるため、**シンプル**で**中立的**な言葉を使う
   - `sections` や `categories` のような GitLab の専門用語は使わない
   - `easy-to-use`、`better`、`faster`、`more efficient` のようなセールスやマーケティングの言葉は使わない
   - 悪い例: `Run Dynamic Application Security Testing (DAST) in the cloud as part of your CI jobs on cloud based runners. This will make deploying and testing applications in a sandbox significantly more efficient.`
   - 良い例: `Run Dynamic Application Security Testing (DAST) in the cloud as part of your CI jobs on cloud based runners, to deploy and test applications in a sandbox for potential vulnerabilities.`
1. 機能をシステムのコンテキストに設定する
   - 一貫した用語を使い、機能説明が全体のカテゴリー説明に適合することを確認します。
1. 各説明を 1 段落のテキストにすることを目指す
   - 通常の段落 1 つ未満では十分でない可能性があります。一方、テキストが長すぎると、参加者はコンテンツを流し読みしがちで、機能を完全に把握できなくなります。
1. 新機能のみを含める
   - 既に開発された機能を含めることはベンチマークを設定するかもしれませんが、ほとんど実行可能ではないため、このコンテキストでは役に立ちません。
1. 説明を画像や GIF で豊かにする
   - 視覚的補助があると、参加者が機能説明で説明されているコンセプトを理解するのに役立ちます。

一般に、機能説明は次の基本構造に従うべきです:

- 機能: ユーザーが UI で何を見ることができるか
- 動作: 何をするか
- 価値: なぜそれを導入したいのか

**機能説明の例:**

> オンラインパイプラインエディタの隣に表示される CI ジョブコードスニペットのリスト。このリストからジョブ YAML をコピーし、パイプラインコードに貼り付けることで、これらのコードスニペットをパイプラインの構成要素として使用します。したがって、新しいパイプラインの作成プロセスにおけるステップが少なくなります。

- 機能説明のその他の例については、この[CI features list Google Doc](https://docs.google.com/document/d/e/2PACX-1vQff1-XyGoZeWaAyHhANrPjIQ54WXX8Je06_DzIsUtMK6ZQ6IhzMrvM3PGdXJLzu_Q9Z0Jz_5W41FCm/pub)を参照してください。

#### ヒントとコツ

{{% alert title="💡 **ヒント**" color="primary" %}}
: サーベイの準備には多くの時間がかかり、追跡しにくいかもしれません。労力を追跡するために[別の Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/1143) を作成すると、メインのリサーチ Issue をより小さく管理可能な部分に分解するのに役立ちます。
{{% /alert %}}

{{% alert title="💡 **ヒント**" color="primary" %}}
機能説明を非同期で作成するには多くの時間がかかります。チームの進みが十分に速くないと感じる場合は、[非同期から同期コミュニケーションに切り替えて](/handbook/company/culture/all-remote/asynchronous/#gitlab-experts-advise-on-when-to-use-sync-vs-async)ください。
{{% /alert %}}

### サーベイ

#### 標準化された質問票

Kano モデルの標準化された質問票は、関心のある各機能について尋ねる 2 つの質問で構成されています:

<table style="width:100%">
  <tr>
    <th>機能的質問</th>
    <th>非機能的質問</th>
  </tr>
  <tr>
    <td>
      <p>もしあなたがこの機能を<b>持っていた</b>らどう感じますか？</p>
      <ul>
        <li>とても満足する</li>
        <li>期待通りである</li>
        <li>どちらでもない</li>
        <li>仕方なく受け入れる</li>
        <li>不満である</li>
      </ul>
    </td>
    <td>
      <p>もしあなたがこの機能を<b>持っていなかった</b>らどう感じますか？</p>
      <ul>
        <li>とても満足する</li>
        <li>期待通りである</li>
        <li>どちらでもない</li>
        <li>仕方なく受け入れる</li>
        <li>不満である</li>
      </ul>
    </td>
  </tr>
</table>

標準化された質問票を使う利点は、基本的にすべてのリサーチデザインが既に完了しており、以前のスタディから再利用できることです。また、この手法に一貫したアプローチを取ることで、プロセスにエラーを導入するリスクを減らせます。

リサーチプランの例については、過去の[Kano スタディプラン（Google Docs）](https://docs.google.com/document/d/e/2PACX-1vRi6Dq6sDBtkggW5oEnmkTsLGx6WRvKrs8EV4aXaAhIlEpOgykK2PJEEp8uj2UfEymbQgLJYBVavR1c/pub)を参照してください。

#### 質問票の構造

[Qualtrics](/handbook/product/ux/experience-research/surveys/qualtrics/) を使って質問票を作成します。関連する質問（機能的および非機能的質問）と一緒に各機能説明は別のブロックに提示されるべきです。これにより、参加者は各機能について別の機能とは独立して回答できます。また、提示順序が参加者のフィードバックに影響を与えないように、各ブロックの順序をランダム化することをお勧めします。

[#1027](https://gitlab.com/gitlab-org/ux-research/-/issues/1027) で使用したサーベイの[例](https://gitlab.eu.qualtrics.com/jfe/preview/SV_3VoczISwBuK8ab3?Q_CHL=preview&Q_SurveyVersionID=current)

#### データ収集と分析

提供された質問票を使って、データを収集し、分析し、定量と定性の両方のアプローチを使って結果を報告できるようになります。

##### 定性アプローチ

このアプローチは、優先順位付けの背後にある*なぜ*をより理解するのに役立ちます。最初に定性データを収集して分析することは、説明が紛らわしいか不明確かどうかなど、機能説明の問題を発見するのに役立ち、より大規模な参加者セットに送る前に説明を修正できます。[定量アプローチ](/handbook/product/ux/experience-research/kano-model/#the-quantitative-approach)を行った後、サーベイサンプルからの数人のユーザーと話して、評価を提供した理由についての追加のフィードバックを得ることもできます。

参加者のタスクが質問票を経て自分の回答の背後にある推論を説明することである、5〜10 のモデレーター付きセッション、または 20〜30 のモデレーターなしセッションを実施することをお勧めします。

例 [Dovetail プロジェクト](https://dovetailapp.com/projects/5sVL84ZlY492J2jOt5W77S/v/2d3SBCrdPoM8QEYzTv6l3O)では、より大規模なサーベイで応答を集める前と後にモデレーター付きインタビューが実施されました。

##### 定量アプローチ

ターゲットオーディエンスの 50〜80 人のユーザーから応答を収集し、[The Complete Guide to Kano Model](https://foldingburritos.com/blog/kano-model/)で説明されている離散分析を使って分析することをお勧めします。このアプローチは、優先順位付けの決定を裏付けることができる「数値」を提供しますが、優先順位付けの背後にある理解は依然として欠けます。

分析にはこの[スプレッドシートテンプレート](https://docs.google.com/spreadsheets/d/14D-ayhw15J9o7ixzFh7pda_SZQkhZTRsyJvHi_5JXbk/edit?usp=sharing)（GitLab 内部リンク）を使用します。

定量アプローチからの出力をまとめたサンプル[レポート](https://docs.google.com/presentation/d/1aLt3QkYthTlbjBig0efWlbA11FkXBTNZdfh4Yk3o3g4/edit?usp=sharing)（GitLab 内部リンク）。

定量と定性のアプローチを取ることで、データの背後にあるより完全なストーリーが得られます。優先順位付けに加えて、参加者がなぜそのようにスコアを付けたかを説明することもできます。これら 2 つのアプローチを組み合わせて、Kano モデルスタディを最大限に活用してください。

## 追加リソース

- 記事: [The Complete Guide to Kano Model](https://foldingburritos.com/blog/kano-model/)
- 記事: [Kano Model — Ways to use it and NOT use it](https://medium.com/design-ibm/kano-model-ways-to-use-it-and-not-use-it-1d205a9cf808)
- ビデオ: [Building a Winning UX Strategy Using the Kano Model](https://www.youtube.com/watch?v=Hr1rN3jibIk&feature=youtu.be)

## GitLab で実施された Kano リサーチの例

- [モニタリング機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/merge_requests/28)
- [CI 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1027)
- [セキュリティインサイト機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1295)
- [GitLab Plus 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1128)
