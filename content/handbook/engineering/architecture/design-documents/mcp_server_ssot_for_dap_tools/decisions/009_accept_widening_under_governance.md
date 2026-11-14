---
title: "DAP ツールの SSoT としての MCP サーバー ADR 009: ガバナンスが対応する場合にアクセスの拡大を受け入れます"
description: "MCP ツールが置き換え対象のネイティブツールより多くの操作を実行できる場合、ツールガバナンスが対応する範囲でのみ、アクセスの拡大を受け入れます。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/009_accept_widening_under_governance/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:14:34+00:00"
translator: codex
stale: false
---

## 背景 {#context}

一部の MCP ツールは、置き換え対象のツールより多くの操作を実行できます。

- ネイティブの `create_merge_request` はマージリクエストの作成のみを行えます。`save_merge_request` は作成と更新を行います。
- `create_work_item` と `update_work_item` は `save_work_item` に統合されます。
- `dismiss_vulnerability` など 5 つの脆弱性ツールは、5 つすべての操作を行う `save_vulnerability` に統合されます。
- `get_merge_request_conflicts` から `get_merge_request` への統合のように、ファセットを統合すると、より広い機能を持つツール全体が提供されます。

`create_merge_request` のみを選択したエージェントは、置き換え後にマージリクエストを更新できます。`create_merge_request` などの MCP エイリアスを保存した AI Catalog エージェントには、すでに現在も `save_merge_request` 全体が渡されます。

## 決定 {#decision}

ツールガバナンスが対応する場合に、ペアや統合によるアクセスの拡大を受け入れます。

- 古い名前は新しいツールのエイリアスになります。ツールガバナンスは、カタログのツール名である各エイリアスを新しいツールの識別名として扱うため、`create_merge_request` に対する Always Ask または Always Deny ルールは、`save_merge_request` へのすべての呼び出しに適用されます。
- 書き込みツールは事前承認されないため、管理者ルールで許可されない限り、ユーザーは引き続き書き込み呼び出しのたびに承認します。
- ツールガバナンスが MCP ツールを事前承認するのは、そのツールが対象とするすべてのネイティブ名の判定結果が Allow になる場合のみです。この判定には明示的なルールとデフォルトルールの両方を含めます。`create_merge_request` だけに対する Always Allow では、更新も行う `save_merge_request` は事前承認されません。このルールは [#638777](https://gitlab.com/gitlab-org/gitlab/-/work_items/638777)（機密）で追跡しています。
- ファセットの統合は、古いツールと同じ権限を使用する、同じリソースの読み取りのみを対象とします。

## 結果 {#consequences}

- DWS は、ツールガバナンスが有効な場合にのみ置き換えを行います（[ルール 1](../_index.md#rules-that-apply-everywhere)）。そのため、より広い機能を持つツールがネイティブツールを置き換えるのは、そのツールにルールを適用できる場合だけです。
- `create_merge_request` と `save_merge_request` のようにアクセスを拡大するペアは、上記の事前承認ルールがリリースされた後にのみ有効にします（[#638777](https://gitlab.com/gitlab-org/gitlab/-/work_items/638777)、機密）。
- `create_merge_request` のみを拒否した管理者は、`save_merge_request` による更新も拒否することになります。アクセスは以前より狭くなり、広くはなりません。
- `get_merge_request_conflicts` などのファセット名に対するルールは、`get_merge_request` 全体に引き継がれます。ガバナンスは、ツール名とそのエイリアス全体で最も厳しいルールを適用します（[`explicit_permission_for`](https://gitlab.com/gitlab-org/gitlab/-/blob/18c49b16b974d50620daf7f5c7a88daf11e51df4/ee/app/services/ai/tool_rules/resolution_service.rb#L112-140)）。管理者の意図より多くの操作をブロックする可能性はありますが、いずれかのルールが拒否する呼び出しを許可したり、いずれかが求める承認を省略したりすることはありません。
- 統合をリリースする前に、その影響を受けるグループの `ai_tool_rules` を確認します。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| 新しいツールの引数をエージェントごとに制限し、`create_merge_request` を選択したエージェントは作成だけを行えるようにします | 構築されていません。モデルは新しいツールをそのツール自身の名前で呼び出すため（[決定 004](004_tool_name.md)）、この制限には、ガバナンス内でツールの引数を対象としたルールが必要です。 |
| そのような制限が実装されるまで、アクセスを拡大するペアを無効のままにします | ペアの大半を占める書き込みツールで重複が残り、制限の実装時期も決まっていません。ガバナンスはすでにこれらに対応しています。 |
