---
title: "カスタムロール"
status: ongoing
creation-date: "2025-02-13"
authors: [ "@jarka" ]
coach: [ "@grzesiek" ]
approvers: [ "@alexbuijs", "@grzesiek" ]
owning-stage: "~devops::software supply chain security"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/custom_roles/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">ongoing</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/jarka" class="text-blue-600 hover:underline">@jarka</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/alexbuijs" class="text-blue-600 hover:underline">@alexbuijs</a>, <a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::software supply chain security</span></td>
<td class="px-3 py-2 border border-gray-300">2025-02-13</td>
</tr>
</tbody>
</table>
</div>


## 概要

GitLab カスタムロールを使用すると、Ultimate サブスクライバーはチームのニーズに合った特定の権限を持つロールを作成できます。標準ロール（Guest、Reporter、Developer、Maintainer、Owner）のみを使用する代わりに、管理者は必要な権限を正確に備えた新しいロールを作成できます。これはプロジェクト/グループ権限と管理者エリアのアクセス両方に対応しています。
たとえば、Ultimate の顧客は `read code` と `admin merge requests` の権限を持つ Guest 標準ロールに基づいた「Engineer」ロールを作成できますが、`admin issues` などの権限は含めません。

各ロールは特定の権限をオンにすることでカスタマイズでき、チームメンバーに必要なアクセス権限だけを簡単に付与できます。現在、カスタム権限は標準ロールに追加することのみ可能で、削除することはできません。

## カスタムロールとデフォルトロール

