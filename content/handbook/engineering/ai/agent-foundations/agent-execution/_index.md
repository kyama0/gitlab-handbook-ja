---
title: Agent Execution グループ
description: "Agent Execution グループは、開発ワークフローのタスクを自動化して生産性向上を支援する AI システム、GitLab Duo Workflow の開発に注力しています。"
upstream_path: /handbook/engineering/ai/agent-foundations/agent-execution/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
lastmod: "2026-08-18T13:41:28+02:00"
translated_at: "2026-09-04T11:16:44+09:00"
translator: codex
stale: false
---

## ビジョン

Agent Execution グループは、SDLC 全体でエージェントを実行するための最良の環境へ GitLab を変えることに注力しています。

## 👥 リーダーシップ

{{< group-by-slugs bastirehm arueda emilybauman >}}

## 🧭 チーム

このグループは、Agent Tools、Agent Observability、Runner Execution という 3 つのファンクショナルチームで構成されています。各チームがそれぞれの機能領域を担当します。

### Agent Tools

Agent Tools は、エージェントが GitLab や外部サービスとやり取りするための、可能な限り優れたツールの構築に注力しています。
その主な責任の 1 つが、GitLab の MCP サーバーです。

#### チームメンバー

{{< group-by-slugs terrichu adruid afilatov fdegier>}}

### Agent Observability

Agent Observability は、GitLab 全体でエージェントが何をしているかを理解するための機能と、エージェントとやり取りする方法の両方を提供することに注力しています。

#### チームメンバー

{{< group-by-slugs lindsey-shelton andrew-f allison_villa romaneisner>}}

### Runner Execution

Runner Execution は、GitLab runner をエージェントが実行されるネイティブ環境に変えることに注力しています。

#### チームメンバー

{{< group-by-slugs ssuman3 andrasherczeg alperakgun>}}

## 📦 チームプロセス

私たちは全般的に、[GitLab の AI 組織全体のプロセス](/handbook/product-development/how-we-work/ai-section-product-development-flow)に沿っています。具体的には、次のとおりです。

### 📆 定例チームミーティング

**❗️重要**: すべてのミーティングでは、リンクされたミーティングドキュメントを使用してミーティングメモを記入し、最近行われたその他の同期ミーティングのアジェンダ、メモ、録画への参照も記載してください。これにより、ミーティングメモを見つけやすくなります。

#### チームの週次ミーティング

すべてのチームは、毎週月曜日に 30 分間ミーティングを行います。このミーティングでは、少なくとも現在のマイルストーンにおける進捗とブロッカーを確認します。また、デモの発表やその他の関連情報の共有にも使用できます

マイルストーンの開始時には、今後の優先事項を確認する時間を確保するため、ミーティングを 1 時間行います。

### Goalkeeper ローテーション

Agent Execution グループでは、寄せられる Request-for-Help、質問、Issue がトリアージされ、適切な人やチームに振り分けられるように、Goalkeeper ローテーションを実施しています。Goalkeeper はチーム自身による第一線のサポートとして機能し、作業をスムーズに進め、ボトルネックを防ぎます。寄せられるすべての Issue に自ら取り組んだり、解決したりすることは期待されていません。適切なカバレッジを確保するため、毎週 1 人のエンジニアが担当します。

