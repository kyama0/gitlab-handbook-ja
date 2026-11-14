---
title: "DAP ツールの SSoT としての MCP サーバー ADR 003：私たちの MCP サーバーのツールがちょうど 1 つある場合だけネイティブツールを置き換える"
description: "DWS は私たちの MCP サーバーのツールがちょうど 1 つある場合だけネイティブツールを置き換え、他のサーバーやクライアントがネイティブツールを非表示にできないようにします。"
status: proposed
creation-date: "2026-10-28"
authors: [ "@terrichu" ]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/mcp_server_ssot_for_dap_tools/decisions/003_origin_rule/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: 2026-11-12T21:20:00-08:00
translated_at: "2026-11-14T09:10:14+00:00"
translator: codex
stale: false
---

## 背景 {#context}

DWS は複数の取得元から MCP ツールを受け取ります。置き換えによって GitLab が実装するネイティブツールが外れるため、その
代替ツールは私たちの MCP サーバーのものでなければなりません。現在 DWS が判断できるのは、Rails が
私たちの MCP サーバーと Orbit に設定する `trusted` が付いているかどうかと、クライアントから注入されたツールかどうかだけです。

## 決定 {#decision}

Workhorse は、この計画で実装する
[#635112](https://gitlab.com/gitlab-org/gitlab/-/work_items/635112)（非公開）のインターフェース仕様の変更により、各ツールのサーバーと取得元を DWS に送ります。DWS は、
以下のすべてが成り立つ場合だけ、ネイティブツールを MCP ツールに置き換えます。

- その名前のツールがちょうど 1 つ届いています。DWS はツールを登録する前に、届く際に数えます。
- そのツールのサーバーが私たちの MCP サーバーです。
- その取得元がクライアントではありません。
- そのツールの `com.gitlab/replaces` にネイティブツールが列挙されています。

それ以外の場合、ネイティブツールを残します。

## 影響 {#consequences}

- クライアントや他のサーバーは、同名のツールを提供してもネイティブツールを外すことはできません。
- インターフェース仕様の変更を含まない GitLab バージョンは、新しいフィールドも `com.gitlab/replaces` も送信しないため、そこで置き換えは
  起きません。
- Workhorse が処理しなかったリクエストでは、DWS はすべてのツールをクライアントから届いたものと見なすため、そこでも置き換えは
  起きません。DWS はトークンでこれらのリクエストを見分けます。DWS に直接接続するコードは、DWS が
  発行したトークンを保持します（[提案中の ADR-005](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/7550)）。

## 検討した代替案 {#alternatives-considered}

| 代替案 | 採用しない理由 |
|---|---|
| 名前だけで置き換える | 名前だけでは、ツールがどのサーバーから届いたかを証明できません。 |
| `trusted` と `gitlab_` という名前を使う | `trusted` は Orbit も対象とするため、Orbit を除外するには名前に頼るルールになります。 |

## 参考情報 {#references}

- [#635112](https://gitlab.com/gitlab-org/gitlab/-/work_items/635112)（非公開）
- [関連 Issue（非公開）](https://gitlab.com/gitlab-org/gitlab/-/work_items/636570)
