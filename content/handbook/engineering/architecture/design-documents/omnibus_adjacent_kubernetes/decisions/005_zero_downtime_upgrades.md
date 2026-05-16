---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 005: ゼロダウンタイムアップグレード"
description: "OAK のゼロダウンタイムアップグレード（ZDU）サポートに関する決定: ZDU は Omnibus 固有の関心事ではなく、コンポーネントレベルのオーケストレーションの関心事です。"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/005_zero_downtime_upgrades/
upstream_sha: a27a2f7fbaedbd4b422d73ed991c16ee9a112ca9
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-22T16:49:11-04:00"
---

## 概要

この ADR は OAK のゼロダウンタイムアップグレード（ZDU）サポートに関する決定を文書化します。OAK デプロイメントでは、Omnibus GitLab が Kubernetes 内の高度なコンポーネントと並行して実行されます。OAK における ZDU は Omnibus 固有の関心事ではなく、コンポーネントレベルのオーケストレーションの関心事です。高度なコンポーネントは、GitLab Omnibus のアップグレードシーケンスに対するアップグレード中の依存関係を作ることなく、ZDU を独立してサポートするように設計される必要があります。

## ディスカバリーからの主要な発見

Omnibus にはすでに[ゼロダウンタイムアップデートドキュメント](https://docs.gitlab.com/update/zero_downtime/)に文書化された ZDU 手順があります。ZDU はマルチノード Omnibus デプロイメントにのみ適用されます。単一ノードデプロイメントではダウンタイムが必要です。

高度なコンポーネントの場合、ZDU はコンポーネントの設計に依存します。各コンポーネントは機能レベルで ZDU をサポートする必要があります。完全な HA とゼロダウンタイムアップグレードには、コンポーネントの Helm チャートで定義された適切な Pod ドレインとローリングアップデート戦略を持つマルチノード Kubernetes クラスターが必要です。

各高度なコンポーネントのアップグレードは GitLab コンポーネントのアップグレードシーケンスとは独立している必要があります。Omnibus のアップグレードサイクルの前、後、または外で実行可能である必要があります。Omnibus のアップグレード中の状態への依存は避ける必要があります。例えば、PostgreSQL がアップグレードされた後だが Rails の前にのみアップグレードできるコンポーネントは許可されません。

## 決定事項

Omnibus ZDU は[ゼロダウンタイムアップデートドキュメント](https://docs.gitlab.com/update/zero_downtime/)の既存のガイダンスに従います。OAK デプロイメントに対して Omnibus 固有の変更は必要ありません。

各プロダクトチームはコンポーネントの ZDU 設計と文書化のオーナーシップを持ちます。これには、コンポーネントを ZDU を独立してサポートするように設計すること（マルチノードデプロイメント、ローリングアップデート、Pod 中断予算）、アップグレードプロセスの文書化、ZDU 手順の検証が含まれます。コンポーネントは Omnibus のアップグレードシーケンスへの依存関係を作ってはなりません。

Omnibus は高度なコンポーネントのアップグレードのためのオートメーションやオーケストレーションを提供しません。

## お客様ワークフロー

ゼロダウンタイムアップグレードを計画しているお客様は、以下のワークフローに従います:

1. マルチノード Omnibus のアップグレード手順については ZDU ドキュメントを参照する。
2. 各高度なコンポーネントについて、アップグレードのタイミング（Omnibus の前、後、または独立）を決定するためにコンポーネント固有の ZDU ドキュメントを参照する。
3. アップグレード計画を設計し、文書化された順序でアップグレードを実行する。

OAK ドキュメントはこのワークフローの概要を提供し、お客様をコンポーネント固有の ZDU ガイダンスに誘導します。

## 参考資料

1. [ゼロダウンタイムアップデートドキュメント](https://docs.gitlab.com/update/zero_downtime/)
1. [ディスカバリー work item #9692](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/9692)
