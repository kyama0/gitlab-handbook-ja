---
owning-stage: "~devops::data stores"
title: 'Cells ADR 007: Cells 1.0 は社内顧客のみ対象（廃止）'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/007_internal_customers/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-21T08:26:37+02:00"
---

## コンテキスト

[当初](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/139519)、Cells 1.0 は新規顧客のみを対象として作成されました。
テストされていないインフラに乗り入れてくれる新規顧客を見つけることは、特に[不足している機能](../iterations/cells-1.0.md)を考えると困難であることが判明しました。
対象顧客が決まっていないと、どの機能を提供すべきかスコープを定義することができません。

## 決定事項

Cells 1.0 は GitLab の社内顧客のみを対象とし、チームメンバーの一部がそのグループを別の Cell に移行してその Cell 上で作業するようにします。
これにより、重要なワークフローを顧客に展開する前に dogfood として検証できます。
Organization は非公開のままであるため、社内顧客のグループとプロジェクトはプライベートにする必要があります。
社内顧客は CI Catalog や Advanced Search のような機能を必要としない場合があります。

移行する最初の社内顧客はまだ特定されていません。
移行はおおよそ以下の計画に沿って進めます。

1. 別の Cell に `GitLab Inc.` Organization を作成する
1. [Direct Transfer](https://docs.gitlab.com/ee/user/group/import/index.html) を使用して、既存の GitLab.com インフラから別の Cell にグループを移動する
1. [Org Mover](https://gitlab.com/groups/gitlab-org/-/epics/12857) が準備でき次第、残りのトップレベルグループを移行する（そのグループに十分な機能セットが揃った時点で行う）。たとえば、`gitlab-org` は Cells 2.0 で移動する予定です。

## 結果

Cells 1.0 のユーザーは 1 つの Organization にのみ所属できるため、一部の GitLab チームメンバーは 2 つのアカウントを管理する必要が生じます。GitLab.com 上のデフォルト Organization にアクセスするアカウントと、別の Cell 上の `GitLab Inc.` にアクセスするアカウントです。
残りの GitLab チームメンバーとコラボレーションしたい場合、これにより一時的にワークフローが複雑になる可能性があります。

## 代替案

唯一の代替案は、パートナーになってくれる新規顧客を探すことです。
この探索は継続中であり、上記の提案によってその結果にかかわらず前進することができます。
