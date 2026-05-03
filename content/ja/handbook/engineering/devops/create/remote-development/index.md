---
title: 'Create:Remote Development グループ'
description: >-
  Remote Development グループは Create ステージの一部です。Workspace と Web IDE の2つのカテゴリーに注力しています。
upstream_path: /handbook/engineering/devops/create/remote-development/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T10:48:33Z"
translator: claude
stale: false
---

## 概要

このグループは [Dev サブ部門](/handbook/engineering/devops/)の [Create ステージ](/handbook/engineering/devops/create/)の一部です。2つの[カテゴリー](https://about.gitlab.com/direction/create/#categories-in-create)に注力しています：`Workspace` と `Web IDE`。

### グループの原則

<span id="-team-principles" data-message="alias anchor for old links"></span>

[Create:Remote Development の原則](principles/)：Create:Remote Development グループの原則とは何ですか？

### チームメンバー

以下の人物が Remote Development エンジニアリンググループの恒久的なメンバーです：

**エンジニアリングマネージャー & エンジニア**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/remote-development/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


**プロダクト、デザイン、テクニカルライティング、セキュリティ & 品質**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/remote-development/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### カテゴリー DRI

<span id="-team-category-dris" data-message="alias anchor for old links"></span>

| カテゴリー | DRI |
|--------------------------|------------------------------------------|
| Workspaces | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/devops/create/remote-development/#team-members) |
| Web IDE | [原文 (英語)](https://handbook.gitlab.com/handbook/engineering/devops/create/remote-development/#team-members) |

### アーキテクチャ設計ドキュメント

設計ドキュメントは、アーキテクチャ設計ワークフローが中心とする主要な成果物です。設計ドキュメントはテクニカルビジョンと、私たちが前進するにつれて機能実装を導く一連の原則を説明します。チームの足並みを揃えるガードレールとして機能します。

- [Workspaces](/handbook/engineering/architecture/design-documents/workspaces/)

### 新規採用者

**Remote Development チームと技術スタックが成熟し続けるにつれて、新規採用者向けのチーム固有のオンボーディングプロセスを持つことが重要です。** このチェックリストは、会社のオンボーディングから2週間後に始まり、チームに固有の主要な領域とプロセスを案内するために設計されています。Web IDE と Workspaces に関連するミッション、必須ツール、ワークフローをカバーしています。既存のチームメンバーは定期的にチェックリストを見直し、新しいメンバーにとって正確で有用であり続けるように、不足している情報や更新された情報を追加することが奨励されています。テンプレートはhttps://gitlab.com/gitlab-com/create-stage/remote-development/-/blob/main/.gitlab/issue_templates/remote-development-onboarding.md にあります。

### 連絡方法

Remote Development グループへの連絡には、状況に応じて以下の方法が最適です：

- Slack チャンネル：[`#g_create_remote_development`](https://gitlab.slack.com/archives/CJS40SLJE)
- Slack グループ：`@create-remote-development-team`（チーム全体）および `@create-remote-development-engs`（エンジニアのみ）

### 顧客エンゲージメントの記録

顧客ニーズの理解とトレーサビリティを向上させ、フォローアップアクションアイテムが体系的に実施されるようにするため、SSoT（信頼できる唯一の情報源）に顧客エンゲージメントのメモを記録します。
機能カテゴリーごとのすべての顧客エンゲージメントを記録するには、以下の機密 Issue を使用してください：

- [Web IDE 顧客エンゲージメント](https://gitlab.com/gitlab-org/gitlab/-/issues/474518)
- [Workspaces 顧客エンゲージメント](https://gitlab.com/gitlab-org/gitlab/-/issues/473627)

これらのエピックは内部チームメンバーのみを対象としています。フィードバックを提供したいユーザーは、ユーザーフィードバックの記録方法をご覧ください。

### ユーザーフィードバックの記録

私たちはユーザーフィードバックを非常に重視しています！以下のエピックを使用して2つの機能カテゴリーのフィードバックと洞察を記録してください：

- [Web IDE ユーザーフィードバック & インサイト](https://gitlab.com/groups/gitlab-org/-/epics/10543)
- [Workspaces ユーザーフィードバック & インサイト](https://gitlab.com/groups/gitlab-org/-/epics/12601)

チーム外のメンバーは、一般的なフィードバックや提案があれば、これらのエピックに Issue を作成してください。既存または進行中の機能に関するフィードバックがある場合は、適切なエピックまたは Issue にコメントを残してください。

### 顧客コラボレーション Issue ダッシュボード

顧客のニーズについて協力するために https://gitlab.com/gitlab-com/account-management の下にプライベートコラボレーションプロジェクトを作成する必要がある場合があります。このような Issue には、以下のダッシュボードに表示されるように適切なラベルを追加してください。

コメントテンプレートを使用して機能カテゴリーの適切なラベルを適用してください：

- Workspaces - `/label ~"Category:Workspaces" ~"customer-collaboration"`

機能カテゴリーの顧客コラボレーション Issue ダッシュボードはこちらで確認できます：

- [Workspaces](https://gitlab.com/gitlab-org/gitlab/-/issues/517442)

### グループメトリクスダッシュボード

[Create::Remote Development グループメトリクス Tableau ワークブック](https://10az.online.tableau.com/#/site/gitlab/workbooks/2067787/views)

### グループミーティング

<span id="-team-meetings" data-message="alias anchor for old links"></span>

**重要**：すべてのミーティングで、High Level Planning を除く [Remote Development グループのミーティングドキュメント](https://docs.google.com/document/d/1b-dgL0ElBf_I3pbBUFISTYBG9VN02F1b3TERkAJwJ20/edit#)を使用し（High Level Planning には独自のドキュメントがあります）、ミーティングメモと最近行われた他の同期ミーティングのアジェンダ/メモ/録画への参照を記入してください。これにより、誰でもミーティングメモを見つけやすくなります。

同期ミーティングのスケジュールは柔軟で、必要な参加者に合わせて変更できます。すべてのチームミーティングの最新スケジュールについては、[グループのカレンダー](https://calendar.google.com/calendar/u/0?cid=Z2l0bGFiLmNvbV92ZGc3bW04NDRuczVrN3JxZGlyMzM0N2YwOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)をご確認ください。

以下の表は定期的なチームミーティングの目標と主要な詳細を簡単に説明しています：

| ミーティングタイトル | 内容 |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------|
| High Level Planning | 全体的な方向性を設定し、今後のリリースで取り組む優先度の高い Issue/エピックを検証する。 |
| Iteration Planning Meeting (IPM) | スケジュールされた Issue をレビュー；次のマイルストーンの作業を見積もる。 |
| Remote Development Retro Call | 非同期振り返りのフィードバックをレビューし、効率を改善するためのアクションアイテムと次のステップを特定する。 |
| Engineering Sync | エンジニアリングトピックとブレインストーミングを議論する。トピックがない場合はキャンセル。APAC/AMER フレンドリーな時間で交互に開催。 |
| Remote Development Pairing | エンジニアのためのペアリングセッション。トピックがない場合はキャンセル。 |

## グループプロセス

<span id="-team-processes" data-message="alias anchor for old links"></span>

### 週次 EM アップデート

毎週、グループの EM はチームが知っておくべき最も重要なアイテムを記録することを目的とした週次ステータスアップデート Issue を提供します。これらは[こちら](https://gitlab.com/gitlab-com/create-stage/remote-development/-/issues/?sort=created_date&state=all&label_name%5B%5D=Weekly%20Team%20Announcements&first_page_size=20)で確認できます。

### Issue ワークフロー管理

Create:Remote Development グループでは、[triage bot](https://gitlab.com/gitlab-org/quality/triage-ops/-/tree/master/policies/groups/gitlab-org/remote-development) を通じて自動 Issue 管理システムを活用しています。これにより、Issue とラベルの管理が適切に維持されます。

### 大きな Issue の調査と分解 {#-investigations-and-breaking-down-large-issues}

タスクが大きすぎる場合、未知の要素が多すぎる場合、または概念実証（POC）が必要な場合は、より小さな調査タスクや POC Issue に分解する必要があります。これらのタスクはスコープを明確にし、リスクを軽減し、実装を進めるために必要なステップを特定するのに役立ち、理想的には単一のマイルストーンに収まるようにします。

1. **調査 Issue を作成する：**
   - **目的：** 必要な作業を調査、調査、文書化または分解する。**調査する核となる質問または問題を必ず定義してください。**
   - **ウェイト：** 調査、POC、分解タスクにはデフォルトで3を使用する。異なるウェイトが必要な場合は PM/EM/チームのステークホルダーと話し合う。
   - **ラベル：** Issue に ~spike ラベルを割り当てる。
   - **更新：** 調査は**集中した3営業日**に制限される。
     - 3日目またはそれ以前に、調査担当者が調査結果と提案された次のステップを共有する。主要なステークホルダーとアラインし、決定を下すために同期ミーティングを使用することを検討する。ミーティングが難しい場合は、調査結果を要約した短い録画ビデオも受け入れられます。
   - 更新からのフィードバックに基づいて、これらの調査にさらに時間を割り当てるか、手元にある情報に基づいて機能するものを決めることができます。

1. **分解してクローズする：**
   - 調査が完了したら、調査結果を要約し、指定されたエピック内で実行可能でリファインされた Issue に作業を分解する。
   - 結果には以下を含める必要があります：
     - **アーキテクチャ計画**：技術的な高レベルの方向性、品質目標（パフォーマンス、セキュリティなど）、サポートアプローチ。
     - **イテレーション計画**：明確にスコープされ、リファインされた Issue への作業の分解。
   - エピックの説明に計画を追加し、調査 Issue をクローズする。

### Issue ガイドライン

これらのガイドラインは、グループ内での計画とスケジューリング作業に使用するすべての Issue に適用されます。エンジニアは必要に応じて特定の実装 Issue を定義できますが、Issue の全体的な目標は以下のとおりです：

- より広いコミュニティを主要な対象者として扱う（[根拠の関連サマリーを参照](community-contributions/#treat-wider-community-as-primary-audience)）。
- デリバラブルな結果を説明する意味のある**タイトル**を提供する。
  - OK：`ワークスペース編集フォームページにキャンセルボタンを追加する`
  - OK：`2秒間の無操作後に Devfile の変更を自動保存する`
  - NG：`WebIDE をより良くする`
- Issue の目標を明確に説明する意味のある説明を提供し、必要に応じて技術的な詳細を提供する。
- Issue の一部として小さなタスクを作成する重要な実装ステップやその他の有用な方法がある場合は、Issue の説明の一部としてチェックリストを使用する。
- Issue には[イテレーション計画](#4-iteration-planning-meeting)を参照してウェイトを割り当てる。

## 計画プロセス {#-planning-process}

<span id="-remote-development-planning-process" data-message="alias anchor for old links"></span>
<span id="remote-development-planning-process-overview" data-message="alias anchor for old links"></span>

計画と配信の見積もりの精度を向上させるため、私たちは GitLab プロダクト開発フローの[計画](/handbook/product-development/how-we-work/product-development-flow/#build-phase-1-plan)と[構築 & テスト](/handbook/product-development/how-we-work/product-development-flow/#build-phase-2-develop--test)フェーズの一部を適応させました。私たちのチームは [XP](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658) と [Scrum](https://www.scrum.org/resources/blog/agile-metrics-velocity) にインスパイアされた軽量なベロシティベースのアプローチを使用します。これにより、柔軟性を維持しながら明確で現実的な予測を提供できます。

目標は XP や Scrum を完全に採用することではなく、主にイテレーション計画と過去のベロシティ追跡に関して機能する部分を取り入れることです。["昨日の天気"](https://gitlab.com/gitlab-com/www-gitlab-com/uploads/283f165896e2851bdc324f790d9c90e4/Screen_Shot_2023-03-27_at_6.16.51_PM.png)（チームの最近の配信履歴）に見積もりを基づかせることで、スコープをキャパシティに合わせ、何を、いつ出荷できるかについて十分な情報に基づいた決定を行うことができます。

このプロセスにより、変化する優先順位をうまく切り抜け、計画のオーバーヘッドを削減し、取り組んでいることについて透明性を保つことができます。

### プロセスフェーズ

```mermaid
graph TD;
  S[機能インセプション] -->|"新しいエピックが作成され、バックログが割り当てられた Issue が追加される"| V[High Level Planning]
  V -->|"PM が '~(current quarter | current quarter+1 | current quarter+2)' ラベルを追加してエピックがロードマップとエピックボードで優先順位付けされる"| R[非同期リファインメント]
  R -->|"エピックが Issue に分解され 'refined' ラベルが適用される。エピックの色を 'Apricot' に変更。"| P[IPM - 同期/非同期]
  P -->|"リファインされたとマークされたエピックはすべての Issue が重み付けされる。すべて重み付けされたら、エピックの色を 'Mint' に変更。"| I[開発の準備完了]

  I --> N[マイルストーン計画]
  I --> D[開発]

  N -->|"EM/PM が次のマイルストーンを計画し\n次のリリースサイクルに含まれる可能性が高い Issue に %XX.X ラベルを割り当てる"| E1[計画 Issue の公開]
  D -->|"エピックの作業が開始されると、すべての子 Issue が\n%\"Next 1-3 Releases\" に追加される"| E2[開発リリース]

```

#### 1. 機能インセプション

アイデアはどこからでも、誰からでも来ることができます。アイデアがある場合：

1. [Workspaces](https://gitlab.com/groups/gitlab-org/-/epics/12601) または [Web IDE](https://gitlab.com/groups/gitlab-org/-/epics/10543) ユーザーフィードバック & インサイトエピックの下の Issue に記録する。
1. Issue タイトルに "Feedback:..." または "Idea:..." のプレフィックスを付ける。
1. Issue を %"Backlog" マイルストーンに追加する。
1. [Workspaces](https://docs.google.com/document/d/1Xfr5YHdStC7_3kVAognj0SxbXlcavj2ofgp1mH2zH4U/) または [Web IDE](https://docs.google.com/document/d/18l9wI2tRcFgvX8nJfmO3qVG9-smEQL0VwDh5aOOZj0s/) High Level Planning アジェンダのトピックとして追加する。

#### 2. High Level Planning

**High Level Planning** ミーティングは、新規および進行中の作業が特定・議論・優先順位付けされるオープンフォーラムです。チームメンバーは事前にアジェンダにトピックを追加することで提案できます。これは [GitLab プロダクトフローのバリデーショントラック](/handbook/product-development/how-we-work/product-development-flow/#validation-track)に類似しています。なぜなら、Issue のリファインと優先順位付けを始める前に同じ[バリデーションの目標 & 成果](/handbook/product-development/how-we-work/product-development-flow/#validation-goals--outcomes)を達成する必要があるからです。ミーティングでは通常、以下を扱います：

- **新機能アイデア**：ロードマップに検討される新しい作業の提案。
- **ロードマップ調整**：進行中の作業の並べ替え、シフト、または優先順位付けの変更。
- **バグ/技術的負債のエスカレーション**：緊急の注意やタイムラインの調整が必要な Issue。

ミーティングは、最も重要な作業を明確にし、何を優先すべきかについての決定を下すことを目的としています。

**ミーティング後のアクション：**

- **ロードマップ評価：** ミーティング後、プロダクトマネージャーは提案された変更を評価し、作業優先順位の情報源であるエピックボードを更新します。

- **エピックの作成と優先順位付け：** 機能はエピックに変換され、プロダクトマネージャーは機能作業の順序を決定し、作業を開始すべき四半期に応じて `~"(current quarter | current quarter+1 | current quarter+2)"` ラベルを付けて今後の作業をマークします。四半期の日程については[会計年度](/handbook/finance/#fiscal-year)を参照してください。

- **ボードの順序ガイドライン：** まずエンジニアリングマネージャーまたはプロダクトマネージャーに相談せずに、エピックボードのアイテムの順序を変更しないでください。

#### 3. 非同期リファインメント

**非同期リファインメント**プロセスは、Issue の分解と実装における未知の要素の特定に焦点を当てて、今後の作業を効率的に準備するために設計されています。これは標準的な GitLab プロダクト開発フローの["バックログリファインメント"](/handbook/product-development/how-we-work/product-development-flow/#outcomes-and-activities-4)に類似しています。目標は、次の IPM でチームが簡単にレビューして見積もれるよう、今後のマイルストーンを対象としたすべての Issue が十分に明確であることを確認することです。

**主要な原則：**

- **エピックボード：** エピックボードは今後の作業を整理・優先順位付けし、各エピックのステータスを反映するカラースキームに従います。
  - <span style="color:#1068bf">ブルー</span>：リファインメントが必要な新しいエピックのデフォルトカラー。
  - <span style="color:#f3ad5d">アプリコット</span>：エピックが完全にリファインされ、次の計画段階での重み付けの準備ができていることを示す。
  - <span style="color:#4dd787">ミント</span>：エピック内のすべての Issue が重み付けされ、実行のためにファイナライズされた後の **Iterative Planning Meeting** 後に使用。

- **ジャストインタイム計画：** 準備しすぎを避けるために、次の1〜2個のエピックのみをリファインします。これにより、作業が始まる時にエピックの関連性を確保できます。これらがリファインされている場合、それ以上のリファインメントは不要です。

**リファインメントプロセス：**

1. **リファインメントが必要なエピックを特定する：**
   - これらはエピックボードで<span style="color:#1068bf">ブルー</span>でマークされており、通常はエンジニアリングマネージャーからエンジニアに割り当てられます。
1. **エピックを分解する：**
   - エピックをより小さな実行可能な Issue に分割する。
   - エピックの受け入れ基準を満たすために必要な作業を定義する。
   - リファインされた Issue に ~refined ラベルを割り当てる。
1. **リファイン済みとしてマークする：**
   - リファインされたら、エピックのカラーを<span style="color:#f3ad5d">アプリコット</span>に変更し、重み付けの準備ができていることを示す。
   - 準備完了を示すためにエピックに **"refined"** ラベルを追加する。
1. **次のステップ - イテレーション計画ミーティング：**
   - リファインメント後、エピックはエピック内のすべての Issue が重み付けされる **Iteration Planning Meeting** に入る。
   - このステージ後、エピックは完全に重み付けされ実行の準備ができていることを示すために<span style="color:#4dd787">ミント</span>でマークされる。

#### 4. Iteration Planning Meeting

**Iteration Planning Meeting** は、エピックボード上で<span style="color:#f3ad5d">アプリコット</span>としてマークされたエピック内の Issue をレビューして重み付けするチームの共同セッションです。これは [XP の "Weekly Cycle"](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change/dp/0321278658) または [Scrum の "Sprint Planning"](https://www.scrum.org/resources/what-is-sprint-planning) に類似しています。このプロセスにより、各リファインされたエピックが完全に理解され、スコープに収まり、チームの目標に沿っていることを確認できます。

**ミーティングの目標：**

- **Issue のレビューと重み付け：**
  - 各 Issue について、ファシリテーターが説明を読み、チームが**簡潔に** Issue を議論して不明点を明確にします。ブロッキングする懸念/リスクが提起されなければ、チームはじゃんけんフィボナッチスケールで Issue を集合的に見積もり、集合的に合意したウェイトが割り当てられます。ウェイトの詳細については[使用するウェイト](#-what-weights-to-use)を参照してください。
  - まだ重み付けされていない他の優先された Issue がある場合も、ミーティング中にレビューして重み付けします。

**非同期プロセス：**
**TL;DR：時に Issue は公式の IPM ミーティングの前に素早く重み付けする必要があります。これが該当する Issue の重み付け方法です。**

**前提条件：** まだの場合は Polly アプリを Slack に追加してください。

1. Slack の Apps セクションから Polly アプリケーションに移動する。
1. Create a Polly を選択する。
1. Create New を選択する。
1. Multiple Choice を選択する。
1. 作成オプションを入力する：
    1. Create Question：Weight for: **_ここに Issue のリンクを追加_**
    1. Question Type：Multiple Choice。
    1. 以下の選択肢を入力：**0 1 2 3 5 8**（各数字を別の行に）
    1. Choose audience：**_remote_development_async_ipm_** チャンネルを選択。
    1. "Send polly as direct message" が**_チェックされていない_**ことを確認する。
    1. Settings ボタンを選択する。
    1. Responses：**_Non-anonymous_** を選択する。
    1. Results：**_Show after close_** を選択する。
    1. Submit を選択して変更を保存する。
1. Polly を送信する。

**オプションのステップ：テンプレートの作成**

これにより、設定を標準化することで、以降の Async IPM を速くできます。作成後、ユーザーは "My Templates" セクションからテンプレートを選択し、Use Template を選択して、"Create Question" フィールドの Issue リンクを更新するだけで済みます。

1. Slack の Apps セクションから Polly アプリケーションに移動する。
1. Go to Polly Dashboard を選択する。
1. 作成した Polly を選択する。
1. Controls ボタンを選択する。
1. Save as Template を選択する。
1. Template のタイトル：**_Remote development async ipm_**。
1. "Save audience with template" が**_チェックされている_**ことを確認する。
1. Save を選択する。

**非同期重み付けオプション：**

- 重み付けは `#remote_development_async_ipm` Slack チャンネルを通じて非同期でも行えます。
- 非同期重み付けを開始するには、重み付けが必要な Issue と[Polly ポール](https://www.polly.ai/help/slack/creating-polls)を投稿して入力を集める。

この構造により、同期および非同期の両方の参加が可能になり、今後の作業について徹底的な準備とアラインメントが実現できます。

#### 5. マイルストーン計画と開発の開始

**マイルストーン計画と開発の開始**プロセスは、今後のリリースでの開発のために Issue を計画し、チームの取り組みをマイルストーンと合わせるために使用されます。

**エピックと Issue のセットアップ：** 新しいエピックの作業を開始するとき、すべての子 Issue にはマイルストーン **`%"Next 1-3 Releases"`** または具体的なマイルストーン（例：**`%16.9`**）が割り当てられ、近期の開発のために優先されていることを示します。

Issue はチームベロシティ、並行作業の可能性、全体的な稼働可能日数などの要素に基づいて特定のマイルストーンに割り当てられます。**未計画の作業をアクティブなマイルストーンに追加する必要がある場合は**、まず EM と相談してください。配信予測とコミットメントに影響する可能性があります。

時々、バグや顧客エスカレーションなどのリファインされていない/未計画の Issue がマイルストーン開始後に取り込まれることがあります。このような場合、含まれる前に完全に準備されていなかったため、デフォルトで ~Stretch とラベル付けされます。

Issue は通常 `%"Backlog"` から `%"Next 1-3 Releases"` へ、そして具体的なマイルストーン（例：`%16.x`）に移動します。EM との別途の話し合いがない限り、エンジニアはそのマイルストーンの他の Issue を検討する前に、アクティブなマイルストーンでスケジュールされた ~Deliverable アイテムを優先して取り組むべきです。現在のマイルストーンのすべての ~Deliverable と ~Stretch Issue がすでに割り当てられて進行中の場合は、次のマイルストーンか `%"Next 1-3 Releases"` を見てください。

**マイルストーン計画と計画 Issue の作成**：

1. 各マイルストーンが始まる前に、エンジニアリングマネージャーとプロダクトマネージャーがチームのベロシティに基づいて今後のリリースのために Issue をレビューして割り当てます。計画されたリリースの一部として指定するために特定のマイルストーン番号 `%XX.X` を設定します。

1. **計画 Issue** は新しいリリースサイクル開始の2週間前に自動的に作成されます。この Issue はチームをマイルストーンを通じてガイドするための関連する詳細が記入されます。すべてのアクティブな計画 Issue は[こちら](https://gitlab.com/gitlab-com/create-stage/remote-development/-/issues/?sort=updated_desc&state=opened&search=planning%20issue&first_page_size=50)で確認および参照できます。

この構造により、各マイルストーン内での開発作業のスムーズな計画、追跡、アラインメントが可能になり、計画通りにスコープ内で作業が進行することが確保されます。

### 機能のライフサイクルの例

1. プロダクトとデザインが機能を特定してエピックを作成する。
   この時点では、Issue の説明は不完全/リファインされておらず高レベルである可能性があることに注意してください。
1. 優先順位が付けられたら、プロダクトマネージャーは `~"(current quarter | current quarter+1 | current quarter+2)"` ラベルを追加し、エピックはエンジニアリングマネージャーによってリファインメントのために割り当てられます。
1. 非同期 IPM プロセスの一部として、担当者はエピックをリファインします。機能の作業を Issue に分解し、Issue テンプレートを記入して、Issue とエピックのすべての Issue がリファインされた場合にエピックに `~refined` ラベルを適用します。
   1. リファインメントプロセス中、機能のドキュメントを検討してください。必要に応じて、要件と `~documentation` および `~Technical writing` ラベルを Issue に追加します。
      質問とサポートについては、割り当てられたテクニカルライターにタグ付けしてください。
1. 同期 IPM ミーティングで、より広いチームがエピック内の Issue を議論して見積もります。
1. 優先順位とウェイトが決まったら、EM がベロシティに基づいてエピックの Issue に特定のリリースマイルストーンを割り当てます。
1. 担当者が Issue に対する MR を開き、各説明の最初の行で Issue と MR が相互参照されるようにします。
1. 機能の実装が進む間、担当者は適切な[トピックタイプ](https://docs.gitlab.com/development/documentation/topic_types/)形式と[スタイルガイド](https://docs.gitlab.com/development/documentation/styleguide/)に従ったドキュメント MR を作成します。
1. ドキュメント MR はテクニカルライターによってレビューされ、機能実装 MR と一緒に、またはその直後にマージされます。
1. 機能 MR がマージされ、ドキュメントが公開され、プロダクションで機能が確認されたら、エピックはクローズされます。

### アドホック作業

チームメンバーが次の計画サイクルの前に迅速に解決する必要がある Issue を特定することは通常のことです。これは他の優先された Issue をブロックしているためか、チームメンバーが未解決のバグや小さな技術的負債に取り組みたいからかもしれません。

このような状況では、_他の優先された Issue の配信に悪影響を与えない限り_、チームメンバーが自主的に Issue を作成し、適切なラベルを割り当て、見積もり、現在のマイルストーンに割り当て、作業に取り組むことは許容されます。ただし、それが大きくなったり、マイルストーンにあった他の Issue に影響するリスクがある場合は、次の IPM でより広いチームと議論すべきです。

### 使用するウェイト {#-what-weights-to-use}

Issue にウェイトを効果的に割り当てるには、Issue のウェイトは時間に結び付けるべきではないことを覚えておくことが重要です。代わりに、Issue の重要性の純粋に抽象的な尺度であるべきです。これを達成するために、チームはウェイト0から始まるフィボナッチ数列を使用します：

- **ウェイト 0：** タイポや軽微なフォーマット変更など、最も小さく最も簡単な Issue、またはテストが必要ない非常に軽微なコード変更のために予約。
- **ウェイト 1：** 不確実性、リスク、複雑さがほとんどない、またはまったくないシンプルな Issue。"good for new contributors" または "Hackathon - Candidate" のようなラベルを持つ Issue。例えば：
  - シンプルかもしれないが時間がかかるコピーテキストの変更。
  - CSS や UI の調整。
  - テストを書いたり更新したりする必要がある1〜2ファイルへの軽微なコード変更。
- **ウェイト 2：** まだそれほどリスクや複雑さなしに簡単だが、コードの複数のエリアに触れたり複数のテストを更新したりする可能性がある、より関与した Issue。
- **ウェイト 3：** 予測されない複雑さやリスクがある可能性がある、またはより広範な変更が必要だが、[より小さな別々の Issue に分解する](#-investigations-and-breaking-down-large-issues)には大きすぎない大きな Issue。
- **ウェイト 5：** 通常、このウェイトは避けるべきで、Issue が理想的には[より小さな別々の Issue に分解される](#-investigations-and-breaking-down-large-issues)べきであることを示します。ただし、ウェイト5の Issue を優先する場合もあります。例えば、多大な労力を要する多くの手動更新があるが、重大なリスクや不確実性を必ずしも伴わない場合など。
- **ウェイト 8/13+：** 5を超えるウェイトは、実装のために割り当てる準備がまだできていない作業を明確に示すために使用され、スコープが大きすぎて実装を開始できない、かつ/またはまだ未知/リスクが多すぎるため、_必ず_分解する必要があります。このウェイトは、ベロシティベースのキャパシティ計画計算での取り組みのスコープを記録するための「プレースホルダー」Issue に一時的に割り当てられます。詳細については["大きな Issue の分解"](#-investigations-and-breaking-down-large-issues)を参照してください。

### バグは見積もるべきですか？

アジャイル哲学ではこれについて意見が分かれています（[1](https://www.reddit.com/r/scrum/comments/n4uhl5/estimating_bugsdoes_it_matter/)、[2](https://medium.com/agilelab/estimating-bugs-yes-or-no-cbfe1bc25db1)）。

私たちのチームでは、バグは見積もらないことに決めました。理由は以下のとおりです：

- ベロシティベースのプロセスでウェイトを見積もる目的は、チームがユーザー価値を配信する速度を予測する助けとなることです。
- その観点から、バグは見積もるべきではありません。なぜなら「ユーザー価値」は元の機能によって配信され、その機能には_ウェイトが_付いていたからです。
- しかし、バグを修正することは新しいユーザー価値を追加しているのではなく、元の機能によってすでに計上されたユーザー価値の配信を「完了」しているにすぎません。だから、ウェイトを付けるべきではありません。
- 「私たちはこの機能を完全に間違えて大幅に書き直す必要があり、多大な労力がかかる」というカテゴリーの巨大な「バグ」であれば、それは「バグ」ではなく新しい機能作業として考えるべきです。そして、すべての機能作業と同様に、重み付けされた Issue にリファインして分解する必要があります。

### 複数のリリースにまたがるフォローアップ Issue

GitLab の標準では、複数のリリースにまたがる特定のステップで解決する必要がある Issue を分解することが求められることが多くあります。通常これらは、データベースマイグレーション（[カラムの削除](https://docs.gitlab.com/ee/development/database/avoiding_downtime_in_migrations.html#dropping-columns)）や GraphQL の破壊的変更（["非推奨と削除"](https://docs.gitlab.com/ee/api/graphql/index.html#deprecation-and-removal-process)）に関連した Issue です。

無視ルールの削除、GraphQL の非推奨フィールドの削除、バックグラウンドマイグレーションのファイナライズなど、将来のリリースの保留中またはフォローアップタスクがある場合は、将来の作業を忘れないようにフォローアップ Issue を作成する必要があります。従うべきプロセスは以下のとおりです：

**フォローアップ Issue の作成：**

1. **参照：** Issue を生成した元の Issue にリンクする。
1. **ラベル：** これらのラベルを割り当てる：
    - `~due-date-followup`
    - `~refined`
1. **マイルストーン：** 特定のマイルストーンを割り当てる - 例：カラムの削除（17.5）-> フォローアップで無視ルールを削除（17.6）。
1. **期日：** 割り当てられたマイルストーンの1週間後の期日を割り当てる。マイルストーンの日程を確認するには、マイルストーンを追加した後 "Preview" をクリックし、マイルストーンリンクを新しいタブで開いてページの先頭の日程範囲を確認します。
1. **エピック：** [WebIDE | Technical Debt/Friction](https://gitlab.com/groups/gitlab-org/-/epics/14656) または [Workspaces Technical Debt Work](https://gitlab.com/groups/gitlab-org/-/epics/11041) エピックに割り当てる。

このメタデータを簡単に適用するために使用できるラベルコマンドのショートカットを示します。

Workspaces：

```text
/relate #<original issue number or link>
/milestone %"<target milestone>"
/due date <one week into milestone's date, obtained from clicking on milestone link>
/label ~due-date-followup ~refined
/epic &11041
```

Web IDE：

```text
/relate #<original issue number or link>
/milestone %"<target milestone>"
/due date <one week into milestone's date, obtained from clicking on milestone link>
/label ~due-date-followup ~refined
/epic &14656
```

将来のリリースまで_延期せざるを得ない_これらの Issue が、_選択的に_延期している「技術的負債」作業と混同されないように注意してください。そのため、マイルストーン、カスタムラベル、期日リマインダーを含む以下のプロセスを使用して、フォローアップして完了させることを忘れないようにしています。

### Issue と MR の関係

<span id="1-to-1-relationship-of-issues-to-mrs" data-message="alias anchor for old links"></span>

私たちは以下を強制したいと考えています：

1. すべての MR は重み付けされた Issue によって所有される

これは、このプロセスの下での正確できめ細かいベロシティ計算と Issue の優先順位付けを容易にするためです。
マージリクエストはほとんどの場合、デリバラブルな作業の原子単位であるため、一つの、そして唯一の一つの Issue によって所有されることで、優先順位付けと計算に表現される必要があります。

triage-ops オートメーション（/handbook/engineering/devops/create/remote-development/#automations-for-remote-development-workflow）によってこれを強制するために、
Issue の最初の行は `MR: <...>` の形式である必要があります：

1. 新しい Issue では、最初の説明行は `MR: Pending` であるべきです。
1. Issue に対する MR が作成されて作業が始まったら、Issue の最初の説明行は `MR: <末尾に + が付いた MR リンク>` であるべきで、
   MR の最初の説明行は `Issue: <末尾に + が付いた Issue リンク>` であるべきです。
1. Issue の作業が反復的に複数の MR に分割された場合、Issue の最初の説明行は以下のようになります：

   ```markdown
   MR:
     - <末尾に + が付いた MR リンク>
     - <末尾に + が付いた MR リンク>
   ```

   このリストにある各 MR の説明行は `Issue: <末尾に + が付いた Issue リンク>` であるべきです。**注意：** Issue の実装を複数の MR に分割することで予期せずに作業のスコープが増加した場合は、追加のスコープを記録する新しい重み付けされた優先された Issue を作成することを検討してください。これはスコープの増加と、レポートとベロシティへの影響を正確に反映するために重要です。
1. この Issue に関連する MR が_ない_場合、最初の行は `MR: No MR` であるべきです。
   ただし、これはまれであるべきです。なぜなら、ほとんどの Issue には何らかのコミットされたデリバラブルがあるはずだからです（ドキュメントの追加や更新だけであっても）。より小さな Issue に分割された大きな作業を表す Issue であれば、エピックに昇格させるべきです。

**質問：なぜすべての MR にバッキング Issue が必要なのですか？**

- ボードとエピックが Issue だけでなく MR を追加して見積もることを許可していれば、これは必要ありませんでした — 機能/メンテナンスに関わる MR については、MR が議論と実装の完全なライフサイクルを直接表すことができ、Issue がまったくない場合もあります。
- クロスリンキング Issues 機能（https://docs.gitlab.com/ee/user/project/issues/crosslinking_issues.html）に頼ることもできません。これはどこかで Issue に言及したすべてのリンクされた MR を表示し、この1対1の関係を強制できないからです。

### プロセス外の Issue の処理

<span id="-handling-remote-development-issues-outside-the-process" data-message="alias anchor for old links"></span>

特定の `group::remote development` Issue は `(workspaces|webide)-workflow::ignored` ラベルでカテゴライズされる場合があります。これらのカテゴリには以下が含まれます：

1. **QA 所有の Issue：**
   - QA が所有する Issue で、標準の Workspaces プロセスを必要としない場合があります。
1. **`type::ignore` の PM 所有 Issue：**
   - レポート、ブログ、OKR などの `type::ignore` でマークされたプロダクトマネージャーが所有する Issue。
1. **長期セキュリティ Issue：**
   - 典型的な Workspaces ワークフローに合わない長い期間のセキュリティ所有の Issue。

このアプローチにより、これらのタイプの Issue が私たちのベロシティに望ましくない影響を与えないようにし、標準的なワークフローに合わない可能性のある異なる Issue カテゴリーに対応しながら、Workspaces プロセスを合理的に維持できます。

### ボードカラムの幅

ボード上のリストのデフォルト幅は、表示されるアイテムが少なくなり、スクロールが増えるため、ボードを使いにくくすることがあります。

これに対処するための[オープン Issue があります](https://gitlab.com/gitlab-org/gitlab/-/issues/15927)。それまでの間、[Issue のこのコメント](https://gitlab.com/gitlab-org/gitlab/-/issues/15927#note_214871708)で提案されている以下の JavaScript ブックマークレットを使用できます。これによりリストがボードの全幅を占めるようになります。「Wider board lists」という名前のブックマークを作成して、これをリンクとして設定してください：

```text
javascript:(function(){var el=document.getElementsByClassName('boards-list');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.display='table';}el=document.getElementsByClassName('board');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.border='0';el[i].style.display='table-cell';}el=document.getElementsByClassName('board-inner');for(i=0;i<el.length;++i){el[i].style.padding=0;el[i].style.border='0';}})();
```

## コミュニケーション

Remote Development チームは以下のガイドラインに基づいてコミュニケーションを行います：

1. 常に同期ミーティングよりも非同期コミュニケーションを優先する。
1. 非同期が非効率であることが証明された場合は遠慮なく[同期コール](#-ad-hoc-sync-calls)を設定しますが、常にチームメンバーと共有するために録画してください。
1. デフォルトではオープンにコミュニケーションする。
1. Slack でのすべての業務関連コミュニケーションは [#g_create_ide](https://gitlab.slack.com/archives/CJS40SLJE) チャンネルで行われます。

### 休暇

チームメンバーは、エンジニアリングマネージャーがキャパシティプランニング中に適切な休暇日数を使用できるよう、[計画した休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を Workday に追加する必要があります。

### アドホック同期コール {#-ad-hoc-sync-calls}

私たちはデフォルトで非同期コミュニケーションを使用しています。同期での議論が有益な場合もあり、必要なチームメンバーと同期コールをスケジュールすることを奨励しています。

## その他の有用なリンク

### 開発者チートシート

[Developer Cheatsheet](developer-cheatsheet/)：これはチームの（そして外部の）エンジニアに役立つ可能性のある様々なヒント、トリック、リマインダーのコレクションです。

### より広いコミュニティのコントリビューターの育成

Create:Remote Development チームのすべての分野が外部のコントリビューターにアクセスしやすいことを確保したいと思います。
この場合、Issue が任意のコントリビューションに適している場合は特別なケアで扱う必要があります。そのため、私たち自身の Paul Slaughter が書いたこの優れたガイドをご覧ください！

[Cultivating Contributions from the Wider Community](community-contributions/)：これは私たちがより広いコミュニティからのコントリビューションをなぜ、どのように育成するかのサマリーです。

### GitLab Unfiltered プレイリスト

Remote Development グループはグループとそのチームメンバーに関連するすべてのビデオ録画を [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube チャンネルの[プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRQhnSYRNh1s1mEUypx67-)にまとめています。

### 運用ヘルスガイド

#### コア原則

エラーバジェットと可用性メトリクスは、Workspaces での実際の顧客体験を正確に反映する必要があります。
ここでの焦点は、顧客に影響を与える動作にあるべきです。

#### これまでの学び

過去に監視が行われていたにもかかわらず、エラーバジェットが様々な時点で赤くなりました。
固定スケジュールで週次にダッシュボードをレビューしていましたが、レビューの間にエラーが蓄積することがありました。
ノイズを避けたいためにSentryアラートの設定を先送りしていましたが、この「プル」アプローチでは、インパクトを防止できたはずの早期警告サインを見逃していました。

**重要な教訓：** 即座に問題をプッシュするノイジーなアラートから始めて、時間をかけて改善する方が良いです。週次の反応的なレビューからプロアクティブなリアルタイムアラートへのこのシフトにより、ダッシュボードを長期間にわたり一貫してグリーンに保つことができています。

#### 顧客インパクトの検証

ユーザーの以下の能力に影響するアラートとエラーを優先してください：

- 新しいワークスペースの作成
- 既存のワークスペースへの接続
- 合理的なパフォーマンスでのワークスペースの使用
- 開発フローの維持
- データ永続性への信頼

#### 可用性チャンピオン

各マイルストーンで、約4週間の運用ヘルスを所有する可用性チャンピオンを指名します。

**これはオンコール義務ではありません** — チームのシステムヘルスに目を光らせ、何も見逃さないようにすることです。

**責任：**

- #f_workspaces_alerts チャンネルの監視
- 毎週月曜日に週次運用ヘルスレビューを実施
- エラーバジェット消費に対する Issue の作成
- 「このエラーは重要ですか？」という質問への対応担当

#### #f_workspaces_alerts の Sentry アラート

チャンネルにアラートが表示された場合、可用性チャンピオンは：

1. 顧客インパクトを評価する（業務時間中）
    - 確認：これはワークスペースの作成、アクセス、またはコア機能に影響しますか？
    - YES の場合、P1 Issue を作成する
    - NO の場合、但しバジェットを消費するほど頻繁な場合、P2 Issue を作成する
1. テンプレートを使用して Issue を作成する - https://gitlab.com/gitlab-com/create-stage/remote-development/-/blob/main/.gitlab/issue_templates/workspace-availability.md
1. P1 の調査を開始する
    - #f_workspaces_alerts のアラートスレッドに調査していることを返信する
    - 根本原因分析を開始する
    - 調査結果で Issue を更新する
    - 注意：
      - P2 の場合、定期的なマイルストーン計画中にスケジュールするために EM にタグ付けする
      - Issue でない場合は、単純にアラートに ✅ を付けて全員が確認済みであることを知らせる

#### 週次レビュー

**原則：** エラーバジェット消費の1分1分を理解することを目指す。

- 毎週月曜日に #g_remote_development の週次エラーバジェット通知を確認し、消費を調査する。
- ✅ で通知に反応して、レビューが完了したことを示す。

##### 参考資料

- **Grafana：** https://dashboards.gitlab.net/d/stage-groups-detail-remote_development/1270664?orgId=1&from=now-7d&to=now&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main
- **Sentry：** https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/gitlabcom/50/details/
- **Tableau（Workspace Reliability）：** https://10az.online.tableau.com/#/site/gitlab/views/WorkspaceUsage/WorkspaceReliability?:iid=1

## オートメーション

オートメーションは可能であれば [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops/) を通じてセットアップする必要があります。

他のより複雑なオートメーションは
[Remote Development Team Automation プロジェクト](https://gitlab.com/gitlab-org/remote-development/remote-development-team-automation)でセットアップできます。

### グループワークフローのオートメーション

理想的には、[計画プロセス](#-planning-process)ワークフローのできる限り多くをオートメーション化すべきです。

このワークフローに対する以下のオートメーション目標があります。特に断りのない限り、これらのルールはすべて [triage-ops の `policies/groups/gitlab-org/ide/remote-development-workflow.yml` 設定ファイル](https://gitlab.com/gitlab-org/quality/triage-ops/-/tree/master/policies/groups/gitlab-org/remote-development)で定義されています。

| ID | 目標 | オートメーション | 実装へのリンク |
| --- | --- | --- | --- |
| <a id="automation-01">01</a> | エピックが割り当てられていない場合に警告 | `~"Category:(Web IDE \| Workspace)"` にあるがエピックが割り当てられていない Issue は警告コメントを受け取るべき | TODO: 実装 |
| <a id="automation-02">02</a> | Issue に欠けているマイルストーンを割り当てる | `~"Category:(Web IDE \| Workspace)"` にある Issue はマイルストーンが割り当てられていない場合 `%"Backlog"` に割り当てるべき | TODO: 実装 |
| <a id="automation-03">03</a> | マイルストーンのストレッチ Issue にフラグを立てる | アクティブなマイルストーン（例：16.x、17.x）が割り当てられていて ~refined ラベルとウェイトがない Issue は ~Stretch としてマークされるべき | TODO: 実装 |
| <a id="automation-04">04</a> | Workspace ワークフローと GitLab ワークフローラベルの同期 | `~"refined"` が割り当てられた未開始の Issue は `~"workflow::ready for development"` が割り当てられるべき | TODO: 実装 |
| <a id="automation-05">05</a> | 担当者がいるすべての Issue にウェイトが割り当てられていることを確認 | 担当者はいるがウェイトがないバグでないリファインされた Issue は、ウェイトの見積もりを追加するかどうかのリマインダーノートを受け取るべき | TODO: 実装 |
