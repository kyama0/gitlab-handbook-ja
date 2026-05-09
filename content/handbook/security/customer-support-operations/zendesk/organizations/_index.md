---
title: '組織'
description: 'Zendesk 組織に関するドキュメント'
date: 2025-12-30
upstream_path: /handbook/security/customer-support-operations/zendesk/organizations/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk 組織の管理方法について説明します。管理者は [管理者向けタスク](#administrator-tasks) セクションを確認してください。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`

{{% /alert %}}

## 組織を理解する

### 組織とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408882246298-Creating-organizations) より:

> 組織は通常、エンドユーザーのコレクションですが、エージェントを含むこともできます。

つまり、組織は単に Zendesk のユーザーのコレクションです (グループのようなもの)。ユーザーのリスト (エンドユーザーとエージェントの両方が組織に存在できます) を含みます。

私たちはこれを (Salesforce から同期した) メタデータの保存にも使い、SLA、ARR などを判断するために使用します ([組織フィールド](/handbook/security/customer-support-operations/zendesk/organizations/fields) を参照)。このため、有料サポートのエンタイトルメントを顧客が受ける方法において、組織は重要な役割を果たします。

### 組織の管理方法

組織 (とその中のメタデータ) はルーティングにおいて重要な役割を果たすため、組織を管理するための複雑な方法を導入しています。

- 組織の作成と修正については、[Zendesk-Salesforce sync](/handbook/security/customer-support-operations/zendesk-salesforce-sync/) を参照してください。
- 組織の削除については、[組織削除](/handbook/security/customer-support-operations/zendesk/organizations/deletion) を参照してください。
- 組織へのユーザーの関連付けについては、[組織関連付け](/handbook/security/customer-support-operations/zendesk/organizations/association) を参照してください。

### 組織の検索

組織を見つける最も簡単な方法は、組織に紐づいた Salesforce アカウントで検索することです。

それ以外の場合は、代替の検索手段を使って組織を見つける必要があります。詳細については [検索ドキュメント](/handbook/security/customer-support-operations/zendesk/searching/) を参照してください。

### 権限

デフォルトでは、組織はチケットの可視性をプライベートに設定されています。同じ組織のユーザーは自分のチケットしか閲覧やコメントができず、他のユーザーが提出したチケットは見えません。

一部の組織については、共有チケット可視性のほうが適切な場合があり、組織のすべてのメンバーがお互いのチケットを表示 (および場合によってはコメント) できます。これは、小規模なチームや内部チケットの透明性を必要とする組織に役立ちます。

権限の拡張や権限管理の詳細については、[共有組織](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs) ドキュメントを参照してください。

### ドメインマッチング

Zendesk にはドメインマッチング機能がありますが、私たちはこの機能の使用に内在するセキュリティリスクが、その使用から得られるメリットを上回ると判断しました。

この決定により、2020 年 8 月以降、GitLab は Zendesk 組織にドメインを適用しません。この日付より前に適用された組織については、レガシー機能として残ります。

## 組織のメモ

### Zendesk Global

私たちが利用する 2 つの形式の組織メモがあります:

- Customer Support Operations 組織メモ
  - Zendesk の組織自体の `Notes` および `Details` フィールド経由で管理されます。
- Support チーム組織メモ
  - Support の [Zendesk Global Organizations プロジェクト](https://gitlab.com/gitlab-com/support/zendesk-global/organizations) 経由で管理されます。

組織でチケットが作成されると、[チケットプロセッサー](/handbook/security/customer-support-operations/zendesk/tickets/processor) が両方を解析してチケット自体への内部コメントとして追加します。

組織のメモを修正する必要がある場合、対応するアクションは所属チームによって異なります:

- Customer Support Operations: [組織のメモまたは詳細の修正](#modifying-an-organizations-notes-or-details) を参照
- それ以外: Support の [Zendesk Global Organizations プロジェクト](https://gitlab.com/gitlab-com/support/zendesk-global/organizations) でマージリクエストを作成

### Zendesk US Government

このインスタンス内のデータには国籍要件があるため、US Government インスタンスでは組織メモを少し異なる形で管理します。データプライバシーの懸念から、すべての内部メモを Zendesk 自体で管理しています。そのため、以下のように分けています:

- `Notes` は Support チーム組織メモ用
- `Details` は Customer Support Operations 組織メモ用

組織でチケットが作成されると、[チケットプロセッサー](/handbook/security/customer-support-operations/zendesk/tickets/processor) が両方を解析してチケット自体への内部コメントとして追加します。

組織のメモを修正する必要がある場合、対応するアクションは所属チームによって異なります:

- Customer Support Operations: [組織の詳細の修正](#modifying-an-organizations-notes-or-details) を参照
- それ以外: 支援のため Slack 経由で Customer Support Operations に連絡

## 管理者向けタスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセス権を必要とします。

{{% /alert %}}

### 組織のメモまたは詳細の修正 {#modifying-an-organizations-notes-or-details}

組織のメモを修正するには:

1. Zendesk 内で組織を見つけます
1. 関連するテキストエリアをクリックします
   - メモは `Notes`
   - 詳細は `Details`
1. 必要な変更を行います
1. 関連するテキストエリアの外側をクリックします

### 組織の権限の変更

詳細については、[共有組織ドキュメント](/handbook/security/customer-support-operations/zendesk/organizations/shared-orgs) を参照してください。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。
