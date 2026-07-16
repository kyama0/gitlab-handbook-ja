---
title: テスト
upstream_path: /handbook/engineering/testing/
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
translated_at: "2026-07-15T21:34:06Z"
translator: codex
stale: false
lastmod: "2026-07-15T17:51:54+00:00"
---

> ⚠️ 注意：DevOps の変革の一環として、テストはもはや中央管理された機能ではありません。機能チーム（およびモノリス）がテストのライフサイクル全体を所有し、リリース準備の判断はチーム内で行います。Developer Experience（DevEx）はガイダンスとスキル向上を提供し、共有テストインフラストラクチャを所有します。最後の手段としてのエスカレーションにのみ対応します。旧 Test Governance グループは[廃止され](../infrastructure-platforms/developer-experience/test-governance/)、Software Engineer in Test（SET）の役割は Backend Engineer に移行し、Pipeline DRI プロセスは廃止されつつあります。このセクションの一部のページは、このモデルを完全に反映するため、引き続き改訂中です。

テストガイドへようこそ。このセクションのページでは、私たちの開発ワークフローで使用されるテストの実践、方法論、およびツールに関する情報を提供しています。
効果的なテストは、コード品質の維持、リグレッションの防止、そしてソフトウェアが要件を満たしていることを確認するために不可欠です。

## GitLabにおけるテストの紹介

この紹介は新しいエンジニアに対して、テスト哲学、実践、および品質エンジニアリングの取り組みに効果的に貢献するために利用できるサポートの概要を提供しています。

## テストの方法

### テスト哲学

GitLabでは、品質は全員の責任であり、テストは別のフェーズとしてではなく、開発プロセスのあらゆる段階に統合されていると考えています。私たちのアプローチは、業界のベストプラクティスとGitLabのコアバリューに基づいています。

