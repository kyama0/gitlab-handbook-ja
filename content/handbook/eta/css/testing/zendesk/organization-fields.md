---
title: "組織フィールド"
description: "Zendesk の組織フィールドの変更をテストするためのドキュメント"
upstream_path: /handbook/eta/css/testing/zendesk/organization-fields/
upstream_sha: ddc319726d9e3f1cfd7f88faf4798bf31af6bf10
lastmod: "2026-10-16T09:59:20-05:00"
translated_at: "2026-10-20T13:31:55+00:00"
translator: codex
stale: false
---

{{% alert title="技術的な詳細" color="primary" %}}

- Zendesk Global で有効なテストの仕組み:
  - [CustSuppOps Zendesk テストスイートジェネレーター](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)
- Zendesk US Government で有効なテストの仕組み:
  - [CustSuppOps Zendesk テストスイートジェネレーター](/handbook/eta/css/testing/zendesk/#custsuppops-zendesk-test-suite-generator)
  - [テストスイートスクリプト](/handbook/eta/css/testing/zendesk/#test-suite-script)

{{% /alert %}}

## 手動テストの手順 {#manual-testing-protocol}

組織フィールドの変更をテストする際は、次の 3 点を確認する必要があります:

- マージリクエストの作成後、サンドボックスに組織フィールドが存在すること
- 組織フィールドのカスタムオプションが正しいこと（フィールドにカスタムオプションがある場合のみ）
- API から取得した比較対象の JSON オブジェクトが YAML ファイルの内容と一致すること

### サンドボックスに組織フィールドが存在すること {#the-organization-field-exists-in-the-sandbox}

これは、マージリクエストからのサンドボックス同期によって、組織フィールドが正しく作成されたことを確認するテストです。このテストを行うには、サンドボックスに管理者としてログインし、管理パネルの `People > Configuration > Organization fields` に移動します。作成または更新している組織フィールドがそこに表示されていれば、テストは合格です。

### カスタムオプションが正しいこと {#the-custom-options-are-correct}

これは、マージリクエストからのサンドボックス同期によって作成された、組織フィールドのカスタムオプションが正しいことを確認するテストです。このテストが必要なのは、フィールドにカスタムオプションがある場合のみです。

このテストを行うには、サンドボックスに管理者としてログインし、管理パネルの `People > Configuration > Organization fields` に移動して、作成または更新している組織フィールドをクリックします。組織フィールドのページでカスタムオプション（名前とタグの両方）を確認し、想定どおりであることを確認してください。完全に一致していれば、テストは合格です。

### API オブジェクトと YAML オブジェクトの一致 {#api-object-matches-yaml-object}

Zendesk サンドボックスの API オブジェクトと、編集中のファイルの YAML オブジェクトを確認する必要があります。次のキーの値が一致することを確認してください:

- `title`
- `type`
- `description`
- `key`
- `tag`（存在する場合）
- `position`
- `regexp_for_validation`（存在する場合）
- `custom_field_options`（存在する場合）

2 つのオブジェクトの値が _完全に_ 一致していれば、テストは合格です。

## テストスイートスクリプト {#test-suite-script}

### 事前準備 {#presetup}

スクリプトを実行する前に、次の準備が完了していることを確認してください:

- 環境に `GITLAB_TOKEN` が定義されていること
- 環境に `SB_ZD_SECRET` が定義されていること（Zendesk Global のテスト用）
- 環境に `SB_ZD_CLIENT_NAME` が定義されていること（Zendesk Global のテスト用）
- 環境に `SB_ADMIN_EMAIL` が定義されていること（Zendesk Global のテスト用）
- 環境に `SB_ADMIN_PASSWORD` が定義されていること（Zendesk Global のテスト用）
- 環境に `US_SB_ZD_CLIENT_NAME` が定義されていること（Zendesk US Government のテスト用）
- 環境に `US_SB_ZD_SECRET` が定義されていること（Zendesk US Government のテスト用）
- 環境に `US_SB_ADMIN_EMAIL` が定義されていること（Zendesk US Government のテスト用）
- 環境に `US_SB_ADMIN_PASSWORD` が定義されていること（Zendesk US Government のテスト用）

管理者またはエージェントとしてログインするため、リカバリーコードを生成できるよう、そのユーザーの管理ページも用意しておいてください。

### 仕組み {#how-it-works}

スクリプトは「段階」に分けて実行されます:

- 事前セットアップ
  - この段階では、スクリプトで使用する各種の中核的な関数（主に各種 Faraday 接続）を定義します
- 事前テスト
  - この段階では、[事前準備](#presetup)が正しく完了していることを確認します。次の点を確認します
    - 実行に必要な環境変数
    - 現在のブランチが `master` または `main` でないこと
- 定義
  - この段階では、スクリプトで使用する各種の必要な変数を定義します
- GitLab 情報
  - この段階では、現在の git ブランチのマージリクエスト、対応する親 Issue、およびマージリクエスト内で行われた組織フィールドの変更を特定します。
- 組織フィールドのテスト
  - この段階では、実施するテストを定義し、実行します
  - 先に検出した組織フィールドの変更ごとに、子タスク項目を作成します（親項目にリンクします）
  - テストの実行に伴い、対応する子タスク項目に、テストの詳細と結果をコメントとして追加します
    - ブラウザーテストを行った場合は、追加するコメントにスクリーンショットを添付してください
- 実行後の指示
  - この段階では、親 Issue に要約コメントを追加します（すべての子タスク項目にリンクします）
    - テストでアップロードに失敗した場合に備えて、作成したすべてのスクリーンショットの保存先も示します

詳しい説明については、[対応する録画](https://drive.google.com/drive/folders/1NaVVlblqe_erqNXhBmQnRsK_epb3sbSR?usp=sharing)（社内リンク）を参照してください。
