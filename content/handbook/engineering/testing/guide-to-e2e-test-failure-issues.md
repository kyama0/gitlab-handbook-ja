---
title: E2Eテスト失敗 Issue デバッグガイド
description: プロダクトエンジニア向けのE2Eテスト失敗 Issue デバッグ簡易ガイド
upstream_path: /handbook/engineering/testing/guide-to-e2e-test-failure-issues/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-29T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-01-08T10:39:52+10:00"
---

[失敗 Issue のトラブルシューティング（動画 3分）](https://www.youtube.com/watch?v=KbQzrVJMvNQ&t=1552s)

### よくある修正方法

- **要素が見つからない？** → 最近の MR で UI が変更されていないか確認する
- **タイムアウト？** → スクリーンショット内のスピナーを確認し、パフォーマンスをチェック、ページエラーを確認する
- **401 Unauthorized？** → トークンの有効期限切れ
- **staging-canary / staging 環境のみ？** → 環境の問題や最近のフィーチャーフラグの切り替えについて #staging チャンネルを確認する

### 失敗のデバッグ

1. **スクリーンショットと例外を確認**して明らかなエラーを探す。例：
   - `ElementNotFound` → UI 要素が欠落 / 変更されている
   - `TimeoutError` → 予期しない動作または読み込みが遅い
   - `AssertionError` → 予期しないデータまたは動作
   - `WaitExceededError` → スクリーンショットでまだ読み込み中のスピナーを探す
   - `401 Unauthorized` → 有効期限切れトークンを確認する
   - UI に表示されたサーバーエラー → 環境の問題またはテストセットアップの問題
2. **テスト対象の GitLab インスタンスを確認** - `found:` ラベルを使用する（注: 複数のインスタンスにわたって失敗が発生する場合がある）
   - `found:master` → エフェメラル環境、`master` ブランチに対するスケジュールパイプラインで失敗
      - **Reports** セクションから最新の失敗したジョブを開く
      - テストが失敗している箇所を確認する（**GDK**、**CNG**、**Omnibus**）
      - ジョブ名を確認する - これがテスト設定を示す
      > **注意:** **GDK** と **CNG** に対してテストが失敗している場合、マージリクエストはブロックされます。これらの失敗は、通常以前のマージリクエストですでに失敗しているため、不安定な失敗である傾向があります。**Omnibus** に対するテストはオプションであり、失敗が許可されています。
   - `found:<environment>` → ライブ環境で失敗（[デバッグガイド](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/)）
      - ジョブを開いて、失敗が `smoke` ジョブかどうか、またはテストのメタデータを確認してテストがスモークテストかどうか確認する
      - テストが単一の環境で失敗している場合、環境ステータスを確認する（#staging、#production）
      > **注意:** `staging-canary` の `:smoke` テスト失敗は[デプロイをブロック](https://docs.gitlab.com/development/testing_guide/end_to_end/debugging_end_to_end_test_failures/#staging-canary)します。
3. **失敗の頻度とタイミングを確認**
   - 失敗 Issue が作成されたタイミングを観察して最初の発生を特定する
   - Reports セクションで発生頻度を観察する
   - **失敗パターン:**
      - 最近の一貫した複数回の失敗は、実際の問題である可能性が高く、即座の対応が必要
      - 散発的な失敗は、テストの不安定さ、またはアプリケーションの不安定性（レースコンディション、タイミングの問題）の可能性がある
      - 最初の発生時刻を使用して、問題発生直前のコミット / デプロイを確認する
4. **テストファイルの最近の変更を確認**
   - 失敗 Issue のメタデータ内の `File URL` リンクをクリックし、テストファイルへの最近のコミットを確認する
5. **ローカルでの再現を試みる** - [GDK に対して](https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/#running-e2e-tests-against-gdk)。例：

    ```shell
       cd qa
       bundle install
       WEBDRIVER_HEADLESS=false GITLAB_QA_ADMIN_ACCESS_TOKEN=<admin PAT> QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=http://gdk.test bundle exec rspec qa/specs/features/browser_ui/3_create/repository/add_file_template_spec.rb
    ```

6. **ライブ環境での失敗で GDK に対してはパスしている場合、ライブ環境に対して試みるか、ライブ環境で機能が正常に動作するかを手動で確認する。**
   - https://docs.gitlab.com/development/testing_guide/end_to_end/feature_flag_testing/#running-e2e-tests-against-staging
7. **アプリケーションログを確認**して失敗の兆候を探す
   - `master` の失敗についてはジョブアーティファクトを確認する
   - `staging` の失敗については https://nonprod-log.gitlab.net を確認する
   - `production` の失敗については https://log.gprd.gitlab.net を確認する
8. **後続のテスト実行を確認**
   - この Issue の **Test case** リンクをクリックする
   - テストケース Issue のラベルを確認して、テストケースの最新ステータスを確認する → テストがその後パスした場合、テストまたは環境が不安定な可能性がある
9. **最近のフィーチャーフラグの切り替えを確認**（失敗がライブ環境の場合）

### トリアージアクション

[分類ガイド](pipeline-triage#classify-and-triage-the-test-failure)に従って適切なラベルを適用する

> **注意:** 失敗 Issue は更新なしで 30 日後に自動クローズされます。

| 症状 | ラベル | アクション |
|------|--------|----------|
| 機能が壊れている、緊急（ユーザーへの影響あり） | `~failure::bug` | バグ修正またはリバート MR を作成する |
| 機能が壊れている、非緊急 | `~failure::bug` | バグ修正を作成するか、検疫して将来のマイルストーンに修正をスケジュールする |
| テストが陳腐化 / 壊れている | `~failure::stale-test` | テストを更新するか、検疫して将来のマイルストーンに修正をスケジュールする |
| [フレーキーテスト](https://docs.gitlab.com/development/testing_guide/unhealthy_tests/#flaky-tests)* | `~failure::flaky-test` | 根本原因を調査して将来のマイルストーンに修正をスケジュールする |
| 一時的な環境の問題 | `~failure::test-environment` | 再発しない場合はモニタリングして Issue をクローズする |
| 外部依存性の失敗 | `~failure::external-dependency` | 再発しない場合はモニタリングして Issue をクローズする |

*フレーキーさはテスト自体、またはアプリケーション自体が特定の条件下で信頼性が低いことが原因となりえます

### テストの検疫

検疫は以下のための**一時的な手段**です：

- 陳腐化 / 壊れたテスト（機能はユーザーには動作する）
- `:smoke` テストの失敗や過剰なノイズを引き起こす既知の許容可能な問題

1. 緊急の検疫には **[Fast Quarantine](./quarantine-process.md#fast-quarantine)** を使用する
2. **[長期的な検疫](./quarantine-process.md#long-term-quarantine)** でフォローアップする
3. この Issue に `~quarantine` と `~automation:prevent-auto-close` をタグ付けする

詳細な検疫ワークフローについては、[テスト検疫プロセス](./quarantine-process.md)を参照してください

### さらなる支援が必要な場合

**#g_test_governance** Slack チャンネルに問い合わせるか、[Test Governance ヘルプリクエスト Issue](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help/-/issues/new) を作成してください
