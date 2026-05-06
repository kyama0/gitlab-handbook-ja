---
title: "AI Coding グループのマイルストーンプランニング"
description: "AI Coding グループにおけるマイルストーンプランニングプロセスを説明します。"
upstream_path: /handbook/engineering/ai/ai-coding/how-we-work/milestone_planning/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

GitLab および AI Coding チームでは、エンジニアリングチームとプロダクトチームが足並みを揃え、集中して効率的に高品質な成果を届けられるよう、構造化されつつも柔軟なマイルストーンプランニングのアプローチを大切にしています。本ページでは、マイルストーンの計画と準備のプロセスについて説明します。

## Issue の作成

新しい Issue を作成する際は、知識が新鮮なうちに、最初の作成時点でできるだけ多くの詳細を加えてください。Issue を読んだり引き継いだりする人について [低コンテキストを前提](/handbook/communication/#low-context) とし、関連すると思われる情報はすべて書き残してください。

さらなる議論や見積もりが必要な新規 Issue には「workflow::refinement」ラベルを付けてください。

説明欄では次のテンプレートに従ってください。

```markdown
## Context

_Summary or background of the feature, feature change, bug, or investigation. If applicable, include subsections such as "Further Details", "Scope", etc._

## References and Resources

_Include any links to documentations, other issues, or MRs that you think may be useful to the assignee. If applicable, indicate a domain expert or resource person/group._

## Proposal

_Proposed/suggested solution or any guidance related to it. For investigations or spikes, this may describe an expected outcome or expected output._

## Definition of Done / Acceptance Criteria

_List the specific conditions that must be met for this issue to be considered complete._
```

## Issue リファインメント

Issue リファインメントの目的は、エンジニアが Issue をレビューし、開発の準備が整っていることを確認したうえで、軽量な見積もりを提供することにあります。
次のセクションにある [テンプレートチェックリスト](/handbook/engineering/ai/ai-coding/how-we-work/milestone_planning/#refinement-template) をガイドラインとして利用してください。

1. 初期ラベリング:
    - 新しい Issue が作成されたり、優先候補として識別されたら、「workflow::refinement」ラベルを付けます
    - このラベルは、Issue が開発の準備を整える前にリファインメント／トリアージを必要としていることを示します
2. リファインメントのタイミングと容量:
    - リファインメント作業は開発作業と同等の優先度として扱われます
    - エンジニアは時間の約 20% をリファインメント活動に充てるよう計画します
    - 先行計画と要件変更のバランスを取るため、次の 1〜2 マイルストーン分の Issue リファインメントに注力します
    - リファインメント作業をマイルストーンの最後に残さないようにします
3. 非同期リファインメントプロセス:
    - チームメンバーは、タイムゾーンに関係なく、自分の都合の良いタイミングで「workflow::refinement」ラベルの付いた Issue をレビューできます
    - 議論や明確化には Issue コメントを使います。チーム外のメンバーやドメインエキスパートを巻き込んで、追加のコンテキストや提案された解決策へのフィードバックをもらっても構いません
    - 個々のチームメンバーは、定期的な非同期バックログリファインメントセッションを自分のカレンダーに登録することを推奨します
    - リファインメントが必要な Issue を見つけやすくするため、[AI Coding Refinement Board](https://gitlab.com/groups/gitlab-org/-/boards/8994789) を利用します
    - リファインメントの取り組みは必ずタイムボックスを設けてください。リファインメントの目的は詳細な解決策を提供することではなく、問題に明確さを与え、解決策の出発点を示すことです。[リファインメントと実装の境界をどこに引くか](#where-to-draw-the-line-between-refinement-and-implementation) を参照してください。
4. リファインメントタスク:
    - Issue をリファインする際、チームメンバーは次の点に注力します:
        - 問題が明確で、ロードマップの優先度と整合していることを検証する
        - Issue ラベルが正確であることを確認する
        - Issue タイトル、説明、要件（`Context`、`Proposal`、`Acceptance Criteria` セクションを含む）を明確にする
        - 必要に応じて Issue を扱いやすい小さなタスクに分割する
        - 依存関係やブロッカーを特定し、ドキュメントに残す
        - 必要な労力を見積もり、Issue に対応するウェイトを割り当てる。詳細は [Issue 見積もり](#issues-estimation) セクションを参照してください。
5. リファインメント完了:
    - チームメンバーが Issue が十分にリファインされたと判断したら、次を行います:
        - 完了したリファインメントチェックリストを Issue にコメントとして投稿する
        - Issue に適切なウェイトが付いていることを確認する
        - 「workflow::ready for development」ラベルを追加し、「workflow::refinement」ラベルを削除する

### リファインメントテンプレート

Issue をリファインする際は、以下のテンプレートをコメントにコピーし、各 TODO 項目を順番に処理してください。リファインメントが完了したら、コメントを投稿して作業内容を記録します。

```markdown
## Refinement Checklist

- [ ] Validated the problem is clear and aligns with team priorities, engaged in any discussions with the PM or other stakeholders as needed
- [ ] Updated title for clarity (if needed)
- [ ] Updated labels for proper categorization (if needed)
- [ ] Added or improved the "Context" section with necessary background information
- [ ] Added or improved the "Proposal" section with potential implementation approach or suggested ideas to further investigate
- [ ] Added or improved the "Acceptance Criteria" or "Definition of Done" section
- [ ] Identified dependencies or blockers (if any)
- [ ] Considered if the issue should be broken down into smaller tasks
  - [ ] Created child issues if needed (link them here)
- [ ] Assigned a weight using [issue estimation](/handbook/engineering/ai/ai-coding/how-we-work/milestone_planning/#issues-estimation)

/weight X
/label ~"workflow::ready for development"
```

### リファインメントと実装の境界をどこに引くか {#where-to-draw-the-line-between-refinement-and-implementation}

リファインメント中は、別のメンバーが効率よく Issue を実装できるよう、十分なコンテキストと方向性を提供することに注力してください。リファインメント中にある程度の調査が必要になることはよくありますが、次のガイドラインを意識してください。

- **リファインメント**: 問題の特定、おおまかな方針の提案、有用なコンテキストの提供、労力の見積もり、成功基準の設定。
- **実装**: 具体的なコードの記述、正確なファイル位置の決定、詳細な技術判断、解決策の実行。

リファインメント作業の中で実装に取りかかってしまいそうな場合は、次のいずれかを検討してください。

1. その Issue を自分にアサインして実装に移行する
2. 実装はせずに調査結果をドキュメント化し、他のメンバーが調査内容の恩恵を受けられるようにする

リファインメントの目的は、すべての実装詳細を指示することなく、誰がその Issue を引き取っても何をすべきかわかる程度に明確にすることだと覚えておいてください。

## マイルストーンプランニング

リファインされた Issue が十分に揃ったら、マイルストーンプランニングに進みます。

1. キャパシティプランニング:
    - エンジニアリングマネージャーは、次のマイルストーンに利用可能なキャパシティを以下を用いて算出します:
        - 計画された休暇
        - 過去のベロシティ
        - リファインメントに割り当てる時間
        - その他の非開発活動（ミーティング、レビューなど）
2. 持ち越し作業:
    - 現マイルストーンで完了しない Issue を特定する
    - 残作業を反映するようウェイトを調整する
    - 次マイルストーンのキャパシティへの影響を考慮する
3. リファインメントの優先順位付け:
    - エンジニアリングマネージャーとプロダクトマネージャーは、これから 1〜2 マイルストーンでリファインメントが必要な Issue を特定し、優先順位を付けます
4. Issue 選定:
    - プロダクトマネージャーが戦略的優先度を定義する
    - 次マイルストーン用の優先度付き Issue リストを作成する
    - 可能な限り、すでにリファイン済みの Issue（「workflow::ready for development」ラベルが付き、ウェイトが設定されている Issue）に注力する
    - PM が次マイルストーンに必ず入れる必要のある Issue を特定したものの、まだ「workflow::ready for development」のラベルが付いていない場合は、できるだけ早くフラグを立て、チームメンバーを巻き込んでリファインを行う
5. Issue ラベル
    - プロダクトマネージャーは各 Issue の重要度を示すために適切な `code-creation-priority` ラベルを付ける
    - エンジニアリングマネージャーは、このマイルストーンで集中して取り組むことを約束する項目に [「Deliverable」ラベル](/handbook/product-development/how-we-work/product-development-flow/#required-labels) を付ける
    - 予想キャパシティを超える Issue は「Stretch」としてマークする

## チームメンバーの役割

エンジニア

- Issue リファインメント活動に積極的に参加する
- 技術的な実現可能性や実装アプローチに関する洞察と推奨事項を提供する
- リファインメントの議論ではドメイン知識と専門性を共有する
- 20% の時間配分目標を達成するため、リファインメント作業を自己管理する

エンジニアリングマネージャー:

- チームのキャパシティを算出し、マイルストーンプランニングを管理する
- PM と協力して今後の Issue の優先度を決める
- リファインメント活動がチーム全体に適切に分散していることを確認する

プロダクトマネージャー:

- 次マイルストーンに向けた戦略的優先度を定義する
- EM と協力して今後の Issue の優先度を決める
- Issue の要件と受け入れ基準が明確であることを確認する
- EM と協力して、今後の作業に向けたリファインメントニーズを特定する

## Issue 見積もり {#issues-estimation}

Issue 見積もりに使うウェイトは以下のとおりです。


<!-- include omitted: includes/engineering/create/weight_table.md (no localized version under content/ja/) -->


ウェイト 5 は、一般的に問題が明確でない、もしくは解決策をサブ Issue を持つ Epic に変換すべきであることを示します。このような場合は、元の Issue のスコープを調査・明確化するための spike Issue を作成することがあります。spike Issue は、元の Issue を分解する助けとして使えます。

## 何に取り組むか

### 作業の優先順位付け

Issue は 2 種類のラベルを組み合わせて優先順位付けされます。

- `Deliverable` ラベルは、現マイルストーンで完了することを約束する作業を示します
- `code-creation-priority` ラベル（high、medium、low）は、その作業の戦略的重要度を示します

作業の優先順位は次のとおりです。

1. `Deliverable` かつ `code-creation-priority::high` の Issue
2. その他の `Deliverable` Issue（優先度レベルに関係なく）
3. Deliverable 以外の Issue（優先度に基づく）:
    - `code-creation-priority::high`
    - `code-creation-priority::medium`
    - `code-creation-priority::low`

### 最初に取り組むこと: Deliverable

- **優先度**: Deliverable は最優先度として扱われ、私たちのイテレーションサイクルおよび月次リリーススケジュールに合わせて、マイルストーン終了までに完了させる必要があります。
- **セルフアサイン**: エンジニアは [「Deliverable」ラベル](/handbook/product-development/how-we-work/product-development-flow/#required-statuses-1) の付いた任意の Issue を選んで自分にアサインできます。これらはマイルストーンの最優先項目となります。現マイルストーンの Issue は [AI Coding workflow board](https://gitlab.com/groups/gitlab-org/-/boards/10081212) で確認できます。
- **重要性**: エンジニアは、これらの Deliverable をサイクル内に完了させるよう全力で取り組み、障害があればエンジニアリングマネージャーに迅速に伝えることが重要です。
- **コミュニケーションと柔軟性**: 想定外の課題が発生し、Deliverable の完了に影響することがあります。早めに共有することで、スコープ縮小や担当替えなどの対応策が取れます。サイクル内に完了できなかった Deliverable は次サイクルに送られます。これはエンジニアとエンジニアリングマネージャーの双方にとって、経験から振り返り学ぶ機会となります。

### 次に取り組むこと

- **Stretch Issue**: Deliverable やその他の活動を終えた後、エンジニアは残った時間で Stretch Issue に取り組めます。これらは優先度が低めで、現イテレーション内での完了は想定されていませんが、次サイクルの Deliverable 候補です。これらに早めに着手するのはボーナス的な扱いです。
- **その他のアイデア**: エンジニアは、製品や会社に大きく貢献すると思われる作業に余った時間を使うことを推奨されています。[一般ガイドライン](/handbook/values/#dont-wait) にあるとおり、「インスピレーションは生もの」なので、「比較的短時間で大きな成果を生む何かに熱中しているなら、それに自由に取り組んでください」。こうした取り組みを進める際は、適切な Issue アサインを行い、可視性とコラボレーションのため、関連チャネルで作業を共有することを検討してください。
- **柔軟性より責任感**: 私たちは [マネージャー・オブ・ワン](/handbook/values/#efficiency) であることを期待し、[硬直よりも責任](/handbook/values/#efficiency) を好みます。Issue ボードに無いものに取り組むと決めたとき、許可を求める必要はありませんが、他の責任を念頭に置き、Issue が存在し、自分にアサインされていて、チームに共有されている状態にしてください。

## ワークフローとラベル管理

- **ラベル更新**: Issue が「ready for development」から「in dev」、「in review」へと進むにつれて、エンジニアは [「workflow」ラベル](/handbook/product-development/how-we-work/product-development-flow/#build-track) を正確に更新することが重要です。
- **責任**: エンジニアは、マイルストーン中に取り組んでいるすべての Issue について、ワークフローラベルを最新の状態に保つ責任があります。

このマイルストーンプランニングプロセスは、誰もが優先度と責任について整合した状態を保ち、チームの効果を最大化することを目的としています。チーム全員が計画プロセスに貢献するコラボレーティブな環境を育み、より整理された生産的な開発サイクルにつながります。

## プランニング指標と継続的改善

このプロセスの効率性を測るために、定期的にメトリクスを追跡しレビューする必要があります。

私たちは次のようなメトリクスを追跡しています。

- Issue がリファインメントに費やす平均時間
- 1 週間あたりにリファインされる Issue 数
- リファインメント活動に費やされる時間と開発時間の比率

また、レトロスペクティブを通じてチームメンバーからプロセスに関するフィードバックを集めています。
