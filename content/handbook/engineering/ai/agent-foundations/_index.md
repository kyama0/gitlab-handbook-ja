---
title: Agent Foundations グループ
description: "Agent Foundations グループは、開発ワークフローのタスク自動化と生産性向上を支援する AI システム、GitLab Duo Workflow の開発に注力しています。"
upstream_path: /handbook/engineering/ai/agent-foundations/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
---

## ビジョン

Agent Foundations グループは、開発ワークフローのタスク自動化と生産性向上を支援する AI システムである、Agents and Flows の基盤の開発に注力しています。

### チームメンバー

**Engineering Manager & Engineers**

{{< team-by-manager-slug "bastirehm" >}}

**Product, Design & Quality**

{{% engineering/stable-counterparts role="(Product Manager|Technical Writer|Security Engineer).*(Agent Foundations)" %}}

### ☎️ 私たちへの連絡方法

状況に応じて、Agent Foundations グループへ連絡するもっとも適切な方法は次のとおりです:

* Slack チャンネル: `#g_agent_foundations`
* Slack グループ: `@duo-workflow`（チーム全体）と `@duo-workflow-engs`（エンジニアのみ）

### 技術コンポーネント 🛠️

メインの GitLab リポジトリ以外で、私たちが扱う主要な技術コンポーネントは次のとおりです:

