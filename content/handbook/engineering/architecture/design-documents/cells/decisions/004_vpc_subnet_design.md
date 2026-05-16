---
owning-stage: "~devops::data stores" # because Tenant Scale is under this
title: 'Cells ADR 004: Cell ごとに 1 つの VPC、Cells 間の内部通信には Private Service Connect を使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/004_vpc_subnet_design/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2024-08-23T13:02:20+00:00"
---

## 背景

[この Issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25069) では次のことを議論しました:

- 1 つの VPC/サブネットに複数の Cells を置くべきか、1 つだけ置くべきか
- Cells 間の通信に [VPC Peering](https://cloud.google.com/vpc/docs/vpc-peering)、[Shared VPC](https://cloud.google.com/vpc/docs/shared-vpc)、または [Private Connect Service](https://cloud.google.com/vpc/docs/private-service-connect) のいずれを使うべきか

## 決定

Cell ごとに 1 つの VPC を持ち、リージョンごとに 1 つのサブネット（GKE 内部のサブネットを除く）を持ち、必要に応じて Cells 間の通信は [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect) を介して行うことに決定しました。

この決定の動機はセキュリティとシンプルさです:

- [ADR 002](002_gcp_project_boundary.md) で決定された Cell ごとに 1 つの GCP プロジェクトという方針により、同じ VPC 内に複数の cell を配置する可能性は排除されます。
- 各 Cell は独自の隔離された VPC に存在し、Cell 間にファイアウォールルールを設定する必要がなく、IP アドレス範囲の競合もありません。
- 各 Cell は他の Cells から到達可能である必要のあるサービスのみを公開し、その際にも IP アドレスの競合はありません。

## 結果

Cell ごとに 1 つの VPC を持つことで、IP アドレス空間の重複を心配する必要がなくなり Cell の provisioning と管理がより簡単になり、また Cells はデフォルトで完全に隔離されるためセキュアになります。

Private Service Connect は内部アプリケーションロードバランサのために [追加コスト](https://cloud.google.com/vpc/pricing#internal-https-lb) を発生させます。これは Cells 間のトラフィック量によって影響の大きさが変わる可能性があります。

## 代替案

VPC peering は [デフォルトで VPC ごとに 50 peering までに制限](https://cloud.google.com/vpc/docs/quota#vpc-peering) されており、shared VPC は [100 host project に制限](https://cloud.google.com/vpc/docs/quota#shared-vpc) されています。これらは Cells がスケールできる範囲を制約します。また、重複を避けるために Cell ごとに一意の IP アドレス範囲を割り当てる必要があり、サブネット間を分離するために追加のセキュリティ対策（ファイアウォールルールなど）も必要になります。
