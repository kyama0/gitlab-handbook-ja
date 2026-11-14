---
title: "DAP ツールの SSoT としての MCP サーバー ADR 004：モデルには MCP ツール自身の名前を提示する"
description: "置き換え後、モデルは MCP ツール自身の名前で呼び出し、その説明にはどのネイティブツールを置き換えるかを記載します。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/004_tool_name/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:12:02+00:00"
translator: codex
stale: false
---

## 背景 {#context}

置き換え後、モデルは MCP ツールを呼び出します。GitLab が提供するプロンプトやユーザーが書くプロンプトには、たとえば
「`get_job_logs` を使う」のように、まだネイティブツール名が含まれる場合があります。MCP サーバーは `tools/call` でエイリアスを解決しますが、`tools/list` には
エイリアスを含めず、Workhorse は `tools/list` で確認した名前だけをルーティングします。

## 決定 {#decision}

モデルには、MCP ツールをその固有の名前である `gitlab_get_job` で提示します。DWS は `com.gitlab/replaces` を基に、モデルに渡す
説明に「`get_job_logs` を置き換えます。」を追加します。

## 影響 {#consequences}

- ネイティブツール名を含むプロンプトも、引き続きモデルを正しいツールへ導くため、移行中にプロンプトを変更する必要は
  ありません。
- この一文は DWS が追加するため、他の MCP クライアントには一切表示されません。
- ネイティブツールを削除する際に、GitLab が提供するプロンプトを新しい名前に更新します。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| MCP ツールをネイティブツール名で提示する | `tools/list` でセッションごとにエイリアスを列挙する必要があります。また、チャットを利用する側も登録済みの MCP ツールをすべて追加するため、モデルに両方の名前が見える可能性があります。 |
| 先にプロンプトを書き換える | 保存済みのエージェントバージョンは編集できず、ユーザーのプロンプトを私たちが変更することもできません。 |
