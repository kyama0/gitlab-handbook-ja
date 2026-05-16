---
title: "Topology Service 向け Cloud Spanner リージョン設定"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-05-08"
authors: ["@a_richter"]
coach:
approvers: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/015_spanner_multiregional/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-04T09:37:20+02:00"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/a_richter" class="text-blue-600 hover:underline">@a_richter</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant-scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-05-08</td>
</tr>
</tbody>
</table>
</div>


Cells アーキテクチャの Topology Service には、強力な整合性保証を持つ高可用性データベースが必要です。Cloud Spanner は[リージョナル](https://cloud.google.com/spanner/docs/instance-configurations#regional-configurations)構成と[マルチリージョナル](https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations)構成の両方を提供します。
私たちの実装では、パフォーマンス、災害復旧機能、コストのバランスが取れた最適な構成を決定する必要があります。

主な検討事項:

- クライアント側のレイテンシーの例: HTTP Router -> Topology Service
- サーバー側のレイテンシー: Paxos レプリケーションなどの Spanner 内部通信
- 災害復旧のニーズとリージョン障害に対する耐性
- 各構成のコストへの影響
- Google が提供する [SLA](https://cloud.google.com/spanner/sla)

検討中のマルチリージョナル構成:

- `nam3`: 米国東部のリード/ライトレプリカと、ヨーロッパとアジアのオプションレプリカ
- `nam11`: 複数の北米リージョンにまたがるリード/ライトレプリカ
- `nam-eur-asia3`: 北米全体のリード/ライト、ヨーロッパとアジアのリードオンリー

## クライアント側レイテンシーテスト

HTTP Router がグローバルからリクエストを送信できる本番環境を模倣するため、現在 us-east1/us-central1 にホストされている Topology Service と各 GCP リージョン間のレイテンシーをテストしました。
テストは GCP VM 上で k6 負荷テストツールを使用して実施し、リージョン間のレイテンシーパターンを示しています。

テスト VM は以下のリージョンに作成されました。

- asia-east1-a (n1-standard-4)
- europe-west1-b (n1-standard-4)
- us-east1 (n1-standard-4)
- us-central1 (n1-standard-4)

k6 テストスクリプトは、30 秒間 1 つの[仮想ユーザー](https://grafana.com/docs/k6/latest/reference/glossary/#virtual-user)で Topology Service の `/v1/classify` エンドポイントへ POST リクエストを行いました。

{{% details summary="K6 レイテンシーテスト手法" %}}
詳細については[こちらのコメント](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/13198#note_2517912631)を参照してください。

<pre><code>import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1, // Number of virtual users
  duration: '30s', // Test duration
};

export default function() {
  const url = 'https://topology-rest.runway.gitlab.net/v1/classify';
  const payload = JSON.stringify({
    type: "CELL_ID",
    value: "2"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  // Check if the request was successful
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}
</code></pre>
{{% /details %}}

### 結果

**ベースライン構成（us-east1/us-central1 デプロイ）:**

| 実行     | us-east1    | europe-west1-b | asia-east1-c |
| ------- | ----------- | -------------- | ------------ |
| 1       | 11.57ms     | 105.69ms       | 182.41ms     |
| 2       | 11.27ms     | 106.12ms       | 188.10ms     |
| 3       | 12.04ms     | 105.12ms       | 182.79ms     |
| **平均** | **11.63ms** | **105.64ms**   | **184.43ms** |

**マルチリージョナル構成（us-east1/us-central1/europe-west1/asia-east1 デプロイ）:**

| 実行     | us-east1    | europe-west1 | asia-east1  | us-central1 |
| ------- | ----------- | ------------ | ----------- | ----------- |
| 1       | 14.35ms     | 17.59ms      | 11.48ms     | 31.30ms     |
| 2       | 14.82ms     | 18.12ms      | 11.23ms     | 32.87ms     |
| 3       | 13.92ms     | 17.21ms      | 11.79ms     | 30.76ms     |
| **平均** | **14.36ms** | **17.64ms**  | **11.50ms** | **31.64ms** |

### 分析

レイテンシーテストにより、マルチリージョナルデプロイを使用した際の国際リージョンでの大幅な改善が明らかになりました。

- **ヨーロッパのレイテンシー改善**: 83% 削減（105.64ms → 17.64ms）
- **アジアのレイテンシー改善**: 94% 削減（184.43ms → 11.50ms）
- **米国東海岸**: 分散ルーティングにより若干増加（11.63ms → 14.36ms）

これらの結果は、提案している `nam11` 構成が北米のユーザーには適しているものの、将来の EU またはアジアベースのデプロイに向けて `nam-eur-asia3` に移行すると大幅なパフォーマンス向上が見込まれることを示しています。

## サーバー側レイテンシー

Spanner はレプリケーションに [Paxos を使用します](https://cloud.google.com/spanner/docs/replication)。マルチリージョナルでは、書き込みの成功は両方のリージョンで完了したことを意味します。
書き込みを高速化するには、両リージョン間のレイテンシーを低く保つ必要があります。
以下の `Performance Dashboard` は、`nam3` に対応するリージョンである `us-east1` と `us-east4` 間のレイテンシーが最小であることを示しています。

![ゾーンペア間のレイテンシー](/images/cells/latency_between_zone_pairs.png)

[ソース](<https://console.cloud.google.com/net-intelligence/performance/global-dashboard?referrer=search&inv=1&invt=Ab2uwg&project=gitlab-staging-1&pageState=(%22performanceDashboardTraffic%22:(%22v%22:%22internal%22),%22performanceDashboardMetric%22:(%22v%22:%22latency%22),%22pdNetworkTierState%22:(%22n%22:%22NETWORK_TIER_UNSPECIFIED%22),%22globalPerformanceDashboardRegions%22:(%22regions%22:%22%5B%5C%22us-central1%5C%22,%5C%22us-east1%5C%22,%5C%22us-east4%5C%22%5D%22),%22performanceDashboardRegions%22:(%22regions%22:%22%5B%5D%22))>)

## 決定事項

以下の変更を加えた [`nam3`](https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations) をベースのインスタンス構成として採用します。

- プライマリとして `us-east1`（`us-east4` の代わりに）: 私たちのプライマリリージョンは `us-east1` です。
- 追加の読み取り専用レプリカ: HTTP Router はグローバルに分散されているため、分類のレイテンシーを改善するために Topology Service も同様にグローバルに分散させる必要があります。そのため追加の読み取り専用レプリカが必要です。

| リード/ライトリージョン | 読み取り専用リージョン | ウィットネスリージョン | オプションの読み取り専用リージョン |
| -------------------------------- | --------------------------------------------- | -------------- | --------------------------------- |
| `us-east1`（プライマリ）、`us-east4` | `us-west2`、`asia-southeast1`、`europe-west1` | us-central1    | `asia-southeast2`、`europe-west2` |

データの暗号化については、Customer-Managed Encryption Keys（CMEK）を実装するのではなく、自動的に有効になる Google のデフォルト暗号化（保存時）を使用します。

## 結果

Spanner のトポロジーを変更すると、[インスタンスの移動](https://cloud.google.com/spanner/docs/move-instance)がトリガーされます。
Terraform を使用するとインスタンスが再作成されてデータが失われる可能性がありますが、
[レガシー Cell を Cells クラスターに追加する](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1625)直前に読み取りレプリカを追加すれば、データの損失は発生しません。

### 利点

1. 必要になるまでのコスト削減: リード/ライトのトポロジーを変更せずに小さく始めて拡張できます。
1. 書き込みのサーバー側レイテンシーが最小化されます。
1. クライアント側レイテンシーのためにヨーロッパやアジアなど他のコンテンツへの拡張が可能です。
1. CMEK と比較して暗号化キーのメンテナンスオーバーヘッドが削減されます。

## 検討した代替案

### 代替案 1: `nam-eur-asia3`

**コンテキスト**: `us-east1` と `us-central1` でのリード/ライトと、すぐに使える読み取り専用リージョン。

**決定**: サーバー側レイテンシーに最適ではなく、リージョンの拡張性が低く、初期コストが高いため採用しません。

### 代替案 2: `nam11`

**コンテキスト**: `us-east1` と `us-central1` でのリード/ライトと、単一のオプション読み取り専用リージョン。

**決定**: サーバー側レイテンシーに最適ではなく、リージョンの拡張性が低いため採用しません。

## コスト分析

| 構成 | コンピュート | レプリケーション | 合計コスト |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- | ---------- |
| [nam3](https://cloud.google.com/products/calculator?hl=en&dl=CjhDaVF3TnpjNVlqZ3paQzFoTldJNExUUmxNVGd0T0RBek9TMWhaR00yTlRNMVpUSTRaRElRQVE9PRAOGiRDRENBM0ZENy0zQ0Y5LTQ1MkQtQkJBMi04NUZGNjU1RUVBM0U)          | $12,138.60 | $888.18     | $13,026.78 |
| [nam11](https://cloud.google.com/products/calculator?hl=en&dl=CjhDaVEzTVRoaE1HTTBNQzB6TldJM0xUUXpNemt0T0dRMU55MDBaVEpqWVdZeE9UTXpPV0VRQVE9PRAOGiRDRENBM0ZENy0zQ0Y5LTQ1MkQtQkJBMi04NUZGNjU1RUVBM0U)         | $11,702.50 | $888.18     | $12,590.68 |
| [nam-eur-asia3](https://cloud.google.com/products/calculator?hl=en&dl=CjhDaVF3WmpJNE5qZzVOQzFrWldVeUxUUTBObUl0WWpFMll5MWxPV000TURKa05qWm1ZamdRQVE5PRAiGiQ1Rjc1REQ3Ny0xREQzLTQ5MEEtOEYwNy02NjVGNUI1QTRFMEU) | $20,751.58 | $1937.12    | $22,688.70 |

この見積もりは以下に基づいています。

- コンピュート容量 5 ノード
- SSD ストレージ 1 TB
- 1 時間あたりの書き込み/変更データ 10 GB
- Enterprise Plus エディション