**テストピラミッドアプローチ**: [私たちはテストピラミッドの概念を支持しており](https://docs.gitlab.com/development/testing_guide/testing_levels/)、基盤には高速で信頼性の高いテスト（ユニットテスト）を優先し、上位レベルではより少なく、より焦点を絞ったテスト（統合テストとエンドツーエンドテスト）を使用しています。このアプローチにより、次のものが得られます。

- 開発中の迅速なフィードバック
- リグレッションの確実な検出
- CI/CDリソースの効率的な使用
- 維持可能なテストスイート

**戦略的なテストフォーカス**: 私たちのテストは、リスク分析とテスト戦略への入力を考慮し、重要なユーザージャーニーと影響の大きい領域にテスト作業を集中させるよう努めています。ユーザーへの影響とビジネスニーズに基づいて、テスト作業への投資先に関する戦略的な決定を行います。

**自動化された品質チェック**: テストは、外部チームによる承認ではなく自動化された仕組みとして、[プロダクト開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/)全体に組み込まれています。

- 即時フィードバックのためのプリコミットとプリレシーブフック
- コードの統合前に通過しなければならない[必須コードレビューを伴うマージリクエストパイプライン](../../engineering/workflow/code-review/)
- 包括的なテストスイートを含むデプロイパイプライン
- デプロイ後のモニタリングと検証

### テストの所有権モデル

**チームがテストを所有します**: すべての機能チームとモノリスは、テスト設計、作成、保守、トリアージを含む**エンドツーエンド（E2E）を含むすべてのレベルのテストライフサイクル全体**を所有します。品質は全員の責任であり、チームに代わって E2E テストを含むテストの作成、所有、保守を行う中央チームはありません。テストを所有することには次が含まれます。

- 新機能のユニットテストの作成
- APIエンドポイントとサービスインタラクションの統合テストの追加
- 重要なユーザーフローに対するエンドツーエンドテストの作成と保守
- `feature_category` 内のフレーキーまたは古くなったテストの保守、トリアージ、修正

**リリース準備はチームが判断します**: リリースを GitLab.com に展開できる状態かどうかの判断は、**所有チーム内で**行われます。外部チームが展開を承認することはありません。自動化されたパイプラインチェックはその判断を支援しますが、置き換えるものではありません。

**Developer Experience が提供するもの**: [DevEx](../../engineering/infrastructure-platforms/developer-experience/) は、チームに代わってテストするのではなく、チームを**支援**します。DevEx は次を担います。

1. チームが効果的にテストできるよう、ガイダンス、ベストプラクティス、スキル向上を提供する
1. テスト環境、フレームワーク、ツール、ダッシュボード、E2E パイプラインなどの共有テストインフラストラクチャを所有する
1. 深い専門知識を真に必要とする重大な問題に対する**最後の手段としてのエスカレーション**に対応する。何かが壊れたときの標準的な連絡先ではない

## テストのタイミング

### 開発ワークフローへの統合

**早期かつ頻繁なテスト**: 機能開発と並行してテストを書くことを奨励しており、明確な要件理解、より良いコード設計、最初から包括的なカバレッジを確保します。

**継続的インテグレーション**: すべてのマージリクエストが自動テストをトリガーします。

- ユニットテストと統合テストはすべてのプッシュで実行されます
- 機能テストはUI変更に対して実行されます
- パフォーマンステストは重要なパスを検証します
- セキュリティスキャンが脆弱性を確認します
- 重要なユーザージャーニーのエンドツーエンドテスト

### リリースとデプロイのテスト

**デプロイ前の検証**: コードが本番環境に到達する前に、自動化された仕組みが所有チームにシグナルを提供します。リリースの判断は引き続きチームが行います:

- [スモークテストが基本的な機能を確認し](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/#staging-canary)、staging-canary で失敗するとデプロイパイプラインが自動的にブロックされます
- パフォーマンステストが許容可能な応答時間を確保します
- エンドツーエンドテストが重要なユーザージャーニーを検証します
- カナリアデプロイでモニタリングを伴う段階的なロールアウトが可能です

**デプロイ後のモニタリング**: テストはデプロイで終わりません。デプロイ後のモニタリングも以下を含んで行われます。

- ユーザーインタラクションをシミュレートするシンセティックモニタリング
- アプリケーションの健全性を追跡するパフォーマンスモニタリング
- リアルタイムで問題を特定するエラートラッキング
- [安全な実験を可能にするフィーチャーフラグテスト](https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/)

## 利用可能なサポート

### テストのサポートを得る方法

**ガイダンスを得る**: チームがテストを所有しますが、すべてを一人で考える必要はありません。ガイダンスやベストプラクティスについては、Developer Experience の [`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) に連絡してください。DevEx は、テストやトリアージの所有者ではなく、ガイダンスと深い専門知識を必要とする重大な問題のためのリソースとして扱ってください。

### Developer Experienceの部門

**Developer Experience** は、[テストインフラストラクチャ、ツール、フレームワークを提供](../../engineering/infrastructure-platforms/developer-experience/)し、チームが効果的にテストを所有できるようガイダンスとスキル向上も提供します。これには次が含まれます。

- テストパイプラインの最適化
- テスト自動化ライブラリとユーティリティ
- CI/CDテストインフラストラクチャ
- パフォーマンステスト機能
- テスト戦略、カバレッジ、フレーキーまたは複雑なテストのデバッグに関するガイダンス

チームはテストの作成、失敗のトリアージ、リリース準備の判断という日常業務を所有します。DevEx は、深い専門知識を真に必要とする重大なケースに対する**最後の手段としてのエスカレーション**です。

**オンコールサポート**: [エンジニアリングチームはインシデント管理のローテーションに参加し](../../engineering/on-call/)、本番環境の問題への迅速な対応を確保します

### セルフサービスリソース

#### ドキュメントとガイド

- [GitLabテストガイド](https://docs.gitlab.com/development/testing_guide) - GitLabプロジェクトの自動テストのガイドライン
- [テストレベル、ツール、戦略](https://docs.gitlab.com/development/testing_guide/testing_levels/) - 詳細な技術実装ガイド
- [テストベストプラクティス](https://docs.gitlab.com/development/testing_guide/best_practices/) - GitLabプロジェクトでの良いテストの書き方に関して知っておくべきすべてのこと
- [コードレビューガイドライン](../../engineering/workflow/code-review.md) - すべてのマージリクエストの必須レビュープロセス

#### テストの健全性とパイプラインの安定性

- [フレーキーテスト](flaky-tests/_index.md) - 自動検出とレポート
  - [トップフレーキーテストファイルのレポート](flaky-tests/_index.md#reporting-of-top-flaky-test-files) - 影響の大きいフレーキーテストへの週次割り当て
- [E2Eテスト失敗Issueのためのプロダクトエンジニアガイド](guide-to-e2e-test-failure-issues.md)
- [不健全なテスト（開発者ドキュメント）](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/) - GitLabコントリビューターのための技術的なデバッグリファレンス
- [MRテスト失敗をDuoでデバッグする](using-duo-to-debug-test-failures.md#-using-duo-to-debug-and-fix-test-failures-in-your-merge-request) - Duoを使用してMR内のテスト失敗を迅速に診断して修正する
- [ライブ環境のテスト失敗をDuoでデバッグする](using-duo-to-debug-test-failures.md#-using-duo-to-debug-live-environment-test-failures) - Duoを使用してMR内のテスト失敗を迅速に診断して修正する

#### GitLabエンドツーエンドテスト概要（動画）

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/KbQzrVJMvNQ" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

**時間:** 約30分
**レベル:** 初級から中級

この動画では以下を扱っています:

- [ディレクトリ構造とテストの整理](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=150)
- [既存テストの発見と理解](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=322)
- [E2Eテストアーキテクチャの詳細](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=399)
- [E2Eテストがインフラストラクチャのどこで実行されるか](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=978)
- [マージリクエストからのテスト失敗のデバッグ](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=1084)
- [テスト内でフィーチャーフラグを使用する](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=1406)
- [一般的な失敗の問題のトラブルシューティング](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=1552)
- [GDKでローカルにテストを実行する](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=1721)

- [プレゼンテーションスライド](https://docs.google.com/presentation/d/1eYLuTdSpI-H0ZalzoqH7Ee8cprjmL1FNoV0XwRPY4-4/edit?usp=sharing)

#### さらなる読み物

- [実践的なテストピラミッド](https://martinfowler.com/articles/practical-test-pyramid.html) - 「テストピラミッド」の詳細

#### コミュニティとコミュニケーション

- テストに関する質問やディスカッションには、[`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) Slack チャンネルを使用してください

#### ツールと自動化

- 一般的なシナリオのテストジェネレーターとテンプレート
- IssueとMRのトリアージのための[自動化ワークフローツール](../../engineering/infrastructure-platforms/developer-experience/workflow-automation/)
- テストベストプラクティスを含むCI/CDパイプラインテンプレート
- パフォーマンスとカバレッジのモニタリングダッシュボード

---

*詳細な技術実装のガイダンスについては、包括的な[開発テストガイド](https://docs.gitlab.com/development/testing_guide/)を参照してください。
ガイダンスについては、Developer Experience の [`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) に連絡してください。*
