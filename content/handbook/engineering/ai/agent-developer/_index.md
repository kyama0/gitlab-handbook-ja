---
title: Agent Developer グループ
description: "Agent Developer グループは、GitLab Duo Developer の基盤フローに重点を置き、フロー自体、その評価、Flow registry の改善に取り組んでいます。"
upstream_path: /handbook/engineering/ai/agent-developer/
upstream_sha: e48b48a5e8c7635a5993b5836c0ca253812429d2
lastmod: "2026-06-29T19:34:46-07:00"
translated_at: "2026-07-06T06:22:10+09:00"
translator: codex
stale: false
---

## ビジョン

GitLab における中核的な AI/Agent 開発を推進し、エージェントの出力品質に関して業界の他社と競争力を獲得し維持するチームです。設定可能性のためのプラットフォームを提供し、エージェントがプロンプトインジェクションに対して合理的に可能な限りレジリエントであることを確実にします。

### チームメンバー

**Engineering Manager & Engineers**

<!-- TODO: Confirm the correct manager slug for Annie Ying (aying-gl / aying). -->
{{< team-by-manager-slug "aying-gl" >}}

**Product, Design & Quality**

| 役割 | 担当者 |
|------|--------|
| Product Manager | @frwang1 |

### ☎️ 連絡方法

コンテキストに応じて、Agent Developer Group に連絡する最も適切な方法は次のとおりです。

* Slack チャネル: `#f_duo_developer`, `#f_flow_components`, `#dev_agent_developer`
* Slack グループ: `@agent-developer-team` `@flow-components-subteam` `@duo-developer-subteam`

### 技術コンポーネント 🛠️

メインの GitLab リポジトリに加えて、私たちが扱う主要な技術コンポーネントは次のとおりです。

1. [AI Gateway 内の Duo Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service) 🐍 — ここでの私たちの作業は、**Duo Developer の基盤フロー**を中心にしています。
   1. Developer Flow 自体を改善する。
   1. フローの評価を改善する。
   1. Flow registry を改善する。

これらのコンポーネントがどのように連携するかを理解するには、[アーキテクチャ](/handbook/engineering/architecture/design-documents/duo_workflow/)をご覧ください。

## 📦 チームプロセス

### Goalkeeper ローテーション

_TBD — goalkeeper ローテーションプロセスはまだ定義中です。_

### レトロスペクティブ

_TBD — レトロスペクティブプロセスはまだ定義中です。_

### 📆 定例チームミーティング

