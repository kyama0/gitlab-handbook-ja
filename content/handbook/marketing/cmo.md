---
title: "Chief Marketing Officer"
description: "GitLab CMO ハンドブック: レビュー依頼とコミュニケーションのガイドライン"
twitter_image: '/images/tweets/handbook-marketing.png'
upstream_path: /handbook/marketing/cmo/
upstream_sha: 12455b65f7f70cf1c18488a44bbab3cff0097c8a
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-05-05T08:42:52-05:00"
---

<i class="fas fa-bullhorn fa-fw color-orange font-awesome"></i> GitLab CMO ハンドブックへようこそ
{.h1}

このページでは、GitLab の Chief Marketing Officer に関するプロセス（レビュー・承認依頼、コミュニケーションのガイドライン、情報共有のベストプラクティスなど）を詳しく説明します。

## コミュニケーションのガイドライン

私たちのコラボレーション効率を高めるため、CMO の **レビュー**、**フィードバック**、**承認** が必要な事項、**最新情報を共有** したい事項、または CMO に直接 **質問** したい事項については、[#cmo Slack チャンネル](https://gitlab.slack.com/archives/C04C38T1KQV) を活用してください。

*このチャンネルは public な Slack チャンネルですので、共有前に [SAFE](/handbook/legal/safe-framework/) かどうかを確認してください。*

## レビューと承認

効率的なレビューのため、各種レビュー依頼ワークフローの手順と詳細に従ってください。

- 新しいレビュー依頼を作成するには、[#cmo Slack チャンネル](https://gitlab.slack.com/archives/C04C38T1KQV) に参加してください
  - `@Ashley` をタグ付けしてください
  - MR、スライド／ドキュメントの URL を含めてください
  - トピックを説明する短い文と依頼内容を加えてください
  - オプション: メッセージの後続行や新しい返信スレッドにより詳しいコンテキストを追加します
- CMO にレビューを依頼する前に、CMO のダイレクトレポートがレビュー・承認していることを確認してください
  - 例: 新しいプロダクトメッセージングハウスを開発した場合、まず VP of Product Marketing がサインオフする必要があります。
  - 例: マーケティングハンドブックのフロントページにイベントの新しい戦略ビジョンを追加する場合、VP of Integrated Marketing と VP of Product Marketing がまずサインオフする必要があります。
- メッセージには [CMO の EBA](/handbook/eba/) を CC として追加し、レビューが必要な[期日](/handbook/communication/#communicating-dates-and-time)を含めてください
  - CMO の EBA は、その日／週内にレビュー依頼を完了するための通知を CMO のカレンダーに追加します。
  - 例: `Urgent review ask because of the new quarter starting in two weeks, requiring the new messaging. Please review by YYYY-MM-DD, 5 PM PT. cc @<EBA name>`

レビュー依頼の例:

```text
@Ashley This MR adds the CMO review requests and communication guidelines page into the marketing handbook. https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/115432

Context is your request to create a dedicated Slack channel, and documented guidelines for team members to share review requests and content updates, similar to the #ceo Slack channel.

Please review until 2022-12-01 10am PT. cc @Laura Vickerman

Follow-up actions: Share with CMO leadership, add an update for the next Marketing all-hands meeting.
```

### マージリクエスト

CMO をレビューと承認に割り当てる前に、以下が当てはまることを確認してください:

- MR がマージ可能な状態であること: [すべてのコメントスレッドが解決済み](https://docs.gitlab.com/ee/user/discussions/#resolve-a-thread) である、[MR が ready としてマークされ](https://docs.gitlab.com/ee/user/project/merge_requests/drafts.html#mark-merge-requests-as-ready) ドラフトでない、そして [CI/CD パイプラインが正常に実行され](https://docs.gitlab.com/ee/user/project/merge_requests/widgets.html#pipeline-information) 最新の [Review App](https://docs.gitlab.com/ee/ci/review_apps/) がデプロイされていること。
- [@akramer](https://gitlab.com/akramer) を MR の `Reviewer` として追加します。コメントで [クイックアクション](https://docs.gitlab.com/ee/user/project/quick_actions.html) として `/assign_reviewer @akramer` を使用できます（キーボードショートカットは `r`）
- オプション: 関連する変更やページに直接アクセスするための Review App URL を共有するか、より効率的なレビューのために依頼にスクリーンショット／サマリーを追加してください。

マージリクエストレビューのベストプラクティスについては、[CEO ハンドブック](/handbook/ceo/#communicating-merge-requests) を参照してください。

## 読むべきコンテンツの共有

興味深い記事やニュースがあれば、[#cmo Slack チャンネル](https://gitlab.slack.com/archives/C04C38T1KQV) で気軽に共有してください。

- Slack メッセージの冒頭に CMO を @-メンションせず、`FYI,` を付けてください。これにより通知の煩わしさを避け、非同期での閲覧が可能になります。
- 1〜3 文のサマリーを作成し、主要なトーキングポイントとテイクアウェイを含めてください。
- より良いコンテキストのためにスクリーンショットやソース URL を追加してください
- オプション: CMO へのフォローアップタスクを提案する `Suggested actions:` を追加してください。
  - 例: Twitter／LinkedIn の共有をリツイート／リシェアする、思想的リーダーシップのために自身のネットワークで記事を共有する。
