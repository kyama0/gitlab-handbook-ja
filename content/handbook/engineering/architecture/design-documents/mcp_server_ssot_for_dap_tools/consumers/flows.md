---
title: "DAP ツールの SSoT としての MCP サーバー: フロー"
description: "フローがまだフェーズに含まれていない理由と、私たちの MCP ツールが渡されたときに適用される内容です。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/consumers/flows/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:17:27+00:00"
translator: codex
stale: false
---

フローには、GitLab が提供する基本フローと、AI Catalog のカスタムフローがあります。どちらもフローレジストリで実行します。従来の Python ワークフローは対象外です。

## 現状 {#today}

- フローはネイティブツールのみを使用するため、重複はありません。
- Rails は私たちの MCP サーバーをフローに送信しません。送信するのは、Agentic Chat と、独自のツールリストを持つエージェントだけです。
- フロー設定では MCP ツールを指定できません。

## フロー内での MCP ツールの実行方法 {#how-mcp-tools-would-run-in-a-flow}

Chat と同じように Workhorse 経由で実行します（[決定 008](../decisions/008_flows_through_workhorse.md)）。GitLab 18.7 以降、CI で実行するフローは Workhorse の websocket 経由で DWS に接続します。Workhorse は、Rails が送信する設定から私たちの MCP サーバーのツールを起動し、ツールの呼び出しを自ら実行します。新しい経路は必要ありません。

## 計画 {#plan}

フローはフェーズに含まれていません。[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)のもとでは、Rails は、コンポーネントが `tools:` を使用するフローにのみ私たちの MCP サーバーを送信します。フェーズ B のパート 1 では、基本フローを `tools:` に移行する際に許可リストへ追加し、パート 2 では `tools:` を使用するカスタムフローを追加します。`toolset:` のままのフローには、私たちの MCP サーバーは渡されません。ADR-005 のフェーズ C でペアが追加されるまでは、ツールを指定する `tools:` エントリには、最初にネイティブツールが渡されるため、フローに両方が渡されることはありません。

[すべての場所に適用されるルール](../_index.md#rules-that-apply-everywhere)が適用されます。置き換えは、フローの `toolset:` と `tools:` コンポーネントのどちらでも実行します（[決定 010](../decisions/010_swap_in_toolset_and_tools_components.md)）。

決定論的なステップ（`tool_name`）にはエラーを読むモデルがないため、ツールの欠落や適合しない引数があると実行に失敗します。これらのステップをどのように MCP ツールに移行するかは未解決の問題です（[基本的な設計領域](../_index.md#fundamental-design-areas)）。新しいフローバージョンでステップを移行する場合は、メジャーバージョンにする必要があります。Rails は `^3.0.0` のような範囲を要求し、DWS はその範囲の最高バージョンを提供するため、マイナーバージョンでは古い GitLab バージョンにも届いてしまいます。

以下は、2026-11-09 時点で、ペアになっているツールを呼び出す GitLab の決定論的なステップです。このリストは変わります。ここでは、どのような破壊的変更があるかを示しています。

| フロー | ステップが呼び出すツール | 送信する引数 | MCP ツール | 引数は適合しますか？ |
|---|---|---|---|---|
| `security_review` 2.0.0 | `get_merge_request` | `url` | `get_merge_request` | はい |
| `security_review` 2.0.0 | `update_merge_request` | `url`, `add_labels`, `remove_labels` | `save_merge_request` | いいえ。MCP ツールには `url` がなく、ラベルはカンマ区切りの文字列ではなく配列として受け取ります。 |
| `readiness_score` 1.0.0 | `get_work_item`, `update_work_item` | `url`, `readiness_score` | `get_work_item`, `save_work_item` | はい |
| `readiness_score` 1.0.0, `workplan` 1.3.0 | `get_work_item_notes` | `url` と、`workplan` では `page_size` | 統合後の、ノートを含めた `get_work_item` | いいえ。`include` が必要で、`page_size` は `notes_first` になります。 |
| `fix_pipeline` 1.0.4 | `get_pipeline_failing_jobs` | `url`, `exclude_allow_failure` | `get_pipeline` | いいえ。MCP ツールには `url` も `exclude_allow_failure` もなく、`pipeline_id` が必要です。 |
| `fix_pipeline` 1.0.4 | `list_merge_request_diffs` | `url` | 統合後の、差分を含めた `get_merge_request` | いいえ。`include` が必要です。 |

引数が適合する場合でも、後続のステップはツールの出力を読み取りますが、MCP ツールの出力は構造が異なります。
