---
title: "ビルドインフラストラクチャ"
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-delivery/build-infrastructure/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T22:31:40Z"
translator: claude
stale: false
lastmod: "2026-04-22T13:35:43+00:00"
---

GitLab のリリースアーティファクトビルドパイプラインは、それぞれ異なる役割を持つミラーリポジトリを使用しています。
どのサービスがどこでビルドされているかの現状はここに文書化され、サービスのマイグレーションに応じて更新されます。

このアーキテクチャの設計根拠については [ADR 001: Build Mirror Separation](decisions/001_build_mirror_separation.md) を参照してください。

## リポジトリミラー

| ミラー | 場所 | 目的 |
|--------|------|------|
| Canonical | GitLab.com | 公開開発、マージリクエストワークフロー、正規のソース・オブ・トゥルース |
| Security | GitLab.com | 事前開示セキュリティ修正のプライベートミラー; 新しいモジュラーサービスのリリースアーティファクトのビルドと公開のソース |
| Build | dev.gitlab.org | レガシープロセスのリリースアーティファクトのビルドと公開のためのプライベートミラー |

## 新しいコンポーネント: Security ミラー

新しいモジュラーサービスは Security ミラー（GitLab.com 上）からリリースアーティファクトをビルドして公開します。

GitLab CI ランナーは GitLab.com のアプリケーションサーバーとは別のコンピュートで実行されます。
この専用ランナーフリートと Security ミラーの制限されたアクセスモデルの組み合わせにより、SOC 2、FedRAMP、SLSA L2+ で要求されるビルドインフラストラクチャと本番環境間の論理的な分離が満たされます。

Security ミラーのアクティビティは独立して監査可能であり、そのアクセスは Canonical プロジェクトのメンテナープールとは別にスコープされています。

## 既存のプロセス: dev.gitlab.org

レガシーのツールとプロセスは引き続き [dev.gitlab.org](https://dev.gitlab.org)（別の GitLab インスタンス）を通じてビルドを実行しています。
GitLab がよりモジュラーなリリースアーキテクチャへと移行するにつれて、これらのプロセスは自然に別インスタンスから移行されます。
これは個別のマイグレーション作業ではなく、段階的な移行です。

dev.gitlab.org とビルドマシンの運用詳細については、[Build チームメンテナンスドキュメント](build/maintenance/)を参照してください。
