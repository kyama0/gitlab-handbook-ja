---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 014: Organization roles を Organization user types に改称'
description: "機能固有のロールとの混同を避けるため、Organization roles を Organization user types に改称することを提案する ADR。"
creation-date: "2026-06-11"
authors: [ "@peterhegman" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/014_organization_roles_renamed_to_organization_user_type/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-26T08:54:58-07:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## コンテキスト

Organization に属するユーザーを保持する `organization_users` テーブルがあります。このテーブルには、ユーザーが Organization に対して持つアクセス権を定義する `access_level` カラムがあります。将来的に、Artifact Registry などの Organization 機能に固有のロールを導入する予定です。私たちは、これらの機能ロールと Organization ユーザーのアクセスレベルとの混同を避けたいと考えています。

### 現在の状態

現在 UI では、Organization ユーザーの `access_level` をそのユーザーの「Organization role」と呼んでいます。選択肢は 2 つあります。

- Organization owner
- Organization user

Organization に属するユーザーは「Member」と呼ばれます。

## 決定

Organization ユーザーの `access_level` は「Organization user type」と呼ばれるようになります。選択肢は 2 つになります。

- Organization Administrator
- Organization Regular User

これは、管理エリアに現在存在するユーザータイプ（Administrator と Regular）と一致します。

Organization に属するユーザーは「Organization user」と呼ばれます。

## 影響

- Instance Administrator と Organization Administrator の間で混乱が生じる可能性があります。
