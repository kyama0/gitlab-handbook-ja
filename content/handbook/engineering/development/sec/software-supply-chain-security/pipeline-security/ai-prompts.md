---
title: "Pipeline Security グループの AI プロンプト"
description: "Pipeline Security グループの日常タスクを支援する GitLab Duo 向け AI プロンプト"
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/ai-prompts/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
lastmod: "2025-10-09T08:44:51-04:00"
---

## 概要

このページには、Pipeline Security チームが日常的なタスクを支援するために GitLab Duo で使用するように設計された AI プロンプトが含まれています。これらのプロンプトはチームの特定のワークフローとプロセスに合わせています。

## 振り返りサマリー

振り返りコメントを分析して主要なインサイトとアクションアイテムを抽出する必要があるときに、このプロンプトを使用してください。

### プロンプト

```text
You are an engineering manager with experience in team retrospectives and continuous improvement. Please analyze the following retrospective issue comments and provide a comprehensive summary. Focus on:

1. **Key Discussion Points**: Extract the main themes, concerns, and topics discussed by team members
2. **What Went Well**: Identify positive outcomes, successful practices, and achievements mentioned
3. **Areas for Improvement**: Highlight challenges, pain points, and areas that need attention
4. **Action Items**: Suggest specific, actionable next steps based on the discussion
5. **Team Sentiment**: Assess the overall tone and morale of the team

Format the response as:
- **Summary**: Brief overview of the retrospective
- **Discussion Themes**: Bullet points of main topics
- **Challenges**: Areas needing improvement
- **Recommended Actions**: Specific steps to address issues

Please be objective and constructive in your analysis, focusing on actionable insights that will help the team improve.

```

### 使用コンテキスト

このプロンプトは、チームメンバーがマイルストームのパフォーマンスを振り返るために月を通じてコメントを追加する[非同期月次振り返り](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#async-monthly-retrospectives)プロセス中に特に役立ちます。

## Issue リファインメント

高レベルの Issue の説明を詳細な実装計画に変換するために、このプロンプトを使用してください。

### プロンプト

```text
You are an experienced software engineer with expertise in GitLab development, CI/CD pipelines, and software supply chain security. Please analyze the following issue description and create a detailed implementation plan following our team's [Implementation Template](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#implementation-template) structure.

The issue description is: [Paste any issue details, reference MRs, rough implementation notes and/or approach - including files, lines, service names, etc if possible]

Please provide:

1. **Why are we doing this work**: Clear articulation of the problem being solved, including both the "what" and "why"

2. **Non-functional requirements**: Details around items such as:
   - Documentation requirements
   - Feature flag considerations
   - Performance implications
   - Testing requirements
   - Security considerations
   - Backward compatibility needs

3. **Implementation Plan**: Detailed technical approach including:
   - Step-by-step implementation steps
   - Dependencies and prerequisites
   - Code changes required
   - Database changes (if any)
   - Frontend/backend components involved
   - Integration points

4. **Verification Steps**: Step-by-step instructions for verifying the implementation:
   - How to test the feature
   - What to verify in staging/canary/production
   - Performance benchmarks to check
   - User acceptance criteria

5. **Risk Assessment**: Potential challenges and mitigation strategies

6. **Estimated Complexity**: Suggest a weight (1-8) based on our [Issue Weight System](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#issue-weight-system)

Please ensure the plan is detailed enough that any engineer can understand the approach and start development immediately.
```

### 使用コンテキスト

このプロンプトは[Issue リファインメント](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#issue-weighting-and-refinement)プロセスと整合しています。
