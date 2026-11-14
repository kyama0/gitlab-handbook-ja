---
title: "DAP ツールの SSoT としての MCP サーバー ADR 002：ネイティブツールと MCP ツールの各ペアを一度宣言し、`_meta` で DWS に渡す"
description: "名前またはエイリアスが組み込みツール名と一致する一覧表示の MCP ツールをペアとし、DWS はその MCP ツールの `com.gitlab/replaces` からペアを把握します。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/002_pairs_in_meta/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:10:14+00:00"
translator: codex
stale: false
---

## 背景 {#context}

ネイティブ DWS ツールと、それを置き換える MCP ツールがペアになります。たとえば、`get_job_logs` と `get_job` です。ペアを
把握する必要がある箇所は 3 つあります。AI Catalog の選択 UI、エージェントのツールを構築する際の Rails、セッション内で
ツールを置き換える際の DWS です。現在 DWS が把握しているペアは、従来の `chat` ワークフローにハードコードされた `search` だけであり、
届いたツールではなく Rails が有効にしたツールを確認しています。

## 決定 {#decision}

- 名前またはエイリアスが組み込みツール名と一致する、一覧に表示される MCP ツールをペアとします。ツールガバナンスは、すでに
  同じ方法でこれらの名前を見つけています
  （[`catalog_identities_for`](https://gitlab.com/gitlab-org/gitlab/-/blob/18c49b16b974d50620daf7f5c7a88daf11e51df4/ee/lib/ai/tool_rules/governed_mcp_tools.rb#L55-59)）。
  そのため、MCP ツールにガバナンスを適用するためのエイリアスが、ペアも宣言します。別のリストは不要であり、ペアは
  ガバナンスの対象でなければ存在できません。
- 一覧非表示の MCP ツールは意図的に数えません。一覧非表示のツールは、`create_issue` から `save_work_item` への統合のように、
  より広い機能を持つツールへの統合を待っています。組み込みツールとペアにすると、ネイティブツールをまず
  一覧非表示のツールへ、次に統合後のツールへと 2 回置き換えることになります。また、選択 UI は組み込みツールを非表示にする一方、一覧非表示のツールも
  提供しないため、エージェント作成者はその機能をまったく選べなくなります。これらのペアは統合を待ちます
  （[ペアのページ](../pairs.md#waits-on-a-fold)）。一覧非表示のツールもガバナンスの対象なので、すべてのペアにガバナンスが適用され続けます。
- MCP サーバーは、`tools/list` 内の MCP ツールの `_meta` に、既存の
  `com.gitlab/toolset` キーと並べてペアを設定します。

  ```json
  "_meta": { "com.gitlab/toolset": "ci", "com.gitlab/replaces": ["get_job_logs"] }
  ```

  これは、置き換えフラグ（[決定 007](007_rollout_flags.md)）と `duo_mcp_tool_governance` が両方とも
  有効な間だけ行います。`duo_mcp_tool_governance` がないと、ネイティブツール名に対するルールは MCP ツールに適用されません。
- Workhorse は、私たちの MCP サーバーのツールについてのみ、`com.gitlab/replaces` を DWS に渡します。現在送信するのは名前、
  説明、入力スキーマ、`trusted` だけなので、Workhorse と DWS の間のインターフェース仕様に新しいフィールドが必要です。この
  フィールドは、各ツールのサーバーと取得元も送信する [#635112](https://gitlab.com/gitlab-org/gitlab/-/work_items/635112)
  （非公開）と同じインターフェース仕様の変更に含めます（[決定 003](003_origin_rule.md)）。
- Workhorse は、クライアントが送信したツールについて、すでに `trusted` を消去している箇所でこのフィールドも消去し、
  Orbit、Slack、AI Catalog の MCP サーバーからこのフィールドをコピーすることはありません。
- DWS は、[決定 003](003_origin_rule.md)の条件を満たすツールについてのみ `com.gitlab/replaces` を読み取ります。古い Workhorse は
  未知のフィールドを破棄するため、このフィールドが届くのは、このインターフェース仕様の変更を含む Workhorse からだけです。

## 影響 {#consequences}

- ペアは MCP ツールとともに渡されるため、DWS がペアを見るのはそのツールが実際に届いた場合だけです。ペアの情報と、ツールが
  存在することの確認は、同じシグナルになります。
- DWS 独自の新しいリストも、Rails からの新しいヘッダーも不要です。
- 外部 MCP クライアントには `_meta` キーが 1 つ増えますが、無視できます。
- カスタムエージェントも同じペアを使います。Rails は保存済みの組み込みツールと並べて MCP ツールを送り、DWS が置き換えます
  （[決定 005](005_remove_built_ins.md)）。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| Rails からペアを列挙するヘッダーを送る | DWS は各 MCP ツールが届いたかを依然として別途確認する必要があり、ヘッダーには起動に失敗したツール名が含まれる可能性があります。 |
| ツールの説明に「`get_job_logs` を置き換えます」と記載する | すべての MCP クライアントに、そのクライアントにはないツールについての一文が表示されます。 |
| DWS に対応表を保持する | Rails と同期させるリストがもう 1 つ必要となり、Rails からペアごとに有効化できません。 |
| 各組み込みツールに `replaced_by_mcp_tool` キーを付ける | エイリアスに加えて別のリストが必要となり、MCP ツールにガバナンスが適用される前にペアが有効になる可能性があります。 |
