---
title: エンジニアリング原則
upstream_path: "/handbook/engineering/development/principles/"
upstream_sha: "3480299851f7e2243d4f08b75dac452f89929636"
translated_at: "2026-04-28T05:15:25Z"
translator: claude
stale: false
lastmod: "2026-03-02T19:44:15+00:00"
---

## エンジニアリング原則

GitLab では、[企業文化](/handbook/company/culture)を非常に重視しています。
企業文化の主要な構成要素は [GitLab バリュー](/handbook/values/)です。

[GitLab バリュー](/handbook/values/)は会社の進化を通じて私たちを導いてきました。これらのバリューは、ポジティブで生産的な文化を維持し、会社とプロダクトをより良くするための意思決定を支援するうえで不可欠でした。

私たちのエンジニアリング原則は [GitLab バリュー](/handbook/values/)の上に構築されており、ソフトウェアエンジニアリングの実践のコンテキストにおいてこれらをさらに説明するものです。

1. [イテレーション](#iteration)
1. [効率性](#efficiency)
1. [シンプルさ](#simplicity)
1. [信頼性](#reliability)
1. [品質](#quality)
1. [ベロシティ](#velocity)
1. [予測可能性](#predictability)

## イテレーション {#iteration}

私たちは常に自分自身にイテレーティブであることを求め、目標への直接的な道筋にある[最小価値変更](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)を行います。

複雑なイニシアチブでは、[アーキテクチャデザインワークフロー](/handbook/engineering/architecture/workflow/)を使用して目標を定義し、特定の取り組みのイテレーション計画を説明します。何かをどのようにイテレーションするかは、中長期的なビジョンによって異なる場合があります。イテレーションを可能な限り効率的で実用的なものにすることが目標です。

また、確立された「スクーターの発見的方法」を時折使用します: 顧客が使用できる最小限のプロダクトをリリースし、それをイテレーションしていきます。

![スクーターの発見的方法](https://gitlab.com/gitlab-org/gitlab/uploads/590251a5311fb50e4dcb174f214e1340/Screen_Shot_2020-02-06_at_3.29.48_PM.png)
画像クレジット: [Crisp の Henrik Kniberg](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp)

できるだけ速く最小限の変更をリリースすることは、特に中間ステップがユーザーに価値を提供し有意義なフィードバックを収集できる場合に、イテレーションについて考える良い方法です。これは多くの場合、私たちのデフォルトのイテレーションアプローチです。

しかし、この「スクーター」のイテレーションパターンが常に最も効率的な進め方とは限りません。[効率的なイテレーション](#efficiency)のために調整された計画が必要な場合があります。なぜなら、より複雑なものを構築したい場合、ユーザーがスクーターや紙飛行機に満足しない可能性があり、有意義なフィードバックが得られないか、使用するのに十分でない場合があるからです。そのような場合、どのようにイテレーションするかは、効率性を向上させて合理的な時間内に目標を達成できるよう、慎重に計画された戦略であるべきです。

GitLab では、[アーキテクチャデザインワークフロー](/handbook/engineering/architecture/workflow/)を使用して、中長期的なビジョンに沿ったより実用的なイテレーション計画を構築できます。これは通常、最小実行可能プロダクト（MVP）の構築もカバーします。しかしこの場合、MVP がどのように見えるかは、組織全体でフィードバックを収集した後に書面で説明された思慮深い計画に依存します。

「次のマイルストーンで最小限のものを構築する」パターンに先行する可能性があり、イテレーションの効率性を高めることを目的としたいくつかのパターンを以下に示します:

1. 基本的なデザインの問題を特定し、デザインドキュメントで説明する。
1. それらに関連する最も重要なリスクを特定し、de-risk する方法を見つける。
1. 基本的なデザインの側面を個別にイテレーションするための計画を策定する。
1. プロトタイプまたは概念実証として最初のエンドツーエンドのイテレーションを提供する。

これらすべての取り組みは、知識のレベルを向上させ実装リスクを減らすことを目的としています。これらのステップはそれ自体がイテレーションであり、より良い MVP を構築するための隠れた効率性を見つけるのに役立ちます。

イテレーションについて詳しくは、[バリュー](/handbook/values/#iteration)ページと[エンジニアリングワークフロー](/handbook/engineering/workflow/iteration/)を参照してください。

## 効率性 {#efficiency}

効率性は GitLab のエンジニアリング規律の核心です。これは最も重要な[企業バリュー](/handbook/values/#efficiency)の 1 つでもあります。

エンジニアリングでの業務の仕方は、中長期的に大きな複利効果をもたらす可能性があります。短期的な実用的目標を考慮しながら、「中長期的にどのようにしてこれを実装すればより効率的になれるか？」と常に自問することで、複利が富を構築するのと同様に、時間の経過とともに多くの価値が構築されることを期待できます。短期的な目標に過度に集中すると、この機会を逃す可能性があります。

より効率的になるのに役立つ短くて不完全なリスト:

1. 有用でよく設計された抽象化を構築する。
1. 簡単なソリューションよりも[シンプルなソリューション](#simplicity)を選択する。
1. シンプルさと理解しやすさのためにコードをリファクタリングする。
1. ローカルにパッチを当てる代わりに、オープンソースプロジェクトに貢献する。
1. 繰り返しの作業を減らすか、プロセスを単純化するための自動化を構築する。
1. 知識共有を促進する新しいコミュニケーションチャンネルを構築する。
1. エンジニアリングの完璧さよりもエンジニアリングの卓越性を目指す。

## シンプルさ {#simplicity}

シンプルさは信頼性の前提条件です。また、私たちの[退屈なソリューション](/handbook/values/#boring-solutions)バリューの核心でもあります。私たちは、シンプルなソリューションを構築するためにより多くの作業が必要な場合でも、簡単なソリューションよりもシンプルなソリューションを選ぶことを目指しています。

## 信頼性 {#reliability}

**可用性/信頼性**、**品質**、**セキュリティ**、および**パフォーマンス**は、信頼性の高いソフトウェアを構築するための柱です。信頼性は、利用可能で信頼できるプロダクトを提供できるという顧客との契約です。組織全員がそれぞれの役割を担います。

エンジニア、プロダクトマネージャー、デザイナーは、計画、実装、モニタリング（例: [Kibana](/handbook/support/workflows/kibana/)、[Sentry](/handbook/support/workflows/sentry/)、Grafana、その他の [GitLab.com モニタリングツール](/handbook/engineering/monitoring/#monitoring)）、または業務の優先順位付けを通じて、コードの信頼性に最も直接的な影響を持ちます。プロダクトとエンジニアリングの管理者は（例: [エラーバジェット](/handbook/engineering/error-budgets/)を使用して）機能の信頼性をモニタリング・測定し、必要に応じて推奨事項を作成します。[学習と開発](/handbook/people-group/learning-and-development/)への注力により、チームが信頼性の高いソフトウェアを構築するために必要なツールとトレーニングを確保します。[インフラストラクチャプラットフォーム](/handbook/engineering/infrastructure-platforms/)、[アプリケーションセキュリティ](/handbook/security/product-security/security-platforms-architecture/application-security/#application-security-mission)、[データベース](/handbook/engineering/data-engineering/database-excellence/database-frameworks/)、[デベロッパーエクスペリエンス](/handbook/engineering/infrastructure-platforms/developer-experience)チームは、プロダクト開発チームをサポートする対象分野の専門家です。

## ベロシティ {#velocity}

私たちのベロシティは本質的にインクリメンタルであるべきです。それは[イテレーション](#iteration)と[効率性](#efficiency)の原則から導かれます。

ベロシティを高く維持することの重要性を認識しています:

- GitLab がユーザーに新しい価値を提供する速度は、会社の競争優位性です。
- オープンソースプロジェクトとして、フォークは歓迎されます。しかし、GitLab に貢献するコミュニティが無傷を保つために、フォークがすぐに時代遅れになるよう速く動くことが重要です。
- 一度スローダウンすると、再びスピードアップするのは非常に困難です。
- 企業は成長するにつれてスローダウンする傾向があります。これを防ぐには意図的な努力が必要であり、常に念頭に置かれなければなりません。ベロシティを維持する必要性を強調することで、ベロシティを高く保つためのワークフローとプロセスの適応を支援できます。

ベロシティを高く維持するためにできることがいくつかあります。以下に説明します。

### 適切にイテレーションする

取り組んでいることを適切に[イテレーション](#iteration)します。小さいマージリクエストを提供することを目指します。追加の調整から恩恵を受ける複数のイテレーションを出荷する計画がある場合は、[デザインドキュメント](/handbook/engineering/architecture/workflow/)を書きましょう。

ベロシティは正しい方向に速く進むことから生まれます。それがスピードとベロシティの違いです。方向はベロシティにとって重要であり、だからこそ適切な時に正しいことを[効率的にイテレーション](#efficiency)する必要があります。

イテレーションのためのヒントについては、[イテレーションではない 12 のショートカットに関するブログ記事](https://about.gitlab.com/blog/2021/12/01/dont-confuse-these-twelve-shortcuts-with-iteration/)を確認できます。

### レビュー時間を短縮する

コードレビューのレイテンシーに注意してください。著者をコードレビューに長く待たせないでください。

多くの人にとって、コンテキストスイッチングは非常にコストのかかることで、生産性に悪影響を与えます。コードをレビューしたり、チームメンバーと非同期で協力したりする際にはこれを念頭に置いてください。質問への回答が不要な場合や、コードの提案が対処する必要のない些細な指摘である場合は、これらを行うために必要なコンテキストスイッチングの価値がないかもしれません。

### プロセスを削減する

実験的（Experimental）およびベータ（Beta）機能に取り組む際は、様々なプロセスへの注意を減らします。実験的またはベータ機能でさえも提供することを目指している場合は、特定のプロセスをスキップして問題ありません。プロセスはベロシティへの影響を減らすために自動化することもできます。

例えば、実験的機能に取り組んでいる場合は、時間のかかるプロセスを最小限に抑えることを目指すべきです。[GitLab ではプロセスを出荷しません](https://www.youtube.com/watch?v=3EegHi0fdPQ&t=4846s)。これは、コードでの業務と UX リサーチ、顧客検証、または長いブレインストーミングセッションに時間を費やすことの適切なバランスを見つけるために実用的なアプローチが必要かもしれません。これらのいくつかはまだ必要ですが、[効率的](#efficiency)であることを目指し、ベロシティを高く保つ必要性を念頭に置いてください。

例えば、出荷するものがユーザビリティの問題をもたらさず、顧客のニーズを効果的に満たし、ワークフローの問題をもたらさないと確信しているなら、調査を実施せずに前進する自信を持つべきです。

ベロシティを得るためにプロセスをスキップできる場合は、そうすることを検討してください。ただし、GA 機能にはこのルールを適用できない場合があります。ベータ機能に取り組む際にプロセスをスキップすることが顧客に与える影響に注意してください。実験的機能に取り組んでいる場合は、思慮深い検討の後でベロシティを得るためにいくつかのプロセスをスキップすることが推奨されます。

プロセスが効率性を妨げているか、時代遅れか、うまくスケールしないか、スキップまたは自動化できるかについて疑問がある場合は、マネージャーに相談してください。プロセスをスキップする場合は、その決定をどこか（コメント、Issue）に文書化し、その情報が役立つ可能性がある人々にピングしてください。

### リスクを受け入れる

実験的（Experimental）およびベータ（Beta）機能に取り組む際は、いくつかのリスクを取ることが大丈夫です。実験的機能を提供する際に高いベロシティを維持するために追加のリスクを取ることができる、多くの便利なツールと自動化が利用可能です:

1. フィーチャーフラグを使用できます。
1. サーキットブレーカーを実装できます。
1. コード分離を増やすデザインパターンを使用します。

機能が GitLab の他の部分からより独立しているほど、より多くのリスクを取ることができます。なぜなら、実験的機能の問題が一般提供（GA）機能やプロダクト全体に悪影響を与える可能性が低いからです。

このルールには 1 つの例外があります: 可用性とセキュリティです。成熟度モデルに関わらず、コードは常にできる限り安全であるべきで、GitLab.com をダウンさせるべきではありません。

### メンテナンスのバランスを取る

コードのリファクタリングと新機能の提供の必要性のバランスを取ります。[効率性](#efficiency)の原則をコンパスとして使用してください。

### 積極的であること

ベロシティに悪影響を与えるプロセスがある場合は、積極的に行動してください: 声を上げ、改善方法についてマネージャーと協力してください。

プロセスが存在する理由を常に説明できるべきです。それができない場合、「プロセスのためのプロセス」である可能性があります。価値の低いプロセスである可能性があります。または、現在の規模や戦略的目標に合わなくなった可能性があります。その場合は、プロセスを排除、修正、または自動化できる可能性があります。

## 予測可能性 {#predictability}

### 技術的意思決定の優先順位付け

業務の優先順位付け方法、および私たちの技術的意思決定を導くべき[プロダクトマネジメントセクション](/handbook/product/product-processes/cross-functional-prioritization/)を参照してください。

プロジェクトと会社にとってのベロシティの高い優先度にもかかわらず、それよりも優先しなければならない 1 つのことがあります: GitLab の可用性とセキュリティです。私たちや顧客はどちらも、ユーザーの生産性とデータをリスクにさらすことをいとわないならば、エンタープライズグレードのサービスを運営できません。

数百人のエンジニアが毎日何千もの独立した意思決定を行い、GitLab.com とそこのユーザーと顧客に影響を与える可能性があります。私たちが世界で最も生産的なエンジニアリング組織になることを目指す中で、全員が可用性とセキュリティを念頭に置く必要があります。GitLab.com が可用性を持ち安全である限りにおいてのみ、速く動くことができます。Self-Managed の GitLab インスタンスの可用性も私たちの成功にとって非常に重要であり、これは（GitLab.com の管理者が私たちであるのに対して）顧客の管理者とのパートナーシップで実現される必要があります。

セキュリティについては、[セキュリティ Issue に関する優先度ラベル](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)周辺の厳格な SLA を設けることで、より高い優先度を付けています。これは特定の期間内にこれらの Issue が優先されるセキュリティファーストの考え方を示しています。

### 確立されたプロセスを活用する

より良い結果を達成するのに役立つよう設計されたプロセスを開発・文書化しています。

例えば、以下のプロセスはリスクを減らしコード品質を向上させるために存在しています:

- [フィーチャーフラグの使用](https://docs.gitlab.com/ee/development/feature_flags/index.html)
- [コードレビューガイドライン](https://docs.gitlab.com/ee/development/code_review.html)

私たちはメトリクスを分析してトレンドを特定し、レトロスペクティブを開催し（例: [グループレトロスペクティブ](/handbook/engineering/careers/management/group-retrospectives/)、[イテレーションレトロスペクティブ](/handbook/engineering/devops/create/engineers/iteration/)）、[根本原因分析](/handbook/customer-success/professional-services-engineering/workflows/internal/root-cause-analysis/)を実施し、チームメンバーからフィードバックを受けることで改善の機会を見つけます。チームメンバーはプロセスを改善する機会を特定し解決策を提案することが奨励されており、その例として MR または Issue でこれらの機会を説明することが考えられます。

誰でも新しいプロセスを提案したり既存のプロセスを改善したりすることで貢献できます。

## 品質 {#quality}

品質はすべての人の責任であることを覚えておくことが重要です。master にマージするすべてのものは本番環境への準備ができているべきです。[完了の定義](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/merge_request_workflow.md#definition-of-done)に慣れてください。

### 準備ができたらリリースする

[リリースページ](/handbook/engineering/releases/)では、2 つの主要なリリースチャンネルについて説明しています:

1. Self-Managed ユーザーは[月次 Self-Managed リリース](/handbook/engineering/releases/#self-managed-releases)を使用します。
1. GitLab.com は[自動デプロイリリース](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/auto-deploy.md)を使用します。

最初のものが月次リリースであるため、月次の Self-Managed リリースに間に合わせるために急ごうとする誘惑があります。しかし、これはアンチパターンです。ほとんどの Issue には厳格な期限がありません。期限のある Issue は例外であり、そのように扱われるべきです。

期限のプレッシャーは論理的にいくつかの結果につながります:

1. 人々が[燃え尽き症候群のリスクが高まります](/handbook/people-group/time-off-and-absence/time-off-types/)。
1. [完了の定義](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)を妥協する可能性があります。
1. [スコープを削減します](/handbook/values/#move-fast-by-shipping-the-minimal-valuable-change)。
1. 期限を逃します。

一般的なルールとして、最後の 2 つの結果のみが受け入れ可能です。割り当てられたマイルストーンという形での「期限」を逃すことは、[予測可能性よりもベロシティを優先する](/handbook/engineering/development/principles/#velocity)ため、多くの場合 OK です。月次の Self-Managed リリースを逃しても、コードが GitLab.com に届くことを防ぎません。

これらの理由などから、私たちは意図的に Self-Managed の月次リリースに含めるためにマージすべきコードの[特定の日付を定義しません](/handbook/engineering/releases/monthly-releases#timelines)。早くマージされるほど良いです。これはまた以下を意味します:

1. マージリクエストの著者が期限に間に合わせるために[時間外に作業する](/handbook/values/#measure-impact-not-activity)ことや急ぐことを望みません。
1. [レビュアーとメンテナー](/handbook/engineering/workflow/code-review/)が[通常の SLO](/handbook/engineering/workflow/code-review/#review-response-slo)を満たす以外のことをするためにプレッシャーをかけられることを望みません。

マージリクエストが特定のリリースに入ることが不可欠な場合は、エンジニアとすべてのレビュアーがそのコミットメントを果たせるよう、事前に十分に伝えることが必要です。深刻なバグを短い通知で修正する必要がある場合は、急ぐよりも、またはリリースを準備ができるまで遅延させるよりも、それを導入した変更を元に戻す方が良いです。

一般的に、Self-Managed リリース間近に行動を変える必要はありません。

### ドッグフーディング

私たちは[すべてのものをドッグフードします](/handbook/product/product-processes/dogfooding-for-r-d/)。[プロダクト原則](/handbook/product/#product-principles)に基づき、機能のドッグフードやプロダクトへのフィードバックのために必要な調査業務を行うことは、エンジニアリング部門の責任です。改善の優先順位付けや GitLab 内での機能の再構築はプロダクトの責任です。

#### ドッグフーディングのアンチパターン

陥りやすいアンチパターンは、プロダクトが提供するものの外で問題を解決することです。以下はドッグフーディングではありません:

1. GitLab の外でボットを構築する。
1. GitLab API を活用するスクリプトを書く（機能がロードマップにあり、GitLab プロジェクト内で出荷できる場合）。
1. 私たちの[コンポーネント](https://docs.gitlab.com/ee/development/architecture.html#component-diagram)や[管理対象アプリ](https://docs.gitlab.com/ee/user/clusters/management_project_template.html)の一部ではない GitLab のコンポーネントを使用する。
1. デフォルト UI の一部ではないテンプレートやリポジトリを使用する（追加するためにタイプまたはコピーペーストする必要がある）。
1. GitLab に機能を導入しながら非 GitLab プロダクトや部分を廃止しない。ドッグフードを食べる必要がありますが、単に提供するだけでは不十分です。
1. 重要でも本質的でもないことに使用する。
1. 現在使用しているすべての機能が GitLab プロダクトに入るまで遅延させる。
1. 非 GitLab と GitLab のプロダクトを同時に使用するとオーバーヘッドが発生するという理由で開始しない。
1. 最も複雑な部分を最初に移行しようとすること。代わりにイテレーションして最もシンプルなものを最初に移行してください。
1. 「単なるプロトタイプです」「機能するかわかりません」「既存の機能より優れているかわかりません」という理由で GitLab の外で構築する。

#### ドッグフーディングプロセス

GitLab の外でツールを構築することを検討する際は、[プロダクトハンドブックで説明されているドッグフーディングプロセス](/handbook/product/product-processes/dogfooding-for-r-d/)に従ってください。

### コード品質と標準

コード品質と標準を維持する必要があります。一般的に[開発ガイド](https://docs.gitlab.com/ee/development/)、特に自分のグループに関連するガイドに精通していることが非常に重要です:

- [UX ガイド](https://docs.gitlab.com/ee/development/ux/)
- [バックエンドガイド](https://docs.gitlab.com/ee/development/#backend-guides)
- [フロントエンドガイド](https://docs.gitlab.com/ee/development/fe_guide/index.html)
- [データベースガイド](https://docs.gitlab.com/ee/development/#database-guides)

コードを柔軟にする唯一の方法は、それをできる限りシンプルにすることであることを覚えておいてください:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A lot of programmers make the mistake of thinking the way you make code flexible is by predicting as many future uses as possible, but this paradoxically leads to *less* flexible code.<br>
The only way to achieve flexibility is to make things as simple and easy to change as you can.</p>&mdash; Nearby Cats (@BaseCase) <a href="https://twitter.com/BaseCase/status/1085686616499183616?ref_src=twsrc%5Etfw">January 16, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Rails と VueJS フロントエンド全体での UI の一貫性とメンテナビリティ

私たちのエンジニアリング文化の一部は、ユーザーと顧客が GitLab.com または Self-Managed インスタンスに追加された重要な新しい価値を見られるよう出荷し続けることです。迅速な開発をサポートするために、実用的に適切なテクノロジーを選択します。各ビューはユニークであるため、HAML と Vue のコードベースを等しく尊重し、最大限の一貫性とメンテナビリティを実現するフレームワークをビューごとに教育的に選択すべきです。

複雑なアプリケーションを構築する際には、完全に計画された機能などの多くの要因を考慮することが重要です。複雑さが増すにつれて後で Vue で書き直す必要が生じるだけのために HAML で MVC を構築するような状況を避けるためです。

視覚的な一貫性とアクセシブルな UI を促進するために、Vue と HAML の両方のビューで[GitLab UI コンポーネントライブラリ](https://gitlab.com/gitlab-org/gitlab-ui/)が提供するシンプルで再利用可能な UI コンポーネントを常に使用することを目指すべきです。GitLab UI コンポーネントは Pajamas デザインシステムに基づいて実装しており、現在これらは主に Vue にありますが、いくつかのシンプルなコンポーネントを HAML でも使用できる[アダプター](https://docs.gitlab.com/ee/development/fe_guide/haml.html#available-components)を提供しています。

HAML で GitLab UI コンポーネントが本質的な複雑さのために利用できない場合、それは代わりに Vue を使用して機能を実装すべきサインです。

#### VueJS を使用する場合

- ([gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui)) ライブラリからすでに確立されたコンポーネントを使用しようとしている。
- 単一ページアプリケーションでインタラクティビティを提供するために接続された複数の[複雑なコンポーネント](#complex-components)を必要とする複雑な機能を構築している。
- バニラ JavaScript / jQuery で HAML ビューの動作を強化していることに気づく（リアクティブまたは非同期の動作）。
- 中程度またはより大きなクライアントサイドのインタラクティビティが必要。
- リアルタイムアプリケーションを構築したい。

#### Rails を使用する場合

- シンプルな静的ビューが必要。
- 複数のコンポーネントや状態管理を使用する必要がない。
- ([gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui)) ライブラリの[複雑なコンポーネント](#complex-components)を使用する必要がない（HAML でラベルなどの使用できるシンプルなコンポーネントへの使用には及ばない）。

#### 複雑なコンポーネント {#complex-components}

複雑なコンポーネントは、HAML ファイルで簡単に使用できないコンポーネントのタイプを示します。これは、HAML 内でメンテナンスの負担となる組み込みの状態管理、CSS、または動的な動作によるものかもしれません。そのようなコンポーネントの例は、[テーブルコンポーネント](https://gitlab-org.gitlab.io/gitlab-ui/?path=/docs/base-table-table--default)です。

- [バックエンド](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html)
- [フロントエンド](https://docs.gitlab.com/ee/development/fe_guide/graphql.html)
- [どこでも GraphQL を使用する](https://gitlab.com/groups/gitlab-org/-/epics/1366)
- [ベロシティの重要性](/handbook/engineering/development/principles/#velocity)
- [エンジニアリングが提案するイニシアチブ](/handbook/engineering/#engineering-proposed-initiatives)
