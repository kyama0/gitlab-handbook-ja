---
title: "Pajamas デザインレビュープロセス"
description: "Pajamas デザインシステムに関連するプロジェクトでマージリクエストを承認しマージするレビュアーとメンテナーの役割、およびメンテナーになる方法。"
upstream_path: /handbook/upstream-studios/design-expression/design-system/design-review/
upstream_sha: d92acb119be844b83eb2f76de26d722afea570c3
translated_at: "2026-07-21T06:21:42+09:00"
translator: codex
stale: false
lastmod: "2026-07-20T13:03:25-03:00"
---

## 概要 {#overview}

Pajamas デザインシステムは、さまざまなプロジェクトで構成されており、そこではデザインレビューが必須です:

1. [`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)
1. [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)
1. [`gitlab-ui`](https://gitlab.com/gitlab-org/gitlab-ui)

このページでは、あなた（またはコミュニティメンバー）のマージリクエスト（MR）を承認しマージする際の、[レビュアー](#reviewer)と[メンテナー](#maintainer)の役割について説明します。また、[メンテナーになるためのプロセス](#how-to-become-a-maintainer)についても説明します。

## レビュアー {#reviewer}

すべての GitLab プロダクトデザイナーは、Pajamas に影響を与える MR に対してデザインレビューとコードレビューを実行できます（そして推奨されます）。これには、[GitLab チームメンバー](/handbook/communication/top-misused-terms/)とより広い GitLab コミュニティからの貢献が含まれます。MR をレビューしたい場合、誰かがあなたに割り当てるまで待つこともできますが、オープンな MR のリストを閲覧し、あなたが持っているフィードバックや質問を残すことも大歓迎です。

レビューを実行するには、以下を理解し従う必要があります:

- 一般的な[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)。
- [プロダクトデザイナー向けの一般的な MR レビューガイドライン](/handbook/upstream-studios/product-design/workflow/mr-reviews/)。
- [Pajamas プロジェクト](#overview)の貢献ガイドライン。

すべてのデザイナーがすべての MR をレビューできる一方で、MR を受け入れる能力はメンテナーに制限されていることに注意してください。すべてのデザインレビュアーとメンテナーは、[GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

## メンテナー {#maintainer}

メンテナーは、以下のような GitLab デザイナーです:

- コミットメッセージのレビューを含む、デザインと[コードレビュー](https://docs.gitlab.com/development/code_review/)のエキスパート。
- GitLab のプロダクト、デザインガイドライン、コードベースをよく知っている。
- [Pajamas プロジェクト](#overview)の 1 つ以上で MR を受け入れる権限を持っている。

すべてのプロジェクトには少なくとも 1 人のメンテナーがいますが、ほとんどには複数いて、一部のプロジェクト（`gitlab-ui`や`design.gitlab.com`など）にはデザインとフロントエンドのために別々のメンテナーがいます。レビュアーと同様に、デザインメンテナーは[GitLab エンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

優れたメンテナーになるための詳細については、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#maintainer)をお読みください。

### メンテナーの種類

デザインメンテナーは、メンテナーシップの種類に分かれています。これはメンテナーが専門化するのに役立ちますが、より重要なことに、メンテナーになるプロセスをスピードアップし、MR の最終受け入れについて誰に尋ねるべきかを知るのに役立ちます。プロジェクトの自然な進化に対応するために、新しいタイプを作成したり、既存のものをリファクタリングしたりできます。

| プロジェクト | メンテナーの種類 |
|---|---|
| `design.gitlab.com` |  `Figma`（Pajamas UI Kit）: ファイルの構成、オブジェクトのプロパティ、インタラクションデザイン、アクセシビリティ、ビジュアルデザイン、技術的実現可能性をレビューします。<br>`UX`（Pajamas ウェブサイト）: ウェブサイトのすべてのセクションにわたるコンテンツの意味、用語、構造をレビューします。 |
| `gitlab-svgs` | `Figma`（Pajamas UI Kit）: アイコンとイラストのファイル構成、オブジェクトのプロパティ、ビジュアルデザインをレビューします。 |

`gitlab`または`gitlab-ui`プロジェクトの UI（`.scss`）のメンテナーになることに興味がある場合は、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/)に従ってください。

### メンテナーになる方法 {#how-to-become-a-maintainer}

エンジニアリングのカウンターパートと同じメンテナーガイドラインに従います。それらのガイドラインと、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)でメンテナーになる方法を理解してください。

そのプロセスの 3 つの重要な側面:

1. **「メンテナーレベル」MR**: 候補者は、最近の「メンテナーレベル」MR の具体的な例を持っている必要があります。あらゆる種類の MR に取り組むことができますが、「メンテナーレベル」の MR がメンテナーシップの焦点です。「メンテナーレベル」MR は、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)で説明されています。
1. **貢献が優先**: メンテナー候補者は、デザインシステムへの一貫した、意味のある貢献を示すべきです。これは、MR の提出、コードレビュー、協働的な問題解決を通じて、デザインシステムの開発に積極的に参加することを意味します。候補者は、デザインシステムの業務を時々のタスクではなく、自分の役割の重要な部分として扱い、他の責任とデザインシステムへの貢献のバランスを取ることができることを示すべきです。貢献の質と一貫性は、量よりも重要です。メンテナーは、デザインシステムを前進させる思慮深い業務を信頼性をもって提供できることを示す必要があります。
1. **レビュー**: 候補者は、大幅な必要な変更なしに、一貫してレビュアーレビューを通過する必要があります。
1. **トレーニーシップはオプション**: [トレーニーメンテナープログラム](#trainee-maintainer)（トレーニーシップ）は、レビュアーがメンテナーになるのを支援しますが、プログラムは必須ではありません。最近、相当数の「メンテナーレベル」MR に関与していたデザイナーは、トレーニーシップなしでメンテナーになることができます。[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)で説明されているプロセスに従って、誰でも自分（または他の人）をメンテナーシップに推薦できます。

#### トレーニーメンテナー {#trainee-maintainer}

- エンジニアリングのカウンターパートと同じトレーニーメンテナープログラム（トレーニーシップ）に従います。誰でも、[Trainee design maintainer テンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/issues/new?issuable_template=trainee-design-maintainer)を使用してトラッキング Issue を開くことで、トレーニーとして自分を推薦できます。

- トレーニーシップでは、各トレーニーにデザインメンテナーがサポートメンテナーとして割り当てられます。サポートメンテナーは、レビュー用の MR を指示し、提案にフィードバックを与え、1:1 セッション中にプロセスや進捗について話し合います。トレーニーは、いつでもマネージャーや他のメンテナーに、専任のサポートメンテナーとは別にフィードバックとガイダンスを求めることができます。トレーニーメンテナーが Pajamas MR のレビューを学ぶ際にガイドするのに役立つよう、[Pajamas UX メンテナーレビューチェックリスト](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/maintainer-checklist.md)も作成しました。

- メンテナーが追加のサポートメンテナーとしての役割で過負荷にならず、適切なガイダンスを提供できるよう、メンテナーごとに最大 1 人のトレーニーを保つようにしています。[現在のトレーニーメンテナー](#current-trainee-maintainers)を参照してください。

##### 期間

トレーニーシップは長いコミットメントで、通常は数か月かかり、他の責任から時間を奪います。このプログラムに登録することに興味がある場合は、トレーニーシップがキャパシティに影響を与える可能性が高いため、自分を推薦する前にマネージャーやチームと話してください。

トレーニーシップの期間には、それに専念する時間数と、トレーニーが利用できる MR の数の 2 つの側面が大きく影響します。これらの 2 つの側面が互いに対立するとき、トレーニーシップは予想より長くかかる可能性があります:

1. **多くの時間、少ない MR**: MR の数を増やすために、トレーニーはいつでも自分の貢献を行うことができます。他の人からの MR をレビューすることだけが、メンテナーになる唯一の方法ではありません。トレーニーは創造的でなければならず、可能な限り「メンテナーレベル」の MR に取り組むようにしなければなりません。
1. **少ない時間、多くの MR**: 少ない時間で多くの MR をレビューしたり貢献したりすることは、品質に悪影響を与える可能性があります。トレーニーは、評価される対象である品質に焦点を当てるべきです。また、[レビュー応答 SLO](/handbook/engineering/workflow/code-review/#review-response-slo)に従うべきです。トレーニーがトレーニーシップをスピードアップしたい場合は、マネージャーと話して、ワークロードのバランスを取り、このプログラムのためにより多くの時間を確保する方法を見つけるべきです。

進捗を追跡するのに役立てるため、トレーニーはトレーニーシップを個人の OKR の 1 つにすることを推奨します。

### メンテナー比率

[Pajamas メンテナー比率ダッシュボード（internal）](https://10az.online.tableau.com/t/gitlab/views/UXPajamasMaintainers/PajamasDesignSystem?:origin=card_share_link&:embed=n)を参照してください。

#### 現在のトレーニーメンテナー {#current-trainee-maintainers}

| プロジェクト                                | トレーニー                                       | サポートメンテナー                                 |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Pajamas Design System (Figma) - 一時停止中 | [Michael Le](https://gitlab.com/mle)          | [Jeremy Elder](https://gitlab.com/jeldergl)        |
| design.gitlab.com (Brand) | [Monica Galletto](https://gitlab.com/monica_galletto) | [Pedro Moreira da Silva](https://gitlab.com/pedroms) |
