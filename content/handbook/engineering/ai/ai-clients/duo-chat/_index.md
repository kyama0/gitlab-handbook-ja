---
title: Duo Chat グループ
description: "Duo Chat グループは、Web と IDE の各サーフェスで提供する、GitLab プラットフォームへの AI 自然言語インターフェースを構築し、DevSecOps の生産性向上に取り組みます。"
upstream_path: /handbook/engineering/ai/ai-clients/duo-chat/
upstream_sha: d51496d2a9ca5dfcbd3a4eef779fc95c357103f3
lastmod: "2026-08-06T16:35:18+02:00"
translated_at: "2026-08-07T06:50:55+09:00"
translator: codex
stale: false
---

## 🚀 ビジョン

Duo Chat グループは、他のプロダクトグループや幅広いコミュニティによる機能の統合を支援し、GitLab Duo Chat をプラットフォームとして開発することに注力しています。GitLab の製品カテゴリとしての Duo Chat について詳しくは、[製品カテゴリの方向性](https://about.gitlab.com/direction/ai-powered/duo_chat/)ページをご覧ください。

このグループは、[AI Clients ステージ](/handbook/engineering/ai/ai-clients/)の一部です。

---

## 👨‍💻 チームメンバー

{{< group-by-slugs donaldcook enrique-alcantara tomasbulva rfrederico evakadlecova kaveh_nejad_gitlab john-slaughter >}}

---

## 🤝 安定したカウンターパート

私たちの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)は以下のとおりです。

{{< group-by-slugs dashaadu nickleonard >}}

---

## 💬 連絡先

### Slack

