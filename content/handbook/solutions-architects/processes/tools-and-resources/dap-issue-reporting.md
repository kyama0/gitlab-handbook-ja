---
title: DAP Rapid — フィールドからの問題報告
description: Solutions Architect が顧客の利用を妨げる DAP の問題を Engineering へ報告する方法
upstream_path: /handbook/solutions-architects/processes/tools-and-resources/dap-issue-reporting/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-16T23:38:14-04:00"
translated_at: "2026-09-20T03:19:50+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

**DAP Rapid** は、明確な SLO、トラッキング、エスカレーションパスを 14 の Engineering グループ間で備え、Sev1 および Sev2 の顧客の利用を妨げる問題に対処する Duo Agent Platform プログラムです。

Solutions Architect として、以下が可能です。

- **GitLab Issue で直接バグを起票** — Zendesk チケット不要
- **重大度ラベルの提案** (最終判断は Engineering が行います)
- **重大な問題のエスカレーション** — RFH または incident.io 経由

DAP トライアル、POV、または顧客デプロイ中にバグや顧客の利用を妨げる問題を発見した際は、いつでもこのプロセスを利用してください。

## いつ報告するか {#when-to-report}

顧客の Duo Agent Platform 利用をブロックまたは大きく阻害する問題を報告してください。

| 重大度 | 説明 | 例 |
|----------|-------------|----------|
| **Sev1 — Critical** | システム停止、主要機能の破損、顧客のブロック | エージェントが起動しない、全ユーザーでツール実行が失敗、データ消失 |
| **Sev2 — Major** | 重要な機能が阻害されているが回避策あり | 特定のツールが断続的に失敗、性能劣化、既知の回避策がある誤った出力 |

Sev3／Sev4 の問題（軽微なバグ、見た目の問題）は、以下のラベルを付けて通常のバグ Issue として起票してください — DAP Rapid の SLO は適用されません。

## 報告の方法 {#how-to-report}

重大度と緊急度に応じて、適切なチャネルを選択してください。

```text
Customer-blocking issue discovered
    │
    ├─ Sev1 (system down, no workaround)
    │   └─ Raise incident through incident.io OR RFH
    │       → Escalation required if not resolved in 12h
    │
    ├─ Sev2 (impaired, workaround exists)
    │   └─ File bug in gitlab-org/gitlab OR raise RFH
    │       → Escalation if not resolved in 24h
    │
    └─ Sev3/4 (minor)
        └─ File bug in gitlab-org/gitlab with labels
```

### チャネル 1： 直接バグを起票（最も一般的） {#channel-1-direct-bug-filing-most-common}

