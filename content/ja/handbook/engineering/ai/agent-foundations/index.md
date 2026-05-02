---
title: Agent Foundations グループ
description: "Agent Foundations グループは、開発ワークフローでタスクを自動化し生産性向上を支援する AI システム、GitLab Duo Workflow の開発に注力しています。"
upstream_path: /handbook/engineering/ai/agent-foundations/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## ビジョン

Agent Foundations グループは、開発ワークフローでタスクを自動化し生産性向上を支援する AI システム、Agents と Flows の基盤を GitLab で開発することに注力しています。

### チームメンバー

**Engineering Manager と Engineer**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/agent-foundations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


**Product、Design & Quality**


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/agent-foundations/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### ☎️ 連絡方法

コンテキストに応じて、Agent Foundations グループへの最も適切な連絡方法は以下のとおりです。

* Slack チャンネル: `#g_agent_foundations`
* Slack グループ: `@duo-workflow` (チーム全体) と `@duo-workflow-engs` (エンジニアのみ)

### 技術コンポーネント 🛠️

メインの GitLab リポジトリ以外に、私たちが扱う主要な技術コンポーネントは以下のとおりです。

1. [AI Gateway 内の Duo Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service) 🐍
1. IDE 統合 🧩
   1. [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   1. [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension) と特定の IDE 用の拡張機能

主に保守している追加のプロジェクト:

1. [Duo Workflow Tests](https://gitlab.com/gitlab-org/duo-workflow/testing/duo-workflow-tests)
2. [Default Docker Image](https://gitlab.com/gitlab-org/duo-workflow/default-docker-image)

これらのコンポーネントがどのように連携するかを理解するには、[アーキテクチャ](/handbook/engineering/architecture/design-documents/duo_workflow/) を参照してください。

## 📦 チームプロセス

### Goalkeeper ローテーション

Agent Foundations チームは、入ってくる Request-for-Help、質問、Issue がトリアージされ適切な人やチームに振り分けられることを保証するため、Goalkeeper ローテーションを使用しています。Goalkeeper はサポートの第一線として機能し、作業をスムーズに流し、ボトルネックを防ぎます。マイルストーンごとに 2 人のエンジニアが割り当てられ、適切なカバレッジを確保します。

責任とその後のプロセスは [Goalkeeper Issue テンプレート](https://gitlab.com/gitlab-org/ai-engineering/agent-foundations/tasks/-/blob/main/.gitlab/issue_templates/goalkeeper.md) にあります。

### レトロスペクティブ

良い成果を提供するためには、働き方を継続的に進化させ改善することが不可欠だと考えています。従来、レトロスペクティブはこの改善を促進するために使用されています。地理的な分散のため、全員を含む典型的な同期レトロスペクティブを実行することはできません。完全に非同期のレトロスペクティブは限定的な参加と議論しか得られないこともわかりました。

現在、チームメンバーがペアでレトロ Issue を記入する混合レトロスペクティブ形式を試行しています。プロセスは次のとおりです。

1. マイルストーンごとに [async-retrospective プロジェクト](https://gitlab.com/gitlab-org/async-retrospectives) が、レトロの質問のリストを含む Issue を [agent-foundations retro プロジェクト](https://gitlab.com/gl-retrospectives/data-science/ai-powered/agent-foundations/-/work_items) に自動的に作成します。
1. 4 週間ごとに [donut Slackbot](https://www.donut.com/) がすべてのチームメンバーをランダムに 2 人のグループにペアリングします。
1. 2 人のペアは、その週内に現在のイテレーションのレトロ Issue を一緒に記入する必要があります。
   1. これは理想的には同期ミーティングまたは Slack を介して行われるべきです。
   1. 前回のペアリング以降の 2 週間に起こったことに焦点を当ててください。
   1. ペアリングでは、質問について考え、ペアと答えについて話し合い、特定された問題に基づいてアクションアイテムを考え出すための時間を取る必要があります。
   1. 隔週のペアリングには 30 分から 1 時間の全体的な時間コミットメントを期待してください。
1. 2 週間ごとに 30 分のタイムブロッカーイベントがあり、これは全員がレトロのディスカッションに答える時間を取ることを意図しています。

### 📆 定例チームミーティング

**❗️重要**: 各ミーティングでは、[Agent Foundations チームのミーティングドキュメント](https://docs.google.com/document/d/15N9G3UWoB_u8KOErdk_aGk5IdBoxEFBWMSgg9FvwVXo/edit?tab=t.0#heading=h.j3rcm4sf2nc9) を使用し、ミーティングノートと、最近行われた他の同期ミーティングのアジェンダ/ノート/録画への参照を記入してください。これにより、ミーティングノートを見つけやすくなります。

#### チームミーティング

1. **Agent Foundations Meeting**
   * **いつ:** 毎週月曜日 15:00 UTC、毎週水曜日 10:00 UTC
   * **何:** このミーティングは、現在の Issue やブロッカーを取り上げる一般的な同期ミーティングとして機能します。現在の進捗と優先事項を明確にするため、ミーティング間で交互に少なくとも週 1 回ボードを歩きます。

### 共有カレンダー

* AI-Powered Stage Calendar (カレンダー ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`)

### 📚 Agent Foundations ボード概要

Agent Foundations チームはマイルストーンプロセスに従っています。現在優先順位付けされたすべての Issue は、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aagent%20foundations) で可視化されています。過去のマイルストーンと現在のマイルストーンの目標と焦点を概説する Overview Issue は、[包括的なエピック](https://gitlab.com/groups/gitlab-org/-/work_items/18293) で見つけることができます。

私たちは現在のマイルストーンの野心的だが達成可能な計画を目指しており、現在のマイルストーンの Issue のみを能動的に作業すべきです。これ以上利用可能な Issue がない場合は、説明のためにチームの EM/PM に連絡してください。

私たちは Issue について次のステータスで作業します。

1. **New**: まだ分類されていない Issue で、使用されているワークフローラベルやイテレーション概要などのメタ Issue のいずれかに更新する必要があります。
1. **Refinement**: このステージの Issue は重要な作業として特定されていますが、まだ開発の準備ができていません。これは、デザインがない/完了していない、または明確化が必要なアーキテクチャ上の質問など、さまざまな理由による可能性があります。
1. **Ready for development**: 実装の準備ができている Issue はこのリストに移動されます。
1. **In dev**: 開発者が Issue の作業を開始するときは、それをこのリストに移動する必要があります。
1. **Blocked**: このステージの Issue は、他の作業が最初に行われることに依存しているため、現在さらに進めることができません。
1. **In review**: 開発が完了し、レビューのために提出された後、Issue はこのリストに移動する必要があります。
1. **Verification**: コードと UX のレビューが成功した後、Issue はこのリストに移動し、「verification」ラベルを適用する必要があります。
1. **Closed**: Issue が検証され、適切に動作することが確認されたら、このリストに移動し、「complete」ラベルを適用し、Issue をクローズする必要があります。

私たちは Issue が作業されるべき順序の理解を助けるためにラベルを使用します。

1. **Deliverable**: これらのアイテムはイテレーションの主要な成果物であり、最初に取り上げられるべきです。
1. **Stretch**: これらのアイテムのほとんどを提供することを目指していますが、野心的な計画の一環として、それらの一部は遅れる可能性があります。

## 👏 コミュニケーション

Agent Foundations チームは、以下のガイドラインに基づいてコミュニケーションを行います。

1. 同期ミーティングよりも常に非同期コミュニケーションを優先する。
1. 非同期が非効率になっている場合、[同期コール](#-ad-hoc-sync-calls) の手配を躊躇しないでください。ただし、チームメンバーと共有するために常に録画してください。
1. デフォルトで公開でコミュニケーションを取る。
1. Slack でのすべての作業関連のコミュニケーションは `#g_agent_foundations` チャンネルで行います。

### 📋 週次の非同期更新

私たちは、明確なコミュニケーションを確保し、進捗を効果的に追跡し、チーム全体で透明性を維持するため、週次の非同期ステータス更新の実践を維持しています。このプロセスは、構造化されたコミュニケーションを通じてコラボレーションを促進し、結果を推進し、効率を促進することで、私たちのコアバリューと整合します。

#### タイミングと頻度

* チームメンバーは毎週水曜日に更新を投稿します
* 少なくとも **In Dev** の状態にある割り当てられたすべての Issue に対して更新が必要です。その他の割り当てられた Issue については、更新が正当化されるかどうかは担当者が判断します。
* 複数の Issue で作業している場合、複数の更新が必要になる場合があります

#### テンプレート

これは更新に使用するテンプレートです

```markdown
## Async Status Update yyyy-mm-dd

- **Progress & Status**: _What progress have you made? What's the current state?_
- **Next Steps**: _What are your planned next actions?_
- **Blockers**: _Are you blocked or need assistance with this?_
- **How confident are you that this will make it to the current milestone?**
    - [ ] Not confident
    - [ ] Slightly confident
    - [ ] Very confident

_Remember to update the status!_

/cc @bastirehm @frwang1
```

エンジニアリングマネージャー、プロダクトマネージャー、および協力しているチームメンバーをタグ付けすることを忘れないでください。

#### ベストプラクティス

* 更新は具体的かつ簡潔にする
* 暫定的でも、常に次のステップを含める
* ブロッカーを早期にフラグする — 重大になるまで待たない
* 簡単にスキャンできるように、テンプレートを一貫して使用する
* 適切な場合は、関連する Issue やドキュメントへのリンクを含める

### ⏲ 休暇

チームメンバーは、[休暇取得](/handbook/engineering/#taking-time-off) ポリシーに従って、[計画された休暇](/handbook/people-group/time-off-and-absence/time-off-types/) を「Workday」Slack アプリに追加し、[PTO coverage Issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new) の作成を含めて行うべきです。

### 🤙 アドホックな同期コール

私たちはデフォルトで非同期コミュニケーションを使用して運営しています。同期ディスカッションが有益な場合があり、必要に応じてチームメンバーが必要なチームメンバーと同期コールをスケジュールすることを奨励しています。

## 🔗 有用なリンク

* [月次レトロ](https://gitlab.com/gl-retrospectives/data-science/ai-powered/agent-foundations/-/work_items)
* [LangGraph Workshop](https://gitlab.com/gitlab-org/duo-workflow/langgraph-workshop)

### 📝 ダッシュボード (内部のみ)

* [Tableau での使用状況メトリクス追跡](https://10az.online.tableau.com/#/site/gitlab/views/DuoWorkflowMetricsTracking/DuoWorkflowMetricsTracking?:iid=1)

### 📹 GitLab Unfiltered プレイリスト

Agent Foundations グループは、グループとそのチームメンバーに関連する一部のビデオ録画を、[GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube チャンネルの [プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoByUnA4Oq-AAins6hDFwyC) にまとめています。
