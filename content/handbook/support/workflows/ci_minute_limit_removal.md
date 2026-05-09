---
title: CIパイプライン分単位制限の解除
category: GitLab.com
description: "CIパイプライン分単位制限の解除を適切にリクエストする手順を提供します"
upstream_path: /handbook/support/workflows/ci_minute_limit_removal/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

## 概要

GitLabが所有するグループやGitLabの従業員のグループでは、運用上の理由やその他の理由で、CIパイプライン分単位制限を解除する必要が生じる場合があります。
リクエストが緊急である場合は、Issueリンクとともに [#support_team-chat](https://gitlab.enterprise.slack.com/archives/CCBJYEWAW) のメンバーに通知し、
かつ現在のオンコールマネージャー（Slackで `@support-manager-oncall`）にメンションすることもできます。

### 制限解除のリクエスト

解除をリクエストするエンジニアは、[internal requests](https://gitlab.com/gitlab-com/support/internal-requests/-/blob/master/.gitlab/issue_templates/GitLab.com%20Pipeline%20minutes%20limit%20removal.md) Issueボードのテンプレートを記入する必要があります。
リクエストは、Issueへのコメントで承認を示すことでマネージャーから承認される必要があります。
その後、サポートエンジニアはそのテンプレート内の [サポートエンジニア向け手順](https://gitlab.com/gitlab-com/support/internal-requests/-/blob/master/.gitlab/issue_templates/GitLab.com%20Pipeline%20minutes%20limit%20removal.md#section-for-the-support-engineer-working-on-this-request) に従う必要があります。

リクエストがCIパイプライン分単位の解除ではなくリセット（使用量を `0` に戻す）を求めるものである場合は、その旨を明記してください。
