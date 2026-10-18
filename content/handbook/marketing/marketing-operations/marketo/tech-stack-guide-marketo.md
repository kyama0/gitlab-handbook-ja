---
title: "Marketo Tech Stack ガイド"
description: "Marketo がどのように実装されているかのリファレンス。"
upstream_path: /handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/
upstream_sha: 4684d72f27f3401d3ae72a26d72ae46eaeaab929
translated_at: "2026-10-18T21:07:28Z"
translator: claude
stale: false
lastmod: "2026-10-16T19:52:00+02:00"
---

> **注:** アプリを参照するには **[Tech Stack Index](/handbook/business-technology/tech-stack/)**を、アプリを管理するには **[Tech Stack Applications](/handbook/business-technology/tech-stack-applications/)**を参照してください。

### インテグレーション

Marketo に接続されているさまざまなシステムを確認するには、[Marketo System Infrastructure Mapping FigJam](https://www.figma.com/file/efXfz35A2SRcGqB0SGCcMf/Marketo-System-Infrastructure-Mapping?type=whiteboard&node-id=0%3A1&t=Vgyw5KRPT0Zd38qT-1)をご覧ください。

### データモデル

Marketo はメールアドレスを一意の ID として利用するフラットデータベースです。`Person` オブジェクトがメインオブジェクトです。

### 主要なレポート / ダッシュボード
