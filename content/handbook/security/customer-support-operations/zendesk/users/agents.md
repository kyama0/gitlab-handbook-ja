---
title: 'エージェント'
description: 'Zendesk エージェントに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/users/agents/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドは、自動エージェント同期プロセスや手動エージェント管理を含む、GitLab における Zendesk エージェント管理について説明します。エージェント同期は GitLab のチームデータからエージェントメタデータを自動的に維持し、手動プロセスはプロビジョニングや特殊ケースに使用されます。

管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

## Zendesk エージェントの理解 {#understanding-zendesk-agents}

### Zendesk エージェントとは {#what-are-zendesk-agents}

Zendesk エージェントは、エージェントワークスペースへのアクセス権を持つチームメンバーです。自身のチケットのみを送信・閲覧できるエンドユーザーとは異なり、エージェントは以下が可能です。

- すべてのチケットの閲覧と管理
- 内部メモやフィールドへのアクセス
- マクロやトリガーの使用
- 管理タスクの実行（ロールに基づく）

私たちは、エージェント同期（Customer Support Operations および Support チーム向け）と[プロビジョニング/デプロビジョニング](/handbook/security/customer-support-operations/zendesk/users/provisioning)プロセスを通じて、エージェントを大部分管理しています。

## エージェント同期 {#agent-sync}

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/agents)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/agents)

{{% /alert %}}

エージェント同期は、Zendesk における Customer Support および Customer Support Operations チームメンバーのメタデータを管理します。その他のエージェントアカウント（統合、ボットなど）は手動で管理されます。

### いつ実行されるか {#when-does-it-run}

- Zendesk Global: 毎日 0000 UTC
- Zendesk US Government: 毎日 0000 Pacific

### 何を管理するか {#what-does-it-manage}

各実行で、エージェントの以下が更新されます。

