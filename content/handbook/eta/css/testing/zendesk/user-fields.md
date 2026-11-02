---
title: 'ユーザーフィールド'
description: 'Zendesk ユーザーフィールドの変更のテストに関するドキュメント'
upstream_path: "/handbook/eta/css/testing/zendesk/user-fields/"
upstream_sha: "d5f4e694763c3ac443cc3d58c6a9a81bafa06880"
lastmod: "2026-11-02T13:18:35-06:00"
translated_at: "2026-11-02T21:01:15+00:00"
stale: false
translator: codex
---

{{% alert title="技術的な詳細" color="primary" %}}

- Zendesk Global で有効なテストの仕組み:
  - [CustSuppOps Zendesk Test Suite Generator](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)
- Zendesk US Government で有効なテストの仕組み:
  - [CustSuppOps Zendesk Test Suite Generator](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)

{{% /alert %}}

## 手動テストの手順 {#manual-testing-protocol}

ユーザーフィールドの変更をテストする際には、次の 3 つの領域を確認する必要があります。

- マージリクエストを作成した後、サンドボックスにユーザーフィールドが存在すること
- ユーザーフィールドのカスタムオプションが正しいこと（フィールドにカスタムオプションがある場合のみ）
- API から取得した対応する JSON オブジェクトが YAML ファイルの内容と一致すること

### サンドボックスにユーザーフィールドが存在すること {#the-user-field-exists-in-the-sandbox}

これは、作成したマージリクエストに基づくサンドボックスへの同期で、ユーザーフィールドが正しく作成されたことを確認するテストです。このテストを行うには、サンドボックスに管理者としてログインし、管理パネルで `People > Configuration > User fields` に移動します。作成または更新するユーザーフィールドが一覧にあれば、テストは合格です。

### カスタムオプションが正しいこと {#the-custom-options-are-correct}

これは、マージリクエストに基づくサンドボックスへの同期で、ユーザーフィールドのカスタムオプションが正しく作成されたことを確認するテストです。このテストは、フィールドにカスタムオプションがある場合にのみ必要です。

このテストを行うには、サンドボックスに管理者としてログインし、管理パネルで `People > Configuration > User fields` に移動して、作成または更新するユーザーフィールドをクリックします。ユーザーフィールドのページで、カスタムオプションの名前とタグの両方を確認し、想定どおりであることを確かめます。完全に一致すれば、テストは合格です。

### API オブジェクトが YAML オブジェクトと一致すること {#api-object-matches-yaml-object}

Zendesk サンドボックスの API オブジェクトと、編集中のファイルの YAML オブジェクトを確認する必要があります。次のキーの値が一致することを確認します。

- `title`
- `type`
- `description`
- `key`
- `tag`（存在する場合）
- `position`
- `regexp_for_validation`（存在する場合）
- `custom_field_options`（存在する場合）

2 つのオブジェクトの値が _完全に_ 一致すれば、テストは合格です。

## テストスイートスクリプト {#test-suite-script}

### 事前準備 {#presetup}

スクリプトを実行する前に、次の設定が完了していることを確認します。

- 環境で `GITLAB_TOKEN` が定義されていること
- 環境で `SB_ZD_SECRET` が定義されていること（Zendesk Global のテスト用）
- 環境で `SB_ZD_CLIENT_NAME` が定義されていること（Zendesk Global のテスト用）
- 環境で `SB_ADMIN_EMAIL` が定義されていること（Zendesk Global のテスト用）
- 環境で `SB_ADMIN_PASSWORD` が定義されていること（Zendesk Global のテスト用）
- 環境で `US_SB_ZD_CLIENT_NAME` が定義されていること（Zendesk US Government のテスト用）
- 環境で `US_SB_ZD_SECRET` が定義されていること（Zendesk US Government のテスト用）
- 環境で `US_SB_ADMIN_EMAIL` が定義されていること（Zendesk US Government のテスト用）
- 環境で `US_SB_ADMIN_PASSWORD` が定義されていること（Zendesk US Government のテスト用）

管理者またはエージェントとしてのログインを伴うため、リカバリーコードを生成できるよう、そのユーザーの管理ページも用意しておく必要があります。

### 仕組み {#how-it-works}

スクリプトは次の「ステージ」に分かれて実行されます。

- 事前セットアップ
  - このステージでは、スクリプトで使用するさまざまな中核となる関数（主に各種 Faraday 接続）を定義します
- 事前テスト
  - このステージでは、[事前準備](#presetup)が正しく完了していることを確認します。次の点を確認します
    - 実行に必要な環境変数が設定されていること
    - 現在のブランチが `master` または `main` ではないこと
- 定義
  - このステージでは、スクリプトの実行に必要な各種変数を定義します
- GitLab 情報
  - このステージでは、現在の Git ブランチのマージリクエスト、対応する親 Issue、およびそのマージリクエスト内のユーザーフィールドの変更を特定します。
- ユーザーフィールドのテスト
  - このステージでは、実施するテストを定義して実行します
  - 前のステージで検出したユーザーフィールドの変更ごとに、親アイテムにリンクした子タスクアイテムを作成します
  - テストの実行に伴い、対応する子タスクアイテムにテストの詳細と結果をコメントします
    - ブラウザテストを実施した場合は、コメントにスクリーンショットを添付する必要があります
- 実行後の手順
  - このステージでは、すべての子タスクアイテムへのリンクを含む要約コメントを親 Issue に追加します
    - いずれかのテストでアップロードに失敗した場合に備え、作成したすべてのスクリーンショットの保存場所も示します

詳しい説明は、[対応する録画](https://drive.google.com/drive/folders/1NaVVlblqe_erqNXhBmQnRsK_epb3sbSR?usp=sharing)（社内リンク）を参照してください。
