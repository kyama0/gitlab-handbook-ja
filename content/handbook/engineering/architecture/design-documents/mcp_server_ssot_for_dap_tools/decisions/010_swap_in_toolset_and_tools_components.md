---
title: "DAP ツールの SSoT としての MCP サーバー ADR 010: DWS は `toolset:` と `tools:` コンポーネントでツールを置き換えます"
description: "DWS は両方の種類のコンポーネントでネイティブツールを対応する MCP ツールに置き換えるため、私たちの MCP ツールがないセッションではネイティブツールを維持します。"
status: proposed
creation-date: "2026-10-29"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/010_swap_in_toolset_and_tools_components/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:14:34+00:00"
translator: codex
stale: false
---

## 背景 {#context}

- 現在、提供している Chat と基本エージェントの設定は、すべて `toolset:` 配下にツールを列挙しています。
- `chat` または `chat-partial` フローの `toolset:` コンポーネントでは、DWS が登録されたすべての MCP ツールを追加します。GitLab.com の Chat セッションには、`get_job_logs`（ネイティブ）と `gitlab_get_job`（MCP）の両方が渡されます。
- 古い GitLab バージョンや、ロールアウトのゲートが無効なインスタンスでは、MCP ツールが配信されません。これらのセッションでは、ネイティブツールを維持する必要があります。
- [提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)は、`tools:` キーを追加します。`tools:` コンポーネントに MCP ツールが渡されるのは、エントリがそのツールを選択した場合のみです。そこでは、ネイティブツールとその置き換えとなる MCP ツールを 1 つのツールとして数えます。エントリでは、`server: gitlab` 配下にネイティブ名で 1 回だけ指定します。

## 決定 {#decision}

- 置き換え（[決定 002](002_pairs_in_meta.md)、[決定 003](003_origin_rule.md)）は、`toolset:` と `tools:` コンポーネントで同じ条件のもとに実行します（[ルール 1](../_index.md#rules-that-apply-everywhere)）。そのため、1 つのセッション内の両方の種類のコンポーネントに、ペアの同じツールが渡されます。
- `toolset:` コンポーネントでは、私たちの MCP ツールが到着した場合に DWS はネイティブツールを除外し、それ以外の場合は維持します。
- `tools:` コンポーネントでは、ネイティブツールを指定するエントリに、ペアを置き換える場合は MCP ツールが渡され、それ以外の場合はネイティブツールが渡されます。`name: ["*"]` のようなパターンは、ペアごとに 1 つのツールを選択し、両方を選択することはありません。
- 提供している Chat と基本エージェントの設定は、ADR-005 の計画どおり `tools:` に移行できます。`origin` を送信しない GitLab バージョンは `toolset:` 設定を維持し、置き換えは一切行いません（[決定 003](003_origin_rule.md)）。
- この決定は、決定論的な `tool_name:` ステップを対象にしません。これらをどのように MCP ツールに移行するかは未解決の問題です（[基本的な設計領域](../_index.md#fundamental-design-areas)）。

## 結果 {#consequences}

- Chat と基本エージェントは、今すぐ MCP ツールに移行でき、設定を `tools:` に移行したときにも置き換えを維持できます。
- 私たちの MCP ツールが渡されないセッションでは、どちらの種類のコンポーネントでもネイティブツールを維持します。
- フローの作成者はネイティブツールを指定し、GitLab がそのツールを DWS と私たちの MCP サーバーのどちらで実装しているかを知る必要はありません。
- ルール 1 がペアの置き換えを許可する範囲は、両方の種類のコンポーネントに適用され、ここでの変更はありません。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| `toolset:` コンポーネントでのみ置き換えます（この決定の最初の版） | ADR-005 は提供している設定を `tools:` に移行するため、そこでは置き換えが一切実行されなくなります。 |
| 各設定を `tools:` に移行して MCP ツールを指定し、置き換えは行いません | 私たちの MCP サーバーが到着しないセッションには、ツールが渡されなくなります。 |
| `tools:` コンポーネントで両方のツールを指定し、DWS が片方を除外します | フローの作成者が、GitLab による各ツールの実装方法を把握する必要があります（[ai-assist!7550 のレビュー](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550#note_4157700881)）。 |
