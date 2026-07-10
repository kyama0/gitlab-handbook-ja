---
title: Agent Developer グループ
description: "Agent Developer グループは、GitLab Duo Developer の基盤フローに注力しています。フロー自体とその評価の改善、およびフローレジストリの改善に取り組んでいます。"
upstream_path: /handbook/engineering/ai/agent-developer/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: 2026-06-29T19:34:46-07:00
translated_at: "2026-07-10T20:37:43+09:00"
translator: codex
stale: false
---

## ビジョン

GitLab における中核的な AI／Agent 開発を推進し、エージェントの出力品質において業界の他社に対する競争力を獲得・維持するチームです。設定可能性を実現するプラットフォームを提供し、エージェントがプロンプトインジェクションに対して合理的に可能な限り高い耐性を備えるようにします。

### チームメンバー

**エンジニアリングマネージャーおよびエンジニア**

<!-- TODO: Confirm the correct manager slug for Annie Ying (aying-gl / aying). -->
{{< team-by-manager-slug "aying-gl" >}}

**プロダクト、デザイン、品質**

| 役割 | 担当者 |
|------|--------|
| Product Manager | @frwang1 |

### ☎️ 私たちへの連絡方法

状況に応じて、Agent Developer グループへ連絡するもっとも適切な方法は次のとおりです:

* Slack チャンネル: `#f_duo_developer`, `#f_flow_components`, `#dev_agent_developer`
* Slack グループ: `@agent-developer-team` `@flow-components-subteam` `@duo-developer-subteam`

### 技術コンポーネント 🛠️

メインの GitLab リポジトリ以外で、私たちが扱う主要な技術コンポーネントは次のとおりです:

1. [AI Gateway 内の Duo Workflow Service](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/tree/main/duo_workflow_service) 🐍 — ここでの私たちの作業は、**Duo Developer 基盤フロー**を中心としています:
   1. Developer Flow 自体の改善。
   1. フローの評価の改善。
   1. フローレジストリの改善。

これらのコンポーネントがどのように連携するかについては、[アーキテクチャ](/handbook/engineering/architecture/design-documents/duo_workflow/)を参照してください。

## 📦 チームプロセス

### Goalkeeper ローテーション

_TBD — Goalkeeper ローテーションのプロセスはまだ定義中です。_

### レトロスペクティブ

_TBD — レトロスペクティブのプロセスはまだ定義中です。_

### 📆 定例チームミーティング

**❗️重要**: すべてのミーティングで、[Agent Developer チームのミーティングメモドキュメント](https://docs.google.com/document/d/1wKrNYqP3SwSFa29dWyCMOq_O_31YQ64YX1FIztA6-ag/edit)を使用し、ミーティングのメモや、最近行われた他の同期ミーティングのアジェンダ／メモ／録画への参照を記入してください。これにより、人々がミーティングのメモを見つけやすくなります。

#### チームミーティング

1. **Agent Developer Standup**（隔週火曜日）
   * **いつ:** 隔週火曜日 14:00 UTC <!-- 15:00 CET; note: during CEST (summer) this is 13:00 UTC -->
   * **内容:** Agent Developer チーム全体が、各サブチームの取り組みについて認識を共有し、ブロッカーを明らかにし、サブチーム間で足並みをそろえるためのスタンドアップ形式のミーティングです。

1. **Weekly Async Update**（毎週水曜日）
   * **いつ:** 毎週水曜日（非同期、ライブミーティングなし）
   * **内容:** 各チームメンバーが投稿する Issue 単位の非同期アップデートです — 形式は以前と同じです。テンプレートは[週次の非同期アップデート](#-weekly-async-updates)を参照してください。

1. **Subteam Syncs**（毎週）
   * **いつ:** サブチームごとに毎週実施（スケジュールは各サブチームが設定）
   * **内容:** 各サブチーム内でのより深い技術的ディスカッションです。実装の詳細、設計上の決定、および小規模なグループでの同期が有益な進捗を扱います。

### 共有カレンダー

_TBD。_

### 📚 Agent Developer ボードの概要

Agent Developer チームはマイルストーンプロセスに従っています。現在優先されているすべての Issue は、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aagent%20developer)で可視化されています。過去および現在のマイルストーンの目標とフォーカスポイントを概説する概要 Issue は、[統括エピック](https://gitlab.com/groups/gitlab-org/-/work_items/18293)にあります。

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

Agent Developer チームは、次のガイドラインに基づいてコミュニケーションを行います:

1. 同期ミーティングよりも、常に非同期コミュニケーションを優先します。
1. 非同期が非効率だと判明した場合は、[同期コール](#-ad-hoc-sync-calls)の調整をためらわないでください。ただし、チームメンバーと共有するため常に録画してください。
1. デフォルトでは、オープンにコミュニケーションします。
1. Slack 上での仕事関連のコミュニケーションはすべて `#dev_agent_developer` チャンネルで行います。

### 📋 週次の非同期アップデート

私たちは、明確なコミュニケーションを確保し、進捗を効果的に追跡し、チーム全体の透明性を保つため、週次の非同期ステータスアップデートの慣行を維持しています。このプロセスは、構造化されたコミュニケーションを通じてコラボレーションを促進し、成果を推進し、効率性を高めることで、私たちのコアバリューに沿っています。

#### タイミングと頻度

* チームメンバーは毎週金曜日にアップデートを投稿し、チームの Slack チャンネル（`#dev_agent_developer`）で共有します。
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

/cc @aying-gl @bastirehm @frwang1
```

エンジニアリングマネージャー、プロダクトマネージャー、そして協働しているチームメンバーを必ずタグ付けしてください。

#### ベストプラクティス

* アップデートは具体的かつ簡潔に
* 暫定的であっても、常に次のステップを含める
* ブロッカーは早めにフラグを立てる - 深刻になるまで待たない
* スキャンしやすいよう、テンプレートを一貫して使用する
* 適切な場合は、関連する Issue やドキュメントにリンクする

### ⏲ 休暇

チームメンバーは、[休暇取得](/handbook/engineering/#taking-time-off)ポリシーに従って、[予定された休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を「Workday」Slack アプリに追加し、[PTO カバレッジ Issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new)の作成を含めて行うべきです。

### 🤙 アドホックな同期コール

私たちはデフォルトで非同期コミュニケーションを使って運用しています。同期ディスカッションが有益な場合もあるので、チームメンバーが必要に応じて必要なチームメンバーと同期コールをスケジュールすることを推奨します。

## 🔗 便利なリンク

* [Issue ボード（Started マイルストーン）](https://gitlab.com/groups/gitlab-org/-/boards/11381598?milestone_title=Started&label_name%5B%5D=group%3A%3Aagent%20developer)

### 📝 ダッシュボード（内部限定）

* [Developer Trace Analyzer](https://developer-traces-77e941.gitlab.io/index.html)
* [Tableau の使用状況メトリクス](https://10az.online.tableau.com/#/site/gitlab/views/DuoWorkflowMetricsTracking/DuoWorkflowMetricsTracking?:iid=1)
