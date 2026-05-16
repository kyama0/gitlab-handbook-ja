---
title: "シークレット検出有効性チェック モニタリング"
upstream_path: /handbook/engineering/development/sec/secure/secret-detection/runbooks/secret-detection-validity-check-monitoring/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-18T15:16:29+05:30"
---

### このランブックをいつ使用しますか?

このランブックを使用して、有効性チェック機能の正常性、パフォーマンス、および使用状況を監視します。
詳細については、[有効性チェックダッシュボード](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) を参照してください。

### 何を監視しますか?

有効性チェックは以下のコンポーネントにまたがっています:

- Sidekiq ワーカー（バックグラウンドジョブ処理）
- パートナー API (AWS STS、GCP OAuth2、Postman)
- Rails（検出結果の取り込みとステータス更新）
- Redis（レートリミッター、キュー深度）
- PostgreSQL（`secret_detection_token_statuses` および `security_finding_token_statuses` テーブル）

## 主要なメトリクス

### リクエストレート

| メトリクス | ソース | 意味 |
|--------|--------|---------|
| パートナー別リクエスト数/秒 | `validity_check_partner_api_requests_total` | パートナーごとの API 呼び出し量 |
| パートナー別成功率 | `validity_check_partner_api_requests_total{status="success"}` | 検証成功の割合 |
| パートナー別失敗率 | `validity_check_partner_api_requests_total{status="failure"}` | 検証失敗の割合 |

ダッシュボード: **パートナー別リクエスト数/秒**、**パートナー別成功率**、**パートナー別失敗率**

### レイテンシ

| メトリクス | 目標 | アラート |
|--------|--------|-------|
| API レスポンス P95 | < 5 秒 | 5 分以上 > 5 秒 |

`validity_check_partner_api_duration_seconds_bucket`（95 パーセンタイル）を使用して計測します。

ダッシュボード: **API レスポンス時間 (P95)**

### エラー

| 種類 | メトリクス | 意味 |
|------|--------|---------|
| 全体エラー率 | `validity_check_partner_api_requests_total{status="failure"}` | 全リクエストに対する失敗の割合 |
| ネットワークエラー | エラークラス別 `validity_check_network_errors_total` | 接続の問題 |
| エラー内訳 | エラー種別別 `validity_check_partner_api_requests_total` | 失敗のカテゴリ分類 |

可能なエラークラス: `Timeout`、`ConnectionRefused`、`HTTPError`

ダッシュボード: **種類別エラー**、**パートナー別ネットワークエラー**、**エラー内訳**

### レート制限

| メトリクス | アラート |
|--------|-------|
| レート制限ヒット数/秒 | 持続して > 0.1 リクエスト/秒 |

`validity_check_rate_limit_hits_total`（制限により拒否されたリクエスト）で計測します。

場所: **レート制限ヒット**、**パートナー別レート制限**

## 一般的なアラート

### `SecretDetectionPartnerAPIHighErrorRate`

- 重大度: S3
- しきい値: 5 分以上 > 10%
- 確認: **現在のエラー率** ゲージ、**パートナー別成功率** チャート
- 対応: 影響を受けたパートナーを特定します。パートナーのステータスページを確認します。詳細については、
[トラブルシューティング](secret-detection-validity-check-troubleshooting.md#partner-api-high-error-rate) セクションを参照してください。

### `SecretDetectionPartnerAPIHighLatency`

- 重大度: S3
- しきい値: 5 分以上 P95 > 5 秒
- 確認: **API レスポンス時間 (P95)** チャート
- 対応: システム全体の問題か、特定パートナーの問題かを確認します。詳細については、[トラブルシューティング](secret-detection-validity-check-troubleshooting.md#partner-api-high-latency) セクションを参照してください。

### `SecretDetectionPartnerAPIRateLimitHit`

- 重大度: S4
- しきい値: 持続して > 0.1 リクエスト/秒
- 確認: **レート制限ヒット** 統計、**パートナー別レート制限** チャート
- 対応: 詳細については、[トラブルシューティング](secret-detection-validity-check-troubleshooting.md#rate-limits-hit-frequently) セクションを参照してください。

### `SecretDetectionPartnerAPINetworkErrors`

- 重大度: S3
- しきい値: 5 分以上 > 0.5 エラー/秒
- 確認: **パートナー別ネットワークエラー** チャート
- 対応: エラー種別（`Timeout`、`ConnectionRefused`、`HTTPError`）を特定します。詳細については、[トラブルシューティング](secret-detection-validity-check-troubleshooting.md#network-errors-to-partner-apis) セクションを参照してください。

## ダッシュボード

| ダッシュボード | 目的 |
|-----------|---------|
| [有効性チェック](https://dashboards.gitlab.net/d/secret-detection-sd-partner-token-verify/93b6ec2) | リクエストレート、レイテンシ、エラー、レート制限 |
| [Sidekiq ワーカー](https://dashboards.gitlab.net/dashboards?query=sidekiq) | ジョブ処理、リトライ |
| [PostgreSQL テーブル](https://dashboards.gitlab.net/dashboards/f/postgresql/postgresql) | `finding_token_status` の増加 |

## パネルの説明

### 現在のエラー率

全パートナーのリアルタイムエラー率（%）。成功数と失敗数を組み合わせています。レートが 10% を超えるとアラートが発火します。

### API レスポンス時間 (P95)

各パートナー API 呼び出しの 95 パーセンタイルのレイテンシ。スパイクはパートナーの遅延を示します。5 分以上レイテンシが 5 秒を超えるとアラートが発火します。

### レート制限ヒット

パートナー制限にヒットしている現在のレート（リクエスト/秒）。ゼロが正常です。レートが 0.1 リクエスト/秒を超えるとアラートが発火します。

### パートナー別リクエスト数/秒

各パートナーへの API 呼び出し量。使用パターンの確認に使用します。

### パートナー別成功率

パートナーごとの検証成功の割合。95% を超えていることが望ましいです。

### 種類別エラー

失敗の理由（ネットワーク、レート制限、レスポンス解析）。スタックチャートで構成を確認できます。

### パートナー別ネットワークエラー

詳細な内訳: `Timeout`、`ConnectionRefused`、`HTTPError`。接続の問題を診断します。

### パートナー別レート制限

どのパートナー制限にヒットしているかを表示します。`limit_type`（秒間しきい値）を確認できます。

## パフォーマンスのベースライン

公開された SLO はありません。ダッシュボードの P95 レイテンシをベースラインとして使用します。パートナー API の正常性に基づいて変動することが予想されます。

## エスカレーション

- チーム: Secret Detection (@gitlab-org/secure/secret-detection)
- Slack: `#g_ast-secret-detection`
- オンコール: SRE の対応状況は `#production` を確認してください
