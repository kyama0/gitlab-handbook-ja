---
title: "本番環境レディネスレビュー"
upstream_path: /handbook/engineering/infrastructure-platforms/production/readiness/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T03:12:43Z"
translator: claude
stale: false
---


<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">

<p class="!mt-0 !mb-1 font-bold text-amber-700">注</p>

本番環境レディネスレビューは本番環境レディネス有効化プロセス - PREP に統合されています。
機能を本番環境に移行するには、新しい [PREP 評価](https://gitlab.com/gitlab-org/architecture/readiness)を作成してください。

</div>


## 概要

本番環境レディネスレビューは、GitLab.com のサービス、機能、またはインフラへの重大な変更の信頼性ニーズを特定するのに役立つプロセスです。
SRE ブックの[本番環境レディネスレビュー](https://sre.google/sre-book/evolving-sre-engagement-model/)に大まかに従っています。

レディネスレビューの目標は、機能、変更、またはサービスが GitLab.com の本番スケールで稼働するために十分なドキュメント、オブザーバビリティ、信頼性を持っていることを確認することです。
レディネスレビュープロセスは、機能が私たちの[製品成熟度レベル](https://docs.gitlab.com/ee/policy/development_stages_support.html)を通じて進行するにつれて、できるだけ早く開始される必要があります。

**レディネスレビューの完了は、インフラチームがサービスチームからオンコール責任またはオーナーシップを引き継ぐことを必ずしも意味しません。必要な場合は、マージリクエストで議論する必要があります。**

このレビューは、サービスオーナー、セキュリティ、インフラチームのコラボレーションを促進し、新しいサービスのために特定されたギャップを埋めるためのものです。
レビュードキュメントは、デプロイされる内容とそれを取り巻く議論のスナップショットとして機能します。
継続的に更新されることを意図していません。

**レディネスレビュー MR** はすべての[成熟度レベル](https://docs.gitlab.com/ee/policy/development_stages_support.html)で 1 回のレビューを経ます。
MR を使用する理由は、インラインコメント、スレッド化された議論、明示的な承認が可能になるためです。
MR がステークホルダーによって承認されマージされると、対応するレベルに対して承認されたとみなされます。

**レディネスレビュー Issue** は、レビュアーとして割り当てられるステークホルダー間で調整し、以下の Issue ボードを使用して進捗を追跡するために使用されます:

| **計画中** | **ステータス**|
|--------------|-------------|
| [レディネス計画ボード](https://gitlab.com/gitlab-com/gl-infra/readiness/-/boards/7418781) | [レディネスステータスボード](https://gitlab.com/gitlab-com/gl-infra/readiness/-/boards/5177836) |
| 現在準備中のレディネス。 | 現在レビュー中のレディネス。 |
| ![トリアージ](/images/engineering/infrastructure/team/scalability/project-management/label-triage.png)    <br/>![提案](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png) <br/>![準備完了](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) | ![準備完了](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) <br/>![進行中](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png) <br/>![停滞](/images/engineering/infrastructure/team/scalability/project-management/label-stalled.png) <br/>![ブロック中](/images/engineering/infrastructure/team/scalability/project-management/label-blocked.png) <br/>![キャンセル](/images/engineering/infrastructure/team/scalability/project-management/label-cancelled.png) <br/>![完了](/images/engineering/infrastructure/team/scalability/project-management/label-done.png)|

## 本番環境レディネスレビューを開始する基準

本番環境レディネスはできるだけ早く開始され、以下の基準のいずれかを満たすすべての[製品成熟度レベル](https://docs.gitlab.com/ee/policy/development_stages_support.html)に必要です:

- GitLab アプリケーションへの依存関係を持つ新しいインフラコンポーネント、または既存のコンポーネントへの重大な変更。
- インフラのスケール方法、またはデータの処理・保存方法を変更するアプリケーションアーキテクチャへの変更。
- GitLab アプリケーションの可用性に影響する新しいサービスまたは既存のサービスへの変更。

上記の基準のいずれも満たされない場合、本番環境レディネスレビューが必要である可能性は低いです。

## 本番環境レディネスへの整備された道筋

[Runway](https://docs.runway.gitlab.com/) を使用できない新しいインフラコンポーネントを導入するチームに対して、
[コンポーネントオーナーシップモデル](component-ownership-model.md)は本番環境レディネスプロセスを大幅に加速する意見を持った整備された道筋を提供します。
コンポーネントオーナーシップモデルは本番環境レディネスプロセスの代替ではありませんが、本番環境レディネスを達成するためのより速くスムーズな手段を提供します。

この合理化されたアプローチにはいくつかの主要な利点があります:

- **より速いサイクルタイム**: 事前構築されたテンプレート、標準化された CI コンポーネント、自動化されたポリシーの適用により、手動のレビューオーバーヘッドが軽減され、一般的な遅延が解消されます。
- **明確なオーナーシップ境界**: チームは開発から本番運用まで、コンポーネントの完全なオーナーシップを維持し、自律的な意思決定と迅速なイテレーションを可能にします。
- **組み込みコンプライアンス**: ポリシーアズコードの検証と自動化されたテストにより、コンポーネントが初日から GitLab のインフラ標準を満たすことが保証され、レビュー中のやり取りが削減されます。
- **セルフサービスインフラ**: チームは確立されたガードレール内で独立して作業し、インフラチームをクリティカルパスから排除しながら、運用上の卓越性を維持します。

コンポーネントオーナーシップモデルは、セルフマネージドのデプロイ互換性または Runway がまだサポートしていない高度なステートフル Kubernetes 機能を必要とするコンポーネントに特に価値があります。
この整備された道筋に従うことで、チームはレビュー時間の大幅な削減と本番環境レディネスのステージをよりスムーズに通過することを期待できます。

このアプローチを検討しているチームは、この加速された本番環境への道筋のプロセス、要件、利点を理解するために[コンポーネントオーナーシップモデルのドキュメント](component-ownership-model.md)を確認してください。

## プロセス

本番環境レディネスプロセスは、提供される作業の DRI が作成します。

1. [レディネスプロジェクト](https://gitlab.com/gitlab-com/gl-infra/readiness)の Issue テンプレートを使用して [Issue を作成](https://gitlab.com/gitlab-com/gl-infra/readiness/-/issues/new?issuable_template=production_readiness)します。Issue のタイトルは変更の説明的な名前にしてください。
2. テンプレートのレディネスチェックリストに従います。

[Issue テンプレート](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/.gitlab/issue_templates/production_readiness.md?ref_type=heads)はマージリクエストの準備方法と、レビューをプロセスに沿って進め続けるための適切なラベルの使用方法をガイドします。

テンプレートには、実験的、ベータ、一般公開の機能とサービスに何が期待されるかについての情報も含まれています。

## 作者のためのガイドライン

- 既存の機能の次の成熟度レベルのレビューの場合、既存のレビュードキュメントを変更する MR を作成します。
- 機能に適用されない場合でも、テンプレートからアイテムを削除しないでください。
- レディネスレビューの内容は主に他のドキュメントへのリンクや、なぜまたはなぜ要件を満たしているか/いないかについての短い説明で構成される必要があります。
  詳細なアーキテクチャ、図、または設計についての説明を含めることを意図していません。これらのドキュメントへのリンクを提供することで、この情報のためのレディネスレビュー MR での重複ではなく、単一の情報源を維持します。
  設計とアーキテクチャの提案には[アーキテクチャデザインワークフロー](/handbook/engineering/architecture/workflow/)プロセスを使用してください。
- このレビューを書く際にできるだけ説明的にしてください。すでによく知られているかのように見える専門用語の使用を避けてください。
  ある人が知っていることが、別の人によく理解されていないかもしれません。
- 仮定をしないでください。回答を提供できない場合は、詳細を提供できない理由を説明する方が良いです。
  これは議論を促進し、改善の領域を特定した場合に新しい Issue を生成できるようにするのに役立ちます。
  これはまた、必要に応じてヘルプを求める優れた手段でもあります。
- 完了していない可能性があるまたはまだよく知られていない行項目に Issue を作成することは許容されます。
  必要に応じてそれらの Issue にリンクしてください。1 つの Issue を包括的なものとして作成してはなりません;
  代わりに各項目ごとに専用の Issue を作成してください。それらの Issue からの詳細が明らかになると、その情報をレディネスレビューにフィードバックしてください。
- サービスが本番環境に導入された後に訪問するための基礎として Issue を作成することも許容されます。
  これらのアイテムには、すでに Issue が作成されており、ブロッカーなしに進めても安全な理由を示す声明がなければなりません。
- 単に回答がない質問やセクション、または関連しない場合は、MR にそのまま残して関連しない理由を述べてください。
  そうすることで、すべての可能な対象領域のレビューを実施したことが保証されます。

## レビュアーのためのガイドライン

- 本番環境レディネス提案のレビュアーとして、
  あなたのタスクは作者と協力して、提案に提供された情報が本番環境レディネスにとって十分かどうかを判断することです。
  最終的に作者は DRI であり、サービスを本番環境に投入する責任があります。
  このレビューは DRI があなたと協力して、提案されているものが私たちの信頼性ニーズを満たしていることを確認するのを助けます。
- [Issue テンプレート](https://gitlab.com/gitlab-com/gl-infra/readiness/blob/master/.gitlab/issue_templates/production_readiness.md)に記載されているセクションがどのように対処されているかを考慮してください。
  あなたが観察する短所を強調することが重要です。
  非適用のセクションが適切に注記されており、変更後に対処する必要があるギャップがある場合に Issue が作成されていることを確認してください。
- 通常のコードレビューと同様に質問を残してください。

## レディネスレビューの完了

すべての議論が対処され、すべての必須アイテムに満足のいく回答がある場合、作者はレビュアーからの承認をリクエストします。
レビュアーはマージリクエストを承認することで承認を記録します。
これに続いて、Issue はクローズされ、変更は本番環境に適用できます。
