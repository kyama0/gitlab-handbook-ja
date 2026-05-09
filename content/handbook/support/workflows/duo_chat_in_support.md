---
title: サポートにおける Duo Chat のケースシナリオ
description: "このドキュメントページでは、サポート業務を強化・効率化するために人工知能 (AI) を活用する一般的なユースケースの概要を提供します。サポートチームとマネージャーが、カスタマーサービス、テクニカルサポート、ユーザー支援におけるさまざまな課題を解決するために AI をどのように効果的に適用できるかを理解する助けとなることを目的としています。"
category: AI
upstream_path: /handbook/support/workflows/duo_chat_in_support/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T21:00:00Z"
translator: claude
stale: false
---

## 概要

サポートチームで Duo Chat をどのように活用できるかを示すユースケースシナリオの例です。

### 言い換え

複雑さや言語の壁のためにチケットの理解が難しい場合、Duo Chat にリクエストを言い換えるよう促すことができます。

#### プロンプト

Please rephrase the following: "Detached HEAD state post-rebase causing phantom commits to resurface during fetch, leading to divergent branch tips despite clean working tree. Bisect fails to isolate culprit."

#### Duo Chat の出力

After performing a rebase operation, the repository entered a detached HEAD state. During a subsequent fetch operation, some previously discarded or "phantom" commits unexpectedly resurfaced, causing the branch tips to diverge from the expected state, even though the local working tree was clean and up-to-date. Attempts to use the Git bisect tool to identify the commit that introduced the issue were unsuccessful.

### Issue の検索

GitLab の Issue を検索する際、特にバグを探す際は、非常に正確なフレーズを思いつくのが難しいことがあります。

#### プロンプト

This is a bug report that was sent to us.  Please provide a search phrase that I can use to see if it already exists in our issues.

#### Duo Chat の出力

"Service account token expiration after rotation"

This search phrase captures the key elements of the bug:

1. It's about service accounts
2. It involves token expiration
3. The issue occurs after token rotation

You might also try variations like:

- "Service account non-expiring token rotation"
- "Forced expiration on service account token rotation"
- "Service account token loses non-expiring status after rotation"
