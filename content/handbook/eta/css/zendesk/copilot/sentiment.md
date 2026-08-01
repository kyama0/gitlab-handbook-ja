---
title: 'センチメント'
description: 'Zendesk Copilot のセンチメントに関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/copilot/sentiment/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-27T13:51:40-05:00"
translated_at: "2026-07-31T07:01:08+09:00"
translator: codex
stale: false
---

## センチメントとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4550640560538-Automatically-classifying-tickets-with-intelligent-triage) によると：

> Intelligent triage は、トピック、センチメント、言語、製品名などのエンティティによって、新しいカスタマーサポートチケットを AI で自動的に分類します。これらの AI 分類をワークフローに組み込むことで、繰り返し発生するリクエストを自動化し、手動トリアージをなくし、エージェントをリアルタイムでガイドし、リスクの高いチケットに迅速に対応できます。

## 現在の設定

- Zendesk Global
  - Sandbox:
    - [x] Detect sentiment
    - Dynamic detection
      - [x] Update sentiment based on the latest interaction
    - Channels
      - Email and async
        - Web form
        - Email
        - Web service (API)
        - Closed ticket
      - Messaging: none
      - [ ] Voice
    - Exclusion conditions
      - [x] Skip triaging email, messaging, and other asynchronous tickets created by agents
  - Production:
    - [x] Detect sentiment
    - Dynamic detection
      - [x] Update sentiment based on the latest interaction
    - Channels
      - Email and async
        - Web form
        - Email
        - Web service (API)
        - Closed ticket
      - Messaging: none
      - [ ] Voice
    - Exclusion conditions
      - [x] Skip triaging email, messaging, and other asynchronous tickets created by agents
- Zendesk US Government
  - Sandbox:
    - [x] Detect sentiment
    - Dynamic detection
      - [x] Update sentiment based on the latest interaction
    - Channels
      - Email and async
        - Web form
        - Email
        - Web service (API)
        - Closed ticket
      - Messaging: none
      - [ ] Voice
    - Exclusion conditions
      - [x] Skip triaging email, messaging, and other asynchronous tickets created by agents
  - Production:
    - [x] Detect sentiment
    - Dynamic detection
      - [x] Update sentiment based on the latest interaction
    - Channels
      - Email and async
        - Web form
        - Email
        - Web service (API)
        - Closed ticket
      - Messaging: none
      - [ ] Voice
    - Exclusion conditions
      - [x] Skip triaging email, messaging, and other asynchronous tickets created by agents
