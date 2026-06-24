---
title: 'Organizations リリースプロセス'
description: 'Organization 機能に固有のリリースプロセス。'
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/organization/release_process/"
upstream_sha: ce9fa1b620ec7b7d82d870744ba32e7c4c1fef1c
translated_at: "2026-06-24T07:51:36+09:00"
translator: codex
stale: false
lastmod: "2026-06-23T09:42:20-07:00"
---

このドキュメントでは、特定の Organization 機能と[ステージ](../../../infrastructure-platforms/tenant-scale/organizations/release-stages.md)のリリースプロセスの概要を説明します。

## Artifact Registry Beta（design partners）

私たちは、約 25 の design partners を手動で Organizations にオンボードし、Artifact Registry の使用を開始できるようにします。

### Step 1 - Organizations UI を有効にする

**Owned by:** ~group::organizations

`org_stage_beta` フィーチャーフラグをグローバルに有効にします。

```shell
/chatops run feature set org_stage_beta true
```

このフィーチャーフラグを有効にすると、Organization を持ち、その Organization が [`active` 状態](lifecycle.md#states)であるユーザーに対して、`Your work` サイドバーに `Organizations` メニュー項目が表示されます。つまり、手順 3 と 4 の後まで、ユーザーには UI の変更は見えないはずです。

### Step 2 - design partner の top-level groups（TLGs）を特定する

**Owned by:** ~devops::package

Organizations にオンボードする design partners を特定し、TLG full paths のリストを提供します。  

### Step 3 - TLGs を新しい Organization でバックフィルする

**Owned by:** ~group::organizations

`group` actor を使用して、TLGs に対して `root_group_organization_backfill` フィーチャーフラグを有効にします。 

```shell
/chatops run feature set --group=a-customer-group root_group_organization_backfill true
```

これにより、次が実行されます。

1. TLG と同じ名前およびパスの Organization を作成する
1. TLG をこの Organization に移管する

### Step 4 - Organization を確認し、TLG members を同期する

**Owned by:** ~group::organizations

`group` actor を使用して、TLGs に対して `root_group_organization_confirm` フィーチャーフラグを有効にします。 

```shell
/chatops run feature set --group=a-customer-group root_group_organization_confirm true
```

これにより、次が実行されます。

1. Organization を確認する
1. TLG members を Organization Members として追加する。Owners は Organization Administrators になり、その他すべての Members は Organization Regular Members になります。

### Step 5 - design partners に通知する

**Owned by:** ~devops::package

Artifact Registry を有効化して使い始める方法を説明するドキュメントへのリンクを design partners に通知します。

### Step 6 - Artifact Registry を有効にする

**Owned by:** ~devops::package

お客様には `Your work` サイドバーに `Organizations` メニュー項目が表示されるようになります。お客様は Organization の `Artifacts` メニュー項目の下で有効化できます。有効化すると、Artifact Registry の使用を開始できます。

### Rollback

```shell
/chatops run feature set org_stage_beta false
/chatops run feature set --group=a-customer-group root_group_organization_backfill false
/chatops run feature set --group=a-customer-group root_group_organization_confirm false
```

## Artifact Registry Beta（self-serve）

TBD
