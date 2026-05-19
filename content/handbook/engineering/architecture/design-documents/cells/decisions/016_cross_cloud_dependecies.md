---
title: "クラウド間の依存関係"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-07-21"
authors: ["@sxuereb"]
coach:
approvers: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/016_cross_cloud_dependecies/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-22T15:16:00+02:00"
---


{{< engineering/design-document-header >}}


## コンテキスト

Cell は AWS と GCP の両方のクラウドプロバイダーで動作します。
これにより、両方のクラウドプロバイダーで Cell を個別にプロビジョニングする必要があるという複雑さが生じます。

## 決定事項

あるクラウドプロバイダーで Cell をプロビジョニングする際、他のクラウドプロバイダーに依存すべきではありません。

例:

- **ルート CA**: GCP に単一の共有ルート CA を持つのではなく、各クラウドプロバイダーで個別のルート CA を管理します。
- **ランタイムアーティファクト**: GitLab アプリケーションの実行に必要な Docker イメージを [Google Artifact Registry](https://cloud.google.com/artifact-registry/docs) と [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) の両方にプッシュします。

この分離の利点:

- **クリーンなアーキテクチャ**: コードベースはクラウドプロバイダー間の明確な分離を維持します。
- **コスト最適化**: クラウド間のイングレス/エグレスコストを排除します。
- **耐障害性の向上**: 単一のクラウドプロバイダーで障害が発生した場合でも、もう一方のプロバイダーで Cell を運用し続けることができます。

## 結果

- **データの重複**: クラウド間でいくつかのデータ（Docker イメージ、Helm チャート）を重複させる必要がありますが、これはわずか数 GB のデータに過ぎません。
- **メンテナンスの増加**: 重複したインフラコンポーネントを管理することで、追加の運用オーバーヘッドが発生します。
- **同期の複雑さ**: 両方のクラウドプロバイダー間でアーティファクトの整合性を確保する必要があります。これにより AWS と GCP 環境間で設定のドリフトが発生するリスクが増大し、デバッグが困難な問題やインシデントが発生する可能性があります。

## 代替案

共有リソース（例: GCP のみのルート CA）に対して 1 つのクラウドプロバイダーをプライマリソースとして使用する方法があります。クラウド間の依存関係と単一障害点の可能性があるため、この案は却下されました。
