---
title: 'Workato'
description: 'Workato に関するドキュメント'
date: 2026-01-05
upstream_path: /handbook/security/customer-support-operations/workato/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab で Workato を扱う方法について説明します。

{{% alert title="Technical Details" color="primary" %}}

- デプロイメントタイプ: `Special` (詳細は [Workato Playbook ドキュメント](https://internal.gitlab.com/handbook/it-enterprise-applications/organizational-structure/enterprise-applications-integrations/workato-playbook/) を参照してください)
- Customer Support Operations プロジェクト: https://app.workato.com/?fid=25218399#assets

{{% /alert %}}

## Workato を理解する

### Workato とは

[wikipedia](https://en.wikipedia.org/wiki/Workato) によると:

> Workato は、アプリケーション、データ、システムをまたいだ自動化、統合、人工知能 (AI) のオーケストレーションのためのクラウドベースのプラットフォームを提供する、米国の多国籍ソフトウェア会社です。

より広い意味では、Workato は Zendesk、GitLab.com など多くのシステムの機能を強化するために私たちが利用するツールです。

### Workato の項目を管理する方法

現在、私たちはすべての Workato の項目を Workato 自身の中で管理しています。

## レシピ

### 現在のレシピ

Customer Support Operations チームが現在使用しているレシピは次のとおりです:

- Development environment
  - [US Government Mid Ticket Feedback](https://app.workato.com/recipes/62792446-us-government-mid-ticket-feedback)
  - [Global Mid Ticket Feedback](https://app.workato.com/recipes/62791974-global-mid-ticket-feedback)
  - [Customer Effort Survey](https://app.workato.com/recipes/62789972-customer-effort-survey)
- Production environment
  - [US Government Mid Ticket Feedback](https://app.workato.com/recipes/66739791-us-government-mid-ticket-feedback)
  - [Global Mid Ticket Feedback](https://app.workato.com/recipes/66739789-global-mid-ticket-feedback)
  - [Customer Effort Survey](https://app.workato.com/recipes/66739788-customer-effort-survey)

### レシピの作成

Workato でレシピを作成する方法に関する情報は、[Workato のドキュメント](https://docs.workato.com/getting-started/build-first-recipe.html) を参照してください。

## 接続

### 現在の接続

Customer Support Operations チームが現在使用している接続は次のとおりです:

- Development environment
  - [US Government Mid Ticket Feedback](https://app.workato.com/connections/17441946)
  - [Global Mid Ticket Feedback](https://app.workato.com/connections/17441937)
  - [CES Processor](https://app.workato.com/connections/17441631)
- Production environment
  - [US Government Mid Ticket Feedback](https://app.workato.com/connections/18225737)
  - [Global Mid Ticket Feedback](https://app.workato.com/connections/18225736)
  - [CES Processor](https://app.workato.com/connections/18225735)

### 接続の作成

Workato で接続を作成する方法に関する情報は、[Workato のドキュメント](https://docs.workato.com/connections.html#connection-basics) を参照してください。
