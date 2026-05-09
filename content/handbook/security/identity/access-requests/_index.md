---
title: "Identity アクセスリクエスト"
description: "アクセスリクエストプロセスは、Identity Role および Identity Group によって自動化されています。このページでは、`accessctl` でロールおよびグループポリシーを更新するプロセス、または Terraform でアプリケーションに追加のロールおよびグループを追加するプロセスについて説明します。"
upstream_path: /handbook/security/identity/access-requests/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{% alert title="Not Live Yet" color="warning" %}}
これは GitLab Identity v3 (2024年中頃) の将来状態のドキュメントプレビューです。GitLab Identity v2 のベースラインエンタイトルメントとアクセスリクエストを含む現状については、<a href="/handbook/security/security-and-technology-policies/access-management-policy/">Access Management Policy</a> を参照してください。ロードマップは <a href="https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/roadmap?state=all&sort=start_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&group_path=gitlab-com/gl-security/identity/eng&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true">エピックのガントチャート</a> を参照してください。
{{% /alert %}}

## アクセスリクエスト

ユーザーがアプリケーションへのアクセスを必要とする場合、いくつかのアプローチがあります。

1. ユーザーの属性が、Okta アプリケーションにすでに付加されているロールまたは Organization Unit の **既存の基準と一致する** 場合。リクエストなしで自動的にアクセスが付与されます。

1. **Organization Unit グループ** ポリシーの `CODEOWNER` (例: ディビジョンリーダー、部門マネージャー、Executive Business Assistant) は、追加のロールを含めるよう `accessctl` のポリシーを更新できます。Organization Unit のユーザーマニフェストは自動的に再計算され、ユーザーはアプリケーションにすでに付加されている Organization Unit Okta グループに追加されます。

1. アプリケーションの CODEOWNER は、Terraform を利用して追加の **ロールグループ** をアプリケーションに追加できます。

これにより、ディビジョンおよび部門のリーダー、またはその代理人 (例: Executive Business Administrator) が Organization Unit グループのポリシーとどのロールがメンバーであるかを中央で管理することにより、メンテナンス性が向上します。

各グループに付加される *ユーザー* は `accessctl` のポリシーと REST API 呼び出しによって管理されている (Terraform ではない) ため、Terraform 状態管理への変更は数少なく、監査性を簡素化できます。
