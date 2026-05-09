---
title: 'ロール'
description: 'Zendesk のユーザーロールに関するドキュメント'
date: 2025-12-26
upstream_path: /handbook/security/customer-support-operations/zendesk/users/roles/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk のユーザーロールの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
  - **注意:** ロールは現在 Zendesk で手動管理されています（同期リポジトリはまだありません）

{{% /alert %}}

## ロールを理解する

### Zendesk のユーザーロールとは

Zendesk はエージェント向けの権限セットを維持する手段としてロールを使用します。

### ロールの管理方法

私たちは現在、すべてのロールを Zendesk 自体内で管理しています。

### 現在使用中のロール

{{% alert title="注意" color="danger" %}}

これは使用しているロールの唯一の信頼できる情報源であるべきです。承認されたワークフロー外で変更を加えないでください。

変更には常に注意してください。多くは大きな下流への影響を持つ可能性があります。

{{% /alert %}}

ロールが持つ権限の詳細については、[このドキュメント](https://docs.google.com/spreadsheets/d/1geQ3AYmlAUVFdgLusQVCaoNacV2yOHULjN2L7LP8rT0/edit?usp=sharing)（内部）を参照してください。

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

## 管理者ではない者がロールを作成する

ロールの作成については、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## 管理者ではない者がロールを編集する

ロールの変更については、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## 管理者ではない者がロールを削除する

ロールの非アクティブ化を依頼するには、[Feature Request の Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（カスタマーサポートオペレーションチームによる手動対応が必要となるため）。

## ロール変更を依頼する

すべての Zendesk ロール変更は、以下の承認プロセスに従います。

1. **リクエストの提出**: [アクセスリクエスト Issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) を提出
1. **マネージャー承認**: 依頼者のマネージャーがリクエストを承認する必要があります
1. **セキュリティレビュー**: カスタマーサポートオペレーションのフルスタックエンジニアがビジネス上の正当性をレビュー
1. **判断**: 承認された場合、カスタマーサポートオペレーションが必要な変更を実施

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk でロールを表示する {#viewing-roles-in-zendesk}

Zendesk でロールを表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Roles` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/roles)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/roles)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/roles)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/roles)

ロールの権限とメンバーシップを確認する必要がある場合は、ロールの名前をクリックできます。

### ロールを作成する

{{% alert title="危険" color="danger" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。

{{% /alert %}}

Zendesk でロールを作成するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセス
1. ページ右上の `Create role` をクリック
1. 新しいロールの名前を入力
1. 新しいロールの説明を入力（オプション）
1. 新しいロールに必要な各種権限情報を入力
1. ページ右下の `Create role` をクリック

### ロールを編集する

{{% alert title="危険" color="danger" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。
- これはエージェントの業務遂行能力に重大な影響を与える可能性があります。慎重に実行してください。
- ロールの名前は決して変更しないでください。多くの重大な下流への影響を引き起こす可能性があります。

{{% /alert %}}

Zendesk でロールを編集するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセス
1. 編集するロールの名前をクリック
1. ロールに必要な変更を加える
1. ページ右下の `Save` をクリック

### エージェントのロールを変更する

{{% alert title="危険" color="danger" %}}

- これにはアクセスリクエスト Issue が必要です。それなしで進めないでください。
- これには依頼者のマネージャーによる承認が必要です。それなしで進めないでください。

{{% /alert %}}
{{% alert title="注意" color="primary" %}}

- これがサポートまたはカスタマーサポートオペレーションチームメンバーの場合、その [Support team YAML ファイル](https://gitlab.com/gitlab-support-readiness/support-team)も更新する必要があるかもしれません。

{{% /alert %}}

Zendesk でエージェントのロールを変更するには:

1. Zendesk インスタンスの管理ダッシュボードに移動
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `People > Team > Team members` に移動
   - [Zendesk Global](https://gitlab.zendesk.com/admin/people/team/members)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/people/team/members)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/people/team/members)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/people/team/members)
1. メールアドレスを使って対象者を検索
1. その人の名前をクリック
1. `Support` プロダクトの右にあるドロップダウンをクリックし、使用する新しいロールを選択
1. ページ右下の `Save` をクリック

### ロールを削除する

{{% alert title="危険" color="danger" %}}

- これは対応する依頼 Issue（Feature Request、Administrative、Bug など）が存在する場合にのみ実行してください。存在しない場合は、まず作成して標準プロセスを通してから対応してください。
- [Agent sync](/handbook/security/customer-support-operations/zendesk/users/agents/#agent-sync) も編集する必要があるかもしれないことに留意してください
- これはエージェントの業務遂行能力に重大な影響を与える可能性があります。慎重に実行してください。

{{% /alert %}}

Zendesk でロールを削除するには:

1. [ロールページ](#viewing-roles-in-zendesk)にアクセス
1. 削除するロールの名前をクリック
1. ページ右上の `Actions` をクリック
1. `Delete role` をクリック
1. 確認ポップアップの `Delete role` をクリックして削除を確定

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加されていく、生きたセクションです。
