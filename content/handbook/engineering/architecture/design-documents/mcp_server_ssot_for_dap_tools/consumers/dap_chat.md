---
title: "DAP ツールの SSoT としての MCP サーバー: DAP Chat"
description: "DAP Chat を、ネイティブツールからその置き換えとなる MCP ツールに移行する方法です。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/consumers/dap_chat/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:16:01+00:00"
translator: codex
stale: false
---

DAP Chat は、フローレジストリ内の従来の `chat` ワークフローと `agentic_chat` フローを指します。

## 現状 {#today}

- Chat には登録されたすべての MCP ツールが渡されます。GitLab.com では、同じセッションのネイティブツールと同じ処理を行う MCP ツールが約 20 個あります。
- 重複を排除しているのは `search` だけです。従来の `chat` ワークフローの [`NATIVE_TOOLS_REPLACED_BY_MCP_SERVER_TOOLS`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/304bfc29079a0fbb3fce1eb0d97dd8be74808e19/duo_workflow_service/workflows/chat/workflow.py#L167-169)は、MCP の `search` ツールが有効な場合に、ネイティブの `gitlab_issue_search`、`gitlab_blob_search`、`gitlab_merge_request_search` を除外します。登録されたツールではなく、[Rails が有効にしたツールのリストを読み取る](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/304bfc29079a0fbb3fce1eb0d97dd8be74808e19/duo_workflow_service/workflows/chat/workflow.py#L1003-1021)ため、MCP サーバーの起動に失敗すると、Chat には検索ツールが一切なくなります。`agentic_chat` はこれを適用しません。
- Rails が Chat 用に有効にするツールのリスト（[`gitlab_enabled_tools`](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/ee/app/services/ai/duo_workflows/mcp_config_service.rb#L68-73)）には、読み取りツールしか含まれないため（[`preapproved_tools_from_annotations`](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/ee/app/services/ai/duo_workflows/mcp_config_service.rb#L183-191)）、書き込みツールではこの方法で重複を排除できません。
- DWS は、一部のネイティブツールの出力を自ら処理します。`list_merge_request_diffs` と `get_commit_diff` の差分の除外、およびまだ対応する MCP ツールがない `gitlab_documentation_search` です。
- `agentic_chat` のフロー設定には `toolset: []` があり、MCP ツールの自動追加に依存しています。
- `search` の置き換えの切り替え後に再開するセッションは、引き続き動作します。これは 2026-11-02 に Claude Sonnet 5.5 を使用する GDK で、ターンの間に **Allow external MCP tools** を無効、有効と切り替えてテストしました。古い呼び出しは履歴に残ります。モデルが、すでに存在しないネイティブツールを呼び出すと、[`Toolset.validate_tool_call`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/22eff5dacc4d95b0f0211b7a43dc8b9f6f06d928/duo_workflow_service/tools/toolset.py#L251-257)から `Tool: 'gitlab_issue_search' not found` が返され、モデルは `gitlab_search` に切り替えました。置き換えを無効にすると、呼び出しに失敗することなく逆方向に切り替わりました。どちらの方向でも、そのツールはもはやリストにないため、以前の呼び出しは誤りだったとモデルはユーザーに伝えました。チャットパネルには、拒否された呼び出しは表示されません。

## 計画 {#plan}

1. **置き換えをツールレジストリに移し**、Chat を利用するすべての側が 1 つのルールを使用するようにします。私たちの MCP サーバーから登録されたツールが `com.gitlab/replaces` にネイティブツールを列挙している場合、DWS はそのネイティブツールを除外します（[決定 002](../decisions/002_pairs_in_meta.md)、[決定 003](../decisions/003_origin_rule.md)）。MCP サーバーがそのフィールドを追加するのは、置き換えフラグが有効な間だけです（[決定 007](../decisions/007_rollout_flags.md)）。
1. モデルに表示する MCP ツールに、**説明の行を追加します**。「`get_job_logs` を置き換えます。」という行です。
1. **説明の行を含めて、セッション再開のテストを再実行します。** 最初の新しいペアを有効にする前に、再開したセッションが引き続き MCP ツールに切り替わることと、以前の呼び出しは誤りだったとモデルがユーザーに伝えなくなることを確認します。
1. **`search` を修正します。** `com.gitlab/replaces` を送信しない GitLab バージョンのために既存の対応表を維持しつつ、MCP の `search` ツールが実際に登録された場合にのみネイティブの検索ツールを除外します。
1. [フェーズ](../_index.md#phases)のとおり、**ペアをグループごとに有効にします**。同じ名前のペアとエイリアスのペアをまとめて有効にし、次に作業が必要な各ペアを個別に、統合を待つ各ペアを統合後に有効にします。DWS で出力処理を行うペアは、MCP ツールが同じ処理を行うまで待ちます。

置き換えは `toolset:` と `tools:` コンポーネントで実行するため（[決定 010](../decisions/010_swap_in_toolset_and_tools_components.md)）、提供している Chat の設定は、[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)の計画どおり `tools:` に移行できます。Agentic Chat は、その設定が移行するまで、DWS が自動追加する MCP ツールを維持します。
