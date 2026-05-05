---
title: "Production Engineering グループ - プロジェクト管理"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/project-management/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:44:36Z"
translator: claude
stale: false
---

## プロジェクト管理

[プロジェクト管理プロセスの大部分は Infrastructure Platforms レベルで説明されており](/handbook/engineering/infrastructure-platforms/project-management/)、すべての Infrastructure Platform チームで共有されています。
まずそちらをお読みください。

このページでは、Platforms ページに記載されているプロセスへの追加内容を説明します。

すべての作業の唯一の情報源は [Infrastructure Platforms - Production Engineering Projects Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1443) です。
これをグループのトップレベル Epic と呼ぶことが多いです。グループ内の各チームには独自のトップレベル Epic があります。

トップレベル Epic の子として追加された Epic は、チームが取り組むプロジェクトを説明するために使用されます。

プロジェクトの状態はトップレベル Epic の説明欄に一目で確認できるよう維持されます。これは [Epic Issue Summaries プロジェクト](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries)を使用して自動生成されます。
この自動化を活用するために Epic のステータスラベルの使い方については、[このプロセスの短いデモ](https://youtu.be/6Wb1f-c1_og)をご覧ください。

**各チームは成熟度の異なる段階にあり、これらのプロジェクト管理タスクをまだすべて実施していない場合があります。**

## プロジェクトオーナーシップ

各プロジェクトにはプロジェクトの遂行に責任を持つオーナーがいます。

オーナーは以下を行う必要があります。

1. 毎週、Epic の説明欄のステータスブロックを更新する。
1. 他のメンバーと協力してプロジェクトの Issue をボード上で進める。

## プロジェクトワークフロー

Issue の[ワークフローラベル](/handbook/engineering/infrastructure-platforms/project-management/#workflow-labels)は Epic にも適用されます。

### 準備

このステージでは、プロジェクトはまずオポチュニティバックログ上のラフなアイデアとして存在し、ロードマップでの議論のための提案に発展します。その後、チームが着手できる完全なプロジェクトへと発展します。これらのプロジェクトはロードマップで追跡します。

#### オポチュニティバックログ

- ![Triage](/images/engineering/infrastructure/team/scalability/project-management/label-triage.png)

プロジェクトのアイデアはあるが、それが正しいアプローチかどうか確信が持てない場合は、オポチュニティバックログを使用します。

ロードマップごとに 1 つのオポチュニティバックログ Epic があります。

アイデアは Issue または Epic に記録され、関連するオポチュニティバックログ Epic に紐付けられます。これらの Issue や Epic は詳細が少なく、`workflow-infra::Triage` ラベルが付いています。

プロダクトマネージャーとエンジニアリングマネージャーは定期的にオポチュニティバックログをレビューします。レビューセッションでは、Issue や Epic に対して以下のいずれかをメモします。

- アイデアを提案として発展させるべき場合（EM がエンジニアと協力して提案を作成します。エンジニアは提案を作成中に自分をアサインし、完成したら ~"workflow-infra::Proposal" を適用します）。
- アイデアは検討されたが、現時点では優先度が高くないと判断された場合。Issue には ~workflow-infra::Triage ラベルが残ります。
- アイデアが関連性なしと判断され、別のチームにリダイレクトされるか、クローズされる場合。

#### ロードマップ

- ![Proposals](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png)
- ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png)
- ![In Progress](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png)

EM と PM がこれらのロードマップを共同で管理します。PM はロードマップがこのチームに必要な作業の優先度を反映していることを確認します。EM はチームが着手できるバックログが用意されていることを確認します（以下の「開発準備完了」を参照）。

ロードマップの Epic には `workflow-infra::Proposal` ワークフローラベルを付けることで、Grand Review のためにトップレベル Epic の正しいセクションに表示されるようにします。

準備中のプロジェクトはすべてロードマップ Epic の子にする必要があります。これらの Epic には `workflow-infra::Triage`、`workflow-infra::Proposal`、または `workflow-infra::Ready` のいずれかのワークフローラベルを付けます。

ロードマップ Epic には「Now（現在）」「Next（次）」「Later（将来）」の 3 つのセクションがあります。これらには、チームが現在取り組んでいること、次に行うこと、後で対処するかもしれないことが優先度順に記載されています。

**Now（現在）**

- ![In Progress](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png)

「Now」セクションでは、進行中の作業の一貫した情報源として、チームのトップレベル Epic にリンクするのが一般的なパターンです。

このセクションのプロジェクトは進行中です。

**Next（次）**

- ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png)

「Next」セクションには、ロードマップ上で最も優先度が高く、開発準備が整ったプロジェクトが含まれます。

レビュー中に、エンジニアリングマネージャーまたはプロダクトマネージャーがロードマップごとに最も優先度の高いプロジェクトを選択してこのリストに追加します。

**Later（将来）**

- ![Proposals](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png)
- ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png)

このセクションには、開発準備が整ったプロジェクトまたはまだ提案段階のプロジェクトが含まれます。

レビュー中に、エンジニアリングマネージャーまたはプロダクトマネージャーが提案の承認に追加情報が必要かどうかを示します。

ロードマップ Epic はロードマップでもある子 Epic を持つことができます。例えば、Practices チームは Redis のサブ Epic を持ち、Observability チームはキャパシティプランニングのサブ Epic を持ちます。これにより、各カテゴリのナレッジを一箇所にまとめることができます。また、レベル間での情報フローの自動化も実装します。

### 提案

計画を立てることと計画過剰になることのバランスを取ることが重要です。

提案ステートの目的は、プロジェクトの目標を明確にし、目標を達成するために必要な作業を大まかに定義するための質問に答えることです。

