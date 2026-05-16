---
title: Package グループ - GitLab 品質保証エンドツーエンドテスト
upstream_path: /handbook/engineering/devops/package/quality/
upstream_sha: bb4e4d0fc1a355c00a1d82b1528ff729c83af189
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-05T19:47:34+00:00"
---

## テスト戦略

### ローカル開発テスト

1. ユニットテスト
   - Container Registry（Go）: `make test`
   - Package Registry（Rails）: `bundle exec rspec ee/spec/models/packages/`
   - フロントエンド: `yarn jest ee/spec/frontend/packages`

2. 統合テスト
   - 異なるストレージバックエンドに対してテストする
   - API エンドポイントを検証する
   - 認可ルールを確認する

### エンドツーエンドテスト

Package グループは E2E テストに [GitLab QA](https://gitlab.com/gitlab-org/gitlab-qa) を使用しています。これは複数のサービスを統合する機能にとって重要です。

#### 一般的なテストシナリオ

1. Container Registry

   ```ruby
   # コンテナイメージの公開
   Resource::Container::Image.fabricate_via_api! do |image|
     image.name = 'my-image'
     image.repository_name = 'my-project'
   end
   ```

2. Package Registry

   ```ruby
   # npm パッケージの公開
   Resource::Package::Npm.fabricate_via_api! do |package|
     package.name = 'my-package'
     package.version = '1.0.0'
   end
   ```

### テスト環境のセットアップ

#### GDK を使ったローカルテスト

1. 必要な環境変数を設定する:

   ```bash
   export QA_LOG_LEVEL=debug
   export WEBDRIVER_HEADLESS=false
   ```

2. GDK が[ループバックインターフェース](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/master/doc/index.md#create-loopback-interface-for-gdk)を使用していることを確認する
3. ホスト名をループバックインターフェースにマップする

#### ファイルアップロードのテスト

複数のストレージバックエンドに対してアップロードをテストします:

1. ローカルストレージ（デフォルト）
2. オブジェクトストレージ:
   - GCP（GitLab.com との同等性のため推奨）
   - MinIO（ローカル開発）
   - AWS S3
   - Azure

#### HackyStack デモ環境

Omnibus と Container Registry を使った一時的なデモの場合:

1. `https://gitlabsandbox.cloud` にログインする
2. Cloud Account ID `dev-package-container-96a3ff34` を選択する
3. 「View Credentials」タブから認証情報を取得する
4. Play アイコンを使って環境を起動する
5. CI/CD パイプラインを実行する
6. Deploy アクションを手動でトリガーする
7. 提供された認証情報を使ってデモプロジェクトにアクセスする
8. 完了後は Destroy ジョブをトリガーしてクリーンアップする

### テストツール

#### シードユーティリティ

1. [Container Factory](https://gitlab.com/nmezzopera/container-factory)
   - テストイメージの迅速な作成
   - 複数アーキテクチャのサポート

2. [Container Registry Cloud Seeder](https://gitlab.com/gitlab-org/ci-cd/package-stage/container-registry-seeder)
   - 大量イメージの作成
   - 負荷テストのサポート

### トラブルシューティング

#### よくある問題

1. ストレージバックエンドの接続

   ```bash
   # GCS 認証情報の確認
   gsutil ls gs://your-bucket
   
   # S3 アクセスの検証
   aws s3 ls s3://your-bucket
   ```

2. レジストリ認証

   ```bash
   # レジストリへのログインテスト
   docker login registry.gitlab.com
   ```

3. パッケージ公開の失敗
   - プロジェクト/グループのパーミッションを確認する
   - ストレージのクォータを確認する
   - パッケージメタデータを検証する

## ドキュメント

- [GitLab QA フレームワーク](https://gitlab.com/gitlab-org/gitlab-qa)
- [エンドツーエンドテストガイド](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [Container Registry 開発](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/development.md)
- [パッケージ開発](https://docs.gitlab.com/ee/development/packages.html)
