---
title: "Pajamasデザインレビュープロセス"
description: "Pajamasデザインシステムに関連するプロジェクトでマージリクエストを承認しマージするレビュアーとメンテナーの役割、およびメンテナーになる方法。"
upstream_path: /handbook/product/ux/pajamas-design-system/design-review/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T00:00:00Z"
translator: claude
stale: false
---

## 概要

Pajamasデザインシステムは、さまざまなプロジェクトで構成されており、そこではデザインレビューが必須です:

1. [`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)
1. [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)
1. [`gitlab-ui`](https://gitlab.com/gitlab-org/gitlab-ui)

このページでは、あなた（またはコミュニティメンバー）のマージリクエスト（MR）を承認しマージする際の、[レビュアー](#reviewer)と[メンテナー](#maintainer)の役割について説明します。また、[メンテナーになるためのプロセス](#how-to-become-a-maintainer)についても説明します。

## レビュアー

すべてのGitLabプロダクトデザイナーは、Pajamasに影響を与えるMRに対してデザインレビューとコードレビューを実行できます（そして推奨されます）。これには、[GitLabチームメンバー](/handbook/communication/top-misused-terms/)とより広いGitLabコミュニティからの貢献が含まれます。MRをレビューしたい場合、誰かがあなたに割り当てるまで待つこともできますが、オープンなMRのリストを閲覧し、あなたが持っているフィードバックや質問を残すことも大歓迎です。

レビューを実行するには、以下を理解し従う必要があります:

- 一般的な[コードレビューガイドライン](https://docs.gitlab.com/development/code_review/)。
- [プロダクトデザイナー向けの一般的なMRレビューガイドライン](/handbook/product/ux/product-designer/mr-reviews/)。
- [Pajamasプロジェクト](#overview)の貢献ガイドライン。

すべてのデザイナーがすべてのMRをレビューできる一方で、MRを受け入れる能力はメンテナーに制限されていることに注意してください。すべてのデザインレビュアーとメンテナーは、[GitLabエンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

## メンテナー

メンテナーは、以下のような GitLabデザイナーです:

- コミットメッセージのレビューを含む、デザインと[コードレビュー](https://docs.gitlab.com/development/code_review/)のエキスパート。
- GitLabのプロダクト、デザインガイドライン、コードベースをよく知っている。
- [Pajamasプロジェクト](#overview)の1つ以上でMRを受け入れる権限を持っている。

すべてのプロジェクトには少なくとも1人のメンテナーがいますが、ほとんどには複数いて、一部のプロジェクト（`gitlab-ui`や`design.gitlab.com`など）にはデザインとフロントエンドのために別々のメンテナーがいます。レビュアーと同様に、デザインメンテナーは[GitLabエンジニアリングプロジェクト](/handbook/engineering/projects/)のリストで見つけることができます。

優れたメンテナーになるための詳細については、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#maintainer)をお読みください。

### メンテナーの種類

デザインメンテナーは、メンテナーシップの種類に分かれています。これはメンテナーが専門化するのに役立ちますが、より重要なことに、メンテナーになるプロセスをスピードアップし、MRの最終受け入れについて誰に尋ねるべきかを知るのに役立ちます。プロジェクトの自然な進化に対応するために、新しいタイプを作成したり、既存のものをリファクタリングしたりできます。

| プロジェクト | メンテナーの種類 |
|---|---|
| `design.gitlab.com` |  `Figma`（Pajamas UI Kit）: ファイルの構成、オブジェクトのプロパティ、インタラクションデザイン、アクセシビリティ、ビジュアルデザイン、技術的実現可能性をレビューします。<br>`UX`（Pajamasウェブサイト）: ウェブサイトのすべてのセクションにわたるコンテンツの意味、用語、構造をレビューします。 |
| `gitlab-svgs` | `Figma`（Pajamas UI Kit）: アイコンとイラストのファイル構成、オブジェクトのプロパティ、ビジュアルデザインをレビューします。 |

`gitlab`または`gitlab-ui`プロジェクトのUI（`.scss`）のメンテナーになることに興味がある場合は、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/)に従ってください。

### メンテナーになる方法

エンジニアリングのカウンターパートと同じメンテナーガイドラインに従います。それらのガイドラインと、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)でメンテナーになる方法を理解してください。

そのプロセスの3つの重要な側面:

1. **「メンテナーレベル」MR**: 候補者は、最近の「メンテナーレベル」MRの具体的な例を持っている必要があります。あらゆる種類のMRに取り組むことができますが、「メンテナーレベル」のMRがメンテナーシップの焦点です。「メンテナーレベル」MRは、[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)で説明されています。
1. **貢献が優先**: メンテナー候補者は、デザインシステムへの一貫した、意味のある貢献を示すべきです。これは、MRの提出、コードレビュー、協働的な問題解決を通じて、デザインシステムの開発に積極的に参加することを意味します。候補者は、デザインシステムの業務を時々のタスクではなく、自分の役割の重要な部分として扱い、他の責任とデザインシステムへの貢献のバランスを取ることができることを示すべきです。貢献の質と一貫性は、量よりも重要です。メンテナーは、デザインシステムを前進させる思慮深い業務を信頼性をもって提供できることを示す必要があります。
1. **レビュー**: 候補者は、大幅な必要な変更なしに、一貫してレビュアーレビューを通過する必要があります。
1. **トレーニーシップはオプション**: [トレーニーメンテナープログラム](#trainee-maintainer)（トレーニーシップ）は、レビュアーがメンテナーになるのを支援しますが、プログラムは必須ではありません。最近、相当数の「メンテナーレベル」MRに関与していたデザイナーは、トレーニーシップなしでメンテナーになることができます。[Engineering Review Workflow](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer)で説明されているプロセスに従って、誰でも自分（または他の人）をメンテナーシップに推薦できます。

#### トレーニーメンテナー

- エンジニアリングのカウンターパートと同じトレーニーメンテナープログラム（トレーニーシップ）に従います。誰でも、[Trainee design maintainerテンプレート](https://gitlab.com/gitlab-com/www-gitlab-com/issues/new?issuable_template=trainee-design-maintainer)を使用してトラッキングIssueを開くことで、トレーニーとして自分を推薦できます。

- トレーニーシップでは、各トレーニーにデザインメンテナーがサポートメンテナーとして割り当てられます。サポートメンテナーは、レビュー用のMRを指示し、提案にフィードバックを与え、1:1セッション中にプロセスや進捗について話し合います。トレーニーは、いつでもマネージャーや他のメンテナーに、専任のサポートメンテナーとは別にフィードバックとガイダンスを求めることができます。トレーニーメンテナーがPajamas MRのレビューを学ぶ際にガイドするのに役立つよう、[Pajamas UXメンテナーレビューチェックリスト](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/maintainer-checklist.md)も作成しました。

- メンテナーが追加のサポートメンテナーとしての役割で過負荷にならず、適切なガイダンスを提供できるよう、メンテナーごとに最大1人のトレーニーを保つようにしています。[現在のトレーニーメンテナー](#current-trainee-maintainers)を参照してください。

##### 期間

トレーニーシップは長いコミットメントで、通常は数か月かかり、他の責任から時間を奪います。このプログラムに登録することに興味がある場合は、トレーニーシップがキャパシティに影響を与える可能性が高いため、自分を推薦する前にマネージャーやチームと話してください。

トレーニーシップの期間には、それに専念する時間数と、トレーニーが利用できるMRの数の2つの側面が大きく影響します。これらの2つの側面が互いに対立するとき、トレーニーシップは予想より長くかかる可能性があります:

1. **多くの時間、少ないMR**: MRの数を増やすために、トレーニーはいつでも自分の貢献を行うことができます。他の人からのMRをレビューすることだけが、メンテナーになる唯一の方法ではありません。トレーニーは創造的でなければならず、可能な限り「メンテナーレベル」のMRに取り組むようにしなければなりません。
1. **少ない時間、多くのMR**: 少ない時間で多くのMRをレビューしたり貢献したりすることは、品質に悪影響を与える可能性があります。トレーニーは、評価される対象である品質に焦点を当てるべきです。また、[レビュー応答SLO](/handbook/engineering/workflow/code-review/#review-response-slo)に従うべきです。トレーニーがトレーニーシップをスピードアップしたい場合、彼らはマネージャーと話して、ワークロードのバランスを取り、このプログラムのためにより多くの時間を確保する方法を見つけるべきです。

進捗を追跡するのに役立てるため、トレーニーはトレーニーシップを個人のOKRの1つにすることを推奨します。

### メンテナー比率

[Pajamasメンテナー比率ダッシュボード（internal）](https://10az.online.tableau.com/t/gitlab/views/UXPajamasMaintainers/PajamasDesignSystem?:origin=card_share_link&:embed=n)を参照してください。

#### 現在のトレーニーメンテナー

| プロジェクト                                | トレーニー                                       | サポートメンテナー                                 |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| Pajamas Design System (Figma) - 一時停止中 | [Michael Le](https://gitlab.com/mle)          | [Jeremy Elder](https://gitlab.com/jeldergl)        |
| design.gitlab.com (Brand) | [Monica Galletto](https://gitlab.com/monica_galletto) | [Pedro Moreira da Silva](https://gitlab.com/pedroms) |