提案を作成する際は、この提案にどの程度の工数をかけるべきかをエンジニアリングマネージャーに確認してください。エンジニアリングマネージャーは、現在必要な詳細レベルについてより多くのコンテキストを提供できます。

### 開発準備完了

提案状態の Epic はチームによってレビューされ、開発準備完了に進められるかどうかが確認されます。
エンジニアリングマネージャーがエンジニアにレビューを依頼し、事前により詳しく詰めるべきか、それとも Epic を開発準備完了に進めてよいかを判断します。

Epic が開発準備完了になるためには、以下の情報が Epic に含まれている必要があります。

1. DRI（担当者）（「Next」セクションに入っている場合のみ必須）
2. 参加者（「Next」セクションに入っている場合のみ必須）
3. コンテキスト - なぜこれに取り組むのか（問題、背景）
4. 目標または影響 - このプロジェクトで何を達成しようとしているのか
5. [依存関係とステークホルダー](/handbook/people-group/directly-responsible-individuals) - この作業に誰が頼っているか、誰に通知すべきか、誰に相談すべきか
6. デリバリーのフェーズ
7. プロジェクト管理の取り決め - DRI、EM、参加者の期待値、および特定のステータスレポート要件、サブ Epic やマイルストーンを使用するかどうか
8. ステータスブロック - 説明の最後の見出しとして `### Status yyyy-mm-dd` の形式で記載する必要があります。
    1. これにより、Epic に関心を持つ他の人がコメントや添付 Issue をすべて読まなくても最新のステータスを確認できます。
    1. この見出しはトップレベル Epic のステータス情報を自動生成するために使用されます。
    1. Epic に子 Epic がなく Mermaid ブロックが追加されている場合、パイプライン上で動作する[このスクリプト](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries/-/blob/master/epic_issue_relationships.rb)がこのセクションに Issue 関係図を自動生成して挿入します。例は[このEpic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/447)を参照してください。
9. 開始日 - 予定開始日を設定し、プロジェクト開始時に実際の開始日に更新します。
10. 終了日 - 予定終了日を設定します。これは目標として見なす必要があり、プロジェクト進行中は数週間ごとにこの目標を再評価します。プロジェクトが実際に終了した日付は、Epic がクローズされた日付から取得されます。

その他含めることができる項目:

1. プロジェクトの特定目標に対する**終了基準**。
    1. これらは `exit criterion` ラベルを付けた Issue として Epic 内に作成され、説明にリンクされます。
    1. これらはプロジェクト開始時に作成して目標への集中を維持し、[ブロッキング Issue](https://docs.gitlab.com/ee/user/project/issues/related_issues.html) を使用して各終了基準の状態を示します。

Epic には以下のテンプレートを使用できます。

```text
## Participants

## Context

## Goals

## Dependencies and Stakeholders

These teams should be consulted for this project:

These teams should be informed about this project:

## Phases of Delivery

## Exit Criteria (optional)

## Project Management information (optional)

## Status yyyy-mm-dd

/labels ~"group::production engineering"
```

#### 大規模プロジェクト

大規模プロジェクトはより小さなデリバリー単位に分解する必要があります。

大規模プロジェクトの管理にサブ Epic 方式とマイルストーン方式のどちらを選択するかは EM と DRI の裁量に委ねられます。

### 進行中

EM と PM が合意し、新しいプロジェクトを開始するスペースが生まれたら、選択したプロジェクトをロードマップ Issue から取り出してチームのトップレベル Epic に直接紐付けます。

開始日と目標日を設定し、DRI をアサインして参加者をリストアップします。`workflow-infra::In Progress` ワークフローラベルを適用し、開始日と目標日を設定してプロジェクトを開始します。

### 完了

プロジェクトが完了したら、[Infrastructure Platforms プロジェクト管理ページ](/handbook/engineering/infrastructure-platforms/project-management/#when-a-project-is-finished)の手順に従ってください。

Epic がクローズされた後も、トップレベル Epic に紐付けたままにできます。関連する Epic が多くなりすぎた場合、または年度末のサマリーを作成する際には、これらの Epic を「Completed in Year xxx」Epic（[こちら](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1266)が一例）に移動します。

## プロジェクト外の作業

チームがプロジェクトを構成しない小規模な Issue に取り組む場合があります。

システムの特定部分での進捗を示すために、これらの小規模な Issue をまとめるべきかどうかを常に検討してください。優先度が低く長期的な Epic を作成してこれらの作業をグループ化することは問題ありません。

## Issue ボード

**計画ボード**では、Issue を構築するのに十分な情報が揃った状態にすることが目標です。
ただし、`workflow-infra::Ready` であるすべての Issue をすぐに開発予定にするわけではありません。一部の
Issue は大きすぎたり、他のものほど重要でない場合があります。つまり、計画ボードで `workflow-infra::Ready` になったすべての Issue がすぐにビルドボードに移動するわけではありません。

| **計画** | **構築**|
|--------------|-------------|
| [計画ボード](https://gitlab.com/gitlab-com/gl-infra/scalability/-/boards/1697168) | [ビルドボード](https://gitlab.com/gitlab-com/gl-infra/scalability/-/boards/1697160) |
| 行うべき作業を調査している Issue。 | 次に構築される、または積極的に開発中の Issue。 |
| ![Triage](/images/engineering/infrastructure/team/scalability/project-management/label-triage.png)    <br/>![Proposal](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png) <br/>![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) | ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) <br/>![In Progress](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png) <br/>![Under Review](/images/engineering/infrastructure/team/scalability/project-management/label-under_review.png) <br/>![Verify](/images/engineering/infrastructure/team/scalability/project-management/label-verify.png) <br/>![Done](/images/engineering/infrastructure/team/scalability/project-management/label-done.png)|
