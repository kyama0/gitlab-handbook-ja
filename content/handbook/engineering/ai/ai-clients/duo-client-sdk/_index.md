---
title: Duo Client SDK グループ
description: "Duo Client SDK グループは、すべての GitLab エディター拡張機能とクライアントサーフェスにわたる AI 機能を支える共有 Language Server を担当します。"
upstream_path: /handbook/engineering/ai/ai-clients/duo-client-sdk/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
lastmod: "2026-11-05T15:40:43+01:00"
translated_at: "2026-11-06T21:02:53.377822+00:00"
translator: codex
stale: false
---

## 🚀 ビジョン {#-vision}

Duo Client SDK グループは、すべての GitLab クライアントサーフェスにわたる AI 機能を実現する共有インフラストラクチャを構築し、保守します。堅牢で十分にテストされた SDK、すなわち Language Server を提供することで、エディターやクライアントにかかわらず、他のチームが一貫した AI 体験を提供できるようにします。

このグループは、[AI Clients ステージ](/handbook/engineering/ai/ai-clients/)の一部です。

---

## 👨‍💻 チームメンバー {#-team-members}

{{< group-by-slugs donaldcook olenahoralkoretska  dbernardi-int elwyn-gitlab tristanread  >}}

---

## 🤝 安定したカウンターパート {#-stable-counterparts}

以下が私たちの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)です。

{{< group-by-slugs james.casey ychen16 >}}

---

## 💬 連絡先 {#-where-to-find-us}

### Slack {#slack}

- **公開チームチャンネル：** [#f_language_server](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU) — 質問と連絡
- **内部チームチャンネル：** [#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C0BH51KLWNM) — チームの同期専用
- **公開ステージチャンネル：** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C)

---

## 🏠 機能別チーム {#-functional-teams}

| チーム | 担当範囲 | チャンネル |
|---|---|---|
| [Duo Client SDK](/handbook/engineering/ai/ai-clients/duo-client-sdk/duo-client-sdk/) | Language Server と共有クライアント SDK | [#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C0BH51KLWNM) |

---

## 💻 担当範囲 {#-scope}

Duo Client SDK グループは、以下を担当します。

1. **GitLab Language Server（gitlab-lsp）**
   - [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   - [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
   - Slack チャンネル： [#f_language_server](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU)（公開）、[#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C0BH51KLWNM)（内部）

Language Server はすべてのエディター拡張機能で共同利用され、共有 AI 機能レイヤーを提供します。

---

## 📚 私たちの働き方 {#-how-we-work}

### Issue のラベル {#issues-labels}

[AI Clients のラベル付けガイダンス](/handbook/engineering/ai/ai-clients/#-how-we-label-issues-and-merge-requests)を確認してください

### グループ横断のオーナーシップと境界 {#cross-group-ownership-and-boundaries}

Language Server はすべてのエディター拡張機能で使用されます。[オーナーシップと境界](/handbook/engineering/ai/ai-clients/ownership/)ページでは、私たちのシステムで機能を作成・保守するすべての関係者の間で、オーナーシップと境界、期待事項を明確にしています。

---

## 🔗 役立つリンク {#-useful-links}

- [Language Server バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
- [Editor Extensions Meta プロジェクト](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues)
