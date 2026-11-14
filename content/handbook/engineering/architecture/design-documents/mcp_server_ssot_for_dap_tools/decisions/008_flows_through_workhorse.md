---
title: "DAP ツールの SSoT としての MCP サーバー ADR 008: フローは Workhorse 経由で MCP ツールを実行します"
description: "フローは Chat と同様に Workhorse 経由で MCP ツールを実行するため、新しい経路は構築しません。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/008_flows_through_workhorse/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:14:34+00:00"
translator: codex
stale: false
---

## 背景 {#context}

現在、フローには MCP ツールが渡されません。あるフロー設定のコメントには、MCP ツールはクライアント上で実行されるため、サーバー側のフローでは実行できないとあります。結果としてはそのとおりでしたが、その理由は Rails が私たちの MCP サーバーをフローに送信していないためです。

## 決定 {#decision}

フロー内の MCP ツールは、Chat と同じように Workhorse 経由で実行します。新しい経路は構築しません。

## 結果 {#consequences}

- GitLab 18.7 以降、CI で実行するフローは Workhorse の websocket 経由で DWS に接続します。Workhorse は Rails が送信する設定から MCP ツールを起動し、ツールの呼び出しを自ら実行します。認識できないツールだけをクライアントに渡します。
- 不足している部分は、この計画の範囲外です。Rails は私たちの MCP サーバーをフローに送信しておらず、フロー設定では MCP ツールを指定できません。[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)がその両方を扱っており、まだマージされていません。
- GitLab 18.6 以前は CI から DWS に直接接続するため、そこでのフローには MCP ツールが渡されません。いずれにしても、`_meta` 内のペアには、より新しい GitLab バージョンが必要です。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| DWS がワークフロートークンを使用して MCP サーバーを直接呼び出します | 同じ呼び出しのための 2 つ目の経路となり、Chat に適用される Workhorse の制御の対象外になります。 |