[`gitlab-org/gitlab`](https://gitlab.com/gitlab-org/gitlab/-/issues/new)で Issue を起票し、以下に記載する必須ラベルを付けてください。これがフィールドで発見されたバグに対する最速の経路です。

### チャネル 2： Request for Help (RFH) {#channel-2-request-for-help-rfh}

サポートに関連する問題の調査を Engineering に依頼したい場合や、根本原因が不明な場合は、[GitLab Request for Help](https://gitlab.com/gitlab-com/request-for-help/)を使用してください。RFH README に従い、正しいクロージャーラベルを適用します。

### チャネル 3： incident.io（重大な本番インシデント） {#channel-3-incidentio-critical-production-incidents}

GitLab.com 上の Sev1 本番インシデントについては、[incident.io を使ってインシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)し、「Affects Duo Agentic Platform (DAP)」フィールドが YES に設定されていることを確認してください。

## 必須ラベル {#required-labels}

`gitlab-org/gitlab` でバグ Issue を起票する際は、以下を付与します。

| ラベル | 用途 |
|-------|---------|
| `~"Duo Agent Platform GA Fast Follow"` | DAP のトラッキングに Issue をルーティング |
| `~"type::bug"` | バグの識別子 |
| `~"severity::1"` から `~"severity::4"` まで | 重大度の提案（最終判断は Engineering） |
| `~"group::[team name]"` | 担当する AI Engineering グループ |

## デプロイメントタイプ別の解決 SLO {#resolution-slos-by-deployment-type}

これは社内目標 (SLO) であり、顧客向け SLA ではありません。主な目標は、**すべての Sev1 および Sev2 の問題で 24 時間以内に顧客のブロックを解除すること**です。

| デプロイメント | 重大度 | ブロック解除目標時間 | 修正／パッチデプロイ |
|------------|----------|---------------------|----------------------|
| **GitLab.com (SaaS)** | Sev1 | 30 分 – 12 時間 | 即時（営業日の MR のマージから約 6 時間以内にデプロイ） |
| | Sev2 | 4 – 24 時間 | 目標： 3 営業日 |
| **Self-Managed** | Sev1 | 30 分 – 12 時間 | 次回[パッチリリース](/handbook/engineering/releases/patch-releases/#patch-release-overview)（約 2 週間、第 2／第 4 水曜日） |
| | Sev2 | 4 – 24 時間 | 次回パッチリリース |
| **Dedicated** | Sev1 | 30 分 – 12 時間 | [バックポート](https://docs.gitlab.com/policy/maintenance/#backporting-to-older-releases)を伴う次回パッチリリース（2〜4 週間） |
| | Sev2 | 4 – 24 時間 | バックポートを伴う次回パッチリリース |

**注意点：**

- 設定やセットアップに関する問題は、コード変更なしで目標時間内にブロックを解除する必要があります。
- デプロイが必要なコード修正は上記タイムラインに従います。
- Self-Managed および Dedicated については、Sev1 は 12 時間以内、Sev2 は 24 時間以内に修正タイムラインを顧客に伝達してください。
- Dedicated 顧客は 1 バージョン遅れで運用しており、バックポートは直近 2 マイナーバージョンに限定されます。

## トラッキングダッシュボード {#tracking-dashboards}

| トラッカー | リンク | 担当 |
|---------|------|----------|
| Zendesk の DAP 問題 | [Zendesk ダッシュボード](https://gitlab.zendesk.com/explore/studio#/dashboards/65C06156A78CBD32904C3E92205D82AC4A6B49D51D5D149FF5D324C97ADAD8F6) | Support |
| incident.io の DAP 問題 | [incident.io ダッシュボード](https://app.incident.io/gitlab/incidents) | Engineering & Support |
| バグトラッカー (GitLab Issue) | [DAP Bug Tracker wiki](https://gitlab.com/groups/gitlab-org/ai-powered/-/wikis/home/Program-Duo-Agent-Platform/Program-Bug-Tracker) | AI EM & PM |
| RFH トラッカー | [DAP RFH Tracker wiki](https://gitlab.com/groups/gitlab-org/ai-powered/-/wikis/home/Program-Duo-Agent-Platform/Program-Bug-Tracker/DAP-RFH-Tracker) | Support Engineering |
| 信頼性 (Grafana) | [DWS ログベースダッシュボード](https://dashboards.gitlab.net/d/3d9c7954-2669-4782-9206-b714c8a589fa/dws-log-based-dashboard) | Engineering |
| レイテンシ (Snowflake) | [言語サーバーのメトリクス](https://app.snowflake.com/ys68254/gitlab/#/language-server-metrics-dd7LWVgnL) | Engineering |
| ツール呼び出しエラー率 | [Duo Workflow Service ダッシュボード](https://dashboards.gitlab.net/d/duo-workflow-svc-main/duo-workflow-svc3a-overview) | Engineering |

## Slack チャネル {#slack-channel}

DAP に関するすべての問い合わせ — 質問、問題のトリアージ、ステータスアップデート — に向けた集約チャネルとして [`#f_duo-agent-platform`](https://gitlab.slack.com/archives/f_duo-agent-platform)を使ってください。

問題の報告に `#building-on-duo-agent-platform`、`#usage-billing-help`、`#dap-customer-feedback`、または個々の AI グループチャネルは**使わないでください**。`#f_duo-agent-platform` へリダイレクトしてください。

## 関連リソース {#related-resources}

- [Zendesk Internal Request Form](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783651259548) — Customer Support Internal Requests
- [RFH プロセス](https://gitlab.com/gitlab-com/request-for-help/) — Engineering への Request for Help
- [AI POV のスコープと受け入れ](/handbook/solutions-architects/playbooks/pov/ai/) — DAP 顧客トライアルの実施
- [GitLab サポート SLA](https://support.gitlab.com/hc/en-us/articles/11626483177756-GitLab-Support) — 公式の顧客向け SLA
- [インシデントエスカレーションプロセス](/handbook/engineering/infrastructure-platforms/incident-management/tier2-escalations/) — PagerDuty／incident.io エスカレーション
