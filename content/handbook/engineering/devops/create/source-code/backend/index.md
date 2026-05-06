---
title: "Create:Source Code BE チーム"
description: Create:Source Code BE チームは、Create ステージの Source Code グループに属するプロダクトカテゴリのすべてのバックエンド側面を担当します。
upstream_path: /handbook/engineering/devops/create/source-code/backend/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T11:23:44Z"
translator: claude
stale: false
---

Create:Source Code BE チームは GitLab の Source Code Management（SCM）ツールに焦点を当て、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [Create ステージ](/handbook/product/categories/#create-stage)における [Source Code グループ](/handbook/product/categories/#source-code-group)のプロダクトカテゴリのすべてのバックエンド側面を担当します。プロダクトの方向性については、[カテゴリ方向 - Source Code Management](https://about.gitlab.com/direction/create/source_code_management/) ページをご覧ください。

私たちは Gitaly チームおよびコードレビューチームと連携し、[Create:Source Code フロントエンドチーム](/handbook/engineering/devops/create/source-code/frontend/)と密接に協力します。私たちが扱う機能は[グループ別機能ページ](/handbook/product/categories/features/#code-creation)にリストされており、技術的なドキュメントは [Create: Source Code Backend](https://docs.gitlab.com/ee/development/backend/create_source_code_be/index.html) ページで確認できます。

## チームハンドブックページについて

これはチームにとって重要なすべてのことを見つけるための中心的なドキュメントです。チームメンバー、プロセス、慣行、ミーティング、リンク、チャンネル、メトリクスなどについての唯一の信頼できる情報源です。このページで、チームメンバーはこのチームに完全に参加するために必要なすべてのものを見つけられるはずです。

### このページの更新

チームハンドブックページを更新する DRI として行動するには、以下のステップに従うことを検討してください:

- [ハンドブック更新エピック](https://gitlab.com/groups/gitlab-org/-/epics/14740)に移動します。
- このページへの変更が必要な理由を説明するサブ Issue を作成します。
- 素早く対応できてコンテキストがある場合は、重みを 1 として MR を作成して変更を加えます。
- より多くの労力が必要な場合は、重みを高くして成功する変更に必要なものを説明します。次のマイルストーン計画時に考慮できます。
- MR が準備できたら、フィードバックを求めるコメントで `@gitlab-com/create-team/source-code/backend` をメンションします。チーム全体をメンションすることで、チームの全員がチームの運営方法に貢献できます。
- ドキュメントをクロスファンクショナルに共有する機会があると思う場合は、フロントエンドチームにピンして彼らのフィードバックを得ることを検討してください。
- EM をレビュアーとして割り当てます。
- チームが議論するための 2 営業日が経過し、懸念事項が解決されたら、EM にマージをお願いできるかフォローアップしてください。

## チームメンバー

以下の人々は Create:Source Code BE チームの恒久メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/source-code/backend/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

以下の人々は他の機能チームのメンバーで、私たちの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/source-code/backend/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 共通リンク

- GitLab チームハンドル: `@gitlab-com/create-team/source-code/backend`
- Slack チャンネル: `#g_create_source-code-be`、`#g_create_source-code_stand-up`、`#g_create_source-code`、`#s_create`
- [チームエラーバジェット - グループダッシュボード](https://dashboards.gitlab.net/goto/2YoyikIHR?orgId=1)
- [チームエラーバジェット - 詳細ダッシュボード](https://dashboards.gitlab.net/goto/O6YJZodNR?orgId=1)

## AI プロンプト

私たちは効率化のために使用する[共通 AI プロンプト](/handbook/engineering/devops/create/source-code/ai-prompts/)のリストを管理しています。

## ワークフロー

私たちは標準的な GitLab [エンジニアリングワークフロー](/handbook/engineering/workflow/)を使用します。Create:Source Code BE チームの Issue を作成するには、以下のラベルを追加してください:

- ~backend
- ~"devops::create"
- ~"Category:Source Code Management"
- ~"group::source code"

より緊急な事項については、Slack の `#g_create_source_code` チャンネルを使用してください。

[サポートするカテゴリ別機能についてはこちらをご覧ください。](/handbook/product/categories/features/#code-creation)

### プロダクトチームとの協力

プロダクトマネージャーとエンジニアリングマネージャー（フロントエンドおよびバックエンド）の週次コールは「Source Code Group」カレンダーに登録されています。誰でも参加歓迎で、これらのコールはグループに影響するブロッカー、懸念事項、状況更新、成果物、またはその他の考えを議論するために使用されます。

#### Issue のリファインメント

1. 問題を検証したら、プロダクト、UX、エンジニアリングが協力してソリューションを提案し、技術的に実現可能なものを決定します。提案されたソリューションは、問題を解決するかどうかを検証するためにユーザーと共有される場合があります。
    1. デザイン作業が必要な Issue は `UX` と `workflow::ready for design` でマークされます。
    1. デザインプロセス中の Issue は `workflow::design` でマークされます。
    1. デザインが準備でき、提案されたソリューションが実現可能と判断されたら、`workflow::planning breakdown` ラベルが適用されます。
1. 提案されたソリューションが実現可能であることを確認したら、できる限り分解する段階に移ります。Issue がこの段階に準備できたら、PM は `workflow::refinement` ラベルを Issue にマークして次のステップを示します。
1. EM はリファインメント Issue を作成し（[例](https://gitlab.com/gitlab-com/create-stage/source-code-be/-/issues/249)）、`workflow::refinement` ラベルのついたタスクをエンジニアに配分します。
1. エンジニアまたは EM は割り当てられた Issue のチェックリストに従い、必要に応じて PM、UX、その他のエンジニアリングカウンターパートと協力して質問や懸念事項に対処します。
1. Issue の計画された実装をさらに分解できる場合、エンジニア/EM は PM と協力してスコープを縮小し、そうなるまで新しい Issue を作成します（PM またはエンジニア/EM のどちらも新しい作業アイテムを作成できます）。
1. Issue が完全にリファインされたら、エンジニアまたは EM は適切な[重み](/handbook/engineering/devops/create/source-code/backend/#weight-categories)を追加し、`workflow::ready for development` としてラベルを付けます。これらの Issue はミルストーンに追加できます。
1. 他のチームが現在のマイルストーンに計画されている Source Code Backend の Issue に依存している場合、それらの Issue には `SCM::AwaitingBackend` のラベルが付けられます。

**注意**: このプロセス後に Issue の重みが 3 を超える場合は、IC が何が必要かについて完全な把握ができていない可能性があり、さらなる調査が必要であることを示している場合があります。

#### 図

```mermaid
flowchart TD
    Start([When the issue is ready for engineering review])

    subgraph PM[Product Manager]
        RefinementLabel[Apply workflow::refinement label]
        click RefinementLabel "https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Asource%20code&label_name%5B%5D=workflow%3A%3Arefinement&label_name%5B%5D=scm-backlog&first_page_size=20" _blank
    end

    subgraph EM[Engineering Manager]
        CreateRefIssue[Create refinement issue]
        DistributeTasks[Distribute tasks to engineers]
    end

    subgraph ENG[Engineer/EM]
        RefineIssue[Follow refinement checklist]
        NeedBreakdown{Can be broken down?}
        CreateNewIssues[Create smaller issues]
        FullyRefined[Issue fully refined]
        ReadyLabel[Apply workflow::ready for development label]
    end

    subgraph PM_EM[PM & EM]
        AddMilestone[Add to milestone]
    end

    Start --> RefinementLabel
    RefinementLabel --> CreateRefIssue
    CreateRefIssue --> DistributeTasks
    DistributeTasks --> RefineIssue
    RefineIssue --> NeedBreakdown
    NeedBreakdown -->|Yes| CreateNewIssues
    CreateNewIssues --> RefineIssue
    NeedBreakdown -->|No| FullyRefined
    FullyRefined --> ReadyLabel
    ReadyLabel --> AddMilestone
    AddMilestone --> End([Development process starts])

    style Start fill:#f9f,stroke:#333,stroke-width:2px
    style End fill:#f9f,stroke:#333,stroke-width:2px
    style NeedBreakdown fill:#ffd,stroke:#333

    classDef pmStyle fill:#e6f3ff,stroke:#333
    classDef emStyle fill:#fff0e6,stroke:#333
    classDef engStyle fill:#e6ffe6,stroke:#333
    classDef sharedStyle fill:#f0f0f0,stroke:#333

    class RefinementLabel pmStyle
    class CreateRefIssue,DistributeTasks emStyle
    class RefineIssue,NeedBreakdown,CreateNewIssues,FullyRefined,ReadyLabel engStyle
    class AddMilestone sharedStyle
```

### Issue リファインメントチェックリスト

リファインメントが必要な Issue に対して、エンジニア/EM はこのテンプレートを使用してコメントを追加し、すべてのチェックリストアイテムを完了させる必要があります。

これらのステップのいずれかを完了できない場合は、EM/PM にピンしてください。

```plaintext
# Issue Refinement Checklist

## Problem verification
- [ ] Issue label is ~"workflow::refinement"
- [ ] Issue title clearly describes the feature or change
- [ ] Issue description defines requirements and expectations
- [ ] Required permissions and access levels defined

## Implementation plan

- [ ] A comment with an implementation plan is created
- [ ] Issue is small and doesn't need to be broken down

## Final steps
- [ ] This issue has a weight
- [ ] There are no blockers
- [ ] Issue has ~"workflow::ready for development" label
```

### バグリファインメントチェックリスト

リファインメントが必要なバグレポートに対して、エンジニア/EM はこのテンプレートを使用してコメントを追加し、すべてのチェックリストアイテムを完了させる必要があります。

```plaintext
# Bug Refinement Checklist

## Bug verification
- [ ] Issue label is ~"workflow::refinement"
- [ ] Issue label is ~"type::bug"
- [ ] Issue title clearly describes the bug
- [ ] Steps to reproduce are documented
- [ ] Issue is still reproducible
- [ ] Severity labels are defined
- [ ] Related logs or error messages are attached

## Technical analysis
- [ ] Root cause has been identified or hypothesized
- [ ] Affected components/services are identified
- [ ] Potential side effects of the fix are considered

## Implementation plan
- [ ] A comment with an implementation plan is created
- [ ] Fix scope is contained and doesn't require larger refactoring
- [ ] Test cases to verify the fix are defined

## Final steps
- [ ] This issue has a weight
- [ ] There are no blockers
- [ ] Issue has ~"workflow::ready for development" label
```

### 実装計画

リファインメント中の Issue に対して、提供されたテンプレートを使用してコメントを追加してください。

```plaintext
### Implementation Plan

**1. Approach**

<!-- Provide a high-level description of the implementation idea -->

**2. Dependencies**

- [ ] Requires ~backend
- [ ] Requires ~frontend
- [ ] Requires ~database
- [ ] Requires ~documentation
- [ ] Requires ~UX work
- [ ] External service dependencies identified
- [ ] Requires ~API changes

**3. Implementation Steps**

<!-- Provide step by step description of what needs to be done -->

- Task 1
- Task 2
- Task 3

**4. Edge Cases**

<!-- Does the implementation cover all scenarios (success, failure) -->

- Success scenarios:
  - Case 1
  - Case 2

- Error scenarios:
  - Case 1
  - Case 2

- Edge conditions:
  - Case 1
  - Case 2


@engineer_username please review this implementation plan.
<!--
Pick a peer engineer following this criteria:
1. is a subject matter expert.
2. might have some familiarity with the topic. or
3. ask on slack who'd be available to review this plan before the due date of the issue
-->
```

#### エピック、Issue、タスク

Source Code チームは以下の計画オブジェクトの構造を使用して作業を整理します:

1. **エピック:** 複数のマイルストーンにまたがる複数の Issue による配信を伴う、特定のカテゴリ/テーマ（最も広い）または機能（最も具体的）に沿ったより大きな作業セットを識別するために使用されます。
1. **Issue:** 計画され、単一のマイルストーン内で配信できる個別のアイテムに使用されます。
1. **タスク:** Issue の DRI が Issue 内に作成して、Issue を完了するために配信が必要な部分をさらに定義できます。例: ペアプログラミングのための、進捗の詳細な把握のため、など。

### 設定より規約

私たちの方向性に述べているように、[設定より規約](https://about.gitlab.com/direction/create/source_code_management/#critical-product-principles)の原則に特別な重点を置く必要があります。Create:Source Code の機能セットが拡大するにつれて、問題を設定で解決したくなる自然な傾向があります。これが起きないよう、MVC や新機能の Issue に意図的に疑問を持つ必要があります。最良の結果を得るために以下のステップを検討してください:

1. Issue に `workflow::needs issue review` のラベルが付いたら、PM は提案をピアまたはマネージャー、エンジニアリング（EM または IC）、プロダクトデザイナーと共有します。

1. Issue をレビューするプロダクトおよびエンジニアリングのピアは、可能な限り設定を排除する機会を探すべきです。機会が特定された場合、Issue は `workflow::refinement` に戻されます。

1. PM とピアがその提案に満足し、可能な限り設定より規約の原則に従っている場合、提案をレビューした人々は提案への同意を示します（Issue 内の 👍 またはコメント）。最後に、PM または EM は Issue に `workflow:: ready for development` ラベルを付けます。

### カウンターパートとの協力

PM 以外の安定したカウンターパートと必要に応じて密接に協力することが推奨されます。リリースキックオフの前と、コードレビューや Issue の懸念事項として必要に応じて、品質エンジニアリングとアプリケーションセキュリティのカウンターパートを特に含めます。

品質エンジニアリングは[クアッドプランニングプロセス](https://gitlab.com/gitlab-com/www-gitlab-com/issues/6318)を通じてワークフローに含まれます。

アプリケーションセキュリティはキックオフメールがチームに送られると同時にワークフローに含まれ、次のマイルストーンの作業をレビューし、注意すべき懸念事項や潜在的なリスクをメモできます。

### コミュニケーション

チームとして、コミュニケーションをとる際にレスポンシブで対応力があることを目指します。情報を取り込む際に、簡略な用語集として以下の絵文字を使用します:

| 絵文字 | 定義                                                                                                          |
|-------|---------------------------------------------------------------------------------------------------------------------|
| 👀    | 今確認しています                                                                                             |
| 🤔    | 返答する前に考える必要があります                                                                        |
| 📍    | 今は時間がありません。後で戻ります                                                                             |
| 🤷🏼    | わかりません                                                                                                        |
| 👌    | 理解しました                                                                                                        |
| 👍    | 同意します（多くの場合、追加のコメントはしません）                                                                     |
| ✅    | タスクが完了しました                                                                                                    |
| ⏭    | 確認しましたが、私が最適な担当者だとは思いません。誰も返答せず助けが必要な場合はピンしてください |

### マージリクエストレビュー


<!-- include omitted: includes/engineering/create/conventional-comments.md (no localized version under content/ja/) -->


#### レビューのリクエスト

初回レビューでは、Source Code チームのレビュアーを選択することが推奨されます。

メンテナーレビューでは、レビュアールーレットの推奨に従うことができます。時間に敏感または複雑なレビューでは、Source Code チームのレビュアーを選択することが好ましいです。

### トリアージプロセス

週次トリアージレポートは [GitLab ボット](https://gitlab.com/gitlab-bot)によって自動的に生成され、このレポートは EM によってレビューされます。前回のレポートの[例](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/2700)があります。

トリアージレポートはかなり長くなることがあり、効率的に対処することが重要です。効果的なアプローチは:

- 各 Issue を別々のブラウザタブで開き、「Issue の編集」を使用してレビュー済みとしてマークし、タブを閉じます。
- Issue が ~"group::source code" に属するかどうかを確認し、必要に応じてグループラベルを変更します。この評価のために[グループ別機能](/handbook/product/categories/features/#code-creation)ページが良い出発点です。
- フロントエンドの Issue の場合は ~frontend を適用します。
- 重複かどうかを確認するための簡単な検索を行い、該当する場合は ~Duplicate ラベルを付けて閉じます。
- ~"support request" ですか？~"needs investigation" ですか？該当する場合はラベルを適用します。
- ~regression ラベルを適用し、最近のものであれば重大度の番号を上げることを検討します。
- 重大な影響のない小さな Issue には ~"severity::4"、~"priority::4"、%Backlog を適用します。
- 明確な解決策がある議論の余地のない問題には、~"Seeking community contributions" の適用を検討します。
- 新しいコミュニティコントリビューターが興味を持てる可能性がある簡単な Issue には、~"quick win" の適用を検討します。
- 回避策のあるバグには ~"priority::3" ~"severity::3" を適用します。
- データ損失、深刻なパフォーマンス影響、セキュリティを引き起こすものには ~"severity::1" と ~"priority::1" または ~"priority::2" を適用し、チームメンバーに割り当てます。
- トリアージレポートから自分自身を割り当て解除します。

### エンジニアリングサイクル

エンジニアリングサイクルは[毎月の GitLab リリース日](/handbook/engineering/releases/monthly-releases#timelines)を中心に展開します。これは月の唯一の固定日であり、以下の表は特定の月における他の日付をどのように決定できるかを示します。

#### イテレーションドキュメント

これらのドキュメントは、リリース計画と実行中に記録されたすべてのものを含みます。

##### Issue ボード

Create Source Code BE の計画は以下のソースから入力を受けます:

- [パフォーマンスボード](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=performance-refinement)
- [Infradev ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=infradev)
- [アプリケーション制限ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=Application%20Limits)
- [セキュリティボード](https://gitlab.com/gitlab-org/gitlab/-/boards/2716576?label_name[]=group%3A%3Asource%20code&label_name[]=security)
- [SLO 逸脱ボード](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=missed-SLO&label_name[]=backend)
- バグ
- 新機能

Create Source Code UX の計画は以下のソースから入力を受けます:

- [SCM UX 計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/5092292?label_name[]=UX&label_name[]=group%3A%3Asource%20code)
- [SCM UX ビルドボード](https://gitlab.com/groups/gitlab-org/-/boards/5092276?label_name[]=UX&label_name[]=group%3A%3Asource%20code)

##### 計画 Issue

毎月、EM の一人が[自動化ツール](https://gitlab.com/gitlab-com/create-stage/source-code-be/-/blob/main/doc/planning/index.md)を使用して、[Source Code Issue テンプレート](https://gitlab.com/gitlab-org/create-stage/-/blob/master/.gitlab/issue_templates/source-code-planning.md)に基づいて計画 Issue を作成します。

##### 計画ボード

[計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/2822491?milestone_title=14.1&label_name%5B%5D=group%3A%3Asource%20code)は PM が各リリースに対して作成し、カテゴリ別にキュレーションされた Issue のリストです。EM はエンジニアに対して[リファインメント](/handbook/engineering/devops/create/source-code/backend/#issue-refinement)プロセスを通じて Issue のリファインメントと重みの割り当てを支援するよう依頼します。

##### キャパシティ計画スプレッドシート

EM はチームのキャパシティを計算するための [Google スプレッドシート](https://docs.google.com/spreadsheets/d/1A7Xgz4IrksKYbTbSVgvRPEV8CQgUe9hQC2A9tS-SEa8/edit#gid=1568889265)を管理しており、同じスプレッドシートを使用して重みと優先度に基づいてリリースに Issue を割り当てるプロセスを実行します。

##### ビルドボード

EM は以下に基づいて[計画ボード](#計画ボード)から Issue を選択します:

- スリップした Issue
- 重み
- 優先度
- PM の優先事項

EM は次に、リリース内の各 Issue に ~Deliverable ラベルを適用し、エンジニアに割り当てます。Issue はビルドボードを通じてリリース全体で追跡されます。

#### 候補 Issue

緊急の Issue は、他のチームが可視性を持てるよう、暫定的にリリースに割り当てられます。

この時点で Issue は *Candidate* ステータスであり、マイルストーンは確定的にスケジュールされることを確認するものではありません。Issue は[Issue 選択](#issue-の選択)プロセス中に *Candidate* ステータスから確定に移行します。

#### 主要日程

| 日付 | イベント |
| ------ | ------ | ------ |
| マイルストーン終了週の月曜日 |**PM** が計画ボードを作成し、レビューと重み付けのために計画 Issue で EM にピンします。<br><br> **EM** がキャパシティを計算し、計画 Issue に追加します。<br><br>**PM** がレビューのために RPI を提出します。|
| マイルストーン終了週の月曜日から金曜日 |**EM** と **IC** が計画ボードの Issue に重みを追加します|
| マイルストーン終了金曜日 | **EM** が Issue に ~Deliverable ラベルを追加して、ビルドボードに *ドラフトとして* 表示されるようにします<br><br>リリースポスト: **EM**、**PM**、**PD** がユーザビリティ、パフォーマンス改善、バグ修正の MR に貢献します|
| マイルストーン終了金曜日 | **EM** がスリッページに対して ~Deliverable ラベルを調整し、最終的な割り当てを行います<br><br>**PM** がビルドボードでマイルストーンの最終計画をレビューします<br><br>**EM** がマージされた機能の RPI MR をマージします。|
| 月の第 3 木曜日 | リリース |

#### Issue の重み付け

Issue を完了するために必要なキャパシティを予測するために重みのシステムを使用します。

これらは EM がアドホックで、またはエンジニアが[リファインメント](/handbook/engineering/devops/create/source-code/backend/#issue-refinement)プロセスに従って割り当てます。

##### 重みカテゴリ

使用する重みは:


<!-- include omitted: includes/engineering/create/weight_table.md (no localized version under content/ja/) -->


重みが 5 の場合は、通常、問題が明確でないか、または解決策をサブ Issue を持つエピックに変換すべきであることを示します。

###### Issue を分解すべき場合

問題が明確に定義されているが大きすぎる場合（重みが 5 以上）は、次のいずれかを行います:

- Issue をエピックに昇格させ、作業をサブ Issue に分解します。可能であれば個々の Issue に重みを付けます。
- EM と PM にピンして、Issue をエピックに昇格させる必要がある理由を説明します。

###### Issue の SSOT が不明確な場合

- 重みを割り当てず、代わりに何が明確化を必要としているかを示すコメントを追加し、EM と PM にピンします。

###### Issue がスパイクを必要とする場合

- 重みを割り当てず、代わりにスパイクの必要性（および場合によっては何を調査するか）についてのコメントを追加し、EM または PM にピンします。
- スパイクは重み 2 でスケジュールされます。
- スパイクは重み 2（タイムボックス）でスケジュールされます。

これらの Issue についての詳細は[スパイク Issue](#スパイク-issue) セクションを参照してください。

##### セキュリティ Issue

セキュリティ Issue は通常、上記の表から通常より 1 レベル高い重みが付けられます。これは[パッチリリースプロセス](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md)での追加作業とバックポートを考慮するためです。

#### 計画 Issue のレビュー

Source Code の安定したカウンターパート（BE、FE、PM、UX）が集まり、次のリリースで取り組む Issue を提案します。[Mural](https://www.mural.co/) ビジュアルコラボレーションツールを使用して、候補の Issue にグループで投票します。

#### キャパシティ計画

キャパシティ計画は、すべての Source Code チームメンバーとフロントエンド、UX、プロダクトの安定したカウンターパートが関与する共同作業です。毎月の Issue の初期リストは Source Code グループ計画 Issue（[例](https://gitlab.com/gitlab-org/create-stage/-/issues/12783)）で追跡されます。

##### チームの可用性

新しいリリース開始のおよそ 5〜10 営業日前に、EM はチームがどれだけ「利用可能」かを判断し始めます。可用性を決定する際に考慮されるいくつかの事項は:

- 今後のトレーニング
- 今後の休暇/祝日
- 今後のオンコールシフト
- 他チームの成果物に費やす可能性のある時間

可用性は *(利用可能な稼働日 / リリース内の稼働日) * 100* で計算されるパーセンテージです。

すべての個人貢献者は「重み予算」10 から始まります。つまり、（履歴データに基づいて）最大合計重みポイントが 10 の Issue を完了できることを意味します（例: 重みが 5 と 5 の 2 つの Issue、または重みが 1 ずつの 10 の Issue など）。その後、可用性のパーセンテージに基づいて個人の重み予算が削減されます。例えば、80% の可用性がある場合、重み予算は 8 になります。

プロダクトはチームの合計重み予算に基づいて Issue を優先します。私たちの[計画ローテーション](#キャパシティ計画)は、プロダクトが優先しようとしている Issue に重みを割り当て、キックオフ前に優先される作業量と処理できる量を把握するのに役立ちます。

##### Source Code の Issue パイプライン

Source Code の Issue パイプラインは広く、PM と EM が計画プロセス全体を通じて協力し、最終リストは Issue 選択ミーティング中に決定されます。Issue パイプラインには以下が含まれます:

- 機能
- バグ
- セキュリティ Issue
- [Infradev ボードの Issue](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=infradev)
- [パフォーマンスボードの Issue](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=performance-refinement)
- [アプリケーション制限ボードの Issue](https://gitlab.com/gitlab-org/gitlab/-/boards/706619?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Asource%20code&label_name[]=Application%20Limits)

#### Issue の選択

16 日前後に、PM と EM はリリースの Issue リストを確定するために再度会議を開きます。そのリリースの Issue ボードが更新され、候補マイルストーンに残る未選択の Issue はバックログに移動するか、将来のリリースの候補として追加されます。

リリースにスケジュールされた Issue は ~"workflow::ready for development" とマークされます。

#### Issue の割り当て

Issue の割り当ては、月次バックログリファインメントミーティングとマイルストーン計画ミーティング中に協同で行われます。
これらのミーティング後に優先 Issue が発生した場合、またはミーティング中に割り当てができない場合は、EM がマイルストーン開始前に直接 Issue を割り当てます。

#### フォローアップ Issue

リリースで何かに取り組んだが技術的負債、フィーチャーフラグの展開や削除、Issue のブロックしない作業など、残タスクがある場合にフォローアップ Issue を収集し始めます。これらについては、少なくとも 2 つの方法で対処できます:

- 重みと作業の重要性の良い説明を付けて、フォローアップ Issue に適切な将来のマイルストーンを追加します
- 親 Issue が修正されたが、フィーチャーフラグ経由でアクティベーション待ちの場合、親 Issue の説明を更新します: 「この変更はマージされました。ロールアウトはこのロールアウト Issue で管理されます。ロールアウト Issue がクローズされたら、この変更が有効になります。」また、関連するフィーチャーフラグ Issue を親 Issue にリンクします。
- Issue を関連する[計画 Issue](https://gitlab.com/gitlab-org/create-stage/-/issues?scope=all&utf8=%E2%9C%93&state=opened&search=source+code+group+planning)に追加します

[完了の定義](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)の一部であるフォローアップ作業は、できれば元の作業と同じマイルストーン、または直後のマイルストーンで引き受けるべきです。これが大量の作業を表す場合は、マネージャーの注意を促してください。スケジューリングの決定に影響する可能性があります。

フォローアップ Issue が多い場合は、エピックの作成を検討してください。

#### スパイク Issue


<!-- include omitted: includes/engineering/create/spike-issues.md (no localized version under content/ja/) -->


##### 非常に複雑またはタイムセンシティブな Issue への二重割り当て

[以前のレトロスペクティブ](https://gitlab.com/gl-retrospectives/create-stage/source-code/-/issues/74#note_1914857307)で議論したように、Issue を分解することに加えて、非常に複雑またはタイムセンシティブな Issue に対しては、1 人ではなく 2 人のエンジニアを割り当てるべきです。この共同所有により、複数 MR タスクの並行作業、即時コードレビューの迅速化、最終的な成果物のより速い配信が可能になります。

#### バックエンドとフロントエンドの Issue

多くの Issue はバックエンドとフロントエンドの両方での作業を必要としますが、その作業の重みは同じでない場合があります。Issue に設定できる重みは 1 つしかないため、この場合はスコープラベルを代わりに使用します: `~backend-weight::<number>` と `~frontend-weight::<number>`。

### ワークフローラベル


<p class="my-3 text-sm text-gray-600 italic">ワークフローラベルは <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/source-code/backend/#workflow" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### レトロスペクティブ

「マイルストーンごと」の定期レトロスペクティブが 1 回あり、アドホックな「プロジェクトごと」のレトロスペクティブを行う場合もあります。

#### マイルストーンごと


<p class="my-3 text-sm text-gray-600 italic">レトロスペクティブは <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/source-code/backend/#retrospectives" rel="external noopener">原文 (英語)</a> を参照してください。</p>


#### プロジェクトごと

特定の Issue、機能、またはその他の種類のプロジェクトが特に有益な学習経験になる場合は、それから学ぶために同期または非同期のレトロスペクティブを行うことがあります。取り組んでいることがレトロスペクティブに値すると感じる場合:

1. レトロスペクティブを行いたい理由を説明し、同期または非同期にすべきかを示す [Issue を作成する](https://gitlab.com/gl-retrospectives/create-stage/source-code/issues)
1. EM と関与すべき他の人（PM、カウンターパートなど）を含める
1. 該当する場合は同期ミーティングをコーディネートする

レトロスペクティブからのすべてのフィードバックは、最終的に参照用に Issue に記録されるべきです。

### ディープダイブ


<!-- include omitted: includes/engineering/create/deep-dives.md (no localized version under content/ja/) -->


### キャリア開発


<p class="my-3 text-sm text-gray-600 italic">キャリア開発は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/source-code/backend/#career-development" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### パフォーマンスモニタリング

Create:Source Code BE チームは、いくつかの API エンドポイントと
コントローラーアクションをパフォーマンス良く保つ（例: 目標速度インデックス以下に）責任があります。

パフォーマンスの概要を素早く把握するための Kibana ビジュアライゼーションをいくつか示します:

- [Create::Source Code: コントローラーアクション](https://log.gprd.gitlab.net/app/kibana#/visualize/edit/32698f60-b145-11ea-bfe2-25f984e253f8?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))
- [Create::Source Code: エンドポイント](https://log.gprd.gitlab.net/app/kibana#/visualize/edit/104d4bf0-a0d9-11ea-8cfd-8dcd98a55a1d?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))

これらのテーブルは、グループが担当するエンドポイントとコントローラーアクションでフィルタリングされ、デフォルトで過去 7 日間の P90（最も遅いものから順に）でソートされています。

### ランブック

所有するサービスと機能の Tier 1 サポートを支援するためのランブックが管理されています。
これらのランブックには、インシデントの初期特定と分類のための診断ステップ、トリアージ情報、および監視の詳細が含まれています。また、一般的な問題や定期的な操作のための基本的な手順とトラブルシューティングステップも含まれています。

現在、以下のサービスと機能に関する公開ランブックがあります:

- [リポジトリミラーリング](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/repository-mirroring)
- [Workhorse](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/workhorse)
- [Blob の削除](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/remove-blobs.md)

### プレイブック

プレイブックは [Tier 2](https://internal.gitlab.com/handbook/engineering/tier2-oncall/)
オンコールエンジニアをサポートするために設計されています。プレイブックはランブックよりも高いレベルの技術的およびドメイン知識を必要とし、標準的な Tier 1 ランブック手順では解決できなかった複雑な問題のトラブルシューティングのための詳細な技術ガイダンスを提供します。

現在、以下のサービス固有プレイブックが公開されています:

- [リポジトリミラーリング](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/create/repository-mirroring/)
- [Workhorse](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/create/workhorse/)

また、チームが所有するサービス固有のプレイブックにまだ属していない機能とコードをカバーする一般的な Source Code Management プレイブックも管理しています:

- [Source Code Management](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/create/source-code-management/)