1. [AI Gateway 内の Duo Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service) 🐍
1. IDE 統合 🧩
   1. [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   1. [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension) + 特定の IDE 向けのその他の拡張機能

私たちが主に保守しているその他のプロジェクト:

1. [Duo Workflow Tests](https://gitlab.com/gitlab-org/duo-workflow/testing/duo-workflow-tests)
2. [Default Docker Image](https://gitlab.com/gitlab-org/duo-workflow/default-docker-image)

これらのコンポーネントがどのように連携するかについては、[アーキテクチャ](/handbook/engineering/architecture/design-documents/duo_workflow/)を参照してください。

## 📦 チームプロセス

### Goalkeeper ローテーション

Agent Foundations チームは Goalkeeper ローテーションを使い、寄せられる Request-for-Help、質問、Issue がトリアージされ、適切な人やチームに振り分けられるようにしています。Goalkeeper はチーム自身による第一線のサポートとして機能し、作業がスムーズに流れるよう保ち、ボトルネックを防ぎます。寄せられるすべての Issue を Goalkeeper が自分一人で対応したり解決したりすることは想定されていません。適切なカバレッジを確保するため、毎週 1 名のエンジニアがこれに割り当てられます。

責任範囲とそれ以降のプロセスは、[Goalkeeper Issue テンプレート](https://gitlab.com/gitlab-org/ai-engineering/agent-foundations/tasks/-/blob/main/.gitlab/issue_templates/goalkeeper.md)に記載されています。

### レトロスペクティブ

私たちは、働き方を継続的に進化・改善することが、良い成果を生み出すうえで不可欠だと考えています。伝統的に、レトロスペクティブはこの改善を促すために使われます。
私たちは地理的に分散しているため、全員が参加する典型的な同期型レトロスペクティブを実施できません。
また、完全に非同期のレトロスペクティブでは参加とディスカッションが限定的になることもわかっています。

私たちは現在、チームメンバーがレトロ Issue の記入をペアで行う、混合型レトロスペクティブの形式を試行しています。プロセスは次のとおりです:

1. マイルストーンごとに、[async-retrospective プロジェクト](https://gitlab.com/gitlab-org/async-retrospectives)が、レトロの質問リストを含む Issue を [agent-foundations レトロプロジェクト](https://gitlab.com/gl-retrospectives/data-science/ai-powered/agent-foundations/-/work_items)に自動的に作成します。
1. 4 週ごとに、[donut Slackbot](https://www.donut.com/) が全チームメンバーをランダムに 2 人組のグループにペアリングします。
1. 各 2 人組は、その週のうちに現在のイテレーションのレトロ Issue の記入を一緒にペアで行います:
   1. 理想的には同期ミーティングを通じて、あるいは Slack 経由で行います。
   1. 前回のペアリング以降、直近の 2 週間に起きたことに焦点を当てます。
   1. ペアリングでは、質問についてじっくり考え、回答についてペアと話し合い、特定された問題に基づくアクションアイテムを考え出す時間をとります。
   1. 隔週のペアリングには、全体で 30 分から 1 時間程度の時間を見込んでください。
1. 隔週で 30 分のタイムブロッカーイベントを設けており、全員がレトロのディスカッションに回答する時間をとるためのものです。

### 📆 定例チームミーティング

**❗️重要**: すべてのミーティングで、[Agent Foundations チームのミーティングドキュメント](https://docs.google.com/document/d/15N9G3UWoB_u8KOErdk_aGk5IdBoxEFBWMSgg9FvwVXo/edit?tab=t.0#heading=h.j3rcm4sf2nc9)を使用し、ミーティングのメモや、最近行われた他の同期ミーティングのアジェンダ／メモ／録画への参照を記入してください。これにより、人々がミーティングのメモを見つけやすくなります。

#### チームミーティング

1. **Agent Foundations Meeting**
   * **いつ:** 毎週月曜日 15:00 UTC、および毎週水曜日 10:00 UTC
   * **内容:** このミーティングは、現在の課題やブロッカーを取り上げるための一般的な同期ミーティングとして機能します。現在の進捗と優先順位を明確にするため、ミーティング間で交互に少なくとも週 1 回はボードをウォークします。

### 共有カレンダー

* AI-Powered Stage Calendar（カレンダー ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`）

### 📚 Agent Foundations ボードの概要

Agent Foundations チームはマイルストーンプロセスに従っています。現在優先されているすべての Issue は、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aagent%20foundations)で可視化されています。過去および現在のマイルストーンの目標とフォーカスポイントを概説する概要 Issue は、[統括エピック](https://gitlab.com/groups/gitlab-org/-/work_items/18293)にあります。

私たちは、現在のマイルストーンについて野心的でありながら達成可能な計画を目指しており、現在のマイルストーンにある Issue のみを積極的に作業すべきです。利用できる Issue がもうない場合は、チームの EM／PM に確認を取ってください。

私たちは Issue について次のステータスで作業します:

1. **New**: まだ分類されていない Issue で、使用されるワークフローラベルや、イテレーション概要などのメタ Issue のいずれかに更新する必要があります。
1. **Refinement**: この段階の Issue は、作業すべき重要なものとして特定されているものの、まだ開発の準備ができていません。これは、デザインが不足または未完成である、明確化が必要なアーキテクチャ上の疑問があるなど、さまざまな理由によります。
1. **Ready for development**: 実装の準備ができた Issue はこのリストに移動されます。
1. **In dev**: 開発者が Issue の作業を開始したら、このリストに移動すべきです。
1. **Blocked**: この段階の Issue は、他の作業が先に完了することに依存しているため、現時点ではこれ以上進められません。
1. **In review**: 開発が完了しレビューに提出されたら、Issue はこのリストに移動すべきです。
1. **Verification**: コードと UX のレビューが成功したら、Issue はこのリストに移動し、「verification」ラベルを適用すべきです。
1. **Closed**: Issue が検証され、正しく動作することが確認されたら、このリストに移動し、「complete」ラベルを適用し、Issue をクローズすべきです。

私たちはラベルを使って、Issue を作業すべき順序を理解しやすくしています:

1. **Deliverable**: これらの項目はイテレーションの主要な成果物であり、したがって最初に着手すべきです。
1. **Stretch**: これらの項目のほとんどを提供することを目指しますが、野心的に計画する一環として、一部はスリップする可能性があります。

## 👏 コミュニケーション

Agent Foundations チームは、次のガイドラインに基づいてコミュニケーションを行います:

1. 同期ミーティングよりも、常に非同期コミュニケーションを優先します。
1. 非同期が非効率だと判明した場合は、[同期コール](#-ad-hoc-sync-calls)の調整をためらわないでください。ただし、チームメンバーと共有するため常に録画してください。
1. デフォルトでは、オープンにコミュニケーションします。
1. Slack 上での仕事関連のコミュニケーションはすべて `#g_agent_foundations` チャンネルで行います。

### 📋 週次の非同期アップデート

私たちは、明確なコミュニケーションを確保し、進捗を効果的に追跡し、チーム全体の透明性を保つため、週次の非同期ステータスアップデートの慣行を維持しています。このプロセスは、構造化されたコミュニケーションを通じてコラボレーションを促進し、成果を推進し、効率性を高めることで、私たちのコアバリューに沿っています。

#### タイミングと頻度

* チームメンバーは毎週水曜日にアップデートを投稿します
* アップデートは、少なくとも **In Dev** にあるすべての割り当て済み Issue について必須です。その他の割り当て済み Issue については、アップデートが必要かどうかは担当者の判断に委ねられます。
* 複数の Issue に取り組んでいる場合は、複数のアップデートが必要になることがあります

#### テンプレート

アップデートに使用するテンプレートはこちらです

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

エンジニアリングマネージャー、プロダクトマネージャー、そして協働しているチームメンバーを必ずタグ付けしてください。

#### ベストプラクティス

* アップデートは具体的かつ簡潔に
* 暫定的であっても、常に次のステップを含める
* ブロッカーは早めにフラグを立てる - 深刻になるまで待たない
* スキャンしやすいよう、テンプレートを一貫して使用する
* 適切な場合は、関連する Issue やドキュメントにリンクする

### ⏲ 休暇

チームメンバーは、[休暇取得](/handbook/engineering/#taking-time-off)ポリシーに従って、[予定された休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を「Workday」Slack アプリに追加し、[PTO カバレッジ Issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new) の作成を含めて行うべきです。

### 🤙 アドホックな同期コール

私たちはデフォルトで非同期コミュニケーションを使って運用しています。同期ディスカッションが有益な場合もあるので、チームメンバーが必要に応じて必要なチームメンバーと同期コールをスケジュールすることを推奨します。

## 🔗 便利なリンク

* [Monthly Retros](https://gitlab.com/gl-retrospectives/data-science/ai-powered/agent-foundations/-/work_items)
* [LangGraph Workshop](https://gitlab.com/gitlab-org/duo-workflow/langgraph-workshop)

### 📝 ダッシュボード（内部限定）

* [Tableau での使用状況メトリクスのトラッキング](https://10az.online.tableau.com/#/site/gitlab/views/DuoWorkflowMetricsTracking/DuoWorkflowMetricsTracking?:iid=1)

### 📹 GitLab Unfiltered プレイリスト

Agent Foundations グループは、グループとそのチームメンバーに関連するいくつかの動画録画を、[GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube チャンネルの[プレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KoByUnA4Oq-AAins6hDFwyC)にまとめています。
</content>
