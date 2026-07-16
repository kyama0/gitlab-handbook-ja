---
title: "Test Governance グループ（廃止）"
description: "Test Governance グループは廃止されました。機能チームがテストライフサイクル全体を担います。"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/test-governance/"
upstream_sha: "f469f09c3347a37927c75866af3d2611a5421062"
lastmod: "2026-07-15T17:51:54+00:00"
translated_at: "2026-07-16T06:52:34+09:00"
translator: codex
stale: false
---

{{% alert title="このグループは廃止されました" color="warning" %}}
**Test Governance** グループは廃止されました。テストは中央集権的に管理される機能ではありません。
{{% /alert %}}

## 変更内容

DevOps 変革の一環として、GitLab は中央集権的に管理されるテスト機能から離れ、Test Governance グループを廃止しました。

**モジュール型の機能チームとモノリスが、エンドツーエンド（E2E）を含むすべてのレベルで、テストの設計、作成、保守、トリアージ、品質というテストライフサイクル全体を担います**。チームに代わってテスト（E2E を含む）を作成または保守する専任者や中央チームは存在しません。

**リリース準備完了はチーム内で行う意思決定です。** GitLab.com へのロールアウトを承認する外部チームはありません。自動パイプラインチェック（たとえば、staging-canary スモークテスト）は、その決定を支援する*仕組み*であり、外部の承認者ではありません。

## DevEx が現在行うこと

[Developer Experience 部門](../)は、チームが効果的にテストを担えるよう**ガイダンスとスキル向上の支援を提供**し、**共有テストインフラ**（テスト環境、フレームワーク、ツール、ダッシュボード、E2E パイプライン）を担います。

失敗のトリアージと最初の対応は**担当する機能チーム**が行います。DevEx は、深い専門知識を本当に必要とする深刻なケースにおける**最後のエスカレーション先**であり、問題が起きたときの標準的な連絡先ではありません。

ガイダンスが必要な場合は、[`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H)で連絡してください。

## 参照先

1. [GitLab におけるテスト](/handbook/engineering/testing/) — テストの考え方、オーナーシップモデル、サポート
1. [Developer Experience 部門](/handbook/engineering/infrastructure-platforms/developer-experience/)
1. [品質は全員の責任](/handbook/engineering/development/principles/#quality)

### テストを担うための役立つリソース

**カバレッジ戦略とレベル**

* [GitLab テストの概要](/handbook/engineering/testing/) — チームがユニット、統合、エンドツーエンドのテスト全体で包括的なテストカバレッジを担うという全体的な期待を示します。エンドツーエンドのカバレッジは重要なユーザーフローに重点を置きます。
* [テストレベル](https://docs.gitlab.com/development/testing_guide/testing_levels/) — テストピラミッドを最も明確に説明しています。カバレッジの大半はユニットレベルに置き、上位レイヤーのテストは少なくし、実行と保守のコストが最も高いため E2E は最小の割合にします。
* [テスト戦略](https://docs.gitlab.com/development/testing_guide/testing_strategy/) — GitLab の自動テストの設計図です。テストを実行する場所とタイミングを示すため、チームは各スイートがどのリスクを担うかを把握できます。
* [テストカバレッジ](/handbook/engineering/testing/test-coverage/) — 機能レベルの E2E だけでなく、オフラインまたはエアギャップ環境でのテストやアップグレードパスのカバレッジなど、特別なシナリオ全体のカバレッジを GitLab がどのように考えるかを説明します。

**テストの作成**

* [テストのベストプラクティス](https://docs.gitlab.com/development/testing_guide/best_practices/) — テスト設計、RSpec、FactoryBot、システムテスト、パラメータ化テストなど、優れたテストを書くために知っておくべきすべてを説明します。
* [フロントエンドテストの標準とスタイルガイドライン](https://docs.gitlab.com/development/testing_guide/frontend_testing/) — promise のテストとスタブを含め、Jest で優れたフロントエンドテストを書く方法を説明します。
* [エンドツーエンドテスト作成の入門ガイド](https://docs.gitlab.com/development/testing_guide/end_to_end/beginners_guide/) — まず既存の下位レベルのカバレッジを確認します。ユニット、機能、統合のカバレッジがすでに十分なら、追加の E2E テストは不要な場合があります。
* [エンドツーエンドテストガイド](https://docs.gitlab.com/development/testing_guide/end_to_end/) — GitLab が E2E を実行する方法、選択的実行、および下位レベルの機能テストがすでにリスクをカバーしている場合に E2E カバレッジを避ける原則を説明します。

**テストを健全に保つ**

* [不健全なテスト](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/) — 発生するフレーキーテストの種類と、その特定および修正方法を説明します。これにより、チームは自らのスイートを信頼できる状態に保てます。
* [フレーキーテスト](/handbook/engineering/testing/flaky-tests/) — 主要なフレーキーテストがチームの対応のために自動検出・報告される方法を説明します。
* [隔離プロセス](/handbook/engineering/testing/quarantine-process/) — テストを隔離する方法と、担当チームが `feature_category` に基づいて解決または削除の責任を持つことを説明します。