- GitLab.com ユーザー ID（カスタム[ユーザーフィールド](/handbook/security/customer-support-operations/zendesk/users/fields)）
- GitLab.com ユーザー名（カスタム[ユーザーフィールド](/handbook/security/customer-support-operations/zendesk/users/fields)）
- Zendesk グループメンバーシップ
- Manager タグ（カスタム[ユーザーフィールド](/handbook/security/customer-support-operations/zendesk/users/fields)）
- 名前
- Out of Office ステータス（カスタム[ユーザーフィールド](/handbook/security/customer-support-operations/zendesk/users/fields)）
- 署名
- 選択されたユーザータグ（詳細は[動作の仕組み](#how-does-it-work)を参照）
- ユーザーリージョン（Zendesk Global のみのカスタム[ユーザーフィールド](/handbook/security/customer-support-operations/zendesk/users/fields)）

Zendesk 内で同期外でエージェントに対して行われた変更は、これによって上書きされます。

### 動作の仕組み {#how-does-it-work}

{{% alert title="注意" color="primary" %}}

- `Owner` は API 経由で変更できないため、これはシステム所有者には機能しません。これらの所有者は自身のユーザーを手動で管理する必要があります。

{{% /alert %}}

スケジュールパイプラインがトリガーされると、2 つの主要なアクションが発生します。

- [Support team の YAML ファイル](https://gitlab.com/gitlab-support-readiness/support-team)のクローン
- `bin/sync` スクリプトの実行

このスクリプト自体は、紐づいている Zendesk インスタンスによって少し異なる動作をします。

#### Zendesk Global {#zendesk-global}

1. Zendesk インスタンスのグループを取得します。
1. [Support team の YAML ファイル](https://gitlab.com/gitlab-support-readiness/support-team)の内容を読み込みます
   - 編集不可（Owner）または現在同期対象外であるなど、同期に含めるべきでない選択ユーザーをスキップします
1. YAML ファイルにある各ユーザーのユーザー情報を Zendesk から取得します
1. PTO 中のリスト（`Support - Time Off` カレンダーのエントリに従う）を取得します
1. 各エージェントをループして比較します:
   - Zendesk のユーザーデータと YAML のユーザーデータ、具体的には:
     - 紐づく組織が `GitLab` であるか
     - 名前とメール
     - エイリアス（Zendesk での代替表示名、利用を選択している場合）
     - 署名
     - ユーザーフィールド
     - 以下から派生するタグ:
       - 現在の役職
       - 報告先
       - シフトタグ（YAML ファイルの `working_hours` 属性が必要であることを示す場合）
     - デフォルトグループ（以下の基準のいずれかに合致するもの、出現順）:
       1. メールに `ext@gitlab.com` を含む者は `BPO`
       1. リージョンに `AMER` を含む者は `Support AMER`
       1. リージョンに `APAC` を含む者は `Support APAC`
       1. リージョンに `EMEA` を含む者は `Support EMEA`
       1. 上記基準に当てはまらない者は `General`
   - ユーザーの現在の Zendesk グループメンバーシップと、所属すべきグループ（YAML データとデフォルトグループロジックに基づく）を比較します。Zendesk に欠けているグループは追加され、YAML に無い余分なグループは削除されます。
   - PTO ステータスの変更（つまり復帰または出発）を記録します
1. その後、以下の API エンドポイントを使用して更新を実行します:
   - [ユーザー変更](https://developer.zendesk.com/api-reference/ticketing/users/users/#update-user)
   - [グループメンバーシップの追加](https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/#create-membership)
   - [グループメンバーシップの削除](https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/#delete-membership)
1. 同期はまた、PTO ステータスに変更があったチームメンバーのアサイン済み全チケットも更新します（`Assignee OOO` フィールドが変更を反映するため）

#### Zendesk US Government {#zendesk-us-government}

1. Zendesk インスタンスのグループを取得します。
1. [Support team の YAML ファイル](https://gitlab.com/gitlab-support-readiness/support-team)の内容を読み込みます
   - 編集不可（Owner）または現在同期対象外であるなど、同期に含めるべきでない選択ユーザーをスキップします
1. YAML ファイルにある各ユーザーのユーザー情報を Zendesk から取得します
1. PTO 中のリスト（`Support - Time Off` カレンダーのエントリに従う）を取得します
1. 各エージェントをループして比較します:
   - Zendesk のユーザーデータと YAML のユーザーデータ、具体的には:
     - 紐づく組織が `GitLab` であるか
     - 名前とメール
     - エイリアス（Zendesk での代替表示名、利用を選択している場合）
     - 署名
     - ユーザーフィールド
     - 以下から派生するタグ:
       - 現在の役職
       - 報告先
       - シフトタグ（グループメンバーシップが必要であることを示す場合）
     - デフォルトグループ（以下の基準のいずれかに合致するもの、出現順）:
       1. ロールが `Light agent` の者は `General`
       1. 上記基準に当てはまらない者は `Support`
   - ユーザーの現在の Zendesk グループメンバーシップと、所属すべきグループ（YAML データとデフォルトグループロジックに基づく）を比較します。Zendesk に欠けているグループは追加され、YAML に無い余分なグループは削除されます。
   - PTO ステータスの変更（つまり復帰または出発）を記録します
1. その後、以下の API エンドポイントを使用して更新を実行します:
   - [ユーザー変更](https://developer.zendesk.com/api-reference/ticketing/users/users/#update-user)
   - [グループメンバーシップの追加](https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/#create-membership)
   - [グループメンバーシップの削除](https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/#delete-membership)
1. 同期はまた、PTO ステータスに変更があったチームメンバーのアサイン済み全チケットも更新します（`Assignee OOO` フィールドが変更を反映するため）

### 同期への変更リクエスト {#requesting-changes-to-the-sync}

エージェント同期への変更をリクエストするには、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### エージェント同期の変更 {#modifying-the-agent-sync}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。

{{% /alert %}}

エージェント同期を変更するには、プロジェクトリポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によります。

ピアレビューと承認の後、MR をマージできます。次回のデプロイメント時に Zendesk へ同期されます。

### エージェントの手動作成 {#manually-creating-an-agent}

{{% alert title="警告" color="warning" %}}

- [プロビジョニング/デプロビジョニング](/handbook/security/customer-support-operations/zendesk/users/provisioning)で指定された場合を除き、これは決して行わないでください。

{{% /alert %}}

Zendesk でエージェントを作成するには:

1. ページ左上の `+ Add` にマウスオーバーします（管理パネル以外で）
1. `User` をクリックします
1. `Name` を入力します
1. `Email` を入力します
1. `User type` が `Staff member` であることを確認します
1. それに応じて `Role` を設定します
1. `Add` をクリックします
