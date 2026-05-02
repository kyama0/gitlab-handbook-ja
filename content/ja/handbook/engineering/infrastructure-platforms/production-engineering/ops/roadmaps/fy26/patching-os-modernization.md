---
title: "FY26 - パッチ適用と OS モダナイゼーション"
upstream_path: "/handbook/engineering/infrastructure-platforms/production-engineering/ops/roadmaps/fy26/patching-os-modernization/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T02:44:36Z"
translator: claude
stale: false
---

## 背景

FY25 において、Ops チームは GitLab.com のサポートインフラに適用されるパッチプロセスのオーナーシップを取得しました。現在注力している領域の概要は以下の通りです。

1. VM ベースのパッチ適用作業のランブック整備
2. 必要なパッチとリブートについてサービスオーナーへの自動通知の実装
3. VM フリートのパッチ適用のための自動化フレームワークの構築

## 北極星（目指す姿）

デプロイされているすべてのソフトウェアは潜在的なセキュリティリスクを持っています。私たちは SaaS 製品のサポートインフラに影響するすべての脆弱性が自動化された方法で検出・解決できるようにすることを目指します。

## FY26 の目標案

1. [Ubuntu 20.04 での新規インスタンスのデプロイを停止する](#stop-deploying-ubuntu-2004)
2. [仮想マシン上で動作する必要があるサービスを文書化する](#document-services-that-must-run-on-virtual-machines)
3. [VM 以外のインフラワークロードにおけるパッチのギャップに対処する](#address-patch-gaps-in-non-vm-infrastructure-workloads)
4. [Dedicated/Cells とプロセスを統一する](#align-processes-with-dedicatedcells)
5. [共有ランナーの COS イメージの更新サイクルを確立する](#establish-update-cadence-for-shared-runner-cos-images)
6. runners-manager インスタンスを Kubernetes に移行する

## 追加詳細

### Ubuntu 20.04 のデプロイ停止

1. この OS は 2025 年 4 月にサポート終了を迎えます
2. 多くのインスタンスタイプは依然として VM 上で動作する必要があり、EOL 前のアーキテクチャ移行は難しい見通しです
3. Production Engineering は FY25 Q4 に Ubuntu 22.04 サポート作業の大部分を完了しました
4. Ubuntu 20.04 を完全に廃止する前に、サービスオーナーと追加テストが必要です

### 仮想マシン上で動作する必要があるサービスの文書化

1. サービスを Kubernetes に移行したり、クラウドネイティブな代替手段に置き換えたりすることを議論するケースが定期的に発生します。このような知識をハンドブックページ（または同様のもの）に集約することで、サービスのアーキテクチャ変更が難しい理由や、検討可能な代替案とその前提条件を把握できるようになります。
2. 理想的には、よりメンテナンスしやすいインフラへのサービスデプロイの実現可能な選択肢の判断や、将来の計画立案に役立てることができます。

### VM 以外のインフラワークロードにおけるパッチのギャップへの対処

1. Kubernetes ポッド、CloudRun コンテナ、Cloudflare workers など、VM 以外のインフラワークロードを調査します
2. 既存のワークフローがこれらを適切に最新状態に保っているかどうかを判断します
3. 発見と更新プロセスの不備に対処するための自動化を追加します

### 共有ランナーの COS イメージの更新サイクルを確立する

1. CI ジョブ VM 上の Container Optimized OS に対して標準化された更新スケジュールを実装し、一貫したセキュリティパッチ適用を確保します

### Dedicated/Cells とのプロセス統一

1. Cells/Dedicated デプロイメントにおけるセキュリティパッチ適用の現状を評価し、現在の GitLab.com デプロイメントとの重複を特定します
2. パッチ適用プロセスの不備を特定して対処します
3. プロセスを統合し、可能な限り冗長性を排除することで効率を高める機会を探ります
