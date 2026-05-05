---
title: "/api/v4/jobs/request エンドポイント用の独立した Cloudflare Worker"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2026-02-03"
authors: ["@tkhandelwal3"]
approvers: ["@sxuereb"]
coach: "@sxuereb"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/025_separate_worker_for_jobs_request_endpoint/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## コンテキスト

`/api/v4/jobs/request` エンドポイントは GitLab Runner が [CI ジョブリクエストのロングポーリング](https://docs.gitlab.com/ci/runners/long_polling/)に使用し、接続は最大 50 秒間オープンのままになります。同じエッジロケーションの同一の Cloudflare Worker アイソレートにルーティングされる複数の並行ロングポーリング接続が、接続が完了する前にアイソレートのメモリ制限に達し、`exceededMemory` 例外が発生します。

これらの例外はユーザーに影響を与えません（クライアントは自動的にリトライし、ランタイムは新しいアイソレートを起動します）が、HTTP Router のエラーメトリクスに大きなノイズが発生します。[インシデント INC-6665](https://app.incident.io/gitlab/incidents/6665) では、このノイズにより本物の問題を特定することが困難になり、解決に 10 時間かかりました。`/api/v4/jobs/request` のエラーが実際の問題を隠していたため、502 エラーが発生していたにもかかわらずエラー比率は正常レベルを示していました。

HTTP Router のアラートの正確なエラーレートメトリクスは、運用上の可視性に不可欠です。現在の状態では、ジョブエンドポイントからのベースラインノイズが高すぎて、高いエラー比率のアラートを設定することができません。

参考：[gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team#632](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/632)

## 決定事項

`/api/v4/jobs/request` エンドポイントを処理するために特別に設計された独立した Cloudflare Worker デプロイを作成します。この Worker はメイン HTTP Router と並行してデプロイされますが、独自のメトリクスとエラー追跡を持ちます。

実装には以下が含まれます：

1. HTTP Router 設定に追加の環境を追加します（例：`gstg-jobs-requests`、`gprd-jobs-requests`）。
2. jobs-requests エンドポイント用の 2 つの新しい環境をデプロイするためにデプロイメントパイプラインを更新します。
3. Cloudflare 設定で `/api/v4/jobs/request` に対する明示的な Worker ルートを追加します。Cloudflare のルートマッチング動作は最も具体的なものから一般的なものへの順序であるため、このルートは一般的な HTTP Router ルートよりも優先されます。

[Job Router](../../runner_job_router/_index.md) が実装されてすべての Runner がロングポーリングから切り替わったら、この独立した Worker を削除してルーティングをメイン HTTP Router に統合できます。

## 結果と影響

### ポジティブ

- **クリーンなエラーメトリクス**: メイン HTTP Router はジョブエンドポイントからのノイズなしに正確なエラー率を持ち、本物の問題に対する適切なアラートが可能になります。
- **直接シグナル vs 推測**: Worker の健全性のプロキシとしてエッジエラー率に頼るのではなく、HTTP Router の直接的でクリーンなメトリクスが得られます。
- **よりクリーンな廃止パス**: WebSocket への移行が完了したら、メイン HTTP Router やそのメトリクスパイプラインに触れることなく、専用 Worker を単純に廃止するだけです。
- **コスト中立**: トラフィックは複製されるのではなく分割されるため、リクエストの総数と CPU 時間は変わりません。
- **将来の Worker の基盤**: 将来の[コンテナレジストリルーティング](../container_registry_routing_service.md)や KAS に対する同様の分離の基盤を築きます。
- **フォークのメンテナンス不要**: 代替案とは異なり、フォークされたエクスポーターのメンテナンスが不要です。

### ネガティブ

- **メンテナンスのオーバーヘッド**: 追加の Worker のデプロイと管理が必要です。
- **複雑さの増加**: ネットワークスタックにすべてのエンジニア オン コール（EOC）が理解する必要がある別のコンポーネントが追加されます。

## 代替案

### 1. エンドポイントを WebSocket に切り替える

WebSocket 接続に切り替えることでロングポーリングを排除します。Worker が WebSocket 経由でプロキシするよう調整した後は、[プロキシ中に Worker が使用され続けないため、メモリの蓄積を回避できます](https://blog.cloudflare.com/workers-optimization-reduces-your-bill/#but-it-doesnt-stop-there)。

以下の理由で即時実施が困難：

- すでに [Job Router](../../runner_job_router/_index.md) の一部として開発中。
- 本番環境での実装に相当な時間がかかります。
- 後方互換性のためにロングポーリングを引き続きサポートする必要があります。

### 2. ポーリング時間の削減

リクエストの蓄積による `exceededMemory` を防ぐため、ポーリング間隔を 50 秒から 5 秒に削減します。

以下の理由で却下：

- Runner からサーバーへの接続が 10 倍になります。
- 保留中のジョブキューの SLO を使い果たす可能性が高い。

### 3. Tail Worker + Workers Analytics Engine の使用

Tail Worker を使用してソースでエラーを分類し、`/api/v4/jobs/request` の `exceededMemory` を予想されるノイズとしてマークしながら、本物のエラーのみにアラートを出します。分類されたデータポイントを [Worker Analytics Engine](https://developers.cloudflare.com/analytics/analytics-engine/get-started/) に書き込み、[Grafana からクエリ](https://developers.cloudflare.com/analytics/analytics-engine/grafana/)します。

以下の理由で却下：

- 書き込みだけで[約 $25,000/月のコスト](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/632#note_3043315473)の見積もり（1 ヶ月あたり 900 億リクエスト）。
- Tail Worker の CPU 時間に対する追加コスト。
- 別の Worker コンポーネントが加わり複雑さが増す。

### 4. パスディメンションを持つ cloudflare-exporter のフォーク

[lablabs/cloudflare-exporter](https://github.com/lablabs/cloudflare-exporter) にパスディメンション付きの新しいメトリクス `cloudflare_zone_edge_errors_by_path` を追加し、Prometheus メトリクスのラベル設定を使って `/api/v4/jobs/request` エンドポイントからのノイズをフィルタリングします。

実装には以下が含まれます：

1. `zone`、`account`、`status`、`host`、`path` ラベルを持つ新しいメトリクスの追加
2. ジョブ/リクエストエンドポイントのメトリクスを削除しながら他のパスのカーディナリティを削減するための Prometheus リライトルールの使用：

```yaml
metric_relabel_configs:
  # ジョブ/リクエストエンドポイントのメトリクスを完全に削除（予想されるノイズ）
  - source_labels: [__name__, path]
    regex: 'cloudflare_zone_edge_errors_by_path;/api/v4/jobs/request'
    action: drop

  # 残りのメトリクスについては、カーディナリティを削減するためパスを空の文字列に置き換える
  - source_labels: [__name__]
    regex: 'cloudflare_zone_edge_errors_by_path'
    target_label: path
    replacement: ''
    action: replace
```

このメトリクスサポートを追加するための[アップストリーム PR が作成](https://github.com/lablabs/cloudflare-exporter/pull/193)されています。

以下の理由で却下：

- このような特定のユースケースに対してアップストリーム PR が承認される可能性が低いため、`lablabs/cloudflare-exporter` のフォークを無期限に維持する必要がある。
- パスディメンションは正規化しても高いカーディナリティを生み出し、Prometheus のパフォーマンスに影響を与える可能性がある。
- Worker の健全性のプロキシとしてエッジエラー率に頼るため、誤検知が発生する可能性がある（例：エッジで KAS が失敗した場合、HTTP Router の問題としてアラートが発生する）。
- 他のチームも依存している共有コンポーネントに対する長期的なメンテナンスの負担。
