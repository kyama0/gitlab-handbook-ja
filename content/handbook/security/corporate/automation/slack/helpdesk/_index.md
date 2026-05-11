---
title: CorpSec ヘルプデスク Slack Issue 自動化
upstream_path: /handbook/security/corporate/automation/slack/helpdesk/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

`#it_help` チャンネルでヘルプを依頼すると、この自動化により新しい GitLab Issue が自動的に作成され、Slack スレッドの使いやすさを保ちながら、サポートリクエストの長期的な記録を残します。

Slack スレッド内の各コメントは、GitLab Issue にも追加されます。

これにより、私たちは GitLab をドッグフーディングできるとともに、追加のトリアージが必要な場合や、変更管理アクティビティ・ノートPC リクエストなどの監査証跡をクロスリンクする場合に、関連する GitLab Issue へリンクできます。

## 技術的な詳細

[IT-Help Slack Issue Creator wiki](https://gitlab.com/groups/gitlab-com/it/end-user-services/-/wikis/IT-Help-Slack-Issue-Creator/How-To-Use)

このスクリプトは IT ヘルプ Slack チャンネルをスキャンし、以下のアクションを実行します。

- ユーザーがメッセージに 👀 リアクションを追加し、まだ Issue が作成されていない場合に新しい GitLab Issue を作成します。
- ユーザーがチェックマーク（✔）リアクションを追加し、Issue が作成済みでまだクローズされていない場合に GitLab Issue をクローズします。
- Issue がクローズ済みでチェックマークリアクションが削除された場合に、GitLab Issue を再オープンします。
- Slack チャンネル内の特定の絵文字リアクションに基づいて、GitLab Issue にシステムラベルを追加します。
- Slack スレッドを解析し、関連する GitLab Issue にコメントを追加します。
- GitLab Issue からのコメントを Slack スレッドに追加します。
