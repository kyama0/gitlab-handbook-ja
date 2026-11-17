---
title: "Artifact Registry ADR 001: Organizations をアンカーポイントとする"
owning-stage: "~devops::package"
description: "Artifact Registry を Organizations にアンカーする決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/001_organizations_as_anchor_point/
upstream_sha: ae7cb222d67ee0dd31f3319c8c70f0fabda2633b
translated_at: "2026-11-17T21:21:56.719409+00:00"
translator: claude
stale: false
lastmod: "2026-11-17T11:47:24+01:00"
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## 背景 {#context}

Artifact Registry には、データ、アクセス制御、分離の境界となる、アンカーとしての GitLab エンティティが 1 つ必要です。
候補となるエンティティは、次の 2 つです。

1. **[Organizations](https://docs.gitlab.com/user/organization/)**：グループとプロジェクトを格納し、会社全体や事業部門を表すものです。
1. **トップレベルグループ**：グループ階層のルートです。

会社は複数のトップレベルグループを持つことが多く、そのアーティファクトはグループをまたいで共有されます。

## 決定 {#decision}

**Artifact Registry は、Organizations のみにアンカーします。**

レジストリが保持するものはすべて、Organization が所有するネームスペースを通じて Organization に属します（[ADR-022](022_namespace_decoupling.md)）。
トップレベルグループをアンカーにはしないため、実装経路は 1 つです。

### 常に満たすべき条件 {#what-must-always-hold}

| # | 制約 | 機械的に検証可能か？ |
| --- | --- | --- |
| 1 | **すべてのネームスペースは Organization にアンカーします。** GitLab では、ネームスペースのアンカーは Organization を指し、グループ、プロジェクト、ユーザーを指すことはありません。 | はい：すべてのネームスペースのアンカーが Organization を指します |
| 2 | **すべてのものは 1 つのネームスペースに属します。** リポジトリ、アーティファクト、ライフサイクルポリシーはそれぞれ、必ず 1 つのネームスペースと、それを通じて 1 つの Organization に属するため、Organization のデータを一体として Cells 間で移動できます。 | はい：すべてのレコードの帰属先が必ず 1 つのネームスペースに定まります |
| 3 | **ネームスペースは分離します。** あるネームスペースのリクエストや参照が、別のネームスペースのレコードに到達することはありません。 | はい：1 つのネームスペースをスコープとする操作が、別のネームスペースのレコードを読み取ったり変更したりすることはありません |

## 影響 {#consequences}

### 利点 {#positive}

1. **会社全体で 1 つの境界**：Organization はトップレベルグループを包含するため、グループ間で権限を同期せずに、1 つのネームスペースですべてのグループに対応できます。
1. **後からの移行が不要**：顧客は、組織の境界としてトップレベルグループを置き換えるエンティティから使い始めるため、レジストリをグループから Organizations に移動する必要がありません。
1. **Cells との整合性**：Organizations は Cells のシャーディング境界であるため、レジストリのデータは Organization とともに移動します。

### 欠点 {#negative}

1. **Organizations が必須**：Organization がない顧客はレジストリを利用できないため、各インストール形態で利用できるのは、Organizations が利用可能な場合だけです。

## 代替案 {#alternatives}

### 何もしない：アーティファクトをプロジェクトとグループに保持する {#do-nothing-keep-artifacts-in-projects-and-groups}

アーティファクトをプロジェクトやグループに紐付けたまま、Package Registry と Container Registry に保持します。

却下理由：会社のアーティファクト、アクセスルール、ストレージは、多くのグループとプロジェクトにまたがっており、トップレベルグループより上でそれらをまとめるものがありません。

### トップレベルグループ {#top-level-groups}

レジストリをトップレベルグループにアンカーし、後から Organizations に移行します。

却下理由：

- 顧客は後から、レジストリをグループから Organizations に移動することになります。
- GitLab のように複数のトップレベルグループを持つ会社では、レジストリを分割するか、アーティファクト専用の別グループを用意し、グループ間で権限を同期する必要があります。

### Organizations とトップレベルグループの両方 {#both-organizations-and-top-level-groups}

どちらのレベルでもレジストリを提供します。

却下理由：いずれ顧客が離れるトップレベルグループの経路のために、2 つの実装を構築し、整合性を維持することになります。
