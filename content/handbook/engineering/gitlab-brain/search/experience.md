---
title: "Global Code Search Experience (Retrieval and Ranking)"
description: "GitLab を検索する呼び出し元が目にするものです。検索体験、人とエージェントのための検索 API、およびランキングを扱います。"
upstream_path: /handbook/engineering/gitlab-brain/search/experience/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-09T15:20:41-07:00"
translated_at: "2026-10-20T13:31:55+00:00"
translator: codex
stale: false
---

## 担当範囲 {#scope}

このチームは、GitLab を検索する呼び出し元が目にするものを担当します。あらゆるコンテンツタイプを横断する検索体験、人とエージェントが自身の権限で呼び出す検索 API、およびランキングです。ランキングをここに置いているのは意図的です。関連性は体験の成果であるため、品質に責任を持つチームがその調整手段を握ります。ランキングの変更をエンジンのコードに反映する必要がある場合は、このチームが仕様を定め、[Search Indexes and Infrastructure](indexes/)がレビューします。インデックスの内部構造は引き続き同チームが担当します。
