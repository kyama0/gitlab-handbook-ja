---
title: "Code Search"
description: "GitLab で情報を見つける仕組みです。あらゆるコンテンツタイプを横断する検索と、その基盤となるインデックスを扱います。"
upstream_path: /handbook/engineering/gitlab-brain/search/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:31:55+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

GitLab で情報を見つける仕組みをここで担当します。あらゆるコンテンツタイプ — コード、Issue、マージリクエスト、エピック、コメント、コミット、Wiki、ユーザー、プロジェクト — を横断する検索と、その基盤となるインデックスが対象です。

## チーム {#teams}

- [Global Code Search Experience (Retrieval and Ranking)](experience/): 検索体験、人とエージェントが呼び出す検索 API、およびランキングを担当します。
- [Search Indexes and Infrastructure](indexes/): Zoekt、Elasticsearch、およびそれらを最新に保つパイプラインを担当します。

日常的なプロセスと働き方については、[Global Search Group](/handbook/engineering/ai/search/)のページに記載しています。
