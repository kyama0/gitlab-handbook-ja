---
title: 'Zendesk のテスト'
description: 'Zendesk の項目のテストに関するドキュメント'
upstream_path: "/handbook/eta/css/testing/zendesk/"
upstream_sha: "a2f17ddfb308ad2cf8c33a838af1d4b482818d17"
lastmod: "2026-10-07T13:11:23-05:00"
translated_at: "2026-10-07T21:08:10+00:00"
translator: codex
stale: false
---

{{% alert title="このページは作成中です" color="warning" %}}

このページと配下のページは作成中です。必要な情報が見つからない場合は、CSS チームの他のメンバーに相談してください。

{{% /alert %}}

テストの内容は、テスト対象によって異なる場合があります。Zendesk 内の特定の項目のテストについては、対応するドキュメントを参照してください。

## 手動テスト

他の仕組みがない場合は、これがデフォルトです。テスト対象の項目によって異なるため、詳細は配下のドキュメントを参照してください。

## CustSuppOps Zendesk Test Suite Generator {#custsuppops-zendesk-test-suite-generator}

これは、私たちが設定した GitLab Duo エージェントです（[こちら](https://gitlab.com/gitlab-support-readiness/duo-agents/-/automate/agents/1009244)にあります）。このエージェントは、作業中のマージリクエスト（およびリンクされている Issue）を使用して、テストスイートを生成します。エージェントは実行中に、次のことを行います。

- 実行している内容と確認している内容（および使用しているロジック）を説明します
- 子タスク項目の内容について承認を求めます
- 親 Issue への概要コメントの追加について承認を求めます
- 実行したすべてのアクションを要約します

有効になっているプロジェクトでこれを使用するには、作成したマージリクエストに移動し、GitLab Duo チャットを開き、エージェント `CustSuppOps Zendesk Test Suite Generator` を選択して、タスクの実行を依頼してください（正確な言い回しはあまり重要ではありません）。

## テストスイートスクリプト {#test-suite-script}

{{% alert title="ベータ機能" color="warning" %}}

これは、私たちが実装を進めている非常に新しいベータ機能です。そのため、すべてのプロジェクトで稼働しているわけではなく、実行中に問題が発生する可能性があります。リリースと開発の詳細は、[gitlab-com/eta/css&28](https://gitlab.com/groups/gitlab-com/eta/css/-/work_items/28)を参照してください。

この方法の使用中に問題が発生した場合は、[バグ Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?issuable_template=Bug)を作成し、`@jcolyer` に割り当ててください。その後、別の方法でテストしてください。

{{% /alert %}}

### 事前設定 {#presetup}

すべての項目について、テストスイートは事前設定がすべて完了していることを確認します。テストスイートを実行するには、最低限、次の準備が必要です。

- 環境内で `GITLAB_TOKEN` が定義されていること
- 環境内で `SB_ZD_SECRET` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ZD_CLIENT_NAME` が定義されていること（Zendesk Global のテスト用）
- 環境内で `US_SB_ZD_CLIENT_NAME` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ZD_SECRET` が定義されていること（Zendesk US Government のテスト用）
- ローカルリポジトリで `master` または `main` 以外のブランチを使用していること
- そのブランチに対して、オープンなマージリクエストが 1 つだけ存在すること
- ブランチ名から親 Issue を特定できること（最後のハイフンの後の数字である必要があります）

テストでエージェントとしてログインする必要がある場合は、リカバリーコードを生成する準備もしておくことをお勧めします。

項目によって多少異なる場合があるため、具体的な要件は対応するドキュメントを確認してください。

### ツールの使用方法

ツールを使用するには、次の手順を実行します。

1. 変更のマージリクエストを作成します
1. CLI を使用してローカルコンピューター上のリポジトリに移動します
1. MR のブランチにいることを確認します（例: ブランチが `jcolyer-issue-tracker-123` の場合は、リポジトリに移動して `git checkout jcolyer-issue-tracker-123` を実行してください）。
1. bundler を実行して（`bundle install`）、必要な Ruby gem がすべて揃っていることを確認します
   - `Gemfile.lock` ファイルが更新された gem の取得を妨げる可能性があるため、忘れずに削除してください
1. コマンド `./bin/perform_test_suite` を使用してスクリプトを実行します
