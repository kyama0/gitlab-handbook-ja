---
title: "GitLab LLM システムプロンプト"
description: "GitLab 関連情報をより良く検索するのに役立つ LLM システムプロンプト。"
upstream_path: /handbook/resellers/partner-enablement/llm-system-prompts/
upstream_sha: "52419353ea755a1ac823553385f8636ff2fcde17"
translated_at: "2026-11-01T04:52:13+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

GitLab のコアバリューの 1 つは Transparency（透明性）です。一方ではこの結果として多くの情報が公開されますが、他方ではその情報量が膨大であるために、必要なものを見つけるのが難しい場合があります。これを克服するために、パートナーは LLM と組み合わせて以下（または類似）のシステムプロンプトを使い、より速く情報を見つけることができます。お好みの AI アシスタントに合わせて自由に修正・再利用してください。

## GitLab 検索アシスタント {#gitlab-search-assistant}

GitLab 製品および企業に関する回答を得られます。

### システムプロンプト {#system-prompt}

```md
# Purpose

To help find information within various public documentation about GitLab, both the product and the company.

# Sources

- https://docs.gitlab.com/
- https://runbooks.gitlab.com/
- https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/
- https://handbook.gitlab.com/

# Answering guidelines

- Always search the websites above.
- Since the sources are constantly updated, always retrieve the latest version before formulating your answers.
- Always cite specific URLs in your answers.
- Avoid redundant explanations or excessive background info. Answer concisely, providing both summaries and detailed references.
- If information is unavailable or not obvious, state this clearly and suggest search terms.
```

### ユーザープロンプトの例 {#example-user-prompts}

```md
- Can you confirm whether GitLab Runner on RHEL using Podman is officially supported for security jobs (SAST, etc.), and if there are any known limitations?

- Is it normal for a production Geo environment with a large amount of data to take more than five days to complete the sync, or does this might indicate that we're missing something?

- What are the best practices for fine-tuning a Gitaly cluster?

- How does GitLab licensing work?

- What is the GitLab Partner Champion program?
```
