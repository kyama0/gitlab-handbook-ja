---
title: "Marketo テックスタックガイド"
description: "Marketo がどのように実装されているかのリファレンス。"
upstream_path: /handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

> **注:** アプリを参照するには **[Tech Stack Index](/handbook/business-technology/tech-stack/)** を、アプリを管理するには **[Tech Stack Applications](/handbook/business-technology/tech-stack-applications/)** を参照してください。


<p class="my-2 text-sm text-gray-600"><strong>Marketo</strong> — 詳細は <a href="https://handbook.gitlab.com/handbook/business-technology/tech-stack/" rel="external noopener">テックスタック (英語)</a> を参照してください。</p>


### インテグレーション

Marketo に接続されているさまざまなシステムを確認するには、[Marketo System Infrastructure Mapping FigJam](https://www.figma.com/file/efXfz35A2SRcGqB0SGCcMf/Marketo-System-Infrastructure-Mapping?type=whiteboard&node-id=0%3A1&t=Vgyw5KRPT0Zd38qT-1) をご覧ください。

### データモデル

Marketo はメールアドレスを一意の ID として利用するフラットデータベースです。`Person` オブジェクトがメインオブジェクトです。

### 主要なレポート / ダッシュボード
