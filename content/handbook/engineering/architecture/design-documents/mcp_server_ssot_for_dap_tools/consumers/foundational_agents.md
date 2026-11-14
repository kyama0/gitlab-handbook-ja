---
title: "DAP ツールの SSoT としての MCP サーバー: 基本エージェント"
description: "GitLab が提供するエージェントが、ネイティブツールと並べてその置き換えとなる MCP ツールを列挙する方法です。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/consumers/foundational_agents/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:17:27+00:00"
translator: codex
stale: false
---

基本エージェントは、Planner、Security Analyst、CI Expert、Data Analyst、Onboarding など、GitLab が提供するエージェントです。Rails で定義されるものもあれば、セッション開始時に Rails が読み取る AI Catalog のアイテムもあります。

## 現状 {#today}

基本エージェントはネイティブツールを使用します。AI Catalog アイテムを持つエージェントには、そのリリース済みバージョンに列挙される MCP ツールも渡されます（[`foundational_agent_item_version`](https://gitlab.com/gitlab-org/gitlab/-/blob/cfe6dfa7ae987c50c48d6cc64b87985170a12e21/ee/app/services/ai/duo_workflows/mcp_config_service.rb#L142-157)）。

## 計画 {#plan}

1. ペアになっている各ネイティブツールに対応する MCP ツールを、エージェントの MCP ツールリストに追加し、ネイティブツールも維持します。
1. [DAP Chat](dap_chat.md)の DWS による置き換えは、セッションごとに 1 つを選択します。私たちの MCP サーバーから MCP ツールが到着した場合はそれを使用し、それ以外の場合はネイティブツールを使用します。MCP がないインスタンスは、現在と同じように動作し続けます。置き換えは `toolset:` と `tools:` コンポーネントで実行するため（[決定 010](../decisions/010_swap_in_toolset_and_tools_components.md)）、エージェントの設定は、[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)の計画どおり `tools:` に移行できます。
1. 移行中は、エージェントのプロンプトを書き換えません。MCP ツールの説明にある「置き換えます」という行が、ネイティブツールを指定するプロンプトに対応します。ネイティブツールを指定するプロンプトを列挙し、ネイティブツールを削除するときに更新します。

基本エージェントは、同じペアが Chat で動作した後に有効にします。
