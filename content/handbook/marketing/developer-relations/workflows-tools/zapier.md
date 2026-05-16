---
title: "Developer Relations ツール: Zapier"
upstream_path: /handbook/marketing/developer-relations/workflows-tools/zapier/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-07T23:50:04+00:00"
---

### Zapier サブスクリプション

私たちは、GitLab に関するメンションや swag ストアの注文などを転送するタスクを自動化するために Zapier を使用しています。

Zapier のサブスクリプションは [Team プラン](https://zapier.com/app/billing/plans) で運用されており、GitLab チームと共有されています。

### Zapier アクセス

- URL: [https://zapier.com](https://zapier.com)
- アカウント: 1Password の `Zapier` ボールトで共有 Zapier アカウントを検索してください。当該ボールトにアクセスできない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を提出してください。

ログイン後は、[Developer Relations](https://zapier.com/app/zaps/folder/275996) フォルダーで Zap のアクセス、編集、作成が可能です。


{{% alert %}}
<i class="fas fa-hand-point-right" aria-hidden="true" style="color: rgb(138, 109, 59)
;"></i> Zap を編集または新規作成した後は、Zap 一覧でタスク名の隣にあるトグルスイッチで Zap をオンに切り替えるのを忘れないでください。
{{% /alert %}}


### 現行の Zap

[Developer Relations フォルダー](https://zapier.com/app/zaps/folder/275996) で有効化されている Zap の一覧です。

| Zap | 説明 | 関連ツール |
| --- | --- | --- |
| [新規ブログを GitLab フォーラムに投稿](https://zapier.com/app/editor/148450001) | GitLab ブログ記事を [新しいフォーラムトピック](/handbook/marketing/developer-relations/workflows-tools/#gitlab-blog-forum-bot) として投稿 | about.gitlab.com/blog, Discourse |

#### Developer Advocacy 用の Zap

これらの Zap は、Zapier 内の Developer Relations のサブフォルダーである [Developer Advocacy フォルダー](https://zapier.com/app/zaps/folder/1561876) に整理されています。

| Zap | 説明 | 関連ツール |
| --- | --- | --- |
| [新規ブログ記事 - GitLab](https://zapier.com/editor/183958722) | GitLab ブログの RSS フィードを読み込み、`#developer-advocacy-updates` チャンネルへ投稿します。 | GitLab Blog, Slack |
| [新規ブログ記事 - GitHub](https://zapier.com/editor/216104703) | GitHub ブログの RSS フィードを読み込み、`#developer-advocacy-updates` チャンネルへ投稿します。追加の [zap](https://zapier.com/editor/219093798) は競合分析用 Slack チャンネルへ投稿します。 | GitHub Blog, Slack |
| [新規ブログ記事 - CNCF](https://zapier.com/editor/216110068) | CNCF ブログの RSS フィードを読み込み、`#developer-advocacy-updates` チャンネルへ投稿します。 | CNCF Blog, Slack |
| [新規ステータスアップデート - Discourse](https://zapier.com/editor/216106524) | Discourse ステータスの RSS フィードを読み込み、`#developer-advocacy-updates` チャンネルへ投稿します。 | Discourse status page, Slack |

##### Discourse フォーラム用の Zap

これらの Zap は、新製品ローンチをサポートするために自動モニタリングを行います。

| Zap | 説明 | 関連ツール |
| --- | --- | --- |
| [`catalog` または `component` を含む新規フォーラムトピック](https://zapier.com/editor/219212925/) | Discourse フォーラム RSS フィード `https://forum.gitlab.com/latest.rss` を読み込み、`#f_ci_catalog` チャンネルへ投稿します。 | Discourse forum, Slack |
| [GitLab Duo カテゴリの新規フォーラムトピック](https://zapier.com/editor/219218779) | Discourse フォーラム RSS フィード `https://forum.gitlab.com/c/gitlab-duo.rss` を読み込み、`#gitlab-duo-forum-posts` チャンネルへ投稿します。 | Discourse forum, Slack |

##### Hacker News 用の Zap

これらの Zap は、Zapier 内の Developer Relations のサブフォルダーである [Developer Advocacy フォルダー](https://zapier.com/app/zaps/folder/1561876) に整理されています。

| Zap | 説明 | 関連ツール |
| --- | --- | --- |
| [Hackernews: フロントページ言及の Slack 通知: GitLab](https://zapier.com/app/editor/58944326) | Hackernews: `GitLab` フロントページのストーリーを `#dev-advocacy-team` Slack チャンネルへ。[Hacker News 対応ワークフロー URL](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#response-workflow) を追加します。 | HackerNews, Slack |
| [Hackernews: フロントページ言及の Slack 通知: Open Core](https://zapier.com/app/editor/159764533) | Hackernews: `Open Core` フロントページのストーリーを `#dev-advocacy-team` Slack チャンネルへ。[Hacker News 対応ワークフロー URL](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#response-workflow) を追加します。 | HackerNews, Slack |
| [Hackernews: 言及の Slack 通知: GitLab](https://zapier.com/app/editor/52810208) | Hackernews: `GitLab` の言及を `#hn-mentions` Slack チャンネルへ |  HackerNews, Slack |
| [Hackernews: 言及の Slack 通知: DevOps Platform](https://zapier.com/app/editor/131452972) | Hackernews: `DevOps Platform` の言及を `#hn-mentions` Slack チャンネルへ |  HackerNews, Slack |

これらの Zap は [Hacker News 用の Algolia 検索 API](https://hn.algolia.com/api) をポーリングし、特定の URL パラメーターを追加することで以下を実現します:

- 投稿内の文字列を検索する: `?query="open%20core"`
- トピックが Hacker News のフロントページに掲載された場合にタグでフィルタリング: `&tags=front_page`

空白を含む文字列を検索するには、クエリパラメーターを[クォートで囲む必要があります](https://www.algolia.com/doc/api-reference/api-parameters/filters/#usage-notes)。例: `https://hn.algolia.com/api/v1/search?&query=%22open%20core%22&tags=front_page`。

その他の API URL の例:

- フロントページ: https://hn.algolia.com/api/v1/search?&query=gitlab&tags=front_page
- 言及: https://hn.algolia.com/api/v1/search_by_date?query="devops+platform"

#### gitlab-blog フォーラムボット

[`gitlab-blog`](https://forum.gitlab.com/u/gitlab-blog/summary) ユーザーは、新しい [GitLab ブログ](https://about.gitlab.com/blog/) を [Community](https://forum.gitlab.com/c/community/39) カテゴリに新しいトピックとして自動投稿するために使用されます。このプロセスは [Zapier](https://zapier.com/app/editor/148450001) によって制御されます。Zapier は `https://about.gitlab.com/atom.xml` のブログ RSS フィードを読み込み、新しいエントリごとに admin API キーと `gitlab-blog` ユーザーを使用して新しいトピックを投稿します。

`gitlab-blog` の認証情報と admin API キーは、1Password の Marketing ボールトに保存されています。管理者はログインなしで Discourse 内のユーザーを直接編集できます。

## トラブルシューティング

### Slack メッセージに Hacker News のデータが含まれていない

Zap を開いて `Send Channel Message in Slack` アクションを確認します。`Message Text` セクションにエラー付きのプレースホルダー変数が含まれている場合、データソースを確認してください。Zapier でのデータ取得が前のステップで壊れている可能性があります。たとえば `Retrieve Polls in Webhooks by Zapier` などです。

例: [Open Core Hacker News フロントページの Zap](https://zapier.com/editor/159764533/published/159764535/setup) ではデータフィールドが提供されておらず、URL `https://hn.algolia.com/api/v1/search?&query="open+core"&tags=front_page` のフィールドを更新しても、続行できる結果レコードは出てきません。

修正方法: 検索を一時的に [Hacker News フロントページ](https://news.ycombinator.com/) に現在掲載されている値に変更し、Zapier でフィールドを更新します。Slack メッセージの変数プレースホルダーを修正し、Zap を公開します。直後に再度 Zap を編集し、検索クエリを元の値（`open+core`）に戻します。
