---
title: "Environment Automation エコシステムチーム"
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/ecosystem/
upstream_sha: 12cfa1f3ba8963fc7267e7fc51bbd09f9a543bd1
translated_at: "2026-09-17T21:03:55+00:00"
translator: claude
stale: false
lastmod: "2026-09-16T15:42:58-06:00"
---

## 概要

エコシステムは [Environment Automation](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/environment-automation/) チームの一部であり、[Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/) に属しています。私たちのミッションは、GitLab Dedicated とすべての外部依存関係に同一の標準と自動化を適用することで、エコシステム SLA を顧客 SLA と同じレベルに維持することです。

このページで明示的に記載されている違いがある場合を除き、[Environment Automation](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/environment-automation/) および [Dedicated グループ](/handbook/engineering/infrastructure-platforms/gitlab-dedicated/) ページに記載されているものと同じプロセスに従います。

## チームミッション

GitLab Dedicated とすべての外部依存関係に同一の標準と自動化を適用することで、エコシステム SLA を顧客 SLA と同じレベルに維持すること。AI ツールなどのインテグレーションや ClickHouse などの外部製品を含むエンドツーエンドの顧客ジャーニーパフォーマンスを通じて成功を測定します。

## 役割と責任

### アーキテクチャとインテグレーション

- 外部システムインテグレーションのブループリントを設計する
- インテグレーションインターフェースを定義する（認証、API）
- インテグレーションの SLA 要件を設定する（除外事項、応答時間）
- デプロイ標準と運用要件を確立する

### 評価と戦略

- 新しい技術のプルーフオブコンセプトを実行する
- 外部サービスの評価基準を定義する
- ビルドvsバイの決定を主導する（マネージドサービスvsインハウス）
- 障害復旧戦略を定義して実装する

### 運用と自動化

- エコシステムコンポーネント全体で自動化されたロールアウトを実施する
- 自動化ファーストアプローチで手動操作を排除する
- 開発サイクルの早い段階でチームと協力する
- 変更、依存関係、および対応プロセスを製品標準に合わせる

*このリストは網羅的ではなく、チームの成熟に伴い進化します。*

## 運用原則

- **自動化ファースト**: 繰り返しタスクを自動化することで人間の操作を排除する
- **エンドツーエンドのオブザーバビリティ**: すべてのタッチポイントにわたる完全な顧客ジャーニーを計測する
- **エコシステムの同等性**: GitLab Dedicated SLA と同等の外部サービスの可用性を維持する
- **統合されたプロセス**: すべてのエコシステムプロセスを製品全体の標準に合わせる
- **ゼロトイル**: エコシステムプロセスが完全に自動化され、運用上の負担を生まないことを確保する

## 成功指標

- **SLA アライメント**: エコシステム SLA が GitLab Dedicated アプリケーション SLA と一致する
- **インシデント対応**: エコシステムの MTTR が製品全体のターゲットを満たす
- **運用効率**: すべてのエコシステムプロセスが運用上のトイルゼロで自動化されている

## 主要な関係

- **報告先**: ディレクター、Dedicated インフラストラクチャ
- **連携先**: Switchboard、FedRAMP、EA1、EA2、セキュリティ、プラットフォームエンジニアリング、GitLab インフラ、Cells チーム
- **インテグレーション依存関係**: Switchboard フレームワーク内で作業し、実現可能な場合は FedRAMP 要件を満たす

## スコープ境界

### 私たちが注力すること

GitLab Dedicated の機能を拡張する外部サービスの運用信頼性、自動化、およびインテグレーションパターン

### 他のチームが所有すること

コアプラットフォーム開発（Runners プラットフォームチーム）、プロダクト機能、直接的なベンダー関係

---

**DRI**: @fviegas  
**承認**: @fviegas - ディレクター、Dedicated インフラストラクチャ
