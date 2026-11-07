---
title: 'Organizations リリースプロセス'
description: 'Organization の機能とステージのリリースプロセス。'
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/organization/release_process/"
upstream_sha: d717b9da633f2989a0b1854384a69a0c31bae680
lastmod: "2026-11-06T15:09:15-06:00"
translated_at: "2026-11-07T10:40:53Z"
translator: codex
stale: false
---

このドキュメントでは、どのフィーチャーフラグをどのように有効にするかなど、Organization の機能をリリースするために必要な手順を説明します。各[リリースステージ](../../../infrastructure-platforms/tenant-scale/organizations/release-stages.md)の意味、対象者、機能が[ステージ間を移行する方法](../../../infrastructure-platforms/tenant-scale/organizations/release-stages.md#moving-through-the-stages)については、リリースステージのページを参照してください。

## ベータ {#beta}

### Artifact Registry（Central）のリリースプロセス {#artifact-registry-central-release-process}

#### 前提条件 - フィーチャーフラグを有効にする {#prerequisites---enable-feature-flags}

**担当：** ~group::organizations

[Organization のフラグ](https://docs.gitlab.com/development/organizations/release_status/)を以下の状態に移行する必要があります。
この状態は Artifact Registry のベータにのみ適用されます。その後は、これらのフラグを他のステージへ移行できます。

| フラグ                              | ステージ        | 説明                                                            |
| --------------------------------- | ------------ | ---------------------------------------------------------------------- |
| `org_creation`                    | Experimental | グローバルページまたは公開 API から組織を作成します。               |
| `org_switcher`                    | Experimental | 組織切り替え用のドロップダウンコンポーネント。                          |
| `create_org_from_group_settings`  | Experimental | グループ設定からトップレベルグループの組織を作成します。  |
| `org_admin_area`                  | Experimental | 組織オーナー向けの組織管理エリア。                       |
| `org_pages`                       | LA (100%)    | `Organizations::ApplicationController` を継承する組織ページ。 |
| `your_work_sidebar_org_menu_item` | LA (100%)    | `Your work` サイドバーに `Organizations` メニュー項目を表示します。            |

`org_pages` と `your_work_sidebar_org_menu_item` は、組織のコンテキスト外にあるページを制御し、`organization` アクターでは機能せず、代わりに `user` アクターを使用するため、LA (100%) に移行する必要があります。

`org_pages` は組織ページを制御します。このページは、ユーザーがアクティブな組織を持つまで表示されません。つまり、手順 3 と 4 の後まで、ユーザーには UI の変更は見えません。

`your_work_sidebar_org_menu_item` には、[`active` 状態](lifecycle.md#states)の Organization を持つユーザーにのみ `Your work` サイドバーの `Organizations` メニュー項目を表示するチェックも適用されます。つまり、手順 3 と 4 の後まで、ユーザーには UI の変更は見えません。

`ui_for_organizations` フィーチャーフラグ - このフラグで制御している箇所がまだいくつか残っています。特に、Organization の唯一のオーナーを削除できるかどうかに関するロジックです。このフィーチャーフラグは組織のコンテキスト外にあるページを制御し、`organization` アクターでは機能しないため、すべてのユーザーに対してグローバルに有効にする必要があります。

```shell
/chatops gitlab run feature set ui_for_organizations true
```

#### Artifact Registry（デザインパートナー） {#artifact-registry-design-partners}

私たちは、少数のデザインパートナーを手動で Organizations にオンボーディングし、Artifact Registry の使用を開始できるようにします。これは、[スタンドアロンの Organizations ベータ](#standalone-organizations-with-self-serve-onboarding)が利用可能になるまでの暫定的なリリースプロセスです。

#### 手順 1 - デザインパートナーのトップレベルグループ（TLG）を特定する {#step-1---identify-design-partners-top-level-groups-tlgs}

**担当：** ~devops::package

Organizations にオンボーディングするデザインパートナーを特定し、TLG のフルパスのリストを提供します。

#### 手順 2 - 新しい Organization で TLG をバックフィルする {#step-2---backfill-tlgs-with-new-organization}

**担当：** ~group::organizations

`group` アクターを使用して、TLG に対して `root_group_organization_backfill` フィーチャーフラグを有効にします。

```shell
/chatops gitlab run feature set --group=a-customer-group root_group_organization_backfill true
```

これにより、次が実行されます。

1. TLG と同じ名前およびパスの Organization を作成する
1. TLG をこの Organization に移管する

#### 手順 3 - Organization を確定し、TLG メンバーを同期する {#step-3---confirm-organization-and-sync-tlg-members}

**担当：** ~group::organizations

`group` アクターを使用して、TLG に対して `root_group_organization_confirm` フィーチャーフラグを有効にします。

```shell
/chatops gitlab run feature set --organization=a-customer-group root_group_organization_confirm true
```

これにより、次が実行されます。

1. Organization を確定する
1. TLG メンバーを Organization に追加する。Owners は Organization Administrators になり、その他すべての Members は Organization Regular Users になります。

#### 手順 4 - Artifact Registry UI のフィーチャーフラグを有効にする {#step-4---enable-artifact-registry-ui-feature-flag}

**担当：** ~group::organizations

作成して確定したばかりの組織に対して、`artifact_registry_ui` フィーチャーフラグを有効にします。

```shell
/chatops gitlab run feature set --organization=a-customer-group artifact_registry_ui true
```

これにより、Organization に Artifact Registry UI が表示されます。

#### 手順 5 - デザインパートナーに通知する {#step-5---notify-design-partners}

**担当：** ~devops::package

Artifact Registry を有効化して使い始める方法を説明するドキュメントへのリンクをデザインパートナーに通知します。

#### 手順 6 - Artifact Registry を有効にする {#step-6---enable-artifact-registry}

**担当：** ~devops::package

お客様には `Your work` サイドバーに `Organizations` メニュー項目が表示されるようになります。お客様は Organization の `Artifacts` メニュー項目の下で有効化できます。有効化すると、Artifact Registry の使用を開始できます。

#### ロールバック {#rollback}

```shell
/chatops gitlab run feature set ui_for_organizations false
/chatops gitlab run feature set --group=a-customer-group root_group_organization_backfill false
/chatops gitlab run feature set --organization=a-customer-group root_group_organization_confirm false
/chatops gitlab run feature set --organization=a-customer-group artifact_registry_ui false
```

### セルフサービスのオンボーディングを備えたスタンドアロンの組織 {#standalone-organizations-with-self-serve-onboarding}

#### 手順 1 - フィーチャーフラグを有効にする {#step-1---enable-feature-flags}

**担当：** ~group::organizations

[前提条件のフラグ](#prerequisites---enable-feature-flags)に加えて、[Organization のフラグ](https://docs.gitlab.com/development/organizations/release_status/)を以下の状態に移行する必要があります。

| フラグ                           | ステージ  | 説明                                                                  |
| -------------------------------- | --------- | --------------------------------------------------------------------- |
| `create_org_from_group_settings` | Beta      | グループ設定からトップレベルグループの組織を作成します。 |
| `org_admin_area`                 | LA (100%) | 組織オーナー向けの組織管理エリア。                      |

`create_org_from_group_settings` は `--group` アクターで使用できるため、Beta のままとします。`org_admin_area` は、お客様が Organization を作成した後にこれを利用可能にするためのアクターがないため、LA (100%) に移行する必要があります。これらのフラグは Organization を持つユーザーのみが利用できる機能を制御し、Organization の作成自体は引き続きグループアクターで制御されるため、安全に LA (100%) にできます。

#### 手順 2 - ベータのお客様のトップレベルグループ（TLG）を特定する {#step-2---identify-beta-customers-top-level-groups-tlgs}

**担当：** ~group::organizations

Organizations にオンボーディングするベータのお客様を特定し、TLG のフルパスのリストを提供します。

#### 手順 3 - TLG から Organization を作成する機能を有効にする {#step-3---enable-the-ability-to-create-an-organization-from-your-tlg}

**担当：** ~group::organizations

デザインパートナーの TLG に対して `org_stage_beta` フィーチャーフラグを有効にします

```shell
/chatops gitlab run feature set --group=a-customer-group org_stage_beta true
```

#### 手順 4 - お客様が TLG から Organization を作成する {#step-4---the-customer-creates-an-organization-from-their-tlg}

**担当：** ~group::organizations

お客様は自分の TLG に移動 -> **設定 > 一般 > 詳細** を選択し、`Create an Organization`
UI を使用します。これにより Organization が作成され、TLG（および選択した他の所有 TLG）がその Organization に移動し、Organization の状態が `active` に設定されます。

その後、`Your work` サイドバーに `Organizations` メニュー項目が表示され、Organizations を使用できます。

#### ロールバック {#rollback-1}

問題の重大度に応じて、次の選択肢を使用できます。

##### 選択肢 1 - バグ修正 {#option-1---bug-fix}

重大度が低く、すぐに修正できる問題であれば、修正をプッシュします。

##### 選択肢 2 - フィーチャーフラグを無効にする {#option-2---disable-feature-flags}

重大度が高く、すべてのお客様に影響し、修正に時間がかかる問題であれば、`org_stage_la_100` フィーチャーフラグを無効にできます。これにより、すべてのお客様に対して Organizations が無効になることに注意してください。

```shell
/chatops gitlab run feature set org_stage_la_100 false
```

##### 選択肢 3 - TLG を Default Organization に戻す {#option-3---move-tlgs-back-to-the-default-organization}

重大度が高く、上記の選択肢では解決できない問題であれば、TLG を Default Organization に戻す必要があります。[本番環境の変更リクエスト](/handbook/engineering/infrastructure-platforms/change-management/)を作成し、SRE と協力してください。

移管はデータベーストランザクション内では実行されません。途中で失敗した場合、すでに移動した行は Default Organization に残り、それ以外の行は移管元の Organization に残ります。同じ TLG に対して移管を再実行すると、停止した箇所から続行します。

###### 開始前の準備 {#before-you-start}

Organization の TLG の ID とフルパスを変更リクエストに記録してください。Rails コンソールで次を実行します。

```rb
organization = Organizations::Organization.find_by_path("<organization-path>")
organization.groups.top_level.pluck(:id, :full_path)
```

このリストを保存してください。移管途中の TLG は `organization.groups` から返されなくなるため、後でリストを再作成することはできません。

###### 各 TLG を移管する {#transfer-each-tlg}

リスト内の各 TLG について、移管リクエストを送信します。`organization_id=1` はプレースホルダーではありません。`1` は常に Default Organization の ID です。

```shell
curl --request POST \
  --header "PRIVATE-TOKEN: $GITLAB_TOKEN" \
  --data "organization_id=1" \
  "https://gitlab.com/api/v4/groups/<group-path>/transfer_to_organization"
```

`202` レスポンスは、移管が `Organizations::Groups::TransferWorker` のキューに登録されたことを意味します。移管が成功したことを意味するわけではありません。[ジョブを監視](#monitor-the-transfer-in-kibana)して結果を確認してください。

`4xx` レスポンスは、移管がキューに登録される前に拒否されたことを意味します。レスポンス本文に理由が記載されています。たとえば、`Group organization transfer failed: Group is already in the target organization.` は、TLG がすでに移管されていることを意味します。

1 つの TLG に対して同時に実行される移管は 1 つだけです。移管の実行中に再度リクエストを送信すると、新しいジョブはスキップされ、`Organizations::Groups::TransferWorker skipped: a transfer for this group is already running` がログに記録されます。

###### Kibana で移管を監視する {#monitor-the-transfer-in-kibana}

[Kibana](https://log.gprd.gitlab.net/app/discover)を使用します。

1. API リクエストを見つけます。Rails インデックス（`pubsub-rails-inf-gprd-*`）で、次の条件で絞り込みます。

   ```plaintext
   json.path : "/api/v4/groups/<group-id>/transfer_to_organization"
   ```

   `json.status` が `202` であることを確認し、`json.correlation_id` をコピーします。リクエストでグループのフルパスを使用した場合は、フィルターでもフルパスを使用してください。

1. Sidekiq ジョブを見つけます。Sidekiq インデックス（`pubsub-sidekiq-inf-gprd-*`）で、次の条件で絞り込みます。

   ```plaintext
   json.class : "Organizations::Groups::TransferWorker" and json.correlation_id : "<correlation-id>"
   ```

   ジョブは開始時に `json.job_status : "start"`、終了時に `"done"` をログに記録します。`json.jid` をコピーします。

   `done` ステータスは、移管が成功したことを意味するわけではありません。移管サービスはエラーを捕捉し、例外を送出せずにエラーを返すため、失敗した移管でも `done` で終了します。

1. 結果を確認します。同じ相関 ID を持つ移管サービスのログメッセージを検索します。

   ```plaintext
   json.correlation_id : "<correlation-id>" and json.message : ("Group was transferred to a new organization" or "Group was not transferred to a new organization")
   ```

   - `Group was transferred to a new organization`：移管が成功しました。
   - `Group was not transferred to a new organization`：移管が失敗しました。`json.error_message` に理由が記載されています。

   どちらのメッセージにも `json.group_id`、`json.group_path`、`json.new_organization_id` が含まれます。

1. 移管が失敗した場合は、例外を探します。`json.correlation_id : "<correlation-id>"` と `json.exception.class : *` で検索するか、[Sentry](https://new-sentry.gitlab.net/organizations/gitlab/issues/)で `group_path` を使って例外を検索します。
