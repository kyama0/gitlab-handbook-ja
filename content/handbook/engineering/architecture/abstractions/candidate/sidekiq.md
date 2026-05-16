---
title: "Sidekiq - バックグラウンド処理"
upstream_path: /handbook/engineering/architecture/abstractions/candidate/sidekiq/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-22T14:05:58+02:00"
---

## ステータス

**Candidate** - 承認に向けて検討中

## オーナー

[割り当て予定]

## 説明

Sidekiq は、ジョブストレージとキューイングに Redis を使用する Ruby アプリケーション向けのバックグラウンドジョブ処理フレームワークです。

## なぜこれが主要抽象化であるべきか

Sidekiq は、以下の理由から、GitLab の標準的なバックグラウンド処理システムとして検討されています:

1. **スケールでの実績**: GitLab.com 全体で数百万件のジョブを正常に処理した実績
2. **Ruby ネイティブ**: GitLab の Rails アプリケーションとシームレスに統合
3. **Self-Managed 互換**: すべての GitLab デプロイ環境で確実に動作

## ユースケース

Sidekiq は以下に使用します:

- 標準的なバックグラウンドジョブ処理
- 非同期タスクの実行
- スケジュールジョブと cron 風タスク
- self-managed インスタンス（SMF/SMA）で動作する必要があるあらゆる機能
- バックグラウンド処理を必要とする GitLab のコア機能

## 使用してはいけないケース

以下については代替手段を検討してください:

- **非常に高スループットなシナリオ**: 極端なスループット要件には NATS（候補主要抽象化）を使用
- **リアルタイムイベントストリーミング**: 1ms 未満のレイテンシ要件には NATS の方が適している場合があります

## 統合ガイダンス

### 新規機能向け

新規機能のバックグラウンド処理を実装する際:

1. **デフォルトは Sidekiq**: 特殊な性能要件がない限り、Sidekiq を使用してください
2. **まず計測**: NATS が必要だと考えるなら、まず性能データを収集してください
3. **Self-Managed を考慮**: self-managed 顧客向けに動作する必要がある機能の場合は、Sidekiq を使用してください
4. **パターンに従う**: GitLab コードベース内で確立された Sidekiq のパターンと worker 規約を使用してください

## 関連する主要抽象化

- [**NATS**](nats/) - 非常に高スループットなシナリオの代替手段
- **Redis** - Sidekiq に必須の依存
- **PostgreSQL** - 永続データストレージとして Sidekiq と併用されることが多い

## サポートとリソース

- GitLab の [Sidekiq 開発ドキュメント](https://docs.gitlab.com/development/sidekiq/)
- Sidekiq の[開発時の設定](https://docs.gitlab.com/development/sidekiq/worker_attributes/) と [オペレータ設定](https://docs.gitlab.com/administration/sidekiq/)
- 社内の[監視ダッシュボード](https://dashboards.gitlab.net/dashboards/f/sidekiq/sidekiq-service) と [runbook](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/sidekiq)
- Infrastructure チームのオフィスアワーと Slack チャンネル
