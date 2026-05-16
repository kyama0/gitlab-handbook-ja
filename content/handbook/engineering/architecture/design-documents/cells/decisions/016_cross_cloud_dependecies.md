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


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant-scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-07-21</td>
</tr>
</tbody>
</table>
</div>


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
