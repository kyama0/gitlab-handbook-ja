---
owning-stage: "~devops::tenant scale"
title: 'Organizations ADR 012: Organization はスコープ付き空間である'
description: 'すべての Organization は、隔離や Cell 配置から独立して、それ自身のスコープ付き空間を占有します。'
creation-date: "2026-06-16"
authors: [ "@alexpooley" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/organization/decisions/012_organization_space/
upstream_sha: 18de125bd3131a62f0a7026bc69c7de124fc6c8a
lastmod: "2026-06-16T15:44:39-07:00"
translated_at: "2026-06-20T13:54:37Z"
translator: codex
stale: false
---

## コンテキスト

Organization は **論理的な境界** です。データ境界を超えて、自身のリソース、名前、機能を所有する自己完結した空間です。その境界は、3 つの独立した形で現れます。

- **スコープ付き空間** — アドレス空間（名前、ルート）における境界。常に存在します。
- **Isolation** — データレイヤーが Organization 間でデータが越境することを実際に防ぐかどうか（[Organization Isolation](../isolation.md) を参照）。段階的に強制されるため、[非隔離](008_non_isolated_organizations_gitlab_com.md)の Organization は、データ境界がまだ強制されていなくても、すでに自身の空間を持っています。
- **Cell 配置** — 物理インフラストラクチャで実現される境界。

これらは直交しています。スコープ付き空間はアドレス可能になった論理境界であるため、データが隔離されているかどうか、Organization が自身の Cell 上に存在するかどうかに関係なく存在します。

## 決定

すべての Organization は、非隔離のものを含めて、自身のスコープ付き空間を占有します。スコープ化はアドレス指定と所有権の判断であるため、隔離が強制されることや、専用 Cell への移動を待ちません。具体的には、次のことを意味します。

1. **自身の名前空間。** 現在、すべてのルーティング可能な名前（例: Group と Project）は、共有された単一のグローバル名前空間（GitLab.com ではクラスター全体）で一意である必要があります。2 つのお客様がどちらも "Marketing" グループを持つことはできず、同じグローバル名を取り合うことになります。Organization の空間はその名前空間を分割するため、名前は Organization 内でのみ一意であればよくなります。
2. **単一で予測可能な変更点。** レガシー URL は保持されますが、リソースが Organization に入ると URL 形式が変わります。その変更は、後で Organization が Cell に移動するときではなく、Organization に入るという 1 つの論理的な地点で行います。パスは Cell をエンコードしないため、Cell 移動によって URL は変わりません。
3. **Organization レベル機能の居場所。** Organization は、Group、Project、User と同様に、URL 空間内に居場所を必要とするセキュリティダッシュボードなどの機能を所有します。

## 結果

- 非隔離 Organization は、後から改造されるのではなく、作成時点からスコープされます。
- このための URL 仕組みは [ADR 004](004_path_scope.md) で決定された `/o/<organization>/` スコープです。
- レガシーシステムから Organization システムへの移行には、例えばレガシーのグローバルルートとスコープ付きルートの共存などの複雑さが伴いますが、これらは基本的に避けられません。
