---
title: '提案'
description: 'Zendesk Copilot の提案に関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/copilot/suggestions/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-27T13:51:40-05:00"
translated_at: "2026-07-31T07:01:08+09:00"
translator: codex
stale: false
---

## 提案とは

提案は、実行する Copilot の提案アクションに基づいてグループ化された、さまざまな Zendesk Copilot 機能です：

- 初回返信
- マージするチケット

- 類似チケットを表示
- 会話を要約
- ヘッダーにインテントを表示
- ヘッダーにセンチメントを表示
- チケットの担当者を提案 (EAP)

## 現在の設定

- Zendesk Global
  - Sandbox:
    - [ ] Suggest first replies
      - Who has access:
        - All groups
    - [x] Suggest tickets to merge
      - Who has access:
        - All groups
    - [x] Show similiar tickets
      - Who has access:
        - All groups
    - [ ] Generate live transcriptions and suggestions during phone calls
      - Who has access:
        - All groups
    - [ ] Summarize conversations
      - Who has access:
        - All groups
    - [x] Show intent in the header
    - [x] Show sentiment in the header
    - [ ] Suggest ticket assignees (EAP)
  - Production:
    - [ ] Suggest first replies
      - Who has access:
        - All groups
    - [x] Suggest tickets to merge
      - Who has access:
        - All groups
    - [x] Show similiar tickets
      - Who has access:
        - All groups
    - [ ] Generate live transcriptions and suggestions during phone calls
      - Who has access:
        - All groups
    - [ ] Summarize conversations
      - Who has access:
        - All groups
    - [x] Show intent in the header
    - [x] Show sentiment in the header
    - [ ] Suggest ticket assignees (EAP)
- Zendesk US Government
  - Sandbox:
    - [x] Suggest first replies
      - Who has access:
        - All groups
    - [x] Suggest tickets to merge
      - Who has access:
        - All groups
    - [x] Show similiar tickets
      - Who has access:
        - All groups
    - [ ] Generate live transcriptions and suggestions during phone calls
      - Who has access:
        - All groups
    - [x] Summarize conversations
      - Who has access:
        - All groups
      - [x] Include internal notes in summary
    - [x] Show intent in the header
    - [x] Show sentiment in the header
    - [ ] Suggest ticket assignees (EAP)
  - Production:
    - [x] Suggest first replies
      - Who has access:
        - All groups
    - [x] Suggest tickets to merge
      - Who has access:
        - All groups
    - [x] Show similiar tickets
      - Who has access:
        - All groups
    - [ ] Generate live transcriptions and suggestions during phone calls
      - Who has access:
        - All groups
    - [x] Summarize conversations
      - Who has access:
        - All groups
      - [x] Include internal notes in summary
    - [x] Show intent in the header
    - [x] Show sentiment in the header
    - [ ] Suggest ticket assignees (EAP)
