---
title: "DAP ツールの SSoT としての MCP サーバー ADR 006：私たちの MCP サーバーを MCP のオプトイン設定の対象外にする"
description: "最初のフェーズとして、外部 MCP ツールの設定と `mcp_client` フラグが私たちの MCP サーバーのツールをブロックしないようにします。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/006_no_opt_in_for_our_mcp_server/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:12:02+00:00"
translator: codex
stale: false
---

## 背景 {#context}

私たちの MCP サーバーのツールが DAP セッションに届くのは、Rails が確認する `mcp_client` フィーチャーフラグ
（[ロールアウト Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/572340)）がそのユーザーで有効になっており、かつ
トップレベルグループで、DWS が確認する
[**外部 MCP ツールを許可する**](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_clients/#allow-external-mcp-tools)
（`duo_workflow_mcp_enabled`）が有効になっている場合だけです。どちらもデフォルトでは無効です。このグループ設定は、
私たちの MCP サーバーのツールが DAP に届くようになる前に、ユーザーが IDE で設定するサードパーティの MCP サーバー用に追加されました。無効の場合、
DWS は信頼済みの Orbit ツールを除き、
[すべての MCP ツールをセッションから除外します](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/304bfc29079a0fbb3fce1eb0d97dd8be74808e19/duo_workflow_service/workflows/abstract_workflow.py#L459-470)。

[ai-assist!7058](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7058)は、
ファーストパーティの MCP サーバーにこの設定は不要という理由で、Orbit を対象外にしました
（[knowledge-graph#1036](https://gitlab.com/gitlab-org/orbit/knowledge-graph/-/work_items/1036)）。私たちの MCP サーバーは、理由の説明なしに
設定の対象として残されました。Duo CLI 独自の MCP サーバーにも同じ問題があり
（[gitlab-lsp#3106](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/work_items/3106)）、
[ai-assist!7500](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7500)で
そのツールも対象外になりました。その結果、私たちの MCP サーバーが設定の対象として残っています。

この設定が私たちの MCP サーバーを制限している間、設定が無効のグループには MCP の代替ツールが届かないため、そのネイティブツールを
削除できません。

## 決定 {#decision}

これを計画の最初のフェーズとします。このフェーズがリリースされるまで、どのコードもネイティブツールを削除しません。

- DWS は、Orbit と同じく、私たちの MCP サーバーの信頼済みツールを **外部 MCP ツールを許可する** の対象外にします。
- `mcp_client` をデフォルトで有効にするか、私たちの MCP サーバーに適用しないようにします。
- フェーズ 1 は、`duo_workflow_local_tool_governance`
  （[#613544](https://gitlab.com/gitlab-org/gitlab/-/issues/613544)）が有効な環境でのみリリースし、グループにツールが届く前に、管理者がすべての
  セッションで私たちのツールを制限できるようにします。ホスト型 DWS はすべてのインスタンスにサービスを提供するため、DWS はツールガバナンスが
  有効なセッションでのみこの適用除外を行います。これは置き換え前に行う確認と同じです
  （[決定 007](007_rollout_flags.md)）。Rails が `mcp_client` をデフォルトで有効にするのは、
  `duo_workflow_local_tool_governance` がデフォルトで有効になってからです。

ユーザーが IDE で設定したり AI Catalog 経由で追加したりするサーバーなど、他のすべての MCP サーバーには、
引き続きこの設定を適用します。

## 影響 {#consequences}

- ツールガバナンスが有効なセッションでは、設定が無効のグループにも、ネイティブツールを置き換えないツールを含め、私たちの MCP サーバーのすべてのツールが
  届きます。それらをブロックしたい管理者は、[ツールガバナンス](https://docs.gitlab.com/user/ai-governance/tool-governance/)を使います。
- Orbit の適用除外と同じく、これは Workhorse が
  [クライアントから送信されたツールの `trusted` を消去する](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/257045) GitLab バージョンでのみ適用します。古い
  バージョンではネイティブツールを保持します。これはすでに[ルール 5](../_index.md#rules-that-apply-everywhere)で扱っています。
- 両方が完了するまで、置き換えフラグはデフォルトで無効のままにします
  （[決定 007](007_rollout_flags.md)）。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| 両方の設定を残し、無効にしているグループにはネイティブツールを残す | そうすると、ネイティブツールを削除できなくなります。 |
| ネイティブツールを置き換える MCP ツールだけを対象外にする | 私たちの MCP サーバーの残りのツールも外部ツールではないのに、引き続きこの設定で非表示になります。 |