- **Duo Chat ラウンジ:** [#duo-chat-lounge](https://gitlab.enterprise.slack.com/archives/C06LWENL58F)
- **Duo Chat に関する一般的な質問:** [#g_duo_chat](https://gitlab.slack.com/archives/g_duo_chat)
- **公開ステージチャンネル:** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C) — 質問と連絡
- **内部ステージチャンネル:** [#s_ai-clients](https://gitlab.slack.com/archives/s_ai-clients) — チームの同期専用

---

## 🏠 機能別チーム

| チーム | 範囲 | チャンネル |
|---|---|---|
| [Web Chat](/handbook/engineering/ai/ai-clients/duo-chat/web-chat/) | GitLab Web UI の Duo Chat | [#duo-chat-lounge](https://gitlab.enterprise.slack.com/archives/C06LWENL58F) |
| [Chat Engine](/handbook/engineering/ai/ai-clients/duo-chat/chat-engine/) | すべてのサーフェスで Duo Chat を支えるコアチャットエンジン | [#duo-chat-lounge](https://gitlab.enterprise.slack.com/archives/C06LWENL58F) |

---

## 📚 働き方

### ホストシステム

ホストシステムとは、Duo Chat が統合されるプラットフォームです。現在存在するすべてのホストシステムを以下に示します。

| ホストシステム | 説明 | リポジトリへのリンク |
| -------- | ------- | ------- |
| GitLab Web UI | Duo Chat の Web ベースのユーザーインターフェース | [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab) |
| VS Code | Duo Chat を統合する Visual Studio Code 拡張機能 | [gitlab-org/gitlab-vscode-extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension) |
| Visual Studio | Duo Chat を統合する Visual Studio 拡張機能 | [gitlab-org/editor-extensions/gitlab-visual-studio-extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension) |
| JetBrains | Duo Chat 用の JetBrains IDE プラグイン | [gitlab-org/editor-extensions/gitlab-jetbrains-plugin](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin) |

### Duo Chat 統合のオーナーシップとメンテナンス

ここでは Duo Chat 統合のオーナーシップとメンテナンスの責任を定義し、Duo Chat チームと Developer Clients チームの役割を詳しく説明します。

| システム部分 | 担当グループ |
| -------- | ------- |
| Duo-UI の共有 UI コンポーネント | group: duo chat |
| VS Code - Chat Webview | group: duo chat (support: developer clients) |
| VS Code - Chat ビジネスロジック | group: developer clients |
| Visual Studio - Chat Webview（Web ページ） | group: duo chat (support: developer clients) |
| Visual Studio - Chat ビジネスロジック | group: developer clients |
| JetBrains - Chat Webview（Web ページ） | group: duo chat (support: developer clients) |
| JetBrains - Chat ビジネスロジック | group: developer clients |

#### 責任

1. 単純なコンポーネントの更新: UI コンポーネントグループ（group: duo chat）が担当します。
2. 複雑な機能の統合: UI コンポーネントグループ（group: duo chat）が統合を主導し、ダミーデータを使用して拡張機能との通信用スタブを作成します。group: developer clients は IDE プラグインへの統合作業を支援します。
3. 破壊的変更: すべての破壊的変更を早い段階で伝える必要があります。IDE 拡張機能のワークフローへの影響を避けるため、可能な限り新機能を任意で利用できるようにすることを検討してください。

#### ツール

- [GitLab Duo ホストステータスページ](https://jannik_lehmann.gitlab.io/gitlab-ui-hosts-status-page/): 各ホストシステムが使用する GitLab UI と Duo UI のバージョンを追跡します。

### 計画プロセス

このフローチャートは、Duo Chat チームの計画プロセスを示しています。

![Duo Chat 計画フローチャート](/images/duo_chat_planning_flowchart.png)

チャートの上部は、正式なマイルストーン計画の前に行うことを示しています。こうした事前計画活動は、新しい Issue が作成されるたびに、継続的に行う必要があります。

図の下部は、マイルストーンに Issue を正式に追加し、全体の負荷を評価して成果物の提供を確約する、暦月の最初の 2 週間に行うことを示しています。

**計画の詳細化**ステップでは、ウェイトを割り当てる前に、エンジニアが以下の質問に答えられる必要があります。

- 要件は明確かつ具体的であり、提供を期待されているものを完全に理解していますか?
- 要件は包括的で、あまり明白ではない実行経路も網羅していますか?（エッジケース、パッケージング、エラー処理など、いわゆる「ハッピーパス」以外の経路）。
- 非機能要件に関する考慮事項は盛り込まれていますか? たとえば、スケーラビリティ、アクセシビリティ、コンプライアンス、セキュリティ、計測などです。
- 品質への期待や、テストおよび評価のレベルに関する要件は明確で、理解されていますか?
- Issue の妥当な見積もりを提示できる技術的な実装経路が見えていますか? たとえば、技術的な不明点がすべて解決しているか、追加の技術調査スパイクなしで対処できますか?

これらの質問のいずれかに対する答えが「いいえ」の場合、その Issue は `~workflow::refinement` に戻す必要があります。

### Issue の見積もり

タスクの見積もりには、次のシステムを使用します。

- **0 - ほとんど、またはまったく作業が不要** Issue を作成するよりも短時間で完了できるもの。
- **1 - 極小** エンジニアがほとんどの要件を理解し、比較的容易だと考えているもの。おそらくマイルストーン内で最小の項目であり、1 日で完了する可能性が最も高いものです。
- **2 - 小** 多少の検討、作業、問題解決が必要ですが、エンジニアが要件を確信しているものです。
- **3 - 平均** エンジニアが何度も経験しており、必要な作業を把握しているもの。いくつか追加の手順があるかもしれませんが、それだけです。
- **5 - 大** 複雑な作業、またはエンジニアがあまり頻繁に行わない作業です。ほとんどのエンジニアは、チームの他のメンバーによる支援を必要とします。おそらく、1 つのマイルストーン内で完了できる最大級の項目です。
- **8 - 特大** 時間と調査を要し、おそらく 1 つのマイルストーン内で完了するには複数のエンジニアが必要です。この規模では、より小さな Issue やタスクに分割する方法を検討する必要があります。
- **13+ - 大きすぎる** この Issue は複雑すぎる、大きすぎる、または定義が不十分です。このウェイトのものはすべて `~workflow::refinement` に戻して詳細化し、より管理しやすい単位に分割する必要があります。

### ステータス更新

ステークホルダーに情報を提供し、非同期コラボレーションを支援するため、**現在のマイルストーン**に含まれる成果物のステータス更新はすべて、以下の標準テンプレートを使用して、成果物の Issue に直接報告する必要があります。

#### 更新を投稿するタイミング

作業の開始、リスクの特定、スコープ変更の検討、マイルストーン中の定期的なチェックインなど、ステータスに意味のある変化があるたびに更新を投稿します。少なくとも、毎週 1 回は更新を投稿してください。

#### テンプレート

Issue にコメントとして更新を投稿するときは、次のテンプレートを使用します。

```markdown
## Async issue update

- Current status: <describe the deliverable's status>.
- Shipping this milestone: <yes/no>
- Scope reduction opportunities: <yes/no>

/health_status <on_track|at_risk>
/cc <stakeholders for this deliverable>
```

- **現在のステータス** — 現在の状況を簡潔に説明します。完了したこと、進行中のこと、提供に影響を与える可能性があるブロッカーや依存関係を含めてください。
- **このマイルストーンで提供するか** — 成果物を現在のマイルストーン内で提供できる見込みなら `yes`、遅れる場合は `no` を指定します。答えが `no` の場合は、現在のステータス欄に短い説明を追加してください。
- **スコープ縮小の機会** — マイルストーンの期限に間に合わせるために成果物の一部をスコープから外せる場合は `yes`、現在のスコープが実用最小限の提供内容である場合は `no` を指定します。`yes` の場合は、縮小できる内容を簡潔に説明してください。
- **`/health_status`** — 成果物が期待どおり進んでいる場合は `on_track`、期日どおり、または完全なスコープで提供できるか不確かな場合は `at_risk` を適用します。
- **`/cc`** — この更新を通知する必要があるチームメンバーやステークホルダー（PM、EM、デザイナー、ダウンストリームチームなど）をタグ付けします。

---

## 🔗 その他の便利なリンク

### 📝 ダッシュボード（社内限定）

- [Duo Chat xAU、リテンション、イベント数、応答時間](https://10az.online.tableau.com/#/site/gitlab/views/AiFeatures/Focusview?:iid=3)
- [スラッシュコマンドの使用状況とユーザー数](https://10az.online.tableau.com/#/site/gitlab/views/SlashUseDuo/SlashUseDashboard/3e8fd0ba-f45b-4dd0-b649-84db3636553d/8db30355-e2c0-4636-9c43-5429bb952a41?:iid=4)
- [Elastic の Duo Chat エラー率](https://log.gprd.gitlab.net/app/dashboards#/view/5f334d60-cfd7-11ee-bc6b-0b206b291ea1?_g=(refreshInterval:(pause:!t,value:60000),time:(from:now-2d,to:now)))
- [Grafana の Duo Chat エラーバジェット](https://dashboards.gitlab.net/d/stage-groups-detail-duo_chat/6c28d63a-60e8-5db3-9797-39f988a1900b?orgId=1)
- [Duo フィードバック](https://10az.online.tableau.com/#/site/gitlab/views/DuoFeedbackDashboard/DuoFeedbackDashboard?:iid=1)
- [Duo Chat の質問分類](https://10az.online.tableau.com/#/site/gitlab/views/DuoCategoriesofQuestions/DuoCategory?:iid=1)
- [Chat QA 評価](https://gitlab.com/gitlab-org/ai-powered/ai-framework/qa-evaluation)
- [AI Gateway レポート](https://10az.online.tableau.com/#/site/gitlab/views/AIGatewayReporting/Overview/61d07174-d973-4552-a582-48be74efea8c/f463620d-a659-4cfb-9700-952a5c103fa8?:iid=1)

### サポート

- [Duo Chat Runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/duo-chat/README.md?ref_type=heads)
- [Duo Chat サポートプロジェクト](https://gitlab.com/gitlab-org/ai-powered/duo-chat/support)
