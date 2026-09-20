---
linkTitle: "Code of Conduct"
description: "GitLab コミュニティ行動規範に基づいて Developer Advocacy がモデレーションとエスカレーションに対応する方法。"
title: "行動規範の適用"
upstream_path: "/handbook/marketing/product-and-technical-marketing/developer-advocacy/tools-and-platforms/code-of-conduct-enforcement/"
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-18T21:20:33+02:00"
translated_at: "2026-09-20T01:59:12+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

Developer Advocacy チームは、GitLab.com での [GitLab コミュニティ行動規範](https://about.gitlab.com/community/contribute/code-of-conduct/)の適用に貢献し、誰もがコントリビュートできる、前向きで歓迎的かつインクルーシブな環境を維持します。

現在、緊急の対応や大量のモデレーションが必要な議論（一般的には Issue やマージリクエスト上）が発生した場合、チームがモデレーションに関わります。

[#developer-advocacy](https://gitlab.enterprise.slack.com/archives/CMELFQS4B)で連絡し、緊急の場合は `@ptm-dev-advocacy` をタグ付けしてください。

## モデレーションプロセス {#moderation-process}

Developer Advocacy チームメンバーは、モデレーション時の匿名性を確保するため、モデレーションを行う際は個人アカウントではなく、常に [GitLab Conduct](https://gitlab.com/gitlabconduct)の GitLab アカウントを使用してください。

> ログイン情報は、1Password の Marketing ボールト内 `GitLab Conduct User` セクションで確認できます。

- 一般的な慣行として、コメントは削除しません。
- 行動規範に違反すると判断されたコメントは、その内容が編集（伏せ字）されます。
- 編集後のテキストは、コメントをモデレートする動機を正当化する[テンプレート](#templates)のいずれかに基づきます。
- モデレーションプロセスを開始する前に、[Developer Advocacy Meta プロジェクト](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/new?issuable_template=code-of-conduct-enforcement)で機密 Issue を作成する必要があります。この Issue に、行動規範に関わる状況をすべての背景情報とスクリーンショットとともに記録します。これにより、編集で除去されたコメントの履歴を残せます。
- モデレーションプロセス中、行動規範違反とみなされた各コメントの元の内容は、機密 Issue 上のスレッドに移されます。スレッドにより、コメントに関する議論や、トピックや言語の専門家からのフィードバックが可能になります。
- 機密 Issue で開かれたスレッドには、元の公開コメントへのリンク、コメント投稿者の GitLab ユーザー名、元のコメントを含めるべきです（[テンプレート](/handbook/marketing/product-and-technical-marketing/developer-advocacy/tools-and-platforms/code-of-conduct-enforcement/#templates)を参照）。
- 違反かどうかが不明確なコメントや英語以外のコメントは、後続のモデレーションパスでレビューするためマークされます。必要に応じて、GitLab チーム内のネイティブスピーカーがメッセージの翻訳を支援できます。
- 議論が参加を妨げるほど有害になったと判断された場合、ロックされたり機密化されたりすることがあります。

## 通知 {#notification}

さらに改善として、`conduct@gitlab.com` に送られたメールは、本プロセスの次のイテレーションで Developer Relations の Zendesk インスタンスに追加される予定です。

## Abuse Operations チームとのコラボレーション {#collaboration-with-the-abuse-operations-team}

Trust & Safety チームはその役割の一環として、行動規範違反を検出し Developer Relations チームへ引き継ぐことがよくあります。一般的に特定のケースに関する議論は機密 Issue 上で行われますが、`#abuse` チャンネルで Trust and Safety チームに直接連絡することもできます。

## テンプレート {#templates}

行動規範に違反する公開コメントを置き換える際には、これらのテンプレートを使用してください。

### 機密モデレーション Issue 上のスレッド {#thread-on-confidential-moderation-issue}

このテンプレートは、元の公開コメントの内容をモデレーション用に開いたプライベート Issue に移すために使用できます。

```text
https://gitlab.com/gitlab-com/<project>/issues/<issue number>#note_239807447

@username

> (username's original comment)
```

### 明確な行動規範違反 {#clear-coc-violation}

コメントが行動規範違反である場合に、このテンプレートを使用してください。

```markdown
*This comment has been removed for violating the following rule in our [GitLab Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/), which is against Rule 3 in our [Terms of Service](https://about.gitlab.com/terms/).*

> Trolling, insulting/derogatory comments, and personal or political attacks.

*Continuing to disregard our Code of Conduct will result in a ban of this account. For more information, please reach out to [conduct@gitlab.com](mailto:conduct@gitlab.com).*
```

### 要レビュー {#needs-review}

コメントが行動規範違反かどうかを理解するためにさらなる議論が必要な場合に、このテンプレートを使用してください。他の Advocate と議論し、最終的にコメントをモデレートする必要があるか、元の場所に戻すべきかを判断できます。

```markdown
Under Review
*This comment is currently under review for potential violation of the [GitLab Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/).*

*For more information, please reach out to [conduct@gitlab.com](mailto:conduct@gitlab.com).*
```
