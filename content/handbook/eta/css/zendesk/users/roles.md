---
title: 'ロール'
description: 'Zendesk ユーザーロールに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/users/roles/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:03:38+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk ユーザーロールを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
  - **注記:** ロールは現在 Zendesk で手動管理されています（同期リポジトリはまだありません）

{{% /alert %}}

## ロールを理解する

### Zendesk ユーザーロールとは

Zendesk は、エージェントの権限セットを維持する方法としてロールを使用します。

### ロールの管理方法

現在、すべてのロールを Zendesk 内で管理しています。

### 現在使用中のロール

{{% alert title="注記" color="danger" %}}

これは、使用されているロールの唯一の情報源とします。承認済みワークフローの外で変更しないでください。

変更には常に注意してください。これらの多くは下流に大きな影響を与える可能性があります。

{{% /alert %}}

ロールの権限の詳細については、[このドキュメント](https://docs.google.com/spreadsheets/d/1geQ3AYmlAUVFdgLusQVCaoNacV2yOHULjN2L7LP8rT0/edit?usp=sharing)（内部）を参照してください。

#### Zendesk Global

- [Admin](https://gitlab.zendesk.com/admin/people/team/roles/360004957599)
- [BPO](https://gitlab.zendesk.com/admin/people/team/roles/21960449459868)
- [Chat-only agent](https://gitlab.zendesk.com/admin/people/team/roles/11757383830044)
- [Contributor](https://gitlab.zendesk.com/admin/people/team/roles/360006947540)
- [GitLab Staff](https://gitlab.zendesk.com/admin/people/team/roles/360005625453)
- [GitLab Staff - Explore](https://gitlab.zendesk.com/admin/people/team/roles/360001716320)
- [Light agent](https://gitlab.zendesk.com/admin/people/team/roles/360004984553)
- [Security Staff](https://gitlab.zendesk.com/admin/people/team/roles/8869988210972)
- [Support Managers](https://gitlab.zendesk.com/admin/people/team/roles/360001716340)
- [Support Staff](https://gitlab.zendesk.com/admin/people/team/roles/1288263)
- [Support Staff - CMOC](https://gitlab.zendesk.com/admin/people/team/roles/8869919308956)
- [Support Staff - Explore](https://gitlab.zendesk.com/admin/people/team/roles/360001525560)
- [Tech Support](https://gitlab.zendesk.com/admin/people/team/roles/360001532679)

#### Zendesk US Government

- [Admin](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360016820032)
- [Chat-only agent](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/20528982631700)
- [Contributor](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360016669231)
- [GitLab Staff](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360008466212)
- [Light agent](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360008074111)
- [Support Managers](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/33687078022676)
- [Support US Federal Staff](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360008098572)
- [Support US Federal Staff w/ Explore](https://gitlab-federal-support.zendesk.com/admin/people/team/roles/360009925712)

## 非管理者としてロールを作成する

ロールを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてロールを編集する

ロールを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてロールを削除する

ロールの無効化をリクエストするには、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## ロール変更をリクエストする

すべての Zendesk ロール変更は、次の承認プロセスに従います。

1. **リクエストを提出**: [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request)を起票します
1. **マネージャーの承認**: リクエスト者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: Customer Support Systems の Fullstack Engineer がビジネス上の正当性をレビューします
1. **決定**: 承認された場合、Customer Support Systems が必要な変更を行います

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Zendesk でロールを表示する

Zendesk でロールを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Roles` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/roles)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/team/roles)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/roles)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/roles)

ロールの権限とメンバーシップを確認する必要がある場合は、ロール名をクリックできます。

### ロールを作成する

{{% alert title="危険" color="danger" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

Zendesk でロールを作成するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセスします
1. ページ右上の `Create role` をクリックします
1. 新しいロールの名前を入力します
1. 新しいロールの説明を入力します（任意）
1. 新しいロールに必要な各種権限情報を入力します
1. ページ右下の `Create role` をクリックします。

### ロールを編集する

{{% alert title="危険" color="danger" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- エージェントの職務遂行能力に深刻な影響を与える可能性があります。慎重に実施してください。
- ロールの名前は変更しないでください。下流に深刻な影響を与える可能性があります。

{{% /alert %}}

Zendesk でロールを編集するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセスします
1. 編集するロールの名前をクリックします
1. ロールに必要な変更を行います
1. ページ右下の `Save` をクリックします。

### エージェントのロールを変更する

{{% alert title="危険" color="danger" %}}

- これにはアクセスリクエスト Issue が必要です。リクエストがない場合は続行しないでください。
- 続行するにはリクエスト者のマネージャーの承認が必要です。承認がない場合は続行しないでください。

{{% /alert %}}
{{% alert title="注記" color="primary" %}}

- Support または Customer Support Systems チームメンバーの場合は、その[Support チーム YAML ファイル](https://gitlab.com/gitlab-support-readiness/support-team)も更新する必要がある可能性があります。

{{% /alert %}}

Zendesk でエージェントのロールを変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Team members` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/members)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/people/team/members)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/members)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/members)
1. メールアドレスを使用して対象者を検索します
1. 名前をクリックします
1. `Support` プロダクトの右にあるドロップダウンをクリックし、使用する新しいロールを選択します
1. ページ右下の `Save` をクリックします

### ロールを削除する

{{% alert title="危険" color="danger" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、先に作成し、対応を開始する前に標準プロセスを通過させてください。
- [Agent sync](/handbook/eta/css/zendesk/users/agents/#agent-sync)も編集する必要がある可能性があることに留意してください
- エージェントの職務遂行能力に深刻な影響を与える可能性があります。慎重に実施してください。

{{% /alert %}}

Zendesk でロールを削除するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセスします
1. 削除するロールの名前をクリックします
1. ページ右上の `Actions` をクリックします
1. `Delete role` をクリックします
1. 確認ポップアップの `Delete role` をクリックして削除を確認します

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加される継続的なセクションです。