GitLab 15.9 以前では、GitLab は権限システムとして[デフォルトロール](https://docs.gitlab.com/ee/development/permissions/predefined_roles.html)のみを持っていました。このシステムでは、特定の権限に静的に割り当てられたいくつかの事前定義ロールがあります。これらのデフォルトロールは顧客がカスタマイズすることはできません。

カスタムロールを使用すると、顧客は特定のユーザーグループに割り当てる権限を決定できます。たとえば：

- デフォルトロールシステムでは、脆弱性の閲覧は少なくとも Developer ロール以上に限定されています。
- カスタムロールシステムでは、顧客はこの権限を任意のデフォルトロールに基づく新しいカスタムロールに割り当てることができます。

デフォルトロールと同様に、カスタムロールはグループ階層内で[継承](https://docs.gitlab.com/ee/user/project/members/#membership-types)されます。ユーザーがグループに対してカスタムロールを持っている場合、そのユーザーはグループ内のプロジェクトやサブグループに対してもカスタムロールを持ちます。

## 用語

- **カスタムロール（Custom Roles）**: 顧客定義の権限グループのユーザー向け機能名
- **メンバーロール（Member Roles）**: カスタムロールのバックエンド/API 用語。`member_roles` テーブルに保存されます
- **アクセスレベル（Access Levels）**: デフォルトロールのバックエンド用語。データベースに整数として保存されます
- **ベースロール（Base Role）**: カスタムロールが基づくデフォルトロール（管理者関連ロールでは nil になる場合があります）
- **追加権限（Additive Permissions）**: ベースロールの権限に追加して付与される追加の権限

「permission（権限）」と「ability（能力）」という用語はしばしば同じ意味で使用されます。

- 「Ability（能力）」はユーザーが実行できるアクションです。これらは[Declarative Policy の abilities](https://gitlab.com/gitlab-org/ruby/gems/declarative-policy/-/blob/main/doc/defining-policies.md#rules) にマップされ、`ee/app/policies/*` の Policy クラスに存在します。
- 「Permission（権限）」は[ユーザー向けドキュメント](https://docs.gitlab.com/ee/user/permissions)での ability の呼び方です。権限のドキュメントは手動で生成されるため、ドキュメントに記載されている権限と Policy クラスで定義されている ability が必ずしも 1:1 でマッピングされるわけではありません。

## アーキテクチャ

### 権限モデル

#### 通常の権限

- デフォルトロールに基づく
- 1 つ以上の追加権限を持つ
- プロジェクトおよび/またはグループにスコープされる
- 階層的な権限の継承：
  - 異なるレベルで異なるカスタムロールを持つユーザーはすべての権限を受け取ります
  - 例：ユーザーがグループ A で guest+read_code を持ち、（グループ A 内の）プロジェクト B で guest+read_vulnerability を持っている場合、プロジェクト B では guest ロールと read_code および read_vulnerability の両方の権限を実質的に持ちます
  - 階層を下に移動する際、同じまたはより高いベースロールを持つカスタムロールのみ追加できます

#### 管理者権限

- ベースアクセスレベルに紐付けられていない
- 管理者エリアのアクセスのための特定の権限

### データベース構造

- 個々のカスタムロールは `member_roles` テーブル（`MemberRole` モデル）に保存されます。個々の権限と `base_access_level` の値が含まれます。
- `member_roles` レコードは、通常のカスタムロール（SaaS）の場合、`namespace_id` 外部キーを介してトップレベルグループ（サブグループではない）に関連付けられます。セルフマネージドインスタンスの通常のカスタムロールと管理者カスタムロールはグループに関連付けられません。
- グループまたはプロジェクトのメンバーシップ（`members` レコード）は、`member_role_id` 外部キーを介してカスタムロールに関連付けられます。各メンバー（グループまたはプロジェクト）は 1 つのカスタムロールに関連付けることができます
- グループまたはプロジェクトのメンバーシップは、グループまたはプロジェクトのルートレベルグループで定義された任意のカスタムロールに関連付けることができます。
- `base_access_level` は[有効なアクセスレベル](https://docs.gitlab.com/ee/api/access_requests#valid-access-levels)でなければなりません。

- `base_access_level` はカスタムロールに含まれる権限を決定します。たとえば、`base_access_level` が `10` の場合、カスタムロールにはデフォルトの Guest ロールが受け取る権限が含まれ、さらに `member_roles` レコードが `read_code` などの属性を true に設定することで有効にされる追加の権限も含まれます。

- 管理者関連ロールは `Users::UserMemberRole` モデルと `user_member_roles` テーブルを使用します
- 管理者権限のカスタムロールは常に nil の `base_access_level` を持ちます

### 権限ロードのアーキテクチャ

`Authz::CustomAbility` クラスが権限チェックを調整します：

- リソースタイプ（Project、Group、Admin）に基づいて適切なプリローダーを決定します
- 権限の適格性（フィーチャーフラグ、ライセンスなど）を検証します
- パフォーマンスのために権限結果をメモ化します

異なるリソースタイプのカスタム権限を効率的にロードするために、特殊なプリローダーを使用します：

#### プロジェクト権限

- `Authz::Project` クラスが処理します
- `UserMemberRolesInProjectsPreloader` を使用して権限をロードします
- 指定されたユーザーのプロジェクト固有のカスタム権限を返します

#### グループ権限

- `Authz::Group` クラスが処理します
- `UserMemberRolesInGroupsPreloader` を使用して権限をロードします
- 指定されたユーザーのグループ固有のカスタム権限を返します

#### 管理者権限

- `Authz::Admin` クラスが処理します
- `UserMemberRolesForAdminPreloader` を使用して管理者固有の権限をロードします
- ユーザーの管理者レベルのカスタム権限を返します

#### Finder

`MemberRoles::RolesFinder` は、親、ID、タイプなどのパラメーターに基づいてメンバーロールをフィルタリングおよびソートする検索サービスクラスです。通常のロールの検索を担当し、管理者ロールには `Members::AdminRolesFinder` があります。

## ドキュメントとメンテナンス

### 自動ドキュメント生成

- ドキュメントは Rake タスクを使用して自動的に生成されます：

  - カスタム権限リスト用の `bundle exec rake gitlab:custom_roles:compile_docs`
  - GraphQL ドキュメント用の `bundle exec rake gitlab:graphql:compile_docs`

- 生成されたドキュメントはコードとドキュメントの一貫性を確保します

### 新しいカスタム権限の追加

- `./ee/bin/custom-ability <ABILITY_NAME>` を使用して生成します
- `ee/config/custom_abilities` に YAML 設定があります
- スキーマ検証とスペックファイルの生成
- `custom_ability_<name>` パターンのフィーチャーフラグサポート
- 必要に応じて GroupPolicy および/または ProjectPolicy + 特定のエンティティの Policy の更新
- カスタム権限の追加方法の詳細なプロセスについては、[対応するコントリビューターのドキュメントページ](https://docs.gitlab.com/ee/development/permissions/custom_roles.html)を参照してください。

### 開発状況

- 通常のカスタムロールフレームワークが実装され、新しい権限で積極的に拡張されています
- 管理者カスタムロールは初期開発段階にあり、フィーチャーフラグの後ろにあります

  - 現在はセルフマネージドインスタンスでのみ利用可能
  - 数回のリリース内で SaaS 環境への拡張が予定されています

## 参照

- [カスタムロールのブループリント](../permissions/)
- [カスタム権限 MVC のテクニカルディスカバリー](https://gitlab.com/gitlab-org/gitlab/-/issues/352891)
- [カスタム権限 MVC のデザイン](https://gitlab.com/gitlab-org/gitlab/-/issues/350192)
