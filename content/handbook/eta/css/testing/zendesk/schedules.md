---
title: 'スケジュール'
description: 'Zendesk スケジュールの変更をテストするためのドキュメント'
upstream_path: "/handbook/eta/css/testing/zendesk/schedules/"
upstream_sha: "ab93800e4c241789ac67785899fa20ffa1eb0854"
lastmod: "2026-11-04T10:19:23-06:00"
translated_at: "2026-11-05T14:33:39.824673+00:00"
stale: false
translator: codex
---

{{% alert title="技術的な詳細" color="primary" %}}

- Zendesk Global で有効なテスト手段:
  - [CustSuppOps Zendesk Test Suite Generator](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)
- Zendesk US Government で有効なテスト手段:
  - [CustSuppOps Zendesk Test Suite Generator](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)

{{% /alert %}}

## 手動テストの手順 {#manual-testing-protocol}

スケジュールの変更をテストするときは、次の 3 点を確認する必要があります。

- マージリクエストの作成後に、Sandbox にスケジュールが存在すること
- API から取得した比較対象の JSON オブジェクトが、YAML ファイルの内容と一致すること
- 適切なチケットにスケジュールが適用されること

### Sandbox にスケジュールが存在すること {#the-schedule-exists-in-the-sandbox}

これは、マージリクエストからの Sandbox 同期によってスケジュールが正しく作成されたことを確認するテストです。このテストを行うには、Sandbox に管理者としてログインし、管理パネルの `Objects and rules > Business rules > Schedules` に移動します。作成または更新するスケジュールが一覧に表示されていれば、テストは成功です。

### API オブジェクトと YAML オブジェクトが一致すること {#api-object-matches-yaml-object}

これには、Zendesk Sandbox の API オブジェクトと、編集中のファイルの YAML オブジェクトを確認する必要があります。次のキーの値が一致することを確認します。

- `name`
- `time_zone`
- `intervals`

2 つのオブジェクトの値が _完全に_ 一致していれば、テストは成功です。

### 適切なチケットにスケジュールが適用されること {#the-schedule-is-applied-to-an-appropriate-ticket}

これには、通常そのスケジュールが適用される条件でチケットを作成する必要があります（通常は、適用するトリガーについての知識が必要です）。ファイルで定義された `test_user` を使用して、正しいフォームとフィールドでチケットを作成します。その後、チケットへのすべての更新が完了したら、イベントを確認します。イベント内の最後のスケジュール変更が、作成または編集しているスケジュールへの変更であれば、テストは成功です。

## テストスイートスクリプト {#test-suite-script}

### 事前設定 {#presetup}

スクリプトを実行する前に、次の設定が完了していることを確認します。

- 環境内で `GITLAB_TOKEN` が定義されていること
- 環境内で `SB_ZD_SECRET` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ZD_CLIENT_NAME` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ADMIN_EMAIL` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ADMIN_PASSWORD` が定義されていること（Zendesk Global のテスト用）
- 環境内で `US_SB_ZD_CLIENT_NAME` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ZD_SECRET` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ADMIN_EMAIL` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ADMIN_PASSWORD` が定義されていること（Zendesk US Government のテスト用）

管理者またはエージェントとしてログインするため、そのユーザーの管理ページも開き、リカバリーコードを生成できるようにしておく必要があります。

### 仕組み {#how-it-works}

スクリプトは、次の「段階」に分けて実行されます。

- 事前設定
  - この段階では、スクリプトで使用するさまざまな基本関数を定義します（主に、さまざまな Faraday 接続）。
- テスト前の確認
  - この段階では、[事前設定](#presetup)が正しく行われたかを確認します。次の項目を確認します。
    - 実行に必要な環境変数
    - 現在のブランチが `master` または `main` ではないこと
- 定義
  - この段階では、スクリプトで使用するさまざまな変数を定義します。
- GitLab 情報
  - この段階では、現在の git ブランチのマージリクエスト、対応する親 Issue、マージリクエスト内で行われたスケジュールの変更を特定します。
- スケジュールのテスト
  - この段階では、実施するテストを定義し、実行します。
  - 前の段階で検出したスケジュールの変更ごとに、子タスク項目を作成します（親項目にリンクします）。
  - テストを実施するにつれ、対応する子タスク項目に、テストの詳細と結果を記載したコメントを追加します。
    - ブラウザーテストを行った場合は、そのコメントにスクリーンショットを添付する必要があります。
- 実行後の手順
  - この段階では、親 Issue に要約コメントを追加します（すべての子タスク項目にリンクします）。
    - また、いずれかのテストでアップロードが失敗した場合に備えて、作成したすべてのスクリーンショットの保存場所も示します。

さらに詳しい説明は、[対応する録画](https://drive.google.com/drive/folders/1NaVVlblqe_erqNXhBmQnRsK_epb3sbSR?usp=sharing)（社内リンク）を参照してください。
