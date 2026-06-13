---
title: Workflow Catalog グループ
description: "Workflow Catalog Group は、組織、グループ、プロジェクトをまたいで作成、キュレーション、共有できるエージェント、ツール、フローのカタログである Workflow Catalog の開発に注力しています。"
upstream_path: /handbook/engineering/ai/workflow-catalog/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
translated_at: "2026-06-12T13:00:00Z"
translator: claude
stale: false
lastmod: 2026-06-12T16:53:35+01:00
---

## ビジョン {#vision}

Workflow Catalog Group は、組織、グループ、プロジェクトをまたいで作成、キュレーション、共有できるエージェント、ツール、フローのカタログである Workflow Catalog の開発に注力しています。

## チームメンバー {#team-members}

**エンジニアリングマネージャーおよびエンジニア**

{{< team-by-manager-slug "sam-beckham" >}}

## 連絡方法 {#how-to-reach-us}

状況に応じて、Workflow Catalog グループに連絡する最も適切な方法は以下のとおりです。

* Slack チャンネル: `#g_workflow_catalog`
* GitLab グループ `@gitlab-org/ai-powered/workflow-catalog/engineering`（エンジニアのみ）

## 取り組んでいること {#what-were-working-on}

現在、私たちは Workflow Catalog の最初のイテレーション（MVP）に取り組んでいます。
この作業は [MVP エピック](https://gitlab.com/groups/gitlab-org/-/epics/17989)で追跡できます。

## 私たちの働き方 {#how-we-work}

私たちはまだ始まったばかりで、新しいチームに馴染んでいきながら働き方を定義していきます。
始めるためのいくつかのリンクを以下に示します。

* [ルートエピック](https://gitlab.com/groups/gitlab-org/-/epics/11111): すべての作業をグループ化し、ロードマップを設定するため
* [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/3871464): 進行中のすべての Issue 用
* [チームタスク](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/issues): プロダクトに関連しないすべてのチーム Issue 用
* [非同期アップデート](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/issues/?label_name%5B%5D=async%20update)
* [チーム Wiki](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/wikis/home): プロダクトの意思決定と有用な情報のため

### DRI {#dris}

大規模なプロジェクトに取り組む際は、それをエピックと Issue に分割します。
各エピックの Directly Responsible Individual（DRI）は、その領域に対する単一の説明責任を担います。
DRI は必ずしもすべての作業を行うわけではありませんが、自分のエピックの成功を所有します。

DRI の責任:

1. エピックのステータス、範囲、技術的な意思決定に関する質問に答える
2. 正確なエピックと Issue の説明を維持する
3. デリバリーの健全性ステータスを監視し伝える
4. Issue リストをキュレーションする。必要なものを含め、不要なものを削除する
5. デリバリー日と Issue のステータスを最新に保つ
6. 作業が複数のエピックにまたがる場合、他の DRI と調整する

### 支援の依頼への対応方法 {#how-we-handle-requests-for-help}

お客様がカタログで問題を経験している場合、サポートチームが[支援の依頼（request for help）](https://gitlab.com/gitlab-com/request-for-help)を提起します。
支援の依頼を提起したい場合は、その方法とタイミングについての指示を[こちらの readme](https://gitlab.com/gitlab-com/request-for-help#please-read-the-following-before-submiting-a-request-for-help-to-the-gitlab-development-team-sections)で読んでください。

チーム全体の気を散らすことなく支援の依頼にタイムリーに対応するために、各マイルストーンにゴールキーパーを任命します。
ゴールキーパーは、入ってくる依頼、質問、Issue がトリアージされ、適切な人やチームに振り分けられるようにする責任があります。

各マイルストーンで、新しいゴールキーパーをアサインし、ゴールキーピングの Issue を作成します。

詳細は[Issue テンプレート](https://gitlab.com/gitlab-org/ai-powered/workflow-catalog/team-tasks/-/blob/main/.gitlab/issue_templates/goalkeeper.md)で確認できます。

### コミュニケーション {#communication}

Workflow Catalog チームは、以下のガイドラインに基づいてコミュニケーションを行います。

* 同期的なミーティングよりも、常に非同期コミュニケーションを優先します。
* 非同期では非効率であることがわかった場合は、[同期通話](/handbook/communication/#video-calls)を設定することを躊躇しないでください。ただし、チームメンバーと共有できるように常に録画します。
* デフォルトでオープンにコミュニケーションを行います。
* 仕事関連の Slack メッセージでは、プライベートメッセージよりも公開チャンネル（`#g_workflow_catalog`）を優先します。

### フロントエンドとバックエンドの協業 {#frontend-backend-collaboration}

私たちは、開発のスピードとコード品質を確保するために、フロントエンドエンジニアとバックエンドエンジニアの間で高いレベルの協業を促進することを目指しています。

* **スキーマファースト開発**: 実装を開始する前に、フロントエンドエンジニアとバックエンドエンジニアが協力して、
  UI 要件、ユーザーエクスペリエンスのニーズ、パフォーマンスの考慮事項に基づいて GraphQL API スキーマを設計します。
* **並行開発プロセス**: スキーマが合意されると、フロントエンドは合意したスキーマに一致する
  モックデータ、モックエンドポイント、または API スタブを使用して進めることができます。バックエンドは、
  データモデル、ビジネスロジック、実際の API スキーマの実装に集中できます。
* **整合性の維持**: 私たちは優れたコミュニケーションを重視します。要件やスキーマを変更する必要がある場合は、
  関連する GitLab Issue または [`#g_workflow_catalog`](https://gitlab.enterprise.slack.com/archives/C08T5J1KXKQ) で早めに伝え、
  フロントエンドやバックエンドのカウンターパートがすべての変更を把握し、後の段階でブロッカーになるのを避けるために早めにフィードバックを提供できるようにします。

### AI ステージとの協業 {#ai-stage-collaboration}

Workflow Catalog は、基盤となるバックエンドサービスとして
[Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service?ref_type=heads)
に依存しています。
Workflow Catalog のほとんどの機能は Workflow Service 内で新しい機能を開発する必要があり、
これは私たちのエンジニアが [Agent Foundations チーム](../agent-foundations/_index.md)と連携して、
そのコードベースに直接貢献する必要があることを意味します。

**協業の要件:**

* すべての Workflow Service への貢献は、Agent Foundations チームと密接に連携して開発する必要があります
* 私たちの実装は、彼らのサービスアーキテクチャとビジョンに沿ったものでなければなりません
* 私たちは、Workflow Service のより広範な目標をサポートし、彼らの技術基準を遵守することにコミットします

**協業のプロセス:**

* 計画フェーズ中に、関連する Agent Foundations の連絡先（以下に記載）に連絡します
* 彼らの [`#g_duo-agent-platform`](https://gitlab.enterprise.slack.com/archives/C07035GQ0TB) チャンネルに参加します
* デフォルトで私たちの[非同期コミュニケーションの方針](#communication)に従いますが、必要に応じて
  同期ミーティングを設定し、主要な成果が GitLab Issue に文書化されるようにします

#### 主要な Agent Foundations の連絡先 {#primary-agent-foundations-contacts}

| チームメンバー | 専門領域 |
| ---      | ---     |
| [Mikołaj Wawrzyniak](https://gitlab.com/mikolaj_wawrzyniak) | Workflow Service アーキテクチャ |
| [Frédéric Caplette](https://gitlab.com/f_caplette) | クライアントサイドの実装 |
| [Dylan Griffith](https://gitlab.com/DylanGriffith) | Workflow Executor アーキテクチャ: リモート実行環境とランナーの実装 |
| [Jessie Young](https://gitlab.com/jessieay) | 認可と認証 |
| [Shekhar Patnaik](https://gitlab.com/shekharpatnaik)  / [Igor Drozdov](https://gitlab.com/igor.drozdov) | Duo Chat エージェントの統合 |
| [Sebastian Rehm](https://gitlab.com/bastirehm) | エンジニアリングマネージャー、上記いずれのバックアップ連絡先 |

### 計画のサイクル {#planning-cadence}

私たちは GitLab の[プロダクトマイルストーン](/handbook/product/product-processes/milestones/)に合わせて作業を計画し、整合させます。マイルストーンの計画は、次のマイルストーンが始まる前の週に行われます。

### ~Deliverable ラベル {#deliverable-label}

`~Deliverable` ラベルは、チームが特定のマイルストーン内で提供することをコミットした Issue を識別するために使用されます。
このラベルは複数の目的を果たします。

* **コミットメントのシグナル**: この作業をマイルストーン内で完了する意図があることを、ステークホルダーやお客様に伝える
* **優先順位付け**: チームメンバーがどの Issue に最初に取り組むべきかを識別するのを助ける
* **焦点**: マイルストーンにとって必須の作業とあれば嬉しい作業を明確にする

#### 誰がいつ適用するか {#who-applies-it-and-when}

エンジニアリングマネージャーは、マイルストーンが始まる前の計画プロセス中に `~Deliverable` ラベルを適用します。
この決定は、以下に基づいて Product Managerと協力して行われます。

* マイルストーンのチームのキャパシティ
* Issue の見積もりと複雑さ
* 戦略的な優先事項とお客様へのコミットメント

#### 優先順位付け {#prioritization}

`~Deliverable` ラベルが付いた Issue は、マイルストーン内の他の作業よりも優先されます。
チームメンバーは以下を行うべきです。

1. まず、現在のマイルストーンでアサインされた `~Deliverable` の Issue に取り組む
2. すべての `~Deliverable` の Issue が完了またはブロックされている場合、マイルストーンから他の Issue を取り上げる
3. 優先順位が不明確な場合、または `~Deliverable` の Issue の優先度を下げる必要がある場合は、エンジニアリングマネージャーに相談する

**マイルストーン中:**

* `~Deliverable` の Issue がブロックされたり完了できなくなったりした場合は、`#g_workflow_catalog` または関連する Issue で早めに伝える
* エンジニアリングマネージャーは、優先順位やキャパシティの変化に基づいて、マイルストーン中に `~Deliverable` ラベルを調整する場合があります

### 私たちの Tech Stack {#our-tech-stack}

* GraphQL の[バックエンド](https://docs.gitlab.com/development/api_graphql_styleguide/)と
  [フロントエンド](https://docs.gitlab.com/development/fe_guide/graphql/)。すべての新しいスキーマアイテムは、
  必要なときに破壊的変更を行えるように[実験的としてマーク](https://docs.gitlab.com/development/api_graphql_styleguide/#mark-schema-items-as-experiments)する必要があります。
* ポーリングではなく GraphQL [サブスクリプション](https://docs.gitlab.com/development/fe_guide/graphql/#subscriptions)。
* [AI Catalog Backend Architecture](../../../engineering/architecture/design-documents/ai_catalog/_index.md) のデザインドキュメント（2026 年 2 月に執筆）を読んでください。

## チームミーティング {#team-meetings}

### Workflow Catalog: グループミーティング {#workflow-catalog-group-meeting}

* **時間**: 毎週火曜日、05:30 UTC と 15:00 UTC を週ごとに交互に。
* **目的**: このミーティングは、現在の Issue やブロッカーを取り上げるための一般的な同期ミーティングとして機能します。
* **アジェンダ**: [Google Doc（内部のみ）](https://docs.google.com/document/d/19zrzqN37ZVwwEJ9iYhy4QBsUzVN0Hd1j1yn8J0v4dqE)
* **録画**: [Google Drive（内部のみ）](https://drive.google.com/drive/folders/1I9s96jg9knqOwDLabhn9100H-MsvG2ne)