**❗️重要**: すべてのミーティングでは、[Agent Developer チームのミーティングノートドキュメント](https://docs.google.com/document/d/1wKrNYqP3SwSFa29dWyCMOq_O_31YQ64YX1FIztA6-ag/edit)を使い、ミーティングノートと、最近行われたその他の同期ミーティングのアジェンダ／ノート／録画への参照を記入してください。これにより、ミーティングノートを見つけやすくなります。

#### チームミーティング

1. **Agent Developer Standup**（隔週火曜日）
   * **日時:** 隔週火曜日、14:00 UTC <!-- 15:00 CET; note: during CEST (summer) this is 13:00 UTC -->
   * **内容:** Agent Developer チーム全体が、各サブチームの作業内容を共有し、ブロッカーを表面化し、サブチーム間の足並みを揃えるためのスタンドアップ形式のミーティング。

1. **Weekly Async Update**（毎週水曜日）
   * **日時:** 毎週水曜日（非同期、ライブミーティングなし）
   * **内容:** 各チームメンバーが投稿する Issue レベルの非同期更新 — 形式は以前と同じです。テンプレートについては[週次非同期アップデート](#-weekly-async-updates)を参照してください。

1. **Subteam Syncs**（毎週）
   * **日時:** サブチームごとの週次頻度（スケジュールは各サブチームが設定）
   * **内容:** 各サブチーム内でのより深い技術的議論。小規模グループでの同期が有効な実装詳細、設計判断、進捗を扱います。

### 共有カレンダー

_TBD._

### 📚 Agent Developer ボード概要

Agent Developer チームはマイルストーンプロセスに従っています。現在優先されているすべての Issue は、私たちの[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aagent%20developer)で可視化されています。過去のマイルストーンと現在のマイルストーンの目標およびフォーカスポイントを示す概要 Issue は、[包括的なエピック](https://gitlab.com/groups/gitlab-org/-/work_items/18293)で確認できます。

私たちは、現在のマイルストーンについて野心的でありながら達成可能な計画を目指しており、現在のマイルストーン内の Issue のみを積極的に作業すべきです。利用可能な Issue がなくなった場合は、明確化のためにチームの EM/PM に連絡してください。

Issue では以下のステータスを使います。

1. **New**: まだ分類されていない Issue。使用中の workflow ラベルまたはイテレーション概要などのメタ Issue のいずれかに更新する必要があります。
1. **Refinement**: このステージの Issue は、作業することが重要だと特定されていますが、まだ開発準備ができていません。未完了のデザインや、明確化が必要なアーキテクチャ上の問いなど、さまざまな理由が考えられます。
1. **Ready for development**: 実装準備ができた Issue はこのリストに移動されます。
1. **In dev**: 開発者が Issue の作業を開始したら、このリストに移動すべきです。
1. **Blocked**: このステージの Issue は、他の作業が先に完了することに依存しているため、現在これ以上進められません。
1. **In review**: 開発が完了し、レビューに提出された後、Issue はこのリストに移動すべきです。
1. **Verification**: コードレビューと UX レビューが成功した後、Issue はこのリストに移動され、"verification" ラベルが適用されるべきです。
1. **Closed**: Issue が検証され、正しく機能していることが確認されたら、このリストに移動され、"complete" ラベルが適用され、Issue がクローズされるべきです。

Issue に取り組む順序を理解しやすくするため、私たちは次のラベルを使います。

1. **Deliverable**: これらの項目はイテレーションの主要な成果物であるため、最初に着手すべきです。
1. **Stretch**: これらの項目の大半を提供することを目指しますが、野心的な計画の一部として一部が遅れる可能性があります。

## 👏 コミュニケーション

Agent Developer Team は、次のガイドラインに基づいてコミュニケーションします。

1. 常に同期ミーティングより非同期コミュニケーションを優先します。
1. 非同期では非効率であることが明らかな場合は、[同期コール](#-ad-hoc-sync-calls)を設定することをためらわないでください。ただし、必ず録画してチームメンバーに共有します。
1. デフォルトではオープンにコミュニケーションします。
1. Slack でのすべての業務関連コミュニケーションは `#dev_agent_developer` チャネルで行います。

### 📋 週次非同期アップデート {#-weekly-async-updates}

私たちは、チーム全体で明確なコミュニケーションを確保し、進捗を効果的に追跡し、透明性を維持するために、週次の非同期ステータス更新のプラクティスを維持しています。このプロセスは、構造化されたコミュニケーションを通じてコラボレーションを促進し、成果を推進し、効率性を高めることで、私たちのコアバリューに沿っています。

#### タイミングと頻度

* チームメンバーは毎週金曜日に更新を投稿し、チーム Slack チャネル（`#dev_agent_developer`）で共有します。
* 更新は、少なくとも **In Dev** になっているすべての割り当て済み Issue に必要です。その他の割り当て済み Issue について更新が必要かどうかは、アサインされた人の判断に委ねられます。
* 複数の Issue に取り組んでいる場合は、複数の更新が必要になることがあります

#### テンプレート

更新に使うテンプレートは次のとおりです。

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

/cc @aying-gl @bastirehm @frwang1
```

必ず Engineering Manager、Product Manager、およびコラボレーションしているチームメンバーをタグ付けしてください。

#### ベストプラクティス

* 更新は具体的かつ簡潔にします
* たとえ暫定的であっても、必ず次のステップを含めます
* ブロッカーは早めに示します - 重大化するまで待たないでください
* スキャンしやすくするため、テンプレートを一貫して使います
* 関連する Issue やドキュメントへのリンクを適宜含めます

### ⏲ 休暇

チームメンバーは、[予定されている休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を "Workday" Slack アプリに追加すべきです。[休暇取得](/handbook/engineering/#taking-time-off)ポリシーに従い、[PTO coverage Issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new)の作成も含めて対応してください。

### 🤙 アドホック同期コール {#-ad-hoc-sync-calls}

私たちはデフォルトで非同期コミュニケーションを使って運用します。同期での議論が有益な場合もあるため、必要に応じて必要なチームメンバーとの同期コールを設定することを推奨します。

## 🔗 便利なリンク

* [Issue Board（Started マイルストーン）](https://gitlab.com/groups/gitlab-org/-/boards/11381598?milestone_title=Started&label_name%5B%5D=group%3A%3Aagent%20developer)

### 📝 ダッシュボード（内部限定）

* [Developer Trace Analyzer](https://developer-traces-77e941.gitlab.io/index.html)
* [Usage Metrics in Tableau](https://10az.online.tableau.com/#/site/gitlab/views/DuoWorkflowMetricsTracking/DuoWorkflowMetricsTracking?:iid=1)
