---
title: "DAP ツールの SSoT としての MCP サーバー：ネイティブツールと MCP ツールのペア"
description: "MCP ツールで置き換え可能なネイティブ DAP ツールを、各ペアに必要な作業量ごとにまとめます。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/pairs/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:10:14+00:00"
translator: codex
stale: false
---

MCP ツールで置き換え可能なネイティブ DAP ツールです。どのペアも、有効にする前に入力
スキーマを含めた同等性の確認が必要です。

各ペアの両ツールは、同じ GitLab データを読み書きします。「引数の差分」列には、ネイティブツールの引数のうち
MCP ツールが受け取らないものを記載しています。2026-11-09 時点の内容であり、ツールの変更に伴って変わります。

モデルが呼び出す場合、置き換え後は MCP ツールの引数がモデルに見えるため、差分があることはその
選択肢が失われることだけを意味します。一方、決定論的なステップがその引数を送信すると失敗します。

## 同じ名前 {#same-name}

ネイティブツールと MCP ツールの名前が同じです。

| ネイティブツール | MCP ツール | 引数の差分 |
|---|---|---|
| `get_commit` | `get_commit` | `stats` |
| `get_merge_request` | `get_merge_request` | なし |
| `get_project` | `get_project` | なし。MCP サーバーはネイティブツールの整数の `project_id` を文字列に変換します。 |
| `get_repository_file` | `get_repository_file` | なし |
| `get_work_item` | `get_work_item` | `types` |
| `list_commits` | `list_commits` | `all`、`trailers`、`page`。MCP ツールはカーソルでページ分割します。 |
| `list_repository_tree` | `list_repository_tree` | `page`、`per_page`。MCP ツールはカーソルでページ分割します。 |
| `list_vulnerabilities` | `list_vulnerabilities` | `per_page`、`page`、`fetch_all_pages`。MCP ツールは `first` と `after` を使います。 |
| `list_work_items` | `list_work_items` | なし |

## ネイティブツール名がすでにエイリアスになっている {#the-native-name-is-already-an-alias}

MCP ツールの `tool_aliases` に、ネイティブツール名がすでに含まれています。

| ネイティブツール | MCP ツール | 引数の差分 |
|---|---|---|
| `create_merge_request`, `update_merge_request` | `save_merge_request` | `url`。ネイティブツールのラベル引数はカンマ区切りの文字列で、MCP ツールは配列を受け取ります。 |
| `create_merge_request_note`, `create_work_item_note` | `save_note` | `note_id`。MCP ツールでは `discussion_id` と `method` に置き換わります。`create_work_item_note` には `start_discussion` もあります。 |
| `create_work_item`, `update_work_item` | `save_work_item` | `hierarchy_widget.parent_id`（MCP ツールでは `parent_id`）と `readiness_score_feedback` |
| `create_commit` | `add_commit` | `author_email` と `author_name`。`branch` がない場合、ネイティブツールは `duo-edit-<time>` ブランチを作成しますが、MCP ツールでは `branch` が必須です。 |
| `create_branch` | `add_branch` | なし |
| `gitlab_merge_request_search` | `list_merge_requests` | `author_id`、`assignee_id`、`reviewer_id`、`scope: all`。ネイティブツールは検索ではなく、マージリクエスト一覧の API を呼び出します。 |
| `create_vulnerability_issue`, `confirm_vulnerability`, `dismiss_vulnerability`, `revert_to_detected_vulnerability`, `update_vulnerability_severity` | `save_vulnerability` | MCP ツールでは `action` が必須ですが、エイリアスでは設定されません。`create_vulnerability_issue` と `update_vulnerability_severity` は `vulnerability_ids` にリストを受け取り、MCP ツールは 1 つの `vulnerability_id` を受け取ります。 |

## 先に作業が必要 {#needs-work-first}

以下の作業を終えてネイティブツール名を MCP ツールのエイリアスに追加すると、それぞれがペアになります。

| ネイティブツール | MCP ツール | 不足しているもの | 引数の差分 |
|---|---|---|---|
| `get_job_logs` | `get_job` | エイリアスは単数形の `get_job_log` です。同じデフォルト値を持つ `get_job_logs` の追加が必要です。 | `url` |
| `get_pipeline_failing_jobs` | `get_pipeline` | 引数と出力の比較。 | `url`、`merge_request_iid`、`exclude_allow_failure`。MCP ツールでは `pipeline_id` が必要です。 |
| `get_current_user` | `get_user` | 引数と出力の比較。 | なし。エイリアスで `me: true` を設定する必要があります。 |
| `get_commit_diff` | `get_commit` | 引数と出力の比較。DWS はネイティブツールの出力に差分の除外処理を適用します。 | なし |
| `gitlab_documentation_search` | `search_documentation` | MCP ツールはまだマージされていません。現在、DWS の Chat はこのツールを個別に処理しています。 | MCP ツールができるまで不明 |
| `gitlab_issue_search`, `gitlab_blob_search`, `gitlab_commit_search`, `gitlab_group_project_search`, `gitlab_milestone_search`, `gitlab_note_search`, `gitlab_wiki_blob_search` と `gitlab__user_search` | `search` | 各スコープの確認が必要です。従来の Chat は、すでに `search` のために `gitlab_issue_search` と `gitlab_blob_search` を外しています。`gitlab_merge_request_search` も外していますが、このページでは代わりに `list_merge_requests` とペアにしています。 | `id` と `search_type`。MCP ツールでは `project_id` または `group_id` です。`issues` スコープは MCP ツールのリストになく、`work_items` が含まれています。高度な blob 検索は `api_url` を受け取ります。 |

## 統合待ち {#waits-on-a-fold}

ネイティブツールに対応する MCP ツールが一覧非表示の場合、まだペアとは見なしません
（[決定 002](decisions/002_pairs_in_meta.md)）。そのツールが代替ツールに統合され
（[外部 MCP クライアント](consumers/external_mcp_clients.md)）、ネイティブツール名が一覧に表示されるツールのエイリアスになった時点でペアになります。

ここに示す引数の差分は、一覧非表示の MCP ツールとの差分です。統合時のエイリアスでは、それらに加え、
代替ツールとの差分にも対応する必要があります。

| ネイティブツール | 一覧非表示の MCP ツール | 統合後の代替ツール | 引数の差分 |
|---|---|---|---|
| `create_issue` | `create_issue` | `save_work_item` | `due_date` と `issue_type` |
| `get_issue` | `get_issue` | `get_work_item` | なし |
| `list_merge_request_diffs` | `get_merge_request_diffs`（ネイティブツール名をエイリアスとして持つ） | `get_merge_request` | なし |
| `list_all_merge_request_notes` | `get_merge_request_notes`（ネイティブツール名をエイリアスとして持つ） | `get_merge_request` | なし。ネイティブツールはすべてのページを取得し、MCP ツールは 1 ページを返します。 |
| `get_work_item_notes` | `get_workitem_notes`（ネイティブツール名をエイリアスとして持つ） | `get_work_item` | `notes_filter`、`sort`、`page_size`、`pagination_cursor`。MCP ツールは `first`、`last`、`after`、`before` を使います。 |

## ネイティブ DWS コードのない組み込みツール {#built-in-tools-with-no-native-dws-code}

- `get_merge_request_conflicts`：Rails は代わりに同名の一覧非表示の MCP ツールを配信するため、必要なのは
  統合だけです。