責任と詳細なプロセスは [Goalkeeper Issue テンプレート](https://gitlab.com/gitlab-org/ai-engineering/agent-execution/tasks/-/blob/main/.gitlab/issue_templates/goalkeeper.md)に記載され、現在の Goalkeeper は [Google スプレッドシート](https://docs.google.com/spreadsheets/d/1BP_b3AttMmAG-Vf9RZ6sMBEoGdJk2-2iKbGxHYshCV4/edit?gid=0#gid=0)に記録されています。
Goalkeeper の担当期間に対応できない場合は、`#g_agent-execution` チャンネルで他のチームメンバーと担当を交代してください。

### 共有カレンダー

* AI-Powered Stage Calendar（カレンダー ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`）

### 📚 Agent Execution ボードの概要

Agent Execution チームはマイルストーンプロセスに従っています。現在優先されているすべての Issue は、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aagent%20execution)で可視化されています。
過去および現在のマイルストーンの目標と重点項目を概説する概要 Issue は、[統括エピック](https://gitlab.com/groups/gitlab-org/ai-powered/agent-foundations/agent-execution/-/work_items/3)にあります。各チームには、日々の追跡用に個別のボードもあります。

1. [Agent Tools](https://gitlab.com/groups/gitlab-org/-/boards/11408357)
1. [Agent Observability](https://gitlab.com/groups/gitlab-org/-/boards/11405857)
1. [Runner Execution](https://gitlab.com/groups/gitlab-org/-/boards/11407842)

私たちは、現在のマイルストーンについて野心的でありながら達成可能な計画を目指しており、現在のマイルストーンにある Issue のみを積極的に進めるべきです。利用できる Issue がもうない場合は、`f_[team-name]` Slack チャンネルでチームの EM／PM に確認してください。

Issue には次のステータスを使用します。

1. **New**: まだ分類されていない Issue で、使用中のワークフローラベルや、イテレーション概要などのメタ Issue のいずれかに更新する必要があります。
1. **Refinement**: この段階の Issue は、取り組むべき重要なものとして特定されていますが、まだ開発の準備ができていません。デザインが不足または未完成である、明確化が必要なアーキテクチャ上の疑問があるなど、さまざまな理由が考えられます。
1. **Ready for development**: 実装の準備ができた Issue は、このリストに移動します。
1. **In dev**: 開発者が Issue の作業を開始したら、このリストに移動する必要があります。
1. **Blocked**: この段階の Issue は、他の作業が先に完了することに依存しているため、現時点ではこれ以上進められません。
1. **In review**: 開発が完了しレビューに提出されたら、Issue をこのリストに移動する必要があります。
1. **Verification**: コードと UX のレビューが成功したら、Issue をこのリストに移動し、「verification」ラベルを適用する必要があります。
1. **Closed**: Issue が検証され、正しく動作することが確認されたら、このリストに移動し、「complete」ラベルを適用して、Issue をクローズする必要があります。

Issue に取り組む順序を理解しやすくするために、ラベルを使用します。

1. **Deliverable**: これらの項目はイテレーションの主要な成果物であるため、最初に着手する必要があります。
1. **Stretch**: これらの項目の一部を提供することを目指しますが、野心的に計画する一環として、間に合わない可能性があります。

各ファンクショナルチームには、チームを区別するために同等のカテゴリラベルがあります（例: `~category:agent tools`）。

## 👏 コミュニケーション

Agent Execution チームは、次のガイドラインに基づいてコミュニケーションを行います。

1. デフォルトでは GitLab を使って非同期でコミュニケーションし、突発的で時間的制約のあるやり取りには Slack を使用します。
1. 非同期が非効率だと判明した場合は、同期コールの調整をためらわないでください。ただし、チームメンバーと共有するために必ず録画してください。
1. デフォルトではオープンにコミュニケーションします。

### 📋 週次の非同期アップデート

私たちは、明確なコミュニケーションを確保し、進捗を効果的に追跡し、チーム全体の透明性を維持するため、週次の非同期ステータスアップデートを実践しています。

#### タイミングと頻度

* チームメンバーは毎週水曜日にアップデートを投稿します
* アップデートは、少なくとも **In Dev** にあるすべての割り当て済み Issue について必須です。その他の割り当て済み Issue については、アップデートが必要かどうかは担当者の判断に委ねられます。
* 複数の Issue に取り組んでいる場合は、複数のアップデートが必要になることがあります

#### テンプレート

アップデートには次のテンプレートを使用します

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

/cc @bastirehm @amandarueda [@emilybauman if design involvement]
```

エンジニアリングマネージャー、プロダクトマネージャー、そして協働しているチームメンバーを必ずタグ付けしてください。Issue にデザイン要素がある場合は、デザイン担当者もタグ付けします。

#### ベストプラクティス

* アップデートは具体的かつ簡潔にします
* 暫定的であっても、常に次のステップを含めます
* ブロッカーは早めに明示し、重大になるまで待たないでください
* 確認しやすいよう、テンプレートを一貫して使用します
* 必要に応じて、関連する Issue やドキュメントへのリンクを含めます

### ⏲ 休暇

チームメンバーは、[予定された休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を「Workday」Slack アプリに追加し、[休暇取得](/handbook/engineering/#taking-time-off)ポリシーに従って [PTO カバレッジ Issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new)も作成する必要があります。

## 💬 連絡先

### Slack

私たちは [GitLab Slack チャンネルのプレフィックス規則](/handbook/communication/#slack)に従います。チーム横断のステージ／組織チャンネルには `s_`、Engineering、PM、UX が参加するファンクショナルチームチャンネルには `f_`、Engineering 専用のグループディスカッションには `g_` を使用します。アンダースコアは異なるものを区切り、ハイフンは 1 つのものを構成する単語をつなぎます。

| スコープ | チャンネル | 目的 |
| ----- | ------- | ------- |
| 組織 | `#g_agent-execution` | 特定のファンクショナルチームに限定されない、主に Engineering に焦点を当てたディスカッション。 |
| Agent Tools | `#f_agent-tools` | Agent Tools ファンクショナルチーム |
| Agent Observability | `#f_agent-observability` | Agent Observability ファンクショナルチーム |
| Runner Execution | `#f_runner-execution` | Runner Execution ファンクショナルチーム |
