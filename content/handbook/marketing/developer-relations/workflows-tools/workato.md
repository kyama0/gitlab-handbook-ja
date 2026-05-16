---
title: "Developer Relations のツール: Workato"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/workato/
upstream_sha: 45c75393c11589128fb6c8af61ce5be83a8031dd
translated_at: "2026-05-01T14:48:17Z"
translator: claude
stale: false
lastmod: "2026-05-01T10:44:51-04:00"
---

Developer Relations チームは、ツールやプラットフォーム間のワークフローを自動化するために [Workato](/handbook/marketing/marketing-operations/workato/) を使用しています。

## Workato メンテナー

ワークフローの更新や新規作成は、[Workato をメンテナンスしている Enterprise Technology チーム](https://internal.gitlab.com/handbook/eta/administrative/organizational-structure/enterprise-applications-integrations/workato-playbook/) にリクエストする必要があります。

## 現在のワークフロー

| 種別 | ワークフロー | 説明 | 関連ツール |
| --- | --- | --- | --- |
| Blog-to-Forum | 新しいブログ記事を GitLab フォーラムに投稿 | GitLab のブログ記事が [新しいフォーラムトピック](#gitlab-blog-forum-bot) として投稿されます | GitLab Blog RSS フィード、Discourse |
| Forum-to-Slack | GitLab Duo カテゴリーの新しいフォーラムトピック | Discourse フォーラムの RSS フィード `https://forum.gitlab.com/c/gitlab-duo.rss` を読み取り、`#gitlab-duo-forum-posts` チャンネルに投稿します。 | Discourse フォーラム、Slack |
| Blog-to-Slack | 新しいブログ記事 - GitLab | GitLab ブログの RSS フィードを読み取り、`#developer-advocacy-updates` チャンネルに投稿します。 | GitLab Blog、Slack |
| Blog-to-Slack | 新しいブログ記事 - GitHub | GitHub ブログの RSS フィードを読み取り、`#developer-advocacy-updates` および競合 Slack チャンネルに投稿します。 | GitHub Blog、Slack |
| Blog-to-Slack | 新しいブログ記事 - CNCF | CNCF ブログの RSS フィードを読み取り、`#developer-advocacy-updates` チャンネルに投稿します。 | CNCF Blog、Slack |

### gitlab-blog Forum Bot

[`gitlab-blog`](https://forum.gitlab.com/u/gitlab-blog/summary) ユーザーは、新しい [GitLab ブログ記事](https://about.gitlab.com/blog/) を [Community](https://forum.gitlab.com/c/community/39) カテゴリーの新規トピックとして自動投稿するために使用されます。このプロセスは Workato で制御されており、`https://about.gitlab.com/atom.xml` のブログ RSS フィードを読み取り、新しいエントリーごとに admin API キーと `gitlab-blog` ユーザーを使って新規トピックを投稿します。

`gitlab-blog` の認証情報および admin API キーは、1Password の Marketing vault に保管されています。管理者はログインせずに Discourse 上で直接ユーザーを編集できます。

## 沿革

Zapier は 2025 年に Workato へ移行されました。詳細は [この内部 Issue](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/integrations-work/-/work_items/829) を参照してください。
