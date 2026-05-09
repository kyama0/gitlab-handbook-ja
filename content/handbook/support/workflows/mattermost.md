---
title: Mattermost
description: "Mattermost サポート問題のエスカレーションのためのワークフロー。"
category: Self-managed
upstream_path: /handbook/support/workflows/mattermost/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## このワークフローは現在レビュー中であり、現状では使用できません。https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8594 を参照してください

### Mattermost チームへのエスカレーション

Mattermost はサポート問題のために GitLab に `mattermost-support` アカウントを作成し、以下のプロジェクトの `mattermost` ラベルを購読しています:

- omnibus-gitlab
- gitlab-ce
- gitlab-ee

GitLab EE 顧客が Mattermost の問題に遭遇し、既存のドキュメントを使用して問題を合理的に解決できない場合:

- 問題を再現するのに十分な情報があることを最善の努力で確認してください
- 上記のいずれかのプロジェクトで Issue を提出し、`mattermost` ラベルを適用してください。ラベルが適用されると、メール通知が
  テクニカルサポートチームに送られ、`mattermost-support` アカウントを使用して 2営業日以内に質問に回答します。
- 優先サポート（Premium/Ultimate 顧客）については、さらに Issue を `mattermost-support` アカウントに割り当ててください。この割り当てによりメール通知が送信され、
  自動的にクリティカルレベルのテクニカルサポートにエスカレーションされ、`mattermost-support` アカウントを使用して 4時間以内に質問に回答します。

この情報は Mattermost ドキュメントの[Service-Level Agreement (SLA)](https://mattermost.com/support-terms/#slas) ページから取得しました。

NOTE: **注:**
Mattermost チームは Issue への回答に個人アカウントを使用することがあります。
`jasonblais` はそのようなアカウントの 1つです。

### その他のリソース

- [Mattermost フォーラム](https://forum.mattermost.com/c/trouble-shoot/gitlab/12) - フォーラムには 1,000人以上が登録しており、新しい質問と回答が増えるたびにトラブルシューティングが容易になります。
