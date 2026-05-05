---
title: テスト
upstream_path: /handbook/engineering/testing/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

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

**品質ゲート**: テストは[プロダクト開発ワークフロー](/handbook/product-development/how-we-work/product-development-flow/)全体に組み込まれています。

- 即時フィードバックのためのプリコミットとプリレシーブフック
- コードの統合前に通過しなければならない[必須コードレビューを伴うマージリクエストパイプライン](../../engineering/workflow/code-review/)
- 包括的なテストスイートを含むデプロイパイプライン
- デプロイ後のモニタリングと検証

### テストの所有権モデル

**全員がテストする**: 専任のテストガバナンスチームとより広範なDeveloper Experienceの部門がありますが、すべてのプロダクトエンジニアリングチームが自分たちの機能のテストを作成し、維持する責任があります。Developer Experienceは、以下を含む包括的なテストカバレッジを作成することでエンジニアをサポートするために存在します。

- 新機能のユニットテストの作成
- APIエンドポイントとサービスインタラクションの統合テストの追加
- 重要なユーザーフローのエンドツーエンドテストカバレッジへの貢献
- フレーキーまたは古くなったテストの維持と修正

**テストガバナンスチームのサポート**: テストガバナンスチームは以下を提供します。

- [Developer Experienceチーム](../../engineering/infrastructure-platforms/developer-experience/)を通じたテストインフラストラクチャとツール
- [開発ワークフローサポートのためのDeveloper Experienceとのコラボレーション](../../engineering/infrastructure-platforms/developer-experience/)
- テスト戦略とベストプラクティスに関するガイダンス
- 複雑なテストシナリオへのサポート
- テスト自動化フレームワークとライブラリ

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

**デプロイ前の検証**: コードが本番環境に到達する前に:

- [スモークテストが基本的な機能を確認し](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/#staging-canary)、staging-canaryのデプロイをブロックします
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

**ヘルプリクエストプロセス**: テストのサポートやガイダンスが必要な場合は、確立されたリクエストプロセスを使用してください。

- [テストサポートテンプレート](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help)を使用してIssueを作成する
- テストの課題や要件についてのコンテキストを含める
- 定義されたSLAの時間枠内での応答を期待する

### Developer Experienceの部門

**Developer Experienceチーム**: 以下を含む[テストインフラストラクチャ、ツール、フレームワークを提供](../../engineering/infrastructure-platforms/developer-experience/)します。

- テストパイプラインの最適化
- テスト自動化ライブラリとユーティリティ
- CI/CDテストインフラストラクチャ
- パフォーマンステスト機能

**テストガバナンスチーム**: 特定のプロダクト領域を以下でサポートします。

- テスト戦略のガイダンス
- 複雑なテストシナリオの設計
- フレーキーテストの調査と解決
- テストカバレッジの分析と推奨事項

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

- テストに焦点を当てたSlackチャンネル（質問とディスカッション用）: #g_test_governance と、より広い #s_developer_experience

#### ツールと自動化

- 一般的なシナリオのテストジェネレーターとテンプレート
- IssueとMRのトリアージのための[自動化ワークフローツール](../../engineering/infrastructure-platforms/developer-experience/workflow-automation/)
- テストベストプラクティスを含むCI/CDパイプラインテンプレート
- パフォーマンスとカバレッジのモニタリングダッシュボード

---

*詳細な技術実装のガイダンスについては、包括的な[開発テストガイド](https://docs.gitlab.com/development/testing_guide/)を参照してください。
テストの即時サポートについては、[ヘルプリクエストプロセス](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help)を使用してください。*
