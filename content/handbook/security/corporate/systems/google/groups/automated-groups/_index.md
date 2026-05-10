---
title: 自動 Google グループ
upstream_path: /handbook/security/corporate/systems/google/groups/automated-groups/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

## Google グループの自動メンバーシップ

自動 Google グループとは、Okta / Workday 内のチームメンバー属性に基づいて、メンバーシップが自動的に取り込まれ、管理されるグループのことです。これにより、チームメンバーが入社、役割の変更、退社する際に、Google グループのメンバーシップが常に最新かつ正確に保たれます。

### メンバーシップの決定方法

通常、自動 Google グループには従業員のみが追加されます。Contractor、Contingent Worker、Professional Services Partner として分類されたチームメンバーは、特に例外をリクエストしない限り、自動グループには含まれません。

自動 Google グループは、以下のチームメンバー属性のうち1つ以上に基づいて作成できます。

- 国コード (Country Code)
- 部門 (Division)
- 部署 (Department)
- マネジメントレベル (Management Level)
- リージョン (Region)
- ユーザータイプ (User Type)
- Workday の会社 (Workday Company)

属性を組み合わせて、より具体的なグループを作成することもできます。たとえば、Department と Country Code を組み合わせて「オランダの Engineering 部署のすべてのメンバー」のグループを作成できます。

_注: レポートライン構造、チーム (supervisory orgs)、上記に記載されていないその他のフィールドに基づくメンバーシップは作成できません。_

### メンバーシップの更新頻度

Okta の変更は通常、数分以内に Google グループに同期されますが、数時間以上かかる場合もあります。
これは次のことを意味します。

- **新しいチームメンバー:** Workday のデータが正確であれば、従業員は入社初日に自動的に追加されます。
- **退職するチームメンバー:** GitLab を退社すると、従業員は自動的に削除されます。
- **役割や部署の変更:** チームメンバーの関連属性が Okta で変更されると、メンバーシップが更新されます。

## ご参考までに

**Google グループ内でメンバーを手動で管理することはできません**

メンバーシップが自動的に取り込まれている Google グループを管理したい場合、Google で手動でメンバーを追加・削除することはできません。グループメンバーは Okta で直接管理するか、または Identity Governance and Administration (IGA) ツールである Lumos を使用してチームメンバーがアクセスをリクエストし、グループオーナーがそのリクエストを承認・拒否することができます。

グループのマネージャーまたはオーナーとして、権限、設定、コンテンツなどのグループの他の側面を管理することはできますが、メンバーは管理できません。

**なぜですか?** Okta のメンバーシップは Google グループへの一方向のデータ同期です。手動で誰かを追加または削除しても、次回 Okta が同期する際にその変更は上書きされます。たとえば、チームメンバーをグループに手動で追加した場合、グループの自動化基準に一致しない場合は、Okta が同期する際に再度削除される可能性があります。

### 新しい自動 Google グループをリクエストする方法

新しい Google グループを作成するための [Issue テンプレートはこちら](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?type=ISSUE&initialCreationContext=list-route&description_template=GoogleGroup_Request) です。

既存の Google グループのメンバーシップを自動 Okta グループで管理するようリクエストすることもできます。

### メンバーを手動で追加・削除するにはどうすればよいですか?

自動 Google グループにチームメンバーを追加したい場合は、次の選択肢があります。

- **グループ作成時:** 特定のチームメンバー (EBA や支援チームメンバーなど) の追加をリクエストする
- **既存グループの場合:** アクセスリクエスト Issue を作成して追加する
- **正しく追加されていない場合:** Okta 情報が正確であることを確認してもらう。たとえば、新しい "Systems Operations" 部署のメンバーが systems-operations@gitlab.com グループへの参加を期待しているが、Okta では部署が依然として "Engineering" と表示されている場合、まず Workday でこれを更新する必要があります。
