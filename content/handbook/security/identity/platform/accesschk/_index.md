---
title: "アクセスチェック (accesschk)"
description: "アクセスチェック (accesschk) は、アクセス制御 (accessctl) とは別のパイプラインで、コンプライアンス対象システムごとに、ユーザーや構成の現在の状態についてのエビデンス収集に焦点を当てたものです。このパイプラインは、API からのデータの (e)xtract（抽出/取得）、CSV と JSON の日付付きファイルへの (t)ransform（フォーマット/変換）、および監査・コンプライアンスのユーザーが分析・参照できるよう GitLab リポジトリへの load（ロード）といった ETL（extract-transform-load）プロセスを自動化します。"
upstream_path: /handbook/security/identity/platform/accesschk/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

{{% alert title="Not Live Yet" color="warning" %}}
これは GitLab Identity v3 の将来状態（2024 年中頃）に関するドキュメントのプレビューです。GitLab Identity v2 の現在の状態（ベースラインエンタイトルメントとアクセスリクエスト）については <a href="/handbook/security/security-and-technology-policies/access-management-policy/">アクセス管理ポリシー</a> をご覧ください。<a href="https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/roadmap?state=all&sort=start_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&group_path=gitlab-com/gl-security/identity/eng&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true">エピックのガントチャート</a> でロードマップを確認できます。
{{% /alert %}}

{{% alert title="Not the documentation you are looking for?" color="info" %}}
ご覧いただいているのは、監査・コンプライアンスのエビデンス収集を行う `accesschk` のエンジニアリング深掘りアーキテクチャです。`accessctl` のエンジニアリングアーキテクチャドキュメント（<a href="/handbook/security/identity/platform">ポリシー管理と自動プロビジョニング</a>）も用意しています。また、<a href="/handbook/security/identity/guide/audit">監査担当者</a>、<a href="/handbook/security/identity/guide/change-mgmt">変更管理</a>、<a href="/handbook/security/identity/guide/app">テックスタックアプリケーションのシステムオーナー</a> 向けのスタートガイドもあります。
{{% /alert %}}

{{% alert title="Work in Progress" color="danger" %}}
このページは作成中です。最新の詳細については後ほどご確認ください。
{{% /alert %}}

## CI/CD パイプライン概要

```mermaid
graph LR

subgraph accesschk GitLab Repositories
direction LR
subgraph accesschk-evidence Repo
direction LR
end
end

subgraph accesschk GitLab CI/CD Pipeline Jobs
direction LR
subgraph Okta API
CI_AUDIT_OKTA_USER_JOB["Okta Users Job<br />chk:okta-users"]
CI_AUDIT_OKTA_APP_JOB["Okta Apps Job<br />chk:okta-apps"]
CI_AUDIT_OKTA_GROUP_JOB["Okta Groups Job<br />chk:okta-groups"]
CI_AUDIT_OKTA_POLICY_JOB["Okta Policies Job<br />chk:okta-policies"]
CI_AUDIT_OKTA_ADMIN_ROLES_JOB["Okta Admin Roles Job<br />chk:okta-admin-roles"]
CI_AUDIT_OKTA_SETTING_JOB["Okta Settings Job<br />chk:okta-settings"]
end
subgraph Google Workspace Directory API
CI_AUDIT_GOOGLE_USER_JOB["Google Users Job<br />chk:google-users"]
CI_AUDIT_GOOGLE_ADMIN_ROLES_JOB["Google Admin Roles Job<br />chk:google-admin-roles"]
CI_AUDIT_GOOGLE_GROUP_JOB["Google Groups Job<br />chk:google-groups"]
CI_AUDIT_GOOGLE_CHROME_JOB["Google Chrome Policies Job<br />chk:google-chrome"]
CI_AUDIT_GOOGLE_ORG_UNIT_JOB["Google Org Units Job<br />chk:google-org-units"]
end
subgraph Google Cloud Resource Manager and IAM API
CI_AUDIT_GCP_ORGS_JOB["Google Cloud Organizations Job<br />chk:gcp-organizations"]
CI_AUDIT_GCP_FOLDERS_JOB["Google Cloud Folders Job<br />chk:gcp-folders"]
CI_AUDIT_GCP_PROJECTS_JOB["Google Cloud Projects Job<br />chk:gcp-projects"]
CI_AUDIT_GCP_SERVICE_ACCOUNTS_JOB["Google Cloud Service Accounts Job<br />chk:gcp-service-accounts"]
CI_AUDIT_GCP_BILLING_ACCOUNTS_JOB["Google Cloud Billing Accounts Job<br />chk:gcp-billing-accounts"]
end
subgraph GitLab.com SaaS API
CI_AUDIT_GITLAB_SAAS_GROUP_JOB["GitLab SaaS Groups Job<br />chk:gitlab-saas-groups"]
CI_AUDIT_GITLAB_SAAS_PROJECTS_JOB["GitLab SaaS Projects Job<br />chk:gitlab-saas-projects"]
CI_AUDIT_GITLAB_SAAS_ADMIN_JOB["GitLab SaaS Admin Roles Job<br />chk:gitlab-saas-admins"]
end
subgraph GitLab Self-Managed Instance API
CI_AUDIT_GITLAB_SELF_GROUP_JOB["GitLab Self-Managed Groups Job<br />chk:gitlab-self-groups"]
CI_AUDIT_GITLAB_SELF_PROJECTS_JOB["GitLab Self-Managed Projects Job<br />chk:gitlab-self-projects"]
CI_AUDIT_GITLAB_SELF_ADMIN_JOB["GitLab Self-Managed Admin Roles Job<br />chk:gitlab-self-admins"]
end
end
```
