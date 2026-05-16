---
title: "アイデンティティエンジニアリングチーム"
description: "アイデンティティエンジニアリングチームは、社内のGitLabシステム、クラウドインフラ、テックスタックアプリケーション向けのアイデンティティおよびアクセス管理 (IAM)、ロールベースアクセス制御 (RBAC)、管理者アクセス制御に関する技術戦略と自動化の実装をリードしています。セキュリティチームは顧客と製品の信頼に焦点を当て、ビジネステクノロジー・ITチームはコンプライアンスと財務上の信頼に焦点を当てています。"
upstream_path: /handbook/security/threat-management/identity/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T03:09:44Z"
translator: claude
stale: false
lastmod: "2024-06-06T07:14:15+00:00"
---

## 概要

セキュリティアイデンティティエンジニアリングチームは2023年12月1日に発足し、GitLabにおける次世代のアイデンティティおよびアクセス管理フレームワークおよびプログラム（[Identity v3](/handbook/security/identity) と呼んでいます）の設計と実装をリードしています。チームの創設メンバーは、組織再編の一環としてITエンジニアリングおよびITインフラチームからセキュリティに合流しましたが、数年にわたってアイデンティティ管理プロジェクトに取り組んできました。

アイデンティティ機能を理解するための入り口としては、[Identity](/handbook/security/identity) ハンドブックページをご覧ください。私たちの旗艦プロジェクトは [Access Control (accessctl)](https://gitlab.com/gitlab-identity/accessctl) と [Access Check (accesschk)](https://gitlab.com/gitlab-identity/accesschk) で動く [Identity Platform](/handbook/security/identity/platform) です。

チームはまだ発足したばかりですので、私たちが取り組んでいる内容については [Identity Engineering Issue Tracker](https://gitlab.com/gitlab-com/gl-security/identity/eng/issue-tracker/-/issues) をご覧ください。

**ITインフラをお探しですか？** [Identity Ops Issue Tracker](https://gitlab.com/gitlab-com/gl-security/identity/ops/issue-tracker) でIssueを作成するか、Slackの `#security-identity-ops` でお問い合わせください。

**何かにアクセスしたいですか？** 適切な [Issueテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/README.md?ref_type=heads) を使ってアクセスリクエストをオープンしてください。

## クイックリファレンス

### お問い合わせ

- (推奨) `#security-identity-ops` でお尋ねください
- 既存のIssueで `@gitlab-com/gl-security/identity/ops` をタグ付けしてください
- 既存のSlackスレッドで `@security-identity` をタグ付けしてください
- [Identity Ops Issue Tracker](https://gitlab.com/gitlab-com/gl-security/identity/ops/issue-tracker) でIssueを作成してください
- 機密事項ですか？チームメンバーの誰かにSlackのDMをお送りください。

#### オンコールスケジュール (Slack DM)

- 平日はSlack DMを使用してください。週末はPagerDutyを使用してください。
- 00:00 から 03:00 UTC - Jeff Martin
- 03:00 から 07:00 UTC - 担当なし (SIRTにご連絡ください)
- 07:00 から 15:00 UTC - Vlad Stoianovici
- 15:00 から 17:00 UTC - Jeff Martin / Vlad Stoianovici (サンセットハンドオフ)
- 17:00 から 23:59 UTC - Jeff Martin

### EpicとIssue

- オペレーション
  - [Access Requests Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues) ([Issueテンプレート](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/README.md?ref_type=heads) を使用)
  - [Identity Ops Issue Tracker](https://gitlab.com/gitlab-com/gl-security/identity/ops/issue-tracker/-/issues) (日々のリクエスト)
- エンジニアリング
  - [Identity Engineering Epics Roadmap](https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/epics)
  - [Identity Engineering Epics](https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/epics)
  - [Identity Engineering Issue Tracker](https://gitlab.com/gitlab-com/gl-security/identity/eng/issue-tracker/-/issues) (リーダーシップが後援するもの、またはOKR関連)
  - [Access Control Public Issue Tracker](https://gitlab.com/gitlab-identity/accessctl/-/issues) (私たちのソフトウェアおよびツールの機能とバグ)
  - [Access Check Public Issue Tracker](https://gitlab.com/gitlab-identity/accesschk/-/issues) (私たちのソフトウェアおよびツールの機能とバグ)

### データソース

- [Identity Policy and Manifest Data](https://gitlab.com/gitlab-com/gl-security/identity/data-poc)
- [Identity Kingdoms and Tech Stack](/handbook/security/identity/kingdoms)
- [Counterpart Directory](/handbook/security/identity/counterparts)

### プロジェクトとソースコード

- [gitlab.com/gitlab-identity](https://gitlab.com/gitlab-identity) のオープンソースプロジェクト
- [gitlab.com/gitlab-com/gl-security/identity](https://gitlab.com/groups/gitlab-com/gl-security/identity) の社内プロジェクト

## チームディレクトリ

<!-- START_TEAM_DIRECTORY -->
```yaml
smanzuik:
  name: 'Steve Manzuik'
  pronunciation: 'man-zoo-ick'
  title: 'director_threat_vulnerability_management'
  email_handle: 'smanzuik'
  gitlab_saas_handle: 'smanzuik'
  timezone: 'US Pacific (UTC-8 Winter/UTC-7 Summer)'
  working_hours:
    pt: '7:00am to 4:00pm'
    utc_winter: '15:00 to 23:59'
    utc_summer: '16:00 to 00:59'
  on_call_hours: null
  links:
    gitlab_saas_profile: 'https://gitlab.com/smanzuik'
jmartin:
  name: 'Jeff Martin'
  pronuncation: 'bat-man'
  title: 'staff_security_engineer'
  email_handle: 'jmartin'
  gitlab_saas_handle: 'jeffersonmartin'
  timezone: 'US Pacific (UTC-8 Winter/UTC-7 Summer)'
  working_hours:
    pt: '7:00am to 4:00pm'
    utc_winter: '15:00 to 23:59'
    utc_summer: '16:00 to 00:59'
  on_call_hours:
    pt: '5:00am to 7:00pm'
    utc_winter: '12:00 to 03:00'
    utc_summer: '13:00 to 04:00'
  links:
    gitlab_saas_profile: 'https://gitlab.com/jeffersonmartin'
vstoianovici:
  name: 'Vlad Stoianovici'
  pronunciation: 'stoy-on-oh-vitch'
  title: 'senior_security_engineer'
  email_handle: 'vstoianovici'
  gitlab_saas_handle: 'vlad'
  timezone: 'Eastern Europe (UTC+2 Winter/UTC+3 Summer)'
  working_hours:
    eet: '9:00am to 7:00pm'
    utc_winter: '07:00 to 17:00'
    utc_summer: '08:00 to 18:00'
  on_call_hours:
    eet: '9:00am to 7:00pm'
    utc_winter: '07:00 to 17:00'
    utc_summer: '08:00 to 18:00'
  links:
    gitlab_saas_profile: 'https://gitlab.com/vlad'
```
<!-- END_TEAM_DIRECTORY -->
