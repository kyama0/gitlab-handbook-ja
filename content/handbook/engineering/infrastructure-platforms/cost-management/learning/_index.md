---
title: "学習リソース"
description: "コスト管理のさまざまな側面について学ぶ"
upstream_path: "/handbook/engineering/infrastructure-platforms/cost-management/learning/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:26:29Z"
translator: claude
stale: false
---

---

## ベンダー別学習

[GCP](/handbook/engineering/infrastructure-platforms/cost-management/learning/gcp)
[AWS](/handbook/engineering/infrastructure-platforms/cost-management/learning/aws)

### クラウドコストバケット

インフラコストについて最初に理解すべきことは、一般的にいくつかの主要な焦点領域に分類できるということです。以下の領域は、ほとんどの企業において全インフラコストへの貢献度が高い順に記載されています。クラウドプロバイダーのサービスは、これらのバケットを抽象化したものを提供する場合があります（例：サーバーレスコンピューティング）が、その核心において各サービスは依然としてこれら 3 つのインフラ支出バケットのいずれかに分類できます。

- コンピュート
  - サーバーの実行コスト。これらのサービスを実行するために使用されるハードウェアの CPU/RAM コストを含みます
- ストレージ
  - データ保存のコスト。一般的にクラウドではオブジェクトストレージを指しますが、物理ディスクストレージ、データベースストレージなども指します
- ネットワーキング
  - 顧客またはサービス間でデータを送受信するためのコスト

## 一般的なクラウドコスト最適化

実行中のサービスに関係なく、すべてのリソースに適用されるいくつかの基本的なクラウド最適化があります。これらの推奨事項をさらに最適化したり対応したりするには、実行中のアプリケーションやサービスについてより詳細な理解が必要な場合があります。

### コンピュート最適化

- 不要なリソースをオフにする
- 過剰にプロビジョニングされたリソースをダウンサイズする
- パフォーマンス特性（CPU vs RAM vs ストレージ）を最も効率的に利用するようにサーバーを適切なサイズにする
- より新しいインスタンスタイプを優先的に使用する
  - 一般的に新しいインスタンスタイプはよりコスト/パフォーマンスが優れています

### ストレージ最適化

- ストレージライフサイクルポリシーを使用して、アクセスされていないが必要なデータをアーカイブすることでコストを削減する
- 不要なデータを削除する

### ネットワーキング最適化

- 最も直接的なネットワークパスを使用する
  - プロバイダー/大陸/リージョン間のトラフィックは最もコストが高いため、可能な場合は避ける
- ネットワークのヘアピニングを避ける

## コストディメンション

すべての企業に適用される一般的なコストディメンション、および他の企業と類似しているがここで定義する特定のディメンションがあります。

### 一般的なコストディメンション

#### ベンダー

- GCP
- AWS
- Azure
- Elastic
- Cloudflare

#### サービス

これは「プロダクト」とも呼ばれ、両者は互換的に使用でき、内部または外部サービスを指します。

- Compute Engine / EC2
- Object Storage / S3
- GitLab CI

#### SKU

- N1 Predefine Instance Core running in Americas
- Standard Storage US Multi-region

#### 使用タイプ

- コンピュート
- ストレージ
- ネットワーキング

### GitLab 固有のディメンション

#### 機能

- CI Windows Runners
- Gitaly Dedicated Nodes
- Review Apps
- SAST

#### ティア

- Free
- GitLab Internal
- SaaS - Premium
- SaaS - Ultimate

## リソースリンク

- [マルチクラウドサービス比較](https://comparecloud.in/)
