---
title: CorpSec システムと Tech Stack
description: Corporate Security 部門は、当社が管理する全社規模のシステムについて、チームメンバーと一時的なサービスプロバイダー (契約社員、ベンダーなど) 向けに構成管理エンジニアリングとテックサポートヘルプデスクサービスを提供しています。システムディレクトリには、当社のすべてのシステムの一覧と、管理ランブック、エンドユーザードキュメント、Issue テンプレート、メンション可能なグループ、GitLab のエピック・Issue・マージリクエストで使用されるタグへのクイックリファレンスリンクが記載されています。
upstream_path: /handbook/security/corporate/systems/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
translated_at: "2026-11-01T17:30:27+00:00"
translator: claude
stale: false
lastmod: "2026-10-30T14:17:26-04:00"
---

## 部門横断的なシステムオーナー {#cross-department-system-owners}

GitLab がオーガニックに成長するにつれて、いくつかの部門と機能グループは、組織全体のコンプライアンス、インフラストラクチャ、セキュリティのベストプラクティスのフレームワーク内で、その部門または機能グループに固有の Tech Stack アプリケーションの日常管理を担当する独自のシステム管理者 (「システムオーナー」) を擁するようになりました。GitLab の各 [Tech Stack アプリケーション](/handbook/business-technology/tech-stack-applications/)には、(その部門または機能グループで) そのアプリケーションの導入と、これを利用するチームメンバーへの日常運用サポートを担当する DRI であるシステムオーナーがいます。これには、従来の IT 部門がボトルネックになることを防ぎ、各部門が GitLab の適切なグループのための効率性サブバリューの一環としてセルフサービスできるという利点もあります。

- [Customer Success Operations](/handbook/sales/field-operations/customer-success-operations/)
- [(Business Intelligence) Data Team](/handbook/enterprise-data/)
- [Engineering Infrastructure (Reliability SREs)](/handbook/engineering/infrastructure/)
- [Engineering Productivity](/handbook/engineering/infrastructure-platforms/developer-experience/)
- [Enterprise Applications](/handbook/business-technology/enterprise-applications/)
- [Marketing Operations](/handbook/marketing/marketing-operations/)
- [People Operations](/handbook/people-group/people-operations/)
- [People Group Engineering](/handbook/people-group/)
- [Sales Systems](/handbook/sales/field-operations/sales-systems/)

## CorpSec システムディレクトリ {#corpsec-systems-directory}

Corporate Security 部門は、当社が管理する全社規模のシステムについて、チームメンバーと一時的なサービスプロバイダー (契約社員、ベンダーなど) 向けに構成管理エンジニアリングとテックサポート [ヘルプデスクサービス](/handbook/eta/corporate-it/end-user-services)を提供しています。

