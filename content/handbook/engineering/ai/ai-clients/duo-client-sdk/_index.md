---
title: Duo Client SDK グループ
description: "Duo Client SDK グループは、すべての GitLab エディター拡張機能とクライアントサーフェスにわたる AI 機能を支える共有 Language Server を担当します。"
upstream_path: /handbook/engineering/ai/ai-clients/duo-client-sdk/
upstream_sha: d51496d2a9ca5dfcbd3a4eef779fc95c357103f3
lastmod: "2026-08-06T16:35:18+02:00"
translated_at: "2026-08-07T06:19:17+09:00"
translator: codex
stale: false
---

## 🚀 ビジョン

Duo Client SDK グループは、すべての GitLab クライアントサーフェスにわたる AI 機能を実現する共有インフラストラクチャを構築し、保守します。堅牢で十分にテストされた SDK、すなわち Language Server を提供することで、エディターやクライアントにかかわらず、他のチームが一貫した AI 体験を提供できるようにします。

このグループは、[AI Clients ステージ](/handbook/engineering/ai/ai-clients/)の一部です。

---

## 👨‍💻 チームメンバー

{{< group-by-slugs donaldcook olenahoralkoretska  dbernardi-int elwyn-gitlab tristanread  >}}

---

## 🤝 安定したカウンターパート

以下が私たちの[安定したカウンターパート](/handbook/leadership/#stable-counterparts)です。

{{< group-by-slugs james.casey ychen16 >}}

---

## 💬 連絡先

### Slack

- **チームチャンネル：** [#f_duo-client-sdk](https://gitlab.slack.com/archives/C05B1PFHRPU)（`#f_language_server` から名称変更）
- **公開ステージチャンネル：** [#s_ai-clients-questions](https://gitlab.enterprise.slack.com/archives/C058YCHP17C)

---

## 🏠 機能別チーム

| チーム | 担当範囲 | チャンネル |
|---|---|---|
| [Duo Client SDK](/handbook/engineering/ai/ai-clients/duo-client-sdk/duo-client-sdk/) | Language Server と共有クライアント SDK | [#f_duo-client-sdk](https://gitlab.slack.com/archives/C05B1PFHRPU) |

---

## 💻 担当範囲

Duo Client SDK グループは、以下を担当します。

1. **GitLab Language Server（gitlab-lsp）**
   - [リポジトリ](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   - [バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
   - Slack チャンネル： [#f_duo-client-sdk](https://gitlab.enterprise.slack.com/archives/C05B1PFHRPU)

Language Server はすべてのエディター拡張機能で共同利用され、共有 AI 機能レイヤーを提供します。

---

## 📚 私たちの働き方

### Issue のラベル

[AI Clients のラベル付けガイダンス](/handbook/engineering/ai/ai-clients/#-how-we-label-issues-and-merge-requests)を確認してください

### グループ横断のオーナーシップと境界

Language Server はすべてのエディター拡張機能で使用されます。[オーナーシップと境界](/handbook/engineering/ai/ai-clients/ownership/)ページでは、私たちのシステムで機能を作成・保守するすべての関係者の間で、オーナーシップと境界、期待事項を明確にしています。

---

## 🔗 役立つリンク

- [Language Server バックログ](https://gitlab.com/groups/gitlab-org/-/issues/?label_name%5B%5D=Editor%20Extensions%3A%3ALanguage%20Server)
- [Editor Extensions Meta プロジェクト](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues)
