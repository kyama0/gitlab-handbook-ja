---
title: "機能の優先順位付けのための Kano アンケート"
description: "Kano モデルは、構築予定の機能について考えるためのシンプルで強力な方法を提供します。"
upstream_path: /handbook/upstream-studios/experience-research/kano-model/
upstream_sha: a15c0bfc1dd89fbbe4aff8969605eb60ab63f1ca
lastmod: "2026-07-16T17:32:42-03:00"
translated_at: "2026-07-17T07:18:26+09:00"
translator: codex
stale: false
---

## Kano モデル {#kano-model}

[Kano モデル](https://www.qualtrics.com/en-au/experience-management/research/kano-analysis/)は、認識されるプロダクトの機能とユーザー満足度を結び付ける理論です。1980 年代に日本の狩野紀昭教授によって開発されました。

Kano モデルでは、機能を開発することがユーザー満足度に与える影響に基づき、プロダクト機能を 5 つのカテゴリに分類します:

- **必須:** 初期導入に不可欠な機能ですが、どれほど投資しても高い満足度にはつながりません。
- **性能:** （一次元的とも呼ばれます）これらの望まれる機能に追加投資すると、満足度が高まります。
- **魅力的:** あればうれしい機能ですが、うまく実装すれば満足度が急上昇します。
- **無関心:** これらの機能に投資しても、ユーザー満足度は増減しません。
- **逆:** これらの機能は、あるよりもない方が実際には良いものです。

![Kano の画像](/images/product/ux/ux-research/kano-model/KanoImage.png)

機能がどのカテゴリに分類されるかが分かれば、開発する最も重要な機能の優先順位を付けられます。理論上は、まず必須カテゴリの機能を優先し、次に性能、そして魅力的の順にする必要があります。各カテゴリに分類される機能の数によっては、優先順位を決定するためにプロダクトチームと協力する必要があります。

### 使用する理由 {#why-use-it}

Kano モデルを使用すると、新しいプロダクトの機能に優先順位を付ける際により多くの情報に基づく決定を行い、これらの機能がユーザーの共感を得る、または得ない理由をよりよく理解できます。

### 使用方法 {#how-to-use-it}

Kano モデルは、特に機能の優先順位付けに情報を提供する場合、顧客データとともに最も効果的に活用できます。このデータを収集するために、Kano 分析モデルの一部として開発された[標準化された質問票](/handbook/upstream-studios/experience-research/kano-model/#standardized-questionnaire)を使用してリサーチ調査を実施することを推奨します。

Kano 調査用のアンケート設計はリサーチの観点ではかなり単純ですが、Product Manager による多くの準備が必要です。特に、機能とプロダクト領域の現在の状態を説明する必要があります。以下のセクションでは、GitLab で Kano 調査を設計する詳細について説明します。

## Kano アンケートの例 {#kano-survey-example}

以下のプロジェクトでは、新しい GitLab 機能のセットの優先順位付け方法を理解するために Kano アンケートを開発しました。

プロジェクト例: [CI 機能の優先順位付けに関するアンケート](https://gitlab.com/gitlab-org/ux-research/-/issues/1027)

プロジェクトの概要: *チームは、ユーザーの役に立つと考えた 12 個の新機能を構築することを検討していました。新機能の構築にはコストと時間がかかるため、チームは優先順位とともに、ユーザーがそれぞれの機能についてどう感じるかを理解したいと考えていました。目標は、チームが 12 個のうちどれを最初に構築すべきかをより明確に理解することでした。*

12 個の機能についてフィードバックを得るために、チームは各機能の短い要約または説明を作成し、それをイテレーションする必要がありました。次のセッションでは、機能の説明を作成し、アンケートへ移すプロセスの詳細を説明します。

### 準備 {#preparation}

適切に作成された機能の説明は、調査の成功に不可欠です。参加者は、尋ねられている機能とその機能の価値を正確に理解できる必要があり、そうすることで正直なフィードバックを提供できます。機能が明確に理解できる十分な詳細を提供することを確実にするため、機能が詳細な改善プロセスを経た後にのみアンケートの作成を開始するのが理にかなっています。

#### カテゴリの説明 {#category-description}

通常、新しい機能は既存の機能のコンテキストで開発します。そのため、最初に、提示される機能を含む現在の体験を参加者に説明する必要があります。

**カテゴリの説明例:**

> GitLab の継続的インテグレーションパイプラインは、プロジェクトの Git リポジトリ内でバージョン管理されるファイルとして定義されます。このファイルは「gitlab-ci.yml」と呼ばれ、ユーザーはこのファイルを編集してリポジトリにプッシュすることで CI パイプラインを設定します。パイプラインはジョブとステージで構成されます。ジョブはパイプラインで行うことを定義します。ステージは 1 つまたは複数のジョブで構成され、ジョブが実行される順序を定義します。ステージ内のすべてのジョブは並列で実行され、すべて成功するとパイプラインは次のステージに進みます。前提条件、例外など、さまざまな種類の条件をパイプラインに指定できます。プロジェクトをローカルにクローンするか、オンラインテキストエディターを使用してパイプライン YAML ファイルを編集できます。

#### 機能の説明 {#feature-descriptions}

機能の説明を作成する際は、次のガイドラインに従います:

1. MVC ではなく機能を説明する
   - 調査結果は、合理的に長い期間にわたり関連性を持つ必要があります。言い換えると、1 つまたは 2 つのマイルストーンで開発できるものではない可能性が高いです。
1. 機能の説明がどのように認識されるかにおけるバイアスを避けるため、**シンプル**で**中立的**な言葉を使用する
   - `sections`、`categories` のような GitLab 用語は使用しない
   - `easy-to-use`、`better`、`faster`、`more efficient` のようなセールスやマーケティングの言葉は使用しない
   - 悪い例: `クラウドベースのランナーで CI ジョブの一部としてクラウド上で Dynamic Application Security Testing（DAST）を実行します。これにより、サンドボックスでのアプリケーションのデプロイとテストが大幅に効率化されます。`
   - 良い例: `クラウドベースのランナーで CI ジョブの一部としてクラウド上で Dynamic Application Security Testing（DAST）を実行し、潜在的な脆弱性についてサンドボックスでアプリケーションをデプロイしてテストします。`
1. 機能をシステムのコンテキストに位置付ける
   - 一貫した用語を使用し、機能の説明が全体のカテゴリ説明に合うようにします。
1. 説明ごとに 1 段落のテキストを目指す
   - 通常の 1 段落未満では不十分な場合があります。一方で、テキストが長すぎると、参加者は内容をざっと読む可能性が高く、機能を完全に把握できなくなります。
1. 新しい機能のみを含める
   - すでに開発されている機能を含めるとベンチマークを設定できますが、ほとんどの場合は実行可能ではないため、このコンテキストでは役に立ちません。
1. 説明を画像または GIF で充実させる
   - 視覚的な補助があると、参加者が機能の説明で説明される概念を理解するのに役立ちます。

一般に、機能の説明は次の基本構造に従う必要があります:

- 機能: ユーザーが UI で確認できるもの
- 挙動: 何をするか
- 価値: なぜ導入したいのか

**機能の説明例:**

> オンラインパイプラインエディターの横に表示される CI ジョブコードスニペットのリスト。このリストからジョブ YAML をコピーしてパイプラインコードに貼り付けることで、これらのコードスニペットをパイプラインの構成要素として使用します。これにより、新しいパイプラインを作成するプロセスのステップが少なくなります。

- 機能の説明の例については、こちらの [CI 機能リスト Google Doc](https://docs.google.com/document/d/e/2PACX-1vQff1-XyGoZeWaAyHhANrPjIQ54WXX8Je06_DzIsUtMK6ZQ6IhzMrvM3PGdXJLzu_Q9Z0Jz_5W41FCm/pub)を参照してください。

#### ヒントとコツ {#tips--tricks}

{{% alert title="💡 **ヒント**" color="primary" %}}
: アンケートの準備には多くの時間がかかり、追跡が難しい場合があります。取り組みを追跡するために[別の Issue](https://gitlab.com/gitlab-org/ux-research/-/issues/1143)を作成すると、主なリサーチ Issue をより小さく管理しやすい部分に分割するのに役立ちます。
{{% /alert %}}

{{% alert title="💡 **ヒント**" color="primary" %}}
機能の説明を非同期で作成するには多くの時間がかかる場合があります。チームが十分に迅速に前進していないと感じる場合は、[同期コミュニケーションに切り替えます](/handbook/company/culture/all-remote/asynchronous/)。
{{% /alert %}}

### アンケート {#survey}

#### 標準化された質問票 {#standardized-questionnaire}

Kano モデルの標準化された質問票は、関心のある各機能について尋ねる 2 つの質問で構成されます:

<table style="width:100%">
  <tr>
    <th>機能がある場合の質問</th>
    <th>機能がない場合の質問</th>
  </tr>
  <tr>
    <td>
      <p>この機能を<b>持っていたら</b>どう感じますか？</p>
      <ul>
        <li>とても嬉しい</li>
        <li>期待している</li>
        <li>どちらでもない</li>
        <li>許容できる</li>
        <li>不満に感じる</li>
      </ul>
    </td>
    <td>
      <p>この機能を<b>持っていなかったら</b>どう感じますか？</p>
      <ul>
        <li>とても嬉しい</li>
        <li>期待している</li>
        <li>どちらでもない</li>
        <li>許容できる</li>
        <li>不満に感じる</li>
      </ul>
    </td>
  </tr>
</table>

標準化された質問票を使用する利点は、基本的にリサーチデザインのすべてがすでに完了しており、以前の調査から再利用できることです。また、この方法論に一貫したアプローチを取ることで、プロセスにエラーが入り込むリスクを減らせます。

リサーチ計画の例については、過去の [Google Docs の Kano 調査計画](https://docs.google.com/document/d/e/2PACX-1vRi6Dq6sDBtkggW5oEnmkTsLGx6WRvKrs8EV4aXaAhIlEpOgykK2PJEEp8uj2UfEymbQgLJYBVavR1c/pub)を参照してください

#### 質問票の構造 {#questionnaire-structure}

[Qualtrics](/handbook/upstream-studios/experience-research/surveys/qualtrics/)を使用して質問票を作成します。関連する質問（機能がある場合の質問と機能がない場合の質問）を伴う各機能説明は、参加者が各機能に他の機能から独立して回答できるよう、別のブロックで提示する必要があります。また、提示順序が参加者のフィードバックに影響しないよう、各ブロックの順序をランダム化することを推奨します。

[アンケート](https://gitlab.eu.qualtrics.com/jfe/preview/SV_3VoczISwBuK8ab3?Q_CHL=preview&Q_SurveyVersionID=current)の例（[#1027](https://gitlab.com/gitlab-org/ux-research/-/issues/1027)で使用）

#### データ収集と分析 {#data-collection--analysis}

提供された質問票を使用すると、定量的および定性的なアプローチの両方でデータを収集、分析し、調査結果を報告できます。

##### 定性的アプローチ {#the-qualitative-approach}

このアプローチは、参加者の優先順位付けの背後にある*なぜ*をよりよく理解するのに役立ちます。定性的データを最初に収集して分析すると、機能の説明が混乱を招く、または不明確であるかなどの問題を見つけられるため、より大きな参加者グループに送る前に説明を修正できます。[定量的アプローチ](/handbook/upstream-studios/experience-research/kano-model/#the-quantitative-approach)を取った後に、アンケートサンプルの数人のユーザーと話し、なぜその評価を与えたのかについて追加のフィードバックを得ることもできます。

参加者のタスクが質問票を通読し、回答の理由を説明することであるモデレートセッションを 5〜10 回、および／またはモデレートなしのセッションを 20〜30 回実施することを推奨します。

より大規模なアンケートを通じた回答の収集前後にモデレートインタビューを実施した [Dovetail プロジェクト](https://dovetailapp.com/projects/5sVL84ZlY492J2jOt5W77S/v/2d3SBCrdPoM8QEYzTv6l3O)の例。

##### 定量的アプローチ {#the-quantitative-approach}

ターゲットオーディエンスから 50〜80 人のユーザーの回答を収集し、[Kano モデル完全ガイド](https://foldingburritos.com/blog/kano-model/)で説明されている離散分析を使用して分析することを推奨します。このアプローチは、優先順位付けの決定を裏付ける「数値」を提供しますが、優先順位付けの背後にある理解は依然として不足します。

分析にはこの[スプレッドシートテンプレート](https://docs.google.com/spreadsheets/d/14D-ayhw15J9o7ixzFh7pda_SZQkhZTRsyJvHi_5JXbk/edit?usp=sharing)（GitLab 内部リンク）を使用します。

定量的アプローチのアウトプットを要約した[レポート](https://docs.google.com/presentation/d/1aLt3QkYthTlbjBig0efWlbA11FkXBTNZdfh4Yk3o3g4/edit?usp=sharing)（GitLab 内部リンク）の例。

定量的アプローチと定性的アプローチを組み合わせると、データの背後にあるより完全なストーリーが得られます。優先順位付けに加え、参加者がそのように評価した*なぜ*も説明できるようになります。これら 2 つのアプローチを組み合わせて、Kano モデル調査を最大限に活用してください。

## 追加リソース {#additional-resources}

- 記事: [Kano モデル完全ガイド](https://foldingburritos.com/blog/kano-model/)
- 記事: [Kano モデル — 使用方法と使用してはならない方法](https://medium.com/design-ibm/kano-model-ways-to-use-it-and-not-use-it-1d205a9cf808)
- 動画: [Kano モデルを使用して成功する UX 戦略を構築する](https://www.youtube.com/watch?v=Hr1rN3jibIk&feature=youtu.be)

## GitLab で実施された Kano リサーチの例 {#examples-of-kano-research-conducted-at-gitlab}

- [Monitoring 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/merge_requests/28)
- [CI 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1027)
- [Security Insights 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1295)
- [GitLab Plus 機能の優先順位付け](https://gitlab.com/gitlab-org/ux-research/-/issues/1128)
