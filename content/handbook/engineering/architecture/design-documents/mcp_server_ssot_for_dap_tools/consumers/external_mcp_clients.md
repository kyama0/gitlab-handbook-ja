---
title: "DAP ツールの SSoT としての MCP サーバー: 外部 MCP クライアント"
description: "MCP サーバーを直接呼び出すクライアントでの変更点です。置き換え対象のツールはエイリアスになり、すべての古い名前は動作し続けます。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/consumers/external_mcp_clients/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:17:27+00:00"
translator: codex
stale: false
---

Claude Code、Cursor、IDE 拡張機能などの外部 MCP クライアントは、MCP サーバーを直接呼び出します。これらのクライアントに対する今回の変更点は 1 つです。他のツールに置き換えられるツールは、そのツールのエイリアスになります。すべての古い名前は動作し続けます。

## 現状 {#today}

MCP サーバーには、リストに載らないツールが 10 個あります。これらは `tools/list` に表示されませんが、呼び出しは引き続き動作します。そのうち 9 個はファセットまたはより広い機能を持つツールに置き換えられ、その処理を提供するコードがまだ存在します。

| リストに載らないツール | 置き換え先 | 古い名前が暗黙に指定する引数 |
|---|---|---|
| `get_merge_request_diffs` | `get_merge_request` | `include: ["diffs"]` |
| `get_merge_request_commits` | `get_merge_request` | `include: ["commits"]` |
| `get_merge_request_pipelines` | `get_merge_request` | `include: ["pipelines"]` |
| `get_merge_request_conflicts` | `get_merge_request` | `include: ["conflicts"]` |
| `get_merge_request_notes` | `get_merge_request` | `include: ["notes"]` |
| `get_pipeline_jobs` | `get_pipeline` | `include: ["jobs"]` |
| `get_workitem_notes` | `get_work_item` | `include: ["notes"]` |
| `get_issue` | `get_work_item` | なし |
| `create_issue` | `save_work_item` | `type_name: "Issue"` |

10 個目の `manage_pipeline` は、置き換えられるのではなく範囲が狭められるため、対象外です。

MCP サーバーはすでにエイリアス（ツールの `tool_aliases`）をサポートしており、`get_job` はすでにそのエイリアスである `get_job_log` への呼び出しを `include: ["log"]` として扱っています。不足しているのは、エイリアスが引数を設定し、引数名を変更するための汎用的な方法です。

## 計画 {#plan}

置き換え対象のツールは、次の手順を経ます（[決定 001](../decisions/001_fold_into_alias.md)）。

1. 古いツールを**リストから除外します**。これら 9 個については完了しています。
1. ツールの `replaced_by` で、置き換え先と古い名前が暗黙に指定する引数を**宣言します**。これが「非推奨」の状態です。`unlisted` だけではツールを非表示にするだけであり、別の理由で非表示になっているツールもあります。`replaced_by` は代わりに使うものも示すため、エラー、AI Catalog ピッカー、ガバナンス、`tool_call` ログのすべてで置き換え先の名前を示せます。これらは現在手作業で管理しているリストの代わりに、この 1 つの宣言を読み取ります。
1. 古いツールを置き換え先に**統合します**。古いコードを削除し、置き換え先の `tool_aliases` に古い名前を追加して、そのエイリアスに引数のデフォルト値と名前の変更を設定します。古い名前と古い引数による呼び出しは、引き続き動作します。
1. 呼び出すものがなくなり、保存済みのエージェントやフローのバージョンにも名前が保存されなくなったら、MCP サーバーの非推奨化ポリシーに従ってエイリアスを**削除します**（[決定 001](../decisions/001_fold_into_alias.md)）。

統合によって、古い名前を保存した AI Catalog エージェントを含むすべての呼び出し元で、その名前が引き続き動作します。エージェントはセッション開始時に、ツールを呼び出さずに保存済みの名前を解決するため、エイリアスがない名前は、誰かが読めるエラーも出さずに除外されます。そのため、エージェントにとってツールの名前変更を安全にするのは、エラーメッセージではなくエイリアスです。

### 各統合での確認事項 {#checks-for-each-fold}

1. 置き換え先が、古いツールの引数、出力、ページネーションに対応していること。
1. 古い名前と古い引数による呼び出しが成功することを、スペックで確認すること。
1. 古いツールに、置き換え先では異なる名前になっている引数があった場合、古い引数に対するエラーで新しい名前が示されることを、スペックで確認すること。
1. ガバナンス上の識別名: 古い名前に対する管理者ルールが、置き換え先に適用されること。最も厳しいルールが優先されるため、`get_merge_request_conflicts` を拒否すると `get_merge_request` 全体が拒否されます（[決定 009](../decisions/009_accept_widening_under_governance.md)）。統合をリリースする前に、これによる影響を受けるグループの `ai_tool_rules` を確認します。
1. ユーザードキュメントで、古い名前が置き換え先のエイリアスとして列挙され、リリースノートで言及されていること。
1. GitLab が提供する、古いツールを指定しているプロンプトとスキルが、更新対象として列挙されていること。

### `tools/list` での変更点 {#what-changes-in-toolslist}

エイリアスは、現在と同じように `tools/list` に載せません。変更点は 1 つだけで、ネイティブの DAP ツールを置き換えるツールは、`_meta` に `com.gitlab/replaces` を持ちます（[決定 002](../decisions/002_pairs_in_meta.md)）。他のクライアントはこれを無視できます。

## 未解決の問題 {#open-questions}

1. **出力の変更は破壊的変更ですか？** 統合によって、古いツールと同じ出力を常に返せるとは限りません。置き換え先は、より多くのフィールドを返したり、異なるネスト構造にしたり、異なる方法でページネーションを行ったりする可能性があります。出力の変更が破壊的変更である場合、出力を変更する統合には、リリース前の通知が必要です。[提案中の gitlab!256213](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/256213)で追加するツールバージョンの指定では、古い出力を維持できません。出力スキーマを宣言する MCP ツールはなく、ツールは同じものをそのまま変更するためです。

## 関連する取り組み {#related-work}

- [エピック &24001](https://gitlab.com/groups/gitlab-org/-/work_items/24001): 識別子、ページネーション、列挙値の大文字小文字表記など、カタログ全体で一貫性を確保する取り組みです。非推奨化の手順として、同じエイリアスとリストからの除外を使用します。
