---
title: Duo を使ったテスト失敗とライブ Issue のデバッグ
description: MR とライブ環境 E2E テストパイプラインにおけるテスト失敗の診断と修正に Duo を使用するための簡潔なガイド。
upstream_path: "/handbook/engineering/testing/using-duo-to-debug-test-failures/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T12:00:00Z"
translator: claude
stale: false
---

GitLab Duo は、2つの主要なシナリオでテスト失敗を素早く診断・解決するのに役立ちます:

- **[MR テスト失敗のデバッグ](#-マージリクエストのテスト失敗のデバッグと修正に-duo-を使用する)** - 失敗が自分の変更に関係しているか判断し、修正案を取得する
- **[ライブ環境失敗のデバッグ](#-ライブ環境テスト失敗のデバッグに-duo-を使用する)** - staging、canary、本番モニタリングパイプラインの問題を診断する

---

## 🪄 マージリクエストのテスト失敗のデバッグと修正に Duo を使用する

マージリクエストにテスト失敗がある場合、Duo を使って失敗が自分の変更に関係しているかを素早く判断し、修正案を取得してください。

> **💡 ヒント:** 一時的な失敗である可能性があるため、まずジョブを即時リトライしてみてください。再び失敗する場合は、以下のデバッグ手順に進んでください。

1. **MR パイプラインに移動し**、失敗しているジョブを見つけます
1. テスト失敗を表示している**失敗しているジョブを開きます**
1. ジョブログビューで **GitLab Duo を呼び出します**（`d` を押すか、右上角の Duo ボタンをクリック）

   > **📝 注意:** Duo は長いジョブログの中間部分を自動的に省略することがあります。精度を高めるため、特定のスタックトレースとエラーメッセージをコピーしてプロンプトに貼り付けることができます。
   >
   > **🌐 ブラウザベースのテストの場合:** Duo はアーティファクトを自動的にダウンロードできません。必要に応じて、ジョブアーティファクトの `/tmp/capybara` ディレクトリ（フィーチャースペック）または `failure_screenshots` ディレクトリ（E2E テスト）から DOM を手動でダウンロードし、プロンプトに貼り付けることで Duo がブラウザベースの失敗をデバッグするのに役立ちます。アプリケーションログなどの他のアーティファクトにも同様に適用されます。

1. 他の MR との混乱を避けるため、**前のコンテキストをクリアします**:

   ```text
      /clear
   ```

1. **プロンプト: テスト失敗が広範囲に発生しているか確認します:**

   ```text
      I have a test failure in this job. Can you:
      1. Check recent issues at https://gitlab.com/gitlab-org/quality/engineering-productivity/master-broken-incidents/-/issues and https://gitlab.com/gitlab-org/quality/engineering-productivity/approved-mr-pipeline-incidents/-/issues/ to see if this failure is occurring in other merge requests or in master
      2. Let me know if this appears to be related to my MR changes or a widespread issue
   ```

1. **プロンプト: 失敗が MR の変更に関係していると思われる場合、修正を依頼します:**

   ```text
      Can you analyze what's causing this failure and provide a fix? Please:
      1. Infer the test type from the test file path
      2. Explain what's causing the failure
      3. If this is a stale test (test needs updating), provide a diff to fix the test
      4. If this is a bug in the application, explain the bug and provide a diff to fix the application code
   ```

**✅ 期待されること:**

- Duo は特定のコード変更に必要な diff を提供します
- 適用する前に提案内容を必ず慎重にレビューしてください
- 可能であればコミット前にローカルで修正をテストしてください

### ⚠️ Duo が対応できない場合

Duo の分析で問題が解決しない場合は、以下の手順を順番に実行してください:

   1. **🔍 既知の失敗か確認します**（2分未満）:
      - MR の Danger bot コメントの **"Pipelines failing on master"** セクションで既知の master-broken Issue へのリンクを確認します
      - [**#master-broken**](https://gitlab.enterprise.slack.com/archives/CR6QH3D7C)（master ブランチの失敗）および [**#mr-blocked-by-master-broken**](https://gitlab.enterprise.slack.com/archives/C06KFK5EE73)（承認済み MR の失敗）の Slack チャンネルを確認します
   2. **💻 ローカルで再現を試みます**（約10分）:
      - GDK でテストを実行して、環境固有の問題か実際の問題かを確認します
   3. **🚧 必要に応じてクォランティンをリクエストします**:
      - 失敗が `master` をブロックしており、自分の変更とは無関係の場合は [テストクォランティンプロセス](quarantine-process.md) を検討してください

---

## 🔥 ライブ環境テスト失敗のデバッグに Duo を使用する

staging や本番パイプラインで自動化 E2E テストが失敗した場合、Duo を使ってそれが環境の問題、バグ、またはテストの問題かを素早く診断してください。

   > **✨ 注意:** GitLab Duo は ops インスタンス（ops.gitlab.net）で利用可能であり、そこでジョブログから直接使用できます。
   >
   > **⚠️ 重要: Staging-Canary への影響**
   > [staging-canary パイプライン](https://ops.gitlab.net/gitlab-org/quality/staging-canary/-/pipelines)のスモークテスト失敗（`qa-smoke` ジョブ）は**本番へのデプロイをブロックします**。これらの失敗をデバッグする際は、問題が実際のアプリケーション問題なのか、安全にクォランティンできるテストの問題なのかを判断することを優先してください。

1. **ops.gitlab.net で失敗しているパイプラインに移動します**:
    - [Staging-Canary パイプライン](https://ops.gitlab.net/gitlab-org/quality/staging-canary/-/pipelines)
    - [Staging パイプライン](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
    - [Canary パイプライン](https://ops.gitlab.net/gitlab-org/quality/canary/-/pipelines)
    - [Production パイプライン](https://ops.gitlab.net/gitlab-org/quality/production/-/pipelines)

2. テスト失敗を表示している**失敗しているジョブを開きます**

3. ジョブログビューで **GitLab Duo を呼び出します**（`d` を押すか、右上角の Duo ボタンをクリック）

   > **📝 注意:** Duo は長いジョブログの中間部分を自動的に省略することがあります。精度を高めるため、特定のスタックトレースとエラーメッセージをコピーしてプロンプトに貼り付けることができます。
   >
   > **🌐 ブラウザベースのテストの場合:** Duo はアーティファクトを自動的にダウンロードできません。必要に応じて、ジョブの `failure_screenshots` ディレクトリまたは関連アーティファクトから DOM を手動でダウンロードし、プロンプトに貼り付けることで Duo がブラウザベースの失敗をデバッグするのに役立ちます。

4. 他の調査との混乱を避けるため、**前のコンテキストをクリアします**:

   ```text
      /clear
   ```

5. **プロンプト: 失敗を分析します:**

   ```text
      Analyze this test failure in [staging-canary/staging/canary/production]:

      **Context:** Tests are automatically retried within a job. If a test passed on that automatic retry, ignore it completely.

      1. **Check automatic retry status first** - Look for retry sections in the log. **Do not mention any tests that passed on automatic retry** - we only care about tests that failed both attempts within the job.
      2. For persistent failures (failed both the initial attempt AND the automatic retry):
         - What failed and why? (error type, correlation IDs, specific error messages like 404s)
         - Likely cause: environment issue, flaky test, or genuine application problem?
         - Search https://gitlab.com/gitlab-org/quality/engineering-productivity for similar issues
      3. **Urgency:**
         - ⚠️ Persistent `qa-smoke` failure in staging-canary = DEPLOYMENT BLOCKER
         - Other persistent failures = Assess user impact

      **Recommended actions (in order):**
      1. **Retry the entire job first** (even persistent-within-job failures often pass on full job retry)
      2. **If still failing AND blocking deployment:**
         - If clearly a flaky/environment issue (not a real application bug): **Use fast-quarantine immediately** to unblock deployment
           - Link: https://gitlab.com/gitlab-org/quality/engineering-productivity/fast-quarantine
         - If genuine application issue that should not be released to customers: **create an incident** - DO NOT quarantine
      3. **If not blocking deployment but is causing too much failure noise:** Follow standard quarantine process

      **Do not mention:**
      - Tests that passed on automatic retry
      - Test case reporting output (test_case iid, Labels updated, etc.)

      Note: Distinguish application issues from test problems - don't quarantine real bugs.

      Provide issue links at the end.
   ```

**✅ 期待されること:**

- Duo は実際の環境問題と不安定/壊れたテストを区別するのに役立ちます
- テスト問題の修正案を提供します
- エスカレーションが必要なサービス/アプリケーション問題を特定します
- 影響と緊急度の評価を支援します

### ⚠️ Duo が対応できない場合

Duo の分析で問題が解決しない場合:

1. **💻 ローカルで再現を試みます**（約10分）:
    - 手動で環境にログインしてテストケースを再現してみてください
    - 1Password の認証情報を使用してターゲット環境に対してテストを実行してください
2. **🔍 関連システムとクロスチェックします**:
    - 最近のインシデントについて [**#incident-management**](https://gitlab.enterprise.slack.com/archives/CB7P5CJS1) Slack チャンネルを確認します
    - 既知のインシデントについて [GitLab.com ステータスページ](https://status.gitlab.com) を確認します
    - 失敗と相関する可能性のある最近のデプロイをレビューします
    - 複数の環境パイプライン間のパターンを探します
3. **🚧 必要に応じてクォランティンします:**
    - **緊急のデプロイをブロックするスモークテストの場合:** [fast-quarantine](https://gitlab.com/gitlab-org/quality/engineering-productivity/fast-quarantine) を使用してデプロイを即時アンブロックします
    - **緊急でないテスト問題の場合:** [テストクォランティンプロセス](quarantine-process.md) に従ってください
    - **重要:** テスト問題のみクォランティンし、実際のアプリケーションバグはクォランティンせずにエスカレーションしてください

---

## 📚 関連リソース

- [テストガイド](_index.md) - 完全なテスト概要
- [GitLab テストガイド](https://docs.gitlab.com/development/testing_guide) - 技術的な実装の詳細
- [テストクォランティンプロセス](quarantine-process.md) - テストをクォランティンする方法
- [E2E テスト失敗 Issue のガイド](guide-to-e2e-test-failure-issues.md) - プロダクトエンジニア向けデバッグガイド

**サポートが必要ですか？** [**#s_developer_experience**](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H) で連絡するか、[サポートリクエスト Issue](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help/-/issues/new) を作成してください
