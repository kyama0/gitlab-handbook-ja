---
title: '組織'
description: 'Zendesk 組織のドキュメント'
upstream_path: "/handbook/eta/css/zendesk/organizations/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:47:27+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、GitLab で Zendesk 組織を管理する方法を説明します。管理者は [管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`

{{% /alert %}}

## 組織を理解する

### 組織とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408882246298-Creating-organizations)によると:

> 組織は通常、エンドユーザーの集合ですが、エージェントを含むこともあります。

つまり、組織とは Zendesk 内の単なるユーザーの集合（グループによく似たもの）です。組織にはユーザーの一覧が含まれ、エンドユーザーとエージェントの両方を所属させられます。

また、組織は Salesforce から同期されるメタデータを格納するためにも使用し、このメタデータで SLA、ARR などを決定します（詳細については [組織フィールド](/handbook/eta/css/zendesk/organizations/fields)を参照）。このため、組織はお客様が有料サポートを利用する資格を得る仕組みで重要な役割を果たします。

### 組織の管理方法

組織（および組織内のメタデータ）はルーティングで非常に重要な役割を果たすため、複雑な管理方法を採用しています。

- 組織の作成・変更については、[Zendesk-Salesforce sync](/handbook/eta/css/zendesk-salesforce-sync/)を参照してください。
- 組織の削除については、[組織の削除](/handbook/eta/css/zendesk/organizations/deletion)を参照してください。
- ユーザーを組織に関連付ける方法については、[組織の関連付け](/handbook/eta/css/zendesk/organizations/association)を参照してください。

### 組織を見つける

組織を見つける最も簡単な方法は、その組織に紐づく Salesforce アカウントから検索することです。

それ以外の場合、別の検索方法で組織を見つける必要があります。詳細は、[検索に関するドキュメント](/handbook/eta/css/zendesk/searching/)を参照してください。

### 権限

既定では、組織は非公開のチケット表示に設定されています。組織内のユーザーは自分のチケットのみを閲覧・コメントでき、同じ組織内の他ユーザーが送信したチケットは閲覧できません。

一部の組織では、共有チケット表示の方が適しており、すべての組織メンバーが互いのチケットを閲覧し（必要に応じてコメントも）できます。これは、小規模なチームや内部チケットの透明性を必要とする組織に役立ちます。

拡張された権限や権限の管理については、[共有組織](/handbook/eta/css/zendesk/organizations/shared-orgs)のドキュメントを参照してください。

### ドメインマッチング

Zendesk にはドメインマッチングを行う機能がありますが、この機能に固有のセキュリティリスクは、使用で得られる利点を上回ると判断しました。

この決定により、2020 年 8 月以降、GitLab は Zendesk 組織にドメインを適用しません。この日付より前に適用された組織では、レガシー機能として残ります。

## 組織メモ

### Zendesk Global

私たちが使用する組織メモには 2 種類あります:

- Customer Support Systems の組織メモ
  - 組織自体の `Notes` と `Details` フィールドで Zendesk を通じて管理します。
- Support Team の組織メモ
  - Support の [Zendesk Global Organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations)で管理します。

組織にチケットが作成されると、[チケットプロセッサ](/handbook/eta/css/zendesk/tickets/processor)が実行され、両方を解析してチケット自体の内部コメントに取り込みます。

組織のメモを変更する必要がある場合、取るべき操作は所属チームにより異なります:

- Customer Support Systems: [組織のメモまたは詳細を変更する](#modifying-an-organizations-notes-or-details)を参照してください
- その他: Support の [Zendesk Global Organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations)にマージリクエストを作成する

### Zendesk US Government

このインスタンスのデータには市民権要件があるため、US Government インスタンスでは組織メモを少し異なる方法で管理します。データプライバシーの懸念から、内部メモはすべて Zendesk 自体で管理します。そのため、次のように区別します:

- `Notes` は Support Team の組織メモ用です
- `Details` は Customer Support Systems の組織メモ用です

組織にチケットが作成されると、[チケットプロセッサ](/handbook/eta/css/zendesk/tickets/processor)が実行され、両方を解析してチケット自体の内部コメントに取り込みます。

組織のメモを変更する必要がある場合、取るべき操作は所属チームにより異なります:

- Customer Support Systems: [組織の詳細を変更する](#modifying-an-organizations-notes-or-details)を参照してください
- その他: 支援を受けるには、Slack で Customer Support Systems に連絡してください

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルアクセスが必要です。

{{% /alert %}}

### 組織のメモまたは詳細を変更する

組織のメモを変更するには:

1. Zendesk 内で組織を見つける
1. 該当するテキストエリア内をクリックする
   - メモには `Notes`
   - 詳細には `Details`
1. 必要な変更を加える
1. 該当するテキストエリアの外側をクリックする

### 組織の権限を変更する

詳細については、[共有組織のドキュメント](/handbook/eta/css/zendesk/organizations/shared-orgs)を参照してください。

## 一般的な問題とトラブルシューティング

これは、必要に応じて項目を追加していく継続的なセクションです。
