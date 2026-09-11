---
title: 'Organizations リリースプロセス'
description: 'Organization 機能に固有のリリースプロセス。'
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/organization/release_process/"
upstream_sha: "4246c71d16beefada2a847b698b152ff280860c5"
translated_at: "2026-09-11T21:09:10+00:00"
translator: codex
stale: false
lastmod: "2026-09-11T13:45:57-07:00"
---

このドキュメントでは、特定の Organization 機能と[ステージ](../../../infrastructure-platforms/tenant-scale/organizations/release-stages.md)のリリースプロセスの概要を説明します。

## ベータ

### Artifact Registry（デザインパートナー）

私たちは、少数のデザインパートナーを手動で Organizations にオンボーディングし、Artifact Registry の使用を開始できるようにします。これは、[スタンドアロンの組織のベータ](#standalone-organizations-with-self-serve-onboarding)が利用可能になるまでの暫定的なリリースプロセスです。

#### 手順 1 - フィーチャーフラグを有効にする

**担当：** ~group::organizations

[Organization のフラグ](https://docs.gitlab.com/development/organizations/release_status/)を以下の状態に移行する必要があります。
この状態はベータに固有のものです。ベータ後は、これらのフラグを他のステージへ移行できます。

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
/chatops run feature set ui_for_organizations true
```

#### 手順 2 - デザインパートナーのトップレベルグループ（TLG）を特定する

**担当：** ~devops::package

Organizations にオンボーディングするデザインパートナーを特定し、TLG のフルパスのリストを提供します。

#### 手順 3 - 新しい Organization で TLG をバックフィルする

**担当：** ~group::organizations

`group` アクターを使用して、TLG に対して `root_group_organization_backfill` フィーチャーフラグを有効にします。

```shell
/chatops run feature set --group=a-customer-group root_group_organization_backfill true
```

これにより、次が実行されます。

1. TLG と同じ名前およびパスの Organization を作成する
1. TLG をこの Organization に移管する

#### 手順 4 - Organization を確定し、TLG メンバーを同期する

**担当：** ~group::organizations

`group` アクターを使用して、TLG に対して `root_group_organization_confirm` フィーチャーフラグを有効にします。

```shell
/chatops run feature set --organization=a-customer-group root_group_organization_confirm true
```

これにより、次が実行されます。

1. Organization を確定する
1. TLG メンバーを Organization Members として追加する。Owners は Organization Administrators になり、その他すべての Members は Organization Regular Members になります。

#### 手順 5 - Artifact Registry UI のフィーチャーフラグを有効にする

**担当：** ~group::organizations

作成して確定したばかりの組織に対して、`artifact_registry_ui` フィーチャーフラグを有効にします。

```shell
/chatops run feature set --organization=a-customer-group artifact_registry_ui true
```

これにより、Organization に Artifact Registry UI が表示されます。

#### 手順 6 - デザインパートナーに通知する

**担当：** ~devops::package

Artifact Registry を有効化して使い始める方法を説明するドキュメントへのリンクをデザインパートナーに通知します。

#### 手順 7 - Artifact Registry を有効にする

**担当：** ~devops::package

お客様には `Your work` サイドバーに `Organizations` メニュー項目が表示されるようになります。お客様は Organization の `Artifacts` メニュー項目の下で有効化できます。有効化すると、Artifact Registry の使用を開始できます。

#### ロールバック

```shell
/chatops run feature set ui_for_organizations false
/chatops run feature set --group=a-customer-group root_group_organization_backfill false
/chatops run feature set --organization=a-customer-group root_group_organization_confirm false
/chatops run feature set --organization=a-customer-group artifact_registry_ui false
```

### セルフサービスのオンボーディングを備えたスタンドアロンの組織 {#standalone-organizations-with-self-serve-onboarding}

#### 手順 1

**担当：** ~group::organizations

[Organization のフラグ](https://docs.gitlab.com/development/organizations/release_status/)を以下の状態に移行する必要があります。

| フラグ                              | ステージ        | 説明                                                            |
| --------------------------------- | ------------ | ---------------------------------------------------------------------- |
| `org_creation`                    | Experimental | グローバルページまたは公開 API から組織を作成します。               |
| `org_switcher`                    | Experimental | 組織切り替え用のドロップダウンコンポーネント。                          |
| `create_org_from_group_settings`  | Beta         | グループ設定からトップレベルグループの組織を作成します。  |
| `org_admin_area`                  | LA (100%)    | 組織オーナー向けの組織管理エリア。                       |
| `org_pages`                       | LA (100%)    | `Organizations::ApplicationController` を継承する組織ページ。 |
| `your_work_sidebar_org_menu_item` | LA (100%)    | `Your work` サイドバーに `Organizations` メニュー項目を表示します。            |

`create_org_from_group_settings` は `--group` アクターで使用できるため、Beta のままとします。`org_admin_area`、`org_pages`、`your_work_sidebar_org_menu_item` は、お客様が Organization を作成した後にこれらを利用可能にするためのアクターがないため、LA (100%) に移行する必要があります。これらのフラグは Organization を持つユーザーのみが利用できる機能を制御し、Organization の作成自体は引き続きグループアクターで制御されるため、安全に LA (100%) にできます。

#### 手順 2 - デザインパートナーのトップレベルグループ（TLG）を特定する

**担当：** ~group::organizations

Organizations にオンボーディングするデザインパートナーを特定し、TLG のフルパスのリストを提供します。

#### 手順 3 - TLG から Organization を作成する機能を有効にする

**担当：** ~group::organizations

デザインパートナーの TLG に対して `org_stage_beta` フィーチャーフラグを有効にします

```shell
/chatops run feature set --group=a-customer-group org_stage_beta true
```

#### 手順 4 - お客様が TLG から Organization を作成する

**担当：** ~group::organizations

お客様は自分の TLG に移動 -> **設定 > 一般 > 詳細** を選択し、`Create an Organization`
UI を使用します。これにより Organization が作成され、TLG（および選択した他の所有 TLG）がその Organization に移動し、Organization の状態が `active` に設定されます。

その後、`Your work` サイドバーに `Organizations` メニュー項目が表示され、Organizations を使用できます。
