---
title: 最初のシフト
upstream_path: /handbook/engineering/devops/oncall/your-first-shift/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

最初のオンコールローテーションに向けて準備していますか？以下が必要な手順です。

## シフト開始前

### 1. ツールをセットアップする

必要なものがすべてインストールされ、設定されていることを確認してください：

- **Incident.io** スマートフォン（iOS または Android）にインストールし、ページが届くことをテストし、電話番号が最新で動作・連絡可能であることを確認する
- **メール** 業務メールが機能していてインシデント通知を受信できることを確認する
- **Slack** 既に持っているはずですが、以下の Slack チャンネルに参加してメンションが見えるよう通知をオンにしていることを確認する：
  - [tier2-sme-rollout](https://gitlab.enterprise.slack.com/archives/C089VUTQLV6)
  - [#tier-2-devops-rotation-swaps](https://gitlab.enterprise.slack.com/archives/C09LLF79AK0)

### 2. どこを見るかを把握する

- **Grafana** — [ダッシュボードとメトリクス](/handbook/engineering/monitoring/#monitoring-infrastructure)
- **ログ** — [ログ](/handbook/engineering/monitoring/#logs)
- **Sentry** — [エラートラッキング](/handbook/engineering/monitoring/#sentry)
- [ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs)
- [プレイブック](https://internal.gitlab.com/handbook/engineering/tier2-oncall/playbooks/)

### 3. 基本を学ぶ

以下をさっと読んでおきましょう：

- [基本を理解する](/handbook/engineering/devops/oncall/understanding-the-basics)
- [オンコールプロセス & ポリシー](/handbook/engineering/infrastructure-platforms/incident-management/on-call/)
- [Tier 2 On Call Level Up Channel](https://levelup.edcast.com/pathways/ECL-123259b5-e469-485e-a0fe-4be27ee118b3)
- [Incident.io - オンコール対応者としてのスタート](https://help.incident.io/articles/3472064049-get-started-as-an-on-call-responder)
- [ウォークスルーと FAQ](https://docs.google.com/document/d/1shCf1FuskKrzrTMb60hq0YP0ftbiqvqvHytJK-GlYnA/edit?tab=t.0)

完璧である必要はありません。一夜にして専門家になるのではなく、慣れ親しんでいくことが目標です。

### 4. 誰に連絡するかを把握する

ページを受けてどうすれば良いかわからない場合は誰に連絡しますか？
  
- [オンコールのインシデントローテーションリーダー](https://app.incident.io/gitlab/on-call/schedules/01K611ZT9YX2PSA8WAMEP6A66G?startTime=2025-10-13T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline)に連絡してください

## シフト前夜

- [Incident.io](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z?startTime=2025-10-13T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline) で**スケジュールを確認し**、正確にいつ開始するかを把握する
- **スマートフォンを充電し**、通知をオンにする
- スマートフォンで **Incident.io をテストする** — アプリが動作することを確認する

## 最初のページ

ページを受けたとき、パニックにならないでください。以下の手順を実行します：

### すぐに

1. **Incident.io でアラートを確認する**（通常5分以内）
2. **アラートの詳細を読む** — どのサービス？どのメトリクス？しきい値は？
3. **Slack のインシデントチャンネルに参加する**（通常ページにリンクが含まれています）

### 次のステップ

1. **挨拶する** — 調査していることを知らせる：「対応中です」
2. **ダッシュボードを確認する** — モニタリングプラットフォームで何が起きているかを把握する
3. このアラートに対して**ランブックが存在すれば読む**
4. **わからない場合は** — 質問する。「何を試みましたか？」「顧客に影響していますか？」
5. **話し続ける** — 発見していることをインシデント Slack チャンネルに5〜10分ごとに更新する

### 行き詰まったとき

- Slack で助けを求める
- ドメインに詳しくない場合は、ドメイン固有の Slack チャンネルにページする
- 30分間沈黙したままデバッグしない — 早めにエスカレーションする

## 新規オンコールエンジニアからよくある質問

**「調査中に何かを壊してしまったら？」**

- 壊しません。調査ツール（ログの確認、ダッシュボードの確認）は何も変更しません。変更が必要な場合は、安全に従うべき手順（ランブック）がドキュメント化されています。

**「解決方法がわからなかったら？」**

- エスカレーションしてください。あなたの役割はスーパーヒーローになることではなく、対応できて関与していることです。より経験豊富な人にエスカレーションすることが、まさにあなたがすべきことです。

**「複数のページを同時に受けたら？」**

- 一度に一つずつ対応します。取り組んでいることと優先順位をチームに伝えます。追加のサポートが必要な場合に備えて DevOps ローテーションリーダーに連絡します。

**「シフトが終わるときにまだインシデントが進行中だったら？」**

- 試みたことと学んだことの明確なメモとともに、次のオンコールエンジニアに引き継いでください。引き継ぎについては後ほど詳しく説明します。

### 関連ページ

- [基本を理解する](/handbook/engineering/devops/oncall/understanding-the-basics) — オンコールが初めての方はここから始めてください
- [コミュニケーションとカルチャー](/handbook/engineering/devops/oncall/communication-and-culture) — ページを受けたときのコミュニケーション方法を知る
