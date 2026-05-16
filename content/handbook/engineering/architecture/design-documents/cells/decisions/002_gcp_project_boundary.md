---
owning-stage: "~devops::data stores" # because Tenant Scale is under this
title: 'Cells ADR 002: Cell ごとに 1 つの GCP プロジェクト'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/002_gcp_project_boundary/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## 背景

各 Cell をそれぞれの GCP プロジェクトに置くべきか、すべての Cells を 1 つの GCP プロジェクトに置くべきかを [この Issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25067) で議論しました。

## 決定

Cell ごとに 1 つの GCP プロジェクトを持つべきだと、全会一致で決定されました。これにより、Cells 間のより強い分離、現在の Dedicated ツーリングとの互換性、プロジェクトごとのクォータに到達する可能性の低減、変更ロールアウトの容易さ（プロジェクトごとに変更をロールアウトできる）が得られます。

作成可能なプロジェクト数に制限はありません。

## 結果

この決定により、Cell 間のネットワーキングが若干複雑になります。とはいえ、現時点ではそれが本当に必要かは明確ではなく、[議論中](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25069) です。

## 代替案

上記で議論された選択肢が、実質的に唯一可能な 2 つの結果です。
