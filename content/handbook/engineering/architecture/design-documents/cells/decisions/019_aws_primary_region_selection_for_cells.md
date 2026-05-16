---
title: "Cells インフラストラクチャの AWS プライマリリージョン選定"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-05-08"
authors: ["@tkhandelwal3"]
coach: "@sxuereb"
approvers: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/019_aws_primary_region_selection_for_cells/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-26T15:28:39+02:00"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/tkhandelwal3" class="text-blue-600 hover:underline">@tkhandelwal3</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant-scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-05-08</td>
</tr>
</tbody>
</table>
</div>


## 概要

この ADR は、GCP でホストされる Topology Service に対する包括的なレイテンシテストに基づき、Cells インフラストラクチャのプライマリ AWS リージョンとして **`us-east-1`（バージニア北部）** を使用する決定を文書化します。

## コンテキスト

Cells アーキテクチャの進化の一環として、Topology Service などの重要なインフラストラクチャコンポーネントを GCP に維持しながら、最初の Cell のプロビジョニングに AWS を使用しています。このクラウドをまたぐアーキテクチャでは、最適なパフォーマンスを確保するためにネットワークレイテンシを慎重に考慮する必要があります。

AWS Cell と GCP インフラストラクチャ間のクラウドをまたいだ通信は以下に影響します：

- 組織の分類とルーティング
- レガシー Cell から Cells へ組織を移行する際のデータ移行
- Cell のディスカバリとヘルスチェック
- 設定管理

このアーキテクチャを踏まえると、AWS ホストの Cell と GCP ホストの Topology Service 間のレイテンシは直接的に以下に影響します：

- [リソースのクレーム](../topology_service.md#claim-service)のレイテンシ
- レガシー Cell から Cell への組織移行時のデータ転送速度
- Git トラフィックの SSH ルーティング

## 問題の概要

以下を考慮しながら、Topology Service へのレイテンシを最小化する最適な AWS リージョンを決定する必要があります：

- ネットワークパフォーマンスとレイテンシ特性
- 将来のスケーラビリティ要件
- トラフィックの地理的分散
- ディザスタリカバリ能力
- 機能の利用可能性

## テスト手法

### テストインフラストラクチャ

- **負荷テストツール**: 一貫した負荷を生成するための[カスタムスクリプト](https://gitlab.com/sxuereb/cells-aws/-/blob/2fdcf7bd6fbee0431b06683bec40fde4d83a1a88/classify.js)を使用した k6
- **テスト期間**: リージョンごとに 360 秒を 5 回実施
- **仮想ユーザー**: 100 同時接続
- **ターゲットエンドポイント**: `https://topology-rest.gitlab.net/v1/classify`（本番 Topology Service）
- **インスタンスタイプ**: `m5a.xlarge`（4 vCPU、16GB RAM、最大 10Gbps ネットワーク）

### テスト対象リージョン

- **us-east-1**: バージニア北部（GCP us-east1 に地理的に最も近い）
- **us-east-2**: オハイオ

注意：AWS には `us-central-1` は存在せず、`us-east` と `us-west` リージョンのみ利用可能です。

### テスト設定

```javascript
// k6 テスト設定
export const options = {
  vus: 100,           // 100 仮想ユーザー
  duration: '360s',   // 1回あたり 6 分間
};
```

テストは [GitLab Issue #475 コメント](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/475#note_2705749726)で実施・文書化されました。

## 結果

### レイテンシ測定

以下の結果は各リージョンの 5 回のテスト実行の平均値です：

| リージョン | 中央値 | P95 | P99.9 | リクエスト/秒 |
|--------|--------|-----|-------|--------------|
| **us-east-1** | 23.608ms | **32.31ms** | **80.88ms** | 3,589/秒 |
| **us-east-2** | 43.768ms | 51.234ms | 106.462ms | 2,031/秒 |

> [!note]
> 完全なテストデータはこちらを参照してください：<https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/475#note_2705749726>

### パフォーマンス分析

1. **P95 レイテンシ**: `us-east-1` は `us-east-2` より **40% 優れたパフォーマンス** を示します
   - us-east-1：32.31ms
   - us-east-2：51.234ms
   - 改善率：約 37% 削減

2. **P99.9 レイテンシ**: `us-east-1` はテールレイテンシで **約 30% 優れたパフォーマンス** を示します
   - us-east-1：80.88ms
   - us-east-2：106.462ms
   - 改善率：約 24% 削減

3. **スループット**: `us-east-1` は **76% 高いリクエストスループット** を達成
   - us-east-1：約 3,589 リクエスト/秒
   - us-east-2：約 2,031 リクエスト/秒

## 決定事項

AWS Cells デプロイのプライマリリージョンとして **`us-east-1`（バージニア北部）** を使用します。

### 根拠

1. **優れたパフォーマンス**: 40% 優れた P95 レイテンシにより、大多数のリクエストでより良いユーザーエクスペリエンスを確保
2. **高スループット**: 76% 高いリクエスト処理能力により、より良いスケーラビリティを実現
3. **地理的近接性**: Topology Service がホストされている GCP の us-east1 に最も近い AWS リージョン
4. **ネットワークパスの最適化**: バージニア北部と GCP の東部リージョン間のネットワークパスが短い
5. **一貫性**: テスト実行間でより安定したパフォーマンス特性

## 結果と影響

### ポジティブな影響

1. **パフォーマンスの向上**: 低いレイテンシが Cell オペレーションの応答時間の短縮につながります。
2. **スケーラビリティの向上**: 高いスループット能力により、より効率的なリソース活用が可能になります。
3. **最適なデータ転送**: レイテンシの低減により、レガシー Cell から Cells への組織移行が効率化されます。
4. **機能の利用可能性**: us-east-1 では新しい AWS 機能が最初にリリースされるため、最新機能へのアクセスが確保されます。

### ネガティブな影響

1. **リージョン集中リスク**: `us-east-1` は高密度のインフラストラクチャにより、歴史的に最も多くの AWS インシデントが発生しています。
2. **信頼性への懸念**: 他の AWS リージョンと比較してインシデント発生率が高く、システム全体の信頼性に影響を与える可能性があります。
3. **クォータ申請の遅延**: 最も混雑している AWS リージョンであるため、Cell プロビジョニングに必要なクォータ増加の申請処理時間が長くなる可能性があり、デプロイのタイムラインに影響する可能性があります。

### 緩和策

1. **マルチ AZ デプロイ**: us-east-1 内の複数のアベイラビリティゾーンにデプロイして AZ 固有の障害を軽減
2. **セカンダリリージョンの準備**: Geo を使用して us-east-2 をバックアップリージョンとして維持
3. **積極的なクォータ管理**: Cell プロビジョニングのニーズを見越して事前にクォータ増加申請を提出し、潜在的な遅延を考慮したバッファ容量を維持
