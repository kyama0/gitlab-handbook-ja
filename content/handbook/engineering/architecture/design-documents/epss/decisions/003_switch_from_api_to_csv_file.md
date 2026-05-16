---
owning-stage: "~devops::secure"
title: 'EPSS サポート ADR 003: EPSS API から CSV ファイルへの切り替え'
upstream_path: /handbook/engineering/architecture/design-documents/epss/decisions/003_switch_from_api_to_csv_file/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## コンテキスト

PMDB の EPSS フィーダーは [EPSS ソース](https://www.first.org/epss/data_stats) からデータを取得し、GCP の Pub/Sub 経由で公開します。2つのオプションが評価されました:

1. API を使用してデータを直接フェッチする
2. EPSS データを含む圧縮 CSV ファイルをダウンロードする

当初、API を選択しました。しかし、経験から API アプローチに重大な安定性の問題があることが明らかになりました。これらの問題の具体的な例は [この GitLab Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/512806) に見つけることができます。

## 決定

API の使用から、EPSS データ取得のための圧縮 CSV ファイルのダウンロードと処理に切り替えます。

## 結果

### メリット

- license-feeder の EPSS フロー（本番環境とテスト環境の両方）の安定性が向上します。
- 複数の API 呼び出しではなく、単一のネットワークリクエストになります。
- より高速な処理が可能になります。

### デメリット

- 処理中にすべてのデータをメモリに保持する必要があります。CSV のサイズを考えると問題ではありません。
- データの特定の部分のみをダウンロードすることはできません（ただし、これは関連するユースケースではありません）。

## 代替案

エラーハンドリングとリトライメカニズムを改善した API の使用を継続することもできますが、これは安定性の問題の根本原因に対処せずに複雑さを追加することになります。
