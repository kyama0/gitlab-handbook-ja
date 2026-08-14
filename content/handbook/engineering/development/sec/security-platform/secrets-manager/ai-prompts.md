---
title: "Secrets Manager グループ向け AI プロンプト"
description: "Secrets Manager グループの日常業務を支援する GitLab Duo 向け AI プロンプト"
upstream_path: /handbook/engineering/development/sec/security-platform/secrets-manager/ai-prompts/
upstream_sha: cd448feba02b00726e216b7b3cfed717822b37b6
lastmod: "2026-08-13T15:10:33+03:00"
translated_at: "2026-08-14T06:13:39+09:00"
translator: codex
stale: false
---

## 概要

このページには、Pipeline Security チームの一般的な日常業務を支援するために、GitLab Duo で使用することを想定した AI プロンプトが掲載されています。これらのプロンプトは、私たちのチーム固有のワークフローとプロセスに合わせて調整されています。

## レトロスペクティブの要約 {#retrospective-summary}

レトロスペクティブのコメントを分析および要約し、重要な知見とアクションアイテムを抽出する必要がある場合に、このプロンプトを使用します。

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

### 利用場面

このプロンプトは、チームメンバーがマイルストーンのパフォーマンスを振り返るコメントを 1 か月にわたって追加する、私たちの[非同期月次レトロスペクティブ](/handbook/engineering/development/sec/security-platform/secrets-manager/#async-monthly-retrospectives)プロセスで特に役立ちます。

## Issue のリファインメント {#issue-refinement}

このプロンプトを使用して、大まかな Issue の説明を詳細な実装計画に変換します。

### プロンプト

```text
You are an experienced software engineer with expertise in GitLab development, CI/CD pipelines, and software supply chain security. Please analyze the following issue description and create a detailed implementation plan following our team's [Implementation Template](/handbook/engineering/development/sec/security-platform/secrets-manager/#implementation-template) structure.

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

6. **Estimated Complexity**: Suggest a weight (1-8) based on our [Issue Weight System](/handbook/engineering/development/sec/security-platform/secrets-manager/#issue-weight-system)

Please ensure the plan is detailed enough that any engineer can understand the approach and start development immediately.
```

### 利用場面

このプロンプトは、私たちの [Issue リファインメント](/handbook/engineering/development/sec/security-platform/secrets-manager/#issue-weighting-and-refinement)プロセスに沿ったものです。
