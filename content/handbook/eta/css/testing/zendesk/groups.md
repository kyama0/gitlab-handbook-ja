---
title: 'グループ'
description: 'Zendesk グループの変更のテストに関するドキュメント'
upstream_path: "/handbook/eta/css/testing/zendesk/groups/"
upstream_sha: "a2f17ddfb308ad2cf8c33a838af1d4b482818d17"
lastmod: "2026-10-07T13:11:23-05:00"
translated_at: "2026-10-07T21:08:10+00:00"
translator: codex
stale: false
---

{{% alert title="技術的な詳細" color="primary" %}}

- Zendesk Global で有効なテストの仕組み:
  - [CustSuppOps Zendesk Test Suite Generator](./#custsuppops-zendesk-test-suite-generator)
- Zendesk US Government で有効なテストの仕組み:
  - [CustSuppOps Zendesk Test Suite Generator](./#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](./#test-suite-script)

{{% /alert %}}

## 手動テストの手順

グループの変更をテストする際には、次の 2 点を確認する必要があります。

- マージリクエストの作成後に、サンドボックス内にグループが存在すること
- API から取得した比較対象の JSON オブジェクトが、YAML ファイルの内容と一致すること

### サンドボックス内にグループが存在すること

これは、マージリクエストからのサンドボックス同期によってグループが正しく作成されたことを確認するテストです。このテストを行うには、サンドボックスに（管理者として）ログインし、管理パネルで `People > Team > Groups` に移動します。作成または更新するグループがそこに表示されていれば、テストは合格です。

### API オブジェクトと YAML オブジェクトが一致すること

Zendesk サンドボックスから取得した API オブジェクトと、編集中のファイルの YAML オブジェクトを確認する必要があります。次のキーの値が一致することを確認してください。

- `name`
- `description`
- `default`
- `deleted`
- `is_public`

2 つのオブジェクト間で値が _完全に_ 一致すれば、テストは合格です。

## テストスイートスクリプト {#test-suite-script}

### 事前設定 {#presetup}

スクリプトを実行する前に、次の準備が完了していることを確認してください。

- 環境内で `GITLAB_TOKEN` が定義されていること
- 環境内で `SB_ZD_SECRET` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ZD_CLIENT_NAME` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ADMIN_EMAIL` が定義されていること（Zendesk Global のテスト用）
- 環境内で `SB_ADMIN_PASSWORD` が定義されていること（Zendesk Global のテスト用）
- 環境内で `US_SB_ZD_CLIENT_NAME` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ZD_SECRET` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ADMIN_EMAIL` が定義されていること（Zendesk US Government のテスト用）
- 環境内で `US_SB_ADMIN_PASSWORD` が定義されていること（Zendesk US Government のテスト用）

管理者またはエージェントとしてログインするため、リカバリーコードを生成できるように、そのユーザーの管理ページも準備してください。

### 仕組み

スクリプトは「ステージ」ごとに実行されます。

- 事前設定
  - このステージでは、スクリプトで使用するさまざまな基本関数（主に各種の Faraday 接続）を定義します
- 事前テスト
  - このステージでは、[事前設定](#presetup)が正しく行われていることを確認します。次の点を確認します
    - 実行に必要な環境変数
    - 現在のブランチが `master` または `main` ではないこと
- 定義
  - このステージでは、スクリプトで使用するために必要なさまざまな変数を定義します
- GitLab 情報
  - このステージでは、Git ブランチのマージリクエスト、対応する親 Issue、およびマージリクエスト内で行われたグループの変更を特定します。
- グループのテスト
  - このステージでは、実行するテストを定義して実行します
  - 前のステージで検出されたグループの変更ごとに、子タスク項目を作成します（親項目にリンクします）
  - テストの実行時に、対応する子タスク項目にテストの詳細と結果を含むコメントを追加します
    - ブラウザテストを実行した場合は、投稿するコメントにスクリーンショットが含まれます
- 実行後の案内
  - このステージでは、親 Issue に概要コメントを追加します（すべての子タスク項目へのリンクを含みます）
    - いずれかのテストでアップロードが失敗した場合に備え、作成されたすべてのスクリーンショットの場所も示します

詳しい説明は、[対応する録画](https://drive.google.com/drive/folders/1NaVVlblqe_erqNXhBmQnRsK_epb3sbSR?usp=sharing)（社内リンク）を参照してください。
