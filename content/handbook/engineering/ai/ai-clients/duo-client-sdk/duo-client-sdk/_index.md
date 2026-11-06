---
title: Duo Client SDK
description: "Duo Client SDK 機能別チームは、GitLab Language Server と共有クライアント SDK を担当し、すべての GitLab エディター拡張機能で使用される AI 機能レイヤーを提供します。"
upstream_path: /handbook/engineering/ai/ai-clients/duo-client-sdk/duo-client-sdk/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
lastmod: "2026-11-05T15:40:43+01:00"
translated_at: "2026-11-06T21:02:53.377822+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

Duo Client SDK 機能別チームは、[Duo Client SDK グループ](/handbook/engineering/ai/ai-clients/duo-client-sdk/)に属し、このグループは[AI Clients ステージ](/handbook/engineering/ai/ai-clients/)内にあります。共通の計画プロセス、ワークフローボード、役立つリンク、ダッシュボードについては、グループページを参照してください。

---

## 👨‍💻 チームメンバー {#-team-members}

{{< group-by-slugs donaldcook olenahoralkoretska  dbernardi-int elwyn-gitlab tristanread  >}}

---

## 🤝 安定したカウンターパート {#-stable-counterparts}

以下が私たちの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)です。

{{< group-by-slugs james.casey ychen16 >}}

---

## 💬 Slack {#-slack}

- **公開チームチャンネル：** [#f_language_server](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU) — 質問と連絡
- **内部チームチャンネル：** [#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C0BH51KLWNM) — チームの同期専用
- **公開ステージチャンネル：** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C)

---

## 💻 担当範囲 {#-scope}

Duo Client SDK チームは、以下を担当します。

1. **GitLab Language Server (gitlab-lsp)**
   - [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   - [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
   - Slack チャンネル： [#f_language_server](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU)（公開）、[#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C0BH51KLWNM)（内部）

Language Server は、すべてのエディター拡張機能で使用される共有 AI 機能レイヤーを提供します。これには以下が含まれます。

- Code Suggestions（補完と生成）
- エディターでの Duo Chat 統合
- 共有コンテキストと設定の管理
- IDE に依存しない AI 機能の提供

---

## 🔗 役立つリンク {#-useful-links}

- [Language Server リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
- [Language Server バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
- [Editor Extensions Meta プロジェクト](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues)
