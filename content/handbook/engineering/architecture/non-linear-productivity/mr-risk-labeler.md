---
title: "MR Risk Labeler"
description: "MR Risk Labeler がマージリクエストを低・中・高リスクに評価する方法と、その評価によるレビュー・承認担当者の変化。"
upstream_path: /handbook/engineering/architecture/non-linear-productivity/mr-risk-labeler/
upstream_sha: cc6de46eb0003927fce00d6bb2ac38cf31e1cffd
lastmod: "2026-11-18T11:28:32-06:00"
translated_at: "2026-11-19T06:12:11+09:00"
translator: codex
stale: false
---

## 概要 {#overview}

MR Risk Labeler は、各マージリクエストを低、中、高リスクに評価します。この評価によって、必要な人間のレビューの程度を決めます。`gitlab-org/gitlab`（2026-11-16 から）と `gitlab-merge-request` で稼働しており、他のプロジェクトも[導入中](#pilot-projects)です。[Non-Linear Productivity チーム](/handbook/engineering/architecture/non-linear-productivity/)の [MR Bot](https://gitlab.com/groups/gitlab-org/-/work_items/24135) プロジェクトの一部です。

Compliance が支持するエージェントによる承認経路はこれです。GitLab Duo が承認して作成者がマージするなど、他の経路は支持していません。チームが別のエージェントを使ってマージリクエストを承認している場合は、`#non_linear_productivity_initiatives` で相談してください。移行を支援します。

## 評価があなたにとって意味すること {#what-the-rating-means-for-you}

![作成者とリスクごとのマージ可能者。低リスク：@gitlab-bot が承認し、Maintainer の作成者は自分でマージでき、それ以外の作成者は、人間のレビューなしに Maintainer にマージしてもらう必要があります。中リスク：Maintainer の経路を使用するプロジェクトでは、GitLab Duo に続いて @gitlab-bot が承認すれば、Maintainer の作成者は自分でマージできます。それ以外の作成者の場合は、人間の Maintainer が承認します。高リスク：自分でマージできず、人間の Maintainer が承認します。](/images/handbook/engineering/architecture/non-linear-productivity/mr-self-merge-risk-matrix.svg)

| 作成者 | 低 | 中 | 高 |
| --- | --- | --- | --- |
| Maintainer ではない | `@gitlab-bot` が承認します。人間のレビューは不要ですが、Maintainer がマージします | 人間の Maintainer が承認します | 人間の Maintainer が承認します |
| 直接付与された Maintainer | `@gitlab-bot` が承認し、あなたがマージします | GitLab Duo の承認後に `@gitlab-bot` が承認し、あなたがマージします（[Maintainer の経路](#how-approval-works)のみ） | 人間の Maintainer が承認します |

すべてのリスクレベルで、次が適用されます。

- いつでも人にレビューを依頼できます。
- マージする前に、GitLab Duo の指摘を解決します。
- `@gitlab-bot` の承認が有効なのは、[CODEOWNERS](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS) で `@gitlab-bot` を列挙しているエントリだけです。CI 設定やツールなど、他のパスには、引き続きコードオーナーが必要です。
- 自分のマージリクエストを承認することはできず、マージを実行できるのは、マージ権限を持つ人（`gitlab-org/gitlab` では Maintainer）だけです。
- push すると、`@gitlab-bot` の承認は取り消され、新しいコミットを再評価します。

## 実行するタイミング {#when-it-runs}

マージリクエストの作成時、準備完了にしたとき、push したときに実行します。ドラフト、クローズ済み、コミュニティからの貢献、フォークからのマージリクエスト、`~"automation:prevent-risk-flow"` ラベルがあるものは、スキップします。

## 評価の仕組み {#how-the-rating-works}

各プロジェクトのルールは、評価するプロジェクト内ではなく、`CODEOWNERS` で保護した [`gitlab-merge-request/instructions/<project-id>/`](https://gitlab.com/components/agents-and-flows/gitlab-merge-request/-/tree/main/instructions) に置きます。マージリクエストが、自分を評価するルールを変更することはできません。

1. 変更した各ファイルを、`docs`、`specs`、`db`、`code` などの**領域**に対応付けます。
1. モデルが、各領域をその領域の**評価基準**に従って評価します。
1. 一部の領域には、最低の階層である**下限**があります。たとえば、`db` と `authz` が高リスクを下回ることはありません。
1. マージリクエストには、領域の中で**最も高い**階層を付けます。高リスクのファイルが 1 つでもあれば、高リスクです。

評価は、差分の大きさではなく、間違いがあった場合のコストを反映します。どの領域にも一致しないファイルがある場合や、差分が大きすぎる場合、マージリクエストには評価を付けず、通常のレビューを行います。

`gitlab-org/gitlab` については、[領域と下限](https://gitlab.com/components/agents-and-flows/gitlab-merge-request/-/blob/main/instructions/278964/mr-risk-rules.yml)および[コードの評価基準](https://gitlab.com/components/agents-and-flows/gitlab-merge-request/-/blob/main/instructions/278964/code.md)を参照してください。

### ラベル {#labels}

| ラベル | 意味 |
| --- | --- |
| `~"gitlab-bot::risk::<tier>"` | 全体の評価です。これを使用します。 |
| `~"gitlab-bot::auto-approve"` または `::manual-approve` | 人が必要かどうか |
| `~"<area>-risk::<tier>"` | 各領域の評価 |

ラベラーは、各領域の評価とフィードバック用のリンクを記載した社内ノート（Reporter 以上に表示）も投稿します。

## 承認の仕組み {#how-approval-works}

[`triage-ops`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/triage/processor/mr_approval_flow/reconcile_approval.rb) が、`@gitlab-bot` として承認します。`triage-ops` が開始した実行による、現在のコミットの最新の評価についてのみ承認します。プロジェクトごとの設定は、[`config/mr_approval_flow.yml`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/config/mr_approval_flow.yml) にあります。

- **低リスク：** `@gitlab-bot` が承認します。作成者が Maintainer ならマージでき、それ以外は Maintainer がレビューせずにマージします。自動マージを設定するのは、bot による依存関係の更新だけです。
- **Maintainer の経路：** 直接 Maintainer を付与された人の、低または中リスクと評価されたマージリクエストでは、レビュー担当者の依頼、変更要求、bot によるコミットがなければ、GitLab Duo の承認後に `@gitlab-bot` が承認します。作成者がマージします。この経路は、`config/mr_approval_flow.yml` に `maintainer_path` を設定しているプロジェクトで、`triage-ops` の `MR_RISK_MAINTAINER_PATH` CI/CD 変数が `1` の間に限り、`sample` で指定した割合のマージリクエストに適用されます。`gitlab-org/gitlab` では `sample: 100` を設定しているため、すべてのマージリクエストが対象です。

push、ドラフトへの切り替え、評価ラベルの削除によって、承認を取り消します。

## 試行プロジェクト {#pilot-projects}

ラベラーは、`gitlab-org/gitlab` と `gitlab-merge-request` で稼働しています。他のプロジェクトは導入中です。その状況と、自分のプロジェクトを追加する方法は、[試行 Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/638927)にあります。導入するには、[導入手順](https://gitlab.com/components/agents-and-flows/gitlab-merge-request/#onboarding-a-project-to-the-mr-risk-labeler)に従います。コミュニティからの貢献と、フォークからのマージリクエストは対象外です。

## FAQ {#faq}

### リスクフローを再試行するには？ {#how-do-i-retry-the-risk-flow}

- **`@gitlab-bot` が承認に使える評価を得るには：** マージリクエストをドラフトにして、再び準備完了にするか、コミットを push します。
- **新しい評価だけを見るには：** `@ai-mr-risk-labeler-gitlab-org` とコメントします。ラベラーは、エージェントセッションへのリンクを返信します。この実行は承認につながらず、`@gitlab-bot` がすでに行った承認も取り消します。

### マージリクエストに評価がないのはなぜですか？ {#why-does-my-merge-request-have-no-rating}

ドラフト、コミュニティからの貢献、フォークからのマージリクエスト、`~"automation:prevent-risk-flow"` ラベルがあるもの、または、どの領域にも含まれないファイルに触れている可能性があります。通常のレビューを行います。

### 評価が間違っているようです。どうすればよいですか？ {#the-rating-looks-wrong-what-do-i-do}

ラベラーのノートにあるフィードバック用のリンクを使い、必要に応じて人間のレビューを依頼します。プロジェクトのルールを変更するには、その [`instructions/` フォルダー](https://gitlab.com/components/agents-and-flows/gitlab-merge-request/-/tree/main/instructions)に対するマージリクエストを作成します。

### 自分の中リスクのマージリクエストをマージできますか？ {#can-i-merge-my-own-medium-risk-merge-request}

Maintainer の経路で、以下をすべて満たす場合に限ります。

- IID が、[`config/mr_approval_flow.yml`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/config/mr_approval_flow.yml) の `maintainer_path` で設定したサンプルに含まれます。`gitlab-org/gitlab` では `sample: 100` を設定しているため、すべてのマージリクエストが対象です。
- プロジェクトの Maintainer を直接付与されています。グループを通じた Maintainer アクセスは、対象になりません。
- GitLab Duo が、評価対象のコミットを承認しました。
- 人間のレビュー担当者を依頼しておらず、誰も変更を要求していません。
- `@gitlab-bot` または GitLab Duo によるコミットがなく、フォークからのマージリクエストではありません。

確実に判断するには、`@gitlab-bot` の承認と、**No human has reviewed this change.** で始まる社内ノートを確認します。あればマージできます。なければ、人間の Maintainer が承認します。

### `@gitlab-bot` が承認したのに、マージできないのはなぜですか？ {#gitlab-bot-approved-so-why-cant-i-merge}

- 変更したパスの CODEOWNERS エントリに `@gitlab-bot` が含まれておらず、引き続きコードオーナーの承認が必要な場合があります。
- マージ権限がない可能性があります。Maintainer にマージを依頼してください。レビューは不要です。
- GitLab Duo の指摘、未解決のスレッド、パイプラインを確認します。

### 引き続き、人にレビューを依頼できますか？ {#can-i-still-ask-a-person-to-review}

はい。通常どおりレビュー担当者を依頼してください。`@gitlab-bot` の承認を削除する必要はありません。自動マージが設定されており、レビューを待ちたい場合は、キャンセルします。Maintainer の経路では、レビュー担当者を依頼すると、`@gitlab-bot` の承認を自動的に取り消します。

### 誰に連絡すればよいですか？ {#who-do-i-contact}

Slack の `#non_linear_productivity_initiatives` で尋ねてください。問題を報告するときは、マージリクエストへのリンクを付けます。