<table>
<thead>
<tr>
<th>システム (ハンドブックページ)</th>
<th>ユーザーガイドと Issue</th>
<th>システムオーナー</th>
</tr>
</thead>
<tbody>
<!-- 1Password -->
<tr>
<td><a href="/handbook/security/corporate/systems/1password">1Password</a></td>
<td>
<i class="fas fa-key mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">保管庫を作成</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">保管庫にユーザーを追加</a><br>
<i class="fas fa-user-minus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">保管庫からユーザーを削除</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=1password_default">エンジニアリング Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/group">グループ</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/passkey">パスキーガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/setup">セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/vault">保管庫</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-1password">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-1password">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-1password">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/1password/">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-1password</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/1password">@gitlab-com/corpsys/1password</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-1password</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER PASS</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN PASS</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Access Control -->
<tr>
<td><a href="/handbook/security/corporate/systems/accessctl">Access Control (accessctl)</a><br><code>access.gitlab.systems</code><br><small>FY25-Q3 に利用可能</small></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=accessctl_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-accessctl">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-accessctl">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-accessctl">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/accessctl">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-accessctl</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/accessctl">@gitlab-com/corpsys/accessctl</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-accessctl</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (billing) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/aws/billing">Amazon Web Services（請求）</a><br>
<small>すべての組織の Cost Explorer と請求書</small>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_billing_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_billing_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-billing">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-billing">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-billing">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/billing">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-billing</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-billing">@gitlab-com/corpsys/aws-billing</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-billing</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Amazon Web Services Organization (services) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/aws/services">Amazon Web Services (services)</a><br>
<code>x6953</code> 組織
<small>
<ul>
<li><code>x0347 legacy-top</code></li>
<li><code>x4183 legacy-prod</code></li>
<li><code>x8738 sirt</code></li>
<li>すべてのアカウントはハンドブックページを参照</li>
</ul>
</small>
</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/services/accounts">サービス／ワークロード用のアカウントを作成</a><br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/corporate/systems/aws/services/users">ユーザーとロールの管理</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_services_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_services_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-services">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-services">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-services">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/services">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-services</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-services">@gitlab-com/corpsys/aws-services</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-services</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (sandbox) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/sandbox">Amazon Web Services (sandbox)</a><br><code>x3027</code> 組織</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/sandbox/accounts">自分の AWS アカウントを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_sandbox_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-sandbox">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-sandbox">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-sandbox">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/sandbox">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-sandbox</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-sandbox">@gitlab-com/corpsys/aws-sandbox</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-sandbox</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (systems) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/systems">Amazon Web Services (systems)</a><br><code>x6658</code> 組織<br><small>CorpSec、InfraSec、SIRT 用の安全なアカウント</small></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_systems_sysadmin">システム管理者アクセスリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_systems_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-systems">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-systems">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-systems">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/systems">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-systems</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-systems">@gitlab-com/corpsys/aws-systems</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-systems</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-dev) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-dev">Amazon Web Services (dedicated-dev)</a><br><code>x3675</code> 組織</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/dedicated-dev/accounts">自分の AWS アカウントを作成</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_dev_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_dev_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-dev">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-dev">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-dev">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/aws/gcp-dedicated-dev">@gitlab-com/gl-security/corp/aws-dedicated-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-prd) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-prd">Amazon Web Services (dedicated-prd)</a><br><code>x0475</code> 組織</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_prd_default">システム管理者アクセスリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_prd_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-prd">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-prd">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-prd">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-dedicated-prd">@gitlab-com/corpsys/aws-dedicated-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-pubsec) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-pubsec">Amazon Web Services (dedicated-pubsec)</a><br><code>x9885</code> 組織</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_pubsec_default">システム管理者アクセスリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_pubsec_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-pubsec">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-pubsec">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-pubsec">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-pubsec">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-pubsec</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-dedicated-pubsec">@gitlab-com/corpsys/aws-dedicated-pubsec</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-pubsec</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-us-pubsec</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">PUBSEC ADMIN SSO</span>
</td>
</tr>
<!-- Azure -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/azure">Azure (Sandbox)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=azure_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=azure_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-azure">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-azure">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-azure">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/azure">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-azure</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/azure">@gitlab-com/corpsys/azure</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-azure</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Domain Names -->
<tr>
<td>
ドメイン名<br><small><a href="/handbook/security/product-security/infrastructure-security/">Infrastructure Security</a>が管理</small></td>
<td>
<i class="fas fa-cart-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues/new">購入リクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues/new">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues">Issue</a>
<br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/product-security/infrastructure-security/">Infrastructure Security</a><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records">infrastructure-security/dns-records</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@infrasec-team</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-infrasec</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- DNS Records -->
<tr>
<td>
DNS レコード<br><small><a href="/handbook/security/product-security/infrastructure-security/">Infrastructure Security</a>が管理</small></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues/new">更新リクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues/new">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records/-/issues">Issue</a>
<br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/product-security/infrastructure-security/">Infrastructure Security</a><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/dns-records">infrastructure-security/dns-records</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@infrasec-team</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-infrasec</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER MR</span>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN MR</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- GitLab (com) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/com">GitLab (com)<br><code>gitlab.com</code></a></td>
<td>
<i class="fas fa-folder-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_create">グループを作成</a><br>
<i class="fas fa-folder-open mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_update">グループを更新</a><br>
<i class="fas fa-folder-minus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_deprecate">グループを廃止</a><br>
<i class="fas fa-code-branch mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_create">プロジェクトを作成</a><br>
<i class="fas fa-code-compare mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_update">プロジェクトを更新</a><br>
<i class="fas fa-code-merge mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_deprecate">プロジェクトを廃止</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_user_grant">グループ／プロジェクトにユーザーを追加</a><br>
<i class="fas fa-users-slash mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_user_revoke">グループ／プロジェクトからユーザーを削除</a><br>
<i class="fas fa-user-secret mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_svc">サービスアカウントリクエスト</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_work">業務用アカウントのライセンス</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_personal">個人アカウントのライセンス</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_group">デモ／社内グループ用ライセンス</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_com_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-com">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-com">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-com">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/com">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-com</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-com">@gitlab-com/corpsys/gitlab-com</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-com</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (ops) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/ops">GitLab (ops)<br><code>ops.gitlab.net</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_ops_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_ops_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-ops">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-ops">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-ops">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/ops">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-ops</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-ops">@gitlab-com/corpsys/gitlab-ops</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-ops</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#infrastructure_lounge</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/dev">GitLab (dev)<br><code>dev.gitlab.org</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_dev_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_dev_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-dev">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-dev">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/dev">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-dev">@gitlab-com/corpsys/gitlab-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (stg) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/stg">GitLab (stg)<br><code>staging.gitlab.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/work_items/new?description_template=GitLabStaging_Request">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_stg_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-stg">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-stg">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-stg">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/stg">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-stg</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-stg">@gitlab-com/corpsys/gitlab-stg</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-stg</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (cfg) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/cfg">GitLab (cfg)<br><code>cfg.gitlab.systems</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_cfg_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_cfg_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-cfg">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-cfg">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-cfg">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/cfg">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-cfg</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-cfg">@gitlab-com/corpsys/gitlab-cfg</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-cfg</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (billing) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/billing">Google Cloud Platform（請求）</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_billing_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_billing_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-billing">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-billing">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-billing">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/billing">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-billing</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-billing">@gitlab-com/corpsys/gcp-billing</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-billing</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#cloud-finops</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (com) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/com">Google Cloud Platform (com)<br><code>gitlab.com</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/com/projects">サービス／ワークロード用のプロジェクトを作成</a><br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/com/users">ユーザーとロールの管理</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_com_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_com_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-com">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-com">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-com">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/com">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-com</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-com">@gitlab-com/corpsys/gcp-com</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-com</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#infrastructure_lounge</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (sandbox) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/sandbox">Google Cloud Platform (sandbox)<br><code>gitlabsandbox.cloud</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/sandbox/projects">自分の GCP プロジェクトを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_sandbox_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-sandbox">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-sandbox">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-sandbox">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/sandbox">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-sandbox</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-sandbox">@gitlab-com/corpsys/gcp-sandbox</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-sandbox</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (systems) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/systems">Google Cloud Platform (systems)<br><code>gitlab.systems</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_systems_sysadmin">システム管理者アクセスリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_systems_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-systems">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-systems">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-systems">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/systems">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-systems</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-systems">@gitlab-com/corpsys/gcp-systems</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-systems</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (cells-dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/cells-dev">Google Cloud Platform (cells-dev)<br><code>gitlab-cells.dev</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_cells_dev_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_cells_dev_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-cells-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-cells-dev">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-cells-dev">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/cells-dev">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-cells-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-cells-dev">@gitlab-com/corpsys/gcp-cells-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-cells-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (cells-prd) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/cells-prd">Google Cloud Platform (cells-prd)<br><code>gitlab-cells.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_cells_prd_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_cells_prd_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-cells-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-cells-prd">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-cells-prd">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/cells-prd">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-cells-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-cells-prd">@gitlab-com/corpsys/gcp-cells-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-cells-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (dedicated-dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/dedicated-dev">Google Cloud Platform (dedicated-dev)<br><code>gitlab-private.org</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/dedicated-dev/projects">自分の GCP プロジェクトを作成</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_dedicated_dev_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_dedicated_dev_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-dev">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-dedicated-dev">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/dedicated-dev">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-dedicated-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-dedicated-dev">@gitlab-com/corpsys/gcp-dedicated-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-dedicated-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (dedicated-prd) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/dedicated-prd">Google Cloud Platform (dedicated-prd)<br><code>gitlab-dedicated.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_dedicated_prd_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_dedicated_prd_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-prd">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-dedicated-prd">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/dedicated-prd">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-dedicated-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-dedicated-prd">@gitlab-com/corpsys/gcp-dedicated-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-dedicated-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Apps -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/apps">Google Apps (Workspace)</a></td>
<td>
<i class="fas fa-window-restore mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_app_create">アプリを承認／作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_app_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-app">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-app">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-app">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/apps">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-app</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-app">@gitlab-com/corpsys/google-app</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-app</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO ROLE</span>
</td>
</tr>
<!-- Google Workspace Calendar -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/calendar">Google Calendar</a></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_calendar_default">エンジニアリング Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/google/calendar/delegation">委任ガイド</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-cal">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-cal">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-cal">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/calendar">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-cal</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-cal">@gitlab-com/corpsys/google-cal</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-cal</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Drive -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/drive">Google Drive (Docs, Sheets, Slides)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_drive_manage">ドライブを作成または更新</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_drive_users">ユーザーを追加または削除</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_drive_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-drive">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-drive">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-drive">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/drive">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-drive</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-drive">@gitlab-com/corpsys/google-drive</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-drive</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Groups -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/groups">Google Workspace グループ（メーリングリスト）</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_group_manage">グループを作成または更新</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_group_users">ユーザーを追加または削除</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-group">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-group">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-group">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/groups">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-group</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-group">@gitlab-com/corpsys/google-group</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-group</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Org -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/org">Google Workspace 組織設定</a></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_org_change">変更管理 Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_org_default">エンジニアリング Issue</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_org_svc">サービスアカウントリクエスト</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_org_sysadmin">システム管理者アクセスリクエスト</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-org">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-org">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-org">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/workspace">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-org</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-org">@gitlab-com/corpsys/google-org</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-org</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Fleet -->
<!-- TODO: add the Fleet console hostname, runbooks, GitLab group, and Slack handle once confirmed. Tracked in https://gitlab.com/gitlab-com/gl-security/corp/engineering/engineering_projects/-/work_items/842 -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/macos">Fleet MDM</a>
</td>
<td>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/macos/#enroll-your-mac">macOS のセットアップ手順</a><br>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/linux/setup">Linux のセットアップ手順</a><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/gitlab-corpsec/devices/fleet-gitops">fleet-gitops</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-fleet-dm">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-fleet-dm">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-fleet-dm">エピック</a>
<br>
<i class="fas fa-tag mr-2"></i><code>corpsys-fleet-dm</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Linux -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/linux">Linux (OS)</a>
</td>
<td>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/linux/setup">ノートパソコンのセットアップ手順</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=linux_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-linux">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-linux">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-linux">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/linux">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-linux</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/linux">@gitlab-com/corpsys/linux</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-linux</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
</td>
</tr>
<!-- macOS -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/macos">macOS (OS)</a>
</td>
<td>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/macos/#enroll-your-mac">ノートパソコンのセットアップ手順</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=macos_default">エンジニアリング Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-ordering/">オンボーディング用ハードウェア注文ガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-ordering/#laptop-refreshes">更新／交換ガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="handbook/security/corporate/services/laptops">修理ガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-wipe/">消去（工場出荷時設定にリセット）ガイド</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/onboarding101/#mac-setup">Mac セットアップガイド（Onboarding 101）</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/support/onboarding">オンボーディング用ソフトウェアセットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security">セキュリティ設定基準</a><br>
<ul>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/appleid">業務用 Apple ID</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/backups">バックアップ</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/encryption">ディスク暗号化</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/firewall">ファイアウォール</a></li>
<li><i class="fas fa-book mr-2"></i><a href="https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/endpoint_naming_convention/">ホスト名とユーザー名（社内向け）</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/icloud">iCloud Drive</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/unattended">離席時のロック</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/passwords">パスワード管理</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/personal/">個人利用</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/management">リモート管理（MDM と EDR）</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/updates/">ソフトウェア更新</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/touchid/">Touch ID（生体認証パスワードと 2FA）</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/browsers/)">ウェブブラウザー</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)">ワイヤレスネットワークと VPN</a><br>
</ul>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-macos">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-macos">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/macos">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-macos</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/macos">@gitlab-com/corpsys/macos</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-macos</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
</td>
</tr>
<!-- NordLayer -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/vpn">NordLayer VPN</a>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=vpn_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=vpn_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-vpn">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-vpn">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-vpn">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/vpn">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-vpn</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/vpn">@gitlab-com/corpsys/vpn</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-vpn</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- Okta Apps -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/app">Okta アプリケーション</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/app/setup">新規アプリケーション（ベンダー）のセットアップ</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">アクセスリクエストガイド</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_app">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_default">エンジニアリング Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_create">新規アプリケーションリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_update">アプリケーション更新リクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_deprecate">アプリケーション廃止リクエスト</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-app">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-app">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-app">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/app">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-app</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/svc/ar">@gitlab-com/gl-security/corp/svc/ar</a><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-apps">@gitlab-com/corpsys/okta-apps</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-apps</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code> <small>（プライベート）</small><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Groups -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/group">Okta グループ（アプリ割り当て用）</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">アクセスリクエストガイド</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_group">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_group_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-group">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-group">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-group">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/group">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-group</code><br>
<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/svc/ar">@gitlab-com/gl-security/corp/svc/ar</a><br>
<a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-groups">@gitlab-com/corpsys/okta-groups</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-groups</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Org -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/org">Okta 組織設定とポリシー</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_org_change">変更管理 Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_org_default">エンジニアリング Issue</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_org_svc">サービスアカウントリクエスト</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_org_sysadmin">システム管理者アクセスリクエスト</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-org">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-org">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-org">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/org">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-org</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-org">@gitlab-com/corpsys/okta-org</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-org</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code> <small>（プライベート）</small><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Users -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/user">Okta SSO とユーザー</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-user-lock mr-2"></i><a style="color: red;" href="/handbook/security/corporate/systems/okta/user/lockout">2FA とパスワードロックアウトのガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">アクセスリクエストガイド</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_user_default">アクセスリクエストを作成</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/android">Android セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/ios">iOS（iPhone/iPad）セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/linux">Linux セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/macos">macOS セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/passkey">パスキー 2FA セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/touchid">Touch ID 2FA セットアップガイド</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/yubikey">YubiKey 2FA セットアップガイド</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/provisioning">プロビジョニングアーキテクチャ</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/faq">よくある質問（FAQ）</a><br>
<br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_user_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-user">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-user">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-user">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/user">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-user</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-users">@gitlab-com/corpsys/okta-users</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-users</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Workflows -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/workflows">Okta Workflows</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_workflow_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-flow">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-flow">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-flow">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/workflows">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-flow</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-flows">@gitlab-com/corpsys/okta-flows</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-flows</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code> <small>（プライベート）</small><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Sandbox Cloud -->
<tr>
<td>
<a href="/handbook/company/infrastructure-standards/realms/sandbox/">Sandbox Cloud</a><br>
<code>gitlabsandbox.cloud</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/sandbox-cloud/guides">セルフサービスガイド</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=sandbox_cloud_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-sandbox-cloud">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-sandbox-cloud">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/hackystack">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-sandbox-cloud</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/sandbox-cloud">@gitlab-com/corpsys/sandbox-cloud</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-sandbox-cloud</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSH</span>
</td>
</tr>
<!-- SentinelOne EDR -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/sentinelone">SentinelOne</a><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=sentinelone_sysadmin">システム管理者アクセスリクエスト</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=sentinelone_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-sentinelone">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-sentinelone">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-sentinelone">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/sentinelone">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-sentinelone</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/sentinelone">@gitlab-com/corpsys/sentinelone</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-sentinelone</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Slack -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/slack">Slack</a><br>
<code>gitlab.enterprise.slack.com</code><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=slack_default">アクセスリクエストを作成</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=slack_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-slack">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-slack">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-slack">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/slack">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-slack</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/slack">@gitlab-com/corpsys/slack</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-slack</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ADMIN ROLE</span>
</td>
</tr>
<!-- YubiKey -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/yubikey">YubiKey</a><br>
</td>
<td>
<i class="fas fa-cart-plus mr-2"></i>キーを注文 (Slack <code>/yubikey</code>)</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=yubikey_default">エンジニアリング Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-yubikey">Issue</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-yubikey">エピック</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/yubikey">管理ランブック</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-yubikey</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/yubikey">@gitlab-com/corpsys/yubikey</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-yubikey</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>Slack の Compass アプリ（上部検索バーに「Compass」と入力して見つけてください）または it-help@gitlab.com からお問い合わせください。</code><br>
</td>
</tr>
</tbody>
</table>
