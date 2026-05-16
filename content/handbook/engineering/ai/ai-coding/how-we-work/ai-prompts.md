---
title: "生産性のための AI Coding AI プロンプト"
description: "より効率的に作業するために Duo Chat で使える共通のプロンプトを共有します"
upstream_path: /handbook/engineering/ai/ai-coding/how-we-work/ai-prompts/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-16T11:38:55-06:00"
---

Duo Agent Platform と Duo Chat により、私たちはプロセスをより効率的にできるエージェントとツールにアクセスできるようになりました。ここでは、これを容易にするために収集したプロンプトをいくつか紹介します。

## ファイル履歴の調査

### ユースケース / インパクト

ファイルに変更を加えようとするとき、ファイルの履歴をすばやく参照して、何が変更されたか、誰が作業したか、関連するファイルは何かを確認できます。これにより、そのファイルで以前に行われた作業をより迅速にキャッチアップできるはずです。

### プロンプト

`FILE_PATH` を、興味のあるファイルへのパスに置き換える必要があります。

```markdown
Analyze the complete history for [FILE_PATH] and provide a report with the following information:

**IMPORTANT: Only include information that is directly found in the actual file history, commits, merge requests, and related documentation. Do not infer, guess, or speculate about any details except for identifying subject matter experts.**

**File History Overview:**
- Total number of changes/modifications to this file
- Date range of activity (first change to most recent)
- Last modification date and time

**Key Contributors & Subject Matter Experts:**
- Top 5 contributors by number of substantive changes (exclude pure refactoring/chores)
- 5 most recent contributors with substantive changes (feature additions, bug fixes, logic changes)
- Subject matter experts by area (infer from their commit patterns and areas of focus)

**Bug History & Considerations:**
- Recent bug fixes affecting this file (last 6 months) - only those explicitly identified as bug fixes
- Common types of issues/bugs found in this file (based on actual commit messages mentioning bugs/fixes)
- Critical bugs or security issues (only if explicitly mentioned as such)

**Related Test Files:**
- Test files that are actually modified in the same commits/merge requests as this file

**Related Files & Dependencies:**
- Files that are actually changed together with this file in the same commits/merge requests
- Only include files that appear in the actual git history alongside this file

**Recent Activity (Last 5 Substantive Changes):**
For each of the last 5 non-trivial modifications:
- Exact change identifier and author
- Exact date and commit message
- Type of change (only if explicitly stated in commit message)
- Brief description based only on commit message and actual changes

If any section has no concrete information available in the history, exclude that section rather than making assumptions. Use bold text for section headers instead of markdown headers for better readability.
```

## 日次スタンドアップレポートの生成

### ユースケース / インパクト

私たちは Geekbot を使って Slack で日次スタンドアップアップデートを投稿しています。最近行ったこと、これから行う予定のこと、ブロッカーがあるかどうかを報告します。この情報の収集には時間がかかり、毎日行っていても情報が抜け落ちる可能性があります。

AI ツールに最近の活動を確認してもらうことで、レポートの初稿を素早く作成できます。

これにより、チームのエンジニア 1 人あたり週に最大 1 時間（1 日あたり 10〜15 分）節約できると考えています。

### プロンプト

このプロンプトは、過去 72 時間のあなたの活動を見ます。これは必要以上に長い可能性が高いですが、週末を挟んで複数の日をキャッチします。LLM は現在の時刻を把握するのが難しく、いつ最後にスタンドアップを更新したかを知らないため、数日分の活動を持つことで、すべての活動をキャッチする良いチャンスになります。

```markdown
## Objective

Generate my daily standup summary by reviewing my GitLab activity from the past 72 hours.

## Query Strategy

1. Identify my GitLab user ID for filtering
2. Query merge requests (last 72 hours):
   - `author_id=me` with states: merged, opened, closed
   - `assignee_id=me` or `reviewer_id=me` with state: opened
3. Query commits authored by me in the last 72 hours
4. Query issues with my recent activity (assigned, commented, created) from last 72 hours
5. Fetch recent discussions/comments I've participated in within the last 72 hours

## Output Format

### What have you done since last report?

- Merged MRs with title and number
- Resolved or closed issues with brief context
- Code reviews completed (approved/commented on others' MRs)
- Commits pushed to active branches/MRs
- Progress on open MRs (addressed feedback, updated code)

### What will you do today?

- Continue work on open MRs (specify which ones and next steps)
- MRs assigned to me for review
- Issues to investigate or start
- Follow-ups needed from yesterday's work
- Meetings or planning sessions related to development work

### Anything blocking your progress?

- MRs waiting on reviews from others (include reviewer names)
- Blocked MRs with external dependencies
- Stalled reviews (no activity \> 2 days)
- Waiting on decisions or clarifications
- Technical blockers or access issues

## Formatting Guidelines

- Use bullet points with 1-2 sentances per item
- Do not use sub-bullets
- Always include MR/issue numbers (!XXXX, #XXXX)
- Bold important status indicators (**BLOCKED**, **Failing CI**)
- Group related activities for the same feature
- Include metrics where helpful (e.g., "1 approval received")
```
